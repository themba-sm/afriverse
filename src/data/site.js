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

export const INTRO = {
  eyebrow: 'About AFRIVERSE',
  title: 'Less manual work. More room to move forward.',
  lead: 'AFRIVERSE helps businesses explore practical ways to connect systems, automate repetitive processes, and create more consistent customer and operational workflows.',
};

export const PILLARS = [
  { title: 'Smarter workflows.', body: 'Repetitive steps mapped once, then handled reliably every time after that.' },
  { title: 'Connected systems.', body: 'Your tools sharing information instead of asking your team to retype it.' },
  { title: 'More consistent operations.', body: 'The same questions asked, the same follow-ups sent, nothing forgotten.' },
];

// Proposed capabilities, pending confirmation against the official company
// document. Each card states the problem and the practical outcome it aims to
// support, rather than claiming live availability.
export const SERVICES = [
  {
    id: 'workflow',
    title: 'AI-powered workflow automation',
    body: 'Teams lose hours to the same repeated steps every day. We map those steps and design automations that carry them out reliably, with your team keeping control where judgment matters.',
    outcome: 'Aimed outcome: fewer repetitive steps, more dependable day-to-day operations.',
    points: ['Repetitive step mapping', 'Monitored automation design', 'Human checkpoints'],
  },
  {
    id: 'leads',
    title: 'Lead capture and follow-up automation',
    body: 'Enquiries that arrive after hours, or go untracked, quietly become lost work. Structured capture and scheduled follow-up aim to keep every enquiry moving toward a response.',
    outcome: 'Aimed outcome: enquiries captured once and followed up without relying on memory.',
    points: ['Structured capture forms', 'Follow-up scheduling', 'Status tracking'],
  },
  {
    id: 'enquiries',
    title: 'Customer enquiry and communication workflows',
    body: 'Answering the same questions by hand slows teams down and keeps response times uneven. Assisted drafting and templated flows aim to keep replies fast and consistent.',
    outcome: 'Aimed outcome: quicker, more consistent replies across your channels.',
    points: ['Enquiry routing', 'Reply drafting in your tone', 'Handover to a person'],
  },
  {
    id: 'booking',
    title: 'Appointment and booking workflows',
    body: 'Back-and-forth scheduling and missed appointments absorb attention. Self-service booking with confirmations and reminders aims to cut the coordination load.',
    outcome: 'Aimed outcome: fewer scheduling rounds and fewer no-shows.',
    points: ['Availability-driven booking', 'Confirmations and reminders', 'Reschedule and cancel flows'],
  },
  {
    id: 'integration',
    title: 'CRM and business-system integration',
    body: 'Information typed into five tools is information typed wrong somewhere. Connecting forms, calendars, messaging and records aims to make information move once, correctly.',
    outcome: 'Aimed outcome: records that stay current without retyping.',
    points: ['Forms, calendars and CRMs', 'Messaging channels', 'Spreadsheets and databases'],
  },
  {
    id: 'insight',
    title: 'Reporting and information workflows',
    body: 'Reports assembled by hand are slow and often outdated by the time they are read. Organising information as it arrives aims to make reporting a by-product of daily work.',
    outcome: 'Aimed outcome: clear, current views of enquiries, bookings and response times.',
    points: ['Simple dashboards', 'Scheduled summaries', 'Bottleneck visibility'],
  },
  {
    id: 'admin',
    title: 'Administrative process automation',
    body: 'Invoices to chase, details to re-check, documents to assemble: small admin tasks add up. Automations can aim to take over the predictable part of this work.',
    outcome: 'Aimed outcome: admin that runs in the background instead of interrupting the day.',
    points: ['Document and checklist flows', 'Reminder sequences', 'Record updates'],
  },
  {
    id: 'support',
    title: 'AI-assisted customer support workflows',
    body: 'Common questions can be answered at any hour, while unusual situations still need a person. Assisted support aims to separate the two cleanly.',
    outcome: 'Aimed outcome: instant answers to common questions, clean handover for the rest.',
    points: ['Assistant-led first responses', 'Escalation rules', 'Full context on handover'],
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

// Proposed engagement path. Presented as an approach shaped around each
// engagement, not a fixed delivery guarantee.
export const PROCESS = [
  { n: '01', title: 'Discover', body: 'Understand the business, existing tools, repetitive work, and operational bottlenecks.' },
  { n: '02', title: 'Design', body: 'Identify suitable automation opportunities and design a workflow around the actual requirements.' },
  { n: '03', title: 'Implement and Refine', body: 'Build, test, and refine the agreed solution, subject to the scope of the engagement.' },
];

// Illustrative workflow patterns. These describe how a flow can be designed,
// not deployed client work, and are not connected to any live company accounts.
export const WORKFLOWS = [
  {
    id: 'enquiry', label: 'Enquiry capture and routing',
    intro: 'A new customer enquiry is captured, organised, and routed to the appropriate person.',
    steps: [
      { k: 'trigger', t: 'Enquiry arrives', d: 'From your website form, WhatsApp or email.' },
      { k: 'action', t: 'Details organised', d: 'Name, need and context assembled into a clean summary.' },
      { k: 'action', t: 'Routed to the right person', d: 'By topic, area or workload rule you define.' },
      { k: 'outcome', t: 'Team notified', d: 'The full conversation attached, nothing retyped.' },
      { k: 'outcome', t: 'Tracked to response', d: 'So no enquiry silently waits for days.' },
    ],
  },
  {
    id: 'booking', label: 'Booking and confirmation',
    intro: 'A booking enquiry triggers the appropriate scheduling and confirmation workflow.',
    steps: [
      { k: 'trigger', t: 'Booking requested', d: 'Customer asks for a time through chat or form.' },
      { k: 'action', t: 'Availability checked', d: 'Real slots pulled from your calendar rules.' },
      { k: 'action', t: 'Slot confirmed', d: 'Customer picks, the appointment is created.' },
      { k: 'outcome', t: 'Confirmation sent', d: 'Straight away, in your voice.' },
      { k: 'outcome', t: 'Reminders scheduled', d: 'Before the appointment, automatically.' },
    ],
  },
  {
    id: 'reporting', label: 'Connected reporting',
    intro: 'Information from connected business tools is organised into a reporting process.',
    steps: [
      { k: 'trigger', t: 'Information arrives', d: 'New enquiries, bookings and updates land in your tools.' },
      { k: 'action', t: 'Records updated', d: 'Counts and statuses kept current automatically.' },
      { k: 'action', t: 'Report assembled', d: 'Into a simple weekly view you actually read.' },
      { k: 'outcome', t: 'Clear visibility', d: 'Enquiries, bookings and response times at a glance.' },
      { k: 'outcome', t: 'Bottlenecks visible', d: 'So improvements go where they matter.' },
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
  { q: 'What does AI automation actually mean for a business?', a: 'It means software carries out the repetitive, predictable steps of your work, like capturing an enquiry, sending a reminder or updating a record, so your team handles only the parts that need a person. It is practical system work, not science fiction.' },
  { q: 'Which business processes can be automated?', a: 'Typically the ones your team repeats with little variation: enquiry capture and qualification, booking and confirmations, follow-ups and reminders, record updates and routine reporting. During a consultation we identify which of yours are good candidates, and which should stay manual.' },
  { q: 'Can my existing software be integrated?', a: 'Often, yes. Many modern tools expose connections we can work with. We review the specific tools you use during the consultation and confirm honestly what can be connected before anything is built, rather than promising universal compatibility.' },
  { q: 'How is a project scoped?', a: 'We start by understanding how your business actually runs, then propose the smallest workflow that addresses your biggest bottleneck. The scope, tools and where your team stays in control are agreed before building starts.' },
  { q: 'How is pricing determined?', a: 'By the scope of the workflows, the number of tools involved, and whether you want ongoing support. Rather than invent a number here, we confirm a clear quote after a short consultation, so you only ever pay for what was agreed.' },
  { q: 'What happens after implementation?', a: 'We walk your team through how everything works, and the automation is tested against realistic scenarios before it goes live. After that, what happens next depends on the engagement: a handover, or ongoing reviews and refinements under a support arrangement.' },
  { q: 'Can solutions be tailored to my industry?', a: 'Yes. The workflow patterns are the same, but the questions, terminology and pace are shaped around how your industry actually operates. Explore the industry section to see how this applies in practice.' },
];
