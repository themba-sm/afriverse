/*
 * Anchor helpers that work across routes. Section links always scroll
 * programmatically: when the target only exists on the homepage and we are on
 * an industry route, the link first returns to the homepage and then scrolls
 * once it has rendered. Local URLs are kept untouched so refreshing an
 * industry page keeps its route.
 */
export let pendingSection = null;
export const onIndustryRoute = () => window.location.hash.startsWith('#/industry/');

export function toSection(id) {
  return (e) => {
    const target = document.getElementById(id);
    if (target) {
      // Same page: scroll directly, keep the current URL.
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // Deliberately NOT writing "#section" into the URL: a persisted hash made
      // every refresh jump back to that section instead of the top of the page.
      return;
    }
    // Target lives on the homepage: route there, then scroll after render.
    e.preventDefault();
    // Leave an industry route by clearing the hash (back button returns to it),
    // then scroll once the homepage has rendered.
    window.location.hash = '';
    pendingSection = id;
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start' });
      pendingSection = null;
    }, 450);
  };
}
