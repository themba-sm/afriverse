import { useEffect, useRef, useState } from 'react';
import { INDUSTRIES, SITE } from '../data/site.js';
import { Arrow } from './Icons.jsx';

const EMPTY = {
  name: '', businessEmail: '', businessName: '', industry: '',
  plan: '', automationChallenge: '', desiredOutcome: '',
  contactMethod: 'Email', consent: false,
};

const PLANS = ['Essential', 'Growth', 'Scale', 'Not sure yet'];
const CONTACT_METHODS = ['Email', 'WhatsApp', 'Phone', 'No preference'];

/* Client-side validation mirrors the server: the endpoint re-validates
   everything, so nothing here is trusted for security. */
function validate(v) {
  const e = {};
  if (!v.name.trim() || v.name.trim().length < 2) e.name = 'Please enter your full name.';
  if (!v.businessEmail.trim()) e.businessEmail = 'Please enter your business email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.businessEmail.trim())) e.businessEmail = 'Please enter a valid email address.';
  if (!v.automationChallenge.trim()) e.automationChallenge = 'Tell us the main challenge you want automation to solve.';
  else if (v.automationChallenge.trim().length < 10) e.automationChallenge = 'Please add a little more detail (at least 10 characters).';
  if (!v.consent) e.consent = 'Please confirm you agree before submitting.';
  return e;
}

/*
 * Reusable consultation enquiry form, shared by the homepage and every
 * industry page. Submits to a secure server-side endpoint that validates,
 * rate-limits and stores the enquiry durably. The success state is only
 * shown after the server confirms storage; failures show an error with a
 * retry. Industry links and pricing CTAs preselect fields via window
 * events; `initial` carries an industry/plan chosen on the current route.
 */
export default function ConsultationForm({ initial = {} }) {
  const [values, setValues] = useState({ ...EMPTY, ...initial });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serverError, setServerError] = useState('');
  const [reference, setReference] = useState('');
  const doneRef = useRef(null);

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
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues((s) => ({ ...s, [k]: val }));
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (status === 'submitting') return;
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`f-${firstKey}`)?.focus();
      return;
    }
    setStatus('submitting');
    setServerError('');
    try {
      const res = await fetch(SITE.enquiryEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          businessEmail: values.businessEmail,
          businessName: values.businessName,
          industry: values.industry,
          plan: values.plan,
          automationChallenge: values.automationChallenge,
          desiredOutcome: values.desiredOutcome,
          contactMethod: values.contactMethod,
          website: values.website, // honeypot: humans never see or fill this
          source: 'afriverse website',
        }),
      });
      let data = null;
      try { data = await res.json(); } catch { /* non-JSON body */ }
      if (res.ok && data && data.ok) {
        setReference(data.enquiryId ? `AFR-${data.enquiryId.slice(-8).toUpperCase()}` : '');
        setStatus('success');
        setTimeout(() => doneRef.current?.focus(), 50);
        return;
      }
      if (data && data.errors) {
        setErrors(data.errors);
        setStatus('error');
        setServerError('Please review the highlighted fields and try again.');
        const firstKey = Object.keys(data.errors)[0];
        setTimeout(() => document.getElementById(`f-${firstKey}`)?.focus(), 50);
        return;
      }
      if (res.status === 429) {
        setStatus('error');
        setServerError('Too many enquiries have been sent from your connection in a short time. Please try again in a few minutes.');
        return;
      }
      setStatus('error');
      setServerError('Something went wrong while sending your enquiry. Please try again.');
    } catch {
      setStatus('error');
      setServerError('No connection to the submission service. Check your internet connection and try again.');
    }
  };

  const reset = () => {
    setValues({ ...EMPTY, ...initial });
    setErrors({});
    setStatus('idle');
    setServerError('');
    setReference('');
  };

  const formId = useRef(`cf-${Math.random().toString(36).slice(2, 8)}`).current;

  return (
    <div id="contact-form-card" className="contact__card card card--light">
      {status === 'success' ? (
        <div className="form-done" role="status" tabIndex={-1} ref={doneRef}>
          <h3 className="h3">Your enquiry has been received</h3>
          <p className="muted">
            Thank you{values.name ? `, ${values.name.split(' ')[0]}` : ''}. Your enquiry was
            submitted successfully{reference ? <> and logged with reference <strong>{reference}</strong></> : ''}.
            A member of the AFRIVERSE team will review it and reply to {values.businessEmail || 'your email address'}.
          </p>
          <p className="form-done__note">
            Note: automated notifications to the AFRIVERSE team are not yet configured on this site,
            so enquiries are stored centrally and reviewed directly.
          </p>
          <div className="form-done__actions">
            <button type="button" className="btn btn--outline-ink" onClick={reset}>Send another enquiry</button>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          {status === 'error' && (
            <p className="form-error" role="alert">{serverError}</p>
          )}
          <div className="field">
            <label htmlFor="f-name">Full name</label>
            <input id="f-name" name="name" autoComplete="name" value={values.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} required />
            {errors.name && <p className="field__error" id="e-name">{errors.name}</p>}
          </div>
          <div className="field">
            <label htmlFor="f-email">Business email</label>
            <input id="f-email" name="email" type="email" autoComplete="email" value={values.businessEmail} onChange={set('businessEmail')} aria-invalid={!!errors.businessEmail} aria-describedby={errors.businessEmail ? 'e-email' : undefined} required />
            {errors.businessEmail && <p className="field__error" id="e-email">{errors.businessEmail}</p>}
          </div>
          <div className="field">
            <label htmlFor="f-business">Business name <span className="optional">(optional)</span></label>
            <input id="f-business" name="business" autoComplete="organization" value={values.businessName} onChange={set('businessName')} />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="f-industry">Industry <span className="optional">(optional)</span></label>
              <select id="f-industry" name="industry" value={values.industry} onChange={set('industry')}>
                <option value="">Select your industry</option>
                {INDUSTRIES.map((i) => (<option key={i.id} value={i.name}>{i.name}</option>))}
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="f-plan">Plan of interest <span className="optional">(optional)</span></label>
              <select id="f-plan" name="plan" value={values.plan} onChange={set('plan')}>
                <option value="">Select a plan</option>
                {PLANS.map((pl) => (<option key={pl} value={pl}>{pl}</option>))}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="f-challenge">Main automation challenge</label>
            <textarea id="f-challenge" name="automationChallenge" rows="4" placeholder="What repetitive work, slow process or disconnected system should automation solve first?" value={values.automationChallenge} onChange={set('automationChallenge')} aria-invalid={!!errors.automationChallenge} aria-describedby={errors.automationChallenge ? 'e-challenge' : undefined} required />
            {errors.automationChallenge && <p className="field__error" id="e-challenge">{errors.automationChallenge}</p>}
          </div>
          <div className="field">
            <label htmlFor="f-outcome">Desired outcome <span className="optional">(optional)</span></label>
            <textarea id="f-outcome" name="desiredOutcome" rows="3" placeholder="What would success look like for your business?" value={values.desiredOutcome} onChange={set('desiredOutcome')} />
          </div>
          <fieldset className="field contact-method">
            <legend>Preferred contact method</legend>
            <div className="contact-method__opts" role="radiogroup" aria-label="Preferred contact method">
              {CONTACT_METHODS.map((m) => (
                <label key={m} className={`contact-method__opt ${values.contactMethod === m ? 'is-active' : ''}`}>
                  <input
                    type="radio"
                    name="contactMethod"
                    value={m}
                    checked={values.contactMethod === m}
                    onChange={set('contactMethod')}
                  />
                  {m}
                </label>
              ))}
            </div>
          </fieldset>
          <div className={`field field--check ${errors.consent ? 'has-error' : ''}`}>
            <label htmlFor="f-consent" className="field__check">
              <input id="f-consent" name="consent" type="checkbox" checked={values.consent} onChange={set('consent')} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'e-consent' : undefined} required />
              <span>
                I agree that AFRIVERSE may use the details I provide to respond to my enquiry.
                {SITE.privacyUrl
                  ? <> Read our <a href={SITE.privacyUrl} target="_blank" rel="noopener noreferrer">privacy policy</a>.</>
                  : null}
              </span>
            </label>
            {errors.consent && <p className="field__error" id="e-consent">{errors.consent}</p>}
          </div>
          {/* Honeypot: hidden from humans and assistive tech; bots that fill it are dropped server-side. */}
          <div className="hp-field" aria-hidden="true">
            <label htmlFor={`${formId}-website`}>Website</label>
            <input id={`${formId}-website`} name="website" tabIndex={-1} autoComplete="off" value={values.website || ''} onChange={set('website')} />
          </div>
          <button type="submit" className="btn btn--dark btn--block" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : <>Book a Consultation <Arrow className="arrow" width={18} height={18} /></>}
          </button>
          <p className="field__hint">Submitting stores your enquiry securely with AFRIVERSE. We only use these details to respond to your enquiry.</p>
        </form>
      )}
    </div>
  );
}
