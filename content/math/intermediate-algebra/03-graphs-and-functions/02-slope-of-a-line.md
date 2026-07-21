---
title: Slope of a Line
description: >-
  Finding and using slope, graphing lines from slope and intercept, choosing a
  graphing method, interpreting applications, and identifying parallel and
  perpendicular lines — adapted from OpenStax Intermediate Algebra 2e, Section 3.2.
source_section: "3.2"
weight: 2
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** find the slope of a
  line, graph a line given a point and the slope, graph a line using its slope
  and intercept, choose the most convenient method to graph a line, graph and
  interpret applications of slope-intercept, and use slopes to identify
  parallel and perpendicular lines.
{{< /callout >}}

## Find the slope of a line

When you graph linear equations, you may notice that some lines tilt up as
they go from left to right and some lines tilt down. Some lines are very steep
and some lines are flatter.

In mathematics, the measure of the steepness of a line is called the **slope**
of the line. The concept of slope has many applications in the real world. In
construction, the pitch of a roof, the slant of the plumbing pipes, and the
steepness of the stairs are all applications of slope, and as you ski or jog
down a hill, you definitely experience slope.

We can assign a numerical value to the slope of a line by finding the ratio of
the rise and run. The **rise** is the amount the vertical distance changes
while the **run** measures the horizontal change. Slope is a rate of change.

{{< callout type="info" >}}
  **Slope of a line.** The slope of a line is
  $m = \tfrac{\text{rise}}{\text{run}}$. The rise measures the vertical change
  and the run measures the horizontal change.
{{< /callout >}}

To find the slope of a line, we locate two points on the line whose
coordinates are integers. Then we sketch a right triangle where the two
points are vertices and one side is horizontal and one side is vertical. We
measure the distance along the vertical and horizontal sides of the triangle.
The vertical distance is called the rise and the horizontal distance is
called the run.

{{< callout type="info" >}}
  **Find the slope of a line from its graph using
  $m = \tfrac{\text{rise}}{\text{run}}$.**

  1. Locate two points on the line whose coordinates are integers.
  2. Starting with one point, sketch a right triangle, going from the first
     point to the second point.
  3. Count the rise and the run on the legs of the triangle.
  4. Take the ratio of rise to run to find the slope:
     $m = \tfrac{\text{rise}}{\text{run}}$.
{{< /callout >}}

**Example.** Find the slope of the line shown.

<div class="ap-figure">
<svg role="img" aria-label="A decreasing line through (0, 5) and (3, 3), with a downward rise of 2 and a run of 3 marked between the points." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 252" width="292" height="252" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="226" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="226" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="226" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="226" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="226" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="226" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="226" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="226" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="226" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="226" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="226" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="226" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="266" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="266" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="266" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="266" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="266" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="266" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="266" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="186" x2="268" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="66" y1="24" x2="66" y2="228" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,186 268,191 268,181" fill="currentColor"/>
  <polygon points="66,14 71,24 61,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="66,238 61,228 71,228" fill="currentColor"/>
  <text x="276" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="74" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="28.3" y1="60.9" x2="263.7" y2="217.8" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="272,223.3 260.9,221.9 266.5,213.6" fill="currentColor"/>
  <polygon points="20,55.3 31.1,56.7 25.5,65" fill="currentColor"/>
  <line x1="66" y1="86" x2="66" y2="126" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="66" y1="126" x2="126" y2="126" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="66" cy="86" r="4" fill="currentColor"/>
  <circle cx="126" cy="126" r="4" fill="currentColor"/>
  <text x="54.8" y="106.2" font-size="13" fill="currentColor" text-anchor="end">(0, 5)</text>
  <text x="137.2" y="114.8" font-size="13" fill="currentColor" text-anchor="start">(3, 3)</text>
  <text x="77.2" y="94.8" font-size="13" fill="currentColor" text-anchor="start">rise = −2</text>
  <text x="96" y="149" font-size="13" fill="currentColor" text-anchor="middle">run = 3</text>
</svg>
</div>

Locate two points on the graph whose coordinates are integers: $(0,5)$ and
$(3,3)$. Starting at $(0,5)$, sketch a right triangle to $(3,3)$. Count the
rise—since it goes down, it is negative. The rise is $-2$. Count the run. The
run is $3$. Use the slope formula and substitute the values:

$$
\begin{array}{lrcl}
\text{Use the slope formula.} & m &=& \tfrac{\text{rise}}{\text{run}} \\[4pt]
\text{Substitute the values.} & m &=& \tfrac{-2}{3} \\[4pt]
\text{Simplify.} & m &=& -\tfrac{2}{3}
\end{array}
$$

The slope of the line is $-\tfrac{2}{3}$. So $y$ decreases by $2$ units as
$x$ increases by $3$ units.

{{< fillin
  question="Find the slope of the line through the points $(-2,1)$ and $(1,-3)$."
  answer="-\frac{4}{3}"
  answerDisplay="$-\tfrac{4}{3}$"
  hint="From the left point to the right point, the rise is $-4$ and the run is $3$."
>}}

{{< fillin
  question="Find the slope of the line through the points $(-3,3)$ and $(2,0)$."
  answer="-\frac{3}{5}"
  answerDisplay="$-\tfrac{3}{5}$"
  hint="Count the vertical change and horizontal change, then form rise over run."
>}}

How do we find the slope of horizontal and vertical lines? For the horizontal
line $y=4$, the rise is $0$ and the run is $3$, so
$m=\tfrac{0}{3}=0$. For the vertical line $x=3$, the rise is $2$ and the run
is $0$. Its slope is undefined since division by zero is undefined.

{{< callout type="info" >}}
  **Slope of a horizontal and vertical line.** The slope of a horizontal
  line, $y=b$, is $0$. The slope of a vertical line, $x=a$, is undefined.
{{< /callout >}}

**Example.** Find the slope of each line: (a) $x=8$ (b) $y=-5$.

(a) $x=8$ is a vertical line. Its slope is undefined.

(b) $y=-5$ is a horizontal line. It has slope $0$.

{{< multiplechoice
  question="Find the slope of the line $x=-4$."
  hint="A vertical line has a run of zero."
  answer="undefined"
>}}
$0$
undefined
$-4$
$1$
{{< /multiplechoice >}}

{{< fillin
  question="Find the slope of the line $y=7$."
  answer="0"
  hint="A horizontal line has a rise of zero."
>}}

Sometimes we'll need to find the slope of a line between two points when we
don't have a graph to count out the rise and the run. We could plot the
points on grid paper, then count out the rise and the run, but there is a way
to find the slope without graphing.

We use $(x_1,y_1)$ to identify the first point and $(x_2,y_2)$ to identify
the second point. The rise can be found by subtracting the $y$-coordinates,
and the run can be found by subtracting the $x$-coordinates.

{{< callout type="info" >}}
  **Slope of a line between two points.** The slope of the line between two
  points $(x_1,y_1)$ and $(x_2,y_2)$ is
  $$m=\frac{y_2-y_1}{x_2-x_1}.$$
  The slope is $y$ of the second point minus $y$ of the first point, over $x$
  of the second point minus $x$ of the first point.
{{< /callout >}}

**Example.** Use the slope formula to find the slope of the line through the
points $(-2,-3)$ and $(-7,4)$.

We'll call $(-2,-3)$ point #1 and $(-7,4)$ point #2. Use the slope formula,
substitute the values, and simplify:

$$
\begin{array}{lrcl}
\text{Use the slope formula.} & m &=& \tfrac{y_2-y_1}{x_2-x_1} \\[10pt]
\text{Substitute the values.} & m &=& \tfrac{4-(-3)}{-7-(-2)} \\[10pt]
\text{Simplify.} & m &=& \tfrac{7}{-5} \\[10pt]
&&=& -\tfrac{7}{5}
\end{array}
$$

{{< fillin
  question="Use the slope formula to find the slope through $(-3,4)$ and $(2,-1)$."
  answer="-1"
  hint="Substitute the coordinates into $m=\tfrac{y_2-y_1}{x_2-x_1}$."
>}}

{{< fillin
  question="Use the slope formula to find the slope through $(-2,6)$ and $(-3,-4)$."
  answer="10"
  hint="Keep the subtraction order the same in numerator and denominator."
>}}

## Graph a line given a point and the slope

Up to now, in this chapter, we have graphed lines by plotting points, by
using intercepts, and by recognizing horizontal and vertical lines. We can
also graph a line when we know one point and the slope of the line. We will
start by plotting the point and then use the definition of slope to draw the
graph of the line.

**Example. How to graph a line given a point and the slope.** Graph the line
passing through the point $(1,-1)$ whose slope is $m=\tfrac{3}{4}$.

Plot $(1,-1)$. Identify the rise and run:
$m=\tfrac{3}{4}$, so rise $=3$ and run $=4$. Start at $(1,-1)$ and count up
$3$ units and right $4$ units. Connect the two points with a line.

<div class="ap-figure">
<svg role="img" aria-label="A line through (1, -1) and (5, 2), with a rise of 3 and a run of 4 marked." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232 192" width="232" height="192" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="166" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="166" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="166" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="166" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="166" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="166" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="166" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="166" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="166" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="206" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="206" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="206" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="206" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="206" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="206" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="106" x2="208" y2="106" stroke="currentColor" stroke-width="1"/>
  <line x1="66" y1="24" x2="66" y2="168" stroke="currentColor" stroke-width="1"/>
  <polygon points="218,106 208,111 208,101" fill="currentColor"/>
  <polygon points="66,14 71,24 61,24" fill="currentColor"/>
  <polygon points="14,106 24,101 24,111" fill="currentColor"/>
  <polygon points="66,178 61,168 71,168" fill="currentColor"/>
  <text x="216" y="98" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="74" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="32.7" y1="166" x2="204" y2="37.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="212,31.5 207,41.5 201,33.5" fill="currentColor"/>
  <polygon points="24.7,172 29.7,162 35.7,170" fill="currentColor"/>
  <line x1="86" y1="126" x2="86" y2="66" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="86" y1="66" x2="166" y2="66" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="86" cy="126" r="4" fill="currentColor"/>
  <circle cx="166" cy="66" r="4" fill="currentColor"/>
  <text x="97.2" y="146.2" font-size="13" fill="currentColor" text-anchor="start">(1, −1)</text>
  <text x="177.2" y="86.2" font-size="13" fill="currentColor" text-anchor="start">(5, 2)</text>
  <text x="97.2" y="84.8" font-size="13" fill="currentColor" text-anchor="start">3</text>
  <text x="126" y="52" font-size="13" fill="currentColor" text-anchor="middle">4</text>
</svg>
</div>

You can check your work by finding a third point. Since the slope is
$m=\tfrac{3}{4}$, it can also be written as $m=\tfrac{-3}{-4}$ (negative
divided by negative is positive!). Go back to $(1,-1)$ and count out the
rise, $-3$, and the run, $-4$.

{{< fillin
  question="Graph the line through $(2,-2)$ with slope $m=\tfrac{4}{3}$. Starting at the given point and using the rise and run, enter the second point."
  answer="(5,2)"
  answerDisplay="$(5,2)$"
  hint="Move up $4$ and right $3$ from $(2,-2)$."
>}}

{{< callout type="info" >}}
  **Graph a line given a point and the slope.**

  1. Plot the given point.
  2. Use $m=\tfrac{\text{rise}}{\text{run}}$ to identify the rise and the run.
  3. Starting at the given point, count out the rise and run to mark the
     second point.
  4. Connect the points with a line.
{{< /callout >}}

## Graph a line using its slope and intercept

We have graphed linear equations by plotting points, using intercepts,
recognizing horizontal and vertical lines, and using one point and the slope
of the line. Once we see how an equation in slope-intercept form and its
graph are related, we'll have one more method we can use to graph lines.

Let's look at the graph of $y=\tfrac{1}{2}x+3$ and find its slope and
$y$-intercept.

<div class="ap-figure">
<svg role="img" aria-label="The line y equals one-half x plus 3 through (0,3), (2,4), and (4,5), with rise 1 and run 2 marked." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 332" width="372" height="332" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="26" y1="206" x2="346" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="346" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="346" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="346" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="346" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="346" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="346" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="226" x2="348" y2="226" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="308" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,226 348,231 348,221" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,226 24,221 24,231" fill="currentColor"/>
  <polygon points="186,318 181,308 191,308" fill="currentColor"/>
  <text x="356" y="218" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="28.9" y1="244.5" x2="343.1" y2="87.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="352,83 345.3,91.9 340.8,83" fill="currentColor"/>
  <polygon points="20,249 26.7,240.1 31.2,249" fill="currentColor"/>
  <line x1="226" y1="146" x2="226" y2="126" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="226" y1="126" x2="266" y2="126" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="186" cy="166" r="4" fill="currentColor"/>
  <circle cx="226" cy="146" r="4" fill="currentColor"/>
  <circle cx="266" cy="126" r="4" fill="currentColor"/>
  <text x="197.2" y="186.2" font-size="13" fill="currentColor" text-anchor="start">(0, 3)</text>
  <text x="277.2" y="146.2" font-size="13" fill="currentColor" text-anchor="start">(4, 5)</text>
  <text x="285.1" y="102.6" font-size="13" fill="currentColor" text-anchor="end">y = ½x + 3</text>
</svg>
</div>

The red lines in the source graph show us the rise is $1$ and the run is $2$.
Substituting into the slope formula gives $m=\tfrac{1}{2}$. The
$y$-intercept is $(0,3)$.

When a linear equation is solved for $y$, the coefficient of the $x$ term is
the slope and the constant term is the $y$-coordinate of the $y$-intercept.
We say that $y=\tfrac{1}{2}x+3$ is in slope-intercept form. Sometimes the
slope-intercept form is called the "$y$-form."

{{< callout type="info" >}}
  **Slope-intercept form of an equation of a line.** The slope-intercept form
  of an equation of a line with slope $m$ and $y$-intercept $(0,b)$ is
  $$y=mx+b.$$
{{< /callout >}}

**Example.** Identify the slope and $y$-intercept of the line from each
equation: (a) $y=-\tfrac{4}{7}x-2$ (b) $x+3y=9$.

(a) Compare $y=-\tfrac{4}{7}x-2$ to $y=mx+b$. The slope is
$m=-\tfrac{4}{7}$ and the $y$-intercept is $(0,-2)$.

(b) When an equation of a line is not given in slope-intercept form, our
first step will be to solve the equation for $y$:

$$
\begin{array}{lrcl}
\text{Solve for }y. & x+3y &=& 9 \\[4pt]
\text{Subtract }x\text{ from each side.} & 3y &=& -x+9 \\[10pt]
\text{Divide both sides by }3. & \tfrac{3y}{3} &=& \tfrac{-x+9}{3} \\[10pt]
\text{Simplify.} & y &=& -\tfrac{1}{3}x+3
\end{array}
$$

The slope is $m=-\tfrac{1}{3}$ and the $y$-intercept is $(0,3)$.

{{< fillin
  question="Identify the slope of $x+4y=8$."
  answer="-\frac{1}{4}"
  answerDisplay="$-\tfrac{1}{4}$"
  hint="Solve the equation for $y$."
>}}

**Example.** Graph $y=-x+4$ using its slope and $y$-intercept.

The equation is in slope-intercept form. Identify $m=-1$ and the
$y$-intercept $(0,4)$. Plot the $y$-intercept. Write
$m=\tfrac{-1}{1}$, so the rise is $-1$ and the run is $1$. Count out the
rise and run to mark the second point. Draw the line.

<div class="ap-figure">
<svg role="img" aria-label="The line y equals negative x plus 4 through the y-intercept (0,4) and the point (1,3)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="266" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="266" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="266" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="266" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="266" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="266" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="266" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="266" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="266" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="266" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
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
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,146 268,151 268,141" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="107.1" y1="27.1" x2="264.9" y2="184.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="272,192 261.4,188.5 268.5,181.4" fill="currentColor"/>
  <polygon points="100,20 110.6,23.5 103.5,30.6" fill="currentColor"/>
  <circle cx="146" cy="66" r="4" fill="currentColor"/>
  <circle cx="166" cy="86" r="4" fill="currentColor"/>
</svg>
</div>

{{< fillin
  question="Graph $y=-x-3$ using its slope and y-intercept. Enter the y-intercept."
  answer="(0,-3)"
  answerDisplay="$(0,-3)$"
  hint="In $y=mx+b$, the y-intercept is $(0,b)$."
>}}

## Choose the most convenient method to graph a line

Now that we have seen several methods we can use to graph lines, how do we
know which method to use for a given equation? While we could plot points,
use the slope-intercept form, or find the intercepts for any equation, if we
recognize the most convenient way to graph a certain type of equation, our
work will be easier. Generally, plotting points is not the most efficient way
to graph a line.

| Equation | Method |
| :--- | :--- |
| $x=2$ | Vertical line |
| $y=-1$ | Horizontal line |
| $-x+2y=6$ | Intercepts |
| $4x-3y=12$ | Intercepts |
| $y=-x+4$ | Slope-intercept |

{{< callout type="info" >}}
  **Strategy for choosing the most convenient method to graph a line.**
  Consider the form of the equation.

  - If it only has one variable, it is a vertical or horizontal line.
    - $x=a$ is a vertical line passing through the $x$-axis at $a$.
    - $y=b$ is a horizontal line passing through the $y$-axis at $b$.
  - If $y$ is isolated on one side of the equation, in the form $y=mx+b$,
    graph by using the slope and $y$-intercept.
    - Identify the slope and $y$-intercept and then graph.
  - If the equation is of the form $Ax+By=C$, find the intercepts.
    - Find the $x$- and $y$-intercepts, a third point, and then graph.
{{< /callout >}}

**Example.** Determine the most convenient method to graph each line:
(a) $y=5$ (b) $4x-5y=20$ (c) $x=-3$ (d) $y=-\tfrac{5}{9}x+8$.

(a) This equation has only one variable, $y$. Its graph is a horizontal line
crossing the $y$-axis at $5$.

(b) This equation is of the form $Ax+By=C$. The easiest way to graph it will
be to find the intercepts and one more point.

(c) There is only one variable, $x$. The graph is a vertical line crossing
the $x$-axis at $-3$.

(d) Since this equation is in $y=mx+b$ form, it will be easiest to graph this
line by using the slope and $y$-intercept.

{{< multiplechoice
  question="What is the most convenient method to graph $4x-3y=-1$?"
  hint="The equation is in the form $Ax+By=C$."
  answer="intercepts"
>}}
vertical line
horizontal line
slope-intercept
intercepts
{{< /multiplechoice >}}

## Graph and interpret applications of slope-intercept

Many real-world applications are modeled by linear equations. We will take a
look at a few applications here so you can see how equations written in
slope-intercept form relate to real world situations. Usually, when a linear
equation models uses real-world data, different letters are used for the
variables, instead of using only $x$ and $y$. The variable names remind us of
what quantities are being measured. Also, we often will need to extend the
axes in our rectangular coordinate system to bigger positive and negative
numbers to accommodate the data in the application.

**Example.** The equation $F=\tfrac{9}{5}C+32$ is used to convert
temperatures, $C$, on the Celsius scale to temperatures, $F$, on the
Fahrenheit scale.

(a) Find the Fahrenheit temperature for a Celsius temperature of $0$.

$$F=\tfrac{9}{5}(0)+32=32$$

(b) Find the Fahrenheit temperature for a Celsius temperature of $20$.

$$F=\tfrac{9}{5}(20)+32=36+32=68$$

(c) Interpret the slope and $F$-intercept of the equation. Even though this
equation uses $F$ and $C$, it is still in slope-intercept form. The slope,
$\tfrac{9}{5}$, means that the temperature Fahrenheit ($F$) increases $9$
degrees when the temperature Celsius ($C$) increases $5$ degrees. The
$F$-intercept means that when the temperature is $0°$ on the Celsius scale,
it is $32°$ on the Fahrenheit scale.

(d) Graph the equation. Start at the $F$-intercept $(0,32)$, and then count
out the rise of $9$ and the run of $5$ to get a second point.

<div class="ap-figure">
<svg role="img" aria-label="A Fahrenheit versus Celsius graph of F equals nine-fifths C plus 32, through (0,32) and (5,41)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 602" width="452" height="602" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="576" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="76" y1="576" x2="76" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="576" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="576" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="276" y1="576" x2="276" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="576" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="376" y1="576" x2="376" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="426" y1="576" x2="426" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="576" x2="426" y2="576" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="526" x2="426" y2="526" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="476" x2="426" y2="476" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="426" x2="426" y2="426" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="426" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="276" x2="426" y2="276" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="426" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="176" x2="426" y2="176" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="426" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="76" x2="426" y2="76" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="426" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="376" x2="428" y2="376" stroke="currentColor" stroke-width="1"/>
  <line x1="226" y1="24" x2="226" y2="578" stroke="currentColor" stroke-width="1"/>
  <polygon points="438,376 428,381 428,371" fill="currentColor"/>
  <polygon points="226,14 231,24 221,24" fill="currentColor"/>
  <polygon points="14,376 24,371 24,381" fill="currentColor"/>
  <polygon points="226,588 221,578 231,578" fill="currentColor"/>
  <text x="436" y="368" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">C</text>
  <text x="234" y="24" font-size="13" fill="currentColor" font-style="italic">F</text>
  <line x1="27.5" y1="573.3" x2="330" y2="28.7" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="334.9,20 334.4,31.2 325.7,26.3" fill="currentColor"/>
  <polygon points="22.7,582 23.2,570.8 31.9,575.7" fill="currentColor"/>
  <circle cx="226" cy="216" r="4" fill="currentColor"/>
  <circle cx="251" cy="171" r="4" fill="currentColor"/>
</svg>
</div>

{{< fillin
  question="The equation $h=2s+50$ estimates a woman's height in inches from shoe size $s$. Estimate the height when $s=8$."
  answer="66"
  answerDisplay="$66$ inches"
  hint="Substitute $s=8$ into the equation."
>}}

The cost of running some types of business has two components—a **fixed
cost** and a **variable cost**. The fixed cost is always the same regardless
of how many units are produced. The variable cost depends on the number of
units produced. It is for the material and labor needed to produce each item.

**Example.** Sam drives a delivery van. The equation $C=0.5m+60$ models the
relation between his weekly cost, $C$, in dollars and the number of miles,
$m$, that he drives.

(a) Find Sam's cost for a week when he drives $0$ miles:
$C=0.5(0)+60=60$. Sam's costs are \$60 when he drives $0$ miles.

(b) Find the cost for a week when he drives $250$ miles:
$C=0.5(250)+60=185$. Sam's costs are \$185 when he drives $250$ miles.

(c) Interpret the slope and $C$-intercept. The slope, $0.5$, means that the
weekly cost, $C$, increases by \$0.50 when the number of miles driven, $m$,
increases by $1$. The $C$-intercept means that when the number of miles
driven is $0$, the weekly cost is \$60.

(d) Graph the equation. Start at the $C$-intercept $(0,60)$. To count out
the slope $m=0.5$, rewrite it as an equivalent fraction:
$m=0.5=\tfrac{0.5}{1}=\tfrac{50}{100}$. Go up $50$ from the intercept of
$60$ and then right $100$. The second point is $(100,110)$.

<div class="ap-figure">
<svg role="img" aria-label="Sam's weekly cost C equals 0.5m plus 60, shown through (0,60) and (100,110)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 752 752" width="752" height="752" font-family="Helvetica, Arial, sans-serif">
  <line x1="76" y1="726" x2="76" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="726" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="726" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="726" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="276" y1="726" x2="276" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="726" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="376" y1="726" x2="376" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="426" y1="726" x2="426" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="476" y1="726" x2="476" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="526" y1="726" x2="526" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="576" y1="726" x2="576" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="626" y1="726" x2="626" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="676" y1="726" x2="676" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="726" y1="726" x2="726" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="676" x2="726" y2="676" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="626" x2="726" y2="626" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="576" x2="726" y2="576" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="526" x2="726" y2="526" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="476" x2="726" y2="476" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="426" x2="726" y2="426" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="376" x2="726" y2="376" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="726" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="276" x2="726" y2="276" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="726" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="176" x2="726" y2="176" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="726" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="76" x2="726" y2="76" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="726" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="726" x2="728" y2="726" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="726" stroke="currentColor" stroke-width="1"/>
  <polygon points="738,726 728,731 728,721" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="736" y="718" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">m</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">C</text>
  <line x1="28.9" y1="604.5" x2="723.1" y2="257.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="732,253 725.3,261.9 720.8,253" fill="currentColor"/>
  <polygon points="20,609 26.7,600.1 31.2,609" fill="currentColor"/>
  <circle cx="26" cy="606" r="4" fill="currentColor"/>
  <circle cx="226" cy="506" r="4" fill="currentColor"/>
</svg>
</div>

{{< fillin
  question="Stella's weekly cost is $C=4p+25$. Find her cost when she sells $15$ pizzas."
  answer="85"
  answerDisplay="\$85"
  hint="Substitute $p=15$ into $C=4p+25$."
>}}

## Use slopes to identify parallel and perpendicular lines

Two lines that have the same slope are called **parallel lines**. Parallel
lines have the same steepness and never intersect. Two lines that have the
same slope and different $y$-intercepts are called parallel lines.

<div class="ap-figure">
<svg role="img" aria-label="Two parallel lines, each with slope two-fifths, with different y-intercepts 3 and negative 2." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,358 181,348 191,348" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="29.3" y1="188.7" x2="342.7" y2="63.3" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="352,59.6 344.6,68 340.9,58.7" fill="currentColor"/>
  <polygon points="20,192.4 27.4,184 31.1,193.3" fill="currentColor"/>
  <line x1="29.3" y1="288.7" x2="342.7" y2="163.3" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="352,159.6 344.6,168 340.9,158.7" fill="currentColor"/>
  <polygon points="20,292.4 27.4,284 31.1,293.3" fill="currentColor"/>
</svg>
</div>

What about vertical lines? The slope of a vertical line is undefined, so
vertical lines don't fit in the definition above. We say that vertical lines
that have different $x$-intercepts are parallel.

{{< callout type="info" >}}
  **Parallel lines.** Parallel lines are lines in the same plane that do not
  intersect.

  - Parallel lines have the same slope and different $y$-intercepts.
  - If $m_1$ and $m_2$ are the slopes of two parallel lines then $m_1=m_2$.
  - Parallel vertical lines have different $x$-intercepts.
{{< /callout >}}

**Example.** Use slopes and $y$-intercepts to determine if the lines are
parallel: (a) $3x-2y=6$ and $y=\tfrac{3}{2}x+1$ (b) $y=2x-3$ and
$-6x+3y=-9$.

(a) Solve the first equation for $y$:

$$3x-2y=6,\quad -2y=-3x+6,\quad y=\frac{3}{2}x-3.$$

The second line is already $y=\tfrac{3}{2}x+1$. The lines have the same
slope and different $y$-intercepts and so they are parallel.

(b) Solving $-6x+3y=-9$ gives $y=2x-3$. The lines have the same slope, but
they also have the same $y$-intercepts. Their equations represent the same
line and we say the lines are coincident. They are not parallel; they are the
same line.

**Example.** Use slopes and $y$-intercepts to determine if the lines are
parallel: (a) $y=-4$ and $y=3$ (b) $x=-2$ and $x=-5$.

(a) These are horizontal lines and so their slopes are both $0$. Their
$y$-intercepts are $(0,-4)$ and $(0,3)$. The lines have the same slope and
different $y$-intercepts and so they are parallel.

(b) These are vertical lines and their slopes are undefined. They cross the
$x$-axis at $x=-2$ and $x=-5$. The lines are vertical and have different
$x$-intercepts and so they are parallel.

{{< multiplechoice
  question="Are the lines $y=8$ and $y=-6$ parallel?"
  hint="Both are horizontal lines with slope zero and different y-intercepts."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

The lines $y=\tfrac{1}{4}x-1$ and $y=-4x+2$ lie in the same plane and
intersect in right angles. We call these lines perpendicular. Their slopes
are negative reciprocals of each other, and their product is $-1$:

$$m_1\cdot m_2=\frac{1}{4}(-4)=-1.$$

<div class="ap-figure">
<svg role="img" aria-label="The perpendicular lines y equals one-fourth x minus 1 and y equals negative 4x plus 2." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,358 181,348 191,348" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="29.7" y1="245.1" x2="342.3" y2="166.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="352,164.5 343.5,171.8 341.1,162.1" fill="currentColor"/>
  <polygon points="20,247.5 28.5,240.2 30.9,249.9" fill="currentColor"/>
  <line x1="156.9" y1="29.7" x2="235.1" y2="342.3" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="237.5,352 230.2,343.5 239.9,341.1" fill="currentColor"/>
  <polygon points="154.5,20 161.8,28.5 152.1,30.9" fill="currentColor"/>
  <text x="273.6" y="165.4" font-size="13" fill="currentColor" text-anchor="middle">y = ¼x − 1</text>
  <text x="203.7" y="286.8" font-size="13" fill="currentColor" text-anchor="end">y = −4x + 2</text>
</svg>
</div>

{{< callout type="info" >}}
  **Perpendicular lines.** Perpendicular lines are lines in the same plane
  that form a right angle.

  - If $m_1$ and $m_2$ are the slopes of two perpendicular lines, then their
    slopes are negative reciprocals, $m_1=-\tfrac{1}{m_2}$, and the product
    of their slopes is $-1$, $m_1\cdot m_2=-1$.
  - A vertical line and a horizontal line are always perpendicular to each
    other.
{{< /callout >}}

**Example.** Use slopes to determine if the lines are perpendicular:
(a) $y=-5x-4$ and $x-5y=5$ (b) $7x+2y=3$ and $2x+7y=5$.

(a) The first equation is in slope-intercept form. Solve the second equation
for $y$: $x-5y=5$, $-5y=-x+5$, $y=\tfrac{1}{5}x-1$. The slopes are
$m_1=-5$ and $m_2=\tfrac{1}{5}$. They are negative reciprocals, so the
lines are perpendicular. Since $-5(\tfrac{1}{5})=-1$, it checks.

(b) Solve the equations for $y$:
$y=-\tfrac{7}{2}x+\tfrac{3}{2}$ and
$y=-\tfrac{2}{7}x+\tfrac{5}{7}$. The slopes are reciprocals of each other,
but they have the same sign. Since they are not negative reciprocals, the
lines are not perpendicular.

{{< multiplechoice
  question="Are $y=-3x+2$ and $x-3y=4$ perpendicular?"
  hint="The second line has slope $\tfrac{1}{3}$; multiply the slopes."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

## Key terms

**slope** — the measure of the steepness of a line; the ratio of rise to run.
**slope formula** — $m=\tfrac{y_2-y_1}{x_2-x_1}$, used to find the slope
between two points. **slope-intercept form** — $y=mx+b$, where $m$ is the
slope and $(0,b)$ is the $y$-intercept. **fixed cost** — a business cost that
does not change with the number of units produced. **variable cost** — a
business cost that changes with the number of units produced. **parallel
lines** — lines in the same plane that do not intersect. **perpendicular
lines** — lines in the same plane that form a right angle.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 3.2: Slope of a Line](https://openstax.org/books/intermediate-algebra-2e/pages/3-2-slope-of-a-line) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated coordinate-plane figures as accessible interactive graphs; omitted the Be Prepared quiz, Media links, self-check, and section exercises; and converted the source Try Its into interactive exercises with instant feedback.</small>
