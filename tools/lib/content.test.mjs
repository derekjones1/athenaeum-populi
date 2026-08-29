/**
 * Unit tests for the shared content primitives.
 *
 * These cover the exact divergences the module was built to end — each `test`
 * name below names one of the four answers the toolchain used to have to the
 * same question, plus the two lint rules the shared grammar made possible.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative, sep } from 'node:path';

import {
  hasUnpairedDollar,
  malformedShortcodeParams,
  mathSpans,
  parseFrontmatter,
  shortcodeParams,
  shortcodeParamSpans,
  shortcodes,
  walkFiles,
  walkMarkdown,
} from './content.mjs';
import { htmlAttribute, hasFileBackedCssImage, MAIN_CONTENT_RE } from './html.mjs';
import { lintHugo } from '../lint/lints.mjs';

/* ------------------------------------------------------------------ walking */

function scratchTree() {
  const root = mkdtempSync(join(tmpdir(), 'ap-lib-content-'));
  mkdirSync(join(root, 'b-chapter'));
  mkdirSync(join(root, 'a-chapter'));
  writeFileSync(join(root, 'b-chapter', '02-second.md'), '');
  writeFileSync(join(root, 'b-chapter', '01-first.md'), '');
  writeFileSync(join(root, 'b-chapter', '_index.md'), '');
  writeFileSync(join(root, 'a-chapter', 'notes.txt'), '');
  writeFileSync(join(root, 'a-chapter', '01-only.md'), '');
  return root;
}
const rel = (root, paths) => paths.map((p) => relative(root, p).split(sep).join('/'));

test('walkFiles is deterministic and sorted', () => {
  const root = scratchTree();
  try {
    // Sorted output is the point: an unsorted walk makes a failure list depend
    // on filesystem order, so the same defect reports differently per machine.
    assert.deepEqual(rel(root, walkFiles(root)), [
      'a-chapter/01-only.md',
      'a-chapter/notes.txt',
      'b-chapter/01-first.md',
      'b-chapter/02-second.md',
      'b-chapter/_index.md',
    ]);
    assert.deepEqual(rel(root, walkFiles(root)), rel(root, walkFiles(root)));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('walkMarkdown filters extensions and makes _index.md explicit', () => {
  const root = scratchTree();
  try {
    assert.deepEqual(rel(root, walkMarkdown(root)), [
      'a-chapter/01-only.md',
      'b-chapter/01-first.md',
      'b-chapter/02-second.md',
      'b-chapter/_index.md',
    ]);
    // The structure validator walks landings through its own directory
    // recursion and would double-report them, so it opts out by name.
    assert.deepEqual(rel(root, walkMarkdown(root, { includeIndex: false })), [
      'a-chapter/01-only.md',
      'b-chapter/01-first.md',
      'b-chapter/02-second.md',
    ]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

/* -------------------------------------------------------------- frontmatter */

test('parseFrontmatter reads the flat key: value corpus', () => {
  const { attributes, body } = parseFrontmatter('---\ntitle: Fractions\nweight: 3\n---\nBody text.\n');
  assert.deepEqual(attributes, { title: 'Fractions', weight: '3' });
  assert.equal(body, 'Body text.\n');
});

test('parseFrontmatter distinguishes an empty value from a missing key', () => {
  // The regex trio this replaced returned undefined for both, so an authored
  // `title: ""` was indistinguishable from no title at all.
  const { attributes } = parseFrontmatter('---\ntitle: ""\ndescription: Real text.\n---\n');
  assert.equal(attributes.title, '');
  assert.ok('title' in attributes, 'the key is present, and empty');
  assert.equal(attributes.missing, undefined);
});

test('parseFrontmatter keeps a value containing an apostrophe', () => {
  // The old value regex was ["']?([^"'\n]+)["']?$ — one apostrophe anywhere in
  // the value made the whole match fail, and the title silently read as absent.
  const { attributes } = parseFrontmatter("---\ntitle: Ohm's law\n---\n");
  assert.equal(attributes.title, "Ohm's law");
});

test('parseFrontmatter strips matched surrounding quotes only', () => {
  const { attributes } = parseFrontmatter('---\na: "1.1"\nb: \'2.2\'\nc: "unbalanced\n---\n');
  assert.equal(attributes.a, '1.1');
  assert.equal(attributes.b, '2.2');
  assert.equal(attributes.c, '"unbalanced');
});

test('parseFrontmatter returns the whole document when there is no frontmatter', () => {
  const { attributes, body } = parseFrontmatter('# Just a heading\n');
  assert.deepEqual(attributes, {});
  assert.equal(body, '# Just a heading\n');
});

/* --------------------------------------------------------------- shortcodes */

test('shortcodeParams implements one grammar', () => {
  assert.deepEqual(
    shortcodeParams(' question="Simplify: $-\\tfrac{40}{88}$." answer="-\\tfrac{5}{11}" '),
    { question: 'Simplify: $-\\tfrac{40}{88}$.', answer: '-\\tfrac{5}{11}' },
  );
  // Everything outside the grammar is dropped here and reported by the lint,
  // rather than being read by one tool and not another.
  assert.deepEqual(shortcodeParams(" hint='single quoted' "), {});
  assert.deepEqual(shortcodeParams(' data-mode="graph" '), { mode: 'graph' });
});

test('shortcodeParams reads a value through Hugo\'s \\" escape', () => {
  // All four copies of this regex used "([^"]*)" and stopped at the first
  // escaped quote, so the two authored hints that open with a quoted phrase
  // read as a single backslash — non-empty, so the missing-hint rule stayed
  // quiet, and the real hint text was checked by nothing.
  assert.deepEqual(
    shortcodeParams(' hint="\\"Subtract $A$ from $B$\\" means compute $B - A$." answer="1" '),
    { hint: '"Subtract $A$ from $B$" means compute $B - A$.', answer: '1' },
  );
  // Every other backslash is literal — which is the only reason LaTeX survives
  // a shortcode param at all.
  assert.deepEqual(
    shortcodeParams(' answer="$\\lvert x-2\\rvert\\le 3$" '),
    { answer: '$\\lvert x-2\\rvert\\le 3$' },
  );
});

test('shortcodes yields params, body, and offset', () => {
  const src = 'Intro.\n{{< multiplechoice question="Choose." answer="yes" >}}\nyes\nno\n{{< /multiplechoice >}}\nOutro.';
  const [found, ...rest] = [...shortcodes(src, 'multiplechoice')];
  assert.equal(rest.length, 0);
  assert.deepEqual(found.params, { question: 'Choose.', answer: 'yes' });
  assert.equal(found.inner.trim(), 'yes\nno');
  assert.equal(found.closed, true);
  assert.equal(src.slice(found.index, found.index + 19), '{{< multiplechoice ');
});

test('shortcodeParamSpans locates a value that unescaping made unfindable', () => {
  // `shortcodeParams` returns UNESCAPED values, so a caller cannot find one
  // again with indexOf once the source wrote `\"` — and a checker that skips
  // what it cannot locate exempts exactly those params without saying so.
  const open = ' question="\\"Convert\\" 126° to radians." answer="1" ';
  const spans = shortcodeParamSpans(open);
  assert.equal(open.indexOf(shortcodeParams(open).question), -1, 'precondition: indexOf cannot find the unescaped value');
  assert.equal(spans.question.raw, '\\"Convert\\" 126° to radians.');
  assert.equal(open.slice(spans.question.index, spans.question.index + spans.question.raw.length), spans.question.raw);
  // A plain param resolves the same way.
  assert.equal(spans.answer.raw, '1');
  assert.equal(open.slice(spans.answer.index, spans.answer.index + 1), '1');
});

test('a shortcode reports where its opening body starts', () => {
  const src = 'Intro.\n{{< fillin question="Q." answer="1" >}}\n';
  const [found] = [...shortcodes(src, 'fillin')];
  assert.equal(src.slice(found.openIndex, found.openIndex + found.open.length), found.open);
  // …so a param span resolves to a file offset by simple addition.
  const span = shortcodeParamSpans(found.open).answer;
  assert.equal(src.slice(found.openIndex + span.index, found.openIndex + span.index + 1), '1');
});

test('shortcodes reports an unclosed paired tag rather than an empty body', () => {
  const src = '{{< multiplechoice question="Choose." answer="yes" >}}\nyes\nno\n';
  const [found] = [...shortcodes(src, 'multiplechoice')];
  assert.equal(found.closed, false);
  // An unpaired shortcode is always "closed" — there is nothing to close.
  const [fill] = [...shortcodes('{{< fillin question="q" answer="1" >}}', 'fillin')];
  assert.equal(fill.closed, true);
});

test('malformedShortcodeParams finds exactly what the grammar drops', () => {
  assert.deepEqual(malformedShortcodeParams(' question="q" answer="1" '), []);
  assert.deepEqual(malformedShortcodeParams(" question=\"q\" hint='Think.' "), ["hint='Think.'"]);
  assert.deepEqual(malformedShortcodeParams(' question="q" snap=1 '), ['snap=1']);
  assert.deepEqual(malformedShortcodeParams(' question="q" answer-mode="unordered" '), ['answer-mode="unordered"']);
  // An `=` inside a quoted value belongs to the value, not to a new param.
  assert.deepEqual(malformedShortcodeParams(' question="Solve $y=mx+b$" answer="1" '), []);
});

/* --------------------------------------------------------------- math spans */

test('mathSpans finds inline and display runs in source order', () => {
  const spans = mathSpans('Start $a+b$ then $$c+d$$ end $e$.');
  assert.deepEqual(spans.map((s) => [s.tex, s.display]), [
    ['a+b', false], ['c+d', true], ['e', false],
  ]);
  for (const span of spans) {
    const raw = 'Start $a+b$ then $$c+d$$ end $e$.'.slice(span.index, span.index + span.length);
    assert.ok(raw.startsWith('$') && raw.endsWith('$'), `${raw} spans its own delimiters`);
  }
});

test('mathSpans shields an escaped dollar — the tools/lib/openstax-source.mjs defect', () => {
  // Scanned raw, the `\$5` opened a span and every later span in the string was
  // sliced at the wrong delimiter. Both spans here must survive intact.
  const src = 'He paid \\$5 for $x+1$ and \\$10 for $y+2$.';
  assert.deepEqual(mathSpans(src).map((s) => s.tex), ['x+1', 'y+2']);
  // A money amount alone opens nothing at all.
  assert.deepEqual(mathSpans('Tickets cost \\$5 each.'), []);
});

test('mathSpans can mask code and SVG, and preserves offsets when it does', () => {
  const src = 'Prose $a$.\n\n```\n$not math$\n```\n\n<svg><text>$also not$</text></svg>\n\nTail $b$.';
  assert.deepEqual(mathSpans(src, { maskCode: true }).map((s) => s.tex), ['a', 'b']);
  for (const span of mathSpans(src, { maskCode: true })) {
    assert.equal(src.slice(span.index + 1, span.index + span.length - 1), span.tex);
  }
});

test('mathSpans keeps an inline run on one line unless told otherwise', () => {
  // A document-level scan must not let a stray `$` swallow half a page…
  assert.deepEqual(mathSpans('Costs $5 per unit\nand $6 per box.').map((s) => s.tex), []);
  // …but a shortcode param is one logical line.
  assert.equal(mathSpans('a $x+\n1$ b', { allowNewlines: true }).length, 1);
});

test('hasUnpairedDollar catches unescaped money and ignores escaped', () => {
  assert.equal(hasUnpairedDollar('He paid $5 for it.'), true);
  assert.equal(hasUnpairedDollar('He paid \\$5 for it.'), false);
  assert.equal(hasUnpairedDollar('Simplify $x+1$ now.'), false);
});

/* -------------------------------------------------------------------- html */

test('htmlAttribute does not confuse role with data-role', () => {
  assert.equal(htmlAttribute('<svg role="img" aria-label="A plot">', 'role'), 'img');
  assert.equal(htmlAttribute('<svg data-role="img">', 'role'), '');
  assert.equal(htmlAttribute("<svg role='img'>", 'role'), 'img');
  assert.equal(htmlAttribute('<svg role=img>', 'role'), 'img');
  assert.equal(htmlAttribute('<svg>', 'role'), '');
});

test('hasFileBackedCssImage allows only in-document paint references', () => {
  assert.equal(hasFileBackedCssImage('background: url(/images/plot.png)'), true);
  assert.equal(hasFileBackedCssImage("background: image-set('/images/plot.png' 1x)"), true);
  assert.equal(hasFileBackedCssImage('fill: url(#gradient)'), false);
  assert.equal(hasFileBackedCssImage('color: #111'), false);
});

test('MAIN_CONTENT_RE matches the element Pagefind indexes, minified or not', () => {
  assert.ok(MAIN_CONTENT_RE.test('<main id="content" class="x">'));
  assert.ok(MAIN_CONTENT_RE.test('<main class="x" id=content>'));
  assert.ok(!MAIN_CONTENT_RE.test('<main id="main">'));
});

/* --------------------------------------- the lint rules the grammar enables */

const SECTION = 'content/math/book/01-chapter/01-section.md';
const errorsMatching = (src, needle) => lintHugo(src, SECTION).errors.filter((e) => e.includes(needle));

test('an unclosed paired shortcode is named as itself', () => {
  // It used to fall through to the body rules, which reported "at least two
  // non-empty options are required" — the wrong problem, on the wrong line.
  const unclosed = '{{< multiplechoice question="Choose." answer="yes" hint="Think." >}}\nyes\nno\n';
  assert.equal(errorsMatching(unclosed, 'is never closed').length, 1);
  assert.equal(errorsMatching(unclosed, 'at least two non-empty options').length, 0);

  const graph = '{{< graphplot question="Graph." ariaLabel="A grid." hint="Plot." >}}\n{"answer":{"slope":1}}\n';
  assert.equal(errorsMatching(graph, 'is never closed').length, 1);

  const callout = '{{< callout type="info" >}}\n**Objectives**\n';
  assert.equal(errorsMatching(callout, 'is never closed').length, 1);

  // The closed forms stay silent, and an unpaired shortcode is never reported.
  assert.equal(errorsMatching('{{< multiplechoice question="Choose." answer="yes" hint="Think." >}}\nyes\nno\n{{< /multiplechoice >}}', 'is never closed').length, 0);
  assert.equal(errorsMatching('{{< fillin question="Simplify $x+x$." answer="2x" hint="Add." >}}', 'is never closed').length, 0);
  // A fenced example is documentation, not an unclosed shortcode.
  assert.equal(errorsMatching('```\n{{</* multiplechoice question="Choose." */>}}\n```', 'is never closed').length, 0);
});

test('a param the canonical grammar drops is an error, not a silent loss', () => {
  const single = `{{< fillin question="Simplify $x+x$." answer="2x" hint='Add them.' >}}`;
  assert.equal(errorsMatching(single, 'is not `name="value"`').length, 1);
  assert.equal(errorsMatching(' {{< fillin question="Simplify $x+x$." answer="2x" hint="Add." >}}', 'is not `name="value"`').length, 0);

  const unquoted = '{{< graphplot question="Graph." ariaLabel="A grid." hint="Plot." snap=1 >}}\n{"answer":{"slope":1}}\n{{< /graphplot >}}';
  assert.equal(errorsMatching(unquoted, 'is not `name="value"`').length, 1);

  const hyphenated = '{{< fillin question="Simplify $x+x$." answer="2x" hint="Add." answer-mode="unordered" >}}';
  assert.equal(errorsMatching(hyphenated, 'is not `name="value"`').length, 1);
});

test('a code-fenced callout example does not lint as authored content', () => {
  // The callout rule used to scan the RAW source with its own regex, so a
  // documented example was authored content to it and to nothing else.
  const fenced = '```\n{{</* callout type="info" */>}}\n**Heading.**\n{{</* /callout */>}}\n```';
  assert.equal(lintHugo(fenced, SECTION).errors.length, 0);
  // The same shape outside a fence is still the defect it always was.
  assert.equal(
    errorsMatching('{{< callout type="info" >}}\n**Heading.**\n{{< /callout >}}', 'no explanatory content').length,
    1,
  );
});
