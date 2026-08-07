import { expect } from '@playwright/test';

/**
 * Assertions and waits shared by the browser suites.
 *
 * `assertProductionBuild` used to live inside `accessibility.spec.mjs`, so
 * `docs/architecture.md`'s claim that "the suite refuses to run against a dev
 * server" was true of one spec out of two. It is a property of the whole
 * suite — a stale or dev-served `public/` invalidates a grader end-to-end run
 * exactly as thoroughly as a contrast measurement — so it lives here and both
 * specs call it.
 */

/**
 * Fail loudly when the page under test did not come from a production build.
 *
 * `hugo server` injects livereload and serves unfingerprinted CSS, and a stale
 * `public/` (which a running dev server overwrites) serves pages whose
 * fingerprinted stylesheets 404 — either way every measured colour, size, and
 * contrast is wrong, and the failures look like real regressions.
 */
export async function assertProductionBuild(page, path) {
  const provenance = await page.evaluate(() => ({
    livereload: Boolean(document.querySelector('script[src*="livereload"]')),
    stylesheets: [...document.querySelectorAll('link[rel~="stylesheet"]')].map(
      (link) => ({ href: link.getAttribute('href'), loaded: Boolean(link.sheet) }),
    ),
  }));

  expect(
    provenance.livereload,
    `${path} was served by \`hugo server\` (livereload script present). ` +
      'Run the suite against a production build: `npm run build`, serve ' +
      '`public/`, and set BASE_URL — or stop the dev server so Playwright ' +
      'starts its own.',
  ).toBe(false);

  const unloaded = provenance.stylesheets.filter((sheet) => !sheet.loaded);
  expect(
    unloaded.map((sheet) => sheet.href).join(', '),
    `${path} has stylesheets that did not load, so the page is unstyled and ` +
      'every size and contrast measurement below is meaningless',
  ).toBe('');
}

/**
 * Navigate, assert the response, and prove the page came from a real build.
 * Every test that touches a route should go through this rather than a bare
 * `page.goto` — a 404 that renders the theme chrome otherwise passes a lot of
 * assertions before anything notices.
 */
export async function gotoBuiltPage(page, path, options = {}) {
  const response = await page.goto(path, { waitUntil: 'networkidle', ...options });
  expect(response, `No response for ${path}`).not.toBeNull();
  expect(response.status(), `Unexpected response for ${path}`).toBeLessThan(400);
  await assertProductionBuild(page, path);
  return response;
}

/**
 * Wait for a `<math-field>` to be upgraded AND focused.
 *
 * Two separate races, both of which silently drop keystrokes onto `<body>`:
 * the MathLive bundle is lazy-loaded, so the element exists in the server-
 * rendered shell long before it can accept input; and MathLive then takes
 * focus asynchronously.
 */
export async function focusMathField(page, field) {
  await expect
    .poll(async () => field.evaluate((el) => typeof el.executeCommand === 'function'), { timeout: 20_000 })
    .toBe(true);
  await field.scrollIntoViewIfNeeded();
  await field.click();
  await expect
    .poll(async () => field.evaluate((el) => document.activeElement === el), { timeout: 10_000 })
    .toBe(true);
}

/**
 * Empty a math field through MathLive's own editing commands. Assigning
 * `.value` leaves the caret inside the old fraction, so the next keystrokes
 * nest inside it instead of replacing it.
 */
export async function clearMathField(field) {
  await field.evaluate((el) => {
    el.focus();
    el.executeCommand('selectAll');
    el.executeCommand('deleteBackward');
  });
  await expect.poll(async () => field.evaluate((el) => el.value)).toBe('');
}

/** Wait for a lazily-upgraded custom element to finish building its shell. */
export async function waitForUpgrade(locator, ready) {
  await expect.poll(async () => locator.evaluate(ready), { timeout: 20_000 }).toBe(true);
}
