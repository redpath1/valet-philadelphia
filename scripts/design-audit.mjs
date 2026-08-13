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

const files = (await Promise.all([
  walk(join(root, 'src')),
  walk(join(root, 'public')),
])).flat().filter((path) => /\.(astro|css|svg|ts|js)$/.test(path));

for (const file of files) {
  const source = await readFile(file, 'utf8');
  const path = relative(root, file);
  if (/\brounded(?:-|\b)/.test(source)) issues.push(`${path}: contains a rounded Tailwind treatment`);
  if (/\b(?:mt|mb|gap|space-y)-(?:16|20|24|28|32)\b/.test(source)) issues.push(`${path}: contains an oversized vertical spacing utility`);
  if (/\b(?:min-h-screen|h-screen)\b|100(?:d|s|l)?vh/.test(source)) issues.push(`${path}: contains a full-viewport height treatment`);
  if (/\btext-(?:7xl|8xl|9xl)\b/.test(source)) issues.push(`${path}: contains an oversized heading utility`);
  const radiusDeclarations = [...source.matchAll(/border-radius\s*:\s*([^;}]+)/g)];
  if (radiusDeclarations.some(([, value]) => !/^0(?:\s*!important)?$/.test(value.trim()))) {
    issues.push(`${path}: contains a nonzero border radius`);
  }
  if (/<[^>]+\s(?:rx|ry)=/.test(source)) issues.push(`${path}: contains an SVG corner radius`);
}

const globalCss = await readFile(join(root, 'src', 'styles', 'global.css'), 'utf8');
if (!/\*\s*\{[\s\S]*?border-radius:\s*0\s*!important;[\s\S]*?\}/.test(globalCss)) {
  issues.push('src/styles/global.css: missing the sitewide square-corner safeguard');
}

for (const [token, value] of [
  ['--space-1', '0.5rem'],
  ['--space-2', '0.8125rem'],
  ['--space-3', '1.3125rem'],
  ['--space-4', '2.125rem'],
  ['--space-5', '3.4375rem'],
]) {
  if (!globalCss.includes(`${token}: ${value};`)) issues.push(`src/styles/global.css: missing proportional spacing token ${token}: ${value}`);
}

for (const [selector, columns] of [
  ['grid-5-8', 'minmax(0, 5fr) minmax(0, 8fr)'],
  ['grid-8-5', 'minmax(0, 8fr) minmax(0, 5fr)'],
  ['grid-6-7', 'minmax(0, 6fr) minmax(0, 7fr)'],
  ['grid-7-6', 'minmax(0, 7fr) minmax(0, 6fr)'],
]) {
  const pattern = new RegExp(`\\.${selector}\\s*\\{[\\s\\S]*?grid-template-columns:\\s*${columns.replace(/[()]/g, '\\$&')};`);
  if (!pattern.test(globalCss)) issues.push(`src/styles/global.css: missing 13-unit grid rule .${selector}`);
}

if (/radial-gradient|backdrop-blur|box-shadow\s*:/.test(globalCss)) {
  issues.push('src/styles/global.css: contains a decorative gradient, blur, or shadow treatment');
}

const readClampMax = (scope, selector) => {
  const match = scope.match(new RegExp(`\\.${selector}\\s*\\{[\\s\\S]*?font-size:\\s*clamp\\([^,]+,[^,]+,\\s*([0-9.]+)rem\\s*\\)`));
  return match ? Number(match[1]) : null;
};

const desktopDisplay = readClampMax(globalCss, 'display-title');
const desktopSection = readClampMax(globalCss, 'section-title');
const mobileScope = globalCss.match(/@media\s*\(max-width:\s*640px\)\s*\{([\s\S]*)\}\s*$/)?.[1] ?? '';
const mobileDisplay = readClampMax(mobileScope, 'display-title');
const mobileSection = readClampMax(mobileScope, 'section-title');

for (const [label, value, ceiling] of [
  ['desktop display title', desktopDisplay, 5],
  ['desktop section title', desktopSection, 3.5],
  ['mobile display title', mobileDisplay, 3.1],
  ['mobile section title', mobileSection, 2.5],
]) {
  if (value === null) issues.push(`src/styles/global.css: could not read ${label} clamp`);
  else if (value > ceiling) issues.push(`src/styles/global.css: ${label} is ${value}rem; ceiling ${ceiling}rem`);
}

if (issues.length) {
  console.error(`Design audit failed with ${issues.length} issue(s):\n${issues.map((issue) => `- ${issue}`).join('\n')}`);
  process.exit(1);
}

console.log(`Design audit passed: ${files.length} source assets use square corners, restrained spacing, and capped heading scales.`);
