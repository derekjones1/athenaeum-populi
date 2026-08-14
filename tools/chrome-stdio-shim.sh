#!/bin/sh
# Launch Chrome for the browser suites with stdout/stderr detached.
#
# Real Google Chrome spawns helper daemons — chrome_crashpad_handler, and on
# macOS the GoogleUpdater wake/crash-handler processes — that inherit its
# stdout and stderr and can outlive it by minutes or indefinitely. Playwright
# finishes closing a browser only on Node's `close` event, which needs EOF on
# both of those pipes, so a daemon holding an inherited pipe end hangs
# `npm run ci` forever *after* the last test has passed. Diagnosed live on
# 2026-08-13: lsof showed the hung workers' Chrome-stdio sockets held open by
# crashpad and GoogleUpdater, and killing those daemons completed the run
# instantly.
#
# Redirecting both streams to /dev/null before exec means whatever Chrome
# spawns can only ever inherit /dev/null. The CDP transport is unaffected —
# Playwright's `--remote-debugging-pipe` rides fds 3 and 4, which pass through
# the redirect and the exec untouched. The trade-off is that Chrome's own
# stderr no longer appears in `DEBUG=pw:browser` output.
#
# Resolution order mirrors the old config: the explicit override first, then
# the platform's installed Chrome (macOS app bundles, then PATH names, which
# covers the Linux CI runner's preinstalled google-chrome).

if [ -n "$PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH" ]; then
  exec "$PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH" "$@" >/dev/null 2>&1
fi

for candidate in \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  "$HOME/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; do
  if [ -x "$candidate" ]; then
    exec "$candidate" "$@" >/dev/null 2>&1
  fi
done

for name in google-chrome google-chrome-stable chromium chromium-browser; do
  if command -v "$name" >/dev/null 2>&1; then
    exec "$name" "$@" >/dev/null 2>&1
  fi
done

echo "chrome-stdio-shim: no installed Chrome found; install Google Chrome or set PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH" >&2
exit 1
