import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// microbiology-prep.py is a Python tool with no Python test runner wired
// into package.json's `test` script, so these tests drive the real script
// as a subprocess against a throwaway fixture bundle (MICROBIO_BUNDLE /
// MICROBIO_GLOSSARY point it away from sources/openstax) rather than
// importing it.

const SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'microbiology-prep.py');

function writeModule(bundleDir, moduleId, cnxml) {
  const dir = path.join(bundleDir, 'modules', moduleId);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, 'index.cnxml'), cnxml, 'utf8');
}

function runTerms(moduleId, bundleDir, glossaryId) {
  return execFileSync('python3', [SCRIPT, 'terms', moduleId], {
    encoding: 'utf8',
    env: { ...process.env, MICROBIO_BUNDLE: bundleDir, MICROBIO_GLOSSARY: glossaryId },
  });
}

test('terms resolves a body term whose headword is nested inside two <emphasis> tags', () => {
  const bundle = mkdtempSync(path.join(tmpdir(), 'microbio-prep-'));
  try {
    writeModule(bundle, 'm00001', `<document>
<content>
<para>Foxes may carry <term id="term-1"><emphasis effect="italics">Vulpes</emphasis> fever</term> in the wild.</para>
</content>
</document>`);
    writeModule(bundle, 'g00000', `<document>
<content>
<item><emphasis><emphasis effect="italics">Vulpes</emphasis> fever</emphasis> a fictitious illness carried by foxes</item>
</content>
</document>`);

    const out = runTerms('m00001', bundle, 'g00000');
    assert.match(out, /\*\*\*Vulpes\* fever\*\* — a fictitious illness carried by foxes\.\s+<!-- provenance: glossary -->/);
    assert.doesNotMatch(out, /NO GLOSSARY ENTRY/);
  } finally {
    rmSync(bundle, { recursive: true, force: true });
  }
});

test('terms matches a plural body term to a singular Glossary headword (s/es) and names the matched headword', () => {
  const bundle = mkdtempSync(path.join(tmpdir(), 'microbio-prep-'));
  try {
    writeModule(bundle, 'm00002', `<document>
<content>
<para>Several <term id="term-1">test complexes</term> were observed.</para>
</content>
</document>`);
    writeModule(bundle, 'g00000', `<document>
<content>
<item><emphasis>test complex</emphasis> a fictitious calcified structure</item>
</content>
</document>`);

    const out = runTerms('m00002', bundle, 'g00000');
    assert.match(out, /\*\*test complexes\*\* — a fictitious calcified structure\..*appendix headword: "test complex"/s);
    assert.doesNotMatch(out, /NO GLOSSARY ENTRY/);
  } finally {
    rmSync(bundle, { recursive: true, force: true });
  }
});
