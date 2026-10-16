import Reveal from '../components/Reveal.jsx';
import { ServiceIcon, Check } from '../components/Icons.jsx';
import { SERVICES } from '../data/site.js';

export default function Services() {
  return (
    <section id="services" className="section section--dark" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Services &amp; capabilities</p>
          <h2 id="services-title" className="h2">Practical AI, built around how you already work.</h2>
          <p className="lead">Six capabilities that combine into one connected system, or stand alone as a single focused fix.</p>
        </div>
        <ul className="services__grid">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.id} delay={(i % 3) * 70} className="service card">
              <span className="service__icon"><ServiceIcon id={s.id} /></span>
              <h3 className="h3">{s.title}</h3>
              <p className="muted">{s.body}</p>
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
