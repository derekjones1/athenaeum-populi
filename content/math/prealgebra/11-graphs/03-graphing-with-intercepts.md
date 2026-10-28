---
title: Graphing with Intercepts
description: >-
  Identifying the x- and y-intercepts of a line from a graph or an equation,
  graphing a line using its intercepts, and choosing the most convenient
  method to graph a linear equation — adapted from OpenStax Prealgebra 2e,
  Section 11.3.
source_section: "11.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Identify the intercepts on a graph
- Find the intercepts from an equation of a line
- Graph a line using the intercepts
- Choose the most convenient method to graph a line
{{< /callout >}}

## Identify the intercepts on a graph

Every linear equation has a unique line that represents all the solutions of
the equation. When graphing a line by plotting points, each person who
graphs the line can choose any three points, so two people graphing the line
might use different sets of points.

At first glance, their two lines might appear different since they would
have different points labeled. But if all the work was done correctly, the
lines will be exactly the same line. One way to recognize that they are
indeed the same line is to focus on where the line crosses the axes. Each of
these points is called an **intercept of the line**.

{{< callout type="info" >}}
  **Intercepts of a line.** Each of the points at which a line crosses the
  $x$-axis and the $y$-axis is called an intercept of the line.
{{< /callout >}}

Let's look at the graphs of four lines and see where each one crosses the
axes.

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 0.5rem; max-width: 30rem; margin: 0 auto">

{{< apfigure kind="graph" >}}
{"ariaLabel":"Line a, 2x + y = 6, crosses the y-axis at (0, 6) and the x-axis at (3, 0), on a grid with both axes numbered every 1 unit.","xMin":-2,"xMax":5,"yMin":-2,"yMax":7,"unit":18,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,6],[3,0]]}],"points":[{"at":[0,6],"label":"(0, 6)"},{"at":[3,0],"label":"(3, 0)"}],"texts":[{"at":[1.5,8.6],"text":"a) 2x + y = 6","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Line b, 3x − 4y = 12, crosses the x-axis at (4, 0) and the y-axis at (0, −3), on a grid with both axes numbered every 1 unit.","xMin":-2,"xMax":6,"yMin":-5,"yMax":3,"unit":18,"tickLabels":true,"tickStep":1,"lines":[{"through":[[4,0],[0,-3]]}],"points":[{"at":[4,0],"label":"(4, 0)"},{"at":[0,-3],"label":"(0, −3)"}],"texts":[{"at":[2,4.6],"text":"b) 3x − 4y = 12","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Line c, x − y = 5, crosses the x-axis at (5, 0) and the y-axis at (0, −5), on a grid with both axes numbered every 1 unit.","xMin":-2,"xMax":7,"yMin":-7,"yMax":2,"unit":18,"tickLabels":true,"tickStep":1,"lines":[{"through":[[5,0],[0,-5]]}],"points":[{"at":[5,0],"label":"(5, 0)"},{"at":[0,-5],"label":"(0, −5)"}],"texts":[{"at":[2.5,3.6],"text":"c) x − y = 5","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Line d, y = −2x, crosses both axes at the origin (0, 0), on a grid with both axes numbered every 1 unit.","xMin":-4,"xMax":4,"yMin":-5,"yMax":5,"unit":18,"tickLabels":true,"tickStep":1,"lines":[{"slope":-2,"intercept":0}],"points":[{"at":[0,0],"label":"(0, 0)"}],"texts":[{"at":[0,6.6],"text":"d) y = −2x","anchor":"middle"}]}
{{< /apfigure >}}

</div>

First, notice where each of these lines crosses the $x$-axis:

| Line | Crosses the $x$-axis at | Ordered pair of this point |
| :--- | :---: | :---: |
| a | $3$ | $(3, 0)$ |
| b | $4$ | $(4, 0)$ |
| c | $5$ | $(5, 0)$ |
| d | $0$ | $(0, 0)$ |

Do you see a pattern? For each row, the $y$-coordinate of the point where
the line crosses the $x$-axis is zero. The point where the line crosses the
$x$-axis has the form $(a, 0)$ and is called the **$x$-intercept** of the
line. The $x$-intercept occurs when $y$ is zero.

Now let's look at the points where these lines cross the $y$-axis:

| Line | Crosses the $y$-axis at | Ordered pair of this point |
| :--- | :---: | :---: |
| a | $6$ | $(0, 6)$ |
| b | $-3$ | $(0, -3)$ |
| c | $-5$ | $(0, -5)$ |
| d | $0$ | $(0, 0)$ |

{{< callout type="info" >}}
  **$x$-intercept and $y$-intercept of a line.** The $x$-intercept is the
  point $(a, 0)$ where the graph crosses the $x$-axis. The $x$-intercept
  occurs when $y$ is zero. The $y$-intercept is the point $(0, b)$ where the
  graph crosses the $y$-axis. The $y$-intercept occurs when $x$ is zero.
{{< /callout >}}

**Example.** Find the $x$- and $y$-intercepts of each line.

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 0.5rem; max-width: 30rem; margin: 0 auto">

{{< apfigure kind="graph" >}}
{"ariaLabel":"Line a, x + 2y = 4, crosses the x-axis at (4, 0) and the y-axis at (0, 2), on a grid with both axes numbered every 1 unit.","xMin":-2,"xMax":6,"yMin":-3,"yMax":4,"unit":18,"tickLabels":true,"tickStep":1,"lines":[{"through":[[4,0],[0,2]]}],"points":[{"at":[4,0],"label":"(4, 0)"},{"at":[0,2],"label":"(0, 2)"}],"texts":[{"at":[2,5.6],"text":"a) x + 2y = 4","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Line b, 3x − y = 6, crosses the x-axis at (2, 0) and the y-axis at (0, −6), on a grid with both axes numbered every 1 unit.","xMin":-3,"xMax":5,"yMin":-9,"yMax":2,"unit":18,"tickLabels":true,"tickStep":1,"lines":[{"through":[[2,0],[0,-6]]}],"points":[{"at":[2,0],"label":"(2, 0)"},{"at":[0,-6],"label":"(0, −6)"}],"texts":[{"at":[1,3.6],"text":"b) 3x − y = 6","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Line c, x + y = −5, crosses the x-axis at (−5, 0) and the y-axis at (0, −5), on a grid with both axes numbered every 1 unit.","xMin":-7,"xMax":2,"yMin":-7,"yMax":2,"unit":18,"tickLabels":true,"tickStep":1,"lines":[{"through":[[-5,0],[0,-5]]}],"points":[{"at":[-5,0],"label":"(−5, 0)"},{"at":[0,-5],"label":"(0, −5)"}],"texts":[{"at":[-2.5,3.6],"text":"c) x + y = −5","anchor":"middle"}]}
{{< /apfigure >}}

</div>

(a) The graph crosses the $x$-axis at the point $(4, 0)$, so the
$x$-intercept is $(4, 0)$. The graph crosses the $y$-axis at the point
$(0, 2)$, so the $y$-intercept is $(0, 2)$.

(b) The graph crosses the $x$-axis at the point $(2, 0)$, so the
$x$-intercept is $(2, 0)$. The graph crosses the $y$-axis at the point
$(0, -6)$, so the $y$-intercept is $(0, -6)$.

(c) The graph crosses the $x$-axis at the point $(-5, 0)$, so the
$x$-intercept is $(-5, 0)$. The graph crosses the $y$-axis at the point
$(0, -5)$, so the $y$-intercept is $(0, -5)$.

The graph of $x - y = 2$:

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from negative 10 to 10, showing a line rising from lower left to upper right through the points (−6, −8) and (8, 6).","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"lines":[{"through":[[-6,-8],[8,6]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the $x$-intercept of the graph of $x - y = 2$ shown above. Give it as an ordered pair."
  answer="(2,0)" answerForm="decimal"
  hint="The $x$-intercept is the point where the graph crosses the $x$-axis — the $y$-coordinate there is $0$."
>}}

{{< fillin
  question="Find the $y$-intercept of the graph of $x - y = 2$ shown above. Give it as an ordered pair."
  answer="(0,-2)" answerForm="decimal"
  hint="The $y$-intercept is the point where the graph crosses the $y$-axis — the $x$-coordinate there is $0$."
>}}

The graph of $2x + 3y = 6$:

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from negative 10 to 10, showing a line falling from upper left to lower right through the points (−6, 6) and (9, −4).","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"lines":[{"through":[[-6,6],[9,-4]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the $x$-intercept of the graph of $2x + 3y = 6$ shown above. Give it as an ordered pair."
  answer="(3,0)" answerForm="decimal"
  hint="Look for the point on the line whose $y$-coordinate is $0$."
>}}

## Find the intercepts from an equation of a line

Recognizing that the $x$-intercept occurs when $y$ is zero and that the
$y$-intercept occurs when $x$ is zero gives us a method to find the
intercepts of a line from its equation. To find the $x$-intercept, let
$y = 0$ and solve for $x$. To find the $y$-intercept, let $x = 0$ and solve
for $y$.

{{< callout type="info" >}}
  **Find the $x$- and $y$-intercepts from the equation of a line.** Use the
  equation to find:

  - the $x$-intercept of the line, let $y = 0$ and solve for $x$.
  - the $y$-intercept of the line, let $x = 0$ and solve for $y$.
{{< /callout >}}

**Example.** Find the intercepts of $2x + y = 6$.

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

The intercepts are the points $(3, 0)$ and $(0, 6)$.

{{< fillin
  question="Find the intercepts of the line: $3x + y = 12$. Give the $x$-intercept as an ordered pair."
  answer="(4,0)" answerForm="decimal"
  hint="Let $y = 0$ and solve for $x$."
>}}

{{< fillin
  question="Find the intercepts of the line: $3x + y = 12$. Give the $y$-intercept as an ordered pair."
  answer="(0,12)" answerForm="decimal"
  hint="Let $x = 0$ and solve for $y$."
>}}

{{< fillin
  question="Find the intercepts of the line: $x + 4y = 8$. Give the $x$-intercept as an ordered pair."
  answer="(8,0)" answerForm="decimal"
  hint="Let $y = 0$ and solve for $x$."
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
  question="Find the intercepts of the line: $3x - 4y = 12$. Give the $x$-intercept as an ordered pair."
  answer="(4,0)" answerForm="decimal"
  hint="Let $y = 0$ and solve for $x$."
>}}

{{< fillin
  question="Find the intercepts of the line: $3x - 4y = 12$. Give the $y$-intercept as an ordered pair."
  answer="(0,-3)" answerForm="decimal"
  hint="Let $x = 0$ and solve for $y$."
>}}

{{< fillin
  question="Find the intercepts of the line: $2x - 4y = 8$. Give the $x$-intercept as an ordered pair."
  answer="(4,0)" answerForm="decimal"
  hint="Let $y = 0$ and solve for $x$."
>}}

## Graph a line using the intercepts

To graph a linear equation by plotting points, you can use the intercepts as
two of your three points. Find the two intercepts, and then a third point to
ensure accuracy, and draw the line. This method is often the quickest way to
graph a line.

{{< callout type="info" >}}
  **Graph a line using the intercepts.**

  1. Find the $x$- and $y$-intercepts of the line.
     - Let $y = 0$ and solve for $x$.
     - Let $x = 0$ and solve for $y$.
  2. Find a third solution to the equation.
  3. Plot the three points and then check that they line up.
  4. Draw the line.
{{< /callout >}}

**Example.** Graph $-x + 2y = 6$ using intercepts.

First, find the $x$-intercept. Let $y = 0$:

$$
\begin{aligned}
-x + 2y &= 6 \\
-x + 2(0) &= 6 \\
-x &= 6 \\
x &= -6
\end{aligned}
$$

The $x$-intercept is $(-6, 0)$.

Now find the $y$-intercept. Let $x = 0$:

$$
\begin{aligned}
-x + 2y &= 6 \\
-0 + 2y &= 6 \\
2y &= 6 \\
y &= 3
\end{aligned}
$$

The $y$-intercept is $(0, 3)$.

Find a third point. We'll use $x = 2$:

$$
\begin{aligned}
-x + 2y &= 6 \\
-2 + 2y &= 6 \\
2y &= 8 \\
y &= 4
\end{aligned}
$$

A third solution to the equation is $(2, 4)$.

Summarize the three points in a table:

| $-x + 2y = 6$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $-6$ | $0$ | $(-6, 0)$ |
| $0$ | $3$ | $(0, 3)$ |
| $2$ | $4$ | $(2, 4)$ |

Plot the three points, check that they line up, and draw the line:

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered every 1 unit from −7 to 7, showing the line −x + 2y = 6 through the points (−6, 0), (0, 3), and (2, 4).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":18,"tickLabels":true,"tickStep":1,"lines":[{"through":[[-6,0],[2,4]]}],"points":[{"at":[-6,0],"label":"(−6, 0)"},{"at":[0,3],"label":"(0, 3)"},{"at":[2,4],"label":"(2, 4)"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph the line $x - 2y = 4$ using its intercepts."
  ariaLabel="A blank coordinate grid from negative 7 to 7 on both axes."
  answerDisplay="$x - 2y = 4$"
  hint="Let $y = 0$ to find the $x$-intercept and $x = 0$ to find the $y$-intercept, then choose another value of $x$ to find a third point as a check."
>}}
{"answer":{"slope":0.5,"intercept":-2,"plotPoints":3},"grid":{}}
{{< /graphplot >}}

**Example.** Graph $4x - 3y = 12$ using intercepts.

Find the intercepts and a third point.

To find the $x$-intercept, let $y = 0$: $4x - 3(0) = 12$, so $4x = 12$ and
$x = 3$. The $x$-intercept is $(3, 0)$.

To find the $y$-intercept, let $x = 0$: $4(0) - 3y = 12$, so $-3y = 12$ and
$y = -4$. The $y$-intercept is $(0, -4)$.

For a third point, let $y = 4$: $4x - 3(4) = 12$, so $4x - 12 = 12$,
$4x = 24$, and $x = 6$. A third solution is $(6, 4)$.

| $4x - 3y = 12$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $3$ | $0$ | $(3, 0)$ |
| $0$ | $-4$ | $(0, -4)$ |
| $6$ | $4$ | $(6, 4)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered every 1 unit from −7 to 7, showing the line 4x − 3y = 12 through the points (3, 0), (0, −4), and (6, 4).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":18,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,-4],[6,4]]}],"points":[{"at":[3,0],"label":"(3, 0)"},{"at":[0,-4],"label":"(0, −4)"},{"at":[6,4],"label":"(6, 4)"}]}
{{< /apfigure >}}

{{< fillin
  question="Graph the line using the intercepts: $5x - 2y = 10$. What is the $x$-intercept? Give it as an ordered pair."
  answer="(2,0)" answerForm="decimal"
  hint="Let $y = 0$ and solve for $x$."
>}}

{{< fillin
  question="Graph the line using the intercepts: $5x - 2y = 10$. What is the $y$-intercept? Give it as an ordered pair."
  answer="(0,-5)" answerForm="decimal"
  hint="Let $x = 0$ and solve for $y$."
>}}

{{< multiplechoice
  question="Which graph shows $5x - 2y = 10$?"
  mode="graph"
  answerIndex="1"
  hint="Use the two intercepts you just found: the correct graph crosses each axis exactly where they say."
>}}
{"ariaLabel":"A line marked at (−2, 0) and (0, −5) that falls steeply from left to right.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":-2.5,"intercept":-5}],"points":[{"at":[-2,0]},{"at":[0,-5]}]}
===OPT===
{"ariaLabel":"A line marked at (2, 0) and (0, −5) that rises steeply from left to right.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":2.5,"intercept":-5}],"points":[{"at":[2,0]},{"at":[0,-5]}]}
===OPT===
{"ariaLabel":"A line marked at (−5, 0) and (0, 2) that rises gently from left to right.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":0.4,"intercept":2}],"points":[{"at":[-5,0]},{"at":[0,2]}]}
{{< /multiplechoice >}}

**Example.** Graph $y = 5x$ using the intercepts.

To find the $x$-intercept, let $y = 0$: $0 = 5x$, so $x = 0$. The
$x$-intercept is $(0, 0)$.

To find the $y$-intercept, let $x = 0$: $y = 5(0)$, so $y = 0$. The
$y$-intercept is $(0, 0)$.

This line has only one intercept! It is the point $(0, 0)$ — the origin.

To ensure accuracy, we still need to plot three points. Since the
$x$-intercept and $y$-intercept are the same point, we need two more points
to graph the line. As always, we can choose any values for $x$, so let's use
$x = 1$ and $x = -1$:

$$y = 5(1) = 5 \qquad\qquad y = 5(-1) = -5$$

| $y = 5x$ | | |
| :---: | :---: | :---: |
| $x$ | $y$ | $(x, y)$ |
| $0$ | $0$ | $(0, 0)$ |
| $1$ | $5$ | $(1, 5)$ |
| $-1$ | $-5$ | $(-1, -5)$ |

Plot the three points, check that they line up, and draw the line:

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered every 1 unit from −7 to 7, showing the line y = 5x through the origin (0, 0) and the points (1, 5) and (−1, −5).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":18,"tickLabels":true,"tickStep":1,"lines":[{"slope":5,"intercept":0}],"points":[{"at":[0,0],"label":"(0, 0)"},{"at":[1,5],"label":"(1, 5)"},{"at":[-1,-5],"label":"(−1, −5)"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph the line $y = 4x$ using its intercepts."
  ariaLabel="A blank coordinate grid from −14 to 14 on both axes."
  answerDisplay="$y = 4x$"
  hint="Find both intercepts first. If they are the same point, choose two other values of $x$, such as $1$ and $-1$, to get more points."
>}}
{"answer":{"slope":4,"intercept":0,"plotPoints":3},"grid":{"xMin":-14,"xMax":14,"yMin":-14,"yMax":14}}
{{< /graphplot >}}

## Choose the most convenient method to graph a line

While we could graph any linear equation by plotting points, it may not
always be the most convenient method. This table shows six equations we've
graphed in this chapter, and the methods we used to graph them.

| Equation | Method |
| :--- | :--- |
| $y = 2x + 1$ | Plotting points |
| $y = \tfrac{1}{2}x + 3$ | Plotting points |
| $x = -7$ | Vertical line |
| $y = 4$ | Horizontal line |
| $2x + y = 6$ | Intercepts |
| $4x - 3y = 12$ | Intercepts |

What is it about the form of an equation that can help us choose the most
convenient method to graph its line?

Notice that in the first two equations, $y$ is isolated on one side of the
equation, and its coefficient is $1$. We found points by substituting values
for $x$ on the right side of the equation and then simplifying to get the
corresponding $y$-values.

The next two equations each have just one variable. Remember, in this kind
of equation the value of that one variable is constant; it does not depend
on the value of the other variable. Equations of this form have graphs that
are vertical or horizontal lines.

In the last two equations, both $x$ and $y$ are on the same side of the
equation. These two equations are of the form $Ax + By = C$. We substituted
$y = 0$ and $x = 0$ to find the $x$- and $y$-intercepts, and then found a
third point by choosing a value for $x$ or $y$.

This leads to the following strategy for choosing the most convenient method
to graph a line.

{{< callout type="info" >}}
  **Choose the most convenient method to graph a line.**

  1. If the equation has only one variable, it is a vertical or horizontal
     line.
     - $x = a$ is a vertical line passing through the $x$-axis at $a$.
     - $y = b$ is a horizontal line passing through the $y$-axis at $b$.
  2. If $y$ is isolated on one side of the equation, graph by plotting
     points. Choose any three values for $x$ and then solve for the
     corresponding $y$-values.
  3. If the equation is of the form $Ax + By = C$, find the intercepts. Find
     the $x$- and $y$-intercepts and then a third point.
{{< /callout >}}

**Example.** Identify the most convenient method to graph each line: (a)
$y = -3$ (b) $4x - 6y = 12$ (c) $x = 2$ (d) $y = \tfrac{2}{5}x - 1$.

(a) $y = -3$ has only one variable, $y$. Its graph is a horizontal line
crossing the $y$-axis at $-3$.

(b) $4x - 6y = 12$ is of the form $Ax + By = C$. Find the intercepts and one
more point.

(c) $x = 2$ has only one variable, $x$. The graph is a vertical line
crossing the $x$-axis at $2$.

(d) $y = \tfrac{2}{5}x - 1$ has $y$ isolated on the left side of the
equation, so it will be easiest to graph this line by plotting three points.

{{< multiplechoice
  question="Identify the most convenient method to graph the line $3x + 2y = 12$."
  answer="intercepts"
  hint="Check the form of the equation against the three cases in the strategy above."
>}}
plotting points
vertical line
intercepts
horizontal line
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the most convenient method to graph the line $x = 6$."
  answer="vertical line"
  hint="Count the variables in the equation, then match it to a case in the strategy above."
>}}
horizontal line
intercepts
plotting points
vertical line
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the most convenient method to graph the line $y = -\tfrac{3}{4}x + 1$."
  answer="plotting points"
  hint="Look at which side of the equation each variable is on, then match it to a case in the strategy above."
>}}
intercepts
plotting points
horizontal line
vertical line
{{< /multiplechoice >}}

## Key terms

- **intercept of a line** — a point where a line crosses an axis.
- **$x$-intercept** — the point $(a, 0)$ where a line crosses the $x$-axis; it occurs when $y$ is zero.
- **$y$-intercept** — the point $(0, b)$ where a line crosses the $y$-axis; it occurs when $x$ is zero.

## Practice

### Identify the intercepts on a graph

Use this graph for the next two exercises.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from negative 10 to 10, showing a line falling from upper left to lower right through the points (−4, 7) and (6, −3).","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"lines":[{"through":[[0,3],[3,0]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the $x$-intercept of the line shown in the graph above. Give it as an ordered pair."
  answer="(3,0)" answerForm="decimal"
  hint="Read across to where the line crosses the horizontal axis; the $y$-coordinate there is $0$."
>}}

{{< fillin
  question="Find the $y$-intercept of the line shown in the graph above. Give it as an ordered pair."
  answer="(0,3)" answerForm="decimal"
  hint="Read up to where the line crosses the vertical axis; the $x$-coordinate there is $0$."
>}}

Use this graph for the next two exercises.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from negative 7 to 7, showing a line rising from lower left to upper right through the points (−6, −3) and (4, 2).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":18,"tickLabels":true,"tickStep":2,"lines":[{"through":[[0,0],[4,2]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the $x$-intercept of the line shown in the graph above. Give it as an ordered pair."
  answer="(0,0)" answerForm="decimal"
  hint="Read across to where the line crosses the horizontal axis; the $y$-coordinate there is $0$."
>}}

{{< fillin
  question="Find the $y$-intercept of the line shown in the graph above. Give it as an ordered pair."
  answer="(0,0)" answerForm="decimal"
  hint="Read up to where the line crosses the vertical axis; the $x$-coordinate there is $0$."
>}}

### Find the intercepts from an equation of a line

{{< fillin
  question="Find the $x$-intercept of $x - 3y = 12$. Give it as an ordered pair."
  answer="(12,0)" answerForm="decimal"
  hint="Let $y = 0$ and solve for $x$."
>}}

{{< fillin
  question="Find the $y$-intercept of $x - 3y = 12$. Give it as an ordered pair."
  answer="(0,-4)" answerForm="decimal"
  hint="Let $x = 0$ and solve for $y$."
>}}

{{< fillin
  question="Find the $x$-intercept of $y = \tfrac{1}{5}x + 2$. Give it as an ordered pair."
  answer="(-10,0)" answerForm="decimal"
  hint="Let $y = 0$ to get $0 = \tfrac{1}{5}x + 2$, subtract $2$ from both sides, then multiply by $5$."
>}}

{{< fillin
  question="Find the $y$-intercept of $y = \tfrac{1}{5}x + 2$. Give it as an ordered pair."
  answer="(0,2)" answerForm="decimal"
  hint="Let $x = 0$ and simplify the right side."
>}}

### Graph a line using the intercepts

{{< graphplot
  question="Graph the line $x + 2y = 4$ using its intercepts."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes."
  answerDisplay="$x + 2y = 4$"
  hint="Let $y = 0$ and solve for $x$ to find the $x$-intercept, let $x = 0$ and solve for $y$ to find the $y$-intercept, then find a third point as a check."
>}}
{"answer":{"slope":-0.5,"intercept":2,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

{{< graphplot
  question="Graph the line $3x - 2y = 6$ using its intercepts."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes."
  answerDisplay="$3x - 2y = 6$"
  hint="Let $y = 0$ and solve for $x$, then let $x = 0$ and solve for $y$; plot both intercepts and a third point as a check."
>}}
{"answer":{"slope":1.5,"intercept":-3,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

{{< graphplot
  question="Graph the line $y = x$ using its intercepts."
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes."
  answerDisplay="$y = x$"
  hint="Find both intercepts first. If they are the same point, choose two other values of $x$ to get more points."
>}}
{"answer":{"slope":1,"intercept":0,"plotPoints":3},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

### Choose the most convenient method to graph a line

{{< multiplechoice
  question="Identify the most convenient method to graph the line $x = 2$."
  answer="vertical line"
  hint="Count the variables in the equation first."
>}}
vertical line
intercepts
plotting points
horizontal line
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the most convenient method to graph the line $y = 5$."
  answer="horizontal line"
  hint="Count the variables in the equation first."
>}}
plotting points
intercepts
vertical line
horizontal line
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the most convenient method to graph the line $y = -3x + 4$."
  answer="plotting points"
  hint="Check whether the equation has one variable or two, and where each variable sits."
>}}
plotting points
horizontal line
intercepts
vertical line
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the most convenient method to graph the line $3x - 2y = -12$."
  answer="intercepts"
  hint="Check whether the equation has one variable or two, and where each variable sits."
>}}
vertical line
intercepts
horizontal line
plotting points
{{< /multiplechoice >}}

---

<small>This section is adapted from [Prealgebra 2e, Section 11.3: Graphing with Intercepts](https://openstax.org/books/prealgebra-2e/pages/11-3-graphing-with-intercepts) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated the labeled coordinate-grid figures and the two Try It graphs as accessible inline graphics and the intercept summaries as tables; corrected the summary of the $4x - 3y = 12$ example, which the source prints as $(-3, 0)$ and $(0, -4)$, to $(3, 0)$ and $(0, -4)$; omitted the Be Prepared quiz, Self Check checklist, media links, and the Writing Exercises; converted the practice problems ("Try Its") into interactive exercises with instant feedback, asking for each intercept as its own ordered-pair question, including two graph-it-yourself exercises, a match-the-graph multiple-choice question, and one multiple-choice question per equation for choosing a graphing method; and adapted selected end-of-section exercises into the interactive Practice block, recreating two of their graphs as accessible inline figures and restating each two-intercept prompt as separate ordered-pair questions.</small>
