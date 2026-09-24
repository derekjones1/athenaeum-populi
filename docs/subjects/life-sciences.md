# Life sciences — subject playbook

The subject-specific rules shared by every life-sciences book: OpenStax
**Biology 2e** (complete), OpenStax **Microbiology** (complete), OpenStax
**Anatomy and Physiology**, and any later book on the
`life-health-sciences` shelf. `docs/authoring-playbook.md` is the shared
core (source-first workflow, file layout, the component contract, the
`## Practice` block, the verification loop, the working rules) and governs
every book; this document adds what an image-dependent, vocabulary-heavy
science book needs: a media pipeline, an image-accessibility policy,
text-answer exercises, the answer-form rules for keyed and unkeyed source
questions, and the three-reading answer discipline. Each book then has a
short playbook of its own — `docs/subjects/biology.md`,
`docs/subjects/microbiology.md`, `docs/subjects/anatomy-physiology.md` —
that records the pinned source, the file layout, the CNXML-to-page mapping
of that book's feature boxes and end matter, and every rule where the book
differs from this baseline. Read the core, then this file, then the book's
file before authoring a section; the book's file wins where it differs.

A marker such as *(unit 2)* or *(Sep 6 2026)* names where a rule came
from. Fold every correction back into a rule here, or the next book
repeats it.

## Source and authority

- **The pinned CNXML is the transcription authority.** Each book is pinned
  to one commit of its OpenStax repository in
  `data/openstax/source-lock.json`; `npm run source:fetch -- --bundle
  <bundle>` materializes it under `sources/openstax/`. The book's playbook
  names the bundle, the collection, the module scope, and the PDF.
- **The book's PDF is the visual authority** for what a figure shows and
  how a table lays out; render a page with `pdftoppm -f N -l N -r 110 -png
  <pdf> out` and read the PNG. When PDF and CNXML disagree, the CNXML is
  the transcription authority and the disagreement is an erratum
  candidate.
- **The reading aid is not the authority.** `python3
  tools/source/cnxml-preview.py <module>/index.cnxml` prints a module as
  Markdown-ish text with every figure's alt and caption and every note's
  class. It drops TeX spaces, bolds `no-emphasis` terms as if they were
  defined, and folds figure cross-references to `()`; check the raw CNXML
  for anything that looks odd.
- **License.** The pinned repositories say **CC BY-NC-SA 4.0** while
  openstax.org's catalog lists CC BY 4.0. The pinned source is the
  authority; the footer, the cover's `license:` key, and the JSON-LD follow
  it, and nobody "fixes" the footer to the web listing.

## Where the files go

```
content/life-health-sciences/<book>/_index.md                      book cover
content/life-health-sciences/<book>/NN-<chapter-slug>/_index.md    chapter landing (intro module)
content/life-health-sciences/<book>/NN-<chapter-slug>/NN-<section-slug>.md
static/media/<book>/<stem>-<width>.webp                            vendored figures
data/media/<book>.json                                             media manifest
```

`NN` is the upstream chapter number and, inside a chapter, the upstream
section number; `source_chapter` / `source_section` carry the same numbers
as strings. Each chapter's first module is its introduction (one paragraph
and a photo) and becomes the chapter `_index.md` body, exactly as in math.
Chapters are never regrouped, merged, split, renamed, or renumbered, and
sections keep their upstream `C.S` numbers; `node
tools/source/openstax-source.mjs verify-map` checks the numbering against
the pinned collection. Whether the cover groups chapters under unit
headings is the source's decision (Biology 2e has units, Microbiology does
not) and the book's playbook records it.

A chapter landing is created when its first section lands, never earlier;
a chapter moves from the cover's "Planned contents" list to its place in
`## Chapters` at the same moment. The book is `authoringStatus:
scaffolded` in the lock until its first chapter is complete, `in-progress`
after that, and `complete` when its last section lands. Flipping that flag
is a close-out step of its own, and the *status* word is pinned in six
places: the lock's `authoringStatus`, the cover's `authoring_status`
frontmatter (which `npm run source:verify` requires to equal the lock's
word for word, and to be absent once the lock says `complete`), the
assertions in `tools/source/openstax-source.test.mjs`, and the status
prose in `AGENTS.md`, `README.md`, and
`docs/source/openstax-source-workflow.md`. `npm run source:verify` is not
part of `npm test`; it runs at close-out and in CI (after `npm run
source:fetch`). The mapped-section *count* is stated once, in
`docs/source/openstax-source-workflow.md`
(`tools/build/documentation.test.mjs` checks it against
`data/openstax/source-map.json`); every other doc says "the committed
section map" rather than restating the number.

## The section page, in order

1. **Objectives callout.** The house lead-in `**By the end of this section,
   you will be able to:**` followed by one Markdown list item per objective,
   in source order and wording. The source's lead-in ("…be able to do the
   following:") is scaffolding, not content; the objective *list* is what
   fidelity applies to. `## Practice` groups repeat these verbatim.
2. **Body.** One `##` per CNXML `<section>` title, `###` for nested
   sections, prose transcribed faithfully. Bold every `<term>` at its
   defining occurrence (`**hypothesis**`), as the source does. Species names
   and genes in italics as printed.
3. **Feature boxes** become callouts whose first line is the bold feature
   name, then the source text. The `<note class>` → callout table is the
   book's: Biology 2e's is in `docs/subjects/biology.md`, Microbiology's in
   `docs/subjects/microbiology.md` §4. Two rules hold everywhere: a Link to
   Learning keeps its external URL (it is source content) and describes the
   destination in the link text ("an interactive animation of DNA
   replication"), never "click here"; and a box that wraps a figure and a
   question (Biology's Visual Connection, Microbiology's Art Connection) is
   not a callout — the figure, then its item, see Exercises.
4. **Figures** — `mediafigure`, see the media section below. Refer to a
   figure by describing it ("the flow chart above"), never by its print
   number; Hugo does not number figures.
5. **Tables** as Markdown tables. A CNXML `<table>` with a `summary`
   attribute is a real table; transcribe the cells. Matching exercises that
   the source prints as a two-column table (Biology 1.1 has one) become a
   Markdown table in the body and a `multiplechoice` per row in Practice
   only if the source keys the pairing.
6. **`## Summary`** — the module's `<section class="summary">`, verbatim.
7. **`## Key terms`** — one bulleted item per defined term, in source
   order: `- **term** — meaning.` This is the one end-matter block the lint
   requires as a heading, and the source of the section's `textin` items.
   Where the definitions come from is the book's: Biology 2e has a
   `<glossary>` per module; Microbiology has none and builds the block from
   the body's `<term>` elements and the book-wide Glossary appendix
   (`docs/subjects/microbiology.md` §1).
8. **`## Practice`** — see Exercises.
9. **Attribution footer**, one `<small>` paragraph:
   *This section is adapted from [<Book>, Section C.S: Title]
   (https://openstax.org/books/<book-slug>/pages/C-S-slug) by <the senior
   contributing authors the book's playbook names> and OpenStax, © OpenStax,
   licensed under [CC BY-NC-SA 4.0]
   (https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the
   original for free at [openstax.org]
   (https://openstax.org/details/books/<book-slug>). Changes: …* — the
   `Changes:` clause names every adaptation: figures re-encoded as WebP with
   the source alt text edited where noted, feature boxes rendered as
   callouts, the end-of-section exercises adapted into the interactive
   Practice block, key-term recall items added from the key terms, any
   reordered multiple-choice options, and anything omitted. Every count
   and claim in it is copied from a tally of the finished page taken after
   the last `verify-section` (its `facts:` panel gives most counts) —
   never from memory or from the plan. **The clause names departures from
   the source, and only those** *(September 23, 2026)*: correcting the
   page's own earlier alt, `longdesc`, hint, or item text is not narrated
   there.

## Notation

Life-science prose stays prose. Chemical formulas and ions use Unicode sub- and
superscripts in text (`CO₂`, `H₂O`, `Na⁺`, `Ca²⁺`) — searchable, readable by
screen readers, and free of the KaTeX head payload; write `$…$` math only
where the source itself prints an equation (rates, Hardy–Weinberg, pH), and
then `docs/subjects/math.md`'s notation rules apply to that span. Units and
numbers:
`5 µm`, `37 °C`, `1,000` with a plain comma in prose. Never put math in a
`textin` question or answer — the lint rejects it.

The lint enforces this since September 22, 2026: an ASCII formula or ion
(`CO2`, `H+`, `Ca2+`, `NO3-`, `NADP+`) in prose, item params and options,
captions, alt, or longdesc is an error, with the Unicode spelling in the
message. Exempt: `accept` members (what a learner types), `$…$` math, code,
the attribution footer (which quotes the source's ASCII), a token quoted
whole ("N2N2"), and an italic gene symbol (*USP14*). The message's
suggestion subscripts every count; an oxidation state is a superscript
(`S⁰`), so write what the artwork prints.

Exercise-string parameters (`question`, `hint`, `answerDisplay`, and a
multiple choice's option lines) render through the `mathtext` partial, which
typesets `$…$` with KaTeX and renders the prose runs as inline Markdown with
raw HTML allowed — the same pipeline as body prose. So `*Drosophila*`
italicizes, `**not**` bolds, and an allele superscript `I<sup>A</sup>` or a
subscript `E<sub>A</sub>` renders properly inside a question or an option.
Aria strings derived from these params are plainified, so markup never
reaches a screen reader as tag soup.

Three cases Biology 2e's chemistry chapters settled (unit 1):

- **Ion charges are Unicode and trailing**: `Cl⁻`, `OH⁻`, `HCO₃⁻`, `COO⁻`,
  `SO₄²⁻`, `Ca²⁺`. The lint's superscript-minus rule allows a minus that
  follows a letter, subscript digit, superscript digit, or closing paren and
  is not followed by a superscript digit.
- **Numeric exponents are math**: `$1 \times 10^{-7}$`, `$6.02 \times
  10^{23}$`. A Unicode `10⁻⁷` is rejected (it is an exponent, not a
  charge), and a page that sets one exponent in `$…$` sets the neighbouring
  positive ones the same way so the two do not mix in a sentence. The lint
  rejects an ASCII digit followed by a Unicode superscript digit (`4²`,
  `6.02 × 10²³`) anywhere outside `$…$` except a figure spec or a
  mediafigure alt/longdesc, which cannot hold KaTeX — and the same two
  places are exempt from the minus rule, so an alt or longdesc may write
  `10⁻¹⁸ m`; a selfcheck rubric checkpoint is plain text too, so spell the
  exponent out there ("four to the fourth power is 256") and put the same
  words in the model answer beside the `$4^4$`.
- **Money is `\$`, never a bare `$`.** Hugo's goldmark passthrough pairs ANY
  two bare `$` in a paragraph into inline math, so "costs between $300,000
  and $500,000" typesets as KaTeX garbage; every dollar sign in prose is
  currency and must be escaped (`\$300,000`). The lint flags a bare
  `$N,NNN` whose digit grouping and trailing context read as money rather
  than a math digit-group list (`10{,}000`) or a comma-list of numbers
  (`$1,2,3$`).
- **Display chemical equations are text, not KaTeX.** The source's
  `<equation>` blocks in 2.1 and 2.2 are reactions, not mathematics; each
  becomes its own short paragraph in Unicode with arrows — `2H₂O₂ → 2H₂O +
  O₂`, `HCO₃⁻ + H⁺ ⇌ H₂CO₃` — and the footer says "chemical equations set as
  Unicode text". KaTeX loads only for the numeric-exponent spans above.
- **Greek nomenclature prefixes are prose.** `α-helix`, `β-pleated sheet`,
  `ω-3 fatty acid`, `α-carbon` keep the printed glyph everywhere, exercise
  strings included: the exercise lint's unicode-math rule exempts a Greek
  letter followed by a hyphen (a bare `θ` or `α = 30°` is still math). Give
  the glossary `textin` for such a term an `accept` list with the spelled-out
  forms (`alpha helix`, `alpha-helix`).

Cases Biology 2e's cell chapters settled (unit 2), and the ones later books added:

- **A sub-figure that is its own image is its own `mediafigure`.** When a
  source `<figure>` holds `<subfigure>` children with separate image files
  (4.3's animal and plant cell, stems `…01a_corrected` and `…01b`), render
  them as two consecutive figures — the first with the source caption, the
  second with a one-line caption naming it panel (b) — never as one figure
  whose alt claims to show both. A single image with lettered panels stays
  one figure, its alt naming what each panel shows.
- **Source alts can be screen-reader spellings, not descriptions.** Many
  cell-chapter alts are letter-spaced TTS text ("A T P", "N A D P
  superscript plus sign baseline"). Write a plain alt from the image, move
  any walk-through into `longdesc`, and say so in the footer; this is a
  local rewrite of an accessibility field, not an erratum.
- **A source key that the module's own text contradicts is corrected on the
  page and logged.** The page keys the answer the section supports, the
  footer names the change, the errata entry quotes the passage, and the
  ledger verdict is `ok` with the erratum number — never a shipped
  `defect`, which fails `verify:ledger`.
- **Every keyed answer gets three readings, as in math.** The author keys
  it from the pinned CNXML; the checker re-derives it against the raw CNXML
  and the section text; and the orchestrator ANSWERS it. After the checker
  reports, run `npm run solve:emit -- <chapter dir> --out <dir>`, answer
  every packet item in writing (question and options only — the key,
  accept list, and hint are stripped), naming any other option that is also
  defensible, then `npm run solve:compare -- answers.json content --out
  <dir>`. Agreement is recorded; each disagreement or flag is settled
  against the module's own sentence and recorded with an `adjudicated`
  note — the source is the authority, and this pass exists to catch a key
  that is obviously wrong (a misprint, a double-keyed item, a wrong ratio),
  not to overrule the module with general knowledge. A key the module's
  text contradicts is corrected (erratum + `DISCLOSED_DEVIATIONS` line in
  `verify-source-keys.mjs`); a key the module supports stands even when the
  chemistry is looser than a specialist would write (erratum 123, the
  two-photon NADPH item — logged, keyed as the module teaches, its hint
  rewritten to follow the module rather than invent a rationale).
  `ledger:merge` the compare output; `verify:ledger --require-solved`
  fails until every multiplechoice and textin on the shelf carries the
  solve. `npm run verify:source-keys` (in `npm test`) separately proves the
  page keys what the source keys and lists every deliberate departure by
  erratum number.
- **An edited option is a deviation too** — it changes what is gradable
  (erratum 116's reworded distractor, erratum 122's typo-fixed one).
- **A Critical Thinking question keeps its preamble.** An analogy or
  scenario that opens the source question ("you would use a spoon rather
  than a fork…") is part of the question; do not trim it to the final
  sentence.
- **A feature box keeps its title and its citations.** `**Career
  Connection.** *Cancer Biologist.*` — the `<note>`'s `<title>` follows the
  bold name in italics; a reference list the box ends with is kept as a
  parenthetical after the sentence it supports rather than dropped.
- **`accept` lists the irregular plural of an answer** (`septa`, `bacteria`,
  `hypotheses`) and the compound form the section itself uses (`integral
  membrane protein` for a textin keyed `integral`). A regular plural
  (`glucose transporters`) or, for a plural key, a regular singular
  (`receptor` beside `receptors`) is folded by the grader (plural since
  September 6, singular since September 22, 2026) and is a lint error in
  `accept`.
- **`P<sub>i</sub>`** is the one sanctioned inline HTML subscript (no
  Unicode subscript letter exists); everything with a glyph — `H⁺`, `CO₂`,
  `FADH₂`, `Ca²⁺`, `PO₄³⁻`, `G₁`, `IP₃` — uses it. ΔG/ΔH/ΔS in prose are the
  Unicode Δ; the one genuine equation, `ΔG = ΔH − TΔS`, is `$…$`. The source
  auditor folds a Unicode sub/superscript digit into its own token so that
  `CO₂` matches a `<sub>2</sub>` heading.
- **Partial pressures (unit 7, ch. 39).** In prose, options, hints, and
  selfcheck text a partial pressure is `P<sub>O₂</sub>` / `P<sub>CO₂</sub>`
  (HTML sub around Unicode digits — the source's MathML `P O 2` has no
  glyph form). The source's display equations (`P_atm = P_N₂ + P_O₂ + …`,
  the alveolar-P_O₂ equation, the worked mm Hg arithmetic) are genuine
  equations and go in `$…$` on their own lines with `P_{\text{O}_2}`. Inside
  an `alt` or `longdesc` — plain-text attributes — spell it out: "oxygen
  partial pressure (PO₂)". `verify-source-keys` strips inline HTML before
  comparing an option with the source list, so `P<sub>O₂</sub>` matches
  the source's "P O 2".
- **An objective group left thin by the source may get an author-written item**
— an objective no source item tests, or a group short of the book's floor
after its source items and summary items are placed:
  a multiple choice built strictly from the page's own table or sentence,
  or a self-check whose model answer paraphrases one paragraph, with no new
  claim — disclosed in the ledger and the footer. Prefer a glossary
  `textin` when a term fits the objective.


## Media: vendored figures

Figures ship as vendored WebP under `static/media/<book>/`, referenced by
the `mediafigure` shortcode and recorded in `data/media/<book>.json`. That
manifest is the contract: the shortcode fails the build on a stem it does
not hold, the lint requires every `src` to be in it, and the build audit
allows exactly the files it lists. Everything the math books forbid
(`![]()`, `<img>`, `{{< figure >}}`, CSS images) stays forbidden.

**Vendoring a chapter** (once per chapter, before authoring it):

```sh
npm run source:media -- --book biology --chapter 1 --dry-run   # what would be vendored
npm run source:media -- --book biology --chapter 1             # vendor it
```

The tool reads each module's `<image src>` with its `<media alt>` and
`<caption>`, fetches the blob from the pinned commit (`git show
<commit>:media/<file>` — the sparse checkout deliberately excludes
`media/`), resizes to ≤800 px and ≤1600 px wide without ever upscaling,
encodes WebP (quality 82), and writes `<stem>-<width>.webp` plus the
manifest entry (dimensions, variants, source alt, source caption, source
SHA-256). It needs `sips` and `cwebp` (Homebrew `webp`) locally; CI never
runs it because the outputs are committed. Re-running is a no-op for
unchanged sources. Commit the WebP files and the manifest with the pages
that use them.

**Using a figure** (the shortcode is shown in the core, §3):

- `src` is `<book>/<stem>` where the stem is the source file name without
  its extension (the manifest key). Keep the source stem; it is how a file
  traces back to its module.
  When two DIFFERENT source files share a stem (m66555 references both
  `Figure_B23_03_07.jpg` and `Figure_B23_03_07.png`), `vendor-media` keys
  each by stem plus lower-cased extension — `Figure_B23_03_07-jpg` and
  `Figure_B23_03_07-png` — so select figures by the manifest's `module`
  field, never by guessing the stem from the figure number. Whitespace in
  a source file name folds to `_` (m66400's `Figure 28.48ab.png.jpg` is the
  stem `Figure_28.48ab.png` — only the last extension is dropped) because a
  space would split the figure's `srcset` entry in two.
- The caption is the source caption, credit line included and verbatim
  (the credit is a license obligation, not decoration).
- The first figure on a page may take `eager="true"`; every other figure is
  lazy-loaded.
- Small diagrams stay small: the `<img>` carries the largest vendored width,
  so a 430 px source renders at 430 px, and photos render at the column
  width. On the dark theme a **diagram** sits on a white plate (it was drawn
  for white paper) while a **photo** is left alone; the manifest guesses the
  kind from the source file type (JPEG = photo, otherwise diagram) and
  `kind="photo"` / `kind="diagram"` on the shortcode overrides it. **Set it
  explicitly on every figure after looking at the image** — the guess fails
  on a PNG photograph or a JPEG flow chart. Nothing is ever inverted: a
  micrograph inverted would be a different micrograph.

**Image-accessibility policy** (every figure, no exceptions):

- `alt` is required. Start from the manifest's source alt (the CNXML `<media
  alt>`); keep it when it says what the figure shows and teaches. Rewrite it
  when it is a bare "Photo depicts …" that omits the point the caption or
  prose makes, when it names the print figure letter without saying what (a)
  and (b) are, or when it describes the picture but not the relationship
  the figure exists to show. The alt must not repeat the caption (lint) —
  the caption is already read after it.
- `alt` and `longdesc` are plain text: no HTML tag inside either (lint). A
  screen reader voices `<sub>` as tag soup and a raw `>` truncates the
  `<img>` for every regex-based auditor. Use Unicode where a glyph exists
  (`X ᵂ`, `cᶜʰ`, `p²`) and words where it does not.
- `alt` is at most 600 characters (lint). Longer descriptions — flow charts,
  labeled anatomy, phylogenies, graphs with data — go in `longdesc`, which
  renders as a collapsed "Extended description" after the caption. A
  `longdesc` walks the figure in reading order: nodes and arrows of a flow
  chart, labels of a diagram top to bottom, the axes and the trend of a
  graph.
- No content is carried by an image alone. A label list that matters
  (organelles in a cell diagram, the steps in a flow chart) is also in the
  prose, the caption, or the `longdesc`.
- Read every vendored image at review: open the WebP, compare it with the
  PDF page, and confirm the alt and any `longdesc` against what is actually
  drawn, not against the source alt text. Write a `longdesc` from an
  inventory of the image taken first — panels, every printed label, every
  count, every arrow as `source → target` with both ends zoomed — and say
  whose left and right you mean (the viewer's, or the subject's in
  anatomy); see "Completion audit" below.
- A mediafigure directly above an item — only whitespace between its closing
  tag and the next `textin`/`multiplechoice`/`selfcheck` — may not print that
  item's answer in `alt` or `longdesc` (lint). Describe what the figure
  shows, never what the item beside it asks for.


## Exercises

How a book's source exercise sets map onto components is the book's table
(`docs/subjects/biology.md` "Exercises", `docs/subjects/microbiology.md`
§2), because the sets differ — Biology 2e keys every exercise, Microbiology
keys some sets and not others. The component rules below are shared.

**Multiple choice.** Options are the source's, in the source's order, each
on its own line of the shortcode body; `answer` is the keyed option verbatim.
Write a hint that says where to look (regular sections only; the hint rules
under **Text recall** below hold for every item type). The text-mode distractor
rules are the core's (`docs/authoring-playbook.md` §3). The corpus-wide
answer-position gate measures each book on its own; if it fails, reorder with
a deterministic seeded shuffle and say so in `Changes:` — never hand-pick
positions.

**Self-check** (`selfcheck`). The question is the source's; the inner
content is the source solution, lightly reformatted into complete sentences
where the key is telegraphic, never extended with new claims. The learner
writes, reveals, and self-marks; nothing is graded, so a self-check never
substitutes for the one auto-graded item each Practice group needs. Life-sciences
selfchecks carry a rubric: `===CHECKS===` then 2–6 checkpoints, each a
clause of the source solution as it appears in the model answer (decompose
the solution's own sentences — never add a claim it does not make), so the
learner self-marks against the source's actual points. The rubric
requirement is a lint error for every life-sciences book. The lint proves
each checkpoint against the model answer by word overlap
(`phraseCoverage`, 0.8, no stemming, no stopword list), so a checkpoint is
the model answer's own words in the model answer's own inflections:
"complexes" for the model's "complex", or a connector the model does not
use, drops a short clause under the bar. Copy the clause; do not restate
it.

**Text recall** (`textin`). Built from the section's own `## Key terms`:
the meaning becomes the prompt, the term the answer. The shortcode is shown
in the core (§3); the rules specific to a term-built item:

- `textin` is **unpaired**, exactly like `fillin`: `{{</* textin … */>}}` with no
  closing tag and no self-closing slash. A closing `{{</* /textin */>}}` makes Hugo
  refuse the page ("does not evaluate .Inner, yet a closing tag was
  provided") and the lint rejects it; the `/>}}` spelling is not parsed
  by the repository tools.
- One to four words; the lint rejects longer answers — a definition is not a
  recall item. An `accept` member may run to seven words, so the full form of
  a correct answer is credited ("central dogma of molecular biology",
  "major histocompatibility complex class I") *(September 23, 2026)*.
- `accept` lists the spellings a correct learner might type, `|`-separated
  (`accept="a|b|c"` — a comma joins the items into one member the grader
  can never match, and the lint rejects it): an irregular plural or singular
  (`septa`, `bacteria`, `bacterium`), British spelling (`fertilisation`), a
  standard abbreviation (`DNA` for a keyed `deoxyribonucleic acid`, or the
  reverse). Grading already ignores case, diacritics, punctuation,
  hyphen-versus-space, and a leading article, and folds the regular plural
  both ways (a trailing `s`/`es` added to every listed form, or stripped
  from one whose last word is shaped like a regular plural — not
  `-ss`/`-us`/`-is`/`-ics`/`-ies` or digit + `s`), so do not list those.
  It also reads a term typed with its abbreviation or expansion in
  parentheses (`cyclic AMP (cAMP)`) as correct when each half grades correct
  on its own, so a combined `accept` member like `catabolite activator
  protein (CAP)` is unnecessary once both halves are listed *(September 23,
  2026)*. An accept member that normalizes to the answer (hyphen versus
  space, a leading article, `400 X` versus `400 x`) is rejected by
  `verify-section` — list only spellings the grader would otherwise miss.
  There is no typo tolerance by design: `ribozyme` must not pass for
  `ribosome`.
- The answer must not appear in the question — the lint refuses the retype
  hazard — so a prompt for `cell theory` cannot say "the theory of cells".
  Rephrase the meaning or pick a different term. The same rule covers the
  hint (the lint checks both since August 31, 2026): a hint that prints the
  answer or an accept member ("The section abbreviates this process BNF"
  beside `accept="BNF"`) hands the item to exactly the learner who opens
  it. The same care extends to the OTHER items' hints on the page: adding
  an item keyed "glucose" beside a sibling whose hint says "converted to
  glucose" hands it over just the same. That one is a checker duty, not a
  lint — ordinary vocabulary recurs in sibling hints too often — so a
  checker reads every hint on the page against every new key.
- A hint says WHERE to look — a subsection, figure, table, or paragraph
  topic — never the key, a root or derivative of it, the fact the correct
  option asserts, or a fact the module never states; and nothing in the item
  directly above a `textin` — its stem, its options, or its hint — prints
  its key. The lint catches the literal forms since September 22, 2026
  (`tools/lint/lints-leaks.mjs`); a hint that states the correct option's
  fact instead of pointing at it, or a fact the module never states, is a
  checker read against its own key and options. It is the largest defect
  class this shelf has shipped. The forms that recur are translating the
  key's Greek or Latin root ("This process's name means 'cell drinking'"
  for pinocytosis), restating the glossary definition that IS the key, a
  paraphrase that eliminates every distractor by name, naming a heading
  whose title is the key, a `selfcheck` hint that lists its own rubric
  clauses, and a hint that steers away from a correct answer (an MHC hint
  saying the answer was "not the human-specific" abbreviation, so a correct
  `HLA` graded wrong). The author's test: cover the options, read the stem
  and hint alone, and if they answer the item, cut the hint to the
  location. Two of these forms are lint errors since September 23, 2026
  (`tools/lint/lints-leaks.mjs`): a `selfcheck` hint that covers two or
  more of its own `===CHECKS===` clauses (phrase coverage ≥ 0.8), and a
  `textin` hint that says "not X" of the key or an accept member, or "not
  the … abbreviation" when an abbreviation is accepted.
- **Prefer a `textin` key that its own `###` objective heading and the
  page title do not print** (singular or plural). The heading sits
  directly above the group, so a key it prints is copied rather than
  recalled; when the objective offers another glossary term or a summary
  cloze, use that. When it does not, the item stays: the heading is true
  content the learner has just read, and the item still reinforces it. A
  source item stays as printed either way. **This is an authoring
  preference, not a defect** *(September 23, 2026)*: checkers do not flag
  it, no lint checks it, and existing hits stay as they are.
- **Fix a leak without changing the item's type.** Reorder the group
  (recall items first), then reword the author item that prints the key,
  then reword the leaking `textin`'s own stem from its glossary sentence;
  never convert a `textin` to a multiple choice or drop it to escape a
  leak. The glossary and summary `textin`s are the part of the block
  `verify-source-keys` confirms against the module *(Sep 22, 2026)*.
- A multiple-choice hint may not print the keyed option (normalized, plural
  and singular folded) unless it names a distractor the same way (a
  contrast) or the stem already prints the key; a count key is exempt. Lint
  error since September 22, 2026. The same rule covers a hint that names a
  subsection whose title is the key ("the Copper, Nickel, and Zinc
  discussion") — point at it by position instead.
- Never a textin whose answer is a number, a formula, or a sentence: numbers
  are `fillin` territory, sentences are `selfcheck`. A number word is a
  number (`two`, `three`), and so is a measurement (`5.0 µm`). When a
  summary cloze's blank would fall on a count, blank a different phrase of
  the sentence, or make the count a `multiplechoice` whose options are
  counts. Lint error since September 23, 2026: a `textin` answer that is
  digits, a number word, or a number with a unit (or holds a
  number-and-unit run, `every 10 years`).

**Summary items.** The module's `<section class="summary">` is the largest
keyed corpus after the exercise sets, and it tests concepts where the
glossary tests vocabulary. Two forms, both built from a single summary
sentence with **no new claim**:

- a cloze `textin`: blank exactly one content phrase (≤4 words, the textin
  lint's cap) of the sentence; the surviving prompt must not contain the
  answer (the retype lint checks), and never blank a word the sentence
  defines in apposition — such a prompt answers itself;
- a select-the-term `multiplechoice`: the summary sentence as stem, 3–4
  distractors of the same category drawn from the same module's own terms;
  every option and every stem clause must appear in the module.

`verify-source-keys` reports a summary-sourced textin answer with the
`summary` provenance; a summary-built multiple choice counts as `unmatched`
(author-written) and rests on the ledger reading and the blind solve, so
the footer discloses it like any locally written item. When an objective
group runs thin, reach for a summary item before inventing anything else.

**Sort into bins** (`sortbins`). Built from a source comparison table whose
data columns name categories (prokaryote/eukaryote, plant/animal…): the
column headers become the bins, and each item combines a row label with its
cell value ("Origin of replication | Single | Multiple" → item "Single
origin of replication" binned under Prokaryotes). Keep the table itself in
the body as Markdown — the sortbins is its practice form, placed in the
Practice group of the objective the table serves. `verify-source-keys`
matches the bins to the table's data columns and fails any item that reads
strictly better under a different column than the one it is keyed to (a
deliberate deviation is `kind: "assignment"` in `DISCLOSED_DEVIATIONS`,
keyed by the table id); the orchestrator blind-solves the full label→bin
mapping like any other graded item. A table whose columns are quantities,
units, or steps rather than categories is not sortbins material — transcribe
it and move on. Syntax and the interleave/giveaway rules are in the core
playbook §3.

**Both table orientations qualify, and every qualifying table gets its
sortbins** *(Sep 6 2026)*. The categories may run along
the columns (prokaryote | eukaryote) or down the rows (a "Vegetative
Cells" row against an "Endospores" row; a stain-type column whose 2–4 rows
are the categories and whose other columns are their attributes) —
`judgeSortbins` reads both. A table with more than four category rows
takes the four the page's objective serves, or two sortbins under two
objectives, never a five-bin item. When a body Check Your Understanding
self-check or a Short Answer already asks the table's contrast ("What kinds
of specimens are best examined using TEM? SEM?"), convert THAT item into
the sortbins rather than adding a second item beside it — each thing is
asked once (`distinctItems`), and the aim is a more deterministic answer
form, not a longer Practice block. An older page is retrofitted the same
way: enumerate its Markdown tables, skip the quantity/unit/step tables,
and give each remaining one a sortbins under the objective it serves or in
the self-check it already answers.

**Unkeyed source questions: graded when the module fixes the answer**
*(Sep 6 2026)*. Some books (Microbiology) print no key for whole question
sets. Keep the question count where the source puts it and change the
ANSWER FORM wherever a deterministic one is honest: an unkeyed source
question becomes a graded item when ONE artifact of the same module fixes
its whole answer, and stays a `selfcheck` otherwise. The four honest forms:

- **A single body (or summary) sentence states the answer** →
  `multiplechoice`: the source question verbatim as the stem, the key in
  the sentence's own words, 2–4 distractors that are the module's own
  sibling terms or phrases of the same kind (other components, other
  scientists, other stains — never an invented option, never a claim the
  module does not make); or a `textin` when the answer is a defined term
  or a name of ≤4 words the sentence prints verbatim ("Name the device
  that is used to create thin sections…" → `ultramicrotome`).
- **The question offers its own alternatives** ("low or high frequency",
  "reflect, absorb, or transmit", "positive, negative, or differential",
  a Critical Thinking item printed with lettered options but no
  `<solution>`) → `multiplechoice` whose options are exactly those
  alternatives, in the question's order, keyed by the module sentence that
  settles it. The stem keeps the source's wording, alternatives included.
- **A comparison table or a compare-and-contrast pair of the module fixes
  a category assignment** ("Explain the difference between simple and
  compound microscopes", "Compare and contrast monotrichous, amphitrichous,
  lophotrichous, and peritrichous flagella") → `sortbins`: the bins are
  the categories the question names, the items the module's own
  distinguishing phrases, 4–12 of them, interleaved, no bin-label word on
  an item. A "which of these" question over the page's own list of
  structures ("Which of the following are important for adherence…")
  is the same form with applies/does-not-apply bins.
- **A lettered figure question whose key is a lettered panel or label the
  figure prints** ("Which of the micrographs above is a good example of
  staphylococci?") → `mediafigure` + `multiplechoice` with the letters as
  options, keyed from the image. The checker reads the key from the image
  independently, and the ledger note says `figure-keyed`.

**No source exercise is ever dropped, and "duplicate" is a claim to prove**
*(chapters 13–14)*. The choice is between graded and `selfcheck`, never
between rendered and absent: a question no module artifact can answer is
exactly the case the `selfcheck` exists for, and its model answer says what
the module supports and stops there. A reasonable-sounding footer sentence
("the module gives nothing to answer it with", "no single sentence fixes
it") is not a reason, and no automated gate catches the drop. An
end-matter exercise may be graded inside a body Check Your Understanding
item ONLY when the two stems are the same question in reworded form ("Name
at least two factors that can compromise…" against "What are some factors
that alter…"); a shared topic is not a duplicate ("Why is the soil a
reservoir for antimicrobial resistance genes?" and "Why do
antimicrobial-producing microbes commonly also have resistance genes?" are
different asks). Quote both stems in the ledger note when claiming the
fold, and never assert in the footer that a set is fully represented
without counting it. The same holds for wording and order: a source stem
or option is transcribed verbatim, and every reorder that changes two
source items' relative order is named in the footer.

**Restoring a question its own module cannot answer** *(September 23,
2026)*: it goes back as a `selfcheck` in source position. Its model answer
may draw on the section that teaches the point, with a cross-link and a
sentence saying so (Microbiology 7.2's isomer and dextrose questions,
answered from 7.1). A question the module DOES address keeps a model answer
within that one module. A question whose premise the book contradicts gets
a Source note inside the model answer.

It **stays a `selfcheck`** when the honest answer needs several module
sentences assembled (explain / describe / why questions whose module answer
is a paragraph), when the source asks the learner to speculate or argue,
when the answer is a list longer than a form holds (label nine microscope
parts), when any distractor would also be defensible from the module, or
when the key would need an inference the module does not print (the
L-form Gram-stain colour is reasoned, not stated — it stays prose).
"Explain" and "why" in the stem are a signal, not a verdict: "Explain why
dispersion occurs when white light passes through a prism" is one
sentence of the module and converts; "Explain how historical
understandings of disease contributed to attempts to treat and contain
disease" is five and does not.

Provenance is what makes the conversion honest, so every converted item:
keeps the source stem verbatim (a referent added for "this section" or
"above", nothing else — a `sortbins` may append the sort instruction the
form needs, "…by sorting each phrase under the microscope it describes",
or carry the instruction alone when the source question is a bare
"Name…" whose categories the bins already print; the ledger note quotes
the source question either way); names in its ledger note the ONE sentence, table,
or figure that fixes the key (`§ <subsection>`, quoted); is answered by
the checker from that artifact with the key covered and by the
orchestrator's blind solve like every other graded item; and is counted
in the footer's `Changes:` clause ("N of the source's unkeyed
Short Answer and Critical Thinking questions and M Check Your
Understanding questions are graded from the module's own sentences,
tables, or figures rather than answered in prose; the source prints no
key for them"). `verify-source-keys` reports such a `multiplechoice` as
`unkeyed` (the matched exercise prints no solution) and a converted Check
Your Understanding item as `unmatched` (a `<note>` is not an exercise, and
the tool reads the boxes' questions so that a body stem which resembles an
end-matter exercise is never paired with it); neither is a defect and
neither is confirmed — the ledger note and the solve are the readings.
"Never key a question the source does not key" survives as a checker duty:
a converted item whose key needs anything beyond the named artifact is a
defect, reported with the sentence that is missing. A hint on a converted
item follows the usual rules and must not print the key or the bin
assignment.

**What the first retrofit's checkers caught** *(Sep 6 2026)*, so the next
run checks for them on purpose:

- **A pre-existing hint becomes a leak the moment a self-check turns
  graded.** A hint on an untouched Practice item that stated "the other
  factor is wavelength" was harmless beside a self-check and hands over
  the key once the same fact is a `multiplechoice` or a bin. The page-wide
  read of every hint against every key must include the hints the diff did
  not touch, and the fix is to reword the OLDER hint.
- **Two new items built from one set of techniques re-ask each other.**
  A "which techniques are differential" `sortbins` and an "is endospore
  staining differential" `multiplechoice` asked the same fact twice. Check
  new items against each other, not only against the module.
- **A shared trait is not a sortbins item.** "A compound microscope with
  two or more lenses" is true of brightfield and of darkfield (the module
  defines darkfield as a modified brightfield). Every item must be true of
  exactly one bin by the module's own words.
- **An organism must be named, not described.** "A common gram-negative
  bacterium found in the gut" for *E. coli* is invented; the module only
  says *E. coli* shows a peritrichous arrangement. Label the item with the
  name the module prints.
- **A table cell with a qualifier does not generalize.** "Nearly all
  endospore-producing bacteria gram-positive as vegetative cells" is not
  "vegetative cells stain gram-positive"; drop the row rather than
  flatten it, and say so in the footer.
- **A distractor the page itself contradicts** ("their ribosomes are
  smaller than prokaryotic ribosomes") is invented even though it is
  wrong; build it from a module sentence.
- **A conversion that re-asks a source item's fact stays prose.** "How
  are viruses different" keyed on acellularity beside the source's "Which
  of the following is acellular?" is reverse recall; it stays a
  `selfcheck`.
- **Vary the key's position.** Authors building options from a module
  sentence put the key first by reflex, and the corpus-wide
  `mc-distribution` test fails the book. Place the key at a different
  position on each new item (source-keyed items and "the question's own
  alternatives" items keep their printed order).

**The `## Practice` block** follows the core rule — one `### ` group per
objective in callout order, every item from the source's keyed sets, the
summary, or the key terms, every regular-section item hinted — at the
life-sciences floor, published per book in `BOOK_RULES`
(`tools/lint/lints.mjs`): **the practice floor is 3 exercises per objective group and 8 per section** (the core default elsewhere is two/five) — plus the life-sciences rule that **each group holds
at least one auto-graded item** (`multiplechoice`, `textin`, or `sortbins`). Place a
source multiple choice under the objective it tests, a Critical Thinking
item under the objective it argues, and fill thin groups with key-term
recall.
Record every item in the source ledger with its exercise or definition id.

**Each thing once.** Every item on a life-sciences page — body self-checks
and the Practice block alike — is distinct under the practice-index signature
(`tools/lib/practice-index.mjs`): no two items share a normalized stem (two
multiple choices may, if their option sets differ), and no two clozes
reconstruct to the same sentence with the blank moved. The lint reports the
later item as an error (`distinctItems` in the book's `practice` profile,
`BOOK_RULES`; every life-sciences book is opted in) *(September 4, 2026)*.
Life sciences only: the signature reads words and drops signs and
operators, so a math stem's `2 + 4` and `-2 + (-4)` are one stem to it,
and the math books are not opted in. A thin objective group reaches for a
different summary sentence, a glossary term, or a body passage — never a
second blank in a sentence already asked.

The lint is exact; a reworded re-ask is the author's and the checker's to
catch. The commonest form is **reverse recall inside one page**: a
glossary `textin` asking for a term that a source Review Question on the
same page already keys or asks about (Biology 3.1's `hydrolysis` beside a
source multiple choice keyed on it). Before writing a glossary recall
item, read the source items of the page and skip any term a source stem or
key already tests — the source item stays and the term stays a Key-terms
bullet. A page whose unit already has a Knowledge Check is checked against
it too: grep the check for every new key before settling an item (the
duplicate-stem lint catches an exact collision, not a reworded one).

## Verification

- `npm run verify-section -- <page>` runs the lints and self-grades every
  `textin` (answer and each accept member), checks every `selfcheck` has a
  model answer, and checks every `mediafigure` resolves to the manifest.
  `npm test` then runs the ledger gate, so every new exercise needs a
  reading verdict before the tree is green.
- **Reading pass verdicts.** `ok` on a multiple choice means
  the keyed option is the one the section's own text supports and no
  distractor is also supportable; on a `selfcheck` it means the model
  answer is the source solution and answers the question as asked; on a
  `textin` it means the prompt names exactly one glossary term and the
  accept list covers its ordinary variants. Nothing is computed; the checker
  reads the exercise against the CNXML solution and the section prose.
- **Independent checker.** One per section, briefed by the book's kit
  (`docs/briefs/<book>/checker.md`): re-read every Practice item against
  the raw CNXML exercise and solution (not the page), every figure against
  its image, and every key-term item against the source definition; report
  defects to the parent, which owns the errata file and the ledger merge.
  **It runs on Opus** *(September 22, 2026)*: Sonnet checkers passed pages
  with 7–10 confirmed defects each; keys held everywhere, so the gap is the
  leak, hint, accept, and figure reading, which is model-bound. Three
  duties no gate performs: (1) answer every graded item with the key
  covered BEFORE comparing — a distractor the module also makes true is
  common on section pages and checks alike; (2) run the real grader on
  every natural variant of every `textin` (the full name with and without
  its head noun "system/cell/group", the module's synonyms and
  abbreviations, irregular plurals, hyphen versus space); (3) read every
  model answer and rubric clause for a claim the module never makes.
- **Prose claim pass** *(chapter 4 of Microbiology, September 6, 2026)*.
  The key, transcription, and figure readings above prove the page says
  what the module says; none of them asks whether the module is right.
  This fourth reading is required, not optional:
  - **What is read.** Every quantitative or mechanistic claim in the
    section prose, summary, key-term definitions, and figure captions — a
    product, a reactant, a number with a unit, a mechanism, a taxonomic
    placement, a "formerly"/"also called" — not style, not emphasis.
  - **Evidence, in order.** First the rest of the same book (a claim one
    section makes that another section contradicts is a defect on the
    module's own terms; cite both element ids). Then, only if the book is
    silent, ONE citable primary or standard reference (a journal article
    with a DOI, LPSN for nomenclature, a named reference text with an
    edition). General knowledge, a training-memory "I believe", or a
    web summary is not evidence and does not overrule the module.
  - **What happens.** In-book contradiction or a citation → correct the
    claim on the page with a visible source note, a
    `reconciliation-decisions.json` entry, a footer `Changes:` sentence,
    and an erratum quoting the passage and the evidence — the same
    handling as a corrected key. A suspicion with no evidence either way
    → ship as printed and list it under "Reviewed and *not* errata" with
    the reason, so the next reader does not re-investigate it. A claim
    that is loose but defensible on the module's own terms → as printed,
    same list. Distractors are claims too: a distractor that is true — by
    the module, the book, or a citation — is a double-keyed item (see the
    text-mode distractor rule); replace it, disclose it, log it. The
    fill-in half *(September 23, 2026)*: when the module lets a second
    word fill a source Fill in the Blank or `textin` blank, add it as an
    `accept` member; an erratum only when the source's own solution is
    wrong.
  - **Where the retroactive sweep stands.** `docs/source/claim-pass-ledger.md`
    lists every chapter of every life-sciences book with its pass status,
    date, and errata; update it when a chapter lands.
  - **Who.** The chapter's independent checker, on every section, before
    the orchestrator's solve pass; the parent verifies every flagged
    claim against the cited evidence before editing. A checker that
    reports "no claim findings" must say which claims it checked and
    against what, not just that it found nothing.
- **External links.** `npm run check:external-links` (report-only, needs
  the network; `--only-openstax` restricts it to the `openstax.org/l/`
  redirects, `--json out.json` keeps the table) follows every external URL
  printed in the content tree and classifies the answer: `ok`, `blocked` (a
  403/406/429 to a script is a bot wall, not a dead page), `unreachable`
  (a TLS or DNS failure in Node's fetch — confirm with `curl -L` before
  believing it), `error`, or `dead` (404/410). A confirmed dead link is not kept as a link: the callout keeps the
  sentence and names the resource and its site in plain text ("the 3-D
  animation of an ice lattice structure (*Ice Movie Resources* at
  janewhitney.com)") so a reader can search for it, the footer's
  `Changes:` clause discloses the redirect, the destination, and the date
  it returned 404, and the erratum records the same. A 302/redirect chain
  that never lands is left linked and noted, not removed — only a
  confirmed 404/410 on a full GET counts.
- **Errata.** Confirmed source defects (a keyed answer the section
  contradicts, a distractor that is also true, a caption credit that names
  the wrong image) go in `docs/openstax-errata.md` without asking, with the
  module id, element id, and evidence.
- **Two source exercises with the same stem.** `verify:source-keys` pairs
  a page item with the source exercise whose stem reads most like it; when
  two exercises in one module share a stem verbatim (m66559's two Visual
  Connections both ask "Which of the following statements is true?") the
  page item's option list breaks the tie. A `key-differs` report naming an
  exercise whose options are not the page's is that collision, not a wrong
  key — check the exercise id before editing anything.
- **A source solution that keys two letters.** "A and B. The cortex, pith,
  and epidermis are made of parenchyma cells." (m66597's Visual Connection)
  keys two options against a list where only one is defensible.
  `verify:source-keys` reads a letter list as more than one key and reports
  `key-differs` whatever the page keys, so the item needs an erratum and a
  `DISCLOSED_DEVIATIONS` line (kind `key`) naming the option the module's
  own text supports.


## Knowledge checks

Cumulative assessments for a life-sciences book are written to
`docs/knowledge-check-playbook-life-sciences.md`: three items per section,
author-written from the module text, no hints, and a reverse-recall sweep
as a wave of its own. Placement — one page per unit for a book whose
collection has units, one per block of chapters for a flat book — is
recorded in the book's playbook. Read the life-sciences edition, not the
math one, before building one.

## Completion audit

When a book's last section and last Knowledge Check have landed, one more
pass is due that the per-section gates do not perform: a cold random
sample (seeded, stratified by unit or by chapter block) read by fresh
Opus checkers briefed to answer each item before opening the page, then
to check page against CNXML, and to read every sampled image before
judging its alt and longdesc; the parent verifies every flag on the image
or the module. No audit has found a wrong source key; the rest depends on
the reader's model. Opus samples found 7–10 confirmed defects per page,
two-thirds of them hints, where a Sonnet sample had found about 1 in 90
items. Plan the sample on Opus and by the Opus rate.

**Image-first alt pass (required).** The sample is not the end of the
figure work: after it, every `mediafigure` in the book gets one more
reading by a fresh checker (one per chapter) who opens the image and
writes down what is drawn — panels, labels, colours, arrows, counts, scale
bars — BEFORE reading the alt, caption, `longdesc`, or source alt, then
compares claim by claim, because an alt read first anchors the reader to
its plausible count, colour, or label. The parent verifies every flag on
the image (the checkers' own mis-counts are the largest rejected class),
fixes the page, and writes an erratum for each claim inherited from the
source alt. Counts, colours, directions, and "labeled" claims are where
defects cluster. The kit is `docs/briefs/alt-pass/` (checker brief, run
shape) with `tools/source/alt-pass-packets.py <book> <out-dir>` building
the packets; the records are in `docs/history/biology.md` and
`docs/history/microbiology.md`, "Figure-alt pass".

**Image-first is not enough for a `longdesc`: read it by inventory**
*(September 22, 2026)*. After both passes, most `longdesc` figures were
still wrong — arrows joined to the wrong box or pointing the wrong way,
a panel row dropped, bracket endpoints off, a structure the art does not
draw, printed labels left out. Image-first readers missed detail, not
order. So a `longdesc` is written and checked against an inventory taken
from the image before any words are read: every panel and row, every
printed label and number, every count, and every arrow as `source →
target` with both ends zoomed (crop and upscale small print with PIL);
then each sentence is ticked against it, each drawn arrow that carries the
figure's meaning is described, and each printed label is found in the
alt, `longdesc`, caption, or an adjacent table. The alt-pass kit runs this
method on Opus, `longdesc` figures first.

**Figure, alt, and `longdesc` reading and fixing run on Opus, never
Sonnet** *(September 23, 2026)*: an Opus second read found most Sonnet
"clean" verdicts wrong and most Sonnet fixes regressions, and Sonnet plus
an Opus check cost more than Opus alone. Sonnet stays right for
checklist-shaped text work (compiling lists, drafting errata from
verdicts). Whatever model a task is first delegated to, the parent
spot-checks one "clean" verdict against the image after its first unit.

## Done checklist (in addition to the core checklist)

- [ ] chapter media vendored, every alt read against the image, `longdesc` on every diagram whose meaning is not in its caption
- [ ] every feature box a callout with its bold name; every Link to Learning URL kept
- [ ] `## Summary` and `## Key terms` transcribed in full, in source order
- [ ] Practice: every group has an auto-graded item; every source exercise set represented; key-term recall items lint-clean; every comparison table has its `sortbins`; every unkeyed question that ONE module artifact fixes is graded, and every pre-existing hint on the page read against every new key
- [ ] every hint names a location and, with the options covered, does not answer its item; no `textin` re-asking a source item; footer counts copied from the tally
- [ ] every `longdesc` checked against an arrow/count/label inventory of the image
- [ ] prose claim pass run by the checker on every section; every corrected claim carries a source note, a decisions entry, a footer sentence, and an erratum; every dismissed suspicion is in "Reviewed and *not* errata"
- [ ] footer: CC BY-NC-SA 4.0, deep link, full `Changes:` clause
- [ ] `npm run verify-section`, `npm test`, ledger verdicts merged, `node tools/source/openstax-source.mjs build-map` rerun and the map committed
