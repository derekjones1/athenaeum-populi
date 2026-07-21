# Section Authoring Playbook (Hugo edition)

How to author a section in the Hugo build: pure Markdown + shortcodes. The
mechanical rules are enforced by the tooling (`npm test`, `npm run
verify-section`) — author, run the verifier, fix what it reports. You should not
have to memorize the mechanical rules; the lints know them.

This is the shortcode-syntax port of the old MDX/JSX playbook. The *content*
conventions (source fidelity, math style, exercise design) are unchanged; only
the component syntax and the file mechanics differ.

## 1. Where the file goes

```
content/<subject>/<book>/<NN>-<chapter-slug>/<NN>-<section-slug>.md
```

- Section landings (book cover, chapter overview) are `_index.md`, not
  `index.mdx`.
- Ordering is by frontmatter **`weight`** (Hugo), replacing Nextra's `_meta.js`.
  Give each section the weight matching its `NN` prefix; chapters get the
  chapter number; book-level knowledge checks get a weight that slots them
  between the right chapters.
- Sidebar label defaults to the frontmatter `title`. Set `linkTitle:` only if
  the sidebar label should differ.
- Numeric prefixes are zero-padded, start at `01`, sequential, no gaps. The
  validator enforces this.

Frontmatter for a numbered section:

```yaml
---
title: Add and Subtract Fractions with Common Denominators
description: >-
  One to two sentences summarizing the section.
source_section: "4.4"   # the section number in the SOURCE textbook
weight: 4
---
```

Book root `_index.md` also needs `license:` and `source:` (and carries
`cascade: {type: docs}` so the whole book gets the docs sidebar). Chapter
`_index.md` needs `source_chapter:`. Knowledge-check pages need
`source_chapters:` (e.g. `"1-6"`). `npm run validate` checks all of this.

## 2. Writing patterns

- **Math:** KaTeX — `$...$` inline, `$$...$$` display (multi-line `$$` fenced on
  their own lines). Group digits with `{,}`: `$37{,}519{,}248$`. Plain prose
  numbers need no `$`. A literal dollar sign (money) is `\$`.
- **Fractions: `\tfrac` everywhere** — inline, in **Check:** sentences, and
  inside `$$` arrays. `\dfrac` is banned and plain `\frac` inside an array
  renders too tall; the lint enforces both. Nested fractions use `\cfrac` in a
  display block.
- **Worked-example step tables:** align relations with `\begin{array}{lrcl}`,
  rows `explanation & LHS &=& RHS \\[4pt]`. Separate steps with `\\[4pt]` (the
  lint rejects bare `\\` in `{lrcl}` arrays).
- Unlike MDX, a literal `{` in prose is harmless in Hugo — only `{{` starts a
  shortcode. So set notation like `{3, 6, 9}` is fine in prose (though math sets
  still read best as `$\{3,6,9\}$`).

## 3. Exercises and components (shortcodes)

**Fill-in (free-response math, graded in the browser):**

```
{{< fillin
  question="Find the sum: $\tfrac{3}{6} + \tfrac{2}{6}$"
  answer="\frac{5}{6}"
  answerDisplay="$\tfrac{5}{6}$"
  hint="Add the numerators and keep the same denominator."
>}}
```

LaTeX in `answer` uses a **single** backslash (Hugo passes shortcode params
verbatim — no MDX doubling). `question`/`hint`/`answerDisplay` support inline
`$...$`. The verifier runs every `answer` through the real grader: it must
self-grade `correct`.

**Multiple choice (text mode)** — options are one per line in the body; `answer`
must match an option string exactly:

```
{{< multiplechoice
  question="Which symbol goes at the endpoint of $x > 2$?"
  answer="parenthesis"
  hint="Is $2 > 2$ true?"
>}}
parenthesis
bracket
{{< /multiplechoice >}}
```

**Multiple choice (graph mode)** — "which graph is correct?". Options are
prerendered `<svg>` blocks separated by a line `===OPT===`, with
`answerIndex` (0-based). Generate each option SVG with the figure helper
(below). Every option needs an `aria-label`.

**Graph it yourself (GraphPlot):** config (answer + grid) is JSON in the body.

```
{{< graphplot
  question="Graph the line $y = -4x$ by placing two points on it."
  answerDisplay="$y = -4x$"
  ariaLabel="A blank grid from −7 to 7 on both axes."
  hint="The line passes through the origin."
>}}
{"answer": {"slope": -4, "intercept": 0}, "grid": {"xMin": -7, "xMax": 7, "yMin": -7, "yMax": 7}}
{{< /graphplot >}}
```

`answer` shapes: `{slope,intercept}`, `{x}`, `{y}`, `{system:[…]}`,
`{quadratic:{a,b,c}}`.

**Callouts / cards** (Hextra shortcodes):

```
{{< callout type="info" >}}
**Note.** Body markdown, including $math$.
{{< /callout >}}
```

**Static figures (Graph / NumberLine / Figure):** these are prerendered SVG.
Hugo can't run the geometry at build time, so generate the SVG with the helper
and paste the `<div class="ap-figure">…</div>` block it prints:

```
node tools/render-figure.mjs graph '{"ariaLabel":"The line y = 2x + 1.","lines":[{"slope":2,"intercept":1,"label":"y = 2x + 1"}]}'
```

Prop names match the old `<Graph>`/`<NumberLine>`/`<Figure>` components (see
`assets/js/lib/graph-core.mjs`). Every figure MUST carry an `ariaLabel`.

## 4. Verify (the workflow)

From `athenaeum-hugo-migration/`:

1. `npm run verify-section content/<subject>/<book>/<ch>/<sec>.md`
   — lints, renders every math run, and grades every fill-in answer. Fix any ✗.
2. `npm run validate` — content-structure check (weights, prefixes, frontmatter).
3. `npm run lint` — repo-wide lints + KaTeX render across all content.
4. `npm test` — the above plus the grader unit tests.
5. `hugo server` and open the page — the real render is the final gate
   (`npm run build` for the production build).

## Done checklist

- [ ] Frontmatter complete (`title`, `description`, `source_section`, `weight`).
- [ ] `verify-section` clean (✗ = 0).
- [ ] `npm test` green.
- [ ] Page renders in the browser; math, exercises, and figures look right.
