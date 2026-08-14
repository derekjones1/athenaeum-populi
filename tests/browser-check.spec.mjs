import { test, expect } from '@playwright/test';
import {
  clearMathField, focusMathField, gotoBuiltPage, waitForUpgrade,
} from './helpers.mjs';

/**
 * End-to-end proof that the grader fixes hold in the real page, driven through
 * real keystrokes into the real MathLive field. Node-level unit tests live in
 * assets/js/lib/check-answer.test.mjs; these guard the integration, where the
 * field's own LaTeX rewriting is what produces the broken shape.
 *
 * Every navigation goes through `gotoBuiltPage`, which asserts the response
 * and refuses a dev-served or stale page — the same gate the accessibility
 * suite applies, and the one `docs/architecture.md` claims for the suite as a
 * whole.
 */

test('a fraction typed with "/" grades correct (lone-d numerator)', async ({ page }) => {
  await gotoBuiltPage(page, '/math/prealgebra/09-math-models-and-geometry/07-solve-a-formula-for-a-specific-variable/');

  const card = page.locator('fill-in[data-answer="r=d/t"]');
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  await focusMathField(page, field);
  await page.keyboard.type('d/t', { delay: 20 });

  // MathLive turns the typed "/" into \frac{d}{t} — the exact shape the
  // Compute Engine used to read as Leibniz derivative notation and reject as
  // invalid, marking a correct learner wrong.
  expect(await field.evaluate((el) => el.value)).toContain('\\frac');

  await card.getByRole('button', { name: /check/i }).click();
  // Assert the component's own state, not page text: /correct/i would also
  // match the word "incorrect" and pass on a wrong verdict.
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
  await expect(card.locator('.ap-fillin-feedback')).toHaveText(/^Correct\b/);
});

test('a sequence missing a term is rejected (comma-list false accept)', async ({ page }) => {
  await gotoBuiltPage(page, '/math/intermediate-algebra/12-sequences-series-and-binomial-theorem/01-sequences/');

  const card = page.locator('fill-in[data-answer="1,-8,27,-64,125"]');
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  await focusMathField(page, field);
  // Only FOUR terms: the last two are typed without their separating comma.
  // The authored five-term answer used to mangle into this same four-member
  // shape (its "-64,125" tail read as the number -64125), so this wrong answer
  // was graded correct.
  await page.keyboard.type('1,-8,27,-64125', { delay: 20 });

  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('incorrect');
});

test('a right value in the wrong form is held back, not accepted (answerForm)', async ({ page }) => {
  await gotoBuiltPage(page, '/math/elementary-algebra/01-foundations/05-visualize-fractions/');

  // "Simplify: -42/54" — the printed fraction IS the correct value, so value
  // grading alone accepted the prompt retyped back. answerForm="lowest-terms"
  // is what makes the exercise gradeable at all.
  // Selected on the question, not the answer: a backslash in a CSS attribute
  // value is an escape sequence, so `data-answer="-\frac{7}{9}"` never matches.
  const card = page.locator('fill-in[data-question*="42}{54"]');
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  await focusMathField(page, field);

  await page.keyboard.type('-42/54', { delay: 20 });
  await card.getByRole('button', { name: /check/i }).click();
  // Not 'correct' (it is the prompt) and not 'incorrect' (the value is right):
  // the learner is told which step is missing.
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('form');
  await expect(card.locator('.ap-fillin-feedback')).toHaveText(/lowest terms/i);

  await clearMathField(field);
  await page.keyboard.type('-7/9', { delay: 20 });
  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
});

test('a re-typed polynomial is held back on a factoring prompt (answerForm="factored")', async ({ page }) => {
  await gotoBuiltPage(page, '/math/elementary-algebra/07-factoring/02-factor-trinomials-of-the-form-x2-bx-c/');

  // The symbolic counterpart of the test above. `x^2+6x+8` and `(x+2)(x+4)`
  // are the same value, so this prompt was passable by retyping it until
  // `factored` graded the shape. This is the only place the whole stack runs
  // together: MathLive's real emission for typed parentheses, the shared
  // compute engine, and checkForm's parse-based predicate.
  const card = page.locator('fill-in[data-question*="6x + 8"]').first();
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  await focusMathField(page, field);

  await page.keyboard.type('x^2+6x+8', { delay: 20 });
  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('form');
  await expect(card.locator('.ap-fillin-feedback')).toHaveText(/factored form/i);

  await clearMathField(field);
  await page.keyboard.type('(x+2)(x+4)', { delay: 20 });
  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
});

test('a re-typed rational expression is held back until reduced (answerForm="reduced-fraction")', async ({ page }) => {
  await gotoBuiltPage(page, '/math/elementary-algebra/08-rational-expressions-and-equations/01-simplify-rational-expressions/');

  // The last §6 class: `\frac{x^2-x-2}{x^2-3x+2}` and `\frac{x+1}{x-1}` are
  // the same value, so this prompt was passable by retyping it until the
  // polynomial-gcd predicate graded the shape. Exercised end to end because
  // MathLive rewrites a typed `/` into its own `\frac` emission, and the
  // predicate reads exactly those written halves.
  const card = page.locator('fill-in[data-question*="x^2-x-2"]').first();
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  await focusMathField(page, field);

  await page.keyboard.type('(x^2-x-2)/(x^2-3x+2)', { delay: 20 });
  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('form');
  await expect(card.locator('.ap-fillin-feedback')).toHaveText(/common factors cancelled/i);

  await clearMathField(field);
  await page.keyboard.type('(x+1)/(x-1)', { delay: 20 });
  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
});

/**
 * The other two interactive components. Until now this file was 100% fill-in:
 * `multiple-choice` and `graph-plot` had no end-to-end coverage at all, so
 * their grading paths were exercised only by Node unit tests against
 * check-graph.mjs and by axe scans that never clicked anything.
 */

test('a multiple-choice option grades wrong, then right', async ({ page }) => {
  await gotoBuiltPage(
    page,
    '/math/elementary-algebra/09-roots-and-radicals/01-simplify-and-use-square-roots/',
  );

  // Selected by its authored answer, the way the fill-in tests select by
  // data-answer: a positional locator would silently retarget when the
  // section's exercises are reordered.
  const card = page.locator('multiple-choice[data-answer="5"]');
  await expect(card).toHaveCount(1);
  await waitForUpgrade(card, (el) => (
    Boolean(customElements.get('multiple-choice')) && el.querySelectorAll('.ap-mc-option').length > 0
  ));
  await card.scrollIntoViewIfNeeded();

  const wrong = card.locator('.ap-mc-option', { hasText: /^7$/ });
  const right = card.locator('.ap-mc-option[data-value="5"]');

  await wrong.click();
  await expect(card.locator('.ap-mc-feedback')).toHaveText(/^Not quite/);
  // A wrong choice must leave every option answerable — the exercise is
  // retryable, and nothing is disabled yet.
  expect(await card.evaluate((el) => (
    [...el.querySelectorAll('.ap-mc-option')].some((b) => b.disabled)
  ))).toBe(false);

  await right.click();
  await expect(card.locator('.ap-mc-feedback')).toHaveText(/^Correct/);
  // Assert the component's own state, not page text: /correct/i would also
  // match "Not quite" nothing, but "incorrect" elsewhere on the page would.
  expect(await card.evaluate((el) => el.done)).toBe(true);
  // EVERY option is locked, and locked ACCESSIBLY: aria-disabled on all of
  // them (the chosen one included — re-activating it also does nothing) and
  // never native `disabled`, which drops a button from the tab order and,
  // in some screen-reader/browser pairs, from the accessibility tree — so a
  // reader could no longer review the options they chose among.
  const states = await card.evaluate((el) => (
    [...el.querySelectorAll('.ap-mc-option')]
      .map((b) => ({ disabled: b.disabled, ariaDisabled: b.getAttribute('aria-disabled') }))
  ));
  expect(states.length).toBeGreaterThan(1);
  for (const option of states) {
    expect(option.disabled).toBe(false);
    expect(option.ariaDisabled).toBe('true');
  }
  // The done guard, not the attribute, blocks interaction. force: true
  // bypasses Playwright's own aria-disabled actionability refusal so the
  // click actually reaches the component.
  await wrong.click({ force: true });
  await expect(card.locator('.ap-mc-feedback')).toHaveText(/^Correct/);
});

test('a graph-plot line is graded through the keyboard path', async ({ page }) => {
  await gotoBuiltPage(
    page,
    '/math/elementary-algebra/04-graphs/02-graph-linear-equations-in-two-variables/',
  );

  // y = 3x - 1, on a ±12 grid at snap 1.
  const card = page.locator('graph-plot').filter({
    has: page.locator('.ap-graphplot-question'),
  }).nth(0);
  await expect(card).toHaveCount(1);
  await waitForUpgrade(card, (el) => Boolean(el.g) && typeof el.buildGraph === 'function');
  await expect
    .poll(async () => card.evaluate((el) => JSON.stringify(el.answer)))
    .toBe(JSON.stringify({ slope: 3, intercept: -1 }));
  await card.scrollIntoViewIfNeeded();

  const addPoint = card.getByRole('button', { name: 'Add point' });
  const check = card.getByRole('button', { name: 'Check' });

  // The keyboard path, which no test covered: "Add point" places a point at a
  // deterministic free grid location and focuses its handle, arrow keys move
  // it by one snap step, and Check grades the object the points determine.
  await addPoint.click();
  await addPoint.click();
  await expect.poll(async () => card.evaluate((el) => el.pts.length)).toBe(2);

  // Drive each handle from wherever it landed to a chosen lattice point, so
  // the test does not depend on findFreeGridPoint's ordering.
  const moveTo = async (index, target) => {
    const handle = card.locator('circle[role="button"]').nth(index);
    await handle.focus();
    for (let guard = 0; guard < 40; guard += 1) {
      const at = await card.evaluate((el, i) => el.pts[i], index);
      if (at[0] === target[0] && at[1] === target[1]) return;
      if (at[0] < target[0]) await page.keyboard.press('ArrowRight');
      else if (at[0] > target[0]) await page.keyboard.press('ArrowLeft');
      else if (at[1] < target[1]) await page.keyboard.press('ArrowUp');
      else await page.keyboard.press('ArrowDown');
    }
    throw new Error(`point ${index} never reached ${target}`);
  };

  // (0,-1) and (1,0): the intercept is right, the slope is 1 rather than 3.
  // A diagnostic status, not a bare "incorrect" — teaching which half is right
  // is the whole reason check-graph returns more than a boolean.
  await moveTo(0, [1, 0]);
  await moveTo(1, [0, -1]);
  await check.click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('interceptRight');

  // Raise the first point to (1,2): slope 3 through the same intercept.
  await moveTo(0, [1, 2]);
  await check.click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
  await expect(card.locator('.ap-fillin-feedback')).toHaveText(/^Correct\b/);

  // Success disables all three controls; the focused Check button must hand
  // focus to the result, not drop it to <body>.
  expect(await page.evaluate(() => document.activeElement !== document.body)).toBe(true);
  expect(await card.evaluate((el) => el.contains(document.activeElement))).toBe(true);
});

test('a correct Enter-key submission keeps focus inside the exercise', async ({ page }) => {
  await gotoBuiltPage(page, '/math/prealgebra/09-math-models-and-geometry/07-solve-a-formula-for-a-specific-variable/');

  // Submitting from the math-field itself (Enter → insertLineBreak) is the
  // path the Check-button focus rescue never covered: readonly + the sink
  // teardown dropped focus to <body> right after the learner succeeded.
  const card = page.locator('fill-in[data-answer="r=d/t"]');
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  await focusMathField(page, field);
  await page.keyboard.type('d/t', { delay: 20 });
  await page.keyboard.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
  expect(await page.evaluate(() => document.activeElement !== document.body)).toBe(true);
  expect(await card.evaluate((el) => el.contains(document.activeElement))).toBe(true);
});
