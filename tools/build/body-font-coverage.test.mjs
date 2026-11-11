// Every character a page prints in prose is drawn by the site's own text
// faces — "AP Body" (Inter 4.1, cut by tools/build/gen-body-font.py) or, for
// superscripts and subscripts, "AP SupSub" — or is listed below as known to
// fall through. The generator's subset is a function of its BLOCKS, its
// EXTRAS and the pinned release only (so a re-run writes the same bytes); this test is what
// keeps the content inside it as chapters arrive. data/fonts/ap-body.json,
// written by the generator, says what the faces cover.
//
// Math (`$…$`, `$$…$$`) is set by KaTeX in its own fonts, and code and inline
// SVG are not prose, so all three are masked before the scan.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { maskCode, mathSpans, walkMarkdown } from '../lib/content.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const COVERAGE_PATH = join(ROOT, 'data', 'fonts', 'ap-body.json');

/**
 * Characters Inter 4.1 has no glyph for, known to appear in content/ prose.
 * Each is drawn by "AP Body Fallback" (the local Arial at 107.1%) when Arial
 * has it, and by a system font otherwise. Add one only after checking that
 * Inter lacks it (the generator prints the list); a character Inter HAS goes
 * into the generator's EXTRAS (or its small block into BLOCKS) instead.
 */
export const FALLS_THROUGH = new Map([
  ['\u21CC', 'equilibrium harpoons ⇌ in prose equations (A&P 2.3, 22.5, 25.6, …)'],
  ['\u21C4', 'reversible-reaction arrows ⇄ (A&P 2.3)'],
  ['\u2219', 'bullet operator ∙ in "liter∙atmosphere" (Chemistry Appendix C)'],
  ['\u221D', '"∝" as the source artwork prints it, quoted in figure descriptions (Biology 3.4, 9.1)'],
  ['\u2A2F', 'the source\'s "10⨯" magnification glyph, quoted (Microbiology 2.1, 2.3, 17.1)'],
  ['\u1D42', 'modifier capital W ᵂ in the allele Xᵂ (Biology 12.2)'],
  ['\u2640', 'female sign ♀ in figure descriptions (Biology 28.5, Microbiology 21.5)'],
  ['\u2642', 'male sign ♂ in figure descriptions (Biology 28.5, Microbiology 21.5)'],
  ['\u24D0', 'circled ⓐ part labels in math examples and exercises (Intermediate Algebra, Precalculus)'],
  ['\u24D1', 'circled ⓑ part labels, as ⓐ'],
  ['\u24D2', 'circled ⓒ part labels, as ⓐ'],
  ['\u24D3', 'circled ⓓ part labels, as ⓐ'],
  ['\u27E8', 'mathematical left angle bracket ⟨ of a vector in prose (Precalculus 8.8)'],
  ['\u27E9', 'mathematical right angle bracket ⟩ of a vector in prose (Precalculus 8.8)'],
]);

/** Code points a CSS unicode-range term list covers ("U+0020-007E", "U+00B9"). */
export function rangeSet(terms) {
  const set = new Set();
  for (const term of terms) {
    const m = /^U\+([0-9A-F]{4,6})(?:-([0-9A-F]{4,6}))?$/i.exec(term);
    if (!m) throw new Error(`not a unicode-range term: ${term}`);
    const low = parseInt(m[1], 16);
    const high = m[2] ? parseInt(m[2], 16) : low;
    for (let cp = low; cp <= high; cp += 1) set.add(cp);
  }
  return set;
}

export function loadCoverage(path = COVERAGE_PATH) {
  const data = JSON.parse(readFileSync(path, 'utf8'));
  return { data, covered: new Set([...rangeSet(data.body), ...rangeSet(data.supsub)]) };
}

// Whitespace, controls, format characters (joiners, the soft hyphen,
// variation selectors), surrogates, private use and unassigned code points
// are not drawn by a text face.
const NOT_DRAWN = /[\s\p{Cc}\p{Cf}\p{Cs}\p{Co}\p{Cn}]/u;

/** What a page prints in prose: code, inline SVG, math and HTML comments blanked, offsets kept. */
export function proseOf(source) {
  // Both maskers keep UTF-16 offsets, so the math runs blank in place.
  let text = maskCode(source, { svg: true });
  for (const span of mathSpans(source, { maskCode: true })) {
    text = text.slice(0, span.index) + text.slice(span.index, span.index + span.length).replace(/[^\n]/g, ' ') + text.slice(span.index + span.length);
  }
  return text.replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ' '));
}

/** Every character in `text` the faces do not cover and the allowlist does not name. */
export function uncovered(text, covered, allowed = FALLS_THROUGH) {
  const found = new Map();
  let line = 1;
  for (const ch of text) {
    if (ch === '\n') line += 1;
    if (NOT_DRAWN.test(ch) || covered.has(ch.codePointAt(0)) || allowed.has(ch)) continue;
    if (!found.has(ch)) found.set(ch, line);
  }
  return found;
}

const hex = (ch) => `U+${ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}`;

test('the coverage file names the font files the stylesheet loads', () => {
  const { data } = loadCoverage();
  const css = readFileSync(join(ROOT, 'assets', 'css', 'custom.css'), 'utf8');
  for (const name of Object.values(data.files)) {
    assert.ok(css.includes(`/fonts/${name}`), `assets/css/custom.css does not load /fonts/${name}, which data/fonts/ap-body.json names — regenerate or update the @font-face rules together`);
    assert.doesNotThrow(() => readFileSync(join(ROOT, 'static', 'fonts', name)), `static/fonts/${name} is missing`);
  }
});

test('every character content/ prints outside math and code is drawn by the site\'s faces or is a known fall-through', () => {
  const { covered } = loadCoverage();
  const problems = [];
  const seen = new Set();
  for (const file of walkMarkdown(join(ROOT, 'content'))) {
    const found = uncovered(proseOf(readFileSync(file, 'utf8')), covered);
    for (const [ch, line] of found) {
      if (seen.has(ch)) continue;
      seen.add(ch);
      problems.push(`${hex(ch)} ${ch} first at ${relative(ROOT, file)}:${line}`);
    }
  }
  assert.deepEqual(problems, [], 'characters no site face draws:\n  ' + problems.join('\n  ')
    + '\nIf Inter 4.1 has the character, add it to EXTRAS in tools/build/gen-body-font.py with a comment on '
    + 'where it is used (or its block to BLOCKS, if the block is small), regenerate, and rename the outputs '
    + '(v2, …: /fonts/* is cached) if the fonts have been deployed. If Inter lacks it, add it to '
    + 'FALLS_THROUGH in tools/build/body-font-coverage.test.mjs with a word on where it is used.');
});

test('the allowlist holds only characters the faces do not cover', () => {
  const { covered } = loadCoverage();
  const stale = [...FALLS_THROUGH.keys()].filter((ch) => covered.has(ch.codePointAt(0)));
  assert.deepEqual(stale.map(hex), [], 'these are drawn by AP Body now — remove them from FALLS_THROUGH');
});

test('the allowlist names only characters content/ still prints', () => {
  const { covered } = loadCoverage();
  const used = new Set();
  for (const file of walkMarkdown(join(ROOT, 'content'))) {
    for (const ch of uncovered(proseOf(readFileSync(file, 'utf8')), covered, new Map()).keys()) used.add(ch);
  }
  const unused = [...FALLS_THROUGH.keys()].filter((ch) => !used.has(ch));
  assert.deepEqual(unused.map(hex), [], 'no page prints these any more — remove them from FALLS_THROUGH');
});

test('the scan sees prose and skips math, code and comments', () => {
  const { covered } = loadCoverage();
  const page = 'Prose ⇋ here.\n$x ⇋ y$ and `⇋` and <!-- ⇋ -->\n```\n⇋\n```\nAnd ✓ Ʃ ə ⟵.';
  const found = uncovered(proseOf(page), covered);
  assert.deepEqual([...found.entries()], [['⇋', 1]]);
});
