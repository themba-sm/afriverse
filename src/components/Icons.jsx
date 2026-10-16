const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: false };

export const Arrow = (p) => (<svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const Check = (p) => (<svg {...base} {...p}><path d="M4.5 12.5l5 5 10-11" /></svg>);
export const Plus = (p) => (<svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>);
export const Menu = (p) => (<svg {...base} {...p}><path d="M4 8h16M4 16h16" /></svg>);
export const Close = (p) => (<svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>);

const icons = {
  agents: <><rect x="4" y="6" width="16" height="11" rx="3" /><path d="M9 11h.01M15 11h.01M10 20h4M12 17v3" /></>,
  workflow: <><circle cx="6" cy="6" r="2.2" /><circle cx="18" cy="12" r="2.2" /><circle cx="6" cy="18" r="2.2" /><path d="M8 6h4a4 4 0 014 4M8 18h4a4 4 0 004-4" /></>,
  integration: <><path d="M9 7V4M15 7V4M7 7h10v4a5 5 0 01-10 0V7zM12 16v4" /></>,
  booking: <><rect x="4" y="5" width="16" height="15" rx="3" /><path d="M8 3v4M16 3v4M4 10h16M9 15l2 2 4-4" /></>,
  content: <><path d="M5 5h14v10H9l-4 4V5z" /><path d="M9 9h6M9 12h4" /></>,
  insight: <><path d="M4 19V5M4 19h16" /><path d="M8 15l3-4 3 2 4-6" /></>,
};
export const ServiceIcon = ({ id }) => (<svg {...base} width="26" height="26">{icons[id]}</svg>);
