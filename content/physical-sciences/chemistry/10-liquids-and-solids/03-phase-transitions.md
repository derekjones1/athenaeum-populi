---
title: Phase Transitions
description: >-
  Vaporization and condensation, vapor pressure and boiling points, the
  Clausius-Clapeyron equation, enthalpies of vaporization, fusion, and
  sublimation, and heating and cooling curves — adapted from OpenStax
  Chemistry 2e, Section 10.3.
source_section: "10.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Define phase transitions and phase transition temperatures
- Explain the relation between phase transition temperatures and intermolecular attractive forces
- Describe the processes represented by typical heating and cooling curves, and compute heat flows and enthalpy changes accompanying these processes
{{< /callout >}}

We witness and utilize changes of physical state, or phase transitions, in a great number of ways. As one example of global significance, consider the evaporation, condensation, freezing, and melting of water. These changes of state are essential aspects of our earth’s water cycle as well as many other natural phenomena and technological processes of central importance to our lives. In this module, the essential aspects of phase transitions are explored.

## Vaporization and Condensation

When a liquid vaporizes in a closed container, gas molecules cannot escape. As these gas phase molecules move randomly about, they will occasionally collide with the surface of the condensed phase, and in some cases, these collisions will result in the molecules re-entering the condensed phase. The change from the gas phase to the liquid is called **condensation**. When the rate of condensation becomes equal to the rate of **vaporization**, neither the amount of the liquid nor the amount of the vapor in the container changes. The vapor in the container is then said to be *in equilibrium* with the liquid. Keep in mind that this is not a static situation, as molecules are continually exchanged between the condensed and gaseous phases. Such is an example of a **dynamic equilibrium**, the status of a system in which reciprocal processes (for example, vaporization and condensation) occur at equal rates. The pressure exerted by the vapor in equilibrium with a liquid in a closed container at a given temperature is called the liquid’s **vapor pressure** (or equilibrium vapor pressure). The area of the surface of the liquid in contact with a vapor and the size of the vessel have no effect on the vapor pressure, although they do affect the time required for the equilibrium to be reached. We can measure the vapor pressure of a liquid by placing a sample in a closed container, like that illustrated in the figure below, and using a manometer to measure the increase in pressure that is due to the vapor in equilibrium with the condensed phase.

{{< mediafigure src="chemistry/CNX_Chem_10_03_VapPress1" kind="diagram" eager="true" alt="Three drawings, (a) to (c), of a flask of liquid joined to a pressure gauge and to a U-tube holding a gray liquid. In (a), three arrows point up from the liquid, the gray liquid is level in both arms, and the text reads “Molecules escape liquid’s surface to form vapor.” In (b), six molecules float above the liquid and the gray liquid stands higher in the far arm. In (c), many more molecules fill the flask, the gauge needle has turned further clockwise, and the larger gap between the two levels is marked “Vapor pressure”; the text reads “Equilibrium reached, vapor pressure determined.”" >}}
In a closed container, dynamic equilibrium is reached when (a) the rate of molecules escaping from the liquid to become the gas (b) increases and eventually (c) equals the rate of gas molecules entering the liquid. When this equilibrium is reached, the vapor pressure of the gas is constant, although the vaporization and condensation processes continue.
{{< /mediafigure >}}

The chemical identities of the molecules in a liquid determine the types (and strengths) of intermolecular attractions possible; consequently, different substances will exhibit different equilibrium vapor pressures. Relatively strong intermolecular attractive forces will serve to impede vaporization as well as favoring “recapture” of gas-phase molecules when they collide with the liquid surface, resulting in a relatively low vapor pressure. Weak intermolecular attractions present less of a barrier to vaporization, and a reduced likelihood of gas recapture, yielding relatively high vapor pressures. The following example illustrates this dependence of vapor pressure on intermolecular attractive forces.

**Example.** *Explaining Vapor Pressure in Terms of IMFs.* Given the shown structural formulas for these four compounds, explain their relative vapor pressures in terms of types and extents of IMFs:

{{< mediafigure src="chemistry/CNX_Chem_10_03_Ethanol_img" kind="diagram" alt="Condensed structural formulas of four compounds, left to right: ethanol, H₃C–CH₂ with an OH bonded to the CH₂; ethylene glycol, H₂C–CH₂ with an OH bonded to each carbon; diethyl ether, CH₃–CH₂–O–CH₂–CH₃; and water, H–O–H." >}}
{{< /mediafigure >}}

**Solution.** Diethyl ether has a very small dipole and most of its intermolecular attractions are London forces. Although this molecule is the largest of the four under consideration, its IMFs are the weakest and, as a result, its molecules most readily escape from the liquid. It also has the highest vapor pressure. Due to its smaller size, ethanol exhibits weaker dispersion forces than diethyl ether. However, ethanol is capable of hydrogen bonding and, therefore, exhibits stronger overall IMFs, which means that fewer molecules escape from the liquid at any given temperature, and so ethanol has a lower vapor pressure than diethyl ether. Water is much smaller than either of the previous substances and exhibits weaker dispersion forces, but its extensive hydrogen bonding provides stronger intermolecular attractions, fewer molecules escaping the liquid, and a lower vapor pressure than for either diethyl ether or ethanol. Ethylene glycol has two –OH groups, so, like water, it exhibits extensive hydrogen bonding. It is much larger than water and thus experiences larger London forces. Its overall IMFs are the largest of these four substances, which means its vaporization rate will be the slowest and, consequently, its vapor pressure the lowest.

| Compound | methanol CH₃OH | ethanol C₂H₅OH | propanol C₃H₇OH | butanol C₄H₉OH |
|---|---|---|---|---|
| Vapor Pressure at 20 °C | 11.9 kPa | 5.95 kPa | 2.67 kPa | 0.56 kPa |

{{< selfcheck question="At 20 °C, the vapor pressures of several alcohols are given in the table above. Explain these vapor pressures in terms of types and extents of IMFs for these alcohols." hint="Name the kind of intermolecular attraction the four alcohols share, then ask how the dispersion forces change from one alcohol to the next, as the example above does for its four compounds." >}}
All these compounds exhibit hydrogen bonding; these strong IMFs are difficult for the molecules to overcome, so the vapor pressures are relatively low. As the size of molecule increases from methanol to butanol, dispersion forces increase, which means that the vapor pressures decrease as observed: $P_\text{methanol} > P_\text{ethanol} > P_\text{propanol} > P_\text{butanol}$.
===CHECKS===
all these compounds exhibit hydrogen bonding
these strong IMFs are difficult for the molecules to overcome, so the vapor pressures are relatively low
as the size of molecule increases from methanol to butanol, dispersion forces increase
the vapor pressures decrease as observed
{{< /selfcheck >}}

*Source note:* the vapor pressures in the table above are the source’s. Antoine constants in the NIST Chemistry WebBook give about 13.0 kPa for [methanol](https://webbook.nist.gov/cgi/cbook.cgi?ID=C67561&Mask=4&Units=SI) and 2.0 kPa for [1-propanol](https://webbook.nist.gov/cgi/cbook.cgi?ID=C71238&Mask=4&Units=SI) at 20 °C; the order of the four alcohols, and the answer, are the same.

As temperature increases, the vapor pressure of a liquid also increases due to the increased average KE of its molecules. Recall that at any given temperature, the molecules of a substance experience a range of kinetic energies, with a certain fraction of molecules having a sufficient energy to overcome IMF and escape the liquid (vaporize). At a higher temperature, a greater fraction of molecules have enough energy to escape from the liquid, as shown in the figure below. The escape of more molecules per unit of time and the greater average speed of the molecules that escape both contribute to the higher vapor pressure.

{{< mediafigure src="chemistry/CNX_Chem_10_03_VapPress3" kind="diagram" alt="A graph of number of molecules against kinetic energy, with two curves rising from the origin. The brown curve, labeled Low T, climbs to a tall, narrow peak at low energy and has fallen nearly to zero by a dashed vertical line labeled “Minimum KE needed to escape.” The black curve, labeled High T, has a lower peak farther to the right, is wider, and is still well above zero where it crosses the dashed line, ending farther to the right." >}}
Temperature affects the distribution of kinetic energies for the molecules in a liquid. At the higher temperature, more molecules have the necessary kinetic energy, KE, to escape from the liquid into the gas phase.
{{< /mediafigure >}}

## Boiling Points

When the vapor pressure increases enough to equal the external atmospheric pressure, the liquid reaches its boiling point. The **boiling point** of a liquid is the temperature at which its equilibrium vapor pressure is equal to the pressure exerted on the liquid by its gaseous surroundings. For liquids in open containers, this pressure is due to the earth’s atmosphere. The **normal boiling point** of a liquid is defined as its boiling point when surrounding pressure is equal to 1 atm (101.3 kPa). The figure below shows the variation in vapor pressure with temperature for several different substances. Considering the definition of boiling point, these curves may be seen as depicting the dependence of a liquid’s boiling point on surrounding pressure.

{{< mediafigure src="chemistry/CNX_Chem_10_03_VapPress2" kind="diagram" alt="A graph of pressure in kilopascals, with gridlines labeled 27, 53, 80, 107, and 133, against temperature in degrees Celsius, with gridlines every 20 degrees, labeled 20 to 120. Four curves rise more and more steeply to the right: ethyl ether, starting near 25 kPa at 0 °C; ethyl alcohol; water; and ethylene glycol, which starts at 80 °C and stays low. A dashed horizontal line a little below the 107 kPa gridline meets the first three curves, and dashed lines drop from those meetings to the temperature axis at about 35, 79, and 100 °C." >}}
The boiling points of liquids are the temperatures at which their equilibrium vapor pressures equal the pressure of the surrounding atmosphere. Normal boiling points are those corresponding to a pressure of 1 atm (101.3 kPa.)
{{< /mediafigure >}}

**Example.** *A Boiling Point at Reduced Pressure.* A typical atmospheric pressure in Leadville, Colorado (elevation 10,200 feet) is 68 kPa. Use the graph in the figure above to determine the boiling point of water at this elevation.

**Solution.** The graph of the vapor pressure of water versus temperature in the figure above indicates that the vapor pressure of water is 68 kPa at about 90 °C. Thus, at about 90 °C, the vapor pressure of water will equal the atmospheric pressure in Leadville, and water will boil.

{{< fillin
  question="The boiling point of ethyl ether was measured to be 10 °C at a base camp on the slopes of Mount Everest. Use the graph of the vapor pressures of four liquids above to determine the approximate atmospheric pressure at the camp. Enter the pressure you read from the graph, in kilopascals."
  answer="39.5"
  answerForm="reading:27"
  answerDisplay="$\text{approximately }40\ \text{kPa}\ (0.4\ \text{atm})$"
  hint="Find the stated temperature on the horizontal axis, follow it up to the ethyl ether curve, and read the pressure there."
>}}

The quantitative relation between a substance’s vapor pressure and its temperature is described by the **Clausius-Clapeyron equation**:

$$P = Ae^{-\Delta H_\text{vap}/RT}$$

where $\Delta H_\text{vap}$ is the enthalpy of vaporization for the liquid, $R$ is the gas constant, and $A$ is a constant whose value depends on the chemical identity of the substance. Temperature $T$ must be in kelvin in this equation. This equation is often rearranged into logarithmic form to yield the linear equation:

$$\ln P = -\frac{\Delta H_\text{vap}}{RT} + \ln A$$

This linear equation may be expressed in a two-point format that is convenient for use in various computations, as demonstrated in the example exercises that follow. If at temperature $T_1$, the vapor pressure is $P_1$, and at temperature $T_2$, the vapor pressure is $P_2$, the corresponding linear equations are:

$$\begin{aligned} \ln P_1 &= -\frac{\Delta H_\text{vap}}{RT_1} + \ln A \qquad \text{and} \\[6pt] \ln P_2 &= -\frac{\Delta H_\text{vap}}{RT_2} + \ln A \end{aligned}$$

Since the constant, $A$, is the same, these two equations may be rearranged to isolate $\ln A$ and then set them equal to one another:

$$\ln P_1 + \frac{\Delta H_\text{vap}}{RT_1} = \ln P_2 + \frac{\Delta H_\text{vap}}{RT_2}$$

which can be combined into:

$$\ln\left(\frac{P_2}{P_1}\right) = \frac{\Delta H_\text{vap}}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

**Example.** *Estimating Enthalpy of Vaporization.* Isooctane (2,2,4-trimethylpentane) has an octane rating of 100. It is used as one of the standards for the octane-rating system for gasoline. At 34.0 °C, the vapor pressure of isooctane is 10.0 kPa, and at 98.8 °C, its vapor pressure is 100.0 kPa. Use this information to estimate the enthalpy of vaporization for isooctane.

**Solution.** The enthalpy of vaporization, $\Delta H_\text{vap}$, can be determined by using the Clausius-Clapeyron equation:

$$\ln\left(\frac{P_2}{P_1}\right) = \frac{\Delta H_\text{vap}}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

Since we have two vapor pressure-temperature values ($T_1$ = 34.0 °C = 307.15 K, $P_1$ = 10.0 kPa and $T_2$ = 98.8 °C = 371.95 K, $P_2$ = 100 kPa), we can substitute them into this equation and solve for $\Delta H_\text{vap}$. Rearranging the Clausius-Clapeyron equation and solving for $\Delta H_\text{vap}$ yields:

$$\begin{aligned} \Delta H_\text{vap} &= \frac{R \cdot \ln\left(\frac{P_2}{P_1}\right)}{\left(\frac{1}{T_1} - \frac{1}{T_2}\right)} \\[6pt] &= \frac{(8.3145\ \text{J/mol}\cdot\text{K}) \cdot \ln\left(\frac{100\ \text{kPa}}{10.0\ \text{kPa}}\right)}{\left(\frac{1}{307.15\ \text{K}} - \frac{1}{371.95\ \text{K}}\right)} \\[6pt] &= 33{,}800\ \text{J/mol} = 33.8\ \text{kJ/mol} \end{aligned}$$

*Source note:* the source converts the Celsius temperatures of this section’s Clausius-Clapeyron examples to kelvin and rounds them to the tenths place before it uses them, and it converts its rounded kelvin result for benzene to degrees Celsius. Here each temperature is converted with 273.15 ([Section 1.6 Mathematical Treatment of Measurement Results](/physical-sciences/chemistry/01-essential-ideas/06-mathematical-treatment-of-measurement-results/)) and carried, and only the result is rounded. The boiling point of benzene in Denver differs from the source’s in its last digit, in kelvin and in degrees Celsius; the enthalpy of vaporization of isooctane is the same.

Note that the pressure can be in any units, so long as they agree for both $P$ values, but the temperature must be in kelvin for the Clausius-Clapeyron equation to be valid.

{{< fillin
  question="At 20.0 °C, the vapor pressure of ethanol is 5.95 kPa, and at 63.5 °C, its vapor pressure is 53.3 kPa. Use this information to estimate the enthalpy of vaporization for ethanol. Enter the enthalpy of vaporization in kJ/mol."
  answer="41.4"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$41.4\ \text{kJ/mol}$"
  hint="Use the Clausius-Clapeyron equation for two points, with the temperatures in kelvin."
>}}

**Example.** *Estimating Temperature (or Vapor Pressure).* For benzene (C₆H₆), the normal boiling point is 80.1 °C and the enthalpy of vaporization is 30.8 kJ/mol. What is the boiling point of benzene in Denver, where atmospheric pressure = 83.4 kPa?

**Solution.** If the temperature and vapor pressure are known at one point, along with the enthalpy of vaporization, $\Delta H_\text{vap}$, then the temperature that corresponds to a different vapor pressure (or the vapor pressure that corresponds to a different temperature) can be determined by using the Clausius-Clapeyron equation:

$$\ln\left(\frac{P_2}{P_1}\right) = \frac{\Delta H_\text{vap}}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

Since the normal boiling point is the temperature at which the vapor pressure equals atmospheric pressure at sea level, we know one vapor pressure-temperature value ($T_1$ = 80.1 °C = 353.25 K, $P_1$ = 101.3 kPa, $\Delta H_\text{vap}$ = 30.8 kJ/mol) and want to find the temperature ($T_2$) that corresponds to vapor pressure $P_2$ = 83.4 kPa. We can substitute these values into the Clausius-Clapeyron equation and then solve for $T_2$. Rearranging the Clausius-Clapeyron equation and solving for $T_2$ yields:

$$\begin{aligned} T_2 &= \left(\frac{-R \cdot \ln\left(\frac{P_2}{P_1}\right)}{\Delta H_\text{vap}} + \frac{1}{T_1}\right)^{-1} \\[6pt] &= \left(\frac{-(8.3145\ \text{J/mol}\cdot\text{K}) \cdot \ln\left(\frac{83.4\ \text{kPa}}{101.3\ \text{kPa}}\right)}{30{,}800\ \text{J/mol}}\right. \\[6pt] &\qquad \left. + \frac{1}{353.25\ \text{K}}\right)^{-1} \\[6pt] &= 346.8\ \text{K} \\ &\phantom{=}\ \text{or } 346.82 - 273.15 = 73.7\ {}^\circ\text{C} \end{aligned}$$

{{< fillin
  question="For acetone (CH₃)₂CO, the normal boiling point is 56.5 °C and the enthalpy of vaporization is 31.3 kJ/mol. What is the vapor pressure of acetone at 25.0 °C? Enter the vapor pressure in kilopascals."
  answer="30.3"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$30.3\ \text{kPa}$"
  hint="Use the two-point form of the Clausius-Clapeyron equation, with the normal boiling point as the known point and the temperatures in kelvin."
>}}

*Source note:* the answer graded here is not the one the source prints; the source’s value does not follow from the stem’s temperatures by the conversion this book uses.

## Enthalpy of Vaporization

Vaporization is an endothermic process. The cooling effect can be evident when you leave a swimming pool or a shower. When the water on your skin evaporates, it removes heat from your skin and causes you to feel cold. The energy change associated with the vaporization process is the enthalpy of vaporization, $\Delta H_\text{vap}$. For example, the vaporization of water at standard temperature is represented by:

$$\ce{H2O(l) -> H2O(g)} \qquad \Delta H_\text{vap} = 44.01\ \text{kJ/mol}$$

As described in the chapter on thermochemistry ([Section 5.3 Enthalpy](/physical-sciences/chemistry/05-thermochemistry/03-enthalpy/)), the reverse of an endothermic process is exothermic. And so, the condensation of a gas releases heat:

$$\ce{H2O(g) -> H2O(l)} \qquad \Delta H_\text{con} = -\Delta H_\text{vap} = -44.01\ \text{kJ/mol}$$

**Example.** *Using Enthalpy of Vaporization.* One way our body is cooled is by evaporation of the water in sweat (shown in the photograph below). In very hot climates, we can lose as much as 1.5 L of sweat per day. Although sweat is not pure water, we can get an approximate value of the amount of heat removed by evaporation by assuming that it is. How much heat is required to evaporate 1.5 L of water (1.5 kg) at $T$ = 37 °C (normal body temperature); $\Delta H_\text{vap}$ = 43.46 kJ/mol at 37 °C.

{{< mediafigure src="chemistry/CNX_Chem_10_03_Evap" kind="photo" alt="A close-up photograph, from behind, of a person’s bare shoulder and the side of the neck, the skin covered in many small beads of liquid, against a blurred blue-green background." >}}
Evaporation of sweat helps cool the body. (credit: “Kullez”/Flickr)
{{< /mediafigure >}}

**Solution.** We start with the known volume of sweat (approximated as just water) and use the given information to convert to the amount of heat needed:

$$\begin{aligned} &1.5\ \cancel{\text{L}} \times \frac{1{,}000\ \cancel{\text{g}}}{1\ \cancel{\text{L}}} \times \frac{1\ \cancel{\text{mol}}}{18.015\ \cancel{\text{g}}} \times \frac{43.46\ \text{kJ}}{1\ \cancel{\text{mol}}} \\[6pt] &\quad = 3.6 \times 10^{3}\ \text{kJ} \end{aligned}$$

*Source note:* the molar mass of water in this example is computed from this book’s periodic table (Appendix A), so it differs in its last digits from the one the source prints; the example’s result is the same.

Thus, 3600 kJ of heat are removed by the evaporation of 1.5 L of water.

{{< fillin
  question="How much heat is required to evaporate 100.0 g of liquid ammonia, NH₃, at its boiling point if its enthalpy of vaporization is 4.8 kJ/mol? Enter the heat in kilojoules."
  answer="28"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$28\ \text{kJ}$"
  hint="Convert the mass to moles with a molar mass computed from the formula, then use the enthalpy of vaporization."
>}}

*Source note:* the enthalpy of vaporization in this stem is the source’s. The NIST Chemistry WebBook [gives 23.4 kJ/mol](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7664417&Mask=4&Units=SI) at ammonia’s boiling point. The answer graded here follows the stem as printed.

## Melting and Freezing

When we heat a crystalline solid, we increase the average energy of its atoms, molecules, or ions and the solid gets hotter. At some point, the added energy becomes large enough to partially overcome the forces holding the molecules or ions of the solid in their fixed positions, and the solid begins the process of transitioning to the liquid state, or **melting**. At this point, the temperature of the solid stops rising, despite the continual input of heat, and it remains constant until all of the solid is melted. Only after all of the solid has melted will continued heating increase the temperature of the liquid (shown in the photographs below).

{{< mediafigure src="chemistry/CNX_Chem_10_03_MeltingIce" kind="photo" alt="Four photographs, (a) to (d), each of a handheld data logger beside a glass beaker with a temperature probe in it. The logger’s red display shows the reading in each: in (a) the beaker is full of ice cubes; in (b) it is still full of ice, with a little water at the bottom; in (c) water fills the lower part of the beaker with a smaller mass of ice above; and in (d) the beaker holds only clear water." >}}
(a) This beaker of ice has a temperature of −12.0 °C. (b) After 10 minutes the ice has absorbed enough heat from the air to warm to 0 °C. A small amount has melted. (c) Thirty minutes later, the ice has absorbed more heat, but its temperature is still 0 °C. The ice melts without changing its temperature. (d) Only after all the ice has melted does the heat absorbed cause the temperature to increase to 22.2 °C. (credit: modification of work by Mark Ott)
{{< /mediafigure >}}

If we stop heating during melting and place the mixture of solid and liquid in a perfectly insulated container so no heat can enter or escape, the solid and liquid phases remain in equilibrium. This is almost the situation with a mixture of ice and water in a very good thermos bottle; almost no heat gets in or out, and the mixture of solid ice and liquid water remains for hours. In a mixture of solid and liquid at equilibrium, the reciprocal processes of melting and **freezing** occur at equal rates, and the quantities of solid and liquid therefore remain constant. The temperature at which the solid and liquid phases of a given substance are in equilibrium is called the **melting point** of the solid or the **freezing point** of the liquid. Use of one term or the other is normally dictated by the direction of the phase transition being considered, for example, solid to liquid (melting) or liquid to solid (freezing).

The enthalpy of fusion and the melting point of a crystalline solid depend on the strength of the attractive forces between the units present in the crystal. Molecules with weak attractive forces form crystals with low melting points. Crystals consisting of particles with stronger attractive forces melt at higher temperatures.

The amount of heat required to change one mole of a substance from the solid state to the liquid state is the enthalpy of fusion, $\Delta H_\text{fus}$ of the substance. The enthalpy of fusion of ice is 6.0 kJ/mol at 0 °C. Fusion (melting) is an endothermic process:

$$\ce{H2O(s) -> H2O(l)} \qquad \Delta H_\text{fus} = 6.01\ \text{kJ/mol}$$

The reciprocal process, freezing, is an exothermic process whose enthalpy change is −6.0 kJ/mol at 0 °C:

$$\ce{H2O(l) -> H2O(s)} \qquad \Delta H_\text{frz} = -\Delta H_\text{fus} = -6.01\ \text{kJ/mol}$$

## Sublimation and Deposition

Some solids can transition directly into the gaseous state, bypassing the liquid state, via a process known as **sublimation**. At room temperature and standard pressure, a piece of dry ice (solid CO₂) sublimes, appearing to gradually disappear without ever forming any liquid. Snow and ice sublime at temperatures below the melting point of water, a slow process that may be accelerated by winds and the reduced atmospheric pressures at high altitudes. When solid iodine is warmed, the solid sublimes and a vivid purple vapor forms (shown in the photograph below). The reverse of sublimation is called **deposition**, a process in which gaseous substances condense directly into the solid state, bypassing the liquid state. The formation of frost is an example of deposition.

{{< mediafigure src="chemistry/CNX_Chem_10_03_Sublimtn" kind="photo" alt="A photograph of the lower part of a test tube. A dark gray solid lies in the rounded bottom; above it, pink-to-purple vapor fills the tube, fading toward the top, and small dark crystals cling to the glass, thickest just above the solid and thinning out higher up." >}}
Sublimation of solid iodine in the bottom of the tube produces a purple gas that subsequently deposits as solid iodine on the colder part of the tube above. (credit: modification of work by Mark Ott)
{{< /mediafigure >}}

Like vaporization, the process of sublimation requires an input of energy to overcome intermolecular attractions. The enthalpy of sublimation, $\Delta H_\text{sub}$, is the energy required to convert one mole of a substance from the solid to the gaseous state. For example, the sublimation of carbon dioxide is represented by:

$$\ce{CO2(s) -> CO2(g)} \qquad \Delta H_\text{sub} = 26.1\ \text{kJ/mol}$$

Likewise, the enthalpy change for the reverse process of deposition is equal in magnitude but opposite in sign to that for sublimation:

$$\ce{CO2(g) -> CO2(s)} \qquad \Delta H_\text{dep} = -\Delta H_\text{sub} = -26.1\ \text{kJ/mol}$$

Consider the extent to which intermolecular attractions must be overcome to achieve a given phase transition. Converting a solid into a liquid requires that these attractions be only partially overcome; transition to the gaseous state requires that they be completely overcome. As a result, the enthalpy of fusion for a substance is less than its enthalpy of vaporization. This same logic can be used to derive an approximate relation between the enthalpies of all phase changes for a given substance. Though not an entirely accurate description, sublimation may be conveniently modeled as a sequential two-step process of melting followed by vaporization in order to apply Hess’s Law. Viewed in this manner, the enthalpy of sublimation for a substance may be estimated as the sum of its enthalpies of fusion and vaporization, as illustrated in the energy diagram below. For example:

$$\begin{array}{ll} \text{solid} \longrightarrow \text{liquid} & \Delta H_\text{fus} \\ \text{liquid} \longrightarrow \text{gas} & \Delta H_\text{vap} \\ \hline \text{solid} \longrightarrow \text{gas} & \Delta H_\text{sub} = \Delta H_\text{fus} + \Delta H_\text{vap} \end{array}$$

{{< mediafigure src="chemistry/CNX_Chem_10_03_PhaseChng" kind="diagram" alt="An energy diagram with three horizontal lines against an upward Energy axis: Solid at the bottom, Liquid about a third of the way up to Gas, and Gas near the top. One long arrow labeled Sublimation, ΔH sub, rises from the Solid line to the Gas line. Beside it, a short arrow labeled Fusion, ΔH fus, rises from Solid to Liquid, and a second arrow labeled Vaporization, ΔH vap, continues from Liquid to Gas, so that the two together span the same height as the long arrow." >}}
For a given substance, the sum of its enthalpy of fusion and enthalpy of vaporization is approximately equal to its enthalpy of sublimation.
{{< /mediafigure >}}

## Heating and Cooling Curves

In the chapter on thermochemistry ([Section 5.1 Energy Basics](/physical-sciences/chemistry/05-thermochemistry/01-energy-basics/)), the relation between the amount of heat absorbed or released by a substance, $q$, and its accompanying temperature change, $\Delta T$, was introduced:

$$q = mc\Delta T$$

where $m$ is the mass of the substance and $c$ is its specific heat. The relation applies to matter being heated or cooled, but not undergoing a change in state. When a substance being heated or cooled reaches a temperature corresponding to one of its phase transitions, further gain or loss of heat is a result of diminishing or enhancing intermolecular attractions, instead of increasing or decreasing molecular kinetic energies. While a substance is undergoing a change in state, its temperature remains constant. The graph below shows a typical heating curve.

Consider the example of heating a pot of water to boiling. A stove burner will supply heat at a roughly constant rate; initially, this heat serves to increase the water’s temperature. When the water reaches its boiling point, the temperature remains constant despite the continued input of heat from the stove burner. This same temperature is maintained by the water as long as it is boiling. If the burner setting is increased to provide heat at a greater rate, the water temperature does not rise, but instead the boiling becomes more vigorous (rapid). This behavior is observed for other phase transitions as well: For example, temperature remains constant while the change of state is in progress.

{{< mediafigure src="chemistry/CNX_Chem_10_03_HeatCurve" kind="diagram" alt="A graph of temperature in degrees Celsius, marked from −10° to 100°, against amount of heat added. A brown line labeled H₂O(s) rises steeply from −10° to 0°. A short blue plateau at 0°, labeled H₂O(s) and H₂O(l), runs from “Solid begins to melt” to “All solid melted.” A brown line labeled H₂O(l) rises to 100°. A blue plateau at 100°, about six times as long as the first and labeled H₂O(g) and H₂O(l), runs from “Liquid begins to boil” to “All liquid evaporated.” A brown line labeled H₂O(g) then rises above 100°." >}}
A typical heating curve for a substance depicts changes in temperature that result as the substance absorbs increasing amounts of heat. Plateaus in the curve (regions of constant temperature) are exhibited when the substance undergoes phase transitions.
{{< /mediafigure >}}

**Example.** *Total Heat Needed to Change Temperature and Phase for a Substance.* How much heat is required to convert 135 g of ice at −15 °C into water vapor at 120 °C?

**Solution.** The transition described involves the following steps:

1. Heat ice from −15 °C to 0 °C
2. Melt ice
3. Heat water from 0 °C to 100 °C
4. Boil water
5. Heat steam from 100 °C to 120 °C

The heat needed to change the temperature of a given substance (with no change in phase) is: $q = m \times c \times \Delta T$ (see the chapter on thermochemistry, [Section 5.1 Energy Basics](/physical-sciences/chemistry/05-thermochemistry/01-energy-basics/)). The heat needed to induce a given change in phase is given by $q = n \times \Delta H$.

Using these equations with the [appropriate values for specific heat of ice, water, and steam, and enthalpies of fusion and vaporization](/physical-sciences/chemistry/appendices/e-water-properties/), we have:

$$\begin{aligned} q_\text{total} &= (m \cdot c \cdot \Delta T)_\text{ice} + n \cdot \Delta H_\text{fus} + (m \cdot c \cdot \Delta T)_\text{water} \\ &\quad + n \cdot \Delta H_\text{vap} + (m \cdot c \cdot \Delta T)_\text{steam} \end{aligned}$$

$$\begin{aligned} &= (135\ \text{g} \cdot 2.093\ \text{J/g}\cdot{}^\circ\text{C} \cdot 15\ {}^\circ\text{C}) \\[6pt] &\quad + \left(135\ \text{g} \cdot \frac{1\ \text{mol}}{18.015\ \text{g}} \cdot 6.01\ \text{kJ/mol}\right) \\[6pt] &\quad + (135\ \text{g} \cdot 4.184\ \text{J/g}\cdot{}^\circ\text{C} \cdot 100\ {}^\circ\text{C}) \\[6pt] &\quad + \left(135\ \text{g} \cdot \frac{1\ \text{mol}}{18.015\ \text{g}} \cdot 40.656\ \text{kJ/mol}\right) \\[6pt] &\quad + (135\ \text{g} \cdot 1.864\ \text{J/g}\cdot{}^\circ\text{C} \cdot 20\ {}^\circ\text{C}) \\[6pt] &= 4{,}238\ \text{J} + 45.04\ \text{kJ} + 56{,}484\ \text{J} \\ &\quad + 304.67\ \text{kJ} + 5{,}033\ \text{J} \end{aligned}$$

*Source note:* the source works this example with water’s specific heats and enthalpy of vaporization to fewer figures than [Appendix E](/physical-sciences/chemistry/appendices/e-water-properties/) prints and a molar mass of water rounded to four figures, and it adds terms it has already rounded. Here the example is worked with the values Appendix E prints and the molar mass from this book’s periodic table (Appendix A), each term is printed with the digits that are carried, as [Section 3.3 Molarity](/physical-sciences/chemistry/03-composition-of-substances-and-solutions/03-molarity/) advises, and only the total is rounded, so the total differs from the source’s in its last digit.

Converting the quantities in J to kJ permits them to be summed, yielding the total heat required:

$$\begin{aligned} &= 4.238\ \text{kJ} + 45.04\ \text{kJ} + 56.484\ \text{kJ} \\ &\quad + 304.67\ \text{kJ} + 5.033\ \text{kJ} = 415\ \text{kJ} \end{aligned}$$


NOTE: The value of $\Delta H_\text{vap}$ at the boiling point of water (40.656 kJ/mol) is used here instead of the value at standard temperature (44.01 kJ/mol).

{{< fillin
  question="What is the total amount of heat released when 94.0 g water at 80.0 °C cools to form ice at −30.0 °C? (The properties of water are in [Appendix E](/physical-sciences/chemistry/appendices/e-water-properties/).) Enter the heat in kilojoules."
  answer="68.7"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$68.7\ \text{kJ}$"
  hint="Break the cooling into its steps of temperature change and change of phase, with water’s specific heats and enthalpy of fusion from Appendix E."
>}}

## Summary

- Phase transitions are processes that convert matter from one physical state into another. There are six phase transitions between the three phases of matter. Melting, vaporization, and sublimation are all endothermic processes, requiring an input of heat to overcome intermolecular attractions. The reciprocal transitions of freezing, condensation, and deposition are all exothermic processes, involving heat as intermolecular attractive forces are established or strengthened. The temperatures at which phase transitions occur are determined by the relative strengths of intermolecular attractions and are, therefore, dependent on the chemical identity of the substance.

## Key equations

- $P = Ae^{-\Delta H_\text{vap}/RT}$
- $\ln P = -\frac{\Delta H_\text{vap}}{RT} + \ln A$
- $\ln\left(\frac{P_2}{P_1}\right) = \frac{\Delta H_\text{vap}}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$

## Key terms

- **boiling point** — temperature at which the vapor pressure of a liquid equals the pressure of the gas above it.
- **Clausius-Clapeyron equation** — mathematical relationship between the temperature, vapor pressure, and enthalpy of vaporization for a substance.
- **condensation** — change from a gaseous to a liquid state.
- **deposition** — change from a gaseous state directly to a solid state.
- **dynamic equilibrium** — state of a system in which reciprocal processes are occurring at equal rates.
- **freezing** — change from a liquid state to a solid state.
- **freezing point** — temperature at which the solid and liquid phases of a substance are in equilibrium; see also *melting point*.
- **melting** — change from a solid state to a liquid state.
- **melting point** — temperature at which the solid and liquid phases of a substance are in equilibrium; see also *freezing point*.
- **normal boiling point** — temperature at which a liquid’s vapor pressure equals 1 atm (760 torr).
- **sublimation** — change from solid state directly to gaseous state.
- **vapor pressure** — (also, equilibrium vapor pressure) pressure exerted by a vapor in equilibrium with a solid or a liquid at a given temperature.
- **vaporization** — change from liquid state to gaseous state.

## Practice

### Define phase transitions and phase transition temperatures

{{< selfcheck question="Identify two common observations indicating some liquids have sufficient vapor pressures to noticeably evaporate?" hint="Think about what you can see happen to a liquid left in an open container, and what you can notice with your other senses." >}}
We can see the amount of liquid in an open container decrease and we can smell the vapor of some liquids.
===CHECKS===
we can see the amount of liquid in an open container decrease
we can smell the vapor of some liquids
{{< /selfcheck >}}

{{< selfcheck question="When is the boiling point of a liquid equal to its normal boiling point?" hint="Compare the definition of the boiling point with the definition of the normal boiling point in the Boiling Points subsection." >}}
They are equal when the pressure of gas above the liquid is exactly 1 atm.
===CHECKS===
they are equal when the pressure of gas above the liquid
is exactly 1 atm
{{< /selfcheck >}}

{{< fillin
  question="Use the information in the graph of the vapor pressures of four liquids above to estimate the boiling point of water in Denver when the atmospheric pressure is 83.3 kPa. Enter the temperature you read from the graph, in degrees Celsius."
  answer="94.6"
  answerForm="reading:20"
  answerDisplay="$\text{approximately }95\ {}^\circ\text{C}$"
  hint="Find the stated pressure on the vertical axis, follow it across to the water curve, and read the temperature there."
>}}

{{< selfcheck question="Explain the following observation: It takes longer to cook an egg in Ft. Davis, Texas (altitude, 5000 feet above sea level) than it does in Boston (at sea level)." hint="Ask how the atmospheric pressure at an altitude changes the boiling point of water, and what a lower cooking temperature does to the changes in the egg." >}}
At 5000 feet, the atmospheric pressure is lower than at sea level, and water will therefore boil at a lower temperature. This lower temperature will cause the physical and chemical changes involved in cooking the egg to proceed more slowly, and a longer time is required to fully cook the egg.
===CHECKS===
at 5000 feet, the atmospheric pressure is lower than at sea level
water will therefore boil at a lower temperature
this lower temperature will cause the physical and chemical changes involved in cooking the egg to proceed more slowly
a longer time is required to fully cook the egg
{{< /selfcheck >}}

{{< selfcheck question="Explain the following observation: Perspiring is a mechanism for cooling the body." hint="Ask what the evaporation of water takes from its surroundings, and when sweat can evaporate at all." >}}
As long as the air surrounding the body contains less water vapor than the maximum that air can hold at that temperature, perspiration will evaporate, thereby cooling the body by removing the heat of vaporization required to vaporize the water.
===CHECKS===
as long as the air surrounding the body contains less water vapor than the maximum that air can hold at that temperature
perspiration will evaporate
cooling the body by removing the heat of vaporization required to vaporize the water
{{< /selfcheck >}}

### Explain the relation between phase transition temperatures and intermolecular attractive forces

{{< selfcheck question="What is the relationship between the intermolecular forces in a liquid and its vapor pressure?" hint="Reread the paragraph after the figure of the flask and manometer, on how intermolecular attractions impede vaporization." >}}
The vapor pressure of a liquid decreases as the strength of its intermolecular forces increases.
===CHECKS===
the vapor pressure of a liquid decreases
as the strength of its intermolecular forces increases
{{< /selfcheck >}}

{{< selfcheck question="Why does spilled gasoline evaporate more rapidly on a hot day than on a cold day?" hint="Use the graph of the distribution of kinetic energies at two temperatures in the Vaporization and Condensation subsection." >}}
As the temperature increases, the average kinetic energy of the molecules of gasoline increases and so a greater fraction of molecules have sufficient energy to escape from the liquid than at lower temperatures.
===CHECKS===
as the temperature increases, the average kinetic energy of the molecules of gasoline increases
a greater fraction of molecules have sufficient energy to escape from the liquid
{{< /selfcheck >}}

{{< selfcheck question="Explain why the molar enthalpies of vaporization of the following substances increase in the order CH₄ < C₂H₆ < C₃H₈, even though the type of IMF (dispersion) is the same." hint="Ask how the strength of dispersion forces depends on the size of the molecules, and what vaporizing a liquid requires of those forces." >}}
Dispersion forces increase with molecular mass or size. As the number of atoms composing the molecules in this homologous series increases, so does the extent of intermolecular attraction via dispersion forces and, consequently, the energy required to overcome these forces and vaporize the liquids.
===CHECKS===
dispersion forces increase with molecular mass or size
as the number of atoms composing the molecules in this homologous series increases, so does the extent of intermolecular attraction via dispersion forces
the energy required to overcome these forces and vaporize the liquids
{{< /selfcheck >}}

{{< multiplechoice question="The enthalpy of vaporization of CO₂(*l*) is 9.8 kJ/mol. Would you expect the enthalpy of vaporization of CS₂(*l*) to be 28 kJ/mol, 9.8 kJ/mol, or −8.4 kJ/mol? Discuss the plausibility of each of these answers." answer="28 kJ/mol" hint="Compare the intermolecular forces in the two liquids, and ask what the sign of an enthalpy of vaporization must be." >}}
28 kJ/mol
9.8 kJ/mol
−8.4 kJ/mol
{{< /multiplechoice >}}

{{< selfcheck question="The enthalpy of vaporization of CO₂(*l*) is 9.8 kJ/mol. Would you expect the enthalpy of vaporization of CS₂(*l*) to be 28 kJ/mol, 9.8 kJ/mol, or −8.4 kJ/mol? Discuss the plausibility of each of these answers." hint="Compare the intermolecular forces in the two liquids, and ask what the sign of an enthalpy of vaporization must be." >}}
The boiling point of CS₂ is higher than that of CO₂ partially because of the higher molecular weight of CS₂; consequently, the attractive forces are stronger in CS₂. It would be expected, therefore, that the heat of vaporization would be greater than that of 9.8 kJ/mol for CO₂. A value of 28 kJ/mol would seem reasonable. A value of −8.4 kJ/mol would indicate a release of energy upon vaporization, which is clearly implausible.
===CHECKS===
the attractive forces are stronger in CS₂
the heat of vaporization would be greater than that of 9.8 kJ/mol for CO₂
a value of 28 kJ/mol would seem reasonable
a value of −8.4 kJ/mol would indicate a release of energy upon vaporization, which is clearly implausible
{{< /selfcheck >}}

*Source note:* the enthalpy of vaporization of CO₂(*l*) in this exercise is the source’s. The NIST Chemistry WebBook [gives 16.4 kJ/mol at 258 K and 16.7 kJ/mol at 288 K](https://webbook.nist.gov/cgi/cbook.cgi?ID=C124389&Mask=4&Units=SI). The answer graded here follows the stem as printed.

### Describe the processes represented by typical heating and cooling curves, and compute heat flows and enthalpy changes accompanying these processes

{{< selfcheck question="Heat is added to ice at 0 °C. Explain why the temperature of the ice does not change. What does change?" hint="Use the heating curve of water: ask where the added heat goes while the substance is changing state." >}}
The heat is absorbed by the ice, providing the energy required to partially overcome intermolecular attractive forces in the solid and causing a phase transition to liquid water. The solution remains at 0 °C until all the ice is melted. Only the amount of water existing as ice changes until the ice disappears. Then the temperature of the water can rise.
===CHECKS===
the heat is absorbed by the ice, providing the energy required to partially overcome intermolecular attractive forces in the solid
causing a phase transition to liquid water
the solution remains at 0 °C until all the ice is melted
only the amount of water existing as ice changes until the ice disappears
{{< /selfcheck >}}

{{< selfcheck question="Ethyl chloride (boiling point, 13 °C) is used as a local anesthetic. When the liquid is sprayed on the skin, it cools the skin enough to freeze and numb it. Explain the cooling effect of liquid ethyl chloride." hint="Ask what a liquid needs to evaporate, and where it gets it when it is sprayed on the skin." >}}
The thermal energy (heat) needed to evaporate the liquid is removed from the skin.
===CHECKS===
the thermal energy (heat) needed to evaporate the liquid
is removed from the skin
{{< /selfcheck >}}

{{< fillin
  question="How much heat is required to convert 422 g of liquid H₂O at 23.5 °C into steam at 150 °C? (The properties of water are in [Appendix E](/physical-sciences/chemistry/appendices/e-water-properties/).) Enter the heat in kilojoules."
  answer="1127"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$1{,}127\ \text{kJ}$"
  hint="Break the change into heating the liquid, boiling it, and heating the steam, with water’s specific heats and its enthalpy of vaporization at the boiling point from Appendix E."
>}}

*Source note:* the answer graded here is not the one the source prints; the source’s value does not follow from the stem’s data and the properties of water in [Appendix E](/physical-sciences/chemistry/appendices/e-water-properties/).

{{< fillin
  question="Titanium tetrachloride, TiCl₄, has a melting point of −23.2 °C and has a $\Delta H_\text{fusion}$ = 9.37 kJ/mol. How much energy is required to melt 263.1 g TiCl₄? Enter the energy in kilojoules."
  answer="13.0"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$13.0\ \text{kJ}$"
  hint="Convert the mass to moles with a molar mass computed from the formula, then use the enthalpy of fusion."
>}}

{{< multiplechoice question="Titanium tetrachloride, TiCl₄, has a melting point of −23.2 °C and has a $\Delta H_\text{fusion}$ = 9.37 kJ/mol. For TiCl₄, which will likely have the larger magnitude: $\Delta H_\text{fusion}$ or $\Delta H_\text{vaporization}$? Explain your reasoning." answer="$\Delta H_\text{vaporization}$" hint="Ask how much of the intermolecular attraction each change must overcome." >}}
$\Delta H_\text{fusion}$
$\Delta H_\text{vaporization}$
{{< /multiplechoice >}}

{{< selfcheck question="Titanium tetrachloride, TiCl₄, has a melting point of −23.2 °C and has a $\Delta H_\text{fusion}$ = 9.37 kJ/mol. For TiCl₄, which will likely have the larger magnitude: $\Delta H_\text{fusion}$ or $\Delta H_\text{vaporization}$? Explain your reasoning." hint="Ask how much of the intermolecular attraction each change must overcome." >}}
It is likely that the heat of vaporization will have a larger magnitude since in the case of vaporization the intermolecular interactions have to be completely overcome, while melting weakens or destroys only some of them.
===CHECKS===
the heat of vaporization will have a larger magnitude
in the case of vaporization the intermolecular interactions have to be completely overcome
melting weakens or destroys only some of them
{{< /selfcheck >}}

---

<small>This section is adapted from [Chemistry 2e, Section 10.3: Phase Transitions](https://openstax.org/books/chemistry-2e/pages/10-3-phase-transitions) by Paul Flowers, Klaus Theopold, Richard Langley, William R. Robinson, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/chemistry-2e). Changes: the nine figures re-encoded as WebP, the sweat, melting-ice, and iodine photographs marked as photos and the other six as diagrams; every figure’s alt text written from the image (among other differences, the source alt of the vapor-pressure apparatus calls its pressure gauge a valve, and the source alt of the graph of vapor pressures gives axis values the graph does not print and calls ethyl alcohol ethanol); the structural formulas of the first example, which the source prints without a caption, shown without one; references to numbered figures replaced by describing phrases; the six worked examples set as prose, each followed by its Check Your Learning as an interactive item — one self-check and five fill-ins — the printed answers serving as their keys rather than appearing as text, each fill-in’s stem closing with a sentence that names the unit to enter, and the ether reading keyed to what the curve shows as the figure draws it, with the source’s approximate answer as its answer display; the table of the alcohols’ vapor pressures transcribed as a Markdown table above its self-check, whose stem says “the table above” where the source says “this table” and closes with a period where the source closes with a colon before the table; the source’s equations typeset as KaTeX math, with unit cancellation set with a diagonal strike, the enthalpy symbols and the quantity symbols set as math with descriptive subscripts upright, the pressures of the alcohol answer’s ordering set as math, the four-digit numbers in display math written with a digit-grouping comma, and the pair of two-point equations, the solution lines of the isooctane, benzene, and sweat examples, and the lines of the heating-curve example broken into aligned rows to fit the column; “Kelvin” written in lowercase as the unit’s name; the bonds of the –OH groups of ethylene glycol written with an en dash where the source types a minus sign; a Source note added after each of three items whose data are the source’s and differ from the NIST Chemistry WebBook’s measured values — the alcohols’ vapor pressures, the enthalpy of vaporization of liquid ammonia, and that of liquid carbon dioxide — each saying the values are the source’s; a parenthesis added to the stems of the cooling-water Check Your Learning and of the exercise on heating 422 g of water saying the properties of water are in Appendix E, linked to its page; each of the three references to the chapter on thermochemistry linked to the section it means, Section 5.1 or Section 5.3, the third written “the chapter on thermochemistry” where the source says “previous chapter”, since that chapter is chapter 5; the Celsius temperatures of the Clausius-Clapeyron examples converted to kelvin with 273.15 and carried where the source rounds them to the tenths place, with a Source note, so that the boiling point of benzene in Denver differs from the source’s in its last digit and the enthalpy of vaporization of isooctane is the same, and the kelvin result of the benzene example printed with its carried digits before it is converted to degrees Celsius; the molar mass of water computed from this book’s periodic table in the sweat example, with a Source note, its result being the same; the heating-curve example worked with the specific heats and the enthalpy of vaporization of water that Appendix E prints and with the molar mass of water from this book’s periodic table, each term printed with its carried digits and only the total rounded, with a Source note, so that its total differs from the source’s in its last digit and the note under it names the enthalpy of vaporization Appendix E prints, and the words of that example naming the values it uses linked to Appendix E; the Check Your Learning of the acetone example keyed to the value the stem’s temperatures give by this book’s conversion, with a Source note, where the source’s printed value does not follow from them; the end-of-section exercises adapted into the interactive Practice block, with the 12 exercises the source keys carried as 16 items: 3 fill-ins, 2 multiple-choice items, and 11 self-checks — each fill-in’s stem closing with a sentence that names the unit to enter (the Denver reading’s, what to read from the graph), the titanium tetrachloride exercise’s lead-in repeated in the stem of each of its three items, and its self-check’s model answer the source’s answer to its second part without the part’s letter; the two exercises that ask for a choice among the stem’s values or quantities and an explanation asked as a multiple-choice item over the stem’s own set, in its order, followed by a self-check with the source’s answer as its model, the lettered exercise of observations carried as one self-check per part with its lead-in restated in the singular, the Denver exercise asked as a graph reading, the Denver reading keyed to the vapor pressures of water in Appendix E, which the curve agrees with, and the exercise on heating 422 g of water keyed to the value the stem’s data and the properties of water in Appendix E give, with a Source note, where the source’s printed value does not follow from them; and the 12 exercises the source prints no answer for are omitted.</small>
