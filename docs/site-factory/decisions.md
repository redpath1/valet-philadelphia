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
- Use static Cloudflare Pages output without an adapter. Reason: the site has no server runtime requirements.
