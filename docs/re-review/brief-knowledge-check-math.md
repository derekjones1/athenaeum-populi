# Re-review brief — knowledge-check addendum (math)

Hand a math knowledge-check fixer BOTH `brief-math.md` and this file; this
file wins where they differ. First used on the Prealgebra 2e checks
`knowledge-check-01-06` and `knowledge-check-07-11` (September 27, 2026).
The life-sciences edition is `brief-knowledge-check.md`.

You review part of a math Knowledge Check (a cumulative page covering half
the book), not a section page. `brief-math.md`'s working rules, "What you
may and may not change", grader notes, and report format all apply, with
these differences:

- **Read** `docs/knowledge-check-playbook-math.md` "Content rules" and
  "Source and answer audit", plus the `brief-math.md` list minus the
  authoring playbook's hint and Practice-block sections. There are no hints
  on a check; skip every hint check.
- **Scope:** ONLY the `## Chapter N` blocks you are assigned. Another agent
  edits other chapters of the same file at the same time: re-read the exact
  region immediately before every Edit, keep old_string inside your
  chapters, and never rewrite the file wholesale. On a check, edit with the
  Edit tool only: `brief-math.md`'s exact-text Python splice for a whole SVG
  reads and rewrites the entire shared file, and three of the eight fixers
  on the Intermediate Algebra checks (October 4, 2026) used one for MC
  option specs while five others were editing — nothing was lost, by luck.
- **Source.** A check item comes from its chapter's Review Exercises or
  Practice Test, which live in the chapter's LAST section module
  (`<section class="review-exercises">`, grouped by section, and
  `<section class="practice-test">`); the parent gives you that module id.
  Find each item in the raw CNXML by its numbers and compare the stem, the
  numbers, and the key with the `<solution>`. An item whose exercise has no
  `<solution>` (usually an even number) has no official key — the
  playbook requires a keyed item; replace it (below) and say so.
- **Per item** (`brief-math.md` step 3, minus hints):
  - **key** vs your own solution AND the CNXML solution; `answerDisplay`
    states the same value.
  - **ask-pin and retype:** the same sweep as a section page — every
    computed-number key without an `answerForm` gets the form after the
    grader refuses the retyped expression; word problems, "translate and
    simplify", and evaluate asks included.
  - **grader reach** on the natural typed forms and one common wrong answer.
  - **nearby leaks across the whole check page:** grep the entire file for
    each key; no stem or option anywhere on the check prints another item's
    key, and no item works the same numbers as another (the item directly
    above is the worst case).
  - **duplicate of a section page:** grep the section page for the item's
    numbers; a check item that repeats a section-page item (same numbers)
    is replaced.
  - **MC:** exactly one defensible option; distractors are real errors,
    and no option is another item's key (a domain MC offering the range
    key directly above the range MC is a leak).
  - **one ask, one item:** a "smaller solution" / "larger solution" pair is
    one fill-in, "Enter both solutions, separated by a comma", with
    `answerMode="unordered"` (the section pages' shape); a "For the next N
    questions, use …" lead-in is folded into each stem so every item reads
    alone.
  - **graph after features:** a "which graph shows" MC placed with the
    fill-ins that ask the same equation's vertex, intercepts, or extreme
    value prints their keys in its option labels and geometry; when the
    source asks to graph it, make it a `graphplot` (Intermediate Algebra
    knowledge check 7–12, 9.6). A graph MC whose distractor forces a window
    many times the correct graph's size is redrawn with distractors that fit
    one legible window.
  - **stem:** source numbers verbatim; no print-only labels (`Try It`,
    `(a)`); split parts each read alone.
  - **graphplot / figure:** the key graph matches the Answer Key and the
    printed equation (re-derive it); a figure is checked image-first per
    `brief-math.md` step 4 against the source image in `SP/media/<mid>/`.
- **Replacements** keep the item type and the section's coverage; take a
  different keyed exercise from the same section's Review Exercises or
  Practice Test (never an end-of-section exercise — those belong to the
  section page); grep the whole check and the section page for its numbers.
- **Footer:** the check's `Changes:` clause stays true (odd/even key parity,
  Review-Exercise substitution, conversions).
- Check with `npm run verify-section -- <check page path>` and `npm run
  lint` (errors from chapters outside yours may be another agent's
  in-flight edit — re-run once, and report rather than fix them).

## Parent duties on a math knowledge-check row

- Split each check by `## Chapter` blocks, one fixer per one or two
  chapters (about 25–35 items). Cross-chapter leaks are relayed by the
  parent (SendMessage) to the fixer that owns them.
- Replacement items get one fresh Opus **second checker** before the blind
  solve.
- The blind solver reads masked check pages; a check item needs no prose.
