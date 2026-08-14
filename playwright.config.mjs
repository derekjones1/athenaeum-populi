import { defineConfig, devices } from '@playwright/test';
import { fileURLToPath } from 'node:url';

// Port 1315, not Hugo's 1313: the suite must never attach to a running
// `hugo server`. That server injects livereload, serves unfingerprinted CSS,
// and overwrites `public/` as it renders — so measuring colour, size, and
// contrast against it reports the dev server rather than the shipped site.
const baseURL = process.env.BASE_URL || 'http://127.0.0.1:1315';

// The shim launches the installed Chrome with stdout/stderr pointed at
// /dev/null, because Chrome's helper daemons (crashpad, GoogleUpdater)
// inherit those streams and can outlive the browser — and Playwright only
// finishes closing a browser once both streams hit EOF. Without the shim,
// a lingering daemon hangs `npm run ci` indefinitely *after* every test
// has passed. PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH is honored inside the
// shim, so the override keeps working. `npx playwright install` remains
// forbidden (AGENTS.md §Browsers) — the shim resolves the machine's Chrome.
const chromeShim = fileURLToPath(
  new URL('./tools/chrome-stdio-shim.sh', import.meta.url),
);

// The `ci` script runs `npm run build` and `npm run check:build` immediately
// before the browser suites, so `public/` is already current there
// (PLAYWRIGHT_SKIP_BUILD=1). Everywhere else the build is part of starting
// the server, because a stale `public/` serves pages whose fingerprinted
// stylesheets 404.
const serveCommand = 'npm run serve:public';
// Bare truthiness read `PLAYWRIGHT_SKIP_BUILD=0` as "skip the build", which is
// the opposite of what anyone typing that means — and the failure mode is a
// stale `public/`, whose pages 404 their fingerprinted stylesheets and produce
// accessibility failures that look real.
const skipBuild = ['1', 'true'].includes((process.env.PLAYWRIGHT_SKIP_BUILD || '').toLowerCase());
const webServerCommand = skipBuild ? serveCommand : `npm run build && ${serveCommand}`;

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
    launchOptions: { executablePath: chromeShim },
  },
  projects: [
    {
      name: 'chromium-light',
      use: {
        ...devices['Desktop Chrome'],
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
