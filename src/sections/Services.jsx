import Reveal from '../components/Reveal.jsx';
import { Check } from '../components/Icons.jsx';
import { BrandMark } from '../components/Logo.jsx';
import { SERVICES } from '../data/site.js';

/* Proposed capabilities: clearly framed, never claiming live availability
   until confirmed against the official company document. */
export default function Services() {
  return (
    <section id="services" className="section section--dark" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Services &amp; capabilities</p>
          <h2 id="services-title" className="h2">Intelligent Solutions for Everyday Business Challenges.</h2>
          <p className="lead">
            Eight proposed capabilities, each described by the problem it addresses and the outcome it aims to support.
            Availability is confirmed for your specific tools during a consultation.
          </p>
        </div>
        <ul className="services__grid">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.id} delay={(i % 4) * 60} className={`service card ${i % 2 ? 'card--light service--light' : ''}`}>
              <BrandMark className="service__icon" />
              <h3 className="h3">{s.title}</h3>
              <p className="muted">{s.body}</p>
              <p className="service__outcome"><Check width={16} height={16} />{s.outcome}</p>
              <ul className="service__points">
                {s.points.map((p) => (<li key={p}><Check width={16} height={16} />{p}</li>))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
