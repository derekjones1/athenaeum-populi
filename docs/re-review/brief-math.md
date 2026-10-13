# Re-review brief — math

The full-scope fixer brief for a page of the four OpenStax math books. The
parent fills `SP` (its scratchpad), `<unit>`, and the page list, and before
launch extracts each module's source images to `SP/media/<mid>/` (the
checkout is sparse and fixers run no git): for every `media/` path the
module's CNXML references, `git -C sources/openstax/<checkout> show
<commit>:media/<file>`, driven by `xargs -P 8 -0` over a NUL-separated list
with every path quoted (names carry spaces), output and errors to
`SP/extract.log`; fixers launch only after the log shows every module done.

You are an Opus reviewer AND fixer: find every defect on your pages and fix
it. The gates prove keys mechanically; nothing mechanical reads the figures
against the rendered geometry, the worked examples line by line, or the
hints against the "method, never the value" rule. That is your job.

## Working rules

1. **No git commands at all**, not even read-only. The tree may carry
   uncommitted work; undo your own edit by hand.
2. Other agents share this worktree. Edit ONLY your pages, with the Edit
   tool — or, for a whole multi-line SVG, an exact-text Python splice that
   asserts the old text occurs exactly once; re-read a region right before
   editing it and after your last edit. A script that edits a page or data
   file asserts its target is non-empty and matches exactly once, keeps the
   file's own JSON indent, and names files explicitly.
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
7. Prompts and reports are files: your task names `SP/prompt-<unit>.md`;
   you append `SP/reports/<unit>.md` as you go (a fixer killed by a session
   limit keeps what it appended and is resumed, never restarted).

## Read (only these)

- `docs/subjects/math.md` "Writing patterns", "Fill-in answer shapes and
  re-expression (`answerForm`)" — its token table is the authority for what
  each token refuses, and "Which form for which key" is the sweep's map —
  "Notation the grader cannot take yet", and "Standing notes from the
  closures" with its "Rulings on item shapes".
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

## The grader

Every fill-in grades through
`node -e "import('./assets/js/lib/math/check-answer.mjs').then(m=>console.log(m.checkAnswer('<typed>','<answer>',{form:'<answerForm>',mode:'<answerMode>'})))"`
→ `correct` / `incorrect` / `form` / `invalid` / `unit`. Text items:
`assets/js/lib/text/check-text.mjs` `checkText(typed, key, {accept})`.
What you must know, and probe rather than trust:

- **Value then form.** A response equal in value to the key is then
  checked against every token in `answerForm`; a right value in the wrong
  shape is `form` with the token's own message. A bare computed number
  with no form accepts the retyped prompt (`29+76`), so every
  computed-number key declares a value form (`decimal`, `fraction`,
  `lowest-terms`; the lint enforces it) — and a value form on an
  inequality, interval, pair, or list applies to each bound, endpoint,
  coordinate, or member.
- **Bare-number keys**: a leading `\$` is dropped; a right number with a
  unit word, degree mark, or `\%` typed after it is `unit` (so the ask
  still names the unit); a one-letter unit (`62 m`) reads as a variable and
  is `incorrect`; `5{,}250` is grouping; a leading `\approx` is dropped.
- **Labels** are stripped before a value form reads the value: `x=13`,
  `f(x)=`, `(f+g)(x)=`, `a_n=`, `\alpha=`, a chained `y=f(x)=`. So a key
  whose stem prints its bare value (`x=3` after "shifted right 3 units")
  keeps `solved:x` WITH the value form, or `decimal` alone passes the `3`.
- **Shape tokens compose**: the trig, log, radical and factoring tokens
  alone pass written arithmetic, so a key takes the shape token AND the
  value or combining form (`evaluated-trig simplified-radical`,
  `expanded distributed no-like-terms`, `solved:v single-fraction
  reduced-fraction`). `solved:<v>` makes the other tokens read the side
  `v` equals.
- **Write every key with `\frac`, never a slash** (`15/17` is `form`
  against itself), braces on every multi-character exponent and on a
  two-digit radicand (`\sqrt{17}`), and complex keys in `a+bi`.
- **Probe before you convert or pin.** On every item you touch run the key
  itself (`correct`), the retyped printed subject (`form` or `incorrect`),
  the natural typed variants (with and without grouping commas, `x=5` vs
  `5`, an equivalent fraction or decimal, a unit word), one common wrong
  answer (`incorrect`), and the half-worked line the form must refuse. A
  token that passes what it should refuse is a grader gap: report it under
  "needs parent" with the probe, and do not widen a matcher or checker to
  pass your page. The parent relays grader gaps to the run's standing
  grader agent; when one closes, strip the workaround pins and multiple
  choices it had forced (the parent tells you which).
- A form's `form` message, not `incorrect`, is what a learner sees on a
  right value in the wrong shape — never pin an ask to dodge a token the
  key can take.

Figures and display math: `node tools/figures/render-page-figures.mjs
<page> SP/render/<page-stem>` renders every inline `<svg>` to
`L<line>.png`, every `apfigure` spec to `A<line>.png`, and every `$$…$$`
block to `B<line>.png` (Read them; re-run after an edit — it clears the old
renders). A page's figure inventory is every `L` and every `A` file: count
them against the page's `<svg` and `{{< apfigure` tags before you start,
and say in your report how many of each you read. A single spec renders by
hand with `node tools/figures/render-figure.mjs <graph|numberline|figure>
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
     with units where the question names them. When the source's prompt,
     drawing, and printed answer disagree, the drawing and the pinned
     prompt outrank a solution that matches neither.
   - **the ask pins the answer:** the question says what to enter (units,
     "in dollars", "as a whole number", which quantity first in a list);
     a categorical answer is a `multiplechoice`, never a digit code or a
     word the learner must type in MathLive; a re-expression ask carries
     the `answerForm` that refuses the retyped prompt. **Sweep every
     fill-in on your pages against math.md "Which form for which key"**:
     a computed number declares a value form; a Simplify keyed a fraction
     with a sum in either half takes `single-fraction reduced-fraction`;
     a combined polynomial `expanded distributed no-like-terms`; a complete
     factorization `factored-completely` (a GCF-only ask `gcf-factored`
     too); a radical sum `simplified-radical no-like-terms`; every bound,
     endpoint and coordinate a value form. Probe each as above.
   - **grader reach:** the probe list above; the right value must grade
     `correct`, the wrong one must not.
   - **hint** (the top class in every book): it names the method or where
     to look — "line up the place values and add each column" — and never
     the final value, nor an intermediate result that leaves only a copy
     step (the product whose sum IS the answer, "the quotient is 3
     remainder …", the column-by-column carries, the GCF, the factor pair,
     the LCD, the cleared equation, the translated equation). A hint never
     performs the section's objective for the learner: on a "translate"
     item it does not print the translated expression, on a "model" item
     it does not state the regrouped count, on a sign-rules item it does
     not state the result's sign. A boilerplate hint naming the wrong
     method ("multiply the coefficients" on an add item) is `hint-factual`.
     Never "not X" of the key. A hint that restates the question adds
     nothing: give the method. Keep it short. A hint's arithmetic, when it
     has any, must be right.
   - **nearby leaks:** a worked example, Try It, figure, `aria-label`,
     reference chart, or table directly above that works the SAME numbers
     or prints the result leaks the key — even when that is the source's
     own placement (move it below the item, disclosed). A printed
     expansion with its letters renamed, or a Try It that is a scalar
     multiple of the example above it, is the same key. An MC option or
     another item's stem that states this item's answer; an MC whose
     correct option prints the next item's key ("write in standard form"
     options above "what is the vertex?") becomes a fill-in under the
     shape's token so the key exists only in the learner's own entry; a
     follow-up stem that prints the previous item's key ("rewritten as …,
     give the directrix") says "For the same parabola <given data>, give
     …" instead. The blind solve finds these after you; find them first.
   - **duplicate asks:** two items on the page with the same numbers, or a
     reworded re-ask → replace the author item with a distinct source
     exercise from the module's exercise set (an answer-keyed one; see the
     Practice-block rules).
   - **MC:** exactly one defensible option; distractors are the real
     errors a learner makes, not throwaways; no option is true under a
     reading the stem allows; every option is a `$…$` span (raw TeX in an
     option is a lint error).
   - **stem:** unambiguous, no dangling referent ("the figure above" when
     none is), source stem numbers verbatim for a source item. A pin is
     added AFTER the source wording, never in place of it, and prints no
     number and no unit word of its own ("Round to the nearest year." keeps
     the source-key match; "Round the number of years after 2005" and
     "in ft/s" with "sec" drop it — the matcher reads a word as a number);
     confirm a pinned item still matches with `verify-section`.
   - **Try Its:** the pages convert a selection of the module's Try Its;
     do not add unconverted ones. A converted Try It carrying author
     numbers the footer does not disclose → restore the source numbers;
     disclose instead only when the source version cannot be rendered (it
     depends on a figure the page lacks). Before calling a number wrong
     against the source, check the page's footer, its `DISCLOSED_DEVIATIONS`
     entry, and the errata file: a "restore" that undoes a recorded
     correction is the defect.
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
   "… into five groups of four" above "what is the quotient?"); (c) it
   matches the source figure's content where the page says it redraws
   one. Fix the spec or the label so all three agree; a figure you cannot
   make correct → needs parent. Analytic primitives only, legible, dark-mode
   safe (`currentColor`, no hard black fills); a curve across the digit
   row takes `xTickOffset` / `yTickOffset`, a π axis `xTickFormat: 'pi'`,
   a polar grid `faint: true` — never hand ticks as `segments` or digits
   as `texts` (the lint refuses them). A page whose footer says it omitted
   or described the source's figures in words restores each worked
   example's graph and the concept figures the prose explains, as
   `apfigure`s on the source window — never a Try It's or exercise's
   answer graph. The parent then runs an Opus figure checker over every
   figure on the page, fixer-drawn or not
   (`docs/re-review/brief-figure-check-math.md`); apply new forms only
   after your page's checker has finished, and if you are resumed after
   it, the parent tells you which spec lines it touched.
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
- **A multiple choice that exists only because the grader once could not
  take the answer** — interval notation, a union, a domain or range, a
  number, a function formula — becomes a fill-in again, its stem saying "in
  interval notation" where needed and a value form on every endpoint; probe
  the key, the inequality form (`form`), a wrong bracket (`incorrect`), and
  an unworked endpoint (`form`). Categorical multiple choice (yes/no, which
  graph, describe-the-transformation, verbal judgements, a graph-read
  estimate, a pair of answers that cannot be one entry) stays.
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
- Gate traps: the source-key matcher compares magnitudes, so keep a
  source item's own sign and wording; "Convert $-10$ … to …" trips the
  re-expression rule, ask "What is $-10$ … in …?". Report the case, never
  widen the tool.

## Report

Write `SP/reports/<unit>.md` with Bash (`cat >> … <<'EOF' … EOF`),
appending page by page — the Write tool refuses report files for
subagents, and a fixer killed by a session limit keeps what it appended:
- per page: path, module id, graded items, figures (L and A counts), then
  `| file:line | class | fix applied |` with the classes `wrong-key`,
  `display`, `ask-pin`, `grader-reach`, `retype`, `hint-leak`,
  `hint-factual`, `nearby-leak`, `duplicate-ask`, `double-key`,
  `stem-ambiguity`, `body-math`, `render`, `figure-geometry`,
  `figure-label`, `footer`, `source-fidelity`, `other`;
- totals per class; "needs parent" (what you did not fix, and why — a
  grader gap with its probe, a conversion, a figure you could not make
  correct); draft errata.

Reply in ten lines: pages done, fixes by class, needs-parent count, errata
drafted, every file edited, and confirmation that lint and verify-section
are clean.
