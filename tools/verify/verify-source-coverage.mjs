/**
 * Every source end-of-section exercise is rendered — the life-sciences
 * coverage gate.
 *
 * WHY. The life-sciences playbook's oldest content rule is "No source exercise
 * is ever dropped" (docs/subjects/life-sciences.md): the choice is between
 * graded and `selfcheck`, never between rendered and absent. Until this tool
 * nothing mechanical enforced it. `verify-source-keys` walks the PAGE's items
 * and asks which source exercise each one transcribes; an exercise no item
 * transcribes is simply never visited, so a dropped Short Answer or Critical
 * Thinking question leaves every gate green. That is exactly how the chapters
 * 13–14 wave shipped five pages with exercises "folded away" behind
 * reasonable-sounding footer sentences, and how the September 22, 2026 sweep
 * still found silently dropped exercises on pages that had passed their
 * checkers (Microbiology 4.2, 6.1, 7.2, 9.4, 10.4; Biology 21.2). This tool
 * walks the other direction: for every `<exercise>` in the module a page
 * transcribes, is there a rendered counterpart on the page?
 *
 * An earlier measurement (Microbiology chapters 13–14) rejected such a gate on
 * precision: 50 hits against 13 real drops, because it compared raw text. This
 * matcher reads a page the way the playbooks let an author render an
 * exercise, and it reads the evidence as a SCORE for a one-to-one assignment
 * of exercises to items, strongest first, never as a bare yes/no:
 *
 *   run         the share of the stem transcribed verbatim in runs of ≥ RUN
 *               words (`runCoverage`), after folding the markup the page and
 *               the source spell differently (Unicode sub/superscripts vs
 *               `<sub>`/`<sup>`, inline HTML, TeX, curly quotes — the
 *               `normalizeText` fold). A stem whose ASK sentence is all there
 *               passes even when the page dropped its context sentence or
 *               moved it into a figure caption.
 *   similar     `tokenSimilarity` ≥ MATCH_FLOOR, the reading
 *               `verify-source-keys`' `bestExercise` uses to decide an item
 *               transcribes an exercise (catches "a is" → "is a" edits).
 *   options     the item prints ≥ OPTION_FLOOR of the source's option list —
 *               a reworded stem over the source's own options, or a
 *               select-all rendered as a sortbins whose labels are the options.
 *   stem-lists-options  a figure-part question ("Which type of bacteria is
 *               growing in tube (a)?") whose every option the stem itself
 *               lists.
 *
 * One-to-one matters: "Which of the following has the highest energy?"
 * shares six words with "…has the lowest energy?", and a bare window test
 * let one item stand for both. The parts of one exercise may share an item.
 *
 * What counts as "a page item" is deliberately narrow: every graded or
 * self-check shortcode's question, plus a multiplechoice's options and a
 * sortbins' labels. Body prose is NOT a counterpart (a Fill in the Blank
 * stem IS a body sentence with a blank, so matching the body would pass
 * every dropped one), and neither is the footer (a footer that quotes a
 * stem is disclosing it, not rendering it).
 *
 * The units a page must render: each exercise; each lettered part of a
 * multi-part stem ("(a) … (b) …") — a page that renders (a) and silently
 * drops (b) has dropped (b); each entry of a Matching set's asked column
 * (the two columns are independent pools, the page's multiplechoice stems
 * are one column and its options the other, whichever way round the page
 * chose).
 *
 * The legitimate cases the playbooks allow, and how each is read:
 *
 *   Interactive Link Questions  (A&P `section.interactive-exercise`;
 *               docs/subjects/anatomy-physiology.md §1) — graded only when
 *               the module fixes the answer, otherwise the question stands as
 *               a prompt in its callout. A callout is a counterpart for this
 *               class only; the run reports N in source / M graded per page
 *               (the footer's disclosure) under --verbose.
 *   Check Your Understanding fold  (docs/subjects/life-sciences.md, "No
 *               source exercise is ever dropped, and 'duplicate' is a claim
 *               to prove") — an end-matter exercise graded inside a body CYU
 *               item when the two stems are the same question reworded. When
 *               the matcher itself pairs the exercise with a CYU item the
 *               verdict is `folded` (counted, named under --verbose); when the
 *               rewording defeats it, the fold is a LISTED_EXERCISES entry.
 *   Reworded conversions — a figure-labeling question rendered as one item
 *               per label, a two-blank Fill in the Blank as a multiplechoice,
 *               a drawing task as a description: LISTED_EXERCISES entries.
 *   Omission   — the playbooks forbid it outright, with ONE exception:
 *               docs/subjects/microbiology.md's options-that-differ-only-in-
 *               typography rule ("it is omitted, the footer says why"). That
 *               single case is a LISTED_EXERCISES entry. A footer that names
 *               an omission for any other reason ("the module gives nothing
 *               to answer it with", "duplicates the Art Connection") does not
 *               excuse it: that is precisely the drop this gate exists for.
 *
 * Every LISTED_EXERCISES entry is a reviewed decision and is itself checked:
 * the exercise must still be unrendered by any item of its own, and every
 * page question the entry names must still be on the page.
 *
 * Usage: node tools/verify/verify-source-coverage.mjs [content-root] [--min-covered N] [--verbose] [--json]
 *
 *   content-root   default content/life-health-sciences
 *   --min-covered  fail unless the covered count is EXACTLY N (the ratchet
 *                  shape every other count gate here uses)
 *   --verbose      list every exercise that passed by anything weaker than a
 *                  ≥ 0.9 verbatim run (similar, options, folded, listed, a
 *                  Matching entry), and the Interactive Link tally, for a
 *                  hand audit
 *   --json         print the full result as JSON (for measurements)
 *
 * A bundle whose pinned checkout is absent (`/sources/` is gitignored) is
 * skipped and named on stderr, exactly as `verify-source-keys` does;
 * ATHENAEUM_REQUIRE_SOURCES=1 turns that skip into a failure.
 *
 * Exit codes: 0 every exercise rendered (or the bundle skipped), 1 at least
 * one exercise has no rendered counterpart / the floor does not hold / a
 * required bundle is absent, 2 usage error.
 */

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import {
  parseXml, descendants, elementChildren, firstElement, localName,
  normalizeText, normalizeWhitespace, tokenSimilarity, loadSourceLock, bundleSourceDirectory,
} from '../lib/openstax-source.mjs';
import { integerFlag, parseCliArgs } from '../lib/cli.mjs';
import { shortcodes } from '../lib/content.mjs';
import { MATCH_FLOOR } from './verify-source-keys.mjs';

/** The shortest verbatim run `runCoverage` credits. */
export const RUN = 4;

/** The evidence score an item needs to render an exercise: a verbatim run
 * covering this share of the stem, or `tokenSimilarity` ≥ MATCH_FLOOR. A
 * 0.5 run floor passed "Discuss the difference between generalized and
 * specialized transduction" on an unrelated item sharing four words. */
export const PASS_FLOOR = 0.6;

/** The share of a source option list an item must print to render it by
 * its options alone. */
export const OPTION_FLOOR = 0.75;

/** The stem evidence an options match still needs (Biology 24.2's reworded
 * "Members of which phylum are all involved in close associations…" scores
 * 0.38 against its source stem; a different question over a shared option
 * list scores near 0). */
export const OPTION_STEM_FLOOR = 0.25;

/** Below this share of the source options, a multiplechoice is not the
 * exercise however its stem reads (a disclosed option correction replaces
 * one or two of four, never more). */
export const OPTION_CONFLICT_FLOOR = 0.5;

/** How much of an ask sentence must be transcribed verbatim for it to stand
 * for its whole stem (the context sentences dropped or moved). */
export const ASK_FLOOR = 0.8;

/** Source section classes that hold end-of-section exercises. */
export const EXERCISE_CLASSES = Object.freeze([
  'multiple-choice', 'fill-in-the-blank', 'true-false', 'matching',
  'short-answer', 'critical-thinking', 'free-response', 'visual-exercise',
  'interactive-exercise',
]);

/**
 * Source exercises a page lawfully carries WITHOUT an item of its own, each
 * a reviewed decision. `kind`:
 *   'fold'        graded or self-checked inside the body Check Your
 *                 Understanding item named in `questions` — the two stems are
 *                 the same question reworded (docs/subjects/life-sciences.md,
 *                 "No source exercise is ever dropped…"), quoted in the
 *                 ledger note and named in the footer
 *   'conversion'  rendered by the items named in `questions` under a stem the
 *                 conversion had to reword (a figure-labeling question as one
 *                 item per label; a two-blank Fill in the Blank as a
 *                 multiplechoice)
 *   'omitted'     the one omission a playbook allows (docs/subjects/
 *                 microbiology.md: options that differ only in typography),
 *                 its reason in the footer
 * Every entry must still be needed (the exercise otherwise unrendered) and
 * every question it names must still be on the page, or the run fails.
 */
export const LISTED_EXERCISES = Object.freeze([
  {
    page: 'content/life-health-sciences/microbiology/01-an-invisible-world/02-a-systematic-approach.md',
    exercise: 'fs-id1171360530144',
    kind: 'omitted',
    questions: [
    ],
    reason: "Multiple Choice \"Which of the following is a correct usage of binomial nomenclature?\": all four options differ only in capitalization/italics, so a screen reader speaks one name four times (docs/subjects/microbiology.md); footer names the omission",
  },
  {
    page: 'content/life-health-sciences/microbiology/02-how-we-see-the-invisible-world/01-the-properties-of-light.md',
    exercise: 'fs-id1167793856869',
    kind: 'fold',
    questions: [
      "Explain why dispersion occurs when white light passes through a prism.",
    ],
    reason: "Short Answer \"Explain how a prism separates white light into different colors\" folded into the body CYU on dispersion; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/03-the-cell/04-unique-characteristics-of-eukaryotic-cells.md',
    exercise: 'fs-id1172098265860',
    kind: 'fold',
    questions: [
      "Explain the difference between eukaryotic and prokaryotic flagella.",
    ],
    reason: "Short Answer on flagella differences folded into the Flagella and Cilia CYU (a sortbins); the playbook's own chapter-3 example; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/06-acellular-pathogens/02-the-viral-life-cycle.md',
    exercise: 'fs-id1168329046696',
    kind: 'conversion',
    questions: [
      "Sort each description under the type of virus that enters a cell this way.",
    ],
    reason: "Short Answer on T-even phage vs animal virus entry graded as a sortbins from the penetration paragraphs; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/06-acellular-pathogens/02-the-viral-life-cycle.md',
    exercise: 'fs-id1168329417902',
    kind: 'conversion',
    questions: [
      "Sort each description under the type of transduction it describes.",
    ],
    reason: "Short Answer on generalized vs specialized transduction graded as a sortbins; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/06-acellular-pathogens/02-the-viral-life-cycle.md',
    exercise: 'fs-id1168329158934',
    kind: 'conversion',
    questions: [
      "Sort each description under the phage life cycle it describes.",
    ],
    reason: "Short Answer \"Differentiate between lytic and lysogenic cycles\" graded as a sortbins; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/06-acellular-pathogens/03-isolation-culture-and-identification-of-viruses.md',
    exercise: 'fs-id1168327938027',
    kind: 'conversion',
    questions: [
      "In the figure above, what does the arrow labeled (A) point to?",
      "In the figure above, what does the arrow labeled (B) point to?",
    ],
    reason: "Critical Thinking \"Label the components indicated by arrows.\" rendered as one figure-keyed multiplechoice per arrow; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/07-microbial-biochemistry/02-carbohydrates.md',
    exercise: 'fs-id1167663656759',
    kind: 'conversion',
    parts: ['(a)'],
    questions: [
      "Based on the position of its carbonyl group, is glucose an aldose or a ketose?",
      "Based on the position of its carbonyl group, is galactose an aldose or a ketose?",
      "Based on the position of its carbonyl group, is fructose an aldose or a ketose?",
    ],
    reason: "Critical Thinking part (a) (circle the functional groups; aldose or ketose) rendered as one multiplechoice per sugar. Part (b) (\"What are such compounds called?\") is NOT covered by this entry",
  },
  {
    page: 'content/life-health-sciences/microbiology/07-microbial-biochemistry/02-carbohydrates.md',
    exercise: 'fs-id1167663733917',
    kind: 'conversion',
    questions: [
      "Counting the carbon, hydrogen, and oxygen atoms in the linear structure shown, what is this monosaccharide's molecular formula?",
      "In the linear structure shown, which hydroxyl group reacts with the carbonyl carbon to close the ring drawn beside it?",
    ],
    reason: "Critical Thinking parts (a) and (b) rendered as two figure-keyed multiplechoice items; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/07-microbial-biochemistry/03-lipids.md',
    exercise: 'fs-id1167662747221',
    kind: 'conversion',
    questions: [
      "Which of the following, together with saturated fatty acids, forms the esters found in waxes?",
    ],
    reason: "two-blank Fill in the Blank (waxes) rendered as a multiplechoice with \"fatty acids\" given in the stem, because the body never prints \"alcohols\"; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/08-microbial-metabolism/01-energy-matter-and-enzymes.md',
    exercise: 'fs-id1167660226632',
    kind: 'fold',
    questions: [
      "What is the function of an electron carrier?",
    ],
    reason: "Short Answer on the function of NAD⁺/NADH and FAD/FADH₂ folded into the body CYU \"What is the function of an electron carrier?\"; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/09-microbial-growth/01-how-microbes-grow.md',
    exercise: 'fs-id1172101780005',
    kind: 'conversion',
    questions: [
      "Which pair of tools is used to perform a direct count of total cells?",
    ],
    reason: "two-blank Fill in the Blank whose key exceeds four words, rendered as a multiplechoice keyed by the source's own list (docs/subjects/microbiology.md); footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/09-microbial-growth/04-temperature-and-microbial-growth.md',
    exercise: 'fs-id1172099381104',
    kind: 'conversion',
    parts: ['#1'],
    questions: [
      "Match the type of bacterium with its environment: which environment matches a psychrotroph?",
    ],
    reason: "Matching row \"psychotroph\" (a source misspelling) rendered as \"psychrotroph\"; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/09-microbial-growth/06-media-used-for-bacterial-growth.md',
    exercise: 'fs-id1172097207889',
    kind: 'fold',
    questions: [
      "Distinguish selective and enrichment media: sort each phrase below by the type of medium it describes.",
    ],
    reason: "Short Answer on enrichment vs selective culture folded into the body CYU (a sortbins); footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/10-biochemistry-of-the-genome/03-structure-and-function-of-rna.md',
    exercise: 'fs-id1172100743582',
    kind: 'conversion',
    questions: [
      "Which labeled part of the figure marks the tRNA?",
      "Which labeled part of the figure marks the mRNA?",
      "Which labeled part of the figure marks the rRNA?",
    ],
    reason: "figure-labeling Critical Thinking rendered as three figure-keyed multiplechoice items; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/11-mechanisms-of-microbial-genetics/01-the-functions-of-genetic-material.md',
    exercise: 'fs-id1167660181471',
    kind: 'fold',
    questions: [
      "How can cells have the same genotype but differ in their phenotype?",
    ],
    reason: "Short Answer \"Can two observably different cells have the same genotype? Explain.\" folded into the body CYU; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/11-mechanisms-of-microbial-genetics/04-protein-synthesis-translation.md',
    exercise: 'fs-id1167663643475',
    kind: 'fold',
    questions: [
      "What happens when a stop codon is reached?",
      "What causes termination of translation?",
    ],
    reason: "Short Answer on translation termination folded into two body CYU bullets; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/11-mechanisms-of-microbial-genetics/04-protein-synthesis-translation.md',
    exercise: 'fs-id1167663652892',
    kind: 'conversion',
    questions: [
      "Sort each property below under whether it describes translation in bacteria or in eukaryotes, using the comparison table above.",
    ],
    reason: "Short Answer on prokaryotic vs eukaryotic translation graded as a sortbins fed by the comparison table; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/11-mechanisms-of-microbial-genetics/04-protein-synthesis-translation.md',
    exercise: 'fs-id1167661366134',
    kind: 'conversion',
    questions: [
      "Using the figure above, match each lettered leader line to the part of translation it points to.",
    ],
    reason: "figure-labeling Critical Thinking kept as a self-check over the lettered figure; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/12-modern-applications-of-microbial-genetics/02-visualizing-and-characterizing-dna-rna-and-protein.md',
    exercise: 'fs-id1167742465559',
    kind: 'fold',
    questions: [
      "Compare RT-PCR and qPCR in terms of their respective purposes.",
    ],
    reason: "Critical Thinking on RT-PCR vs qPCR folded into the body CYU; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/13-control-of-microbial-growth/01-controlling-microbial-growth.md',
    exercise: 'fs-id1167585899749',
    kind: 'fold',
    questions: [
      "Name at least two factors that can compromise the effectiveness of a disinfecting agent.",
    ],
    reason: "Short Answer on disinfectant effectiveness folded into the body CYU; the life-sciences playbook's own example of a lawful fold; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/14-antimicrobial-drugs/06-testing-the-effectiveness-of-antimicrobials.md',
    exercise: 'fs-id1167661257086',
    kind: 'fold',
    questions: [
      "How does one use the information from a Kirby-Bauer assay to predict the therapeutic effectiveness of an antimicrobial drug in a patient?",
    ],
    reason: "Short Answer on Kirby-Bauer interpretation folded into the body CYU; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/14-antimicrobial-drugs/06-testing-the-effectiveness-of-antimicrobials.md',
    exercise: 'fs-id1167661429692',
    kind: 'fold',
    questions: [
      "Compare and contrast MIC and MBC.",
    ],
    reason: "Short Answer \"What is the difference between MIC and MBC?\" folded into the body CYU; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/17-innate-nonspecific-host-defenses/03-cellular-defenses.md',
    exercise: 'fs-id1172100981472',
    kind: 'fold',
    questions: [
      "Name three antimicrobial mechanisms of neutrophils.",
    ],
    reason: "Short Answer on three ways a neutrophil destroys bacteria folded into the body CYU; footer discloses",
  },
  {
    page: 'content/life-health-sciences/microbiology/20-laboratory-analysis-of-the-immune-response/02-detecting-antigen-antibody-complexes.md',
    exercise: 'fs-id1167661533088',
    kind: 'fold',
    questions: [
      "In a complement fixation test, if the serum turns pink, does the patient have antibodies to the antigen or not? Explain.",
    ],
    reason: "Short Answer on hemolysis in complement fixation folded into the body CYU (graded multiplechoice); footer discloses",
  },
]);

/* ---- source side ---------------------------------------------------------- */

/** Prose of a node with its option lists left out (the stem). */
function stemOf(node) {
  const parts = [];
  const visit = (candidate) => {
    if (typeof candidate === 'string') { parts.push(candidate); return; }
    if (['list', 'table', 'media', 'figure'].includes(localName(candidate))) return;
    for (const child of candidate.children || []) visit(child);
  };
  visit(node);
  return normalizeWhitespace(parts.join(' '));
}

/** The text of a node, every element boundary a space (so `CO<sub>2</sub>`
 * reads "CO 2", the way normalizeText splits a page's `CO₂`). */
const spacedText = (node) => {
  const parts = [];
  const visit = (candidate) => {
    if (typeof candidate === 'string') { parts.push(candidate); return; }
    for (const child of candidate.children || []) visit(child);
  };
  visit(node);
  return normalizeWhitespace(parts.join(' '));
};

/**
 * Every end-of-section exercise of a module:
 *   { id, cls, stem, options, pools }
 * `pools` is set for a Matching exercise: its two columns' entries, the
 * blanks and letter prefixes stripped.
 */
export function sourceExercises(xml) {
  const document = parseXml(xml);
  const found = [];
  const walk = (node, cls) => {
    if (typeof node === 'string') return;
    const name = localName(node);
    const nodeClass = node.attributes?.class || '';
    const here = name === 'section' && EXERCISE_CLASSES.includes(nodeClass) ? nodeClass : cls;
    if (name === 'exercise') {
      if (!here) return; // a body exercise (none in these books) is not end matter
      const problem = firstElement(node, 'problem');
      if (!problem) return;
      const list = descendants(problem, (child) => localName(child) === 'list')[0];
      const options = list ? elementChildren(list, 'item').map((item) => spacedText(item)) : [];
      const exercise = { id: node.attributes.id || '', cls: here, stem: stemOf(problem), options, pools: null };
      if (here === 'matching') {
        // A Matching table's left cells are blanks ("___chitin") and its
        // right cells lettered entries ("A. energy storage polymer…"); the
        // two columns are independent POOLS, not pairs (row 1's left cell
        // is not row 1's answer), and CNXML sometimes crams a whole column
        // into one cell ("tRNA ___rRNA ___mRNA"), so each column is split
        // on its own markers.
        const left = [];
        const right = [];
        for (const row of descendants(problem, (child) => localName(child) === 'row')) {
          const entries = elementChildren(row, 'entry').map((entry) => spacedText(entry));
          left.push(...(entries[0] || '').split(/_{2,}/));
          right.push(...(entries[1] || '').split(/(?:^|\s)[A-Za-z]\s*[.)]\s+/));
        }
        const clean = (pool) => pool.map((entry) => normalizeWhitespace(entry)).filter(Boolean);
        if (left.length) exercise.pools = [clean(left), clean(right)];
      }
      found.push(exercise);
      return;
    }
    for (const child of node.children || []) walk(child, here);
  };
  walk(document, null);
  const checkQuestions = descendants(document, (node) => localName(node) === 'note'
    && /check-your-understanding/.test(node.attributes.class || ''))
    .flatMap((note) => descendants(note, (node) => localName(node) === 'item'))
    .map((item) => spacedText(item))
    .filter(Boolean);
  return { exercises: found, checkQuestions };
}

/* ---- page side ------------------------------------------------------------ */

/** Text with the markup the source never prints removed and the spellings
 * the two sides disagree on folded, then `normalizeText`ed:
 *   - inline HTML tags and TeX control words dropped, markdown link targets
 *     dropped;
 *   - a RUN of Unicode sub/superscript digits read as one number set off by
 *     spaces, the way the source's `<sub>12</sub>` reads once its tags are
 *     spaced: the page's `C₆H₁₂O₆` and the source's `C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>`
 *     both become "c 6 h 12 o 6" (normalizeText alone splits `₁₂` into
 *     "1 2" and glues the next letter on: "c 6h 1 2o 6").
 * Used on both sides, so the source's own stems fold the same way. */
const SUBSCRIPTS = /[\u2080-\u2089]+/g;
const SUPERSCRIPTS = /[\u2070\u00B9\u00B2\u00B3\u2074-\u2079]+/g;
export const plain = (value) => normalizeText(String(value ?? '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\\[a-zA-Z]+/g, ' ')
  .replace(/\]\([^)]*\)/g, ' ')
  .replace(SUBSCRIPTS, (run) => ` ${run.normalize('NFKC')} `)
  .replace(SUPERSCRIPTS, (run) => ` ${run.normalize('NFKC')} `));

/** The footer: the `<small>This section is adapted…` paragraph (the page's
 * attribution and `Changes:` clause). Empty when the page has none. */
export function footerOf(markdown) {
  const index = markdown.search(/^<small>[^\n]*adapted from/im);
  return index === -1 ? '' : markdown.slice(index);
}

/**
 * The texts on a page that can stand for a source exercise:
 *   items     one entry per graded/self-check shortcode — its question, plus
 *             a multiplechoice's options or a sortbins' item labels
 *   callouts  each callout's inner text (a counterpart for an Interactive
 *             Link Question only)
 * The footer is excluded from both: a footer that quotes a stem is a
 * disclosure, not a rendering.
 */
export function pageTexts(markdown) {
  const footer = footerOf(markdown);
  const body = footer ? markdown.slice(0, markdown.length - footer.length) : markdown;
  const items = [];
  for (const name of ['multiplechoice', 'textin', 'selfcheck', 'sortbins', 'fillin']) {
    for (const sc of shortcodes(body, name)) {
      const question = sc.params.question || '';
      let options = [];
      if (name === 'multiplechoice') options = sc.inner.split('\n').map((line) => line.trim()).filter(Boolean);
      if (name === 'sortbins') {
        options = [...sc.inner.matchAll(/"label"\s*:\s*"((?:[^"\\]|\\.)*)"/g)].map((match) => match[1]);
      }
      items.push({
        type: name,
        question,
        options,
        text: [question, ...options].join(' \n '),
        line: body.slice(0, sc.index).split('\n').length,
      });
    }
  }
  const callouts = [...shortcodes(body, 'callout')].map((sc) => sc.inner);
  return { items, callouts, footer };
}

/* ---- matching ------------------------------------------------------------- */

const padded = (value) => ` ${value} `;

/**
 * The share of a stem's words that sit in a verbatim run of at least
 * `minRun` words the haystack also prints (both `plain`). A verbatim stem
 * scores 1; a stem whose lead-in moved into a figure caption, or that the
 * page split across two items, scores its transcribed share; a stem that
 * only shares "which of the following is a" with an item scores that
 * phrase's share of its length, which is why the gate reads this as a SCORE
 * for a one-to-one assignment and never as a bare yes/no.
 */
export function runCoverage(stem, haystack, minRun = RUN) {
  const words = stem.split(' ').filter(Boolean);
  if (!words.length) return 0;
  const hay = padded(haystack);
  if (words.length < minRun) return hay.includes(padded(words.join(' '))) ? 1 : 0;
  const covered = new Array(words.length).fill(false);
  for (let start = 0; start + minRun <= words.length; start++) {
    let end = start;
    while (end < words.length && hay.includes(padded(words.slice(start, end + 1).join(' ')))) end++;
    if (end - start >= minRun) for (let index = start; index < end; index++) covered[index] = true;
  }
  return covered.filter(Boolean).length / words.length;
}

/** The share of a source option list the item prints among its own options
 * or labels (order-free). A reworded stem over the source's own options is
 * the same exercise; so is a select-all turned into a sortbins whose labels
 * are the source options (docs/subjects/microbiology.md). */
export function optionCoverage(sourceOptions, item) {
  if (sourceOptions.length < 2 || !item.options.length) return 0;
  const page = new Set(item.options.map(tight));
  return sourceOptions.filter((option) => page.has(tight(option))).length / sourceOptions.length;
}

/** An option compared with every space removed: the source's
 * `G<sub>1</sub> checkpoint` reads "G 1 checkpoint" where the page writes
 * "G1 checkpoint" (verify-source-keys' `compact` for the same reason). */
export const tight = (value) => plain(value).replace(/ /g, '');

/** How well a short source phrase (a Matching entry) reads as an item's
 * question: verbatim inside it, or most of its vocabulary. */
const phraseScore = (phrase, question) => Math.max(
  runCoverage(plain(phrase), plain(question)),
  tokenSimilarity(phrase, question),
);

/** The sentences of a stem that ASK something — a question, a blank, or an
 * imperative — as opposed to the context a stem opens with ("The figure
 * depicts…", "Two types of toxins are…"). A page may drop that context or
 * move it into a figure caption, so an ask sentence transcribed in full
 * renders the stem on its own. */
const ASK_START = /^(?:identify|explain|describe|name|list|compare|contrast|label|draw|discuss|differentiate|distinguish|predict|suggest|propose|justify|give|state|define|why|how|what|which|where|when|who|is|are|does|do|can|would|should)\b/i;
export function askSentences(stem) {
  return stem.split(/(?<=[.?!])\s+(?=[A-Z(])/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => /\?|_{2,}/.test(sentence) || ASK_START.test(sentence));
}

/** How much of a stem a text transcribes verbatim: the whole stem's
 * `runCoverage`, or an ask sentence's when that sentence is (nearly) all
 * there. */
export function transcribed(stem, text) {
  const haystack = plain(text);
  const asks = askSentences(stem)
    .filter((sentence) => sentence.split(' ').length >= RUN)
    .map((sentence) => runCoverage(plain(sentence), haystack));
  return Math.max(runCoverage(plain(stem), haystack), ...asks.map((value) => (value >= ASK_FLOOR ? value : 0)));
}

/** One exercise unit against one page item: the evidence that the item
 * renders it, as { score, how }. */
export function scoreItem(unit, item) {
  if (unit.poolEntry !== undefined) {
    // A Matching entry is one multiplechoice: the entry is the stem and the
    // OTHER column is the option list.
    const options = new Set(item.options.map(tight));
    const other = unit.otherPool.filter((entry) => options.has(tight(entry))).length / unit.otherPool.length;
    if (other < OPTION_FLOOR) return { score: 0, how: null };
    const score = phraseScore(unit.poolEntry, item.question);
    return { score, how: 'matching-row' };
  }
  const stem = plain(unit.stem);
  const run = transcribed(unit.stem, item.text);
  const similar = item.question ? tokenSimilarity(unit.stem, item.question) : 0;
  const options = optionCoverage(unit.options || [], item);
  // A figure-bound Matching or list question ("Match the culture tube with
  // … facultative anaerobe, obligate anaerobe, …") rendered as one
  // multiplechoice per figure part: every option the item offers is one
  // the stem itself lists.
  const listed = item.options.length >= 3 && item.options.every((option) => padded(stem).includes(padded(plain(option)))) ? 1 : 0;
  // A similarity at the MATCH_FLOOR the key cross-check trusts counts as
  // passing evidence even below the run floor.
  const similarScore = similar >= MATCH_FLOOR ? Math.max(similar, PASS_FLOOR) : similar;
  // Options alone are not enough: a page's author-built filler or a body
  // item may reuse a source option list ("Who was the first to describe
  // cells…" and "Who invented the compound microscope?" share one list of
  // names), so the stem must also read like the exercise's.
  const optionScore = options >= OPTION_FLOOR && Math.max(run, similar) >= OPTION_STEM_FLOOR ? options : 0;
  // A multiplechoice over a DIFFERENT option list is a different question,
  // however much stem it shares ("Viruses_______." against any item that
  // says "viruses"; a filler built from the sentence an exercise quotes).
  if ((unit.options || []).length >= 2 && item.type === 'multiplechoice' && item.options.length >= 2
    && options < OPTION_CONFLICT_FLOOR) {
    return { score: 0, how: null, tie: 0 };
  }
  const best = Math.max(run, similarScore, optionScore, listed);
  const how = best === 0 ? null : best === run ? 'run' : best === similarScore ? 'similar' : best === listed ? 'stem-lists-options' : 'options';
  // `tie` orders equal scores: two exercises sharing one option list
  // (Biology 13.1's two recombination-frequency questions) go to the item
  // whose stem reads like theirs.
  return { score: best, how, tie: run + similar };
}

/** Whether a page question transcribes one of the module's body Check Your
 * Understanding questions. */
export const isCheckQuestion = (question, checkQuestions) => checkQuestions.some((check) => (
  runCoverage(plain(check), plain(question)) >= PASS_FLOOR || tokenSimilarity(check, question) >= MATCH_FLOOR));

/** Split a multi-part stem ("… (a) How many…? (b) Identify…") into its
 * parts, the shared lead-in dropped; null when the stem has no parts. */
export function stemParts(stem) {
  const pieces = stem.split(/\s*\(([a-h])\)\s+/);
  if (pieces.length < 5) return null; // lead-in, "a", part, "b", part at least
  const parts = [];
  for (let index = 1; index + 1 < pieces.length; index += 2) parts.push({ label: pieces[index], text: pieces[index + 1] });
  return parts;
}

/** The units a page must render for one exercise: the exercise itself; one
 * unit per part of a multi-part stem; one unit per entry of the Matching
 * column the page asks about (chosen per page — see `coverage`). */
function unitsOf(exercise, orientation = 0) {
  if (exercise.pools) {
    const [asked, other] = orientation === 0 ? exercise.pools : [exercise.pools[1], exercise.pools[0]];
    return asked.map((entry, index) => ({
      ...exercise, id: `${exercise.id}#${index + 1}`, stem: entry, poolEntry: entry, otherPool: other, group: exercise.id,
    }));
  }
  const parts = stemParts(exercise.stem);
  if (parts) {
    return parts.map((part) => ({ ...exercise, id: `${exercise.id}(${part.label})`, stem: part.text, group: exercise.id }));
  }
  return [{ ...exercise, group: exercise.id }];
}

/**
 * Judge every exercise of one module against one page. Returns one verdict
 * per unit (an exercise, a part of a multi-part stem, a Matching entry):
 *   { id, cls, stem, status, how, score, line }
 * status: 'rendered' | 'folded' (its item is a body Check Your Understanding
 * question) | 'graded-il' | 'prompt-il' | 'listed' | 'missing'
 *
 * Items are assigned ONE-TO-ONE, strongest evidence first: an item that
 * renders one exercise verbatim is not also evidence for a second exercise
 * that merely shares its opening words ("Which of the following has the
 * highest energy?" must not stand for "…has the lowest energy?"). The parts
 * of one exercise may share an item (a two-part Critical Thinking question
 * kept whole as one selfcheck). An Interactive Link Question may share its
 * callout or its selfcheck with the note's own question, so it is judged
 * outside the assignment.
 */
export function coverage(markdown, source, { listed = [] } = {}) {
  const { items, callouts } = pageTexts(markdown);
  const units = [];
  for (const exercise of source.exercises) {
    if (!exercise.pools) { units.push(...unitsOf(exercise)); continue; }
    // A Matching set is rendered with either column as the stems; read it
    // the way the page did.
    const rendered = (orientation) => unitsOf(exercise, orientation)
      .filter((unit) => items.some((item) => scoreItem(unit, item).score >= PASS_FLOOR)).length;
    units.push(...unitsOf(exercise, rendered(1) > rendered(0) ? 1 : 0));
  }
  const candidates = [];
  units.forEach((unit, unitIndex) => {
    if (unit.cls === 'interactive-exercise') return;
    items.forEach((item, itemIndex) => {
      const scored = scoreItem(unit, item);
      if (scored.score >= PASS_FLOOR) candidates.push({ unitIndex, itemIndex, ...scored });
    });
  });
  candidates.sort((a, b) => b.score - a.score || (b.tie || 0) - (a.tie || 0) || a.unitIndex - b.unitIndex || a.itemIndex - b.itemIndex);
  const unitTaken = new Map();
  const itemOwner = new Map();
  for (const candidate of candidates) {
    if (unitTaken.has(candidate.unitIndex)) continue;
    const owner = itemOwner.get(candidate.itemIndex);
    if (owner !== undefined && owner !== units[candidate.unitIndex].group) continue;
    unitTaken.set(candidate.unitIndex, candidate);
    itemOwner.set(candidate.itemIndex, units[candidate.unitIndex].group);
  }
  return units.map((unit, unitIndex) => {
    const verdict = { id: unit.id, group: unit.group, cls: unit.cls, stem: unit.stem };
    if (unit.cls === 'interactive-exercise') {
      const graded = items.find((item) => transcribed(unit.stem, item.text) >= PASS_FLOOR
        || tokenSimilarity(unit.stem, item.question) >= MATCH_FLOOR);
      if (graded) return { ...verdict, status: 'graded-il', how: 'item', line: graded.line };
      if (callouts.some((callout) => transcribed(unit.stem, callout) >= PASS_FLOOR)) {
        return { ...verdict, status: 'prompt-il', how: 'callout' };
      }
      return { ...verdict, status: 'missing', how: null };
    }
    const taken = unitTaken.get(unitIndex);
    if (taken) {
      // An exercise whose counterpart is a body Check Your Understanding
      // item (not a verbatim transcription of the exercise) is a fold the
      // matcher could see; it counts as rendered and is named for audit.
      const item = items[taken.itemIndex];
      const folded = taken.score < 0.9 && isCheckQuestion(item.question, source.checkQuestions);
      return {
        ...verdict, status: folded ? 'folded' : 'rendered', how: taken.how, score: Number(taken.score.toFixed(2)), line: item.line,
      };
    }
    const entry = listed.find((candidate) => candidate.exercise === unit.group
      && (!candidate.parts || candidate.parts.includes(unit.id.slice(unit.group.length))));
    if (entry) return { ...verdict, status: 'listed', how: entry.kind };
    return { ...verdict, status: 'missing', how: null };
  });
}

/* ---- corpus walk ---------------------------------------------------------- */

export function checkCoverage(repositoryRoot, { contentRoot = 'content/life-health-sciences' } = {}) {
  const lock = loadSourceLock(repositoryRoot);
  const map = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-map.json'), 'utf8'));
  const prefix = `${contentRoot.replace(/\/+$/, '')}/`;
  const sections = map.sections.filter((section) => section.localPath.startsWith(prefix)
    && section.localPath.startsWith('content/life-health-sciences/'));
  const skipped = {};
  const results = [];
  const failures = [];
  for (const section of sections) {
    const directory = bundleSourceDirectory(repositoryRoot, lock, section.bundle);
    if (!existsSync(directory)) { skipped[section.bundle] = (skipped[section.bundle] || 0) + 1; continue; }
    const pagePath = path.join(repositoryRoot, section.localPath);
    const modulePath = path.join(directory, 'modules', section.moduleId, 'index.cnxml');
    if (!existsSync(pagePath)) { failures.push({ page: section.localPath, detail: 'mapped page is missing' }); continue; }
    if (!existsSync(modulePath)) { failures.push({ page: section.localPath, detail: `pinned module ${section.moduleId} is not checked out` }); continue; }
    const markdown = readFileSync(pagePath, 'utf8');
    const source = sourceExercises(readFileSync(modulePath, 'utf8'));
    const listed = LISTED_EXERCISES.filter((entry) => entry.page === section.localPath);
    const verdicts = coverage(markdown, source, { listed });
    for (const verdict of verdicts) {
      const row = { page: section.localPath, section: section.sourceSection, module: section.moduleId, ...verdict };
      results.push(row);
      if (verdict.status === 'missing') {
        failures.push({
          page: section.localPath,
          detail: `${section.sourceSection} ${section.moduleId} ${verdict.id} (${verdict.cls}) has no rendered counterpart: ${JSON.stringify(verdict.stem.slice(0, 160))}`,
        });
      }
    }
    // A listed entry must still be needed and still true: the exercise must
    // exist and not be rendered by an item of its own (else the entry is
    // stale), and every page question the entry names must still be there.
    const { items } = pageTexts(markdown);
    for (const entry of listed) {
      const mine = verdicts.filter((candidate) => candidate.group === entry.exercise);
      if (!mine.length) {
        failures.push({ page: section.localPath, detail: `LISTED_EXERCISES names ${entry.exercise}, which ${section.moduleId} does not print — drop the stale entry` });
      } else if (!mine.some((candidate) => candidate.status === 'listed')) {
        failures.push({ page: section.localPath, detail: `LISTED_EXERCISES names ${entry.exercise}, but the page now renders it itself — drop the stale entry` });
      }
      for (const question of entry.questions || []) {
        if (!items.some((item) => plain(item.question) === plain(question))) {
          failures.push({ page: section.localPath, detail: `LISTED_EXERCISES says ${entry.exercise} is carried by the item ${JSON.stringify(question)}, which the page no longer has` });
        }
      }
    }
  }
  const tally = {};
  for (const row of results) tally[row.status] = (tally[row.status] || 0) + 1;
  const covered = results.filter((row) => row.status !== 'missing').length;
  return { results, failures, tally, covered, total: results.length, skipped };
}

/** The per-page Interactive Link tally a footer must state: N in source, M
 * graded as selfcheck, the rest prompts. */
export function interactiveTally(results) {
  const byPage = new Map();
  for (const row of results.filter((entry) => entry.cls === 'interactive-exercise')) {
    const entry = byPage.get(row.page) || { page: row.page, section: row.section, source: 0, graded: 0, prompts: 0 };
    entry.source += 1;
    if (row.status === 'graded-il') entry.graded += 1;
    if (row.status === 'prompt-il') entry.prompts += 1;
    byPage.set(row.page, entry);
  }
  return [...byPage.values()];
}

export function summaryLine({ tally, covered, total, failures, skipped }) {
  const skippedCount = Object.values(skipped).reduce((a, b) => a + b, 0);
  const scope = skippedCount ? ` (partial: ${skippedCount} mapped section(s) skipped, no checkout)` : '';
  const parts = Object.entries(tally).sort().map(([status, count]) => `${status} ${count}`).join(', ');
  return `${failures.length ? '✖' : skippedCount ? '⊘' : '✓'} source-exercise coverage${scope}: `
    + `${covered} of ${total} source exercises rendered (${parts}); ${failures.length} failure(s)`;
}

/* ---- CLI ------------------------------------------------------------------ */

const REQUIRE_SOURCES = Boolean(process.env.ATHENAEUM_REQUIRE_SOURCES);

if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) {
  let contentRoot;
  let verbose;
  let json;
  let minCovered;
  try {
    const cli = parseCliArgs(process.argv.slice(2), {
      valueFlags: ['min-covered'],
      boolFlags: ['verbose', 'json'],
      positional: { max: 1, name: 'content root' },
    });
    contentRoot = cli.positional[0] ?? 'content/life-health-sciences';
    verbose = cli.bool('verbose');
    json = cli.bool('json');
    minCovered = integerFlag(cli, 'min-covered');
  } catch (error) {
    console.error(`verify-source-coverage: ${error.message}`);
    console.error('usage: node tools/verify/verify-source-coverage.mjs [content-root] [--min-covered N] [--verbose] [--json]');
    process.exit(2);
  }
  const repositoryRoot = process.cwd();
  const result = checkCoverage(repositoryRoot, { contentRoot });
  if (json) {
    console.log(JSON.stringify({ ...result, interactive: interactiveTally(result.results) }, null, 1));
  } else {
    for (const { page, detail } of result.failures) console.error(`✗ ${page}\n    ${detail}`);
    if (verbose) {
      // Everything but a near-verbatim transcription, for a hand audit.
      const audit = (entry) => entry.status !== 'missing' && entry.status !== 'prompt-il'
        && !(entry.status === 'rendered' && entry.how === 'run' && entry.score >= 0.9);
      for (const row of result.results.filter(audit)) {
        console.log(`    · ${row.page}${row.line ? `:${row.line}` : ''} ${row.id} ${row.status} by ${row.how}${row.score != null ? ` (${row.score})` : ''}: ${row.stem.slice(0, 100)}`);
      }
      for (const entry of interactiveTally(result.results)) {
        console.log(`    · ${entry.section} Interactive Link Questions: ${entry.source} in source, ${entry.graded} graded, ${entry.prompts} prompt(s)`);
      }
    }
    for (const [bundle, count] of Object.entries(result.skipped)) {
      console.error(`⊘ ${count} mapped section(s) skipped: bundle ${bundle} is not checked out (run npm run source:fetch -- --bundle ${bundle})`);
    }
    console.log(summaryLine(result));
  }
  const skippedCount = Object.keys(result.skipped).length;
  if (skippedCount && REQUIRE_SOURCES) {
    console.error(`✖ source-exercise coverage: bundle(s) not checked out (${Object.keys(result.skipped).join(', ')}) and ATHENAEUM_REQUIRE_SOURCES is set`);
    process.exit(1);
  }
  if (!skippedCount && minCovered !== null && result.covered !== minCovered) {
    console.error(`✖ source-exercise coverage: ${result.covered} rendered, but the recorded floor is exactly ${minCovered}`);
    process.exit(1);
  }
  process.exit(result.failures.length ? 1 : 0);
}
