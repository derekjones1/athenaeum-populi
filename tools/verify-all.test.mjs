import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const fixture = mkdtempSync(join(tmpdir(), 'athenaeum-content-verifier-'));
const docs = join(fixture, 'docs');
mkdirSync(docs, { recursive: true });

function verify() {
  return spawnSync(process.execPath, ['tools/verify-all.mjs', fixture], {
    cwd: new URL('..', import.meta.url),
    encoding: 'utf8',
  });
}

try {
  writeFileSync(
    join(docs, 'architecture.md'),
    '---\ntitle: Architecture\n---\n\nReact, JSX, MDX, and Nextra metadata are not valid authoring formats.\n',
  );
  assert.equal(verify().status, 0, 'accurate negative descriptions of legacy tools should pass');

  writeFileSync(
    join(docs, 'architecture.md'),
    '---\ntitle: Architecture\n---\n\nCreate `content/example.mdx` and register it in `_meta.js`.\n',
  );
  const stale = verify();
  assert.notEqual(stale.status, 0);
  assert.match(stale.stderr, /stale MDX file paths|stale Nextra metadata files/);
} finally {
  rmSync(fixture, { recursive: true, force: true });
}

console.log('content verifier: stale affirmative MDX instructions rejected without false positives');
