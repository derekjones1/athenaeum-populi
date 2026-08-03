import { test, expect } from '@playwright/test';

/**
 * End-to-end proof that the two grader fixes hold in the real page, driven
 * through real keystrokes into the real MathLive field. Node-level unit tests
 * live in assets/js/lib/check-answer.test.mjs; these guard the integration,
 * where the field's own LaTeX rewriting is what produces the broken shape.
 */

test('a fraction typed with "/" grades correct (lone-d numerator)', async ({ page }) => {
  await page.goto('/math/prealgebra/09-math-models-and-geometry/07-solve-a-formula-for-a-specific-variable/', { waitUntil: 'networkidle' });

  const card = page.locator('fill-in[data-answer="r=d/t"]');
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  // The MathLive bundle is lazy-loaded, so the element exists in the shell
  // before it can accept keystrokes. Wait for the upgrade, not just the tag.
  await expect
    .poll(async () => field.evaluate((el) => typeof el.executeCommand === 'function'), { timeout: 20000 })
    .toBe(true);
  await field.scrollIntoViewIfNeeded();
  await field.click();
  // MathLive takes focus asynchronously; typing before it lands drops
  // keystrokes on the body.
  await expect
    .poll(async () => field.evaluate((el) => document.activeElement === el), { timeout: 10000 })
    .toBe(true);
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
  await page.goto('/math/intermediate-algebra/12-sequences-series-and-binomial-theorem/01-sequences/', { waitUntil: 'networkidle' });

  const card = page.locator('fill-in[data-answer="1,-8,27,-64,125"]');
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  // The MathLive bundle is lazy-loaded, so the element exists in the shell
  // before it can accept keystrokes. Wait for the upgrade, not just the tag.
  await expect
    .poll(async () => field.evaluate((el) => typeof el.executeCommand === 'function'), { timeout: 20000 })
    .toBe(true);
  await field.scrollIntoViewIfNeeded();
  await field.click();
  // MathLive takes focus asynchronously; typing before it lands drops
  // keystrokes on the body.
  await expect
    .poll(async () => field.evaluate((el) => document.activeElement === el), { timeout: 10000 })
    .toBe(true);
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
  await page.goto('/math/elementary-algebra/01-foundations/05-visualize-fractions/', { waitUntil: 'networkidle' });

  // "Simplify: -42/54" — the printed fraction IS the correct value, so value
  // grading alone accepted the prompt retyped back. answerForm="lowest-terms"
  // is what makes the exercise gradeable at all.
  // Selected on the question, not the answer: a backslash in a CSS attribute
  // value is an escape sequence, so `data-answer="-\frac{7}{9}"` never matches.
  const card = page.locator('fill-in[data-question-plain*="42}{54"]');
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  await expect
    .poll(async () => field.evaluate((el) => typeof el.executeCommand === 'function'), { timeout: 20000 })
    .toBe(true);
  await field.scrollIntoViewIfNeeded();
  await field.click();
  await expect
    .poll(async () => field.evaluate((el) => document.activeElement === el), { timeout: 10000 })
    .toBe(true);

  await page.keyboard.type('-42/54', { delay: 20 });
  await card.getByRole('button', { name: /check/i }).click();
  // Not 'correct' (it is the prompt) and not 'incorrect' (the value is right):
  // the learner is told which step is missing.
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('form');
  await expect(card.locator('.ap-fillin-feedback')).toHaveText(/lowest terms/i);

  // Clear through MathLive's own editing commands: assigning .value leaves the
  // caret inside the old fraction, so the next keystrokes nest instead of
  // replacing.
  await field.evaluate((el) => {
    el.focus();
    el.executeCommand('selectAll');
    el.executeCommand('deleteBackward');
  });
  await expect.poll(async () => field.evaluate((el) => el.value)).toBe('');
  await page.keyboard.type('-7/9', { delay: 20 });
  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
});

test('a re-typed polynomial is held back on a factoring prompt (answerForm="factored")', async ({ page }) => {
  await page.goto('/math/elementary-algebra/07-factoring/02-factor-trinomials-of-the-form-x2-bx-c/', { waitUntil: 'networkidle' });

  // The symbolic counterpart of the test above. `x^2+6x+8` and `(x+2)(x+4)`
  // are the same value, so this prompt was passable by retyping it until
  // `factored` graded the shape. This is the only place the whole stack runs
  // together: MathLive's real emission for typed parentheses, the shared
  // compute engine, and checkForm's parse-based predicate.
  const card = page.locator('fill-in[data-question-plain*="6x + 8"]').first();
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  await expect
    .poll(async () => field.evaluate((el) => typeof el.executeCommand === 'function'), { timeout: 20000 })
    .toBe(true);
  await field.scrollIntoViewIfNeeded();
  await field.click();
  await expect
    .poll(async () => field.evaluate((el) => document.activeElement === el), { timeout: 10000 })
    .toBe(true);

  await page.keyboard.type('x^2+6x+8', { delay: 20 });
  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('form');
  await expect(card.locator('.ap-fillin-feedback')).toHaveText(/factored form/i);

  await field.evaluate((el) => {
    el.focus();
    el.executeCommand('selectAll');
    el.executeCommand('deleteBackward');
  });
  await expect.poll(async () => field.evaluate((el) => el.value)).toBe('');
  await page.keyboard.type('(x+2)(x+4)', { delay: 20 });
  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
});

test('a re-typed rational expression is held back until reduced (answerForm="reduced-fraction")', async ({ page }) => {
  await page.goto('/math/elementary-algebra/08-rational-expressions-and-equations/01-simplify-rational-expressions/', { waitUntil: 'networkidle' });

  // The last §6 class: `\frac{x^2-x-2}{x^2-3x+2}` and `\frac{x+1}{x-1}` are
  // the same value, so this prompt was passable by retyping it until the
  // polynomial-gcd predicate graded the shape. Exercised end to end because
  // MathLive rewrites a typed `/` into its own `\frac` emission, and the
  // predicate reads exactly those written halves.
  const card = page.locator('fill-in[data-question-plain*="x^2-x-2"]').first();
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  await expect
    .poll(async () => field.evaluate((el) => typeof el.executeCommand === 'function'), { timeout: 20000 })
    .toBe(true);
  await field.scrollIntoViewIfNeeded();
  await field.click();
  await expect
    .poll(async () => field.evaluate((el) => document.activeElement === el), { timeout: 10000 })
    .toBe(true);

  await page.keyboard.type('(x^2-x-2)/(x^2-3x+2)', { delay: 20 });
  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('form');
  await expect(card.locator('.ap-fillin-feedback')).toHaveText(/common factors cancelled/i);

  await field.evaluate((el) => {
    el.focus();
    el.executeCommand('selectAll');
    el.executeCommand('deleteBackward');
  });
  await expect.poll(async () => field.evaluate((el) => el.value)).toBe('');
  await page.keyboard.type('(x+1)/(x-1)', { delay: 20 });
  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
});
