# Re-review tracker

Procedure, standard, and the prompt to paste: [README.md](README.md). One row
per request; tick it only when every step of the README's loop is done and
committed. Fill `Fixed` with the defect count, `Errata` with the numbers
logged (or `—`), `Commit` with the short hash, and Notes with the cost and
anything the next row should know.

Status: `[ ]` pending · `[~]` in progress (note the section reached) · `[x]` done

## Reference: Anatomy and Physiology 2e

Chapters 1–2 are the standard (authored with the full kit and re-reviewed by
Opus on September 22, 2026). New A&P chapters meet it by being authored with
`docs/briefs/anatomy-physiology/run.md`, so they are not tracked here.

## Prealgebra 2e

`content/math/prealgebra` · 11 chapters, 60 section pages, 2 knowledge checks

Never read against the September 22 bar: needs the full checker read AND
the image-first figure pass. Every math row also adds `answerForm` to its
numeric fill-ins that lack one (`brief-math.md` step 3, Derek's decision
September 26, 2026: 2,151 items, chapter by chapter; when the last math row
closes, promote the check to a lint error).

| | Chapter | Sections | Fixed | Errata | Commit | Notes |
|---|---|---|---|---|---|---|
| [x] | 1. Whole Numbers | 5 | 134 | 1103–1113 | 923a086 | Math pilot: wrote `brief-math.md` (v2 after a 1.2 trial) and `tools/figures/render-page-figures.mjs`. One Opus fixer per section, 138–158k tokens each (731k total, about double a life-sciences section); Fable solve 108k for 55 items, 55/55 after one adjudication (Jenna 27, source key). Fixes: hint leaks ~55, word-problem/translate retype 47 (`answerForm="decimal"`), figure geometry 5 (1.2 blocks drew 3 rods + 7 ones for 17 + 26; 1.3 circles cut blocks), carry rows over the wrong column 3 (now a lint), model-count alts stating the key 2 (1.5), Try Its restored to source numbers. `ledger:provenance` skipped for math (mislabels MathML source items). Chapter 1 swept; the other 2,151 numeric fill-ins without `answerForm` are fixed row by row (Derek, September 26). |
| [x] | 2. The Language of Algebra | 5 | 141 | 1114–1121 | a4587b3 | Run with chapters 3–11 (one Opus fixer per section, about 130–300k tokens each, about 8.8M for the 55; Fable solve about 1.4M for 1,137 items, 1,137/1,137 agree). 2.1's Honda Fit MPG was invented (33; source 27) and drove a wrong key. Nine in-body items re-asked the example above them and were swapped for source Try Its. New `translation` form on the 7 translate-into-an-equation items (the grader accepted `13=13`); grader fixes in 06e6a70. Follow-up (Derek, September 27, 2026): 2.3's omitted "Model the Subtraction Property of Equality" objective restored — body, nine envelope-and-counter SVGs, both Try Its, a Practice group of two. |
| [x] | 3. Integers | 5 | 246 | 1122–1135 | a4587b3 | 3.3 Practice counter labels stated the count above "what remains?" (parent fix). Number-line arrowheads and label leaks fixed in 3.1. The `x=` label strip in the grader came from 3.5. |
| [x] | 4. Fractions | 7 | 221 | 1136–1146 | a4587b3 | The `\frac{2}{5}\cdot\frac{9}{y}` grader hang came from 4.2 (fixed). Complex-fraction stems printed as slashes (4.3). 4.5 rebuilt Try It fs-id2430566, which prints its answers where its problems belong (disclosed). |
| [x] | 5. Decimals | 7 | 337 | 1147–1163 | a4587b3 | All money, rate and average keys now declare `decimal`. 5.7 corrects √5 ≈ 2.236067977 (the source prints …978). |
| [x] | 6. Percents | 5 | 360 | 1164–1179 | a4587b3 | Percent asks say "including the % sign"; the grader now reports `form` for a bare 4.5 against 4.5%. 6.5 adds `translation` to 9 proportion asks. |
| [x] | 7. The Properties of Real Numbers | 5 | 191 | 1180–1190 | a4587b3 | 7.4 count fill-ins became one multiple choice per source part. 7.5 names the conversion factor on the soda and Kilimanjaro items (the solver found both factors defensible). 7.1's 12 counting items ("how many of these are integers?") became one multiple choice per source part over candidate sets (Derek, September 27, 2026; follow-up commit). |
| [x] | 8. Solving Linear Equations | 4 | 186 | 1191–1197 | a4587b3 | Retype (answerForm) is the top class. The balance-scale figure in 8.1 tipped the wrong way and was redrawn. |
| [x] | 9. Math Models and Geometry | 7 | 571 | 1198–1222 | a4587b3 | Hint leaks printing the translated equation were the top class. 9.1's "find the numbers" Try Its restored as list keys. 9.4's linear/square/cubic Try It is now three multiple choice. 9.6 keys the party hat 128.22 (source 128.2, erratum). |
| [x] | 10. Polynomials | 6 | 173 | 1223–1236 | a4587b3 | The grader's written-arithmetic refusals (`expanded`, `single-term`, `single-fraction`) and `single-power` keys come from this chapter. m81334's media came late, and 10.1 was re-checked against the images. |
| [x] | 11. Graphs | 4 | 205 | 1237–1250 | a4587b3 | 11.1's graph was drawn with invented points (B re-keyed to (−2,4)); `decimal` now takes ordered pairs. 11.3's method-choice fill-ins and 11.4's x = −4 slope item became multiple choice. The 11.4 geoboards were redrawn to match their slopes. |
| [x] | KC `knowledge-check-01-06` | — | 62 | — | 5c15279 | Run with KC 07-11 (September 27, 2026): new `brief-knowledge-check-math.md`; three Opus fixers here (118–156k each), one Opus second checker for both checks (143k), Fable solve 86k for both (122/122 agree). Keys all right; `answerForm` retype was the top class. 6.1's "1/3 to a percent" was keyed 33.333% under an invented rounding ask and duplicated a worked example; replaced by the CDC 2/5 item. Parent kept 4.6's 5 8/11 + 2 4/11 (the only regrouping item) although its stem prints 4.1's key below it (Biology precedent). Fraction and mixed-number percents now grade (c15ba80). |
| [x] | KC `knowledge-check-07-11` | — | 92 | 1251 | 5c15279 | Three Opus fixers (142–215k each). 11.4's slope figure was invented (rise −12/run 6) and 11.3's item had no key; both now redraw Practice Test figures. Five keyed Review Exercises added for chapter 9 coverage; split pairs merged into lists. Footer and callout disclose Janice 9.32 (erratum 1190) and the cone in cm³ (1222). `single-power`/`single-fraction` gaps closed (c15ba80). Floors: min-verified −1, min-replayed −46 (named in the commit). Prealgebra 2e COMPLETE. |

## Elementary Algebra 2e

`content/math/elementary-algebra` · 10 chapters, 71 section pages, 2 knowledge checks

Never read against the September 22 bar: needs the full checker read AND
the image-first figure pass. Every math row also adds `answerForm` to its
numeric fill-ins that lack one (`brief-math.md` step 3, Derek's decision
September 26, 2026: 2,151 items, chapter by chapter; when the last math row
closes, promote the check to a lint error). The same sweep adds
`reduced-fraction` to every Simplify fill-in keyed `single-fraction` whose
key has a sum or difference in its numerator or denominator: without it
the grader accepts the unreduced fraction, including the printed prompt
(`brief-math.md`, grader paragraph; Derek, September 27, 2026). Exposed
here on September 27: both knowledge checks (1 and 4); chapter 8 swept.
Factoring asks take `factored-completely` (chapter 7 swept); knowledge
check 6–10 has 11 left.

| | Chapter | Sections | Fixed | Errata | Commit | Notes |
|---|---|---|---|---|---|---|
| [x] | 1. Foundations | 10 | 399 | 1252–1267 | 183e726 | One Opus fixer per section (134–242k tokens each, ~1.72M total); Fable solve ~300k for 195 items, 195/195 after two adjudications on source keys (1.4 Bears 105, ATM fee 16). Retype ~138 and hint leaks ~115 (the parent rewrote 12 hints in 1.4 and 1.7 that stated the sign of the product or quotient). Keys: 0 wrong. 1.6 keys two Try Its right where the source prints −1 and −17/8 (errata 1261–1262, disclosed in the footer). Invented numbers came back in 1.2, 1.3, 1.6 and 1.8; the 1.3 counter and number-line figures were redrawn to the source. 1.10 mixed-unit asks now take one-unit totals (the Prealgebra 7.5 shape), and `unitTotals` learned "8 lbs . 15 oz" and gal/qt. Grader: a numeral fraction now counts as a numeral in a written product under `expanded`. Open: `single-fraction` without `reduced-fraction` accepts unreduced fractions with a sum in the numerator or denominator (72 keys, mostly chapter 8), now in brief-math. Floors: replayed −83, confirmed −1. |
| [x] | 2. Solving Linear Equations and Inequalities | 7 | 330 | 1268–1275 | 6eb6e75 | Run with chapters 3–6 (September 27, 2026): one Opus fixer per section, 33 at once in a rolling window of about 12 (138–247k tokens each, ~6.1M for the 33); one Opus grader agent (~600k) closed nine grader gaps (23de78c); two Opus figure checkers (~350k); 8 Fable solvers (~835k) for 636 items, 636/636 agree after realigning one solver's six-item hash slip. Hint leaks and retype are the top classes. 2.7's z Try It keyed a contradiction for an identity (source, erratum 1275; the page had silently flipped a sign to fit it). 2.6 solve-for items now `v=…` with `solved:v`. 2.1's and 2.4's categorical Try Its became multiple choice. New grader reach: trailing labels (`-7=p`), value forms on inequality/interval bounds (21 keys here). |
| [x] | 3. Math Models | 6 | 417 | 1276–1294 | 6eb6e75 | Translation hints (printing the equation or the second quantity as an expression) were the top class; 3.3's were rewritten twice to the chapter line (method only). 3.2 percent keys now carry `%` with `percent`. 3.1's "find the numbers" Try Its restored as list keys (Prealgebra 9.1). 3.6 Christian keyed `s>1200000` (source says "at least", erratum 1293). |
| [x] | 4. Graphs | 7 | 205 | 1295–1320 | 6eb6e75 | 4.4's omitted geoboard objective restored (16 geoboards, 4 graded items; parent decision on the Prealgebra 2.3 precedent). Hand SVGs without axis numbers redrawn spec-first (4.1, 4.5, 4.7); source Try It graphs restored (4.3, 4.4, 4.6); 4.1's source figure plots (0, −1) for (−2, 3) (erratum 1295, disclosed). The 4.4 figure checker wrongly called source Try It 049 invented and swapped in 051; both are source, parent kept 050/051 in source order. |
| [x] | 5. Systems of Linear Equations | 6 | 193 | 1321–1342 | 6eb6e75 | Ordered-pair keys now take pairs and forms (`(6,9)`, `x=6, y=1` both grade). 5.1's (1, −3) and (0, 0) checks are yes/no multiple choice (source asks yes/no). 5.6 Christy restored to the source's own parts (erratum 1340). 5.5 Rosie's source answer swaps the principals (erratum 1337). |
| [x] | 6. Polynomials | 7 | 433 | 1343–1364 | 6eb6e75 | Polynomial products moved from plain `expanded` to `expanded distributed no-like-terms` (6.3, 6.4, 6.6); `expanded` itself now refuses written products and powers of groups, `single-fraction` refuses `(2x^4)^5`, and reduced monomial terms are required under `distributed` (6.6 remainders). 286 plain-`expanded` items remain across the math books — swept row by row (brief-math step 3). 6.4 replaced three renamed duplicate Practice items with source exercises. Floors: replayed −319, exercises −4 (named in 6eb6e75). |
| [x] | 7. Factoring | 6 | 394 | 1365–1377 | 4b90cb3 | One Opus fixer per section (132–178k tokens each, ~933k); one Opus grader agent (145k) added `factored-completely`: `factored` is shape-only, so "Factor completely" accepted `(2x+4)(x+2)` and `2(x^2+4x+4)` for `2(x+2)^2` (parent find). All 142 of the chapter's factoring asks now take it (101 swapped by the parent, 41 by the 7.4 fixer). Three Fable solvers (~250k) for 180 items, 180/180 agree. Hint leaks (the GCF, the factor pair, the sign conclusion, the trinomial left inside) and retype are the top classes. 7.4 keyed a Try It `(12p-3q)(12p+3q)`, which is not factored completely (source `9(4p-q)(4p+q)`). The source's 9x²+50x+25 non-example with its two Try Its (7.4, parent) and 10x²−34x−24 example (7.5) were restored. 7.3 prints the source's 15y² GCF step as 5y² (erratum 1367). Open: `2(-x-2)` grades correct against `-2(x+2)` (sign convention, not completeness). Floors: replayed −19 (answerForm sweep). |
| [x] | 8. Rational Expressions and Equations | 9 | 241 | 1378–1390 | bfebd95 | Run with chapter 9 (September 27, 2026): one Opus fixer per section, all 17 in a rolling window of about 12 (112–225k tokens each, ~2.6M for the 17); one Opus grader agent (~277k) took the parent's pre-launch probes and six fixer relays (35483b2); three Fable solvers (~330k) for 166 items, 166/166 agree. Hint leaks (printing the factorization, the LCD, the cleared equation) and the `reduced-fraction` sweep are the top classes; no wrong keys. 8.8's six body fill-ins re-asked the worked example above them and are now its source Try Its; 8.7's similar triangles are redrawn to scale with the source's labels and its "Solve similar figure applications" objective is restored; 8.9's Try Its ask for the equation again (`xy=16` now grades equal to `y=\frac{16}{x}`); 8.6's no-solution MCs no longer print the cleared equation. Floors: replayed −82 across both chapters (answerForm sweep). |
| [x] | 9. Roots and Radicals | 8 | 263 | 1391–1404 | bfebd95 | Run with chapter 8. Parent probe before launch: `simplified-radical` passed unreduced fractions (the printed `\frac{4+2\sqrt5}{2}` for `2+\sqrt5`) and `no-like-terms` failed the key `3+2\sqrt2` against itself. The 9.3 fixer found a pre-existing false positive across all four math books: the engine's N() drops a square root over a variable, so `9x` graded correct for `9\sqrt{x}`; the 9.7 fixer found dropped absolute values passing. All fixed in 35483b2; the parent then added `no-like-terms` to the 17 radical-sum keys. Hint leaks (the perfect-square factor, the conjugate product) were 151 of the fixes. 9.6's source Try It √x+3=√(x+5) is restored as a multiple choice (answer "no solution"). Source keys wrong: ∛(162/6) keyed 3∛6 (1399), 6p√102/q² for 6p/q² (1397), four conjugate quotients squared as a whole fraction (1396). |
| [ ] | 10. Quadratic Equations | 5 | | | | |
| [ ] | KC `knowledge-check-01-05` | — | | | | |
| [ ] | KC `knowledge-check-06-10` | — | | | | |

## Intermediate Algebra 2e

`content/math/intermediate-algebra` · 12 chapters, 70 section pages, 2 knowledge checks

Never read against the September 22 bar: needs the full checker read AND
the image-first figure pass. Every math row also adds `answerForm` to its
numeric fill-ins that lack one (`brief-math.md` step 3, Derek's decision
September 26, 2026: 2,151 items, chapter by chapter; when the last math row
closes, promote the check to a lint error). The same sweep adds
`reduced-fraction` to every Simplify fill-in keyed `single-fraction` whose
key has a sum or difference in its numerator or denominator: without it
the grader accepts the unreduced fraction, including the printed prompt
(`brief-math.md`, grader paragraph; Derek, September 27, 2026). Exposed
here on September 27: chapter 1 (2 items) and chapter 7 (38).
The sweep also swaps `factored` for `factored-completely` on every factoring
ask whose key is complete (Elementary Algebra chapter 7, September 27,
2026): chapter 6 (105 items) and knowledge check 1–6 (7).

| | Chapter | Sections | Fixed | Errata | Commit | Notes |
|---|---|---|---|---|---|---|
| [ ] | 1. Foundations | 5 | | | | |
| [ ] | 2. Solving Linear Equations | 7 | | | | |
| [ ] | 3. Graphs and Functions | 6 | | | | |
| [ ] | 4. Systems of Linear Equations | 7 | | | | |
| [ ] | 5. Polynomials and Polynomial Functions | 4 | | | | |
| [ ] | 6. Factoring | 5 | | | | |
| [ ] | 7. Rational Expressions and Functions | 6 | | | | |
| [ ] | 8. Roots and Radicals | 8 | | | | |
| [ ] | 9. Quadratic Equations and Functions | 8 | | | | |
| [ ] | 10. Exponential and Logarithmic Functions | 5 | | | | |
| [ ] | 11. Conics | 5 | | | | |
| [ ] | 12. Sequences, Series and Binomial Theorem | 4 | | | | |
| [ ] | KC `knowledge-check-01-06` | — | | | | |
| [ ] | KC `knowledge-check-07-12` | — | | | | |

## Precalculus 2e

`content/math/precalculus` · 12 chapters, 73 section pages, 2 knowledge checks

Never read against the September 22 bar: needs the full checker read AND
the image-first figure pass. Every math row also adds `answerForm` to its
numeric fill-ins that lack one (`brief-math.md` step 3, Derek's decision
September 26, 2026: 2,151 items, chapter by chapter; when the last math row
closes, promote the check to a lint error). The same sweep adds
`reduced-fraction` to every Simplify fill-in keyed `single-fraction` whose
key has a sum or difference in its numerator or denominator: without it
the grader accepts the unreduced fraction, including the printed prompt
(`brief-math.md`, grader paragraph; Derek, September 27, 2026). Exposed
here on September 27: chapter 1 (2 items) and chapter 3 (1).

| | Chapter | Sections | Fixed | Errata | Commit | Notes |
|---|---|---|---|---|---|---|
| [ ] | 1. Functions | 7 | | | | |
| [ ] | 2. Linear Functions | 4 | | | | |
| [ ] | 3. Polynomial and Rational Functions | 9 | | | | |
| [ ] | 4. Exponential and Logarithmic Functions | 8 | | | | |
| [ ] | 5. Trigonometric Functions | 4 | | | | |
| [ ] | 6. Periodic Functions | 3 | | | | |
| [ ] | 7. Trigonometric Identities and Equations | 6 | | | | |
| [ ] | 8. Further Applications of Trigonometry | 8 | | | | |
| [ ] | 9. Systems of Equations and Inequalities | 8 | | | | |
| [ ] | 10. Analytic Geometry | 5 | | | | |
| [ ] | 11. Sequences, Probability and Counting Theory | 7 | | | | |
| [ ] | 12. Introduction to Calculus | 4 | | | | |
| [ ] | KC `knowledge-check-01-06` | — | | | | |
| [ ] | KC `knowledge-check-07-12` | — | | | | |

## Completed

Biology 2e (47 chapters, 8 unit checks) and Microbiology (26 chapters, 5
block checks) were re-reviewed to this standard September 22–24, 2026, and
every alt-only figure in both books was re-read image-first by Opus
September 24–26, 2026. Their rows — fixes, errata, commits, costs, and
each row's notes — are in `docs/history/biology.md` and
`docs/history/microbiology.md` ("Re-review to the A&P standard" and
"Alt-only figure pass"); the lessons are in the playbooks and the README.
