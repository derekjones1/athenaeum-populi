---
title: Enthalpy
description: >-
  The first law of thermodynamics, enthalpy as a state function, writing and
  balancing thermochemical equations, calculating enthalpy changes for
  chemical reactions, and Hess’s law — adapted from OpenStax Chemistry 2e,
  Section 5.3.
source_section: "5.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- State the first law of thermodynamics
- Define enthalpy and explain its classification as a state function
- Write and balance thermochemical equations
- Calculate enthalpy changes for various chemical reactions
- Explain Hess’s law and use it to compute reaction enthalpies
{{< /callout >}}

Thermochemistry is a branch of **chemical thermodynamics**, the science that deals with the relationships between heat, work, and other forms of energy in the context of chemical and physical processes. As we concentrate on thermochemistry in this chapter, we need to consider some widely used concepts of thermodynamics.

Substances act as reservoirs of energy, meaning that energy can be added to them or removed from them. Energy is stored in a substance when the kinetic energy of its atoms or molecules is raised. The greater kinetic energy may be in the form of increased translations (travel or straight-line motions), vibrations, or rotations of the atoms or molecules. When thermal energy is lost, the intensities of these motions decrease and the kinetic energy falls. The total of all possible kinds of energy present in a substance is called the **internal energy ($U$)**, sometimes symbolized as $E$.

As a system undergoes a change, its internal energy can change, and energy can be transferred from the system to the surroundings, or from the surroundings to the system. Energy is transferred into a system when it absorbs heat ($q$) from the surroundings or when the surroundings do work ($w$) on the system. For example, energy is transferred into room-temperature metal wire if it is immersed in hot water (the wire absorbs heat from the water), or if you rapidly bend the wire back and forth (the wire becomes warmer because of the work done on it). Both processes increase the internal energy of the wire, which is reflected in an increase in the wire’s temperature. Conversely, energy is transferred out of a system when heat is lost from the system, or when the system does work on the surroundings.

The relationship between internal energy, heat, and work can be represented by the equation:

$$\Delta U = q + w$$

as shown in the figure below. This is one version of the **first law of thermodynamics**, and it shows that the internal energy of a system changes through heat flow into or out of the system (positive $q$ is heat flow in; negative $q$ is heat flow out) or work done on or by the system. The work, $w$, is positive if it is done on the system and negative if it is done by the system.

{{< mediafigure src="chemistry/CNX_Chem_05_03_Systemqw" kind="diagram" eager="true" alt="A green oval labeled System sits in the middle of a tan field labeled Surroundings, inside a gray border. Inside the oval, ΔU < 0 is written above the word System and ΔU > 0 below it. Two curved arrows enter the oval from below, labeled q in on the left and w on on the right; two curved arrows leave it from the top, labeled q out on the left and w by on the right. The equation ΔU = q + w is written at the bottom of the field." >}}
The internal energy, $U$, of a system can be changed by heat flow and work. If heat flows into the system, $q_\text{in}$, or work is done on the system, $w_\text{on}$, its internal energy increases, $\Delta U > 0$. If heat flows out of the system, $q_\text{out}$, or work is done by the system, $w_\text{by}$, its internal energy decreases, $\Delta U < 0$.
{{< /mediafigure >}}

A type of work called **expansion work** (or pressure-volume work) occurs when a system pushes back the surroundings against a restraining pressure, or when the surroundings compress the system. An example of this occurs during the operation of an internal combustion engine. The reaction of gasoline and oxygen is exothermic. Some of this energy is given off as heat, and some does work pushing the piston in the cylinder. The substances involved in the reaction are the system, and the engine and the rest of the universe are the surroundings. The system loses energy by both heating and doing work on the surroundings, and its internal energy decreases. (The engine is able to keep the car moving because this process is repeated many times per second while the engine is running.) We will consider how to determine the amount of work involved in a chemical or physical change in the chapter on thermodynamics.

{{< callout type="info" >}}
**Link to Learning**

This view of [an internal combustion engine](http://openstax.org/l/16combustion) illustrates the conversion of energy produced by the exothermic combustion reaction of a fuel such as gasoline into energy of motion.
{{< /callout >}}

As discussed, the relationship between internal energy, heat, and work can be represented as $\Delta U = q + w$. Internal energy is an example of a **state function** (or state variable), whereas heat and work are not state functions. The value of a state function depends only on the state that a system is in, and not on how that state is reached. If a quantity is not a state function, then its value *does* depend on how the state is reached. An example of a state function is altitude or elevation. If you stand on the summit of Mt. Kilimanjaro, you are at an altitude of 5895 m, and it does not matter whether you hiked there or parachuted there. The distance you traveled to the top of Kilimanjaro, however, is not a state function. You could climb to the summit by a direct route or by a more roundabout, circuitous path (shown in the figure below). The distances traveled would differ (distance is not a state function) but the elevation reached would be the same (altitude is a state function).

{{< mediafigure src="chemistry/CNX_Chem_05_03_Summit" kind="photo" alt="An aerial photograph of a mountain labeled Mt. Kilimanjaro, its snow-capped peak rising above clouds. Two arrows run from a point marked Base at the bottom to the peak marked Summit: a straight green arrow labeled X, and beside it a pale orange arrow labeled Y that winds back and forth in wide loops before reaching the same summit." >}}
Paths X and Y represent two different routes to the summit of Mt. Kilimanjaro. Both have the same change in elevation (altitude or elevation on a mountain is a state function; it does not depend on path), but they have very different distances traveled (distance walked is not a state function; it depends on the path). (credit: modification of work by Paul Shaffner)
{{< /mediafigure >}}

Chemists ordinarily use a property known as **enthalpy ($H$)** to describe the thermodynamics of chemical and physical processes. Enthalpy is defined as the sum of a system’s internal energy ($U$) and the mathematical product of its pressure ($P$) and volume ($V$):

$$H = U + PV$$

Enthalpy is also a state function. Enthalpy values for specific substances cannot be measured directly; only enthalpy *changes* for chemical or physical processes can be determined. For processes that take place at constant pressure (a common condition for many chemical and physical changes), the **enthalpy change ($\Delta H$)** is:

$$\Delta H = \Delta U + P\Delta V$$

The mathematical product $P\Delta V$ represents work ($w$), namely, expansion or pressure-volume work as noted. By their definitions, the arithmetic signs of $\Delta V$ and $w$ will always be opposite:

$$P\Delta V = -w$$

Substituting this equation and the definition of internal energy into the enthalpy-change equation yields:

$$\begin{aligned}
\Delta H &= \Delta U + P\Delta V \\
&= q_\text{p} + w - w \\
&= q_\text{p}
\end{aligned}$$

where $q_\text{p}$ is the heat of reaction under conditions of constant pressure.

And so, if a chemical or physical process is carried out at constant pressure with the only work done caused by expansion or contraction, then the heat flow ($q_\text{p}$) and enthalpy change ($\Delta H$) for the process are equal.

The heat given off when you operate a Bunsen burner is equal to the enthalpy change of the methane combustion reaction that takes place, since it occurs at the essentially constant pressure of the atmosphere. On the other hand, the heat produced by a reaction measured in a bomb calorimeter (shown in [Section 5.2 Calorimetry](/physical-sciences/chemistry/05-thermochemistry/02-calorimetry/)) is not equal to $\Delta H$ because the closed, constant-volume metal container prevents the pressure from remaining constant (it may increase or decrease if the reaction yields increased or decreased amounts of gaseous species). Chemists usually perform experiments under normal atmospheric conditions, at constant external pressure with $q = \Delta H$, which makes enthalpy the most convenient choice for determining heat changes for chemical reactions.

The following conventions apply when using $\Delta H$:

- A negative value of an enthalpy change, $\Delta H < 0$, indicates an exothermic reaction; a positive value, $\Delta H > 0$, indicates an endothermic reaction. If the direction of a chemical equation is reversed, the arithmetic sign of its $\Delta H$ is changed (a process that is endothermic in one direction is exothermic in the opposite direction).
- Chemists use a thermochemical equation to represent the changes in both matter and energy. In a thermochemical equation, the enthalpy change of a reaction is shown as a $\Delta H$ value following the equation for the reaction. This $\Delta H$ value indicates the amount of heat associated with the reaction involving the number of moles of reactants and products *as shown in the chemical equation*. For example, consider this equation:

  $$\ce{H2(g) + 1/2O2(g) -> H2O(l)} \qquad \Delta H = -286\ \text{kJ}$$

  This equation indicates that when 1 mole of hydrogen gas and $\frac{1}{2}$ mole of oxygen gas at some temperature and pressure change to 1 mole of liquid water at the same temperature and pressure, 286 kJ of heat are released to the surroundings. If the coefficients of the chemical equation are multiplied by some factor, the enthalpy change must be multiplied by that same factor ($\Delta H$ is an extensive property):

  $$\begin{aligned}
  &\text{(two-fold increase in amounts)} \\
  &\ce{2H2(g) + O2(g) -> 2H2O(l)} \\
  &\qquad \Delta H = 2 \times (-286\ \text{kJ}) = -572\ \text{kJ} \\[6pt]
  &\text{(two-fold decrease in amounts)} \\
  &\ce{1/2H2(g) + 1/4O2(g) -> 1/2H2O(l)} \\
  &\qquad \Delta H = \frac{1}{2} \times (-286\ \text{kJ}) = -143\ \text{kJ}
  \end{aligned}$$

- The enthalpy change of a reaction depends on the physical states of the reactants and products, so these must be shown. For example, when 1 mole of hydrogen gas and $\frac{1}{2}$ mole of oxygen gas change to 1 mole of liquid water at the same temperature and pressure, 286 kJ of heat are released. If gaseous water forms, only 242 kJ of heat are released.

  $$\ce{H2(g) + 1/2O2(g) -> H2O(g)} \qquad \Delta H = -242\ \text{kJ}$$

**Example.** *Writing Thermochemical Equations.* When 0.0500 mol of HCl(*aq*) reacts with 0.0500 mol of NaOH(*aq*) to form 0.0500 mol of NaCl(*aq*), 2.9 kJ of heat are produced. Write a balanced thermochemical equation for the reaction of one mole of HCl.

$$\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)}$$

**Solution.** For the reaction of 0.0500 mol acid (HCl), $q$ = −2.9 kJ. The reactants are provided in stoichiometric amounts (same molar ratio as in the balanced equation), and so the amount of acid may be used to calculate a molar enthalpy change. Since $\Delta H$ is an extensive property, it is proportional to the amount of acid neutralized:

$$\Delta H = 1\ \cancel{\text{mol HCl}} \times \frac{-2.9\ \text{kJ}}{0.0500\ \cancel{\text{mol HCl}}} = -58\ \text{kJ}$$

The thermochemical equation is then

$$\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)} \qquad \Delta H = -58\ \text{kJ}$$

{{< fillin
  question="When 1.34 g Zn(*s*) reacts with 60.0 mL of 0.750 *M* HCl(*aq*), 3.14 kJ of heat are produced. Determine the enthalpy change per mole of zinc reacting for the reaction: $\ce{Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g)}$. Enter the enthalpy change in kilojoules."
  answer="-153"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$\Delta H = -153\ \text{kJ}$"
  hint="Check which reactant limits, then reason as the example above does that $\Delta H$ is proportional to the amount that reacts, with the moles of zinc from the atomic mass in the periodic table."
>}}

Be sure to take both stoichiometry and limiting reactants into account when determining the $\Delta H$ for a chemical reaction.

**Example.** *Writing Thermochemical Equations.* A gummy bear contains 2.67 g sucrose, C₁₂H₂₂O₁₁. When it reacts with 7.19 g potassium chlorate, KClO₃, 43.7 kJ of heat are produced. Write a thermochemical equation for the reaction of one mole of sucrose:

$$\ce{C12H22O11(aq) + 8KClO3(aq) -> 12CO2(g) + 11H2O(l) + 8KCl(aq)}$$

**Solution.** Unlike the previous example exercise, this one does not involve the reaction of stoichiometric amounts of reactants, and so the *limiting reactant* must be identified (it limits the yield of the reaction and the amount of thermal energy produced or consumed).

The provided amounts of the two reactants are

$$\begin{aligned}
(2.67\ \text{g})(1\ \text{mol}/342.297\ \text{g}) &= 0.00780\ \text{mol}\ \ce{C12H22O11} \\
(7.19\ \text{g})(1\ \text{mol}/122.55\ \text{g}) &= 0.0587\ \text{mol}\ \ce{KClO3}
\end{aligned}$$

*Source note:* the source works this section’s examples with atomic masses rounded to four figures, and divides by a molar mass of isooctane rounded to three. Here they are worked with the masses this book’s periodic table prints (Appendix A), so some results differ from the source’s in their last digits.

The provided molar ratio of chlorate-to-sucrose is then

$$0.058670\ \text{mol}\ \ce{KClO3}/0.0078002\ \text{mol}\ \ce{C12H22O11} = 7.52$$

*Source note:* the source rounds the intermediate values of this section’s calculations before it divides or adds them. Here each intermediate value is printed with the digits that are carried, and only the result is rounded; the results are the same, except where a note below says otherwise.

The balanced equation indicates 8 mol KClO₃ are required for reaction with 1 mol C₁₂H₂₂O₁₁. Since the provided amount of KClO₃ is less than the stoichiometric amount, it is the limiting reactant and may be used to compute the enthalpy change:

$$\Delta H = -43.7\ \text{kJ}/0.058670\ \text{mol}\ \ce{KClO3} = -745\ \text{kJ/mol}\ \ce{KClO3}$$

Because the equation, as written, represents the reaction of 8 mol KClO₃, the enthalpy change is

$$(-744.84\ \text{kJ/mol}\ \ce{KClO3})(8\ \text{mol}\ \ce{KClO3}) = -5{,}960\ \text{kJ}$$

The enthalpy change for this reaction is −5960 kJ, and the thermochemical equation is:

$$\begin{aligned}
&\ce{C12H22O11 + 8KClO3 -> 12CO2 + 11H2O + 8KCl} \\
&\qquad \Delta H = -5{,}960\ \text{kJ}
\end{aligned}$$

{{< fillin
  question="When 1.42 g of iron reacts with 1.80 g of chlorine, 3.22 g of FeCl₂(*s*) and 8.60 kJ of heat is produced. What is the enthalpy change for the reaction when 1 mole of FeCl₂(*s*) is produced? Enter the enthalpy change in kilojoules."
  answer="-339"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$\Delta H = -339\ \text{kJ}$"
  hint="Find the limiting reactant as the example above does, converting each mass to moles with a molar mass computed from the periodic table."
>}}

*Source note:* the answer graded here is not the one the source prints for this exercise; the source’s value does not follow from the stem’s data.

Enthalpy changes are typically tabulated for reactions in which both the reactants and products are at the same conditions. A **standard state** is a commonly accepted set of conditions used as a reference point for the determination of properties under other different conditions. For chemists, the IUPAC standard state refers to materials under a pressure of 1 bar and solutions at 1 *M*, and does not specify a temperature. Many thermochemical tables list values with a standard state of 1 atm. Because the $\Delta H$ of a reaction changes very little with such small changes in pressure (1 bar = 0.987 atm), $\Delta H$ values (except for the most precisely measured values) are essentially the same under both sets of standard conditions. We will include a superscripted “o” in the enthalpy change symbol to designate standard state. Since the usual (but not technically standard) temperature is 298.15 K, this temperature will be assumed unless some other temperature is specified. Thus, the symbol ($\Delta H^\circ$) is used to indicate an enthalpy change for a process occurring under these conditions. (The symbol $\Delta H$ is used to indicate an enthalpy change for a reaction occurring under nonstandard conditions.)

The enthalpy changes for many types of chemical and physical processes are available in the reference literature, including those for combustion reactions, phase transitions, and formation reactions. As we discuss these quantities, it is important to pay attention to the *extensive* nature of enthalpy and enthalpy changes. Since the enthalpy change for a given reaction is proportional to the amounts of substances involved, it may be reported on that basis (i.e., as the $\Delta H$ for specific amounts of reactants). However, we often find it more useful to divide one extensive property ($\Delta H$) by another (amount of substance), and report a per-amount *intensive* value of $\Delta H$, often “normalized” to a per-mole basis. (Note that this is similar to determining the intensive property specific heat from the extensive property heat capacity, as seen previously.)

## Standard Enthalpy of Combustion

**Standard enthalpy of combustion ($\Delta H^\circ_\text{c}$)** is the enthalpy change when 1 mole of a substance burns (combines vigorously with oxygen) under standard state conditions; it is sometimes called “heat of combustion.” For example, the enthalpy of combustion of ethanol, −1366.8 kJ/mol, is the amount of heat produced when one mole of ethanol undergoes complete combustion at 25 °C and 1 atmosphere pressure, yielding products also at 25 °C and 1 atm.

$$\begin{aligned}
&\ce{C2H5OH(l) + 3O2(g) -> 2CO2(g) + 3H2O(l)} \\
&\qquad \Delta H^\circ = -1366.8\ \text{kJ}
\end{aligned}$$

Enthalpies of combustion for many substances have been measured; a few of these are listed in the table below. Many readily available substances with large enthalpies of combustion are used as fuels, including hydrogen, carbon (as coal or charcoal), and **hydrocarbons** (compounds containing only hydrogen and carbon), such as methane, propane, and the major components of gasoline.

**Standard Molar Enthalpies of Combustion**

| Substance | Combustion Reaction | Enthalpy of Combustion, $\Delta H^\circ_\text{c}$ $\left(\frac{\text{kJ}}{\text{mol}}\ \text{at}\ 25\ {}^\circ\text{C}\right)$ |
|---|---|---|
| carbon | $\ce{C(s) + O2(g) -> CO2(g)}$ | −393.5 |
| hydrogen | $\ce{H2(g) + 1/2O2(g) -> H2O(l)}$ | −285.8 |
| magnesium | $\ce{Mg(s) + 1/2O2(g) -> MgO(s)}$ | −601.6 |
| sulfur | $\ce{S(s) + O2(g) -> SO2(g)}$ | −296.8 |
| carbon monoxide | $\ce{CO(g) + 1/2O2(g) -> CO2(g)}$ | −283.0 |
| methane | $\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}$ | −890.8 |
| acetylene | $\ce{C2H2(g) + 5/2O2(g) -> 2CO2(g) + H2O(l)}$ | −1301.1 |
| ethanol | $\ce{C2H5OH(l) + 3O2(g) -> 2CO2(g) + 3H2O(l)}$ | −1366.8 |
| methanol | $\ce{CH3OH(l) + 3/2O2(g) -> CO2(g) + 2H2O(l)}$ | −726.1 |
| isooctane | $\ce{C8H18(l) + 25/2O2(g) -> 8CO2(g) + 9H2O(l)}$ | −5461.3 |

*Source note:* the source prints −5465.5 kJ/mol for isooctane; the value here is the measured enthalpy of combustion of the liquid, −5461.3 ± 1.3 kJ/mol, in the [NIST Chemistry WebBook](https://webbook.nist.gov/cgi/cbook.cgi?ID=C540841&Mask=2). The example below uses this value rounded to −5460 kJ/mol.

**Example.** *Using Enthalpy of Combustion.* As the photograph below suggests, the combustion of gasoline is a highly exothermic process. Let us determine the approximate amount of heat produced by burning 1.00 L of gasoline, assuming the enthalpy of combustion of gasoline is the same as that of isooctane, a common component of gasoline. The density of isooctane is 0.692 g/mL.

{{< mediafigure src="chemistry/CNX_Chem_05_03_GasBurning" kind="photo" alt="A night photograph of a highway under green overhead direction signs, one reading Bethesda. A huge orange fireball and black smoke rise from the road ahead. A firefighter in a helmet stands in the lower left foreground, and a red and white fire truck is parked at the right." >}}
The combustion of gasoline is very exothermic. (credit: modification of work by “AlexEagle”/Flickr)
{{< /mediafigure >}}

**Solution.** Starting with a known amount (1.00 L of isooctane), we can perform conversions between units until we arrive at the desired amount of heat or energy. The enthalpy of combustion of isooctane provides one of the necessary conversions. The table above gives this value as −5461.3 kJ per 1 mole of isooctane (C₈H₁₈), which we round here to −5460 kJ.

Using these data,

$$\begin{aligned}
&1.00\ \cancel{\text{L}\ \ce{C8H18}} \times \frac{1{,}000\ \cancel{\text{mL}\ \ce{C8H18}}}{1\ \cancel{\text{L}\ \ce{C8H18}}} \times \frac{0.692\ \cancel{\text{g}\ \ce{C8H18}}}{1\ \cancel{\text{mL}\ \ce{C8H18}}} \\[6pt]
&\quad \times \frac{1\ \cancel{\text{mol}\ \ce{C8H18}}}{114.232\ \cancel{\text{g}\ \ce{C8H18}}} \times \frac{-5{,}460\ \text{kJ}}{1\ \cancel{\text{mol}\ \ce{C8H18}}} \\[6pt]
&= -3.31 \times 10^{4}\ \text{kJ}
\end{aligned}$$

The combustion of 1.00 L of isooctane produces 33,100 kJ of heat. (This amount of energy is enough to melt 99.2 kg, or about 219 lbs, of ice.)

*Source note:* the source gives the mass of ice as about 218 lbs; 99.2 kg is 218.7 lb, about 219 lbs.

Note: If you do this calculation one step at a time, you would find:

$$\begin{aligned}
1.00\ \text{L}\ \ce{C8H18} &\longrightarrow 1.00 \times 10^{3}\ \text{mL}\ \ce{C8H18} \\
1.00 \times 10^{3}\ \text{mL}\ \ce{C8H18} &\longrightarrow 692\ \text{g}\ \ce{C8H18} \\
692\ \text{g}\ \ce{C8H18} &\longrightarrow 6.06\ \text{mol}\ \ce{C8H18} \\
6.0578\ \text{mol}\ \ce{C8H18} &\longrightarrow -3.31 \times 10^{4}\ \text{kJ}
\end{aligned}$$

{{< fillin
  question="How much heat is produced by the combustion of 125 g of acetylene? Enter the heat in kilojoules."
  answer="6.25\times10^{3}"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$6.25 \times 10^{3}\ \text{kJ}$"
  hint="Grams to moles to kilojoules, with a molar mass computed from the periodic table and the enthalpy of combustion from the table above; the heat produced is the size of that enthalpy change."
>}}

{{< callout type="info" >}}
**Chemistry in Everyday Life.** *Emerging Algae-Based Energy Technologies (Biofuels).*

As reserves of fossil fuels diminish and become more costly to extract, the search is ongoing for replacement fuel sources for the future. Among the most promising biofuels are those derived from algae (shown in the figure below). The species of algae used are nontoxic, biodegradable, and among the world’s fastest growing organisms. About 50% of algal weight is oil, which can be readily converted into fuel such as biodiesel. Algae can yield 26,000 gallons of **biofuel** per hectare—much more energy per acre than other crops. Some strains of algae can flourish in brackish water that is not usable for growing other crops. Algae can produce biodiesel, biogasoline, ethanol, butanol, methane, and even jet fuel.

{{< mediafigure src="chemistry/CNX_Chem_05_03_AlgalFuel1" kind="photo" alt="Three photographs, labeled (a), (b), and (c). (a) A micrograph of green, segmented algal filaments, some crossing in long strands and some forming a fine net, on a pale violet background. (b) An aerial view of several large rectangular ponds of reddish-brown water, separated by dark banks. (c) A clear cylinder of bright green liquid in front of a display board headed From Field to Fleet." >}}
(a) Tiny algal organisms can be (b) grown in large quantities and eventually (c) turned into a useful fuel such as biodiesel. (credit a: modification of work by Micah Sittig; credit b: modification of work by Robert Kerton; credit c: modification of work by John F. Williams)
{{< /mediafigure >}}

According to the US Department of Energy, only 39,000 square kilometers (about 0.4% of the land mass of the US or less than $\frac{1}{7}$ of the area used to grow corn) can produce enough algal fuel to replace all the petroleum-based fuel used in the US. The cost of algal fuels was projected to become more competitive—for instance, in 2010 the US Defense Advanced Research Projects Agency (DARPA) projected refining algal oil into jet fuel at a cost of less than \$3 per gallon, though production had not begun. (For more on algal fuel, see [a 2010 *Guardian* article on algae as a fuel for the Pentagon](http://www.theguardian.com/environment/2010/feb/13/algae-solve-pentagon-fuel-problem).) The process used to produce algal fuel is as follows: grow the algae (which use sunlight as their energy source and CO₂ as a raw material); harvest the algae; extract the fuel compounds (or precursor compounds); process as necessary (e.g., perform a transesterification reaction to make biodiesel); purify; and distribute (shown in the figure below).

{{< mediafigure src="chemistry/CNX_Chem_05_03_AlgalFuel2" kind="diagram" alt="A flow chart of five drawings in a row, each above a label, joined by four gray arrows pointing right: Grow, under three green oval raceway ponds on tan ground with a yellow sun above them; Harvest, under a stack of green-filled tubes; Extract, under a gray funnel-shaped vessel holding green liquid; Process and purify, under green refinery towers, two of them smokestacks giving off smoke; and Jet fuel, Gasoline, Diesel, under a green fuel pump." >}}
Algae convert sunlight and carbon dioxide into oil that is harvested, extracted, purified, and transformed into a variety of renewable fuels.
{{< /mediafigure >}}

*Source note:* the source says the US Air Force is producing jet fuel from algae at under \$5 per gallon. The *Guardian* article it cites reports a DARPA projection of “less than \$3 a gallon”, and carries a correction that testing was to begin the next year, with production not planned until 2013.
{{< /callout >}}

{{< callout type="info" >}}
**Link to Learning**

Click [here to learn more about the process of creating algae biofuel](http://openstax.org/l/16biofuel).
{{< /callout >}}

## Standard Enthalpy of Formation

A **standard enthalpy of formation ($\Delta H^\circ_\text{f}$)** is an enthalpy change for a reaction in which exactly 1 mole of a pure substance is formed from free elements in their most stable states under standard state conditions. These values are especially useful for computing or predicting enthalpy changes for chemical reactions that are impractical or dangerous to carry out, or for processes for which it is difficult to make measurements. If we have values for the appropriate standard enthalpies of formation, we can determine the enthalpy change for any reaction, which we will practice in the next section on Hess’s law.

The standard enthalpy of formation of CO₂(*g*) is −393.5 kJ/mol. This is the enthalpy change for the exothermic reaction:

$$\ce{C(s) + O2(g) -> CO2(g)} \qquad \Delta H^\circ_\text{f} = \Delta H^\circ = -393.5\ \text{kJ}$$

starting with the reactants at a pressure of 1 atm and 25 °C (with the carbon present as graphite, the most stable form of carbon under these conditions) and ending with one mole of CO₂, also at 1 atm and 25 °C. For nitrogen dioxide, NO₂(*g*), $\Delta H^\circ_\text{f}$ is 33.2 kJ/mol. This is the enthalpy change for the reaction:

$$\ce{1/2N2(g) + O2(g) -> NO2(g)} \qquad \Delta H^\circ_\text{f} = \Delta H^\circ = +33.2\ \text{kJ}$$

A reaction equation with $\frac{1}{2}$ mole of N₂ and 1 mole of O₂ is correct in this case because the standard enthalpy of formation always refers to 1 mole of product, NO₂(*g*).

You will find a table of standard enthalpies of formation of many common substances in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/). These values indicate that formation reactions range from highly exothermic (such as −2984 kJ/mol for the formation of P₄O₁₀) to strongly endothermic (such as +227.4 kJ/mol for the formation of acetylene, C₂H₂). By definition, the standard enthalpy of formation of an element in its most stable form is equal to zero under standard conditions, which is 1 bar for gases and 1 *M* for solutions.

*Source note:* the source gives +226.7 kJ/mol for the formation of acetylene, where Appendix G prints +227.4 kJ/mol, and says standard conditions are 1 atm for gases, where the standard state this section defines is 1 bar.

**Example.** *Evaluating an Enthalpy of Formation.* Ozone, O₃(*g*), forms from oxygen, O₂(*g*), by an endothermic process. Ultraviolet radiation is the source of the energy that drives this reaction in the upper atmosphere. Assuming that both the reactants and products of the reaction are in their standard states, determine the standard enthalpy of formation, $\Delta H^\circ_\text{f}$ of ozone from the following information:

$$\ce{3O2(g) -> 2O3(g)} \qquad \Delta H^\circ = +286\ \text{kJ}$$

**Solution.** $\Delta H^\circ_\text{f}$ is the enthalpy change for the formation of one mole of a substance in its standard state from the elements in their standard states. Thus, $\Delta H^\circ_\text{f}$ for O₃(*g*) is the enthalpy change for the reaction:

$$\ce{3/2O2(g) -> O3(g)}$$

For the formation of 2 mol of O₃(*g*), $\Delta H^\circ$ = +286 kJ. This ratio, $\left(\frac{286\ \text{kJ}}{2\ \text{mol}\ \ce{O3}}\right)$, can be used as a conversion factor to find the heat absorbed when 1 mole of O₃(*g*) is formed, which is the enthalpy of formation for O₃(*g*):

$$\Delta H^\circ\ \text{for 1 mole of}\ \ce{O3(g)} = 1\ \cancel{\text{mol}\ \ce{O3}} \times \frac{286\ \text{kJ}}{2\ \cancel{\text{mol}\ \ce{O3}}} = 143\ \text{kJ}$$

Therefore, $\Delta H^\circ_\text{f}[\ce{O3(g)}]$ = +143 kJ/mol.

*Source note:* the source says the ratio finds “the heat produced” when 1 mole of O₃(*g*) is formed. The formation of ozone is endothermic, as the example’s first sentence says and the positive $\Delta H^\circ$ shows, so the heat is absorbed.

{{< fillin
  question="Hydrogen gas, H₂, reacts explosively with gaseous chlorine, Cl₂, to form hydrogen chloride, HCl(*g*). What is the enthalpy change for the reaction of 1 mole of H₂(*g*) with 1 mole of Cl₂(*g*) if both the reactants and products are at standard state conditions? The standard enthalpy of formation of HCl(*g*) is −92.3 kJ/mol. Enter the enthalpy change in kilojoules."
  answer="-184.6"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$\Delta H^\circ = -184.6\ \text{kJ}$"
  hint="Write the balanced equation, then use the definition of standard enthalpy of formation and the proportionality of $\Delta H$ to the amounts in the equation. The enthalpy change is a sum of standard enthalpies of formation, and a sum keeps the decimal places of its terms."
>}}

**Example.** *Writing Reaction Equations for $\Delta H^\circ_\text{f}$.* Write the heat of formation reaction equations for:

(a) C₂H₅OH(*l*)

(b) Ca₃(PO₄)₂(*s*)

**Solution.** Remembering that $\Delta H^\circ_\text{f}$ reaction equations are for forming 1 mole of the compound from its constituent elements under standard conditions, we have:

(a) $\ce{2C(s, graphite) + 3H2(g) + 1/2O2(g) ->}$ $\ce{C2H5OH(l)}$

(b) $\ce{3Ca(s) + 1/2P4(s) + 4O2(g) ->}$ $\ce{Ca3(PO4)2(s)}$

Note: The standard state of carbon is graphite, and phosphorus exists as P₄.

{{< textin
  question="Write the heat of formation reaction equation for: C₂H₅OC₂H₅(l). Type a fraction as 1/2."
  answer="4C(s, graphite) + 5H₂(g) + ½O₂(g) ⟶ C₂H₅OC₂H₅(l)"
  answerForm="equation"
  hint="Form one mole of the compound from its elements in their standard states, as the example above does."
>}}

{{< textin
  question="Write the heat of formation reaction equation for: Na₂CO₃(s). Type a fraction as 1/2."
  answer="2Na(s) + C(s, graphite) + 3⁄2O₂(g) ⟶ Na₂CO₃(s)"
  answerForm="equation"
  hint="Form one mole of the compound from its elements in their standard states, as the example above does."
>}}

## Hess’s Law

There are two ways to determine the amount of heat involved in a chemical change: measure it experimentally, or calculate it from other experimentally determined enthalpy changes. Some reactions are difficult, if not impossible, to investigate and make accurate measurements for experimentally. And even when a reaction is not hard to perform or measure, it is convenient to be able to determine the heat involved in a reaction without having to perform an experiment.

This type of calculation usually involves the use of **Hess’s law**, which states: *If a process can be written as the sum of several stepwise processes, the enthalpy change of the total process equals the sum of the enthalpy changes of the various steps*. Hess’s law is valid because enthalpy is a state function: Enthalpy changes depend only on where a chemical process starts and ends, but not on the path it takes from start to finish. For example, we can think of the reaction of carbon with oxygen to form carbon dioxide as occurring either directly or by a two-step process. The direct process is written:

$$\ce{C(s) + O2(g) -> CO2(g)} \qquad \Delta H^\circ = -394\ \text{kJ}$$

In the two-step process, first carbon monoxide is formed:

$$\ce{C(s) + 1/2O2(g) -> CO(g)} \qquad \Delta H^\circ = -111\ \text{kJ}$$

Then, carbon monoxide reacts further to form carbon dioxide:

$$\ce{CO(g) + 1/2O2(g) -> CO2(g)} \qquad \Delta H^\circ = -283\ \text{kJ}$$

The equation describing the overall reaction is the sum of these two chemical changes:

$$\begin{array}{ll}
\text{Step 1:} & \ce{C(s) + 1/2O2(g) -> CO(g)} \\
\text{Step 2:} & \ce{CO(g) + 1/2O2(g) -> CO2(g)} \\ \hline
\text{Sum:} & \ce{C(s) + 1/2O2(g) + CO(g) + 1/2O2(g) -> CO(g) + CO2(g)}
\end{array}$$

Because the CO produced in Step 1 is consumed in Step 2, the net change is:

$$\ce{C(s) + O2(g) -> CO2(g)}$$

According to Hess’s law, the enthalpy change of the reaction will equal the sum of the enthalpy changes of the steps.

$$\begin{array}{ll}
\ce{C(s) + 1/2O2(g) -> CO(g)} & \Delta H^\circ = -111\ \text{kJ} \\
\ce{CO(g) + 1/2O2(g) -> CO2(g)} & \Delta H^\circ = -283\ \text{kJ} \\ \hline
\ce{C(s) + O2(g) -> CO2(g)} & \Delta H^\circ = -394\ \text{kJ}
\end{array}$$

The result is shown in the figure below. We see that $\Delta H$ of the overall reaction is the same whether it occurs in one step or two. This finding (overall $\Delta H$ for the reaction = sum of $\Delta H$ values for reaction “steps” in the overall reaction) is true in general for chemical and physical processes.

{{< mediafigure src="chemistry/CNX_Chem_05_03_HessCO2" kind="diagram" alt="An enthalpy diagram beside an upward arrow labeled H increasing. A top blue line is labeled C(s) + O₂(g) and a bottom blue line CO₂(g). A shorter blue line between them, set to the right, is labeled CO(g) + one half O₂(g). On the left a long red arrow points from the top line down to the bottom line, labeled ΔH = −393.5 kJ. On the right two red arrows point down in steps: from the top line to the middle line, labeled ΔH = −111 kJ, and from the middle line to the bottom line, labeled ΔH = −282.5 kJ." longdesc="Vertical axis: an arrow at the far left pointing up, labeled H increasing. Three horizontal blue lines mark enthalpies. The top line is labeled C(s) + O₂(g) above it; the bottom line is labeled CO₂(g) below it; a shorter middle line, offset to the right and about a quarter of the way down, is labeled CO(g) + one half O₂(g) at its right end. Arrows, all red and pointing down: on the left, from the top line to the bottom line, labeled ΔH = −393.5 kJ; on the right, from the top line to the middle line, labeled ΔH = −111 kJ; and continuing from the middle line to the bottom line, labeled ΔH = −282.5 kJ. At the right edge, a short black line level with the top line is labeled Enthalpy of reactants, and a short black line level with the bottom line is labeled Enthalpy of products. Between the diagram and those labels, two smaller braces span the top line to the middle line and the middle line to the bottom line, and one larger brace spanning the top line to the bottom line is labeled Enthalpy change of exothermic reaction in 1 or 2 steps." >}}
The formation of CO₂(*g*) from its elements can be thought of as occurring in two steps, which sum to the overall reaction, as described by Hess’s law. The horizontal blue lines represent enthalpies. For an exothermic process, the products are at lower enthalpy than are the reactants.
{{< /mediafigure >}}

*Source note:* the drawing labels the two steps −111 kJ and −282.5 kJ; from the enthalpies of formation in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/) they are −110.5 kJ and −283.0 kJ, which also sum to −393.5 kJ.

Before we further practice using Hess’s law, let us recall two important features of $\Delta H$.

1. $\Delta H$ is directly proportional to the quantities of reactants or products. For example, the enthalpy change for the reaction forming 1 mole of NO₂(*g*) is +33.2 kJ:

   $$\ce{1/2N2(g) + O2(g) -> NO2(g)} \qquad \Delta H = +33.2\ \text{kJ}$$

   When 2 moles of NO₂ (twice as much) are formed, the $\Delta H$ will be twice as large:

   $$\ce{N2(g) + 2O2(g) -> 2NO2(g)} \qquad \Delta H = +66.4\ \text{kJ}$$

   In general, if we multiply or divide an equation by a number, then the enthalpy change should also be multiplied or divided by the same number.

2. $\Delta H$ for a reaction in one direction is equal in magnitude and opposite in sign to $\Delta H$ for the reaction in the reverse direction. For example, given that:

   $$\ce{H2(g) + Cl2(g) -> 2HCl(g)} \qquad \Delta H = -184.6\ \text{kJ}$$

   Then, for the “reverse” reaction, the enthalpy change is also “reversed”:

   $$\ce{2HCl(g) -> H2(g) + Cl2(g)} \qquad \Delta H = +184.6\ \text{kJ}$$

**Example.** *Stepwise Calculation of $\Delta H^\circ_\text{f}$ Using Hess’s Law.* Determine the enthalpy of formation, $\Delta H^\circ_\text{f}$, of FeCl₃(*s*) from the enthalpy changes of the following two-step process that occurs under standard state conditions:

$$\ce{Fe(s) + Cl2(g) -> FeCl2(s)} \qquad \Delta H^\circ = -341.8\ \text{kJ}$$

$$\ce{FeCl2(s) + 1/2Cl2(g) -> FeCl3(s)} \qquad \Delta H^\circ = -57.7\ \text{kJ}$$

**Solution.** We are trying to find the standard enthalpy of formation of FeCl₃(*s*), which is equal to $\Delta H^\circ$ for the reaction:

$$\ce{Fe(s) + 3/2Cl2(g) -> FeCl3(s)} \qquad \Delta H^\circ_\text{f} = ?$$

Looking at the reactions, we see that the reaction for which we want to find $\Delta H^\circ$ is the sum of the two reactions with known $\Delta H$ values, so we must sum their $\Delta H$s:

$$\begin{array}{ll}
\ce{Fe(s) + Cl2(g) -> FeCl2(s)} & \Delta H^\circ = -341.8\ \text{kJ} \\
\ce{FeCl2(s) + 1/2Cl2(g) -> FeCl3(s)} & \Delta H^\circ = -57.7\ \text{kJ} \\ \hline
\ce{Fe(s) + 3/2Cl2(g) -> FeCl3(s)} & \Delta H^\circ = -399.5\ \text{kJ}
\end{array}$$

The enthalpy of formation, $\Delta H^\circ_\text{f}$, of FeCl₃(*s*) is −399.5 kJ/mol.

{{< fillin
  question="Calculate $\Delta H$ for the process: $\ce{N2(g) + 2O2(g) -> 2NO2(g)}$ from the following information: $\ce{N2(g) + O2(g) -> 2NO(g)}$ $\Delta H$ = 180.5 kJ; $\ce{NO(g) + 1/2O2(g) -> NO2(g)}$ $\Delta H$ = −57.06 kJ. Enter the enthalpy change in kilojoules."
  answer="66.4"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$66.4\ \text{kJ}$"
  hint="Use Hess’s law: arrange the given equations so that they add up to the reaction asked for, changing each $\Delta H$ as its equation is multiplied or reversed."
>}}

Here is a less straightforward example that illustrates the thought process involved in solving many Hess’s law problems. It shows how we can find many standard enthalpies of formation (and other values of $\Delta H$) if they are difficult to determine experimentally.

**Example.** *A More Challenging Problem Using Hess’s Law.* Chlorine monofluoride can react with fluorine to form chlorine trifluoride:

$$\text{(i)}\quad \ce{ClF(g) + F2(g) -> ClF3(g)} \qquad \Delta H^\circ = ?$$

Use the reactions here to determine the $\Delta H^\circ$ for reaction *(i)*:

$$\text{(ii)}\quad \ce{2OF2(g) -> O2(g) + 2F2(g)} \qquad \Delta H^\circ_\text{(ii)} = -49.4\ \text{kJ}$$

$$\begin{aligned}
&\text{(iii)}\quad \ce{2ClF(g) + O2(g) -> Cl2O(g) + OF2(g)} \\
&\qquad \Delta H^\circ_\text{(iii)} = +214.0\ \text{kJ}
\end{aligned}$$

$$\begin{aligned}
&\text{(iv)}\quad \ce{ClF3(g) + O2(g) -> 1/2Cl2O(g) + 3/2OF2(g)} \\
&\qquad \Delta H^\circ_\text{(iv)} = +236.2\ \text{kJ}
\end{aligned}$$

**Solution.** Our goal is to manipulate and combine reactions *(ii)*, *(iii)*, and *(iv)* such that they add up to reaction *(i)*. Going from left to right in *(i)*, we first see that ClF(*g*) is needed as a reactant. This can be obtained by multiplying reaction *(iii)* by $\frac{1}{2}$, which means that the $\Delta H^\circ$ change is also multiplied by $\frac{1}{2}$:

$$\begin{aligned}
&\ce{ClF(g) + 1/2O2(g) -> 1/2Cl2O(g) + 1/2OF2(g)} \\
&\qquad \Delta H^\circ = \frac{1}{2}(214.0) = +107.0\ \text{kJ}
\end{aligned}$$

Next, we see that F₂ is also needed as a reactant. To get this, reverse and halve reaction *(ii)*, which means that the $\Delta H^\circ$ changes sign and is halved:

$$\ce{1/2O2(g) + F2(g) -> OF2(g)} \qquad \Delta H^\circ = +24.7\ \text{kJ}$$

To get ClF₃ as a product, reverse *(iv)*, changing the sign of $\Delta H^\circ$:

$$\begin{aligned}
&\ce{1/2Cl2O(g) + 3/2OF2(g) -> ClF3(g) + O2(g)} \\
&\qquad \Delta H^\circ = -236.2\ \text{kJ}
\end{aligned}$$

Now check to make sure that these reactions add up to the reaction we want:

$$\begin{array}{ll}
\ce{ClF(g) + 1/2O2(g) -> 1/2Cl2O(g) + 1/2OF2(g)} & \Delta H^\circ = +107.0\ \text{kJ} \\
\ce{1/2O2(g) + F2(g) -> OF2(g)} & \Delta H^\circ = +24.7\ \text{kJ} \\
\ce{1/2Cl2O(g) + 3/2OF2(g) -> ClF3(g) + O2(g)} & \Delta H^\circ = -236.2\ \text{kJ} \\ \hline
\ce{ClF(g) + F2 -> ClF3(g)} & \Delta H^\circ = -104.5\ \text{kJ}
\end{array}$$

Reactants $\frac{1}{2}\ce{O2}$ and $\frac{1}{2}\ce{O2}$ cancel out product O₂; product $\frac{1}{2}\ce{Cl2O}$ cancels reactant $\frac{1}{2}\ce{Cl2O}$; and reactant $\frac{3}{2}\ce{OF2}$ is cancelled by products $\frac{1}{2}\ce{OF2}$ and OF₂. This leaves only reactants ClF(*g*) and F₂(*g*) and product ClF₃(*g*), which are what we want. Since summing these three modified reactions yields the reaction of interest, summing the three modified $\Delta H^\circ$ values will give the desired $\Delta H^\circ$:

$$\begin{aligned}
\Delta H^\circ &= (+107.0\ \text{kJ}) + (24.7\ \text{kJ}) + (-236.2\ \text{kJ}) \\
&= -104.5\ \text{kJ}
\end{aligned}$$

{{< fillin
  question="Aluminum chloride can be formed from its elements: (i) $\ce{2Al(s) + 3Cl2(g) -> 2AlCl3(s)}$ $\Delta H^\circ$ = ? Use the reactions here to determine the $\Delta H^\circ$ for reaction (i): (ii) $\ce{HCl(g) -> HCl(aq)}$ $\Delta H^\circ_\text{(ii)}$ = −74.8 kJ; (iii) $\ce{H2(g) + Cl2(g) -> 2HCl(g)}$ $\Delta H^\circ_\text{(iii)}$ = −185 kJ; (iv) $\ce{AlCl3(aq) -> AlCl3(s)}$ $\Delta H^\circ_\text{(iv)}$ = +323 kJ/mol; (v) $\ce{2Al(s) + 6HCl(aq) ->}$ $\ce{2AlCl3(aq) + 3H2(g)}$ $\Delta H^\circ_\text{(v)}$ = −1049 kJ. Enter the enthalpy change in kilojoules."
  answer="-1407"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$-1{,}407\ \text{kJ}$"
  hint="Use Hess’s law: arrange the given equations so that they add up to the reaction asked for, changing each $\Delta H$ as its equation is multiplied or reversed."
>}}

We also can use **Hess’s law** to determine the enthalpy change of any reaction if the corresponding enthalpies of formation of the reactants and products are available. The stepwise reactions we consider are: (i) decompositions of the reactants into their component elements (for which the enthalpy changes are proportional to the negative of the enthalpies of formation of the reactants), followed by (ii) re-combinations of the elements to give the products (with the enthalpy changes proportional to the enthalpies of formation of the products). The standard enthalpy change of the overall reaction is therefore equal to: (ii) the sum of the standard enthalpies of formation of all the products plus (i) the sum of the negatives of the standard enthalpies of formation of the reactants. This is usually rearranged slightly to be written as follows, with ∑ representing “the sum of” and $n$ standing for the stoichiometric coefficients:

$$\begin{aligned}
\Delta H^\circ_\text{reaction} &= \sum n \times \Delta H^\circ_\text{f}(\text{products}) \\
&\quad - \sum n \times \Delta H^\circ_\text{f}(\text{reactants})
\end{aligned}$$

The following example shows in detail why this equation is valid, and how to use it to calculate the enthalpy change for a reaction of interest.

**Example.** *Using Hess’s Law.* What is the standard enthalpy change for the reaction:

$$\ce{3NO2(g) + H2O(l) -> 2HNO3(aq) + NO(g)} \qquad \Delta H^\circ = ?$$

**Solution: Using the Equation.** Use the special form of Hess’s law given previously, and values from [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/):

$$\begin{aligned}
\Delta H^\circ_\text{reaction} &= \sum n \times \Delta H^\circ_\text{f}(\text{products}) \\
&\quad - \sum n \times \Delta H^\circ_\text{f}(\text{reactants})
\end{aligned}$$

$$\begin{aligned}
&= \Big[2\ \cancel{\text{mol}\ \ce{HNO3(aq)}} \times \frac{-207.4\ \text{kJ}}{\cancel{\text{mol}\ \ce{HNO3(aq)}}} \\[6pt]
&\qquad + 1\ \cancel{\text{mol}\ \ce{NO(g)}} \times \frac{+90.25\ \text{kJ}}{\cancel{\text{mol}\ \ce{NO(g)}}}\Big] \\[6pt]
&\quad - \Big[3\ \cancel{\text{mol}\ \ce{NO2(g)}} \times \frac{+33.2\ \text{kJ}}{\cancel{\text{mol}\ \ce{NO2(g)}}} \\[6pt]
&\qquad + 1\ \cancel{\text{mol}\ \ce{H2O(l)}} \times \frac{-285.83\ \text{kJ}}{\cancel{\text{mol}\ \ce{H2O(l)}}}\Big] \\[6pt]
&= [2 \times (-207.4) + 90.25] - [3 \times 33.2 + (-285.83)] \\
&= -324.55 + 186.23 \\
&= -138.3\ \text{kJ}
\end{aligned}$$

*Source note:* the source rounds the two bracketed sums to −324.6 and +186.2 before it adds them, and so prints this example’s result, in both of its solutions, one unit larger in magnitude, in its last digit, than the enthalpies of formation give. Here the sums are carried unrounded, and so are the two values from Appendix G that the second solution rounds, and the result is the one they give. The nitric acid exercise at the end of this section gives the source’s −139 kJ for the same reaction as its datum.

**Solution: Supporting Why the General Equation Is Valid.** Alternatively, we can write this reaction as the sum of the decompositions of 3NO₂(*g*) and 1H₂O(*l*) into their constituent elements, and the formation of 2HNO₃(*aq*) and 1NO(*g*) from their constituent elements. Writing out these reactions, and noting their relationships to the $\Delta H^\circ_\text{f}$ values for these compounds (from [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/)), we have:

$$\begin{aligned}
&\ce{3NO2(g) -> 3/2N2(g) + 3O2(g)} \\
&\qquad \Delta H^\circ_1 = -99.6\ \text{kJ}
\end{aligned}$$

$$\begin{aligned}
&\ce{H2O(l) -> H2(g) + 1/2O2(g)} \\
&\qquad \Delta H^\circ_2 = +285.83\ \text{kJ}\ \ [-1 \times \Delta H^\circ_\text{f}(\ce{H2O})]
\end{aligned}$$

$$\begin{aligned}
&\ce{H2(g) + N2(g) + 3O2(g) -> 2HNO3(aq)} \\
&\qquad \Delta H^\circ_3 = -414.8\ \text{kJ}\ \ [2 \times \Delta H^\circ_\text{f}(\ce{HNO3})]
\end{aligned}$$

$$\begin{aligned}
&\ce{1/2N2(g) + 1/2O2(g) -> NO(g)} \\
&\qquad \Delta H^\circ_4 = +90.25\ \text{kJ}\ \ [1 \times \Delta H^\circ_\text{f}(\ce{NO})]
\end{aligned}$$

Summing these reaction equations gives the reaction we are interested in:

$$\ce{3NO2(g) + H2O(l) -> 2HNO3(aq) + NO(g)}$$

Summing their enthalpy changes gives the value we want to determine:

$$\begin{aligned}
\Delta H^\circ_\text{rxn} &= \Delta H^\circ_1 + \Delta H^\circ_2 + \Delta H^\circ_3 + \Delta H^\circ_4 \\
&= (-99.6\ \text{kJ}) + (+285.83\ \text{kJ}) \\
&\quad + (-414.8\ \text{kJ}) + (+90.25\ \text{kJ}) \\
&= -138.3\ \text{kJ}
\end{aligned}$$

So the standard enthalpy change for this reaction is $\Delta H^\circ$ = −138.3 kJ.

Note that this result was obtained by (1) multiplying the $\Delta H^\circ_\text{f}$ of each product by its stoichiometric coefficient and summing those values, (2) multiplying the $\Delta H^\circ_\text{f}$ of each reactant by its stoichiometric coefficient and summing those values, and then (3) subtracting the result found in (2) from the result found in (1). This is also the procedure in using the general equation, as shown.

{{< fillin
  question="Calculate the heat of combustion of 1 mole of ethanol, C₂H₅OH(*l*), when H₂O(*l*) and CO₂(*g*) are formed. Use the following enthalpies of formation: C₂H₅OH(*l*), −278 kJ/mol; H₂O(*l*), −286 kJ/mol; and CO₂(*g*), −394 kJ/mol. Enter the heat of combustion in kJ/mol."
  answer="-1368"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$-1{,}368\ \text{kJ/mol}$"
  hint="Write the balanced combustion equation, then use the form of Hess’s law that sums enthalpies of formation."
>}}

## Summary

- If a chemical change is carried out at constant pressure and the only work done is caused by expansion or contraction, $q$ for the change is called the enthalpy change with the symbol $\Delta H$, or $\Delta H^\circ$ for reactions occurring under standard state conditions at 298 K. The value of $\Delta H$ for a reaction in one direction is equal in magnitude, but opposite in sign, to $\Delta H$ for the reaction in the opposite direction, and $\Delta H$ is directly proportional to the quantity of reactants and products. The standard enthalpy of formation, $\Delta H^\circ_\text{f}$, is the enthalpy change accompanying the formation of 1 mole of a substance from the elements in their most stable states at 1 bar and 298.15 K. If the enthalpies of formation are available for the reactants and products of a reaction, the enthalpy change can be calculated using Hess’s law: If a process can be written as the sum of several stepwise processes, the enthalpy change of the total process equals the sum of the enthalpy changes of the various steps.

## Key equations

- $\Delta U = q + w$
- $\Delta H^\circ_\text{reaction} = \sum n \times \Delta H^\circ_\text{f}(\text{products}) - \sum n \times \Delta H^\circ_\text{f}(\text{reactants})$

## Key terms

- **chemical thermodynamics** — area of science that deals with the relationships between heat, work, and all forms of energy associated with chemical and physical processes.
- **enthalpy ($H$)** — sum of a system’s internal energy and the mathematical product of its pressure and volume.
- **enthalpy change ($\Delta H$)** — heat released or absorbed by a system under constant pressure during a chemical or physical process.
- **expansion work** — (also, pressure-volume work) work done as a system expands or contracts against external pressure.
- **first law of thermodynamics** — internal energy of a system changes due to heat flow in or out of the system or work done on or by the system.
- **Hess’s law** — if a process can be represented as the sum of several steps, the enthalpy change of the process equals the sum of the enthalpy changes of the steps.
- **hydrocarbon** — compound composed only of hydrogen and carbon; the major component of fossil fuels.
- **internal energy ($U$)** — total of all possible kinds of energy present in a substance or substances.
- **standard enthalpy of combustion ($\Delta H^\circ_\text{c}$)** — heat released when one mole of a compound undergoes complete combustion under standard conditions.
- **standard enthalpy of formation ($\Delta H^\circ_\text{f}$)** — enthalpy change of a chemical reaction in which 1 mole of a pure substance is formed from its elements in their most stable states under standard state conditions.
- **standard state** — set of physical conditions as accepted as common reference conditions for reporting thermodynamic properties; 1 bar of pressure, and solutions at 1 molar concentrations, usually at a temperature of 298.15 K.
- **state function** — property depending only on the state of a system, and not the path taken to reach that state.

## Practice

### State the first law of thermodynamics

{{< textin
  question="What is the term for the total of all possible kinds of energy present in a substance or substances?"
  answer="internal energy"
  hint="Reread the opening paragraphs of the section, on substances as reservoirs of energy."
>}}

{{< textin
  question="What is the term for work done as a system expands or contracts against external pressure?"
  answer="expansion work"
  accept="pressure-volume work|PV work"
  hint="Reread the paragraph on the internal combustion engine."
>}}

### Define enthalpy and explain its classification as a state function

{{< multiplechoice
  question="Which of the following is a state function?"
  answer="internal energy"
  hint="Reread the paragraph that introduces state functions."
>}}
heat
internal energy
work
{{< /multiplechoice >}}

{{< multiplechoice
  question="For a climb to the summit of Mt. Kilimanjaro, which of the following is a state function?"
  answer="the altitude reached"
  hint="Ask whether the quantity would change if the climber took a different route."
>}}
the distance traveled
the altitude reached
{{< /multiplechoice >}}

### Write and balance thermochemical equations

{{< selfcheck question="Explain how the heat measured in the example “Heat Produced by an Exothermic Reaction” in [Section 5.2 Calorimetry](/physical-sciences/chemistry/05-thermochemistry/02-calorimetry/) differs from the enthalpy change for the exothermic reaction described by the following equation: $\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)}$. (In that example, 50.0 mL of 1.00 *M* HCl(*aq*) and 50.0 mL of 1.00 *M* NaOH(*aq*), both at 22.0 °C, are added to a coffee cup calorimeter, and the temperature of the mixture reaches a maximum of 28.9 °C.)" hint="Recall what amounts of reactants the $\Delta H$ of a thermochemical equation refers to." >}}
The enthalpy change of the indicated reaction is for exactly 1 mol HCl and 1 mol NaOH; the heat in the example is produced by 0.0500 mol HCl and 0.0500 mol NaOH.
===CHECKS===
the enthalpy change of the indicated reaction is for exactly 1 mol HCl and 1 mol NaOH
the heat in the example is produced by 0.0500 mol HCl and 0.0500 mol NaOH
{{< /selfcheck >}}

{{< fillin
  question="Calculate the enthalpy of solution ($\Delta H$ for the dissolution) per mole of NH₄NO₃ under the conditions described in the example “Heat Flow in an Instant Ice Pack” in [Section 5.2 Calorimetry](/physical-sciences/chemistry/05-thermochemistry/02-calorimetry/). (In that example, 3.21 g of solid NH₄NO₃ dissolves in 50.0 g of water at 24.9 °C in a calorimeter, the temperature decreases to 20.3 °C, and the specific heat of the solution is taken to be that of water, 4.184 J/g °C.) Enter the enthalpy of solution in kJ/mol."
  answer="26"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$26\ \text{kJ/mol}$"
  hint="Use the relation of heat, specific heat, mass, and temperature change from Section 5.1 Energy Basics, taking the solution’s mass as the mass of the water and the dissolved solid together, and the moles of NH₄NO₃ with a molar mass computed from the periodic table."
>}}

*Source note:* the answer graded here is not the one the source prints for this exercise; the source works it from the example’s heat after rounding that heat, where the graded answer carries it unrounded.

{{< fillin
  question="Calculate the enthalpy of solution ($\Delta H$ for the dissolution) per mole of CaCl₂ (refer to the calcium chloride calorimetry exercise in [Section 5.2 Calorimetry](/physical-sciences/chemistry/05-thermochemistry/02-calorimetry/)). (In that exercise, 3.0 g of CaCl₂(*s*) dissolves in 150.0 g of water in a calorimeter at 22.4 °C, the temperature rises to 25.8 °C, and the specific heat of the resulting solution is 4.18 J/g °C.) Enter the enthalpy of solution in kJ/mol."
  answer="-80"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$-80\ \text{kJ/mol}$"
  hint="Find the heat for the dissolution with the relation of heat, specific heat, mass, and temperature change from Section 5.1 Energy Basics, taking the solution’s mass as the mass of the water and the dissolved solid together, and the moles of CaCl₂ with a molar mass computed from the periodic table."
>}}

*Source note:* the answer graded here is not the one the source prints for this exercise; the source’s value does not follow from the stem’s data.

### Calculate enthalpy changes for various chemical reactions

{{< fillin
  question="How much heat is produced by burning 4.00 moles of acetylene under standard state conditions? Enter the heat in kilojoules."
  answer="5.20\times10^{3}"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$5.20 \times 10^{3}\ \text{kJ}$"
  hint="Use the enthalpy of combustion of acetylene in the table of standard molar enthalpies of combustion; the heat produced is the size of that enthalpy change."
>}}

*Source note:* the answer graded here is not the one the source prints for this exercise; the graded answer is written to the figures its data give.

{{< fillin
  question="How many moles of isooctane must be burned to produce 100 kJ of heat under standard state conditions?"
  answer="1.83\times10^{-2}"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$1.83 \times 10^{-2}\ \text{mol}$"
  hint="Use the enthalpy of combustion of isooctane in the table of standard molar enthalpies of combustion."
>}}

{{< fillin
  question="When 2.50 g of methane burns in oxygen, 125 kJ of heat is produced. What is the enthalpy of combustion per mole of methane under these conditions? Enter the enthalpy of combustion in kJ/mol."
  answer="-802"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$-802\ \text{kJ/mol}$"
  hint="Convert the mass of methane to moles with a molar mass computed from the periodic table, and recall what an enthalpy of combustion is per."
>}}

{{< fillin
  question="A sample of 0.562 g of carbon is burned in oxygen in a bomb calorimeter, producing carbon dioxide. Assume both the reactants and products are under standard state conditions, and that the heat released is directly proportional to the enthalpy of combustion of graphite. The temperature of the calorimeter increases from 26.74 °C to 27.93 °C. What is the heat capacity of the calorimeter and its contents? Enter the heat capacity in kJ/°C."
  answer="15.5"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$15.5\ \text{kJ/}{}^\circ\text{C}$"
  hint="Find the heat released from the moles of carbon and the enthalpy of combustion of carbon in the table of standard molar enthalpies of combustion, then use the definition of heat capacity."
>}}

{{< fillin
  question="Homes may be heated by pumping hot water through radiators. What mass of water will provide the same amount of heat when cooled from 95.0 to 35.0 °C, as the heat provided when 100 g of steam is cooled from 110 °C to 100 °C? (Specific heats are in the table of specific heats of common substances in [Section 5.1 Energy Basics](/physical-sciences/chemistry/05-thermochemistry/01-energy-basics/).) Enter the mass in grams."
  answer="7.4"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$7.4\ \text{g}$"
  hint="Use the relation of heat, specific heat, mass, and temperature change from Section 5.1 Energy Basics for each, with the specific heats in its table of specific heats of common substances."
>}}

*Source note:* the answer graded here is not the one the source prints for this exercise; the graded answer is written to the figures its data give.

#### Standard enthalpy of formation

{{< multiplechoice
  question="Does the standard enthalpy of formation of H₂O(*g*) differ from $\Delta H^\circ$ for the reaction $\ce{2H2(g) + O2(g) -> 2H2O(g)}$?"
  answer="yes"
  hint="Reread the definition of a standard enthalpy of formation."
>}}
yes
no
{{< /multiplechoice >}}

{{< selfcheck question="Does the standard enthalpy of formation of H₂O(*g*) differ from $\Delta H^\circ$ for the reaction $\ce{2H2(g) + O2(g) -> 2H2O(g)}$?" hint="Reread the definition of a standard enthalpy of formation." >}}
Yes. A standard enthalpy of formation is an enthalpy change for a reaction in which exactly 1 mole of a pure substance is formed. This equation forms 2 moles of H₂O(*g*), and $\Delta H$ is directly proportional to the quantities of reactants or products, so its $\Delta H^\circ$ is twice the standard enthalpy of formation of H₂O(*g*).
===CHECKS===
exactly 1 mole of a pure substance is formed
this equation forms 2 moles of H₂O(g)
its ΔH° is twice the standard enthalpy of formation of H₂O(g)
{{< /selfcheck >}}

{{< fillin
  question="How many kilojoules of heat will be released when exactly 1 mole of manganese, Mn, is burned to form Mn₃O₄(*s*) at standard state conditions? (Standard enthalpies of formation are in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/).)"
  answer="462.610"
  answerForm="sig-figs:6 last-digit:1"
  answerDisplay="$462.610\ \text{kJ}$"
  hint="Find the standard enthalpy of formation of Mn₃O₄(s) in Appendix G, and recall what amount of substance it refers to; the heat released is the size of the enthalpy change."
>}}

*Source note:* the answer graded here is not the one the source prints for this exercise; the source works it from −1378.83 kJ/mol, the enthalpy of formation its Appendix G prints for Mn₃O₄(*s*) with two digits exchanged, where the graded answer is worked from the corrected −1387.83 kJ/mol that Appendix G of this book prints, and is written to the figures that value gives.

{{< fillin
  question="From the molar heats of formation in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/), determine how much heat is required to evaporate one mole of water: $\ce{H2O(l) -> H2O(g)}$. Enter the heat in kJ/mol."
  answer="44.01"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$44.01\ \text{kJ/mol}$"
  hint="Find the standard enthalpies of formation in Appendix G, and use the form of Hess’s law that sums enthalpies of formation."
>}}

{{< fillin
  question="Using the data in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/), calculate the standard enthalpy change for the following reaction: $\ce{Si(s) + 2F2(g) -> SiF4(g)}$. Enter the enthalpy change in kJ/mol."
  answer="-1615.0"
  answerForm="sig-figs:5 last-digit:1"
  answerDisplay="$-1615.0\ \text{kJ/mol}$"
  hint="Find the standard enthalpies of formation in Appendix G, and use the form of Hess’s law that sums enthalpies of formation."
>}}

{{< fillin
  question="Using the data in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/), calculate the standard enthalpy change for the following reaction: $\ce{2C(s) + 2H2(g) + O2(g) -> CH3CO2H(l)}$. Enter the enthalpy change in kJ/mol."
  answer="-484.3"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$-484.3\ \text{kJ/mol}$"
  hint="Find the standard enthalpies of formation in Appendix G, and use the form of Hess’s law that sums enthalpies of formation."
>}}

{{< fillin
  question="Using the data in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/), calculate the standard enthalpy change for the following reaction: $\ce{CH4(g) + N2(g) -> HCN(g) + NH3(g)}$. Enter the enthalpy change in kilojoules."
  answer="164.2"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$164.2\ \text{kJ}$"
  hint="Find the standard enthalpies of formation in Appendix G, and use the form of Hess’s law that sums enthalpies of formation."
>}}

{{< fillin
  question="Using the data in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/), calculate the standard enthalpy change for the following reaction: $\ce{CS2(g) + 3Cl2(g) -> CCl4(g) + S2Cl2(g)}$. Enter the enthalpy change in kilojoules."
  answer="-232.1"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$-232.1\ \text{kJ}$"
  hint="Find the standard enthalpies of formation in Appendix G, and use the form of Hess’s law that sums enthalpies of formation."
>}}

{{< fillin
  question="The decomposition of hydrogen peroxide, H₂O₂, has been used to provide thrust in the control jets of various space vehicles. Using the data in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/), determine how much heat is produced by the decomposition of exactly 1 mole of H₂O₂ under standard conditions. $\ce{2H2O2(l) -> 2H2O(g) + O2(g)}$. Enter the heat in kJ/mol."
  answer="54.04"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$54.04\ \text{kJ/mol}$"
  hint="Find the standard enthalpies of formation in Appendix G, and use the form of Hess’s law that sums enthalpies of formation; the heat produced is the size of that enthalpy change."
>}}

*Source note:* the answer graded here is not the one the source prints for this exercise; the source’s value answers a different quantity than the question’s words ask for.

{{< fillin
  question="Calculate the enthalpy of combustion of butane, C₄H₁₀(*g*) for the formation of H₂O(*g*) and CO₂(*g*). The enthalpy of formation of butane is −126 kJ/mol. (Standard enthalpies of formation are in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/).) Enter the enthalpy of combustion in kJ/mol."
  answer="-2657"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$-2{,}657\ \text{kJ/mol}$"
  hint="Write the balanced combustion equation, then use the form of Hess’s law that sums enthalpies of formation, with values from Appendix G."
>}}

*Source note:* the answer graded here is not the one the source prints for this exercise; the graded answer is written to the figures its data give.

{{< fillin
  question="The white pigment TiO₂ is prepared by the reaction of titanium tetrachloride, TiCl₄, with water vapor in the gas phase: $\ce{TiCl4(g) + 2H2O(g) -> TiO2(s) + 4HCl(g)}$. How much heat is evolved in the production of exactly 1 mole of TiO₂(*s*) under standard state conditions? (Standard enthalpies of formation are in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/).) Enter the heat in kilojoules."
  answer="66.4"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$66.4\ \text{kJ}$"
  hint="Find the standard enthalpies of formation in Appendix G, and use the form of Hess’s law that sums enthalpies of formation; the heat evolved is the size of that enthalpy change."
>}}

*Source note:* the answer graded here is not the one the source prints for this exercise; the source’s value answers a different quantity than the question’s words ask for.

{{< fillin
  question="In the early days of automobiles, illumination at night was provided by burning acetylene, C₂H₂. Though no longer used as auto headlamps, acetylene is still used as a source of light by some cave explorers. The acetylene is (was) prepared in the lamp by the reaction of water with calcium carbide, CaC₂: $\ce{CaC2(s) + 2H2O(l) -> Ca(OH)2(s) + C2H2(g)}$. Calculate the standard enthalpy of the reaction. The $\Delta H^\circ_\text{f}$ of CaC₂ is −15.14 kcal/mol. (1 cal = 4.184 J.) (Standard enthalpies of formation are in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/).) Enter the enthalpy change in kilojoules."
  answer="-122.8"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$-122.8\ \text{kJ}$"
  hint="Find the other standard enthalpies of formation in Appendix G, convert kilocalories to kilojoules, and use the form of Hess’s law that sums enthalpies of formation."
>}}

{{< fillin
  question="The enthalpy of combustion of hard coal averages −35 kJ/g, that of gasoline, $1.28 \times 10^{5}$ kJ/gal. How many kilograms of hard coal provide the same amount of heat as is available from 1.0 gallon of gasoline? Assume that the density of gasoline is 0.692 g/mL (the same as the density of isooctane)."
  answer="3.7"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$3.7\ \text{kg}$"
  hint="Gallons of gasoline to kilojoules to grams of coal to kilograms."
>}}

{{< multiplechoice
  question="Among the substances that react with oxygen and that have been considered as potential rocket fuels are diborane [B₂H₆, produces B₂O₃(*s*) and H₂O(*g*)], methane [CH₄, produces CO₂(*g*) and H₂O(*g*)], and hydrazine [N₂H₄, produces N₂(*g*) and H₂O(*g*)]. On the basis of the heat released by 1.00 g of each substance in its reaction with oxygen, which of these compounds offers the best possibility as a rocket fuel? The $\Delta H^\circ_\text{f}$ of B₂H₆(*g*), CH₄(*g*), and N₂H₄(*l*) may be found in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/)."
  answer="B₂H₆"
  hint="Write each balanced reaction, find its enthalpy change from the standard enthalpies of formation in Appendix G, and compare the heat per gram, with molar masses computed from the periodic table."
>}}
B₂H₆
CH₄
N₂H₄
{{< /multiplechoice >}}

{{< selfcheck question="Among the substances that react with oxygen and that have been considered as potential rocket fuels are diborane [B₂H₆, produces B₂O₃(*s*) and H₂O(*g*)], methane [CH₄, produces CO₂(*g*) and H₂O(*g*)], and hydrazine [N₂H₄, produces N₂(*g*) and H₂O(*g*)]. On the basis of the heat released by 1.00 g of each substance in its reaction with oxygen, which of these compounds offers the best possibility as a rocket fuel? The $\Delta H^\circ_\text{f}$ of B₂H₆(*g*), CH₄(*g*), and N₂H₄(*l*) may be found in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/)." hint="Write each balanced reaction, find its enthalpy change from the standard enthalpies of formation in Appendix G, and compare the heat per gram, with molar masses computed from the periodic table." >}}
On the assumption that the best rocket fuel is the one that gives off the most heat, B₂H₆ is the prime candidate. B₂H₆ releases about 73.6 kJ per gram, CH₄ releases about 50.0 kJ per gram, and N₂H₄ releases about 16.7 kJ per gram.
===CHECKS===
the best rocket fuel is the one that gives off the most heat
B₂H₆ is the prime candidate
B₂H₆ releases about 73.6 kJ per gram
CH₄ releases about 50.0 kJ per gram
N₂H₄ releases about 16.7 kJ per gram
{{< /selfcheck >}}

*Source note:* the model answer above is not the source’s in its last sentence: the source’s answer names the fuel without the heat per gram on which the question asks the choice to be made, and the heats per gram, worked from the enthalpies of formation in Appendix G, are added.

{{< fillin
  question="Ethylene, C₂H₄, a byproduct from the fractional distillation of petroleum, is fourth among the 50 chemical compounds produced commercially in the largest quantities. About 80% of synthetic ethanol is manufactured from ethylene by its reaction with water in the presence of a suitable catalyst. $\ce{C2H4(g) + H2O(g) -> C2H5OH(l)}$. Using the data in the table in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/), calculate $\Delta H^\circ$ for the reaction. Enter the enthalpy change in kilojoules."
  answer="-88.2"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$-88.2\ \text{kJ}$"
  hint="Find the standard enthalpies of formation in Appendix G, and use the form of Hess’s law that sums enthalpies of formation."
>}}

*Source note:* the source calls ethylene a byproduct of the fractional distillation of petroleum. It is made on purpose: “Pyrolysis of hydrocarbon feedstocks is the process used to produce virtually all ethylene worldwide,” the feedstocks most often being ethane, naphtha, and gas oil, according to the US Department of Energy’s [profile of the ethylene chain](https://www1.eere.energy.gov/manufacturing/resources/chemicals/pdfs/profile_chap2.pdf).

#### Fuels

{{< textin
  question="Propane, C₃H₈, is a hydrocarbon that is commonly used as a fuel. Write a balanced equation for the complete combustion of propane gas."
  answer="C₃H₈(g) + 5O₂(g) ⟶ 3CO₂(g) + 4H₂O(l)"
  answerForm="equation"
  hint="Write the products of the complete combustion of a hydrocarbon, then balance carbon, hydrogen, and, last, oxygen."
>}}

{{< fillin
  question="Propane, C₃H₈, is a hydrocarbon that is commonly used as a fuel. Calculate the volume of air at 25 °C and 1.00 atmosphere that is needed to completely combust 25.0 grams of propane. Assume that air is 21.0 percent O₂ by volume. (Hint: We will see how to do this calculation in a later chapter on gases—for now use the information that 1.00 L of air at 25 °C and 1.00 atm contains 0.275 g of O₂.) Enter the volume of air in liters."
  answer="330"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$330\ \text{L air}$"
  hint="Grams of propane to moles of propane to moles of O₂ to grams of O₂ to liters of air, with molar masses computed from the periodic table and the coefficients of the balanced combustion equation."
>}}

{{< fillin
  question="Propane, C₃H₈, is a hydrocarbon that is commonly used as a fuel. The heat of combustion of propane is −2,219.2 kJ/mol. Calculate the heat of formation, $\Delta H^\circ_\text{f}$ of propane given that $\Delta H^\circ_\text{f}$ of H₂O(*l*) = −285.8 kJ/mol and $\Delta H^\circ_\text{f}$ of CO₂(*g*) = −393.5 kJ/mol. Enter the heat of formation in kJ/mol."
  answer="-104.5"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$-104.5\ \text{kJ/mol}$"
  hint="Use the form of Hess’s law that sums enthalpies of formation, applied to the balanced combustion equation, and solve it for the one unknown."
>}}

{{< fillin
  question="Propane, C₃H₈, is a hydrocarbon that is commonly used as a fuel. The heat of combustion of propane is −2,219.2 kJ/mol. Assuming that all of the heat released in burning 25.0 grams of propane is transferred to 4.00 kilograms of water, calculate the increase in temperature of the water. (Specific heats are in the table of specific heats of common substances in [Section 5.1 Energy Basics](/physical-sciences/chemistry/05-thermochemistry/01-energy-basics/).) Enter the increase in temperature in degrees Celsius."
  answer="75.2"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$75.2\ {}^\circ\text{C}$"
  hint="Grams of propane to moles to kilojoules, then the relation of heat, specific heat, mass, and temperature change from Section 5.1 Energy Basics, with the specific heat of liquid water from its table of specific heats of common substances."
>}}

*Source note:* the answer graded here is not the one the source prints for this exercise; the source’s value does not follow from the stem’s data.

### Explain Hess’s law and use it to compute reaction enthalpies

{{< fillin
  question="The following sequence of reactions occurs in the commercial production of aqueous nitric acid: $\ce{4NH3(g) + 5O2(g) -> 4NO(g) + 6H2O(l)}$ $\Delta H$ = −907 kJ; $\ce{2NO(g) + O2(g) -> 2NO2(g)}$ $\Delta H$ = −113 kJ; $\ce{3NO2 + H2O(l) -> 2HNO3(aq) + NO(g)}$ $\Delta H$ = −139 kJ. Determine the total enthalpy change for the production of one mole of aqueous nitric acid by this process. Coproducts of the net reaction include water and nitrogen monoxide. Enter the enthalpy change in kJ/mol."
  answer="-494"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$-494\ \text{kJ/mol}$"
  hint="Use Hess’s law: arrange the given equations so that they add up to the reaction asked for, changing each $\Delta H$ as its equation is multiplied or reversed."
>}}

*Source note:* the first equation’s −907 kJ is the enthalpy change when the water forms as vapor; from the enthalpies of formation in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/), it is −906.3 kJ with H₂O(*g*) and −1170.4 kJ with H₂O(*l*), the state the source writes. The answer graded here follows the stem as printed.

{{< fillin
  question="Calculate $\Delta H^\circ$ for the process $\ce{Sb(s) + 5/2Cl2(g) -> SbCl5(s)}$ from the following information: $\ce{Sb(s) + 3/2Cl2(g) -> SbCl3(s)}$ $\Delta H^\circ$ = −314 kJ; $\ce{SbCl3(s) + Cl2(g) -> SbCl5(s)}$ $\Delta H^\circ$ = −80 kJ. Enter the enthalpy change in kilojoules."
  answer="-394"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$-394\ \text{kJ}$"
  hint="Use Hess’s law: arrange the given equations so that they add up to the reaction asked for, changing each $\Delta H$ as its equation is multiplied or reversed."
>}}

*Source note:* the source writes SbCl₃ and SbCl₅ as solids, but the enthalpy changes it gives are not those of the solids: the first equation’s −314 kJ is far from the enthalpy of formation that [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/) gives for solid SbCl₃. The answer graded here follows the stem as printed.

{{< fillin
  question="Calculate $\Delta H$ for the process $\ce{Hg2Cl2(s) -> 2Hg(l) + Cl2(g)}$ from the following information: $\ce{Hg(l) + Cl2(g) -> HgCl2(s)}$ $\Delta H$ = −224 kJ; $\ce{Hg(l) + HgCl2(s) -> Hg2Cl2(s)}$ $\Delta H$ = −41.2 kJ. Enter the enthalpy change in kilojoules."
  answer="265"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$265\ \text{kJ}$"
  hint="Use Hess’s law: arrange the given equations so that they add up to the reaction asked for, changing each $\Delta H$ as its equation is multiplied or reversed."
>}}

{{< fillin
  question="Calculate the standard molar enthalpy of formation of NO(*g*) from the following data: $\ce{N2(g) + 2O2(g) -> 2NO2(g)}$ $\Delta H^\circ$ = 66.4 kJ; $\ce{2NO(g) + O2(g) -> 2NO2(g)}$ $\Delta H^\circ$ = −114.1 kJ. Enter the enthalpy of formation in kJ/mol."
  answer="90.25"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$90.25\ \text{kJ/mol}$"
  hint="Use Hess’s law: arrange the given equations so that they add up to the reaction asked for, changing each $\Delta H$ as its equation is multiplied or reversed."
>}}

*Source note:* the answer graded here is not the one the source prints for this exercise; the graded answer is written to the figures its data give.

---

<small>This section is adapted from [Chemistry 2e, Section 5.3: Enthalpy](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy) by Paul Flowers, Klaus Theopold, Richard Langley, William R. Robinson, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/chemistry-2e). Changes: each reference to another section of this book linked to that section’s page; the six figures re-encoded as WebP, the mountain, gasoline-fire, and algae photographs marked as photos and the energy, algae-fuel, and enthalpy diagrams as diagrams, every alt text rewritten from the image (among other differences, the source alts put the two signs of the internal-energy change in the wrong places in the oval, call the green algal filaments brown, and give two of the enthalpy diagram’s arrows the body text’s rounded values where the drawing prints them to the tenth of a kilojoule), with an extended description added to the enthalpy diagram; references to numbered figures and to the table replaced by describing phrases, and the bomb-calorimeter figure of Section 5.2 named by its section; the two Link to Learning boxes and the Chemistry in Everyday Life box rendered as callouts, the box’s two figures inside it, and the link text “here” extended to describe its destination; the box’s footnote, a reading suggestion, moved into the text as a parenthetical after the sentence it follows, its web address made a described link; the table of standard molar enthalpies of combustion transcribed as a Markdown table with its title as a bold line above it; the source’s equations typeset as KaTeX math, formulas with mhchem, unit cancellation set with a diagonal strike, rows too wide for the column broken into aligned rows, and the Hess’s-law sums set as columns with a rule above the sum; the quantity symbols the source prints in prose (ΔH, ΔU, q, w, P, V) set as math; the missing closing parenthesis restored in the ethanol combustion equation; “perchlorate-to-sucrose” corrected to “chlorate-to-sucrose” (the reactant is potassium chlorate); the enthalpy-of-formation symbol restored in the bracket beside the formation of NO; “HCL” corrected to “HCl” in one model answer; the molar masses in the worked examples computed from this book’s periodic table, with a Source note; the intermediate values of the examples printed with the digits that are carried where a later step uses them, with a Source note; the result of the example “Using Hess’s Law” corrected in both of its solutions, with a Source note, where the source rounds the two bracketed sums and two values from Appendix G before adding them; the eight worked examples set as prose, each followed by its Check Your Learning as interactive items (7 fill-ins and 2 equation text-recall items, one per equation the formation-equation check asks), the printed answers serving as their keys rather than appearing as text, the hydrogen chloride check keyed with its enthalpy change alone since it asks for no equation, and the formation-equation check’s lead-in restated in the singular for each of its two items; the body’s statements that ΔH is proportional to the amounts and changes sign when a reaction is reversed print, as the source does, the reaction and value of two Check Your Learning items, the nitrogen dioxide one above its item and the hydrogen chloride one below it; the enthalpy of combustion of isooctane in the table replaced by the measured value in the NIST Chemistry WebBook, with a Source note; the combustion example keeping the source’s −5460 kJ, the corrected table value rounded; the key of the iron-and-chlorine Check Your Learning corrected, where the source divides the heat by the moles of the reactant in excess, with a Source note; the mass of ice in pounds in the isooctane example corrected, with a Source note; “the heat produced” in the ozone example corrected to “the heat absorbed”, since the formation of ozone is endothermic, with a Source note; the enthalpy of formation of acetylene given as Appendix G prints it, and the standard pressure for gases as the section defines the standard state, with one Source note; the sentence on the cost of algal fuel corrected to what the article the source cites reports, with a Source note; a Source note after the enthalpy diagram giving the two step values that the enthalpies of formation in Appendix G give; the standard enthalpy of combustion written with a lowercase c throughout, where the source prints a capital C once; the source’s unit $\text{kJ}\ \text{mol}^{-1}$ printed “kJ/mol”; the references to Appendix G linked to its page in this book, in the body and in five exercise stems, and the words “(Standard enthalpies of formation are in Appendix G.)” added, linked, to the four stems that need its values and name no table (the manganese, butane, titanium dioxide, and calcium carbide exercises), the source linking nothing there; “(1 cal = 4.184 J.)” added to the calcium carbide exercise, which gives a value in kilocalories and whose module states no conversion; “(Specific heats are in the table of specific heats of common substances in Section 5.1 Energy Basics.)” added to the radiator exercise and the propane temperature part, which need its values and name no table; the end-of-section exercises adapted into the interactive Practice block, with the 24 exercises the source keys carried as 31 items: 26 fill-ins, 2 multiple-choice items, 1 equation text-recall item, and 2 self-checks, one item per lettered part, with a sentence added after a stem that leaves it open saying which quantity to enter and in what unit; the references of three exercises to the two examples and the calcium chloride exercise of Section 5.2 named in words by their titles and section, with the data each key depends on restated in parentheses; the lead-in of the Appendix G reaction exercise restated in the singular for each part, and the propane exercise’s lead-in placed before each of its parts, with the temperature part restating, as its own sentence, the heat of combustion the earlier part gives; the water-of-formation exercise asked as a yes-or-no multiple-choice item, followed by an added self-check of the same stem and hint, whose model answer is written from the section’s definition of the standard enthalpy of formation; the rocket-fuel exercise asked as a multiple-choice item over the stem’s three compounds in its order, followed by a self-check carrying the source’s answer, with the heat each compound releases per gram added, with a Source note; the long group of the calculation objective divided by two sub-headings, where its exercises turn to enthalpies of formation and where the propane-fuel exercise begins; the keys of the acetylene, radiator, butane, and nitrogen monoxide exercises written to the figures their data give, the manganese exercise keyed from the enthalpy of formation of Mn₃O₄(*s*) as corrected in Appendix G and written to the figures that value gives, and the keys of the ammonium nitrate, calcium chloride, hydrogen peroxide, and titanium dioxide exercises and of the propane temperature part corrected, each with a Source note; and the 24 exercises the source prints no answer for are omitted; Source notes after three exercises whose stems stand as printed: the ethylene exercise, which calls ethylene a byproduct of the fractional distillation of petroleum, the nitric acid exercise, whose first equation writes as liquid the water its enthalpy change forms as vapor, and the antimony chloride exercise, whose equations write two chlorides as solids with enthalpy changes that are not those of the solids; the example “Using Hess’s Law” prints, as the source does, the enthalpy of formation of nitrogen monoxide that the nitrogen monoxide exercise asks for, which remains as the source asks it; four filler items added in the two objective groups no keyed exercise reaches: in the first-law group, recalls of the key terms defined as the total of all kinds of energy in a substance and as work done against external pressure; in the state-function group, two multiple-choice items, one on the sentence that introduces the term state function and one on the sentences on the two routes up Mt. Kilimanjaro.</small>
