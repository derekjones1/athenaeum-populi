import { defineConfig, devices } from '@playwright/test';

// Port 1315, not Hugo's 1313: the suite must never attach to a running
// `hugo server`. That server injects livereload, serves unfingerprinted CSS,
// and overwrites `public/` as it renders — so measuring colour, size, and
// contrast against it reports the dev server rather than the shipped site.
const baseURL = process.env.BASE_URL || 'http://127.0.0.1:1315';
const chromiumExecutablePath =
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;

// The `ci` script runs `npm run build` and `npm run check:build` immediately
// before the browser suites, so `public/` is already current there
// (PLAYWRIGHT_SKIP_BUILD=1). Everywhere else the build is part of starting
// the server, because a stale `public/` serves pages whose fingerprinted
// stylesheets 404.
const serveCommand = 'npm run serve:public';
const webServerCommand = process.env.PLAYWRIGHT_SKIP_BUILD
  ? serveCommand
  : `npm run build && ${serveCommand}`;

export default defineConfig({
  testDir: './tests',
  timeout: 120_000,
  expect: {
    timeout: 10_000,
  },
  reporter: process.env.CI ? 'line' : 'list',
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL,
    launchOptions: chromiumExecutablePath
      ? { executablePath: chromiumExecutablePath }
      : undefined,
  },
  // `channel: 'chrome'` drives the Chrome already installed on the machine, so
  // `npm run ci` never needs `npx playwright install` — the bundled-browser
  // download is unreliable here and its absence otherwise fails every test at
  // launch. PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH above still overrides this when
  // a specific binary is required.
  projects: [
    {
      name: 'chromium-light',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        colorScheme: 'light',
      },
    },
    {
      // Only the accessibility suite is colour-scheme-sensitive (contrast is
      // measured per theme). The grader end-to-end checks are byte-identical
      // in both schemes, so running them here would double the slowest tests
      // for zero added signal.
      name: 'chromium-dark',
      testMatch: /accessibility\.spec\.mjs/,
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        colorScheme: 'dark',
      },
    },
  ],
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: webServerCommand,
        url: baseURL,
        // Never inherit a server this config did not start: a leftover
        // `hugo server` on the same port would silently invalidate the run.
        reuseExistingServer: false,
        // A cold `npm run build` (Hugo plus the global Pagefind index) is the
        // slow part, not the server itself.
        timeout: 300_000,
        stdout: 'pipe',
      },
});
