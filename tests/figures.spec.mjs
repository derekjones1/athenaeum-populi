// Layout gate for spec-first figures: every <ap-figure> on the site must
// render, and every text node in every rendered figure SVG must lie inside
// the viewBox with clearance. This is the automated replacement for
// screenshot-and-eyeball layout review — a clipped or overflowing label is a
// test failure here, not a thing a human notices on a built page. (Whether a
// figure matches its SOURCE is still the authoring workflow's visual
// comparison; this gate owns geometry, not fidelity.)
//
// Routes are discovered from the built public/ tree at test RUN time (the
// webServer hook builds public/ after collection, so discovery cannot happen
// at module load), and the discovery is itself asserted non-empty so a broken
// grep can never pass by testing nothing. Runs in both colour schemes:
// figures draw with currentColor, so a regression can be theme-specific.
//
// Cost discipline: these tests walk the WHOLE corpus (119 routes, 1,056
// figures at the time of writing) and they grow with it. The first version
// made three round trips per figure (scroll, wait, evaluate) and one grep per
// legacy route; at ~108 s locally it sat just under Playwright's 120 s test
// timeout and went over it on the slower GitHub runner, which is how a green
// local `npm run ci` produced a red push. Each page is now one wait plus one
// in-page evaluation over all of its figures, discovery runs once per test,
// and every corpus-walking test sets its own timeout from the route count so
// the ceiling scales with the corpus instead of being a fixed number a new
// chapter can silently exhaust.
import { test, expect } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import { gotoBuiltPage } from './helpers.mjs';

/** public/ routes whose HTML contains the given needle. */
function routesContaining(needle) {
  let out = '';
  try {
    out = execFileSync('grep', ['-rlF', needle, 'public', '--include=index.html'], { encoding: 'utf8' });
  } catch (error) {
    if (error.status === 1) return []; // no matches
    throw error;
  }
  return out.trim().split('\n').filter(Boolean)
    .map((p) => p.replace(/^public/, '').replace(/index\.html$/, ''));
}

/**
 * A per-test timeout that grows with the corpus: a fixed floor for startup
 * plus a per-route budget generous enough for the CI runner (each route is
 * one navigation with networkidle, one render wait, one evaluation).
 */
function corpusTimeout(routeCount) {
  return 60_000 + routeCount * 4_000;
}

/** Collect console and page errors for one route visit. */
function collectErrors(page) {
  const errors = [];
  const onConsole = (msg) => { if (msg.type() === 'error') errors.push(msg.text()); };
  const onPageError = (error) => errors.push(String(error));
  page.on('console', onConsole);
  page.on('pageerror', onPageError);
  return {
    errors,
    stop() {
      page.off('console', onConsole);
      page.off('pageerror', onPageError);
    },
  };
}

test('every spec-first figure on the site renders inside its viewBox', async ({ page }) => {
  const routes = routesContaining('<ap-figure');
  expect(routes.length, 'no built page carries an <ap-figure> — discovery or build is broken').toBeGreaterThan(0);
  test.setTimeout(corpusTimeout(routes.length));

  for (const route of routes) {
    const collected = collectErrors(page);
    await gotoBuiltPage(page, route);
    const count = await page.locator('ap-figure').count();
    expect(count, `${route} matched discovery but has no <ap-figure>`).toBeGreaterThan(0);

    // <ap-figure> renders on connect once the lazy engine bundle arrives (no
    // intersection gating), so one wait covers every figure on the page.
    await page.waitForFunction(
      () => [...document.querySelectorAll('ap-figure')].every((el) => el.querySelector('svg')),
      null,
      { timeout: 20_000 },
    ).catch(() => { /* reported below with the figure index */ });

    const problems = await page.evaluate(() => {
      const found = [];
      [...document.querySelectorAll('ap-figure')].forEach((el, index) => {
        const s = el.querySelector('svg');
        if (!s) { found.push(`figure ${index}: did not render`); return; }
        const [x, y, w, h] = s.getAttribute('viewBox').split(' ').map(Number);
        if (!s.getAttribute('aria-label')) found.push(`figure ${index}: svg has no aria-label`);
        if (el.getAttribute('role')) found.push(`figure ${index}: host kept role=img — double announcement`);
        for (const t of s.querySelectorAll('text')) {
          const b = t.getBBox();
          const pad = 1; // getBBox is exact; any real clip is >= 1px
          if (b.x < x - pad || b.y < y - pad
            || b.x + b.width > x + w + pad || b.y + b.height > y + h + pad) {
            found.push(`figure ${index}: text ${JSON.stringify(t.textContent)} `
              + `bbox [${[b.x, b.y, b.width, b.height].map((n) => n.toFixed(1))}] `
              + `outside viewBox [${x} ${y} ${w} ${h}]`);
          }
        }
      });
      return found;
    });
    expect(problems, `layout problems on ${route}`).toEqual([]);

    collected.stop();
    expect(collected.errors, `console errors on ${route}`).toEqual([]);
  }
});

test('every mediafigure image on every page renders without a broken img or console error', async ({ page }) => {
  // The raster counterpart of the spec-first-figure gate above: mediafigure
  // (layouts/shortcodes/mediafigure.html) is a vendored `<img>`, not an
  // SVG the browser builds from a spec, so there is no viewBox geometry to
  // check — but a broken vendored file, a wrong manifest path, or a
  // component erroring out on the same page would surface identically here:
  // an image that never completes loading, or a console error from a
  // sibling component that failed nearby.
  const routes = routesContaining('class=ap-mediafigure');
  expect(routes.length, 'no built page carries class=ap-mediafigure — discovery or build is broken')
    .toBeGreaterThan(0);
  test.setTimeout(corpusTimeout(routes.length));

  for (const route of routes) {
    const collected = collectErrors(page);
    await gotoBuiltPage(page, route);
    const count = await page.locator('.ap-mediafigure img').count();
    expect(count, `${route} matched discovery but has no mediafigure img`).toBeGreaterThan(0);

    // Lazy-loaded images only fetch near the viewport, so bring each into
    // view from inside the page (one evaluation, no per-image round trips)
    // and then wait for all of them to complete.
    await page.evaluate(async () => {
      for (const img of document.querySelectorAll('.ap-mediafigure img')) {
        img.scrollIntoView({ block: 'center' });
        await new Promise((resolve) => requestAnimationFrame(resolve));
      }
    });
    await expect
      .poll(async () => page.evaluate(
        () => [...document.querySelectorAll('.ap-mediafigure img')]
          .map((img, index) => (img.complete && img.naturalWidth > 0 ? null : index))
          .filter((index) => index !== null),
      ), { timeout: 20_000, message: `${route} has images that did not load` })
      .toEqual([]);

    collected.stop();
    expect(collected.errors, `console errors on ${route}`).toEqual([]);
  }
});

test('legacy pasted figures still render their SVG untouched', async ({ page }) => {
  // The conversion is per-page and gradual: a book page that still carries
  // prerendered <div class="ap-figure"> SVG must keep working unchanged.
  // Minified production HTML drops the attribute quotes, so match the two
  // markers separately: a div-delivered figure page still carries data-spec.
  // Both discoveries run once — the previous version re-grepped the whole
  // build tree once per legacy route inside a filter.
  const specFirst = new Set(routesContaining('<ap-figure'));
  const legacy = routesContaining('data-spec').filter((r) => !specFirst.has(r));
  expect(legacy.length).toBeGreaterThan(0);
  await gotoBuiltPage(page, legacy[0]);
  expect(await page.locator('div.ap-figure svg').count()).toBeGreaterThan(0);
});
