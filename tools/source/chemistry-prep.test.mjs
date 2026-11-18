import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// chemistry-prep.py is driven as a subprocess against a throwaway fixture
// bundle (CHEM_BUNDLE points it away from sources/openstax), as its
// Anatomy and Physiology sibling is.

const SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'chemistry-prep.py');

const example = (id, heading) => `<example id="${id}">
<para id="${id}-p"><title>An Example</title>A 4.25-L flask contains 3.46 mol CO<sub>2</sub> at 229 °C. Calculate the pressure:</para>
<para id="${id}-s"><title>Solution</title>Worked.</para>
<para id="${id}-c"><title>${heading}</title>
A 560-mL flask contains 21.3 g N<sub>2</sub> at 145 °C. Calculate the pressure of N<sub>2</sub>:</para>
<para id="${id}-a">(a) from the ideal gas law</para>
<para id="${id}-b">(b) from the van der Waals equation</para>
<note id="${id}-n">
<title>Answer:</title>
<para id="${id}-k">(a) 46.562 atm; (b) 46.594 atm</para>
</note>
</example>`;

const MODULE = `<document>
<title>Non-Ideal Gas Behavior</title>
<metadata><md:abstract><list><item>Describe the van der Waals equation</item></list></md:abstract></metadata>
<content>
${example('ex1', 'Check your Learning')}
${example('ex2', 'Check Your Learning')}
<section class="exercises"><title>Exercises</title></section>
</content>
</document>`;

test('keys reads a Check Your Learning whatever the capitals of its title (9.6 prints "Check your Learning")', () => {
  const bundle = mkdtempSync(path.join(tmpdir(), 'chemistry-prep-'));
  try {
    mkdirSync(path.join(bundle, 'modules', 'm00001'), { recursive: true });
    writeFileSync(path.join(bundle, 'modules', 'm00001', 'index.cnxml'), MODULE, 'utf8');
    const out = execFileSync('python3', [SCRIPT, 'keys', 'm00001'], { encoding: 'utf8', env: { ...process.env, CHEM_BUNDLE: bundle } });
    const checks = out.match(/CHECK YOUR LEARNING:/g) ?? [];
    assert.equal(checks.length, 2, 'both examples\' Check Your Learning are read, the lower-case title included');
    assert.doesNotMatch(out, /no Check Your Learning \/ Answer pair found/);
    assert.match(out, /ANSWER \(source key\): \(a\) 46\.562 atm; \(b\) 46\.594 atm/);
  } finally {
    rmSync(bundle, { recursive: true, force: true });
  }
});
