import Reveal from '../components/Reveal.jsx';
import { INTRO, PILLARS } from '../data/site.js';

export default function Intro() {
  return (
    <section id="about" className="section section--charcoal intro" aria-labelledby="intro-title">
      <div className="container intro__grid">
        <Reveal className="intro__statement">
          <p className="eyebrow">{INTRO.eyebrow}</p>
          <h2 id="intro-title" className="h2">
            {INTRO.title.split('.')[0]}.
            <span className="dim"> {INTRO.title.split('. ').slice(1).join('. ')}</span>
          </h2>
          <p className="lead">{INTRO.lead}</p>
        </Reveal>
        <ul className="intro__pillars">
          {PILLARS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80} className="pillar">
              <span className="pillar__num grad-text" aria-hidden="true">0{i + 1}</span>
              <div>
                <h3 className="h3">{p.title}</h3>
                <p className="muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
