# OpenStax Anatomy and Physiology 2e — section-authoring brief

You are authoring **exactly one** section page of OpenStax *Anatomy and
Physiology 2e* into the Athenaeum Populi Hugo site. Your section number,
module id, output path, and PDF page range are in your task prompt. `SP` is
the directory this brief is in; `$SP/run-facts.md` holds this run's facts
and the parent's decisions, and wins over anything general below.

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. Work from
it. Write only your own page and files under `$SP/` whose names start with
your section number.

**Never run a git command of any kind. Do not spawn sub-agents.** Do not run
`npm test`, `npm run ci`, `npm run build`, `baseline:update`, `ledger:merge`,
`validate`, or any `source:*` command. Do not edit the chapter
`_index.md`, the errata file, the media manifest, the playbooks, or another
section. `npm run verify-section -- <your page>` is the one command you run
repeatedly.

**Every source exercise reaches your page.** Every Review Question and every
Critical Thinking Question is keyed by the source and is graded or a
`selfcheck` exactly as the playbook table says — never absent. An
Interactive Link Question is the one exception with a rule of its own
(playbook rule 1): a graded `selfcheck` only when the module text fixes its
answer, otherwise a prompt inside its callout, and the footer counts both.
Count the module's exercises before you write the Practice block and count
them again before you write the footer; every number the footer states is
one you re-derived, not one you remembered.

**Write your content file within your first ~20 tool calls and iterate on it
in place** — a killed agent with a file on disk is resumable. Write a long
section subsection by subsection, appended; after each batch of edits, grep
your file to confirm the bytes landed (many agents write to this tree at
once).

## 1. Read, in this order — and only this

1. `$SP/run-facts.md`.
2. `docs/subjects/anatomy-physiology.md` — all of it except "Where the
   files go" after the tree, "Knowledge checks", and "Build budgets". It
   wins wherever it differs from the baseline. "What is the same as
   Biology 2e" is the mapping you build from; rules 1–5 are this book's
   own; the lessons at the end of "Exercises" are the defects the last runs
   shipped.
3. `docs/subjects/life-sciences.md` — skip "Where the files go",
   "Knowledge checks", "Completion audit", and "Done checklist". The
   baseline: the page skeleton
   ("The section page, in order"), media and alt policy, `textin`/
   `selfcheck`/`sortbins` rules, **"Unkeyed source questions: graded when
   the module fixes the answer"** (the honest graded forms — you apply them
   to feature-box questions and to Interactive Link Questions), the table →
   `sortbins` rule, **"No source exercise is ever dropped, and 'duplicate'
   is a claim to prove"**, and "What the first retrofit's checkers caught".
4. `docs/authoring-playbook.md` — **§0 rules 4–5 only; in §3 only the
   Multiple choice (text mode), Callouts, Text recall, Self-check, Sort
   into bins, and Media figure paragraphs and "The section-final
   `## Practice` block" up to "Knowledge Checks"; and §5 (working
   rules).** Grep `^## \|^\*\*` for the line numbers and Read those
   ranges; the rest is math-only, KC-only, or parent-only (§0 rule 1's
   `git status` is the parent's, never yours).
5. The shortcode contracts: only the leading `{{- /* … */ -}}` comment (the
   param list) of `layouts/shortcodes/multiplechoice.html`, `textin.html`,
   `selfcheck.html`, `mediafigure.html`, `sortbins.html`; `verify-section`
   rejects an unknown param.
6. ONE exemplar page named in the run facts, once, for voice and shape.

Do not read `AGENTS.md`, `docs/history/`, `docs/subjects/biology.md`,
`docs/subjects/microbiology.md`, other chapters' pages beyond the exemplar,
or the checker/claim-pass briefs.

## 2. Your sources

- **Transcription authority:** the pinned CNXML
  `sources/openstax/osbooks-anatomy-physiology/modules/<moduleId>/index.cnxml`.
  `python3 tools/source/cnxml-preview.py <file>` prints every
  cross-reference as `()` — read the raw file.
- **Visual authority:** `$SP/pdf/chNN/p-0NNN.png` (ranges in the run facts).
  The pooled PDF exercise pages are visual confirmation only. **The PDF is
  older than the CNXML**: if your module is in the playbook's September-8
  table, the CNXML's wording or image is the corrected one and the PDF's is
  not a defect to report.
- **Pre-extracted by the parent** (a convenience, never the authority —
  confirm every key against the raw CNXML): `$SP/keys-N.M.txt` (objectives,
  defined terms with context, the glossary, summary, every feature box with
  its link and closing question, every exercise with options and source
  key, every table, every figure with stem/alt/caption, whether the module
  ends with References) and `$SP/terms-N.M.md` (the `## Key terms`
  scaffold: the module's own `<glossary>` in source order, with a flag on
  any glossary term the body never bolds and a list of body terms that have
  no glossary entry). `python3 tools/source/anatomy-physiology-prep.py
  glossary <moduleId> <term>…` looks anything up in your module's glossary.
- **Figures:** vendored under `static/media/anatomy-physiology/`; every stem
  with its source alt and caption is in `data/media/anatomy-physiology.json`.
  **Open every figure you use** (`Read` displays a `.webp`). `src` is
  `anatomy-physiology/<stem>`. The manifest's `kind` is wrong for most of
  this book's illustrations — set it from the picture on every figure.

## 3. What you produce — one file, in this order

The page skeleton, the callout forms, the figure rules, the notation, and
the footer are the playbooks' (life-sciences "The section page, in order";
anatomy-physiology rules 1–5 and "Exercises"). What follows is what those
do not print or what authors most often get wrong.

1. Frontmatter: `title`, `description` (`>-` folded, ending "— adapted from
   OpenStax Anatomy and Physiology 2e, Section N.M."), `source_section:
   "N.M"`, `weight: M`.
2. Objectives callout, source order and wording (from `<md:abstract>`).
3. Full exposition in source order, `##` per `<section>`, transcribed
   faithfully — no condensing, no improving, no added claim. Bold every
   class-less `<term>` at its defining occurrence (this book has no
   `no-emphasis` terms). Footnotes become inline parenthetical citations
   (bare access URLs dropped, DOIs kept). A one-word source typo is printed
   correctly WITHOUT an inline note (never a Source note, whatever the run
   facts seem to say) but named in the footer AND in your ledger. Every
   figure cross-reference you reword ("see the figure below, panel a" for a
   `<link>` + "a") is named in the footer — none dropped, none silent;
   **a factual claim you believe wrong is transcribed as printed**
   and listed under "suspected claim errors" — the claim pass and the
   parent adjudicate it.
4. Feature boxes as callouts per the playbook's table (rule 2), headed with
   the printed box name and the note's own title. An Interactive Link
   callout keeps its link (describe the destination in the link text) and
   its closing question as a plain sentence; whether that question is also
   a graded `selfcheck` right after the callout is rule 1 and the run
   facts' Part C decide it per item. A Disorders/Homeostatic/Everyday/
   Career/Aging box that ends in a question keeps it as a plain bullet,
   unanswered, unless the box itself fixes the answer (then a `selfcheck`
   under the baseline's unkeyed-question rule).
5. Figures as `mediafigure`: caption verbatim with its credit; `alt` ≤600
   plain-text characters from the IMAGE — this book's source alts often say
   only that "the major parts are labeled"; yours names what is drawn and,
   where the caption does not, the labeled structures in the artwork's
   order (a `longdesc` for a multi-panel or label-dense figure); `kind`
   explicit on every figure, judged from the picture; `eager="true"` on the
   first only. Panels, sides (the subject's left/right), and counts come
   from the drawing, never from the source alt. Before writing a
   `longdesc`, write in your ledger an inventory of the image: panels,
   every printed label, every count, and every arrow or leader line as
   `source → target`, both ends zoomed (crop and upscale with PIL); then
   every printed label is in the alt, `longdesc`, or caption, and every
   sentence matches the inventory. List each source-alt error in your
   ledger. A figure's file name is not reader-visible: never write a
   Source note about a stem.
6. Tables with a `summary`: Markdown from the CELLS, checked against the
   PDF; each comparison table gets ONE `sortbins` (decision in the run
   facts). A spanning header row is the caption line, not a data row.
7. `## Summary` verbatim as bullets (this book's summary is paragraphs —
   one bullet per paragraph); `## References` next, only when the module
   has a `section.references` (rule 3: one bullet per source paragraph,
   citation text as printed, URLs kept as links); `## Key terms` from the
   scaffold in glossary order (a module with no glossary has no heading —
   say so in the footer); `## Practice` last; then `---` and the `<small>`
   footer whose `Changes:` clause names EVERY adaptation and is true of the
   page — counts of graded items and `selfcheck`s, the Interactive Link
   Questions graded vs standing as prompts, every filler item and its
   sentence, every one-word correction, every reordered item, every
   author-written caption, every reworded figure reference. Every number
   comes from your ledger's tally (§5), written after the last
   `verify-section`; the floor, if the footer cites it, is 3 per objective
   and 8 per section — never 12 or 15. The parent logs errata at close-out; the footer
   names a correction as a correction and says nothing about where it is
   logged — neither "logged as an erratum" nor "reported to the parent".

## 4. The exercises — what bites

The mapping table, the honest graded forms, the model-answer conditions,
the Practice floor and fill order, and the accept-list rule are in the
playbooks. Apply them literally; these are the recurring failures:

- **Review Questions keep source order, source option count, and the
  source key.** A stem with a `________` blank stays a `multiplechoice`.
- **Critical Thinking Questions are `selfcheck`s** with the source
  `<solution>` as the model answer and `===CHECKS===` clauses drawn from it
  and the module — never from another chapter or general knowledge.
- **The one-sentence test is literal** for anything you grade that the
  source does not key by letter (an Interactive Link Question, a box
  question): a conversion that needs two sentences, an inference, or a word
  the module never prints is not graded. The source stem stays verbatim (a
  referent may be added, never a clause). Distractors are the module's own
  sibling terms — never invented.
- **Never edit a source option, stem, or key to dodge a leak** — reorder
  and disclose, or drop and name it in the footer.
- **Leaks — the top defect class.** (1) Nothing in the item directly
  above a `textin` — its stem, its options, OR its hint — prints the
  `textin`'s key or the key's root, singular, or plural. Order the group
  so every recall item comes first. (2) Grep every stem, hint,
  option list, alt, caption, and `longdesc` on the page for every key,
  forwards and backwards. (3) A figure whose alt or `longdesc` names the
  answer sends that item back to `selfcheck` or gets a rewritten alt —
  anatomy figures label everything, so this bites every labelling item.
  (4) A glossary term that sibling items necessarily print, or that a
  source Review Question on the page already keys or asks about, is a
  Key-terms bullet, not a recall item — pick another term (playbook
  "Headline glossary terms"; life-sciences "Each thing once"). Prefer a
  term the group's own `###` objective heading and the page title do not
  print, when the objective offers one. (5) Fix a
  leak by order or wording; never convert a `textin` to a multiple choice
  to escape one.
- **Hints say WHERE to look** — the subsection, the figure, the table —
  never the key, a root or derivative of it (*pronation* for prone,
  *nutrient* for micronutrients), the fact the correct option asserts, or a
  fact the module never states. Also never: translating the key's
  Greek or Latin root, restating the definition that is the key,
  eliminating the distractors by name, naming a heading whose title is the
  key, listing a `selfcheck`'s rubric clauses, steering away from an
  answer the accept list takes. Read each hint against its own key and
  options, then against the stem, options, and hint of the item above;
  then cover the options — if the stem and hint alone answer it, cut the
  hint to the location.
- The literal forms of these leaks and ASCII chemistry are lint-enforced
  (playbook, end of "Exercises"); the fact the correct option asserts, a
  fact the module never states, and other paraphrases are yours to catch.
- **`textin`:** unpaired tag; answer 1–4 words; no `$`; the answer in
  neither question nor hint; `accept` is `|`-separated and lists only what
  the grader would otherwise miss (an irregular plural or singular, a
  module abbreviation, a Latin/English pair the module prints, a hyphen
  between letters). The grader folds a regular plural BOTH ways — a plural
  key accepts its singular and a singular key its plural — so never list
  either; a member that normalizes to the answer is rejected. Run every
  member, and every natural variant a correct learner types (the full name
  with and without its head noun, the module's synonyms and
  abbreviations), through the real grader:
  `node -e 'import("./assets/js/lib/text/check-text.mjs").then(m=>console.log(m.checkText("<variant>","<answer>",{accept:"<accept>"})))'`
- **Key-term recall `textin`s** come from the glossary: the meaning is the
  question, the term the answer; a term whose meaning the glossary states
  in the term's own words is not a recall item.
- **`sortbins`:** bin labels are the module's own group names, the
  classification word alone; ≥2 items per bin from the table AND the body;
  no bin word on an item; 4–12 items interleaved. A one-item-per-bin
  labelling question is per-letter `multiplechoice` items, not a sortbins.
- **Author-built MCs vary the key position.** Source-keyed items keep
  source order.
- **Fillers** (summary/body cloze, select-the-term, term recall) name their
  sentence in the ledger and leak into each other as readily as source
  items.
- Every regular-section item needs a concise `hint` (above).
- **Never a numeric `textin`** — not a digit, not a number word (`three`),
  not a measurement: a summary cloze that would blank a count blanks a
  different phrase, or the count becomes a `multiplechoice`.

## 5. Verify, then report

- `npm run verify-section -- <your page>` until it prints `verified` with no
  ✗; run it again immediately before you report. A rule that fires on sound
  content is REPORTED, not worked around.
- **Source ledger** `$SP/ledger-N.M.md`: per interactive item, the CNXML
  exercise/solution id or its provenance (`author-written from § …`,
  `graded from § …: "<the fixing sentence>"`, `figure-keyed: <what the image
  shows>`, `cloze from … sentence: "…"`, `glossary recall: <term>`), the
  component, any adaptation; per figure, stem, `kind`, whether the alt was
  rewritten and why, whether a `longdesc` exists; every Interactive Link
  Question with "graded — fixing sentence: …" or "prompt only"; every
  suspected source defect (module id, element id, text, why, correction)
  and, separately, every suspected claim error. End it with a **tally**:
  source items by kind, Interactive Link graded/prompt, author-written
  items by kind, glossary recall, summary clozes, figure references
  reworded, one-word corrections. The footer's numbers are copied FROM
  the tally after the last `verify-section`, and the tally's totals match
  the run facts' per-section counts.
- **Answer-ledger results** `$SP/ledger-results/N.M.json`, shaped
  `{"results":[{"hash":"…","verdict":"ok","note":"…"}]}`; hashes from
  `node tools/verify/answer-ledger.mjs list content --unverified` (a JSON
  array; filter to your page; copy the FULL hash). `ok` only after re-reading
  the item against the CNXML and your own text; `defect` if a source key is
  wrong (and report it).
- **Final message, ten lines at most:** counts (figures; exercises by kind;
  key terms; Interactive Link Questions graded vs prompt), the
  `verify-section` tail line, the number of suspected source defects and
  claim errors (details are in the ledger), every departure from the source
  in one line each, and every place the playbooks, this brief, the run
  facts, or a lint was wrong or silent for your module. Do not paste the
  ledger.
