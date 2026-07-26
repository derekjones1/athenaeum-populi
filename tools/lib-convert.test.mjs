import assert from 'node:assert/strict';
import {
  convertMdx,
  parseJsxAttrs,
  parseLiteralExpression,
} from './lib-convert.mjs';

assert.deepEqual(
  { ...parseLiteralExpression('{ lines: [{ slope: 1/2, intercept: -3 }], enabled: true }') },
  { lines: [{ slope: 0.5, intercept: -3 }], enabled: true },
);
assert.deepEqual(parseLiteralExpression('[1, 2, 3,]'), [1, 2, 3]);
assert.equal(parseLiteralExpression('-(2 + 3) / 5'), -1);

for (const expression of [
  'globalThis.process.exit(1)',
  '(() => 42)()',
  'Math.random()',
  '{ __proto__: { polluted: true } }',
  '`value ${process.env.SECRET}`',
]) {
  assert.throws(
    () => parseLiteralExpression(expression),
    /unsupported converter expression/,
    `executable expression must be rejected: ${expression}`,
  );
}

const attrs = parseJsxAttrs(String.raw`question="Say \"hello\"" answer="1"`);
assert.equal(attrs.question.str, String.raw`Say \"hello\"`);
assert.equal(attrs.answer.str, '1', 'an escaped quote must not swallow following attributes');

const converted = convertMdx(`---
title: Test
---
<Graph
  ariaLabel="A line."
  xMin={-2}
  xMax={2}
  lines={[{ slope: 1/2, intercept: -1 }]}
/>
`);
assert.match(converted.body, /<svg role="img" aria-label="A line\."/);
assert.doesNotMatch(converted.body, /<Graph\b/);

console.log('converter: literal props parse without executing source code');
