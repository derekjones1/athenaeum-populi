/** Verify one global Pagefind index covers every migrated textbook. */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { join } from 'node:path';

const root = process.argv[2] || 'public';
const pagefindDir = join(root, 'pagefind');
const entryPath = join(pagefindDir, 'pagefind-entry.json');
const fragmentDir = join(pagefindDir, 'fragment');
const requiredBooks = ['prealgebra', 'elementary-algebra', 'intermediate-algebra'];

if (!existsSync(entryPath)) throw new Error(`Pagefind index not found: ${entryPath}`);
const entry = JSON.parse(readFileSync(entryPath, 'utf8'));
const languages = Object.entries(entry.languages || {});
if (languages.length !== 1 || languages[0][0] !== 'en') throw new Error('Expected one global English Pagefind index');

const fragmentFiles = readdirSync(fragmentDir).filter((name) => name.endsWith('.pf_fragment'));
const urls = fragmentFiles.map((name) => {
  const decoded = gunzipSync(readFileSync(join(fragmentDir, name))).toString('utf8');
  return JSON.parse(decoded.replace(/^pagefind_dcd/, '')).url;
});
const pageCount = languages[0][1].page_count;
if (fragmentFiles.length !== pageCount) throw new Error(`Pagefind says ${pageCount} pages but emitted ${fragmentFiles.length} fragments`);

for (const book of requiredBooks) {
  const prefix = `/math/${book}/`;
  if (!urls.some((url) => url.startsWith(prefix))) throw new Error(`Global index has no results from ${prefix}`);
}

function findNestedPagefind(dir) {
  const found = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (!statSync(path).isDirectory()) continue;
    if (entry === 'pagefind' && path !== pagefindDir) found.push(path);
    else if (path !== pagefindDir) found.push(...findNestedPagefind(path));
  }
  return found;
}
const nested = findNestedPagefind(root);
if (nested.length) throw new Error(`Found per-book Pagefind indexes: ${nested.join(', ')}`);

console.log(`✓ Pagefind: one global index, ${pageCount} pages, all ${requiredBooks.length} books covered`);
