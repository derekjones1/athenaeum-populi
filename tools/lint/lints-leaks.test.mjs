import test from 'node:test';
import { normalizeText } from '../../assets/js/lib/text/check-text.mjs';
import assert from 'node:assert/strict';
import { ceTrailingPunctuation, directlyAboveLeak, handSetFormulas, lintLeaks, numericKey, selfcheckForwardLeak, symbolValueUnit, unicodeFormula } from './lints-leaks.mjs';

const BIO = 'content/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology.md';
const AP = 'content/life-health-sciences/anatomy-physiology/01-an-introduction-to-the-human-body/07-medical-imaging.md';
const MATH = 'content/math/prealgebra/01-whole-numbers/01-introduction.md';
const KC = 'content/life-health-sciences/biology/knowledge-check-01-03.md';
const CHEM = 'content/physical-sciences/chemistry/03-composition-of-substances-and-solutions/03-molarity.md';

const normalizeTextForTest = (value) => normalizeText(value);
const errorsOf = (src, file = BIO) => lintLeaks(src, file).errors;
const hasError = (src, pattern, file = BIO) => errorsOf(src, file).some((e) => pattern.test(e));

/** A Practice block with one objective group holding `items` in order. */
const practice = (...items) => `## Summary\n\nText.\n\n## Practice\n\n### Explain the thing\n\n${items.join('\n\n')}\n`;
const mc = (question, answer, options, hint = 'Reread the first subsection.') => `{{< multiplechoice\n  question="${question}"\n  answer="${answer}"\n  hint="${hint}"\n>}}\n${options.join('\n')}\n{{< /multiplechoice >}}`;
const textin = (question, answer, hint = 'Reread the first subsection.', accept = '') => `{{< textin\n  question="${question}"\n  answer="${answer}"${accept ? `\n  accept="${accept}"` : ''}\n  hint="${hint}"\n>}}`;
const selfcheck = (question, hint = 'Reread the first subsection.') => `{{< selfcheck question="${question}" hint="${hint}" >}}\nModel answer.\n===CHECKS===\none clause\ntwo clause\n{{< /selfcheck >}}`;

// ---- HTML character references in params -----------------------------------

test('an HTML character reference in a shortcode param is an error', () => {
  const src = '{{< mediafigure src="biology/x" alt="a &quot;Sunlight&quot; box" >}}\nCaption.\n{{< /mediafigure >}}\n';
  assert(hasError(src, /param `alt` holds the HTML character reference `&quot;`/));
  for (const entity of ['&amp;', '&#39;', '&#x2019;']) {
    assert(hasError(src.replace('&quot;Sunlight&quot;', `${entity}`), /HTML character reference/), entity);
  }
});

test('an entity in body prose or a bare ampersand in a param is not an error', () => {
  assert(!hasError('| a | &lt;1% |\n', /HTML character reference/));
  assert(!hasError('{{< mediafigure src="biology/x" alt="salt & pepper" >}}\nCaption.\n{{< /mediafigure >}}\n', /HTML character reference/));
  assert(!hasError('```\n{{< mediafigure src="biology/x" alt="&quot;doc&quot;" >}}\n```\n', /HTML character reference/));
});

// ---- chemistry in ASCII -------------------------------------------------------

test('unicodeFormula spells counts as subscripts and charges as superscripts', () => {
  assert.equal(unicodeFormula('CO2'), 'CO₂');
  assert.equal(unicodeFormula('C6H12O6'), 'C₆H₁₂O₆');
  assert.equal(unicodeFormula('Ca2+'), 'Ca²⁺');
  assert.equal(unicodeFormula('NH4+'), 'NH₄⁺');
  assert.equal(unicodeFormula('NO3-'), 'NO₃⁻');
  assert.equal(unicodeFormula('H+'), 'H⁺');
  assert.equal(unicodeFormula('NADP+'), 'NADP⁺');
  assert.equal(unicodeFormula('F−'), 'F⁻');
  assert.equal(unicodeFormula('O2'), 'O₂');
  for (const notChemistry of ['H1N1', 'B12', 'C3', 'SV40', 'PCV13', 'IPSP1', 'IPSP2', 'CD4', 'O+', 'B-', 'K-', 'NAD', 'CO₂', 'ATP']) {
    assert.equal(unicodeFormula(notChemistry), null, notChemistry);
  }
});

test('ASCII chemistry in life-sciences prose, items, and alts is an error', () => {
  assert(hasError('Plants take in CO2 through stomata.\n', /ASCII chemistry `CO2` — write `CO₂`/));
  assert(hasError('Muscle needs Ca2+ to contract.\n', /write `Ca²⁺`/));
  assert(hasError('The Na+/K+ pump.\n', /`Na\+`/));
  assert(hasError('{{< mediafigure src="biology/x" alt="an arrow labeled NO3- leads to N2" >}}\nCaption.\n{{< /mediafigure >}}\n', /`NO3-` — write `NO₃⁻`/));
  assert(hasError(practice(mc('Which gas?', 'CO2', ['CO2', 'O₂'])), /`CO2`/));
});

test('accept members, math, quotations, gene symbols, footers, and non-chemistry are not ASCII chemistry', () => {
  const clean = [
    textin('The gas plants take in is ________.', 'CO₂', 'Reread the first subsection.', 'CO2|carbon dioxide'),
    'The rate is $CO_2$ per hour and the strain is H1N1.',
    'The source prints "N2N2" for the subtype.',
    'The genes *USP14* and *ROCK1* are adjacent.',
    'The concept of K- and r-selected species. Blood type O+ and B-.',
    'Helper cells carry CD4; vitamin B12; complement C3.',
    'StatPearls, NCBI Bookshelf NBK555891; the review is PMC1234567.',
    'The code `CO2` is documentation.',
    '<small>Changes: set in Unicode where the source prints "H+" and CO2.</small>',
  ].join('\n\n');
  assert.deepEqual(errorsOf(clean).filter((e) => /ASCII chemistry/.test(e)), []);
  assert(!hasError('Plants take in CO2.\n', /ASCII chemistry/, MATH), 'math books are out of scope');
});

// ---- the "directly above" leak -------------------------------------------------

test('an ion key is not printed by the neutral formula that holds it (Chemistry 2.6)', () => {
  const formulaTextin = (question, answer) => `{{< textin\n  question="${question}"\n  answer="${answer}"\n  answerForm="formula"\n  hint="Reread the first subsection."\n>}}`;
  const stem = 'For the following compound, state whether it is ionic or covalent. If it is ionic, write the symbols for the ions involved: (NH₄)₂CO₃.';
  const DIRECT = /directly above it/;
  // The stem prints (NH₄) inside the compound; the key is the ion, with its charge.
  assert(!hasError(practice(
    mc(stem, 'ionic', ['ionic', 'covalent']),
    formulaTextin(`${stem} Enter the symbol of the cation.`, 'NH₄⁺'),
  ), DIRECT, CHEM));
  // A neutral formula the item above prints whole is still a leak.
  assert(hasError(practice(
    mc('Is (NH₄)₂CO₃ made of ions? The cation is NH₄⁺.', 'yes', ['yes', 'no']),
    formulaTextin('Enter the symbol of the ammonium ion.', 'NH₄⁺'),
  ), DIRECT, CHEM));
  assert(hasError(practice(
    mc('Is Na₂S ionic or covalent?', 'ionic', ['ionic', 'covalent']),
    formulaTextin('Predict the formula of the compound of the sodium cation and the sulfide anion.', 'Na₂S'),
  ), DIRECT, CHEM));
});

test('the A&P chapter 1–2 "directly above" leaks are errors', () => {
  // 1.7: the multiple choice directly above the X-ray textin prints "X-rays" in its stem.
  assert(hasError(practice(
    mc('According to this section, which of the following are X-rays best used to visualize?', 'hard body structures', ['hard body structures', 'soft tissues']),
    textin('The form of electromagnetic radiation discovered by Röntgen is the ________.', 'X-ray'),
  ), /key "X-ray" is printed \(as "x rays"\) in the stem of the multiplechoice directly above it/, AP));
  // 1.4: the nutrient recall item under "Which of the following statements about nutrients is true?"
  assert(hasError(practice(
    mc('Which of the following statements about nutrients is true?', 'All classes are essential.', ['All classes are essential.', 'None are.']),
    textin('A substance in foods and beverages that is essential to human survival is called a ________.', 'nutrient'),
  ), /key "nutrient" is printed \(as "nutrients"\) in the stem/, AP));
  // 1.4: a Critical Thinking self-check stem directly above the pressure recall item.
  assert(hasError(practice(
    selfcheck('Explain these phenomena in terms of atmospheric pressure.'),
    textin('The force exerted by a substance against a surface is ________.', 'pressure'),
  ), /in the stem of the selfcheck directly above it/, AP));
  // 1.6: frontal plane, printed by the MRI self-check directly above.
  assert(hasError(practice(
    selfcheck('In which direction would an MRI scanner move to produce images of the body in the frontal plane?'),
    textin('The plane that divides the body into anterior and posterior portions is the ________.', 'frontal plane', 'Reread Anatomical Planes.', 'coronal plane'),
  ), /key "frontal plane"/, AP));
  // 2.1: "It has seven stable isotopes" directly above the isotope recall item.
  assert(hasError(practice(
    mc('Mercury has an atomic number of 80. It has seven stable isotopes. Which is true?', 'A', ['A', 'B']),
    textin('Atoms of one element with different numbers of neutrons are called ________.', 'isotopes'),
  ), /key "isotopes"/, AP));
  // 2.2: the molecule recall item under "…is a molecule, but not a compound?"
  assert(hasError(practice(
    mc('Which of the following is a molecule, but *not* a compound?', 'H₂', ['H₂O', 'H₂']),
    textin('Two or more atoms covalently bonded together form a ________.', 'molecule'),
  ), /key "molecule"/, AP));
});

test('a hint or an option directly above prints the key: the plural, the singular, and the whole-option case', () => {
  assert(hasError(practice(
    mc('Which of these is not soil?', 'rock', ['rock', 'loam'], 'Soil scientists divide this section into zones called horizons.'),
    textin('A layer of soil with distinct properties is a soil ________.', 'horizon'),
  ), /in the hint of the multiplechoice directly above it/));
  assert(hasError(practice(
    mc('Which animals match their body fluids to seawater?', 'osmoconformers', ['osmoregulators', 'osmoconformers']),
    textin('An animal whose body fluids track the osmolarity of its surroundings is an ________.', 'osmoconformer'),
  ), /offers "osmoconformer" as an option — the textin's own key/));
  // A plural key whose singular is printed above.
  assert(hasError(practice(
    selfcheck('What does one anion carry?'),
    textin('Negatively charged atoms are called ________.', 'anions'),
  ), /key "anions" is printed \(as "anion"\)/));
  // sortbins labels are printed text too.
  const sort = '{{< sortbins question="Sort each." hint="Reread the table." >}}\n{"bins": ["A", "B"], "items": [{"label": "prophage forms", "bin": 0}, {"label": "x", "bin": 1}, {"label": "y", "bin": 0}, {"label": "z", "bin": 1}]}\n{{< /sortbins >}}';
  assert(hasError(practice(sort, textin('A phage genome integrated in the host chromosome is a ________.', 'prophage')), /bins and labels of the sortbins/));
});

test('a key printed by a non-adjacent item, across a heading, or outside Practice is not the directly-above rule', () => {
  const printer = mc('Which of the following statements about nutrients is true?', 'All classes are essential.', ['All classes are essential.', 'None are.']);
  const recall = textin('A substance essential to survival is called a ________.', 'nutrient');
  const neutral = mc('Which gas is exhaled?', 'carbon dioxide', ['carbon dioxide', 'argon']);
  assert(!hasError(practice(recall, printer), /directly above/), 'recall item first');
  assert(!hasError(practice(printer, neutral, recall), /directly above/), 'two items above');
  assert(hasError(`## Practice\n\n### One\n\n${printer}\n\n### Two\n\n${recall}\n`, /directly above/), 'a group heading between them no longer ends the adjacency');
  assert(!hasError(`## Practice\n\n### One\n\n${printer}\n\n### Two\n\n${textin('Name the unrelated thing.', 'osmosis')}\n`, /directly above/), 'across a heading, an unrelated key is clean');
  assert(!hasError(`## Nutrients\n\n${printer}\n\n${recall}\n\n## Practice\n\n### A\n\n${neutral}\n`, /directly above/), 'body items');
  const kc = `### 1.1 The Science of Biology\n\n${printer}\n\n${recall}\n`;
  assert(hasError(kc, /directly above/, KC), 'a Knowledge Check is all Practice');
});

test('directlyAboveLeak names the field and the spelling it found', () => {
  const prev = { kind: 'selfcheck', params: { question: 'Explain in terms of atmospheric pressure.', hint: 'x' }, inner: '' };
  assert.deepEqual(directlyAboveLeak(prev, { params: { answer: 'pressure' } }), { field: 'stem', member: 'pressure', norm: 'pressure' });
  assert.equal(directlyAboveLeak(prev, { params: { answer: 'volume' } }), null);
});

// ---- a hint that prints the key's root ---------------------------------------

test('a textin hint that prints a root or derivative of the key is an error', () => {
  const cases = [
    // A&P 1.4 and 1.6, the reviewers' own examples.
    ['A substance essential to survival is called a ________.', 'nutrient', 'Water and the micronutrients are the three basic classes of this.', 'micronutrients'],
    ['A face-down body orientation is called the ________ position.', 'prone', "This word also names 'pronation,' the palm-down rotation of the forearm.", 'pronation'],
    ['A face-up body orientation is called the ________ position.', 'supine', "This word also names 'supination,' the palm-up rotation.", 'supination'],
    // Biology hits fixed when the rule landed.
    ['A nonpolar macromolecule is called a ________.', 'lipid', 'The general term for fats, oils, waxes, phospholipids, and steroids.', 'phospholipids'],
    ['The complete set of metabolites is the ________.', 'metabolome', 'Metabolomics is the study of this complete set.', 'metabolomics'],
    ['The polymer in xylem walls is ________.', 'lignin', 'Cells with it in their walls are described as lignified.', 'lignified'],
  ];
  for (const [question, answer, hint, word] of cases) {
    assert(hasError(practice(textin(question, answer, hint)), new RegExp(`the hint's word "${word}" prints the root of "${answer}"`)), answer);
  }
  // A whole-word plural or singular in its own hint is lints.mjs's rule (the grader's two-way fold), not a root.
  assert(!hasError(practice(textin('Zones of soil are called ________.', 'horizons', 'Each horizon is a layer.')), /prints the root/));
});

test('a short key, an unrelated word, or a where-to-look hint is not a root leak', () => {
  assert(!hasError(practice(textin('The basic unit of life is the ________.', 'cell', 'Plant walls are made of cellulose.')), /prints the root/));
  assert(!hasError(practice(textin('The organ that filters blood is the ________.', 'kidney', 'Reread Kidney Function and its figure.', '')), /prints the root/),
    'the whole-word print is lints.mjs\'s rule, not this one');
  assert(!hasError(practice(textin('The complete set of metabolites is the ________.', 'metabolome', 'Reread the opening paragraphs, on small-molecule metabolites.')), /prints the root/),
    '"metabolites" shares only seven of the eight letters the rule needs');
});

// ---- the acronym cloze --------------------------------------------------------

test('an acronym cloze whose stem spells the name right before the blank is an error', () => {
  assert(hasError(practice(textin('A flow cytometer that sorts cells is called a fluorescence-activated cell sorter, or ________.', 'FACS')),
    /answer "FACS" is the initials of "fluorescence activated cell sorter"/));
  assert(hasError(practice(textin('The general name is fluorescent antibody, or ________, techniques.', 'FA')), /initials of "fluorescent antibody"/));
  assert(!hasError(practice(textin('A flow cytometer that sorts cells is known by the four-letter abbreviation ________.', 'FACS')), /initials/));
  assert(!hasError(practice(textin('The molecule that carries genetic information is ________.', 'DNA')), /initials/));
});

// ---- a multiple-choice hint that prints the key -------------------------------

test('a life-sciences multiple-choice hint that prints the keyed option is an error', () => {
  assert(hasError(practice(mc('DNA double helix does not have which of the following?', 'uracil', ['antiparallel configuration', 'uracil'], 'Uracil replaces thymine only in RNA, not in DNA.')),
    /the hint prints the keyed option "uracil"/));
  // The key's plural or singular counts too ("releases" for "release").
  assert(hasError(practice(mc('A virus obtains its envelope during which phase?', 'release', ['attachment', 'release'], 'Recall which stage releases new virions.')), /keyed option "release"/));
});

test('a contrast hint, a key the stem prints, a count, and a math hint are not MC hint leaks', () => {
  assert(!hasError(practice(mc('Which is a monomer?', 'glucose', ['glucose', 'starch'], 'Glucose is one unit; starch is many.')), /keyed option/), 'contrast');
  assert(!hasError(practice(mc('Which is glucose: a monomer or a polymer?', 'monomer', ['monomer', 'polymer'], 'A monomer is one unit.')), /keyed option/), 'the stem prints it');
  assert(!hasError(practice(mc('How many electron shells does nitrogen have?', 'two', ['one', 'two', 'three'], 'The first shell holds at most two electrons.')), /keyed option/), 'count');
  assert(!hasError(practice(mc('Which conic is it?', 'hyperbola', ['ellipse', 'hyperbola'], 'Opposite signs mean a hyperbola.')), /keyed option/, MATH), 'math');
});

// ---- a number-keyed textin ------------------------------------------------------

test('numericKey reads digits, number words, and a number with a unit as numbers', () => {
  for (const key of ['5', '5.0 µm', 'two', 'twenty', 'one hundred', '400x', '400×', '37 °C', 'every 10 years', '10 years']) {
    assert(numericKey(normalizeTextForTest(key)), key);
  }
  for (const key of ['glyceraldehyde 3-phosphate', 'BSL-4', '5′ end', '5′ to 3′ direction', 'CCR5-delta 32', 'one-child policy', 'zero population growth', '21-hydroxylase', 'ICP 34.5', 'first law']) {
    assert(!numericKey(normalizeTextForTest(key)), key);
  }
});

test('a textin keyed to a number or a measurement is an error in every book', () => {
  assert(hasError(practice(textin('Most prokaryotic cells are 0.1 to ________ in diameter.', '5.0 µm')), /answer "5\.0 µm" is a number/));
  assert(hasError(practice(textin('A nucleotide has ________ parts.', 'three')), /is a number/));
  assert(hasError(practice(textin('How often is a Td booster given?', 'every 10 years', 'Reread the tetanus vaccine paragraph.', '10 years')), /is a number/));
  assert(hasError(practice(textin('The total magnification is ________.', '400x')), /is a number/, MATH));
  assert(!hasError(practice(textin('The Calvin cycle produces ________.', 'glyceraldehyde 3-phosphate')), /is a number/));
  assert(!hasError(practice(textin('The highest containment level is ________.', 'BSL-4', 'Reread the biosafety table.', 'BSL4')), /is a number/));
});

// ---- a selfcheck hint that restates its rubric ------------------------------------

const rubricCheck = (hint, checks) => `{{< selfcheck question="Name the parts." hint="${hint}" >}}\nModel answer.\n===CHECKS===\n${checks.join('\n')}\n{{< /selfcheck >}}`;

test('a selfcheck hint that covers two of its rubric clauses is an error', () => {
  assert(hasError(practice(rubricCheck('Work through the definitions of staminate and carpellate flowers.', ['pollen (or sperm)', 'carpellate', 'staminate'])),
    /the hint restates 2 of its rubric clauses \("carpellate", "staminate"\)/));
  assert(hasError(practice(rubricCheck('Plasma is the fluid portion of blood; formed elements are the nonfluid portion.', ['plasma is the fluid portion of blood', 'the formed elements are the nonfluid portion of blood'])), /restates 2/));
});

test('a selfcheck hint that names one clause or only a location is not a rubric leak', () => {
  assert(!hasError(practice(rubricCheck('Compare the two sequences with the frameshift panel of the mutation figure.', ['a frameshift mutation', 'deletion of an A at position 12'])), /restates/));
  assert(!hasError(practice(rubricCheck('Reread the Plant Tissues subsection and its figure.', ['meristems divide', 'dermal tissue protects'])), /restates/));
});

// ---- a hint that rules out a graded spelling ---------------------------------------

test('a textin hint that says "not" a graded spelling is an error', () => {
  assert(hasError(practice(textin('Graft rejection targets the ________ proteins.', 'MHC', 'Use the general name, not HLA.', 'HLA|major histocompatibility complex')),
    /the hint's "not hla" rules out a spelling the grader accepts/));
  assert(hasError(practice(textin('Graft rejection targets the ________ proteins.', 'MHC', 'Give the general name, not the human-specific abbreviation.', 'HLA|major histocompatibility complex')),
    /"not … abbreviation" beside the accepted abbreviation "MHC"/));
  // The plural fold counts, as the grader counts it.
  assert(hasError(practice(textin('Cells that engulf are ________.', 'phagocyte', 'Not the phagocytes of the blood.')), /rules out a spelling/));
});

test('a contrast "not" naming something else is not a contradiction', () => {
  assert(!hasError(practice(textin('Redness is called ________.', 'erythema', 'One of the five signs of inflammation, not the swelling.')), /rules out/));
  assert(!hasError(practice(textin('The CD8 T cell is ________.', 'cytotoxic', 'This class of T cell expresses CD8, not CD4.')), /rules out/));
  assert(!hasError(practice(textin('Its full name is the ________.', 'major histocompatibility complex', 'Spell it out, not the abbreviation.')), /rules out/),
    'no abbreviation is accepted, so naming one is no contradiction');
});

// ---- a selfcheck answer that prints the key of the item below it ---------------------

const answered = (modelAnswer, checks = ['the first point', 'the second point']) =>
  `{{< selfcheck question="Explain what happens to the cell." hint="Reread the Tonicity paragraph." >}}\n${modelAnswer}\n===CHECKS===\n${checks.join('\n')}\n{{< /selfcheck >}}`;
const FORWARD = /printed \(as "[^"]+"\) in the (?:model answer|rubric clause) of the selfcheck directly above it/;

test('a selfcheck model answer or rubric that prints the key of the next item is an error', () => {
  // Biology 5.2: "…creating a hypotonic solution" over a `hypotonic` cloze.
  assert(hasError(practice(
    answered('The osmolarity inside the cell rises, creating a hypotonic solution, so water flows in.'),
    textin('A solution whose osmolarity is lower than the cell\'s cytoplasm is called ________ relative to the cell.', 'hypotonic'),
  ), /textin \(A solution whose osmolarity.*key "hypotonic" is printed \(as "hypotonic"\) in the model answer of the selfcheck directly above it/));
  // The plural folds, and an accept member counts (Microbiology 18.4's memory B cells).
  assert(hasError(practice(
    answered('The response would produce no memory B cells.'),
    textin('Some cloned B cells become ________.', 'memory B cell', 'Reread the paragraph.', 'memory cell'),
  ), /key "memory B cell" is printed \(as "memory b cells"\)/));
  // A rubric clause is printed to the learner too.
  assert(hasError(practice(
    answered('Model answer.', ['vitamins act as coenzymes', 'they come from the diet']),
    textin('A small organic molecule that enhances an enzyme is a(n) ________.', 'coenzyme'),
  ), /in the rubric clause of the selfcheck directly above it/));
  // Biology 4.5: a multiple-choice key the model answer names with no distractor beside it.
  assert(hasError(practice(
    answered('In plant and bacteria cells, a cell wall surrounds the plasma membrane.'),
    mc('Which structure is present in prokaryotic and plant cells but absent in animal cells?', 'Cell wall', ['Cell wall', 'Mitochondria', 'Golgi apparatus']),
  ), /multiplechoice \(Which structure.*key "Cell wall" is printed \(as "cell wall"\) in the model answer/));
  // Across a group heading: the last selfcheck of one group sits right above the first item of the next.
  assert(hasError(`## Practice\n\n### One\n\n${answered('Arid conditions led to the uric acid pathway.')}\n\n### Two\n\n${textin('The byproduct of ammonia metabolism in birds is ________.', 'uric acid')}\n`, FORWARD));
  // A Knowledge Check is all Practice.
  assert(hasError(`### 41.4 Nitrogenous Wastes\n\n${answered('Arid conditions led to the uric acid pathway.')}\n\n${textin('The byproduct in birds is ________.', 'uric acid')}\n`, FORWARD, KC));
});

test('a contrast, a later item, a count, an own-stem key, a body item, or an unprinted key is not a forward leak', () => {
  // The model answer also prints a distractor: a contrast, not a giveaway.
  assert(!hasError(practice(
    answered('Lysosomes and peroxisomes both break down molecules.'),
    mc('Which organelle is not part of the endomembrane system?', 'peroxisome', ['lysosome', 'peroxisome', 'Golgi apparatus']),
  ), FORWARD), 'distractor printed too');
  // Only the next shortcode: an item two below is the topic, not the reveal.
  assert(!hasError(practice(
    answered('Water flows in through aquaporins, creating a hypotonic solution.'),
    textin('Water moves across a membrane by ________.', 'osmosis'),
    textin('A solution with lower osmolarity than the cell is ________.', 'hypotonic'),
  ), FORWARD), 'two items below');
  // The recall item first is the fix.
  assert(!hasError(practice(
    textin('A solution with lower osmolarity than the cell is ________.', 'hypotonic'),
    answered('Water flows in, creating a hypotonic solution.'),
  ), FORWARD), 'recall item above');
  assert(!hasError(practice(
    answered('Nitrogen has two electron shells.'),
    mc('How many electron shells does nitrogen have?', 'two', ['one', 'two', 'three']),
  ), FORWARD), 'count');
  assert(!hasError(practice(
    answered('A hypotonic solution forms.'),
    mc('Which solution is hypotonic to the cell?', 'hypotonic', ['hypotonic', 'isotonic']),
  ), FORWARD), 'the stem prints its own key');
  assert(!hasError(`## Tonicity\n\n${answered('A hypotonic solution forms.')}\n\n${textin('Lower osmolarity is ________.', 'hypotonic')}\n\n## Practice\n\n### A\n\n${textin('Name it.', 'osmosis')}\n`, FORWARD), 'body items');
  assert(!hasError(practice(
    answered('The cell swells and may lyse.'),
    textin('A solution with lower osmolarity than the cell is ________.', 'hypotonic'),
  ), FORWARD), 'key not printed');
});

test('selfcheckForwardLeak names the field and the spelling it found', () => {
  const sc = { kind: 'selfcheck', closed: true, params: {}, inner: '\nIt leads to toxicity.\n===CHECKS===\nreduced clearance\n' };
  assert.deepEqual(selfcheckForwardLeak(sc, { kind: 'textin', params: { answer: 'toxicity' } }), { field: 'model answer', member: 'toxicity', norm: 'toxicity' });
  assert.equal(selfcheckForwardLeak(sc, { kind: 'textin', params: { answer: 'allergic reactions' } }), null);
  assert.equal(selfcheckForwardLeak(sc, { kind: 'sortbins', params: {}, inner: '{}' }), null);
});

// ---- Chemistry 2e notation (November 9, 2026) --------------------------------

test('the Chemistry book reads the whole periodic table as formulas in prose', () => {
  // The life-sciences element set is short on purpose; a general chemistry
  // text writes compounds of every element.
  assert.equal(unicodeFormula('Sb2S3'), null, 'antimony is not in the life-sciences set');
  assert.equal(unicodeFormula('Sb2S3', { chemistry: true }), 'Sb₂S₃');
  // An intravenous fluid's trade name is not deuterium and tungsten (3.4).
  assert.equal(unicodeFormula('D5W', { chemistry: true }), null);
  assert.equal(unicodeFormula('D10W', { chemistry: true }), null);
  assert.equal(unicodeFormula('D2O', { chemistry: true }), 'D₂O', 'heavy water is still a formula');
  assert.equal(unicodeFormula('TeO2', { chemistry: true }), 'TeO₂');
  assert.equal(unicodeFormula('D2O', { chemistry: true }), 'D₂O');
  assert.equal(unicodeFormula('Cu+', { chemistry: true }), 'Cu⁺');
  assert.equal(unicodeFormula('Cu+'), null);
  // No F plasmid in a chemistry book: fluorine forms fluoride only.
  assert.equal(unicodeFormula('F+'), 'F⁺');
  assert.equal(unicodeFormula('F+', { chemistry: true }), null);
  assert.equal(unicodeFormula('F-', { chemistry: true }), 'F⁻');
  // A lone symbol with a count is still not a formula (C60 is the checker's).
  assert.equal(unicodeFormula('C60', { chemistry: true }), null);

  assert(hasError('Stibnite is Sb2S3.\n', /ASCII chemistry `Sb2S3` — write `Sb₂S₃`/, CHEM));
  assert(hasError('The Fe3+ ion and SO42- are common.\n', /ASCII chemistry `Fe3\+` — write `Fe³⁺`/, CHEM));
  assert(!hasError('Stibnite is Sb2S3.\n', /ASCII chemistry/), 'the life-sciences set is unchanged');
  assert(!hasError('Stibnite is Sb2S3.\n', /ASCII chemistry/, MATH), 'math books are out of scope');
  const clean = 'Water (H₂O), sulfate (SO₄²⁻), the hydrate CuSO₄·5H₂O, carbon-14 (¹⁴C), and $\\ce{H2SO4}$ in math.\n';
  assert.deepEqual(errorsOf(clean, CHEM).filter((e) => /ASCII chemistry|set by hand/.test(e)), []);
});

test('handSetFormulas finds the three hand spellings of a formula in math', async (t) => {
  // [tex, the hits as written:why]
  const rows = [
    ['H_2O', ['H_2O:italic']],
    ['CO_2', ['CO_2:italic']],
    ['NH_3', ['NH_3:italic']],
    ['H_2SO_4', ['H_2SO_4:italic']],
    ['2H_2 + O_2 \\rightarrow 2H_2O', ['H_2O:italic']],
    ['\\text{H}_2\\text{O}', ['\\text{H}_2:upright']],
    ['\\mathrm{H_2O}', ['\\mathrm{H_2O}:upright']],
    ['\\mathrm{N}_2', ['\\mathrm{N}_2:upright']],
    ['P_{\\text{O}_2}', ['\\text{O}_2:upright']],
    ['\\text{H}_{2}\\text{SO}_{4}', ['\\text{H}_{2}:upright']],
  ];
  for (const [tex, expected] of rows) {
    await t.test(tex, () => {
      assert.deepEqual(handSetFormulas(tex).map((hit) => `${hit.written}:${hit.why}`), expected);
    });
  }
});

test('handSetFormulas leaves mhchem, variables, units, and the gas laws alone', async (t) => {
  const sound = [
    '\\ce{H2O}',
    '\\ce{2H2(g) + O2(g) -> 2H2O(l)}',
    '\\ce{N2(g) + 3H2(g) <=> 2NH3(g)} \\qquad \\Delta H = -92.2\\ \\text{kJ}',
    '\\pu{1.83 g/mL}',
    'P_1V_1 = P_2V_2',          // every symbol subscripted: Boyle's law, not a compound
    'C_1V_1 = C_2V_2',          // the dilution equation — C and V are both elements
    '\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}',
    'PV = nRT',                 // no count anywhere
    'N_2',                      // a lone symbol cannot be told from a variable
    'K_2',
    'K_cRT',                    // a letter subscript is a label, not a count
    '\\Delta H_1 + \\Delta H_2',
    'K_\\text{sp} = 1.8 \\times 10^{-10}',
    'q = mC_s\\Delta T',
    'E = mc^2',
    'x_1y_2',
    '4.7\\ \\cancel{\\text{g K}} \\times \\frac{1\\ \\text{mol K}}{39.10\\ \\cancel{\\text{g K}}} = 0.12\\ \\text{mol K}',
    'M = \\frac{\\text{mol solute}}{\\text{L solution}}',
  ];
  for (const tex of sound) {
    await t.test(tex, () => assert.deepEqual(handSetFormulas(tex), []));
  }
});

test('a formula set by hand in math is an error in the Chemistry book only', () => {
  const page = 'Water is $H_2O$.\n\n$$\\text{H}_2 + \\text{Cl}_2 \\rightarrow 2\\text{HCl}$$\n';
  const errors = errorsOf(page, CHEM).filter((e) => /set by hand/.test(e));
  assert.equal(errors.length, 3, errors.join('\n'));
  assert.match(errors[0], /^L1: formula `H_2O` is set by hand inside math — write `\\ce\{H2O\}` \(math sets bare letters italic/);
  assert.match(errors[1], /^L3: formula `\\text\{H\}_2` is set by hand inside math — write `\\ce\{H2\}`/);
  assert.match(errors[2], /^L3: formula `\\text\{Cl\}_2`.*write `\\ce\{Cl2\}`/);
  // An exercise string is linted like body math.
  assert(hasError('{{< fillin question="How many moles are in $18.0\\ \\text{g}$ of $H_2O$?" answer="1.00" answerForm="sig-figs:3 last-digit:1" hint="Use the molar mass." >}}\n',
    /formula `H_2O` is set by hand/, CHEM));
  // Life sciences keeps its own rule for partial pressures (`P_{\text{O}_2}`), and math has no formulas.
  assert(!hasError(page, /set by hand/));
  assert(!hasError(page, /set by hand/, MATH));
  // Code is documentation.
  assert(!hasError('Write `$H_2O$` as `$\\ce{H2O}$`.\n', /set by hand/, CHEM));
});

test('in the Chemistry book a textin is never keyed to a word of its own objective heading', () => {
  const group = (heading, ...items) => `## Summary\n\nText.\n\n## Practice\n\n### ${heading}\n\n${items.join('\n\n')}\n`;
  const weight = textin('The force that gravity exerts on an object is its ________.', 'weight');
  const gravity = textin('Weight refers to the force that ________ exerts on an object.', 'gravity');
  const hit = (src, file = CHEM) => errorsOf(src, file).filter((e) => /its own objective heading/.test(e));
  assert.equal(hit(group('Distinguish between mass and weight', weight)).length, 1);
  assert.match(hit(group('Distinguish between mass and weight', weight))[0], /its key "weight" is printed \(as "weight"\) in its own objective heading `### Distinguish between mass and weight`/);
  assert.deepEqual(hit(group('Distinguish between mass and weight', gravity)), []);
  // The plural the grader folds is the same word: "atoms" in the heading, `atom` keyed.
  assert.equal(hit(group('Define and give examples of atoms and molecules', textin('The smallest particle of an element is an ________.', 'atom'))).length, 1);
  // A key the heading of ANOTHER group prints is not this rule.
  const two = `${group('Distinguish between mass and weight', gravity)}\n### Apply the law of conservation of matter\n\n${weight}\n`;
  assert.deepEqual(hit(two), []);
  // Life sciences keeps it a preference, and a body item has no objective heading.
  assert.deepEqual(hit(group('Distinguish between mass and weight', weight), BIO), []);
  assert.deepEqual(hit(`### Mass and weight\n\n${weight}\n\n## Practice\n\n### Explain the thing\n\n${gravity}\n`), []);
});

test('in the Chemistry book a formula or an equation is never keyed as a word', () => {
  const page = (item) => `Body text.\n\n${item}\n`;
  const hit = (src, file = CHEM) => errorsOf(src, file).filter((e) => /declare answerForm/.test(e));
  const formula = (answer, question = 'Write the formula of the following compound: rubidium bromide.') => textin(question, answer);
  assert.match(hit(page(formula('RbBr')))[0], /its key "RbBr" is a chemical formula graded as a word/);
  assert.equal(hit(page(formula('Mn₃(PO₄)₂'))).length, 1);
  assert.equal(hit(page(formula('FeCl₃·2H₂O'))).length, 1, 'the hydrate dot is not the operator rule\'s to report twice');
  assert.equal(hit(page(formula('Se²⁻', 'Give the symbol for the ion with 34 protons and 36 electrons.'))).length, 1);
  // A lone symbol is a formula when the stem asks for a symbol or a formula.
  assert.equal(hit(page(formula('Be', 'Give the symbol of the lightest alkaline earth metal.'))).length, 1);
  assert.deepEqual(hit(page(formula('Be', 'To ________ or not, that is the question.'))), []);
  assert.match(hit(page(formula('H₂ + Cl₂ ⟶ 2HCl', 'Write the balanced equation.')))[0], /is an equation graded as words/);
  // Declared, it is the grader's; a name is a word; other books are not read.
  const declared = formula('RbBr').replace('answer="RbBr"', 'answer="RbBr" answerForm="formula"');
  assert.deepEqual(errorsOf(page(declared), CHEM).filter((e) => /declare answerForm|reads as a space/.test(e)), []);
  assert.deepEqual(hit(page(formula('chromium(III) oxide', 'Name the following compound: Cr₂O₃.'))), []);
  assert.deepEqual(hit(page(formula('RbBr')), BIO), []);
  // A declared hydrate is not an "operator the text grader drops".
  const hydrate = formula('FeCl₃·2H₂O').replace('answer="FeCl₃·2H₂O"', 'answer="FeCl₃·2H₂O" answerForm="formula"');
  assert.deepEqual(errorsOf(page(hydrate), CHEM).filter((e) => /reads as a space/.test(e)), []);
  // …and its stem says how the dot is typed, which the field's guide does not.
  const dot = (src) => errorsOf(src, CHEM).filter((e) => /how a centered dot is typed/.test(e));
  assert.equal(dot(page(hydrate)).length, 1);
  const told = hydrate.replace('rubidium bromide.', 'iron(III) chloride dihydrate. Type the dot as a period, as in CuSO4.5H2O.');
  assert.deepEqual(dot(page(told)), []);
  assert.deepEqual(errorsOf(page(told), CHEM).filter((e) => /ASCII chemistry/.test(e)), [], 'the typed example is not ASCII chemistry');
  assert.equal(errorsOf(page(told.replace('Type the dot as a period, as in CuSO4.5H2O.', 'Compare CuSO4.')), CHEM).filter((e) => /ASCII chemistry/.test(e)).length, 1);
  assert.deepEqual(dot(page(declared)), [], 'a formula with no dot needs no sentence');
  // A half-reaction's stem says how its electron is typed (Chemistry 4.2).
  const electron = (src) => errorsOf(src, CHEM).filter((e) => /how an electron is typed/.test(e));
  const half = formula('Sn⁴⁺(aq) + 2e⁻ ⟶ Sn²⁺(aq)', 'Complete and balance the following half-reaction: Sn⁴⁺(aq) ⟶ Sn²⁺(aq).')
    .replace('answer="Sn⁴⁺(aq) + 2e⁻ ⟶ Sn²⁺(aq)"', 'answer="Sn⁴⁺(aq) + 2e⁻ ⟶ Sn²⁺(aq)" answerForm="equation"');
  assert.equal(electron(page(half)).length, 1);
  const typed = half.replace('⟶ Sn²⁺(aq).', '⟶ Sn²⁺(aq). Type an electron as e-.');
  assert.deepEqual(electron(page(typed)), []);
  assert.deepEqual(errorsOf(page(typed), CHEM).filter((e) => /ASCII chemistry/.test(e)), [], 'the typed electron is not ASCII chemistry');
  const whole = half.replace('+ 2e⁻ ⟶ Sn²⁺', '+ 2Fe²⁺(aq) ⟶ Sn²⁺').replace('+ 2e⁻ ⟶ Sn²⁺', '+ 2Fe²⁺(aq) ⟶ Sn²⁺');
  assert.deepEqual(electron(page(whole)), [], 'an equation with no electron needs no sentence');
  // A key with a fractional coefficient says how a fraction is typed (Chemistry 2e 5.3).
  const fraction = (src) => errorsOf(src, CHEM).filter((e) => /how a fraction is typed/.test(e));
  const formation = formula('2Na(s) + C(s, graphite) + 3⁄2O₂(g) ⟶ Na₂CO₃(s)', 'Write the heat of formation reaction equation for: Na₂CO₃(s).')
    .replace('answer="2Na(s) + C(s, graphite) + 3⁄2O₂(g) ⟶ Na₂CO₃(s)"', 'answer="2Na(s) + C(s, graphite) + 3⁄2O₂(g) ⟶ Na₂CO₃(s)" answerForm="equation"');
  assert.equal(fraction(page(formation)).length, 1);
  const told2 = formation.replace('for: Na₂CO₃(s).', 'for: Na₂CO₃(s). Type a fraction as 1/2.');
  assert.deepEqual(fraction(page(told2)), []);
  assert.deepEqual(errorsOf(page(told2), CHEM).filter((e) => /ASCII chemistry|not balanced|lowest terms|is written/.test(e)), [], 'the typed fraction is no ASCII chemistry, and the key is admitted');
  assert.equal(fraction(page(formation.replace(/3⁄2/g, '½').replace('2Na(s) + C', 'Na(s) + C').replace('Na₂CO₃(s)"', 'Na₂CO₃(s)"'))).length, 1, 'a ½ key too');
  assert.deepEqual(fraction(page(half)), [], 'a whole-number equation needs no sentence');
});

test('in the Chemistry book a textin key never carries an operator the text grader drops', () => {
  const page = (item) => `Body text.\n\n${item}\n`;
  const hit = (src, file = CHEM) => errorsOf(src, file).filter((e) => /reads as a space/.test(e));
  const speed = textin('The SI derived unit of speed is ________.', 'meters/second');
  assert.equal(hit(page(speed)).length, 1);
  assert.match(hit(page(speed))[0], /its key "meters\/second" carries an operator/);
  // An accept member is graded exactly as the key is.
  const kelvin = textin('The SI base unit of temperature is the ________.', 'kelvin').replace('answer="kelvin"', 'answer="kelvin" accept="K|°K"');
  assert.match(hit(page(kelvin))[0], /its key "°K" carries/);
  assert.equal(hit(page(textin('The SI unit of density is kg per ________.', 'kilograms·cubic meter'))).length, 1);
  // A unit NAME with no operator is a fine textin, and the life-sciences books are not read.
  assert.deepEqual(hit(page(textin('The SI base unit of length is the ________.', 'meter'))), []);
  assert.deepEqual(hit(page(textin('The SI unit of volume is the ________.', 'cubic meters').replace('answer="cubic meters"', 'answer="cubic meters" accept="m3|meters cubed"'))), []);
  assert.deepEqual(hit(page(speed), BIO), []);
});

test('in the Chemistry book a stem never says "with its sign" and never runs an inline equation into the next sentence', () => {
  const fillin = (question) => `{{< fillin\n  question="${question}"\n  answer="-23"\n  answerForm="sig-figs:2 last-digit:0"\n  hint="Use the equation above."\n>}}`;
  const page = (item) => `Body text.\n\n${item}\n`;
  const sign = (src, file = CHEM) => errorsOf(src, file).filter((e) => /with its sign/.test(e));
  assert.equal(sign(page(fillin('Convert −10 °F. Enter the temperature in degrees Celsius, with its sign.'))).length, 1);
  assert.deepEqual(sign(page(fillin('Convert −10 °F. Enter the temperature in degrees Celsius.'))), []);
  assert.deepEqual(sign(page(fillin('Enter the charge with its sign.')), BIO), []);
  const run = (src, file = CHEM) => errorsOf(src, file).filter((e) => /runs into the next sentence/.test(e));
  // Chemistry 1.3's density stem as the pilot first shipped it.
  assert.equal(run(page(fillin('Density is the ratio $d = \\frac{m}{V}$ Considering that mass is extensive, explain.'))).length, 1);
  assert.deepEqual(run(page(fillin('Density is the ratio $d = \\frac{m}{V}$. Considering that mass is extensive, explain.'))), []);
  // A unit symbol after an inline equation is not a new sentence.
  assert.deepEqual(run(page(fillin('A gas has $V = 22.4$ L at $P = 101.3$ Pa. Find its temperature.'))), []);
});

test('in the Chemistry book a fill-in hint never does the arithmetic or rules on the digits', () => {
  const fillin = (hint) => `{{< fillin\n  question="Convert 80.92 °C to kelvin."\n  answer="354.07"\n  answerForm="sig-figs:5 last-digit:0"\n  hint="${hint}"\n>}}`;
  const hit = (hint, file = CHEM) => errorsOf(`Body text.\n\n${fillin(hint)}\n`, file).filter((e) => /does the item/.test(e));
  // The pilot's own hints, before and after round 3.
  for (const hint of ['Add 273.15.', 'Multiply the Celsius temperature by nine-fifths, then add 32.', 'Divide the mass by the volume.',
    'First, cube the edge length.', 'Every digit here is significant.', 'Every nonzero digit is significant.',
    'Keep the number\'s size with a placeholder zero.', 'The digit to be dropped is a final 5.']) {
    assert.equal(hit(hint).length, 1, hint);
  }
  for (const hint of ['Use the kelvin–Celsius equation above.', 'Use the definition of density.',
    'Test each zero against the rules for leading, captive, and trailing zeros.',
    'Find the first digit to be dropped, then apply the rounding rules.',
    'Apply the rounding rule for addition and subtraction.']) {
    assert.deepEqual(hit(hint), [], hint);
  }
  assert.deepEqual(hit('Add 273.15.', MATH), [], 'a math hint states its rule by design');
  // Every auto-graded kind: chapter 2's counts are text-ins and multiple choices.
  const textin = (hint) => `{{< textin\n  question="An atom has 11 protons and 12 neutrons. What is the element?"\n  answer="sodium"\n  hint="${hint}"\n>}}`;
  const choice = (hint) => `{{< multiplechoice question="Is the compound ionic or covalent?" answer="ionic" hint="${hint}" >}}\nionic\ncovalent\n{{< /multiplechoice >}}`;
  const does = (item) => errorsOf(`Body text.\n\n${item}\n`, CHEM).filter((e) => /does the item/.test(e)).length;
  assert.equal(does(textin('Add the protons and the neutrons.')), 1);
  assert.equal(does(choice('Subtract the electrons from the protons.')), 1);
  assert.equal(does(textin('Find the atomic number in the periodic table.')), 0);
});

test('in the Chemistry book the footer never prints a blank\'s key and every Key term closes with a period', () => {
  const page = (keyTerms, footer) => `Body text.\n\n## Summary\n\n- Text.\n\n## Key terms\n\n${keyTerms}\n\n## Practice\n\n### Explain the thing\n\n${textin('The force that ________ exerts on an object is its weight.', 'gravity')}\n\n---\n\n<small>${footer}</small>\n`;
  const terms = '- **mass** — fundamental property indicating amount of matter.\n- **weight** — force that gravity exerts\n  on an object.';
  const blank = (src, file = CHEM) => errorsOf(src, file).filter((e) => /footer prints an added item's key/.test(e));
  assert.equal(blank(page(terms, 'Added: a cloze on the weight sentence (blank: gravity).')).length, 1);
  assert.deepEqual(blank(page(terms, 'Added: a cloze on the Summary sentence that defines weight.')), []);
  assert.deepEqual(blank(page(terms, 'Added: a cloze (blank: gravity).'), BIO), []);
  const period = (src, file = CHEM) => errorsOf(src, file).filter((e) => /does not end with a period/.test(e));
  assert.deepEqual(period(page(terms, 'Footer.')), []);
  const open = '- **mass** — fundamental property indicating amount of matter\n- **weight** — force that gravity exerts\n  on an object';
  assert.equal(period(page(open, 'Footer.')).length, 2);
  assert.match(period(page(open, 'Footer.'))[0], /Key terms: the entry "- \*\*mass\*\*/);
  // A definition may close inside a parenthesis or a quotation.
  assert.deepEqual(period(page('- **liter (L)** — unit of volume (also, cubic decimeter.)', 'Footer.')), []);
  assert.deepEqual(period(page(open, 'Footer.'), BIO), []);
});

// ---- Chemistry chapter 4: what its readers found ----------------------------

test('in the Chemistry book the footer never prints a graded item\'s key', () => {
  const fillin = (answer, form, display) => `{{< fillin\n  question="Determine the moles of CuCO₃ formed."\n  answer="${answer}"\n  answerForm="${form}"\n  answerDisplay="${display}"\n  hint="Use the stoichiometric factor."\n>}}`;
  const formula = (answer, form) => `{{< textin\n  question="Write the balanced equation."\n  answer="${answer}"\n  answerForm="${form}"\n  hint="Change only the coefficients."\n>}}`;
  const page = (item, footer) => `Body text.\n\n## Practice\n\n### Explain the thing\n\n${item}\n\n---\n\n<small>${footer}</small>\n`;
  const printed = (src, file = CHEM) => errorsOf(src, file).filter((e) => /the footer prints "/.test(e));
  const cyl = fillin('18.86', 'sig-figs:4 last-digit:0', '$18.86\\ \\text{mol}$');
  // Chemistry 4.3's footer as it first shipped.
  assert.equal(printed(page(cyl, 'Changes: the Check Your Learning, keyed with the source’s 18.86.')).length, 1);
  // As its display writes it: a power of ten's mantissa, thousands separators dropped.
  const big = fillin('1.234\\times10^{4}', 'sig-figs:4 last-digit:0', '$1.234 \\times 10^{4}\\ \\text{g}$');
  assert.equal(printed(page(big, 'Keyed with $1.234 \\times 10^{4}$ g.')).length, 1);
  assert.equal(printed(page(fillin('12340', 'sig-figs:4 last-digit:0', '$12{,}340\\ \\text{g}$'), 'Keyed 12,340 g.')).length, 1);
  // The footer may say what the page does with a key, in words.
  const silver = fillin('0.08644', 'sig-figs:4 last-digit:1', '$0.08644\\ \\text{g}$');
  assert.equal(printed(page(silver, 'The mass of oxygen, 0.08644 g, is worked from the table.')).length, 1);
  assert.deepEqual(printed(page(silver, 'The exercise answers are computed from this book’s periodic table.')), []);
  // A formula and an equation key.
  assert.equal(printed(page(formula('2NH₄NO₃ ⟶ 2N₂ + O₂ + 4H₂O', 'equation'), 'Keyed 2NH₄NO₃ ⟶ 2N₂ + O₂ + 4H₂O.')).length, 1);
  assert.equal(printed(page(formula('CuCO₃', 'formula'), 'The item keyed CuCO₃.')).length, 1);
  // Not a hit: counts, years, a two-figure key, a number inside a longer one,
  // a formula inside a longer one, and every other book.
  assert.deepEqual(printed(page(cyl, 'Changes: 38 items, 4 formula text-recall items; source 2019.')), []);
  assert.deepEqual(printed(page(cyl, 'Changes: the figure at 118.860 px.')), []);
  assert.deepEqual(printed(page(fillin('38', 'whole-number', '$38$'), 'Changes: 38 items.')), []);
  assert.deepEqual(printed(page(fillin('2019', 'sig-figs:4 last-digit:0', '$2019$'), 'Published 2019.')), []);
  assert.deepEqual(printed(page(fillin('1.4', 'sig-figs:2 last-digit:0', '$1.4\\ \\text{g}$'), 'Rounded to 1.4 g.')), []);
  assert.deepEqual(printed(page(formula('CO₂', 'formula'), 'The CO₂⁻ and the H₂CO₂ figures re-encoded.')), []);
  assert.deepEqual(printed(page(cyl, 'Changes: the Check Your Learning of the copper carbonate example.')), []);
  assert.deepEqual(printed(page(cyl, 'Changes: keyed with the source’s 18.86.'), BIO), []);
});

test('practicePeriodHeadings reads only the Practice block\'s objective headings', async () => {
  const { practicePeriodHeadings } = await import('./lints-leaks.mjs');
  const src = '## Summary\n\n### Body heading.\n\n## Practice\n\n### Balance chemical equations.\n\nText.\n\n### Write net ionic equations\n\n### Wait...\n\n## Key terms\n\n### Later heading.\n';
  assert.deepEqual(practicePeriodHeadings(src).map((h) => h.heading), ['Balance chemical equations.']);
  assert.deepEqual(practicePeriodHeadings('### No practice.\n'), []);
});

test('in every book a Practice heading never ends with a period', () => {
  const page = (heading) => `## Summary\n\nText.\n\n## Practice\n\n### ${heading}\n\n${textin('The ________ is balanced.', 'equation')}\n`;
  const period = (src, file = CHEM) => errorsOf(src, file).filter((e) => /Practice heading .* ends with a period/.test(e));
  assert.equal(period(page('Derive chemical equations from narrative descriptions of chemical reactions.')).length, 1);
  assert.deepEqual(period(page('Derive chemical equations from narrative descriptions of chemical reactions')), []);
  // Enforced in every book since November 12, 2026 (it was Chemistry-only
  // while 15 headings in three other books still carried the period).
  for (const file of [MATH, BIO]) {
    assert.equal(period(page('Derive chemical equations.'), file).length, 1, file);
    assert.deepEqual(period(page('Derive chemical equations'), file), [], file);
  }
});

test('in the Chemistry book a stem never sets a unit inside its math after a power of ten', () => {
  const fillin = (question, display = '$2.32 \\times 10^{8}\\ \\text{kg}$') => `{{< fillin\n  question="${question}"\n  answer="2.32\\times10^{8}"\n  answerForm="sig-figs:3 last-digit:0 scientific-notation"\n  answerDisplay="${display}"\n  hint="Use the stoichiometric factor."\n>}}`;
  const unit = (src, file = CHEM) => errorsOf(`Body text.\n\n${src}\n`, file).filter((e) => /after its power of ten inside the math/.test(e));
  assert.equal(unit(fillin('What mass of ore holds $1.00 \\times 10^{3}\\ \\text{kg}$ of copper?')).length, 1);
  assert.equal(unit(fillin('What mass of ore holds $1.00 \\times 10^{3}\\,\\text{kg}$ of copper?')).length, 1);
  assert.equal(unit(fillin('A sample of $6.02 \\times 10^{-3} \\ \\text{mol}$ is weighed.')).length, 1);
  // The unit outside the math; a unit without a power of ten; the answer display.
  assert.deepEqual(unit(fillin('What mass of ore holds $1.00 \\times 10^{3}$ kg of copper?')), []);
  assert.deepEqual(unit(fillin('What mass of ore holds $\\ce{CuCO3}$ of copper, $12.0\\ \\text{kg}$?')), []);
  assert.deepEqual(unit(fillin('What mass of ore holds $1.00 \\times 10^{3}$ kg of copper?', '$1.00 \\times 10^{3}\\ \\text{kg}$')), [], 'an answer display is not a stem');
  assert.deepEqual(unit(fillin('What mass of ore holds $1.00 \\times 10^{3}\\ \\text{kg}$ of copper?'), MATH), []);
  // Any value (chapter 5, November 14, 2026): a symbol with its value is the
  // symbol in math and the value and unit in prose.
  const value = (src) => errorsOf(`Body text.\n\n${src}\n`, CHEM).filter((e) => /after its value inside the math/.test(e));
  assert.equal(value(fillin('What mass of ore holds $12.0\\ \\text{kg}$ of copper?')).length, 1, 'a unit without a power of ten');
  assert.equal(value(fillin('Use $\\ce{SbCl3(s) + Cl2(g) -> SbCl5(s)}$ $\\Delta H^\\circ = -80\\ \\text{kJ}$ to find the change.')).length, 1);
  assert.deepEqual(value(fillin('Use $\\ce{SbCl3(s) + Cl2(g) -> SbCl5(s)}$ $\\Delta H^\\circ$ = −80 kJ to find the change.')), [], 'the ruled form');
  assert.deepEqual(value(fillin('What mass of ore holds $1.00 \\times 10^{3}\\ \\text{kg}$ of copper?')), [], 'the power-of-ten sentence alone');
});

test('in the Chemistry book a sentence gives a symbol its value with the symbol in math and the value in prose', () => {
  const hits = (src, file = CHEM) => errorsOf(`${src}\n`, file).filter((e) => /symbol's value and unit inside inline math/.test(e));
  for (const tex of [
    String.raw`q = -2.9\ \text{kJ}`,
    String.raw`T_\text{i,rebar} = 248\ {}^\circ\text{C}`,
    String.raw`c_\text{metal} = 0.13\ \text{J/g}\ {}^\circ\text{C}`,
    String.raw`\Delta H^\circ_\text{f}[\ce{O3(g)}] = +143\ \text{kJ/mol}`,
    String.raw`N = 6.022 \times 10^{23}\ \text{mol}^{-1}`,
  ]) {
    assert.equal(symbolValueUnit(tex), true, tex);
    assert.equal(hits(`Solving this gives $${tex}$, so it is settled.`).length, 1, tex);
  }
  // The ruled form; a number with no unit; arithmetic; a relation between
  // two quantities; a formula in words; a chain of equalities; display math.
  for (const body of [
    'Solving this gives $q$ = −2.9 kJ, so it is settled.',
    'Sodium has $Z = 11$.',
    String.raw`The ratio $\frac{14.82\ \text{g carbon}}{2.78\ \text{g hydrogen}} = \frac{5.33\ \text{g carbon}}{1.00\ \text{g hydrogen}}$ holds.`,
    String.raw`Since $1\ \text{ppm} = 10^{3}\ \text{ppb}$, multiply.`,
    String.raw`Here $\text{ppm} = \frac{\text{mass solute}}{\text{mass solution}} \times 10^{6}\ \text{ppm}$.`,
    String.raw`So $q = c \times m \times \Delta T = 4.184\ \text{J}$ per degree.`,
    String.raw`$$\ce{H2 + Cl2 -> 2HCl} \qquad \Delta H = -184.6\ \text{kJ}$$`,
  ]) assert.deepEqual(hits(body), [], body);
  // An answer display is a math display, and another book is not held to the form.
  const fillin = `{{< fillin\n  question="Find the enthalpy change. Enter it in kilojoules."\n  answer="-153"\n  answerForm="sig-figs:3 last-digit:0"\n  answerDisplay="$\\Delta H = -153\\ \\text{kJ}$"\n  hint="Scale the molar value."\n>}}`;
  assert.deepEqual(hits(`Body text.\n\n${fillin}`), []);
  assert.deepEqual(hits(String.raw`Solving this gives $q = -2.9\ \text{kJ}$.`, MATH), []);
});

// ---- punctuation closing a \ce{…} -------------------------------------------

test('ceTrailingPunctuation finds a period, comma, or semicolon before a \\ce closing brace', () => {
  assert.deepEqual(ceTrailingPunctuation(String.raw`\ce{H2O.}`), [{ index: 0, written: String.raw`\ce{H2O.}`, mark: '.' }]);
  assert.deepEqual(ceTrailingPunctuation(String.raw`x + \ce{NaCl(s),}`).map((h) => [h.index, h.mark]), [[4, ',']]);
  assert.deepEqual(ceTrailingPunctuation(String.raw`\ce{A -> B;} \ce{C_{(l)}.}`).map((h) => h.written), [String.raw`\ce{A -> B;}`, String.raw`\ce{C_{(l)}.}`]);
  // A hydrate dot inside, punctuation after the brace, an escaped mark, and an unclosed \ce are not.
  for (const tex of [String.raw`\ce{CuSO4.5H2O}`, String.raw`\ce{H2O}.`, String.raw`\ce{A\;}`, String.raw`\ce{H2O.`, String.raw`\ce{2H2 + O2 -> 2H2O}`]) {
    assert.deepEqual(ceTrailingPunctuation(tex), [], tex);
  }
});

test('punctuation closing a \\ce{…} is an error in every book, body and item text alike', () => {
  const body = 'Water is $\\ce{H2O.}$\n';
  const errors = errorsOf(body, CHEM);
  assert.equal(errors.length, 1);
  assert.match(errors[0], /^L1: `\\ce\{H2O\.\}` ends with `\.` inside the braces — mhchem draws it as part of the formula/);
  assert(hasError('{{< textin\n  question="Balance $\\ce{H2 + O2 -> H2O;}$ then go on."\n  answer="x"\n  hint="h"\n>}}\n', /ends with `;` inside the braces/, CHEM));
  assert(hasError('$$\\ce{A -> B,}$$\n', /ends with `,` inside the braces/, MATH));
  assert(!hasError('Water is $\\ce{H2O}$.\n', /inside the braces/, CHEM));
  assert(!hasError('```\n$\\ce{H2O.}$\n```\n', /inside the braces/, CHEM));
});

test('Chemistry chapter 6: a configuration and an ordering declare their forms and close with how they are typed', async () => {
  const { CONFIGURATION_CLOSING, ORDERING_CLOSING } = await import('./lints-leaks.mjs');
  const page = (item) => `Body text.\n\n${item}\n`;
  const item = (question, answer, form = '') => `{{< textin\n  question="${question}"\n  answer="${answer}"${form ? `\n  answerForm="${form}"` : ''}\n  hint="Fill the subshells in order of energy."\n>}}`;
  const errors = (src) => errorsOf(src, CHEM);
  const N = 'Using complete subshell notation, predict the electron configuration of the following atom: N.';
  const RANK = 'Based on their positions in the periodic table, rank the following atoms in order of increasing first ionization energy: F, Li, N, Rb.';
  // Graded as words, a configuration must be typed character for character, and an ordering in any order passes.
  assert.equal(errors(page(item(N, '1s²2s²2p³'))).filter((e) => /electron configuration graded as words — declare answerForm="configuration"/.test(e)).length, 1);
  assert.equal(errors(page(item(RANK, 'Rb < Li < N < F'))).filter((e) => /ordering graded as words .* declare answerForm="ordering"/.test(e)).length, 1);
  // Declared, each stem closes with the sentence that says how it is typed.
  const closing = (src) => errors(src).filter((e) => /has no typing guide/.test(e));
  assert.equal(closing(page(item(N, '1s²2s²2p³', 'configuration'))).length, 1);
  assert.deepEqual(closing(page(item(`${N} ${CONFIGURATION_CLOSING}`, '1s²2s²2p³', 'configuration'))), []);
  assert.equal(closing(page(item(RANK, 'Rb < Li < N < F', 'ordering'))).length, 1);
  assert.deepEqual(closing(page(item(`${RANK} ${ORDERING_CLOSING}`, 'Rb < Li < N < F', 'ordering'))), []);
  // The sentences print no key: no subshell with a count, no member.
  assert.doesNotMatch(CONFIGURATION_CLOSING, /\d/);
  assert.doesNotMatch(ORDERING_CLOSING, /\b[A-Z][a-z]?\b(?<!\bType)/);
  // Every lint is clean on the declared, closed items.
  assert.deepEqual(errors(page(item(`${N} ${CONFIGURATION_CLOSING}`, '1s²2s²2p³', 'configuration'))), []);
  assert.deepEqual(errors(page(item(`${RANK} ${ORDERING_CLOSING}`, 'Rb < Li < N < F', 'ordering'))), []);
  // A subshell is a word: "2p" under a plain textin needs no form (6.3, "Identify the subshell …").
  const subshell = item('Identify the subshell in which electrons with the following quantum numbers are found: n = 2, l = 1. Enter the subshell.', '2p');
  assert.deepEqual(errors(page(subshell)), []);
  // The footer may not print either key.
  const footer = (key, form, question, body) => `Body text.\n\n## Practice\n\n### Explain the thing\n\n${item(question, key, form)}\n\n---\n\n<small>${body}</small>\n`;
  const printed = (src) => errors(src).filter((e) => /the footer prints "/.test(e));
  assert.equal(printed(footer('1s²2s²2p³', 'configuration', `${N} ${CONFIGURATION_CLOSING}`, 'Keyed 1s²2s²2p³ from the source.')).length, 1);
  assert.equal(printed(footer('Rb < Li < N < F', 'ordering', `${RANK} ${ORDERING_CLOSING}`, 'Keyed Rb < Li < N < F from the source.')).length, 1);
  assert.deepEqual(printed(footer('Rb < Li < N < F', 'ordering', `${RANK} ${ORDERING_CLOSING}`, 'The orderings are the source’s.')), []);
  // A stem that lists its members in the key's order, or the reverse, answers the item.
  const answers = (question, key) => errors(page(item(`${question} ${ORDERING_CLOSING}`, key, 'ordering'))).filter((e) => /the stem answers the item/.test(e));
  const RADIUS = 'Based on their positions in the periodic table, list the following atoms in order of increasing radius:';
  assert.equal(answers(`${RADIUS} Mg, Ca, Rb, Cs.`, 'Mg < Ca < Rb < Cs').length, 1, 'the key\'s order');
  assert.equal(answers('List the following ions in order of increasing radius: K⁺, Ca²⁺, Al³⁺, Si⁴⁺.', 'Si⁴⁺ < Al³⁺ < Ca²⁺ < K⁺').length, 1, 'the reverse');
  assert.deepEqual(answers(`${RADIUS} Ca, Cs, Mg, Rb.`, 'Mg < Ca < Rb < Cs'), [], 'alphabetical');
  assert.deepEqual(answers(RANK, 'Rb < Li < N < F'), [], '6.5 Exercise 5 as printed: F, Li, N, Rb');
});

test('Chemistry 6.3: a set of quantum numbers declares its form, closes with how it is typed, and is not printed by its stem', async () => {
  const { QUANTUM_CLOSING, quantumStemAnswers } = await import('./lints-leaks.mjs');
  const page = (item) => `Body text.\n\n${item}\n`;
  const item = (question, answer, form = '', accept = '') => `{{< textin\n  question="${question}"\n  answer="${answer}"${form ? `\n  answerForm="${form}"` : ''}${accept ? `\n  accept="${accept}"` : ''}\n  hint="Identify the kind of orbital the outline shows."\n>}}`;
  const errors = (src) => errorsOf(src, CHEM);
  const ASK = 'Consider the orbitals shown here in outline. Write a set of quantum numbers for an electron in an orbital of type (x) in a shell with n = 4. Enter the set for the orbital of type (x).';
  // Graded as words, only the key's own set would pass.
  assert.equal(errors(page(item(ASK, '4 0 0 +1/2'))).filter((e) => /set of quantum numbers graded as words .* declare answerForm="quantum-numbers"/.test(e)).length, 1);
  // Declared, the stem closes with the sentence that says how it is typed.
  const closing = (src) => errors(src).filter((e) => /has no typing guide/.test(e));
  assert.equal(closing(page(item(ASK, '4 0 0 +1/2', 'quantum-numbers'))).length, 1);
  assert.deepEqual(closing(page(item(`${ASK} ${QUANTUM_CLOSING}`, '4 0 0 +1/2', 'quantum-numbers'))), []);
  // The sentence names the values, never a value; and it carries no math (a textin stem takes no $).
  assert.doesNotMatch(QUANTUM_CLOSING, /\d|\$/);
  // Every lint is clean on the declared, closed item.
  assert.deepEqual(errors(page(item(`${ASK} ${QUANTUM_CLOSING}`, '4 0 0 +1/2', 'quantum-numbers'))), []);
  // The key is written in print and is a possible set; no accept list (lints.mjs, through chemKeyProblem).
  const { lintHugo } = await import('./lints.mjs');
  const keyRule = (answer, accept, pattern) => lintHugo(page(item(`${ASK} ${QUANTUM_CLOSING}`, answer, 'quantum-numbers', accept)), CHEM).errors.filter((e) => pattern.test(e)).length;
  assert.equal(keyRule('4 0 0 1/2', '', /not written in print/), 1);
  assert.equal(keyRule('4 4 0 +1/2', '', /l runs from 0 to n − 1/), 1);
  assert.equal(keyRule('4 0 0 +1/2', '4 0 0 −1/2', /no accept list/), 1);
  assert.equal(keyRule('4 0 0 +1/2', '', /./), 0);
  // A stem that prints a possible set of the key's n and l answers the item; one of another subshell does not.
  const answers = (question, key) => errors(page(item(`${question} ${QUANTUM_CLOSING}`, key, 'quantum-numbers'))).filter((e) => /the stem answers the item/.test(e));
  assert.equal(answers(`${ASK} For example, 4 0 0 ½ is one.`, '4 0 0 +1/2').length, 1);
  assert.equal(answers(`${ASK} For example, n = 4, l = 0, mₗ = 0, and mₛ = −1/2.`, '4 0 0 +1/2').length, 1, 'labelled, the other spin');
  assert.deepEqual(answers(`${ASK} Not 4 1 0 ½.`, '4 0 0 +1/2'), [], 'another subshell');
  assert.equal(quantumStemAnswers(ASK, '4 0 0 +1/2'), null, 'the source stem prints n alone');
  // The footer may not print the key.
  const footer = (body) => `Body text.\n\n## Practice\n\n### Explain the thing\n\n${item(`${ASK} ${QUANTUM_CLOSING}`, '4 0 0 +1/2', 'quantum-numbers')}\n\n---\n\n<small>${body}</small>\n`;
  const printed = (src) => errors(src).filter((e) => /the footer prints "/.test(e));
  assert.equal(printed(footer('Keyed 4 0 0 +1/2 from the source.')).length, 1);
  assert.deepEqual(printed(footer('Any correct set of the shell and orbital type is accepted.')), []);
});

test('scientific-notation is declared only where the question asks for it, in every book', () => {
  const fillin = (question, form) => `Body text.\n\n{{< fillin\n  question="${question}"\n  answer="1.23\\times10^{-4}"\n  answerForm="${form}"\n  hint="Count the places the point moves."\n>}}\n`;
  const hit = (src, file) => errorsOf(src, file).filter((e) => /declares scientific-notation, but the question does not ask for it/.test(e));
  assert.equal(hit(fillin('What is the energy of the photon? Enter the energy in joules.', 'sig-figs:3 last-digit:0 scientific-notation'), CHEM).length, 1);
  assert.deepEqual(hit(fillin('Express 0.000123 in scientific notation.', 'sig-figs:3 last-digit:0 scientific-notation'), CHEM), []);
  assert.deepEqual(hit(fillin('Write the number in exponential notation.', 'sig-figs:3 last-digit:0 scientific-notation'), CHEM), []);
  assert.deepEqual(hit(fillin('What is the energy of the photon?', 'sig-figs:3 last-digit:0'), CHEM), [], 'no token, nothing asked');
  assert.equal(hit(fillin('Write 0.000123 as a decimal times a power of ten.', 'scientific-notation'), MATH).length, 1, 'every book');
});

test('Chemistry chapter 7: a formal-charge fill-in closes word for word about an element its stem prints', async () => {
  const { FORMAL_CHARGE_CLOSING } = await import('./lints-leaks.mjs');
  const close = (symbol) => FORMAL_CHARGE_CLOSING.replace('<Symbol>', symbol);
  const fillin = (question, form = 'whole-number') => `Body text.\n\n{{< fillin\n  question="${question}"\n  answer="0"\n  answerForm="${form}"\n  hint="Use the formal-charge equation."\n>}}\n`;
  const rule = (src, file = CHEM) => errorsOf(src, file).filter((e) => /a formal charge — /.test(e));
  const CO = 'Calculate the formal charge for each atom in the carbon monoxide molecule, shown in the figure above.';
  const NCL = 'Determine the formal charge for each atom in NCl₃.';
  assert.deepEqual(rule(fillin(`${NCL} ${close('Cl')}`)), []);
  assert.deepEqual(rule(fillin(`${NCL} ${close('N')}`)), []);
  assert.deepEqual(rule(fillin(`Calculate the formal charge of chlorine in the molecule BeCl₂. ${close('Cl')}`)), [], 'Cl inside BeCl₂');
  assert.equal(rule(fillin(`${NCL} ${close('O')}`)).length, 1, 'an element the stem does not print');
  assert.match(rule(fillin(`${NCL} ${close('O')}`))[0], /which the stem does not print/);
  assert.deepEqual(rule(fillin(`${CO} ${close('C')}`)), [], 'carbon, named in words');
  assert.deepEqual(rule(fillin(`${CO} ${close('O')}`)), [], 'oxygen, as "monoxide"');
  assert.equal(rule(fillin(`${CO} ${close('N')}`)).length, 1);
  assert.equal(rule(fillin(`${NCL} Enter the formal charge of Cl as a signed number, the sign first, as +1 or −1.`)).length, 1, 'another example pair');
  assert.equal(rule(fillin(`${NCL} Enter the formal charge of chlorine.`)).length, 1);
  assert.equal(rule(fillin(NCL)).length, 1, 'no closing');
  assert.equal(rule(fillin(`${NCL} ${close('Xx')}`)).length, 1, 'no element');
  assert.deepEqual(rule(fillin(`${NCL} Enter the charge.`, 'sig-figs:2 last-digit:0')), [], 'only a whole-number fill-in');
  assert.deepEqual(rule(fillin(`${NCL} Enter it.`), BIO), [], 'only the Chemistry book');
});

test('a character the build\'s strict KaTeX refuses inside \\text{…} is an error at the page, in every book (7.5\'s D_\\text{C≡O} broke the build)', () => {
  const rule = (src, file = CHEM) => errorsOf(src, file).filter((e) => /strict mode\) refuses inside a text group/.test(e));
  assert.equal(rule('The energy $D_\\text{C≡O}$ is large.\n').length, 1);
  assert.match(rule('The energy $D_\\text{C≡O}$ is large.\n')[0], /holds "≡" \(U\+2261\)/);
  assert.equal(rule('$$\\Delta H = D_\\text{2×H}$$\n').length, 1, 'display math, a times sign');
  assert.equal(rule('A $\\text{−3}$ charge.\n', MATH).length, 1, 'every book');
  // What strict mode takes inside a group stays legal: an en dash, a degree sign, an accent.
  assert.deepEqual(rule('Bond $D_\\text{H–H}$ at 25 $\\text{°C}$, $\\text{café}$, and $\\ce{C#O}$ outside a group.\n'), []);
});

test('Chemistry chapter 7: a stem\'s electron-pair geometry is asked before its molecular structure', () => {
  const t = (closing) => `{{< textin\n  question="What are the electron-pair geometry and the molecular structure of the following molecule or ion? ClF₅. ${closing}"\n  answer="octahedral"\n  hint="Count the regions of electron density."\n>}}\n`;
  const rule = (src) => errorsOf(src, CHEM).filter((e) => /asked after the molecular structure/.test(e));
  const EP = 'Enter the electron-pair geometry.';
  const MS = 'Enter the molecular structure.';
  assert.deepEqual(rule(`Body.\n\n${t(EP)}\n${t(MS)}`), []);
  assert.equal(rule(`Body.\n\n${t(MS)}\n${t(EP)}`).length, 1);
  assert.deepEqual(rule(`Body.\n\n${t(MS)}`), [], 'a molecular structure alone (7.6 [21])');
});

test('Chemistry chapter 7: a footer that keeps a defect "as printed" needs a Source note on the page', () => {
  const rule = (src) => errorsOf(src, CHEM).filter((e) => /no `\*Source note:\*`/.test(e));
  const footer = '\n---\n\n<small>Changes: the dropped minus sign in the last line kept as printed.</small>\n';
  assert.equal(rule(`Body text.\n${footer}`).length, 1);
  assert.deepEqual(rule(`Body text.\n\n*Source note:* the source drops a minus sign here.\n${footer}`), []);
  assert.deepEqual(rule('Body text.\n\n<small>Changes: none.</small>\n'), []);
});

test('Chemistry: a heading of the page called "the … section" is a subsection (7.3)', () => {
  const rule = (src, file = CHEM) => errorsOf(src, file).filter((e) => /names a heading of this page/.test(e));
  const page = (sentence) => `## Lewis Symbols\n\nText.\n\n## Formal Charge\n\n${sentence}\n`;
  assert.equal(rule(page('As the Lewis Symbols section above shows, the dots are electrons.')).length, 1);
  assert.match(rule(page('See the Lewis Symbols section above.'))[0], /the Lewis Symbols subsection/);
  assert.deepEqual(rule(page('See the Lewis Symbols subsection above.')), []);
  assert.deepEqual(rule(page('See [Section 7.3 Lewis Symbols and Structures](/x/) and the Bond Energies section of that page.')), [], 'a numbered Section, a heading of another page');
  assert.deepEqual(rule(page('See the Lewis Symbols section above.'), BIO), [], 'Chemistry only');
});
