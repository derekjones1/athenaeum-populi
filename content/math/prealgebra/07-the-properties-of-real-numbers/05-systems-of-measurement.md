---
title: Systems of Measurement
description: >-
  Converting units and mixed units of measurement within the U.S. system,
  within the metric system, between the two systems, and between
  Fahrenheit and Celsius temperatures — adapted from OpenStax Prealgebra
  2e, Section 7.5.
source_section: "7.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Make unit conversions in the U.S. system
- Use mixed units of measurement in the U.S. system
- Make unit conversions in the metric system
- Use mixed units of measurement in the metric system
- Convert between the U.S. and the metric systems of measurement
- Convert between Fahrenheit and Celsius temperatures
{{< /callout >}}

In this section we will see how to convert among different types of units,
such as feet to miles or kilograms to pounds. The basic idea in all of the
unit conversions will be to use a form of $1$, the multiplicative
identity, to change the units but not the value of a quantity.

## Make unit conversions in the U.S. system

There are two systems of measurement commonly used around the world. Most
countries use the metric system. The United States uses a different
system of measurement, usually called the U.S. system. We will look at the
U.S. system first.

The U.S. system of measurement uses units of inch, foot, yard, and mile to
measure length, and pound and ton to measure weight. For capacity, the
units used are cup, pint, quart, and gallon. Both the U.S. system and the
metric system measure time in seconds, minutes, or hours. The
equivalencies among the basic units of the U.S. system are:

| Length | Volume |
| :--- | :--- |
| $1$ foot (ft) $= 12$ inches (in) | $3$ teaspoons (t) $= 1$ tablespoon (T) |
| $1$ yard (yd) $= 3$ feet (ft) | $16$ Tablespoons (T) $= 1$ cup (C) |
| $1$ mile (mi) $= 5{,}280$ feet (ft) | $1$ cup (C) $= 8$ fluid ounces (fl oz) |
| | $1$ pint (pt) $= 2$ cups (C) |
| | $1$ quart (qt) $= 2$ pints (pt) |
| | $1$ gallon (gal) $= 4$ quarts (qt) |

| Weight | Time |
| :--- | :--- |
| $1$ pound (lb) $= 16$ ounces (oz) | $1$ minute (min) $= 60$ seconds (s) |
| $1$ ton $= 2000$ pounds (lb) | $1$ hour (h) $= 60$ minutes (min) |
| | $1$ day $= 24$ hours (h) |
| | $1$ week (wk) $= 7$ days |
| | $1$ year (yr) $= 365$ days |

In many real-life applications, we need to convert between units of
measurement. We will use the identity property of multiplication to do
these conversions, restated here for easy reference: for any real number
$a$, $a \cdot 1 = a$ and $1 \cdot a = a$.

To use the identity property of multiplication, we write $1$ in a form
that will help us convert the units. For example, suppose we want to
convert inches to feet. We know that $1$ foot is equal to $12$ inches, so
we can write $1$ as the fraction $\tfrac{1\text{ ft}}{12\text{ in}}$. When
we multiply by this fraction, we do not change the value but just change
the units.

But $\tfrac{12\text{ in}}{1\text{ ft}}$ also equals $1$. How do we decide
whether to multiply by $\tfrac{1\text{ ft}}{12\text{ in}}$ or
$\tfrac{12\text{ in}}{1\text{ ft}}$? We choose the fraction that will make
the units we want to convert *from* divide out. For example, suppose we
wanted to convert $60$ inches to feet. If we choose the fraction that has
inches in the denominator, we can eliminate the inches:

$$60\text{ in} \cdot \tfrac{1\text{ ft}}{12\text{ in}} = 5\text{ ft}$$

On the other hand, if we wanted to convert $5$ feet to inches, we would
choose the fraction that has feet in the denominator:

$$5\text{ ft} \cdot \tfrac{12\text{ in}}{1\text{ ft}} = 60\text{ in}$$

We treat the unit words like factors and "divide out" common units like we
do common factors.

{{< callout type="info" >}}
  **How to make unit conversions.**

  1. Multiply the measurement to be converted by $1$; write $1$ as a
     fraction relating the units given and the units needed.
  2. Multiply.
  3. Simplify the fraction, performing the indicated operations and
     removing the common units.
{{< /callout >}}

**Example.** Mary Anne is $66$ inches tall. What is her height in feet?

Multiply by $1$, writing $1$ as a fraction relating inches and feet, then
divide out the inches:

$$
66\text{ inches} \cdot \tfrac{1\text{ foot}}{12\text{ inches}} =
\tfrac{66\text{ feet}}{12} = 5.5\text{ feet}
$$

Notice that when we simplified the fraction, we first divided out the
inches. Mary Anne is $5.5$ feet tall.

{{< fillin
  question="Lexie is 30 inches tall. Convert her height to feet."
  answer="2.5"
  hint="Multiply 30 inches by the conversion fraction $\tfrac{1\text{ foot}}{12\text{ inches}}$ and simplify."
>}}

Sometimes to convert from one unit to another, we may need to use several
other units in between, so we will need to multiply several fractions.

**Example.** Juliet is going away for $9$ weeks. Convert the time to
minutes.

To convert weeks into minutes, convert weeks to days, days to hours, and
then hours to minutes, multiplying by conversion factors of $1$ the whole
way:

$$
9\text{ wk} \cdot \tfrac{7\text{ days}}{1\text{ wk}} \cdot
\tfrac{24\text{ hr}}{1\text{ day}} \cdot \tfrac{60\text{ min}}{1\text{ hr}}
= 90{,}720\text{ min}
$$

Juliet will be away for $90{,}720$ minutes.

**Example.** How many fluid ounces are in $1$ gallon of milk?

Convert gallons to quarts, quarts to pints, pints to cups, and cups to
fluid ounces:

$$
1\text{ gal} \cdot \tfrac{4\text{ qt}}{1\text{ gal}} \cdot
\tfrac{2\text{ pt}}{1\text{ qt}} \cdot \tfrac{2\text{ C}}{1\text{ pt}}
\cdot \tfrac{8\text{ fl oz}}{1\text{ C}} = 128\text{ fluid ounces}
$$

There are $128$ fluid ounces in a gallon.

{{< fillin
  question="How many cups are in 1 gallon?"
  answer="16"
  hint="1 gallon = 4 quarts, 1 quart = 2 pints, and 1 pint = 2 cups. Multiply the conversion factors together."
>}}

## Use mixed units of measurement in the U.S. system

Performing arithmetic operations on measurements with mixed units of
measure requires care. Be sure to add or subtract like units.

**Example.** Charlie bought three steaks for a barbecue, weighing $14$
ounces, $1$ pound $2$ ounces, and $1$ pound $6$ ounces. How many total
pounds of steak did he buy?

Add the ounces, then add the pounds:

$$
14\text{ oz} + (1\text{ lb } 2\text{ oz}) + (1\text{ lb } 6\text{ oz}) =
2\text{ lb } 22\text{ oz}
$$

Convert $22$ ounces to $1$ pound $6$ ounces, then add the pounds:

$$2\text{ lb} + 1\text{ lb } 6\text{ oz} = 3\text{ lb } 6\text{ oz}$$

Charlie bought $3$ pounds $6$ ounces of steak.

{{< fillin
  question="In the worked example above, Charlie's three steaks weighed 14 ounces, 1 pound 2 ounces, and 1 pound 6 ounces. What is their total weight in ounces?"
  answer="54"
  hint="Convert each weight to ounces first (1 pound = 16 ounces), then add: $14 + 18 + 22$."
>}}

**Example.** Anthony bought four planks of wood that were each $6$ feet
$4$ inches long. If the four planks are placed end-to-end, what is the
total length of the wood?

Multiply the inches, then the feet; convert the extra inches to feet, then
add:

$$
4 \times (6\text{ ft } 4\text{ in}) = 24\text{ ft } 16\text{ in} =
24\text{ ft} + 1\text{ ft } 4\text{ in} = 25\text{ ft } 4\text{ in}
$$

Anthony bought $25$ feet $4$ inches of wood.

{{< fillin
  question="Henri triples a spaghetti sauce recipe that calls for 1 pound 8 ounces of ground turkey. How many total ounces of ground turkey will he need?"
  answer="72"
  hint="Convert 1 pound 8 ounces to ounces (24), then multiply by 3."
>}}

## Make unit conversions in the metric system

In the metric system, units are related by powers of $10$. The root words
of their names reflect this relation. For example, the basic unit for
measuring length is a meter. One kilometer is $1000$ meters — the prefix
*kilo-* means thousand. One centimeter is $\tfrac{1}{100}$ of a meter,
because the prefix *centi-* means one one-hundredth (just like one cent is
$\tfrac{1}{100}$ of one dollar). The equivalencies of measurements in the
metric system are:

| Length | Mass | Volume/Capacity |
| :--- | :--- | :--- |
| $1$ kilometer (km) $= 1000$ m | $1$ kilogram (kg) $= 1000$ g | $1$ kiloliter (kL) $= 1000$ L |
| $1$ hectometer (hm) $= 100$ m | $1$ hectogram (hg) $= 100$ g | $1$ hectoliter (hL) $= 100$ L |
| $1$ dekameter (dam) $= 10$ m | $1$ dekagram (dag) $= 10$ g | $1$ dekaliter (daL) $= 10$ L |
| $1$ meter (m) $= 1$ m | $1$ gram (g) $= 1$ g | $1$ liter (L) $= 1$ L |
| $1$ decimeter (dm) $= 0.1$ m | $1$ decigram (dg) $= 0.1$ g | $1$ deciliter (dL) $= 0.1$ L |
| $1$ centimeter (cm) $= 0.01$ m | $1$ centigram (cg) $= 0.01$ g | $1$ centiliter (cL) $= 0.01$ L |
| $1$ millimeter (mm) $= 0.001$ m | $1$ milligram (mg) $= 0.001$ g | $1$ milliliter (mL) $= 0.001$ L |
| $1$ meter $= 100$ centimeters | $1$ gram $= 100$ centigrams | $1$ liter $= 100$ centiliters |
| $1$ meter $= 1000$ millimeters | $1$ gram $= 1000$ milligrams | $1$ liter $= 1000$ milliliters |

To make conversions in the metric system, we use the same technique we did
in the U.S. system — multiplying by a conversion factor of one, using the
Identity Property of Multiplication.

**Example.** Nick ran a $10$-kilometer race. How many meters did he run?

Multiply by $1$, writing $1$ as a fraction relating kilometers and meters:

$$
10\text{ km} \cdot \tfrac{1000\text{ m}}{1\text{ km}} = 10{,}000\text{
m}
$$

Nick ran $10{,}000$ meters.

{{< fillin
  question="Sandy completed her first 5-km race. How many meters did she run?"
  answer="5000"
  hint="1 kilometer = 1000 meters."
>}}

**Example.** Eleanor's newborn baby weighed $3{,}200$ grams. How many
kilograms did the baby weigh?

Multiply by $1$, writing $1$ as a fraction relating grams and kilograms:

$$
3{,}200\text{ g} \cdot \tfrac{1\text{ kg}}{1000\text{ g}} = 3.2\text{
kilograms}
$$

The baby weighed $3.2$ kilograms.

{{< fillin
  question="Kari's newborn baby weighed 2800 grams. How many kilograms did the baby weigh?"
  answer="2.8"
  hint="Divide by 1000 to convert grams to kilograms — the same as moving the decimal three places left."
>}}

Since the metric system is based on multiples of ten, conversions involve
multiplying by multiples of ten. We learned how to simplify these
calculations by just moving the decimal: to multiply by $10$, $100$, or
$1000$, move the decimal to the right $1$, $2$, or $3$ places
respectively; to multiply by $0.1$, $0.01$, or $0.001$, move the decimal
to the left $1$, $2$, or $3$ places respectively. We can apply this
pattern when we make measurement conversions in the metric system — in the
example above, we changed $3{,}200$ grams to kilograms by moving the decimal
$3$ places to the left.

**Example.** Convert: (a) $350$ liters to kiloliters (b) $4.1$ liters to
milliliters.

(a) Multiply by $1$, writing $1$ as a fraction relating liters to
kiloliters, and move the decimal $3$ units to the left:

$$350\text{ L} \cdot \tfrac{1\text{ kL}}{1000\text{ L}} = 0.35\text{ kL}$$

(b) Multiply by $1$, writing $1$ as a fraction relating milliliters to
liters, and move the decimal $3$ units to the right:

$$4.1\text{ L} \cdot \tfrac{1000\text{ mL}}{1\text{ L}} = 4{,}100\text{ mL}$$

## Use mixed units of measurement in the metric system

Performing arithmetic operations on measurements with mixed units of
measure in the metric system requires the same care we used in the U.S.
system, but it may be easier because of the relation of the units to the
powers of $10$. We still must make sure to add or subtract like units.

**Example.** Ryland is $1.6$ meters tall. His younger brother is $85$
centimeters tall. How much taller is Ryland than his younger brother?

Convert $85$ centimeters to meters by moving the decimal $2$ places to the
left: $85$ cm is the same as $0.85$ m. Now that both measurements are in
meters, subtract:

$$1.60\text{ m} - 0.85\text{ m} = 0.75\text{ m}$$

Ryland is $0.75$ meters taller than his brother.

{{< fillin
  question="Mariella is 1.58 meters tall. Her daughter is 75 centimeters tall. How much taller is Mariella than her daughter? Write the answer in centimeters."
  answer="83"
  hint="Convert both heights to the same unit first — $1.58 m = 158$ cm — then subtract."
>}}

**Example.** Dena's recipe for lentil soup calls for $150$ milliliters of
olive oil. Dena wants to triple the recipe. How many liters of olive oil
will she need?

Triple $150$ mL, then convert to liters:

$$
3 \cdot 150\text{ mL} = 450\text{ mL} \qquad 450\text{ mL} \cdot
\tfrac{0.001\text{ L}}{1\text{ mL}} = 0.45\text{ L}
$$

Dena needs $0.45$ liter of olive oil.

{{< fillin
  question="A recipe for Alfredo sauce calls for 250 milliliters of milk. Renata is making pasta for a big party and needs to multiply the recipe amounts by 8. How many liters of milk will she need?"
  answer="2"
  hint="First find the total in milliliters $(250 \times 8)$, then convert to liters by dividing by 1000."
>}}

## Convert between U.S. and metric systems of measurement

Many measurements in the United States are made in metric units. A drink
may come in $2$-liter bottles, calcium may come in $500$-mg capsules, and
we may run a $5$-K race. To work easily in both systems, we need to be
able to convert between the two. Some common conversion factors are:

| Length | Weight | Volume |
| :--- | :--- | :--- |
| $1$ in $= 2.54$ cm | $1$ lb $= 0.45$ kg | $1$ qt $= 0.95$ L |
| $1$ ft $= 0.305$ m | $1$ oz $= 28$ g | $1$ fl oz $= 30$ mL |
| $1$ yd $= 0.914$ m | | |
| $1$ mi $= 1.61$ km | | |
| $1$ m $= 3.28$ ft | $1$ kg $= 2.2$ lb | $1$ L $= 1.06$ qt |

We make conversions between the systems just as we do within the
systems — by multiplying by unit conversion factors.

**Example.** Lee's water bottle holds $500$ mL of water. How many fluid
ounces are in the bottle? Round to the nearest tenth of an ounce.

Multiply by a unit conversion factor relating mL and ounces:

$$
500\text{ mL} \cdot \tfrac{1\text{ fl oz}}{30\text{ mL}} =
\tfrac{500}{30}\text{ fl oz} \approx 16.7\text{ fl oz}
$$

The water bottle holds about $16.7$ fluid ounces.

The conversion factors in the table above are not exact, but the
approximations they give are close enough for everyday purposes.

**Example.** Soleil passes a sign on a Canadian highway that says the next
rest stop is in $100$ kilometers. How many miles until the next rest stop?
Round your answer to the nearest mile.

Multiply by a unit conversion factor relating kilometers and miles:

$$
100\text{ km} \cdot \tfrac{1\text{ mi}}{1.61\text{ km}} =
\tfrac{100}{1.61}\text{ mi} \approx 62\text{ mi}
$$

It is about $62$ miles to the next rest stop.

{{< fillin
  question="How many quarts of soda are in a 2-liter bottle? Round to the nearest tenth."
  answer="2.1"
  hint="Multiply 2 liters by the conversion factor 1.06 quarts per liter."
>}}

{{< fillin
  question="The height of Mount Kilimanjaro is 5895 meters. Convert the height to feet. Round to the nearest foot."
  answer="19336"
  hint="Multiply 5895 meters by the conversion factor 3.28 feet per meter."
>}}

## Convert between Fahrenheit and Celsius temperatures

Have you ever been in a foreign country and heard the weather forecast? If
the forecast is for $22^\circ\text{C}$, what does that mean?

The U.S. system uses degrees Fahrenheit, written $^\circ\text{F}$. The
metric system uses degrees Celsius, written $^\circ\text{C}$. On the
Celsius scale, water freezes at $0^\circ\text{C}$ and boils at
$100^\circ\text{C}$. On the Fahrenheit scale, water freezes at
$32^\circ\text{F}$ and boils at $212^\circ\text{F}$. Normal body
temperature is about $37^\circ\text{C}$, which is equivalent to
$98.6^\circ\text{F}$.

If we know the temperature in one system, we can use a formula to convert
it to the other system.

{{< callout type="info" >}}
  **Temperature conversion.**

  To convert from Fahrenheit temperature, $F$, to Celsius temperature, $C$,
  use the formula:

  $$C = \tfrac{5}{9}(F - 32)$$

  To convert from Celsius temperature, $C$, to Fahrenheit temperature, $F$,
  use the formula:

  $$F = \tfrac{9}{5}C + 32$$
{{< /callout >}}

**Example.** Convert $50^\circ\text{F}$ into degrees Celsius.

Substitute $50$ for $F$ in the conversion formula, then simplify:

$$C = \tfrac{5}{9}(50 - 32) = \tfrac{5}{9}(18) = 10$$

A temperature of $50^\circ\text{F}$ is equivalent to $10^\circ\text{C}$.

{{< fillin
  question="Convert 41°F to degrees Celsius."
  answer="5"
  hint="Use $C = \tfrac{5}{9}(F - 32)$; first subtract $32$ from $41$."
>}}

**Example.** The weather forecast for Paris predicts a high of
$20^\circ\text{C}$. Convert the temperature into degrees Fahrenheit.

Substitute $20$ for $C$ in the conversion formula, then simplify:

$$F = \tfrac{9}{5}(20) + 32 = 36 + 32 = 68$$

So $20^\circ\text{C}$ is equivalent to $68^\circ\text{F}$.

{{< fillin
  question="Convert 10°C to degrees Fahrenheit."
  answer="50"
  hint="Use $F = \tfrac{9}{5}C + 32$; multiply first, then add $32$."
>}}

## Key terms

**U.S. system** — the system of measurement used in the United States,
with units like inch, foot, mile, pound, ton, cup, and gallon. **metric
system** — the system of measurement used in most of the world, with units
related by powers of $10$ (kilo-, centi-, milli-, and so on). Unit
conversions multiply a measurement by a cleverly chosen form of $1$ — a
fraction equal to $1$ relating two units — so the value stays the same
while the units change. **Fahrenheit** and **Celsius** — the two common
temperature scales, related by $C = \tfrac{5}{9}(F - 32)$ and $F =
\tfrac{9}{5}C + 32$.

## Practice

### Make unit conversions in the U.S. system

{{< fillin
  question="Carson is 45 inches tall. Convert his height to feet."
  answer="3.75"
  answerDisplay="3.75 feet"
  hint="Multiply by $\tfrac{1\text{ foot}}{12\text{ inches}}$ so the inches divide out."
>}}

{{< fillin
  question="Denver, Colorado, is 5,183 feet above sea level. Convert the height to miles. Round to the nearest hundredth of a mile."
  answer="0.98"
  answerDisplay="0.98 miles"
  hint="There are $5{,}280$ feet in a mile, so multiply by $\tfrac{1\text{ mile}}{5{,}280\text{ feet}}$."
>}}

{{< fillin
  question="How many tablespoons are in a gallon?"
  answer="256"
  answerDisplay="256 tablespoons"
  hint="Chain the conversion factors: gallons to quarts, quarts to pints, pints to cups, then 16 tablespoons per cup."
>}}

### Use mixed units of measurement in the U.S. system

{{< fillin
  question="Judy bought 1 pound 6 ounces of almonds, 2 pounds 3 ounces of walnuts, and 8 ounces of cashews. What was the total weight of the nuts, in ounces?"
  answer="65"
  answerDisplay="65 ounces, or 4 pounds 1 ounce"
  hint="Convert each weight to ounces first (1 pound = 16 ounces), then add."
>}}

{{< fillin
  question="Fawzi's SUV is 6 feet 4 inches tall. If he puts a box that is 2 feet 10 inches tall on top of his SUV, what is the total height of the SUV and the box, in inches?"
  answer="110"
  answerDisplay="110 inches, or 9 feet 2 inches"
  hint="Add the inches and the feet separately, then trade every 12 extra inches for 1 foot — or convert both heights to inches before adding."
>}}

{{< fillin
  question="Mireille needs to cut 24 inches of ribbon for each of the 12 girls in her dance class. How many yards of ribbon will she need altogether?"
  answer="8"
  answerDisplay="8 yards"
  hint="Find the total length in inches first, then multiply by $\tfrac{1\text{ yard}}{36\text{ inches}}$."
>}}

### Make unit conversions in the metric system

{{< fillin
  question="Kitaka hiked 8 kilometers. Convert the length to meters."
  answer="8000"
  answerDisplay="8,000 meters"
  hint="1 kilometer = 1,000 meters, so move the decimal three places to the right."
>}}

{{< fillin
  question="The depth of the Mariana Trench is 10,911 meters. Convert the depth to kilometers."
  answer="10.911"
  answerDisplay="10.911 kilometers"
  hint="Multiply by $\tfrac{1\text{ km}}{1{,}000\text{ m}}$ — the same as moving the decimal three places to the left."
>}}

{{< fillin
  question="A bottle of medicine contained 300 milliliters. Convert this to liters."
  answer="0.3"
  answerDisplay="0.3 liters"
  hint="1 milliliter = 0.001 liter, so divide by 1,000."
>}}

### Use mixed units of measurement in the metric system

{{< fillin
  question="Stavros is 1.6 meters tall. His sister is 95 centimeters tall. How much taller, in centimeters, is Stavros than his sister?"
  answer="65"
  answerDisplay="65 centimeters"
  hint="Convert both heights to centimeters before subtracting — $1.6$ m is $160$ cm."
>}}

{{< fillin
  question="Concetta had a 2-kilogram bag of flour. She used 180 grams of flour to make biscotti. How many kilograms of flour are left in the bag?"
  answer="1.82"
  answerDisplay="1.82 kilograms"
  hint="Write the 180 grams as kilograms first ($0.18$ kg), then subtract from $2$ kg."
>}}

{{< fillin
  question="One glass of orange juice provides 560 milligrams of potassium. Linda drinks one glass of orange juice every morning. How many grams of potassium does Linda get from her orange juice in 30 days?"
  answer="16.8"
  answerDisplay="16.8 grams"
  hint="Find the total in milligrams first $(560 \times 30)$, then divide by 1,000 to get grams."
>}}

### Convert between the U.S. and the metric systems of measurement

{{< fillin
  question="Frankie is 42 inches tall. Convert his height to centimeters. Round to the nearest tenth of a centimeter."
  answer="106.7"
  answerDisplay="106.7 centimeters"
  hint="Use the conversion factor 1 inch = 2.54 centimeters."
>}}

{{< fillin
  question="Connie bought 9 yards of fabric to make drapes. Convert the fabric length to meters. Round to the nearest tenth of a meter."
  answer="8.2"
  answerDisplay="8.2 meters"
  hint="Use the conversion factor 1 yard = 0.914 meter."
>}}

{{< fillin
  question="Jackson's backpack weighs 15 kilograms. Convert the weight to pounds."
  answer="33"
  answerDisplay="33 pounds"
  hint="Use the conversion factor 1 kilogram = 2.2 pounds."
>}}

### Convert between Fahrenheit and Celsius temperatures

{{< fillin
  question="Convert 77°F to degrees Celsius."
  answer="25"
  answerDisplay="25°C"
  hint="Use $C = \tfrac{5}{9}(F - 32)$; subtract inside the parentheses first."
>}}

{{< fillin
  question="Convert 120°F to degrees Celsius. Round to the nearest tenth of a degree."
  answer="48.9"
  answerDisplay="48.9°C"
  hint="Use $C = \tfrac{5}{9}(F - 32)$; the difference $120 - 32$ is not a multiple of $9$, so the result needs rounding."
>}}

{{< fillin
  question="Convert 25°C to degrees Fahrenheit."
  answer="77"
  answerDisplay="77°F"
  hint="Use $F = \tfrac{9}{5}C + 32$; multiply before adding."
>}}

{{< fillin
  question="Convert 8°C to degrees Fahrenheit."
  answer="46.4"
  answerDisplay="46.4°F"
  hint="Use $F = \tfrac{9}{5}C + 32$; $\tfrac{9}{5}$ of $8$ is $14.4$."
>}}

---

<small>This section is adapted from [Prealgebra 2e, Section 7.5: Systems of Measurement](https://openstax.org/books/prealgebra-2e/pages/7-5-systems-of-measurement) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated the U.S., metric, and U.S.-to-metric conversion tables (Tables 7.2–7.4) as markdown tables; omitted the decorative photographs, the Celsius/Fahrenheit thermometer figure (its key reference points are given in prose instead), the Be Prepared quiz, and media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback; and adapted selected end-of-section exercises into the interactive Practice block, restating two mixed-unit answers as single-unit quantities.</small>
