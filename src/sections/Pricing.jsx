import { useState } from 'react';
import { PLANS, BILLING } from '../data/site.js';
import { Check } from '../components/Icons.jsx';

/*
 * Pricing layout follows the reference (three aligned cards, billing selector,
 * emphasised middle plan) in the AFRIVERSE blue-violet palette. Real prices are
 * not supplied, so no figures are shown; pricing is confirmed after a consultation.
 */
export default function Pricing() {
  const [mode, setMode] = useState('once');

  return (
    <section id="plans" className="section section--charcoal pricing" aria-labelledby="plans-title">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Plans</p>
          <h2 id="plans-title" className="h2">Choose the right level of automation for your business.</h2>
          <p className="lead">Three ways to work together. Final pricing is confirmed after a short consultation, based on scope.</p>
        </div>

        <fieldset className="billing">
          <legend className="visually-hidden">Engagement type</legend>
          {Object.values(BILLING).map((b) => (
            <label key={b.id} className={`billing__opt ${mode === b.id ? 'is-active' : ''}`}>
              <input type="radio" name="billing" value={b.id} checked={mode === b.id} onChange={() => setMode(b.id)} />
              <span className="billing__radio" aria-hidden="true" />
              <span>{b.label}</span>
            </label>
          ))}
        </fieldset>
        <p className="billing__note" aria-live="polite">{BILLING[mode].note}</p>

        <ul className="plans">
          {PLANS.map((p) => (
            <li key={p.id} className={`plan ${p.featured ? 'plan--featured' : ''}`}>
              {p.featured && <span className="plan__badge">Most chosen starting point</span>}
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__price">{p.price[mode]}</p>
              <p className="plan__blurb">{p.blurb}</p>
              <a href="#contact" className={`btn btn--block ${p.featured ? 'btn--light' : 'btn--ghost'}`}>{p.cta}</a>
              <p className="plan__sep">{BILLING[mode].note}</p>
              <hr />
              <p className="plan__includes">{p.includesLabel}</p>
              <ul className="plan__features">
                {p.features.map((f) => (<li key={f}><Check width={16} height={16} />{f}</li>))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="pricing__foot">Not sure which plan fits? Start with a consultation and we will recommend the smallest setup that solves the problem.</p>
      </div>
    </section>
  );
}
