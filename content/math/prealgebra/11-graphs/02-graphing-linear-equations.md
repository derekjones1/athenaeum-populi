---
title: Graphing Linear Equations
description: >-
  Recognizing the relationship between the solutions of an equation and its
  graph, graphing a linear equation by plotting points, and graphing vertical
  and horizontal lines — adapted from OpenStax Prealgebra 2e, Section 11.2.
source_section: "11.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Recognize the relation between the solutions of an equation and its graph
- Graph a linear equation by plotting points
- Graph vertical and horizontal lines
{{< /callout >}}

## Recognize the relation between the solutions of an equation and its graph

In Use the Rectangular Coordinate System, we found a few solutions to the
equation $3x + 2y = 6$. They are listed in the table below. So the ordered
pairs $(0, 3)$, $(2, 0)$, $\left(1, \tfrac{3}{2}\right)$, and $(4, -3)$ are
some solutions to the equation $3x + 2y = 6$. We can plot these solutions in
the rectangular coordinate system, as shown below.

| $x$ | $y$ | $(x, y)$ |
| :---: | :---: | :---: |
| $0$ | $3$ | $(0, 3)$ |
| $2$ | $0$ | $(2, 0)$ |
| $1$ | $\tfrac{3}{2}$ | $\left(1, \tfrac{3}{2}\right)$ |
| $4$ | $-3$ | $(4, -3)$ |

Notice how the points line up perfectly? We connect the points with a
straight line to get the graph of the equation $3x + 2y = 6$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Coordinate grid from −7 to 7 on the x-axis and −5 to 7 on the y-axis, numbered every 1 unit. The points (0, 3), (1, 1.5), (2, 0), and (4, −3) are plotted, and the line 3x + 2y = 6 is drawn through them with arrows on both ends.","xMin":-7,"xMax":7,"yMin":-5,"yMax":7,"tickLabels":true,"tickStep":1,"lines":[{"slope":-1.5,"intercept":3}],"points":[{"at":[0,3],"label":"(0, 3)"},{"at":[1,1.5],"label":"(1, 1.5)"},{"at":[2,0],"label":"(2, 0)"},{"at":[4,-3],"label":"(4, −3)"}]}
{{< /apfigure >}}

Every point on the line is a solution of the equation. Also, every solution
of this equation is a point on this line. Points not on the line are *not*
solutions!

Notice that the point $(-2, 6)$ is on the line. If you substitute $x = -2$
and $y = 6$ into the equation, you find that it is a solution to the
equation:

$$
\begin{aligned}
3x + 2y &= 6 \\
3(-2) + 2(6) &\stackrel{?}{=} 6 \\
-6 + 12 &\stackrel{?}{=} 6 \\
6 &= 6 \ \checkmark
\end{aligned}
$$

So $(-2, 6)$ is a solution to the equation. What about $(4, 1)$?

$$
\begin{aligned}
3x + 2y &= 6 \\
3 \cdot 4 + 2 \cdot 1 &\stackrel{?}{=} 6 \\
12 + 2 &\stackrel{?}{=} 6 \\
14 &\neq 6
\end{aligned}
$$

So $(4, 1)$ is not a solution to the equation $3x + 2y = 6$. Therefore the
point $(4, 1)$ is not on the line.

This is an example of the saying "a picture is worth a thousand words." The
line shows you all the solutions to the equation. Every point on the line
is a solution of the equation, and every solution of this equation is on
this line. This line is called the *graph* of the equation $3x + 2y = 6$.

{{< callout type="info" >}}
  **Graph of a linear equation.** The graph of a linear equation
  $Ax + By = C$ is a straight line.

  - Every point on the line is a solution of the equation.
  - Every solution of this equation is a point on this line.
{{< /callout >}}

**Example.** The graph of $y = 2x - 3$ is shown below. For each ordered
pair, decide (a) is the ordered pair a solution to the equation? (b) is the
point on the line? $(0, -3)$, $(3, 3)$, $(2, -3)$, $(-1, -5)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Coordinate grid from −7 to 7 on the x-axis and −7 to 5 on the y-axis, numbered every 1 unit, showing the line y = 2x − 3 through (0, −3), (3, 3), and (−1, −5). The point (2, −3) is plotted but is not on the line.","xMin":-7,"xMax":7,"yMin":-7,"yMax":5,"tickLabels":true,"tickStep":1,"lines":[{"slope":2,"intercept":-3}],"points":[{"at":[0,-3],"label":"(0, −3)"},{"at":[3,3],"label":"(3, 3)"},{"at":[-1,-5],"label":"(−1, −5)"},{"at":[2,-3],"label":"(2, −3)"}]}
{{< /apfigure >}}

Substitute the $x$- and $y$-values into the equation to check if each
ordered pair is a solution.

$$
\begin{aligned}
(0, -3)&: & -3 &\stackrel{?}{=} 2(0) - 3 & -3 &= -3\ \checkmark \\
(3, 3)&: & 3 &\stackrel{?}{=} 2(3) - 3 & 3 &= 3\ \checkmark \\
(2, -3)&: & -3 &\stackrel{?}{=} 2(2) - 3 & -3 &\neq 1 \\
(-1, -5)&: & -5 &\stackrel{?}{=} 2(-1) - 3 & -5 &= -5\ \checkmark
\end{aligned}
$$

So $(0, -3)$, $(3, 3)$, and $(-1, -5)$ are solutions to $y = 2x - 3$, but
$(2, -3)$ is not a solution. Plotting the points confirms it: $(0, -3)$,
$(3, 3)$, and $(-1, -5)$ are on the line, and $(2, -3)$ is not on the line.

{{< fillin
  question="To decide whether the ordered pair $(2, 2)$ is a solution to $y = 3x - 1$, find the $y$-value the equation gives when $x = 2$. Enter that $y$-value."
  answer="5"
  answerForm="decimal"
  hint="Substitute $x = 2$ into $y = 3x - 1$ and simplify. Then compare the result with the $y$-value in the ordered pair."
>}}

{{< fillin
  question="To decide whether the ordered pair $(3, -1)$ is a solution to $y = 3x - 1$, find the $y$-value the equation gives when $x = 3$. Enter that $y$-value."
  answer="8"
  answerForm="decimal"
  hint="Substitute $x = 3$ into $y = 3x - 1$ and simplify. Then compare the result with the $y$-value in the ordered pair."
>}}

## Graph a linear equation by plotting points

There are several methods that can be used to graph a linear equation. The
method we used to graph $3x + 2y = 6$ above is called **plotting points**,
or the **Point-Plotting Method**.

Let's graph the equation $y = 2x + 1$ by plotting points. We start by
finding three points that are solutions to the equation. We can choose any
value for $x$ or $y$, and then solve for the other variable. Since $y$ is
isolated on the left side of the equation, it is easier to choose values
for $x$. We will use $0$, $1$, and $-2$ for $x$ in this example. We
substitute each value of $x$ into the equation and solve for $y$.

$$
\begin{aligned}
x = -2&: & y &= 2(-2) + 1 = -3 & (-2, -3) \\
x = 0&: & y &= 2(0) + 1 = 1 & (0, 1) \\
x = 1&: & y &= 2(1) + 1 = 3 & (1, 3)
\end{aligned}
$$

We can organize the solutions in a table.

| $x$ | $y$ | $(x, y)$ |
| :---: | :---: | :---: |
| $0$ | $1$ | $(0, 1)$ |
| $1$ | $3$ | $(1, 3)$ |
| $-2$ | $-3$ | $(-2, -3)$ |

Now we plot the points on a rectangular coordinate system. Check that the
points line up — if they did not, it would mean we made a mistake and
should double-check our work. Draw the line through the three points,
extending it to fill the grid with arrows on both ends. The line is the
graph of $y = 2x + 1$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Coordinate grid from −7 to 7 on the x-axis and −5 to 5 on the y-axis, numbered every 1 unit. The line y = 2x + 1 passes through (−2, −3), (0, 1), and (1, 3), with arrows on both ends.","xMin":-7,"xMax":7,"yMin":-5,"yMax":5,"tickLabels":true,"tickStep":1,"lines":[{"slope":2,"intercept":1}],"points":[{"at":[-2,-3],"label":"(−2, −3)"},{"at":[0,1],"label":"(0, 1)"},{"at":[1,3],"label":"(1, 3)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Graph a linear equation by plotting points.**

  1. Find three points whose coordinates are solutions to the equation.
     Organize them in a table.
  2. Plot the points on a rectangular coordinate system. Check that the
     points line up. If they do not, carefully check your work.
  3. Draw the line through the points. Extend the line to fill the grid
     and put arrows on both ends of the line.
{{< /callout >}}

It only takes two points to determine a line, but it is a good habit to use
three points. If you plot only two points and one of them is incorrect, you
can still draw a line, but it will be the wrong line. If you use three
points and one is incorrect, the points will not line up. This tells you
something is wrong and you need to check your work.

**Example.** Graph the equation $y = -3x$.

Find three points that are solutions to the equation. It's easier to
choose values for $x$ and solve for $y$.

$$
\begin{aligned}
x = 0&: & y = -3(0) = 0 & \quad (0, 0) \\
x = 1&: & y = -3(1) = -3 & \quad (1, -3) \\
x = -2&: & y = -3(-2) = 6 & \quad (-2, 6)
\end{aligned}
$$

| $x$ | $y$ | $(x, y)$ |
| :---: | :---: | :---: |
| $0$ | $0$ | $(0, 0)$ |
| $1$ | $-3$ | $(1, -3)$ |
| $-2$ | $6$ | $(-2, 6)$ |

Plot the points, check that they line up, and draw the line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Coordinate grid from −7 to 7 on the x-axis and −5 to 7 on the y-axis, numbered every 1 unit. The line y = −3x slopes down from left to right through (−2, 6), (0, 0), and (1, −3), with arrows on both ends.","xMin":-7,"xMax":7,"yMin":-5,"yMax":7,"tickLabels":true,"tickStep":1,"lines":[{"slope":-3,"intercept":0}],"points":[{"at":[-2,6],"label":"(−2, 6)"},{"at":[0,0],"label":"(0, 0)"},{"at":[1,-3],"label":"(1, −3)"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph the line $y = -4x$ by placing three points on it."
  ariaLabel="A blank coordinate grid from −14 to 14 on both axes, with tick marks every 2 units."
  answerDisplay="$y = -4x$"
  hint="Make a table: choose three small values for $x$, substitute each into $y = -4x$, and plot the ordered pairs you get."
>}}
{"answer":{"slope":-4,"intercept":0,"plotPoints":3},"grid":{"xMin":-14,"xMax":14,"yMin":-14,"yMax":14}}
{{< /graphplot >}}

{{< graphplot
  question="Graph the line $y = x$ by placing three points on it."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$y = x$"
  hint="Make a table: choose three values for $x$, substitute each into $y = x$, and plot the ordered pairs you get."
>}}
{"answer":{"slope":1,"intercept":0,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

When an equation includes a fraction as the coefficient of $x$, we can
substitute any numbers for $x$. But the math is easier if we make "good"
choices for the values of $x$ — multiples of the denominator — so we avoid
fraction answers, which are hard to graph precisely.

**Example.** Graph the equation $y = \tfrac{1}{2}x + 3$.

Since this equation has the fraction $\tfrac{1}{2}$ as a coefficient of
$x$, we choose values of $x$ carefully. We use zero as one choice and
multiples of $2$ for the other choices.

$$
\begin{aligned}
x = 0&: & y = \tfrac{1}{2}(0) + 3 = 3 & \quad (0, 3) \\
x = 2&: & y = \tfrac{1}{2}(2) + 3 = 4 & \quad (2, 4) \\
x = 4&: & y = \tfrac{1}{2}(4) + 3 = 5 & \quad (4, 5)
\end{aligned}
$$

| $x$ | $y$ | $(x, y)$ |
| :---: | :---: | :---: |
| $0$ | $3$ | $(0, 3)$ |
| $2$ | $4$ | $(2, 4)$ |
| $4$ | $5$ | $(4, 5)$ |

Plot the points, check that they line up, and draw the line.

{{< graphplot
  question="Graph $y = \tfrac{1}{3}x - 1$ by placing three points on it."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$y = \tfrac{1}{3}x - 1$"
  hint="The coefficient of $x$ is a fraction with denominator $3$, so choose $0$ and multiples of $3$ for $x$ to avoid fraction answers."
>}}
{"answer":{"slope":0.3333333333333333,"intercept":-1,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $y = \tfrac{1}{4}x + 2$ by placing three points on it."
  ariaLabel="A blank coordinate grid from −14 to 14 on both axes, with tick marks every 2 units."
  answerDisplay="$y = \tfrac{1}{4}x + 2$"
  hint="Choose $x$-values that are multiples of $4$, such as $-4$, $0$, and $4$, to avoid fractions when you substitute into $y = \tfrac{1}{4}x + 2$."
>}}
{"answer":{"slope":0.25,"intercept":2,"plotPoints":3},"grid":{"xMin":-14,"xMax":14,"yMin":-14,"yMax":14}}
{{< /graphplot >}}

So far, all the equations we graphed had $y$ given in terms of $x$. Now
we'll graph an equation with $x$ and $y$ on the same side.

**Example.** Graph the equation $x + y = 5$.

Find three points that are solutions to the equation. Remember, you can
start with *any* value of $x$ or $y$.

$$
\begin{aligned}
x = 0&: & 0 + y = 5, \ y = 5 & \quad (0, 5) \\
x = 1&: & 1 + y = 5, \ y = 4 & \quad (1, 4) \\
x = 4&: & 4 + y = 5, \ y = 1 & \quad (4, 1)
\end{aligned}
$$

| $x$ | $y$ | $(x, y)$ |
| :---: | :---: | :---: |
| $0$ | $5$ | $(0, 5)$ |
| $1$ | $4$ | $(1, 4)$ |
| $4$ | $1$ | $(4, 1)$ |

Then plot the points, check that they line up, and draw the line.

{{< graphplot
  question="Graph $x + y = -2$ by placing three points on it."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$x + y = -2$"
  hint="Choose three values for $x$, substitute each into $x + y = -2$, and solve for $y$."
>}}
{"answer":{"slope":-1,"intercept":-2,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $x - y = 6$ by placing three points on it."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$x - y = 6$"
  hint="Choose three values for $x$, substitute each into $x - y = 6$, and solve for $y$ — or solve the equation for $y$ first."
>}}
{"answer":{"slope":1,"intercept":-6,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

In the previous example, the three points we found were easy to graph. But
this is not always the case. Let's see what happens with the equation
$2x + y = 3$. If $y$ is $0$, what is the value of $x$?

$$
\begin{aligned}
2x + y &= 3 \\
2x + 0 &= 3 \\
2x &= 3 \\
x &= \tfrac{3}{2}
\end{aligned}
$$

The solution is the point $\left(\tfrac{3}{2}, 0\right)$. This point has a
fraction for the $x$-coordinate. While we could graph this point, it is
hard to be precise graphing fractions. Remember, in the earlier example we
carefully chose values for $x$ so as not to graph fractions at all. If we
solve the equation $2x + y = 3$ for $y$, it will be easier to find three
solutions to the equation:

$$2x + y = 3 \qquad\Longrightarrow\qquad y = -2x + 3$$

Now we can choose values for $x$ that will give coordinates that are
integers. The solutions for $x = 0$, $x = 1$, and $x = -1$ are shown below.

| $x$ | $y$ | $(x, y)$ |
| :---: | :---: | :---: |
| $0$ | $3$ | $(0, 3)$ |
| $1$ | $1$ | $(1, 1)$ |
| $-1$ | $5$ | $(-1, 5)$ |

**Example.** Graph the equation $3x + y = -1$.

Find three points that are solutions to the equation. First, solve the
equation for $y$:

$$3x + y = -1 \qquad\Longrightarrow\qquad y = -3x - 1$$

We let $x$ be $0$, $1$, and $-1$ to find three points. The ordered pairs
are shown in the table. Plot the points, check that they line up, and draw
the line.

| $x$ | $y$ | $(x, y)$ |
| :---: | :---: | :---: |
| $0$ | $-1$ | $(0, -1)$ |
| $1$ | $-4$ | $(1, -4)$ |
| $-1$ | $2$ | $(-1, 2)$ |

If you can choose any three points to graph a line, how will you know if
your graph matches the one shown in the answers of a book? If the points
where the graphs cross the $x$- and $y$-axes are the same, the graphs
match.

{{< multiplechoice
  question="Which graph shows the equation $2x + y = 2$?"
  hint="Solve the equation for $y$, find the points where $x = 0$ and $x = 1$, and pick the graph that passes through both."
  mode="graph"
  answerIndex="0"
>}}
{"ariaLabel":"A line crossing the y-axis at (0, 2) and falling to the right, passing through (1, 0) and (2, −2).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"xTickStep":2,"yTickStep":2,"lines":[{"slope":-2,"intercept":2}]}
===OPT===
{"ariaLabel":"A line crossing the y-axis at (0, 2) and rising to the right, passing through (1, 4) and (−1, 0).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"xTickStep":2,"yTickStep":2,"lines":[{"slope":2,"intercept":2}]}
===OPT===
{"ariaLabel":"A line crossing the y-axis at (0, −2) and falling to the right, passing through (1, −4) and (−1, 0).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"xTickStep":2,"yTickStep":2,"lines":[{"slope":-2,"intercept":-2}]}
{{< /multiplechoice >}}

{{< graphplot
  question="Graph $4x + y = -3$ by placing three points on it."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$4x + y = -3$"
  hint="Solve the equation for $y$ first, as in the example above, then substitute three values for $x$."
>}}
{"answer":{"slope":-4,"intercept":-3,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

## Graph vertical and horizontal lines

Can we graph an equation with only one variable — just $x$ and no $y$, or
just $y$ without an $x$? How would we make a table of values to get the
points to plot?

Let's consider the equation $x = -3$. This equation says that $x$ is always
equal to $-3$, so its value does not depend on $y$. No matter what $y$ is,
the value of $x$ is always $-3$.

To make a table of solutions, we write $-3$ for all the $x$-values. Then
we choose any values for $y$. Since $x$ does not depend on $y$, we can
choose any numbers we like — to fit the size of our coordinate graph,
we'll use $1$, $2$, and $3$ for the $y$-coordinates.

| $x$ | $y$ | $(x, y)$ |
| :---: | :---: | :---: |
| $-3$ | $1$ | $(-3, 1)$ |
| $-3$ | $2$ | $(-3, 2)$ |
| $-3$ | $3$ | $(-3, 3)$ |

Then we plot the points and connect them with a straight line. The graph
is a **vertical line**.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Coordinate grid from −7 to 7 on the x-axis and −5 to 5 on the y-axis, numbered every 1 unit. A vertical line x = −3 passes through (−3, 1), (−3, 2), and (−3, 3), with arrows on both ends.","xMin":-7,"xMax":7,"yMin":-5,"yMax":5,"tickLabels":true,"tickStep":1,"lines":[{"x":-3,"label":"x = −3"}],"points":[{"at":[-3,1],"label":"(−3, 1)"},{"at":[-3,2],"label":"(−3, 2)"},{"at":[-3,3],"label":"(−3, 3)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Vertical line.** A vertical line is the graph of an equation that can
  be written in the form $x = a$. The line passes through the $x$-axis at
  $(a, 0)$.
{{< /callout >}}

**Example.** Graph the equation $x = 2$. What type of line does it form?

The equation has only one variable, $x$, and $x$ is always equal to $2$.
We make a table where $x$ is always $2$ and we put in any values for $y$.

| $x$ | $y$ | $(x, y)$ |
| :---: | :---: | :---: |
| $2$ | $1$ | $(2, 1)$ |
| $2$ | $2$ | $(2, 2)$ |
| $2$ | $3$ | $(2, 3)$ |

Plot the points and connect them. The graph is a vertical line passing
through the $x$-axis at $2$.

{{< graphplot
  question="Graph the equation $x = 5$ by placing three points on the line."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$x = 5$"
  hint="Make a table: the equation fixes the $x$-value of every point, so write that value in each row and choose any three values for $y$."
>}}
{"answer":{"x":5,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $x = -2$ by placing three points on the line."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$x = -2$"
  hint="Make a table: the equation fixes the $x$-value of every point, so write that value in each row and choose any three values for $y$."
>}}
{"answer":{"x":-2,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

What if the equation has $y$ but no $x$? Let's graph the equation $y = 4$.
This time the $y$-value is a constant, so in this equation $y$ does not
depend on $x$.

To make a table of solutions, we write $4$ for all the $y$-values and then
choose any values for $x$. We'll use $0$, $2$, and $4$ for the
$x$-values.

| $x$ | $y$ | $(x, y)$ |
| :---: | :---: | :---: |
| $0$ | $4$ | $(0, 4)$ |
| $2$ | $4$ | $(2, 4)$ |
| $4$ | $4$ | $(4, 4)$ |

Plot the points and connect them. This graph is a **horizontal line**
passing through the $y$-axis at $4$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Coordinate grid from −7 to 7 on the x-axis and −3 to 7 on the y-axis, numbered every 1 unit. A horizontal line y = 4 passes through (0, 4), (2, 4), and (4, 4), with arrows on both ends.","xMin":-7,"xMax":7,"yMin":-3,"yMax":7,"tickLabels":true,"tickStep":1,"lines":[{"y":4,"label":"y = 4","labelAt":0.875}],"points":[{"at":[0,4],"label":"(0, 4)"},{"at":[2,4],"label":"(2, 4)"},{"at":[4,4],"label":"(4, 4)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Horizontal line.** A horizontal line is the graph of an equation that
  can be written in the form $y = b$. The line passes through the $y$-axis
  at $(0, b)$.
{{< /callout >}}

**Example.** Graph the equation $y = -1$.

The equation has only one variable, $y$. The value of $y$ is constant. All
the ordered pairs in the table have the same $y$-coordinate, $-1$. We
choose $0$, $3$, and $-3$ as values for $x$.

| $x$ | $y$ | $(x, y)$ |
| :---: | :---: | :---: |
| $-3$ | $-1$ | $(-3, -1)$ |
| $0$ | $-1$ | $(0, -1)$ |
| $3$ | $-1$ | $(3, -1)$ |

The graph is a horizontal line passing through the $y$-axis at $-1$.

{{< graphplot
  question="Graph the line $y = -4$ by placing three points on it."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$y = -4$"
  hint="Make a table: the equation fixes the $y$-value of every point, so write that value in each row and choose any three values for $x$."
>}}
{"answer":{"y":-4,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $y = 3$ by placing three points on it."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$y = 3$"
  hint="Make a table: the equation fixes the $y$-value of every point, so write that value in each row and choose any three values for $x$."
>}}
{"answer":{"y":3,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

The equations for vertical and horizontal lines look very similar to
equations like $y = 4x$. What is the difference between the equations
$y = 4x$ and $y = 4$?

The equation $y = 4x$ has both $x$ and $y$. The value of $y$ depends on
the value of $x$ — the $y$-coordinate changes according to the value of
$x$.

The equation $y = 4$ has only one variable. The value of $y$ is constant.
The $y$-coordinate is always $4$. It does not depend on the value of $x$.

| $x$ | $y$ | $(x, y)$ |
| :---: | :---: | :---: |
| $0$ | $0$ | $(0, 0)$ |
| $1$ | $4$ | $(1, 4)$ |
| $2$ | $8$ | $(2, 8)$ |

| $x$ | $y$ | $(x, y)$ |
| :---: | :---: | :---: |
| $0$ | $4$ | $(0, 4)$ |
| $1$ | $4$ | $(1, 4)$ |
| $2$ | $4$ | $(2, 4)$ |

Notice that the equation $y = 4x$ gives a slanted line, whereas $y = 4$
gives a horizontal line.

**Example.** Graph $y = -3x$ and $y = -3$ in the same rectangular
coordinate system.

Find three solutions for each equation. Notice that the first equation has
the variable $x$, while the second does not.

| $x$ | $y = -3x$ | $(x, y)$ |
| :---: | :---: | :---: |
| $0$ | $0$ | $(0, 0)$ |
| $1$ | $-3$ | $(1, -3)$ |
| $2$ | $-6$ | $(2, -6)$ |

| $x$ | $y = -3$ | $(x, y)$ |
| :---: | :---: | :---: |
| $0$ | $-3$ | $(0, -3)$ |
| $1$ | $-3$ | $(1, -3)$ |
| $2$ | $-3$ | $(2, -3)$ |

Plotting both sets of points gives the slanted line $y = -3x$ and the
horizontal line $y = -3$.

{{< graphplot
  question="Graph $y = -4x$ and $y = -4$ in the same rectangular coordinate system."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$y = -4x$ and $y = -4$"
  hint="Make a table of solutions for each equation. The equation with no $x$ has the same $y$-value in every row."
>}}
{"answer":{"system":[{"slope":-4,"intercept":0},{"y":-4}]},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $y = 3$ and $y = 3x$ in the same rectangular coordinate system."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$y = 3$ and $y = 3x$"
  hint="Make a table of solutions for each equation. The equation with no $x$ has the same $y$-value in every row."
>}}
{"answer":{"system":[{"y":3},{"slope":3,"intercept":0}]},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

## Key terms

**graph of a linear equation** — the straight line consisting of all the
points that are solutions of the equation $Ax + By = C$; every point on the
line is a solution, and every solution is a point on the line. **plotting
points (Point-Plotting Method)** — a method of graphing a linear equation
by finding three solutions, organizing them in a table, plotting them, and
drawing the line through them. **vertical line** — the graph of an
equation of the form $x = a$; it passes through the $x$-axis at $(a, 0)$.
**horizontal line** — the graph of an equation of the form $y = b$; it
passes through the $y$-axis at $(0, b)$.

## Practice

### Recognize the relation between the solutions of an equation and its graph

The graph of $y = x + 2$ is shown below. For each ordered pair, decide
whether it is a solution to the equation and whether the point is on the
line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Coordinate grid from −8 to 8 on both axes, with tick labels every 2 units, showing the graph of y = x + 2: a straight line rising to the right.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"unit":16,"tickLabels":true,"tickStep":2,"lines":[{"slope":1,"intercept":2}]}
{{< /apfigure >}}

{{< multiplechoice
  question="For $y = x + 2$, is the ordered pair $(0, 2)$ a solution to the equation, and is the point on the line?"
  answer="yes"
  hint="Substitute $x = 0$ and $y = 2$ into $y = x + 2$. A pair that makes the equation true is a solution, and every solution is a point on the line."
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y = x + 2$, is the ordered pair $(1, 2)$ a solution to the equation, and is the point on the line?"
  answer="no"
  hint="Substitute $x = 1$ into $y = x + 2$ and compare the result with the $y$-value $2$ in the pair."
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y = x + 2$, is the ordered pair $(-1, 1)$ a solution to the equation, and is the point on the line?"
  answer="yes"
  hint="Substitute $x = -1$ and $y = 1$ and simplify the right side. If the two sides agree, the pair is a solution and the point lies on the line."
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y = x + 2$, is the ordered pair $(-3, 1)$ a solution to the equation, and is the point on the line?"
  answer="no"
  hint="Substitute $x = -3$ into $y = x + 2$ and compare the result with the $y$-value $1$ in the pair."
>}}
no
yes
{{< /multiplechoice >}}

The graph of $y = \tfrac{1}{2}x - 3$ is shown below. Again decide, for each
ordered pair, whether it is a solution and whether the point is on the line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Coordinate grid from −8 to 8 on both axes, with tick labels every 2 units, showing the graph of y = (1/2)x − 3: a straight line rising gently to the right.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"unit":16,"tickLabels":true,"tickStep":2,"lines":[{"slope":0.5,"intercept":-3}]}
{{< /apfigure >}}

{{< multiplechoice
  question="For $y = \tfrac{1}{2}x - 3$, is the ordered pair $(0, -3)$ a solution to the equation, and is the point on the line?"
  answer="yes"
  hint="Substitute $x = 0$ into $y = \tfrac{1}{2}x - 3$ and compare the result with the $y$-value $-3$ in the pair."
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y = \tfrac{1}{2}x - 3$, is the ordered pair $(2, -2)$ a solution to the equation, and is the point on the line?"
  answer="yes"
  hint="Substitute $x = 2$ into $y = \tfrac{1}{2}x - 3$ and compare the result with the $y$-value $-2$ in the pair."
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y = \tfrac{1}{2}x - 3$, is the ordered pair $(-2, -4)$ a solution to the equation, and is the point on the line?"
  answer="yes"
  hint="Substitute $x = -2$ into $y = \tfrac{1}{2}x - 3$ and compare the result with the $y$-value $-4$ in the pair."
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y = \tfrac{1}{2}x - 3$, is the ordered pair $(4, 1)$ a solution to the equation, and is the point on the line?"
  answer="no"
  hint="Substitute $x = 4$ into $y = \tfrac{1}{2}x - 3$ and compare the result with the $y$-value $1$ in the pair."
>}}
no
yes
{{< /multiplechoice >}}

### Graph a linear equation by plotting points

{{< graphplot
  question="Graph $y = 3x - 1$ by placing three points on the line."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$y = 3x - 1$"
  hint="Make a table: choose three values for $x$, substitute each into $y = 3x - 1$, and plot the ordered pairs you get."
>}}
{"answer":{"slope":3,"intercept":-1,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $y = \tfrac{1}{2}x + 2$ by placing three points on the line."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$y = \tfrac{1}{2}x + 2$"
  hint="The coefficient of $x$ is a fraction with denominator $2$, so choose $0$ and multiples of $2$ for $x$ to avoid fraction answers."
>}}
{"answer":{"slope":0.5,"intercept":2,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $x - y = 2$ by placing three points on the line."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$x - y = 2$"
  hint="Choose three values for $x$, substitute each into $x - y = 2$, and solve for $y$ — or solve the equation for $y$ first."
>}}
{"answer":{"slope":1,"intercept":-2,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $x + y = 6$ by placing three points on the line."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$x + y = 6$"
  hint="Choose three values for $x$, substitute each into $x + y = 6$, and solve for $y$."
>}}
{"answer":{"slope":-1,"intercept":6,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

### Graph vertical and horizontal lines

{{< graphplot
  question="Graph $x = 4$ by placing three points on the line."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$x = 4$"
  hint="Make a table: the equation fixes the $x$-value of every point, so write that value in each row and choose any three values for $y$."
>}}
{"answer":{"x":4,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $y = -5$ by placing three points on the line."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$y = -5$"
  hint="Make a table: the equation fixes the $y$-value of every point, so write that value in each row and choose any three values for $x$."
>}}
{"answer":{"y":-5,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $y = 2x$ and $y = 2$ in the same rectangular coordinate system."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes, with tick marks every 2 units."
  answerDisplay="$y = 2x$ and $y = 2$"
  hint="Make a table of solutions for each equation. The equation with no $x$ has the same $y$-value in every row."
>}}
{"answer":{"system":[{"slope":2,"intercept":0},{"y":2}]},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

---

<small>This section is adapted from [Prealgebra 2e, Section 11.2: Graphing Linear Equations](https://openstax.org/books/prealgebra-2e/pages/11-2-graphing-linear-equations) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated eight of the coordinate-grid graphs as accessible inline graphics and set the substitution checks and solution steps as displayed equations and markdown tables, omitting the other example graphs (their tables list the points) and the figure contrasting three lined-up points with three that are not; omitted the Be Prepared quiz, Media links, Key Concepts summary (its boxes appear in the body), Everyday Math, Writing Exercises, and Self Check; converted the practice problems ("Try Its") into interactive exercises with instant feedback — the "is the ordered pair a solution" Try It as two fill-ins asking for the y-value the equation gives at a pair's x-value, the 2x + y = 2 Try It as a "which graph" recognition question, and the other "graph the equation" Try Its as graph-production exercises; and adapted selected end-of-section exercises into the interactive Practice block, restating the multipart "is the ordered pair a solution / is the point on the line" items as one graded question per ordered pair.</small>
