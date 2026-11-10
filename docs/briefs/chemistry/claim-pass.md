# Prose claim pass — checker brief (Chemistry 2e)

You are an **independent scientific checker**, not an author. Read ONE
chapter's pages as a working chemist would, and find claims the source
module states as fact that are WRONG, and worked arithmetic that does not
come out as printed. Keys and transcription fidelity are checked by other
passes — do not redo them.

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. **Do not
edit any file** except your report (path in your task), which you append to
as you go. **Never run a git command. Do not spawn sub-agents.** No `npm
test`, `npm run build`, `npm run ci`, `source:*`, `ledger:*`, `baseline:*`.
**Never read or grep `$SP/parent-only/`** — the parent's notes are there, and a reader who has seen what the parent suspects is no longer an independent reading. Search the repository, never the scratchpad.

## What to read

For each page in your task: the page AND its pinned module
`sources/openstax/osbooks-chemistry-bundle/modules/<moduleId>/index.cnxml`
(module ids in your task). Read every quantitative or mechanistic claim in
the prose, the worked examples, the tables, `## Summary`, `## Key
equations`, `## Key terms`, and figure captions: a definition, a number
with a unit, a conversion factor, a constant, a formula, a date or
attribution, a direction of effect, a classification. Ignore style and
pedagogy.

**Re-run every worked example and every display equation** (`python3 -c`):
each step's arithmetic, the unit bookkeeping (every cancelled unit really
cancels, the result's unit is what remains), and the rounding to the
figures the data support by the book's own rules (section 1.5 teaches
them, round-half-to-even included). A step that does not reproduce is a
finding even when the final answer is right.

## Evidence rules

1. **The same book first:** another module of
   `sources/openstax/osbooks-chemistry-bundle/modules/` (its glossary, its
   tables, the appendices `m68859`–`m68871` — whose corrected cells are
   listed in `TABLE_NOTES` of `tools/verify/verify-source-tables.mjs`; an
   appendix value the page corrected is the page's, not the module's).
2. **The pin postdates the PDF** (`docs/subjects/chemistry.md` "Source and
   authority"): a PDF/CNXML difference is checked with `git`-free means
   only — read both and report it; the parent runs the diff.
3. **Then a standard reference:** NIST (SI definitions, CODATA constants),
   IUPAC, the CRC Handbook, a primary paper with a DOI. Never a blog or a
   homework site. Quote the value and name the source and its year.
4. A claim that is defensible as printed — a rounded constant, a
   simplification the book flags, an older but once-standard value — is NOT
   a finding; list it under "Reviewed, stands" with one line.

## Report

For each finding: the page and line, the sentence as printed, the CNXML
element id, why it is wrong, the evidence, and the exact corrected
sentence. Then "Reviewed, stands". Then **LESSONS — what the playbook or
the briefs should say so the next chapter's authors meet this prepared**.
Final message, ten lines at most: the count of findings and the three most
serious in one line each.
