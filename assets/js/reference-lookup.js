/**
 * Site chrome: a table appendix opened in place.
 *
 * An exercise that says "Using the data in Appendix G, calculate…" links the
 * appendix, and following that link left the page, where a typed answer is
 * not kept — the reason the periodic table became a control that opens over
 * the page (figure-enlarge.js). An appendix that is a TABLE to look values up
 * in opens over the page too (Derek, November 11, 2026): the link fetches
 * the appendix page and shows its tables in ONE native modal <dialog>, with a
 * field that filters the rows — Appendix G has 403, and a learner wants the
 * three or four the exercise names.
 *
 * Which pages: the ones the book marks `lookup: true` in their front matter
 * (Chemistry's Appendices C–M). layouts/_partials/toc.html prints them as
 * JSON on every section page of the book (utils/reference-lookups.html), and
 * a link to one of them in the page's BODY opens here. Not on a landing page
 * or among the appendices themselves, where the same link is navigation.
 *
 * The link stays a link: without this script, on a modified click, in a
 * browser with no <dialog>, and whenever the page cannot be fetched or read,
 * the browser follows it. The dialog carries a link to the appendix's own
 * page as well.
 *
 * What is kept while the page is open: each appendix is fetched once, and
 * its filter text and scroll position are there when it is opened again —
 * the second value an exercise needs is usually near the first.
 *
 * The filter itself is lib/shared/lookup-filter.mjs.
 */

import { samePage } from './figure-enlarge.js';
import { countLabel, filterRows } from './lib/shared/lookup-filter.mjs';

const DATA = 'ap-lookups';
// A long table opens with the cursor in the filter. A short one opens on the
// table itself: on a phone, focusing the field raises the keyboard over the
// seven rows the learner came to read.
const FILTER_FIRST_FROM = 13;
const REFERENCING = ['aria-labelledby', 'aria-describedby', 'aria-controls', 'aria-owns', 'for'];

let viewer = null;
let pages = null;
/** pathname → { body, tables, total, query, top, left } */
const sheets = new Map();

/** The book's lookup pages, from the JSON the rail prints. */
function lookupPages() {
  if (pages) return pages;
  pages = [];
  try {
    const data = JSON.parse(document.getElementById(DATA)?.textContent || '[]');
    if (Array.isArray(data)) pages = data.filter((entry) => entry && typeof entry.href === 'string');
  } catch {
    // Unreadable data: every link stays a link.
  }
  return pages;
}

/** The lookup page a body link points at, or undefined. */
function lookupFor(link) {
  if (!link.closest('main .content') || link.origin !== window.location.origin) return undefined;
  return lookupPages().find((entry) => samePage(link.pathname, new URL(entry.href, window.location.href).pathname));
}

function build() {
  const dialog = document.createElement('dialog');
  dialog.className = 'ap-figure-viewer ap-lookup';
  dialog.setAttribute('aria-labelledby', 'ap-lookup-title');
  dialog.innerHTML = `
    <div class="ap-figure-viewer-bar">
      <p class="ap-figure-viewer-title" id="ap-lookup-title"></p>
      <button type="button" class="ap-figure-viewer-btn ap-lookup-close">Close</button>
    </div>
    <div class="ap-lookup-tools">
      <label class="ap-lookup-filter">
        <span class="ap-lookup-filter-label">Filter rows</span>
        <input class="ap-lookup-input" type="search" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="search">
      </label>
      <p class="ap-lookup-count" role="status" aria-live="polite"></p>
    </div>
    <div class="ap-lookup-stage" tabindex="0" role="group" aria-label="The appendix. Scroll, or use the arrow keys, to move around it."></div>
    <p class="ap-figure-viewer-page">Open <a></a></p>`;
  document.body.append(dialog);

  const state = {
    dialog,
    title: dialog.querySelector('.ap-figure-viewer-title'),
    filter: dialog.querySelector('.ap-lookup-filter'),
    input: dialog.querySelector('.ap-lookup-input'),
    count: dialog.querySelector('.ap-lookup-count'),
    stage: dialog.querySelector('.ap-lookup-stage'),
    page: dialog.querySelector('.ap-figure-viewer-page a'),
    sheet: null,
    opener: null,
    // Counts the openings, so a page that arrives after the dialog was closed
    // or pointed at another appendix is not shown.
    turn: 0,
  };

  dialog.querySelector('.ap-lookup-close').addEventListener('click', () => dialog.close());
  // The dialog has no padding, so only the backdrop reports the dialog
  // itself as the target.
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  // Where the reader is in the table, kept as they scroll: by the time
  // `close` fires the dialog is no longer drawn and its scroll reads zero.
  state.stage.addEventListener('scroll', () => {
    if (!dialog.open || !state.sheet) return;
    state.sheet.top = state.stage.scrollTop;
    state.sheet.left = state.stage.scrollLeft;
  }, { passive: true });
  dialog.addEventListener('close', () => {
    state.turn += 1;
    state.sheet = null;
    // Safari does not focus a link on click, so the browser has nothing to
    // return focus to there.
    const { opener } = state;
    state.opener = null;
    if (opener?.isConnected && document.activeElement !== opener) opener.focus({ preventScroll: true });
  });
  state.input.addEventListener('input', () => {
    if (!state.sheet) return;
    state.sheet.query = state.input.value;
    apply(state);
    state.stage.scrollTo(0, 0);
  });
  // Escape closes and KEEPS the filter, in every browser: a search field of
  // its own would clear on the first Escape in some and close in others.
  state.input.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || event.isComposing) return;
    event.preventDefault();
    dialog.close();
  });
  return state;
}

/** A cell's text as a reader sees it: KaTeX prints each formula twice (the
 * MathML layer and the drawn one) and carries its TeX source besides. */
function cellText(cell) {
  if (!cell.querySelector('.katex')) return cell.textContent;
  const copy = cell.cloneNode(true);
  for (const extra of copy.querySelectorAll('.katex-html, annotation')) extra.remove();
  return copy.textContent;
}

/** A row that only names the rows after it: bold in the first cell, nothing in the rest. */
function namesGroup(row) {
  const [first, ...rest] = row.cells;
  if (!first || !rest.length) return false;
  const bold = first.querySelector(':scope > strong:only-child');
  return Boolean(bold) && bold.textContent.trim() === first.textContent.trim() && rest.every((cell) => !cell.textContent.trim());
}

/** The tables of a sheet, each with its body rows read once for the filter. */
function readTables(body) {
  return [...body.querySelectorAll('table')].map((table) => {
    const rows = [...table.tBodies].flatMap((section) => [...section.rows]);
    const title = table.previousElementSibling;
    return {
      table,
      rows,
      // The bold line a table's title is set as, directly above it.
      title: title?.matches('p') && title.querySelector(':scope > strong:only-child') ? title : null,
      model: rows.map((row) => ({ cells: [...row.cells].map(cellText), group: namesGroup(row) })),
    };
  });
}

/** Fetch an appendix page and keep the part of it that is the appendix. */
async function load(href) {
  const response = await fetch(href, { credentials: 'same-origin' });
  if (!response.ok) throw new Error(`${response.status} for ${href}`);
  const page = new DOMParser().parseFromString(await response.text(), 'text/html');
  const content = page.querySelector('main .content');
  if (!content) throw new Error(`no content in ${href}`);

  // The page's heading is the dialog's title; its attribution footer — the
  // last rule and what follows it — stays on the page the dialog links to.
  content.querySelector('h1')?.closest('.content > *')?.remove();
  const rules = content.querySelectorAll(':scope > hr');
  const rule = rules[rules.length - 1];
  if (rule?.nextElementSibling?.querySelector('small')) {
    while (rule.nextSibling) rule.nextSibling.remove();
    rule.remove();
  }
  for (const inert of content.querySelectorAll('script, style')) inert.remove();
  // An id here could collide with one on the page behind.
  for (const element of content.querySelectorAll('[id]')) element.id = `ap-lookup-${element.id}`;
  for (const name of REFERENCING) {
    for (const element of content.querySelectorAll(`[${name}]`)) {
      element.setAttribute(name, element.getAttribute(name).split(/\s+/).filter(Boolean).map((id) => `ap-lookup-${id}`).join(' '));
    }
  }
  for (const anchor of content.querySelectorAll('a[href^="#"]')) {
    if (anchor.getAttribute('href').length > 1) anchor.setAttribute('href', `#ap-lookup-${anchor.getAttribute('href').slice(1)}`);
  }

  // A stylesheet the appendix needs and this page did not load (KaTeX's, on
  // a page with no math of its own).
  const have = new Set([...document.querySelectorAll('link[rel~="stylesheet"][href]')].map((link) => link.href));
  for (const link of page.querySelectorAll('link[rel~="stylesheet"][href]')) {
    const url = new URL(link.getAttribute('href'), new URL(href, window.location.href)).href;
    if (have.has(url)) continue;
    const added = document.createElement('link');
    added.rel = 'stylesheet';
    added.href = url;
    document.head.append(added);
  }

  const body = document.createElement('div');
  body.className = 'ap-lookup-sheet content';
  body.append(...document.importNode(content, true).childNodes);
  const tables = readTables(body);
  const total = tables.reduce((sum, entry) => sum + entry.model.filter((row) => !row.group).length, 0);
  return { body, tables, total, query: '', top: 0, left: 0 };
}

/** Show the rows the sheet's query keeps, and say how many. */
function apply(state) {
  const { sheet } = state;
  const filtering = Boolean(sheet.query.trim());
  let matched = 0;
  for (const entry of sheet.tables) {
    const result = filterRows(entry.model, sheet.query);
    entry.rows.forEach((row, index) => { row.hidden = !result.visible[index]; });
    matched += result.matched;
    const empty = filtering && result.matched === 0;
    entry.table.hidden = empty;
    if (entry.title) entry.title.hidden = empty;
  }
  state.count.textContent = countLabel({ matched, total: sheet.total }, sheet.query);
}

function mount(state, sheet) {
  state.sheet = sheet;
  state.stage.replaceChildren(sheet.body);
  state.stage.removeAttribute('aria-busy');
  state.filter.hidden = sheet.total === 0;
  state.input.disabled = false;
  state.input.value = sheet.query;
  apply(state);
  state.stage.scrollTo(sheet.left, sheet.top);
  (sheet.total >= FILTER_FIRST_FROM ? state.input : state.stage).focus({ preventScroll: true });
}

async function open(link, entry) {
  viewer ??= build();
  const state = viewer;
  const key = new URL(entry.href, window.location.href).pathname;
  state.turn += 1;
  const { turn } = state;
  state.opener = link;
  state.sheet = null;
  state.title.textContent = entry.title || link.textContent.trim();
  state.page.href = entry.href;
  state.page.textContent = entry.title || 'the appendix page';
  state.stage.replaceChildren();
  state.dialog.showModal();

  let sheet = sheets.get(key);
  if (!sheet) {
    state.stage.setAttribute('aria-busy', 'true');
    state.filter.hidden = false;
    state.input.value = '';
    state.input.disabled = true;
    state.count.textContent = 'Loading…';
    state.stage.focus({ preventScroll: true });
    try {
      sheet = await load(entry.href);
    } catch {
      // Whatever went wrong, the link still works as a link.
      if (state.turn === turn) window.location.assign(link.href);
      return;
    }
    sheets.set(key, sheet);
  }
  if (state.turn !== turn) return;
  mount(state, sheet);
}

document.addEventListener('click', (event) => {
  // A modified click is the browser's: open the appendix in a new tab or window.
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (typeof HTMLDialogElement !== 'function' || typeof fetch !== 'function' || typeof DOMParser !== 'function') return;
  const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
  if (!link) return;
  const entry = lookupFor(link);
  if (!entry) return;
  event.preventDefault();
  open(link, entry);
});
