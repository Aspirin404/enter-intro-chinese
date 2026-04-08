import { useEffect, useRef, useState, useCallback } from 'react';
import { getSlideHTML, SLIDE_TITLES, SLIDE_ICONS } from './data/slides';
import './slides.css';

const TOTAL = 14;

export default function App() {
  const [current, setCurrent] = useState(0);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [hintsOpen, setHintsOpen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
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

  // Keyboard & touch
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT') return;
      switch (e.key) {
        case 'ArrowRight': case 'ArrowDown': next(); break;
        case 'ArrowLeft': case 'ArrowUp': prev(); break;
        case 'f': case 'F':
          if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
          else document.exitFullscreen?.();
          break;
        case 'o': case 'O': setOverviewOpen(v => !v); break;
        case 'Escape': setOverviewOpen(false); setHintsOpen(false); break;
        case '?': setHintsOpen(v => !v); break;
        case 'Home': goTo(0); break;
        case 'End': goTo(TOTAL - 1); break;
      }
    };
    let touchStartX = 0;
    const onTouchStart = (e: TouchEvent) => { touchStartX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [next, prev, goTo]);

  const pct = TOTAL > 1 ? (current / (TOTAL - 1)) * 100 : 100;

  return (
    <div id="app">
      {/* Progress Bar */}
      <div id="progress-bar"><div id="progress-fill" style={{ width: `${pct}%` }} /></div>

      {/* Header */}
      <div id="header">
        <div className="hd-logo">
          <div className="logo-icon">
            <img src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/e65c.png" alt="Enter.pro" crossOrigin="anonymous" />
          </div>
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
        <button className="ctrl-btn" title="&#x5E7B;&#x706F;&#x7247;&#x603B;&#x89C8; (O)" onClick={() => setOverviewOpen(v => !v)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
        </button>
        <button className="ctrl-btn" title="&#x4E0A;&#x4E00;&#x5F20; (&#x2190;)" onClick={() => prev()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div id="dots">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <div key={i} className={`dot${i === current ? ' is-active' : ''}`} title={SLIDE_TITLES[i]} onClick={() => goTo(i)} />
          ))}
        </div>
        <button className="ctrl-btn" title="&#x4E0B;&#x4E00;&#x5F20; (&#x2192;)" onClick={() => next()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <button className="ctrl-btn" title="&#x952E;&#x76D8;&#x5FEB;&#x6377;&#x952E; (?)" onClick={() => setHintsOpen(v => !v)}>?</button>
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
