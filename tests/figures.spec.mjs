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

test('every spec-first figure on the site renders inside its viewBox', async ({ page }) => {
  const routes = routesContaining('<ap-figure');
  expect(routes.length, 'no built page carries an <ap-figure> — discovery or build is broken').toBeGreaterThan(0);

  for (const route of routes) {
    const errors = [];
    const onConsole = (msg) => { if (msg.type() === 'error') errors.push(msg.text()); };
    const onPageError = (error) => errors.push(String(error));
    page.on('console', onConsole);
    page.on('pageerror', onPageError);

    await gotoBuiltPage(page, route);
    const figures = page.locator('ap-figure');
    const count = await figures.count();
    expect(count, `${route} matched discovery but has no <ap-figure>`).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const fig = figures.nth(i);
      await fig.scrollIntoViewIfNeeded();
      // The engine loads lazily; the SVG appears when the spec has rendered.
      const svg = fig.locator('svg');
      await expect(svg, `figure ${i} on ${route} did not render`).toHaveCount(1, { timeout: 20_000 });

      const problems = await fig.evaluate((el, index) => {
        const s = el.querySelector('svg');
        const [x, y, w, h] = s.getAttribute('viewBox').split(' ').map(Number);
        const found = [];
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
        return found;
      }, i);
      expect(problems, `layout problems on ${route}`).toEqual([]);
    }

    expect(errors, `console errors on ${route}`).toEqual([]);
    page.off('console', onConsole);
    page.off('pageerror', onPageError);
  }
});

test('legacy pasted figures still render their SVG untouched', async ({ page }) => {
  // The conversion is per-page and gradual: a book page that still carries
  // prerendered <div class="ap-figure"> SVG must keep working unchanged.
  // Minified production HTML drops the attribute quotes, so match the two
  // markers separately: a div-delivered figure page still carries data-spec.
  const legacy = routesContaining('data-spec').filter((r) => !routesContaining('<ap-figure').includes(r));
  expect(legacy.length).toBeGreaterThan(0);
  await gotoBuiltPage(page, legacy[0]);
  expect(await page.locator('div.ap-figure svg').count()).toBeGreaterThan(0);
});
