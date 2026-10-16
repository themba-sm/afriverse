/*
 * Anchor helpers that work across routes. On an industry page (#/industry/x),
 * section anchors like #services only exist on the homepage, so links first
 * return to the homepage and then scroll once it has rendered.
 */
export const onIndustryRoute = () => window.location.hash.startsWith('#/industry/');

export function toSection(id) {
  return (e) => {
    // If the target exists on the current page, let the browser handle it.
    if (document.getElementById(id)) return undefined;
    e.preventDefault();
    window.location.hash = `#${id}`;
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 120);
    return undefined;
  };
}
