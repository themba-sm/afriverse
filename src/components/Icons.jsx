const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: false };

export const Arrow = (p) => (<svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const Check = (p) => (<svg {...base} {...p}><path d="M4.5 12.5l5 5 10-11" /></svg>);
export const Plus = (p) => (<svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>);
export const Menu = (p) => (<svg {...base} {...p}><path d="M4 8h16M4 16h16" /></svg>);
export const Close = (p) => (<svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>);

const serviceIcons = {
  workflow: <><circle cx="6" cy="6" r="2.2" /><circle cx="18" cy="12" r="2.2" /><circle cx="6" cy="18" r="2.2" /><path d="M8 6h4a4 4 0 014 4M8 18h4a4 4 0 004-4" /></>,
  leads: <><path d="M4 5h16l-6 7v5l-4 2v-7L4 5z" /></>,
  enquiries: <><path d="M4 6h16v9H10l-4 4v-4H4V6z" /><path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" strokeWidth="2.4" /></>,
  booking: <><rect x="4" y="5" width="16" height="15" rx="3" /><path d="M8 3v4M16 3v4M4 10h16M9 15l2 2 4-4" /></>,
  integration: <><path d="M9 7V4M15 7V4M7 7h10v4a5 5 0 01-10 0V7zM12 16v4" /></>,
  insight: <><path d="M4 19V5M4 19h16" /><path d="M8 15l3-4 3 2 4-6" /></>,
  admin: <><rect x="5" y="4" width="14" height="17" rx="2.5" /><path d="M9 4V2.8M15 4V2.8M9 9.5h6M9 13h4M9 16.5h4" /></>,
  support: <><path d="M5 13a7 7 0 0114 0v4a3 3 0 01-3 3h-2" /><path d="M5 13v4a2 2 0 002 2h1v-6H7a2 2 0 00-2 2z" /><path d="M19 13h-2v6" /></>,
};
export const ServiceIcon = ({ id }) => (<svg {...base} width="26" height="26">{serviceIcons[id]}</svg>);

const industryIcons = {
  'real-estate': <><path d="M4 11l8-6.5 8 6.5" /><path d="M6.5 10v9h11v-9" /><path d="M10.5 19v-5h3v5" /></>,
  legal: <><path d="M12 4v15M7 19h10" /><path d="M4 8h16M7 8l-3 5h6l-3-5zM17 8l-3 5h6l-3-5z" /></>,
  construction: <><path d="M4 20l7-7M9 6l6 6M6 9l6-6" /><path d="M13 15l4-4 3 3-4 4z" /></>,
  professional: <><rect x="3.5" y="8" width="17" height="11" rx="2.5" /><path d="M9 8l1.2-2.4A1.8 1.8 0 0111.8 4.5h.4a1.8 1.8 0 011.6 1.1L15 8M3.5 12.5h17" /></>,
  salon: <><circle cx="7" cy="7" r="2.6" /><circle cx="7" cy="17" r="2.6" /><path d="M9.2 8.5L20 18M9.2 15.5L20 6" /></>,
  fitness: <><path d="M7 8v8M4.5 9.5v5M17 8v8M19.5 9.5v5" /><path d="M7 12h10" /></>,
  automotive: <><path d="M4 13l1.6-4.4A2 2 0 017.5 7.2h9a2 2 0 011.9 1.4L20 13v4h-2.2M6.2 17H4v-4h16M6.2 17a1.9 1.9 0 003.6 0M10 17h4M14 17a1.9 1.9 0 003.6 0M6.2 13h11.6" /></>,
  fashion: <><path d="M8.5 4L4 6.5 5.5 11l2-.8V20h9v-9.8l2 .8L20 6.5 15.5 4a3.5 3.5 0 01-7 0z" /></>,
  barber: <><path d="M6.5 5v13.5a2 2 0 002 2h1.5a2 2 0 002-2V5a1.8 1.8 0 00-3.6 0v9" /><path d="M17 5.5v14M15 5.5h4M17.8 9.5l3.2-1.5M17.8 13.5l3.2-1.5" /></>,
  hospitality: <><path d="M3 18v-6h13a4 4 0 014 4v2H3zM3 12V7" /><path d="M3 15h18M7.5 9.5h.01" strokeWidth="2.4" /></>,
};
export const IndustryIcon = ({ id }) => (<svg {...base} width="26" height="26">{industryIcons[id]}</svg>);
