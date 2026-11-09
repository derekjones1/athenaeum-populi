# Chemistry — subject playbook

Scan-stage file, written November 9, 2026, when the book was pinned. No
section is authored yet. It records the source, the decisions already made,
and the work that has to land before the chapter 1 pilot. The authoring
rules themselves are not written: the pilot writes them, and nothing below
should be read as one unless it says **Decided**.

`docs/authoring-playbook.md` is the shared core. Chemistry is the first book
that is neither a math book nor a life-sciences book: its graded items are
numeric like math's (`docs/subjects/math.md`), and its prose, figures, key
terms, and feature boxes are shaped like the life-sciences books'
(`docs/subjects/life-sciences.md`). Which rules it inherits from each is an
open item for the pilot.

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
| Image references (all JPEG) / `<figure>`s | 1,156 / 627 |
| Tables | 191 |
| Modules with a `<glossary>` / definitions | 109 / 766 |
| `key-equations` sections | 43 |

- **Only the odd-numbered exercises are keyed**, as in the printed book,
  and none is multiple choice. Every keyed solution contains a number.
- **Objectives** are in `md:abstract` (the math and Biology shape).
- **Feature boxes** (`<note class>`): `link-to-learning` (95),
  `everyday-life` (44), `sciences-interconnect` (19), `chemist-portrait`
  (10). Their printed names are to be confirmed from the PDF in the pilot.
- **Image alts** are long (median 480 characters), unlike A&P's.
- The parser's `EXCLUDED_CORE_SECTION_CLASSES` gained `exercises` and
  `key-equations` for this book.

## Graded items

**Decided November 9, 2026: a graded item needs a source key.** The graded
pool is the 873 keyed end-of-section exercises and the 288 Check Your
Learning items. The 863 unkeyed exercises are not given author-derived
keys; whether they are omitted or shown as ungraded prompts is a pilot
decision.

Not decided — the pilot settles each:

- the item form for a numeric answer with a unit, and how significant
  figures are graded;
- the form for a keyed answer that is an explanation, a formula, a name, or
  a balanced equation;
- the practice floor. The book runs on the `default` profile in
  `BOOK_RULES` until the pilot measures what the keyed pool supports per
  section.

## Engine work before the pilot

None of these exists yet, and the pilot cannot start without the first
three:

1. chemical formulas, charges, and reaction equations in prose, display
   equations, and exercise stems;
2. unit-cancellation strike-throughs in worked solutions;
3. numeric answers graded with a unit and a significant-figure rule;
4. figure policy for structural formulas, Lewis structures, and orbital
   diagrams, which are all raster JPEGs upstream.

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

The per-section quota and the file weights are not decided; they are set
when block 1 is authored.
