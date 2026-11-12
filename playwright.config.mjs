import { defineConfig, devices } from '@playwright/test';
import { fileURLToPath } from 'node:url';

// The suite's own port — not Hugo's 1313, and not serve:public's default
// 1315 either. It must never attach to a running `hugo server`: that server
// injects livereload, serves unfingerprinted CSS, and overwrites `public/`
// as it renders — so measuring colour, size, and contrast against it reports
// the dev server rather than the shipped site. And 1315 is the port every
// session serves the build on for screenshots, for the render readers, and
// for a page left open for review, so a server someone left running there
// (November 11, 2026: one from that morning) stopped the suite from
// starting, since it refuses a server it did not start. Nothing else in the
// repo is told to use this port.
const suitePort = '1319';
const baseURL = process.env.BASE_URL || `http://127.0.0.1:${suitePort}`;

// The shim launches the installed Chrome with stdout/stderr pointed at
// /dev/null, because Chrome's helper daemons (crashpad, GoogleUpdater)
// inherit those streams and can outlive the browser — and Playwright only
// finishes closing a browser once both streams hit EOF. Without the shim,
// a lingering daemon hangs `npm run ci` indefinitely *after* every test
// has passed. PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH is honored inside the
// shim, so the override keeps working. `npx playwright install` remains
// forbidden (AGENTS.md §Browsers) — the shim resolves the machine's Chrome.
const chromeShim = fileURLToPath(
  new URL('./tools/build/chrome-stdio-shim.sh', import.meta.url),
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
      // Only the colour-scheme-sensitive suites run twice: accessibility
      // (contrast is measured per theme) and figures (they draw with
      // currentColor, so a rendering regression can be theme-specific). The
      // grader end-to-end checks are byte-identical in both schemes, so
      // running them here would double the slowest tests for zero added
      // signal.
      name: 'chromium-dark',
      testMatch: /accessibility\.spec\.mjs|figures\.spec\.mjs/,
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
        env: { PORT: suitePort },
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
