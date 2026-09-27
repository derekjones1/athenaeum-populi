// The render tool's page reader: every inline SVG and every display block,
// each at the line it starts on (the PNG names the reviewer cites back).
import test from 'node:test';
import assert from 'node:assert/strict';
import { extractRenderables } from './render-page-figures.mjs';

test('finds multi-line SVGs, fenced and one-line display blocks, with start lines', () => {
  const page = [
    'Intro $x$ inline stays out.', // 1
    '<svg viewBox="0 0 10 10" role="img" aria-label="a">', // 2
    '  <rect/>', // 3
    '</svg>', // 4
    '$$', // 5
    '\\begin{array}{r}', // 6
    '\\overset{1}{4}3 \\\\', // 7
    '\\end{array}', // 8
    '$$', // 9
    '$$a + b = b + a$$', // 10
  ].join('\n');
  const { svgs, blocks } = extractRenderables(page);
  assert.deepEqual(svgs.map((s) => s.line), [2]);
  assert.match(svgs[0].text, /^<svg[\s\S]*<\/svg>$/);
  assert.deepEqual(blocks.map((b) => b.line), [5, 10]);
  assert.equal(blocks[1].tex, 'a + b = b + a');
  assert.match(blocks[0].tex, /overset/);
});
