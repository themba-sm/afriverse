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
import { pendingSection } from './lib/nav.js';

const DEFAULT_TITLE = 'AFRIVERSE | AI Integration. Limitless Impact.';
const DEFAULT_DESC = 'AFRIVERSE designs and integrates AI and automation that remove repetitive manual work, connect your business systems and improve the customer experience.';

/* Tiny hash router: "#/industry/<id>" renders that industry's solution page
   (unique title + description per industry); anything else renders the
   homepage. In-page anchors keep working on the homepage. */
/* Take control of scroll restoration. With the default ('auto') the browser
   re-applies the previous offset after the SPA mounts, which is why refreshes
   opened halfway down the page or near the footer. */
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
const firstLoadSection = () => {
  const nav = performance.getEntriesByType?.('navigation')?.[0];
  const reloaded = nav?.type === 'reload' || nav?.type === 'back_forward';
  const m = window.location.hash.match(/^#([\w-]+)$/);
  // An explicit #section fragment on a fresh navigation is honoured; a refresh
  // or history traversal always starts from the top.
  return m && !reloaded ? m[1] : null;
};

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
        if (!pendingSection) window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Initial load only (runs once): start at the top, unless the visitor opened
  // an explicit #section link on a fresh navigation. Never re-runs on scroll.
  useEffect(() => {
    const id = firstLoadSection();
    const jumpTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (!id) {
      jumpTop();
      // A refresh restores late on some mobile browsers (after images/fonts);
      // re-assert the top ONCE on the next frame and on load, only if the
      // visitor has not started scrolling themselves.
      let touched = false;
      const mark = () => { touched = true; };
      window.addEventListener('wheel', mark, { once: true, passive: true });
      window.addEventListener('touchstart', mark, { once: true, passive: true });
      window.addEventListener('keydown', mark, { once: true });
      const settle = () => { if (!touched && window.scrollY > 0 && !window.location.hash.replace('#', '')) jumpTop(); };
      const raf = requestAnimationFrame(settle);
      window.addEventListener('load', settle, { once: true });
      // Refresh with a stale "#section": drop it so URL and view agree.
      const h = window.location.hash;
      if (h && !parseRoute() && /^#[\w-]+$/.test(h)) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      return () => { cancelAnimationFrame(raf); window.removeEventListener('load', settle); };
    }
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 350);
    return () => clearTimeout(t);
  }, []);

  // Browser back/forward restoring from the bfcache on mobile: honour the
  // persisted page unless it is the homepage reopened from a reload.
  useEffect(() => {
    const onShow = (e) => { if (e.persisted && !window.location.hash) window.scrollTo({ top: 0, behavior: 'instant' }); };
    window.addEventListener('pageshow', onShow);
    return () => window.removeEventListener('pageshow', onShow);
  }, []);

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
