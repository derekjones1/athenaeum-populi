import test from 'node:test';
import { normalizeText } from '../../assets/js/lib/text/check-text.mjs';
import assert from 'node:assert/strict';
import { directlyAboveLeak, lintLeaks, numericKey, unicodeFormula } from './lints-leaks.mjs';

const BIO = 'content/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology.md';
const AP = 'content/life-health-sciences/anatomy-physiology/01-an-introduction-to-the-human-body/07-medical-imaging.md';
const MATH = 'content/math/prealgebra/01-whole-numbers/01-introduction.md';
const KC = 'content/life-health-sciences/biology/knowledge-check-01-03.md';

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
  for (const notChemistry of ['H1N1', 'B12', 'C3', 'SV40', 'PCV13', 'CD4', 'O+', 'B-', 'K-', 'NAD', 'CO₂', 'ATP']) {
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
    'The code `CO2` is documentation.',
    '<small>Changes: set in Unicode where the source prints "H+" and CO2.</small>',
  ].join('\n\n');
  assert.deepEqual(errorsOf(clean).filter((e) => /ASCII chemistry/.test(e)), []);
  assert(!hasError('Plants take in CO2.\n', /ASCII chemistry/, MATH), 'math books are out of scope');
});

// ---- the "directly above" leak -------------------------------------------------

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
  assert(!hasError(`## Practice\n\n### One\n\n${printer}\n\n### Two\n\n${recall}\n`, /directly above/), 'a heading between them');
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
