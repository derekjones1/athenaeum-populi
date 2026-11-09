/**
 * The Node-side gates must accept exactly the TeX the Hugo build accepts.
 * Chemistry is where the two could part: Hugo's embedded KaTeX bundles
 * mhchem, the npm package loads it only on request.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { renderMath } from './katex.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

test('renderMath typesets mhchem formulas, reactions, and units', () => {
  for (const tex of [
    String.raw`\ce{H2SO4}`,
    String.raw`\ce{SO4^2-}`,
    String.raw`\ce{2H2(g) + O2(g) -> 2H2O(l)}`,
    String.raw`\ce{N2(g) + 3H2(g) <=> 2NH3(g)}`,
    String.raw`\ce{CaCO3(s) ->[\Delta] CaO(s) + CO2(g)}`,
    String.raw`\ce{^{14}_{6}C}`,
    String.raw`\ce{CuSO4*5H2O}`,
    String.raw`\pu{1.83 g/mL}`,
  ]) {
    assert.doesNotThrow(() => renderMath(tex), `${tex} renders`);
    assert.doesNotThrow(() => renderMath(tex, { display: true }), `${tex} renders in display mode`);
  }
});

test('renderMath typesets a unit cancelled in a conversion factor', () => {
  const html = renderMath(String.raw`4.7\ \cancel{\text{g K}} \times \frac{1\ \text{mol K}}{39.10\ \cancel{\text{g K}}}`, { display: true });
  // The strike reaches assistive technology as an enclosure, not as nothing.
  assert.match(html, /<menclose notation="updiagonalstrike">/);
});

test('a formula keeps its subscript in the MathML a screen reader is given', () => {
  const html = renderMath(String.raw`\ce{H2O}`);
  assert.match(html, /<msub>[\s\S]*<mn>2<\/mn>[\s\S]*<\/msub>/);
});

test('renderMath still throws on TeX that is wrong', () => {
  assert.throws(() => renderMath(String.raw`\notacommand{2}`), /Undefined control sequence/);
  assert.throws(() => renderMath(String.raw`\frac{1}{`), /KaTeX parse error/);
});

test('no gate imports katex directly, so none can drop the chemistry extension', () => {
  // The two gates that render math, plus anything added later under tools/.
  for (const file of ['tools/lint/lint-all.mjs', 'tools/verify/verify-section.mjs']) {
    const src = readFileSync(join(root, file), 'utf8');
    assert.doesNotMatch(src, /from 'katex'/, `${file} imports the shared renderer, not katex`);
    assert.match(src, /from '\.\.\/lib\/katex\.mjs'/, `${file} renders through tools/lib/katex.mjs`);
  }
});
