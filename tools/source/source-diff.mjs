/**
 * Diff a section page's prose against its pinned OpenStax CNXML module.
 *
 *   node tools/source/source-diff.mjs [--quiet] content/<subject>/<book>/<ch>/<sec>.md [...]
 *
 * Every independent checker of a page currently writes an ad hoc script to
 * catch what an author-vs-source comparison should never miss: an added
 * claim, a silently corrected word, a definition pulled into the body from
 * nowhere the module says it, a phrase duplicated from somewhere else in the
 * book. This makes that comparison a repo tool instead of a one-off script a
 * checker throws away.
 *
 * For each page, the module is resolved through data/openstax/source-map.json
 * (`sections[].localPath` -> `bundle`, `moduleId`), the bundle's checkout
 * directory through `loadSourceLock` + `bundleSourceDirectory`
 * (tools/lib/openstax-source.mjs — the same resolution verify-source-keys'
 * `checkCorpus` does), and the module file at
 * `<checkoutDir>/modules/<moduleId>/index.cnxml`. `/sources/` is gitignored
 * (docs/architecture.md), so a page whose bundle has no local checkout is
 * skipped loudly (`⊘ …`) rather than silently or fatally — this tool always
 * exits 0; it is a report, not a gate.
 *
 * PAGE prose: frontmatter, the `## Practice` block onward, the `## Key terms`
 * block, the `<small>` footer, all shortcode tag DELIMITERS (a selfcheck's
 * whole inner model answer is lifted out too — it is author-written, not
 * transcribed, and gets its own check below), Markdown table rows, link
 * markup (link text kept), emphasis markers, and inline/display `$…$` math
 * are all stripped before the remaining text is split into sentences. Every
 * structural boundary — a shortcode tag, a heading, a list item, a table
 * row, a blank line — is a sentence boundary, so a callout heading, a
 * caption, and the paragraph after them never fuse into one "sentence" that
 * then has no coverage (the first cut of this tool reported the objectives
 * callout plus the following paragraph as one ADDED sentence on a third of
 * the Biology pages).
 *
 * MODULE prose: every XML tag under `<content>` is stripped after dropping
 * `<section class="…">` end-matter (multiple-choice, fill-in-the-blank,
 * true-false, matching, short-answer, critical-thinking) and `<solution>`
 * wholesale; everything else — notes, captions, glossary text — stays,
 * every `alt` attribute value is appended as its own sentence, and so are
 * the `<md:abstract>` list items (a Biology 2e module's objectives live
 * there, outside `<content>`; Microbiology's are a content section).
 *
 * Three findings, per page:
 *   ADDED        a page sentence of >= 6 words with no module coverage
 *                (phraseCoverage against the WHOLE module text, not
 *                per-sentence, for speed) — some are legitimate
 *                cross-reference rewrites; a checker reads every one.
 *   NEAR-MISS    a page word (letters only, >= 5 chars) absent from the
 *                module but within Damerau-Levenshtein distance 1 (2 for
 *                words of >= 8 letters — at five letters "below"~"yellow"
 *                is not a misspelling) of a module word (>= 5 chars) that
 *                does not appear on the page — a silently "corrected" or
 *                miscopied spelling. An inflection of a module word
 *                (describe/describes, began/begins, occur/occurs) and the
 *                page's own cross-reference vocabulary (above, below,
 *                shown, panel, …) are not near misses. Suppressed when
 *                either spelling appears in the page footer's `Changes:`
 *                clause: that means the correction is disclosed.
 *   MODEL-ANSWER a sentence of >= 6 words inside a selfcheck's model answer
 *                with phraseCoverage < 0.7 against the WHOLE module, end
 *                matter and <solution>s included (a Biology 2e self-check's
 *                answer is the source's own solution; a Microbiology one is
 *                author-written against an unkeyed question): a claim the
 *                author may have written from general knowledge rather than
 *                the module. The bar is lower than ADDED's because a model
 *                answer paraphrases by design; a checker reads each one
 *                against the module and either finds the sentence it
 *                restates or has the author rewrite it from one.
 */
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import {
  parseXml, elementChildren, localName, decodeXmlEntities, normalizeWhitespace,
  phraseCoverage, loadSourceLock, bundleSourceDirectory,
} from '../lib/openstax-source.mjs';
import { parseFrontmatter, mathSpans } from '../lib/content.mjs';
import { parseCliArgs } from '../lib/cli.mjs';

const usage = (detail) => {
  if (detail) console.error(`source-diff: ${detail}`);
  console.error('usage: node tools/source/source-diff.mjs [--quiet] <file.md> [...]');
  process.exit(2);
};

/** A model answer paraphrases by design; below this phrase coverage its
 * sentence is reported for a checker to trace to the module by hand. */
export const MODEL_ANSWER_COVERAGE = 0.7;

const EXCLUDED_END_MATTER_CLASSES = new Set([
  'multiple-choice', 'fill-in-the-blank', 'true-false', 'matching',
  'short-answer', 'critical-thinking',
]);

/** Split already-cleaned prose into naive sentences: good enough for a report
 * a human reads, not a linguistic parser. */
/** Inserted by `extractPageProse` wherever the Markdown had a structural
 * boundary; `splitSentences` splits on it first and it never reaches the
 * returned text. A character no page prose uses. */
const BOUNDARY = ' \u241E ';
const BOUNDARY_RE = /\u241E/g;

function splitSentences(text) {
  return text.split(BOUNDARY_RE).flatMap((block) => {
    const cleaned = block.replace(/\s+/g, ' ').trim();
    if (!cleaned) return [];
    return (cleaned.match(/[^.!?]+[.!?]+(?=\s|$)|[^.!?]+$/g) || [])
      .map((s) => s.trim())
      .filter(Boolean);
  });
}

/** Remove every `$…$` / `$$…$$` span (delimiters and content), replacing each
 * with a single space, without disturbing offsets of spans not yet removed. */
function stripMath(source) {
  const spans = mathSpans(source, { maskCode: true, allowNewlines: true });
  let out = source;
  for (const { index, length } of [...spans].sort((a, b) => b.index - a.index)) {
    out = out.slice(0, index) + ' ' + out.slice(index + length);
  }
  return out;
}

/**
 * PAGE prose extractor. Returns `{ sentences, text }`: `text` is the cleaned,
 * whitespace-normalized prose (used for word extraction); `sentences` is it
 * split into naive sentences (used for the ADDED check).
 */
const SELFCHECK_RE = /\{\{<\s*selfcheck\b[^]*?>\}\}([^]*?)\{\{<\s*\/selfcheck\s*>\}\}/g;

/** Clean one run of Markdown into prose: markup gone, structural boundaries
 * marked. Shared by the page extractor and the model-answer extractor. */
function cleanMarkdown(source) {
  let text = source;
  // Every shortcode tag is a boundary; the inner content (a callout's prose,
  // a mediafigure's caption) IS page prose, only the `{{< … >}}` syntax goes.
  text = text.replace(/\{\{<[\s\S]*?>\}\}/g, BOUNDARY);
  text = stripMath(text);
  // Markdown tables — header, separator, and data rows.
  text = text.replace(/^[ \t]*\|.*\|[ \t]*$/gm, BOUNDARY);
  // Link markup: keep the link text, drop the target. Handles images too
  // (the leading `!` is simply left as one stray character, harmless).
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  // Emphasis / code markers.
  text = text.replace(/(\*\*\*|\*\*|\*|`)/g, '');
  // A heading, a list item, a blockquote line, a horizontal rule, and a
  // blank line each start a new block; the heading's own text stays.
  text = text.replace(/^#{1,6}[ \t]*(.*)$/gm, `${BOUNDARY}$1${BOUNDARY}`);
  text = text.replace(/^[ \t]*(?:[-*+]|\d+[.)])[ \t]+/gm, BOUNDARY);
  text = text.replace(/^[ \t]*>[ \t]?/gm, BOUNDARY);
  text = text.replace(/^[ \t]*(?:-{3,}|\*{3,}|_{3,})[ \t]*$/gm, BOUNDARY);
  text = text.replace(/\n[ \t]*\n/g, BOUNDARY);
  text = decodeXmlEntities(text);
  return normalizeWhitespace(text);
}

export function extractPageProse(markdown) {
  const { body } = parseFrontmatter(markdown);
  let text = body;

  // Practice runs to the end of the file.
  text = text.replace(/\n##[ \t]+Practice\b[\s\S]*$/, '\n');
  // Key terms is its own block, bounded by the next heading (or end).
  text = text.replace(/\n##[ \t]+Key terms\b[\s\S]*?(?=\n##[ \t]|$)/, '\n');
  // The attribution footer.
  text = text.replace(/<small>[\s\S]*?<\/small>/gi, BOUNDARY);
  // A selfcheck's inner model answer is author-written, not transcribed —
  // it is checked on its own by `extractModelAnswers`; drop the whole paired
  // block here so its inner Markdown never counts as page prose.
  text = text.replace(SELFCHECK_RE, BOUNDARY);

  const marked = cleanMarkdown(text);
  return {
    text: normalizeWhitespace(marked.replace(BOUNDARY_RE, ' ')),
    sentences: splitSentences(marked),
  };
}

/**
 * Every selfcheck's model answer on the page — the inner content above its
 * `===CHECKS===` line (the rubric clauses below it are phrases the grader
 * looks for, not claims) — cleaned like page prose and split into sentences.
 * Returns `[{ question, sentences }]` in page order.
 */
export function extractModelAnswers(markdown) {
  const { body } = parseFrontmatter(markdown);
  const answers = [];
  for (const match of body.matchAll(SELFCHECK_RE)) {
    const question = (match[0].match(/question="([^"]*)"/) || [])[1] || '';
    const inner = match[1].split(/^[ \t]*===CHECKS===[ \t]*$/m)[0];
    answers.push({ question, sentences: splitSentences(cleanMarkdown(inner)) });
  }
  return answers;
}

/**
 * MODULE prose extractor. Walks `<content>`, dropping excluded end-matter
 * `<section>`s and `<solution>` wholesale, keeping every other text node and
 * appending every `alt` attribute value as its own sentence. Returns
 * `{ text }`: the module's whole prose, decoded and whitespace-normalized —
 * ADDED is checked against this as one string, not per module sentence.
 */
export function extractModuleProse(cnxml, { includeSolutions = false } = {}) {
  const document = parseXml(cnxml);
  const doc = elementChildren(document, 'document')[0];
  const content = doc && elementChildren(doc, 'content')[0];
  const metadata = doc && elementChildren(doc, 'metadata')[0];
  const abstract = metadata && elementChildren(metadata, 'abstract')[0];
  const parts = [];
  const alts = [];
  // A Biology 2e module's objectives are the abstract's list items, outside
  // <content>; the page prints them in its objectives callout.
  const collectText = (node) => {
    if (typeof node === 'string') { parts.push(node); return; }
    for (const child of node.children || []) collectText(child);
  };
  if (abstract) { collectText(abstract); parts.push('. '); }
  const walk = (node) => {
    if (typeof node === 'string') { parts.push(node); return; }
    const name = localName(node);
    // With `includeSolutions` the end matter and its answers stay: that is
    // the text a page's model answers are traced against, since a Biology 2e
    // self-check's answer IS the source's solution to that exercise.
    if (!includeSolutions) {
      if (name === 'section' && EXCLUDED_END_MATTER_CLASSES.has((node.attributes?.class || '').toLowerCase())) {
        return;
      }
      if (name === 'solution') return;
    }
    if (node.attributes?.alt) alts.push(node.attributes.alt);
    for (const child of node.children || []) walk(child);
  };
  if (content) walk(content);
  const raw = decodeXmlEntities(`${parts.join(' ')} ${alts.join('. ')}`);
  return { text: normalizeWhitespace(raw) };
}

const WORD_RE = /[a-z]+/g;
const wordsOf = (text) => (String(text || '').toLowerCase().match(WORD_RE) || []);

/** Restricted (optimal-string-alignment) Damerau-Levenshtein distance, with
 * an early bailout — the caller only ever cares whether the result is <= 2. */
function editDistance(a, b, max = 2) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const al = a.length;
  const bl = b.length;
  const d = [];
  for (let i = 0; i <= al; i += 1) d.push(new Array(bl + 1).fill(0));
  for (let i = 0; i <= al; i += 1) d[i][0] = i;
  for (let j = 0; j <= bl; j += 1) d[0][j] = j;
  for (let i = 1; i <= al; i += 1) {
    for (let j = 1; j <= bl; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let best = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        best = Math.min(best, d[i - 2][j - 2] + cost);
      }
      d[i][j] = best;
    }
  }
  return d[al][bl];
}

/**
 * Page words (letters only, >= 5 chars) that occur nowhere in `moduleText`
 * but land within edit distance <= 2 of a module word (>= 5 chars) that does
 * NOT occur in `pageText` — a silently corrected or miscopied spelling.
 * Suppressed when either spelling appears in `disclosedText` (the page
 * footer's `Changes:` clause).
 *
 * Returns `[{ page, source }]`, sorted for a stable report.
 */
/** The page's own conventional vocabulary: words a section page uses for
 * cross-references and callout labels that the module never needs and that
 * sit one or two edits from ordinary module words (below~yellow, above~about,
 * panel~plane). Never a near miss. */
const PAGE_VOCABULARY = new Set([
  'above', 'below', 'shown', 'pictured', 'panel', 'panels', 'chart', 'diagram',
  'illustration', 'figure', 'table', 'earlier', 'later', 'career', 'learning',
]);

/** Crude inflection stem: strip one common English suffix. Two words with the
 * same stem are one word inflected twice (describe/describes/described,
 * began/begins are NOT, but occur/occurs, summarize/summarizes, shape/shaped
 * are), not a miscopied spelling. */
function stem(word) {
  return word.replace(/(?:ies|ied|ing|ers|es|ed|er|ly|s)$/, '')
    .replace(/(?:e)$/, '');
}

export function findNearMissWords(pageText, moduleText, disclosedText = '') {
  const pageWords = wordsOf(pageText);
  const moduleWords = wordsOf(moduleText);
  const moduleWordSet = new Set(moduleWords);
  const pageWordSet = new Set(pageWords);
  const disclosed = new Set(wordsOf(disclosedText));
  const moduleStems = new Set([...moduleWordSet].map(stem));

  const byLength = new Map();
  for (const w of new Set(moduleWords)) {
    if (w.length < 5 || pageWordSet.has(w) || disclosed.has(w)) continue;
    if (!byLength.has(w.length)) byLength.set(w.length, []);
    byLength.get(w.length).push(w);
  }

  const results = [];
  for (const pw of new Set(pageWords)) {
    if (pw.length < 5 || moduleWordSet.has(pw) || disclosed.has(pw)) continue;
    if (PAGE_VOCABULARY.has(pw) || moduleStems.has(stem(pw))) continue;
    // Two edits is a misspelling only in a word long enough to carry them.
    const maxDistance = pw.length >= 8 ? 2 : 1;
    let best = null;
    for (let len = pw.length - maxDistance; len <= pw.length + maxDistance; len += 1) {
      for (const sw of byLength.get(len) || []) {
        if (stem(sw) === stem(pw)) continue;
        const dist = editDistance(pw, sw, maxDistance);
        if (dist <= maxDistance && (!best || dist < best.dist)) {
          best = { word: sw, dist };
          if (dist === 1) break;
        }
      }
      if (best?.dist === 1) break;
    }
    if (best) results.push({ page: pw, source: best.word });
  }
  return results.sort((a, b) => a.page.localeCompare(b.page));
}

/** The page footer's `Changes:` clause, lowercased text only — the words in
 * it are treated as disclosed corrections. Empty when the footer has none. */
function disclosedChangesText(markdown) {
  const footer = markdown.match(/<small>[\s\S]*?<\/small>/i);
  if (!footer) return '';
  const changes = footer[0].match(/Changes:([\s\S]*)$/i);
  return changes ? decodeXmlEntities(changes[1]) : '';
}

function main() {
  let cli;
  try {
    cli = parseCliArgs(process.argv.slice(2), { boolFlags: ['quiet'], positional: { name: 'file' } });
  } catch (error) { usage(error.message); }
  const files = cli.positional;
  const quiet = cli.bool('quiet');
  if (!files.length) usage();

  const repositoryRoot = process.cwd();
  const map = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-map.json'), 'utf8'));
  const lock = loadSourceLock(repositoryRoot);

  for (const file of files) {
    const localPath = path.relative(repositoryRoot, path.resolve(file)).split(path.sep).join('/');
    const section = map.sections.find((s) => s.localPath === localPath);
    const lines = [];
    let findings = false;

    if (!section) {
      lines.push(`  ⊘ skipped — ${localPath} is not mapped in data/openstax/source-map.json`);
      findings = true; // a skip is always worth surfacing, --quiet or not
    } else {
      const bundleDir = bundleSourceDirectory(repositoryRoot, lock, section.bundle);
      const modulePath = path.join(bundleDir, 'modules', section.moduleId, 'index.cnxml');
      if (!existsSync(bundleDir)) {
        lines.push(`  ⊘ skipped — bundle ${section.bundle} is not checked out at `
          + `${path.relative(repositoryRoot, bundleDir)}/ (run npm run source:fetch -- --bundle ${section.bundle})`);
        findings = true;
      } else if (!existsSync(modulePath)) {
        lines.push(`  ⊘ skipped — pinned module ${section.moduleId} is not checked out at `
          + `${path.relative(repositoryRoot, modulePath)}`);
        findings = true;
      } else {
        const markdown = readFileSync(file, 'utf8');
        const cnxml = readFileSync(modulePath, 'utf8');
        const { text: moduleText } = extractModuleProse(cnxml);
        const { text: wholeModuleText } = extractModuleProse(cnxml, { includeSolutions: true });
        const { text: pageText, sentences } = extractPageProse(markdown);
        const disclosed = disclosedChangesText(markdown);

        const added = sentences.filter((sentence) => {
          const words = sentence.split(/\s+/).filter(Boolean).length;
          return words >= 6 && phraseCoverage(sentence, moduleText) < 0.8;
        });
        const nearMiss = findNearMissWords(pageText, moduleText, disclosed);
        const untraced = extractModelAnswers(markdown).flatMap(({ question, sentences: answer }) => answer
          .filter((sentence) => sentence.split(/\s+/).filter(Boolean).length >= 6
            && phraseCoverage(sentence, wholeModuleText) < MODEL_ANSWER_COVERAGE)
          .map((sentence) => ({ question, sentence })));

        if (added.length || nearMiss.length || untraced.length) {
          findings = true;
          if (added.length) {
            lines.push(`  ADDED (${added.length}):`);
            for (const sentence of added) lines.push(`    - ${sentence}`);
          }
          if (nearMiss.length) {
            lines.push(`  NEAR-MISS WORDS (${nearMiss.length}):`);
            for (const { page, source } of nearMiss) lines.push(`    page ${JSON.stringify(page)} ~ source ${JSON.stringify(source)}`);
          }
          if (untraced.length) {
            lines.push(`  MODEL-ANSWER SENTENCES WITHOUT MODULE COVERAGE (${untraced.length}):`);
            for (const { question, sentence } of untraced) {
              lines.push(`    - [${question.slice(0, 60)}${question.length > 60 ? '…' : ''}] ${sentence}`);
            }
          }
        } else {
          lines.push('  (no findings)');
        }
      }
    }

    if (quiet && !findings) continue;
    console.log(`\n== ${file}`);
    lines.forEach((line) => console.log(line));
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) {
  main();
}
