---
title: Graph with Intercepts
description: >-
  Identifying the x- and y-intercepts of a line from a graph or an equation,
  and graphing a line using its intercepts — adapted from OpenStax Elementary
  Algebra 2e, Section 4.3.
source_section: "4.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Identify the $x$- and $y$-intercepts on a graph
- Find the $x$- and $y$-intercepts from an equation of a line
- Graph a line using the intercepts
{{< /callout >}}

## Identify the $x$- and $y$-intercepts on a graph

Every linear equation can be represented by a unique line that shows all the
solutions of the equation. We have seen that when graphing a line by
plotting points, you can use any three solutions. This means that two people
graphing the line might use different sets of three points.

At first glance, their two lines might not appear to be the same, since they
would have different points labeled. But if all the work was done
correctly, the lines should be exactly the same line. One way to recognize
that they are indeed the same line is to look at where the line crosses the
$x$-axis and the $y$-axis. These points are called the *intercepts* of the
line.

{{< callout type="info" >}}
  **Intercepts of a line.** The points where a line crosses the $x$-axis and
  the $y$-axis are called the **intercepts of a line**.
{{< /callout >}}

Let's look at the graphs of the lines in the figure below.

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 0.5rem; max-width: 30rem; margin: 0 auto">

{{< apfigure kind="graph" >}}
{"ariaLabel":"Line a, 2x + y = 6, crosses the y-axis at (0, 6) and the x-axis at (3, 0), on a grid with both axes numbered every 1 unit.","xMin":-2,"xMax":5,"yMin":-2,"yMax":7,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,6],[3,0]]}],"points":[{"at":[0,6],"label":"(0, 6)"},{"at":[3,0],"label":"(3, 0)"}],"texts":[{"at":[1.5,8.6],"text":"a) 2x + y = 6","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Line b, 3x − 4y = 12, crosses the y-axis at (0, −3) and the x-axis at (4, 0), on a grid with both axes numbered every 1 unit.","xMin":-2,"xMax":6,"yMin":-5,"yMax":3,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,-3],[4,0]]}],"points":[{"at":[0,-3],"label":"(0, −3)"},{"at":[4,0],"label":"(4, 0)"}],"texts":[{"at":[2,4.6],"text":"b) 3x − 4y = 12","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Line c, x − y = 5, crosses the y-axis at (0, −5) and the x-axis at (5, 0), on a grid with both axes numbered every 1 unit.","xMin":-2,"xMax":7,"yMin":-7,"yMax":2,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,-5],[5,0]]}],"points":[{"at":[0,-5],"label":"(0, −5)"},{"at":[5,0],"label":"(5, 0)"}],"texts":[{"at":[2.5,3.6],"text":"c) x − y = 5","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Line d, y = −2x, crosses both axes at the origin (0, 0), on a grid with both axes numbered every 1 unit.","xMin":-4,"xMax":4,"yMin":-5,"yMax":5,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"slope":-2,"intercept":0}],"points":[{"at":[0,0],"label":"(0, 0)"}],"texts":[{"at":[0,6.6],"text":"d) y = −2x","anchor":"middle"}]}
{{< /apfigure >}}

</div>

First, notice where each of these lines crosses the $x$-axis:

| Figure | The line crosses the $x$-axis at | Ordered pair of this point |
| :--- | :---: | :---: |
| (a) | $3$ | $(3, 0)$ |
| (b) | $4$ | $(4, 0)$ |
| (c) | $5$ | $(5, 0)$ |
| (d) | $0$ | $(0, 0)$ |

Do you see a pattern? For each row, the $y$-coordinate of the point where
the line crosses the $x$-axis is zero. The point where the line crosses the
$x$-axis has the form $(a, 0)$ and is called the **$x$-intercept of a
line**. The $x$-intercept occurs when $y$ is zero.

Now let's look at the points where these lines cross the $y$-axis:

| Figure | The line crosses the $y$-axis at | Ordered pair for this point |
| :--- | :---: | :---: |
| (a) | $6$ | $(0, 6)$ |
| (b) | $-3$ | $(0, -3)$ |
| (c) | $-5$ | $(0, -5)$ |
| (d) | $0$ | $(0, 0)$ |

What is the pattern here? In each row, the $x$-coordinate of the point where
the line crosses the $y$-axis is zero. The point where the line crosses the
$y$-axis has the form $(0, b)$ and is called the **$y$-intercept** of the
line. The $y$-intercept occurs when $x$ is zero.

{{< callout type="info" >}}
  **$x$-intercept and $y$-intercept of a line.** The $x$-intercept is the
  point $(a, 0)$ where the line crosses the $x$-axis. The $y$-intercept is
  the point $(0, b)$ where the line crosses the $y$-axis.

  - The $x$-intercept occurs when $y$ is zero.
  - The $y$-intercept occurs when $x$ is zero.
{{< /callout >}}

**Example.** Find the $x$- and $y$-intercepts on each graph.

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 0.5rem; max-width: 30rem; margin: 0 auto">

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel a: the line x + 2y = 4 crosses the x-axis at (4, 0) and the y-axis at (0, 2), on a grid with both axes numbered every 1 unit.","xMin":-2,"xMax":6,"yMin":-3,"yMax":4,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"through":[[4,0],[0,2]]}],"points":[{"at":[4,0],"label":"(4, 0)"},{"at":[0,2],"label":"(0, 2)"}],"texts":[{"at":[2,5.6],"text":"a)","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel b: the line 3x − y = 6 crosses the x-axis at (2, 0) and the y-axis at (0, −6), on a grid with both axes numbered every 1 unit.","xMin":-3,"xMax":5,"yMin":-9,"yMax":2,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"through":[[2,0],[0,-6]]}],"points":[{"at":[2,0],"label":"(2, 0)"},{"at":[0,-6],"label":"(0, −6)"}],"texts":[{"at":[1,3.6],"text":"b)","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel c: the line x + y = −5 crosses the x-axis at (−5, 0) and the y-axis at (0, −5), on a grid with both axes numbered every 1 unit.","xMin":-7,"xMax":2,"yMin":-7,"yMax":2,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"through":[[-5,0],[0,-5]]}],"points":[{"at":[-5,0],"label":"(−5, 0)"},{"at":[0,-5],"label":"(0, −5)"}],"texts":[{"at":[-2.5,3.6],"text":"c)","anchor":"middle"}]}
{{< /apfigure >}}

</div>

(a) The graph crosses the $x$-axis at the point $(4, 0)$. The $x$-intercept
is $(4, 0)$. The graph crosses the $y$-axis at the point $(0, 2)$. The
$y$-intercept is $(0, 2)$.

(b) The graph crosses the $x$-axis at the point $(2, 0)$. The $x$-intercept
is $(2, 0)$. The graph crosses the $y$-axis at the point $(0, -6)$. The
$y$-intercept is $(0, -6)$.

(c) The graph crosses the $x$-axis at the point $(-5, 0)$. The $x$-intercept
is $(-5, 0)$. The graph crosses the $y$-axis at the point $(0, -5)$. The
$y$-intercept is $(0, -5)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from −6 to 6, showing a line rising from lower left to upper right through the points (−4, −6) and (6, 4).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"through":[[-4,-6],[6,4]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the $x$-intercept of the line in the graph above. Give it as an ordered pair."
  answer="(2,0)"
  answerForm="decimal"
  hint="Find where the line crosses the $x$-axis; the $y$-coordinate there is $0$."
>}}

{{< fillin
  question="Find the $y$-intercept of the line in the graph above. Give it as an ordered pair."
  answer="(0,-2)"
  answerForm="decimal"
  hint="Find where the line crosses the $y$-axis; the $x$-coordinate there is $0$."
>}}

## Find the $x$- and $y$-intercepts from an equation of a line

Recognizing that the $x$-intercept occurs when $y$ is zero and that the
$y$-intercept occurs when $x$ is zero, gives us a method to find the
intercepts of a line from its equation. To find the $x$-intercept, let
$y = 0$ and solve for $x$. To find the $y$-intercept, let $x = 0$ and solve
for $y$.

{{< callout type="info" >}}
  **Find the $x$- and $y$-intercepts from the equation of a line.** Use the
  equation of the line. To find:

  - the $x$-intercept of the line, let $y = 0$ and solve for $x$.
  - the $y$-intercept of the line, let $x = 0$ and solve for $y$.
{{< /callout >}}

**Example.** Find the intercepts of $2x + y = 6$.

We will let $y = 0$ to find the $x$-intercept, and let $x = 0$ to find the
$y$-intercept. We fill in a table, which reminds us of what we need to find.

| $2x + y = 6$ | | |
| :---: | :---: | :--- |
| $x$ | $y$ | |
| | $0$ | $x$-intercept |
| $0$ | | $y$-intercept |

To find the $x$-intercept, let $y = 0$:

$$
\begin{aligned}
2x + y &= 6 \\
2x + 0 &= 6 \\
2x &= 6 \\
x &= 3
\end{aligned}
$$

The $x$-intercept is $(3, 0)$.

To find the $y$-intercept, let $x = 0$:

$$
\begin{aligned}
2x + y &= 6 \\
2(0) + y &= 6 \\
0 + y &= 6 \\
y &= 6
\end{aligned}
$$

The $y$-intercept is $(0, 6)$.

The intercepts are the points $(3, 0)$ and $(0, 6)$, as shown in the table
below.

| $2x + y = 6$ | |
| :---: | :---: |
| $x$ | $y$ |
| $3$ | $0$ |
| $0$ | $6$ |

{{< fillin
  question="Find the intercepts of the line: $3x + y = 12$. Give the x-intercept as an ordered pair."
  answer="(4,0)"
  answerForm="decimal"
  hint="Let $y = 0$ and solve for x."
>}}

{{< fillin
  question="Find the intercepts of the line: $3x + y = 12$. Give the y-intercept as an ordered pair."
  answer="(0,12)"
  answerForm="decimal"
  hint="Let $x = 0$ and solve for y."
>}}

{{< fillin
  question="Find the intercepts of the line: $x + 4y = 8$. Give the x-intercept as an ordered pair."
  answer="(8,0)"
  answerForm="decimal"
  hint="Let $y = 0$ and solve for x."
>}}

**Example.** Find the intercepts of $4x - 3y = 12$.

To find the $x$-intercept, let $y = 0$:

$$
\begin{aligned}
4x - 3y &= 12 \\
4x - 3(0) &= 12 \\
4x - 0 &= 12 \\
4x &= 12 \\
x &= 3
\end{aligned}
$$

The $x$-intercept is $(3, 0)$.

To find the $y$-intercept, let $x = 0$:

$$
\begin{aligned}
4x - 3y &= 12 \\
4(0) - 3y &= 12 \\
0 - 3y &= 12 \\
-3y &= 12 \\
y &= -4
\end{aligned}
$$

The $y$-intercept is $(0, -4)$.

The intercepts are the points $(3, 0)$ and $(0, -4)$.

{{< fillin
  question="Find the intercepts of the line: $3x - 4y = 12$. Give the x-intercept as an ordered pair."
  answer="(4,0)"
  answerForm="decimal"
  hint="Let $y = 0$ and solve for x."
>}}

{{< fillin
  question="Find the intercepts of the line: $3x - 4y = 12$. Give the y-intercept as an ordered pair."
  answer="(0,-3)"
  answerForm="decimal"
  hint="Let $x = 0$ and solve for y."
>}}

{{< fillin
  question="Find the intercepts of the line: $2x - 4y = 8$. Give the x-intercept as an ordered pair."
  answer="(4,0)"
  answerForm="decimal"
  hint="Let $y = 0$ and solve for x."
>}}

## Graph a line using the intercepts

To graph a linear equation by plotting points, you need to find three points
whose coordinates are solutions to the equation. You can use the $x$- and
$y$-intercepts as two of your three points. Find the intercepts, and then
find a third point to ensure accuracy. Make sure the points line up — then
draw the line. This method is often the quickest way to graph a line.

{{< callout type="info" >}}
  **Graph a linear equation using the intercepts.**

  1. Find the $x$- and $y$-intercepts of the line.
     - Let $y = 0$ and solve for $x$.
     - Let $x = 0$ and solve for $y$.
  2. Find a third solution to the equation.
  3. Plot the three points and check that they line up.
  4. Draw the line.
{{< /callout >}}

**Example.** Graph $-x + 2y = 6$ using the intercepts.

**Step 1. Find the $x$- and $y$-intercepts of the line.** Let $y = 0$ and
solve for $x$; let $x = 0$ and solve for $y$.

Find the $x$-intercept. Let $y = 0$:

$$
\begin{aligned}
-x + 2y &= 6 \\
-x + 2(0) &= 6 \\
-x &= 6 \\
x &= -6
\end{aligned}
$$

The $x$-intercept is $(-6, 0)$.

Find the $y$-intercept. Let $x = 0$:

$$
\begin{aligned}
-x + 2y &= 6 \\
-0 + 2y &= 6 \\
2y &= 6 \\
y &= 3
\end{aligned}
$$

The $y$-intercept is $(0, 3)$.

**Step 2. Find another solution to the equation.** We'll use $x = 2$:

$$
\begin{aligned}
-x + 2y &= 6 \\
-2 + 2y &= 6 \\
2y &= 8 \\
y &= 4
\end{aligned}
$$

A third point is $(2, 4)$.

**Step 3. Plot the three points. Check that the points line up.**

| $x$ | $y$ | $(x, y)$ |
| :---: | :---: | :---: |
| $-6$ | $0$ | $(-6, 0)$ |
| $0$ | $3$ | $(0, 3)$ |
| $2$ | $4$ | $(2, 4)$ |

**Step 4. Draw the line.**

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered every 1 unit from −7 to 7, showing the line −x + 2y = 6 through the points (−6, 0), (0, 3), and (2, 4).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"through":[[-6,0],[2,4]]}],"points":[{"at":[-6,0],"label":"(−6, 0)"},{"at":[0,3],"label":"(0, 3)"},{"at":[2,4],"label":"(2, 4)"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Which graph shows $x - 2y = 4$?"
  mode="graph"
  answerIndex="1"
  hint="Let $y = 0$ to find where the line should cross the $x$-axis, and let $x = 0$ to find where it should cross the $y$-axis, then match those crossings to each option."
>}}
{"ariaLabel":"A line falling from left to right, crossing the x-axis at −4 and the y-axis at −2.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":-0.5,"intercept":-2}],"points":[{"at":[-4,0]},{"at":[0,-2]}]}
===OPT===
{"ariaLabel":"A line rising from left to right, crossing the x-axis at 4 and the y-axis at −2.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":0.5,"intercept":-2}],"points":[{"at":[4,0]},{"at":[0,-2]}]}
===OPT===
{"ariaLabel":"A steeper line rising from left to right, crossing the x-axis at −2 and the y-axis at 4.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":2,"intercept":4}],"points":[{"at":[-2,0]},{"at":[0,4]}]}
{{< /multiplechoice >}}

**Example.** Graph $4x - 3y = 12$ using the intercepts.

Find the intercepts and a third point.

$x$-intercept, let $y = 0$: $4x - 3(0) = 12$, so $4x = 12$ and $x = 3$. The
$x$-intercept is $(3, 0)$.

$y$-intercept, let $x = 0$: $4(0) - 3y = 12$, so $-3y = 12$ and $y = -4$. The
$y$-intercept is $(0, -4)$.

Third point, let $y = 4$: $4x - 3(4) = 12$, so $4x - 12 = 12$, $4x = 24$, and
$x = 6$. A third point is $(6, 4)$.

We list the points in the table below and show the graph.

| $4x - 3y = 12$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $3$ | $0$ | $(3, 0)$ |
| $0$ | $-4$ | $(0, -4)$ |
| $6$ | $4$ | $(6, 4)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered every 1 unit from −7 to 7, showing the line 4x − 3y = 12 through the points (3, 0), (0, −4), and (6, 4).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,-4],[6,4]]}],"points":[{"at":[3,0],"label":"(3, 0)"},{"at":[0,-4],"label":"(0, −4)"},{"at":[6,4],"label":"(6, 4)"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $5x - 2y = 10$ using the intercepts."
  answerDisplay="$5x - 2y = 10$"
  ariaLabel="A blank coordinate grid from −12 to 12 on both axes."
  hint="Let $y = 0$ to find the $x$-intercept and let $x = 0$ to find the $y$-intercept, then draw the line through them."
>}}
{"answer":{"slope":2.5,"intercept":-5,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

**Example.** Graph $y = 5x$ using the intercepts.

$x$-intercept, let $y = 0$: $0 = 5x$, so $0 = x$. The $x$-intercept is
$(0, 0)$.

$y$-intercept, let $x = 0$: $y = 5 \cdot 0$, so $y = 0$. The $y$-intercept
is $(0, 0)$.

This line has only one intercept. It is the point $(0, 0)$.

To ensure accuracy we need to plot three points. Since the $x$- and
$y$-intercepts are the same point, we need *two* more points to graph the
line.

Let $x = 1$: $y = 5(1) = 5$. Let $x = -1$: $y = 5(-1) = -5$.

| $y = 5x$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $0$ | $0$ | $(0, 0)$ |
| $1$ | $5$ | $(1, 5)$ |
| $-1$ | $-5$ | $(-1, -5)$ |

Plot the three points, check that they line up, and draw the line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered every 1 unit from −7 to 7, showing the steep line y = 5x through the origin and the points (1, 5) and (−1, −5).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"slope":5,"intercept":0}],"points":[{"at":[0,0],"label":"(0, 0)"},{"at":[1,5],"label":"(1, 5)"},{"at":[-1,-5],"label":"(−1, −5)"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $y = 4x$ using the intercepts."
  answerDisplay="$y = 4x$"
  ariaLabel="A blank coordinate grid from −12 to 12 on both axes."
  hint="Let $y = 0$, then $x = 0$, to find the intercepts. If they are the same point, substitute two other values of $x$, such as $1$ and $-1$, to get more points."
>}}
{"answer":{"slope":4,"intercept":0,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

When an equation has both $x$ and $y$ on the same side, as in $Ax + By = C$,
finding the intercepts is often the fastest way to graph the line — but it's
not the only method. If $y$ is already isolated, plotting points directly is
usually quicker; if the equation has only one variable, its graph is a
vertical or horizontal line. Choosing the intercept method makes the most
sense when the equation is already written with both variables on one side,
since setting $x = 0$ or $y = 0$ in turn makes the arithmetic simple.

## Key terms

**intercepts of a line** — the points where a line crosses the $x$-axis and
the $y$-axis. **$x$-intercept** — the point $(a, 0)$ where a line crosses
the $x$-axis; it occurs when $y$ is zero. **$y$-intercept** — the point
$(0, b)$ where a line crosses the $y$-axis; it occurs when $x$ is zero.

## Practice

### Identify the $x$- and $y$-intercepts on a graph

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from −6 to 6, showing a line falling from upper left to lower right through the points (−3, 6) and (6, −3).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"through":[[-3,6],[6,-3]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the $x$- and $y$-intercepts of the line in the graph above. Enter the $x$-intercept first, followed by the $y$-intercept."
  answer="(3,0),(0,3)"
  answerForm="decimal"
  answerDisplay="$(3,0),\ (0,3)$"
  hint="Read where the line crosses each axis; the other coordinate is $0$ at an intercept."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from −6 to 6, showing a line rising from lower left to upper right through the points (−1, −6) and (6, 1).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"through":[[-1,-6],[6,1]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the $x$- and $y$-intercepts of the line in the graph above. Enter the $x$-intercept first, followed by the $y$-intercept."
  answer="(5,0),(0,-5)"
  answerForm="decimal"
  answerDisplay="$(5,0),\ (0,-5)$"
  hint="Read where the line crosses each axis; the other coordinate is $0$ at an intercept."
>}}

### Find the $x$- and $y$-intercepts from an equation of a line

{{< fillin
  question="Find the intercepts of $x + y = 4$. Enter the $x$-intercept first, followed by the $y$-intercept."
  answer="(4,0),(0,4)"
  answerForm="decimal"
  answerDisplay="$(4,0),\ (0,4)$"
  hint="Set $y = 0$ and solve for $x$, then set $x = 0$ and solve for $y$."
>}}

{{< fillin
  question="Find the intercepts of $x - y = -3$. Enter the $x$-intercept first, followed by the $y$-intercept."
  answer="(-3,0),(0,3)"
  answerForm="decimal"
  answerDisplay="$(-3,0),\ (0,3)$"
  hint="Set $y = 0$ and solve for $x$, then set $x = 0$ and solve for $y$."
>}}

### Graph a line using the intercepts

{{< graphplot
  question="Graph $-x + 5y = 10$ using the intercepts."
  answerDisplay="$-x + 5y = 10$"
  ariaLabel="A blank coordinate grid from −12 to 12 on both axes."
  hint="Let $y = 0$ to find the $x$-intercept and let $x = 0$ to find the $y$-intercept, then draw the line through them."
>}}
{"answer":{"slope":0.2,"intercept":2,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $3x - 2y = 6$ using the intercepts."
  answerDisplay="$3x - 2y = 6$"
  ariaLabel="A blank coordinate grid from −12 to 12 on both axes."
  hint="Let $y = 0$ to get the $x$-intercept and let $x = 0$ to get the $y$-intercept, then draw the line through them."
>}}
{"answer":{"slope":1.5,"intercept":-3,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}


---

<small>This section is adapted from [Elementary Algebra 2e, Section 4.3: Graph with Intercepts](https://openstax.org/books/elementary-algebra-2e/pages/4-3-graph-with-intercepts) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the labeled coordinate-grid figures and the Try It graph as accessible inline graphics and the intercept summaries as tables; summarized the Key Concepts strategy for choosing a graphing method in a closing paragraph; omitted the Be Prepared quiz, Self Check checklist, media links, and the remaining end-of-section exercises; adapted selected end-of-section exercises into the section-final interactive Practice block, including accessible recreations of two source graphs and graph-it-yourself exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback, asking for each intercept as its own ordered-pair question and posing one graphing Try It as a match-the-graph multiple-choice question.</small>
