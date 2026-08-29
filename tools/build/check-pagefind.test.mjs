import assert from 'node:assert/strict';
import {
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { gzipSync } from 'node:zlib';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const fixture = mkdtempSync(join(tmpdir(), 'athenaeum-pagefind-check-'));
const tool = new URL('./check-pagefind.mjs', import.meta.url);
const books = ['prealgebra', 'elementary-algebra', 'intermediate-algebra'];
const builtRoot = join(fixture, 'public');
const contentRoot = join(fixture, 'content');

function write(path, content = '') {
  const target = join(fixture, path);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, content);
}

function check() {
  return spawnSync(process.execPath, [tool.pathname, builtRoot, contentRoot], { encoding: 'utf8' });
}

try {
  write('public/pagefind/pagefind-entry.json', JSON.stringify({
    languages: { en: { page_count: books.length } },
  }));
  books.forEach((book, index) => {
    const url = `/math/${book}/`;
    // The expected-book list comes from SOURCE, not from the artifact.
    write(`content/math/${book}/_index.md`, '---\ntitle: Book\n---\n');
    write(`public/math/${book}/index.html`, '<main id="content"><p>A real textbook page.</p></main>');
    write(
      `public/math/${book}/old/index.html`,
      `<meta name="robots" content="noindex"><link rel="canonical" href="${url}"><meta http-equiv="refresh" content="0; url=${url}">`,
    );
    write(
      `public/pagefind/fragment/${index}.pf_fragment`,
      gzipSync(`pagefind_dcd${JSON.stringify({ url })}`),
    );
  });
  assert.equal(
    check().status,
    0,
    'alias redirect HTML must not be required in the Pagefind index',
  );

  // Sabotage 1 — an authored book whose BUILD OUTPUT is missing entirely.
  // Deriving expectations from public/ passed this exact case ("all 3 books
  // covered" while a whole book had disappeared); deriving from content/
  // must fail it.
  write('content/math/precalculus/_index.md', '---\ntitle: Precalculus\n---\n');
  const missingBuild = check();
  assert.equal(missingBuild.status, 1, 'an authored book absent from the build must fail');
  assert.match(missingBuild.stderr, /precalculus/, 'the failure must name the missing book');

  // Sabotage 2 — the book builds but its real page is absent from the index.
  write('public/math/precalculus/index.html', '<main id="content"><p>A real textbook page.</p></main>');
  const uncovered = check();
  assert.equal(uncovered.status, 1, 'a built book missing from the index must fail coverage');
  assert.match(uncovered.stderr, /precalculus/, 'the failure must name the uncovered book');

  // Sabotage 3 — an authored SECTION missing from both the build and the
  // index. When expected pages were walked from public/, this was invisible
  // (the missing page dropped out of the expectations along with the build).
  rmSync(join(fixture, 'content/math/precalculus'), { recursive: true, force: true });
  rmSync(join(fixture, 'public/math/precalculus'), { recursive: true, force: true });
  write('content/math/prealgebra/01-chapter/01-authored-section.md', '---\ntitle: Section\n---\n');
  const missingSection = check();
  assert.equal(missingSection.status, 1, 'an authored section absent from the build must fail');
  assert.match(missingSection.stderr, /01-authored-section/, 'the failure must name the missing section');
  rmSync(join(fixture, 'content/math/prealgebra/01-chapter'), { recursive: true, force: true });

  // Sabotage 4 — a NON-book authored page (About) built but absent from the
  // index. Expectations scoped to content/math left every non-math route
  // outside the contract.
  write('content/about.md', '---\ntitle: About\n---\n');
  write('public/about/index.html', '<main id="content"><p>About this site.</p></main>');
  const missingAbout = check();
  assert.equal(missingAbout.status, 1, 'an authored non-book page missing from the index must fail');
  assert.match(missingAbout.stderr, /\/about\//, 'the failure must name the uncovered route');
} finally {
  rmSync(fixture, { recursive: true, force: true });
}

console.log('Pagefind coverage: expectations are source-derived, alias redirects excluded, and missing books fail');
