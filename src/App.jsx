import { useEffect, useRef, useState } from 'react';
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
import IndustryPage from './sections/IndustryPage.jsx';
import { INDUSTRY_PAGES } from './data/industries.js';

const DEFAULT_TITLE = 'AFRIVERSE | AI Integration. Limitless Impact.';
const DEFAULT_DESC = 'AFRIVERSE designs and integrates AI and automation that remove repetitive manual work, connect your business systems and improve the customer experience.';

/* Tiny hash router: "#/industry/<id>" renders that industry's solution page
   (unique title + description per industry); anything else renders the
   homepage. In-page anchors keep working on the homepage. */
const parseRoute = () => {
  const m = window.location.hash.match(/^#\/industry\/([\w-]+)/);
  return m && INDUSTRY_PAGES[m[1]] ? m[1] : null;
};

function Home() {
  return (
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
  );
}

export default function App() {
  const [ind, setInd] = useState(parseRoute());
  const routeRef = useRef(ind);

  useEffect(() => {
    const onHash = () => {
      const next = parseRoute();
      if (next !== routeRef.current) {
        routeRef.current = next;
        setInd(next);
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // First-load deep links: scroll to the section once the app has rendered
  // (the browser fires its anchor scroll before the SPA mounts, so it is lost).
  useEffect(() => {
    if (ind) return undefined;
    const t = setTimeout(() => {
      const m = window.location.hash.match(/^#([\w-]+)$/);
      if (m) document.getElementById(m[1])?.scrollIntoView();
    }, 350);
    return () => clearTimeout(t);
  }, [ind]);

  useEffect(() => {
    const d = ind ? INDUSTRY_PAGES[ind] : null;
    document.title = d ? d.metaTitle : DEFAULT_TITLE;
    document.querySelector('meta[name="description"]')?.setAttribute('content', d ? d.metaDesc : DEFAULT_DESC);
  }, [ind]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      {ind ? <IndustryPage id={ind} /> : <Home />}
      <Footer />
    </>
  );
}
