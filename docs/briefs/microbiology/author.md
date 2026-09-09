# OpenStax Microbiology — section-authoring brief

You are authoring **exactly one** section page of OpenStax *Microbiology*
into the Athenaeum Populi Hugo site. Your section number, module id, output
path, and PDF page range are in your task prompt. `SP` is the directory this
brief is in; `$SP/run-facts.md` holds this run's facts and the parent's
decisions, and wins over anything general below.

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. Work from
it. Write only your own page and files under `$SP/` whose names start with
your section number.

**Never run a git command of any kind. Do not spawn sub-agents.** Do not run
`npm test`, `npm run ci`, `npm run build`, `baseline:update`, `ledger:merge`,
`validate-content`, or any `source:*` command. Do not edit the chapter
`_index.md`, the errata file, the media manifest, the playbooks, or another
section. `npm run verify-section -- <your page>` is the one command you run
repeatedly.

**Write your content file within your first ~20 tool calls and iterate on it
in place** — a killed agent with a file on disk is resumable. A long section
is written subsection by subsection, appended; after each batch of edits,
grep your file to confirm the bytes landed (many agents write to this tree
at once).

## 1. Read, in this order — and only this

1. `$SP/run-facts.md`.
2. `docs/subjects/microbiology.md` — all of it. It wins wherever it differs
   from the baseline.
3. `docs/subjects/life-sciences.md` — the baseline: the page skeleton,
   media and alt policy, `textin`/`selfcheck`/`sortbins` rules, **"Unkeyed
   source questions: graded when the module fixes the answer"** (the four
   honest graded forms and when an item STAYS a selfcheck), the table →
   `sortbins` rule, and "What the first retrofit's checkers caught".
4. `docs/authoring-playbook.md` — **§0 (source-first), §3 (the component
   contract and the `## Practice` block), and §5 (working rules) only.**
   Grep `^## ` for the line numbers and Read those ranges; §1, §2, §4, and
   §6 are math-only or parent-only.
5. The shortcode contracts you will use: `layouts/shortcodes/multiplechoice.html`,
   `textin.html`, `selfcheck.html`, `mediafigure.html`, `sortbins.html`.
6. ONE exemplar page named in the run facts, once, for voice and shape.

Do not read `AGENTS.md`, `docs/history/`, other chapters' pages beyond the
exemplar, or the checker/claim-pass briefs.

## 2. Your sources

- **Transcription authority:** the pinned CNXML
  `sources/openstax/osbooks-microbiology/modules/<moduleId>/index.cnxml`.
  `python3 tools/source/cnxml-preview.py <file>` is a reading aid that bolds
  `no-emphasis` terms as if defined and prints every cross-reference as
  `()` — read the raw file for both.
- **Visual authority:** `$SP/pdf/chNN/p-0NNN.png` (ranges in the run facts).
  The section's exercises are in the CNXML per section; the pooled PDF
  pages are visual confirmation only.
- **Pre-extracted by the parent** (a convenience, never the authority —
  confirm every key against the raw CNXML): `$SP/keys-N.M.txt` (objectives,
  defined terms with context, summary, every Check Your Understanding
  question, every exercise with options and source key or "source prints no
  key", every figure with stem/alt/caption) and `$SP/terms-N.M.md` (the
  `## Key terms` scaffold with each definition looked up and its provenance
  in an HTML comment — delete the comments from the page, keep the
  provenance in your ledger). `python3 tools/source/microbiology-prep.py
  glossary <term>…` looks up anything else; try the singular, the plural,
  and the hyphen/space variant before concluding a headword is absent.
- **Figures:** vendored under `static/media/microbiology/`; every stem with
  its source alt and caption is in `data/media/microbiology.json`. **Open
  every figure you use** (`Read` displays a `.webp`). `src` is
  `microbiology/<stem>`.

## 3. What you produce — one file, in this order

The page skeleton, the callout forms, the figure rules, the notation, and
the footer are the playbooks' (life-sciences "The section page, in order";
microbiology §3–§5 and "Media"). What follows is only what those do not
print or what authors most often get wrong.

1. Frontmatter: `title`, `description` (`>-` folded, ending "— adapted from
   OpenStax Microbiology, Section N.M."), `source_section: "N.M"`,
   `weight: M`.
2. Objectives callout, source order and wording.
3. Full exposition in source order, `##` per `<section>`, transcribed
   faithfully — no condensing, no improving, no added claim. Bold every
   class-less `<term>` at its defining occurrence; a `no-emphasis` term is
   an index entry, not bold, not a key term. Footnotes become inline
   parenthetical citations (bare access URLs dropped, DOIs kept). A
   one-word source typo is printed correctly WITHOUT an inline note but
   named in the footer AND in your ledger; **a factual claim you believe
   wrong is transcribed as printed** and listed under "suspected claim
   errors" — the claim pass and the parent adjudicate it.
4. Feature boxes as callouts per the microbiology table; a box that ends
   with questions keeps them as plain bullets, unanswered.
5. Check Your Understanding boxes: a bold `**Check Your Understanding**`
   line then one body item per bullet, at the note's position — graded when
   ONE sentence, table, or lettered figure of your own module fixes the
   whole answer, `selfcheck` otherwise. Every key, distractor, model answer,
   and rubric clause comes from your own module. A box of more than three
   bullets is two labelled runs.
6. Figures as `mediafigure`: caption verbatim with its credit; `alt` ≤600
   plain-text characters from the IMAGE (this book's source alts carry
   errors — list each in your ledger); a `longdesc` walk-through for any
   drawn or multi-panel figure whose labels, steps, or counts the caption
   does not name — draft it first, then the alt; `kind` explicit on every
   figure, judged from the picture; `eager="true"` on the first only.
7. Exercise images (`_img` stems, a bare `<media>` inside an exercise):
   `mediafigure` then its item, inside the Practice group of the objective
   it serves; you write the caption; alt, caption, and `longdesc` must not
   answer the paired item. The form of each is decided in the run facts.
8. Tables with a `summary`: Markdown from the CELLS, checked against the
   PDF; each comparison table gets ONE `sortbins` (decision in the run
   facts). A table printed as an image is transcribed from the image.
9. `## Summary` verbatim as bullets; `## Key terms` from the scaffold in
   body order (a module with no defined terms has no heading); `## Practice`
   last; then `---` and the `<small>` footer whose `Changes:` clause names
   EVERY adaptation and is true of the page — counts of graded conversions
   and author-written model answers, sentence-derived definitions, every
   filler item and its sentence, every unused source item and why, every
   one-word correction, every reordered item, the Clinical Focus link
   replacements, author-written captions. The parent logs errata at
   close-out; do not claim "logged as an erratum".

## 4. The exercises — what bites

The keyed/unkeyed table, the four honest graded forms, the model-answer
conditions, the Practice floor and fill order, and the accept-list rule are
in the playbooks. Apply them literally; these are the recurring failures:

- **The one-sentence test is literal.** A conversion that needs two
  sentences, a paragraph boundary, an inference, or a word the module never
  prints stays a `selfcheck`. The source stem stays verbatim (a referent
  may be added, never a clause). Distractors are the module's own sibling
  terms — never invented, never a claim the module makes elsewhere.
- **Never edit a source option, stem, or key to dodge a leak** — reorder
  and disclose, or drop and name it in the footer.
- **Leaks:** grep every stem, hint, option list, alt, caption, and
  `longdesc` on the page for every key you add, forwards and backwards. A
  distractor directly above a `textin` may not be its key. A body figure
  whose caption names the answer sends that body item back to `selfcheck`.
- **`textin`:** unpaired tag; answer 1–4 words; no `$`; the answer in
  neither question nor hint; `accept` is `|`-separated and lists only what
  the grader would otherwise miss (irregular plural or singular of a keyed
  plural, a module abbreviation, an abbreviated binomial, a formula in
  ASCII, a hyphen between letters) — a member that normalizes to the answer
  is rejected. Run every member through the real grader:
  `node -e 'import("./assets/js/lib/text/check-text.mjs").then(m=>console.log(m.checkText("<variant>","<answer>",{accept:"<accept>"})))'`
- **Keys built from the answer's own vocabulary:** a why-question keyed to
  one abstract noun is the weakest form — prefer the module's phrase, and
  list its synonyms the module prints.
- **`sortbins`:** bin labels are the module's own group names, the
  classification word alone; ≥2 items per bin from the table AND the body;
  no bin word on an item; 4–12 items interleaved. A one-item-per-bin
  labelling question is per-letter `multiplechoice` items, not a sortbins.
- **Author-built MCs vary the key position.** Source-keyed items keep
  source order.
- **Fillers** (summary/body cloze, select-the-term, term recall) name their
  sentence in the ledger and leak into each other as readily as source items.
- **Sequence-derivation questions** are fully worked selfchecks (every
  sequence with its 5′/3′ ends, every amino acid, the mutation type); the
  checker re-derives them base by base.
- Every regular-section item needs a concise, strategy-oriented `hint`; a
  True/False hint names the sentence tested, never the verdict, and the
  stem carries no "True or false:" prefix.

## 5. Verify, then report

- `npm run verify-section -- <your page>` until it prints `verified` with no
  ✗; run it again immediately before you report. A rule that fires on sound
  content is REPORTED, not worked around.
- **Source ledger** `$SP/ledger-N.M.md`: per interactive item, the CNXML
  exercise/solution id or its provenance (`author-written from § …`,
  `graded from § …: "<the fixing sentence>"`, `figure-keyed: <what the image
  shows>`, `cloze from … sentence: "…"`), the component, any adaptation;
  per figure, stem, `kind`, whether the alt was rewritten and why, whether
  a `longdesc` exists; per Key-terms bullet its provenance; every unused
  source item with its reason; every suspected source defect (module id,
  element id, text, why, correction) and, separately, every suspected claim
  error.
- **Answer-ledger results** `$SP/ledger-results/N.M.json`, shaped
  `{"results":[{"hash":"…","verdict":"ok","note":"…"}]}`; hashes from
  `node tools/verify/answer-ledger.mjs list content --unverified` (a JSON
  array; filter to your page; copy the FULL hash). `ok` only after re-reading
  the item against the CNXML and your own text; `defect` if a source key is
  wrong (and report it).
- **Final message, ten lines at most:** counts (figures; exercises by kind;
  key terms; body items graded vs selfcheck), the `verify-section` tail
  line, the number of suspected source defects and claim errors (details
  are in the ledger), every departure from the source in one line each,
  and every place the playbooks, this brief, the run facts, or a lint was
  wrong or silent for your module. Do not paste the ledger.
