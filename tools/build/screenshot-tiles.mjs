// Capture a built page as readable viewport tiles, top to bottom, for the
// rendered-page reading (docs/briefs/chemistry/render-reader.md): a reader
// compares the tiles with the printed book's pages. One full-page screenshot
// of a section is 20,000 px tall and unreadable; tiles of one viewport, with
// an overlap so no line is cut on both, are.
//
// Usage:
//   npm run build && npm run serve:public &   (port 1315; set PORT or
//                                               SHOT_BASE to override)
//   node tools/build/screenshot-tiles.mjs <outDir> </built/page/route/> [...]
//
// Writes <outDir>/<last route segment>/tile-NN.png (light theme, 1100×1500,
// 120 px overlap) and prints, per route, the tile count, the page height,
// and how many KaTeX errors and page errors the visit raised — a page that
// reports either is not ready to be read.
//
// Drives the installed Chrome through tools/build/chrome-stdio-shim.sh, as
// screenshot-page.mjs does and for the same reason.

import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const chromeShim = fileURLToPath(new URL('./chrome-stdio-shim.sh', import.meta.url))
const [outRoot, ...routes] = process.argv.slice(2)
if (!outRoot || routes.length === 0) {
  console.error('usage: node tools/build/screenshot-tiles.mjs <outDir> </built/page/route/> [...]')
  process.exit(2)
}
const base = process.env.SHOT_BASE ?? `http://127.0.0.1:${process.env.PORT || 1315}`
const WIDTH = 1100
const HEIGHT = 1500
const OVERLAP = 120

const browser = await chromium.launch({ executablePath: chromeShim })
const context = await browser.newContext({
  viewport: { width: WIDTH, height: HEIGHT },
  colorScheme: 'light',
  deviceScaleFactor: 1,
})
let failed = false
for (const route of routes) {
  const page = await context.newPage()
  const errors = []
  page.on('pageerror', (error) => errors.push(String(error)))
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
  await page.goto(base + route, { waitUntil: 'networkidle' })
  const name = route.replace(/\/$/, '').split('/').pop()
  const dir = path.join(outRoot, name)
  mkdirSync(dir, { recursive: true })
  const total = await page.evaluate(() => document.documentElement.scrollHeight)
  let index = 0
  for (let top = 0; top < total; top += HEIGHT - OVERLAP) {
    await page.evaluate((y) => window.scrollTo(0, y), top)
    await page.waitForTimeout(350)
    // A lazy image far from its neighbours starts loading only once it is
    // in view: wait for the ones this tile shows.
    await page.evaluate(() => Promise.all([...document.images].filter((img) => {
      const box = img.getBoundingClientRect()
      return box.bottom > 0 && box.top < window.innerHeight && !img.complete
    }).map((img) => new Promise((resolve) => {
      img.onload = resolve
      img.onerror = resolve
      setTimeout(resolve, 3000)
    }))))
    index += 1
    await page.screenshot({ path: path.join(dir, `tile-${String(index).padStart(2, '0')}.png`) })
  }
  const katexErrors = await page.evaluate(() => document.querySelectorAll('.katex-error').length)
  if (katexErrors || errors.length) failed = true
  console.log(`${name}: ${index} tiles, height ${total}px, katex errors ${katexErrors}, page errors ${errors.length}${errors.length ? ` — ${errors.slice(0, 3).join(' | ')}` : ''}`)
  await page.close()
}
await browser.close()
process.exit(failed ? 1 : 0)
