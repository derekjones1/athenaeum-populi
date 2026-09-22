import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// anatomy-physiology-prep.py is driven as a subprocess against a throwaway
// fixture bundle (AP_BUNDLE points it away from sources/openstax), like its
// Microbiology sibling. The difference under test: this book's key terms
// come from each module's OWN <glossary>, in source order, with the body
// <term>s checked against it both ways — there is no appendix.

const SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'anatomy-physiology-prep.py');

function writeModule(bundleDir, moduleId, cnxml) {
  const dir = path.join(bundleDir, 'modules', moduleId);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, 'index.cnxml'), cnxml, 'utf8');
}

function run(args, bundleDir) {
  return execFileSync('python3', [SCRIPT, ...args], {
    encoding: 'utf8',
    env: { ...process.env, AP_BUNDLE: bundleDir },
  });
}

const MODULE = `<document>
<metadata><md:title>Test</md:title><md:abstract><list><item>Describe the femur</item></list></md:abstract></metadata>
<content>
<para>The <term id="t1">femur</term> is the thigh bone. The <term id="t2">patellae</term> are kneecaps. A <term id="t3">condyle</term> is a rounded end.</para>
<note class="anatomy interactive"><label/><para>Watch this <link url="http://openstax.org/l/femur">video</link> on the femur. Which end is proximal?</para></note>
<section class="summary"><title>Chapter Review</title><para>The femur is long.</para></section>
<section class="multiple-choice"><title>Review Questions</title>
<exercise id="ex1"><problem><para>The thigh bone is the ________.</para><list><item>tibia</item><item>femur</item></list></problem><solution><para>B</para></solution></exercise>
</section>
<section class="interactive-exercise"><title>Interactive Link Questions</title>
<exercise id="ex2"><problem><para>Watch this <link url="http://openstax.org/l/femur">video</link>. Which end is proximal?</para></problem><solution><para>The hip end.</para></solution></exercise>
</section>
<section class="references"><title>References</title><para>Smith J. Bones. 2001.</para></section>
</content>
<glossary>
<definition><term>femur</term><meaning>thigh bone</meaning></definition>
<definition><term>patella</term><meaning>kneecap</meaning></definition>
<definition><term>trochanter</term><meaning>large bony process</meaning></definition>
</glossary>
</document>`;

test('terms lists the module glossary in source order and reconciles it with the body terms both ways', () => {
  const bundle = mkdtempSync(path.join(tmpdir(), 'ap-prep-'));
  try {
    writeModule(bundle, 'm00001', MODULE);
    const out = run(['terms', 'm00001'], bundle);
    const bullets = out.split('\n').filter((l) => l.startsWith('- **'));
    assert.deepEqual(bullets.map((l) => l.slice(0, 20)), ['- **femur** — thigh ', '- **patella** — knee', '- **trochanter** — l']);
    // patellae (body) matches patella (glossary); trochanter is glossary-only.
    assert.doesNotMatch(bullets[1], /never bolded/);
    assert.match(bullets[2], /never bolded as a body <term>/);
    // condyle is body-only: bold in the body, not a bullet.
    assert.match(out, /NO glossary entry[\s\S]*- condyle/);
    assert.match(out, /TOTAL glossary definitions \(bullets expected\): 3; distinct body <term>s: 3/);
  } finally {
    rmSync(bundle, { recursive: true, force: true });
  }
});

test('keys prints objectives from the abstract, every exercise set with its key, the feature box question, and the references flag', () => {
  const bundle = mkdtempSync(path.join(tmpdir(), 'ap-prep-'));
  try {
    writeModule(bundle, 'm00001', MODULE);
    const out = run(['keys', 'm00001'], bundle);
    assert.match(out, /## OBJECTIVES[\s\S]*- Describe the femur/);
    assert.match(out, /REVIEW QUESTIONS[\s\S]*\[ex1\] The thigh bone is the ________\.\n\s+A\. tibia\n\s+B\. femur\n\s+KEY: B/);
    assert.match(out, /INTERACTIVE LINK QUESTIONS[\s\S]*\[ex2\][\s\S]*KEY: The hip end\.\n\s+MODULE-FIXES-ANSWER:/);
    assert.match(out, /\[anatomy interactive\] \(untitled\) \| links: http:\/\/openstax\.org\/l\/femur\n\s+question: Which end is proximal\?/);
    assert.match(out, /## REFERENCES: 1 paragraph\(s\)/);
    assert.match(out, /## GLOSSARY[\s\S]*- \*\*femur\*\* — thigh bone/);
  } finally {
    rmSync(bundle, { recursive: true, force: true });
  }
});

const SUPSUB_MODULE = `<document>
<metadata><md:title>Test</md:title><md:abstract><list><item>Describe ions</item></list></md:abstract></metadata>
<content>
<para>Fluoride is written F<sup>–</sup>. A negatively charged ion is known as an <term id="t9">anion</term>. Using magnesium (Mg) as an example, this can be written Mg<sup>++</sup> or Mg<sup>2+</sup>. The ionic form of selenium (Se) is typically written Se<sup>2–</sup>.</para>
<section class="multiple-choice"><title>Review Questions</title>
<exercise id="fs-id1482023"><problem><para>Which of the following is a molecule, but not a compound?</para><list><item>H<sub>2</sub>O</item><item><sup>2</sup>H</item></list></problem><solution><para>B</para></solution></exercise>
</section>
</content>
</document>`;

test('keys renders <sup>/<sub> as Unicode super-/subscript characters in exercise options and body prose (the m46000 fs-id1482023 bug)', () => {
  const bundle = mkdtempSync(path.join(tmpdir(), 'ap-prep-'));
  try {
    writeModule(bundle, 'm46000', SUPSUB_MODULE);
    const out = run(['keys', 'm46000'], bundle);
    // option B is <item><sup>2</sup>H</item> — was misread as "2 H"
    assert.match(out, /B\. ²H/);
    // body prose: Mg<sup>2+</sup> and Se<sup>2–</sup>
    assert.match(out, /Mg²⁺/);
    assert.match(out, /Se²⁻/);
  } finally {
    rmSync(bundle, { recursive: true, force: true });
  }
});

test('a module without a glossary is reported as having no Key terms block', () => {
  const bundle = mkdtempSync(path.join(tmpdir(), 'ap-prep-'));
  try {
    writeModule(bundle, 'm00002', '<document><content><para>A <term>word</term>.</para></content></document>');
    assert.match(run(['terms', 'm00002'], bundle), /NO <glossary>/);
    assert.match(run(['keys', 'm00002'], bundle), /module has NO <glossary>/);
  } finally {
    rmSync(bundle, { recursive: true, force: true });
  }
});
