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
  **By the end of this section, you will be able to:** determine whether an
  ordered pair is a solution of a system of equations, solve a system of
  linear equations by graphing, determine the number of solutions of a
  linear system, and solve applications of systems of equations by graphing.
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

{{< fillin
  question="For the system $\{3x + y = 0,\ x + 2y = -5\}$, substitute $x = 1$ and $y = -3$ into $x + 2y$ and simplify."
  answer="-5"
  hint="Multiply -3 by 2 first, then add x."
>}}

{{< fillin
  question="For the same system, substitute $x = 0$ and $y = 0$ into $x + 2y$ and simplify. (Compare the result to -5 — does it make the equation true?)"
  answer="0"
  hint="2 times 0 is 0, then add x, which is also 0."
>}}

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

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid with two lines, y equals 2x plus 1 and y equals 4x minus 1, crossing at the point (1, 3)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 332" width="332" height="332" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="306" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="306" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="306" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="306" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="306" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="306" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="306" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="306" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="306" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="306" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="306" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="306" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="306" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="306" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="306" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="306" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="306" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="306" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="306" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="306" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="306" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="306" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="306" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="306" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="306" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="306" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="306" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="166" x2="308" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="24" x2="166" y2="308" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,166 308,171 308,161" fill="currentColor"/>
  <polygon points="166,14 171,24 161,24" fill="currentColor"/>
  <polygon points="14,166 24,161 24,171" fill="currentColor"/>
  <polygon points="166,318 161,308 171,308" fill="currentColor"/>
  <text x="316" y="158" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="87.5" y1="303.1" x2="224.5" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="229,20 229,31.2 220.1,26.7" fill="currentColor"/>
  <polygon points="83,312 83,300.8 91.9,305.3" fill="currentColor"/>
  <line x1="136.9" y1="302.3" x2="205.1" y2="29.7" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="207.5,20 209.9,30.9 200.2,28.5" fill="currentColor"/>
  <polygon points="134.5,312 132.1,301.1 141.8,303.5" fill="currentColor"/>
  <circle cx="186" cy="106" r="4" fill="currentColor"/>
  <text x="197.2" y="126.2" font-size="13" fill="currentColor" text-anchor="start">(1, 3)</text>
  <text x="211.2" y="95.4" font-size="13" fill="currentColor" text-anchor="start">y = 2x + 1</text>
  <text x="175.9" y="84.4" font-size="13" fill="currentColor" text-anchor="end">y = 4x − 1</text>
</svg>
</div>

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

We find the $x$- and $y$-intercepts of each line.

| $x + y = 2$ | | | | $x - y = 4$ | | |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $x$ | $y$ | | | $x$ | $y$ | |
| $0$ | $2$ | | | $0$ | $-4$ | |
| $2$ | $0$ | | | $4$ | $0$ | |

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid with two lines, x plus y equals 2 and x minus y equals 4, crossing at the point (3, -1)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 332" width="332" height="332" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="306" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="306" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="306" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="306" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="306" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="306" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="306" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="306" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="306" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="306" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="306" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="306" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="306" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="306" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="306" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="306" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="306" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="306" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="306" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="306" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="306" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="306" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="306" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="306" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="306" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="306" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="306" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="166" x2="308" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="24" x2="166" y2="308" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,166 308,171 308,161" fill="currentColor"/>
  <polygon points="166,14 171,24 161,24" fill="currentColor"/>
  <polygon points="14,166 24,161 24,171" fill="currentColor"/>
  <polygon points="166,318 161,308 171,308" fill="currentColor"/>
  <text x="316" y="158" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="67.1" y1="27.1" x2="304.9" y2="264.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="312,272 301.4,268.5 308.5,261.4" fill="currentColor"/>
  <polygon points="60,20 70.6,23.5 63.5,30.6" fill="currentColor"/>
  <line x1="107.1" y1="304.9" x2="304.9" y2="107.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="312,100 308.5,110.6 301.4,103.5" fill="currentColor"/>
  <polygon points="100,312 103.5,301.4 110.6,308.5" fill="currentColor"/>
  <circle cx="226" cy="186" r="4" fill="currentColor"/>
  <text x="240" y="190" font-size="13" fill="currentColor" text-anchor="start">(3, −1)</text>
  <text x="265.4" y="252" font-size="13" fill="currentColor" text-anchor="end">x + y = 2</text>
  <text x="271" y="122.4" font-size="13" fill="currentColor" text-anchor="end">x − y = 4</text>
</svg>
</div>

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

If one of the equations in a system has only one variable — like $x = 4$ or
$y = 6$ — its graph is a vertical or horizontal line. You can still graph it
on the same plane and find where it crosses the other line exactly the way
we've been doing.

{{< fillin
  question="Solve the system by graphing: $\{x - 3y = -3,\ x + y = 5\}$. After graphing both lines, what is the x-coordinate of the point where they intersect?"
  answer="3"
  hint="From the second equation, $x = 5 - y$. Substitute that into the first equation and solve for y first, then find x."
>}}

{{< fillin
  question="For the same system, what is the y-coordinate of the intersection point?"
  answer="2"
  hint="Once you know $x = 3$, substitute into $x + y = 5$ to find y."
>}}

## Determine the number of solutions of a linear system

We've seen that two lines in a plane can intersect, be parallel, or be the
same line. This means a system of two linear equations can have exactly one
solution, no solution, or infinitely many solutions.

| Graph | Number of solutions |
| :--- | :--- |
| 2 intersecting lines | $1$ |
| Parallel lines | None |
| Same line | Infinitely many |

We can tell which case we're in *without graphing*, just by comparing the
slopes and intercepts of the two lines. Write each equation in
slope–intercept form ($y = mx + b$) and compare:

| Slopes | Intercepts | Type of lines | Number of solutions |
| :--- | :--- | :--- | :--- |
| Different | — | Intersecting | $1$ point |
| Same | Different | Parallel | No solution |
| Same | Same | Coincident | Infinitely many solutions |

<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', margin: '1.5rem 0' }}>
  <div style={{ textAlign: 'center' }}>
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
    <p style={{ fontWeight: 600, margin: '0.5rem 0 0' }}>Intersecting</p>
    <p style={{ margin: 0, fontSize: '0.9rem' }}>One solution</p>
  </div>
  <div style={{ textAlign: 'center' }}>
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
    <p style={{ fontWeight: 600, margin: '0.5rem 0 0' }}>Parallel</p>
    <p style={{ margin: 0, fontSize: '0.9rem' }}>No solution</p>
  </div>
  <div style={{ textAlign: 'center' }}>
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
    <p style={{ fontWeight: 600, margin: '0.5rem 0 0' }}>Coincident</p>
    <p style={{ margin: 0, fontSize: '0.9rem' }}>Infinitely many solutions</p>
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

$$2x + y = -3 \implies y = -2x - 3 \qquad m = -2, \ b = -3$$

Solve the second equation for $y$:

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
  question="Without graphing, compare the system $\{y = -2x - 4,\ 4x + 2y = 9\}$. Solve the second equation for y. What is its slope?"
  answer="-2"
  hint="Subtract 4x from both sides, then divide every term by 2."
>}}

{{< multiplechoice
  question="The system $\{y = -2x - 4,\ 4x + 2y = 9\}$ has two lines with the same slope but different y-intercepts. How many solutions does the system have?"
  hint="Same slope with different intercepts means the lines are parallel — they never meet."
  answer="no solution"
>}}
one solution
no solution
infinitely many solutions
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

<div class="ap-figure">
<svg role="img" aria-label="A graph with club soda quarts on the horizontal axis and fruit juice quarts on the vertical axis. The line f plus c equals 10 and the line f equals 4c cross at the point (2, 8)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 244" width="244" height="244" font-family="Helvetica, Arial, sans-serif">
  <line x1="42" y1="218" x2="42" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="58" y1="218" x2="58" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="218" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="90" y1="218" x2="90" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="218" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="218" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="218" x2="138" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="154" y1="218" x2="154" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="218" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="218" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="218" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="218" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="218" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="218" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="218" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="154" x2="218" y2="154" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="138" x2="218" y2="138" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="218" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="218" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="218" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="218" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="58" x2="218" y2="58" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="42" x2="218" y2="42" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="220" y2="218" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="218" stroke="currentColor" stroke-width="1"/>
  <polygon points="230,218 220,223 220,213" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="228" y="210" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">c</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">f</text>
  <line x1="27.1" y1="59.1" x2="184.9" y2="216.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="192,224 181.4,220.5 188.5,213.4" fill="currentColor"/>
  <polygon points="20,52 30.6,55.5 23.5,62.6" fill="currentColor"/>
  <line x1="26.9" y1="214.3" x2="73.1" y2="29.7" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="75.5,20 77.9,30.9 68.2,28.5" fill="currentColor"/>
  <polygon points="24.5,224 22.1,213.1 31.8,215.5" fill="currentColor"/>
  <circle cx="58" cy="90" r="4" fill="currentColor"/>
  <text x="69.2" y="78.8" font-size="13" fill="currentColor" text-anchor="start">(2, 8)</text>
  <text x="142.8" y="201.5" font-size="13" fill="currentColor" text-anchor="end">f + c = 10</text>
  <text x="83.9" y="56.4" font-size="13" fill="currentColor" text-anchor="start">f = 4c</text>
  <text x="186" y="234" font-size="13" fill="currentColor" text-anchor="middle">10</text>
  <text x="20" y="62" font-size="13" fill="currentColor" text-anchor="end">10</text>
  <text x="12" y="234" font-size="13" fill="currentColor">0</text>
</svg>
</div>

The point of intersection is $(2, 8)$ — that is, $c = 2$ and $f = 8$. Check:
the fruit juice amount, $8$, is indeed $4$ times the club soda amount, $2$;
and $8 + 2 = 10$ quarts total, as required. Sondra needs $8$ quarts of
fruit juice and $2$ quarts of club soda.

{{< fillin
  question="Manny is making 12 quarts of orange juice from concentrate and water. The number of quarts of water is 3 times the number of quarts of concentrate. How many quarts of concentrate does Manny need?"
  answer="3"
  hint="Let c = quarts of concentrate and w = quarts of water. Then $c + w = 12$ and $w = 3c$."
>}}

{{< fillin
  question="For the same orange juice mixture, how many quarts of water does Manny need?"
  answer="9"
  hint="Water is 3 times the concentrate amount you just found."
>}}

## Key terms

**system of linear equations** — two or more linear equations grouped
together. **solution of a system of equations** — an ordered pair $(x, y)$
that makes all the equations in the system true. **consistent system** — a
system of equations with at least one solution. **inconsistent system** —
a system of equations with no solution. **independent equations** — two
equations with different solutions (intersecting or parallel lines).
**dependent equations** — two equations whose solutions are identical
(coincident lines).

---

<small>This section is adapted from [Elementary Algebra 2e, Section 5.1: Solve Systems of Equations by Graphing](https://openstax.org/books/elementary-algebra-2e/pages/5-1-solve-systems-of-equations-by-graphing) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the two-line coordinate-plane graphs (intersecting, parallel, and coincident cases, and the punch-mixture application) as accessible inline SVGs and the slope/intercept comparisons as markdown tables; omitted the Be Prepared quiz, Media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
