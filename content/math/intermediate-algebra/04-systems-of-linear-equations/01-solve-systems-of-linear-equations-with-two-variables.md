---
title: Solve Systems of Linear Equations with Two Variables
description: >-
  Determining whether an ordered pair is a solution of a system of equations,
  solving a system of two linear equations by graphing, by substitution, and
  by elimination, and choosing the most convenient method — adapted from
  OpenStax Intermediate Algebra 2e, Section 4.1.
source_section: "4.1"
weight: 1
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** determine whether an
  ordered pair is a solution of a system of equations, solve a system of
  linear equations by graphing, solve a system of equations by substitution,
  solve a system of equations by elimination, and choose the most convenient
  method to solve a system of linear equations.
{{< /callout >}}

## Determine whether an ordered pair is a solution of a system of equations

A linear equation in two variables has infinitely many solutions — its graph
is a line, and every point on that line is a solution to the equation. Now we
will work with two or more linear equations grouped together, which is known
as a **system of linear equations**.

{{< callout type="info" >}}
  **System of linear equations.** When two or more linear equations are
  grouped together, they form a system of linear equations.
{{< /callout >}}

An example of a system of two linear equations is shown below. A brace shows
that the two equations are grouped together to form a system:

$$\left\{\begin{array}{l} 2x + y = 7 \\ x - 2y = 6 \end{array}\right.$$

A linear equation in two variables, such as $2x+y=7$, has an infinite number
of solutions — its graph is a line, and every point on the line is a
solution to the equation. To solve a system of two linear equations, we want
to find the values of the variables that are solutions to *both* equations.
In other words, we are looking for the ordered pairs $(x,y)$ that make both
equations true. These are called the **solutions of a system of equations**.

{{< callout type="info" >}}
  **Solutions of a system of equations.** The solutions of a system of
  equations are the values of the variables that make *all* the equations
  true. A solution of a system of two linear equations is represented by an
  ordered pair $(x,y)$.
{{< /callout >}}

To determine if an ordered pair is a solution to a system of two equations,
we substitute the values of the variables into each equation. If the ordered
pair makes both equations true, it is a solution to the system.

**Example.** Determine whether the ordered pair is a solution to the system
$\left\{\begin{array}{l} x-y=-1 \\ 2x-y=-5 \end{array}\right.$: (a)
$(-2,-1)$ (b) $(-4,-3)$.

(a) Substitute $x=-2$ and $y=-1$ into both equations.

$$
\begin{array}{lrcl}
x-y=-1: & -2-(-1) &\overset{?}{=}& -1 \\[4pt]
& -1 &=& -1\ \checkmark \\[4pt]
2x-y=-5: & 2(-2)-(-1) &\overset{?}{=}& -5 \\[4pt]
& -3 &\neq& -5
\end{array}
$$

$(-2,-1)$ makes the first equation true but not the second, so it does not
make *both* equations true — it is not a solution to the system.

(b) Substitute $x=-4$ and $y=-3$ into both equations.

$$
\begin{array}{lrcl}
x-y=-1: & -4-(-3) &\overset{?}{=}& -1 \\[4pt]
& -1 &=& -1\ \checkmark \\[4pt]
2x-y=-5: & 2(-4)-(-3) &\overset{?}{=}& -5 \\[4pt]
& -5 &=& -5\ \checkmark
\end{array}
$$

$(-4,-3)$ makes both equations true, so it *is* a solution to the system.

{{< multiplechoice
  question="Is $(0,0)$ a solution to the system $\{3x+y=0,\ x+2y=-5\}$?"
  hint="Substitute x=0 and y=0 into both equations. The first equation is true, but the second gives 0, not -5."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(-2,2)$ a solution to the system $\{x-3y=-8,\ -3x-y=4\}$?"
  hint="Substitute x=-2 and y=2 into both equations and check whether each one is true."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

## Solve a system of linear equations by graphing

The graph of a linear equation is a line, and every point on that line is a
solution to the equation. For a system of two equations, we graph *two*
lines on the same coordinate plane. Then we can see all the points that are
solutions to each equation — and by finding what the two lines have in
common, we find the solution to the system.

Most linear equations in one variable have one solution, but some, called
contradictions, have no solutions, and for others, called identities, all
numbers are solutions. Similarly, when we solve a system of two linear
equations represented by a graph of two lines in the same plane, there are
three possible cases.

<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', margin: '1.5rem 0' }}>
  <div style={{ textAlign: 'center' }}>
    <div class="ap-figure">
<svg role="img" aria-label="A coordinate grid showing two lines, y equals x minus 1 and y equals negative x plus 3, crossing at a single point." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="39.1" y1="168.9" x2="168.9" y2="39.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="176,32 172.5,42.6 165.4,35.5" fill="currentColor"/>
  <polygon points="32,176 35.5,165.4 42.6,172.5" fill="currentColor"/>
  <line x1="63.1" y1="27.1" x2="168.9" y2="132.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="176,140 165.4,136.5 172.5,129.4" fill="currentColor"/>
  <polygon points="56,20 66.6,23.5 59.5,30.6" fill="currentColor"/>
</svg>
</div>
    <p style={{ fontWeight: 600, margin: '0.5rem 0 0' }}>The lines intersect.</p>
    <p style={{ margin: 0, fontSize: '0.9rem' }}>One solution to the system.</p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <div class="ap-figure">
<svg role="img" aria-label="A coordinate grid showing two parallel lines, y equals x minus 1 and y equals x plus 2, that never cross." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="39.1" y1="168.9" x2="168.9" y2="39.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="176,32 172.5,42.6 165.4,35.5" fill="currentColor"/>
  <polygon points="32,176 35.5,165.4 42.6,172.5" fill="currentColor"/>
  <line x1="27.1" y1="144.9" x2="144.9" y2="27.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="152,20 148.5,30.6 141.4,23.5" fill="currentColor"/>
  <polygon points="20,152 23.5,141.4 30.6,148.5" fill="currentColor"/>
</svg>
</div>
    <p style={{ fontWeight: 600, margin: '0.5rem 0 0' }}>The lines are parallel.</p>
    <p style={{ margin: 0, fontSize: '0.9rem' }}>No solution to this system.</p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <div class="ap-figure">
<svg role="img" aria-label="A coordinate grid showing a single line, since both equations of the system graph as the same line." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="39.1" y1="168.9" x2="168.9" y2="39.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="176,32 172.5,42.6 165.4,35.5" fill="currentColor"/>
  <polygon points="32,176 35.5,165.4 42.6,172.5" fill="currentColor"/>
</svg>
</div>
    <p style={{ fontWeight: 600, margin: '0.5rem 0 0' }}>Both equations give the same line.</p>
    <p style={{ margin: 0, fontSize: '0.9rem' }}>Infinitely many solutions.</p>
  </div>
</div>

Each time we demonstrate a new method, we will use it on the same system of
linear equations, $\left\{\begin{array}{l} 2x+y=7 \\ x-2y=6 \end{array}\right.$.
At the end of the section you will decide which method was the most
convenient way to solve this system.

**Example. How to solve a system of equations by graphing.** Solve the
system by graphing: $\left\{\begin{array}{l} 2x+y=7 \\ x-2y=6 \end{array}\right.$.

To graph the first line, write $2x+y=7$ in slope–intercept form:
$y=-2x+7$, so $m=-2$ and $b=7$. To graph the second line, use its
intercepts: $x-2y=6$ passes through $(0,-3)$ and $(6,0)$. Graph both lines
on the same rectangular coordinate system, then look for where they cross.

<div class="ap-figure">
<svg role="img" aria-label="Two lines, 2x plus y equals 7 and x minus 2y equals 6, crossing at the point (4, -1)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 372" width="292" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="346" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="346" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="266" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="266" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="266" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="266" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="266" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="266" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="266" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="266" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="266" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="266" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="266" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="266" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="226" x2="268" y2="226" stroke="currentColor" stroke-width="1"/>
  <line x1="106" y1="24" x2="106" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,226 268,231 268,221" fill="currentColor"/>
  <polygon points="106,14 111,24 101,24" fill="currentColor"/>
  <polygon points="14,226 24,221 24,231" fill="currentColor"/>
  <polygon points="106,358 101,348 111,348" fill="currentColor"/>
  <text x="276" y="218" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="114" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="77.5" y1="28.9" x2="234.5" y2="343.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="239,352 230.1,345.3 239,340.8" fill="currentColor"/>
  <polygon points="73,20 81.9,26.7 73,31.2" fill="currentColor"/>
  <line x1="28.9" y1="324.5" x2="263.1" y2="207.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="272,203 265.3,211.9 260.8,203" fill="currentColor"/>
  <polygon points="20,329 26.7,320.1 31.2,329" fill="currentColor"/>
  <circle cx="186" cy="246" r="4" fill="currentColor"/>
  <text x="197.2" y="234.8" font-size="13" fill="currentColor" text-anchor="start">(4, −1)</text>
  <text x="216.8" y="275.8" font-size="13" fill="currentColor" text-anchor="start">2x + y = 7</text>
  <text x="90.2" y="315.8" font-size="13" fill="currentColor" text-anchor="start">x − 2y = 6</text>
</svg>
</div>

The lines intersect at $(4,-1)$. Since the lines intersect, we identify the
point of intersection and check that it is a solution to both equations.

$$
\begin{array}{lrcl}
2x+y=7: & 2(4)+(-1) &\overset{?}{=}& 7 \\[4pt]
& 7 &=& 7\ \checkmark \\[4pt]
x-2y=6: & 4-2(-1) &\overset{?}{=}& 6 \\[4pt]
& 6 &=& 6\ \checkmark
\end{array}
$$

The solution to the system is $(4,-1)$.

{{< fillin
  question="Solve the system by graphing: $\{x-3y=-3,\ x+y=5\}$. Enter the point of intersection as an ordered pair."
  answer="(3,2)"
  answerDisplay="$(3,2)$"
  hint="From the second equation, x = 5 - y. Substitute into the first equation to find y first, then find x."
>}}

{{< callout type="info" >}}
  **Solve a system of linear equations by graphing.**

  1. Graph the first equation.
  2. Graph the second equation on the same rectangular coordinate system.
  3. Determine whether the lines intersect, are parallel, or are the same
     line.
  4. Identify the solution to the system.
     - If the lines intersect, identify the point of intersection. Check
       that it is a solution to both equations. This is the solution to the
       system.
     - If the lines are parallel, the system has no solution.
     - If the lines are the same, the system has an infinite number of
       solutions.
  5. Check the solution in both equations.
{{< /callout >}}

In the next example, we will first rewrite both equations in
slope–intercept form, since that makes them quick to graph.

**Example.** Solve the system by graphing: $\left\{\begin{array}{l}
3x+y=-1 \\ 2x+y=0 \end{array}\right.$.

We solve both equations for $y$ so we can graph them using their slopes and
$y$-intercepts.

$$
\begin{array}{lrcl}
\text{Solve the first equation for }y. & 3x+y &=& -1 \\[4pt]
\text{Simplify.} & y &=& -3x-1 \\[4pt]
\text{Solve the second equation for }y. & 2x+y &=& 0 \\[4pt]
\text{Simplify.} & y &=& -2x
\end{array}
$$

<div class="ap-figure">
<svg role="img" aria-label="Two lines, 3x plus y equals negative 1 and 2x plus y equals 0, crossing at the point (-1, 2)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 372" width="212" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="346" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="346" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="186" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="186" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="186" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="186" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="186" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="186" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="186" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="186" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="186" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="186" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="186" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="186" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="186" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="186" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="186" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="186" x2="188" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="106" y1="24" x2="106" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="198,186 188,191 188,181" fill="currentColor"/>
  <polygon points="106,14 111,24 101,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="106,358 101,348 111,348" fill="currentColor"/>
  <text x="196" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="114" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="47.2" y1="29.5" x2="151.5" y2="342.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="154.7,352 146.8,344.1 156.2,340.9" fill="currentColor"/>
  <polygon points="44,20 51.9,27.9 42.4,31.1" fill="currentColor"/>
  <line x1="27.5" y1="28.9" x2="184.5" y2="343.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="189,352 180.1,345.3 189,340.8" fill="currentColor"/>
  <polygon points="23,20 31.9,26.7 23,31.2" fill="currentColor"/>
  <circle cx="86" cy="146" r="4" fill="currentColor"/>
  <text x="74.8" y="166.2" font-size="13" fill="currentColor" text-anchor="end">(−1, 2)</text>
  <text x="115.1" y="288" font-size="13" fill="currentColor" text-anchor="end">y = −3x − 1</text>
  <text x="140.2" y="222.7" font-size="13" fill="currentColor" text-anchor="start">y = −2x</text>
</svg>
</div>

The lines intersect at $(-1,2)$. Check the solution in both equations:

$$
\begin{array}{lrcl}
3x+y=-1: & 3(-1)+2 &\overset{?}{=}& -1 \\[4pt]
& -1 &=& -1\ \checkmark \\[4pt]
2x+y=0: & 2(-1)+2 &\overset{?}{=}& 0 \\[4pt]
& 0 &=& 0\ \checkmark
\end{array}
$$

The solution is $(-1,2)$.

In all the systems of linear equations so far, the lines intersected and
the solution was one point. In the next two examples we'll look at a system
that has no solution and at a system that has an infinite number of
solutions.

**Example.** Solve the system by graphing: $\left\{\begin{array}{l}
y=\tfrac{1}{2}x-3 \\ x-2y=4 \end{array}\right.$.

The first equation is already solved for $y$: $m=\tfrac{1}{2}$, $b=-3$. To
graph the second equation, solve it for $y$ as well: $x-2y=4$ becomes
$y=\tfrac{1}{2}x-2$, so $m=\tfrac{1}{2}$, $b=-2$.

<div class="ap-figure">
<svg role="img" aria-label="Two parallel lines, y equals one-half x minus 3 and x minus 2y equals 4, which never intersect." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 332" width="372" height="332" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="306" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="306" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="306" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="306" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="306" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="306" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="306" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="306" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="306" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="306" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="306" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="306" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="306" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="306" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="306" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="306" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="346" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="346" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="346" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="346" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="346" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="346" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="346" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="346" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="346" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="346" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="346" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="348" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="308" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,146 348,151 348,141" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="186,318 181,308 191,308" fill="currentColor"/>
  <text x="356" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="28.9" y1="284.5" x2="343.1" y2="127.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="352,123 345.3,131.9 340.8,123" fill="currentColor"/>
  <polygon points="20,289 26.7,280.1 31.2,289" fill="currentColor"/>
  <line x1="28.9" y1="264.5" x2="343.1" y2="107.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="352,103 345.3,111.9 340.8,103" fill="currentColor"/>
  <polygon points="20,269 26.7,260.1 31.2,269" fill="currentColor"/>
  <text x="286.1" y="177.8" font-size="13" fill="currentColor" text-anchor="start">y = ½x − 3</text>
  <text x="271.8" y="129.2" font-size="13" fill="currentColor" text-anchor="end">x − 2y = 4</text>
</svg>
</div>

The lines are parallel. Since no point is on both lines, there is no
ordered pair that makes both equations true. There is no solution to this
system.

{{< multiplechoice
  question="Solve the system by graphing: $\{y=-\tfrac{1}{4}x+2,\ x+4y=-8\}$. How many solutions does the system have?"
  hint="Solve the second equation for y and compare its slope and y-intercept to the first equation."
  answer="no solution"
>}}
one solution
no solution
infinitely many solutions
{{< /multiplechoice >}}

Sometimes the equations in a system represent the same line. Since every
point on the line makes both equations true, there are infinitely many
ordered pairs that make both equations true — there are infinitely many
solutions to the system.

**Example.** Solve the system by graphing: $\left\{\begin{array}{l} y=2x-3
\\ -6x+3y=-9 \end{array}\right.$.

The first equation is already solved for $y$: $m=2$, $b=-3$. If you write
the second equation in slope–intercept form, you'll find it has the same
slope and same $y$-intercept.

<div class="ap-figure">
<svg role="img" aria-label="A single line, since the equations y equals 2x minus 3 and negative 6x plus 3y equals negative 9 graph as the same line." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 372" width="292" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="346" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="346" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="266" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="266" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="266" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="266" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="266" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="266" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="266" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="266" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="266" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="266" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="266" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="266" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="268" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,146 268,151 268,141" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="146,358 141,348 151,348" fill="currentColor"/>
  <text x="276" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="77.5" y1="343.1" x2="234.5" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="239,20 239,31.2 230.1,26.7" fill="currentColor"/>
  <polygon points="73,352 73,340.8 81.9,345.3" fill="currentColor"/>
  <text x="216.8" y="104.2" font-size="13" fill="currentColor" text-anchor="start">y = 2x − 3</text>
</svg>
</div>

The lines are the same! Since every point on the line makes both equations
true, there are infinitely many ordered pairs that make both equations
true. There are infinitely many solutions to this system.

{{< multiplechoice
  question="Solve the system by graphing: $\{y=-3x-6,\ 6x+2y=-12\}$. How many solutions does the system have?"
  hint="Solve the second equation for y — if it matches the first equation exactly, the lines are coincident."
  answer="infinitely many solutions"
>}}
one solution
no solution
infinitely many solutions
{{< /multiplechoice >}}

{{< callout type="info" >}}
  **Coincident lines.** Coincident lines have the same slope and the same
  $y$-intercept.
{{< /callout >}}

The systems we've graphed so far had at least one solution. A system of
equations that has at least one solution is called a *consistent* system. A
system with parallel lines, like the one above, has no solution — we call a
system like this *inconsistent*.

{{< callout type="info" >}}
  **Consistent and inconsistent systems.** A **consistent system** of
  equations is a system of equations with at least one solution. An
  **inconsistent system** of equations is a system of equations with no
  solution.
{{< /callout >}}

We also categorize the equations in a system as *independent* or
*dependent*. If two equations are independent, they each have their own set
of solutions — intersecting lines and parallel lines are both independent.
If two equations are dependent, all the solutions of one equation are also
solutions of the other equation; when we graph two dependent equations, we
get coincident lines.

{{< callout type="info" >}}
  **Independent and dependent equations.** Two equations are **independent**
  if they have different solutions. Two equations are **dependent** if all
  the solutions of one equation are also solutions of the other equation.
{{< /callout >}}

| Lines | Intersecting | Parallel | Coincident |
| :--- | :---: | :---: | :---: |
| Number of solutions | $1$ point | No solution | Infinitely many |
| Consistent/inconsistent | Consistent | Inconsistent | Consistent |
| Dependent/independent | Independent | Independent | Dependent |

We can tell which case we're in *without graphing*, just by comparing the
slopes and intercepts of the two lines. Write each equation in
slope–intercept form and compare.

**Example.** Without graphing, determine the number of solutions and then
classify the system of equations: (a) $\left\{\begin{array}{l} y=3x-1 \\
6x-2y=12 \end{array}\right.$ (b) $\left\{\begin{array}{l} 2x+y=-3 \\
x-5y=5 \end{array}\right.$.

(a) The first equation is already in slope–intercept form. Write the second
equation in slope–intercept form too:

$$
\begin{array}{lrcl}
\text{The first equation is already in this form.} & y &=& 3x-1 \\[4pt]
\text{Write the second equation in slope–intercept form.} & 6x-2y &=& 12 \\[4pt]
& -2y &=& -6x+12 \\[4pt]
& y &=& 3x-6
\end{array}
$$

Since the slopes are the same ($m=3$) and the $y$-intercepts are different
($-1$ and $-6$), the lines are parallel. A system of equations whose graphs
are parallel lines has no solution and is inconsistent and independent.

(b) Write both equations in slope–intercept form:

$$
\begin{array}{lrcl}
\text{Solve the first equation for }y. & 2x+y &=& -3 \\[4pt]
& y &=& -2x-3 \\[4pt]
\text{Solve the second equation for }y. & x-5y &=& 5 \\[4pt]
& -5y &=& -x+5 \\[4pt]
& y &=& \tfrac{1}{5}x-1
\end{array}
$$

Since the slopes are different, the lines intersect. A system of equations
whose graphs intersect has one solution and is consistent and independent.

{{< fillin
  question="Without graphing, compare the system $\{y=-2x-4,\ 4x+2y=9\}$. Solve the second equation for y. What is its slope?"
  answer="-2"
  hint="Subtract 4x from both sides, then divide every term by 2."
>}}

{{< multiplechoice
  question="The system $\{y=-2x-4,\ 4x+2y=9\}$ has two lines with the same slope but different y-intercepts. How many solutions does the system have?"
  hint="Same slope with different intercepts means the lines are parallel — they never meet."
  answer="no solution"
>}}
one solution
no solution
infinitely many solutions
{{< /multiplechoice >}}

Solving systems of linear equations by graphing is a good way to visualize
the types of solutions that may result. However, there are many cases where
solving a system by graphing is inconvenient or imprecise. If the graphs
extend beyond a small grid, graphing the lines may be cumbersome. And if the
solutions to the system are not integers, it can be hard to read their
values precisely from a graph.

## Solve a system of equations by substitution

We will now solve systems of linear equations by the substitution method.
We will use the same system we used first for graphing.

$$\left\{\begin{array}{l} 2x+y=7 \\ x-2y=6 \end{array}\right.$$

We will first solve one of the equations for either $x$ or $y$. We can
choose either equation and solve for either variable — but we'll try to
make a choice that will keep the work easy. Then we substitute that
expression into the other equation. The result is an equation with just one
variable — and we know how to solve those! After we find the value of one
variable, we substitute that value into one of the original equations and
solve for the other variable. Finally, we check our solution and make sure
it makes both equations true.

**Example. How to solve a system of equations by substitution.** Solve the
system by substitution: $\left\{\begin{array}{l} 2x+y=7 \\ x-2y=6
\end{array}\right.$.

| Step | What to do | Result |
| :--- | :--- | :--- |
| 1. Solve one of the equations for either variable. | We'll solve the first equation for $y$. | $2x+y=7$ becomes $y=7-2x$ |
| 2. Substitute the expression from Step 1 into the other equation. | Replace $y$ in the second equation with $7-2x$. | $x-2(7-2x)=6$ |
| 3. Solve the resulting equation. | Now we have an equation with just one variable. | $x-14+4x=6$, so $5x=20$, so $x=4$ |
| 4. Substitute the solution from Step 3 into one of the original equations to find the other variable. | We'll use the first equation and replace $x$ with $4$. | $2(4)+y=7$, so $8+y=7$, so $y=-1$ |
| 5. Write the solution as an ordered pair. | The ordered pair is $(x,y)$. | $(4,-1)$ |
| 6. Check that the ordered pair is a solution to both original equations. | Substitute $(4,-1)$ into both equations. | $\begin{aligned} 2(4)+(-1) &\overset{?}{=} 7, \text{ so } 7=7\ \checkmark \\ 4-2(-1) &\overset{?}{=} 6, \text{ so } 6=6\ \checkmark \end{aligned}$ |

Both equations are true, so $(4,-1)$ is the solution to the system.

{{< fillin
  question="Solve the system by substitution: $\{-2x+y=-11,\ x+3y=9\}$. Enter the solution as an ordered pair."
  answer="(6,1)"
  answerDisplay="$(6,1)$"
  hint="Solve the first equation for y, then substitute that expression for y in the second equation."
>}}

{{< callout type="info" >}}
  **Solve a system of equations by substitution.**

  1. Solve one of the equations for either variable.
  2. Substitute the expression from Step 1 into the other equation.
  3. Solve the resulting equation.
  4. Substitute the solution in Step 3 into one of the original equations to
     find the other variable.
  5. Write the solution as an ordered pair.
  6. Check that the ordered pair is a solution to both original equations.
{{< /callout >}}

Be very careful with the signs in the next example.

**Example.** Solve the system by substitution: $\left\{\begin{array}{l}
4x+2y=4 \\ 6x-y=8 \end{array}\right.$.

We need to solve one equation for one variable. We'll solve the first
equation for $y$.

$$
\begin{array}{lrcl}
\text{Solve the first equation for }y. & 4x+2y &=& 4 \\[4pt]
& 2y &=& -4x+4 \\[4pt]
& y &=& -2x+2 \\[4pt]
\text{Substitute }-2x+2\text{ for }y\text{ in the second equation.} & 6x-(-2x+2) &=& 8 \\[4pt]
\text{Solve the equation for }x. & 6x+2x-2 &=& 8 \\[4pt]
& 8x &=& 10 \\[4pt]
& x &=& \tfrac{5}{4}
\end{array}
$$

Substitute $x=\tfrac{5}{4}$ into $4x+2y=4$ to find $y$:

$$
\begin{array}{lrcl}
& 4\left(\tfrac{5}{4}\right)+2y &=& 4 \\[10pt]
& 5+2y &=& 4 \\[4pt]
& 2y &=& -1 \\[4pt]
& y &=& -\tfrac{1}{2}
\end{array}
$$

The ordered pair is $\left(\tfrac{5}{4},-\tfrac{1}{2}\right)$. Check this
pair in both original equations:

$$
\begin{array}{rcl}
4\left(\tfrac{5}{4}\right)+2\left(-\tfrac{1}{2}\right) &=& 4 \\
6\left(\tfrac{5}{4}\right)-\left(-\tfrac{1}{2}\right) &=& 8
\end{array}
$$

Both check out, so the solution is $\left(\tfrac{5}{4},-\tfrac{1}{2}\right)$.

{{< fillin
  question="Solve the system by substitution: $\{x-4y=-4,\ -3x+4y=0\}$. Enter the solution as an ordered pair."
  answer="(2,\frac{3}{2})"
  answerDisplay="$(2,\tfrac{3}{2})$"
  hint="Solve the first equation for x, since its coefficient is already 1, then substitute into the second equation."
>}}

## Solve a system of equations by elimination

We have solved systems of linear equations by graphing and by substitution.
Graphing works well when the coefficients are small and the solution has
integer values. Substitution works well when one equation is already solved
for a variable, or can easily be solved for one.

The third method for solving systems of linear equations is called
**elimination**. It is based on the Addition Property of Equality, which
says that when you add the same quantity to both sides of an equation, you
still have equality. We extend that idea: for any expressions $a,b,c,d$, if
$a=b$ and $c=d$, then $a+c=b+d$.

To solve a system of equations by elimination, we start with both equations
in standard form. Then we decide which variable will be easiest to
eliminate. We want the coefficients of that variable to be opposites, so
that adding the equations eliminates it. Notice how that works when we add
these two equations together:

$$
\begin{array}{rcl}
3x+y &=& 5 \\
2x-y &=& 0 \\
5x &=& 5
\end{array}
$$

The $y$'s add to zero, and we're left with one equation in one variable.

Let's try another one:

$$\left\{\begin{array}{l} x+4y=2 \\ 2x+5y=-2 \end{array}\right.$$

This time we don't see a variable that can be immediately eliminated if we
add the equations. But if we multiply the first equation by $-2$, we will
make the coefficients of $x$ opposite. We must multiply every term on both
sides of the equation by $-2$:

$$
\begin{array}{rcl}
-2(x+4y) &=& -2(2) \\
2x+5y &=& -2
\end{array}
$$

Then rewrite the system of equations:

$$
\begin{array}{rcl}
-2x-8y &=& -4 \\
2x+5y &=& -2
\end{array}
$$

Now the coefficients of the $x$ terms are opposites, so $x$ will be
eliminated when we add these two equations:

$$
\begin{array}{rcl}
-2x-8y &=& -4 \\
2x+5y &=& -2 \\
-3y &=& -6
\end{array}
$$

Once we have an equation with just one variable, we solve it, substitute
that value into one of the original equations, and solve for the remaining
variable — and, as always, check the answer in *both* original equations.

**Example. How to solve a system of equations by elimination.** Solve the
system by elimination: $\left\{\begin{array}{l} 2x+y=7 \\ x-2y=6
\end{array}\right.$.

| Step | What to do | Result |
| :--- | :--- | :--- |
| 1. Write both equations in standard form. If any coefficients are fractions, clear them. | Both equations are already in standard form, with no fractions. | |
| 2. Make the coefficients of one variable opposites. Decide which variable to eliminate, then multiply one or both equations so its coefficients become opposites. | We can eliminate $y$ by multiplying the first equation by $2$. | $\begin{aligned} 2(2x+y) &= 2(7) \\ 4x+2y &= 14 \end{aligned}$ |
| 3. Add the equations resulting from Step 2 to eliminate one variable. | Add the $x$'s, $y$'s, and constants. | $\begin{aligned} 4x+2y &= 14 \\ x-2y &= 6 \\ 5x &= 20 \end{aligned}$ |
| 4. Solve for the remaining variable. | Divide both sides by $5$. | $x=4$ |
| 5. Substitute the solution from Step 4 into one of the original equations, then solve for the other variable. | Substitute $x=4$ into $x-2y=6$. | $\begin{aligned} 4-2y &= 6 \\ y &= -1 \end{aligned}$ |
| 6. Write the solution as an ordered pair. | | $(4,-1)$ |
| 7. Check that the ordered pair is a solution to **both** original equations. | Substitute $(4,-1)$ into both equations. | $\begin{aligned} 2(4)+(-1) &\overset{?}{=} 7, \text{ so } 7=7\ \checkmark \\ 4-2(-1) &\overset{?}{=} 6, \text{ so } 6=6\ \checkmark \end{aligned}$ |

{{< fillin
  question="Solve the system by elimination: $\{3x+y=5,\ 2x-3y=7\}$. Enter the solution as an ordered pair."
  answer="(2,-1)"
  answerDisplay="$(2,-1)$"
  hint="The y-coefficients (1 and -3) aren't opposites yet — multiply the first equation by 3 first."
>}}

{{< callout type="info" >}}
  **Solve a system of equations by elimination.**

  1. Write both equations in standard form. If any coefficients are
     fractions, clear them.
  2. Make the coefficients of one variable opposites.
     - Decide which variable you will eliminate.
     - Multiply one or both equations so that the coefficients of that
       variable are opposites.
  3. Add the equations resulting from Step 2 to eliminate one variable.
  4. Solve for the remaining variable.
  5. Substitute the solution from Step 4 into one of the original
     equations. Then solve for the other variable.
  6. Write the solution as an ordered pair.
  7. Check that the ordered pair is a solution to **both** original
     equations.
{{< /callout >}}

**Example.** Solve the system by elimination: $\left\{\begin{array}{l}
4x-3y=9 \\ 7x+2y=-6 \end{array}\right.$.

Neither variable can be eliminated by multiplying just one equation. To
make the $y$-coefficients opposite, multiply the first equation by $2$ and
the second by $3$:

$$
\left\{\begin{array}{l} 2(4x-3y)=2(9) \\ 3(7x+2y)=3(-6) \end{array}\right.
\quad\Longrightarrow\quad
\left\{\begin{array}{l} 8x-6y=18 \\ 21x+6y=-18 \end{array}\right.
$$

Adding these equations eliminates $y$:

$$
\begin{array}{rcl}
8x-6y &=& 18 \\
21x+6y &=& -18 \\
29x &=& 0
\end{array}
$$

So $x=0$. Substituting $x=0$ into $7x+2y=-6$ gives $2y=-6$, so $y=-3$. The
solution is $(0,-3)$.

{{< fillin
  question="Solve the system by elimination: $\{3x-4y=-9,\ 5x+3y=14\}$. Enter the solution as an ordered pair."
  answer="(1,3)"
  answerDisplay="$(1,3)$"
  hint="Multiply the first equation by 3 and the second by 4 so the y-coefficients become opposites."
>}}

When a system has fractions, clear them first by multiplying each equation
by its LCD — then eliminate as usual.

**Example.** Solve the system by elimination: $\left\{\begin{array}{l}
x+\tfrac{1}{2}y=6 \\ \tfrac{3}{2}x+\tfrac{2}{3}y=\tfrac{17}{2}
\end{array}\right.$.

To clear the fractions, multiply each equation by its LCD:

$$
\left\{\begin{array}{l} 2\left(x+\tfrac{1}{2}y\right)=2(6) \\
6\left(\tfrac{3}{2}x+\tfrac{2}{3}y\right)=6\left(\tfrac{17}{2}\right)
\end{array}\right.
\quad\Longrightarrow\quad
\left\{\begin{array}{l} 2x+y=12 \\ 9x+4y=51 \end{array}\right.
$$

To eliminate $y$, multiply the first equation by $-4$:

$$
\begin{array}{rcl}
-8x-4y &=& -48 \\
9x+4y &=& 51 \\
x &=& 3
\end{array}
$$

Substitute $x=3$ into $x+\tfrac{1}{2}y=6$ to find $y$:
$3+\tfrac{1}{2}y=6$, so $\tfrac{1}{2}y=3$, and $y=6$. The ordered pair is
$(3,6)$. Check it in both original equations — both are true, so the
solution is $(3,6)$.

{{< fillin
  question="Solve the system by elimination: $\{\tfrac{1}{3}x-\tfrac{1}{2}y=1,\ \tfrac{3}{4}x-y=\tfrac{5}{2}\}$. Enter the solution as an ordered pair."
  answer="(6,2)"
  answerDisplay="$(6,2)$"
  hint="Multiply the first equation by 6 and the second by 4 to clear the fractions first."
>}}

Not every system has exactly one solution. Recall from graphing that two
equations describing the same line have infinitely many solutions (a
consistent, dependent system), and two equations describing parallel lines
have no solution at all (an inconsistent system). Elimination reveals both
cases too: if the equation at the end of elimination is a true statement,
the system is consistent but dependent and has infinitely many solutions;
if it's a false statement, the system is inconsistent and has no solution.

**Example.** Solve the system by elimination: $\left\{\begin{array}{l}
3x+4y=12 \\ y=3-\tfrac{3}{4}x \end{array}\right.$.

Write the second equation in standard form: $\tfrac{3}{4}x+y=3$;
multiplying by $4$ clears the fraction: $3x+4y=12$ — the very same equation
as the first! Multiplying this equation by $-1$ and adding it to the first
equation gives $0=0$, a true statement. The system is consistent but
dependent: the two equations describe the same (coincident) line, so the
system has infinitely many solutions.

{{< multiplechoice
  question="Solve the system by elimination: $\{5x-3y=15,\ y=-5+\tfrac{5}{3}x\}$. How many solutions does the system have?"
  hint="Rewrite the second equation in standard form and compare it to the first equation."
  answer="infinitely many solutions"
>}}
exactly one solution
no solution
infinitely many solutions
{{< /multiplechoice >}}

## Choose the most convenient method to solve a system of linear equations

When you solve a system of linear equations in an application, you will not
be told which method to use. You will need to make that decision yourself,
so it helps to recognize which method is easiest for a given system.

| Graphing | Substitution | Elimination |
| :--- | :--- | :--- |
| Use when you need a picture of the situation. | Use when one equation is already solved for one variable, or can easily be solved for one. | Use when the equations are already in standard form. |

**Example.** For each system of linear equations, decide whether it would
be more convenient to solve it by substitution or elimination: (a)
$\left\{\begin{array}{l} 3x+8y=40 \\ 7x-4y=-32 \end{array}\right.$ (b)
$\left\{\begin{array}{l} 5x+6y=12 \\ y=\tfrac{2}{3}x-1 \end{array}\right.$.

(a) Since both equations are already in standard form, using elimination
will be most convenient.

(b) Since one equation is already solved for $y$, using substitution will
be most convenient.

{{< multiplechoice
  question="For the system $\{4x-5y=-32,\ 3x+2y=-1\}$, both equations are in standard form. Which method is more convenient?"
  hint="Neither equation is already solved for a variable, but both are ready to add once the coefficients are matched."
  answer="elimination"
>}}
substitution
elimination
{{< /multiplechoice >}}

{{< multiplechoice
  question="For the system $\{x=2y-1,\ 3x-5y=-7\}$, one equation is already solved for x. Which method is more convenient?"
  hint="A variable that is already isolated can be substituted directly into the other equation."
  answer="substitution"
>}}
substitution
elimination
{{< /multiplechoice >}}

## Key terms

**system of linear equations** — two or more linear equations grouped
together. **solution of a system of equations** — an ordered pair $(x,y)$
that makes all the equations in the system true. **coincident lines** —
lines with the same slope and the same $y$-intercept; they graph as a
single line. **consistent system** — a system of equations with at least
one solution. **inconsistent system** — a system of equations with no
solution. **independent equations** — two equations with different
solutions (intersecting or parallel lines). **dependent equations** — two
equations whose solutions are identical (coincident lines). **substitution
method** — solving one equation of a system for a variable, then replacing
that variable with the resulting expression in the other equation.
**elimination method** — adding two equations (after multiplying by
constants if necessary) so that one variable cancels out.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 4.1: Solve Systems of Linear Equations with Two Variables](https://openstax.org/books/intermediate-algebra-2e/pages/4-1-solve-systems-of-linear-equations-with-two-variables) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated the coordinate-plane figures (the intersecting/parallel/ coincident overview and the four worked graphing examples) as accessible interactive graphs; recast the multi-step "How To" examples as step tables and equation-alignment arrays; omitted the Be Prepared quiz, Self Check checklist, and end-of-section exercises; and converted the Try Its into interactive exercises with instant feedback — reducing (a)/(b) sub-parts to a single representative exercise, and turning ordered-pair-check, classification, and choose-the-method questions into multiple choice, since a yes/no or word answer of that kind cannot be graded as a math expression.</small>
