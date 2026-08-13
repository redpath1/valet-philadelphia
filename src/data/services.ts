export type ServiceStep = {
  number: string;
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  description: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
  bestFor: string[];
  deliverables: string[];
  process: ServiceStep[];
  faqs: ServiceFaq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'event-valet-parking',
    title: 'Event valet parking',
    shortTitle: 'Events',
    eyebrow: 'One-night and recurring events',
    summary:
      'A curb plan, staffed arrival lane, controlled key system, and departure strategy built around the guest list and venue.',
    description:
      'Event parking gets difficult at predictable moments: the first thirty minutes, a weather change, and the end-of-night rush. Good arrival planning connects the guest handoff, key control, and retrieval staging before the first car arrives, then the crew adjusts to the actual pace of the event.',
    seoDescription:
      'Event valet parking in Philadelphia with arrival planning, key control, traffic flow, and a coordinated departure plan for private and corporate events.',
    image: '/images/event-valet-team.webp',
    imageAlt: 'Valet team coordinating arriving vehicles outside a Philadelphia event venue',
    bestFor: [
      'Corporate dinners and fundraisers',
      'Private parties and milestone celebrations',
      'Museum, gallery, and venue events',
      'High-volume guest arrivals',
    ],
    deliverables: [
      'Advance curb and parking review',
      'Arrival lane and traffic-control plan',
      'Numbered ticket and key custody workflow',
      'Staffing plan matched to guest count and timing',
      'Departure staging for the closing rush',
    ],
    process: [
      { number: '01', title: 'Read the event', description: 'We review guest count, timing, venue access, nearby restrictions, and where vehicles can be stored.' },
      { number: '02', title: 'Build the curb plan', description: 'We define the handoff point, pedestrian path, key station, staff positions, and overflow response.' },
      { number: '03', title: 'Run the peaks', description: 'The shift lead adjusts the line during arrivals and stages retrieval before the event lets out.' },
    ],
    faqs: [
      { question: 'How many attendants does an event need?', answer: 'The right number depends on arrival concentration, walking distance to vehicle storage, street conditions, and how quickly guests will leave. A guest count alone is not enough, so we review the full movement plan before recommending staffing.' },
      { question: 'Can you work with an event planner or venue manager?', answer: 'Yes. The most useful planning happens when the valet lead, planner, venue contact, and any security or traffic staff agree on the curb plan before the event.' },
      { question: 'What happens if the weather changes?', answer: 'The operating plan can identify sheltered handoff points, umbrella staging, slip risks, and a revised retrieval path. Weather affects both guest comfort and vehicle cycle time.' },
    ],
    related: ['wedding-valet-parking', 'parking-management'],
  },
  {
    slug: 'restaurant-valet-parking',
    title: 'Restaurant valet parking',
    shortTitle: 'Restaurants',
    eyebrow: 'Hospitality at the curb',
    summary:
      'A repeatable valet operation for busy dinner periods, limited curb space, reservations, and neighborhood traffic.',
    description:
      'A restaurant valet stand has to feel like part of the front-of-house team. We plan the handoff around reservations, delivery windows, pedestrian movement, and nearby residents so curb space remains orderly through the dinner rush.',
    seoDescription:
      'Restaurant valet parking in Philadelphia planned around reservations, curb space, neighborhood traffic, key control, and the dinner rush.',
    image: '/images/restaurant-valet-arrival.webp',
    imageAlt: 'Valet attendant opening a car door for dinner guests at a Philadelphia restaurant',
    bestFor: [
      'Independent restaurants and restaurant groups',
      'Private dining and buyout events',
      'Neighborhoods with limited guest parking',
      'Recurring dinner and weekend service',
    ],
    deliverables: [
      'Curb footprint and signage placement',
      'Reservation-aware staffing windows',
      'Delivery and rideshare separation',
      'Key custody and vehicle-location system',
      'Front-of-house communication plan',
    ],
    process: [
      { number: '01', title: 'Study the block', description: 'We look at legal loading space, crosswalks, deliveries, rideshare stops, neighboring businesses, and the storage route.' },
      { number: '02', title: 'Match the dinner curve', description: 'Staffing follows reservation density and retrieval distance instead of staying flat all night.' },
      { number: '03', title: 'Coordinate the door', description: 'The shift lead keeps the host stand informed when arrivals stack up or guests request their vehicles.' },
    ],
    faqs: [
      { question: 'Can valet work on a narrow city block?', answer: 'Sometimes, but the plan must protect pedestrians, legal loading activity, and traffic flow. We review the curb and vehicle-storage route before proposing a setup.' },
      { question: 'Can the schedule change by day of week?', answer: 'Yes. A recurring restaurant program can use different staffing windows for weekday dinners, weekends, private events, or seasonal demand.' },
      { question: 'How does the restaurant request a guest vehicle?', answer: 'The operating plan defines a clear request channel between the host team and valet lead so a vehicle can be staged without interrupting front-of-house service.' },
    ],
    related: ['hotel-valet-parking', 'event-valet-parking'],
  },
  {
    slug: 'wedding-valet-parking',
    title: 'Wedding valet parking',
    shortTitle: 'Weddings',
    eyebrow: 'A calmer guest arrival',
    summary:
      'Valet staffing and traffic planning aligned with ceremony timing, venue access, shuttles, accessibility needs, and the final departure wave.',
    description:
      'Wedding arrivals are emotional, time-sensitive, and often concentrated into a short window. The operating plan links ceremony timing to guest arrival flow so the curb supports the wedding instead of competing with it.',
    seoDescription:
      'Wedding valet parking in Philadelphia with venue access planning, guest arrival flow, key control, and coordinated end-of-night vehicle retrieval.',
    image: '/images/event-valet-team.webp',
    imageAlt: 'Uniformed valet attendants organizing arrivals at a wedding venue near Philadelphia',
    bestFor: [
      'Historic estates and private homes',
      'Urban wedding venues',
      'Country clubs and gardens',
      'Ceremony and reception sites with limited parking',
    ],
    deliverables: [
      'Timeline-based arrival and departure plan',
      'Guest accessibility and family vehicle notes',
      'Coordination with planner, venue, and shuttle teams',
      'Weather and lighting contingencies',
      'Late-night vehicle retrieval staging',
    ],
    process: [
      { number: '01', title: 'Follow the timeline', description: 'We review ceremony start, vendor arrivals, photo windows, shuttle movements, and final send-off timing.' },
      { number: '02', title: 'Protect the entrance', description: 'The handoff area stays clear for guests, accessible arrivals, vendors, and emergency access.' },
      { number: '03', title: 'Stage the close', description: 'Vehicles are organized around the expected departure pattern so the final wave keeps moving.' },
    ],
    faqs: [
      { question: 'When should wedding valet be planned?', answer: 'As soon as the venue, guest estimate, and parking arrangement are known. Early coordination gives the planner more options for curb use, overflow, lighting, and shuttle integration.' },
      { question: 'Can you coordinate with guest shuttles?', answer: 'Yes. Shuttle unloading and valet handoff should be assigned separate space or time windows whenever possible.' },
      { question: 'Can you assist older guests and families?', answer: 'The plan can reserve the safest handoff position for guests who need extra time, families with young children, and vehicles carrying mobility equipment.' },
    ],
    related: ['event-valet-parking', 'hotel-valet-parking'],
  },
  {
    slug: 'hotel-valet-parking',
    title: 'Hotel valet parking',
    shortTitle: 'Hotels',
    eyebrow: 'Daily arrival operations',
    summary:
      'A front-door parking operation built around check-in peaks, luggage, overnight keys, events, rideshare traffic, and early departures.',
    description:
      'Hotel valet is a continuous handoff between the curb, front desk, bell team, and parking area. Staffing follows check-in peaks, while overnight key custody and vehicle requests follow one defined path across every shift.',
    seoDescription:
      'Hotel valet parking operations in Philadelphia for check-in, luggage, overnight key custody, events, rideshare traffic, and departures.',
    image: '/images/valet-hero-philadelphia.webp',
    imageAlt: 'Professional valet attendant receiving keys outside a Philadelphia hotel',
    bestFor: [
      'Boutique and full-service hotels',
      'Properties with remote vehicle storage',
      'Hotels with restaurants or event space',
      'Seasonal or recurring front-door coverage',
    ],
    deliverables: [
      'Check-in and departure demand map',
      'Overnight key and vehicle-location controls',
      'Bell, front-desk, and valet communication flow',
      'Event and rideshare lane coordination',
      'Shift-change accountability checklist',
    ],
    process: [
      { number: '01', title: 'Map the front door', description: 'We study check-in, luggage, rideshare, deliveries, group arrivals, and the route to vehicle storage.' },
      { number: '02', title: 'Define each handoff', description: 'Requests, keys, tickets, room references, and shift changes follow one understandable path.' },
      { number: '03', title: 'Adjust by occupancy', description: 'Staffing and staging respond to occupancy, events, and known group movements.' },
    ],
    faqs: [
      { question: 'Can valet support hotel events at the same time as overnight guests?', answer: 'Yes, when the plan separates event peaks from regular check-in and assigns enough curb and storage capacity to both demand streams.' },
      { question: 'How are overnight keys handled?', answer: 'The operating plan defines controlled storage, ticket matching, shift-change counts, and who can access the key cabinet.' },
      { question: 'Can staffing change with occupancy?', answer: 'Yes. Forecasts, group arrivals, restaurant demand, and event schedules can inform the coverage plan.' },
    ],
    related: ['restaurant-valet-parking', 'parking-management'],
  },
  {
    slug: 'healthcare-valet-parking',
    title: 'Healthcare valet parking',
    shortTitle: 'Healthcare',
    eyebrow: 'Patient-centered arrivals',
    summary:
      'A clear, accessible parking handoff for medical offices, outpatient centers, senior communities, and high-traffic care entrances.',
    description:
      'Healthcare arrivals require more time, clearer pedestrian space, and careful coordination with the entrance team. For medical office valet parking, accessible arrivals, mobility equipment, appointment peaks, and vehicles that cannot be rushed all shape the curb plan.',
    seoDescription:
      'Healthcare valet parking in Philadelphia planned for accessible arrivals, appointment peaks, patient assistance, key control, and clear entrance flow.',
    image: '/images/healthcare-valet-arrival.webp',
    imageAlt: 'Valet attendant assisting an older guest at a Philadelphia medical entrance',
    bestFor: [
      'Outpatient and specialty practices',
      'Medical office buildings',
      'Senior living communities',
      'Entrances with long or difficult parking walks',
    ],
    deliverables: [
      'Accessible loading and pedestrian review',
      'Appointment-peak staffing plan',
      'Mobility equipment and escort workflow',
      'Vehicle and key custody controls',
      'Coordination with reception and security',
    ],
    process: [
      { number: '01', title: 'Start with access', description: 'We identify the safest curb position, ramp route, waiting space, and emergency access requirements.' },
      { number: '02', title: 'Plan for variable pace', description: 'The handoff allows extra time for passengers, mobility equipment, caregivers, and questions.' },
      { number: '03', title: 'Connect the entrance team', description: 'Reception, security, and valet share a defined process for arrivals and vehicle requests.' },
    ],
    faqs: [
      { question: 'Can attendants assist guests getting out of a vehicle?', answer: 'Attendants can provide a steady, courteous handoff and help manage doors or mobility equipment within the defined service policy. Clinical or medical assistance remains with qualified care staff.' },
      { question: 'How do appointment times affect staffing?', answer: 'Appointment schedules can create regular arrival bursts. We use those patterns, along with retrieval distance and entrance capacity, to shape coverage.' },
      { question: 'Can healthcare valet operate in limited curb space?', answer: 'A site review determines whether the curb can support safe loading, pedestrians, emergency access, and vehicle movement without conflict.' },
    ],
    related: ['parking-management', 'hotel-valet-parking'],
  },
  {
    slug: 'parking-management',
    title: 'Parking management',
    shortTitle: 'Parking management',
    eyebrow: 'More than the handoff',
    summary:
      'On-site traffic, lot, garage, and guest-parking coordination for properties that need a working operating plan, with or without valet.',
    description:
      'Some properties need more than a valet stand. Parking lot management and garage traffic flow are planned with the curb and front door so vehicles can enter, wait, park, load, and leave as one working system.',
    seoDescription:
      'Parking management in Philadelphia for traffic flow, lots, garages, guest arrivals, loading zones, event peaks, and front-door coordination.',
    image: '/images/valet-team-briefing.webp',
    imageAlt: 'Valet operations team reviewing a curb and parking plan before a shift',
    bestFor: [
      'Mixed-use and commercial properties',
      'Event and overflow parking areas',
      'Private lots and garages',
      'Sites with recurring traffic conflicts',
    ],
    deliverables: [
      'Site flow and conflict-point review',
      'Entry, exit, loading, and pedestrian plan',
      'Staff posts and communication map',
      'Overflow and peak-period response',
      'Operating checklist for repeatable shifts',
    ],
    process: [
      { number: '01', title: 'Observe the movement', description: 'We review how guests, staff, deliveries, rideshare vehicles, and pedestrians currently use the site.' },
      { number: '02', title: 'Remove the conflicts', description: 'The plan assigns clear zones, routes, staff posts, and decision points for peak periods.' },
      { number: '03', title: 'Make it repeatable', description: 'Briefing notes and shift controls help each operating period start from the same plan.' },
    ],
    faqs: [
      { question: 'Is parking management the same as valet?', answer: 'Not always. Parking management may include directed self-parking, lot or garage flow, loading coordination, event traffic, and pedestrian separation. Valet can be one part of the plan.' },
      { question: 'Can you review an existing parking setup?', answer: 'Yes. A review can focus on recurring queues, unclear entries, loading conflicts, retrieval distance, staffing posts, or event peaks.' },
      { question: 'Can the plan cover overflow parking?', answer: 'Yes, if the overflow area, travel route, permissions, lighting, and guest communication are established in advance.' },
    ],
    related: ['event-valet-parking', 'healthcare-valet-parking'],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
