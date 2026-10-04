---
title: Graph Linear Inequalities in Two Variables
description: >-
  Verifying solutions to inequalities in two variables, relating solutions
  to their graphs, graphing linear inequalities, and solving applications —
  adapted from OpenStax Intermediate Algebra 2e, Section 3.4.
source_section: "3.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Verify solutions to an inequality in two variables
- Recognize the relation between the solutions of an inequality and its graph
- Graph linear inequalities in two variables
- Solve applications using linear inequalities in two variables
{{< /callout >}}

## Verify solutions to an inequality in two variables

Previously we learned to solve inequalities with only one variable. We will
now learn about inequalities containing two variables. In particular we will
look at **linear inequalities** in two variables which are very similar to
linear equations in two variables.

Linear inequalities in two variables have many applications. If you ran a
business, for example, you would want your revenue to be greater than your
costs—so that your business made a profit.

{{< callout type="info" >}}
  **Linear inequality.** A **linear inequality** is an inequality that can be
  written in one of the following forms:

  $$Ax + By > C \qquad Ax + By \geq C \qquad Ax + By < C \qquad Ax + By \leq C$$

  where $A$ and $B$ are not both zero.
{{< /callout >}}

Recall that an inequality with one variable had many solutions. For example,
the solution to the inequality $x > 3$ is any number greater than $3$. We
showed this on the number line by shading in the number line to the right of
$3$, and putting an open parenthesis at $3$.

<div class="ap-figure">
<svg role="img" aria-label="A number line showing x greater than 3, with an open parenthesis at 3 and shading to the right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 76" width="320" height="76" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="30" x2="304" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 23 L 16 30 L 24 37" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 23 L 304 30 L 296 37" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="239.2" y1="30" x2="304" y2="30" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="24" x2="28" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="55" text-anchor="middle" font-size="12" fill="currentColor">−5</text>
  <line x1="54.4" y1="24" x2="54.4" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="54.4" y="55" text-anchor="middle" font-size="12" fill="currentColor">−4</text>
  <line x1="80.8" y1="24" x2="80.8" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="80.8" y="55" text-anchor="middle" font-size="12" fill="currentColor">−3</text>
  <line x1="107.2" y1="24" x2="107.2" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="107.2" y="55" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <line x1="133.6" y1="24" x2="133.6" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="133.6" y="55" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <line x1="160" y1="24" x2="160" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="55" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="186.4" y1="24" x2="186.4" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="186.4" y="55" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <line x1="212.8" y1="24" x2="212.8" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="212.8" y="55" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <line x1="239.2" y1="24" x2="239.2" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="239.2" y="55" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <line x1="265.6" y1="24" x2="265.6" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="265.6" y="55" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="292" y1="24" x2="292" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="55" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <text x="239.2" y="37" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">(</text>
</svg>
</div>

Similarly, linear inequalities in two variables have many solutions. Any
ordered pair $(x,y)$ that makes an inequality true when we substitute in the
values is a **solution to a linear inequality**.

{{< callout type="info" >}}
  **Solution to a linear inequality.** An ordered pair $(x,y)$ is a
  **solution to a linear inequality** if the inequality is true when we
  substitute the values of $x$ and $y$.
{{< /callout >}}

**Example.** Determine whether each ordered pair is a solution to the
inequality $y > x + 4$: (a) $(0,0)$ (b) $(1,6)$ (c) $(2,6)$
(d) $(-5,-15)$ (e) $(-8,12)$.

(a) Substitute $0$ for $x$ and $0$ for $y$.

$$
\begin{array}{lrcl}
& y &>& x+4 \\[4pt]
\text{Substitute.} & 0 &\overset{?}{>}& 0+4 \\[4pt]
\text{Simplify.} & 0 &\not>& 4
\end{array}
$$

So, $(0,0)$ is not a solution to $y > x+4$.

(b) Substitute $1$ for $x$ and $6$ for $y$.

$$
\begin{array}{lrcl}
& y &>& x+4 \\[4pt]
\text{Substitute.} & 6 &\overset{?}{>}& 1+4 \\[4pt]
\text{Simplify.} & 6 &>& 5
\end{array}
$$

So, $(1,6)$ is a solution to $y > x+4$.

(c) Substitute $2$ for $x$ and $6$ for $y$.

$$
\begin{array}{lrcl}
& y &>& x+4 \\[4pt]
\text{Substitute.} & 6 &\overset{?}{>}& 2+4 \\[4pt]
\text{Simplify.} & 6 &\not>& 6
\end{array}
$$

So, $(2,6)$ is not a solution to $y > x+4$.

(d) Substitute $-5$ for $x$ and $-15$ for $y$.

$$
\begin{array}{lrcl}
& y &>& x+4 \\[4pt]
\text{Substitute.} & -15 &\overset{?}{>}& -5+4 \\[4pt]
\text{Simplify.} & -15 &\not>& -1
\end{array}
$$

So, $(-5,-15)$ is not a solution to $y > x+4$.

(e) Substitute $-8$ for $x$ and $12$ for $y$.

$$
\begin{array}{lrcl}
& y &>& x+4 \\[4pt]
\text{Substitute.} & 12 &\overset{?}{>}& -8+4 \\[4pt]
\text{Simplify.} & 12 &>& -4
\end{array}
$$

So, $(-8,12)$ is a solution to $y > x+4$.

For the inequality $y > x-3$, determine whether each ordered pair is a
solution.

{{< multiplechoice
  question="Is $(0,0)$ a solution to $y > x-3$?"
  hint="Substitute $x=0$ and $y=0$."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(4,9)$ a solution to $y > x-3$?"
  hint="Substitute $x=4$ and $y=9$."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(5,1)$ a solution to $y > x-3$?"
  hint="Substitute $x=5$ and $y=1$."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

For the inequality $y < x+1$, determine whether each ordered pair is a
solution.

{{< multiplechoice
  question="Is $(0,0)$ a solution to $y < x+1$?"
  hint="Substitute $x=0$ and $y=0$."
  answer="yes"
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(8,6)$ a solution to $y < x+1$?"
  hint="Substitute $x=8$ and $y=6$."
  answer="yes"
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(-2,-1)$ a solution to $y < x+1$?"
  hint="Substitute $x=-2$ and $y=-1$."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

## Recognize the relation between the solutions of an inequality and its graph

Now, we will look at how the solutions of an inequality relate to its graph.

Let's think about the number line shown previously again. The point $x=3$
separated that number line into two parts. On one side of $3$ are all the
numbers less than $3$. On the other side of $3$ all the numbers are greater
than $3$.

<div class="ap-figure">
<svg role="img" aria-label="The number line from negative 5 to 5 showing x greater than 3, with an open parenthesis at 3 and shading to the right. Above the line, an arrow pointing left from 3 is labeled numbers less than 3, and an arrow pointing right from 3 is labeled numbers greater than 3." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 98" width="372" height="98" font-family="Helvetica, Arial, sans-serif">
  <text x="235" y="13" text-anchor="end" font-size="11" fill="currentColor">numbers less than 3</text>
  <text x="243.4" y="13" text-anchor="start" font-size="11" fill="currentColor">numbers greater than 3</text>
  <line x1="239.2" y1="17" x2="239.2" y2="29" stroke="currentColor" stroke-width="1.2"/>
  <line x1="162" y1="23" x2="236" y2="23" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 167 19 L 161 23 L 167 27" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="242.4" y1="23" x2="301" y2="23" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 296 19 L 302 23 L 296 27" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="16" y1="52" x2="304" y2="52" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 45 L 16 52 L 24 59" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 45 L 304 52 L 296 59" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="239.2" y1="52" x2="304" y2="52" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="46" x2="28" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="77" text-anchor="middle" font-size="12" fill="currentColor">−5</text>
  <line x1="54.4" y1="46" x2="54.4" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="54.4" y="77" text-anchor="middle" font-size="12" fill="currentColor">−4</text>
  <line x1="80.8" y1="46" x2="80.8" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="80.8" y="77" text-anchor="middle" font-size="12" fill="currentColor">−3</text>
  <line x1="107.2" y1="46" x2="107.2" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="107.2" y="77" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <line x1="133.6" y1="46" x2="133.6" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="133.6" y="77" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <line x1="160" y1="46" x2="160" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="77" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="186.4" y1="46" x2="186.4" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="186.4" y="77" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <line x1="212.8" y1="46" x2="212.8" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="212.8" y="77" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <line x1="239.2" y1="46" x2="239.2" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="239.2" y="77" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <line x1="265.6" y1="46" x2="265.6" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="265.6" y="77" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="292" y1="46" x2="292" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="77" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <text x="239.2" y="59" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">(</text>
</svg>
</div>

Similarly, the line $y=x+4$ separates the plane into two regions. On one side
of the line are points with $y<x+4$. On the other side of the line are the
points with $y>x+4$. We call the line $y=x+4$ a **boundary line**.

{{< callout type="info" >}}
  **Boundary line.** The line with equation $Ax+By=C$ is the **boundary
  line** that separates the region where $Ax+By>C$ from the region where
  $Ax+By<C$.
{{< /callout >}}

For an inequality in one variable, the endpoint is shown with a parenthesis
or a bracket depending on whether or not it is included in the solution.
Similarly, for an inequality in two variables, the boundary line is shown
with a solid or dashed line to show whether or not the line is included in
the solution.

| Inequality | Boundary line | Inclusion |
| :--- | :--- | :--- |
| $Ax+By<C$ or $Ax+By>C$ | $Ax+By=C$ | Boundary line is not included in solution. **Boundary line is dashed.** |
| $Ax+By\leq C$ or $Ax+By\geq C$ | $Ax+By=C$ | Boundary line is included in solution. **Boundary line is solid.** |

Now, let's take a look at what we found in the preceding example. We'll start
by graphing the line $y=x+4$, and then we'll plot the five points we tested.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 16 to 16 on both axes, numbered every 2 units. The line y equals x plus 4 passes through (negative 4, 0) and (0, 4), and the five tested points (0, 0), (1, 6), (2, 6), (negative 5, negative 15), and (negative 8, 12) are plotted and labeled.","xMin":-16,"xMax":16,"yMin":-16,"yMax":16,"unit":14,"tickLabels":true,"tickStep":2,"lines":[{"slope":1,"intercept":4}],"points":[{"at":[0,0],"label":"(0, 0)"},{"at":[1,6],"label":"(1, 6)","labelSide":"n","labelNudge":[9,-3]},{"at":[2,6],"label":"(2, 6)","labelSide":"e"},{"at":[-5,-15],"label":"(−5, −15)"},{"at":[-8,12],"label":"(−8, 12)"}]}
{{< /apfigure >}}

Some of the points were solutions to $y>x+4$ and some were not. The points
$(1,6)$ and $(-8,12)$ are solutions. Notice that they are both on the same
side of the boundary line $y=x+4$.

The two points $(0,0)$ and $(-5,-15)$ are on the other side of the boundary
line, and they are not solutions to $y>x+4$. For those two points,
$y<x+4$.

What about the point $(2,6)$? Because $6=2+4$, the point is a solution to
the equation $y=x+4$, but not a solution to the inequality $y>x+4$. So the
point $(2,6)$ is on the boundary line.

Let's take another point above the boundary line and test whether or not it
is a solution to $y>x+4$. The point $(0,10)$ clearly looks to be above the
boundary line. Is it a solution to the inequality?

$$
\begin{array}{rcl}
y &>& x+4 \\[4pt]
10 &\overset{?}{>}& 0+4 \\[4pt]
10 &>& 4
\end{array}
$$

So, $(0,10)$ is a solution to $y>x+4$. Any point you choose above the
boundary line is a solution to the inequality. All points above the boundary
line are solutions. Similarly, all points below the boundary line are not
solutions to $y>x+4$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 16 to 16 on both axes, numbered every 2 units. The line y equals x plus 4 passes through (negative 4, 0) and (0, 4). The points (0, 0), (1, 6), (2, 6), (0, 10), (negative 5, negative 15), and (negative 8, 12) are plotted and labeled. The side of the line above and to the left is labeled y greater than x plus 4, and the side below and to the right is labeled y less than x plus 4.","xMin":-16,"xMax":16,"yMin":-16,"yMax":16,"unit":14,"tickLabels":true,"tickStep":2,"lines":[{"slope":1,"intercept":4}],"points":[{"at":[0,0],"label":"(0, 0)"},{"at":[1,6],"label":"(1, 6)","labelSide":"n","labelNudge":[9,-3]},{"at":[2,6],"label":"(2, 6)","labelSide":"e"},{"at":[0,10],"label":"(0, 10)","labelSide":"e"},{"at":[-5,-15],"label":"(−5, −15)"},{"at":[-8,12],"label":"(−8, 12)"}],"texts":[{"at":[-10,3],"text":"y > x + 4"},{"at":[10,3],"text":"y < x + 4"}]}
{{< /apfigure >}}

The line $y=x+4$ divides the plane into two regions. The shaded side shows
the solutions to $y>x+4$. The points on the boundary line, those where
$y=x+4$, are not solutions, so the line itself is not part of the solution.
We show that by making the line dashed, not solid.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes, numbered every 2 units. The dashed boundary line y equals x plus 4 passes through (negative 4, 0) and (0, 4), and the region above and to the left of the line is shaded to show y greater than x plus 4.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":1,"intercept":4},"side":[-6,4],"dashed":true}]}
{{< /apfigure >}}

**Example.** The boundary line shown in this graph is $y=2x-1$. Write the
inequality shown by the graph. The boundary line is solid, and the side
containing $(0,0)$ is shaded.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes, numbered every 4 units. The solid boundary line y equals 2x minus 1 passes through (0, negative 1) and (2, 3), and the region to the left of and above the line, including the origin, is shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":4,"regions":[{"line":{"slope":2,"intercept":-1},"side":[0,0]}]}
{{< /apfigure >}}

The line $y=2x-1$ is the boundary line. On one side of the line are the
points with $y>2x-1$ and on the other side are the points with $y<2x-1$.
Let's test the point $(0,0)$ and see which inequality describes its position
relative to the boundary line.

At $(0,0)$, which inequality is true: $y>2x-1$ or $y<2x-1$?

$$
\begin{array}{rcl}
0 &\overset{?}{>}& 2\cdot0-1 \\[4pt]
0 &>& -1 \quad \text{True}
\end{array}
\qquad
\begin{array}{rcl}
0 &\overset{?}{<}& 2\cdot0-1 \\[4pt]
0 &\not<& -1 \quad \text{False}
\end{array}
$$

Since $y>2x-1$ is true, the side of the line with $(0,0)$ is the solution.
The shaded region shows the solution of $y>2x-1$. Since the boundary line is
graphed with a solid line, the inequality includes the equal sign. The graph
shows the inequality $y\geq2x-1$.

We could use any point as a test point, provided it is not on the line. We
chose $(0,0)$ because it's the easiest to evaluate. You may want to pick a
point on the other side of the boundary line and check that $y<2x-1$.

{{< fillin
  question="Write the inequality shown by a solid boundary line $y=-2x+3$ with the region to the right of the line shaded."
  answer="y\geq-2x+3"
  answerDisplay="$y\geq-2x+3$"
  hint="Test $(4,0)$, a point in the shaded region, to choose between $<$ and $>$; the line style decides whether equality is included."
>}}

{{< fillin
  question="Write the inequality shown by a solid boundary line $y=\tfrac{1}{2}x-4$ with the region below the line shaded."
  answer="y\leq\frac{1}{2}x-4"
  answerDisplay="$y\leq\tfrac{1}{2}x-4$"
  hint="Test a point in the shaded region, such as $(0,-6)$, to choose between $<$ and $>$; the line style decides whether equality is included."
>}}

**Example.** The boundary line shown in this graph is $2x+3y=6$. Write the
inequality shown by the graph. The boundary line is dashed, and the side
containing $(0,0)$ is shaded.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes, numbered every 2 units. The dashed boundary line 2x plus 3y equals 6 passes through (0, 2) and (3, 0), and the region below the line, including the origin, is shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":-0.6666666666666666,"intercept":2},"side":[0,0],"dashed":true}]}
{{< /apfigure >}}

The line $2x+3y=6$ is the boundary line. On one side are the points with
$2x+3y>6$ and on the other side are the points with $2x+3y<6$. Let's test
the point $(0,0)$ and see which inequality describes its side.

$$
\begin{array}{rcl}
2(0)+3(0) &\overset{?}{>}& 6 \\[4pt]
0 &\not>& 6 \quad \text{False}
\end{array}
\qquad
\begin{array}{rcl}
2(0)+3(0) &\overset{?}{<}& 6 \\[4pt]
0 &<& 6 \quad \text{True}
\end{array}
$$

So the side with $(0,0)$ is the side where $2x+3y<6$. You may want to pick
a point on the other side and check that $2x+3y>6$. Since the boundary line
is dashed, the inequality does not include an equal sign. The shaded region
shows the solution to $2x+3y<6$.

{{< fillin
  question="Write the inequality shown by a solid boundary line $x-4y=8$ with the region above the line shaded."
  answer="x-4y\leq8" answerForm="decimal"
  answerDisplay="$x-4y\leq8$"
  hint="Test $(0,0)$, which lies in the shaded region, to choose between $<$ and $>$; the line style decides whether equality is included."
>}}

{{< fillin
  question="Write the inequality shown by a solid boundary line $3x-y=6$ with the region to the right of the line shaded."
  answer="3x-y\geq6" answerForm="decimal"
  answerDisplay="$3x-y\geq6$"
  hint="Test a point in the shaded region, such as $(4,0)$, to choose between $<$ and $>$; the line style decides whether equality is included."
>}}

## Graph linear inequalities in two variables

Now that we know what the graph of a linear inequality looks like and how it
relates to a boundary equation we can use this knowledge to graph a given
linear inequality.

**Example.** Graph the linear inequality $y\geq\tfrac{3}{4}x-2$.

**Step 1. Identify and graph the boundary line.** Replace the inequality sign
with an equal sign to find the boundary line. Graph the boundary line
$y=\tfrac{3}{4}x-2$. The inequality sign is $\geq$, so we draw a solid line.

**Step 2. Test a point that is not on the boundary line. Is it a solution of
the inequality?** We'll test $(0,0)$.

$$0 \overset{?}{\geq} \tfrac{3}{4}(0)-2$$

Since $0\geq-2$, $(0,0)$ is a solution.

**Step 3. Shade in one side of the boundary line.** The test point $(0,0)$ is
a solution to $y\geq\tfrac{3}{4}x-2$, so we shade in that side. All points in
the shaded region and on the boundary line represent the solutions.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 6 to 6 on both axes, numbered every 3 units. The solid boundary line y equals three-fourths x minus 2 passes through (0, negative 2) and (4, 1), and the region containing the origin is shaded.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"tickStep":3,"regions":[{"line":{"slope":0.75,"intercept":-2},"side":[0,0]}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Graph a linear inequality in two variables.**

  1. Identify and graph the boundary line.
     - If the inequality is $\leq$ or $\geq$, the boundary line is solid.
     - If the inequality is $<$ or $>$, the boundary line is dashed.
  2. Test a point that is not on the boundary line. Is it a solution of the
     inequality?
  3. Shade in one side of the boundary line.
     - If the test point is a solution, shade in the side that includes the
       point.
     - If the test point is not a solution, shade in the opposite side.
{{< /callout >}}

{{< multiplechoice
  question="For $y\geq\tfrac{5}{2}x-4$, which graph is correct?"
  hint="The equal sign determines the boundary style. Then test $(0,0)$."
  mode="graph"
  answerIndex="0"
>}}
{"ariaLabel":"A solid boundary line through (0, negative 4) rising steeply to the right, with the region above it, containing (0, 0), shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":4,"regions":[{"line":{"slope":2.5,"intercept":-4},"side":[0,0]}]}
===OPT===
{"ariaLabel":"A dashed boundary line through (0, negative 4) rising steeply to the right, with the region above it, containing (0, 0), shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":4,"regions":[{"line":{"slope":2.5,"intercept":-4},"side":[0,0],"dashed":true}]}
===OPT===
{"ariaLabel":"A solid boundary line through (0, negative 4) rising steeply to the right, with the region below it, not containing (0, 0), shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":4,"regions":[{"line":{"slope":2.5,"intercept":-4},"side":[4,-4]}]}
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y<\tfrac{2}{3}x-5$, which graph is correct?"
  hint="The strict inequality determines the boundary style. Then test $(0,0)$."
  mode="graph"
  answerIndex="1"
>}}
{"ariaLabel":"A dashed boundary line through (0, negative 5) rising gently to the right, with the region above it, containing (0, 0), shaded.","xMin":-5,"xMax":5,"yMin":-7,"yMax":7,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":0.6666666666666666,"intercept":-5},"side":[0,0],"dashed":true}]}
===OPT===
{"ariaLabel":"A dashed boundary line through (0, negative 5) rising gently to the right, with the region below it, not containing (0, 0), shaded.","xMin":-5,"xMax":5,"yMin":-7,"yMax":7,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":0.6666666666666666,"intercept":-5},"side":[4,-6],"dashed":true}]}
===OPT===
{"ariaLabel":"A solid boundary line through (0, negative 5) rising gently to the right, with the region below it, not containing (0, 0), shaded.","xMin":-5,"xMax":5,"yMin":-7,"yMax":7,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":0.6666666666666666,"intercept":-5},"side":[4,-6]}]}
{{< /multiplechoice >}}

**Example.** Graph the linear inequality $x-2y<5$.

First, we graph the boundary line $x-2y=5$. The inequality is $<$ so we
draw a dashed line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes, numbered every 2 units, showing the dashed boundary line x minus 2y equals 5 through (5, 0) and (1, negative 2), before shading.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"lines":[{"slope":0.5,"intercept":-2.5,"dashed":true}]}
{{< /apfigure >}}

Then, we test a point. We'll use $(0,0)$ again because it is easy to evaluate
and it is not on the boundary line.

$$
\begin{array}{rcl}
0-2(0) &\overset{?}{<}& 5 \\[4pt]
0-0 &<& 5 \\[4pt]
0 &<& 5
\end{array}
$$

The point $(0,0)$ is a solution of $x-2y<5$, so we shade in that side of
the boundary line. All points in the shaded region, but not those on the
boundary line, represent the solutions.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes, numbered every 2 units. The dashed boundary line x minus 2y equals 5 passes through (5, 0) and (1, negative 2); the test point (0, 0) is marked, and the region containing it is shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":0.5,"intercept":-2.5},"side":[0,0],"dashed":true}],"points":[{"at":[0,0]}]}
{{< /apfigure >}}

{{< multiplechoice
  question="For $2x-3y<6$, which description of its graph is correct?"
  hint="Test $(0,0)$ and use the strict inequality to choose the boundary style."
  answer="a dashed boundary line with the region containing (0,0) shaded"
>}}
a dashed boundary line with the region not containing (0,0) shaded
a solid boundary line with the region containing (0,0) shaded
a dashed boundary line with the region containing (0,0) shaded
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $2x-y>3$, which description of its graph is correct?"
  hint="Test $(0,0)$ and use the strict inequality to choose the boundary style."
  answer="a dashed boundary line with the region not containing (0,0) shaded"
>}}
a dashed boundary line with the region containing (0,0) shaded
a dashed boundary line with the region not containing (0,0) shaded
a solid boundary line with the region not containing (0,0) shaded
{{< /multiplechoice >}}

What if the boundary line goes through the origin? Then, we won't be able to
use $(0,0)$ as a test point. No problem—we'll just choose some other point
that is not on the boundary line.

**Example.** Graph the linear inequality $y\leq-4x$.

First, we graph the boundary line $y=-4x$. It is in slope-intercept form,
with $m=-4$ and $b=0$. The inequality is $\leq$ so we draw a solid line.

Now we need a test point. We can see that the point $(1,0)$ is not on the
boundary line. Is $(1,0)$ a solution of $y\leq-4x$?

$$0 \overset{?}{\leq} -4(1) \qquad 0 \not\leq -4$$

The point $(1,0)$ is not a solution, so we shade in the opposite side of the
boundary line. All points in the shaded region and on the boundary line
represent the solutions.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes, numbered every 4 units. The solid boundary line y equals negative 4x passes through (0, 0) and (negative 1, 4); the test point (1, 0) is marked, and the region on the opposite side of the line from it is shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":4,"regions":[{"line":{"slope":-4,"intercept":0},"side":[-1,0]}],"points":[{"at":[1,0]}]}
{{< /apfigure >}}

{{< multiplechoice
  question="For $y>-3x$, which description of its graph is correct?"
  hint="Because the line goes through the origin, test $(1,0)$."
  answer="a dashed boundary line with the region containing (1,0) shaded"
>}}
a solid boundary line with the region containing (1,0) shaded
a dashed boundary line with the region containing (1,0) shaded
a dashed boundary line with the region not containing (1,0) shaded
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y\geq-2x$, which description of its graph is correct?"
  hint="Because the line goes through the origin, test $(1,0)$."
  answer="a solid boundary line with the region containing (1,0) shaded"
>}}
a solid boundary line with the region containing (1,0) shaded
a dashed boundary line with the region containing (1,0) shaded
a solid boundary line with the region not containing (1,0) shaded
{{< /multiplechoice >}}

Some linear inequalities have only one variable. They may have an $x$ but no
$y$, or a $y$ but no $x$. In these cases, the boundary line will be either a
vertical or a horizontal line. Recall that $x=a$ is a vertical line and
$y=b$ is a horizontal line.

**Example.** Graph the linear inequality $y>3$.

First, we graph the boundary line $y=3$. It is a horizontal line. The
inequality is $>$ so we draw a dashed line. We test the point $(0,0)$.
Since $0\not>3$, $(0,0)$ is not a solution. So we shade the side that does
not include $(0,0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes, numbered every 2 units. The dashed horizontal boundary line y equals 3 is drawn, and the region above the line is shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":0,"intercept":3},"side":[0,5],"dashed":true}]}
{{< /apfigure >}}

All points in the shaded region, but not those on the boundary line,
represent the solutions to $y>3$.

{{< multiplechoice
  question="For $y<5$, which description of its graph is correct?"
  hint="Choose the line style from the inequality symbol, then test $(0,0)$ to pick the side."
  answer="a dashed horizontal boundary line with the region below shaded"
>}}
a dashed horizontal boundary line with the region above shaded
a dashed horizontal boundary line with the region below shaded
a solid horizontal boundary line with the region below shaded
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y\leq-1$, which description of its graph is correct?"
  hint="Choose the line style from the inequality symbol, then test $(0,0)$ to pick the side."
  answer="a solid horizontal boundary line with the region below shaded"
>}}
a dashed horizontal boundary line with the region below shaded
a solid horizontal boundary line with the region above shaded
a solid horizontal boundary line with the region below shaded
{{< /multiplechoice >}}

## Solve applications using linear inequalities in two variables

Many fields use linear inequalities to model a problem. While our examples
may be about simple situations, they give us an opportunity to build our
skills and to get a feel for how they might be used.

**Example.** Hilaria works two part time jobs in order to earn enough money
to meet her obligations of at least \$240 a week. Her job in food service
pays \$10 an hour and her tutoring job on campus pays \$15 an hour. How many
hours does Hilaria need to work at each job to earn at least \$240?

(a) Let $x$ be the number of hours she works at the job in food service and
let $y$ be the number of hours she works tutoring. Write an inequality that
would model this situation.

We let $x$ be the number of hours she works at the job in food service and
let $y$ be the number of hours she works tutoring. She earns \$10 per hour
at the job in food service and \$15 an hour tutoring. At each job, the number
of hours multiplied by the hourly wage will give the amount earned at that
job. The amount earned at the food service job plus the amount earned
tutoring is at least \$240:

$$10x+15y\geq240$$

(b) Graph the inequality. To graph it, we put it in slope-intercept form.

$$
\begin{array}{rcl}
10x+15y &\geq& 240 \\[4pt]
15y &\geq& -10x+240 \\[4pt]
y &\geq& -\tfrac{2}{3}x+16
\end{array}
$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"A first-quadrant grid from 0 to 30 on both axes, numbered every 2 units. The solid boundary line of 10x plus 15y greater than or equal to 240 runs from (0, 16) on the y-axis to (24, 0) on the x-axis, and the region above the line is shaded.","xMin":0,"xMax":30,"yMin":0,"yMax":30,"unit":12,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":-0.6666666666666666,"intercept":16,"arrows":false},"side":[20,20]}]}
{{< /apfigure >}}

(c) From the graph, we see that the ordered pairs $(15,10)$, $(0,16)$,
$(24,0)$ represent three of infinitely many solutions. Check the values in
the inequality.

$$
\begin{array}{rcl}
10(15)+15(10) &=& 300\geq240 \\[4pt]
10(0)+15(16) &=& 240\geq240 \\[4pt]
10(24)+15(0) &=& 240\geq240
\end{array}
$$

For Hilaria, it means that to earn at least \$240, she can work 15 hours at
her fast-food job and 10 hours tutoring, earn all her money tutoring for
16 hours, or earn all her money while working 24 hours at the job in food
service.

Hugh works two part time jobs. One at a grocery store that pays \$10 an hour
and the other is babysitting for \$13 an hour. Between the two jobs, Hugh wants
to earn at least \$260 a week. How many hours does Hugh need to work at each
job to earn at least \$260?

{{< fillin
  question="Let $x$ be the number of hours Hugh works at the grocery store and let $y$ be the number of hours he works babysitting. Write an inequality that would model this situation."
  answer="10x+13y\geq260" answerForm="decimal"
  answerDisplay="$10x+13y\geq260$"
  hint="Add the earnings from the two jobs and use the phrase 'at least' to choose the inequality symbol."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A first-quadrant grid from 0 to 30 on both axes, numbered every 2 units. A solid boundary line runs from (0, 20) on the y-axis to (26, 0) on the x-axis, and the region above the line is shaded.","xMin":0,"xMax":30,"yMin":0,"yMax":30,"unit":12,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":-0.7692307692307693,"intercept":20,"arrows":false},"side":[20,20]}]}
{{< /apfigure >}}

Three ordered pairs that are solutions are $(0,20)$, $(13,10)$, and
$(26,0)$. They mean Hugh can earn at least \$260 by babysitting 20 hours,
working 13 hours at the grocery store and 10 hours babysitting, or working 26 hours at the grocery store.

Veronica works two part time jobs in order to earn enough money to meet her
obligations of at least \$280 a week. Her job at the day spa pays \$10 an hour
and her administrative assistant job on campus pays \$17.50 an hour. How many
hours does Veronica need to work at each job to earn at least \$280?

{{< fillin
  question="Let $x$ be the number of hours Veronica works at the day spa and let $y$ be the number of hours she works as administrative assistant. Write an inequality that would model this situation."
  answer="10x+17.5y\geq280" answerForm="decimal"
  answerDisplay="$10x+17.5y\geq280$"
  hint="Add the earnings from the two jobs and use the phrase 'at least' to choose the inequality symbol."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A first-quadrant grid from 0 to 30 on both axes, numbered every 2 units. A solid boundary line runs from (0, 16) on the y-axis to (28, 0) on the x-axis, and the region above the line is shaded.","xMin":0,"xMax":30,"yMin":0,"yMax":30,"unit":12,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":-0.5714285714285714,"intercept":16,"arrows":false},"side":[20,20]}]}
{{< /apfigure >}}

Three ordered pairs that are solutions are $(0,16)$, $(14,8)$, and $(28,0)$.
They mean Veronica can earn at least \$280 by working 16 hours as an
administrative assistant, working 14 hours at the day spa and 8 hours as an
administrative assistant, or working 28 hours at the day spa.

## Key terms

**linear inequality** — an inequality that can be written as $Ax+By>C$,
$Ax+By\geq C$, $Ax+By<C$, or $Ax+By\leq C$, where $A$ and $B$ are not both
zero. **solution to a linear inequality** — an ordered pair $(x,y)$ that
makes the inequality true when the values are substituted. **boundary line**
— the line $Ax+By=C$ that separates the region where $Ax+By>C$ from the
region where $Ax+By<C$.

## Practice

### Verify solutions to an inequality in two variables

{{< multiplechoice
  question="Is $(0,1)$ a solution to $y>x-1$?"
  hint="Substitute $x=0$ and $y=1$ into the inequality."
  answer="yes"
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(4,2)$ a solution to $y>x-1$?"
  hint="Substitute $x=4$ and $y=2$ into the inequality."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

### Recognize the relation between the solutions of an inequality and its graph

{{< fillin
  question="Write the inequality shown by a solid boundary line $y=3x-4$ with the region below the line shaded."
  answer="y\leq3x-4"
  answerDisplay="$y\leq3x-4$"
  hint="Test a point in the shaded region, such as $(4,0)$, to choose between $<$ and $>$; the line style decides whether equality is included."
>}}

{{< fillin
  question="Write the inequality shown by a solid boundary line $x+y=5$ with the region above the line shaded."
  answer="x+y\geq5" answerForm="decimal"
  answerDisplay="$x+y\geq5$"
  hint="Test a point in the shaded region, such as $(5,5)$, to choose between $<$ and $>$; the line style decides whether equality is included."
>}}

### Graph linear inequalities in two variables

{{< graphplot
  question="Graph the boundary line for the inequality $4x+y>-4$."
  answerDisplay="$y=-4x-4$"
  ariaLabel="A blank grid from −14 to 14 on both axes."
  hint="Replace the inequality sign with $=$ and solve for $y$ to read the slope and $y$-intercept."
>}}
{"answer": {"slope": -4, "intercept": -4, "plotPoints": 3}, "grid": {"xMin": -14, "xMax": 14, "yMin": -14, "yMax": 14}}
{{< /graphplot >}}

{{< multiplechoice
  question="For the inequality $4x+y>-4$, is the boundary line solid or dashed, and which side is shaded?"
  hint="Choose the line style from the inequality symbol, then test $(0,0)$ to pick the side."
  answer="dashed; the side containing the origin"
>}}
solid; the side not containing the origin
dashed; the side not containing the origin
dashed; the side containing the origin
solid; the side containing the origin
{{< /multiplechoice >}}

{{< graphplot
  question="Graph the boundary line for the inequality $2x+y\geq-4$."
  answerDisplay="$y=-2x-4$"
  ariaLabel="A blank grid from −7 to 7 on both axes."
  hint="Replace the inequality sign with $=$ and solve for $y$ to read the slope and $y$-intercept."
>}}
{"answer": {"slope": -2, "intercept": -4, "plotPoints": 3}, "grid": {"xMin": -7, "xMax": 7, "yMin": -7, "yMax": 7}}
{{< /graphplot >}}

{{< multiplechoice
  question="For the inequality $2x+y\geq-4$, is the boundary line solid or dashed, and which side is shaded?"
  hint="Choose the line style from the inequality symbol, then test $(0,0)$ to pick the side."
  answer="solid; the side containing the origin"
>}}
solid; the side containing the origin
solid; the side not containing the origin
dashed; the side containing the origin
dashed; the side not containing the origin
{{< /multiplechoice >}}

### Solve applications using linear inequalities in two variables

{{< fillin
  question="Laura burns 15 calories per minute running and 10 calories per minute biking, and wants to burn at least 500 calories today. If $x$ is the number of minutes she runs and $y$ is the number of minutes she bikes, write an inequality that models this situation."
  answer="15x+10y\geq500" answerForm="decimal"
  answerDisplay="$15x+10y\geq500$"
  hint="Multiply each activity's rate by its minutes, add the two amounts, and require the total to be at least $500$."
>}}

{{< graphplot
  question="Graph the boundary line for Laura's inequality: the minutes of running $x$ and biking $y$ that burn exactly $500$ calories."
  answerDisplay="$y=-1.5x+50$"
  ariaLabel="A blank grid with x from 0 to 40 and y from 0 to 60."
  hint="Write the equation for exactly $500$ calories and solve it for $y$ to read the slope and $y$-intercept."
>}}
{"answer": {"slope": -1.5, "intercept": 50, "plotPoints": 3}, "grid": {"xMin": 0, "xMax": 40, "yMin": 0, "yMax": 60}}
{{< /graphplot >}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 3.4: Graph Linear Inequalities in Two Variables](https://openstax.org/books/intermediate-algebra-2e/pages/3-4-graph-linear-inequalities-in-two-variables) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated the number-line and coordinate-plane figures as accessible graphs with numbered axes, drawing the three first-quadrant application boundaries as segments ending at the axes; omitted the Be Prepared quiz, the Media link, the Key Concepts summary (it repeats the graphing steps), the writing exercises, and the Self Check; converted the practice problems ("Try Its") into interactive exercises with instant feedback, describing each "write the inequality shown by the graph" boundary line and shaded side in words, asking which description or drawing of a graph is correct in place of drawing one, and giving sample solution pairs for the applications; and adapted selected end-of-section exercises into an interactive Practice block, where the graphing exercises ask for the boundary line and then its style and shaded side. Corrections: the source reads the ordered pair $(15,10)$ in the Hilaria example as 15 hours tutoring and 10 hours at the food-service job, but $x$ counts the food-service hours, so this page reads it as 15 hours at the food-service job and 10 hours tutoring; the source's answer graph for the Try It $y\geq\tfrac{5}{2}x-4$ draws a dashed boundary and names $y>\tfrac{5}{2}x-4$, while this page keys the solid boundary that $\geq$ requires; the source's answer graph for Laura's inequality $15x+10y\geq500$ draws the boundary through $(0,33\tfrac{1}{3})$ and $(50,0)$, the line $10x+15y=500$, while this page keys the boundary through $(0,50)$ and $(33\tfrac{1}{3},0)$; and the prose drops the source's typos ("whether or not it the line", "looks to above", "will gives", "\$13 hour").</small>
