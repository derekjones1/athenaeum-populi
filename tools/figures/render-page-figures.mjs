#!/usr/bin/env node
/**
 * render-page-figures.mjs — render every inline `<svg>` figure and every
 * `$$…$$` display-math block on a content page to PNG, so a reviewer can
 * look at what a learner sees without building the site.
 *
 *   node tools/figures/render-page-figures.mjs <page.md> <outdir> [--svg-only|--math-only]
 *
 * Writes `<outdir>/L<line>.png` per inline SVG and `<outdir>/B<line>.png`
 * per display block (line = the page line the figure or block starts on),
 * clearing that directory's old renders first so a line shift after an edit
 * never leaves a stale image under a live name. Prints one line per render:
 * the name and the SVG's aria-label, or the block's first TeX line.
 *
 * Why it exists: the math re-review pilot (Prealgebra 1.2, September 26,
 * 2026) found a base-10-block figure drawing 3 rods and 7 ones under an alt
 * describing 17 + 26, and carried 1s set over the wrong column in three
 * `{array}` blocks — both render wrong without throwing, so no gate sees
 * them. Rendering is local-only QA (system Chrome, through the same stdio
 * shim the browser suites use); nothing here runs in `npm test` except the
 * pure extraction below.
 *
 * `apfigure` specs are not rendered here: use `render-figure.mjs`.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('../..', import.meta.url)));
const SHIM = join(ROOT, 'tools/build/chrome-stdio-shim.sh');

/** Inline SVG figures and display-math blocks, each with its 1-based start line. */
export function extractRenderables(markdown) {
  const lines = markdown.split('\n');
  const svgs = [];
  const blocks = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/<svg[\s>]/.test(line)) {
      let j = i;
      while (j < lines.length && !lines[j].includes('</svg>')) j++;
      const text = lines.slice(i, j + 1).join('\n');
      svgs.push({ line: i + 1, text: text.slice(text.indexOf('<svg')) });
      i = j;
    } else if (line.trim() === '$$') {
      let j = i + 1;
      while (j < lines.length && lines[j].trim() !== '$$') j++;
      blocks.push({ line: i + 1, tex: lines.slice(i + 1, j).join('\n') });
      i = j;
    } else {
      const one = line.trim().match(/^\$\$(.+)\$\$$/);
      if (one) blocks.push({ line: i + 1, tex: one[1] });
    }
  }
  return { svgs, blocks };
}

function viewBoxSize(svg) {
  const m = svg.match(/viewBox="\s*[-\d.]+\s+[-\d.]+\s+([\d.]+)\s+([\d.]+)\s*"/);
  return m ? { w: Number(m[1]), h: Number(m[2]) } : { w: 600, h: 300 };
}

function shoot(htmlPath, pngPath, width, height) {
  execFileSync(SHIM, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=2',
    `--window-size=${width},${height}`, `--screenshot=${pngPath}`, pathToFileURL(htmlPath).href,
  ], { stdio: 'ignore', timeout: 60_000 });
}

const BODY = 'margin:8px;background:#fff;color:#111;font-family:sans-serif';

async function main() {
  const args = process.argv.slice(2);
  const [page, out] = args.filter((a) => !a.startsWith('--'));
  if (!page || !out) {
    console.error('usage: node tools/figures/render-page-figures.mjs <page.md> <outdir> [--svg-only|--math-only]');
    process.exit(2);
  }
  const { svgs, blocks } = extractRenderables(readFileSync(page, 'utf8'));
  mkdirSync(out, { recursive: true });
  for (const f of readdirSync(out)) if (/^[LB]\d+\.(html|png)$/.test(f)) rmSync(join(out, f));

  if (!args.includes('--math-only')) {
    for (const { line, text } of svgs) {
      const { w, h } = viewBoxSize(text);
      // The drawn width: a `width:100%` SVG stretches to the 600px column
      // (capped by its max-width), so its height scales up with it — the
      // window must follow or the bottom is cut off. Margins add ~48px.
      const style = (text.match(/<svg[^>]*style="([^"]*)"/) || [, ''])[1];
      const maxWidth = Number((style.match(/max-width:\s*([\d.]+)px/) || [])[1]) || Infinity;
      const drawn = Math.min(600, maxWidth, /(^|;)\s*width:\s*100%/.test(style) ? Infinity : w);
      const scale = drawn / w;
      const html = join(out, `L${line}.html`);
      writeFileSync(html, `<!doctype html><html><body style="${BODY};width:600px">${text}</body></html>`);
      shoot(html, join(out, `L${line}.png`), 620, Math.ceil(h * scale) + 60);
      console.log(`L${line} ${(text.match(/aria-label="([^"]*)"/) || [, '(no aria-label)'])[1]}`);
    }
  }
  if (!args.includes('--svg-only') && blocks.length) {
    const katex = (await import(pathToFileURL(join(ROOT, 'node_modules/katex/dist/katex.mjs')).href)).default;
    const css = pathToFileURL(join(ROOT, 'node_modules/katex/dist/katex.min.css')).href;
    for (const { line, tex } of blocks) {
      let body;
      try {
        body = katex.renderToString(tex, { displayMode: true, throwOnError: true });
      } catch (err) {
        console.log(`B${line} KATEX ERROR: ${err.message}`);
        continue;
      }
      const html = join(out, `B${line}.html`);
      writeFileSync(html, `<!doctype html><html><head><link rel="stylesheet" href="${css}"></head><body style="${BODY};font-size:24px;width:max-content;min-width:600px">${body}</body></html>`);
      const rows = (tex.match(/\\\\/g) || []).length + 1;
      // A wide step table overflows a 600px column and the screenshot crops
      // it (three fixers re-shot at 1,500px in the EA chapter 8–9 re-review):
      // the body grows to the block's own width and the window leaves room;
      // a row of stacked fractions is about twice a plain row's height.
      shoot(html, join(out, `B${line}.png`), 1600, 80 + rows * (/\\[dt]?frac/.test(tex) ? 110 : 50));
      console.log(`B${line} ${tex.split('\n').find((l) => l.trim() && !l.includes('\\begin')) || tex}`.slice(0, 120));
    }
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}
