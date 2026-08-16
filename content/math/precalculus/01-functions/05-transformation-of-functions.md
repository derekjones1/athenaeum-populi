---
title: Transformation of Functions
description: >-
  Vertical and horizontal shifts, reflections about the axes, even and odd
  functions, vertical and horizontal stretches and compressions, and
  performing a sequence of transformations — adapted from OpenStax
  Precalculus 2e, Section 1.5.
source_section: "1.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph functions using vertical and horizontal shifts
- Graph functions using reflections about the $x$-axis and the $y$-axis
- Determine whether a function is even, odd, or neither from its graph
- Graph functions using compressions and stretches
- Combine transformations
{{< /callout >}}

We all know that a flat mirror enables us to see an accurate image of
ourselves and whatever is behind us. When we tilt the mirror, the images we
see may shift horizontally or vertically. But what happens when we bend a
flexible mirror? Like a carnival funhouse mirror, it presents us with a
distorted image of ourselves, stretched or compressed horizontally or
vertically. In a similar way, we can distort or transform mathematical
functions to better adapt them to describing objects or processes in the real
world. In this section, we will take a look at several kinds of
transformations.

## Graphing functions using vertical and horizontal shifts

Often when given a problem, we try to model the scenario using mathematics in
the form of words, tables, graphs, and equations. One method we can employ is
to adapt the basic graphs of the toolkit functions to build new models for a
given scenario. There are systematic ways to alter functions to construct
appropriate models for the problems we are trying to solve.

### Identifying vertical shifts

One simple kind of **transformation** involves shifting the entire graph of a
function up, down, right, or left. The simplest shift is a **vertical
shift**, moving the graph up or down, because this transformation involves
adding a positive or negative constant to the function. In other words, we
add the same constant to the output value of the function regardless of the
input. For a function $g(x)=f(x)+k$, the function $f(x)$ is shifted vertically
$k$ units.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The cube root curve and, dashed, the same curve shifted one unit up. Both rise from the third quadrant into the first; the dashed copy passes through (0, 1) instead of the origin.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"unit":30,"tickLabels":true,"curves":[{"kind":"cbrt"},{"kind":"cbrt","k":1,"dashed":true}]}
{{< /apfigure >}}

A vertical shift by $k=1$ of the cube root function $f(x)=\sqrt[3]{x}$; the
shifted graph is dashed.

To help you visualize the concept of a vertical shift, consider that
$y=f(x)$. Therefore, $f(x)+k$ is equivalent to $y+k$. Every unit of $y$ is
replaced by $y+k$, so the $y$-value increases or decreases depending on the
value of $k$. The result is a shift upward or downward.

{{< callout type="info" >}}
  **Vertical shift.** Given a function $f(x)$, a new function $g(x)=f(x)+k$,
  where $k$ is a constant, is a **vertical shift** of the function $f(x)$.
  All the output values change by $k$ units. If $k$ is positive, the graph
  will shift up. If $k$ is negative, the graph will shift down.
{{< /callout >}}

**Example.** To regulate temperature in a green building, airflow vents near
the roof open and close throughout the day. The graph below shows the area of
open vents $V$ (in square feet) throughout the day in hours after midnight,
$t$. During the summer, the facilities manager decides to try to better
regulate temperature by increasing the amount of open vents by 20 square feet
throughout the day and night. Sketch a graph of this new function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of V of t. It runs along the horizontal axis from t = 0 to t = 8, rises in a straight line to (10, 220), stays at 220 until t = 17, falls in a straight line to (19, 0), and runs along the axis to t = 24.","xMin":-4,"xMax":26,"yMin":-30,"yMax":300,"xUnit":11,"yUnit":0.75,"xGridStep":4,"yGridStep":50,"tickLabels":true,"xTickStep":4,"yTickStep":50,"xLabel":"t","yLabel":"V","polylines":[{"through":[[0,0],[8,0],[10,220],[17,220],[19,0],[24,0]]}]}
{{< /apfigure >}}

**Solution.** We can sketch a graph of this new function by adding 20 to each
of the output values of the original function. This will have the effect of
shifting the graph vertically up, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of V of t together with, dashed, the graph of S of t equals V of t plus 20. The dashed graph has exactly the same shape sitting 20 units higher, running at 20 instead of 0 and peaking at 240 instead of 220.","xMin":-4,"xMax":26,"yMin":-30,"yMax":300,"xUnit":11,"yUnit":0.75,"xGridStep":4,"yGridStep":50,"tickLabels":true,"xTickStep":4,"yTickStep":50,"xLabel":"t","yLabel":"V","polylines":[{"through":[[0,0],[8,0],[10,220],[17,220],[19,0],[24,0]]},{"through":[[0,20],[8,20],[10,240],[17,240],[19,20],[24,20]],"dashed":true}],"texts":[{"at":[21,20],"text":"Up 20","dx":6,"dy":-6}]}
{{< /apfigure >}}

Notice that for each input value, the output value has increased by 20, so if
we call the new function $S(t)$, we could write

$$S(t)=V(t)+20$$

This notation tells us that, for any value of $t$, $S(t)$ can be found by
evaluating the function $V$ at the same input and then adding 20 to the
result. This defines $S$ as a transformation of the function $V$, in this case
a vertical shift up 20 units. Notice that, with a vertical shift, the input
values stay the same and only the output values change.

| $t$ | 0 | 8 | 10 | 17 | 19 | 24 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| $V(t)$ | 0 | 0 | 220 | 220 | 0 | 0 |
| $S(t)$ | 20 | 20 | 240 | 240 | 20 | 20 |

{{< callout type="info" >}}
  **How to:** given a tabular function, create a new row to represent a
  vertical shift.

  1. Identify the output row or column.
  2. Determine the **magnitude** of the shift.
  3. Add the shift to the value in each output cell. Add a positive value for
     up or a negative value for down.
{{< /callout >}}

**Example.** A function $f(x)$ is given below. Create a table for the function
$g(x)=f(x)-3$.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 1 | 3 | 7 | 11 |

**Solution.** The formula $g(x)=f(x)-3$ tells us that we can find the output
values of $g$ by subtracting 3 from the output values of $f$. For example:

$$
\begin{array}{lrcl}
\text{Given.} & f(2) &=& 1 \\[4pt]
\text{Given transformation.} & g(x) &=& f(x)-3 \\[4pt]
& g(2) &=& f(2)-3 \\[4pt]
& &=& 1-3 \\[4pt]
& &=& -2
\end{array}
$$

Subtracting 3 from each $f(x)$ value, we can complete a table of values for
$g(x)$.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 1 | 3 | 7 | 11 |
| $g(x)$ | −2 | 0 | 4 | 8 |

As with the earlier vertical shift, notice the input values stay the same and
only the output values change.

{{< fillin
  question="The function $h(t)=-4.9t^2+30t$ gives the height $h$ of a ball (in meters) thrown upward from the ground after $t$ seconds. Suppose the ball was instead thrown from the top of a 10-m building. Write a formula for the new height function $b(t)$."
  answer="-4.9t^2+30t+10"
  answerDisplay="$b(t)=h(t)+10=-4.9t^2+30t+10$"
  hint="Throwing from 10 m up adds 10 to every output, so this is a vertical shift."
>}}

### Identifying horizontal shifts

We just saw that the vertical shift is a change to the output, or outside, of
the function. We will now look at how changes to input, on the inside of the
function, change its graph and meaning. A shift to the input results in a
movement of the graph of the function left or right in what is known as a
**horizontal shift**.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The cube root curve and, dashed, the same curve shifted one unit to the left. The dashed copy crosses the horizontal axis at −1 instead of at the origin.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"unit":30,"tickLabels":true,"curves":[{"kind":"cbrt"},{"kind":"cbrt","h":-1,"dashed":true}]}
{{< /apfigure >}}

A horizontal shift of the function $f(x)=\sqrt[3]{x}$; the shifted graph is
dashed. Note that $(x+1)$ means $h=-1$, which shifts the graph to the left,
that is, towards *negative* values of $x$.

For example, if $f(x)=x^2$, then $g(x)=(x-2)^2$ is a new function. Each input
is reduced by 2 prior to squaring the function. The result is that the graph
is shifted 2 units to the right, because we would need to increase the prior
input by 2 units to yield the same output value as given in $f$.

{{< callout type="info" >}}
  **Horizontal shift.** Given a function $f$, a new function $g(x)=f(x-h)$,
  where $h$ is a constant, is a **horizontal shift** of the function $f$. If
  $h$ is positive, the graph will shift right. If $h$ is negative, the graph
  will shift left.
{{< /callout >}}

**Example.** Returning to our building airflow example, suppose that in autumn
the facilities manager decides that the original venting plan starts too late,
and wants to begin the entire venting program 2 hours earlier. Sketch a graph
of the new function.

**Solution.** We can set $V(t)$ to be the original program and $F(t)$ to be
the revised program.

$$
\begin{array}{lrcl}
& V(t) &=& \text{the original venting plan} \\[4pt]
& F(t) &=& \text{starting 2 hrs sooner}
\end{array}
$$

In the new graph, at each time, the airflow is the same as the original
function $V$ was 2 hours later. For example, in the original function $V$, the
airflow starts to change at 8 a.m., whereas for the function $F$, the airflow
starts to change at 6 a.m. The comparable function values are $V(8)=F(6)$.
Notice also that the vents first opened to $220\ \text{ft}^2$ at 10 a.m. under
the original plan, while under the new plan the vents reach
$220\ \text{ft}^2$ at 8 a.m., so $V(10)=F(8)$.

In both cases, we see that, because $F(t)$ starts 2 hours sooner, $h=-2$. That
means that the same output values are reached when $F(t)=V(t-(-2))=V(t+2)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of V of t together with, dashed, the graph of F of t equals V of t plus 2. The dashed graph has the same shape but every feature happens 2 hours earlier: it starts to rise at t = 6 instead of t = 8 and reaches 220 at t = 8 instead of t = 10.","xMin":-4,"xMax":26,"yMin":-30,"yMax":300,"xUnit":11,"yUnit":0.75,"xGridStep":4,"yGridStep":50,"tickLabels":true,"xTickStep":4,"yTickStep":50,"xLabel":"t","yLabel":"V","polylines":[{"through":[[0,0],[8,0],[10,220],[17,220],[19,0],[24,0]]},{"through":[[0,0],[6,0],[8,220],[15,220],[17,0],[24,0]],"dashed":true}]}
{{< /apfigure >}}

Note that $V(t+2)$ has the effect of shifting the graph to the *left*.

Horizontal changes or "inside changes" affect the domain of a function (the
input) instead of the range and often seem counterintuitive. The new function
$F(t)$ uses the same outputs as $V(t)$, but matches those outputs to inputs 2
hours earlier than those of $V(t)$. Said another way, we must add 2 hours to
the input of $V$ to find the corresponding output for $F$: $F(t)=V(t+2)$.

{{< callout type="info" >}}
  **How to:** given a tabular function, create a new row to represent a
  horizontal shift.

  1. Identify the input row or column.
  2. Determine the magnitude of the shift.
  3. Add the shift to the value in each input cell.
{{< /callout >}}

**Example.** A function $f(x)$ is given below. Create a table for the function
$g(x)=f(x-3)$.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 1 | 3 | 7 | 11 |

**Solution.** The formula $g(x)=f(x-3)$ tells us that the output values of $g$
are the same as the output value of $f$ when the input value is 3 less than
the original value. For example, we know that $f(2)=1$. To get the same output
from the function $g$, we will need an input value that is 3 *larger*. We
input a value that is 3 larger for $g(x)$ because the function takes 3 away
before evaluating the function $f$.

$$
\begin{array}{lrcl}
& g(5) &=& f(5-3) \\[4pt]
& &=& f(2) \\[4pt]
& &=& 1
\end{array}
$$

We continue with the other values to create the table below.

| $x$ | 5 | 7 | 9 | 11 |
| :--- | ---: | ---: | ---: | ---: |
| $x-3$ | 2 | 4 | 6 | 8 |
| $f(x-3)$ | 1 | 3 | 7 | 11 |
| $g(x)$ | 1 | 3 | 7 | 11 |

The result is that the function $g(x)$ has been shifted to the right by 3.
Notice the output values for $g(x)$ remain the same as the output values for
$f(x)$, but the corresponding input values, $x$, have shifted to the right by
3. Specifically, 2 shifted to 5, 4 shifted to 7, 6 shifted to 9, and 8 shifted
to 11.

The graph below represents both of the functions. We can see the horizontal
shift in each point; the points of $g$ are drawn hollow.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two sets of plotted points. The solid points (2, 1), (4, 3), (6, 7), (8, 11) are the function f. The hollow points (5, 1), (7, 3), (9, 7), (11, 11) are g(x) = f(x − 3): each has the same height, three units farther right.","xMin":-1,"xMax":13,"yMin":-1,"yMax":13,"xUnit":21,"yUnit":16,"xGridStep":1,"yGridStep":1,"tickLabels":true,"xTickStep":2,"yTickStep":2,"points":[{"at":[2,1]},{"at":[4,3]},{"at":[6,7]},{"at":[8,11]},{"at":[5,1],"open":true},{"at":[7,3],"open":true},{"at":[9,7],"open":true},{"at":[11,11],"open":true}]}
{{< /apfigure >}}

**Example.** The graph below represents a transformation of the toolkit
function $f(x)=x^2$. Relate this new function $g(x)$ to $f(x)$, and then find
a formula for $g(x)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola with its vertex at (2, 0), the graph of the squaring function shifted 2 units to the right.","xMin":-3,"xMax":7,"yMin":-2,"yMax":8,"unit":24,"tickLabels":true,"quadratics":[{"a":1,"b":-4,"c":4}]}
{{< /apfigure >}}

**Solution.** Notice that the graph is identical in shape to the $f(x)=x^2$
function, but the $x$-values are shifted to the right 2 units. The vertex used
to be at $(0,0)$, but now the vertex is at $(2,0)$. The graph is the basic
quadratic function shifted 2 units to the right, so

$$g(x)=f(x-2)$$

Notice how we must input the value $x=2$ to get the output value $y=0$; the
$x$-values must be 2 units larger because of the shift to the right by 2
units. We can then use the definition of the $f(x)$ function to write a
formula for $g(x)$ by evaluating $f(x-2)$.

$$
\begin{array}{lrcl}
& f(x) &=& x^2 \\[4pt]
& g(x) &=& f(x-2) \\[4pt]
& g(x) &=& f(x-2)=(x-2)^2
\end{array}
$$

To determine whether the shift is $+2$ or $-2$, consider a single reference
point on the graph. For a quadratic, looking at the vertex point is
convenient. In the original function, $f(0)=0$. In our shifted function,
$g(2)=0$. To obtain the output value of 0 from the function $f$, we need to
decide whether a plus or a minus sign will work to satisfy
$g(2)=f(x-2)=f(0)=0$. For this to work, we will need to *subtract* 2 units
from our input values.

**Example.** The function $G(m)$ gives the number of gallons of gas required
to drive $m$ miles. Interpret $G(m)+10$ and $G(m+10)$.

**Solution.** $G(m)+10$ can be interpreted as adding 10 to the output,
gallons. This is the gas required to drive $m$ miles, plus another 10 gallons
of gas. The graph would indicate a vertical shift.

$G(m+10)$ can be interpreted as adding 10 to the input, miles. So this is the
number of gallons of gas required to drive 10 miles more than $m$ miles. The
graph would indicate a horizontal shift.

{{< multiplechoice
  question="Given $f(x)=\sqrt{x}$, describe the transformation $g(x)=f(x+2)$."
  answer="a horizontal shift 2 units to the left"
  hint="The change is inside the function, so it moves the graph along the input axis — and a plus sign moves it toward negative $x$."
>}}
a vertical shift 2 units down
a horizontal shift 2 units to the left
a horizontal shift 2 units to the right
a vertical shift 2 units up
{{< /multiplechoice >}}

### Combining vertical and horizontal shifts

Now that we have two transformations, we can combine them together. Vertical
shifts are outside changes that affect the output ($y$-) axis values and shift
the function up or down. Horizontal shifts are inside changes that affect the
input ($x$-) axis values and shift the function left or right. Combining the
two types of shifts will cause the graph of a function to shift up or down
**and** right or left.

{{< callout type="info" >}}
  **How to:** given a function and both a vertical and a horizontal shift,
  sketch the graph.

  1. Identify the vertical and horizontal shifts from the formula.
  2. The vertical shift results from a constant added to the output. Move the
     graph up for a positive constant and down for a negative constant.
  3. The horizontal shift results from a constant added to the input. Move
     the graph left for a positive constant and right for a negative
     constant.
  4. Apply the shifts to the graph in either order.
{{< /callout >}}

**Example.** Given $f(x)=\lvert x\rvert$, sketch a graph of
$h(x)=f(x+1)-3$.

**Solution.** The function $f$ is our toolkit absolute value function. We know
that this graph has a V shape, with the point at the origin. The graph of $h$
has transformed $f$ in two ways: $f(x+1)$ is a change on the inside of the
function, giving a horizontal shift left by 1, and the subtraction by 3 in
$f(x+1)-3$ is a change to the outside of the function, giving a vertical shift
down by 3.

Let us follow one point of the graph of $f(x)=\lvert x\rvert$.

- The point $(0,0)$ is transformed first by shifting left 1 unit:
  $(0,0)\to(-1,0)$
- The point $(-1,0)$ is transformed next by shifting down 3 units:
  $(-1,0)\to(-1,-3)$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The V-shaped graph of the absolute value function with its corner at the origin, and dashed, the graph of the absolute value of x plus 1, minus 3, whose corner sits at (−1, −3). The corner point of each is marked.","xMin":-6,"xMax":6,"yMin":-5,"yMax":6,"unit":22,"tickLabels":true,"polylines":[{"through":[[-5,5],[0,0],[5,5]],"arrows":true},{"through":[[-6,2],[-1,-3],[3,2]],"dashed":true,"arrows":true}],"points":[{"at":[0,0]},{"at":[-1,-3]}]}
{{< /apfigure >}}

The graph of $h$ alone is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of h of x equals the absolute value of x plus 1, minus 3: a V with its corner at (−1, −3).","xMin":-6,"xMax":6,"yMin":-5,"yMax":6,"unit":22,"tickLabels":true,"polylines":[{"through":[[-6,2],[-1,-3],[3,2]],"arrows":true}],"points":[{"at":[-1,-3]}]}
{{< /apfigure >}}

**Example.** Write a formula for the graph shown below, which is a
transformation of the toolkit square root function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the square root function shifted 1 unit right and 2 units up: it begins at the solid point (1, 2) and rises to the right, passing through (2, 3) and (5, 4).","xMin":-2,"xMax":8,"yMin":-1,"yMax":6,"unit":26,"tickLabels":true,"curves":[{"kind":"sqrt","h":1,"k":2,"arrows":"end"}],"points":[{"at":[1,2]}]}
{{< /apfigure >}}

**Solution.** The graph of the toolkit function starts at the origin, so this
graph has been shifted 1 to the right and up 2. In function notation, we could
write that as

$$h(x)=f(x-1)+2$$

Using the formula for the square root function, we can write

$$h(x)=\sqrt{x-1}+2$$

Note that this transformation has changed the domain and range of the
function. This new graph has domain $[1,\infty)$ and range $[2,\infty)$.

{{< fillin
  question="Write a formula for a transformation of the toolkit reciprocal function $f(x)=\tfrac{1}{x}$ that shifts the function's graph one unit to the right and one unit up."
  answer="\frac{1}{x-1}+1"
  answerDisplay="$g(x)=\tfrac{1}{x-1}+1$"
  hint="Right by one is an inside change, $x-1$; up by one is an outside change, $+1$."
>}}

## Graphing functions using reflections about the axes

Another transformation that can be applied to a function is a reflection over
the $x$- or $y$-axis. A **vertical reflection** reflects a graph vertically
across the $x$-axis, while a **horizontal reflection** reflects a graph
horizontally across the $y$-axis.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A rising curve labelled the original function f of x, together with its two reflections drawn dashed: the horizontal reflection f of negative x, a mirror image across the vertical axis, and the vertical reflection negative f of x, a mirror image across the horizontal axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"grid":false,"curves":[{"kind":"exp","b":2.4,"k":-0.4},{"kind":"exp","b":0.4167,"k":-0.4,"dashed":true},{"kind":"exp","a":-1,"b":2.4,"k":0.4,"dashed":true}],"texts":[{"at":[2.1,2.6],"text":"f(x)","anchor":"start"},{"at":[-2.6,2.6],"text":"f(−x)","anchor":"end"},{"at":[2.3,-2.6],"text":"−f(x)","anchor":"start"}]}
{{< /apfigure >}}

Notice that the vertical reflection produces a new graph that is a mirror
image of the base or original graph about the $x$-axis. The horizontal
reflection produces a new graph that is a mirror image of the base or original
graph about the $y$-axis.

{{< callout type="info" >}}
  **Reflections.**

  Given a function $f(x)$, a new function $g(x)=-f(x)$ is a **vertical
  reflection** of the function $f(x)$, sometimes called a reflection about (or
  over, or through) the $x$-axis.

  Given a function $f(x)$, a new function $g(x)=f(-x)$ is a **horizontal
  reflection** of the function $f(x)$, sometimes called a reflection about the
  $y$-axis.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a function, reflect the graph both vertically and
  horizontally.

  1. Multiply all outputs by $-1$ for a vertical reflection. The new graph is
     a reflection of the original graph about the $x$-axis.
  2. Multiply all inputs by $-1$ for a horizontal reflection. The new graph is
     a reflection of the original graph about the $y$-axis.
{{< /callout >}}

**Example.** Reflect the graph of $s(t)=\sqrt{t}$ (a) vertically and (b)
horizontally.

**Solution.** (a) Reflecting the graph vertically means that each output value
will be reflected over the horizontal $t$-axis, as shown below with the
reflection dashed.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The square root curve rising from the origin and, dashed, its vertical reflection V of t equals negative the square root of t, falling from the origin as a mirror image across the horizontal axis.","xMin":-1,"xMax":6,"yMin":-3,"yMax":3,"xUnit":34,"yUnit":34,"tickLabels":true,"xLabel":"t","yLabel":"s(t)","curves":[{"kind":"sqrt","arrows":"end"},{"kind":"sqrt","a":-1,"dashed":true,"arrows":"end"}]}
{{< /apfigure >}}

Because each output value is the opposite of the original output value, we can
write

$$V(t)=-s(t)\quad\text{or}\quad V(t)=-\sqrt{t}$$

Notice that this is an outside change that affects the output $s(t)$ values,
so the negative sign belongs outside of the function.

(b) Reflecting horizontally means that each input value will be reflected over
the vertical axis, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The square root curve rising to the right from the origin and, dashed, its horizontal reflection H of t equals the square root of negative t, rising to the left from the origin as a mirror image across the vertical axis.","xMin":-6,"xMax":6,"yMin":-1,"yMax":3,"xUnit":26,"yUnit":34,"tickLabels":true,"xLabel":"t","yLabel":"s(t)","curves":[{"kind":"sqrt","arrows":"end"}],"polylines":[{"through":[[0,0],[-0.25,0.5],[-0.5,0.707],[-1,1],[-1.5,1.225],[-2,1.414],[-2.5,1.581],[-3,1.732],[-3.5,1.871],[-4,2],[-4.5,2.121],[-5,2.236],[-5.5,2.345]],"dashed":true,"arrows":"end"}]}
{{< /apfigure >}}

Because each input value is the opposite of the original input value, we can
write

$$H(t)=s(-t)\quad\text{or}\quad H(t)=\sqrt{-t}$$

Notice that this is an inside change or horizontal change that affects the
input values, so the negative sign is on the inside of the function.

Note that these transformations can affect the domain and range of the
functions. While the original square root function has domain $[0,\infty)$ and
range $[0,\infty)$, the vertical reflection gives the $V(t)$ function the
range $(-\infty,0]$ and the horizontal reflection gives the $H(t)$ function
the domain $(-\infty,0]$.

{{< fillin
  question="Reflect $f(x)=\lvert x-1\rvert$ vertically. Write a formula for the result."
  answer="-|x-1|"
  answerDisplay="$-\lvert x-1\rvert$"
  hint="A vertical reflection multiplies the whole output by $-1$."
>}}

{{< fillin
  question="Now reflect $f(x)=\lvert x-1\rvert$ horizontally, and write the result in the simplest equivalent form."
  answer="|x+1|"
  answerDisplay="$f(-x)=\lvert -x-1\rvert=\lvert x+1\rvert$"
  hint="Replace $x$ by $-x$ inside, then use $\lvert -a\rvert=\lvert a\rvert$."
>}}

**Example.** A function $f(x)$ is given below. Create a table for the
functions (a) $g(x)=-f(x)$ and (b) $h(x)=f(-x)$.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 1 | 3 | 7 | 11 |

**Solution.** (a) For $g(x)$, the negative sign outside the function indicates
a vertical reflection, so the $x$-values stay the same and each output value
will be the opposite of the original output value.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $g(x)$ | −1 | −3 | −7 | −11 |

(b) For $h(x)$, the negative sign inside the function indicates a horizontal
reflection, so each input value will be the opposite of the original input
value and the $h(x)$ values stay the same as the $f(x)$ values.

| $x$ | −2 | −4 | −6 | −8 |
| :--- | ---: | ---: | ---: | ---: |
| $h(x)$ | 1 | 3 | 7 | 11 |

Now suppose a function $f$ is given by the table below.

| $x$ | −2 | 0 | 2 | 4 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 5 | 10 | 15 | 20 |

{{< fillin
  question="With $f$ as in the table above and $g(x)=-f(x)$, find $g(2)$."
  answer="-15"
  hint="A vertical reflection keeps the input and negates the output."
>}}

{{< fillin
  question="With the same $f$ and $h(x)=f(-x)$, find $h(-2)$."
  answer="15"
  hint="A horizontal reflection reads the table at the opposite input: $h(-2)=f(2)$."
>}}

**Example.** A common model for learning has an equation similar to
$k(t)=-2^{-t}+1$, where $k$ is the percentage of mastery that can be achieved
after $t$ practice sessions. This is a transformation of the function
$f(t)=2^t$ shown below. Sketch a graph of $k(t)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of t equals 2 to the power t: a curve that hugs the horizontal axis on the left, passes through (0, 1), and rises steeply to the right.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":22,"tickLabels":true,"xLabel":"t","yLabel":"f(t)","curves":[{"kind":"exp","b":2}]}
{{< /apfigure >}}

**Solution.** This equation combines three transformations into one equation.

- A horizontal reflection: $f(-t)=2^{-t}$
- A vertical reflection: $-f(-t)=-2^{-t}$
- A vertical shift: $-f(-t)+1=-2^{-t}+1$

We can sketch a graph by applying these transformations one at a time to the
original function. Let us follow two points through each of the three
transformations. We will choose the points $(0,1)$ and $(1,2)$.

- First, we apply a horizontal reflection: $(0,1)\to(0,1)$ and
  $(1,2)\to(-1,2)$.
- Then, we apply a vertical reflection: $(0,1)\to(0,-1)$ and
  $(-1,2)\to(-1,-2)$.
- Finally, we apply a vertical shift: $(0,-1)\to(0,0)$ and
  $(-1,-2)\to(-1,-1)$.

This means that the original points $(0,1)$ and $(1,2)$ become $(0,0)$ and
$(-1,-1)$ after we apply the transformations.

Below, the first graph results from a horizontal reflection, the second from a
vertical reflection, and the third from a vertical shift up 1 unit.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Stage one: 2 to the power negative t, the horizontal reflection of 2 to the power t. It falls from the upper left, passes through (0, 1), and hugs the horizontal axis on the right.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":22,"tickLabels":true,"xLabel":"t","yLabel":"f(−t)","curves":[{"kind":"exp","b":0.5}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Stage two: negative 2 to the power negative t, the vertical reflection of stage one. It rises from the lower left, passes through (0, −1), and hugs the horizontal axis from below on the right.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":22,"tickLabels":true,"xLabel":"t","yLabel":"−f(−t)","curves":[{"kind":"exp","b":0.5,"a":-1}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Stage three: negative 2 to the power negative t, plus 1. The stage-two curve shifted up 1 unit, passing through the origin and approaching the line k = 1 from below as t increases.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":22,"tickLabels":true,"xLabel":"t","yLabel":"k(t)","curves":[{"kind":"exp","b":0.5,"a":-1,"k":1}]}
{{< /apfigure >}}

As a model for learning, this function would be limited to a domain of
$t\ge 0$, with corresponding range $[0,1)$.

{{< multiplechoice
  question="Given the toolkit function $f(x)=x^2$, what is surprising about the graphs of $g(x)=-f(x)$ and $h(x)=f(-x)$?"
  answer="$h(x)=f(-x)$ looks exactly the same as $f(x)$"
  hint="Ask what happens to $(-x)^2$, and think about the parabola's symmetry."
>}}
neither graph resembles $f$
$g(x)=-f(x)$ looks exactly the same as $f(x)$
$h(x)=f(-x)$ looks exactly the same as $f(x)$
both $g$ and $h$ look exactly the same as $f$
{{< /multiplechoice >}}

## Determining even and odd functions

Some functions exhibit symmetry so that reflections result in the original
graph. For example, horizontally reflecting the toolkit functions $f(x)=x^2$
or $f(x)=\lvert x\rvert$ will result in the original graph. We say that these
types of graphs are symmetric about the $y$-axis. Functions whose graphs are
symmetric about the $y$-axis are called **even functions**.

If the graphs of $f(x)=x^3$ or $f(x)=\tfrac{1}{x}$ were reflected over *both*
axes, the result would be the original graph, as shown below: (a) the cubic
toolkit function, (b) its horizontal reflection, and (c) the horizontal and
vertical reflections together, which reproduce the original cubic function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"(a) The cubic toolkit function f of x equals x cubed: an S-shaped curve through the origin, falling to the lower left and rising to the upper right.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"xUnit":30,"yUnit":22,"tickLabels":true,"cubics":[{"a":1}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"(b) The horizontal reflection of the cubic toolkit function, negative x cubed: an S-shaped curve through the origin, rising to the upper left and falling to the lower right.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"xUnit":30,"yUnit":22,"tickLabels":true,"cubics":[{"a":-1}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"(c) Reflecting both horizontally and vertically reproduces the original cubic: an S-shaped curve through the origin, falling to the lower left and rising to the upper right.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"xUnit":30,"yUnit":22,"tickLabels":true,"cubics":[{"a":1}]}
{{< /apfigure >}}

We say that these graphs are symmetric about the origin. A function with a
graph that is symmetric about the origin is called an **odd function**.

Note: A function can be neither even nor odd if it does not exhibit either
symmetry. For example, $f(x)=2^x$ is neither even nor odd. Also, the only
function that is both even and odd is the constant function $f(x)=0$.

{{< callout type="info" >}}
  **Even and odd functions.**

  A function is called an **even function** if for every input $x$

  $$f(x)=f(-x)$$

  The graph of an even function is symmetric about the $y$-axis.

  A function is called an **odd function** if for every input $x$

  $$f(x)=-f(-x)$$

  The graph of an odd function is symmetric about the origin.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the formula for a function, determine if the function is
  even, odd, or neither.

  1. Determine whether the function satisfies $f(x)=f(-x)$. If it does, it is
     even.
  2. Determine whether the function satisfies $f(x)=-f(-x)$. If it does, it
     is odd.
  3. If the function does not satisfy either rule, it is neither even nor
     odd.
{{< /callout >}}

**Example.** Is the function $f(x)=x^3+2x$ even, odd, or neither?

**Solution.** Without looking at a graph, we can determine whether the
function is even or odd by finding formulas for the reflections and
determining if they return us to the original function. Let's begin with the
rule for even functions.

$$f(-x)=(-x)^3+2(-x)=-x^3-2x$$

This does not return us to the original function, so this function is not
even. We can now test the rule for odd functions.

$$-f(-x)=-(-x^3-2x)=x^3+2x$$

Because $-f(-x)=f(x)$, this is an odd function.

Consider the graph of $f$ below. Notice that the graph is symmetric about the
origin. For every point $(x,y)$ on the graph, the corresponding point
$(-x,-y)$ is also on the graph. For example, $(1,3)$ is on the graph of $f$,
and the corresponding point $(-1,-3)$ is also on the graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals x cubed plus 2x, symmetric about the origin, with the points (1, 3) and (−1, −3) marked.","xMin":-3,"xMax":3,"yMin":-8,"yMax":8,"xUnit":36,"yUnit":16,"xGridStep":1,"yGridStep":2,"tickLabels":true,"xTickStep":1,"yTickStep":2,"cubics":[{"a":1,"b":0,"c":2,"d":0}],"points":[{"at":[1,3],"label":"(1, 3)","labelSide":"e"},{"at":[-1,-3],"label":"(−1, −3)","labelSide":"w"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Is the function $f(s)=s^4+3s^2+7$ even, odd, or neither?"
  answer="even"
  hint="Replace $s$ by $-s$: every exponent here is even, so what happens to each term?"
>}}
even
neither
both even and odd
odd
{{< /multiplechoice >}}

## Graphing functions using stretches and compressions

Adding a constant to the inputs or outputs of a function changed the position
of a graph with respect to the axes, but it did not affect the shape of a
graph. We now explore the effects of multiplying the inputs or outputs by some
quantity.

We can transform the inside (input values) of a function or we can transform
the outside (output values) of a function. Each change has a specific effect
that can be seen graphically.

### Vertical stretches and compressions

When we multiply a function by a positive constant, we get a function whose
graph is stretched or compressed vertically in relation to the graph of the
original function. If the constant is greater than 1, we get a **vertical
stretch**; if the constant is between 0 and 1, we get a **vertical
compression**. The graph below shows a function multiplied by constant factors
2 and 0.5 and the resulting vertical stretch and compression, both dashed.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A rising curve f of x with two companions drawn dashed: 2 times f of x, whose every height is doubled, and one half of f of x, whose every height is halved.","xMin":-1,"xMax":5,"yMin":-1,"yMax":6,"xUnit":40,"yUnit":34,"tickLabels":true,"curves":[{"kind":"sqrt","a":1.4,"arrows":"end"},{"kind":"sqrt","a":2.8,"dashed":true,"arrows":"end"},{"kind":"sqrt","a":0.7,"dashed":true,"arrows":"end"}],"texts":[{"at":[1.5,3.9],"text":"2f(x)","anchor":"end"},{"at":[4.2,3.3],"text":"f(x)","anchor":"start"},{"at":[3.3,0.5],"text":"0.5f(x)","anchor":"start"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Vertical stretches and compressions.** Given a function $f(x)$, a new
  function $g(x)=af(x)$, where $a$ is a constant, is a **vertical stretch** or
  **vertical compression** of the function $f(x)$.

  - If $a>1$, then the graph will be stretched.
  - If $0<a<1$, then the graph will be compressed.
  - If $a<0$, then there will be a combination of a vertical stretch or
    compression with a vertical reflection.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a function, graph its vertical stretch.

  1. Identify the value of $a$.
  2. Multiply all range values by $a$.
  3. If $a>1$, the graph is stretched by a factor of $a$. If $0<a<1$, the
     graph is compressed by a factor of $a$. If $a<0$, the graph is either
     stretched or compressed and also reflected about the $x$-axis.
{{< /callout >}}

**Example.** A function $P(t)$ models the population of fruit flies. The graph
is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of P of t, a fruit fly population. It begins at (0, 1), curves up to a peak at (3, 3), falls steadily to (6, 2), then drops steeply to (7, 0).","xMin":-1,"xMax":7,"yMin":-1,"yMax":7,"unit":26,"tickLabels":true,"xLabel":"t","yLabel":"P(t)","polylines":[{"through":[[0,1],[1,1.5],[2,2.15],[3,3],[6,2],[7,0]]}],"points":[{"at":[0,1]},{"at":[7,0]}]}
{{< /apfigure >}}

A scientist is comparing this population to another population, $Q$, whose
growth follows the same pattern, but is twice as large. Sketch a graph of this
population.

**Solution.** Because the population is always twice as large, the new
population's output values are always twice the original function's output
values.

If we choose four reference points, $(0,1)$, $(3,3)$, $(6,2)$ and $(7,0)$, we
will multiply all of the outputs by 2. The following shows where the new
points for the new graph will be located.

$$
\begin{array}{lrcl}
& (0,1) &\to& (0,2) \\[4pt]
& (3,3) &\to& (3,6) \\[4pt]
& (6,2) &\to& (6,4) \\[4pt]
& (7,0) &\to& (7,0)
\end{array}
$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of Q of t equals 2 times P of t. It has the same shape as P but every height is doubled: it begins at (0, 2), peaks at (3, 6), falls to (6, 4), then drops to (7, 0).","xMin":-1,"xMax":7,"yMin":-1,"yMax":7,"unit":26,"tickLabels":true,"xLabel":"t","yLabel":"Q(t)","polylines":[{"through":[[0,2],[1,3],[2,4.3],[3,6],[6,4],[7,0]]}],"points":[{"at":[0,2]},{"at":[7,0]}]}
{{< /apfigure >}}

Symbolically, the relationship is written as

$$Q(t)=2P(t)$$

This means that for any input $t$, the value of the function $Q$ is twice the
value of the function $P$. Notice that the effect on the graph is a vertical
stretching of the graph, where every point doubles its distance from the
horizontal axis. The input values, $t$, stay the same while the output values
are twice as large as before.

{{< callout type="info" >}}
  **How to:** given a tabular function and assuming that the transformation is
  a vertical stretch or compression, create a table for a vertical
  compression.

  1. Determine the value of $a$.
  2. Multiply all of the output values by $a$.
{{< /callout >}}

**Example.** A function $f$ is given below. Create a table for the function
$g(x)=\tfrac{1}{2}f(x)$.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 1 | 3 | 7 | 11 |

**Solution.** The formula $g(x)=\tfrac{1}{2}f(x)$ tells us that the output
values of $g$ are half of the output values of $f$ with the same inputs. For
example, we know that $f(4)=3$. Then

$$g(4)=\tfrac{1}{2}f(4)=\tfrac{1}{2}(3)=\tfrac{3}{2}$$

We do the same for the other values to produce the table below.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $g(x)$ | $\tfrac{1}{2}$ | $\tfrac{3}{2}$ | $\tfrac{7}{2}$ | $\tfrac{11}{2}$ |

The result is that the function $g(x)$ has been compressed vertically by
$\tfrac{1}{2}$. Each output value is divided in half, so the graph is half the
original height.

Now suppose a function $f$ is given by the table below.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 12 | 16 | 20 | 0 |

{{< fillin
  question="With $f$ as in the table above and $g(x)=\tfrac{3}{4}f(x)$, find $g(2)$."
  answer="9"
  hint="Multiply the output at that same input by $\tfrac{3}{4}$."
>}}

{{< fillin
  question="With the same $f$ and $g$, find $g(6)$."
  answer="15"
  hint="A vertical compression leaves the input alone and scales the output."
>}}

**Example.** The graph below is a transformation of the toolkit function
$f(x)=x^3$. Relate this new function $g(x)$ to $f(x)$, and then find a formula
for $g(x)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of g of x equals one quarter x cubed: an S-shaped curve through the origin that passes through (2, 2), flatter than the cubic toolkit function.","xMin":-4,"xMax":4,"yMin":-6,"yMax":6,"xUnit":26,"yUnit":22,"tickLabels":true,"cubics":[{"a":0.25}],"points":[{"at":[2,2],"label":"(2, 2)","labelSide":"se"}]}
{{< /apfigure >}}

**Solution.** When trying to determine a vertical stretch or shift, it is
helpful to look for a point on the graph that is relatively clear. In this
graph, it appears that $g(2)=2$. With the basic cubic function at the same
input, $f(2)=2^3=8$. Based on that, it appears that the outputs of $g$ are
$\tfrac{1}{4}$ the outputs of the function $f$ because $g(2)=\tfrac{1}{4}f(2)$.
From this we can fairly safely conclude that $g(x)=\tfrac{1}{4}f(x)$.

We can write a formula for $g$ by using the definition of the function $f$.

$$g(x)=\tfrac{1}{4}f(x)=\tfrac{1}{4}x^3$$

{{< fillin
  question="Write the formula for the function that we get when we stretch the identity toolkit function by a factor of 3, and then shift it down by 2 units."
  answer="3x-2"
  answerDisplay="$g(x)=3x-2$"
  hint="Stretch first, then shift: multiply the output by 3, then subtract 2."
>}}

### Horizontal stretches and compressions

Now we consider changes to the inside of a function. When we multiply a
function's input by a positive constant, we get a function whose graph is
stretched or compressed horizontally in relation to the graph of the original
function. If the constant is between 0 and 1, we get a **horizontal stretch**;
if the constant is greater than 1, we get a **horizontal compression** of the
function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Three parabolas with a common vertex at the origin. The solid one is y = x squared. Drawn dashed, y = (0.5x) squared is a horizontal stretch, opening more widely, and y = (2x) squared is a horizontal compression, opening more narrowly.","xMin":-5,"xMax":5,"yMin":-1,"yMax":8,"xUnit":26,"yUnit":26,"tickLabels":true,"quadratics":[{"a":1},{"a":0.25,"dashed":true},{"a":4,"dashed":true}],"texts":[{"at":[-4.4,5.6],"text":"y = (2x)²","anchor":"start"},{"at":[3.3,7.2],"text":"y = x²","anchor":"start"},{"at":[4.9,1.3],"text":"y = (0.5x)²","anchor":"end"}]}
{{< /apfigure >}}

Given a function $y=f(x)$, the form $y=f(bx)$ results in a horizontal stretch
or compression. Consider the function $y=x^2$. The graph of $y=(0.5x)^2$ is a
horizontal stretch of the graph of the function $y=x^2$ by a factor of 2. The
graph of $y=(2x)^2$ is a horizontal compression of the graph of the function
$y=x^2$ by a factor of $2$.

{{< callout type="info" >}}
  **Horizontal stretches and compressions.** Given a function $f(x)$, a new
  function $g(x)=f(bx)$, where $b$ is a constant, is a **horizontal stretch**
  or **horizontal compression** of the function $f(x)$.

  - If $b>1$, then the graph will be compressed by $\tfrac{1}{b}$.
  - If $0<b<1$, then the graph will be stretched by $\tfrac{1}{b}$.
  - If $b<0$, then there will be a combination of a horizontal stretch or
    compression with a horizontal reflection.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a description of a function, sketch a horizontal
  compression or stretch.

  1. Write a formula to represent the function.
  2. Set $g(x)=f(bx)$ where $b>1$ for a compression or $0<b<1$ for a stretch.
{{< /callout >}}

**Example.** Suppose a scientist is comparing a population of fruit flies to a
population that progresses through its lifespan twice as fast as the original
population. In other words, this new population, $R$, will progress in 1 hour
the same amount as the original population does in 2 hours, and in 2 hours, it
will progress as much as the original population does in 4 hours. Sketch a
graph of this population.

**Solution.** Symbolically, we could write

$$
\begin{array}{lrcl}
& R(1) &=& P(2), \\[4pt]
& R(2) &=& P(4),\ \text{and in general,} \\[4pt]
& R(t) &=& P(2t).
\end{array}
$$

Comparing the original population graph above with the compressed population
graph below:

{{< apfigure kind="graph" >}}
{"ariaLabel":"The transformed population R of t equals P of 2t. It has the same shape as P but is half as wide: it begins at (0, 1), peaks at (1.5, 3), falls to (3, 2), then drops to (3.5, 0).","xMin":-1,"xMax":7,"yMin":-1,"yMax":7,"unit":26,"tickLabels":true,"xLabel":"t","yLabel":"R(t)","polylines":[{"through":[[0,1],[0.5,1.5],[1,2.15],[1.5,3],[3,2],[3.5,0]]}],"points":[{"at":[0,1]},{"at":[3.5,0]}]}
{{< /apfigure >}}

Note that the effect on the graph is a horizontal compression where all input
values are half of their original distance from the vertical axis.

**Example.** A function $f(x)$ is given below. Create a table for the function
$g(x)=f\left(\tfrac{1}{2}x\right)$.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 1 | 3 | 7 | 11 |

**Solution.** The formula $g(x)=f\left(\tfrac{1}{2}x\right)$ tells us that the
output values for $g$ are the same as the output values for the function $f$
at an input half the size. Notice that we do not have enough information to
determine $g(2)$ because
$g(2)=f\left(\tfrac{1}{2}\cdot 2\right)=f(1)$, and we do not have a value for
$f(1)$ in our table. Our input values to $g$ will need to be twice as large to
get inputs for $f$ that we can evaluate. For example, we can determine $g(4)$.

$$g(4)=f\left(\tfrac{1}{2}\cdot 4\right)=f(2)=1$$

We do the same for the other values to produce the table below.

| $x$ | 4 | 8 | 12 | 16 |
| :--- | ---: | ---: | ---: | ---: |
| $g(x)$ | 1 | 3 | 7 | 11 |

The graphs below show both of these sets of points: (a) the points of $f$ and
(b) the points of $g$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"(a) The plotted points of f: (2, 1), (4, 3), (6, 7), and (8, 11).","xMin":-1,"xMax":20,"yMin":-1,"yMax":13,"xUnit":14,"yUnit":16,"xGridStep":2,"yGridStep":2,"tickLabels":true,"xTickStep":4,"yTickStep":2,"yLabel":"f(x)","points":[{"at":[2,1]},{"at":[4,3]},{"at":[6,7]},{"at":[8,11]}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"(b) The plotted points of g(x) = f(x/2): (4, 1), (8, 3), (12, 7), and (16, 11). Each height matches a point of f at twice the input.","xMin":-1,"xMax":20,"yMin":-1,"yMax":13,"xUnit":14,"yUnit":16,"xGridStep":2,"yGridStep":2,"tickLabels":true,"xTickStep":4,"yTickStep":2,"yLabel":"g(x)","points":[{"at":[4,1]},{"at":[8,3]},{"at":[12,7]},{"at":[16,11]}]}
{{< /apfigure >}}

Because each input value has been doubled, the result is that the function
$g(x)$ has been stretched horizontally by a factor of 2.

**Example.** Relate the function $g(x)$ to $f(x)$ in the graph below, where
$g$ is dashed.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f rises in a straight line from the origin to (4, 4), dips to (5, 3.4) and returns to a solid point at (6, 4). Drawn dashed, g is the same shape compressed to one third of its width: it rises from the origin to (4/3, 4), dips at (5/3, 3.4) and ends at a solid point at (2, 4).","xMin":-1,"xMax":7,"yMin":-1,"yMax":5,"xUnit":40,"yUnit":40,"tickLabels":true,"segments":[{"from":[0,0],"to":[4,4]},{"from":[0,0],"to":[1.3333,4],"dashed":true}],"quadratics":[{"a":0.6,"b":-6,"c":18.4,"from":4,"to":6,"arrows":false},{"a":5.4,"b":-18,"c":18.4,"from":1.3333,"to":2,"dashed":true,"arrows":false}],"points":[{"at":[6,4],"label":"f","labelSide":"e"},{"at":[2,4],"label":"g","labelSide":"n"}]}
{{< /apfigure >}}

**Solution.** The graph of $g(x)$ looks like the graph of $f(x)$ horizontally
compressed. Because $f(x)$ ends at $(6,4)$ and $g(x)$ ends at $(2,4)$, we can
see that the $x$-values have been compressed by $\tfrac{1}{3}$, because
$6\left(\tfrac{1}{3}\right)=2$. We might also notice that $g(2)=f(6)$ and
$g(1)=f(3)$. Either way, we can describe this relationship as $g(x)=f(3x)$.
This is a horizontal compression by $\tfrac{1}{3}$.

Notice that the coefficient needed for a horizontal stretch or compression is
the reciprocal of the stretch or compression. So to stretch the graph
horizontally by a scale factor of 4, we need a coefficient of $\tfrac{1}{4}$
in our function: $f\left(\tfrac{1}{4}x\right)$. This means that the input
values must be four times larger to produce the same result, requiring the
input to be larger, causing the horizontal stretching.

{{< fillin
  question="Write a formula for the toolkit square root function horizontally stretched by a factor of 3."
  answer="\sqrt{\frac{1}{3}x}"
  answerDisplay="$g(x)=f\left(\tfrac{1}{3}x\right)=\sqrt{\tfrac{1}{3}x}$"
  hint="The coefficient inside is the reciprocal of the stretch factor."
>}}

## Performing a sequence of transformations

When combining transformations, it is very important to consider the order of
the transformations. For example, vertically shifting by 3 and then vertically
stretching by 2 does not create the same graph as vertically stretching by 2
and then vertically shifting by 3, because when we shift first, both the
original function and the shift get stretched, while only the original
function gets stretched when we stretch first.

When we see an expression such as $2f(x)+3$, which transformation should we
start with? The answer here follows nicely from the order of operations. Given
the output value of $f(x)$, we first multiply by 2, causing the vertical
stretch, and then add 3, causing the vertical shift. In other words,
multiplication before addition.

Horizontal transformations are a little trickier to think about. When we write
$g(x)=f(2x+3)$, for example, we have to think about how the inputs to the
function $g$ relate to the inputs to the function $f$. Suppose we know
$f(7)=12$. What input to $g$ would produce that output? In other words, what
value of $x$ will allow $g(x)=f(2x+3)=12$? We would need $2x+3=7$. To solve
for $x$, we would first subtract 3, resulting in a horizontal shift, and then
divide by 2, causing a horizontal compression.

This format ends up being very difficult to work with, because it is usually
much easier to horizontally stretch a graph before shifting. We can work
around this by factoring inside the function.

$$f(bx+p)=f\left(b\left(x+\tfrac{p}{b}\right)\right)$$

Let's work through an example.

$$f(x)=(2x+4)^2$$

We can factor out a 2.

$$f(x)=(2(x+2))^2$$

Now we can more clearly observe a horizontal shift to the left 2 units and a
horizontal compression. Factoring in this way allows us to horizontally
stretch first and then shift horizontally.

{{< callout type="info" >}}
  **Combining transformations.**

  When combining vertical transformations written in the form $af(x)+k$, first
  vertically stretch by $a$ and then vertically shift by $k$.

  When combining horizontal transformations written in the form $f(bx-h)$,
  first horizontally shift by $h$ and then horizontally stretch by
  $\tfrac{1}{b}$.

  When combining horizontal transformations written in the form $f(b(x-h))$,
  first horizontally stretch by $\tfrac{1}{b}$ and then horizontally shift by
  $h$.

  Horizontal and vertical transformations are independent. It does not matter
  whether horizontal or vertical transformations are performed first.
{{< /callout >}}

**Example.** Given the table below for the function $f(x)$, create a table of
values for the function $g(x)=2f(3x)+1$.

| $x$ | 6 | 12 | 18 | 24 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 10 | 14 | 15 | 17 |

**Solution.** There are three steps to this transformation, and we will work
from the inside out. Starting with the horizontal transformations, $f(3x)$ is
a horizontal compression by $\tfrac{1}{3}$, which means we multiply each
$x$-value by $\tfrac{1}{3}$.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(3x)$ | 10 | 14 | 15 | 17 |

Looking now to the vertical transformations, we start with the vertical
stretch, which will multiply the output values by 2. We apply this to the
previous transformation.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $2f(3x)$ | 20 | 28 | 30 | 34 |

Finally, we can apply the vertical shift, which will add 1 to all the output
values.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $g(x)=2f(3x)+1$ | 21 | 29 | 31 | 35 |

**Example.** Use the graph of $f(x)$ below to sketch a graph of
$k(x)=f\left(\tfrac{1}{2}x+1\right)-3$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f: the upper half of the circle of radius 2 centred at the origin, from a solid point at (−2, 0) up through (0, 2) and back down to a solid point at (2, 0).","xMin":-6,"xMax":6,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"yLabel":"f(x)","circles":[{"at":[0,0],"r":2,"from":0,"to":180}],"points":[{"at":[-2,0]},{"at":[2,0]}]}
{{< /apfigure >}}

**Solution.** To simplify, let's start by factoring out the inside of the
function.

$$f\left(\tfrac{1}{2}x+1\right)-3=f\left(\tfrac{1}{2}(x+2)\right)-3$$

By factoring the inside, we can first horizontally stretch by 2, as indicated
by the $\tfrac{1}{2}$ on the inside of the function. Remember that twice the
size of 0 is still 0, so the point $(0,2)$ remains at $(0,2)$ while the point
$(2,0)$ will stretch to $(4,0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same half-circle stretched horizontally by 2: a half-ellipse from a solid point at (−4, 0) up through (0, 2) and back down to a solid point at (4, 0).","xMin":-6,"xMax":6,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"yLabel":"f(x)","circles":[{"at":[0,0],"rx":4,"ry":2,"from":0,"to":180}],"points":[{"at":[-4,0]},{"at":[4,0]}]}
{{< /apfigure >}}

Next, we horizontally shift left by 2 units, as indicated by $x+2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The stretched half-ellipse shifted 2 units left: it runs from a solid point at (−6, 0) up through (−2, 2) and back down to a solid point at (2, 0).","xMin":-7,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"yLabel":"f(x)","circles":[{"at":[-2,0],"rx":4,"ry":2,"from":0,"to":180}],"points":[{"at":[-6,0]},{"at":[2,0]}]}
{{< /apfigure >}}

Last, we vertically shift down by 3 to complete our sketch, as indicated by
the $-3$ on the outside of the function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The final graph of k of x: the stretched, shifted half-ellipse moved down 3 units, running from a solid point at (−6, −3) up through (−2, −1) and back down to a solid point at (2, −3).","xMin":-7,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"yLabel":"k(x)","circles":[{"at":[-2,-3],"rx":4,"ry":2,"from":0,"to":180}],"points":[{"at":[-6,-3]},{"at":[2,-3]}]}
{{< /apfigure >}}

## Key equations

| Vertical shift | $g(x)=f(x)+k$ (up for $k>0$) |
| :--- | :--- |
| Horizontal shift | $g(x)=f(x-h)$ (right for $h>0$) |
| Vertical reflection | $g(x)=-f(x)$ |
| Horizontal reflection | $g(x)=f(-x)$ |
| Vertical stretch | $g(x)=af(x)$ ($a>1$) |
| Vertical compression | $g(x)=af(x)$ ($0<a<1$) |
| Horizontal stretch | $g(x)=f(bx)$ ($0<b<1$) |
| Horizontal compression | $g(x)=f(bx)$ ($b>1$) |

## Key concepts

- A function can be shifted vertically by adding a constant to the output.
- A function can be shifted horizontally by adding a constant to the input.
- Relating the shift to the context of a problem makes it possible to compare
  and interpret vertical and horizontal shifts.
- Vertical and horizontal shifts are often combined.
- A vertical reflection reflects a graph about the $x$-axis. A graph can be
  reflected vertically by multiplying the output by $-1$.
- A horizontal reflection reflects a graph about the $y$-axis. A graph can be
  reflected horizontally by multiplying the input by $-1$.
- A graph can be reflected both vertically and horizontally. The order in
  which the reflections are applied does not affect the final graph.
- A function presented in tabular form can also be reflected by multiplying
  the values in the input and output rows or columns accordingly.
- A function presented as an equation can be reflected by applying
  transformations one at a time.
- Even functions are symmetric about the $y$-axis, whereas odd functions are
  symmetric about the origin.
- Even functions satisfy the condition $f(x)=f(-x)$.
- Odd functions satisfy the condition $f(x)=-f(-x)$.
- A function can be odd, even, or neither.
- A function can be compressed or stretched vertically by multiplying the
  output by a constant.
- A function can be compressed or stretched horizontally by multiplying the
  input by a constant.
- The order in which different transformations are applied does affect the
  final function. Both vertical and horizontal transformations must be applied
  in the order given. However, a vertical transformation may be combined with
  a horizontal transformation in any order.

## Key terms

**vertical shift** — a transformation that shifts a function's graph up or
down by adding a positive or negative constant to the output. **horizontal
shift** — a transformation that shifts a function's graph left or right by
adding a positive or negative constant to the input. **vertical reflection** —
a transformation that reflects a function's graph across the $x$-axis by
multiplying the output by $-1$. **horizontal reflection** — a transformation
that reflects a function's graph across the $y$-axis by multiplying the input
by $-1$. **even function** — a function whose graph is unchanged by horizontal
reflection, $f(x)=f(-x)$, and is symmetric about the $y$-axis. **odd
function** — a function whose graph is unchanged by combined horizontal and
vertical reflection, $f(x)=-f(-x)$, and is symmetric about the origin.
**vertical stretch** — a transformation that stretches a function's graph
vertically by multiplying the output by a constant $a>1$. **vertical
compression** — a function transformation that compresses the function's graph
vertically by multiplying the output by a constant $0<a<1$. **horizontal
stretch** — a transformation that stretches a function's graph horizontally by
multiplying the input by a constant $0<b<1$. **horizontal compression** — a
transformation that compresses a function's graph horizontally, by multiplying
the input by a constant $b>1$.

## Practice

### Graph functions using vertical and horizontal shifts

{{< fillin
  question="Write a formula for the function obtained when the graph of $f(x)=\lvert x\rvert$ is shifted down 3 units and to the right 1 unit."
  answer="\lvert x-1\rvert-3"
  answerDisplay="$g(x)=\lvert x-1\rvert-3$"
  hint="A shift right 1 replaces $x$ with $x-1$ inside the function; a shift down 3 subtracts 3 from the result."
>}}

{{< fillin
  question="Write a formula for the function obtained when the graph of $f(x)=\tfrac{1}{x^2}$ is shifted up 2 units and to the left 4 units."
  answer="\frac{1}{(x+4)^2}+2"
  answerDisplay="$g(x)=\tfrac{1}{(x+4)^2}+2$"
  hint="A shift left 4 replaces $x$ with $x+4$ inside the function; a shift up 2 adds 2 to the result."
>}}

### Graph functions using reflections about the $x$-axis and the $y$-axis

{{< multiplechoice
  question="The graph of $g(x)=-f(x)$ is obtained from the graph of $f$ by which transformation?"
  answer="Vertical reflection across the $x$-axis"
  hint="Multiplying the output by $-1$ flips every point over the horizontal axis."
>}}
Vertical shift down 1 unit
Vertical reflection across the $x$-axis
Horizontal reflection across the $y$-axis
Vertical stretch by a factor of 2
{{< /multiplechoice >}}

{{< multiplechoice
  question="Describe how the graph of $g(x)=3f(-x)$ is a transformation of the graph of $f$."
  answer="Horizontal reflection across the $y$-axis and a vertical stretch by a factor of 3"
  hint="The $-x$ inside $f$ reflects the graph horizontally; the factor of 3 outside stretches it vertically."
>}}
Horizontal shift left 3 units and a reflection across the $y$-axis
Horizontal reflection across the $y$-axis and a vertical stretch by a factor of 3
Vertical reflection across the $x$-axis and a vertical stretch by a factor of 3
Horizontal reflection across the $y$-axis and a horizontal compression by a factor of 3
{{< /multiplechoice >}}

### Determine whether a function is even, odd, or neither from its graph

{{< multiplechoice
  question="Is the function $f(x)=3x^4$ even, odd, or neither?"
  answer="even"
  hint="Substitute $-x$ for $x$ and compare $f(-x)$ to $f(x)$."
>}}
odd
even
neither
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is the function $h(x)=\tfrac{1}{x}+3x$ even, odd, or neither?"
  answer="odd"
  hint="Substitute $-x$ for $x$; if the result is the opposite of $h(x)$, the function is odd."
>}}
even
odd
neither
{{< /multiplechoice >}}

### Graph functions using compressions and stretches

{{< multiplechoice
  question="Describe how the graph of $g(x)=4f(x)$ is a transformation of the graph of $f$."
  answer="Vertical stretch by a factor of 4"
  hint="Multiplying the output by a constant greater than 1 stretches the graph vertically."
>}}
Horizontal compression by a factor of $\tfrac{1}{4}$
Horizontal stretch by a factor of 4
Vertical stretch by a factor of 4
Vertical compression by a factor of $\tfrac{1}{4}$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Describe how the graph of $g(x)=f(5x)$ is a transformation of the graph of $f$."
  answer="Horizontal compression by a factor of $\tfrac{1}{5}$"
  hint="Multiplying the input by a constant greater than 1 compresses the graph horizontally."
>}}
Vertical compression by a factor of $\tfrac{1}{5}$
Horizontal stretch by a factor of 5
Vertical stretch by a factor of 5
Horizontal compression by a factor of $\tfrac{1}{5}$
{{< /multiplechoice >}}

### Combine transformations

{{< fillin
  question="The graph of $f(x)=\tfrac{1}{x^2}$ is vertically compressed by a factor of $\tfrac{1}{3}$, then shifted to the left 2 units and down 3 units. Write a formula for $g$."
  answer="\frac{1}{3(x+2)^2}-3"
  answerDisplay="$g(x)=\tfrac{1}{3(x+2)^2}-3$"
  hint="Apply the compression first, then replace $x$ with $x+2$ for the horizontal shift, then subtract 3 for the vertical shift."
>}}

{{< fillin
  question="The graph of $f(x)=x^2$ is vertically compressed by a factor of $\tfrac{1}{2}$, then shifted to the right 5 units and up 1 unit. Write a formula for $g$."
  answer="\frac{1}{2}(x-5)^2+1"
  answerDisplay="$g(x)=\tfrac{1}{2}(x-5)^2+1$"
  hint="Apply the compression first, then replace $x$ with $x-5$ for the horizontal shift, then add 1 for the vertical shift."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 1.5: Transformation of Functions](https://openstax.org/books/precalculus-2e/pages/1-5-transformation-of-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every graph as an accessible inline SVG generated from an explicit formula or point list — the half-circle example is drawn as exact elliptical arcs, and where the source distinguishes a transformed curve by colour this page draws it dashed, since the figures are monochrome; presented every function table as a Markdown table; omitted the opening funhouse-mirror photograph, whose point the surrounding prose already makes, along with the media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback, using multiple choice where the answer is a verbal description or a classification, and asking for individual table entries where the source answer is a whole table; and adapted selected end-of-section exercises into an interactive Practice block.</small>
