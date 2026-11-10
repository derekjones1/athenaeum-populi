# OpenStax Chemistry 2e — section-authoring brief

You are authoring **exactly one** section page of OpenStax *Chemistry 2e*
into the Athenaeum Populi Hugo site. Your section number, module id, output
path, and PDF page range are in your task prompt. `SP` is the directory this
brief is in; `$SP/run-facts.md` holds this run's facts and the parent's
decisions, and wins over anything general below.

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. Work from
it. Write only your own page and files under `$SP/` whose names start with
your section number.

**Never run a git command of any kind, not even a read-only one. Do not
spawn sub-agents.** Do not run `npm test`, `npm run ci`, `npm run build`,
`baseline:update`, `ledger:merge`, `validate`, or any `source:*` command. Do
not edit the chapter `_index.md`, the errata file, the media manifest, the
playbooks, a tool, or another section. `npm run verify-section -- <your
page>` is the one command you run repeatedly.

**Every keyed source exercise reaches your page**, one component per
lettered part. The unkeyed ones are omitted and counted in the footer. Count
the module's exercises before you write the Practice block and again before
you write the footer; every number the footer states is one you re-derived.

**Write your content file within your first ~20 tool calls and iterate on it
in place** — a killed agent with a file on disk is resumable. Write a long
section subsection by subsection; after each batch of edits, grep your file
to confirm the bytes landed (several agents write to this tree at once).

## 1. Read, in this order — and only this

1. `$SP/run-facts.md`.
2. `docs/subjects/chemistry.md` — all of it except "Knowledge checks" and
   "What the pilot settled, and what is still open". "Notation", "The section page, in order",
   "Exercises", "Measured quantities", and "Figures" are the rules you
   write to.
3. `docs/subjects/life-sciences.md` — only "The section page, in order",
   "Notation", "Media: vendored figures", and, under "Exercises", the parts
   on `textin` text recall, `selfcheck` model answers and rubrics, "Each
   thing once", and "Leaks across the page". Grep `^## \|^\*\*` for the line
   numbers and read those ranges. This book inherits them.
4. `docs/authoring-playbook.md` — §0 rules 4–5 only; in §3 the Fill-in,
   Multiple choice (text mode), Callouts, Text recall, Self-check, and Media
   figure paragraphs and "The section-final `## Practice` block" up to
   "Knowledge Checks"; and §5.
5. **Only if your module has a numeric keyed answer:**
   `docs/subjects/math.md` — "Fill-in answer shapes" up to the token table,
   the `scientific-notation`, `decimal`, `sig-figs:<n>`, and
   `last-digit:<k>` rows of that table, and under "Standing notes from the
   closures" the "Money and units on a bare-number key" note.
6. The shortcode contracts: only the leading `{{- /* … */ -}}` comment of
   `layouts/shortcodes/fillin.html`, `multiplechoice.html`, `textin.html`,
   `selfcheck.html`, `mediafigure.html`; `verify-section` rejects an unknown
   param.
7. The exemplar named in the run facts, for shape only.

Do not read `AGENTS.md`, `docs/history/`, the other subject playbooks, other
chapters' pages beyond the exemplar, or the checker brief.

## 2. Your sources

- **Transcription authority:** the pinned CNXML
  `sources/openstax/osbooks-chemistry-bundle/modules/<moduleId>/index.cnxml`.
  Read the raw file; `tools/source/cnxml-preview.py` drops cross-references
  and TeX spaces.
- **Visual authority:** `$SP/pdf/ch01/p-00NN.png` (your range is in the run
  facts; the chapter's pooled Key Terms, Key Equations, Summary, and
  Exercises pages and the answer-key pages are listed there too). **The PDF
  is older than the CNXML** (playbook "Source and authority"): where they
  differ, the CNXML wins and the difference is reported, not "fixed".
- **Pre-extracted by the parent** (a convenience, never the authority):
  `$SP/keys-N.M.txt` — objectives, section titles, feature boxes, figures
  with stem, alt, and caption, images outside figures, tables, worked
  examples with each Check Your Learning and its source answer, the summary,
  key equations, the glossary in source order, and every exercise with its
  source key or "unkeyed".
- **Figures:** vendored under `static/media/chemistry/`; every stem with its
  source alt and caption is in `data/media/chemistry.json`. **Open every
  image you use** (`Read` displays a `.webp`). `src` is `chemistry/<stem>`.
  The manifest's `kind` says `photo` for every image; set `kind` from the
  picture on every figure.

## 3. What you produce — one file, in this order

The skeleton, the callout forms, the example form, the notation, and the
footer are the playbooks'. What follows is what they do not print or what
goes wrong.

1. Frontmatter: `title`, `description` (`>-` folded, ending "— adapted from
   OpenStax Chemistry 2e, Section N.M."), `source_section: "N.M"`,
   `weight: M`.
2. Objectives callout, source order and wording (`<md:abstract>`).
3. Full exposition in source order, `##` per `<section>` title, transcribed
   faithfully — no condensing, no improving, no added claim. Bold every
   `<term>` at its defining occurrence. **A factual claim you believe wrong
   is transcribed as printed** and listed under "suspected claim errors" in
   your ledger. A one-word source typo is printed correctly with no inline
   note, and named in the footer and your ledger.
4. **Notation** (playbook "Notation") — the rule is one line: a formula in a
   sentence is Unicode text, a formula inside math is `\ce{…}`. A quantity
   in a sentence is prose (`15.00 g`, `−28.1 °F`, `1,000 mL`); a numeric
   exponent is math (`$1.2 \times 10^{-3}$`); a source display `<equation>`
   is `$$…$$` with `\text{…}` units and `\cancel{\text{…}}` for a
   struck-through unit. Transcribe each MathML expression from the raw
   CNXML, not from the extract.
5. Feature boxes and worked examples in the playbook's forms. A Check Your
   Learning becomes the interactive item or items its keyed answer's shape
   calls for, directly after the example's solution.
6. Figures as `mediafigure`: caption verbatim with its credit; `alt` ≤ 600
   plain-text characters written from the IMAGE — every count ("six boxes,
   seven arrows") taken by counting, and every "each", "all", "only", and
   "gone" re-read against a zoom; an alt directly above an item never
   states what the item asks for; `kind` explicit;
   `eager="true"` on the first only. A `longdesc` for a multi-panel or
   label-dense figure, written from an inventory of the image you put in
   your ledger first. Refer to a figure by describing it, never by number.
7. Tables as Markdown from the CELLS, checked against the PDF.
8. `## Summary`, `## Key equations` (only if the module has that section),
   `## Key terms` (the module's `<glossary>`, source order), `## Practice`,
   then `---` and the `<small>` footer whose `Changes:` clause names every
   adaptation and is true of the page.

## 4. The exercises — what bites

- **The form follows the keyed answer's shape** — the table in playbook
  "Exercises". Do not grade what the source does not key; do not turn an
  explanation into a multiple choice with invented options.
- **The stem is the source's, verbatim.** What you add comes after it and
  prints no number: "Enter the volume in liters." A lettered part's stem is
  the lead-in followed by that part, with the letter dropped. One named
  unit is spelled out, a quotient or product unit is its symbol ("g/mL");
  "with its sign" is never written (lint); a part that leans on an earlier
  part restates that part's given data inline, never in a parenthetical
  sentence and never its answer; an equation set inline ends its sentence
  with a period (lint). Playbook "Stems" has each rule once.
- **Numeric keys.** The key is the bare number the source prints, to the
  figures it prints; the stem names the unit. Declare `sig-figs:<n>
  last-digit:<k>` (playbook "Measured quantities" and the `last-digit` rule
  in "Exercises"); a count takes `whole-number`. A key with a power of ten is
  `a\times10^{n}` with a braced exponent. **Run the arithmetic yourself**
  (`python3 -c`), from the stem's numbers and the book's own conversion
  factors, before you look at the source key; record both in your ledger.
  Then grade your own key and the natural wrong answers through the real
  grader:
  `node -e 'import("./assets/js/lib/math/check-answer.mjs").then(m=>console.log(m.checkAnswer("<typed>","<key>",{form:"<answerForm>"})))'`
  — the key must be `correct`; the unrounded readout `form`; the number
  retyped from the stem never `correct`.
- **`answerDisplay`** shows the answer as the book prints it, unit included
  (`$8.844\ \text{L}$`); a count shows the bare digit; a bare power-of-ten
  factor shows `$10^{-2}$` with no leading ×. Inside math the house lint
  groups a number of four or more digits (`5{,}371`) and bans `\dfrac`: a
  rule in this brief or the run facts that a lint refuses is REPORTED, and
  the lint wins until the parent rules.
- **Multiple choice** only over a set the stem itself names, options in the
  stem's order, the key the source's. Never an invented distractor.
- **`selfcheck`** carries the source solution as the model answer, its
  first letter capitalized and a closing period added and nothing else
  reworded, and 2–6 lowercase `===CHECKS===` clauses in the model answer's
  own words; the bare-value and "Answers will vary" forms are the
  playbook's ("Selfchecks").
- **Fillers** (glossary-recall `textin`, summary or body cloze,
  select-the-term multiple choice) only where an objective group is short
  of the floor, each from ONE module sentence or glossary entry you name in
  your ledger. Never a numeric `textin`. The playbook's four filler rules
  bind: one answer fits (grade the blank's likely rivals — a synonym, any
  other member of an open list — and drop the sentence if one is as right
  as the key); never a word its own objective heading prints; never one
  half of a contrast pair; a select-the-term multiple choice where no cloze
  is unique. The leak rules are life-sciences "Leaks across the page":
  nothing directly above a `textin` prints its key; a hint says where to
  look and never states the key or the fact that decides the item.
- **Hints**: the tool — the equation by its name, the table, the rule or
  definition to recall, the unit chain of a multi-step conversion — never
  the arithmetic on the item's own numbers ("Divide the mass by the
  volume", "Add 273.15"), a remark about THIS number's digits ("Every
  digit here is significant"), the shape of its result, the observation
  that settles a judgment, or the construction of a unit. Read the
  allowed/forbidden table in playbook "Hints" before you write the first
  one: the pilot's authors wrote its forbidden column, some of them after
  the rule existed. A hint points only at a table or equation that is on
  the page and holds what the learner needs.
- **Order inside a Practice group:** the source's keyed items first, in
  source order, then your added items (an added item goes above a keyed
  `selfcheck` whose model answer prints its key).
- **Source notes and the footer never give a key away.** A Source note
  beside an unanswered item prints no source value and no direction of the
  error; the footer names a corrected value without giving it and names an
  added item by where its sentence is, never "(blank: …)" (lint) and never
  a quoted sentence that holds the answer.
- **A display equation row fits the column** — about 60 rendered
  characters. Put a result and its "(round to …)" parenthetical on their
  own aligned row. A browser test measures every row; you cannot see it in
  the Markdown.
- **A unit as the answer**: a one-word or counted unit name is a `textin`
  with the accept crossings the playbook's table lists; a quotient or
  product unit, or kelvin against "°K", is a `multiplechoice` (the text
  grader drops `/`, `·`, and `°`; the lint refuses them in a key).
- **A worked example's stated reasons** are checked against the rule the
  page teaches, and a body cross-reference to end-of-section exercises
  names only exercises the page renders.
- **Every item needs a `hint`** that names the method or the place to look,
  never the result.
- **A `textin` question takes no math and no power of ten** (playbook
  "Notation").
- At most 2–3 interactive items in a row in the BODY; a Check Your Learning
  with more parts than that is split by a sentence of the source's own text
  or reported to the parent. The Practice block is exempt.

## 5. Verify, then report

- `npm run verify-section -- <your page>` until it prints `verified` with no
  ✗; run it again immediately before you report. **A rule that fires on
  sound content is REPORTED, not worked around** — this is the book's first
  chapter, and a lint or grader that misreads chemistry is exactly what the
  parent needs to hear.
- **Source ledger** `$SP/ledger-N.M.md`: per interactive item, the CNXML
  exercise or example id and part, the component, your own computation and
  the source key side by side for a number, the `last-digit` you chose and
  why, any adaptation; per figure, stem, `kind`, whether the alt was
  rewritten; every suspected source defect (element id, text, why,
  correction) and, separately, every suspected claim error. End with a
  **tally**: keyed exercises and parts, Check Your Learning items, unkeyed
  exercises omitted, fillers by kind. The footer's numbers are copied from
  the tally.
- **Answer-ledger results** `$SP/ledger-results/N.M.json`, shaped
  `{"results":[{"hash":"…","verdict":"ok","note":"…"}]}`; hashes from
  `node tools/verify/answer-ledger.mjs list content --unverified` (a JSON
  array; filter to your page; copy the FULL hash). `ok` only after
  re-deriving the item against the CNXML; the note says where the key comes
  from (`source exercise <id> part (b)`, `Check Your Learning of example
  <id>`, `glossary recall: <term>`, `cloze from summary sentence "…"`).
- **Final message, fifteen lines at most:** counts (figures; items by kind;
  key terms; keyed exercises carried and unkeyed omitted), the
  `verify-section` tail line, suspected source defects and claim errors
  (count; details in the ledger), every departure from the source in one
  line each, and — most important for this pilot — **every place the
  playbook, this brief, the run facts, the lint, or the grader was wrong,
  silent, or awkward for your module**, with the exact item. Do not paste
  the ledger.
