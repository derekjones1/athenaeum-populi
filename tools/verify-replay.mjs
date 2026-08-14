/**
 * Question-math replay gate: every math span (and prose number) printed in a
 * fillin question is replayed through the real grader as if a learner had
 * typed it. A span that grades 'correct' means the exercise is passable by
 * copying its own prompt — the class that let "Simplify $8(4x)$" accept
 * `8(4x)` — unless the exercise is on the allowlist below.
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

// file (repo-relative) + the exact start of the question, + why it is sound.
const SOUND_COINCIDENCES = [
  ['content/math/elementary-algebra/01-foundations/08-the-real-numbers.md', 'For the given numbers $-3$, $-\\sqrt{2}$,', 'selection prompt: the answer is one of the printed numbers'],
  ['content/math/elementary-algebra/01-foundations/08-the-real-numbers.md', 'For each number given, identify whether it is rational or irrational', 'selection prompt'],
  ['content/math/elementary-algebra/01-foundations/08-the-real-numbers.md', 'Locate the following on a number line', 'selection prompt'],
  ['content/math/prealgebra/08-solving-linear-equations/01-solve-equations-using-the-subtraction-and-addition-properties-of-equality.md', 'Translate and solve: The difference of $4x$ and $3x$', 'x = 14 by design; the printed constant IS the solution'],
  ['content/math/prealgebra/08-solving-linear-equations/01-solve-equations-using-the-subtraction-and-addition-properties-of-equality.md', 'Translate and solve: The difference of $7a$ and $6a$', 'a = -8 by design'],
  ['content/math/elementary-algebra/02-solving-linear-equations-and-inequalities/01-solve-equations-using-the-subtraction-and-addition-properties-of-equality.md', 'Translate and solve: The difference of 4x and 3x is 14.', 'x = 14 by design'],
  ['content/math/elementary-algebra/02-solving-linear-equations-and-inequalities/01-solve-equations-using-the-subtraction-and-addition-properties-of-equality.md', 'Translate and solve: The difference of 7a and 6a is -8.', 'a = -8 by design'],
  ['content/math/elementary-algebra/03-math-models/02-solve-percent-applications.md', 'Solve. The mix Ricardo plans to use to make brownies', 'the answer coincides with a printed percent'],
  ['content/math/elementary-algebra/03-math-models/02-solve-percent-applications.md', 'Hang borrowed \\$7,500 from her parents', 'the answer coincides with a printed value'],
  ['content/math/elementary-algebra/03-math-models/04-solve-geometry-applications-triangles-rectangles-and-the-pythagorean-theorem.md', 'One angle of a right triangle measures 45 degrees.', '45-45-90: the other acute angle equals the printed one'],
  ['content/math/elementary-algebra/03-math-models/04-solve-geometry-applications-triangles-rectangles-and-the-pythagorean-theorem.md', 'The measure of one angle of a right triangle is 30 degrees', 'the answer coincides with the printed 30'],
  ['content/math/elementary-algebra/04-graphs/02-graph-linear-equations-in-two-variables.md', 'For the equation y = -3 (not y = -3x)', 'constant function: y equals the printed constant everywhere'],
  ['content/math/elementary-algebra/04-graphs/04-understand-slope-of-a-line.md', 'Use the slope formula to find the slope of the line throug', 'the slope coincides with a printed coordinate'],
  ['content/math/elementary-algebra/05-systems-of-linear-equations/01-solve-systems-of-equations-by-graphing.md', 'Manny is making 12 quarts of orange juice', 'the answer coincides with a printed quantity'],
  ['content/math/elementary-algebra/05-systems-of-linear-equations/05-solve-mixture-applications-with-systems-of-equations.md', 'LeBron needs 150 milliliters of a 30% solution', 'the answer coincides with the printed concentration'],
  ['content/math/elementary-algebra/08-rational-expressions-and-equations/08-solve-uniform-motion-and-work-applications.md', 'Jazmine trained for $3$ hours total.', 'the rate coincides with a printed distance'],
  ['content/math/elementary-algebra/08-rational-expressions-and-equations/08-solve-uniform-motion-and-work-applications.md', 'Hamilton rode $12$ miles downhill', 'the rate coincides with the printed distance'],
  ['content/math/elementary-algebra/08-rational-expressions-and-equations/08-solve-uniform-motion-and-work-applications.md', 'Corey shovels the snow in $4$ hours', 'the answer coincides with a printed time'],
  ['content/math/elementary-algebra/knowledge-check-01-05.md', 'Liz paid \\$160 for 28 tickets', 'the answer coincides with a printed value'],
  ['content/math/intermediate-algebra/05-polynomials-and-polynomial-functions/01-add-and-subtract-polynomials.md', 'The polynomial function $h(t)=-16t^2+150$', 'h(0) reads the printed constant off the formula, by design'],
  ['content/math/prealgebra/10-polynomials/01-add-and-subtract-polynomials.md', 'The polynomial $-8t^2 + 24t + 4$', 'h(3)=4 coincides with the printed initial height, by design'],
  ['content/math/prealgebra/03-integers/01-introduction-to-integers.md', 'Translate into an expression with integers: the footbal', 'the answer coincides with a printed number'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Find the mean of the numbers: 9, 13, 11, 7, 5', 'the mean equals a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Yen counted the number of emails', 'the mean equals a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Find the median of the data set: 43, 38, 51, 40, 46', 'the median IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Find the median of the data set: 15, 35, 20, 45, 50, 25', 'the median IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'The number of sick days employees used last year', 'the mode IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'The number of handbags owned by women in a book club', 'the mode IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'The ages of the students in a statistics class', 'the mode IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Students listed the number of members in their househol', 'the mode IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Find the median of the data set: 65, 56, 35, 34, 44, 39', 'the median IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'The number of units being taken by students in one clas', 'the mode IS a printed datum'],
  ['content/math/prealgebra/05-decimals/05-averages-and-probability.md', 'Identify the mode of the data set', 'the mode IS a printed datum'],
  ['content/math/prealgebra/06-percents/05-solve-proportions-and-their-applications.md', 'Phil wants to fertilize his lawn.', 'the answer coincides with a printed quantity'],
  ['content/math/prealgebra/09-math-models-and-geometry/04-use-properties-of-rectangles-triangles-and-trapezoids.md', 'Find the area of a triangle with base 13 inches', 'the area coincides with the printed base'],
  ['content/math/prealgebra/11-graphs/04-understand-slope-of-a-line.md', 'Use a geoboard model: what is the slope of a line with', 'the slope coincides with a printed rise/run'],
  ['content/math/prealgebra/knowledge-check-01-06.md', 'The ages, in months, of 10 children in a preschool clas', 'the median IS a printed datum'],
  ['content/math/prealgebra/02-the-language-of-algebra/01-use-the-language-of-algebra.md', 'Using the table above, which car has the greater MPG', 'selection prompt: the MPG value is printed beside the car'],
  ['content/math/elementary-algebra/01-foundations/01-use-the-language-of-algebra.md', 'Using the table above, which car has the greater MPG', 'selection prompt'],
];

function replayFile(file) {
  const failures = [];
  let replayed = 0;
  {
    const rel = relative('.', file).split('\\').join('/');
    const src = readFileSync(file, 'utf8');
    for (const sc of shortcodes(src, 'fillin')) {
      const q = sc.params.question || '';
      const answer = sc.params.answer || '';
      if (!q || !answer) continue;
      if (sc.params.answerMode === 'unordered' || answer.includes(',')) continue;
      if (SOUND_COINCIDENCES.some(([f, prefix]) => rel.endsWith(f) && q.startsWith(prefix))) continue;
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
        if (value.includes('=') || value.includes('\\text') || value.includes(',')) continue;
        // sound by construction: a variable span identical to the answer
        // (the exercise asks the learner to recognize nothing combines)
        if (/[A-Za-z]/.test(value.replace(/\\[a-zA-Z]+/g, ' '))
          && value.replace(/\s+/g, '') === answer.replace(/\s+/g, '')) continue;
        replayed += 1;
        try {
          if (!checkFormAsGraded(value, sc.params.answerForm)) continue;
          if (checkAnswer(value, answer, { mode: sc.params.answerMode, form: sc.params.answerForm }) === 'correct') {
            const line = src.slice(0, sc.index).split('\n').length;
            failures.push(`${rel}:${line} accepts its own printed ${JSON.stringify(value.slice(0, 50))} (answerForm=${JSON.stringify(sc.params.answerForm || '')})`);
            break;
          }
        } catch { /* an unparseable span cannot be typed back as an answer */ }
      }
    }
  }
  return { replayed, failures };
}

async function orchestrate() {
  const root = process.argv[2] || 'content';
  const files = walkMarkdown(`${root}/math`);
  const self = fileURLToPath(import.meta.url);
  const workers = Math.max(1, availableParallelism() - 1);
  const failures = [];
  let replayed = 0;
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
  console.log(`✓ question-math replay: ${replayed} printed spans replayed across ${files.length} files, none accepted (${SOUND_COINCIDENCES.length} recorded sound coincidences)`);
}

if (process.argv[2] === '--file') {
  const result = replayFile(process.argv[3]);
  process.stdout.write(JSON.stringify(result));
} else {
  orchestrate();
}
