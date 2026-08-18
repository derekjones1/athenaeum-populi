---
title: Rational Functions
description: >-
  Using arrow notation to describe the local and end behavior of a rational
  function, solving applied concentration problems, finding domains,
  identifying vertical and horizontal asymptotes, and graphing rational
  functions from their intercepts, asymptotes, and removable discontinuities
  — adapted from OpenStax Precalculus 2e, Section 3.7.
source_section: "3.7"
weight: 7
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use arrow notation
- Solve applied problems involving rational functions
- Find the domains of rational functions
- Identify vertical asymptotes
- Identify horizontal asymptotes
- Graph rational functions
{{< /callout >}}

Suppose we know that the cost of making a product is dependent on the number
of items, $x$, produced. This is given by the equation
$C(x)=15{,}000x-0.1x^2+1000$. If we want to know the average cost for
producing $x$ items, we would divide the cost function by the number of
items, $x$.

The average cost function, which yields the average cost per item for $x$
items produced, is

$$f(x)=\tfrac{15{,}000x-0.1x^2+1000}{x}$$

Many other application problems require finding an average value in a
similar way, giving us variables in the denominator. Written without a
variable in the denominator, this function will contain a negative integer
power.

In the last few sections, we have worked with polynomial functions, which
are functions with non-negative integers for exponents. In this section, we
explore rational functions, which have variables in the denominator.

## Using arrow notation

We have seen the graphs of the basic reciprocal function and the squared
reciprocal function from our study of toolkit functions. Examine these
graphs, shown below, and notice some of their features.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The toolkit graph of f of x equals 1 over x. On a grid from −4 to 4 on both axes, the left branch falls from near the top at x just below 0 down and off the bottom, and the right branch rises from off the bottom at x just above 0 up toward the top, each branch flattening toward the x-axis as it runs away from the origin.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,1]}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The toolkit graph of f of x equals 1 over x squared. On a grid from −4 to 4 on both axes, both branches rise steeply toward the top on either side of x=0 and flatten toward the x-axis moving away from the origin, so the whole curve stays above the x-axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,0,1]}]}
{{< /apfigure >}}

Several things are apparent if we examine the graph of $f(x)=\tfrac{1}{x}$.

1. On the left branch of the graph, the curve approaches the $x$-axis
   ($y=0$) as $x\to-\infty$.
2. As the graph approaches $x=0$ from the left, the curve drops, but as we
   approach zero from the right, the curve rises.
3. Finally, on the right branch of the graph, the curve approaches the
   $x$-axis ($y=0$) as $x\to\infty$.

To summarize, we use **arrow notation** to show that $x$ or $f(x)$ is
approaching a particular value. See the table below.

| Symbol | Meaning |
| :--- | :--- |
| $x\to a^{-}$ | $x$ approaches $a$ from the left ($x<a$ but close to $a$) |
| $x\to a^{+}$ | $x$ approaches $a$ from the right ($x>a$ but close to $a$) |
| $x\to\infty$ | $x$ approaches infinity ($x$ increases without bound) |
| $x\to-\infty$ | $x$ approaches negative infinity ($x$ decreases without bound) |
| $f(x)\to\infty$ | the output approaches infinity (the output increases without bound) |
| $f(x)\to-\infty$ | the output approaches negative infinity (the output decreases without bound) |
| $f(x)\to a$ | the output approaches $a$ |

### Local behavior of $f(x)=\tfrac{1}{x}$

Let's begin by looking at the reciprocal function, $f(x)=\tfrac{1}{x}$. We
cannot divide by zero, which means the function is undefined at $x=0$; so
zero is not in the domain. As the input values approach zero from the left
side (becoming very small, negative values), the function values decrease
without bound (in other words, they approach negative infinity). We can see
this behavior in the table below.

| $x$ | $-0.1$ | $-0.01$ | $-0.001$ | $-0.0001$ |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)=\tfrac{1}{x}$ | $-10$ | $-100$ | $-1{,}000$ | $-10{,}000$ |

We write in arrow notation

$$\text{as }x\to0^{-},\ f(x)\to-\infty$$

As the input values approach zero from the right side (becoming very small,
positive values), the function values increase without bound (approaching
infinity). We can see this behavior in the table below.

| $x$ | $0.1$ | $0.01$ | $0.001$ | $0.0001$ |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)=\tfrac{1}{x}$ | $10$ | $100$ | $1{,}000$ | $10{,}000$ |

We write in arrow notation

$$\text{as }x\to0^{+},\ f(x)\to\infty$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 1 over x with four labelled arrows: near the top, as x approaches 0 from the right, f(x) approaches infinity; on the left, as x approaches negative infinity, f(x) approaches 0; on the right, as x approaches infinity, f(x) approaches 0; near the bottom, as x approaches 0 from the left, f(x) approaches negative infinity.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,1]}],"texts":[{"at":[0.45,4.2],"text":"Right of 0: f(x) → ∞","anchor":"start"},{"at":[-0.85,1],"text":"As x → −∞: f(x) → 0","anchor":"end"},{"at":[0.85,-1.35],"text":"As x → ∞: f(x) → 0","anchor":"start"},{"at":[0.3,-4.55],"text":"Left of 0: f(x) → −∞","anchor":"start"}]}
{{< /apfigure >}}

This behavior creates a **vertical asymptote**, which is a vertical line
that the graph approaches but never crosses. In this case, the graph is
approaching the vertical line $x=0$ as the input becomes close to zero.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 1 over x with a dashed red vertical line at x=0, labelled x=0, showing the vertical asymptote.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,1]}],"lines":[{"x":0,"dashed":true,"arrows":false,"label":"x = 0"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Vertical asymptote.** A **vertical asymptote** of a graph is a vertical
  line $x=a$ where the graph tends toward positive or negative infinity as
  the input approaches $a$ from either the left or the right. We write

  $$\text{as }x\to a^{-},\ f(x)\to\pm\infty\ \text{ or }\ x\to a^{+},\ f(x)\to\pm\infty$$
{{< /callout >}}

### End behavior of $f(x)=\tfrac{1}{x}$

As the values of $x$ approach infinity, the function values approach 0. As
the values of $x$ approach negative infinity, the function values approach
0. Symbolically, using arrow notation

$$\text{as }x\to\infty,\ f(x)\to0,\ \text{ and as }x\to-\infty,\ f(x)\to0$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 1 over x again, with the same four labelled arrows highlighting its end behavior: as x approaches negative infinity or positive infinity, f(x) approaches 0, and as x approaches 0 from the left or right, f(x) approaches negative infinity or infinity respectively.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,1]}],"texts":[{"at":[0.45,4.2],"text":"Right of 0: f(x) → ∞","anchor":"start"},{"at":[-0.85,1],"text":"As x → −∞: f(x) → 0","anchor":"end"},{"at":[0.85,-1.35],"text":"As x → ∞: f(x) → 0","anchor":"start"},{"at":[0.3,-4.55],"text":"Left of 0: f(x) → −∞","anchor":"start"}]}
{{< /apfigure >}}

Based on this overall behavior and the graph, we can see that the function
approaches 0 but never actually reaches 0; it seems to level off as the
inputs become large. This behavior creates a **horizontal asymptote**, a
horizontal line that the graph approaches as the input increases or
decreases without bound. In this case, the graph is approaching the
horizontal line $y=0$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 1 over x with both asymptotes dashed: a vertical line at x=0 labelled x=0 and a horizontal line at y=0 labelled y=0.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,1]}],"lines":[{"x":0,"dashed":true,"arrows":false,"label":"x = 0"},{"y":0,"dashed":true,"arrows":false,"label":"y = 0","labelAt":0.24}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Horizontal asymptote.** A **horizontal asymptote** of a graph is a
  horizontal line $y=b$ where the graph approaches the line as the inputs
  increase or decrease without bound. We write

  $$\text{as }x\to\infty\ \text{or}\ x\to-\infty,\ f(x)\to b$$
{{< /callout >}}

**Example.** Use arrow notation to describe the end behavior and local
behavior of the function graphed below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of a rational function with a vertical asymptote at x=2 and a horizontal asymptote at y=4. The left branch falls from the horizontal asymptote near y=4 as x approaches 2 from the left, dropping toward negative infinity; the right branch drops from positive infinity just right of x=2 and levels off toward y=4 as x increases.","xMin":-6,"xMax":6,"yMin":-12,"yMax":12,"unit":18,"tickLabels":true,"tickStep":2,"rationals":[{"num":[-7,4],"den":[-2,1]}],"lines":[{"x":2,"dashed":true,"arrows":false,"label":"x = 2"},{"y":4,"dashed":true,"arrows":false,"label":"y = 4","labelSide":"left"}]}
{{< /apfigure >}}

**Solution.** Notice that the graph is showing a vertical asymptote at
$x=2$, which tells us that the function is undefined at $x=2$.

$$\text{as }x\to2^{-},\ f(x)\to-\infty,\ \text{ and as }x\to2^{+},\ f(x)\to\infty$$

And as the inputs decrease without bound, the graph appears to be leveling
off at output values of 4, indicating a horizontal asymptote at $y=4$. As
the inputs increase without bound, the graph levels off at 4.

$$\text{as }x\to\infty,\ f(x)\to4\ \text{ and as }x\to-\infty,\ f(x)\to4$$

{{< multiplechoice
  question="Use arrow notation to describe the end behavior and local behavior of the reciprocal squared function $f(x)=\tfrac{1}{x^2}$."
  answer="As $x\to\pm\infty$, $f(x)\to0$; as $x\to0$, $f(x)\to\infty$"
  hint="Squaring $x$ keeps the denominator positive on both sides of 0, so both branches behave the same way there."
>}}
As $x\to\pm\infty$, $f(x)\to0$; as $x\to0$, $f(x)\to\infty$
As $x\to\pm\infty$, $f(x)\to\infty$; as $x\to0$, $f(x)\to0$
As $x\to\pm\infty$, $f(x)\to0$; as $x\to0^{-}$, $f(x)\to-\infty$ and as $x\to0^{+}$, $f(x)\to\infty$
As $x\to\pm\infty$, $f(x)\to1$; as $x\to0$, $f(x)\to\infty$
{{< /multiplechoice >}}

**Example.** Sketch a graph of the reciprocal function shifted two units to
the left and up three units. Identify the horizontal and vertical asymptotes
of the graph, if any.

**Solution.** Shifting the graph left 2 and up 3 would result in the
function

$$f(x)=\tfrac{1}{x+2}+3$$

or equivalently, by giving the terms a common denominator,

$$f(x)=\tfrac{3x+7}{x+2}$$

The graph of the shifted function is displayed below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals the quantity 3x+7 over x+2, with a vertical asymptote at x=−2 and a horizontal asymptote at y=3. The left branch falls toward negative infinity as x approaches −2 from the left, and the right branch drops from positive infinity just right of x=−2 and levels off toward y=3.","xMin":-7,"xMax":7,"yMin":-3,"yMax":7,"unit":18,"tickLabels":true,"tickStep":1,"rationals":[{"num":[7,3],"den":[2,1]}],"lines":[{"x":-2,"dashed":true,"arrows":false,"label":"x = −2"},{"y":3,"dashed":true,"arrows":false,"label":"y = 3","labelSide":"left"}]}
{{< /apfigure >}}

Notice that this function is undefined at $x=-2$, and the graph also is
showing a vertical asymptote at $x=-2$.

$$\text{as }x\to-2^{-},\ f(x)\to-\infty,\ \text{ and as }x\to-2^{+},\ f(x)\to\infty$$

As the inputs increase and decrease without bound, the graph appears to be
leveling off at output values of 3, indicating a horizontal asymptote at
$y=3$.

$$\text{as }x\to\pm\infty,\ f(x)\to3$$

**Analysis.** Notice that horizontal and vertical asymptotes are shifted
left 2 and up 3 along with the function.

{{< fillin
  question="The reciprocal squared function is shifted right 3 units and down 4 units. Find the vertical asymptote of the resulting graph."
  answer="x=3"
  answerForm="solved:x"
  answerDisplay="$x=3$"
  hint="A horizontal shift right by $h$ moves the reciprocal squared function's asymptote at $x=0$ to $x=h$."
>}}

{{< fillin
  question="Find the horizontal asymptote of that same shifted graph."
  answer="y=-4"
  answerDisplay="$y=-4$"
  hint="A vertical shift down by $k$ moves the reciprocal squared function's asymptote at $y=0$ to $y=-k$."
>}}

## Solving applied problems involving rational functions

In the example above, we shifted a toolkit function in a way that resulted
in the function $f(x)=\tfrac{3x+7}{x+2}$. This is an example of a rational
function. A **rational function** is a function that can be written as the
quotient of two polynomial functions. Many real-world problems require us to
find the ratio of two polynomial functions. Problems involving rates and
concentrations often involve rational functions.

{{< callout type="info" >}}
  **Rational function.** A **rational function** is a function that can be
  written as the quotient of two polynomial functions $P(x)$ and $Q(x)$.

  $$f(x)=\tfrac{P(x)}{Q(x)}=\tfrac{a_px^p+a_{p-1}x^{p-1}+\ldots+a_1x+a_0}{b_qx^q+b_{q-1}x^{q-1}+\ldots+b_1x+b_0},\quad Q(x)\ne0$$
{{< /callout >}}

**Example.** After running out of pre-packaged supplies, a nurse in a
refugee camp is preparing an intravenous sugar solution for patients in the
camp hospital. A large mixing tank currently contains 100 gallons of water
into which 5 pounds of sugar have been mixed. A tap will open pouring 10
gallons per minute of distilled water into the tank at the same time sugar
is poured into the tank at a rate of 1 pound per minute. Find the
concentration (pounds per gallon) of sugar in the tank after 12 minutes. Is
that a greater concentration than at the beginning?

**Solution.** Let $t$ be the number of minutes since the tap opened. Since
the water increases at 10 gallons per minute, and the sugar increases at 1
pound per minute, these are constant rates of change. This tells us the
amount of water in the tank is changing linearly, as is the amount of sugar
in the tank. We can write an equation independently for each:

$$
\begin{array}{lrcl}
\text{water:} & W(t) &=& 100+10t\ \text{in gallons} \\[4pt]
\text{sugar:} & S(t) &=& 5+1t\ \text{in pounds}
\end{array}
$$

The concentration, $C$, will be the ratio of pounds of sugar to gallons of
water

$$C(t)=\tfrac{5+t}{100+10t}$$

The concentration after 12 minutes is given by evaluating $C(t)$ at $t=12$.

$$
\begin{array}{lrcl}
& C(12) &=& \tfrac{5+12}{100+10(12)} \\[4pt]
& &=& \tfrac{17}{220}
\end{array}
$$

This means the concentration is 17 pounds of sugar to 220 gallons of water.

At the beginning, the concentration is

$$
\begin{array}{lrcl}
& C(0) &=& \tfrac{5+0}{100+10(0)} \\[4pt]
& &=& \tfrac{1}{20}
\end{array}
$$

Since $\tfrac{17}{220}\approx0.08>\tfrac{1}{20}=0.05$, the concentration is
greater after 12 minutes than at the beginning.

**Analysis.** To find the horizontal asymptote, divide the leading
coefficient in the numerator by the leading coefficient in the denominator:

$$\tfrac{1}{10}=0.1$$

Notice the horizontal asymptote is $y=0.1$. This means the concentration,
$C$, the ratio of pounds of sugar to gallons of water, will approach 0.1 in
the long term.

{{< fillin
  question="There are 1,200 first-year and 1,500 second-year students at a rally at noon. After 12 p.m., 20 first-year students arrive at the rally every five minutes while 15 second-year students leave the rally. Find the ratio of first-year to second-year students at 1 p.m."
  answer="\frac{12}{11}"
  answerDisplay="$\tfrac{12}{11}$"
  hint="One hour is twelve 5-minute intervals; add $20$ first-years and subtract $15$ second-years per interval, then form the ratio."
>}}

## Finding the domains of rational functions

A vertical asymptote represents a value at which a rational function is
undefined, so that value is not in the domain of the function. A reciprocal
function cannot have values in its domain that cause the denominator to
equal zero. In general, to find the domain of a rational function, we need
to determine which inputs would cause division by zero.

{{< callout type="info" >}}
  **Domain of a rational function.** The domain of a rational function
  includes all real numbers except those that cause the denominator to
  equal zero.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a rational function, find the domain.

  1. Set the denominator equal to zero.
  2. Solve to find the $x$-values that cause the denominator to equal zero.
  3. The domain is all real numbers except those found in Step 2.
{{< /callout >}}

**Example.** Find the domain of $f(x)=\tfrac{x+3}{x^2-9}$.

**Solution.** Begin by setting the denominator equal to zero and solving.

$$
\begin{array}{lrcl}
& x^2-9 &=& 0 \\[4pt]
& x^2 &=& 9 \\[4pt]
& x &=& \pm3
\end{array}
$$

The denominator is equal to zero when $x=\pm3$. The domain of the function
is all real numbers except $x=\pm3$.

**Analysis.** A graph of this function, shown below, confirms that the
function is not defined when $x=\pm3$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals the quantity x+3 over x squared minus 9, which reduces to 1 over x−3, with a vertical asymptote at x=3 and a horizontal asymptote at y=0.","xMin":-6,"xMax":6,"yMin":-4,"yMax":4,"unit":24,"tickLabels":true,"tickStep":1,"rationals":[{"num":[3,1],"den":[-9,0,1]}],"lines":[{"x":3,"dashed":true,"arrows":false,"label":"x = 3"},{"y":0,"dashed":true,"arrows":false,"label":"y = 0"}]}
{{< /apfigure >}}

There is a vertical asymptote at $x=3$ and a hole in the graph at $x=-3$. We
will discuss these types of holes in greater detail later in this section.

{{< fillin
  question="Find the domain of $f(x)=\tfrac{4x}{5(x-1)(x-5)}$. Write the domain in interval notation."
  answer="(-\infty,1)\cup(1,5)\cup(5,\infty)"
  answerDisplay="$(-\infty,1)\cup(1,5)\cup(5,\infty)$"
  hint="The denominator is zero when $x=1$ or $x=5$; remove both points from the real line."
>}}

## Identifying vertical asymptotes of rational functions

By looking at the graph of a rational function, we can investigate its
local behavior and easily see whether there are asymptotes. We may even be
able to approximate their location. Even without the graph, however, we can
still determine whether a given rational function has any asymptotes, and
calculate their location.

### Vertical asymptotes

The vertical asymptotes of a rational function may be found by examining
the factors of the denominator that are not common to the factors in the
numerator. Vertical asymptotes occur at the zeros of such factors.

{{< callout type="info" >}}
  **How to:** given a rational function, identify any vertical asymptotes
  of its graph.

  1. Factor the numerator and denominator.
  2. Note any restrictions in the domain of the function.
  3. Reduce the expression by canceling common factors in the numerator and
     the denominator.
  4. Note any values that cause the denominator to be zero in this
     simplified version. These are where the vertical asymptotes occur.
  5. Note any restrictions in the domain where asymptotes do not occur.
     These are removable discontinuities.
{{< /callout >}}

**Example.** Find the vertical asymptotes of the graph of
$k(x)=\tfrac{5+2x^2}{2-x-x^2}$.

**Solution.** First, factor the numerator and denominator.

$$
\begin{array}{lrcl}
& k(x) &=& \tfrac{5+2x^2}{2-x-x^2} \\[4pt]
& &=& \tfrac{5+2x^2}{(2+x)(1-x)}
\end{array}
$$

To find the vertical asymptotes, we determine where this function will be
undefined by setting the denominator equal to zero:

$$
\begin{array}{lrcl}
& (2+x)(1-x) &=& 0 \\[4pt]
& x &=& -2,1
\end{array}
$$

Neither $x=-2$ nor $x=1$ are zeros of the numerator, so the two values
indicate two vertical asymptotes. The graph below confirms the location of
the two vertical asymptotes.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of k of x equals the quantity 5+2x squared over 2−x−x squared, with vertical asymptotes at x=−2 and x=1 and a horizontal asymptote at y=−2.","xMin":-6,"xMax":6,"yMin":-7,"yMax":5,"unit":20,"tickLabels":true,"tickStep":1,"rationals":[{"num":[5,0,2],"den":[2,-1,-1]}],"lines":[{"x":-2,"dashed":true,"arrows":false,"label":"x = −2"},{"x":1,"dashed":true,"arrows":false,"label":"x = 1"},{"y":-2,"dashed":true,"arrows":false,"label":"y = −2","labelSide":"left"}]}
{{< /apfigure >}}

### Removable discontinuities

Occasionally, a graph will contain a hole: a single point where the graph is
not defined, indicated by an open circle. We call such a hole a **removable
discontinuity**.

For example, the function $f(x)=\tfrac{x^2-1}{x^2-2x-3}$ may be re-written
by factoring the numerator and the denominator.

$$f(x)=\tfrac{(x+1)(x-1)}{(x+1)(x-3)}$$

Notice that $x+1$ is a common factor to the numerator and the denominator.
The zero of this factor, $x=-1$, is the location of the removable
discontinuity. Notice also that $x-3$ is not a factor in both the numerator
and denominator. The zero of this factor, $x=3$, is the vertical asymptote.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals the quantity x squared minus 1, over x squared minus 2x minus 3, which reduces to the quantity x−1 over x−3. There is a vertical asymptote at x=3 and an open circle marking a removable discontinuity at (−1, 0.5).","xMin":-6,"xMax":8,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":1,"rationals":[{"num":[-1,0,1],"den":[-3,-2,1]}],"lines":[{"x":3,"dashed":true,"arrows":false,"label":"x = 3","labelSide":"right"}],"points":[{"at":[-1,0.5],"open":true}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Removable discontinuities of rational functions.** A **removable
  discontinuity** occurs in the graph of a rational function at $x=a$ if $a$
  is a zero for a factor in the denominator that is common with a factor in
  the numerator. We factor the numerator and denominator and check for
  common factors. If we find any, we set the common factor equal to 0 and
  solve. This is the location of the removable discontinuity. This is true
  if the multiplicity of this factor is greater than or equal to that in the
  denominator. If the multiplicity of this factor is greater in the
  denominator, then there is still an asymptote at that value.
{{< /callout >}}

**Example.** Find the vertical asymptotes and removable discontinuities of
the graph of $k(x)=\tfrac{x-2}{x^2-4}$.

**Solution.** Factor the numerator and the denominator.

$$k(x)=\tfrac{x-2}{(x-2)(x+2)}$$

Notice that there is a common factor in the numerator and the denominator,
$x-2$. The zero for this factor is $x=2$. This is the location of the
removable discontinuity.

Notice that there is a factor in the denominator that is not in the
numerator, $x+2$. The zero for this factor is $x=-2$. The vertical
asymptote is $x=-2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of k of x equals the quantity x−2 over x squared minus 4, which reduces to 1 over x+2. There is a vertical asymptote at x=−2 and an open circle marking a removable hole at (2, 1/4).","xMin":-8,"xMax":4,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":2,"rationals":[{"num":[-2,1],"den":[-4,0,1]}],"lines":[{"x":-2,"dashed":true,"arrows":false,"label":"x = −2"}],"points":[{"at":[2,0.25],"open":true}]}
{{< /apfigure >}}

The graph of this function will have the vertical asymptote at $x=-2$, but
at $x=2$ the graph will have a hole.

{{< fillin
  question="Find the vertical asymptotes of $f(x)=\tfrac{x^2-25}{x^3-6x^2+5x}$. If there is more than one, separate them with a comma."
  answer="x=0,x=1"
  answerMode="unordered"
  answerDisplay="$x=0$ or $x=1$"
  hint="Factor numerator and denominator, cancel the common factor, then find where the reduced denominator is zero."
>}}

{{< fillin
  question="That same function has a removable discontinuity. Give it as an ordered pair $(x,y)$."
  answer="(5,\frac{1}{2})"
  answerDisplay="$(5,\tfrac{1}{2})$"
  hint="The common factor $x-5$ cancels; evaluate the reduced function at $x=5$ to get the missing point's $y$-value."
>}}

## Identifying horizontal asymptotes of rational functions

While vertical asymptotes describe the behavior of a graph as the
**output** gets very large or very small, horizontal asymptotes help
describe the behavior of a graph as the **input** gets very large or very
small. Recall that a polynomial's end behavior will mirror that of the
leading term. Likewise, a rational function's end behavior will mirror that
of the ratio of the leading terms of the numerator and denominator
functions.

There are three distinct outcomes when checking for horizontal asymptotes:

**Case 1:** If the degree of the denominator > degree of the numerator,
there is a **horizontal asymptote** at $y=0$.

Example: $f(x)=\tfrac{4x+2}{x^2+4x-5}$

In this case, the end behavior is $f(x)\approx\tfrac{4x}{x^2}=\tfrac{4}{x}$.
This tells us that, as the inputs increase or decrease without bound, this
function will behave similarly to the function $g(x)=\tfrac{4}{x}$, and the
outputs will approach zero, resulting in a horizontal asymptote at $y=0$.
See the graph below. Note that this graph crosses the horizontal asymptote.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals the quantity 4x+2 over x squared plus 4x minus 5, with vertical asymptotes at x=−5 and x=1 and a horizontal asymptote at y=0 that the graph crosses near the origin.","xMin":-10,"xMax":10,"yMin":-3,"yMax":4,"unit":15,"tickLabels":true,"tickStep":1,"xTickStep":2,"rationals":[{"num":[2,4],"den":[-5,4,1]}],"lines":[{"x":-5,"dashed":true,"arrows":false,"label":"x = −5"},{"x":1,"dashed":true,"arrows":false,"label":"x = 1"},{"y":0,"dashed":true,"arrows":false,"label":"y = 0"}]}
{{< /apfigure >}}

**Case 2:** If the degree of the denominator < degree of the numerator by
one, we get a slant asymptote.

Example: $f(x)=\tfrac{3x^2-2x+1}{x-1}$

In this case, the end behavior is $f(x)\approx\tfrac{3x^2}{x}=3x$. This
tells us that as the inputs increase or decrease without bound, this
function will behave similarly to the function $g(x)=3x$. As the inputs
grow large, the outputs will grow and not level off, so this graph has no
horizontal asymptote. However, the graph of $g(x)=3x$ looks like a diagonal
line, and since $f$ will behave similarly to $g$, it will approach a line
close to $y=3x$. This line is a slant asymptote.

To find the equation of the slant asymptote, divide
$\tfrac{3x^2-2x+1}{x-1}$. The quotient is $3x+1$, and the remainder is 2.
The slant asymptote is the graph of the line $g(x)=3x+1$. See the graph
below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals the quantity 3x squared minus 2x plus 1 over x−1, with a vertical asymptote at x=1 and a dashed slant asymptote along y=3x+1.","xMin":-5,"xMax":5,"yMin":-12,"yMax":12,"unit":20,"tickLabels":true,"tickStep":2,"rationals":[{"num":[1,-2,3],"den":[-1,1]}],"lines":[{"x":1,"dashed":true,"arrows":false,"label":"x = 1"},{"slope":3,"intercept":1,"dashed":true,"arrows":false,"label":"y = 3x + 1"}]}
{{< /apfigure >}}

**Case 3:** If the degree of the denominator = degree of the numerator,
there is a horizontal asymptote at $y=\tfrac{a_n}{b_n}$, where $a_n$ and
$b_n$ are the leading coefficients of $p(x)$ and $q(x)$ for
$f(x)=\tfrac{p(x)}{q(x)}$, $q(x)\ne0$.

Example: $f(x)=\tfrac{3x^2+2}{x^2+4x-5}$

In this case, the end behavior is $f(x)\approx\tfrac{3x^2}{x^2}=3$. This
tells us that as the inputs grow large, this function will behave like the
function $g(x)=3$, which is a horizontal line. As $x\to\pm\infty$,
$f(x)\to3$, resulting in a horizontal asymptote at $y=3$. See the graph
below. Note that this graph crosses the horizontal asymptote.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals the quantity 3x squared plus 2 over x squared plus 4x minus 5, with vertical asymptotes at x=−5 and x=1 and a horizontal asymptote at y=3.","xMin":-20,"xMax":16,"yMin":-6,"yMax":10,"unit":12,"tickLabels":true,"tickStep":2,"xTickStep":4,"rationals":[{"num":[2,0,3],"den":[-5,4,1]}],"lines":[{"x":-5,"dashed":true,"arrows":false,"label":"x = −5","labelAt":0.1},{"x":1,"dashed":true,"arrows":false,"label":"x = 1"},{"y":3,"dashed":true,"arrows":false,"label":"y = 3"}]}
{{< /apfigure >}}

Notice that, while the graph of a rational function will never cross a
**vertical asymptote**, the graph may or may not cross a horizontal or
slant asymptote. Also, although the graph of a rational function may have
many vertical asymptotes, the graph will have at most one horizontal (or
slant) asymptote.

It should be noted that, if the degree of the numerator is larger than the
degree of the denominator by more than one, the **end behavior** of the
graph will mimic the behavior of the reduced end behavior fraction. For
instance, if we had the function

$$f(x)=\tfrac{3x^5-x^2}{x+3}$$

with end behavior

$$f(x)\approx\tfrac{3x^5}{x}=3x^4,$$

the end behavior of the graph would look similar to that of an even
polynomial with a positive leading coefficient.

$$x\to\pm\infty,\ f(x)\to\infty$$

{{< callout type="info" >}}
  **Horizontal asymptotes of rational functions.** The **horizontal
  asymptote** of a rational function can be determined by looking at the
  degrees of the numerator and denominator.

  - Degree of numerator *is less than* degree of denominator: horizontal
    asymptote at $y=0$.
  - Degree of numerator *is greater than* degree of denominator by one: no
    horizontal asymptote; slant asymptote.
  - Degree of numerator *is equal to* degree of denominator: horizontal
    asymptote at ratio of leading coefficients.
{{< /callout >}}

**Example.** For the functions below, identify the horizontal or slant
asymptote.

(a) $g(x)=\tfrac{6x^3-10x}{2x^3+5x^2}$

(b) $h(x)=\tfrac{x^2-4x+1}{x+2}$

(c) $k(x)=\tfrac{x^2+4x}{x^3-8}$

**Solution.** For these solutions, we will use
$f(x)=\tfrac{p(x)}{q(x)}$, $q(x)\ne0$.

(a) $g(x)=\tfrac{6x^3-10x}{2x^3+5x^2}$: The degree of $p=$ degree of $q=3$,
so we can find the horizontal asymptote by taking the ratio of the leading
terms. There is a horizontal asymptote at $y=\tfrac{6}{2}$ or $y=3$.

(b) $h(x)=\tfrac{x^2-4x+1}{x+2}$: The degree of $p=2$ and degree of $q=1$.
Since $p>q$ by 1, there is a slant asymptote found at
$\tfrac{x^2-4x+1}{x+2}$.

$$
\begin{array}{r|rrr}
-2 & 1 & -4 & 1 \\
   &   & -2 & 12 \\
\hline
   & 1 & -6 & 13
\end{array}
$$

The quotient is $x-6$ and the remainder is 13. There is a slant asymptote at
$y=x-6$.

(c) $k(x)=\tfrac{x^2+4x}{x^3-8}$: The degree of $p=2<$ degree of $q=3$, so
there is a horizontal asymptote $y=0$.

**Example.** In the sugar concentration problem earlier, we created the
equation $C(t)=\tfrac{5+t}{100+10t}$.

Find the horizontal asymptote and interpret it in context of the problem.

**Solution.** Both the numerator and denominator are linear (degree 1).
Because the degrees are equal, there will be a horizontal asymptote at the
ratio of the leading coefficients. In the numerator, the leading term is
$t$, with coefficient 1. In the denominator, the leading term is $10t$,
with coefficient 10. The horizontal asymptote will be at the ratio of these
values:

$$t\to\infty,\ C(t)\to\tfrac{1}{10}$$

This function will have a horizontal asymptote at $y=\tfrac{1}{10}$.

This tells us that as the values of $t$ increase, the values of $C$ will
approach $\tfrac{1}{10}$. In context, this means that, as more time goes
by, the concentration of sugar in the tank will approach one-tenth of a
pound of sugar per gallon of water or $\tfrac{1}{10}$ pounds per gallon.

**Example.** Find the horizontal and vertical asymptotes of the function

$$f(x)=\tfrac{(x-2)(x+3)}{(x-1)(x+2)(x-5)}$$

**Solution.** First, note that this function has no common factors, so
there are no potential removable discontinuities.

The function will have vertical asymptotes when the denominator is zero,
causing the function to be undefined. The denominator will be zero at
$x=1,-2,\text{ and }5$, indicating vertical asymptotes at these values.

The numerator has degree 2, while the denominator has degree 3. Since the
degree of the denominator is greater than the degree of the numerator, the
denominator will grow faster than the numerator, causing the outputs to
tend towards zero as the inputs get large, and so as $x\to\pm\infty$,
$f(x)\to0$. This function will have a horizontal asymptote at $y=0$. See
the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals the quantity x−2 times x+3, over the quantity x−1 times x+2 times x−5, with vertical asymptotes at x=−2, x=1, and x=5, and a horizontal asymptote at y=0.","xMin":-6,"xMax":8,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":1,"rationals":[{"num":[-6,1,1],"den":[10,-7,-4,1]}],"lines":[{"x":-2,"dashed":true,"arrows":false,"label":"x = −2"},{"x":1,"dashed":true,"arrows":false,"label":"x = 1"},{"x":5,"dashed":true,"arrows":false,"label":"x = 5"},{"y":0,"dashed":true,"arrows":false,"label":"y = 0"}]}
{{< /apfigure >}}

{{< fillin
  question="Find the vertical asymptotes of the function $f(x)=\tfrac{(2x-1)(2x+1)}{(x-2)(x+3)}$. If there is more than one, separate them with a comma."
  answer="x=2,x=-3"
  answerMode="unordered"
  answerDisplay="$x=2$ or $x=-3$"
  hint="The two factors already sit in the denominator with no matching factor in the numerator, so each gives an asymptote."
>}}

{{< fillin
  question="Find the horizontal asymptote of that same function."
  answer="y=4"
  answerDisplay="$y=4$"
  hint="Both the numerator and denominator are degree 2; take the ratio of their leading coefficients."
>}}

{{< callout type="info" >}}
  **Intercepts of rational functions.** A rational function will have a
  $y$-intercept when the input is zero, if the function is defined at zero.
  A rational function will not have a $y$-intercept if the function is not
  defined at zero.

  Likewise, a rational function will have $x$-intercepts at the inputs that
  cause the output to be zero. Since a fraction is only equal to zero when
  the numerator is zero, $x$-intercepts can only occur when the numerator
  of the rational function is equal to zero.
{{< /callout >}}

**Example.** Find the intercepts of
$f(x)=\tfrac{(x-2)(x+3)}{(x-1)(x+2)(x-5)}$.

**Solution.** We can find the $y$-intercept by evaluating the function at
zero

$$
\begin{array}{lrcl}
& f(0) &=& \tfrac{(0-2)(0+3)}{(0-1)(0+2)(0-5)} \\[4pt]
& &=& \tfrac{-6}{10} \\[4pt]
& &=& -\tfrac{3}{5} \\[4pt]
& &=& -0.6
\end{array}
$$

The $x$-intercepts will occur when the function is equal to zero:

$$
\begin{array}{lrcl}
0=\tfrac{(x-2)(x+3)}{(x-1)(x+2)(x-5)} & \text{This is zero when the numerator is zero.} \\[4pt]
0=(x-2)(x+3) & \\[4pt]
x=2,-3 &
\end{array}
$$

The $y$-intercept is $(0,-0.6)$, the $x$-intercepts are $(2,0)$ and
$(-3,0)$. See the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same graph of f of x equals the quantity x−2 times x+3, over the quantity x−1 times x+2 times x−5, now marked with its y-intercept at (0, −0.6) and its x-intercepts at (2, 0) and (−3, 0).","xMin":-6,"xMax":8,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":1,"rationals":[{"num":[-6,1,1],"den":[10,-7,-4,1]}],"lines":[{"x":-2,"dashed":true,"arrows":false,"label":"x = −2"},{"x":1,"dashed":true,"arrows":false,"label":"x = 1"},{"x":5,"dashed":true,"arrows":false,"label":"x = 5"},{"y":0,"dashed":true,"arrows":false,"label":"y = 0"}],"points":[{"at":[0,-0.6],"label":"(0, −0.6)","labelNudge":[8,0]},{"at":[2,0],"label":"(2, 0)"},{"at":[-3,0],"label":"(−3, 0)"}]}
{{< /apfigure >}}

{{< fillin
  question="Write the reciprocal squared function, shifted right 3 units and down 4 units, as a single rational function $\tfrac{P(x)}{Q(x)}$."
  answer="\frac{-4x^2+24x-35}{x^2-6x+9}"
  answerForm="single-fraction"
  answerDisplay="$\tfrac{-4x^2+24x-35}{x^2-6x+9}$"
  hint="Start from $\tfrac{1}{(x-3)^2}-4$, give both terms the denominator $(x-3)^2$, then combine into one fraction."
>}}

{{< fillin
  question="Find the vertical asymptote of that function."
  answer="x=3"
  answerDisplay="$x=3$"
  hint="The denominator $(x-3)^2$ is zero only at $x=3$."
>}}

{{< fillin
  question="Find the horizontal asymptote of that function."
  answer="y=-4"
  answerDisplay="$y=-4$"
  hint="Numerator and denominator have the same degree; take the ratio of their leading coefficients."
>}}

## Graphing rational functions

We saw in the example above that the numerator of a rational function
reveals the $x$-intercepts of the graph, whereas the denominator reveals the
vertical asymptotes of the graph. As with polynomials, factors of the
numerator may have integer powers greater than one. Fortunately, the effect
on the shape of the graph at those intercepts is the same as we saw with
polynomials.

The vertical asymptotes associated with the factors of the denominator will
mirror one of the two toolkit reciprocal functions. When the degree of the
factor in the denominator is odd, the distinguishing characteristic is that
on one side of the vertical asymptote the graph heads towards positive
infinity, and on the other side the graph heads towards negative infinity.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The toolkit graph of y equals 1 over x on a grid from −4 to 4, with a dashed vertical asymptote at x=0. The graph heads toward negative infinity just left of the asymptote and toward positive infinity just right of it.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,1]}],"lines":[{"x":0,"dashed":true,"arrows":false,"label":"x = 0","labelSide":"right"}],"texts":[{"at":[1.1,2.6],"text":"y = 1/x","anchor":"start"}]}
{{< /apfigure >}}

When the degree of the factor in the denominator is even, the
distinguishing characteristic is that the graph either heads toward
positive infinity on both sides of the vertical asymptote or heads toward
negative infinity on both sides.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The toolkit graph of y equals 1 over x squared on a grid from −4 to 4, with a dashed vertical asymptote at x=0. The graph heads toward positive infinity on both sides of the asymptote.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,0,1]}],"lines":[{"x":0,"dashed":true,"arrows":false,"label":"x = 0","labelSide":"right"}],"texts":[{"at":[1.1,2.6],"text":"y = 1/x²","anchor":"start"}]}
{{< /apfigure >}}

For example, the graph of
$f(x)=\tfrac{(x+1)^2(x-3)}{(x+3)^2(x-2)}$ is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals the quantity x+1 squared times x−3, over the quantity x+3 squared times x−2, with vertical asymptotes at x=−3 and x=2, a horizontal asymptote at y=1, a bounce at the x-intercept (−1, 0), a crossing at the x-intercept (3, 0), and a y-intercept at (0, 1/6).","xMin":-8,"xMax":8,"yMin":-12,"yMax":18,"unit":15,"tickLabels":true,"tickStep":2,"rationals":[{"num":[-3,-5,-1,1],"den":[-18,-3,4,1]}],"lines":[{"x":-3,"dashed":true,"arrows":false,"label":"x = −3"},{"x":2,"dashed":true,"arrows":false,"label":"x = 2"},{"y":1,"dashed":true,"arrows":false,"label":"y = 1"}],"points":[{"at":[-1,0],"label":"(−1, 0)","labelNudge":[-6,-2]},{"at":[3,0],"label":"(3, 0)"},{"at":[0,0.16666666666666666]}],"texts":[{"at":[2.2,1.9],"text":"(0, 1/6)","anchor":"start"}]}
{{< /apfigure >}}

- At the $x$-intercept $x=-1$ corresponding to the $(x+1)^2$ factor of the
  numerator, the graph bounces, consistent with the quadratic nature of the
  factor.
- At the $x$-intercept $x=3$ corresponding to the $(x-3)$ factor of the
  numerator, the graph passes through the axis as we would expect from a
  linear factor.
- At the vertical asymptote $x=-3$ corresponding to the $(x+3)^2$ factor of
  the denominator, the graph heads towards positive infinity on both sides
  of the asymptote, consistent with the behavior of the function
  $f(x)=\tfrac{1}{x^2}$.
- At the vertical asymptote $x=2$, corresponding to the $(x-2)$ factor of
  the denominator, the graph heads towards positive infinity on the left
  side of the asymptote and towards negative infinity on the right side.

{{< callout type="info" >}}
  **How to:** given a rational function, sketch a graph.

  1. Evaluate the function at 0 to find the $y$-intercept.
  2. Factor the numerator and denominator.
  3. For factors in the numerator not common to the denominator, determine
     where each factor of the numerator is zero to find the $x$-intercepts.
  4. Find the multiplicities of the $x$-intercepts to determine the
     behavior of the graph at those points.
  5. For factors in the denominator, note the multiplicities of the zeros
     to determine the local behavior. For those factors not common to the
     numerator, find the vertical asymptotes by setting those factors equal
     to zero and then solve.
  6. For factors in the denominator common to factors in the numerator,
     find the removable discontinuities by setting those factors equal to 0
     and then solve.
  7. Compare the degrees of the numerator and the denominator to determine
     the horizontal or slant asymptotes.
  8. Sketch the graph.
{{< /callout >}}

**Example.** Sketch a graph of $f(x)=\tfrac{(x+2)(x-3)}{(x+1)^2(x-2)}$.

**Solution.** We can start by noting that the function is already factored,
saving us a step.

Next, we will find the intercepts. Evaluating the function at zero gives
the $y$-intercept:

$$
\begin{array}{lrcl}
& f(0) &=& \tfrac{(0+2)(0-3)}{(0+1)^2(0-2)} \\[4pt]
& &=& 3
\end{array}
$$

To find the $x$-intercepts, we determine when the numerator of the function
is zero. Setting each factor equal to zero, we find $x$-intercepts at
$x=-2$ and $x=3$. At each, the behavior will be linear (multiplicity 1),
with the graph passing through the intercept.

We have a $y$-intercept at $(0,3)$ and $x$-intercepts at $(-2,0)$ and
$(3,0)$.

To find the vertical asymptotes, we determine when the denominator is equal
to zero. This occurs when $x+1=0$ and when $x-2=0$, giving us vertical
asymptotes at $x=-1$ and $x=2$.

There are no common factors in the numerator and denominator. This means
there are no removable discontinuities.

Finally, the degree of denominator is larger than the degree of the
numerator, telling us this graph has a horizontal asymptote at $y=0$.

To sketch the graph, we might start by plotting the three intercepts.
Since the graph has no $x$-intercepts between the vertical asymptotes, and
the $y$-intercept is positive, we know the function must remain positive
between the asymptotes, letting us fill in the middle portion of the graph
as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The middle portion of the graph of f of x equals the quantity x+2 times x−3, over the quantity x+1 squared times x−2, drawn only between its two vertical asymptotes. The curve dips from the y-intercept at (0, 3) to a low point and back up, and the x-intercepts at (−2, 0) and (3, 0) are marked as isolated points beyond the drawn portion.","xMin":-5,"xMax":5,"yMin":-4,"yMax":6,"unit":24,"tickLabels":true,"tickStep":1,"rationals":[{"num":[-6,-1,1],"den":[-2,-3,0,1],"from":-1,"to":2}],"points":[{"at":[-2,0]},{"at":[3,0]}]}
{{< /apfigure >}}

The factor associated with the vertical asymptote at $x=-1$ was squared, so
we know the behavior will be the same on both sides of the asymptote. The
graph heads toward positive infinity as the inputs approach the asymptote
on the right, so the graph will head toward positive infinity on the left
as well.

For the vertical asymptote at $x=2$, the factor was not squared, so the
graph will have opposite behavior on either side of the asymptote. After
passing through the $x$-intercepts, the graph will then level off toward an
output of zero, as indicated by the horizontal asymptote.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The full graph of f of x equals the quantity x+2 times x−3, over the quantity x+1 squared times x−2, with vertical asymptotes at x=−1 and x=2 and a horizontal asymptote at y=0. Both sides of x=−1 rise toward positive infinity; the graph falls from positive infinity left of x=2 and rises from negative infinity right of x=2, then levels off toward y=0.","xMin":-5,"xMax":5,"yMin":-4,"yMax":6,"unit":24,"tickLabels":true,"tickStep":1,"rationals":[{"num":[-6,-1,1],"den":[-2,-3,0,1]}],"lines":[{"x":-1,"dashed":true,"arrows":false,"label":"x = −1","labelSide":"right"},{"x":2,"dashed":true,"arrows":false,"label":"x = 2","labelSide":"left"},{"y":0,"dashed":true,"arrows":false,"label":"y = 0"}]}
{{< /apfigure >}}

{{< fillin
  question="Given the function $f(x)=\tfrac{(x+2)^2(x-2)}{2(x-1)^2(x-3)}$, find its vertical asymptotes. If there is more than one, separate them with a comma."
  answer="x=1,x=3"
  answerMode="unordered"
  answerDisplay="$x=1$ or $x=3$"
  hint="Set each denominator factor equal to zero; neither cancels with a numerator factor."
>}}

{{< fillin
  question="Find the horizontal asymptote of that same function."
  answer="y=\frac{1}{2}"
  answerDisplay="$y=\tfrac{1}{2}$"
  hint="Numerator and denominator both have degree 3; take the ratio of their leading coefficients."
>}}

{{< fillin
  question="Find the $y$-intercept of that same function, as an ordered pair $(x,y)$."
  answer="(0,\frac{4}{3})"
  answerDisplay="$(0,\tfrac{4}{3})$"
  hint="Evaluate the function at $x=0$."
>}}

## Writing rational functions

Now that we have analyzed the equations for rational functions and how they
relate to a graph of the function, we can use information given by a graph
to write the function. A rational function written in factored form will
have an $x$-intercept where each factor of the numerator is equal to zero.
(An exception occurs in the case of a removable discontinuity.) As a
result, we can form a numerator of a function whose graph will pass through
a set of $x$-intercepts by introducing a corresponding set of factors.
Likewise, because the function will have a vertical asymptote where each
factor of the denominator is equal to zero, we can form a denominator that
will produce the vertical asymptotes by introducing a corresponding set of
factors.

{{< callout type="info" >}}
  **Writing rational functions from intercepts and asymptotes.** If a
  rational function has $x$-intercepts at $x=x_1,x_2,\ldots,x_n$, vertical
  asymptotes at $x=v_1,v_2,\ldots,v_m$, and no $x_i=$ any $v_j$, then the
  function can be written in the form:

  $$f(x)=a\tfrac{(x-x_1)^{p_1}(x-x_2)^{p_2}\cdots(x-x_n)^{p_n}}{(x-v_1)^{q_1}(x-v_2)^{q_2}\cdots(x-v_m)^{q_m}}$$

  where the powers $p_i$ or $q_i$ on each factor can be determined by the
  behavior of the graph at the corresponding intercept or asymptote, and
  the stretch factor $a$ can be determined given a value of the function
  other than the $x$-intercept or by the horizontal asymptote if it is
  nonzero.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a graph of a rational function, write the function.

  1. Determine the factors of the numerator. Examine the behavior of the
     graph at the $x$-intercepts to determine the zeroes and their
     multiplicities. (This is easy to do when finding the "simplest"
     function with small multiplicities — such as 1 or 3 — but may be
     difficult for larger multiplicities — such as 5 or 7, for example.)
  2. Determine the factors of the denominator. Examine the behavior on both
     sides of each vertical asymptote to determine the factors and their
     powers.
  3. Use any clear point on the graph to find the stretch factor.
{{< /callout >}}

**Example.** Write an equation for the rational function shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An unlabeled graph of a rational function with two vertical asymptotes and a horizontal asymptote near y=0, passing through two x-intercepts. The left branch rises from a dip near the left asymptote up through the top of the grid; the middle branch dips down through both x-intercepts to a low point and rises back up; the right branch descends steeply then levels off near the horizontal axis.","xMin":-6,"xMax":6,"yMin":-7,"yMax":5,"unit":20,"tickLabels":true,"tickStep":1,"rationals":[{"num":[-24,-4,4],"den":[12,0,-9,3]}]}
{{< /apfigure >}}

**Solution.** The graph appears to have $x$-intercepts at $x=-2$ and $x=3$.
At both, the graph passes through the intercept, suggesting linear factors.
The graph has two vertical asymptotes. The one at $x=-1$ seems to exhibit
the basic behavior similar to $\tfrac{1}{x}$, with the graph heading toward
positive infinity on one side and heading toward negative infinity on the
other. The asymptote at $x=2$ is exhibiting a behavior similar to
$\tfrac{1}{x^2}$, with the graph heading toward negative infinity on both
sides of the asymptote. See the annotated graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same rational function graph, now annotated: dashed vertical asymptotes at x=−1 and x=2, and x-intercepts marked at (−2, 0) and (3, 0).","xMin":-6,"xMax":6,"yMin":-7,"yMax":5,"unit":20,"tickLabels":true,"tickStep":1,"rationals":[{"num":[-24,-4,4],"den":[12,0,-9,3]}],"lines":[{"x":-1,"dashed":true,"arrows":false,"label":"x = −1"},{"x":2,"dashed":true,"arrows":false,"label":"x = 2"}],"points":[{"at":[-2,0],"label":"(−2, 0)"},{"at":[3,0],"label":"(3, 0)"}]}
{{< /apfigure >}}

We can use this information to write a function of the form

$$f(x)=a\tfrac{(x+2)(x-3)}{(x+1)(x-2)^2}$$

To find the stretch factor, we can use another clear point on the graph,
such as the $y$-intercept $(0,-2)$.

$$
\begin{array}{lrcl}
& -2 &=& a\tfrac{(0+2)(0-3)}{(0+1)(0-2)^2} \\[4pt]
& -2 &=& a\tfrac{-6}{4} \\[4pt]
& a &=& \tfrac{-8}{-6}=\tfrac{4}{3}
\end{array}
$$

This gives us a final function of
$f(x)=\tfrac{4(x+2)(x-3)}{3(x+1)(x-2)^2}$.

## Key equations

| Rational function | $f(x)=\tfrac{P(x)}{Q(x)}=\tfrac{a_px^p+a_{p-1}x^{p-1}+\ldots+a_1x+a_0}{b_qx^q+b_{q-1}x^{q-1}+\ldots+b_1x+b_0},\ Q(x)\ne0$ |
| :--- | :--- |

## Key concepts

- We can use arrow notation to describe local behavior and end behavior of
  the toolkit functions $f(x)=\tfrac{1}{x}$ and $f(x)=\tfrac{1}{x^2}$.
- A function that levels off at a horizontal value has a horizontal
  asymptote. A function can have more than one vertical asymptote.
- Application problems involving rates and concentrations often involve
  rational functions.
- The domain of a rational function includes all real numbers except those
  that cause the denominator to equal zero.
- The vertical asymptotes of a rational function will occur where the
  denominator of the function is equal to zero and the numerator is not
  zero.
- A removable discontinuity might occur in the graph of a rational function
  if an input causes both numerator and denominator to be zero.
- A rational function's end behavior will mirror that of the ratio of the
  leading terms of the numerator and denominator functions.
- Graph rational functions by finding the intercepts, behavior at the
  intercepts and asymptotes, and end behavior.
- If a rational function has $x$-intercepts at $x=x_1,x_2,\ldots,x_n$,
  vertical asymptotes at $x=v_1,v_2,\ldots,v_m$, and no $x_i=$ any $v_j$,
  then the function can be written in the form
  $f(x)=a\tfrac{(x-x_1)^{p_1}(x-x_2)^{p_2}\cdots(x-x_n)^{p_n}}{(x-v_1)^{q_1}(x-v_2)^{q_2}\cdots(x-v_m)^{q_m}}$.

## Practice

### Use arrow notation

{{< multiplechoice
  question="Which statement correctly describes the end behavior of $f(x)=\tfrac{x}{2x+1}$?"
  answer="As $x\to\pm\infty$, $f(x)\to\tfrac{1}{2}$"
  hint="Divide the leading term of the numerator by the leading term of the denominator."
>}}
As $x\to\pm\infty$, $f(x)\to0$
As $x\to\pm\infty$, $f(x)\to\tfrac{1}{2}$
As $x\to\pm\infty$, $f(x)\to2$
As $x\to\pm\infty$, $f(x)\to-\tfrac{1}{2}$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which statement correctly describes the local behavior of that same function, $f(x)=\tfrac{x}{2x+1}$, near its vertical asymptote?"
  answer="As $x\to-\tfrac{1}{2}^{-}$, $f(x)\to\infty$, and as $x\to-\tfrac{1}{2}^{+}$, $f(x)\to-\infty$"
  hint="The vertical asymptote is at $x=-\tfrac{1}{2}$; check the sign of the numerator there and how the denominator's sign changes on each side."
>}}
As $x\to-\tfrac{1}{2}^{-}$, $f(x)\to\infty$, and as $x\to-\tfrac{1}{2}^{+}$, $f(x)\to-\infty$
As $x\to-\tfrac{1}{2}^{-}$, $f(x)\to-\infty$, and as $x\to-\tfrac{1}{2}^{+}$, $f(x)\to\infty$
As $x\to-\tfrac{1}{2}^{-}$, $f(x)\to\infty$, and as $x\to-\tfrac{1}{2}^{+}$, $f(x)\to\infty$
As $x\to-\tfrac{1}{2}^{-}$, $f(x)\to-\infty$, and as $x\to-\tfrac{1}{2}^{+}$, $f(x)\to-\infty$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which statement correctly describes the end behavior of $f(x)=\tfrac{-2x}{x-6}$?"
  answer="As $x\to\pm\infty$, $f(x)\to-2$"
  hint="Divide the leading term of the numerator by the leading term of the denominator."
>}}
As $x\to\pm\infty$, $f(x)\to0$
As $x\to\pm\infty$, $f(x)\to2$
As $x\to\pm\infty$, $f(x)\to6$
As $x\to\pm\infty$, $f(x)\to-2$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which statement correctly describes the local behavior of that same function, $f(x)=\tfrac{-2x}{x-6}$, near its vertical asymptote?"
  answer="As $x\to6^{-}$, $f(x)\to\infty$, and as $x\to6^{+}$, $f(x)\to-\infty$"
  hint="The vertical asymptote is at $x=6$; the numerator there is negative, so check how the denominator's sign changes on each side."
>}}
As $x\to6^{-}$, $f(x)\to\infty$, and as $x\to6^{+}$, $f(x)\to-\infty$
As $x\to6^{-}$, $f(x)\to-\infty$, and as $x\to6^{+}$, $f(x)\to\infty$
As $x\to6^{-}$, $f(x)\to\infty$, and as $x\to6^{+}$, $f(x)\to\infty$
As $x\to6^{-}$, $f(x)\to-\infty$, and as $x\to6^{+}$, $f(x)\to-\infty$
{{< /multiplechoice >}}

### Solve applied problems involving rational functions

{{< fillin
  question="In the refugee camp hospital, a large mixing tank currently contains 300 gallons of water, into which 8 pounds of sugar have been mixed. A tap opens, pouring 20 gallons of water per minute into the tank at the same time sugar is poured into the tank at a rate of 2 pounds per minute. Find the rational function $C(t)$ giving the concentration (pounds per gallon) of sugar in the tank after $t$ minutes."
  answer="\frac{8+2t}{300+20t}"
  answerDisplay="$C(t)=\tfrac{8+2t}{300+20t}$"
  hint="Write the pounds of sugar and gallons of water as linear functions of $t$, then divide sugar by water."
>}}

{{< fillin
  question="The concentration $C$ of a drug in a patient's bloodstream $t$ hours after injection is given by $C(t)=\tfrac{100t}{2t^2+75}$. Approximate, to the nearest hundredth, the number of hours at which the concentration is highest."
  answer="6.12"
  answerDisplay="$t\approx6.12$ hours"
  hint="Graph or tabulate $C(t)$ and locate its peak; the maximum occurs at $t=\sqrt{37.5}$."
>}}

### Find the domains of rational functions

{{< fillin
  question="Find the domain of $f(x)=\tfrac{x+1}{x^2-1}$. Write the domain in interval notation."
  answer="(-\infty,-1)\cup(-1,1)\cup(1,\infty)"
  answerDisplay="$(-\infty,-1)\cup(-1,1)\cup(1,\infty)$"
  hint="The denominator factors as $(x-1)(x+1)$; remove both zeros from the real line."
>}}

{{< fillin
  question="Find the domain of $f(x)=\tfrac{x^2+4x-3}{x^4-5x^2+4}$. Write the domain in interval notation."
  answer="(-\infty,-2)\cup(-2,-1)\cup(-1,1)\cup(1,2)\cup(2,\infty)"
  answerDisplay="$(-\infty,-2)\cup(-2,-1)\cup(-1,1)\cup(1,2)\cup(2,\infty)$"
  hint="The denominator factors as $(x^2-1)(x^2-4)$; remove all four zeros from the real line."
>}}

### Identify vertical asymptotes

{{< fillin
  question="Find the vertical asymptote of $f(x)=\tfrac{2}{5x+2}$."
  answer="x=-\frac{2}{5}"
  answerDisplay="$x=-\tfrac{2}{5}$"
  hint="Set the denominator equal to zero and solve for $x$."
>}}

{{< fillin
  question="Find the vertical asymptotes of $f(x)=\tfrac{x}{x^2+5x-36}$. If there is more than one, separate them with a comma."
  answer="x=4,x=-9"
  answerMode="unordered"
  answerDisplay="$x=4$ or $x=-9$"
  hint="Factor the denominator as $(x-4)(x+9)$; neither factor cancels with the numerator."
>}}

### Identify horizontal asymptotes

{{< fillin
  question="Find the horizontal asymptote of $f(x)=\tfrac{3x-4}{x^3-16x}$."
  answer="y=0"
  answerDisplay="$y=0$"
  hint="Compare the degree of the numerator to the degree of the denominator."
>}}

{{< fillin
  question="Find the horizontal asymptote of $f(x)=\tfrac{4-2x}{3x-1}$."
  answer="y=-\frac{2}{3}"
  answerDisplay="$y=-\tfrac{2}{3}$"
  hint="Numerator and denominator both have degree 1; take the ratio of their leading coefficients."
>}}

### Graph rational functions

{{< fillin
  question="Find the vertical asymptote of $a(x)=\tfrac{x^2+2x-3}{x^2-1}$."
  answer="x=-1"
  answerDisplay="$x=-1$"
  hint="Factor both numerator and denominator, cancel the common factor, then find where the reduced denominator is zero."
>}}

{{< fillin
  question="Find the horizontal asymptote of that same function, $a(x)=\tfrac{x^2+2x-3}{x^2-1}$."
  answer="y=1"
  answerDisplay="$y=1$"
  hint="Numerator and denominator have the same degree; take the ratio of their leading coefficients."
>}}

{{< fillin
  question="That same function, $a(x)=\tfrac{x^2+2x-3}{x^2-1}$, has a removable discontinuity. Give it as an ordered pair $(x,y)$."
  answer="(1,2)"
  answerDisplay="$(1,2)$"
  hint="The factor $x-1$ cancels; evaluate the reduced function at $x=1$."
>}}

{{< fillin
  question="Find the $y$-intercept of that same function, $a(x)=\tfrac{x^2+2x-3}{x^2-1}$, as an ordered pair $(x,y)$."
  answer="(0,3)"
  answerDisplay="$(0,3)$"
  hint="Evaluate the function at $x=0$."
>}}

{{< fillin
  question="Find the vertical asymptotes of $w(x)=\tfrac{(x-1)(x+3)(x-5)}{(x+2)^2(x-4)}$. If there is more than one, separate them with a comma."
  answer="x=-2,x=4"
  answerMode="unordered"
  answerDisplay="$x=-2$ or $x=4$"
  hint="Neither denominator factor, $(x+2)^2$ or $(x-4)$, matches a numerator factor."
>}}

{{< fillin
  question="Find the horizontal asymptote of that same function, $w(x)=\tfrac{(x-1)(x+3)(x-5)}{(x+2)^2(x-4)}$."
  answer="y=1"
  answerDisplay="$y=1$"
  hint="Numerator and denominator both have degree 3; take the ratio of their leading coefficients."
>}}

{{< fillin
  question="Find the $y$-intercept of that same function, $w(x)=\tfrac{(x-1)(x+3)(x-5)}{(x+2)^2(x-4)}$, as an ordered pair $(x,y)$."
  answer="(0,-\frac{15}{16})"
  answerDisplay="$(0,-\tfrac{15}{16})$"
  hint="Evaluate the function at $x=0$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 3.7: Rational
Functions](https://openstax.org/books/precalculus-2e/pages/3-7-rational-functions)
by Jay Abramson and OpenStax, © OpenStax, licensed under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access
the original for free at
[openstax.org](https://openstax.org/details/books/precalculus-2e). Changes:
recreated every graph as an accessible inline SVG built from the `rationals`
num/den primitive, matching the source's window, asymptotes (dashed lines),
marked intercepts, and open-circle holes — the toolkit pair $f(x)=\tfrac{1}{x}$
and $f(x)=\tfrac{1}{x^2}$; four framings of $f(x)=\tfrac{1}{x}$ itself (its
local-behavior arrows, its vertical asymptote alone, its end-behavior
arrows again, and both asymptotes together); $f(x)=\tfrac{1}{x-2}+4$;
$f(x)=\tfrac{3x+7}{x+2}$; $f(x)=\tfrac{x+3}{x^2-9}$ (Example 4's Analysis
figure, deliberately left without its hole marked, matching the source's own
staging); $k(x)=\tfrac{5+2x^2}{2-x-x^2}$; the removable-discontinuity
walkthrough $f(x)=\tfrac{x^2-1}{x^2-2x-3}$; $k(x)=\tfrac{x-2}{x^2-4}$; the
three horizontal/slant-asymptote Case examples; $f(x)=\tfrac{(x-2)(x+3)}{(x-1)(x+2)(x-5)}$
plain and with its intercepts marked; the odd- and even-multiplicity toolkit
pair; $f(x)=\tfrac{(x+1)^2(x-3)}{(x+3)^2(x-2)}$; the middle-portion and full
graphs of $f(x)=\tfrac{(x+2)(x-3)}{(x+1)^2(x-2)}$; and the unlabeled and
annotated mystery graph of $f(x)=\tfrac{4(x+2)(x-3)}{3(x+1)(x-2)^2}$; omitted
the two graphs embedded only in the print answer key (the reciprocal-squared
Try It and the closing "describe its behavior and sketch" Try It), since
displaying either would hand a learner the answer to its own interactive
question, and converted both Try Its into fillin components about their
asymptotes, intercept, and removable discontinuity instead; omitted the
"Media" callout's four external video links, which carry no transcribable
mathematics; converted every retained "Try It" into interactive `fillin` or
`multiplechoice` components, using multiple choice for every arrow-notation
end-/local-behavior judgment (not gradable as free-response math), an
ordered pair with default ordered grading for every removable-discontinuity
hole, `answerMode="unordered"` for every multi-asymptote list, and
interval-notation answers for every domain ask; trimmed the two richest Try
Its (the rewritten reciprocal-squared-shift Try It and the closing "describe
and sketch" Try It) to three sequential sub-questions apiece, dropping their
intercept sub-asks, to respect the two-to-three-question cap on an in-page
practice set; and adapted 12 selected end-of-section exercises — two
local/end-behavior pairs, two applied concentration/optimization problems,
two domain-in-interval-notation problems, two vertical-asymptote problems,
two horizontal-asymptote problems, and two multi-fact "find the domain,
asymptotes, and intercepts" problems (split into their separate facts, the
way a multipart source item is expanded) — into 19 interactive components in
a closing Practice block, one group per objective.</small>
