---
title: Hyperbolas
description: >-
  Graph hyperbolas centered at the origin and at any point, and identify
  conic sections from their equations.
source_section: "11.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph a hyperbola with center at $(0,0)$
- Graph a hyperbola with center at $(h,k)$
- Identify conic sections by their equations
{{< /callout >}}

## Graph a Hyperbola with Center at $(0,0)$

The last conic section we will look at is called a **hyperbola**. We will see
that the equation of a hyperbola looks the same as the equation of an ellipse,
except it is a difference rather than a sum. While the equations of an ellipse
and a hyperbola are very similar, their graphs are very different.

We define a hyperbola as all points in a plane where the difference of their
distances from two fixed points is constant. Each of the fixed points is
called a **focus** of the hyperbola.

{{< callout type="info" >}}
### Hyperbola

A **hyperbola** is all points in a plane where the difference of their
distances from two fixed points is constant. Each of the fixed points is
called a **focus** of the hyperbola.
{{< /callout >}}

The line through the foci is called the **transverse axis**. The two points
where the transverse axis intersects the hyperbola are each a **vertex** of
the hyperbola. The midpoint of the segment joining the foci is called the
**center** of the hyperbola. The line perpendicular to the transverse axis
that passes through the center is called the **conjugate axis**. Each piece
of the graph is called a **branch** of the hyperbola.

Again our goal is to connect the geometry of a conic with algebra. Placing the
hyperbola on a rectangular coordinate system gives us that opportunity.
Place the hyperbola so the foci $(-c,0)$ and $(c,0)$ are on the $x$-axis and
the center is the origin.

The definition states the difference of the distance from the foci to a point
$(x,y)$ is constant. So $|d_1-d_2|$ is a constant that we will call $2a$, so
$|d_1-d_2|=2a$. We will use the distance formula to lead us to an algebraic
formula for an ellipse.

Use the distance formula to find $d_1,d_2$:

$$
\left|\sqrt{(x-(-c))^2+(y-0)^2}-\sqrt{(x-c)^2+(y-0)^2}\right|=2a.
$$

Eliminate the radicals. To simplify the equation of the ellipse, let
$c^2-a^2=b^2$. So, the equation of a hyperbola centered at the origin in
standard form is

$$
\frac{x^2}{a^2}-\frac{y^2}{b^2}=1.
$$

To graph the hyperbola, it will be helpful to know about the intercepts. We
will find the $x$-intercepts and $y$-intercepts using the formula.

| $x$-intercepts | $y$-intercepts |
|:--|:--|
| Let $y=0$. Then $\frac{x^2}{a^2}-\frac{0^2}{b^2}=1$, so $x^2=a^2$ and $x=\pm a$. The $x$-intercepts are $(a,0)$ and $(-a,0)$. | Let $x=0$. Then $\frac{0^2}{a^2}-\frac{y^2}{b^2}=1$, so $y^2=-b^2$ and $y=\pm\sqrt{-b^2}$. There are no $y$-intercepts. |

The $a,b$ values in the equation also help us find the **asymptotes** of the
hyperbola. The asymptotes are intersecting straight lines that the branches
of the graph approach but never intersect as the $x,y$ values get larger and
larger.

To find the asymptotes, we sketch a rectangle whose sides intersect the
$x$-axis at the vertices $(-a,0),(a,0)$ and intersect the $y$-axis at
$(0,-b),(0,b)$. The lines containing the diagonals of this rectangle are the
asymptotes of the hyperbola. The rectangle and asymptotes are not part of the
hyperbola, but they help us graph the hyperbola.

The asymptotes pass through the origin and we can evaluate their slope using
the rectangle we sketched. They have equations
$y=\frac{b}{a}x$ and $y=-\frac{b}{a}x$.

There are two equations for hyperbolas, depending whether the transverse axis
is vertical or horizontal. We can tell whether the transverse axis is
horizontal by looking at the equation. When the equation is in standard form,
if the $x^2$-term is positive, the transverse axis is horizontal. When the
equation is in standard form, if the $y^2$-term is positive, the transverse
axis is vertical.

The second equation could be derived similarly to what we have done. We will
summarize the results here.

{{< callout type="info" >}}
### Standard Form of the Equation of a Hyperbola with Center $(0,0)$

The standard form of the equation of a hyperbola with center $(0,0)$ is

$$
\frac{x^2}{a^2}-\frac{y^2}{b^2}=1
\quad\text{or}\quad
\frac{y^2}{a^2}-\frac{x^2}{b^2}=1.
$$

Unlike the equation of an ellipse, the denominator of $x^2$ is not always
$a^2$ and the denominator of $y^2$ is not always $b^2$.

When the $x^2$-term is positive, the transverse axis is on the $x$-axis. When
the $y^2$-term is positive, the transverse axis is on the $y$-axis.
{{< /callout >}}

| Property | $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ | $\frac{y^2}{a^2}-\frac{x^2}{b^2}=1$ |
|:--|:--|:--|
| Orientation | Transverse axis on the $x$-axis. Opens left and right. | Transverse axis on the $y$-axis. Opens up and down. |
| Vertices | $(-a,0),(a,0)$ | $(0,-a),(0,a)$ |
| $x$-intercepts | $(-a,0),(a,0)$ | none |
| $y$-intercepts | none | $(0,-a),(0,a)$ |
| Rectangle | Use $(\pm a,0),(0,\pm b)$ | Use $(0,\pm a),(\pm b,0)$ |
| Asymptotes | $y=\frac{b}{a}x,\ y=-\frac{b}{a}x$ | $y=\frac{a}{b}x,\ y=-\frac{a}{b}x$ |

We will use these properties to graph hyperbolas.

### Example 11.27

**How to graph a hyperbola with center $(0,0)$.** Graph

$$
\frac{x^2}{25}-\frac{y^2}{4}=1.
$$

**Solution.**

1. The equation is in standard form.
2. Since the $x^2$-term is positive, the transverse axis is horizontal.
3. Since $a^2=25$, then $a=\pm5$. The vertices are on the $x$-axis:
   $(-5,0),(5,0)$.
4. Since $a=\pm5$, the rectangle will intersect the $x$-axis at the
   vertices. Since $b=\pm2$, the rectangle will intersect the $y$-axis at
   $(0,-2)$ and $(0,2)$.
5. The asymptotes have the equations
   $y=\frac{2}{5}x$ and $y=-\frac{2}{5}x$.
6. Start at each vertex and use the asymptotes as a guide to draw the two
   branches.

{{< fillin
  question="For the hyperbola $\frac{x^2}{16}-\frac{y^2}{4}=1$, enter the positive $x$-coordinate of a vertex."
  answer="4"
  answerDisplay="$4$"
  hint="In standard form, $a^2=16$ and the vertices are $(\pm a,0)$."
>}}

{{< fillin
  question="For the hyperbola $\frac{x^2}{9}-\frac{y^2}{16}=1$, enter the positive $x$-coordinate of a vertex."
  answer="3"
  answerDisplay="$3$"
  hint="In standard form, $a^2=9$ and the vertices are $(\pm a,0)$."
>}}

We summarize the steps for reference.

{{< callout type="info" >}}
### How To: Graph a hyperbola centered at $(0,0)$

1. Write the equation in standard form.
2. Determine whether the transverse axis is horizontal or vertical.
3. Find the vertices.
4. Sketch the rectangle centered at the origin intersecting one axis at
   $\pm a$ and the other at $\pm b$.
5. Sketch the asymptotes—the lines through the diagonals of the rectangle.
6. Draw the two branches of the hyperbola.
{{< /callout >}}

Sometimes the equation for a hyperbola needs to be first placed in standard
form before we graph it.

### Example 11.28

Graph $4y^2-16x^2=64$.

**Solution.** To write the equation in standard form, divide each term by 64
to make the equation equal to 1.

$$
\begin{aligned}
4y^2-16x^2&=64\\
\frac{4y^2}{64}-\frac{16x^2}{64}&=\frac{64}{64}\\
\frac{y^2}{16}-\frac{x^2}{4}&=1.
\end{aligned}
$$

Since the $y^2$-term is positive, the transverse axis is vertical. Since
$a^2=16$, then $a=\pm4$. The vertices are on the $y$-axis,
$(0,-4),(0,4)$. Since $b^2=4$, then $b=\pm2$.

Sketch the rectangle intersecting the $x$-axis at $(-2,0),(2,0)$ and the
$y$-axis at the vertices. Sketch the asymptotes through the diagonals of the
rectangle. Draw the two branches of the hyperbola.

{{< fillin
  question="Write $4y^2-25x^2=100$ in standard form."
  answer="\frac{y^2}{25}-\frac{x^2}{4}=1"
  answerDisplay="$\frac{y^2}{25}-\frac{x^2}{4}=1$"
  hint="Divide every term by $100$."
>}}

{{< fillin
  question="Write $25y^2-9x^2=225$ in standard form."
  answer="\frac{y^2}{9}-\frac{x^2}{25}=1"
  answerDisplay="$\frac{y^2}{9}-\frac{x^2}{25}=1$"
  hint="Divide every term by $225$."
>}}

## Graph a Hyperbola with Center at $(h,k)$

Hyperbolas are not always centered at the origin. When a hyperbola is centered
at $(h,k)$, the equations change a bit as reflected in the table.

| Property | $\frac{(x-h)^2}{a^2}-\frac{(y-k)^2}{b^2}=1$ | $\frac{(y-k)^2}{a^2}-\frac{(x-h)^2}{b^2}=1$ |
|:--|:--|:--|
| Orientation | Transverse axis is horizontal. Opens left and right. | Transverse axis is vertical. Opens up and down. |
| Center | $(h,k)$ | $(h,k)$ |
| Vertices | $a$ units to the left and right of the center | $a$ units above and below the center |
| Rectangle | Use $a$ units left/right of center and $b$ units above/below the center | Use $a$ units above/below the center and $b$ units left/right of center |

### Example 11.29

**How to graph a hyperbola with center $(h,k)$.** Graph

$$
\frac{(x-1)^2}{9}-\frac{(y-2)^2}{16}=1.
$$

**Solution.**

1. The equation is in standard form.
2. Since the $x^2$-term is positive, the hyperbola opens left and right. The
   transverse axis is horizontal.
3. Here $h=1$, $k=2$, $a^2=9$, and $b^2=16$. The center is $(1,2)$,
   $a=3$, and $b=4$.
4. Mark the center $(1,2)$. Sketch the rectangle that goes through the points
   3 units to the left/right of the center and 4 units above and below the
   center.
5. Sketch the diagonals. Mark the vertices, which are on the rectangle 3
   units to the left and right of the center.
6. Start at each vertex and use the asymptotes as a guide.

{{< fillin
  question="For $\frac{(x-3)^2}{25}-\frac{(y-1)^2}{9}=1$, enter the center as an ordered pair."
  answer="(3,1)"
  answerDisplay="$(3,1)$"
  hint="Compare $x-h$ and $y-k$ with the standard form."
>}}

{{< fillin
  question="For $\frac{(x-2)^2}{4}-\frac{(y-2)^2}{9}=1$, enter the center as an ordered pair."
  answer="(2,2)"
  answerDisplay="$(2,2)$"
  hint="Compare $x-h$ and $y-k$ with the standard form."
>}}

We summarize the steps for easy reference.

{{< callout type="info" >}}
### How To: Graph a hyperbola centered at $(h,k)$

1. Write the equation in standard form.
2. Determine whether the transverse axis is horizontal or vertical.
3. Find the center and $a,b$.
4. Sketch the rectangle centered at $(h,k)$ using $a,b$.
5. Sketch the asymptotes—the lines through the diagonals of the rectangle.
   Mark the vertices.
6. Draw the two branches of the hyperbola.
{{< /callout >}}

Be careful as you identify the center. The standard equation has $x-h$ and
$y-k$ with the center as $(h,k)$.

### Example 11.30

Graph

$$
\frac{(y+2)^2}{9}-\frac{(x+1)^2}{4}=1.
$$

**Solution.** Since the $y^2$-term is positive, the hyperbola opens up and
down. Rewrite $y+2=y-(-2)$ and $x+1=x-(-1)$. The center is $(-1,-2)$.
Also, $a=3$ and $b=2$.

Sketch the rectangle that goes through the points 3 units above and below the
center and 2 units to the left/right of the center. Sketch the asymptotes—the
lines through the diagonals of the rectangle. Mark the vertices. Graph the
branches.

{{< fillin
  question="For $\frac{(y+3)^2}{16}-\frac{(x+2)^2}{9}=1$, enter the center as an ordered pair."
  answer="(-2,-3)"
  answerDisplay="$(-2,-3)$"
  hint="Rewrite each addition as subtraction of a negative number."
>}}

{{< fillin
  question="For $\frac{(y+2)^2}{9}-\frac{(x+2)^2}{9}=1$, enter the center as an ordered pair."
  answer="(-2,-2)"
  answerDisplay="$(-2,-2)$"
  hint="Rewrite each addition as subtraction of a negative number."
>}}

Again, sometimes we have to put the equation in standard form as our first
step.

### Example 11.31

Write the equation in standard form and graph
$4x^2-9y^2-24x-36y-36=0$.

**Solution.** To get to standard form, complete the squares.

$$
\begin{aligned}
4x^2-9y^2-24x-36y-36&=0\\
4(x^2-6x)-9(y^2+4y)&=36\\
4(x^2-6x+9)-9(y^2+4y+4)&=36+36-36\\
4(x-3)^2-9(y+2)^2&=36.
\end{aligned}
$$

Divide each term by 36 to get the constant to be 1.

$$
\frac{(x-3)^2}{9}-\frac{(y+2)^2}{4}=1.
$$

Since the $x^2$-term is positive, the hyperbola opens left and right. The
center is $(3,-2)$, $a=3$, and $b=4$.

Sketch the rectangle that goes through the points 3 units to the left/right of
the center and 2 units above and below the center. Sketch the asymptotes—the
lines through the diagonals of the rectangle. Mark the vertices. Graph the
branches.

{{< fillin
  question="Write $9x^2-16y^2+18x+64y-199=0$ in standard form."
  answer="\frac{(x+1)^2}{16}-\frac{(y-2)^2}{9}=1"
  answerDisplay="$\frac{(x+1)^2}{16}-\frac{(y-2)^2}{9}=1$"
  hint="Group the variable terms, complete both squares, and make the constant $1$."
>}}

{{< fillin
  question="Write $16x^2-25y^2+96x-50y-281=0$ in standard form."
  answer="\frac{(x+3)^2}{25}-\frac{(y+1)^2}{16}=1"
  answerDisplay="$\frac{(x+3)^2}{25}-\frac{(y+1)^2}{16}=1$"
  hint="Group the variable terms, complete both squares, and make the constant $1$."
>}}

## Identify Conic Sections by their Equations

Now that we have completed our study of the conic sections, we will take a
look at the different equations and recognize some ways to identify a conic
by its equation. When we are given an equation to graph, it is helpful to
identify the conic so we know what next steps to take.

To identify a conic from its equation, it is easier if we put the variable
terms on one side of the equation and the constants on the other.

| Conic | Characteristics of $x^2$- and $y^2$-terms | Example |
|:--|:--|:--|
| Parabola | Either $x^2$ OR $y^2$. Only one variable is squared. | $x=3y^2-2y+1$ |
| Circle | $x^2$- and $y^2$-terms have the same coefficients | $x^2+y^2=49$ |
| Ellipse | $x^2$- and $y^2$-terms have the same sign, different coefficients | $4x^2+25y^2=100$ |
| Hyperbola | $x^2$- and $y^2$-terms have different signs, different coefficients | $25y^2-4x^2=100$ |

### Example 11.32

Identify the graph of each equation as a circle, parabola, ellipse, or
hyperbola.

(a) $9x^2+4y^2+56y+160=0$

The $x^2$- and $y^2$-terms have the same sign and different coefficients:
**ellipse**.

(b) $9x^2-16y^2+18x+64y-199=0$

The $x^2$- and $y^2$-terms have different signs and different coefficients:
**hyperbola**.

(c) $x^2+y^2-6x-8y=0$

The $x^2$- and $y^2$-terms have the same coefficients: **circle**.

(d) $y=-2x^2-4x-5$

Only one variable, $x$, is squared: **parabola**.

{{< multiplechoice
  question="Identify the graph of $4x^2+25y^2=100$."
  answer="ellipse"
  hint="The squared terms have the same sign and different coefficients."
>}}
circle
parabola
ellipse
hyperbola
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the graph of $16y^2-9x^2=144$."
  answer="hyperbola"
  hint="The squared terms have different signs."
>}}
circle
parabola
ellipse
hyperbola
{{< /multiplechoice >}}

**Key terms.** A **hyperbola** is the set of all points in a plane for which
the difference of the distances from two fixed points, the **foci**, is
constant. Its principal line is the **transverse axis**; its turning points
are **vertices**; their midpoint is the **center**; the perpendicular line
through the center is the **conjugate axis**; each piece is a **branch**; and
the branches approach the **asymptotes**.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 11.4](https://openstax.org/books/intermediate-algebra-2e/pages/11-4-hyperbolas) by Lynn Marecek and Andrea Honeycutt Mathis, &copy; OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at OpenStax. Changes: omitted readiness quizzes, practice sets, self-checks, media links, and complex source figures; converted selected Try It problems to interactive questions and described graphing constructions in words.</small>
