import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { MIN_VERIFIED_RE, applyMinVerified, readMinVerified } from './baselines.mjs';

// The fixture is a verbatim slice of the real file, so a test failure here
// means the real script line and the shared pattern have genuinely diverged.
const PACKAGE_FIXTURE = '"verify:answers": "node tools/verify-answers.mjs content --min-verified 2587",';

test('the min-verified floor reads and rewrites', () => {
  assert.equal(readMinVerified(PACKAGE_FIXTURE), 2587);
  const next = applyMinVerified(PACKAGE_FIXTURE, 2701);
  assert.match(next, /--min-verified 2701/);
  assert.doesNotMatch(next, /2587/);
});

test('a rephrased script line fails loud instead of being skipped', () => {
  assert.throws(
    () => applyMinVerified('"verify:answers": "node tools/verify-answers.mjs content"', 1),
    /no longer carries/,
  );
});

test('the live package.json still matches the shared pattern', () => {
  // The fixture above is a copy; this pins the pattern to the real script line
  // so a rewrite of package.json cannot silently detach the gate.
  const text = readFileSync(new URL('../package.json', import.meta.url), 'utf8');
  assert.ok(MIN_VERIFIED_RE.test(text), 'package.json still matches its baseline pattern');
});
