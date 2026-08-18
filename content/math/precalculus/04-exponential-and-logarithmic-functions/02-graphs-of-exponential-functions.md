---
title: Graphs of Exponential Functions
description: >-
  Sketching parent exponential graphs from a table of values, recognizing the
  horizontal asymptote, and building every shift, stretch, compression, and
  reflection that carries $f(x)=b^x$ into $f(x)=ab^{x+c}+d$ — adapted from
  OpenStax Precalculus 2e, Section 4.2.
source_section: "4.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph exponential functions
- Graph exponential functions using transformations
{{< /callout >}}

As we discussed in the previous section, exponential functions are used for
many real-world applications such as finance, forensics, computer science,
and most of the life sciences. Working with an equation that describes a
real-world situation gives us a method for making predictions. Most of the
time, however, the equation itself is not enough. We learn a lot about
things by seeing their pictorial representations, and that is exactly why
graphing exponential equations is a powerful tool. It gives us another layer
of insight for predicting future events.

## Graphing Exponential Functions

Before we begin graphing, it is helpful to review the behavior of
exponential growth. Recall the table of values for a function of the form
$f(x)=b^x$ whose base is greater than one. We'll use the function
$f(x)=2^x$. Observe how the output values change as the input increases by
$1$.

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $f(x)=2^x$ | $\tfrac{1}{8}$ | $\tfrac{1}{4}$ | $\tfrac{1}{2}$ | $1$ | $2$ | $4$ | $8$ |

Each output value is the product of the previous output and the base, $2$.
We call the base $2$ the *constant ratio*. In fact, for any exponential
function with the form $f(x)=ab^x$, $b$ is the constant ratio of the
function. This means that as the input increases by 1, the output value
will be the product of the base and the previous output, regardless of the
value of $a$.

Notice from the table that

- the output values are positive for all values of $x$;
- as $x$ increases, the output values increase without bound; and
- as $x$ decreases, the output values grow smaller, approaching zero.

The graph below shows the exponential growth function $f(x)=2^x$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the exponential growth function f(x) = 2 to the x power, an increasing curve through the plotted points (-3, 1/8), (-2, 1/4), (-1, 1/2), (0, 1), (1, 2), (2, 4), and (3, 8), with a dashed horizontal asymptote at y = 0.","xMin":-5,"xMax":5,"yMin":-2,"yMax":10,"tickLabels":true,"curves":[{"kind":"exp","a":1,"b":2,"h":0,"k":0}],"lines":[{"y":0,"dashed":true,"arrows":false}],"points":[{"at":[-3,0.125]},{"at":[-2,0.25]},{"at":[-1,0.5],"label":"(-1, 1/2)"},{"at":[0,1],"label":"(0, 1)"},{"at":[1,2],"label":"(1, 2)"},{"at":[2,4]},{"at":[3,8],"label":"(3, 8)"}],"texts":[{"at":[-4.8,9.3],"text":"f(x) = 2ˣ","anchor":"start"}]}
{{< /apfigure >}}

Notice that the graph gets close to the $x$-axis, but never touches it.

The domain of $f(x)=2^x$ is all real numbers, the range is $(0,\infty)$, and
the horizontal asymptote is $y=0$.

To get a sense of the behavior of *exponential decay*, we can create a table
of values for a function of the form $f(x)=b^x$ whose base is between zero
and one. We'll use the function $g(x)=\left(\tfrac{1}{2}\right)^x$. Observe
how the output values change as the input increases by $1$.

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $g(x)=\left(\tfrac{1}{2}\right)^x$ | $8$ | $4$ | $2$ | $1$ | $\tfrac{1}{2}$ | $\tfrac{1}{4}$ | $\tfrac{1}{8}$ |

Again, because the input is increasing by 1, each output value is the
product of the previous output and the base, or constant ratio,
$\tfrac{1}{2}$.

Notice from the table that

- the output values are positive for all values of $x$;
- as $x$ increases, the output values grow smaller, approaching zero; and
- as $x$ decreases, the output values grow without bound.

The graph below shows the exponential decay function
$g(x)=\left(\tfrac{1}{2}\right)^x$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the exponential decay function g(x) = (1/2) to the x power, a decreasing curve through the plotted points (-3, 8), (-2, 4), (-1, 2), (0, 1), (1, 1/2), (2, 1/4), and (3, 1/8), with a dashed horizontal asymptote at y = 0.","xMin":-5,"xMax":5,"yMin":-2,"yMax":10,"tickLabels":true,"curves":[{"kind":"exp","a":1,"b":0.5,"h":0,"k":0}],"lines":[{"y":0,"dashed":true,"arrows":false}],"points":[{"at":[-3,8],"label":"(-3, 8)"},{"at":[-2,4]},{"at":[-1,2],"label":"(-1, 2)"},{"at":[0,1],"label":"(0, 1)"},{"at":[1,0.5]},{"at":[2,0.25],"label":"(2, 1/4)"},{"at":[3,0.125]}],"texts":[{"at":[1.5,9.3],"text":"g(x) = (½)ˣ","anchor":"start"}]}
{{< /apfigure >}}

The domain of $g(x)=\left(\tfrac{1}{2}\right)^x$ is all real numbers, the
range is $(0,\infty)$, and the horizontal asymptote is $y=0$.

{{< callout type="info" >}}
  **Characteristics of the graph of the parent function $f(x)=b^x$.** An
  exponential function with the form $f(x)=b^x$, $b>0$, $b\ne1$, has these
  characteristics:

  - one-to-one function
  - horizontal asymptote: $y=0$
  - domain: $(-\infty,\infty)$
  - range: $(0,\infty)$
  - $x$-intercept: none
  - $y$-intercept: $(0,1)$
  - increasing if $b>1$
  - decreasing if $b<1$
{{< /callout >}}

The two graphs below compare the graphs of exponential growth and decay
functions.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (a): the graph of f(x) = b to the x power when b is greater than 1, an increasing curve through (0, 1) and (1, b), approaching a dashed horizontal asymptote at y = 0 to the left.","xMin":-4,"xMax":4,"yMin":-1,"yMax":7,"tickLabels":true,"curves":[{"kind":"exp","a":1,"b":2,"h":0,"k":0}],"lines":[{"y":0,"dashed":true,"arrows":false}],"points":[{"at":[0,1],"label":"(0, 1)"},{"at":[1,2],"label":"(1, b)"}],"texts":[{"at":[-3.8,4.9],"text":"f(x) = bˣ","anchor":"start"},{"at":[-3.8,4.3],"text":"b > 1","anchor":"start"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (b): the graph of f(x) = b to the x power when b is between 0 and 1, a decreasing curve through (0, 1) and (1, b), approaching a dashed horizontal asymptote at y = 0 to the right.","xMin":-4,"xMax":4,"yMin":-1,"yMax":7,"tickLabels":true,"curves":[{"kind":"exp","a":1,"b":0.5,"h":0,"k":0}],"lines":[{"y":0,"dashed":true,"arrows":false}],"points":[{"at":[0,1],"label":"(0, 1)"},{"at":[1,0.5],"label":"(1, b)"}],"texts":[{"at":[0.8,5.4],"text":"f(x) = bˣ","anchor":"start"},{"at":[0.8,4.8],"text":"0 < b < 1","anchor":"start"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **How to:** given an exponential function of the form $f(x)=b^x$, graph
  the function.

  1. Create a table of points.
  2. Plot at least $3$ points from the table, including the $y$-intercept
     $(0,1)$.
  3. Draw a smooth curve through the points.
  4. State the domain, $(-\infty,\infty)$, the range, $(0,\infty)$, and the
     horizontal asymptote, $y=0$.
{{< /callout >}}

**Example.** Sketch a graph of $f(x)=0.25^x$. State the domain, range, and
asymptote.

**Solution.** Before graphing, identify the behavior and create a table of
points for the graph.

- Since $b=0.25$ is between zero and one, we know the function is
  decreasing. The left tail of the graph will increase without bound, and
  the right tail will approach the asymptote $y=0$.
- Create a table of points.

  | $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
  | :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
  | $f(x)=0.25^x$ | $64$ | $16$ | $4$ | $1$ | $0.25$ | $0.0625$ | $0.015625$ |

- Plot the $y$-intercept, $(0,1)$, along with two other points. We can use
  $(-1,4)$ and $(1,0.25)$.

Draw a smooth curve connecting the points as below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = 0.25 to the x power, a decreasing curve through the labeled points (-1, 4), (0, 1), and (1, 0.25), with a dashed horizontal asymptote at y = 0.","xMin":-5,"xMax":5,"yMin":-3,"yMax":7,"tickLabels":true,"curves":[{"kind":"exp","a":1,"b":0.25,"h":0,"k":0}],"lines":[{"y":0,"dashed":true,"arrows":false}],"points":[{"at":[-1,4],"label":"(-1, 4)"},{"at":[0,1],"label":"(0, 1)"},{"at":[1,0.25],"label":"(1, 0.25)"}],"texts":[{"at":[-4.7,5.4],"text":"f(x) = 0.25ˣ","anchor":"start"}]}
{{< /apfigure >}}

The domain is $(-\infty,\infty)$; the range is $(0,\infty)$; the horizontal
asymptote is $y=0$.

{{< fillin
  question="Sketch a mental graph of $f(x)=4^x$. What is its domain? Write your answer in interval notation."
  answer="(-\infty,\infty)"
  answerDisplay="$(-\infty,\infty)$"
  hint="An exponential function's inputs are never restricted, so the domain is every real number."
>}}

{{< fillin
  question="What is the range of that same function, $f(x)=4^x$? Write your answer in interval notation."
  answer="(0,\infty)"
  answerDisplay="$(0,\infty)$"
  hint="Since $b=4>1$, the function is increasing from just above its asymptote without bound."
>}}

{{< fillin
  question="What is the horizontal asymptote of that same function, $f(x)=4^x$?"
  answer="y=0"
  answerDisplay="$y=0$"
  hint="The parent function $f(x)=b^x$ always has asymptote $y=0$."
>}}

## Graphing Transformations of Exponential Functions

Transformations of exponential graphs behave similarly to those of other
functions. Just as with other parent functions, we can apply the four types
of transformations—shifts, reflections, stretches, and compressions—to the
parent function $f(x)=b^x$ without loss of shape. For instance, just as the
quadratic function maintains its parabolic shape when shifted, reflected,
stretched, or compressed, the exponential function also maintains its
general shape regardless of the transformations applied.

### Graphing a Vertical Shift

The first transformation occurs when we add a constant $d$ to the parent
function $f(x)=b^x$, giving us a **vertical shift** $d$ units in the same
direction as the sign. For example, if we begin by graphing a parent
function, $f(x)=2^x$, we can then graph two vertical shifts alongside it,
using $d=3$: the upward shift, $g(x)=2^x+3$, and the downward shift,
$h(x)=2^x-3$. Both vertical shifts are shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Three exponential curves: g(x) = 2 to the x power + 3 (topmost, dashed asymptote y = 3), f(x) = 2 to the x power (middle, dashed asymptote y = 0), and h(x) = 2 to the x power - 3 (bottom, dashed asymptote y = -3), each the same growth shape shifted vertically.","xMin":-7,"xMax":7,"yMin":-6,"yMax":13,"tickLabels":true,"curves":[{"kind":"exp","a":1,"b":2,"h":0,"k":3},{"kind":"exp","a":1,"b":2,"h":0,"k":0},{"kind":"exp","a":1,"b":2,"h":0,"k":-3}],"lines":[{"y":3,"dashed":true,"arrows":false,"label":"y = 3"},{"y":0,"dashed":true,"arrows":false,"label":"y = 0"},{"y":-3,"dashed":true,"arrows":false,"label":"y = -3"}],"texts":[{"at":[-6.9,11],"text":"g(x) = 2ˣ + 3","anchor":"start"},{"at":[-6.9,4.4],"text":"f(x) = 2ˣ","anchor":"start"},{"at":[1.6,-4.6],"text":"h(x) = 2ˣ - 3","anchor":"start"}]}
{{< /apfigure >}}

Observe the results of shifting $f(x)=2^x$ vertically:

- The domain, $(-\infty,\infty)$, remains unchanged.
- When the function is shifted up $3$ units to $g(x)=2^x+3$:
  - The $y$-intercept shifts up $3$ units to $(0,4)$.
  - The asymptote shifts up $3$ units to $y=3$.
  - The range becomes $(3,\infty)$.
- When the function is shifted down $3$ units to $h(x)=2^x-3$:
  - The $y$-intercept shifts down $3$ units to $(0,-2)$.
  - The asymptote also shifts down $3$ units to $y=-3$.
  - The range becomes $(-3,\infty)$.

### Graphing a Horizontal Shift

The next transformation occurs when we add a constant $c$ to the input of
the parent function $f(x)=b^x$, giving us a **horizontal shift** $c$ units
in the *opposite* direction of the sign. For example, if we begin by
graphing the parent function $f(x)=2^x$, we can then graph two horizontal
shifts alongside it, using $c=3$: the shift left, $g(x)=2^{x+3}$, and the
shift right, $h(x)=2^{x-3}$. Both horizontal shifts are shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Three exponential curves sharing the horizontal asymptote y = 0: g(x) = 2 to the (x+3) power (leftmost), f(x) = 2 to the x power (middle), and h(x) = 2 to the (x-3) power (rightmost), the same growth shape shifted horizontally.","xMin":-10,"xMax":10,"yMin":-2,"yMax":11,"tickLabels":true,"xTickStep":2,"yTickStep":2,"curves":[{"kind":"exp","a":1,"b":2,"h":-3,"k":0},{"kind":"exp","a":1,"b":2,"h":0,"k":0},{"kind":"exp","a":1,"b":2,"h":3,"k":0}],"lines":[{"y":0,"dashed":true,"arrows":false}],"texts":[{"at":[-9.6,9.6],"text":"g(x) = 2ˣ⁺³","anchor":"start"},{"at":[-4.5,8.5],"text":"f(x) = 2ˣ","anchor":"start"},{"at":[7.0,9.6],"text":"h(x) = 2ˣ⁻³","anchor":"start"}]}
{{< /apfigure >}}

Observe the results of shifting $f(x)=2^x$ horizontally:

- The domain, $(-\infty,\infty)$, remains unchanged.
- The asymptote, $y=0$, remains unchanged.
- The $y$-intercept shifts such that:
  - When the function is shifted left $3$ units to $g(x)=2^{x+3}$, the
    $y$-intercept becomes $(0,8)$. This is because $2^{x+3}=(8)2^x$, so the
    initial value of the function is $8$.
  - When the function is shifted right $3$ units to $h(x)=2^{x-3}$, the
    $y$-intercept becomes $\left(0,\tfrac{1}{8}\right)$. Again, see that
    $2^{x-3}=\left(\tfrac{1}{8}\right)2^x$, so the initial value of the
    function is $\tfrac{1}{8}$.

{{< callout type="info" >}}
  **Shifts of the parent function $f(x)=b^x$.** For any constants $c$ and
  $d$, the function $f(x)=b^{x+c}+d$ shifts the parent function $f(x)=b^x$

  - vertically $d$ units, in the *same* direction of the sign of $d$.
  - horizontally $c$ units, in the *opposite* direction of the sign of $c$.
  - The $y$-intercept becomes $(0,b^c+d)$.
  - The horizontal asymptote becomes $y=d$.
  - The range becomes $(d,\infty)$.
  - The domain, $(-\infty,\infty)$, remains unchanged.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given an exponential function with the form $f(x)=b^{x+c}+d$,
  graph the translation.

  1. Draw the horizontal asymptote $y=d$.
  2. Identify the shift as $(-c,d)$. Shift the graph of $f(x)=b^x$ left $c$
     units if $c$ is positive, and right $c$ units if $c$ is negative.
  3. Shift the graph of $f(x)=b^x$ up $d$ units if $d$ is positive, and down
     $d$ units if $d$ is negative.
  4. State the domain, $(-\infty,\infty)$, the range, $(d,\infty)$, and the
     horizontal asymptote $y=d$.
{{< /callout >}}

**Example.** Graph $f(x)=2^{x+1}-3$. State the domain, range, and asymptote.

**Solution.** We have an exponential equation of the form $f(x)=b^{x+c}+d$,
with $b=2$, $c=1$, and $d=-3$.

Draw the horizontal asymptote $y=d$, so draw $y=-3$.

Identify the shift as $(-c,d)$, so the shift is $(-1,-3)$.

Shift the graph of $f(x)=b^x$ left 1 unit and down 3 units.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = 2 to the (x+1) power - 3, an increasing curve through the labeled points (-1, -2), (0, -1), and (1, 1), with a dashed horizontal asymptote at y = -3.","xMin":-6,"xMax":4,"yMin":-10,"yMax":12,"tickLabels":true,"curves":[{"kind":"exp","a":1,"b":2,"h":-1,"k":-3}],"lines":[{"y":-3,"dashed":true,"arrows":false,"label":"y = -3"}],"points":[{"at":[-1,-2],"label":"(-1, -2)"},{"at":[0,-1],"label":"(0, -1)"},{"at":[1,1],"label":"(1, 1)"}],"texts":[{"at":[-5.8,9.6],"text":"f(x) = 2ˣ⁺¹ - 3","anchor":"start"}]}
{{< /apfigure >}}

The domain is $(-\infty,\infty)$; the range is $(-3,\infty)$; the horizontal
asymptote is $y=-3$.

{{< graphplot
  question="Graph $f(x)=2^{x-1}+3$ following the same steps, by plotting the points with $x=0$, $1$, $2$, $3$, and $4$."
  answerDisplay="The points $(0,3.5)$, $(1,4)$, $(2,5)$, $(3,7)$, and $(4,11)$"
  ariaLabel="A blank coordinate grid running from −4 to 6 horizontally and from −1 to 12 vertically."
  hint="The graph of $y=2^x$ shifts right 1 unit and up 3 units, so evaluate $f$ at each listed input; for example, $f(0)=2^{-1}+3=3.5$."
  snap="0.5"
>}}
{"answer": {"points": [[0, 3.5], [1, 4], [2, 5], [3, 7], [4, 11]]}, "grid": {"xMin": -4, "xMax": 6, "yMin": -1, "yMax": 12}}
{{< /graphplot >}}

{{< fillin
  question="What is the range of that same function, $f(x)=2^{x-1}+3$? Write your answer in interval notation."
  answer="(3,\infty)"
  answerDisplay="$(3,\infty)$"
  hint="Identify $d$ from the form $b^{x+c}+d$, then the range is $(d,\infty)$."
>}}

{{< fillin
  question="What is the horizontal asymptote of that same function, $f(x)=2^{x-1}+3$?"
  answer="y=3"
  answerDisplay="$y=3$"
  hint="Draw the horizontal asymptote $y=d$; here $d=3$."
>}}

{{< callout type="info" >}}
  **How to:** given an equation of the form $f(x)=b^{x+c}+d$ for $x$, use a
  graphing calculator to approximate the solution.

  - Press **[Y=]**. Enter the given exponential equation in the line headed
    "**Y1=**".
  - Enter the given value for $f(x)$ in the line headed "**Y2=**".
  - Press **[WINDOW]**. Adjust the $y$-axis so that it includes the value
    entered for "**Y2=**".
  - Press **[GRAPH]** to observe the graph of the exponential function along
    with the line for the specified value of $f(x)$.
  - To find the value of $x$, we compute the point of intersection. Press
    **[2ND]** then **[CALC]**. Select "intersect" and press **[ENTER]**
    three times. The point of intersection gives the value of $x$ for the
    indicated value of the function.
{{< /callout >}}

**Example.** Solve $42=1.2(5)^x+2.8$ graphically. Round to the nearest
thousandth.

**Solution.** Press **[Y=]** and enter $1.2(5)^x+2.8$ next to **Y1=**. Then
enter 42 next to **Y2=**. For a window, use the values $-3$ to $3$ for $x$
and $-5$ to $55$ for $y$. Press **[GRAPH]**. The graphs should intersect
somewhere near $x=2$.

For a better approximation, press **[2ND]** then **[CALC]**. Select
**[5: intersect]** and press **[ENTER]** three times. The $x$-coordinate of
the point of intersection is displayed as 2.1661943. (Your answer may be
different if you use a different window or a different value for
**Guess?**.) To the nearest thousandth, $x\approx2.166$.

{{< fillin
  question="Solve $4=7.85(1.15)^x-2.27$ graphically. Round to the nearest thousandth."
  answer="-1.608"
  answerForm="decimal"
  answerDisplay="$x\approx-1.608$"
  hint="Isolate the exponential part first, $7.85(1.15)^x=6.27$, then find where the two graphing-calculator curves intersect."
>}}

### Graphing a Stretch or Compression

While horizontal and vertical shifts involve adding constants to the input
or to the function itself, a **stretch** or **compression** occurs when we
multiply the parent function $f(x)=b^x$ by a constant $|a|>0$. For example,
if we begin by graphing the parent function $f(x)=2^x$, we can then graph
the stretch, using $a=3$, to get $g(x)=3(2)^x$, and the compression, using
$a=\tfrac{1}{3}$, to get $h(x)=\tfrac{1}{3}(2)^x$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (a): the graph of g(x) = 3(2) to the x power (steeper) alongside f(x) = 2 to the x power, both sharing the dashed horizontal asymptote y = 0; g is a vertical stretch of f by a factor of 3.","xMin":-4,"xMax":4,"yMin":-1,"yMax":8,"tickLabels":true,"curves":[{"kind":"exp","a":3,"b":2,"h":0,"k":0},{"kind":"exp","a":1,"b":2,"h":0,"k":0}],"lines":[{"y":0,"dashed":true,"arrows":false}],"texts":[{"at":[-3.9,6.2],"text":"g(x) = 3(2)ˣ","anchor":"start"},{"at":[-3.9,4.9],"text":"f(x) = 2ˣ","anchor":"start"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (b): the graph of h(x) = (1/3)(2) to the x power (flatter) alongside f(x) = 2 to the x power, both sharing the dashed horizontal asymptote y = 0; h is a vertical compression of f by a factor of 1/3.","xMin":-4,"xMax":4,"yMin":-1,"yMax":8,"tickLabels":true,"curves":[{"kind":"exp","a":1,"b":2,"h":0,"k":0},{"kind":"exp","a":0.3333333333333333,"b":2,"h":0,"k":0}],"lines":[{"y":0,"dashed":true,"arrows":false}],"texts":[{"at":[-3.9,6.7],"text":"f(x) = 2ˣ","anchor":"start"},{"at":[-3.9,5.3],"text":"h(x) = (⅓)(2)ˣ","anchor":"start"}]}
{{< /apfigure >}}

*(a) $g(x)=3(2)^x$ stretches the graph of $f(x)=2^x$ vertically by a factor
of $3$. (b) $h(x)=\tfrac{1}{3}(2)^x$ compresses the graph of $f(x)=2^x$
vertically by a factor of $\tfrac{1}{3}$.*

{{< callout type="info" >}}
  **Stretches and compressions of the parent function $f(x)=b^x$.** For any
  factor $a>0$, the function $f(x)=a(b)^x$

  - is stretched vertically by a factor of $a$ if $|a|>1$.
  - is compressed vertically by a factor of $a$ if $|a|<1$.
  - has a $y$-intercept of $(0,a)$.
  - has a horizontal asymptote at $y=0$, a range of $(0,\infty)$, and a
    domain of $(-\infty,\infty)$, which are unchanged from the parent
    function.
{{< /callout >}}

**Example.** Sketch a graph of $f(x)=4\left(\tfrac{1}{2}\right)^x$. State
the domain, range, and asymptote.

**Solution.** Before graphing, identify the behavior and key points on the
graph.

- Since $b=\tfrac{1}{2}$ is between zero and one, the left tail of the graph
  will increase without bound as $x$ decreases, and the right tail will
  approach the $x$-axis as $x$ increases.
- Since $a=4$, the graph of $f(x)=\left(\tfrac{1}{2}\right)^x$ will be
  stretched by a factor of $4$.
- Create a table of points.

  | $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
  | :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
  | $f(x)=4\left(\tfrac{1}{2}\right)^x$ | $32$ | $16$ | $8$ | $4$ | $2$ | $1$ | $0.5$ |

- Plot the $y$-intercept, $(0,4)$, along with two other points. We can use
  $(-1,8)$ and $(1,2)$.

Draw a smooth curve connecting the points, as below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = 4(1/2) to the x power, a decreasing curve through the labeled points (-1, 8), (0, 4), and (1, 2), with a dashed horizontal asymptote at y = 0.","xMin":-6,"xMax":6,"yMin":-2,"yMax":11,"tickLabels":true,"curves":[{"kind":"exp","a":4,"b":0.5,"h":0,"k":0}],"lines":[{"y":0,"dashed":true,"arrows":false}],"points":[{"at":[-1,8],"label":"(-1, 8)"},{"at":[0,4],"label":"(0, 4)"},{"at":[1,2],"label":"(1, 2)"}],"texts":[{"at":[1.4,9.6],"text":"f(x) = 4(½)ˣ","anchor":"start"}]}
{{< /apfigure >}}

The domain is $(-\infty,\infty)$; the range is $(0,\infty)$; the horizontal
asymptote is $y=0$.

{{< fillin
  question="Sketch a mental graph of $f(x)=\tfrac{1}{2}(4)^x$. Is this graph a vertical stretch or a vertical compression of $f(x)=4^x$?"
  answer="compression"
  hint="Compare the stretch factor $a=\tfrac{1}{2}$ against $1$."
>}}

{{< multiplechoice
  question="What is the horizontal asymptote of that same function, $f(x)=\tfrac{1}{2}(4)^x$?"
  answer="y=0"
  hint="Vertical stretches and compressions never move the asymptote of the parent function $f(x)=b^x$."
>}}
y=0
y=1/2
y=2
y=4
{{< /multiplechoice >}}

### Graphing Reflections

In addition to shifting, compressing, and stretching a graph, we can also
reflect it about the $x$-axis or the $y$-axis. When we multiply the parent
function $f(x)=b^x$ by $-1$, we get a reflection about the $x$-axis. When we
multiply the input by $-1$, we get a **reflection** about the $y$-axis. For
example, if we begin by graphing the parent function $f(x)=2^x$, we can then
graph the two reflections alongside it: the reflection about the $x$-axis,
$g(x)=-2^x$, and the reflection about the $y$-axis, $h(x)=2^{-x}$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (a): the graph of f(x) = 2 to the x power increasing above the x-axis, alongside its reflection g(x) = -2 to the x power decreasing below the x-axis, both sharing the dashed horizontal asymptote y = 0.","xMin":-5,"xMax":5,"yMin":-10,"yMax":10,"tickLabels":true,"curves":[{"kind":"exp","a":1,"b":2,"h":0,"k":0},{"kind":"exp","a":-1,"b":2,"h":0,"k":0}],"lines":[{"y":0,"dashed":true,"arrows":false}],"texts":[{"at":[-4.9,7.9],"text":"f(x) = 2ˣ","anchor":"start"},{"at":[-4.9,-8.9],"text":"g(x) = -2ˣ","anchor":"start"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (b): the graph of f(x) = 2 to the x power increasing to the right, alongside its reflection h(x) = 2 to the -x power decreasing to the right, both sharing the dashed horizontal asymptote y = 0.","xMin":-5,"xMax":5,"yMin":-1,"yMax":10,"tickLabels":true,"curves":[{"kind":"exp","a":1,"b":2,"h":0,"k":0},{"kind":"exp","a":1,"b":0.5,"h":0,"k":0}],"lines":[{"y":0,"dashed":true,"arrows":false}],"texts":[{"at":[-4.9,5.5],"text":"f(x) = 2ˣ","anchor":"start"},{"at":[2.15,4.0],"text":"h(x) = 2⁻ˣ","anchor":"start"}]}
{{< /apfigure >}}

*(a) $g(x)=-2^x$ reflects the graph of $f(x)=2^x$ about the $x$-axis. (b)
$h(x)=2^{-x}$ reflects the graph of $f(x)=2^x$ about the $y$-axis.*

{{< callout type="info" >}}
  **Reflections of the parent function $f(x)=b^x$.** The function
  $f(x)=-b^x$

  - reflects the parent function $f(x)=b^x$ about the $x$-axis.
  - has a $y$-intercept of $(0,-1)$.
  - has a range of $(-\infty,0)$.
  - has a horizontal asymptote at $y=0$ and domain of $(-\infty,\infty)$,
    which are unchanged from the parent function.

  The function $f(x)=b^{-x}$

  - reflects the parent function $f(x)=b^x$ about the $y$-axis.
  - has a $y$-intercept of $(0,1)$, a horizontal asymptote at $y=0$, a
    range of $(0,\infty)$, and a domain of $(-\infty,\infty)$, which are
    unchanged from the parent function.
{{< /callout >}}

**Example.** Find and graph the equation for a function, $g(x)$, that
reflects $f(x)=\left(\tfrac{1}{4}\right)^x$ about the $x$-axis. State its
domain, range, and asymptote.

**Solution.** Since we want to reflect the parent function
$f(x)=\left(\tfrac{1}{4}\right)^x$ about the $x$-axis, we multiply $f(x)$ by
$-1$ to get $g(x)=-\left(\tfrac{1}{4}\right)^x$. Next we create a table of
points.

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $g(x)=-\left(\tfrac{1}{4}\right)^x$ | $-64$ | $-16$ | $-4$ | $-1$ | $-0.25$ | $-0.0625$ | $-0.0156$ |

Plot the $y$-intercept, $(0,-1)$, along with two other points. We can use
$(-1,-4)$ and $(1,-0.25)$.

Draw a smooth curve connecting the points:

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of g(x) = -(1/4) to the x power, a curve through the labeled points (-1, -4), (0, -1), and (1, -0.25), approaching a dashed horizontal asymptote at y = 0 from below as x increases.","xMin":-5,"xMax":5,"yMin":-10,"yMax":3,"tickLabels":true,"curves":[{"kind":"exp","a":-1,"b":0.25,"h":0,"k":0}],"lines":[{"y":0,"dashed":true,"arrows":false}],"points":[{"at":[-1,-4],"label":"(-1, -4)"},{"at":[0,-1],"label":"(0, -1)"},{"at":[1,-0.25],"label":"(1, -0.25)"}],"texts":[{"at":[-4.9,2.2],"text":"g(x) = -(¼)ˣ","anchor":"start"}]}
{{< /apfigure >}}

The domain is $(-\infty,\infty)$; the range is $(-\infty,0)$; the horizontal
asymptote is $y=0$.

{{< fillin
  question="Find the equation for a function, $g(x)$, that reflects $f(x)=1.25^x$ about the $y$-axis."
  answer="1.25^{-x}"
  answerDisplay="$g(x)=1.25^{-x}$"
  hint="A reflection about the $y$-axis replaces $x$ with $-x$."
>}}

{{< fillin
  question="What is the range of that reflected function, $g(x)=1.25^{-x}$? Write your answer in interval notation."
  answer="(0,\infty)"
  answerDisplay="$(0,\infty)$"
  hint="A reflection about the $y$-axis does not change the range of the parent function."
>}}

### Summarizing Translations of the Exponential Function

Now that we have worked with each type of translation for the exponential
function, we can summarize them below to arrive at the general equation for
translating exponential functions.

| Transformation | Form |
| :--- | :--- |
| Shift horizontally $c$ units to the left and vertically $d$ units up | $f(x)=b^{x+c}+d$ |
| Stretch if $\lvert a\rvert>1$; compress if $0<\lvert a\rvert<1$ | $f(x)=ab^x$ |
| Reflect about the $x$-axis | $f(x)=-b^x$ |
| Reflect about the $y$-axis | $f(x)=b^{-x}=\left(\tfrac{1}{b}\right)^x$ |
| General equation for all transformations | $f(x)=ab^{x+c}+d$ |

{{< callout type="info" >}}
  **Translations of exponential functions.** A translation of an
  exponential function has the form

  $$f(x)=ab^{x+c}+d$$

  Where the parent function, $y=b^x$, $b>1$, is

  - shifted horizontally $c$ units to the left.
  - stretched vertically by a factor of $|a|$ if $|a|>0$.
  - compressed vertically by a factor of $|a|$ if $0<|a|<1$.
  - shifted vertically $d$ units.
  - reflected about the $x$-axis when $a<0$.

  Note the order of the shifts, transformations, and reflections follows
  the order of operations.
{{< /callout >}}

**Example.** Write the equation for the function described below. Give the
horizontal asymptote, the domain, and the range.

$f(x)=e^x$ is vertically stretched by a factor of $2$, reflected across the
$y$-axis, and then shifted up $4$ units.

**Solution.** We want to find an equation of the general form
$f(x)=ab^{x+c}+d$. We use the description provided to find $a$, $b$, $c$,
and $d$.

- We are given the parent function $f(x)=e^x$, so $b=e$.
- The function is stretched by a factor of $2$, so $a=2$.
- The function is reflected about the $y$-axis. We replace $x$ with $-x$ to
  get $e^{-x}$.
- The graph is shifted vertically 4 units, so $d=4$.

Substituting in the general form we get,

$$
\begin{array}{lrcl}
& f(x) &=& ab^{x+c}+d \\[4pt]
& &=& 2e^{-x+0}+4 \\[4pt]
& &=& 2e^{-x}+4
\end{array}
$$

The domain is $(-\infty,\infty)$; the range is $(4,\infty)$; the horizontal
asymptote is $y=4$.

{{< fillin
  question="Write the equation for the function described below. $f(x)=e^x$ is compressed vertically by a factor of $\tfrac{1}{3}$, reflected across the $x$-axis, and then shifted down $2$ units."
  answer="-\frac{1}{3}e^{x}-2"
  answerDisplay="$f(x)=-\tfrac{1}{3}e^x-2$"
  hint="Reflecting across the $x$-axis multiplies the whole function by $-1$; apply that after the compression, then shift."
>}}

{{< fillin
  question="What is the horizontal asymptote of that function, $f(x)=-\tfrac{1}{3}e^x-2$?"
  answer="y=-2"
  answerDisplay="$y=-2$"
  hint="The vertical shift $d$ becomes the new asymptote, $y=d$."
>}}

{{< fillin
  question="What is the range of that same function, $f(x)=-\tfrac{1}{3}e^x-2$? Write your answer in interval notation."
  answer="(-\infty,-2)"
  answerDisplay="$(-\infty,-2)$"
  hint="A reflection about the $x$-axis flips the range to below the asymptote."
>}}

## Key equations

| General form for the translation of the parent function $f(x)=b^x$ | $f(x)=ab^{x+c}+d$ |
| :--- | :--- |

## Key concepts

- The graph of the function $f(x)=b^x$ has a $y$-intercept at $(0,1)$,
  domain $(-\infty,\infty)$, range $(0,\infty)$, and horizontal asymptote
  $y=0$.
- If $b>1$, the function is increasing. The left tail of the graph will
  approach the asymptote $y=0$, and the right tail will increase without
  bound.
- If $0<b<1$, the function is decreasing. The left tail of the graph will
  increase without bound, and the right tail will approach the asymptote
  $y=0$.
- The equation $f(x)=b^x+d$ represents a vertical shift of the parent
  function $f(x)=b^x$.
- The equation $f(x)=b^{x+c}$ represents a horizontal shift of the parent
  function $f(x)=b^x$.
- Approximate solutions of the equation $f(x)=b^{x+c}+d$ can be found using
  a graphing calculator.
- The equation $f(x)=ab^x$, where $a>0$, represents a vertical stretch if
  $|a|>1$ or compression if $0<|a|<1$ of the parent function $f(x)=b^x$.
- When the parent function $f(x)=b^x$ is multiplied by $-1$, the result,
  $f(x)=-b^x$, is a reflection about the $x$-axis. When the input is
  multiplied by $-1$, the result, $f(x)=b^{-x}$, is a reflection about the
  $y$-axis.
- All translations of the exponential function can be summarized by the
  general equation $f(x)=ab^{x+c}+d$.
- Using the general equation $f(x)=ab^{x+c}+d$, we can write the equation
  of a function given its description.

## Practice

### Graph exponential functions

{{< multiplechoice
  question="What role does the horizontal asymptote of an exponential function play in describing the end behavior of its graph?"
  answer="It is the value the function's outputs approach as x increases or decreases without bound"
  hint="An asymptote is a line the graph approaches, never crosses, as the input grows extremely large or extremely small."
>}}
It is the value the function's outputs approach as x increases or decreases without bound
It is the value where the graph crosses the x-axis
It is the largest value the function can output
It marks the input where the function is undefined
{{< /multiplechoice >}}

{{< fillin
  question="Evaluate $g(x)=\tfrac{1}{3}(7)^{x-2}$ for $g(6)$."
  answer="\frac{2401}{3}"
  answerDisplay="$\tfrac{2{,}401}{3}\approx800.3333$"
  hint="Substitute $x=6$ so the exponent is $6-2=4$, then evaluate $7^4$."
>}}

{{< fillin
  question="Evaluate $h(x)=-\tfrac{1}{2}\left(\tfrac{1}{2}\right)^x+6$ for $h(-7)$."
  answer="-58"
  hint="A negative exponent on $\tfrac{1}{2}$ flips it to a positive power of $2$: $\left(\tfrac{1}{2}\right)^{-7}=2^7$."
>}}

### Graph exponential functions using transformations

{{< fillin
  question="The graph of $f(x)=3^x$ is reflected about the $y$-axis and stretched vertically by a factor of $4$. What is the equation of the new function, $g(x)$?"
  answer="4(3)^{-x}"
  answerDisplay="$g(x)=4(3)^{-x}$"
  hint="Reflecting about the $y$-axis replaces $x$ with $-x$; stretching vertically multiplies the whole function by $4$."
>}}

{{< fillin
  question="What is the $y$-intercept of that new function, $g(x)=4(3)^{-x}$? Enter your answer as an ordered pair."
  answer="(0,4)"
  answerDisplay="$(0,4)$"
  hint="Evaluate $g(0)$."
>}}

{{< fillin
  question="The graph of $f(x)=10^x$ is reflected about the $x$-axis and shifted upward $7$ units. What is the equation of the new function, $g(x)$?"
  answer="-10^{x}+7"
  answerDisplay="$g(x)=-10^x+7$"
  hint="Reflecting about the $x$-axis multiplies the whole function by $-1$; then add the vertical shift."
>}}

{{< fillin
  question="What is the $y$-intercept of $g(x)=-2(0.25)^x$? Enter your answer as an ordered pair."
  answer="(0,-2)"
  answerDisplay="$(0,-2)$"
  hint="Evaluate $g(0)$; $0.25^0=1$."
>}}

{{< fillin
  question="What is the horizontal asymptote of $h(x)=2^x+3$?"
  answer="y=3"
  answerDisplay="$y=3$"
  hint="The asymptote shifts with the vertical shift, $d=3$."
>}}

{{< fillin
  question="What is the domain of that same function, $h(x)=2^x+3$? Write your answer in interval notation."
  answer="(-\infty,\infty)"
  answerDisplay="$(-\infty,\infty)$"
  hint="A vertical shift moves the graph up or down; it never restricts which inputs are allowed."
>}}

{{< fillin
  question="What is the range of that same function, $h(x)=2^x+3$? Write your answer in interval notation."
  answer="(3,\infty)"
  answerDisplay="$(3,\infty)$"
  hint="The range sits entirely above the asymptote you just found."
>}}

{{< multiplechoice
  question="Describe the end behavior of $f(x)=-5(4)^x-1$ as $x$ increases without bound."
  answer="f(x) decreases without bound"
  hint="A negative leading factor times a growing power of $4$ grows more and more negative."
>}}
f(x) decreases without bound
f(x) increases without bound
f(x) approaches -1
f(x) approaches 0
{{< /multiplechoice >}}

{{< multiplechoice
  question="Describe the end behavior of that same function, $f(x)=-5(4)^x-1$, as $x$ decreases without bound."
  answer="f(x) approaches -1"
  hint="As $x\to-\infty$, $4^x\to0$, so the function approaches its horizontal asymptote."
>}}
f(x) approaches -1
f(x) decreases without bound
f(x) increases without bound
f(x) approaches 0
{{< /multiplechoice >}}

{{< fillin
  question="Start with the graph of $f(x)=4^x$. Write the function that results from shifting $f(x)$ 3 units downward."
  answer="4^{x}-3"
  answerDisplay="$f(x)=4^x-3$"
  hint="A downward shift subtracts a constant from the whole function."
>}}

{{< fillin
  question="Start again with the graph of $f(x)=4^x$. Write the function that results from reflecting $f(x)$ about the $y$-axis."
  answer="4^{-x}"
  answerDisplay="$f(x)=4^{-x}$"
  hint="A reflection about the $y$-axis replaces $x$ with $-x$."
>}}

Each graph below is a transformation of $y=2^x$. Write an equation
describing the transformation.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A curve that levels off just below y = 3 as x decreases, crosses the y-axis at 2, and decreases without bound as x increases, crossing the x-axis between 1 and 2.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"tickLabels":true,"curves":[{"kind":"exp","a":-1,"b":2,"h":0,"k":3}]}
{{< /apfigure >}}

{{< fillin
  question="Write the equation for the graph above."
  answer="-2^{x}+3"
  answerDisplay="$y=-2^x+3$"
  hint="Read the asymptote first to find the vertical shift, then check whether the curve is reflected or upright from the $y$-intercept."
>}}

{{< fillin
  question="Use a graphing calculator to approximate the solution of $116=\tfrac{1}{4}\left(\tfrac{1}{8}\right)^x$. Round to the nearest thousandth."
  answer="-2.953"
  answerForm="decimal"
  answerDisplay="$x\approx-2.953$"
  hint="Isolate the exponential part first, $\left(\tfrac{1}{8}\right)^x=464$, then find where the two graphing-calculator curves intersect."
>}}

{{< fillin
  question="Use a graphing calculator to approximate the solution of $5=3\left(\tfrac{1}{2}\right)^{x-1}-2$. Round to the nearest thousandth."
  answer="-0.222"
  answerForm="decimal"
  answerDisplay="$x\approx-0.222$"
  hint="Isolate the exponential part first, $\left(\tfrac{1}{2}\right)^{x-1}=\tfrac{7}{3}$, then find where the two graphing-calculator curves intersect."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 4.2: Graphs of
Exponential Functions](https://openstax.org/books/precalculus-2e/pages/4-2-graphs-of-exponential-functions)
by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA
4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the
original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e).
Changes: recreated every graph as an accessible inline SVG generated from
its exact equation — the parent growth curve $f(x)=2^x$ and its seven
tabulated points; the parent decay curve $g(x)=\left(\tfrac{1}{2}\right)^x$
and its seven tabulated points; the generic growth/decay comparison panels
$f(x)=b^x$ for $b>1$ and $0<b<1$; the decaying parent $f(x)=0.25^x$ of
Example 1; the vertical-shift panel $g(x)=2^x+3$, $f(x)=2^x$, $h(x)=2^x-3$;
the horizontal-shift panel $g(x)=2^{x+3}$, $f(x)=2^x$, $h(x)=2^{x-3}$; the
shifted curve $f(x)=2^{x+1}-3$ of Example 2; the stretch/compression panels
$g(x)=3(2)^x$ and $h(x)=\tfrac{1}{3}(2)^x$ against $f(x)=2^x$; the stretched
curve $f(x)=4\left(\tfrac{1}{2}\right)^x$ of Example 4; the
reflection-about-$x$-axis and reflection-about-$y$-axis panels $g(x)=-2^x$
and $h(x)=2^{-x}$ against $f(x)=2^x$; the reflected curve
$g(x)=-\left(\tfrac{1}{4}\right)^x$ of Example 5; and the unlabeled Practice
graph of $y=-2^x+3$. Omitted the section's Media link to an external
graphing-calculator resource, which carries no additional mathematics.
Converted every "Try It" into interactive components with instant feedback;
the shifted-curve Try It $f(x)=2^{x-1}+3$ is graded as a plot-the-points
graph exercise at the five named inputs $x=0$ through $4$ (its outputs land
on a half-unit grid), while the other Try Its that ask to "sketch" or
"graph" an exponential — whose graphs offer fewer than five grid-reachable
points — instead ask for the domain, range, asymptote, or a derived
equation that the source's own solution states in words, with the curve
itself not graded. After the first full domain/range/asymptote drill
(Try It 1), later Try Its omit repeating the domain, which is $(-\infty,
\infty)$ for every function in this section and so carries no new
information once established; each still preserves every quantity whose
value actually changes with the transformation shown. Adapted thirteen
selected end-of-section exercises — the
horizontal-asymptote conceptual question, two numeric evaluations, two
algebraic reflect-and-stretch/reflect-and-shift compositions with their
$y$-intercepts, a vertical-shift asymptote-and-range pair, an end-behavior
description split into its two one-sided parts, two single-transformation
equation-writing prompts, one graph-reading equation-writing prompt, and two
graphing-calculator approximations — into sixteen interactive components in
a closing Practice block, one group per objective.</small>
