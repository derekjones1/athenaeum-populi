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
| [x] | 2. The Language of Algebra | 5 | 141 | 1114–1121 | a4587b3 | Run with chapters 3–11 (one Opus fixer per section, about 130–300k tokens each, about 8.8M for the 55; Fable solve about 1.4M for 1,137 items, 1,137/1,137 agree). 2.1's Honda Fit MPG was invented (33; source 27) and drove a wrong key. Nine in-body items re-asked the example above them and were swapped for source Try Its. New `translation` form on the 7 translate-into-an-equation items (the grader accepted `13=13`); grader fixes in 06e6a70. |
| [x] | 3. Integers | 5 | 246 | 1122–1135 | a4587b3 | 3.3 Practice counter labels stated the count above "what remains?" (parent fix). Number-line arrowheads and label leaks fixed in 3.1. The `x=` label strip in the grader came from 3.5. |
| [x] | 4. Fractions | 7 | 221 | 1136–1146 | a4587b3 | The `\frac{2}{5}\cdot\frac{9}{y}` grader hang came from 4.2 (fixed). Complex-fraction stems printed as slashes (4.3). 4.5 rebuilt Try It fs-id2430566, which prints its answers where its problems belong (disclosed). |
| [x] | 5. Decimals | 7 | 337 | 1147–1163 | a4587b3 | All money, rate and average keys now declare `decimal`. 5.7 corrects √5 ≈ 2.236067977 (the source prints …978). |
| [x] | 6. Percents | 5 | 360 | 1164–1179 | a4587b3 | Percent asks say "including the % sign"; the grader now reports `form` for a bare 4.5 against 4.5%. 6.5 adds `translation` to 9 proportion asks. |
| [x] | 7. The Properties of Real Numbers | 5 | 179 | 1180–1190 | a4587b3 | 7.4 count fill-ins became one multiple choice per source part. 7.5 names the conversion factor on the soda and Kilimanjaro items (the solver found both factors defensible). 7.1 keeps its counting items (disclosed); the same flaw class is open. |
| [x] | 8. Solving Linear Equations | 4 | 186 | 1191–1197 | a4587b3 | Retype (answerForm) is the top class. The balance-scale figure in 8.1 tipped the wrong way and was redrawn. |
| [x] | 9. Math Models and Geometry | 7 | 571 | 1198–1222 | a4587b3 | Hint leaks printing the translated equation were the top class. 9.1's "find the numbers" Try Its restored as list keys. 9.4's linear/square/cubic Try It is now three multiple choice. 9.6 keys the party hat 128.22 (source 128.2, erratum). |
| [x] | 10. Polynomials | 6 | 173 | 1223–1236 | a4587b3 | The grader's written-arithmetic refusals (`expanded`, `single-term`, `single-fraction`) and `single-power` keys come from this chapter. m81334's media came late, and 10.1 was re-checked against the images. |
| [x] | 11. Graphs | 4 | 205 | 1237–1250 | a4587b3 | 11.1's graph was drawn with invented points (B re-keyed to (−2,4)); `decimal` now takes ordered pairs. 11.3's method-choice fill-ins and 11.4's x = −4 slope item became multiple choice. The 11.4 geoboards were redrawn to match their slopes. |
| [ ] | KC `knowledge-check-01-06` | — | | | | |
| [ ] | KC `knowledge-check-07-11` | — | | | | |

## Elementary Algebra 2e

`content/math/elementary-algebra` · 10 chapters, 71 section pages, 2 knowledge checks

Never read against the September 22 bar: needs the full checker read AND
the image-first figure pass. Every math row also adds `answerForm` to its
numeric fill-ins that lack one (`brief-math.md` step 3, Derek's decision
September 26, 2026: 2,151 items, chapter by chapter; when the last math row
closes, promote the check to a lint error).

| | Chapter | Sections | Fixed | Errata | Commit | Notes |
|---|---|---|---|---|---|---|
| [ ] | 1. Foundations | 10 | | | | |
| [ ] | 2. Solving Linear Equations and Inequalities | 7 | | | | |
| [ ] | 3. Math Models | 6 | | | | |
| [ ] | 4. Graphs | 7 | | | | |
| [ ] | 5. Systems of Linear Equations | 6 | | | | |
| [ ] | 6. Polynomials | 7 | | | | |
| [ ] | 7. Factoring | 6 | | | | |
| [ ] | 8. Rational Expressions and Equations | 9 | | | | |
| [ ] | 9. Roots and Radicals | 8 | | | | |
| [ ] | 10. Quadratic Equations | 5 | | | | |
| [ ] | KC `knowledge-check-01-05` | — | | | | |
| [ ] | KC `knowledge-check-06-10` | — | | | | |

## Intermediate Algebra 2e

`content/math/intermediate-algebra` · 12 chapters, 70 section pages, 2 knowledge checks

Never read against the September 22 bar: needs the full checker read AND
the image-first figure pass. Every math row also adds `answerForm` to its
numeric fill-ins that lack one (`brief-math.md` step 3, Derek's decision
September 26, 2026: 2,151 items, chapter by chapter; when the last math row
closes, promote the check to a lint error).

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
closes, promote the check to a lint error).

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
