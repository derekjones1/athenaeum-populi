---
title: Distance and Midpoint Formulas; Circles
description: >-
  Use the Distance and Midpoint Formulas, write equations of circles in
  standard form, and graph circles.
source_section: "11.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use the Distance Formula
- Use the Midpoint Formula
- Write the equation of a circle in standard form
- Graph a circle
{{< /callout >}}

In this chapter we will be looking at the conic sections, usually called the
conics, and their properties. The conics are curves that result from a plane
intersecting a double cone—two cones placed point-to-point. Each half of a
double cone is called a nappe.

There are four conics—the **circle, parabola, ellipse,** and **hyperbola**. A
plane intersecting the double cone results in each curve. Each of the curves
has many applications that affect your daily life, from your cell phone to
acoustics and navigation systems. In this section we will look at the
properties of a circle.

## Use the Distance Formula

We have used the Pythagorean Theorem to find the lengths of the sides of a
right triangle. Here we will use this theorem again to find distances on the
rectangular coordinate system. By finding distance on the rectangular
coordinate system, we can make a connection between the geometry of a conic
and algebra—which opens up a world of opportunities for application.

Our first step is to develop a formula to find distances between points on the
rectangular coordinate system. We will plot the points and create a right
triangle much as we did when we found slope in Graphs and Functions. We then
take it one step further and use the Pythagorean Theorem to find the length of
the hypotenuse of the triangle—which is the distance between the points.

**Example 11.1.** Use the rectangular coordinate system to find the distance
between the points $(6,4)$ and $(2,1)$.

**Solution.** Plot the two points. Connect the two points with a line. Draw a
right triangle as if you were going to find slope. The rise is 3 and the run
is 4. Find the length of each leg, and use the Pythagorean Theorem to find
$d$, the distance between the two points.

$$
\begin{array}{lrcl}
\text{Use the Pythagorean Theorem.} & a^2+b^2&=&c^2\\[4pt]
\text{Substitute in the values.} &3^2+4^2&=&d^2\\[4pt]
\text{Simplify.} &9+16&=&d^2\\[4pt]
&25&=&d^2\\[4pt]
\text{Use the Square Root Property.} &d&=&5,\ -5
\end{array}
$$

Since distance, $d$, is positive, we can eliminate $d=-5$. The distance
between the points $(6,4)$ and $(2,1)$ is 5.

{{< fillin question="Use the rectangular coordinate system to find the distance between the points $(6,1)$ and $(2,-2)$." answer="5" answerDisplay="$5$" hint="Draw a right triangle and use the Pythagorean Theorem." >}}

{{< fillin question="Use the rectangular coordinate system to find the distance between the points $(5,3)$ and $(-3,-3)$." answer="10" answerDisplay="$10$" hint="Find the horizontal and vertical distances, then use the Pythagorean Theorem." >}}

The method we used in the last example leads us to the formula to find the
distance between the two points $(x_1,y_1)$ and $(x_2,y_2)$.

When we found the length of the horizontal leg we subtracted $6-2$, which is
$x_2-x_1$. When we found the length of the vertical leg we subtracted $4-1$,
which is $y_2-y_1$.

If the triangle had been in a different position, we may have subtracted
$x_1-x_2$ or $y_1-y_2$. The expressions $x_2-x_1$ and $x_1-x_2$ vary only in
the sign of the resulting number. To get the positive value—since distance is
positive—we can use absolute value. So to generalize we will say
$|x_2-x_1|$ and $|y_2-y_1|$.

In the Pythagorean Theorem, we substitute the general expressions
$|x_2-x_1|$ and $|y_2-y_1|$ rather than the numbers.

$$
\begin{array}{lrcl}
&a^2+b^2&=&c^2\\[4pt]
\text{Substitute in the values.}&|x_2-x_1|^2+|y_2-y_1|^2&=&d^2\\[4pt]
\text{Squaring makes the expressions positive.}&(x_2-x_1)^2+(y_2-y_1)^2&=&d^2\\[4pt]
\text{Use the Square Root Property.}&d&=&\pm\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\[4pt]
\text{Distance is positive.}&d&=&\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}
\end{array}
$$

{{< callout type="info" >}}
**Distance Formula.** The distance $d$ between the two points $(x_1,y_1)$ and
$(x_2,y_2)$ is
$$d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.$$
{{< /callout >}}

**Example 11.2.** Use the Distance Formula to find the distance between the
points $(-5,-3)$ and $(7,2)$.

**Solution.**

$$
\begin{array}{lrcl}
\text{Write the Distance Formula.}&d&=&\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\[4pt]
\text{Substitute.}&d&=&\sqrt{(7-(-5))^2+(2-(-3))^2}\\[4pt]
\text{Simplify.}&d&=&\sqrt{12^2+5^2}\\[4pt]
&d&=&\sqrt{144+25}\\[4pt]
&d&=&\sqrt{169}\\[4pt]
&d&=&13
\end{array}
$$

{{< fillin question="Use the Distance Formula to find the distance between the points $(-4,-5)$ and $(5,7)$." answer="15" answerDisplay="$15$" hint="Substitute the two points in the Distance Formula." >}}

{{< fillin question="Use the Distance Formula to find the distance between the points $(-2,-5)$ and $(-14,-10)$." answer="13" answerDisplay="$13$" hint="Substitute the two points in the Distance Formula." >}}

**Example 11.3.** Use the Distance Formula to find the distance between the
points $(10,-4)$ and $(-1,5)$. Write the answer in exact form and then find the
decimal approximation, rounded to the nearest tenth if needed.

**Solution.**

$$
\begin{array}{lrcl}
\text{Write the Distance Formula.}&d&=&\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\[4pt]
\text{Substitute.}&d&=&\sqrt{(-1-10)^2+(5-(-4))^2}\\[4pt]
\text{Simplify.}&d&=&\sqrt{(-11)^2+9^2}\\[4pt]
&d&=&\sqrt{121+81}\\[4pt]
&d&=&\sqrt{202}\\[4pt]
&&&d\approx14.2
\end{array}
$$

Since 202 is not a perfect square, we can leave the answer in exact form or
find a decimal approximation.

{{< fillin question="Use the Distance Formula to find the distance between the points $(-4,-5)$ and $(3,4)$. Enter the exact form." answer="\sqrt{130}" answerDisplay="$\sqrt{130}\approx11.4$" hint="Substitute, simplify the radicand, and leave the answer as a radical." >}}

{{< fillin question="Use the Distance Formula to find the distance between the points $(-2,-5)$ and $(-3,-4)$. Enter the exact form." answer="\sqrt{2}" answerDisplay="$\sqrt2\approx1.4$" hint="Substitute, simplify the radicand, and leave the answer as a radical." >}}

## Use the Midpoint Formula

It is often useful to be able to find the midpoint of a segment. For example,
if you have the endpoints of the diameter of a circle, you may want to find
the center of the circle which is the midpoint of the diameter. To find the
midpoint of a line segment, we find the average of the $x$-coordinates and the
average of the $y$-coordinates of the endpoints.

{{< callout type="info" >}}
**Midpoint Formula.** The midpoint of the line segment whose endpoints are the
two points $(x_1,y_1)$ and $(x_2,y_2)$ is
$$\left(\tfrac{x_1+x_2}{2},\tfrac{y_1+y_2}{2}\right).$$
To find the midpoint of a line segment, we find the average of the
$x$-coordinates and the average of the $y$-coordinates of the endpoints.
{{< /callout >}}

**Example 11.4.** Use the Midpoint Formula to find the midpoint of the line
segment whose endpoints are $(-5,-4)$ and $(7,2)$. Plot the endpoints and the
midpoint on a rectangular coordinate system.

**Solution.**

$$
\begin{array}{lrcl}
\text{Write the Midpoint Formula.}&&&\left(\tfrac{x_1+x_2}{2},\tfrac{y_1+y_2}{2}\right)\\[10pt]
\text{Substitute.}&&&\left(\tfrac{-5+7}{2},\tfrac{-4+2}{2}\right)\\[10pt]
\text{Simplify.}&&&\left(\tfrac{2}{2},\tfrac{-2}{2}\right)\\[10pt]
&&&(1,-1)
\end{array}
$$

The midpoint of the segment is the point $(1,-1)$. Plotting the endpoints and
midpoint shows that $(1,-1)$ lies halfway between $(-5,-4)$ and $(7,2)$.

{{< fillin question="Use the Midpoint Formula to find the midpoint of the line segment whose endpoints are $(-3,-5)$ and $(5,7)$." answer="(1,1)" answerDisplay="$(1,1)$" hint="Average the $x$-coordinates and then the $y$-coordinates." >}}

{{< fillin question="Use the Midpoint Formula to find the midpoint of the line segment whose endpoints are $(-2,-5)$ and $(6,-1)$." answer="(2,-3)" answerDisplay="$(2,-3)$" hint="Average the $x$-coordinates and then the $y$-coordinates." >}}

Both the Distance Formula and the Midpoint Formula depend on two points,
$(x_1,y_1)$ and $(x_2,y_2)$. It is easy to confuse which formula requires
addition and which subtraction of the coordinates. If we remember where the
formulas come from, it may be easier to remember the formulas. In the Distance
Formula, subtract the coordinates. In the Midpoint Formula, add the
coordinates.

## Write the Equation of a Circle in Standard Form

As we mentioned, our goal is to connect the geometry of a conic with algebra.
By using the coordinate plane, we are able to do this easily.

We define a circle as all points in a plane that are a fixed distance from a
given point in the plane. The given point is called the center, $(h,k)$, and
the fixed distance is called the radius, $r$, of the circle.

{{< callout type="info" >}}
**Circle.** A circle is all points in a plane that are a fixed distance from a
given point in the plane. The given point is called the **center**, $(h,k)$,
and the fixed distance is called the **radius**, $r$, of the circle.
{{< /callout >}}

We look at a circle in the rectangular coordinate system. The radius is the
distance from the center, $(h,k)$, to a point on the circle, $(x,y)$.

To derive the equation of a circle, we can use the distance formula with the
points $(h,k)$, $(x,y)$ and the distance, $r$.

$$
\begin{array}{lrcl}
&d&=&\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\[4pt]
\text{Substitute the values.}&r&=&\sqrt{(x-h)^2+(y-k)^2}\\[4pt]
\text{Square both sides.}&r^2&=&(x-h)^2+(y-k)^2
\end{array}
$$

{{< callout type="info" >}}
**Standard Form of the Equation of a Circle.** The standard form of the
equation of a circle with center $(h,k)$ and radius $r$ is
$$(x-h)^2+(y-k)^2=r^2.$$
{{< /callout >}}

**Example 11.5.** Write the standard form of the equation of the circle with
radius 3 and center $(0,0)$.

**Solution.**

$$
\begin{array}{lrcl}
\text{Use the standard form.}&(x-h)^2+(y-k)^2&=&r^2\\[4pt]
\text{Substitute }r=3,\ h=0,\ k=0.&(x-0)^2+(y-0)^2&=&3^2\\[4pt]
\text{Simplify.}&x^2+y^2&=&9
\end{array}
$$

{{< fillin question="Write the standard form of the equation of the circle with radius $6$ and center $(0,0)$." answer="x^2+y^2=36" answerForm="circle-standard-form" answerDisplay="$x^2+y^2=36$" hint="Use $(x-h)^2+(y-k)^2=r^2$." >}}

{{< fillin question="Write the standard form of the equation of the circle with radius $8$ and center $(0,0)$." answer="x^2+y^2=64" answerForm="circle-standard-form" answerDisplay="$x^2+y^2=64$" hint="Use $(x-h)^2+(y-k)^2=r^2$." >}}

In the last example, the center was $(0,0)$. Notice what happened to the
equation. Whenever the center is $(0,0)$, the standard form becomes
$x^2+y^2=r^2$.

**Example 11.6.** Write the standard form of the equation of the circle with
radius 2 and center $(-1,3)$.

**Solution.**

$$
\begin{array}{lrcl}
\text{Use the standard form.}&(x-h)^2+(y-k)^2&=&r^2\\[4pt]
\text{Substitute.}&(x-(-1))^2+(y-3)^2&=&2^2\\[4pt]
\text{Simplify.}&(x+1)^2+(y-3)^2&=&4
\end{array}
$$

{{< fillin question="Write the standard form of the equation of the circle with radius $7$ and center $(2,-4)$." answer="(x-2)^2+(y+4)^2=49" answerForm="circle-standard-form" answerDisplay="$(x-2)^2+(y+4)^2=49$" hint="Substitute the center and radius in standard form." >}}

{{< fillin question="Write the standard form of the equation of the circle with radius $9$ and center $(-3,-5)$." answer="(x+3)^2+(y+5)^2=81" answerForm="circle-standard-form" answerDisplay="$(x+3)^2+(y+5)^2=81$" hint="Substitute the center and radius in standard form." >}}

In the next example, the radius is not given. To calculate the radius, we use
the Distance Formula with the two given points.

**Example 11.7.** Write the standard form of the equation of the circle with
center $(2,4)$ that also contains the point $(-2,1)$.

**Solution.** The radius is the distance from the center to any point on the
circle so we can use the distance formula to calculate it. We will use the
center $(2,4)$ and point $(-2,1)$.

$$
\begin{array}{lrcl}
\text{Use the Distance Formula.}&r&=&\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\[4pt]
\text{Substitute.}&r&=&\sqrt{(-2-2)^2+(1-4)^2}\\[4pt]
\text{Simplify.}&r&=&\sqrt{(-4)^2+(-3)^2}\\[4pt]
&r&=&\sqrt{16+9}\\[4pt]
&r&=&\sqrt{25}\\[4pt]
&r&=&5
\end{array}
$$

Now that we know the radius, $r=5$, and the center, $(2,4)$, we can use the
standard form of the equation of a circle to find the equation.

$$
\begin{array}{lrcl}
\text{Use the standard form.}&(x-h)^2+(y-k)^2&=&r^2\\[4pt]
\text{Substitute.}&(x-2)^2+(y-4)^2&=&5^2\\[4pt]
\text{Simplify.}&(x-2)^2+(y-4)^2&=&25
\end{array}
$$

{{< fillin question="Write the standard form of the equation of the circle with center $(2,1)$ that also contains the point $(-2,-2)$." answer="(x-2)^2+(y-1)^2=25" answerForm="circle-standard-form" answerDisplay="$(x-2)^2+(y-1)^2=25$" hint="First use the Distance Formula to find the radius." >}}

{{< fillin question="Write the standard form of the equation of the circle with center $(7,1)$ that also contains the point $(-1,-5)$." answer="(x-7)^2+(y-1)^2=100" answerForm="circle-standard-form" answerDisplay="$(x-7)^2+(y-1)^2=100$" hint="First use the Distance Formula to find the radius." >}}

## Graph a Circle

Any equation of the form $(x-h)^2+(y-k)^2=r^2$ is the standard form of the
equation of a circle with center $(h,k)$ and radius $r$. We can then graph the
circle on a rectangular coordinate system.

Note that the standard form calls for subtraction from $x$ and $y$. In the
next example, the equation has $x+2$, so we need to rewrite the addition as
subtraction of a negative.

**Example 11.8.** Find the center and radius, then graph the circle:
$(x+2)^2+(y-1)^2=9$.

**Solution.**

$$
\begin{array}{rcl}
(x+2)^2+(y-1)^2&=&9\\[4pt]
(x-(-2))^2+(y-1)^2&=&3^2
\end{array}
$$

The center is $(-2,1)$ and the radius is 3. To graph the circle, plot the
center and then plot points 3 units above, below, left, and right of the
center. Draw the circle through these four points.

{{< fillin question="Find the center and radius of $(x-3)^2+(y+4)^2=4$. Enter the center and radius, separated by a comma." answer="(3,-4),2" answerDisplay="center $(3,-4)$; radius $2$" hint="Compare the equation to $(x-h)^2+(y-k)^2=r^2$." >}}

{{< fillin question="Find the center and radius of $(x-3)^2+(y-1)^2=16$. Enter the center and radius, separated by a comma." answer="(3,1),4" answerDisplay="center $(3,1)$; radius $4$" hint="Compare the equation to $(x-h)^2+(y-k)^2=r^2$." >}}

To find the center and radius, we must write the equation in standard form. In
the next example, we must first get the coefficient of $x^2,y^2$ to be one.

**Example 11.9.** Find the center and radius and then graph the circle,
$4x^2+4y^2=64$.

**Solution.**

$$
\begin{array}{lrcl}
&4x^2+4y^2&=&64\\[4pt]
\text{Divide each side by 4.}&x^2+y^2&=&16\\[4pt]
\text{Use standard form.}&(x-0)^2+(y-0)^2&=&4^2
\end{array}
$$

The center is $(0,0)$ and the radius is 4. Plot the center and the four points
4 units above, below, left, and right of the center, and draw the circle
through them.

{{< fillin question="Find the center and radius of $3x^2+3y^2=27$. Enter the center and radius, separated by a comma." answer="(0,0),3" answerDisplay="center $(0,0)$; radius $3$" hint="First divide both sides by the coefficient of $x^2$ and $y^2$." >}}

{{< fillin question="Find the center and radius of $5x^2+5y^2=125$. Enter the center and radius, separated by a comma." answer="(0,0),5" answerDisplay="center $(0,0)$; radius $5$" hint="First divide both sides by the coefficient of $x^2$ and $y^2$." >}}

If we expand the equation from Example 11.8,
$(x+2)^2+(y-1)^2=9$, the equation of the circle looks very different.

$$
\begin{array}{lrcl}
&(x+2)^2+(y-1)^2&=&9\\[4pt]
\text{Square the binomials.}&x^2+4x+4+y^2-2y+1&=&9\\[4pt]
\text{Arrange terms and get zero on the right.}&x^2+y^2+4x-2y-4&=&0
\end{array}
$$

This form of the equation is called the general form of the equation of the
circle.

{{< callout type="info" >}}
**General Form of the Equation of a Circle.** The general form of the equation
of a circle is
$$x^2+y^2+ax+by+c=0.$$
{{< /callout >}}

If we are given an equation in general form, we can change it to standard form
by completing the squares in both $x$ and $y$. Then we can graph the circle
using its center and radius.

**Example 11.10.** (a) Find the center and radius, then (b) graph the circle:
$x^2+y^2-4x-6y+4=0$.

**Solution.** We need to rewrite this general form into standard form in order
to find the center and radius.

$$
\begin{array}{lrcl}
\text{Group the terms; collect constants.}&x^2-4x+y^2-6y&=&-4\\[4pt]
\text{Complete the squares.}&x^2-4x+4+y^2-6y+9&=&-4+4+9\\[4pt]
\text{Rewrite as binomial squares.}&(x-2)^2+(y-3)^2&=&9
\end{array}
$$

The center is $(2,3)$ and the radius is 3. Plot the center and points 3 units
above, below, left, and right of it, and draw the circle.

{{< fillin question="Find the center and radius of $x^2+y^2-6x-8y+9=0$. Enter the center and radius, separated by a comma." answer="(3,4),4" answerDisplay="center $(3,4)$; radius $4$" hint="Group the $x$-terms and $y$-terms and complete both squares." >}}

{{< fillin question="Find the center and radius of $x^2+y^2+6x-2y+1=0$. Enter the center and radius, separated by a comma." answer="(-3,1),3" answerDisplay="center $(-3,1)$; radius $3$" hint="Group the $x$-terms and $y$-terms and complete both squares." >}}

In the next example, there is a $y$-term and a $y^2$-term. But notice that
there is no $x$-term, only an $x^2$-term. We have seen this before and know
that it means $h$ is 0. We will need to complete the square for the $y$ terms,
but not for the $x$ terms.

**Example 11.11.** (a) Find the center and radius, then (b) graph the circle:
$x^2+y^2+8y=0$.

**Solution.** We need to rewrite this general form into standard form in order
to find the center and radius.

$$
\begin{array}{lrcl}
\text{Group the terms.}&x^2+y^2+8y&=&0\\[4pt]
\text{Complete the square for }y^2+8y.&x^2+y^2+8y+16&=&0+16\\[4pt]
\text{Rewrite as binomial squares.}&(x-0)^2+(y+4)^2&=&16
\end{array}
$$

The center is $(0,-4)$ and the radius is 4. Plot the center and points 4 units
above, below, left, and right of it, and draw the circle.

{{< fillin question="Find the center and radius of $x^2+y^2-2x-3=0$. Enter the center and radius, separated by a comma." answer="(1,0),2" answerDisplay="center $(1,0)$; radius $2$" hint="Complete the square for the $x$-terms." >}}

{{< fillin question="Find the center and radius of $x^2+y^2-12y+11=0$. Enter the center and radius, separated by a comma." answer="(0,6),5" answerDisplay="center $(0,6)$; radius $5$" hint="Complete the square for the $y$-terms." >}}

## Key terms

A **conic** is a curve formed when a plane intersects a double
cone. Each half of a double cone is a **nappe**. A **circle** is all points in
a plane a fixed distance from a given point; that point is the **center**, and
the fixed distance is the **radius**. The **standard form of the equation of a
circle** is $(x-h)^2+(y-k)^2=r^2$, and the **general form of the equation of a
circle** is $x^2+y^2+ax+by+c=0$.

## Practice

### Use the Distance Formula

{{< fillin question="Use the Distance Formula to find the distance between the points $(2,0)$ and $(5,4)$." answer="5" answerDisplay="$5$" hint="Substitute the two points into $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." >}}

{{< fillin question="Use the Distance Formula to find the distance between the points $(-3,-5)$ and $(0,1)$. Enter the exact, simplified-radical form." answer="3\sqrt{5}" answerForm="simplified-radical" answerDisplay="$3\sqrt5\approx6.7$" hint="Simplify the radicand $9+36$, then pull out the largest perfect-square factor." >}}

{{< fillin question="Use the Distance Formula to find the distance between the points $(3,-1)$ and $(1,7)$. Round the decimal approximation to the nearest tenth." answer="8.2" answerForm="decimal" answerDisplay="$\approx8.2$" hint="Find the exact distance, $\sqrt{68}$, then convert it to a decimal rounded to the nearest tenth." >}}

### Use the Midpoint Formula

{{< fillin question="Use the Midpoint Formula to find the midpoint of the line segment whose endpoints are $(0,-5)$ and $(4,-3)$." answer="(2,-4)" answerDisplay="$(2,-4)$" hint="Average the $x$-coordinates and then the $y$-coordinates." >}}

{{< fillin question="Use the Midpoint Formula to find the midpoint of the line segment whose endpoints are $(3,-1)$ and $(4,-2)$." answer="(3.5,-1.5)" answerDisplay="$(3\tfrac{1}{2},-1\tfrac{1}{2})$" hint="Average the $x$-coordinates and then the $y$-coordinates." >}}

### Write the Equation of a Circle in Standard Form

{{< fillin question="Write the standard form of the equation of the circle with radius $7$ and center $(0,0)$." answer="x^2+y^2=49" answerForm="circle-standard-form" answerDisplay="$x^2+y^2=49$" hint="Use $(x-h)^2+(y-k)^2=r^2$ with $h=k=0$." >}}

{{< fillin question="Write the standard form of the equation of the circle with radius $\sqrt{2}$ and center $(0,0)$." answer="x^2+y^2=2" answerForm="circle-standard-form" answerDisplay="$x^2+y^2=2$" hint="Substitute $r=\sqrt2$ into $(x-h)^2+(y-k)^2=r^2$ and simplify $(\sqrt2)^2$." >}}

{{< fillin question="Write the standard form of the equation of the circle with center $(3,-2)$ that also contains the point $(3,6)$." answer="(x-3)^2+(y+2)^2=64" answerForm="circle-standard-form" answerDisplay="$(x-3)^2+(y+2)^2=64$" hint="First use the Distance Formula to find the radius from the center to the given point." >}}

### Graph a Circle

{{< fillin question="Find the center and radius of $x^2+y^2=64$. Enter the center as an ordered pair and then the radius, separated by a comma." answer="(0,0),8" answerDisplay="center $(0,0)$; radius $8$" hint="Rewrite as $(x-0)^2+(y-0)^2=8^2$ to read off the center and radius." >}}

{{< fillin question="Find the center and radius of $x^2+y^2+6y+5=0$. Enter the center as an ordered pair and then the radius, separated by a comma." answer="(0,-3),2" answerDisplay="center $(0,-3)$; radius $2$" hint="Group the $y$-terms and complete the square; there is no $x$-term, so $h=0$." >}}

{{< fillin question="Find the center and radius of $x^2+y^2-4x+10y-7=0$. Enter the center as an ordered pair and then the radius, separated by a comma." answer="(2,-5),6" answerDisplay="center $(2,-5)$; radius $6$" hint="Group the $x$-terms and $y$-terms and complete both squares." >}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 11.1](https://openstax.org/books/intermediate-algebra-2e/pages/11-1-distance-and-midpoint-formulas-circles) by Lynn Marecek and Andrea Honeycutt Mathis, &copy; OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at OpenStax. Changes: omitted the readiness quiz and media links and complex source figures; converted Try It exercises into interactive questions, described essential graphing actions in text, and adapted selected end-of-section exercises into an interactive Practice block.</small>
