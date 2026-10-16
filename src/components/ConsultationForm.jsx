import { useEffect, useState } from 'react';
import { INDUSTRIES, SITE } from '../data/site.js';
import { Arrow } from './Icons.jsx';

const EMPTY = { name: '', email: '', business: '', industry: '', plan: '', message: '' };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!v.email.trim()) e.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (!v.message.trim()) e.message = 'Tell us briefly what you would like to improve.';
  else if (v.message.trim().length < 10) e.message = 'Please add a little more detail (at least 10 characters).';
  return e;
}

/*
 * Reusable enquiry form. There is no backend yet, so on valid submit the
 * enquiry is composed into the visitor's email app (mailto) when a company
 * email is set. Until then the form validates, shows a truthful summary the
 * visitor can copy, and never claims the message was sent.
 * Industry links and pricing CTAs preselect fields via window events, and
 * `initial` carries an industry/plan already chosen on this route.
 */
export default function ConsultationForm({ initial = {} }) {
  const [values, setValues] = useState({ ...EMPTY, ...initial });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const pickIndustry = (e) => setValues((s) => ({ ...s, industry: e.detail }));
    const pickPlan = (e) => setValues((s) => ({
      ...s,
      plan: e.detail.plan,
      ...(e.detail.industry ? { industry: e.detail.industry } : {}),
    }));
    window.addEventListener('afriverse:industry', pickIndustry);
    window.addEventListener('afriverse:plan', pickPlan);
    return () => {
      window.removeEventListener('afriverse:industry', pickIndustry);
      window.removeEventListener('afriverse:plan', pickPlan);
    };
  }, []);

  const set = (k) => (e) => {
    setValues((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }));
  };

  const summary = (v) =>
    `AFRIVERSE enquiry\n\nName: ${v.name}\nEmail: ${v.email}\nBusiness: ${v.business || '-'}\nIndustry: ${v.industry || '-'}\nPlan of interest: ${v.plan || '-'}\n\n${v.message}`;

  const onSubmit = (ev) => {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`f-${firstKey}`)?.focus();
      return;
    }
    const text = summary(values);
    if (SITE.email) {
      const href = `mailto:${SITE.email}?subject=${encodeURIComponent('AFRIVERSE consultation request')}&body=${encodeURIComponent(text)}`;
      window.location.href = href;
    }
    setDone({ text, mailed: !!SITE.email });
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(done.text); setCopied(true); setTimeout(() => setCopied(false), 2500); } catch { /* clipboard blocked */ }
  };

  const reset = () => { setValues({ ...EMPTY, ...initial }); setDone(null); setErrors({}); setCopied(false); };

  return (
    <div id="contact-form-card" className="contact__card card card--light">
      {done ? (
        <div className="form-done" role="status">
          <h3 className="h3">{done.mailed ? 'Your email is ready to send' : 'Your enquiry is ready'}</h3>
          <p className="muted">
            {done.mailed
              ? 'Your email app should have opened with the details filled in. Press send there to complete your request.'
              : 'Direct sending is not switched on for this site yet, so nothing has been sent. Copy your enquiry below and send it to us through your preferred channel.'}
          </p>
          <pre className="form-done__text">{done.text}</pre>
          <div className="form-done__actions">
            <button type="button" className="btn btn--dark" onClick={copy}>{copied ? 'Copied' : 'Copy enquiry'}</button>
            <button type="button" className="btn btn--outline-ink" onClick={reset}>Start again</button>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="f-name">Your name</label>
            <input id="f-name" name="name" autoComplete="name" value={values.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} required />
            {errors.name && <p className="field__error" id="e-name">{errors.name}</p>}
          </div>
          <div className="field">
            <label htmlFor="f-email">Email address</label>
            <input id="f-email" name="email" type="email" autoComplete="email" value={values.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'e-email' : undefined} required />
            {errors.email && <p className="field__error" id="e-email">{errors.email}</p>}
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="f-business">Business name <span className="optional">(optional)</span></label>
              <input id="f-business" name="business" autoComplete="organization" value={values.business} onChange={set('business')} />
            </div>
            <div className="field">
              <label htmlFor="f-industry">Industry <span className="optional">(optional)</span></label>
              <select id="f-industry" name="industry" value={values.industry} onChange={set('industry')}>
                <option value="">Select your industry</option>
                {INDUSTRIES.map((i) => (<option key={i.id} value={i.name}>{i.name}</option>))}
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="f-plan">Plan of interest <span className="optional">(optional)</span></label>
            <select id="f-plan" name="plan" value={values.plan} onChange={set('plan')}>
              <option value="">Select a plan</option>
              {['Essential', 'Growth', 'Scale'].map((pl) => (<option key={pl} value={pl}>{pl}</option>))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-message">What would you like to improve?</label>
            <textarea id="f-message" name="message" rows="5" value={values.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'e-message' : undefined} required />
            {errors.message && <p className="field__error" id="e-message">{errors.message}</p>}
          </div>
          <button type="submit" className="btn btn--dark btn--block">Book a Consultation <Arrow className="arrow" width={18} height={18} /></button>
        </form>
      )}
    </div>
  );
}
