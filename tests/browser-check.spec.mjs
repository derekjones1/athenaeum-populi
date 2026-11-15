import { test, expect } from '@playwright/test';
import { readdirSync } from 'node:fs';
import {
  clearMathField, focusMathField, gotoBuiltPage, waitForUpgrade,
} from './helpers.mjs';

/**
 * End-to-end proof that the grader fixes hold in the real page, driven through
 * real keystrokes into the real MathLive field. Node-level unit tests live in
 * assets/js/lib/math/check-answer.test.mjs; these guard the integration, where the
 * field's own LaTeX rewriting is what produces the broken shape.
 *
 * Every navigation goes through `gotoBuiltPage`, which asserts the response
 * and refuses a dev-served or stale page — the same gate the accessibility
 * suite applies, and the one `docs/architecture.md` claims for the suite as a
 * whole.
 */

test('a fraction typed with "/" grades correct (lone-d numerator)', async ({ page }) => {
  await gotoBuiltPage(page, '/math/prealgebra/09-math-models-and-geometry/07-solve-a-formula-for-a-specific-variable/');

  const card = page.locator('fill-in[data-answer-form="solved:r"]');
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  await focusMathField(page, field);
  await page.keyboard.type('r=d/t', { delay: 20 });

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

test('a re-typed polynomial is held back on a factoring prompt (answerForm="factored-completely")', async ({ page }) => {
  await gotoBuiltPage(page, '/math/elementary-algebra/07-factoring/02-factor-trinomials-of-the-form-x2-bx-c/');

  // The symbolic counterpart of the test above. `x^2+6x+8` and `(x+2)(x+4)`
  // are the same value, so this prompt was passable by retyping it until
  // `factored` graded the shape (now `factored-completely`, since the
  // Elementary Algebra chapter 7 re-review). This is the only place the whole stack runs
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
  await expect(card.locator('.ap-fillin-feedback')).toHaveText(/factored completely/i);

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

test('with JavaScript off the page is honest, and with it on the controls arrive', async ({ browser }) => {
  // ONE page, TWO contexts, and the comparison between them is the test.
  //
  // Asserting a server-HTML fact through a browser is a ten-second round trip
  // that re-tests a Hugo template: `.ap-mc-option[disabled]` is emitted
  // unconditionally, and `tools/build/audit-build.mjs` already proves — over all 275
  // built documents rather than this one — that every fill-in and graph-plot
  // ships exactly one no-JavaScript notice. What only a browser can decide is
  // what each mode actually PRESENTS: whether the notice is the thing the
  // reader meets, and whether the controls it stands in for really appear once
  // scripting runs.
  //
  // The counts are relational (notices === fill-ins + graph-plots), never the
  // literal 14 and 4 this route happens to carry: those are content-derived,
  // so a hard-coded pair goes red for an authoring reason and teaches the next
  // reader to edit the number rather than read the failure.
  //
  // This route is the only one in the corpus carrying all three component
  // types, which is why it is the one loaded twice.
  const route = '/math/elementary-algebra/04-graphs/02-graph-linear-equations-in-two-variables/';

  const withoutJs = await browser.newContext({ javaScriptEnabled: false });
  let counts;
  try {
    const page = await withoutJs.newPage();
    await gotoBuiltPage(page, route);
    counts = {
      fillIns: await page.locator('fill-in').count(),
      graphs: await page.locator('graph-plot').count(),
    };
    expect(counts.fillIns).toBeGreaterThan(0);
    expect(counts.graphs).toBeGreaterThan(0);

    // The notice is what the reader meets, in place of every control.
    const notices = page.locator('.ap-noscript-notice');
    await expect(notices).toHaveCount(counts.fillIns + counts.graphs);
    await expect(notices.first()).toBeVisible();
    await expect(notices.last()).toBeVisible();

    // …and the controls it stands in for are genuinely absent, not merely
    // unstyled. `svg` would be the wrong locator: 17 SVGs (static figures and
    // theme icons) are present with JS off, so that assertion passes today and
    // would keep passing if graph-plot ever started server-rendering.
    await expect(page.locator('.ap-graphplot-svg')).toHaveCount(0);
    await expect(page.locator('math-field')).toHaveCount(0);

    // Multiple choice is the exception: it IS server-rendered, and its options
    // must be natively `disabled` so keyboard and assistive-tech users meet
    // inert controls rather than enabled-looking dead ones.
    const options = page.locator('multiple-choice .ap-mc-option');
    expect(await options.count()).toBeGreaterThan(1);
    for (const disabled of await options.evaluateAll((buttons) => buttons.map((b) => b.disabled))) {
      expect(disabled).toBe(true);
    }
  } finally {
    await withoutJs.close();
  }

  const withJs = await browser.newContext();
  try {
    const page = await withJs.newPage();
    await gotoBuiltPage(page, route);
    // Same page, same components…
    await expect(page.locator('fill-in')).toHaveCount(counts.fillIns);
    await expect(page.locator('graph-plot')).toHaveCount(counts.graphs);
    // …and now the notice is gone (a <noscript> body is inert text to a
    // scripting browser, never elements) while the real controls are there,
    // one per component.
    await expect(page.locator('.ap-noscript-notice')).toHaveCount(0);
    await expect(page.locator('math-field')).toHaveCount(counts.fillIns);
    await expect(page.locator('.ap-graphplot-svg')).toHaveCount(counts.graphs);
    // The other half of the disabled pair: the component removes the
    // attribute as it wires grading.
    const options = page.locator('multiple-choice .ap-mc-option');
    expect(await options.count()).toBeGreaterThan(1);
    for (const disabled of await options.evaluateAll((buttons) => buttons.map((b) => b.disabled))) {
      expect(disabled).toBe(false);
    }
  } finally {
    await withJs.close();
  }
});

test('a graph-plot line is graded through the keyboard path', async ({ page }) => {
  await gotoBuiltPage(
    page,
    '/math/elementary-algebra/04-graphs/02-graph-linear-equations-in-two-variables/',
  );

  // y = 3x - 1, on a ±12 grid at snap 1. Selected by its authored config, not
  // by position: this used to be `.nth(0)` and broke the moment the page grew
  // graph-plots above it, pointing the keyboard path at a different answer.
  const card = page.locator(
    String.raw`graph-plot[data-config*='"slope":3,"intercept":-1']`,
  ).filter({ has: page.locator('.ap-graphplot-question') });
  await expect(card).toHaveCount(1);
  await waitForUpgrade(card, (el) => Boolean(el.g) && typeof el.buildGraph === 'function');
  await expect
    .poll(async () => card.evaluate((el) => JSON.stringify(el.answer)))
    .toBe(JSON.stringify({ slope: 3, intercept: -1, plotPoints: 3 }));
  await card.scrollIntoViewIfNeeded();

  const addPoint = card.getByRole('button', { name: 'Add point' });
  const check = card.getByRole('button', { name: 'Check' });

  // The keyboard path, which no test covered: "Add point" places a point at a
  // deterministic free grid location and focuses its handle, arrow keys move
  // it by one snap step, and Check grades the object the points determine.
  await addPoint.click();
  await addPoint.click();
  await addPoint.click();
  await expect.poll(async () => card.evaluate((el) => el.pts.length)).toBe(3);

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

  // (0,-1), (1,0), (2,1): collinear on y = x − 1 — the intercept is right,
  // the slope is 1 rather than 3. A diagnostic status, not a bare
  // "incorrect" — teaching which half is right is the whole reason
  // check-graph returns more than a boolean.
  await moveTo(0, [1, 0]);
  await moveTo(1, [0, -1]);
  await moveTo(2, [2, 1]);
  await check.click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('interceptRight');

  // Raise the first point to (1,2): the three points no longer make one line.
  await moveTo(0, [1, 2]);
  await check.click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('notCollinear');

  // Lift the third point to (2,5): slope 3 through the same intercept.
  await moveTo(2, [2, 5]);
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

test('a points-mode graph-plot grades a five-point set with partial credit', async ({ page }) => {
  // The authored plot-the-points Try It for f(x) = 2^(x−1) + 3 in precalculus
  // 4.2: five targets at the named inputs x = 0…4, on a snap-0.5 grid (two of
  // the outputs are half-units). Selected by its answer config, the way the
  // line-mode test selects by answer, so reordering the page cannot silently
  // retarget it.
  await gotoBuiltPage(
    page,
    '/math/precalculus/04-exponential-and-logarithmic-functions/02-graphs-of-exponential-functions/',
  );
  const card = page.locator('graph-plot[data-config*="points"]');
  await expect(card).toHaveCount(1);
  await waitForUpgrade(card, (el) => Boolean(el.g) && typeof el.buildGraph === 'function');
  await expect
    .poll(async () => card.evaluate((el) => JSON.stringify(el.answer.points)))
    .toBe(JSON.stringify([[0, 3.5], [1, 4], [2, 5], [3, 7], [4, 11]]));
  await expect(card.locator('.ap-graphplot-instructions'))
    .toHaveText('Place all 5 points asked for in the question.');
  await card.scrollIntoViewIfNeeded();

  const addPoint = card.getByRole('button', { name: 'Add point' });
  const check = card.getByRole('button', { name: 'Check' });
  for (let i = 0; i < 5; i += 1) await addPoint.click();
  await expect.poll(async () => card.evaluate((el) => el.pts.length)).toBe(5);
  // The answer's length is the cap: a sixth point must be refused.
  await expect(addPoint).toBeDisabled();

  const moveTo = async (index, target) => {
    const handle = card.locator('circle[role="button"]').nth(index);
    await handle.focus();
    for (let guard = 0; guard < 60; guard += 1) {
      const at = await card.evaluate((el, i) => el.pts[i], index);
      if (at[0] === target[0] && at[1] === target[1]) return;
      if (at[0] < target[0]) await page.keyboard.press('ArrowRight');
      else if (at[0] > target[0]) await page.keyboard.press('ArrowLeft');
      else if (at[1] < target[1]) await page.keyboard.press('ArrowUp');
      else await page.keyboard.press('ArrowDown');
    }
    throw new Error(`point ${index} never reached ${target}`);
  };

  // Four points right, the fifth at (4, 10.5) instead of (4, 11): partial
  // credit that names the count, not a bare "incorrect".
  const targets = [[0, 3.5], [1, 4], [2, 5], [3, 7], [4, 10.5]];
  for (let i = 0; i < targets.length; i += 1) await moveTo(i, targets[i]);
  await check.click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('pointsPartial');
  await expect(card.locator('.ap-fillin-feedback'))
    .toHaveText('4 of the 5 points are placed correctly — adjust the others.');

  // Fix the fifth point; the full set now matches (order-agnosticism itself
  // is unit-tested in check-graph.test.mjs).
  await moveTo(4, [4, 11]);
  await check.click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
  await expect(card.locator('.ap-fillin-feedback')).toHaveText(/^Correct\b/);
});

test('a quadratic graph-plot grades the parabola three points determine, in any order', async ({ page }) => {
  // The authored sketch exercise for f(x) = x² − 2x in precalculus 3.2:
  // plotPoints 3, so the three placed points determine the parabola on their
  // own and the ORDER they were placed in is not part of the answer.
  await gotoBuiltPage(
    page,
    '/math/precalculus/03-polynomial-and-rational-functions/02-quadratic-functions/',
  );
  const card = page.locator('graph-plot[data-config*="quadratic"]');
  await expect(card).toHaveCount(1);
  await waitForUpgrade(card, (el) => Boolean(el.g) && typeof el.buildGraph === 'function');
  await expect
    .poll(async () => card.evaluate((el) => JSON.stringify(el.answer)))
    .toBe(JSON.stringify({ quadratic: { a: 1, b: -2, c: 0 }, plotPoints: 3 }));
  await expect(card.locator('.ap-graphplot-instructions'))
    .toHaveText('Place three points on the parabola.');
  await card.scrollIntoViewIfNeeded();

  const addPoint = card.getByRole('button', { name: 'Add point' });
  const check = card.getByRole('button', { name: 'Check' });
  for (let i = 0; i < 3; i += 1) await addPoint.click();
  await expect.poll(async () => card.evaluate((el) => el.pts.length)).toBe(3);
  await expect(addPoint).toBeDisabled();

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

  // (1,−1), (0,0) and (3,0) all sit on y = ½x² − 1½x — three points at
  // distinct x-values always determine SOME parabola — so this is the wrong
  // parabola, not "no parabola". The preview is drawn solid: dashed ink is the
  // asymptote guide convention and must not appear on a curve answer.
  await moveTo(0, [1, -1]);
  await moveTo(1, [0, 0]);
  await moveTo(2, [3, 0]);
  expect(await card.locator('.ap-graphplot-svg line[stroke-dasharray]').count()).toBe(0);
  await check.click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('incorrect');

  // Two points at the same x-value is what notOnParabola actually means: no
  // function of x passes through both, so there is nothing to grade.
  await moveTo(2, [0, 3]);
  await check.click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('notOnParabola');

  // The answer parabola, with the vertex placed LAST — the case that used to
  // be told its points "do not all lie on one parabola" while every one of
  // them sat on the answer curve.
  await moveTo(2, [1, -1]);
  await moveTo(1, [2, 0]);
  await moveTo(0, [0, 0]);
  await expect
    .poll(async () => card.evaluate((el) => JSON.stringify(el.pts)))
    .toBe('[[0,0],[2,0],[1,-1]]');
  await check.click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
  await expect(card.locator('.ap-fillin-feedback')).toHaveText(/^Correct\b/);
});

test('an asymptotes graph-plot grades member lines with partial credit', async ({ page }) => {
  // The authored place-the-asymptotes Try It for f(x) = (2x−1)(2x+1) over
  // (x−2)(x+3) in precalculus 3.7: two vertical asymptotes, x = 2 and
  // x = −3, each drawn with its own pair of points and graded
  // order-agnostic.
  await gotoBuiltPage(
    page,
    '/math/precalculus/03-polynomial-and-rational-functions/07-rational-functions/',
  );
  const card = page.locator('graph-plot[data-config*="asymptotes"]');
  await expect(card).toHaveCount(1);
  await waitForUpgrade(card, (el) => Boolean(el.g) && typeof el.buildGraph === 'function');
  await expect
    .poll(async () => card.evaluate((el) => JSON.stringify(el.answer)))
    .toBe(JSON.stringify({ asymptotes: [{ x: 2 }, { x: -3 }] }));
  await expect(card.locator('.ap-graphplot-instructions'))
    .toHaveText('Place two points on each asymptote — the first two make one asymptote, the next two the other.');
  await card.scrollIntoViewIfNeeded();

  // The empty grid carries NO dashed ink of its own, which is what makes the
  // count below a measurement of the preview rather than of the grid.
  const dashedGuides = () => card.evaluate((el) => [...new Set(
    Array.from(el.querySelectorAll('.ap-graphplot-svg line[stroke-dasharray]'))
      .filter((line) => line.getAttribute('x1') === line.getAttribute('x2'))
      .map((line) => line.getAttribute('x1')),
  )]);
  expect(await card.locator('.ap-graphplot-svg line[stroke-dasharray]').count()).toBe(0);

  const addPoint = card.getByRole('button', { name: 'Add point' });
  const check = card.getByRole('button', { name: 'Check' });
  for (let i = 0; i < 4; i += 1) await addPoint.click();
  await expect.poll(async () => card.evaluate((el) => el.pts.length)).toBe(4);
  // Two points per member is the cap: a fifth point must be refused.
  await expect(addPoint).toBeDisabled();

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

  // First pair on x = 2 (right), second pair on x = 3 (wrong): partial
  // credit that names the count, not a bare "incorrect".
  await moveTo(0, [2, -5]);
  await moveTo(1, [2, 5]);
  await moveTo(2, [3, -5]);
  await moveTo(3, [3, 5]);
  // The preview lines draw DASHED — the guide-ink convention every static
  // asymptote figure in the book uses. Counted as distinct dashed COLUMNS,
  // one per completed pair, rather than as <line> elements: a vertical
  // asymptote is emitted as two segments wherever an unbroken one would
  // strike through an axis label, so the element count here is 3. `>= 2`
  // against every dashed line in the SVG measured neither — it would have
  // kept passing with the `dashed: true` spread deleted.
  expect(await dashedGuides()).toHaveLength(2);
  await check.click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('asymptotePartial');
  await expect(card.locator('.ap-fillin-feedback'))
    .toHaveText('1 of the 2 asymptotes is placed correctly — adjust the other.');

  // Slide the second pair to x = −3: both members now match, in the
  // opposite order from the authored list.
  await moveTo(2, [-3, -5]);
  await moveTo(3, [-3, 5]);
  await check.click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
  await expect(card.locator('.ap-fillin-feedback')).toHaveText(/^Correct\b/);
});

/**
 * Press at a math coordinate, inverting <graph-plot>'s own `_toMath`: the
 * viewBox origin is not always 0 0 (the fit pass shifts it when a label pokes
 * out), so the page pixel has to be derived from `g.box` and `g.map`, exactly
 * as the component derives math coordinates from the pixel.
 */
async function pressGraphAt(page, card, at) {
  const px = await card.evaluate((el, p) => {
    const rect = el.querySelector('.ap-graphplot-svg').getBoundingClientRect();
    const box = el.g.box || { x: 0, y: 0, w: el.g.width, h: el.g.height };
    const [X, Y] = el.g.map.toPx(p);
    return {
      x: rect.left + ((X - box.x) / box.w) * rect.width,
      y: rect.top + ((Y - box.y) / box.h) * rect.height,
    };
  }, at);
  await page.mouse.click(px.x, px.y);
}

test('pressing an empty lattice point places a point, on a half-unit snap', async ({ page }) => {
  // The POINTER path, which no browser test drove — every graph-plot test
  // above works the keyboard. <graph-plot> resolved a press by a fixed
  // 0.6-unit grab radius, which was fine while every snap was 1 and became
  // wrong the moment the corpus grew snap 0.5: the neighbouring lattice point
  // is then 0.5 away, inside that radius, so pressing an EMPTY neighbour
  // grabbed the already-placed point instead of placing a second one.
  await gotoBuiltPage(
    page,
    '/math/precalculus/04-exponential-and-logarithmic-functions/02-graphs-of-exponential-functions/',
  );
  const card = page.locator('graph-plot[data-config*="points"]');
  await expect(card).toHaveCount(1);
  await waitForUpgrade(card, (el) => Boolean(el.g) && typeof el.buildGraph === 'function');
  await expect.poll(async () => card.evaluate((el) => el.snap)).toBe(0.5);
  await card.scrollIntoViewIfNeeded();

  await pressGraphAt(page, card, [0, 3.5]);
  await expect.poll(async () => card.evaluate((el) => JSON.stringify(el.pts))).toBe('[[0,3.5]]');

  // Half a unit to the right: its own lattice point, and empty.
  await pressGraphAt(page, card, [0.5, 3.5]);
  await expect
    .poll(async () => card.evaluate((el) => JSON.stringify(el.pts)))
    .toBe('[[0,3.5],[0.5,3.5]]');

  // A press inside a placed point's own cell still grabs it rather than
  // stacking a second point there.
  await pressGraphAt(page, card, [0, 3.6]);
  await expect.poll(async () => card.evaluate((el) => el.pts.length)).toBe(2);
});

test('crossing asymptotes can be drawn through their shared point', async ({ page }) => {
  // Both asymptotes of 4y² − 9x² = 36 pass through the origin, and the grader
  // accepts a point shared across pairs — but click-to-place refused a
  // coincident point outright, so the natural approach (press the origin for
  // each line) failed with no feedback at all.
  await gotoBuiltPage(page, '/math/intermediate-algebra/11-conics/04-hyperbolas/');

  const card = page.locator('graph-plot[data-config*="asymptotes"]');
  await expect(card).toHaveCount(1);
  await waitForUpgrade(card, (el) => Boolean(el.g) && typeof el.buildGraph === 'function');
  await card.scrollIntoViewIfNeeded();

  await pressGraphAt(page, card, [0, 0]);
  await pressGraphAt(page, card, [2, 3]);
  // The second pair starts on the point the first pair already holds.
  await pressGraphAt(page, card, [0, 0]);
  await pressGraphAt(page, card, [2, -3]);
  await expect
    .poll(async () => card.evaluate((el) => JSON.stringify(el.pts)))
    .toBe('[[0,0],[2,3],[0,0],[2,-3]]');

  await card.getByRole('button', { name: 'Check' }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
  await expect(card.locator('.ap-fillin-feedback')).toHaveText(/^Correct\b/);
});

test('a correct Enter-key submission keeps focus inside the exercise', async ({ page }) => {
  await gotoBuiltPage(page, '/math/prealgebra/09-math-models-and-geometry/07-solve-a-formula-for-a-specific-variable/');

  // Submitting from the math-field itself (Enter → insertLineBreak) is the
  // path the Check-button focus rescue never covered: readonly + the sink
  // teardown dropped focus to <body> right after the learner succeeded.
  const card = page.locator('fill-in[data-answer-form="solved:r"]');
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  await focusMathField(page, field);
  await page.keyboard.type('r=d/t', { delay: 20 });
  await page.keyboard.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
  expect(await page.evaluate(() => document.activeElement !== document.body)).toBe(true);
  expect(await card.evaluate((el) => el.contains(document.activeElement))).toBe(true);
});

/**
 * <text-in> and <self-check> — the Biology books' word-answer and
 * free-response components. Neither uses MathLive or the lazy engine bundle
 * (both ship in the eager `components.js` bundle alongside multiple-choice),
 * so `waitForUpgrade` only needs to wait on `customElements.define`, not a
 * lazy import.
 */

test('a text-in grades wrong then right, and an Enter-key submission focuses the feedback', async ({ page }) => {
  await gotoBuiltPage(
    page,
    '/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology/',
  );

  const card = page.locator('text-in[data-answer="serendipity"]');
  await expect(card).toHaveCount(1);
  await waitForUpgrade(card, (el) => (
    Boolean(customElements.get('text-in')) && Boolean(el.querySelector('.ap-textin-check'))
  ));
  await card.scrollIntoViewIfNeeded();

  const field = card.locator('.ap-textin-field');
  await field.click();
  await field.fill('ribozyme');
  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('incorrect');
  await expect(card.locator('.ap-textin-feedback')).toHaveText(/^Not quite/);

  // Submitted through the field's own Enter key, not the Check button — the
  // path <fill-in>'s equivalent test exists to guard, and nothing here had
  // covered for <text-in>.
  await field.fill('serendipity');
  await field.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
  await expect(card.locator('.ap-textin-feedback')).toHaveText(/^Correct/);
  expect(await field.evaluate((el) => el.readOnly)).toBe(true);
  await expect(card.locator('.ap-textin-check')).toBeDisabled();
  expect(
    await card.evaluate((el) => document.activeElement === el.querySelector('.ap-textin-feedback')),
  ).toBe(true);
});

// Chemistry 2e Section 2.7 retires "ferrous chloride". Until November 11,
// 2026 the name was refused as plainly wrong; it now gets its own verdict,
// in the tone of a right answer in the wrong form, and the field stays open.
test('a text-in answers an older name of the keyed compound as an older name, and leaves the field open', async ({ page }) => {
  await gotoBuiltPage(
    page,
    '/physical-sciences/chemistry/02-atoms-molecules-and-ions/07-chemical-nomenclature/',
  );

  const card = page.locator('text-in[data-answer="iron(II) chloride"]');
  await expect(card).toHaveCount(1);
  await waitForUpgrade(card, (el) => (
    Boolean(customElements.get('text-in')) && Boolean(el.querySelector('.ap-textin-check'))
  ));
  await card.scrollIntoViewIfNeeded();

  const field = card.locator('.ap-textin-field');
  const feedback = card.locator('.ap-textin-feedback');
  await field.fill('ferrous chloride');
  await field.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('form');
  await expect(feedback).toHaveText('That is an older name. Give the systematic name.');
  expect(await field.evaluate((el) => el.readOnly)).toBe(false);
  await expect(card.locator('.ap-textin-check')).toBeEnabled();
  const olderTone = await feedback.evaluate((el) => getComputedStyle(el).color);

  // The older name of the OTHER chloride of iron is simply wrong.
  await field.fill('ferric chloride');
  await field.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('incorrect');
  await expect(feedback).toHaveText(/^Not quite/);
  expect(await feedback.evaluate((el) => getComputedStyle(el).color)).not.toBe(olderTone);

  await field.fill('iron(II) chloride');
  await field.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
});

// Section 2.7 names a compound of two nonmetals with Greek prefixes and a
// metal's compound as an ionic compound, and its own exercise prints
// "titanium tetrachloride" as the name to replace. Typed as an answer it was
// a bare "Not quite" until November 14, 2026: the compound is right and the
// method is the other one, so the field says which method the item asks for.
test('a text-in answers a Greek-prefix name of the keyed metal compound with the naming method, and leaves the field open', async ({ page }) => {
  await gotoBuiltPage(
    page,
    '/physical-sciences/chemistry/02-atoms-molecules-and-ions/07-chemical-nomenclature/',
  );

  // The item that asks the name of TiCl₄ (a second item, keyed the same,
  // prints "titanium tetrachloride" in its stem).
  const card = page.locator('text-in[data-answer="titanium(IV) chloride"]').first();
  await waitForUpgrade(card, (el) => (
    Boolean(customElements.get('text-in')) && Boolean(el.querySelector('.ap-textin-check'))
  ));
  await card.scrollIntoViewIfNeeded();

  const field = card.locator('.ap-textin-field');
  const feedback = card.locator('.ap-textin-feedback');
  await field.fill('titanium tetrachloride');
  await field.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('form');
  await expect(feedback).toHaveText('That name counts the atoms with Greek prefixes, as a compound of two nonmetals is named. Name a metal’s compound as an ionic compound, without prefixes.');
  expect(await field.evaluate((el) => el.readOnly)).toBe(false);
  await expect(card.locator('.ap-textin-check')).toBeEnabled();

  // The prefix name of ANOTHER chloride of titanium is simply wrong.
  await field.fill('titanium trichloride');
  await field.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('incorrect');
  await expect(feedback).toHaveText(/^Not quite/);

  // The name without its numeral is wrong, and is told what is missing; the
  // right charge typed as an ordinary number is the right compound in the
  // wrong notation (both a bare "Not quite" until November 14, 2026).
  await field.fill('titanium chloride');
  await field.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('incorrect');
  await expect(feedback).toHaveText('This metal forms more than one ion, so the name must say which: add the ion’s charge as a Roman numeral in parentheses after the metal’s name.');
  await field.fill('titanium(4) chloride');
  await field.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('form');
  await expect(feedback).toHaveText('That is the right compound — now write the metal ion’s charge as a Roman numeral, not as an ordinary number.');
  expect(await field.evaluate((el) => el.readOnly)).toBe(false);

  await field.fill('titanium(IV) chloride');
  await field.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
});

// Section 2.4 asks for a molecular formula and then the empirical one. The
// molecular formula typed into the empirical item was a bare "Not quite"
// until November 14, 2026; the field now says the ratio is right and every
// count is multiplied up, without saying which formula is which.
test('a formula field says when every count is a multiple of the answer’s', async ({ page }) => {
  await gotoBuiltPage(
    page,
    '/physical-sciences/chemistry/02-atoms-molecules-and-ions/04-chemical-formulas/',
  );

  // The metaldehyde exercise's empirical-formula item (a second item of the page shares the key).
  const card = page.locator('text-in[data-answer="C₂H₄O"]').first();
  await waitForUpgrade(card, (el) => (
    Boolean(customElements.get('text-in')) && Boolean(el.querySelector('.ap-textin-check'))
  ));
  await card.scrollIntoViewIfNeeded();

  const field = card.locator('.ap-textin-field');
  const feedback = card.locator('.ap-textin-feedback');
  await field.fill('C8H16O4');
  await field.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('incorrect');
  await expect(feedback).toHaveText('That has the right elements in the right ratio, with every count multiplied up. Write the formula with the smallest whole numbers of atoms in that ratio.');

  await field.fill('C2H4O');
  await field.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
});

// A state symbol is optional in a typed equation, and the guide under the
// field says so. One the learner does type is compared: calcium hydroxide
// typed (s), as 4.2's own solubility table has it, against the source's
// (aq), was told only "now check the state symbols, or leave them out" —
// which read as a wrong equation. The field now says the rest is right and
// that the states may be left out, and takes the answer without them.
test('an equation field says a state symbol is optional, and says so again when one differs', async ({ page }) => {
  await gotoBuiltPage(
    page,
    '/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/02-classifying-chemical-reactions/',
  );

  const card = page.locator('text-in[data-answer="Ca(s) + 2H₂O(l) ⟶ Ca(OH)₂(aq) + H₂(g)"]');
  await expect(card).toHaveCount(1);
  await waitForUpgrade(card, (el) => (
    Boolean(customElements.get('text-in')) && Boolean(el.querySelector('.ap-textin-guide'))
  ));
  await card.scrollIntoViewIfNeeded();
  await expect(card.locator('.ap-textin-guide')).toContainText('The state symbols (s), (l), (g), and (aq) are optional.');

  const field = card.locator('.ap-textin-field');
  const feedback = card.locator('.ap-textin-feedback');
  await field.fill('Ca(s) + 2H2O(l) -> Ca(OH)2(s) + H2(g)');
  await field.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('form');
  await expect(feedback).toHaveText('The substances and coefficients are right. A state symbol you typed differs from the answer’s: check each one, or leave them out — state symbols are optional.');
  expect(await field.evaluate((el) => el.readOnly)).toBe(false);

  await field.fill('Ca + 2H2O -> Ca(OH)2 + H2');
  await field.press('Enter');
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
});

// A formation equation is written for one mole of its product, with a
// fractional coefficient (Chemistry 2e 5.3; docs/subjects/chemistry.md
// "Formulas and equations"). The grader is unit-tested; what only a browser
// shows is the field: the keys a learner types for ½ and 3⁄2 (1/2, 1.5), the
// "Read as" line printing the fraction as the key does, and the doubled
// whole-number equation told why a fraction is asked. No page carries such a
// key before chapter 5, so the item is added to 4.2's page at run time, as
// the shortcode renders one; chapter 5's run moves this test to its own item.
test('an equation field reads a fractional coefficient typed as 1/2 or a decimal, and prints it as the key does', async ({ page }) => {
  // The real item: Section 5.3's Check Your Learning that asks the formation
  // equation of sodium carbonate, keyed with 3⁄2 O₂.
  await gotoBuiltPage(page, '/physical-sciences/chemistry/05-thermochemistry/03-enthalpy/');
  const card = page.locator('text-in', { hasText: 'Na₂CO₃(s). Type a fraction as 1/2.' });
  await expect(card).toHaveCount(1);
  expect(await card.getAttribute('data-answer')).toBe('2Na(s) + C(s, graphite) + 3⁄2O₂(g) ⟶ Na₂CO₃(s)');
  await waitForUpgrade(card, (el) => Boolean(customElements.get('text-in')) && Boolean(el.querySelector('.ap-textin-guide')));
  await card.scrollIntoViewIfNeeded();
  const field = card.locator('.ap-textin-field');
  const status = () => expect.poll(async () => card.evaluate((el) => el.status), { timeout: 5000 });

  await field.fill('4Na + 2C + 3O2 -> 2Na2CO3');
  await field.press('Enter');
  await status().toBe('form');
  await expect(card.locator('.ap-textin-feedback')).toHaveText('That balances, but the question asks for the equation written for one mole, so a coefficient may be a fraction. Type a fraction as 1/2.');

  await field.fill('2Na + C(s, graphite) + 1.5O2 -> Na2CO3');
  await expect(card.locator('.ap-textin-reading')).toHaveText('Read as: 2Na + C(s, graphite) + 3⁄2O₂ ⟶ Na₂CO₃');

  await field.fill('2Na + C + 3/2O2 -> Na2CO3');
  await expect(card.locator('.ap-textin-reading')).toHaveText('Read as: 2Na + C + 3⁄2O₂ ⟶ Na₂CO₃');
  await field.press('Enter');
  await status().toBe('correct');
});

test('the shared hint toggle discloses a fill-in hint and a self-check hint the same way', async ({ page }) => {
  // One implementation (assets/js/lib/shared/hint-toggle.mjs) mounts every
  // component's "Show hint": the button names the hint it controls, flips
  // aria-expanded, and reveals the hint paragraph — asserted on a math
  // component and a prose one, since the six components share nothing else.
  await gotoBuiltPage(page, '/math/prealgebra/09-math-models-and-geometry/07-solve-a-formula-for-a-specific-variable/');
  const fillin = page.locator('fill-in[data-answer-form="solved:r"]');
  await expect(fillin).toHaveCount(1);
  const disclose = async (card) => {
    const toggle = card.locator('.ap-fillin-hint-toggle');
    await expect(toggle).toHaveCount(1);
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    const hint = card.locator('.ap-fillin-hint');
    await expect(hint).toBeHidden();
    expect(await toggle.getAttribute('aria-controls')).toBe(await hint.getAttribute('id'));
    // An unanswered card holds no empty band above "Show hint": its feedback
    // line (the live region, present from the start) takes no room until a
    // verdict is written into it (custom.css, `:empty` feedback rule).
    expect(await card.evaluate((el) => {
      const status = el.querySelector('[role="status"]');
      return { text: status.textContent, height: status.getBoundingClientRect().height };
    })).toEqual({ text: '', height: 0 });
    await toggle.scrollIntoViewIfNeeded();
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(toggle).toHaveText('Hide hint');
    await expect(hint).toBeVisible();
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(hint).toBeHidden();
  };
  await disclose(fillin);

  await gotoBuiltPage(page, '/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology/');
  const selfcheck = page.locator('self-check').first();
  await waitForUpgrade(selfcheck, (el) => Boolean(el.querySelector('.ap-fillin-hint-toggle')));
  await disclose(selfcheck);
});

test('a text-in accepts its alternate spelling and ignores case and a leading article', async ({ page }) => {
  await gotoBuiltPage(
    page,
    '/life-health-sciences/biology/01-the-study-of-life/' +
      '02-themes-and-concepts-of-biology/',
  );

  // "…is called ________." keyed "homeostasis", accepting "homoeostasis".
  const card = page.locator('text-in[data-answer="homeostasis"]');
  await expect(card).toHaveCount(1);
  await waitForUpgrade(card, (el) => (
    Boolean(customElements.get('text-in')) && Boolean(el.querySelector('.ap-textin-check'))
  ));
  await card.scrollIntoViewIfNeeded();

  const field = card.locator('.ap-textin-field');
  await field.click();
  await field.fill('The Homoeostasis');
  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 5000 })
    .toBe('correct');
  await expect(card.locator('.ap-textin-feedback')).toHaveText(/^Correct/);
});

test('self-check marks enable on upgrade, and rating swaps status and aria-pressed', async ({ page }) => {
  await gotoBuiltPage(
    page,
    '/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology/',
  );

  const card = page.locator('self-check').first();
  await waitForUpgrade(card, (el) => (
    Boolean(customElements.get('self-check'))
    && [...el.querySelectorAll('.ap-selfcheck-mark')].every((button) => !button.disabled)
  ));
  await card.scrollIntoViewIfNeeded();

  const correctMark = card.locator('.ap-selfcheck-mark[data-verdict="correct"]');
  const review = card.locator('.ap-selfcheck-mark[data-verdict="review"]');
  await expect(correctMark).toBeEnabled();
  await expect(review).toBeEnabled();

  // Biology selfchecks carry rubric checkpoints (the practice retrofit).
  // They live inside the closed <details>, so they are counted here but
  // only ticked after the reveal below — a learner self-marks against the
  // rubric they can see.
  const checkpoints = card.locator('.ap-selfcheck-checkpoints input[type="checkbox"]');
  const checkpointCount = await checkpoints.count();
  expect(checkpointCount).toBeGreaterThanOrEqual(2);

  await correctMark.click();
  await expect(card.locator('.ap-selfcheck-feedback')).toHaveText(
    new RegExp(`^Marked as correct\\. You checked 0 of ${checkpointCount} points\\.$`),
  );
  await expect(correctMark).toHaveAttribute('aria-pressed', 'true');
  await expect(review).toHaveAttribute('aria-pressed', 'false');

  await review.click();
  await expect(card.locator('.ap-selfcheck-feedback')).toHaveText(/^Marked for review/);
  await expect(review).toHaveAttribute('aria-pressed', 'true');
  await expect(correctMark).toHaveAttribute('aria-pressed', 'false');

  // The model answer is a native <details>, unaffected by rating clicks.
  const details = card.locator('details.ap-selfcheck-answer');
  await expect(details).not.toHaveAttribute('open', '');
  await card.locator('.ap-selfcheck-answer summary').click();
  await expect(details).toHaveAttribute('open', '');

  // With the model answer revealed, the rubric is tickable; re-rating
  // counts what was checked.
  await expect(checkpoints.first()).toBeEnabled();
  await checkpoints.first().check();
  await correctMark.click();
  await expect(card.locator('.ap-selfcheck-feedback')).toHaveText(
    new RegExp(`^Marked as correct\\. You checked 1 of ${checkpointCount} points\\.$`),
  );
});

test('with JavaScript off, text-in shows its notice and self-check keeps its native disabled/details behavior', async ({ browser }) => {
  // The <fill-in>/<graph-plot> honesty test's counterpart for the two new
  // components: what a no-JS reader actually meets (a notice standing in for
  // <text-in>'s input) versus what stays usable without any component
  // upgrading at all (self-check's server-rendered <details>).
  const route =
    '/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology/';
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await gotoBuiltPage(page, route);

    const textInCount = await page.locator('text-in').count();
    const selfCheckCount = await page.locator('self-check').count();
    expect(textInCount).toBeGreaterThan(0);
    expect(selfCheckCount).toBeGreaterThan(0);

    const notices = page.locator('text-in .ap-noscript-notice');
    await expect(notices).toHaveCount(textInCount);
    await expect(notices.first()).toBeVisible();
    await expect(page.locator('.ap-textin-field')).toHaveCount(0);

    const marks = page.locator('.ap-selfcheck-mark');
    expect(await marks.count()).toBeGreaterThan(0);
    for (const disabled of await marks.evaluateAll((buttons) => buttons.map((b) => b.disabled))) {
      expect(disabled).toBe(true);
    }

    const details = page.locator('details.ap-selfcheck-answer').first();
    await expect(details).not.toHaveAttribute('open', '');
    await page.locator('.ap-selfcheck-answer summary').first().click();
    await expect(details).toHaveAttribute('open', '');
  } finally {
    await context.close();
  }
});

test('every mediafigure image on both biology sections and a microbiology section loads from its vendored media path', async ({ page }) => {
  const errors = [];
  const onConsole = (msg) => { if (msg.type() === 'error') errors.push(msg.text()); };
  page.on('console', onConsole);

  for (const route of [
    '/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology/',
    '/life-health-sciences/biology/01-the-study-of-life/02-themes-and-concepts-of-biology/',
    // Microbiology vendors its media under its own manifest (data/media/microbiology.json).
    '/life-health-sciences/microbiology/01-an-invisible-world/01-what-our-ancestors-knew/',
  ]) {
    await gotoBuiltPage(page, route);
    const images = page.locator('.ap-mediafigure img');
    const count = await images.count();
    expect(count, `${route} has no mediafigure images`).toBeGreaterThan(0);

    for (let i = 0; i < count; i += 1) {
      const image = images.nth(i);
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(async () => image.evaluate((img) => img.complete && img.naturalWidth > 0), {
          timeout: 10_000,
        })
        .toBe(true);
      const attrs = await image.evaluate((img) => ({
        width: img.getAttribute('width'),
        height: img.getAttribute('height'),
        alt: img.getAttribute('alt'),
        decoding: img.getAttribute('decoding'),
        currentSrc: img.currentSrc,
      }));
      expect(attrs.width, `${route} image ${i} missing width`).toBeTruthy();
      expect(attrs.height, `${route} image ${i} missing height`).toBeTruthy();
      expect(attrs.alt, `${route} image ${i} missing alt`).toBeTruthy();
      expect(attrs.decoding, `${route} image ${i} missing decoding`).toBe('async');
      // Each book vendors its media under /media/<book>/ (data/media/<book>.json).
      const book = route.split('/')[2];
      expect(attrs.currentSrc, `${route} image ${i} not served from /media/${book}/`)
        .toContain(`/media/${book}/`);
    }
  }

  page.off('console', onConsole);
  expect(errors, 'console errors while loading mediafigures').toEqual([]);
});

test('every rail and sidebar carries a contact mailto whose subject names the page', async ({ page }) => {
  // utils/contact-mailto.html: the "Questions or concerns?" link renders in
  // the right rail (toc.html — the inline column from xl up, the "On this
  // page" drawer below) and once in the sidebar (sidebar.html: a single
  // <li> that serves the phone drawer and the md–xl sidebar, which
  // custom.css hides at xl+ where the rail takes over) — same href in both,
  // subject pre-filled as "<Book> <section#> - <Title>" from the OpenStax
  // front matter, so a reader's email arrives already saying where they were.
  const cases = [
    ['/math/precalculus/05-trigonometric-functions/01-angles/',
      'mailto:contact@athenaeumpopuli.org?subject=Precalculus%205.1%20-%20Angles'],
    ['/math/precalculus/05-trigonometric-functions/',
      'mailto:contact@athenaeumpopuli.org?subject=Precalculus%20Chapter%205%20-%20Trigonometric%20Functions'],
    ['/math/precalculus/knowledge-check-01-06/',
      'mailto:contact@athenaeumpopuli.org?subject=Precalculus%20-%20Knowledge%20Check%3A%20Chapters%201%E2%80%936'],
  ];
  for (const [route, href] of cases) {
    await gotoBuiltPage(page, route);
    const railLink = page.locator('nav.hextra-toc a[href^="mailto:"]');
    await expect(railLink, `rail contact link on ${route}`).toHaveCount(1);
    await expect(railLink).toHaveAttribute('href', href);
    const sidebarLinks = page.locator('aside a[href^="mailto:"]');
    await expect(sidebarLinks, `sidebar contact links on ${route}`).toHaveCount(1);
    for (const link of await sidebarLinks.all()) {
      await expect(link).toHaveAttribute('href', href);
    }
  }

  // The About page opens with a Contact us section whose in-content link
  // (contact-email shortcode) carries the same address, subject "About".
  await gotoBuiltPage(page, '/about/');
  const aboutLink = page.locator('article a[href^="mailto:"], main a[href^="mailto:"]').first();
  await expect(aboutLink).toHaveAttribute(
    'href', 'mailto:contact@athenaeumpopuli.org?subject=About',
  );
  await expect(aboutLink).toHaveText('contact@athenaeumpopuli.org');
});

test('KaTeX display math sits on the math axis, and the WebKit baseline shim is shipped but inert here', async ({ page }) => {
  // Safari 26.5 lays out KaTeX's vlist-t2 inline-tables with their baseline
  // at the table bottom in some zoom states (a cases brace a full depth below
  // its rows; a determinant block ~40px high against "D ="). The head-bundle
  // shim probes each vlist-t2 against a temporary baseline strut and corrects
  // only elements that measure wrong — so in this healthy engine it must be a
  // verified no-op that leaves no probe artifacts, while the geometry check
  // itself would catch any future engine/CSS drift that moves rows off the
  // math axis (the vendored-KaTeX version-coupling failure mode).
  await gotoBuiltPage(page, '/math/precalculus/09-systems-of-equations-and-inequalities/08-solving-systems-with-cramers-rule/');
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  }));

  const headSrc = await page.locator('script[src*="main-head"]').getAttribute('src');
  const bundle = await (await page.request.get(headSrc)).text();
  expect(bundle, 'baseline shim missing from the head bundle').toContain('vlist-t2');

  const audit = await page.evaluate(() => {
    const out = { corrected: 0, struts: 0, blocks: [] };
    out.corrected = [...document.querySelectorAll('.katex .vlist-t2')]
      .filter((el) => el.style.verticalAlign !== '').length;
    out.struts = [...document.querySelectorAll('.katex span')]
      .filter((el) => el.style.height === '1px' && el.style.width === '0px').length;
    for (const disp of document.querySelectorAll('.katex-display')) {
      const kh = disp.querySelector('.katex-html');
      const base = kh && kh.querySelector('.base');
      const tables = kh ? [...kh.querySelectorAll('.mtable')] : [];
      if (!base || !tables.length) continue;
      const strut = document.createElement('span');
      strut.style.cssText = 'display:inline-block;width:0;height:1px;vertical-align:baseline;';
      base.appendChild(strut);
      const baseline = strut.getBoundingClientRect().bottom;
      strut.remove();
      let top = Infinity;
      let bottom = -Infinity;
      for (const t of tables) {
        const r = t.getBoundingClientRect();
        top = Math.min(top, r.top);
        bottom = Math.max(bottom, r.bottom);
      }
      out.blocks.push((top + bottom) / 2 - baseline);
    }
    return out;
  });
  expect(audit.corrected, 'shim corrected elements in a healthy engine').toBe(0);
  expect(audit.struts, 'probe struts leaked into the DOM').toBe(0);
  expect(audit.blocks.length).toBeGreaterThan(30);
  for (const delta of audit.blocks) {
    // Rows center sits just above the baseline (the math axis, ~ -6px at this
    // font size); a vlist-t2 baseline failure shifts it by tens of pixels.
    expect(delta, 'display rows off the math axis').toBeGreaterThan(-12);
    expect(delta, 'display rows off the math axis').toBeLessThan(0);
  }

  // Exercise the shim's re-probe path (it re-runs on resize) and confirm it
  // stays inert rather than accumulating corrections.
  await page.setViewportSize({ width: 900, height: 800 });
  await page.evaluate(() => new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  }));
  const after = await page.evaluate(() => [...document.querySelectorAll('.katex .vlist-t2')]
    .filter((el) => el.style.verticalAlign !== '').length);
  expect(after, 'shim corrected elements after resize in a healthy engine').toBe(0);
});

test('the shelf drawer names its books, and the navbar switches shape by width', async ({ page }) => {
  // Book roots carry linkTitle "Overview" for their own book-scoped sidebar;
  // listed under the shelf they must read as the books, not "Overview" ×4
  // (layouts/_partials/sidebar.html, sidebar-scoped-branch).
  await page.setViewportSize({ width: 390, height: 844 });
  await gotoBuiltPage(page, '/math/');
  await page.locator('.hextra-hamburger-menu').click();
  const drawerLinks = await page.locator('.hextra-sidebar-container a:visible').allInnerTexts();
  const trimmed = drawerLinks.map((text) => text.trim());
  for (const book of ['Prealgebra', 'Elementary Algebra', 'Intermediate Algebra', 'Precalculus']) {
    expect(trimmed, `drawer lists ${book}`).toContain(book);
  }
  expect(trimmed.filter((text) => text === 'Overview')).toEqual([]);
  // Every shelf appears exactly once in the drawer — the navbar's width-switched
  // "Library" duplicate (hugo.toml [menu], drawer = false) must not leak in.
  for (const shelf of ['Math', 'Physical Sciences', 'Life & Health Sciences', 'Engineering & Computing', 'Social Sciences & Business', 'Humanities']) {
    expect(trimmed.filter((text) => text === shelf), `${shelf} once in the drawer`).toHaveLength(1);
  }

  // Between md and xl the six flat shelf links fold into one "Library"
  // dropdown; from xl up the flat links return and the dropdown goes. Either
  // way the site title must stay on screen (assets/css/custom.css, ap-nav-*).
  const shape = () => page.evaluate(() => {
    const visible = (el) => el.getBoundingClientRect().width > 0;
    const nav = document.querySelector('nav');
    return {
      titleLeft: Math.round(nav.querySelector('a').getBoundingClientRect().left),
      flat: [...nav.querySelectorAll('.ap-nav-shelf')].filter(visible).length,
      library: [...nav.querySelectorAll('.ap-nav-library')].filter(visible).length,
    };
  });
  await page.setViewportSize({ width: 1000, height: 800 });
  expect(await shape()).toEqual({ titleLeft: 24, flat: 0, library: 1 });
  await page.locator('.ap-nav-library .hextra-nav-menu-toggle').click();
  await expect(page.locator('.ap-nav-library [role="menuitem"]')).toHaveCount(6);
  await page.setViewportSize({ width: 1440, height: 800 });
  const wide = await shape();
  expect(wide.flat).toBe(6);
  expect(wide.library).toBe(0);
  expect(wide.titleLeft).toBeGreaterThanOrEqual(0);
});

test('the navbar folds to a top-right cluster of logo, search, and scroll-to-top while reading, and unfolds at the top', async ({ page }) => {
  // A row of six shelf links pinned above every paragraph is noise for a
  // learner inside one book. assets/js/navbar-compact.js marks the container
  // once the page has scrolled; assets/css/custom.css ("Compact navbar on
  // scroll") decides what folds: the bar goes away and a 3rem cluster of the
  // logo, search, and the button sits at the top-right, over the "On this
  // page" rail column, while the sticky container keeps its 4rem in flow so
  // the article does not jump; the sidebar rises to the top and the rail
  // meets the cluster.
  await page.setViewportSize({ width: 1440, height: 800 });
  await gotoBuiltPage(page, '/math/prealgebra/03-integers/03-subtract-integers/');

  const shape = () => page.evaluate(() => {
    const visible = (el) => Boolean(el) && el.getBoundingClientRect().width > 0;
    const container = document.querySelector('.hextra-nav-container');
    const nav = container.querySelector('nav');
    const box = (el) => el.getBoundingClientRect();
    const logoBox = box(nav.querySelector('a'));
    const searchBox = box(nav.querySelector('.hextra-search-wrapper'));
    return {
      compact: document.documentElement.classList.contains('ap-nav-compact'),
      height: Math.round(box(nav).height),
      flowHeight: Math.round(box(container).height),
      // Gap between the logo and the search box; whether the cluster is
      // flush with the viewport's right edge (within a scrollbar's width) and
      // the logo starts on the rail heading's left edge; and whether the
      // painted backdrop is the cluster's width, not the viewport's.
      adjacent: Math.round(searchBox.left - logoBox.right) < 24,
      flushRight: Math.abs(box(nav).right - document.documentElement.clientWidth) < 2,
      logoOnRail: Math.abs(logoBox.left - box(document.querySelector('.hextra-toc > div')).left) < 2,
      backdropWidth: Math.round(box(container.querySelector('.hextra-nav-container-blur')).width),
      sidebarTop: Math.round(box(document.querySelector('.hextra-sidebar-container')).top),
      tocTop: Math.round(box(document.querySelector('.hextra-toc > div')).top),
      logo: visible(nav.querySelector('a > img')),
      title: visible(nav.querySelector('a > span')),
      shelves: [...nav.querySelectorAll('.ap-nav-shelf')].filter(visible).length,
      pages: [...nav.querySelectorAll('.ap-nav-page')].filter(visible).length,
      search: visible(nav.querySelector('.hextra-search-input')),
      top: visible(nav.querySelector('.ap-nav-top')),
    };
  });

  expect(await shape()).toEqual({
    // `flushRight` says nothing here: the full bar is a centred 90rem row.
    compact: false, height: 64, flowHeight: 64, adjacent: false, flushRight: expect.any(Boolean), logoOnRail: false,
    backdropWidth: 1440, sidebarTop: 64, tocTop: 64,
    logo: true, title: true, shelves: 6, pages: 2, search: true, top: false,
  });

  // The article must not move when the bar folds: the first heading keeps
  // its viewport position across the threshold.
  const headingTop = () => page.evaluate(() =>
    Math.round(document.querySelector('main h2').getBoundingClientRect().top));
  await page.evaluate(() => window.scrollTo(0, 900));
  await expect.poll(async () => (await shape()).compact).toBe(true);
  const foldedHeadingTop = await headingTop();
  expect(await shape()).toEqual({
    compact: true, height: 48, flowHeight: 64, adjacent: true, flushRight: true, logoOnRail: true,
    backdropWidth: 256, sidebarTop: 0, tocTop: 48,
    logo: true, title: false, shelves: 0, pages: 0, search: true, top: true,
  });
  // The article's top strip is clear: nothing in the container's box catches
  // a click left of the cluster.
  expect(await page.evaluate(() => {
    const hit = document.elementFromPoint(600, 24);
    return Boolean(hit && hit.closest('.hextra-nav-container'));
  }), 'the folded bar still covers the article').toBe(false);
  await page.evaluate(() => window.scrollTo(0, 60));
  await expect.poll(async () => (await shape()).compact).toBe(false);
  await page.evaluate(() => window.scrollTo(0, 900));
  await expect.poll(async () => (await shape()).compact).toBe(true);
  expect(await headingTop(), 'article shifted when the bar folded').toBe(foldedHeadingTop);
  // Folded controls are out of the tab order, not merely invisible: Tab from
  // the logo must land on the search box, never on a hidden shelf link.
  await page.evaluate(() => document.querySelector('.hextra-nav-container nav > a').focus());
  await page.keyboard.press('Tab');
  expect(await page.evaluate(() => document.activeElement.id)).toBe('hextra-search-input-navbar');

  // The button scrolls to the top, the full bar returns, and focus — which
  // would otherwise fall to <body> as the button leaves the layout — is on
  // the logo link.
  await page.locator('.ap-nav-top').click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect.poll(async () => (await shape()).compact).toBe(false);
  expect((await shape()).shelves).toBe(6);
  expect(await page.evaluate(
    () => document.activeElement === document.querySelector('.hextra-nav-container nav > a'),
  )).toBe(true);

  // Below xl there is no rail column under the cluster and the article runs
  // to the right edge, so a cluster-wide backdrop floated over the article's
  // right end. There the backdrop spans the viewport: the article scrolls
  // under a 3rem strip that catches clicks, and the sidebar stops beneath it.
  await page.setViewportSize({ width: 1100, height: 800 });
  await page.evaluate(() => window.scrollTo(0, 900));
  await expect.poll(async () => (await shape()).compact).toBe(true);
  expect(await page.evaluate(() => {
    const blur = document.querySelector('.hextra-nav-container-blur').getBoundingClientRect();
    const hit = document.elementFromPoint(400, 24);
    return {
      left: Math.round(blur.left),
      spans: Math.abs(blur.right - document.documentElement.clientWidth) < 2,
      height: Math.round(blur.height),
      stripCatches: Boolean(hit && hit.closest('.hextra-nav-container')),
      sidebarTop: Math.round(document.querySelector('.hextra-sidebar-container').getBoundingClientRect().top),
    };
  }), 'below xl the folded bar must not float over the article').toEqual({
    left: 0, spans: true, height: 48, stripCatches: true, sidebarTop: 48,
  });

  // Below md the shelves already live in the hamburger drawer and the theme
  // keeps the search box out of the bar; folding must leave the hamburger in
  // the cluster beside the logo and the button, and the drawer must open
  // beneath the cluster so the hamburger that closes it stays reachable.
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 900));
  await expect.poll(async () => (await shape()).compact).toBe(true);
  const hamburgerVisible = await page.locator('.hextra-hamburger-menu').isVisible();
  expect(hamburgerVisible).toBe(true);
  expect((await shape()).top).toBe(true);
  expect(await page.evaluate(() => {
    const box = (sel) => document.querySelector(sel).getBoundingClientRect();
    const nav = box('.hextra-nav-container nav');
    const hamburger = box('.hextra-hamburger-menu');
    return { navRight: Math.round(nav.right), hamburgerInside: hamburger.right <= nav.right + 1 && hamburger.top >= nav.top - 1, navWidth: Math.round(nav.width) };
  })).toEqual({ navRight: 390, hamburgerInside: true, navWidth: expect.any(Number) });
  await page.locator('.hextra-hamburger-menu').click();
  await expect(page.locator('.hextra-sidebar-container')).toHaveAttribute('aria-hidden', 'false');
  // The theme pads the drawer by --navbar-height plus its banner allowance;
  // with the variable held at 3rem the drawer's list starts below the
  // cluster rather than under it.
  expect(await page.evaluate(() => {
    const drawer = document.querySelector('.hextra-sidebar-container');
    return Math.round(parseFloat(getComputedStyle(drawer).paddingTop));
  }), 'the drawer must start below the 3rem cluster').toBeGreaterThanOrEqual(48);
  expect(await page.locator('.hextra-hamburger-menu').isVisible()).toBe(true);
});

test('heading lists in the rail and sidebar typeset inline math instead of printing TeX', async ({ page }) => {
  // The section headings render their $...$ through Hugo's passthrough, but
  // the "On this page" rail (layouts/_partials/toc.html) and the sidebar's
  // in-page heading list (sidebar.html, shown below xl) print each heading's
  // .Title themselves; both go through the mathtext partial so a reader never
  // sees "$m = \\tfrac{\\text{rise}}{\\text{run}}$". tools/build/audit-build.mjs
  // guards every page for the same leak at build time.
  await page.setViewportSize({ width: 1440, height: 800 });
  await gotoBuiltPage(page, '/math/elementary-algebra/04-graphs/04-understand-slope-of-a-line/');
  const rail = page.locator('.hextra-toc a', { hasText: 'to find the slope of a line from its graph' }).first();
  await expect(rail).toBeVisible();
  await expect(rail.locator('.katex')).toHaveCount(1);
  expect(await rail.innerText()).not.toContain('$');

  // The sidebar list is rendered for the active page and shown by the theme
  // only in some layouts; assert the markup, which is what either layout shows.
  const sidebar = page.locator('.hextra-sidebar-container a[href^="#"]', { hasText: 'to find the slope of a line from its graph' });
  await expect(sidebar).toHaveCount(1);
  await expect(sidebar.locator('.katex')).toHaveCount(1);
  expect(await sidebar.evaluate((el) => el.textContent)).not.toContain('$');
});

test('the biology sidebar nests chapters under their unit, and a math sidebar stays flat', async ({ page }) => {
  // The unit is a level of the hierarchy: sidebar.html reads the book's
  // `units` list from data/openstax/source-map.json (recorded by build-map
  // from the pinned collection) and wraps each unit's chapters in a labelled
  // <li>. Math collections have no units, so their sidebars must not gain a
  // label. Checked on a section page, where the whole book tree renders.
  await gotoBuiltPage(page, '/life-health-sciences/biology/02-the-chemical-foundation-of-life/02-water/');
  // The aside renders the book tree ONCE — one list serves the phone drawer
  // and the desktop sidebar (sidebar.html) — so each unit appears exactly
  // once in the DOM, and all eight are visible at this viewport. A second
  // copy here is the duplicated-chrome regression audit-build budgets for.
  const units = page.locator('aside .ap-sidebar-unit');
  await expect(units).toHaveCount(8);
  const visible = page.locator('aside .ap-sidebar-unit:visible');
  await expect(visible).toHaveCount(8);
  await expect(visible.locator('> .ap-sidebar-unit-label')).toHaveText([
    'Unit 1: The Chemistry of Life',
    'Unit 2: The Cell',
    'Unit 3: Genetics',
    'Unit 4: Evolutionary Processes',
    'Unit 5: Biological Diversity',
    'Unit 6: Plant Structure and Function',
    'Unit 7: Animal Structure and Function',
    'Unit 8: Ecology',
  ]);
  // Each unit's own list holds exactly the authored chapters of that unit,
  // in source order, closed by the unit's Knowledge Check (one page per
  // unit, weighted after its last chapter), and every chapter, section, or
  // check link in the book sits inside a unit.
  const unit1Titles = await visible.nth(0).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit1Titles).toEqual(['The Study of Life', 'The Chemical Foundation of Life', 'Biological Macromolecules', 'Knowledge Check: Unit 1 — Chapters 1–3']);
  const unit2Titles = await visible.nth(1).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit2Titles).toEqual([
    'Cell Structure',
    'Structure and Function of Plasma Membranes',
    'Metabolism',
    'Cellular Respiration',
    'Photosynthesis',
    'Cell Communication',
    'Cell Reproduction',
    'Knowledge Check: Unit 2 — Chapters 4–10',
  ]);
  const unit3Titles = await visible.nth(2).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit3Titles).toEqual([
    'Meiosis and Sexual Reproduction',
    "Mendel's Experiments and Heredity",
    'Modern Understandings of Inheritance',
    'DNA Structure and Function',
    'Genes and Proteins',
    'Gene Expression',
    'Biotechnology and Genomics',
    'Knowledge Check: Unit 3 — Chapters 11–17',
  ]);
  const unit4Titles = await visible.nth(3).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit4Titles).toEqual([
    'Evolution and the Origin of Species',
    'The Evolution of Populations',
    'Phylogenies and the History of Life',
    'Knowledge Check: Unit 4 — Chapters 18–20',
  ]);
  const unit5Titles = await visible.nth(4).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit5Titles).toEqual(['Viruses', 'Prokaryotes: Bacteria and Archaea', 'Protists', 'Fungi', 'Seedless Plants', 'Seed Plants', 'Introduction to Animal Diversity', 'Invertebrates', 'Vertebrates', 'Knowledge Check: Unit 5 — Chapters 21–29']);
  const unit6Titles = await visible.nth(5).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit6Titles).toEqual(['Plant Form and Physiology', 'Soil and Plant Nutrition', 'Plant Reproduction', 'Knowledge Check: Unit 6 — Chapters 30–32']);
  const unit7Titles = await visible.nth(6).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit7Titles).toEqual(['The Animal Body: Basic Form and Function', 'Animal Nutrition and the Digestive System', 'The Nervous System', 'Sensory Systems', 'The Endocrine System', 'The Musculoskeletal System', 'The Respiratory System', 'The Circulatory System', 'Osmotic Regulation and Excretion', 'The Immune System', 'Animal Reproduction and Development', 'Knowledge Check: Unit 7 — Chapters 33–43']);
  const unit8Titles = await visible.nth(7).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit8Titles).toEqual(['Ecology and the Biosphere', 'Population and Community Ecology', 'Ecosystems', 'Conservation Biology and Biodiversity', 'Knowledge Check: Unit 8 — Chapters 44–47']);
  // 47 chapter landings + 208 sections + 8 unit Knowledge Checks, rendered once.
  const bookLinks = page.locator('aside a[href^="/life-health-sciences/biology/"]:not([href="/life-health-sciences/biology/"])');
  const insideUnit = page.locator('aside .ap-sidebar-unit a[href^="/life-health-sciences/biology/"]');
  expect(await bookLinks.count()).toBe(263);
  expect(await insideUnit.count()).toBe(263);
  // The desktop sidebar is the drawer list with its drawer-only rows hidden:
  // the shelf entry and the book's "Overview" row wrap the tree as
  // .ap-sidebar-shell (row hidden, indentation flattened from md up), and
  // the other shelves, Home, and About are hx:md:hidden. So at 1280 the first
  // visible sidebar link is the first chapter, sitting where the old desktop
  // list drew it — the unit's own indent inside the aside's 1rem padding —
  // and no shell row or foreign shelf shows.
  const visibleTexts = (await page.locator('aside.hextra-sidebar-container a:visible').allInnerTexts()).map((t) => t.trim());
  expect(visibleTexts[0]).toBe('The Study of Life');
  expect(visibleTexts).not.toContain('Overview');
  expect(visibleTexts).not.toContain('Home');
  expect(visibleTexts).not.toContain('Math');
  const firstChapter = await page.locator('aside.hextra-sidebar-container a:visible').first().boundingBox();
  const aside = await page.locator('aside.hextra-sidebar-container').boundingBox();
  expect(firstChapter.x - aside.x).toBe(40);
  // The label is text, not a control: nothing to focus, nothing to click.
  await expect(page.locator('aside .ap-sidebar-unit-label a, aside .ap-sidebar-unit-label button')).toHaveCount(0);

  await gotoBuiltPage(page, '/math/precalculus/01-functions/01-functions-and-function-notation/');
  await expect(page.locator('aside .ap-sidebar-unit')).toHaveCount(0);
});


test('a sort-bins grades the mapping with partial credit and returns misplaced items to the tray', async ({ page }) => {
  await gotoBuiltPage(page, '/life-health-sciences/biology/10-cell-reproduction/05-prokaryotic-cell-division/');
  const card = page.locator('sort-bins');
  await expect(card).toHaveCount(1);
  await waitForUpgrade(card, (el) => (
    Boolean(customElements.get('sort-bins')) && !el.querySelector('.ap-sortbins-check')?.disabled
  ));
  await card.scrollIntoViewIfNeeded();

  const places = card.locator('.ap-sortbins-place');
  await expect(card.locator('.ap-sortbins-item')).toHaveCount(7);
  await expect(places).toHaveCount(4);

  // Grading with the tray still full names the gap, not a wrong answer.
  await card.locator('.ap-sortbins-check').click();
  await expect(card.locator('.ap-sortbins-feedback')).toHaveText(/Place all items first/);

  // Everything into the LAST bin: two items are keyed there, so this grades
  // partial and the five misplaced items return to the tray.
  const tray = card.locator('.ap-sortbins-tray .ap-sortbins-item');
  while (await tray.count()) {
    await tray.first().click();
    await places.nth(3).click();
  }
  await card.locator('.ap-sortbins-check').click();
  await expect(card.locator('.ap-sortbins-feedback')).toHaveText(/2 of 7 placed correctly — the misplaced items are back in the tray/);
  await expect(tray).toHaveCount(5);

  // Now the keyed mapping.
  const key = [
    ['Single circular chromosome in a nucleoid region', 0],
    ['Chromosomes attach to the intact nuclear envelope', 1],
    [/^Mitotic spindle forms from the centrioles$/, 2],
    ['FtsZ proteins assemble into a ring', 0],
    ['Division occurs through binary fission', 0],
  ];
  for (const [label, bin] of key) {
    await card.locator('.ap-sortbins-item', { hasText: label }).click();
    await places.nth(bin).click();
  }
  await card.locator('.ap-sortbins-check').click();
  await expect(card.locator('.ap-sortbins-feedback')).toHaveText(/^Correct/);
  expect(await card.locator('.ap-sortbins-item').first().getAttribute('aria-disabled')).toBe('true');
});

// Pins the _moveToBin wrapper-reuse fix: the test above only ever moves
// tray → bin, where a fresh <li> is correct. Moving an already-placed item
// bin → bin (or back into its original bin) used to always create a new
// <li> and append the button to it, orphaning an empty <li> in the bin the
// item came from — a stray flex gap and a phantom listitem in the a11y
// tree. This drives one item through bin 0 → bin 1 → bin 0 and asserts
// exactly one <li> exists afterward, holding the button, in bin 0.
test('moving an already-placed sort-bins item between bins leaves no empty list item behind', async ({ page }) => {
  await gotoBuiltPage(page, '/life-health-sciences/biology/10-cell-reproduction/05-prokaryotic-cell-division/');
  const card = page.locator('sort-bins');
  await expect(card).toHaveCount(1);
  await waitForUpgrade(card, (el) => (
    Boolean(customElements.get('sort-bins')) && !el.querySelector('.ap-sortbins-check')?.disabled
  ));
  await card.scrollIntoViewIfNeeded();

  const places = card.locator('.ap-sortbins-place');

  const first = card.locator('.ap-sortbins-tray .ap-sortbins-item').first();
  const label = await first.textContent();
  await first.click();
  await places.nth(0).click();
  await expect(card.locator('.ap-sortbins-feedback')).toHaveText(/1 of 7 items placed/);

  const item = card.locator('.ap-sortbins-item', { hasText: label });
  await item.click();
  await places.nth(1).click();
  await expect(card.locator('.ap-sortbins-feedback')).toHaveText(/1 of 7 items placed/);

  await item.click();
  await places.nth(0).click();
  await expect(card.locator('.ap-sortbins-feedback')).toHaveText(/1 of 7 items placed/);

  await expect(card.locator('.ap-sortbins-bin-items li')).toHaveCount(1);
  await expect(card.locator('.ap-sortbins-bin-items li:not(:has(.ap-sortbins-item))')).toHaveCount(0);
  await expect(card.locator('.ap-sortbins-bin-items').nth(0).locator('li')).toHaveCount(1);
  await expect(card.locator('.ap-sortbins-bin-items').nth(1).locator('li')).toHaveCount(0);
});

test('the "On this page" rail is a right-hand drawer below xl, opened from the navbar, and the inline rail from xl up', async ({ page }) => {
  // layouts/_partials/toc.html keeps ONE rail element at every width. From
  // xl (80rem) up it is the theme's inline column; below that, where the
  // theme simply hid it, assets/css/custom.css ("On this page drawer") makes
  // it an off-canvas panel on the right and assets/js/toc-drawer.js drives
  // it from the navbar's "On this page" button (layouts/_partials/
  // navbar.html): closed it is inert and aria-hidden, open it inerts the
  // page behind its scrim, and the two drawers never overlap — opening this
  // one closes the theme's hamburger drawer and the hamburger closes this.
  const route = '/math/prealgebra/03-integers/03-subtract-integers/';
  const state = () => page.evaluate(() => {
    const html = document.documentElement;
    const nav = document.querySelector('nav.hextra-toc');
    const box = nav.getBoundingClientRect();
    return {
      open: html.classList.contains('ap-toc-open'),
      fixed: getComputedStyle(nav).position === 'fixed',
      // Flush with the viewport's right edge, the rail column's width.
      onScreen: Math.abs(box.right - html.clientWidth) < 1 && Math.round(box.width) === 256,
      ariaHidden: nav.getAttribute('aria-hidden'),
      inert: nav.inert,
      mainInert: document.querySelector('main').inert,
      asideInert: document.querySelector('aside.hextra-sidebar-container').inert,
      expanded: document.querySelector('.ap-nav-toc')?.getAttribute('aria-expanded') ?? null,
      hamburgerOpen: document.querySelector('.hextra-hamburger-menu svg').classList.contains('open'),
    };
  });
  const html = page.locator('html');
  const drawer = page.locator('nav.hextra-toc');
  const button = page.locator('.ap-nav-toc');
  const hamburger = page.locator('.hextra-hamburger-menu');

  await page.setViewportSize({ width: 390, height: 844 });
  await gotoBuiltPage(page, route);
  await expect(button).toBeVisible();
  await expect(drawer).toBeHidden();
  expect(await state()).toMatchObject({
    open: false, fixed: true, ariaHidden: 'true', inert: true, mainInert: false, asideInert: true, expanded: 'false',
  });

  await button.click();
  await expect(html).toHaveClass(/ap-toc-open/);
  await expect(drawer).toBeVisible();
  // The panel slides in over 0.4s; wait for it to settle against the edge.
  await expect.poll(async () => (await state()).onScreen).toBe(true);
  expect(await state()).toMatchObject({
    open: true, fixed: true, onScreen: true, ariaHidden: null, inert: false, mainInert: true, asideInert: true, expanded: 'true',
  });
  // The panel is the page's own heading list: every link targets a heading
  // inside the article, and every h2 is listed.
  const targets = await drawer.locator('a[href^="#"]').evaluateAll((links) =>
    links.map((link) => {
      const target = document.getElementById(decodeURIComponent(link.getAttribute('href').slice(1)));
      return Boolean(target && target.closest('main#content'));
    }));
  expect(targets.length).toBeGreaterThan(5);
  expect(targets.every(Boolean), 'every drawer link targets a heading in the article').toBe(true);
  const headings = (await page.locator('main#content h2').allInnerTexts()).map((text) => text.trim());
  const listed = (await drawer.locator('a[href^="#"]').allInnerTexts()).map((text) => text.trim());
  for (const heading of headings) expect(listed, `drawer lists "${heading}"`).toContain(heading);

  // A heading link jumps and closes; focus follows the anchor, not the button.
  await drawer.locator('a[href^="#"]').nth(1).click();
  await expect(html).not.toHaveClass(/ap-toc-open/);
  await expect(drawer).toBeHidden();
  expect(page.url()).toContain('#');
  expect(await state()).toMatchObject({ open: false, ariaHidden: 'true', inert: true, mainInert: false, expanded: 'false' });
  await expect(button).not.toBeFocused();

  // Escape closes and returns focus to the button; so does the scrim (clicked
  // on the strip of page the 16rem panel leaves uncovered).
  await page.evaluate(() => window.scrollTo(0, 0));
  await button.click();
  await expect(html).toHaveClass(/ap-toc-open/);
  await page.keyboard.press('Escape');
  await expect(html).not.toHaveClass(/ap-toc-open/);
  await expect(button).toBeFocused();
  await button.click();
  await expect(html).toHaveClass(/ap-toc-open/);
  await page.locator('.ap-toc-scrim').click({ position: { x: 20, y: 400 } });
  await expect(html).not.toHaveClass(/ap-toc-open/);

  // One drawer at a time, in both directions.
  await hamburger.click();
  expect(await state()).toMatchObject({ hamburgerOpen: true, open: false, mainInert: true, asideInert: false });
  await button.click();
  expect(await state()).toMatchObject({ hamburgerOpen: false, open: true, mainInert: true, asideInert: true });
  await hamburger.click();
  expect(await state()).toMatchObject({ hamburgerOpen: true, open: false, mainInert: true, asideInert: false });
  await hamburger.click();
  expect(await state()).toMatchObject({ hamburgerOpen: false, open: false, mainInert: false, asideInert: true });

  // Between md and xl: the sidebar is a column, the rail is still the drawer,
  // and the open panel inerts that column too.
  await page.setViewportSize({ width: 1000, height: 800 });
  await expect(button).toBeVisible();
  await expect(drawer).toBeHidden();
  expect(await state()).toMatchObject({ open: false, fixed: true, ariaHidden: 'true', inert: true, asideInert: false });
  await button.click();
  await expect(drawer).toBeVisible();
  await expect.poll(async () => (await state()).onScreen).toBe(true);
  expect(await state()).toMatchObject({ open: true, fixed: true, onScreen: true, mainInert: true, asideInert: true });

  // Widening past xl while open hands the element back to the layout as the
  // inline rail: nothing fixed, nothing inert, no button.
  await page.setViewportSize({ width: 1440, height: 800 });
  await expect(button).toBeHidden();
  await expect(drawer).toBeVisible();
  expect(await state()).toMatchObject({
    open: false, fixed: false, ariaHidden: null, inert: false, mainInert: false, asideInert: false,
  });

  // A page with no heading list (the shelf landing sets toc: false) renders
  // neither the button nor the scrim.
  await page.setViewportSize({ width: 390, height: 844 });
  await gotoBuiltPage(page, '/math/');
  await expect(page.locator('.ap-nav-toc')).toHaveCount(0);
  await expect(page.locator('.ap-toc-scrim')).toHaveCount(0);
});

// ---- Chemistry: measured quantities typed into the real field ---------------
//
// The grader's `sig-figs:<n> last-digit:<k>` path is unit-tested in
// assets/js/lib/math/. What only a browser can show is what MathLive makes of
// the keystrokes before the grader sees them, and the engine work found three
// such defects by hand (a two-digit exponent leaving the superscript after
// one digit, a unit typed with "/" swallowing the number into a fraction, a
// formula vanishing from the field's accessible name). Chemistry 1.6 is the
// book's densest page of measured-quantity fill-ins, so it is the fixture:
// EVERY one of them is typed, key by key.

/** The keystrokes that type a numeric key: digits, sign, point, and `*10^n` for a power of ten. */
function keystrokesFor(answer) {
  const power = answer.match(/^(-?[\d.]+)\\times10\^\{(-?\d+)\}$/);
  if (power) return `${power[1]}*10^${power[2]}`;
  return /^-?[\d.]+$/.test(answer) ? answer : null;
}

test('every measured-quantity fill-in on Chemistry 1.6 grades its own key as typed', async ({ page }) => {
  test.setTimeout(240_000);
  await gotoBuiltPage(page, '/physical-sciences/chemistry/01-essential-ideas/06-mathematical-treatment-of-measurement-results/');
  const cards = page.locator('fill-in[data-answer-form*="sig-figs:"]').filter({ has: page.locator('math-field') });
  const count = await cards.count();
  expect(count, 'the page still carries its measured-quantity fill-ins').toBeGreaterThan(40);
  let powersOfTen = 0;
  for (let index = 0; index < count; index += 1) {
    const card = cards.nth(index);
    const answer = await card.getAttribute('data-answer');
    const keys = keystrokesFor(answer);
    expect(keys, `fill-in ${index} is keyed with a number this test can type: ${answer}`).not.toBeNull();
    if (answer.includes('\\times')) powersOfTen += 1;
    const field = card.locator('math-field');
    await focusMathField(page, field);
    await page.keyboard.type(keys, { delay: 12 });
    await card.getByRole('button', { name: /check/i }).click();
    await expect
      .poll(async () => card.evaluate((el) => el.status), { timeout: 5000, message: `key ${answer} typed as ${keys}` })
      .toBe('correct');
  }
  // The exponent case is the one MathLive's smart superscript used to break.
  expect(powersOfTen, 'at least one key is a power of ten with a typed exponent').toBeGreaterThan(3);
});

test('a measured-quantity field keeps a two-digit exponent together, reports a typed unit, and holds back the unrounded readout', async ({ page }) => {
  await gotoBuiltPage(page, '/physical-sciences/chemistry/01-essential-ideas/06-mathematical-treatment-of-measurement-results/');
  // The long-ton exercise: 1.0160 × 10³ kg, five significant figures.
  const card = page.locator('fill-in[data-question^="A long ton is defined as exactly 2240 lb."]');
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  const status = () => card.evaluate((el) => el.status);
  const feedback = card.locator('.ap-fillin-feedback');
  const check = async (keys) => {
    await clearMathField(field);
    await focusMathField(page, field);
    await page.keyboard.type(keys, { delay: 15 });
    await card.getByRole('button', { name: /check/i }).click();
  };

  // Every digit typed after "^" stays in the exponent: 10^12 is ten to the
  // twelfth, not ten squared followed by a 2.
  await check('1.0160*10^12');
  expect(await field.evaluate((el) => el.value)).toContain('10^{12}');
  await expect.poll(status).toBe('incorrect');

  // The unrounded value is right and not yet the answer.
  await check('1016.047');
  await expect.poll(status).toBe('form');
  await expect(feedback).toHaveText(/now round it to 5 significant figures/);

  // The right number with its unit typed after it. MathLive knows `kg` and
  // writes it `\\operatorname{\\mathrm{kg}}`; a compound unit typed with a
  // solidus becomes a fraction over everything before it; and the book's
  // abbreviation for inches ends in a period. Each is the right number
  // labelled, never a wrong answer.
  for (const labelled of ['1016.0 kg', '1016.0 kg/mol', '1016.0 min', '1016.0 in.']) {
    await check(labelled);
    await expect.poll(status, { message: labelled }).toBe('unit');
    await expect(feedback).toHaveText(/enter it without the unit/i);
  }

  // The plain decimal is the same number to the same figures.
  await check('1016.0');
  await expect.poll(status).toBe('correct');
});

// A plain keyboard has no times sign, and the first thing a learner types
// for 7.04 × 10² is the letter x. Until November 14, 2026 that x was read as
// a unit after 7.04, and every one of Chemistry's 55 scientific-notation
// fill-ins answered a right number with a bare "Not quite — try again."
// (found by typing every key of chapters 1–4 the way a learner would). The
// reading is unit-tested (significant-figures.test.mjs); what only the
// browser shows is what MathLive hands over for the keystrokes — `7.04x10^2`,
// the space dropped, a negative exponent braced.
test('a power of ten typed with the letter x for the times sign is read as scientific notation', async ({ page }) => {
  await gotoBuiltPage(page, '/physical-sciences/chemistry/01-essential-ideas/05-measurement-uncertainty-accuracy-and-precision/');
  const type = async (card, keys) => {
    const field = card.locator('math-field');
    await clearMathField(field);
    await focusMathField(page, field);
    await page.keyboard.type(keys, { delay: 15 });
    await card.getByRole('button', { name: /check/i }).click();
  };
  // 704 in exponential notation: the form token holds with an x as it does with ×.
  const positive = page.locator('fill-in[data-question$="significant figures: 704"]');
  await expect(positive).toHaveCount(1);
  const status = (card) => card.evaluate((el) => el.status);
  await type(positive, '70.4 x 10^1');
  await expect.poll(() => status(positive)).toBe('form');
  await expect(positive.locator('.ap-fillin-feedback')).toHaveText(/scientific notation/);
  await type(positive, '7.05 x 10^2');
  await expect.poll(() => status(positive)).toBe('incorrect');
  await type(positive, '7.04 x 10^2');
  expect(await positive.locator('math-field').evaluate((el) => el.value)).toMatch(/^7\.04x10\^\{?2\}?$/);
  await expect.poll(() => status(positive)).toBe('correct');
  // A negative exponent, and a capital X.
  const negative = page.locator('fill-in[data-question$="significant figures: 0.03344"]');
  await expect(negative).toHaveCount(1);
  await type(negative, '3.344X10^-2');
  await expect.poll(() => status(negative)).toBe('correct');
});

// Chemistry 3.1: a formula mass has ONE right answer, the sum of this book's
// periodic table (IUPAC's abridged standard atomic weights, five figures).
// Until November 12, 2026 the table printed four figures, the source's
// answer was the key, the table's value a second right answer, and a correct
// response was told both ("the source’s answer is 123.896 amu; this book’s
// own data give 123.88") — which read as two answers and no certainty. The
// grading is unit-tested in check-answer.test.mjs; the typed path — the
// field, its shortcode attribute, the feedback line — is only real here.
test('a formula mass has one right answer from the periodic table, and four-figure masses are told why they are close', async ({ page }) => {
  test.setTimeout(240_000);
  await gotoBuiltPage(page, '/physical-sciences/chemistry/03-composition-of-substances-and-solutions/01-formula-mass-and-the-mole-concept/');
  // No item of the page carries a second right value any more.
  expect(await page.evaluate(() => [...document.querySelectorAll('fill-in')]
    .filter((el) => (el.dataset.answerForm || '').includes('worked')).length)).toBe(0);
  const masses = page.locator('fill-in[data-answer-form="sig-figs:5 last-digit:1"], fill-in[data-answer-form="sig-figs:6 last-digit:1"]')
    .filter({ has: page.locator('math-field') })
    .filter({ hasText: /(molecular|formula|molar) mass/ });
  expect(await masses.count(), 'the page still carries its formula-mass items').toBeGreaterThanOrEqual(19);

  const card = page.locator('fill-in[data-answer="123.896"]');
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  const status = () => card.evaluate((el) => el.status);
  const feedback = card.locator('.ap-fillin-feedback');
  const check = async (keys) => {
    await clearMathField(field);
    await focusMathField(page, field);
    await page.keyboard.type(keys, { delay: 15 });
    await card.getByRole('button', { name: /check/i }).click();
  };
  // One phosphorus atom's mass off: wrong, and nothing more to say.
  await check('92.91');
  await expect.poll(status).toBe('incorrect');
  await expect(feedback).toHaveText(/^Not quite/);
  // What four-figure masses give (4 × 30.97): still wrong, and told the cause.
  await check('123.88');
  await expect.poll(status).toBe('incorrect');
  await expect(feedback).toHaveText(/^Close, but not within rounding of the answer\..*use every digit the table prints\.$/s);
  // The right number with its unit typed after it.
  await check('123.896 amu');
  await expect.poll(status).toBe('unit');
  await expect(feedback).toHaveText(/enter it without the unit/i);
  // The periodic table's value (4 × 30.974): correct, and ONE answer is shown.
  await check('123.896');
  await expect.poll(status).toBe('correct');
  await expect(feedback).toHaveText(/^Correct — .*123\.896.*amu.*\.$/s);
  await expect(feedback).not.toHaveText(/source|own data/);

  // Every formula-mass item on the page grades its own key as typed, with one answer shown.
  const count = await masses.count();
  for (let index = 0; index < count; index += 1) {
    const item = masses.nth(index);
    const answer = await item.getAttribute('data-answer');
    if (answer === '123.896') continue;
    const keys = keystrokesFor(answer);
    expect(keys, `fill-in ${index} is keyed with a number this test can type: ${answer}`).not.toBeNull();
    await focusMathField(page, item.locator('math-field'));
    await page.keyboard.type(keys, { delay: 12 });
    await item.getByRole('button', { name: /check/i }).click();
    await expect
      .poll(async () => item.evaluate((el) => el.status), { timeout: 5000, message: `key ${answer} typed as ${keys}` })
      .toBe('correct');
    await expect(item.locator('.ap-fillin-feedback')).not.toHaveText(/source|own data/);
  }
});

// Chemistry 1.4 keys each SI prefix's factor as a bare power of ten. Two
// things only the field can show: a NEGATIVE two-digit exponent typed after
// "^" stays whole (`10^-12` is `10^{-12}`, where an unbraced `10^-12` would
// grade incorrect), and the exact factor is right however it is written.

test('an SI prefix factor is typed as a bare power of ten, a negative two-digit exponent included', async ({ page }) => {
  test.setTimeout(120_000);
  await gotoBuiltPage(page, '/physical-sciences/chemistry/01-essential-ideas/04-measurements/');
  const cards = page.locator('fill-in[data-answer^="10^{"]').filter({ has: page.locator('math-field') });
  const count = await cards.count();
  expect(count, 'the prefix exercise keys its eight factors').toBe(8);
  const exponents = [];
  for (let index = 0; index < count; index += 1) {
    const card = cards.nth(index);
    const answer = await card.getAttribute('data-answer');
    const exponent = answer.match(/^10\^\{(-?\d+)\}$/)[1];
    exponents.push(exponent);
    const field = card.locator('math-field');
    await focusMathField(page, field);
    await page.keyboard.type(`10^${exponent}`, { delay: 15 });
    // MathLive braces an exponent of two characters or more and leaves a
    // single digit bare; either way every character typed is in the exponent.
    const held = exponent.length === 1 ? [answer, `10^${exponent}`] : [answer];
    expect(held, `10^${exponent} as typed`).toContain(await field.evaluate((el) => el.value));
    await card.getByRole('button', { name: /check/i }).click();
    await expect.poll(async () => card.evaluate((el) => el.status), { message: `key ${answer}` }).toBe('correct');
  }
  expect(exponents, 'the two-digit exponents of both signs are among them').toEqual(expect.arrayContaining(['-12', '12']));
});

test('an SI prefix factor is exact: a written zero is right, a neighbouring power is not', async ({ page }) => {
  await gotoBuiltPage(page, '/physical-sciences/chemistry/01-essential-ideas/04-measurements/');
  // A card answered correctly locks its field, so each check that ends
  // 'correct' is the last on its card.
  const typeInto = async (card, keys, clear) => {
    const field = card.locator('math-field');
    if (clear) await clearMathField(field);
    await focusMathField(page, field);
    await page.keyboard.type(keys, { delay: 15 });
    await card.getByRole('button', { name: /check/i }).click();
  };
  const centi = page.locator('fill-in[data-answer="10^{-2}"]');
  await typeInto(centi, '10^-3', false);
  await expect.poll(() => centi.evaluate((el) => el.status)).toBe('incorrect');
  await typeInto(centi, '0.010', true);
  await expect.poll(() => centi.evaluate((el) => el.status)).toBe('correct');
  // The book prints the factor with its multiplication sign, "× 10⁻¹".
  const deci = page.locator('fill-in[data-answer="10^{-1}"]');
  await typeInto(deci, '*10^-1', false);
  await expect.poll(() => deci.evaluate((el) => el.status)).toBe('correct');
});

// ---- Chemistry: what only the rendered page shows ---------------------------
//
// The pilot's chapter passed an author, a checker, a claim pass, and a blind
// solve, all reading Markdown. Five readers then compared the RENDERED pages
// with print and found three things no source gate can see: a worked
// example's display row wider than the column (the page scrolls it sideways
// with no scrollbar, so "(round to three significant figures)" ended at
// "(round to three sign"), `1.497 × 10⁻³` broken across two lines at its ×,
// and the source's half-width drawings filling the column. Each is held
// here, on every Chemistry section page the build has, so the next chapter
// is read by the test and not by a reader.

function chemistrySectionRoutes() {
  const root = 'public/physical-sciences/chemistry';
  const routes = [];
  for (const chapter of readdirSync(root, { withFileTypes: true })) {
    if (!chapter.isDirectory() || !/^\d\d-/.test(chapter.name)) continue;
    for (const section of readdirSync(`${root}/${chapter.name}`, { withFileTypes: true })) {
      if (section.isDirectory() && /^\d\d-/.test(section.name)) {
        routes.push(`/physical-sciences/chemistry/${chapter.name}/${section.name}/`);
      }
    }
  }
  return routes.sort();
}

// The book's reference pages (November 10, 2026): long data tables, where
// the same three failures can happen, and one more — a table wider than a
// phone must scroll inside its own box, never the page.
function chemistryAppendixRoutes() {
  const root = 'public/physical-sciences/chemistry/appendices';
  return readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^[a-z]-/.test(entry.name))
    .map((entry) => `/physical-sciences/chemistry/appendices/${entry.name}/`)
    .sort();
}

// Chemistry 2.3's Key equations line — one inline formula with a
// \left( … \right) group that cannot break — ran 20 px past a phone's
// screen, and the whole page scrolled sideways (found by the rendered-page
// reading of November 11, 2026; the appendix test below asked this only of
// the appendices). A list entry that is one formula now scrolls inside
// itself, and every page of the book is asked.
test('no Chemistry page scrolls sideways on a phone, and a Key equations line too wide for it scrolls inside itself', async ({ page }) => {
  const routes = [
    '/physical-sciences/chemistry/',
    '/physical-sciences/chemistry/appendices/',
    ...new Set(chemistrySectionRoutes().map((route) => route.replace(/[^/]+\/$/, ''))),
    ...chemistrySectionRoutes(),
    ...chemistryAppendixRoutes(),
  ];
  expect(routes.length).toBeGreaterThanOrEqual(29);
  test.setTimeout(60_000 + routes.length * 4_000);
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of routes) {
    await gotoBuiltPage(page, route);
    await page.evaluate(() => document.fonts.ready);
    const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(over, `${route} at 390 px: the page itself scrolls sideways`).toBeLessThanOrEqual(1);
  }
  // The line that did it: it scrolls inside its own box, and a keyboard reaches it.
  await gotoBuiltPage(page, '/physical-sciences/chemistry/02-atoms-molecules-and-ions/03-atomic-structure-and-symbolism/');
  await page.evaluate(() => document.fonts.ready);
  const line = page.locator('.content h2:has(> #key-equations) + ul > li > .katex:only-child');
  await expect(line).toHaveCount(1);
  await expect(line).toContainText('average mass');
  // Only that list: a lone symbol inside a sentence of another bullet (the
  // summary's "(Z)") is not made a box, which would put a gap after it.
  expect(await page.evaluate(() => [...document.querySelectorAll('.content li > .katex:only-child')]
    .filter((el) => !el.matches('.content h2:has(> #key-equations) + ul > li > .katex'))
    .map((el) => getComputedStyle(el).display).filter((display) => display !== 'inline'))).toEqual([]);
  await expect.poll(async () => line.evaluate((el) => ({
    scrolls: el.scrollWidth > el.clientWidth + 1,
    inside: el.getBoundingClientRect().right <= window.innerWidth + 0.5,
    reachable: el.getAttribute('tabindex'),
  }))).toEqual({ scrolls: true, inside: true, reachable: '0' });
  // Its bullet is still drawn: the scroll box is the formula, not the list item.
  expect(await line.evaluate((el) => getComputedStyle(el.parentElement).overflowX)).toBe('visible');
  // On a wide screen it does not scroll and is no tab stop.
  await page.setViewportSize({ width: 1280, height: 900 });
  await expect.poll(async () => line.evaluate((el) => ({ scrolls: el.scrollWidth > el.clientWidth + 1, reachable: el.getAttribute('tabindex') })))
    .toEqual({ scrolls: false, reachable: null });
  // Nothing of a fraction is cut by the box, on any Key equations line (1.6's have fractions).
  await gotoBuiltPage(page, '/physical-sciences/chemistry/01-essential-ideas/06-mathematical-treatment-of-measurement-results/');
  await page.evaluate(() => document.fonts.ready);
  const lines = page.locator('.content h2:has(> #key-equations) + ul > li > .katex:only-child');
  expect(await lines.count()).toBeGreaterThanOrEqual(4);
  expect(await lines.evaluateAll((els) => els.filter((el) => el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth + 1).length)).toBe(0);
});

test('a Chemistry appendix table scrolls inside its own box, its figures load, and a bracketed formula is not a link', async ({ page }) => {
  const routes = chemistryAppendixRoutes();
  expect(routes.length, 'the thirteen appendix pages were discovered in public/').toBe(13);
  test.setTimeout(60_000 + routes.length * 6_000);
  let tables = 0;
  let rows = 0;
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await gotoBuiltPage(page, route);
      const audit = await page.evaluate(() => {
        const content = document.querySelector('.content');
        const tablesHere = [...content.querySelectorAll('table')];
        return {
          tables: tablesHere.length,
          rows: content.querySelectorAll('tbody tr').length,
          pageScrolls: document.documentElement.scrollWidth - window.innerWidth,
          // A link inside a data cell that points at no page of this site and
          // no other: Markdown's reading of `[Co(en)₃](ClO₄)₃`.
          formulaLinks: [...content.querySelectorAll('td a')].map((a) => a.getAttribute('href'))
            .filter((href) => !/^(https?:|\/|#)/.test(href)),
          emptyCells: tablesHere.flatMap((table) => [...table.querySelectorAll('thead th')])
            .filter((th) => !th.textContent.trim()).length,
          katexErrors: content.querySelectorAll('.katex-error').length,
        };
      });
      expect(audit.pageScrolls, `${route} at ${width} px: the page itself scrolls sideways`).toBeLessThanOrEqual(1);
      expect(audit.formulaLinks, `${route}: a bracketed formula became a link`).toEqual([]);
      expect(audit.emptyCells, `${route}: a table has an unnamed column`).toBe(0);
      expect(audit.katexErrors, `${route}: KaTeX could not set a cell`).toBe(0);
      if (width === 1280) { tables += audit.tables; rows += audit.rows; }
    }
  }
  expect(tables, 'the appendices carry their tables').toBeGreaterThanOrEqual(24);
  expect(rows, 'and their rows: 403 in Appendix G alone').toBeGreaterThan(1000);
});

// The first formula a browser types (docs/subjects/chemistry.md "Formulas and
// equations"). The grader is unit-tested; what only the page shows is the
// field wired to it: the typing guide as the field's description, the
// "Read as" line following the keys, the grader's own message in place of a
// bare "Not quite", and an ion typed on a plain keyboard graded right.
// Chemistry 2.6 is the first page dense in ions.
test('a Chemistry formula field reads back what is typed, says what a bare symbol is missing, and grades an ion and a grouped formula', async ({ page }) => {
  await gotoBuiltPage(page, '/physical-sciences/chemistry/02-atoms-molecules-and-ions/06-ionic-and-molecular-compounds/');
  const upgraded = (el) => Boolean(customElements.get('text-in')) && Boolean(el.querySelector('.ap-textin-check'));
  const statusOf = (card) => expect.poll(async () => card.evaluate((el) => el.status), { timeout: 5000 });

  const ion = page.locator('text-in[data-answer="Se²⁻"]');
  await expect(ion).toHaveCount(1);
  await waitForUpgrade(ion, upgraded);
  await ion.scrollIntoViewIfNeeded();
  const field = ion.locator('.ap-textin-field');
  const guide = ion.locator('.ap-textin-guide');
  await expect(guide).toHaveText(/a charge after \^/);
  expect(await field.getAttribute('aria-describedby')).toBe(await guide.getAttribute('id'));
  // The right atom without its charge: wrong, and told what is missing — never the charge itself.
  await field.fill('Se');
  await expect(ion.locator('.ap-textin-reading')).toHaveText('Read as: Se');
  await field.press('Enter');
  await statusOf(ion).toBe('incorrect');
  await expect(ion.locator('.ap-textin-feedback')).toHaveText(/ends with its charge/);
  await expect(ion.locator('.ap-textin-feedback')).not.toHaveText(/2-|²⁻|Se/);
  // Typed on a plain keyboard, read in the book's print, and right.
  await field.fill('Se2-');
  await expect(ion.locator('.ap-textin-reading')).toHaveText('Read as: Se²⁻');
  await field.press('Enter');
  await statusOf(ion).toBe('correct');

  const salt = page.locator('text-in[data-answer="(NH₄)₂SO₄"]');
  await expect(salt).toHaveCount(1);
  await waitForUpgrade(salt, upgraded);
  await salt.scrollIntoViewIfNeeded();
  const saltField = salt.locator('.ap-textin-field');
  await saltField.fill('NH42SO4');
  await saltField.press('Enter');
  await statusOf(salt).toBe('incorrect');
  await saltField.fill('(NH4)2SO4');
  await expect(salt.locator('.ap-textin-reading')).toHaveText('Read as: (NH₄)₂SO₄');
  await saltField.press('Enter');
  await statusOf(salt).toBe('correct');
});

// A charge or a subscript written in Unicode is drawn by the subset face
// "AP SupSub" (assets/css/custom.css, tools/build/gen-body-font.py), not by
// the body face, whose own `⁻` is two or three pixels across. Three things can
// break silently: the file stops loading (the page still renders, small), the
// glyphs lose their size, or the face's line metrics push a line apart. The
// face draws each character as the body face's own glyph at the theme's <sup>
// size, so a real <sup>/<sub> set in the body stack is what it is compared
// with.
test('a Unicode charge or subscript is drawn by the enlarged subset font, as tall as a real <sup>, and adds no height to its line', async ({ page }) => {
  await gotoBuiltPage(page, '/physical-sciences/chemistry/02-atoms-molecules-and-ions/06-ionic-and-molecular-compounds/');
  await page.evaluate(() => document.fonts.ready);
  const measured = await page.evaluate(async () => {
    const prose = document.querySelector('main#content p');
    const style = getComputedStyle(prose);
    const px = parseFloat(style.fontSize);
    await document.fonts.load(`${px}px "AP SupSub"`, '⁻₂');
    await document.fonts.load(`${px * 0.75}px "AP Body"`, '2');
    const body = style.fontFamily;
    const context = document.createElement('canvas').getContext('2d');
    const ink = (font, text) => {
      context.font = font;
      const m = context.measureText(text);
      return { width: m.width, height: m.actualBoundingBoxAscent + m.actualBoundingBoxDescent, foot: -m.actualBoundingBoxDescent };
    };
    const line = (text, lineHeight) => {
      const p = document.createElement('p');
      p.textContent = text;
      if (lineHeight) p.style.lineHeight = lineHeight;
      prose.after(p);
      const height = p.getBoundingClientRect().height;
      p.remove();
      return height;
    };
    return {
      family: style.fontFamily,
      loaded: document.fonts.check(`${px}px "AP SupSub"`, '⁻₂'),
      // In the page itself, through the body font stack — not a canvas that
      // names the face.
      minusInProse: (() => {
        const span = document.createElement('span');
        span.textContent = '⁻';
        const sup = document.createElement('sup');
        sup.textContent = '−';
        prose.append(span, sup);
        const widths = { face: span.getBoundingClientRect().width / px, sup: sup.getBoundingClientRect().width / px };
        span.remove();
        sup.remove();
        return widths;
      })(),
      two: { face: ink(`${px}px "AP SupSub"`, '²'), sup: ink(`${px * 0.75}px ${body}`, '2') },
      sub: ink(`${px}px "AP SupSub"`, '₂'),
      // The theme raises a <sup> by half of its own (75%) font size and lowers
      // a <sub> by a quarter of it.
      supFoot: px * 0.75 * 0.5,
      subFoot: -px * 0.75 * 0.25,
      lines: { plain: line('Na and Cl'), charged: line('Na⁺ and Cl⁻, SO₄²⁻') },
      normalLines: { plain: line('Na and Cl', 'normal'), charged: line('Na⁺ and Cl⁻, SO₄²⁻', 'normal') },
    };
  });
  expect(measured.family, 'the body font stack leads with the subset face').toMatch(/^"?AP SupSub"?,/);
  expect(measured.loaded, 'the subset font file loaded').toBe(true);
  // The body face's own `⁻` has nearly the same advance as a real <sup>−</sup>
  // (0.43 em), so the advance cannot show which face drew it; the browser
  // says so instead.
  expect(measured.minusInProse.face, 'a superscript minus in prose is as wide as a real <sup>−</sup>').toBeCloseTo(measured.minusInProse.sup, 2);
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('DOM.enable');
  await cdp.send('CSS.enable');
  const { root } = await cdp.send('DOM.getDocument', { depth: -1 });
  const { nodeIds } = await cdp.send('DOM.querySelectorAll', { nodeId: root.nodeId, selector: 'main#content p' });
  let charged = 0;
  for (const nodeId of nodeIds) {
    const { fonts } = await cdp.send('CSS.getPlatformFontsForNode', { nodeId });
    if (fonts.some((font) => font.familyName === 'AP SupSub' && font.isCustomFont)) charged += 1;
  }
  expect(charged, 'the page\'s charges and subscripts are drawn by the subset face').toBeGreaterThan(0);
  expect(Math.abs(measured.two.face.height - measured.two.sup.height), 'a Unicode ² is as tall as a real <sup>2</sup>').toBeLessThan(1.5);
  expect(Math.abs(measured.two.face.foot - measured.supFoot), 'a Unicode ² stands where a real <sup>2</sup> stands').toBeLessThan(1.5);
  expect(Math.abs(measured.sub.foot - measured.subFoot), 'a Unicode ₂ stands where a real <sub>2</sub> stands').toBeLessThan(1.5);
  expect(measured.lines.charged, 'a prose line with charges is no taller than one without').toBe(measured.lines.plain);
  expect(measured.normalLines.charged, 'nor is one at `line-height: normal`').toBe(measured.normalLines.plain);
});

// The body face "AP Body" (assets/css/custom.css, tools/build/gen-body-font.py)
// exists so that capital I and lowercase l differ: in the system sans fonts
// CaI₂ reads as "Cal₂". It is Inter with its tailed l and seriffed I made the
// default letters, and with its contextual alternates left out, because Inter's
// `calt` draws a typed `->` as an arrow and moves parentheses up beside
// capitals. What can break silently: the file stops loading or a rule stops
// inheriting the stack (the page still renders, in the system font), the
// alternates are lost in a rebuild, or `calt` comes back. The browser itself
// says which font drew each element (CDP CSS.getPlatformFontsForNode), so the
// check is on the page, not on a canvas that names the face.
test('prose, a formula field and its "Read as" line are set in the body face, whose I and l differ and whose -> stays two characters', async ({ page }) => {
  await gotoBuiltPage(page, '/physical-sciences/chemistry/02-atoms-molecules-and-ions/07-chemical-nomenclature/');
  await page.evaluate(() => document.fonts.ready);

  const item = page.locator('text-in[data-answer="HgS"]');
  await waitForUpgrade(item, (el) => Boolean(customElements.get('text-in')) && Boolean(el.querySelector('.ap-textin-field')));
  await item.locator('.ap-textin-field').fill('CaI2');
  await expect(item.locator('.ap-textin-reading')).toHaveText('Read as: CaI₂');

  const cdp = await page.context().newCDPSession(page);
  await cdp.send('DOM.enable');
  await cdp.send('CSS.enable');
  const { root } = await cdp.send('DOM.getDocument', { depth: 0 });
  const drawnBy = async (selector) => {
    const { nodeId } = await cdp.send('DOM.querySelector', { nodeId: root.nodeId, selector });
    expect(nodeId, `${selector} is on the page`).toBeGreaterThan(0);
    const { fonts } = await cdp.send('CSS.getPlatformFontsForNode', { nodeId });
    // The face that drew the most glyphs; a stray character Inter lacks may
    // fall through to the next face in the stack.
    return [...fonts].sort((a, b) => b.glyphCount - a.glyphCount)[0];
  };
  for (const [selector, what] of [
    ['main#content p', 'regular prose'],
    ['main#content p strong', 'bold prose'],
    ['main#content p em', 'italic prose'],
    ['text-in[data-answer="HgS"] .ap-textin-field', 'a formula field'],
    ['text-in[data-answer="HgS"] .ap-textin-reading', 'its "Read as" line'],
  ]) {
    const font = await drawnBy(selector);
    expect(font?.familyName, `${what} is drawn by the body face`).toBe('AP Body');
    expect(font?.isCustomFont, `${what} is drawn by the web font, not a local one`).toBe(true);
  }
  const styles = await page.evaluate(() => ({
    bold: getComputedStyle(document.querySelector('main#content p strong')).fontWeight,
    italic: getComputedStyle(document.querySelector('main#content p em')).fontStyle,
    italicLoaded: [...document.fonts].some((face) => /AP Body/i.test(face.family) && face.style === 'italic' && face.status === 'loaded'),
  }));
  expect(Number(styles.bold), 'the bold sample is bold').toBeGreaterThanOrEqual(600);
  expect(styles.italic, 'the italic sample is italic').toBe('italic');
  expect(styles.italicLoaded, 'the italic file loaded, so italics are not slanted by the browser').toBe(true);

  const measured = await page.evaluate(async () => {
    await document.fonts.load('64px "AP Body"', 'Il->3x4(NH');
    const context = document.createElement('canvas').getContext('2d');
    // Kerning off: a kerned pair is not a substitution, and the comparison
    // below is with the characters' own advances.
    context.fontKerning = 'none';
    const measure = (family, text) => {
      context.font = `64px ${family}`;
      const m = context.measureText(text);
      return { advance: m.width, ink: m.actualBoundingBoxLeft + m.actualBoundingBoxRight, descent: m.actualBoundingBoxDescent };
    };
    const lookalike = (family) => Math.abs(measure(family, 'I').ink - measure(family, 'l').ink) / 64;
    const sum = (family, text) => [...text].reduce((total, character) => total + measure(family, character).advance, 0);
    return {
      body: lookalike('"AP Body"'),
      system: lookalike('system-ui, sans-serif'),
      arrow: { whole: measure('"AP Body"', '->').advance, parts: sum('"AP Body"', '->') },
      times: { whole: measure('"AP Body"', '3x4').advance, parts: sum('"AP Body"', '3x4') },
      paren: { beside: measure('"AP Body"', '(N').descent, alone: measure('"AP Body"', '(').descent },
    };
  });
  // Ink widths at 64 px: the seriffed I is about 0.26 em wide and the tailed l
  // about 0.16; the system font's two are bars within about 0.01 em of each
  // other. The second line is the control that shows the measure can fail.
  expect(measured.body, 'the body face\'s I and l are told apart by their ink').toBeGreaterThan(0.05);
  expect(measured.system, 'the control: the system font\'s I and l are the look-alike pair').toBeLessThan(0.02);
  // With Inter's `calt`, "->" is one arrow 59 px wide at 64 px where its two
  // characters are 67.6, and a "(" beside a capital moves up 3.4 px.
  expect(measured.arrow.whole, '"->" is drawn as its two characters').toBeCloseTo(measured.arrow.parts, 1);
  expect(measured.times.whole, '"3x4" is drawn as its three characters').toBeCloseTo(measured.times.parts, 1);
  expect(measured.paren.beside, 'a parenthesis beside a capital stays where it stands alone').toBeCloseTo(measured.paren.alone, 1);
});

// Exercise 2.47 asks "ionic or covalent?" of six compounds and, of the ionic
// ones only, the ions. In the open, the ion items stand under four compounds
// and answer the first question before it is asked; a `followup` holds them
// back until the compound's own multiple choice is answered
// (assets/js/components/shared/follow-up.js).
test('the ion items of an ionic compound appear only once the compound is answered as ionic, and a covalent compound has none', async ({ page }) => {
  await gotoBuiltPage(page, '/physical-sciences/chemistry/02-atoms-molecules-and-ions/06-ionic-and-molecular-compounds/');
  const ready = (el) => Boolean(customElements.get('multiple-choice')) && Boolean(customElements.get('ap-followup'))
    && el.querySelectorAll('.ap-mc-option:not([disabled])').length > 0;

  // Nothing of any follow-up is on show before an answer — neither rendered
  // nor reachable by keyboard or a screen reader.
  const followups = page.locator('ap-followup');
  await expect(followups).toHaveCount(4);
  await waitForUpgrade(page.locator('multiple-choice[data-question*="ions involved: BaO."]'), ready);
  for (const followup of await followups.all()) await expect(followup).toBeHidden();
  expect(await page.locator('ap-followup text-in').evaluateAll((items) => items.filter((item) => item.getClientRects().length > 0).length)).toBe(0);

  const barium = page.locator('multiple-choice[data-question*="ions involved: BaO."]');
  const ions = page.locator('multiple-choice[data-question*="ions involved: BaO."] + ap-followup');
  await expect(ions).toHaveCount(1);
  await barium.scrollIntoViewIfNeeded();
  // A wrong answer tells nothing more than "not quite".
  await barium.locator('.ap-mc-option[data-value="covalent"]').click();
  await expect(barium.locator('.ap-mc-feedback')).toHaveText('Not quite — try again.');
  await expect(ions).toBeHidden();
  // The right one shows both ion items and says so where the verdict is read.
  await barium.locator('.ap-mc-option[data-value="ionic"]').click();
  await expect(barium.locator('.ap-mc-feedback')).toHaveText('Correct! Two more questions follow.');
  await expect(ions).toBeVisible();
  await expect(ions.locator('text-in')).toHaveCount(2);
  await expect(ions.locator('text-in[data-answer="Ba²⁺"] .ap-textin-field')).toBeVisible();
  // …and they grade as any item does.
  const cation = ions.locator('text-in[data-answer="Ba²⁺"]');
  await cation.locator('.ap-textin-field').fill('Ba2+');
  await cation.locator('.ap-textin-field').press('Enter');
  await expect.poll(async () => cation.evaluate((el) => el.status)).toBe('correct');
  // The other three stay closed: one compound's answer opens only its own.
  expect(await followups.evaluateAll((all) => all.filter((el) => !el.hidden).length)).toBe(1);

  // A covalent compound: answered, and nothing appears.
  const fluoride = page.locator('multiple-choice[data-question*="ions involved: NF₃."]');
  await fluoride.scrollIntoViewIfNeeded();
  await fluoride.locator('.ap-mc-option[data-value="covalent"]').click();
  await expect(fluoride.locator('.ap-mc-feedback')).toHaveText('Correct!');
  expect(await fluoride.evaluate((el) => el.nextElementSibling?.localName)).not.toBe('ap-followup');
  expect(await followups.evaluateAll((all) => all.filter((el) => !el.hidden).length)).toBe(1);
});

// The periodic table is 1566 px wide and set in a 704 px column: its names
// and masses are a few pixels tall. A figure shown smaller than its file has
// an "Enlarge figure" link — a real link to the full-size file — which the
// viewer (assets/js/figure-enlarge.js) opens in place.
test('a figure shown smaller than its file can be enlarged in place: fit, the file\'s own pixels, pan, and back', async ({ page }) => {
  const route = '/physical-sciences/chemistry/02-atoms-molecules-and-ions/05-the-periodic-table/';
  await page.setViewportSize({ width: 1280, height: 900 });
  await gotoBuiltPage(page, route);

  // Which figures get the link: the ones wider than the column or scaled
  // down, and no others.
  const links = await page.evaluate(() => [...document.querySelectorAll('.ap-mediafigure')].map((figure) => ({
    stem: figure.dataset.stem,
    shrunk: Number(figure.querySelector(':scope > img').getAttribute('width')) > 704 || 'scale' in figure.dataset,
    linked: Boolean(figure.querySelector(':scope > .ap-mediafigure-actions > a.ap-mediafigure-enlarge')),
  })));
  expect(links.length).toBeGreaterThan(0);
  expect(links.filter((figure) => figure.shrunk !== figure.linked).map((figure) => figure.stem), 'the link is on exactly the figures shown under their size').toEqual([]);

  // Section 2.5's periodic table: since November 13, 2026 this book's own
  // drawing (1566 px wide), where the source's raster (1300 px) stood.
  const figure = page.locator('.ap-mediafigure[data-stem="periodic-table"]');
  const link = figure.locator('a.ap-mediafigure-enlarge');
  const inline = figure.locator(':scope > img');
  await expect(link).toHaveText('Enlarge figure');
  // Without the script the link is the whole feature, so it must open the file.
  const href = await link.getAttribute('href');
  expect(href).toBe('/media/chemistry/periodic-table.svg');
  expect((await page.request.get(href)).ok()).toBe(true);

  await link.scrollIntoViewIfNeeded();
  // A lazy figure above the link starts loading as the link scrolls in, and
  // its file's own aspect ratio moves the link by a fraction of a pixel. A
  // click in that frame finds the link "not stable" and Playwright, retrying,
  // scrolls it to the window's bottom edge — a page scroll the viewer did not
  // make. Let the figures in reach finish first.
  await page.waitForFunction(() => [...document.querySelectorAll('main img')].every((img) => {
    const { top, bottom } = img.getBoundingClientRect();
    return img.complete || bottom < -innerHeight || top > 2 * innerHeight;
  }));
  await page.evaluate(() => new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done))));
  await link.scrollIntoViewIfNeeded();
  const inlineWidth = (await inline.boundingBox()).width;
  const pageScroll = await page.evaluate(() => window.scrollY);
  await link.click();
  const dialog = page.locator('dialog.ap-figure-viewer[open]');
  await expect(dialog).toBeVisible();
  const image = dialog.locator('.ap-figure-viewer-image');
  const stage = dialog.locator('.ap-figure-viewer-stage');
  const level = dialog.locator('.ap-figure-viewer-level');
  await expect(image).toHaveJSProperty('complete', true);
  expect(await image.getAttribute('alt')).toBe(await inline.getAttribute('alt'));
  await expect(dialog.locator('.ap-figure-viewer-title')).toHaveText(/Elements in the periodic table are organized/);
  const widthOf = async () => (await image.boundingBox()).width;
  const scrolls = () => stage.evaluate((el) => ({ x: el.scrollWidth > el.clientWidth + 1, y: el.scrollHeight > el.clientHeight + 1 }));

  // Opens fitted: all of it in view, and already well past the column's size.
  expect(await scrolls()).toEqual({ x: false, y: false });
  const fitted = await widthOf();
  expect(fitted).toBeGreaterThan(inlineWidth * 1.3);
  await expect(dialog.locator('[data-zoom="out"]')).toBeDisabled();

  // "+" climbs the ladder to the file's own pixels, then past them; the
  // stage scrolls. (The drawing is 1566 × 1212, so in this window the fit is
  // set by its height, under the 75% stop.)
  await page.keyboard.press('+');
  await expect(level).toHaveText('75%');
  await page.keyboard.press('+');
  await expect(level).toHaveText('100%');
  expect(Math.round(await widthOf())).toBe(1566);
  await dialog.locator('[data-zoom="in"]').click();
  await expect(level).toHaveText('150%');
  expect(await scrolls()).toEqual({ x: true, y: true });
  // The wheel moves the figure, never the page behind it.
  await stage.hover();
  await page.mouse.wheel(300, 400);
  await expect.poll(async () => stage.evaluate((el) => el.scrollTop)).toBeGreaterThan(0);
  expect(await page.evaluate(() => window.scrollY)).toBe(pageScroll);
  // A click on the image goes back to the fit, and from the fit to 100%.
  await image.click({ position: { x: 40, y: 40 } });
  expect(Math.round(await widthOf())).toBe(Math.round(fitted));
  await image.click({ position: { x: 40, y: 40 } });
  await expect(level).toHaveText('100%');
  await page.keyboard.press('0');
  expect(Math.round(await widthOf())).toBe(Math.round(fitted));

  // Closing gives the page back as it was, and the image opens it too.
  await dialog.locator('.ap-figure-viewer-close').click();
  await expect(page.locator('dialog.ap-figure-viewer[open]')).toHaveCount(0);
  expect(await page.evaluate(() => window.scrollY)).toBe(pageScroll);
  expect((await inline.boundingBox()).width).toBe(inlineWidth);
  await inline.click();
  await expect(dialog).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('dialog.ap-figure-viewer[open]')).toHaveCount(0);

  // On a phone the fit is the whole figure across the screen; enlarged, it
  // pans sideways inside the viewer and the page itself gets no wider.
  await page.setViewportSize({ width: 390, height: 844 });
  await link.scrollIntoViewIfNeeded();
  await link.click();
  await expect(dialog).toBeVisible();
  expect(await scrolls()).toEqual({ x: false, y: false });
  expect(await widthOf()).toBeLessThanOrEqual(390);
  await dialog.locator('[data-zoom="fit"]').focus();
  for (let presses = 0; presses < 4 && (await level.textContent()) !== '100%'; presses += 1) await page.keyboard.press('+');
  await expect(level).toHaveText('100%');
  expect((await scrolls()).x).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  // The controls fit a phone: none is squeezed under its label or pushed
  // off the bar (a flex item with a min-width shrinks below its text).
  expect(await dialog.locator('.ap-figure-viewer-bar').evaluate((bar) => ({
    overflows: bar.scrollWidth > bar.clientWidth,
    clipped: [...bar.querySelectorAll('button')].filter((button) => button.scrollWidth > button.clientWidth).map((button) => button.textContent),
  }))).toEqual({ overflows: false, clipped: [] });
});

// An exercise that needs a formation enthalpy links Appendix G, and
// following the link left the page and the typed answers, as the links to
// the periodic table once did. A table appendix (`lookup: true` in its front
// matter; layouts/_partials/utils/reference-lookups.html) now opens over the
// page, with a field that filters its rows (assets/js/reference-lookup.js).
//
// The link is a real one: the first exercise of Section 5.3 whose stem
// links Appendix G (the silicon tetrafluoride formation enthalpy sum). The
// short table and the unreachable page further down are links this test
// adds, since no exercise links those appendices yet.
test('a table appendix opens over the page: its rows filter as typed, the heading row stays, and a typed answer survives', async ({ page }) => {
  const appendix = '/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/';
  const title = 'Appendix G: Standard Thermodynamic Properties for Selected Substances';
  await page.setViewportSize({ width: 1280, height: 900 });
  await gotoBuiltPage(page, '/physical-sciences/chemistry/05-thermochemistry/03-enthalpy/');
  const route = new URL(page.url()).pathname;

  // The page names the appendices that open in place: the table appendices,
  // not the periodic table (a figure, with its own control) and not the
  // mathematics appendix (prose, which a reader goes to).
  const lookups = await page.evaluate(() => JSON.parse(document.getElementById('ap-lookups').textContent));
  expect(lookups.map((entry) => entry.title.match(/^Appendix (\w):/)?.[1]).join('')).toBe('CDEFGHIJKLM');
  expect(lookups.find((entry) => entry.href === appendix)?.title).toBe(title);

  const card = page.locator('text-in').last();
  await waitForUpgrade(card, (el) => Boolean(customElements.get('text-in')) && Boolean(el.querySelector('.ap-textin-check')));
  const field = card.locator('.ap-textin-field');
  await field.fill('typed before looking');

  const addLink = (href, id) => page.evaluate(([to, name]) => {
    const link = document.createElement('a');
    link.href = to;
    link.id = name;
    link.textContent = 'Appendix G';
    document.querySelector('main .content p').append(' ', link);
  }, [href, id]);
  const link = page.locator(`fill-in:has-text("SiF") a[href="${appendix}"]`).first();
  await expect(link, 'the exercise that sums SiF₄’s formation enthalpy links Appendix G').toHaveCount(1);
  await link.scrollIntoViewIfNeeded();
  await link.click();

  const dialog = page.locator('dialog.ap-lookup[open]');
  const input = dialog.locator('.ap-lookup-input');
  const count = dialog.locator('.ap-lookup-count');
  const stage = dialog.locator('.ap-lookup-stage');
  const shownRows = () => dialog.locator('tbody tr:visible td:first-child').allInnerTexts();
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('.ap-lookup-sheet table')).toHaveCount(1);
  expect(new URL(page.url()).pathname, 'the page was not left').toBe(route);
  await expect(dialog.locator('.ap-figure-viewer-title')).toHaveText(title);
  // The appendix page's own heading and attribution footer stay on that page.
  await expect(dialog.locator('h1')).toHaveCount(0);
  await expect(dialog.locator('.ap-lookup-sheet small')).toHaveCount(0);
  await expect(count).toHaveText(/^\d+ rows$/);
  const total = Number((await count.innerText()).match(/\d+/)[0]);
  expect(total, 'Appendix G is a long table').toBeGreaterThan(300);
  // A long table opens with the cursor in the filter.
  await expect(input).toBeFocused();
  await expect(input).toHaveAccessibleName('Filter rows');

  // Typed as a keyboard types it: no subscript.
  await input.pressSequentially('SiF4');
  await expect(count).toHaveText(`1 of ${total} rows`);
  expect(await shownRows(), 'the row, under the name of its group').toEqual(['silicon', 'SiF₄(g)']);
  await expect(dialog.locator('tbody tr:visible').last()).toContainText('−1615.0');
  await expect(dialog.locator('thead th').first()).toBeVisible();
  // A group's name lists the group; a capital is read as typed.
  await input.fill('silicon');
  expect((await shownRows())[0]).toBe('silicon');
  expect((await shownRows()).length).toBeGreaterThan(3);
  await input.fill('CO');
  expect((await shownRows()).some((cell) => cell.startsWith('Co')), 'CO is not cobalt').toBe(false);
  expect(await shownRows()).toContain('CO(g)');
  await input.fill('no such substance');
  await expect(count).toHaveText(`No row of ${total} matches`);
  await expect(dialog.locator('.ap-lookup-sheet table')).toBeHidden();
  await input.fill('SiF4');

  // Escape closes, returns to the link, and loses neither the answer typed
  // on the page nor the filter: the next value is usually near the first.
  await page.keyboard.press('Escape');
  await expect(page.locator('dialog.ap-lookup[open]')).toHaveCount(0);
  await expect(link).toBeFocused();
  await expect(field).toHaveValue('typed before looking');
  await link.click();
  await expect(dialog).toBeVisible();
  await expect(input).toHaveValue('SiF4');
  await expect(count).toHaveText(`1 of ${total} rows`);

  // Unfiltered, the heading row stays at the top of the scrolling stage.
  await input.fill('');
  await expect(count).toHaveText(`${total} rows`);
  await stage.evaluate((el) => el.scrollTo(0, 4000));
  expect(await stage.evaluate((el) => {
    const heading = el.querySelector('thead th').getBoundingClientRect();
    const box = el.getBoundingClientRect();
    return { scrolled: el.scrollTop > 3000, stuck: Math.abs(heading.top - box.top) <= 1 };
  })).toEqual({ scrolled: true, stuck: true });
  // The way to the appendix's own page.
  const pageLink = dialog.locator('.ap-figure-viewer-page a');
  await expect(pageLink).toHaveText(title);
  expect(await pageLink.getAttribute('href')).toBe(appendix);
  await dialog.locator('.ap-lookup-close').click();
  await expect(page.locator('dialog.ap-lookup[open]')).toHaveCount(0);
  // Opened again, it is where it was left.
  await link.click();
  await expect(dialog).toBeVisible();
  expect(await stage.evaluate((el) => el.scrollTop)).toBeGreaterThan(3000);
  await page.keyboard.press('Escape');

  // On a phone the dialog and its bar fit, and nothing scrolls the page
  // sideways. A short table (Appendix I: five rows) opens on the table, so
  // the keyboard does not rise over it.
  await page.setViewportSize({ width: 390, height: 844 });
  await addLink('/physical-sciences/chemistry/appendices/i-ionization-constants-of-weak-bases/', 'short-link');
  await page.locator('#short-link').click();
  await expect(dialog).toBeVisible();
  await expect(count).toHaveText(/^\d rows$/);
  await expect(stage).toBeFocused();
  await expect(dialog.locator('.ap-lookup-close')).toBeInViewport();
  expect(await page.evaluate(() => {
    const box = document.querySelector('dialog.ap-lookup').getBoundingClientRect();
    return {
      fits: box.left >= 0 && box.right <= window.innerWidth && box.bottom <= window.innerHeight,
      sideways: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      field: parseFloat(getComputedStyle(document.querySelector('.ap-lookup-input')).fontSize) >= 16,
    };
  })).toEqual({ fits: true, sideways: false, field: true });
  await page.keyboard.press('Escape');
  await expect(field).toHaveValue('typed before looking');

  // A page that cannot be fetched is still a link: the browser follows it.
  const unreachable = '/physical-sciences/chemistry/appendices/k-formation-constants-for-complex-ions/';
  await page.route(`**${unreachable}`, (request) => (request.request().resourceType() === 'fetch'
    ? request.fulfill({ status: 500, body: '' })
    : request.continue()));
  await addLink(unreachable, 'unreachable-link');
  await page.locator('#unreachable-link').click();
  await page.waitForURL(`**${unreachable}`);
  // Among the appendices themselves a link to another is navigation: the
  // page carries no list.
  await expect(page.locator('#ap-lookups')).toHaveCount(0);
});

// Through chapter 2, 74 Chemistry items ended "Use the periodic table." with
// a link to Appendix A, and following it left the page and the typed
// answers. The book now names the table as its reference figure
// (layouts/_partials/utils/reference-figure.html): one control in the page
// rail, and the body's own links to Appendix A, open it in the figure viewer.
test('Chemistry keeps the periodic table at hand: the rail control and a body link open it in place, and a typed answer survives', async ({ page }) => {
  const route = '/physical-sciences/chemistry/02-atoms-molecules-and-ions/06-ionic-and-molecular-compounds/';
  const appendix = '/physical-sciences/chemistry/appendices/a-the-periodic-table/';
  await page.setViewportSize({ width: 1280, height: 900 });
  await gotoBuiltPage(page, route);

  const control = page.locator('nav#ap-toc a.ap-reference-figure');
  await expect(control).toHaveCount(1);
  await expect(control).toHaveText('Periodic table');
  // Without the script the control is the whole feature: a link to the page.
  expect(await control.getAttribute('href')).toBe(appendix);
  // From xl up the rail's bottom block is sticky, so the control is in view
  // wherever the reader is — here, at the Practice block.
  const card = page.locator('text-in').last();
  await waitForUpgrade(card, (el) => Boolean(customElements.get('text-in')) && Boolean(el.querySelector('.ap-textin-check')));
  await card.scrollIntoViewIfNeeded();
  await expect(control).toBeInViewport();
  const field = card.locator('.ap-textin-field');
  await field.fill('typed before looking');

  const dialog = page.locator('dialog.ap-figure-viewer[open]');
  const image = dialog.locator('.ap-figure-viewer-image');
  const pageLink = dialog.locator('.ap-figure-viewer-page a');
  await control.click();
  await expect(dialog).toBeVisible();
  expect(new URL(page.url()).pathname, 'the page was not left').toBe(route);
  await expect(dialog.locator('.ap-figure-viewer-title')).toHaveText('Periodic table');
  await expect(image).toHaveJSProperty('complete', true);
  expect(await image.evaluate((img) => ({ file: new URL(img.src).pathname, width: img.naturalWidth, alt: img.alt.length > 40 })))
    .toEqual({ file: '/media/chemistry/periodic-table.svg', width: 1566, alt: true });
  // The way to the figure's own page, where its content is also a text table.
  await expect(pageLink).toHaveText('Appendix A: The Periodic Table');
  expect(await pageLink.getAttribute('href')).toBe(appendix);
  await page.keyboard.press('Escape');
  await expect(page.locator('dialog.ap-figure-viewer[open]')).toHaveCount(0);
  expect(await control.evaluate((el) => el === document.activeElement), 'focus returns to the control').toBe(true);
  await expect(field).toHaveValue('typed before looking');

  // A link to Appendix A in a stem or a sentence opens the same viewer.
  const bodyLink = page.locator(`main .content a[href="${appendix}"]`).first();
  await expect(bodyLink).toHaveText('periodic table');
  await bodyLink.scrollIntoViewIfNeeded();
  await bodyLink.click();
  await expect(dialog).toBeVisible();
  expect(new URL(page.url()).pathname).toBe(route);
  await page.keyboard.press('Escape');
  expect(await bodyLink.evaluate((el) => el === document.activeElement), 'focus returns to the link').toBe(true);
  // The same page spelled without its trailing slash, or as index.html, is
  // the same page: a link written that way must not leave (and lose what
  // was typed).
  for (const spelling of [appendix.replace(/\/$/, ''), `${appendix}index.html`]) {
    await bodyLink.evaluate((el, href) => el.setAttribute('href', href), spelling);
    await bodyLink.click();
    await expect(dialog, `a link to ${spelling} opens the viewer`).toBeVisible();
    expect(new URL(page.url()).pathname).toBe(route);
    await page.keyboard.press('Escape');
  }
  await bodyLink.evaluate((el, href) => el.setAttribute('href', href), appendix);
  await expect(field).toHaveValue('typed before looking');
  // An ordinary figure opened afterwards carries no page link.
  const enlarge = page.locator('a.ap-mediafigure-enlarge').first();
  await enlarge.scrollIntoViewIfNeeded();
  await enlarge.click();
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('.ap-figure-viewer-page')).toBeHidden();
  await page.keyboard.press('Escape');

  // On a phone the rail is the "On this page" drawer: the control is one tap
  // inside it, the drawer closes, and the viewer's bar still fits.
  await page.setViewportSize({ width: 390, height: 844 });
  const drawerButton = page.locator('.ap-nav-toc');
  await drawerButton.click();
  await expect(control).toBeVisible();
  await control.click();
  await expect(dialog).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.classList.contains('ap-toc-open')), 'the drawer closed').toBe(false);
  await expect(dialog.locator('.ap-figure-viewer-page')).toBeVisible();
  expect(await dialog.evaluate((el) => ({
    overflows: el.querySelector('.ap-figure-viewer-bar').scrollWidth > el.querySelector('.ap-figure-viewer-bar').clientWidth,
    wide: el.getBoundingClientRect().width > window.innerWidth,
    pageLineInside: el.querySelector('.ap-figure-viewer-page').getBoundingClientRect().bottom <= el.getBoundingClientRect().bottom + 0.5,
  }))).toEqual({ overflows: false, wide: false, pageLineInside: true });
  await page.keyboard.press('Escape');
  await expect(page.locator('dialog.ap-figure-viewer[open]')).toHaveCount(0);
  expect(await drawerButton.evaluate((el) => el === document.activeElement), 'focus returns to the drawer button').toBe(true);
});

test('the periodic table control is on Chemistry pages only, not on the table\'s own page, and among the appendices a link to it navigates', async ({ page }) => {
  const appendix = '/physical-sciences/chemistry/appendices/a-the-periodic-table/';
  await page.setViewportSize({ width: 1280, height: 900 });
  // The figure's own page shows the figure: no control.
  await gotoBuiltPage(page, appendix);
  await expect(page.locator('a.ap-reference-figure')).toHaveCount(0);
  // A sibling appendix has the control, and its pager's link to Appendix A
  // is navigation, not a pointer to the table.
  await gotoBuiltPage(page, '/physical-sciences/chemistry/appendices/b-essential-mathematics/');
  // Printed twice: in the rail, and as the fixed button of narrower windows.
  await expect(page.locator('a.ap-reference-figure')).toHaveCount(2);
  const control = page.locator('nav#ap-toc a.ap-reference-figure');
  await expect(control).toHaveCount(1);
  expect(await control.evaluate((el) => 'figureLinks' in el.dataset), 'body links are not taken over among the appendices').toBe(false);
  await page.locator(`main a[href="${appendix}"]`).first().click();
  await page.waitForURL(`**${appendix}`);
  await expect(page.locator('dialog.ap-figure-viewer[open]')).toHaveCount(0);
  // A landing page has the control too, and takes over no link.
  await gotoBuiltPage(page, '/physical-sciences/chemistry/02-atoms-molecules-and-ions/');
  expect(await page.locator('a.ap-reference-figure').evaluateAll((els) => els.map((el) => 'figureLinks' in el.dataset))).toEqual([false, false]);
  // Another book names no reference figure.
  await gotoBuiltPage(page, '/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology/');
  await expect(page.locator('a.ap-reference-figure')).toHaveCount(0);
});

// Below the rail's breakpoint the rail is a drawer behind an icon button —
// and a page with no headings has no drawer at all — while a Chemistry key
// now needs the table's fifth figure (November 13, 2026). The control is
// printed a second time as a fixed button at those widths.
test('below the rail\'s breakpoint the periodic table is one tap away: a fixed button opens it in place, on a page with no headings too', async ({ page }) => {
  const route = '/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/03-reaction-stoichiometry/';
  const appendix = '/physical-sciences/chemistry/appendices/a-the-periodic-table/';
  const floating = page.locator('a.ap-reference-figure.ap-reference-floating');
  const dialog = page.locator('dialog.ap-figure-viewer[open]');

  // From xl up the rail carries the control and the button is not shown.
  await page.setViewportSize({ width: 1280, height: 900 });
  await gotoBuiltPage(page, route);
  await expect(floating).toHaveCount(1);
  await expect(floating).toBeHidden();
  await expect(page.locator('nav#ap-toc a.ap-reference-figure')).toBeVisible();

  for (const width of [390, 1024]) {
    await page.setViewportSize({ width, height: 844 });
    await expect(floating, `shown at ${width}px`).toBeVisible();
    await expect(floating).toHaveText('Periodic table');
    const box = await floating.boundingBox();
    expect(box.height, 'a touch target').toBeGreaterThanOrEqual(44);
    expect(box.x + box.width, 'inside the window').toBeLessThanOrEqual(width);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `no sideways scroll at ${width}px`).toBe(true);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  expect(await floating.getAttribute('href'), 'without the script it is a link to the page').toBe(appendix);

  // It stays in view down the page; an item brought into view is clear of it; and a typed answer survives the visit.
  const card = page.locator('fill-in').nth(8);
  await waitForUpgrade(card, (el) => Boolean(customElements.get('fill-in')) && Boolean(el.querySelector('math-field')));
  await card.scrollIntoViewIfNeeded();
  await expect(floating).toBeInViewport();
  const overlaps = await card.evaluate((el) => {
    const button = document.querySelector('.ap-reference-floating').getBoundingClientRect();
    el.scrollIntoView({ block: 'center' });
    return [...el.querySelectorAll('math-field, button')].filter((part) => {
      const box = part.getBoundingClientRect();
      return box.width && box.left < button.right && box.right > button.left && box.top < button.bottom && box.bottom > button.top;
    }).length;
  });
  expect(overlaps, 'the button covers no control of an item centred in the window').toBe(0);
  await focusMathField(page, card.locator('math-field'));
  await page.keyboard.type('0.5', { delay: 20 });
  await floating.click();
  await expect(dialog).toBeVisible();
  expect(new URL(page.url()).pathname, 'the page was not left').toBe(route);
  await expect(dialog.locator('.ap-figure-viewer-title')).toHaveText('Periodic table');
  expect(await dialog.locator('.ap-figure-viewer-image').evaluate((img) => new URL(img.src).pathname)).toBe('/media/chemistry/periodic-table.svg');
  await page.keyboard.press('Escape');
  await expect(page.locator('dialog.ap-figure-viewer[open]')).toHaveCount(0);
  expect(await floating.evaluate((el) => el === document.activeElement), 'focus returns to the button').toBe(true);
  expect(await card.locator('math-field').evaluate((el) => el.value)).toBe('0.5');

  // The drawer carries the control itself, so the button steps aside while it is open.
  await page.locator('.ap-nav-toc').click();
  await expect(floating).toBeHidden();
  await page.keyboard.press('Escape');
  await expect(floating).toBeVisible();

  // An appendix page with no headings has no drawer: the button is the only way to the table.
  await gotoBuiltPage(page, '/physical-sciences/chemistry/appendices/c-units-and-conversion-factors/');
  await expect(page.locator('.ap-nav-toc')).toHaveCount(0);
  await expect(floating).toBeVisible();
  await floating.click();
  await expect(dialog).toBeVisible();
  await page.keyboard.press('Escape');
  // The table's own page has neither copy, and another book has none.
  await gotoBuiltPage(page, appendix);
  await expect(page.locator('a.ap-reference-figure')).toHaveCount(0);
  await gotoBuiltPage(page, '/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology/');
  await expect(page.locator('a.ap-reference-figure')).toHaveCount(0);
});

test('on every Chemistry page a display row fits the column, scientific notation stays on one line, and a scaled-down figure stays small', async ({ page }) => {
  const routes = [...chemistrySectionRoutes(), ...chemistryAppendixRoutes()];
  expect(routes.length, 'Chemistry section pages were discovered in public/').toBeGreaterThanOrEqual(6);
  test.setTimeout(60_000 + routes.length * 6_000);
  const totals = { displays: 0, kept: 0, keptInStems: 0, scaled: 0 };
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await gotoBuiltPage(page, route);
      await page.evaluate(() => document.fonts.ready);
      const audit = await page.evaluate(() => {
        const short = (el) => el.textContent.replace(/\s+/g, ' ').trim().slice(0, 60);
        const displays = [...document.querySelectorAll('.content .katex-display')];
        const kept = [...document.querySelectorAll('.content .ap-math-keep')];
        const scaled = [...document.querySelectorAll('.ap-mediafigure[data-scale] img')];
        return {
          displays: displays.length,
          kept: kept.length,
          keptInStems: kept.filter((el) => el.closest('.ap-fillin-question')).length,
          scaled: scaled.length,
          overflowing: displays.filter((el) => el.scrollWidth > el.clientWidth + 1)
            .map((el) => `${short(el.querySelector('annotation') ?? el)} (${el.scrollWidth} > ${el.clientWidth})`),
          split: kept.filter((el) => el.getClientRects().length > 1).map(short),
          // Half (or three tenths) of the native width, and never under
          // 26rem (14rem): assets/css/custom.css, `.ap-mediafigure[data-scale]`.
          wide: scaled.filter((img) => {
            const third = img.closest('figure').dataset.scale === 'scaled-down-30';
            const cap = Math.max((third ? 14 : 26) * 16, Number(img.getAttribute('width')) * (third ? 0.3 : 0.5));
            return img.getBoundingClientRect().width > cap + 1;
          }).map((img) => `${img.closest('figure').dataset.stem} at ${Math.round(img.getBoundingClientRect().width)} px`),
          // …and a wide one is not squeezed under its share: the 26rem cap
          // alone set a 1300 px drawing at a third of native.
          squeezed: scaled.filter((img) => {
            const third = img.closest('figure').dataset.scale === 'scaled-down-30';
            const share = Number(img.getAttribute('width')) * (third ? 0.3 : 0.5);
            const column = img.closest('figure').getBoundingClientRect().width;
            return img.getBoundingClientRect().width < Math.min(share, column) - 1;
          }).map((img) => `${img.closest('figure').dataset.stem} at ${Math.round(img.getBoundingClientRect().width)} px`),
        };
      });
      expect(audit.split, `${route} at ${width} px: a number in scientific notation is split across lines`).toEqual([]);
      if (width === 1280) {
        // A phone scrolls a wide row by touch; at desktop width nothing
        // tells the learner the row goes on.
        expect(audit.overflowing, `${route}: a display equation row is wider than the column — break the row`).toEqual([]);
        expect(audit.wide, `${route}: a figure the source marks scaled-down fills the column`).toEqual([]);
        expect(audit.squeezed, `${route}: a figure the source marks scaled-down is set under its share of its native width`).toEqual([]);
        totals.displays += audit.displays;
        totals.kept += audit.kept;
        totals.keptInStems += audit.keptInStems;
        totals.scaled += audit.scaled;
      }
    }
  }
  expect(totals.displays, 'display equations were measured').toBeGreaterThan(20);
  // Body prose goes through the passthrough render hook and a shortcode's
  // question, hint, and answer display through the `mathtext` partial: both
  // must wrap (the first version of this test passed with the partial
  // unwrapped, on table cells alone). Chapter 1 shows 32 such numbers, 8 of
  // them in fill-in stems; an answer display's is in a <template> until the
  // item is answered and is not counted.
  expect(totals.kept, 'inline scientific notation is held together in prose and in stems').toBeGreaterThanOrEqual(30);
  expect(totals.keptInStems, 'a fill-in stem\'s scientific notation is held together').toBeGreaterThanOrEqual(8);
  expect(totals.scaled, 'the manifest\'s scaled-down figures reached the page').toBeGreaterThanOrEqual(6);
});

// Three stems of Chemistry chapter 4 carried an inline `$\ce{…}$` that cannot
// break and ran past the item card's right edge at 1100 px (found by the
// rendered-page reading, fixed by hand). The display-row test above asks
// only `.katex-display`; this asks every inline formula of an item's
// question, on every Chemistry section page, against its card's content
// box. A hidden item (a follow-up not yet shown) has no box and is skipped.
test('on every Chemistry page no inline formula in an item\'s question runs past its card', async ({ page }) => {
  const routes = chemistrySectionRoutes();
  expect(routes.length, 'Chemistry section pages were discovered in public/').toBeGreaterThanOrEqual(6);
  test.setTimeout(60_000 + routes.length * 9_000);
  let measured = 0;
  const overflowing = [];
  const broken = [];
  const desktopBlocks = [];
  let phoneBlocks = 0;
  for (const width of [1280, 1100, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await gotoBuiltPage(page, route);
      await page.evaluate(() => document.fonts.ready);
      // scrollable-regions.js decides in an animation frame after layout.
      await page.evaluate(() => new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done))));
      const audit = await page.evaluate(() => {
        const CARDS = '.ap-fillin, .ap-mc, .ap-textin, .ap-selfcheck, .ap-sortbins, .ap-graphplot';
        const QUESTIONS = '.ap-fillin-question, .ap-mc-question, .ap-textin-question, .ap-selfcheck-question, .ap-sortbins-question, .ap-graphplot-question';
        const over = [];
        const blocks = [];
        let count = 0;
        for (const question of document.querySelectorAll(`.content :is(${QUESTIONS})`)) {
          const card = question.closest(CARDS);
          if (!card) continue;
          const box = card.getBoundingClientRect();
          if (!box.width) continue;
          const style = getComputedStyle(card);
          const right = box.right - parseFloat(style.borderRightWidth) - parseFloat(style.paddingRight);
          for (const math of question.querySelectorAll('.katex')) {
            if (math.closest('.katex-display') || math.parentElement.closest('.katex')) continue;
            // A wide formula with punctuation after it scrolls as one block
            // with that punctuation: the class is on their shared glue span.
            const block = math.classList.contains('ap-katex-wide') ? math : math.parentElement.closest('.ap-math-glue.ap-katex-wide');
            const rect = (block ?? math).getBoundingClientRect();
            if (!rect.width) continue;
            count += 1;
            const name = `${question.textContent.replace(/\s+/g, ' ').trim().slice(0, 50)}… — ${(math.querySelector('annotation')?.textContent ?? '').slice(0, 40)}`;
            if (rect.right > right + 1) {
              over.push(`${name} by ${Math.round(rect.right - right)} px`);
            }
            if (block) {
              // The scroll block: it scrolls (else it should have been undone),
              // and a keyboard reaches it.
              const style = getComputedStyle(block);
              blocks.push({ name, ok: block.scrollWidth > block.clientWidth + 1 && block.getAttribute('tabindex') === '0'
                && style.display === 'block' && style.overflowX === 'auto' });
            }
          }
        }
        return { over, count, blocks };
      });
      for (const block of audit.blocks) {
        if (!block.ok) broken.push(`${route} at ${width} px: ${block.name}`);
        if (width === 1280) desktopBlocks.push(`${route}: ${block.name}`);
        else if (width === 390) phoneBlocks += 1;
      }
      // Every page and width is measured before the verdict, so one run names them all.
      for (const hit of audit.over) overflowing.push(`${route} at ${width} px: ${hit}`);
      if (width === 1280) measured += audit.count;
    }
  }
  expect(measured, 'inline formulas in item questions were measured').toBeGreaterThan(50);
  expect(overflowing, 'an inline formula in a question runs past its card').toEqual([]);
  expect(broken, 'a formula made a scroll block does not scroll, or no keyboard reaches it').toEqual([]);
  // The block is the phone's fallback; at a desktop width every stem's formula fits inline.
  expect(desktopBlocks, 'at 1280 px a stem formula needed the scroll block').toEqual([]);
  expect(phoneBlocks, 'chapter 4\'s over-wide stem equations became scroll blocks on a phone').toBeGreaterThanOrEqual(10);
  // Turned back: a phone page widened to a desktop gives every block back to
  // the line, tab stop included; narrowed again, the blocks return.
  const wide = () => page.evaluate(() => ({
    blocks: document.querySelectorAll('.ap-katex-wide').length,
    stops: document.querySelectorAll(':is(.ap-fillin-question, .ap-selfcheck-question) :is(.katex, .ap-math-glue)[tabindex]').length,
  }));
  await page.setViewportSize({ width: 390, height: 900 });
  await gotoBuiltPage(page, '/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/05-quantitative-chemical-analysis/');
  await expect.poll(async () => (await wide()).blocks).toBeGreaterThan(0);
  await page.setViewportSize({ width: 1280, height: 900 });
  await expect.poll(wide).toEqual({ blocks: 0, stops: 0 });
  await page.setViewportSize({ width: 390, height: 900 });
  await expect.poll(async () => (await wide()).blocks).toBeGreaterThan(0);
});

// Chapter 4's "Not acted on" list (November 12, 2026): six responses that were
// a bare "Not quite" — or, for the arrow, a wrong "Correct" — now carry a
// sentence. The verdicts are unit-tested beside the graders; what only a
// browser shows is that the sentence reaches the learner: `fill-in` printed
// a message for a `form` verdict alone until the near miss gave an
// `incorrect` one something to say.
test('chapter 4\'s fields say why: a short or near-miss number, the wrong arrow, an empirical formula, a missing electron', async ({ page }) => {
  test.setTimeout(120_000);
  const typeNumber = async (card, keys) => {
    const field = card.locator('math-field');
    await clearMathField(field);
    await focusMathField(page, field);
    await page.keyboard.type(keys, { delay: 15 });
    await card.getByRole('button', { name: /check/i }).click();
  };
  // Each locator below is a literal, on a literal page: the fixture gate
  // (tools/build/browser-fixtures.test.mjs) reads both against the content.
  const fillin = async (card) => {
    await expect(card).toHaveCount(1);
    await card.scrollIntoViewIfNeeded();
    return card;
  };
  const status = (card) => card.evaluate((el) => el.status);

  // 4.3: 8.00 mol of sodium nitrate. `8` is the answer without its zeros.
  await gotoBuiltPage(page, '/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/03-reaction-stoichiometry/');
  const moles = page.locator('fill-in[data-answer="8.00"]').filter({ has: page.locator('math-field') });
  await expect(moles).toHaveCount(1);
  await moles.scrollIntoViewIfNeeded();
  for (const short of ['8', '8.0']) {
    await typeNumber(moles, short);
    await expect.poll(() => status(moles), { message: short }).toBe('form');
    await expect(moles.locator('.ap-fillin-feedback')).toHaveText(/now give it to 3 significant figures/);
  }
  await typeNumber(moles, '9');
  await expect.poll(() => status(moles)).toBe('incorrect');
  await expect(moles.locator('.ap-fillin-feedback')).toHaveText('Not quite — try again.');

  // 4.5: 35.0 mL of KOH, no allowance. Rounding the millimoles first gives 34.9.
  await gotoBuiltPage(page, '/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/05-quantitative-chemical-analysis/');
  const volume = await fillin(page.locator('fill-in[data-question^="How many milliliters of a 0.1500-"]').filter({ has: page.locator('math-field') }));
  await typeNumber(volume, '34.9');
  await expect.poll(() => status(volume)).toBe('incorrect');
  await expect(volume.locator('.ap-fillin-feedback')).toHaveText(/^Close, but not within rounding of the answer\. If you rounded partway through/);
  await typeNumber(volume, '36.0');
  await expect.poll(() => status(volume)).toBe('incorrect');
  await expect(volume.locator('.ap-fillin-feedback')).toHaveText('Not quite — try again.');
  await typeNumber(volume, '35.0');
  await expect.poll(() => status(volume)).toBe('correct');

  // 4.2: the phosphorus equation, and a half-reaction.
  await gotoBuiltPage(page, '/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/02-classifying-chemical-reactions/');
  const textin = async (card) => {
    await expect(card).toHaveCount(1);
    await waitForUpgrade(card, (el) => Boolean(customElements.get('text-in')) && Boolean(el.querySelector('.ap-textin-check')));
    await card.scrollIntoViewIfNeeded();
    return card;
  };
  const answer = async (card, typed) => {
    await card.locator('.ap-textin-field').fill(typed);
    await card.locator('.ap-textin-field').press('Enter');
  };
  const phosphorus = await textin(page.locator('text-in[data-answer="P₄(s) + 5O₂(g) ⟶ P₄O₁₀(s)"]'));
  for (const [typed, verdict, said] of [
    ['P4 + 5O2 <=> P4O10', 'form', /now write the equation with a single arrow \(->\)/],
    ['P4 + 5O2 -> 2P2O5', 'form', /one formula is an empirical formula/],
    ['4P + 5O2 -> P4O10', 'form', /one element is written as separate atoms/],
  ]) {
    await answer(phosphorus, typed);
    await expect.poll(() => status(phosphorus), { message: typed }).toBe(verdict);
    await expect(phosphorus.locator('.ap-textin-feedback')).toHaveText(said);
    expect(await phosphorus.locator('.ap-textin-field').evaluate((el) => el.readOnly), `${typed} leaves the field open`).toBe(false);
  }
  await answer(phosphorus, 'P4 + 5O2 -> P4O10');
  await expect.poll(() => status(phosphorus)).toBe('correct');

  const tin = await textin(page.locator('text-in[data-answer="Sn⁴⁺(aq) + 2e⁻ ⟶ Sn²⁺(aq)"]'));
  await answer(tin, 'Sn4+ + 2e -> Sn2+');
  await expect.poll(() => status(tin)).toBe('incorrect');
  await expect(tin.locator('.ap-textin-feedback')).toHaveText('An electron carries its charge: type it as e-, as in 2e-.');
  await answer(tin, 'Sn4+ -> Sn2+');
  await expect.poll(() => status(tin)).toBe('incorrect');
  await expect(tin.locator('.ap-textin-feedback')).toHaveText(/a half-reaction also shows the electrons transferred/);
  await answer(tin, 'Sn4+ + 2e- -> Sn2+');
  await expect.poll(() => status(tin)).toBe('correct');
});

// The period after an inline formula could start the next line alone: a
// browser may break between an inline-block and the text after it, and every
// piece of a KaTeX formula is one (reported from the rendered pages of
// Chemistry chapter 4; 29,589 formulas in the library are followed by
// punctuation). The templates set the formula and its punctuation in one
// no-wrap `.ap-math-glue` span, with a <wbr> between the formula's pieces so
// a long formula still wraps where it always could. Measured here on pages
// of four books, body prose and item stems, at a desktop and a phone width:
// every such formula is glued, no glued punctuation starts a line, a long
// formula still breaks inside, and the page does not scroll sideways.
// tools/build/audit-build.mjs holds "every such formula is glued" for every
// page of the build; this is the layout no static check can read.
test('punctuation typed after an inline formula stays on the formula\'s line', async ({ page }) => {
  const routes = [
    '/math/precalculus/07-trigonometric-identities-and-equations/02-sum-and-difference-identities/',
    '/math/precalculus/09-systems-of-equations-and-inequalities/01-systems-of-linear-equations-two-variables/',
    '/math/elementary-algebra/02-solving-linear-equations-and-inequalities/01-solve-equations-using-the-subtraction-and-addition-properties-of-equality/',
    '/math/prealgebra/01-whole-numbers/02-add-whole-numbers/',
    '/physical-sciences/chemistry/03-composition-of-substances-and-solutions/02-determining-empirical-and-molecular-formulas/',
    '/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/03-reaction-stoichiometry/',
  ];
  test.setTimeout(60_000 + routes.length * 12_000);
  const totals = { glued: 0, inStems: 0, wrapped: 0, wideWithPunctuation: 0 };
  for (const width of [1280, 520, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await gotoBuiltPage(page, route);
      await page.evaluate(() => document.fonts.ready);
      // scrollable-regions.js decides a wide stem formula in an animation frame after layout.
      await page.evaluate(() => new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done))));
      const audit = await page.evaluate(() => {
        const PUNCTUATION = /^[.,;:?!)’”]/;
        const name = (math) => `${(math.querySelector('annotation')?.textContent ?? math.textContent).slice(0, 40)}`;
        const out = { glued: 0, inStems: 0, wrapped: 0, wideWithPunctuation: 0, unglued: [], stranded: [], breaksShown: [] };
        for (const math of document.querySelectorAll('.content .katex')) {
          if (math.closest('.katex-display') || math.parentElement.closest('.katex')) continue;
          if (!math.getClientRects().length) continue; // inside a hidden follow-up
          const glue = math.closest('.ap-math-glue');
          if (!glue) {
            const host = math.parentElement.classList.contains('ap-math-keep') ? math.parentElement : math;
            const next = host.nextSibling;
            if (next && next.nodeType === Node.TEXT_NODE && PUNCTUATION.test(next.textContent)) out.unglued.push(name(math));
            // A formula that is not glued shows none of its <wbr>s: its breaks are the browser's own.
            if ([...math.querySelectorAll('wbr')].some((wbr) => getComputedStyle(wbr).display !== 'none')) out.breaksShown.push(name(math));
            continue;
          }
          out.glued += 1;
          if (glue.closest('[class$="-question"]')) out.inStems += 1;
          if (math.getClientRects().length > 1) out.wrapped += 1;
          if (glue.classList.contains('ap-katex-wide')) out.wideWithPunctuation += 1;
          // A label before the formula, "(ii) ", or a value after it, " = 180.5 kJ",
          // also holds the formula in a glue span (the next test measures those).
          const tail = glue.lastChild;
          const VALUE = /^ ?= ?/;
          if (tail && tail.nodeType !== Node.TEXT_NODE && glue.querySelector(':scope > .ap-math-label')) continue;
          if (!tail || tail.nodeType !== Node.TEXT_NODE || !(PUNCTUATION.test(tail.textContent) || VALUE.test(tail.textContent))) {
            out.unglued.push(`${name(math)} (a glue span that does not end in its punctuation)`);
            continue;
          }
          // The first punctuation character against the formula's last line box.
          const range = document.createRange();
          range.setStart(tail, 0);
          range.setEnd(tail, 1);
          const mark = range.getBoundingClientRect();
          const lines = math.getClientRects();
          const last = lines[lines.length - 1];
          if (mark.width && mark.top > last.bottom - 2) out.stranded.push(`${name(math)} ${tail.textContent}`);
        }
        out.sideways = document.documentElement.scrollWidth - window.innerWidth;
        return out;
      });
      expect(audit.unglued, `${route} at ${width} px: punctuation follows an inline formula outside its glue span`).toEqual([]);
      expect(audit.stranded, `${route} at ${width} px: the punctuation after a formula starts a line`).toEqual([]);
      expect(audit.breaksShown, `${route} at ${width} px: a formula outside a glue span shows a <wbr>`).toEqual([]);
      expect(audit.sideways, `${route} at ${width} px: the page scrolls sideways`).toBeLessThanOrEqual(0);
      if (width === 1280) {
        totals.glued += audit.glued;
        totals.inStems += audit.inStems;
      }
      if (width === 390) {
        totals.wrapped += audit.wrapped;
        totals.wideWithPunctuation += audit.wideWithPunctuation;
      }
    }
  }
  // Body prose is glued by the layout's partial and a stem by `mathtext`: both are counted.
  expect(totals.glued, 'formulas followed by punctuation were measured').toBeGreaterThanOrEqual(250);
  expect(totals.inStems, 'formulas in item stems were measured').toBeGreaterThanOrEqual(20);
  // The no-wrap span took nothing from a long formula: on a phone some still break inside…
  expect(totals.wrapped, 'on a phone a glued formula still wraps between its pieces').toBeGreaterThanOrEqual(10);
  // …and a stem formula too wide for its card scrolls together with its question mark.
  expect(totals.wideWithPunctuation, 'on a phone a wide stem formula scrolls with its punctuation').toBeGreaterThanOrEqual(3);
});

// A Hess's-law stem gives each reaction as "(ii) $\ce{…}$ $\Delta H$ =
// −74.8 kJ;" (the Chemistry playbook's "Stems" form), and the rendered-page
// reading of Chemistry 5.3 saw "(ii)" end a line with its reaction on the
// next, and "ΔH" end a line with "= 180.5 kJ" on the next. The templates take
// a label typed straight before an inline formula and a " = value unit" run
// typed straight after it into the formula's `.ap-math-glue` span
// (layouts/_partials/math-glue-patterns.html). Measured on the real 5.3
// stems from the text alone, so a build that drops the glue fails here: each
// label shares a line with the start of its reaction, each "=" with the end
// of its symbol; a label holds only the first span of a reaction split after
// its arrow, and the page does not scroll sideways (a long formula inside a
// glue span keeps its own breaks: the test above measures that).
test('a stem label and a "= value unit" run stay on the line of their formula', async ({ page }) => {
  const route = '/physical-sciences/chemistry/05-thermochemistry/03-enthalpy/';
  const widths = [1280, 1024, 900, 768, 640, 520, 390];
  test.setTimeout(30_000 + widths.length * 8_000);
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    await gotoBuiltPage(page, route);
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done))));
    const audit = await page.evaluate(() => {
      const LABEL = /\((?:[ivx]{1,4}|[a-z])\)\s*$/;
      const VALUE = /^\s?=\s?(?:\?|[−+-]?\d)/;
      const isMath = (node) => node?.nodeType === Node.ELEMENT_NODE && (node.matches('.katex, .ap-math-keep') || node.matches('.ap-math-glue'));
      const formulaOf = (node) => (node.matches('.katex') ? node : node.querySelector('.katex'));
      // The node after (or before) `node` in reading order, past empty text and up out of spans.
      const step = (node, forward) => {
        for (let at = node; at && !at.matches?.('[class$="-question"]'); at = at.parentNode) {
          let next = forward ? at.nextSibling : at.previousSibling;
          while (next && next.nodeType === Node.TEXT_NODE && next.textContent === '') next = forward ? next.nextSibling : next.previousSibling;
          if (next) return next;
        }
        return null;
      };
      const charRect = (text, index) => {
        const range = document.createRange();
        range.setStart(text, index);
        range.setEnd(text, index + 1);
        return range.getBoundingClientRect();
      };
      const sameLine = (a, b) => Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 4;
      const out = { labels: [], values: [], parted: [] };
      for (const question of document.querySelectorAll('.content [class$="-question"]')) {
        if (!question.getClientRects().length) continue;
        const walker = document.createTreeWalker(question, NodeFilter.SHOW_TEXT, {
          acceptNode: (node) => (node.parentElement.closest('.katex') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
        });
        for (let text = walker.nextNode(); text; text = walker.nextNode()) {
          const words = text.textContent;
          const label = LABEL.exec(words);
          const after = step(text, true);
          if (label && isMath(after)) {
            const math = formulaOf(after);
            const name = `${label[0].trim()} ${math.querySelector('annotation')?.textContent.slice(0, 30)}`;
            out.labels.push(name);
            const close = words.lastIndexOf(')');
            if (!sameLine(charRect(text, close), math.getClientRects()[0])) out.parted.push(`label ${name}`);
            // The glue holds this one formula: the space before the next (the second
            // span of a reaction split after its arrow) is still a break.
            const glue = math.closest('.ap-math-glue');
            if (glue && glue.querySelectorAll('.katex:not(.katex .katex)').length !== 1) out.parted.push(`label ${name} (its glue holds more than its own formula)`);
          }
          const value = VALUE.exec(words);
          const before = step(text, false);
          if (value && isMath(before)) {
            const math = formulaOf(before);
            const rects = math.getClientRects();
            const name = `${math.querySelector('annotation')?.textContent.slice(0, 30)} ${words.trim().slice(0, 16)}`;
            out.values.push(name);
            const equals = words.indexOf('=');
            const unitEnd = words.search(/[;.,]|\s[A-Z]|$/) - 1;
            if (!sameLine(charRect(text, equals), rects[rects.length - 1])) out.parted.push(`value ${name}`);
            else if (unitEnd > equals && !sameLine(charRect(text, equals), charRect(text, unitEnd))) out.parted.push(`unit ${name}`);
          }
        }
      }
      out.sideways = document.documentElement.scrollWidth - window.innerWidth;
      return out;
    });
    // The aluminum chloride stem's five labels, and the seven symbols with a value in the two Hess's stems.
    for (const label of ['(i)', '(ii)', '(iii)', '(iv)', '(v)']) {
      expect(audit.labels.some((name) => name.startsWith(`${label} \\ce`)), `at ${width} px: the label ${label} before a reaction was measured`).toBe(true);
    }
    for (const value of ['= 180.5 kJ', '= −57.06 kJ', '= −74.8 kJ', '= −185 kJ', '= +323 kJ/mol', '= −1049 kJ', '= ?']) {
      expect(audit.values.some((name) => name.includes(value)), `at ${width} px: "${value}" after its symbol was measured`).toBe(true);
    }
    expect(audit.parted, `${route} at ${width} px: a label, a value, or a unit is on another line than its formula`).toEqual([]);
    expect(audit.sideways, `${route} at ${width} px: the page scrolls sideways`).toBeLessThanOrEqual(0);
  }
});

// The typing guide under an equation field once wrapped inside its arrow,
// "…O2 -" over "> 2H2O" (the rendered-page reading of Chemistry 4.1). The
// component sets the arrow and each example in a no-wrap span
// (`.ap-textin-example`); the text the field is described by is unchanged.
// tools/build/documentation.test.mjs reads the splitting pattern itself.
test('the equation typing guide never breaks inside its arrow or an example', async ({ page }) => {
  const GUIDE = 'Type subscripts as plain numbers, a charge after ^, and the arrow as ->: Cu^2+(aq) + 2OH^-(aq) -> Cu(OH)2(s). The state symbols (s), (l), (g), and (aq) are optional.';
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await gotoBuiltPage(page, '/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/01-writing-and-balancing-chemical-equations/');
    await page.evaluate(() => document.fonts.ready);
    // The page's first equation field.
    const item = page.locator('text-in[data-answer="2NH₄NO₃ ⟶ 2N₂ + O₂ + 4H₂O"]');
    await expect(item).toHaveCount(1);
    await waitForUpgrade(item, (el) => Boolean(customElements.get('text-in')) && Boolean(el.querySelector('.ap-textin-guide')));
    const guide = item.locator('.ap-textin-guide');
    await expect(guide).toHaveText(GUIDE);
    expect(await item.locator('.ap-textin-field').getAttribute('aria-describedby')).toBe(await guide.getAttribute('id'));
    const pieces = await guide.evaluate((el) => {
      const line = parseFloat(getComputedStyle(el).lineHeight) || parseFloat(getComputedStyle(el).fontSize) * 1.2;
      return {
        lines: Math.round(el.getBoundingClientRect().height / line),
        examples: [...el.querySelectorAll('.ap-textin-example')].map((span) => ({
          text: span.textContent,
          rects: span.getClientRects().length,
          tall: span.getBoundingClientRect().height >= 2 * line,
        })),
      };
    });
    expect(pieces.examples.map((p) => p.text), `at ${width} px: the arrow and the example are the no-wrap pieces`).toEqual(['->', 'Cu^2+(aq) + 2OH^-(aq) -> Cu(OH)2(s).']);
    for (const piece of pieces.examples) {
      expect({ rects: piece.rects, tall: piece.tall }, `at ${width} px: "${piece.text}" sits on one line`).toEqual({ rects: 1, tall: false });
    }
    // On a phone the guide does wrap, so the pieces are tested where a break can fall.
    if (width === 390) expect(pieces.lines, 'the guide wraps on a phone').toBeGreaterThan(1);
  }
});

// The first Chemistry Knowledge Check (November 11, 2026). A check of this
// book carries what no other book's does: measured-quantity fill-ins and
// typed formulas, each re-asking a worked example, on a page with no hints
// and no section table to look a factor up in. What the gates cannot see is
// the rendered page: where it sits, that the periodic table is still one
// click away, and that the two typed forms grade as on a section page.
test('the Chemistry Knowledge Check follows its block, has no hints, keeps the periodic table, and grades a fill-in and a formula', async ({ page }) => {
  await gotoBuiltPage(page, '/physical-sciences/chemistry/knowledge-check-01-03/');

  // After the block's last chapter and its sections, before the next
  // chapter (the appendices, until chapter 4 landed on November 12, 2026).
  const book = await page.locator('aside a[href^="/physical-sciences/chemistry/"]').evaluateAll(
    (links) => [...new Set(links.map((a) => a.getAttribute('href')))],
  );
  const at = book.findIndex((href) => href.endsWith('/chemistry/knowledge-check-01-03/'));
  expect(at, 'the check is in the sidebar').toBeGreaterThan(0);
  expect(book[at - 1]).toMatch(/^\/physical-sciences\/chemistry\/03-[^/]+\/\d\d-[^/]+\/$/);
  expect(book[at + 1]).toBe('/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/');

  // No hint anywhere, and every item kind the page carries is there.
  await expect(page.locator('[class*="hint"]')).toHaveCount(0);
  for (const [tag, floor] of [['fill-in', 8], ['text-in', 8], ['multiple-choice', 12], ['self-check', 3]]) {
    expect(await page.locator(tag).count(), `${tag} items`).toBeGreaterThanOrEqual(floor);
  }
  // A molar mass needs the table, and a check has no section page around it.
  await expect(page.locator('nav#ap-toc a.ap-reference-figure')).toHaveText('Periodic table');

  // A measured fill-in: the key, the unrounded readout, and a number the stem prints.
  const dilution = page.locator('fill-in[data-question^="What volume of 1.59"]');
  await expect(dilution).toHaveCount(1);
  const field = dilution.locator('math-field');
  const status = () => dilution.evaluate((el) => el.status);
  const check = async (keys) => {
    await clearMathField(field);
    await focusMathField(page, field);
    await page.keyboard.type(keys, { delay: 15 });
    await dilution.getByRole('button', { name: /check/i }).click();
  };
  await check('5.00');
  await expect.poll(status).toBe('incorrect');
  await check('0.31447');
  await expect.poll(status).toBe('form');
  await check('0.314');
  await expect.poll(status).toBe('correct');

  // A typed formula: read back in print, wrong without its grouping, then right.
  const upgraded = (el) => Boolean(customElements.get('text-in')) && Boolean(el.querySelector('.ap-textin-check'));
  const salt = page.locator('text-in[data-answer="Ca(H₂PO₄)₂"]');
  await expect(salt).toHaveCount(1);
  await waitForUpgrade(salt, upgraded);
  await salt.scrollIntoViewIfNeeded();
  const saltField = salt.locator('.ap-textin-field');
  const saltStatus = () => salt.evaluate((el) => el.status);
  await saltField.fill('CaH2PO4');
  await saltField.press('Enter');
  await expect.poll(saltStatus).toBe('incorrect');
  await saltField.fill('Ca(H2PO4)2');
  await expect(salt.locator('.ap-textin-reading')).toHaveText('Read as: Ca(H₂PO₄)₂');
  await saltField.press('Enter');
  await expect.poll(saltStatus).toBe('correct');
});
