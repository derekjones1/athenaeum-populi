# Athenaeum Populi — Hugo agent notes

The Hugo migration is complete; this repository is the production
architecture. For content work, follow `docs/authoring-playbook.md`; for
knowledge checks, also follow `docs/knowledge-check-playbook.md`. See
`docs/architecture.md` for the current build and deployment design. For the
OpenStax math books — the three completed algebra books and the scaffolded
Precalculus 2e — also follow `docs/openstax-source-workflow.md`.

## Stack and constraints

- Hugo extended 0.164.0 and vendored Hextra 0.12.3 are pinned. Do not upgrade
  them casually: Hugo's embedded KaTeX is version-coupled to the vendored
  KaTeX 0.16.22 CSS.
- Interactive exercises are vanilla Web Components under `assets/js/`.
  MathLive and the compute engine are lazy-loaded. Keep heavy dependencies out
  of the shared bundle.
- Pagefind is one global site-wide index. Do not scope search by book.
- `wrangler.jsonc` deploys static assets to the production
  `athenaeum-populi` Cloudflare Worker. `.github/workflows/ci.yml` must verify
  every gate before its production deploy job. Do not create staging Workers.
- Preserve accessibility, open-license attribution, stable published URLs,
  and the 20,000-file artifact ceiling.
- For books covered by the OpenStax source lock, treat pinned CNXML as the
  semantic/transcription source, the local PDF as edition and visual evidence,
  and current upstream `main` as a review candidate. Never synchronize upstream
  changes into `content/` automatically.
- The lock pins one commit per upstream bundle: `prealgebra-bundle` for the
  three algebra books and `college-algebra-bundle` for Precalculus 2e. Books
  carry an `authoringStatus`; `content/math/precalculus` is `scaffolded`, so it
  has chapter landings and pinned provenance but no section pages yet. Those
  landings declare `authoring_status: scaffolded`; drop that marker from a
  chapter as soon as it has a section page, and rerun
  `node tools/openstax-source.mjs build-map` after authoring new sections.

## Commands

- `npm run serve` — local Hugo server
- `npm run serve:public` — serve the built `public/` with no livereload
- `npm test` — unit tests, content validation, and math lint
- `npm run build` — clean production build plus global Pagefind
- `npm run check:build` — route, link, search, and file-count gates
- `npm run ci` — complete local equivalent of CI
- `npm run source:fetch` — fetch the ignored, sparse OpenStax source checkout
- `npm run source:verify` — verify the committed 212-section map offline
- `npm run source:check` — report-only comparison against pinned CNXML
- `npm run source:history` — review changes since the inferred PDF-era commits

Every `source:*` command takes `--bundle KEY` to work on one bundle at a time.

## Browsers (never run `npx playwright install`)

Use the browser that is already installed. `npx playwright install` hangs here,
and running it undoes the local fix. The cached
`~/Library/Caches/ms-playwright/chromium-1208` is incomplete — its launcher
stub is present but the `Google Chrome for Testing Framework.framework` bundle
it `dlopen`s is missing, so that binary aborts on launch and Playwright then
asks for a `chrome-headless-shell` build that is also absent. That prompt is
the trap; do not take it.

Both entry points drive the installed Chrome directly, so no environment
variable is needed and `npm run ci` passes clean out of the box:

- `tools/screenshot-page.mjs` launches with `channel: 'chrome'`.
- `playwright.config.mjs` sets `channel: 'chrome'` on the `chromium-light` and
  `chromium-dark` projects.

`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` stays available in that config as an
override when a specific binary is required. `A11Y_SKIP_BUILD=1 npm run
test:a11y` is the fast path whenever `public/` is already current from a
just-run `npm run build`. If the suite ever fails at launch again, the fix is a
channel or an executable path — never an install.

Do not commit unless the user explicitly asks. Preserve unrelated worktree
changes.
