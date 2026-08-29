/**
 * Differential test: the runtime grader and the corpus oracle must agree.
 *
 * `assets/js/lib/math/check-answer.mjs` decides what a learner sees;
 * `tools/verify/verify-answers.mjs` decides whether the authored answer key is right.
 * They are deliberately independent — different comparators, different
 * tolerances (1e-9 absolute vs 1e-8 relative), and the oracle's header records
 * that it never calls `simplify()`/`isEqual()` on purpose. Merging them would
 * make the corpus cross-check vacuous, so they stay apart.
 *
 * The risk that independence creates is that they drift into disagreeing
 * without anything noticing: a change to one comparator's tolerance, sampling,
 * or guard set can flip a verdict on one side only, and the corpus run would
 * still report 0 failures because it only ever asks itself.
 *
 * So this test asserts the same LaTeX pairs through BOTH engines and compares
 * verdicts only. Nothing here imports one module's comparator into the other's
 * path: check-answer sees `checkAnswer`, verify-answers sees `parseMath` +
 * `equivalentNumerically`, and the only thing shared is the fixture table.
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import { checkAnswer } from '../../assets/js/lib/math/check-answer.mjs';
import { parseMath, equivalentNumerically } from './verify-answers.mjs';
import { EQUIVALENCE_FIXTURES } from './equivalence-fixtures.mjs';

const label = ({ a, b }) => `${a}  ~  ${b}`;

test('the fixture table stays worth running', () => {
  assert.ok(EQUIVALENCE_FIXTURES.length >= 30,
    'the differential table is the only thing holding the two comparators together — keep it substantial');
  // A table of nothing but agreements-on-true proves very little; both
  // directions and the out-of-scope verdict all have to be represented.
  const equivalent = EQUIVALENCE_FIXTURES.filter((f) => f.equivalent).length;
  const different = EQUIVALENCE_FIXTURES.length - equivalent;
  const outOfScope = EQUIVALENCE_FIXTURES.filter((f) => f.expectNull).length;
  assert.ok(equivalent >= 10, 'the table must carry equivalent pairs');
  assert.ok(different >= 10, 'the table must carry non-equivalent pairs — a comparator that says "correct" to everything has to fail here');
  assert.ok(outOfScope >= 3, 'the table must pin what the oracle declines to read');
  for (const fixture of EQUIVALENCE_FIXTURES) {
    assert.ok(fixture.note, `every fixture records why it exists: ${label(fixture)}`);
  }
});

test('the runtime grader agrees with the fixture table', async (t) => {
  for (const fixture of EQUIVALENCE_FIXTURES) {
    await t.test(label(fixture), () => {
      const expected = fixture.equivalent ? 'correct' : 'incorrect';
      assert.equal(
        checkAnswer(fixture.a, fixture.b),
        expected,
        `checkAnswer must grade this ${expected} — ${fixture.note}`,
      );
    });
  }
});

test('the corpus oracle agrees with the fixture table', async (t) => {
  for (const fixture of EQUIVALENCE_FIXTURES) {
    await t.test(label(fixture), () => {
      const left = parseMath(fixture.a);
      const right = parseMath(fixture.b);
      assert.ok(left, `verify-answers must be able to parse ${fixture.a}`);
      assert.ok(right, `verify-answers must be able to parse ${fixture.b}`);

      const { equal } = equivalentNumerically(left, right);
      if (fixture.expectNull) {
        assert.equal(
          equal,
          null,
          `the oracle must report this out of scope rather than guess — ${fixture.note}`,
        );
        return;
      }
      // `null` here is its own failure: a pair the oracle used to decide and
      // now declines is silent scope shrink, which is what lets a wrong answer
      // key sail through `npm run verify:answers` with 0 failures.
      assert.equal(
        equal,
        fixture.equivalent,
        `the oracle must decide this ${fixture.equivalent} — ${fixture.note}`,
      );
    });
  }
});
