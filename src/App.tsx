import { useEffect, useRef, useState, useCallback } from 'react';
import { getSlideHTML, SLIDE_ICONS } from './data/slides';
import { getContent, type Locale } from './data/content';
import './slides.css';

const TOTAL = 14;
const LOGO_URL = 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/e65c.png';

function getInitialLocale(): Locale {
  const p = new URLSearchParams(window.location.search);
  const lang = p.get('lang');
  if (lang === 'en' || lang === 'zh') return lang;
  return navigator.language.startsWith('zh') ? 'zh' : 'en';
}

function getInitialSlide(): number {
  const p = new URLSearchParams(window.location.search);
  const s = parseInt(p.get('slide') || '1', 10);
  return Math.max(0, Math.min(TOTAL - 1, s - 1));
}

function updateURL(slide: number, locale: Locale) {
  const url = new URL(window.location.href);
  url.searchParams.set('slide', String(slide + 1));
  url.searchParams.set('lang', locale);
  window.history.replaceState(null, '', url.toString());
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const [current, setCurrent] = useState(getInitialSlide);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [hintsOpen, setHintsOpen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(current);
  currentRef.current = current;

  const C = getContent(locale);

  // Dynamic SEO
  useEffect(() => {
    const title = locale === 'zh'
      ? 'Enter.pro — AI 驱动的 Web 开发平台 | 产品使用手册'
      : 'Enter.pro — AI-Powered Web Development Platform | Product Guide';
    const desc = locale === 'zh'
      ? 'Enter.pro 是 AI 驱动的 Web 开发平台，用自然语言构建网站，一键部署。完整产品指南与最佳实践。'
      : 'Enter.pro is an AI-powered web development platform. Build websites with natural language, deploy in one click.';
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', desc);
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
  }, [locale]);

  // Render slides into DOM
  useEffect(() => {
    if (!stageRef.current) return;
    stageRef.current.innerHTML = getSlideHTML(locale).join('\n');
    const slides = stageRef.current.querySelectorAll('.slide');
    slides.forEach(s => s.classList.remove('is-active'));
    slides[currentRef.current]?.classList.add('is-active');
  }, [locale]);

  // Handle slide transitions
  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL || index === currentRef.current) return;
    const stage = stageRef.current;
    if (!stage) return;

    const slides = stage.querySelectorAll('.slide');
    const forward = index > currentRef.current;
    const prevSlide = slides[currentRef.current] as HTMLElement;
    const nextSlide = slides[index] as HTMLElement;

    nextSlide.classList.remove('is-active', 'is-leaving-left', 'is-leaving-right', 'is-enter-from-right', 'is-enter-from-left');
    nextSlide.classList.add(forward ? 'is-enter-from-right' : 'is-enter-from-left');
    nextSlide.getBoundingClientRect();

    prevSlide.classList.remove('is-active');
    prevSlide.classList.add(forward ? 'is-leaving-left' : 'is-leaving-right');

    nextSlide.classList.remove('is-enter-from-right', 'is-enter-from-left');
    nextSlide.classList.add('is-active');

    setTimeout(() => {
      prevSlide.classList.remove('is-leaving-left', 'is-leaving-right');
    }, 520);

    setCurrent(index);
    updateURL(index, locale);
  }, [locale]);

  const next = useCallback(() => goTo((currentRef.current + 1) % TOTAL), [goTo]);
  const prev = useCallback(() => goTo((currentRef.current - 1 + TOTAL) % TOTAL), [goTo]);

  const toggleLocale = useCallback(() => {
    setLocale(prev => {
      const next = prev === 'zh' ? 'en' : 'zh';
      updateURL(currentRef.current, next);
      return next;
    });
  }, []);

  // Keyboard & touch
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT') return;
      switch (e.key) {
        case 'ArrowRight': case 'ArrowDown': next(); break;
        case 'ArrowLeft': case 'ArrowUp': prev(); break;
        case ' ': case 'Enter': e.preventDefault(); next(); break;
        case 'f': case 'F':
          if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
          else document.exitFullscreen?.();
          break;
        case 'o': case 'O': setOverviewOpen(v => !v); break;
        case 'Escape': setOverviewOpen(false); setHintsOpen(false); break;
        case '?': setHintsOpen(v => !v); break;
        case 'Home': goTo(0); break;
        case 'End': goTo(TOTAL - 1); break;
        case 'l': case 'L': toggleLocale(); break;
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
  }, [next, prev, goTo, toggleLocale]);

  const pct = TOTAL > 1 ? (current / (TOTAL - 1)) * 100 : 100;

  return (
    <div id="app">
      {/* Progress Bar */}
      <div id="progress-bar"><div id="progress-fill" style={{ width: `${pct}%` }} /></div>

      {/* Header */}
      <div id="header">
        <div className="hd-logo">
          <div className="logo-icon">
            <img src={LOGO_URL} alt="Enter.pro" crossOrigin="anonymous" />
          </div>
          <span>Enter.pro</span>
        </div>
        <div className="hd-right">
          <button
            className="lang-toggle"
            title={locale === 'zh' ? 'Switch to English (L)' : '\u5207\u6362\u4E2D\u6587 (L)'}
            onClick={toggleLocale}
          >
            {locale === 'zh' ? 'EN' : '\u4E2D'}
          </button>
          <div id="slide-counter"><span>{current + 1}</span> / <span>{TOTAL}</span></div>
          <button id="btn-fullscreen" title={C.ui.fullscreenBtn} onClick={() => {
            if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
            else document.exitFullscreen?.();
          }}>{'\u26F6'}</button>
        </div>
      </div>

      {/* Stage */}
      <div id="stage" ref={stageRef} />

      {/* Controls */}
      <div id="controls">
        <button className="ctrl-btn" title={C.ui.overviewBtn} onClick={() => setOverviewOpen(v => !v)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
        </button>
        <button className="ctrl-btn" title={C.ui.prevBtn} onClick={() => prev()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div id="dots">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <div key={i} className={`dot${i === current ? ' is-active' : ''}`} title={C.slideTitles[i]} onClick={() => goTo(i)} />
          ))}
        </div>
        <button className="ctrl-btn" title={C.ui.nextBtn} onClick={() => next()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <button className="ctrl-btn" title={C.ui.shortcutsBtn} onClick={() => setHintsOpen(v => !v)}>?</button>
      </div>

      {/* Overview */}
      <div id="overview" className={overviewOpen ? 'is-open' : ''}>
        <div id="overview-header">
          <h2>{C.ui.slideOverview}</h2>
          <button id="btn-close-overview" onClick={() => setOverviewOpen(false)}>{'\u2715'}</button>
        </div>
        <div id="overview-grid">
          {C.slideTitles.map((title, i) => (
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
            <h3 style={{ color: '#fff', fontSize: 16, marginBottom: 20 }}>{C.ui.keyboardShortcuts}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '8px 20px', fontSize: 12 }}>
              <kbd style={{ background: '#333', color: '#fff', padding: '3px 8px', borderRadius: 4 }}>{'\u2190 \u2192'}</kbd><span style={{ color: '#888' }}>{C.ui.prevNext}</span>
              <kbd style={{ background: '#333', color: '#fff', padding: '3px 8px', borderRadius: 4 }}>O</kbd><span style={{ color: '#888' }}>{C.ui.slideOverview}</span>
              <kbd style={{ background: '#333', color: '#fff', padding: '3px 8px', borderRadius: 4 }}>F</kbd><span style={{ color: '#888' }}>{C.ui.fullscreen}</span>
              <kbd style={{ background: '#333', color: '#fff', padding: '3px 8px', borderRadius: 4 }}>L</kbd><span style={{ color: '#888' }}>{locale === 'zh' ? '\u5207\u6362\u82F1\u6587' : 'Switch to Chinese'}</span>
              <kbd style={{ background: '#333', color: '#fff', padding: '3px 8px', borderRadius: 4 }}>Esc</kbd><span style={{ color: '#888' }}>{C.ui.closePanel}</span>
              <kbd style={{ background: '#333', color: '#fff', padding: '3px 8px', borderRadius: 4 }}>?</kbd><span style={{ color: '#888' }}>{C.ui.showShortcuts}</span>
            </div>
            <button onClick={() => setHintsOpen(false)} style={{ marginTop: 24, width: '100%', padding: 10, background: 'var(--red)', color: '#fff', border: 'none', borderRadius: 7, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>{C.ui.close}</button>
          </div>
        </div>
      )}
    </div>
  );
}
