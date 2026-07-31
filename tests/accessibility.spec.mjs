import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

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
    name: '404 page',
    path: '/404.html',
    title: 'Page not found – Athenaeum Populi',
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
        exercise.querySelectorAll('.ap-mc-option').length > 0,
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

    return fillInsReady && choicesReady && graphsReady;
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

    await waitForPageReady(page);

    if (representativePage.title) {
      await expect(page).toHaveTitle(representativePage.title);
    } else {
      await expect(page.locator('html')).toHaveClass(
        new RegExp(`(?:^|\\s)${currentTheme(testInfo)}(?:\\s|$)`),
      );
    }

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

test('sidebar disclosure controls have at least 24 by 24 pixel targets', async ({
  page,
}) => {
  await page.goto('/math/intermediate-algebra/01-foundations/', {
    waitUntil: 'domcontentloaded',
  });
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
