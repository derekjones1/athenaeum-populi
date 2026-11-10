---
title: Measurement Uncertainty, Accuracy, and Precision
description: >-
  Exact and uncertain numbers, significant figures in measurements and in
  calculations, the rounding rules, and the accuracy and precision of
  repeated measurements — adapted from OpenStax Chemistry 2e, Section 1.5.
source_section: "1.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Define accuracy and precision
- Distinguish exact and uncertain numbers
- Correctly represent uncertainty in quantities using significant figures
- Apply proper rounding rules to computed quantities
{{< /callout >}}

Counting is the only type of measurement that is free from uncertainty, provided the number of objects being counted does not change while the counting process is underway. The result of such a counting measurement is an example of an **exact number**. By counting the eggs in a carton, one can determine *exactly* how many eggs the carton contains. The numbers of defined quantities are also exact. By definition, 1 foot is exactly 12 inches, 1 inch is exactly 2.54 centimeters, and 1 gram is exactly 0.001 kilogram. Quantities derived from measurements other than counting, however, are uncertain to varying extents due to practical limitations of the measurement process used.

## Significant Figures in Measurement

The numbers of measured quantities, unlike defined or directly counted quantities, are not exact. To measure the volume of liquid in a graduated cylinder, you should make a reading at the bottom of the meniscus, the lowest point on the curved surface of the liquid.

{{< mediafigure src="chemistry/CNX_Chem_01_05_Measure" kind="diagram" eager="true" alt="A 25-mL graduated cylinder marked every 1 mL and numbered every 5 mL, filled with blue liquid to between the 21-mL and 22-mL marks. The region around the liquid surface is boxed and enlarged twice. In the second enlargement, dashed lines run along the 21-mL and 22-mL marks, the liquid surface curves down between them with its lowest point nearer the upper line, and an arrow labelled “Make reading here” points to the bottom of the curve." >}}
To measure the volume of liquid in this graduated cylinder, you must mentally subdivide the distance between the 21 and 22 mL marks into tenths of a milliliter, and then make a reading (estimate) at the bottom of the meniscus.
{{< /mediafigure >}}

Refer to the illustration in the figure above. The bottom of the meniscus in this case clearly lies between the 21 and 22 markings, meaning the liquid volume is *certainly* greater than 21 mL but less than 22 mL. The meniscus appears to be a bit closer to the 22-mL mark than to the 21-mL mark, and so a reasonable estimate of the liquid’s volume would be 21.6 mL. In the number 21.6, then, the digits 2 and 1 are certain, but the 6 is an estimate. Some people might estimate the meniscus position to be equally distant from each of the markings and estimate the tenth-place digit as 5, while others may think it to be even closer to the 22-mL mark and estimate this digit to be 7. Note that it would be pointless to attempt to estimate a digit for the hundredths place, given that the tenths-place digit is uncertain. In general, numerical scales such as the one on this graduated cylinder will permit measurements to one-tenth of the smallest scale division. The scale in this case has 1-mL divisions, and so volumes may be measured to the nearest 0.1 mL.

This concept holds true for all measurements, even if you do not actively make an estimate. If you place a coin on a standard electronic balance, you may obtain a reading of 6.72 g. The digits 6 and 7 are certain, and the 2 indicates that the mass of the coin is likely between 6.71 and 6.73 grams. The coin weighs *about* 6.72 grams, with a nominal uncertainty in the measurement of ± 0.01 gram. If the coin is weighed on a more sensitive balance, the mass might be 6.723 g. This means its mass lies between 6.722 and 6.724 grams, an uncertainty of 0.001 gram. Every measurement has some **uncertainty**, which depends on the device used (and the user’s ability). All of the digits in a measurement, including the uncertain last digit, are called **significant figures** or **significant digits**. Note that zero may be a measured value; for example, if you stand on a scale that shows weight to the nearest pound and it shows “120,” then the 1 (hundreds), 2 (tens) and 0 (ones) are all significant (measured) values.

*Source note:* the source weighs “a quarter”. A US quarter has a specified mass of 5.670 g (United States Mint, coin specifications), so the page says a coin and keeps the source’s readings.

A measurement result is properly reported when its significant digits accurately represent the certainty of the measurement process. But what if you were analyzing a reported value and trying to determine what is significant and what is not? Well, for starters, all nonzero digits are significant, and it is only zeros that require some thought. We will use the terms “leading,” “trailing,” and “captive” for the zeros and will consider how to deal with them.

{{< mediafigure src="chemistry/CNX_Chem_01_05_SigDigits5_img" kind="diagram" alt="Two numbers with their zeros labelled. In 3090, an arrow labelled Captive points to the zero between the 3 and the 9, and an arrow labelled Trailing points to the final zero. In 0.008020, three arrows labelled Leading point to the three zeros before the 8, an arrow labelled Captive points to the zero between the 8 and the 2, and an arrow labelled Trailing points to the final zero." >}}
{{< /mediafigure >}}

Starting with the first nonzero digit on the left, count this digit and all remaining digits to the right. This is the number of significant figures in the measurement unless the last digit is a trailing zero lying to the left of the decimal point.

{{< mediafigure src="chemistry/CNX_Chem_01_05_SigDigits1_img" kind="diagram" alt="Two counts of significant figures. In 1267 m, an arrow marks the 1 as the first nonzero figure on the left, and four arrows under the 1, 2, 6, and 7 are labelled Four significant figures. In 55.0 g, an arrow marks the first 5 as the first nonzero figure on the left, and three arrows under the 5, 5, and 0 are labelled: three significant figures; note that the zero is to the right of the decimal point and therefore a significant figure." >}}
{{< /mediafigure >}}

Captive zeros result from measurement and are therefore always significant. Leading zeros, however, are never significant—they merely tell us where the decimal point is located.

{{< mediafigure src="chemistry/CNX_Chem_01_05_SigDigits2_img" kind="diagram" alt="Two more counts. In 70.607 mL, an arrow marks the 7 as the first nonzero figure on the left, and five arrows under the 7, 0, 6, 0, and 7 are labelled: five significant figures; all figures are measured including the two zeros. In 0.00832407 mL, an arrow marks the 8 as the first nonzero figure on the left, and six arrows under the 8, 3, 2, 4, 0, and 7 are labelled Six significant figures; the zeros before the 8 carry no arrow." >}}
{{< /mediafigure >}}

The leading zeros in this example are not significant. We could use exponential notation (as described in Appendix B) and express the number as $8.32407 \times 10^{-3}$; then the number 8.32407 contains all of the significant figures, and $10^{-3}$ locates the decimal point.

The number of significant figures is uncertain in a number that ends with a zero to the left of the decimal point location. The zeros in the measurement 1,300 grams could be significant or they could simply indicate where the decimal point is located. The ambiguity can be resolved with the use of exponential notation: $1.3 \times 10^{3}$ (two significant figures), $1.30 \times 10^{3}$ (three significant figures, if the tens place was measured), or $1.300 \times 10^{3}$ (four significant figures, if the ones place was also measured). In cases where only the decimal-formatted number is available, it is prudent to assume that all trailing zeros are not significant.

{{< mediafigure src="chemistry/CNX_Chem_01_05_SigDigits3_img" kind="diagram" alt="The measurement 1300 g. Two arrows point to the 1 and the 3, labelled: significant figures, clearly result of measurement. Two arrows point to the two zeros, labelled: these zeros could be significant (measured), or they could be placeholders." >}}
{{< /mediafigure >}}

When determining significant figures, be sure to pay attention to reported values and think about the measurement and significant figures in terms of what is reasonable or likely when evaluating whether the value makes sense. For example, the US Census Bureau projected the resident population of the US on January 1, 2014, as 317,297,938. Do you think the US population was correctly determined to the reported nine significant figures, that is, to the exact number of people? People are constantly being born, dying, or moving into or out of the country, and assumptions are made to account for the large number of people who are not actually counted. Because of these uncertainties, it might be more reasonable to expect that we know the population to within perhaps a million or so, in which case the population should be reported as $3.17 \times 10^{8}$ people.

*Source note:* the source says “the official January 2014 census reported” 317,297,725. The US census is taken every ten years; the figure for January 1, 2014, is a Census Bureau projection, 317,297,938 (release CB13-TPS.112, December 30, 2013).

## Significant Figures in Calculations

A second important principle of uncertainty is that results calculated from a measurement are at least as uncertain as the measurement itself. Take the uncertainty in measurements into account to avoid misrepresenting the uncertainty in calculated results. One way to do this is to report the result of a calculation with the correct number of significant figures, which is determined by the following three rules for **rounding** numbers:

1. When adding or subtracting numbers, round the result to the same number of decimal places as the number with the least number of decimal places (the least certain value in terms of addition and subtraction).
2. When multiplying or dividing numbers, round the result to the same number of digits as the number with the least number of significant figures (the least certain value in terms of multiplication and division).
3. If the digit to be dropped (the one immediately to the right of the digit to be retained) is less than 5, “round down” and leave the retained digit unchanged; if it is more than 5, “round up” and increase the retained digit by 1. If the dropped digit is 5, and it’s either the last digit in the number or it’s followed only by zeros, round up or down, whichever yields an even value for the retained digit. If any nonzero digits follow the dropped 5, round up. (The last part of this rule may strike you as a bit odd, but it’s based on reliable statistics and is aimed at avoiding any bias when dropping the digit “5,” since it is equally close to both possible values of the retained digit.)

The following examples illustrate the application of this rule in rounding a few different numbers to three significant figures:

- 0.028675 rounds “up” to 0.0287 (the dropped digit, 7, is greater than 5)
- 18.3384 rounds “down” to 18.3 (the dropped digit, 3, is less than 5)
- 6.8752 rounds “up” to 6.88 (the dropped digit is 5, and a nonzero digit follows it)
- 92.85 rounds “down” to 92.8 (the dropped digit is 5, and the retained digit is even)

Let’s work through these rules with a few examples.

**Example.** *Rounding Numbers.* Round the following to the indicated number of significant figures:

(a) 31.57 (to two significant figures)

(b) 8.1649 (to three significant figures)

(c) 0.051065 (to four significant figures)

(d) 0.90275 (to four significant figures)

**Solution.** (a) 31.57 rounds “up” to 32 (the dropped digit is 5, and a nonzero digit follows it)

(b) 8.1649 rounds “down” to 8.16 (the dropped digit, 4, is less than 5)

(c) 0.051065 rounds “down” to 0.05106 (the dropped digit is 5, and the retained digit is even)

(d) 0.90275 rounds “up” to 0.9028 (the dropped digit is 5, and the retained digit is odd)

*Source note:* the source gives “the retained digit is even” as the reason in parts (a) and (d). By the section’s own rounding rule, in (a) the dropped 5 is followed by a nonzero digit, 7, so the number rounds up; in (d) the dropped 5 is the last digit and the retained digit, 7, is odd, so it rounds up to the even 8.

{{< fillin
  question="Round the following to the indicated number of significant figures: 0.424 (to two significant figures)"
  answer="0.42"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$0.42$"
  hint="Find the first digit to be dropped, then apply the rounding rules."
>}}

{{< fillin
  question="Round the following to the indicated number of significant figures: 0.0038661 (to three significant figures)"
  answer="0.00387"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$0.00387$"
  hint="Test each zero against the rules for leading, captive, and trailing zeros; then find the first digit to be dropped and apply the rounding rules."
>}}

{{< fillin
  question="Round the following to the indicated number of significant figures: 421.25 (to four significant figures)"
  answer="421.2"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$421.2$"
  hint="Find the first digit to be dropped, then apply the rounding rules."
>}}

{{< fillin
  question="Round the following to the indicated number of significant figures: 28,683.5 (to five significant figures)"
  answer="28684"
  answerForm="sig-figs:5 last-digit:0"
  answerDisplay="$28{,}684$"
  hint="Find the first digit to be dropped, then apply the rounding rules."
>}}

**Example.** *Addition and Subtraction with Significant Figures.* Rule: When adding or subtracting numbers, round the result to the same number of decimal places as the number with the fewest decimal places (i.e., the least certain value in terms of addition and subtraction).

(a) Add 1.0023 g and 4.383 g.

(b) Subtract 421.23 g from 486 g.

**Solution.**

(a)

$$\begin{array}{r} 1.0023\ \text{g} \\ +\ 4.383\ \text{g} \\ \hline 5.3853\ \text{g} \end{array}$$

Answer is 5.385 g (round to the thousandths place; three decimal places)

(b)

$$\begin{array}{r} 486\phantom{.00}\ \text{g} \\ -\ 421.23\ \text{g} \\ \hline 64.77\ \text{g} \end{array}$$

Answer is 65 g (round to the ones place; no decimal places)

{{< mediafigure src="chemistry/CNX_Chem_01_05_SigDigits4_img" kind="diagram" alt="Two column calculations, each with a red vertical line where the result is rounded. (a) 1.0023 plus 4.383: arrows label the last digit of 1.0023 “Ten thousandths place” and the last digit of 4.383 “Thousandths place: least precise”; the sum 5.3853 has its final 3 struck out in red, and an arrow below the line says “Round to thousandths”. (b) 486 g minus 421.23 g: the red line falls just after the ones digit, the difference 64.77 g has both decimal digits struck out, an arrow below says “Round to ones”, and an arrow to the right points to “Answer is 65 g”." >}}
{{< /mediafigure >}}

{{< fillin
  question="Add 2.334 mL and 0.31 mL. Enter the sum in milliliters."
  answer="2.64"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$2.64\ \text{mL}$"
  hint="Apply the rounding rule for addition and subtraction."
>}}

{{< fillin
  question="Subtract 55.8752 m from 56.533 m. Enter the difference in meters."
  answer="0.658"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$0.658\ \text{m}$"
  hint="Apply the rounding rule for addition and subtraction."
>}}

**Example.** *Multiplication and Division with Significant Figures.* Rule: When multiplying or dividing numbers, round the result to the same number of digits as the number with the fewest significant figures (the least certain value in terms of multiplication and division).

(a) Multiply 0.6238 cm by 6.6 cm.

(b) Divide 421.23 g by 486 mL.

**Solution.**

(a)

$$\begin{aligned} &0.6238\ \text{cm} \times 6.6\ \text{cm} = 4.11708\ \text{cm}^{2} \\ &\longrightarrow \text{result is}\ 4.1\ \text{cm}^{2}\ (\text{round to two significant figures}) \\ &\text{four significant figures} \times \text{two significant figures} \\ &\longrightarrow \text{two significant figures answer} \end{aligned}$$

(b)

$$\begin{aligned} &\frac{421.23\ \text{g}}{486\ \text{mL}} = 0.866728\ldots\ \text{g/mL} \\ &\longrightarrow \text{result is}\ 0.867\ \text{g/mL}\ (\text{round to three significant figures}) \\ &\frac{\text{five significant figures}}{\text{three significant figures}} \\ &\longrightarrow \text{three significant figures answer} \end{aligned}$$

{{< fillin
  question="Multiply 2.334 cm and 0.320 cm. Enter the product in square centimeters."
  answer="0.747"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$0.747\ \text{cm}^{2}$"
  hint="Apply the rounding rule for multiplication and division."
>}}

{{< fillin
  question="Divide 55.8752 m by 56.53 s. Enter the quotient in m/s."
  answer="0.9884"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$0.9884\ \text{m/s}$"
  hint="Apply the rounding rule for multiplication and division."
>}}

In the midst of all these technicalities, it is important to keep in mind the reason for these rules about significant figures and rounding—to correctly represent the certainty of the values reported and to ensure that a calculated result is not represented as being more certain than the least certain value used in the calculation.

**Example.** *Calculation with Significant Figures.* One common bathtub is 13.44 dm long, 5.920 dm wide, and 2.54 dm deep. Assume that the tub is rectangular and calculate its approximate volume in liters.

**Solution.**

$$\begin{aligned} V &= l \times w \times d \\ &= 13.44\ \text{dm} \times 5.920\ \text{dm} \times 2.54\ \text{dm} \\ &= 202.09459\ldots\ \text{dm}^{3}\ (\text{value from calculator}) \\ &= 202\ \text{dm}^{3},\ \text{or}\ 202\ \text{L} \\ &\phantom{=}\ (\text{answer rounded to three significant figures}) \end{aligned}$$

{{< fillin
  question="What is the density of a liquid with a mass of 31.1415 g and a volume of 30.13 cm³? Enter the density in g/mL."
  answer="1.034"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$1.034\ \text{g/mL}$"
  hint="Use the definition of density and the relation between cubic centimeters and milliliters, then apply the rounding rule for multiplication and division."
>}}

**Example.** *Experimental Determination of Density Using Water Displacement.* A piece of rebar is weighed and then submerged in a graduated cylinder partially filled with water, with results as shown.

{{< mediafigure src="chemistry/CNX_Chem_01_04_CylRebar" kind="diagram" alt="Two 25-mL graduated cylinders with 1-mL markings, numbered every 5 mL. The left holds water to about 13.5 mL. In the right, a ribbed grey metal rod stands submerged and the water reaches about 22.4 mL. Beside them, a drawing of the rod sits above the printed values: Rebar mass = 69.658 g, “Final” volume = 22.4 mL, “Initial” volume = 13.5 mL." >}}
{{< /mediafigure >}}

(a) Use these values to determine the density of this piece of rebar.

(b) Rebar is mostly iron. Does your result in (a) support this statement? How?

**Solution.** The volume of the piece of rebar is equal to the volume of the water displaced:

$$\text{volume} = 22.4\ \text{mL} - 13.5\ \text{mL} = 8.9\ \text{mL} = 8.9\ \text{cm}^{3}$$

(rounded to the nearest 0.1 mL, per the rule for addition and subtraction)

The density is the mass-to-volume ratio:

$$\text{density} = \frac{\text{mass}}{\text{volume}} = \frac{69.658\ \text{g}}{8.9\ \text{cm}^{3}} = 7.8\ \text{g/cm}^{3}$$

(rounded to two significant figures, per the rule for multiplication and division)

From the table of densities of common substances in Section 1.4 Measurements, the density of iron is 7.9 g/cm³, very close to that of rebar, which lends some support to the fact that rebar is mostly iron.

{{< mediafigure src="chemistry/CNX_Chem_01_04_CylGold" kind="diagram" alt="Two 25-mL graduated cylinders with 1-mL markings, numbered every 5 mL. The left holds water to a little above the 17-mL mark. In the right, a lumpy, shiny yellow piece rests at the bottom and the water stands just below the 20-mL mark. Beside them, a drawing of the piece sits above the printed values: Mass = 51.842 g, “Final” volume = 19.8 mL, “Initial” volume = 17.1 mL." >}}
{{< /mediafigure >}}

{{< fillin
  question="An irregularly shaped piece of a shiny yellowish material is weighed and then submerged in a graduated cylinder, with results as shown in the figure above. Use these values to determine the density of this material. Enter the density in g/cm³."
  answer="19"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$19\ \text{g/cm}^{3}$"
  hint="Find the volume by water displacement, as in the rebar example, then use the definition of density; apply the rounding rule that fits each step."
>}}

{{< selfcheck question="An irregularly shaped piece of a shiny yellowish material is weighed and then submerged in a graduated cylinder, with results as shown in the figure above. Do you have any reasonable guesses as to the identity of this material? Explain your reasoning." hint="Compare your density with the table of densities of common substances in Section 1.4 Measurements, and think about how the material looks." >}}
It is likely gold; the right appearance for gold and very close to the density given for gold in the Section 1.4 Measurements table of densities.
===CHECKS===
it is likely gold
the right appearance for gold
very close to the density given for gold
{{< /selfcheck >}}

## Accuracy and Precision

Scientists typically make repeated measurements of a quantity to ensure the quality of their findings and to evaluate both the **precision** and the **accuracy** of their results. Measurements are said to be precise if they yield very similar results when repeated in the same manner. A measurement is considered accurate if it yields a result that is very close to the true or accepted value. Precise values agree with each other; accurate values agree with a true value. These characterizations can be extended to other contexts, such as the results of an archery competition (the figure below).

{{< mediafigure src="chemistry/CNX_Chem_01_05_Archery" kind="diagram" alt="Three round targets, each a blue bull’s-eye inside a white ring inside a blue outer ring, with three black arrow holes and a printed label beneath. (a) Labelled “Accurate and precise”: the three holes overlap at the middle of the bull’s-eye. (b) Labelled “Precise, not accurate”: the three holes sit together in the white ring, above and to the right of the bull’s-eye. (c) Labelled “Not accurate, not precise”: the three holes are spaced apart in the outer blue ring, one at the upper right and two on the right." >}}
(a) These arrows are close to both the bull’s eye and one another, so they are both accurate and precise. (b) These arrows are close to one another but not on target, so they are precise but not accurate. (c) These arrows are neither on target nor close to one another, so they are neither accurate nor precise.
{{< /mediafigure >}}

Suppose a quality control chemist at a pharmaceutical company is tasked with checking the accuracy and precision of three different machines that are meant to dispense 10 ounces (296 mL) of cough syrup into storage bottles. She proceeds to use each machine to fill five bottles and then carefully determines the actual volume dispensed, obtaining the results tabulated in the table below.

**Volume (mL) of Cough Medicine Delivered by 10-oz (296 mL) Dispensers**

| Dispenser #1 | Dispenser #2 | Dispenser #3 |
|---|---|---|
| 283.3 | 298.3 | 296.1 |
| 284.1 | 294.2 | 295.9 |
| 283.9 | 296.0 | 296.1 |
| 284.0 | 297.8 | 296.0 |
| 284.1 | 293.9 | 296.1 |

Considering these results, she will report that dispenser #1 is precise (values all close to one another, within a few tenths of a milliliter) but not accurate (none of the values are close to the target value of 296 mL, each being more than 10 mL too low). Results for dispenser #2 represent improved accuracy (each volume is less than 3 mL away from 296 mL) but worse precision (volumes vary by more than 4 mL). Finally, she can report that dispenser #3 is working well, dispensing cough syrup both accurately (all volumes within 0.1 mL of the target volume) and precisely (volumes differing from each other by no more than 0.2 mL).

## Summary

- Quantities can be defined or measured. Measured quantities have an associated uncertainty that is represented by the number of significant figures in the quantity’s number. The uncertainty of a calculated quantity depends on the uncertainties in the quantities used in the calculation and is reflected in how the value is rounded. Quantities are characterized with regard to accuracy (closeness to a true or accepted value) and precision (variation among replicate measurement results).

## Key terms

- **accuracy** — how closely a measurement aligns with a correct value.
- **exact number** — number derived by counting or by definition.
- **precision** — how closely a measurement matches the same measurement when repeated.
- **rounding** — procedure used to ensure that calculated results properly reflect the uncertainty in the measurements used in the calculation.
- **significant digits** — (also, significant figures) all of the measured digits in a determination, including the uncertain last digit.
- **significant figures** — (also, significant digits) all of the measured digits in a determination, including the uncertain last digit.
- **uncertainty** — estimate of amount by which measurement differs from true value.

## Practice

### Define accuracy and precision

{{< mediafigure src="chemistry/CNX_Chem_01_05_Archer2_img" kind="diagram" alt="Four panels, one per archer, lettered W, X, Y, and Z from left to right, each showing the same target (a blue bull’s-eye, a white ring, and a blue outer ring) and four black arrow holes. W: two holes are inside the bull’s-eye, one is on its edge, and one is in the white ring. X: the holes sit next to one another below and to the right of the target, outside its outer ring. Y: the holes are scattered far apart around the panel, all outside the target. Z: one hole is at the edge of the bull’s-eye, one is in the rings at the left, and two are far outside, one above and one below." >}}
{{< /mediafigure >}}

{{< multiplechoice
  question="Consider the results of the archery contest shown in the figure above. Which archer is most precise?"
  answer="Archer X"
  hint="Use the definition of precision, and apply it to each archer’s holes."
>}}
Archer W
Archer X
Archer Y
Archer Z
{{< /multiplechoice >}}

{{< multiplechoice
  question="Consider the results of the archery contest shown in the figure above. Which archer is most accurate?"
  answer="Archer W"
  hint="Use the definition of accuracy, and apply it to each archer’s holes."
>}}
Archer W
Archer X
Archer Y
Archer Z
{{< /multiplechoice >}}

{{< multiplechoice
  question="Consider the results of the archery contest shown in the figure above. Who is both least precise and least accurate?"
  answer="Archer Y"
  hint="Use the definitions of precision and accuracy, and apply both to each archer’s holes."
>}}
Archer W
Archer X
Archer Y
Archer Z
{{< /multiplechoice >}}

### Distinguish exact and uncertain numbers

{{< multiplechoice
  question="Indicate whether the following can be determined exactly or must be measured with some degree of uncertainty: the number of seconds in an hour."
  answer="exact"
  hint="Ask what you would do to obtain this number, and whether two careful people doing it could get different values."
>}}
exact
uncertain
{{< /multiplechoice >}}

{{< multiplechoice
  question="Indicate whether the following can be determined exactly or must be measured with some degree of uncertainty: the number of pages in this book."
  answer="exact"
  hint="Ask how this number would be obtained, and whether repeating that process could change its last digit."
>}}
exact
uncertain
{{< /multiplechoice >}}

{{< multiplechoice
  question="Indicate whether the following can be determined exactly or must be measured with some degree of uncertainty: the number of grams in your weight."
  answer="uncertain"
  hint="Ask what you would do to obtain this number, and whether two careful people doing it could get different values."
>}}
exact
uncertain
{{< /multiplechoice >}}

{{< multiplechoice
  question="Indicate whether the following can be determined exactly or must be measured with some degree of uncertainty: the number of grams in 3 kilograms."
  answer="exact"
  hint="Ask how this number would be obtained, and whether repeating that process could change its last digit."
>}}
exact
uncertain
{{< /multiplechoice >}}

{{< multiplechoice
  question="Indicate whether the following can be determined exactly or must be measured with some degree of uncertainty: the volume of water you drink in one day."
  answer="uncertain"
  hint="Ask what you would do to obtain this number, and whether two careful people doing it could get different values."
>}}
exact
uncertain
{{< /multiplechoice >}}

{{< multiplechoice
  question="Indicate whether the following can be determined exactly or must be measured with some degree of uncertainty: the distance from San Francisco to Kansas City."
  answer="uncertain"
  hint="Ask how this number would be obtained, and whether repeating that process could change its last digit."
>}}
exact
uncertain
{{< /multiplechoice >}}

### Correctly represent uncertainty in quantities using significant figures

{{< fillin
  question="Express the following number in exponential notation with correct significant figures: 704"
  answer="7.04\times10^{2}"
  answerForm="sig-figs:3 last-digit:0 scientific-notation"
  answerDisplay="$7.04 \times 10^{2}$"
  hint="Test each zero against the rules for leading, captive, and trailing zeros; in exponential notation the coefficient carries every significant figure and the power of ten locates the decimal point."
>}}

{{< fillin
  question="Express the following number in exponential notation with correct significant figures: 0.03344"
  answer="3.344\times10^{-2}"
  answerForm="sig-figs:4 last-digit:0 scientific-notation"
  answerDisplay="$3.344 \times 10^{-2}$"
  hint="Test each zero against the rules for leading, captive, and trailing zeros; in exponential notation the coefficient carries every significant figure and the power of ten locates the decimal point."
>}}

{{< fillin
  question="Express the following number in exponential notation with correct significant figures: 547.9"
  answer="5.479\times10^{2}"
  answerForm="sig-figs:4 last-digit:0 scientific-notation"
  answerDisplay="$5.479 \times 10^{2}$"
  hint="Recall which digits are significant; in exponential notation the coefficient carries every significant figure and the power of ten locates the decimal point."
>}}

{{< fillin
  question="Express the following number in exponential notation with correct significant figures: 22086"
  answer="2.2086\times10^{4}"
  answerForm="sig-figs:5 last-digit:0 scientific-notation"
  answerDisplay="$2.2086 \times 10^{4}$"
  hint="Test each zero against the rules for leading, captive, and trailing zeros; in exponential notation the coefficient carries every significant figure and the power of ten locates the decimal point."
>}}

{{< fillin
  question="Express the following number in exponential notation with correct significant figures: 1000.00"
  answer="1.00000\times10^{3}"
  answerForm="sig-figs:6 last-digit:0 scientific-notation"
  answerDisplay="$1.00000 \times 10^{3}$"
  hint="Test each zero against the rules for leading, captive, and trailing zeros; in exponential notation the coefficient carries every significant figure and the power of ten locates the decimal point."
>}}

{{< fillin
  question="Express the following number in exponential notation with correct significant figures: 0.0000000651"
  answer="6.51\times10^{-8}"
  answerForm="sig-figs:3 last-digit:0 scientific-notation"
  answerDisplay="$6.51 \times 10^{-8}$"
  hint="Test each zero against the rules for leading, captive, and trailing zeros; in exponential notation the coefficient carries every significant figure and the power of ten locates the decimal point."
>}}

{{< fillin
  question="Express the following number in exponential notation with correct significant figures: 0.007157"
  answer="7.157\times10^{-3}"
  answerForm="sig-figs:4 last-digit:0 scientific-notation"
  answerDisplay="$7.157 \times 10^{-3}$"
  hint="Test each zero against the rules for leading, captive, and trailing zeros; in exponential notation the coefficient carries every significant figure and the power of ten locates the decimal point."
>}}

{{< fillin
  question="How many significant figures are contained in the following measurement? 53 cm"
  answer="2"
  answerForm="whole-number"
  answerDisplay="2"
  hint="Recall which digits are significant, and test any zero against the rules for leading, captive, and trailing zeros."
>}}

{{< fillin
  question="How many significant figures are contained in the following measurement? $2.05 \times 10^{8}$ m"
  answer="3"
  answerForm="whole-number"
  answerDisplay="3"
  hint="Recall what the power of ten does in exponential notation, and test any zero against the rules for leading, captive, and trailing zeros."
>}}

{{< fillin
  question="How many significant figures are contained in the following measurement? 86,002 J"
  answer="5"
  answerForm="whole-number"
  answerDisplay="5"
  hint="Recall which digits are significant, and test any zero against the rules for leading, captive, and trailing zeros."
>}}

{{< fillin
  question="How many significant figures are contained in the following measurement? $9.740 \times 10^{4}$ m/s"
  answer="4"
  answerForm="whole-number"
  answerDisplay="4"
  hint="Recall what the power of ten does in exponential notation, and test any zero against the rules for leading, captive, and trailing zeros."
>}}

{{< fillin
  question="How many significant figures are contained in the following measurement? 10.0613 m³"
  answer="6"
  answerForm="whole-number"
  answerDisplay="6"
  hint="Recall which digits are significant, and test any zero against the rules for leading, captive, and trailing zeros."
>}}

{{< fillin
  question="How many significant figures are contained in the following measurement? 0.17 g/mL"
  answer="2"
  answerForm="whole-number"
  answerDisplay="2"
  hint="Recall which digits are significant, and test any zero against the rules for leading, captive, and trailing zeros."
>}}

{{< fillin
  question="How many significant figures are contained in the following measurement? 0.88400 s"
  answer="5"
  answerForm="whole-number"
  answerDisplay="5"
  hint="Recall which digits are significant, and test any zero against the rules for leading, captive, and trailing zeros."
>}}

### Apply proper rounding rules to computed quantities

{{< fillin
  question="Round off the following number to two significant figures: 0.436"
  answer="0.44"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$0.44$"
  hint="Find the first digit to be dropped, then apply the rounding rules."
>}}

{{< fillin
  question="Round off the following number to two significant figures: 9.000"
  answer="9.0"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$9.0$"
  hint="Find the first digit to be dropped, then apply the rounding rules."
>}}

{{< fillin
  question="Round off the following number to two significant figures: 27.2"
  answer="27"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$27$"
  hint="Find the first digit to be dropped, then apply the rounding rules."
>}}

{{< fillin
  question="Round off the following number to two significant figures: 135"
  answer="140"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$140$"
  hint="Find the first digit to be dropped, then apply the rounding rules."
>}}

{{< fillin
  question="Round off the following number to two significant figures: $1.497 \times 10^{-3}$"
  answer="1.5\times10^{-3}"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$1.5 \times 10^{-3}$"
  hint="Recall what the power of ten does in exponential notation; then find the first digit to be dropped and apply the rounding rules."
>}}

{{< fillin
  question="Round off the following number to two significant figures: 0.445"
  answer="0.44"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$0.44$"
  hint="Find the first digit to be dropped, then apply the rounding rules."
>}}

{{< fillin
  question="Perform the following calculation and report the answer with the correct number of significant figures. $628 \times 342$"
  answer="2.15\times10^{5}"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$2.15 \times 10^{5}$"
  hint="Apply the rounding rule for multiplication and division."
>}}

{{< fillin
  question="Perform the following calculation and report the answer with the correct number of significant figures. $(5.63 \times 10^{2}) \times (7.4 \times 10^{3})$"
  answer="4.2\times10^{6}"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$4.2 \times 10^{6}$"
  hint="Apply the rounding rule for multiplication and division."
>}}

{{< fillin
  question="Perform the following calculation and report the answer with the correct number of significant figures. $\frac{28.0}{13.483}$"
  answer="2.08"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$2.08$"
  hint="Apply the rounding rule for multiplication and division."
>}}

{{< fillin
  question="Perform the following calculation and report the answer with the correct number of significant figures. $8{,}119 \times 0.000023$"
  answer="0.19"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$0.19$"
  hint="Test each zero against the rules for leading, captive, and trailing zeros, then apply the rounding rule for multiplication and division."
>}}

{{< fillin
  question="Perform the following calculation and report the answer with the correct number of significant figures. $14.98 + 27{,}340 + 84.7593$"
  answer="27440"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$27{,}440$"
  hint="Test each zero against the rules for leading, captive, and trailing zeros, then apply the rounding rule for addition and subtraction."
>}}

{{< fillin
  question="Perform the following calculation and report the answer with the correct number of significant figures. $42.7 + 0.259$"
  answer="43.0"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$43.0$"
  hint="Apply the rounding rule for addition and subtraction."
>}}

---

<small>This section is adapted from [Chemistry 2e, Section 1.5: Measurement Uncertainty, Accuracy, and Precision](https://openstax.org/books/chemistry-2e/pages/1-5-measurement-uncertainty-accuracy-and-precision) by Paul Flowers, Klaus Theopold, Richard Langley, William R. Robinson, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/chemistry-2e). Changes: in the rounding example's solution, the stated reason for part (a) corrected to “a nonzero digit follows it” and for part (d) to “the retained digit is odd”, where the source gives “the retained digit is even” for both, contrary to the section’s own rounding rule, with a Source note; the source's equations typeset as KaTeX math, the two column calculations of the addition-and-subtraction example set as right-aligned columns; the five worked examples set as prose, each followed by its Check Your Learning as interactive items (ten fill-ins and one self-check, one per lettered part, with a sentence added after a stem naming the unit to enter where the stem leaves it open), the printed answers serving as their keys rather than appearing as text; the gold Check Your Learning's explanation part carried as a self-check whose model answer is the printed answer with a closing period added, with rubric checkpoints drawn from it; references to numbered figures and the table written as “the figure above”, “the figure below”, and “the table below”, the gold Check Your Learning's “with results as shown” and the archery exercise's “shown in this figure” written as “the figure above”, the density table of Section 1.4 named in words in the rebar solution (“the table of densities of common substances in Section 1.4 Measurements”) and the gold answer (“the Section 1.4 Measurements table of densities”), and the reference to Appendix B kept as plain text; the ten images re-encoded as WebP and marked as diagrams, each alt rewritten from the image (the graduated-cylinder source alt reads about 20.8 mL where the image and the text place the meniscus between the 21-mL and 22-mL marks; the gold-sample and archery-exercise alts describe what is drawn without naming the material or judging the archers); the eight images the source prints without a caption (four significant-figure diagrams, the rounding diagram, the two graduated-cylinder diagrams, and the archery exercise's targets) placed without a caption, the archery exercise's image moved from after its parts to above them; the cough-medicine table transcribed as a Markdown table with its title as a bold line above it; the six end-of-section exercises the source keys adapted into the interactive Practice block as 35 items (26 fill-ins and 9 multiple-choice items), one per lettered part, grouped under the objective each tests (the archery exercise under accuracy and precision, the exact-or-uncertain exercise under exact and uncertain numbers, the exponential-notation and counting exercises under significant figures, the rounding and calculation exercises under rounding), each part's lead-in restated in the singular (“Round off the following number to two significant figures:”), the exact-or-uncertain parts asked as two-option choices in the stem's own words and the archery parts as choices among the four archers the figure labels, the counts of significant figures entered as whole numbers, and 8119 written 8,119 with digit grouping in math; and the 7 exercises the source prints no answer for are omitted; and two statements of fact corrected, each with a Source note: the object on the balance is called a coin, where the source calls it a quarter and gives it a mass no US quarter has, and the January 2014 population is given as the Census Bureau’s projection for January 1, where the source calls a different figure an official census.</small>
