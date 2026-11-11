# Rendered-page reading — reader brief (Chemistry 2e)

A section of OpenStax Chemistry 2e was authored as a web page from the
book's CNXML. Its author, checker, claim pass, and blind solve all read the
Markdown source. You read the page **as a learner sees it**, beside the
printed book, and report where a learner is misled or badly served.

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. `SP` is the
scratchpad directory named in your task. **Read-only: edit nothing in the
repository. Never run a git command, not even a read-only one. Do not build
or serve the site. Do not spawn sub-agents.**
**Never read or grep `$SP/parent-only/`** — the parent's notes are there, and a reader who has seen what the parent suspects is no longer an independent reading. Search the repository, never the scratchpad.

## Inputs

- Rendered tiles: `$SP/render/<slug>/tile-NN.png` — 1100×1500 viewport
  tiles, top to bottom, 120 px overlap. Read every tile, in order. Answers
  are collapsed: the tiles show the unanswered page.
- Print: `$SP/pdf/chNN/p-00NN.png`; your body range, the chapter's pooled
  end matter (Key Terms, Key Equations, Summary, Exercises), and the answer
  key pages are in your task.
- `$SP/run-facts.md` — the section table and the parent's decisions. They
  decide what is NOT a defect.
- The page source under `content/physical-sciences/chemistry/` — to find
  the cause of what you see, and to read what a collapsed element holds.
- The module CNXML
  `sources/openstax/osbooks-chemistry-bundle/modules/<id>/index.cnxml` —
  the text authority. The PDF predates upstream corrections: before
  reporting a wording difference, check the CNXML; a page that follows the
  CNXML is right.
- `docs/subjects/chemistry.md`: "The section page, in order", "Exercises",
  "Notation" — what the page is meant to look like.

## What to look for

- Math that renders but says something else than print: a lost exponent or
  subscript, a unit run into its number, cancel strokes missing or on the
  wrong factor, a minus sign lost, trailing zeros lost (2.0 → 2), raw `$`,
  backslashes, or shortcode text showing.
- Chemical formulas and unit symbols (subscripts, charges, °, μ,
  superscripts on units).
- Tables: a column or header lost, a cell empty that print fills, a layout
  that makes a row misreadable.
- Figures: the wrong image for its caption, an image missing, panel labels
  the caption names and the image lacks, a figure far from the text that
  points at it, a figure unreadable at this size.
- Worked examples: a step print shows and the page lacks; an answer visible
  before the learner answers.
- Order and completeness against print: a paragraph, feature box, or link
  print has and the page lacks.
- Key terms and Key equations against the pooled pages.
- Practice: every rendered exercise against its printed stem (data values,
  units, figures). Can the learner tell what to type — the unit, the place,
  the form? Is anything on screen a give-away: a Source note, a footer, a
  hint, the item above?
- **The widgets' own words**: the typing guide under a formula or
  equation field, a field's placeholder, the message a wrong response
  gets. Each is the same on every item of the book, so read it against
  every key on the page (2.7: the guide's example formula was the key of
  one item, and nothing told the learner how a hydrate's dot is typed).
- **Letters that share a glyph**: in the page's sans font a capital I and a
  lowercase l are one shape (CaI₂ reads as "Cal₂"). Report each formula
  where the reading changes the substance; it is the parent's to raise.
- Visual defects: a row cut off at the column edge, clipping, overlap, an
  empty box, a control with no label.

## Not defects

Omitted unkeyed exercises; lead-ins restated in the singular; the page
skeleton (objectives callout, per-section Summary and Key terms, Practice
groups, added recall items, unlabeled Check Your Learning items);
corrections disclosed in a Source note or the footer; CNXML-backed wording
differences from the PDF; inline fractions set small (house style:
`\dfrac` is banned); a number and its unit parted at a line end.

## Output

Verify each finding against the page source (and the CNXML for wording)
before you report it; drop what does not survive. Write the report to the
path in your task, appending as you go. Per finding: severity (`wrong` =
the learner is told something false or cannot answer; `misleading`;
`cosmetic`), tile number, PDF page, what print shows, what the page shows,
the cause (file:line) when found, a suggested fix. Then `## What only this
reading found`: the kinds of defect a source reading would miss, and for
each whether a lint or browser test could catch it. End with the list of
tiles and PDF pages you read.

**Final message: at most ten lines** — counts by severity and the top
findings.
