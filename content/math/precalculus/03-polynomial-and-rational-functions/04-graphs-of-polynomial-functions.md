---
title: Graphs of Polynomial Functions
description: >-
  Recognizing the graphs of polynomial functions, finding zeros by factoring,
  reading multiplicity and end behavior, relating degree to turning points,
  sketching and writing polynomial formulas from graphs, and applying the
  Intermediate Value Theorem — adapted from OpenStax Precalculus 2e, Section
  3.4.
source_section: "3.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Recognize characteristics of graphs of polynomial functions
- Use factoring to find zeros of polynomial functions
- Identify zeros and their multiplicities
- Determine end behavior
- Understand the relationship between degree and turning points
- Graph polynomial functions
- Use the Intermediate Value Theorem
{{< /callout >}}

The revenue in millions of dollars for a fictional cable company from 2006
through 2013 is shown below.

| Year | 2006 | 2007 | 2008 | 2009 | 2010 | 2011 | 2012 | 2013 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Revenues | 52.4 | 52.8 | 51.2 | 49.5 | 48.6 | 48.6 | 48.7 | 47.1 |

The revenue can be modeled by the polynomial function

$$R(t)=-0.037t^{4}+1.414t^{3}-19.777t^{2}+118.696t-205.332$$

where $R$ represents the revenue in millions of dollars and $t$ represents
the year, with $t=6$ corresponding to 2006. Over which intervals is the
revenue for the company increasing? Over which intervals is the revenue for
the company decreasing? These questions, along with many others, can be
answered by examining the graph of the polynomial function. We have already
explored the local behavior of quadratics, a special case of polynomials. In
this section we will explore the local behavior of polynomials in general.

## Recognizing characteristics of graphs of polynomial functions

Polynomial functions of degree 2 or more have graphs that do not have sharp
corners; recall that these types of graphs are called smooth curves.
Polynomial functions also display graphs that have no breaks. Curves with no
breaks are called continuous. The figures below show a graph that represents
a polynomial function and a graph that represents a function that is not a
polynomial.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A smooth, continuous curve labelled f, falling from the upper left, rising to a local maximum, falling to a local minimum, then rising steeply to the upper right with no breaks or sharp corners.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","cubics":[{"a":0.5,"c":-3,"arrows":true}],"texts":[{"at":[3.3,3.6],"text":"f","anchor":"start"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A curve labelled f that matches the polynomial curve on the left but ends in an open circle before a gap; the graph resumes at a closed dot at a different height and rises to the upper right, showing a break in the graph.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","cubics":[{"a":0.5,"c":-3,"from":-4,"to":-0.3,"arrows":"start"}],"segments":[{"from":[0.3,1.4],"to":[3.6,3.9],"arrows":"end"}],"points":[{"at":[-0.3,0.89],"open":true},{"at":[0.3,1.4]}],"texts":[{"at":[3.3,3.5],"text":"f","anchor":"start"}]}
{{< /apfigure >}}

**Example.** Which of the four graphs below represents a polynomial
function?

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel f: a smooth continuous curve, falling from the upper left, rising to a local maximum, falling to a local minimum, and rising steeply to the upper right.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":24,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","cubics":[{"a":0.4,"c":-2,"arrows":true}],"texts":[{"at":[3.3,3.9],"text":"f","anchor":"start"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel g: a V-shaped graph with a sharp corner at the origin, one ray falling to the upper left and the other rising to the upper right.","xMin":-4,"xMax":4,"yMin":-1,"yMax":4,"unit":24,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","polylines":[{"through":[[-3,3],[0,0],[3,3]],"arrows":true}],"texts":[{"at":[3.3,3.4],"text":"g","anchor":"start"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel h: a smooth continuous curve rising from the upper left, falling to a local minimum, rising to a local maximum, then falling steeply to the lower right.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":24,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","cubics":[{"a":-0.4,"c":2,"arrows":true}],"texts":[{"at":[3.3,-3.6],"text":"h","anchor":"start"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel k: a curve that falls from the upper left toward a hollow circle, then resumes from a solid dot at a lower height, dips to a local minimum, and rises steeply to the upper right, showing a break in the graph.","xMin":-4,"xMax":4,"yMin":-2,"yMax":6,"unit":24,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","quadratics":[{"a":-0.4,"c":3,"from":-3.6,"to":-1,"arrows":"start"},{"a":0.5,"b":-0.3,"c":0.2,"from":-0.6,"to":3.6,"arrows":"end"}],"points":[{"at":[-1,2.6],"open":true},{"at":[-0.6,0.56]}],"texts":[{"at":[3,5.6],"text":"k","anchor":"start"}]}
{{< /apfigure >}}

**Solution.** The graphs of $f$ and $h$ are graphs of polynomial functions.
They are smooth and **continuous**.

The graphs of $g$ and $k$ are graphs of functions that are not polynomials.
The graph of function $g$ has a sharp corner. The graph of function $k$ is
not continuous.

{{< callout type="info" >}}
**Q&A.** *Do all polynomial functions have as their domain all real
numbers?*

Yes. Any real number is a valid input for a polynomial function.
{{< /callout >}}

## Using factoring to find zeros of polynomial functions

Recall that if $f$ is a polynomial function, the values of $x$ for which
$f(x)=0$ are called **zeros** of $f$. If the equation of the polynomial
function can be factored, we can set each factor equal to zero and solve for
the zeros.

We can use this method to find $x$-intercepts because at the $x$-intercepts
we find the input values when the output value is zero. For general
polynomials, this can be a challenging prospect. While quadratics can be
solved using the relatively simple quadratic formula, the corresponding
formulas for cubic and fourth-degree polynomials are not simple enough to
remember, and formulas do not exist for general higher-degree polynomials.
Consequently, we will limit ourselves to three cases in this section:

- The polynomial can be factored using known methods: greatest common factor
  and trinomial factoring.
- The polynomial is given in factored form.
- Technology is used to determine the intercepts.

{{< callout type="info" >}}
**How To: given a polynomial function $f$, find the $x$-intercepts by
factoring.**

1. Set $f(x)=0$.
2. If the polynomial function is not given in factored form:
   1. Factor out any common monomial factors.
   2. Factor any factorable binomials or trinomials.
3. Set each factor equal to zero and solve to find the $x$-intercepts.
{{< /callout >}}

**Example.** Find the $x$-intercepts of $f(x)=x^{6}-3x^{4}+2x^{2}$.

**Solution.** We can attempt to factor this polynomial to find solutions for
$f(x)=0$.

$$
\begin{array}{lrcl}
& x^{6}-3x^{4}+2x^{2} &=& 0 \\[4pt]
\text{Factor out the greatest common factor.} & x^{2}(x^{4}-3x^{2}+2) &=& 0 \\[4pt]
\text{Factor the trinomial.} & x^{2}(x^{2}-1)(x^{2}-2) &=& 0
\end{array}
$$

Set each factor equal to zero.

$$
\begin{array}{rclcrclcrcl}
x^{2} &=& 0 & \text{or} & x^{2}-1 &=& 0 & \text{or} & x^{2}-2 &=& 0 \\[4pt]
x &=& 0 & & x^{2} &=& 1 & & x^{2} &=& 2 \\[4pt]
& & & & x &=& \pm 1 & & x &=& \pm\sqrt{2}
\end{array}
$$

This gives us five $x$-intercepts: $(0,0)$, $(1,0)$, $(-1,0)$,
$(\sqrt{2},0)$, and $(-\sqrt{2},0)$. We can see that this is an even
function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = x to the sixth minus 3x to the fourth plus 2x squared, with x-intercepts at (-square root of 2, 0), (-1, 0), (0, 0), (1, 0), and (square root of 2, 0), rising steeply on both ends.","xMin":-2.2,"xMax":2.2,"yMin":-1,"yMax":3,"unit":70,"tickLabels":true,"xTickStep":1,"yTickStep":1,"polynomials":[{"coeffs":[0,0,2,0,-3,0,1],"arrows":true}],"points":[{"at":[-1.41421,0],"label":"(−√2, 0)"},{"at":[-1,0],"label":"(−1, 0)"},{"at":[0,0],"label":"(0, 0)"},{"at":[1,0],"label":"(1, 0)"},{"at":[1.41421,0],"label":"(√2, 0)"}],"texts":[{"at":[1.9,2.6],"text":"f","anchor":"start"}]}
{{< /apfigure >}}

**Example.** Find the $x$-intercepts of $f(x)=x^{3}-5x^{2}-x+5$.

**Solution.** Find solutions for $f(x)=0$ by factoring.

$$
\begin{array}{lrcl}
& x^{3}-5x^{2}-x+5 &=& 0 \\[4pt]
\text{Factor by grouping.} & x^{2}(x-5)-(x-5) &=& 0 \\[4pt]
\text{Factor out the common factor.} & (x^{2}-1)(x-5) &=& 0 \\[4pt]
\text{Factor the difference of squares.} & (x+1)(x-1)(x-5) &=& 0
\end{array}
$$

$$
\begin{array}{rclcrclcrcl}
x+1 &=& 0 & \text{or} & x-1 &=& 0 & \text{or} & x-5 &=& 0 \\[4pt]
x &=& -1 & & x &=& 1 & & x &=& 5
\end{array}
$$

There are three $x$-intercepts: $(-1,0)$, $(1,0)$, and $(5,0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = x cubed minus 5x squared minus x plus 5, crossing the x-axis at (-1, 0), (1, 0), and (5, 0), falling from the upper left, dipping down, rising through a hump, then falling and rising steeply to the upper right.","xMin":-6,"xMax":6,"yMin":-18,"yMax":18,"xUnit":20,"yUnit":9,"tickLabels":true,"xTickStep":2,"yTickStep":6,"polynomials":[{"coeffs":[5,-1,-5,1],"arrows":true}],"points":[{"at":[-1,0]},{"at":[1,0]},{"at":[5,0]}],"texts":[{"at":[-0.3,9],"text":"f(x) = x³ − 5x² − x + 5","anchor":"end"}]}
{{< /apfigure >}}

**Example.** Find the $y$- and $x$-intercepts of $g(x)=(x-2)^{2}(2x+3)$.

**Solution.** The $y$-intercept can be found by evaluating $g(0)$.

$$
\begin{array}{lrcl}
g(0) &=& (0-2)^{2}(2(0)+3) \\[4pt]
&=& 12
\end{array}
$$

So the $y$-intercept is $(0,12)$.

The $x$-intercepts can be found by solving $g(x)=0$.

$$(x-2)^{2}(2x+3)=0$$

$$
\begin{array}{rclcccrcl}
(x-2)^{2} &=& 0 & & & & (2x+3) &=& 0 \\[4pt]
x-2 &=& 0 & \text{or} & & & x &=& -\tfrac{3}{2} \\[4pt]
x &=& 2
\end{array}
$$

So the $x$-intercepts are $(2,0)$ and $\left(-\tfrac{3}{2},0\right)$.

**Analysis.** We can always check that our answers are reasonable by using a
graphing calculator to graph the polynomial, shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of g(x) = (x minus 2) squared times (2x plus 3), with y-intercept (0, 12), touching the x-axis at (2, 0) and crossing at (-1.5, 0), falling from the upper left and rising to the upper right.","xMin":-4,"xMax":4,"yMin":-3,"yMax":15,"xUnit":24,"yUnit":16,"tickLabels":true,"xTickStep":1,"yTickStep":3,"polynomials":[{"coeffs":[12,-4,-5,2],"arrows":true}],"points":[{"at":[0,12],"label":"(0, 12)","labelSide":"nw"},{"at":[-1.5,0],"label":"(−1.5, 0)"},{"at":[2,0],"label":"(2, 0)"}],"texts":[{"at":[-0.2,13.5],"text":"g(x) = (x − 2)²(2x + 3)","anchor":"end"}]}
{{< /apfigure >}}

**Example.** Find the $x$-intercepts of $h(x)=x^{3}+4x^{2}+x-6$.

**Solution.** This polynomial is not in factored form, has no common
factors, and does not appear to be factorable using techniques previously
discussed. Fortunately, we can use technology to find the intercepts. Keep
in mind that some values make graphing difficult by hand. In these cases, we
can take advantage of graphing utilities.

Looking at the graph of this function, shown below, it appears that there
are $x$-intercepts at $x=-3$, $-2$, and $1$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of h(x) = x cubed plus 4x squared plus x minus 6, crossing the x-axis at (-3, 0), (-2, 0), and (1, 0), rising from the lower left, dipping down, then rising steeply to the upper right.","xMin":-4.5,"xMax":4.5,"yMin":-8,"yMax":2,"unit":24,"tickLabels":true,"xTickStep":2,"yTickStep":2,"polynomials":[{"coeffs":[-6,1,4,1],"arrows":true}],"points":[{"at":[-3,0]},{"at":[-2,0]},{"at":[1,0]}],"texts":[{"at":[1.2,1.4],"text":"h(x) = x³ + 4x² + x − 6","anchor":"start"}]}
{{< /apfigure >}}

We can check whether these are correct by substituting these values for $x$
and verifying that $h(-3)=h(-2)=h(1)=0$.

$$
\begin{array}{rclclcl}
h(-3) &=& (-3)^{3}+4(-3)^{2}+(-3)-6 &=& -27+36-3-6 &=& 0 \\[4pt]
h(-2) &=& (-2)^{3}+4(-2)^{2}+(-2)-6 &=& -8+16-2-6 &=& 0 \\[4pt]
h(1) &=& (1)^{3}+4(1)^{2}+(1)-6 &=& 1+4+1-6 &=& 0
\end{array}
$$

Each $x$-intercept corresponds to a zero of the polynomial function and each
zero yields a factor, so we can now write the polynomial in factored form.

$$
\begin{array}{lrcl}
h(x) &=& x^{3}+4x^{2}+x-6 \\[4pt]
&=& (x+3)(x+2)(x-1)
\end{array}
$$

{{< fillin
  question="Find the x-intercepts of $f(x)=x^4-19x^2+30x$. Enter all of them, separated by commas."
  answer="0,-5,2,3"
  answerMode="unordered"
  answerDisplay="$x=0,-5,2,3$"
  hint="Factor out the greatest common factor first, then factor the remaining cubic by testing small integer values."
>}}

## Identifying zeros and their multiplicities

Graphs behave differently at various $x$-intercepts. Sometimes the graph
will cross over the horizontal axis at an intercept. Other times the graph
will touch the horizontal axis and bounce off.

Suppose, for example, we graph the function

$$f(x)=(x+3)(x-2)^{2}(x+1)^{3}$$

Notice in the figure below that the behavior of the function at each of the
$x$-intercepts is different.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = (x plus 3)(x minus 2) squared (x plus 1) cubed, crossing the x-axis at x = -3, flattening through x = -1, and touching at x = 2.","xMin":-4,"xMax":3,"yMin":-40,"yMax":30,"xUnit":32,"yUnit":5.2,"tickLabels":true,"xTickStep":1,"yTickStep":10,"polynomials":[{"coeffs":[12,28,11,-14,-8,2,1],"arrows":true}]}
{{< /apfigure >}}

The $x$-intercept $-3$ is the solution of equation $(x+3)=0$. The graph
passes directly through the $x$-intercept at $x=-3$. The factor is linear
(has a degree of 1), so the behavior near the intercept is like that of a
line — it passes directly through the intercept. We call this a single zero
because the zero corresponds to a single factor of the function.

The $x$-intercept $2$ is the repeated solution of equation $(x-2)^{2}=0$.
The graph touches the axis at the intercept and changes direction. The
factor is quadratic (degree 2), so the behavior near the intercept is like
that of a quadratic — it bounces off of the horizontal axis at the
intercept.

$$(x-2)^{2}=(x-2)(x-2)$$

The factor is repeated, that is, the factor $(x-2)$ appears twice. The
number of times a given factor appears in the factored form of the equation
of a polynomial is called the **multiplicity**. The zero associated with
this factor, $x=2$, has multiplicity 2 because the factor $(x-2)$ occurs
twice.

The $x$-intercept $-1$ is the repeated solution of factor $(x+1)^{3}=0$. The
graph passes through the axis at the intercept, but flattens out a bit
first. This factor is cubic (degree 3), so the behavior near the intercept
is like that of a cubic — with the same S-shape near the intercept as the
toolkit function $f(x)=x^{3}$. We call this a triple zero, or a zero with
multiplicity 3.

For zeros with even multiplicities, the graphs **touch** or are tangent to
the $x$-axis. For zeros with odd multiplicities, the graphs **cross** or
intersect the $x$-axis. The three figures below show examples of graphs of
polynomial functions with multiplicity 1, 2, and 3.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A line rising from lower left to upper right through the origin, illustrating a single zero.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"unit":30,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","lines":[{"slope":1,"intercept":0,"label":"p = 1","labelAt":0.85}]}
{{< /apfigure >}}

**Single zero.**

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola touching the x-axis at the origin, illustrating a zero of multiplicity 2.","xMin":-3,"xMax":3,"yMin":-1,"yMax":5,"unit":30,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","quadratics":[{"a":0.5,"b":0,"c":0,"arrows":true}],"texts":[{"at":[1.6,4.3],"text":"p = 2","anchor":"start"}]}
{{< /apfigure >}}

**Zero with multiplicity 2.**

{{< apfigure kind="graph" >}}
{"ariaLabel":"A cubic curve that flattens as it passes through the origin, illustrating a zero of multiplicity 3.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"unit":30,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","cubics":[{"a":0.35,"arrows":true}],"texts":[{"at":[2.15,2.4],"text":"p = 3","anchor":"start"}]}
{{< /apfigure >}}

**Zero with multiplicity 3.**

For higher even powers, such as 4, 6, and 8, the graph will still touch and
bounce off of the horizontal axis but, for each increasing even power, the
graph will appear flatter as it approaches and leaves the $x$-axis.

For higher odd powers, such as 5, 7, and 9, the graph will still cross
through the horizontal axis, but for each increasing odd power, the graph
will appear flatter as it approaches and leaves the $x$-axis.

{{< callout type="info" >}}
**Graphical behavior of polynomials at $x$-intercepts.** If a polynomial
contains a factor of the form $(x-h)^{p}$, the behavior near the
$x$-intercept $h$ is determined by the power $p$. We say that $x=h$ is a
zero of **multiplicity** $p$.

The graph of a polynomial function will touch the $x$-axis at zeros with
even multiplicities. The graph will cross the $x$-axis at zeros with odd
multiplicities.

The sum of the multiplicities is the degree of the polynomial function.
{{< /callout >}}

{{< callout type="info" >}}
**How To: given a graph of a polynomial function of degree $n$, identify the
zeros and their multiplicities.**

1. If the graph crosses the $x$-axis and appears almost linear at the
   intercept, it is a single zero.
2. If the graph touches the $x$-axis and bounces off of the axis, it is a
   zero with even multiplicity.
3. If the graph crosses the $x$-axis at a zero, it is a zero with odd
   multiplicity.
4. The sum of the multiplicities is $n$.
{{< /callout >}}

**Example.** Use the graph of
the degree-6 function below to identify its zeros and their possible
multiplicities.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A degree-6 polynomial graph that touches the x-axis at x = -3, crosses almost linearly at x = -1, and crosses while flattening at x = 4, rising steeply on both ends.","xMin":-6,"xMax":6,"yMin":-240,"yMax":240,"xUnit":21,"yUnit":0.8,"tickLabels":true,"xTickStep":2,"yTickStep":80,"polynomials":[{"coeffs":[-86.4,-79.2,24.6,15.15,-3.15,-0.75,0.15],"arrows":true}]}
{{< /apfigure >}}

**Solution.** The polynomial function is of degree $n$. The sum of the
multiplicities must be $n$.

Starting from the left, the first zero occurs at $x=-3$. The graph touches
the $x$-axis, so the multiplicity of the zero must be even. The zero of $-3$
has multiplicity 2.

The next zero occurs at $x=-1$. The graph looks almost linear at this
point. This is a single zero of multiplicity 1.

The last zero occurs at $x=4$. The graph crosses the $x$-axis, so the
multiplicity of the zero must be odd. We know that the multiplicity is
likely 3 and that the sum of the multiplicities is likely 6.

{{< callout type="info" >}}
  **Source note.** OpenStax's current source calls this "the function of
  degree 9", but its own printed answer gives multiplicities $3$, $2$, and
  $2$, which sum to $7$, and the figure's description calls it degree $6$ —
  three different degrees for one graph. The printed edition of the book, and
  every reading consistent with the answer and the drawn curve, says $7$, so
  this page says $7$; the mathematics is unchanged.
{{< /callout >}}

{{< multiplechoice
  question="The graph below shows a degree-7 polynomial function. What are its zeros and their multiplicities?"
  answer="x=-5 with multiplicity 3, x=-1 with multiplicity 2, and x=3 with multiplicity 2"
  hint="A crossing zero that flattens out has odd multiplicity of at least 3; a zero where the graph only touches the axis has even multiplicity."
>}}
x=-5 with multiplicity 3, x=-1 with multiplicity 2, and x=3 with multiplicity 2
x=-5 with multiplicity 2, x=-1 with multiplicity 3, and x=3 with multiplicity 2
x=-5, x=-1, and x=3, each with multiplicity 1
x=-5 with multiplicity 1, x=-1 with multiplicity 2, and x=3 with multiplicity 4
{{< /multiplechoice >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A degree-7 polynomial graph that crosses while flattening at x = -5, touches the x-axis at x = -1, and touches again at x = 3, falling to the lower left and rising steeply to the upper right.","xMin":-6,"xMax":4,"yMin":-45,"yMax":75,"xUnit":26,"yUnit":3.2,"tickLabels":true,"xTickStep":1,"yTickStep":15,"polynomials":[{"coeffs":[22.5,43.5,15.7,-9.22,-3.86,0.26,0.22,0.02],"arrows":true}]}
{{< /apfigure >}}

## Determining end behavior

As we have already learned, the behavior of a graph of a polynomial function
of the form

$$f(x)=a_{n}x^{n}+a_{n-1}x^{n-1}+\dots+a_{1}x+a_{0}$$

will either ultimately rise or fall as $x$ increases without bound and will
either rise or fall as $x$ decreases without bound. This is because for very
large inputs, say 100 or 1,000, the leading term dominates the size of the
output. The same is true for very small inputs, say $-100$ or $-1{,}000$.

Recall that we call this behavior the **end behavior** of a function. As we
pointed out when discussing quadratic equations, when the leading term of a
polynomial function, $a_{n}x^{n}$, is an even power function, as $x$
increases or decreases without bound, $f(x)$ increases without bound. When
the leading term is an odd power function, as $x$ decreases without bound,
$f(x)$ also decreases without bound; as $x$ increases without bound, $f(x)$
also increases without bound. If the leading term is negative, it will
change the direction of the end behavior. The four cases below summarize
every combination.

**Even degree, positive leading coefficient ($a_n>0$).**

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two arcs opening upward in the upper-left and upper-right corners of a blank grid, showing that as x approaches negative or positive infinity, f(x) approaches positive infinity.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":16,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","quadratics":[{"a":0.15,"c":-2,"from":-6,"to":-4,"arrows":"start"},{"a":0.15,"c":-2,"from":4,"to":6,"arrows":"end"}]}
{{< /apfigure >}}

End behavior: as $x\to\infty$, $f(x)\to\infty$; as $x\to-\infty$,
$f(x)\to\infty$.

**Odd degree, positive leading coefficient ($a_n>0$).**

{{< apfigure kind="graph" >}}
{"ariaLabel":"An arc in the lower-left corner falling toward negative infinity and an arc in the upper-right corner rising toward positive infinity, showing that as x approaches negative infinity f(x) approaches negative infinity, and as x approaches positive infinity f(x) approaches positive infinity.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":16,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","cubics":[{"a":0.05,"from":-6,"to":-4,"arrows":"start"},{"a":0.05,"from":4,"to":6,"arrows":"end"}]}
{{< /apfigure >}}

End behavior: as $x\to\infty$, $f(x)\to\infty$; as $x\to-\infty$,
$f(x)\to-\infty$.

**Even degree, negative leading coefficient ($a_n<0$).**

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two arcs opening downward in the lower-left and lower-right corners of a blank grid, showing that as x approaches negative or positive infinity, f(x) approaches negative infinity.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":16,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","quadratics":[{"a":-0.15,"c":2,"from":-6,"to":-4,"arrows":"start"},{"a":-0.15,"c":2,"from":4,"to":6,"arrows":"end"}]}
{{< /apfigure >}}

End behavior: as $x\to\infty$, $f(x)\to-\infty$; as $x\to-\infty$,
$f(x)\to-\infty$.

**Odd degree, negative leading coefficient ($a_n<0$).**

{{< apfigure kind="graph" >}}
{"ariaLabel":"An arc in the upper-left corner rising toward positive infinity and an arc in the lower-right corner falling toward negative infinity, showing that as x approaches negative infinity f(x) approaches positive infinity, and as x approaches positive infinity f(x) approaches negative infinity.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":16,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","cubics":[{"a":-0.05,"from":-6,"to":-4,"arrows":"start"},{"a":-0.05,"from":4,"to":6,"arrows":"end"}]}
{{< /apfigure >}}

End behavior: as $x\to\infty$, $f(x)\to-\infty$; as $x\to-\infty$,
$f(x)\to\infty$.

## Understanding the relationship between degree and turning points

In addition to the end behavior, recall that we can analyze a polynomial
function's local behavior. It may have a turning point where the graph
changes from increasing to decreasing (rising to falling) or decreasing to
increasing (falling to rising). Look at the graph of the polynomial function
$f(x)=x^{4}-x^{3}-4x^{2}+4x$ below. The graph has three turning points.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = x to the fourth minus x cubed minus 4x squared plus 4x, with three turning points: a local minimum near (-1.33, -6.9), a local maximum near (0.47, 0.9), and a second local minimum near (1.61, -1.4).","xMin":-2.5,"xMax":3,"yMin":-8,"yMax":8,"xUnit":52,"yUnit":24,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","polynomials":[{"coeffs":[0,4,-4,-1,1],"arrows":true}],"points":[{"at":[-1.33,-6.91],"label":"Turning point"},{"at":[0.47,0.94],"label":"Turning point"},{"at":[1.61,-1.38],"label":"Turning point"}]}
{{< /apfigure >}}

This function $f$ is a 4th degree polynomial function and has 3 turning
points. The maximum number of turning points of a polynomial function is
always one less than the degree of the function.

{{< callout type="info" >}}
**Interpreting turning points.** A **turning point** is a point of the graph
where the graph changes from increasing to decreasing (rising to falling) or
decreasing to increasing (falling to rising).

A polynomial of degree $n$ will have at most $n-1$ turning points.
{{< /callout >}}

**Example.** Find the maximum number of turning points of each
polynomial function.

1. $f(x)=-x^{3}+4x^{5}-3x^{2}+1$
2. $f(x)=-(x-1)^{2}(1+2x^{2})$

**Solution.**

1. First, rewrite the polynomial function in descending order:
   $f(x)=4x^{5}-x^{3}-3x^{2}+1$. Identify the degree of the polynomial
   function. This polynomial function is of degree 5. The maximum number of
   turning points is $5-1=4$.
2. First, identify the leading term of the polynomial function if the
   function were expanded: $a_n=-(x^2)(2x^2)=-2x^4$. Then identify the
   degree of the polynomial function. This polynomial function is of degree
   4. The maximum number of turning points is $4-1=3$.

## Graphing polynomial functions

We can use what we have learned about multiplicities, end behavior, and
turning points to sketch graphs of polynomial functions. Let us put this all
together and look at the steps required to graph polynomial functions.

{{< callout type="info" >}}
**How To: given a polynomial function, sketch the graph.**

1. Find the intercepts.
2. Check for symmetry. If the function is an even function, its graph is
   symmetrical about the $y$-axis, that is, $f(-x)=f(x)$. If a function is
   an odd function, its graph is symmetrical about the origin, that is,
   $f(-x)=-f(x)$.
3. Use the multiplicities of the zeros to determine the behavior of the
   polynomial at the $x$-intercepts.
4. Determine the end behavior by examining the leading term.
5. Use the end behavior and the behavior at the intercepts to sketch a
   graph.
6. Ensure that the number of turning points does not exceed one less than
   the degree of the polynomial.
7. Optionally, use technology to check the graph.
{{< /callout >}}

**Example.** Sketch a graph of
$f(x)=-2(x+3)^{2}(x-5)$.

**Solution.** This graph has two $x$-intercepts. At $x=-3$, the factor is
squared, indicating a multiplicity of 2. The graph will bounce at this
$x$-intercept. At $x=5$, the function has a multiplicity of one, indicating
the graph will cross through the axis at this intercept.

The $y$-intercept is found by evaluating $f(0)$.

$$
\begin{array}{lrcl}
f(0) &=& -2(0+3)^{2}(0-5) \\[4pt]
&=& -2\cdot 9\cdot(-5) \\[4pt]
&=& 90
\end{array}
$$

The $y$-intercept is $(0,90)$.

Additionally, we can see that the leading term, if this polynomial were
multiplied out, would be $-2x^{3}$, so the end behavior is that of a
vertically reflected cubic, with the outputs decreasing as the inputs
approach infinity, and the outputs increasing as the inputs approach
negative infinity. The figure below shows only that end behavior, before the
rest of the graph is filled in.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Stage 1 of 4 in sketching f(x) = -2(x+3) squared (x-5): two disconnected arcs on a blank grid, one falling from the upper left and one falling toward the lower right, showing only the end behavior before any intercepts are plotted.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":16,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","cubics":[{"a":-0.05,"from":-6,"to":-4,"arrows":"start"},{"a":-0.05,"from":4,"to":6,"arrows":"end"}]}
{{< /apfigure >}}

To sketch this, we consider that:

- As $x\to-\infty$ the function $f(x)\to\infty$, so we know the graph starts
  in the second quadrant and is decreasing toward the $x$-axis.
- Since $f(-x)=-2(-x+3)^{2}(-x-5)$ is not equal to $f(x)$, the graph does
  not display symmetry.
- At $(-3,0)$, the graph bounces off of the $x$-axis, so the function must
  start increasing. At $(0,90)$, the graph crosses the $y$-axis at the
  $y$-intercept.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Stage 2 of 4 in sketching f(x) = -2(x+3) squared (x-5): the same two end-behavior arcs, now with the bounce intercept (-3, 0) and the y-intercept (0, 90) plotted, before the connecting curve is drawn.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":16,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","cubics":[{"a":-0.05,"from":-6,"to":-4,"arrows":"start"},{"a":-0.05,"from":4,"to":6,"arrows":"end"}],"points":[{"at":[-3,0],"label":"(−3, 0)"},{"at":[0,4.3],"label":"(0, 90)","labelSide":"ne"}]}
{{< /apfigure >}}

- Somewhere after this point, the graph must turn back down or start
  decreasing toward the horizontal axis because the graph passes through
  the next intercept at $(5,0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Stage 3 of 4 in sketching f(x) = -2(x+3) squared (x-5): the same two end-behavior arcs with all three known points plotted, (-3, 0), (0, 90), and (5, 0), before the connecting curve is drawn.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":16,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"y","cubics":[{"a":-0.05,"from":-6,"to":-4,"arrows":"start"},{"a":-0.05,"from":4,"to":6,"arrows":"end"}],"points":[{"at":[-3,0],"label":"(−3, 0)"},{"at":[0,4.3],"label":"(0, 90)","labelSide":"ne"},{"at":[5,0],"label":"(5, 0)","labelSide":"n"}]}
{{< /apfigure >}}

- As $x\to\infty$ the function $f(x)\to-\infty$, so we know the graph
  continues to decrease, and we can stop drawing the graph in the fourth
  quadrant.

Using technology, we can create the complete graph for the polynomial
function, shown below, and verify that the resulting graph looks like our
sketch.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Stage 4 of 4, the complete graph of f(x) = -2(x+3) squared (x-5): the graph bounces off the x-axis at (-3, 0), rises to a local maximum near (2.3, 151.7), then falls, crossing the x-axis at (5, 0) and continuing down to the lower right.","xMin":-5,"xMax":6,"yMin":-60,"yMax":180,"xUnit":22,"yUnit":1.6,"tickLabels":true,"xTickStep":1,"yTickStep":30,"polynomials":[{"coeffs":[90,42,-2,-2],"arrows":true}],"points":[{"at":[-3,0]},{"at":[5,0]},{"at":[0,90],"label":"(0, 90)","labelSide":"ne"}]}
{{< /apfigure >}}

{{< fillin
  question="A Try It sketches $f(x)=\tfrac{1}{4}x(x-1)^4(x+3)^3$. This function has three x-intercepts. Find them, separated by commas."
  answer="0,1,-3"
  answerMode="unordered"
  answerDisplay="$x=0,1,-3$"
  hint="Set each factor equal to zero: $x=0$, $(x-1)^4=0$, and $(x+3)^3=0$."
>}}

## Using the Intermediate Value Theorem

In some situations, we may know two points on a graph but not the zeros. If
those two points are on opposite sides of the $x$-axis, we can confirm that
there is a zero between them. Consider a polynomial function $f$ whose graph
is smooth and continuous. The **Intermediate Value Theorem** states that for
two numbers $a$ and $b$ in the domain of $f$, if $a<b$ and $f(a)\ne f(b)$,
then the function $f$ takes on every value between $f(a)$ and $f(b)$.

We can apply this theorem to a special case that is useful in graphing
polynomial functions. If a point on the graph of a continuous function $f$
at $x=a$ lies above the $x$-axis and another point at $x=b$ lies below the
$x$-axis, there must exist a third point between $x=a$ and $x=b$ where the
graph crosses the $x$-axis. Call this point $(c,f(c))$. This means that we
are assured there is a solution $c$ where $f(c)=0$.

In other words, the Intermediate Value Theorem tells us that when a
polynomial function changes from a negative value to a positive value, the
function must cross the $x$-axis. The figure below shows that there is a
zero between $a$ and $b$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A smooth increasing curve with a labeled point f(a) below the x-axis near x = 0, a labeled zero f(c) = 0 near x = 1.3, and a labeled point f(b) above the x-axis near x = 3, illustrating the Intermediate Value Theorem.","xMin":-1,"xMax":4,"yMin":-2,"yMax":8,"unit":30,"tickLabels":true,"xTickStep":1,"yTickStep":2,"polynomials":[{"coeffs":[-1,0.2,0,0.3],"arrows":true}],"points":[{"at":[0,-1],"label":"f(a) is negative"},{"at":[1.34,0],"label":"f(c) = 0"},{"at":[3,7.7],"label":"f(b) is positive"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
**Use of the Intermediate Value Theorem.** Let $f$ be a polynomial function
over an interval $[a,b]$. Bolzano's Theorem (a corollary to the
**Intermediate Value Theorem**) states that if $f(a)$ and $f(b)$ have
opposite signs, then there exists at least one value $c$ between $a$ and $b$
for which $f(c)=0$.
{{< /callout >}}

**Example.** Show that the function
$f(x)=x^{3}-5x^{2}+3x+6$ has at least two real zeros between $x=1$ and
$x=4$.

**Solution.** As a start, evaluate $f(x)$ at the integer values $x=1,2,3$,
and $4$. See the table below.

| $x$ | 1 | 2 | 3 | 4 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 5 | 0 | −3 | 2 |

We see that one zero occurs at $x=2$. Also, since $f(3)$ is negative and
$f(4)$ is positive, by the Intermediate Value Theorem, there must be at
least one real zero between 3 and 4.

We have shown that there are at least two real zeros between $x=1$ and
$x=4$.

**Analysis.** We can also see on the graph of the function below that there
are two real zeros between $x=1$ and $x=4$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = x cubed minus 5x squared plus 3x plus 6 on a grid from -2 to 5, with the labeled points f(1) = 5 and f(4) = 2 above the x-axis, and f(3) = -3 below the x-axis, showing a zero between x = 1 and x = 4.","xMin":-2,"xMax":5,"yMin":-10,"yMax":10,"xUnit":26,"yUnit":16,"tickLabels":true,"xTickStep":1,"yTickStep":2,"polynomials":[{"coeffs":[6,3,-5,1],"arrows":true}],"points":[{"at":[1,5],"label":"f(1) = 5","labelSide":"ne"},{"at":[4,2],"label":"f(4) = 2","labelSide":"ne"},{"at":[3,-3],"label":"f(3) = −3"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Which pair of values confirms, by the Intermediate Value Theorem, that f(x)=7x^5-9x^4-x^2 has at least one real zero between x=1 and x=2?"
  answer="f(1)=-3 is negative and f(2)=76 is positive"
  hint="Evaluate f(1) and f(2) and check whether the two values have opposite signs."
>}}
f(1)=-3 is negative and f(2)=76 is positive
f(1)=-3 and f(2)=76 are both positive
f(1)=3 is positive and f(2)=-76 is negative
f(1)=-3 is negative and f(2)=-76 is also negative
{{< /multiplechoice >}}

## Writing formulas for polynomial functions

Now that we know how to find zeros of polynomial functions, we can use them
to write formulas based on graphs. Because a polynomial function written in
factored form will have an $x$-intercept where each factor is equal to
zero, we can form a function that will pass through a set of
$x$-intercepts by introducing a corresponding set of factors.

{{< callout type="info" >}}
**Factored form of polynomials.** If a polynomial of degree $p$ that can be
factored into strictly linear factors has horizontal intercepts at
$x=x_{1},x_{2},\dots,x_{n}$, then the polynomial can be written in the
factored form

$$f(x)=a(x-x_{1})^{p_{1}}(x-x_{2})^{p_{2}}\cdots(x-x_{n})^{p_{n}}$$

where the powers $p_{i}$ on each factor can be determined by the behavior of
the graph at the corresponding intercept, and the stretch factor $a$ can be
determined given a value of the function other than the $x$-intercept.
{{< /callout >}}

{{< callout type="info" >}}
**How To: given a graph of a polynomial function, write a formula for the
function.**

1. Identify the $x$-intercepts of the graph to find the factors of the
   polynomial.
2. Examine the behavior of the graph at the $x$-intercepts to determine the
   multiplicity of each factor.
3. Find the polynomial of least degree containing all the factors found in
   the previous step.
4. Use any other point on the graph (the $y$-intercept may be easiest) to
   determine the stretch factor.
{{< /callout >}}

**Example.** Write a formula for the polynomial function shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = one-thirtieth times (x+3)(x-2) squared (x-5), crossing the x-axis at x = -3, touching at x = 2, and crossing again at x = 5, with y-intercept (0, -2).","xMin":-5,"xMax":6,"yMin":-5,"yMax":3,"unit":26,"tickLabels":true,"xTickStep":1,"yTickStep":1,"polynomials":[{"coeffs":[-2,1.733333,-0.1,-0.2,0.033333],"arrows":true}]}
{{< /apfigure >}}

**Solution.** This graph has three $x$-intercepts: $x=-3$, $2$, and $5$. The
$y$-intercept is located at $(0,-2)$. At $x=-3$ and $x=5$, the graph passes
through the axis linearly, suggesting the corresponding factors of the
polynomial will be linear. At $x=2$, the graph bounces at the intercept,
suggesting the corresponding factor of the polynomial will be second degree
(quadratic). Together, this gives us

$$f(x)=a(x+3)(x-2)^{2}(x-5)$$

To determine the stretch factor, we utilize another point on the graph. We
will use the $y$-intercept $(0,-2)$, to solve for $a$.

$$
\begin{array}{lrcl}
f(0) &=& a(0+3)(0-2)^{2}(0-5) \\[4pt]
-2 &=& a(0+3)(0-2)^{2}(0-5) \\[4pt]
-2 &=& -60a \\[4pt]
a &=& \tfrac{1}{30}
\end{array}
$$

The graphed polynomial appears to represent the function
$f(x)=\tfrac{1}{30}(x+3)(x-2)^{2}(x-5)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A degree-6 polynomial graph on a grid from -2 to 5, crossing the x-axis at (-1, 0), touching at (4, 0), touching again near x = 2 on its way to a local maximum, with y-intercept (0, -4): it falls from the upper left, crosses near x = -1, dips to a shallow local minimum, touches near x = 2, rises to a local maximum near x = 3.3, then falls steeply to the lower right.","xMin":-2,"xMax":5,"yMin":-6,"yMax":6,"unit":30,"tickLabels":true,"xTickStep":1,"yTickStep":2,"polynomials":[{"coeffs":[-4,-1,5.5,-0.75,-2.125,1,-0.125],"arrows":true}],"points":[{"at":[-1,0],"label":"(−1, 0)"},{"at":[2,0],"label":"(2, 0)"},{"at":[4,0],"label":"(4, 0)"},{"at":[0,-4],"label":"(0, −4)"}]}
{{< /apfigure >}}

{{< fillin
  question="Write a formula, in factored form, for the polynomial function shown in the figure above."
  answer="-\tfrac{1}{8}(x-2)^{3}(x+1)^{2}(x-4)"
  answerForm="factored"
  answerDisplay="$f(x)=-\tfrac{1}{8}(x-2)^{3}(x+1)^{2}(x-4)$"
  hint="Use the graph's behavior at each x-intercept for that factor's power, then use the y-intercept (0, -4) to solve for the stretch factor a."
>}}

## Using local and global extrema

With quadratics, we were able to algebraically find the maximum or minimum
value of the function by finding the vertex. For general polynomials,
finding these turning points is not possible without more advanced
techniques from calculus. Even then, finding where extrema occur can still
be algebraically challenging. For now, we will estimate the locations of
turning points using technology to generate a graph.

Each turning point represents a local minimum or maximum. Sometimes, a
turning point is the highest or lowest point on the entire graph. In these
cases, we say that the turning point is a **global maximum** or a **global
minimum**. These are also referred to as the absolute maximum and absolute
minimum values of the function.

{{< callout type="info" >}}
**Local and global extrema.** A **local maximum** or **local minimum** at
$x=a$ (sometimes called the relative maximum or minimum, respectively) is
the output at the highest or lowest point on the graph in an open interval
around $x=a$. If a function has a local maximum at $a$, then $f(a)\ge f(x)$
for all $x$ in an open interval around $x=a$. If a function has a local
minimum at $a$, then $f(a)\le f(x)$ for all $x$ in an open interval around
$x=a$.

A **global maximum** or **global minimum** is the output at the highest or
lowest point of the function. If a function has a global maximum at $a$,
then $f(a)\ge f(x)$ for all $x$. If a function has a global minimum at $a$,
then $f(a)\le f(x)$ for all $x$.

We can see the difference between local and global extrema in the figure
below.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A degree-4 polynomial graph falling from the upper left to a local maximum near (0.1, 3), dipping to a local minimum near (1.9, 1.3), rising to a taller global maximum near (4.1, 4.4), then falling to the lower right.","xMin":-2,"xMax":6,"yMin":-6,"yMax":6,"unit":24,"tickLabels":true,"xTickStep":1,"yTickStep":2,"polynomials":[{"coeffs":[3,0.35,-2.4,1.2,-0.15],"arrows":true}],"points":[{"at":[0.08,3.01],"label":"Local maximum","labelSide":"w"},{"at":[1.85,1.27],"label":"Local minimum"},{"at":[4.07,4.41],"label":"Global maximum"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
**Q&A.** *Do all polynomial functions have a global minimum or maximum?*

No. Only polynomial functions of even degree have a global minimum or
maximum. For example, $f(x)=x$ has neither a global maximum nor a global
minimum.
{{< /callout >}}

**Example.** An open-top box is
to be constructed by cutting out squares from each corner of a 14 cm by 20
cm sheet of plastic then folding up the sides. Find the size of squares that
should be cut out to maximize the volume enclosed by the box.

**Solution.** We will start this problem by drawing a picture like the one
below, labeling the width of the cut-out squares with a variable, $w$.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A rectangular sheet with a small square removed from each of the four corners, each cut-out square labelled w on its width and height, so the sides can fold up into an open box.","unit":16,"polygons":[{"points":[[0,0],[20,0],[20,14],[0,14]]}],"segments":[{"from":[3,14],"to":[3,11]},{"from":[0,11],"to":[3,11]},{"from":[17,14],"to":[17,11]},{"from":[17,11],"to":[20,11]},{"from":[3,3],"to":[3,0]},{"from":[0,3],"to":[3,3]},{"from":[17,0],"to":[17,3]},{"from":[17,3],"to":[20,3]}],"texts":[{"at":[3.4,12.5],"text":"w","anchor":"start"},{"at":[1.2,10.3],"text":"w","anchor":"middle"}]}
{{< /apfigure >}}

Notice that after a square is cut out from each end, it leaves a $(14-2w)$
cm by $(20-2w)$ cm rectangle for the base of the box, and the box will be
$w$ cm tall. This gives the volume

$$
\begin{array}{lrcl}
V(w) &=& (20-2w)(14-2w)w \\[4pt]
&=& 280w-68w^{2}+4w^{3}
\end{array}
$$

Notice, since the factors are $w$, $20-2w$, and $14-2w$, the three zeros are
10, 7, and 0, respectively. Because a height of 0 cm is not reasonable, we
consider only the zeros 10 and 7. The shortest side is 14 and we are cutting
off two squares, so values $w$ may take on are greater than zero or less
than 7. This means we will restrict the domain of this function to
$0<w<7$. Using technology to sketch the graph of $V(w)$ on this reasonable
domain, we get a graph like the one below. We can use this graph to estimate
the maximum value for the volume, restricted to values for $w$ that are
reasonable for this problem — values from 0 to 7.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of V(w) = 280w minus 68w squared plus 4w cubed on a window from -2 to 12, rising from the lower left, reaching a local maximum near w = 2.7 at about 339, dipping to a local minimum near w = 8.6, then rising steeply to the upper right.","xMin":-2,"xMax":12,"yMin":-200,"yMax":420,"xUnit":18,"yUnit":0.62,"tickLabels":true,"xTickStep":2,"yTickStep":100,"xLabel":"w","yLabel":"V(w)","polynomials":[{"coeffs":[0,280,-68,4],"arrows":true}]}
{{< /apfigure >}}

From this graph, we turn our focus to only the portion on the reasonable
domain, $[0,7]$. We can estimate the maximum value to be around 340 cubic
cm, which occurs when the squares are about 2.75 cm on each side. To improve
this estimate, we could use advanced features of our technology, if
available, or simply change our window to zoom in on our graph to produce
the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A zoomed-in view of V(w) = 280w minus 68w squared plus 4w cubed for w between 2.4 and 3, refining the maximum volume estimate to about 339 cubic centimeters near w = 2.7.","xMin":2.4,"xMax":3,"yMin":330,"yMax":340,"unit":260,"yUnit":26,"tickLabels":true,"xTickStep":0.2,"yTickStep":1,"xLabel":"w","yLabel":"V(w)","polynomials":[{"coeffs":[0,280,-68,4],"arrows":false}]}
{{< /apfigure >}}

From this zoomed-in view, we can refine our estimate for the maximum volume
to about 339 cubic cm, when the squares measure approximately 2.7 cm on each
side.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = -0.2(x-2) cubed (x+1) squared (x-4) on the interval from -1 to 4, with a labeled local minimum near (0, -6.5) and a labeled local maximum near (3.5, 7).","xMin":-1,"xMax":4,"yMin":-8,"yMax":8,"xUnit":48,"yUnit":22,"tickLabels":true,"xTickStep":1,"yTickStep":2,"polynomials":[{"coeffs":[-6.4,-1.6,8.8,-1.2,-3.4,1.6,-0.2],"from":-1,"to":4,"arrows":false}],"points":[{"at":[0.09,-6.47],"label":"local min ≈ (0, −6.5)"},{"at":[3.57,6.95],"label":"local max ≈ (3.5, 7)"}]}
{{< /apfigure >}}

{{< fillin
  question="Using the figure, what are the approximate local minimum and local maximum values of f(x)=-0.2(x-2)^3(x+1)^2(x-4) on [-1,4]? Enter the local minimum value first, then the local maximum value, separated by a comma."
  answer="-6.5,7"
  answerDisplay="local minimum $\approx -6.5$; local maximum $\approx 7$"
  hint="Read the y-coordinates of the two labeled points on the graph."
>}}

## Key concepts

- Polynomial functions of degree 2 or more are smooth, continuous functions.
- To find the zeros of a polynomial function, if it can be factored, factor
  the function and set each factor equal to zero.
- Another way to find the $x$-intercepts of a polynomial function is to
  graph the function and identify the points at which the graph crosses the
  $x$-axis.
- The multiplicity of a zero determines how the graph behaves at the
  $x$-intercepts.
- The graph of a polynomial will cross the horizontal axis at a zero with
  odd multiplicity.
- The graph of a polynomial will touch the horizontal axis at a zero with
  even multiplicity.
- The end behavior of a polynomial function depends on the leading term.
- The graph of a polynomial function changes direction at its turning
  points.
- A polynomial function of degree $n$ has at most $n-1$ turning points.
- To graph polynomial functions, find the zeros and their multiplicities,
  determine the end behavior, and ensure that the final graph has at most
  $n-1$ turning points.
- Graphing a polynomial function helps to estimate local and global
  extrema.
- The Intermediate Value Theorem tells us that if $f(a)$ and $f(b)$ have
  opposite signs, then there exists at least one value $c$ between $a$ and
  $b$ for which $f(c)=0$.

## Key terms

**global maximum** — the highest turning point on a graph; $f(a)$ where
$f(a)\ge f(x)$ for all $x$.
**global minimum** — the lowest turning point on a graph; $f(a)$ where
$f(a)\le f(x)$ for all $x$.
**Intermediate Value Theorem** — for two numbers $a$ and $b$ in the domain
of $f$, if $a<b$ and $f(a)\ne f(b)$, then the function $f$ takes on every
value between $f(a)$ and $f(b)$; specifically, when a polynomial function
changes from a negative value to a positive value, the function must cross
the $x$-axis.
**multiplicity** — the number of times a given factor appears in the
factored form of the equation of a polynomial; if a polynomial contains a
factor of the form $(x-h)^{p}$, $x=h$ is a zero of multiplicity $p$.

## Practice

### Recognize characteristics of graphs of polynomial functions

{{< multiplechoice
  question="For a polynomial function f, which statement correctly relates its x-intercepts to its zeros?"
  answer="The x-intercepts of the graph occur at the same input values as the zeros of f."
  hint="A zero is an input value where f(x)=0; think about what that means on the graph."
>}}
The x-intercepts of the graph occur at the same input values as the zeros of f.
The x-intercepts are always exactly one more than the number of zeros.
Zeros only exist for factored polynomials, while x-intercepts exist for every function.
The x-intercepts are the output values of the zeros.
{{< /multiplechoice >}}

{{< multiplechoice
  question="What is the domain of f(x)=x^3+x^2-20x?"
  answer="All real numbers"
  hint="Every polynomial function accepts any real number as an input — there is never a division, root, or logarithm to restrict it."
>}}
All real numbers
All real numbers except 0
x greater than or equal to 0
Cannot be determined without a graph
{{< /multiplechoice >}}

### Use factoring to find zeros of polynomial functions

{{< fillin
  question="Find the zeros of C(t)=3(t+2)(t-3)(t+5). Enter all of them, separated by commas."
  answer="-2,3,-5"
  answerMode="unordered"
  answerDisplay="$t=-2,3,-5$"
  hint="The function is already factored — set each factor equal to zero."
>}}

{{< fillin
  question="Find the zeros of f(x)=x^3+x^2-4x-4. Enter all of them, separated by commas."
  answer="-1,2,-2"
  answerMode="unordered"
  answerDisplay="$x=-1,2,-2$"
  hint="Factor by grouping: pull $x^2$ from the first two terms and $-4$ from the last two, then factor the difference of squares that remains."
>}}

### Identify zeros and their multiplicities

{{< multiplechoice
  question="What is the multiplicity of the zero x=-3/2 for f(x)=x^2(2x+3)^5(x-4)^2?"
  answer="5"
  hint="The multiplicity is the exponent on the factor that produces that zero."
>}}
2
3
4
5
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which statement correctly describes the zeros of f(x)=x^2(x^2+4x+4)?"
  answer="0 with multiplicity 2 and -2 with multiplicity 2"
  hint="Factor the trinomial x^2+4x+4 as a perfect square before reading off the multiplicities."
>}}
0 with multiplicity 2 and -2 with multiplicity 2
0 with multiplicity 1 and -2 with multiplicity 3
0 with multiplicity 2 and 2 with multiplicity 2
0 with multiplicity 4 and -2 with multiplicity 1
{{< /multiplechoice >}}

{{< multiplechoice
  question="If the graph of a polynomial function touches the x-axis at a zero and then changes direction without crossing, what must be true of that zero's multiplicity?"
  answer="It is even"
  hint="Touching and bouncing off the axis is the behavior of a repeated factor raised to an even power, like a quadratic."
>}}
It is even
It is odd
It is exactly 1
It is exactly 3
{{< /multiplechoice >}}

### Determine end behavior

{{< multiplechoice
  question="As x approaches infinity, what happens to g(x)=(x+4)(x-1)^2?"
  answer="g(x) approaches infinity"
  hint="Multiply out just the leading term: the leading coefficient and the degree's parity together determine the end behavior."
>}}
g(x) approaches infinity
g(x) approaches negative infinity
g(x) approaches 0
g(x) cannot be determined from the factored form
{{< /multiplechoice >}}

{{< multiplechoice
  question="As x approaches negative infinity, what happens to n(x)=-3x(x+2)(x-4)?"
  answer="n(x) approaches infinity"
  hint="The leading term is -3x^3. Substitute a very negative value of x into just that term to see the sign of the result."
>}}
n(x) approaches infinity
n(x) approaches negative infinity
n(x) approaches 0
n(x) oscillates without approaching a limit
{{< /multiplechoice >}}

### Understand the relationship between degree and turning points

{{< multiplechoice
  question="What is the maximum number of turning points on the graph of f(x)=x^5-5x^3+4x?"
  answer="4"
  hint="The maximum number of turning points is always one less than the polynomial's degree."
>}}
2
3
4
5
{{< /multiplechoice >}}

{{< multiplechoice
  question="What is the maximum number of turning points on the graph of f(x)=2x^3-x^2-8x+4?"
  answer="2"
  hint="The maximum number of turning points is always one less than the polynomial's degree."
>}}
1
2
3
4
{{< /multiplechoice >}}

### Graph polynomial functions

{{< fillin
  question="Write a formula, in factored form, for the degree-3 polynomial function with zeros at x=-2, x=1, and x=3, and y-intercept (0,-4)."
  answer="-\tfrac{2}{3}(x+2)(x-1)(x-3)"
  answerForm="factored"
  answerDisplay="$f(x)=-\tfrac{2}{3}(x+2)(x-1)(x-3)$"
  hint="Start from f(x)=a(x+2)(x-1)(x-3), then substitute x=0 and solve for the stretch factor a."
>}}

{{< fillin
  question="Write a formula, in factored form, for the degree-3 polynomial function with zeros at x=-3, x=-2, and x=1, and y-intercept (0,12)."
  answer="-2(x+3)(x+2)(x-1)"
  answerForm="factored"
  answerDisplay="$f(x)=-2(x+3)(x+2)(x-1)$"
  hint="Start from f(x)=a(x+3)(x+2)(x-1), then substitute x=0 and solve for the stretch factor a."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A degree-3 polynomial graph crossing the x-axis at x = -3, x = -1, and x = 3, with y-intercept (0, 2), rising from the upper left, dipping to a local minimum, rising to a local maximum, then falling to the lower right.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":26,"tickLabels":true,"xTickStep":1,"yTickStep":1,"polynomials":[{"coeffs":[2,2,-0.222222,-0.222222],"arrows":true}]}
{{< /apfigure >}}

{{< fillin
  question="Write a formula, in factored form, for the degree-3 polynomial function shown in the figure above."
  answer="-\tfrac{2}{9}(x-3)(x+1)(x+3)"
  answerForm="factored"
  answerDisplay="$f(x)=-\tfrac{2}{9}(x-3)(x+1)(x+3)$"
  hint="All three x-intercepts cross linearly, so each factor is linear; use the y-intercept to find the stretch factor."
>}}

### Use the Intermediate Value Theorem

{{< multiplechoice
  question="Explain how the Intermediate Value Theorem can assist us in finding a zero of a function."
  answer="If we evaluate the function at a and at b, and the sign of the function value changes, then a zero exists between a and b."
  hint="Think about what must happen to a continuous graph that starts below the x-axis and ends above it."
>}}
If we evaluate the function at a and at b, and the sign of the function value changes, then a zero exists between a and b.
The theorem finds the exact location of a zero without any further calculation.
The theorem only applies when a and b are themselves zeros of the function.
The theorem tells us a function has no zeros if f(a) and f(b) are both positive.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which pair of values confirms, by the Intermediate Value Theorem, that f(x)=x^3-9x has at least one real zero between x=2 and x=4?"
  answer="f(2)=-10 is negative and f(4)=28 is positive"
  hint="Evaluate f(2) and f(4) and compare their signs."
>}}
f(2)=-10 is negative and f(4)=28 is positive
f(2)=-10 and f(4)=28 are both negative
f(2)=10 is positive and f(4)=-28 is negative
f(2)=-10 is negative and f(4)=-28 is also negative
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which pair of values confirms, by the Intermediate Value Theorem, that f(x)=-x^4+4 has at least one real zero between x=1 and x=3?"
  answer="f(1)=3 is positive and f(3)=-77 is negative"
  hint="Evaluate f(1) and f(3) and compare their signs."
>}}
f(1)=3 is positive and f(3)=-77 is negative
f(1)=3 and f(3)=-77 are both positive
f(1)=-3 is negative and f(3)=77 is positive
f(1)=3 is positive and f(3)=77 is also positive
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 3.4: Graphs of
Polynomial Functions](https://openstax.org/books/precalculus-2e/pages/3-4-graphs-of-polynomial-functions)
by Jay Abramson and OpenStax, © OpenStax, licensed under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access
the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e).
Changes: recreated every graph as an accessible inline SVG generated from its
exact polynomial coefficients (expanded by hand from each factored form) —
the smooth/discontinuous comparison pair, the four-panel "which graph is a
polynomial" figure, $f(x)=x^6-3x^4+2x^2$, $f(x)=x^3-5x^2-x+5$,
$g(x)=(x-2)^2(2x+3)$, $h(x)=x^3+4x^2+x-6$, $f(x)=(x+3)(x-2)^2(x+1)^3$, the
single-zero/multiplicity-2/multiplicity-3 panels, a fitted degree-6 example
with zeros $-3$ (mult. 2), $-1$ (mult. 1), $4$ (mult. 3), a fitted degree-7
Try-It with zeros $-5$ (mult. 3), $-1$ (mult. 2), $3$ (mult. 2), the four
end-behavior corner-arc panels, $f(x)=x^4-x^3-4x^2+4x$ with its turning
points labeled, the end-behavior tails and complete graph of
$f(x)=-2(x+3)^2(x-5)$ (condensing the source's four-step progressive sketch
to a start and an end state, narrated in between), a fitted monotonic cubic
for the generic Intermediate Value Theorem illustration, $f(x)=x^3-5x^2+3x+6$
with $f(1)$, $f(3)$, and $f(4)$ labeled, $f(x)=\tfrac{1}{30}(x+3)(x-2)^2(x-5)$,
the Try-It graph for $f(x)=-\tfrac18(x-2)^3(x+1)^2(x-4)$ with its intercepts
and $y$-intercept labeled, a fitted degree-4 local/global extrema
illustration, the corner-cutout box diagram, $V(w)=280w-68w^2+4w^3$ at full
scale and zoomed near its maximum, and the labeled local extrema of
$f(x)=-0.2(x-2)^3(x+1)^2(x-4)$; presented the revenue table and the
Intermediate Value Theorem sign-check table (Table 2) as Markdown tables;
omitted the decorative "How To" and "Q&A" icon glyphs, which carry no
mathematics; omitted the Media box linking to an external openstax.org
resource; converted every retained "Try It" into an interactive component,
adapting the two "sketch a graph" prompts into a check of the resulting
x-intercepts (since freehand sketching is not gradable here), the
graph-reading multiplicity prompt and both Intermediate Value Theorem
"explain" prompts into multiple choice among paraphrased statements (a
categorical judgment is never a fill-in number), and the "find the maximum
and minimum values" prompt into a single ordered fill-in (minimum then
maximum) since the source asks for both values from one graph; and adapted
16 selected end-of-section exercises — an x-intercept/zero vocabulary
question, a domain question, two zero-finding-by-factoring problems, a
multiplicity-reading problem, a zeros-and-multiplicities multiple choice, an
even-multiplicity concept check, two end-behavior judgments, two
maximum-turning-points computations, three "write the formula from the given
information or graph" problems, an Intermediate-Value-Theorem explanation,
and two sign-change confirmations — into 17 interactive components in a
closing Practice block, one group per objective.</small>
