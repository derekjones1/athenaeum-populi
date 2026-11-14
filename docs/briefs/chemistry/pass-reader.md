<!-- The brief every reader of a consistency pass receives, whole, with a
scope file beside it. Written for the pass of November 14, 2026
(docs/history/chemistry.md, "Seven decisions and a consistency pass"): six
Opus readers on a snapshot of HEAD while the parent edited the live tree —
one per chapter, one across the book, one for the kit. Forty-eight
findings, no wrong key; about a tenth re-raised something ruled, against a
third on the pass before it, whose readers had no "what is NOT a finding"
section. The parent fills the angle-bracket places and writes the scopes
(below, after the brief). -->

# Consistency reader — a pass over finished Chemistry pages (read-only)

You are one of several readers looking for **inconsistencies** in the finished
pages of a web textbook before more of it is written. A learner — a first-year student who
has only this site — must be able to read a page, answer its items, and go
on. You find where the book disagrees with itself; the parent session
decides and fixes. Your scope is the last section of this file's sibling,
`scope-<your name>.md`.

## Hard rules

- **Read-only.** You edit nothing except your own report file. No git
  command of any kind, read-only ones included (`git status`, `git diff`,
  `git log`, `git show` are all forbidden — another process shares the tree).
- **Read the snapshot, not the live tree.** The live `content/` is being
  edited while you read. The pages as committed are under
  `SNAP = <the snapshot folder the parent names>`
  (`$SNAP/content/physical-sciences/chemistry/…`, `$SNAP/docs/…`,
  `$SNAP/AGENTS.md`). Quote line numbers of the snapshot files.
- Tools and code are read from the repository,
  `/Users/derek/GolandProjects/athenaeum-populi` (`tools/`, `assets/js/lib/`,
  `data/`, `layouts/`). You may RUN read-only Node one-liners and scripts you
  write under your own scratch folder
  (`<scratch>/readers/<your name>-work/`), never a script that writes
  into the repository, never `npm run build`, `npm test`, `npm run ci`, or
  any `--write` flag.
- The pinned source (CNXML) is
  `/Users/derek/GolandProjects/athenaeum-populi/sources/openstax/osbooks-chemistry-bundle/modules/<mid>/index.cnxml`
  (3.3 is `m68703`; the section→module map is
  `data/openstax/source-map.json`). Open it when you need to see what the
  source prints. The PDF is `sources/chemistry-2e_-_WEB.pdf`.

## What counts as a finding

An **inconsistency**: one thing done two ways, or a statement the book
contradicts elsewhere, where a learner (or the next author) is misled.
Lenses, in order of worth:

1. **An example whose method does not reach its sibling's key.** Retrace
   every worked example and in-body calculation from the numbers it PRINTS
   (not from unrounded values you carry yourself): does the printed result
   follow from the printed intermediates? Then apply the example's displayed
   method — rounding where it rounds — to its Check Your Learning item(s)
   and to any Practice item whose hint points at that example: does the
   learner land on the key, inside the item's allowance (`last-digit:<k>` of
   the `sig-figs:<n>`th figure)? Run the arithmetic in Node; never do it in
   your head.
2. **A value, name, formula, unit, or statement printed two ways** — body
   against table, Key terms, Summary, stem, hint, model answer, alt text,
   caption, footer, another page, an appendix.
3. **Items of one family treated differently** — parts of one exercise, or
   the same kind of ask on different pages — in the closing "Enter …"
   sentence, the unit named, the `answerForm` tokens, the hint, the
   `answerDisplay`, the option list or its order, a Source note one has and
   its twin lacks.
4. **Asked before taught, or asked without the datum**: an item needs a
   number, table, method, or term the page (and the pages before it) never
   gives, or gives in another form.
5. **A footer that no longer describes its page**: a count that a tally
   does not reproduce (count by script), a departure it names that the page
   does not have, a visible departure it does not name.
6. **A playbook rule the page breaks** (`$SNAP/docs/subjects/chemistry.md`):
   name the rule and quote it.
7. **Feedback that differs between siblings**: optional, at most twenty
   probes. The graders are plain ES modules you can import in Node:
   `assets/js/lib/math/check-answer.mjs` (`checkAnswer(typed, key, {form})`
   — read the file's own tests for the call shape),
   `assets/js/lib/text/check-text.mjs` (`gradeText`), and
   `assets/js/lib/text/check-chem.mjs` (`checkChem`). Report a right answer
   refused, or a bare "Not quite" for an ordinary mistake where a sibling
   kind of item says why.

## What is NOT a finding — do not raise these

- **A hint that should say more.** Read "Hints" in
  `$SNAP/docs/subjects/chemistry.md` first (the Allowed / Forbidden table).
  A hint names the tool and never the fact that decides the item; a proposal
  that a hint state the deciding fact, the arithmetic, or the shape of the
  result is not a finding.
- **Anything already ruled.** Before writing a finding about a page, grep
  `$SNAP/docs/openstax-errata.md` for the section ("§2.3", the module id) —
  the Chemistry entries (the parent gives the line range and numbers), each with
  a "Local handling" line, and the chapter sections there end with their own
  "reviewed and not errata" paragraphs — and read `$SNAP/docs/history/chemistry.md`
  from its last dated pass to the end (the parent names the heading):
  "Raised and not acted on, with the reason" is settled. The parent
  lists here, by page, whatever is being fixed in the same session — do
  not report those again, but DO report other places with the same defect.
- **The source's own shape**, carried on purpose: source wording kept
  verbatim in stems, the unkeyed (even-numbered) exercises omitted, lead-ins
  restated per part, Key terms in the module's order, a keyed answer that
  differs from the source's print by a unit or two of its last figure
  (the book's own atomic masses — `data/chemistry/elements.json`, IUPAC five
  figures — are the data; the page says so in a Source note).
- **What the machines already assert**: lint, link, build, key-vs-source,
  ledger. Do not re-report that a key matches or that a page builds.
- Taste: wording you would have chosen differently, with no second place in
  the book that does it the other way.

## Each finding

Append to your report file as you go (so nothing is lost if you are cut
off), one block per finding:

```
### <n>. <page file>:<line> — <eight words>
- **Class:** lens 1–7.   **Severity:** blocks a learner | misleads | cosmetic | doc
- **Here:** “<quote>” (snapshot line)
- **Against:** “<quote>” (file:line) — or the rule it breaks
- **Reproduce:** the command or the arithmetic you ran, with its output
- **Proposed fix:** exact, minimal; say what else must change with it
  (a key, a footer clause, a Source note, an erratum)
- **Confidence:** high | medium | low, and what you did not check
```

A count or an absence claim ("no page says…", "17 items") needs a command
you ran, not a search you remember. If you are unsure whether something was
ruled, say so in Confidence rather than dropping it.

End the report with two short lists: **Checked and consistent** (what you
verified and found sound, so the next reader need not), and **Could not
check** (what you lacked).

## Your reply

When done, reply in at most fifteen lines: the path of your report, the
count of findings by severity, and the three you think matter most. Do not
paste the report.

---

# For the parent: running the pass

1. **Snapshot HEAD** so the readers are not reading pages in flight:
   `git archive HEAD content/physical-sciences docs AGENTS.md CLAUDE.md package.json | tar -x -C $SP/headtree`,
   then copy the git-ignored `docs/openstax-errata.md` in beside the docs.
2. **One scope file per reader** (`scope-<name>.md`, twenty lines), and a
   three-line launch prompt naming the brief and the scope. Readers are
   Author-kind agents (Opus), read-only, with no git command.
   - *one per chapter*: its pages, every lens, and the one thing that
     chapter is most likely to have wrong (the pilot never swept; a chapter
     authored in three runs has seams; a chapter recomputed from the
     periodic table retraces every example from its PRINTED numbers);
   - *across the book*: the same thing compared across chapters, mostly by
     script — closing sentences, `answerForm` tokens by kind of ask, hints
     shared by a family, cross-reference titles, one datum printed two
     ways, Key terms defined twice, Source-note and footer wordings, the
     cover and landings against the pages;
   - *the kit*: documents against each other and against the code — a rule
     stated two ways, a command or count the code contradicts, a "(lint)"
     nothing holds, a retired mechanism still described, the history's
     open items against the playbook's "What is still open".
3. **Triage against the reports, not the hand-backs.** A finding that is a
   plain defect against a rule already written (a stale footer clause, a
   token the rule gives otherwise, a note the playbook requires) is fixed;
   a finding that is a choice (a new grader message, a hint family
   rewritten, a corrected appendix cell) is put to Derek with a
   recommendation. Verify each against the page before acting: the
   arithmetic by a run, a "ruled" claim against the errata log.
4. A stem edit re-solves, a hint or token edit carries (`README.md` of
   `docs/re-review/`); the parent takes the ledger snapshot BEFORE the
   first edit of the session.
