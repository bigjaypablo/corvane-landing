import {
  Inbox, Clock, Route, BarChart3, CalendarCheck, LayoutTemplate, MailCheck,
  Workflow, PenLine, Target, Rocket, ShieldCheck, Zap, MessageSquare,
  Search, Users, Wrench, Gauge, FileText,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const company = {
  name: 'Corvane',
  description:
    'Lead-to-meeting systems for B2B service firms. We fix the path from first click to first sales call.',
  email: 'hello@corvane.co',
  phone: '+1 (415) 555-0142',
  cta: 'Book a Strategy Call',
}

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
]

export const hero = {
  eyebrow: 'For B2B service firms',
  title: 'Turn the traffic you already have into [[booked sales calls.]]',
  titleMuted: 'No bigger ad budget. No extra sales hires.',
  subtitle:
    'Corvane rebuilds the path from first click to first call: a focused landing page, a short qualifying form, instant routing to the right person, and follow-up that never depends on someone remembering.',
  primaryCta: 'Book a Strategy Call',
  secondaryCta: 'See how it works',
  assurances: ['Free 30-minute call', 'Written plan afterwards', 'No obligation'],
  builtFor: 'Built for consultancies, agencies, IT and managed service providers, and industrial suppliers.',
}

export const heroFlow = [
  { title: 'New enquiry received', detail: 'Form submitted from your services page', status: 'Captured' },
  { title: 'Qualified automatically', detail: 'Checked against your ideal customer criteria', status: 'Qualified' },
  { title: 'Routed to an owner', detail: 'Assigned and notified in seconds, not hours', status: 'Assigned' },
  { title: 'Call booked', detail: 'Calendar link and confirmation sent instantly', status: 'Booked' },
]

export interface Pain {
  icon: LucideIcon
  title: string
  consequence: string
}

export const problems = {
  eyebrow: 'The problem',
  title: 'Most B2B sites don\'t lose deals loudly. [[They leak them quietly.]]',
  description:
    'You paid to get the visitor, the referral or the click. What happens in the next few minutes decides whether it was worth it.',
  items: [
    {
      icon: Clock,
      title: 'Slow follow-up',
      consequence:
        'An enquiry that waits half a day for a reply is often already talking to the competitor who answered first. You never find out it happened.',
    },
    {
      icon: LayoutTemplate,
      title: 'A site that explains everything and asks for nothing',
      consequence:
        'Visitors read, nod and leave because the next step is vague. Your ad and SEO spend ends at a page that does not convert.',
    },
    {
      icon: Inbox,
      title: 'Leads that land in a shared inbox',
      consequence:
        'When nobody clearly owns a new enquiry, everybody assumes someone else replied. Good leads go cold while the team is busy.',
    },
    {
      icon: Gauge,
      title: 'No visibility into what works',
      consequence:
        'If you cannot see which channel produces calls, budget decisions become guesses and the loudest opinion in the room wins.',
    },
  ] as Pain[],
}

export interface SolutionItem {
  title: string
  problem: string
  solution: string
  benefit: string
}

export const solution = {
  eyebrow: 'What changes',
  title: 'What happens when you [[work with us]]',
  description: 'We fix four points in your enquiry path. Each one has a direct, measurable effect on booked calls.',
  items: [
    {
      title: 'A clear next step',
      problem: 'Visitors are unsure what to do after reading.',
      solution: 'A landing page built around one offer, one audience and one action.',
      benefit: 'More of your existing visitors raise their hand.',
    },
    {
      title: 'Faster first response',
      problem: 'Replies depend on who is free.',
      solution: 'Instant confirmation, calendar link and internal alert the moment a form is sent.',
      benefit: 'Prospects hear back while they are still interested.',
    },
    {
      title: 'Clear ownership',
      problem: 'Leads sit in a shared inbox.',
      solution: 'Rules that route every enquiry to a named person, with reminders if it is untouched.',
      benefit: 'No lead slips through because of a busy week.',
    },
    {
      title: 'Numbers you can trust',
      problem: 'Nobody knows which channel books calls.',
      solution: 'Source tracking from first click through to booked call.',
      benefit: 'You spend on what works and cut what does not.',
    },
  ] as SolutionItem[],
}

export interface Service {
  icon: LucideIcon
  name: string
  description: string
  benefit: string
}

export const services = {
  eyebrow: 'What\'s included',
  title: 'Everything between "click" and [["call booked"]]',
  description: 'One scoped project covering the full path. You do not need to coordinate five vendors.',
  items: [
    {
      icon: PenLine,
      name: 'Conversion landing page',
      description: 'Strategy, direct-response copy and a fast, mobile-first build for your main offer.',
      benefit: 'Turns existing traffic into enquiries.',
    },
    {
      icon: FileText,
      name: 'Qualifying lead form',
      description: 'A short form that asks only what your team needs to decide whether to take the call.',
      benefit: 'Fewer poor-fit leads, more useful ones.',
    },
    {
      icon: Route,
      name: 'Lead routing',
      description: 'Rules that assign each enquiry to the right person and alert them immediately.',
      benefit: 'Every lead has an owner within seconds.',
    },
    {
      icon: MailCheck,
      name: 'Automated follow-up',
      description: 'Confirmation and reminder sequences written in your voice, not a template.',
      benefit: 'Fewer no-shows and no forgotten replies.',
    },
    {
      icon: CalendarCheck,
      name: 'Booking flow',
      description: 'Calendar scheduling connected to your team\'s real availability.',
      benefit: 'Prospects book without email back-and-forth.',
    },
    {
      icon: BarChart3,
      name: 'Reporting view',
      description: 'A simple view of enquiries, qualified leads and booked calls by source.',
      benefit: 'Clear evidence of what is paying off.',
    },
  ] as Service[],
}

export interface Step {
  number: string
  title: string
  description: string
  fromYou: string
}

export const process = {
  eyebrow: 'How it works',
  title: 'Simpler [[than you expect]]',
  description: 'Four steps. You are involved at the start and at sign-off, not in between.',
  steps: [
    {
      number: '01',
      title: 'Discovery call',
      description: '30 minutes to understand your offer, ideal customer and where enquiries currently stall.',
      fromYou: 'Come with your current site and any lead data you have.',
    },
    {
      number: '02',
      title: 'Strategy and copy',
      description: 'We write the page, form and follow-up messages, and agree the routing rules with you.',
      fromYou: 'One review round on the copy.',
    },
    {
      number: '03',
      title: 'Build and connect',
      description: 'We build the page and connect it to the tools you already use. Nothing is replaced.',
      fromYou: 'Access to your CRM and calendar.',
    },
    {
      number: '04',
      title: 'Launch and optimize',
      description: 'We go live, watch the numbers and make improvements based on real enquiries.',
      fromYou: 'A short monthly check-in.',
    },
  ] as Step[],
}

export const proof = {
  eyebrow: 'Proof',
  title: 'Work you can check, [[not claims you have to trust]]',
  description: 'Replace the placeholders below with real client information before launch.',
  notice:
    'PLACEHOLDER CONTENT: swap in real logos, case studies and credentials. Remove anything you cannot verify.',
  logos: ['Client logo 1', 'Client logo 2', 'Client logo 3', 'Client logo 4', 'Client logo 5', 'Client logo 6'],
  cases: [
    {
      client: '[Client name]',
      industry: '[Industry, e.g. Managed IT services]',
      challenge: '[One sentence: what was not working before]',
      work: '[One sentence: what you changed]',
      result: '[Real, verifiable result with timeframe]',
    },
    {
      client: '[Client name]',
      industry: '[Industry, e.g. Consulting]',
      challenge: '[One sentence: what was not working before]',
      work: '[One sentence: what you changed]',
      result: '[Real, verifiable result with timeframe]',
    },
    {
      client: '[Client name]',
      industry: '[Industry, e.g. Industrial supply]',
      challenge: '[One sentence: what was not working before]',
      work: '[One sentence: what you changed]',
      result: '[Real, verifiable result with timeframe]',
    },
  ],
  credentials: [
    { label: '[Years in business]', note: 'e.g. "Working with B2B firms since 20XX"' },
    { label: '[Certification / partner badge]', note: 'e.g. CRM or platform partner status' },
    { label: '[Tools we work with]', note: 'e.g. HubSpot, Salesforce, Pipedrive' },
  ],
}

export interface Reason {
  icon: LucideIcon
  title: string
  description: string
}

export const whyUs = {
  eyebrow: 'Why Corvane',
  title: 'What a B2B buyer should [[expect from a partner]]',
  description: 'Anyone can say they are strategic and fast. Here is what that actually looks like in practice.',
  items: [
    {
      icon: Target,
      title: 'Strategy before design',
      description: 'We agree who the page is for and what one action it should drive before anything is built.',
    },
    {
      icon: MessageSquare,
      title: 'Copy written for buyers',
      description: 'Your page speaks to the person evaluating you, in their language, with specifics instead of slogans.',
    },
    {
      icon: Wrench,
      title: 'Works with your existing tools',
      description: 'We connect to your CRM, calendar and email. You do not need to migrate systems to start.',
    },
    {
      icon: Users,
      title: 'Senior people do the work',
      description: 'You talk to the people building your project, not an account manager relaying messages.',
    },
    {
      icon: Zap,
      title: 'Fast, scoped delivery',
      description: 'Fixed scope, agreed deliverables and clear dates so you always know what happens next.',
    },
    {
      icon: ShieldCheck,
      title: 'Honest about results',
      description: 'We agree measurable goals up front and report on them plainly. We do not promise numbers we cannot control.',
    },
  ] as Reason[],
}

export const objections = {
  eyebrow: 'Before you decide',
  title: 'The questions [[most buyers ask first]]',
  items: [
    {
      q: 'Will this work for my business?',
      a: 'It works best for B2B service firms that already receive some traffic or referrals and sell high-value work through conversations. On the strategy call we check your situation, and if we are not the right fit, we will tell you.',
    },
    {
      q: 'How long does it take?',
      a: 'Most projects take a few weeks from kickoff to launch, depending on scope and how quickly feedback comes back. You get a dated plan before you commit.',
    },
    {
      q: 'Do I have to replace my current website or CRM?',
      a: 'No. We build the landing page and connect it to the tools you already use. Your existing site and systems stay as they are.',
    },
    {
      q: 'How much time will my team need to give?',
      a: 'Plan for the discovery call, one review round on copy, tool access, and a final sign-off. We handle everything in between.',
    },
    {
      q: 'What happens after launch?',
      a: 'We monitor results and recommend improvements based on real enquiries. You can continue with us month to month or take everything in-house. You own all assets.',
    },
  ],
}

export const contactSection = {
  eyebrow: 'Next step',
  title: 'Book a [[30-minute strategy call]]',
  description:
    'For B2B service firms that already get traffic or referrals and want more of it to turn into sales conversations.',
  nextSteps: [
    'We review your current page and enquiry process before the call.',
    'On the call, we map where enquiries slip and what to fix first.',
    'You get a written plan with scope and price. If we are not the right fit, we will say so.',
  ],
}

export const formOptions = [
  'More enquiries from my website',
  'Faster follow-up on leads',
  'Better lead routing / CRM setup',
  'A new landing page for an offer',
  'Not sure yet, need advice',
]

export const faq = {
  eyebrow: 'FAQ',
  title: 'Frequently [[asked questions]]',
  items: [
    {
      q: 'How much does it cost?',
      a: 'It depends on scope: one landing page with routing is different from a full follow-up setup. After the strategy call we send a fixed-scope quote, so you know the price before any work begins.',
    },
    {
      q: 'What tools do you work with?',
      a: 'Most mainstream CRMs, calendar tools and email platforms. Tell us what you use on the call and we will confirm compatibility.',
    },
    {
      q: 'Who writes the copy?',
      a: 'We do. We interview you about your offer and customers, write the copy, and you review it. You do not need to supply a brief.',
    },
    {
      q: 'Do you guarantee a number of leads?',
      a: 'No, and be cautious of anyone who does. Results depend on your traffic, offer and market. We agree measurable goals and report against them openly.',
    },
    {
      q: 'What happens on the strategy call?',
      a: 'We look at how enquiries currently reach you, find the biggest drop-off, and outline what we would change. You leave with a clear view whether or not you hire us.',
    },
    {
      q: 'Who owns the work?',
      a: 'You do. The page, copy, automations and tracking setup are yours, and we document everything so another team could take over.',
    },
  ],
}

export const footerLinks = {
  navigate: navLinks,
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'X / Twitter', href: 'https://x.com' },
  ],
}

export const finalCta = {
  title: 'Find out where your enquiries are slipping.',
  description: 'Thirty minutes, no obligation, and a written plan you can use with or without us.',
}

export const searchIcon = Search
export const workflowIcon = Workflow
export const rocketIcon = Rocket

/**
 * Social proof row in the hero.
 * Replace with REAL data (with client consent) and set placeholder: false.
 * Set enabled: false to hide the row completely.
 */
export const socialProof = {
  enabled: true,
  placeholder: true,
  rating: 5, // only show if you have real reviews; link them via ratingHref
  ratingLabel: '5.0 client rating',
  ratingHref: '#proof',
  countLabel: 'calls booked for clients this month', // e.g. "firms booked a call this month"
  count: 24, // demo value
  recent: [
    { initials: 'AB', note: 'A B2B firm booked a call' },
    { initials: 'CD', note: 'A B2B firm booked a call' },
    { initials: 'EF', note: 'A B2B firm booked a call' },
    { initials: 'GH', note: 'A B2B firm booked a call' },
    { initials: 'IJ', note: 'A B2B firm booked a call' },
  ],
}

/** Portfolio demo mode. Set enabled: false when this becomes a real client site. */
export const demo = {
  enabled: true,
  designer: 'Big Jay',
  profileUrl: '',
}

/** Illustrative sample cases shown only in demo mode. Not real clients. */
export const sampleProof = {
  notice:
    'Sample case studies. This is a concept project, so these show the format and the kind of outcomes a real build would report.',
  cases: [
    {
      client: 'Managed IT provider',
      industry: 'Sample case · 25 to 50 staff',
      challenge: 'Enquiries landed in a shared inbox and replies depended on who was free.',
      work: 'A focused services page, a five-field form, and owner-based routing with reminders.',
      result: 'Every enquiry assigned to a named owner within minutes, with a booking link in the first reply.',
    },
    {
      client: 'Operations consultancy',
      industry: 'Sample case · referral-led firm',
      challenge: 'Referrals visited the site, found no clear next step, and went quiet.',
      work: 'One offer, one audience and one action on a dedicated landing page, with source tracking.',
      result: 'Referral visits now lead to a booking page, and the firm can see which source books calls.',
    },
    {
      client: 'Industrial supplier',
      industry: 'Sample case · quote-driven sales',
      challenge: 'Quote requests arrived by email with missing details and slow back-and-forth.',
      work: 'A qualifying form that captures the specifics up front, plus automated confirmation.',
      result: 'Sales gets complete requests, and buyers get an instant confirmation of what happens next.',
    },
  ],
}

/* ---------- Fictional showcase content (concept project) ---------- */

export const liveProof = {
  enabled: true,
  rating: 5,
  ratingLabel: '5.0 average client rating',
  ratingHref: '#proof',
  count: 24,
  countLabel: 'calls booked for clients this month',
  recent: [
    { photo: '/people/p1.jpg', name: 'Maya R.', note: 'Northbeam Systems booked a call' },
    { photo: '/people/p2.jpg', name: 'Daniel K.', note: 'Halden Advisory booked a call' },
    { photo: '/people/p3.jpg', name: 'Priya S.', note: 'Brightwell IT booked a call' },
    { photo: '/people/p4.jpg', name: 'Tom W.', note: 'Kestrel Industrial booked a call' },
    { photo: '/people/p5.jpg', name: 'Elena V.', note: 'Pinecrest Partners booked a call' },
  ],
}

export const showcase = {
  footnote: 'Clients, quotes and figures on this page are fictional and shown for demonstration.',
  logos: ['Northbeam Systems', 'Halden Advisory', 'Kestrel Industrial', 'Brightwell IT', 'Ostrava Logistics', 'Pinecrest Partners'],
  cases: [
    {
      client: 'Brightwell IT',
      industry: 'Managed IT services · 40 staff',
      photo: '/people/p3.jpg',
      person: 'Priya Shah',
      role: 'Operations Director',
      quote: 'Enquiries used to sit in a shared inbox. Now every one has an owner before we have finished our coffee.',
      challenge: 'Enquiries landed in a shared inbox and replies depended on who was free.',
      work: 'A focused services page, a five-field form, and owner-based routing with reminders.',
      stats: [
        { label: 'First response', value: '6 hrs → 11 min' },
        { label: 'Calls booked / month', value: '9 → 23' },
      ],
    },
    {
      client: 'Halden Advisory',
      industry: 'Operations consultancy · referral-led',
      photo: '/people/p2.jpg',
      person: 'Daniel Kessler',
      role: 'Managing Partner',
      quote: 'Referrals finally had somewhere to land. We can now see which source actually books calls.',
      challenge: 'Referrals visited the site, found no clear next step, and went quiet.',
      work: 'One offer, one audience and one action on a dedicated page, with source tracking.',
      stats: [
        { label: 'Referral visit to booking', value: '4% → 15%' },
        { label: 'Time to launch', value: '3 weeks' },
      ],
    },
    {
      client: 'Kestrel Industrial',
      industry: 'Industrial supplier · quote-driven sales',
      photo: '/people/p4.jpg',
      person: 'Tom Whitfield',
      role: 'Head of Sales',
      quote: 'Quote requests now arrive complete. My team stopped chasing for part numbers and quantities.',
      challenge: 'Quote requests arrived by email with missing details and slow back-and-forth.',
      work: 'A qualifying form that captures specifics up front, plus automated confirmation.',
      stats: [
        { label: 'Complete requests', value: '38% → 91%' },
        { label: 'Quote turnaround', value: '3 days → 1 day' },
      ],
    },
  ],
  credentials: [
    { label: '9 years', note: 'Working with B2B service firms' },
    { label: 'HubSpot and Pipedrive partner', note: 'Certified implementation experience' },
    { label: 'Your stack, not ours', note: 'HubSpot, Salesforce, Pipedrive, Calendly, Google Workspace' },
  ],
}
