import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

const expectedHugo = '0.164.0';
const hugo = spawnSync('hugo', ['version'], { encoding: 'utf8' });

assert.equal(
  hugo.status,
  0,
  `Hugo extended ${expectedHugo} is required but \`hugo version\` failed: ${hugo.stderr || 'not installed'}`,
);
assert.match(
  hugo.stdout,
  new RegExp(`\\bv${expectedHugo.replaceAll('.', '\\.')}\\+extended\\b`),
  `Hugo extended ${expectedHugo} is required; received: ${hugo.stdout.trim()}`,
);

console.log(`toolchain: Hugo extended ${expectedHugo} is active`);
