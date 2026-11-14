/**
 * Type every graded item's key into the real component, the way a learner
 * with a plain keyboard would, and report what the page says.
 *
 * verify-section and verify:replay grade a key through the grader in Node.
 * What only a browser shows is what the FIELD makes of the keystrokes before
 * the grader sees them: MathLive leaving an exponent after one digit, a "/"
 * swallowing a number into a fraction, a typed letter x for the times sign
 * read as a unit (November 14, 2026: 55 scientific-notation fill-ins
 * answered a right number with a bare "Not quite"). The browser suite types
 * one page's keys (1.6); this types a whole book's, and is run at a
 * chapter's close-out rather than in CI, since its time grows with the book.
 *
 *   npm run build && npm run serve:public &        # port 1315
 *   npm run verify:typed -- [routeFilter] [--variants] [--book <path>] [--out file.json]
 *
 * Default pass: each fill-in's key as digits, sign, point and `*10^n`; each
 * formula or equation by the field's own typing guide (`SO4^2-`, `->`,
 * `^23_11Na`); each plain text-in as keyed; each multiple choice by its
 * keyed option; each sort-into-bins by picking up every label and placing
 * it in its keyed bin, then Check (one item per sortbins, as the solve and
 * the ledger count it). Items inside a follow-up are reached by answering
 * their gate first, in page order. Exit 1 when any key is not graded
 * correct.
 *
 * --variants: a second ordinary way of writing each answer instead — the
 * letter x for the times sign, a leading "+" on an oxidation state, no
 * leading zero, a thousands comma, a charge typed bare with no state
 * symbols, a name in lower case (a sortbins has no second writing: it is
 * placed as keyed in both passes). Not every variant must be right (that is a
 * judgment); each one that is not is listed with the page's feedback, so a
 * bare "Not quite" on a reasonable writing is seen.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const REPO = fileURLToPath(new URL('../..', import.meta.url)).replace(/\/$/, '');
const BASE = process.env.BASE_URL || 'http://127.0.0.1:1315';
const args = process.argv.slice(2);
const flag = (name) => { const at = args.indexOf(name); return at < 0 ? null : args.splice(at, 2)[1]; };
const book = (flag('--book') || 'physical-sciences/chemistry').replace(/^\/|\/$/g, '');
const outFile = flag('--out');
const variants = args.includes('--variants');
const pass = variants ? 'B' : 'A';
const filter = args.find((arg) => !arg.startsWith('--')) || '';

function routes() {
  const root = `${REPO}/public/${book}`;
  const out = [];
  for (const chapter of fs.readdirSync(root, { withFileTypes: true })) {
    if (!chapter.isDirectory()) continue;
    if (/^knowledge-check/.test(chapter.name)) out.push(`/${book}/${chapter.name}/`);
    if (!/^\d\d-/.test(chapter.name)) continue;
    for (const section of fs.readdirSync(path.join(root, chapter.name), { withFileTypes: true })) {
      if (section.isDirectory() && /^\d\d-/.test(section.name)) out.push(`/${book}/${chapter.name}/${section.name}/`);
    }
  }
  return out.sort().filter((r) => r.includes(filter));
}

const SUB = '₀₁₂₃₄₅₆₇₈₉';
const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
/** A formula or equation key in Unicode print, typed on a plain keyboard. */
function asciiChem(key, { caret = true, states = true } = {}) {
  let text = key
    // A nuclide with both numbers: ²³₁₁Na is typed ^23_11Na.
    .replace(/([⁰¹²³⁴-⁹]+)([₀-₉]+)(?=[A-Z])/g, (_, a, b) => '^' + [...a].map((c) => SUP.indexOf(c)).join('') + '_' + [...b].map((c) => SUB.indexOf(c)).join(''))
    .replace(/[₀-₉]/g, (c) => SUB.indexOf(c))
    .replace(/[⁰¹²³⁴-⁹⁺⁻]+/g, (run, offset, whole) => {
      const plain = [...run].map((c) => (c === '⁺' ? '+' : c === '⁻' ? '-' : SUP.indexOf(c))).join('');
      // A mass number stands before its symbol and is typed as plain digits.
      const before = whole[offset - 1];
      if (/^\d+$/.test(plain) && (offset === 0 || /[\s(+]/.test(before))) return plain;
      return (caret ? '^' : '') + plain;
    })
    .replace(/⟶|→/g, '->').replace(/⇌/g, '<=>').replace(/[·•]/g, '.').replace(/−/g, '-');
  if (!states) text = text.replace(/\((?:s|l|g|aq)\)/g, '');
  return text;
}

/** MathLive keystrokes for a numeric key. */
function keysFor(answer) {
  let m = answer.match(/^(-?[\d.]+)\\times10\^\{(-?\d+)\}$/);
  if (m) return `${m[1]}*10^${m[2]}`;
  m = answer.match(/^10\^\{(-?\d+)\}$/);
  if (m) return `10^${m[1]}`;
  return /^-?[\d.]+$/.test(answer) ? answer : null;
}
/** A second way an ordinary learner writes the same number, or null. */
function variantFor(answer, question) {
  let m = answer.match(/^(-?[\d.]+)\\times10\^\{(-?\d+)\}$/);
  if (m) return { keys: `${m[1]} x 10^${m[2]}`, kind: 'letter-x' };
  if (/^\d+$/.test(answer) && /oxidation/i.test(question)) return { keys: `+${answer}`, kind: 'plus-sign' };
  if (/^0\.\d+$/.test(answer)) return { keys: answer.slice(1), kind: 'no-leading-zero' };
  if (/^\d{5,}$/.test(answer)) return { keys: answer.replace(/\B(?=(\d{3})+$)/g, ','), kind: 'thousands-comma' };
  if (/^\d{4}$/.test(answer)) return { keys: answer.replace(/\B(?=(\d{3})+$)/g, ','), kind: 'thousands-comma-4' };
  return null;
}

const browser = await chromium.launch({ executablePath: `${REPO}/tools/build/chrome-stdio-shim.sh` });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();
const consoleErrors = [];
page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(`${page.url()} :: ${msg.text()}`); });
page.on('pageerror', (err) => consoleErrors.push(`${page.url()} :: PAGEERROR ${err.message}`));

const results = [];
for (const route of routes()) {
  await page.goto(BASE + route, { waitUntil: 'networkidle' });
  const GRADED = 'fill-in, text-in, multiple-choice, sort-bins';
  const count = await page.locator(GRADED).count();
  const started = Date.now();
  for (let index = 0; index < count; index += 1) {
    const item = page.locator(GRADED).nth(index);
    const info = await item.evaluate((el) => ({
      tag: el.localName,
      answer: el.dataset.answer ?? '',
      form: el.dataset.answerForm ?? '',
      accept: el.dataset.accept ?? '',
      config: el.dataset.config ?? '',
      question: (el.dataset.question ?? el.querySelector('.ap-sortbins-question')?.textContent ?? '').trim().slice(0, 140),
      hidden: !el.getClientRects().length,
      inFollowup: Boolean(el.closest('ap-followup')),
    }));
    const { config, ...shown } = info;
    const record = { route, index, ...shown };
    try {
      if (info.hidden) { record.result = 'HIDDEN'; results.push(record); continue; }
      if (info.tag === 'sort-bins') {
        // Each label into its keyed bin, by the component's own two-step
        // keyboard path (pick up the label, then "Place here" under the
        // bin), then Check. The key is the config's bin indexes.
        const cfg = JSON.parse(config);
        record.answer = cfg.items.map((entry) => `${entry.label} → ${cfg.bins[entry.bin]}`).join('; ');
        record.kind = 'as-keyed';
        await item.locator('.ap-sortbins-item:not([disabled])').first().waitFor({ timeout: 20000 });
        for (const [at, entry] of cfg.items.entries()) {
          const label = item.locator(`.ap-sortbins-item[data-item="${at}"]`);
          await label.scrollIntoViewIfNeeded();
          await label.click({ timeout: 8000 });
          await item.locator(`.ap-sortbins-place[data-bin="${entry.bin}"]`).click({ timeout: 8000 });
        }
        record.typed = `${cfg.items.length} labels placed`;
        await item.locator('.ap-sortbins-check').click();
        await page.waitForTimeout(60);
        record.feedback = (await item.locator('.ap-sortbins-feedback').textContent()).trim();
        record.result = record.feedback.startsWith('Correct!') ? 'correct' : 'NOT-CORRECT';
      } else if (info.tag === 'multiple-choice') {
        const options = item.locator('.ap-mc-option');
        const values = await options.evaluateAll((els) => els.map((b) => b.dataset.value ?? `graph:${b.dataset.index}`));
        record.options = values.length;
        const at = values.indexOf(info.answer);
        if (at < 0) { record.result = 'NO-OPTION-EQUALS-KEY'; record.values = values; results.push(record); continue; }
        if (values.filter((v) => v === info.answer).length > 1) record.duplicateKeyOption = true;
        if (new Set(values).size !== values.length) record.duplicateOptions = true;
        record.keyPosition = at;
        await options.nth(at).scrollIntoViewIfNeeded();
        await options.nth(at).click({ timeout: 8000 });
        record.feedback = (await item.locator('.ap-mc-feedback').textContent()).trim();
        record.result = record.feedback.startsWith('Correct!') ? 'correct' : 'NOT-CORRECT';
      } else if (info.tag === 'text-in') {
        let typed = info.answer;
        let kind = 'as-keyed';
        if (info.form === 'formula' || info.form === 'equation') {
          typed = pass === 'A' ? asciiChem(info.answer) : asciiChem(info.answer, { caret: false, states: false });
          kind = pass === 'A' ? 'guide-style' : 'bare-charge-no-states';
        } else if (pass === 'B') {
          typed = info.answer.toLowerCase(); kind = 'lowercase';
        }
        record.typed = typed; record.kind = kind;
        await item.locator('.ap-textin-check').waitFor({ timeout: 20000 });
        const field = item.locator('.ap-textin-field');
        await field.scrollIntoViewIfNeeded();
        await field.fill(typed);
        if (info.form) record.reading = (await item.locator('.ap-textin-reading').textContent().catch(() => '')) ?? '';
        await field.press('Enter');
        await page.waitForTimeout(60);
        record.status = await item.evaluate((el) => el.status);
        record.feedback = (await item.locator('.ap-textin-feedback').textContent()).trim();
        record.result = record.status === 'correct' ? 'correct' : 'NOT-CORRECT';
        if (record.status !== 'correct' && kind !== 'guide-style' && kind !== 'as-keyed') {
          // Open the gate for any follow-up, the canonical way.
          await field.fill(info.form ? asciiChem(info.answer) : info.answer);
          await field.press('Enter');
        }
      } else {
        const canonical = keysFor(info.answer);
        const variant = pass === 'B' ? variantFor(info.answer, info.question) : null;
        const keys = variant ? variant.keys : canonical;
        record.kind = variant ? variant.kind : 'as-keyed';
        if (keys === null) { record.result = 'UNTYPEABLE-KEY'; results.push(record); continue; }
        record.typed = keys;
        const field = item.locator('math-field');
        await field.waitFor({ timeout: 20000 });
        for (let tries = 0; tries < 100; tries += 1) {
          if (await field.evaluate((el) => typeof el.executeCommand === 'function')) break;
          await page.waitForTimeout(200);
        }
        await field.scrollIntoViewIfNeeded();
        await field.click();
        for (let tries = 0; tries < 50; tries += 1) {
          if (await field.evaluate((el) => document.activeElement === el)) break;
          await page.waitForTimeout(100);
        }
        await page.waitForTimeout(60);
        await page.keyboard.type(keys, { delay: 12 });
        record.fieldValue = await field.evaluate((el) => el.value);
        await item.getByRole('button', { name: /check/i }).click();
        for (let tries = 0; tries < 40; tries += 1) {
          record.status = await item.evaluate((el) => el.status);
          if (record.status && record.status !== 'idle' && record.status !== 'checking') break;
          await page.waitForTimeout(100);
        }
        record.feedback = (await item.locator('.ap-fillin-feedback').textContent()).trim().slice(0, 260);
        record.result = record.status === 'correct' ? 'correct' : 'NOT-CORRECT';
        if (record.status !== 'correct' && variant && canonical) {
          await field.evaluate((el) => { el.focus(); el.executeCommand('selectAll'); el.executeCommand('deleteBackward'); });
          await field.click();
          await page.keyboard.type(canonical, { delay: 8 });
          await item.getByRole('button', { name: /check/i }).click();
          await page.waitForTimeout(300);
        }
      }
    } catch (error) {
      record.result = 'ERROR';
      record.error = String(error.message).split('\n')[0].slice(0, 200);
    }
    results.push(record);
  }
  const mine = results.filter((r) => r.route === route);
  const bad = mine.filter((r) => r.result !== 'correct');
  console.log(`${route} items ${count} not-correct ${bad.length} (${Math.round((Date.now() - started) / 1000)} s)`);
}
await browser.close();
if (outFile) fs.writeFileSync(outFile, JSON.stringify({ pass, results, consoleErrors }, null, 1));
const bad = results.filter((r) => r.result !== 'correct');
for (const r of bad) {
  console.log(`  ${r.route} #${r.index} ${r.tag} key ${r.answer} — typed ${JSON.stringify(r.typed ?? '')} (${r.kind ?? r.result}) → ${r.status ?? r.result}: ${r.feedback ?? r.error ?? ''}`);
}
for (const line of consoleErrors) console.log(`  console: ${line}`);
console.log(`${variants ? 'variants' : 'keys as typed'}: ${results.length} items, ${bad.length} not graded correct, ${consoleErrors.length} console error(s)`);
if (!results.length) { console.error('no graded items found — is the built site served at ' + BASE + '?'); process.exit(1); }
if (!variants && (bad.length || consoleErrors.length)) process.exit(1);
