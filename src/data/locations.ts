export type Location = {
  slug: string;
  name: string;
  region: string;
  summary: string;
  intro: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
  areas: string[];
  venueTypes: string[];
  streetNotes: string[];
  nearby: string[];
};

export const locations: Location[] = [
  {
    slug: 'philadelphia',
    name: 'Philadelphia',
    region: 'Citywide service planning',
    summary: 'Valet and parking operations for Philadelphia venues, properties, restaurants, hotels, healthcare entrances, and private events.',
    intro: 'Philadelphia parking conditions change block by block. Philadelphia parking operations, from recurring property service to event valet parking, start with the actual curb, storage route, pedestrian movement, loading activity, and guest arrival window—not just the venue address.',
    seoDescription: 'Valet parking in Philadelphia for events, restaurants, hotels, healthcare properties, weddings, and parking operations.',
    image: '/images/valet-hero-philadelphia.webp',
    imageAlt: 'Valet attendant receiving keys on a Philadelphia city street',
    areas: ['Center City', 'Old City', 'University City', 'South Philadelphia', 'Northwest Philadelphia', 'Northeast Philadelphia'],
    venueTypes: ['Hotels and restaurants', 'Museums and cultural venues', 'Medical and office properties', 'Private homes and event spaces'],
    streetNotes: ['Dense pedestrian activity', 'Loading and rideshare competition', 'Short arrival windows', 'Remote or structured vehicle storage'],
    nearby: ['center-city', 'main-line', 'king-of-prussia'],
  },
  {
    slug: 'center-city',
    name: 'Center City',
    region: 'Philadelphia core',
    summary: 'Curbside valet planning for dense blocks, busy entrances, restaurants, hotels, cultural venues, and private events in central Philadelphia.',
    intro: 'Center City leaves little room for guesswork. Center City valet service may share a block with restaurant valet parking, loading zones, bike lanes, crosswalks, deliveries, buses, and rideshare traffic, so the operating plan assigns each movement a clear place and time.',
    seoDescription: 'Center City Philadelphia valet parking for restaurants, hotels, events, private venues, and high-traffic curbside arrivals.',
    image: '/images/restaurant-valet-arrival.webp',
    imageAlt: 'Restaurant valet greeting guests on a Center City style block',
    areas: ['Rittenhouse Square', 'Logan Square', 'Washington Square West', 'Midtown Village', 'Avenue of the Arts', 'Market East'],
    venueTypes: ['Restaurants and private dining', 'Hotels and residences', 'Arts and cultural venues', 'Corporate and nonprofit events'],
    streetNotes: ['Limited standing space', 'High pedestrian volume', 'Bike and transit lanes', 'Frequent delivery and rideshare activity'],
    nearby: ['philadelphia', 'south-jersey', 'main-line'],
  },
  {
    slug: 'main-line',
    name: 'The Main Line',
    region: 'Western suburbs',
    summary: 'Valet parking for Main Line weddings, clubs, restaurants, private homes, healthcare properties, schools, and community events.',
    intro: 'Main Line properties often have more land than a Center City venue, but wedding valet parking and event valet parking can still bottleneck at narrow drives, residential roads, and single-lane entrances. The guest handoff and vehicle route are planned as separate movements.',
    seoDescription: 'Main Line valet parking for weddings, private events, restaurants, clubs, schools, healthcare properties, and estates.',
    image: '/images/event-valet-team.webp',
    imageAlt: 'Valet team coordinating vehicles at a venue near the Main Line',
    areas: ['Bala Cynwyd', 'Merion Station', 'Wynnewood', 'Ardmore', 'Haverford', 'Wayne'],
    venueTypes: ['Wedding and event venues', 'Country clubs and schools', 'Private homes and estates', 'Restaurants and healthcare properties'],
    streetNotes: ['Long private drives', 'Residential road sensitivity', 'Remote field or lot storage', 'Shuttle and valet coordination'],
    nearby: ['philadelphia', 'center-city', 'king-of-prussia'],
  },
  {
    slug: 'king-of-prussia',
    name: 'King of Prussia',
    region: 'Montgomery County',
    summary: 'Valet and parking management for hotels, office campuses, restaurants, event venues, healthcare sites, and high-volume suburban properties.',
    intro: 'King of Prussia sites can involve large lots, garages, divided roads, and multiple entrances. Hotel valet parking and parking management need a clear post plan to separate guest, restaurant, retail, and office traffic while preserving the main entrance.',
    seoDescription: 'King of Prussia valet parking and parking management for hotels, restaurants, offices, healthcare sites, and events.',
    image: '/images/valet-team-briefing.webp',
    imageAlt: 'Parking operations team reviewing an arrival plan before service',
    areas: ['King of Prussia', 'Valley Forge', 'Upper Merion', 'Conshohocken', 'West Conshohocken', 'Norristown area'],
    venueTypes: ['Hotels and conference properties', 'Restaurants and event venues', 'Office and mixed-use campuses', 'Healthcare and senior communities'],
    streetNotes: ['Large-site wayfinding', 'Garage and lot routing', 'Multiple entrance choices', 'Convention and event peaks'],
    nearby: ['main-line', 'philadelphia', 'bucks-county'],
  },
  {
    slug: 'bucks-county',
    name: 'Bucks County',
    region: 'North and northeast of Philadelphia',
    summary: 'Valet parking for Bucks County weddings, inns, restaurants, private homes, cultural venues, and community gatherings.',
    intro: 'Bucks County wedding valet parking and event valet parking often pair scenic properties with narrow approaches, unpaved overflow, low evening light, or vehicle storage far from the guest entrance. The plan connects those conditions to staffing and retrieval time.',
    seoDescription: 'Bucks County valet parking for weddings, private events, restaurants, inns, cultural venues, and residential properties.',
    image: '/images/event-valet-team.webp',
    imageAlt: 'Valet attendants managing a sunlit event arrival lane',
    areas: ['Newtown', 'Yardley', 'Doylestown', 'New Hope', 'Langhorne', 'Bensalem area'],
    venueTypes: ['Wedding and event venues', 'Inns and restaurants', 'Private homes and estates', 'Community and cultural events'],
    streetNotes: ['Narrow or shared driveways', 'Remote overflow areas', 'Low-light retrieval routes', 'Weather-sensitive parking surfaces'],
    nearby: ['philadelphia', 'king-of-prussia', 'south-jersey'],
  },
  {
    slug: 'south-jersey',
    name: 'South Jersey',
    region: 'Across the Delaware',
    summary: 'Valet parking for South Jersey restaurants, weddings, hotels, healthcare properties, private homes, and regional events.',
    intro: 'South Jersey service planning can range from restaurant valet parking on a compact downtown block to wedding valet parking at a large property with remote storage. The entrance, cross-traffic, and late-night retrieval route are reviewed before setting the crew plan.',
    seoDescription: 'South Jersey valet parking for restaurants, weddings, hotels, healthcare properties, private events, and parking operations.',
    image: '/images/healthcare-valet-arrival.webp',
    imageAlt: 'Valet attendant providing an attentive vehicle handoff at a regional property',
    areas: ['Camden waterfront', 'Cherry Hill', 'Collingswood', 'Haddonfield', 'Moorestown', 'Mount Laurel area'],
    venueTypes: ['Restaurants and hotels', 'Wedding and event venues', 'Healthcare and senior communities', 'Private homes and corporate sites'],
    streetNotes: ['Suburban lot flow', 'Downtown curb constraints', 'Remote vehicle storage', 'Regional event traffic'],
    nearby: ['center-city', 'philadelphia', 'bucks-county'],
  },
];

export const getLocation = (slug: string) => locations.find((location) => location.slug === slug);
