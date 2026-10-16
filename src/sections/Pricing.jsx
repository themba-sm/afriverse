import { useEffect, useState } from 'react';
import { PLANS, PRICING_EXAMPLES, PRICING_INDUSTRIES, PLANS_FOOTNOTE } from '../data/site.js';
import { Check, Arrow } from '../components/Icons.jsx';

/*
 * Pricing experience. Every plan shows "Custom quote" until official prices
 * exist; no billing selector, no invented figures. The industry selector
 * swaps in proposed example workflows per plan from structured data, and the
 * selection is kept in the URL (?industry=) so a tailored view is shareable.
 */
const allIndustries = ['general', ...PRICING_INDUSTRIES];

const fromUrl = () => {
  const id = new URLSearchParams(window.location.search).get('industry');
  return allIndustries.includes(id) ? id : 'general';
};

export default function Pricing({ industry: locked }) {
  // On an industry page the industry is locked to that page; on the homepage
  // the visitor picks one via the chips and it persists in ?industry=.
  const [picked, setPicked] = useState(fromUrl());
  const industry = locked || picked;

  const pick = (id) => {
    setPicked(id);
    const url = new URL(window.location);
    if (id === 'general') url.searchParams.delete('industry');
    else url.searchParams.set('industry', id);
    window.history.replaceState(null, '', url);
  };

  // Deep link support: if the industry param changes (e.g. browser back),
  // keep the cards in sync.
  useEffect(() => {
    const sync = () => setPicked(fromUrl());
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  const ex = PRICING_EXAMPLES[industry];

  const choose = (plan) => (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('afriverse:plan', {
      detail: { plan: plan.name, industry: industry === 'general' ? '' : ex.label },
    }));
    document.getElementById('contact-form-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="plans" className="section section--dark pricing" aria-labelledby="plans-title">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Pricing</p>
          <h2 id="plans-title" className="h2">Choose the Right Automation Strategy for Your Business</h2>
          <p className="lead">Start with the processes that matter most, then expand as your business and requirements evolve.</p>
        </div>

        {!locked && (
          <div className="pricing__industry" role="group" aria-label="Tailor plans to your industry">
            <p className="pricing__industry-label">Tailor the plans to your industry</p>
            <div className="pricing__chips">
              {allIndustries.map((id) => (
                <button key={id} type="button"
                  className={`chip ${id === industry ? 'is-active' : ''}`}
                  aria-pressed={id === industry}
                  onClick={() => pick(id)}>
                  {PRICING_EXAMPLES[id].label}
                </button>
              ))}
            </div>
          </div>
        )}

        <ul className="plans" aria-live="polite">
          {PLANS.map((p) => (
            <li key={p.id} className={`plan ${p.featured ? 'plan--featured' : ''}`}>
              {p.featured && <span className="plan__badge">Featured plan</span>}
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__price">{p.price}</p>
              <p className="plan__blurb">{p.desc}</p>

              <p className="plan__includes">Included in scope, subject to final proposal</p>
              <ul className="plan__features">
                {p.features.map((f) => (<li key={f}><Check width={16} height={16} />{f}</li>))}
              </ul>

              <p className="plan__examples-h">{ex.label === 'General business' ? 'Example workflows' : `Example workflows in ${ex.label}`}</p>
              <ul className="plan__examples">
                {ex[p.id].map((f) => (<li key={f}><Check width={16} height={16} />{f}</li>))}
              </ul>

              <a href="#contact" className={`btn btn--block ${p.featured ? 'btn--light' : 'btn--ghost'}`} onClick={choose(p)}>
                {p.cta} <Arrow className="arrow" width={16} height={16} />
              </a>
              <p className="plan__suits">{p.suits}</p>
            </li>
          ))}
        </ul>

        <p className="pricing__foot">{PLANS_FOOTNOTE}</p>
      </div>
    </section>
  );
}
