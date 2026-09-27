---
title: Use Properties of Angles, Triangles, and the Pythagorean Theorem
description: >-
  Using the properties of supplementary and complementary angles, the
  properties of triangles (angle sum, right triangles, similar triangles),
  and the Pythagorean Theorem to find missing side lengths — adapted from
  OpenStax Prealgebra 2e, Section 9.3.
source_section: "9.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use the properties of angles
- Use the properties of triangles
- Use the Pythagorean Theorem
{{< /callout >}}

So far in this chapter we have focused on solving word problems. In this
section, we apply our problem-solving strategy to some common geometry
problems.

## Use the properties of angles

Are you familiar with the phrase "do a $180$"? It means to turn so that you
face the opposite direction — it comes from the fact that the measure of an
angle that makes a straight line is $180$ degrees.

<svg viewBox="0 0 260 90" role="img" aria-label="A straight line with an arrow at each end and a point marked in the middle. An arc from one side of the point to the other is labeled 180 degrees." style="max-width: 260px; display: block; margin: 1.5rem auto">
  <line x1="28" y1="70" x2="232" y2="70" stroke="currentColor" stroke-width="1.5" />
  <polygon points="20,70 30,65 30,75" fill="currentColor" />
  <polygon points="240,70 230,65 230,75" fill="currentColor" />
  <circle cx="130" cy="70" r="3" fill="currentColor" />
  <path d="M 70 70 A 60 60 0 0 1 190 70" fill="none" stroke="currentColor" stroke-width="1.5" />
  <text x="130" y="35" text-anchor="middle" font-size="15" fill="currentColor">180°</text>
</svg>

An **angle** is formed by two rays that share a common endpoint. Each ray
is called a side of the angle, and the common endpoint is called the
**vertex**. An angle is named by its vertex — in the figure below,
$\angle A$ is the angle with vertex at point $A$. The measure of $\angle A$
is written $m\angle A$.

<svg viewBox="0 0 220 100" role="img" aria-label="Angle A: two rays sharing vertex A, one horizontal and one sloping upward." style="max-width: 220px; display: block; margin: 1.5rem auto">
  <line x1="30" y1="80" x2="192" y2="80" stroke="currentColor" stroke-width="1.5" />
  <polygon points="200,80 190,75 190,85" fill="currentColor" />
  <line x1="30" y1="80" x2="182" y2="23" stroke="currentColor" stroke-width="1.5" />
  <polygon points="190,20 182.4,28.2 178.9,18.8" fill="currentColor" />
  <text x="20" y="90" text-anchor="middle" font-size="15" fill="currentColor">A</text>
</svg>

We measure angles in degrees, using the symbol ° to represent degrees, and
the abbreviation $m$ for the *measure* of an angle. So if $\angle A$ is
$27^\circ$, we write $m\angle A = 27$.

If the sum of the measures of two angles is $180^\circ$, the angles are called
**supplementary angles** — each angle is the *supplement* of the other. If
the sum of the measures of two angles is $90^\circ$, the angles are called
**complementary angles** — each angle is the *complement* of the other.

{{< callout type="info" >}}
  **Supplementary and complementary angles.** If the sum of the measures of
  two angles is $180^\circ$, the angles are supplementary. If $\angle A$ and
  $\angle B$ are supplementary, then $m\angle A + m\angle B = 180^\circ$.

  If the sum of the measures of two angles is $90^\circ$, the angles are
  complementary. If $\angle A$ and $\angle B$ are complementary, then
  $m\angle A + m\angle B = 90^\circ$.
{{< /callout >}}

In this section and the next, geometry formulas will name the variables and
give us the equation to solve. Since these applications all involve
geometric shapes, it will also help to draw a figure and label it with the
information from the problem.

{{< callout type="info" >}}
  **Use a problem-solving strategy for geometry applications.**

  1. **Read** the problem and make sure you understand all the words and
     ideas. Draw a figure and label it with the given information.
  2. **Identify** what you are looking for.
  3. **Name** what you are looking for and choose a variable to represent
     it.
  4. **Translate** into an equation by writing the appropriate formula or
     model for the situation. Substitute in the given information.
  5. **Solve** the equation using good algebra techniques.
  6. **Check** the answer in the problem and make sure it makes sense.
  7. **Answer** the question with a complete sentence.
{{< /callout >}}

**Example.** An angle measures $40^\circ$. Find (a) its supplement, and (b) its
complement.

(a) Let $s =$ the measure of the supplement. Since supplementary angles sum
to $180^\circ$: $s + 40 = 180$, so $s = 140$. Checking: $140 + 40 = 180$. The
supplement of the $40^\circ$ angle is $140^\circ$.

(b) Let $c =$ the measure of the complement. Since complementary angles sum
to $90^\circ$: $c + 40 = 90$, so $c = 50$. Checking: $50 + 40 = 90$. The
complement of the $40^\circ$ angle is $50^\circ$.

{{< fillin
  question="An angle measures $25^\circ$. Find its supplement, in degrees."
  answer="155"
  answerForm="decimal"
  answerDisplay="$155^\circ$"
  hint="Supplementary angles add to $180^\circ$. Name the supplement with a variable, write that sum as an equation, and solve."
>}}

{{< fillin
  question="An angle measures $77^\circ$. Find its complement, in degrees."
  answer="13"
  answerForm="decimal"
  answerDisplay="$13^\circ$"
  hint="Complementary angles add to $90^\circ$. Name the complement with a variable, write that sum as an equation, and solve."
>}}

Did you notice that the words *complementary* and *supplementary* are in
alphabetical order just like $90$ and $180$ are in numerical order?

**Example.** Two angles are supplementary. The larger angle is $30^\circ$ more
than the smaller angle. Find the measure of both angles.

Let $a =$ measure of the smaller angle, so $a + 30 =$ measure of the larger
angle. Since the angles are supplementary:

$$(a + 30) + a = 180$$

Combining like terms: $2a + 30 = 180$, so $2a = 150$ and $a = 75$ (the
smaller angle). The larger angle is $a + 30 = 105$. Checking:
$75 + 105 = 180$. The measures of the angles are $75^\circ$ and $105^\circ$.

{{< fillin
  question="Two angles are supplementary. The larger angle is $100^\circ$ more than the smaller angle. Find the measure of the smaller angle, in degrees."
  answer="40"
  answerForm="decimal"
  answerDisplay="$40^\circ$"
  hint="Let $a$ be the smaller angle and write the larger angle in terms of $a$. Supplementary angles add to $180^\circ$, so set up that equation and solve for $a$."
>}}

{{< fillin
  question="Two angles are complementary. The larger angle is $40^\circ$ more than the smaller angle. Find the measure of the smaller angle, in degrees."
  answer="25"
  answerForm="decimal"
  answerDisplay="$25^\circ$"
  hint="Let $a$ be the smaller angle and write the larger angle in terms of $a$. Complementary angles add to $90^\circ$, so set up that equation and solve for $a$."
>}}

## Use the properties of triangles

Triangles have three sides and three angles, and are named by their
vertices. The triangle below is called $\Delta ABC$, read "triangle ABC."
Each side is labeled with a lowercase letter to match the uppercase letter
of the opposite vertex.

<svg viewBox="0 0 220 170" role="img" aria-label="Triangle ABC with vertices A, B, and C, and sides a (opposite A), b (opposite B), and c (opposite C)." style="max-width: 220px; display: block; margin: 1.5rem auto">
  <polygon points="40,140 190,140 140,20" fill="none" stroke="currentColor" stroke-width="1.5" />
  <text x="30" y="152" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <text x="200" y="152" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <text x="140" y="14" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <text x="115" y="157" text-anchor="middle" font-size="14" fill="currentColor">b</text>
  <text x="179" y="78" text-anchor="middle" font-size="14" fill="currentColor">a</text>
  <text x="73" y="78" text-anchor="middle" font-size="14" fill="currentColor">c</text>
</svg>

The three angles of a triangle are related in a special way: the sum of
their measures is $180^\circ$.

{{< callout type="info" >}}
  **Sum of the measures of the angles of a triangle.** For any
  $\Delta ABC$, the sum of the measures of the angles is $180^\circ$:

  $$m\angle A + m\angle B + m\angle C = 180^\circ$$
{{< /callout >}}

**Example.** The measures of two angles of a triangle are $55^\circ$ and $82^\circ$.
Find the measure of the third angle.

Let $x =$ the measure of the third angle. Substituting into the angle-sum
formula:

$$
\begin{array}{rcl}
55 + 82 + x &=& 180 \\[4pt]
137 + x &=& 180 \\[4pt]
x &=& 43
\end{array}
$$

Checking: $55 + 82 + 43 = 180$. The measure of the third angle is $43$
degrees.

{{< fillin
  question="The measures of two angles of a triangle are $31^\circ$ and $128^\circ$. Find the measure of the third angle, in degrees."
  answer="21"
  answerForm="decimal"
  answerDisplay="$21^\circ$"
  hint="The three angle measures of a triangle add to $180^\circ$. Substitute the two known angles into that sum and solve for the third."
>}}

{{< fillin
  question="A triangle has angles of $49^\circ$ and $75^\circ$. Find the measure of the third angle, in degrees."
  answer="56"
  answerForm="decimal"
  answerDisplay="$56^\circ$"
  hint="Use the angle-sum property: substitute the two known angles into $m\angle A + m\angle B + m\angle C = 180$ and solve."
>}}

### Right triangles

A **right triangle** has one $90^\circ$ angle, often marked with a small square
in the corner.

<svg viewBox="0 0 180 130" role="img" aria-label="A right triangle with the 90 degree angle marked at the bottom-left corner with a small square." style="max-width: 180px; display: block; margin: 1.5rem auto">
  <polygon points="30,110 170,110 30,15" fill="none" stroke="currentColor" stroke-width="1.5" />
  <rect x="30" y="97" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2" />
  <text x="60" y="93" text-anchor="middle" font-size="14" fill="currentColor">90°</text>
</svg>

If we know a triangle is a right triangle, one angle measures $90^\circ$, so we
only need the measure of one of the other angles to find the third.

**Example.** One angle of a right triangle measures $28^\circ$. What is the
measure of the third angle?

Let $x =$ the measure of the third angle:

$$
\begin{array}{rcl}
x + 90 + 28 &=& 180 \\[4pt]
x + 118 &=& 180 \\[4pt]
x &=& 62
\end{array}
$$

Checking: $90 + 28 + 62 = 180$. The measure of the third angle is $62^\circ$.

{{< fillin
  question="One angle of a right triangle measures $56^\circ$. What is the measure of the other angle, in degrees?"
  answer="34"
  answerForm="decimal"
  answerDisplay="$34^\circ$"
  hint="A right triangle's third angle is $90^\circ$. Put all three angles into the $180^\circ$ angle sum and solve for the unknown one."
>}}

{{< fillin
  question="One angle of a right triangle measures $45^\circ$. What is the measure of the other angle, in degrees?"
  answer="45"
  answerForm="decimal"
  answerDisplay="$45^\circ$"
  hint="Remember the right angle: the three angles, one of them $90^\circ$, add to $180^\circ$. Write the equation and solve."
>}}

When one angle is defined in terms of another, it helps to write
expressions for all the angles before drawing the figure.

**Example.** The measure of one angle of a right triangle is $20^\circ$ more
than the measure of the smallest angle. Find the measures of all three
angles.

Let $a =$ the first (smallest) angle, so $a + 20 =$ the second angle, and
$90 =$ the third angle (the right angle). Substituting into the angle-sum
formula:

$$
\begin{array}{rcl}
a + (a + 20) + 90 &=& 180 \\[4pt]
2a + 110 &=& 180 \\[4pt]
2a &=& 70 \\[4pt]
a &=& 35 \text{ (first angle)}
\end{array}
$$

The second angle is $a + 20 = 55$, and the third angle is $90$. Checking:
$35 + 55 + 90 = 180$. The three angles measure $35^\circ$, $55^\circ$, and $90^\circ$.

{{< fillin
  question="The measure of one angle of a right triangle is $50^\circ$ more than the measure of the smallest angle. Find the measure of the smallest angle, in degrees."
  answer="20"
  answerForm="decimal"
  answerDisplay="$20^\circ$"
  hint="Let $a$ be the smallest angle, write the second angle in terms of $a$, and remember the right angle. The three add to $180^\circ$; solve for $a$."
>}}

{{< fillin
  question="The measure of one angle of a right triangle is $30^\circ$ more than the measure of the smallest angle. Find the measure of the smallest angle, in degrees."
  answer="30"
  answerForm="decimal"
  answerDisplay="$30^\circ$"
  hint="Name the smallest angle, write the other two angles as expressions (one of them is the right angle), set their sum equal to $180$, and solve."
>}}

### Similar triangles

When we use a map to plan a trip, a sketch to build a bookcase, or a
pattern to sew a dress, we are working with similar figures. In geometry,
if two figures have exactly the same shape but different sizes, we say they
are **similar figures** — one is a scale model of the other. The
corresponding sides of the two figures have the same ratio, and all their
corresponding angles have the same measures.

{{< callout type="info" >}}
  **Properties of similar triangles.** If two triangles are similar, their
  corresponding angle measures are equal and their corresponding side
  lengths are in the same ratio. For $\Delta ABC$ similar to
  $\Delta XYZ$:

  $$
  \begin{array}{rcl}
  m\angle A &=& m\angle X \\[4pt]
  m\angle B &=& m\angle Y \\[4pt]
  m\angle C &=& m\angle Z
  \end{array}
  $$

  $$\frac{a}{x} = \frac{b}{y} = \frac{c}{z}$$
{{< /callout >}}

The length of a side of a triangle may also be referred to by its
endpoints — two vertices of the triangle. For example, in $\Delta ABC$, the
length $a$ can also be written $BC$, the length $b$ can also be written
$AC$, and the length $c$ can also be written $AB$. This notation helps
match up corresponding side lengths when solving similar triangles.

**Example.** $\Delta ABC$ and $\Delta XYZ$ are similar triangles. In
$\Delta ABC$, $AB = 4$, $AC = 3.2$, and the third side is $BC = a$. In
$\Delta XYZ$, $XY = 3$, $YZ = 4.5$, and the third side is $XZ = y$. Find the
length of the third side of each triangle.

Since the triangles are similar, corresponding sides are in the same
ratio:

$$\frac{AB}{XY} = \frac{BC}{YZ} = \frac{AC}{XZ}$$

Since $AB = 4$ corresponds to $XY = 3$, we use the ratio
$\tfrac{AB}{XY} = \tfrac{4}{3}$ to find the other sides. To find $a$:

$$
\begin{array}{rcl}
\tfrac{4}{3} &=& \tfrac{a}{4.5} \\[4pt]
3a &=& 4(4.5) \\[4pt]
3a &=& 18 \\[4pt]
a &=& 6
\end{array}
$$

To find $y$:

$$
\begin{array}{rcl}
\tfrac{4}{3} &=& \tfrac{3.2}{y} \\[4pt]
4y &=& 3(3.2) \\[4pt]
4y &=& 9.6 \\[4pt]
y &=& 2.4
\end{array}
$$

Checking: $4(4.5) = 6(3)$ gives $18 = 18$, and $4(2.4) = 3.2(3)$ gives
$9.6 = 9.6$. The third side of $\Delta ABC$ is $6$, and the third side of
$\Delta XYZ$ is $2.4$.

{{< fillin
  question="$\Delta ABC$ is similar to $\Delta XYZ$. Side $AB = 17$ corresponds to side $XY = 25.5$, and side $BC = a$ corresponds to side $YZ = 12$. Find $a$."
  answer="8"
  answerForm="decimal"
  hint="Corresponding sides are in the same ratio. Write the ratio of the pair you know fully equal to the ratio of the pair holding $a$, then solve the proportion."
>}}

{{< fillin
  question="In the same similar triangles ($AB = 17$ corresponds to $XY = 25.5$), side $AC = 15$ corresponds to side $XZ = y$. Find $y$."
  answer="22.5"
  answerForm="decimal"
  hint="Keep each ratio in the same order, $\Delta ABC$ over $\Delta XYZ$: set the known ratio equal to the ratio holding $y$, cross-multiply, and solve."
>}}

## Use the Pythagorean Theorem

The **Pythagorean Theorem** is a special property of right triangles that
has been used since ancient times, named after the Greek philosopher and
mathematician Pythagoras. In a right triangle, the side opposite the $90^\circ$
angle is called the **hypotenuse**, and the other two sides are called the
**legs**.

<svg viewBox="0 0 200 150" role="img" aria-label="A right triangle with legs a and b and hypotenuse c, the right angle marked at the bottom-left." style="max-width: 200px; display: block; margin: 1.5rem auto">
  <polygon points="30,130 170,130 30,20" fill="none" stroke="currentColor" stroke-width="1.5" />
  <rect x="30" y="117" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2" />
  <text x="15" y="78" text-anchor="middle" font-size="14" fill="currentColor">a</text>
  <text x="100" y="146" text-anchor="middle" font-size="14" fill="currentColor">b</text>
  <text x="115" y="65" text-anchor="middle" font-size="14" fill="currentColor">c</text>
</svg>

The Pythagorean Theorem tells how the lengths of the three sides of a right
triangle relate to each other: in any right triangle, the sum of the
squares of the two legs equals the square of the hypotenuse.

{{< callout type="info" >}}
  **The Pythagorean Theorem.** In any right triangle $\Delta ABC$,

  $$a^2 + b^2 = c^2$$

  where $c$ is the length of the hypotenuse and $a$ and $b$ are the lengths
  of the legs.
{{< /callout >}}

To solve for a side length, recall that if $m = n^2$, then
$\sqrt{m} = n$ for $n \geq 0$. For example, $\sqrt{25}$ is $5$ because
$5^2 = 25$.

**Example.** Use the Pythagorean Theorem to find the length of the
hypotenuse of a right triangle whose legs measure $3$ and $4$.

Let $c =$ the length of the hypotenuse:

$$
\begin{array}{rcl}
a^2 + b^2 &=& c^2 \\[4pt]
3^2 + 4^2 &=& c^2 \\[4pt]
9 + 16 &=& c^2 \\[4pt]
25 &=& c^2 \\[4pt]
\sqrt{25} &=& c \\[4pt]
5 &=& c
\end{array}
$$

Checking: $3^2 + 4^2 = 5^2$ gives $9 + 16 = 25$. The length of the
hypotenuse is $5$.

{{< fillin
  question="Use the Pythagorean Theorem to find the length of the hypotenuse of a right triangle whose legs measure 6 and 8."
  answer="10"
  answerForm="decimal"
  hint="Substitute the two legs for $a$ and $b$ in $a^2 + b^2 = c^2$, add the squares, and take the square root."
>}}

{{< fillin
  question="Use the Pythagorean Theorem to find the length of the hypotenuse of a right triangle whose legs measure 15 and 8."
  answer="17"
  answerForm="decimal"
  hint="Substitute the legs into $a^2 + b^2 = c^2$, simplify, and use the definition of the square root to find $c$."
>}}

**Example.** Use the Pythagorean Theorem to find the length of the longer
leg of a right triangle whose hypotenuse is $13$ and whose shorter leg is
$5$.

Let $b =$ the unknown leg:

$$
\begin{array}{rcl}
a^2 + b^2 &=& c^2 \\[4pt]
5^2 + b^2 &=& 13^2 \\[4pt]
25 + b^2 &=& 169 \\[4pt]
b^2 &=& 144 \\[4pt]
b &=& \sqrt{144} \\[4pt]
b &=& 12
\end{array}
$$

Checking: $5^2 + 12^2 = 13^2$ gives $25 + 144 = 169$. The length of the leg
is $12$.

{{< fillin
  question="Use the Pythagorean Theorem to find the length of the leg of a right triangle whose hypotenuse is 17 and whose other leg is 15."
  answer="8"
  answerForm="decimal"
  hint="The hypotenuse is $c$. Substitute the known leg and the hypotenuse into $a^2 + b^2 = c^2$, isolate $b^2$, and take the square root."
>}}

{{< fillin
  question="Use the Pythagorean Theorem to find the length of the leg of a right triangle whose hypotenuse is 15 and whose other leg is 9."
  answer="12"
  answerForm="decimal"
  hint="Put the hypotenuse in for $c$ and the known leg for $a$ in $a^2 + b^2 = c^2$, subtract to isolate $b^2$, then take the square root."
>}}

**Example.** Kelvin is building a gazebo and wants to brace each corner by
placing a $10$-inch wooden bracket diagonally, as shown, so that the
distances from the corner to each end of the bracket are equal. How far
below the corner should he fasten the bracket? Approximate to the nearest
tenth of an inch.

<svg viewBox="0 0 180 165" role="img" aria-label="The top corner of a gazebo frame, where a horizontal beam meets a vertical post at a right angle. A diagonal brace labeled 10 in joins the post and the beam; its ends are a distance x below the corner on the post and a distance x from the corner along the beam." style="max-width: 180px; display: block; margin: 1.5rem auto">
  <polyline points="165,25 30,25 30,155" fill="none" stroke="currentColor" stroke-width="1.5" />
  <line x1="30" y1="125" x2="130" y2="25" stroke="currentColor" stroke-width="2.5" />
  <rect x="30" y="25" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.2" />
  <text x="18" y="80" text-anchor="middle" font-size="14" fill="currentColor">x</text>
  <text x="80" y="17" text-anchor="middle" font-size="14" fill="currentColor">x</text>
  <text x="92" y="98" text-anchor="start" font-size="14" fill="currentColor">10 in</text>
</svg>

Let $x =$ the distance from the corner along each side. Since both legs are
equal:

$$
\begin{array}{rcl}
a^2 + b^2 &=& c^2 \\[4pt]
x^2 + x^2 &=& 10^2 \\[4pt]
2x^2 &=& 100 \\[4pt]
x^2 &=& 50 \\[4pt]
x &=& \sqrt{50} \\[4pt]
x &\approx& 7.1
\end{array}
$$

Checking: $(7.1)^2 + (7.1)^2 \approx 10^2$. Kelvin should fasten each piece
of wood approximately $7.1$ inches from the corner.

{{< fillin
  question="John puts the base of a 13-ft ladder 5 feet from the wall of his house. How far up the wall does the ladder reach, in feet?"
  answer="12"
  answerForm="decimal"
  answerDisplay="12 feet"
  hint="The wall meets the ground at a right angle, so the ladder is the hypotenuse. Solve $a^2 + b^2 = c^2$ for the missing leg."
>}}

{{< fillin
  question="Randy wants to attach a 17-ft string of lights to the top of the 15-ft mast of his sailboat, running down to the deck. How far from the base of the mast should he attach the end of the light string, in feet?"
  answer="8"
  answerForm="decimal"
  answerDisplay="8 feet"
  hint="The mast stands at a right angle to the deck, so the light string is the hypotenuse. Solve $a^2 + b^2 = c^2$ for the missing leg."
>}}

## Key terms

**angle** — a figure formed by two rays sharing a common endpoint (the
vertex). **supplementary angles** — two angles whose measures sum to
$180^\circ$. **complementary angles** — two angles whose measures sum to $90^\circ$.
**right triangle** — a triangle with one $90^\circ$ angle. **similar triangles**
— triangles with the same shape but not necessarily the same size, whose
corresponding angles are equal and corresponding sides are proportional.
**hypotenuse** — the side of a right triangle opposite the right angle.
**leg** (of a right triangle) — either of the two sides that form the right
angle. **Pythagorean Theorem** — in a right triangle, $a^2 + b^2 = c^2$,
where $c$ is the hypotenuse and $a, b$ are the legs.

## Practice

### Use the properties of angles

{{< fillin
  question="Find the supplement of a $53^\circ$ angle. Give the measure in degrees."
  answer="127"
  answerForm="decimal"
  answerDisplay="$127^\circ$"
  hint="Supplementary angles add to $180^\circ$. Let $s$ be the supplement, write that sum as an equation, and solve."
>}}

{{< fillin
  question="Find the complement of a $53^\circ$ angle. Give the measure in degrees."
  answer="37"
  answerForm="decimal"
  answerDisplay="$37^\circ$"
  hint="Complementary angles add to $90^\circ$. Let $c$ be the complement, write that sum as an equation, and solve."
>}}

{{< fillin
  question="Find the supplement of a $135^\circ$ angle. Give the measure in degrees."
  answer="45"
  answerForm="decimal"
  answerDisplay="$45^\circ$"
  hint="Subtract the given measure from $180^\circ$."
>}}

{{< fillin
  question="Find the complement of a $27.5^\circ$ angle. Give the measure in degrees."
  answer="62.5"
  answerForm="decimal"
  answerDisplay="$62.5^\circ$"
  hint="Subtract the given measure from $90^\circ$; the decimal part carries through the subtraction."
>}}

{{< fillin
  question="Two angles are supplementary. The larger angle is $56^\circ$ more than the smaller angle. Find the measure of the smaller angle, in degrees."
  answer="62"
  answerForm="decimal"
  answerDisplay="$62^\circ$"
  hint="Let $a$ be the smaller angle and write the larger angle in terms of $a$. The two add to $180^\circ$; solve for $a$."
>}}

{{< fillin
  question="Two angles are complementary. The smaller angle is $34^\circ$ less than the larger angle. Find the measure of the smaller angle, in degrees."
  answer="28"
  answerForm="decimal"
  answerDisplay="$28^\circ$"
  hint="Let $x$ be the larger angle and write the smaller angle in terms of $x$. The two add to $90^\circ$; solve for $x$, then find the smaller angle."
>}}

### Use the properties of triangles

{{< fillin
  question="The measures of two angles of a triangle are $26^\circ$ and $98^\circ$. Find the measure of the third angle, in degrees."
  answer="56"
  answerForm="decimal"
  answerDisplay="$56^\circ$"
  hint="The three angle measures of a triangle add to $180^\circ$. Let $x$ be the third angle, write that sum as an equation, and solve."
>}}

{{< fillin
  question="The measures of two angles of a triangle are $105^\circ$ and $31^\circ$. Find the measure of the third angle, in degrees."
  answer="44"
  answerForm="decimal"
  answerDisplay="$44^\circ$"
  hint="Substitute the two known angles into $m\angle A + m\angle B + m\angle C = 180$ and solve for the third."
>}}

{{< fillin
  question="One angle of a right triangle measures $33^\circ$. What is the measure of the other angle, in degrees?"
  answer="57"
  answerForm="decimal"
  answerDisplay="$57^\circ$"
  hint="One angle of a right triangle is $90^\circ$. Put all three angles into the $180^\circ$ angle sum and solve for the unknown one."
>}}

{{< fillin
  question="One angle of a right triangle measures $22.5^\circ$. What is the measure of the other angle, in degrees?"
  answer="67.5"
  answerForm="decimal"
  answerDisplay="$67.5^\circ$"
  hint="Include the right angle: the three angles add to $180^\circ$. Write the equation and solve; the decimal part carries through."
>}}

{{< fillin
  question="$\Delta ABC$ is similar to $\Delta XYZ$. In $\Delta ABC$, side $AB = 15$, side $BC = 9$, and side $AC = b$. In $\Delta XYZ$, side $XY = 10$, side $YZ = x$, and side $XZ = 8$. Find the length of side $b$."
  answer="12"
  answerForm="decimal"
  answerDisplay="$b = 12$"
  hint="Match sides by their vertex letters ($AC$ goes with $XZ$), choose a pair whose lengths you both know for the ratio, and solve the proportion."
>}}

{{< fillin
  question="On a map, San Francisco, Las Vegas, and Los Angeles form a triangle. On the map, Los Angeles to Las Vegas measures 1 inch, Los Angeles to San Francisco measures 1.3 inches, and San Francisco to Las Vegas measures 2.1 inches. The actual distance from Los Angeles to Las Vegas is 270 miles. Find the actual distance from Los Angeles to San Francisco, in miles."
  answer="351"
  answerForm="decimal"
  answerDisplay="351 miles"
  hint="The map triangle and the real triangle are similar. Write a proportion that compares the map lengths with the actual distances, keeping the same order on both sides, and solve."
>}}

{{< fillin
  question="Joe wants to build a doll house for his daughter that looks just like his house. His house is 30 feet wide and 35 feet tall at the highest point of the roof. If the doll house will be 2.5 feet wide, how tall will its highest point be, in feet? Round to the nearest tenth."
  answer="2.9"
  answerForm="decimal"
  answerDisplay="2.9 feet"
  hint="The doll house and the house are similar figures. Set up a proportion with widths in one ratio and heights in the other, in the same order, then solve and round."
>}}

### Use the Pythagorean Theorem

{{< fillin
  question="A right triangle has legs measuring 9 and 12. Use the Pythagorean Theorem to find the length of the hypotenuse."
  answer="15"
  answerForm="decimal"
  answerDisplay="$c = 15$"
  hint="Substitute the legs for $a$ and $b$ in $a^2 + b^2 = c^2$, add the squares, and take the square root."
>}}

{{< fillin
  question="In a right triangle, the hypotenuse measures 10 and one leg measures 6. Use the Pythagorean Theorem to find the length of the other leg."
  answer="8"
  answerForm="decimal"
  answerDisplay="$b = 8$"
  hint="The hypotenuse is $c$. Substitute into $a^2 + b^2 = c^2$, isolate $b^2$ first, then take the square root."
>}}

{{< fillin
  question="In a right triangle, the hypotenuse measures 13 and one leg measures 8. Use the Pythagorean Theorem to find the length of the other leg. Round to the nearest tenth."
  answer="10.2"
  answerForm="decimal"
  answerDisplay="$b \approx 10.2$"
  hint="Substitute into $a^2 + b^2 = c^2$ with the hypotenuse as $c$ and isolate $b^2$. Its square root is not a whole number, so approximate it and round."
>}}

{{< fillin
  question="A 13-foot string of lights will be attached to the top of a 12-foot pole for a holiday display. How far from the base of the pole, in feet, should the end of the string of lights be anchored?"
  answer="5"
  answerForm="decimal"
  answerDisplay="5 feet"
  hint="The pole stands at a right angle to the ground, so the string of lights is the hypotenuse. Solve $a^2 + b^2 = c^2$ for the missing leg."
>}}

{{< fillin
  question="Chi is planning to put a path of paving stones through her flower garden, running diagonally from one corner to the opposite corner. The flower garden is a square with sides of 10 feet. What will the length of the path be, in feet? Round to the nearest tenth."
  answer="14.1"
  answerForm="decimal"
  answerDisplay="14.1 feet"
  hint="The diagonal cuts the square into two right triangles; the path is the hypotenuse and two sides of the square are the legs. Use $a^2 + b^2 = c^2$, then round."
>}}

---

<small>This section is adapted from [Prealgebra 2e, Section 9.3: Use Properties of Angles, Triangles, and the Pythagorean Theorem](https://openstax.org/books/prealgebra-2e/pages/9-3-use-properties-of-angles-triangles-and-the-pythagorean-theorem) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated the straight-angle, angle, triangle, right-triangle, and Pythagorean Theorem figures and the gazebo brace as accessible inline graphics, and omitted the other figures (the supplementary and complementary angle pairs, the similar-triangle pair with sides 16, 20, 12 and 4, 5, 3, the three leg-and-hypotenuse triangles, and the gazebo, house, and sailboat pictures); omitted the Be Prepared quiz and the Media callout; condensed the seven-step worked-example tables into prose and stacked equations, and added the angle and side-ratio equations to the similar-triangles box; replaced the Key Concepts list with a Key terms list; converted the practice problems ("Try Its") into interactive exercises with instant feedback, restating their diagrams as prose, asking one part of each two-part angle Try It, and asking for the smaller or smallest angle where the source asks for every measure; and adapted selected end-of-section exercises into the interactive Practice block, restating their diagrams as prose prompts, splitting the supplement-and-complement exercise into two items, and asking for one angle where the source asks for both.</small>
