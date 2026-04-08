import { useEffect, useRef, useState, useCallback } from 'react';
import { getSlideHTML, SLIDE_TITLES, SLIDE_ICONS } from './data/slides';
import './slides.css';

const TOTAL = 14;

export default function App() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [hintsOpen, setHintsOpen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const playTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentRef = useRef(current);
  currentRef.current = current;

  // Render slides into DOM on mount
  useEffect(() => {
    if (stageRef.current) {
      stageRef.current.innerHTML = getSlideHTML().join('\n');
    }
  }, []);

  // Handle slide transitions
  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL || index === currentRef.current) return;
    const stage = stageRef.current;
    if (!stage) return;

    const slides = stage.querySelectorAll('.slide');
    const forward = index > currentRef.current;
    const prevSlide = slides[currentRef.current] as HTMLElement;
    const nextSlide = slides[index] as HTMLElement;

    // Position incoming slide off-screen
    nextSlide.classList.remove('is-active', 'is-leaving-left', 'is-leaving-right', 'is-enter-from-right', 'is-enter-from-left');
    nextSlide.classList.add(forward ? 'is-enter-from-right' : 'is-enter-from-left');
    nextSlide.getBoundingClientRect(); // force reflow

    // Animate outgoing
    prevSlide.classList.remove('is-active');
    prevSlide.classList.add(forward ? 'is-leaving-left' : 'is-leaving-right');

    // Animate incoming
    nextSlide.classList.remove('is-enter-from-right', 'is-enter-from-left');
    nextSlide.classList.add('is-active');

    setTimeout(() => {
      prevSlide.classList.remove('is-leaving-left', 'is-leaving-right');
    }, 520);

    setCurrent(index);
  }, []);

  const next = useCallback(() => goTo((currentRef.current + 1) % TOTAL), [goTo]);
  const prev = useCallback(() => goTo((currentRef.current - 1 + TOTAL) % TOTAL), [goTo]);

  // Autoplay
  const stopPlay = useCallback(() => {
    setPlaying(false);
    if (playTimerRef.current) { clearInterval(playTimerRef.current); playTimerRef.current = null; }
  }, []);

  const togglePlay = useCallback(() => {
    if (playing) {
      stopPlay();
    } else {
      setPlaying(true);
      playTimerRef.current = setInterval(() => {
        const nextIdx = (currentRef.current + 1) % TOTAL;
        goTo(nextIdx);
      }, 4500);
    }
  }, [playing, stopPlay, goTo]);

  // Keyboard & touch
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT') return;
      switch (e.key) {
        case 'ArrowRight': case 'ArrowDown': stopPlay(); next(); break;
        case 'ArrowLeft': case 'ArrowUp': stopPlay(); prev(); break;
        case ' ': e.preventDefault(); togglePlay(); break;
        case 'f': case 'F':
          if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
          else document.exitFullscreen?.();
          break;
        case 'o': case 'O': setOverviewOpen(v => !v); break;
        case 'Escape': setOverviewOpen(false); setHintsOpen(false); break;
        case '?': setHintsOpen(v => !v); break;
        case 'Home': stopPlay(); goTo(0); break;
        case 'End': stopPlay(); goTo(TOTAL - 1); break;
      }
    };
    let touchStartX = 0;
    const onTouchStart = (e: TouchEvent) => { touchStartX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) { stopPlay(); dx < 0 ? next() : prev(); }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [next, prev, stopPlay, togglePlay, goTo]);

  // Cleanup timer on unmount
  useEffect(() => () => { if (playTimerRef.current) clearInterval(playTimerRef.current); }, []);

  const pct = TOTAL > 1 ? (current / (TOTAL - 1)) * 100 : 100;

  return (
    <div id="app">
      {/* Progress Bar */}
      <div id="progress-bar"><div id="progress-fill" style={{ width: `${pct}%` }} /></div>

      {/* Header */}
      <div id="header">
        <div className="hd-logo">
          <div className="logo-icon">&lt;/&gt;</div>
          <span>Enter.pro</span>
        </div>
        <div className="hd-right">
          <div id="slide-counter"><span>{current + 1}</span> / <span>{TOTAL}</span></div>
          <button id="btn-fullscreen" title="\u5168\u5C4F (F)" onClick={() => {
            if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
            else document.exitFullscreen?.();
          }}>{'\u26F6'}</button>
        </div>
      </div>

      {/* Stage */}
      <div id="stage" ref={stageRef} />

      {/* Controls */}
      <div id="controls">
        <button className="ctrl-btn" title="\u5E7B\u706F\u7247\u603B\u89C8 (O)" onClick={() => setOverviewOpen(v => !v)}>{'\u229E'}</button>
        <button className="ctrl-btn" title="\u4E0A\u4E00\u5F20 (\u2190)" onClick={() => { stopPlay(); prev(); }}>{'\u2190'}</button>
        <div id="dots">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <div key={i} className={`dot${i === current ? ' is-active' : ''}`} title={SLIDE_TITLES[i]} onClick={() => { stopPlay(); goTo(i); }} />
          ))}
        </div>
        <button id="btn-play" className={playing ? 'is-playing' : ''} title={playing ? '\u6682\u505C (Space)' : '\u81EA\u52A8\u64AD\u653E (Space)'} onClick={togglePlay}>{playing ? '\u23F8' : '\u25B6'}</button>
        <button className="ctrl-btn" title="\u4E0B\u4E00\u5F20 (\u2192)" onClick={() => { stopPlay(); next(); }}>{'\u2192'}</button>
        <button className="ctrl-btn" title="\u952E\u76D8\u5FEB\u6377\u952E (?)" onClick={() => setHintsOpen(v => !v)}>?</button>
      </div>

      {/* Overview */}
      <div id="overview" className={overviewOpen ? 'is-open' : ''}>
        <div id="overview-header">
          <h2>{'\u5E7B\u706F\u7247\u603B\u89C8'}</h2>
          <button id="btn-close-overview" onClick={() => setOverviewOpen(false)}>{'\u2715'}</button>
        </div>
        <div id="overview-grid">
          {SLIDE_TITLES.map((title, i) => (
            <div key={i} className={`ov-thumb${i === current ? ' is-current' : ''}`} onClick={() => { goTo(i); setOverviewOpen(false); }}>
              <span className="ov-thumb-num">{i + 1}</span>
              <div className="ov-thumb-icon">{SLIDE_ICONS[i]}</div>
              <div className="ov-thumb-title">{title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyboard Hints */}
      {hintsOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#1a1a1a', borderRadius: 12, padding: '32px 40px', minWidth: 300 }}>
            <h3 style={{ color: '#fff', fontSize: 16, marginBottom: 20 }}>{'\u952E\u76D8\u5FEB\u6377\u952E'}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '8px 20px', fontSize: 12 }}>
              <kbd style={{ background: '#333', color: '#fff', padding: '3px 8px', borderRadius: 4 }}>{'\u2190 \u2192'}</kbd><span style={{ color: '#888' }}>{'\u4E0A / \u4E0B\u4E00\u5F20'}</span>
              <kbd style={{ background: '#333', color: '#fff', padding: '3px 8px', borderRadius: 4 }}>Space</kbd><span style={{ color: '#888' }}>{'\u81EA\u52A8\u64AD\u653E'}</span>
              <kbd style={{ background: '#333', color: '#fff', padding: '3px 8px', borderRadius: 4 }}>O</kbd><span style={{ color: '#888' }}>{'\u5E7B\u706F\u7247\u603B\u89C8'}</span>
              <kbd style={{ background: '#333', color: '#fff', padding: '3px 8px', borderRadius: 4 }}>F</kbd><span style={{ color: '#888' }}>{'\u5168\u5C4F'}</span>
              <kbd style={{ background: '#333', color: '#fff', padding: '3px 8px', borderRadius: 4 }}>Esc</kbd><span style={{ color: '#888' }}>{'\u5173\u95ED\u9762\u677F'}</span>
              <kbd style={{ background: '#333', color: '#fff', padding: '3px 8px', borderRadius: 4 }}>?</kbd><span style={{ color: '#888' }}>{'\u663E\u793A\u5FEB\u6377\u952E'}</span>
            </div>
            <button onClick={() => setHintsOpen(false)} style={{ marginTop: 24, width: '100%', padding: 10, background: 'var(--red)', color: '#fff', border: 'none', borderRadius: 7, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>{'\u5173\u95ED'}</button>
          </div>
        </div>
      )}
    </div>
  );
}
