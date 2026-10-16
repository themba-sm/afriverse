export const SITE = {
  name: 'AFRIVERSE',
  tagline: 'AI Integration. Limitless Impact.',
  // Official contact details are not yet supplied. The form below is fully
  // functional (validated, opens the visitor's email app); set these when known.
  email: '',
  whatsapp: '',
};

export const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'How it works', href: '#process' },
  { label: 'Workflows', href: '#workflows' },
  { label: 'Plans', href: '#plans' },
  { label: 'FAQ', href: '#faq' },
];

export const PILLARS = [
  { title: 'Less repetitive work', body: 'Enquiries, follow-ups, reminders and admin handled by systems that do not forget.' },
  { title: 'Connected systems', body: 'Your forms, calendar, messaging and records working as one flow instead of five tabs.' },
  { title: 'Better customer moments', body: 'Faster replies and cleaner handovers, with people stepping in where judgment matters.' },
];

export const SERVICES = [
  {
    id: 'agents',
    title: 'AI assistants & agents',
    body: 'Conversational assistants that answer common questions, qualify enquiries and hand over to your team with the full context.',
    points: ['Website and messaging assistants', 'Guided qualification', 'Human handover rules'],
  },
  {
    id: 'workflow',
    title: 'Workflow automation',
    body: 'We map the steps your team repeats every day and turn them into reliable, monitored automations.',
    points: ['Lead capture to follow-up', 'Reminders and confirmations', 'Internal notifications'],
  },
  {
    id: 'integration',
    title: 'System integration',
    body: 'Connect the tools you already use so information moves once, correctly, and lands where it is needed.',
    points: ['Forms, calendars and CRMs', 'Messaging channels', 'Spreadsheets and databases'],
  },
  {
    id: 'booking',
    title: 'Booking & scheduling',
    body: 'Self-service booking with confirmations, reminders and rescheduling that cut back-and-forth and no-shows.',
    points: ['Availability rules', 'Automatic reminders', 'Reschedule and cancel flows'],
  },
  {
    id: 'content',
    title: 'Content & communication',
    body: 'Drafting, summarising and organising routine communication so your voice stays consistent and your time stays yours.',
    points: ['Reply drafting', 'Summaries and notes', 'Templates in your tone'],
  },
  {
    id: 'insight',
    title: 'Reporting & insight',
    body: 'Clear, honest reporting on enquiries, bookings and response times, built from data you actually collect.',
    points: ['Simple dashboards', 'Weekly summaries', 'Bottleneck spotting'],
  },
];

export const INDUSTRIES = [
  {
    id: 'real-estate', name: 'Real Estate',
    summary: 'Respond to buyer and tenant enquiries instantly, qualify them, and book viewings without the phone tag.',
    uses: ['Enquiry qualification by budget, area and timeline', 'Viewing scheduling and reminders', 'Listing follow-up sequences'],
  },
  {
    id: 'legal', name: 'Legal Services',
    summary: 'Structured client intake and consultation booking that keeps first contact professional and organised.',
    uses: ['Matter-type intake forms', 'Consultation booking', 'Document checklists and status updates'],
  },
  {
    id: 'construction', name: 'Construction & Contracting',
    summary: 'Turn quote requests into organised, complete job briefs so estimates start from the right information.',
    uses: ['Quote request capture with site details', 'Site-visit scheduling', 'Job and quote follow-up'],
  },
  {
    id: 'professional', name: 'Professional Services',
    summary: 'Streamline onboarding, scheduling and client communication for consultants, accountants and agencies.',
    uses: ['Discovery-call booking', 'Client onboarding flows', 'Recurring reminders and requests'],
  },
  {
    id: 'salon', name: 'Salon & Beauty',
    summary: 'Keep chairs full with easy booking, automatic reminders and rebooking prompts after each visit.',
    uses: ['Service-based booking', 'Appointment reminders', 'Rebooking nudges'],
  },
  {
    id: 'fitness', name: 'Fitness & Wellness',
    summary: 'Simplify class and session booking, trial sign-ups and member communication.',
    uses: ['Trial and class booking', 'Member reminders', 'Re-engagement messages'],
  },
  {
    id: 'automotive', name: 'Automotive',
    summary: 'Handle service bookings, quote enquiries and status updates without tying up the front desk.',
    uses: ['Service and fitment booking', 'Vehicle-detail capture', 'Service reminders'],
  },
  {
    id: 'fashion', name: 'Fashion & Apparel',
    summary: 'Answer product, sizing and order questions at any hour and keep customers informed.',
    uses: ['Product and sizing assistant', 'Order and delivery updates', 'Back-in-stock follow-up'],
  },
  {
    id: 'barber', name: 'Barber Shops',
    summary: 'Walk-in and booked clients managed cleanly, with reminders that reduce empty slots.',
    uses: ['Barber and service selection', 'Slot reminders', 'Regular-client rebooking'],
  },
  {
    id: 'hospitality', name: 'Hospitality & Accommodation',
    summary: 'Respond to booking questions quickly and keep guests informed before, during and after their stay.',
    uses: ['Availability and rates enquiries', 'Pre-arrival information', 'Post-stay follow-up'],
  },
];

export const PROCESS = [
  { n: '01', title: 'Discover', body: 'We learn how your business actually runs, where time is lost and which tasks repeat.' },
  { n: '02', title: 'Design', body: 'We propose a focused workflow, the tools it connects and where your team stays in control.' },
  { n: '03', title: 'Build', body: 'We build and connect the automation, then test it with realistic scenarios before it goes live.' },
  { n: '04', title: 'Refine', body: 'We review how it performs, adjust the details and extend it only where it earns its place.' },
];

// Illustrative workflow patterns. These describe how a flow can be designed,
// not deployed client work.
export const WORKFLOWS = [
  {
    id: 'enquiry', label: 'Enquiry to booking',
    intro: 'A proposed flow for any business that takes enquiries and appointments.',
    steps: [
      { t: 'Enquiry arrives', d: 'From your website, form or messaging channel.' },
      { t: 'Assistant qualifies', d: 'Asks the few questions your team always asks.' },
      { t: 'Booking offered', d: 'Real availability, confirmed in one step.' },
      { t: 'Team notified', d: 'With the full conversation attached.' },
      { t: 'Reminders sent', d: 'Before the appointment, automatically.' },
    ],
  },
  {
    id: 'quote', label: 'Quote request to follow-up',
    intro: 'A proposed flow for quote-led work such as construction and automotive.',
    steps: [
      { t: 'Request received', d: 'Details, photos and location captured in one form.' },
      { t: 'Brief assembled', d: 'Organised into a clean summary for estimating.' },
      { t: 'Team reviews', d: 'You price it; the system tracks the status.' },
      { t: 'Quote sent', d: 'With a scheduled follow-up if there is no reply.' },
      { t: 'Outcome recorded', d: 'So you can see what is converting.' },
    ],
  },
  {
    id: 'retention', label: 'Visit to rebooking',
    intro: 'A proposed flow for repeat-visit businesses such as salons, barbers and fitness.',
    steps: [
      { t: 'Visit completed', d: 'Marked in your calendar or booking tool.' },
      { t: 'Thank-you sent', d: 'A short, personal message in your tone.' },
      { t: 'Feedback invited', d: 'One simple question, easy to answer.' },
      { t: 'Rebooking prompted', d: 'At the interval that suits the service.' },
      { t: 'Lapsed clients nudged', d: 'Gently, with an easy path back.' },
    ],
  },
];

// Plans describe scope, not price. Real pricing is confirmed after a
// consultation, so no figures are shown.
export const BILLING = {
  once: { id: 'once', label: 'Project build', note: 'One-time setup' },
  ongoing: { id: 'ongoing', label: 'Ongoing support', note: 'Setup plus monthly care' },
};

export const PLANS = [
  {
    id: 'launch', name: 'Launch', blurb: 'One focused automation to remove your most repetitive task.',
    price: { once: 'Quoted after consultation', ongoing: 'Quoted after consultation' },
    cta: 'Request a Consultation',
    includesLabel: 'Launch includes',
    features: ['One core workflow, mapped and built', 'Up to two connected tools', 'Testing before go-live', 'Handover walkthrough'],
  },
  {
    id: 'growth', name: 'Growth', blurb: 'A connected set of automations across enquiries, booking and follow-up.', featured: true,
    price: { once: 'Quoted after consultation', ongoing: 'Quoted after consultation' },
    cta: 'Discuss Your Workflow',
    includesLabel: 'Everything in Launch, plus',
    features: ['Multiple connected workflows', 'AI assistant for enquiries and booking', 'Messaging and calendar integration', 'Reporting on enquiries and bookings', 'Priority support during rollout'],
  },
  {
    id: 'partner', name: 'Partner', blurb: 'A longer-term engagement for businesses that want automation to keep evolving.',
    price: { once: 'Quoted after consultation', ongoing: 'Quoted after consultation' },
    cta: 'Request a Consultation',
    includesLabel: 'Everything in Growth, plus',
    features: ['Multi-location or multi-team setups', 'Custom integrations', 'Regular reviews and improvements', 'Dedicated point of contact'],
  },
];

export const FAQS = [
  { q: 'Do I need technical knowledge to work with AFRIVERSE?', a: 'No. You describe how your business runs; we handle the design, building and testing, and explain everything in plain language.' },
  { q: 'Will automation replace my team?', a: 'The aim is the opposite. Automation takes over repetitive admin so your people can spend time on the work and relationships that need a human.' },
  { q: 'Which tools can you connect?', a: 'That depends on what you use today. During the consultation we review your tools and confirm what can be connected before anything is built.' },
  { q: 'How much does it cost?', a: 'Pricing depends on the scope of the workflows, the tools involved and whether you want ongoing support. We confirm a clear quote after a short consultation, so there are no surprises.' },
  { q: 'How long does a project take?', a: 'A single focused workflow is much quicker than a connected set of systems. We give you a realistic timeline once we understand the scope.' },
  { q: 'What happens to my customer data?', a: 'We design flows to collect only what is needed and to keep data in the tools you control. We will walk through exactly how information moves before launch.' },
  { q: 'Can the assistant hand over to a person?', a: 'Yes. Handover rules are part of the design, so customers reach a person whenever the situation calls for one.' },
  { q: 'What if I am not sure where to start?', a: 'That is the most common starting point. Tell us where time is being lost and we will suggest the smallest change that makes the biggest difference.' },
];
