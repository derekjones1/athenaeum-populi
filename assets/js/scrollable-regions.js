/**
 * Keyboard access to wide display equations, tables, and Key equations lines.
 *
 * `custom.css` lets a `.katex-display` block scroll horizontally rather than
 * paint over the right-hand rail, which makes an overflowing equation a
 * scrollable region — and a scrollable region a keyboard user cannot reach
 * cannot be scrolled (WCAG 2.1.1; axe reports it as
 * `scrollable-region-focusable`, serious). The graded-state axe scan of a
 * graph-plot page found three such equations on the first page it visited.
 * Hextra's typography styles every prose table the same way (`display:
 * block; overflow-x: auto`), so a wide table is the same failure: the
 * transcribed muscle tables of A&P 11.5 overflow under CI's Linux fonts.
 *
 * Only the blocks that actually overflow become focusable: a tab stop on
 * every equation of a math page would be hundreds of stops for nothing. The
 * check re-runs when the viewport resizes and once the KaTeX fonts arrive,
 * because both change an equation's width.
 */
// The third kind is a Key equations line (a list entry that is one formula,
// under that heading), which custom.css lets scroll inside itself for the
// same reason; the selector is the stylesheet's.
const SELECTOR = '.content .katex-display, .content table, .content h2:has(> #key-equations) + ul > li > .katex:only-child';

// The fourth kind: an inline formula in an interactive item's question that
// is wider than the item's card. An equation written into a stem
// (`$\ce{… -> …}$`) cannot break, and on a phone seventeen of Chemistry
// chapter 4's ran 4–198 px past the card's edge. Such a formula is given the
// class `ap-katex-wide` — custom.css makes it a block of its own that scrolls
// sideways inside the card — and, since it then scrolls, a tab stop like the
// blocks above. The decision is per formula and after layout, because a
// formula that fits must keep its inline box, baseline, and line breaking
// (an `overflow` on an inline-block moves the baseline): every check first
// returns every marked formula to inline, measures, and marks again only
// those that still run past their question's right edge. All of it happens
// in one frame, before paint, so a page where nothing overflows never
// changes. Each question is watched by a ResizeObserver, so a viewport or
// orientation change, the KaTeX fonts arriving, and a follow-up item that
// appears later (from `hidden`, size zero) each re-run the check.
const QUESTIONS = '.content :is(.ap-fillin-question, .ap-mc-question, .ap-textin-question, '
  + '.ap-selfcheck-question, .ap-sortbins-question, .ap-graphplot-question)';
const WIDE = 'ap-katex-wide';

function markWideQuestionMath() {
  const questions = [...document.querySelectorAll(QUESTIONS)];
  // Back to inline first: a formula that fits again is undone.
  for (const math of document.querySelectorAll(`.${WIDE}`)) {
    math.classList.remove(WIDE);
    if (math.getAttribute('tabindex') === '0') math.removeAttribute('tabindex');
  }
  const wide = [];
  for (const question of questions) {
    const box = question.getBoundingClientRect();
    if (!box.width) continue; // a hidden follow-up: measured when it appears
    const right = box.right - (parseFloat(getComputedStyle(question).paddingRight) || 0);
    for (const math of question.querySelectorAll('.katex')) {
      if (math.closest('.katex-display') || math.parentElement.closest('.katex')) continue;
      // Punctuation typed after the formula scrolls with it: the two share
      // an `.ap-math-glue` span (layouts/_markup/render-passthrough.html),
      // and that span becomes the block, so the period is not left alone
      // on the line under it.
      const glue = math.parentElement.closest('.ap-math-glue');
      if ([...math.getClientRects()].some((rect) => rect.width && rect.right > right + 1)) wide.push(glue ?? math);
    }
  }
  // Reads above, writes below: one layout, not one per formula.
  for (const math of wide) math.classList.add(WIDE);
}

function markScrollable() {
  markWideQuestionMath();
  for (const block of document.querySelectorAll(`${SELECTOR}, .content .${WIDE}`)) {
    const scrolls = block.scrollWidth > block.clientWidth + 1;
    if (scrolls) {
      if (!block.hasAttribute('tabindex')) block.setAttribute('tabindex', '0');
    } else if (block.getAttribute('tabindex') === '0') {
      block.removeAttribute('tabindex');
    }
  }
}

let scheduled = false;
function schedule() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    markScrollable();
  });
}

if (typeof document !== 'undefined') {
  schedule();
  window.addEventListener('resize', schedule, { passive: true });
  document.fonts?.ready?.then(schedule);
  // A question's own size changes when it is shown, re-wrapped, or re-set in
  // its font; a check that changes nothing leaves its size alone, so this
  // settles after one pass.
  if (typeof ResizeObserver !== 'undefined') {
    const watch = () => {
      const observer = new ResizeObserver(schedule);
      for (const question of document.querySelectorAll(QUESTIONS)) observer.observe(question);
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch, { once: true });
    else watch();
  }
}
