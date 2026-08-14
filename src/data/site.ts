export const siteConfig = {
  name: 'Valet Philadelphia, LLC',
  shortName: 'Valet Philadelphia',
  alternateName: 'Valet Parking Philadelphia',
  domain: 'valetparkingphiladelphia.com',
  url: 'https://valetparkingphiladelphia.com',
  email: 'hello@valetparkingphiladelphia.com',
  locale: 'en_US',
  language: 'en-US',
  sitemapLastModified: '2026-08-14',
  primaryCta: 'Request a parking plan',
  description:
    'Valet parking and parking operations for events, restaurants, hotels, healthcare properties, and private venues in Philadelphia and nearby communities.',
  areaServed: [
    'Philadelphia',
    'Center City Philadelphia',
    'The Main Line',
    'King of Prussia',
    'Bucks County',
    'South Jersey',
  ],
};

export const imageMetadata: Record<string, { width: number; height: number }> = {
  '/images/valet-hero-philadelphia.webp': { width: 1536, height: 1024 },
  '/images/valet-team-briefing.webp': { width: 1536, height: 1024 },
  '/images/event-valet-team.webp': { width: 1448, height: 1086 },
  '/images/healthcare-valet-arrival.webp': { width: 1448, height: 1086 },
  '/images/restaurant-valet-arrival.webp': { width: 1448, height: 1086 },
};

export const primaryNavigation = [
  { href: '/services/', label: 'Services' },
  { href: '/locations/', label: 'Locations' },
  { href: '/about/', label: 'About' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
];

export const fixedRoutes = [
  { href: '/', label: 'Philadelphia valet parking', description: 'Valet parking and parking operations for events, restaurants, hotels, healthcare properties, weddings, and private venues in Philadelphia.', image: '/images/valet-hero-philadelphia.webp' },
  { href: '/services/', label: 'Valet parking services', description: 'Compare event, restaurant, wedding, hotel, healthcare, and parking management services in Philadelphia.', image: '/images/event-valet-team.webp' },
  { href: '/locations/', label: 'Philadelphia service areas', description: 'Explore valet parking coverage pages for Philadelphia, Center City, the Main Line, King of Prussia, Bucks County, and South Jersey.', image: '/images/valet-hero-philadelphia.webp' },
  { href: '/about/', label: 'About Valet Philadelphia', description: 'Learn how Valet Philadelphia plans curb flow, key custody, staff positions, and live parking operations.', image: '/images/valet-team-briefing.webp' },
  { href: '/faq/', label: 'Valet parking FAQ', description: 'Get answers about valet staffing, site reviews, key control, weather, accessibility, service types, and coverage.' },
  { href: '/contact/', label: 'Request a valet parking plan', description: 'Share the address, schedule, vehicle estimate, and parking details for a Philadelphia valet service request.' },
  { href: '/sitemap/', label: 'HTML sitemap', description: 'Browse all indexable service, location, company, FAQ, and contact pages.' },
];
