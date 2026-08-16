---
title: Rates of Change and Behavior of Graphs
description: >-
  Average rate of change from tables, graphs, and formulas; increasing and
  decreasing intervals; local and absolute maxima and minima; and the
  behavior of the toolkit functions — adapted from OpenStax Precalculus 2e,
  Section 1.3.
source_section: "1.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find the average rate of change of a function
- Use a graph to determine where a function is increasing, decreasing, or constant
- Use a graph to locate local maxima and local minima
- Use a graph to locate the absolute maximum and absolute minimum
{{< /callout >}}

Gasoline costs have experienced some wild fluctuations over the last several
decades. The table below lists the average cost, in dollars, of a gallon of
gasoline for the years 2005–2012. The cost of gasoline can be considered as a
function of year.

| $y$ | 2005 | 2006 | 2007 | 2008 | 2009 | 2010 | 2011 | 2012 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $C(y)$ | 2.31 | 2.62 | 2.84 | 3.30 | 2.41 | 2.84 | 3.58 | 3.68 |

If we were interested only in how the gasoline prices changed between 2005
and 2012, we could compute that the cost per gallon had increased from \$2.31
to \$3.68, an increase of \$1.37. While this is interesting, it might be more
useful to look at how much the price changed *per year*. In this section, we
will investigate changes such as these.

## Finding the average rate of change of a function

The price change per year is a **rate of change** because it describes how an
output quantity changes relative to the change in the input quantity. We can
see that the price of gasoline in the table did not change by the same amount
each year, so the rate of change was not constant. If we use only the
beginning and ending data, we would be finding the **average rate of change**
over the specified period of time. To find the average rate of change, we
divide the change in the output value by the change in the input value.

$$
\begin{array}{lrcl}
& \text{Average rate of change} &=& \tfrac{\text{Change in output}}{\text{Change in input}} \\[4pt]
& &=& \tfrac{\Delta y}{\Delta x} \\[4pt]
& &=& \tfrac{y_2-y_1}{x_2-x_1} \\[4pt]
& &=& \tfrac{f(x_2)-f(x_1)}{x_2-x_1}
\end{array}
$$

The Greek letter $\Delta$ (delta) signifies the change in a quantity; we read
the ratio as "delta-$y$ over delta-$x$" or "the change in $y$ divided by the
change in $x$." Occasionally we write $\Delta f$ instead of $\Delta y$, which
still represents the change in the function's output value resulting from a
change to its input value. It does not mean we are changing the function into
some other function.

In our example, the gasoline price increased by \$1.37 from 2005 to 2012.
Over 7 years, the average rate of change was

$$\frac{\Delta y}{\Delta x}=\frac{1.37}{7\ \text{years}}\approx 0.196\ \text{dollars per year}$$

On average, the price of gas increased by about 19.6¢ each year.

Other examples of rates of change include:

- A population of rats increasing by 40 rats per week
- A car traveling 68 miles per hour (distance traveled changes by 68 miles
  each hour as time passes)
- A car driving 27 miles per gallon (distance traveled changes by 27 miles
  for each gallon)
- The current through an electrical circuit increasing by 0.125 amperes for
  every volt of increased voltage
- The amount of money in a college account decreasing by \$4,000 per quarter

{{< callout type="info" >}}
  **Rate of change.** A rate of change describes how an output quantity
  changes relative to the change in the input quantity. The units on a rate
  of change are "output units per input units."

  The average rate of change between two input values is the total change of
  the function values (output values) divided by the change in the input
  values.

  $$\frac{\Delta y}{\Delta x}=\frac{f(x_2)-f(x_1)}{x_2-x_1}$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the value of a function at different points, calculate
  the average rate of change of a function for the interval between two
  values $x_1$ and $x_2$.

  1. Calculate the difference $y_2-y_1=\Delta y$.
  2. Calculate the difference $x_2-x_1=\Delta x$.
  3. Find the ratio $\tfrac{\Delta y}{\Delta x}$.
{{< /callout >}}

**Example.** Using the gasoline data above, find the average rate of change
of the price of gasoline between 2007 and 2009.

**Solution.** In 2007, the price of gasoline was \$2.84. In 2009, the cost
was \$2.41. The average rate of change is

$$
\begin{array}{lrcl}
& \tfrac{\Delta y}{\Delta x} &=& \tfrac{y_2-y_1}{x_2-x_1} \\[4pt]
& &=& \tfrac{2.41-2.84}{2009-2007} \\[4pt]
& &=& \tfrac{-0.43}{2\ \text{years}} \\[4pt]
& &=& -0.22\ \text{per year}
\end{array}
$$

Note that a decrease is expressed by a negative change or "negative
increase." A rate of change is negative when the output decreases as the
input increases or when the output increases as the input decreases.

{{< fillin
  question="Using the gasoline data above, find the average rate of change between 2005 and 2010, in dollars per year."
  answer="0.106"
  answerDisplay="$\tfrac{2.84-2.31}{5\ \text{years}}=\tfrac{0.53}{5\ \text{years}}=0.106$ dollars per year"
  hint="Divide the change in cost by the 5-year change in time."
>}}

**Example.** Given the function $g(t)$ graphed below, find the average rate
of change on the interval $[-1,2]$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of g of t, an upward-opening parabola with its vertex near (1.5, 0.9). It passes through (−1, 4) and (2, 1).","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":20,"tickLabels":true,"xLabel":"t","yLabel":"g(t)","quadratics":[{"a":0.5,"b":-1.5,"c":2}]}
{{< /apfigure >}}

**Solution.** At $t=-1$, the graph shows $g(-1)=4$. At $t=2$, the graph shows
$g(2)=1$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same parabola with the points (−1, 4) and (2, 1) marked and joined by a straight line. A horizontal dashed segment from (−1, 1) to (2, 1) is labelled delta t = 3, and a vertical dashed segment from (−1, 1) to (−1, 4) is labelled delta g(t) = −3.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":20,"tickLabels":true,"xLabel":"t","yLabel":"g(t)","quadratics":[{"a":0.5,"b":-1.5,"c":2}],"segments":[{"from":[-1,4],"to":[2,1]},{"from":[-1,1],"to":[2,1],"dashed":true},{"from":[-1,1],"to":[-1,4],"dashed":true}],"points":[{"at":[-1,4]},{"at":[2,1]}],"texts":[{"at":[-1,4],"text":"(−1, 4)","anchor":"end","dx":-8,"dy":-4},{"at":[2,1],"text":"(2, 1)","dx":9,"dy":4},{"at":[1.15,1],"text":"Δt = 3","anchor":"middle","dy":13},{"at":[-1.15,2.5],"text":"Δg(t) = −3","anchor":"end"}]}
{{< /apfigure >}}

The horizontal change $\Delta t=3$ and the vertical change
$\Delta g(t)=-3$ are shown by the dashed segments. The output changes by $-3$
while the input changes by 3, giving an average rate of change of

$$\frac{1-4}{2-(-1)}=\frac{-3}{3}=-1$$

Note that the order we choose is very important. If, for example, we use
$\tfrac{y_2-y_1}{x_1-x_2}$, we will not get the correct answer. Decide which
point will be 1 and which point will be 2, and keep the coordinates fixed as
$(x_1,y_1)$ and $(x_2,y_2)$.

**Example.** After picking up a friend who lives 10 miles away, Anna records
her distance from home over time. The values are shown below. Find her
average speed over the first 6 hours.

| $t$ (hours) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $D(t)$ (miles) | 10 | 55 | 90 | 153 | 214 | 240 | 292 | 300 |

**Solution.** Here, the average speed is the average rate of change. She
traveled 282 miles in 6 hours, for an average speed of

$$
\begin{array}{lrcl}
& \tfrac{292-10}{6-0} &=& \tfrac{282}{6} \\[4pt]
& &=& 47
\end{array}
$$

The average speed is 47 miles per hour.

Because the speed is not constant, the average speed depends on the interval
chosen. For the interval $[2,3]$, the average speed is 63 miles per hour.

**Example.** Compute the average rate of change of $f(x)=x^2-\tfrac{1}{x}$ on
the interval $[2,4]$.

**Solution.** We can start by computing the function values at each
**endpoint** of the interval.

$$
\begin{array}{lrcl}
& f(2) &=& 2^2-\tfrac{1}{2} \\[4pt]
& &=& 4-\tfrac{1}{2} \\[4pt]
& &=& \tfrac{7}{2}
\end{array}
\qquad
\begin{array}{lrcl}
& f(4) &=& 4^2-\tfrac{1}{4} \\[4pt]
& &=& 16-\tfrac{1}{4} \\[4pt]
& &=& \tfrac{63}{4}
\end{array}
$$

Now we compute the average rate of change.

$$
\begin{array}{lrcl}
\text{Average rate of change} & &=& \tfrac{f(4)-f(2)}{4-2} \\[4pt]
& &=& \tfrac{\tfrac{63}{4}-\tfrac{7}{2}}{4-2} \\[4pt]
& &=& \tfrac{\tfrac{49}{4}}{2} \\[4pt]
& &=& \tfrac{49}{8}
\end{array}
$$

{{< fillin
  question="Find the average rate of change of $f(x)=x-2\sqrt{x}$ on the interval $[1,9]$."
  answer="\frac{1}{2}"
  answerDisplay="$\tfrac{1}{2}$"
  hint="Evaluate $f$ at both endpoints first; $\sqrt{9}=3$."
>}}

**Example.** The **electrostatic force** $F$, measured in newtons, between
two charged particles can be related to the distance between the particles
$d$, in centimeters, by the formula $F(d)=\tfrac{2}{d^2}$. Find the average
rate of change of force if the distance between the particles is increased
from 2 cm to 6 cm.

**Solution.** We are computing the average rate of change of
$F(d)=\tfrac{2}{d^2}$ on the interval $[2,6]$.

$$
\begin{array}{lrcl}
\text{Average rate of change} & &=& \tfrac{F(6)-F(2)}{6-2} \\[4pt]
\text{Simplify.} & &=& \tfrac{\tfrac{2}{6^2}-\tfrac{2}{2^2}}{6-2} \\[4pt]
& &=& \tfrac{\tfrac{2}{36}-\tfrac{2}{4}}{4} \\[4pt]
\text{Combine numerator terms.} & &=& \tfrac{-\tfrac{16}{36}}{4} \\[4pt]
\text{Simplify.} & &=& -\tfrac{1}{9}
\end{array}
$$

The average rate of change is $-\tfrac{1}{9}$ newton per centimeter.

**Example.** Find the average rate of change of $g(t)=t^2+3t+1$ on the
interval $[0,a]$. The answer will be an expression involving $a$.

**Solution.** We use the average rate of change formula.

$$
\begin{array}{lrcl}
\text{Evaluate.} & \text{Average rate of change} &=& \tfrac{g(a)-g(0)}{a-0} \\[4pt]
\text{Simplify.} & &=& \tfrac{(a^2+3a+1)-(0^2+3(0)+1)}{a-0} \\[4pt]
\text{Simplify and factor.} & &=& \tfrac{a^2+3a+1-1}{a} \\[4pt]
\text{Divide by the common factor }a. & &=& \tfrac{a(a+3)}{a} \\[4pt]
& &=& a+3
\end{array}
$$

This result tells us the average rate of change in terms of $a$ between $t=0$
and any other point $t=a$. For example, on the interval $[0,5]$, the average
rate of change would be $5+3=8$.

{{< fillin
  question="Find the average rate of change of $f(x)=x^2+2x-8$ on the interval $[5,a]$."
  answer="a+7"
  answerDisplay="$a+7$"
  hint="Form $\tfrac{f(a)-f(5)}{a-5}$, then factor the numerator so the common factor $a-5$ divides out."
>}}

## Using a graph to determine where a function is increasing, decreasing, or constant

As part of exploring how functions change, we can identify intervals over
which the function is changing in specific ways. We say that a function is
increasing on an interval if the function values increase as the input values
increase within that interval. Similarly, a function is decreasing on an
interval if the function values decrease as the input values increase over
that interval. The average rate of change of an increasing function is
positive, and the average rate of change of a decreasing function is
negative. The graph below shows examples of increasing and decreasing
intervals on a function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals x cubed minus 12x. It rises steeply from the lower left, reaches a high point at (−2, 16), falls through the origin to a low point at (2, −16), then rises steeply to the upper right. The two rising stretches are labelled Increasing and the falling stretch is labelled Decreasing.","xMin":-5,"xMax":5,"yMin":-20,"yMax":20,"xUnit":26,"yUnit":7,"xGridStep":1,"yGridStep":4,"tickLabels":true,"xTickStep":1,"yTickStep":4,"cubics":[{"a":1,"b":0,"c":-12,"d":0}],"texts":[{"at":[-3.2,18],"text":"Increasing","anchor":"middle"},{"at":[1.9,9],"text":"Decreasing","anchor":"middle"},{"at":[3,-18],"text":"Increasing","anchor":"middle"}]}
{{< /apfigure >}}

The function $f(x)=x^3-12x$ is increasing on $(-\infty,-2)\cup(2,\infty)$ and
is decreasing on $(-2,2)$.

While some functions are increasing (or decreasing) over their entire domain,
many others are not. A value of the input where a function changes from
increasing to decreasing (as we go from left to right, that is, as the input
variable increases) is the location of a **local maximum**. The function
value at that point is the local maximum. If a function has more than one, we
say it has local maxima. Similarly, a value of the input where a function
changes from decreasing to increasing as the input variable increases is the
location of a **local minimum**. The function value at that point is the
local minimum. The plural form is "local minima." Together, local maxima and
minima are called **local extrema**, or local extreme values, of the
function. (The singular form is "extremum.") Often, the term *local* is
replaced by the term *relative*. In this text, we will use the term *local*.

Clearly, a function is neither increasing nor decreasing on an interval where
it is constant. A function is also neither increasing nor decreasing at
extrema. Note that we have to speak of *local* extrema, because any given
local extremum as defined here is not necessarily the highest maximum or
lowest minimum in the function's entire domain.

For the function whose graph is shown below, the local maximum is 16, and it
occurs at $x=-2$. The local minimum is $-16$ and it occurs at $x=2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals x cubed minus 12x with its local extrema marked: a solid point at (−2, 16), the local maximum, and a solid point at (2, −16), the local minimum.","xMin":-5,"xMax":5,"yMin":-20,"yMax":20,"xUnit":26,"yUnit":7,"xGridStep":1,"yGridStep":4,"tickLabels":true,"xTickStep":1,"yTickStep":4,"cubics":[{"a":1,"b":0,"c":-12,"d":0}],"points":[{"at":[-2,16],"label":"(−2, 16)","labelSide":"nw"},{"at":[2,-16],"label":"(2, −16)","labelSide":"se"}]}
{{< /apfigure >}}

To locate the local maxima and minima from a graph, we need to observe the
graph to determine where the graph attains its highest and lowest points,
respectively, within an open interval. Like the summit of a roller coaster,
the graph of a function is higher at a local maximum than at nearby points on
both sides. The graph will also be lower at a local minimum than at
neighboring points. The graph below illustrates these ideas for a local
maximum.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A downward-opening curve rising from a on the left to a peak at b and falling to c on the right. The peak is marked Local maximum, the height of the peak is marked f(b) on the vertical axis, the rising stretch is labelled Increasing function and the falling stretch Decreasing function.","xMin":0,"xMax":8,"yMin":0,"yMax":6,"xUnit":34,"yUnit":30,"grid":false,"quadratics":[{"a":-0.45,"b":3.6,"c":-2.2,"from":0.7,"to":7.3,"arrows":false}],"guides":[[4,5]],"points":[{"at":[4,5]}],"texts":[{"at":[1,-0.15],"text":"a","anchor":"middle","dy":16,"italic":true},{"at":[4,-0.15],"text":"b","anchor":"middle","dy":16,"italic":true},{"at":[7,-0.15],"text":"c","anchor":"middle","dy":16,"italic":true},{"at":[0,5],"text":"f(b)","anchor":"end","dx":-6,"dy":4,"italic":true},{"at":[4.3,5.6],"text":"Local maximum","dx":6},{"at":[2.4,1.9],"text":"Increasing","anchor":"middle"},{"at":[2.4,1.4],"text":"function","anchor":"middle"},{"at":[5.6,1.9],"text":"Decreasing","anchor":"middle"},{"at":[5.6,1.4],"text":"function","anchor":"middle"}]}
{{< /apfigure >}}

These observations lead us to a formal definition of local extrema.

{{< callout type="info" >}}
  **Local minima and local maxima.**

  A function $f$ is an **increasing function** on an open interval if
  $f(b)>f(a)$ for every two input values $a$ and $b$ in the interval where
  $b>a$.

  A function $f$ is a **decreasing function** on an open interval if
  $f(b)<f(a)$ for every two input values $a$ and $b$ in the interval where
  $b>a$.

  A function $f$ has a local maximum at a point $b$ in an open interval
  $(a,c)$ if $f(b)\ge f(x)$ for every point $x$ ($x$ does not equal $b$) in
  the interval.

  $f$ has a local minimum at a point $b$ in $(a,c)$ if $f(b)\le f(x)$ for
  every point $x$ ($x$ does not equal $b$) in the interval.
{{< /callout >}}

**Example.** Given the function $p(t)$ graphed below, identify the intervals
on which the function appears to be increasing.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of p of t. It falls steeply from the top left to a low point at t = 1, rises to a high point at t = 3, dips to a second low point at t = 4, then rises steeply off the top of the grid.","xMin":-1,"xMax":6,"yMin":-2,"yMax":4,"xUnit":34,"yUnit":34,"tickLabels":true,"xLabel":"t","yLabel":"p","polynomials":[{"coeffs":[2.06987,-6.81124,5.39223,-1.51361,0.1419]}]}
{{< /apfigure >}}

**Solution.** We see that the function is not constant on any interval. The
function is increasing where it slants upward as we move to the right and
decreasing where it slants downward as we move to the right. The function
appears to be increasing from $t=1$ to $t=3$ and from $t=4$ on.

In **interval notation**, we would say the function appears to be increasing
on the interval $(1,3)$ and the interval $(4,\infty)$.

Notice in this example that we used open intervals (intervals that do not
include the endpoints), because the function is neither increasing nor
decreasing at $t=1$, $t=3$, and $t=4$. These points are the local extrema
(two minima and a maximum).

**Example.** Graph the function $f(x)=\tfrac{2}{x}+\tfrac{x}{3}$. Then use
the graph to estimate the local extrema of the function and to determine the
intervals on which the function is increasing.

**Solution.** Using technology, we find that the graph of the function looks
like the one below. It appears there is a low point, or local minimum,
between $x=2$ and $x=3$, and a mirror-image high point, or local maximum,
somewhere between $x=-3$ and $x=-2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 2 over x plus x over 3. The right branch falls from the top toward a low point near (2.4, 1.6) and then rises slowly; the left branch is its mirror image, rising to a high point near (−2.4, −1.6) and then falling steeply toward the vertical axis.","xMin":-5,"xMax":5,"yMin":-4,"yMax":4,"xUnit":26,"yUnit":26,"tickLabels":true,"yLabel":"f(x)","rationals":[{"num":[6,0,1],"den":[0,3]}]}
{{< /apfigure >}}

Most graphing calculators and graphing utilities can estimate the location of
maxima and minima. Based on such estimates, the function is increasing on the
interval $(-\infty,-2.449)$ and $(2.449,\infty)$. Notice that, while we
expect the extrema to be symmetric, two different technologies agree only up
to four decimals due to the differing approximation algorithms used by each.
(The exact location of the extrema is at $\pm\sqrt{6}$, but determining this
requires calculus.)

{{< fillin
  question="Graph $f(x)=x^3-6x^2-15x+20$. The local maximum occurs at $x=-1$; what is the local maximum value?"
  answer="28"
  hint="Evaluate the function at $x=-1$."
>}}

{{< multiplechoice
  question="For that same function $f(x)=x^3-6x^2-15x+20$, on which intervals is it increasing?"
  answer="$(-\infty,-1)\cup(5,\infty)$"
  hint="The graph turns at the two local extrema, $x=-1$ and $x=5$; it climbs outside them."
>}}
$(5,\infty)$
$(-\infty,-1)$
$(-1,5)$
$(-\infty,-1)\cup(5,\infty)$
{{< /multiplechoice >}}

**Example.** For the function $f$ whose graph is shown below, find all local
maxima and minima.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 3x minus x cubed. It falls from the top left to a low point at (−1, −2), rises to a high point at (1, 2), then falls steeply off the bottom of the grid.","xMin":-3,"xMax":3,"yMin":-8,"yMax":8,"xUnit":40,"yUnit":16,"xGridStep":1,"yGridStep":2,"tickLabels":true,"xTickStep":1,"yTickStep":2,"cubics":[{"a":-1,"b":0,"c":3,"d":0}],"texts":[{"at":[2.1,-6],"text":"f","italic":true}]}
{{< /apfigure >}}

**Solution.** Observe the graph of $f$. The graph attains a local maximum at
$x=1$ because it is the highest point in an open interval around $x=1$. The
local maximum is the $y$-coordinate at $x=1$, which is $2$.

The graph attains a local minimum at $x=-1$ because it is the lowest point in
an open interval around $x=-1$. The local minimum is the $y$-coordinate at
$x=-1$, which is $-2$.

## Analyzing the toolkit functions for increasing or decreasing intervals

We will now return to our toolkit functions and discuss their graphical
behavior. Their graphs appear in the toolkit library in *Domain and Range*.

| Function | Increasing/decreasing |
| :--- | :--- |
| Constant function, $f(x)=c$ | Neither increasing nor decreasing |
| Identity function, $f(x)=x$ | Increasing |
| Quadratic function, $f(x)=x^2$ | Increasing on $(0,\infty)$; decreasing on $(-\infty,0)$; minimum at $x=0$ |
| Cubic function, $f(x)=x^3$ | Increasing |
| Reciprocal, $f(x)=\tfrac{1}{x}$ | Decreasing on $(-\infty,0)\cup(0,\infty)$ |
| Reciprocal squared, $f(x)=\tfrac{1}{x^2}$ | Increasing on $(-\infty,0)$; decreasing on $(0,\infty)$ |
| Cube root, $f(x)=\sqrt[3]{x}$ | Increasing |
| Square root, $f(x)=\sqrt{x}$ | Increasing on $(0,\infty)$ |
| Absolute value, $f(x)=\lvert x\rvert$ | Increasing on $(0,\infty)$; decreasing on $(-\infty,0)$ |

## Using a graph to locate the absolute maximum and absolute minimum

There is a difference between locating the highest and lowest points on a
graph in a region around an open interval (locally) and locating the highest
and lowest points on the graph for the entire domain. The $y$-coordinates
(output) at the highest and lowest points are called the **absolute maximum**
and **absolute minimum**, respectively.

To locate absolute maxima and minima from a graph, we need to observe the
graph to determine where the graph attains its highest and lowest points on
the domain of the function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals x squared minus 2 on the closed interval from −1 to 2. A solid point at (−1, −1) begins the curve, its absolute minimum is the solid point (0, −2), and its absolute maximum is the solid point (2, 2).","xMin":-2,"xMax":3,"yMin":-3,"yMax":3,"unit":34,"tickLabels":true,"quadratics":[{"a":1,"b":0,"c":-2,"from":-1,"to":2,"arrows":false}],"points":[{"at":[-1,-1]},{"at":[0,-2]},{"at":[2,2]}],"texts":[{"at":[1.1,1.5],"text":"f","italic":true}]}
{{< /apfigure >}}

For this function, the absolute maximum is $f(2)=2$ and the absolute minimum
is $f(0)=-2$.

Not every function has an absolute maximum or minimum value. The toolkit
function $f(x)=x^3$ is one such function.

{{< callout type="info" >}}
  **Absolute maxima and minima.**

  The **absolute maximum** of $f$ at $x=c$ is $f(c)$ where $f(c)\ge f(x)$ for
  all $x$ in the domain of $f$.

  The **absolute minimum** of $f$ at $x=d$ is $f(d)$ where $f(d)\le f(x)$ for
  all $x$ in the domain of $f$.
{{< /callout >}}

**Example.** For the function $f$ shown below, find all absolute maxima and
minima.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f on a closed domain. It begins at a solid point near (−2.4, 13), rises to a high point of 16 at x = −2, falls to a dip near the origin, rises to a second high point of 16 at x = 2, then falls steeply to a solid point at (3, −10).","xMin":-4,"xMax":4,"yMin":-16,"yMax":20,"xUnit":30,"yUnit":6.5,"xGridStep":1,"yGridStep":4,"tickLabels":true,"xTickStep":1,"yTickStep":4,"polynomials":[{"coeffs":[-0.64,0,8.32,0,-1.04],"from":-2.4,"to":3,"arrows":false}],"points":[{"at":[-2.4,12.94]},{"at":[3,-10]}],"texts":[{"at":[2.3,6],"text":"f","italic":true}]}
{{< /apfigure >}}

**Solution.** Observe the graph of $f$. The graph attains an absolute maximum
in two locations, $x=-2$ and $x=2$, because at these locations, the graph
attains its highest point on the domain of the function. The absolute maximum
is the $y$-coordinate at $x=-2$ and $x=2$, which is $16$.

The graph attains an absolute minimum at $x=3$, because it is the lowest
point on the domain of the function's graph. The absolute minimum is the
$y$-coordinate at $x=3$, which is $-10$.

## Key equations

| Average rate of change | $\tfrac{\Delta y}{\Delta x}=\tfrac{f(x_2)-f(x_1)}{x_2-x_1}$ |
| :--- | :--- |

## Key concepts

- A rate of change relates a change in an output quantity to a change in an
  input quantity. The average rate of change is determined using only the
  beginning and ending data.
- Identifying points that mark the interval on a graph can be used to find
  the average rate of change.
- Comparing pairs of input and output values in a table can also be used to
  find the average rate of change.
- An average rate of change can also be computed by determining the function
  values at the endpoints of an interval described by a formula.
- The average rate of change can sometimes be determined as an expression.
- A function is increasing where its rate of change is positive and
  decreasing where its rate of change is negative.
- A local maximum is where a function changes from increasing to decreasing
  and has an output value larger (more positive or less negative) than output
  values at neighboring input values.
- A local minimum is where the function changes from decreasing to increasing
  (as the input increases) and has an output value smaller (more negative or
  less positive) than output values at neighboring input values.
- Minima and maxima are also called extrema.
- We can find local extrema from a graph.
- The highest and lowest points on a graph indicate the maxima and minima.

## Key terms

**rate of change** — the change of an output quantity relative to the change
of the input quantity. **average rate of change** — the difference in the
output values of a function found for two values of the input divided by the
difference between the inputs. **increasing function** — a function is
increasing in some open interval if $f(b)>f(a)$ for any two input values $a$
and $b$ in the given interval where $b>a$. **decreasing function** — a
function is decreasing in some open interval if $f(b)<f(a)$ for any two input
values $a$ and $b$ in the given interval where $b>a$. **local maximum** — a
value of the input where a function changes from increasing to decreasing as
the input value increases. **local minimum** — a value of the input where a
function changes from decreasing to increasing as the input value increases.
**local extrema** — collectively, all of a function's local maxima and
minima. **absolute maximum** — the greatest value of a function over an
interval. **absolute minimum** — the lowest value of a function over an
interval.

## Practice

### Find the average rate of change of a function

{{< fillin
  question="A town's population was 83 thousand in 2002 and 77 thousand in 2004. Find the average rate of change of the population between 2002 and 2004, in people per year."
  answer="-3000"
  answerDisplay="$-3{,}000$ people per year"
  hint="Divide the change in population, converted to people, by the 2-year change in time."
>}}

{{< fillin
  question="The same town's population was 83 thousand in 2002 and 78 thousand in 2006. Find the average rate of change of the population between 2002 and 2006, in people per year."
  answer="-1250"
  answerDisplay="$-1{,}250$ people per year"
  hint="Divide the change in population, converted to people, by the 4-year change in time."
>}}

{{< fillin
  question="Let $f(x)=\tfrac{1}{x}$. Find the number $b$ such that the average rate of change of $f$ on the interval $(2,b)$ is $-\tfrac{1}{10}$."
  answer="5"
  answerDisplay="$b=5$"
  hint="Set $\tfrac{f(b)-f(2)}{b-2}=-\tfrac{1}{10}$, clear denominators, and solve the resulting quadratic (reject $b=2$)."
>}}

{{< fillin
  question="Find and simplify the average rate of change of $f(x)=2x^2+1$ on the interval $[x, x+h]$."
  answer="4x+2h"
  answerForm="no-like-terms polynomial"
  answerDisplay="$4x+2h$"
  hint="Compute $\tfrac{f(x+h)-f(x)}{h}$ and simplify."
>}}

### Use a graph to determine where a function is increasing, decreasing, or constant

{{< multiplechoice
  question="A graphing utility shows the complete behavior of $f(x)=x^4-4x^3+5$. On which interval is $f$ increasing?"
  answer="$(3,\infty)$"
  hint="Find where $f'(x)=4x^3-12x^2=4x^2(x-3)$ changes sign from negative to positive."
>}}
$(3,\infty)$
$(-\infty,0)\cup(3,\infty)$
$(0,3)$
$(-\infty,3)$
{{< /multiplechoice >}}

{{< multiplechoice
  question="A graphing utility shows the complete behavior of $g(t)=t\sqrt{t+3}$. On which interval is $g$ decreasing?"
  answer="$(-3,-2)$"
  hint="Check the sign of $g$ just to the right of $t=-3$ and just left of $t=-2$."
>}}
$(-\infty,-3)$
$(-3,\infty)$
$(-2,\infty)$
$(-3,-2)$
{{< /multiplechoice >}}

### Use a graph to locate local maxima and local minima

{{< fillin
  question="Using a graphing utility, estimate the $x$-value of the local maximum of $m(x)=x^4+2x^3-12x^2-10x+4$, rounded to two decimal places."
  answer="-0.39"
  answerDisplay="$x\approx -0.39$"
  hint="Locate the critical point between $x=-1$ and $x=0$ where $m$ changes from increasing to decreasing."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The complete graph of a function f. It rises from the lower left to a local maximum near (−3, 50), falls through the origin to a local minimum near (3, −50), then rises again toward the upper right.","xMin":-5,"xMax":5,"yMin":-60,"yMax":60,"xUnit":26,"yUnit":2.3,"xGridStep":1,"yGridStep":20,"tickLabels":true,"xTickStep":1,"yTickStep":20,"cubics":[{"a":0.925926,"b":0,"c":-25,"d":0}]}
{{< /apfigure >}}

{{< multiplechoice
  question="The graph above shows the complete graph of a function $f$. Estimate its local maximum and local minimum."
  answer="local maximum $(-3, 50)$; local minimum $(3, -50)$"
  hint="Read the highest point on the left hump and the lowest point on the right dip."
>}}
local maximum $(0, 0)$; local minimum $(3, -50)$
local maximum $(3, 50)$; local minimum $(-3, -50)$
local maximum $(-3, -50)$; local minimum $(3, 50)$
local maximum $(-3, 50)$; local minimum $(3, -50)$
{{< /multiplechoice >}}

### Use a graph to locate the absolute maximum and absolute minimum

{{< apfigure kind="graph" >}}
{"ariaLabel":"The complete graph of a function f on the closed domain from x = −7.5 to x = 7. A solid point begins the curve near (−7.5, −220), the curve rises through a local maximum near (−3, 50), crosses near the origin, falls to a local minimum near (3, −50), then rises steeply to a solid point ending the curve near (7, 150).","xMin":-8,"xMax":8,"yMin":-250,"yMax":200,"xUnit":18,"yUnit":0.62,"xGridStep":2,"yGridStep":50,"tickLabels":true,"xTickStep":2,"yTickStep":50,"cubics":[{"a":0.96333,"b":-0.07663,"c":-25.33662,"d":0.68966,"from":-7.5,"to":7,"arrows":false}],"points":[{"at":[-7.5,-220]},{"at":[7,150]}]}
{{< /apfigure >}}

{{< multiplechoice
  question="If the complete graph of the function shown above is displayed, estimate its absolute maximum and absolute minimum."
  answer="absolute maximum $\approx(7, 150)$; absolute minimum $\approx(-7.5, -220)$"
  hint="Over a closed domain, the absolute extrema often occur at the endpoints rather than at the interior humps."
>}}
absolute maximum $\approx(-7.5, -220)$; absolute minimum $\approx(7, 150)$
absolute maximum $\approx(7, 150)$; absolute minimum $\approx(2, -50)$
absolute maximum $\approx(7, 150)$; absolute minimum $\approx(-7.5, -220)$
absolute maximum $\approx(-3, 50)$; absolute minimum $\approx(2, -50)$
{{< /multiplechoice >}}

{{< multiplechoice
  question="How are the absolute maximum and minimum similar to and different from the local extrema?"
  answer="The absolute maximum and minimum relate to the entire graph, whereas the local extrema relate only to a specific region around an open interval."
  hint="Absolute extrema compare the whole domain; local extrema compare only a nearby interval."
>}}
The absolute maximum and minimum relate only to a specific region around an open interval, whereas the local extrema relate to the entire graph.
The absolute maximum and minimum only exist for polynomial functions, while local extrema exist for all functions.
The absolute maximum and minimum relate to the entire graph, whereas the local extrema relate only to a specific region around an open interval.
There is no difference; the terms are interchangeable.
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 1.3: Rates of Change and Behavior of Graphs](https://openstax.org/books/precalculus-2e/pages/1-3-rates-of-change-and-behavior-of-graphs) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every graph as an accessible inline SVG generated from an explicit formula — the source's unlabelled illustrative curves were fitted first, so $g(t)=\tfrac{1}{2}t^{2}-\tfrac{3}{2}t+2$, $p(t)$ is the quartic whose extrema fall exactly at $t=1,3,4$, and the closed-domain example is $-1.04x^{4}+8.32x^{2}-0.64$; presented the gasoline and distance tables and the three toolkit increasing/decreasing tables as Markdown tables, referring to the toolkit graphs published in Section 1.2 rather than repeating them; omitted the pair of graphing-calculator screen images, keeping the estimates they illustrate in the prose; omitted the media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback, using multiple choice where the answer is interval notation, which cannot be graded as free-response math; and adapted selected end-of-section exercises into the closing Practice block, recreating two of the section's illustrative graphs as accessible SVGs fitted to their printed answer coordinates and using multiple choice for interval-notation, ordered-pair, and verbal answers.</small>
