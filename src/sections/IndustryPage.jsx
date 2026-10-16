import Reveal from '../components/Reveal.jsx';
import Accordion from '../components/Accordion.jsx';
import ConsultationForm from '../components/ConsultationForm.jsx';
import Pricing from './Pricing.jsx';
import { INDUSTRY_PAGES } from '../data/industries.js';
import { IndustryIcon, Check, Arrow } from '../components/Icons.jsx';

/*
 * Shared industry solution template. One component renders every industry
 * page from structured data: hero + UI illustration, challenges, proposed
 * opportunities, example workflows, a visual flow explanation, business
 * value, the shared pricing component (industry locked), industry FAQs and a
 * consultation section whose form carries the industry (and plan, via the
 * pricing CTA events) into the enquiry.
 */
const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: id === 'contact-form-card' ? 'center' : 'start' });
};

export default function IndustryPage({ id }) {
  const d = INDUSTRY_PAGES[id];
  if (!d) return null;

  return (
    <main id="main">
      {/* Hero */}
      <section className={`section ind-hero section--dark`} aria-labelledby="ind-title">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="#industries" data-nav>Industries</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{d.name}</span>
          </nav>
          <div className="ind-hero__grid">
            <div className="ind-hero__copy">
              <p className="eyebrow">Industry solution</p>
              <h1 id="ind-title" className="h1 ind-hero__title">{d.heroTitle}</h1>
              <p className="lead">{d.heroCopy}</p>
              <div className="contact__ctas">
                <a href="#contact" className="btn btn--primary" onClick={scrollTo('contact-form-card')}>Book a Consultation <Arrow className="arrow" width={18} height={18} /></a>
                <a href="#plans" className="btn btn--ghost" onClick={scrollTo('plans')}>Compare Plans</a>
              </div>
              <ul className="ind-hero__marks">
                <li><Check width={16} height={16} />Drafted copy, honest scope</li>
                <li><Check width={16} height={16} />Integrations confirmed before build</li>
                <li><Check width={16} height={16} />Human handover points by design</li>
              </ul>
            </div>
            <Reveal className="ind-ui" aria-hidden="true">
              <div className="ind-ui__head">
                <span className="ind-ui__icon"><IndustryIcon id={id} /></span>
                <p>{d.ui.title}</p>
              </div>
              <ul>
                {d.ui.lines.map((l, i) => (
                  <li key={l.t} className={i === d.ui.lines.length - 1 ? 'is-last' : ''}>
                    <p>{l.t}</p>
                    <span className="ind-ui__tag">{l.tag}</span>
                  </li>
                ))}
              </ul>
              <div className="ind-ui__bar"><span></span></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section section--ivory on-ivory" aria-labelledby="ind-challenges">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The day-to-day</p>
            <h2 id="ind-challenges" className="h2">Common Operational Challenges in {d.name}.</h2>
          </div>
          <ul className="ind-challenges">
            {d.challenges.map((c, i) => (
              <Reveal as="li" key={c.t} delay={(i % 2) * 70} className="card--paper ind-challenge">
                <span className="ind-challenge__n">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="h3">{c.t}</h3>
                <p className="muted">{c.b}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Opportunities */}
      <section className="section section--charcoal" aria-labelledby="ind-opp">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Proposed, not promised</p>
            <h2 id="ind-opp" className="h2">Where Automation Aims to Help.</h2>
          </div>
          <ul className="ind-opps">
            {d.opportunities.map((o, i) => (
              <Reveal as="li" key={o.t} delay={i * 70} className="ind-opp">
                <span className="ind-opp__icon"><Check width={18} height={18} /></span>
                <div>
                  <h3 className="h3">{o.t}</h3>
                  <p className="muted">{o.b}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Example workflows */}
      <section className="section section--ivory on-ivory" aria-labelledby="ind-wfs">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Example workflows</p>
            <h2 id="ind-wfs" className="h2">Illustrative Workflows for {d.name}.</h2>
            <p className="lead">
              Proposed examples of how triggers, actions and outcomes could connect in your business.
              Your version is shaped around your tools, your team and your customers.
            </p>
          </div>
          <ul className="ind-wfs">
            {d.workflows.map((w, i) => (
              <Reveal as="li" key={w.name} delay={(i % 3) * 70} className="card--paper ind-wf">
                <h3 className="h3">{w.name}</h3>
                <ol className="wf__steps">
                  {[['trigger', w.t], ['action', w.a], ['outcome', w.o]].map(([k, t]) => (
                    <li className="wf__step" key={k}>
                      <span className="wf__dot" aria-hidden="true">{k === 'trigger' ? '→' : k === 'action' ? '⚙' : '✓'}</span>
                      <div>
                        <p className={`wf__kind wf__kind--${k}`}>{k}</p>
                        <p className="muted" style={{ color: 'var(--c-ink-soft)' }}>{t}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            ))}
          </ul>
          <p className="ind-note">
            Illustrative demonstrations of proposed workflows. Not live systems, not past client projects,
            and not connected to any live company accounts. Third-party platform integrations are subject
            to compatibility and scope confirmation.
          </p>
        </div>
      </section>

      {/* Visual flow explanation */}
      <section className="section section--dark" aria-labelledby="ind-flow">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2 id="ind-flow" className="h2">{d.flow.title}.</h2>
          </div>
          <ol className="ind-flow">
            {d.flow.steps.map((s, i) => (
              <Reveal as="li" key={s} delay={i * 90}>
                <span className="ind-flow__dot">{i + 1}</span>
                <p>{s}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Business value */}
      <section className="section section--ivory on-ivory" aria-labelledby="ind-value">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Business value</p>
            <h2 id="ind-value" className="h2">The Value We Aim For.</h2>
            <p className="lead">{d.value.lead} No invented numbers, no guaranteed results: real value depends on the scope we agree together.</p>
          </div>
          <ul className="ind-value">
            {d.value.points.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 70}><Check width={18} height={18} />{p}</Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Plans: shared pricing component, industry locked */}
      <Pricing industry={id} />

      {/* Industry FAQs */}
      <section className="section section--ivory on-ivory" aria-labelledby="ind-faq">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Frequently asked questions</p>
            <h2 id="ind-faq" className="h2">{d.name} Questions, Answered Plainly.</h2>
          </div>
          <Accordion items={d.faqs} idPrefix="ind-faq" />
        </div>
      </section>

      {/* Consultation */}
      <section id="contact" className="section section--dark contact contact--final" aria-labelledby="ind-contact">
        <div className="container contact__grid">
          <div className="contact__copy">
            <p className="eyebrow">Start the conversation</p>
            <h2 id="ind-contact" className="h2">Explore Automation for {d.name}.</h2>
            <p className="lead">
              Tell us how your {d.name.toLowerCase()} business runs and where the time is going.
              We will suggest the smallest change that helps most, and you decide where it goes from there.
            </p>
            <ul className="contact__points">
              <li>The form arrives pre-filled with {d.name}</li>
              <li>We suggest the smallest change that helps most</li>
              <li>You decide whether to go further</li>
            </ul>
          </div>
          <ConsultationForm initial={{ industry: d.name }} />
        </div>
      </section>
    </main>
  );
}
