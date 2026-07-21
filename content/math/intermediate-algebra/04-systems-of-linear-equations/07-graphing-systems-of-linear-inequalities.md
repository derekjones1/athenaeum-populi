---
title: Graphing Systems of Linear Inequalities
description: >-
  Determining whether an ordered pair is a solution of a system of linear
  inequalities, solving systems of linear inequalities by graphing —
  including systems with no solution — and solving applications of systems
  of inequalities — adapted from OpenStax Intermediate Algebra 2e,
  Section 4.7.
source_section: "4.7"
weight: 7
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** determine whether an
  ordered pair is a solution of a system of linear inequalities, solve a
  system of linear inequalities by graphing, and solve applications of
  systems of inequalities.
{{< /callout >}}

## Determine whether an ordered pair is a solution of a system of linear inequalities

The definition of a system of linear inequalities is very similar to the
definition of a system of linear equations.

{{< callout type="info" >}}
  **System of linear inequalities.** Two or more linear inequalities grouped
  together form a **system of linear inequalities**.
{{< /callout >}}

A system of linear inequalities looks like a system of linear equations, but
it has inequalities instead of equations. A system of two linear
inequalities is shown here:

$$
\left\{\begin{array}{l} x+4y\geq10 \\ 3x-2y<12 \end{array}\right.
$$

To solve a system of linear inequalities, we will find values of the
variables that are solutions to both inequalities. We solve the system by
using the graphs of each inequality and show the solution as a graph. We
will find the region on the plane that contains all ordered pairs $(x,y)$
that make both inequalities true.

{{< callout type="info" >}}
  **Solutions of a system of linear inequalities.** Solutions of a system of
  linear inequalities are the values of the variables that make all the
  inequalities true. The solution of a system of linear inequalities is
  shown as a shaded region in the $x,y$ coordinate system that includes all
  the points whose ordered pairs make the inequalities true.
{{< /callout >}}

To determine if an ordered pair is a solution to a system of two
inequalities, we substitute the values of the variables into each
inequality. If the ordered pair makes both inequalities true, it is a
solution to the system.

**Example.** Determine whether the ordered pair is a solution to the system
$\left\{\begin{array}{l} x+4y\geq10 \\ 3x-2y<12 \end{array}\right.$:
(a) $(-2,4)$ (b) $(3,1)$.

(a) Is the ordered pair $(-2,4)$ a solution? We substitute $x=-2$ and $y=4$
into both inequalities.

$$
\begin{array}{rcl}
x+4y &\geq& 10 \\[4pt]
-2+4(4) &\overset{?}{\geq}& 10 \\[4pt]
14 &\geq& 10\ \text{true}
\end{array}
\qquad
\begin{array}{rcl}
3x-2y &<& 12 \\[4pt]
3(-2)-2(4) &\overset{?}{<}& 12 \\[4pt]
-14 &<& 12\ \text{true}
\end{array}
$$

$(-2,4)$ made both inequalities true. Therefore $(-2,4)$ is a solution to
this system.

(b) Is the ordered pair $(3,1)$ a solution? We substitute $x=3$ and $y=1$
into both inequalities.

$$
\begin{array}{rcl}
x+4y &\geq& 10 \\[4pt]
3+4(1) &\overset{?}{\geq}& 10 \\[4pt]
7 &\geq& 10\ \text{false}
\end{array}
\qquad
\begin{array}{rcl}
3x-2y &<& 12 \\[4pt]
3(3)-2(1) &\overset{?}{<}& 12 \\[4pt]
7 &<& 12\ \text{true}
\end{array}
$$

$(3,1)$ made one inequality true, but the other one false. Therefore
$(3,1)$ is not a solution to this system.

For the system $\left\{\begin{array}{l} y>4x-2 \\ 4x-y<20 \end{array}\right.$,
determine whether each ordered pair is a solution.

{{< multiplechoice
  question="Is the ordered pair $(-2,1)$ a solution to the system $\left\{\begin{array}{l} y>4x-2 \\ 4x-y<20 \end{array}\right.$?"
  hint="Substitute $x=-2$ and $y=1$ into both inequalities and check that both come out true."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is the ordered pair $(4,-1)$ a solution to the system $\left\{\begin{array}{l} y>4x-2 \\ 4x-y<20 \end{array}\right.$?"
  hint="Substitute $x=4$ and $y=-1$ into $y>4x-2$ first — if it comes out false, the pair is not a solution."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

## Solve a system of linear inequalities by graphing

The solution to a single linear inequality is the region on one side of the
boundary line that contains all the points that make the inequality true.
The solution to a system of two linear inequalities is a region that
contains the solutions to both inequalities. To find this region, we will
graph each inequality separately and then locate the region where they are
both true. The solution is always shown as a graph.

**Example. How to solve a system of linear inequalities by graphing.** Solve
the system by graphing:
$\left\{\begin{array}{l} y\geq2x-1 \\ y<x+1 \end{array}\right.$.

**Step 1. Graph the first inequality.** We graph the boundary line
$y=2x-1$. It is a solid line because the inequality sign is $\geq$. We
choose $(0,0)$ as a test point. Since $0\geq2(0)-1$ is true, $(0,0)$ is a
solution, so we shade in the side of the boundary line that contains
$(0,0)$.

**Step 2. On the same grid, graph the second inequality.** We graph the
boundary line $y=x+1$. It is a dashed line because the inequality sign is
$<$. Testing $(0,0)$ again: since $0<0+1$ is true, we shade in the side of
this boundary line that also contains $(0,0)$.

<div class="ap-figure">
<svg role="img" aria-label="The boundary line y equals 2x minus 1 is solid, with the region above and to the left shaded, satisfying y greater than or equal to 2x minus 1. The boundary line y equals x plus 1 is dashed, with the region below and to the right shaded, satisfying y less than x plus 1. The two shadings overlap in a wedge below and to the left of their intersection point (2, 3)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="346" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="346" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="346" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="346" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="346" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="346" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="346" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="346" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="346" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="346" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="346" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="346" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="346" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="346" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="346" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="346" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="346" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="346" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="346" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 276,26 116,346 26,346" fill="currentColor" opacity="0.12" stroke="none"/>
  <polygon points="326,26 346,26 346,346 26,346 26,326" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,358 181,348 191,348" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="66" y1="183" x2="66" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="106" y1="183" x2="106" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="146" y1="183" x2="146" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="226" y1="183" x2="226" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="183" x2="266" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="306" y1="183" x2="306" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="183" y1="346" x2="189" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="350" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="183" y1="306" x2="189" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="310" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="183" y1="266" x2="189" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="183" y1="226" x2="189" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="230" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="146" x2="189" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="106" x2="189" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="110" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="66" x2="189" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="70" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="117.5" y1="343.1" x2="274.5" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="279,20 279,31.2 270.1,26.7" fill="currentColor"/>
  <polygon points="113,352 113,340.8 121.9,345.3" fill="currentColor"/>
  <line x1="27.1" y1="324.9" x2="324.9" y2="27.1" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="332,20 328.5,30.6 321.4,23.5" fill="currentColor"/>
  <polygon points="20,332 23.5,321.4 30.6,328.5" fill="currentColor"/>
</svg>
</div>

**Step 3. The solution is the region where the shading overlaps.** The point
where the boundary lines intersect, $(2,3)$, is not included in the
solution, since it is not a solution to $y<x+1$. The solution is the region
shaded twice, which appears as the darkest region in the graph.

**Step 4. Check by choosing a test point.** We'll use $(-1,-1)$.

{{< fillin
  question="Check the point $(-1,-1)$ in the system $\left\{\begin{array}{l} y\geq2x-1 \\ y<x+1 \end{array}\right.$: substitute it into $y\geq2x-1$ and simplify the right side."
  answer="-3"
  answerDisplay="$-3$, so $-1\geq-3$ is true"
  hint="Substitute $x=-1$ into $2x-1$: $2(-1)-1$."
>}}

{{< callout type="info" >}}
  **Solve a system of linear inequalities by graphing.**

  1. Graph the first inequality.
     - Graph the boundary line.
     - Shade in the side of the boundary line where the inequality is true.
  2. On the same grid, graph the second inequality.
     - Graph the boundary line.
     - Shade in the side of that boundary line where the inequality is
       true.
  3. The solution is the region where the shading overlaps.
  4. Check by choosing a test point.
{{< /callout >}}

**Example.** Solve the system by graphing:
$\left\{\begin{array}{l} x-y>3 \\ y<-\tfrac{1}{5}x+4 \end{array}\right.$.

Graph $x-y>3$ by graphing $x-y=3$ and testing a point. The intercepts are
$x=3$ and $y=-3$, and the boundary line will be dashed. We test $(0,0)$,
which makes the inequality false, so we shade the side that does not
contain $(0,0)$.

Graph $y<-\tfrac{1}{5}x+4$ by graphing $y=-\tfrac{1}{5}x+4$ using the slope
$m=-\tfrac{1}{5}$ and $y$-intercept $b=4$. The boundary line will be dashed.
We test $(0,0)$, which makes the inequality true, so we shade the side that
contains $(0,0)$.

<div class="ap-figure">
<svg role="img" aria-label="The dashed boundary line x minus y equals 3 has the region below and to the right shaded, satisfying x minus y greater than 3. The dashed boundary line y equals negative one-fifth x plus 4 has the region containing the origin shaded, satisfying y less than negative one-fifth x plus 4. The two shadings overlap in a wedge below the second line and to the right of the first line." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="346" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="346" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="346" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="346" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="346" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="346" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="346" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="346" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="346" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="346" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="346" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="346" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="346" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="346" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="346" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="346" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="346" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="346" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="346" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="346,86 346,346 86,346" fill="currentColor" opacity="0.12" stroke="none"/>
  <polygon points="26,74 346,138 346,346 26,346" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,358 181,348 191,348" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="66" y1="183" x2="66" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="106" y1="183" x2="106" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="146" y1="183" x2="146" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="226" y1="183" x2="226" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="183" x2="266" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="306" y1="183" x2="306" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="183" y1="346" x2="189" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="350" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="183" y1="306" x2="189" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="310" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="183" y1="266" x2="189" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="183" y1="226" x2="189" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="230" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="146" x2="189" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="106" x2="189" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="110" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="66" x2="189" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="70" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="87.1" y1="344.9" x2="344.9" y2="87.1" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="352,80 348.5,90.6 341.4,83.5" fill="currentColor"/>
  <polygon points="80,352 83.5,341.4 90.6,348.5" fill="currentColor"/>
  <line x1="29.8" y1="74.8" x2="342.2" y2="137.2" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="352,139.2 341.2,142.1 343.2,132.3" fill="currentColor"/>
  <polygon points="20,72.8 30.8,69.9 28.8,79.7" fill="currentColor"/>
</svg>
</div>

The point where the two lines intersect is not included in the solution,
since both boundary lines are dashed. The solution is the area shaded
twice — which appears as the darkest shaded region.

**Example.** Solve the system by graphing:
$\left\{\begin{array}{l} x-2y<5 \\ y>-4 \end{array}\right.$.

Graph $x-2y<5$ by graphing $x-2y=5$ and testing a point. The intercepts are
$x=5$ and $y=-2.5$, and the boundary line will be dashed. We test $(0,0)$,
which makes the inequality true, so we shade the side that contains
$(0,0)$.

Graph $y>-4$ by graphing $y=-4$ and recognizing that it is a horizontal
line through $y=-4$. The boundary line will be dashed. We test $(0,0)$,
which makes the inequality true, so we shade the side that contains
$(0,0)$.

<div class="ap-figure">
<svg role="img" aria-label="The dashed boundary line x minus 2y equals 5 has the region above and to the left shaded, satisfying x minus 2y less than 5. The dashed horizontal boundary line y equals negative 4 has the region above shaded, satisfying y greater than negative 4. The two shadings overlap in a large region containing the origin, above both boundary lines." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="346" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="346" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="346" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="346" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="346" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="346" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="346" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="346" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="346" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="346" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="346" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="346" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="346" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="346" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="346" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="346" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="346" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="346" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="346" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 346,26 346,156 26,316" fill="currentColor" opacity="0.12" stroke="none"/>
  <polygon points="26,26 346,26 346,266 26,266" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,358 181,348 191,348" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="66" y1="183" x2="66" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="106" y1="183" x2="106" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="146" y1="183" x2="146" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="226" y1="183" x2="226" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="183" x2="266" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="306" y1="183" x2="306" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="183" y1="346" x2="189" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="350" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="183" y1="306" x2="189" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="310" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="183" y1="266" x2="189" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="183" y1="226" x2="189" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="230" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="146" x2="189" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="106" x2="189" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="110" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="66" x2="189" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="70" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="28.9" y1="314.5" x2="343.1" y2="157.5" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="352,153 345.3,161.9 340.8,153" fill="currentColor"/>
  <polygon points="20,319 26.7,310.1 31.2,319" fill="currentColor"/>
  <line x1="30" y1="266" x2="342" y2="266" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="352,266 342,271 342,261" fill="currentColor"/>
  <polygon points="20,266 30,261 30,271" fill="currentColor"/>
</svg>
</div>

The point $(0,0)$ is in the solution, as we already found it to be a
solution of each inequality. The point of intersection of the two lines is
not included, since both boundary lines are dashed. The solution is the
area shaded twice — which appears as the darkest shaded region.

Systems of linear inequalities where the boundary lines are parallel might
have no solution. We'll see this in the next example.

**Example.** Solve the system by graphing:
$\left\{\begin{array}{l} 4x+3y\geq12 \\ y<-\tfrac{4}{3}x+1 \end{array}\right.$.

Graph $4x+3y\geq12$ by graphing $4x+3y=12$ and testing a point. The
intercepts are $x=3$ and $y=4$, and the boundary line will be solid. We
test $(0,0)$, which makes the inequality false, so we shade the side that
does not contain $(0,0)$.

Graph $y<-\tfrac{4}{3}x+1$ by graphing $y=-\tfrac{4}{3}x+1$ using the slope
$m=-\tfrac{4}{3}$ and $y$-intercept $b=1$. The boundary line will be dashed.
We test $(0,0)$, which makes the inequality true, so we shade the side that
contains $(0,0)$.

<div class="ap-figure">
<svg role="img" aria-label="The solid boundary line 4x plus 3y equals 12 has the region above and to the right shaded, satisfying 4x plus 3y greater than or equal to 12. The parallel dashed boundary line y equals negative four-thirds x plus 1 has the region below and to the left shaded, satisfying y less than negative four-thirds x plus 1. The two shaded regions never touch, since the lines are parallel and the shadings point away from each other." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="346" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="346" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="346" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="346" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="346" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="346" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="346" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="346" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="346" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="346" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="346" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="346" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="346" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="346" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="346" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="346" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="346" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="346" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="346" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="126,26 346,26 346,319.3" fill="currentColor" opacity="0.12" stroke="none"/>
  <polygon points="26,26 81,26 321,346 26,346" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,358 181,348 191,348" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="66" y1="183" x2="66" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="106" y1="183" x2="106" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="146" y1="183" x2="146" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="226" y1="183" x2="226" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="183" x2="266" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="306" y1="183" x2="306" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="183" y1="346" x2="189" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="350" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="183" y1="306" x2="189" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="310" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="183" y1="266" x2="189" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="183" y1="226" x2="189" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="230" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="146" x2="189" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="106" x2="189" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="110" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="66" x2="189" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="70" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="127.5" y1="28" x2="346" y2="319.3" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="352,327.3 342,322.3 350,316.3" fill="currentColor"/>
  <polygon points="121.5,20 131.5,25 123.5,31" fill="currentColor"/>
  <line x1="82.5" y1="28" x2="319.5" y2="344" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="325.5,352 315.5,347 323.5,341" fill="currentColor"/>
  <polygon points="76.5,20 86.5,25 78.5,31" fill="currentColor"/>
</svg>
</div>

There is no point in both shaded regions, so this system has **no
solution**.

{{< multiplechoice
  question="Does the system $\left\{\begin{array}{l} 4x+3y\geq12 \\ y<-\tfrac{4}{3}x+1 \end{array}\right.$ have a solution?"
  hint="The boundary lines are parallel, with the same slope $-\tfrac{4}{3}$; the shaded regions face away from each other and never overlap."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

Some systems of linear inequalities where the boundary lines are parallel
will have a solution. We'll see this in the next example.

**Example.** Solve the system by graphing:
$\left\{\begin{array}{l} y>\tfrac{1}{2}x-4 \\ x-2y<-4 \end{array}\right.$.

Graph $y>\tfrac{1}{2}x-4$ by graphing $y=\tfrac{1}{2}x-4$ using the slope
$m=\tfrac{1}{2}$ and the intercept $b=-4$. The boundary line will be
dashed. We test $(0,0)$, which makes the inequality true, so we shade the
side that contains $(0,0)$.

Graph $x-2y<-4$ by graphing $x-2y=-4$ and testing a point. The intercepts
are $x=-4$ and $y=2$, and the boundary line will be dashed. We choose a
test point in the solution and verify that it is a solution to both
inequalities. We test $(0,0)$, which makes the inequality false, so we
shade the side that does not contain $(0,0)$.

<div class="ap-figure">
<svg role="img" aria-label="The dashed boundary line y equals one-half x minus 4 has the region above and to the left shaded, containing the origin, satisfying y greater than one-half x minus 4. The parallel dashed boundary line x minus 2y equals negative 4, equivalent to y equals one-half x plus 2, has the region above it shaded, not containing the origin, satisfying x minus 2y less than negative 4. The two shadings overlap above the second, higher line." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="346" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="346" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="346" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="346" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="346" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="346" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="346" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="346" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="346" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="346" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="346" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="346" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="346" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="346" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="346" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="346" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="346" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="346" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="346" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 346,26 346,186 26,346" fill="currentColor" opacity="0.12" stroke="none"/>
  <polygon points="26,26 346,26 346,66 26,226" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,358 181,348 191,348" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="66" y1="183" x2="66" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="106" y1="183" x2="106" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="146" y1="183" x2="146" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="226" y1="183" x2="226" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="183" x2="266" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="306" y1="183" x2="306" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="183" y1="346" x2="189" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="350" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="183" y1="306" x2="189" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="310" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="183" y1="266" x2="189" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="183" y1="226" x2="189" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="230" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="146" x2="189" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="106" x2="189" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="110" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="66" x2="189" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="70" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="28.9" y1="344.5" x2="343.1" y2="187.5" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="352,183 345.3,191.9 340.8,183" fill="currentColor"/>
  <polygon points="20,349 26.7,340.1 31.2,349" fill="currentColor"/>
  <line x1="28.9" y1="224.5" x2="343.1" y2="67.5" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="352,63 345.3,71.9 340.8,63" fill="currentColor"/>
  <polygon points="20,229 26.7,220.1 31.2,229" fill="currentColor"/>
</svg>
</div>

No point on the boundary lines is included in the solution, since both
lines are dashed. The solution is the region that is shaded twice, which is
also the solution to $x-2y<-4$ alone.

{{< fillin
  question="For the system $\left\{\begin{array}{l} y>\tfrac{1}{2}x-4 \\ x-2y<-4 \end{array}\right.$, what is the $y$-intercept of the boundary line $x-2y=-4$?"
  answer="(0,2)"
  answerDisplay="$(0,2)$"
  hint="Substitute $x=0$ into $x-2y=-4$ and solve for $y$."
>}}

## Solve applications of systems of inequalities

The first thing we'll need to do to solve applications of systems of
inequalities is to translate each condition into an inequality. Then we
graph the system, as we did above, to see the region that contains all the
solutions. Many situations will be realistic only if both variables are
positive, so we add inequalities to the system as additional requirements.

**Example.** Christy sells photographs at a booth at a street fair. At the
start of the day, she wants to display at least 25 photos. Each small photo
she displays costs her \$4 and each large photo costs her \$10, and she
doesn't want to spend more than \$200 on photos to display.

(a) Write a system of inequalities to model this situation.

Let $x=$ the number of small photos and $y=$ the number of large photos.
She wants to have at least 25 photos, so the number of small plus the
number of large should be at least 25: $x+y\geq25$. Each small photo costs
\$4 and each large photo costs \$10, and the total must be no more than
\$200: $4x+10y\leq200$. The number of small and the number of large photos
must each be greater than or equal to zero: $x\geq0$, $y\geq0$. We have the
system of inequalities:

$$
\left\{\begin{array}{l} x+y\geq25 \\ 4x+10y\leq200 \\ x\geq0 \\ y\geq0 \end{array}\right.
$$

(b) Graph the system. Since $x\geq0$ and $y\geq0$, all solutions will be in
the first quadrant, so our graph shows only Quadrant I. To graph
$x+y\geq25$, graph $x+y=25$ as a solid line; testing $(0,0)$ makes the
inequality false, so we shade the side that does not contain $(0,0)$. To
graph $4x+10y\leq200$, graph $4x+10y=200$ as a solid line; testing $(0,0)$
makes the inequality true, so we shade the side that contains $(0,0)$.

<div class="ap-figure">
<svg role="img" aria-label="Quadrant I only, axes labeled x for the number of small photos and y for the number of large photos. The solid boundary line x plus y equals 25 has the region above and to the right shaded. The solid boundary line 4x plus 10y equals 200 has the region below and to the left shaded. The two shadings overlap in a region bounded by the two lines and the axes, which is the solution to the system." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382 382" width="382" height="382" font-family="Helvetica, Arial, sans-serif">
  <line x1="56" y1="356" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="356" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="356" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="356" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="356" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="356" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="356" x2="236" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="356" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="296" y1="356" x2="296" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="356" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="356" y1="356" x2="356" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="356" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="296" x2="356" y2="296" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="356" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="236" x2="356" y2="236" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="356" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="176" x2="356" y2="176" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="356" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="356" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="356" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="56" x2="356" y2="56" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="356" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 356,26 356,356 176,356 26,206" fill="currentColor" opacity="0.12" stroke="none"/>
  <polygon points="26,236 326,356 26,356" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="26" y1="356" x2="358" y2="356" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="356" stroke="currentColor" stroke-width="1"/>
  <polygon points="368,356 358,361 358,351" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="366" y="348" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="56" y1="353" x2="56" y2="359" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="371" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="86" y1="353" x2="86" y2="359" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="371" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="116" y1="353" x2="116" y2="359" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="371" font-size="11" fill="currentColor" text-anchor="middle">15</text>
  <line x1="146" y1="353" x2="146" y2="359" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="371" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="176" y1="353" x2="176" y2="359" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="371" font-size="11" fill="currentColor" text-anchor="middle">25</text>
  <line x1="206" y1="353" x2="206" y2="359" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="371" font-size="11" fill="currentColor" text-anchor="middle">30</text>
  <line x1="236" y1="353" x2="236" y2="359" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="371" font-size="11" fill="currentColor" text-anchor="middle">35</text>
  <line x1="266" y1="353" x2="266" y2="359" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="371" font-size="11" fill="currentColor" text-anchor="middle">40</text>
  <line x1="296" y1="353" x2="296" y2="359" stroke="currentColor" stroke-width="1"/>
  <text x="296" y="371" font-size="11" fill="currentColor" text-anchor="middle">45</text>
  <line x1="326" y1="353" x2="326" y2="359" stroke="currentColor" stroke-width="1"/>
  <text x="326" y="371" font-size="11" fill="currentColor" text-anchor="middle">50</text>
  <line x1="356" y1="353" x2="356" y2="359" stroke="currentColor" stroke-width="1"/>
  <text x="356" y="371" font-size="11" fill="currentColor" text-anchor="middle">55</text>
  <line x1="23" y1="326" x2="29" y2="326" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="330" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="23" y1="296" x2="29" y2="296" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="300" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="23" y1="266" x2="29" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="270" font-size="11" fill="currentColor" text-anchor="end">15</text>
  <line x1="23" y1="236" x2="29" y2="236" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="240" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="23" y1="206" x2="29" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="210" font-size="11" fill="currentColor" text-anchor="end">25</text>
  <line x1="23" y1="176" x2="29" y2="176" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="180" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="23" y1="146" x2="29" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="150" font-size="11" fill="currentColor" text-anchor="end">35</text>
  <line x1="23" y1="116" x2="29" y2="116" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="120" font-size="11" fill="currentColor" text-anchor="end">40</text>
  <line x1="23" y1="86" x2="29" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="90" font-size="11" fill="currentColor" text-anchor="end">45</text>
  <line x1="23" y1="56" x2="29" y2="56" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="60" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="23" y1="26" x2="29" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="30" font-size="11" fill="currentColor" text-anchor="end">55</text>
  <line x1="27.1" y1="207.1" x2="174.9" y2="354.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="182,362 171.4,358.5 178.5,351.4" fill="currentColor"/>
  <polygon points="20,200 30.6,203.5 23.5,210.6" fill="currentColor"/>
  <line x1="29.3" y1="237.3" x2="331.7" y2="358.3" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="341,362 329.9,362.9 333.6,353.6" fill="currentColor"/>
  <polygon points="20,233.6 31.1,232.7 27.4,242" fill="currentColor"/>
</svg>
</div>

The solution of the system is the region of the graph that is shaded the
darkest. The boundary line sections that border the darkly shaded section
are included in the solution, as are the points on the $x$-axis from
$(25,0)$ to $(55,0)$.

(c) Could she display 10 small and 20 large photos? We look at the graph to
see whether the point $(10,20)$ is in the solution region. It is not, so
Christy would not display 10 small and 20 large photos.

(d) Could she display 20 small and 10 large photos? We look at the graph to
see whether the point $(20,10)$ is in the solution region. It is, so
Christy could choose to display 20 small and 10 large photos.

When we use variables other than $x$ and $y$ to define an unknown
quantity, we must change the names of the axes of the graph as well.

**Example.** Omar needs to eat at least 800 calories before going to his
team practice. All he wants is hamburgers and cookies, and he doesn't want
to spend more than \$5. At the hamburger restaurant near his college, each
hamburger has 240 calories and costs \$1.40. Each cookie has 160 calories
and costs \$0.50.

(a) Write a system of inequalities to model this situation.

Let $h=$ the number of hamburgers and $c=$ the number of cookies. The
calories from the hamburgers, at 240 calories each, plus the calories from
the cookies, at 160 calories each, must be more than 800: $240h+160c\geq800$.
The amount spent on hamburgers, at \$1.40 each, plus the amount spent on
cookies, at \$0.50 each, must be no more than \$5.00: $1.40h+0.50c\leq5$.
The number of hamburgers and the number of cookies must each be greater
than or equal to zero: $h\geq0$, $c\geq0$. We have the system of
inequalities:

$$
\left\{\begin{array}{l} 240h+160c\geq800 \\ 1.40h+0.50c\leq5 \\ h\geq0 \\ c\geq0 \end{array}\right.
$$

(b) Graph the system. Since $h\geq0$ and $c\geq0$, our graph shows only
Quadrant I. To graph $240h+160c\geq800$, graph $240h+160c=800$ as a solid
line; testing $(0,0)$ makes the inequality false, so we shade the side that
does not contain $(0,0)$. To graph $1.40h+0.50c\leq5$, graph
$1.40h+0.50c=5$ as a solid line; testing $(0,0)$ makes the inequality true,
so we shade the side that contains $(0,0)$.

<div class="ap-figure">
<svg role="img" aria-label="Quadrant I only, axes labeled h for the number of hamburgers and c for the number of cookies. The solid boundary line 240h plus 160c equals 800 has the region above and to the right shaded. The solid boundary line 1.40h plus 0.50c equals 5 has the region below and to the left shaded. The two shadings overlap in a region bounded by the two lines and the axes, which is the solution to the system." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262 262" width="262" height="262" font-family="Helvetica, Arial, sans-serif">
  <line x1="61" y1="236" x2="61" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="96" y1="236" x2="96" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="131" y1="236" x2="131" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="236" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="201" y1="236" x2="201" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="236" x2="236" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="201" x2="236" y2="201" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="236" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="131" x2="236" y2="131" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="96" x2="236" y2="96" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="61" x2="236" y2="61" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="236" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,61 26,26 236,26 236,236 142.7,236" fill="currentColor" opacity="0.12" stroke="none"/>
  <polygon points="26,26 76,26 151,236 26,236" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="26" y1="236" x2="238" y2="236" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="236" stroke="currentColor" stroke-width="1"/>
  <polygon points="248,236 238,241 238,231" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="246" y="228" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">h</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">c</text>
  <line x1="61" y1="233" x2="61" y2="239" stroke="currentColor" stroke-width="1"/>
  <text x="61" y="251" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="96" y1="233" x2="96" y2="239" stroke="currentColor" stroke-width="1"/>
  <text x="96" y="251" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="131" y1="233" x2="131" y2="239" stroke="currentColor" stroke-width="1"/>
  <text x="131" y="251" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="166" y1="233" x2="166" y2="239" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="251" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="201" y1="233" x2="201" y2="239" stroke="currentColor" stroke-width="1"/>
  <text x="201" y="251" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="236" y1="233" x2="236" y2="239" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="251" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="23" y1="201" x2="29" y2="201" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="205" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="23" y1="166" x2="29" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="170" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="23" y1="131" x2="29" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="135" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="23" y1="96" x2="29" y2="96" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="100" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="23" y1="61" x2="29" y2="61" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="65" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="23" y1="26" x2="29" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="25.5" y1="60.3" x2="141.1" y2="233.7" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="146.7,242 137,236.5 145.3,230.9" fill="currentColor"/>
  <polygon points="20,52 29.7,57.5 21.4,63.1" fill="currentColor"/>
  <line x1="77.2" y1="29.4" x2="149.8" y2="232.6" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="153.1,242 145.1,234.3 154.5,230.9" fill="currentColor"/>
  <polygon points="73.9,20 81.9,27.7 72.5,31.1" fill="currentColor"/>
</svg>
</div>

The solution of the system is the region of the graph that is shaded the
darkest.

(c) Could he eat 3 hamburgers and 1 cookie? We look at the graph to see
whether the point $(3,2)$, three hamburgers and two cookies, is in the
solution region. It is, so Omar might choose to eat 3 hamburgers and 1
cookie.

(d) Could he eat 2 hamburgers and 4 cookies? We look at the graph to see
whether the point $(2,4)$ is in the solution region. It is, so Omar might
choose to eat 2 hamburgers and 4 cookies.

Tenison needs to eat at least an extra 1,000 calories a day to prepare for
running a marathon. He has only \$25 to spend on the extra food he needs
and will spend it on \$0.75 donuts, which have 360 calories each, and \$2
energy drinks, which have 110 calories each.

{{< fillin
  question="Let $d$ be the number of donuts and $e$ be the number of energy drinks Tenison buys. Write an inequality that models needing at least 1,000 extra calories, given each donut has 360 calories and each energy drink has 110 calories."
  answer="360d+110e\geq1000"
  answerDisplay="$360d+110e\geq1000$"
  hint="Multiply calories per item by the number of items, add the two, and use 'at least' to choose the inequality symbol."
>}}

{{< multiplechoice
  question="Tenison's system is $\left\{\begin{array}{l} 360d+110e\geq1000 \\ 0.75d+2e\leq25 \end{array}\right.$, where $d$ is the number of donuts and $e$ is the number of energy drinks. Can he buy 8 donuts and 4 energy drinks and satisfy both his caloric needs and his budget?"
  hint="Check both inequalities: $360(8)+110(4)=3320$, and $0.75(8)+2(4)=14$."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

## Key terms

**system of linear inequalities** — two or more linear inequalities grouped
together. **solutions of a system of linear inequalities** — the values of
the variables that make all the inequalities in the system true, shown as a
shaded region in the $x,y$ coordinate system that includes all the points
whose ordered pairs make the inequalities true.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 4.7: Graphing Systems of Linear Inequalities](https://openstax.org/books/intermediate-algebra-2e/pages/4-7-graphing-systems-of-linear-inequalities) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated the coordinate-plane figures as accessible interactive graphs; omitted the Be Prepared quiz, Media links, Self Check, and Section Exercises; and converted the source Try Its into interactive exercises with instant feedback.</small>
