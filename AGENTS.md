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
- `npm test` — unit tests, content validation, answer cross-check, math lint
- `npm run build` — clean production build plus global Pagefind
- `npm run check:build` — route, link, search, and file-count gates
- `npm run ci` — complete local equivalent of CI
- `npm run source:fetch` — fetch the ignored, sparse OpenStax source checkout
- `npm run source:verify` — verify the committed 212-section map offline
- `npm run source:check` — report-only comparison against pinned CNXML
- `npm run source:history` — review changes since the inferred PDF-era commits

Every `source:*` command takes `--bundle KEY` to work on one bundle at a time.

Every authoring rule in the content lint is an error except one: the 56
sections still missing a `## Practice` block, which is an authoring programme
tracked in `docs/authoring-playbook.md` §5. A page you author or revise adds
no warning of its own. If a rule fires on sound content, narrow the rule and
add a test for the case it got wrong — do not exempt the page.

## Reviews and verification protocol

A periodic review is only worth running on what the machines cannot assert.
`npm run ci` already proves the code builds, the content lints, the answers
cross-check, and the pages pass axe. A review that re-reports any of that is
noise. Look instead for:

- **Drifted duplication.** Two copies of the same idea that are consistent by
  luck rather than by construction — one shortcode grammar per tool, one
  directory walker per script. `tools/lib-content.mjs` and `tools/lib-html.mjs`
  are where a shared primitive belongs.
- **Gates gone vacuous.** A check that still passes because it stopped
  checking. Watch `verify:answers`' per-class out-of-scope counts: zero
  failures also describes a checker that can no longer read the corpus
  (`--min-verified N` is the ratchet against it). Watch for a lint whose rule
  no longer matches how content is written.
- **Docs that are true but no longer load-bearing** — a runbook for a process
  that has been automated, a count nothing derives from.
- **The error-to-warning ratio.** Every authoring rule here is an error except
  the tracked Practice retrofit. A growing warning list is a growing backlog of
  known-defective content.

Three rules for a finding:

1. **Every finding ships with the command that reproduces it.** A file:line
   anchor from a search is a hypothesis; a command output is evidence.
2. **A negative claim ("X doesn't exist", "nothing tests Y") and any count
   require a run, not a search.** Most wrong review findings are absence claims
   made from grep.
3. **When you add a gate, sabotage it once to prove it fires**, then revert the
   sabotage. A gate that has never been seen to fail has not been tested; it
   has been written.

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
override when a specific binary is required. `PLAYWRIGHT_SKIP_BUILD=1 npm run
test:browser` is the fast path whenever `public/` is already current from a
just-run `npm run build` (`test:browser` runs every Playwright suite in one
server startup; `test:a11y` / `test:e2e` target a single spec). If the suite
ever fails at launch again, the fix is a channel or an executable path —
never an install.

Do not commit unless the user explicitly asks. Preserve unrelated worktree
changes.
