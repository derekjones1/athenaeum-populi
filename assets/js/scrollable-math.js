/**
 * Keyboard access to wide display equations.
 *
 * `custom.css` lets a `.katex-display` block scroll horizontally rather than
 * paint over the right-hand rail, which makes an overflowing equation a
 * scrollable region — and a scrollable region a keyboard user cannot reach
 * cannot be scrolled (WCAG 2.1.1; axe reports it as
 * `scrollable-region-focusable`, serious). The graded-state axe scan of a
 * graph-plot page found three such equations on the first page it visited.
 *
 * Only the blocks that actually overflow become focusable: a tab stop on
 * every equation of a math page would be hundreds of stops for nothing. The
 * check re-runs when the viewport resizes and once the KaTeX fonts arrive,
 * because both change an equation's width.
 */
const SELECTOR = '.content .katex-display';

function markScrollable() {
  for (const block of document.querySelectorAll(SELECTOR)) {
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
}
