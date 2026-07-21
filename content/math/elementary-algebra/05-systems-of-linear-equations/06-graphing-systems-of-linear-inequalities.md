---
title: Graphing Systems of Linear Inequalities
description: >-
  Determining whether an ordered pair is a solution of a system of linear
  inequalities and solving a system of linear inequalities by graphing the
  overlapping shaded regions — adapted from OpenStax Elementary Algebra 2e,
  Section 5.6.
source_section: "5.6"
weight: 6
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** determine whether an
  ordered pair is a solution of a system of linear inequalities, solve a
  system of linear inequalities by graphing, and solve applications of
  systems of inequalities.
{{< /callout >}}

The definition of a system of linear inequalities is very similar to the
definition of a system of linear equations — but it has inequalities
instead of equations. To solve a system of linear inequalities, we find the
values of the variables that are solutions to *both* inequalities, and we
show that solution set as a shaded region on a graph.

## Determine Whether an Ordered Pair Is a Solution of a System of Linear Inequalities

{{< callout type="info" >}}
  **System of linear inequalities.** Two or more linear inequalities grouped
  together form a **system of linear inequalities**.
{{< /callout >}}

A system of two linear inequalities looks like this:

$$
\begin{cases} x + 4y \geq 10 \\ 3x - 2y < 12 \end{cases}
$$

{{< callout type="info" >}}
  **Solutions of a system of linear inequalities.** Solutions of a system of
  linear inequalities are the values of the variables that make all the
  inequalities true. The solution is shown as a shaded region in the
  $x$-$y$ coordinate system that includes all the points whose ordered pairs
  make the inequalities true.
{{< /callout >}}

To determine whether an ordered pair is a solution to a system of two
inequalities, we substitute the values of the variables into each
inequality. If the ordered pair makes both inequalities true, it is a
solution to the system.

**Example.** Determine whether each ordered pair is a solution to the
system $\begin{cases} x + 4y \geq 10 \\ 3x - 2y < 12 \end{cases}$:
(a) $(-2, 4)$ (b) $(3, 1)$.

(a) Substituting $x = -2, y = 4$ into both inequalities:

$$
-2 + 4(4) \geq 10 \qquad 3(-2) - 2(4) < 12
$$

$$
14 \geq 10 \ \text{true} \qquad -14 < 12 \ \text{true}
$$

Both inequalities are true, so $(-2, 4)$ is a solution to the system.

(b) Substituting $x = 3, y = 1$:

$$
3 + 4(1) \geq 10 \qquad 3(3) - 2(1) < 12
$$

$$
7 \geq 10 \ \text{false} \qquad 7 < 12 \ \text{true}
$$

The ordered pair $(3, 1)$ makes one inequality true but the other false, so
it is *not* a solution to the system.

{{< multiplechoice
  question="Is the ordered pair $(3, -1)$ a solution to the system: $x - 5y > 10$ and $2x + 3y > -2$?"
  hint="Substitute $x = 3$, $y = -1$ into both inequalities. If even one comes out false, the pair is not a solution."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is the ordered pair $(6, -3)$ a solution to the system: $x - 5y > 10$ and $2x + 3y > -2$?"
  hint="Substitute $x = 6$, $y = -3$ into both inequalities and check that both come out true."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

## Solve a System of Linear Inequalities by Graphing

The solution to a single linear inequality is the region on one side of its
boundary line containing all the points that make the inequality true. The
solution to a system of two linear inequalities is a region containing the
solutions to *both* inequalities. To find it, we graph each inequality
separately on the same grid, then locate the region where the two shadings
overlap.

{{< callout type="info" >}}
  **Solve a system of linear inequalities by graphing.**

  1. Graph the first inequality: graph its boundary line, then shade in the
     side of the boundary line where the inequality is true.
  2. On the same grid, graph the second inequality: graph its boundary line,
     then shade in the side of that boundary line where the inequality is
     true.
  3. The solution is the region where the shading from both inequalities
     overlaps.
  4. Check by choosing a point in the overlapping region and verifying that
     it makes both inequalities true.
{{< /callout >}}

**Example.** Solve the system by graphing: $\begin{cases} y \geq 2x - 1 \\ y < x + 1 \end{cases}$

We graph the boundary line $y = 2x - 1$ as a solid line, since the
inequality is $\geq$. Testing $(0, 0)$: is $0 \geq 2(0) - 1$? Since
$0 \geq -1$ is true, we shade the side containing $(0, 0)$ — above and to
the left of the line.

On the same grid, we graph the boundary line $y = x + 1$ as a dashed line,
since the inequality is $<$. Testing $(0, 0)$ again: is $0 < 0 + 1$? Since
this is true, we shade the side containing $(0, 0)$ — below and to the
right of this line.

<div class="ap-figure">
<svg role="img" aria-label="The boundary line y equals 2x minus 1 is solid, with the region above and to the left shaded (satisfying y greater than or equal to 2x minus 1). The boundary line y equals x plus 1 is dashed, with the region below and to the right shaded (satisfying y less than x plus 1). The two shadings overlap in a wedge-shaped region below and to the left of the point (2, 3), which is the solution to the system." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 332" width="332" height="332" font-family="Helvetica, Arial, sans-serif">
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
  <polygon points="26,26 246,26 106,306 26,306" fill="currentColor" opacity="0.12" stroke="none"/>
  <polygon points="286,26 306,26 306,306 26,306 26,286" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="166" x2="308" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="24" x2="166" y2="308" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,166 308,171 308,161" fill="currentColor"/>
  <polygon points="166,14 171,24 161,24" fill="currentColor"/>
  <polygon points="14,166 24,161 24,171" fill="currentColor"/>
  <polygon points="166,318 161,308 171,308" fill="currentColor"/>
  <text x="316" y="158" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="107.5" y1="303.1" x2="244.5" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="249,20 249,31.2 240.1,26.7" fill="currentColor"/>
  <polygon points="103,312 103,300.8 111.9,305.3" fill="currentColor"/>
  <line x1="27.1" y1="284.9" x2="284.9" y2="27.1" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="292,20 288.5,30.6 281.4,23.5" fill="currentColor"/>
  <polygon points="20,292 23.5,281.4 30.6,288.5" fill="currentColor"/>
  <text x="76" y="66" font-size="13" fill="currentColor" text-anchor="middle">y ≥ 2x − 1</text>
  <text x="246" y="246" font-size="13" fill="currentColor" text-anchor="middle">y &lt; x + 1</text>
  <text x="126" y="222" font-size="13" fill="currentColor" text-anchor="middle">solution</text>
</svg>
</div>

The point where the two boundary lines cross, $(2, 3)$, is not itself part
of the solution, since it does not satisfy $y < x + 1$. The solution to the
system is the darker, doubly-shaded wedge below and to the left of that
crossing point.

We check by choosing a test point in that wedge, such as $(-1, -1)$:

{{< fillin
  question="Solve the system $y >= 2x - 1$ and $y < x + 1$ by graphing, then test the point $(-1, -1)$. Substitute it into $y < x + 1$ and simplify the right side."
  answer="-1<0"
  answerDisplay="$-1 < 0$, true"
  hint="Substitute $x = -1$ into $x + 1$: $-1 + 1$ simplifies to 0."
>}}

Sometimes the boundary lines of a system are parallel. Depending on the
direction of the shading, a system like this may have no solution at all.

**Example.** Solve the system by graphing: $\begin{cases} 4x + 3y \geq 12 \\ y < -\tfrac{4}{3}x + 1 \end{cases}$

We graph the boundary line $4x + 3y = 12$ as a solid line (intercepts
$x = 3$, $y = 4$). Testing $(0, 0)$: is $4(0) + 3(0) \geq 12$? Since this
is false, we shade the side that does *not* contain $(0, 0)$.

We graph $y = -\tfrac{4}{3}x + 1$ as a dashed line — it has the same slope,
$-\tfrac{4}{3}$, so it is parallel to the first boundary line. Testing
$(0, 0)$: is $0 < 1$? Since this is true, we shade the side that *does*
contain $(0, 0)$.

<div class="ap-figure">
<svg role="img" aria-label="The boundary line 4x plus 3y equals 12 is solid, with the region above and to the right shaded (satisfying 4x plus 3y greater than or equal to 12). The parallel boundary line y equals negative four-thirds x plus 1 is dashed, with the region below and to the left shaded (satisfying y less than negative four-thirds x plus 1). The two shaded regions never touch, so the system has no solution." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 332" width="332" height="332" font-family="Helvetica, Arial, sans-serif">
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
  <polygon points="121,26 306,26 306,272.7" fill="currentColor" opacity="0.12" stroke="none"/>
  <polygon points="26,26 76,26 286,306 26,306" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="166" x2="308" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="24" x2="166" y2="308" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,166 308,171 308,161" fill="currentColor"/>
  <polygon points="166,14 171,24 161,24" fill="currentColor"/>
  <polygon points="14,166 24,161 24,171" fill="currentColor"/>
  <polygon points="166,318 161,308 171,308" fill="currentColor"/>
  <text x="316" y="158" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="122.5" y1="28" x2="306" y2="272.7" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="312,280.7 302,275.7 310,269.7" fill="currentColor"/>
  <polygon points="116.5,20 126.5,25 118.5,31" fill="currentColor"/>
  <line x1="77.5" y1="28" x2="284.5" y2="304" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="290.5,312 280.5,307 288.5,301" fill="currentColor"/>
  <polygon points="71.5,20 81.5,25 73.5,31" fill="currentColor"/>
  <text x="238" y="76" font-size="13" fill="currentColor" text-anchor="middle">4x + 3y ≥ 12</text>
  <text x="86" y="238" font-size="13" fill="currentColor" text-anchor="middle">y &lt; −4/3 x + 1</text>
</svg>
</div>

There is no point in both shaded regions, so this system has **no
solution**.

{{< fillin
  question="For the system $4x + 3y >= 12$ and $y < -\tfrac{4}{3} x + 1$, substitute $x = 0$, $y = 0$ into $4x + 3y >= 12$ and simplify the left side."
  answer="0>=12"
  answerDisplay="$0 >= 12$, false"
  hint="$4(0) + 3(0)$ simplifies to 0, so the inequality becomes $0 >= 12$."
>}}

## Solve Applications of Systems of Inequalities

To solve an application of a system of inequalities, we translate each
condition into an inequality, then graph the system to see the region that
contains all the solutions. Many realistic situations restrict both
variables to be positive, so the graph shows only Quadrant I.

**Example.** Christy sells photographs at a booth at a street fair. At the
start of the day, she wants to display at least 25 photos. Each small photo
she displays costs her \$4 and each large photo costs her \$10, and she
doesn't want to spend more than \$200 on photos to display.

(a) Write a system of inequalities to model this situation. Let $x$ be the
number of small photos and $y$ be the number of large photos. She wants at
least 25 photos total, so $x + y \geq 25$. The cost — \$4 per small photo
plus \$10 per large photo — must be no more than \$200, so
$4x + 10y \leq 200$:

$$
\begin{cases} x + y \geq 25 \\ 4x + 10y \leq 200 \end{cases}
$$

(b) Graph the system. We graph $x + y = 25$ as a solid line and shade the
side away from the origin (since $(0,0)$ fails $x + y \geq 25$). We graph
$4x + 10y = 200$ as a solid line and shade the side containing the origin
(since $(0,0)$ satisfies $4x + 10y \leq 200$). Because this is a real-world
situation, we only graph Quadrant I, where $x \geq 0$ and $y \geq 0$.

<div class="ap-figure">
<svg role="img" aria-label="Quadrant I only, axes labeled x for small photos and y for large photos. The solid boundary line x plus y equals 25 has the region above and to the right shaded. The solid boundary line 4x plus 10y equals 200 has the region below and to the left shaded. The two shadings overlap in a region bounded by the two lines and the axes, which is the solution to the system." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 327 327" width="327" height="327" font-family="Helvetica, Arial, sans-serif">
  <line x1="51" y1="301" x2="51" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="76" y1="301" x2="76" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="101" y1="301" x2="101" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="301" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="151" y1="301" x2="151" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="301" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="201" y1="301" x2="201" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="301" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="251" y1="301" x2="251" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="276" y1="301" x2="276" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="301" y1="301" x2="301" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="276" x2="301" y2="276" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="251" x2="301" y2="251" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="301" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="201" x2="301" y2="201" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="176" x2="301" y2="176" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="151" x2="301" y2="151" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="301" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="101" x2="301" y2="101" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="76" x2="301" y2="76" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="51" x2="301" y2="51" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="301" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 301,26 301,301 151,301 26,176" fill="currentColor" opacity="0.12" stroke="none"/>
  <polygon points="26,201 276,301 26,301" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="26" y1="301" x2="303" y2="301" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="301" stroke="currentColor" stroke-width="1"/>
  <polygon points="313,301 303,306 303,296" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="311" y="293" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="27.1" y1="177.1" x2="149.9" y2="299.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="157,307 146.4,303.5 153.5,296.4" fill="currentColor"/>
  <polygon points="20,170 30.6,173.5 23.5,180.6" fill="currentColor"/>
  <line x1="29.3" y1="202.3" x2="281.7" y2="303.3" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="291,307 279.9,307.9 283.6,298.6" fill="currentColor"/>
  <polygon points="20,198.6 31.1,197.7 27.4,207" fill="currentColor"/>
  <text x="181" y="146" font-size="13" fill="currentColor" text-anchor="middle">x + y ≥ 25</text>
  <text x="76" y="281" font-size="13" fill="currentColor" text-anchor="middle">4x + 10y ≤ 200</text>
  <text x="76" y="316" font-size="13" fill="currentColor" text-anchor="middle">10</text>
  <text x="126" y="316" font-size="13" fill="currentColor" text-anchor="middle">20</text>
  <text x="176" y="316" font-size="13" fill="currentColor" text-anchor="middle">30</text>
  <text x="226" y="316" font-size="13" fill="currentColor" text-anchor="middle">40</text>
  <text x="276" y="316" font-size="13" fill="currentColor" text-anchor="middle">50</text>
  <text x="21" y="255" font-size="13" fill="currentColor" text-anchor="end">10</text>
  <text x="21" y="205" font-size="13" fill="currentColor" text-anchor="end">20</text>
  <text x="21" y="155" font-size="13" fill="currentColor" text-anchor="end">30</text>
  <text x="21" y="105" font-size="13" fill="currentColor" text-anchor="end">40</text>
  <text x="21" y="55" font-size="13" fill="currentColor" text-anchor="end">50</text>
</svg>
</div>

The solution is the darker, doubly-shaded region bounded by the two lines
and the axes.

(c) Could she display 10 small and 20 large photos? Testing $(10, 20)$:
$10 + 20 = 30 \geq 25$ is true, but
$4(10) + 10(20) = 40 + 200 = 240 \leq 200$ is false. Since $(10, 20)$ is not
in the solution region, she could *not* display 10 small and 20 large
photos.

(d) Could she display 20 small and 10 large photos? Testing $(20, 10)$:
$20 + 10 = 30 \geq 25$ is true, and
$4(20) + 10(10) = 80 + 100 = 180 \leq 200$ is also true. Since $(20, 10)$ is
in the solution region, she *could* display 20 small and 10 large photos.

{{< multiplechoice
  question="For Christy's system $x + y >= 25$ and $4x + 10y <= 200$, could she display 30 small and 5 large photos?"
  hint="Check both inequalities: $30 + 5 = 35$, and $4(30) + 10(5) = 170$."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="For Christy's system $x + y >= 25$ and $4x + 10y <= 200$, could she display 5 small and 15 large photos?"
  hint="Check the first inequality first: is $5 + 15 >= 25$ true or false?"
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

## Key terms

**system of linear inequalities** — two or more linear inequalities grouped
together. **solutions of a system of linear inequalities** — the ordered
pairs $(x, y)$ that make every inequality in the system true, shown as a
shaded region in the $x$-$y$ coordinate system where the shadings of the
individual inequalities overlap.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 5.6: Graphing Systems of Linear Inequalities](https://openstax.org/books/elementary-algebra-2e/pages/5-6-graphing-systems-of-linear-inequalities) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the overlapping shaded-region figures as accessible inline SVGs; condensed the worked examples; omitted the Be Prepared quiz, Media links, Self Check checklist, and Section Exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
