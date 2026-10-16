import Header from './components/Header.jsx';
import Hero from './sections/Hero.jsx';
import Intro from './sections/Intro.jsx';
import Services from './sections/Services.jsx';
import Industries from './sections/Industries.jsx';
import Process from './sections/Process.jsx';
import Workflows from './sections/Workflows.jsx';
import Pricing from './sections/Pricing.jsx';
import FAQ from './sections/FAQ.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <Industries />
        <Process />
        <Workflows />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
