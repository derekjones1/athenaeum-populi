# Chemistry — subject playbook

Pinned November 9, 2026; the engine work below landed the same day. No
section is authored yet. This file records the source, the decisions made,
the notation and grading rules the engine now enforces, and what the chapter
1 pilot still has to settle. A rule here is operative when it says
**Decided** or names the lint or test that holds it; everything under "What
the pilot settles" is open.

`docs/authoring-playbook.md` is the shared core. Chemistry is the first book
that is neither a math book nor a life-sciences book. Its prose, key terms,
feature boxes, and figures are shaped like the life-sciences books', so it
inherits `docs/subjects/life-sciences.md` "Notation" and "Media: vendored
figures" except where a rule below differs. Its graded items are numbers, so
its fill-ins follow `docs/subjects/math.md` "Fill-in answer shapes" with the
measured-quantity tokens described here.

## Source and authority

- **Pinned source:** `openstax/osbooks-chemistry-bundle` at the commit in
  `data/openstax/source-lock.json` (bundle `chemistry-bundle`, book
  `chemistry`, collection `chemistry-2e`, `col26069`). The repository also
  ships *Chemistry: Atoms First 2e*, which shares 122 of the 149 modules, so
  the checkout is scoped to the Chemistry 2e collection
  (`moduleScope: "mapped-collections"`, 149 modules);
  `npm run source:fetch -- --bundle chemistry-bundle` materializes it.
- **Visual authority:** `sources/chemistry-2e_-_WEB.pdf` (generated
  2026-04-20, 1,203 pages). The baseline is the last upstream commit before
  that date, `7d41ed00` (April 15, 2026).
- **The pin postdates the PDF.** 65 upstream commits separate the baseline
  from the pin, nearly all errata, touching 34 of this book's modules.
  Where the PDF and the CNXML disagree in one of those modules, run
  `git diff 7d41ed00 HEAD -- modules/<id>` in the checkout before logging an
  erratum: the difference may be a correction the PDF predates. Module
  `m68727` (5.3 Enthalpy) was rewritten wholesale in the last commit
  (7,823 lines added, 836 removed) and needs a real read against the PDF
  when chapter 5 is authored.
- **Structure:** flat — 21 chapters, no units, 114 numbered sections
  (chapter 18 has 12). Each chapter's first module becomes the chapter
  `_index.md`. The preface (`m68662`) and the 13 appendices
  (`m68859`–`m68871`: the periodic table, Essential Mathematics, and eleven
  data tables) are not mapped.
- **License:** the pinned `LICENSE` and the collection metadata say
  **CC BY-NC-SA 4.0**. Senior contributing authors for the footer: Paul
  Flowers, Klaus Theopold, Richard Langley, William R. Robinson.

## Where the files go

`content/physical-sciences/chemistry/NN-chapter-slug/NN-section-slug.md`,
with `NN` the upstream chapter and section numbers. The cover lists chapters
as plain bullets — the source has no units and none are invented. The lock's
`authoringStatus` is `scaffolded` and the cover's `authoring_status` copies
it; both move to `in-progress` with the first authored chapter.

## What the scan found

| | Count |
|---|---|
| End-of-section exercises (`section class="exercises"`) | 1,736 |
| … with a `<solution>` | 873 |
| Worked `<example>`s | 301 |
| … with a "Check Your Learning" twin and an `Answer:` note | 288 |
| `m:math` expressions / display `<equation>`s | 5,367 / 1,558 |
| Struck-through terms (`m:menclose`, unit cancellation) | 273 |
| Inline `<sub>` / `<sup>` (formulas, charges, exponents) | about 7,500 / 3,500 |
| Image references (all JPEG) | about 1,150 |
| … inside a captioned `<figure>` | about 625 |
| … outside one (text, examples, exercise stems, solutions) | about 490 |
| Tables | 191 |
| Modules with a `<glossary>` / definitions | 109 / 766 |
| `key-equations` sections | 43 |

- **Only the odd-numbered exercises are keyed**, as in the printed book,
  and none is multiple choice. Of the 1,160 keyed answers (exercises and
  Check Your Learning together), about 400 are one short number with a
  unit; the rest are sentences, lettered multi-part answers, formulas,
  names, and 65 that are drawings.
- **Objectives** are in `md:abstract` (the math and Biology shape).
- **Feature boxes** (`<note class>`): `link-to-learning` (95),
  `everyday-life` (44), `sciences-interconnect` (19), `chemist-portrait`
  (10).
- The parser's `EXCLUDED_CORE_SECTION_CLASSES` gained `exercises` and
  `key-equations` for this book.

## Notation

**Decided November 9, 2026.** One rule decides every case: **a formula in a
sentence is Unicode text; a formula inside math is `\ce{…}`.**

**In prose** — body text, table cells, captions, alt text, exercise stems,
options, hints — formulas and ions are written with Unicode sub- and
superscripts exactly as in the life-sciences books: `H₂O`, `SO₄²⁻`, `Fe³⁺`,
`CuSO₄·5H₂O`, `¹⁴C`, `1s²2s²2p⁶`. The lint that refuses the ASCII spelling
(`H2O`, `Fe3+`) runs on this book with the whole periodic table, where the
life-sciences books read a short element list. A quantity is prose too:
`15.00 g`, `75.0 mL`, `128.9 g/mol` — never `$15.00\ \text{g}$`, which in
an exercise string is spoken as "15.00g".

**In math** — every source `<equation>`, and any inline span that is
mathematics — a formula is `\ce{…}`. Hugo's embedded KaTeX carries the
mhchem extension, so nothing is loaded:

| Write | For |
|---|---|
| `$$\ce{2H2(g) + O2(g) -> 2H2O(l)}$$` | a reaction: coefficients, counts, and state symbols typed plainly |
| `\ce{N2(g) + 3H2(g) <=> 2NH3(g)}` | an equilibrium arrow |
| `\ce{CaCO3(s) ->[\Delta] CaO(s) + CO2(g)}` | a condition over the arrow |
| `\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)}`, `\ce{SO4^2-}`, `\ce{Mn^2+}` | charges: a trailing sign, or `^` before a numbered one |
| `\ce{^{238}_{92}U -> ^{234}_{90}Th + ^{4}_{2}He}` | a nuclide with both numbers (inline too: Unicode cannot stack them) |
| `\ce{CuSO4*5H2O}` | a hydrate |
| `\ce{…} \qquad \Delta H = -92.2\ \text{kJ}` | a thermochemical equation: the formula in `\ce`, the rest ordinary math |
| `\begin{aligned} \ce{C(s) + O2(g) &-> CO2(g)} & \Delta H &= … \end{aligned}` | steps aligned at the arrow |

- **A formula set by hand in math is a lint error**: bare `H_2O` (math sets
  letters italic, as variables), `\text{H}_2\text{O}`, and `\mathrm{H_2O}`
  all render, and none matches the formulas mhchem sets beside it. The rule
  leaves alone what it cannot tell from variables — `P_1V_1 = P_2V_2`,
  `C_1V_1 = C_2V_2`, a lone `N_2` — so those are read on the rendered page.
- **Symbols for quantities are ordinary math**: `$K_\text{sp}$`,
  `$\Delta H^\circ_\text{f}$`, `$P_1V_1 = P_2V_2$`. A numeric exponent is
  math, as everywhere: `$6.022 \times 10^{23}$`.
- **State symbols** are upright inside `\ce{…}` (mhchem follows IUPAC) and
  italic in prose as the book prints them: `H₂O(*l*)`. A lowercase upright
  `l` in the body font is not distinguishable from `I` or `1`.
- **A cancelled unit is `\cancel{\text{…}}`**:
  `$$4.7\ \cancel{\text{g K}} \times \frac{1\ \text{mol K}}{39.10\ \cancel{\text{g K}}} = 0.12\ \text{mol K}$$`.
  The book prints a horizontal strike, which is hard to read through two
  small letters; the diagonal one means the same and is the usual mark. The
  footer of a page that uses it says "unit cancellation set with a diagonal
  strike".
- **The Node gates render with the same extension.** `npm run lint` and
  `npm run verify-section` typeset every math span through
  `tools/lib/katex.mjs`, which loads mhchem; a gate importing `katex`
  directly would call every `\ce` an undefined control sequence
  (`tools/lib/katex.test.mjs` refuses one).
- **Accessible names.** MathLive, which speaks a fill-in's question and a
  multiple choice's options, does not read mhchem, so
  `assets/js/lib/shared/speakable-label.mjs` spells each `\ce{…}` in the
  prose Unicode before the rest is serialized: a compound sounds the same
  in a sentence and in a label.
- **A `textin` question cannot print a power of ten**: it takes no `$…$`
  math, and a Unicode exponent (`10²³`) is a lint error. Word the stem
  without the number, or use `multiplechoice`.

## Graded items

**Decided November 9, 2026: a graded item needs a source key.** The graded
pool is the 873 keyed end-of-section exercises and the 288 Check Your
Learning items. The 863 unkeyed exercises are not given author-derived
keys.

### Measured quantities: `sig-figs:<n> last-digit:<k>`

A computed quantity is keyed with the digits its data support (`0.674 M`,
`4.585 × 10²² atoms`), and the digits are part of the answer. The ordinary
fill-in comparison (to nine places) marks a learner wrong for `0.675` when
their molar mass came from another periodic table, and any tolerance wide
enough to take that would also take the unrounded readout `0.67442`. So a
measured quantity declares both tokens, and the comparison is made at the
key's own precision:

```
{{</* fillin
  question="Calculate the molarity of 6.52 g of CoCl₂ (128.9 g/mol) dissolved in an aqueous solution with a total volume of 75.0 mL. Enter the molarity in mol/L."
  answer="0.674"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.674\ M$"
  hint="Convert the mass to moles and the volume to liters first."
*/>}}
```

- **`sig-figs:<n>`** (1–9): the answer is written to n significant figures.
- **`last-digit:<k>`** (0–2): the response, rounded to n figures, may differ
  from the key by k units of the nth digit.
  - **`last-digit:0`** when the last digit is determined: a rounding
    drill, arithmetic on printed numbers (1.5's "report with the correct
    number of significant figures"), a conversion by exact factors.
  - **`last-digit:1`** when it is the uncertain digit: anything computed
    from measured data through a molar mass, a physical constant, or more
    than one step.
  - Both tokens are always declared together — the allowance is the one
    judgment the pair asks of an author, so neither value is a default —
    and `sig-figs:1` takes `last-digit:0` (lint).

What the learner sees, against the key `0.674` under `sig-figs:3 last-digit:1`:

| Typed | Verdict | Feedback |
|---|---|---|
| `0.674`, `0.675`, `0.673`, `6.74×10⁻¹`, `6.74e-1` | correct | |
| `0.67442` | form | "That value is right — now round it to 3 significant figures." |
| `0.67` | form | "That agrees with the answer as far as it goes — now give it to 3 significant figures." |
| `6.52/128.9/0.0750` written as a fraction | form | "…now finish the calculation and enter just the result, to 3 significant figures." |
| `0.674 M`, `0.674 mol/L` | unit | "Right number — enter it without the unit." |
| `0.676`, `0.6` | incorrect | |

Rules for the key and the stem:

- **The key is one number**, a decimal or `a\times10^{n}`, written to the n
  figures it declares. A list, a pair, or an expression cannot declare
  `sig-figs` (lint): an answer of two quantities (`5371 °F, 3239 K`) is two
  fill-ins.
- **The stem names the unit**, and the key carries none: "Enter the
  molarity in mol/L", "Enter the value in kJ/mol, with its sign". A learner
  who types the unit after the right number — one letter included — is told
  to drop it.
- **Count n from the source's answer, and say it when zeros hide it.** A
  whole number ending in zeros shows two or three figures (`350 bar`):
  declare the count the data support. The plain response `350` satisfies
  either count; `3.5 × 10²` shows two figures and `3.50 × 10²` three.
- **Either notation is accepted** unless the ask names one: add
  `scientific-notation` when the stem says "in scientific notation" (a
  calculator's `4.585e22` is then `form`), or `decimal` to require a plain
  decimal.
- **A percent** is keyed bare with the stem naming it ("Enter the percent
  yield as a number, without the percent sign"); a typed `%` is then a unit.
  A key ending in `\%` declares `percent` as well.
- **A count or an exact integer** (protons in an atom, a reaction order) is
  not a measured quantity: `decimal`, as in the math books.
- **Typing a two-digit exponent works.** In a measured-quantity field every
  digit typed after `^` stays in the exponent, where the math books' fields
  leap out after one.

## Figures

**Decided November 9, 2026: every image ships as the source's raster
through `mediafigure`**, under `docs/subjects/life-sciences.md` "Media:
vendored figures" — its vendoring, its alt and `longdesc` policy, and its
rule that every claim comes off the artwork. Nothing is redrawn: the math
books' analytic-primitive rule governs figures this project draws, and a
Lewis structure redrawn by hand is a chance to move an electron pair,
several hundred times over.

`npm run source:media -- --book chemistry --chapter N` vendors a chapter
(verified on section 7.3: 77 images, 568 KB). Every image upstream is a
JPEG, so the manifest guesses `photo` for all of them: **set `kind` on every
figure**; nearly everything outside a chapter-opening photograph is a
`diagram`.

About 490 images sit outside any captioned figure. Each shape has one
answer:

| The source has | Write |
|---|---|
| a structure or diagram in running text or a worked example | a `mediafigure` where the source places it, **with no caption** (the source prints none), `kind="diagram"`, and an alt read off the artwork |
| an image in an exercise stem | the `mediafigure` directly above the item, the stem saying "the figure above" or "shown above" so the answer ledger binds the two; the alt describes what is drawn and never states the answer |
| a drawing as the keyed answer ("Write the Lewis structure for…") | a `selfcheck` whose model answer is the `mediafigure` followed by one or two sentences saying what the drawing shows; the rubric clauses come from those sentences |
| a table printed as an image (the ICE tables of chapters 13–15) | a Markdown table transcribed from the image, the image dropped, and the footer saying so |

```
{{</* selfcheck question="Write the Lewis structure for arsenic trifluoride, AsF₃." hint="Count the valence electrons first." */>}}
{{</* mediafigure src="chemistry/CNX_Chem_07_03_Question7c_img" kind="diagram" alt="A Lewis structure: an arsenic atom with one lone pair, single-bonded to three fluorine atoms, each with three lone pairs." */>}}
{{</* /mediafigure */>}}

Arsenic is the central atom, single-bonded to three fluorine atoms. Arsenic keeps one lone pair, and each fluorine atom has three lone pairs.
===CHECKS===
arsenic is the central atom
single-bonded to three fluorine atoms
each fluorine atom has three lone pairs
{{</* /selfcheck */>}}
```

A drawing answer is never converted to a multiple choice: the source keys
one structure and prints no wrong ones to offer.

## Knowledge checks

Decided November 9, 2026: **one check per block of chapters, seven pages.**
The book is flat, so blocks follow the content, and uneven blocks are
accepted where chapters belong together.

| Block | Chapters | Sections | Content |
|---|---|---|---|
| 1 | 1–3 | 17 | matter and measurement, atoms and ions, the mole and solutions |
| 2 | 4–5 | 8 | reaction stoichiometry and thermochemistry |
| 3 | 6–8 | 15 | electronic structure, bonding, and molecular geometry |
| 4 | 9–11 | 17 | gases, liquids and solids, solutions |
| 5 | 12–15 | 21 | kinetics and equilibrium, including acid-base and solubility |
| 6 | 16–17 | 11 | thermodynamics and electrochemistry |
| 7 | 18–21 | 25 | descriptive, coordination, organic, and nuclear chemistry |

## What the pilot settles

The chapter 1 pilot writes the page skeleton and these rules; none is
decided:

- the practice floor (the book runs on the `default` `BOOK_RULES` profile
  until the pilot measures what the keyed pool supports per section) and the
  Knowledge Check quota per section;
- the printed names of the four feature boxes, confirmed from the PDF, and
  their callout mapping;
- the item form for a keyed answer that is a formula, a name, an
  explanation, or a balanced equation;
- whether an unkeyed even exercise is omitted or shown as an ungraded
  prompt;
- how the gates read this book: `verify:source-keys` against the
  `exercises` section class and the Check Your Learning notes,
  `verify:source-coverage`, and the `verify:ledger` `--require-solved` and
  `--require-provenance` prefixes, all of which name the life-sciences
  shelf today;
- a browser spec for a measured-quantity fill-in. The grader, the lint, and
  the spoken labels are unit-tested, but three behaviours exist only in a
  browser and were checked by hand on a scratch page: a two-digit exponent
  typed after `^` stays in the exponent, a unit typed after the right number
  reports `unit`, and the field's accessible name speaks a `\ce{…}`
  formula. The first authored page is the first place the suite can assert
  them;
- the briefs (`docs/briefs/chemistry/`), modelled on the Anatomy and
  Physiology kit.
