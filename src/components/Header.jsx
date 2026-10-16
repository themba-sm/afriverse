import { useEffect, useRef, useState } from 'react';
import { NAV } from '../data/site.js';
import { toSection } from '../lib/nav.js';
import { LogoEmblem, LogoWordmark } from './Logo.jsx';
import { Menu, Close, Arrow } from './Icons.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on Escape, lock body scroll and trap focus while the menu is open.
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const first = panelRef.current?.querySelector('a, button');
    first?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
      if (e.key === 'Tab' && panelRef.current) {
        const f = [...panelRef.current.querySelectorAll('a, button')].concat(toggleRef.current);
        const firstEl = f[0]; const lastEl = f[f.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
        else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    const mq = window.matchMedia('(min-width: 980px)');
    const onMq = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onMq);
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onKey); mq.removeEventListener('change', onMq); };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="container site-header__bar">
        <a href="#top" className="brand-link" aria-label="AFRIVERSE home" onClick={close}>
          <LogoEmblem size={38} />
          <LogoWordmark height={20} />
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <ul>
            {NAV.map((n) => {
              const sec = n.href.replace('#', '');
              return (<li key={n.href}><a href={n.href} onClick={toSection(sec)}>{n.label}</a></li>);
            })}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a href="#contact" className="btn btn--primary btn--sm header-cta" onClick={toSection('contact')}>Request a Consultation</a>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={panelRef} className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {NAV.map((n) => {
              const sec = n.href.replace('#', '');
              return (<li key={n.href}><a href={n.href} onClick={(e) => { close(); toSection(sec)(e); }}>{n.label}<Arrow width={18} height={18} /></a></li>);
            })}
          </ul>
        </nav>
        <a href="#contact" className="btn btn--primary btn--block" onClick={(e) => { close(); toSection('contact')(e); }}>Request a Consultation</a>
      </div>
    </header>
  );
}
