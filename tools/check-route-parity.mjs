/** Verify that every URL exported by the legacy Next site still exists. */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const manifestPath = process.argv[2] || 'tools/fixtures/legacy-routes.txt';
const outputDir = process.argv[3] || 'public';

function files(dir) {
  const found = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) found.push(...files(path));
    else found.push(path);
  }
  return found;
}

function canonicalRoute(file) {
  let path = '/' + relative(outputDir, file).split(sep).join('/');
  if (path === '/index.html') return '/';
  if (path.endsWith('/index.html')) return path.slice(0, -10);
  if (path.endsWith('.html')) return path.slice(0, -5) + '/';
  return null;
}

if (!existsSync(manifestPath)) throw new Error(`Legacy route manifest not found: ${manifestPath}`);
if (!existsSync(outputDir)) throw new Error(`Built site not found: ${outputDir} (run npm run build first)`);

const legacy = readFileSync(manifestPath, 'utf8').split(/\r?\n/)
  .map((line) => line.trim()).filter((line) => line && !line.startsWith('#'));
const current = new Set(files(outputDir).filter((file) => file.endsWith('.html')).map(canonicalRoute).filter(Boolean));
const missing = legacy.filter((route) => !current.has(route));

if (missing.length) {
  console.error(`✖ route parity failed: ${missing.length} legacy route(s) are missing:`);
  missing.forEach((route) => console.error(`  · ${route}`));
  process.exit(1);
}

console.log(`✓ route parity: ${legacy.length}/${legacy.length} legacy routes preserved (${current.size - legacy.length} additional routes)`);
