# Re-review brief — math

The full-scope fixer brief for the four OpenStax math books, written for
the Prealgebra 2e chapter 1 pilot (September 26, 2026) from
`docs/subjects/math.md`, the shape of `brief-life-sciences.md`, and the
standard in `README.md`; v2 folds in the pilot's findings (Prealgebra 1.2:
32 fixes, 143k tokens). The parent fills `SP` (its scratchpad), `<unit>`,
and the page list, and before launch extracts each module's source images
to `SP/media/<mid>/` (the checkout is sparse; fixers run no git): `git -C
sources/openstax/<checkout> show <commit>:media/<file>` for every `media/`
path the module's CNXML references.

You are an Opus reviewer AND fixer: find every defect on your pages and fix
it. The math pages were authored before the September 22 bar and have had
only gate checks since: an automated key cross-check, a source-solution
gate on fill-ins, and blind solves. Nobody has read their figures against
the rendered geometry, their worked examples line by line, or their hints
against the "method, never the value" rule.

## Working rules

1. **No git commands at all**, not even read-only. The tree may carry
   uncommitted work; undo your own edit by hand.
2. Other agents share this worktree. Edit ONLY your pages, with the Edit
   tool — or, for a whole multi-line SVG, an exact-text Python splice that
   asserts the old text occurs exactly once; re-read a region right before
   editing it and after your last edit.
3. Do NOT edit `data/verification/answer-ledger.json`, anything under
   `data/openstax/`, `docs/openstax-errata.md`, `package.json` pins, or
   baselines. Do NOT run `ledger:*`, `baseline:update`, `source:fetch`,
   `npm run build`, `check:build`, or Playwright. Do not spawn sub-agents.
4. `verify:ledger` fails on every edited item (it re-hashes) — expected;
   the parent re-solves. Check with `npm run verify-section -- <page>` and
   `npm run lint`.
5. Source authority is the raw CNXML in the pinned checkout
   (`data/openstax/source-lock.json`), never the preview tool (it drops TeX
   spaces and invents markup defects). A convention finding (ordering,
   rounding, notation, digit grouping, answer shape) is a hypothesis: check
   the worked example, sibling pages, and the CNXML before editing.
6. Every reader-visible departure from the source is disclosed in the
   page's footer `Changes:` clause, in the page's existing style.

## Read (only these)

- `docs/subjects/math.md` §2 "Writing patterns", "Fill-in answer shapes and
  re-expression (`answerForm`)", "Notation the grader cannot take yet", and
  "Standing notes from the closures".
- `docs/authoring-playbook.md` §3 up to the `sortbins` block (hints, the
  categorical-answer rule) and "The section-final `## Practice` block"
  (math selects end-of-section exercises; every objective keeps its group).
- Per page: the page, and its module's raw CNXML (module id:
  `grep -n '<page path relative to content/>' data/openstax/source-map.json`;
  CNXML at `sources/openstax/<checkout>/modules/<mid>/index.cnxml`), and
  the module's images in `SP/media/<mid>/`. `python3
  tools/source/cnxml-preview.py <cnxml>` prints the module readably for
  orientation; confirm every number and solution you rely on in the raw
  CNXML.

Grader (the real one — every fill-in grades through it):
`node -e "import('./assets/js/lib/math/check-answer.mjs').then(m=>console.log(m.checkAnswer('<typed>','<answer>',{form:'<answerForm>',mode:'<answerMode>'})))"`
→ `correct` / `incorrect` / `form` / `invalid`. Text items:
`assets/js/lib/text/check-text.mjs` `checkText(typed, key, {accept})`.
Known grader-wide behaviour, not a page defect (do not report it): a typed
unit word (`140 miles`) grades `incorrect` and a typed `\$` grades
`invalid` — so a question with units names them ("in dollars", "in
feet") and the learner enters the number.

Figures and display math: `node tools/figures/render-page-figures.mjs
<page> SP/render/<page-stem>` renders every inline `<svg>` to
`L<line>.png` and every `$$…$$` block to `B<line>.png` (Read them; re-run
after an edit — it clears the old renders). An `apfigure` spec renders
with `node tools/figures/render-figure.mjs <graph|numberline|figure>
'<spec json>'`.

## Per page

1. Read the whole page and the module CNXML (body, examples, Try Its,
   exercises and solutions, glossary).
2. **The body, line by line.** Every worked example: recompute each step;
   the numbers, the operations, and the final value must be right and
   agree with the step table. Every claim in prose is true and matches the
   module. Every in-body fill-in ("Try It") is graded like a Practice item
   (step 3). Render every display block and look at it: math can render
   wrong without throwing — carried digits set in their own right-aligned
   row land over the wrong column (write a carry as `\overset{1}{4}`
   on its digit), `\\` outside an environment, `\text{If} n` joins, an
   unbraced multi-digit exponent in `answer`, a `|` in a table row, an
   ungrouped four-digit number.
3. **Every graded item**, in order. Cover the key and solve it yourself
   first. Then check:
   - **key** vs your own solution AND the CNXML `<solution>` for a source
     item (the pages mark nothing; match by the numbers). A new-number item
     (the footer says "used new example numbers") is checked by your
     solution alone. `answerDisplay` states the same value as `answer`,
     with units where the question names them.
   - **the ask pins the answer:** the question says what to enter (units,
     "in dollars", "as a whole number", which quantity first in a list);
     a categorical answer is a `multiplechoice`, never a digit code or a
     word the learner must type in MathLive; a re-expression ask carries
     the `answerForm` that refuses the retyped prompt — run the grader on
     the retyped printed subject and expect `form` or `incorrect`. This
     covers asks the retype lint cannot see because the numbers are in
     words or prose: "translate and simplify: 29 increased by 76" and
     every word problem accept the typed unevaluated expression
     (`29+76`, `18+15+26+49+32`) unless the item declares `decimal` (or
     the form its key needs). **Sweep every fill-in on your pages whose key
     is a computed number and which declares no `answerForm`** — body and
     Practice alike — and add the form after checking the grader refuses
     the retyped expression. Derek's decision (September 26, 2026): these
     2,151 items across the four books are fixed chapter by chapter by
     this re-review, not by a corpus pass, so no lint guards them until
     the last math row closes; a chapter left unswept stays exposed.
   - **grader reach:** run the grader on the forms a learner would
     naturally type (with and without digit-grouping commas, `x=5` vs
     `5`, an equivalent fraction or decimal, a unit word) and on a common
     wrong answer; the right value must grade `correct`, the wrong one
     must not.
   - **hint** (the top class in every book so far): it names the method or
     where to look — "line up the place values and add each column" —
     and never the final value, nor an intermediate result that leaves
     only a copy step (the product whose sum IS the answer, "the quotient
     is 3 remainder …", the column-by-column carries). A hint never
     performs the section's objective for the learner: on a "translate"
     item it does not print the translated expression, on a "model" item
     it does not state the regrouped count. Never "not X" of the key. A hint that restates
     the question adds nothing: give the method. Keep it short. A hint's
     arithmetic, when it has any, must be right.
   - **nearby leaks:** a worked example, Try It, figure, or `aria-label`
     directly above that works the SAME numbers prints the key; an MC
     option or another item's stem that states this item's answer; a
     figure whose label or drawn result is the key sitting above its
     question.
   - **duplicate asks:** two items on the page with the same numbers, or a
     reworded re-ask → replace the author item with a distinct source
     exercise from the module's exercise set (an answer-keyed one; see the
     Practice-block rules).
   - **MC:** exactly one defensible option; distractors are the real
     errors a learner makes, not throwaways; no option is true under a
     reading the stem allows.
   - **stem:** unambiguous, no dangling referent ("the figure above" when
     none is), source stem numbers verbatim for a source item.
   - **Try Its:** the pages convert a selection of the module's Try Its;
     do not add unconverted ones. A converted Try It carrying author
     numbers the footer does not disclose → restore the source numbers
     (ruling, September 26, 2026); disclose instead only when the source
     version cannot be rendered (it depends on a figure the page lacks).
   - **Translation MCs:** a reversed-order option ("two plus five" for
     $5+2$) is a sound distractor — a translation keeps the order — not a
     double key (ruling, September 26, 2026).
4. **Every figure, image-first by inventory.** Render it and Read the PNG
   at full size; open the matching source image in `SP/media/<mid>/`.
   Inventory what is DRAWN — counts of blocks, rods, counters, rows,
   ticks, and their grouping; every printed label and number; arrow ends;
   points and their coordinates — then check: (a) the drawing is the
   mathematics the prose or question says it is (count them); (b) the
   `aria-label` describes that drawing, not the intended one, and never
   states a key the page asks for below it — on a model-and-count item
   the label gives what the question gives and leaves the counted result
   to the learner ("twenty counters separated into groups of four", not
   "… into five groups of four" above "what is the quotient?"); (c) it matches the source
   figure's content where the page says it redraws one. Fix the SVG or
   the label so all three agree; a figure you cannot make correct → needs
   parent. Keep geometry analytic and legible (no overlaps, text inside
   the viewBox, dark-mode safe: `currentColor`, no hard black fills).
5. The footer `Changes:` clause: counts from a tally of the page, claims
   true; never where a correction is logged or who it was reported to.
6. After your edits, re-check every edited item's neighbours for new
   leaks, every positional hint ("the figure above") after a reorder, then
   `npm run verify-section -- <page>` and `npm run lint`.

## What you may and may not change

- **Keep item types.** Never convert a fill-in to multiple choice to
  escape a leak or a grading problem the grader can meet with an
  `answerForm`, an `answerMode`, or a pinned ask. Convert only per the
  math playbook's own rules (a categorical answer; a shape no token
  refuses) and list it under "needs parent".
- Hints, author-written items, `answerDisplay`, `answerForm`, pinning
  words in a question, item order within a group, figures and their
  labels, worked-example arithmetic, and footers: yes.
- A SOURCE item's numbers and its key: never changed to dodge a problem.
  A wrong source solution → keep the correct key, disclose the deviation
  in the footer, and draft an erratum.
- Keep each objective group at the book's floor when replacing items.
- Source defects you confirm → draft errata (unnumbered) in your report,
  in the format of the latest entries in `docs/openstax-errata.md`; check
  there first so you don't re-file.

## Report

Write `SP/reports/<unit>.md` with Bash (`cat >> … <<'EOF' … EOF`),
appending page by page — the Write tool refuses report files for
subagents, and a fixer killed by a session limit keeps what it appended:
- per page: path, module id, graded items, figures, then
  `| file:line | class | fix applied |` with the classes `wrong-key`,
  `display`, `ask-pin`, `grader-reach`, `retype`, `hint-leak`,
  `hint-factual`, `nearby-leak`, `duplicate-ask`, `double-key`,
  `stem-ambiguity`, `body-math`, `render`, `figure-geometry`,
  `figure-label`, `footer`, `source-fidelity`, `other`;
- totals per class; "needs parent" (what you did not fix, and why); draft
  errata.

Reply in ten lines: pages done, fixes by class, needs-parent count, errata
drafted, every file edited, and confirmation that lint and verify-section
are clean.
