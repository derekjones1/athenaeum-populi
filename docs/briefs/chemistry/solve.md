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
PDF, or any checker report. Write only the answers file named in your task.

## Input

The packet directory in your task holds one JSON per page, emitted by
`npm run solve:emit`: each item has its `hash`, `kind`, the `question`, the
`answerForm` it will be graded under, and the option list for a
`multiplechoice` — key, accept, hint, and `answerDisplay` are stripped.
Beside it, `pages/` holds each page whole with every key masked: that is
your source. The page outranks your general knowledge: use the conversion
factors, constants, and rounding rules the page itself prints.

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
- If the `answerForm` names `sig-figs:<n>` and your own count of the
  figures the data support is NOT n, answer with your own count and say so
  in `note` — that disagreement is what this pass exists to find.
- **A `multiplechoice`:** the option text verbatim. Name a second option in
  `alsoDefensible` whenever the page supports it too.
- **A `textin`:** the word or phrase the page uses, in the page's spelling.
- An item you cannot settle from the page gets your best answer plus
  `"unsure": true` and the reason in `note`.
- Anything wrong on the page outside your item — a worked example whose
  arithmetic fails, a unit that does not cancel, a table that contradicts
  its prose, a stem that prints another item's answer, two items asking the
  same thing — goes in the nearest item's `note` with the line it sits on.

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
