---
title: "Solve Geometry Applications: Circles and Irregular Figures"
description: >-
  Using the properties of circles (radius, diameter, circumference, area)
  and finding the area of irregular figures by splitting them into
  rectangles, triangles, and semicircles — adapted from OpenStax Prealgebra
  2e, Section 9.5.
source_section: "9.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use the properties of circles
- Find the area of irregular figures
{{< /callout >}}

In this section, we'll continue working with geometry applications, adding
a few new formulas to our collection.

## Use the properties of circles

Recall the properties of circles:

{{< callout type="info" >}}
  **Properties of circles.**

  - $r$ is the length of the radius.
  - $d$ is the length of the diameter, and $d = 2r$.
  - Circumference is the perimeter of a circle. The formula for
    circumference is $C = 2\pi r$.
  - The formula for the area of a circle is $A = \pi r^2$.
{{< /callout >}}

Remember, we approximate $\pi$ with $3.14$ or $\tfrac{22}{7}$ depending on
whether the radius of the circle is given as a decimal or a fraction. If
you use the $\pi$ key on a calculator, your answers will be slightly
different from the answers shown here, since that key uses more decimal
places.

**Example.** A circular sandbox has a radius of $2.5$ feet. Find (a) the
circumference and (b) the area of the sandbox.

(a) Let $C =$ circumference. Substituting into $C = 2\pi r$:

$$
\begin{aligned}
C &= 2\pi(2.5) \\[4pt]
C &\approx 2(3.14)(2.5) \\[4pt]
C &\approx 15.7 \text{ ft}
\end{aligned}
$$

Checking: if we draw a square around the circle, its sides would be $5$ ft
(twice the radius), so its perimeter would be $20$ ft — slightly more than
the circle's circumference, which makes sense. The circumference of the
sandbox is $15.7$ feet.

(b) Let $A =$ area. Substituting into $A = \pi r^2$:

$$
\begin{aligned}
A &= \pi(2.5)^2 \\[4pt]
A &\approx (3.14)(2.5)^2 \\[4pt]
A &\approx 19.625 \text{ sq. ft}
\end{aligned}
$$

Checking: the square around the circle has area $25$ sq ft, slightly more
than the circle's area, which makes sense. The area of the sandbox is
$19.625$ square feet.

{{< fillin
  question="A circular mirror has radius of 5 inches. Find the circumference, in inches. Use 3.14 for $\pi$."
  answer="31.4"
  answerForm="decimal"
  hint="The radius is given, so substitute it into $C = 2\pi r$, using $3.14$ for $\pi$."
>}}

{{< fillin
  question="A circular mirror has radius of 5 inches. Find the area, in square inches. Use 3.14 for $\pi$."
  answer="78.5"
  answerForm="decimal"
  hint="Substitute the radius into $A = \pi r^2$; square the radius before you multiply by $3.14$."
>}}

We usually see the formula for circumference in terms of the radius $r$.
But since the diameter of a circle is two times the radius, we can also
write the formula in terms of $d$. Using the commutative property,
$C = 2\pi r = \pi \cdot 2r$, and substituting $d = 2r$ gives $C = \pi d$.
We use this form when we're given the length of the diameter instead of
the radius.

**Example.** A circular table has a diameter of four feet. What is the
circumference of the table?

Let $C =$ the circumference. Substituting into $C = \pi d$:

$$
\begin{aligned}
C &= \pi(4) \\[4pt]
C &\approx (3.14)(4) \\[4pt]
C &\approx 12.56 \text{ feet}
\end{aligned}
$$

Checking: a square around the circle would have side $4$ and perimeter
$16$; it makes sense that the circumference, $12.56$, is a little less
than $16$. The circumference of the table is $12.56$ feet.

{{< fillin
  question="Find the circumference of a circular fire pit whose diameter is 5.5 feet. Give it in feet, using 3.14 for $\pi$."
  answer="17.27"
  answerForm="decimal"
  hint="The diameter is given, so use the form $C = \pi d$ with $3.14$ for $\pi$."
>}}

{{< fillin
  question="If the diameter of a circular trampoline is 12 feet, what is its circumference, in feet? Use 3.14 for $\pi$."
  answer="37.68"
  answerForm="decimal"
  hint="Use the form of the circumference formula that takes the diameter, $C = \pi d$."
>}}

**Example.** Find the diameter of a circle with a circumference of
$47.1$ centimeters.

Let $d =$ the diameter. Substituting into $C = \pi d$ with $C = 47.1$:

$$47.1 \approx 3.14d$$

Dividing both sides by $3.14$:

$$
\frac{47.1}{3.14} \approx \frac{3.14d}{3.14} \qquad\Rightarrow\qquad
15 \approx d
$$

Checking: $47.1 \overset{?}{=} (3.14)(15)$, and $47.1 = 47.1$. The
diameter of the circle is approximately $15$ centimeters.

{{< fillin
  question="Find the diameter of a circle with circumference of 94.2 centimeters. Give it in centimeters, using 3.14 for $\pi$."
  answer="30"
  answerForm="decimal"
  hint="Substitute the circumference into $C = \pi d$, then divide both sides by $3.14$ to isolate $d$."
>}}

{{< fillin
  question="Find the diameter of a circle with circumference of 345.4 feet. Give it in feet, using 3.14 for $\pi$."
  answer="110"
  answerForm="decimal"
  hint="Put the circumference in for $C$ in $C = \pi d$ and solve for $d$ by dividing by $3.14$."
>}}

## Find the area of irregular figures

So far, we have found area for rectangles, triangles, trapezoids, and
circles. An **irregular figure** is a figure that is not a standard
geometric shape — its area cannot be calculated using any single standard
area formula. But some irregular figures are made up of two or more
standard geometric shapes. To find the area of one of these irregular
figures, we can split it into figures whose formulas we know, and then add
the areas of the figures.

**Example.** Find the area of an L-shaped figure. Its top edge is $12$
units long and its left side is $4$ units tall. Its right side is $10$
units tall, and the part that hangs down below the top section, along the
right side, is $2$ units wide.

The figure is irregular, but we can split it into two rectangles: a top
rectangle with width $12$ and length $4$, and a lower rectangle hanging
below its right end. The right side of the whole figure is $10$ units, and
the top rectangle's right side is $4$ units, so the lower rectangle's
length is $10 - 4 = 6$ units, with width $2$.

$$
\begin{aligned}
A_{\text{figure}} &= A_{\text{rectangle}} + A_{\text{rectangle}} \\[4pt]
&= bh + bh \\[4pt]
&= 12 \cdot 4 + 2 \cdot 6 \\[4pt]
&= 48 + 12 \\[4pt]
&= 60
\end{aligned}
$$

The area of the figure is $60$ square units. (There's more than one way to
split an irregular figure into rectangles — try splitting this one a
different way and check that you still get the same total area.)

{{< fillin
  question="An L-shaped figure has a top edge 8 units long and a left side 6 units tall. Along the top runs a bar 2 units tall; below it, flush with the left side, a column 3 units wide runs down to the bottom. Find the area of the figure, in square units."
  answer="28"
  answerForm="decimal"
  hint="Split the figure into two rectangles, for example the full-height column and the part of the bar to its right, and add their areas."
>}}

{{< fillin
  question="A figure is a rectangle 14 units wide and 10 units tall with a rectangular notch cut out of its bottom-left corner. The notch is 6 units wide, and the figure's left edge, above the notch, is 5 units tall. Find the area of the figure, in square units."
  answer="110"
  answerForm="decimal"
  hint="Find the area of the whole rectangle, then subtract the notch's area; work out the notch's height from the two vertical measurements."
>}}

**Example.** Find the area of a figure with a bottom edge of $8$ units, a
left side of $4$ units, a top edge of $5$ units, and a right side of $7$
units. A slanted edge joins the right end of the top edge to the top of the
right side.

We break this irregular figure into a triangle and a rectangle, and the
area of the figure is the sum of their areas. The rectangle has length $8$
and width $4$. Since both vertical sides of the rectangle are $4$, the
vertical leg of the triangle is $7 - 4 = 3$. Since the rectangle's length
is $8$, the base of the triangle is $8 - 5 = 3$.

$$
\begin{aligned}
A_{\text{figure}} &= A_{\text{rectangle}} + A_{\text{triangle}} \\[4pt]
&= lw + \tfrac{1}{2}bh \\[4pt]
&= 8 \cdot 4 + \tfrac{1}{2} \cdot 3 \cdot 3 \\[4pt]
&= 32 + 4.5 \\[4pt]
&= 36.5 \text{ sq. units}
\end{aligned}
$$

{{< fillin
  question="A figure is made of a rectangle 8 units long and 4 units tall and a right triangle attached to the rectangle's right side. The triangle's top edge is horizontal: it starts 1 unit below the top of the rectangle and runs 3 units to the right. The triangle's slanted side runs from the end of that edge down to the rectangle's bottom-right corner. Find the area of the figure, in square units."
  answer="36.5"
  answerForm="decimal"
  hint="Split the figure into the rectangle and the right triangle. The triangle's vertical leg is the part of the rectangle's right side below the 1-unit step. Add $lw$ and $\tfrac{1}{2}bh$."
>}}

{{< fillin
  question="A figure is a rectangle 12 units long and 5 units tall with a triangle standing on the middle of its top edge. The triangle is 4 units tall, and its height splits its base into two pieces of 2.5 units each. Find the area of the figure, in square units."
  answer="70"
  answerForm="decimal"
  hint="Add the rectangle's area to the triangle's area, $\tfrac{1}{2}bh$; the triangle's base is the two pieces together."
>}}

**Example.** A high school track is shaped like a rectangle with a
semicircle (half a circle) on each end. The rectangle has length $105$
meters and width $68$ meters. Find the area enclosed by the track, rounded
to the nearest hundredth.

We break the figure into a rectangle and two semicircles. The rectangle has
length $105$ m and width $68$ m. The semicircles have a diameter of $68$
m, so each has radius $34$ m.

$$
\begin{aligned}
A_{\text{figure}} &= A_{\text{rectangle}} + A_{\text{semicircles}} \\[4pt]
&= bh + 2\left(\tfrac{1}{2}\pi \cdot r^2\right) \\[4pt]
&\approx 105 \cdot 68 + 2\left(\tfrac{1}{2} \cdot 3.14 \cdot 34^2\right) \\[4pt]
&\approx 7{,}140 + 3{,}629.84 \\[4pt]
&\approx 10{,}769.84 \text{ square meters}
\end{aligned}
$$

{{< fillin
  question="A figure is a rectangle 15 units long and 9 units tall with a semicircle cut out of its right end; the semicircle's diameter is the rectangle's 9-unit right side. Find the area of the figure, in square units, rounded to the nearest tenth. Use 3.14 for $\pi$."
  answer="103.2"
  answerForm="decimal"
  hint="Subtract the semicircle's area, half of $\pi r^2$, from the rectangle's area; the radius is half the diameter."
>}}

{{< fillin
  question="A figure is a trapezoid whose parallel sides are 5.2 units (top) and 3.3 units (bottom) and whose height is 6.5 units, with a semicircle on top whose diameter is the 5.2-unit side. Find the area of the figure, in square units, rounded to the nearest hundredth. Use 3.14 for $\pi$."
  answer="38.24"
  answerForm="decimal"
  hint="Add the trapezoid's area, $\tfrac{1}{2}h(b_1 + b_2)$, to the semicircle's area, half of $\pi r^2$, then round."
>}}

## Key terms

**radius** — the distance from the center of a circle to any point on the
circle. **diameter** — the distance across a circle through its center,
equal to twice the radius. **circumference** — the perimeter of (distance
around) a circle, $C = 2\pi r$ or $C = \pi d$. **irregular figure** — a
figure that is not a standard geometric shape, whose area can often be
found by splitting it into rectangles, triangles, trapezoids, and circles
(or semicircles) and adding their areas.

## Practice

### Use the properties of circles

{{< fillin
  question="The lid of a paint bucket is a circle with radius 7 inches. Find the circumference of the lid, in inches. Use 3.14 for $\pi$."
  answer="43.96"
  answerForm="decimal"
  answerDisplay="$43.96$ inches"
  hint="The radius is given, so substitute it into $C = 2\pi r$, using $3.14$ for $\pi$."
>}}

{{< fillin
  question="The lid of a paint bucket is a circle with radius 7 inches. Find the area of the lid, in square inches. Use 3.14 for $\pi$."
  answer="153.86"
  answerForm="decimal"
  answerDisplay="$153.86$ square inches"
  hint="Substitute the radius into $A = \pi r^2$. Square the radius before multiplying."
>}}

{{< fillin
  question="A reflecting pool is in the shape of a circle with diameter of 20 feet. What is the circumference of the pool, in feet? Use 3.14 for $\pi$."
  answer="62.8"
  answerForm="decimal"
  answerDisplay="$62.8$ feet"
  hint="The diameter is given, so use the form $C = \pi d$ instead of $C = 2\pi r$."
>}}

{{< fillin
  question="A circle has a circumference of 163.28 inches. Find the diameter, in inches. Use 3.14 for $\pi$."
  answer="52"
  answerForm="decimal"
  answerDisplay="$52$ inches"
  hint="Substitute the circumference into $C = \pi d$, then divide both sides by $3.14$."
>}}

{{< fillin
  question="A circle has a circumference of 150.72 feet. Find the radius, in feet. Use 3.14 for $\pi$."
  answer="24"
  answerForm="decimal"
  answerDisplay="$24$ feet"
  hint="Substitute the circumference into $C = 2\pi r$, then divide both sides by $2(3.14)$ to isolate $r$."
>}}

### Find the area of irregular figures

{{< apfigure kind="figure" >}}
{"ariaLabel":"A sideways U-shaped figure: a square 6 units on each side with a rectangular notch cut into the middle of its right side. The top edge is labeled 6, the left edge is labeled 6, the upper right vertical edge is labeled 2, the lower right vertical edge is labeled 2, and the notch's upper horizontal edge is labeled 3.","unit":34,"polygons":[{"points":[[0,0],[6,0],[6,2],[3,2],[3,4],[6,4],[6,6],[0,6]],"edgeLabels":[null,"2",null,null,null,"2","6","6"]}],"texts":[{"at":[4.5,3.45],"text":"3","anchor":"middle"}]}
{{< /apfigure >}}

{{< fillin
  question="Find the area of the irregular figure shown above, in square units."
  answer="30"
  answerForm="decimal"
  answerDisplay="$30$ square units"
  hint="Find the area of the whole square, then subtract the rectangular notch; work out the notch's height from the side lengths."
>}}

{{< fillin
  question="Perry needs to put in a new lawn. His lot is a rectangle with a length of 120 feet and a width of 100 feet. The house is rectangular and measures 50 feet by 40 feet, and the driveway is rectangular and measures 20 feet by 30 feet. Find the area of Perry's lawn, in square feet."
  answer="9400"
  answerForm="decimal"
  answerDisplay="$9{,}400$ square feet"
  hint="Find the area of the whole lot, then subtract the areas of the house and the driveway."
>}}

{{< fillin
  question="Yuki bought a drop-leaf kitchen table. The rectangular part of the table is a 1-ft by 3-ft rectangle, and each drop leaf is a semicircle whose diameter is the 3-ft side of the rectangle. Find the area of the table with one leaf up, in square feet. Use 3.14 for $\pi$, and do not round."
  answer="6.5325"
  answerForm="decimal"
  answerDisplay="$6.5325$ square feet"
  hint="Add the rectangle's area to the area of one semicircle, half of $\pi r^2$; the radius is half the diameter."
>}}

{{< fillin
  question="Yuki bought a drop-leaf kitchen table. The rectangular part of the table is a 1-ft by 3-ft rectangle, and each drop leaf is a semicircle whose diameter is the 3-ft side of the rectangle. Find the area of the table with both leaves up, in square feet. Use 3.14 for $\pi$, and do not round."
  answer="10.065"
  answerForm="decimal"
  answerDisplay="$10.065$ square feet"
  hint="Two semicircles with the same diameter make one full circle; add that circle's area to the rectangle's."
>}}

---

<small>This section is adapted from [Prealgebra 2e, Section 9.5: Solve Geometry Applications: Circles and Irregular Figures](https://openstax.org/books/prealgebra-2e/pages/9-5-solve-geometry-applications-circles-and-irregular-figures) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: described the irregular-figure diagrams and the track diagram in prose instead of hotlinking images; condensed the seven-step worked-example tables into prose and stacked equations, correcting two slips in them (the sandbox's circumference step printed as 15 ft instead of 15.7 ft, and the table example's answer naming the diameter instead of the circumference) and naming the circumference C throughout; omitted the Problem Solving Strategy for Geometry Applications box, the Key Concepts summary, the Be Prepared quiz, Self Check checklist, and media links; added a Key terms list beyond the module's single glossary entry; converted selected practice problems ("Try Its") into interactive exercises with instant feedback, one question per part; and adapted selected end-of-section exercises into the interactive Practice block, recreating one composite-figure diagram as an accessible SVG and restating two diagram-dependent prompts in words.</small>
