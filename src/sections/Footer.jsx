import { NAV } from '../data/site.js';
import { LogoFull } from '../components/Logo.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <LogoFull width={200} loading="lazy" />
          <p className="muted">AI automation and integration for businesses that want less manual work and more room to grow.</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="footer__h">Explore</h2>
          <ul>{NAV.map((n) => (<li key={n.href}><a href={n.href}>{n.label}</a></li>))}<li><a href="#contact">Contact</a></li></ul>
        </nav>
        <div>
          <h2 className="footer__h">Start a conversation</h2>
          <p className="muted">Tell us where your time is going and we will suggest where automation helps most.</p>
          <a href="#contact" className="btn btn--primary btn--sm" style={{ marginTop: '1rem' }}>Request a Consultation</a>
        </div>
      </div>
      <div className="container footer__bar">
        <p>&copy; {new Date().getFullYear()} AFRIVERSE. All rights reserved.</p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
