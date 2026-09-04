import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { assertProductionBuild } from './helpers.mjs';

const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const BLOCKING_IMPACTS = new Set(['serious', 'critical']);

const REPRESENTATIVE_PAGES = [
  {
    name: 'homepage',
    path: '/',
  },
  {
    name: 'standard textbook section',
    path:
      '/math/prealgebra/08-solving-linear-equations/' +
      '02-solve-equations-using-the-division-and-multiplication-properties-of-equality/',
  },
  {
    name: 'fill-in and multiple-choice exercises',
    path:
      '/math/elementary-algebra/09-roots-and-radicals/' +
      '01-simplify-and-use-square-roots/',
  },
  {
    name: 'interactive graph exercise',
    path:
      '/math/intermediate-algebra/09-quadratic-equations-and-functions/' +
      '08-solve-quadratic-inequalities/',
  },
  {
    name: 'knowledge check',
    path: '/math/intermediate-algebra/knowledge-check-01-06/',
  },
  {
    name: 'text-in and self-check exercises with mediafigures',
    path: '/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology/',
  },
  {
    name: 'second biology section (text-in, self-check, mediafigures)',
    path: '/life-health-sciences/biology/01-the-study-of-life/02-themes-and-concepts-of-biology/',
  },
  {
    name: 'sort-bins exercise',
    path: '/life-health-sciences/biology/10-cell-reproduction/05-prokaryotic-cell-division/',
  },
  {
    name: '404 page',
    path: '/404.html',
    title: 'Page not found – Athenaeum Populi',
    // A standalone document: no site chrome, no scripts, and therefore no
    // `html.dark` class. It follows `prefers-color-scheme` in a media query
    // instead, which the project's colorScheme setting exercises directly.
    standalone: true,
  },
];

function currentTheme(testInfo) {
  return testInfo.project.use.colorScheme === 'dark' ? 'dark' : 'light';
}

async function waitForPageReady(page) {
  await expect(page.locator('main#content')).toBeVisible();
  await page.evaluate(() => document.fonts.ready);

  await page.waitForFunction(() => {
    const fillIns = [...document.querySelectorAll('fill-in')];
    const choices = [...document.querySelectorAll('multiple-choice')];
    const graphs = [...document.querySelectorAll('graph-plot')];
    const textIns = [...document.querySelectorAll('text-in')];
    const selfChecks = [...document.querySelectorAll('self-check')];
    const sortBins = [...document.querySelectorAll('sort-bins')];

    const fillInsReady = fillIns.every((exercise) => {
      const field = exercise.querySelector('math-field');
      const check = exercise.querySelector('.ap-fillin-check');
      return (
        field?.shadowRoot?.querySelector('[part~="placeholder"]') &&
        field.shadowRoot
          ?.querySelector('[part~="keyboard-sink"]')
          ?.getAttribute('aria-label') &&
        check &&
        !check.disabled
      );
    });

    const choicesReady = choices.every(
      (exercise) =>
        customElements.get('multiple-choice') &&
        exercise.querySelectorAll('.ap-mc-option').length > 0 &&
        // Wait for the accessible names to SETTLE ("ready" = spoken math
        // substituted; "failed" = engine import broke, interim labels
        // remain). Settling, not success, is the readiness condition — the
        // label tests separately assert the page actually reached "ready",
        // so an engine failure cannot hide behind a hung wait OR a green
        // axe run.
        ['ready', 'failed'].includes(exercise.dataset.speech),
    );

    const graphsReady = graphs.every((exercise) => {
      const addPoint = [...exercise.querySelectorAll('button')].find(
        (button) => button.textContent.trim() === 'Add point',
      );
      return (
        addPoint &&
        !addPoint.disabled &&
        exercise.querySelector('.ap-graphplot-svg')?.childElementCount > 0
      );
    });

    const textInsReady = textIns.every((exercise) => {
      const check = exercise.querySelector('.ap-textin-check');
      return customElements.get('text-in') && check && !check.disabled;
    });

    const selfChecksReady = selfChecks.every(
      (exercise) =>
        customElements.get('self-check') &&
        [...exercise.querySelectorAll('.ap-selfcheck-mark')].every(
          (mark) => !mark.disabled,
        ),
    );


    const sortBinsReady = sortBins.every((exercise) => {
      const check = exercise.querySelector('.ap-sortbins-check');
      return customElements.get('sort-bins') && check && !check.disabled;
    });

    return fillInsReady && choicesReady && graphsReady && textInsReady && selfChecksReady && sortBinsReady;
  });
}

function formatViolations(violations) {
  return violations
    .map((violation) => {
      const nodes = violation.nodes
        .map((node) => {
          const target = node.target.join(' ');
          const summary = node.failureSummary || node.html;
          return `    ${target}\n      ${summary}`;
        })
        .join('\n');

      return (
        `${violation.id} (${violation.impact}) — ${violation.help}\n` +
        `  ${violation.helpUrl}\n${nodes}`
      );
    })
    .join('\n\n');
}

function parseCssRgb(value) {
  const channels = value.match(/[\d.]+/g)?.map(Number);
  if (!channels || channels.length < 3) {
    throw new Error(`Could not parse computed color: ${value}`);
  }
  return channels.slice(0, 3);
}

function relativeLuminance(rgb) {
  const [red, green, blue] = rgb.map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.04045
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrastRatio(first, second) {
  const firstLuminance = relativeLuminance(first);
  const secondLuminance = relativeLuminance(second);
  const lighter = Math.max(firstLuminance, secondLuminance);
  const darker = Math.min(firstLuminance, secondLuminance);
  return (lighter + 0.05) / (darker + 0.05);
}

test.beforeEach(async ({ page }, testInfo) => {
  const theme = currentTheme(testInfo);
  await page.addInitScript((selectedTheme) => {
    localStorage.setItem('color-theme', selectedTheme);
  }, theme);
});

for (const representativePage of REPRESENTATIVE_PAGES) {
  test(`${representativePage.name} has no serious or critical axe violations`, async ({
    page,
  }, testInfo) => {
    const response = await page.goto(representativePage.path, {
      waitUntil: 'domcontentloaded',
    });
    expect(response, `No response for ${representativePage.path}`).not.toBeNull();
    expect(
      response.status(),
      `Unexpected response for ${representativePage.path}`,
    ).toBeLessThan(400);

    await assertProductionBuild(page, representativePage.path);
    await waitForPageReady(page);

    // Proving the dark run is ACTUALLY dark used to be skipped wherever a
    // title was declared — which was only the 404 page, so that page's dark
    // scan could have been silently measuring the light theme. A title is now
    // checked in addition, and every page asserts the theme it applied.
    if (representativePage.title) {
      await expect(page).toHaveTitle(representativePage.title);
    }
    const theme = currentTheme(testInfo);
    if (!representativePage.standalone) {
      await expect(page.locator('html')).toHaveClass(
        new RegExp(`(?:^|\\s)${theme}(?:\\s|$)`),
      );
    }
    // The rendered result, which is what a reader gets under either mechanism:
    // a dark page is dark and a light page is light.
    const backgroundLuminance = relativeLuminance(
      parseCssRgb(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)),
    );
    expect(
      backgroundLuminance < 0.5,
      `${representativePage.path} did not apply the ${theme} theme ` +
        `(body background luminance ${backgroundLuminance.toFixed(3)})`,
    ).toBe(theme === 'dark');

    const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
    const blockingViolations = results.violations.filter((violation) =>
      BLOCKING_IMPACTS.has(violation.impact),
    );

    expect(
      blockingViolations.length,
      `Blocking axe violations on ${representativePage.path} ` +
        `(${currentTheme(testInfo)} theme):\n\n` +
        formatViolations(blockingViolations),
    ).toBe(0);
  });
}

test('MathLive placeholder meets AA contrast and remains muted', async ({
  page,
}, testInfo) => {
  const theme = currentTheme(testInfo);
  await page.goto(
    '/math/elementary-algebra/09-roots-and-radicals/' +
      '01-simplify-and-use-square-roots/',
    { waitUntil: 'domcontentloaded' },
  );
  await assertProductionBuild(page, page.url());
  await waitForPageReady(page);

  const measurements = await page.locator('math-field').first().evaluate((field) => {
    const placeholder = field.shadowRoot?.querySelector('[part~="placeholder"]');
    if (!placeholder) {
      throw new Error('MathLive placeholder shadow part was not rendered.');
    }

    return {
      background: getComputedStyle(field).backgroundColor,
      enteredText: getComputedStyle(field).color,
      fieldLabel: field.getAttribute('aria-label'),
      keyboardSinkLabel: field.shadowRoot
        ?.querySelector('[part~="keyboard-sink"]')
        ?.getAttribute('aria-label'),
      placeholder: getComputedStyle(placeholder).color,
    };
  });

  const placeholderContrast = contrastRatio(
    parseCssRgb(measurements.placeholder),
    parseCssRgb(measurements.background),
  );
  const enteredTextContrast = contrastRatio(
    parseCssRgb(measurements.enteredText),
    parseCssRgb(measurements.background),
  );
  const expectedPlaceholder =
    theme === 'dark' ? 'rgb(176, 175, 166)' : 'rgb(111, 110, 105)';

  expect(measurements.keyboardSinkLabel).toBe(measurements.fieldLabel);
  expect(measurements.placeholder).toBe(expectedPlaceholder);
  expect(
    placeholderContrast,
    `${theme} placeholder contrast: ${placeholderContrast.toFixed(4)}:1 ` +
      `(${measurements.placeholder} on ${measurements.background})`,
  ).toBeGreaterThanOrEqual(4.5);
  expect(
    enteredTextContrast,
    `${theme} entered text should remain more prominent than its placeholder`,
  ).toBeGreaterThan(placeholderContrast);
  expect(measurements.enteredText).not.toBe(measurements.placeholder);
});

test('fill-in accessible names speak math instead of exposing raw TeX', async ({
  page,
}) => {
  // Thousands of prompts contain TeX control sequences (`\tfrac{2}{5}`,
  // `\sqrt{m}`). The old label stripped only the `$` delimiters, so the
  // accessibility tree carried raw TeX; the component now serializes each
  // math segment to MathLive's spoken form before the field becomes ready.
  const path =
    '/math/elementary-algebra/09-roots-and-radicals/' +
    '01-simplify-and-use-square-roots/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  await waitForPageReady(page);

  const labels = await page.locator('math-field').evaluateAll((fields) =>
    fields.map((field) => ({
      host: field.getAttribute('aria-label'),
      sink: field.shadowRoot
        ?.querySelector('[part~="keyboard-sink"]')
        ?.getAttribute('aria-label'),
    })),
  );
  expect(labels.length).toBeGreaterThan(0);
  for (const { host, sink } of labels) {
    expect(host, 'every math field must carry an accessible name').toBeTruthy();
    expect(sink, 'the keyboard sink must share the host name').toBe(host);
    // No TeX control sequences, grouping braces, or math delimiters may
    // reach the accessibility tree.
    expect(host).not.toMatch(/\\[a-zA-Z]+|[{}$]/);
  }
  // Spot-check the serialization is spoken math, not mashed symbols.
  expect(
    labels.some(({ host }) => /square root/i.test(host)),
    'a square-roots lesson should speak at least one "square root"',
  ).toBe(true);
});

test('a focused fill-in keeps its accessible name, and the shadow controls have one', async ({
  page,
}) => {
  // MathLive BLANKS the keyboard sink's aria-label as it takes focus — the
  // same reaction it has to `readonly`. Labelling only at mount left the
  // element that actually receives the caret unnamed from the first CLICK
  // onward (programmatic .focus() does not reproduce it), and it never
  // self-healed on blur, so a screen reader announced an unnamed edit box for
  // the rest of the session on the site's primary exercise type. Its two
  // shadow icon buttons ship with no name of their own at all.
  const path =
    '/math/elementary-algebra/09-roots-and-radicals/' +
    '01-simplify-and-use-square-roots/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  await waitForPageReady(page);

  const field = page.locator('math-field').first();
  const names = () =>
    field.evaluate((el) => ({
      host: el.getAttribute('aria-label'),
      sink: el.shadowRoot
        ?.querySelector('[part~="keyboard-sink"]')
        ?.getAttribute('aria-label'),
      keyboardToggle: el.shadowRoot
        ?.querySelector('[part~="virtual-keyboard-toggle"]')
        ?.getAttribute('aria-label'),
      menuToggle: el.shadowRoot
        ?.querySelector('[part~="menu-toggle"]')
        ?.getAttribute('aria-label'),
    }));

  const before = await names();
  expect(before.sink, 'the sink is named before focus').toBe(before.host);

  // A real pointer focus, which is what triggers MathLive's blanking.
  await field.click();
  await expect
    .poll(async () => (await names()).sink, {
      message: 'the sink must be re-named after focus, not left blank',
    })
    .toBe(before.host);

  await page.keyboard.type('15');
  const typed = await names();
  expect(typed.sink, 'the name survives typing').toBe(before.host);
  // Visible role="button" controls need a name; MathLive leaves them bare.
  expect(typed.keyboardToggle, 'virtual-keyboard toggle is named').toBeTruthy();
  expect(typed.menuToggle, 'menu toggle is named').toBeTruthy();
});

test('multiple-choice option names speak math instead of exposing raw TeX', async ({
  page,
}) => {
  // Interval-notation options (`$(-\infty,-3] \cup (6,\infty)$`) carried the
  // rawest labels in the corpus; the component now swaps in MathLive's spoken
  // serialization before reporting itself ready.
  const path = '/math/intermediate-algebra/knowledge-check-07-12/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  await waitForPageReady(page);

  // Every widget must have actually reached "ready" — "failed" (engine
  // import broken, raw-TeX interim labels left in place) must fail here
  // rather than hide behind the settled-state wait.
  const speechStates = await page
    .locator('multiple-choice')
    .evaluateAll((widgets) => widgets.map((widget) => widget.dataset.speech));
  expect(speechStates.every((state) => state === 'ready')).toBe(true);

  const labels = await page.locator('.ap-mc-option[data-value]').evaluateAll(
    (buttons) =>
      buttons.map((button) => ({
        value: button.dataset.value,
        label: button.getAttribute('aria-label'),
      })),
  );
  expect(labels.length).toBeGreaterThan(0);
  for (const { label } of labels) {
    expect(label, 'every text-mode option must carry an accessible name').toBeTruthy();
    expect(label).toMatch(/^Answer choice: /);
    // No TeX control sequences, grouping braces, or math delimiters may
    // reach the accessibility tree.
    expect(label).not.toMatch(/\\[a-zA-Z]+|[{}$]/);
  }
  // Spot-check spoken math on an option that is TeX in the source.
  const spokenMath = labels.filter(
    ({ value, label }) => /\\[a-zA-Z]/.test(value) && /union|infinity|fraction|root/i.test(label),
  );
  expect(
    spokenMath.length,
    'TeX-bearing options should speak as math (union, infinity, …)',
  ).toBeGreaterThan(0);

  // Option groups are named by their question, not a generic "Answer
  // choices" repeated 78 times — and the group names carry no raw TeX.
  const groupLabels = await page
    .locator('.ap-mc-options')
    .evaluateAll((groups) => groups.map((group) => group.getAttribute('aria-label')));
  expect(groupLabels.length).toBeGreaterThan(0);
  for (const label of groupLabels) {
    expect(label).toMatch(/^Answer choices for: .+/);
    expect(label).not.toMatch(/\\[a-zA-Z]+|[{}$]/);
  }
  expect(new Set(groupLabels).size, 'group names must be distinguishable').toBeGreaterThan(1);
});

test('the open mobile drawer contains keyboard focus', async ({ page }) => {
  // The closed drawer is inert (previous fix). The complement: while the
  // drawer covers the page, the content BEHIND the opaque overlay must not
  // take focus — Tab past the last sidebar control otherwise lands on an
  // invisible link. main/footer are inert while open; the navbar stays
  // active so the hamburger can close the drawer.
  await page.setViewportSize({ width: 390, height: 844 });
  const path = '/math/prealgebra/05-decimals/06-ratios-and-rate/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  await expect(page.locator('main#content')).toBeVisible();

  const regionState = () => page.evaluate(() => ({
    main: document.querySelector('main').inert,
    footer: document.querySelector('footer').inert,
    drawer: document.querySelector('.hextra-sidebar-container').inert,
  }));
  expect(await regionState()).toEqual({ main: false, footer: false, drawer: true });

  await page.locator('.hextra-hamburger-menu').click();
  expect(await regionState()).toEqual({ main: true, footer: true, drawer: false });

  // Full bidirectional containment: from the LAST drawer control, forward
  // tabs must cycle only through the drawer and the hamburger (the close
  // control) — never the skip link, logo, navbar search, or covered content.
  const inTrap = () => page.evaluate(() => {
    const active = document.activeElement;
    return document.querySelector('.hextra-sidebar-container').contains(active)
      || active === document.querySelector('.hextra-hamburger-menu');
  });
  await page.evaluate(() => {
    const links = document.querySelectorAll('.hextra-sidebar-container a');
    links[links.length - 1].focus();
  });
  for (let i = 0; i < 8; i += 1) {
    await page.keyboard.press('Tab');
    expect(await inTrap(), `forward Tab ${i + 1} escaped the drawer trap`).toBe(true);
  }
  // And in reverse from the FIRST drawer control, through the hamburger wrap.
  await page.evaluate(() => {
    document.querySelector('.hextra-sidebar-container a, .hextra-sidebar-container button, .hextra-sidebar-container input').focus();
  });
  for (let i = 0; i < 8; i += 1) {
    await page.keyboard.press('Shift+Tab');
    expect(await inTrap(), `Shift+Tab ${i + 1} escaped the drawer trap`).toBe(true);
  }

  await page.locator('.hextra-hamburger-menu').click();
  expect(await regionState()).toEqual({ main: false, footer: false, drawer: true });
});

test('the open "On this page" drawer contains keyboard focus and has no blocking axe violations', async ({
  page,
}, testInfo) => {
  // The right-hand counterpart of the test above. Below xl the "On this
  // page" rail is an off-canvas panel (assets/js/toc-drawer.js): closed it
  // is inert, so its off-screen links never take focus; open, the page
  // behind its scrim — main, footer, and the (already inert) phone drawer —
  // is inert, and Tab cycles through the navbar button that closes it plus
  // the panel's own links. The open panel is also a state no full-page scan
  // reaches, so axe runs on it here, in both themes.
  await page.setViewportSize({ width: 390, height: 844 });
  const path = '/math/prealgebra/05-decimals/06-ratios-and-rate/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  await waitForPageReady(page);

  const regionState = () => page.evaluate(() => ({
    main: document.querySelector('main').inert,
    footer: document.querySelector('footer').inert,
    sidebar: document.querySelector('.hextra-sidebar-container').inert,
    panel: document.querySelector('nav.hextra-toc').inert,
  }));
  expect(await regionState()).toEqual({ main: false, footer: false, sidebar: true, panel: true });

  // Opened from the keyboard, focus lands inside the panel.
  const button = page.locator('.ap-nav-toc');
  await button.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('html')).toHaveClass(/ap-toc-open/);
  expect(await regionState()).toEqual({ main: true, footer: true, sidebar: true, panel: false });
  const inTrap = () => page.evaluate(() => {
    const active = document.activeElement;
    return document.querySelector('nav.hextra-toc').contains(active)
      || active === document.querySelector('.ap-nav-toc');
  });
  expect(await page.evaluate(() => document.querySelector('nav.hextra-toc').contains(document.activeElement)),
    'keyboard open must move focus into the panel').toBe(true);
  for (let i = 0; i < 12; i += 1) {
    await page.keyboard.press('Tab');
    expect(await inTrap(), `forward Tab ${i + 1} escaped the panel trap`).toBe(true);
  }
  for (let i = 0; i < 12; i += 1) {
    await page.keyboard.press('Shift+Tab');
    expect(await inTrap(), `Shift+Tab ${i + 1} escaped the panel trap`).toBe(true);
  }

  const results = await new AxeBuilder({ page })
    .include('nav.hextra-toc')
    .include('.hextra-nav-container')
    .withTags(WCAG_TAGS)
    .analyze();
  const blocking = results.violations.filter((violation) =>
    BLOCKING_IMPACTS.has(violation.impact),
  );
  expect(
    blocking.length,
    `Blocking axe violations in the open "On this page" drawer ` +
      `(${currentTheme(testInfo)} theme):\n\n${formatViolations(blocking)}`,
  ).toBe(0);

  await page.keyboard.press('Escape');
  await expect(page.locator('html')).not.toHaveClass(/ap-toc-open/);
  expect(await regionState()).toEqual({ main: false, footer: false, sidebar: true, panel: true });
  await expect(button).toBeFocused();
});

test('a blocked speech engine degrades labels instead of leaving raw TeX', async ({
  page,
}) => {
  // When /js/fillin-engine.js cannot load, grading still works but spoken
  // labels cannot be computed. The failure path must not leave enabled
  // controls named with raw TeX: math options drop their aria-label so the
  // name computes from the rendered MathML content, and the group falls
  // back to its generic name. data-speech="failed" records the state.
  await page.route('**/js/fillin-engine.*', (route) => route.abort());
  const path = '/math/intermediate-algebra/knowledge-check-07-12/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  await page.waitForSelector('multiple-choice[data-speech="failed"]');

  const report = await page.evaluate(() => {
    const widgets = [...document.querySelectorAll('multiple-choice')];
    const options = [...document.querySelectorAll('.ap-mc-option[data-value]')];
    const groups = [...document.querySelectorAll('.ap-mc-options')];
    return {
      states: widgets.map((widget) => widget.dataset.speech),
      texLabels: options
        .map((button) => button.getAttribute('aria-label'))
        .filter((label) => label && /\\[a-zA-Z]/.test(label)).length,
      texGroups: groups
        .map((group) => group.getAttribute('aria-label'))
        .filter((label) => label && /\\[a-zA-Z]/.test(label)).length,
      unsettled: widgets.filter((widget) => !['ready', 'failed'].includes(widget.dataset.speech)).length,
    };
  });
  expect(report.states).toContain('failed');
  expect(report.unsettled).toBe(0);
  expect(report.texLabels, 'no enabled control may carry a raw-TeX name').toBe(0);
  expect(report.texGroups, 'no group may carry a raw-TeX name').toBe(0);
});

test('a slow speech engine leaves options disabled until their names settle', async ({
  page,
}) => {
  // The complement of the test above: not a BROKEN engine but a slow one, the
  // case every other test here waits past. The options are server-rendered
  // `disabled`; the component used to enable them on upgrade, while the
  // spoken names were still being serialized by the ~1.9 MiB engine — leaving
  // clickable controls in a group that announced itself as `Answer choices
  // for: Which is true of \sqrt{-196}?`. Holding the engine request open is
  // the only way to observe that window; every wait in this file settles it
  // first by construction.
  let release;
  const held = new Promise((resolve) => {
    release = resolve;
  });
  await page.route('**/js/fillin-engine.*', async (route) => {
    await held;
    await route.continue();
  });

  const path = '/math/intermediate-algebra/knowledge-check-07-12/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  // Upgraded — options exist and their click handlers are wired — while the
  // engine response is still held. Read the state immediately: the gate is
  // bounded (LABEL_GATE_MS, 10 s), so this asserts the wait, not the bound.
  await page.waitForFunction(
    () =>
      Boolean(customElements.get('multiple-choice')) &&
      document.querySelectorAll('.ap-mc-option').length > 0,
  );
  const gated = await page.evaluate(() =>
    [...document.querySelectorAll('multiple-choice')]
      .filter((widget) => !['ready', 'failed'].includes(widget.dataset.speech))
      .map((widget) => {
        const options = [...widget.querySelectorAll('.ap-mc-option')];
        const math = options.filter((button) => (button.dataset.value || '').includes('$'));
        return {
          mathOptions: math.length,
          mathDisabled: math.every((button) => button.disabled),
          allDisabled: options.every((button) => button.disabled),
        };
      }),
  );
  // Without this the test would pass on a page that settled everything before
  // the first read — a green run proving nothing.
  expect(
    gated.length,
    'holding the engine must leave at least one math widget unsettled',
  ).toBeGreaterThan(0);
  expect(
    gated.every((widget) => widget.mathDisabled),
    'an option whose accessible name has not settled must stay disabled',
  ).toBe(true);

  // The gate is per-TARGET, and this is the other half of that. An option
  // that carries no math has a final server-rendered name and nothing to wait
  // for — graph-mode options are rendered graphs, so `mathOptions` is 0 and
  // only the QUESTION is serialized. Gating those buttons on the question's
  // serialization left a whole page of graph questions inert for the entire
  // LABEL_GATE_MS window whenever the engine fetch was slow or offline, which
  // is exactly the condition this test holds open.
  const graphOnly = gated.filter((widget) => widget.mathOptions === 0);
  expect(
    graphOnly.length,
    'the page must carry an unsettled math-question widget whose options are graphs',
  ).toBeGreaterThan(0);
  expect(
    graphOnly.every((widget) => !widget.allDisabled),
    'options with nothing to serialize must not wait on the question label',
  ).toBe(true);

  release();
  await waitForPageReady(page);
  const disabledAfter = await page
    .locator('.ap-mc-option')
    .evaluateAll((buttons) => buttons.filter((button) => button.disabled).length);
  expect(disabledAfter, 'every option must enable once its names settle').toBe(0);
});

test('the longest lesson does not overflow horizontally at 390px', async ({
  page,
}) => {
  // The hidden KaTeX MathML layer is an inline box, so its overflow:hidden
  // did not apply and native MathML layout widened the page (433px scroll
  // width at a 390px viewport). Guard the worst-case lesson.
  await page.setViewportSize({ width: 390, height: 844 });
  const path =
    '/math/intermediate-algebra/05-polynomials-and-polynomial-functions/' +
    '02-properties-of-exponents-and-scientific-notation/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  await waitForPageReady(page);

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow, 'horizontal scroll on mobile viewport').toBe(0);
});

test('sidebar disclosure controls have at least 24 by 24 pixel targets', async ({
  page,
}) => {
  await page.goto('/math/intermediate-algebra/01-foundations/', {
    waitUntil: 'domcontentloaded',
  });
  await assertProductionBuild(page, '/math/intermediate-algebra/01-foundations/');
  await waitForPageReady(page);

  const controls = page.locator('.hextra-sidebar-collapsible-button:visible');
  await expect(controls.first()).toBeVisible();

  const sizes = await controls.evaluateAll((buttons) =>
    buttons.map((button) => {
      const bounds = button.getBoundingClientRect();
      return {
        label: button.getAttribute('aria-label'),
        width: bounds.width,
        height: bounds.height,
      };
    }),
  );

  for (const size of sizes) {
    expect(size.width, `${size.label} width`).toBeGreaterThanOrEqual(24);
    expect(size.height, `${size.label} height`).toBeGreaterThanOrEqual(24);
  }
});

/**
 * Two states nothing scanned before: the search combobox expanded with real
 * results, and an exercise AFTER it has been graded.
 *
 * Every scan above measures a page as delivered. The states a learner actually
 * spends time in are the ones the components build at runtime — an expanded
 * listbox, a disabled Check button, a live-region verdict — and none of them
 * existed when axe ran.
 */
test('the expanded search combobox has no serious or critical axe violations', async ({
  page,
}, testInfo) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, '/');
  await waitForPageReady(page);

  const input = page.locator('.hextra-search-input').first();
  await input.click();
  await input.fill('fraction');

  // Pagefind's index and its wasm load on the first keystroke, so the listbox
  // is briefly empty and then briefly shows "no results". Waiting for a real
  // result LINK is what distinguishes the populated state this test exists to
  // scan from the two states that would pass it for the wrong reason.
  const results = page.locator('.hextra-search-results').first();
  await expect(input).toHaveAttribute('aria-expanded', 'true');
  await expect(results.locator('li a').first()).toBeVisible({ timeout: 30_000 });

  const found = await results.locator('li a').count();
  expect(found, 'the search index must return results for a common word').toBeGreaterThan(0);

  const results2 = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
  const blocking = results2.violations.filter((violation) =>
    BLOCKING_IMPACTS.has(violation.impact),
  );
  expect(
    blocking.length,
    `Blocking axe violations in the expanded search combobox ` +
      `(${currentTheme(testInfo)} theme):\n\n${formatViolations(blocking)}`,
  ).toBe(0);
});

test('the compact navbar has no serious or critical axe violations', async ({
  page,
}, testInfo) => {
  // The scrolled navbar is a state no full-page scan reaches: every scan above
  // runs from the top of the document, where the bar is Hextra's own. Scroll
  // into the article, wait for assets/js/navbar-compact.js to fold the bar,
  // and scan only the bar — content straddling its bottom edge would
  // otherwise trip the scroll-dependent target-size rule (see the graded
  // fill-in test below) for reasons that have nothing to do with the navbar.
  const path = '/math/prealgebra/03-integers/03-subtract-integers/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  await waitForPageReady(page);

  await page.evaluate(() => window.scrollTo(0, 900));
  await expect(page.locator('html')).toHaveClass(/ap-nav-compact/);
  await expect(page.locator('.ap-nav-top')).toBeVisible();

  const results = await new AxeBuilder({ page })
    .include('.hextra-nav-container')
    .withTags(WCAG_TAGS)
    .analyze();
  const blockingViolations = results.violations.filter((violation) =>
    BLOCKING_IMPACTS.has(violation.impact),
  );
  expect(
    blockingViolations.length,
    `Blocking axe violations in the compact navbar (${currentTheme(testInfo)} theme):\n\n` +
      formatViolations(blockingViolations),
  ).toBe(0);
});

test('a graded fill-in has no serious or critical axe violations', async ({
  page,
}, testInfo) => {
  const path =
    '/math/prealgebra/09-math-models-and-geometry/' +
    '07-solve-a-formula-for-a-specific-variable/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  await waitForPageReady(page);

  const card = page.locator('fill-in[data-answer="r=d/t"]');
  await expect(card).toHaveCount(1);
  const field = card.locator('math-field');
  await field.scrollIntoViewIfNeeded();
  await field.click();
  await expect
    .poll(async () => field.evaluate((el) => document.activeElement === el), { timeout: 10_000 })
    .toBe(true);
  await page.keyboard.type('d/t', { delay: 20 });
  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 10_000 })
    .toBe('correct');

  // On success the component makes the field readonly, disables the focused
  // Check button, and writes into a live region — the exact combination that
  // can strand focus on <body> or leave a control with no accessible name.
  expect(await card.evaluate((el) => document.activeElement !== document.body)).toBe(true);

  // Scan from the top of the document. axe's target-size rule judges each
  // control at the CURRENT scroll position, and after scrolling a card into
  // view whatever sits under the sticky navbar's bottom edge is "partially
  // obscured" — a scan that passes or fails on which element happens to
  // straddle that edge, which differs between macOS and the Linux runner's
  // font metrics. Focus is asserted above, before the scroll, so retention
  // is still what was measured.
  await page.evaluate(() => window.scrollTo(0, 0));

  const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
  const blocking = results.violations.filter((violation) =>
    BLOCKING_IMPACTS.has(violation.impact),
  );
  expect(
    blocking.length,
    `Blocking axe violations on a graded fill-in (${currentTheme(testInfo)} theme):\n\n` +
      formatViolations(blocking),
  ).toBe(0);
});

test('a text-in input is named by its question and stays clean after a correct answer', async ({
  page,
}, testInfo) => {
  // <text-in> has no speech serializer (its shortcode rejects `$` math
  // entirely), so unlike <fill-in> there is no TeX to strip — but the same
  // failure mode applies: a description of the box ("Your answer") is not a
  // name, and grading must not strand focus on <body>.
  const path =
    '/life-health-sciences/biology/01-the-study-of-life/' +
    '02-themes-and-concepts-of-biology/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  await waitForPageReady(page);

  const card = page.locator('text-in[data-answer="homeostasis"]');
  await expect(card).toHaveCount(1);
  const question = await card.getAttribute('data-question');
  const field = card.locator('.ap-textin-field');
  await expect(field).toHaveAttribute('aria-label', question);
  expect(question).not.toMatch(/\\[a-zA-Z]+|[{}$]/);

  await field.click();
  await field.fill('The Homoeostasis');
  await card.getByRole('button', { name: /check/i }).click();
  await expect
    .poll(async () => card.evaluate((el) => el.status), { timeout: 10_000 })
    .toBe('correct');
  expect(await card.evaluate((el) => document.activeElement !== document.body)).toBe(true);

  // Scan from the top of the document. axe's target-size rule judges each
  // control at the CURRENT scroll position, and after scrolling a card into
  // view whatever sits under the sticky navbar's bottom edge is "partially
  // obscured" — a scan that passes or fails on which element happens to
  // straddle that edge, which differs between macOS and the Linux runner's
  // font metrics. Focus is asserted above, before the scroll, so retention
  // is still what was measured.
  await page.evaluate(() => window.scrollTo(0, 0));

  const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
  const blocking = results.violations.filter((violation) =>
    BLOCKING_IMPACTS.has(violation.impact),
  );
  expect(
    blocking.length,
    `Blocking axe violations on a graded text-in (${currentTheme(testInfo)} theme):\n\n` +
      formatViolations(blocking),
  ).toBe(0);
});

/**
 * The graded states of the four components the two scans above do not
 * reach. Each shares almost no code with fill-in or text-in — a clean graded
 * fill-in says nothing about a graded sort-bins — and the self-check's
 * revealed model answer and rubric (663 rubrics, thousands of checkbox/label
 * pairs across the corpus) had never met axe at all: the <details> is closed
 * on load, so every earlier scan skipped its subtree.
 */
async function expectNoBlockingViolations(page, label, testInfo) {
  // Scan from the top of the document: axe's target-size rule judges each
  // control at the CURRENT scroll position (see the graded fill-in test).
  await page.evaluate(() => window.scrollTo(0, 0));
  const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
  const blocking = results.violations.filter((violation) => BLOCKING_IMPACTS.has(violation.impact));
  expect(
    blocking.length,
    `Blocking axe violations on ${label} (${currentTheme(testInfo)} theme):\n\n${formatViolations(blocking)}`,
  ).toBe(0);
}

test('a graded multiple-choice has no serious or critical axe violations', async ({
  page,
}, testInfo) => {
  const path = '/math/elementary-algebra/09-roots-and-radicals/01-simplify-and-use-square-roots/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  await waitForPageReady(page);

  const card = page.locator('multiple-choice[data-answer="5"]');
  await expect(card).toHaveCount(1);
  await expect
    .poll(async () => card.evaluate((el) => el.querySelectorAll('.ap-mc-option:not([disabled])').length), { timeout: 20_000 })
    .toBeGreaterThan(0);
  await card.scrollIntoViewIfNeeded();
  // Wrong first (every option stays answerable, the live region speaks),
  // then right: every option becomes aria-disabled — the completed-state
  // model — and the verdict lands in the live region.
  await card.locator('.ap-mc-option', { hasText: /^7$/ }).click();
  await expect(card.locator('.ap-mc-feedback')).toHaveText(/^Not quite/);
  await card.locator('.ap-mc-option[data-value="5"]').click();
  await expect(card.locator('.ap-mc-feedback')).toHaveText(/^Correct/);

  await expectNoBlockingViolations(page, 'a graded multiple-choice', testInfo);
});

test('a revealed, rated self-check (model answer and rubric open) has no serious or critical axe violations', async ({
  page,
}, testInfo) => {
  const path = '/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  await waitForPageReady(page);

  const card = page.locator('self-check').first();
  await card.scrollIntoViewIfNeeded();
  // Reveal the model answer and its rubric, tick a checkpoint, rate it.
  await card.locator('.ap-selfcheck-answer summary').click();
  await expect(card.locator('details.ap-selfcheck-answer')).toHaveAttribute('open', '');
  const checkpoints = card.locator('.ap-selfcheck-checkpoints input[type="checkbox"]');
  expect(await checkpoints.count()).toBeGreaterThanOrEqual(2);
  await checkpoints.first().check();
  await card.locator('.ap-selfcheck-mark[data-verdict="correct"]').click();
  await expect(card.locator('.ap-selfcheck-feedback')).toHaveText(/^Marked as correct/);

  await expectNoBlockingViolations(page, 'a revealed and rated self-check', testInfo);
});

test('a graded sort-bins (partial credit, items returned to the tray) has no serious or critical axe violations', async ({
  page,
}, testInfo) => {
  const path = '/life-health-sciences/biology/10-cell-reproduction/05-prokaryotic-cell-division/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  await waitForPageReady(page);

  const card = page.locator('sort-bins');
  await expect(card).toHaveCount(1);
  await card.scrollIntoViewIfNeeded();
  const places = card.locator('.ap-sortbins-place');
  const tray = card.locator('.ap-sortbins-tray .ap-sortbins-item');
  // Everything into the last bin: the ownership cap means this is never the
  // key, so grading returns the misplaced items to the tray — the partial
  // state, where buttons have physically moved while focus may sit on one.
  const bins = await places.count();
  while (await tray.count()) {
    await tray.first().click();
    await places.nth(bins - 1).click();
  }
  await card.locator('.ap-sortbins-check').click();
  await expect(card.locator('.ap-sortbins-feedback')).toHaveText(/placed correctly/);

  await expectNoBlockingViolations(page, 'a graded sort-bins', testInfo);
});

test('a graded graph-plot (points placed, verdict shown) has no serious or critical axe violations', async ({
  page,
}, testInfo) => {
  const path = '/math/elementary-algebra/04-graphs/02-graph-linear-equations-in-two-variables/';
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await assertProductionBuild(page, path);
  await waitForPageReady(page);

  const card = page
    .locator(String.raw`graph-plot[data-config*='"slope":3,"intercept":-1']`)
    .filter({ has: page.locator('.ap-graphplot-question') });
  await expect(card).toHaveCount(1);
  await expect
    .poll(async () => card.evaluate((el) => Boolean(el.g) && typeof el.buildGraph === 'function'), { timeout: 20_000 })
    .toBe(true);
  await card.scrollIntoViewIfNeeded();
  // Three points through the keyboard path, then Check: the graded SVG
  // rebuilds its role="application" grid with focusable role="button"
  // handles, and the verdict lands in the live region.
  const addPoint = card.getByRole('button', { name: 'Add point' });
  await addPoint.click();
  await addPoint.click();
  await addPoint.click();
  await expect.poll(async () => card.evaluate((el) => el.pts.length)).toBe(3);
  await card.getByRole('button', { name: 'Check' }).click();
  await expect.poll(async () => card.evaluate((el) => el.status)).not.toBe('idle');

  await expectNoBlockingViolations(page, 'a graded graph-plot', testInfo);
});

test('every mediafigure image has alt text, and a longdesc summary is keyboard-operable', async ({
  page,
}) => {
  for (const path of [
    '/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology/',
    '/life-health-sciences/biology/01-the-study-of-life/02-themes-and-concepts-of-biology/',
  ]) {
    await page.goto(path, { waitUntil: 'domcontentloaded' });
    await assertProductionBuild(page, path);
    await waitForPageReady(page);

    const images = page.locator('.ap-mediafigure img');
    const count = await images.count();
    expect(count, `${path} has no mediafigure images`).toBeGreaterThan(0);
    const alts = await images.evaluateAll((imgs) => imgs.map((img) => img.getAttribute('alt')));
    for (const alt of alts) {
      expect(alt, `${path}: every mediafigure img needs non-empty alt`).toBeTruthy();
      expect(alt.trim().length, `${path}: mediafigure alt must not be blank`).toBeGreaterThan(0);
    }

    const summaries = page.locator('details.ap-mediafigure-longdesc summary');
    const summaryCount = await summaries.count();
    expect(summaryCount, `${path} should carry at least one longdesc`).toBeGreaterThan(0);
    for (let i = 0; i < summaryCount; i += 1) {
      const summary = summaries.nth(i);
      const details = page.locator('details.ap-mediafigure-longdesc').nth(i);
      await expect(details).not.toHaveAttribute('open', '');
      await summary.focus();
      await page.keyboard.press('Enter');
      await expect(details).toHaveAttribute('open', '');
      // And the reverse, proving the control is a real toggle rather than an
      // Enter-only one-shot reveal.
      await page.keyboard.press('Enter');
      await expect(details).not.toHaveAttribute('open', '');
    }
  }
});
