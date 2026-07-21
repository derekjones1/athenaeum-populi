/** Check built internal links, assets, and same-page/cross-page fragments. */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';

const root = process.argv[2] || 'public';
const origin = 'https://athenaeumpopuli.org';

function files(dir) {
  const found = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) found.push(...files(path));
    else found.push(path);
  }
  return found;
}

function relPath(path) { return relative(root, path).split(sep).join('/'); }
function pageUrl(path) {
  const rel = relPath(path);
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -10);
  return '/' + rel;
}
function targetFile(pathname) {
  let decoded;
  try { decoded = decodeURIComponent(pathname); } catch { return null; }
  const clean = decoded.replace(/^\/+/, '');
  const candidates = [];
  if (!clean) candidates.push('index.html');
  else if (clean.endsWith('/')) candidates.push(join(clean, 'index.html'));
  else {
    candidates.push(clean);
    if (!/\.[^/]+$/.test(clean)) candidates.push(join(clean, 'index.html'), clean + '.html');
  }
  return candidates.map((candidate) => join(root, candidate)).find(existsSync) || null;
}
function idsIn(file) {
  const html = readFileSync(file, 'utf8');
  const ids = new Set();
  for (const match of html.matchAll(/\s(?:id|name)=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi)) {
    ids.add(match[1] ?? match[2] ?? match[3]);
  }
  return ids;
}

if (!existsSync(root)) throw new Error(`Built site not found: ${root} (run npm run build first)`);
const htmlFiles = files(root).filter((file) => file.endsWith('.html'));
const idCache = new Map();
const failures = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const base = new URL(pageUrl(file), origin);
  for (const match of html.matchAll(/\s(?:href|src)=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi)) {
    const raw = (match[1] ?? match[2] ?? match[3]).replaceAll('&amp;', '&');
    if (!raw || /^(?:mailto:|tel:|data:|javascript:|blob:)/i.test(raw) || raw.startsWith('//')) continue;
    let url;
    try { url = new URL(raw, base); } catch { failures.push(`${relPath(file)} → malformed URL ${raw}`); continue; }
    if (url.origin !== origin) continue;
    const target = targetFile(url.pathname);
    if (!target) { failures.push(`${relPath(file)} → missing ${url.pathname}`); continue; }
    if (url.hash && target.endsWith('.html')) {
      let fragment;
      try { fragment = decodeURIComponent(url.hash.slice(1)); } catch { fragment = url.hash.slice(1); }
      if (!idCache.has(target)) idCache.set(target, idsIn(target));
      if (fragment && !idCache.get(target).has(fragment)) failures.push(`${relPath(file)} → missing #${fragment} at ${url.pathname}`);
    }
  }
}

if (failures.length) {
  console.error(`✖ internal-link check failed (${failures.length}):`);
  failures.slice(0, 100).forEach((failure) => console.error(`  · ${failure}`));
  if (failures.length > 100) console.error(`  … ${failures.length - 100} more`);
  process.exit(1);
}
console.log(`✓ internal links: ${htmlFiles.length} HTML files checked`);
