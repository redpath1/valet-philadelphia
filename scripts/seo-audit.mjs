import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';

const root = resolve(process.cwd());
const dist = join(root, 'dist');
const canonicalOrigin = 'https://valetparkingphiladelphia.com';
const issues = [];

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  }));
  return files.flat();
};

const matchOne = (html, pattern) => html.match(pattern)?.[1]?.trim() ?? '';
const count = (html, pattern) => [...html.matchAll(pattern)].length;
const add = (path, message) => issues.push(`${path}: ${message}`);

const htmlFiles = (await walk(dist)).filter((path) => path.endsWith('.html'));
const indexablePages = [];
const titles = new Map();
const descriptions = new Map();

for (const file of htmlFiles) {
  const path = relative(dist, file);
  const html = await readFile(file, 'utf8');
  const title = matchOne(html, /<title>([^<]+)<\/title>/i);
  const description = matchOne(html, /<meta name="description" content="([^"]+)"/i);
  const canonical = matchOne(html, /<link rel="canonical" href="([^"]+)"/i);
  const robots = matchOne(html, /<meta name="robots" content="([^"]+)"/i);
  const h1Count = count(html, /<h1\b/gi);
  const jsonLdBlocks = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/gis)];
  const noindex = robots.toLowerCase().includes('noindex');

  if (!title) add(path, 'missing title');
  if (!description) add(path, 'missing meta description');
  if (!canonical) add(path, 'missing canonical');
  if (canonical && !canonical.startsWith(`${canonicalOrigin}/`)) add(path, `canonical is outside the preferred origin: ${canonical}`);
  if (h1Count !== 1) add(path, `expected exactly one H1, found ${h1Count}`);
  if (!noindex && (title.length < 30 || title.length > 65)) add(path, `title length is ${title.length}; target 30-65`);
  if (!noindex && (description.length < 110 || description.length > 165)) add(path, `description length is ${description.length}; target 110-165`);
  if (!/property="og:title"/i.test(html) || !/property="og:description"/i.test(html) || !/property="og:image"/i.test(html)) add(path, 'incomplete Open Graph metadata');
  if (!/name="twitter:card"/i.test(html) || !/name="twitter:image:alt"/i.test(html)) add(path, 'incomplete X/Twitter metadata');
  if (!noindex && jsonLdBlocks.length === 0) add(path, 'missing JSON-LD');

  for (const [, json] of jsonLdBlocks) {
    try { JSON.parse(json); } catch { add(path, 'invalid JSON-LD'); }
  }

  if (!noindex) {
    indexablePages.push({ path, canonical });
    if (titles.has(title)) add(path, `duplicate title also used by ${titles.get(title)}`);
    else titles.set(title, path);
    if (descriptions.has(description)) add(path, `duplicate description also used by ${descriptions.get(description)}`);
    else descriptions.set(description, path);
  }
}

const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>(https:\/\/valetparkingphiladelphia\.com\/[^<]*)<\/loc>/g)]
  .map((match) => match[1])
  .filter((url) => !url.includes('/images/'));
const canonicalUrls = indexablePages.map(({ canonical }) => canonical).filter(Boolean);

for (const url of canonicalUrls) if (!sitemapUrls.includes(url)) add('sitemap.xml', `missing indexable canonical ${url}`);
for (const url of sitemapUrls) if (!canonicalUrls.includes(url)) add('sitemap.xml', `contains non-indexable or unknown URL ${url}`);
if (!/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/.test(sitemap)) add('sitemap.xml', 'missing valid lastmod values');
if (!/xmlns:image=/.test(sitemap) || !/<image:image>/.test(sitemap)) add('sitemap.xml', 'missing image sitemap entries');

const robots = await readFile(join(dist, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`)) add('robots.txt', 'missing canonical sitemap reference');

const sitemapPage = await readFile(join(dist, 'sitemap', 'index.html'), 'utf8');
for (const { canonical } of indexablePages) {
  const path = new URL(canonical).pathname;
  if (path !== '/sitemap/' && !sitemapPage.includes(`href="${path}"`)) add('sitemap/index.html', `missing link to ${path}`);
}

const imageFiles = (await walk(join(dist, 'images'))).filter((path) => path.endsWith('.webp'));
for (const image of imageFiles) {
  const size = (await stat(image)).size;
  if (size > 300_000) add(relative(dist, image), `image is ${size} bytes; target under 300 KB`);
}

const faqPage = indexablePages.find(({ canonical }) => canonical === `${canonicalOrigin}/faq/`);
if (!faqPage) {
  add('faq/index.html', 'dedicated FAQ page is not indexable');
} else {
  const faqHtml = await readFile(join(dist, faqPage.path), 'utf8');
  if (!faqHtml.includes('"@type":"FAQPage"')) add(faqPage.path, 'missing FAQPage structured data');
}

for (const { path, canonical } of indexablePages) {
  if (!canonical.includes('/services/')) continue;
  const serviceHtml = await readFile(join(dist, path), 'utf8');
  if (serviceHtml.includes('"@type":"FAQPage"')) add(path, 'FAQPage schema should be reserved for the dedicated FAQ page');
}

if (issues.length) {
  console.error(`SEO audit failed with ${issues.length} issue(s):\n${issues.map((issue) => `- ${issue}`).join('\n')}`);
  process.exit(1);
}

console.log(`SEO audit passed: ${indexablePages.length} indexable pages, ${htmlFiles.length} HTML files, ${sitemapUrls.length} sitemap URLs, ${imageFiles.length} WebP images.`);
