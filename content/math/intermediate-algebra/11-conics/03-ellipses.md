---
title: Ellipses
description: >-
  Graph ellipses centered at the origin and at any point, find their
  equations, and solve applications involving elliptical orbits.
source_section: "11.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph an ellipse with center at the origin
- Find the equation of an ellipse with center at the origin
- Graph an ellipse with center not at the origin
- Solve application with ellipses
{{< /callout >}}

## Graph an Ellipse with Center at the Origin

The next conic section we will look at is an **ellipse**. We define an ellipse
as all points in a plane where the sum of the distances from two fixed points
is constant. Each of the given points is called a **focus** of the ellipse.

{{< callout type="info" >}}
### Ellipse

An **ellipse** is all points in a plane where the sum of the distances from two
fixed points is constant. Each of the fixed points is called a **focus** of the
ellipse.
{{< /callout >}}

We can draw an ellipse by taking some fixed length of flexible string and
attaching the ends to two thumbtacks. We use a pen to pull the string taut and
rotate it around the two thumbtacks. The figure that results is an ellipse.

A line drawn through the foci intersect the ellipse in two points. Each point
is called a **vertex** of the ellipse. The segment connecting the vertices is
called the **major axis**. The midpoint of the segment is called the
**center** of the ellipse. A segment perpendicular to the major axis that
passes through the center and intersects the ellipse in two points is called
the **minor axis**.

We mentioned earlier that our goal is to connect the geometry of a conic with
algebra. Placing the ellipse on a rectangular coordinate system gives us that
opportunity. We place the ellipse so the foci $(-c,0),(c,0)$ are on the
$x$-axis and the center is the origin.

The definition states the sum of the distance from the foci to a point $(x,y)$
is constant. So $d_1+d_2$ is a constant that we will call $2a$, so
$d_1+d_2=2a$. We will use the distance formula to lead us to an algebraic
formula for an ellipse.

Use the distance formula to find $d_1,d_2$:

$$
\sqrt{(x-(-c))^2+(y-0)^2}+\sqrt{(x-c)^2+(y-0)^2}=2a.
$$

After eliminating radicals and simplifying, we get

$$
\frac{x^2}{a^2}+\frac{y^2}{a^2-c^2}=1.
$$

To simplify the equation of the ellipse, we let $a^2-c^2=b^2$. So, the
equation of an ellipse centered at the origin in standard form is

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1.
$$

To graph the ellipse, it will be helpful to know the intercepts. We will find
the $x$-intercepts and $y$-intercepts using the formula.

| $y$-intercepts | $x$-intercepts |
|:--|:--|
| Let $x=0$. Then $\tfrac{0^2}{a^2}+\tfrac{y^2}{b^2}=1$, so $y^2=b^2$ and $y=\pm b$. The $y$-intercepts are $(0,b)$ and $(0,-b)$. | Let $y=0$. Then $\tfrac{x^2}{a^2}+\tfrac{0^2}{b^2}=1$, so $x^2=a^2$ and $x=\pm a$. The $x$-intercepts are $(a,0)$ and $(-a,0)$. |

{{< callout type="info" >}}
### Standard Form of the Equation of an Ellipse with Center $(0,0)$

The standard form of the equation of an ellipse with center $(0,0)$ is

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1.
$$

The $x$-intercepts are $(a,0)$ and $(-a,0)$.

The $y$-intercepts are $(0,b)$ and $(0,-b)$.
{{< /callout >}}

Notice that when the major axis is horizontal, the value of $a$ will be
greater than the value of $b$ and when the major axis is vertical, the value
of $b$ will be greater than the value of $a$. We will use this information to
graph an ellipse that is centered at the origin.

| Ellipse with center $(0,0)$ | $\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1$, $a>b$ | $\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1$, $b>a$ |
|:--|:--|:--|
| Major axis | on the $x$-axis | on the $y$-axis |
| $x$-intercepts | $(-a,0),(a,0)$ | $(-a,0),(a,0)$ |
| $y$-intercepts | $(0,-b),(0,b)$ | $(0,-b),(0,b)$ |

### Example 11.20

**How to Graph an Ellipse with Center $(0,0)$.** Graph

$$
\frac{x^2}{4}+\frac{y^2}{9}=1.
$$

**Solution.**

1. The equation is in standard form.
2. Since $9>4$ and $9$ is in the $y^2$-term, the major axis is vertical.
3. The endpoints will be the $y$-intercepts. Since $b^2=9$, then
   $b=\pm3$. The endpoints of the major axis are $(0,3),(0,-3)$.
4. The endpoints will be the $x$-intercepts. Since $a^2=4$, then
   $a=\pm2$. The endpoints of the minor axis are $(2,0),(-2,0)$.
5. Sketch the ellipse through the four intercepts.

{{< fillin
  question="For $\tfrac{x^2}{4}+\tfrac{y^2}{16}=1$, enter the positive $y$-coordinate of a vertex."
  answer="4"
  answerDisplay="$4$"
  hint="The larger denominator is under $y^2$."
>}}

{{< fillin
  question="For $\tfrac{x^2}{9}+\tfrac{y^2}{16}=1$, enter the positive $y$-coordinate of a vertex."
  answer="4"
  answerDisplay="$4$"
  hint="The larger denominator is under $y^2$."
>}}

We summarize the steps for reference.

{{< callout type="info" >}}
### How To: Graph an Ellipse with Center $(0,0)$

1. Write the equation in standard form.
2. Determine whether the major axis is horizontal or vertical.
3. Find the endpoints of the major axis.
4. Find the endpoints of the minor axis.
5. Sketch the ellipse.
{{< /callout >}}

Sometimes our equation will first need to be put in standard form.

### Example 11.21

Graph $x^2+4y^2=16$.

**Solution.** We recognize this as the equation of an ellipse since both the
$x$ and $y$ terms are squared and have different coefficients.

To get the equation in standard form, divide both sides by 16 so that the
equation is equal to 1.

$$
\begin{aligned}
x^2+4y^2&=16\\
\frac{x^2}{16}+\frac{4y^2}{16}&=\frac{16}{16}\\
\frac{x^2}{16}+\frac{y^2}{4}&=1.
\end{aligned}
$$

The equation is in standard form. The ellipse is centered at the origin, so
the center is $(0,0)$. Since $16>4$ and 16 is in the $x^2$-term, the major
axis is horizontal.

Since $a^2=16$, $a=\pm4$, and since $b^2=4$, $b=\pm2$. The vertices are
$(4,0),(-4,0)$. The endpoints of the minor axis are $(0,2),(0,-2)$. Sketch
the ellipse.

{{< fillin
  question="Write $9x^2+16y^2=144$ in standard form."
  answer="\frac{x^2}{16}+\frac{y^2}{9}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{16}+\tfrac{y^2}{9}=1$"
  hint="Divide every term by $144$."
>}}

{{< fillin
  question="Write $16x^2+25y^2=400$ in standard form."
  answer="\frac{x^2}{25}+\frac{y^2}{16}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{25}+\tfrac{y^2}{16}=1$"
  hint="Divide every term by $400$."
>}}

## Find the Equation of an Ellipse with Center at the Origin

If we are given the graph of an ellipse, we can find the equation of the
ellipse.

### Example 11.22

Find the equation of the ellipse centered at $(0,0)$, with vertices
$(-4,0),(4,0)$ and endpoints of the minor axis $(0,3),(0,-3)$.

**Solution.** We recognize this as an ellipse that is centered at the origin:

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1.
$$

Since the major axis is horizontal and the distance from the center to the
vertex is 4, we know $a=4$ and so $a^2=16$:

$$
\frac{x^2}{16}+\frac{y^2}{b^2}=1.
$$

The minor axis is vertical and the distance from the center to the ellipse is
3, so we know $b=3$ and $b^2=9$:

$$
\frac{x^2}{16}+\frac{y^2}{9}=1.
$$

{{< fillin
  question="Find the equation of the ellipse centered at $(0,0)$ with $x$-intercepts $(-2,0),(2,0)$ and $y$-intercepts $(0,-5),(0,5)$."
  answer="\frac{x^2}{4}+\frac{y^2}{25}=1"
  answerDisplay="$\tfrac{x^2}{4}+\tfrac{y^2}{25}=1$"
  hint="Square each distance from the center for its denominator."
>}}

{{< fillin
  question="Find the equation of the ellipse centered at $(0,0)$ with $x$-intercepts $(-3,0),(3,0)$ and $y$-intercepts $(0,-2),(0,2)$."
  answer="\frac{x^2}{9}+\frac{y^2}{4}=1"
  answerDisplay="$\tfrac{x^2}{9}+\tfrac{y^2}{4}=1$"
  hint="Square each distance from the center for its denominator."
>}}

## Graph an Ellipse with Center Not at the Origin

The ellipses we have looked at so far have all been centered at the origin. We
will now look at ellipses whose center is $(h,k)$.

The equation is
$\tfrac{(x-h)^2}{a^2}+\tfrac{(y-k)^2}{b^2}=1$ and when $a>b$, the major axis
is horizontal so the distance from the center to the vertex is $a$. When
$b>a$, the major axis is vertical so the distance from the center to the
vertex is $b$.

{{< callout type="info" >}}
### Standard Form of the Equation of an Ellipse with Center $(h,k)$

The standard form of the equation of an ellipse with center $(h,k)$ is

$$
\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1.
$$

When $a>b$, the major axis is horizontal so the distance from the center to
the vertex is $a$.

When $b>a$, the major axis is vertical so the distance from the center to the
vertex is $b$.
{{< /callout >}}

### Example 11.23

Graph

$$
\frac{(x-3)^2}{9}+\frac{(y-1)^2}{4}=1.
$$

**Solution.** The equation is in standard form. The ellipse is centered at
$(h,k)$, so the center is $(3,1)$. Since $9>4$ and 9 is in the $x^2$-term,
the major axis is horizontal.

Since $a^2=9$, $a=\pm3$, and since $b^2=4$, $b=\pm2$. The distance from the
center to the vertices is 3. The distance from the center to the endpoints of
the minor axis is 2. The vertices are $(0,1),(6,1)$ and the endpoints of the
minor axis are $(3,3),(3,-1)$. Sketch the ellipse.

{{< fillin
  question="For $\tfrac{(x+3)^2}{4}+\tfrac{(y-5)^2}{16}=1$, enter the positive distance from the center to a vertex."
  answer="4"
  answerDisplay="$4$"
  hint="The major axis corresponds to the larger denominator."
>}}

{{< fillin
  question="For $\tfrac{(x-1)^2}{25}+\tfrac{(y+3)^2}{16}=1$, enter the positive distance from the center to a vertex."
  answer="5"
  answerDisplay="$5$"
  hint="The major axis corresponds to the larger denominator."
>}}

If we look at the equations
$\tfrac{x^2}{9}+\tfrac{y^2}{4}=1$ and
$\tfrac{(x-3)^2}{9}+\tfrac{(y-1)^2}{4}=1$, we see that they are both
ellipses with $a=3$ and $b=2$. So they will have the same size and shape.
They are different in that they do not have the same center.

Notice that we could have graphed
$\tfrac{(x-3)^2}{9}+\tfrac{(y-1)^2}{4}=1$ by translations. We moved the
original ellipse to the right 3 units and then up 1 unit.

In the next example we will use the translation method to graph the ellipse.

### Example 11.24

Graph

$$
\frac{(x+4)^2}{16}+\frac{(y-6)^2}{9}=1
$$

by translation.

**Solution.** This ellipse will have the same size and shape as
$\tfrac{x^2}{16}+\tfrac{y^2}{9}=1$, whose center is $(0,0)$. We graph this
ellipse first.

Since $16>9$, the major axis is horizontal. Since $a^2=16$, $a=\pm4$, and
since $b^2=9$, $b=\pm3$. The vertices are $(4,0),(-4,0)$. The endpoints of
the minor axis are $(0,3),(0,-3)$. Sketch the ellipse.

The original equation is in standard form,

$$
\frac{(x-(-4))^2}{16}+\frac{(y-6)^2}{9}=1.
$$

The ellipse is centered at $(h,k)$, so the center is $(-4,6)$. We translate
the graph of $\tfrac{x^2}{16}+\tfrac{y^2}{9}=1$ four units to the left and
then up 6 units. Verify that the center is $(-4,6)$. The new ellipse is the
ellipse whose equation is

$$
\frac{(x+4)^2}{16}+\frac{(y-6)^2}{9}=1.
$$

{{< fillin
  question="For $\tfrac{(x-5)^2}{9}+\tfrac{(y+4)^2}{4}=1$, enter the $x$-coordinate of the center."
  answer="5"
  answerDisplay="$5$"
  hint="The form $x-h$ gives the center coordinate $h$."
>}}

{{< fillin
  question="For $\tfrac{(x+6)^2}{16}+\tfrac{(y+2)^2}{25}=1$, enter the $y$-coordinate of the center."
  answer="-2"
  answerDisplay="$-2$"
  hint="Rewrite $y+2$ as $y-(-2)$."
>}}

When an equation has both an $x^2$ and a $y^2$ with different coefficients,
we verify that it is an ellipse by putting it in standard form. We will then
be able to graph the equation.

### Example 11.25

Write the equation

$$
x^2+4y^2-4x+24y+24=0
$$

in standard form and graph.

**Solution.** We put the equation in standard form by completing the squares
in both $x$ and $y$.

$$
\begin{aligned}
x^2+4y^2-4x+24y+24&=0\\
(x^2-4x+\underline{\phantom{4}})+
  (4y^2+24y+\underline{\phantom{36}})&=-24\\
(x^2-4x+\underline{\phantom{4}})+
  4(y^2+6y+\underline{\phantom{9}})&=-24\\
(x^2-4x+4)+4(y^2+6y+9)&=-24+4+36\\
(x-2)^2+4(y+3)^2&=16\\
\frac{(x-2)^2}{16}+\frac{4(y+3)^2}{16}&=\frac{16}{16}\\
\frac{(x-2)^2}{16}+\frac{(y+3)^2}{4}&=1.
\end{aligned}
$$

The equation is in standard form. The ellipse is centered at $(h,k)$, so the
center is $(2,-3)$. Since $16>4$ and 16 is in the $x^2$-term, the major axis
is horizontal. Since $a^2=16$, $a=\pm4$, and since $b^2=4$, $b=\pm2$. The
distance from the center to the vertices is 4. The distance from the center
to the endpoints of the minor axis is 2. The vertices are $(-2,-3),(6,-3)$
and the endpoints of the minor axis are $(2,-1),(2,-5)$. Sketch the ellipse.

{{< fillin
  question="Write $6x^2+4y^2+12x-32y+34=0$ in standard form."
  answer="\frac{(x+1)^2}{6}+\frac{(y-4)^2}{9}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{(x+1)^2}{6}+\tfrac{(y-4)^2}{9}=1$"
  hint="Group the $x$- and $y$-terms and complete both squares."
>}}

{{< fillin
  question="Write $4x^2+y^2-16x-6y+9=0$ in standard form."
  answer="\frac{(x-2)^2}{4}+\frac{(y-3)^2}{16}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{(x-2)^2}{4}+\tfrac{(y-3)^2}{16}=1$"
  hint="Group the $x$- and $y$-terms and complete both squares."
>}}

## Solve Application with Ellipses

The orbits of the planets around the sun follow elliptical paths.

### Example 11.26

Pluto (a dwarf planet) moves in an elliptical orbit around the Sun. The
closest Pluto gets to the Sun is approximately 30 astronomical units (AU) and
the furthest is approximately 50 AU. The Sun is one of the foci of the
elliptical orbit. Letting the ellipse center at the origin and labeling the
axes in AU, the orbit has vertices $(-40,0),(40,0)$ and the Sun at $(10,0)$.
Use the graph to write an equation for the elliptical orbit of Pluto.

**Solution.** We recognize this as an ellipse that is centered at the origin:

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1.
$$

Since the major axis is horizontal and the distance from the center to the
vertex is 40, we know $a=40$ and so $a^2=1600$:

$$
\frac{x^2}{1600}+\frac{y^2}{b^2}=1.
$$

The minor axis is vertical but the end points aren't given. To find $b$ we
will use the location of the Sun. Since the Sun is a focus of the ellipse at
the point $(10,0)$, we know $c=10$. Use this to solve for $b^2$:

$$
\begin{aligned}
b^2&=a^2-c^2\\
b^2&=40^2-10^2\\
b^2&=1600-100\\
b^2&=1500.
\end{aligned}
$$

Substitute $a^2$ and $b^2$ into the standard form of the ellipse:

$$
\frac{x^2}{1600}+\frac{y^2}{1500}=1.
$$

{{< fillin
  question="A planet's elliptical orbit has vertices $(-25,0),(25,0)$ and its sun is a focus at $(5,0)$. Write the equation of the orbit."
  answer="\frac{x^2}{625}+\frac{y^2}{600}=1"
  answerDisplay="$\tfrac{x^2}{625}+\tfrac{y^2}{600}=1$"
  hint="Use $b^2=a^2-c^2$."
>}}

{{< fillin
  question="A planet's elliptical orbit has vertices $(-35,0),(35,0)$ and its sun is a focus at $(15,0)$. Write the equation of the orbit."
  answer="\frac{x^2}{1225}+\frac{y^2}{1000}=1"
  answerDisplay="$\tfrac{x^2}{1225}+\tfrac{y^2}{1000}=1$"
  hint="Use $b^2=a^2-c^2$."
>}}

## Key terms

An **ellipse** is all points in a plane where the sum of the
distances from two fixed points is constant. Each fixed point is a **focus**.
The line through the foci is the **major axis**, its endpoints are the
**vertices**, the midpoint of the vertices is the **center**, and the
perpendicular line through the center is the **minor axis**.

## Practice

### Graph an ellipse with center at the origin

{{< fillin
  question="For $\tfrac{x^2}{4}+\tfrac{y^2}{25}=1$, enter the positive $y$-coordinate of a vertex."
  answer="5"
  answerDisplay="$5$"
  hint="The larger denominator is under $y^2$, so the vertices are the $y$-intercepts."
>}}

{{< fillin
  question="For $\tfrac{x^2}{25}+\tfrac{y^2}{36}=1$, enter the positive $x$-coordinate of a minor-axis endpoint."
  answer="5"
  answerDisplay="$5$"
  hint="The minor axis lies along the smaller denominator, here under $x^2$."
>}}

{{< fillin
  question="For $4x^2+25y^2=100$, enter the positive $y$-coordinate of a minor-axis endpoint."
  answer="2"
  answerDisplay="$2$"
  hint="Divide every term by $100$ to get standard form first."
>}}

### Find the equation of an ellipse with center at the origin

{{< fillin
  question="Find the equation of the ellipse centered at $(0,0)$ with vertices $(0,-5),(0,5)$ and minor-axis endpoints $(-3,0),(3,0)$."
  answer="\frac{x^2}{9}+\frac{y^2}{25}=1"
  answerDisplay="$\tfrac{x^2}{9}+\tfrac{y^2}{25}=1$"
  hint="Square each distance from the center for its denominator."
>}}

{{< fillin
  question="Find the equation of the ellipse centered at $(0,0)$ with vertices $(0,-4),(0,4)$ and minor-axis endpoints $(-3,0),(3,0)$."
  answer="\frac{x^2}{9}+\frac{y^2}{16}=1"
  answerDisplay="$\tfrac{x^2}{9}+\tfrac{y^2}{16}=1$"
  hint="Square each distance from the center for its denominator."
>}}

### Graph an ellipse with center not at the origin

{{< fillin
  question="For $\tfrac{(x+1)^2}{4}+\tfrac{(y+6)^2}{25}=1$, enter the $y$-coordinate of the center."
  answer="-6"
  answerDisplay="$-6$"
  hint="Rewrite $y+6$ as $y-(-6)$."
>}}

{{< fillin
  question="The ellipse $\tfrac{(x-3)^2}{4}+\tfrac{(y-7)^2}{25}=1$ is graphed by translating $\tfrac{x^2}{4}+\tfrac{y^2}{25}=1$. Enter the $x$-coordinate of its center."
  answer="3"
  answerDisplay="$3$"
  hint="The translation moves the center from $(0,0)$ to $(h,k)$."
>}}

{{< multiplechoice
  question="Write $25x^2+9y^2-100x-54y-44=0$ in standard form."
  answer="$\tfrac{(x-2)^2}{9}+\tfrac{(y-3)^2}{25}=1$"
  hint="Group the $x$- and $y$-terms, complete both squares, then divide through so the right side is $1$. Each denominator is $225$ divided by that term's leading coefficient."
>}}
$\tfrac{(x-2)^2}{9}+\tfrac{(y-3)^2}{25}=1$
$\tfrac{(x-2)^2}{25}+\tfrac{(y-3)^2}{9}=1$
$\tfrac{(x+2)^2}{9}+\tfrac{(y+3)^2}{25}=1$
$\tfrac{(x-2)^2}{9}-\tfrac{(y-3)^2}{25}=1$
{{< /multiplechoice >}}

{{< fillin
  question="For $\tfrac{(x-2)^2}{9}+\tfrac{(y-3)^2}{25}=1$, enter the larger $y$-coordinate of a vertex."
  answer="8"
  answerDisplay="$8$"
  hint="Since $25>9$, the major axis is vertical; add $\sqrt{25}$ to the center's $y$-coordinate."
>}}

### Solve application with ellipses

{{< fillin
  question="A planet's elliptical orbit has vertices $(-20,0),(20,0)$ and its sun is a focus at $(10,0)$. Write the equation of the orbit."
  answer="\frac{x^2}{400}+\frac{y^2}{300}=1"
  answerDisplay="$\tfrac{x^2}{400}+\tfrac{y^2}{300}=1$"
  hint="Use $b^2=a^2-c^2$."
>}}

{{< fillin
  question="A comet's elliptical orbit has vertices $(-50,0),(50,0)$ and its sun is a focus at $(35,0)$. Write the equation of the orbit."
  answer="\frac{x^2}{2500}+\frac{y^2}{1275}=1"
  answerDisplay="$\tfrac{x^2}{2{,}500}+\tfrac{y^2}{1{,}275}=1$"
  hint="Use $b^2=a^2-c^2$."
>}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 11.3](https://openstax.org/books/intermediate-algebra-2e/pages/11-3-ellipses) by Lynn Marecek and Andrea Honeycutt Mathis, &copy; OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at OpenStax. Changes: omitted readiness quizzes, self-checks, media links, and complex source figures; converted Try It problems to interactive questions, described source figures in words, and adapted selected end-of-section exercises into an interactive Practice block.</small>
