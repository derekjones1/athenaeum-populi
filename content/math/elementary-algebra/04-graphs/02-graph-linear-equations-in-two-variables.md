---
title: Graph Linear Equations in Two Variables
description: >-
  Recognizing that the graph of a linear equation is a straight line,
  graphing a linear equation by plotting points, choosing convenient values
  when the equation has a fraction coefficient, and graphing vertical and
  horizontal lines — adapted from OpenStax Elementary Algebra 2e, Section 4.2.
source_section: "4.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Recognize the relationship between the solutions of an equation and its graph
- Graph a linear equation by plotting points
- Graph vertical and horizontal lines
{{< /callout >}}

## Recognize the relationship between the solutions of an equation and its graph

In the previous section, we found several solutions to the equation
$3x + 2y = 6$. They are listed in the table below. So the ordered pairs
$(0, 3)$, $(2, 0)$, and $\left(1, \tfrac{3}{2}\right)$ are some solutions to
the equation $3x + 2y = 6$. We can plot these solutions in the rectangular
coordinate system, as shown below.

| $3x + 2y = 6$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $0$ | $3$ | $(0, 3)$ |
| $2$ | $0$ | $(2, 0)$ |
| $1$ | $\tfrac{3}{2}$ | $\left(1, \tfrac{3}{2}\right)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from −7 to 7 on both axes, numbered every 1 unit, with the three points (0, 3), (2, 0), and (1, 3/2) plotted. The points line up perfectly along a straight path.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"points":[{"at":[0,3],"label":"(0, 3)"},{"at":[1,1.5],"label":"(1, 3/2)"},{"at":[2,0],"label":"(2, 0)"}]}
{{< /apfigure >}}

Notice how the points line up perfectly? We connect the points with a line to
get the graph of the equation $3x + 2y = 6$, shown below. Notice the arrows
on the ends of the line — they indicate the line continues in both
directions.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from −7 to 7 on both axes, numbered every 1 unit, with the line 3x + 2y = 6 drawn through the three points (0, 3), (1, 3/2), and (2, 0), extending with arrows on both ends.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,3],[2,0]],"label":"3x + 2y = 6"}],"points":[{"at":[0,3]},{"at":[1,1.5]},{"at":[2,0]}]}
{{< /apfigure >}}

Every point on the line is a solution of the equation. Also, every solution
of this equation is a point on this line. Points *not* on the line are not
solutions.

Notice that the point $(-2, 6)$ is on the line shown below. If you substitute
$x = -2$ and $y = 6$ into the equation, you find that it is a solution to the
equation.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The line 3x + 2y = 6 on a coordinate grid from −7 to 7 on both axes, numbered every 1 unit, with two labeled points. The point (−2, 6) lies on the line. The point (4, 1) lies above the line, off it.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,3],[2,0]],"label":"3x + 2y = 6"}],"points":[{"at":[-2,6],"label":"(−2, 6)"},{"at":[4,1],"label":"(4, 1)"}]}
{{< /apfigure >}}

$$
\begin{aligned}
3x + 2y &= 6 \\
3(-2) + 2(6) &\stackrel{?}{=} 6 \\
-6 + 12 &\stackrel{?}{=} 6 \\
6 &= 6 \ \checkmark
\end{aligned}
$$

So the point $(-2, 6)$ is a solution to the equation $3x + 2y = 6$. What
about $(4, 1)$?

$$
\begin{aligned}
3x + 2y &= 6 \\
3(4) + 2(1) &\stackrel{?}{=} 6 \\
12 + 2 &\stackrel{?}{=} 6 \\
14 &\neq 6
\end{aligned}
$$

So $(4, 1)$ is *not* a solution to the equation $3x + 2y = 6$. Therefore, the
point $(4, 1)$ is not on the line. This is an example of the saying, "A
picture is worth a thousand words." The line shows you *all* the solutions
to the equation. Every point on the line is a solution of the equation, and
every solution of this equation is a point on this line. This line is called
the **graph** of the equation $3x + 2y = 6$.

{{< callout type="info" >}}
  **Graph of a linear equation.** The graph of a linear equation $Ax + By =
  C$ is a line.

  - Every point on the line is a solution of the equation.
  - Every solution of this equation is a point on this line.
{{< /callout >}}

**Example.** The graph of $y = 2x - 3$ is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from −7 to 7 on both axes, numbered every 1 unit, with the line y = 2x − 3 drawn, passing through (0, −3) and rising steeply to the upper right.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,-3],[3,3]],"label":"y = 2x − 3"}]}
{{< /apfigure >}}

For each ordered pair, decide: (a) is the ordered pair a solution to the
equation? (b) is the point on the line? We'll check $A(0, -3)$, $B(3, 3)$,
$C(2, -3)$, and $D(-1, -5)$.

(a) Substitute the $x$- and $y$-values into the equation $y = 2x - 3$ to
check whether each ordered pair is a solution.

$$
\begin{array}{lrcl}
A: (0, -3) & -3 &\stackrel{?}{=}& 2(0) - 3 \\[4pt]
& -3 &=& -3 \; \checkmark \\[4pt]
B: (3, 3) & 3 &\stackrel{?}{=}& 2(3) - 3 \\[4pt]
& 3 &=& 3 \; \checkmark \\[4pt]
C: (2, -3) & -3 &\stackrel{?}{=}& 2(2) - 3 \\[4pt]
& -3 &\neq& 1 \\[4pt]
D: (-1, -5) & -5 &\stackrel{?}{=}& 2(-1) - 3 \\[4pt]
& -5 &=& -5 \; \checkmark
\end{array}
$$

So $(0, -3)$, $(3, 3)$, and $(-1, -5)$ are solutions, while $(2, -3)$ is not
a solution.

(b) Plot the four points. The points $(0, -3)$, $(3, 3)$, and $(-1, -5)$
fall on the line $y = 2x - 3$, but $(2, -3)$ does not.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The line y = 2x − 3 on a coordinate grid from −7 to 7 on both axes, numbered every 1 unit, with four labeled points. The points (0, −3), (3, 3), and (−1, −5) lie on the line. The point (2, −3) lies below and to the right of the line, off it.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,-3],[3,3]],"label":"y = 2x − 3"}],"points":[{"at":[0,-3],"label":"(0, −3)"},{"at":[3,3],"label":"(3, 3)"},{"at":[2,-3],"label":"(2, −3)"},{"at":[-1,-5],"label":"(−1, −5)"}]}
{{< /apfigure >}}

The points that are solutions to $y = 2x - 3$ are on the line, and the point
that is not a solution is not on the line.

{{< multiplechoice
  question="For $y = 3x - 1$, consider the ordered pair $(2, 5)$. Is the ordered pair a solution to the equation, and is the point on the line?"
  answer="Yes; it is a solution and the point is on the line."
  hint="Substitute $x = 2$ and $y = 5$ into $y = 3x - 1$ and compare the two sides."
>}}
Yes; it is a solution and the point is on the line.
No; it is not a solution and the point is not on the line.
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y = 3x - 1$, consider the ordered pair $(3, -1)$. Is the ordered pair a solution to the equation, and is the point on the line?"
  answer="No; it is not a solution and the point is not on the line."
  hint="Substitute $x = 3$ and $y = -1$ into $y = 3x - 1$ and compare the two sides."
>}}
Yes; it is a solution and the point is on the line.
No; it is not a solution and the point is not on the line.
{{< /multiplechoice >}}

## Graph a linear equation by plotting points

There are several methods that can be used to graph a linear equation. The
method we used to graph $3x + 2y = 6$ is called **plotting points**, or the
Point-Plotting Method.

{{< callout type="info" >}}
  **How To: Graph an equation by plotting points.** Graph the equation
  $y = 2x + 1$ by plotting points.

  **Step 1. Find three points whose coordinates are solutions to the
  equation.** You can choose any values for $x$ or $y$. In this case, since
  $y$ is isolated on the left side of the equation, it is easier to choose
  values for $x$.

  $$
  \begin{aligned}
  x = 0&: & y &= 2(0) + 1 = 1 \\
  x = 1&: & y &= 2(1) + 1 = 3 \\
  x = -2&: & y &= 2(-2) + 1 = -3
  \end{aligned}
  $$

  **Organize the solutions in a table:**

  | $y = 2x + 1$ | | |
  | :---: | :---: | :---: |
  | $x$ | $y$ | $(x, y)$ |
  | $0$ | $1$ | $(0, 1)$ |
  | $1$ | $3$ | $(1, 3)$ |
  | $-2$ | $-3$ | $(-2, -3)$ |

  **Step 2. Plot the points in a rectangular coordinate system.** Check that
  the points line up. If they do not, carefully check your work.

  **Step 3. Draw the line through the three points.** Extend the line to
  fill the grid and put arrows on both ends of the line — this line is the
  graph of $y = 2x + 1$.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from −7 to 7 on both axes, numbered every 1 unit, showing the line y = 2x + 1, passing through the plotted points (−2, −3), (0, 1), and (1, 3).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"through":[[-2,-3],[1,3]]}],"points":[{"at":[-2,-3],"label":"(−2, −3)"},{"at":[0,1],"label":"(0, 1)"},{"at":[1,3],"label":"(1, 3)"}]}
{{< /apfigure >}}

It is true that it only takes two points to determine a line, but it is a
good habit to use three points. If you only plot two points and one of them
is incorrect, you can still draw a line, but it will be the wrong line. If
you use three points and one is incorrect, the points will not line up —
this tells you something is wrong and you need to check your work.

{{< graphplot
  question="Graph $y = -2x + 4$ by plotting points."
  answerDisplay="$y = -2x + 4$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Choose several $x$-values, compute $y = -2x + 4$, plot the ordered pairs, and draw the line through them."
>}}
{"answer":{"slope":-2,"intercept":4,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

When an equation includes a fraction as the coefficient of $x$, we can still
substitute any numbers for $x$. But the math is easier if we make "good"
choices for the values of $x$ — choosing multiples of the denominator avoids
fraction answers, which are hard to graph precisely.

**Example.** Graph the equation $y = \tfrac{1}{2}x + 3$.

Since this equation has the fraction $\tfrac{1}{2}$ as a coefficient of $x$,
we choose values of $x$ carefully. We use zero as one choice and multiples
of $2$ for the other choices, so that $\tfrac{1}{2}x$ comes out even each
time.

$$
\begin{aligned}
x = 0&: & y &= \tfrac{1}{2}(0) + 3 = 3 \\
x = 2&: & y &= \tfrac{1}{2}(2) + 3 = 4 \\
x = 4&: & y &= \tfrac{1}{2}(4) + 3 = 5
\end{aligned}
$$

| $y = \tfrac{1}{2}x + 3$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $0$ | $3$ | $(0, 3)$ |
| $2$ | $4$ | $(2, 4)$ |
| $4$ | $5$ | $(4, 5)$ |

Plotting the points, checking that they line up, and drawing the line gives
the graph of $y = \tfrac{1}{2}x + 3$.

{{< graphplot
  question="Graph $y = \tfrac{1}{3}x - 1$ by plotting points."
  answerDisplay="$y = \tfrac{1}{3}x - 1$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Choose $x$-values that are multiples of $3$ so $\tfrac{1}{3}x$ comes out even, compute $y$, plot the ordered pairs, and draw the line through them."
>}}
{"answer":{"slope":0.3333333333333333,"intercept":-1,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

So far, all the equations we graphed had $y$ given in terms of $x$. Now
we'll graph an equation with $x$ and $y$ on the same side, such as
$2x + y = 3$. If we let $y = 0$, then $2x = 3$ and $x = \tfrac{3}{2}$. The
point $\left(\tfrac{3}{2}, 0\right)$ has a fraction for its $x$-coordinate,
and while we could graph it, it is hard to be precise graphing fractions. If
we solve the equation $2x + y = 3$ for $y$, it will be easier to find three
solutions to the equation:

$$2x + y = 3 \qquad\Longrightarrow\qquad y = -2x + 3$$

The solutions for $x = 0$, $x = 1$, and $x = -1$ are shown below.

| $2x + y = 3$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $0$ | $3$ | $(0, 3)$ |
| $1$ | $1$ | $(1, 1)$ |
| $-1$ | $5$ | $(-1, 5)$ |

**Example.** Graph the equation $2x - 3y = 6$.

This equation is in standard form too, but unlike $2x + y = 3$ it is not that
easy to solve for $y$ in one step, so we leave the equation in standard form and find a
first point by letting $x = 0$, a second point by letting $y = 0$, and a
third point by choosing some other value.

$$
\begin{aligned}
x = 0&: & 2(0) - 3y &= 6, & y &= -2 \\
y = 0&: & 2x - 3(0) &= 6, & x &= 3
\end{aligned}
$$

We need a third point. We'll let $x = 6$:

$$
\begin{aligned}
2(6) - 3y &= 6 \\
12 - 3y &= 6 \\
-3y &= -6 \\
y &= 2
\end{aligned}
$$

| $2x - 3y = 6$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $0$ | $-2$ | $(0, -2)$ |
| $3$ | $0$ | $(3, 0)$ |
| $6$ | $2$ | $(6, 2)$ |

Plot the points, check that they line up, and draw the line. If you can
choose any three points to graph a line, how will you know if your graph
matches the one shown in the answer key? If the points where the graphs
cross the $x$- and $y$-axes are the same, the graphs match!

{{< graphplot
  question="Graph the equation $4x + 2y = 8$."
  answerDisplay="$4x + 2y = 8$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Let $x = 0$ to find one point and $y = 0$ to find another, then pick a third value of $x$ and solve for $y$."
>}}
{"answer":{"slope":-2,"intercept":4,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

## Graph vertical and horizontal lines

Can we graph an equation with only one variable — just $x$ and no $y$, or
just $y$ without an $x$? How will we make a table of values to get the
points to plot?

Let's consider the equation $x = -3$. This equation has only one variable,
$x$. The equation says that $x$ is *always* equal to $-3$, so its value does
not depend on $y$. To make a table of values, we write $-3$ in for all the
$x$-values, then choose any values for $y$ — we'll use $1$, $2$, and $3$.

| $x = -3$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $-3$ | $1$ | $(-3, 1)$ |
| $-3$ | $2$ | $(-3, 2)$ |
| $-3$ | $3$ | $(-3, 3)$ |

Plotting these points and connecting them with a straight line gives a
**vertical line**.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from −7 to 7 on both axes, numbered every 1 unit, with a vertical line at x = −3, passing through the points (−3, 1), (−3, 2), and (−3, 3).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"x":-3}],"points":[{"at":[-3,1],"label":"(−3, 1)"},{"at":[-3,2],"label":"(−3, 2)"},{"at":[-3,3],"label":"(−3, 3)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Vertical line.** A **vertical line** is the graph of an equation of the
  form $x = a$. The line passes through the $x$-axis at $(a, 0)$.
{{< /callout >}}

**Example.** Graph the equation $x = 2$.

The equation has only one variable, $x$, and $x$ is always equal to $2$. We
create a table where $x$ is always $2$, then put in any values for $y$. The
graph is a vertical line passing through the $x$-axis at $2$.

| $x = 2$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $2$ | $1$ | $(2, 1)$ |
| $2$ | $2$ | $(2, 2)$ |
| $2$ | $3$ | $(2, 3)$ |

{{< multiplechoice
  question="Which graph shows $x = 5$?"
  mode="graph"
  answerIndex="1"
  hint="Every point on the graph of $x = 5$ has first coordinate $5$. Pick a point on each line and read its $x$-coordinate."
>}}
{"ariaLabel":"A vertical line crossing the x-axis at negative 5.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"x":-5}]}
===OPT===
{"ariaLabel":"A vertical line crossing the x-axis at 5.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"x":5}]}
===OPT===
{"ariaLabel":"A horizontal line crossing the y-axis at 5.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"y":5}]}
{{< /multiplechoice >}}

{{< graphplot
  question="Graph the equation $x = -2$."
  answerDisplay="$x = -2$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Make a table: write $-2$ for $x$ in every row, choose any three values for $y$, and plot the ordered pairs."
>}}
{"answer":{"x":-2,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

What if the equation has $y$ but no $x$? Let's graph the equation $y = 4$.
This time the $y$-value is a constant, so in this equation $y$ does not
depend on $x$. Fill in $4$ for all the $y$'s in the table below and choose
any values for $x$ — we'll use $0$, $2$, and $4$.

| $y = 4$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $0$ | $4$ | $(0, 4)$ |
| $2$ | $4$ | $(2, 4)$ |
| $4$ | $4$ | $(4, 4)$ |

The graph is a **horizontal line** passing through the $y$-axis at $4$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from −7 to 7 on both axes, numbered every 1 unit, with a horizontal line at y = 4, passing through the points (0, 4), (2, 4), and (4, 4).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"y":4}],"points":[{"at":[0,4],"label":"(0, 4)"},{"at":[2,4],"label":"(2, 4)"},{"at":[4,4],"label":"(4, 4)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Horizontal line.** A **horizontal line** is the graph of an equation of
  the form $y = b$. The line passes through the $y$-axis at $(0, b)$.
{{< /callout >}}

**Example.** Graph the equation $y = -1$.

The equation $y = -1$ has only one variable, $y$. The value of $y$ is
constant. All the ordered pairs in its table have the same $y$-coordinate.
The graph is a horizontal line passing through the $y$-axis at $-1$.

| $y = -1$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $0$ | $-1$ | $(0, -1)$ |
| $3$ | $-1$ | $(3, -1)$ |
| $-3$ | $-1$ | $(-3, -1)$ |

{{< graphplot
  question="Graph the equation $y = -4$."
  answerDisplay="$y = -4$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Make a table: write $-4$ for $y$ in every row, choose any three values for $x$, and plot the ordered pairs."
>}}
{"answer":{"y":-4,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

{{< graphplot
  question="Graph the equation $y = 3$."
  answerDisplay="$y = 3$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Make a table: write $3$ for $y$ in every row, choose any three values for $x$, and plot the ordered pairs."
>}}
{"answer":{"y":3,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

The equations for vertical and horizontal lines look very similar to
equations like $y = 4x$. What is the difference between the equations
$y = 4x$ and $y = 4$?

The equation $y = 4x$ has both $x$ and $y$. The value of $y$ depends on the
value of $x$, so the $y$-coordinate changes according to the value of $x$.
The equation $y = 4$ has only one variable. The value of $y$ is constant —
the $y$-coordinate is always $4$. It does not depend on the value of $x$.

| $y = 4x$ | | | | $y = 4$ | | |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ | | $x$ | $y$ | $(x, y)$ |
| $0$ | $0$ | $(0, 0)$ | | $0$ | $4$ | $(0, 4)$ |
| $1$ | $4$ | $(1, 4)$ | | $1$ | $4$ | $(1, 4)$ |
| $2$ | $8$ | $(2, 8)$ | | $2$ | $4$ | $(2, 4)$ |

Graphing both equations in the same rectangular coordinate system shows the
difference clearly: $y = 4x$ gives a slanted line through the origin, while
$y = 4$ gives a horizontal line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two lines on the same coordinate grid, from −7 to 7 on both axes and numbered every 1 unit: y = 4x is a steep slanted line through the origin, and y = 4 is a horizontal line crossing the y-axis at 4.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":4,"intercept":0,"label":"y = 4x"},{"y":4,"label":"y = 4"}]}
{{< /apfigure >}}

{{< fillin
  question="Compare $y = -3x$ and $y = -3$. When $x = 2$, what is $y$ for the equation $y = -3x$?"
  answer="-6"
  answerForm="decimal"
  hint="Substitute the $x$-value into $y = -3x$ and multiply."
>}}

{{< fillin
  question="For the equation $y = -3$, what is $y$ when $x = 2$?"
  answer="-3"
  answerForm="decimal"
  hint="Make the table row for $x = 2$ the way the $y = 4$ table above was made."
>}}

## Key terms

- **graph of a linear equation** — the line consisting of all the points that are solutions of the equation $Ax + By = C$; every point on the line is a solution of the equation, and every solution of the equation is a point on the line.
- **plotting points (Point-Plotting Method)** — a method for graphing a linear equation by finding several ordered-pair solutions, plotting them, and drawing the line through them.
- **vertical line** — the graph of an equation of the form $x = a$; a straight up-and-down line that crosses the $x$-axis at $(a, 0)$.
- **horizontal line** — the graph of an equation of the form $y = b$; a straight side-to-side line that crosses the $y$-axis at $(0, b)$.

## Practice

### Recognize the relationship between the solutions of an equation and its graph

{{< multiplechoice
  question="For $y=x+2$, consider the ordered pair $(0,2)$. Is the ordered pair a solution to the equation, and is the point on the line?"
  answer="Yes; it is a solution and the point is on the line."
  hint="Substitute $x=0$ and $y=2$ into $y=x+2$ and compare the two sides."
>}}
Yes; it is a solution and the point is on the line.
No; it is not a solution and the point is not on the line.
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y=x+2$, consider the ordered pair $(1,2)$. Is the ordered pair a solution to the equation, and is the point on the line?"
  answer="No; it is not a solution and the point is not on the line."
  hint="Substitute $x=1$ and $y=2$ into $y=x+2$ and compare the two sides."
>}}
Yes; it is a solution and the point is on the line.
No; it is not a solution and the point is not on the line.
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y=x+2$, consider the ordered pair $(-1,1)$. Is the ordered pair a solution to the equation, and is the point on the line?"
  answer="Yes; it is a solution and the point is on the line."
  hint="Substitute $x=-1$ and $y=1$ into $y=x+2$ and compare the two sides."
>}}
No; it is not a solution and the point is not on the line.
Yes; it is a solution and the point is on the line.
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y=x+2$, consider the ordered pair $(-3,-1)$. Is the ordered pair a solution to the equation, and is the point on the line?"
  answer="Yes; it is a solution and the point is on the line."
  hint="Substitute $x=-3$ and $y=-1$ into $y=x+2$ and compare the two sides."
>}}
Yes; it is a solution and the point is on the line.
No; it is not a solution and the point is not on the line.
{{< /multiplechoice >}}

### Graph a linear equation by plotting points

{{< graphplot
  question="Graph $y=3x-1$ by plotting points."
  answerDisplay="$y=3x-1$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Choose several $x$-values, compute $y=3x-1$, plot the ordered pairs, and draw the line through them."
>}}
{"answer":{"slope":3,"intercept":-1,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $y=-2x+2$ by plotting points."
  answerDisplay="$y=-2x+2$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Choose several $x$-values, compute $y=-2x+2$, plot the ordered pairs, and draw the line through them."
>}}
{"answer":{"slope":-2,"intercept":2,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

### Graph vertical and horizontal lines

{{< graphplot
  question="Graph $x=4$."
  answerDisplay="$x=4$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Make a table: write $4$ for $x$ in every row, choose any three values for $y$, and plot the ordered pairs."
>}}
{"answer":{"x":4,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $y=-5$."
  answerDisplay="$y=-5$"
  ariaLabel="A blank coordinate grid from negative 12 to 12 on both axes."
  hint="Make a table: write $-5$ for $y$ in every row, choose any three values for $x$, and plot the ordered pairs."
>}}
{"answer":{"y":-5,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 4.2: Graph Linear Equations in Two Variables](https://openstax.org/books/elementary-algebra-2e/pages/4-2-graph-linear-equations-in-two-variables) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the coordinate-plane graphs (points, lines, vertical and horizontal lines, and the paired $y = 4x$ vs. $y = 4$ comparison) as accessible inline SVGs and the solution tables as markdown tables; condensed the worked examples, omitting the $y = -3x$ and $3x + y = -1$ examples, the graphs of the $2x + y = 3$, $2x - 3y = 6$, $x = 2$, and $y = -1$ examples, the figure contrasting three points that line up with three that do not, and the Key Concepts list, which repeats the How To steps; posed the $y = -3x$ and $y = -3$ example as two fill-ins; omitted the Be Prepared quiz, Self Check checklist, and unselected end-of-section exercises; converted the practice problems ("Try Its") into interactive exercises with instant feedback, the ordered-pair checks as categorical choices; and adapted selected end-of-section exercises into the section-final interactive Practice block.</small>
