/** Check built internal links, assets, and same-page/cross-page fragments. */
import {
  existsSync,
  readFileSync,
  realpathSync,
  statSync,
} from 'node:fs';
import { walkFiles } from './lib-content.mjs';
import {
  dirname,
  join,
  relative,
  resolve,
  sep,
} from 'node:path';

const root = process.argv[2] || 'public';
const resolvedRoot = resolve(root);
const origin = 'https://athenaeumpopuli.org';

function relPath(path) { return relative(root, path).split(sep).join('/'); }
function pageUrl(path) {
  const rel = relPath(path);
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -10);
  return '/' + rel;
}
const inside = (base, target) => target === base || target.startsWith(`${base}${sep}`);

function targetFile(pathname, realRoot) {
  let decoded;
  try { decoded = decodeURIComponent(pathname); } catch { return { error: 'malformed encoded path' }; }
  if (decoded.includes('\0')) return { error: 'target contains a null byte' };
  const clean = decoded.replaceAll('\\', '/').replace(/^\/+/, '');
  const candidates = [];
  if (!clean) candidates.push('index.html');
  else if (clean.endsWith('/')) candidates.push(join(clean, 'index.html'));
  else {
    candidates.push(clean);
    if (!/\.[^/]+$/.test(clean)) candidates.push(join(clean, 'index.html'), clean + '.html');
  }
  for (const candidate of candidates) {
    const target = resolve(resolvedRoot, candidate);
    if (!inside(resolvedRoot, target)) return { error: 'target escapes the build root' };
    if (!existsSync(target) || !statSync(target).isFile()) continue;
    const realTarget = realpathSync(target);
    if (!inside(realRoot, realTarget)) return { error: 'target escapes the build root through a symlink' };
    return { file: target };
  }
  return {};
}
function idsIn(file) {
  const html = readFileSync(file, 'utf8');
  const ids = new Set();
  for (const match of html.matchAll(/\s(?:id|name)=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi)) {
    ids.add(match[1] ?? match[2] ?? match[3]);
  }
  return ids;
}

function referencedUrls(html) {
  const refs = [];
  const attributes = 'href|xlink:href|src|poster|action|formaction|cite|data|srcset';
  for (const match of html.matchAll(new RegExp(
    `\\s(${attributes})=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
    'gi',
  ))) {
    const name = match[1].toLowerCase();
    const value = (match[2] ?? match[3] ?? match[4]).replaceAll('&amp;', '&');
    if (name === 'srcset' && !/^data:/i.test(value.trim())) {
      for (const candidate of value.split(',')) {
        const url = candidate.trim().split(/\s+/, 1)[0];
        if (url) refs.push({ attribute: name, value: url });
      }
    } else {
      refs.push({ attribute: name, value });
    }
  }
  return refs;
}

function decodeHtmlUrl(value) {
  const named = { amp: '&', colon: ':', tab: '\t', newline: '\n' };
  return value
    .replace(/&#(?:x([\da-f]+)|(\d+));?/gi, (entity, hex, decimal) => {
      const codePoint = Number.parseInt(hex || decimal, hex ? 16 : 10);
      try { return String.fromCodePoint(codePoint); } catch { return entity; }
    })
    .replace(/&(amp|colon|tab|newline);/gi, (entity, name) => named[name.toLowerCase()] ?? entity);
}

if (!existsSync(root)) throw new Error(`Built site not found: ${root} (run npm run build first)`);
const realRoot = realpathSync(resolvedRoot);
const htmlFiles = walkFiles(root, { filter: (name) => name.endsWith('.html') });
const idCache = new Map();
const failures = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const base = new URL(pageUrl(file), origin);
  for (const { attribute, value: encoded } of referencedUrls(html)) {
    const raw = decodeHtmlUrl(encoded);
    if (!raw) continue;
    let url;
    try { url = new URL(raw, base); } catch { failures.push(`${relPath(file)} → malformed URL ${raw}`); continue; }
    const protocol = url.protocol.toLowerCase();
    if (protocol === 'mailto:' || protocol === 'tel:') {
      if (attribute === 'href' || attribute === 'xlink:href') continue;
      failures.push(`${relPath(file)} → unsupported ${protocol} URL in ${attribute}`);
      continue;
    }
    if (protocol !== 'http:' && protocol !== 'https:') {
      failures.push(`${relPath(file)} → forbidden or unsupported ${protocol} URL`);
      continue;
    }
    if (url.origin !== origin) continue;
    const target = targetFile(url.pathname, realRoot);
    if (target.error) { failures.push(`${relPath(file)} → ${target.error}: ${url.pathname}`); continue; }
    if (!target.file) { failures.push(`${relPath(file)} → missing ${url.pathname}`); continue; }
    if (url.hash && target.file.endsWith('.html')) {
      let fragment;
      try { fragment = decodeURIComponent(url.hash.slice(1)); } catch { fragment = url.hash.slice(1); }
      if (!idCache.has(target.file)) idCache.set(target.file, idsIn(target.file));
      if (fragment && !idCache.get(target.file).has(fragment)) failures.push(`${relPath(file)} → missing #${fragment} at ${url.pathname}`);
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
