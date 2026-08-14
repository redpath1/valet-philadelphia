# Build Plan

## Current Phase

Vignelli and proportional-system refinement complete

## Next

- Confirm mailbox delivery and coverage claims
- Verify the domain in Google Search Console and submit `https://valetparkingphiladelphia.com/sitemap.xml`

## Done

- Captured the People Work reference structure and type/spacing character
- Reviewed the All About Parking homepage, service taxonomy, and location hierarchy
- Defined page inventory and local discoverability requirements
- Generated and optimized five original valet photographs
- Built shared layout, navigation, footer, data, and SEO layers
- Built all requested hubs and individual pages
- Added HTML and XML sitemaps, robots.txt, llms.txt, supported schema, and social metadata
- Added Cloudflare Static Assets headers and Workers deployment documentation
- Completed desktop, mobile, link, metadata, image, accessibility, and build reviews
- Initialized the local Git repository on `main`
- Created and pushed `redpath1/valet-philadelphia` over SSH
- Connected `main` to Cloudflare Workers Builds
- Completed the first production Worker build at `https://valet-philadelphia.evans-keith.workers.dev`
- Verified that SSH push commit `e06876d` triggered and completed an automatic production build
- Verified `valetparkingphiladelphia.com` as the matching active Cloudflare zone and connected both the root and `www` hostnames to the Worker
- Updated the site canonical URL to `https://valetparkingphiladelphia.com`
- Updated the published contact address to `hello@valetparkingphiladelphia.com`
- Completed a best-in-class on-page SEO pass across all 19 indexable URLs
- Added a build-time SEO regression that validates page metadata, canonicals, schema, sitemaps, robots directives, internal discovery, and search image weights
- Assigned and documented primary and supporting search phrases for all 19 indexable pages, including every location page
- Added an automated square-corner regression and verified zero computed corner radii on representative desktop and mobile pages
- Expanded both content hubs with useful service-selection and coverage-review guidance
- Expanded all six service details with four explained planning factors and at least four service-specific questions
- Expanded all six location details with four explained local operating conditions and at least three area-specific questions
- Added a content regression that enforces hub depth, a 600-word detail-page floor, and the required planning and FAQ structures
- Added accurate sitemap modification dates and image sitemap entries
- Added visible and structured breadcrumbs to all public hub and company pages
- Deployed a permanent Cloudflare redirect from `www` to the canonical root domain with path and query preservation
- Replaced slogan-like and repetitive headings with concrete service, site, staffing, traffic, and request language
- Reduced display titles to an 80px desktop cap and roughly 50px phone cap; reduced section titles to 56px and 40px
- Tightened section padding, hero height, component margins, card spacing, and page-grid gaps across every public page family
- Added a copy regression that blocks common hype language, synthetic heading phrases, em dashes, repeated headings, and overly long headings
- Extended the design regression to block oversized vertical spacing, full-viewport treatments, and oversized heading utilities
- Consolidated the layout into a 13-unit editorial grid with reusable 5/8, 8/5, 6/7, and 7/6 page splits
- Added a Fibonacci-derived 8/13/21/34/55 spacing scale and applied it to shared padding, gaps, controls, and text rhythm
- Removed decorative background gradients, shadows, backdrop blur, image zoom, and filled navigation states
- Refined type spacing, measures, borders, buttons, disclosure controls, and form surfaces without changing the page structure or content hierarchy
- Extended the design regression to preserve the proportional spacing tokens, grid rules, and flat interface treatment
- Assigned `valet parking near me` as the unique primary target for the Philadelphia location page and added a regression that prevents duplicate `near me` ownership
- Eliminated italic heading treatments at the system level and added a regression that rejects emphasized or utility-driven italics inside headings
- Replaced the `V` logomark, stacked header label, and footer lockup with one reusable Archivo Medium wordmark and aligned the structured-data logo to the same type-only identity
- Added a restrained Redpath Labs site credit and a concise local-service statement to the footer; added a regression that keeps the homepage free of visible and structured breadcrumbs
- Removed the `The operating idea` caption overlay from the homepage hero so the photograph stands without redundant copy

## Launch Confirmations

- Confirm that `hello@valetparkingphiladelphia.com` receives mail
- Confirm the location coverage examples
- Decide whether the email-preparation form should later be replaced with server-side lead capture

## Quality Gates

- [x] Every requested page is implemented
- [x] Every section is contained
- [x] Build passes
- [x] Internal links pass
- [x] Desktop visual review passes
- [x] Mobile visual review passes
- [x] Keyboard navigation and reduced-motion behavior pass
- [x] Metadata, schema, sitemap.xml, robots.txt, HTML sitemap, and llms.txt pass
- [x] All 19 indexable pages pass the automated SEO regression
- [x] Every indexable page has a mapped, unique primary search phrase and naturally used supporting phrases
- [x] No source or rendered component uses rounded corners
- [x] Services hub has at least 450 visible main-content words; location hub has at least 450
- [x] All 12 service and location details have at least 600 visible main-content words plus page-specific planning and FAQ structures
- [x] `www` permanently redirects to the preferred root hostname
- [x] Cloudflare Workers Static Assets project configuration is complete
- [x] Git-triggered Cloudflare production deploy is verified
- [x] Production custom domain is connected to the Worker
- [x] Representative page families have no horizontal overflow at 1440px and 390px
- [x] Rendered H1 and H2 sizes stay below the documented desktop and phone limits
- [x] Copy audit passes across all 21 rendered HTML files
