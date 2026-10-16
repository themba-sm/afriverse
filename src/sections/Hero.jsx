import { LogoFull } from '../components/Logo.jsx';
import { Arrow } from '../components/Icons.jsx';

/*
 * Hero. Composition follows the reference's principles (minimal navigation,
 * centred headline, two calls to action, faint technical detail, one strong
 * focal object) but with AFRIVERSE branding. The focal object is the official
 * logo on a dark panel; no stock photography or fabricated interface.
 */
export default function Hero() {
  return (
    <section id="top" className="hero section--ivory on-ivory" aria-labelledby="hero-title">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow">AI automation &amp; integration</p>
        <h1 id="hero-title" className="display hero__title">
          Smarter operations,<br />
          <span className="grad-text">limitless impact.</span>
        </h1>
        <p className="lead hero__lead">
          AFRIVERSE designs and connects AI and automation that remove repetitive manual work,
          link your business systems and make every customer interaction smoother.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--dark">Request a Consultation <Arrow className="arrow" width={18} height={18} /></a>
          <a href="#workflows" className="btn btn--outline-ink">See how it works</a>
        </div>

        <figure className="hero__stage">
          <div className="hero__panel">
            <div className="hero__panel-glow" aria-hidden="true" />
            <LogoFull width={420} />
            <ul className="hero__chips" aria-label="What AFRIVERSE connects">
              <li>Enquiries</li><li>Bookings</li><li>Messaging</li><li>Follow-up</li><li>Reporting</li>
            </ul>
          </div>
        </figure>
      </div>
    </section>
  );
}
