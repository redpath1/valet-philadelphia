# Decisions

## 2026-08-12

- Use an original design system instead of reproducing the reference site literally. Reason: retain its calm editorial rhythm while creating a distinct local brand.
- Use Philadelphia navy, warm limestone, street-signal gold, brick red, and river blue. Reason: the palette feels local and operational without borrowing another valet brand.
- Use static Astro data modules for services and locations. Reason: the content set is small, auditable, and does not require a CMS.
- Build six service detail pages and six location detail pages. Reason: this provides useful visitor paths and enough page depth for local service discovery without thin keyword pages.
- Omit unsupported phone numbers, email addresses, operating history, reviews, ratings, and credentials. Reason: the user did not supply them.
- Keep the contact form provider-neutral. Reason: no form backend was selected.
- Use a reviewable mailto workflow for the contact form. Reason: it works on a static site without pretending to store or deliver a lead through an unconfigured backend.
- Use Astro 7.2.1 and Tailwind CSS 4.3.3. Reason: these were the current compatible releases resolved and verified during the build.
- Use Cloudflare Workers Static Assets without an Astro adapter. Reason: the site has no server runtime requirements, and Workers Builds can deploy the generated `dist` directory directly after each Git push.

## 2026-08-13

- Use the public GitHub repository `redpath1/valet-philadelphia` with `main` as the production branch. Reason: it matches the owner's requested account and keeps the deployment path simple.
- Use repository-local Git configuration pinned to an existing verified `redpath1` SSH identity for pushes. Reason: this checkout reliably uses SSH without changing the machine-wide Git transport configuration.
- Keep the Cloudflare Worker name aligned with the Wrangler project name: `valet-philadelphia`. Reason: Workers Builds uses the Wrangler configuration as the deployment source of truth.
- Use `https://valetparkingphiladelphia.com` as the canonical production URL and connect both the root and `www` hostnames to the Worker. Reason: this is the matching active Philadelphia valet zone in the owner's Cloudflare account.
- Publish `hello@valetparkingphiladelphia.com` as the contact address. Reason: it preserves the existing `hello` convention while matching the verified production domain.
- Use square corners across every interface surface and brand asset. Reason: this follows the requested visual direction and gives the contained editorial system a sharper architectural character.
- Maintain page-level search intent in `src/data/seo-keywords.json`, with one unique primary phrase and two supporting phrases for every indexable route. Reason: explicit ownership prevents page cannibalization while keeping copy reviewable and natural.
- Do not add a `meta keywords` tag or repeat exact-match phrases mechanically. Reason: modern search discovery is better served by useful visible content, clear titles and headings, internal links, and factual structured data.
- Set the service and location detail-page content floor at 600 visible main-content words, with required explained planning items and page-specific questions. Reason: the guardrail prevents thin pages, while the structural requirements discourage padding words without visitor value.
- Keep the hub-page content floor lower at 450 words. Reason: hubs should help visitors compare and choose without duplicating the full detail content.
