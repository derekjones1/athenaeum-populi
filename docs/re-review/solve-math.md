# Blind solve — math solver brief (fresh Fable subagent)

You are the third reading of a math page's keys: you answer every graded
item the parent lists **cold**, with the keys hidden, so a wrong key, a
double key, or a form that refuses a right answer surfaces before the tree
goes green. Read nothing but what this brief names.

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. `SP` is
the scratchpad directory named in your task. **Never run a git command. Do
not spawn sub-agents. Do not run any `npm` script.** **Do not open the live
page under `content/`** — it prints the keys. Do not read
`data/verification/`, `$SP/ledger-*`, `$SP/reports/`, the CNXML, or any
checker report. Write only the answers file named in your task.

## Input

The packet directory in your task holds one JSON per page, emitted by
`npm run solve:emit`: each item has its `hash`, `kind`, the `question`, the
`answerForm`/`answerMode` it will be graded under, and the option list for a
`multiplechoice` — key, accept, hint, and `answerDisplay` are stripped.
Beside it, `pages/` holds each page whole with every key masked: that is
your source for the worked examples, figures, and tables an item depends
on. The packets may be a subset (`--only`): answer exactly the hashes in
the packets. A `graphplot` is never emitted; the parent re-derives those.

## Method

- Solve every item yourself, on paper in `note`, from the page's own
  method. Do the arithmetic by running it (`node -e`, `python3 -c`), never
  in your head, and keep the derivation in `note` (one or two clauses).
- Write the answer in the key's expected shape: `\frac{a}{b}` never a
  slash, braces on multi-character exponents, `\sqrt{17}` braced, `\pi`
  not a decimal unless the ask rounds, a list as `a,b` in the order the ask
  pins (or any order under `answerMode="unordered"`), a pair as `(x,y)`,
  an interval as `[a,b)`, a degree answer with `^\circ`, a percent with
  `\%`, money as the bare number. Give the finished form the `answerForm`
  names (reduced, factored completely, expanded with like terms combined).
- The page outranks your general knowledge: a convention (rounding place,
  factor order, which solution is "smaller") is the page's.
- An item you cannot settle from the page gets your best answer plus
  `"unsure": true` and the reason in `note`.
- Read the whole masked page once before answering its items. Anything
  wrong on the page outside your item — a worked example whose arithmetic
  fails, a figure that contradicts its prose, a stem that prints another
  item's answer, two items asking the same thing — goes in that item's
  `note` with the line it sits on: solvers find defects the fixers missed.

## Output

`answers.json` at the path in your task, **written once, at the end** — a
solver killed by a session limit is relaunched fresh, so do not write
partial files or leave the work half-recorded anywhere else:

```json
{"by":"orchestrator-solver","answers":[
  {"hash":"…","answer":"<TeX, as a learner would type it>",
   "alsoDefensible":"<a second value the page also supports, if any>",
   "note":"<derivation; page defects outside the item, with line>"}
]}
```

`multiplechoice`: the option text verbatim (not a letter); name a second
option in `alsoDefensible` whenever the page supports it too — that is how
a double key is found. Keep the packet's `hash` exactly; an item whose
packet order looks shifted against its page is still answered by hash.

**Final message: two lines** — the answers path and the counts (items
answered, `alsoDefensible` flagged, unsure).
