// One-off: measure per-character advance widths for the figure font stack in
// a real browser, emitting a units-per-1000-em table for text-metrics.mjs.
import { chromium } from '@playwright/test';

const CHARS =
  ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`' +
  'abcdefghijklmnopqrstuvwxyz{|}~' +
  '−∞πθ°≤≥≠±·×÷√–—…²³Δ∈∪∩→←′″';

import { fileURLToPath } from 'node:url';
const browser = await chromium.launch({
  // Same resolution as playwright.config.mjs: the stdio shim finds the
  // installed Chrome, and PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH overrides.
  executablePath: fileURLToPath(new URL('./chrome-stdio-shim.sh', import.meta.url)),
});
const page = await browser.newPage();
const out = await page.evaluate((chars) => {
  const c = document.createElement('canvas').getContext('2d');
  const size = 1000;
  const table = {};
  for (const font of ['normal', 'italic']) {
    c.font = `${font} ${size}px Helvetica, Arial, sans-serif`;
    table[font] = {};
    for (const ch of chars) table[font][ch] = Math.round(c.measureText(ch).width);
  }
  c.font = `1000px Helvetica, Arial, sans-serif`;
  table.resolvedFont = c.font;
  return table;
}, CHARS);
console.log(JSON.stringify(out));
await browser.close();
