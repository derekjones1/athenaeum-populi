import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const searchScript = readFileSync(new URL('./pagefind-search.js', import.meta.url), 'utf8');
const searchPartial = readFileSync(
  new URL('../../themes/hextra/layouts/_partials/search.html', import.meta.url),
  'utf8',
);

assert.match(searchPartial, /\$location := \.location/);
assert.match(searchPartial, /role="combobox"/);
assert.match(searchPartial, /aria-controls="\{\{ \$resultsID \}\}"/);
assert.match(searchPartial, /role="listbox"/);

assert.match(searchScript, /item\.setAttribute\('role', 'presentation'\)/);
assert.match(searchScript, /link\.setAttribute\('role', 'option'\)/);
assert.match(searchScript, /link\.tabIndex = -1/);
assert.match(searchScript, /input\?\.setAttribute\('aria-activedescendant', next\.id\)/);
assert.match(searchScript, /input\.setAttribute\('aria-expanded', 'false'\)/);
assert.match(searchScript, /wrapper\.addEventListener\('focusout'/);
assert.match(searchScript, /!wrapper\.contains\(event\.relatedTarget\)/);
assert.match(searchScript, /if \(state\.get\(wrapper\)\?\.sequence !== current\) return;\s*console\.error/s);
assert.match(searchScript, /if \(pagefindPromise === attempt\) pagefindPromise = undefined/);

console.log('Pagefind search: ownership, focus departure, stale requests, and retry contract covered');
