import Reveal from '../components/Reveal.jsx';
import { PROCESS } from '../data/site.js';

/* Proposed engagement path, not a fixed delivery guarantee. */
export default function Process() {
  return (
    <section id="process" className="section section--charcoal" aria-labelledby="process-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How AFRIVERSE works</p>
          <h2 id="process-title" className="h2">A clear path from first conversation to working system.</h2>
          <p className="lead">No black boxes. You know what is being built, why, and how it will behave before it goes live.</p>
        </div>
        <ol className="process__list">
          {PROCESS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90} className="process__step">
              <span className="process__n grad-text" aria-hidden="true">{s.n}</span>
              <h3 className="h3">{s.title}</h3>
              <p className="muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
        <p className="process__note">A proposed engagement process. Every project is shaped around its agreed scope, not a fixed delivery guarantee.</p>
      </div>
    </section>
  );
}
