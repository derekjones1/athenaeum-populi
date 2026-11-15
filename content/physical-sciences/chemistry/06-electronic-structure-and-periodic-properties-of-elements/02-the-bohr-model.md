---
title: The Bohr Model
description: >-
  Bohr's model of the hydrogen atom: quantized orbit energies and radii, the
  ground and excited states, and the energies and wavelengths of the light an
  electron absorbs or emits as it moves between orbits — adapted from OpenStax
  Chemistry 2e, Section 6.2.
source_section: "6.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Describe the Bohr model of the hydrogen atom
- Use the Rydberg equation to calculate energies of light emitted or absorbed by hydrogen atoms
{{< /callout >}}

Following the work of Ernest Rutherford and his colleagues in the early twentieth century, the picture of atoms consisting of tiny dense nuclei surrounded by lighter and even tinier electrons continually moving about the nucleus was well established. This picture was called the planetary model, since it pictured the atom as a miniature “solar system” with the electrons orbiting the nucleus like planets orbiting the sun. The simplest atom is hydrogen, consisting of a single proton as the nucleus about which a single electron moves. The electrostatic force attracting the electron to the proton depends only on the distance between the two particles. This classical mechanics description of the atom is incomplete, however, since an electron moving in an elliptical orbit would be accelerating (by changing direction) and, according to classical electromagnetism, it should continuously emit electromagnetic radiation. This loss in orbital energy should result in the electron’s orbit getting continually smaller until it spirals into the nucleus, implying that atoms are inherently unstable.

In 1913, Niels Bohr attempted to resolve the atomic paradox by ignoring classical electromagnetism’s prediction that the orbiting electron in hydrogen would continuously emit light. Instead, he incorporated into the classical mechanics description of the atom Planck’s ideas of quantization and Einstein’s finding that light consists of photons whose energy is proportional to their frequency. Bohr assumed that the electron orbiting the nucleus would not normally emit any radiation (the stationary state hypothesis), but it would emit or absorb a photon if it moved to a different orbit. The energy absorbed or emitted would reflect differences in the orbital energies according to this equation:

$$|\Delta E| = |E_\text{f} - E_\text{i}| = h\nu = \frac{hc}{\lambda}$$

In this equation, $h$ is Planck’s constant and $E_\text{i}$ and $E_\text{f}$ are the initial and final orbital energies, respectively. The absolute value of the energy difference is used, since frequencies and wavelengths are always positive. Instead of allowing for continuous values of energy, Bohr assumed the energies of these electron orbits were quantized:

$$E_n = -\frac{k}{n^2}, \quad n = 1, 2, 3, \ldots$$

In this expression, $k$ is a constant comprising fundamental constants such as the electron mass and charge and Planck’s constant. Inserting the expression for the orbit energies into the equation for $\Delta E$ gives

$$\Delta E = k\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right) = \frac{hc}{\lambda}$$

or

$$\frac{1}{\lambda} = \frac{k}{hc}\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$$

which is identical to the Rydberg equation in which $R_\infty = \frac{k}{hc}$. When Bohr calculated his theoretical value for the Rydberg constant, $R_\infty$, and compared it with the experimentally accepted value, he got excellent agreement. Since the Rydberg constant was one of the most precisely measured constants at that time, this level of agreement was astonishing and meant that **Bohr’s model** was taken seriously, despite the many assumptions that Bohr needed to derive it.

The lowest few energy levels are shown in the figure of the energy levels of a hydrogen atom below. One of the fundamental laws of physics is that matter is most stable with the lowest possible energy. Thus, the electron in a hydrogen atom usually moves in the $n = 1$ orbit, the orbit in which it has the lowest energy. When the electron is in this lowest energy orbit, the atom is said to be in its **ground electronic state** (or simply ground state). If the atom receives energy from an outside source, it is possible for the electron to move to an orbit with a higher $n$ value and the atom is now in an **excited electronic state** (or simply an excited state) with a higher energy. When an electron transitions from an excited state (higher energy orbit) to a less excited state, or ground state, the difference in energy is emitted as a photon. Similarly, if a photon is absorbed by an atom, the energy of the photon moves an electron from a lower energy orbit up to a more excited one. We can relate the energy of electrons in atoms to what we learned previously about energy. The law of conservation of energy says that we can neither create nor destroy energy. Thus, if a certain amount of external energy is required to excite an electron from one energy level to another, that same amount of energy will be liberated when the electron returns to its initial state (shown in the figure of the photons a hydrogen atom absorbs and emits, below the first example).

Since Bohr’s model involved only a single electron, it could also be applied to the single electron ions He⁺, Li²⁺, Be³⁺, and so forth, which differ from hydrogen only in their nuclear charges, and so one-electron atoms and ions are collectively referred to as hydrogen-like atoms. The energy expression for hydrogen-like atoms is a generalization of the hydrogen atom energy, in which $Z$ is the nuclear charge (+1 for hydrogen, +2 for He, +3 for Li, and so on) and $k$ has a value of $2.180 \times 10^{-18}$ J.

$$E_n = -\frac{kZ^2}{n^2}$$

*Source note:* the source gives $k$ as $2.179 \times 10^{-18}$ J. The value in this book’s table of constants ([Appendix D](/physical-sciences/chemistry/appendices/d-fundamental-physical-constants/)), where it is the Rydberg constant given in joules, is $2.180 \times 10^{-18}$ J at four figures, and it is the one used here, so the results of this section’s examples differ from the source’s in their last digits.

The sizes of the circular orbits for hydrogen-like atoms are given in terms of their radii by the following expression, in which $a_0$ is a constant called the Bohr radius, with a value of $5.292 \times 10^{-11}$ m:

$$r = \frac{n^2}{Z}\,a_0$$

The equation also shows us that as the electron’s energy increases (as $n$ increases), the electron is found at greater distances from the nucleus. This is implied by the inverse dependence of electrostatic attraction on distance, since, as the electron moves away from the nucleus, the electrostatic attraction between it and the nucleus decreases and it is held less tightly in the atom. Note that as $n$ gets larger and the orbits get larger, their energies get closer to zero, and so the limits $n \longrightarrow \infty$ and $r \longrightarrow \infty$ imply that $E = 0$ corresponds to the ionization limit where the electron is completely removed from the nucleus. Thus, for hydrogen in the ground state $n = 1$, the ionization energy would be:

$$\Delta E = E_{n \longrightarrow \infty} - E_1 = 0 + k = k$$

With three extremely puzzling paradoxes now solved (blackbody radiation, the photoelectric effect, and the hydrogen atom), and all involving Planck’s constant in a fundamental manner, it became clear to most physicists at that time that the classical theories that worked so well in the macroscopic world were fundamentally flawed and could not be extended down into the microscopic domain of atoms and molecules. Unfortunately, despite Bohr’s remarkable achievement in deriving a theoretical expression for the Rydberg constant, he was unable to extend his theory to the next simplest atom, He, which only has two electrons. Bohr’s model was severely flawed, since it was still based on the classical mechanics notion of precise orbits, a concept that was later found to be untenable in the microscopic domain, when a proper model of quantum mechanics was developed to supersede classical mechanics.

{{< mediafigure src="chemistry/CNX_Chem_06_02_Hlevels" kind="diagram" eager="true" alt="An energy-level diagram. An upward arrow labeled E stands to the left of a pale grey column crossed by six colored horizontal lines: purple at the bottom, blue about three quarters of the way up, then green, yellow, red, and dark brown close together near the top. Under the heading “Energy, n” each line is labeled at the right: −2.18 × 10⁻¹⁸ J, 1 (purple); −5.45 × 10⁻¹⁹ J, 2 (blue); −2.42 × 10⁻¹⁹ J, 3 (green); −1.36 × 10⁻¹⁹ J, 4 (yellow); −8.72 × 10⁻²⁰ J, 5 (red); and 0.0 J, ∞ (dark brown)." >}}
Quantum numbers and energy levels in a hydrogen atom. The more negative the calculated value, the lower the energy.
{{< /mediafigure >}}

**Example.** *Calculating the Energy of an Electron in a Bohr Orbit.* Early researchers were very excited when they were able to predict the energy of an electron at a particular distance from the nucleus in a hydrogen atom. If a spark promotes the electron in a hydrogen atom into an orbit with $n = 3$, what is the calculated energy, in joules, of the electron?

**Solution.** The energy of the electron is given by this equation:

$$E = \frac{-kZ^2}{n^2}$$

The atomic number, $Z$, of hydrogen is 1; $k$ = $2.180 \times 10^{-18}$ J; and the electron is characterized by an $n$ value of 3. Thus,

$$E = \frac{-(2.180 \times 10^{-18}\ \text{J}) \times (1)^2}{(3)^2} = -2.422 \times 10^{-19}\ \text{J}$$

{{< fillin
  question="The electron in the figure of the photons a hydrogen atom absorbs and emits, below, is promoted even further to an orbit with $n = 6$. What is its new energy? Enter the energy in joules."
  answer="-6.056\times10^{-20}"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$-6.056 \times 10^{-20}\ \text{J}$"
  hint="Use the equation for the energy of an electron in a Bohr orbit, with the atomic number of hydrogen and the value of $k$ given above."
>}}

*Source note:* the answer graded for this exercise is worked with this book’s value of $k$; the source’s answer was worked with another value.

{{< mediafigure src="chemistry/CNX_Chem_06_02_BohrArrows" kind="diagram" alt="Six colored energy levels, labeled at the right under “Energy, n” as 1 (purple, bottom), 2 (blue), 3 (green), 4 (yellow), 5 (red), and ∞ (dark brown, top); an arrow labeled E points up at the left. Left: five arrows up from level 1 to levels 2, 3, 4, 5, and ∞, labeled “Electron moves to higher energy as light is absorbed”, and three up from level 2 to levels 3, 4, and 5. Middle: five arrows down to level 1 from levels ∞, 5, 4, 3, and 2, labeled “Electron moves to lower energy as light is emitted”. Right: three arrows down to level 2 from levels 5, 4, and 3." >}}
The horizontal lines show the relative energy of orbits in the Bohr model of the hydrogen atom, and the vertical arrows depict the energy of photons absorbed (left) or emitted (right) as electrons move between these orbits.
{{< /mediafigure >}}

**Example.** *Calculating the Energy and Wavelength of Electron Transitions in a One-electron (Bohr) System.* What is the energy (in joules) and the wavelength (in meters) of the line in the spectrum of hydrogen that represents the movement of an electron from Bohr orbit with $n = 4$ to the orbit with $n = 6$? In what part of the electromagnetic spectrum do we find this radiation?

**Solution.** In this case, the electron starts out with $n = 4$, so $n_\text{i} = 4$. It comes to rest in the $n = 6$ orbit, so $n_\text{f} = 6$. The difference in energy between the two states is given by this expression:

$$\Delta E = E_\text{f} - E_\text{i} = -2.180 \times 10^{-18}\left(\frac{1}{n_\text{f}^2} - \frac{1}{n_\text{i}^2}\right)$$

$$\Delta E = -2.180 \times 10^{-18}\left(\frac{1}{6^2} - \frac{1}{4^2}\right)\ \text{J}$$

$$\Delta E = -2.180 \times 10^{-18}\left(\frac{1}{36} - \frac{1}{16}\right)\ \text{J}$$

$$\Delta E = 7.569 \times 10^{-20}\ \text{J}$$

This energy difference is positive, indicating a photon enters the system (is absorbed) to excite the electron from the $n = 4$ orbit up to the $n = 6$ orbit. The wavelength of a photon with this energy is found by the expression $\Delta E = \frac{hc}{\lambda}$. Rearrangement gives:

$$\lambda = \frac{hc}{E}$$

$$\begin{aligned} &= (6.626 \times 10^{-34}\ \cancel{\text{J}}\ \cancel{\text{s}}) \times \frac{2.998 \times 10^{8}\ \text{m}\ \cancel{\text{s}}^{-1}}{7.5694 \times 10^{-20}\ \cancel{\text{J}}} \\[6pt] &= 2.624 \times 10^{-6}\ \text{m} \end{aligned}$$

*Source note:* the source divides by the energy difference after rounding it; here the division carries the unrounded value, and only the result is rounded.

From the illustration of the electromagnetic spectrum in [Section 6.1 Electromagnetic Energy](/physical-sciences/chemistry/06-electronic-structure-and-periodic-properties-of-elements/01-electromagnetic-energy/), we can see that this wavelength is found in the infrared portion of the electromagnetic spectrum.

{{< fillin
  question="What is the energy in joules and the wavelength in meters of the photon produced when an electron falls from the $n = 5$ to the $n = 3$ level in a He⁺ ion ($Z = 2$ for He⁺)? Enter the energy in joules."
  answer="6.201\times10^{-19}"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$6.201 \times 10^{-19}\ \text{J}$"
  hint="Use the Bohr expression for the energy difference between two orbits of a hydrogen-like atom, with the nuclear charge included."
>}}

*Source note:* the answer graded for this exercise is worked with this book’s value of $k$; the source’s answer was worked with another value.

{{< fillin
  question="What is the energy in joules and the wavelength in meters of the photon produced when an electron falls from the $n = 5$ to the $n = 3$ level in a He⁺ ion ($Z = 2$ for He⁺)? Enter the wavelength in meters."
  answer="3.204\times10^{-7}"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$3.204 \times 10^{-7}\ \text{m}$"
  hint="Relate the photon’s energy to its wavelength through Planck’s constant and the speed of light, carrying the unrounded energy."
>}}

*Source note:* the answer graded for this exercise is worked with this book’s value of $k$; the source’s answer was worked with another value.

Bohr’s model of the hydrogen atom provides insight into the behavior of matter at the microscopic level, but it does not account for electron–electron interactions in atoms with more than one electron. It does introduce several important features of all models used to describe the distribution of electrons in an atom. These features include the following:

- The energies of electrons (energy levels) in an atom are quantized, described by **quantum numbers**: integer numbers having only specific allowed values and used to characterize the arrangement of electrons in an atom.
- An electron’s energy increases with increasing distance from the nucleus.
- The discrete energies (lines) in the spectra of the elements result from quantized electronic energies.

Of these features, the most important is the postulate of quantized energy levels for an electron in an atom. As a consequence, the model laid the foundation for the quantum mechanical model of the atom. Bohr won a Nobel Prize in Physics for his contributions to our understanding of the structure of atoms and how that is related to line spectra emissions.

## Summary

- Bohr incorporated Planck’s and Einstein’s quantization ideas into a model of the hydrogen atom that resolved the paradox of atom stability and discrete spectra. The Bohr model of the hydrogen atom explains the connection between the quantization of photons and the quantized emission from atoms. Bohr described the hydrogen atom in terms of an electron moving in a circular orbit about a nucleus. He postulated that the electron was restricted to certain orbits characterized by discrete energies. Transitions between these allowed orbits result in the absorption or emission of photons. When an electron moves from a higher-energy orbit to a more stable one, energy is emitted in the form of a photon. To move an electron from a stable orbit to a more excited one, a photon of energy must be absorbed. Using the Bohr model, we can calculate the energy of an electron and the radius of its orbit in any one-electron system.

## Key equations

- $E_n = -\frac{kZ^2}{n^2}, \quad n = 1, 2, 3, \ldots$
- $\Delta E = kZ^2\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$
- $r = \frac{n^2}{Z}\,a_0$

## Key terms

- **Bohr’s model of the hydrogen atom** — structural model in which an electron moves around the nucleus only in circular orbits, each with a specific allowed radius.
- **excited state** — state having an energy greater than the ground-state energy.
- **ground state** — state in which the electrons in an atom, ion, or molecule have the lowest energy possible.
- **quantum number** — number having only specific allowed values and used to characterize the arrangement of electrons in an atom.

## Practice

### Describe the Bohr model of the hydrogen atom

{{< selfcheck question="What does it mean to say that the energy of the electrons in an atom is quantized?" hint="Reread the paragraph in which Bohr replaces continuous values of energy with the orbit energies of his model." >}}
Quantized energy means that the electrons can possess only certain discrete energy values; values between those quantized values are not permitted.
===CHECKS===
the electrons can possess only certain discrete energy values
values between those quantized values are not permitted
{{< /selfcheck >}}

{{< fillin
  question="Using the Bohr model, determine the lowest possible energy for the electron in the He⁺ ion. Enter the energy in joules."
  answer="-8.720\times10^{-18}"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$-8.720 \times 10^{-18}\ \text{J}$"
  hint="Use the Bohr energy expression for hydrogen-like atoms with helium’s nuclear charge, and decide which value of $n$ gives the lowest energy."
>}}

*Source note:* the answer graded for this exercise is worked with this book’s value of $k$; the source’s answer was worked with another value.

{{< fillin
  question="Using the Bohr model, determine the energy of an electron with $n = 8$ in a hydrogen atom. Enter the energy in joules."
  answer="-3.406\times10^{-20}"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$-3.406 \times 10^{-20}\ \text{J}$"
  hint="Use the Bohr energy expression for hydrogen-like atoms with hydrogen’s nuclear charge."
>}}

*Source note:* the answer graded for this exercise is worked with this book’s value of $k$; the source’s answer was worked with another value.

{{< fillin
  question="What is the radius, in [angstroms](/physical-sciences/chemistry/appendices/c-units-and-conversion-factors/), of the orbit of an electron with $n = 8$ in a hydrogen atom?"
  answer="33.87"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$33.87\ \text{Å}$"
  hint="Use the Bohr expression for the radius of an orbit, then convert meters to angstroms."
>}}

*Source note:* the answer graded for this exercise is written to the figures its data give.

{{< selfcheck question="How are the Bohr model and the Rutherford model of the atom similar? How are they different?" hint="Compare what each model says about the nucleus, the orbits, and the emission of radiation." >}}
Both involve a relatively heavy nucleus with electrons moving around it, although strictly speaking, the Bohr model works only for one-electron atoms or ions. According to classical mechanics, the Rutherford model predicts a miniature “solar system” with electrons moving about the nucleus in circular or elliptical orbits that are confined to planes. If the requirements of classical electromagnetic theory that electrons in such orbits would emit electromagnetic radiation are ignored, such atoms would be stable, having constant energy and angular momentum, but would not emit any visible light (contrary to observation). If classical electromagnetic theory is applied, then the Rutherford atom would emit electromagnetic radiation of continually increasing frequency (contrary to the observed discrete spectra), thereby losing energy until the atom collapsed in an absurdly short time (contrary to the observed long-term stability of atoms). The Bohr model retains the classical mechanics view of circular orbits confined to planes having constant energy and angular momentum, but restricts these to quantized values dependent on a single quantum number, $n$. The orbiting electron in Bohr’s model is assumed not to emit any electromagnetic radiation while moving about the nucleus in its stationary orbits, but the atom can emit or absorb electromagnetic radiation when the electron changes from one orbit to another. Because of the quantized orbits, such “quantum jumps” will produce discrete spectra, in agreement with observations.
===CHECKS===
both involve a relatively heavy nucleus with electrons moving around it
the Bohr model works only for one-electron atoms or ions
the Rutherford atom would emit electromagnetic radiation of continually increasing frequency
the Bohr model restricts circular orbits to quantized values dependent on a single quantum number
the atom can emit or absorb electromagnetic radiation when the electron changes from one orbit to another
such quantum jumps will produce discrete spectra
{{< /selfcheck >}}

### Use the Rydberg equation to calculate energies of light emitted or absorbed by hydrogen atoms

{{< fillin
  question="The electron volt (eV) is a convenient unit of energy for expressing atomic-scale energies. It is the amount of energy that an electron gains when subjected to a potential of 1 volt; 1 eV = $1.602 \times 10^{-19}$ J. Using the Bohr model, determine the energy, in electron volts, of the photon produced when an electron in a hydrogen atom moves from the orbit with $n = 5$ to the orbit with $n = 2$. Show your calculations."
  answer="2.858"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$2.858\ \text{eV}$"
  hint="Find the energy difference between the two orbits in joules with the Bohr expression, then convert joules to electron volts."
>}}

*Source note:* the answer graded for this exercise is worked with this book’s value of $k$; the source’s answer was worked with another value.

{{< fillin
  question="Using the Bohr model, determine the energy in joules of the photon produced when an electron in a Li²⁺ ion moves from the orbit with $n = 2$ to the orbit with $n = 1$."
  answer="1.472\times10^{-17}"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$1.472 \times 10^{-17}\ \text{J}$"
  hint="Use the Bohr expression for the energy difference between two orbits of a hydrogen-like atom, with lithium’s nuclear charge."
>}}

*Source note:* the answer graded for this exercise is worked with this book’s value of $k$; the source’s answer was worked with another value.

---

<small>This section is adapted from [Chemistry 2e, Section 6.2: The Bohr Model](https://openstax.org/books/chemistry-2e/pages/6-2-the-bohr-model) by Paul Flowers, Klaus Theopold, Richard Langley, William R. Robinson, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/chemistry-2e). Changes: each reference to another section of this book linked to that section’s page; the source's equations and powers of ten typeset as KaTeX math, and the quantity symbols in the prose (*h*, *E*, *k*, *Z*, *n*) set as math; unit cancellation set with a diagonal strike; the constant *k* given the value of the Rydberg constant in this book’s table of constants (Appendix D), to four figures, where the source prints another value, with a Source note, and both worked examples, both Check Your Learning answers, and the four exercise keys that depend on it worked with it, each graded key with a Source note; the second example’s wavelength line printed with the energy difference’s carried digits, where the source divides by the rounded value, with a Source note; the second example’s title printed with a hyphen in “One-electron”, where the source prints an en dash, “specific allowed value” in the list of the model’s features printed as “specific allowed values”, and “orbitals” printed as “orbits” in the sentence on Bohr’s quantized energies and in the radius exercise, the module’s word for a Bohr orbit everywhere else; the two worked examples set as prose, their two Check Your Learning questions carried as 3 fill-ins directly after their solutions, one per value asked, the printed answers serving as their keys rather than appearing as text, with a sentence added after each stem saying which quantity to enter and in what unit; the first Check Your Learning’s reference to the arrows figure written as “the figure of the photons a hydrogen atom absorbs and emits, below”, and the body’s references to the two figures written as “the figure of the energy levels of a hydrogen atom below” and “shown in the figure of the photons a hydrogen atom absorbs and emits, below the first example”; the two figures re-encoded as WebP and marked as diagrams, their alt texts written from the images — the source alts print the top label of the energy-level figure as “0.00 J”, where it reads 0.0 J, and call the fourth level orange, where it is drawn yellow; the three key equations listed as inline math; the 7 end-of-section exercises the source keys adapted into the interactive Practice block as 7 items: 5 fill-ins, with “Enter the energy in joules.” added after the two stems that leave the unit open, and 2 self-checks with the source’s answers as their model answers; the radius exercise keyed to the four figures its data give, with a Source note; the word “angstroms” in the radius exercise linked to Appendix C, which relates the angstrom to the meter, the source linking nothing there; the definitions of the key terms given closing periods; and the 8 exercises the source prints no answer for are omitted.</small>
