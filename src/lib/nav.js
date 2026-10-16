/*
 * Anchor helpers that work across routes. Section links always scroll
 * programmatically: when the target only exists on the homepage and we are on
 * an industry route, the link first returns to the homepage and then scrolls
 * once it has rendered. Local URLs are kept untouched so refreshing an
 * industry page keeps its route.
 */
export const onIndustryRoute = () => window.location.hash.startsWith('#/industry/');

export function toSection(id) {
  return (e) => {
    const target = document.getElementById(id);
    if (target) {
      // Same page: scroll directly, keep the current URL.
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      if (!onIndustryRoute()) window.history.replaceState(null, '', `#${id}`);
      return;
    }
    // Target lives on the homepage: route there, then scroll after render.
    e.preventDefault();
    window.location.hash = `#${id}`;
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start' });
    }, 400);
  };
}
