import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const fixture = mkdtempSync(join(tmpdir(), 'athenaeum-link-check-'));
const outside = `${fixture}-outside.txt`;
const tool = new URL('./check-links.mjs', import.meta.url);

function write(path, content = '') {
  const target = join(fixture, path);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, content);
}

function check() {
  return spawnSync(process.execPath, [tool.pathname, fixture], { encoding: 'utf8' });
}

try {
  write('index.html', '<main id="content"><a href="/chapter/#part">Chapter</a><a href="https://openstax.org/">Source</a><a href="mailto:reader@example.test">Email</a><video poster="/media/poster.bin"></video><img srcset="/media/a.bin 1x, /media/b.bin 2x"></main>');
  write('chapter/index.html', '<h2 id="part">Part</h2>');
  write('media/poster.bin');
  write('media/a.bin');
  write('media/b.bin');
  assert.equal(check().status, 0, 'valid href, poster, and srcset references should pass');

  write('index.html', '<main id="content"><form action="/missing-submit/"></form></main>');
  assert.match(check().stderr, /missing \/missing-submit\//, 'form actions must be checked');

  write('index.html', '<main id="content"><video poster="/missing-poster.bin"></video></main>');
  assert.match(check().stderr, /missing \/missing-poster\.bin/, 'poster URLs must be checked');

  write('index.html', '<main id="content"><img srcset="/media/a.bin 1x, /missing-2x.bin 2x"></main>');
  assert.match(check().stderr, /missing \/missing-2x\.bin/, 'every srcset candidate must be checked');

  write('index.html', '<main id="content"><a href="javascript:alert(1)">Unsafe</a></main>');
  assert.match(check().stderr, /forbidden or unsupported javascript:/, 'javascript URLs must fail');

  write('index.html', '<main id="content"><a href=" \tjava\nscript:alert(1)">Unsafe</a></main>');
  assert.match(
    check().stderr,
    /forbidden or unsupported javascript:/,
    'WHATWG normalization must happen before scheme validation',
  );

  write('index.html', '<main id="content"><a href="&Tab;javascript&colon;alert(1)">Unsafe</a></main>');
  assert.match(
    check().stderr,
    /forbidden or unsupported javascript:/,
    'HTML character references must not disguise an active scheme',
  );

  for (const scheme of ['data:text/html,unsafe', 'blob:https://athenaeumpopuli.org/id', 'file:///etc/passwd']) {
    write('index.html', `<main id="content"><a href="${scheme}">Unsupported</a></main>`);
    assert.match(
      check().stderr,
      /forbidden or unsupported/,
      `${scheme.split(':', 1)[0]} URLs must not bypass the active-URL policy`,
    );
  }

  writeFileSync(outside, 'outside the build root');
  write(
    'index.html',
    `<main id="content"><a href="/..%2f${basename(outside)}">Traversal</a></main>`,
  );
  assert.match(
    check().stderr,
    /target escapes the build root/,
    'percent-encoded separators must not resolve to files outside the build root',
  );
} finally {
  rmSync(fixture, { recursive: true, force: true });
  rmSync(outside, { force: true });
}

console.log('internal links: extended URL attributes and unsafe protocols covered');
