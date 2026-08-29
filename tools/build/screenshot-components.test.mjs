import test from 'node:test';
import assert from 'node:assert/strict';
import { KINDS, parseArgs, shotName } from './screenshot-components.mjs';

test('parseArgs takes a route, an optional out dir, and a validated --only list', () => {
  assert.throws(() => parseArgs([]), /usage/);
  assert.deepEqual(parseArgs(['/a/b/']), { route: '/a/b/', outDir: 'test-results/component-shots', only: null });
  assert.deepEqual(parseArgs(['/a/b/', 'out', '--only', 'text-in,self-check']),
    { route: '/a/b/', outDir: 'out', only: ['text-in', 'self-check'] });
  assert.throws(() => parseArgs(['/a/b/', '--only', 'widget']), /unknown kind "widget"/);
  assert.throws(() => parseArgs(['/a/b/', '--only']), /--only needs/);
  assert.throws(() => parseArgs(['/a/b/', '--nope']), /unknown option/);
});

test('every kind names a selector, and the two graded kinds drive a wrong answer', () => {
  for (const [kind, recipe] of Object.entries(KINDS)) {
    assert.ok(recipe.selector, `${kind} has a selector`);
  }
  assert.equal(KINDS['fill-in'].action, 'wrong-fillin');
  assert.equal(KINDS['text-in'].action, 'wrong-textin');
  assert.equal(KINDS.mediafigure.action, 'open-details');
});

test('shotName is theme-kind-index with a zero-padded index', () => {
  assert.equal(shotName('dark', 'text-in', 3), 'dark-text-in-03.png');
});
