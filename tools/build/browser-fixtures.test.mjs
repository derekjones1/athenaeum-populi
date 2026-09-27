/**
 * Browser-test fixture gate.
 *
 * The Playwright specs pick their exercises out of real content by authored
 * attributes — `fill-in[data-answer="…"]`, `graph-plot[data-config*='…']`,
 * `.ap-mc-option[data-value="5"]` — on purpose: a positional locator silently
 * retargets when a section is reordered. The cost is that a content edit can
 * pull a fixture out from under a spec, and the browser suite runs only in
 * `npm run ci`, after the build, ~17 minutes in. The Prealgebra re-review
 * rewrote 9.7's key from `r=d/t` to `r=\frac{d}{t}`; `npm test` passed and
 * four browser tests failed on the deploy run with "resolved to 0 elements".
 *
 * This reads every spec, resolves each attribute locator against the page's
 * markdown (the attributes are the shortcode params verbatim — see
 * layouts/shortcodes/), and fails in seconds when a fixture is gone. It also
 * replays each text-in answer a spec types through `checkText`, the
 * component's own grader, so dropping an `accept` alternate a spec relies on
 * fails here too. Fill-in answers are typed as keystrokes that MathLive turns
 * into TeX, which Node cannot reproduce, so for those only the card is checked.
 *
 * Nothing is exempted silently: a locator the gate cannot resolve (a page
 * reached through a variable, an element or attribute it has no mapping for,
 * an escaped value) is itself a failure naming what to change.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { checkText } from '../../assets/js/lib/text/check-text.mjs';
import { shortcodes } from '../lib/content.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const TESTS_DIR = `${root}tests/`;

const ELEMENTS = 'fill-in|text-in|multiple-choice|graph-plot|self-check';
const ELEMENT_RE = new RegExp(
  String.raw`\b(${ELEMENTS})((?:\[data-[\w-]+(?:[*^$]?=(?:"[^"]*"|'[^']*'))?\])+)`, 'g',
);
/**
 * Attributes a component sets on itself at runtime. A locator keyed only on
 * these waits for a state, not an authored exercise, so there is nothing in
 * content to check.
 */
const RUNTIME_ATTRS = new Set([
  'data-speech', // assets/js/components/shared/multiple-choice.js
]);
const ATTR_RE = /\[(data-[\w-]+)(?:([*^$]?=)(?:"([^"]*)"|'([^']*)'))?\]/g;

/** Blank comments in place so offsets (and line numbers) survive. */
function stripComments(src) {
  const blank = (s) => s.replace(/[^\n]/g, ' ');
  return src
    .replace(/\/\*[\s\S]*?\*\//g, blank)
    .replace(/^[ \t]*\/\/.*$/gm, blank);
}

const lineOf = (src, index) => src.slice(0, index).split('\n').length;

/** `'a' + 'b'` → `ab`; anything that is not pure string literals → null. */
function literalPath(expr) {
  // A multi-line call ends `'/…/',` before its closing paren.
  const trimmed = expr.trim().replace(/,$/, '').trim();
  if (!/^(?:(['"`])(?:(?!\1)[^\\])*\1\s*\+?\s*)+$/.test(trimmed)) return null;
  return [...trimmed.matchAll(/(['"`])((?:(?!\1).)*)\1/g)].map((m) => m[2]).join('');
}

/**
 * Every content-keyed fixture in one spec: `{ test, line, path, element,
 * attrs, atLeastOne, options, fills }`, or `{ …, problem }` when the gate
 * cannot resolve it.
 */
export function specFixtures(source) {
  const src = stripComments(source);
  const starts = [...src.matchAll(/^test(?:\.\w+)?\(\s*(['"`])((?:(?!\1).)*)\1/gm)];
  const fixtures = [];
  starts.forEach((start, i) => {
    const from = start.index;
    const to = i + 1 < starts.length ? starts[i + 1].index : src.length;
    const chunk = src.slice(from, to);
    const events = [];
    for (const m of chunk.matchAll(/gotoBuiltPage\(\s*page\s*,([^)]*)\)|const path\s*=([^;]*);/g)) {
      events.push({ at: m.index, kind: 'path', path: literalPath(m[1] ?? m[2]) });
    }
    for (const m of chunk.matchAll(ELEMENT_RE)) {
      const statement = chunk.slice(m.index, chunk.indexOf(';', m.index));
      const attrs = [...m[2].matchAll(ATTR_RE)].map((a) => ({
        name: a[1], op: a[2] ?? null, value: a[3] ?? a[4] ?? null,
      }));
      events.push({
        at: m.index,
        kind: 'element',
        element: m[1],
        selector: m[0],
        attrs,
        atLeastOne: /\.(?:first|last|nth|filter)\(/.test(statement),
      });
    }
    for (const m of chunk.matchAll(/\.ap-mc-option\[data-value="([^"]*)"\]|\.ap-mc-option['"]\s*,\s*\{\s*hasText:\s*\/\^(.*?)\$\/\s*\}/g)) {
      events.push({ at: m.index, kind: 'option', value: m[1] ?? m[2] });
    }
    for (const m of chunk.matchAll(/\.fill\((['"])((?:(?!\1).)+)\1\)/g)) {
      events.push({ at: m.index, kind: 'fill', value: m[2] });
    }
    for (const m of chunk.matchAll(/\.toBe\('(correct|incorrect|empty)'\)/g)) {
      events.push({ at: m.index, kind: 'verdict', value: m[1] });
    }
    events.sort((a, b) => a.at - b.at);

    let path;
    let current = null;
    let pendingFill = null;
    for (const event of events) {
      if (event.kind === 'path') {
        path = event.path;
      } else if (event.kind === 'element') {
        current = {
          test: start[2],
          line: lineOf(src, from + event.at),
          path,
          element: event.element,
          selector: event.selector,
          attrs: event.attrs,
          atLeastOne: event.atLeastOne,
          options: [],
          fills: [],
        };
        if (path === undefined || path === null) {
          current.problem = 'the page is not a string literal the gate can read — '
            + 'navigate with a literal path (gotoBuiltPage(page, \'/…/\') or const path = \'/…/\')';
        } else if (event.attrs.some((a) => a.value?.includes('\\'))) {
          current.problem = 'the selector value contains a backslash, which the gate '
            + '(and CSS attribute matching) cannot compare to authored TeX — select by another attribute';
        }
        fixtures.push(current);
        pendingFill = null;
      } else if (event.kind === 'option' && current) {
        current.options.push(event.value);
      } else if (event.kind === 'fill' && current?.element === 'text-in') {
        pendingFill = { typed: event.value };
        current.fills.push(pendingFill);
      } else if (event.kind === 'verdict' && pendingFill && !pendingFill.expect) {
        pendingFill.expect = event.value;
      }
    }
  });
  return fixtures;
}

/** The DOM attributes each shortcode renders, from its params (layouts/shortcodes/). */
function renderedElements(markdown) {
  const out = [];
  for (const { params: p } of shortcodes(markdown, 'fillin')) {
    out.push({
      element: 'fill-in',
      params: p,
      attrs: {
        'data-answer': p.answer,
        'data-answer-mode': p.answerMode ?? 'expression',
        ...(p.answerForm ? { 'data-answer-form': p.answerForm } : {}),
        'data-placeholder': p.placeholder ?? 'Your answer',
        'data-question': p.question,
      },
    });
  }
  for (const { params: p } of shortcodes(markdown, 'textin')) {
    out.push({
      element: 'text-in',
      params: p,
      attrs: {
        'data-answer': p.answer,
        ...(p.accept ? { 'data-accept': p.accept } : {}),
        'data-question': p.question,
      },
    });
  }
  for (const { params: p, inner } of shortcodes(markdown, 'multiplechoice')) {
    const mode = p.mode ?? 'text';
    out.push({
      element: 'multiple-choice',
      params: p,
      attrs: {
        'data-mode': mode,
        'data-question': p.question,
        ...(mode === 'graph' ? { 'data-answer-index': p.answerIndex } : { 'data-answer': p.answer }),
      },
      // Go's trim(.Inner, "\n"), split on newlines, trim spaces, drop empties.
      options: mode === 'graph' ? [] : inner.replace(/^\n+|\n+$/g, '').split('\n')
        .map((line) => line.replace(/^ +| +$/g, '')).filter(Boolean),
    });
  }
  for (const { params: p, inner } of shortcodes(markdown, 'graphplot')) {
    out.push({
      element: 'graph-plot',
      params: p,
      attrs: {
        'data-config': inner.replace(/^\n+|\n+$/g, ''),
        'data-aria-label': p.ariaLabel ?? '',
        'data-snap': p.snap ?? '1',
      },
    });
  }
  for (const { params: p } of shortcodes(markdown, 'selfcheck')) {
    out.push({ element: 'self-check', params: p, attrs: { 'data-question': p.question } });
  }
  return out;
}

function pageFile(path) {
  const base = `${root}content${path.replace(/\/$/, '')}`;
  return [`${base}.md`, `${base}/_index.md`, `${base}/index.md`].find((f) => existsSync(f)) ?? null;
}

const OPS = {
  null: (actual) => actual !== undefined,
  '=': (actual, want) => actual === want,
  '*=': (actual, want) => actual?.includes(want) ?? false,
  '^=': (actual, want) => actual?.startsWith(want) ?? false,
  '$=': (actual, want) => actual?.endsWith(want) ?? false,
};

/** Problems with one fixture against current content; empty when it holds. */
export function fixtureProblems(fixture, readPage = (file) => readFileSync(file, 'utf8')) {
  if (fixture.problem) return [fixture.problem];
  if (fixture.attrs.every((attr) => RUNTIME_ATTRS.has(attr.name))) return [];
  const file = pageFile(fixture.path);
  if (!file) return [`no content file renders ${fixture.path}`];
  const candidates = renderedElements(readPage(file)).filter((el) => el.element === fixture.element);
  for (const attr of fixture.attrs) {
    if (candidates.length && !candidates.some((el) => attr.name in el.attrs || attr.op === null)) {
      return [`the gate does not know how <${fixture.element}> renders ${attr.name} — add it to renderedElements()`];
    }
  }
  const matches = candidates.filter((el) => fixture.attrs.every(
    (attr) => OPS[attr.op](el.attrs[attr.name], attr.value),
  ));
  const problems = [];
  if (matches.length === 0) {
    return [`no ${fixture.element} on ${fixture.path} matches ${fixture.selector} — `
      + 'content changed under the spec; re-point the locator at the exercise as it now reads'];
  }
  if (matches.length > 1 && !fixture.atLeastOne) {
    problems.push(`${matches.length} ${fixture.element}s on ${fixture.path} match ${fixture.selector}; `
      + 'the spec expects exactly one');
  }
  const [card] = matches;
  for (const option of fixture.options) {
    if (!card.options?.includes(option)) {
      problems.push(`the matched ${fixture.element} has no option "${option}" `
        + `(options: ${JSON.stringify(card.options ?? [])})`);
    }
  }
  for (const { typed, expect } of fixture.fills) {
    if (!expect) continue;
    const verdict = checkText(typed, card.params.answer, { accept: card.params.accept ?? '' });
    if (verdict !== expect) {
      problems.push(`typing "${typed}" now grades ${verdict}, but the spec expects ${expect} `
        + `(answer "${card.params.answer}", accept "${card.params.accept ?? ''}")`);
    }
  }
  return problems;
}

const specs = readdirSync(TESTS_DIR).filter((f) => f.endsWith('.spec.mjs')).sort();

test('every content-keyed locator in the browser specs still finds its exercise', () => {
  const failures = [];
  let resolved = 0;
  for (const spec of specs) {
    const source = readFileSync(`${TESTS_DIR}${spec}`, 'utf8');
    const fixtures = specFixtures(source);
    // The parser must see every attribute locator the spec writes, or a
    // regex miss would make this gate pass vacuously.
    const written = [...stripComments(source).matchAll(ELEMENT_RE)].length;
    assert.equal(fixtures.length, written, `${spec}: parsed ${fixtures.length} of ${written} attribute locators`);
    for (const fixture of fixtures) {
      resolved += 1;
      for (const problem of fixtureProblems(fixture)) {
        failures.push(`tests/${spec}:${fixture.line} (${fixture.test})\n    ${problem}`);
      }
    }
  }
  assert.ok(resolved > 0, 'found no content-keyed locators in tests/*.spec.mjs');
  assert.deepEqual(failures, [], `\n${failures.join('\n')}`);
});

test('the gate catches the fixture drift that broke the Sep 27 2026 deploy', () => {
  const stale = `
test('a fraction typed with "/" grades correct', async ({ page }) => {
  await gotoBuiltPage(page, '/math/prealgebra/09-math-models-and-geometry/07-solve-a-formula-for-a-specific-variable/');
  const card = page.locator('fill-in[data-answer="r=d/t"]');
});
test('homeostasis', async ({ page }) => {
  await gotoBuiltPage(page, '/life-health-sciences/biology/01-the-study-of-life/02-themes-and-concepts-of-biology/');
  const card = page.locator('text-in[data-answer="homeostasis"]');
  await field.fill('homeostatis');
  await expect.poll(async () => card.evaluate((el) => el.status)).toBe('correct');
});
test('dynamic', async ({ page }) => {
  await gotoBuiltPage(page, route);
  const card = page.locator('fill-in[data-answer="1"]');
});`;
  const [removedKey, typo, dynamic] = specFixtures(stale).map((f) => fixtureProblems(f));
  assert.match(removedKey.join(), /no fill-in on .* matches fill-in\[data-answer="r=d\/t"\]/);
  assert.match(typo.join(), /typing "homeostatis" now grades incorrect, but the spec expects correct/);
  assert.match(dynamic.join(), /not a string literal/);
});
