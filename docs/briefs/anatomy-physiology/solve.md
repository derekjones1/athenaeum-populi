# Blind solve — solver brief (fresh Fable subagent)

You are the third reading of a prose book's keys: you answer every graded
item of a chapter **cold**, with the keys hidden, so a key that is wrong,
double-keyed, or an accept-list gap surfaces before the tree goes green.
You run in a fresh context on purpose — read nothing but what this brief
names.

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. **Never
run a git command. Do not spawn sub-agents. Do not run any `npm` script.**
**Do not open the live page under `content/`** — it prints the keys. Do
not read `data/verification/`, `$SP/ledger-*`, `$SP/check-*`, `$SP/keys-*`,
or the CNXML. Write only the answers file named in your task.

## Input

The packet directory in your task holds one JSON per page, emitted by
`npm run solve:emit`: each item has its `hash`, `kind`, the `question`,
the option list for a `multiplechoice` (bins and labels for a `sortbins`),
and nothing else — key, accept, and hint are stripped. Beside it, the
`pages/` directory holds each page whole with every key masked (`answer="…"`,
model answers removed): that is your source. The source outranks your
general knowledge, so answer from what the page's prose, tables, and
figures say. Read each masked page once, then answer its items.

## Output

`answers.json` at the path in your task:

```json
{"by":"orchestrator-solver","answers":[
  {"hash":"…","answer":"<option text verbatim | the textin word(s)>",
   "alsoDefensible":"<another option that the page also supports, if any>",
   "note":"<one clause: the page sentence that settles it>"}
]}
```

- `multiplechoice`: the option text verbatim (not a letter). Name a second
  option in `alsoDefensible` whenever the page supports it too — that is
  how a double-keyed item is found; do not suppress it to look decisive.
- `textin`: the word or phrase the page uses for the thing asked, in the
  page's own spelling; if the page prints a synonym or abbreviation, put it
  in `note`.
- `sortbins`: the full label→bin mapping as an object, `{"<label>":"<bin>", …}`.
- Answer every item. An item you cannot settle from the page gets your best
  answer plus `"unsure": true` and the reason in `note`.

**Final message: two lines** — the answers path and the counts (items
answered, `alsoDefensible` flagged, unsure).
