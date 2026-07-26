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

function write(path, content = '') {
  const target = join(fixture, path);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, content);
}

function check() {
  return spawnSync(process.execPath, [tool.pathname, fixture], { encoding: 'utf8' });
}

try {
  write('pagefind/pagefind-entry.json', JSON.stringify({
    languages: { en: { page_count: books.length } },
  }));
  books.forEach((book, index) => {
    const url = `/math/${book}/`;
    write(`math/${book}/index.html`, '<main id="content"><p>A real textbook page.</p></main>');
    write(
      `math/${book}/old/index.html`,
      `<meta name="robots" content="noindex"><link rel="canonical" href="${url}"><meta http-equiv="refresh" content="0; url=${url}">`,
    );
    write(
      `pagefind/fragment/${index}.pf_fragment`,
      gzipSync(`pagefind_dcd${JSON.stringify({ url })}`),
    );
  });
  assert.equal(
    check().status,
    0,
    'alias redirect HTML must not be required in the Pagefind index',
  );
} finally {
  rmSync(fixture, { recursive: true, force: true });
}

console.log('Pagefind coverage: real content is required and alias redirects are excluded');
