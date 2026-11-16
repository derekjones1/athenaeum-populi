---
title: Formal Charges and Resonance
description: >-
  Calculating the formal charge of each atom in a Lewis structure, using formal
  charges to choose the most likely structure of a molecule or ion, and
  resonance forms and the resonance hybrid — adapted from OpenStax Chemistry 2e,
  Section 7.4.
source_section: "7.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Compute formal charges for atoms in any Lewis structure
- Use formal charges to identify the most reasonable Lewis structure for a given molecule
- Explain the concept of resonance and draw Lewis structures representing resonance forms for a given molecule
{{< /callout >}}

In the previous section, [Section 7.3 Lewis Symbols and Structures](/physical-sciences/chemistry/07-chemical-bonding-and-molecular-geometry/03-lewis-symbols-and-structures/), we discussed how to write Lewis structures for molecules and polyatomic ions. As we have seen, however, in some cases, there is seemingly more than one valid structure for a molecule. We can use the concept of formal charges to help us predict the most appropriate Lewis structure when more than one is reasonable.

## Calculating Formal Charge

The **formal charge** of an atom in a molecule is the *hypothetical* charge the atom would have if we could redistribute the electrons in the bonds evenly between the atoms. Another way of saying this is that formal charge results when we take the number of valence electrons of a neutral atom, subtract the nonbonding electrons, and then subtract the number of bonds connected to that atom in the Lewis structure.

Thus, we calculate formal charge as follows:

$$
\begin{aligned}
\text{formal charge} = {} & \#\ \text{valence shell electrons (free atom)} \\
& - \#\ \text{lone pair electrons} \\
& - \frac{1}{2}\ \#\ \text{bonding electrons}
\end{aligned}
$$

We can double-check formal charge calculations by determining the sum of the formal charges for the whole structure. The sum of the formal charges of all atoms in a molecule must be zero; the sum of the formal charges in an ion should equal the charge of the ion.

We must remember that the formal charge calculated for an atom is not the *actual* charge of the atom in the molecule. Formal charge is only a useful bookkeeping procedure; it does not indicate the presence of actual charges.

**Example.** *Calculating Formal Charge from Lewis Structures.* Assign formal charges to each atom in the interhalogen ion ICl₄⁻.

**Solution.**

1. *We divide the bonding electron pairs equally for all I–Cl bonds:*

{{< mediafigure src="chemistry/CNX_Chem_07_04_ICL4_img" kind="diagram" eager="true" alt="A Lewis structure in square brackets with a minus sign at the upper right: an iodine atom with two lone pairs, one above it and one below it, single-bonded to four chlorine atoms, at its left, its right, its upper right, and its lower left. Each chlorine atom has three lone pairs." >}}
{{< /mediafigure >}}

2. *We assign lone pairs of electrons to their atoms*. Each Cl atom now has seven electrons assigned to it, and the I atom has eight.
3. *Subtract this number from the number of valence electrons for the neutral atom:*

   I: 7 − 8 = −1

   Cl: 7 − 7 = 0

   The sum of the formal charges of all the atoms equals −1, which is identical to the charge of the ion (−1).

{{< mediafigure src="chemistry/CNX_Chem_07_04_CO_img" kind="diagram" alt="A Lewis structure: a carbon atom triple-bonded to an oxygen atom, with one lone pair on the carbon atom at its left and one lone pair on the oxygen atom at its right." >}}
{{< /mediafigure >}}

{{< fillin
  question="Calculate the formal charge for each atom in the carbon monoxide molecule, shown in the figure above. Enter the formal charge of C as a signed number, the sign first, as +2 or −2."
  answer="-1"
  answerForm="whole-number"
  answerDisplay="$-1$"
  hint="Apply the formal-charge equation to each atom of the structure in the figure."
>}}

{{< fillin
  question="Calculate the formal charge for each atom in the carbon monoxide molecule, shown in the figure above. Enter the formal charge of O as a signed number, the sign first, as +2 or −2."
  answer="1"
  answerForm="whole-number"
  answerDisplay="$+1$"
  hint="Apply the formal-charge equation to each atom of the structure in the figure."
>}}

**Example.** *Calculating Formal Charge from Lewis Structures.* Assign formal charges to each atom in the interhalogen molecule BrCl₃.

**Solution.**

1. *Assign one of the electrons in each Br–Cl bond to the Br atom and one to the Cl atom in that bond:*

{{< mediafigure src="chemistry/CNX_Chem_07_04_BRCL3_img" kind="diagram" alt="A Lewis structure: a bromine atom with two lone pairs above it, single-bonded to three chlorine atoms, at its left, its right, and below it. Each chlorine atom has three lone pairs." >}}
{{< /mediafigure >}}

2. *Assign the lone pairs to their atom.* Now each Cl atom has seven electrons and the Br atom has seven electrons.
3. *Subtract this number from the number of valence electrons for the neutral atom.* This gives the formal charge:

   Br: 7 − 7 = 0

   Cl: 7 − 7 = 0

   All atoms in BrCl₃ have a formal charge of zero, and the sum of the formal charges totals zero, as it must in a neutral molecule.

{{< fillin
  question="Determine the formal charge for each atom in NCl₃. Enter the formal charge of N as a signed number, the sign first, as +2 or −2."
  answer="0"
  answerForm="whole-number"
  answerDisplay="$0$"
  hint="Draw the Lewis structure of the molecule, then apply the formal-charge equation to each atom."
>}}

{{< fillin
  question="Determine the formal charge for each atom in NCl₃. Enter the formal charge of Cl as a signed number, the sign first, as +2 or −2."
  answer="0"
  answerForm="whole-number"
  answerDisplay="$0$"
  hint="Draw the Lewis structure of the molecule, then apply the formal-charge equation to each atom."
>}}

{{< selfcheck question="Determine the formal charge for each atom in NCl₃." hint="Draw the Lewis structure of the molecule, then apply the formal-charge equation to each atom." >}}
N: 0; all three Cl atoms: 0.

{{< mediafigure src="chemistry/CNX_Chem_07_04_Ex070402_img" kind="diagram" alt="A Lewis structure: a nitrogen atom with one lone pair above it, single-bonded to three chlorine atoms, at its left, its right, and below it. Each chlorine atom has three lone pairs." >}}
{{< /mediafigure >}}

Nitrogen has one lone pair and is single-bonded to three chlorine atoms, and each chlorine atom has three lone pairs.
===CHECKS===
all three Cl atoms: 0
nitrogen has one lone pair and is single-bonded to three chlorine atoms
each chlorine atom has three lone pairs
{{< /selfcheck >}}

## Using Formal Charge to Predict Molecular Structure

The arrangement of atoms in a molecule or ion is called its **molecular structure**. In many cases, following the steps for writing Lewis structures may lead to more than one possible molecular structure—different multiple bond and lone-pair electron placements or different arrangements of atoms, for instance. A few guidelines involving formal charge can be helpful in deciding which of the possible structures is most likely for a particular molecule or ion:

1. A molecular structure in which all formal charges are zero is preferable to one in which some formal charges are not zero.
2. If the Lewis structure must have nonzero formal charges, the arrangement with the smallest nonzero formal charges is preferable.
3. Lewis structures are preferable when adjacent formal charges are zero or of the opposite sign.
4. When we must choose among several Lewis structures with similar distributions of formal charges, the structure with the negative formal charges on the more electronegative atoms is preferable.

To see how these guidelines apply, let us consider some possible structures for carbon dioxide, CO₂. We know from our previous discussion that the less electronegative atom typically occupies the central position, but formal charges allow us to understand *why* this occurs. We can draw three possibilities for the structure: carbon in the center and double bonds, carbon in the center with a single and triple bond, and oxygen in the center with double bonds:

{{< mediafigure src="chemistry/CNX_Chem_07_04_CO2pos_img" kind="diagram" alt="Three Lewis structures in a row, labeled Structure at the right, with a row of numbers under them labeled Formal charge. Left: a carbon atom double-bonded to two oxygen atoms, each oxygen with two lone pairs; under them 0, 0, 0. Middle: an oxygen atom with one lone pair triple-bonded to a carbon atom, which is single-bonded to an oxygen atom with three lone pairs; +1, 0, −1. Right: an oxygen atom with two lone pairs double-bonded to a central oxygen atom with no lone pairs, which is double-bonded to a carbon atom with two lone pairs; 0, +2, −2." >}}
{{< /mediafigure >}}

Comparing the three formal charges, we can definitively identify the structure on the left as preferable because it has only formal charges of zero (Guideline 1).

As another example, the thiocyanate ion, an ion formed from a carbon atom, a nitrogen atom, and a sulfur atom, could have three different molecular structures: NCS⁻, CNS⁻, or CSN⁻. The formal charges present in each of these molecular structures can help us pick the most likely arrangement of atoms. Possible Lewis structures and the formal charges for each of the three possible structures for the thiocyanate ion are shown here:

{{< mediafigure src="chemistry/CNX_Chem_07_04_Thiocyan_img" kind="diagram" alt="Three Lewis structures in a row labeled Structure, each in square brackets with a minus sign, and a row of numbers under them labeled Formal charge. Left: a nitrogen atom with two lone pairs double-bonded to a carbon atom, which is double-bonded to a sulfur atom with two lone pairs; −1, 0, 0. Middle: a carbon atom with two lone pairs double-bonded to a nitrogen atom, which is double-bonded to a sulfur atom with two lone pairs; −2, +1, 0. Right: a carbon atom with two lone pairs double-bonded to a sulfur atom, which is double-bonded to a nitrogen atom with two lone pairs; −2, +2, −1." >}}
{{< /mediafigure >}}

Note that the sum of the formal charges in each case is equal to the charge of the ion (−1). However, the first arrangement of atoms is preferred because it has the lowest number of atoms with nonzero formal charges (Guideline 2). Also, it places the least electronegative atom in the center, and the negative charge on the more electronegative element (Guideline 4).

*Source note:* the periodic table of electronegativities in [Section 7.2 Covalent Bonding](/physical-sciences/chemistry/07-chemical-bonding-and-molecular-geometry/02-covalent-bonding/) gives carbon and sulfur the same value, 2.5; on the Pauling scale to three figures carbon is slightly lower (2.55 against 2.58).

**Example.** *Using Formal Charge to Determine Molecular Structure.* Nitrous oxide, N₂O, commonly known as laughing gas, is used as an anesthetic in minor surgeries, such as the routine extraction of wisdom teeth. Which is the more likely structure for nitrous oxide?

{{< mediafigure src="chemistry/CNX_Chem_07_04_N2O_img" kind="diagram" alt="Two Lewis structures with the word or between them. Left: a nitrogen atom with one lone pair triple-bonded to a second nitrogen atom, which is single-bonded to an oxygen atom with three lone pairs. Right: a nitrogen atom with two lone pairs double-bonded to a central oxygen atom with no lone pairs, which is double-bonded to a nitrogen atom with two lone pairs." >}}
{{< /mediafigure >}}

**Solution.** Determining formal charge yields the following:

{{< mediafigure src="chemistry/CNX_Chem_07_04_N2Ofc_img" kind="diagram" alt="The two Lewis structures side by side, with a number under each atom. Left: a nitrogen atom with one lone pair triple-bonded to a second nitrogen atom, which is single-bonded to an oxygen atom with three lone pairs; under them 0, +1, −1. Right: a nitrogen atom with two lone pairs double-bonded to a central oxygen atom, which is double-bonded to a nitrogen atom with two lone pairs; under them −1, +2, −1." >}}
{{< /mediafigure >}}

The structure with a terminal oxygen atom best satisfies the criteria for the most stable distribution of formal charge:

{{< mediafigure src="chemistry/CNX_Chem_07_04_NNO_img" kind="diagram" alt="A Lewis structure: a nitrogen atom with one lone pair triple-bonded to a second nitrogen atom, which is single-bonded to an oxygen atom with three lone pairs." >}}
{{< /mediafigure >}}

The number of atoms with formal charges are minimized (Guideline 2), there is no formal charge with a magnitude greater than one (Guideline 2), the negative formal charge is on the more electronegative element (Guideline 4), and the less electronegative atom is in the center position.

{{< mediafigure src="chemistry/CNX_Chem_07_04_NO2ion_img" kind="diagram" alt="Two Lewis structures with the word or between them, each in square brackets with a minus sign. Left: a nitrogen atom with two lone pairs double-bonded to an oxygen atom with one lone pair, which is single-bonded to an oxygen atom with three lone pairs. Right: an oxygen atom with two lone pairs double-bonded to a nitrogen atom with one lone pair, which is single-bonded to an oxygen atom with three lone pairs." >}}
{{< /mediafigure >}}

{{< multiplechoice
  question="Which is the most likely molecular structure for the nitrite (NO₂⁻) ion, shown in the figure above?"
  answer="ONO⁻"
  hint="Work out the formal charges of the atoms in each structure, and compare them by the guidelines above."
>}}
NOO⁻
ONO⁻
{{< /multiplechoice >}}

## Resonance

Notice that the more likely structure for the nitrite anion in the example “Using Formal Charge to Determine Molecular Structure” above may actually be drawn in two different ways, distinguished by the locations of the N–O and N=O bonds:

{{< mediafigure src="chemistry/CNX_Chem_07_04_NO2res_img" kind="diagram" alt="Two Lewis structures side by side, each in square brackets with a minus sign. Left: an oxygen atom with three lone pairs single-bonded to a nitrogen atom with one lone pair, which is double-bonded to an oxygen atom with two lone pairs. Right: the same atoms with the double bond to the left oxygen atom, which has two lone pairs, and the single bond to the right oxygen atom, which has three." >}}
{{< /mediafigure >}}

If nitrite ions do indeed contain a single and a double bond, we would expect for the two bond lengths to be different. A double bond between two atoms is shorter (and stronger) than a single bond between the same two atoms. Experiments show, however, that both N–O bonds in NO₂⁻ have the same strength and length, and are identical in all other properties.

It is not possible to write a single Lewis structure for NO₂⁻ in which nitrogen has an octet and both bonds are equivalent. Instead, we use the concept of **resonance**: if two or more Lewis structures with the same arrangement of atoms can be written for a molecule or ion, the actual distribution of electrons is an *average* of that shown by the various Lewis structures. The actual distribution of electrons in each of the nitrogen-oxygen bonds in NO₂⁻ is the average of a double bond and a single bond. We call the individual Lewis structures **resonance forms**. The actual electronic structure of the molecule (the average of the resonance forms) is called a **resonance hybrid** of the individual resonance forms. A double-headed arrow between Lewis structures indicates that they are resonance forms.

{{< mediafigure src="chemistry/CNX_Chem_07_04_NO2resarr_img" kind="diagram" alt="The same two Lewis structures, each in square brackets with a minus sign, with a double-headed arrow between them. Left: an oxygen atom with three lone pairs single-bonded to a nitrogen atom with one lone pair, which is double-bonded to an oxygen atom with two lone pairs. Right: the double bond to the left oxygen atom, which has two lone pairs, and the single bond to the right oxygen atom, which has three." >}}
{{< /mediafigure >}}

We should remember that a molecule described as a resonance hybrid *never* possesses an electronic structure described by either resonance form. It does not fluctuate between resonance forms; rather, the actual electronic structure is *always* the average of that shown by all resonance forms. George Wheland, one of the pioneers of resonance theory, used a historical analogy to describe the relationship between resonance forms and resonance hybrids. A medieval traveler, having never before seen a rhinoceros, described it as a hybrid of a dragon and a unicorn because it had many properties in common with both. Just as a rhinoceros is neither a dragon sometimes nor a unicorn at other times, a resonance hybrid is neither of its resonance forms at any given time. Like a rhinoceros, it is a real entity that experimental evidence has shown to exist. It has some characteristics in common with its resonance forms, but the resonance forms themselves are convenient, imaginary images (like the unicorn and the dragon).

The carbonate anion, CO₃²⁻, provides a second example of resonance:

{{< mediafigure src="chemistry/CNX_Chem_07_04_CO3res_img" kind="diagram" alt="Three Lewis structures with double-headed arrows between them, each in square brackets with 2− at the upper right. In each, a carbon atom is bonded to three oxygen atoms, at the top, the lower left, and the lower right; one oxygen atom is double-bonded and has two lone pairs, and the other two are single-bonded and have three lone pairs each. The double bond is to the lower left oxygen atom in the first structure, the lower right in the second, and the top in the third." >}}
{{< /mediafigure >}}

One oxygen atom must have a double bond to carbon to complete the octet on the central atom. All oxygen atoms, however, are equivalent, and the double bond could form from any one of the three atoms. This gives rise to three resonance forms of the carbonate ion. Because we can write three identical resonance structures, we know that the actual arrangement of electrons in the carbonate ion is the average of the three structures. Again, experiments show that all three C–O bonds are exactly the same.

{{< callout type="info" >}}
**Link to Learning**

Use this [online quiz](http://openstax.org/l/16LewisMake) to practice your skills in drawing resonance structures and estimating formal charges.
{{< /callout >}}

## Summary

- In a Lewis structure, formal charges can be assigned to each atom by treating each bond as if one-half of the electrons are assigned to each atom. These hypothetical formal charges are a guide to determining the most appropriate Lewis structure. A structure in which the formal charges are as close to zero as possible is preferred. Resonance occurs in cases where two or more Lewis structures with identical arrangements of atoms but different distributions of electrons can be written. The actual distribution of electrons (the resonance hybrid) is an average of the distribution indicated by the individual Lewis structures (the resonance forms).

## Key equations

- $\text{formal charge} = \#\ \text{valence shell electrons (free atom)} - \#\ \text{lone pair electrons} - \frac{1}{2}\ \#\ \text{bonding electrons}$

## Key terms

- **formal charge** — charge that would result on an atom by taking the number of valence electrons on the neutral atom and subtracting the nonbonding electrons and the number of bonds (one-half of the bonding electrons).
- **molecular structure** — arrangement of atoms in a molecule or ion.
- **resonance** — situation in which one Lewis structure is insufficient to describe the bonding in a molecule and the average of multiple structures is observed.
- **resonance forms** — two or more Lewis structures that have the same arrangement of atoms but different arrangements of electrons.
- **resonance hybrid** — average of the resonance forms shown by the individual Lewis structures.

## Practice

### Compute formal charges for atoms in any Lewis structure

{{< fillin
  question="Determine the formal charge of each element in the following: HCl. Enter the formal charge of H as a signed number, the sign first, as +2 or −2."
  answer="0"
  answerForm="whole-number"
  answerDisplay="$0$"
  hint="Draw the Lewis structure of the compound, then apply the formal-charge equation to the atom."
>}}

{{< fillin
  question="Determine the formal charge of each element in the following: HCl. Enter the formal charge of Cl as a signed number, the sign first, as +2 or −2."
  answer="0"
  answerForm="whole-number"
  answerDisplay="$0$"
  hint="Draw the Lewis structure of the compound, then apply the formal-charge equation to the atom."
>}}

{{< fillin
  question="Determine the formal charge of each element in the following: CF₄. Enter the formal charge of C as a signed number, the sign first, as +2 or −2."
  answer="0"
  answerForm="whole-number"
  answerDisplay="$0$"
  hint="Draw the Lewis structure of the compound, then apply the formal-charge equation to the atom."
>}}

{{< fillin
  question="Determine the formal charge of each element in the following: CF₄. Enter the formal charge of F as a signed number, the sign first, as +2 or −2."
  answer="0"
  answerForm="whole-number"
  answerDisplay="$0$"
  hint="Draw the Lewis structure of the compound, then apply the formal-charge equation to the atom."
>}}

{{< fillin
  question="Determine the formal charge of each element in the following: PCl₃. Enter the formal charge of P as a signed number, the sign first, as +2 or −2."
  answer="0"
  answerForm="whole-number"
  answerDisplay="$0$"
  hint="Draw the Lewis structure of the compound, then apply the formal-charge equation to the atom."
>}}

{{< fillin
  question="Determine the formal charge of each element in the following: PCl₃. Enter the formal charge of Cl as a signed number, the sign first, as +2 or −2."
  answer="0"
  answerForm="whole-number"
  answerDisplay="$0$"
  hint="Draw the Lewis structure of the compound, then apply the formal-charge equation to the atom."
>}}

{{< fillin
  question="Determine the formal charge of each element in the following: PF₅. Enter the formal charge of P as a signed number, the sign first, as +2 or −2."
  answer="0"
  answerForm="whole-number"
  answerDisplay="$0$"
  hint="Draw the Lewis structure of the compound, then apply the formal-charge equation to the atom."
>}}

{{< fillin
  question="Determine the formal charge of each element in the following: PF₅. Enter the formal charge of F as a signed number, the sign first, as +2 or −2."
  answer="0"
  answerForm="whole-number"
  answerDisplay="$0$"
  hint="Draw the Lewis structure of the compound, then apply the formal-charge equation to the atom."
>}}

{{< fillin
  question="Calculate the formal charge of chlorine in the molecule Cl₂. Enter the formal charge of Cl as a signed number, the sign first, as +2 or −2."
  answer="0"
  answerForm="whole-number"
  answerDisplay="$0$"
  hint="Draw the Lewis structure of the molecule, then apply the formal-charge equation to a chlorine atom."
>}}

{{< fillin
  question="Calculate the formal charge of chlorine in the molecule BeCl₂. Enter the formal charge of Cl as a signed number, the sign first, as +2 or −2."
  answer="0"
  answerForm="whole-number"
  answerDisplay="$0$"
  hint="Draw the Lewis structure of the molecule, then apply the formal-charge equation to a chlorine atom."
>}}

{{< fillin
  question="Calculate the formal charge of chlorine in the molecule ClF₅. Enter the formal charge of Cl as a signed number, the sign first, as +2 or −2."
  answer="0"
  answerForm="whole-number"
  answerDisplay="$0$"
  hint="Draw the Lewis structure of the molecule, then apply the formal-charge equation to a chlorine atom."
>}}

{{< textin
  question="Write the Lewis structure and chemical formula of the compound with a molar mass of about 70 g/mol that contains 19.7% nitrogen and 80.3% fluorine by mass, and determine the formal charge of the atoms in this compound. Enter the chemical formula of the compound."
  answer="NF₃"
  answerForm="formula"
  hint="Find the mole ratio of the two elements from the percentages, then compare the mass of that formula with the molar mass."
>}}

{{< selfcheck question="Write the Lewis structure and chemical formula of the compound with a molar mass of about 70 g/mol that contains 19.7% nitrogen and 80.3% fluorine by mass, and determine the formal charge of the atoms in this compound." hint="Count the valence electrons of the formula you found, place the atoms around the central one, then apply the formal-charge equation to each atom." >}}
NF₃.

{{< mediafigure src="chemistry/CNX_Chem_07_04_NF3_img" kind="diagram" alt="A Lewis structure: a nitrogen atom with one lone pair at its left, single-bonded to three fluorine atoms, above it, to its right, and below it. Each fluorine atom has three lone pairs." >}}
{{< /mediafigure >}}

Nitrogen has one lone pair and is single-bonded to three fluorine atoms, and each fluorine atom has three lone pairs. Worked from the drawing, every atom has a formal charge of zero: N 5 − 2 − 3 = 0, and each F 7 − 6 − 1 = 0.
===CHECKS===
nitrogen has one lone pair
single-bonded to three fluorine atoms
each fluorine atom has three lone pairs
every atom has a formal charge of zero
{{< /selfcheck >}}

### Use formal charges to identify the most reasonable Lewis structure for a given molecule

{{< multiplechoice
  question="Based on formal charge considerations, which of the following would likely be the correct arrangement of atoms in hypochlorous acid: HOCl or OClH?"
  answer="HOCl"
  hint="Work out the formal charges of the atoms in a Lewis structure of each arrangement, and compare them by the guidelines for choosing among structures."
>}}
HOCl
OClH
{{< /multiplechoice >}}

{{< selfcheck question="Draw the structure of hydroxylamine, H₃NO, and assign formal charges; look up the structure. Is the actual structure consistent with the formal charges?" hint="Find the arrangement of the atoms whose formal charges best meet the guidelines for choosing among structures." >}}
The structure that gives zero formal charges is consistent with the actual structure:

{{< mediafigure src="chemistry/CNX_Chem_07_04_OHamine_img" kind="diagram" alt="A Lewis structure: a nitrogen atom with one lone pair below it is single-bonded to two hydrogen atoms, above it and at its lower left, and to an oxygen atom at its lower right. The oxygen atom has two lone pairs and is single-bonded to a hydrogen atom." >}}
{{< /mediafigure >}}

Nitrogen has one lone pair and is single-bonded to two hydrogen atoms and to the oxygen atom; the oxygen atom has two lone pairs and is single-bonded to the third hydrogen atom.
===CHECKS===
the structure that gives zero formal charges is consistent with the actual structure
nitrogen has one lone pair and is single-bonded to two hydrogen atoms and to the oxygen atom
the oxygen atom has two lone pairs and is single-bonded to the third hydrogen atom
{{< /selfcheck >}}

### Explain the concept of resonance and draw Lewis structures representing resonance forms for a given molecule

{{< selfcheck question="Write resonance forms that describe the distribution of electrons in the following molecule or ion: sulfur dioxide, SO₂." hint="Write one Lewis structure, then keep the atoms where they are and ask where else its multiple bonds and lone pairs could be placed." >}}
{{< mediafigure src="chemistry/CNX_Chem_07_04_Ques2ansa_img" kind="diagram" alt="Two Lewis structures with a double-headed arrow between them. Left: an oxygen atom with three lone pairs single-bonded to a sulfur atom with one lone pair, which is double-bonded to an oxygen atom with two lone pairs. Right: the double bond to the left oxygen atom, which has two lone pairs, and the single bond to the right oxygen atom, which has three." >}}
{{< /mediafigure >}}

In each resonance form, the sulfur atom has one lone pair and is single-bonded to one oxygen atom and double-bonded to the other; the double bond moves from one oxygen atom to the other.
===CHECKS===
the sulfur atom has one lone pair
single-bonded to one oxygen atom and double-bonded to the other
the double bond moves from one oxygen atom to the other
{{< /selfcheck >}}

{{< selfcheck question="Write resonance forms that describe the distribution of electrons in the following molecule or ion: carbonate ion, CO₃²⁻." hint="Write one Lewis structure, then keep the atoms where they are and ask where else its multiple bonds and lone pairs could be placed." >}}
{{< mediafigure src="chemistry/CNX_Chem_07_04_Ques2ansb_img" kind="diagram" alt="Three Lewis structures with double-headed arrows between them, each in square brackets with 2− at the upper right. In each, a carbon atom is bonded to three oxygen atoms, at the upper left, the upper right, and the bottom; the double-bonded oxygen atom has two lone pairs and the two single-bonded ones three each. The double bond is to the bottom oxygen atom in the first structure, the upper right in the second, and the upper left in the third." >}}
{{< /mediafigure >}}

There are three resonance forms: in each, the carbon atom is double-bonded to one oxygen atom, which has two lone pairs, and single-bonded to the other two, which have three lone pairs each; the double bond moves among the three oxygen atoms.
===CHECKS===
there are three resonance forms
double-bonded to one oxygen atom, which has two lone pairs
single-bonded to the other two, which have three lone pairs each
the double bond moves among the three oxygen atoms
{{< /selfcheck >}}

{{< selfcheck question="Write resonance forms that describe the distribution of electrons in the following molecule or ion: hydrogen carbonate ion, HCO₃⁻ (C is bonded to an OH group and two O atoms)." hint="Write one Lewis structure, then keep the atoms where they are and ask where else its multiple bonds and lone pairs could be placed." >}}
{{< mediafigure src="chemistry/CNX_Chem_07_04_Ques2ansc_img" kind="diagram" alt="Two Lewis structures with a double-headed arrow between them, each in square brackets with a minus sign. A carbon atom is bonded to an oxygen atom at the upper left, one at the upper right, and one below it that is single-bonded to a hydrogen atom and has two lone pairs. Left: the upper left oxygen atom double-bonded, with two lone pairs, and the upper right one single-bonded, with three. Right: the two swapped." >}}
{{< /mediafigure >}}

In each resonance form, the carbon atom is single-bonded to the OH group, double-bonded to one of the other two oxygen atoms, which has two lone pairs, and single-bonded to the last, which has three; the double bond moves between the two oxygen atoms that carry no hydrogen.
===CHECKS===
the carbon atom is single-bonded to the OH group
double-bonded to one of the other two oxygen atoms, which has two lone pairs
the double bond moves between the two oxygen atoms that carry no hydrogen
{{< /selfcheck >}}

{{< mediafigure src="chemistry/CNX_Chem_07_04_SO2resd_img" kind="diagram" alt="A skeleton structure: a ring of five carbon atoms and one nitrogen atom, the nitrogen atom at the top, joined by single bonds. Each carbon atom is single-bonded to one hydrogen atom outside the ring, and the nitrogen atom to none. No lone pairs are drawn." >}}
{{< /mediafigure >}}

{{< selfcheck question="Write resonance forms that describe the distribution of electrons in the following molecule or ion: pyridine, shown in the figure above." hint="Write one Lewis structure, then keep the atoms where they are and ask where else its multiple bonds and lone pairs could be placed." >}}
{{< mediafigure src="chemistry/CNX_Chem_07_04_Ques2ansd_img" kind="diagram" alt="Two Lewis structures with a double-headed arrow between them. Each is a ring of five carbon atoms and one nitrogen atom, the nitrogen atom at the top with one lone pair, each carbon atom single-bonded to one hydrogen atom, and the bonds of the ring alternating single and double. On the left, the nitrogen atom is double-bonded to the carbon atom at its right; on the right, to the carbon atom at its left." >}}
{{< /mediafigure >}}

In each resonance form, single and double bonds alternate around the ring, and the two forms swap them; the nitrogen atom has one lone pair, and each carbon atom is single-bonded to one hydrogen atom.
===CHECKS===
single and double bonds alternate around the ring
the two forms swap them
the nitrogen atom has one lone pair
{{< /selfcheck >}}

{{< mediafigure src="chemistry/CNX_Chem_07_04_SO2rese_img" kind="diagram" alt="A skeleton structure in square brackets with a minus sign: a chain of three carbon atoms joined by single bonds. Each end carbon atom is single-bonded to two hydrogen atoms, one above it and one at the end of the chain, and the middle carbon atom to one hydrogen atom above it. No lone pairs are drawn." >}}
{{< /mediafigure >}}

{{< selfcheck question="Write resonance forms that describe the distribution of electrons in the following molecule or ion: the allyl ion, shown in the figure above." hint="Write one Lewis structure, then keep the atoms where they are and ask where else its multiple bonds and lone pairs could be placed." >}}
{{< mediafigure src="chemistry/CNX_Chem_07_04_Ques2anse_img" kind="diagram" alt="Two Lewis structures with a double-headed arrow between them, each in square brackets with a minus sign: a chain of three carbon atoms bearing five hydrogen atoms. Left: the left carbon atom has a lone pair below it and is single-bonded to the middle carbon atom, which is double-bonded to the right carbon atom. Right: the double bond joins the left and middle carbon atoms, and the lone pair is on the right carbon atom." >}}
{{< /mediafigure >}}

In each resonance form, the middle carbon atom is double-bonded to one end carbon atom, and the other end carbon atom has a lone pair; the two forms swap the ends.
===CHECKS===
the middle carbon atom is double-bonded to one end carbon atom
the other end carbon atom has a lone pair
the two forms swap the ends
{{< /selfcheck >}}

{{< selfcheck question="Sodium nitrite, which has been used to preserve bacon and other meats, is an ionic compound. Write the resonance forms of the nitrite ion, NO₂⁻." hint="Write one Lewis structure of the ion, then keep the atoms where they are and ask where else its multiple bonds and lone pairs could be placed." >}}
{{< mediafigure src="chemistry/CNX_Chem_07_04_Ques11ans_img" kind="diagram" alt="Two Lewis structures with a double-headed arrow between them and the label For NO₂⁻ at the left, each in square brackets with a minus sign. In each, a nitrogen atom with one lone pair is bonded to two oxygen atoms: one single-bonded, with three lone pairs, and one double-bonded, with two. The double bond is to the right oxygen atom on the left and to the left oxygen atom on the right." >}}
{{< /mediafigure >}}

In each resonance form, the nitrogen atom has one lone pair and is single-bonded to one oxygen atom, which has three lone pairs, and double-bonded to the other, which has two; the double bond moves from one oxygen atom to the other.
===CHECKS===
the nitrogen atom has one lone pair
single-bonded to one oxygen atom, which has three lone pairs
double-bonded to the other, which has two
the double bond moves from one oxygen atom to the other
{{< /selfcheck >}}

{{< selfcheck question="Write the Lewis structures for the following, and include resonance structures where appropriate. Indicate which has the strongest carbon-oxygen bond. CO₂." hint="Count the valence electrons, join the atoms with single bonds, then use multiple bonds where an atom lacks an octet." >}}
{{< mediafigure src="chemistry/CNX_Chem_07_04_Ques13ansb_img" kind="diagram" alt="A Lewis structure: a carbon atom double-bonded to two oxygen atoms, each oxygen atom with two lone pairs." >}}
{{< /mediafigure >}}

Carbon is double-bonded to each oxygen atom, and each oxygen atom has two lone pairs.
===CHECKS===
carbon is double-bonded to each oxygen atom
each oxygen atom has two lone pairs
{{< /selfcheck >}}

{{< multiplechoice
  question="Write the Lewis structures for the following, and include resonance structures where appropriate. Indicate which has the strongest carbon-oxygen bond: CO₂ or CO?"
  answer="CO"
  hint="Recall how the strength of a bond between two atoms changes with the number of electron pairs they share, and apply it to the Lewis structures you wrote."
>}}
CO₂
CO
{{< /multiplechoice >}}

{{< selfcheck question="Write the Lewis structures for the following, and include resonance structures where appropriate. Indicate which has the strongest carbon-oxygen bond. CO." hint="Count the valence electrons, join the atoms with single bonds, then use multiple bonds where an atom lacks an octet." >}}
{{< mediafigure src="chemistry/CNX_Chem_07_04_Ques13ansc_img" kind="diagram" alt="A Lewis structure: a carbon atom triple-bonded to an oxygen atom, with one lone pair on each atom." >}}
{{< /mediafigure >}}

CO has the strongest carbon-oxygen bond because there is a triple bond joining C and O. CO₂ has double bonds.

Carbon is triple-bonded to oxygen, and each atom has one lone pair.
===CHECKS===
a triple bond joining C and O
CO has the strongest carbon-oxygen bond
each atom has one lone pair
{{< /selfcheck >}}

{{< selfcheck question="Draw all possible resonance structures for the following compound. Determine the formal charge on each atom in each of the resonance structures: O₃." hint="Draw each resonance structure, then apply the formal-charge equation to every atom in it." >}}
{{< mediafigure src="chemistry/CNX_Chem_07_04_Exercis12a_img" kind="diagram" alt="Two Lewis structures of three oxygen atoms with a double-headed arrow between them and a row of numbers under them labeled Formal charge. Left: an oxygen atom with two lone pairs double-bonded to a central oxygen atom with one lone pair, which is single-bonded to an oxygen atom with three lone pairs; under them 0, +1, −1. Right: the single and double bonds swapped; −1, +1, 0." >}}
{{< /mediafigure >}}

In each of the two resonance structures, the central oxygen atom has one lone pair and is double-bonded to one end oxygen atom and single-bonded to the other. The formal charges are 0 on the double-bonded end atom, +1 on the central atom, and −1 on the single-bonded end atom.
===CHECKS===
the central oxygen atom has one lone pair
double-bonded to one end oxygen atom and single-bonded to the other
0 on the double-bonded end atom
+1 on the central atom
−1 on the single-bonded end atom
{{< /selfcheck >}}

{{< selfcheck question="Draw all possible resonance structures for the following compound. Determine the formal charge on each atom in each of the resonance structures: SO₂." hint="Draw each resonance structure, then apply the formal-charge equation to every atom in it." >}}
{{< mediafigure src="chemistry/CNX_Chem_07_04_Exercis12b_img" kind="diagram" alt="Two Lewis structures with a double-headed arrow between them and a row of numbers under them labeled Formal charge. Left: an oxygen atom with three lone pairs single-bonded to a sulfur atom with one lone pair, which is double-bonded to an oxygen atom with two lone pairs; under them −1, +1, 0. Right: the bonds swapped; 0, +1, −1." >}}
{{< /mediafigure >}}

In each of the two resonance structures, the sulfur atom has one lone pair and is double-bonded to one oxygen atom and single-bonded to the other. The formal charges are 0 on the double-bonded oxygen atom, +1 on the sulfur atom, and −1 on the single-bonded oxygen atom.
===CHECKS===
the sulfur atom has one lone pair
double-bonded to one oxygen atom and single-bonded to the other
0 on the double-bonded oxygen atom
+1 on the sulfur atom
−1 on the single-bonded oxygen atom
{{< /selfcheck >}}

{{< selfcheck question="Draw all possible resonance structures for the following compound. Determine the formal charge on each atom in each of the resonance structures: NO₂⁻." hint="Draw each resonance structure, then apply the formal-charge equation to every atom in it." >}}
{{< mediafigure src="chemistry/CNX_Chem_07_04_Exercis12c_img" kind="diagram" alt="Two bent Lewis structures with a double-headed arrow between them, each in square brackets with a minus sign, and a row of numbers under them labeled Formal charge. Left: a nitrogen atom with one lone pair double-bonded to the left oxygen atom, which has two lone pairs, and single-bonded to the right oxygen atom, which has three; under them 0, 0, −1. Right: the bonds swapped; −1, 0, 0." >}}
{{< /mediafigure >}}

In each of the two resonance structures, the nitrogen atom has one lone pair and is double-bonded to one oxygen atom and single-bonded to the other. The formal charges are 0 on the double-bonded oxygen atom, 0 on the nitrogen atom, and −1 on the single-bonded oxygen atom.
===CHECKS===
the nitrogen atom has one lone pair
double-bonded to one oxygen atom and single-bonded to the other
0 on the double-bonded oxygen atom
0 on the nitrogen atom
−1 on the single-bonded oxygen atom
{{< /selfcheck >}}

{{< selfcheck question="Draw all possible resonance structures for the following compound. Determine the formal charge on each atom in each of the resonance structures: NO₃⁻." hint="Draw each resonance structure, then apply the formal-charge equation to every atom in it." >}}
{{< mediafigure src="chemistry/CNX_Chem_07_04_Exercis12d_img" kind="diagram" alt="Three Lewis structures with double-headed arrows between them, each in square brackets with a minus sign. In each, a nitrogen atom with no lone pairs, labeled +1, is bonded to three oxygen atoms, at the top, the lower left, and the lower right: one double-bonded, with two lone pairs and the formal charge 0, and two single-bonded, with three lone pairs and −1 each. The double bond is to the lower left oxygen atom in the first, the top in the second, and the lower right in the third. The top charge is written beside its atom; the lower two are in a row labeled Formal charge." >}}
{{< /mediafigure >}}

In each of the three resonance structures, the nitrogen atom has no lone pair and is double-bonded to one oxygen atom and single-bonded to the other two. The formal charges are +1 on the nitrogen atom, 0 on the double-bonded oxygen atom, and −1 on each single-bonded oxygen atom.
===CHECKS===
the nitrogen atom has no lone pair
double-bonded to one oxygen atom and single-bonded to the other two
+1 on the nitrogen atom
0 on the double-bonded oxygen atom
−1 on each single-bonded oxygen atom
{{< /selfcheck >}}

{{< selfcheck question="Sulfuric acid is the industrial chemical produced in greatest quantity worldwide. About 90 billion pounds are produced each year in the United States alone. Write the Lewis structure for sulfuric acid, H₂SO₄, which has two oxygen atoms and two OH groups bonded to the sulfur." hint="Count the valence electrons, then place them around the arrangement of atoms the question describes." >}}
{{< mediafigure src="chemistry/CNX_Chem_07_04_H2SO4" kind="diagram" alt="A Lewis structure: a sulfur atom single-bonded to two oxygen atoms, above it and to its left, and double-bonded to two more, to its right and below it. Each single-bonded oxygen atom has two lone pairs and is single-bonded to a hydrogen atom. Each double-bonded oxygen atom has four nonbonding electrons, drawn as two single dots and one pair." >}}
{{< /mediafigure >}}

The sulfur atom is single-bonded to the two OH groups and double-bonded to the other two oxygen atoms. Each OH oxygen atom has two lone pairs and is single-bonded to a hydrogen atom, and each double-bonded oxygen atom has four nonbonding electrons, drawn as a pair and two single dots.
===CHECKS===
the sulfur atom is single-bonded to the two OH groups
double-bonded to the other two oxygen atoms
each OH oxygen atom has two lone pairs
each double-bonded oxygen atom has four nonbonding electrons
{{< /selfcheck >}}

*Source note:* the figure of 90 billion pounds is the source’s and is out of date: the U.S. Geological Survey’s Minerals Yearbook for 2019 reports 26 million metric tons of sulfuric acid produced in the United States in 2019.

---

<small>This section is adapted from [Chemistry 2e, Section 7.4: Formal Charges and Resonance](https://openstax.org/books/chemistry-2e/pages/7-4-formal-charges-and-resonance) by Paul Flowers, Klaus Theopold, Richard Langley, William R. Robinson, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/chemistry-2e). Changes: each reference to another section of this book linked to that section’s page, and the reference to the nitrite example written as a describing phrase; the formal-charge equation typeset as KaTeX math, broken into aligned rows to fit the column, and listed under Key equations as inline math; the hyphen the source prints in “N-O” set as the en dash the page uses for a single bond elsewhere; the three worked examples set as prose, their stepwise solutions as numbered lists, each followed by its Check Your Learning as interactive items — four fill-ins, one per atom the printed answer names, a self-check carrying the printed answer and drawing of the nitrogen trichloride check, and a multiple-choice item whose options are the two structures its figure prints, written as text — the printed answers serving as their keys rather than appearing as text; the Link to Learning rendered as a callout; the 30 drawings re-encoded as WebP and marked as diagrams, without captions, as the source prints none, every alt written from the artwork, where the source’s alts misdescribe several of them (the three possible carbon dioxide structures and their formal charges, a formal charge of the thiocyanate structures, a word “or” the nitrous oxide formal-charge drawing lacks, the lone pairs of a sulfur dioxide answer, the bonds of the carbonate and hydrogen carbonate answers, the lone pair of the allyl ion answer, the formal-charge labels of the nitrate answer, and the lone pairs of the sulfuric acid answer); the 10 end-of-section exercises the source keys adapted into the interactive Practice block as 29 items — 11 fill-ins, 2 multiple-choice items, 1 formula text-recall item, and 15 self-checks — one item per lettered part and one fill-in per atom whose formal charge the answer gives, with a sentence added saying which atom and how to type the sign; the chlorine exercise asked once per molecule; each drawing answer a self-check whose model answer is the source’s drawing with a sentence or two describing it; the strongest-bond question of the carbon dioxide and carbon monoxide exercise asked as a multiple-choice item between its two drawings; the formula of the nitrogen–fluorine compound asked as a formula text-recall item before its drawing; the pyridine and allyl ion parts each with the stem’s skeleton figure directly above its item; the lead-ins that addressed the parts together restated in the singular for one part (“the following molecule or ion”, “the following compound”, “the molecule”); capitals and periods added to the self-check model answers; a sentence giving the formal charges, worked from the drawing, and its rubric clause added to the source’s answer for the nitrogen–fluorine compound, whose question asks for them; a Source note after the thiocyanate paragraph, whose “least electronegative atom” the periodic table of electronegativities in Section 7.2 does not single out, the source’s words kept; a Source note after the sulfuric acid exercise, whose production figure for the United States is out of date, citing the U.S. Geological Survey’s Minerals Yearbook for 2019, the stem kept as printed; the source alt of the carbon monoxide answer, which calls its one structure “the right structure of this pair”; and the 10 exercises the source prints no answer for are omitted.</small>
