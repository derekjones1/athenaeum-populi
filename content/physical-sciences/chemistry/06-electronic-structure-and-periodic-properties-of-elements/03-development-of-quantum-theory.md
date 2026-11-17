---
title: Development of Quantum Theory
description: >-
  Wave–particle duality extended to matter, the de Broglie wavelength, the
  Heisenberg uncertainty principle, the quantum mechanical model of the atom,
  and the four quantum numbers that specify the state of an electron —
  adapted from OpenStax Chemistry 2e, Section 6.3.
source_section: "6.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Extend the concept of wave–particle duality that was observed in electromagnetic radiation to matter as well
- Understand the general idea of the quantum mechanical description of electrons in an atom, and that it uses the notion of three-dimensional wave functions, or orbitals, that define the distribution of probability to find an electron in a particular part of space
- List and describe traits of the four quantum numbers that form the basis for completely specifying the state of an electron in an atom
{{< /callout >}}

Bohr’s model explained the experimental data for the hydrogen atom and was widely accepted, but it also raised many questions. Why did electrons orbit at only fixed distances defined by a single quantum number $n = 1, 2, 3$, and so on, but never in between? Why did the model work so well describing hydrogen and one-electron ions, but could not correctly predict the emission spectrum for helium or any larger atoms? To answer these questions, scientists needed to completely revise the way they thought about matter.

## Behavior in the Microscopic World

We know how matter behaves in the macroscopic world—objects that are large enough to be seen by the naked eye follow the rules of classical physics. A billiard ball moving on a table will behave like a particle: It will continue in a straight line unless it collides with another ball or the table cushion, or is acted on by some other force (such as friction). The ball has a well-defined position and velocity (or a well-defined momentum, $p = mv$, defined by mass $m$ and velocity $v$) at any given moment. In other words, the ball is moving in a classical trajectory. This is the typical behavior of a classical object.

When waves interact with each other, they show interference patterns that are not displayed by macroscopic particles such as the billiard ball. For example, interacting waves on the surface of water can produce interference patterns similar to those shown in the photograph below. This is a case of wave behavior on the macroscopic scale, and it is clear that particles and waves are very different phenomena in the macroscopic realm.

{{< mediafigure src="chemistry/CNX_Chem_06_03_waterw" kind="photo" eager="true" alt="A photograph of a rippling water surface in shades of blue. Several sets of concentric rings spread out from separate points, and where the rings from different points meet they cross one another, breaking the surface into a patchwork of overlapping ripples." >}}
An interference pattern on the water surface is formed by interacting waves. The waves are caused by reflection of water from the rocks. (credit: modification of work by Sukanto Debnath)
{{< /mediafigure >}}

As technological improvements allowed scientists to probe the microscopic world in greater detail, it became increasingly clear by the 1920s that very small pieces of matter follow a different set of rules from those we observe for large objects. The unquestionable separation of waves and particles was no longer the case for the microscopic world.

One of the first people to pay attention to the special behavior of the microscopic world was Louis de Broglie. He asked the question: If electromagnetic radiation can have particle-like character, can electrons and other submicroscopic particles exhibit wavelike character? In his 1924 doctoral dissertation, de Broglie extended the wave–particle duality of light that Einstein used to resolve the photoelectric-effect paradox to material particles. He predicted that a particle with mass $m$ and velocity $v$ (that is, with linear momentum $p$) should also exhibit the behavior of a wave with a wavelength value $\lambda$, given by this expression in which $h$ is the familiar Planck’s constant:

$$\lambda = \frac{h}{mv} = \frac{h}{p}$$

*Source note:* the source gives the year of de Broglie’s dissertation as 1925; the Nobel Prize organisation’s biography gives the thesis as delivered in 1924 ([NobelPrize.org](https://www.nobelprize.org/prizes/physics/1929/broglie/biographical/)).

This is called the *de Broglie wavelength*. Unlike the other values of $\lambda$ discussed in this chapter, the de Broglie wavelength is a characteristic of particles and other bodies, not electromagnetic radiation (note that this equation involves velocity [$v$, m/s], not frequency [$\nu$, Hz]. Although these two symbols appear nearly identical, they mean very different things). Where Bohr had postulated the electron as being a particle orbiting the nucleus in quantized orbits, de Broglie argued that Bohr’s assumption of quantization can be explained if the electron is considered not as a particle, but rather as a circular standing wave such that only an integer number of wavelengths could fit exactly within the orbit (shown in the figure below).

{{< mediafigure src="chemistry/CNX_Chem_06_03_elecw" kind="diagram" alt="A dashed circle with a dot at its center. A red wavy line runs around the circle, crossing it back and forth and bulging outward six times, so that the wave closes on itself. A double-headed arrow from the center dot out to the wave is labeled Radius r. Outside the circle, a curved double-headed arrow between tick marks at two neighboring outward bulges is labeled Wavelength λ." >}}
If an electron is viewed as a wave circling around the nucleus, an integer number of wavelengths must fit into the orbit for this standing wave behavior to be possible.
{{< /mediafigure >}}

For a circular orbit of radius $r$, the circumference is $2\pi r$, and so de Broglie’s condition is:

$$2\pi r = n\lambda, \quad n = 1, 2, 3, \ldots$$

Shortly after de Broglie proposed the wave nature of matter, two scientists at Bell Laboratories, C. J. Davisson and L. H. Germer, demonstrated experimentally that electrons can exhibit wavelike behavior by showing an interference pattern for electrons scattered from a regular atomic pattern in a crystal. The regularly spaced atomic layers served as slits, as used in other interference experiments. Since the spacing between the layers serving as slits needs to be similar in size to the wavelength of the tested wave for an interference pattern to form, Davisson and Germer used a crystalline nickel target for their “slits,” since the spacing of the atoms within the lattice was approximately the same as the de Broglie wavelengths of the electrons that they used. The figure below shows an interference pattern. It is strikingly similar to the interference patterns for light shown in [Section 6.1 Electromagnetic Energy](/physical-sciences/chemistry/06-electronic-structure-and-periodic-properties-of-elements/01-electromagnetic-energy/) for light passing through two closely spaced, narrow slits. The wave–particle duality of matter can be seen in the figure below by observing what happens if electron collisions are recorded over a long period of time. Initially, when only a few electrons have been recorded, they show clear particle-like behavior, having arrived in small localized packets that appear to be random. As more and more electrons arrived and were recorded, a clear interference pattern that is the hallmark of wavelike behavior emerged. Thus, it appears that while electrons are small localized particles, their motion does not follow the equations of motion implied by classical mechanics, but instead it is governed by some type of a wave equation. Thus the wave–particle duality first observed with photons is actually a fundamental behavior intrinsic to all quantum particles.

{{< mediafigure src="chemistry/CNX_Chem_06_03_Electrnin" kind="diagram" alt="Two panels. In the upper panel, gold circular wave fronts from a source labeled Electron source reach a gray barrier with two narrow parallel slits. Beyond the barrier, two sets of circular wave fronts spread from the slits, overlap, and reach a black screen, which shows evenly spaced bright bands. In the lower panel, two gold arrows point from the same source at the slits, and separate gold dots pass the barrier. Three black screens stand in a row above an arrow labeled Time: the first holds a few scattered dots, the second many more, and the third so many they lie in evenly spaced bands." >}}
(a) The interference pattern for electrons passing through very closely spaced slits demonstrates that quantum particles such as electrons can exhibit wavelike behavior. (b) The experimental results illustrated here demonstrate the wave–particle duality in electrons.
{{< /mediafigure >}}

*Source note:* the source has the electrons in Davisson and Germer’s experiment travelling through the crystal; Davisson’s account has the beam directed against a face of a nickel crystal and the scattered electrons measured in front of it (C. J. Davisson, Nobel Lecture, 1937, [NobelPrize.org](https://www.nobelprize.org/uploads/2018/06/davisson-lecture.pdf)).

{{< callout type="info" >}}
**Link to Learning**

View the Dr. Quantum – Double Slit Experiment [cartoon](http://openstax.org/l/16duality) for an easy-to-understand description of wave–particle duality and the associated experiments.
{{< /callout >}}

**Example.** *Calculating the Wavelength of a Particle.* If an electron travels at a velocity of $1.000 \times 10^{7}$ m/s and has a mass of $9.109 \times 10^{-28}$ g, what is its wavelength?

**Solution.** We can use de Broglie’s equation to solve this problem, but we first must do a unit conversion of Planck’s constant. You learned earlier that $1\ \text{J} = 1\ \text{kg m}^{2}\text{/s}^{2}$. Thus, we can write $h$ = $6.626 \times 10^{-34}$ J s as $6.626 \times 10^{-34}$ $\text{kg m}^{2}\text{/s}$.

$$\lambda = \frac{h}{mv}$$

$$\begin{aligned} &= \frac{6.626 \times 10^{-34}\ \text{kg m}^{2}\text{/s}}{(9.109 \times 10^{-31}\ \text{kg})(1.000 \times 10^{7}\ \text{m/s})} \\[6pt] &= 7.274 \times 10^{-11}\ \text{m} \end{aligned}$$

This is a small value, but it is significantly larger than the size of an electron in the classical (particle) view. This size is the same order of magnitude as the size of an atom. This means that electron wavelike behavior is going to be noticeable in an atom.

{{< fillin
  question="Calculate the wavelength of a softball with a mass of 100 g traveling at a velocity of 35 m/s, assuming that it can be modeled as a single particle. Enter the wavelength in meters."
  answer="1.9\times10^{-34}"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$1.9 \times 10^{-34}\ \text{m}$"
  hint="Use de Broglie’s equation, as in the example above, with every quantity in SI units."
>}}

{{< selfcheck question="Calculate the wavelength of a softball with a mass of 100 g traveling at a velocity of 35 m/s, assuming that it can be modeled as a single particle. Why do we not notice a wavelength for a thrown softball?" hint="Compare the size of the wavelength you calculated with what can be detected, and ask what the wavelength depends on." >}}
We never think of a thrown softball having a wavelength, since this wavelength is so small it is impossible for our senses or any known instrument to detect. Since de Broglie wavelength is inversely proportional to both particle mass and velocity, the particle’s momentum (mathematical product of mass and velocity) must be sufficiently small to yield a detectably large wavelength.
===CHECKS===
we never think of a thrown softball having a wavelength
this wavelength is so small it is impossible for our senses or any known instrument to detect
de Broglie wavelength is inversely proportional to both particle mass and velocity
the particle’s momentum (mathematical product of mass and velocity) must be sufficiently small to yield a detectably large wavelength
{{< /selfcheck >}}

Werner Heisenberg considered the limits of how accurately we can measure properties of an electron or other microscopic particles. He determined that there is a fundamental limit to how accurately one can measure both a particle’s position and its momentum simultaneously. The more accurately we measure the momentum of a particle, the less accurately we can determine its position at that time, and vice versa. This is summed up in what we now call the **Heisenberg uncertainty principle**: *It is fundamentally impossible to determine simultaneously and exactly both the momentum and the position of a particle*. For a particle of mass $m$ moving with velocity $v_x$ in the $x$ direction (or equivalently with momentum $p_x$), the product of the uncertainty in the position, $\Delta x$, and the uncertainty in the momentum, $\Delta p_x$, must be greater than or equal to $\frac{\hbar}{2}$ (where $\hbar = \frac{h}{2\pi}$, the value of Planck’s constant divided by $2\pi$).

$$\Delta x \times \Delta p_x = (\Delta x)(m\Delta v) \geq \frac{\hbar}{2}$$

This equation allows us to calculate the limit to how precisely we can know both the simultaneous position of an object and its momentum. For example, if we improve our measurement of an electron’s position so that the uncertainty in the position ($\Delta x$) has a value of, say, 1 pm ($10^{-12}$ m, about 1% of the diameter of a hydrogen atom), then our determination of its momentum must have an uncertainty with a value of at least

$$\begin{aligned} \left[\Delta p = m\Delta v = \frac{\hbar}{(2\Delta x)}\right] &= \frac{1.055 \times 10^{-34}\ \text{kg m}^{2}\text{/s}}{(2 \times 1 \times 10^{-12}\ \text{m})} \\[6pt] &= 5 \times 10^{-23}\ \text{kg m/s}. \end{aligned}$$

The value of $\hbar$ is not large, so the uncertainty in the position or momentum of a macroscopic object like a baseball is too insignificant to observe. However, the mass of a microscopic object such as an electron is small enough that the uncertainty can be large and significant.

It should be noted that Heisenberg’s uncertainty principle is not just limited to uncertainties in position and momentum, but it also links other dynamical variables. For example, when an atom absorbs a photon and makes a transition from one energy state to another, the uncertainty in the energy and the uncertainty in the time required for the transition are similarly related, as $\Delta E\,\Delta t \geq \frac{\hbar}{2}$.

Heisenberg’s principle imposes ultimate limits on what is knowable in science. The uncertainty principle can be shown to be a consequence of wave–particle duality, which lies at the heart of what distinguishes modern quantum theory from classical mechanics.

{{< callout type="info" >}}
**Link to Learning**

Read this [article](http://openstax.org/l/16uncertainty) that describes a recent macroscopic demonstration of the uncertainty principle applied to microscopic objects.
{{< /callout >}}

## The Quantum–Mechanical Model of an Atom

Shortly after de Broglie published his ideas that the electron in a hydrogen atom could be better thought of as being a circular standing wave instead of a particle moving in quantized circular orbits, Erwin Schrödinger extended de Broglie’s work by deriving what is today known as the Schrödinger equation. When Schrödinger applied his equation to hydrogen-like atoms, he was able to reproduce Bohr’s expression for the energy and, thus, the Rydberg formula governing hydrogen spectra. Schrödinger described electrons as three-dimensional stationary waves, or **wavefunctions**, represented by the Greek letter psi, $\psi$. Later the same year, Max Born proposed an interpretation of the wavefunction $\psi$ that is still accepted today: Electrons are still particles, and so the waves represented by $\psi$ are not physical waves but, instead, are complex probability amplitudes. The square of the magnitude of a wavefunction $\lvert\psi\rvert^{2}$ describes the probability of the quantum particle being present near a certain location in space. This means that wavefunctions can be used to determine the distribution of the electron’s density with respect to the nucleus in an atom. In the most general form, the Schrödinger equation can be written as:

$$\hat{H}\psi = E\psi$$

*Source note:* the source says Born’s interpretation came a few years after Schrödinger’s equation; both papers appeared in 1926 (Schrödinger, Annalen der Physik 384, 361, [doi:10.1002/andp.19263840404](https://doi.org/10.1002/andp.19263840404); Born, Zeitschrift für Physik 37, 863, [doi:10.1007/BF01397477](https://doi.org/10.1007/BF01397477)).

$\hat{H}$ is the Hamiltonian operator, a set of mathematical operations representing the total energy of the quantum particle (such as an electron in an atom), $\psi$ is the wavefunction of this particle that can be used to find the spatial distribution of the probability of finding the particle, and $E$ is the actual value of the total energy of the particle.

Schrödinger’s work, as well as that of Heisenberg and many other scientists following in their footsteps, is generally referred to as **quantum mechanics**.

{{< callout type="info" >}}
**Link to Learning**

You may also have heard of Schrödinger because of his famous thought experiment. [This story](http://openstax.org/l/16superpos) explains the concepts of superposition and entanglement as related to a cat in a box with poison.
{{< /callout >}}

## Understanding Quantum Theory of Electrons in Atoms

The goal of this section is to understand the electron orbitals (location of electrons in atoms), their different energies, and other properties. The use of quantum theory provides the best understanding to these topics. This knowledge is a precursor to chemical bonding.

As was described previously, electrons in atoms can exist only on discrete energy levels but not between them. It is said that the energy of an electron in an atom is quantized, that is, it can be equal only to certain specific values and can jump from one energy level to another but not transition smoothly or stay between these levels.

The energy levels are labeled with an $n$ value, where $n = 1, 2, 3, \ldots$. Generally speaking, the energy of an electron in an atom is greater for greater values of $n$. This number, $n$, is referred to as the principal quantum number. The **principal quantum number** defines the location of the energy level. It is essentially the same concept as the $n$ in the Bohr atom description. Another name for the principal quantum number is the shell number. The **shells** of an atom can be thought of concentric circles radiating out from the nucleus. The electrons that belong to a specific shell are most likely to be found within the corresponding circular area. The further we proceed from the nucleus, the higher the shell number, and so the higher the energy level (shown in the figure below). The positively charged protons in the nucleus stabilize the electronic orbitals by electrostatic attraction between the positive charges of the protons and the negative charges of the electrons. So the further away the electron is from the nucleus, the greater the energy it has.

{{< mediafigure src="chemistry/CNX_Chem_06_03_Qnumbers" kind="diagram" alt="A green sphere marked with a plus sign and labeled Nucleus sits at the center of three concentric circles, labeled n = 1, n = 2, and n = 3 from the innermost circle outward. An arrow labeled Increasing energy runs from the nucleus outward through all three circles." >}}
Different shells are numbered by principal quantum numbers.
{{< /mediafigure >}}

This quantum mechanical model for where electrons reside in an atom can be used to look at electronic transitions, the events when an electron moves from one energy level to another. If the transition is to a higher energy level, energy is absorbed, and the energy change has a positive value. To obtain the amount of energy necessary for the transition to a higher energy level, a photon is absorbed by the atom. A transition to a lower energy level involves a release of energy, and the energy change is negative. This process is accompanied by emission of a photon by the atom. The following equation summarizes these relationships and is based on the hydrogen atom:

$$\begin{aligned} \Delta E &= E_\text{final} - E_\text{initial} \\[6pt] &= -2.18 \times 10^{-18}\left(\frac{1}{n_\text{f}^{2}} - \frac{1}{n_\text{i}^{2}}\right)\ \text{J} \end{aligned}$$

The values $n_\text{f}$ and $n_\text{i}$ are the final and initial energy states of the electron. The example “Calculating the Energy and Wavelength of Electron Transitions in a One-electron (Bohr) System” in the previous section of the chapter, [Section 6.2 The Bohr Model](/physical-sciences/chemistry/06-electronic-structure-and-periodic-properties-of-elements/02-the-bohr-model/), demonstrates calculations of such energy changes.

The principal quantum number is one of three quantum numbers used to characterize an orbital. An **atomic orbital** is a general region in an atom within which an electron is most probable to reside. The quantum mechanical model specifies the probability of finding an electron in the three-dimensional space around the nucleus and is based on solutions of the Schrödinger equation. In addition, the principal quantum number defines the energy of an electron in a hydrogen or hydrogen-like atom or an ion (an atom or an ion with only one electron) and the general region in which discrete energy levels of electrons in a multi-electron atoms and ions are located.

Another quantum number is $l$, the **secondary (angular momentum) quantum number**. It is an integer that may take the values, $l = 0, 1, 2, \ldots, n - 1$. This means that an orbital with $n = 1$ can have only one value of $l$, $l = 0$, whereas $n = 2$ permits $l = 0$ and $l = 1$, and so on. Whereas the principal quantum number, $n$, defines the general size and energy of the orbital, the secondary quantum number $l$ specifies the shape of the orbital. Orbitals with the same value of $l$ define a **subshell**.

Orbitals with $l = 0$ are called **s orbitals** and they make up the s subshells. The value $l = 1$ corresponds to the p orbitals. For a given $n$, **p orbitals** constitute a p subshell (e.g., 3p if $n = 3$). The orbitals with $l = 2$ are called the **d orbitals**, followed by the f-, g-, and h-orbitals for $l = 3, 4, \text{ and } 5$.

There are certain distances from the nucleus at which the probability density of finding an electron located at a particular orbital is zero. In other words, the value of the wavefunction $\psi$ is zero at this distance for this orbital. Such a value of radius $r$ is called a radial node. The number of radial nodes in an orbital is $n - l - 1$.

{{< mediafigure src="chemistry/CNX_Chem_06_03_sorbit" kind="diagram" alt="Three spheres, growing in size left to right, each above a graph of probability density against distance from the nucleus; the graphs are labeled 1s, 2s, and 3s. The 1s sphere is blue. The red 2s sphere is cut open to show a small blue sphere inside it, with a gap between them. The large blue 3s sphere is cut open to show a red shell inside it and a small blue sphere inside that, with gaps between them. The 1s curve has one peak; the 2s curve a small peak, a drop to zero, and a taller peak; the 3s curve two small peaks, each followed by a drop to zero, and then the tallest peak." longdesc="Top row, left to right: a small blue sphere; a larger red sphere cut open along a horizontal plane and with its upper front quarter removed, showing a small blue sphere at its center separated from the red shell by an empty gap; and the largest sphere, blue, cut open the same way, showing inside it a red shell and, inside the red shell, a small blue sphere, each separated from the next by an empty gap. Bottom row: three graphs, each with a vertical axis labeled probability density and a horizontal axis labeled distance from nucleus, labeled below 1s, 2s, and 3s. The 1s curve rises steeply from the origin to a single peak close to the vertical axis and falls back to zero; a small blue shaded patch sits at the origin. The 2s curve rises to a small peak near the origin, falls to zero, rises to a second, taller peak farther out, and then tails off toward zero; a small blue patch sits at the origin and a broad red shaded band lies under the second peak. The 3s curve rises to a small peak, falls to zero, rises to a second small peak a little taller than the first, falls to zero again, and then rises to its tallest peak farther out before tailing off slowly; a small blue patch sits at the origin, a red band lies under the second peak, and a broad blue band lies under the tallest peak." >}}
The graphs show the probability (*y* axis) of finding an electron for the 1s, 2s, 3s orbitals as a function of distance from the nucleus.
{{< /mediafigure >}}

Consider the examples in the figure above. The orbitals depicted are of the s type, thus $l = 0$ for all of them. It can be seen from the graphs of the probability densities that there are $1 - 0 - 1 = 0$ places where the density is zero (nodes) for 1s ($n = 1$), $2 - 0 - 1 = 1$ node for 2s, and $3 - 0 - 1 = 2$ nodes for the 3s orbitals.

The s subshell electron density distribution is spherical and the p subshell has a dumbbell shape. The d and **f orbitals** are more complex. These shapes represent the three-dimensional regions within which the electron is likely to be found.

{{< mediafigure src="chemistry/CNX_Chem_06_03_Oshapes" kind="diagram" alt="Sixteen orbital shapes, each drawn on its own labeled x, y, and z axes and named below it, in five rows: one s orbital, three p orbitals, five d orbitals, and seven f orbitals over the last two rows. Every orbital is built of red and blue lobes. The s orbital is a single blue sphere. Each p orbital is two lobes, one red and one blue, on opposite sides of the origin along one axis. Four of the d orbitals are four lobes each; the fifth is two lobes along the z axis with a ring around the middle. The f orbitals have more lobes; one has two lobes along the z axis with two rings around it." longdesc="Row 1: s, a blue sphere centered on the origin. Row 2, left to right: p sub x, a red lobe on the negative x side and a blue lobe on the positive x side; p sub z, a red lobe above and a blue lobe below along the z axis; p sub y, a red lobe in front and a blue lobe behind along the y axis. Row 3, left to right: d sub xy, four lobes, alternately red and blue, lying between the x and y axes; d sub xz, four lobes between the x and z axes; d sub z squared, a red lobe above and a red lobe below along the z axis with a blue ring around the origin in the plane of the x and y axes; d sub yz, four lobes between the y and z axes; d sub x squared minus y squared, four lobes along the x and y axes. Row 4, left to right: f sub x(x squared minus 3y squared), f sub y(x squared minus z squared), f sub xz squared, and f sub z cubed; the first three are clusters of red and blue lobes pointing in several directions, and f sub z cubed is a red lobe above and a blue lobe below along the z axis with a blue ring and, below it, a red ring around the z axis between them. Row 5, left to right: f sub yz squared, f sub xyz, and f sub y(3x squared minus y squared), each a cluster of red and blue lobes pointing in several directions." >}}
Shapes of s, p, d, and f orbitals.
{{< /mediafigure >}}

The **magnetic quantum number**, $m_l$, specifies the relative spatial orientation of a particular orbital. Generally speaking, $m_l$ can be equal to $-l, -(l - 1), \ldots, 0, \ldots, (l - 1), l$. The total number of possible orbitals with the same value of $l$ (that is, in the same subshell) is $2l + 1$. Thus, there is one s-orbital in an s subshell ($l = 0$), there are three p-orbitals in a p subshell ($l = 1$), five d-orbitals in a d subshell ($l = 2$), seven f-orbitals in an f subshell ($l = 3$), and so forth. The principal quantum number defines the general value of the electronic energy. The angular momentum quantum number determines the shape of the orbital. And the magnetic quantum number specifies orientation of the orbital in space, as can be seen in the figure above.

{{< mediafigure src="chemistry/CNX_Chem_06_03_subshells" kind="diagram" alt="An energy diagram with an upward arrow labeled E at the left. Short horizontal lines, one per orbital, are grouped and labeled by subshell, rising from left to right: one line for 1s at the bottom; one line for 2s well above it; three lines for 2p a little higher; one line for 3s well above those; three lines for 3p a little higher; five lines for 3d near the top; one line for 4s, a little lower than the 3d lines; and three lines for 4p, the highest of all." longdesc="The vertical arrow labeled E rises along the left edge. Moving right, each group of lines sits at its own height: 1s, a single line at the very bottom; 2s, a single line about halfway up; 2p, three lines in a row slightly above 2s; 3s, a single line much higher; 3p, three lines slightly above 3s; 3d, five lines near the top of the diagram; 4s, a single line to the right of 3d and slightly below the 3d lines; and 4p, three lines at the far right, slightly above the 3d lines, the highest in the diagram." >}}
The chart shows the energies of electron orbitals in a multi-electron atom.
{{< /mediafigure >}}

The figure above illustrates the energy levels for various orbitals. The number before the orbital name (such as 2s, 3p, and so forth) stands for the principal quantum number, $n$. The letter in the orbital name defines the subshell with a specific angular momentum quantum number $l = 0$ for s orbitals, 1 for p orbitals, 2 for d orbitals. Finally, there are more than one possible orbitals for $l \geq 1$, each corresponding to a specific value of $m_l$. In the case of a hydrogen atom or a one-electron ion (such as He⁺, Li²⁺, and so on), energies of all the orbitals with the same $n$ are the same. This is called a degeneracy, and the energy levels for the same principal quantum number, $n$, are called **degenerate orbitals**. However, in atoms with more than one electron, this degeneracy is eliminated by the electron–electron interactions, and orbitals that belong to different subshells have different energies, as shown in the figure above. Orbitals within the same subshell are still degenerate and have the same energy.

While the three quantum numbers discussed in the previous paragraphs work well for describing electron orbitals, some experiments showed that they were not sufficient to explain all observed results. When hydrogen-line spectra are examined at extremely high resolution, some lines are actually not single peaks but, rather, pairs of closely spaced lines. This is the so-called fine structure of the spectrum, and it implies that there are additional small differences in energies of electrons even when they are located in the same orbital. These observations led Samuel Goudsmit and George Uhlenbeck to propose that electrons have a fourth quantum number. They called this the **spin quantum number**, or $\boldsymbol{m_s}$.

*Source note:* the source dates the observation of these pairs of lines to the 1920s; Michelson and Morley found this fine structure in 1887 (W. E. Lamb, Nobel Lecture, 1955, [NobelPrize.org](https://www.nobelprize.org/uploads/2018/06/lamb-lecture.pdf)).

The other three quantum numbers, $n$, $l$, and $m_l$, are properties of specific atomic orbitals that also define in what part of the space an electron is most likely to be located. Orbitals are a result of solving the Schrödinger equation for electrons in atoms. The electron spin is a different kind of property. It is a completely quantum phenomenon with no analogues in the classical realm. In addition, it cannot be derived from solving the Schrödinger equation and is not related to the normal spatial coordinates (such as the Cartesian $x$, $y$, and $z$). Electron spin describes an intrinsic electron "rotation" or "spinning." Each electron acts as a tiny magnet or a tiny rotating object with an angular momentum, or as a loop with an electric current, even though this rotation or current cannot be observed in terms of spatial coordinates.

The magnitude of the overall electron spin can only have one value, and an electron can only “spin” in one of two quantized states. One is termed the α state, with the $z$ component of the spin being in the positive direction of the $z$ axis. This corresponds to the spin quantum number $m_s = +\frac{1}{2}$. The other is called the β state, with the $z$ component of the spin being negative and $m_s = -\frac{1}{2}$. Any electron, regardless of the atomic orbital it is located in, can only have one of those two values of the spin quantum number. The energies of electrons having $m_s = -\frac{1}{2}$ and $m_s = +\frac{1}{2}$ are different if an external magnetic field is applied.

{{< mediafigure src="chemistry/CNX_Chem_06_03_spin" kind="diagram" alt="Two electrons, each drawn as a gold sphere marked e− with a curved arrow circling it, each between two gray bars, beside a vertical arrow labeled B₀ at the left that points up. On the left, the top bar is marked N and the bottom bar S, a thick gray arrow through the electron points up, and the label reads Spin +½, spin-up. On the right, the top bar is marked S and the bottom bar N, the thick arrow points down, and the label reads Spin −½, spin-down." >}}
Electrons with spin values $\pm\frac{1}{2}$ in an external magnetic field.
{{< /mediafigure >}}

The figure above illustrates this phenomenon. An electron acts like a tiny magnet. Because the electron is negatively charged, its magnetic moment points opposite to its spin: down (in the negative $z$ direction) for the $+\frac{1}{2}$ spin quantum number and up (in the positive $z$ direction) for the spin quantum number of $-\frac{1}{2}$. A magnet has a lower energy if its magnetic moment is aligned with the external magnetic field and a higher energy for the magnetic moment being opposite to the applied field. This is why an electron with $m_s = -\frac{1}{2}$ has a slightly lower energy in an external field in the positive $z$ direction, and an electron with $m_s = +\frac{1}{2}$ has a slightly higher energy in the same field. This is true even for an electron occupying the same orbital in an atom. A spectral line corresponding to a transition for electrons from the same orbital but with different spin quantum numbers has two possible values of energy in the field; thus, the line in the spectrum will be split in a magnetic field (the Zeeman effect).

*Source note:* the source has the electron’s magnetic moment along its spin and the $m_s = +\frac{1}{2}$ state lower in energy in the field; the electron’s magnetic moment and g factor are negative in the CODATA values ([NIST](https://physics.nist.gov/cgi-bin/cuu/Value?gem)), so the moment is opposite to the spin and the $m_s = -\frac{1}{2}$ state is the lower. The figure above draws each electron’s magnet with its north pole along the spin, as the source’s text has it. The source also calls the splitting of a line in the applied field a fine structure splitting; splitting in a magnetic field is the Zeeman effect ([NIST, Atomic Spectroscopy compendium, section 12](https://www.nist.gov/pml/atomic-spectroscopy-compendium-basic-ideas-notation-data-and-formulas/atomic-spectroscopy-zeeman)).

## The Pauli Exclusion Principle

An electron in an atom is completely described by four quantum numbers: $n$, $l$, $m_l$, and $m_s$. The first three quantum numbers define the orbital and the fourth quantum number describes the intrinsic electron property called spin. An Austrian physicist Wolfgang Pauli formulated a general principle that gives the last piece of information that we need to understand the general behavior of electrons in atoms. The **Pauli exclusion principle** can be formulated as follows: No two electrons in the same atom can have exactly the same set of all the four quantum numbers. What this means is that two electrons can share the same orbital (the same set of the quantum numbers $n$, $l$, and $m_l$) only if their spin quantum numbers $m_s$ have different values. Since the spin quantum number can only have two values $\left(\pm\frac{1}{2}\right)$, no more than two electrons can occupy the same orbital (and if two electrons are located in the same orbital, they must have opposite spins). Therefore, any atomic orbital can be populated by only zero, one, or two electrons.

The properties and meaning of the quantum numbers of electrons in atoms are briefly summarized in the table below.

**Quantum Numbers, Their Properties, and Significance**

| Name | Symbol | Allowed values | Physical meaning |
|---|---|---|---|
| principal quantum number | $n$ | 1, 2, 3, 4, …. | shell, the general region for the value of energy for an electron on the orbital |
| angular momentum or azimuthal quantum number | $l$ | $0 \leq l \leq n - 1$ | subshell, the shape of the orbital |
| magnetic quantum number | $m_l$ | $-l \leq m_l \leq l$ | orientation of the orbital |
| spin quantum number | $m_s$ | $+\frac{1}{2}, -\frac{1}{2}$ | direction of the intrinsic quantum “spinning” of the electron |

**Example.** *Working with Shells and Subshells.* Indicate the number of subshells, the number of orbitals in each subshell, and the values of $l$ and $m_l$ for the orbitals in the $n = 4$ shell of an atom.

**Solution.** For $n = 4$, $l$ can have values of 0, 1, 2, and 3. Thus, s, p, d, and f subshells are found in the $n = 4$ shell of an atom. For $l = 0$ (the s subshell), $m_l$ can only be 0. Thus, there is only one 4s orbital. For $l = 1$ (p-type orbitals), $m$ can have values of −1, 0, +1, so we find three 4p orbitals. For $l = 2$ (d-type orbitals), $m_l$ can have values of −2, −1, 0, +1, +2, so we have five 4d orbitals. When $l = 3$ (f-type orbitals), $m_l$ can have values of −3, −2, −1, 0, +1, +2, +3, and we can have seven 4f orbitals. Thus, we find a total of 16 orbitals in the $n = 4$ shell of an atom.

{{< textin
  question="Identify the subshell in which electrons with the following quantum numbers are found: n = 3, l = 1. Enter the subshell."
  answer="3p"
  hint="Recall which letter names the orbitals of each value of l, and write the shell number before it."
>}}

{{< textin
  question="Identify the subshell in which electrons with the following quantum numbers are found: n = 5, l = 3. Enter the subshell."
  answer="5f"
  hint="Recall which letter names the orbitals of each value of l, and write the shell number before it."
>}}

{{< textin
  question="Identify the subshell in which electrons with the following quantum numbers are found: n = 2, l = 0. Enter the subshell."
  answer="2s"
  hint="Recall which letter names the orbitals of each value of l, and write the shell number before it."
>}}

**Example.** *Maximum Number of Electrons.* Calculate the maximum number of electrons that can occupy a shell with (a) $n = 2$, (b) $n = 5$, and (c) $n$ as a variable. Note you are only looking at the orbitals with the specified $n$ value, not those at lower energies.

**Solution.** (a) When $n = 2$, there are four orbitals (a single 2s orbital, and three orbitals labeled 2p). These four orbitals can contain eight electrons.

(b) When $n = 5$, there are five subshells of orbitals that we need to sum:

$$\begin{aligned} &\phantom{+}1\ \text{orbital labeled 5s} \\ &\phantom{+}3\ \text{orbitals labeled 5p} \\ &\phantom{+}5\ \text{orbitals labeled 5d} \\ &\phantom{+}7\ \text{orbitals labeled 5f} \\ &\underline{+9\ \text{orbitals labeled 5g}} \\ &\phantom{+}25\ \text{orbitals total} \end{aligned}$$

Again, each orbital holds two electrons, so 50 electrons can fit in this shell.

(c) The number of orbitals in any shell $n$ will equal $n^{2}$. There can be up to two electrons in each orbital, so the maximum number of electrons will be $2 \times n^{2}$.

{{< fillin
  question="If a shell contains a maximum of 32 electrons, what is the principal quantum number, $n$?"
  answer="4"
  answerForm="whole-number"
  answerDisplay="$4$"
  hint="Use the expression for the maximum number of electrons in any shell from the solution above."
>}}

**Example.** *Working with Quantum Numbers.* Complete the following table for atomic orbitals:

| Orbital | $n$ | $l$ | $m_l$ degeneracy | Radial nodes (no.) |
|---|---|---|---|---|
| 4f |  |  |  |  |
|  | 4 | 1 |  |  |
|  | 7 |  | 7 | 3 |
| 5d |  |  |  |  |

**Solution.** The table can be completed using the following rules:

- The orbital designation is $nl$, where $l = 0, 1, 2, 3, 4, 5, \ldots$ is mapped to the letter sequence s, p, d, f, g, h, …,
- The $m_l$ degeneracy is the number of orbitals within an $l$ subshell, and so is $2l + 1$ (there is one s orbital, three p orbitals, five d orbitals, seven f orbitals, and so forth).
- The number of radial nodes is equal to $n - l - 1$.

| Orbital | $n$ | $l$ | $m_l$ degeneracy | Radial nodes (no.) |
|---|---|---|---|---|
| 4f | 4 | 3 | 7 | 0 |
| 4p | 4 | 1 | 3 | 2 |
| 7f | 7 | 3 | 7 | 3 |
| 5d | 5 | 2 | 5 | 2 |

{{< fillin
  question="How many orbitals have $l = 2$ and $n = 3$?"
  answer="5"
  answerForm="whole-number"
  answerDisplay="$5$"
  hint="Use the rule for the number of orbitals in a subshell."
>}}

## Summary

- Macroscopic objects act as particles. Microscopic objects (such as electrons) have properties of both a particle and a wave. Their exact trajectories cannot be determined. The quantum mechanical model of atoms describes the three-dimensional position of the electron in a *probabilistic* manner according to a mathematical function called a wavefunction, often denoted as $\psi$. Atomic wavefunctions are also called orbitals. The squared magnitude of the wavefunction describes the distribution of the probability of finding the electron in a particular region in space. Therefore, atomic orbitals describe the areas in an atom where electrons are most likely to be found.
- An atomic orbital is characterized by three quantum numbers. The principal quantum number, $n$, can be any positive integer. The general region for value of energy of the orbital and the average distance of an electron from the nucleus are related to $n$. Orbitals having the same value of $n$ are said to be in the same shell. The secondary (angular momentum) quantum number, $l$, can have any integer value from 0 to $n - 1$. This quantum number describes the shape or type of the orbital. Orbitals with the same principal quantum number and the same $l$ value belong to the same subshell. The magnetic quantum number, $m_l$, with $2l + 1$ values ranging from $-l$ to $+l$, describes the orientation of the orbital in space. In addition, each electron has a spin quantum number, $m_s$, that can be equal to $\pm\frac{1}{2}$. No two electrons in the same atom can have the same set of values for all the four quantum numbers.

## Key terms

- **secondary (angular momentum) quantum number ($l$)** — quantum number distinguishing the different shapes of orbitals; it is also a measure of the orbital angular momentum.
- **atomic orbital** — mathematical function that describes the behavior of an electron in an atom (also called the wavefunction).
- **d orbital** — region of space with high electron density that is either four lobed or contains a dumbbell and torus shape; describes orbitals with $l = 2$.
- **degenerate orbitals** — orbitals that have the same energy.
- **electron density** — a measure of the probability of locating an electron in a particular region of space, it is equal to the squared absolute value of the wave function $\psi$.
- **f orbital** — multilobed region of space with high electron density, describes orbitals with $l = 3$.
- **Heisenberg uncertainty principle** — rule stating that it is impossible to exactly determine both certain conjugate dynamical properties such as the momentum and the position of a particle at the same time. The uncertainty principle is a consequence of quantum particles exhibiting wave–particle duality.
- **magnetic quantum number ($m_l$)** — quantum number signifying the orientation of an atomic orbital around the nucleus.
- **p orbital** — dumbbell-shaped region of space with high electron density, describes orbitals with $l = 1$.
- **Pauli exclusion principle** — specifies that no two electrons in an atom can have the same value for all four quantum numbers.
- **principal quantum number ($n$)** — quantum number specifying the shell an electron occupies in an atom.
- **quantum mechanics** — field of study that includes quantization of energy, wave–particle duality, and the Heisenberg uncertainty principle to describe matter.
- **s orbital** — spherical region of space with high electron density, describes orbitals with $l = 0$.
- **shell** — atomic orbitals with the same principal quantum number, $n$.
- **spin quantum number ($m_s$)** — number specifying the electron spin direction, either $+\frac{1}{2}$ or $-\frac{1}{2}$.
- **subshell** — atomic orbitals with the same values of $n$ and $l$.
- **wavefunction ($\psi$)** — mathematical description of an atomic orbital that describes the shape of the orbital; it can be used to calculate the probability of finding the electron at any given location in the orbital, as well as dynamical variables such as the energy and the angular momentum.

## Practice

### Extend the concept of wave–particle duality that was observed in electromagnetic radiation to matter as well

{{< textin
  question="A rule stating that it is impossible to exactly determine both certain conjugate dynamical properties such as the momentum and the position of a particle at the same time is called the ________."
  answer="Heisenberg uncertainty principle"
  accept="uncertainty principle|Heisenberg’s uncertainty principle"
  hint="Look at the paragraph that introduces Werner Heisenberg, on the limits of how accurately a particle can be measured."
>}}

{{< textin
  question="Davisson and Germer used a crystalline ________ target for their “slits,” since the spacing of the atoms within the lattice was approximately the same as the de Broglie wavelengths of the electrons that they used."
  answer="nickel"
  hint="Look at the paragraph on the experiment at Bell Laboratories."
>}}

### Understand the general idea of the quantum mechanical description of electrons in an atom, and that it uses the notion of three-dimensional wave functions, or orbitals, that define the distribution of probability to find an electron in a particular part of space

{{< textin
  question="What is the name of a spherical region of space with high electron density, which describes orbitals with l = 0?"
  answer="s orbital"
  hint="Look at the paragraph that names the orbitals for each value of the secondary quantum number."
>}}

{{< selfcheck question="How are the Bohr model and the quantum mechanical model of the hydrogen atom similar? How are they different?" hint="Compare the two models’ nucleus and forces, how each treats the electron’s path, where each model’s quantum numbers come from, and what each predicts." >}}
Both models have a central positively charged nucleus with electrons moving about the nucleus in accordance with the Coulomb electrostatic potential. The Bohr model *assumes* that the electrons move in circular orbits that have quantized energies, angular momentum, and radii that are specified by a single quantum number, $n = 1, 2, 3, \ldots$, but this quantization is an ad hoc assumption made by Bohr to incorporate quantization into an essentially classical mechanics description of the atom. Bohr also assumed that electrons orbiting the nucleus normally do not emit or absorb electromagnetic radiation, but do so when the electron switches to a different orbit. In the quantum mechanical model, the electrons do not move in precise orbits (such orbits violate the Heisenberg uncertainty principle) and, instead, a probabilistic interpretation of the electron’s position at any given instant is used, with a mathematical function $\psi$ called a wavefunction that can be used to determine the electron’s spatial probability distribution. These wavefunctions, or orbitals, are three-dimensional stationary waves that can be specified by three quantum numbers that arise naturally from their underlying mathematics (no ad hoc assumptions required): the principal quantum number, $n$ (the same one used by Bohr), which specifies shells such that orbitals having the same $n$ all have the same energy and approximately the same spatial extent; the angular momentum quantum number $l$, which is a measure of the orbital’s angular momentum and corresponds to the orbitals’ general shapes, as well as specifying subshells such that orbitals having the same $l$ (and $n$) all have the same energy; and the orientation quantum number $m$, which is a measure of the $z$ component of the angular momentum and corresponds to the orientations of the orbitals. The Bohr model gives the same expression for the energy as the quantum mechanical expression and, hence, both properly account for hydrogen’s discrete spectrum (an example of getting the right answers for the wrong reasons, something that many chemistry students can sympathize with), but gives the wrong expression for the angular momentum (Bohr orbits necessarily all have non-zero angular momentum, but some quantum orbitals [s orbitals] can have zero angular momentum).
===CHECKS===
both models have a central positively charged nucleus with electrons moving about the nucleus in accordance with the Coulomb electrostatic potential
the Bohr model assumes that the electrons move in circular orbits that have quantized energies, angular momentum, and radii
in the quantum mechanical model, the electrons do not move in precise orbits
a probabilistic interpretation of the electron’s position at any given instant is used
the Bohr model gives the same expression for the energy as the quantum mechanical expression
gives the wrong expression for the angular momentum
{{< /selfcheck >}}

{{< selfcheck question="Sketch the boundary surface of a $d_{x^2-y^2}$ and a $p_y$ orbital. Be sure to show and label the axes." hint="Recall the shape of a p orbital and of a d orbital, and the axis or axes each subscript names." >}}
{{< mediafigure src="chemistry/CNX_Chem_06_03_Ex9soln_img" kind="diagram" alt="Two orbitals, each drawn at the origin of a set of x, y, and z axes with every axis labeled. On the left, labeled 2p sub y: two rounded lobes, one red and one blue, on opposite sides of the origin along the y axis. On the right, labeled d sub x squared minus y squared: four lobes around the origin, two blue lobes on opposite sides along the x axis and two red lobes on opposite sides along the y axis." >}}
{{< /mediafigure >}}

For $p_y$, the p orbital along the $y$ axis is drawn as two lobes on opposite sides of the origin; for $d_{x^2-y^2}$, the d orbital along the $x$ and $y$ axes is drawn as four lobes, two along the $x$ axis and two along the $y$ axis. The $x$, $y$, and $z$ axes are drawn and labeled.
===CHECKS===
the p orbital along the y axis is drawn as two lobes on opposite sides of the origin
the d orbital along the x and y axes is drawn as four lobes, two along the x axis and two along the y axis
the x, y, and z axes are drawn and labeled
{{< /selfcheck >}}

### List and describe traits of the four quantum numbers that form the basis for completely specifying the state of an electron in an atom

{{< selfcheck question="Describe the properties of an electron associated with each of the following four quantum numbers: $n$, $l$, $m_l$, and $m_s$." hint="Reread the paragraphs that introduce each quantum number in the subsection on understanding quantum theory of electrons in atoms." >}}
$n$ determines the general range for the value of energy and the probable distances that the electron can be from the nucleus. $l$ determines the shape of the orbital. $m_l$ determines the orientation of the orbitals of the same $l$ value with respect to one another. $m_s$ determines the spin of an electron.
===CHECKS===
n determines the general range for the value of energy and the probable distances that the electron can be from the nucleus
l determines the shape of the orbital
mₗ determines the orientation of the orbitals of the same l value with respect to one another
mₛ determines the spin of an electron
{{< /selfcheck >}}

#### Subshells

{{< textin
  question="Identify the subshell in which electrons with the following quantum numbers are found: n = 2, l = 1. Enter the subshell."
  answer="2p"
  hint="Recall which letter names the orbitals of each value of l, and write the shell number before it."
>}}

{{< textin
  question="Identify the subshell in which electrons with the following quantum numbers are found: n = 4, l = 2. Enter the subshell."
  answer="4d"
  hint="Recall which letter names the orbitals of each value of l, and write the shell number before it."
>}}

{{< textin
  question="Identify the subshell in which electrons with the following quantum numbers are found: n = 6, l = 0. Enter the subshell."
  answer="6s"
  hint="Recall which letter names the orbitals of each value of l, and write the shell number before it."
>}}

{{< textin
  question="Identify the subshell in which electrons with the following quantum numbers are found: n = 3, l = 2. Enter the subshell."
  answer="3d"
  hint="Recall which letter names the orbitals of each value of l, and write the shell number before it."
>}}

{{< textin
  question="Identify the subshell in which electrons with the following quantum numbers are found: n = 1, l = 0. Enter the subshell."
  answer="1s"
  hint="Recall which letter names the orbitals of each value of l, and write the shell number before it."
>}}

{{< textin
  question="Identify the subshell in which electrons with the following quantum numbers are found: n = 4, l = 3. Enter the subshell."
  answer="4f"
  hint="Recall which letter names the orbitals of each value of l, and write the shell number before it."
>}}

#### Orbitals shown in outline

{{< mediafigure src="chemistry/CNX_Chem_06_03_OrbOutline_img" kind="diagram" alt="Three outlines in a row, each drawn around a central dot and labeled below: (x), a small circle centered on the dot; (y), two rounded lobes, one on each side of the dot along a horizontal line; (z), four oval lobes arranged in an X around the dot, one in each diagonal direction." >}}
{{< /mediafigure >}}

{{< fillin
  question="Consider the orbitals shown here in outline. What is the maximum number of electrons contained in an orbital of type (x)? Of type (y)? Of type (z)? Enter the number for the orbital of type (x) shown in the figure above."
  answer="2"
  answerForm="whole-number"
  hint="Identify the kind of orbital each outline shows, then apply the Pauli exclusion principle."
>}}

{{< fillin
  question="Consider the orbitals shown here in outline. What is the maximum number of electrons contained in an orbital of type (x)? Of type (y)? Of type (z)? Enter the number for the orbital of type (y) shown in the figure above."
  answer="2"
  answerForm="whole-number"
  hint="Identify the kind of orbital each outline shows, then apply the Pauli exclusion principle."
>}}

{{< fillin
  question="Consider the orbitals shown here in outline. What is the maximum number of electrons contained in an orbital of type (x)? Of type (y)? Of type (z)? Enter the number for the orbital of type (z) shown in the figure above."
  answer="2"
  answerForm="whole-number"
  hint="Identify the kind of orbital each outline shows, then apply the Pauli exclusion principle."
>}}

{{< fillin
  question="Consider the orbitals shown here in outline. How many orbitals of type (x) are found in a shell with $n = 2$? How many of type (y)? How many of type (z)? Enter the number of orbitals of type (x) shown in the figure above."
  answer="1"
  answerForm="whole-number"
  hint="Identify the kind of orbital each outline shows, then use the values of $l$ a shell allows and the number of orbitals in a subshell."
>}}

{{< fillin
  question="Consider the orbitals shown here in outline. How many orbitals of type (x) are found in a shell with $n = 2$? How many of type (y)? How many of type (z)? Enter the number of orbitals of type (y) shown in the figure above."
  answer="3"
  answerForm="whole-number"
  hint="Identify the kind of orbital each outline shows, then use the values of $l$ a shell allows and the number of orbitals in a subshell."
>}}

{{< fillin
  question="Consider the orbitals shown here in outline. How many orbitals of type (x) are found in a shell with $n = 2$? How many of type (y)? How many of type (z)? Enter the number of orbitals of type (z) shown in the figure above."
  answer="0"
  answerForm="whole-number"
  hint="Identify the kind of orbital each outline shows, then use the values of $l$ a shell allows and the number of orbitals in a subshell."
>}}

{{< fillin
  question="Consider the orbitals shown here in outline. What is the smallest possible $n$ value for an orbital of type (x)? Of type (y)? Of type (z)? Enter the value for the orbital of type (x) shown in the figure above."
  answer="1"
  answerForm="whole-number"
  hint="Identify the kind of orbital each outline shows, then use the values of $l$ a given $n$ allows."
>}}

{{< fillin
  question="Consider the orbitals shown here in outline. What is the smallest possible $n$ value for an orbital of type (x)? Of type (y)? Of type (z)? Enter the value for the orbital of type (y) shown in the figure above."
  answer="2"
  answerForm="whole-number"
  hint="Identify the kind of orbital each outline shows, then use the values of $l$ a given $n$ allows."
>}}

{{< fillin
  question="Consider the orbitals shown here in outline. What is the smallest possible $n$ value for an orbital of type (x)? Of type (y)? Of type (z)? Enter the value for the orbital of type (z) shown in the figure above."
  answer="3"
  answerForm="whole-number"
  hint="Identify the kind of orbital each outline shows, then use the values of $l$ a given $n$ allows."
>}}

{{< textin
  question="Consider the orbitals shown here in outline. Write a set of quantum numbers for an electron in an orbital of type (x) in a shell with n = 4. Of an orbital of type (y) in a shell with n = 2. Of an orbital of type (z) in a shell with n = 3. Enter the set for the orbital of type (x) shown in the figure above. Type the four values in the order n, l, mₗ, mₛ, separated by spaces."
  answer="4 0 0 +1/2"
  answerForm="quantum-numbers"
  hint="Identify the kind of orbital the outline shows and the value of the angular momentum quantum number that kind of orbital has, then take n from the shell the question names: any magnetic quantum number that value allows, and either spin, is right."
>}}

{{< textin
  question="Consider the orbitals shown here in outline. Write a set of quantum numbers for an electron in an orbital of type (x) in a shell with n = 4. Of an orbital of type (y) in a shell with n = 2. Of an orbital of type (z) in a shell with n = 3. Enter the set for the orbital of type (y) shown in the figure above. Type the four values in the order n, l, mₗ, mₛ, separated by spaces."
  answer="2 1 0 +1/2"
  answerForm="quantum-numbers"
  hint="Identify the kind of orbital the outline shows and the value of the angular momentum quantum number that kind of orbital has, then take n from the shell the question names: any magnetic quantum number that value allows, and either spin, is right."
>}}

{{< textin
  question="Consider the orbitals shown here in outline. Write a set of quantum numbers for an electron in an orbital of type (x) in a shell with n = 4. Of an orbital of type (y) in a shell with n = 2. Of an orbital of type (z) in a shell with n = 3. Enter the set for the orbital of type (z) shown in the figure above. Type the four values in the order n, l, mₗ, mₛ, separated by spaces."
  answer="3 2 0 +1/2"
  answerForm="quantum-numbers"
  hint="Identify the kind of orbital the outline shows and the value of the angular momentum quantum number that kind of orbital has, then take n from the shell the question names: any magnetic quantum number that value allows, and either spin, is right."
>}}

{{< selfcheck question="Consider the orbitals shown here in outline. What are the possible $l$ and $m_l$ values for an orbital of type (x)? Of type (y)? Of type (z)? Answer for the orbitals shown in the figure above." hint="Identify the kind of orbital each outline shows, then use the rule for the values the magnetic quantum number may take." >}}
For an orbital of type (x): $l = 0$, $m_l = 0$. For an orbital of type (y): $l = 1$, $m_l = -1, 0, \text{ or } +1$. For an orbital of type (z): $l = 2$, $m_l = -2, -1, 0, +1, +2$.
===CHECKS===
for an orbital of type (x): l = 0, mₗ = 0
for an orbital of type (y): l = 1, mₗ = −1, 0, or +1
for an orbital of type (z): l = 2, mₗ = −2, −1, 0, +1, +2
{{< /selfcheck >}}

#### The Pauli exclusion principle

{{< fillin
  question="How many electrons could be held in the second shell of an atom if the spin quantum number $m_s$ could have three values instead of just two? (Hint: Consider the Pauli exclusion principle.)"
  answer="12"
  answerForm="whole-number"
  hint="Use the number of orbitals in a shell, as in the example on the maximum number of electrons, and the Pauli exclusion principle."
>}}

{{< selfcheck question="Write a set of quantum numbers for each of the electrons with an $n$ of 4 in a Se atom." hint="Use selenium’s position in the periodic table to find how many of its electrons have $n = 4$ and in which subshells, then give each electron its own set under the Pauli exclusion principle: any arrangement with no two sets alike is right." >}}
A correct answer gives six sets of quantum numbers, one for each of the electrons with an $n$ of 4 in a Se atom, and no two sets are alike: every set has $n = 4$; two sets have $l = 0$ and $m_l = 0$, one with each spin; and four sets have $l = 1$ and an $m_l$ of −1, 0, or +1. Sample answer:

| $n$ | $l$ | $m_l$ | $s$ |
|---|---|---|---|
| 4 | 0 | 0 | $+\frac{1}{2}$ |
| 4 | 0 | 0 | $-\frac{1}{2}$ |
| 4 | 1 | −1 | $+\frac{1}{2}$ |
| 4 | 1 | 0 | $+\frac{1}{2}$ |
| 4 | 1 | +1 | $+\frac{1}{2}$ |
| 4 | 1 | −1 | $-\frac{1}{2}$ |
===CHECKS===
six sets of quantum numbers, one for each of the electrons with an n of 4
no two sets are alike
every set has n = 4
two sets have l = 0 and mₗ = 0, one with each spin
four sets have l = 1 and an mₗ of −1, 0, or +1
{{< /selfcheck >}}

---

<small>This section is adapted from [Chemistry 2e, Section 6.3: Development of Quantum Theory](https://openstax.org/books/chemistry-2e/pages/6-3-development-of-quantum-theory) by Paul Flowers, Klaus Theopold, Richard Langley, William R. Robinson, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/chemistry-2e). Changes: each reference to another section of this book linked to that section’s page — the interference patterns for light in Section 6.1, and the example of the previous section, Section 6.2, that the source names by its number, named here by its title; the source’s equations typeset as KaTeX math, with the quantum numbers and the other symbols of the text set as math; the positive spin quantum number written with its plus sign throughout, as the source’s answer table prints it, where the text, the quantum-number table, and the orbital-outline answer print it unsigned; the velocity unit the source prints as $\text{m s}^{-1}$ in the electron-wavelength example and the softball Check Your Learning written m/s, as the example’s solution writes it; the hyphen of “wave-particle” in the quantum mechanics key term set as an en dash, as the rest of the section prints it; the symbol of the spin quantum number set in bold math beside its bolded name; the letters of orbital and subshell names (s, p, d, f, g, h), which the source italicizes, set upright, alone and after a shell number; the ten images re-encoded as WebP and marked as a photograph or a diagram, each alt written from the artwork, three of them with an extended description; the source alt of the electron-wave figure draws the radius arrow dashed and the wavelength arrow through 2 wave crests, where the figure draws a solid double-headed radius arrow and a wavelength arrow between tick marks at two neighboring bulges; the three Link to Learning boxes rendered as callouts; cross-references to the numbered figures and the table written as “the photograph below”, “the figure below”, “the figure above”, or “the table below”; the momentum line of the uncertainty calculation broken into aligned rows to fit the column; the table of quantum numbers transcribed as a Markdown table with its title as a bold line above it, and the two tables of the quantum-numbers example transcribed as Markdown tables; the four worked examples set as prose, each followed by its Check Your Learning as interactive items (three fill-ins, three text-recall items, and one self-check), the printed answers serving as their keys rather than appearing as text — the subshell Check Your Learning asked as one text-recall item per part, and the softball Check Your Learning asked as a fill-in for the wavelength and then as a self-check that adds the question “Why do we not notice a wavelength for a thrown softball?”, the source’s comment serving as its model answer; the 8 end-of-section exercises the source keys adapted into the interactive Practice block as 24 items (10 fill-ins, 6 text-recall items, 3 quantum-number text-recall items, and 5 self-checks), one item per lettered part, with a sentence added after a stem that leaves it open saying what to enter — the three counting parts of the orbital-outline exercise asked as one fill-in per orbital type, each closing with a sentence that names the type and the figure, its quantum-number part asked as one quantum-number text-recall item per orbital type, each closing with a sentence that names the type and the figure and then the sentence that says how to type a set of quantum numbers, any correct set of the shell and orbital type accepted, the exercise’s outline drawing shown once above its items, and its last part closing “Answer for the orbitals shown in the figure above.”, its quantum-number part placed after its smallest-n part because the quantum-number part’s question and answer print the shells those values come from; the self-checks’ model answers the source’s solutions with capitals and periods added, the bare values the source answers the orbital-outline exercise’s last part with introduced in the question’s words, the selenium exercise, whose source answer is one possible case, given an added opening sentence in the question’s own words saying what a correct answer contains and the added label “Sample answer:” before the source’s answer, whole, its rubric drawn from that sentence, and the sketch exercise’s model answer showing the source’s drawing followed by two sentences that read it; three text-recall items added from the module: under the first objective, which no keyed exercise reaches, a glossary recall of the rule that limits measuring a particle’s momentum and position together and a cloze on the body sentence that names the target Davisson and Germer used; under the second objective, which no keyed exercise gives an auto-graded item, a glossary recall of the orbital with l = 0, placed above the Bohr-model self-check because that self-check’s model answer prints its key; five statements corrected, each with a Source note: the year of de Broglie’s dissertation, the electrons in Davisson and Germer’s experiment scattered from the crystal rather than travelling through it, the interval between Schrödinger’s equation and Born’s interpretation, the date the source gives the pairs of closely spaced lines in hydrogen spectra, and the direction of the electron’s magnetic moment with the order of the two spin states’ energies in a field, where the splitting of a line in the applied field is also named the Zeeman effect rather than fine structure; two one-word corrections: “special” corrected to “spatial” in the sentence that defines the terms of the Schrödinger equation, and the subscript of the magnetic quantum number, printed as the digit 1, corrected to the letter l in the answer to the quantum-number properties exercise; and the 7 exercises the source prints no answer for are omitted.</small>
