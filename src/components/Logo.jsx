/*
 * Brand logo. Uses the supplied AFRIVERSE asset untouched (crop/resize only).
 * The asset has a true-black background, so `mix-blend-mode: screen` lets it
 * sit seamlessly on the near-black brand surface without a visible box.
 */
export function LogoFull({ className = '', width = 240, loading = 'eager' }) {
  return (
    <img
      className={`logo-full ${className}`}
      src="/brand/afriverse-logo.webp"
      srcSet="/brand/afriverse-logo-sm.webp 480w, /brand/afriverse-logo.webp 960w"
      sizes={`${width}px`}
      width="960" height="800"
      style={{ width }}
      alt="AFRIVERSE. AI Integration. Limitless Impact."
      loading={loading}
      decoding="async"
    />
  );
}

export function LogoWordmark({ height = 28 }) {
  return (
    <img
      className="logo-wordmark"
      src="/brand/afriverse-wordmark.webp"
      width="920" height="120"
      style={{ height, width: 'auto' }}
      alt="AFRIVERSE"
      decoding="async"
    />
  );
}

export function LogoEmblem({ size = 40 }) {
  return (
    <img
      className="logo-emblem"
      src="/brand/afriverse-emblem-sm.webp"
      width="160" height="162"
      style={{ width: size, height: 'auto' }}
      alt=""
      aria-hidden="true"
      decoding="async"
    />
  );
}
