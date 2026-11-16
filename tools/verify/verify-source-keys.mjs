/**
 * Corpus-wide cross-check of authored answer keys against the pinned OpenStax
 * source — the third look at every keyed answer in a prose book.
 *
 * A math fill-in gets three independent readings: the author keys it, the
 * checker re-derives it, and `verify-answers` re-derives it AGAIN from the
 * printed question with no agent in the loop. A prose book's exercises have
 * no equation to substitute into, so until this tool the third reading was a
 * person re-reading the checker's report. This closes that gap for every
 * item that is mechanically comparable to the module the page transcribes:
 *
 *   multiplechoice  the keyed option must be the option the CNXML
 *                   `<solution>` names (a bare letter, "C. …" plus the option
 *                   text, or the option text itself), with the option list
 *                   unedited — an edited distractor changes what is gradable
 *   textin          the answer must be a glossary term (or complete one with
 *                   the words the prompt places around the blank: "________
 *                   reasoning" keys `deductive` for "deductive reasoning"),
 *                   a bolded `<term>`, a phrase of the module's summary
 *                   section, or at least a phrase the module prints
 *   selfcheck       a model answer matched to a source exercise must be made
 *                   of the source solution's own words (token coverage ≥
 *                   MODEL_COVERAGE_FLOOR); a locally written self-check has no
 *                   source and is counted, not judged, and so is one whose
 *                   matched source exercise is UNKEYED — Microbiology prints
 *                   no answer for its Short Answer and Critical Thinking
 *                   questions, so those model answers are author-written
 *                   from the module by policy (docs/subjects/microbiology.md)
 *                   and there is nothing to compare them against. (Its
 *                   Check Your Understanding questions are list items in a
 *                   <note>, not <exercise>s, so a self-check built from one
 *                   reports 'unmatched', not 'unkeyed'.)
 *   multiplechoice  one matched to a source exercise that prints NO
 *                   solution is 'unkeyed' too: the life-sciences rule
 *                   (docs/subjects/life-sciences.md, "Unkeyed source questions")
 *                   lets an unkeyed prose question be graded when ONE
 *                   sentence, table, or lettered figure of the module fixes
 *                   its answer, and that reading is the ledger note plus
 *                   the orchestrator's blind solve — there is no source key
 *                   for this tool to confirm, so it counts and notes it.
 *
 *   sortbins        the bins must name a source table's data columns, and no
 *                   item may read better under a different column than the
 *                   one it is keyed to; a config matching no table is
 *                   counted as unmatched, not judged
 *
 *   fillin          (math pages) every number the page keys must be printed
 *                   by the CNXML `<solution>` of the exercise the question
 *                   transcribes — fractions and mixed numbers are read off
 *                   the MathML, number words ("thirty-two") off the prose,
 *                   and a value the page rounds to fewer places than the
 *                   source (or the source to fewer than the page) still
 *                   agrees. The exercise is matched by prose AND by the
 *                   numbers in the question, because a Try It and its
 *                   Example share every word but the values. A symbolic
 *                   answer ($-x-3$, an interval) is counted, not judged; so
 *                   is a question whose source solution prints no value (a
 *                   figure-only solution). `verify-answers` re-derives what
 *                   it can from the question alone; this is the OTHER third
 *                   reading, for the word problems and rounding asks it
 *                   cannot parse — and it is the only gate that sees a
 *                   source solution that is itself wrong (errata 342–344).
 *
 * A page item whose question matches no source exercise is COUNTED as
 * unmatched, never failed and never silently dropped, exactly as
 * verify-answers counts a prompt class it cannot read: on a prose page that is
 * an author-written item (legitimate, disclosed in the ledger and the footer);
 * on a math page it is a multiplechoice converted from a source fill-in, whose
 * value verify-answers and the ledger already cover.
 *
 * A key the page changes ON PURPOSE (the module's own text contradicts the
 * source key; see docs/subjects/life-sciences.md, "A source key that the module's
 * own text contradicts") is listed in DISCLOSED_DEVIATIONS with its erratum
 * number. Every entry must still be exercised — a listed deviation the corpus
 * no longer carries is a stale allowlist and fails the run — and every
 * deviation the corpus carries must be listed, so a re-keyed item can never
 * ship without an errata entry behind it.
 *
 * The comparison needs the pinned CNXML, and `/sources/` is gitignored: it
 * exists on an authoring machine after `npm run source:fetch` and never in
 * CI or a fresh clone (docs/architecture.md: `npm test` is offline and does
 * not fetch upstream). A bundle whose checkout directory is ABSENT is
 * therefore skipped by default — every one of its sections counted and named
 * on stderr, never failed — while a checkout that IS present is held to the
 * full rule, so a module missing from a real checkout is still a failure. A
 * run that skipped anything prints its count in a shape the baseline
 * rewriter does not read and applies no `--min-confirmed` floor: a partial
 * count is not a baseline, and a skipped gate must never look like a passed
 * one. `ATHENAEUM_REQUIRE_SOURCES=1` (set by CI, which now fetches the
 * pinned checkouts before `npm run ci`) turns that skip into a failure: a
 * bundle absent under strict mode exits 1 instead of exiting 0 partial, so
 * CI can never go green on an unread corpus.
 *
 * Usage: node tools/verify/verify-source-keys.mjs [content-root] [--min-confirmed N] [--verbose] [ATHENAEUM_REQUIRE_SOURCES=1]
 *
 * `--min-confirmed N` fails the run when the confirmed count is not EXACTLY N
 * (the verify-answers ratchet: below is shrinking coverage, above is an
 * unrecorded gain; `npm run baseline:update` records either deliberately).
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import {
  parseXml, descendants, elementChildren, firstElement, textContent, localName,
  normalizeText, normalizeWhitespace, tokenSimilarity, phraseCoverage,
  loadSourceLock, bundleSourceDirectory,
} from '../lib/openstax-source.mjs';
import { integerFlag, parseCliArgs } from '../lib/cli.mjs';
import { shortcodes } from '../lib/content.mjs';
import { mediaBindings } from '../lib/exercise-context.mjs';
import { parseSortbinsConfig } from '../../assets/js/lib/text/check-sortbins.mjs';
import { foldedForms } from '../../assets/js/lib/text/check-text.mjs';
import { chemCanon } from '../../assets/js/lib/text/check-chem.mjs';
import { readNumeral, withinPercent } from '../../assets/js/lib/math/significant-figures.mjs';
import { loadElements } from '../lib/elements.mjs';
import { massAsk, molarMass, statesNoNumber } from './molar-mass.mjs';
import {
  KEYED_ONLY_BOOKS, answerUnits, choiceLabels, closingUnit, isPartLabel, keyedUnits, listMembers, memberAsked, moduleAliases, plain as foldedPlain, texAsText, printedAbbreviations, printedNumerals, sortedExercise, twoUnitAnswer, unitFor, unlinked,
} from '../lib/keyed-units.mjs';

/** A page question must share this much of a source problem's vocabulary to
 * count as a transcription of it; below this it is an author-written item. */
export const MATCH_FLOOR = 0.5;

/** The share of a self-check model answer's tokens that must come from the
 * source solution. A half of a two-part solution scores 1; the light
 * reformattings the life-sciences playbook allows score ≥ 0.8; a model answer that
 * brings its own claims falls well under. */
export const MODEL_COVERAGE_FLOOR = 0.7;
/** A source solution of this many words or fewer is a key, not a model answer (see judgeSelfcheck). */
export const SHORT_SOLUTION_WORDS = 4;
const shortSolutionWords = (solution) => normalizeWhitespace(solution).split(/\s+/).filter(Boolean).length;

/**
 * Keys the page deliberately changes from the pinned source, each backed by a
 * confirmed erratum (docs/openstax-errata.md) and named in the page footer.
 * `kind: 'key'` — the page keys a different option; `kind: 'solution'` — a
 * selfcheck model answer corrects a wrong source solution; `kind: 'options'` — an
 * option's wording differs from the source list; `kind: 'assignment'` — a
 * sortbins bins an item against the source table (exercise = the table id).
 */
export const DISCLOSED_DEVIATIONS = Object.freeze([
  {
    page: 'content/physical-sciences/chemistry/01-essential-ideas/06-mathematical-treatment-of-measurement-results.md',
    exercise: 'fs-idm75569040#check',
    kind: 'key',
    erratum: 2910,
    reason: 'the Check Your Learning answer prints "354.07 K, 177.66 °F" for 80.92 °C; by the rules Section 1.5 teaches, 80.92 × 9/5 = 145.656 keeps four figures (145.7) and adding the exact 32 gives 177.7 °F, as every sibling temperature key in the module rounds (5371 °F, −33.4 °C, 113 °F), so the Fahrenheit fill-in keys 177.7; the kelvin fill-in keeps the source\'s 354.07',
  },
  {
    page: 'content/physical-sciences/chemistry/01-essential-ideas/06-mathematical-treatment-of-measurement-results.md',
    exercise: 'fs-idm125803088',
    kind: 'key',
    erratum: 2878,
    reason: 'the source solution prints "68–71 cm" for a ball of 27 to 28 in.; 27 in × 2.54 cm/in (exact) = 68.58 cm, which rounds to 69 cm at two significant figures, so the lower-circumference fill-in keys 69; the other three bounds (71 cm, 400 g, 450 g) are the source\'s',
  },
  {
    page: 'content/physical-sciences/chemistry/02-atoms-molecules-and-ions/07-chemical-nomenclature.md',
    exercise: 'fs-idp268321696(e)',
    kind: 'key',
    erratum: 2964,
    reason: 'the source solution prints "AIF₃·3H₂O" for aluminum fluoride trihydrate, with a capital I where the lowercase l of Al belongs: no element has the symbol A, and aluminum\'s symbol is Al in the stem\'s own compound name and in part (f) of the first exercise ("AlF₃"), so the formula text-in keys AlF₃·3H₂O',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/28-development-and-inheritance/05-adjustments-of-the-infant-at-birth-and-postnatal-stages.md',
    exercise: 'fs-id810682',
    kind: 'options',
    erratum: 2846,
    reason: 'the source distractor c "ductus arteriosis" misspells the structure the module m46335 and the 28.3 glossary (m46316) spell "ductus arteriosus"; the page prints "ductus arteriosus" in its place; key a "foramen ovale", options b and d, and option order unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/27-the-reproductive-system/01-anatomy-and-physiology-of-the-testicular-reproductive-system.md',
    exercise: 'fs-id2002473',
    kind: 'options',
    erratum: 2836,
    reason: 'the source distractor C "support spermatogenesis" is a second true answer to "Leydig cells ________." — the module m46400\'s own fs-id2368387 says maintaining normal concentrations of testosterone, which Leydig cells produce, "promotes spermatogenesis", and fs-id2765667 says the rise of testosterone at puberty is "initiating spermatogenesis"; the page prints "produce inhibins" in its place (fs-id2780238 gives that to the Sertoli cells: "FSH also stimulates the Sertoli cells to produce hormones called inhibins"); key A "secrete testosterone", options B and D, and option order unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/21-the-lymphatic-and-immune-system/03-the-adaptive-immune-response-t-lymphocytes-and-their-functional-types.md',
    exercise: 'fs-id2169042',
    kind: 'options',
    erratum: 2529,
    reason: 'the source distractor C "tolerance." is also correct by the module ("The process of eliminating T cells that might attack the cells of one\'s own body is referred to as T cell tolerance", fs-id1961110) for "The elimination of self-reactive thymocytes is called ________."; the page replaces it with the module\'s "clonal expansion." (fs-id2264083: "This proliferation of T cells is called clonal expansion"); key B "negative selection." and option order unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/21-the-lymphatic-and-immune-system/02-barrier-defenses-and-the-innate-immune-response.md',
    exercise: 'fs-id1850767',
    kind: 'key',
    erratum: 2528,
    reason: 'two corrections on one item, errata 2528 and 2530 (the gate takes one entry per exercise, so both are folded here under kind key, the keyed text being checked first): 2528 — the keyed source option D "microphages" misspells "macrophages", the module\'s own phagocyte (fs-id2170684), and the page prints "macrophages" (key D unchanged); 2530 — the source distractor C "complement" is also correct, since no sentence of m46571 gives complement an antiviral role and 21.5 (m46569) says "Bacteria and fungi are especially susceptible to damage by complement proteins, whereas viruses are taken care of by interferons and cytotoxic T cells", so the page replaces it with the module\'s "antiviral proteins" (fs-id2760204: infected cells "induce them to make antiviral proteins"); options A, B and option order unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/22-the-respiratory-system/02-the-lungs.md',
    exercise: 'fs-id2321808',
    kind: 'key',
    erratum: 2579,
    reason: 'the source keys C "respiratory" for "The ________ circulation picks up oxygen for cellular use and drops off carbon dioxide for removal from the body.", a circulation no sentence of m46551 names; the module\'s Blood Supply subsection says gas exchange "requires blood from the pulmonary circulation" and its Summary says "The function of the pulmonary circulation is to aid in gas exchange", so the page keys option A "pulmonary" (options and option order unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/22-the-respiratory-system/05-transport-of-gases.md',
    exercise: 'fs-id1525443',
    kind: 'key',
    erratum: 2580,
    reason: 'two corrections on one item, errata 2580 and 2581 (the gate takes one entry per exercise, so both are folded here under kind key, the keyed text being checked first): 2580 — the source keys A "Chloride is removed from the erythrocyte." for "Which of the following occurs during the chloride shift?", which the module\'s own definition contradicts ("As bicarbonate builds up in erythrocytes, it is moved across the membrane into the plasma in exchange for chloride ions by a mechanism called the chloride shift", m46545), so the page keys option C "Bicarbonate is removed from the erythrocyte."; 2581 — the source distractor B "Chloride is exchanged for bicarbonate." is also correct by the same sentence, so the page replaces it with "The electrical charge of the erythrocyte is altered.", which the module makes false ("neither the electrical charge of the erythrocytes nor that of the blood is altered"); options A and D and option order unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/22-the-respiratory-system/01-organs-and-structures-of-the-respiratory-system.md',
    exercise: 'fs-id2024583',
    kind: 'key',
    erratum: 2584,
    reason: 'the source keys A "alveoli" for "Which of the following structures is the most distal (or last) component of the bronchial tree?", but the module\'s own glossary defines the bronchial tree as "collective name for the multiple branches of the bronchi and bronchioles of the respiratory system" and its body makes the respiratory bronchiole "the smallest type of bronchiole, which then leads to an alveolar duct, opening into a cluster of alveoli" (fs-id2757673), so the page keys option D "respiratory bronchioles" (options and option order unchanged; found by the blind solve, October 27, 2026)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/22-the-respiratory-system/04-gas-exchange.md',
    exercise: 'fs-id2228521',
    kind: 'key',
    erratum: 2582,
    reason: 'two corrections on one item, errata 2582 and 2583 (the gate takes one entry per exercise, so both are folded here under kind key, the keyed text being checked first): 2582 — the source keys A "The capillary constricts." for "When ventilation is not sufficient, which of the following occurs?", but the module\'s own account is "constricting the pulmonary arterioles that serves the dysfunctional alveolus" (fs-id2584577) and 22.2 (m46551) says the pulmonary capillaries "lack smooth muscle fibers", so the page prints the keyed option as "The pulmonary arterioles constrict." (key position A unchanged); 2583 — the source distractor D "The bronchioles dilate." is also true by the module (fs-id2229918: "A greater partial pressure of carbon dioxide in the alveoli causes the bronchioles to increase their diameter"), so the page replaces it with "Blood flow to the affected alveolus increases.", which fs-id2584577 makes false; options B and C and option order unchanged (claim pass, October 27, 2026)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/19-the-cardiovascular-system-the-heart/02-cardiac-muscle-and-electrical-activity.md',
    exercise: 'fs-id2481331',
    kind: 'key',
    erratum: 2426,
    reason: 'the source keys B "Only cardiac muscle has gap junctions." for "Which of the following is unique to cardiac muscle cells?", which no sentence of the module asserts and which 10.8 contradicts ("Single-unit smooth muscle tissue contains gap junctions", m46478); the module fixes C: "This property is known as autorhythmicity. Neither smooth nor skeletal muscle can do this." (fs-id1754472); the page keys option C "Only cardiac muscle is capable of autorhythmicity" (options and option order unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/19-the-cardiovascular-system-the-heart/03-cardiac-cycle.md',
    exercise: 'fs-id2672256',
    kind: 'options',
    erratum: 2425,
    reason: 'the source distractor B "ventricular systole" is also correct by the module ("S1 is the sound created by the closing of the atrioventricular valves during ventricular contraction", fs-id2624692) for "The first heart sound represents which portion of the cardiac cycle?"; the page replaces it with the module phrase "opening of the atrioventricular valves" (summary fs-id1246209: "opening the atrioventricular valves"); key C "closing of the atrioventricular valves" and option order unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/19-the-cardiovascular-system-the-heart/05-development-of-the-heart.md',
    exercise: 'fs-id1985735',
    kind: 'key',
    erratum: 2424,
    reason: 'the source keys D "cardiogenic tubes" for "The two tubes that eventually fuse to form the heart are referred to as the ________.", a name the module never uses; the module says the lumened cardiogenic cords "are referred to as endocardial tubes. The two tubes migrate together and fuse to form a single primitive heart tube" (fs-id2485730), and its glossary defines endocardial tubes; the page keys option B "endocardial tubes" (options and option order unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/18-the-cardiovascular-system-blood/03-erythrocytes.md',
    exercise: 'fs-id1546796',
    kind: 'options',
    erratum: 2383,
    reason: 'the source distractor "myeoblasts" misspells "myeloblasts" ("Aging and damaged erythrocytes are removed from the circulation by ________."); the page prints "myeloblasts"; key "macrophages" unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/16-the-neurological-exam/05-the-coordination-and-gait-exams.md',
    exercise: 'fs-id1481522',
    kind: 'key',
    erratum: 2316,
    reason: 'the keyed option "processing visual information" (what cannot be attributed to the cerebellum) is attributed to the cerebellum by the module itself ("Visual cortex information is also part of the processing that occurs in the cerebrocerebellum", fs-id1335742); the page prints the keyed option as "primary visual perception", the cortical function (key D and option order unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/15-the-autonomic-nervous-system/04-drugs-that-affect-the-autonomic-system.md',
    exercise: 'fs-id1632365',
    kind: 'options',
    erratum: 2286,
    reason: 'the source distractor "anticholinergic drug" is also correct by the module (Table 15.2 gives anticholinergics "Increase sympathetic tone"; the body says sympathetic action dilates the bronchioles) and in practice (inhaled muscarinic antagonists are bronchodilators); the page replaces it with the module term "nicotinic agonist" (Table 15.2: conflicting signals cancel); key B "sympathomimetic drug" unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/15-the-autonomic-nervous-system/01-divisions-of-the-autonomic-nervous-system.md',
    exercise: 'fs-id2766993',
    kind: 'key',
    erratum: 2285,
    reason: 'the source option "intermural ganglion" misspells the module\'s own term "intramural ganglia" (fs-id2754854); the page prints the option as "intramural ganglion" (key A unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/11-the-muscular-system/01-interactions-of-skeletal-muscles-their-fascicle-arrangement-and-their-lever-systems.md',
    exercise: 'fs-id2761928',
    kind: 'options',
    erratum: 2090,
    reason: 'the source distractor "a fixator" is also true by the module\'s own glossary ("synergist that assists an agonist"); the page replaces it with "a load", the module\'s own lever term for "an object being lifted or any resistance to a movement" (key "a synergist" unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/10-muscle-tissue/06-exercise-and-muscle-performance.md',
    exercise: 'fs-id1285054',
    kind: 'options',
    erratum: 2065,
    reason: 'the source distractor "Fast fibers have many mitochondria" is true of fast oxidative fibers by the book\'s own 10.5 ("possess high amounts of mitochondria"); the page narrows it to "Fast glycolytic fibers have many mitochondria" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/microbiology/21-skin-and-eye-infections/02-bacterial-infections-of-the-skin-and-eyes.md',
    exercise: 'fs-id1167663644101',
    kind: 'options',
    erratum: 687,
    reason: 'the source option "Proproniobacterium acnes" misspells the genus the module itself prints as Propionibacterium; the page prints the option as "Propionibacterium acnes" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/microbiology/21-skin-and-eye-infections/03-viral-infections-of-the-skin-and-eyes.md',
    exercise: 'fs-id1167663630739',
    kind: 'options',
    erratum: 691,
    reason: 'the source option "parvovirus 19" drops the B from the name the module itself prints as parvovirus B19; the page prints the option as "parvovirus B19" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/microbiology/10-biochemistry-of-the-genome/04-structure-and-function-of-cellular-genomes.md',
    exercise: 'fs-id1172100837488',
    kind: 'options',
    erratum: 547,
    reason: 'the source distractors "linear" and "double stranded" are both true of eukaryotic genomes by the module\'s own sentences, so the item was double-keyed; the page prints "circular" and "single stranded" in their place (key "diploid" unchanged)',
  },
  {
    page: 'content/life-health-sciences/microbiology/11-mechanisms-of-microbial-genetics/02-dna-replication.md',
    exercise: 'fs-id1167662553709',
    kind: 'options',
    erratum: 548,
    reason: 'the source option "3′-AGGCTTGAC-4′" names a 4′ end that no nucleic acid strand has; the page prints "3′-AGGCTTGAC-5′" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/microbiology/08-microbial-metabolism/07-biogeochemical-cycles.md',
    exercise: 'fs-id1167662519291',
    kind: 'options',
    erratum: 515,
    reason: 'the source option "chemoautrophy" misspells the term the module itself prints as chemoautotroph; the page prints the option as "chemoautotrophy" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/microbiology/05-the-eukaryotes-of-microbiology/03-fungi.md',
    exercise: 'fs-id1172100506672',
    kind: 'options',
    erratum: 475,
    reason: 'the source option "Rhizopus stolonifera" misspells the genus-species name the module itself prints as Rhizopus stolonifer; the page prints the option with the correct spelling (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/microbiology/05-the-eukaryotes-of-microbiology/05-lichens.md',
    exercise: 'fs-id1172099523194',
    kind: 'options',
    erratum: 482,
    reason: 'the source distractor "a basidiomycete" is true by the module\'s own sentence that "the fungal partners belong to the Ascomycota and Basidiomycota", so the item was double-keyed; the page replaces that option with "a cyanobacterium" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/34-animal-nutrition-and-the-digestive-system/04-digestive-system-regulation.md',
    exercise: 'fs-idp144627040',
    kind: 'options',
    erratum: 442,
    reason: 'the source distractor "gastric inhibitory peptide" is true by the module\'s own sentence that it "also inhibits acid production", so the item was double-keyed; the page replaces that option with "secretin" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/30-plant-form-and-physiology/04-leaves.md',
    exercise: 'fs-idp28882000',
    kind: 'options',
    erratum: 437,
    reason: 'the source distractor "epidermis" is true by the module\'s own sentence "Guard cells are the only epidermal cells to contain chloroplasts", so the item was double-keyed; the page replaces that option with "endodermis" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/08-photosynthesis/02-the-light-dependent-reactions-of-photosynthesis.md',
    exercise: 'fs-idm133225312',
    kind: 'key',
    erratum: 393,
    reason: 'the source keys "2" photons to fully reduce one NADP⁺ to NADPH, following a single electron through the two photosystems; NADP⁺ takes up two electrons (m66465 defines the NAD(P)⁺/NAD(P)H couple as two electrons and a proton) and each needs one photon per photosystem, so the page keys "4"',
  },
  {
    page: 'content/life-health-sciences/microbiology/04-prokaryotic-diversity/06-archaea.md',
    exercise: 'fs-id1172097276615',
    kind: 'options',
    erratum: 373,
    reason: 'the source distractor "They are always anaerobes." is true by the module\'s own Art Connection caption (methanogens among "obligate anaerobic" organisms in an oxygen-free rumen), so the item was double-keyed; the page replaces that option with "They oxidize sulfur to produce sulfuric acid.", which the module prints of Sulfolobus, a crenarchaeote, not of the methanogens (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/microbiology/04-prokaryotic-diversity/04-gram-positive-bacteria.md',
    exercise: 'fs-id1172100813972',
    kind: 'options',
    erratum: 370,
    reason: 'the source option reads "Streptococcus pneumonia", omitting the terminal e from the species epithet; the page prints the valid binomial "Streptococcus pneumoniae" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/40-the-circulatory-system/03-mammalian-heart-and-blood-vessels.md',
    exercise: 'fs-idm133142336',
    kind: 'key',
    erratum: 267,
    reason: 'source keys "Blood in the pulmonary artery is deoxygenated" as the false statement, but the module\'s own text sends blood from the right ventricle "to the pulmonary arteries and on to the lungs for re-oxygenation" and has the left atrium receive "the oxygen-rich blood from the lungs via the pulmonary veins", so that option is true and "Blood in the pulmonary vein is deoxygenated" is the false one; the page keys that option',
  },
  {
    page: 'content/life-health-sciences/biology/41-osmotic-regulation-and-excretion/05-hormonal-control-of-osmoregulatory-functions.md',
    exercise: 'fs-idm77856336',
    kind: 'key',
    erratum: 268,
    reason: 'source keys "granular cells of the juxtaglomerular apparatus" for where renin is made, but the module\'s own table lists renin as produced in "Kidney nephrons" and its prose says it "is produced by the granular cells of the afferent and efferent arterioles", which makes "the kidneys" and "the nephrons" true as well; the page keys "all of the above"',
  },
  {
    page: 'content/life-health-sciences/biology/38-the-musculoskeletal-system/04-muscle-contraction-and-locomotion.md',
    exercise: 'fs-idm30541680',
    kind: 'key',
    erratum: 256,
    reason: 'source keys "none of the above" for what a muscle fiber\'s ability to generate tension depends on, but the module\'s own text says "The number of cross-bridges formed between actin and myosin determine the amount of tension" and that maximal tension "occurs when thick and thin filaments overlap to the greatest degree", which makes the option "overlap of myosin and actin" true; the page keys that option',
  },
  {
    page: 'content/life-health-sciences/biology/39-the-respiratory-system/02-gas-exchange-across-respiratory-surfaces.md',
    exercise: 'fs-idp77276032',
    kind: 'solution',
    erratum: 257,
    reason: 'the source solution says a doctor detects "a restrictive disease" such as fibrosis when a patient has increased resistance in the lungs, but the module\'s own text ties resistance to a low FEV1/FVC ratio "characteristic of asthma" (an obstructive condition) and the Breathing section defines restrictive disease as reduced compliance; the page\'s model answer says an obstructive condition such as asthma',
  },
  {
    page: 'content/life-health-sciences/biology/36-sensory-systems/02-somatosensation.md',
    exercise: 'fs-idm75363216',
    kind: 'key',
    erratum: 250,
    reason: 'source keys "Merkel\'s disks; glabrous" for the receptor found only in one skin type that detects skin deflection, but the module\'s own text places Merkel\'s disks "both in skin that has hair and on glabrous skin" responding to light touch, and its glossary says hair receptors "detect hair movement and skin deflection"; the page keys "hair receptors; hairy"',
  },
  {
    page: 'content/life-health-sciences/biology/36-sensory-systems/02-somatosensation.md',
    exercise: 'fs-idp18848768',
    kind: 'options',
    erratum: 251,
    reason: 'the exercise copy of the Visual Connection prints "Pacini corpuscles" where the note copy and the module body print "Pacinian corpuscles"; the page prints "Pacinian" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/33-the-animal-body-basic-form-and-function/02-animal-primary-tissues.md',
    exercise: 'fs-idp135609056',
    kind: 'key',
    erratum: 239,
    reason: 'source keys "columnar" as the epithelial cell best adapted to aid diffusion, but the module\'s own text says simple squamous epithelia "facilitate diffusion in tissues, such as the areas of gas exchange in the lungs" and its glossary defines squamous epithelia as "specialized in aiding diffusion"; the page keys "squamous"',
  },
  {
    page: 'content/life-health-sciences/biology/33-the-animal-body-basic-form-and-function/02-animal-primary-tissues.md',
    exercise: 'fs-idp270762368',
    kind: 'options',
    erratum: 240,
    reason: 'the source option reads "Pseudostratisfied columnar epithilia" (two typos in both printed copies of the Visual Connection); the page prints "Pseudostratified columnar epithelia" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/34-animal-nutrition-and-the-digestive-system/01-digestive-systems.md',
    exercise: 'fs-idp230293872',
    kind: 'key',
    erratum: 244,
    reason: 'source keys "horse" as the pseudo-ruminant, an animal the module never names, while its own definition (a three-chambered stomach of omasum, abomasum, and reticulum with a large fermenting cecum; "such as camels and alpacas") describes camelids, not the single-stomached horse; the page replaces the keyed option with "camel" and keys it, distractors unchanged',
  },
  {
    page: 'content/life-health-sciences/biology/29-vertebrates/07-the-evolution-of-primates.md',
    exercise: 'fs-idm71000698',
    kind: 'options',
    erratum: 222,
    reason: 'source keys "three-color vision" as the human trait not shared by primates, a trait the module never mentions, while its distractor "Hip structure supporting bipedalism" is also not shared by the module\'s own text ("bipedalism ... differentiate humans from the other hominoids"); the page keeps the key and replaces that distractor and the unsourced olfactory one with traits from the module\'s shared-adaptations list (rotating shoulder joint; stereoscopic vision)',
  },
  {
    page: 'content/life-health-sciences/biology/27-introduction-to-animal-diversity/02-features-used-to-classify-animals.md',
    exercise: 'fs-idp48306544',
    kind: 'options',
    erratum: 213,
    reason: 'the module prints this Visual Connection twice; its exercise copy reads "Animals that display radial symmetry are diploblasts", which the module\'s own echinoderm sentence ("display modified radial symmetry as adults" — triploblasts) makes a second false statement, so the page keeps the body note\'s copy "Animals that display only radial symmetry during their lifespans are diploblasts" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/28-invertebrates/04-superphylum-lophotrochozoa-mollusks-and-annelids.md',
    exercise: 'fs-idm43860096',
    kind: 'options',
    erratum: 214,
    reason: 'the module prints this Visual Connection twice; its exercise copy reads "Mollusks have a radula for grinding food", which the module\'s own "present in all groups except the bivalves" makes a second false statement, so the page keeps the body note\'s copy "Most mollusks have a radula for grinding food" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/26-seed-plants/01-evolution-of-seed-plants.md',
    exercise: 'fs-idp35796256',
    kind: 'key',
    erratum: 205,
    reason: 'source keys "flower" as the structure besides the seed that diminishes reliance on water, but the module\'s own text says "Both seeds and pollen ... allowed seed plants to reduce or eliminate their dependence on water" and its summary repeats "Two major innovations were seeds and pollen"; the page keys "pollen"',
  },
  {
    page: 'content/life-health-sciences/biology/27-introduction-to-animal-diversity/01-features-of-the-animal-kingdom.md',
    exercise: 'fs-idm67872016',
    kind: 'key',
    erratum: 207,
    reason: 'source keys "the gastrula stage" for the stage in which cell layers develop into tissues or organs, but the module\'s own sentence is that germ layers "develop into certain tissue types, organs, and organ systems during a process called organogenesis"; the page keys "the organogenesis stage"',
  },
  {
    page: 'content/life-health-sciences/biology/25-seedless-plants/03-bryophytes.md',
    exercise: 'fs-idp148910848',
    kind: 'options',
    erratum: 203,
    reason: 'distractor "mosses" is also correct by the module\'s own sentence "Mosses have stomata only on the sporophyte"; the page reads "moss gametophytes", which that sentence makes false (key "hornworts" unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/25-seedless-plants/04-seedless-vascular-plants.md',
    exercise: 'fs-idm28125280',
    kind: 'key',
    erratum: 194,
    reason: 'source keys "Mosses decompose rocks and release nitrogen", which the module never says; its own sentence is "Because they establish symbiotic relationships with nitrogen-fixing cyanobacteria, mosses replenish the soil with nitrogen", so the page keys "Mosses harbor cyanobacteria that fix nitrogen"',
  },
  {
    page: 'content/life-health-sciences/biology/21-viruses/02-virus-infections-and-hosts.md',
    exercise: 'fs-idm138486528',
    kind: 'key',
    erratum: 185,
    reason: 'source keys "Newly released virions can infect adjacent cells" as the statement NOT true of viral replication, but the module\'s own Egress paragraph says released virions "are able to infect adjacent cells"; the page keys "Viral replication does not affect host cell function", contradicted by the cytopathic-effects sentence, and replaces the also-false first option ("A lysogenic cycle kills the host cell") with the module\'s own "In the lysogenic cycle, phage DNA is incorporated into the host genome"',
  },
  {
    page: 'content/life-health-sciences/biology/21-viruses/03-prevention-and-treatment-of-viral-infections.md',
    exercise: 'fs-idp41822000',
    kind: 'options',
    erratum: 176,
    reason: 'distractor "Phage therapy" is also NOT used to treat active viral disease by the module\'s own account ("using bacteriophages in the treatment of bacterial infections"), making two options correct; the page reads "Acyclovir", which the module names as a drug against "active viral disease" (key "Antibiotics" unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/23-protists/01-eukaryotic-origins.md',
    exercise: 'eip-197',
    kind: 'options',
    erratum: 183,
    reason: 'source option reads "Archea"; the page spells it "Archaea" as the module does everywhere else (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/17-biotechnology-and-genomics/01-biotechnology.md',
    exercise: 'fs-id1768985',
    kind: 'key',
    erratum: 172,
    reason: 'source keys "all of the above", but the module\'s own sentence "The Flavr Savr tomato did not successfully stay in the market" contradicts the in-the-supermarket option and "does not undergo soft rot" overstates "slow the softening and rotting process"; the page keys the directly-taught "was created to have better flavor and shelf-life"',
  },
  {
    page: 'content/life-health-sciences/biology/17-biotechnology-and-genomics/04-applying-genomics.md',
    exercise: 'fs-id1685167',
    kind: 'key',
    erratum: 166,
    reason: 'source keys "decrease transplant rejection", which the module never mentions outside this exercise; its own Predicting Disease Risk subsection teaches option (b) ("Predicting disease risk involves screening currently healthy individuals by genome analysis"), so the page keys "predict genetic diseases that a person may have inherited"',
  },
  {
    page: 'content/life-health-sciences/biology/19-the-evolution-of-populations/01-population-evolution.md',
    exercise: 'fs-idp1822224',
    kind: 'options',
    erratum: 163,
    reason: 'source option (a), the 12 yy / 8 YY / 4 Yy census, is itself out of Hardy-Weinberg proportions by the module\'s own arithmetic (observed .33/.17/.50 vs expected .17/.49/.34), making two options correct; the page carries an exactly-in-equilibrium 6 YY / 12 Yy / 6 yy census there (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/16-gene-expression/06-eukaryotic-translational-and-post-translational-gene-regulation.md',
    exercise: 'fs-id1404412',
    kind: 'key',
    erratum: 154,
    reason: 'source keys "protein function"; the module\'s own phosphorylation solution says modifying a protein "can alter accessibility to the chromosome" and "can alter translation (by altering the transcription factor binding or function)", so the other options are also true and the section supports "all of the above"',
  },
  {
    page: 'content/life-health-sciences/biology/08-photosynthesis/02-the-light-dependent-reactions-of-photosynthesis.md',
    exercise: 'fs-idm144749168',
    kind: 'key',
    erratum: 115,
    reason: 'source keys photosystem II; the module credits PSII, the cytochrome complex, and ATP synthase with the proton gradient, so photosystem I is the complex not involved',
  },
  {
    page: 'content/life-health-sciences/biology/08-photosynthesis/03-using-light-energy-to-make-organic-molecules.md',
    exercise: 'fs-idm55613456',
    kind: 'options',
    erratum: 116,
    reason: 'distractor "the use of RuBisCO to form 3-PGA" is also true by the module ("This process is called carbon fixation"); the page reads "to form G3P", which the module assigns to the reduction stage',
  },
  {
    page: 'content/life-health-sciences/biology/09-cell-communication/01-signaling-molecules-and-cellular-receptors.md',
    exercise: 'fs-idp91702432',
    kind: 'options',
    erratum: 122,
    reason: 'source option d reads "downsteam"; the page spells it "downstream" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/10-cell-reproduction/01-cell-division.md',
    exercise: 'fs-id1414909',
    kind: 'key',
    erratum: 120,
    reason: 'source keys "half"; a diploid cell (2n, 46) has twice the chromosomes of a haploid cell (n, 23)',
  },
  {
    page: 'content/life-health-sciences/biology/10-cell-reproduction/05-prokaryotic-cell-division.md',
    exercise: 'fs-id1466552',
    kind: 'key',
    erratum: 121,
    reason: 'source keys "cell plate", a plant-cell structure the module never mentions; the module says the FtsZ ring directs formation of a septum',
  },
  {
    page: 'content/life-health-sciences/biology/12-mendels-experiments-and-heredity/03-laws-of-inheritance.md',
    exercise: 'fs-idm70127392',
    kind: 'solution',
    erratum: 133,
    reason: 'source solution answers the RrYY × rrYy seed-shape cross with flower-color genotypes (PpYY, PpYy, ppYY, ppYy) copied from an unrelated item; the page derives RrYY, RrYy, rrYY, rrYy with the same 1:1 ratio and 2 × 2 grid',
  },
{
    page: 'content/life-health-sciences/biology/30-plant-form-and-physiology/02-stems.md',
    exercise: 'fs-idm51419472',
    kind: 'key',
    erratum: 223,
    reason: 'source keys "A and B" (cortex and pith; phloem) and its solution names the epidermis, which is not an option; the module describes phloem as sieve-tube cells, companion cells, phloem parenchyma, and fibers and says only the cortex and pith are "composed of parenchyma cells" — the page keys A alone',
  },
  {
    page: 'content/life-health-sciences/biology/43-animal-reproduction-and-development/03-human-reproductive-anatomy-and-gametogenesis.md',
    exercise: 'fs-idm37463664',
    kind: 'key',
    erratum: 276,
    reason: 'source keys "seminiferous tubules" for where most of the semen is made, but the module\'s own text says "The seminal vesicle glands account for 60 percent of the bulk of semen", "Prostate gland secretions account for about 30 percent", and that spermatic duct secretions are "about 10 percent of the total"; the page keys "seminal vesicles"',
  },
  {
    page: 'content/life-health-sciences/biology/43-animal-reproduction-and-development/04-hormonal-control-of-human-reproduction.md',
    exercise: 'fs-idm71478992',
    kind: 'options',
    erratum: 278,
    reason: 'source keys "progesterone" for the hormone that causes endometrial regrowth and lists "estrogen" as a distractor, but the module\'s own text says "Estradiol is the reproductive hormone in females that assists in endometrial regrowth" and that the endometrium "begins to regrow" as estrogen levels rise, so that distractor is also true; the page keeps the key and replaces "estrogen" with "inhibin", which the module gives only an FSH-inhibiting role',
  },
  {
    page: 'content/life-health-sciences/biology/45-population-and-community-ecology/05-human-population-growth.md',
    exercise: 'fs-idm142904224',
    kind: 'key',
    erratum: 290,
    reason: 'source keys "economically underdeveloped" for a country with zero population growth, but the module\'s own text says "Other developed countries, such as Italy, have zero population growth" and places the highest growth "in less economically developed countries of Africa and Asia"; the page keys "economically developed"',
  },
  {
    page: 'content/math/elementary-algebra/10-quadratic-equations/04-solve-applications-modeled-by-quadratic-equations.md',
    exercise: 'fs-id1166502223035',
    kind: 'key',
    erratum: 342,
    reason: 'source prints "The distance to the opposite corner is 3.2" for a field whose width w satisfies w^2+(2w)^2=(w+4)^2, so w=1+sqrt(5)≈3.236 and the asked-for diagonal is w+4≈7.236; 3.2 is the width rounded, and the page keys 7.2',
  },
  {
    page: 'content/math/elementary-algebra/10-quadratic-equations/04-solve-applications-modeled-by-quadratic-equations.md',
    exercise: 'fs-id1166502222992',
    kind: 'key',
    erratum: 343,
    reason: 'source prints the ball reaching 48 feet "on the way down in 5.5 seconds", but -16t^2+96t=48 gives t=3±sqrt(6), and 3+sqrt(6)=5.449… rounds to 5.4; the page keys 0.6 and 5.4',
  },
  {
    page: 'content/math/intermediate-algebra/02-solving-linear-equations/07-solve-absolute-value-inequalities.md',
    exercise: 'fs-id1167835534335',
    kind: 'key',
    erratum: 344,
    reason: 'source prints the production range as "207,500 to 2,225,000 bottles", but 215,000+7,500=222,500; the page keys 207500 and 222500',
  },
  {
    page: 'content/life-health-sciences/biology/46-ecosystems/02-energy-flow-through-ecosystems.md',
    exercise: 'fs-idm130633648',
    kind: 'key',
    erratum: 298,
    reason: 'source keys "chemoautotrophs" as the term that encompasses all organisms that make their own food using inorganic molecules, but the module\'s own text says "Photosynthetic and chemosynthetic organisms are both grouped into a category known as autotrophs: organisms capable of synthesizing their own food (more specifically, capable of using inorganic carbon as a carbon source)"; chemoautotrophs is the subset that excludes the photoautotrophs; the page keys "autotrophs"',
  },
  {
    page: 'content/life-health-sciences/microbiology/23-urogenital-system-infections/03-bacterial-infections-of-the-reproductive-system.md',
    exercise: 'fs-id1167662475199',
    kind: 'options',
    erratum: 718,
    reason: 'source option d misspells the genus as "Haemophilis ducreyi"; the page prints "Haemophilus ducreyi" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/microbiology/24-digestive-system-infections/05-protozoan-infections-of-the-gastrointestinal-tract.md',
    exercise: 'fs-id1167662480378',
    kind: 'key',
    erratum: 754,
    reason: 'source keys option C "Cyclospora cayetanesis" (missing "n") — a one-word source misspelling the module itself spells "cayetanensis" four times; the page corrects the option in place and keys "Cyclospora cayetanensis"',
  },
  {
    page: 'content/life-health-sciences/microbiology/24-digestive-system-infections/03-bacterial-infections-of-the-gastrointestinal-tract.md',
    exercise: 'fs-id1167660271315',
    kind: 'key',
    erratum: 744,
    reason: 'source keys option B "Vibrio cholera" (missing the final "e"), one of six sites where the module drops the "e" after spelling "Vibrio cholerae" correctly at first mention; the page corrects the option in place and keys "Vibrio cholerae"',
  },
  {
    page: 'content/life-health-sciences/microbiology/24-digestive-system-infections/05-protozoan-infections-of-the-gastrointestinal-tract.md',
    exercise: 'fs-id1167662499528',
    kind: 'options',
    erratum: 754,
    reason: 'source option c misspells the species as "Cyclospora cayetanesis"; the page prints "Cyclospora cayetanensis" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/microbiology/25-circulatory-and-lymphatic-system-infections/02-bacterial-infections-of-the-circulatory-and-lymphatic-systems.md',
    exercise: 'fs-id1167661292060',
    kind: 'options',
    erratum: 767,
    reason: 'source distractor "Bacillus moniliformis" carries the Glossary appendix\'s wrong genus for the rat-bite fever agent the module itself names "Streptobacillus moniliformis" three times; the page prints "Streptobacillus moniliformis" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/microbiology/26-nervous-system-infections/04-fungal-and-parasitic-diseases-of-the-nervous-system.md',
    exercise: 'fs-id1167660333416',
    kind: 'key',
    erratum: 797,
    reason: 'the source KEY (option C) "Trypanosoma brucei rhodanese" misspells the subspecies the module body prints as "rhodesiense"; the page keys "Trypanosoma brucei rhodesiense" (one-word typo rule); option order and letter unchanged.',
  },
  {
    page: 'content/life-health-sciences/microbiology/26-nervous-system-infections/04-fungal-and-parasitic-diseases-of-the-nervous-system.md',
    exercise: 'fs-id1167662646869',
    kind: 'options',
    erratum: 798,
    reason: 'source distractor "Entameba histolyticum" misspells both genus and epithet; the page prints "Entamoeba histolytica" (one-word typo rule); option order and key unchanged.',
  },  {
    page: 'content/life-health-sciences/biology/04-cell-structure/03-eukaryotic-cells.md',
    exercise: 'fs-id1419640',
    kind: 'solution',
    erratum: 901,
    reason: 'the model answer keeps the source solution verbatim but appends a Source note correcting the question\'s premise that red blood cells are ribosome-rich (mature erythrocytes have no organelles, Section 40.2); the note lowers the solution-word coverage below the floor',
  },
  {
    page: 'content/life-health-sciences/biology/07-cellular-respiration/04-oxidative-phosphorylation.md',
    exercise: 'fs-idp50822512',
    kind: 'solution',
    erratum: 910,
    reason: 'the source solution says the chain "can no longer pump electrons into the intermembrane space", but the module\'s own caption says protons are pumped there; the page\'s model answer says "pump protons (hydrogen ions)" and adds a Source note',
  },
  {
    page: 'content/life-health-sciences/biology/10-cell-reproduction/04-cancer-and-the-cell-cycle.md',
    exercise: 'fs-idp23568448',
    kind: 'options',
    erratum: 918,
    reason: 'the source option "E6 inactivates p53" is also true of the keyed "E6 binding marks p53 for degradation", so the item was double-keyed; the page prints "E6 binding causes p53 to trigger apoptosis" in its place (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/14-dna-structure-and-function/01-historical-basis-of-modern-understanding.md',
    exercise: 'eip-758',
    kind: 'options',
    erratum: 922,
    reason: 'the source option "Bacteriophages could spread DNA encoding toxins to new bacteria" describes transduction, which the book\'s Section 22.2 separates from transformation, so the keyed "All of the above" was wrong as printed; the page prints "Bacteria could take up DNA encoding toxins that other bacteria shed into their environment" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/14-dna-structure-and-function/06-dna-repair.md',
    exercise: 'fs-id2008893',
    kind: 'solution',
    erratum: 923,
    reason: 'the source solution cites xeroderma pigmentosa as a mismatch-repair failure, but the same module attributes it to defective nucleotide excision repair enzymes; the page\'s model answer drops the example and adds a Source note',
  },
  {
    page: 'content/life-health-sciences/biology/16-gene-expression/04-eukaryotic-transcription-gene-regulation.md',
    exercise: 'fs-id1808039',
    kind: 'options',
    erratum: 924,
    reason: 'the source options "a transcription factor" (required by the module\'s own opening paragraph and Summary) and "a protein" (true of RNA polymerase itself) made the item double-keyed; the page prints "a repressor" and "mRNA" in their place (key "RNA polymerase" unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/22-prokaryotes-bacteria-and-archaea/03-prokaryotic-metabolism.md',
    exercise: 'eip-113',
    kind: 'options',
    erratum: 928,
    reason: 'the source distractor "photoautotrophs" is true by the module\'s own definition (photoautotrophs use sunlight and carbon dioxide; phototrophs that "do not fix carbon" are "not photosynthetic"), so the cyanobacteria item was double-keyed; the page replaces that option with "photoheterotrophs" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/28-invertebrates/06-superphylum-ecdysozoa-arthropods.md',
    exercise: 'fs-idp45105856',
    kind: 'options',
    erratum: 933,
    reason: 'the source option "Insects have both dorsal and ventral blood vessels." is also false by the module (only "the tubular dorsal blood vessel"; the figure\'s alt: "a dorsal blood vessel that has multiple hearts along its length"), so the "which is false" item was double-keyed; the page prints "Insects have a dorsal blood vessel with multiple hearts along its length." (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/29-vertebrates/01-chordates.md',
    exercise: 'fs-idm71000689',
    kind: 'options',
    erratum: 934,
    reason: 'the source distractor "Vertebrates" is true by the module\'s own "Craniata/Vertebrata" clade that "includes the primitively jawless Myxini (hagfishes)" and its Summary\'s "Craniata… is considered to be synonymous with Vertebrata", so the hagfish item was double-keyed; the page replaces that option with "Gnathostomes" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/20-phylogenies-and-the-history-of-life/01-organizing-life-on-earth.md',
    exercise: 'fs-idp28640208',
    kind: 'options',
    erratum: 987,
    reason: 'the source distractor "DNA" is true by the module\'s own sentence that researchers "may use data from fossils, from studying the body part structures, or molecules that an organism uses, and DNA analysis" to construct a phylogeny, so the item was double-keyed; the page replaces that option with "scientific names" (key "evolutionary history" unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/22-prokaryotes-bacteria-and-archaea/01-prokaryotic-diversity.md',
    exercise: 'eip-440',
    kind: 'solution',
    erratum: 990,
    reason: 'the source solution names the endolith\'s second feature "Hypolith – survival in low humidity/water environment", but a hypolith lives beneath rocks (the question\'s organism lives inside rock) and the term names a habitat, not a tolerance; the page\'s model answer gives the tolerance of a low humidity/water environment, with a source note naming the source\'s "hypolith"',
  },
  {
    page: 'content/life-health-sciences/biology/45-population-and-community-ecology/04-population-dynamics-and-regulation.md',
    exercise: 'eip-720',
    kind: 'key',
    erratum: 948,
    reason: 'source keys "snow in winter" as the event that would not lower Yellowstone\'s grey wolf carrying capacity, but the module\'s own text says winter carrying capacity "is much lower than it is during the summer," names cold winter weather and forest fire as density-independent mortality and disease as density-dependent; the page keys "a beaver damming a river upstream," the one option the module does not tie to lower carrying capacity',
  },
  {
    page: 'content/life-health-sciences/microbiology/05-the-eukaryotes-of-microbiology/02-parasitic-helminths.md',
    exercise: 'fs-id1172102097375',
    kind: 'options',
    erratum: 963,
    reason: 'the source distractors "fluke" and "trematode" are true by the module\'s own sentence that "the flukes (trematodes) are nonsegmented flatworms that ... attach to the inner walls of intestines", so the item was double-keyed; the page replaces them with "cestode" and "tapeworm" (key "nematode" unchanged)',
  },
  {
    page: 'content/life-health-sciences/microbiology/11-mechanisms-of-microbial-genetics/06-how-asexual-prokaryotes-achieve-genetic-diversity.md',
    exercise: 'fs-id1167663637654',
    kind: 'options',
    erratum: 973,
    reason: 'the source distractor "transformation" is true by the module\'s own sentence that "bacterial transformation is an important mechanism for the acquisition of genetic elements encoding virulence factors and antibiotic resistance", so the item was double-keyed; the page replaces that option with "vertical gene transfer" (key "conjugation" unchanged)',
  },
  {
    page: 'content/life-health-sciences/microbiology/24-digestive-system-infections/01-anatomy-and-normal-microbiota-of-the-digestive-system.md',
    exercise: 'fs-id1167663737442',
    kind: 'options',
    erratum: 980,
    reason: 'the source distractors "It produces acids that lower the pH of the stomach." and "It speeds up the process by which microbes are flushed from the digestive tract." are also NOT ways by the module (it credits the microbiota only with competitive exclusion and bacteriocins, stomach acid to the stomach, and flushing to the constant movement of materials), so the item had three keys; the page replaces the first with the module\'s bacteriocin sentence ("It secretes protein toxins that bind to specific receptors on the surface of susceptible bacteria.") and drops the second (three options; key D unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/28-invertebrates/02-phylum-cnidaria.md',
    exercise: 'fs-idm248646960',
    kind: 'solution',
    erratum: 993,
    reason: 'the source solution calls nematocysts "stinging cells", but the module names the cnidocyte as the stinging cell and the nematocyst as the stinging organelle within it; the page\'s model answer says "stinging organelles within cnidocytes", with a source note naming the source\'s wording',
  },
  {
    page: 'content/life-health-sciences/biology/28-invertebrates/02-phylum-cnidaria.md',
    exercise: 'eip-386',
    kind: 'solution',
    erratum: 994,
    reason: 'the source solution says sponges "reproduce by external fertilization", but section 28.1 has water-borne sperm fertilize oocytes borne in the mesohyl of other sponges; the page\'s model answer and rubric say sponges release sperm into the water to fertilize eggs held in other sponges\' mesohyl, with a source note',
  },
  {
    page: 'content/life-health-sciences/biology/28-invertebrates/06-superphylum-ecdysozoa-arthropods.md',
    exercise: 'eip-184',
    kind: 'options',
    erratum: 1002,
    reason: 'the source option "Prevents dessication" misspells desiccation; the page prints "Prevents desiccation" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/28-invertebrates/06-superphylum-ecdysozoa-arthropods.md',
    exercise: 'fs-idp55772880',
    kind: 'solution',
    erratum: 1003,
    reason: 'the source question asks for the "superclasses" of Arthropoda and the solution names four groups, but the module classifies the phylum into five subphyla including the extinct Trilobita; the page keeps the source question and solution and appends a source note to the model answer',
  },
  {
    page: 'content/life-health-sciences/biology/29-vertebrates/01-chordates.md',
    exercise: 'fs-idm154235264',
    kind: 'key',
    erratum: 995,
    reason: 'source keys "cephalochordates" as the invertebrates most closely related to vertebrates, but the module\'s own phylogeny draws Urochordata as the sister of Vertebrata, its Summary calls the question debated, and phylogenomic analyses place the urochordates (tunicates) there; the page keys "urochordates", with a source note on the body sentence claiming molecular support for cephalochordates',
  },
  {
    page: 'content/life-health-sciences/biology/34-animal-nutrition-and-the-digestive-system/01-digestive-systems.md',
    exercise: 'fs-idp82804064',
    kind: 'options',
    erratum: 1005,
    reason: 'in an "untrue" question, the source option "Cows do not have upper teeth" is also untrue (the module says ruminants lack upper incisor teeth), so the item had two keys; the page prints "Cows do not have upper incisor teeth" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/34-animal-nutrition-and-the-digestive-system/02-nutrition-and-energy-production.md',
    exercise: 'fs-idm12790176',
    kind: 'options',
    erratum: 1006,
    reason: 'the source option "fat" is also true by the module ("stored as glycogen in the liver and muscle cells, and in fat cells"); the page prints "cellulose" in its place (key "glycogen" unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/35-the-nervous-system/01-neurons-and-glial-cells.md',
    exercise: 'eip-837',
    kind: 'options',
    erratum: 1007,
    reason: 'the source option "microglia" is as defensible as the keyed astrocytes (the module says microglia "protect the brain from invading microorganisms"); the page prints "oligodendrocytes" in its place (key "astrocytes" unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/33-the-animal-body-basic-form-and-function/01-animal-form-and-function.md',
    exercise: 'fs-idm126918432',
    kind: 'key',
    erratum: 1008,
    reason: 'source keys "transverse" for the plane dividing dorsal from ventral, but the module\'s own body-planes figure labels the goat\'s back-from-belly plane "Frontal plane" and the module names the frontal plane "coronal"; the page keys "coronal"',
  },
  {
    page: 'content/life-health-sciences/biology/38-the-musculoskeletal-system/03-joints-and-skeletal-movement.md',
    exercise: 'eip-407',
    kind: 'solution',
    erratum: 1011,
    reason: 'the source solution says the hip moves the femur "in a protracted motion" and "retracts the femur" in a step, but the module defines protraction and retraction as horizontal-plane movements; the page\'s model answer and rubric say the hip flexes and extends, with a source note',
  },
  {
    page: 'content/life-health-sciences/biology/43-animal-reproduction-and-development/01-reproduction-methods.md',
    exercise: 'fs-idp65241328',
    kind: 'options',
    erratum: 1018,
    reason: 'the source option "asexual" is also true of the keyed fragmentation, which the module lists as a form of asexual reproduction; the page prints "sexual" in its place (key "fragmentation" unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/46-ecosystems/03-biogeochemical-cycles.md',
    exercise: 'eip-996',
    kind: 'options',
    erratum: 1021,
    reason: 'the source options "Increase use of fuel sources that do not produce carbon dioxide as a by-product" and "Decrease livestock agriculture" also reduce carbon dioxide (the module says animal husbandry increases atmospheric carbon) and the module ranks no approach; the page prints "Increase the burning of fossil fuels" and "Increase livestock agriculture" in their place (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/microbiology/15-microbial-mechanisms-of-pathogenicity/01-characteristics-of-infectious-disease.md',
    exercise: 'fs-id1167584863097',
    kind: 'options',
    erratum: 611,
    reason: 'the source option "skin infection acquired from a dog bite" is also noncommunicable by the module\'s definition (not spread from one person to another), so it double-keys the question; the page prints "gonorrhea acquired through intimate contact with an infected person" in its place (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/03-the-cellular-level-of-organization/06-cellular-differentiation.md',
    exercise: 'fs-id1183443',
    kind: 'key',
    erratum: 1807,
    reason: 'the source misspells "pluripotency" as "pleuripotency" in the stem and in every option of the ordering item (the module body spells it pluripotency); the page prints the corrected spelling in the stem, the options, and the key — the keyed option (D) and its order are unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/03-the-cellular-level-of-organization/02-the-cytoplasm-and-cellular-organelles.md',
    exercise: 'fs-id1514835',
    kind: 'options',
    erratum: 1814,
    reason: 'the source option "the pool water containing chlorine" is a second correct completion of the cytoplasm-is-to-cytosol analogy, because the module\'s Summary says the cytosol "consists mainly of water, but also contains various dissolved nutrients and other molecules"; the page prints "the chlorine" in its place (key "the water" unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/04-the-tissue-level-of-organization/06-tissue-injury-and-aging.md',
    exercise: 'fs-id1467980',
    kind: 'options',
    erratum: 1842,
    reason: 'the source distractor "meylin" is a misspelling of "myelin" (the §4.5 module m46057 defines myelin in its glossary; m46058 never prints the word); the page prints "myelin" and the footer discloses the one-word correction',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/06-bone-tissue-and-the-skeletal-system/03-bone-structure.md',
    exercise: 'fs-id1521592',
    kind: 'options',
    erratum: 1930,
    reason: 'the source distractor "compact bone" is a second correct completion of "The diaphysis contains ________" — the module says "The walls of the diaphysis are composed of dense and hard compact bone"; the page prints "articular cartilage" in its place (key "fat stores" unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/06-bone-tissue-and-the-skeletal-system/03-bone-structure.md',
    exercise: 'fs-id320806',
    kind: 'key',
    erratum: 1931,
    reason: 'the source keys "osteocytes" for "Which of the following cells are capable of undergoing mitosis?", but the module says osteocytes "lack mitotic activity" and that osteogenic cells "are the only bone cells that divide"; the page keys "osteogenic cells"',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/06-bone-tissue-and-the-skeletal-system/03-bone-structure.md',
    exercise: 'fs-id1107187',
    kind: 'key',
    erratum: 1932,
    reason: 'the source keys "osteoprogenitor cells" for "Which cells do not originate from osteogenic cells?", but the module says osteoclasts "originate from monocytes and macrophages, two types of white blood cells, not from osteogenic cells", and osteoprogenitor cells are the osteogenic cells themselves; the page keys "osteoclasts"',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/06-bone-tissue-and-the-skeletal-system/03-bone-structure.md',
    exercise: 'fs-id1419507',
    kind: 'options',
    erratum: 1933,
    reason: 'the source distractor "lamellae" is a second correct answer to "Which of the following are found in compact bone and cancellous bone?" — the module\'s own spongy-bone figure (606_Spongy_Bone) labels lamellae inside a trabecula and its alt describes "concentric lamellae" there; the page prints "perforating canals" in its place (the body places them only in compact bone; key "lacunae" unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/06-bone-tissue-and-the-skeletal-system/04-bone-formation-and-development.md',
    exercise: 'fs-id1514097',
    kind: 'solution',
    erratum: 1939,
    reason: 'the source model answer says secondary ossification centers "form later, and there are two of them, one in each epiphysis", a fixed count the book\'s own §8.5 module m46376 contradicts ("Small bones, such as the phalanges, will develop only one secondary ossification center… Large bones, such as the femur, will develop several"); the page\'s model answer says they form later, usually after birth, in the epiphyses — typically one in each epiphysis, with a phalanx having one and the femur several — and the rubric checkpoint grades the location, not the count',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/06-bone-tissue-and-the-skeletal-system/03-bone-structure.md',
    exercise: 'fs-id1509482',
    kind: 'options',
    erratum: 1941,
    reason: 'the source distractor "bone remodeling" is a second correct answer to "Which of the following occurs in the spongy bone of the epiphysis?" — the module\'s own spongy-bone figure (606_Spongy_Bone) boxes the femoral head and draws osteoclasts and osteoblasts on a trabecula there, and the body says "Osteoclasts are continually breaking down old bone while osteoblasts are continually forming new bone"; the page prints "osteon formation" in its place (the module says "Compact bone is dense and composed of osteons, while spongy bone is less dense and made up of trabeculae", whose osteocytes "are not arranged in concentric circles"; key "hematopoiesis" unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/07-axial-skeleton/05-embryonic-development-of-the-axial-skeleton.md',
    exercise: 'fs-id1894914',
    kind: 'options',
    erratum: 1958,
    reason: 'the source distractor "intramembranous ossification, which forms the facial bones." is a second correct answer to "Embryonic development of the axial skeleton involves ________." — the book\'s own §6.4 module m46301 says "The flat bones of the face, most of the cranial bones, and a good deal of the clavicles (collarbones) are formed via intramembranous ossification, while bones at the base of the skull and the long bones form via endochondral ossification"; the page prints "intramembranous ossification, which forms the vertebrae" in its place (the module says the vertebral cartilage models "ossify into bone through the process of endochondral ossification"; key "endochondral ossification, which forms the ribs and sternum" unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/09-joints/01-classification-of-joints.md',
    exercise: 'fs-id2303902',
    kind: 'key',
    erratum: 2017,
    reason: 'the source keys B "the manubriosternal joint" for "Which of these joints is classified as a synarthrosis?"; the book\'s own §9.3 module m46381 says "A narrow symphysis is found at the manubriosternal joint" and "a symphysis is functionally classified as an amphiarthrosis", so on the book\'s terms that joint is an amphiarthrosis; the page prints and keys option B as "the first sternocostal joint", which m46381 makes a synchondrosis ("Permanent synchondroses that do not ossify are found at the first sternocostal joint") and "functionally classified as a synarthrosis" (distractors unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/11-the-muscular-system/02-naming-skeletal-muscles.md',
    exercise: 'fs-id4354529',
    kind: 'options',
    erratum: 2089,
    reason: 'the source distractor "muscle name" is a second correct answer to "The location of a muscle’s insertion and origin can determine ________." — the module\'s own fs-id2279191 says "The location of a muscle’s attachment can also appear in its name" and its summary "The origin and/or insertion can also be features used to name a muscle"; the page prints "fascicle arrangement" in its place (described in §11.1 m46487, never tied to attachment location in m46498; key "action" unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/11-the-muscular-system/04-axial-muscles-of-the-abdominal-wall-and-thorax.md',
    exercise: 'fs-id2442596',
    kind: 'options',
    erratum: 2091,
    reason: 'the source distractors "interior oblique" and "exterior oblique" misspell the muscle names the module m46485 prints throughout as "internal oblique" and "external oblique" ("Which of the following abdominal muscles is not a part of the anterior abdominal wall?"); the page prints the module\'s spellings; key "quadratus lumborum" unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/11-the-muscular-system/03-axial-muscles-of-the-head-neck-and-back.md',
    exercise: 'fs-id2471871',
    kind: 'options',
    erratum: 2092,
    reason: 'the source distractor "rotating of the vertebral column" is a second correct answer to "What is the function of the erector spinae?" — the module\'s own fs-id2586421 says the erector spinae group "controls flexion, lateral flexion, and rotation of the vertebral column"; the page prints "elevation of the mandible" in its place (the module gives it to the masseter, fs-id2101141, and the temporalis, tbl-ch11_04, never to the erector spinae; key "postural support" unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/11-the-muscular-system/06-appendicular-muscles-of-the-pelvic-girdle-and-lower-limbs.md',
    exercise: 'fs-id1469672',
    kind: 'options',
    erratum: 2093,
    reason: 'the source distractor "soleus" is defensible as an answer to "What is the largest muscle in the lower leg?" — the module m46482 never says which leg muscle is largest (fs-id2421915 calls the gastrocnemius only "The most superficial and visible muscle of the calf"), and by volume the soleus is larger; the page prints "popliteus" in its place (one of the "four deep muscles in the posterior compartment of the leg" fs-id2421915 names, never called large; key "gastrocnemius" unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/17-the-endocrine-system/08-gonadal-and-placental-hormones.md',
    exercise: 'fs-id1399907',
    kind: 'options',
    erratum: 2344,
    reason: 'the source distractor "peptide hormones" is a second correct answer to "The gonads produce what class of hormones?" — the module m46670\'s own fs-id1423637 says "the testes produce the peptide hormone inhibin"; the page prints "glycoprotein hormones" in its place (a class m46667 names, given to no gonadal hormone in this book); key "steroid hormones" unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/20-the-cardiovascular-system-blood-vessels-and-circulation/05-circulatory-pathways.md',
    exercise: 'fs-id2107147',
    kind: 'options',
    erratum: 2478,
    reason: 'the source distractor "The brachial artery is the distal branch of the axillary artery." is a second true answer to "Which of the following statements is true?" — the module m46646\'s own fs-id1595346 says the axillary artery "continues into the upper arm, or brachium, and becomes the brachial artery"; the page prints "The brachial artery bifurcates into the radial and ulnar arteries at the wrist." in its place (the same paragraph says the brachial artery bifurcates "As the brachial artery approaches the coronoid fossa"); key "The radial and ulnar arteries join to form the palmar arch." unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/23-the-digestive-system/03-the-mouth-pharynx-and-esophagus.md',
    exercise: 'fs-id1890969',
    kind: 'options',
    erratum: 2632,
    reason: 'the source distractor "lower esophageal sphincter" is a defensible second answer to "Which structure is located where the esophagus penetrates the diaphragm?" — the module m46511\'s own fs-id2101903 says "Surrounding this sphincter is the muscular diaphragm"; the page prints "laryngopharynx" in its place (fs-id1707702 puts it in the pharynx, its inferior border connecting to the esophagus, far above the diaphragm); key "esophageal hiatus" unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/24-metabolism-and-nutrition/04-protein-metabolism.md',
    exercise: 'fs-id1863134',
    kind: 'options',
    erratum: 2674,
    reason: 'the source distractor "converted to acetyl CoA" is a second true answer to "If an amino acid is not used to create new proteins, it can be ________." — the module m46493\'s own fs-id2864299 says amino acids are transported "to be converted into fats or acetyl CoA and used in the Krebs cycle", and its Critical Thinking solution fs-id1387774 says they "are broken down into pyruvate, acetyl CoA, or intermediates of the Krebs cycle"; the page prints "stored in the pancreas" in its place (fs-id2508882: "the body has no capacity or mechanism for their storage"); key "converted to glucose or ketones" unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/24-metabolism-and-nutrition/07-nutrition-and-diet.md',
    exercise: 'fs-id3085772',
    kind: 'options',
    erratum: 2676,
    reason: 'the source distractor "improper bone development" is a second true answer to "A deficiency in vitamin A can result in ________." — the module m46467\'s own Fat-soluble Vitamins table (tbl-ch25_03) gives vitamin A the Function "Eye and bone development, immune function"; the page prints "beriberi" in its place (the module\'s Water-soluble Vitamins table tbl-ch25_04 ties beriberi to thiamine deficiency); key "improper eye development or sight" unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/24-metabolism-and-nutrition/04-protein-metabolism.md',
    exercise: 'fs-id2058342',
    kind: 'options',
    erratum: 2675,
    reason: 'the source distractor "supply energy for the cell" is a second true answer to "Amino acids are needed to ________." — the module m46493\'s own fs-id3342803 says "Amino acids can also be used as a source of energy" and "amino acids can serve as a source of energy production through the Krebs cycle"; the page prints "activate trypsinogen" in its place (fs-id1265347 gives that to enterokinase, which "binds to trypsinogen and converts it into its active form, trypsin"); key "build new proteins" unchanged',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/25-the-urinary-system/05-physiology-of-urine-formation.md',
    exercise: 'fs-id2459453',
    kind: 'key',
    erratum: 2730,
    reason: 'the source keys B "false" for "Systemic blood pressure must stay above 60 so that the proper amount of filtration occurs.", but the module m46433\'s own fs-id2533120 says "as long as mean arterial pressure is above approximately 60 mm Hg, the pressure will be adequate to maintain glomerular filtration. Blood pressures below this level will impair renal function and cause systemic disorders that are severe enough to threaten survival", so the statement is true by the module; the page keys option A "true" (options and option order unchanged)',
  },
  {
    page: 'content/life-health-sciences/anatomy-physiology/25-the-urinary-system/03-gross-anatomy-of-the-kidney.md',
    exercise: 'fs-id2415782',
    kind: 'options',
    erratum: 2733,
    reason: 'the source distractor "it is displace by the heart" misspells "displaced" ("The right kidney is slightly lower because ________."); the page prints "it is displaced by the heart"; key "it is displaced by the liver" unchanged',
  },
  {
    page: 'content/physical-sciences/chemistry/03-composition-of-substances-and-solutions/01-formula-mass-and-the-mole-concept.md',
    exercise: 'fs-idp40492096',
    kind: 'key',
    erratum: 2987,
    reason: 'the source answers "AlPO4: 1.000 mol, or 26.98 g Al; Al2Cl6: 1.994 mol, or 53.74 g Al; Al2S3: 3.00 mol, or 80.94 g Al" for 122 g, 266 g, and 225 g of the three compounds: four figures from three-figure data, 53.74 following from no set of atomic masses (266/266.66 × 2 × 26.98 = 53.83) and 80.94 from the moles rounded to 3.00 before multiplying (80.86); the gaps are outside the chapter\'s 0.05 percent band, so the page keys the three masses the book\'s periodic table gives at three figures (the multiple choice among the samples keeps the source\'s answer)',
  },
  {
    page: 'content/physical-sciences/chemistry/03-composition-of-substances-and-solutions/03-molarity.md',
    exercise: 'fs-idm81897840#check',
    kind: 'key',
    erratum: 2997,
    reason: 'the Check Your Learning gives "CoCl2 (128.9 g/mol)" and answers "0.674 M"; the molar mass of CoCl2 is 129.83 g/mol by the book\'s periodic table (58.933 + 2 × 35.45), so the stem prints it at the source\'s four figures, 129.8, and the key is what the stem then gives, 6.52 ÷ 129.8 ÷ 0.0750 = 0.670 (until November 14, 2026 the stem and key stood as the source prints them; a learner who took the molar mass from the table was marked wrong with nothing said)',
  },
  {
    page: 'content/physical-sciences/chemistry/03-composition-of-substances-and-solutions/03-molarity.md',
    exercise: 'fs-idm62322112(d)',
    kind: 'key',
    erratum: 2998,
    reason: 'the source answers "5.9 × 10^−7 mol FeSO4" for 325 mL of 1.8 × 10^−6 M FeSO4; the product is exactly 5.85 × 10^−7, a tie that Section 1.5\'s round-half-to-even rule, which this module applies to 1.325 mol ("properly rounded to 1.32 mol"), rounds to 5.8 × 10^−7; the mass keyed beside it, 8.9 × 10^−5 g, is the source\'s',
  },
  {
    page: 'content/physical-sciences/chemistry/03-composition-of-substances-and-solutions/03-molarity.md',
    exercise: 'fs-idm27167936',
    kind: 'key',
    erratum: 2999,
    reason: 'the source answers "0.5000 L" for 0.1718 L of a 0.3556-M solution diluted to 0.1222 M; 0.1718 × 0.3556 / 0.1222 = 0.49993, which is 0.4999 L at the four figures of the data and of the source\'s own answer — no atomic mass enters, so this is the stem\'s arithmetic and not the periodic table\'s (until November 13, 2026 the source\'s value was the key and 0.4999 a second right answer)',
  },
  {
    page: 'content/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/01-writing-and-balancing-chemical-equations.md',
    exercise: 'fs-idp122928448(c)',
    kind: 'key',
    erratum: 3003,
    reason: 'the source solution prints "MgC1₂(aq) + 2NaOH(aq) ⟶ Mg(OH)₂(s) + 2NaCl(aq)" for magnesium chloride and sodium hydroxide, with the digit one where the lowercase l of Cl belongs: no element has the symbol C1, the stem names "magnesium chloride", and the same answer writes "NaCl" correctly, so the equation text-in keys MgCl₂(aq) + 2NaOH(aq) ⟶ Mg(OH)₂(s) + 2NaCl(aq)',
  },
  {
    page: 'content/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/02-classifying-chemical-reactions.md',
    exercise: 'fs-idp89462576(b)',
    kind: 'solution',
    erratum: 3007,
    reason: 'the source solution prints "Na2CO3(aq) + H2S(g) ⟶ Na2S(aq) + CO2(g) + H2O(l)" for sodium carbonate and hydrogen sulfide; by the book\'s own Appendix H, H2S (Ka 8.9 × 10^−8) is a weaker acid than H2CO3 (4.3 × 10^−7) and HS⁻ (1.0 × 10^−19) far weaker than HCO3⁻ (4.7 × 10^−11), so sulfide and carbon dioxide do not form and the reaction stops at NaHS + NaHCO3; the self-check\'s model answer is Na₂CO₃(aq) + H₂S(g) ⟶ NaHS(aq) + NaHCO₃(aq)',
  },
  {
    page: 'content/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/03-reaction-stoichiometry.md',
    exercise: 'fs-idp147780304(c)',
    kind: 'key',
    erratum: 3015,
    reason: 'the source answers "6.8 × 10^2 g NaNO3" for the mass required to produce 128 g of oxygen: two figures where the data give three, and the same part\'s moles are printed to three (8.00), so the mass fill-in keys 6.80 × 10^2, the source\'s value written to the figures its data give',
  },
  {
    page: 'content/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/03-reaction-stoichiometry.md',
    exercise: 'fs-idp147780304(d)',
    kind: 'key',
    erratum: 3016,
    reason: 'the source answers "1665 mol CO2" for the combustion of 20.0 kg of carbon: four figures from data that give three, the same part\'s mass (73.3 kg) having three, so the moles fill-in keys 1.67 × 10^3',
  },
  {
    page: 'content/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/03-reaction-stoichiometry.md',
    exercise: 'fs-idp272460112(b)',
    kind: 'key',
    erratum: 3018,
    reason: 'the source answers "1.25 mol GaCl3" for 2.6 L of 1.44 M HCl: three figures from a two-figure volume, the same part\'s mass (2.2 × 10^2 g) having two, so the moles fill-in keys 1.2',
  },
  {
    page: 'content/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/05-quantitative-chemical-analysis.md',
    exercise: 'fs-idp204697696',
    kind: 'key',
    erratum: 3026,
    reason: 'the source answers "34.99 mL KOH" for 40.00 mL of 0.0656 M H3PO4 titrated with 0.1500 M KOH: four figures from a three-figure molarity (the calculation gives 34.987), as no other numeric key of the module does, so the fill-in keys 35.0',
  },
  {
    page: 'content/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/05-quantitative-chemical-analysis.md',
    exercise: 'fs-idp80717680#check',
    kind: 'key',
    erratum: 3027,
    reason: 'the Check Your Learning answer prints "0.2648 M" for 23.24 mL of 0.09113 M KMnO4 against 20.00 mL of oxalic acid; the data give 23.24 × 0.09113 × 5/2 ÷ 20.00 = 0.264733, which is 0.2647 M to four figures (0.2648 follows from rounding the intermediate to 2.118 mmol), so the fill-in keys 0.2647 with the one-unit allowance, which still grades the source\'s 0.2648 right',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/01-energy-basics.md',
    exercise: 'fs-idm11773136(a)',
    kind: 'key',
    erratum: 3047,
    reason: 'the source solution prints "11.38 cal °C^−1" for the heat capacity of 45.8 g of nitrogen gas in calories: four figures from data that give three, the same answer\'s other values (47.6, 407, 97.3) having three (47.632 ÷ 4.184 = 11.384), so the fill-in keys 11.4',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/01-energy-basics.md',
    exercise: 'fs-idm11773136(b)',
    kind: 'key',
    erratum: 3048,
    reason: 'the source solution prints "97.3 cal °C^−1" for the heat capacity of 1.00 pound of aluminum: the rounded 407 J/°C divided by 4.184, where the carried value is 406.87 ÷ 4.184 = 97.245, so the fill-in keys 97.2',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/01-energy-basics.md',
    exercise: 'fs-idp23764656',
    kind: 'key',
    erratum: 3049,
    reason: 'the source solution prints "Energy required = 7.47 kWh" for 892 L of water cooling 13 °F: 7.47 follows from no route on the page (the data give 7.487 kWh) and carries three figures where 1.0 g/mL and a 13 °F change give two, so the fill-in keys 7.5',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/02-calorimetry.md',
    exercise: 'fs-idp13199280#check',
    kind: 'key',
    erratum: 3053,
    reason: 'the Check Your Learning answer prints "335.6 °C" for 248 g of copper dropped into 390 mL of water at 22.6 °C reaching 39.9 °C: four figures from a three-figure change (17.3 °C; the worked example prints 248 °C), so the fill-in keys 336',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/02-calorimetry.md',
    exercise: 'fs-idm19242032#check',
    kind: 'key',
    erratum: 3054,
    reason: 'the Check Your Learning answer prints "1.34 × 10^3 kJ, or 1.34 kJ" for 200 g of solution warming 1.6 °C: the first value carries the unit of the second, and a change of 1.6 °C has two figures, so the fill-in keys 1.3',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/02-calorimetry.md',
    exercise: 'fs-idm50720272',
    kind: 'key',
    erratum: 3055,
    reason: 'the source solution prints "The temperature of the coffee will drop 1 degree" for 180 g of coffee at 95 °C and a 45 g silver spoon at 25 °C: the data (0.24 J/g °C, 45 g) give two figures and the drop is 0.990 °C, so the fill-in keys 0.99',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/02-calorimetry.md',
    exercise: 'fs-idp22524928',
    kind: 'key',
    erratum: 3058,
    reason: 'the source solution prints "22.6" for the 3.21 g of NH4NO3 dissolved in 100.0 g of water, where the question asks how much the temperature would change: 22.6 is the final temperature (24.9 − 2.3), the change from the example\'s heat is −2.4 °C, so the fill-in keys −2.4',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/02-calorimetry.md',
    exercise: 'fs-idp40934400',
    kind: 'key',
    erratum: 3056,
    reason: 'the source solution prints "11.7 kJ" for the 0.740 g of TNT burned in a calorimeter of 534 J/°C holding 675 mL of water, warming 3.5 °C: it follows only from 4.18 J/g °C (this book\'s 4.184 gives 11.75) and carries three figures from a two-figure change, so the fill-in keys 12',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/03-enthalpy.md',
    exercise: 'fs-idp107667280',
    kind: 'key',
    erratum: 3076,
    reason: 'the source solution prints "81 kJ mol^−1" for the enthalpy of solution of 3.0 g of CaCl2 in 150.0 g of water warming 3.4 °C: it prints no sign for an exothermic dissolution and divides the rounded 2.2 kJ (4.18 × 153.0 × 3.4 = 2174 J gives 80.4 kJ/mol), so the fill-in keys −80',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/03-enthalpy.md',
    exercise: 'fs-idp103280960',
    kind: 'key',
    erratum: 3077,
    reason: 'the source solution prints "5204.4 kJ" for the heat from burning 4.00 moles of acetylene: five figures from a three-figure amount, so the fill-in keys 5.20 × 10^3',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/03-enthalpy.md',
    exercise: 'fs-idp28899760',
    kind: 'key',
    erratum: 3078,
    reason: 'the source solution prints "90.3 kJ/mol" for the enthalpy of formation of NO from 66.4 kJ and −114.1 kJ: the sum 180.5 has four figures and the 2 is exact, so (66.4 + 114.1) ÷ 2 = 90.25, and the fill-in keys 90.25',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/03-enthalpy.md',
    exercise: 'fs-idp184430560',
    kind: 'key',
    erratum: 3079,
    reason: 'the source solution prints "−54.04 kJ mol^−1" for how much heat is produced by the decomposition of 1 mole of H2O2: that is the enthalpy change, and "how much heat is produced" asks an amount (the source\'s own prose gives the heat of an exothermic change as a positive number), so the fill-in keys 54.04',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/03-enthalpy.md',
    exercise: 'fs-idp86137744',
    kind: 'key',
    erratum: 3080,
    reason: 'the source solution prints "−2660 kJ mol^−1" for the enthalpy of combustion of butane: 4(−393.51) + 5(−241.82) + 126 = −2657.14 is good to the units place, as every other Appendix G sum on the page is carried, so the fill-in keys −2657',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/03-enthalpy.md',
    exercise: 'fs-idp214849200',
    kind: 'key',
    erratum: 3081,
    reason: 'the source solution prints "–66.4 kJ" for how much heat is evolved in the production of 1 mole of TiO2: that is the enthalpy change (−66.388 kJ from Appendix G), and "how much heat is evolved" asks an amount, so the fill-in keys 66.4',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/03-enthalpy.md',
    exercise: 'fs-idp211817568(d)',
    kind: 'key',
    erratum: 3082,
    reason: 'the source solution prints "75.4 °C" for the temperature rise of 4.00 kg of water heated by 25.0 g of propane burning at −2,219.2 kJ/mol: it follows only from a molar mass of 44.0 and 4.18 J/g °C (this book\'s 44.097 and 4.184 give 75.175), so the fill-in keys 75.2',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/03-enthalpy.md',
    exercise: 'fs-idp140766896',
    kind: 'key',
    erratum: 3084,
    reason: 'the source solution prints "7.43 g" for the mass of water that gives the heat of 100 g of steam cooled from 110 °C to 100 °C: the 10 °C change has two figures (the value is 7.425), so the fill-in keys 7.4',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/03-enthalpy.md',
    exercise: 'fs-idp161282368',
    kind: 'key',
    erratum: 3085,
    reason: 'the source solution prints "459.6 kJ" for the heat released when 1 mole of manganese is burned to Mn3O4: Appendix G\'s −1378.83 has six figures and the 3 in 3 Mn is exact, so −1378.83 ÷ 3 = −459.610 and the fill-in keys 459.610',
  },
  {
    page: 'content/physical-sciences/chemistry/05-thermochemistry/03-enthalpy.md',
    exercise: 'fs-idp146867872',
    kind: 'key',
    erratum: 3086,
    reason: 'the source solution prints "25 kJ mol^−1" for the enthalpy of solution of NH4NO3 under the ice-pack example\'s conditions: it divides the example\'s rounded 1.0 kJ, where the heat carried unrounded (1023.9 J) gives 25.53 kJ/mol, so the fill-in keys 26',
  },
  {
    page: 'content/physical-sciences/chemistry/06-electronic-structure-and-periodic-properties-of-elements/01-electromagnetic-energy.md',
    exercise: 'fs-idp28548400',
    kind: 'key',
    erratum: 3092,
    reason: 'the source solution prints "E = 9.502 × 10^−15 J" for the X-ray of wavelength 2.090 × 10^−11 m: it is h times the frequency already rounded to 1.434 × 10^19 s^−1, where hc/λ carried unrounded is 9.5047 × 10^−15 J, so the energy fill-in keys 9.505; the frequency key is the source\'s',
  },
  {
    page: 'content/physical-sciences/chemistry/06-electronic-structure-and-periodic-properties-of-elements/02-the-bohr-model.md',
    exercise: 'fs-idp247735616#check',
    kind: 'key',
    erratum: 3102,
    reason: 'the Check Your Learning answer prints "−6.053 × 10^–20 J" for the electron promoted to n = 6, from the source\'s k = 2.179 × 10^−18 J; this book\'s Rydberg constant in joules (Appendix D, 2.1798724 × 10^−18) is 2.180 × 10^−18 J at four figures, and −k/36 = −6.0556 × 10^−20, so the fill-in keys −6.056',
  },
  {
    page: 'content/physical-sciences/chemistry/06-electronic-structure-and-periodic-properties-of-elements/02-the-bohr-model.md',
    exercise: 'fs-idp30549440#check',
    kind: 'key',
    erratum: 3102,
    reason: 'the Check Your Learning answer prints "6.198 × 10^–19 J; 3.205 × 10^−7 m" for He+ falling from n = 5 to n = 3, from the source\'s k = 2.179 × 10^−18 J; with this book\'s 2.180 × 10^−18 J the energy is 6.2009 × 10^−19 J and the wavelength 3.2035 × 10^−7 m, so the fill-ins key 6.201 and 3.204',
  },
  {
    page: 'content/physical-sciences/chemistry/06-electronic-structure-and-periodic-properties-of-elements/02-the-bohr-model.md',
    exercise: 'fs-idp171106816',
    kind: 'key',
    erratum: 3102,
    reason: 'the source solution prints "−8.716 × 10^−18 J" for the lowest energy of the electron in He+, −4k from the source\'s k = 2.179 × 10^−18 J; with this book\'s 2.180 × 10^−18 J it is −8.720 × 10^−18, so the fill-in keys −8.720',
  },
  {
    page: 'content/physical-sciences/chemistry/06-electronic-structure-and-periodic-properties-of-elements/02-the-bohr-model.md',
    exercise: 'fs-idp44268800',
    kind: 'key',
    erratum: 3102,
    reason: 'the source solution prints "−3.405 × 10^−20 J" for an electron with n = 8 in hydrogen, −k/64 from the source\'s k = 2.179 × 10^−18 J; with this book\'s 2.180 × 10^−18 J it is −3.40625 × 10^−20, so the fill-in keys −3.406',
  },
  {
    page: 'content/physical-sciences/chemistry/06-electronic-structure-and-periodic-properties-of-elements/02-the-bohr-model.md',
    exercise: 'fs-idp21050416',
    kind: 'key',
    erratum: 3102,
    reason: 'the source solution prints "2.856 eV" for the photon of the n = 5 to n = 2 transition in hydrogen, from the source\'s k = 2.179 × 10^−18 J; with this book\'s 2.180 × 10^−18 J it is 4.578 × 10^−19 J, 2.8577 eV at 1.602 × 10^−19 J/eV, so the fill-in keys 2.858',
  },
  {
    page: 'content/physical-sciences/chemistry/06-electronic-structure-and-periodic-properties-of-elements/02-the-bohr-model.md',
    exercise: 'fs-idp90797744',
    kind: 'key',
    erratum: 3102,
    reason: 'the source solution prints "1.471 × 10^−17 J" for the photon of the n = 2 to n = 1 transition in Li2+, from the source\'s k = 2.179 × 10^−18 J; with this book\'s 2.180 × 10^−18 J it is 14.715 × 10^−18 exactly, a tie that the rounding rule of Appendix B takes up to 1.472 × 10^−17, so the fill-in keys 1.472',
  },
  {
    page: 'content/physical-sciences/chemistry/06-electronic-structure-and-periodic-properties-of-elements/02-the-bohr-model.md',
    exercise: 'fs-idm7154736',
    kind: 'key',
    erratum: 3104,
    reason: 'the source solution prints "33.9 Å" for the radius of the n = 8 orbit in hydrogen: with a0 = 5.292 × 10^−11 m and the exact n, 64 a0 = 33.8688 Å, which has four figures, so the fill-in keys 33.87',
  },
  {
    page: 'content/physical-sciences/chemistry/06-electronic-structure-and-periodic-properties-of-elements/01-electromagnetic-energy.md',
    exercise: 'fs-idm104859984(a)',
    kind: 'solution',
    erratum: 3093,
    reason: 'the source solution prints "The color of (a) is red" for the cesium line of frequency 3.45 × 10^14 Hz, which is 869 nm, beyond the visible range of every figure in the section, so the self-check\'s model answer says the line is in the infrared and not seen as a color',
  },
  {
    page: 'content/physical-sciences/chemistry/07-chemical-bonding-and-molecular-geometry/06-molecular-structure-and-polarity.md',
    exercise: 'fs-idp67177072(e)',
    kind: 'key',
    erratum: 3142,
    reason: 'the source solution prints the electron-pair geometry of SeF₄ as "trigonal bypyramidal"; the word is "trigonal bipyramidal" in the module\'s own text, its glossary, and its figure of electron-pair geometries, so the item keys the name as the module spells it',
  },
  {
    page: 'content/physical-sciences/chemistry/07-chemical-bonding-and-molecular-geometry/02-covalent-bonding.md',
    exercise: 'fs-idm28148800(e)',
    kind: 'key',
    erratum: 3143,
    reason: 'the source solution orders the series "Ba, H, As, N, O" by increasing electronegativity; the module\'s own figure of electronegativity values gives arsenic 2.0 and hydrogen 2.1, so arsenic comes before hydrogen and the item keys the order the figure gives',
  },
  {
    page: 'content/physical-sciences/chemistry/07-chemical-bonding-and-molecular-geometry/05-strengths-of-ionic-and-covalent-bonds.md',
    exercise: 'fs-idp12625232(d)',
    kind: 'solution',
    erratum: 3145,
    reason: 'the source solution says magnesium\'s higher first ionization energy "mainly reflects the unpairing of the 2s electron"; the electron removed from magnesium is a 3s electron, and Section 6.5 of the book gives the reason for the order of such a pair — an s electron is harder to remove than a p electron of the same shell — and says that removing one electron of a pair removes the pair\'s repulsion, so the model answer gives the reason Section 6.5 gives',
  },
]);

/* ---- source side ---------------------------------------------------------- */

/** Text of a node with every subtree named in `excludedNames` left out. */
function textExcluding(node, excludedNames) {
  const parts = [];
  const visit = (candidate) => {
    if (typeof candidate === 'string') { parts.push(candidate); return; }
    if (excludedNames.includes(localName(candidate))) return;
    for (const child of candidate.children || []) visit(child);
  };
  visit(node);
  return parts.join(' ');
}

/** Text of a node with its enumerated option lists left out (a problem's
 * stem), or included (a solution that is itself a list). */
function proseOf(node, { withLists }) {
  const parts = [];
  const visit = (candidate) => {
    if (typeof candidate === 'string') { parts.push(candidate); return; }
    if (!withLists && localName(candidate) === 'list') return;
    for (const child of candidate.children || []) visit(child);
  };
  visit(node);
  return normalizeWhitespace(parts.join(' '));
}

/** Option and key text compared with every space removed: the source writes
 * `G<sub>1</sub>` (read as "G 1") where the page writes `G₁`, and `cis-trans`
 * where the page keeps the hyphen. Inline HTML on the page (`P<sub>O₂</sub>`
 * for the source's MathML "P O 2") is stripped first so a tag name never
 * leaks into the comparison. */
export const compact = (value) => normalizeText(String(value ?? '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, '');

/**
 * Which option a source `<solution>` names, as a 0-based index, or null when
 * the solution is prose. Three forms occur in the corpus: a bare letter
 * ("A"), a letter plus the option text ("C. The downstream cellular response
 * would be inhibited."), and the option text alone. A prose solution that
 * happens to start with the word "A" is not a letter: the letter form needs
 * either nothing after it or a restatement of the option it names.
 */
export function keyedOptionIndex(solution, options) {
  const several = keyedOptionIndices(solution);
  if (several) return several[0];
  const text = normalizeWhitespace(solution);
  const bare = text.match(/^([A-Ea-e])\s*[.:]?$/);
  if (bare) return bare[1].toUpperCase().charCodeAt(0) - 65;
  const byText = options.findIndex((option) => compact(option) === compact(text));
  if (byText !== -1) return byText;
  const lettered = text.match(/^([A-Ea-e])\s*[.:]\s+(.+)$/s);
  if (lettered) {
    const index = lettered[1].toUpperCase().charCodeAt(0) - 65;
    const option = options[index];
    if (option && tokenSimilarity(lettered[2], option) >= MATCH_FLOOR) return index;
  }
  return null;
}

/**
 * A solution that keys MORE than one option — "A and B.", "B, D", "A & C: …"
 * — as the 0-based indices it names, or null. Biology 2e prints a few of
 * these (m66597's parenchyma Visual Connection keys "A and B" against a
 * four-option list); a page must key exactly one option, so every such
 * exercise is a key-differs that needs an erratum and a DISCLOSED_DEVIATIONS
 * line. Without this the letter list read as prose and the gate never
 * compared the page's key at all.
 */
export function keyedOptionIndices(solution) {
  const text = normalizeWhitespace(solution);
  const several = text.match(/^([A-Ea-e])((?:\s*(?:,|and|&|\/)\s*[A-Ea-e])+)\s*(?:[.:]|$)/);
  if (!several) return null;
  const letters = [several[1], ...[...several[2].matchAll(/(?:,|and|&|\/)\s*([A-Ea-e])/g)].map((m) => m[1])];
  return letters.map((letter) => letter.toUpperCase().charCodeAt(0) - 65);
}

/** A glossary `<term>` and the spellings it licenses: "triacylglycerol (also,
 * triglyceride)" → both; "deoxyribonucleic acid (DNA)" → both. */
export function termAlternates(term) {
  const alternates = [];
  const base = term.replace(/\s*\(([^)]*)\)\s*/g, (_, inner) => {
    alternates.push(inner.replace(/^\s*also,?\s*/i, ''));
    return ' ';
  });
  alternates.unshift(base);
  return alternates.map((value) => normalizeWhitespace(value)).filter(Boolean);
}

export function readModule(xml) {
  const document = parseXml(xml);
  // Fill in the Blank exercises ride in their own `<section class="…">`
  // alongside Multiple Choice, Short Answer, and Critical Thinking — the
  // grouping is how the source tells the item TYPES apart, since a
  // `<problem>`/`<solution>` pair looks identical whichever type it is.
  const fillInTheBlankIds = new Set(
    descendants(document, (node) => localName(node) === 'section'
      && /fill-in-the-blank/.test(node.attributes.class || ''))
      .flatMap((section) => descendants(section, (node) => localName(node) === 'exercise'))
      .map((exercise) => exercise.attributes.id || '')
      .filter(Boolean),
  );
  const exercises = descendants(document, (node) => localName(node) === 'exercise').map((exercise) => {
    const problem = firstElement(exercise, 'problem');
    const solution = firstElement(exercise, 'solution');
    const list = problem ? descendants(problem, (node) => localName(node) === 'list')[0] : null;
    const options = list ? elementChildren(list, 'item').map((item) => normalizeWhitespace(textContent(item))) : [];
    const solutionText = solution ? proseOf(solution, { withLists: true }) : '';
    const problemText = problem ? proseOf(problem, { withLists: false }) : '';
    return {
      id: exercise.attributes.id || '',
      isFillInTheBlank: fillInTheBlankIds.has(exercise.attributes.id || ''),
      problem: problemText,
      // The numbers a fill-in judgment reads: the problem's, to tell a Try
      // It from the Example it shadows; the solution's, to confirm a key.
      problemValues: problem ? mathmlValues(problem) : [],
      problemShape: problem ? mathmlShape(problem) : [0, 0, 0, 0],
      solutionValues: solution ? mathmlValues(solution).concat(unitTotals(solutionText)) : [],
      // A problem that shows a figure may be answered from a figure the page
      // draws differently (its own graph, its own fraction diagram), so its
      // solution cannot confirm the page's key.
      figure: problem ? descendants(problem, (node) => ['media', 'image'].includes(localName(node))).length > 0 : false,
      options,
      solution: solutionText,
      keyed: options.length ? keyedOptionIndex(solutionText, options) : null,
      keyedAll: options.length ? keyedOptionIndices(solutionText) : null,
    };
  }).filter((exercise) => exercise.problem);
  const glossary = descendants(document, (node) => localName(node) === 'definition')
    .map((definition) => normalizeWhitespace(textContent(firstElement(definition, 'term') || '')))
    .filter(Boolean)
    .flatMap(termAlternates)
    .map(compact);
  const terms = descendants(document, (node) => localName(node) === 'term')
    .map((term) => compact(textContent(term)))
    .filter(Boolean);
  const tables = descendants(document, (node) => localName(node) === 'table').map((table) => {
    const tgroup = firstElement(table, 'tgroup');
    if (!tgroup) return null;
    const rowsOf = (parent) => (parent
      ? elementChildren(parent, 'row').map((row) => elementChildren(row, 'entry')
        .map((entry) => normalizeWhitespace(textContent(entry))))
      : []);
    const headRows = rowsOf(firstElement(tgroup, 'thead'));
    // The table's caption rides as a spanning single-entry thead row; the
    // column headers are the LAST thead row (42 of the corpus's 64 tables
    // carry summary="", so @summary is never the title).
    const title = (headRows.find((row) => row.length === 1) || [''])[0];
    const header = headRows.length ? headRows[headRows.length - 1] : [];
    return { id: table.attributes.id || '', title, header, rows: rowsOf(firstElement(tgroup, 'tbody')) };
  }).filter((table) => table && table.rows.length);
  const summarySections = descendants(document, (node) => localName(node) === 'section'
    && (node.attributes.class || '') === 'summary');
  // The body's Check Your Understanding questions. A page item converted from
  // one of these has no source exercise, however much end-matter vocabulary it
  // shares: m58848 (§12.1) asks "what does a blue colony mean and why is it
  // blue?" in a body box and "what do blue colonies represent?" in its
  // Multiple Choice, and the body item was reported as a false key-differs
  // against the exercise.
  const checkQuestions = new Set(
    descendants(document, (node) => localName(node) === 'note'
      && /check-your-understanding/.test(node.attributes.class || ''))
      .flatMap((note) => descendants(note, (node) => localName(node) === 'item'))
      .map((item) => compact(textContent(item)))
      .filter(Boolean),
  );
  return {
    exercises,
    checkQuestions,
    glossary: new Set(glossary),
    terms: new Set(terms),
    tables,
    summary: summarySections.length
      ? ` ${normalizeText(summarySections.map((node) => textContent(node)).join(' '))} `
      : '',
    text: ` ${normalizeText(textContent(document))} `,
    // The module's prose with every exercise's apparatus removed — not just
    // its own `<solution>`, but every `<problem>` stem too, since a stem can
    // print the very word a DIFFERENT exercise keys (a Multiple Choice
    // distractor, a lettered option). Used only by the body-keys measurement
    // (tools/verify/measure-body-keys.mjs): `text` above is what `judgeTextin`
    // grades against today, and deliberately still includes solutions.
    // `bodyProse` keeps sentence punctuation (for reporting the closest
    // sentence); `bodyText` is its normalizeText form, padded for a
    // word-bounded search.
    bodyProse: normalizeWhitespace(textExcluding(document, ['problem', 'solution'])),
    bodyText: ` ${normalizeText(textExcluding(document, ['problem', 'solution']))} `,
  };
}

/* ---- page side ------------------------------------------------------------ */

export function pageItems(markdown) {
  const items = [];
  // The source image each item is bound to ("the figure above"), by which a
  // lettered part that is only an image is told from its siblings.
  const figures = mediaBindings(markdown);
  const figureOf = (kind, sc) => figures.get(`${kind}:${sc.index}`) || '';
  // An item inside a `followup` is shown only once the item before the
  // wrapper is answered (layouts/shortcodes/followup.html); `conditionalUnwrapped`
  // asks for exactly that of some items.
  const followups = [...shortcodes(markdown, 'followup')];
  const held = (sc) => (followups.some((wrapper) => sc.index > wrapper.index && sc.index < wrapper.end) ? { followup: true } : {});
  for (const sc of shortcodes(markdown, 'multiplechoice')) {
    items.push({
      type: 'multiplechoice',
      ...held(sc),
      line: lineOf(markdown, sc.index),
      figure: figureOf('multiplechoice', sc),
      question: sc.params.question || '',
      answer: sc.params.answer || '',
      options: sc.inner.split('\n').map((line) => line.trim()).filter(Boolean),
    });
  }
  for (const sc of shortcodes(markdown, 'fillin')) {
    items.push({
      type: 'fillin',
      ...held(sc),
      line: lineOf(markdown, sc.index),
      figure: figureOf('fillin', sc),
      question: sc.params.question || '',
      answer: sc.params.answer || '',
      form: sc.params.answerForm || '',
    });
  }
  for (const sc of shortcodes(markdown, 'textin')) {
    items.push({
      type: 'textin',
      ...held(sc),
      line: lineOf(markdown, sc.index),
      figure: figureOf('textin', sc),
      question: sc.params.question || '',
      answer: sc.params.answer || '',
      accept: sc.params.accept || '',
      form: sc.params.answerForm || '',
    });
  }
  for (const sc of shortcodes(markdown, 'sortbins')) {
    let config;
    // The lint names an unparseable config; here it is simply not a page item.
    try { config = parseSortbinsConfig(sc.inner.trim()); } catch { continue; }
    items.push({
      type: 'sortbins',
      line: lineOf(markdown, sc.index),
      question: sc.params.question || '',
      bins: config.bins,
      items: config.items,
    });
  }
  for (const sc of shortcodes(markdown, 'selfcheck')) {
    items.push({
      type: 'selfcheck',
      ...held(sc),
      line: lineOf(markdown, sc.index),
      figure: figureOf('selfcheck', sc),
      question: sc.params.question || '',
      // The optional ===CHECKS=== tail holds rubric checkpoints — clauses of
      // the model answer restated for self-marking. Judging reads the model
      // part only: the checkpoints repeat its words, and counting them twice
      // would distort phraseCoverage against the source solution.
      model: normalizeWhitespace(sc.inner.split(/^[ \t]*===CHECKS===[ \t]*$/m)[0]),
      // The images the model answer shows, by file stem: a drawing the
      // source answers with is confirmed by the page showing that image.
      figures: [...sc.inner.matchAll(/\{\{<\s*mediafigure\b[^>]*?\bsrc="([^"]*)"/g)].map((match) => match[1].split('/').pop()),
    });
  }
  return items;
}

const lineOf = (text, index) => text.slice(0, index).split('\n').length;

/** A page stem that is one of the module's Check Your Understanding questions
 * verbatim is a converted body question: it has no source exercise, whatever
 * end-matter stem it happens to resemble. */
const isCheckQuestion = (question, source) => Boolean(source.checkQuestions && source.checkQuestions.has(compact(question)));

export function bestExercise(question, exercises, options = []) {
  let best = null;
  for (const exercise of exercises) {
    const score = tokenSimilarity(question, exercise.problem);
    // Two source exercises can share a stem verbatim — m66559 (§24.2) asks
    // "Which of the following statements is true?" in both of its Visual
    // Connections. The stem alone cannot tell them apart and the first one
    // read used to win, so a page item's own option list breaks the tie.
    const tie = options.length && exercise.options.length
      ? tokenSimilarity(options.join(' '), exercise.options.join(' '))
      : 0;
    if (!best || score > best.score || (score === best.score && tie > best.tie)) {
      best = { score, tie, exercise };
    }
  }
  return best && best.score >= MATCH_FLOOR ? best.exercise : null;
}

/* ---- judgments ------------------------------------------------------------ */

/**
 * One multiplechoice against its source exercise. Returns
 *   { status: 'confirmed' }
 *   { status: 'unmatched' }                   no source exercise reads like it
 *                                             (an author-written item, or a
 *                                             math page's converted fill-in)
 *   { status: 'unkeyed' }                     the source prints NO solution at
 *                                             all — an unkeyed Short Answer,
 *                                             Critical Thinking, or lettered
 *                                             Critical Thinking question the
 *                                             page grades from the module's
 *                                             own sentence, table, or figure
 *                                             (docs/subjects/life-sciences.md, "Unkeyed
 *                                             source questions"); the ledger
 *                                             note and the blind solve are
 *                                             its readings, not this one
 *   { status: 'prose-key' }                   the source solution names no option
 *   { status: 'key-differs', detail }         page keys another option
 *   { status: 'options-differ', detail }      an option's wording differs
 */
export function judgeMultipleChoice(item, source) {
  if (isCheckQuestion(item.question, source)) return { status: 'unmatched' };
  const exercise = bestExercise(item.question, source.exercises, item.options || []);
  if (!exercise) return { status: 'unmatched' };
  if (!normalizeWhitespace(exercise.solution)) return { status: 'unkeyed', exercise };
  if (exercise.keyed === null) return { status: 'prose-key', exercise };
  if (exercise.keyedAll && exercise.keyedAll.length > 1) {
    const letters = exercise.keyedAll.map((index) => String.fromCharCode(65 + index)).join(' and ');
    return {
      status: 'key-differs',
      exercise,
      detail: `source ${exercise.id} keys ${letters} (more than one option); page keys ${JSON.stringify(item.answer)}`,
    };
  }
  const sourceAnswer = exercise.options[exercise.keyed] || '';
  if (compact(sourceAnswer) !== compact(item.answer)) {
    return {
      status: 'key-differs',
      exercise,
      detail: `source ${exercise.id} keys ${String.fromCharCode(65 + exercise.keyed)} ${JSON.stringify(sourceAnswer)}; page keys ${JSON.stringify(item.answer)}`,
    };
  }
  // Order is free (a page may shuffle distractors); wording is not.
  const sorted = (options) => options.map(compact).sort();
  const pageOptions = sorted(item.options);
  const sourceOptions = sorted(exercise.options);
  const edited = pageOptions.length !== sourceOptions.length
    || pageOptions.some((option, index) => option !== sourceOptions[index]);
  if (edited) {
    return {
      status: 'options-differ',
      exercise,
      detail: `source ${exercise.id} options: ${exercise.options.join(' | ')}\n    page options:   ${item.options.join(' | ')}`,
    };
  }
  return { status: 'confirmed', exercise };
}

/**
 * Where a textin answer comes from: 'glossary' (a term or one of its
 * parenthetical spellings), 'glossary-completed' (the prompt's words around
 * the blank complete the term), 'term' (a bolded `<term>` in the body),
 * 'summary' (a phrase of the module's own summary section), 'body' (a phrase the module prints), or 'unsourced'.
 */
export function judgeTextin(item, source) {
  const answer = compact(item.answer);
  if (!answer) return { status: 'unsourced', detail: 'empty answer' };
  if (source.glossary.has(answer)) return { status: 'glossary' };
  const filled = compact(item.question.replace(/_{3,}/, ` ${item.answer} `));
  for (const term of source.glossary) {
    if (term.length > answer.length && term.includes(answer) && filled.includes(term)) {
      return { status: 'glossary-completed' };
    }
  }
  if (source.terms.has(answer)) return { status: 'term' };
  // The module summary is source-keyed prose one register above the
  // glossary: a summary-sentence cloze tests the concept, not the word.
  // Reported as its own provenance so coverage of summary-derived items is
  // visible; checked before 'body' only for the label — the summary is part
  // of the module text either way. (A summary-derived MULTIPLECHOICE stays
  // 'unmatched' by design: an author-written item resting on the ledger
  // reading and the blind solve.)
  if (source.summary.includes(` ${normalizeText(item.answer)} `)) return { status: 'summary' };
  if (source.text.includes(` ${normalizeText(item.answer)} `)) return { status: 'body' };
  // The grader folds a regular plural both ways, so a key the module prints
  // only in its other number is still printed ("clone" against "clones").
  // The fold also bridges markup that splits a plural: textContent joins
  // child nodes with a space, so "<term>plasmid</term>s" reads "plasmid s",
  // and the key "plasmids" is found as its folded "plasmid".
  for (const form of foldedForms(normalizeText(item.answer))) {
    if (source.text.includes(` ${form} `)) return { status: 'body' };
  }
  return { status: 'unsourced', detail: `${JSON.stringify(item.answer)} is not a glossary term, a bolded term, or a phrase the module prints` };
}

/**
 * Whether a textin's key (or one of its `accept` alternates) is recoverable
 * from a module's BODY prose alone (`source.bodyProse`/`bodyText` — every
 * exercise's `<problem>` and `<solution>` removed, so a Fill in the Blank's
 * own solution cannot vouch for its own key). Used for the Fill in the Blank
 * body-print gate (`unprintableFillInTheBlank`) and by
 * `tools/verify/measure-body-keys.mjs`'s corpus measurement.
 *
 * A form is "printed" when, after the runtime grader's own two-way plural
 * fold (`foldedForms`, assets/js/lib/text/check-text.mjs — a trailing
 * "s"/"es" added, or stripped from a regular-plural-shaped last word):
 *   - the compact key or an accept alternate is a substring of the compact
 *     body ("LD50" against a body that prints "LD<sub>50</sub>", which text
 *     extraction renders "LD 50" — compact strips the space either way);
 *   - OR every word of a multi-word key appears somewhere in the body,
 *     independently and in any order ("chlorophylls and carotenoids" against
 *     a body that lists the two pigments separately, in the other order,
 *     with unrelated text between them; "Protista and Monera" against a body
 *     that names both kingdoms in a longer list);
 *   - OR some body word starts with the key's own first characters, its last
 *     two dropped but never fewer than six kept ("bacilli" against a body
 *     that only ever prints "bacillus"; "epidemiology" against
 *     "epidemiological"; "aspergillomas" against "aspergilloma") — a
 *     same-root inflection a body-reading learner plainly recovers, checked
 *     only for a single-word key since a body "token" is one word.
 */
export function keyPrintedInBody(answer, accept, source) {
  const bodyCompact = compact(source.bodyProse ?? '');
  const candidates = [answer, ...String(accept || '').split('|')].filter(Boolean);
  for (const candidate of candidates) {
    const normalized = normalizeText(candidate);
    if (!normalized) continue;
    for (const form of [normalized, ...foldedForms(normalized)]) {
      if (bodyCompact.includes(compact(form))) return true;
    }
  }
  const words = normalizeText(answer).split(' ').filter(Boolean);
  if (words.length > 1 && words.every((word) => bodyCompact.includes(compact(word)))) return true;
  if (words.length === 1) {
    const [word] = words;
    const prefixLength = Math.min(word.length, Math.max(6, word.length - 2));
    const prefix = word.slice(0, prefixLength);
    const bodyWords = normalizeText(source.bodyProse ?? '').split(' ').filter(Boolean);
    if (prefix && bodyWords.some((token) => token.startsWith(prefix))) return true;
  }
  return false;
}

/**
 * A life-sciences `textin` matched (by the same stem-similarity `bestExercise`
 * every other judgment here uses) to one of its module's Fill in the Blank
 * exercises, whose key `keyPrintedInBody` cannot recover from the module's
 * body prose — see docs/subjects/life-sciences.md, "Text recall" ("A
 * `textin` key is printed in the module's BODY").
 * Returns the exercise it matched (to name in a failure), or null when the
 * item matches no Fill in the Blank exercise at all (an ordinary
 * `judgeTextin` case) or its key IS recoverable from the body.
 */
export function unprintableFillInTheBlank(item, source) {
  const fillInTheBlankExercises = source.exercises.filter((exercise) => exercise.isFillInTheBlank);
  if (!fillInTheBlankExercises.length) return null;
  const exercise = bestExercise(item.question, fillInTheBlankExercises);
  if (!exercise) return null;
  return keyPrintedInBody(item.answer, item.accept, source) ? null : exercise;
}

/**
 * A selfcheck model answer against the source solution its question matches:
 * 'verbatim', 'reworded' (coverage ≥ MODEL_COVERAGE_FLOOR), 'diverges',
 * 'unmatched' when no source exercise reads like the question, or 'unkeyed'
 * when the matched exercise carries no solution at all.
 *
 * 'unkeyed' is not a weaker 'unmatched': the QUESTION is transcribed from the
 * source and the match is real; what is absent is the answer. Biology keyed
 * every exercise, so this case could not arise; Microbiology keys its
 * multiple-choice, fill-in, true/false, and matching sets and prints no
 * answer for 224 of its 226 Short Answer and all 159 of its Critical Thinking
 * questions, whose model answers this project writes from the module's own
 * sentences under a policy the checker and the blind solve enforce instead.
 * Measuring such a model answer against an empty solution scores 0 and would
 * fail every one of them. (The book's Check Your Understanding questions are
 * not exercises at all — bulleted items inside a <note> — so readModule never
 * sees them and their self-checks report 'unmatched'.)
 */
/** A solution that says answers vary and then goes on to print a sample. */
const VARYING_SAMPLE_RE = /^(?:the )?(?:answers?|responses?) (?:may|will) vary\.\s+\S/i;
const OPEN_ANSWER_RE = /^(?:the )?(?:answers?|responses?) (?:is open|are open|will vary)(?: and will vary)?\.?$/i;

/** A solution that says, anywhere in it, that its answer is one of several a learner could give. */
const VARYING_EXERCISE_RE = /\b(?:answers?|responses?) (?:may|will) vary\b|\bother answers\b[^.]*\bpossible\b/i;

/** A question that asks for one of many correct answers by its own words: "Write a set of quantum numbers for …". */
const ASKS_FOR_A_SET_RE = /\bwrite a set of\b/i;

/** Whether a model answer carries a part's sample whole — its segment less any sentence that only says answers vary. */
function sampleCarried(segment, model) {
  const sample = segment.split(/(?<=[.!?])\s+/).filter((sentence) => !VARYING_EXERCISE_RE.test(sentence)).join(' ').trim();
  return Boolean(sample) && phraseCoverage(sample, model) >= 0.95;
}

export function judgeSelfcheck(item, source) {
  if (isCheckQuestion(item.question, source)) return { status: 'unmatched' };
  const exercise = bestExercise(item.question, source.exercises);
  if (!exercise) return { status: 'unmatched' };
  if (!normalizeWhitespace(exercise.solution)) return { status: 'unkeyed', exercise };
  // "Answer is open and will vary." keys nothing: the page's model answer
  // must add checkable criteria (Biology 21.2), which no overlap with the
  // source's one sentence can measure. A solution that goes on to give a
  // sample answer ("Responses will vary. A possible answer is …") is still
  // compared.
  if (OPEN_ANSWER_RE.test(normalizeWhitespace(exercise.solution))) return { status: 'unkeyed', exercise };
  // A short source solution — an Interactive Link key such as "Cortisol." —
  // cannot carry the 2–6 rubric checkpoints a life-sciences selfcheck needs,
  // so the page's model answer wraps it in one sentence that restates the
  // question. Measuring that sentence by how many of ITS words come from the
  // solution fails every such item; the whole key being present is the test.
  const coverage = phraseCoverage(item.model, exercise.solution);
  if (coverage >= 0.95) return { status: 'verbatim', exercise, coverage };
  if (shortSolutionWords(exercise.solution) <= SHORT_SOLUTION_WORDS
    && phraseCoverage(exercise.solution, item.model) >= 0.95) {
    return { status: 'reworded', exercise, coverage, detail: 'short source solution carried whole in the model answer' };
  }
  // "Answers will vary. Sample answer: Gatorade contains ..." (Chemistry 1.2):
  // the sample is one answer among many, so the page's model answer opens
  // with a sentence saying what any good answer contains and the rubric is
  // that sentence (docs/subjects/chemistry.md, Exercises). The opening
  // sentence is the page's by rule; the test is that the source's sample is
  // carried whole beside it.
  if (VARYING_SAMPLE_RE.test(normalizeWhitespace(exercise.solution))
    && phraseCoverage(exercise.solution, item.model) >= 0.95) {
    return { status: 'reworded', exercise, coverage, detail: 'varying-answer source solution carried whole in the model answer' };
  }
  if (coverage >= MODEL_COVERAGE_FLOOR) return { status: 'reworded', exercise, coverage };
  // A bare value or bare symbols — "m = 18.58 g, V = 5.7 mL" (Chemistry 1.4)
  // — has no words for a rubric's quantity clause, so the model answer names
  // the quantity in the QUESTION's words: "The mass of the unknown material
  // is m = 18.58 g, and the volume is V = 5.7 mL." The solution is carried
  // whole, and what was added is the question's.
  if (phraseCoverage(exercise.solution, item.model) >= 0.95
    && phraseCoverage(item.model, `${exercise.solution} ${item.question}`) >= MODEL_COVERAGE_FLOOR) {
    return { status: 'reworded', exercise, coverage, detail: 'source solution carried whole, framed in the question\'s words' };
  }
  return {
    status: 'diverges',
    exercise,
    coverage,
    detail: `only ${Math.round(coverage * 100)}% of the model answer's words come from source solution ${exercise.id}`,
  };
}

/**
 * A sortbins exercise against the module's tables. The bins must each name a
 * distinct DATA column of one table's header (the first column is the row
 * label); every item label is then measured against each column's rows (row
 * label + that column's cell), and an item that reads strictly better under
 * a different column than the one it is keyed to is a mis-binned item.
 * Returns 'confirmed' | 'unmatched' | 'assignment-differs'. Conservative on
 * purpose: the mapping is also blind-solved (solve-check), so this reading
 * only fails an assignment the table itself contradicts.
 */
export function judgeSortbins(item, source) {
  // First pass: bins are DATA COLUMNS (m66391's replication table —
  // Property | Prokaryotes | Eukaryotes). Second pass: the TRANSPOSED
  // layout, where the categories are rows (10.5's cell-division table —
  // organisms down the side, aspects across the top); bins then match
  // distinct row labels and an item is measured against its bin-row's
  // cells. Both passes give every bin a distinct anchor, or the exercise is
  // unmatched.
  let match = null;
  for (const table of source.tables) {
    if (table.header.length < 2 || !table.rows.length) continue;
    const columns = item.bins.map((bin) => {
      let top = null;
      // Column 0 is usually the row-label column, but a table with no label
      // column (tab-ch12-02-01) keys its first bin there, so it is scanned
      // too; the distinct-anchor rule below still rejects a label column
      // that happens to resemble a bin.
      for (let column = 0; column < table.header.length; column += 1) {
        const score = tokenSimilarity(bin, table.header[column]);
        if (!top || score > top.score) top = { score, column };
      }
      return top && top.score >= MATCH_FLOOR ? top.column : -1;
    });
    if (columns.includes(-1) || new Set(columns).size !== columns.length) continue;
    match = { table, columns };
    break;
  }
  if (!match) {
    for (const table of source.tables) {
      if (!table.rows.length) continue;
      const rows = item.bins.map((bin) => {
        let top = null;
        for (let r = 0; r < table.rows.length; r += 1) {
          const score = tokenSimilarity(bin, table.rows[r][0] || '');
          if (!top || score > top.score) top = { score, row: r };
        }
        return top && top.score >= MATCH_FLOOR ? top.row : -1;
      });
      if (rows.includes(-1) || new Set(rows).size !== rows.length) continue;
      match = { table, rows };
      break;
    }
  }
  if (!match) return { status: 'unmatched' };
  const { table } = match;
  const binName = (bin) => (match.columns
    ? table.header[match.columns[bin]]
    : (table.rows[match.rows[bin]] || [])[0] || '');
  const coverageFor = (entry, bin) => {
    if (match.columns) {
      return Math.max(0, ...table.rows.map(
        (row) => phraseCoverage(entry.label, match.columns[bin] === 0
          ? row[0] || ''
          : `${row[0] || ''} ${row[match.columns[bin]] || ''}`),
      ));
    }
    const row = table.rows[match.rows[bin]] || [];
    const scores = [];
    for (let c = 1; c < row.length; c += 1) {
      scores.push(phraseCoverage(entry.label, `${table.header[c] || ''} ${row[c] || ''}`));
    }
    return Math.max(0, ...scores);
  };
  const mismatches = [];
  let sourced = 0;
  for (const entry of item.items) {
    const keyed = coverageFor(entry, entry.bin);
    if (keyed >= MODEL_COVERAGE_FLOOR) sourced += 1;
    for (let bin = 0; bin < item.bins.length; bin += 1) {
      if (bin === entry.bin) continue;
      const rival = coverageFor(entry, bin);
      if (rival >= MODEL_COVERAGE_FLOOR && rival > keyed) {
        mismatches.push(`item ${JSON.stringify(entry.label)} reads as ${JSON.stringify(binName(bin))} in table ${table.id}, not the page's ${JSON.stringify(item.bins[entry.bin])}`);
      }
    }
  }
  if (mismatches.length) return { status: 'assignment-differs', table, detail: mismatches.join('\n    ') };
  if (!sourced) return { status: 'unmatched' };
  return { status: 'confirmed', table };
}

/* ---- math fill-ins -------------------------------------------------------- */

const ONES = Object.freeze({
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19,
});
const TENS = Object.freeze({ twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 });
const MULTIPLES = Object.freeze({ twice: 2, double: 2, doubled: 2, triple: 3, tripled: 3, thrice: 3, half: 0.5, dozen: 12 });

/** The values the number words of a printed solution name ("thirty-two
 * 49-cent stamps", "five drinks", "twenty-six"). An ordinal or a fraction word
 * ("one-fourth", "ten-thousands") names no value. Signs are not read: the
 * callers compare magnitudes where these matter. */
export function numberWords(text) {
  const values = [];
  for (const word of String(text).toLowerCase().split(/[^a-z-]+/)) {
    if (!word) continue;
    const [head, tail, more] = word.split('-');
    if (more !== undefined) continue;
    if (head in TENS && (tail === undefined || tail in ONES)) values.push(TENS[head] + (tail ? ONES[tail] : 0));
    else if (head in ONES && tail === undefined) values.push(ONES[head]);
    else if (head in MULTIPLES && tail === undefined) values.push(MULTIPLES[head]);
  }
  return values;
}

/** Every number in a run of text. A thousands-grouped figure (207,500) is
 * one number; a bare comma between short runs (8,22) separates two; a
 * Unicode minus is a minus. */
const NUMBER_RE = /(?<![\d.])-?(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?(?!\d)|(?<![\d.])-?\.\d+/g;
export function textNumbers(text) {
  return [...String(text).replace(/[\u2212\u2013]/g, '-').replace(/\$/g, '').matchAll(NUMBER_RE)]
    .map((m) => Number(m[0].replace(/,/g, '')))
    .filter(Number.isFinite);
}

/** A mixed-unit measurement's total in the smaller unit: "4 lbs. 8 oz." is
 * 72 ounces, "9 ft 2 in" is 110 inches, "11 gal. 2 qt." is 46 quarts — the
 * form a page keys so the value is gradable as one number. The CNXML may set
 * the abbreviation's period apart ("8 lbs . 15 oz", Elementary Algebra 1.10). */
export function unitTotals(text) {
  const totals = [];
  const plain = String(text).replace(/[\u2212\u2013]/g, '-');
  for (const m of plain.matchAll(/(\d+(?:\.\d+)?)\s*(?:lbs?|pounds?)\s*\.?\s*(?:,|and)?\s*(\d+(?:\.\d+)?)\s*(?:oz|ounces?)\b/gi)) totals.push(16 * Number(m[1]) + Number(m[2]));
  for (const m of plain.matchAll(/(\d+(?:\.\d+)?)\s*(?:ft|feet|foot)\s*\.?\s*(?:,|and)?\s*(\d+(?:\.\d+)?)\s*(?:in|inches|inch)\b/gi)) totals.push(12 * Number(m[1]) + Number(m[2]));
  for (const m of plain.matchAll(/(\d+(?:\.\d+)?)\s*(?:yd|yards?)\.?\s*(?:,|and)?\s*(\d+(?:\.\d+)?)\s*(?:ft|feet|foot)\b/gi)) totals.push(3 * Number(m[1]) + Number(m[2]));
  for (const m of plain.matchAll(/(\d+(?:\.\d+)?)\s*(?:gal|gallons?)\s*\.?\s*(?:,|and)?\s*(\d+(?:\.\d+)?)\s*(?:qt|quarts?)\b/gi)) totals.push(4 * Number(m[1]) + Number(m[2]));
  for (const m of plain.matchAll(/(\d+(?:\.\d+)?)\s*(?:hours?|hr|h)\.?\s*(?:,|and)?\s*(\d+(?:\.\d+)?)\s*(?:minutes?|min)\b/gi)) totals.push(60 * Number(m[1]) + Number(m[2]));
  return totals;
}

/** Numbers and number words in the order the text prints them — order is
 * what tells a Try It from the Example it shadows. */
export function proseValues(text) {
  const values = [];
  const plain = String(text).replace(/[\u2212\u2013]/g, '-').replace(/\$/g, '');
  const token = new RegExp(`${NUMBER_RE.source}|[a-zA-Z]+(?:-[a-zA-Z]+)*`, 'g');
  for (const m of plain.matchAll(token)) {
    if (/\d/.test(m[0])) values.push(...textNumbers(m[0]));
    else values.push(...numberWords(m[0]));
  }
  return values;
}

const isElement = (node, name) => typeof node !== 'string' && localName(node) === name;
const fracValue = (mfrac) => {
  const [num, den] = elementChildren(mfrac).map((part) => mathmlValues(part));
  return num && den && num.length === 1 && den.length === 1 && den[0] !== 0 ? num[0] / den[0] : null;
};

/**
 * The numeric values a CNXML subtree prints, MathML read structurally: an
 * `<m:mfrac>` is its quotient (its numerator and denominator are listed too,
 * so a twin guard on "3 125" still sees the digits), a `<m:mn>` after a minus
 * `<m:mo>` is negative, and an `<m:mn>` followed by an `<m:mfrac>` is a mixed
 * number. Prose numbers come through `textNumbers`.
 */
export function mathmlValues(node) {
  const values = [];
  const visit = (candidate) => {
    if (typeof candidate === 'string') { values.push(...proseValues(candidate)); return; }
    const kids = (candidate.children || []).filter((kid) => typeof kid !== 'string' || kid.trim());
    for (let i = 0; i < kids.length; i += 1) {
      const kid = kids[i];
      if (typeof kid === 'string') { values.push(...proseValues(kid)); continue; }
      const prev = kids[i - 1];
      const negated = prev !== undefined && isElement(prev, 'mo') && /^[\u2212\u2013-]$/.test(textContent(prev).trim());
      if (isElement(kid, 'mfrac')) {
        const quotient = fracValue(kid);
        if (quotient !== null) {
          values.push(negated ? -quotient : quotient);
          if (prev !== undefined && isElement(prev, 'mn')) {
            const whole = textNumbers(textContent(prev));
            if (whole.length === 1) values.push(whole[0] + quotient);
          }
        }
        visit(kid);
        continue;
      }
      if (isElement(kid, 'mn')) {
        // "$3,333.33" is marked up as mn 3 · mo , · mn 333.33 — one number;
        // "7, −21, 63, −189, 567" is marked up the same way and is five.
        // Both readings are kept: a value is confirmed by being printed,
        // and a spurious grouped reading never hides a printed one.
        // A group that starts with 0 ("84,000") is only ever a thousands
        // group, so that reading is the only one kept and the parts are not.
        const text = textContent(kid).trim();
        let own = textNumbers(text);
        if (/^\d{1,3}$/.test(text)) {
          let grouped = text;
          for (let j = i; kids[j + 1] !== undefined && isElement(kids[j + 1], 'mo') && textContent(kids[j + 1]).trim() === ','
            && kids[j + 2] !== undefined && isElement(kids[j + 2], 'mn') && /^\d{3}(?:\.\d+)?$/.test(textContent(kids[j + 2]).trim()); j += 2) {
            const group = textContent(kids[j + 2]).trim();
            grouped = `${grouped},${group}`;
            if (group.startsWith('0')) { own = textNumbers(grouped); i = j + 2; grouped = ''; if (true) break; }
            values.push(...textNumbers(grouped).map((value) => (negated ? -value : value)));
            if (grouped.includes('.')) break;
          }
        }
        values.push(...(negated ? own.map((value) => -value) : own));
        continue;
      }
      visit(kid);
    }
  };
  visit(node);
  return values;
}

/** The shape of the math in a question — how many powers, fractions, roots,
 * and factorials it writes — so that $a_n = 3^n + 4$ is told from
 * $a_n = 3n - 4$, which prints the same numbers in the same order. */
export function latexShape(latex) {
  const text = String(latex).replace(/\^\\circ/g, '');
  return [
    (text.match(/\^/g) || []).length,
    (text.match(/\\[td]?frac\b/g) || []).length,
    (text.match(/\\sqrt\b/g) || []).length,
    (text.match(/!/g) || []).length,
  ];
}
export function mathmlShape(node) {
  const count = (name) => descendants(node, (candidate) => localName(candidate) === name).length;
  return [count('msup') + count('msubsup'), count('mfrac'), count('msqrt') + count('mroot'), (textContent(node).match(/!/g) || []).length];
}

/** The numbers a page question prints, LaTeX and prose alike: a `\frac{a}{b}`
 * contributes a, b, and a/b; number words count; commands and braces do not. */
export function latexNumbers(latex) {
  // A KaTeX digit group (`1{,}000`) is one number; stripping its braces read
  // it as 1 and 000, so a grouped stem lost its source match (Precalculus 4.6,
  // October 4, 2026).
  const withFractions = String(latex).replace(/(\d)\{,\}(?=\d{3}(?!\d))/g, '$1,').replace(
    /\\[td]?frac\{(-?[\d.]+)\}\{(-?[\d.]+)\}/g,
    (m, a, b) => ` ${a} ${b} ${Number(b) ? Number(a) / Number(b) : ''} `,
  );
  const plain = withFractions.replace(/\\[a-zA-Z]+/g, ' ').replace(/[{}^_$]/g, ' ');
  return proseValues(plain);
}

/**
 * The values a fill-in key holds, or null when the key is symbolic (a letter
 * outside a fraction, an interval, a radical). A list or tuple key is its
 * members; a mixed number and a signed fraction are their values.
 */
export function answerValues(answer) {
  let text = String(answer)
    .replace(/\\[,;!]|\\left|\\right|\\%|\\\$|\^\\circ|\u00b0/g, ' ')
    .replace(/\u2212/g, '-');
  text = text.replace(
    /(?<![\d.])(-?)(\d+)\s*\\[td]?frac\{(\d+)\}\{(\d+)\}/g,
    (m, sign, whole, a, b) => ` ${sign}${Number(whole) + Number(a) / Number(b)} `,
  );
  text = text.replace(
    /(-?)\\[td]?frac\{(-?[\d.]+)\}\{(-?[\d.]+)\}/g,
    (m, sign, a, b) => ` ${sign}${Number(a) / Number(b)} `,
  );
  if (/[a-zA-Z\\]/.test(text)) return null;
  const parts = text.split(/[,;()[\]\s]+/).filter(Boolean);
  const values = parts.map((part) => Number(part.replace(/^\+/, '')));
  if (!values.length || values.some((value) => !Number.isFinite(value))) return null;
  return values;
}

const decimalsOf = (value) => {
  const text = String(value);
  const dot = text.indexOf('.');
  return dot === -1 ? 0 : text.length - dot - 1;
};

/** Two printed values agree when they are equal, or when the one printed to
 * fewer decimal places is the other rounded to that many: a page that keys
 * $\frac{165}{74}$ hours agrees with a source that prints 2.2, and a page
 * that keys 5.4 does NOT agree with a source that prints 5.5. */
export function valuesAgree(pageValue, sourceValue) {
  if (Math.abs(pageValue - sourceValue) < 1e-9) return true;
  const places = Math.min(decimalsOf(pageValue), decimalsOf(sourceValue));
  return Math.abs(pageValue - sourceValue) <= 0.5 * 10 ** -places + 1e-9;
}

/** The prose of a page question with its inline math lifted out, for the
 * same token comparison the other judgments use against a source stem. */
const questionProse = (question) => normalizeText(String(question).replace(/\$[^$]*\$/g, ' ').replace(/\\\$/g, '$'));

/**
 * One fillin against its source exercise. Returns
 *   { status: 'confirmed' }
 *   { status: 'unmatched' }              no source exercise reads like it with
 *                                        the same numbers in its stem
 *   { status: 'figure', exercise }       the source problem shows a figure the
 *                                        page may draw differently — not judged
 *   { status: 'unkeyed', exercise }      the source solution prints no value
 *                                        beyond the problem's own
 *   { status: 'symbolic', exercise }     the key is not a number or a list of
 *                                        numbers — not judged here
 *   { status: 'key-differs', detail }    a keyed value the solution does not print
 */
export function judgeFillin(item, source) {
  const prose = questionProse(item.question);
  const wanted = latexNumbers(item.question).map(Math.abs);
  // The page may append an answer instruction that restates a number
  // ("Enter the 49-cent count, then the 35-cent count."); the source's
  // numbers must equal the page's either with or without such sentences.
  const wantedWithoutInstructions = latexNumbers(
    String(item.question).replace(/(?:^|(?<=[.?!]\s))(?:Enter|Give|Express|Write|Report|Type|Answer|List|State)\b[^.?!]*[.?!]?/g, ' '),
  ).map(Math.abs);
  const shape = latexShape(item.question);
  // A page question that reads a figure of its own ("the map above", "the
  // graph shown") is answered from what the page draws, which the source
  // solution cannot vouch for.
  if (/\b(?:figure|graph|table|map|diagram|chart|picture|data|measurements?|number line|plot)\b[^.]{0,30}\b(?:above|below|shown)\b|\b(?:shown|pictured)\b|\b(?:in|from|on|using) the (?:figure|graph|table|diagram|chart|map|plot)\b/i.test(item.question)) return { status: 'figure' };
  let best = null;
  for (const exercise of source.exercises) {
    const score = tokenSimilarity(prose, exercise.problem);
    if (score < MATCH_FLOOR) continue;
    // The numbers must agree in ORDER: a Try It shares every word of its
    // Example but the values, a page variant of "$a_n = 4n - 3$" reads
    // "$a_n = 3n - 4$" with the same numbers swapped, and a page item with no
    // number in its stem would otherwise match any exercise that reads like it.
    const have = exercise.problemValues.map(Math.abs);
    const sameList = (list) => list.length === have.length && list.every((n, i) => Math.abs(n - have[i]) < 1e-9);
    if (!sameList(wanted) && !sameList(wantedWithoutInstructions)) continue;
    if (shape.some((n, i) => n !== exercise.problemShape[i])) continue;
    if (!best || score > best.score) best = { score, exercise };
  }
  if (!best) return { status: 'unmatched' };
  const { exercise } = best;
  if (exercise.figure) return { status: 'figure', exercise };
  const values = answerValues(item.answer);
  if (!values) return { status: 'symbolic', exercise };
  // A solution that only restates the problem's own numbers (a "translate to
  // a system" Try It whose printed answer is the system) keys nothing.
  const fresh = exercise.solutionValues.filter((value) => !exercise.problemValues.some((given) => Math.abs(Math.abs(given) - Math.abs(value)) < 1e-9));
  if (!fresh.length) return { status: 'unkeyed', exercise };
  // "Answer as a fraction with denominator 8": the page fixes the form, and
  // the source's count of eighths (2) is the page's numerator (2/8).
  const denominator = String(item.question).match(/\bdenominator\s+(\d+)\b/i);
  const numerator = denominator ? String(item.answer).match(/^\s*-?\\[td]?frac\{(-?\d+)\}\{(\d+)\}\s*$/) : null;
  const candidates = numerator && numerator[2] === denominator[1] ? [Number(numerator[1])] : values;
  const missing = candidates.filter((value) => !exercise.solutionValues.some((printed) => valuesAgree(value, printed)));
  if (missing.length) {
    return {
      status: 'key-differs',
      exercise,
      detail: `fillin keys ${JSON.stringify(item.answer)} (value${missing.length > 1 ? 's' : ''} ${missing.join(', ')} not printed) `
        + `but source ${exercise.id} solves it as ${JSON.stringify(exercise.solution.slice(0, 140))}`,
    };
  }
  return { status: 'confirmed', exercise };
}

/* ---- keyed units: a book that renders only what its source keys ------------- */

/** A fill-in key as significant-figures.mjs reads it, or null when it is not one numeral. */
export function keyNumeral(answer) {
  const written = String(answer ?? '')
    .replace(/\\left|\\right/g, '')
    .replace(/\\[,;:! ]/g, '')
    .replace(/\{,\}/g, '')
    .replace(/[\u2212\u2013]/g, '-')
    .replace(/\s*\\%\s*$/, '')
    .trim();
  const numeral = readNumeral(written);
  return numeral && numeral.rest.trim() === '' ? numeral : null;
}

/** Two numerals of the same exact value (sign included). */
export function sameNumeral(a, b) {
  if (a.negative !== b.negative && a.mantissa !== 0n) return false;
  const to = Math.min(a.exponent, b.exponent);
  return a.mantissa * 10n ** BigInt(a.exponent - to) === b.mantissa * 10n ** BigInt(b.exponent - to);
}

/** A label in words set after a formula: " (empirical formula)". A state symbol ("(aq)", "(s)") is no label. */
const LABEL_AFTER = /\s*\(([A-Za-z][a-z]{2,}(?:\s+[a-z]{2,})*)\)\s*$/;
/** An answer's pieces: between its commas and semicolons, and its sentences ("… is BH _3 . The …"). */
const ANSWER_PIECES_SENTENCES = /[,;]|\s*\.\s+(?=[A-Z])/;

/**
 * The formulas of an answer that labels each in words, before or after it —
 * "molecular C₂H₂, empirical CH" (2.4); "Mg₃Si₂H₃O₈ (empirical formula),
 * Mg₆Si₄H₆O₁₆ (molecular formula)" (3.2) — as `{ label, words, canon,
 * printed }`, `words` the label's words no other label shares (so
 * "formula", common to both, names neither). Empty unless the answer has
 * at least two such pieces under two labels.
 */
export function labelledFormulas(answer, form) {
  const entries = [];
  // …or in sentences: "The empirical formula is BH₃. The molecular formula is B₂H₆." (4.5).
  for (const raw of String(answer ?? '').split(ANSWER_PIECES_SENTENCES)) {
    const piece = raw.trim().replace(/[.:]$/, '');
    const after = LABEL_AFTER.exec(piece);
    const before = after ? null : /^((?:[A-Za-z][a-z]{2,}\s+)+)(?:(?:is|are)\s+)?(?=\S)/.exec(piece);
    const label = (after ? after[1] : before ? before[1] : '').trim().toLowerCase().replace(/^(?:the|an?) /, '');
    if (!label) continue;
    const formula = after ? piece.slice(0, after.index) : piece.slice(before[0].length);
    const canon = chemCanon(formula, form);
    if (canon) entries.push({ label, canon, printed: formula.trim() });
  }
  const labels = [...new Set(entries.map((entry) => entry.label))];
  if (entries.length < 2 || labels.length < 2) return [];
  const wordsOf = (label) => foldedPlain(label).split(' ').filter(Boolean);
  return entries.map((entry) => ({
    ...entry,
    words: wordsOf(entry.label).filter((word) => labels.filter((other) => wordsOf(other).includes(word)).length === 1),
  }));
}

const withoutArticle = (value) => foldedPlain(value).replace(/^(?:an?|the) /, '');

/** Each element's English name and symbol, for a closing sentence that names an element ("Enter the equation for the reaction of magnesium."). */
export const ELEMENT_BY_NAME = new Map(('hydrogen H helium He lithium Li beryllium Be boron B carbon C nitrogen N oxygen O fluorine F neon Ne '
  + 'sodium Na magnesium Mg aluminum Al silicon Si phosphorus P sulfur S chlorine Cl argon Ar potassium K calcium Ca '
  + 'scandium Sc titanium Ti vanadium V chromium Cr manganese Mn iron Fe cobalt Co nickel Ni copper Cu zinc Zn '
  + 'gallium Ga germanium Ge arsenic As selenium Se bromine Br krypton Kr rubidium Rb strontium Sr yttrium Y zirconium Zr '
  + 'niobium Nb molybdenum Mo technetium Tc ruthenium Ru rhodium Rh palladium Pd silver Ag cadmium Cd indium In tin Sn '
  + 'antimony Sb tellurium Te iodine I xenon Xe cesium Cs barium Ba lanthanum La cerium Ce hafnium Hf tantalum Ta '
  + 'tungsten W rhenium Re osmium Os iridium Ir platinum Pt gold Au mercury Hg thallium Tl lead Pb bismuth Bi '
  + 'polonium Po astatine At radon Rn francium Fr radium Ra actinium Ac thorium Th uranium U plutonium Pu')
  .split(' ').reduce((pairs, word, index, words) => (index % 2 ? pairs : [...pairs, [word, words[index + 1]]]), []));

/** A list member as its characters: "As^{−}", "As –", and "As⁻" are "as-". */
const tightMember = (value) => String(value ?? '').normalize('NFKC').replace(/[\s${}^_.]/g, '').replace(/[−–]/g, '-').toLowerCase();

/**
 * An answer that speaks of two or more elements in turn, each sentence
 * opening with the element's symbol — "Co has 27 protons, 27 electrons, and
 * 33 neutrons: 1s²…3d⁷. I has 53 protons, …" (6.4) — narrowed to the
 * sentence of the ONE element an item's closing sentence names by name
 * ("Enter the number of neutrons in an atom of iodine-131."), or the whole
 * answer when it is not that shape.
 */
export function elementSegment(answer, closing) {
  const text = String(answer ?? '');
  const sentences = text.split(/(?<=\.)\s+(?=[A-Z][a-z]?\s+(?:has|is|are)\b)/);
  if (sentences.length < 2) return text;
  const opening = sentences.map((sentence) => /^([A-Z][a-z]?)\s+(?:has|is|are)\b/.exec(sentence)?.[1] ?? null);
  if (opening.some((symbol) => !symbol) || new Set(opening).size !== opening.length) return text;
  const folded = ` ${foldedPlain(closing)} `;
  const named = [...ELEMENT_BY_NAME].filter(([name, symbol]) => folded.includes(` ${name} `) && opening.includes(symbol));
  return named.length === 1 ? sentences[opening.indexOf(named[0][1])] : text;
}

/**
 * The configurations an answer prints for an atom and its ion, or for two
 * ions, each after an optional label (Chemistry 2e 7.1): "1s²…3p¹; Al³⁺:
 * 1s²2s²2p⁶", "…4p⁵; …4p⁶" (Br and its ion, unlabelled), "P: [Ne]3s²3p³;
 * P³⁻: [Ne]3s²3p⁶", "K⁺: [Ar], Mg²⁺: [Ne]" — as `{ symbol, charged, canon,
 * printed }`, `symbol` null and `charged` null where no label stands before
 * it. [] unless two or more pieces read as configurations.
 */
export function labelledConfigurations(answer) {
  const entries = [];
  for (const raw of String(answer ?? '').split(/[;,]/)) {
    const piece = raw.trim().replace(/\.\s*$/, '');
    const label = /^([A-Z][a-z]?)\s*(?:\^\s*\{?\s*(\d*\s*[+−–-])\s*\}?)?\s*:\s*/.exec(piece);
    const printed = label ? piece.slice(label[0].length) : piece;
    const canon = printed ? chemCanon(printed, 'configuration') : null;
    if (canon) entries.push({ symbol: label ? label[1] : null, charged: label ? Boolean(label[2]) : null, canon, printed });
  }
  return entries.length >= 2 ? entries : [];
}

/**
 * Of an answer's labelled configurations, the one an item's closing sentence
 * asks for: by the element it names ("…of the potassium ion." → the K⁺
 * entry), then by "atom" or "ion" ("…of the atom." → the entry labelled with
 * a neutral symbol, or unlabelled beside an ion's; "…of the ion." → the
 * entry labelled with a charge, or unlabelled beside an atom's). Two
 * unlabelled configurations under a stem that asks for "each … atom and
 * … the … ion" are the atom's, then the ion's: the source answers in the
 * stem's order (7.1's bromine and arsenic). Returns the entries it could
 * be — one when the closing says which.
 */
function askedConfigurations(entries, question, stem) {
  const closing = ` ${foldedPlain(askedClosing(question))} `;
  const named = [...ELEMENT_BY_NAME].filter(([name]) => closing.includes(` ${name} `)).map(([, symbol]) => symbol);
  let candidates = named.length === 1 && entries.some((entry) => entry.symbol === named[0])
    ? entries.filter((entry) => entry.symbol === named[0]) : entries;
  const role = / ion /.test(closing) ? 'ion' : / atom /.test(closing) ? 'atom' : null;
  if (!role || candidates.length < 2) return candidates;
  const roles = candidates.map((entry, index) => {
    if (entry.charged !== null) return entry.charged ? 'ion' : 'atom';
    const labelled = candidates.filter((other) => other.charged !== null);
    if (labelled.length) return labelled.every((other) => other.charged) ? 'atom' : labelled.every((other) => !other.charged) ? 'ion' : null;
    return candidates.length === 2 && /\batoms?\b/i.test(stem) && /\bions?\b/i.test(stem) ? (index === 0 ? 'atom' : 'ion') : null;
  });
  candidates = candidates.filter((entry, index) => roles[index] === role);
  return candidates;
}

/** An angle printed after a shape's name — "bent (109°)", "bent (<120°)" (7.6) — which is no part of the name. */
const ANGLE_AFTER = /\s*\(\s*[<>≈~]?\s*\d+(?:\.\d+)?\s*°\s*\)/g;

/**
 * The values an answer gives under names it prints (7.6's geometries), as
 * `{ label, value }` folded, `value` with any angle after it dropped:
 *   "electron-pair geometry: octahedral, molecular structure: square
 *   pyramidal" (a name, a colon, the value; commas or semicolons between);
 *   "The electron-pair geometry is trigonal bipyramidal. The molecular
 *   structure is linear." (and "… is X and the … is Y");
 *   "Both the electron geometry and the molecular structure are
 *   octahedral." (one value for both names).
 * A name is two or three words; [] unless two different names are read.
 */
export function labelledValues(answer) {
  const text = String(answer ?? '').replace(ANGLE_AFTER, '');
  const entries = [];
  const NAME = '([a-z]+(?:[\\s-]+[a-z]+){1,2})';
  for (const match of text.matchAll(new RegExp(`(?:^|[,;.]\\s*)${NAME}\\s*:\\s*([a-z][a-z\\s-]*?)\\s*(?=[,;.]|$)`, 'gi'))) {
    entries.push({ label: foldedPlain(match[1]), value: foldedPlain(match[2]) });
  }
  for (const match of text.matchAll(new RegExp(`\\bthe\\s+${NAME}\\s+is\\s+([a-z][a-z\\s-]*?)\\s*(?=[,;.]|\\sand\\s|$)`, 'gi'))) {
    entries.push({ label: foldedPlain(match[1]), value: foldedPlain(match[2]) });
  }
  const both = new RegExp(`\\bboth\\s+the\\s+${NAME}\\s+and\\s+the\\s+${NAME}\\s+are\\s+([a-z][a-z\\s-]*?)\\s*(?=[,;.]|$)`, 'i').exec(text);
  if (both) entries.push({ label: foldedPlain(both[1]), value: foldedPlain(both[3]) }, { label: foldedPlain(both[2]), value: foldedPlain(both[3]) });
  return new Set(entries.map((entry) => entry.label)).size >= 2 ? entries : [];
}

/** Of `labelledValues`, the name an item's closing sentence asks ("Enter the molecular structure.") by a word no other name has, with its values; null when it names none, or more than one. */
function askedLabel(entries, question) {
  const closing = ` ${foldedPlain(askedClosing(question))} `;
  const labels = [...new Set(entries.map((entry) => entry.label))];
  const words = (label) => label.split(' ').filter(Boolean);
  const own = (label) => words(label).filter((word) => labels.filter((other) => words(other).includes(word)).length === 1);
  const asked = labels.filter((label) => own(label).some((word) => closing.includes(` ${word} `)));
  return asked.length === 1 ? { label: asked[0], values: entries.filter((entry) => entry.label === asked[0]).map((entry) => entry.value) } : null;
}

/**
 * A yes-or-no item on a lettered part whose formula the answer lists, or
 * not, in a sentence (`judgeKeyedUnit`): `{ wanted, sentence }`, or null
 * when the item is not yes or no, the part is no formula, or no sentence of
 * the answer lists two or more formulas. A part's own aside ("PCl₃ (P is
 * the central atom)") is no part of its formula.
 */
export function listedPart(unit, item) {
  const options = (item.options || []).map((option) => foldedPlain(option));
  if (options.length !== 2 || !options.includes('yes') || !options.includes('no')) return null;
  if (unit.partText === null || unit.partText === undefined) return null;
  // The part as the question prints it, after its question mark ("…a dipole
  // moment? ClO₂⁻"), where the source's MathML part ("ClO 2 −") reads two ways.
  const asFormula = (text) => chemCanon(String(text ?? '').replace(/\([^)]*\)/g, ' ').replace(/[.\s]+$/, '').trim(), 'formula');
  const part = asFormula(String(item.question).split('?').pop()) ?? asFormula(unit.partText);
  if (!part) return null;
  const formulaOf = (piece) => chemCanon(piece.replace(/^\s*(?:(?:only|and|also|both)\s+)+/i, '').replace(/(?:\s+[a-z]+)+\s*\.?\s*$/, '').trim(), 'formula');
  const lists = String(unit.answer).split(/(?<=\.)\s+(?=[A-Z])/).map((sentence) => ({
    sentence, formulas: sentence.split(/,|\s+and\s+/).map(formulaOf).filter(Boolean),
  })).filter((entry) => entry.formulas.length >= 2);
  if (!lists.length) return null;
  const asked = new Set(foldedPlain(item.question).split(' ').filter((word) => word.length > 3));
  const shared = (sentence) => foldedPlain(sentence).split(' ').filter((word) => asked.has(word) || asked.has(word.replace(/s$/, ''))).length;
  const [best] = [...lists].sort((a, b) => shared(b.sentence) - shared(a.sentence));
  return { wanted: best.formulas.includes(part) ? 'yes' : 'no', sentence: best.sentence };
}

/**
 * The sentence of an unlettered unit's answer that lists the ONE member of
 * the stem's list an item asks about — the text after the question's last
 * colon ("…in binary ionic compounds: Mg?") — where the answer sorts the
 * list in sentences, each opening with its members ("Mg, In, Cs, Pb, and Co
 * would form cations …"); null otherwise.
 */
function sortedSentence(unit, question) {
  if (unit.partText !== null && unit.partText !== undefined) return null;
  const members = listMembers(unit.stem);
  const at = String(question).lastIndexOf(':');
  if (members.length < 2 || at === -1) return null;
  const asked = tightMember(String(question).slice(at + 1).replace(/[?.]\s*$/, ''));
  if (!members.some((member) => tightMember(member) === asked)) return null;
  const sentences = String(unit.answer).split(/(?<=\.)\s+(?=[A-Z])/);
  const opening = (sentence) => sentence.split(/,|\s+and\s+/).map((piece) => tightMember(piece.trim().split(/\s+/)[0] ?? ''));
  const holding = sentences.filter((sentence) => opening(sentence).includes(asked));
  return sentences.length >= 2 && holding.length === 1 ? holding[0] : null;
}

/** A label set before an equation with a colon ("complete ionic equation: …") or after it in parentheses ("… (net)", "… ( molecular )"); a state symbol, of one or two letters, is never one, nor a condition "(in base)". */
const EQUATION_LABEL = /\(\s*([a-z]{3,}(?:\s+[a-z]{3,})*)\s*\)|\b([a-z]{3,}(?:\s+[a-z]{3,})*)\s*:/g;

/**
 * The equations an answer prints, in order, as `{ label, canon, printed }` —
 * one per equation the grader's parser reads, `label` the words the answer
 * names it by or ''. Chapter 4 prints several equations to one part in three
 * ways: separated by semicolons (4.1's "2Mg + O₂ ⟶ 2MgO; 4Al + 3O₂ ⟶ …; 4Fe
 * + …", one per metal), labelled before ("complete ionic equation: …, net
 * ionic equation: …"), and labelled after with nothing between them ("…
 * (complete) … (net)", one math element; "… ( molecular ) … ( complete ionic
 * ) … (net ionic)"). A condition the answer repeats after an equation ("(in
 * base)") is the stem's, not a species.
 */
export function answerEquations(answer) {
  const text = String(answer ?? '');
  const entries = [];
  let at = 0;
  let before = '';
  const push = (segment, after) => {
    for (const piece of segment.split(';')) {
      const printed = piece.trim().replace(/^[,.]\s*|[,.]\s*$/g, '').replace(/\s*\(in [a-z ]+\)\s*$/, '').trim();
      const canon = printed ? chemCanon(printed, 'equation') : null;
      if (canon) entries.push({ label: (after || before).toLowerCase(), canon, printed });
    }
    before = '';
  };
  for (const match of text.matchAll(EQUATION_LABEL)) {
    const segment = text.slice(at, match.index);
    if (match[1]) push(segment, match[1]);
    else { push(segment, ''); before = match[2]; }
    at = match.index + match[0].length;
  }
  push(text.slice(at), '');
  return entries;
}

/**
 * Of an answer's several equations, the one an item's closing sentence asks
 * for, or null when it names none: by a word only one equation's label holds
 * ("Enter the net ionic equation." → the equation labelled "net ionic" or
 * "net"), or, the equations unlabelled, by the one element it names whose
 * symbol stands in exactly one of them ("Enter the equation for the reaction
 * of magnesium." → the equation with Mg). Returns the equations it could be.
 */
function askedEquations(equations, question) {
  // A sentence may close inside a parenthesis: "(Assume the iron oxide contains Fe³⁺ ions.) Enter …".
  const closing = ` ${foldedPlain(String(question).split(/(?<=[.?!:][)”’"]?)\s+/).pop())} `;
  const labels = [...new Set(equations.map((entry) => entry.label).filter(Boolean))];
  const wordsOf = (label) => foldedPlain(label).split(' ').filter(Boolean);
  const unique = (label) => wordsOf(label).filter((word) => labels.filter((other) => wordsOf(other).includes(word)).length === 1);
  const byLabel = equations.filter((entry) => entry.label && unique(entry.label).some((word) => closing.includes(` ${word} `)));
  if (byLabel.length && new Set(byLabel.map((entry) => entry.label)).size === 1) return byLabel;
  if (labels.length) return null;
  return byElement(equations, closing);
}

/**
 * Of several printed formulas or equations (`{ printed }`), the one that
 * holds the ONE element a closing sentence names, when exactly one does:
 * "Enter the formula of barium nitrate." → of "Ba(NO₃)₂, KClO₃" the one with
 * Ba (4.1). Null when the sentence names no element, or several, or the
 * element stands in more than one.
 */
/** A formula as its characters, sub- and superscripts folded and spaces gone: "Cl _2" and "Cl₂" are "Cl2". */
const formulaChars = (value) => String(value ?? '').normalize('NFKC').replace(/[\s_{}^$]/g, '').replace(/[−–]/g, '-');

/**
 * A fill-in key held to the ONE number of several that its closing sentence
 * asks for, where the answer says which is which in a way the "3 protons, 4
 * neutrons" reading above does not. Returns what was asked ("the number for
 * P") when the key is not that number — `{ what, numerals }`, the numbers
 * the answer does give for it — else null.
 *
 *   An element's symbol before each signed number — "H +1, P +5, O −2" (4.2,
 *   oxidation states): the item that closes "Enter the oxidation state of P
 *   …" is keyed with P's number, sign and all.
 *   A unit and a formula after each number — "0.435 mol Na, 0.217 mol Cl₂,
 *   15.4 g Cl₂" (4.3): "Enter the number of moles of Cl₂." is keyed with the
 *   amount in mol OF Cl₂, "Enter the mass of Cl₂ in grams." with the mass. A
 *   formula the answer prints no amount of in that unit is read by the unit
 *   alone: 4.3's "18.86 mol CuO, 2.330 kg CuCO₃" answers the moles of
 *   CuCO₃ asked with the moles of CuO, which equal them (1:1).
 */
function heldNumber(answer, question, key) {
  const closing = String(question).split(/(?<=[.?!][)”’"]?)\s+/).pop();
  // …or an answer that is nothing but such pairs, a zero unsigned and a
  // colon or none between: "H: 0, Cl: 0", "P: 0, Cl 0", "N: 0; all three Cl
  // atoms: 0" (7.4, formal charges) — "three" is no charge.
  const PAIR = /^\s*(?:all\s+[a-z]+\s+)?([A-Z][a-z]?)(?:\s+atoms?)?\s*:?\s*([+−–-]?\s?\d+)\s*$/;
  const pairs = String(answer).replace(/\.\s*$/, '').split(/[,;]/).map((piece) => PAIR.exec(piece));
  const bySymbol = (pairs.length >= 2 && pairs.every(Boolean) ? pairs : [...String(answer).matchAll(/(?:^|[\s,;])([A-Z][a-z]?)\s*,?\s+([+−–-]\s?\d+)(?=\s*(?:[,;.]|$))/g)])
    .map((match) => ({ symbol: match[1], numeral: printedNumerals(match[2].replace(/\s/g, ''))[0] })).filter((entry) => entry.numeral);
  if (new Set(bySymbol.map((entry) => entry.symbol)).size >= 2) {
    const asked = [...new Set(bySymbol.map((entry) => entry.symbol))]
      .filter((symbol) => new RegExp(`(?<![A-Za-z])${symbol}(?![A-Za-z])`).test(closing));
    if (asked.length === 1) {
      const held = bySymbol.filter((entry) => entry.symbol === asked[0]);
      return held.some((entry) => sameNumeral(entry.numeral, key)) ? null : { what: `the number for ${asked[0]}`, numerals: held.map((entry) => entry.numeral) };
    }
  }
  const KINDS = { mol: 'moles', g: 'mass', kg: 'mass', mg: 'mass' };
  const amounts = [];
  for (const piece of String(answer).split(/[,;]/)) {
    const [numeral] = printedNumerals(piece);
    if (!numeral) continue;
    const rest = /^\s*(mol|kg|mg|g)\b\s*(.*)$/.exec(piece.slice(piece.indexOf(numeral.printed) + numeral.printed.length));
    if (rest) amounts.push({ numeral, kind: KINDS[rest[1]], formula: formulaChars(rest[2].replace(/[.;]\s*$/, '')) });
  }
  if (amounts.length < 2) return null;
  const kind = /\bmoles?\b/i.test(closing) ? 'moles' : /\bmass\b/i.test(closing) ? 'mass' : null;
  if (!kind) return null;
  const ofWhat = /.*\bof\s+(.+?)(?:\s+in\s+[a-z]+)?\.?$/i.exec(closing);
  const formula = ofWhat ? formulaChars(ofWhat[1]) : '';
  const ofKind = amounts.filter((entry) => entry.kind === kind);
  if (!ofKind.length) return null;
  const exact = ofKind.filter((entry) => formula && entry.formula === formula);
  const candidates = exact.length ? exact : ofKind;
  return candidates.some((entry) => sameNumeral(entry.numeral, key)) ? null
    : { what: `the ${kind}${exact.length ? ` of ${ofWhat[1]}` : ''}`, numerals: candidates.map((entry) => entry.numeral) };
}

/**
 * An answer with the labels that are not numbers taken out, for a fill-in's
 * reading: a subshell's shell number before its letter and "orbital",
 * "subshell", or a count ("3 d orbitals", "4 s^{2}" — the five degenerate 3d
 * orbitals answer five, not three), and an old group label in parentheses
 * ("15 (5A)").
 */
export function numbersOnly(answer) {
  return String(answer ?? '')
    .replace(/(?<![\w.])[1-7]\s?[spdf](?=\s*(?:orbitals?|subshells?)\b|\s*\^\{?\d)/g, ' ')
    .replace(/\(\s*\d+\s*[AB]\s*\)/g, ' ');
}

const CARRIED_STOP = new Set(['the', 'a', 'an', 'of', 'is', 'are', 'it', 'its', 'this', 'that', 'and']);

/**
 * The word(s) a selfcheck's model answer carries of a multi-quantity answer
 * (see `judgeKeyedUnit`), or null: the part's answer must print at least
 * one number and one word piece, and every word the model answer adds to
 * the question must be one of the part's own word pieces.
 */
export function carriedWord(unit, units, item) {
  const label = unit.label;
  const siblings = units.filter((other) => other.group === unit.group && other !== unit).map((other) => other.answer).join('; ');
  let said = String(unit.answer ?? '');
  if (label) {
    // A sibling's clause leaves this part's answer; this part's clause, wherever printed, joins it.
    said = said.replace(new RegExp(`\\((?!${label}\\))[a-z]\\)\\s+is\\s+[^;.]+`, 'g'), ' ');
    said += ` ${[...`${unit.answer}; ${siblings}`.matchAll(new RegExp(`\\(${label}\\)\\s+is\\s+([^;.]+)`, 'g'))].map((match) => match[1]).join(' ')}`;
  }
  if (!printedNumerals(said).length) return null;
  const words = (text) => foldedPlain(text).split(' ').filter((word) => word && !/^\d+$/.test(word) && !CARRIED_STOP.has(word));
  const asked = new Set(words(item.question));
  const added = words(item.model).filter((word) => !asked.has(word));
  // The word pieces: the answer with each number and the unit after it taken out.
  const pieces = new Set(words(said.replace(/[−–-]?\d[\d.,]*(?:\s*[×x]\s*10\s*\^\{[^}]*\})?(?:\s+[^\s;]+)?/g, ' ')));
  return added.length && added.every((word) => pieces.has(word)) ? added.join(' ') : null;
}

/** The closing sentence of a question, a typing sentence set aside ("Type each subshell …"): the one that says which. */
export function askedClosing(question) {
  const sentences = String(question ?? '').split(/(?<=[.?!][)”’"]?)\s+/).filter((sentence) => !/^Type\b/.test(sentence.trim()));
  return sentences.pop() ?? '';
}

/**
 * Of several printed formulas, the one with the charge a closing sentence
 * names — "Enter the symbol of the ion with a +1 charge." → of "Rb⁺, Se²⁻"
 * the one with charge +1 (6.4) — when exactly one has it.
 */
function byCharge(entries, closing) {
  const said = /([+−–-])\s?(\d+)\s+charge\b/.exec(String(closing));
  if (!said) return null;
  const charge = Number(said[2]) * (said[1] === '+' ? 1 : -1);
  const holding = entries.filter((entry) => {
    const tail = /\^(\d*)([+-])$/.exec(entry.canon);
    return tail && Number(tail[1] || 1) * (tail[2] === '+' ? 1 : -1) === charge;
  });
  return holding.length === 1 ? holding : null;
}

function byElement(entries, closing) {
  const symbols = [...ELEMENT_BY_NAME].filter(([name]) => closing.includes(` ${name} `)).map(([, symbol]) => symbol);
  if (symbols.length !== 1) return null;
  const holding = entries.filter((entry) => new RegExp(`${symbols[0]}(?![a-z])`).test(entry.printed));
  return holding.length === 1 ? holding : null;
}


/* ---- keys worked from this book's own atomic masses ----------------------- */

/**
 * Books whose numeric keys are worked from a periodic table of their own.
 *
 * Chemistry's table is `data/chemistry/elements.json` — IUPAC's abridged
 * standard atomic weights — where the source's figure prints four-figure
 * masses and the source's answer key was worked from yet other values
 * (1990s atomic weights: H 1.00794, Cl 35.4527, Zn 65.39). A key is what the
 * book's table gives (Derek, November 12, 2026), so some keys stand a unit or
 * two of their last place from the number the source prints. That is not a
 * correction of the source and takes no `DISCLOSED_DEVIATIONS` entry; it is
 * read here as its own status, `data-differs`, under three holds:
 *
 *   1. the item's form carries `last-digit:1` or `last-digit:2`, the
 *      grammar's own mark that a factor is fetched from a table — an item
 *      graded to the digit can never be one;
 *   2. the source's print is within DATA_DISTANCE_UNITS of the key at the
 *      coarser of the two last places, and within DATA_DISTANCE_PERCENT of
 *      it (plus one such unit) — so a key that is simply wrong still fails;
 *   3. every such item is a row of the register below, which this tool
 *      writes and a person reviews: a new row, a changed row, and a row the
 *      page no longer has all fail until the file is rewritten on purpose.
 *
 * A formula, molecular, or molar mass asked for itself is held tighter: the
 * key must be exactly what `molar-mass.mjs` computes from the table
 * (`table-differs` otherwise — no entry excuses it).
 */
export const ELEMENT_DATA_BOOKS = Object.freeze(['chemistry']);
export const DATA_DISTANCE_UNITS = 2n;
export const DATA_DISTANCE_PERCENT = '0.1';
export const DATA_REGISTER = 'data/verification/source-print-differences.json';
/** The opening of the one paragraph a page with register rows carries under `## Practice`. */
export const DATA_SOURCE_NOTE = '*Source note:* the source’s answer key for some exercises of this section was worked from atomic masses other than the ones in this book’s periodic table.';

/** A numeral's magnitude rounded half up to the power of ten `place` (unchanged when it is no finer). */
function magnitudeAt(numeral, place) {
  if (numeral.exponent >= place) return numeral.mantissa * 10n ** BigInt(numeral.exponent - place);
  const divisor = 10n ** BigInt(place - numeral.exponent);
  const quotient = numeral.mantissa / divisor;
  return (numeral.mantissa % divisor) * 2n >= divisor ? quotient + 1n : quotient;
}

/**
 * The source print a key stands beside when only the atomic masses behind
 * the two differ: `{ numeral, units }`, units counted at the coarser of the
 * two last places, or null when no printed number is that near.
 */
export function dataDifference(key, printed) {
  // A worked Solution is a paragraph, and it prints small counts beside its
  // result ("1 mole of nitrogen … = 0.3776 mol glycine"). Read at the units
  // place a key of 0.3777 is 0, one unit from that "1": a number the key has
  // no figure of at its last place is no print of the key, and of the
  // prints that are, the one read at the finest place is the result.
  let best = null;
  for (const numeral of printed) {
    if (numeral.negative !== key.negative || numeral.mantissa === 0n) continue;
    const place = Math.max(key.exponent, numeral.exponent);
    if (magnitudeAt(key, place) === 0n) continue;
    const difference = magnitudeAt(key, place) - magnitudeAt(numeral, place);
    const units = difference < 0n ? -difference : difference;
    if (units > DATA_DISTANCE_UNITS) continue;
    if (!withinPercent(key, numeral, readNumeral(DATA_DISTANCE_PERCENT), { units: 1, unitExponent: place })) continue;
    if (!best || place < best.place) best = { numeral, units: Number(units), place };
  }
  return best && { numeral: best.numeral, units: best.units };
}

const registerKey = (row) => [row.page, row.exercise, row.key, row.sourcePrint, row.units].join('\u0001');
const sortRegister = (rows) => [...rows].sort((a, b) => registerKey(a).localeCompare(registerKey(b)));

/** The register's rows, or [] when the file does not exist yet. */
export function readDataRegister(repositoryRoot) {
  const file = path.join(repositoryRoot, DATA_REGISTER);
  return existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')).differences : [];
}

/** Write the register: the rows a run computed, beside the kept rows of pages it could not read. */
export function writeDataRegister(repositoryRoot, differences, pagesRead) {
  const kept = readDataRegister(repositoryRoot).filter((row) => !pagesRead.includes(row.page));
  const body = {
    schemaVersion: 1,
    note: 'Fill-in keys, on items that fetch an atomic mass, that stand a unit or two of the last place from the number the pinned source prints: this book’s periodic table (data/chemistry/elements.json) carries other atomic masses than the source’s answer key was worked from, and a key here is carried unrounded where the source sometimes rounded a step on the way. Written by `node tools/verify/verify-source-keys.mjs --write-register`; verify-source-keys fails when a run computes other rows. Review the diff of this file like a key change: `units` is the distance at the coarser of the two last places.',
    differences: sortRegister([...kept, ...differences]),
  };
  const lines = body.differences.map((row) => `    ${JSON.stringify(row)}`).join(',\n');
  writeFileSync(path.join(repositoryRoot, DATA_REGISTER),
    `{\n  "schemaVersion": 1,\n  "note": ${JSON.stringify(body.note)},\n  "differences": [${lines ? `\n${lines}\n  ` : ''}]\n}\n`);
  return body.differences.length;
}

/*
 * The options an answer names. An option is named when the answer (folded,
 * space-padded) prints it — as a run of words, or, for an option of several
 * words, each of its words ("symbolic, microscopic" names the option
 * "symbolic, microscopic" and, word for word, the option "microscopic" too).
 * Of the options named, one whose words are all inside another named option
 * is the less specific reading and gives way to it: the answer that says
 * "symbolic, microscopic" keys the compound option, not the bare domain;
 * "metal, inner transition metal" names "inner transition metal", not
 * "transition metal".
 *
 * Two ways the answer's word and the option's differ and are still one:
 *   an option that prints its own second name in parentheses — the stem's
 *   "main-group (representative) element", answered "representative
 *   element" (2.5) — is named by either name;
 *   an answer in the word the module's glossary gives as the option's alias
 *   — "molecular" to a stem that asks "ionic or covalent", where the
 *   glossary has "covalent compound — (also, molecular compound)" (2.6) —
 *   is read through that pair (`optionsNamedThrough`), and only when the
 *   answer names no option as printed.
 * Shared by a keyed multiple choice and a keyed sortbins, whose options are
 * its bins.
 */
const optionWords = (option) => withoutArticle(option).split(' ').filter(Boolean);
const optionReadings = (option) => {
  const aside = /^(.*?)\s*\(([^)]+)\)\s*(.*)$/.exec(option);
  return [option, ...(aside ? [`${aside[1]} ${aside[3]}`, `${aside[2]} ${aside[3]}`] : [])].map(optionWords);
};
export function optionsNamedIn(answer, options) {
  // Word by word only for words: a formula's pieces are no words — "K₂O"
  // folds to "k 2 o", which "Na₂O; Na⁺ has a smaller radius than K⁺" prints
  // one by one (7.5).
  const printed = (option) => optionReadings(option).some((words) => words.length > 0 && (answer.includes(` ${words.join(' ')} `)
    || (words.length > 1 && words.every((word) => /^[a-z]{2,}$/.test(word)) && words.every((word) => answer.includes(` ${word} `)))));
  const mentioned = options.filter(printed);
  return mentioned.filter((option) => !mentioned.some((other) => other !== option
    && optionWords(other).length > optionWords(option).length
    && optionWords(option).every((word) => optionWords(other).includes(word))));
}
/** The options an answer names through ONE glossary alias pair (`optionsNamedIn`), or none. */
export function optionsNamedThrough(aliases, answer, options) {
  const through = aliases.flatMap(([a, b]) => [[a, b], [b, a]])
    .filter(([from]) => answer.includes(` ${from} `))
    .map(([from, to]) => optionsNamedIn(answer.split(` ${from} `).join(` ${to} `), options))
    .filter((named) => named.length > 0);
  return through.length === 1 ? through[0] : [];
}

/**
 * A sortbins of a keyed-only book that sorts the parts of ONE lettered
 * exercise into the stem's own categories (docs/subjects/chemistry.md
 * "Exercises": 2.5 classifies ten elements as metal or nonmetal, and then
 * as main-group element, transition metal, or inner transition metal — one
 * sortbins per classification, the labels the parts). Returns null when no
 * exercise's part is one of its labels (`sortedExercise`: an author-written
 * or table-built sortbins, which `judgeSortbins` reads), else
 *
 *   'confirmed'     every label is a part, every part a label, and each
 *                   label's bin is the one category the part's answer
 *                   segment names (`optionsNamedIn` over the bins, then the
 *                   glossary's alias pairs)
 *   'key-differs'   a part is not a label, a label is not a part, or a
 *                   label sits in a bin its part's answer does not name —
 *                   or the segment names no bin, or more than one
 *   'unkeyed-unit'  the exercise prints no answer
 */
export function judgeKeyedSortbins(item, units, { aliases = [] } = {}) {
  const labels = item.items.map((entry) => entry.label);
  const sorted = sortedExercise(item.question, units, { type: 'sortbins', labels });
  if (!sorted) return null;
  const exercise = { id: sorted.group, group: sorted.group };
  if (!sorted.parts.some((unit) => unit.keyed)) {
    return { status: 'unkeyed-unit', exercise, detail: `source ${sorted.group} prints no answer, and this book renders only keyed exercises — remove the item` };
  }
  const problems = [];
  const missing = sorted.parts.filter((unit) => !labels.some((label) => isPartLabel(label, unit)));
  if (missing.length) problems.push(`part${missing.length > 1 ? 's' : ''} ${missing.map((unit) => `(${unit.label}) ${JSON.stringify(unit.partText)}`).join(', ')} of source ${sorted.group} ${missing.length > 1 ? 'are' : 'is'} not a label`);
  for (const entry of item.items) {
    const unit = sorted.parts.find((candidate) => isPartLabel(entry.label, candidate));
    if (!unit) {
      problems.push(`label ${JSON.stringify(entry.label)} is no part of source ${sorted.group}`);
      continue;
    }
    const said = ` ${foldedPlain(unit.answer)} `;
    let named = optionsNamedIn(said, item.bins);
    if (named.length === 0) named = optionsNamedThrough(aliases, said, item.bins);
    const keyed = item.bins[entry.bin];
    if (named.length === 1 && compact(named[0]) === compact(keyed)) continue;
    problems.push(named.length === 0
      ? `label ${JSON.stringify(entry.label)}: source ${unit.id} answers ${JSON.stringify(unit.answer)}, which names none of the bins`
      : named.length > 1
        ? `label ${JSON.stringify(entry.label)}: source ${unit.id} answers ${JSON.stringify(unit.answer)}, which names more than one bin (${named.join(', ')})`
        : `label ${JSON.stringify(entry.label)} is in bin ${JSON.stringify(keyed)}, but source ${unit.id} answers ${JSON.stringify(unit.answer)} (${JSON.stringify(named[0])})`);
  }
  return problems.length
    ? { status: 'key-differs', exercise, detail: `sortbins sorts source ${sorted.group}: ${problems.join('; ')}` }
    : { status: 'confirmed', exercise };
}

/** The sets of quantum numbers an answer prints after letter labels ("x. 4 0 0 ½, y. …"), as `{ label, canon }`; [] when it labels none. */
export function letteredSets(answer) {
  const pieces = String(answer ?? '').trim().replace(/[\s,;.]+$/, '').split(/\s*[,;]\s*(?=[a-z]\.\s)/);
  const sets = pieces.map((piece) => /^([a-z])\.\s+(.+)$/.exec(piece.trim())).filter(Boolean)
    .map(([, label, set]) => ({ label, canon: chemCanon(set, 'quantum-numbers') }));
  return sets.length === pieces.length && sets.every((entry) => entry.canon) ? sets : [];
}

/** A quantum-number textin against its unit (judgeKeyedUnit). */
function judgeQuantumSet(item, unit, key, exercise, differs) {
  if (!key) return differs;
  const lettered = letteredSets(unit.answer);
  if (new Set(lettered.map((entry) => entry.label)).size >= 2) {
    const asked = [...new Set([...askedClosing(item.question).matchAll(/\(([a-z])\)/g)].map((match) => match[1]))]
      .filter((label) => lettered.some((entry) => entry.label === label));
    if (asked.length !== 1) {
      return { ...differs, detail: `source ${unit.id} answers one set per label (${JSON.stringify(unit.answer.slice(0, 80))}); the item's closing sentence must name the one it keys ("Enter the set for the orbital of type (x) shown in the figure above.")` };
    }
    const held = lettered.find((entry) => entry.label === asked[0]);
    return held.canon === key ? { status: 'confirmed', exercise }
      : { ...differs, detail: `textin keys ${JSON.stringify(item.answer)} for (${asked[0]}), whose set source ${unit.id} prints as ${JSON.stringify(held.canon)} — the key is the source's set, not another possible one` };
  }
  const sets = String(unit.answer).split(/[,;]/).map((piece) => chemCanon(piece.replace(/^\s*[a-z]\.\s+/, ''), 'quantum-numbers')).filter(Boolean);
  return sets.includes(key) || chemCanon(unit.answer, 'quantum-numbers') === key ? { status: 'confirmed', exercise } : differs;
}

/**
 * One multiplechoice, fillin, or selfcheck of a keyed-only book
 * (tools/lib/keyed-units.mjs; docs/subjects/chemistry.md "Exercises")
 * against the UNIT it transcribes — an exercise, a lettered part of one, or
 * a Check Your Learning — and that unit's own segment of the printed answer.
 * Returns null when the question transcribes no unit (an author-written
 * filler: the ordinary judges read it), else
 *
 *   multiplechoice  'confirmed'      the answer segment names the keyed
 *                                    option and no other option of the item
 *                   'key-differs'    it names another option, or more than
 *                                    one (a two-category answer cannot be
 *                                    one multiple choice)
 *                   'prose-key'      it names none of the options
 *   fillin          'confirmed'      the segment prints the keyed number, and
 *                                    a declared `sig-figs:<n>` is a count the
 *                                    printed numeral shows
 *                   'key-differs'    the segment prints numbers, none of them
 *                                    the key
 *                   'figures-differ' the number is printed, to other figures
 *                                    than the item declares
 *                   'symbolic'       the key is not one numeral
 *                   'unkeyed'        the segment prints no number at all
 *   selfcheck       judgeSelfcheck's verdict against the segment
 *   any             'unkeyed-unit'   the unit has NO printed answer — the
 *                                    book does not render it
 */
export function judgeKeyedUnit(linkedItem, units, { aliases = [], elements = null, abbreviations = [] } = {}) {
  if (!['multiplechoice', 'fillin', 'selfcheck', 'textin'].includes(linkedItem.type)) return null;
  // A link is not a word of the stem: the item is read without its targets.
  const item = { ...linkedItem, question: unlinked(linkedItem.question) };
  const unit = unitFor(item.question, units, item);
  if (!unit) return null;
  const exercise = { id: unit.id, group: unit.group };
  if (!unit.keyed) {
    return { status: 'unkeyed-unit', exercise, detail: `source ${unit.id} prints no answer, and this book renders only keyed exercises — remove the item` };
  }
  if (item.type === 'textin') {
    const differs = {
      status: 'key-differs',
      exercise,
      detail: `textin keys ${JSON.stringify(item.answer)} but source ${unit.id} answers ${JSON.stringify(unit.answer.slice(0, 140))}`,
    };
    if (item.form) {
      // A formula or an equation: the key and the source's answer are read
      // by the grader's own parser, so "Mn _3 (PO _4 ) _2" and "Mn₃(PO₄)₂"
      // are one formula. An answer that lists several things ("ionic,
      // Ba²⁺, O²⁻"; an equation followed by a mass) is read piece by piece,
      // and a piece the answer labels in words ("molecular C₂H₂, empirical
      // CH") is read without them: a word of three letters or more is never
      // an element's symbol.
      const key = chemCanon(item.answer, item.form);
      // A set of quantum numbers (6.3): the key is the source's set, read by
      // the grader's own reader — "4 0 0 ( 1 )/( 2 )", the positive spin
      // unsigned, and the page's "4 0 0 +1/2" are one set; another possible
      // set of the same n and l is another key. Several sets to one part,
      // each after a letter label ("x. 4 0 0 ½, y. 2 1 0 ½, z. 3 2 0 ½"): the
      // item whose closing sentence names one label ("Enter the set for the
      // orbital of type (y) shown in the figure above.") is held to that
      // label's set, as the sibling fill-ins are held to their numbers.
      if (item.form === 'quantum-numbers') return judgeQuantumSet(item, unit, key, exercise, differs);
      // Several configurations to one part, each in the sentence of its
      // element ("Co has …: 1s²…3d⁷. I has …: …5p⁵", 6.4): the item whose
      // closing sentence names one element by name ("Enter the electron
      // configuration of cobalt-60.") is held to THAT one's.
      if (item.form === 'configuration') {
        const segment = elementSegment(unit.answer, askedClosing(item.question));
        if (segment !== unit.answer) {
          const held = segment.split(/:\s*/).map((piece) => chemCanon(piece.replace(/\.\s*$/, ''), 'configuration')).filter(Boolean);
          if (!held.includes(key)) {
            return { ...differs, detail: `textin keys ${JSON.stringify(item.answer)} for the element its closing sentence names, whose configuration source ${unit.id} gives in ${JSON.stringify(segment.slice(0, 120))}` };
          }
          return { status: 'confirmed', exercise };
        }
        // An atom's configuration and its ion's, or two ions', in one answer
        // ("…3p¹; Al³⁺: 1s²2s²2p⁶"; "K⁺: [Ar], Mg²⁺: [Ne]", 7.1): one item
        // each, and the item is held to the one its closing sentence names —
        // "Enter the electron configuration of the ion." keyed with the
        // atom's is refused, and so is a closing that names neither.
        const configurations = labelledConfigurations(unit.answer);
        if (configurations.length) {
          const asked = askedConfigurations(configurations, item.question, unit.stem);
          if (asked.length !== 1) {
            return { ...differs, detail: `source ${unit.id} answers ${configurations.length} configurations (${JSON.stringify(unit.answer.slice(0, 120))}); the item's closing sentence must name the one it keys ("Enter the electron configuration of the atom.", "… of the ion.", "… of the potassium ion.")` };
          }
          return asked[0].canon === key ? { status: 'confirmed', exercise }
            : { ...differs, detail: `textin keys ${JSON.stringify(item.answer)} for the configuration its closing sentence names, which source ${unit.id} prints as ${JSON.stringify(asked[0].printed)}` };
        }
      }
      // A piece the answer introduces with a colon ("Al will form a cation
      // with a charge of 3+: Al³⁺", 2.6) is also read after it.
      // A piece labelled AFTER its formula ("Mg₃Si₂H₃O₈ (empirical formula),
      // Mg₆Si₄H₆O₁₆ (molecular formula)", 3.2) is read without its label too.
      // A condition the answer repeats after its equation ("… + MnO₂(s) (in
      // base)", 4.2) is the stem's, not a species: read without it.
      const pieces = [unit.answer, ...unit.answer.split(/[,;]|\s(?:and|or)\s|\s*\.\s+(?=[A-Z])/)]
        .map((piece) => piece.trim().replace(/[.:]$/, ''))
        .flatMap((piece) => [piece, piece.replace(LABEL_AFTER, '').replace(/\s*\(in [a-z ]+\)\s*$/, '')])
        .flatMap((piece) => (piece.includes(':') ? [piece, piece.slice(piece.lastIndexOf(':') + 1).trim()] : [piece]))
        .flatMap((piece) => [piece, piece.replace(/^(?:[A-Za-z][a-z]{2,}\s+)+(?:(?:is|are)\s+)?/, '')])
        .map((piece) => chemCanon(piece, item.form)).filter(Boolean);
      // Several equations to one part (4.1): read one by one, and the item
      // whose closing sentence asks for one is held to THAT one — the net
      // ionic key under "Enter the complete ionic equation." is refused.
      const equations = item.form === 'equation' ? answerEquations(unit.answer) : [];
      pieces.push(...equations.map((entry) => entry.canon));
      // An ordering the source prints with commas ("H, C, N, O, F" for "…in
      // order of increasing electronegativity: C, F, H, N, O", 7.2): the
      // page keys it with <, first to last as printed, so the comma list is
      // read as that ordering — when its members are the stem's own, each
      // once. The reverse, or any other order, is another key.
      if (item.form === 'ordering' && !/[<>]/.test(unit.answer)) {
        const listed = unit.answer.replace(/\s*\.\s*$/, '').split(/,|\s+and\s+/).map((member) => member.replace(/^\s*and\s+/, '').trim()).filter(Boolean);
        const asked = (unit.partText ? String(unit.partText).split(/,|\s+and\s+/) : listMembers(unit.stem)).map((member) => chemCanon(member.replace(/^\s*and\s+/, '').trim(), 'formula'));
        const read = listed.length >= 2 ? chemCanon(listed.join(' < '), 'ordering') : null;
        if (read && asked.length === listed.length && [...asked].sort().join() === read.split(' < ').sort().join()) pieces.push(read);
      }
      if (!key || !pieces.includes(key)) return differs;
      if (equations.length >= 2) {
        const asked = askedEquations(equations, item.question);
        if (asked && !asked.some((entry) => entry.canon === key)) {
          return { ...differs, detail: `textin keys ${JSON.stringify(item.answer)} for the equation its closing sentence asks, which source ${unit.id} gives as ${JSON.stringify(asked[0].printed)}` };
        }
      }
      // An answer whose formulas are each labelled — before ("molecular C₂H₂,
      // empirical CH", 2.4) or after ("… (empirical formula), … (molecular
      // formula)", 3.2) — is carried as one item per formula, and the item
      // whose closing sentence names one label ("Enter the molecular
      // formula.") is keyed with THAT formula: a swapped pair is a wrong key
      // the piece-by-piece test passes.
      const labelled = labelledFormulas(unit.answer, item.form);
      const closing = ` ${foldedPlain(item.question.split(/(?<=[.?!:])\s+/).pop())} `;
      const asked = labelled.filter((entry) => entry.words.some((word) => closing.includes(` ${word} `)));
      if (asked.length && new Set(asked.map((entry) => entry.label)).size === 1 && !asked.some((entry) => entry.canon === key)) {
        return { ...differs, detail: `textin keys ${JSON.stringify(item.answer)} for the ${asked[0].label}, which source ${unit.id} gives as ${JSON.stringify(asked[0].printed)} (${JSON.stringify(unit.answer.slice(0, 120))})` };
      }
      // Two formulas listed bare ("Ba(NO₃)₂, KClO₃", 4.1), carried one item
      // per formula: the item whose closing sentence names one compound
      // ("Enter the formula of barium nitrate.") is held to the formula that
      // holds the element it names — a swapped pair is refused.
      if (item.form === 'formula' && !labelled.length) {
        const listed = [];
        for (const piece of unit.answer.split(/[,;]|\s(?:and|or)\s/)) {
          const printed = piece.trim().replace(/[.:]$/, '');
          const canon = chemCanon(printed, 'formula');
          if (canon && !listed.some((entry) => entry.canon === canon)) listed.push({ canon, printed });
        }
        const held = listed.length >= 2 ? byElement(listed, closing) ?? byCharge(listed, askedClosing(item.question)) : null;
        if (held && held[0].canon !== key) {
          return { ...differs, detail: `textin keys ${JSON.stringify(item.answer)} for the formula its closing sentence names, which source ${unit.id} gives as ${JSON.stringify(held[0].printed)}` };
        }
      }
      return { status: 'confirmed', exercise };
    }
    // A name or a word: the answer prints it, plural fold included — or
    // prints the abbreviation the module itself gives the name in
    // parentheses ("first ionization energy (IE₁)", 6.5's "O, IE₁"), read
    // through `printedAbbreviations`.
    const short = abbreviations.filter(([long]) => foldedPlain(long) === foldedPlain(item.answer)).map(([, abbreviation]) => foldedPlain(abbreviation).replace(/\s+/g, ''));
    const answer = ` ${foldedPlain(unit.answer)} `;
    if (short.length && unit.answer.split(/[,;]/).some((piece) => short.includes(foldedPlain(piece).replace(/\s+/g, '')))) return { status: 'confirmed', exercise };
    const key = foldedPlain(item.answer);
    const forms = [key, ...foldedForms(key)].filter(Boolean);
    if (!forms.some((form) => answer.includes(` ${form} `))) return differs;
    // Two named values in one answer — "electron-pair geometry: octahedral,
    // molecular structure: square pyramidal"; "The electron-pair geometry is
    // trigonal bipyramidal. The molecular structure is linear."; "Both the
    // electron geometry and the molecular structure are octahedral." (7.6)
    // — carried one text-in per value, each closing with the name it asks
    // ("Enter the molecular structure."): the item is held to THAT value, so
    // a swapped pair is refused. An angle printed after a shape ("bent
    // (109°)") is no part of its name.
    const named = labelledValues(unit.answer);
    if (named.length >= 2) {
      const asked = askedLabel(named, item.question);
      if (asked) {
        return asked.values.some((value) => [value, ...foldedForms(value)].includes(key)) ? { status: 'confirmed', exercise }
          : { ...differs, detail: `textin keys ${JSON.stringify(item.answer)} for the ${asked.label}, which source ${unit.id} answers ${JSON.stringify(asked.values.join(' or '))} (${JSON.stringify(unit.answer.slice(0, 120))})` };
      }
    }
    // A name cut short is another compound's name: "cobalt(II) chloride"
    // is printed in "cobalt(II) chloride hexahydrate" and is not its answer
    // (2.7). Where the answer is a list of names and symbols — every piece
    // between its commas and semicolons a few words, none a sentence — the
    // key is one whole piece, the article and the word "ion" aside ("Se²⁻,
    // the selenide ion" keys "selenide"). An answer in sentences is read as
    // before: there the key is a word the sentence prints.
    const pieces = unit.answer.split(/[,;]/).map((piece) => withoutArticle(piece.replace(ANGLE_AFTER, ''))).filter(Boolean);
    const listed = pieces.length > 0 && pieces.every((piece) => piece.split(' ').length <= 4);
    if (listed) {
      const whole = pieces.flatMap((piece) => [piece, piece.replace(/ ions?$/, '')]);
      if (!forms.some((form) => whole.includes(form))) {
        return { ...differs, detail: `${differs.detail} — the key is part of a longer name the answer prints` };
      }
    }
    return { status: 'confirmed', exercise };
  }
  if (item.type === 'multiplechoice' && unit.choices) {
    // One of a closed set (keyed-units.mjs `closedSet`, 3.1): the options are
    // the exercise's parts, and the key is the option that IS the part the
    // answer names — read through the part, so an option the page corrects
    // (a molar mass, with a Source note) is still its part.
    const labels = choiceLabels(unit.choices, item.options);
    const keyed = labels ? labels[item.options.findIndex((option) => compact(option) === compact(item.answer))] : undefined;
    if (keyed === unit.chosen) return { status: 'confirmed', exercise };
    const chosen = unit.choices.find((choice) => choice.label === unit.chosen);
    return {
      status: 'key-differs',
      exercise,
      detail: `source ${unit.id} answers ${JSON.stringify(unit.answer.slice(0, 140))}, naming part (${unit.chosen}) ${JSON.stringify(chosen.text)}; page keys ${JSON.stringify(item.answer)}${keyed ? `, part (${keyed})` : ''}`,
    };
  }
  // One member of an unlettered list asked yes or no (6.5, isoelectronic
  // with Br⁺): yes when the answer lists the member, no when it does not.
  const member = item.type === 'multiplechoice' ? memberAsked(unit, item.question, item) : null;
  if (member) {
    const listed = unit.answer.split(/,|\s(?:and|or)\s/).map((piece) => tightMember(piece)).filter(Boolean);
    const wanted = listed.includes(tightMember(member)) ? 'yes' : 'no';
    if (foldedPlain(item.answer) === wanted) return { status: 'confirmed', exercise };
    return { status: 'key-differs', exercise, detail: `source ${unit.id} answers ${JSON.stringify(unit.answer.slice(0, 100))}, which ${wanted === 'yes' ? 'lists' : 'does not list'} ${JSON.stringify(member)}; page keys ${JSON.stringify(item.answer)}` };
  }
  // A lettered part asked yes or no where the answer lists the parts that
  // are, by formula, in a sentence — "Only ClF₅, ClO₂⁻, PCl₃, SeF₄, and
  // PH₂⁻ have dipole moments." (7.6): yes when the list holds the part's
  // formula, no when it does not. Of several sentences, the list is the one
  // that shares the most words with the question ("…have a dipole moment?").
  const listed = item.type === 'multiplechoice' ? listedPart(unit, item) : null;
  if (listed) {
    if (foldedPlain(item.answer) === listed.wanted) return { status: 'confirmed', exercise };
    return { status: 'key-differs', exercise, detail: `source ${unit.id} answers ${JSON.stringify(listed.sentence.slice(0, 120))}, which ${listed.wanted === 'yes' ? 'lists' : 'does not list'} the part ${JSON.stringify(unit.partText)}; page keys ${JSON.stringify(item.answer)}` };
  }
  if (item.type === 'multiplechoice') {
    // Two answers that hold several choices at once, each narrowed to the
    // one THIS item asks for before the options are read against it:
    //   "Ionic: KCl, MgCl₂; Covalent: NCl₃, ICl, …" — a list sorted into the
    //   options; the item's is the option whose list holds the one member
    //   its question prints (2.6, one multiple choice per compound);
    //   "Oxidized: Sn²⁺; reduced: H₂O₂; oxidizing agent: H₂O₂; …" — one value
    //   per role; the item's is the role its closing sentence names (17.1).
    const segments = unit.answer.split(';').map((segment) => /^\s*([^:]+):\s*(.+)$/s.exec(segment)).filter(Boolean)
      .map((match) => ({ head: foldedPlain(match[1]), body: match[2].trim() }));
    let said = unit.answer;
    // …and a list sorted into the options by SENTENCES, each listing its
    // members and then their category: "P, I, Cl, and O would form anions
    // because they are nonmetals. Mg, In, Cs, Pb, and Co would form cations
    // because they are metals." (7.1, one multiple choice per member of the
    // stem's list, the member after the question's last colon): the item's
    // is the one sentence that lists its member. Its category word may be
    // another name of an option ("anions" for "negative ion"), read through
    // the module's own pairs (`moduleAliases`).
    const sorted = sortedSentence(unit, item.question);
    if (sorted) said = sorted;
    if (segments.length >= 2) {
      const asked = ` ${foldedPlain(item.question)} `;
      const sorted = segments.filter((segment) => item.options.some((option) => foldedPlain(option) === segment.head));
      const holding = sorted.filter((segment) => segment.body.split(/,|\sand\s/).map((member) => foldedPlain(member)).filter(Boolean)
        .some((member) => asked.includes(` ${member} `)));
      const closing = ` ${foldedPlain(item.question.split(/(?<=[.?!:])\s+/).pop())} `;
      const roles = segments.filter((segment) => segment.head.split(/\s*=\s*|\s{2,}/).concat(segment.head)
        .some((role) => role && closing.includes(` ${role} `)));
      if (sorted.length === segments.length && holding.length === 1) said = holding[0].head;
      else if (!sorted.length && roles.length === 1) said = roles[0].body;
    }
    // …and roles said in sentences: "Mg is oxidized, Cl₂ is reduced" (4.2,
    // under its classification); "Sn(s) is the reductant, HCl(g) is the
    // oxidant." (4.2's Check Your Learning). The item's is the one whose
    // role its closing sentence asks ("Which reactant is oxidized?").
    // The limiting reactant is said either way round: "Cr is the limiting
    // reactant." and "The limiting reactant is Cl2." (4.4).
    const ROLE = '(?:the\\s+)?(?:oxidized|reduced|oxidant|reductant|oxidizing agent|reducing agent|limiting reactant)';
    const roleClauses = [
      ...[...said.matchAll(new RegExp(`(?:^|[,;:.]\\s*)([^,;:.]+?)\\s+is\\s+(${ROLE})\\b`, 'gi'))].map((match) => ({ who: match[1], role: match[2] })),
      ...[...said.matchAll(/(?:^|[,;:.]\s*)the\s+(limiting reactant)\s+is\s+([^,;:]+?)\s*(?:[,;:]|\.(?:\s|$)|$)/gi)].map((match) => ({ who: match[2], role: match[1] })),
    ].map((clause) => ({ who: clause.who.trim(), role: foldedPlain(clause.role).replace(/^the /, '') }));
    if (roleClauses.length) {
      const closing = ` ${foldedPlain(item.question.split(/(?<=[.?!:])\s+/).pop())} `;
      const askedRoles = roleClauses.filter((clause) => closing.includes(` ${clause.role} `));
      if (askedRoles.length === 1) said = askedRoles[0].who;
    }
    const said1 = ` ${foldedPlain(said)} `;
    let named = optionsNamedIn(said1, item.options);
    // An element the answer prints as its formula and the options name in
    // words: "The limiting reactant is Cl2." to the stem's "sodium" or
    // "diatomic chlorine" (4.4) — the option that holds the element's name.
    if (named.length === 0) {
      const symbols = [...said.matchAll(/(?<![A-Za-z])([A-Z][a-z]?)(?:\s*_?\s*\d+)?(?![A-Za-z])/g)].map((match) => match[1]);
      const names = [...ELEMENT_BY_NAME].filter(([, symbol]) => symbols.includes(symbol)).map(([name]) => name);
      const holding = item.options.filter((option) => names.some((name) => ` ${foldedPlain(option)} `.includes(` ${name} `)));
      if (names.length === 1 && holding.length === 1) named = holding;
    }
    if (named.length === 0) named = optionsNamedThrough(aliases, said1, item.options);
    if (named.length === 1 && compact(named[0]) === compact(item.answer)) return { status: 'confirmed', exercise };
    if (named.length === 0) return { status: 'prose-key', exercise };
    return {
      status: 'key-differs',
      exercise,
      detail: named.length > 1
        ? `source ${unit.id} answers ${JSON.stringify(unit.answer.slice(0, 140))}, which names more than one of the options (${named.join(', ')}) — the answer is not one choice; page keys ${JSON.stringify(item.answer)}`
        : `source ${unit.id} answers ${JSON.stringify(unit.answer.slice(0, 140))}; page keys ${JSON.stringify(item.answer)}`,
    };
  }
  if (item.type === 'fillin') {
    const key = keyNumeral(item.answer);
    if (!key) return { status: 'symbolic', exercise };
    // What the fill-in is held to: the sentence of the element its closing
    // sentence names, where the answer speaks of two in turn (6.4's cobalt
    // and iodine), with the labels that are no numbers taken out — a
    // subshell's shell number ("The five degenerate 3d orbitals", 6.3) and
    // an old group label ("15 (5A)", 6.5).
    const said = numbersOnly(elementSegment(unit.answer, askedClosing(item.question)));
    // Several counts to one part, each after a letter label ("x. 2, y. 2,
    // z. 2", 6.3's three orbitals): the item whose closing sentence names
    // one label ("Enter the number for the orbital of type (x).") is held to
    // that label's number.
    const lettered = [...said.matchAll(/(?:^|[,;]\s*)([a-z])\.\s+([−–-]?\d+(?:\.\d+)?)(?=\s*(?:[,;]|$))/g)].map((match) => ({ label: match[1], numeral: printedNumerals(match[2])[0] }));
    if (new Set(lettered.map((entry) => entry.label)).size >= 2) {
      const asked = [...new Set([...askedClosing(item.question).matchAll(/\(([a-z])\)/g)].map((match) => match[1]))].filter((label) => lettered.some((entry) => entry.label === label));
      if (asked.length !== 1) {
        return { status: 'key-differs', exercise, detail: `source ${unit.id} answers one number per label (${JSON.stringify(said.slice(0, 80))}); the item's closing sentence must name the one it keys ("Enter the number for the orbital of type (x).")` };
      }
      const held = lettered.find((entry) => entry.label === asked[0]);
      return sameNumeral(held.numeral, key) ? { status: 'confirmed', exercise }
        : { status: 'key-differs', exercise, detail: `fillin keys ${JSON.stringify(item.answer)} for (${asked[0]}), which source ${unit.id} gives as ${held.numeral.printed} (${JSON.stringify(said.slice(0, 80))})` };
    }
    // A charge asked as a signed number ("Enter the charge as a signed
    // number, …") where the answer prints it only on an ion's symbol — "P:
    // [Ne]3s²3p³; P³⁻: [Ne]3s²3p⁶" under "Give the charge on the anion"
    // (7.1): the key is that superscript, sign and all, read sign-last as
    // the source prints it. Of several ions, the stem's "anion" or
    // "cation" names the sign. The digits of the configurations around it
    // are no charge.
    if (/\bcharge\b/i.test(askedClosing(item.question))) {
      const ions = [...String(unit.answer).matchAll(/(?<![A-Za-z])[A-Z][a-z]?(?:\s*_?\s*\d+)?\s*\^\s*\{?\s*(\d*)\s*([+−–-])\s*\}?/g)]
        .map((match) => Number(match[1] || 1) * (match[2] === '+' ? 1 : -1));
      const sign = /\banion\b/i.test(unit.stem) ? -1 : /\bcation\b/i.test(unit.stem) ? 1 : 0;
      const charges = [...new Set(ions.filter((charge) => !sign || Math.sign(charge) === sign))];
      if (charges.length) {
        const value = Number(`${key.negative ? '-' : ''}${key.mantissa}e${key.exponent}`);
        if (charges.length === 1 && charges[0] === value) return { status: 'confirmed', exercise };
        return { status: 'key-differs', exercise, detail: `fillin keys ${JSON.stringify(item.answer)} for the charge, which source ${unit.id} prints on its ion${charges.length > 1 ? 's' : ''} as ${charges.map((charge) => (charge > 0 ? `+${charge}` : `${charge}`)).join(' or ')} (${JSON.stringify(unit.answer.slice(0, 100))})${charges.length > 1 ? ' — the stem must say which ion' : ''}` };
      }
    }
    const printed = printedNumerals(said);
    // A formula mass asked for itself is the table's sum, exactly: the one
    // key of the book a tool can compute, so it is computed.
    const formula = elements ? massAsk(item.question, elements) : null;
    const table = formula ? molarMass(formula, elements) : null;
    if (table) {
      const sum = readNumeral(table.sum);
      if (!sameNumeral(sum, key) || sum.exponent !== key.exponent) {
        return {
          status: 'table-differs',
          exercise,
          detail: `fillin keys ${JSON.stringify(item.answer)} for the mass of ${formula}, which this book’s periodic table gives as ${table.sum} (node tools/verify/molar-mass.mjs ${JSON.stringify(formula)})`,
        };
      }
    }
    // A part answered with several NAMED numbers — "3 protons, 3 electrons,
    // 4 neutrons" — is carried as one item per number, and every one of
    // them is printed in the segment. The item whose closing sentence asks
    // for one by name ("Enter the number of neutrons.") is keyed with THAT
    // number: a swapped pair is a wrong key the printed-number test passes.
    const named = [...said.matchAll(/([−–-]?\d[\d.,]*)\s+([a-z]{4,})/gi)]
      .map((match) => ({ numeral: printedNumerals(match[1])[0], name: match[2].toLowerCase().replace(/s$/, '') }))
      .filter((entry) => entry.numeral);
    const names = [...new Set(named.map((entry) => entry.name))];
    if (names.length >= 2) {
      const ask = item.question.split(/(?<=[.?!:])\s+/).pop().toLowerCase();
      const asked = names.filter((name) => new RegExp(`\\b${name}s?\\b`).test(ask));
      if (asked.length === 1 && !named.some((entry) => entry.name === asked[0] && sameNumeral(entry.numeral, key))) {
        const given = named.filter((entry) => entry.name === asked[0]).map((entry) => entry.numeral.printed).join(' or ');
        return {
          status: 'key-differs',
          exercise,
          detail: `fillin keys ${JSON.stringify(item.answer)} for the ${asked[0]}s, which source ${unit.id} gives as ${given} (${JSON.stringify(unit.answer.slice(0, 100))})`,
        };
      }
    }
    // The same answer from other atomic masses (see ELEMENT_DATA_BOOKS).
    const allowance = /(?:^|\s)last-digit:[12](?:\s|$)/.test(String(item.form || ''));
    const declared = String(item.form || '').match(/(?:^|\s)sig-figs:(\d)(?:\s|$)/);
    // A calculation's count of figures is still the source's, set by the
    // data its stem gives. Where the stem gives no number at all, every
    // digit of the answer is the table's, and so is the count: a formula
    // mass (199.99 where the source prints 199.9976), a formula that is a
    // drawing, the mass of carbon in C₅H₁₂ (60.055 where the source, from
    // 12.01, prints 60.05). The blind solve is such a key's reader.
    const dataDiffers = (numerals) => {
      const near = elements && allowance ? dataDifference(key, numerals) : null;
      if (near && (table || statesNoNumber(item.question) || !declared || (near.numeral.sigMin <= Number(declared[1]) && Number(declared[1]) <= near.numeral.sigMax))) {
        return { status: 'data-differs', exercise, sourcePrint: near.numeral.printed, units: near.units };
      }
      return null;
    };
    // One part answered in two units ("1310 J; 313 cal", 5.1): the page
    // carries one fill-in per unit, and each is held to the number printed
    // under the unit its closing sentence names — 313 under "Enter the heat
    // in joules." is refused, and so is an item whose closing names neither.
    const units = twoUnitAnswer(unit.answer, unit.stem);
    if (units.length) {
      const asked = closingUnit(item.question);
      if (!asked || !units.includes(asked)) {
        return { status: 'key-differs', exercise, detail: `source ${unit.id} answers in ${units.join(' and ')} (${JSON.stringify(unit.answer.slice(0, 100))}); the item's closing sentence must name the one it keys ("Enter the heat in joules.")${asked ? `, and it names ${asked}` : ''}` };
      }
      const under = answerUnits(unit.answer).filter((entry) => entry.unit === asked).map((entry) => entry.numeral);
      if (!under.some((numeral) => sameNumeral(numeral, key))) {
        return dataDiffers(under)
          ?? { status: 'key-differs', exercise, detail: `fillin keys ${JSON.stringify(item.answer)} for the value in ${asked}, which source ${unit.id} gives as ${under.map((numeral) => numeral.printed).join(' or ')} (${JSON.stringify(unit.answer.slice(0, 100))})` };
      }
      const figures = String(item.form || '').match(/(?:^|\s)sig-figs:(\d)(?:\s|$)/);
      const same = under.filter((numeral) => sameNumeral(numeral, key));
      if (figures && !same.some((numeral) => numeral.sigMin <= Number(figures[1]) && Number(figures[1]) <= numeral.sigMax)) {
        return { status: 'figures-differ', exercise, detail: `fillin declares sig-figs:${figures[1]}, but source ${unit.id} prints ${JSON.stringify(same[0].printed)} in ${asked}` };
      }
      return { status: 'confirmed', exercise };
    }
    const held = heldNumber(said, item.question, key);
    // A named amount is held to ITS number: "16.31 mol BaO₂, 2762 g BaO₂"
    // answers the moles asked with 16.31, and a key of 16.30 from this
    // book's masses is a data difference from that number and no other.
    if (held) {
      return dataDiffers(held.numerals)
        ?? { status: 'key-differs', exercise, detail: `fillin keys ${JSON.stringify(item.answer)} for ${held.what}, which source ${unit.id} answers ${JSON.stringify(unit.answer.slice(0, 100))}` };
    }
    const same = printed.filter((numeral) => sameNumeral(numeral, key));
    if (!same.length) {
      // A count the source spells out: "(a) two; (b) three".
      const value = Number(`${key.negative ? '-' : ''}${key.mantissa}e${key.exponent}`);
      const spelled = numberWords(said);
      if (spelled.includes(value)) return { status: 'confirmed', exercise };
      if (!printed.length && !spelled.length) return { status: 'unkeyed', exercise };
      const differs = dataDiffers(printed);
      if (differs) return differs;
      return {
        status: 'key-differs',
        exercise,
        detail: `fillin keys ${JSON.stringify(item.answer)} but source ${unit.id} answers ${JSON.stringify(unit.answer.slice(0, 140))}`,
      };
    }
    const figures = String(item.form || '').match(/(?:^|\s)sig-figs:(\d)(?:\s|$)/);
    if (figures && !same.some((numeral) => numeral.sigMin <= Number(figures[1]) && Number(figures[1]) <= numeral.sigMax)) {
      const shown = same[0].sigMin === same[0].sigMax ? `${same[0].sigMin}` : `${same[0].sigMin}–${same[0].sigMax}`;
      return {
        status: 'figures-differ',
        exercise,
        detail: `fillin declares sig-figs:${figures[1]}, but source ${unit.id} prints ${JSON.stringify(same[0].printed)}, which shows ${shown} significant figure(s)`,
      };
    }
    return { status: 'confirmed', exercise };
  }
  // An answer that is ONLY a drawing (a Lewis structure, an orbital
  // diagram): there are no words to hold the model answer to, so it is held
  // to the picture — the selfcheck shows the source's own image
  // (docs/subjects/chemistry.md "Figures"). Words beside an image are
  // judged as words; an image table is transcribed, not shown.
  // A part's own formula printed as the drawing's label ("SeF₆: [structure]";
  // "Cl₂BBCl₂: [structure]" for the part "Cl₂BBCl₂ (contains a B–B bond)",
  // 7.3) is no word of the answer: the drawing is.
  const labelOnly = unit.partText && /:\s*$/.test(unit.answer) && tightMember(unit.answer.replace(/:\s*$/, '')) === tightMember(unit.partText.replace(/\([^)]*\)/g, ''));
  if ((!unit.answer.trim() || labelOnly) && (unit.answerMedia || []).length) {
    const missing = unit.answerMedia.filter((file) => !(item.figures || []).includes(file));
    return missing.length
      ? { status: 'key-differs', exercise, detail: `source ${unit.id} answers with a drawing (${missing.join(', ')}) that the selfcheck's model answer does not show` }
      : { status: 'confirmed', exercise };
  }
  let judged = judgeSelfcheck(item, {
    checkQuestions: null,
    exercises: [{ id: unit.id, problem: item.question, solution: unit.answer, options: [] }],
  });
  // A model answer that prints the source's equations in the book's print
  // ("Mg(OH)₂(s) + 2HClO₄(aq) ⟶ …" for the source's "Mg (OH) 2 ( s ) + 2
  // HClO 4 ( a q ) ⟶ …", 4.2) is read with both sides folded as the part
  // matcher folds them (`plain`): formulas, charges, and states then read alike.
  if (judged.status === 'diverges') {
    // …and its display math read as what it prints (`texAsText`): a source's
    // derivation set as `$$\begin{array}…\ce{…}…$$` (7.5's H–Cl cycle).
    const folded = judgeSelfcheck({ ...item, model: foldedPlain(texAsText(item.model)) }, {
      checkQuestions: null,
      exercises: [{ id: unit.id, problem: item.question, solution: foldedPlain(unit.answer), options: [] }],
    });
    if (folded.status === 'verbatim' || folded.status === 'reworded') judged = folded;
  }
  // The WORD of an answer whose other pieces are quantities the fill-ins
  // above it key ("ν = …; λ = 656.3 nm; …; red", 6.1's surgical laser; the
  // cesium lines' "The color of (a) is red; (b) is blue."): a selfcheck that
  // carries only the word ("The color of the emitted light is red.") is the
  // source's answer for the piece it asks. Held to that piece: every word of
  // the model answer that the question does not print must be one the
  // part's own answer prints — a sibling's "(a) is red" set aside, its own
  // "(b) is blue" fetched from the sibling segment that holds it.
  if (item.type === 'selfcheck') {
    const own = carriedWord(unit, units, item);
    if (own && judged.status === 'diverges') return { status: 'reworded', exercise, coverage: judged.coverage, detail: `the word "${own}" of a multi-quantity answer, the quantities keyed by the fill-ins` };
    // A part's segment that also answers a sibling ("(b) … The color of (a)
    // is red; (b) is blue."): a model answer carrying the sibling's word and
    // not its own is the sibling's answer, however many words it shares.
    const theirs = unit.label ? [...String(unit.answer).matchAll(new RegExp(`\\((?!${unit.label}\\))[a-z]\\)\\s+is\\s+([^;.]+)`, 'g'))].map((match) => foldedPlain(match[1])) : [];
    if (!own && theirs.some((word) => ` ${foldedPlain(item.model)} `.includes(` ${word} `))) {
      return { status: 'key-differs', exercise, detail: `the model answer gives a sibling part's answer (${theirs.join(', ')}); source ${unit.id} answers ${JSON.stringify(unit.answer.slice(0, 120))}` };
    }
  }
  // A model answer that prints an equation the source does not — 4.2's
  // corrected "Na₂CO₃ + H₂S ⟶ NaHS + NaHCO₃" for the source's "… ⟶ Na₂S +
  // CO₂ + H₂O" — is a correction however many of its words the source shares
  // (the reactants alone carried it past the floor): it needs its disclosure.
  if ((judged.status === 'verbatim' || judged.status === 'reworded') && item.type === 'selfcheck') {
    const theirs = answerEquations(unit.answer).map((entry) => entry.canon);
    const foreign = theirs.length ? answerEquations(item.model).filter((entry) => !theirs.includes(entry.canon)) : [];
    if (foreign.length) {
      return { status: 'diverges', exercise, coverage: judged.coverage, detail: `the model answer prints ${JSON.stringify(foreign[0].printed)}, an equation source ${unit.id} does not print (${JSON.stringify(unit.answer.slice(0, 120))})` };
    }
  }
  // A name AND a drawing ("ethanol [structure]", 2.4): the model answer is
  // the source's words, the source's image, and the one or two sentences the
  // playbook has the author write about the drawing ("Figures") — sentences
  // no source solution prints, which read as a model answer that diverges.
  // Held to both halves instead: the part's own image shown (never a
  // sibling's), and the source's words carried whole.
  if ((unit.answerMedia || []).length && item.type === 'selfcheck') {
    const missing = unit.answerMedia.filter((file) => !(item.figures || []).includes(file));
    if (missing.length) return { status: 'key-differs', exercise, detail: `source ${unit.id} answers with a drawing (${missing.join(', ')}) that the selfcheck's model answer does not show` };
    if (judged.status === 'diverges' && phraseCoverage(unit.answer, item.model) >= 0.95) {
      return { status: 'reworded', exercise, coverage: judged.coverage, detail: 'source words carried whole beside the source\'s drawing' };
    }
  }
  // A simulation exercise answered part by part for ONE choice the learner
  // could have made otherwise (2.3's Build an Atom: "(a) Carbon-12, ¹²C; (b)
  // This atom contains six protons … (e) … Other answers for this exercise
  // are possible if a different element or isotope is chosen."). "Answers
  // vary" is said once, for the exercise; each part's model answer takes the
  // varying-answer form — what any good answer contains, then "Sample
  // answer:" and the part's own segment carried whole.
  if (judged.status === 'diverges' && item.type === 'selfcheck' && /\bSample answer:/.test(item.model)
    && VARYING_EXERCISE_RE.test(units.filter((other) => other.group === unit.group).map((other) => other.answer).join(' '))
    // The sentence that says so belongs to the exercise, not to the part it
    // happens to close: the part's sample is its segment without it.
    && sampleCarried(unit.answer, item.model)) {
    return { status: 'reworded', exercise, coverage: judged.coverage, detail: 'varying-answer exercise: the part\'s sample carried whole in the model answer' };
  }
  // "Write a set of quantum numbers for …" (6.3): the QUESTION asks for a
  // set, one of many, and the source answers with one and says nothing of the
  // others. The same form — what every correct set has, then "Sample
  // answer:" and the source's set whole — so the rubric is the criteria and
  // not the source's own rows, which only the source's set can meet.
  if (judged.status === 'diverges' && item.type === 'selfcheck' && /\bSample answer:/.test(item.model)
    && ASKS_FOR_A_SET_RE.test(item.question) && sampleCarried(unit.answer, item.model)) {
    return { status: 'reworded', exercise, coverage: judged.coverage, detail: 'a "write a set of" exercise: the source\'s set carried whole as the sample in the model answer' };
  }
  return { ...judged, exercise };
}

/* ---- corpus walk ---------------------------------------------------------- */

/** Biology and Microbiology only — every math book's content lives outside
 * this prefix, and the body-print gate below is a life-sciences rule
 * (docs/subjects/life-sciences.md's textin provenance rules, not the math
 * fillin rules). */
/**
 * Items whose mere presence answers another item, and are not held back.
 *
 * "State whether the compound is ionic or covalent. If it is ionic, write the
 * symbols for the ions involved" (Chemistry 2.6): every lettered part gets the
 * same multiple choice, and only the parts the source answers one way get
 * further items — there is nothing further to key on the others ("grade only
 * what the source keys"). Left in the open, the further items stand under
 * those parts alone and give the multiple choice away before it is asked.
 * They belong in a `followup` directly after their part's multiple choice,
 * which shows them once it is answered.
 *
 * `records` are one page's items that transcribe a keyed unit:
 * `{ group, unit, type, line, options, followup }`. The shape is read
 * narrowly, so that an exercise whose parts simply ask different things is
 * left alone: two or more parts, each with exactly one multiple choice, all
 * with the same options, and further items under some parts but not all.
 * Returns the further items that are not inside a followup.
 */
export function conditionalUnwrapped(records) {
  const groups = new Map();
  for (const record of records) {
    if (!groups.has(record.group)) groups.set(record.group, new Map());
    const parts = groups.get(record.group);
    if (!parts.has(record.unit)) parts.set(record.unit, { choices: [], further: [] });
    // The part's FIRST multiple choice is the one every part is asked; any
    // item after it is further — a followup may hold a multiple choice of its
    // own ("Which reactant is oxidized?" under 4.2's redox parts).
    const part = parts.get(record.unit);
    (record.type === 'multiplechoice' && !part.choices.length ? part.choices : part.further).push(record);
  }
  const offenders = [];
  for (const [group, byPart] of groups) {
    const parts = [...byPart.values()];
    if (parts.length < 2 || !parts.every((part) => part.choices.length === 1)) continue;
    const optionSets = new Set(parts.map((part) => JSON.stringify([...(part.choices[0].options || [])].sort())));
    if (optionSets.size !== 1) continue;
    const withFurther = parts.filter((part) => part.further.length > 0);
    if (withFurther.length === 0 || withFurther.length === parts.length) continue;
    for (const part of withFurther) {
      for (const item of part.further) {
        if (item.followup) continue;
        offenders.push({
          line: item.line,
          detail: `this ${item.type} stands under only ${withFurther.length} of the ${parts.length} parts of source ${group} that the page asks the same multiple choice of, so its presence gives that multiple choice away`
            + '\n    wrap it, with the part\'s other further items, in {{< followup >}} … {{< /followup >}} directly after the part\'s multiplechoice (docs/subjects/chemistry.md, "Exercises")',
        });
      }
    }
  }
  return offenders.sort((a, b) => a.line - b.line);
}

export const isLifeSciencesPage = (localPath) => localPath.startsWith('content/life-health-sciences/');

export function checkCorpus(repositoryRoot, { contentRoot = 'content', verbose = false, register = 'check' } = {}) {
  const lock = loadSourceLock(repositoryRoot);
  const map = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-map.json'), 'utf8'));
  const prefix = contentRoot.replace(/\/+$/, '') + '/';
  const sections = map.sections.filter((section) => (section.localPath + '/').startsWith(prefix) || contentRoot === 'content');

  const counts = {
    multiplechoice: { confirmed: 0, disclosed: 0, unmatched: 0, 'prose-key': 0, unkeyed: 0 },
    textin: { glossary: 0, 'glossary-completed': 0, term: 0, summary: 0, body: 0 },
    selfcheck: { verbatim: 0, reworded: 0, disclosed: 0, unmatched: 0, unkeyed: 0 },
    sortbins: { confirmed: 0, disclosed: 0, unmatched: 0 },
    fillin: { confirmed: 0, disclosed: 0, unmatched: 0, figure: 0, unkeyed: 0, symbolic: 0 },
  };
  const failures = [];
  const notes = [];
  const verdicts = [];
  const used = new Set();
  // Keys that part from the source's print by the atomic masses behind them
  // (ELEMENT_DATA_BOOKS): the rows of the register.
  const differences = [];
  let elementData = null;
  const deviationFor = (page, exercise) => DISCLOSED_DEVIATIONS.find(
    (entry) => entry.page === page && entry.exercise === exercise,
  );

  // A bundle with no checkout directory at all is skipped wholesale (see the
  // header); its sections are tallied here, keyed by bundle, so the caller can
  // say exactly what went unread. A present checkout is read in full. Every
  // absent bundle is named, even one with no mapped section yet (a
  // scaffolded book): the skip line is how a CI run says the bundle was not
  // there, and silence would read as "read and clean".
  const skipped = {};
  for (const bundleKey of lock.bundleKeys) {
    if (!existsSync(bundleSourceDirectory(repositoryRoot, lock, bundleKey))) skipped[bundleKey] = 0;
  }
  const checked = [];
  for (const section of sections) {
    if (section.bundle in skipped) skipped[section.bundle] += 1;
    else checked.push(section);
  }

  for (const section of checked) {
    const pagePath = path.join(repositoryRoot, section.localPath);
    const modulePath = path.join(
      bundleSourceDirectory(repositoryRoot, lock, section.bundle),
      'modules', section.moduleId, 'index.cnxml',
    );
    if (!existsSync(pagePath)) {
      failures.push({ page: section.localPath, line: 0, detail: 'mapped page is missing' });
      continue;
    }
    if (!existsSync(modulePath)) {
      failures.push({ page: section.localPath, line: 0, detail: `pinned module ${section.moduleId} is not checked out at ${path.relative(repositoryRoot, modulePath)}` });
      continue;
    }
    const moduleXml = readFileSync(modulePath, 'utf8');
    const source = readModule(moduleXml);
    // A keyed-only book's items are read against the unit each transcribes
    // first (an exercise part and its own answer segment); only an item that
    // transcribes no unit falls through to the ordinary judges below.
    const units = KEYED_ONLY_BOOKS.includes(section.book) ? keyedUnits(moduleXml) : null;
    const aliases = units ? moduleAliases(moduleXml) : [];
    const abbreviations = units ? printedAbbreviations(moduleXml) : [];
    const elements = ELEMENT_DATA_BOOKS.includes(section.book) ? (elementData ??= loadElements(repositoryRoot)) : null;
    const pageMarkdown = readFileSync(pagePath, 'utf8');
    const differencesBefore = differences.length;
    // This page's items by the unit each transcribes, for `conditionalUnwrapped`.
    const shape = [];
    for (const item of pageItems(pageMarkdown)) {
      const where = `${section.localPath}:${item.line}`;
      // A sortbins that sorts a lettered exercise's parts is read against
      // that exercise (`judgeKeyedSortbins`); any other falls through to
      // `judgeSortbins`'s table reading below.
      const keyedVerdict = !units ? null
        : item.type === 'sortbins' ? judgeKeyedSortbins(item, units, { aliases })
          : judgeKeyedUnit(item, units, { aliases, elements, abbreviations });
      if (keyedVerdict) {
        // A key the book corrects on purpose stays a disclosed correction,
        // with its erratum, however near the source's print it lands.
        const status = keyedVerdict.status === 'data-differs' && deviationFor(section.localPath, keyedVerdict.exercise.id)?.kind === 'key'
          ? 'key-differs' : keyedVerdict.status;
        shape.push({
          group: keyedVerdict.exercise.group, unit: keyedVerdict.exercise.id,
          type: item.type, line: item.line, options: item.options, followup: Boolean(item.followup),
        });
        verdicts.push({ page: section.localPath, line: item.line, type: item.type, status });
        if (status === 'table-differs') {
          failures.push({ page: section.localPath, line: item.line, detail: keyedVerdict.detail });
        } else if (status === 'data-differs') {
          counts.fillin.dataDiffers = (counts.fillin.dataDiffers ?? 0) + 1;
          differences.push({
            page: section.localPath, exercise: keyedVerdict.exercise.id, key: item.answer,
            sourcePrint: keyedVerdict.sourcePrint, units: keyedVerdict.units,
          });
          notes.push(`${where} fillin keys ${item.answer} from this book’s atomic masses; the source prints ${keyedVerdict.sourcePrint}`);
        } else if (['key-differs', 'figures-differ', 'diverges', 'unkeyed-unit'].includes(status)) {
          const deviation = status === 'unkeyed-unit' ? null : deviationFor(section.localPath, keyedVerdict.exercise.id);
          const wanted = status === 'diverges' ? 'solution' : 'key';
          if (deviation && deviation.kind === wanted) {
            used.add(deviation);
            // A text-in's tally is summed whole into the confirmed count, so
            // its disclosed corrections are counted beside it, not in it.
            if (item.type === 'textin') counts.textinDisclosed = (counts.textinDisclosed ?? 0) + 1;
            else counts[item.type].disclosed += 1;
            notes.push(`${where} keys against the source on purpose (erratum ${deviation.erratum})`);
          } else {
            failures.push({
              page: section.localPath,
              line: item.line,
              detail: status === 'unkeyed-unit' ? keyedVerdict.detail
                : `${keyedVerdict.detail}\n    an intended correction needs an errata entry and a DISCLOSED_DEVIATIONS line (kind ${JSON.stringify(wanted)})`,
            });
          }
        } else {
          counts[item.type][status] = (counts[item.type][status] || 0) + 1;
          if (!['confirmed', 'verbatim', 'reworded'].includes(status)) notes.push(`${where} ${item.type} ${status}: ${item.question.slice(0, 80)}`);
        }
        continue;
      }
      if (item.type === 'multiplechoice') {
        const verdict = judgeMultipleChoice(item, source);
        if (verdict.status === 'key-differs' || verdict.status === 'options-differ') {
          const deviation = deviationFor(section.localPath, verdict.exercise.id);
          const wanted = verdict.status === 'key-differs' ? 'key' : 'options';
          if (deviation && deviation.kind === wanted) {
            used.add(deviation);
            // A text-in's tally is summed whole into the confirmed count, so
            // its disclosed corrections are counted beside it, not in it.
            if (item.type === 'textin') counts.textinDisclosed = (counts.textinDisclosed ?? 0) + 1;
            else counts[item.type].disclosed += 1;
            notes.push(`${where} keys against the source on purpose (erratum ${deviation.erratum})`);
          } else {
            failures.push({
              page: section.localPath,
              line: item.line,
              detail: `${verdict.detail}\n    an intended correction needs an errata entry and a DISCLOSED_DEVIATIONS line (kind ${JSON.stringify(wanted)})`,
            });
          }
        } else {
          counts[item.type][verdict.status] += 1;
          if (verdict.status !== 'confirmed') notes.push(`${where} ${item.type} ${verdict.status}: ${item.question.slice(0, 80)}`);
        }
      } else if (item.type === 'fillin') {
        const verdict = judgeFillin(item, source);
        verdicts.push({ page: section.localPath, line: item.line, type: 'fillin', status: verdict.status });
        if (verdict.status === 'key-differs') {
          const deviation = deviationFor(section.localPath, verdict.exercise.id);
          if (deviation && deviation.kind === 'key') {
            used.add(deviation);
            counts.fillin.disclosed += 1;
            notes.push(`${where} keys against the source solution on purpose (erratum ${deviation.erratum})`);
          } else {
            failures.push({
              page: section.localPath,
              line: item.line,
              detail: `${verdict.detail}\n    an intended correction needs an errata entry and a DISCLOSED_DEVIATIONS line (kind "key")`,
            });
          }
        } else {
          counts.fillin[verdict.status] += 1;
          if (verdict.status !== 'confirmed') notes.push(`${where} fillin ${verdict.status}: ${item.question.slice(0, 80)}`);
        }
      } else if (item.type === 'textin') {
        const verdict = judgeTextin(item, source);
        if (verdict.status === 'unsourced') failures.push({ page: section.localPath, line: item.line, detail: verdict.detail });
        else counts.textin[verdict.status] += 1;
        // Life-sciences only (content/life-health-sciences/…): a textin keyed
        // to a source Fill in the Blank whose word the module BODY never
        // prints — only the exercise's own <solution> does — leaves a
        // body-reading learner with no way to recover it. See
        // docs/subjects/life-sciences.md, "Text recall" ("A `textin` key is
        // printed in the module's BODY") and tools/verify/measure-body-keys.mjs,
        // whose corpus measurement this promotes.
        if (isLifeSciencesPage(section.localPath)) {
          const badExercise = unprintableFillInTheBlank(item, source);
          if (badExercise) {
            failures.push({
              page: section.localPath,
              line: item.line,
              detail: `textin keys ${JSON.stringify(item.answer)} to Fill in the Blank ${badExercise.id}, whose word the module body never prints (only its own <solution> does)`
                + '\n    render as multiplechoice, see the playbook (docs/subjects/life-sciences.md, "Text recall")',
            });
          }
        }
      } else if (item.type === 'sortbins') {
        const verdict = judgeSortbins(item, source);
        if (verdict.status === 'assignment-differs') {
          const deviation = deviationFor(section.localPath, verdict.table.id);
          if (deviation && deviation.kind === 'assignment') {
            used.add(deviation);
            counts.sortbins.disclosed += 1;
            notes.push(`${where} bins against the source table on purpose (erratum ${deviation.erratum})`);
          } else {
            failures.push({
              page: section.localPath,
              line: item.line,
              detail: `${verdict.detail}\n    an intended correction needs an errata entry and a DISCLOSED_DEVIATIONS line (kind "assignment")`,
            });
          }
        } else {
          counts.sortbins[verdict.status] += 1;
          if (verdict.status !== 'confirmed') notes.push(`${where} sortbins ${verdict.status}: ${item.question.slice(0, 80)}`);
        }
      } else {
        const verdict = judgeSelfcheck(item, source);
        if (verdict.status === 'diverges') {
          const deviation = deviationFor(section.localPath, verdict.exercise.id);
          if (deviation && deviation.kind === 'solution') {
            used.add(deviation);
            counts.selfcheck.disclosed += 1;
            notes.push(`${where} model answer corrects the source solution on purpose (erratum ${deviation.erratum})`);
          } else {
            failures.push({
              page: section.localPath,
              line: item.line,
              detail: `${verdict.detail}\n    an intended correction needs an errata entry and a DISCLOSED_DEVIATIONS line (kind "solution")`,
            });
          }
        } else {
          counts.selfcheck[verdict.status] += 1;
          if (verdict.status !== 'verbatim') notes.push(`${where} selfcheck ${verdict.status}${verdict.coverage != null ? ` (coverage ${verdict.coverage.toFixed(2)})` : ''}: ${item.question.slice(0, 80)}`);
        }
      }
    }
    for (const offender of conditionalUnwrapped(shape)) {
      failures.push({ page: section.localPath, line: offender.line, detail: offender.detail });
    }
    // A page whose keys part from the source's print by the data says so,
    // once, and a page that says so has such keys.
    if (elements) {
      const rows = differences.length - differencesBefore;
      const says = pageMarkdown.includes(DATA_SOURCE_NOTE);
      if (rows && !says) {
        failures.push({ page: section.localPath, line: 0, detail: `${rows} key(s) differ from the source’s print by the atomic masses behind them, and the page does not say so — under \`## Practice\`, a paragraph opening ${JSON.stringify(DATA_SOURCE_NOTE)}` });
      } else if (!rows && says) {
        failures.push({ page: section.localPath, line: 0, detail: 'the page carries the Source note on atomic masses under `## Practice`, but no key of the page differs from the source’s print that way — drop the paragraph' });
      }
    }
  }

  // The register: every data difference a run computes is a reviewed row,
  // and every row on a page that was read is one the run computed.
  if (register === 'check') {
    const pagesRead = new Set(checked.map((section) => section.localPath));
    const recorded = new Map(readDataRegister(repositoryRoot).filter((row) => pagesRead.has(row.page)).map((row) => [registerKey(row), row]));
    const computed = new Map(differences.map((row) => [registerKey(row), row]));
    for (const [key, row] of computed) {
      if (!recorded.has(key)) {
        failures.push({ page: row.page, line: 0, detail: `${row.exercise}: the key ${row.key} stands ${row.units} unit(s) of the last place from the source’s ${JSON.stringify(row.sourcePrint)}, and ${DATA_REGISTER} does not list it — check the key against this book’s periodic table, then run verify-source-keys with --write-register` });
      }
    }
    for (const [key, row] of recorded) {
      if (!computed.has(key)) {
        failures.push({ page: row.page, line: 0, detail: `${DATA_REGISTER} lists ${row.exercise} (key ${row.key}, source ${JSON.stringify(row.sourcePrint)}) but the page no longer differs from the source that way — rewrite the register with --write-register` });
      }
    }
  }

  // Only a page that was actually read against its module can prove an entry
  // stale; a deviation on a skipped bundle's page is neither used nor stale.
  for (const deviation of DISCLOSED_DEVIATIONS) {
    if (!used.has(deviation) && checked.some((section) => section.localPath === deviation.page)) {
      failures.push({
        page: deviation.page,
        line: 0,
        detail: `DISCLOSED_DEVIATIONS lists ${deviation.exercise} (erratum ${deviation.erratum}) but the page now agrees with the source there — drop the stale entry`,
      });
    }
  }

  const confirmed = counts.multiplechoice.confirmed
    + Object.values(counts.textin).reduce((a, b) => a + b, 0)
    + counts.selfcheck.verbatim + counts.selfcheck.reworded
    + counts.sortbins.confirmed
    + counts.fillin.confirmed;
  return {
    counts, confirmed, failures, notes: verbose ? notes : [],
    // Every fill-in's judgment, for solve-check's residual: the items neither
    // verify-answers nor this gate could read are the ones a solver answers.
    verdicts,
    // How many listed deviations an item exercised. One deviation may cover
    // several items — the three aluminum masses of Chemistry 3.25 are one
    // unlettered exercise and one erratum — so the item count in
    // `counts.*.disclosed` can exceed it.
    deviationsExercised: used.size,
    differences,
    pagesRead: checked.map((section) => section.localPath),
    sections: checked.length,
    skipped,
    sectionsSkipped: Object.values(skipped).reduce((a, b) => a + b, 0),
  };
}

/** The lines a run prints about the bundles it could not read: one per
 * absent checkout, naming the sections it covers and the command that fetches
 * it. Empty when every bundle was present. */
export function skipLines(repositoryRoot, lock, skipped) {
  return Object.entries(skipped).map(([bundle, count]) => {
    const dir = path.relative(repositoryRoot, bundleSourceDirectory(repositoryRoot, lock, bundle));
    return `⊘ ${count} mapped section(s) skipped: bundle ${bundle} is not checked out at ${dir}/ `
      + `(run npm run source:fetch -- --bundle ${bundle})`;
  });
}

/** The one-line summary. A complete run prints the count in the shape
 * `tools/verify/baselines.mjs` reads (`source-key cross-check: N keyed
 * answers confirmed against the pinned CNXML`); a run that skipped a bundle
 * deliberately breaks that shape with a "(partial…)" marker so
 * `npm run baseline:update` refuses to read a partial count as the baseline. */
export function summaryLine({ counts, confirmed, failures, sections, sectionsSkipped }) {
  const mc = counts.multiplechoice;
  const textin = Object.values(counts.textin).reduce((a, b) => a + b, 0);
  const selfcheck = counts.selfcheck.verbatim + counts.selfcheck.reworded;
  const sortbins = counts.sortbins ?? { confirmed: 0, disclosed: 0, unmatched: 0 };
  const fillin = counts.fillin ?? { confirmed: 0, disclosed: 0, unmatched: 0, figure: 0, unkeyed: 0, symbolic: 0 };
  const unkeyed = (counts.selfcheck.unkeyed ?? 0) + (mc.unkeyed ?? 0);
  const scope = sectionsSkipped
    ? ` (partial: ${sectionsSkipped} of ${sections + sectionsSkipped} mapped sections skipped, no checkout)`
    : '';
  return `${failures.length ? '✖' : sectionsSkipped ? '⊘' : '✓'} source-key cross-check${scope}: `
    + `${confirmed} keyed answers confirmed against the pinned CNXML across ${sections} mapped sections `
    + `(multiplechoice ${mc.confirmed}, textin ${textin}, selfcheck ${selfcheck}, sortbins ${sortbins.confirmed}, fillin ${fillin.confirmed}); `
    + `${mc.disclosed + (counts.textinDisclosed ?? 0) + counts.selfcheck.disclosed + sortbins.disclosed + fillin.disclosed} disclosed correction(s); ${mc.unmatched + counts.selfcheck.unmatched + sortbins.unmatched + fillin.unmatched} unmatched to any source exercise; `
    + `${mc['prose-key']} prose-keyed; ${unkeyed} matched to an unkeyed source question; `
    + `fillin ${fillin.figure ?? 0} figure-only, ${fillin.unkeyed} unkeyed, ${fillin.symbolic} symbolic; ${failures.length} failure(s)`;
}

/* ---- CLI ------------------------------------------------------------------ */

// Set by CI (after it fetches the pinned checkouts) to turn an absent-bundle
// skip into a failure — see the header comment.
const REQUIRE_SOURCES = Boolean(process.env.ATHENAEUM_REQUIRE_SOURCES);

if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) {
  let contentRoot;
  let verbose;
  let minConfirmed;
  let writeRegister;
  try {
    const cli = parseCliArgs(process.argv.slice(2), {
      valueFlags: ['min-confirmed'],
      boolFlags: ['verbose', 'write-register'],
      positional: { max: 1, name: 'content root' },
    });
    contentRoot = cli.positional[0] ?? 'content';
    verbose = cli.bool('verbose');
    writeRegister = cli.bool('write-register');
    minConfirmed = integerFlag(cli, 'min-confirmed');
  } catch (error) {
    console.error(`verify-source-keys: ${error.message}`);
    console.error('usage: node tools/verify/verify-source-keys.mjs [content-root] [--min-confirmed N] [--verbose] [--write-register]');
    process.exit(2);
  }

  const repositoryRoot = process.cwd();
  const result = checkCorpus(repositoryRoot, { contentRoot, verbose, register: writeRegister ? 'ignore' : 'check' });
  const { confirmed, failures, notes, skipped, sectionsSkipped } = result;
  if (writeRegister) {
    const rows = writeDataRegister(repositoryRoot, result.differences, result.pagesRead);
    console.log(`✓ wrote ${DATA_REGISTER}: ${rows} key(s) that differ from the source’s print by the atomic masses behind them`);
  }

  for (const { page, line, detail } of failures) console.error(`✗ ${page}${line ? `:${line}` : ''}\n    ${detail}`);
  for (const note of notes) console.log(`    · ${note}`);
  for (const line of skipLines(repositoryRoot, loadSourceLock(repositoryRoot), skipped)) console.error(line);

  console.log(summaryLine(result));
  if (result.differences.length) {
    console.log(`  · ${result.differences.length} fill-in key(s) stand a unit or two from the source’s print by the atomic masses behind them (${DATA_REGISTER})`);
  }

  if (sectionsSkipped) {
    if (REQUIRE_SOURCES) {
      console.error(`✖ source-key cross-check: ${Object.keys(skipped).length} bundle(s) not checked out `
        + `(${Object.keys(skipped).join(', ')}) and ATHENAEUM_REQUIRE_SOURCES is set — run npm run source:fetch`);
      process.exit(1);
    }
    if (minConfirmed !== null) {
      console.error(`  · --min-confirmed ${minConfirmed} not applied: the count above is partial; `
        + 'fetch every bundle before recording or checking a baseline');
    }
    process.exit(failures.length ? 1 : 0);
  }

  if (minConfirmed !== null && confirmed < minConfirmed) {
    console.error(`✖ source-key cross-check confirmed ${confirmed} answers, below the --min-confirmed floor of ${minConfirmed}`);
    console.error('  · coverage shrank: a page or module this tool used to read is no longer matched');
    console.error('  · a deliberate drop? `npm run baseline:update -- --allow-decrease` moves the floor');
    process.exit(1);
  }
  if (minConfirmed !== null && confirmed > minConfirmed) {
    console.error(`✖ source-key cross-check confirmed ${confirmed} answers, above the recorded baseline of ${minConfirmed}`);
    console.error('  · coverage grew: record it with `npm run baseline:update` and commit the rewrite');
    process.exit(1);
  }
  process.exit(failures.length ? 1 : 0);
}
