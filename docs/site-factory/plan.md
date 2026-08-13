# Build Plan

## Current Phase

Content-depth pass complete and ready to deploy

## Next

- Deploy the content-depth pass through the existing SSH and Cloudflare workflow
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
