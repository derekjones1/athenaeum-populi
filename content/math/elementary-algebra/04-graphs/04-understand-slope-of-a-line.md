---
title: Understand Slope of a Line
description: >-
  Using geoboards to model slope, finding the slope of a line from its graph
  and from two points using the slope formula, the slope of horizontal and
  vertical lines, graphing a line given a point and its slope, and real-world
  slope applications — adapted from OpenStax Elementary Algebra 2e, Section
  4.4.
source_section: "4.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use geoboards to model slope
- Use $m = \tfrac{\text{rise}}{\text{run}}$ to find the slope of a line from its graph
- Find the slope of horizontal and vertical lines
- Use the slope formula to find the slope of a line between two points
- Graph a line given a point and the slope
- Solve slope applications
{{< /callout >}}

When you graph linear equations, you may notice that some lines tilt up as
they go from left to right and some tilt down. Some lines are steep and some
are flatter. What determines whether a line tilts up or down, or how steep or
flat it is?

In mathematics, the "tilt" of a line is called the **slope** of the line. The
concept of slope has many applications in the real world. The pitch of a
roof, the grade of a highway, and a ramp for a wheelchair are some examples
where you literally see slopes. And when you ride a bicycle, you feel the
slope as you pump uphill or coast downhill.

## Use geoboards to model slope

A **geoboard** is a board with a grid of pegs on it. Using rubber bands on a
geoboard gives us a concrete way to model lines on a coordinate grid. By
stretching a rubber band between two pegs on a geoboard, we can discover how
to find the slope of a line. (Graph paper can be used instead of a geoboard.)

We'll start by stretching a rubber band between two pegs, as shown below.

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard of five rows of five pegs (columns numbered from the left, rows from the top). A rubber band is stretched between the peg in column 1, row 4 and the peg in column 4, row 2, forming a line." style="max-width: 200px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="20" y1="120" x2="110" y2="60" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
</svg>

Doesn't it look like a line? Now we stretch one part of the rubber band
straight up from the left peg and around a third peg to make the sides of a
right triangle.

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard of five rows of five pegs (columns numbered from the left, rows from the top). The rubber band now forms a right triangle through the pegs in column 1, row 4; column 1, row 2; and column 4, row 2. The right angle is at column 1, row 2, so one side is vertical and one is horizontal, and the original line is the hypotenuse." style="max-width: 200px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="20" y1="120" x2="20" y2="60" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <line x1="20" y1="60" x2="110" y2="60" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <line x1="20" y1="120" x2="110" y2="60" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
</svg>

We carefully make a $90^\circ$ angle around the third peg, so one of the newly
formed sides is vertical and the other is horizontal.

To find the slope of the line, we measure the distance along the vertical and
horizontal sides of the triangle. The vertical distance is called the
**rise** and the horizontal distance is called the **run**.

<svg viewBox="0 0 200 110" role="img" aria-label="Two perpendicular arrows meeting at a corner: one points straight up and is labeled rise; the other points straight right and is labeled run." style="max-width: 220px; display: block; margin: 1.5rem auto">
  <line x1="50" y1="95" x2="50" y2="30" stroke="currentColor" stroke-width="2" />
  <polygon points="50,20 45,31 55,31" fill="currentColor" />
  <line x1="50" y1="30" x2="170" y2="30" stroke="currentColor" stroke-width="2" />
  <polygon points="180,30 169,25 169,35" fill="currentColor" />
  <text x="42" y="68" text-anchor="end" font-size="15" fill="currentColor">rise</text>
  <text x="110" y="20" text-anchor="middle" font-size="15" fill="currentColor">run</text>
</svg>

On our geoboard, the rise is $2$: the rubber band goes up $2$ units. (Each
space between pegs is one unit.) The rubber band goes across $3$ units, so
the run is $3$.

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard of five rows of five pegs (columns numbered from the left, rows from the top). The same right triangle, with its vertical side, from column 1, row 4 up to column 1, row 2, labeled 2, and its horizontal side, from column 1, row 2 across to column 4, row 2, labeled 3." style="max-width: 200px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="20" y1="120" x2="20" y2="60" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <line x1="20" y1="60" x2="110" y2="60" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <line x1="20" y1="120" x2="110" y2="60" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <text x="8" y="95" text-anchor="middle" font-size="14" fill="currentColor">2</text>
  <text x="65" y="52" text-anchor="middle" font-size="14" fill="currentColor">3</text>
</svg>

The slope of a line is the ratio of the rise to the run. In mathematics, it
is always referred to with the letter $m$.

{{< callout type="info" >}}
  **Slope of a line.** The slope of a line is $m = \tfrac{\text{rise}}{\text{run}}$.
  The **rise** measures the vertical change and the **run** measures the
  horizontal change between two points on the line.
{{< /callout >}}

So the slope of the line on our geoboard is

$$m = \frac{\text{rise}}{\text{run}} = \frac{2}{3}$$

The line has slope $\tfrac{2}{3}$. This means that the line rises $2$ units
for every $3$ units of run.

When we work with geoboards, it is a good idea to get in the habit of starting
at a peg on the left and connecting to a peg to the right. If the rise goes
up it is positive, and if it goes down it is negative. The run goes from left
to right and is positive.

**Example.** What is the slope of the line on the geoboard shown?

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard of five rows of five pegs (columns numbered from the left, rows from the top). A rubber band is stretched between the peg in column 1, row 5 and the peg in column 5, row 2." style="max-width: 200px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="20" y1="150" x2="140" y2="60" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
</svg>

Use the definition of slope, $m = \tfrac{\text{rise}}{\text{run}}$. Start at
the left peg and count the spaces up and to the right to reach the second
peg.

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard of five rows of five pegs (columns numbered from the left, rows from the top). A right triangle through the pegs in column 1, row 5; column 1, row 2; and column 5, row 2. The vertical side is labeled 3 and the horizontal side is labeled 4." style="max-width: 200px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="20" y1="150" x2="20" y2="60" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <line x1="20" y1="60" x2="140" y2="60" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <line x1="20" y1="150" x2="140" y2="60" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <text x="8" y="110" text-anchor="middle" font-size="14" fill="currentColor">3</text>
  <text x="80" y="52" text-anchor="middle" font-size="14" fill="currentColor">4</text>
</svg>

The rise is $3$ and the run is $4$, so

$$m = \frac{\text{rise}}{\text{run}} = \frac{3}{4}$$

This means that the line rises $3$ units for every $4$ units of run.

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard of five rows of five pegs (columns numbered from the left, rows from the top). A rubber band is stretched between the peg in column 1, row 5 and the peg in column 4, row 1." style="max-width: 200px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="20" y1="150" x2="110" y2="30" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
</svg>

{{< fillin
  question="What is the slope of the line on the geoboard shown above? Enter it as a fraction."
  answer="\frac{4}{3}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{4}{3}$"
  hint="Start at the left peg, count the spaces up or down to the second peg's row (the rise) and across to it (the run), then write rise over run."
>}}

**Example.** What is the slope of the line on the geoboard shown?

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard of five rows of five pegs (columns numbered from the left, rows from the top). A rubber band is stretched between the peg in column 1, row 3 and the peg in column 4, row 4." style="max-width: 200px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="20" y1="90" x2="110" y2="120" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
</svg>

Use the definition of slope. Start at the left peg and count the units down
and to the right to reach the second peg.

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard of five rows of five pegs (columns numbered from the left, rows from the top). A right triangle through the pegs in column 1, row 3; column 1, row 4; and column 4, row 4. The vertical side, going down from column 1, row 3, is labeled −1, and the horizontal side is labeled 3." style="max-width: 200px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="20" y1="90" x2="20" y2="120" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <line x1="20" y1="120" x2="110" y2="120" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <line x1="20" y1="90" x2="110" y2="120" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <text x="9" y="110" text-anchor="middle" font-size="14" fill="currentColor">−1</text>
  <text x="65" y="142" text-anchor="middle" font-size="14" fill="currentColor">3</text>
</svg>

The rise is $-1$ and the run is $3$, so

$$m = \frac{\text{rise}}{\text{run}} = \frac{-1}{3} = -\frac{1}{3}$$

This means that the line drops $1$ unit for every $3$ units of run.

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard of five rows of five pegs (columns numbered from the left, rows from the top). A rubber band is stretched between the peg in column 1, row 2 and the peg in column 4, row 4." style="max-width: 200px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="20" y1="60" x2="110" y2="120" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
</svg>

{{< fillin
  question="What is the slope of the line on the geoboard shown above? Enter it as a fraction."
  answer="-\frac{2}{3}"
  answerForm="fraction lowest-terms"
  answerDisplay="$-\tfrac{2}{3}$"
  hint="Start at the left peg and count the rise to the second peg's row (up is positive, down is negative), then the run across to it, and write rise over run."
>}}

In the first example the slope is positive, and in the second the slope is
negative. Do you notice any difference in the two lines shown in (a) and (b)?

<svg viewBox="0 0 350 212" role="img" aria-label="Two geoboards side by side, each five rows of five pegs (columns numbered from the left, rows from the top). In geoboard (a), a rubber band is stretched between the peg in column 1, row 5 and the peg in column 5, row 2; below it, m = 3/4. In geoboard (b), a rubber band is stretched between the peg in column 1, row 3 and the peg in column 4, row 4; below it, m = −1/3." style="max-width: 380px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="20" y1="150" x2="140" y2="60" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <circle cx="210" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="240" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="270" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="300" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="330" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="210" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="240" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="270" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="300" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="330" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="210" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="240" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="270" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="300" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="330" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="210" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="240" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="270" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="300" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="330" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="210" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="240" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="270" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="300" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="330" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="210" y1="90" x2="300" y2="120" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <text x="80" y="180" text-anchor="middle" font-size="14" fill="currentColor">m = 3/4</text>
  <text x="80" y="202" text-anchor="middle" font-size="14" fill="currentColor">(a)</text>
  <text x="270" y="180" text-anchor="middle" font-size="14" fill="currentColor">m = −1/3</text>
  <text x="270" y="202" text-anchor="middle" font-size="14" fill="currentColor">(b)</text>
</svg>

We "read" a line from left to right just like we read words in English. As
you read from left to right, the line in (a) is going up; it has **positive
slope**. The line in (b) is going down; it has **negative slope**.

<svg viewBox="0 0 320 100" role="img" aria-label="Two lines side by side: the left line rises from left to right and is labeled positive slope; the right line drops from left to right and is labeled negative slope." style="max-width: 340px; display: block; margin: 1.5rem auto">
  <line x1="30" y1="70" x2="102" y2="25" stroke="currentColor" stroke-width="2" />
  <polygon points="110,20 97.4,21.4 102.7,29.9" fill="currentColor" />
  <text x="70" y="95" text-anchor="middle" font-size="14" fill="currentColor">Positive slope</text>
  <line x1="210" y1="20" x2="282" y2="65" stroke="currentColor" stroke-width="2" />
  <polygon points="290,70 277.3,68.6 282.6,60.1" fill="currentColor" />
  <text x="250" y="95" text-anchor="middle" font-size="14" fill="currentColor">Negative slope</text>
</svg>

**Example.** Use a geoboard to model a line with slope $\tfrac{1}{2}$.

To model a line on a geoboard, we need the rise and the run.

$$m = \frac{\text{rise}}{\text{run}} \qquad\qquad \frac{1}{2} = \frac{\text{rise}}{\text{run}}$$

So the rise is $1$ and the run is $2$. Start at a peg in the lower left of
the geoboard. Stretch the rubber band up $1$ unit, and then right $2$ units.

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard of five rows of five pegs (columns numbered from the left, rows from the top). A right triangle through the pegs in column 1, row 4; column 1, row 3; and column 3, row 3: the rubber band goes up 1 unit and then right 2 units, with the vertical side labeled 1 and the horizontal side labeled 2." style="max-width: 200px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="20" y1="120" x2="20" y2="90" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <line x1="20" y1="90" x2="80" y2="90" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <line x1="20" y1="120" x2="80" y2="90" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <text x="8" y="110" text-anchor="middle" font-size="14" fill="currentColor">1</text>
  <text x="50" y="82" text-anchor="middle" font-size="14" fill="currentColor">2</text>
</svg>

The hypotenuse of the right triangle formed by the rubber band represents a
line whose slope is $\tfrac{1}{2}$.

**Example.** Use a geoboard to model a line with slope $\tfrac{-1}{4}$.

$$m = \frac{\text{rise}}{\text{run}} \qquad\qquad \frac{-1}{4} = \frac{\text{rise}}{\text{run}}$$

So the rise is $-1$ and the run is $4$. Since the rise is negative, we choose
a starting peg on the upper left that will give us room to count down. We
stretch the rubber band down $1$ unit, then go to the right $4$ units.

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard of five rows of five pegs (columns numbered from the left, rows from the top). A right triangle through the pegs in column 1, row 2; column 1, row 3; and column 5, row 3: the rubber band goes down 1 unit and then right 4 units, with the vertical side labeled −1 and the horizontal side labeled 4." style="max-width: 200px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="20" y1="60" x2="20" y2="90" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <line x1="20" y1="90" x2="140" y2="90" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <line x1="20" y1="60" x2="140" y2="90" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
  <text x="9" y="80" text-anchor="middle" font-size="14" fill="currentColor">−1</text>
  <text x="80" y="112" text-anchor="middle" font-size="14" fill="currentColor">4</text>
</svg>

The hypotenuse of the right triangle formed by the rubber band represents a
line whose slope is $\tfrac{-1}{4}$.

## Use $m = \tfrac{\text{rise}}{\text{run}}$ to find the slope of a line from its graph

Now we'll look at some graphs on the $xy$-coordinate plane and see how to
find their slopes. The method is very similar to what we just modeled on our
geoboards.

To find the slope of a line from its graph, we locate two points on the line
whose coordinates are integers. Starting with the point on the left, we sketch
a right triangle, going from the first point to the second, so we can count
the rise and the run.

{{< callout type="info" >}}
  **Find the slope of a line from its graph.**

  1. Locate two points on the line whose coordinates are integers.
  2. Starting with the point on the left, sketch a right triangle, going from
     the first point to the second point.
  3. Count the rise and the run on the legs of the triangle.
  4. Take the ratio of rise to run to find the slope, $m = \tfrac{\text{rise}}{\text{run}}$.
{{< /callout >}}

**Example.** Find the slope of the line shown.

<div class="ap-figure">
<svg role="img" aria-label="A line graphed on the xy-plane through the points (0, -3) and (5, 1). A rise of 4 and a run of 5 are marked between the two points." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 252" width="332" height="252" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="226" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="226" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="226" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="226" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="226" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="226" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="226" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="226" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="226" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="226" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="226" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="226" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="226" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="226" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="306" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="306" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="306" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="306" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="306" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="306" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="306" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="306" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="306" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="126" x2="308" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="24" x2="166" y2="228" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,126 308,131 308,121" fill="currentColor"/>
  <polygon points="166,14 171,24 161,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="166,238 161,228 171,228" fill="currentColor"/>
  <text x="316" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="116.3" y1="225.8" x2="304.2" y2="75.4" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="312,69.2 307.3,79.4 301.1,71.5" fill="currentColor"/>
  <polygon points="108.5,232 113.2,221.8 119.4,229.7" fill="currentColor"/>
  <line x1="166" y1="186" x2="166" y2="106" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="166" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="166" cy="186" r="4" fill="currentColor"/>
  <circle cx="266" cy="106" r="4" fill="currentColor"/>
  <text x="177.2" y="206.2" font-size="13" fill="currentColor" text-anchor="start">(0, −3)</text>
  <text x="254.8" y="94.8" font-size="13" fill="currentColor" text-anchor="end">(5, 1)</text>
  <text x="152" y="150" font-size="13" fill="currentColor" text-anchor="end">rise = 4</text>
  <text x="206" y="121" font-size="13" fill="currentColor" text-anchor="middle">run = 5</text>
</svg>
</div>

We locate two points with integer coordinates, $(0, -3)$ and $(5, 1)$. Starting
at the point on the left, $(0, -3)$, we sketch a right triangle to $(5, 1)$.
The rise is $4$ and the run is $5$, so:

$$m = \frac{\text{rise}}{\text{run}} = \frac{4}{5}$$

The slope of the line is $\tfrac{4}{5}$. This means that $y$ increases $4$
units as $x$ increases $5$ units.

It does not matter which of the two points you start from, or which point you
call "first" — the slope of the line is always the same.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with x from −3 to 5 and y from −7 to 3. A line falls from left to right through the points (0, −2) and (3, −6).","xMin":-3,"xMax":5,"yMin":-7,"yMax":3,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,-2],[3,-6]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the slope of the line shown above, as a fraction."
  answer="-\frac{4}{3}"
  answerForm="fraction lowest-terms"
  answerDisplay="$-\tfrac{4}{3}$"
  hint="Locate two points on the line with integer coordinates, sketch a right triangle from the point on the left, and count the rise and the run."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with x from −3 to 6 and y from −3 to 2. A line falls from left to right through the points (0, 1) and (5, −2).","xMin":-3,"xMax":6,"yMin":-3,"yMax":2,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,1],[5,-2]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the slope of the line shown above, as a fraction."
  answer="-\frac{3}{5}"
  answerForm="fraction lowest-terms"
  answerDisplay="$-\tfrac{3}{5}$"
  hint="Locate two points on the line with integer coordinates, sketch a right triangle from the point on the left, and count the rise and the run."
>}}

## Find the slope of horizontal and vertical lines

Horizontal and vertical lines have equations with just one variable —
$y = b$ for a horizontal line and $x = a$ for a vertical line. What is their
slope?

For a horizontal line, any two points on it have the same $y$-coordinate, so
the rise between them is always $0$. Since $m = \tfrac{\text{rise}}{\text{run}} = \tfrac{0}{\text{run}} = 0$,
every horizontal line has slope $0$.

{{< callout type="info" >}}
  **Slope of a horizontal line.** The slope of a horizontal line, $y = b$, is
  $0$.
{{< /callout >}}

For a vertical line, any two points on it have the same $x$-coordinate, so the
run between them is always $0$. Since division by $0$ is undefined, the slope
of every vertical line is undefined.

{{< callout type="info" >}}
  **Slope of a vertical line.** The slope of a vertical line, $x = a$, is
  undefined.
{{< /callout >}}

**Example.** Find the slope of each line: (a) $x = 8$ (b) $y = -5$.

(a) $x = 8$ is a vertical line. Its slope is undefined.

(b) $y = -5$ is a horizontal line. It has slope $0$.

{{< multiplechoice
  question="What is the slope of the line $x = -4$?"
  hint="Decide whether the line is horizontal or vertical, then pick two points on it and find the rise and the run between them."
  answer="undefined"
>}}
$-4$
$0$
$1$
undefined
{{< /multiplechoice >}}

{{< multiplechoice
  question="What is the slope of the line $y = 7$?"
  hint="Decide whether the line is horizontal or vertical, then pick two points on it and find the rise and the run between them."
  answer="$0$"
>}}
$7$
undefined
$0$
$1$
{{< /multiplechoice >}}

## Use the slope formula to find the slope of a line between two points

Sometimes we need to find the slope of a line between two points without a
graph to count the rise and run. To do this algebraically, we use subscript
notation: $(x_1, y_1)$ ("$x$ sub $1$, $y$ sub $1$") names the first point and
$(x_2, y_2)$ ("$x$ sub $2$, $y$ sub $2$") names the second.

The rise between two points is the difference in their $y$-coordinates,
$y_2 - y_1$, and the run is the difference in their $x$-coordinates,
$x_2 - x_1$. Substituting these into $m = \tfrac{\text{rise}}{\text{run}}$
gives the slope formula.

{{< callout type="info" >}}
  **Slope formula.** The slope of the line between two points $(x_1, y_1)$ and
  $(x_2, y_2)$ is
  $$m = \frac{y_2 - y_1}{x_2 - x_1}$$
  The slope is: $y$ of the second point minus $y$ of the first point, over
  $x$ of the second point minus $x$ of the first point.
{{< /callout >}}

**Example.** Use the slope formula to find the slope of the line through the
points $(1, 2)$ and $(4, 5)$.

We call $(1, 2)$ point #1 and $(4, 5)$ point #2, so $(x_1, y_1) = (1, 2)$ and
$(x_2, y_2) = (4, 5)$. Substituting into the slope formula:

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{5 - 2}{4 - 1} = \frac{3}{3} = 1$$

It does not matter which point you call point #1 and which you call point
#2 — the slope will be the same either way.

**Example.** Use the slope formula to find the slope of the line through the
points $(-2, -3)$ and $(-7, 4)$.

We call $(-2, -3)$ point #1 and $(-7, 4)$ point #2.

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{4 - (-3)}{-7 - (-2)} = \frac{7}{-5} = -\frac{7}{5}$$

{{< fillin
  question="Use the slope formula to find the slope of the line through the points $(8, 5)$ and $(6, 3)$."
  answer="1"
  answerForm="decimal"
  hint="Call one point $(x_1, y_1)$ and the other $(x_2, y_2)$, substitute into $m = \tfrac{y_2 - y_1}{x_2 - x_1}$, and simplify."
>}}

{{< fillin
  question="Use the slope formula to find the slope of the line through the points $(-3, 4)$ and $(2, -1)$."
  answer="-1"
  answerForm="decimal"
  hint="Substitute into $m = \tfrac{y_2 - y_1}{x_2 - x_1}$, subtracting in the same order in the numerator and the denominator, and put parentheses around each negative coordinate you subtract."
>}}

## Graph a line given a point and the slope

We have graphed lines by plotting points, by using intercepts, and by
recognizing horizontal and vertical lines. Another method, the
**point-slope method**, graphs a line from one known point and the slope: we
plot the point, then use the definition of slope to find and mark a second
point.

{{< callout type="info" >}}
  **Graph a line given a point and the slope.**

  1. Plot the given point.
  2. Use the slope formula $m = \tfrac{\text{rise}}{\text{run}}$ to identify
     the rise and the run.
  3. Starting at the given point, count out the rise and run to mark the
     second point.
  4. Connect the two points with a line.
{{< /callout >}}

**Example.** Graph the line passing through the point $(1, -1)$ whose slope is
$m = \tfrac{3}{4}$.

We plot $(1, -1)$. The slope $m = \tfrac{3}{4}$ gives rise $= 3$ and
run $= 4$. Starting at $(1, -1)$, we count up $3$ and right $4$ to mark the
second point, $(5, 2)$, then connect the two points with a line.

<div class="ap-figure">
<svg role="img" aria-label="A line through the points (1, -1) and (5, 2), with a rise of 3 and a run of 4 marked between them." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 252" width="332" height="252" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="226" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="226" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="226" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="226" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="226" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="226" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="226" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="226" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="226" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="226" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="226" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="226" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="226" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="226" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="306" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="306" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="306" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="306" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="306" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="306" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="306" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="306" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="306" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="126" x2="308" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="24" x2="166" y2="228" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,126 308,131 308,121" fill="currentColor"/>
  <polygon points="166,14 171,24 161,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="166,238 161,228 171,228" fill="currentColor"/>
  <text x="316" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="79.3" y1="226" x2="304" y2="57.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="312,51.5 307,61.5 301,53.5" fill="currentColor"/>
  <polygon points="71.3,232 76.3,222 82.3,230" fill="currentColor"/>
  <line x1="186" y1="146" x2="186" y2="86" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="186" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="186" cy="146" r="4" fill="currentColor"/>
  <circle cx="266" cy="86" r="4" fill="currentColor"/>
  <text x="197.2" y="166.2" font-size="13" fill="currentColor" text-anchor="start">(1, −1)</text>
  <text x="277.2" y="106.2" font-size="13" fill="currentColor" text-anchor="start">(5, 2)</text>
  <text x="181" y="121" font-size="13" fill="currentColor" text-anchor="end">3</text>
  <text x="226" y="78" font-size="13" fill="currentColor" text-anchor="middle">4</text>
</svg>
</div>

{{< multiplechoice
  question="Which graph shows the line through $(2, -2)$ with slope $m = \tfrac{4}{3}$?"
  mode="graph"
  answerIndex="1"
  hint="Start at $(2, -2)$, read the rise and the run from the slope, count them out to a second point, and check which line passes through both."
>}}
{"ariaLabel":"A line marked at (2, −2) that falls steeply from left to right, dropping more than it moves sideways.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":-1.3333333333333333,"intercept":0.6666666666666667}],"points":[{"at":[2,-2]}]}
===OPT===
{"ariaLabel":"A line marked at (2, −2) that rises steeply from left to right, climbing more than it moves sideways.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":1.3333333333333333,"intercept":-4.666666666666667}],"points":[{"at":[2,-2]}]}
===OPT===
{"ariaLabel":"A line marked at (2, −2) that rises gently from left to right, climbing less than it moves sideways.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":0.75,"intercept":-3.5}],"points":[{"at":[2,-2]}]}
{{< /multiplechoice >}}

## Solve slope applications

Slope has many applications in the real world — the pitch of a roof, the
grade of a highway, and the drop of a pipe are all slopes.

**Example.** The pitch of a building's roof is the slope of the roof. A roof
rises $9$ feet over a run of $18$ feet. What is the slope of the roof?

$$m = \frac{\text{rise}}{\text{run}} = \frac{9}{18} = \frac{1}{2}$$

The roof rises $1$ foot for every $2$ feet of horizontal run.

{{< fillin
  question="A roof rises 14 feet over a run of 24 feet. What is the slope of the roof, as a fully simplified fraction?"
  answer="\frac{7}{12}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{7}{12}$"
  hint="Write the rise over the run, then divide out the common factor."
>}}

**Example.** Sewage pipes must slope down $\tfrac{1}{4}$ inch per foot in
order to drain properly. What is the required slope?

The pipe drops $\tfrac{1}{4}$ inch, a negative rise, over a run of $1$ foot,
which is $12$ inches:

$$m = \frac{\text{rise}}{\text{run}} = \frac{-\tfrac{1}{4}\text{ inch}}{12\text{ inches}} = -\frac{1}{48}$$

The pipe drops $1$ inch for every $48$ inches of horizontal run.

{{< fillin
  question="Find the slope of a pipe that slopes down $\tfrac{1}{3}$ inch per foot (12 inches). Write your answer as a simplified fraction."
  answer="-\frac{1}{36}"
  answerForm="fraction lowest-terms"
  answerDisplay="$-\tfrac{1}{36}$"
  hint="Write the rise over the run with both in inches, deciding the rise's sign from which way the pipe goes, then simplify the complex fraction."
>}}

## Key terms

**geoboard** — a board with a grid of pegs on it, used with rubber bands to
model lines. **positive slope** — the slope of a line that goes up as you
read from left to right. **negative slope** — the slope of a line that goes
down as you read from left to right. **slope of a line** — the ratio of the rise (vertical change) to the run
(horizontal change) between two points on the line, $m = \tfrac{\text{rise}}{\text{run}} = \tfrac{y_2 - y_1}{x_2 - x_1}$.
**slope formula** — the algebraic formula for computing slope from two named
points, $(x_1, y_1)$ and $(x_2, y_2)$. **point-slope method** — graphing a
line by plotting one known point, then using the slope to count out and mark
a second point.

## Practice

### Use geoboards to model slope

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard of five rows of five pegs (columns numbered from the left, rows from the top). A rubber band is stretched between the peg in column 1, row 3 and the peg in column 5, row 2." style="max-width: 200px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="20" y1="90" x2="140" y2="60" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
</svg>

{{< fillin
  question="Find the slope modeled on the geoboard shown above. Enter it as a fraction."
  answer="\frac{1}{4}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{1}{4}$"
  hint="Start at the left peg, count the rise to the second peg's row (up is positive, down is negative) and the run across to it, then write rise over run."
>}}

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard of five rows of five pegs (columns numbered from the left, rows from the top). A rubber band is stretched between the peg in column 2, row 1 and the peg in column 4, row 4." style="max-width: 200px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="120" r="3" fill="currentColor" opacity="0.5" /><circle cx="20" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="50" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="80" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="110" cy="150" r="3" fill="currentColor" opacity="0.5" /><circle cx="140" cy="150" r="3" fill="currentColor" opacity="0.5" />
  <line x1="50" y1="30" x2="110" y2="120" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7" />
</svg>

{{< fillin
  question="Find the slope modeled on the geoboard shown above. Enter it as a fraction."
  answer="-\frac{3}{2}"
  answerForm="fraction lowest-terms"
  answerDisplay="$-\tfrac{3}{2}$"
  hint="Start at the left peg, count the rise to the second peg's row (up is positive, down is negative) and the run across to it, then write rise over run."
>}}

### Use $m = \tfrac{\text{rise}}{\text{run}}$ to find the slope of a line from its graph

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with x from −2 to 10 and y from −10 to 2. A line rises from left to right through the points (0, −4), (5, −2), and (10, 0).","xMin":-2,"xMax":10,"yMin":-10,"yMax":2,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,-4],[10,0]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the slope of the line shown above, as a fraction."
  answer="\frac{2}{5}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{2}{5}$"
  hint="Pick two points where the line crosses grid intersections, count the rise and the run from the left point to the right one, and simplify $\tfrac{\text{rise}}{\text{run}}$."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from −6 to 6 on both axes. A line rises from left to right through the points (−4, −6), (0, −1), and (4, 4).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"tickStep":1,"lines":[{"through":[[-4,-6],[4,4]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the slope of the line shown above, as a fraction."
  answer="\frac{5}{4}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{5}{4}$"
  hint="Pick two points where the line crosses grid intersections, count the rise and the run from the left point to the right one, and simplify $\tfrac{\text{rise}}{\text{run}}$."
>}}

### Find the slope of horizontal and vertical lines

{{< fillin
  question="Find the slope of the line $y = 3$."
  answer="0"
  answerForm="decimal"
  hint="Decide whether the line is horizontal or vertical, then pick two points on it and find the rise and the run between them."
>}}

{{< multiplechoice
  question="Find the slope of the line $x = 4$."
  answer="undefined"
  hint="Decide whether the line is horizontal or vertical, then pick two points on it and find the rise and the run between them."
>}}
$4$
$0$
undefined
{{< /multiplechoice >}}

### Use the slope formula to find the slope of a line between two points

{{< fillin
  question="Use the slope formula to find the slope of the line between $(1, 4)$ and $(3, 9)$. Write it as a fraction."
  answer="\frac{5}{2}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{5}{2}$"
  hint="Use $m = \tfrac{y_2 - y_1}{x_2 - x_1}$, subtracting in the same order in both the numerator and the denominator."
>}}

{{< fillin
  question="Use the slope formula to find the slope of the line between $(0, 3)$ and $(4, 6)$. Write it as a fraction."
  answer="\frac{3}{4}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{3}{4}$"
  hint="Use $m = \tfrac{y_2 - y_1}{x_2 - x_1}$, subtracting in the same order in both the numerator and the denominator."
>}}

### Graph a line given a point and the slope

{{< graphplot
  question="Graph the line through $(1, -2)$ with slope $m = \tfrac{3}{4}$ by placing three points on it."
  answerDisplay="A line through $(1, -2)$ with slope $\tfrac{3}{4}$"
  ariaLabel="A blank coordinate grid from −12 to 12 on both axes."
  hint="Plot $(1, -2)$, read the rise and the run from the slope, and count them out from that point; count them the opposite way for a third point."
>}}
{"answer":{"slope":0.75,"intercept":-2.75,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

{{< graphplot
  question="Graph the line through $(-3, 4)$ with slope $m = -\tfrac{3}{2}$ by placing three points on it."
  answerDisplay="A line through $(-3, 4)$ with slope $-\tfrac{3}{2}$"
  ariaLabel="A blank coordinate grid from −12 to 12 on both axes."
  hint="Plot $(-3, 4)$, read the rise and the run from the slope, and count them out from that point; count them the opposite way for a third point."
>}}
{"answer":{"slope":-1.5,"intercept":-0.5,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

### Solve slope applications

{{< fillin
  question="A local road has a grade of 6%. The grade is its slope expressed as a percent. Find the slope as a fraction and simplify."
  answer="\frac{3}{50}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{3}{50}$"
  hint="A percent is a number of hundredths: write the grade as a fraction, then simplify."
>}}

{{< fillin
  question="A local road has a grade of 6%. Using the slope written as a fraction and simplified, what rise and run would reflect this slope? Enter the rise first and the run second, separated by a comma."
  answer="3,50"
  answerForm="decimal"
  answerDisplay="rise $= 3$, run $= 50$"
  hint="Use the numerator and denominator of the simplified fractional slope as rise and run."
>}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 4.4: Understand Slope of a Line](https://openstax.org/books/elementary-algebra-2e/pages/4-4-understand-slope-of-a-line) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: kept a selection of the worked examples and recreated the geoboard and coordinate-plane figures as accessible inline graphics, leaving out the Manipulative Mathematics notes; omitted the Be Prepared quiz and Media links; converted selected practice problems ("Try Its") into interactive exercises with instant feedback, posing one graphing Try It as a choice among three graphs; and adapted selected end-of-section exercises into the interactive Practice block, recreating two source geoboards and two source line graphs and splitting one two-result application into adjacent components.</small>
