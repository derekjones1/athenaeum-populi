/**
 * Resolve every external URL printed in the content tree and report the
 * ones that no longer answer. Report-only: it needs the network, and a
 * publisher's bot wall (403/406 to a script) is not a dead page, so it is
 * not part of `npm test` or `npm run ci`. Run it by hand before calling a
 * book complete, and after a source re-pin.
 *
 * The biology completion audit (September 5, 2026) was the first time the
 * 198 openstax.org/l/ Link to Learning redirects were followed; four had
 * rotted to 404 (errata 314–317). Nothing had checked them before because
 * `check:links` reads only the built site's internal links.
 *
 *   node tools/build/check-external-links.mjs [content-root] [--only-openstax]
 *        [--concurrency 8] [--json out.json]
 *
 * Exit 0 always unless --strict, in which case a confirmed 404/410 or a
 * network failure fails the run (bot walls still pass).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { walkFiles } from '../lib/content.mjs';

const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(`--${name}`); return i === -1 ? undefined : (args[i + 1] ?? true); };
const root = args.find((a) => !a.startsWith('--') && args[args.indexOf(a) - 1]?.startsWith('--') !== true && !/^\d+$/.test(a)) || 'content';
const onlyOpenstax = args.includes('--only-openstax');
const strict = args.includes('--strict');
const concurrency = Number(flag('concurrency') || 8);
const jsonOut = typeof flag('json') === 'string' ? flag('json') : null;

const URL_RE = /https?:\/\/[^\s)"'<>\]]+/g;
const SKIP = /^https?:\/\/(?:openstax\.org\/(?!l\/)|creativecommons\.org|athenaeumpopuli\.org)/;

const found = new Map(); // url -> Set(paths)
for (const file of walkFiles(root)) {
  if (!file.endsWith('.md')) continue;
  const text = readFileSync(file, 'utf8');
  for (const m of text.matchAll(URL_RE)) {
    const url = m[0].replace(/[.,;:]+$/, '');
    if (SKIP.test(url)) continue;
    if (onlyOpenstax && !/^https?:\/\/openstax\.org\/l\//.test(url)) continue;
    if (!found.has(url)) found.set(url, new Set());
    found.get(url).add(file);
  }
}

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36 athenaeum-populi-link-check';
async function probe(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30_000);
  try {
    let res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: controller.signal, headers: { 'user-agent': UA, accept: '*/*' } });
    if (res.status === 405 || res.status === 403 || res.status === 406 || res.status >= 500) {
      res = await fetch(url, { method: 'GET', redirect: 'follow', signal: controller.signal, headers: { 'user-agent': UA, accept: 'text/html,*/*' } });
    }
    return { status: res.status, finalUrl: res.url };
  } catch (error) {
    return { status: 0, error: error?.cause?.code || error?.name || String(error) };
  } finally { clearTimeout(timer); }
}

const classify = (r) => (
  r.status === 0 ? 'unreachable'
    : r.status === 404 || r.status === 410 ? 'dead'
      : r.status === 403 || r.status === 406 || r.status === 429 ? 'blocked'
        : r.status >= 400 ? 'error'
          : 'ok'
);

const urls = [...found.keys()].sort();
const results = [];
let next = 0;
await Promise.all(Array.from({ length: Math.min(concurrency, urls.length) }, async () => {
  while (next < urls.length) {
    const url = urls[next++];
    const r = await probe(url);
    results.push({ url, ...r, kind: classify(r), pages: [...found.get(url)].sort() });
  }
}));
results.sort((a, b) => a.url.localeCompare(b.url));

const tally = {};
for (const r of results) tally[r.kind] = (tally[r.kind] || 0) + 1;
console.log(`external links: ${urls.length} distinct URL(s) across ${root} — ${Object.entries(tally).map(([k, v]) => `${v} ${k}`).join(', ')}`);
for (const r of results) {
  if (r.kind === 'ok') continue;
  console.log(`  ${r.kind.padEnd(11)} ${r.status || r.error}  ${r.url}${r.finalUrl && r.finalUrl !== r.url ? `  →  ${r.finalUrl}` : ''}`);
  for (const p of r.pages) console.log(`               ${p}`);
}
if (jsonOut) writeFileSync(jsonOut, JSON.stringify(results, null, 1));
if (strict && results.some((r) => r.kind === 'dead' || r.kind === 'unreachable')) process.exit(1);
