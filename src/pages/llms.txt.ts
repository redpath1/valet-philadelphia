import type { APIRoute } from 'astro';
import { locations } from '../data/locations';
import { services } from '../data/services';
import { siteConfig } from '../data/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const serviceLinks = services.map((service) => `- [${service.title}](${siteConfig.url}/services/${service.slug}/): ${service.summary}`).join('\n');
  const locationLinks = locations.map((location) => `- [${location.name}](${siteConfig.url}/locations/${location.slug}/): ${location.summary}`).join('\n');
  const body = `# ${siteConfig.name}\n\n> ${siteConfig.description}\n\nThis file is a curated guide to the site's most useful public pages. It does not make claims about rankings, availability, licensing, insurance, pricing, or response time. Confirm service details directly with the company.\n\n## Core pages\n\n- [Home](${siteConfig.url}/)\n- [Services](${siteConfig.url}/services/)\n- [Locations](${siteConfig.url}/locations/)\n- [About](${siteConfig.url}/about/)\n- [FAQ](${siteConfig.url}/faq/)\n- [Contact](${siteConfig.url}/contact/)\n\n## Services\n\n${serviceLinks}\n\n## Locations\n\n${locationLinks}\n`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
