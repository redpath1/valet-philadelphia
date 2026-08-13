# Valet Philadelphia, LLC

A static marketing and local-discovery website for a Philadelphia valet parking company. The site is built with Astro 7 and Tailwind CSS 4, generates 21 pages, and deploys from Git through Cloudflare Workers Static Assets.

## What Is Included

- Contained editorial design adapted from the supplied visual reference
- Original Philadelphia valet photography
- Home, about, contact, FAQ, service hub, and location hub
- Six individual service pages
- Six individual location pages
- Human-readable sitemap, XML sitemap, robots.txt, and llms.txt
- Unique page metadata, canonical links, social previews, and supported JSON-LD
- Responsive navigation and layouts
- Provider-neutral contact flow that prepares an email in the visitor's email app
- Cloudflare Static Assets security and cache headers

## Run Locally

Use Node.js 22 or newer.

```sh
npm install
npm run dev
```

Astro will print the local preview address. Open that address in a browser.

## Check And Build

```sh
npm run build
```

The command checks the Astro and TypeScript files before generating the static site in `dist/`.

## Important Launch Edits

Business facts that were not supplied were not invented. Confirm these items before publishing:

1. Replace `hello@valetphiladelphia.com` in `src/data/site.ts` if that mailbox is not active.
2. Confirm the service areas and municipality examples in `src/data/locations.ts`.
3. Confirm service descriptions and operating policies in `src/data/services.ts`.
4. Confirm the production domain in both `astro.config.mjs` and `src/data/site.ts`.
5. Add a phone number or business address only if the company wants them public.
6. Replace the email-preparation contact flow with a form provider later if server-side lead capture is preferred.

## Common Content Edits

- Company settings and navigation: `src/data/site.ts`
- Service pages: `src/data/services.ts`
- Location pages: `src/data/locations.ts`
- Global colors, type, spacing, and components: `src/styles/global.css`
- Original website photos: `public/images/`
- Shared header and footer: `src/components/`

Dynamic service and location pages are generated from their data files, so a content change is applied consistently across hubs, detail pages, the sitemap, and llms.txt.

## Git And Cloudflare Deployment

Production is configured around the `main` branch of `redpath1/valet-philadelphia`.

Cloudflare Workers Builds settings:

- Worker name: `valet-philadelphia`
- Git repository: `redpath1/valet-philadelphia`
- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Node version: 22
- Static asset directory: `dist`, defined in `wrangler.jsonc`

Every push to `main` triggers a production build and deploy. Pull-request branches can receive preview builds from the same connection.

For an authorized manual deployment from this checkout:

```sh
npm run deploy
```

No Astro Cloudflare adapter is required because this project uses static output. No environment variables are required for the current build.

## Contact Form Behavior

The form validates the required fields in the browser, then opens a prepared email to the address in `src/data/site.ts`. The visitor reviews and sends that email from their own email app. The static website does not store or transmit form data by itself.

## Project Memory

The planning decisions, review results, and handoff notes live in `docs/site-factory/` so a future Codex task can continue without reconstructing the original brief.
