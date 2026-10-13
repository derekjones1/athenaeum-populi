# Figure checker brief — math

The second, independent read of every figure on a math page, run on Opus
after the page's fixer (`brief-math.md`) has finished. Written from the
Precalculus chapters 11–12 run (October 12, 2026), where five checkers over
eleven pages made 48 fixes the fixers had not: three geometry refits (a
Practice cubic peaking past its open circle, an asymptote branch that did
not start where the source's does, a parking-garage step graph copied from
a source figure that contradicts its own text), nine mis-set panel labels,
and the rest legibility (digits under curves, arrowheads on axis arrows,
labels on ink, under-sampled oscillations). The parent fills `SP` (its
scratchpad) and the page list.

You check figures only. Working rules:

1. **No git commands at all**, not even read-only (the tree holds other
   agents' uncommitted work).
2. Edit ONLY `apfigure` spec lines, inline `<svg>` blocks, and their
   `ariaLabel` / `aria-label` text on your pages — never a question, key,
   hint, option, or prose line. A finding outside that scope (a stale
   footer sentence about a figure, an erratum's "Local handling" line, a
   figure whose page text is the thing that is wrong) goes under "needs
   parent" with the replacement text.
3. Re-read a region right before editing it (the fixer may still be
   finishing a neighbour); after your last edit re-read it once more.
4. Do not run `ledger:*`, `baseline:update`, `npm run build`, Playwright,
   or `git`; do not spawn sub-agents.

Read: `docs/re-review/brief-math.md` step 4 ("Every figure, image-first by
inventory") and its "Figures and display math" paragraph; the figure
section of `docs/subjects/math.md`. The module's source images are in
`SP/media/<mid>/`; the raw CNXML
(`sources/openstax/osbooks-college-algebra-bundle/modules/<mid>/index.cnxml`,
or the book's own checkout) says which figure is which and what its
caption and alt claim.

## Per page

1. Render: `node tools/figures/render-page-figures.mjs <page>
   SP/render/fig-<unit>`. Inline SVGs land as `L<line>.png`, `apfigure`
   specs as `A<line>.png`. Count the files against the page's `<svg` and
   `{{< apfigure` tags — the two counts must match before you read
   anything — and Read every PNG at full size.
2. Inventory each figure: every curve, point, open or closed dot, hole,
   arrowhead and its direction, asymptote, shaded side, tick label, axis
   label, text label. Then check:
   - **(a) the mathematics.** It is what the prose, example, or question
     beside it says: recompute — plotted points lie on the stated
     function, a hole is at the stated $x$, a limit graph approaches the
     stated value from each side, a sequence plot has the stated terms, a
     tangent has the stated slope through the stated point, a step graph
     follows the page's own rule. The drawing's own prose outranks the
     source image where the two disagree (the parking garage: the text's
     rule, not the printed figure).
   - **(b) the label.** `ariaLabel` describes that drawing, and never
     states a key an item below it asks for.
   - **(c) the source.** It matches the source figure's content where the
     page says it redraws one; a source figure that contradicts its own
     module is reported, not copied.
   - **(d) legibility.** No arrowhead on an axis arrow or a tick digit; no
     label on ink; no curve through a tick digit (`xTickOffset` /
     `yTickOffset` — never hand ticks as `segments` or digits as `texts`,
     the lint refuses them); a window roughly square (`yUnit`); nothing
     outside the viewBox; dark-mode safe (`currentColor`, no hard black
     fills); a branch to a hole ends exactly on the open dot with the
     arrowhead at the far end; a sampled curve (`polylines`) is dense
     enough to look smooth and reaches its true peaks — sample evenly in
     the quantity that varies (the angle $\pi/x$, not $x$, for
     $\sin(\pi/x)$) and through the exact extrema.
3. Fix the spec: analytic primitives, never `smoothCurves`, never a
   polygon faked from segments. Re-render and re-read the PNG. A drawing
   that contradicts its page is fixed only when the page's own prose or
   exercise makes the intended figure unambiguous; say so in the report.
   A fix that changes what a question's answer would be is a "needs
   parent" item, not an edit.
4. Gates: `node tools/figures/check-figure-overlaps.mjs <page>` clean;
   `npm run verify-section -- <page>` clean; `npm run lint` clean for your
   page.

## Report

Append to `SP/reports/fig-<unit>.md` with Bash heredocs (`cat >> … <<'EOF'`),
one row per change: `| file:line | class | fix |` with the classes
`figure-geometry` (wrong mathematics), `figure-label` (a printed label or
panel mark), `aria`, `legibility`; then "needs parent" with replacement
text for anything outside your scope. Reply in ten lines: pages, figures
read (L and A counts), fixes by class, needs-parent count, files edited,
gates clean.

## Parent duties

- Group pages by figure count, about 15–25 figures a checker (a page with
  22 figures is one checker); launch each group when its pages' fixers
  have reported. Chapters 11–12 cost about 110–230k Opus tokens a checker.
- Spot-check the checkers' geometry changes image-first (the s–t points
  moved from 55 to 54; the step graph; a refit cubic) before accepting
  them, as for a fixer's key change.
- Apply the "needs parent" prose: footer `Changes:` clauses for a figure
  now drawn from the text, erratum amendments, a stale sampling sentence.
- A fixer resumed after its checker is told which spec lines the checker
  touched, so its Edit does not restore the old spec.
