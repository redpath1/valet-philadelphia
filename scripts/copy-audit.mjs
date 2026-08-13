import { readFile, readdir } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';

const root = resolve(process.cwd());
const issues = [];

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  }));
  return files.flat();
};

const bannedCopy = [
  ['em dash', /—/g],
  ['generic hype term', /\b(?:elevate|unlock|transform|seamless|robust|cutting-edge|game-changing)\b/gi],
  ['vague business claim', /\b(?:trusted partner|tailored solutions|comprehensive services|results-driven)\b/gi],
  ['formulaic audience opener', /\bwhether you(?:'re| are)\b/gi],
  ['synthetic headline phrase', /\b(?:a better|built around|moment that matters|real pavement|professional should|every useful page|human note|editorial rhythm)\b/gi],
];

const sourceFiles = (await walk(join(root, 'src'))).filter((path) => /\.(astro|css|json|ts)$/.test(path));

const decode = (value) => value
  .replace(/&amp;/g, '&')
  .replace(/&#39;|&apos;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const htmlFiles = (await walk(join(root, 'dist'))).filter((path) => path.endsWith('.html'));
let headingCount = 0;
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const path = relative(join(root, 'dist'), file);
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
  const visibleText = decode(html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' '));
  for (const [label, pattern] of bannedCopy) {
    const matches = visibleText.match(pattern) ?? [];
    if (matches.length) issues.push(`${path}: contains ${label} (${[...new Set(matches)].join(', ')})`);
  }
  const headings = [...main.matchAll(/<h([1-3])\b[^>]*>([\s\S]*?)<\/h\1>/gi)]
    .map(([, level, content]) => ({ level: Number(level), text: decode(content) }));
  headingCount += headings.length;

  const seen = new Set();
  for (const heading of headings) {
    const normalized = heading.text.toLowerCase();
    if (normalized.length > 92) issues.push(`${path}: H${heading.level} is ${normalized.length} characters: ${heading.text}`);
    if (seen.has(normalized)) issues.push(`${path}: repeats heading text: ${heading.text}`);
    seen.add(normalized);
  }
}

if (issues.length) {
  console.error(`Copy audit failed with ${issues.length} issue(s):\n${issues.map((issue) => `- ${issue}`).join('\n')}`);
  process.exit(1);
}

console.log(`Copy audit passed: ${sourceFiles.length} source files and ${headingCount} rendered headings avoid the blocked copy patterns.`);
