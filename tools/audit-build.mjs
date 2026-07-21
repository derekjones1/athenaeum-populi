/** Production artifact guardrails, including Cloudflare's 20,000-file cap. */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.argv[2] || 'public';
const maxFiles = 20_000;
function files(dir) {
  const found = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) found.push(...files(path));
    else found.push(path);
  }
  return found;
}
if (!existsSync(root)) throw new Error(`Built site not found: ${root} (run npm run build first)`);
const built = files(root);
const bytes = built.reduce((sum, file) => sum + statSync(file).size, 0);
const html = built.filter((file) => file.endsWith('.html')).map((file) => readFileSync(file, 'utf8')).join('\n');
const forbidden = [
  ['FlexSearch', /flexsearch/i],
  ['CDN dependency', /(?:cdn\.jsdelivr\.net|unpkg\.com)/i],
  ['placeholder production URL', /https:\/\/example\.com/i],
];
const problems = forbidden.filter(([, pattern]) => pattern.test(html)).map(([label]) => label);
if (built.length >= maxFiles) problems.push(`${built.length} files meets/exceeds ${maxFiles}`);
if (!existsSync(join(root, 'katex', 'katex.min.css'))) problems.push('vendored KaTeX CSS missing');
if (!existsSync(join(root, 'pagefind', 'pagefind.js'))) problems.push('Pagefind browser bundle missing');
if (problems.length) {
  console.error(`✖ build audit failed: ${problems.join('; ')}`);
  process.exit(1);
}
console.log(`✓ build audit: ${built.length}/${maxFiles} files, ${(bytes / 1024 / 1024).toFixed(1)} MiB, no runtime CDN/FlexSearch references`);
