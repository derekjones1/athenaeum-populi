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
  **By the end of this section, you will be able to:** use the properties
  of angles, use the properties of triangles, and use the Pythagorean
  Theorem.
{{< /callout >}}

So far in this chapter we have focused on solving word problems. In this
section, we apply our problem-solving strategy to some common geometry
problems.

## Use the properties of angles

Are you familiar with the phrase "do a $180$"? It means to turn so that you
face the opposite direction — it comes from the fact that the measure of an
angle that makes a straight line is $180$ degrees.

<svg viewBox="0 0 260 90" role="img" aria-label="A straight line with an arc marking the 180 degree angle it forms." style={{ maxWidth: 260, display: 'block', margin: '1.5rem auto' }}>
  <line x1="20" y1="70" x2="240" y2="70" stroke="currentColor" strokeWidth="1.5" />
  <path d="M 70 70 A 60 60 0 0 1 190 70" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="130" y="35" textAnchor="middle" fontSize="15" fill="currentColor">180°</text>
</svg>

An **angle** is formed by two rays that share a common endpoint. Each ray
is called a side of the angle, and the common endpoint is called the
**vertex**. An angle is named by its vertex — in the figure below,
$\angle A$ is the angle with vertex at point $A$. The measure of $\angle A$
is written $m\angle A$.

<svg viewBox="0 0 220 100" role="img" aria-label="Angle A: two rays sharing vertex A, one horizontal and one sloping upward." style={{ maxWidth: 220, display: 'block', margin: '1.5rem auto' }}>
  <line x1="30" y1="80" x2="200" y2="80" stroke="currentColor" strokeWidth="1.5" />
  <line x1="30" y1="80" x2="190" y2="20" stroke="currentColor" strokeWidth="1.5" />
  <text x="20" y="90" textAnchor="middle" fontSize="15" fill="currentColor">A</text>
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
  question="An angle measures $25^\circ$. Find its supplement."
  answer="155"
  hint="Let $s =$ the measure of the supplement. Translate as $s + 25 = 180$, then solve for $s$."
>}}

{{< fillin
  question="An angle measures $77^\circ$. Find its complement."
  answer="13"
  hint="Let $c =$ the measure of the complement. Translate as $c + 77 = 90$, then solve for $c$."
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
  question="Two angles are supplementary. The larger angle is $100^\circ$ more than the smaller angle. Find the measure of the smaller angle."
  answer="40"
  hint="Let $a =$ measure of the smaller angle, so $a + 100$ is the larger. Translate as $(a + 100) + a = 180$, then solve for $a$."
>}}

{{< fillin
  question="Two angles are complementary. The larger angle is $40^\circ$ more than the smaller angle. Find the measure of the smaller angle."
  answer="25"
  hint="Let $a =$ measure of the smaller angle, so $a + 40$ is the larger. Translate as $(a + 40) + a = 90$, then solve for $a$."
>}}

## Use the properties of triangles

Triangles have three sides and three angles, and are named by their
vertices. The triangle below is called $\Delta ABC$, read "triangle ABC."
Each side is labeled with a lowercase letter to match the uppercase letter
of the opposite vertex.

<svg viewBox="0 0 220 170" role="img" aria-label="Triangle ABC with vertices A, B, and C, and sides a (opposite A), b (opposite B), and c (opposite C)." style={{ maxWidth: 220, display: 'block', margin: '1.5rem auto' }}>
  <polygon points="40,140 190,140 140,20" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="30" y="152" textAnchor="middle" fontSize="15" fill="currentColor">A</text>
  <text x="200" y="152" textAnchor="middle" fontSize="15" fill="currentColor">C</text>
  <text x="140" y="14" textAnchor="middle" fontSize="15" fill="currentColor">B</text>
  <text x="115" y="157" textAnchor="middle" fontSize="14" fill="currentColor">b</text>
  <text x="179" y="78" textAnchor="middle" fontSize="14" fill="currentColor">a</text>
  <text x="73" y="78" textAnchor="middle" fontSize="14" fill="currentColor">c</text>
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
55 + 82 + x = 180 \qquad\Rightarrow\qquad 137 + x = 180
\qquad\Rightarrow\qquad x = 43
$$

Checking: $55 + 82 + 43 = 180$. The measure of the third angle is $43$
degrees.

{{< fillin
  question="The measures of two angles of a triangle are $31^\circ$ and $128^\circ$. Find the measure of the third angle."
  answer="21"
  hint="Translate as $31 + 128 + x = 180$, then solve for $x$."
>}}

{{< fillin
  question="A triangle has angles of $49^\circ$ and $75^\circ$. Find the measure of the third angle."
  answer="56"
  hint="Translate as $49 + 75 + x = 180$, then solve for $x$."
>}}

### Right triangles

A **right triangle** has one $90^\circ$ angle, often marked with a small square
in the corner.

<svg viewBox="0 0 180 130" role="img" aria-label="A right triangle with the 90 degree angle marked at the bottom-left corner with a small square." style={{ maxWidth: 180, display: 'block', margin: '1.5rem auto' }}>
  <polygon points="30,110 170,110 30,15" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <rect x="30" y="97" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.2" />
  <text x="60" y="93" textAnchor="middle" fontSize="14" fill="currentColor">90°</text>
</svg>

If we know a triangle is a right triangle, one angle measures $90^\circ$, so we
only need the measure of one of the other angles to find the third.

**Example.** One angle of a right triangle measures $28^\circ$. What is the
measure of the third angle?

Let $x =$ the measure of the third angle:

$$
x + 90 + 28 = 180 \qquad\Rightarrow\qquad x + 118 = 180
\qquad\Rightarrow\qquad x = 62
$$

Checking: $90 + 28 + 62 = 180$. The measure of the third angle is $62^\circ$.

{{< fillin
  question="One angle of a right triangle measures $56^\circ$. What is the measure of the other angle?"
  answer="34"
  hint="Translate as $x + 90 + 56 = 180$, then solve for $x$."
>}}

{{< fillin
  question="One angle of a right triangle measures $45^\circ$. What is the measure of the other angle?"
  answer="45"
  hint="Translate as $x + 90 + 45 = 180$, then solve for $x$."
>}}

When one angle is defined in terms of another, it helps to write
expressions for all the angles before drawing the figure.

**Example.** The measure of one angle of a right triangle is $20^\circ$ more
than the measure of the smallest angle. Find the measures of all three
angles.

Let $a =$ the first (smallest) angle, so $a + 20 =$ the second angle, and
$90 =$ the third angle (the right angle). Substituting into the angle-sum
formula:

$$a + (a + 20) + 90 = 180 \qquad\Rightarrow\qquad 2a + 110 = 180$$

$$2a = 70 \qquad\Rightarrow\qquad a = 35 \text{ (first angle)}$$

The second angle is $a + 20 = 55$, and the third angle is $90$. Checking:
$35 + 55 + 90 = 180$. The three angles measure $35^\circ$, $55^\circ$, and $90^\circ$.

{{< fillin
  question="The measure of one angle of a right triangle is $50^\circ$ more than the measure of the smallest angle. Find the measure of the smallest angle."
  answer="20"
  hint="Let $a =$ the smallest angle, so $a + 50$ is the second and $90$ is the third. Translate as $a + (a + 50) + 90 = 180$, then solve for $a$."
>}}

{{< fillin
  question="The measure of one angle of a right triangle is $30^\circ$ more than the measure of the smallest angle. Find the measure of the smallest angle."
  answer="30"
  hint="Let $a =$ the smallest angle, so $a + 30$ is the second and $90$ is the third. Translate as $a + (a + 30) + 90 = 180$, then solve for $a$."
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

  $$m\angle A = m\angle X, \quad m\angle B = m\angle Y, \quad m\angle C = m\angle Z$$

  $$\frac{a}{x} = \frac{b}{y} = \frac{c}{z}$$
{{< /callout >}}

The length of a side of a triangle may also be referred to by its
endpoints — two vertices of the triangle. For example, in $\Delta ABC$, the
length $a$ can also be written $BC$, the length $b$ can also be written
$AC$, and the length $c$ can also be written $AB$. This notation helps
match up corresponding side lengths when solving similar triangles.

**Example.** $\Delta ABC$ and $\Delta XYZ$ are similar triangles. In
$\Delta ABC$, side $AB = 4$ and side $AC = 3.2$; in $\Delta XYZ$, the
corresponding side $XY = 3$. Find the length of the third side of each
triangle (side $BC = a$ in $\Delta ABC$, and side $XZ = y$ in
$\Delta XYZ$), given that side $YZ = 4.5$.

Since the triangles are similar, corresponding sides are in the same
ratio:

$$\frac{AB}{XY} = \frac{BC}{YZ} = \frac{AC}{XZ}$$

Since $AB = 4$ corresponds to $XY = 3$, we use the ratio
$\frac{AB}{XY} = \frac{4}{3}$ to find the other sides. To find $a$:

$$
\frac{4}{3} = \frac{a}{4.5} \qquad\Rightarrow\qquad 3a = 4(4.5)
\qquad\Rightarrow\qquad 3a = 18 \qquad\Rightarrow\qquad a = 6
$$

To find $y$:

$$
\frac{4}{3} = \frac{3.2}{y} \qquad\Rightarrow\qquad 4y = 3(3.2)
\qquad\Rightarrow\qquad 4y = 9.6 \qquad\Rightarrow\qquad y = 2.4
$$

Checking: $4(4.5) = 6(3)$ gives $18 = 18$, and $4(2.4) = 3.2(3)$ gives
$9.6 = 9.6$. The third side of $\Delta ABC$ is $6$, and the third side of
$\Delta XYZ$ is $2.4$.

{{< fillin
  question="Triangle ABC is similar to triangle XYZ. Side $AB = 17$ corresponds to side $XY = 25.5$, and side $BC = a$ corresponds to side $YZ = 12$. Find $a$."
  answer="8"
  hint="Set up the proportion $\tfrac{AB}{XY} = \tfrac{BC}{YZ}$, i.e. $\tfrac{17}{25.5} = \tfrac{a}{12}$, and solve for $a$."
>}}

{{< fillin
  question="Using the same similar triangles ($AB = 17$ corresponds to $XY = 25.5$), side $AC = 15$ corresponds to side $XZ = y$. Find $y$."
  answer="22.5"
  hint="Set up the proportion $\tfrac{AB}{XY} = \tfrac{AC}{XZ}$, i.e. $\tfrac{17}{25.5} = \tfrac{15}{y}$, and solve for $y$."
>}}

## Use the Pythagorean Theorem

The **Pythagorean Theorem** is a special property of right triangles that
has been used since ancient times, named after the Greek philosopher and
mathematician Pythagoras. In a right triangle, the side opposite the $90^\circ$
angle is called the **hypotenuse**, and the other two sides are called the
**legs**.

<svg viewBox="0 0 200 150" role="img" aria-label="A right triangle with legs a and b and hypotenuse c, the right angle marked at the bottom-left." style={{ maxWidth: 200, display: 'block', margin: '1.5rem auto' }}>
  <polygon points="30,130 170,130 30,20" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <rect x="30" y="117" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.2" />
  <text x="15" y="78" textAnchor="middle" fontSize="14" fill="currentColor">a</text>
  <text x="100" y="146" textAnchor="middle" fontSize="14" fill="currentColor">b</text>
  <text x="115" y="65" textAnchor="middle" fontSize="14" fill="currentColor">c</text>
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

$$a^2 + b^2 = c^2 \qquad\Rightarrow\qquad 3^2 + 4^2 = c^2$$

$$
9 + 16 = c^2 \qquad\Rightarrow\qquad 25 = c^2 \qquad\Rightarrow\qquad
\sqrt{25} = c \qquad\Rightarrow\qquad 5 = c
$$

Checking: $3^2 + 4^2 = 5^2$ gives $9 + 16 = 25$. The length of the
hypotenuse is $5$.

{{< fillin
  question="Use the Pythagorean Theorem to find the length of the hypotenuse of a right triangle whose legs measure 6 and 8."
  answer="10"
  hint="Substitute into $a^2 + b^2 = c^2$: $6^2 + 8^2 = c^2$, then take the square root."
>}}

{{< fillin
  question="Use the Pythagorean Theorem to find the length of the hypotenuse of a right triangle whose legs measure 15 and 8."
  answer="17"
  hint="Substitute into $a^2 + b^2 = c^2$: $15^2 + 8^2 = c^2$, then take the square root."
>}}

**Example.** Use the Pythagorean Theorem to find the length of the longer
leg of a right triangle whose hypotenuse is $13$ and whose shorter leg is
$5$.

Let $b =$ the unknown leg:

$$a^2 + b^2 = c^2 \qquad\Rightarrow\qquad 5^2 + b^2 = 13^2$$

$$
25 + b^2 = 169 \qquad\Rightarrow\qquad b^2 = 144
\qquad\Rightarrow\qquad b = \sqrt{144} \qquad\Rightarrow\qquad b = 12
$$

Checking: $5^2 + 12^2 = 13^2$ gives $25 + 144 = 169$. The length of the leg
is $12$.

{{< fillin
  question="Use the Pythagorean Theorem to find the length of the leg of a right triangle whose hypotenuse is 17 and whose other leg is 15."
  answer="8"
  hint="Substitute into $a^2 + b^2 = c^2$: $15^2 + b^2 = 17^2$, then solve for $b$."
>}}

{{< fillin
  question="Use the Pythagorean Theorem to find the length of the leg of a right triangle whose hypotenuse is 15 and whose other leg is 9."
  answer="12"
  hint="Substitute into $a^2 + b^2 = c^2$: $9^2 + b^2 = 15^2$, then solve for $b$."
>}}

**Example.** Kelvin is building a gazebo and wants to brace each corner by
placing a $10$-inch wooden bracket diagonally, as shown, so that the
distances from the corner to each end of the bracket are equal. How far
below the corner should he fasten the bracket? Approximate to the nearest
tenth of an inch.

<svg viewBox="0 0 160 160" role="img" aria-label="A right angle at a gazebo corner with two equal legs labeled x meeting a 10-inch diagonal brace." style={{ maxWidth: 160, display: 'block', margin: '1.5rem auto' }}>
  <polyline points="30,20 30,140 150,140" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <line x1="30" y1="20" x2="150" y2="140" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5,4" />
  <rect x="30" y="127" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.2" />
  <text x="14" y="82" textAnchor="middle" fontSize="14" fill="currentColor">x</text>
  <text x="90" y="156" textAnchor="middle" fontSize="14" fill="currentColor">x</text>
  <text x="105" y="72" textAnchor="middle" fontSize="14" fill="currentColor">10 in</text>
</svg>

Let $x =$ the distance from the corner along each side. Since both legs are
equal:

$$a^2 + b^2 = c^2 \qquad\Rightarrow\qquad x^2 + x^2 = 10^2$$

$$
2x^2 = 100 \qquad\Rightarrow\qquad x^2 = 50 \qquad\Rightarrow\qquad
x = \sqrt{50} \approx 7.1
$$

Checking: $(7.1)^2 + (7.1)^2 \approx 10^2$. Kelvin should fasten each piece
of wood approximately $7.1$ inches from the corner.

{{< fillin
  question="John puts the base of a 13-ft ladder 5 feet from the wall of his house. How far up the wall does the ladder reach?"
  answer="12"
  hint="The ladder, wall, and ground form a right triangle with hypotenuse 13 and one leg 5. Substitute into $a^2 + b^2 = c^2$ and solve for the other leg."
>}}

{{< fillin
  question="Randy wants to attach a 17-ft string of lights to the top of the 15-ft mast of his sailboat, running down to the deck. How far from the base of the mast should he attach the end of the light string?"
  answer="8"
  hint="The mast, deck, and light string form a right triangle with hypotenuse 17 and one leg 15. Substitute into $a^2 + b^2 = c^2$ and solve for the other leg."
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

---

<small>This section is adapted from [Prealgebra 2e, Section 9.3: Use Properties of Angles, Triangles, and the Pythagorean Theorem](https://openstax.org/books/prealgebra-2e/pages/9-3-use-properties-of-angles-triangles-and-the-pythagorean-theorem) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated the angle, triangle, and Pythagorean Theorem figures as accessible inline graphics; omitted the Be Prepared quiz, the Media callout, the house and sailboat illustrations, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
