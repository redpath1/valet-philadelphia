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
- Use a repository-specific SSH deploy key with write access for local pushes. Reason: it scopes this checkout's SSH credential to this repository instead of granting account-wide access.
- Keep the Cloudflare Worker name aligned with the Wrangler project name: `valet-philadelphia`. Reason: Workers Builds uses the Wrangler configuration as the deployment source of truth.
