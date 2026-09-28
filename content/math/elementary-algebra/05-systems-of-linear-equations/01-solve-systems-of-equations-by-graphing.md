---
title: Solve Systems of Equations by Graphing
description: >-
  Determining whether an ordered pair is a solution of a system of equations,
  solving a system of two linear equations by graphing, classifying the
  number of solutions of a linear system from its slopes and intercepts, and
  solving applications with systems of equations — adapted from OpenStax
  Elementary Algebra 2e, Section 5.1.
source_section: "5.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Determine whether an ordered pair is a solution of a system of equations
- Solve a system of linear equations by graphing
- Determine the number of solutions of a linear system
- Solve applications of systems of equations by graphing
{{< /callout >}}

## Determine whether an ordered pair is a solution of a system of equations

A linear equation in two variables, like $2x + y = 7$, has infinitely many
solutions — its graph is a line, and every point on that line is a
solution. Now we will work with **systems of linear equations**, two or
more linear equations grouped together.

{{< callout type="info" >}}
  **System of linear equations.** When two or more linear equations are
  grouped together, they form a system of linear equations.
{{< /callout >}}

We will focus our work here on systems of two linear equations in two
unknowns. An example of a system of two linear equations is shown below. A
brace shows that the two equations are grouped together to form a system:

$$\left\{\begin{array}{l} 2x + y = 7 \\ x - 2y = 6 \end{array}\right.$$

To solve a system of two linear equations, we want to find the values of
the variables that are solutions to *both* equations at once — the ordered
pairs $(x, y)$ that make both equations true.

{{< callout type="info" >}}
  **Solutions of a system of equations.** Solutions of a system of
  equations are the values of the variables that make all the equations
  true. A solution of a system of two linear equations is represented by an
  ordered pair $(x, y)$.
{{< /callout >}}

To determine whether an ordered pair is a solution to a system of two
equations, we substitute the values of the variables into each equation. If
the ordered pair makes both equations true, it is a solution to the system.

**Example.** Determine whether the ordered pair is a solution to the
system $\left\{\begin{array}{l} x - y = -1 \\ 2x - y = -5 \end{array}\right.$:
(a) $(-2, -1)$, (b) $(-4, -3)$.

(a) Substitute $x = -2$ and $y = -1$ into both equations.

$$
\begin{array}{lrcl}
x - y = -1: & -2 - (-1) &\stackrel{?}{=}& -1 \\[4pt]
& -1 &=& -1 \; \checkmark \\[4pt]
2x - y = -5: & 2(-2) - (-1) &\stackrel{?}{=}& -5 \\[4pt]
& -3 &\neq& -5
\end{array}
$$

The ordered pair makes the first equation true but not the second, so
$(-2, -1)$ does not make *both* equations true — it is not a solution to
the system.

(b) Substitute $x = -4$ and $y = -3$ into both equations.

$$
\begin{array}{lrcl}
x - y = -1: & -4 - (-3) &\stackrel{?}{=}& -1 \\[4pt]
& -1 &=& -1 \; \checkmark \\[4pt]
2x - y = -5: & 2(-4) - (-3) &\stackrel{?}{=}& -5 \\[4pt]
& -5 &=& -5 \; \checkmark
\end{array}
$$

The ordered pair makes both equations true, so $(-4, -3)$ *is* a solution
to the system.

{{< multiplechoice
  question="Is $(1, -3)$ a solution to the system $\left\{\begin{array}{l} 3x + y = 0 \\ x + 2y = -5 \end{array}\right.$?"
  answer="yes"
  hint="Substitute $x = 1$ and $y = -3$ into both equations; the pair is a solution only if both statements are true."
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(0, 0)$ a solution to the system $\left\{\begin{array}{l} 3x + y = 0 \\ x + 2y = -5 \end{array}\right.$?"
  answer="no"
  hint="Substitute $x = 0$ and $y = 0$ into both equations; the pair is a solution only if both statements are true."
>}}
yes
no
{{< /multiplechoice >}}

## Solve a system of linear equations by graphing

The graph of a linear equation is a line, and every point on that line is a
solution of the equation. For a system of two equations, we graph *two*
lines on the same coordinate plane. Then we can see all the points that are
solutions to each equation — and by finding what the two lines have in
common, we find the solution to the system.

Two lines in the same plane must either intersect, be parallel, or be the
same line, so there are three possible outcomes when we graph a system.
We'll explore all three later in this section — for now, we'll focus on
systems where the lines intersect in exactly one point.

{{< callout type="info" >}}
  **How To: Solve a system of linear equations by graphing.**

  1. Graph the first equation.
  2. Graph the second equation on the same rectangular coordinate system.
  3. Determine whether the lines intersect, are parallel, or are the same
     line.
  4. Identify the solution to the system. If the lines intersect, identify
     the point of intersection and check that it is a solution to both
     equations — this is the solution to the system. If the lines are
     parallel, the system has no solution. If the lines are the same, the
     system has infinitely many solutions.
{{< /callout >}}

**Example.** Solve the system by graphing: $\left\{\begin{array}{l} y = 2x + 1 \\ y = 4x - 1 \end{array}\right.$

Both equations are already in slope–intercept form:

$$y = 2x + 1 \qquad m = 2, \ b = 1$$
$$y = 4x - 1 \qquad m = 4, \ b = -1$$

We graph both lines on the same coordinate plane using their slopes and
$y$-intercepts.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from −7 to 7, showing the lines y = 2x + 1 and y = 4x − 1 crossing at the point (1, 3).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"slope":2,"intercept":1},{"slope":4,"intercept":-1}],"points":[{"at":[1,3],"label":"(1, 3)","labelSide":"e"}],"texts":[{"at":[2.7,4.8],"text":"y = 2x + 1"},{"at":[0.4,-2.8],"text":"y = 4x − 1"}]}
{{< /apfigure >}}

The lines intersect at $(1, 3)$. Check the solution in both equations:

$$
\begin{array}{lrcl}
y = 2x + 1: & 3 &\stackrel{?}{=}& 2(1) + 1 \\[4pt]
& 3 &=& 3 \; \checkmark \\[4pt]
y = 4x - 1: & 3 &\stackrel{?}{=}& 4(1) - 1 \\[4pt]
& 3 &=& 3 \; \checkmark
\end{array}
$$

The solution is $(1, 3)$.

When equations are given in standard form, it is often more convenient to
graph them using their $x$- and $y$-intercepts.

**Example.** Solve the system by graphing: $\left\{\begin{array}{l} x + y = 2 \\ x - y = 4 \end{array}\right.$

We find the $x$- and $y$-intercepts of each line: let $x = 0$ and solve
for $y$, then let $y = 0$ and solve for $x$.

| | $x + y = 2$ | $x - y = 4$ |
| :--- | :---: | :---: |
| $y$-intercept (let $x = 0$) | $(0, 2)$ | $(0, -4)$ |
| $x$-intercept (let $y = 0$) | $(2, 0)$ | $(4, 0)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from −7 to 7, showing the line x + y = 2 through (0, 2) and (2, 0) and the line x − y = 4 through (0, −4) and (4, 0), crossing at the point (3, −1).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"slope":-1,"intercept":2},{"slope":1,"intercept":-4}],"points":[{"at":[3,-1]}],"texts":[{"at":[3.9,-1.3],"text":"(3, −1)"},{"at":[5.6,-4.6],"text":"x + y = 2","anchor":"end"},{"at":[5.5,2],"text":"x − y = 4","anchor":"end"}]}
{{< /apfigure >}}

The lines intersect at $(3, -1)$. Check the solution in both equations:

$$
\begin{array}{lrcl}
x + y = 2: & 3 + (-1) &\stackrel{?}{=}& 2 \\[4pt]
& 2 &=& 2 \; \checkmark \\[4pt]
x - y = 4: & 3 - (-1) &\stackrel{?}{=}& 4 \\[4pt]
& 4 &=& 4 \; \checkmark
\end{array}
$$

The solution is $(3, -1)$.

{{< graphplot
  question="Solve the system by graphing: $\left\{\begin{array}{l} x - 3y = -3 \\ x + y = 5 \end{array}\right.$"
  answerDisplay="The lines $x - 3y = -3$ and $x + y = 5$, which cross at $(3, 2)$"
  ariaLabel="A blank coordinate grid from −6 to 6 on both axes."
  hint="For each equation, find two points on its line — its intercepts, or its slope and $y$-intercept after solving for $y$ — and draw the line through them."
>}}
{"answer":{"system":[{"slope":0.3333333333333333,"intercept":1},{"slope":-1,"intercept":5}]},"grid":{"xMin":-6,"xMax":6,"yMin":-6,"yMax":6}}
{{< /graphplot >}}

If one of the equations in a system has only one variable — like $x = 4$ or
$y = 6$ — its graph is a vertical or horizontal line. You can still graph it
on the same plane and find where it crosses the other line exactly the way
we've been doing.

## Determine the number of solutions of a linear system

We've seen that two lines in a plane can intersect, be parallel, or be the
same line. This means a system of two linear equations can have exactly one
solution, no solution, or infinitely many solutions.

| Graph | Number of solutions |
| :--- | :--- |
| 2 intersecting lines | $1$ |
| Parallel lines | None |
| Same line | Infinitely many |

When both equations of a system give the same line, we say the two lines
are **coincident**.

{{< callout type="info" >}}
  **Coincident lines.** Coincident lines have the same slope and same
  $y$-intercept.
{{< /callout >}}

We can tell which case we're in *without graphing*, just by comparing the
slopes and intercepts of the two lines. Write each equation in
slope–intercept form ($y = mx + b$) and compare:

| Slopes | Intercepts | Type of lines | Number of solutions |
| :--- | :--- | :--- | :--- |
| Different | — | Intersecting | $1$ point |
| Same | Different | Parallel | No solution |
| Same | Same | Coincident | Infinitely many solutions |

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; margin: 1.5rem 0">
  <div style="text-align: center">
    <div class="ap-figure">
<svg role="img" aria-label="A coordinate grid showing two lines, y equals x plus 1 and y equals negative x plus 3, crossing at a single point." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="38" y1="170" x2="38" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="170" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="170" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="170" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="170" x2="110" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="170" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="170" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="170" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="170" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="170" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="170" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="110" x2="170" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="170" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="170" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="170" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="38" x2="170" y2="38" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="27.1" y1="156.9" x2="156.9" y2="27.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="164,20 160.5,30.6 153.4,23.5" fill="currentColor"/>
  <polygon points="20,164 23.5,153.4 30.6,160.5" fill="currentColor"/>
  <line x1="63.1" y1="27.1" x2="168.9" y2="132.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="176,140 165.4,136.5 172.5,129.4" fill="currentColor"/>
  <polygon points="56,20 66.6,23.5 59.5,30.6" fill="currentColor"/>
</svg>
</div>
    <p style="font-weight: 600; margin: 0.5rem 0 0">Intersecting</p>
    <p style="margin: 0; font-size: 0.9rem">One solution</p>
  </div>
  <div style="text-align: center">
    <div class="ap-figure">
<svg role="img" aria-label="A coordinate grid showing two parallel lines, y equals x plus 1 and y equals x minus 2, that never cross." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="38" y1="170" x2="38" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="170" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="170" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="170" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="170" x2="110" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="170" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="170" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="170" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="170" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="170" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="170" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="110" x2="170" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="170" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="170" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="170" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="38" x2="170" y2="38" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="27.1" y1="156.9" x2="156.9" y2="27.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="164,20 160.5,30.6 153.4,23.5" fill="currentColor"/>
  <polygon points="20,164 23.5,153.4 30.6,160.5" fill="currentColor"/>
  <line x1="51.1" y1="168.9" x2="168.9" y2="51.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="176,44 172.5,54.6 165.4,47.5" fill="currentColor"/>
  <polygon points="44,176 47.5,165.4 54.6,172.5" fill="currentColor"/>
</svg>
</div>
    <p style="font-weight: 600; margin: 0.5rem 0 0">Parallel</p>
    <p style="margin: 0; font-size: 0.9rem">No solution</p>
  </div>
  <div style="text-align: center">
    <div class="ap-figure">
<svg role="img" aria-label="A coordinate grid showing a single line, since the equations y equals x plus 1 and 2x minus 2y equals negative 2 graph as the same line." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="38" y1="170" x2="38" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="170" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="170" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="170" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="170" x2="110" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="170" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="170" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="170" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="170" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="170" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="170" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="110" x2="170" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="170" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="170" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="170" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="38" x2="170" y2="38" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="27.1" y1="156.9" x2="156.9" y2="27.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="164,20 160.5,30.6 153.4,23.5" fill="currentColor"/>
  <polygon points="20,164 23.5,153.4 30.6,160.5" fill="currentColor"/>
</svg>
</div>
    <p style="font-weight: 600; margin: 0.5rem 0 0">Coincident</p>
    <p style="margin: 0; font-size: 0.9rem">Infinitely many solutions</p>
  </div>
</div>

A system of equations that has at least one solution is called a
**consistent system**; a system with no solution is called an
**inconsistent system**.

{{< callout type="info" >}}
  **Consistent and inconsistent systems.** A **consistent system** of
  equations is a system of equations with at least one solution. An
  **inconsistent system** of equations is a system of equations with no
  solution.
{{< /callout >}}

We also categorize the equations in a system as *independent* or
*dependent*. If two equations are **independent equations**, they each have
their own set of solutions; intersecting lines and parallel lines are both
independent. If two equations are **dependent**, every solution of one
equation is also a solution of the other — graphing two dependent
equations gives coincident lines.

{{< callout type="info" >}}
  **Independent and dependent equations.** Two equations are
  **independent** if they have different solutions. Two equations are
  **dependent** if all the solutions of one equation are also solutions of
  the other equation.
{{< /callout >}}

**Example.** Without graphing, determine the number of solutions and then
classify the system of equations: $\left\{\begin{array}{l} 2x + y = -3 \\ x - 5y = 5 \end{array}\right.$

We compare the slope and intercept of each line by writing both equations
in slope–intercept form. The first equation is already close to that form:

$$
\begin{array}{rcl}
2x + y &=& -3 \\
y &=& -2x - 3
\end{array}
$$

so $m = -2$, $b = -3$. Solve the second equation for $y$:

$$
\begin{array}{rcl}
x - 5y &=& 5 \\
-5y &=& -x + 5 \\
y &=& \tfrac{1}{5}x - 1
\end{array}
$$

so $m = \tfrac{1}{5}$, $b = -1$. The slopes are different, so the lines
intersect. A system of equations whose graphs intersect has one solution
and is consistent and independent.

{{< fillin
  question="Consider the system $\left\{\begin{array}{l} y = -2x - 4 \\ 4x + 2y = 9 \end{array}\right.$ Solve the second equation for $y$. What is the slope of its line?"
  answer="-2"
  answerForm="decimal"
  hint="Subtract $4x$ from both sides, then divide every term by $2$; the slope is the coefficient of $x$."
>}}

{{< multiplechoice
  question="Without graphing, determine the number of solutions and then classify the system $\left\{\begin{array}{l} y = -2x - 4 \\ 4x + 2y = 9 \end{array}\right.$"
  hint="Write both equations in slope–intercept form, compare their slopes and $y$-intercepts, then match the case to its classification."
  answer="no solution, inconsistent, independent"
>}}
one solution, consistent, independent
no solution, inconsistent, independent
infinitely many solutions, consistent, dependent
{{< /multiplechoice >}}

## Solve applications of systems of equations by graphing

We use the same problem-solving strategy for applications of systems of
equations that we've used before, adapted to set up two equations instead
of one.

{{< callout type="info" >}}
  **How To: Use a problem-solving strategy for systems of linear
  equations.**

  1. **Read** the problem. Make sure all the words and ideas are
     understood.
  2. **Identify** what we are looking for.
  3. **Name** what we are looking for. Choose variables to represent those
     quantities.
  4. **Translate** into a system of equations.
  5. **Solve** the system of equations — here, by graphing.
  6. **Check** the answer in the problem and make sure it makes sense.
  7. **Answer** the question with a complete sentence.
{{< /callout >}}

**Example.** Sondra is making $10$ quarts of punch from fruit juice and
club soda. The number of quarts of fruit juice is $4$ times the number of
quarts of club soda. How many quarts of fruit juice and how many quarts of
club soda does Sondra need?

Let $f =$ the number of quarts of fruit juice and $c =$ the number of
quarts of club soda. The total is $10$ quarts, and the fruit juice amount
is $4$ times the club soda amount:

$$\left\{\begin{array}{l} f + c = 10 \\ f = 4c \end{array}\right.$$

Graphing both equations (with $c$ on the horizontal axis and $f$ on the
vertical axis) shows where they intersect:

{{< apfigure kind="graph" >}}
{"ariaLabel":"A graph with quarts of club soda, c, on the horizontal axis and quarts of fruit juice, f, on the vertical axis, both numbered from 1 to 11. The line f + c = 10 runs from (0, 10) down to (10, 0), and the line f = 4c rises from the origin; they cross at the point (2, 8).","xMin":0,"xMax":11,"yMin":0,"yMax":11,"unit":22,"tickLabels":true,"tickStep":1,"xLabel":"c","yLabel":"f","segments":[{"from":[0,10],"to":[10,0]},{"from":[0,0],"to":[2.75,11]}],"points":[{"at":[2,8],"label":"(2, 8)","labelSide":"e"}],"texts":[{"at":[3,10],"text":"f = 4c"},{"at":[6.4,4.2],"text":"f + c = 10"}]}
{{< /apfigure >}}

The point of intersection is $(2, 8)$ — that is, $c = 2$ and $f = 8$. Check:
the fruit juice amount, $8$, is indeed $4$ times the club soda amount, $2$;
and $8 + 2 = 10$ quarts total, as required. Sondra needs $8$ quarts of
fruit juice and $2$ quarts of club soda.

{{< fillin
  question="Manny is making 12 quarts of orange juice from concentrate and water. The number of quarts of water is 3 times the number of quarts of concentrate. How many quarts of concentrate does Manny need?"
  answer="3"
  answerForm="decimal"
  hint="Name the two amounts with variables, write one equation for the total and one for the 'times' relationship, then graph both and read where the lines cross."
>}}

{{< fillin
  question="For the same orange juice mixture, how many quarts of water does Manny need?"
  answer="9"
  answerForm="decimal"
  hint="Read the other coordinate of the intersection point, then check it in both equations of your system."
>}}

## Key terms

**system of linear equations** — two or more linear equations grouped
together. **solution of a system of equations** — an ordered pair $(x, y)$
that makes all the equations in the system true. **consistent system** — a
system of equations with at least one solution. **inconsistent system** —
a system of equations with no solution. **independent equations** — two
equations with different solutions (intersecting or parallel lines).
**dependent equations** — two equations whose solutions are identical
(coincident lines). **coincident lines** — lines that have the same slope
and same $y$-intercept.

## Practice

### Determine whether an ordered pair is a solution of a system of equations

{{< multiplechoice
  question="Is $(3,1)$ a solution of the system $\left\{\begin{array}{l}2x-6y=0 \\ 3x-4y=5\end{array}\right.$?"
  answer="yes"
  hint="Substitute $x=3$ and $y=1$ into both equations; the point is a solution only if both statements are true."
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(-3,4)$ a solution of the system $\left\{\begin{array}{l}2x-6y=0 \\ 3x-4y=5\end{array}\right.$?"
  answer="no"
  hint="Substitute $x=-3$ and $y=4$ into each equation and check whether both are true."
>}}
yes
no
{{< /multiplechoice >}}

### Solve a system of linear equations by graphing

{{< graphplot
  question="Solve by graphing: $\left\{\begin{array}{l}3x+y=-3 \\ 2x+3y=5\end{array}\right.$"
  answerDisplay="The lines $3x + y = -3$ and $2x + 3y = 5$, which cross at $(-2, 3)$"
  ariaLabel="A blank coordinate grid from −6 to 6 on both axes."
  hint="For each equation, find two points on its line — its intercepts, or its slope and $y$-intercept after solving for $y$ — and draw the line through them."
>}}
{"answer":{"system":[{"slope":-3,"intercept":-3},{"slope":-0.6666666666666666,"intercept":1.6666666666666667}]},"grid":{"xMin":-6,"xMax":6,"yMin":-6,"yMax":6}}
{{< /graphplot >}}

{{< multiplechoice
  question="Which graph shows the solution of the system $\left\{\begin{array}{l}-3x+y=-1 \\ 2x+y=4\end{array}\right.$?"
  mode="graph"
  answerIndex="1"
  hint="Write each equation in slope–intercept form, then look for the option whose two lines have those slopes and $y$-intercepts."
>}}
{"ariaLabel":"A line falling steeply through (0, −1) and a line rising steeply through (0, 4), crossing at the marked point (−1, 1).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":-2,"intercept":-1},{"slope":3,"intercept":4}],"points":[{"at":[-1,1]}]}
===OPT===
{"ariaLabel":"A line rising steeply through (0, −1) and a line falling through (0, 4), crossing at the marked point (1, 2).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":3,"intercept":-1},{"slope":-2,"intercept":4}],"points":[{"at":[1,2]}]}
===OPT===
{"ariaLabel":"Two parallel lines rising at the same slope, one through (0, −2) and one through (0, 3), never meeting.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":1,"intercept":-2},{"slope":1,"intercept":3}]}
{{< /multiplechoice >}}

### Determine the number of solutions of a linear system

{{< multiplechoice
  question="Without graphing, determine the number of solutions and classify the system $\left\{\begin{array}{l}y=\tfrac{2}{3}x+1 \\ 2x-3y=7\end{array}\right.$"
  answer="no solution, inconsistent, independent"
  hint="Write both equations in slope–intercept form and compare their slopes and $y$-intercepts."
>}}
no solution, inconsistent, independent
one solution, consistent, independent
infinitely many solutions, consistent, dependent
{{< /multiplechoice >}}

{{< multiplechoice
  question="Without graphing, determine the number of solutions and classify the system $\left\{\begin{array}{l}4x+2y=10 \\ 4x-2y=-6\end{array}\right.$"
  answer="one solution, consistent, independent"
  hint="Rewrite both equations in slope–intercept form and compare their slopes and $y$-intercepts."
>}}
no solution, inconsistent, independent
one solution, consistent, independent
infinitely many solutions, consistent, dependent
{{< /multiplechoice >}}

### Solve applications of systems of equations by graphing

{{< fillin
  question="Molly is making strawberry infused water. For each ounce of strawberry juice, she uses three times as many ounces of water. How many ounces of strawberry juice and how many ounces of water does she need to make 64 ounces of strawberry infused water? Enter the ounces of strawberry juice first and water second, separated by a comma."
  answer="16,48"
  answerForm="decimal"
  answerDisplay="$16$ ounces of strawberry juice and $48$ ounces of water"
  hint="Name the two amounts with variables, write one equation for the total and one for the 'three times as many' relationship, then graph both and read where the lines cross."
>}}

{{< fillin
  question="Leo is planning his spring flower garden. He wants to plant tulip and daffodil bulbs. He will plant 6 times as many daffodil bulbs as tulip bulbs. If he wants to plant 350 bulbs, how many tulip bulbs and how many daffodil bulbs should he plant? Enter the result as an ordered pair (tulips, daffodils)."
  answer="(50,300)"
  answerForm="decimal"
  answerDisplay="$50$ tulips and $300$ daffodils"
  hint="Name the two counts with variables, write one equation for the total and one for the '6 times as many' relationship, then graph both and read where the lines cross."
>}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 5.1: Solve Systems of Equations by Graphing](https://openstax.org/books/elementary-algebra-2e/pages/5-1-solve-systems-of-equations-by-graphing) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the coordinate-plane graphs (the three worked graphing examples, the punch-mixture application, and the intersecting, parallel, and coincident cases) as accessible inline graphics, the number-of-solutions and slope/intercept comparison figures and the intercept work as markdown tables, and the step-by-step solution tables as check arrays; omitted the Be Prepared quiz, the opening "How to" example, the worked examples graphing $3x + y = -1$, $y = 6$, and the parallel and coincident systems, two of the three classification examples, the summary graphs and classification table, Media links, the Key Concepts summary, the Writing Exercises and Self Check, and unselected end-of-section exercises; added a key-terms list from the module glossary; adapted selected end-of-section exercises into the interactive Practice block, posing the yes/no and classification questions as multiple choice with the classification options worded alike (so the $4x + 2y = 10$ answer names "independent", which the source answer leaves out) and one solve-by-graphing exercise as a choice among graphs; and converted selected practice problems ("Try Its") into interactive exercises with instant feedback — adding the slope of $4x + 2y = 9$ as a step before its classification question, and splitting the orange-juice question into its two amounts.</small>
