/*
 * Industry solution pages. All copy is draft, honest and proposed: no client
 * stories, testimonials, measured improvements, certifications or guarantees.
 * Integrations with third-party platforms are always framed as subject to
 * compatibility and scope confirmation. Each entry drives one shared
 * IndustryPage template, plus metadata for the browser title/description.
 */

export const INDUSTRY_PAGES = {
  'real-estate': {
    name: 'Real Estate',
    metaTitle: 'Real Estate Automation & Integration — AFRIVERSE',
    metaDesc: 'Proposed enquiry capture, viewing coordination and follow-up workflows for estate agencies and property teams.',
    heroTitle: 'From First Enquiry to Confirmed Viewing.',
    heroCopy: 'Property enquiries arrive at all hours from portals, WhatsApp and calls. AFRIVERSE proposes structured capture, qualification, viewing coordination and follow-up workflows so every serious buyer or tenant keeps moving.',
    ui: {
      title: 'Property enquiry workflow',
      lines: [
        { t: 'New enquiry — 3-bed, Amberfield', tag: 'captured' },
        { t: 'Qualification: budget, area, timeline', tag: 'sent' },
        { t: 'Viewing scheduled — Sat 10:00', tag: 'confirmed' },
      ],
    },
    challenges: [
      { t: 'Enquiries arrive after hours', b: 'A buyer messages at nine at night; the reply waits until morning, and the lead cools off or moves on.' },
      { t: 'Leads live in five places', b: 'Portals, WhatsApp, calls and email each hold pieces of the same enquiry, and nothing sits in one record.' },
      { t: 'Follow-up depends on memory', b: 'When an agent is busy, the promised follow-up is the first thing that slips quietly away.' },
      { t: 'Viewing coordination is manual', b: 'Back-and-forth to find a slot absorbs the hours that should go to showings and negotiation.' },
    ],
    opportunities: [
      { t: 'Enquiry capture and qualification', b: 'Budget, area and timeline captured from the first message, with an instant, professional acknowledgement.' },
      { t: 'Viewing coordination', b: 'Availability-based scheduling with confirmations and reminders, routed to the responsible agent.' },
      { t: 'Administrative workflows', b: 'Listing follow-ups, document requests and routine status updates handled as agreed workflows.' },
    ],
    workflows: [
      { name: 'Enquiry intake', t: 'A message or portal enquiry arrives', a: 'Details captured, qualified, logged and routed to the responsible agent', o: 'Instant acknowledgement and a complete lead record' },
      { name: 'Viewing coordination', t: 'A qualified lead requests a viewing', a: 'Available slots offered and the booking confirmed with reminders', o: 'Fewer missed viewings and no phone tag' },
      { name: 'Follow-up sequence', t: 'A lead has not responded', a: 'Agreed follow-up messages sent on schedule, with handover when a reply lands', o: 'No lead forgotten while it is still warm' },
    ],
    flow: { title: 'How an example enquiry moves', steps: ['Enquiry received', 'Details captured & qualified', 'Agent notified & viewing booked', 'Reminder & follow-up sent'] },
    value: {
      lead: 'The aim is a practice where no enquiry waits and no follow-up is forgotten.',
      points: ['Faster, more consistent first response to every enquiry', 'A single, complete record for each buyer or tenant', 'Agent time returned to showings, offers and negotiation', 'Clearer visibility of the pipeline and its follow-ups'],
    },
    faqs: [
      { q: 'Do you replace the agent?', a: 'No. Proposed workflows handle the repetitive parts — capture, acknowledgement, scheduling and follow-up — while judgement, negotiation and relationships stay with your team.' },
      { q: 'Will it work with our property portals and CRM?', a: 'That depends on the platforms involved. Any portal or CRM integration is proposed only after compatibility and scope are confirmed in the consultation.' },
      { q: 'Where do we start?', a: 'Most agencies start with the Essential scope: one defined workflow, such as enquiry capture and routing, then expand as it proves itself.' },
      { q: 'What about enquiries that need a human answer?', a: 'Every workflow includes agreed handover points, so anything sensitive or unusual goes straight to a person.' },
    ],
  },

  legal: {
    name: 'Legal Services',
    metaTitle: 'Legal Services Workflow Automation — AFRIVERSE',
    metaDesc: 'Proposed client intake, consultation scheduling and document-related administrative workflows for legal practices.',
    heroTitle: 'Calm, Consistent Client Administration for Legal Practices.',
    heroCopy: 'AFRIVERSE proposes intake, scheduling and document-related administrative workflows that keep first contact professional and organised, while professional judgement stays entirely with the practice.',
    ui: {
      title: 'Client intake workflow',
      lines: [
        { t: 'New enquiry — family law consultation', tag: 'captured' },
        { t: 'Intake questions sent to client', tag: 'sent' },
        { t: 'Consultation booked — Tue 14:30', tag: 'confirmed' },
      ],
    },
    challenges: [
      { t: 'Intake details arrive in fragments', b: 'Enquiries, referrals and walk-ins each arrive in a different format, and collecting matter basics takes several calls.' },
      { t: 'Consultation scheduling is back-and-forth', b: 'Matching availability between attorney and client by phone and email absorbs front-office time.' },
      { t: 'Document-related admin repeats', b: 'Requesting the same standard documents and confirming receipt is predictable, manual work.' },
      { t: 'Routine updates take attorney time', b: 'Telling clients where their matter stands is necessary, but it does not need to be typed by hand each time.' },
    ],
    opportunities: [
      { t: 'Enquiry intake and triage', b: 'Matter type identified from first contact, intake details captured, and the enquiry routed to the right team.' },
      { t: 'Consultation scheduling', b: 'Availability offered, bookings confirmed and reminders sent, with prepared summaries for the team.' },
      { t: 'Agreed administrative workflows', b: 'Document requests, receipt confirmation and status updates — administrative only, never legal advice.' },
    ],
    workflows: [
      { name: 'Enquiry intake', t: 'An enquiry or referral arrives', a: 'Matter type identified, intake details captured and routed to the right team', o: 'Organised first contact and a consultation offered' },
      { name: 'Consultation scheduling', t: 'A consultation is requested', a: 'Availability offered, booking confirmed and a reminder sent', o: 'Fewer no-shows and less phone tag' },
      { name: 'Routine client updates', t: 'A matter reaches an agreed checkpoint', a: 'Standard status update sent exactly as agreed with the practice', o: 'Clients informed without billing attorney time' },
    ],
    flow: { title: 'How an example enquiry moves', steps: ['Enquiry received', 'Intake captured & routed', 'Consultation scheduled', 'Prepared summary for the team'] },
    value: {
      lead: 'The aim is front-office consistency that protects the time of the professionals behind it.',
      points: ['Professional, consistent first contact for every enquiry', 'Matter basics collected once, correctly', 'Attorney time returned to substantive work', 'Clients kept informed without extra calls'],
    },
    faqs: [
      { q: 'Does AFRIVERSE provide legal advice?', a: 'No. It handles administrative and communication workflows only. Legal judgement, advice and case strategy remain entirely with the practice.' },
      { q: 'What about confidentiality?', a: 'Handled as agreed in the consultation: what is collected, where it is stored and who sees it are decided before anything is built.' },
      { q: 'Will it work with our practice management software?', a: 'That depends on the platform. Any integration is proposed only after compatibility and scope are confirmed.' },
      { q: 'Where do we start?', a: 'Most practices start with the Essential scope: one workflow, such as enquiry intake and consultation scheduling, then expand from there.' },
    ],
  },

  construction: {
    name: 'Construction & Contracting',
    metaTitle: 'Construction & Contracting Automation — AFRIVERSE',
    metaDesc: 'Proposed quote-request capture, lead routing, and client and supplier communication workflows for contractors.',
    heroTitle: 'From Quote Request to Booked Site Visit.',
    heroCopy: 'Quote requests arrive with half the information needed to price them. AFRIVERSE proposes structured capture, routing and follow-up workflows so estimates start from complete briefs, and open quotes never sit forgotten.',
    ui: {
      title: 'Quote request workflow',
      lines: [
        { t: 'New quote request — roof repairs, Boksburg', tag: 'captured' },
        { t: 'Site details & scope requested', tag: 'sent' },
        { t: 'Estimator notified — visit booked', tag: 'confirmed' },
      ],
    },
    challenges: [
      { t: 'Quote requests are incomplete', b: 'Scope, site access and contact details arrive piecemeal, so pricing starts with phone calls instead of information.' },
      { t: 'Enquiries are routed by chance', b: 'Whoever sees the message first handles it, and some requests wait days for a callback.' },
      { t: 'Client communication is manual', b: 'Updates, site-visit arrangements and supplier coordination are typed out by hand, every time.' },
      { t: 'Open quotes are forgotten', b: 'A sent quote with no follow-up is work won by whoever chased the client last — often a competitor.' },
    ],
    opportunities: [
      { t: 'Quote request capture', b: 'Structured briefs with site details and scope, acknowledged instantly with a professional reply.' },
      { t: 'Lead routing and scheduling', b: 'Requests routed to the right estimator with site-visit slots offered and confirmed.' },
      { t: 'Communication workflows', b: 'Agreed updates to clients and routine coordination with suppliers, sent on schedule.' },
    ],
    workflows: [
      { name: 'Quote request intake', t: 'A request arrives by call, form or message', a: 'Scope and site details captured and routed to the responsible estimator', o: 'Complete briefs and an instant acknowledgement' },
      { name: 'Quote follow-up', t: 'A quote has been sent', a: 'Agreed follow-ups sent on schedule, with handover when the client replies', o: 'Open quotes chased politely, not forgotten' },
      { name: 'Project administration', t: 'A job is confirmed', a: 'Routine client updates and supplier coordination handled as agreed workflows', o: 'Fewer admin interruptions during site work' },
    ],
    flow: { title: 'How an example request moves', steps: ['Quote request received', 'Scope & site details captured', 'Routed to the right estimator', 'Follow-up & site visit scheduled'] },
    value: {
      lead: 'The aim is a pipeline where every request is answered, routed and followed up the same way.',
      points: ['Estimates start from complete, consistent briefs', 'No quote request waiting for a callback', 'A clearer view of open quotes and the job pipeline', 'Admin time returned to the site'],
    },
    faqs: [
      { q: 'Do you replace our estimators?', a: 'No. Workflows handle capture, routing, acknowledgements and follow-up. Pricing and judgement stay entirely with your team.' },
      { q: 'Will it work with our tools?', a: 'That depends on the platforms involved. Any integration is proposed only after compatibility and scope are confirmed in the consultation.' },
      { q: 'What about urgent jobs?', a: 'Every workflow includes agreed escalation points, so urgent requests reach a person immediately.' },
      { q: 'Where do we start?', a: 'Most contractors start with the Essential scope: one workflow, such as quote request capture and routing, then expand as it proves itself.' },
    ],
  },

  professional: {
    name: 'Professional Services',
    metaTitle: 'Professional Services Automation & Integration — AFRIVERSE',
    metaDesc: 'Proposed enquiry, onboarding, CRM and follow-up workflows for consulting, accounting and professional service firms.',
    heroTitle: 'A Consistent Client Experience, From First Call to Onboarding.',
    heroCopy: 'AFRIVERSE proposes enquiry capture, onboarding and follow-up workflows that keep every client moving through the same professional process, with records kept current along the way.',
    ui: {
      title: 'Client onboarding workflow',
      lines: [
        { t: 'New client enquiry — accounting services', tag: 'captured' },
        { t: 'Proposal sent & follow-up scheduled', tag: 'sent' },
        { t: 'Welcome & onboarding steps started', tag: 'confirmed' },
      ],
    },
    challenges: [
      { t: 'Onboarding steps live in people\u2019s heads', b: 'Each new client gets a slightly different start, and the gaps show up weeks later.' },
      { t: 'CRM records go stale', b: 'Client details are updated when someone remembers, so the record and reality drift apart.' },
      { t: 'Proposal follow-ups slip', b: 'A proposal sent with no chase is a decision made by silence.' },
      { t: 'Appointment coordination is manual', b: 'The same scheduling emails are typed out for every discovery call.' },
    ],
    opportunities: [
      { t: 'Enquiry capture and scheduling', b: 'Client details captured once and discovery calls booked from real availability.' },
      { t: 'Onboarding workflows', b: 'Agreed welcome and kickoff steps delivered the same way for every new client.' },
      { t: 'Proposals and CRM follow-ups', b: 'Proposal chases sent on schedule, with client records kept current as agreed.' },
    ],
    workflows: [
      { name: 'Enquiry and appointment', t: 'A new enquiry arrives', a: 'Details captured and a discovery call booked from availability', o: 'A professional start with no scheduling rounds' },
      { name: 'Proposal follow-up', t: 'A proposal is sent', a: 'Agreed follow-ups sent until a decision, with handover on any reply', o: 'Decisions encouraged instead of left to silence' },
      { name: 'Onboarding sequence', t: 'A client signs', a: 'Welcome, kickoff and information requests delivered as agreed steps', o: 'Every client started the same, complete way' },
    ],
    flow: { title: 'How an example engagement moves', steps: ['Enquiry received', 'Client details captured', 'Proposal sent & followed up', 'Onboarding steps scheduled'] },
    value: {
      lead: 'The aim is a client experience that runs the same excellent way every time, without someone holding it together by hand.',
      points: ['Every client gets the same professional start', 'Records current without retyping', 'Proposals chased politely and on time', 'Consultants freed for billable work'],
    },
    faqs: [
      { q: 'Will it replace our CRM?', a: 'No. Where your CRM is compatible, workflows aim to keep its records current instead of adding another system.' },
      { q: 'Will it work with our current tools?', a: 'That depends on the platforms involved. Any integration is proposed only after compatibility and scope are confirmed in the consultation.' },
      { q: 'Do the messages sound like us?', a: 'Every template is drafted in your tone and approved by you before anything is sent.' },
      { q: 'Where do we start?', a: 'Most firms start with the Essential scope: one workflow, such as enquiry capture and appointment coordination, then expand from there.' },
    ],
  },

  salon: {
    name: 'Salon & Beauty',
    metaTitle: 'Salon & Beauty Automation & Integration — AFRIVERSE',
    metaDesc: 'Proposed booking, reminder, rebooking and re-engagement workflows for salons and beauty businesses.',
    heroTitle: 'Fully Booked, Without the Phone Ringing All Day.',
    heroCopy: 'Appointment enquiries, confirmations, reminders and rebooking prompts: AFRIVERSE proposes customer communication workflows that let the front desk focus on the clients in the chair.',
    ui: {
      title: 'Appointment workflow',
      lines: [
        { t: 'Booking enquiry — gel nails, Sat', tag: 'captured' },
        { t: 'Slot offered & confirmed', tag: 'sent' },
        { t: 'Reminder sent — day before', tag: 'scheduled' },
      ],
    },
    challenges: [
      { t: 'Booking requests arrive mid-visit', b: 'While the front desk is with a client, WhatsApp enquiries wait unanswered — some clients book elsewhere.' },
      { t: 'No-shows and late changes', b: 'An empty slot at peak time is revenue that is gone, not just moved.' },
      { t: 'Rebooking depends on memory', b: 'Regulars return when they think of it, not when their next visit is actually due.' },
      { t: 'Routine communication adds up', b: 'Confirmations, reminders and follow-backs each take a moment, a hundred times a week.' },
    ],
    opportunities: [
      { t: 'Booking enquiry handling', b: 'Enquiries answered instantly with real availability, wherever the message arrives.' },
      { t: 'Reminders and confirmations', b: 'Agreed reminders that reduce no-shows without nagging clients.' },
      { t: 'Rebooking and re-engagement', b: 'Prompts sent when each client\u2019s next visit is due, in your voice.' },
    ],
    workflows: [
      { name: 'Booking enquiries', t: 'A client messages about a slot', a: 'Availability offered and the booking confirmed with the right service details', o: 'Instant answers without interrupting the desk' },
      { name: 'Reminder sequence', t: 'An appointment is booked', a: 'Confirmation sent at booking and a reminder at the agreed time before', o: 'Fewer no-shows and quieter phone lines' },
      { name: 'Re-engagement', t: 'A client\u2019s next visit becomes due', a: 'A rebooking prompt sent in your tone, with handover for any reply', o: 'Regulars nudged back on schedule' },
    ],
    flow: { title: 'How an example booking moves', steps: ['Booking enquiry received', 'Slot offered & confirmed', 'Reminder sent day before', 'Rebooking prompt after visit'] },
    value: {
      lead: 'The aim is a fuller column and a calmer front desk, without clients feeling processed.',
      points: ['Quicker replies to booking requests', 'Fewer no-shows with agreed reminders', 'Steadier rebooking between visits', 'Front desk time back for clients in the salon'],
    },
    faqs: [
      { q: 'Will it work with our booking system?', a: 'That depends on the platform. Any booking-system integration is proposed only after compatibility and scope are confirmed in the consultation.' },
      { q: 'Do the messages feel automated?', a: 'They shouldn\u2019t. Templates are drafted in your tone and approved by you; anything unusual is handed to a person.' },
      { q: 'What about clients who prefer to call?', a: 'Nothing changes for them. Workflows simply handle the repetitive written communication around them.' },
      { q: 'Where do we start?', a: 'Most salons start with the Essential scope: one workflow, such as booking enquiry handling, then expand as it proves itself.' },
    ],
  },

  fitness: {
    name: 'Fitness & Wellness',
    metaTitle: 'Fitness & Wellness Automation & Integration — AFRIVERSE',
    metaDesc: 'Proposed membership enquiry, trial booking, onboarding and engagement workflows for gyms and studios.',
    heroTitle: 'From Trial Enquiry to Engaged Member.',
    heroCopy: 'Membership enquiries, trial bookings, onboarding communication and follow-ups: AFRIVERSE proposes workflows that keep prospects and members moving without adding front-desk workload.',
    ui: {
      title: 'Trial booking workflow',
      lines: [
        { t: 'New trial enquiry — 2-week trial', tag: 'captured' },
        { t: 'Trial session booked & confirmed', tag: 'sent' },
        { t: 'Onboarding message sequence started', tag: 'running' },
      ],
    },
    challenges: [
      { t: 'Trial enquiries arrive at all hours', b: 'People decide to get fit at 22:00; a reply the next afternoon is a colder lead.' },
      { t: 'Onboarding communication is inconsistent', b: 'Some new members get a welcome sequence; others get a handshake and silence.' },
      { t: 'Member follow-up is manual', b: 'Checking in on quiet members happens when someone remembers, which is rarely.' },
      { t: 'Engagement dips quietly', b: 'Lapses are invisible until the cancellation arrives.' },
    ],
    opportunities: [
      { t: 'Membership enquiry handling', b: 'Enquiries captured and answered instantly, with trial sessions booked from real availability.' },
      { t: 'Onboarding communications', b: 'Agreed welcome sequences that give every new member the same strong start.' },
      { t: 'Follow-up and engagement', b: 'Check-ins and win-back messages sent on schedule, with handover when someone replies.' },
    ],
    workflows: [
      { name: 'Trial booking', t: 'A prospect asks about joining', a: 'Trial session offered, booked and confirmed with a reminder', o: 'A warm first visit instead of a cold callback' },
      { name: 'Member onboarding', t: 'A new member signs up', a: 'Welcome and orientation messages sent as an agreed sequence', o: 'Every member started the same way' },
      { name: 'Win-back follow-ups', t: 'A member goes quiet', a: 'Agreed check-in sent, with handover to staff for any reply', o: 'Quiet lapses noticed and acted on early' },
    ],
    flow: { title: 'How an example trial moves', steps: ['Trial enquiry received', 'Session booked & confirmed', 'Onboarding messages started', 'Follow-up & conversion check-in'] },
    value: {
      lead: 'The aim is a membership journey that keeps people moving, without your team writing every message by hand.',
      points: ['Every trial enquiry answered fast', 'A consistent welcome for every new member', 'Quiet lapses noticed and acted on', 'Staff time returned to coaching clients'],
    },
    faqs: [
      { q: 'Will it work with our membership system?', a: 'That depends on the platform. Any membership-system integration is proposed only after compatibility and scope are confirmed.' },
      { q: 'Does this replace our front desk?', a: 'No. Workflows handle the repetitive written communication so your team can focus on members in the gym.' },
      { q: 'Can members opt out?', a: 'Yes. Message frequency and opt-outs are agreed in the consultation and respected by every workflow.' },
      { q: 'Where do we start?', a: 'Most gyms start with the Essential scope: one workflow, such as trial enquiry booking, then expand from there.' },
    ],
  },

  automotive: {
    name: 'Automotive',
    metaTitle: 'Automotive Automation & Integration — AFRIVERSE',
    metaDesc: 'Proposed vehicle enquiry, test-drive coordination, service reminder and follow-up workflows for dealerships and workshops.',
    heroTitle: 'Every Vehicle Enquiry, Answered in Minutes.',
    heroCopy: 'Vehicle enquiries, test-drive requests and service bookings arrive across calls, WhatsApp and web forms. AFRIVERSE proposes capture, coordination and follow-up workflows so no lead waits and no service slips.',
    ui: {
      title: 'Vehicle enquiry workflow',
      lines: [
        { t: 'New enquiry — pre-owned SUV, R350k', tag: 'captured' },
        { t: 'Test-drive slot offered & booked', tag: 'confirmed' },
        { t: 'Service reminder — 15,000 km due', tag: 'scheduled' },
      ],
    },
    challenges: [
      { t: 'Enquiries get lost between desks', b: 'A sales question forwarded to service, or vice versa, waits in someone\u2019s inbox.' },
      { t: 'Test-drive coordination is manual', b: 'Matching a customer, a car and a slot takes messages nobody has time to type.' },
      { t: 'Service reminders go out late', b: 'The customer who remembers first books first — often somewhere else.' },
      { t: 'Sales follow-up is inconsistent', b: 'Some leads get chased; others simply expire.' },
    ],
    opportunities: [
      { t: 'Enquiry capture and routing', b: 'Vehicle, budget and intent captured once, then routed to sales or the workshop.' },
      { t: 'Test-drive and service coordination', b: 'Slots offered from real availability, confirmed with reminders.' },
      { t: 'Follow-up workflows', b: 'Agreed sales follow-ups and service reminders sent on schedule, with handover on replies.' },
    ],
    workflows: [
      { name: 'Vehicle enquiry intake', t: 'An enquiry arrives on any channel', a: 'Model, budget and intent captured and routed to the right desk', o: 'Instant answers and a single lead record' },
      { name: 'Test-drive coordination', t: 'A customer wants to drive the car', a: 'A slot offered, booked and confirmed with a reminder', o: 'Showroom-ready customers instead of phone tag' },
      { name: 'Service reminder workflow', t: 'A service interval approaches', a: 'Agreed reminder sent with booking details offered', o: 'Workshop slots filled before customers look elsewhere' },
    ],
    flow: { title: 'How an example enquiry moves', steps: ['Enquiry received', 'Model & budget captured', 'Test-drive booked & confirmed', 'Follow-up on schedule'] },
    value: {
      lead: 'The aim is a dealership where every enquiry, on every desk, gets the same fast, consistent response.',
      points: ['Faster response to every enquiry', 'Sales and workshop coordinated from one record', 'Service reminders that actually go out', 'Sales time returned to customers on the floor'],
    },
    faqs: [
      { q: 'Will it work with our dealer management system?', a: 'That depends on the platform. Any DMS or CRM integration is proposed only after compatibility and scope are confirmed.' },
      { q: 'Do you replace our sales team?', a: 'No. Workflows handle capture, acknowledgement, scheduling and follow-up; selling stays entirely with your team.' },
      { q: 'What about trade-ins and negotiations?', a: 'Those are handover points by design: a person takes over the moment judgement is needed.' },
      { q: 'Where do we start?', a: 'Most dealerships start with the Essential scope: one workflow, such as enquiry capture and routing, then expand from there.' },
    ],
  },

  fashion: {
    name: 'Fashion & Apparel',
    metaTitle: 'Fashion & Apparel Automation & Integration — AFRIVERSE',
    metaDesc: 'Proposed product enquiry, order communication and follow-up workflows for fashion brands and apparel stores.',
    heroTitle: 'Customer Conversations, Styled to Your Brand.',
    heroCopy: 'Product enquiries, order updates and support requests: AFRIVERSE proposes communication workflows drafted in your tone, with commerce-system connections where compatibility allows.',
    ui: {
      title: 'Customer support workflow',
      lines: [
        { t: 'Product enquiry — sizing, size 8 dress', tag: 'answered' },
        { t: 'Order update — shipped, tracking sent', tag: 'sent' },
        { t: 'Post-purchase follow-up', tag: 'scheduled' },
      ],
    },
    challenges: [
      { t: 'Sizing questions repeat all day', b: 'The same answers typed by hand, while each unanswered hour risks the sale.' },
      { t: 'Order updates are typed one by one', b: 'Shipping and collection notices are predictable — but they are still manual.' },
      { t: 'Follow-up after delivery is rare', b: 'The conversation usually ends at the courier, and the next order is left to chance.' },
      { t: 'Channels drift out of sync', b: 'Instagram DMs, WhatsApp and email each get answered differently, or not at all.' },
    ],
    opportunities: [
      { t: 'Product enquiry handling', b: 'Instant answers from your agreed product information, in your brand voice.' },
      { t: 'Order communication', b: 'Confirmed and shipping updates sent as agreed workflows, wherever the platform allows.' },
      { t: 'Post-purchase follow-ups', b: 'Gentle check-ins and re-engagement prompts between drops.' },
    ],
    workflows: [
      { name: 'Enquiry handling', t: 'A customer asks about fit or stock', a: 'An instant answer drafted from your agreed product information', o: 'Fast, on-brand answers without a staff reply each time' },
      { name: 'Order updates', t: 'An order progresses', a: 'Agreed updates sent at each stage, where the platform supports it', o: 'Customers informed without manual typing' },
      { name: 'Re-engagement', t: 'A drop or season approaches', a: 'Follow-ups sent to past customers in your tone', o: 'Repeat customers invited back, not forgotten' },
    ],
    flow: { title: 'How an example enquiry moves', steps: ['Customer enquiry received', 'Answered from agreed product info', 'Order updates sent automatically', 'Post-purchase follow-up'] },
    value: {
      lead: 'The aim is customer communication that feels personal at the volume your brand actually runs at.',
      points: ['Quicker answers in your brand voice', 'Customers informed without typing each update', 'Repeat customers re-engaged between drops', 'Support time returned to growth work'],
    },
    faqs: [
      { q: 'Will it work with our online store?', a: 'That depends on the platform. Commerce-system integrations are proposed only after compatibility and scope are confirmed in the consultation.' },
      { q: 'Will customers know they are talking to automation?', a: 'Messages are drafted in your tone, and anything the workflow cannot answer is handed to a person. What you disclose, and when, is your decision.' },
      { q: 'Can it handle returns and exchanges?', a: 'Routine return questions and instructions can be handled from your agreed policy; judgement cases go to a person.' },
      { q: 'Where do we start?', a: 'Most brands start with the Essential scope: one workflow, such as product enquiry handling, then expand from there.' },
    ],
  },

  barber: {
    name: 'Barber Shops',
    metaTitle: 'Barber Shop Automation & Integration — AFRIVERSE',
    metaDesc: 'Proposed appointment, reminder, repeat-booking and re-engagement workflows for barbershops.',
    heroTitle: 'The Chair Stays Full.',
    heroCopy: 'Appointments, reminders, repeat bookings and walk-back-in prompts: AFRIVERSE proposes simple communication workflows that fit the rhythm of a busy shop, without adding admin to your day.',
    ui: {
      title: 'Appointment workflow',
      lines: [
        { t: 'Booking enquiry — fade, 16:30?', tag: 'captured' },
        { t: 'Slot confirmed & reminder set', tag: 'sent' },
        { t: 'Repeat-visit prompt — 3 weeks later', tag: 'scheduled' },
      ],
    },
    challenges: [
      { t: 'Booking requests arrive mid-cut', b: 'Nobody answers the phone with clippers in hand, so requests wait — or walk away.' },
      { t: 'Missed appointments cost real money', b: 'An empty 30-minute slot at peak time is gone, not rescheduled.' },
      { t: 'Regulars book when they remember', b: 'The gap between visits stretches from three weeks to six.' },
      { t: 'Reminders are an afterthought', b: 'A reminder sent at 6pm the same day helps nobody.' },
    ],
    opportunities: [
      { t: 'Booking enquiry handling', b: 'Requests answered instantly with real availability, wherever they arrive.' },
      { t: 'Reminders', b: 'Confirmations at booking and reminders at the agreed time before.' },
      { t: 'Repeat-visit prompts', b: 'A gentle nudge when each client\u2019s next cut is due.' },
    ],
    workflows: [
      { name: 'Booking flow', t: 'A client asks for a slot', a: 'Availability offered and the booking confirmed with the right service', o: 'Instant answers, even mid-cut' },
      { name: 'Reminder sequence', t: 'An appointment is booked', a: 'Confirmation sent, reminder sent at the agreed time before', o: 'Fewer no-shows and fuller chairs' },
      { name: 'Re-engagement', t: 'A regular\u2019s next visit becomes due', a: 'A repeat-booking prompt sent in your tone', o: 'Steadier visits from steady clients' },
    ],
    flow: { title: 'How an example booking moves', steps: ['Booking enquiry received', 'Slot offered & confirmed', 'Reminder sent day before', 'Repeat-visit prompt'] },
    value: {
      lead: 'The aim is a book that fills itself, quietly, while you keep cutting.',
      points: ['No booking request left hanging', 'Fewer empty chairs from no-shows', 'Regulars nudged back on schedule', 'Less time on the phone between cuts'],
    },
    faqs: [
      { q: 'We are a one-chair shop. Is this overkill?', a: 'No. The Essential scope is built for exactly this: one booking-and-reminder workflow that runs quietly in the background.' },
      { q: 'Will it work with our booking app?', a: 'That depends on the platform. Any integration is proposed only after compatibility and scope are confirmed in the consultation.' },
      { q: 'Do the messages sound like me?', a: 'Templates are drafted in your tone and approved by you before anything is sent.' },
      { q: 'Where do we start?', a: 'Most shops start with the Essential scope: booking enquiries and reminders, then expand as it proves itself.' },
    ],
  },

  hospitality: {
    name: 'Hospitality & Accommodation',
    metaTitle: 'Hospitality & Accommodation Automation — AFRIVERSE',
    metaDesc: 'Proposed guest enquiry, pre-arrival and post-visit communication workflows for guesthouses, lodges and hotels.',
    heroTitle: 'Guest Communication, From Booking to Review.',
    heroCopy: 'Guest enquiries, reservation-related messages, pre-arrival information and post-visit follow-ups: AFRIVERSE proposes workflows that make every guest touchpoint consistent and warm, on every shift.',
    ui: {
      title: 'Guest journey workflow',
      lines: [
        { t: 'New booking enquiry — 2 nights, family room', tag: 'answered' },
        { t: 'Pre-arrival info sent — 3 days before', tag: 'scheduled' },
        { t: 'Post-stay follow-up & review request', tag: 'scheduled' },
      ],
    },
    challenges: [
      { t: 'Guest enquiries arrive everywhere', b: 'Booking sites, WhatsApp, calls and walk-in questions each hold a piece of the same conversation.' },
      { t: 'Pre-arrival information is sent manually', b: 'Directions, check-in details and house notes typed out guest by guest.' },
      { t: 'Follow-up after checkout rarely happens', b: 'Reviews and repeat visits are left to the guest\u2019s own initiative.' },
      { t: 'Communication tone varies by shift', b: 'Night desk and day desk answer the same question two different ways.' },
    ],
    opportunities: [
      { t: 'Guest enquiry handling', b: 'Questions captured and answered consistently, in your house voice, on every channel.' },
      { t: 'Pre-arrival workflows', b: 'Agreed information — directions, check-in details, house notes — sent on schedule.' },
      { t: 'Post-visit follow-ups', b: 'Review requests and return invitations sent at the right moment.' },
    ],
    workflows: [
      { name: 'Enquiry management', t: 'A guest asks about a stay', a: 'Dates, party and preferences captured and answered from agreed information', o: 'A consistent reply on every channel, every shift' },
      { name: 'Pre-arrival sequence', t: 'A reservation is confirmed', a: 'Check-in details and directions sent at the agreed time before arrival', o: 'Guests arrive informed and reception breathes easier' },
      { name: 'Post-stay follow-up', t: 'A guest checks out', a: 'A warm follow-up and review request sent on schedule', o: 'Reviews encouraged and repeat visits invited' },
    ],
    flow: { title: 'How an example stay moves', steps: ['Guest enquiry received', 'Details captured & answered', 'Pre-arrival message sent', 'Post-stay follow-up'] },
    value: {
      lead: 'The aim is hospitality that shows the same warmth at 2am as it does at check-in.',
      points: ['Faster answers to booking questions', 'Every guest gets the same arrival information', 'Reviews and repeat bookings encouraged consistently', 'Front-desk time back for guests in front of you'],
    },
    faqs: [
      { q: 'Will it work with our booking engine or channel manager?', a: 'That depends on the platforms involved. Any integration is proposed only after compatibility and scope are confirmed in the consultation.' },
      { q: 'Does this replace our reception team?', a: 'No. Workflows handle the repetitive written communication so your team can focus on guests in front of them.' },
      { q: 'What about special requests and complaints?', a: 'Those are handover points by design: anything outside the agreed information goes straight to a person.' },
      { q: 'Where do we start?', a: 'Most properties start with the Essential scope: one workflow, such as guest enquiry handling, then expand from there.' },
    ],
  },
};
