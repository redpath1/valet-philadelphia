# Valet Philadelphia Site Brief

## Business

- Company: Valet Philadelphia, LLC
- Use case: Local valet parking and parking operations company serving Philadelphia and nearby communities
- Audience: Venue managers, restaurant and hotel operators, event planners, wedding coordinators, healthcare administrators, property managers, and private hosts
- Primary conversion: Request a parking plan and quote
- Secondary conversion: Explore service and location pages

## Direction

- Design reference: People Work Webflow 108 template
- Content hierarchy reference: All About Parking
- Original implementation, copy, tokens, and imagery only
- Editorial layout with a high-contrast serif display face and restrained sans-serif body type
- Square geometry throughout: no rounded cards, buttons, navigation, form controls, labels, or brand containers
- Every major section sits inside a visible max-width frame. No edge-to-edge content bands
- Documentary-style valet photography in mixed light, mostly direct daylight, with uniformed attendants and real street or venue texture
- About page uses a light background and limited photography
- No testimonials
- Editorial restraint is required: headlines should state a service, condition, or decision rather than rely on slogans, fragments, metaphors, or generic improvement language
- Display headings should stay at or below 80px on wide desktop screens and roughly 50px on phones; section headings should stay at or below 56px on desktop and 40px on phones
- Section padding and internal gaps should create clear grouping without turning every panel into an oversized presentation slide

## Page Inventory

- Home
- Services hub
- Event valet parking
- Restaurant valet parking
- Wedding valet parking
- Hotel valet parking
- Healthcare valet parking
- Parking management
- About
- Contact
- FAQ
- Locations hub
- Philadelphia
- Center City
- Main Line
- King of Prussia
- Bucks County
- South Jersey
- Human-readable sitemap
- Style guide
- XML sitemap, robots.txt, and llms.txt

## Content And Integrations

- Static Astro content
- No CMS selected
- No analytics, newsletter, CRM, or form provider selected
- Contact form is accessible and ready to connect to a provider. It does not claim to send until one is selected
- Service detail pages must provide substantial decision support: four explained planning factors, at least four service-specific questions, process details, operating deliverables, and clear request inputs
- Location detail pages must explain four area-specific operating conditions, property fit, example subareas, at least three local planning questions, and the facts needed to confirm coverage
- Detail-page depth must come from useful, distinct guidance rather than repeated boilerplate or keyword padding; 600 visible words is the automated floor, not a ranking claim

## SEO And Discoverability

- Unique titles, descriptions, canonicals, social metadata, and visible local content
- One documented primary search phrase plus supporting phrases for every indexable page, used in visible copy without keyword stuffing
- LocalBusiness and service schema only where visible content supports it
- Service and location detail pages use distinct copy and internal links
- XML sitemap, HTML sitemap, robots.txt, and llms.txt share one route inventory
- No unsupported ratings, years in business, client counts, certifications, insurance limits, or response times

## Deployment

- Astro 7+
- Tailwind CSS 4 through the Vite plugin
- Static output for Git and Cloudflare Workers Static Assets
- Git repository initialized locally and intended to publish from `redpath1/valet-philadelphia`

## Assumptions

- Production domain is `https://valetparkingphiladelphia.com`, verified as an active Cloudflare zone in the owner's account
- Coverage pages reflect the requested local SEO approach and should be confirmed against the company's actual operating area before launch
- Business phone, email, street address, operating history, credentials, and form endpoint were not supplied, so the site does not invent them
