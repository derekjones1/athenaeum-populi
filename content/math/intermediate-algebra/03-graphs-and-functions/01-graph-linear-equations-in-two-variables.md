---
title: Graph Linear Equations in Two Variables
description: >-
  Plotting points, graphing linear equations by plotting points, graphing
  vertical and horizontal lines, finding intercepts, and graphing with
  intercepts — adapted from OpenStax Intermediate Algebra 2e, Section 3.1.
source_section: "3.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Plot points in a rectangular coordinate system
- Graph a linear equation by plotting points
- Graph vertical and horizontal lines
- Find the $x$- and $y$-intercepts
- Graph a line using the intercepts
{{< /callout >}}

## Plot points in a rectangular coordinate system

Just like maps use a grid system to identify locations, a grid system is used
in algebra to show a relationship between two variables in a **rectangular
coordinate system**. The rectangular coordinate system is also called the
$xy$-plane or the “coordinate plane.”

The rectangular coordinate system is formed by two intersecting number lines,
one horizontal and one vertical. The horizontal number line is called the
$x$-axis. The vertical number line is called the $y$-axis. These axes divide a
plane into four regions, called **quadrants**. The quadrants are identified by
Roman numerals, beginning on the upper right and proceeding counterclockwise.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The rectangular coordinate system, with each axis numbered from −7 to 7. The x-axis and y-axis divide the plane into four quadrants, labeled counterclockwise from the upper right: I upper right, II upper left, III lower left, IV lower right.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"quadrantLabels":true}
{{< /apfigure >}}

In the rectangular coordinate system, every point is represented by an
*ordered pair*. The first number in the ordered pair is the $x$-coordinate of
the point, and the second number is the $y$-coordinate of the point. The phrase
“ordered pair” means that the order is important.

{{< callout type="info" >}}
  **Ordered pair.** An ordered pair $(x,y)$ gives the coordinates of a point in
  a rectangular coordinate system. The first number is the $x$-coordinate.
  The second number is the $y$-coordinate.
{{< /callout >}}

What is the ordered pair of the point where the axes cross? At that point both
coordinates are zero, so its ordered pair is $(0,0)$. The point $(0,0)$ has a
special name. It is called the **origin**.

{{< callout type="info" >}}
  **The origin.** The point $(0,0)$ is called the origin. It is the point where
  the $x$-axis and $y$-axis intersect.
{{< /callout >}}

We use the coordinates to locate a point on the $xy$-plane. Let’s plot the
point $(1,3)$ as an example. First, locate $1$ on the $x$-axis and lightly
sketch a vertical line through $x=1$. Then, locate $3$ on the $y$-axis and
sketch a horizontal line through $y=3$. Now, find the point where these two
lines meet—that is the point with coordinates $(1,3)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −6 to 6 on each axis. A dashed vertical line through 1 on the x-axis and a dashed horizontal line through 3 on the y-axis cross at the point (1, 3), which is plotted and labeled.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"lines":[{"x":1,"dashed":true,"arrows":false},{"y":3,"dashed":true,"arrows":false}],"points":[{"at":[1,3],"label":"(1, 3)","labelSide":"ne"}]}
{{< /apfigure >}}

Notice that the vertical line through $x=1$ and the horizontal line through
$y=3$ are not part of the graph. We just used them to help us locate the point
$(1,3)$.

When one of the coordinates is zero, the point lies on one of the axes. The
point $(0,4)$ is on the $y$-axis and the point $(-2,0)$ is on the $x$-axis.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −6 to 6 on each axis. The point (0, 4) is plotted on the y-axis and the point (−2, 0) on the x-axis, each labeled.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"points":[{"at":[0,4],"label":"(0, 4)"},{"at":[-2,0],"label":"(−2, 0)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Points on the axes.** Points with a $y$-coordinate equal to $0$ are on the
  $x$-axis, and have coordinates $(a,0)$. Points with an $x$-coordinate equal
  to $0$ are on the $y$-axis, and have coordinates $(0,b)$.
{{< /callout >}}

**Example.** Plot each point in the rectangular coordinate system and identify
the quadrant in which the point is located: (a) $(-5,4)$ (b) $(-3,-4)$
(c) $(2,-3)$ (d) $(0,-1)$ (e) $\left(3,\tfrac{5}{2}\right)$.

The first number of the coordinate pair is the $x$-coordinate, and the second
number is the $y$-coordinate. To plot each point, sketch a vertical line
through the $x$-coordinate and a horizontal line through the $y$-coordinate.
Their intersection is the point.

(a) Since $x=-5$, the point is to the left of the $y$-axis. Also, since $y=4$,
the point is above the $x$-axis. The point $(-5,4)$ is in Quadrant II.

(b) Since $x=-3$, the point is to the left of the $y$-axis. Also, since $y=-4$,
the point is below the $x$-axis. The point $(-3,-4)$ is in Quadrant III.

(c) Since $x=2$, the point is to the right of the $y$-axis. Since $y=-3$, the
point is below the $x$-axis. The point $(2,-3)$ is in Quadrant IV.

(d) Since $x=0$, the point whose coordinates are $(0,-1)$ is on the $y$-axis.

(e) Since $x=3$, the point is to the right of the $y$-axis. Since
$y=\tfrac{5}{2}$, the point is above the $x$-axis. (It may be helpful to write
$\tfrac{5}{2}$ as a mixed number or decimal.) The point
$\left(3,\tfrac{5}{2}\right)$ is in Quadrant I.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −6 to 6 on each axis with five points plotted and labeled: (−5, 4) in Quadrant II, (−3, −4) in Quadrant III, (2, −3) in Quadrant IV, (0, −1) on the y-axis, and (3, 5/2) in Quadrant I.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"points":[{"at":[-5,4],"label":"(−5, 4)"},{"at":[-3,-4],"label":"(−3, −4)"},{"at":[2,-3],"label":"(2, −3)"},{"at":[0,-1],"label":"(0, −1)"},{"at":[3,2.5],"label":"(3, 5/2)"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Plot the point $(-2, 1)$. In which quadrant is it located?"
  answer="Quadrant II"
  hint="Use the sign of the $x$-coordinate to decide left or right of the $y$-axis and the sign of the $y$-coordinate to decide above or below the $x$-axis, then match that region to the quadrant figure."
>}}
Quadrant I
Quadrant III
Quadrant IV
Quadrant II
{{< /multiplechoice >}}

The signs of the $x$-coordinate and $y$-coordinate affect the location of the
points. We can summarize sign patterns of the quadrants in this way:

| Quadrant I | Quadrant II | Quadrant III | Quadrant IV |
| :---: | :---: | :---: | :---: |
| $(+,+)$ | $(-,+)$ | $(-,-)$ | $(+,-)$ |

Up to now, all the equations you have solved were equations with just one
variable. In almost every case, when you solved the equation you got exactly
one solution. But equations can have more than one variable. Equations with
two variables may be of the form $Ax+By=C$. An equation of this form is called
a **linear equation in two variables**.

{{< callout type="info" >}}
  **Linear equation.** An equation of the form $Ax+By=C$, where $A$ and $B$
  are not both zero, is called a linear equation in two variables.
{{< /callout >}}

Here is an example of a linear equation in two variables, $x$ and $y$:

$$4x+y=8 \qquad A=4,\ B=1,\ C=8$$

The equation $y=-3x+5$ is also a linear equation. But it does not appear to
be in the form $Ax+By=C$. We can use the Addition Property of Equality and
rewrite it in $Ax+By=C$ form.

$$
\begin{array}{lrcl}
&y&=&-3x+5\\[4pt]
\text{Add }3x\text{ to both sides.}&y+3x&=&-3x+5+3x\\[4pt]
\text{Simplify.}&y+3x&=&5\\[4pt]
\text{Use the Commutative Property.}&3x+y&=&5
\end{array}
$$

By rewriting $y=-3x+5$ as $3x+y=5$, we can easily see that it is a linear
equation in two variables because it is of the form $Ax+By=C$. When an
equation is in the form $Ax+By=C$, we say it is in *standard form*.

{{< callout type="info" >}}
  **Standard form of a linear equation.** A linear equation is in standard
  form when it is written $Ax+By=C$.
{{< /callout >}}

Most people prefer to have $A$, $B$, and $C$ be integers and $A\geq0$ when
writing a linear equation in standard form, although it is not strictly
necessary.

Linear equations have infinitely many solutions. For every number that is
substituted for $x$ there is a corresponding $y$ value. This pair of values is
a solution to the linear equation and is represented by the ordered pair
$(x,y)$. When we substitute these values of $x$ and $y$ into the equation, the
result is a true statement, because the value on the left side is equal to the
value on the right side.

{{< callout type="info" >}}
  **Solution of a linear equation in two variables.** An ordered pair $(x,y)$
  is a solution of the linear equation $Ax+By=C$ if the equation is a true
  statement when the $x$- and $y$-values of the ordered pair are substituted
  into the equation.
{{< /callout >}}

Linear equations have infinitely many solutions. We can plot these solutions
in the rectangular coordinate system. The points will line up perfectly in a
straight line. We connect the points with a straight line to get the graph of
the equation. We put arrows on the ends of each side of the line to indicate
that the line continues in both directions.

A graph is a visual representation of all the solutions of the equation. It
is an example of the saying, “A picture is worth a thousand words.” The line
shows you all the solutions to that equation. Every point on the line is a
solution of the equation. And, every solution of this equation is on this
line. This line is called the graph of the equation. Points not on the line
are not solutions!

{{< callout type="info" >}}
  **Graph of a linear equation.** The graph of a linear equation $Ax+By=C$ is
  a straight line.

  - Every point on the line is a solution of the equation.
  - Every solution of this equation is a point on this line.
{{< /callout >}}

**Example.** The graph of $y=2x-3$ is shown. For each ordered pair, decide:
(a) Is the ordered pair a solution to the equation? (b) Is the point on the
line? A: $(0,-3)$; B: $(3,3)$; C: $(2,-3)$; D: $(-1,-5)$.

Substitute the $x$- and $y$-values into the equation to check if the ordered
pair is a solution to the equation.

| Point | Substitution and decision |
| :--- | :--- |
| A: $(0,-3)$ | $-3=2(0)-3=-3$; $(0,-3)$ is a solution. |
| B: $(3,3)$ | $3=2(3)-3=3$; $(3,3)$ is a solution. |
| C: $(2,-3)$ | $-3\ne2(2)-3=1$; $(2,-3)$ is not a solution. |
| D: $(-1,-5)$ | $-5=2(-1)-3=-5$; $(-1,-5)$ is a solution. |

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −8 to 8 on each axis showing the line y = 2x − 3. The points (0, −3), (3, 3), and (−1, −5) are plotted on the line, and the point (2, −3) is plotted off it.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"lines":[{"slope":2,"intercept":-3,"label":"y = 2x − 3"}],"points":[{"at":[0,-3],"label":"(0, −3)"},{"at":[3,3],"label":"(3, 3)"},{"at":[2,-3],"label":"(2, −3)"},{"at":[-1,-5],"label":"(−1, −5)"}]}
{{< /apfigure >}}

The points $(0,-3)$, $(3,3)$, and $(-1,-5)$ are on the line $y=2x-3$, and
the point $(2,-3)$ is not on the line. The points that are solutions to
$y=2x-3$ are on the line, but the point that is not a solution is not on the
line.

{{< multiplechoice
  question="For $y=3x-1$, is $(2,5)$ a solution?"
  answer="yes"
  hint="Substitute $x = 2$ and compare $3x - 1$ with $y = 5$."
>}}
yes
no
{{< /multiplechoice >}}

## Graph a linear equation by plotting points

There are several methods that can be used to graph a linear equation. The
first method we will use is called plotting points, or the Point-Plotting
Method. We find three points whose coordinates are solutions to the equation
and then plot them in a rectangular coordinate system. By connecting these
points in a line, we have the graph of the linear equation.

**Example. How to graph a linear equation by plotting points.** Graph the
equation $y=2x+1$ by plotting points.

**Step 1. Find three points whose coordinates are solutions to the equation.**
You can choose any values for $x$ or $y$. In this case, since $y$ is isolated
on the left side of the equation, it is easier to choose values for $x$.

$$
\begin{array}{lrcl}
x=0&y&=&2(0)+1=1\\[4pt]
x=1&y&=&2(1)+1=3\\[4pt]
x=-2&y&=&2(-2)+1=-3
\end{array}
$$

Organize the solutions in a table.

| $x$ | $y$ | $(x,y)$ |
| :---: | :---: | :---: |
| $0$ | $1$ | $(0,1)$ |
| $1$ | $3$ | $(1,3)$ |
| $-2$ | $-3$ | $(-2,-3)$ |

**Step 2. Plot the points in a rectangular coordinate system.** Check that
the points line up. If they do not, carefully check your work.

**Step 3. Draw the line through the three points.** Extend the line to fill
the grid and put arrows on both ends of the line. This line is the graph of
$y=2x+1$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −6 to 6 on each axis showing the line y = 2x + 1 drawn through the plotted points (0, 1), (1, 3), and (−2, −3).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"lines":[{"slope":2,"intercept":1,"label":"y = 2x + 1"}],"points":[{"at":[0,1],"label":"(0, 1)"},{"at":[1,3],"label":"(1, 3)"},{"at":[-2,-3],"label":"(−2, −3)"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph the equation $y=2x-3$ by plotting points."
  answerDisplay="$y=2x-3$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Make a table: choose three $x$-values, compute each matching $y$-value, plot the ordered pairs, and draw the line through them."
>}}
{"answer":{"slope":2,"intercept":-3,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

{{< graphplot
  question="Graph the equation $y=-2x+4$ by plotting points."
  answerDisplay="$y=-2x+4$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Make a table: choose three $x$-values, compute each matching $y$-value, plot the ordered pairs, and draw the line through them."
>}}
{"answer":{"slope":-2,"intercept":4,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

{{< callout type="info" >}}
  **Graph a linear equation by plotting points.**

  1. Find three points whose coordinates are solutions to the equation.
     Organize them in a table.
  2. Plot the points in a rectangular coordinate system. Check that the
     points line up. If they do not, carefully check your work.
  3. Draw the line through the three points. Extend the line to fill the grid
     and put arrows on both ends of the line.
{{< /callout >}}

It is true that it only takes two points to determine a line, but it is a good
habit to use three points. If you only plot two points and one of them is
incorrect, you can still draw a line but it will not represent the solutions
to the equation. It will be the wrong line. If you use three points, and one
is incorrect, the points will not line up. This tells you something is wrong
and you need to check your work.

When an equation includes a fraction as the coefficient of $x$, we can still
substitute any numbers for $x$. But the arithmetic is easier if we make “good”
choices for the values of $x$. This way we will avoid fractional answers,
which are hard to graph precisely.

**Example.** Graph the equation $y=\tfrac12x+3$.

Find three points that are solutions to the equation. Since this equation has
the fraction $\tfrac12$ as a coefficient of $x$, we will choose values of $x$
carefully. We will use zero as one choice and multiples of $2$ for the other
choices. Why are multiples of two a good choice for values of $x$? By choosing
multiples of $2$ the multiplication by $\tfrac12$ simplifies to a whole
number.

$$
\begin{array}{lrcl}
x=0&y&=&\tfrac12(0)+3=3\\[4pt]
x=2&y&=&\tfrac12(2)+3=4\\[4pt]
x=4&y&=&\tfrac12(4)+3=5
\end{array}
$$

| $x$ | $y$ | $(x,y)$ |
| :---: | :---: | :---: |
| $0$ | $3$ | $(0,3)$ |
| $2$ | $4$ | $(2,4)$ |
| $4$ | $5$ | $(4,5)$ |

Plot the points, check that they line up, and draw the line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −8 to 8 on each axis showing the line y = ½x + 3 drawn through the plotted points (0, 3), (2, 4), and (4, 5).","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"lines":[{"slope":0.5,"intercept":3,"label":"y = ½x + 3"}],"points":[{"at":[0,3],"label":"(0, 3)"},{"at":[2,4],"label":"(2, 4)"},{"at":[4,5],"label":"(4, 5)"}]}
{{< /apfigure >}}

## Graph vertical and horizontal lines

Some linear equations have only one variable. They may have just $x$ and no
$y$, or just $y$ without an $x$. This changes how we make a table of values to
get the points to plot.

Let’s consider the equation $x=-3$. This equation has only one variable, $x$.
The equation says that $x$ is always equal to $-3$, so its value does not
depend on $y$. No matter what is the value of $y$, the value of $x$ is always
$-3$. So to make a table of values, write $-3$ in for all the $x$-values. Then
choose any values for $y$. Since $x$ does not depend on $y$, you can choose any
numbers you like. But to fit the points on our coordinate graph, we’ll use
$1$, $2$, and $3$ for the $y$-coordinates.

| $x$ | $y$ | $(x,y)$ |
| :---: | :---: | :---: |
| $-3$ | $1$ | $(-3,1)$ |
| $-3$ | $2$ | $(-3,2)$ |
| $-3$ | $3$ | $(-3,3)$ |

Plot the points from the table and connect them with a straight line. Notice
that we have graphed a vertical line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −7 to 7 on each axis showing the vertical line x = −3 drawn through the plotted points (−3, 1), (−3, 2), and (−3, 3).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"lines":[{"x":-3,"label":"x = −3"}],"points":[{"at":[-3,1],"label":"(−3, 1)"},{"at":[-3,2],"label":"(−3, 2)"},{"at":[-3,3],"label":"(−3, 3)"}]}
{{< /apfigure >}}

What if the equation has $y$ but no $x$? Let’s graph the equation $y=4$.
This time the $y$-value is a constant, so in this equation, $y$ does not
depend on $x$. Fill in $4$ for all the $y$’s and then choose any values for
$x$. We’ll use $0$, $2$, and $4$ for the $x$-coordinates.

| $x$ | $y$ | $(x,y)$ |
| :---: | :---: | :---: |
| $0$ | $4$ | $(0,4)$ |
| $2$ | $4$ | $(2,4)$ |
| $4$ | $4$ | $(4,4)$ |

In this figure, we have graphed a horizontal line passing through the $y$-axis
at $4$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −7 to 7 on each axis showing the horizontal line y = 4 drawn through the plotted points (0, 4), (2, 4), and (4, 4).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"lines":[{"y":4,"label":"y = 4"}],"points":[{"at":[0,4],"label":"(0, 4)"},{"at":[2,4],"label":"(2, 4)"},{"at":[4,4],"label":"(4, 4)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Vertical and horizontal lines.** A vertical line is the graph of an
  equation of the form $x=a$. The line passes through the $x$-axis at $(a,0)$.
  A horizontal line is the graph of an equation of the form $y=b$. The line
  passes through the $y$-axis at $(0,b)$.
{{< /callout >}}

**Example.** Graph: (a) $x=2$ (b) $y=-1$.

(a) The equation has only one variable, $x$, and $x$ is always equal to $2$.
We create a table where $x$ is always $2$ and then put in any values for $y$.
The graph is a vertical line passing through the $x$-axis at $2$.

(b) Similarly, the equation $y=-1$ has only one variable, $y$. The value of
$y$ is constant. All the ordered pairs have the same $y$-coordinate. The graph
is a horizontal line passing through the $y$-axis at $-1$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −7 to 7 on each axis showing the vertical line x = 2 and the horizontal line y = −1.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"lines":[{"x":2,"label":"x = 2"},{"y":-1,"label":"y = −1"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph the equation $x=5$."
  answerDisplay="$x=5$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Make a table: write the value the equation fixes for $x$ in every row, choose any three values for $y$, and plot the ordered pairs."
>}}
{"answer":{"x":5,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

{{< graphplot
  question="Graph the equation $y=-4$."
  answerDisplay="$y=-4$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Make a table: write the value the equation fixes for $y$ in every row, choose any three values for $x$, and plot the ordered pairs."
>}}
{"answer":{"y":-4,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

What is the difference between the equations $y=4x$ and $y=4$? The equation
$y=4x$ has both $x$ and $y$. The value of $y$ depends on the value of $x$, so
the $y$-coordinate changes according to the value of $x$. The equation $y=4$
has only one variable. The value of $y$ is constant, it does not depend on the
value of $x$, so the $y$-coordinate is always $4$.

| $y=4x$ | | | $y=4$ | | |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $x$ | $y$ | $(x,y)$ | $x$ | $y$ | $(x,y)$ |
| $0$ | $0$ | $(0,0)$ | $0$ | $4$ | $(0,4)$ |
| $1$ | $4$ | $(1,4)$ | $1$ | $4$ | $(1,4)$ |
| $2$ | $8$ | $(2,8)$ | $2$ | $4$ | $(2,4)$ |

Notice, in the graph, the equation $y=4x$ gives a slanted line, while $y=4$
gives a horizontal line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −7 to 7 on each axis showing the slanted line y = 4x through (0, 0) and (1, 4), and the horizontal line y = 4 through (0, 4), (1, 4), and (2, 4); the two lines cross at (1, 4).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"lines":[{"slope":4,"intercept":0,"label":"y = 4x"},{"y":4,"label":"y = 4"}]}
{{< /apfigure >}}

**Example.** Graph $y=-3x$ and $y=-3$ in the same rectangular coordinate
system. We notice that the first equation has the variable $x$, while the
second does not. We make a table of points for each equation and then graph
the lines.

| $y=-3x$ | | | $y=-3$ | | |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $x$ | $y$ | $(x,y)$ | $x$ | $y$ | $(x,y)$ |
| $0$ | $0$ | $(0,0)$ | $0$ | $-3$ | $(0,-3)$ |
| $1$ | $-3$ | $(1,-3)$ | $1$ | $-3$ | $(1,-3)$ |
| $2$ | $-6$ | $(2,-6)$ | $2$ | $-3$ | $(2,-3)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −7 to 7 on each axis showing the slanted line y = −3x through (0, 0), (1, −3), and (2, −6), and the horizontal line y = −3 through (0, −3), (1, −3), and (2, −3).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"lines":[{"slope":-3,"intercept":0,"label":"y = −3x","labelAt":0.25},{"y":-3,"label":"y = −3"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph the equation $y=3$."
  answerDisplay="$y=3$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Make a table: write the value the equation fixes for $y$ in every row, choose any three values for $x$, and plot the ordered pairs."
>}}
{"answer":{"y":3,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

{{< graphplot
  question="Graph the equation $y=3x$."
  answerDisplay="$y=3x$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Make a table: choose three $x$-values, compute each matching $y$-value, plot the ordered pairs, and draw the line through them."
>}}
{"answer":{"slope":3,"intercept":0,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

## Find $x$- and $y$-intercepts

Every linear equation can be represented by a unique line that shows all the
solutions of the equation. We have seen that when graphing a line by plotting
points, you can use any three solutions to graph. This means that two people
graphing the line might use different sets of three points.

At first glance, their two lines might not appear to be the same, since they
would have different points labeled. But if all the work was done correctly,
the lines should be exactly the same. One way to recognize that they are
indeed the same line is to look at where the line crosses the $x$-axis and the
$y$-axis. These points are called the intercepts of a line.

{{< callout type="info" >}}
  **Intercepts of a line.** The points where a line crosses the $x$-axis and
  the $y$-axis are called the intercepts of the line.
{{< /callout >}}

For every line, the $y$-coordinate of the point where the line crosses the
$x$-axis is zero. The point where the line crosses the $x$-axis has the form
$(a,0)$ and is called the $x$-intercept of the line. The $x$-intercept occurs
when $y$ is zero. For every line, the $x$-coordinate of the point where the line
crosses the $y$-axis is zero. The point where the line crosses the $y$-axis has
the form $(0,b)$ and is called the $y$-intercept of the line. The $y$-intercept
occurs when $x$ is zero.

{{< callout type="info" >}}
  **$x$-intercept and $y$-intercept of a line.** The $x$-intercept is the
  point $(a,0)$ where the line crosses the $x$-axis. The $y$-intercept is the
  point $(0,b)$ where the line crosses the $y$-axis.

  - The $x$-intercept occurs when $y$ is zero.
  - The $y$-intercept occurs when $x$ is zero.
{{< /callout >}}

**Example.** Find the $x$- and $y$-intercepts on each graph shown.

*Graph (a)*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Graph (a): a coordinate grid numbered from −8 to 8 on each axis showing a line falling from left to right through the points (−8, 6) and (8, −2).","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"lines":[{"through":[[-8,6],[8,-2]]}]}
{{< /apfigure >}}

*Graph (b)*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Graph (b): a coordinate grid numbered from −8 to 8 on each axis showing a line rising steeply from left to right through the points (1, −3) and (4, 6).","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"lines":[{"through":[[1,-3],[4,6]]}]}
{{< /apfigure >}}

*Graph (c)*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Graph (c): a coordinate grid numbered from −8 to 8 on each axis showing a line falling from left to right through the points (−8, 3) and (3, −8).","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"lines":[{"through":[[-8,3],[3,-8]]}]}
{{< /apfigure >}}

(a) The graph crosses the $x$-axis at the point $(4,0)$. The $x$-intercept is
$(4,0)$. The graph crosses the $y$-axis at the point $(0,2)$. The $y$-intercept
is $(0,2)$.

(b) The graph crosses the $x$-axis at the point $(2,0)$. The $x$-intercept is
$(2,0)$. The graph crosses the $y$-axis at the point $(0,-6)$. The $y$-intercept
is $(0,-6)$.

(c) The graph crosses the $x$-axis at the point $(-5,0)$. The $x$-intercept is
$(-5,0)$. The graph crosses the $y$-axis at the point $(0,-5)$. The
$y$-intercept is $(0,-5)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −6 to 6 on each axis showing a line rising from lower left to upper right through the points (−4, −6) and (6, 4).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"lines":[{"through":[[-4,-6],[6,4]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the $x$- and $y$-intercepts on the graph above. Enter the $x$-intercept first, then the $y$-intercept, as ordered pairs separated by a comma."
  answer="(2,0),(0,-2)"
  answerForm="decimal"
  answerDisplay="$(2,0), (0,-2)$"
  hint="Read where the line crosses each axis; at an intercept the other coordinate is $0$."
>}}

Recognizing that the $x$-intercept occurs when $y$ is zero and that the
$y$-intercept occurs when $x$ is zero, gives us a method to find the
intercepts of a line from its equation. To find the $x$-intercept, let $y=0$
and solve for $x$. To find the $y$-intercept, let $x=0$ and solve for $y$.

{{< callout type="info" >}}
  **Find the $x$- and $y$-intercepts from the equation of a line.** Use the
  equation of the line. To find:

  - the $x$-intercept of the line, let $y=0$ and solve for $x$.
  - the $y$-intercept of the line, let $x=0$ and solve for $y$.
{{< /callout >}}

**Example.** Find the intercepts of $2x+y=8$.

We will let $y=0$ to find the $x$-intercept, and let $x=0$ to find the
$y$-intercept. We will fill in a table, which reminds us of what we need to
find.

$$
\begin{array}{lrcl}
\text{To find the }x\text{-intercept, let }y=0.&2x+y&=&8\\[4pt]
&2x+0&=&8\\[4pt]
\text{Simplify.}&2x&=&8\\[4pt]
&x&=&4
\end{array}
$$

The $x$-intercept is $(4,0)$.

$$
\begin{array}{lrcl}
\text{To find the }y\text{-intercept, let }x=0.&2x+y&=&8\\[4pt]
&2(0)+y&=&8\\[4pt]
\text{Simplify.}&y&=&8
\end{array}
$$

The $y$-intercept is $(0,8)$. The intercepts are the points $(4,0)$ and
$(0,8)$.

{{< fillin
  question="Find the intercepts of $3x+y=12$. Enter the $x$-intercept first, then the $y$-intercept, as ordered pairs separated by a comma."
  answer="(4,0),(0,12)"
  answerForm="decimal"
  answerDisplay="$(4,0), (0,12)$"
  hint="Let $y=0$ and solve for $x$; then let $x=0$ and solve for $y$."
>}}

{{< fillin
  question="Find the intercepts of $x+4y=8$. Enter the $x$-intercept first, then the $y$-intercept, as ordered pairs separated by a comma."
  answer="(8,0),(0,2)"
  answerForm="decimal"
  answerDisplay="$(8,0), (0,2)$"
  hint="Let $y=0$ and solve for $x$; then let $x=0$ and solve for $y$."
>}}

## Graph a line using the intercepts

To graph a linear equation by plotting points, you need to find three points
whose coordinates are solutions to the equation. You can use the $x$- and
$y$-intercepts as two of your three points. Find the intercepts, and then find
a third point to ensure accuracy. Make sure the points line up—then draw the
line. This method is often the quickest way to graph a line.

**Example. How to graph a line using the intercepts.** Graph $-x+2y=6$ using
the intercepts.

**Step 1. Find the $x$- and $y$-intercepts of the line.** Let $y=0$ and solve
for $x$; let $x=0$ and solve for $y$.

$$
\begin{array}{rcl}
-x+2(0)&=&6\\[4pt]
-x&=&6\\[4pt]
x&=&-6
\end{array}
\qquad
\begin{array}{rcl}
-0+2y&=&6\\[4pt]
2y&=&6\\[4pt]
y&=&3
\end{array}
$$

The $x$-intercept is $(-6,0)$ and the $y$-intercept is $(0,3)$.

**Step 2. Find another solution to the equation.** We’ll use $x=2$.

$$-2+2y=6,\quad 2y=8,\quad y=4$$

A third point is $(2,4)$.

**Step 3. Plot the three points. Check that the points line up.**

| $x$ | $y$ | $(x,y)$ |
| :---: | :---: | :---: |
| $-6$ | $0$ | $(-6,0)$ |
| $0$ | $3$ | $(0,3)$ |
| $2$ | $4$ | $(2,4)$ |

**Step 4. Draw the line.**

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −8 to 8 on each axis showing the line −x + 2y = 6 drawn through the plotted points (−6, 0), (0, 3), and (2, 4).","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"lines":[{"slope":0.5,"intercept":3}],"points":[{"at":[-6,0],"label":"(−6, 0)"},{"at":[0,3],"label":"(0, 3)"},{"at":[2,4],"label":"(2, 4)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Graph a linear equation using the intercepts.**

  1. Find the $x$- and $y$-intercepts of the line.
     - Let $y=0$ and solve for $x$.
     - Let $x=0$ and solve for $y$.
  2. Find a third solution to the equation.
  3. Plot the three points and check that they line up.
  4. Draw the line.
{{< /callout >}}

**Example.** Graph $4x-3y=12$ using the intercepts.

Find the intercepts and a third point.

$$
\begin{array}{lll}
x\text{-intercept, let }y=0 & y\text{-intercept, let }x=0 & \text{third point, let }y=4\\[4pt]
4x-3(0)=12 & 4(0)-3y=12 & 4x-3(4)=12\\[4pt]
4x=12 & -3y=12 & 4x-12=12\\[4pt]
x=3 & y=-4 & 4x=24\\[4pt]
&&x=6
\end{array}
$$

We list the points in the table and show the graph.

| $x$ | $y$ | $(x,y)$ |
| :---: | :---: | :---: |
| $3$ | $0$ | $(3,0)$ |
| $0$ | $-4$ | $(0,-4)$ |
| $6$ | $4$ | $(6,4)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −7 to 7 on each axis showing the line 4x − 3y = 12 drawn through the plotted points (3, 0), (0, −4), and (6, 4).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"lines":[{"through":[[3,0],[6,4]]}],"points":[{"at":[3,0],"label":"(3, 0)"},{"at":[0,-4],"label":"(0, −4)"},{"at":[6,4],"label":"(6, 4)"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $5x-2y=10$ using the intercepts."
  answerDisplay="$5x-2y=10$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Find both intercepts: let $y=0$ and solve for $x$, then let $x=0$ and solve for $y$; find a third point to check, and draw the line."
>}}
{"answer":{"slope":2.5,"intercept":-5,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

**Example.** Graph $y=5x$ using the intercepts.

Let $y=0$: $0=5x$, so $0=x$. Let $x=0$: $y=5\cdot0$, so $y=0$. The
$x$-intercept and the $y$-intercept are both $(0,0)$. This line has only one
intercept. It is the point $(0,0)$.

To ensure accuracy, we need to plot three points. Since the $x$- and
$y$-intercepts are the same point, we need two more points to graph the line.
Let $x=1$, so $y=5(1)=5$. Let $x=-1$, so $y=5(-1)=-5$.

| $x$ | $y$ | $(x,y)$ |
| :---: | :---: | :---: |
| $0$ | $0$ | $(0,0)$ |
| $1$ | $5$ | $(1,5)$ |
| $-1$ | $-5$ | $(-1,-5)$ |

Plot the three points, check that they line up, and draw the line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid numbered from −7 to 7 on each axis showing the line y = 5x drawn through the plotted points (0, 0), (1, 5), and (−1, −5).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"lines":[{"slope":5,"intercept":0,"label":"y = 5x"}],"points":[{"at":[0,0],"label":"(0, 0)"},{"at":[1,5],"label":"(1, 5)"},{"at":[-1,-5],"label":"(−1, −5)"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $y=4x$ using the intercepts."
  answerDisplay="$y=4x$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Find both intercepts by letting $y=0$ and then $x=0$. If they are the same point, substitute two other $x$-values to get more points, and draw the line."
>}}
{"answer":{"slope":4,"intercept":0,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

## Key terms

**rectangular coordinate system** — a grid formed by the $x$-axis and
$y$-axis. **quadrants** — the four regions into which the axes divide the
plane. **ordered pair** — $(x,y)$, the coordinates of a point. **origin** —
the point $(0,0)$. **linear equation in two variables** — an equation of the
form $Ax+By=C$, where $A$ and $B$ are not both zero. **standard form** — the
form $Ax+By=C$. **solution of a linear equation in two variables** — an
ordered pair that makes the equation true. **graph of a linear equation** —
the straight line made up of all its solutions. **vertical line** — the graph
of $x=a$. **horizontal line** — the graph of $y=b$. **intercepts of a line** —
the points where a line crosses the axes. **$x$-intercept** — $(a,0)$, where a
line crosses the $x$-axis. **$y$-intercept** — $(0,b)$, where a line crosses
the $y$-axis.

## Practice

### Plot points in a rectangular coordinate system

{{< multiplechoice
  question="For $y=x+2$, is $(1,2)$ a solution?"
  answer="no"
  hint="Substitute $x=1$ into $x+2$ and compare the result with $y=2$."
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y=\tfrac12x-3$, is $(-2,-4)$ a solution?"
  answer="yes"
  hint="Substitute $x=-2$ into $\tfrac12x-3$ and compare the result with $y=-4$."
>}}
yes
no
{{< /multiplechoice >}}

### Graph a linear equation by plotting points

{{< graphplot
  question="Graph the equation $y=3x-1$ by plotting points."
  answerDisplay="$y=3x-1$"
  ariaLabel="A blank coordinate grid from negative 7 to 7 on both axes."
  hint="Choose three values for $x$, such as $-1$, $0$, and $1$, and compute the matching $y$-values."
>}}
{"answer": {"slope": 3, "intercept": -1, "plotPoints": 3}, "grid": {}}
{{< /graphplot >}}

{{< graphplot
  question="Graph the equation $y=2x$ by plotting points."
  answerDisplay="$y=2x$"
  ariaLabel="A blank coordinate grid from negative 7 to 7 on both axes."
  hint="Choose three values for $x$, such as $-1$, $0$, and $1$, and compute the matching $y$-values."
>}}
{"answer": {"slope": 2, "intercept": 0, "plotPoints": 3}, "grid": {}}
{{< /graphplot >}}

### Graph vertical and horizontal lines

{{< multiplechoice
  question="Which graph shows $x = 4$?"
  mode="graph"
  answerIndex="1"
  hint="The equation has no $y$, so every point on its graph has the same $x$-coordinate whatever its $y$-coordinate. Find the option whose points all share that $x$-coordinate."
>}}
{"ariaLabel":"A vertical line crossing the x-axis at negative 4.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"x":-4}]}
===OPT===
{"ariaLabel":"A vertical line crossing the x-axis at 4.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"x":4}]}
===OPT===
{"ariaLabel":"A horizontal line crossing the y-axis at 4.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"y":4}]}
{{< /multiplechoice >}}

{{< graphplot
  question="Graph the equation $y=-5$."
  answerDisplay="$y=-5$"
  ariaLabel="A blank coordinate grid from negative 7 to 7 on both axes."
  hint="The equation has no $x$: choose any three $x$-values and pair each with the $y$-value the equation fixes."
>}}
{"answer": {"y": -5, "plotPoints": 3}, "grid": {}}
{{< /graphplot >}}

### Find the $x$- and $y$-intercepts

{{< fillin
  question="Find the $x$- and $y$-intercepts of $x-y=5$. Enter the $x$-intercept first, then the $y$-intercept, separated by a comma."
  answer="(5,0),(0,-5)"
  answerForm="decimal"
  answerDisplay="$(5,0), (0,-5)$"
  hint="Let $y=0$ to find the $x$-intercept; let $x=0$ to find the $y$-intercept."
>}}

{{< fillin
  question="Find the $x$- and $y$-intercepts of $4x-y=8$. Enter the $x$-intercept first, then the $y$-intercept, separated by a comma."
  answer="(2,0),(0,-8)"
  answerForm="decimal"
  answerDisplay="$(2,0), (0,-8)$"
  hint="Let $y=0$ to find the $x$-intercept; let $x=0$ to find the $y$-intercept."
>}}

### Graph a line using the intercepts

{{< graphplot
  question="Graph $-x+4y=8$ using the intercepts."
  answerDisplay="$-x+4y=8$"
  ariaLabel="A blank coordinate grid from negative 14 to 14 on both axes."
  hint="Find the $x$-intercept by letting $y=0$ and the $y$-intercept by letting $x=0$, then draw the line through them."
>}}
{"answer": {"slope": 0.25, "intercept": 2, "plotPoints": 3}, "grid": {"xMin": -14, "xMax": 14, "yMin": -14, "yMax": 14}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $x+y=-3$ using the intercepts."
  answerDisplay="$x+y=-3$"
  ariaLabel="A blank coordinate grid from negative 7 to 7 on both axes."
  hint="Find the $x$-intercept by letting $y=0$ and the $y$-intercept by letting $x=0$, then draw the line through them."
>}}
{"answer": {"slope": -1, "intercept": -3, "plotPoints": 3}, "grid": {}}
{{< /graphplot >}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 3.1: Graph Linear Equations in Two Variables](https://openstax.org/books/intermediate-algebra-2e/pages/3-1-graph-linear-equations-in-two-variables) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated the coordinate-plane figures as accessible graphs and the solution tables as markdown tables, plotting the quadrant example's point $(0,-1)$ where the source figure shows $(-2,3)$; omitted the Be Prepared quiz, the illustration comparing two-point and three-point graphs, the four-graph intercept comparison and its table, the Key Concepts summary, the writing exercises, and the Self Check checklist; converted the practice problems (“Try Its”) into interactive exercises with instant feedback, posing each graphing Try It as a graph-it-yourself exercise (one per equation where a Try It pairs two), asking for the intercepts where a Try It asks only to find them, and recreating one Try It graph; and adapted selected end-of-section exercises into a section-final interactive practice block.</small>
