# Athenaeum Populi — Hugo agent notes

Read `MIGRATION.md` and `MIGRATION-STATUS.md` before migration work. For content
work, follow `docs/authoring-playbook.md`; for knowledge checks, also follow
`docs/knowledge-check-playbook.md`.

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

## Commands

- `npm run serve` — local Hugo server
- `npm test` — unit tests, content validation, and math lint
- `npm run build` — clean production build plus global Pagefind
- `npm run check:build` — route, link, search, and file-count gates
- `npm run ci` — complete local equivalent of CI

Do not commit unless the user explicitly asks. Preserve unrelated worktree
changes.
