// Hamburger menu for mobile navigation

document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.hextra-hamburger-menu');
  const sidebarContainer = document.querySelector('.hextra-sidebar-container');
  const mobileQuery = window.matchMedia('(max-width: 767px)');

  function isMenuOpen() {
    return menu.querySelector('svg').classList.contains('open');
  }

  // On mobile, the sidebar is off-screen so hide it from assistive tech.
  // aria-hidden alone leaves the off-screen links keyboard-focusable (Tab
  // walks into the closed drawer at negative y), so sync `inert` with it —
  // inert removes the subtree from both focus order and the a11y tree.
  // The complement holds while the drawer is OPEN: the page behind the
  // opaque overlay must not take focus either, or Tab past the last sidebar
  // control lands on invisible content. The navbar stays active so the
  // hamburger that closes the drawer remains reachable.
  function syncAriaHidden() {
    if (mobileQuery.matches) {
      const closed = !isMenuOpen();
      sidebarContainer.setAttribute('aria-hidden', closed ? 'true' : 'false');
      sidebarContainer.inert = closed;
      for (const region of document.querySelectorAll('main, footer')) {
        region.inert = !closed;
      }
    } else {
      sidebarContainer.removeAttribute('aria-hidden');
      sidebarContainer.inert = false;
      for (const region of document.querySelectorAll('main, footer')) {
        region.inert = false;
      }
    }
  }

  // Set initial state
  syncAriaHidden();
  mobileQuery.addEventListener('change', syncAriaHidden);

  function toggleMenu(options = {}) {
    const { focusOnOpen = true } = options;

    // Toggle the hamburger menu
    menu.querySelector('svg').classList.toggle('open');

    // When the menu is open, we want to show the navigation sidebar
    sidebarContainer.classList.toggle('hx:max-md:[transform:translate3d(0,-100%,0)]');
    sidebarContainer.classList.toggle('hx:max-md:[transform:translate3d(0,0,0)]');

    // When the menu is open, we want to prevent the body from scrolling
    document.body.classList.toggle('hx:overflow-hidden');
    document.body.classList.toggle('hx:md:overflow-auto');

    // Sync aria-expanded and aria-hidden
    const isOpen = isMenuOpen();
    menu.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    syncAriaHidden();

    // Move focus into sidebar when opening, restore when closing
    if (isOpen) {
      if (focusOnOpen) {
        const firstFocusable = sidebarContainer.querySelector('a, button, input, [tabindex="0"]');
        if (firstFocusable) firstFocusable.focus();
      }
    } else {
      menu.focus();
    }
  }

  menu.addEventListener('click', (e) => {
    e.preventDefault();
    // Pointer-initiated clicks on mobile should not force focus into the search input,
    // which opens the software keyboard immediately.
    toggleMenu({ focusOnOpen: e.detail === 0 });
  });

  // Close menu on Escape key (mobile only)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileQuery.matches && isMenuOpen()) {
      toggleMenu();
    }
  });

  // Bidirectional focus trap while the drawer covers the page. main/footer
  // are inert (syncAriaHidden), but other navbar controls — skip link, logo,
  // search — would still leak into the tab order behind the overlay. Cycle
  // manually through the hamburger (the close control) plus the drawer's
  // visible focusables, both directions.
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !mobileQuery.matches || !isMenuOpen()) return;
    const focusables = [menu, ...sidebarContainer.querySelectorAll('a, button, input, [tabindex="0"]')]
      .filter((el) => el === menu || el.offsetParent !== null);
    if (!focusables.length) return;
    e.preventDefault();
    const index = focusables.indexOf(document.activeElement);
    const step = e.shiftKey ? -1 : 1;
    const next = index === -1
      ? focusables[e.shiftKey ? focusables.length - 1 : 0]
      : focusables[(index + step + focusables.length) % focusables.length];
    next.focus();
  });

  // Select all anchor tags in the sidebar container
  const sidebarLinks = sidebarContainer.querySelectorAll('a');

  // Add click event listener to each anchor tag
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Check if the href attribute contains a hash symbol (links to a heading)
      if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
        // Only dismiss overlay on mobile view
        if (window.innerWidth < 768) {
          toggleMenu();
        }
      }
    });
  });
});
