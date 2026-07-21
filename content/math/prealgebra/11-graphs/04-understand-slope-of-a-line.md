---
title: Understand Slope of a Line
description: >-
  Using geoboards to model slope, finding the slope of a line from its graph,
  finding the slope of horizontal and vertical lines, using the slope formula
  to find the slope of a line between two points, and graphing a line given a
  point and the slope — adapted from OpenStax Prealgebra 2e, Section 11.4.
source_section: "11.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** use geoboards to model
  slope, find the slope of a line from its graph, find the slope of
  horizontal and vertical lines, use the slope formula to find the slope of a
  line between two points, and graph a line given a point and the slope.
{{< /callout >}}

As we've been graphing linear equations, we've seen that some lines slant up
as they go from left to right and some lines slant down. Some lines are very
steep and some lines are flatter. What determines whether a line slants up or
down, and if its slant is steep or flat?

The steepness of the slant of a line is called the **slope of the line**.
The concept of slope has many applications in the real world. The pitch of a
roof and the grade of a highway or wheelchair ramp are just some examples in
which you literally see slopes. And when you ride a bicycle, you feel the
slope as you pump uphill or coast downhill.

## Use geoboards to model slope

Using rubber bands on a geoboard gives a concrete way to model lines on a
coordinate grid. By stretching a rubber band between two pegs, we can
discover how to find the slope of a line.

We start by stretching a rubber band between two pegs to make a line, as
shown below.

<svg viewBox="0 0 160 160" role="img" aria-label="A geoboard with a rubber band stretched diagonally from the bottom-left peg to a peg up and to the right, forming a line." style={{ maxWidth: 200, display: 'block', margin: '1.5rem auto' }}>
  {[0, 1, 2, 3, 4].map((row) =>
    [0, 1, 2, 3, 4].map((col) => (
      <circle key={`${row}-${col}`} cx={20 + col * 30} cy={20 + row * 30} r="3" fill="currentColor" opacity="0.5" />
    ))
  )}
  <line x1="20" y1="140" x2="110" y2="50" stroke="currentColor" strokeWidth="4" opacity="0.7" />
</svg>

Does it look like a line? Now we stretch one part of the rubber band straight
up from the left peg and around a third peg to make the sides of a right
triangle. We carefully make a $90°$ angle around the third peg, so that one
side is vertical and the other is horizontal.

<svg viewBox="0 0 160 160" role="img" aria-label="The same geoboard. The rubber band now forms a right triangle: a vertical side going up from the bottom-left peg, a horizontal side going right, and the diagonal hypotenuse connecting them." style={{ maxWidth: 200, display: 'block', margin: '1.5rem auto' }}>
  {[0, 1, 2, 3, 4].map((row) =>
    [0, 1, 2, 3, 4].map((col) => (
      <circle key={`${row}-${col}`} cx={20 + col * 30} cy={20 + row * 30} r="3" fill="currentColor" opacity="0.5" />
    ))
  )}
  <line x1="20" y1="140" x2="20" y2="50" stroke="currentColor" strokeWidth="4" opacity="0.7" />
  <line x1="20" y1="50" x2="110" y2="50" stroke="currentColor" strokeWidth="4" opacity="0.7" />
  <line x1="20" y1="140" x2="110" y2="50" stroke="currentColor" strokeWidth="4" opacity="0.7" />
</svg>

To find the slope of the line, we measure the distance along the vertical
and horizontal legs of the triangle. The vertical distance is called the
**rise** and the horizontal distance is called the **run**, as shown below.

<svg viewBox="-20 0 220 110" role="img" aria-label="A right angle with an upward arrow labeled rise on the vertical side and a rightward arrow labeled run on the horizontal side, meeting at the corner." style={{ maxWidth: 220, display: 'block', margin: '1.5rem auto' }}>
  <line x1="30" y1="90" x2="30" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow1)" />
  <line x1="30" y1="20" x2="160" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow2)" />
  <text x="20" y="60" textAnchor="end" fontSize="15" fill="currentColor">rise</text>
  <text x="95" y="12" textAnchor="middle" fontSize="15" fill="currentColor">run</text>
  <defs>
    <marker id="arrow1" markerWidth="8" markerHeight="8" refX="4" refY="7" orient="auto">
      <path d="M0,8 L4,0 L8,8 Z" fill="currentColor" />
    </marker>
    <marker id="arrow2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
    </marker>
  </defs>
</svg>

It may help to remember the rise like a hot air balloon that goes straight
up, as if along the $y\text{-axis}$, and the run like a jogger who runs
straight across, as if along the $x\text{-axis}$.

On our geoboard, the rise is $2$ units because the rubber band goes up $2$
spaces on the vertical leg. Be sure to count the spaces between the pegs
rather than the pegs themselves! The rubber band goes across $3$ spaces on
the horizontal leg, so the run is $3$ units.

<svg viewBox="0 0 160 170" role="img" aria-label="The geoboard triangle with the horizontal leg labeled 3 above it and the vertical leg labeled 2 to its left." style={{ maxWidth: 200, display: 'block', margin: '1.5rem auto' }}>
  {[0, 1, 2, 3, 4].map((row) =>
    [0, 1, 2, 3, 4].map((col) => (
      <circle key={`${row}-${col}`} cx={20 + col * 30} cy={30 + row * 30} r="3" fill="currentColor" opacity="0.5" />
    ))
  )}
  <line x1="20" y1="150" x2="20" y2="60" stroke="currentColor" strokeWidth="4" opacity="0.7" />
  <line x1="20" y1="60" x2="110" y2="60" stroke="currentColor" strokeWidth="4" opacity="0.7" />
  <line x1="20" y1="150" x2="110" y2="60" stroke="currentColor" strokeWidth="4" opacity="0.7" />
  <text x="65" y="48" textAnchor="middle" fontSize="14" fill="currentColor">3</text>
  <text x="8" y="108" textAnchor="middle" fontSize="14" fill="currentColor">2</text>
</svg>

The slope of a line is the ratio of the rise to the run. So the slope of our
line is $\tfrac{2}{3}$. In mathematics, the slope is always represented by
the letter $m$.

{{< callout type="info" >}}
  **Slope of a line.** The slope of a line is $m = \tfrac{\text{rise}}{\text{run}}$.
  The **rise** measures the vertical change and the **run** measures the
  horizontal change.
{{< /callout >}}

$$m = \frac{\text{rise}}{\text{run}} = \frac{2}{3}$$

When we work with geoboards, it is a good idea to get in the habit of
starting at a peg on the left and connecting to a peg to the right, then
stretching the rubber band to form a right triangle. If we start by going up,
the rise is positive, and if we stretch it down, the rise is negative. We
count the run from left to right, so the run is always positive. Since the
slope formula has rise over run, it may be easier to always count out the
rise first and then the run.

**Example.** What is the slope of the line on the geoboard shown?

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard triangle: horizontal leg of 4 units on top and vertical leg of 3 units on the left, with the diagonal hypotenuse connecting the bottom-left peg to the top-right peg." style={{ maxWidth: 200, display: 'block', margin: '1.5rem auto' }}>
  {[0, 1, 2, 3, 4].map((row) =>
    [0, 1, 2, 3, 4].map((col) => (
      <circle key={`${row}-${col}`} cx={20 + col * 30} cy={30 + row * 30} r="3" fill="currentColor" opacity="0.5" />
    ))
  )}
  <line x1="20" y1="150" x2="20" y2="30" stroke="currentColor" strokeWidth="4" opacity="0.7" />
  <line x1="20" y1="30" x2="140" y2="30" stroke="currentColor" strokeWidth="4" opacity="0.7" />
  <line x1="20" y1="150" x2="140" y2="30" stroke="currentColor" strokeWidth="4" opacity="0.7" />
  <text x="80" y="18" textAnchor="middle" fontSize="14" fill="currentColor">4</text>
  <text x="8" y="92" textAnchor="middle" fontSize="14" fill="currentColor">3</text>
</svg>

Use the definition of slope, $m = \tfrac{\text{rise}}{\text{run}}$. Start at
the left peg and make a right triangle by stretching the rubber band up and
to the right to reach the second peg. The rise is $3$ units and the run is
$4$ units.

$$m = \frac{3}{\text{run}} = \frac{3}{4}$$

The slope is $\tfrac{3}{4}$.

{{< fillin
  question="A geoboard triangle has a rise of $5$ units and a run of $2$ units, both counted left to right and going up. What is the slope of the line?"
  answer="\frac{5}{2}"
  answerDisplay="$\tfrac{5}{2}$"
  hint="Slope is rise over run."
>}}

{{< fillin
  question="A geoboard triangle has a rise of $2$ units and a run of $4$ units, both counted left to right and going up. What is the slope of the line, written in simplest form?"
  answer="\frac{1}{2}"
  answerDisplay="$\tfrac{1}{2}$"
  hint="Slope is rise over run. Simplify the fraction $\tfrac{2}{4}$."
>}}

What is the slope of a line that goes down instead of up? Start at the left
peg and make a right triangle by stretching the rubber band to the peg on
the right. This time we need to stretch the rubber band down to make the
vertical leg, so the rise is negative.

The rise is $-1$ and the run is $3$, so

$$m = \frac{\text{rise}}{\text{run}} = \frac{-1}{3} = -\frac{1}{3}$$

The slope is $-\tfrac{1}{3}$.

Notice that the first line has positive slope and the second line has
negative slope. As you read from left to right, a line with positive slope
is going up, and a line with negative slope is going down.

<svg viewBox="0 0 320 100" role="img" aria-label="Two arrows side by side: the left arrow points up and to the right, labeled positive slope; the right arrow points down and to the right, labeled negative slope." style={{ maxWidth: 340, display: 'block', margin: '1.5rem auto' }}>
  <line x1="30" y1="70" x2="110" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowA)" />
  <text x="70" y="95" textAnchor="middle" fontSize="14" fill="currentColor">Positive slope</text>
  <line x1="210" y1="20" x2="290" y2="70" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowB)" />
  <text x="250" y="95" textAnchor="middle" fontSize="14" fill="currentColor">Negative slope</text>
  <defs>
    <marker id="arrowA" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
    </marker>
    <marker id="arrowB" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
    </marker>
  </defs>
</svg>

{{< fillin
  question="A geoboard triangle has a rise of $-2$ units and a run of $5$ units, counted left to right with the vertical leg stretched down. What is the slope of the line?"
  answer="-\frac{2}{5}"
  answerDisplay="$-\tfrac{2}{5}$"
  hint="A downward rise counted left to right is negative, so the slope is negative."
>}}

**Example.** Use a geoboard to model a line with slope $\tfrac{1}{2}$.

To model a line with a specific slope on a geoboard, we need to know the
rise and the run.

$$m = \frac{\text{rise}}{\text{run}} \qquad\qquad \frac{1}{2} = \frac{\text{rise}}{\text{run}}$$

So the rise is $1$ unit and the run is $2$ units. Start at a peg in the
lower left of the geoboard. Stretch the rubber band up $1$ unit, and then
right $2$ units.

<svg viewBox="0 0 160 170" role="img" aria-label="A geoboard triangle modeling slope one half: a rise of 1 unit up and a run of 2 units to the right, with the diagonal hypotenuse connecting the two ends." style={{ maxWidth: 200, display: 'block', margin: '1.5rem auto' }}>
  {[0, 1, 2, 3, 4].map((row) =>
    [0, 1, 2, 3, 4].map((col) => (
      <circle key={`${row}-${col}`} cx={20 + col * 30} cy={30 + row * 30} r="3" fill="currentColor" opacity="0.5" />
    ))
  )}
  <line x1="20" y1="150" x2="20" y2="120" stroke="currentColor" strokeWidth="4" opacity="0.7" />
  <line x1="20" y1="120" x2="80" y2="120" stroke="currentColor" strokeWidth="4" opacity="0.7" />
  <line x1="20" y1="150" x2="80" y2="120" stroke="currentColor" strokeWidth="4" opacity="0.7" />
  <text x="50" y="108" textAnchor="middle" fontSize="14" fill="currentColor">2</text>
  <text x="8" y="140" textAnchor="middle" fontSize="14" fill="currentColor">1</text>
</svg>

The hypotenuse of the right triangle formed by the rubber band represents a
line with a slope of $\tfrac{1}{2}$.

{{< fillin
  question="Use the rise-over-run definition of slope: what run pairs with a rise of $1$ to model a line with slope $\tfrac{1}{3}$?"
  answer="3"
  hint="Set $\tfrac{1}{3}$ equal to $\tfrac{\text{rise}}{\text{run}}$ with rise $= 1$, and solve for the run."
>}}

**Example.** Use a geoboard to model a line with slope $-\tfrac{1}{4}$.

$$m = \frac{\text{rise}}{\text{run}} \qquad\qquad -\frac{1}{4} = \frac{\text{rise}}{\text{run}}$$

So the rise is $-1$ and the run is $4$. Since the rise is negative, we
choose a starting peg on the upper left that will give us room to count
down. We stretch the rubber band down $1$ unit, then to the right $4$ units.

<svg viewBox="0 0 190 170" role="img" aria-label="A geoboard triangle modeling slope negative one fourth: a rise of 1 unit going down and a run of 4 units to the right, with the diagonal hypotenuse connecting the two ends." style={{ maxWidth: 220, display: 'block', margin: '1.5rem auto' }}>
  {[0, 1, 2, 3, 4].map((row) =>
    [0, 1, 2, 3, 4, 5].map((col) => (
      <circle key={`${row}-${col}`} cx={20 + col * 30} cy={30 + row * 30} r="3" fill="currentColor" opacity="0.5" />
    ))
  )}
  <line x1="20" y1="30" x2="20" y2="60" stroke="currentColor" strokeWidth="4" opacity="0.7" />
  <line x1="20" y1="60" x2="140" y2="60" stroke="currentColor" strokeWidth="4" opacity="0.7" />
  <line x1="20" y1="30" x2="140" y2="60" stroke="currentColor" strokeWidth="4" opacity="0.7" />
  <text x="80" y="76" textAnchor="middle" fontSize="14" fill="currentColor">4</text>
  <text x="8" y="50" textAnchor="middle" fontSize="14" fill="currentColor">1</text>
</svg>

The hypotenuse of the right triangle formed by the rubber band represents a
line whose slope is $-\tfrac{1}{4}$.

{{< fillin
  question="Use a geoboard model: what is the slope of a line with rise $-2$ and run $1$?"
  answer="-2"
  hint="Slope is rise over run; a run of $1$ means the slope equals the rise."
>}}

## Find the slope of a line from its graph

Now we'll look at some graphs on a coordinate grid to find their slopes. The
method is very similar to what we just modeled on our geoboards.

To find the slope, we must count out the rise and run. But where do we
start? We locate any two points on the line, choosing points with
coordinates that are integers to make our calculations easier. We then start
with the point on the left and sketch a right triangle, so we can count the
rise and run.

**Example.** Find the slope of the line through the points $(0, -3)$ and
$(5, 1)$.

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid with a line through (0, -3) and (5, 1). A right triangle is sketched from (0, -3) up to (0, 1) and across to (5, 1), showing a rise of 4 and a run of 5." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 232" width="252" height="232" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="206" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="206" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="206" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="206" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="206" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="206" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="206" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="206" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="206" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="206" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="226" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="226" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="226" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="226" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="226" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="226" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="226" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="226" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="106" x2="228" y2="106" stroke="currentColor" stroke-width="1"/>
  <line x1="86" y1="24" x2="86" y2="208" stroke="currentColor" stroke-width="1"/>
  <polygon points="238,106 228,111 228,101" fill="currentColor"/>
  <polygon points="86,14 91,24 81,24" fill="currentColor"/>
  <polygon points="14,106 24,101 24,111" fill="currentColor"/>
  <polygon points="86,218 81,208 91,208" fill="currentColor"/>
  <text x="236" y="98" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="94" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="36.3" y1="205.8" x2="224.2" y2="55.4" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="232,49.2 227.3,59.4 221.1,51.5" fill="currentColor"/>
  <polygon points="28.5,212 33.2,201.8 39.4,209.7" fill="currentColor"/>
  <line x1="86" y1="166" x2="86" y2="86" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="86" y1="86" x2="186" y2="86" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="86" cy="166" r="4" fill="currentColor"/>
  <circle cx="186" cy="86" r="4" fill="currentColor"/>
  <text x="97.2" y="186.2" font-size="13" fill="currentColor" text-anchor="start">(0, −3)</text>
  <text x="174.8" y="74.8" font-size="13" fill="currentColor" text-anchor="end">(5, 1)</text>
  <text x="72" y="130" font-size="13" fill="currentColor" text-anchor="end">rise 4</text>
  <text x="124.8" y="74.8" font-size="13" fill="currentColor" text-anchor="end">run 5</text>
</svg>
</div>

Starting with the point on the left, $(0, -3)$, sketch a right triangle,
going from the first point to the second point, $(5, 1)$. The rise is $4$
units and the run is $5$ units.

$$m = \frac{\text{rise}}{\text{run}} = \frac{4}{5}$$

The slope of the line is $\tfrac{4}{5}$. Notice that the slope is positive
since the line slants upward from left to right.

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid with a line through (-8, -1) and (0, 4), slanting upward. A right triangle is sketched from (-8, -1) up to (-8, 4) and across to (0, 4), showing a rise of 5 and a run of 8." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 232" width="312" height="232" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="206" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="206" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="206" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="206" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="206" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="206" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="206" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="206" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="206" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="206" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="206" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="206" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="206" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="286" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="286" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="286" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="286" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="286" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="286" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="286" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="286" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="288" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="226" y1="24" x2="226" y2="208" stroke="currentColor" stroke-width="1"/>
  <polygon points="298,146 288,151 288,141" fill="currentColor"/>
  <polygon points="226,14 231,24 221,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="226,218 221,208 231,208" fill="currentColor"/>
  <text x="296" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="234" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="28.5" y1="189.5" x2="283.5" y2="30" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="292,24.8 286.2,34.3 280.9,25.8" fill="currentColor"/>
  <polygon points="20,194.8 25.8,185.2 31.1,193.7" fill="currentColor"/>
  <line x1="66" y1="166" x2="66" y2="66" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="66" y1="66" x2="226" y2="66" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="66" cy="166" r="4" fill="currentColor"/>
  <circle cx="226" cy="66" r="4" fill="currentColor"/>
  <text x="77.2" y="186.2" font-size="13" fill="currentColor" text-anchor="start">(−8, −1)</text>
  <text x="237.2" y="86.2" font-size="13" fill="currentColor" text-anchor="start">(0, 4)</text>
  <text x="52" y="120" font-size="13" fill="currentColor" text-anchor="end">rise 5</text>
  <text x="146" y="89" font-size="13" fill="currentColor" text-anchor="middle">run 8</text>
</svg>
</div>

{{< fillin
  question="Find the slope of the line shown, which passes through $(-8, -1)$ and $(0, 4)$. Read the rise and run off the slope triangle."
  answer="\frac{5}{8}"
  answerDisplay="$\tfrac{5}{8}$"
  hint="Take the ratio of the rise to the run, $m = \tfrac{\text{rise}}{\text{run}}$."
>}}

{{< fillin
  question="Find the slope of the line through the points $(0, -1)$ and $(2, 3)$."
  answer="2"
  hint="Start at the point on the left. The rise is $4$ and the run is $2$."
>}}

{{< callout type="info" >}}
  **Find the slope from a graph.**

  1. Locate two points on the line whose coordinates are integers.
  2. Starting with the point on the left, sketch a right triangle, with the
     hypotenuse going from the first point to the second point.
  3. Count the rise and the run on the legs of the triangle.
  4. Take the ratio of rise to run to find the slope, $m = \tfrac{\text{rise}}{\text{run}}$.
{{< /callout >}}

**Example.** Find the slope of the line shown, which passes through $(0,
5)$ and $(3, 3)$.

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid with a line through (0, 5) and (3, 3), slanting downward. A right triangle is sketched from (0, 5) down to (0, 3) and across to (3, 3), showing a rise of negative 2 and a run of 3." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232 212" width="232" height="212" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="186" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="186" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="186" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="186" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="186" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="186" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="186" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="186" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="186" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="206" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="206" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="206" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="206" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="206" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="206" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="206" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="166" x2="208" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="86" y1="24" x2="86" y2="188" stroke="currentColor" stroke-width="1"/>
  <polygon points="218,166 208,171 208,161" fill="currentColor"/>
  <polygon points="86,14 91,24 81,24" fill="currentColor"/>
  <polygon points="14,166 24,161 24,171" fill="currentColor"/>
  <polygon points="86,198 81,188 91,188" fill="currentColor"/>
  <text x="216" y="158" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="94" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="28.3" y1="27.5" x2="203.7" y2="144.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="212,150 200.9,148.6 206.5,140.3" fill="currentColor"/>
  <polygon points="20,22 31.1,23.4 25.5,31.7" fill="currentColor"/>
  <line x1="86" y1="66" x2="86" y2="106" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="86" y1="106" x2="146" y2="106" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="86" cy="66" r="4" fill="currentColor"/>
  <circle cx="146" cy="106" r="4" fill="currentColor"/>
  <text x="74.8" y="86.2" font-size="13" fill="currentColor" text-anchor="end">(0, 5)</text>
  <text x="157.2" y="94.8" font-size="13" fill="currentColor" text-anchor="start">(3, 3)</text>
  <text x="74.8" y="106.2" font-size="13" fill="currentColor" text-anchor="end">rise −2</text>
  <text x="116" y="129" font-size="13" fill="currentColor" text-anchor="middle">run 3</text>
</svg>
</div>

Starting with the point on the left, $(0, 5)$, sketch a right triangle to
$(3, 3)$. The rise is $-2$ and the run is $3$.

$$m = \frac{\text{rise}}{\text{run}} = \frac{-2}{3} = -\frac{2}{3}$$

The slope of the line is $-\tfrac{2}{3}$. Notice that the slope is negative
since the line slants downward from left to right.

What if we had chosen different points on the same line, say $(-3, 7)$ and
$(6, 1)$? Sketching a right triangle from $(-3, 7)$ to $(6, 1)$ gives a rise
of $-6$ and a run of $9$:

$$m = \frac{\text{rise}}{\text{run}} = \frac{-6}{9} = -\frac{2}{3}$$

It does not matter which points you use — the slope of the line is always
the same. The slope of a line is constant!

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid with a line through (0, -1) and (4, -3), slanting downward. A right triangle is sketched from (0, -1) down to (0, -3) and across to (4, -3), showing a rise of negative 2 and a run of 4." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 212" width="252" height="212" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="186" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="186" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="186" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="186" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="186" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="186" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="186" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="186" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="186" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="186" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="226" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="226" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="226" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="226" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="226" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="226" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="226" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="86" x2="228" y2="86" stroke="currentColor" stroke-width="1"/>
  <line x1="86" y1="24" x2="86" y2="188" stroke="currentColor" stroke-width="1"/>
  <polygon points="238,86 228,91 228,81" fill="currentColor"/>
  <polygon points="86,14 91,24 81,24" fill="currentColor"/>
  <polygon points="14,86 24,81 24,91" fill="currentColor"/>
  <polygon points="86,198 81,188 91,188" fill="currentColor"/>
  <text x="236" y="78" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="94" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="28.9" y1="77.5" x2="223.1" y2="174.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="232,179 220.8,179 225.3,170.1" fill="currentColor"/>
  <polygon points="20,73 31.2,73 26.7,81.9" fill="currentColor"/>
  <line x1="86" y1="106" x2="86" y2="146" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="86" y1="146" x2="166" y2="146" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="86" cy="106" r="4" fill="currentColor"/>
  <circle cx="166" cy="146" r="4" fill="currentColor"/>
  <text x="74.8" y="126.2" font-size="13" fill="currentColor" text-anchor="end">(0, −1)</text>
  <text x="177.2" y="134.8" font-size="13" fill="currentColor" text-anchor="start">(4, −3)</text>
  <text x="74.8" y="146.2" font-size="13" fill="currentColor" text-anchor="end">rise −2</text>
  <text x="126" y="169" font-size="13" fill="currentColor" text-anchor="middle">run 4</text>
</svg>
</div>

{{< fillin
  question="Find the slope of the line shown, which passes through $(0, -1)$ and $(4, -3)$. Read the rise and run off the slope triangle, then simplify."
  answer="-\frac{1}{2}"
  answerDisplay="$-\tfrac{1}{2}$"
  hint="Take the ratio $m = \tfrac{\text{rise}}{\text{run}} = \tfrac{-2}{4}$ and simplify."
>}}

The lines in the previous examples had $y\text{-intercepts}$ with integer
values, so it was convenient to use the $y\text{-intercept}$ as one of the
points we used to find the slope. In the next example, the
$y\text{-intercept}$ is a fraction. The calculations are easier if we use two
points with integer coordinates.

**Example.** Find the slope of the line through $(2, 3)$ and $(7, 6)$.

Starting at the point on the left, $(2, 3)$, sketch a right triangle to
$(7, 6)$. The rise is $3$ units and the run is $5$ units.

$$m = \frac{\text{rise}}{\text{run}} = \frac{3}{5}$$

The slope of the line is $\tfrac{3}{5}$.

{{< fillin
  question="Find the slope of the line through the points $(1, -1)$ and $(4, 5)$."
  answer="2"
  hint="The rise is $6$ and the run is $3$."
>}}

## Find the slope of horizontal and vertical lines

Do you remember what was special about horizontal and vertical lines? Their
equations had just one variable:

$$\text{horizontal line } y = b \text{; all the } y\text{-coordinates are the same}$$
$$\text{vertical line } x = a \text{; all the } x\text{-coordinates are the same}$$

So how do we find the slope of the horizontal line $y = 4$? We graph the
line, find two points on it, and count the rise and the run. We'll use the
points $(0, 4)$ and $(3, 4)$.

<svg viewBox="0 0 260 140" role="img" aria-label="A horizontal line at y equals 4, passing through the points (0, 4) and (3, 4)." style={{ maxWidth: 300, display: 'block', margin: '1.5rem auto' }}>
  <line x1="20" y1="10" x2="20" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  <line x1="10" y1="70" x2="250" y2="70" stroke="currentColor" strokeWidth="2.5" />
  <circle cx="20" cy="70" r="4" fill="currentColor" />
  <circle cx="140" cy="70" r="4" fill="currentColor" />
  <text x="20" y="55" textAnchor="middle" fontSize="13" fill="currentColor">(0, 4)</text>
  <text x="140" y="55" textAnchor="middle" fontSize="13" fill="currentColor">(3, 4)</text>
</svg>

The rise is $0$ (the $y\text{-coordinates}$ don't change) and the run is
$3$.

$$m = \frac{\text{rise}}{\text{run}} = \frac{0}{3} = 0$$

The slope of the horizontal line $y = 4$ is $0$.

{{< callout type="info" >}}
  **Slope of a horizontal line.** The slope of a horizontal line, $y = b$, is
  $0$.
{{< /callout >}}

All horizontal lines have slope $0$. When the $y\text{-coordinates}$ are the
same, the rise is $0$.

Now we'll consider a vertical line, such as the line $x = 3$. We'll use the
points $(3, 0)$ and $(3, 2)$ to count the rise and run.

<svg viewBox="0 0 200 200" role="img" aria-label="A vertical line at x equals 3, passing through the points (3, 0) and (3, 2)." style={{ maxWidth: 220, display: 'block', margin: '1.5rem auto' }}>
  <line x1="20" y1="10" x2="20" y2="190" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  <line x1="10" y1="150" x2="180" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  <line x1="110" y1="20" x2="110" y2="180" stroke="currentColor" strokeWidth="2.5" />
  <circle cx="110" cy="150" r="4" fill="currentColor" />
  <circle cx="110" cy="90" r="4" fill="currentColor" />
  <text x="140" y="145" textAnchor="middle" fontSize="13" fill="currentColor">(3, 0)</text>
  <text x="140" y="86" textAnchor="middle" fontSize="13" fill="currentColor">(3, 2)</text>
</svg>

The rise is $2$ and the run is $0$ (the $x\text{-coordinates}$ don't
change).

$$m = \frac{\text{rise}}{\text{run}} = \frac{2}{0}$$

But we can't divide by $0$. Division by $0$ is undefined. So we say that the
slope of the vertical line $x = 3$ is undefined. The slope of all vertical
lines is undefined, because the run is $0$.

{{< callout type="info" >}}
  **Slope of a vertical line.** The slope of a vertical line, $x = a$, is
  undefined.
{{< /callout >}}

**Example.** Find the slope of each line: (a) $x = 8$ (b) $y = -5$.

(a) $x = 8$ is a vertical line, so its slope is undefined.

(b) $y = -5$ is a horizontal line, so its slope is $0$.

{{< fillin
  question="For the vertical line $x = -4$, any two points have the same $x$-coordinate, so the run is always this value. What is the run?"
  answer="0"
  hint="On a vertical line, the $x$-coordinate never changes between points, so $x_2 - x_1$ is always $0$ — that's why the slope is undefined."
>}}

{{< fillin
  question="Find the slope of the line $y = 7$."
  answer="0"
  hint="Every horizontal line $y = b$ has the same slope."
>}}

Here's a quick way to remember the four slope types: a line that rises to
the right has positive slope, a line that falls to the right has negative
slope, a horizontal line has zero slope, and a vertical line has undefined
slope.

## Use the slope formula to find the slope of a line between two points

Sometimes we need to find the slope of a line between two points and we
might not have a graph to count out the rise and the run. We could plot the
points on grid paper, then count out the rise and the run, but there is a
way to find the slope without graphing.

Before we get to it, we need to introduce some new algebraic notation. We
have seen that an ordered pair $(x, y)$ gives the coordinates of a point.
But when we work with slopes, we use two points. How can the same symbol
$(x, y)$ be used to represent two different points?

Mathematicians use subscripts to distinguish between the points. A subscript
is a small number written to the right of, and a little lower than, a
variable.

$$(x_1, y_1) \text{ read } x \text{ sub } 1,\ y \text{ sub } 1$$
$$(x_2, y_2) \text{ read } x \text{ sub } 2,\ y \text{ sub } 2$$

We will use $(x_1, y_1)$ to identify the first point and $(x_2, y_2)$ to
identify the second point. If we had more than two points, we could use
$(x_3, y_3)$, $(x_4, y_4)$, and so on.

To see how the rise and run relate to the coordinates of the two points,
let's take another look at the slope of the line between the points $(2, 3)$
and $(7, 6)$.

On the graph, we counted a rise of $3$. The rise can also be found by
subtracting the $y\text{-coordinates}$ of the points:

$$y_2 - y_1 = 6 - 3 = 3$$

We counted a run of $5$. The run can also be found by subtracting the
$x\text{-coordinates}$:

$$x_2 - x_1 = 7 - 2 = 5$$

We know $m = \tfrac{\text{rise}}{\text{run}}$, so $m = \tfrac{3}{5}$. We
rewrite the rise and run by putting in the coordinates:
$m = \tfrac{6-3}{7-2}$. But $6$ is the $y\text{-coordinate}$ of the second
point, $y_2$, and $3$ is the $y\text{-coordinate}$ of the first point,
$y_1$, so we can rewrite the rise using subscript notation:
$m = \tfrac{y_2 - y_1}{7 - 2}$. Also $7$ is the $x\text{-coordinate}$ of the
second point, $x_2$, and $2$ is the $x\text{-coordinate}$ of the first
point, $x_1$, so we rewrite the run using subscript notation too:
$m = \tfrac{y_2 - y_1}{x_2 - x_1}$.

We've shown that $m = \tfrac{y_2 - y_1}{x_2 - x_1}$ is really another
version of $m = \tfrac{\text{rise}}{\text{run}}$. We can use this formula to
find the slope of a line when we have two points on the line.

{{< callout type="info" >}}
  **Slope formula.** The slope of the line between two points $(x_1, y_1)$
  and $(x_2, y_2)$ is

  $$m = \frac{y_2 - y_1}{x_2 - x_1}$$
{{< /callout >}}

Say the formula to yourself to help remember it: slope is $y$ of the second
point minus $y$ of the first point, over $x$ of the second point minus $x$
of the first point.

**Example.** Find the slope of the line between the points $(1, 2)$ and
$(4, 5)$.

We'll call $(1, 2)$ point #1 and $(4, 5)$ point #2. Use the slope formula
and substitute the values.

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{5 - 2}{4 - 1} = \frac{3}{3} = 1$$

We can confirm this by counting out the slope on a graph: the rise is $3$
and the run is $3$, so $m = \tfrac{3}{3} = 1$.

{{< fillin
  question="Find the slope of the line through the given points: $(8, 5)$ and $(6, 3)$."
  answer="1"
  hint="$m = \tfrac{y_2 - y_1}{x_2 - x_1}$. Substitute $(8, 5)$ as point 1 and $(6, 3)$ as point 2."
>}}

{{< fillin
  question="Find the slope of the line through the given points: $(1, 5)$ and $(5, 9)$."
  answer="1"
  hint="$m = \tfrac{y_2 - y_1}{x_2 - x_1}$."
>}}

How do we know which point to call #1 and which to call #2? Let's find the
slope again, this time switching the names of the points, calling $(4, 5)$
point #1 and $(1, 2)$ point #2:

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{2 - 5}{1 - 4} = \frac{-3}{-3} = 1$$

The slope is the same no matter which order we use the points.

**Example.** Find the slope of the line through the points $(-2, -3)$ and
$(-7, 4)$.

We'll call $(-2, -3)$ point #1 and $(-7, 4)$ point #2.

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{4 - (-3)}{-7 - (-2)} = \frac{7}{-5} = -\frac{7}{5}$$

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid showing a line through (-7, 4) and (-2, -3), slanting downward from upper left to lower right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 272" width="252" height="272" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="246" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="246" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="246" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="246" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="246" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="246" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="246" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="246" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="246" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="246" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="226" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="226" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="226" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="226" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="226" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="226" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="226" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="226" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="226" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="226" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="228" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="248" stroke="currentColor" stroke-width="1"/>
  <polygon points="238,146 228,151 228,141" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="186,258 181,248 191,248" fill="currentColor"/>
  <text x="236" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="25.8" y1="37.7" x2="173" y2="243.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="178.9,252 169,246.8 177.1,241" fill="currentColor"/>
  <polygon points="20,29.6 29.9,34.8 21.7,40.6" fill="currentColor"/>
  <circle cx="46" cy="66" r="4" fill="currentColor"/>
  <circle cx="146" cy="206" r="4" fill="currentColor"/>
  <text x="57.2" y="54.8" font-size="13" fill="currentColor" text-anchor="start">(−7, 4)</text>
  <text x="134.8" y="226.2" font-size="13" fill="currentColor" text-anchor="end">(−2, −3)</text>
</svg>
</div>

{{< fillin
  question="Find the slope of the line through the pair of points: $(-3, 4)$ and $(2, -1)$."
  answer="-1"
  hint="$m = \tfrac{y_2 - y_1}{x_2 - x_1}$. The rise is $-5$ and the run is $5$."
>}}

{{< fillin
  question="Find the slope of the line through the pair of points: $(-2, 6)$ and $(-3, -4)$."
  answer="10"
  hint="$m = \tfrac{y_2 - y_1}{x_2 - x_1}$. Watch the signs: $-4 - 6 = -10$ and $-3 - (-2) = -1$."
>}}

## Graph a line given a point and the slope

In this chapter, we graphed lines by plotting points, by using intercepts,
and by recognizing horizontal and vertical lines. Another method we can use
to graph lines is the point-slope method. Sometimes we will be given one
point and the slope of the line, instead of its equation. When this
happens, we use the definition of slope to draw the graph of the line.

{{< callout type="info" >}}
  **Graph a line given a point and a slope.**

  1. Plot the given point.
  2. Use the slope formula to identify the rise and the run.
  3. Starting at the given point, count out the rise and run to mark the
     second point.
  4. Connect the points with a line.
{{< /callout >}}

**Example.** Graph the line passing through the point $(1, -1)$ whose slope
is $m = \tfrac{3}{4}$.

Plot the given point, $(1, -1)$. Use the slope formula to identify the rise
and run: $m = \tfrac{3}{4}$, so the rise is $3$ and the run is $4$. Starting
at the point we plotted, count out the rise and run to mark the second
point: $3$ units up and $4$ units right, landing on $(5, 2)$. Then connect
the points with a line and draw arrows at the ends to show it continues.

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid with the point (1, -1) plotted, a path going up 3 and right 4 to reach (5, 2), and a line drawn through both points." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 232" width="252" height="232" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="206" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="206" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="206" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="206" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="206" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="206" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="206" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="206" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="206" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="206" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="226" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="226" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="226" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="226" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="226" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="226" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="226" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="226" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="126" x2="228" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="86" y1="24" x2="86" y2="208" stroke="currentColor" stroke-width="1"/>
  <polygon points="238,126 228,131 228,121" fill="currentColor"/>
  <polygon points="86,14 91,24 81,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="86,218 81,208 91,208" fill="currentColor"/>
  <text x="236" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="94" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="28" y1="204.5" x2="224" y2="57.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="232,51.5 227,61.5 221,53.5" fill="currentColor"/>
  <polygon points="20,210.5 25,200.5 31,208.5" fill="currentColor"/>
  <line x1="106" y1="146" x2="106" y2="86" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="106" y1="86" x2="186" y2="86" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="106" cy="146" r="4" fill="currentColor"/>
  <circle cx="186" cy="86" r="4" fill="currentColor"/>
  <text x="117.2" y="166.2" font-size="13" fill="currentColor" text-anchor="start">(1, −1)</text>
  <text x="197.2" y="106.2" font-size="13" fill="currentColor" text-anchor="start">(5, 2)</text>
  <text x="117.2" y="104.8" font-size="13" fill="currentColor" text-anchor="start">3</text>
  <text x="146" y="72" font-size="13" fill="currentColor" text-anchor="middle">4</text>
</svg>
</div>

We can check this line by starting at any point on it and counting up $3$
and to the right $4$ — we should get to another point on the line.

{{< fillin
  question="A line passes through the point $(2, -2)$ with slope $m = \tfrac{4}{3}$. Starting at $(2, -2)$ and counting out the rise and run, what point do you land on?"
  answer="(6, 2)"
  hint="The rise is $4$ and the run is $3$. Add the rise to the $y$-coordinate and the run to the $x$-coordinate."
>}}

**Example.** Graph the line with $y\text{-intercept}$ $(0, 2)$ and slope
$m = -\tfrac{2}{3}$.

Plot the given point, the $y\text{-intercept}$ $(0, 2)$. Use the slope
formula: $m = -\tfrac{2}{3}$, so the rise is $-2$ and the run is $3$.
Starting at $(0, 2)$, count down $2$ and to the right $3$ to mark the second
point, $(3, 0)$. Connect the points with a line.

<div class="ap-figure">
<svg role="img" aria-label="A coordinate grid with the y-intercept (0, 2) plotted, a path going down 2 and right 3 to reach (3, 0), and a line drawn through both points sloping downward." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 212" width="252" height="212" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="186" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="186" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="186" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="186" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="186" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="186" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="186" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="186" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="186" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="186" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="226" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="226" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="226" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="226" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="226" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="226" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="226" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="126" x2="228" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="106" y1="24" x2="106" y2="188" stroke="currentColor" stroke-width="1"/>
  <polygon points="238,126 228,131 228,121" fill="currentColor"/>
  <polygon points="106,14 111,24 101,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="106,198 101,188 111,188" fill="currentColor"/>
  <text x="236" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="114" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="28.3" y1="34.2" x2="223.7" y2="164.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="232,170 220.9,168.6 226.5,160.3" fill="currentColor"/>
  <polygon points="20,28.7 31.1,30.1 25.5,38.4" fill="currentColor"/>
  <line x1="106" y1="86" x2="106" y2="126" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="106" y1="126" x2="166" y2="126" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="106" cy="86" r="4" fill="currentColor"/>
  <circle cx="166" cy="126" r="4" fill="currentColor"/>
  <text x="94.8" y="106.2" font-size="13" fill="currentColor" text-anchor="end">(0, 2)</text>
  <text x="177.2" y="114.8" font-size="13" fill="currentColor" text-anchor="start">(3, 0)</text>
  <text x="112" y="110" font-size="13" fill="currentColor" text-anchor="start">−2</text>
  <text x="136" y="142" font-size="13" fill="currentColor" text-anchor="middle">3</text>
</svg>
</div>

{{< graphplot
  question="Graph the line with $y$-intercept $4$ and slope $m = -\tfrac{5}{2}$ by placing two points on the line."
  ariaLabel="A blank coordinate grid from negative 4 to 6 on the x-axis and negative 4 to 6 on the y-axis."
  answerDisplay="$y = -\tfrac{5}{2}x + 4$"
  hint="Start at the $y$-intercept $(0, 4)$. The slope $-\tfrac{5}{2}$ means count down $5$ and right $2$ to reach the second point."
>}}
{"answer":{"slope":-2.5,"intercept":4},"grid":{"xMin":-4,"xMax":6,"yMin":-4,"yMax":6}}
{{< /graphplot >}}

**Example.** Graph the line passing through the point $(-1, -3)$ whose
slope is $m = 4$.

Plot the given point. To use the slope formula, write $4$ as a fraction:
$m = \tfrac{4}{1}$, so the rise is $4$ and the run is $1$. Starting at
$(-1, -3)$, count up $4$ and to the right $1$ to mark the second point.
Connect the two points with a line.

{{< fillin
  question="Graph the line passing through the point $(-2, 1)$ with slope $m = 3$. Write $3$ as a fraction first: what are the rise and run?"
  answer="\frac{3}{1}"
  answerDisplay="$\tfrac{3}{1}$"
  hint="Any whole number can be written as a fraction over $1$."
>}}

## Solve slope applications

There are many applications of slope in the real world. Let's look at a
few.

**Example.** The pitch of a building's roof is the slope of the roof.
Knowing the pitch is important in climates where there is heavy snowfall —
if the roof is too flat, the weight of the snow may cause it to collapse.
What is the slope of a roof with a rise of $9$ feet and a run of $18$ feet?

$$m = \frac{\text{rise}}{\text{run}} = \frac{9\text{ ft}}{18\text{ ft}} = \frac{1}{2}$$

The slope of the roof is $\tfrac{1}{2}$.

{{< fillin
  question="Find the slope given the rise and run: a roof with a rise $= 14$ and a run $= 24$."
  answer="\frac{7}{12}"
  answerDisplay="$\tfrac{7}{12}$"
  hint="Slope is rise over run. Simplify $\tfrac{14}{24}$."
>}}

{{< fillin
  question="Find the slope given the rise and run: a roof with a rise $= 15$ and a run $= 36$."
  answer="\frac{5}{12}"
  answerDisplay="$\tfrac{5}{12}$"
  hint="Slope is rise over run. Simplify $\tfrac{15}{36}$."
>}}

Have you ever thought about the sewage pipes going from your house to the
street? Their slope is an important factor in how they carry waste away
from your house. Sewage pipes must slope down $\tfrac{1}{4}$ inch per foot
in order to drain properly. What is the required slope?

Since the pipe slopes down, the rise is negative: $-\tfrac{1}{4}$ inch for
every $1$ foot of run. Converting $1$ foot to $12$ inches so both
measurements are in the same unit,

$$m = \frac{-\tfrac{1}{4}\text{ in.}}{1\text{ ft}} = \frac{-\tfrac{1}{4}\text{ in.}}{12\text{ in.}} = -\frac{1}{48}$$

The slope of the pipe is $-\tfrac{1}{48}$.

{{< fillin
  question="Find the slope of a pipe that slopes down $\tfrac{1}{3}$ inch per foot. Convert the foot to inches first."
  answer="-\frac{1}{36}"
  answerDisplay="$-\tfrac{1}{36}$"
  hint="The rise is $-\tfrac{1}{3}$ inch and the run is $1$ foot $= 12$ inches. Simplify the fraction."
>}}

{{< fillin
  question="Find the slope of a pipe that slopes down $\tfrac{3}{4}$ inch per yard. Convert the yard to inches first ($1$ yard $= 36$ inches)."
  answer="-\frac{1}{48}"
  answerDisplay="$-\tfrac{1}{48}$"
  hint="The rise is $-\tfrac{3}{4}$ inch and the run is $1$ yard $= 36$ inches. Simplify the fraction."
>}}

## Key terms

**slope of a line** — the ratio of the rise (vertical change) to the run
(horizontal change) between two points on the line, $m =
\tfrac{\text{rise}}{\text{run}}$. **rise** — the vertical change between
two points on a line. **run** — the horizontal change between two points on
a line. **slope formula** — the slope of the line between two points
$(x_1, y_1)$ and $(x_2, y_2)$ is $m = \tfrac{y_2 - y_1}{x_2 - x_1}$.

---

<small>This section is adapted from [Prealgebra 2e, Section 11.4: Understand Slope of a Line](https://openstax.org/books/prealgebra-2e/pages/11-4-understand-slope-of-a-line) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated the geoboard rubber-band diagrams and coordinate-plane line graphs as accessible inline graphics; omitted the Self Check checklist, Be Prepared quiz, Manipulative Mathematics callouts, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
