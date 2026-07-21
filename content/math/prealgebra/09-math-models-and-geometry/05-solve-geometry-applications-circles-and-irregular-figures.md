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
  **By the end of this section, you will be able to:** use the properties
  of circles, and find the area of irregular figures.
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

(a) Let $c =$ circumference. Substituting into $C = 2\pi r$:

$$
C = 2\pi(2.5) \qquad\Rightarrow\qquad C \approx 2(3.14)(2.5)
\qquad\Rightarrow\qquad C \approx 15.7 \text{ ft}
$$

Checking: if we draw a square around the circle, its sides would be $5$ ft
(twice the radius), so its perimeter would be $20$ ft — slightly more than
the circle's circumference, which makes sense. The circumference of the
sandbox is $15.7$ feet.

(b) Let $A =$ area. Substituting into $A = \pi r^2$:

$$
A = \pi(2.5)^2 \qquad\Rightarrow\qquad A \approx (3.14)(2.5)^2
\qquad\Rightarrow\qquad A \approx 19.625 \text{ sq. ft}
$$

Checking: the square around the circle has area $25$ sq ft, slightly more
than the circle's area, which makes sense. The area of the sandbox is
$19.625$ square feet.

{{< fillin
  question="A circular mirror has radius of 5 inches. Find the circumference. Use 3.14 for $\pi$."
  answer="31.4"
  hint="Substitute into $C = 2\pi r$: $C = 2(3.14)(5)$."
>}}

{{< fillin
  question="A circular mirror has radius of 5 inches. Find the area. Use 3.14 for $\pi$."
  answer="78.5"
  hint="Substitute into $A = \pi r^2$: $A = (3.14)(5)^2$."
>}}

We usually see the formula for circumference in terms of the radius $r$.
But since the diameter of a circle is two times the radius, we can also
write the formula in terms of $d$. Using the commutative property,
$C = 2\pi r = \pi \cdot 2r$, and substituting $d = 2r$ gives $C = \pi d$.
We use this form when we're given the length of the diameter instead of
the radius.

**Example.** A circular table has a diameter of four feet. What is the
circumference of the table?

Let $c =$ the circumference. Substituting into $C = \pi d$:

$$
C = \pi(4) \qquad\Rightarrow\qquad C \approx (3.14)(4)
\qquad\Rightarrow\qquad C \approx 12.56 \text{ feet}
$$

Checking: a square around the circle would have side $4$ and perimeter
$16$; it makes sense that the circumference, $12.56$, is a little less
than $16$. The circumference of the table is $12.56$ feet.

{{< fillin
  question="Find the circumference of a circular fire pit whose diameter is 5.5 feet. Use 3.14 for $\pi$."
  answer="17.27"
  hint="Substitute into $C = \pi d$: $C = (3.14)(5.5)$."
>}}

{{< fillin
  question="If the diameter of a circular trampoline is 12 feet, what is its circumference? Use 3.14 for $\pi$."
  answer="37.68"
  hint="Substitute into $C = \pi d$: $C = (3.14)(12)$."
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
  question="Find the diameter of a circle with circumference of 94.2 centimeters. Use 3.14 for $\pi$."
  answer="30"
  hint="Substitute into $C = \pi d$: $94.2 = 3.14d$, then divide both sides by $3.14$."
>}}

{{< fillin
  question="Find the diameter of a circle with circumference of 345.4 feet. Use 3.14 for $\pi$."
  answer="110"
  hint="Substitute into $C = \pi d$: $345.4 = 3.14d$, then divide both sides by $3.14$."
>}}

## Find the area of irregular figures

So far, we have found area for rectangles, triangles, trapezoids, and
circles. An **irregular figure** is a figure that is not a standard
geometric shape — its area cannot be calculated using any single standard
area formula. But some irregular figures are made up of two or more
standard geometric shapes. To find the area of one of these irregular
figures, we can split it into figures whose formulas we know, and then add
the areas of the figures.

**Example.** Find the area of an L-shaped figure: a wide rectangle $12$
units long and $4$ units tall along the top, with a narrower rectangular
tab hanging down $10$ units total (so $6$ more units below the top
rectangle) and $2$ units wide, attached to the right side.

The figure is irregular, but we can split it into two rectangles: a blue
rectangle with width $12$ and length $4$ across the top, and a red
rectangle attached below it. The right side of the whole figure is $10$
units, and the blue rectangle's right side is $4$ units, so the red
rectangle's length is $10 - 4 = 6$ units, with width $2$.

$$
A_{\text{figure}} = A_{\text{rectangle}} + A_{\text{rectangle}}
= bh + bh = 12 \cdot 4 + 2 \cdot 6 = 48 + 12 = 60
$$

The area of the figure is $60$ square units. (There's more than one way to
split an irregular figure into rectangles — try splitting this one a
different way and check that you still get the same total area.)

{{< fillin
  question="An irregular figure looks like a narrow column 3 units wide and 6 units tall, with a wider arm attached across its top: the whole figure is 8 units wide at the top, and that top arm is 2 units tall. Find the total (shaded) area."
  answer="28"
  hint="Split into two rectangles: the column is 3 units wide by 6 units tall, and the top arm's extra width beyond the column is $(8 - 3) = 5$ units, at height 2. Add: $3 \cdot 6 + (8-3) \cdot 2$."
>}}

{{< fillin
  question="An irregular figure is shaped like a 14-by-10 rectangle with a rectangular notch cut out of the bottom-left corner. The notch is 6 units wide, and the un-notched top strip is 5 units tall (so the notch itself is $10 - 5 = 5$ units tall). Find the total (shaded) area."
  answer="110"
  hint="Find the full bounding rectangle's area ($14 \cdot 10$), then subtract the notch's area ($6 \cdot (10 - 5)$)."
>}}

**Example.** Find the area of a shaded region made of a rectangle $8$
units long and $4$ units tall, topped by a right triangle whose vertical
leg is $3$ units (the difference between the total right-side height of
$7$ and the rectangle's height of $4$) and whose horizontal leg (base) is
$3$ units (the difference between the rectangle's length of $8$ and the
$5$-unit top edge of the rectangle).

We break this irregular figure into a triangle and a rectangle, and the
area of the figure is the sum of their areas. The rectangle has length $8$
and width $4$. Since both vertical sides of the rectangle are $4$, the
vertical leg of the triangle is $7 - 4 = 3$. Since the rectangle's length
is $8$, the base of the triangle is $8 - 5 = 3$.

$$
A_{\text{figure}} = A_{\text{rectangle}} + A_{\text{triangle}} = lw +
\tfrac{1}{2}bh = 8 \cdot 4 + \tfrac{1}{2} \cdot 3 \cdot 3 = 32 + 4.5
$$

$$A_{\text{figure}} = 36.5 \text{ sq. units}$$

{{< fillin
  question="An irregular figure is a rectangle 8 units long and 4 units tall, with a triangular wedge attached at the top-right corner whose base and height are both 3 units. Find the total (shaded) area."
  answer="36.5"
  hint="Area = $8 \cdot 4 + \tfrac{1}{2}(3)(3)$. Add the rectangle and triangle areas."
>}}

{{< fillin
  question="An irregular figure is a rectangle 12 units long and 5 units tall, topped by a triangle whose base is $2.5 + 2.5 = 5$ units and whose height is 4 units. Find the total area (rectangle area $12 \cdot 5$, plus triangle area $\tfrac{1}{2}(5)(4)$)."
  answer="70"
  hint="Area = $12 \cdot 5 + \tfrac{1}{2}(5)(4)$. Add the rectangle and triangle areas."
>}}

**Example.** A high school track is shaped like a rectangle with a
semicircle (half a circle) on each end. The rectangle has length $105$
meters and width $68$ meters. Find the area enclosed by the track, rounded
to the nearest hundredth.

We break the figure into a rectangle and two semicircles. The rectangle has
length $105$ m and width $68$ m. The semicircles have a diameter of $68$
m, so each has radius $34$ m.

$$
A_{\text{figure}} = A_{\text{rectangle}} + A_{\text{semicircles}} = bh +
2\left(\tfrac{1}{2}\pi \cdot r^2\right)
$$

$$
A_{\text{figure}} \approx 105 \cdot 68 + 2\left(\tfrac{1}{2} \cdot 3.14
\cdot 34^2\right) \qquad\Rightarrow\qquad A_{\text{figure}} \approx 7140 +
3629.84
$$

$$A_{\text{figure}} \approx 10{,}769.84 \text{ square meters}$$

{{< fillin
  question="A shaded figure is a rectangle 15 units long and 9 units wide, with a semicircular bite (diameter equal to the rectangle's width, 9 units, so radius 4.5) cut out of one end. Find the shaded area, rounded to the nearest tenth. Use 3.14 for $\pi$."
  answer="103.2"
  hint="Area = rectangle area ($15 \cdot 9$) minus the semicircular bite ($\tfrac{1}{2}(3.14)(4.5)^2$). Subtract and round."
>}}

{{< fillin
  question="A shaded figure is a trapezoid with parallel top and bottom sides of 5.2 units and 3.3 units and height 6.5 units, topped by a semicircle whose diameter is 5.2 units (radius 2.6). Find the total (shaded) area, rounded to the nearest hundredth. Use 3.14 for $\pi$."
  answer="38.24"
  hint="Area = trapezoid area ($\tfrac{1}{2}(6.5)(5.2 + 3.3)$) plus semicircle area ($\tfrac{1}{2}(3.14)(2.6)^2$). Add and round to the nearest hundredth."
>}}

## Key terms

**radius** — the distance from the center of a circle to any point on the
circle. **diameter** — the distance across a circle through its center,
equal to twice the radius. **circumference** — the perimeter (distance
around) a circle, $C = 2\pi r$ or $C = \pi d$. **irregular figure** — a
figure that is not a standard geometric shape, whose area can often be
found by splitting it into rectangles, triangles, trapezoids, and circles
(or semicircles) and adding their areas.

---

<small>This section is adapted from [Prealgebra 2e, Section 9.5: Solve Geometry Applications: Circles and Irregular Figures](https://openstax.org/books/prealgebra-2e/pages/9-5-solve-geometry-applications-circles-and-irregular-figures) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: described the irregular-figure diagrams and the track diagram in prose instead of hotlinking images; omitted the Be Prepared quiz, Media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
