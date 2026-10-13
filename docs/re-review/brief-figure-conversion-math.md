# Figure conversion brief — math

Converts a page's hand-written inline `<svg>` graphs and geometry to
spec-first `apfigure` figures. Run on Opus, one fixer per 15–25 figures,
for the "Figure conversion" rows of `docs/re-review/tracker.md`; the
parent's recipe is "Figure conversion rows" in `docs/re-review/README.md`.
Written for the Prealgebra chapter 11 row (October 12, 2026). The parent
fills `SP` (its scratchpad) and the page list.

You convert figures only. Working rules:

1. **No git commands at all**, not even read-only (the tree holds other
   agents' uncommitted work).
2. Edit ONLY the hand-written `<svg>` blocks on your pages (and the bare
   `<div class="ap-figure">` wrapper when it holds nothing but that svg) —
   never a question, key, hint, option, prose line, or an existing
   `apfigure`. An `<svg` carrying `data-pictorial` is kept as drawn; an
   `<svg` carrying `data-spec` is not yours (the converter tool handles
   those). A finding outside your scope (prose that contradicts its
   figure, a hand figure that duplicates a spec-first figure already on
   the page, a shape the engine has no primitive for) goes under "needs
   parent" in your report, with the line numbers.
3. Re-read a region right before editing it; after your last edit re-read
   the page's figure blocks once more.
4. Do not run `ledger:*`, `baseline:update`, `npm run build`, `npm test`,
   Playwright, or `git`; do not spawn sub-agents. `npm run lint` and the
   two per-page gates below are yours.

Read first: the "Static figures" block in `docs/authoring-playbook.md`
(the shortcode and `ariaLabel` rule) and "Static figures: graph-core
rules" in `docs/subjects/math.md` (placement, ticks, what can carry a
label, superscripts, blank lines). The builders are in
`assets/js/lib/math/graph-core.mjs` (`buildGraph` for `kind="graph"`,
`buildFigure` for `kind="figure"`, `buildNumberLine` for
`kind="numberline"`); the header comment of each lists its keys.

## Per figure

1. **Read the drawing.** The parent rendered every hand svg of your pages
   to `SP/figconv/render/<unit>/L<line>.png`. Read the PNG at full size
   beside the svg's `aria-label` and the prose, example, or exercise
   around it. The drawing is the authority for what is plotted; the page
   tells you which equation it is a drawing of. Check the two agree. A
   drawing that contradicts its page is reported, never silently "fixed"
   either way.
2. **Recover the spec from the geometry.** Count grid cells for the window
   (`xMin`/`xMax`/`yMin`/`yMax`) and read the svg's own coordinates for
   anything the label does not state. Every plotted object becomes its
   analytic primitive:
   - a line: `{"slope":m,"intercept":b}`, `{"through":[[x1,y1],[x2,y2]]}`,
     or `{"x":c}` for a vertical line; the engine draws the arrows;
   - plotted points: `points` with `at` and the printed `label`
     (`open: true` for a hollow dot); `labelSide` only where the drawing's
     side carries meaning;
   - a rise/run sketch: `slopeTriangles` with `from`, `to`, `order`
     (`vh` = vertical leg first, the default; `hv` = horizontal first),
     `riseLabel`, `runLabel`; the legs draw dashed;
   - dashed drop lines to the axes: `guides: [[x,y]]`;
   - a shaded side: `regions`; a plain segment: `segments` with `from`,
     `to`, optional `dashed`, `arrows` (`true`, `'start'`, `'end'`),
     `label`;
   - free text (a quadrant name, an equation beside its line): `texts`
     with `at` (graph units), `text`, optional `anchor`;
   - geometry on no grid (`kind="figure"`): `polygons` with `points`,
     `edgeLabels`, `vertexLabels`, `rightAngles`, `dashedEdges`;
     `circles` with `radius` / `diameter`.
   - a number line (`kind="numberline"`): `min`/`max`/`step`/`labelEvery`
     from the ticks; `width: 528` whenever the drawing is that wide or the
     labels are tenths or finer (eleven labels collide at the default 264);
     `labelDecimals` when the drawing prints fewer decimals than the step
     carries; a point's `labelNudge` + `leader` where two labels collide;
     `annotations` for arrows, arcs, pointers, and captions above or below
     the line, positioned by value. A source's red/blue pair becomes an
     above/below pair. Never `title` for an end caption. A sign chart is
     `rows` (one `{label, signs:[{at,text}]}` per factor row, reading
     order, `side:"below"` for the quotient row) plus `dividers` at the
     partition numbers and `intervals` for the shaded solution.
   Never `smoothCurves`, never a polygon faked from `segments`, never
   hand `texts` or `segments` for tick marks or tick digits (the lint
   refuses them, and three numeric `text` annotations on their values). Exponents are superscript characters (`x²`), never TeX.
   Minus signs in labels are `−` (U+2212) as the drawing prints them.
3. **Ticks.** The hand drawings in these rows mostly print an unnumbered
   grid. The engine convention on every converted page is numbered axes:
   use `"tickLabels":true` with the `tickStep` the page's existing
   `apfigure` specs use (1 on a ±6 or ±7 window, 2 on ±8 or ±10), and say
   "numbered every N units" in the `ariaLabel`. This is the one place the
   new figure may print more than the old one.
4. **Write the label.** `ariaLabel` is the old `aria-label`, re-read
   against the new render: every point, line, arrow, leg, and text it
   names must be in the new figure, and nothing it names may be missing.
   It never states a key an item below the figure asks for.
5. **Replace the markup.** The `<svg>…</svg>` — and its
   `<div class="ap-figure">` wrapper when the wrapper holds only that svg
   — becomes, with one blank line on each side:
   ```
   {{< apfigure kind="graph" >}}
   {"ariaLabel":"…","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"tickStep":1,"lines":[…],"points":[…]}
   {{< /apfigure >}}
   ```
   Keep the spec on ONE line. Keep `unit` only when a sibling spec on the
   page sets it, matching that value, so the page's figures stay one size
   (if that unit makes 1-unit tick digits collide at the origin, use the
   default and say so in the report).
   A hand svg inside a `<div style="display: flex …">` panel row stays in
   that wrapper: the shortcodes become its direct children, each with a
   blank line on both sides. The spec-first panels are wider than the
   hand ones, so give the wrapper `max-width: 30rem; margin: 0 auto` and
   four panels wrap two by two instead of three and one (Prealgebra
   11.3). The parent screenshots the built page to confirm.
6. **Compare old and new, image-first.** Render your converted page:
   `node tools/figures/render-page-figures.mjs <page> SP/figconv/after/<unit> --svg-only`
   writes each spec as `A<line>.png` (the line is the `{{< apfigure` line
   now). Read the new PNG beside the old `L<line>.png` and check every
   point, intercept, arrow end, leg, shaded side, and label text is
   present and in the same place mathematically. Label placement may
   differ; geometry may not. A label the engine puts on ink or off the
   grid is moved with `labelSide`, `labelNudge`, or a `texts` entry, never
   by changing the mathematics.

## Per page, when its figures are done

- `node tools/figures/check-figure-overlaps.mjs <page>` — clean, and the
  page's inline count is only its `data-pictorial` figures.
- `npm run verify-section -- <page>` and `npm run lint` — clean.
- `grep -c '<svg' <page>` equals the page's pictorial count.

## Report (ten lines)

Pages and figure counts converted; each `needs parent` item with its line
and the reason (duplicate of a spec-first figure, a shape with no
primitive, prose that contradicts its drawing); any geometry you could not
reproduce exactly and what you did instead; the gate results. Append the
report to `SP/figconv/reports/<unit>.md` as you go, not only at the end.
