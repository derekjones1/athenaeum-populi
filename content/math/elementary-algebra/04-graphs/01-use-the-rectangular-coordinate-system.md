---
title: Use the Rectangular Coordinate System
description: >-
  Plotting points in the rectangular coordinate system, verifying solutions
  to an equation in two variables, completing a table of solutions, and
  finding solutions to a linear equation in two variables — adapted from
  OpenStax Elementary Algebra 2e, Section 4.1.
source_section: "4.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Plot points in a rectangular coordinate system
- Verify solutions to an equation in two variables
- Complete a table of solutions to a linear equation in two variables
- Find solutions to a linear equation in two variables
{{< /callout >}}

## Plot points in a rectangular coordinate system

Just like maps use a grid system to identify locations, a grid system is
used in algebra to show a relationship between two variables in a
**rectangular coordinate system**. The rectangular coordinate system is also
called the $xy$-plane or the "coordinate plane."

The horizontal number line is called the $x$-axis. The vertical number line
is called the $y$-axis. The $x$-axis and the $y$-axis together form the
rectangular coordinate system. These axes divide a plane into four regions,
called **quadrants**. The quadrants are identified by Roman numerals,
beginning on the upper right and proceeding counterclockwise.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The rectangular coordinate system, with each axis numbered from −7 to 7. The x-axis and y-axis divide the plane into four quadrants, labeled counterclockwise from the upper right: I upper right, II upper left, III lower left, IV lower right.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"quadrantLabels":true}
{{< /apfigure >}}

In the rectangular coordinate system, every point is represented by an
*ordered pair*. The first number in the ordered pair is the $x$-coordinate
of the point, and the second number is the $y$-coordinate of the point.

{{< callout type="info" >}}
  **Ordered pair.** An ordered pair $(x, y)$ gives the coordinates of a
  point in a rectangular coordinate system. The first number is the
  $x$-coordinate. The second number is the $y$-coordinate.
{{< /callout >}}

The phrase "ordered pair" means the order is important. What is the ordered
pair of the point where the axes cross? At that point both coordinates are
zero, so its ordered pair is $(0, 0)$. The point $(0, 0)$ has a special
name — it is called the **origin**.

{{< callout type="info" >}}
  **The origin.** The point $(0, 0)$ is called the origin. It is the point
  where the $x$-axis and $y$-axis intersect.
{{< /callout >}}

We use the coordinates to locate a point on the $xy$-plane. Let's plot the
point $(1, 3)$ as an example. First, locate $1$ on the $x$-axis and lightly
sketch a vertical line through $x = 1$. Then locate $3$ on the $y$-axis and
sketch a horizontal line through $y = 3$. Now, find the point where these
two lines meet — that is the point with coordinates $(1, 3)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −6 to 6 on each axis. Dashed guide lines run up from 1 on the x-axis and across from 3 on the y-axis and meet at the point (1, 3), which is plotted and labeled.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"guides":[[1,3]],"points":[{"at":[1,3],"label":"(1, 3)","labelSide":"ne"}]}
{{< /apfigure >}}

Notice that the vertical line through $x = 1$ and the horizontal line
through $y = 3$ are not part of the graph. We just used them to help us
locate the point $(1, 3)$.

**Example.** Plot each point in the rectangular coordinate system and
identify the quadrant in which the point is located: (a) $(-5, 4)$
(b) $(-3, -4)$ (c) $(2, -3)$ (d) $(-2, 3)$ (e) $\left(3, \tfrac{5}{2}\right)$.

The first number of the coordinate pair is the $x$-coordinate, and the
second number is the $y$-coordinate.

(a) Since $x = -5$, the point is to the left of the $y$-axis. Also, since
$y = 4$, the point is above the $x$-axis. The point $(-5, 4)$ is in
Quadrant II.

(b) Since $x = -3$, the point is to the left of the $y$-axis. Also, since
$y = -4$, the point is below the $x$-axis. The point $(-3, -4)$ is in
Quadrant III.

(c) Since $x = 2$, the point is to the right of the $y$-axis. Since
$y = -3$, the point is below the $x$-axis. The point $(2, -3)$ is in
Quadrant IV.

(d) Since $x = -2$, the point is to the left of the $y$-axis. Since $y = 3$,
the point is above the $x$-axis. The point $(-2, 3)$ is in Quadrant II.

(e) Since $x = 3$, the point is to the right of the $y$-axis. Since
$y = \tfrac{5}{2}$, the point is above the $x$-axis. (It may be helpful to
write $\tfrac{5}{2}$ as a mixed number or decimal — it is halfway between
$2$ and $3$.) The point $\left(3, \tfrac{5}{2}\right)$ is in Quadrant I.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −6 to 6 on each axis with five points plotted and labeled: (−5, 4) and (−2, 3) in Quadrant II, (3, 5/2) in Quadrant I, (−3, −4) in Quadrant III, and (2, −3) in Quadrant IV.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"points":[{"at":[-5,4],"label":"(−5, 4)"},{"at":[-2,3],"label":"(−2, 3)"},{"at":[3,2.5],"label":"(3, 5/2)"},{"at":[-3,-4],"label":"(−3, −4)"},{"at":[2,-3],"label":"(2, −3)"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Which graph shows the point $(4, -4)$ plotted correctly?"
  mode="graph"
  answerIndex="1"
  hint="Start at the origin: the $x$-coordinate tells you how far to move left or right, and the $y$-coordinate how far to move up or down."
>}}
{"ariaLabel":"A point plotted at −4 on the x-axis and 4 on the y-axis, in the upper left.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"points":[{"at":[-4,4]}]}
===OPT===
{"ariaLabel":"A point plotted at 4 on the x-axis and −4 on the y-axis, in the lower right.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"points":[{"at":[4,-4]}]}
===OPT===
{"ariaLabel":"A point plotted at 4 on the x-axis and 4 on the y-axis, in the upper right.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"points":[{"at":[4,4]}]}
{{< /multiplechoice >}}

We can summarize the sign patterns of the quadrants this way.

| | Quadrant I | Quadrant II | Quadrant III | Quadrant IV |
| :--- | :---: | :---: | :---: | :---: |
| $(x, y)$ | $(x, y)$ | $(x, y)$ | $(x, y)$ | $(x, y)$ |
| signs | $(+, +)$ | $(-, +)$ | $(-, -)$ | $(+, -)$ |

What if one coordinate is zero? The point $(0, 4)$ is on the $y$-axis, and
the point $(-2, 0)$ is on the $x$-axis.

{{< callout type="info" >}}
  **Points on the axes.** Points with a $y$-coordinate equal to $0$ are on
  the $x$-axis, and have coordinates $(a, 0)$. Points with an $x$-coordinate
  equal to $0$ are on the $y$-axis, and have coordinates $(0, b)$.
{{< /callout >}}

**Example.** Plot each point: (a) $(0, 5)$ (b) $(4, 0)$ (c) $(-3, 0)$
(d) $(0, 0)$ (e) $(0, -1)$.

(a) Since $x = 0$, the point whose coordinates are $(0, 5)$ is on the
$y$-axis.

(b) Since $y = 0$, the point whose coordinates are $(4, 0)$ is on the
$x$-axis.

(c) Since $y = 0$, the point whose coordinates are $(-3, 0)$ is on the
$x$-axis.

(d) Since $x = 0$ and $y = 0$, the point whose coordinates are $(0, 0)$ is
the origin.

(e) Since $x = 0$, the point whose coordinates are $(0, -1)$ is on the
$y$-axis.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −6 to 6 on each axis with five points plotted and labeled: (0, 5) and (0, −1) on the y-axis, (−3, 0) and (4, 0) on the x-axis, and (0, 0) at the origin.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"points":[{"at":[0,5],"label":"(0, 5)"},{"at":[-3,0],"label":"(−3, 0)"},{"at":[0,0],"label":"(0, 0)"},{"at":[4,0],"label":"(4, 0)"},{"at":[0,-1],"label":"(0, −1)"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="On which axis does the point $(0, 2)$ lie?"
  answer="the y-axis"
  hint="Use the Points on the axes box above: find which coordinate is $0$."
>}}
the x-axis
the y-axis
{{< /multiplechoice >}}

In algebra, being able to identify the coordinates of a point shown on a
graph is just as important as being able to plot points. To identify the
$x$-coordinate of a point on a graph, read the number on the $x$-axis
directly above or below the point. To identify the $y$-coordinate of a
point, read the number on the $y$-axis directly to the left or right of the
point. Remember, when you write the ordered pair, use the correct order
$(x, y)$.

**Example.** Name the ordered pair of each point shown in the rectangular
coordinate system.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −6 to 6 on each axis with six points labeled by letter: A at (−3, 3), B at (−1, −3), C at (2, 4), D at (4, −4), E at (0, −2) on the y-axis, and F at (3, 0) on the x-axis.","unit":24,"xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"points":[{"at":[-3,3],"label":"A"},{"at":[-1,-3],"label":"B"},{"at":[2,4],"label":"C"},{"at":[4,-4],"label":"D"},{"at":[0,-2],"label":"E"},{"at":[3,0],"label":"F"}]}
{{< /apfigure >}}

Point $A$ is above $-3$ on the $x$-axis, so the $x$-coordinate of the point
is $-3$.

- The point is to the left of $3$ on the $y$-axis, so the $y$-coordinate of
  the point is $3$.
- The coordinates of the point are $(-3, 3)$.

Point $B$ is below $-1$ on the $x$-axis, so the $x$-coordinate of the point
is $-1$.

- The point is to the left of $-3$ on the $y$-axis, so the $y$-coordinate
  of the point is $-3$.
- The coordinates of the point are $(-1, -3)$.

Point $C$ is above $2$ on the $x$-axis, so the $x$-coordinate of the point
is $2$.

- The point is to the right of $4$ on the $y$-axis, so the $y$-coordinate
  of the point is $4$.
- The coordinates of the point are $(2, 4)$.

Point $D$ is below $4$ on the $x$-axis, so the $x$-coordinate of the point
is $4$.

- The point is to the right of $-4$ on the $y$-axis, so the $y$-coordinate
  of the point is $-4$.
- The coordinates of the point are $(4, -4)$.

Point $E$ is on the $y$-axis at $y = -2$. The coordinates of point $E$ are
$(0, -2)$.

Point $F$ is on the $x$-axis at $x = 3$. The coordinates of point $F$ are
$(3, 0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −6 to 6 on each axis with six points labeled by letter: A in Quadrant I just above the x-axis, B in Quadrant II, C in Quadrant III, D in Quadrant IV, E on the negative y-axis, and F on the positive x-axis.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"points":[{"at":[5,1],"label":"A"},{"at":[-2,4],"label":"B"},{"at":[-5,-1],"label":"C"},{"at":[3,-2],"label":"D"},{"at":[0,-5],"label":"E"},{"at":[4,0],"label":"F"}]}
{{< /apfigure >}}

{{< fillin
  question="Name the ordered pair of point $B$ in the rectangular coordinate system above. Enter it as $(x, y)$."
  answer="(-2,4)"
  answerForm="decimal"
  answerDisplay="$(-2, 4)$"
  hint="Read the $x$-coordinate on the $x$-axis directly above or below the point, then the $y$-coordinate on the $y$-axis directly to its left or right."
>}}

{{< fillin
  question="Name the ordered pair of point $D$ in the same rectangular coordinate system. Enter it as $(x, y)$."
  answer="(3,-2)"
  answerForm="decimal"
  answerDisplay="$(3, -2)$"
  hint="Follow the grid line through the point to the $x$-axis for the first coordinate and to the $y$-axis for the second."
>}}

## Verify solutions to an equation in two variables

Up to now, all the equations you have solved were equations with just one
variable. In almost every case, when you solved the equation you got
exactly one solution. The process of solving an equation ended with a
statement like $x = 4$. (Then, you checked the solution by substituting
back into the equation.)

Here's an example of an equation in one variable, and its one solution.

$$
\begin{array}{rcl}
3x + 5 &=& 17 \\[4pt]
3x &=& 12 \\[4pt]
x &=& 4
\end{array}
$$

But equations can have more than one variable. Equations with two variables
may be of the form $Ax + By = C$. Equations of this form are called
**linear equations in two variables**.

{{< callout type="info" >}}
  **Linear equation.** An equation of the form $Ax + By = C$, where $A$ and
  $B$ are not both zero, is called a linear equation in two variables.
{{< /callout >}}

Notice the word *line* in *linear*. Here is an example of a linear equation
in two variables, $x$ and $y$: $x + 4y = 8$, where $A = 1$, $B = 4$, and
$C = 8$.

The equation $y = -3x + 5$ is also a linear equation. But it does not
appear to be in the form $Ax + By = C$. We can use the Addition Property of
Equality and rewrite it in $Ax + By = C$ form.

| | |
| :--- | :---: |
| | $y = -3x + 5$ |
| Add $3x$ to both sides. | $y + 3x = -3x + 5 + 3x$ |
| Simplify. | $y + 3x = 5$ |
| Use the Commutative Property to put it in $Ax + By = C$ form. | $3x + y = 5$ |

By rewriting $y = -3x + 5$ as $3x + y = 5$, we can easily see that it is a
linear equation in two variables because it is of the form $Ax + By = C$.
When an equation is in the form $Ax + By = C$, we say it is in *standard
form*.

{{< callout type="info" >}}
  **Standard form of a linear equation.** A linear equation is in standard
  form when it is written $Ax + By = C$.
{{< /callout >}}

Most people prefer to have $A$, $B$, and $C$ be integers and $A \geq 0$ when
writing a linear equation in standard form, although it is not strictly
necessary.

Linear equations have infinitely many solutions. For every number that is
substituted for $x$, there is a corresponding $y$ value. This pair of
values is a *solution* to the linear equation, and is represented by the
ordered pair $(x, y)$. When we substitute these values of $x$ and $y$ into
the equation, the result is a true statement, because the value on the left
side is equal to the value on the right side.

{{< callout type="info" >}}
  **Solution of a linear equation in two variables.** An ordered pair
  $(x, y)$ is a *solution* of the linear equation $Ax + By = C$, if the
  equation is a true statement when the $x$- and $y$-values of the ordered
  pair are substituted into the equation.
{{< /callout >}}

**Example.** Determine which ordered pairs are solutions to the equation
$x + 4y = 8$: (a) $(0, 2)$ (b) $(2, -4)$ (c) $(-4, 3)$.

Substitute the $x$- and $y$-values from each ordered pair into the equation
and determine if the result is a true statement.

(a) $x = 0, y = 2$: $\ 0 + 4 \cdot 2 \stackrel{?}{=} 8$, so
$0 + 8 \stackrel{?}{=} 8$, and $8 = 8$ ✓. $(0, 2)$ is a solution.

(b) $x = 2, y = -4$: $\ 2 + 4(-4) \stackrel{?}{=} 8$, so
$2 + (-16) \stackrel{?}{=} 8$, and $-14 \neq 8$. $(2, -4)$ is not a
solution.

(c) $x = -4, y = 3$: $\ -4 + 4 \cdot 3 \stackrel{?}{=} 8$, so
$-4 + 12 \stackrel{?}{=} 8$, and $8 = 8$ ✓. $(-4, 3)$ is a solution.

**Example.** Which of the following ordered pairs are solutions to
$y = 5x - 1$: (a) $(0, -1)$ (b) $(1, 4)$ (c) $(-2, -7)$?

(a) $x = 0, y = -1$: $\ -1 \stackrel{?}{=} 5(0) - 1$, so
$-1 \stackrel{?}{=} 0 - 1$, and $-1 = -1$ ✓. $(0, -1)$ is a solution.

(b) $x = 1, y = 4$: $\ 4 \stackrel{?}{=} 5(1) - 1$, so
$4 \stackrel{?}{=} 5 - 1$, and $4 = 4$ ✓. $(1, 4)$ is a solution.

(c) $x = -2, y = -7$: $\ -7 \stackrel{?}{=} 5(-2) - 1$, so
$-7 \stackrel{?}{=} -10 - 1$, and $-7 \neq -11$. $(-2, -7)$ is not a
solution.

{{< multiplechoice
  question="Which of the ordered pairs $(3, 0)$, $(2, 0)$, and $(6, -2)$ are solutions to $2x + 3y = 6$?"
  answer="$(3, 0)$ and $(6, -2)$ only"
  hint="Substitute each pair's $x$- and $y$-values into $2x + 3y$ and check which ones simplify to $6$."
>}}
$(3, 0)$ only
$(3, 0)$ and $(6, -2)$ only
$(2, 0)$ and $(6, -2)$ only
all three
{{< /multiplechoice >}}

## Complete a table of solutions to a linear equation in two variables

In the examples above, we substituted the $x$- and $y$-values of a given
ordered pair to determine whether or not it was a solution to a linear
equation. But how do you find the ordered pairs if they are not given? It's
easier than you might think — you can just pick a value for $x$ and then
solve the equation for $y$. Or, pick a value for $y$ and then solve for $x$.

We'll start by looking at the solutions to the equation $y = 5x - 1$ that we
found above. We can summarize this information in a table of solutions.

| $y = 5x - 1$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $0$ | $-1$ | $(0, -1)$ |
| $1$ | $4$ | $(1, 4)$ |

To find a third solution, we'll let $x = 2$ and solve for $y$: substituting
$x = 2$ gives $y = 5(2) - 1$, so $y = 10 - 1$, and $y = 9$. The ordered pair
$(2, 9)$ is a solution to $y = 5x - 1$. We add it to the table.

| $y = 5x - 1$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $0$ | $-1$ | $(0, -1)$ |
| $1$ | $4$ | $(1, 4)$ |
| $2$ | $9$ | $(2, 9)$ |

We can find more solutions to the equation by substituting in any value of
$x$ or any value of $y$ and solving the resulting equation to get another
ordered pair that is a solution. There are infinitely many solutions of this
equation.

**Example.** Complete the table to find three solutions to the equation
$y = 4x - 2$, using $x = 0$, $x = -1$, and $x = 2$.

Substitute $x = 0$, $x = -1$, and $x = 2$ into $y = 4x - 2$:

when $x = 0$: $y = 4 \cdot 0 - 2 = 0 - 2 = -2$;

when $x = -1$: $y = 4(-1) - 2 = -4 - 2 = -6$;

when $x = 2$: $y = 4 \cdot 2 - 2 = 8 - 2 = 6$.

The results are summarized in the table.

| $y = 4x - 2$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $0$ | $-2$ | $(0, -2)$ |
| $-1$ | $-6$ | $(-1, -6)$ |
| $2$ | $6$ | $(2, 6)$ |

{{< fillin
  question="In a table of solutions to $y = 3x - 1$, what is $y$ when $x = -1$?"
  answer="-4"
  answerForm="decimal"
  hint="Substitute $x = -1$ into $3x - 1$ and simplify."
>}}

**Example.** Complete the table to find three solutions to the equation
$5x - 4y = 20$, given $x = 0$, $y = 0$, and $y = 5$.

Substitute the given value into the equation $5x - 4y = 20$ and solve for
the other variable.

When $x = 0$: $\ 5(0) - 4y = 20$, so $0 - 4y = 20$, then $-4y = 20$, and
$y = -5$; the ordered pair is $(0, -5)$.

When $y = 0$: $\ 5x - 4(0) = 20$, so $5x - 0 = 20$, then $5x = 20$, and
$x = 4$; the ordered pair is $(4, 0)$.

When $y = 5$: $\ 5x - 4(5) = 20$, so $5x - 20 = 20$, then $5x = 40$, and
$x = 8$; the ordered pair is $(8, 5)$.

The results are summarized in the table.

| $5x - 4y = 20$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $0$ | $-5$ | $(0, -5)$ |
| $4$ | $0$ | $(4, 0)$ |
| $8$ | $5$ | $(8, 5)$ |

{{< fillin
  question="In a table of solutions to $3x - 4y = 12$, what is $x$ when $y = 0$?"
  answer="4"
  answerForm="decimal"
  hint="Substitute $y = 0$ into $3x - 4y = 12$ and solve for $x$."
>}}

## Find solutions to a linear equation

To find a solution to a linear equation, you really can pick *any* number
you want to substitute into the equation for $x$ or $y$. But since you'll
need to use that number to solve for the other variable, it's a good idea
to choose a number that's easy to work with.

When the equation is in $y$-form, with the $y$ by itself on one side of the
equation, it is usually easier to choose values of $x$ and then solve for
$y$.

**Example.** Find three solutions to the equation $y = -3x + 2$.

We can substitute any value we want for $x$ or any value for $y$. Since the
equation is in $y$-form, it will be easier to substitute in values of $x$.
Let's pick $x = 0$, $x = 1$, and $x = -1$.

When $x = 0$: $\ y = -3 \cdot 0 + 2 = 0 + 2 = 2$; the ordered pair is
$(0, 2)$. Check: $2 \stackrel{?}{=} -3 \cdot 0 + 2$, so $2 = 2$ ✓.

When $x = 1$: $\ y = -3 \cdot 1 + 2 = -3 + 2 = -1$; the ordered pair is
$(1, -1)$. Check: $-1 \stackrel{?}{=} -3 \cdot 1 + 2$, so $-1 = -1$ ✓.

When $x = -1$: $\ y = -3(-1) + 2 = 3 + 2 = 5$; the ordered pair is
$(-1, 5)$. Check: $5 \stackrel{?}{=} -3(-1) + 2$, so $5 = 5$ ✓.

So $(0, 2)$, $(1, -1)$, and $(-1, 5)$ are all solutions to $y = -3x + 2$. We
show them in a table.

| $y = -3x + 2$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $0$ | $2$ | $(0, 2)$ |
| $1$ | $-1$ | $(1, -1)$ |
| $-1$ | $5$ | $(-1, 5)$ |

We have seen how using zero as one value of $x$ makes finding the value of
$y$ easy. When an equation is in standard form, with both the $x$ and $y$ on
the same side of the equation, it is usually easier to first find one
solution when $x = 0$, find a second solution when $y = 0$, and then find a
third solution.

**Example.** Find three solutions to the equation $3x + 2y = 6$.

**Step 1: Choose any value for one of the variables in the equation.** We
can substitute any value we want for $x$ or any value for $y$. Since the
equation is in standard form, let's pick first $x = 0$, then $y = 0$, and
then find a third point.

**Step 2: Substitute that value into the equation. Solve for the other
variable.**

When $x = 0$: $\ 3(0) + 2y = 6$, so $0 + 2y = 6$, then $2y = 6$, and $y = 3$.

When $y = 0$: $\ 3x + 2(0) = 6$, so $3x + 0 = 6$, then $3x = 6$, and $x = 2$.

When $x = 1$: $\ 3(1) + 2y = 6$, so $3 + 2y = 6$, then $2y = 3$, and
$y = \tfrac{3}{2}$.

**Step 3: Write the solution as an ordered pair.** So the solutions are
$(0, 3)$, $(2, 0)$, and $\left(1, \tfrac{3}{2}\right)$.

**Step 4: Check.** Substitute each pair into $3x + 2y = 6$:

$(0, 3)$: $\ 3(0) + 2(3) \stackrel{?}{=} 6$, so $0 + 6 \stackrel{?}{=} 6$,
and $6 = 6$ ✓.

$(2, 0)$: $\ 3(2) + 2(0) \stackrel{?}{=} 6$, so $6 + 0 \stackrel{?}{=} 6$,
and $6 = 6$ ✓.

$\left(1, \tfrac{3}{2}\right)$: $\ 3(1) + 2 \cdot \tfrac{3}{2}
\stackrel{?}{=} 6$, so $3 + 3 \stackrel{?}{=} 6$, and $6 = 6$ ✓.

{{< callout type="info" >}}
  **Find a solution to a linear equation.**

  1. Choose any value for one of the variables in the equation.
  2. Substitute that value into the equation. Solve for the other variable.
  3. Write the solution as an ordered pair.
  4. Check by substituting both values into the original equation.
{{< /callout >}}

{{< fillin
  question="Find a solution to the equation $2x + 3y = 6$ by letting $x = 0$. What is the ordered pair $(x, y)$?"
  answer="(0,2)"
  answerForm="decimal"
  answerDisplay="$(0, 2)$"
  hint="Substitute $x = 0$ into the equation and solve for $y$."
>}}

{{< fillin
  question="Find a solution to the equation $4x + 2y = 8$ by letting $y = 0$. What is the ordered pair $(x, y)$?"
  answer="(2,0)"
  answerForm="decimal"
  answerDisplay="$(2, 0)$"
  hint="Substitute $y = 0$ into the equation and solve for $x$."
>}}

## Key terms

**rectangular coordinate system** — a grid formed by a horizontal $x$-axis
and a vertical $y$-axis, used to show a relationship between two variables;
also called the $xy$-plane. **quadrant** — one of the four regions the
$x$-axis and $y$-axis divide the plane into, numbered I through IV
counterclockwise starting from the upper right. **ordered pair** — a pair
of numbers $(x, y)$ that gives the coordinates of a point in a rectangular
coordinate system; the first number is the $x$-coordinate and the second is
the $y$-coordinate. **$x$-coordinate** — the first number in an ordered
pair $(x, y)$. **$y$-coordinate** — the second number in an ordered pair
$(x, y)$. **origin** — the point $(0, 0)$, where the $x$-axis and
$y$-axis intersect. **linear equation in two variables** — an equation of
the form $Ax + By = C$, where $A$ and $B$ are not both zero. **standard
form** — a linear equation is in standard form when it is written
$Ax + By = C$. **solution of a linear equation in two variables** — an
ordered pair $(x, y)$ that makes the equation a true statement when its
$x$- and $y$-values are substituted in for $x$ and $y$.

## Practice

### Plot points in a rectangular coordinate system

{{< graphplot
  question="Plot the point $(-4, 2)$ on the grid."
  answerDisplay="$(-4, 2)$"
  ariaLabel="A blank coordinate grid from −6 to 6 on both axes."
  hint="Start at the origin: move along the $x$-axis by the $x$-coordinate, then parallel to the $y$-axis by the $y$-coordinate."
>}}
{"answer":{"points":[[-4,2]]},"grid":{"xMin":-6,"xMax":6,"yMin":-6,"yMax":6}}
{{< /graphplot >}}

{{< graphplot
  question="Plot the point $(-1, -2)$ on the grid."
  answerDisplay="$(-1, -2)$"
  ariaLabel="A blank coordinate grid from −6 to 6 on both axes."
  hint="Use the sign of each coordinate to decide the direction: the $x$-coordinate first, then the $y$-coordinate."
>}}
{"answer":{"points":[[-1,-2]]},"grid":{"xMin":-6,"xMax":6,"yMin":-6,"yMax":6}}
{{< /graphplot >}}

{{< graphplot
  question="Plot the point $(3, -5)$ on the grid."
  answerDisplay="$(3, -5)$"
  ariaLabel="A blank coordinate grid from −6 to 6 on both axes."
  hint="Locate the $x$-coordinate on the $x$-axis, then move up or down from there by the $y$-coordinate."
>}}
{"answer":{"points":[[3,-5]]},"grid":{"xMin":-6,"xMax":6,"yMin":-6,"yMax":6}}
{{< /graphplot >}}

{{< graphplot
  question="Plot the point $(-3, 5)$ on the grid."
  answerDisplay="$(-3, 5)$"
  ariaLabel="A blank coordinate grid from −6 to 6 on both axes."
  hint="The first number moves you left or right from the origin, the second up or down."
>}}
{"answer":{"points":[[-3,5]]},"grid":{"xMin":-6,"xMax":6,"yMin":-6,"yMax":6}}
{{< /graphplot >}}

{{< multiplechoice
  question="Plot $\left(\tfrac{5}{3}, 2\right)$ in a rectangular coordinate system. In which quadrant is the point located?"
  answer="Quadrant I"
  hint="Decide from the sign of each coordinate which side of each axis the point is on, then compare with the sign patterns of the quadrants."
>}}
Quadrant I
Quadrant IV
Quadrant II
Quadrant III
{{< /multiplechoice >}}

### Verify solutions to an equation in two variables

{{< multiplechoice
  question="Is $(1, 4)$ a solution to $2x + y = 6$?"
  answer="yes"
  hint="Substitute $x = 1$ and $y = 4$ into the left side and compare the result with $6$."
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(3, 0)$ a solution to $2x + y = 6$?"
  answer="yes"
  hint="Substitute both coordinates, including the zero, and check whether the equation is true."
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(2, 3)$ a solution to $2x + y = 6$?"
  answer="no"
  hint="Evaluate $2(2) + 3$ and compare it with the right side of the equation."
>}}
no
yes
{{< /multiplechoice >}}

### Complete a table of solutions to a linear equation in two variables

{{< fillin
  question="Complete the table for $y = 2x - 4$ when $x = 0$. Enter the solution as an ordered pair $(x, y)$."
  answer="(0,-4)"
  answerForm="decimal"
  answerDisplay="$(0, -4)$"
  hint="Substitute $0$ for $x$ and simplify."
>}}

{{< fillin
  question="Complete the table for $y = 2x - 4$ when $x = 2$. Enter the solution as an ordered pair $(x, y)$."
  answer="(2,0)"
  answerForm="decimal"
  answerDisplay="$(2, 0)$"
  hint="Substitute $2$ for $x$, multiply, and then subtract $4$."
>}}

{{< fillin
  question="Complete the table for $y = 2x - 4$ when $x = -1$. Enter the solution as an ordered pair $(x, y)$."
  answer="(-1,-6)"
  answerForm="decimal"
  answerDisplay="$(-1, -6)$"
  hint="Substitute $-1$ for $x$, multiply, and then subtract $4$."
>}}

### Find solutions to a linear equation in two variables

{{< fillin
  question="Find the solution to $2x - 5y = 10$ when $x = 0$. Enter the solution as an ordered pair $(x, y)$."
  answer="(0,-2)"
  answerForm="decimal"
  answerDisplay="$(0, -2)$"
  hint="Substitute $0$ for $x$, then solve the resulting equation for $y$."
>}}

{{< fillin
  question="Find the solution to $2x - 5y = 10$ when $x = 10$. Enter the solution as an ordered pair $(x, y)$."
  answer="(10,2)"
  answerForm="decimal"
  answerDisplay="$(10, 2)$"
  hint="Substitute $10$ for $x$, then isolate the $y$-term and divide by its coefficient."
>}}

{{< fillin
  question="Find the solution to $2x - 5y = 10$ when $y = 0$. Enter the solution as an ordered pair $(x, y)$."
  answer="(5,0)"
  answerForm="decimal"
  answerDisplay="$(5, 0)$"
  hint="Substitute $0$ for $y$, then solve the resulting equation for $x$."
>}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 4.1: Use the Rectangular Coordinate System](https://openstax.org/books/elementary-algebra-2e/pages/4-1-use-the-rectangular-coordinate-system) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the quadrant, plotting, and point-naming figures as accessible graphics with numbered axes, plotting $(-2, 3)$ in the first example's figure, where the source image plots $(0, -1)$ in its place; omitted the ordered-pair diagram and the figure plotting $(0, 4)$ and $(-2, 0)$; set the rewriting steps as a table and the examples' substitution tables as prose, adding step headings and a four-step summary box to the last example; omitted the Be Prepared quiz, the Key Concepts summary (its boxes appear in the body), and the Self Check checklist; converted selected parts of the practice problems ("Try Its") into interactive exercises with instant feedback, posing the axis question as a multiple choice and one three-pair solution check as a choice among sets of its pairs; and adapted selected end-of-section exercises into the interactive Practice block, splitting multipart items into adjacent components, using interactive graphing for point-plotting exercises, and categorical choices for the one non-lattice quadrant check and the solution checks.</small>
