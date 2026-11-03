# Biology 2e — history

Dated records moved out of the operative playbook, kept for provenance.
Both sections below were cut verbatim from `docs/subjects/biology.md`.

## Completion audit record (September 5, 2026)

After the last Knowledge Check landed, the book was declared complete on
the strength of one more pass that the per-section gates do not perform:
a cold random sample read by fresh checkers, the way the Knowledge Check
audit had already sampled its own items. The draw (seeded, stratified by
unit) was 174 Practice items and 62 figures over 8 Sonnet checkers, one
per unit, briefed to answer each item before opening the page, then to
check page against CNXML, and to read every sampled image before judging
its alt and longdesc. Results, after the parent verified every flag on
the image or the module:

- **Items:** 0 wrong keys, 0 unprinted or also-defensible distractors,
  0 rubric defects in 174. Two real item defects: a hint that restated
  the glossary definition of its key (19.3 diversifying selection) and an
  accept list missing the noun phrase its stem invites (20.1 "rooted" →
  "rooted tree"). One checker "defect" was a disclosed adjudication
  (8.3's double-keyed option, erratum 116) and was not a defect.
- **Figures:** 5 alt/longdesc defects in 62 — a scan path described in
  the wrong direction with the wrong colours (10.2), an inset whose
  colour-to-bone mapping omitted the shape the caption names (29.6), a
  "numbered carbons" claim with no numbers drawn (3.2), "pink buds"
  inherited from a source alt the photo contradicts (26.2, erratum 319),
  and "embryo" for a nine-week fetus (43.5). One source defect the sample
  surfaced without a page fix: a micrograph's printed scale bar reads
  150 μm where the source alt says 150 nm (16.3, erratum 318).
- **A class no gate saw:** a shortcode parameter written twice. Hugo's
  `.Get` keeps the last value and drops the rest silently, so a textin
  with `accept="greenhouse gasses"` on one line and `accept="greenhouse
  gas"` on the next graded only the second. A corpus scan found two such
  textins and one mediafigure with a repeated `kind`; the lint now refuses
  a repeated parameter on any shortcode.

The rates this audit measured are the baseline's planning numbers for the
next book's sample.

## Re-verification passes (September 20–26, 2026) — archived

The figure-alt pass, the practice sweep and long-description pass, the
re-review rows to the A&P standard, the whole-page leak read, and the
alt-only figure pass are archived verbatim in
`docs/archive/reverification-biology.md`; they are closed records, not
reading for a run.

## Build budgets: the completion measurement record

The book is complete, so these are no longer projections — they are what
the finished corpus measured, and the caps it sits under. The caps live in
`tools/build/audit-build.mjs`; if one trips, re-measure and raise it
deliberately with the new numbers, never by rounding up in advance.

- **HTML total** (`maxTotalHtmlBytes`, 350 MiB). Measured at completion
  (September 3, 2026, 47 chapters, 600 HTML documents): **254.3 MiB** of
  HTML, 27% under the cap. The audit's summary line prints the all-files
  size, which also counts the vendored WebP — read the gate's own line, not
  the summary, when judging headroom. The driver is the sidebar, not the
  prose: every biology page's `<aside>` lists the whole book. Until
  2026-09-01 that tree was rendered twice per page (phone drawer + desktop
  list); `layouts/_partials/sidebar.html` now renders one list for every
  width (drawer-only rows `hx:md:hidden`, the two wrapper rows flattened by
  `.ap-sidebar-shell` in `custom.css` from md up), which is what brought the
  corpus under the cap.
- **Chrome per page** (`maxMeanChromeBytes`, 300 KiB) is the cap that guards
  the single-list sidebar: the book tree is rendered once per page at about
  1.1 KiB per link, so a tree emitted twice again would put the mean well
  over the cap. The browser suite pins the shape too (`the biology sidebar
  nests chapters under their unit`: the unit nesting, the first chapter as
  the first visible link).
- **Sidebar share** (`maxSidebarShare`, 0.55) is per page; the biology
  sidebar lists every chapter of the book.
- **Browser suite time.** `tests/figures.spec.mjs` walks every route; its
  timeout scales with the route count.
- **Source audit.** `npm run source:check -- --bundle biology-bundle`
  (report-only) audits the finished book clean — 208/208 sections, every
  objective and heading located, 0 unresolved review items — and a heading
  the audit cannot locate is the signal that a page renamed or dropped a
  source section.

## Dated notes moved from the life-sciences playbook (October 13, 2026)

The rule each note came from stays in `docs/subjects/life-sciences.md` or `docs/knowledge-check-playbook-life-sciences.md`, undated.

- **Transparent figures get the plate.** 39 photo-kind figures with transparent pixels were found on September 26, 2026; panel letters and labels were black ink on transparency and vanished on the dark page.
- **Source alt with wrong data.** Derek, September 24, 2026: the Ebola map. Its source alt got the data wrong; the totals went in the alt and the full values in a `longdesc`, never dropped.
- **Figure-bound choice component.** Built and reverted on August 31, 2026, because the sticky figure hid the options.
- **No rubric sweep.** Derek, September 21, 2026: the 0.8 bar stays and a checkpoint that compresses one answer sentence is acceptable.
- **Fold into body self-check.** Derek, September 26, 2026: seven of the thirteen folds on the shelf were into self-checks.
- **Sortbins item-building rules** were tagged Microbiology ch. 5–24; the **sharpened chapter rules** were tagged Microbiology ch. 3–26. Both lists are the rules themselves.
- **Defect classes the checkers find.** The block was first written as "What the first retrofit's checkers caught" (September 6, 2026).
- **Checkers run on Opus (September 22, 2026).** Sonnet checkers passed pages with 7–10 confirmed defects each; keys held everywhere, so the gap was the leak, hint, accept, and figure reading, which is model-bound.
- **Completion-audit rates.** No audit found a wrong source key. Opus samples found 7–10 confirmed defects per page, two-thirds of them hints, where a Sonnet sample had found about 1 in 90 items. After a Sonnet image-first pass, Opus still found about one alt-only figure in four wrong.
- **`longdesc` by inventory (September 22, 2026).** After both passes, most `longdesc` figures were still wrong: arrows joined to the wrong box or pointing the wrong way, a panel row dropped, bracket endpoints off, a structure the art does not draw, printed labels left out.
- **Figure, alt, and `longdesc` work on Opus (September 23, 2026).** An Opus second read found most Sonnet "clean" verdicts wrong and most Sonnet fixes regressions, and Sonnet plus an Opus check cost more than Opus alone.
- **Prose claim pass** began with chapter 4 of Microbiology on September 6, 2026.
- **Knowledge-check playbook dates.** Microbiology's five blocks were decided September 15, 2026; the duplicate-stem lint began September 5, 2026; the reverse-recall re-open rule dates from September 22, 2026; the spelled-out-before-the-blank and above-item key lints from September 22, 2026; all 61 leak candidates on thirteen finished checks read as shared vocabulary (September 26, 2026); about 390 check records lost their provenance tie to a solve placeholder before September 26, 2026 and were restored with `npm run ledger:provenance`; "the carrier derived from riboflavin" keyed FAD, but Biology 7.4 derives FMN from vitamin B₂ too (September 23, 2026); the Opus checker rule dates from September 22, 2026.
- **Tags removed from the life-sciences playbook, October 13, 2026.** The rules stay undated. September 23, 2026: the source-only correction and "reported as a source defect" bans, the accept-list notes (MHC class I; CAP), the title-prints-key preference, the lint errors for two hint forms and for a `textin` answer shape, and the restored-question `selfcheck` rule. September 22, 2026: the ASCII formula lint, the literal-form leak lint, the `verify-source-keys` confirmation, and the multiple-choice hint-prints-key lint error. August 31, 2026: the hint lint began checking both forms. September 6, 2026: the sortbins and unkeyed-question conversion rules from the first retrofit. September 4, 2026: `BOOK_RULES` opted every life-sciences book in. September 23, 2026: the fill-in half of the second-fact rule.

## Forward-leak lint (October 16, 2026)

- The new `lints-leaks.mjs` rule (a `selfcheck` model answer or rubric clause printing the key of the graded item directly below it) fired on eight Biology pages, all reordered within their objective groups, no key, stem, or model answer edited: 4.5 (cell-wall self-check to its group's end), 5.2 (potassium-channel self-check to its group's end), 6.3 (ant-farm self-check below the "more ordered" cloze), 6.5 (vitamins self-check below the coenzyme cloze), 10.2 (centrosome multiple choice one place down its group), 12.3 (independent-assortment "genes" cloze below the multiple choice), 41.4 (antioxidant cloze to the top of its group), and 41.5 (vasodilator cloze to the top of its group).
