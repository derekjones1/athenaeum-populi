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
 *                   source and is counted, not judged
 *
 *   sortbins        the bins must name a source table's data columns, and no
 *                   item may read better under a different column than the
 *                   one it is keyed to; a config matching no table is
 *                   counted as unmatched, not judged
 *
 * A page item whose question matches no source exercise is COUNTED as
 * unmatched, never failed and never silently dropped, exactly as
 * verify-answers counts a prompt class it cannot read: on a prose page that is
 * an author-written item (legitimate, disclosed in the ledger and the footer);
 * on a math page it is a multiplechoice converted from a source fill-in, whose
 * value verify-answers and the ledger already cover.
 *
 * A key the page changes ON PURPOSE (the module's own text contradicts the
 * source key; see docs/subjects/biology.md, "A source key that the module's
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
 * therefore skipped — every one of its sections counted and named on stderr,
 * never failed — while a checkout that IS present is held to the full rule,
 * so a module missing from a real checkout is still a failure. A run that
 * skipped anything prints its count in a shape the baseline rewriter does
 * not read and applies no `--min-confirmed` floor: a partial count is not a
 * baseline, and a skipped gate must never look like a passed one.
 *
 * Usage: node tools/verify/verify-source-keys.mjs [content-root] [--min-confirmed N] [--verbose]
 *
 * `--min-confirmed N` fails the run when the confirmed count is not EXACTLY N
 * (the verify-answers ratchet: below is shrinking coverage, above is an
 * unrecorded gain; `npm run baseline:update` records either deliberately).
 */

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import {
  parseXml, descendants, elementChildren, firstElement, textContent, localName,
  normalizeText, normalizeWhitespace, tokenSimilarity, phraseCoverage,
  loadSourceLock, bundleSourceDirectory,
} from '../lib/openstax-source.mjs';
import { shortcodes } from '../lib/content.mjs';
import { parseSortbinsConfig } from '../../assets/js/lib/text/check-sortbins.mjs';

/** A page question must share this much of a source problem's vocabulary to
 * count as a transcription of it; below this it is an author-written item. */
export const MATCH_FLOOR = 0.5;

/** The share of a self-check model answer's tokens that must come from the
 * source solution. A half of a two-part solution scores 1; the light
 * reformattings the biology playbook allows score ≥ 0.8; a model answer that
 * brings its own claims falls well under. */
export const MODEL_COVERAGE_FLOOR = 0.7;

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
    page: 'content/life-health-sciences/biology/46-ecosystems/02-energy-flow-through-ecosystems.md',
    exercise: 'fs-idm130633648',
    kind: 'key',
    erratum: 298,
    reason: 'source keys "chemoautotrophs" as the term that encompasses all organisms that make their own food using inorganic molecules, but the module\'s own text says "Photosynthetic and chemosynthetic organisms are both grouped into a category known as autotrophs: organisms capable of synthesizing their own food (more specifically, capable of using inorganic carbon as a carbon source)"; chemoautotrophs is the subset that excludes the photoautotrophs; the page keys "autotrophs"',
  },
]);

/* ---- source side ---------------------------------------------------------- */

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
  const exercises = descendants(document, (node) => localName(node) === 'exercise').map((exercise) => {
    const problem = firstElement(exercise, 'problem');
    const solution = firstElement(exercise, 'solution');
    const list = problem ? descendants(problem, (node) => localName(node) === 'list')[0] : null;
    const options = list ? elementChildren(list, 'item').map((item) => normalizeWhitespace(textContent(item))) : [];
    const solutionText = solution ? proseOf(solution, { withLists: true }) : '';
    return {
      id: exercise.attributes.id || '',
      problem: problem ? proseOf(problem, { withLists: false }) : '',
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
  return {
    exercises,
    glossary: new Set(glossary),
    terms: new Set(terms),
    tables,
    summary: summarySections.length
      ? ` ${normalizeText(summarySections.map((node) => textContent(node)).join(' '))} `
      : '',
    text: ` ${normalizeText(textContent(document))} `,
  };
}

/* ---- page side ------------------------------------------------------------ */

export function pageItems(markdown) {
  const items = [];
  for (const sc of shortcodes(markdown, 'multiplechoice')) {
    items.push({
      type: 'multiplechoice',
      line: lineOf(markdown, sc.index),
      question: sc.params.question || '',
      answer: sc.params.answer || '',
      options: sc.inner.split('\n').map((line) => line.trim()).filter(Boolean),
    });
  }
  for (const sc of shortcodes(markdown, 'textin')) {
    items.push({
      type: 'textin',
      line: lineOf(markdown, sc.index),
      question: sc.params.question || '',
      answer: sc.params.answer || '',
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
      line: lineOf(markdown, sc.index),
      question: sc.params.question || '',
      // The optional ===CHECKS=== tail holds rubric checkpoints — clauses of
      // the model answer restated for self-marking. Judging reads the model
      // part only: the checkpoints repeat its words, and counting them twice
      // would distort phraseCoverage against the source solution.
      model: normalizeWhitespace(sc.inner.split(/^[ \t]*===CHECKS===[ \t]*$/m)[0]),
    });
  }
  return items;
}

const lineOf = (text, index) => text.slice(0, index).split('\n').length;

function bestExercise(question, exercises, options = []) {
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
 *   { status: 'prose-key' }                   the source solution names no option
 *   { status: 'key-differs', detail }         page keys another option
 *   { status: 'options-differ', detail }      an option's wording differs
 */
export function judgeMultipleChoice(item, source) {
  const exercise = bestExercise(item.question, source.exercises, item.options || []);
  if (!exercise) return { status: 'unmatched' };
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
  return { status: 'unsourced', detail: `${JSON.stringify(item.answer)} is not a glossary term, a bolded term, or a phrase the module prints` };
}

/**
 * A selfcheck model answer against the source solution its question matches:
 * 'verbatim', 'reworded' (coverage ≥ MODEL_COVERAGE_FLOOR), 'diverges', or
 * 'unmatched' when no source exercise reads like the question.
 */
export function judgeSelfcheck(item, source) {
  const exercise = bestExercise(item.question, source.exercises);
  if (!exercise) return { status: 'unmatched' };
  const coverage = phraseCoverage(item.model, exercise.solution);
  if (coverage >= 0.95) return { status: 'verbatim', exercise, coverage };
  if (coverage >= MODEL_COVERAGE_FLOOR) return { status: 'reworded', exercise, coverage };
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
      for (let column = 1; column < table.header.length; column += 1) {
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
        (row) => phraseCoverage(entry.label, `${row[0] || ''} ${row[match.columns[bin]] || ''}`),
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

/* ---- corpus walk ---------------------------------------------------------- */

export function checkCorpus(repositoryRoot, { contentRoot = 'content', verbose = false } = {}) {
  const lock = loadSourceLock(repositoryRoot);
  const map = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-map.json'), 'utf8'));
  const prefix = contentRoot.replace(/\/+$/, '') + '/';
  const sections = map.sections.filter((section) => (section.localPath + '/').startsWith(prefix) || contentRoot === 'content');

  const counts = {
    multiplechoice: { confirmed: 0, disclosed: 0, unmatched: 0, 'prose-key': 0 },
    textin: { glossary: 0, 'glossary-completed': 0, term: 0, summary: 0, body: 0 },
    selfcheck: { verbatim: 0, reworded: 0, disclosed: 0, unmatched: 0 },
    sortbins: { confirmed: 0, disclosed: 0, unmatched: 0 },
  };
  const failures = [];
  const notes = [];
  const used = new Set();
  const deviationFor = (page, exercise) => DISCLOSED_DEVIATIONS.find(
    (entry) => entry.page === page && entry.exercise === exercise,
  );

  // A bundle with no checkout directory at all is skipped wholesale (see the
  // header); its sections are tallied here, keyed by bundle, so the caller can
  // say exactly what went unread. A present checkout is read in full.
  const skipped = {};
  const checked = [];
  for (const section of sections) {
    const sourceDir = bundleSourceDirectory(repositoryRoot, lock, section.bundle);
    if (existsSync(sourceDir)) checked.push(section);
    else skipped[section.bundle] = (skipped[section.bundle] || 0) + 1;
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
    const source = readModule(readFileSync(modulePath, 'utf8'));
    for (const item of pageItems(readFileSync(pagePath, 'utf8'))) {
      const where = `${section.localPath}:${item.line}`;
      if (item.type === 'multiplechoice') {
        const verdict = judgeMultipleChoice(item, source);
        if (verdict.status === 'key-differs' || verdict.status === 'options-differ') {
          const deviation = deviationFor(section.localPath, verdict.exercise.id);
          const wanted = verdict.status === 'key-differs' ? 'key' : 'options';
          if (deviation && deviation.kind === wanted) {
            used.add(deviation);
            counts[item.type].disclosed += 1;
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
      } else if (item.type === 'textin') {
        const verdict = judgeTextin(item, source);
        if (verdict.status === 'unsourced') failures.push({ page: section.localPath, line: item.line, detail: verdict.detail });
        else counts.textin[verdict.status] += 1;
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
    + counts.sortbins.confirmed;
  return {
    counts, confirmed, failures, notes: verbose ? notes : [],
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
  const scope = sectionsSkipped
    ? ` (partial: ${sectionsSkipped} of ${sections + sectionsSkipped} mapped sections skipped, no checkout)`
    : '';
  return `${failures.length ? '✖' : sectionsSkipped ? '⊘' : '✓'} source-key cross-check${scope}: `
    + `${confirmed} keyed answers confirmed against the pinned CNXML across ${sections} mapped sections `
    + `(multiplechoice ${mc.confirmed}, textin ${textin}, selfcheck ${selfcheck}, sortbins ${sortbins.confirmed}); `
    + `${mc.disclosed + counts.selfcheck.disclosed + sortbins.disclosed} disclosed correction(s); ${mc.unmatched + counts.selfcheck.unmatched + sortbins.unmatched} unmatched to any source exercise; `
    + `${mc['prose-key']} prose-keyed; ${failures.length} failure(s)`;
}

/* ---- CLI ------------------------------------------------------------------ */

if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) {
  const args = process.argv.slice(2);
  const contentRoot = args.find((a) => !a.startsWith('--')) || 'content';
  const verbose = args.includes('--verbose');
  const minArg = args.find((a) => a.startsWith('--min-confirmed'));
  const minConfirmed = minArg
    ? Number(minArg.includes('=') ? minArg.split('=')[1] : args[args.indexOf(minArg) + 1])
    : null;
  if (minArg && (!Number.isInteger(minConfirmed) || minConfirmed < 0)) {
    console.error('usage: node tools/verify/verify-source-keys.mjs [content-root] [--min-confirmed N] [--verbose]');
    process.exit(2);
  }

  const repositoryRoot = process.cwd();
  const result = checkCorpus(repositoryRoot, { contentRoot, verbose });
  const { confirmed, failures, notes, skipped, sectionsSkipped } = result;

  for (const { page, line, detail } of failures) console.error(`✗ ${page}${line ? `:${line}` : ''}\n    ${detail}`);
  for (const note of notes) console.log(`    · ${note}`);
  for (const line of skipLines(repositoryRoot, loadSourceLock(repositoryRoot), skipped)) console.error(line);

  console.log(summaryLine(result));

  if (sectionsSkipped) {
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
