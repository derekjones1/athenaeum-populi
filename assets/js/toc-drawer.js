/**
 * "On this page" drawer below xl.
 *
 * The rail that layouts/_partials/toc.html renders is an inline column only
 * from xl (80rem) up. Below that width the same element — one copy of the
 * heading list per page, never two — is an off-canvas panel on the right,
 * and this script is its controller. assets/css/custom.css ("On this page
 * drawer") does the drawing: the panel's position, the slide, the scrim.
 * This file does the state: the `ap-toc-open` class on <html>, the button's
 * aria-expanded, and the accessibility contract the theme's own left drawer
 * (themes/hextra/assets/js/core/menu.js) sets the pattern for —
 *
 *   - closed, the panel is aria-hidden and inert, so its off-screen links
 *     are neither read nor Tab-reachable;
 *   - open, the page behind the scrim (main, footer, the left sidebar) is
 *     inert, and Tab cycles through the button plus the panel's links;
 *   - Escape, the scrim, the button, and any link in the panel close it; a
 *     heading link hands focus to the heading, everything else returns it
 *     to the button;
 *   - the two drawers never overlap: opening this one closes the theme's
 *     hamburger drawer first, and the hamburger closes this one — from a
 *     document-level capture listener, which runs before the hamburger's
 *     own handler whatever order the two scripts loaded in, so the theme
 *     opens its drawer on a page with nothing of ours still inert.
 *
 * The inert bookkeeping restores only what this script set: below md the
 * closed left drawer is already inert (menu.js), and closing this panel
 * must not wake it. Widening past xl while open closes the panel, because
 * the CSS turns it back into the rail there and a lingering inert page
 * would be a dead page. A rail with no button (a page whose front matter
 * disables the toc but still prints the contact block) still gets the
 * closed-state contract, so no off-screen link is ever focusable.
 */

const DRAWER_QUERY = '(max-width: 79.99rem)';
const FOCUSABLE = 'a, button, input, [tabindex="0"]';

function initTocDrawer() {
  const drawer = document.querySelector('nav.hextra-toc');
  const button = document.querySelector('.ap-nav-toc');
  if (!drawer) {
    // A layout without the rail (nothing to open): the button must not
    // promise a panel that does not exist.
    if (button) button.hidden = true;
    return;
  }
  const scrim = document.querySelector('.ap-toc-scrim');
  const hamburger = document.querySelector('.hextra-hamburger-menu');
  const html = document.documentElement;
  const drawerQuery = window.matchMedia(DRAWER_QUERY);
  let madeInert = [];

  const isOpen = () => html.classList.contains('ap-toc-open');
  const hamburgerOpen = () => Boolean(hamburger?.querySelector('svg')?.classList.contains('open'));

  function syncHidden() {
    if (drawerQuery.matches && !isOpen()) {
      drawer.setAttribute('aria-hidden', 'true');
      drawer.inert = true;
    } else {
      drawer.removeAttribute('aria-hidden');
      drawer.inert = false;
    }
  }

  function open({ focusOnOpen = true } = {}) {
    if (isOpen() || !drawerQuery.matches) return;
    if (hamburgerOpen()) hamburger.click();
    html.classList.add('ap-toc-open');
    button?.setAttribute('aria-expanded', 'true');
    syncHidden();
    madeInert = [];
    for (const region of document.querySelectorAll('main, footer, aside.hextra-sidebar-container')) {
      if (!region.inert) {
        region.inert = true;
        madeInert.push(region);
      }
    }
    if (focusOnOpen) {
      drawer.querySelector(FOCUSABLE)?.focus();
    } else {
      // A tap keeps focus on this control: Safari does not focus a clicked
      // button, and closing the other drawer parks focus on the hamburger.
      button?.focus({ preventScroll: true });
    }
  }

  function close({ restoreFocus = true } = {}) {
    if (!isOpen()) return;
    html.classList.remove('ap-toc-open');
    button?.setAttribute('aria-expanded', 'false');
    for (const region of madeInert) region.inert = false;
    madeInert = [];
    syncHidden();
    if (restoreFocus) button?.focus({ preventScroll: true });
  }

  syncHidden();
  drawerQuery.addEventListener('change', () => {
    close({ restoreFocus: false });
    syncHidden();
  });

  if (!button) return;

  button.addEventListener('click', (e) => {
    if (isOpen()) {
      close();
    } else {
      // e.detail is 0 for keyboard activation; a tap should not move focus.
      open({ focusOnOpen: e.detail === 0 });
    }
  });
  scrim?.addEventListener('click', () => close());
  drawer.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link || !drawerQuery.matches) return;
    // A heading link moves focus to its target; any other link (the contact
    // mailto) leaves the page as it is, so focus goes back to the button.
    close({ restoreFocus: !(link.getAttribute('href') || '').startsWith('#') });
  });
  document.addEventListener('click', (e) => {
    if (e.target.closest('.hextra-hamburger-menu')) close({ restoreFocus: false });
  }, true);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) close();
  });

  // Bidirectional focus trap while the panel is open: the button (the close
  // control) plus the panel's visible focusables, both directions.
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !isOpen()) return;
    const focusables = [button, ...drawer.querySelectorAll(FOCUSABLE)]
      .filter((el) => el === button || el.offsetParent !== null);
    if (!focusables.length) return;
    e.preventDefault();
    const index = focusables.indexOf(document.activeElement);
    const step = e.shiftKey ? -1 : 1;
    const next = index === -1
      ? focusables[e.shiftKey ? focusables.length - 1 : 0]
      : focusables[(index + step + focusables.length) % focusables.length];
    next.focus();
  });
}

if (typeof document !== 'undefined') {
  initTocDrawer();
}
