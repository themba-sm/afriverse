import { Arrow } from '../components/Icons.jsx';
import { toSection } from '../lib/nav.js';

/*
 * Signature hero. Composition follows the supplied reference: ivory field,
 * centred eyebrow, headline and two calls to action; the photoreal hand-and-
 * device rises from the bottom centre. Interface graphics behind the hand are
 * implemented in SVG so the single photographic asset stays responsive.
 * Draft marketing copy — to be refined against the official company document.
 */
export default function Hero() {
  return (
    <section id="top" className="hero hero--signature section--ivory on-ivory" aria-labelledby="hero-title">
      <div className="hero__grid-bg" aria-hidden="true" />
      <svg className="hero__tech" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        {/* faint workflow diagram, left */}
        <g className="tech-left" transform="translate(80,210)">
          <circle cx="0" cy="0" r="5" /><circle cx="120" cy="46" r="5" /><circle cx="60" cy="150" r="5" /><circle cx="190" cy="170" r="5" />
          <path d="M5 3 L112 43 M124 51 L66 144 M72 154 L184 168" />
          <rect x="18" y="86" width="120" height="26" rx="13" />
        </g>
        {/* faint data panel, right */}
        <g className="tech-right" transform="translate(1130,170)">
          <rect width="220" height="130" rx="16" />
          <path d="M24 96 L48 72 L72 84 L96 52 L120 64 L144 34 L168 46" />
          <circle cx="24" cy="96" r="3.5" /><circle cx="48" cy="72" r="3.5" /><circle cx="72" cy="84" r="3.5" />
          <circle cx="96" cy="52" r="3.5" /><circle cx="120" cy="64" r="3.5" /><circle cx="144" cy="34" r="3.5" /><circle cx="168" cy="46" r="3.5" />
        </g>
        {/* barely visible abstract panel, far right */}
        <g className="tech-faint" transform="translate(1240,430)">
          <rect width="150" height="90" rx="12" />
          <line x1="20" y1="26" x2="86" y2="26" /><line x1="20" y1="44" x2="120" y2="44" /><line x1="20" y1="62" x2="72" y2="62" />
        </g>
      </svg>

      <div className="container hero__inner">
        <p className="eyebrow">AI Integration &amp; Automation</p>
        <h1 id="hero-title" className="display hero__title">
          Smarter Systems.<br />
          <span className="grad-text">Limitless Possibilities.</span>
        </h1>
        <p className="lead hero__lead">
          Connect your business processes, automate repetitive work, and create more room
          for meaningful growth with intelligent automation.
        </p>
        <div className="hero__actions">
          <a href="#services" className="btn btn--primary" onClick={toSection('services')}>Explore Our Solutions <Arrow className="arrow" width={18} height={18} /></a>
          <a href="#contact" className="btn btn--outline-ink" onClick={toSection('contact')}>Book a Consultation</a>
        </div>

        <figure className="hero__hand">
          <img
            src="/brand/hero-hand.png"
            width="884" height="964"
            alt="A hand holding a premium connected AI device engraved with the AFRIVERSE emblem"
            decoding="async"
            fetchpriority="high"
          />
        </figure>
      </div>
    </section>
  );
}
