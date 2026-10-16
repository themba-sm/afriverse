import Accordion from '../components/Accordion.jsx';
import { FAQS } from '../data/site.js';

export default function FAQ() {
  return (
    <section id="faq" className="section section--dark" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <div className="faq__head">
          <p className="eyebrow">Frequently asked questions</p>
          <h2 id="faq-title" className="h2">Straight answers before you start.</h2>
          <p className="lead">Can&rsquo;t find what you need? Send us a message and we will answer plainly.</p>
          <a href="#contact" className="btn btn--ghost">Ask a question</a>
        </div>
        <Accordion items={FAQS} idPrefix="faq" />
      </div>
    </section>
  );
}
