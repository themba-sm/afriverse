import { useRef, useState } from 'react';
import { INDUSTRIES } from '../data/site.js';
import { Check, Arrow } from '../components/Icons.jsx';

/* Accessible tabs: roving tabindex, arrow/Home/End keys. */
export default function Industries() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const current = INDUSTRIES[active];

  const onKeyDown = (e) => {
    const n = INDUSTRIES.length;
    let next = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (active + 1) % n;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (active - 1 + n) % n;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = n - 1;
    if (next !== null) { e.preventDefault(); setActive(next); tabs.current[next]?.focus(); }
  };

  return (
    <section id="industries" className="section section--charcoal" aria-labelledby="industries-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Industry solutions</p>
          <h2 id="industries-title" className="h2">Built for the way your industry actually runs.</h2>
          <p className="lead">Every sector has its own rhythm of enquiries, bookings and follow-up. Select yours to see how automation can fit.</p>
        </div>

        <div className="industries">
          <div className="industries__tabs" role="tablist" aria-label="Industries" aria-orientation="vertical" onKeyDown={onKeyDown}>
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind.id}
                ref={(el) => (tabs.current[i] = el)}
                role="tab"
                id={`tab-${ind.id}`}
                aria-selected={active === i}
                aria-controls="industry-panel"
                tabIndex={active === i ? 0 : -1}
                className={`industry-tab ${active === i ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="industry-tab__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span>{ind.name}</span>
              </button>
            ))}
          </div>

          <div id="industry-panel" role="tabpanel" aria-labelledby={`tab-${current.id}`} tabIndex={0} className="industry-panel card" key={current.id}>
            <p className="eyebrow">{current.name}</p>
            <h3 className="h2 industry-panel__title">{current.summary}</h3>
            <h4 className="industry-panel__sub">Where automation can help</h4>
            <ul className="industry-panel__uses">
              {current.uses.map((u) => (<li key={u}><Check width={18} height={18} />{u}</li>))}
            </ul>
            <a href="#contact" className="btn btn--primary">Discuss Your Workflow <Arrow className="arrow" width={18} height={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
