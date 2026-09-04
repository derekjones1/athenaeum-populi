import assert from 'node:assert/strict';
import test from 'node:test';
import { spawnSync } from 'node:child_process';

const expectedHugo = '0.164.0';
const expectedVersionPattern = new RegExp(
  `\\bv${expectedHugo.replaceAll('.', '\\.')}(?:-[0-9a-f]+)?\\+extended\\b`,
  'i',
);
const hugo = spawnSync('hugo', ['version'], { encoding: 'utf8' });

test(`toolchain: Hugo extended ${expectedHugo} is active`, () => {
  assert.match(
    `hugo v${expectedHugo}-ce2470e7012b5ab5fc4e10ebe4027e9f8d9e00dc+extended linux/amd64`,
    expectedVersionPattern,
    'the official Linux release format may include Hugo’s build revision',
  );
  assert.doesNotMatch(
    'hugo v0.164.1+extended linux/amd64',
    expectedVersionPattern,
    'a different Hugo release must not satisfy the exact-version pin',
  );
  assert.doesNotMatch(
    `hugo v${expectedHugo} linux/amd64`,
    expectedVersionPattern,
    'a non-extended Hugo build must not satisfy the toolchain requirement',
  );

  assert.equal(
    hugo.status,
    0,
    `Hugo extended ${expectedHugo} is required but \`hugo version\` failed: ${hugo.stderr || 'not installed'}`,
  );
  assert.match(
    hugo.stdout,
    expectedVersionPattern,
    `Hugo extended ${expectedHugo} is required; received: ${hugo.stdout.trim()}`,
  );

  console.log(`toolchain: Hugo extended ${expectedHugo} is active`);
});
