/**
 * Compact navbar on scroll.
 *
 * A learner reading a section rarely needs the other five shelves, and a full
 * row of subject links pinned above every paragraph is noise. Once the page
 * has scrolled past the threshold the sticky bar drops to the logo, the
 * search box, and a "Scroll to top" button; at the top of the page the full
 * bar — shelves, Home, About, the site title — comes back. The container
 * keeps its 4rem in-flow height in both states (only the painted bar gets
 * shorter), so the article never jumps under the reader as the bar changes.
 *
 * The state is one class, `ap-nav-compact`, on <html>; what folds away, the
 * shorter centred bar, and the rails' matching sticky offsets are decided in
 * assets/css/custom.css ("Compact navbar on scroll") so the same hook works
 * at every width — below md the shelf links are already in the hamburger
 * drawer and the hamburger stays put. Hidden controls are `display: none`,
 * never opacity, so they leave the tab order with the layout. The markup
 * lives in layouts/_partials/navbar.html.
 */

const THRESHOLD_PX = 96;

export function initCompactNavbar(root = document) {
  const container = root.querySelector('.hextra-nav-container');
  if (!container) return;
  const home = container.querySelector('nav > a');
  const button = container.querySelector('.ap-nav-top');

  let scheduled = false;
  const update = () => {
    scheduled = false;
    document.documentElement.classList.toggle('ap-nav-compact', window.scrollY > THRESHOLD_PX);
  };
  const onScroll = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  update();

  button?.addEventListener('click', () => {
    // The button leaves the layout once the page reaches the top, which would
    // drop keyboard focus on <body>; hand it to the logo link, which stays.
    home?.focus({ preventScroll: true });
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scroll({ top: 0, left: 0, behavior: reduce ? 'auto' : 'smooth' });
  });
}

if (typeof document !== 'undefined') {
  initCompactNavbar();
}
