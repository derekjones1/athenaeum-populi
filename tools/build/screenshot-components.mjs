// Crop every interactive component and figure on a built page, in both colour
// schemes, after driving each one into the state a reviewer needs to see.
// `screenshot-page.mjs` captures whole pages and spec-first figure crops; the
// full-page image of a long section is 40,000 px tall and unreadable, and a
// component's interesting state (a wrong answer's feedback, a revealed model
// answer, an opened extended description) never appears in a static capture.
// This tool is the review step the first Biology chapters did by hand: one
// PNG per component per theme, named by component kind and index.
//
// Usage:
//   npm run build            (or have public/ current)
//   python3 -m http.server 8099 --directory public &
//   node tools/build/screenshot-components.mjs </built/page/route/> [outDir] [--only kind,kind]
//
// Kinds and the state each is captured in:
//   fill-in           a wrong answer graded ("Not quite" feedback shown)
//   text-in           a wrong answer graded
//   multiple-choice   the second option chosen (usually wrong; shows feedback)
//   self-check        the model answer revealed, one rubric checkpoint ticked
//   graph-plot        as rendered
//   sort-bins         every item placed in the last bin, then graded
//   ap-figure         as rendered (spec-first SVG)
//   mediafigure       as rendered, extended description opened if present
//   callout           as rendered
//
// Drives the installed Chrome through tools/build/chrome-stdio-shim.sh (no
// `npx playwright install` needed); see screenshot-page.mjs for why.

import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const chromeShim = fileURLToPath(new URL('./chrome-stdio-shim.sh', import.meta.url))

/** Selector and capture recipe per component kind, in page order of interest. */
export const KINDS = Object.freeze({
  'fill-in': { selector: 'fill-in', action: 'wrong-fillin' },
  'text-in': { selector: 'text-in', action: 'wrong-textin' },
  'multiple-choice': { selector: 'multiple-choice', action: 'choose-second' },
  'self-check': { selector: 'self-check', action: 'open-selfcheck' },
  'graph-plot': { selector: 'graph-plot', action: 'place-points-then-check' },
  'sort-bins': { selector: 'sort-bins', action: 'wrong-sortbins' },
  'ap-figure': { selector: 'ap-figure', action: null },
  mediafigure: { selector: 'figure.ap-mediafigure', action: 'open-details' },
  callout: { selector: '.content > div[class*="hx:rounded-lg"][class*="hx:border"]', action: null },
})

export function parseArgs(argv) {
  const options = { route: null, outDir: 'test-results/component-shots', only: null }
  const positional = []
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--only') {
      const list = argv[++i]
      if (!list) throw new Error('--only needs a comma-separated list of kinds')
      options.only = list.split(',').map((k) => k.trim()).filter(Boolean)
      for (const kind of options.only) {
        if (!KINDS[kind]) throw new Error(`unknown kind ${JSON.stringify(kind)} (known: ${Object.keys(KINDS).join(', ')})`)
      }
    } else if (arg.startsWith('--')) {
      throw new Error(`unknown option ${JSON.stringify(arg)}`)
    } else {
      positional.push(arg)
    }
  }
  if (!positional[0]) throw new Error('usage: node tools/build/screenshot-components.mjs </built/page/route/> [outDir] [--only kind,kind]')
  options.route = positional[0]
  if (positional[1]) options.outDir = positional[1]
  return options
}

/** File-safe name for one capture. */
export function shotName(scheme, kind, index) {
  return `${scheme}-${kind}-${String(index).padStart(2, '0')}.png`
}

async function drive(el, action, page) {
  switch (action) {
    case 'wrong-fillin': {
      // Wait for the engine, then type a wrong answer and grade it.
      const check = el.locator('button.ap-fillin-check')
      await check.waitFor({ state: 'attached', timeout: 15_000 })
      await page.waitForFunction((node) => !node.querySelector('button.ap-fillin-check')?.disabled, await el.elementHandle(), { timeout: 15_000 }).catch(() => {})
      const field = el.locator('math-field')
      await field.click()
      await page.keyboard.type('999', { delay: 10 })
      await check.click()
      await page.waitForTimeout(250)
      return
    }
    case 'wrong-textin': {
      const input = el.locator('input.ap-textin-field')
      await input.waitFor({ state: 'attached', timeout: 15_000 })
      await input.fill('ribozyme')
      await el.locator('button.ap-textin-check').click()
      await page.waitForTimeout(150)
      return
    }
    case 'wrong-sortbins': {
      // Every item into the LAST bin: the ownership cap in the config parser
      // means all-in-one-bin is never the key, so this reliably captures the
      // graded partial/incorrect feedback state.
      await page.waitForFunction((node) => node.querySelector('.ap-sortbins-item:not([disabled])'), await el.elementHandle(), { timeout: 15_000 }).catch(() => {})
      // Click the first TRAY item each pass: moving a button into a bin
      // reorders the DOM, so nth(i) over all items skips some as they move.
      const tray = el.locator('.ap-sortbins-tray .ap-sortbins-item')
      const places = el.locator('.ap-sortbins-place')
      const bins = await places.count()
      while (await tray.count()) {
        await tray.first().click()
        await places.nth(bins - 1).click()
      }
      await el.locator('.ap-sortbins-check').click()
      await page.waitForTimeout(150)
      return
    }
    case 'place-points-then-check': {
      // The keyboard path: "Add point" drops each point on a free lattice
      // location, so a full set is (almost always) a wrong answer, and Check
      // then shows the graded state — the one no static capture reaches.
      await page.waitForFunction((node) => node.querySelector('.ap-graphplot-btn') && !node.querySelector('.ap-graphplot-add')?.disabled, await el.elementHandle(), { timeout: 15_000 }).catch(() => {})
      const addPoint = el.getByRole('button', { name: 'Add point' })
      for (let i = 0; i < 12 && !(await addPoint.isDisabled()); i += 1) await addPoint.click()
      await el.getByRole('button', { name: 'Check' }).click()
      await page.waitForTimeout(250)
      return
    }
    case 'choose-second': {
      await page.waitForFunction((node) => node.querySelector('.ap-mc-option:not([disabled])'), await el.elementHandle(), { timeout: 15_000 }).catch(() => {})
      const options = el.locator('.ap-mc-option')
      const count = await options.count()
      if (count > 1) await options.nth(1).click()
      await page.waitForTimeout(150)
      return
    }
    case 'open-selfcheck': {
      // Reveal the model answer, then tick the first rubric checkpoint (if
      // the item carries one) so review PNGs show the rubric interaction.
      const scSummary = el.locator('details > summary').first()
      if (await scSummary.count()) {
        const open = await scSummary.evaluate((s) => s.parentElement.open)
        if (!open) await scSummary.click()
        await page.waitForTimeout(100)
      }
      const box = el.locator('.ap-selfcheck-checkpoints input[type="checkbox"]').first()
      if (await box.count()) await box.check().catch(() => {})
      await page.waitForTimeout(100)
      return
    }
    case 'open-details': {
      const summary = el.locator('details > summary').first()
      if (await summary.count()) {
        const open = await summary.evaluate((s) => s.parentElement.open)
        if (!open) await summary.click()
        await page.waitForTimeout(100)
      }
      return
    }
    default:
      return
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  const base = process.env.SHOT_BASE ?? 'http://127.0.0.1:8099'
  mkdirSync(options.outDir, { recursive: true })
  const kinds = options.only ?? Object.keys(KINDS)

  let browser
  try {
    browser = await chromium.launch({ executablePath: chromeShim })
  } catch {
    browser = await chromium.launch()
  }

  let captured = 0
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
    const response = await page.goto(base + options.route, { waitUntil: 'networkidle' })
    if (!response || !response.ok()) {
      console.error(`✖ ${base + options.route} returned ${response ? response.status() : 'no response'}`)
      await browser.close()
      process.exit(1)
    }
    await page.waitForTimeout(800)

    for (const kind of kinds) {
      const { selector, action } = KINDS[kind]
      const all = page.locator(selector)
      const count = await all.count()
      for (let i = 0; i < count; i += 1) {
        const el = all.nth(i)
        try {
          await el.scrollIntoViewIfNeeded()
          await drive(el, action, page)
          await el.screenshot({ path: `${options.outDir}/${shotName(scheme, kind, i)}` })
          captured += 1
        } catch (error) {
          failed = true
          console.error(`✖ ${scheme} ${kind} #${i}: ${String(error.message).split('\n')[0]}`)
        }
      }
      if (count) console.log(`${scheme}: ${count} ${kind}`)
    }
    if (errors.length) {
      failed = true
      console.error(`${scheme} PAGE ERRORS:`, errors.slice(0, 10))
    }
    await ctx.close()
  }
  await browser.close()
  console.log(`captured ${captured} component crops in ${options.outDir}`)
  process.exit(failed ? 1 : 0)
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main().catch((error) => {
    console.error(`screenshot-components: ${error.message}`)
    process.exit(2)
  })
}
