import { readFile, readdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const root = resolve(process.cwd());
const dist = join(root, 'dist');
const issues = [];
const detailFamilies = [
  { directory: 'services', expectedPages: 6, minimumWords: 600, marker: 'data-planning-factor', minimumMarkers: 4, minimumFaqs: 4 },
  { directory: 'locations', expectedPages: 6, minimumWords: 600, marker: 'data-operating-condition', minimumMarkers: 4, minimumFaqs: 3 },
];

const visibleWords = (html) => {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
  const text = main
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:amp|nbsp|quot|#39);/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.match(/[\p{L}\p{N}]+(?:['-][\p{L}\p{N}]+)*/gu)?.length ?? 0;
};

const count = (source, pattern) => [...source.matchAll(pattern)].length;
const totals = [];

for (const hub of ['services', 'locations']) {
  const path = `${hub}/index.html`;
  const html = await readFile(join(dist, path), 'utf8');
  const words = visibleWords(html);
  if (words < 450) issues.push(`${path}: ${words} visible main-content words; minimum 450`);
}

for (const family of detailFamilies) {
  const directory = join(dist, family.directory);
  const slugs = (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  if (slugs.length !== family.expectedPages) {
    issues.push(`${family.directory}: expected ${family.expectedPages} detail pages, found ${slugs.length}`);
  }

  for (const slug of slugs) {
    const path = `${family.directory}/${slug}/index.html`;
    const html = await readFile(join(dist, path), 'utf8');
    const words = visibleWords(html);
    const markers = count(html, new RegExp(family.marker, 'g'));
    const faqs = count(html, /class="faq-item\b/g);

    totals.push({ path, words });
    if (words < family.minimumWords) issues.push(`${path}: ${words} visible main-content words; minimum ${family.minimumWords}`);
    if (markers < family.minimumMarkers) issues.push(`${path}: ${markers} explained planning items; minimum ${family.minimumMarkers}`);
    if (faqs < family.minimumFaqs) issues.push(`${path}: ${faqs} page-specific FAQs; minimum ${family.minimumFaqs}`);
  }
}

if (issues.length) {
  console.error(`Content audit failed with ${issues.length} issue(s):\n${issues.map((issue) => `- ${issue}`).join('\n')}`);
  process.exit(1);
}

const serviceTotals = totals.filter(({ path }) => path.startsWith('services/')).map(({ words }) => words);
const locationTotals = totals.filter(({ path }) => path.startsWith('locations/')).map(({ words }) => words);
console.log(
  `Content audit passed: 6 service pages (${Math.min(...serviceTotals)}-${Math.max(...serviceTotals)} words) and ` +
  `6 location pages (${Math.min(...locationTotals)}-${Math.max(...locationTotals)} words).`,
);
