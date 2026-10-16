/*
 * Brand logo components. All assets are crops of the official AFRIVERSE logo
 * (never redrawn). Each <img> keeps its intrinsic aspect ratio: width/height
 * attributes describe the true pixel size, CSS only ever sets ONE dimension
 * (width) and leaves height:auto, so nothing can be squeezed or stretched.
 * The assets have a true-black background, so `mix-blend-mode: screen` lets
 * them sit seamlessly on the near-black brand surface.
 */
export function LogoFull({ className = '', loading = 'eager' }) {
  return (
    <img
      className={`logo-full ${className}`}
      src="/brand/afriverse-logo-full.webp"
      srcSet="/brand/afriverse-logo-full-sm.webp 640w, /brand/afriverse-logo-full.webp 964w"
      sizes="(max-width: 600px) 80vw, 320px"
      width="964" height="810"
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

/* Emblem only: the exact Africa-outline mark from the official logo. */
export function LogoEmblem({ size = 40 }) {
  return (
    <img
      className="logo-emblem"
      src="/brand/afriverse-emblem-mark-sm.webp"
      width="192" height="204"
      style={{ width: size, height: 'auto' }}
      alt=""
      aria-hidden="true"
      decoding="async"
    />
  );
}

/* Brand tile used where a card/section needs the AFRIVERSE mark in place of a
   generic icon. A dark rounded tile guarantees contrast on light AND dark
   surfaces without altering the emblem. */
export function BrandMark({ size = 52, className = '' }) {
  return (
    <span className={`brand-mark ${className}`} style={{ '--bm': `${size}px` }} aria-hidden="true">
      <img
        src="/brand/afriverse-emblem-mark-sm.webp"
        width="192" height="204"
        alt=""
        decoding="async"
        loading="lazy"
      />
    </span>
  );
}
