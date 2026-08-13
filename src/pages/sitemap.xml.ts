import type { APIRoute } from 'astro';
import { publicRoutes } from '../lib/routes';
import { siteConfig } from '../data/site';

export const prerender = true;

const escapeXml = (value: string) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');

export const GET: APIRoute = () => {
  const urls = publicRoutes
    .map((route) => {
      const image = route.image
        ? `\n    <image:image>\n      <image:loc>${escapeXml(new URL(route.image, siteConfig.url).toString())}</image:loc>\n    </image:image>`
        : '';
      return `  <url>\n    <loc>${escapeXml(new URL(route.href, siteConfig.url).toString())}</loc>\n    <lastmod>${siteConfig.sitemapLastModified}</lastmod>${image}\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
