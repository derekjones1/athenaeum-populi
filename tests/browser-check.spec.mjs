import { test, expect } from '@playwright/test';
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

  const card = page.locator('text-in[data-answer="deductive"]');
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
  await field.fill('deductive');
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

test('the shared hint toggle discloses a fill-in hint and a self-check hint the same way', async ({ page }) => {
  // One implementation (assets/js/lib/shared/hint-toggle.mjs) mounts every
  // component's "Show hint": the button names the hint it controls, flips
  // aria-expanded, and reveals the hint paragraph — asserted on a math
  // component and a prose one, since the six components share nothing else.
  await gotoBuiltPage(page, '/math/prealgebra/09-math-models-and-geometry/07-solve-a-formula-for-a-specific-variable/');
  const fillin = page.locator('fill-in[data-answer="r=d/t"]');
  await expect(fillin).toHaveCount(1);
  const disclose = async (card) => {
    const toggle = card.locator('.ap-fillin-hint-toggle');
    await expect(toggle).toHaveCount(1);
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    const hint = card.locator('.ap-fillin-hint');
    await expect(hint).toBeHidden();
    expect(await toggle.getAttribute('aria-controls')).toBe(await hint.getAttribute('id'));
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

test('every mediafigure image on both biology sections loads from its vendored media path', async ({ page }) => {
  const errors = [];
  const onConsole = (msg) => { if (msg.type() === 'error') errors.push(msg.text()); };
  page.on('console', onConsole);

  for (const route of [
    '/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology/',
    '/life-health-sciences/biology/01-the-study-of-life/02-themes-and-concepts-of-biology/',
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
      expect(attrs.currentSrc, `${route} image ${i} not served from /media/biology/`)
        .toMatch(/\/media\/biology\//);
    }
  }

  page.off('console', onConsole);
  expect(errors, 'console errors while loading mediafigures').toEqual([]);
});

test('every rail and sidebar carries a contact mailto whose subject names the page', async ({ page }) => {
  // utils/contact-mailto.html: the "Questions or concerns?" link renders in
  // the right rail (toc.html, xl+) and once in the sidebar (sidebar.html: a
  // single <li> that serves the phone drawer and the md–xl sidebar, which
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
  // in source order, and every chapter or section link in the book sits
  // inside a unit.
  const unit1Titles = await visible.nth(0).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit1Titles).toEqual(['The Study of Life', 'The Chemical Foundation of Life', 'Biological Macromolecules']);
  const unit2Titles = await visible.nth(1).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit2Titles).toEqual([
    'Cell Structure',
    'Structure and Function of Plasma Membranes',
    'Metabolism',
    'Cellular Respiration',
    'Photosynthesis',
    'Cell Communication',
    'Cell Reproduction',
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
  ]);
  const unit4Titles = await visible.nth(3).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit4Titles).toEqual([
    'Evolution and the Origin of Species',
    'The Evolution of Populations',
    'Phylogenies and the History of Life',
  ]);
  const unit5Titles = await visible.nth(4).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit5Titles).toEqual(['Viruses', 'Prokaryotes: Bacteria and Archaea', 'Protists', 'Fungi', 'Seedless Plants', 'Seed Plants', 'Introduction to Animal Diversity', 'Invertebrates', 'Vertebrates']);
  const unit6Titles = await visible.nth(5).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit6Titles).toEqual(['Plant Form and Physiology', 'Soil and Plant Nutrition', 'Plant Reproduction']);
  const unit7Titles = await visible.nth(6).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit7Titles).toEqual(['The Animal Body: Basic Form and Function', 'Animal Nutrition and the Digestive System', 'The Nervous System', 'Sensory Systems', 'The Endocrine System', 'The Musculoskeletal System', 'The Respiratory System', 'The Circulatory System', 'Osmotic Regulation and Excretion', 'The Immune System', 'Animal Reproduction and Development']);
  const unit8Titles = await visible.nth(7).locator('> ul > li > .hextra-sidebar-item a > span').allInnerTexts();
  expect(unit8Titles).toEqual(['Ecology and the Biosphere', 'Population and Community Ecology', 'Ecosystems', 'Conservation Biology and Biodiversity']);
  // 47 chapter landings + 208 sections, rendered once.
  const bookLinks = page.locator('aside a[href^="/life-health-sciences/biology/"]:not([href="/life-health-sciences/biology/"])');
  const insideUnit = page.locator('aside .ap-sidebar-unit a[href^="/life-health-sciences/biology/"]');
  expect(await bookLinks.count()).toBe(255);
  expect(await insideUnit.count()).toBe(255);
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
