/**
 * Question-math replay gate: every scalar math span (and prose number)
 * printed in a fillin question is replayed through the real grader as if a
 * learner had typed it. A span that grades 'correct' means the exercise is
 * passable by copying its own prompt — the class that let "Simplify $8(4x)$"
 * accept `8(4x)` — unless the exercise is on the allowlist below.
 *
 * Each span is replayed in TWO spellings: the source TeX verbatim, and a
 * MathLive-normalized spelling (single-token \frac/\sqrt arguments braced,
 * \tfrac renamed \frac) — because the learner's field emits the normalized
 * form. Source-only replay let `\tfrac12+\tfrac14+…` grade 'invalid' while
 * the same sum typed into the field graded 'correct'.
 *
 * NOT replayed — ONE class, counted and reported, never silent:
 *
 *   · form-rejected SPANS, where the exercise's own answerForm refuses the
 *     printed spelling, so no learner could submit it as an answer.
 *
 * A second class used to sit beside it: list-keyed FILLINS, exempted because
 * both list paths in checkAnswer() returned their verdict before the form
 * check ever ran, so a declared answerForm was ignored the moment an answer
 * held a top-level comma. That was a grader defect this gate described rather
 * than reported, and it took 451 fillins out of coverage — "Find $\cos t$ and
 * $\sin t$, separated by a comma" could accept its own printed
 * $\cos\frac{\pi}{6},\sin\frac{\pi}{6}$ with `evaluated-trig` declared. The
 * grader now applies the declared form to every member of a list
 * (`listFormAccepted`), so the exemption has nothing left to stand on and the
 * class is replayed like any other: +768 spans, 0 new failures.
 *
 * Everything else is replayed. The four shape-based whole-class skips this
 * gate used to carry — spans with a top-level `=`, spans containing a comma,
 * `\text`-carrying spans, and an uncounted "the span IS the answer" skip —
 * are gone. Each was a guess about what a learner cannot type, and each was
 * wrong: an ordered pair `(3, 0)` grades as a SCALAR (the grader splits its
 * commas itself), a printed `x = 5` grades against the key `5` through the
 * variable-equation unwrap, and both classes hid real replay-passable
 * exercises. Removing them took the replayed span count from ~6.5k to ~8.9k
 * and surfaced 28 exercises, every one of which is now either revalued in
 * content or recorded below with its reason.
 *
 * The allowlist is for SOUND coincidences, where the printed value IS the
 * correct answer by design: "Translate and solve: the difference of 4x and
 * 3x is 14" (x = 14), "One angle of a right triangle measures 45°, find the
 * other" (45), medians/modes that equal a printed datum, h(0) reading a
 * printed constant off the formula. Every entry is deliberate and reviewed;
 * a NEW replay-passable exercise fails this gate until it is either given an
 * answerForm that rejects the copied prompt or explicitly listed here with
 * its reason.
 *
 * An entry exempts ONE SPAN, not a whole fillin. The tuple used to be
 * (file, question prefix, reason) and was checked before the spans were even
 * extracted, so listing a fillin for its one sound coincidence exempted every
 * other span it printed too: 45 fillins matched, 191 spans were exempted, and
 * only 39 of those actually collided — 152 free riders that could have gone
 * replay-passable without this gate noticing.
 *
 * Runs in `npm run ci` (not `npm test`): the corpus-wide engine replay costs
 * minutes, not seconds — so the orchestrator fans one worker out PER FILE
 * across the machine's cores, each with a hard timeout. A worker that times
 * out is a FAILURE naming its file (a span the engine cannot grade in bounded
 * time is a span a learner's browser cannot grade either), never a silent
 * skip. Usage: node tools/verify-replay.mjs [content-root]
 */
import { readFileSync } from 'node:fs';
import { relative } from 'node:path';
import { availableParallelism } from 'node:os';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { walkMarkdown, mathSpans, shortcodes } from './lib-content.mjs';
import { checkAnswer, checkFormAsGraded } from '../assets/js/lib/check-answer.mjs';

// file (repo-relative) + a question prefix that names ONE fillin + the exact
// printed SPAN that coincides + why that coincidence is sound.
export const SOUND_COINCIDENCES = [
  ['content/math/elementary-algebra/01-foundations/08-the-real-numbers.md', 'For each number given, id', '\\sqrt{81}', 'selection prompt'],
  ['content/math/elementary-algebra/01-foundations/08-the-real-numbers.md', 'For the given numbers $-3$, $-\\sqrt{2}$, $0.3$ repeating, $\\tfrac{9}{5}$, $4$, $\\sqrt{49}$, l', '-\\sqrt{2}', 'selection prompt: the answer is one of the printed numbers'],
  ['content/math/elementary-algebra/01-foundations/08-the-real-numbers.md', 'Locate the following on a', '-\\tfrac{8}{3}', 'selection prompt'],
  ['content/math/elementary-algebra/02-solving-linear-equations-and-inequalities/01-solve-equations-using-the-subtraction-and-addition-properties-of-equality.md', 'Translate and solve: The difference of 4', '14', 'x = 14 by design'],
  ['content/math/elementary-algebra/02-solving-linear-equations-and-inequalities/01-solve-equations-using-the-subtraction-and-addition-properties-of-equality.md', 'Translate and solve: The difference of 7', '-8', 'a = -8 by design'],
  ['content/math/elementary-algebra/03-math-models/02-solve-percent-applications.md', 'Hang borrowed \\$7,500 fro', '4', 'the answer coincides with a printed value'],
  ['content/math/elementary-algebra/03-math-models/02-solve-percent-applications.md', 'Solve. The mix Ricardo pl', '40', 'the answer coincides with a printed percent'],
  ['content/math/elementary-algebra/03-math-models/04-solve-geometry-applications-triangles-rectangles-and-the-pythagorean-theorem.md', 'One angle of a right triangle measures 4', '45', '45-45-90: the other acute angle equals the printed one'],
  ['content/math/elementary-algebra/03-math-models/04-solve-geometry-applications-triangles-rectangles-and-the-pythagorean-theorem.md', 'The measure of one angle of a right triangle is 3', '30', 'the answer coincides with the printed 30'],
  ['content/math/elementary-algebra/04-graphs/01-use-the-rectangular-coordinate-system.md', 'Which of the following or', '(3, 0)', 'selection prompt: the answer is one of the printed candidates, and the distractor grades incorrect'],
  ['content/math/elementary-algebra/04-graphs/02-graph-linear-equations-in-two-variables.md', 'For the equation y = -3 (', '-3', 'constant function: y equals the printed constant everywhere'],
  ['content/math/elementary-algebra/04-graphs/04-understand-slope-of-a-line.md', 'Use the slope formula to find the slope of the line through the points (-', '-1', 'the slope coincides with a printed coordinate'],
  ['content/math/elementary-algebra/05-systems-of-linear-equations/01-solve-systems-of-equations-by-graphing.md', 'Manny is making 12 quarts', '3', 'the answer coincides with a printed quantity'],
  ['content/math/elementary-algebra/05-systems-of-linear-equations/05-solve-mixture-applications-with-systems-of-equations.md', 'LeBron needs 150 millilit', '30', 'the answer coincides with the printed concentration'],
  ['content/math/elementary-algebra/07-factoring/01-greatest-common-factor-and-factor-by-grouping.md', 'Find the GCF of $8w^2$ an', '8w^2', 'the GCF of a term and its own multiple IS that term; retyping is the correct response'],
  ['content/math/elementary-algebra/08-rational-expressions-and-equations/08-solve-uniform-motion-and-work-applications.md', 'Corey shovels the snow in', '4', 'the answer coincides with a printed time'],
  ['content/math/elementary-algebra/08-rational-expressions-and-equations/08-solve-uniform-motion-and-work-applications.md', 'Hamilton rode $12$ miles ', '12', 'the rate coincides with the printed distance'],
  ['content/math/elementary-algebra/08-rational-expressions-and-equations/08-solve-uniform-motion-and-work-applications.md', 'Jazmine trained for $3$ h', '8', 'the rate coincides with a printed distance'],
  ['content/math/elementary-algebra/knowledge-check-01-05.md', 'Evaluate $-|x|$ when $x =', 'x = -2', 'identity, not coincidence: -|x| = x whenever x <= 0; the page carries the positive-input twin that discriminates'],
  ['content/math/elementary-algebra/knowledge-check-01-05.md', "Liz paid \\$160 for 28 tickets to take the Brownie troop to the science museum. Children's tickets cost \\$5 and adult tickets cost \\$9. How many a", '5', 'the answer coincides with a printed value'],
  ['content/math/elementary-algebra/knowledge-check-01-05.md', 'The graph of $y = \\tfrac{', '(6, 4)', 'selection prompt: the answer is one of the four printed pairs, and the other three grade incorrect'],
  ['content/math/intermediate-algebra/03-graphs-and-functions/01-graph-linear-equations-in-two-variables.md', 'For the horizontal line $', 'y=3', 'horizontal line y = b: every point on it has y-coordinate b'],
  ['content/math/intermediate-algebra/03-graphs-and-functions/01-graph-linear-equations-in-two-variables.md', 'For the vertical line $x=', 'x=5', 'vertical line x = a: every point on it has x-coordinate a'],
  ['content/math/intermediate-algebra/03-graphs-and-functions/06-graphs-of-functions.md', 'Graph: $f(x)=-2$. Enter t', 'f(x)=-2', 'constant function: every point on its graph has the printed y-coordinate'],
  ['content/math/intermediate-algebra/03-graphs-and-functions/06-graphs-of-functions.md', 'Graph: $f(x)=3$. Enter th', 'f(x)=3', 'constant function: every point on its graph has the printed y-coordinate'],
  ['content/math/intermediate-algebra/05-polynomials-and-polynomial-functions/01-add-and-subtract-polynomials.md', 'The polynomial function $h(t)=-16t^2+15', '150', 'h(0) reads the printed constant off the formula, by design'],
  ['content/math/intermediate-algebra/08-roots-and-radicals/04-add-subtract-and-multiply-radical-expressions.md', 'Simplify: $3 \\sqrt[4]{x} ', '3 \\sqrt[4]{x} - 5 \\sqrt[4]{y}', 'unlike radicals do not combine: retyping the prompt IS the correct response (tools/lints.mjs carves the same case out by name)'],
  ['content/math/prealgebra/02-the-language-of-algebra/01-use-the-language-of-algebra.md', 'Using the table above, wh', '33', 'selection prompt: the MPG value is printed beside the car'],
  ['content/math/prealgebra/03-integers/01-introduction-to-integers.md', 'Evaluate $-|q|$ when $q =', 'q = -33', 'identity, not coincidence: -|q| = q whenever q <= 0; the page carries the positive-input twin that discriminates'],
  ['content/math/prealgebra/03-integers/01-introduction-to-integers.md', 'Translate into an expression with integers: the f', '5', 'the answer coincides with a printed number'],
  ['content/math/prealgebra/05-decimals/04-solve-equations-with-decimals.md', 'Determine which value is a solution of the equation $x', 'x = 1.9', 'selection prompt: the answer is one of the printed candidates, and the distractors grade incorrect'],
  ['content/math/prealgebra/05-decimals/04-solve-equations-with-decimals.md', 'Determine which value is a solution of the equation $y', 'y = 2.1', 'selection prompt: the answer is one of the printed candidates, and the distractors grade incorrect'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Find the mean of the numbers: 9', '9', 'the mean equals a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Find the median of the data set: 1', '30', 'the median IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Find the median of the data set: 43', '43', 'the median IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Find the median of the data set: 6', '45', 'the median IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Identify the mode of the data set: 1', '22', 'the mode IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Identify the mode of the data set: 2', '2', 'the mode IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Students listed the numbe', '5', 'the mode IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'The ages of the students ', '21', 'the mode IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'The number of handbags ow', '5', 'the mode IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'The number of sick days e', '2', 'the mode IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'The number of units being', '11', 'the mode IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Yen counted the number of', '10', 'the mean equals a printed datum'],
  ['content/math/prealgebra/06-percents/05-solve-proportions-and-their-applications.md', 'Phil wants to fertilize h', '4', 'the answer coincides with a printed quantity'],
  ['content/math/prealgebra/08-solving-linear-equations/01-solve-equations-using-the-subtraction-and-addition-properties-of-equality.md', 'Translate and solve: The difference of $4', '14', 'x = 14 by design; the printed constant IS the solution'],
  ['content/math/prealgebra/08-solving-linear-equations/01-solve-equations-using-the-subtraction-and-addition-properties-of-equality.md', 'Translate and solve: The difference of $7', '-8', 'a = -8 by design'],
  ['content/math/prealgebra/09-math-models-and-geometry/04-use-properties-of-rectangles-triangles-and-trapezoids.md', 'Find the area of a triangle with base 13', '13', 'the area coincides with the printed base'],
  ['content/math/prealgebra/10-polynomials/01-add-and-subtract-polynomials.md', 'Add: $5a + 7b$.', '5a + 7b', 'unlike terms do not combine: retyping the prompt IS the correct response (tools/lints.mjs carves the same case out by name)'],
  ['content/math/prealgebra/10-polynomials/01-add-and-subtract-polynomials.md', 'The polynomial $-8t^2 + 24t + 4$ gives the height, in feet, of a ball $t$ seconds after it is tossed into the air from an initial height of 4 feet. Find the height after $t = 3', '4', 'h(3)=4 coincides with the printed initial height, by design'],
  ['content/math/prealgebra/11-graphs/01-use-the-rectangular-coordinate-system.md', 'Determine which ordered p', '(1, 1)', 'selection prompt: the answer is one of the printed pairs, and the distractor grades incorrect'],
  ['content/math/prealgebra/11-graphs/03-graphing-with-intercepts.md', 'The equation $x = -7$ has', 'x = -7', 'vertical line x = a: it crosses the x-axis at that same a'],
  ['content/math/prealgebra/11-graphs/04-understand-slope-of-a-line.md', 'Use a geoboard model: wha', '-2', 'the slope coincides with a printed rise/run'],
  ['content/math/prealgebra/knowledge-check-01-06.md', 'The ages, in months, of 10 children in a preschool class are: 55, 55, 50, 51, 52, 50, 53, 51, 55, 49. Find the mo', '55', 'the mode IS a printed datum'],
  ['content/math/precalculus/05-trigonometric-functions/02-unit-circle-sine-and-cosine-functions.md', 'A certain angle $t$ corresponds to a point on the unit circle at', '\\left(-\\tfrac{\\sqrt2}{2},\\tfrac{\\sqrt2}{2}\\right)', 'the unit-circle identification itself: $(\\cos t,\\sin t)$ IS the point, so on the unit circle the printed point states its own answer and copying it is the correct response. The source Try It (m49372, after Example 1) is written this way deliberately — it follows the example that establishes $\\cos t=x$ and $\\sin t=y$ — and no answerForm can separate the two, because the response and the printed span are the same value in the same shape'],
];

/**
 * The spelling a MathLive field emits for the source's compact TeX: \tfrac
 * renamed \frac and every single-token \frac/\sqrt argument braced —
 * `\tfrac12` → `\frac{1}{2}`, `\frac1{16}` → `\frac{1}{16}`, `\sqrt2` →
 * `\sqrt{2}`. The compute engine rejects the compact source spellings, so a
 * source-only replay reports 'invalid' for exactly the input that grades
 * 'correct' once a learner types it.
 */
export function mathliveSpelling(tex) {
  let out = tex.replace(/\\[td]frac(?![a-zA-Z])/g, '\\frac')
    .replace(/(\\sqrt)(\s*\[[^\]]*\])?\s*([0-9a-zA-Z])/g, '$1$2{$3}');
  let prev;
  do {
    prev = out;
    out = out
      .replace(/\\frac\s*([0-9a-zA-Z])\s*([0-9a-zA-Z])/g, '\\frac{$1}{$2}')
      .replace(/\\frac\s*([0-9a-zA-Z])\s*\{/g, '\\frac{$1}{')
      .replace(/\\frac\s*\{([^{}]*)\}\s*([0-9a-zA-Z])/g, '\\frac{$1}{$2}');
  } while (out !== prev);
  return out;
}

/**
 * The skip classes, each with the UNIT it counts. Mixing units in one comma
 * list was its own small dishonesty: two of the five old classes counted
 * fillins and three counted spans, and the summary printed them side by side
 * as though they were the same measurement.
 */
export const SKIP_CLASSES = [
  { key: 'allowlisted span', unit: 'span' },
  { key: 'form-rejected span', unit: 'span' },
];
export const SKIP_KEYS = SKIP_CLASSES.map(({ key }) => key);

function replayFile(file) {
  const failures = [];
  let replayed = 0;
  const skipped = Object.fromEntries(SKIP_KEYS.map((c) => [c, 0]));
  const rel = relative('.', file).split('\\').join('/');
  const src = readFileSync(file, 'utf8');
  for (const sc of shortcodes(src, 'fillin')) {
    const q = sc.params.question || '';
    const answer = sc.params.answer || '';
    if (!q || !answer) continue;
    // Allowlist entries are read per SPAN, so a fillin with one sound
    // coincidence still has every other span it prints replayed.
    const exempt = new Set(SOUND_COINCIDENCES
      .filter(([f, prefix]) => rel.endsWith(f) && q.startsWith(prefix))
      .map(([, , span]) => span));
    const spans = [];
    let prose = q;
    for (const s of mathSpans(q, { allowNewlines: true })) {
      spans.push(s.tex);
      prose = prose.slice(0, s.index) + ' '.repeat(s.length) + prose.slice(s.index + s.length);
    }
    for (const m of prose.matchAll(/(?<![\w.,−-])[−-]?\d+(?:\.\d+)?(?!\.?\d|\w)/g)) spans.push(m[0]);
    const seen = new Set();
    for (const raw of spans) {
      const value = raw.trim();
      if (!value || seen.has(value)) continue;
      seen.add(value);
      if (exempt.has(value)) { skipped['allowlisted span'] += 1; continue; }
      // The field re-emits compact source TeX in normalized spelling, so
      // both spellings must fail — the learner can only ever submit the
      // normalized one.
      const spellings = [...new Set([value, mathliveSpelling(value)])];
      let graded = false;
      for (const spelling of spellings) {
        let admitted;
        try {
          admitted = checkFormAsGraded(spelling, sc.params.answerForm);
        } catch {
          // Defensive only: measured 0 throws across all 11,221 spellings the
          // corpus prints. A spelling the form check cannot read is not one a
          // learner could submit, and it lands in the same counted class
          // rather than vanishing.
          continue;
        }
        if (!admitted) continue;
        // The form pre-filter is itself an exclusion: a span the exercise's
        // answerForm rejects never reaches the grader, so counting it as
        // "replayed" would report coverage the run does not have. It is
        // counted under its own class instead — and `replayed` moves only
        // when a span is really graded.
        graded = true;
        try {
          if (checkAnswer(spelling, answer, { mode: sc.params.answerMode, form: sc.params.answerForm }) === 'correct') {
            const line = src.slice(0, sc.index).split('\n').length;
            failures.push(`${rel}:${line} accepts its own printed ${JSON.stringify(spelling.slice(0, 50))} (answerForm=${JSON.stringify(sc.params.answerForm || '')})`);
            break;
          }
        } catch { /* an unparseable spelling cannot be typed back as an answer */ }
      }
      if (graded) replayed += 1;
      else skipped['form-rejected span'] += 1;
    }
  }
  return { replayed, failures, skipped };
}

/**
 * The command line, parsed rather than positionally assumed.
 *
 * `argv[2]` used to BE the content root unconditionally, so
 * `verify-replay.mjs --min-replayed 6578` read `--min-replayed` as the root
 * and died on `ENOENT: scandir '--min-replayed/math'`, while the same flag
 * written after the root was silently ignored — a floor that never fired is
 * worse than no floor, because the summary still says the run passed.
 *
 * `--min-replayed N` is a FLOOR, deliberately not the exact match
 * `--min-verified` uses. An increase is ordinary growth (new content, or a
 * form predicate admitting more spans); a DECREASE is the failure mode worth
 * catching, because it means the gate quietly stopped reading spans it used
 * to read. Exact matching here would go red on every authoring commit and be
 * bumped without being read, which is how a ratchet becomes a rubber stamp.
 */
export function parseReplayArgs(argv) {
  let root = null;
  let minReplayed = null;
  let file = null;
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--file') {
      file = argv[i + 1] ?? null;
      i += 1;
    } else if (arg.startsWith('--min-replayed')) {
      const written = arg.includes('=') ? arg.slice(arg.indexOf('=') + 1) : argv[++i];
      if (!/^\d+$/.test(String(written ?? ''))) {
        throw new Error(`--min-replayed needs a whole number, got ${JSON.stringify(written ?? null)}`);
      }
      minReplayed = Number(written);
    } else if (arg.startsWith('--')) {
      throw new Error(`unknown option ${JSON.stringify(arg)} (usage: verify-replay.mjs [content-root] [--min-replayed N])`);
    } else if (root === null) {
      root = arg;
    } else {
      throw new Error(`unexpected argument ${JSON.stringify(arg)} (the content root is already ${JSON.stringify(root)})`);
    }
  }
  return { root: root ?? 'content', minReplayed, file };
}

async function orchestrate({ root, minReplayed }) {
  const files = walkMarkdown(`${root}/math`);
  const self = fileURLToPath(import.meta.url);
  const workers = Math.max(1, availableParallelism() - 1);
  const failures = [];
  let replayed = 0;
  const skipped = Object.fromEntries(SKIP_KEYS.map((c) => [c, 0]));
  const queue = [...files];
  const runOne = (file) => new Promise((resolve) => {
    execFile(process.execPath, [self, '--file', file], { timeout: 180_000, maxBuffer: 8 * 1024 * 1024 }, (error, stdout) => {
      if (error && error.killed) {
        failures.push(`${file}: replay timed out after 180s — a printed span grades unboundedly slowly`);
      } else if (error && !stdout) {
        failures.push(`${file}: replay worker failed (${String(error.message).split('\n')[0]})`);
      }
      if (stdout) {
        try {
          const result = JSON.parse(stdout);
          replayed += result.replayed;
          failures.push(...result.failures);
          for (const c of SKIP_KEYS) skipped[c] += result.skipped?.[c] ?? 0;
        } catch {
          failures.push(`${file}: replay worker produced unreadable output`);
        }
      }
      resolve();
    });
  });
  const lanes = Array.from({ length: workers }, async () => {
    while (queue.length) await runOne(queue.shift());
  });
  await Promise.all(lanes);
  if (failures.length) {
    console.error(`✖ question-math replay found ${failures.length} problem(s):`);
    failures.slice(0, 40).forEach((f) => console.error(`  · ${f}`));
    console.error('  Fix with an answerForm the copied prompt fails, or record a SOUND coincidence in tools/verify-replay.mjs with its reason.');
    process.exit(1);
  }
  // Printed only on the success path — which is why the floor is checked
  // here rather than by a caller grepping stdout: the failure branch exits
  // above without ever printing a count, so a gate that parsed the line
  // would be parsing a line that does not exist.
  // Every class name ends in the unit it counts, so one comma list can no
  // longer read as one measurement — `422 list-keyed fillins` and `59
  // allowlisted spans` say what they are counting.
  const skipReport = SKIP_CLASSES
    .map(({ key }) => `${skipped[key]} ${key}${skipped[key] === 1 ? '' : 's'}`)
    .join(', ');
  console.log(`✓ question-math replay: ${replayed} scalar printed spans replayed across ${files.length} files (source + normalized spellings), none accepted (${SOUND_COINCIDENCES.length} recorded sound coincidences)`);
  console.log(`  not replayed: ${skipReport}`);
  if (minReplayed !== null && replayed < minReplayed) {
    console.error(`✖ replayed ${replayed} spans, below the ${minReplayed} floor — the gate is reading less of the corpus than it used to. Find what stopped being replayed before lowering this.`);
    process.exit(1);
  }
}

// Run only when executed as a script: the predicates and SKIP_CLASSES are
// importable, and an import must never launch a corpus-wide replay.
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  let options;
  try {
    options = parseReplayArgs(process.argv.slice(2));
  } catch (error) {
    console.error(`✖ ${error.message}`);
    process.exit(2);
  }
  if (options.file) {
    process.stdout.write(JSON.stringify(replayFile(options.file)));
  } else {
    orchestrate(options);
  }
}
