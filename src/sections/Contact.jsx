import { Arrow } from '../components/Icons.jsx';
import ConsultationForm from '../components/ConsultationForm.jsx';

/*
 * Homepage consultation section: copy on the left, reusable enquiry form on
 * the right. The form component carries validation and the industry/plan
 * preselection events shared with the pricing section and industry pages.
 */
export default function Contact() {
  const toForm = (e) => {
    e.preventDefault();
    document.getElementById('contact-form-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="contact" className="section section--dark contact contact--final" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__copy">
          <p className="eyebrow">Start the conversation</p>
          <h2 id="contact-title" className="h2">Your Next Business Advantage Starts With a Conversation.</h2>
          <p className="lead">
            Tell us how your business operates, where time is being lost, and what you would like to improve.
            Let&rsquo;s explore what intelligent automation could make possible.
          </p>
          <div className="contact__ctas">
            <a href="#contact-form-card" className="btn btn--primary" onClick={toForm}>Book a Consultation <Arrow className="arrow" width={18} height={18} /></a>
            <a href="#industries" className="btn btn--ghost">Explore Industries</a>
          </div>
          <ul className="contact__points">
            <li>Describe your business and your biggest time drain</li>
            <li>We suggest the smallest change that helps most</li>
            <li>You decide whether to go further</li>
          </ul>
        </div>

        <ConsultationForm />
      </div>
    </section>
  );
}
