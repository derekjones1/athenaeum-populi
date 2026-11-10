---
title: Mathematical Treatment of Measurement Results
description: >-
  Dimensional analysis, the factor-label method, unit conversion factors, and
  conversions among the Fahrenheit, Celsius, and kelvin temperature scales —
  adapted from OpenStax Chemistry 2e, Section 1.6.
source_section: "1.6"
weight: 6
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Explain the dimensional analysis (factor label) approach to mathematical calculations involving quantities
- Use dimensional analysis to carry out unit conversions for a given property and computations involving two or more properties
{{< /callout >}}

It is often the case that a quantity of interest may not be easy (or even possible) to measure directly but instead must be calculated from other directly measured properties and appropriate mathematical relationships. For example, consider measuring the average speed of an athlete running sprints. This is typically accomplished by measuring the *time* required for the athlete to run from the starting line to the finish line, and the *distance* between these two lines, and then computing *speed* from the equation that relates these three properties:

$$\text{speed} = \frac{\text{distance}}{\text{time}}$$

An Olympic-quality sprinter can run 100 m in approximately 10 s, corresponding to an average speed of

$$\frac{100\ \text{m}}{10\ \text{s}} = 10\ \text{m/s}$$

(For this and the next calculation, assume the trailing zeros are significant digits.) Note that this simple arithmetic involves dividing the numbers of each measured quantity to yield the number of the computed quantity (100/10 = 10) *and likewise* dividing the units of each measured quantity to yield the unit of the computed quantity (m/s = m/s). Now, consider using this same relation to predict the time required for a person running at this speed to travel a distance of 25 m. The same relation among the three properties is used, but in this case, the two quantities provided are a speed (10 m/s) and a distance (25 m). To yield the sought property, time, the equation must be rearranged appropriately:

$$\text{time} = \frac{\text{distance}}{\text{speed}}$$

The time can then be computed as:

$$\frac{25\ \text{m}}{10\ \text{m/s}} = 2.5\ \text{s}$$

Again, arithmetic on the numbers (25/10 = 2.5) was accompanied by the same arithmetic on the units (m/(m/s) = s) to yield the number and unit of the result, 2.5 s. Note that, just as for numbers, when a unit is divided by an identical unit (in this case, m/m), the result is “1”—or, as commonly phrased, the units “cancel.”

These calculations are examples of a versatile mathematical approach known as **dimensional analysis** (or the **factor-label method**). Dimensional analysis is based on this premise: *the units of quantities must be subjected to the same mathematical operations as their associated numbers*. This method can be applied to computations ranging from simple unit conversions to more complex, multi-step calculations involving several different quantities.

## Conversion Factors and Dimensional Analysis

A ratio of two equivalent quantities expressed with different measurement units can be used as a **unit conversion factor**. For example, the lengths of 2.54 cm and 1 in. are equivalent (by definition), and so a unit conversion factor may be derived from the ratio,

$$\frac{2.54\ \text{cm}}{1\ \text{in.}}\ (2.54\ \text{cm} = 1\ \text{in.})\ \text{or}\ 2.54\ \frac{\text{cm}}{\text{in.}}$$

Several other commonly used conversion factors are given in the table below.

**Common Conversion Factors**

| Length | Volume | Mass |
|---|---|---|
| 1 m = 1.0936 yd | 1 L = 1.0567 qt | 1 kg = 2.2046 lb |
| 1 in. = 2.54 cm (exact) | 1 qt = 0.94635 L | 1 lb = 453.59 g\* |
| 1 km = 0.62137 mi | 1 ft³ = 28.317 L | 1 (avoirdupois) oz = 28.349 g |
| 1 mi = 1609.3 m | 1 tbsp = 14.787 mL | 1 (troy) oz = 31.103 g |

\* Strictly speaking, the ounce and pound are units of weight, $W$ (a force equal to the product of mass and gravitational acceleration, $W = mg$). The conversion relations in this table are commonly used to equate masses and weight assuming a nominal value for $g$ at the surface of the earth.

When a quantity (such as distance in inches) is multiplied by an appropriate unit conversion factor, the quantity is converted to an equivalent value with different units (such as distance in centimeters). For example, a basketball player’s vertical jump of 34 inches can be converted to centimeters by:

$$34\ \cancel{\text{in.}} \times \frac{2.54\ \text{cm}}{1\ \cancel{\text{in.}}} = 86\ \text{cm}$$

Since this simple arithmetic involves *quantities*, the premise of dimensional analysis requires that we multiply both *numbers and units*. The numbers of these two quantities are multiplied to yield the number of the product quantity, 86, whereas the units are multiplied to yield $\frac{\text{in.} \times \text{cm}}{\text{in.}}$. Just as for numbers, a ratio of identical units is also numerically equal to one, $\frac{\text{in.}}{\text{in.}} = 1$, and the unit product thus simplifies to *cm*. (When identical units divide to yield a factor of 1, they are said to “cancel.”) Dimensional analysis may be used to confirm the proper application of unit conversion factors as demonstrated in the following example.

**Example.** *Using a Unit Conversion Factor.* The mass of a competition frisbee is 125 g. Convert its mass to ounces using the unit conversion factor derived from the relationship 1 oz = 28.349 g (see the table above).

**Solution.** Given the conversion factor, the mass in ounces may be derived using an equation similar to the one used for converting length from inches to centimeters.

$$x\ \text{oz} = 125\ \text{g} \times \text{unit conversion factor}$$

The unit conversion factor may be represented as:

$$\frac{1\ \text{oz}}{28.349\ \text{g}}\ \text{and}\ \frac{28.349\ \text{g}}{1\ \text{oz}}$$

The correct unit conversion factor is the ratio that cancels the units of grams and leaves ounces.

$$\begin{aligned} x\ \text{oz} &= 125\ \cancel{\text{g}} \times \frac{1\ \text{oz}}{28.349\ \cancel{\text{g}}} \\ &= \left(\frac{125}{28.349}\right)\ \text{oz} \\ &= 4.41\ \text{oz (three significant figures)} \end{aligned}$$

{{< fillin
  question="Convert a volume of 9.345 qt to liters."
  answer="8.844"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$8.844\ \text{L}$"
  hint="Pick the quart–liter relationship from the table above and orient the factor so that quarts cancel."
>}}

Beyond simple unit conversions, the factor-label method can be used to solve more complex problems involving computations. Regardless of the details, the basic approach is the same—all the *factors* involved in the calculation must be appropriately oriented to ensure that their *labels* (units) will appropriately cancel and/or combine to yield the desired unit in the result. As your study of chemistry continues, you will encounter many opportunities to apply this approach.

**Example.** *Computing Quantities from Measurement Results and Known Mathematical Relations.* What is the density of common antifreeze in units of g/mL? A 4.00-qt sample of the antifreeze weighs 9.26 lb.

**Solution.** Since $\text{density} = \frac{\text{mass}}{\text{volume}}$, we need to divide the mass in grams by the volume in milliliters. This will require converting the provided volume from quarts to milliliters and converting the provided mass from pounds to grams. The necessary conversion factors are given in the table above: 1 lb = 453.59 g; 1 L = 1.0567 qt; 1 L = 1,000 mL. Mass may be converted from pounds to grams as follows:

$$9.26\ \cancel{\text{lb}} \times \frac{453.59\ \text{g}}{1\ \cancel{\text{lb}}} = 4.20 \times 10^{3}\ \text{g}$$

Volume may be converted from quarts to milliliters via two steps:

1. *Convert quarts to liters.*

   $$4.00\ \cancel{\text{qt}} \times \frac{1\ \text{L}}{1.0567\ \cancel{\text{qt}}} = 3.79\ \text{L}$$

2. *Convert liters to milliliters.*

   $$3.79\ \cancel{\text{L}} \times \frac{1000\ \text{mL}}{1\ \cancel{\text{L}}} = 3.79 \times 10^{3}\ \text{mL}$$

Then,

$$\text{density} = \frac{4.20 \times 10^{3}\ \text{g}}{3.79 \times 10^{3}\ \text{mL}} = 1.11\ \text{g/mL}$$

*Source note:* the source prints 3.78 L and $3.78 \times 10^{3}$ mL in these steps. The quotient is 3.785 L, which rounds to 3.79 L at three significant figures; the density is 1.11 g/mL either way.

Alternatively, the calculation could be set up in a way that uses three unit conversion factors sequentially as follows:

$$\frac{9.26\ \cancel{\text{lb}}}{4.00\ \cancel{\text{qt}}} \times \frac{453.59\ \text{g}}{1\ \cancel{\text{lb}}} \times \frac{1.0567\ \cancel{\text{qt}}}{1\ \cancel{\text{L}}} \times \frac{1\ \cancel{\text{L}}}{1000\ \text{mL}} = 1.11\ \text{g/mL}$$

{{< fillin
  question="What is the volume in liters of 1.000 oz, given that 1 L = 1.0567 qt and 1 qt = 32 oz (exactly)?"
  answer="2.957\times10^{-2}"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$2.957 \times 10^{-2}\ \text{L}$"
  hint="Chain two factors: ounces to quarts, then quarts to liters, each oriented so the unit you leave cancels."
>}}

**Example.** *Computing Quantities from Measurement Results and Known Mathematical Relations.* While being driven from Philadelphia to Atlanta, a distance of about 1250 km, a 2014 Lamborghini Aventador Roadster uses 213 L gasoline.

(a) What (average) fuel economy, in miles per gallon, did the Roadster get during this trip?

(b) If gasoline costs \$3.80 per gallon, what was the fuel cost for this trip?

**Solution.** (a) First convert distance from kilometers to miles:

$$1250\ \cancel{\text{km}} \times \frac{0.62137\ \text{mi}}{1\ \cancel{\text{km}}} = 777\ \text{mi}$$

and then convert volume from liters to gallons:

$$213\ \cancel{\text{L}} \times \frac{1.0567\ \cancel{\text{qt}}}{1\ \cancel{\text{L}}} \times \frac{1\ \text{gal}}{4\ \cancel{\text{qt}}} = 56.3\ \text{gal}$$

Finally,

$$\text{(average) mileage} = \frac{777\ \text{mi}}{56.3\ \text{gal}} = 13.8\ \text{miles/gallon} = 13.8\ \text{mpg}$$

Alternatively, the calculation could be set up in a way that uses all the conversion factors sequentially, as follows:

$$\frac{1250\ \cancel{\text{km}}}{213\ \cancel{\text{L}}} \times \frac{0.62137\ \text{mi}}{1\ \cancel{\text{km}}} \times \frac{1\ \cancel{\text{L}}}{1.0567\ \cancel{\text{qt}}} \times \frac{4\ \cancel{\text{qt}}}{1\ \text{gal}} = 13.8\ \text{mpg}$$

(b) Using the previously calculated volume in gallons, we find:

$$56.3\ \cancel{\text{gal}} \times \frac{\text{\textdollar}3.80}{1\ \cancel{\text{gal}}} = \text{\textdollar}214$$

{{< fillin
  question="A Toyota Prius Hybrid uses 59.7 L gasoline to drive from San Francisco to Seattle, a distance of 1300 km (two significant digits). What (average) fuel economy, in miles per gallon, did the Prius get during this trip?"
  answer="51"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$51\ \text{mpg}$"
  hint="Follow part (a) of the example above: kilometers to miles, liters to quarts to gallons, then miles per gallon."
>}}

{{< fillin
  question="A Toyota Prius Hybrid uses 59.7 L gasoline to drive from San Francisco to Seattle, a distance of 1300 km (two significant digits). If gasoline costs \$3.90 per gallon, what was the fuel cost for this trip? Enter the cost in dollars, to the nearest dollar."
  answer="62"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$\text{\textdollar}62$"
  hint="Follow part (b) of the example above: liters to quarts to gallons to dollars."
>}}

## Conversion of Temperature Units

We use the word **temperature** to refer to the hotness or coldness of a substance. One way we measure a change in temperature is to use the fact that most substances expand when their temperature increases and contract when their temperature decreases. The liquid in a common glass thermometer changes its volume as the temperature changes, and the position of the trapped liquid's surface along a printed scale may be used as a measure of temperature.

Temperature scales are defined relative to selected reference temperatures: Two of the most commonly used are the freezing and boiling temperatures of water at a specified atmospheric pressure. On the Celsius scale, 0 °C is defined as the freezing temperature of water and 100 °C as the boiling temperature of water. The space between the two temperatures is divided into 100 equal intervals, which we call degrees. On the **Fahrenheit** scale, the freezing point of water is defined as 32 °F and the boiling temperature as 212 °F. The space between these two points on a Fahrenheit thermometer is divided into 180 equal parts (degrees).

Defining the Celsius and Fahrenheit temperature scales as described in the previous paragraph results in a slightly more complex relationship between temperature values on these two scales than for different units of measure for other properties. Most measurement units for a given property are directly proportional to one another ($y = mx$). Using familiar length units as one example:

$$\text{length in feet} = \left(\frac{1\ \text{ft}}{12\ \text{in.}}\right) \times \text{length in inches}$$

where $y$ = length in feet, $x$ = length in inches, and the proportionality constant, $m$, is the conversion factor. The Celsius and Fahrenheit temperature scales, however, do not share a common zero point, and so the relationship between these two scales is a linear one rather than a proportional one ($y = mx + b$). Consequently, converting a temperature from one of these scales into the other requires more than simple multiplication by a conversion factor, $m$; it also must take into account differences in the scales’ zero points ($b$).

The linear equation relating Celsius and Fahrenheit temperatures is easily derived from the two temperatures used to define each scale. Representing the Celsius temperature as $x$ and the Fahrenheit temperature as $y$, the slope, $m$, is computed to be:

$$m = \frac{\Delta y}{\Delta x} = \frac{212\ {}^\circ\text{F} - 32\ {}^\circ\text{F}}{100\ {}^\circ\text{C} - 0\ {}^\circ\text{C}} = \frac{180\ {}^\circ\text{F}}{100\ {}^\circ\text{C}} = \frac{9\ {}^\circ\text{F}}{5\ {}^\circ\text{C}}$$

The $y$-intercept of the equation, $b$, is then calculated using either of the equivalent temperature pairs, (100 °C, 212 °F) or (0 °C, 32 °F), as:

$$b = y - mx = 32\ {}^\circ\text{F} - \frac{9\ {}^\circ\text{F}}{5\ {}^\circ\text{C}} \times 0\ {}^\circ\text{C} = 32\ {}^\circ\text{F}$$

The equation relating the temperature ($T$) scales is then:

$$T_{{}^\circ\text{F}} = \left(\frac{9\ {}^\circ\text{F}}{5\ {}^\circ\text{C}} \times T_{{}^\circ\text{C}}\right) + 32\ {}^\circ\text{F}$$

An abbreviated form of this equation that omits the measurement units is:

$$T_{{}^\circ\text{F}} = \left(\frac{9}{5} \times T_{{}^\circ\text{C}}\right) + 32$$

Rearrangement of this equation yields the form useful for converting from Fahrenheit to Celsius:

$$T_{{}^\circ\text{C}} = \frac{5}{9}\left(T_{{}^\circ\text{F}} - 32\right)$$

As mentioned earlier in this chapter, the SI unit of temperature is the kelvin (K). Unlike the Celsius and Fahrenheit scales, the kelvin scale is an absolute temperature scale in which 0 (zero) K corresponds to the lowest temperature that can theoretically be achieved. Since the kelvin temperature scale is absolute, a degree symbol is not included in the unit abbreviation, K. The early 19th-century discovery of the relationship between a gas’s volume and temperature suggested that the volume of a gas would be zero at −273.15 °C. In 1848, British physicist William Thomson, who later adopted the title of Lord Kelvin, proposed an absolute temperature scale based on this concept (further treatment of this topic is provided in this text’s chapter on gases).

The freezing temperature of water on this scale is 273.15 K and its boiling temperature is 373.15 K. Notice the numerical difference in these two reference temperatures is 100, the same as for the Celsius scale, and so the linear relation between these two temperature scales will exhibit a slope of $1\ \frac{\text{K}}{{}^\circ\text{C}}$. Following the same approach, the equations for converting between the kelvin and Celsius temperature scales are derived to be:

$$T_\text{K} = T_{{}^\circ\text{C}} + 273.15$$

$$T_{{}^\circ\text{C}} = T_\text{K} - 273.15$$

The 273.15 in these equations is exact: it is part of the definition of the Celsius scale. The figure below shows the relationship among the three temperature scales.

*Source note:* the source says the 273.15 “has been determined experimentally, so it is not exact”. A Celsius temperature is defined as the kelvin temperature minus 273.15, exactly (BIPM, *The International System of Units*, 9th edition, 2019).

{{< mediafigure src="chemistry/CNX_Chem_01_06_TempScales" kind="diagram" eager="true" alt="Three upright thermometers side by side, headed Fahrenheit, Celsius, and kelvin. A line labeled boiling point of water crosses all three at 212 °F, 100 °C, and 373.15 K. A line labeled freezing point of water crosses them at 32 °F, 0 °C, and 273.15 K. A bracket between the two lines on each thermometer is labeled 180 Fahrenheit degrees, 100 Celsius degrees, and 100 kelvins. A lower line joins −40 °F, −40 °C, and 233.15 K." >}}
The Fahrenheit, Celsius, and kelvin temperature scales are compared.
{{< /mediafigure >}}

Although the kelvin (absolute) temperature scale is the official SI temperature scale, Celsius is commonly used in many scientific contexts and is the scale of choice for nonscience contexts in almost all areas of the world. Very few countries (the U.S. and its territories, the Bahamas, Belize, Cayman Islands, and Palau) still use Fahrenheit for weather, medicine, and cooking.

**Example.** *Conversion from Celsius.* Normal body temperature has been commonly accepted as 37.0 °C (although it varies depending on time of day and method of measurement, as well as among individuals). What is this temperature on the kelvin scale and on the Fahrenheit scale?

**Solution.**

$$\begin{aligned} \text{K} &= {}^\circ\text{C} + 273.15 = 37.0 + 273.15 \\ &= 310.2\ \text{K} \qquad \text{(310.15 rounded to the tenths place)} \end{aligned}$$

$${}^\circ\text{F} = \frac{9}{5}\,{}^\circ\text{C} + 32.0 = \left(\frac{9}{5} \times 37.0\right) + 32.0 = 66.6 + 32.0 = 98.6\ {}^\circ\text{F}$$

{{< fillin
  question="Convert 80.92 °C to K and °F. Enter the temperature in kelvin."
  answer="354.07"
  answerForm="sig-figs:5 last-digit:0"
  answerDisplay="$354.07\ \text{K}$"
  hint="Use the kelvin–Celsius equation above."
>}}

{{< fillin
  question="Convert 80.92 °C to K and °F. Enter the temperature in degrees Fahrenheit."
  answer="177.7"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$177.7\ {}^\circ\text{F}$"
  hint="Use the Celsius-to-Fahrenheit equation above."
>}}

*Source note:* the answer graded here is not the one the source prints for the Fahrenheit temperature; the source's printed answer is not rounded by the significant-figure rules of Section 1.5 Measurement Uncertainty, Accuracy, and Precision.

**Example.** *Conversion from Fahrenheit.* Baking a ready-made pizza calls for an oven temperature of 450 °F. If you are in Europe, and your oven thermometer uses the Celsius scale, what is the setting? What is the kelvin temperature?

**Solution.**

$$\begin{aligned} {}^\circ\text{C} &= \frac{5}{9}({}^\circ\text{F} - 32) = \frac{5}{9}(450 - 32) = \frac{5}{9} \times 418 = 232\ {}^\circ\text{C} \\ &\longrightarrow \text{set oven to } 230\ {}^\circ\text{C} \qquad \text{(two significant figures)} \end{aligned}$$

$$\begin{aligned} \text{K} &= {}^\circ\text{C} + 273.15 = \frac{5}{9}({}^\circ\text{F} - 32) + 273.15 \\ &= \frac{5}{9}(450 - 32) + 273.15 = 505.4\ \text{K} \\ &\longrightarrow 5.1 \times 10^{2}\ \text{K} \end{aligned}$$

{{< fillin
  question="Convert 50 °F to °C and K. (two significant figures) Enter the temperature in degrees Celsius."
  answer="10"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$10\ {}^\circ\text{C}$"
  hint="Use the Fahrenheit-to-Celsius equation above."
>}}

{{< fillin
  question="Convert 50 °F to °C and K. (two significant figures) Enter the temperature in kelvin."
  answer="280"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$280\ \text{K}$"
  hint="Find the Celsius temperature first, then use the kelvin–Celsius equation above."
>}}

## Summary

- Measurements are made using a variety of units. It is often useful or necessary to convert a measured quantity from one unit into another. These conversions are accomplished using unit conversion factors, which are derived by simple applications of a mathematical approach called the factor-label method or dimensional analysis. This strategy is also employed to calculate sought quantities using measured quantities and appropriate mathematical relations.

## Key equations

- $T_{{}^\circ\text{C}} = \frac{5}{9}\left(T_{{}^\circ\text{F}} - 32\right)$
- $T_{{}^\circ\text{F}} = \left(\frac{9}{5} \times T_{{}^\circ\text{C}}\right) + 32$
- $T_\text{K} = T_{{}^\circ\text{C}} + 273.15$
- $T_{{}^\circ\text{C}} = T_\text{K} - 273.15$

## Key terms

- **dimensional analysis** — (also, factor-label method) versatile mathematical strategy for calculations involving quantities that subjects the quantities’ units to the same mathematical operations as their numbers.
- **factor-label method** — (also, dimensional analysis) versatile mathematical strategy for calculations involving quantities that subjects the quantities’ units to the same mathematical operations as their numbers.
- **Fahrenheit** — unit of temperature; water freezes at 32 °F and boils at 212 °F on this scale.
- **temperature** — intensive property representing the hotness or coldness of matter.
- **unit conversion factor** — ratio of equivalent quantities expressed with different units; used to convert from one unit to a different unit.

## Practice

### Explain the dimensional analysis (factor label) approach to mathematical calculations involving quantities

{{< fillin
  question="Write a conversion factor (as a ratio) for the number of: yards in 1 meter. Enter the number of yards that goes over 1 m."
  answer="1.0936"
  answerForm="sig-figs:5 last-digit:1"
  answerDisplay="$\tfrac{1.0936\ \text{yd}}{1\ \text{m}}$"
  hint="Find the length relationship between meters and yards in the conversion-factor table."
>}}

{{< fillin
  question="Write a conversion factor (as a ratio) for the number of: liters in 1 liquid quart. Enter the number of liters that goes over 1 qt."
  answer="0.94635"
  answerForm="sig-figs:5 last-digit:1"
  answerDisplay="$\tfrac{0.94635\ \text{L}}{1\ \text{qt}}$"
  hint="Find the volume relationship that starts from 1 qt in the conversion-factor table."
>}}

{{< fillin
  question="Write a conversion factor (as a ratio) for the number of: pounds in 1 kilogram. Enter the number of pounds that goes over 1 kg."
  answer="2.2046"
  answerForm="sig-figs:5 last-digit:1"
  answerDisplay="$\tfrac{2.2046\ \text{lb}}{1\ \text{kg}}$"
  hint="Find the mass relationship that starts from 1 kg in the conversion-factor table."
>}}

{{< fillin
  question="The label on a soft drink bottle gives the volume in two units: 2.0 L and 67.6 fl oz. Use this information to derive a conversion factor between the English and metric units. How many significant figures can you justify in your conversion factor? Enter the number of significant figures."
  answer="2"
  answerForm="whole-number"
  answerDisplay="2"
  hint="A quotient keeps as many significant figures as the measured value with the fewest."
>}}

{{< fillin
  question="The label on a soft drink bottle gives the volume in two units: 2.0 L and 67.6 fl oz. Use this information to derive a conversion factor between the English and metric units. How many significant figures can you justify in your conversion factor? Enter the conversion factor in L/fl oz."
  answer="0.030"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$\tfrac{2.0\ \text{L}}{67.6\ \text{fl oz}} = \tfrac{0.030\ \text{L}}{1\ \text{fl oz}}$"
  hint="Use the definition of a unit conversion factor and the rounding rule for division."
>}}

### Use dimensional analysis to carry out unit conversions for a given property and computations involving two or more properties

{{< fillin
  question="Soccer is played with a round ball having a circumference between 27 and 28 in. and a weight between 14 and 16 oz. What are these specifications in units of centimeters and grams? Enter the smallest circumference in centimeters."
  answer="69"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$69\ \text{cm}$"
  hint="Find the factor that relates inches and centimeters in the table of conversion factors, and decide which unit must cancel."
>}}

*Source note:* the answer graded here is not the one the source prints for the smallest circumference; the source's value does not follow from the stem's data.

{{< fillin
  question="Soccer is played with a round ball having a circumference between 27 and 28 in. and a weight between 14 and 16 oz. What are these specifications in units of centimeters and grams? Enter the largest circumference in centimeters."
  answer="71"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$71\ \text{cm}$"
  hint="Find the factor that relates inches and centimeters in the table of conversion factors, and decide which unit must cancel."
>}}

{{< fillin
  question="Soccer is played with a round ball having a circumference between 27 and 28 in. and a weight between 14 and 16 oz. What are these specifications in units of centimeters and grams? Enter the smallest weight in grams."
  answer="400"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$400\ \text{g}$"
  hint="Find the factor that relates avoirdupois ounces and grams in the table of conversion factors, and decide which unit must cancel."
>}}

{{< fillin
  question="Soccer is played with a round ball having a circumference between 27 and 28 in. and a weight between 14 and 16 oz. What are these specifications in units of centimeters and grams? Enter the largest weight in grams."
  answer="450"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$450\ \text{g}$"
  hint="Find the factor that relates avoirdupois ounces and grams in the table of conversion factors, and decide which unit must cancel."
>}}

{{< fillin
  question="How many milliliters of a soft drink are contained in a 12.0-oz can?"
  answer="355"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$355\ \text{mL}$"
  hint="Fluid ounces to quarts to liters to milliliters; the 1.000 oz Check Your Learning above gives the ounce–quart relationship."
>}}

{{< fillin
  question="The diameter of a red blood cell is about $3 \times 10^{-4}$ in. What is its diameter in centimeters?"
  answer="8\times10^{-4}"
  answerForm="sig-figs:1 last-digit:0"
  answerDisplay="$8 \times 10^{-4}\ \text{cm}$"
  hint="Find the factor that relates inches and centimeters in the table of conversion factors, and decide which unit must cancel."
>}}

{{< fillin
  question="Is a 197-lb weight lifter light enough to compete in a class limited to those weighing 90 kg or less? Enter the weight lifter’s weight in kilograms."
  answer="89.4"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$89.4\ \text{kg}$"
  hint="Use the kilogram–pound factor from the table, oriented so pounds cancel."
>}}

{{< multiplechoice
  question="Is a 197-lb weight lifter light enough to compete in a class limited to those weighing 90 kg or less?"
  answer="yes"
  hint="Compare the weight you converted to kilograms with the class limit."
>}}
yes
no
{{< /multiplechoice >}}

{{< fillin
  question="Many medical laboratory tests are run using 5.0 µL blood serum. What is this volume in milliliters?"
  answer="5.0\times10^{-3}"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$5.0 \times 10^{-3}\ \text{mL}$"
  hint="Microliters to liters to milliliters, with the power of ten of each prefix from the table of common unit prefixes in Section 1.4 Measurements."
>}}

{{< fillin
  question="Use scientific (exponential) notation to express the following quantity in terms of the SI base units in the table of base units in Section 1.4 Measurements: 0.13 g. Enter the value without its unit."
  answer="1.3\times10^{-4}"
  answerForm="sig-figs:2 last-digit:0 scientific-notation"
  answerDisplay="$1.3 \times 10^{-4}\ \text{kg}$"
  hint="Identify the SI base unit for this property, then convert using the power of ten of each prefix."
>}}

{{< fillin
  question="Use scientific (exponential) notation to express the following quantity in terms of the SI base units in the table of base units in Section 1.4 Measurements: 232 Gg. Enter the value without its unit."
  answer="2.32\times10^{8}"
  answerForm="sig-figs:3 last-digit:0 scientific-notation"
  answerDisplay="$2.32 \times 10^{8}\ \text{kg}$"
  hint="Identify the SI base unit for this property, then convert using the power of ten of each prefix."
>}}

{{< fillin
  question="Use scientific (exponential) notation to express the following quantity in terms of the SI base units in the table of base units in Section 1.4 Measurements: 5.23 pm. Enter the value without its unit."
  answer="5.23\times10^{-12}"
  answerForm="sig-figs:3 last-digit:0 scientific-notation"
  answerDisplay="$5.23 \times 10^{-12}\ \text{m}$"
  hint="Identify the SI base unit for this property, then convert using the power of ten of the prefix."
>}}

{{< fillin
  question="Use scientific (exponential) notation to express the following quantity in terms of the SI base units in the table of base units in Section 1.4 Measurements: 86.3 mg. Enter the value without its unit."
  answer="8.63\times10^{-5}"
  answerForm="sig-figs:3 last-digit:0 scientific-notation"
  answerDisplay="$8.63 \times 10^{-5}\ \text{kg}$"
  hint="Identify the SI base unit for this property, then convert using the power of ten of each prefix."
>}}

{{< fillin
  question="Use scientific (exponential) notation to express the following quantity in terms of the SI base units in the table of base units in Section 1.4 Measurements: 37.6 cm. Enter the value without its unit."
  answer="3.76\times10^{-1}"
  answerForm="sig-figs:3 last-digit:0 scientific-notation"
  answerDisplay="$3.76 \times 10^{-1}\ \text{m}$"
  hint="Identify the SI base unit for this property, then convert using the power of ten of the prefix."
>}}

{{< fillin
  question="Use scientific (exponential) notation to express the following quantity in terms of the SI base units in the table of base units in Section 1.4 Measurements: 54 µm. Enter the value without its unit."
  answer="5.4\times10^{-5}"
  answerForm="sig-figs:2 last-digit:0 scientific-notation"
  answerDisplay="$5.4 \times 10^{-5}\ \text{m}$"
  hint="Identify the SI base unit for this property, then convert using the power of ten of the prefix."
>}}

{{< fillin
  question="Use scientific (exponential) notation to express the following quantity in terms of the SI base units in the table of base units in Section 1.4 Measurements: 1 Ts. Enter the value without its unit."
  answer="1\times10^{12}"
  answerForm="sig-figs:1 last-digit:0 scientific-notation"
  answerDisplay="$1 \times 10^{12}\ \text{s}$"
  hint="Identify the SI base unit for this property, then convert using the power of ten of the prefix."
>}}

{{< fillin
  question="Use scientific (exponential) notation to express the following quantity in terms of the SI base units in the table of base units in Section 1.4 Measurements: 27 ps. Enter the value without its unit."
  answer="2.7\times10^{-11}"
  answerForm="sig-figs:2 last-digit:0 scientific-notation"
  answerDisplay="$2.7 \times 10^{-11}\ \text{s}$"
  hint="Identify the SI base unit for this property, then convert using the power of ten of the prefix."
>}}

{{< fillin
  question="Use scientific (exponential) notation to express the following quantity in terms of the SI base units in the table of base units in Section 1.4 Measurements: 0.15 mK. Enter the value without its unit."
  answer="1.5\times10^{-4}"
  answerForm="sig-figs:2 last-digit:0 scientific-notation"
  answerDisplay="$1.5 \times 10^{-4}\ \text{K}$"
  hint="Identify the SI base unit for this property, then convert using the power of ten of the prefix."
>}}

{{< fillin
  question="Gasoline is sold by the liter in many countries. How many liters are required to fill a 12.0-gal gas tank?"
  answer="45.4"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$45.4\ \text{L}$"
  hint="Gallons to quarts (as in the fuel-economy example above) to liters, the last step with a factor from the table of conversion factors."
>}}

{{< fillin
  question="A long ton is defined as exactly 2240 lb. What is this mass in kilograms?"
  answer="1.0160\times10^{3}"
  answerForm="sig-figs:5 last-digit:1"
  answerDisplay="$1.0160 \times 10^{3}\ \text{kg}$"
  hint="Find a factor that relates pounds and kilograms (or pounds and grams) in the table of conversion factors, and decide which unit must cancel."
>}}

{{< fillin
  question="Make the conversion indicated in the following: the length of a soccer field, 120 m (three significant figures), to feet."
  answer="394"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$394\ \text{ft}$"
  hint="Meters to centimeters to inches, with the inch–centimeter factor from the table of conversion factors, then inches to feet with the feet–inches relation in the Conversion of Temperature Units subsection."
>}}

{{< fillin
  question="Make the conversion indicated in the following: the height of Mt. Kilimanjaro, at 19,565 ft, the highest mountain in Africa, to kilometers."
  answer="5.9634"
  answerForm="sig-figs:5 last-digit:2"
  answerDisplay="$5.9634\ \text{km}$"
  hint="Chain feet to inches to centimeters (both exact), then centimeters to kilometers."
>}}

{{< fillin
  question="Make the conversion indicated in the following: the area of an 8.5- × 11-inch sheet of paper in cm². Enter the area in square centimeters."
  answer="6.0\times10^{2}"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$6.0 \times 10^{2}\ \text{cm}^2$"
  hint="Use the area of a rectangle and the factor that relates inches and centimeters in the table of conversion factors."
>}}

{{< fillin
  question="Make the conversion indicated in the following: the displacement volume of an automobile engine, 161 in.³, to liters."
  answer="2.64"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$2.64\ \text{L}$"
  hint="Cubic inches to cubic centimeters to milliliters to liters, with the inch–centimeter factor from the table of conversion factors."
>}}

{{< fillin
  question="Make the conversion indicated in the following: the estimated mass of the atmosphere, $5.6 \times 10^{15}$ tons, to kilograms. (1 ton = 2000 lb.)"
  answer="5.1\times10^{18}"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$5.1 \times 10^{18}\ \text{kg}$"
  hint="Convert tons to pounds with the relationship the question gives, then pounds to kilograms with the table."
>}}

{{< fillin
  question="Make the conversion indicated in the following: the mass of a bushel of rye, 32.0 lb, to kilograms."
  answer="14.5"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$14.5\ \text{kg}$"
  hint="Use the kilogram–pound factor from the table, oriented so pounds cancel."
>}}

{{< fillin
  question="Make the conversion indicated in the following: the mass of a 5.00-grain aspirin tablet to milligrams (1 grain = 0.00229 oz)."
  answer="325"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$325\ \text{mg}$"
  hint="Chain grains to ounces, ounces to grams with the avoirdupois-ounce factor from the table of conversion factors, then grams to milligrams."
>}}

{{< fillin
  question="A chemist’s 50-Trillion Angstrom Run (50 trillion Å, two significant figures) would be an archeologist’s 10,900 cubit run. How long is one cubit in meters and in feet? (1 Å = $1 \times 10^{-8}$ cm) Enter the length of one cubit in meters."
  answer="0.46"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$0.46\ \text{m}$"
  hint="Angstroms to centimeters to meters for the whole run, then meters per cubit."
>}}

{{< fillin
  question="A chemist’s 50-Trillion Angstrom Run (50 trillion Å, two significant figures) would be an archeologist’s 10,900 cubit run. How long is one cubit in meters and in feet? (1 Å = $1 \times 10^{-8}$ cm) Enter the length of one cubit in feet."
  answer="1.5"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$1.5\ \text{ft/cubit}$"
  hint="Convert the length of one cubit from meters to centimeters to inches, with the inch–centimeter factor from the table of conversion factors, then inches to feet with the feet–inches relation in the Conversion of Temperature Units subsection."
>}}

{{< fillin
  question="As an instructor is preparing for an experiment, he requires 225 g phosphoric acid. The only container readily available is a 150-mL Erlenmeyer flask. Is it large enough to contain the acid, whose density is 1.83 g/mL? Enter the acid’s volume in milliliters."
  answer="123"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$123\ \text{mL}$"
  hint="Use the definition of density."
>}}

{{< multiplechoice
  question="As an instructor is preparing for an experiment, he requires 225 g phosphoric acid. The only container readily available is a 150-mL Erlenmeyer flask. Is it large enough to contain the acid, whose density is 1.83 g/mL?"
  answer="yes"
  hint="Compare the acid’s volume, from its mass and density, with the flask’s volume."
>}}
yes
no
{{< /multiplechoice >}}

{{< fillin
  question="A chemistry student is 159 cm tall and weighs 45.8 kg. What is her height in inches and weight in pounds? Enter her height in inches."
  answer="62.6"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$62.6\ \text{in.}$ (about 5 ft 3 in.)"
  hint="Find the factor that relates inches and centimeters in the table of conversion factors, and decide which unit must cancel."
>}}

{{< fillin
  question="A chemistry student is 159 cm tall and weighs 45.8 kg. What is her height in inches and weight in pounds? Enter her weight in pounds."
  answer="101"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$101\ \text{lb}$"
  hint="Use the kilogram–pound factor from the table, oriented so kilograms cancel."
>}}

{{< fillin
  question="Solve this problem about lumber dimensions. To describe to a European how houses are constructed in the US, the dimensions of “two-by-four” lumber must be converted into metric units. The thickness × width × length dimensions are 1.50 in. × 3.50 in. × 8.00 ft in the US. What are the dimensions in cm × cm × m? Enter the thickness in centimeters."
  answer="3.81"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$3.81\ \text{cm}$"
  hint="Find the factor that relates inches and centimeters in the table of conversion factors, and decide which unit must cancel."
>}}

{{< fillin
  question="Solve this problem about lumber dimensions. To describe to a European how houses are constructed in the US, the dimensions of “two-by-four” lumber must be converted into metric units. The thickness × width × length dimensions are 1.50 in. × 3.50 in. × 8.00 ft in the US. What are the dimensions in cm × cm × m? Enter the width in centimeters."
  answer="8.89"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$8.89\ \text{cm}$"
  hint="Find the factor that relates inches and centimeters in the table of conversion factors, and decide which unit must cancel."
>}}

{{< fillin
  question="Solve this problem about lumber dimensions. To describe to a European how houses are constructed in the US, the dimensions of “two-by-four” lumber must be converted into metric units. The thickness × width × length dimensions are 1.50 in. × 3.50 in. × 8.00 ft in the US. What are the dimensions in cm × cm × m? Enter the length in meters."
  answer="2.44"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$2.44\ \text{m}$"
  hint="Feet to inches to centimeters to meters."
>}}

{{< fillin
  question="Solve this problem about lumber dimensions. This lumber can be used as vertical studs, which are typically placed 16.0 in. apart. What is that distance in centimeters?"
  answer="40.6"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$40.6\ \text{cm}$"
  hint="Find the factor that relates inches and centimeters in the table of conversion factors, and decide which unit must cancel."
>}}

{{< fillin
  question="Calculate the density of aluminum if 27.6 cm³ has a mass of 74.6 g. Enter the density in g/cm³."
  answer="2.70"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$2.70\ \text{g/cm}^3$"
  hint="Use the definition of density and the rounding rule for division."
>}}

{{< fillin
  question="Calculate this mass. What is the mass of 6.00 cm³ of mercury, density = 13.5939 g/cm³? Enter the mass in grams."
  answer="81.6"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$81.6\ \text{g}$"
  hint="Use the definition of density."
>}}

{{< fillin
  question="Calculate this mass. What is the mass of 25.0 mL octane, density = 0.702 g/cm³? Enter the mass in grams."
  answer="17.6"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$17.6\ \text{g}$"
  hint="Use the definition of density and the relationship between milliliters and cubic centimeters."
>}}

{{< fillin
  question="Calculate this volume. What is the volume of 25 g iodine, density = 4.93 g/cm³? Enter the volume in milliliters."
  answer="5.1"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$5.1\ \text{mL}$"
  hint="Use the definition of density and the relationship between cubic centimeters and milliliters."
>}}

{{< fillin
  question="Calculate this volume. What is the volume of 3.28 g gaseous hydrogen, density = 0.089 g/L? Enter the volume in liters."
  answer="37"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$37\ \text{L}$"
  hint="Use the definition of density and the rounding rule for division."
>}}

{{< fillin
  question="Convert the boiling temperature of gold, 2966 °C, into degrees Fahrenheit and kelvin. Enter the temperature in degrees Fahrenheit."
  answer="5371"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$5{,}371\ {}^\circ\text{F}$"
  hint="Use the Celsius-to-Fahrenheit equation in the Key equations list."
>}}

{{< fillin
  question="Convert the boiling temperature of gold, 2966 °C, into degrees Fahrenheit and kelvin. Enter the temperature in kelvin."
  answer="3239"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$3{,}239\ \text{K}$"
  hint="Use the kelvin–Celsius equation in the Key equations list and the rounding rule for addition."
>}}

{{< fillin
  question="Convert the temperature of the coldest area in a freezer, −10 °F (two significant figures), to degrees Celsius and kelvin. Enter the temperature in degrees Celsius."
  answer="-23"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$-23\ {}^\circ\text{C}$"
  hint="Use the Fahrenheit-to-Celsius equation in the Key equations list."
>}}

{{< fillin
  question="Convert the temperature of the coldest area in a freezer, −10 °F (two significant figures), to degrees Celsius and kelvin. Enter the temperature in kelvin."
  answer="250"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$250\ \text{K}$"
  hint="Find the Celsius temperature first, then use the kelvin–Celsius equation in the Key equations list."
>}}

{{< fillin
  question="Convert the boiling temperature of liquid ammonia, −28.1 °F, into degrees Celsius and kelvin. Enter the temperature in degrees Celsius."
  answer="-33.4"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$-33.4\ {}^\circ\text{C}$"
  hint="Use the Fahrenheit-to-Celsius equation in the Key equations list."
>}}

{{< fillin
  question="Convert the boiling temperature of liquid ammonia, −28.1 °F, into degrees Celsius and kelvin. Enter the temperature in kelvin."
  answer="239.8"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$239.8\ \text{K}$"
  hint="Find the Celsius temperature first, then use the kelvin–Celsius equation in the Key equations list and the rounding rule for addition."
>}}

{{< fillin
  question="The weather in Europe was unusually warm during the summer of 1995. The TV news reported temperatures as high as 45 °C. What was the temperature on the Fahrenheit scale?"
  answer="113"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$113\ {}^\circ\text{F}$"
  hint="Use the Celsius-to-Fahrenheit equation in the Key equations list."
>}}

---

<small>This section is adapted from [Chemistry 2e, Section 1.6: Mathematical Treatment of Measurement Results](https://openstax.org/books/chemistry-2e/pages/1-6-mathematical-treatment-of-measurement-results) by Paul Flowers, Klaus Theopold, Richard Langley, William R. Robinson, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/chemistry-2e). Changes: the source's equations typeset as KaTeX math, with unit cancellation set with a diagonal strike; the five worked examples set as prose, each followed by its Check Your Learning as interactive fill-ins (eight in all, one per quantity the printed answer gives), the printed answers serving as their keys rather than appearing as text; the conversion-factor table transcribed as a Markdown table with its title as a bold line above it and its footnote, on the pound–gram row, set as an asterisked note below it; cross-references to the table and the figure written as “the table below”, “the table above”, or “the figure below”, and the reference to the SI base-units table of Section 1.4 written out as text; the temperature-scales figure re-encoded as WebP and marked as a diagram, its alt text written from the artwork; the micro prefix written with the micro sign (µ) where the source uses the Greek letter mu; the four-digit temperatures in two answer displays written with a digit-grouping comma; the four key equations listed as inline math, set in the forms the body derives them in, where the source's list writes the unit symbols °C and K in place of the temperatures in the two kelvin–Celsius equations and adds a multiplication sign to the Fahrenheit-to-Celsius equation; the two solution lines of the oven-temperature example and the kelvin line of the body-temperature example broken into aligned rows to fit the column; the body-temperature example's kelvin line written with the exact 273.15 and the sum rounded to the tenths place, where the source rounds 273.15 before adding; the 22 end-of-section exercises the source keys adapted into the interactive Practice block as 52 fill-ins and 2 multiple-choice items, every one at its source key except the one corrected below, one item per lettered part and one fill-in per quantity of a multi-quantity answer, with a sentence added after a stem that leaves it open saying which quantity to enter and in what unit — the conversion-factor ratios of the first exercise asked as the number written over one unit, the soft-drink exercise asked as the count of significant figures and then the factor, the other order from the source’s sentence, the two yes-or-no exercises asked as the computed quantity and then a yes/no choice, the fuel-cost item asked to the nearest dollar, and the SI base-units parts asked “Enter the value without its unit” rather than naming a unit, because naming the SI base unit would give it away; the cubit exercise’s cross-reference to the preceding Angstrom Run exercise, which this page omits, replaced by the data from that exercise that the keys rely on, restated in parentheses (50 trillion Å, two significant figures); the short ton the atmosphere-mass part assumes, 1 ton = 2000 lb, which neither the stem nor the module states, added to that stem in parentheses; “(two significant figures)” added to the freezer exercise’s −10 °F, the count the source’s answers assume and its sibling stems state; the physicist’s surname corrected from “Thompson” to “Thomson” (William Thomson, Lord Kelvin); the soccer-ball exercise’s smallest circumference keyed to the value the stem’s data give, with a Source note, where the source’s printed value does not follow from them; the lead-in of each lettered part that addressed the parts together restated in the singular for its one part (“Make the conversion indicated in the following”, “the following quantity”, “Write a conversion factor (as a ratio)”, “Calculate this mass”, “Calculate this volume”, “Solve this problem about lumber dimensions”); the linear-relation symbols the source prints upright in prose (y, x, m, b) set as italic math, and the quantity symbols the source italicizes (W, g, T, x, y, m, b) set as math; and the 21 exercises the source prints no answer for are omitted; two statements corrected, each with a Source note: the quarts-to-liters step of the antifreeze example and the two lines that carry it forward, where the source truncates the quotient instead of rounding it (the density is unchanged), and the sentence on the 273.15 of the kelvin–Celsius equations, which the source calls experimental and not exact and which is exact by the definition of the Celsius scale; the Fahrenheit part of the 80.92 °C Check Your Learning keyed to the significant figures the rules of Section 1.5 give, with a Source note, where the source’s printed answer is not rounded by those rules; and the second lumber part’s “This lumber” restated as “Two-by-four” lumber.</small>
