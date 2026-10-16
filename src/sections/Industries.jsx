import Reveal from '../components/Reveal.jsx';
import { INDUSTRIES } from '../data/site.js';
import { Check, Arrow } from '../components/Icons.jsx';
import { BrandMark } from '../components/Logo.jsx';

/* Each card opens that industry's dedicated solution page, which carries
   the industry into its own consultation form and pricing view. */

export default function Industries() {
  return (
    <section id="industries" className="section section--ivory on-ivory" aria-labelledby="industries-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Industry solutions</p>
          <h2 id="industries-title" className="h2">Built Around the Way Your Industry Works.</h2>
          <p className="lead">
            Different industries have different operational challenges. Explore automation opportunities
            tailored to the way your business attracts customers, manages enquiries, and delivers its services.
          </p>
        </div>

        <ul className="industries__grid">
          {INDUSTRIES.map((ind, i) => (
            <Reveal as="li" key={ind.id} delay={(i % 3) * 70} className={`industry card--paper ind-${i % 5}`}>
              <BrandMark className="industry__mark" />
              <h3 className="h3">{ind.name}</h3>
              <p className="muted">{ind.summary}</p>
              <ul className="industry__uses">
                {ind.uses.map((u) => (<li key={u}><Check width={15} height={15} />{u}</li>))}
              </ul>
              <a href={`#/industry/${ind.id}`} className="industry__link">
                Explore Solutions <Arrow className="arrow" width={16} height={16} />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
