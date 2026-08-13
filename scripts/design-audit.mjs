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

if (issues.length) {
  console.error(`Design audit failed with ${issues.length} issue(s):\n${issues.map((issue) => `- ${issue}`).join('\n')}`);
  process.exit(1);
}

console.log(`Design audit passed: ${files.length} source assets contain no rounded-corner treatments.`);
