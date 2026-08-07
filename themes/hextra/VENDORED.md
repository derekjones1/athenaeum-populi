# Vendored theme record — Hextra

This directory is a **vendored copy** of the [Hextra](https://github.com/imfing/hextra)
Hugo theme, checked into this repository in classic theme mode. It is *not* a
Hugo Module: there is no Go toolchain in this build, and `hugo.toml` sets
`theme = "hextra"` so a build resolves the theme from this directory alone.
Never convert it to a module import, and never fetch it at build time.

Upstream ships no version marker inside the theme tree — `theme.toml` carries a
`min_version` for Hugo, not a Hextra version — so this file is the marker. It
exists because two places in the repository state the vendored version in prose
(`AGENTS.md` and `hugo.toml`) and nothing could check them.
`tools/documentation.test.mjs` asserts those two prose claims against the
`Version:` line below, so the three can no longer drift apart silently.

- **Version:** 0.12.3
- **Upstream:** https://github.com/imfing/hextra
- **Upstream commit/tag:** `v0.12.3` = `8e53e7a7ef3e24348edbac276e03cb9fecf66d0c`

## How the version was verified

On August 6, 2026, every git-tracked file under `themes/hextra/` (389 files)
was SHA-256 hashed and compared against fresh upstream checkouts of all four
v0.12.x tags:

| Upstream tag | Identical | Differing | Missing upstream |
|---|---|---|---|
| `v0.12.3` | **387** | **2** | 0 |
| `v0.12.2` | 353 | 29 | 7 |
| `v0.12.1` | 327 | 55 | 7 |
| `v0.12.0` | 300 | 81 | 8 |

The tree is uniquely `v0.12.3`. The two differing files are the deliberate
local modifications recorded below, not version drift.

## The vendoring rule

Changes to files under `themes/hextra/` are local forks of upstream and make the
next upgrade harder. Prefer overriding a layout from the project's own
`layouts/` tree, or a style from `assets/css/custom.css`, which Hextra loads via
`themes/hextra/layouts/_partials/head.html`. If you must edit the vendored tree,
record what and why here, so the diff is recoverable at upgrade time.

Local modifications (2):

- `layouts/_partials/scripts/katex.html` — upstream picks `katex.css` vs
  `katex.min.css` by `hugo.IsProduction`; this project vendors **only**
  `katex.min.css` under `static/katex`, so the partial pins `$minSuffix` to
  `".min"` unconditionally. Without this, `hugo server` links a nonexistent
  `katex.css`. Re-apply on upgrade.
- `layouts/_partials/search.html` — adds the Pagefind/accessibility contract
  that `assets/js/pagefind-search.js` drives: per-location `id`s for the input
  and results list, combobox ARIA on the input (`role="combobox"`,
  `aria-autocomplete`, `aria-haspopup`, `aria-controls`, `aria-expanded`),
  `role="listbox"` on the results list, and an `sr-only` `hextra-search-status`
  live region. The accessibility suite scans the expanded combobox, so dropping
  this on upgrade fails `npm run test:a11y`. Re-apply on upgrade.
