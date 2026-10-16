import Reveal from '../components/Reveal.jsx';
import { PILLARS } from '../data/site.js';

export default function Intro() {
  return (
    <section id="about" className="section section--charcoal intro" aria-labelledby="intro-title">
      <div className="container intro__grid">
        <Reveal className="intro__statement">
          <p className="eyebrow">About AFRIVERSE</p>
          <h2 id="intro-title" className="h2">
            We help businesses stop doing by hand what a system can do better,
            <span className="dim"> so people can focus on the work only people can do.</span>
          </h2>
        </Reveal>
        <ul className="intro__pillars">
          {PILLARS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80} className="pillar">
              <span className="pillar__num" aria-hidden="true">0{i + 1}</span>
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
