import Reveal from '../components/Reveal.jsx';
import { INDUSTRIES } from '../data/site.js';
import { IndustryIcon, Check, Arrow } from '../components/Icons.jsx';

/* "Explore Solutions" preselects the industry in the consultation form and
   scrolls the visitor to it, so the link is functional, not decorative. */
const explore = (ind) => (e) => {
  window.dispatchEvent(new CustomEvent('afriverse:industry', { detail: ind.name }));
  document.getElementById('contact-form-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

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
              <span className="industry__mark" aria-hidden="true"><IndustryIcon id={ind.id} /></span>
              <h3 className="h3">{ind.name}</h3>
              <p className="muted">{ind.summary}</p>
              <ul className="industry__uses">
                {ind.uses.map((u) => (<li key={u}><Check width={15} height={15} />{u}</li>))}
              </ul>
              <a href="#contact" className="industry__link" onClick={explore(ind)}>
                Explore Solutions <Arrow className="arrow" width={16} height={16} />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
