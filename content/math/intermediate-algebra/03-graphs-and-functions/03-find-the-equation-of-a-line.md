---
title: Find the Equation of a Line
description: >-
  Finding equations of lines from a slope and y-intercept, a slope and a
  point, or two points, and finding equations of parallel and perpendicular
  lines — adapted from OpenStax Intermediate Algebra 2e, Section 3.3.
source_section: "3.3"
weight: 3
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** find an equation of
  the line given the slope and $y$-intercept, find an equation of the line
  given the slope and a point, find an equation of the line given two
  points, find an equation of a line parallel to a given line, and find an
  equation of a line perpendicular to a given line.
{{< /callout >}}

How do online companies know that “you may also like” a particular item based
on something you just ordered? How can economists know how a rise in the
minimum wage will affect the unemployment rate? How do medical researchers
create drugs to target cancer cells? How can traffic engineers predict the
effect on your commuting time of an increase or decrease in gas prices? It’s
all mathematics.

The physical sciences, social sciences, and the business world are full of
situations that can be modeled with linear equations relating two variables.
To create a mathematical model of a linear relation between two variables, we
must be able to find the equation of the line. In this section, we will look at
several ways to write the equation of a line. The specific method we use will
be determined by what information we are given.

## Find an equation of the line given the slope and y-intercept

We can easily determine the slope and intercept of a line if the equation is
written in slope-intercept form, $y = mx + b$. Now we will do the reverse—we
will start with the slope and $y$-intercept and use them to find the equation
of the line.

**Example.** Find the equation of a line with slope $-9$ and $y$-intercept
$(0,-4)$.

Since we are given the slope and $y$-intercept of the line, we can substitute
the needed values into the slope-intercept form, $y=mx+b$.

$$
\begin{array}{lrcl}
\text{Name the slope.} & m &=& -9 \\[4pt]
\text{Name the }y\text{-intercept.} & (0,b) &=& (0,-4) \\[4pt]
\text{Substitute the values into }y=mx+b. & y &=& -9x+(-4) \\[4pt]
&&=& -9x-4
\end{array}
$$

{{< fillin
  question="Find the equation of a line with slope $\tfrac{2}{5}$ and $y$-intercept $(0,4)$."
  answer="y = \frac{2}{5}x + 4"
  answerDisplay="$y = \tfrac{2}{5}x + 4$"
  hint="Substitute $m=\tfrac{2}{5}$ and $b=4$ into $y=mx+b$."
>}}

{{< fillin
  question="Find the equation of a line with slope $-1$ and $y$-intercept $(0,-3)$."
  answer="y = -x - 3"
  answerDisplay="$y=-x-3$"
  hint="Substitute $m=-1$ and $b=-3$ into $y=mx+b$."
>}}

Sometimes, the slope and intercept need to be determined from the graph.

**Example.** Find the equation of the line shown in the graph.

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid with a line through the y-intercept (0, -4) and the point (3, -2)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="65.3" y1="346.5" x2="343.7" y2="160.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="352,155.3 346.5,165 340.9,156.7" fill="currentColor"/>
  <polygon points="57,352 62.5,342.3 68.1,350.6" fill="currentColor"/>
  <circle cx="246" cy="226" r="4" fill="currentColor"/>
</svg>
</div>

We need to find the slope and $y$-intercept of the line from the graph so we
can substitute the needed values into the slope-intercept form, $y=mx+b$.
To find the slope, we choose two points on the graph. The $y$-intercept is
$(0,-4)$ and the graph passes through $(3,-2)$.

$$
\begin{array}{lrcl}
\text{Find the slope, by counting the rise and run.} & m &=& \tfrac{\text{rise}}{\text{run}} \\[4pt]
&&=& \tfrac{2}{3} \\[4pt]
\text{Find the }y\text{-intercept.} & (0,b) &=& (0,-4) \\[4pt]
\text{Substitute the values into }y=mx+b. & y &=& \tfrac{2}{3}x-4
\end{array}
$$

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid for Try It 3.49 with a line through (0, 1) and (5, 4)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="28.6" y1="260.5" x2="343.4" y2="71.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="352,66.4 346,75.8 340.9,67.3" fill="currentColor"/>
  <polygon points="20,265.6 26,256.2 31.1,264.7" fill="currentColor"/>
  <circle cx="286" cy="106" r="4" fill="currentColor"/>
</svg>
</div>

{{< fillin
  question="Find the equation of the line shown in the graph immediately above."
  answer="y = \frac{3}{5}x + 1"
  answerDisplay="$y=\tfrac{3}{5}x+1$"
  hint="Read the $y$-intercept, then use the marked point to count the rise and run."
>}}

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid for Try It 3.50 with a line through (0, -5) and (3, -1)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="142.5" y1="344" x2="346" y2="72.7" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="352,64.7 350,75.7 342,69.7" fill="currentColor"/>
  <polygon points="136.5,352 138.5,341 146.5,347" fill="currentColor"/>
  <circle cx="246" cy="206" r="4" fill="currentColor"/>
</svg>
</div>

{{< fillin
  question="Find the equation of the line shown in the graph immediately above."
  answer="y = \frac{4}{3}x - 5"
  answerDisplay="$y=\tfrac{4}{3}x-5$"
  hint="Read the $y$-intercept, then use the marked point to count the rise and run."
>}}

## Find an equation of the line given the slope and a point

Finding an equation of a line using the slope-intercept form of the equation
works well when you are given the slope and $y$-intercept or when you read
them off a graph. But what happens when you have another point instead of the
$y$-intercept?

We are going to use the slope formula to derive another form of an equation
of the line. Suppose we have a line that has slope $m$ and that contains some
specific point $(x_1,y_1)$ and some other point, which we will just call
$(x,y)$. We can write the slope of this line and then change it to a different
form.

$$
\begin{array}{lrcl}
&& m &= \tfrac{y-y_1}{x-x_1} \\[10pt]
\text{Multiply both sides of the equation by }x-x_1. && m(x-x_1) &= \left(\tfrac{y-y_1}{x-x_1}\right)(x-x_1) \\[10pt]
\text{Simplify.} && m(x-x_1) &= y-y_1 \\[4pt]
\text{Rewrite the equation with the }y\text{ terms on the left.} && y-y_1 &= m(x-x_1)
\end{array}
$$

This format is called the **point-slope form** of an equation of a line.

{{< callout type="info" >}}
  **Point-slope form of an equation of a line.** The point-slope form of an
  equation of a line with slope $m$ and containing the point $(x_1,y_1)$ is
  $y-y_1=m(x-x_1)$.
{{< /callout >}}

We can use the point-slope form of an equation to find an equation of a line
when we know the slope and at least one point. Then, we will rewrite the
equation in slope-intercept form. Most applications of linear equations use
the slope-intercept form.

**Example.** Find an equation of a line with slope $m=-\tfrac{1}{3}$ that
contains the point $(6,-4)$. Write the equation in slope-intercept form.

$$
\begin{array}{lrcl}
\text{Identify the slope.} & m &=& -\tfrac{1}{3} \\[4pt]
\text{Identify the point.} & (x_1,y_1) &=& (6,-4) \\[4pt]
\text{Substitute the values into the point-slope form.} & y-(-4) &=& -\tfrac{1}{3}(x-6) \\[10pt]
\text{Simplify.} & y+4 &=& -\tfrac{1}{3}x+2 \\[10pt]
\text{Write the equation in slope-intercept form.} & y &=& -\tfrac{1}{3}x-2
\end{array}
$$

{{< fillin
  question="Find the equation of a line with slope $m=-\tfrac{2}{5}$ and containing the point $(10,-5)$."
  answer="y = -\frac{2}{5}x - 1"
  answerDisplay="$y=-\tfrac{2}{5}x-1$"
  hint="Substitute the slope and point into $y-y_1=m(x-x_1)$, then solve for $y$."
>}}

{{< fillin
  question="Find the equation of a line with slope $m=-\tfrac{3}{4}$ and containing the point $(4,-7)$."
  answer="y = -\frac{3}{4}x - 4"
  answerDisplay="$y=-\tfrac{3}{4}x-4$"
  hint="Substitute the slope and point into $y-y_1=m(x-x_1)$, then solve for $y$."
>}}

We list the steps for easy reference.

{{< callout type="info" >}}
  **To find an equation of a line given the slope and a point.**

  1. Identify the slope.
  2. Identify the point.
  3. Substitute the values into the point-slope form, $y-y_1=m(x-x_1)$.
  4. Write the equation in slope-intercept form.
{{< /callout >}}

**Example.** Find an equation of a horizontal line that contains the point
$(-2,-6)$. Write the equation in slope-intercept form.

Every horizontal line has slope $0$. We can substitute the slope and point
into the point-slope form, $y-y_1=m(x-x_1)$.

$$
\begin{array}{lrcl}
\text{Identify the slope.} & m &=& 0 \\[4pt]
\text{Identify the point.} & (x_1,y_1) &=& (-2,-6) \\[4pt]
\text{Substitute the values.} & y-(-6) &=& 0(x-(-2)) \\[4pt]
\text{Simplify.} & y+6 &=& 0 \\[4pt]
&& y &= -6
\end{array}
$$

It is in $y$-form, but could be written $y=0x-6$. Did we end up with the
form of a horizontal line, $y=b$?

{{< fillin
  question="Find the equation of a horizontal line containing the point $(-3,8)$."
  answer="y=8"
  hint="Every horizontal line has slope $0$ and keeps the same $y$-coordinate."
>}}

{{< fillin
  question="Find the equation of a horizontal line containing the point $(-1,4)$."
  answer="y=4"
  hint="Every horizontal line has slope $0$ and keeps the same $y$-coordinate."
>}}

## Find an equation of the line given two points

When real-world data is collected, a linear model can be created from two
data points. In the next example we’ll see how to find an equation of a line
when just two points are given.

So far, we have two options for finding an equation of a line:
slope-intercept or point-slope. When we start with two points, it makes more
sense to use the point-slope form.

But then we need the slope. Can we find the slope with just two points? Yes.
Then, once we have the slope, we can use it and one of the given points to
find the equation.

**Example.** Find an equation of a line that contains the points $(-3,-1)$
and $(2,-2)$. Write the equation in slope-intercept form.

$$
\begin{array}{lrcl}
\text{Find the slope using the given points.} & m &=& \tfrac{y_2-y_1}{x_2-x_1} \\[10pt]
&&=& \tfrac{-2-(-1)}{2-(-3)} \\[10pt]
&&=& -\tfrac{1}{5} \\[10pt]
\text{Choose either point.} & (x_1,y_1) &=& (2,-2) \\[4pt]
\text{Substitute into the point-slope form.} & y-(-2) &=& -\tfrac{1}{5}(x-2) \\[10pt]
\text{Simplify.} & y+2 &=& -\tfrac{1}{5}x+\tfrac{2}{5} \\[10pt]
\text{Write in slope-intercept form.} & y &=& -\tfrac{1}{5}x-\tfrac{8}{5}
\end{array}
$$

{{< fillin
  question="Find the equation of a line containing the points $(-2,-4)$ and $(1,-3)$."
  answer="y = \frac{1}{3}x - \frac{10}{3}"
  answerDisplay="$y=\tfrac{1}{3}x-\tfrac{10}{3}$"
  hint="First use the two points to find the slope, then use either point in point-slope form."
>}}

{{< fillin
  question="Find the equation of a line containing the points $(-4,-3)$ and $(1,-5)$."
  answer="y = -\frac{2}{5}x - \frac{23}{5}"
  answerDisplay="$y=-\tfrac{2}{5}x-\tfrac{23}{5}$"
  hint="First use the two points to find the slope, then use either point in point-slope form."
>}}

The steps are summarized here.

{{< callout type="info" >}}
  **To find an equation of a line given two points.**

  1. Find the slope using the given points, $m=\tfrac{y_2-y_1}{x_2-x_1}$.
  2. Choose one point.
  3. Substitute the values into the point-slope form: $y-y_1=m(x-x_1)$.
  4. Write the equation in slope-intercept form.
{{< /callout >}}

**Example.** Find an equation of a line that contains the points $(-3,5)$
and $(-3,4)$. Write the equation in slope-intercept form.

Again, the first step will be to find the slope.

$$
\begin{array}{lrcl}
\text{Find the slope through }(-3,5)\text{ and }(-3,4). & m &=& \tfrac{y_2-y_1}{x_2-x_1} \\[10pt]
&&=& \tfrac{4-5}{-3-(-3)} \\[10pt]
&&=& \tfrac{-1}{0}
\end{array}
$$

The slope is undefined. This tells us it is a vertical line. Both of our
points have an $x$-coordinate of $-3$. So our equation of the line is
$x=-3$. Since there is no $y$, we cannot write it in slope-intercept form.

You may want to sketch a graph using the two given points. Does your graph
agree with our conclusion that this is a vertical line?

{{< fillin
  question="Find the equation of a line containing the points $(5,1)$ and $(5,-4)$."
  answer="x=5"
  hint="The two points have the same $x$-coordinate, so the line is vertical."
>}}

{{< fillin
  question="Find the equation of a line containing the points $(-4,4)$ and $(-4,3)$."
  answer="x=-4"
  hint="The two points have the same $x$-coordinate, so the line is vertical."
>}}

We have seen that we can use either the slope-intercept form or the
point-slope form to find an equation of a line. Which form we use will depend
on the information we are given.

| If given | Use | Form |
| :--- | :--- | :--- |
| Slope and $y$-intercept | slope-intercept | $y=mx+b$ |
| Slope and a point | point-slope | $y-y_1=m(x-x_1)$ |
| Two points | point-slope | $y-y_1=m(x-x_1)$ |

## Find an equation of a line parallel to a given line

Suppose we need to find an equation of a line that passes through a specific
point and is parallel to a given line. We can use the fact that parallel
lines have the same slope. So we will have a point and the slope—just what we
need to use the point-slope equation.

First, let’s look at this graphically. This graph shows $y=2x-3$. We want to
graph a line parallel to this line and passing through the point $(-2,1)$.

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid showing the line y equals 2x minus 3 and the point (-2, 1)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="117.5" y1="263.1" x2="234.5" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="239,20 239,31.2 230.1,26.7" fill="currentColor"/>
  <polygon points="113,272 113,260.8 121.9,265.3" fill="currentColor"/>
  <circle cx="106" cy="126" r="4" fill="currentColor"/>
</svg>
</div>

We know that parallel lines have the same slope. So the second line will
have the same slope as $y=2x-3$. That slope is $m_{\parallel}=2$. We’ll use
the notation $m_{\parallel}$ to represent the slope of a line parallel to a
line with slope $m$. (Notice that the subscript $\parallel$ looks like two
parallel lines.)

The second line will pass through $(-2,1)$ and have $m=2$. To graph the line,
we start at $(-2,1)$ and count out the rise and run. With $m=2$ (or
$m=\tfrac{2}{1}$), we count out the rise $2$ and the run $1$. We draw the
line, as shown in the graph.

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid showing two parallel lines, y equals 2x minus 3 and a second line through (-2, 1), with rise 2 and run 1 marked by points." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="117.5" y1="263.1" x2="234.5" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="239,20 239,31.2 230.1,26.7" fill="currentColor"/>
  <polygon points="113,272 113,260.8 121.9,265.3" fill="currentColor"/>
  <line x1="37.5" y1="263.1" x2="154.5" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="159,20 159,31.2 150.1,26.7" fill="currentColor"/>
  <polygon points="33,272 33,260.8 41.9,265.3" fill="currentColor"/>
  <circle cx="106" cy="126" r="4" fill="currentColor"/>
  <circle cx="126" cy="86" r="4" fill="currentColor"/>
</svg>
</div>

Do the lines appear parallel? Does the second line pass through $(-2,1)$?
We were asked to graph the line; now let’s see how to do this algebraically.
We can use either the slope-intercept form or the point-slope form to find an
equation of a line. Here we know one point and can find the slope. So we will
use the point-slope form.

**Example.** Find an equation of a line parallel to $y=2x-3$ that contains
the point $(-2,1)$. Write the equation in slope-intercept form.

$$
\begin{array}{lrcl}
\text{Find the slope of the given line.} & m &=& 2 \\[4pt]
\text{Find the slope of the parallel line.} & m_{\parallel} &=& 2 \\[4pt]
\text{Identify the point.} & (x_1,y_1) &=& (-2,1) \\[4pt]
\text{Substitute into the point-slope form.} & y-1 &=& 2(x-(-2)) \\[4pt]
\text{Simplify.} & y-1 &=& 2(x+2) \\[4pt]
&&=& 2x+4 \\[4pt]
\text{Write in slope-intercept form.} & y &=& 2x+5
\end{array}
$$

Look at the graph with the parallel lines shown previously. Does this
equation make sense? What is the $y$-intercept of the line? What is the
slope?

{{< fillin
  question="Find an equation of a line parallel to $y=3x+1$ that contains the point $(4,2)$."
  answer="y=3x-10"
  hint="A parallel line has the same slope. Use that slope and the given point in point-slope form."
>}}

{{< fillin
  question="Find an equation of a line parallel to $y=\tfrac{1}{2}x-3$ that contains the point $(6,4)$."
  answer="y = \frac{1}{2}x + 1"
  answerDisplay="$y=\tfrac{1}{2}x+1$"
  hint="A parallel line has the same slope. Use that slope and the given point in point-slope form."
>}}

{{< callout type="info" >}}
  **Find an equation of a line parallel to a given line.**

  1. Find the slope of the given line.
  2. Find the slope of the parallel line.
  3. Identify the point.
  4. Substitute the values into the point-slope form: $y-y_1=m(x-x_1)$.
  5. Write the equation in slope-intercept form.
{{< /callout >}}

## Find an equation of a line perpendicular to a given line

Now, let’s consider perpendicular lines. Suppose we need to find a line
passing through a specific point and which is perpendicular to a given line.
We can use the fact that perpendicular lines have slopes that are negative
reciprocals. We will again use the point-slope equation, like we did with
parallel lines.

This graph shows $y=2x-3$. Now, we want to graph a line perpendicular to this
line and passing through $(-2,1)$.

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid showing the line y equals 2x minus 3 and the point (-2, 1), through which a perpendicular line will be drawn." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="117.5" y1="263.1" x2="234.5" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="239,20 239,31.2 230.1,26.7" fill="currentColor"/>
  <polygon points="113,272 113,260.8 121.9,265.3" fill="currentColor"/>
  <circle cx="106" cy="126" r="4" fill="currentColor"/>
</svg>
</div>

We know that perpendicular lines have slopes that are negative reciprocals.
We’ll use the notation $m_{\perp}$ to
represent the slope of a line perpendicular to a line with slope $m$.
(Notice that the subscript $\perp$ looks like the right angles made by two
perpendicular lines.)

$$
\begin{array}{rcl}
y &=& 2x-3 \\[4pt]
m &=& 2 \\[4pt]
m_{\perp} &=& -\tfrac{1}{2}
\end{array}
$$

We now know the perpendicular line will pass through $(-2,1)$ with
$m_{\perp}=-\tfrac{1}{2}$. To graph the line, we will start at $(-2,1)$ and
count out the rise $-1$ and the run $2$. Then we draw the line.

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid showing y equals 2x minus 3 and a perpendicular line of slope negative one-half through (-2, 1)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="117.5" y1="263.1" x2="234.5" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="239,20 239,31.2 230.1,26.7" fill="currentColor"/>
  <polygon points="113,272 113,260.8 121.9,265.3" fill="currentColor"/>
  <line x1="28.9" y1="87.5" x2="263.1" y2="204.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="272,209 260.8,209 265.3,200.1" fill="currentColor"/>
  <polygon points="20,83 31.2,83 26.7,91.9" fill="currentColor"/>
  <circle cx="106" cy="126" r="4" fill="currentColor"/>
  <circle cx="146" cy="146" r="4" fill="currentColor"/>
</svg>
</div>

Do the lines appear perpendicular? Does the second line pass through
$(-2,1)$? We were asked to graph the line; now, let’s see how to do this
algebraically.

We can use either the slope-intercept form or the point-slope form to find an
equation of a line. In this example we know one point, and can find the
slope, so we will use the point-slope form.

**Example.** Find an equation of a line perpendicular to $y=2x-3$ that
contains the point $(-2,1)$. Write the equation in slope-intercept form.

$$
\begin{array}{lrcl}
\text{Find the slope of the given line.} & m &=& 2 \\[4pt]
\text{Find the slope of the perpendicular line.} & m_{\perp} &=& -\tfrac{1}{2} \\[10pt]
\text{Identify the point.} & (x_1,y_1) &=& (-2,1) \\[4pt]
\text{Substitute into the point-slope form.} & y-1 &=& -\tfrac{1}{2}(x-(-2)) \\[10pt]
\text{Simplify.} & y-1 &=& -\tfrac{1}{2}(x+2) \\[10pt]
&&=& -\tfrac{1}{2}x-1 \\[10pt]
\text{Write in slope-intercept form.} & y &=& -\tfrac{1}{2}x
\end{array}
$$

{{< fillin
  question="Find an equation of a line perpendicular to $y=3x+1$ that contains the point $(4,2)$."
  answer="y = -\frac{1}{3}x + \frac{10}{3}"
  answerDisplay="$y=-\tfrac{1}{3}x+\tfrac{10}{3}$"
  hint="The perpendicular slope is the negative reciprocal of $3$. Use it with the point in point-slope form."
>}}

{{< fillin
  question="Find an equation of a line perpendicular to $y=\tfrac{1}{2}x-3$ that contains the point $(6,4)$."
  answer="y=-2x+16"
  hint="The perpendicular slope is the negative reciprocal of $\tfrac{1}{2}$. Use it with the point in point-slope form."
>}}

{{< callout type="info" >}}
  **Find an equation of a line perpendicular to a given line.**

  1. Find the slope of the given line.
  2. Find the slope of the perpendicular line.
  3. Identify the point.
  4. Substitute the values into the point-slope form, $y-y_1=m(x-x_1)$.
  5. Write the equation in slope-intercept form.
{{< /callout >}}

**Example.** Find an equation of a line perpendicular to $x=5$ that contains
the point $(3,-2)$. Write the equation in slope-intercept form.

Again, since we know one point, the point-slope option seems more promising
than the slope-intercept option. We need the slope to use this form, and we
know the new line will be perpendicular to $x=5$. This line is vertical, so
its perpendicular will be horizontal. This tells us $m_{\perp}=0$.

$$
\begin{array}{lrcl}
\text{Identify the point.} & (x_1,y_1) &=& (3,-2) \\[4pt]
\text{Identify the slope of the perpendicular line.} & m_{\perp} &=& 0 \\[4pt]
\text{Substitute the values.} & y-(-2) &=& 0(x-3) \\[4pt]
\text{Simplify.} & y+2 &=& 0 \\[4pt]
&& y &= -2
\end{array}
$$

Sketch the graph of both lines. On your graph, do the lines appear to be
perpendicular?

{{< fillin
  question="Find an equation of a line that is perpendicular to $x=4$ and contains the point $(4,-5)$."
  answer="y=-5"
  hint="A line perpendicular to a vertical line is horizontal and keeps the point’s $y$-coordinate."
>}}

{{< fillin
  question="Find an equation of a line that is perpendicular to $x=2$ and contains the point $(2,-1)$."
  answer="y=-1"
  hint="A line perpendicular to a vertical line is horizontal and keeps the point’s $y$-coordinate."
>}}

In the preceding example, we used the point-slope form to find the equation.
We could have looked at this in a different way. We want to find a line that
is perpendicular to $x=5$ that contains the point $(3,-2)$. The first graph
shows us the line $x=5$ and the point $(3,-2)$.

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid showing the vertical line x equals 5 and the point (3, -2)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="286" y1="342" x2="286" y2="30" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="286,20 291,30 281,30" fill="currentColor"/>
  <polygon points="286,352 281,342 291,342" fill="currentColor"/>
  <circle cx="246" cy="226" r="4" fill="currentColor"/>
</svg>
</div>

We know every line perpendicular to a vertical line is horizontal, so we
will sketch the horizontal line through $(3,-2)$.

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid showing the perpendicular lines x equals 5 and y equals negative 2, with points along the horizontal line." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="286" y1="342" x2="286" y2="30" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="286,20 291,30 281,30" fill="currentColor"/>
  <polygon points="286,352 281,342 291,342" fill="currentColor"/>
  <line x1="30" y1="226" x2="342" y2="226" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="352,226 342,231 342,221" fill="currentColor"/>
  <polygon points="20,226 30,221 30,231" fill="currentColor"/>
  <circle cx="146" cy="226" r="4" fill="currentColor"/>
  <circle cx="186" cy="226" r="4" fill="currentColor"/>
  <circle cx="246" cy="226" r="4" fill="currentColor"/>
  <circle cx="306" cy="226" r="4" fill="currentColor"/>
</svg>
</div>

Do the lines appear perpendicular? If we look at a few points on this
horizontal line, we notice they all have $y$-coordinates of $-2$. So, the
equation of the line perpendicular to the vertical line $x=5$ is $y=-2$.

**Example.** Find an equation of a line that is perpendicular to $y=-3$ that
contains the point $(-3,5)$. Write the equation in slope-intercept form.

The line $y=-3$ is a horizontal line. Any line perpendicular to it must be
vertical, in the form $x=a$. Since the perpendicular line is vertical and
passes through $(-3,5)$, every point on it has an $x$-coordinate of $-3$.
The equation of the perpendicular line is $x=-3$. You may want to sketch the
lines. Do they appear perpendicular?

{{< fillin
  question="Find an equation of a line that is perpendicular to $y=1$ and contains the point $(-5,1)$."
  answer="x=-5"
  hint="A line perpendicular to a horizontal line is vertical and keeps the point’s $x$-coordinate."
>}}

{{< fillin
  question="Find an equation of a line that is perpendicular to $y=-5$ and contains the point $(-4,-5)$."
  answer="x=-4"
  hint="A line perpendicular to a horizontal line is vertical and keeps the point’s $x$-coordinate."
>}}

## Key terms

**point-slope form** — the form $y-y_1=m(x-x_1)$ of an equation of a line
with slope $m$ containing the point $(x_1,y_1)$. **parallel lines** — lines
in the same plane that do not intersect and have the same slope.
**perpendicular lines** — lines that intersect at a right angle and whose
slopes are negative reciprocals.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 3.3: Find the Equation of a Line](https://openstax.org/books/intermediate-algebra-2e/pages/3-3-find-the-equation-of-a-line) by Lynn Marecek, Andrea Honeycutt Mathis, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated the coordinate-plane figures as accessible interactive graphs; omitted the Be Prepared quiz, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
