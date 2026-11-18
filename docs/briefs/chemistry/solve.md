# Blind solve — solver brief for Chemistry 2e (fresh Fable subagent)

You are the third reading of a chapter's keys: you answer every graded item
**cold**, with the keys hidden, so a wrong key, a double key, a
significant-figure count the data do not support, or a form that refuses a
right answer surfaces before the tree goes green. Read nothing but what this
brief names.

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. `SP` is the
scratchpad directory named in your task. **Never run a git command. Do not
spawn sub-agents. Do not run any `npm` script.** **Do not open the live page
under `content/`** — it prints the keys. Do not read `data/verification/`,
`$SP/ledger-*`, `$SP/check-*`, `$SP/keys-*`, `$SP/report-*`, the CNXML, the
PDF, or any checker report. Outside the packet directory you open two
things and nothing else: a figure an item is bound to (below), and the
book's reference pages, `content/physical-sciences/chemistry/appendices/*.md`
— the one part of `content/` you may read, since nothing on an appendix
page is graded and none prints a key. Write only the answers file named in
your task.

## Input

The packet directory in your task holds one JSON per page, emitted by
`npm run solve:emit`: each item has its `hash`, `kind`, the `question`, the
`answerForm` it will be graded under, and the option list for a
`multiplechoice` — key, accept, hint, and `answerDisplay` are stripped.
Beside it, `pages/` holds each page whole with every key masked: that is
your source. The page outranks your general knowledge: use the conversion
factors, constants, and rounding rules the page itself prints. **The
masked pages print no atomic masses**: every learner has the periodic
table on every page, so take each atomic mass from Appendix A
(`appendices/a-the-periodic-table.md`, its table of the 118 elements), and
a constant or a table value the page does not print from the appendix
that holds it — as printed there, to the places printed there, never from
memory. A molar mass's significant figures, and so the key's, depend on
those places.

## Method

- Read each masked page once, then answer its items.
- **A numeric `fillin`:** solve it from the stem and the page's own tables
  and worked examples. Do the arithmetic by running it (`python3 -c`),
  never in your head, carrying every digit to the end and rounding once.
  Report the answer **to the significant figures the stem's data support**,
  as a learner would type it: a plain decimal (`0.674`) or
  `a\times10^{n}` with a braced exponent (`4.585\times10^{22}`). Never type
  the unit; the stem names it. A count is a bare integer. Put the unrounded
  result and the one-line derivation in `note`.
- **An item bound to a figure** (its packet has a `dependency` whose text
  is a `mediafigure`, or its stem says "the figure above"): open the
  picture itself — `static/media/<src>-<width>.webp`, the largest width
  there is, with `Read` — and answer from what is DRAWN: count the atoms
  and bonds, read the scale, read the labels. The alt on the masked page
  is one person's description of the picture, written by the page's
  author; it is not your source. Where the alt and the picture disagree,
  answer from the picture and say so in `note` — an alt that miscounts is
  a defect this pass can catch and no other does.
- **A graph reading** (`answerForm="reading:<division>"`): open the figure
  and READ the value off the graph the stem names, as a careful learner
  would — find the given value on its axis, follow it to the curve, and
  estimate where that point falls between the marked lines of the other
  axis. Answer with the one number you read; no count of figures is asked.
  Do not calculate it instead: in `note`, give your reading, the smallest
  marked division of the axis you read it from (in the answer's unit), and,
  separately, what the figure's labeled points or table give at that point.
  A division that is not the form's, or a figure that cannot be read to two
  tenths of it, is what this pass is for.
- If the `answerForm` names `sig-figs:<n>` and your own count of the
  figures the data support is NOT n, answer with your own count and say so
  in `note` — that disagreement is what this pass exists to find.
- **A molar mass, by the one method the masked pages assume**: take each
  atomic mass from Appendix A exactly as printed, trailing zeros included;
  each element's subtotal (count × mass) keeps the mass's decimal places,
  and the sum is rounded to the place of its least precise subtotal; that
  rounded molar mass is then used and every later step carried unrounded —
  an earlier part's rounded answer is NOT reused in a later part; only the
  final result is rounded. A constant the page states is used as stated.
  **Say in `note` whenever the unrounded sum, or an earlier part's rounded
  answer, would change your final digit**, with both values.
- **A `multiplechoice`:** the option text verbatim. Name a second option in
  `alsoDefensible` whenever the page supports it too.
- **A `textin`:** the word or phrase the page uses, in the page's spelling.
  When the packet's `answerForm` is `formula` or `equation`, type it as a
  learner would on a plain keyboard, capitals exact: `Ca3(PO4)2`, `SO4^2-`,
  `Na2CO3.10H2O`, `2H2 + O2 -> 2H2O` (state symbols optional, a charge
  after `^`, smallest whole-number coefficients). The exception: an
  equation the question asks for one mole of a substance (a formation
  equation) takes the fractions that puts on the others, typed `1/2` or
  `3/2` (`H2 + 1/2O2 -> H2O`). Check an equation's atoms
  and charge on both sides before you write it down.
  When it is `configuration`, write the answer string as each subshell followed by its count, a space between subshells, every subshell written out unless the question gives a noble-gas core: `1s2 2s2 2p6 3s2 3p1`.
  When it is `ordering`, write the answer string as the members from first to last with `<` between them, each charge after `^`: `Si^4+ < Al^3+ < Ca^2+ < K^+` (a list without `<` or `>` is graded wrong).
  When it is `quantum-numbers`, write the answer string as one set, the four values n, l, mₗ, mₛ in that order with a space between them: `3 1 -1 -1/2` (any correct set of the shell and subshell asked is graded right).
- **A `sortbins`:** the packet lists its `bins` and its `items` (the labels);
  the masked page prints neither. `answer` is a JSON object mapping EVERY
  label to one bin, both verbatim: `{"Uranium": "Metal", "Bromine":
  "Nonmetal", …}`. A label the page lets you place in two bins goes in
  `note`, naming both.
- An item you cannot settle from the page gets your best answer plus
  `"unsure": true` and the reason in `note`.
- Anything wrong on the page outside your item — a worked example whose
  arithmetic fails, a unit that does not cancel, a table that contradicts
  its prose, a stem that prints another item's answer, two items asking the
  same thing — goes in the nearest item's `note` with the line it sits on.
  **So does an item on a masked page whose key or hint is NOT masked**
  (`answer="…"` is what a masked key looks like): say which lines, and do
  not use what they print. The first Knowledge Check's solver found eight
  that way, and the masking was fixed.

## Output

`answers.json` at the path in your task, **written once, at the end**:

```json
{"by":"orchestrator-solver","answers":[
  {"hash":"…","answer":"<as a learner would type it>",
   "alsoDefensible":"<a second answer the page also supports, if any>",
   "note":"<derivation; page defects outside the item, with line>"}
]}
```

Keep each packet's `hash` exactly.

**Final message: two lines** — the answers path and the counts (items
answered, `alsoDefensible` flagged, unsure).
