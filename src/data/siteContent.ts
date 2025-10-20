import type { IconName } from '../components/Icon';

export const business = {
  name: 'Robert Robbins Advantage Company LLC',
  tagline: 'General contracting with roofing, plumbing, and remodel expertise.',
  location: 'Cloverdale, Indiana',
  license: 'Licensed • Bonded • Insured',
  phone: '(317) 555-0199',
  email: 'contact@advantagerobbins.com',
  address: '382 West County Road 1000 S, Cloverdale, IN 45120',
  serviceArea: 'Serving central and western Indiana communities',
  yearsExperience: '20+ years of craftsmanship',
};

export const navLinks = [
  { id: 'services', label: 'Services' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'projects', label: 'Projects' },
  { id: 'process', label: 'Our Process' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { label: 'Projects Delivered', value: '480+' },
  { label: 'Emergency Calls Answered', value: '900+' },
  { label: 'Average Response Time', value: '< 24 hrs' },
];

export const highlights = [
  {
    title: 'Licensed & Insured',
    description: 'Peace-of-mind craftsmanship backed by state and local credentials.',
  },
  {
    title: 'Roof & Plumbing Specialists',
    description: 'From rooftop to crawlspace, a single team handles the tough jobs.',
  },
  {
    title: 'Storm-Ready Response',
    description: 'Rapid repairs and mitigation when Midwest weather hits hard.',
  },
];

export const services: Array<{
  title: string;
  icon: IconName;
  description: string;
  items: string[];
}> = [
  {
    title: 'Roof Installation & Repair',
    icon: 'Hammer',
    description:
      'Architectural shingles, metal roofing, and storm restoration built to last.',
    items: ['Full tear-offs and rebuilds', 'Leak diagnostics & patching', 'Insurance claim guidance'],
  },
  {
    title: 'Plumbing & Mechanical',
    icon: 'Droplets',
    description:
      'From emergency leaks to full system upgrades across residential and light commercial.',
    items: ['Fixture installs & repairs', 'Water heater & softener service', 'Sump pumps & drainage'],
  },
  {
    title: 'Interior & Exterior Remodels',
    icon: 'House',
    description:
      'Transform kitchens, baths, and outdoor living spaces with a coordinated team.',
    items: ['Kitchen & bath updates', 'Siding & gutter replacements', 'Concrete & deck builds'],
  },
  {
    title: 'Preventative Maintenance',
    icon: 'ShieldCheck',
    description:
      'Seasonal inspections and tune-ups that stop small issues from becoming big repairs.',
    items: ['Roof tune-ups & cleaning', 'Plumbing winterization', 'Annual system audits'],
  },
];

export const projectGallery = [
  {
    title: 'Standing Seam Roof Upgrade',
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80',
    description: 'Modern metal roof retrofit engineered to withstand heavy wind and snow load.',
  },
  {
    title: 'Luxury Bath Renewal',
    image:
      'https://images.unsplash.com/photo-1616628182504-9c480a3ca597?auto=format&fit=crop&w=1600&q=80',
    description: 'Custom tile work, rainfall fixtures, and a spa-level plumbing upgrade.',
  },
  {
    title: 'Whole-Home Storm Rehab',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    description: 'Roof, gutters, and interior rebuild delivered on a rapid disaster timeline.',
  },
];

export const processSteps = [
  {
    title: 'Site Walk & Scope',
    detail: 'We document the project, capture photos, and outline must-haves with you on-site.',
  },
  {
    title: 'Transparent Proposal',
    detail: 'You receive a clear scope, timeline, and upfront pricing—no surprises mid-project.',
  },
  {
    title: 'Skilled Execution',
    detail: 'Licensed pros handle each trade, coordinating every detail and protecting your home.',
  },
  {
    title: 'Quality Sign-Off',
    detail: 'Final walkthrough, detailed cleanup, and warranty documentation for your records.',
  },
];

export const testimonials = [
  {
    quote:
      'Robert and his crew handled our storm damage with professionalism. They coordinated insurance, rebuilt the roof, and fixed hidden plumbing issues without delay.',
    name: 'Heather M.',
    location: 'Greencastle, IN',
  },
  {
    quote:
      'From the first call to final walkthrough, their team was responsive and diligent. The bathroom remodel completely exceeded our expectations.',
    name: 'David & Rhonda L.',
    location: 'Plainfield, IN',
  },
];
