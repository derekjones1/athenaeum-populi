// Browser QA helper for the authoring workflow: screenshots a built page in
// light and dark mode, reports sanity counts (figures, math runs, duplicate
// KaTeX accessibility layers, page errors), and captures every ap-figure at
// high zoom so recreated geometry can be compared against the source PDF.
//
// Usage:
//   npm run build            (or have public/ current)
//   python3 -m http.server 8099 --directory public &
//   node tools/screenshot-page.mjs /math/precalculus/01-functions/01-....../ [outDir]
//
// Uses the installed Chrome channel (no `npx playwright install` needed).

import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const route = process.argv[2]
if (!route) {
  console.error('usage: node tools/screenshot-page.mjs </built/page/route/> [outDir]')
  // 2 for a usage error, as in every other tool here; 1 is reserved for "the
  // tool ran and the thing it checks is wrong".
  process.exit(2)
}
const outDir = process.argv[3] ?? 'test-results/page-shots'
const base = process.env.SHOT_BASE ?? 'http://127.0.0.1:8099'
mkdirSync(outDir, { recursive: true })

let browser
try {
  browser = await chromium.launch({ channel: 'chrome' })
} catch {
  browser = await chromium.launch() // fall back to the bundled browser
}

let failed = false
for (const scheme of ['light', 'dark']) {
  const ctx = await browser.newContext({
    viewport: { width: 1100, height: 1000 },
    colorScheme: scheme,
    deviceScaleFactor: 2,
  })
  const page = await ctx.newPage()
  const errors = []
  page.on('pageerror', (e) => errors.push(String(e)))
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
  const response = await page.goto(base + route, { waitUntil: 'networkidle' })
  // Without this a typo'd route rendered the 404 page, reported "captured 0
  // figure crops", and exited 0 — a vacuous pass that reads exactly like a
  // page with no figures.
  if (!response || !response.ok()) {
    console.error(`✖ ${base + route} returned ${response ? response.status() : 'no response'}`)
    await browser.close()
    process.exit(1)
  }
  await page.waitForTimeout(1000)

  const stats = await page.evaluate(() => ({
    figures: document.querySelectorAll('.ap-figure svg').length,
    unlabelledFigures: [...document.querySelectorAll('.ap-figure svg')]
      .filter((s) => !s.getAttribute('aria-label')).length,
    katex: document.querySelectorAll('.katex').length,
    duplicateKatex: document.querySelectorAll('.katex-html + .katex-html').length,
  }))
  console.log(scheme, JSON.stringify(stats))
  if (errors.length) {
    failed = true
    console.log(scheme, 'PAGE ERRORS:', errors.slice(0, 10))
  }
  if (stats.duplicateKatex > 0 || stats.unlabelledFigures > 0) failed = true

  await page.screenshot({ path: `${outDir}/page-${scheme}.png`, fullPage: true })
  if (scheme === 'light') {
    const figs = await page.$$('.ap-figure')
    for (const [i, fig] of figs.entries()) {
      await fig.screenshot({ path: `${outDir}/fig-${String(i).padStart(2, '0')}.png` })
    }
    console.log(`captured ${figs.length} figure crops + full pages in ${outDir}`)
  }
  await ctx.close()
}
await browser.close()
process.exit(failed ? 1 : 0)
