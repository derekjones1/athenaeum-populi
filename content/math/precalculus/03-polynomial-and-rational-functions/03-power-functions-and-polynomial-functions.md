---
title: Power Functions and Polynomial Functions
description: >-
  Identifying power functions and their end behavior, identifying polynomial
  functions, and finding the degree and leading coefficient of a polynomial
  function — adapted from OpenStax Precalculus 2e, Section 3.3.
source_section: "3.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Identify power functions
- Identify end behavior of power functions
- Identify polynomial functions
- Identify the degree and leading coefficient of polynomial functions
{{< /callout >}}

Suppose a certain species of bird thrives on a small island. Its population
over the last few years is shown in the table below.

| Year | 2009 | 2010 | 2011 | 2012 | 2013 |
| :--- | ---: | ---: | ---: | ---: | ---: |
| Bird population | 800 | 897 | 992 | 1,083 | 1,169 |

The population can be estimated using the function
$P(t)=-0.3t^3+97t+800$, where $P(t)$ represents the bird population on the
island $t$ years after 2009. We can use this model to estimate the maximum
bird population and when it will occur. We can also use this model to predict
when the bird population will disappear from the island. In this section, we
will examine functions that we can use to estimate and predict these types of
changes.

## Identifying power functions

In order to better understand the bird problem, we need to understand a
specific type of function. A **power function** is a function with a single
term that is the product of a real number, a **coefficient**, and a variable
raised to a fixed real number. (A number that multiplies a variable raised to
an exponent is known as a coefficient.)

As an example, consider functions for area or volume. The function for the
**area of a circle** with radius $r$ is

$$A(r)=\pi r^2$$

and the function for the **volume of a sphere** with radius $r$ is

$$V(r)=\tfrac{4}{3}\pi r^3$$

Both of these are examples of power functions because they consist of a
coefficient, $\pi$ or $\tfrac{4}{3}\pi$, multiplied by a variable $r$ raised
to a power.

{{< callout type="info" >}}
**Power function.** A **power function** is a function that can be
represented in the form

$$f(x)=kx^p$$

where $k$ and $p$ are real numbers, and $k$ is known as the **coefficient**.
{{< /callout >}}

{{< callout type="info" >}}
**Q&A.** *Is $f(x)=2^x$ a power function?*

No. A power function contains a variable base raised to a fixed power. This
function has a constant base raised to a variable power. This is called an
**exponential function**, not a power function.
{{< /callout >}}

**Example.** Which of the following functions are power functions?

$$
\begin{array}{ll}
f(x)=1 & \text{Constant function} \\
f(x)=x & \text{Identity function} \\
f(x)=x^2 & \text{Quadratic function} \\
f(x)=x^3 & \text{Cubic function} \\
f(x)=\tfrac{1}{x} & \text{Reciprocal function} \\
f(x)=\tfrac{1}{x^2} & \text{Reciprocal squared function} \\
f(x)=\sqrt{x} & \text{Square root function} \\
f(x)=\sqrt[3]{x} & \text{Cube root function}
\end{array}
$$

**Solution.** All of the listed functions are power functions.

The constant and identity functions are power functions because they can be
written as $f(x)=x^0$ and $f(x)=x^1$ respectively.

The quadratic and cubic functions are power functions with whole number
powers $f(x)=x^2$ and $f(x)=x^3$.

The **reciprocal** and reciprocal squared functions are power functions with
negative whole number powers because they can be written as $f(x)=x^{-1}$
and $f(x)=x^{-2}$.

The square and **cube root** functions are power functions with fractional
powers because they can be written as $f(x)=x^{1/2}$ or $f(x)=x^{1/3}$.

{{< multiplechoice
  question="Which of the following functions is a power function? $f(x)=2x^2\cdot 4x^3$, $g(x)=-x^5+5x^3-4x$, or $h(x)=\tfrac{2x^5-1}{3x^2+4}$"
  answer="$f(x)$, because it combines into the single term $8x^4$"
  hint="Combine $f$ into a single term first, then check whether each function is one term with a variable raised to a fixed power."
>}}
$f(x)$, because it combines into the single term $8x^4$
$g(x)$, because it already has a variable base
$h(x)$, because the numerator has a variable raised to a power
None of them are power functions
{{< /multiplechoice >}}

## Identifying end behavior of power functions

{{< apfigure kind="graph" >}}
{"ariaLabel":"Three curves on one grid: h of x equals x squared, g of x equals x to the fourth, and f of x equals x to the sixth, all passing through the origin and rising steeply on both sides, arrows at the top left and top right. The x-axis runs from negative 3 to 3 and the y-axis from negative 1 to 4.","xMin":-3,"xMax":3,"yMin":-1,"yMax":4,"unit":40,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[0,0,1],"arrows":true},{"coeffs":[0,0,0,0,1],"arrows":true},{"coeffs":[0,0,0,0,0,0,1],"arrows":true}],"texts":[{"at":[2.15,3.9],"text":"h(x) = x²","anchor":"start"},{"at":[2.15,3.3],"text":"g(x) = x⁴","anchor":"start"},{"at":[2.15,2.7],"text":"f(x) = x⁶","anchor":"start"}]}
{{< /apfigure >}}

The graph above shows $f(x)=x^2$, $g(x)=x^4$, and $h(x)=x^6$, which are all
power functions with even, positive integer powers. Notice that these graphs
have similar shapes, very much like that of the quadratic function in the
toolkit. However, as the power increases, the graphs flatten somewhat near
the origin and become steeper away from the origin.

To describe the behavior as numbers become larger and larger, we use the idea
of infinity. We use the symbol $\infty$ for positive infinity and $-\infty$
for negative infinity. When we say that "$x$ approaches infinity," which can
be symbolically written as $x\to\infty$, we are describing a behavior; we are
saying that $x$ is increasing without bound.

With the even-power function, as the input increases or decreases without
bound, the output values become very large, positive numbers. Equivalently,
we could describe this behavior by saying that as $x$ approaches positive or
negative infinity, the $f(x)$ values increase without bound. In symbolic
form, we could write

$$\text{as }x\to\pm\infty,\ f(x)\to\infty$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"Three curves on one grid: f of x equals x cubed, g of x equals x to the fifth, and h of x equals x to the seventh, all passing through the origin, symmetric about it, flattening near the origin and steepening away from it, with arrows at the top right and bottom left. The x-axis runs from negative 3 to 3 and the y-axis from negative 4 to 4.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"unit":34,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[0,0,0,1],"arrows":true},{"coeffs":[0,0,0,0,0,1],"arrows":true},{"coeffs":[0,0,0,0,0,0,0,1],"arrows":true}],"texts":[{"at":[1.72,3.8],"text":"f(x) = x³","anchor":"start"},{"at":[1.72,3.1],"text":"g(x) = x⁵","anchor":"start"},{"at":[1.72,2.4],"text":"h(x) = x⁷","anchor":"start"}]}
{{< /apfigure >}}

The graph above shows $f(x)=x^3$, $g(x)=x^5$, and $h(x)=x^7$, which are all
power functions with odd, whole-number powers. Notice that these graphs look
similar to the cubic function in the toolkit. Again, as the power increases,
the graphs flatten near the origin and become steeper away from the origin.

These examples illustrate that functions of the form $f(x)=x^n$ reveal
symmetry of one kind or another. First, even functions of the form
$f(x)=x^n$, $n$ even, are symmetric about the $y$-axis. Odd functions of the
form $f(x)=x^n$, $n$ odd, are symmetric about the origin.

For these odd power functions, as $x$ approaches negative infinity, $f(x)$
decreases without bound. As $x$ approaches positive infinity, $f(x)$
increases without bound. In symbolic form we write

$$
\begin{array}{lrcl}
\text{as } x\to-\infty, & f(x) &\to& -\infty \\[4pt]
\text{as } x\to\infty, & f(x) &\to& \infty
\end{array}
$$

The behavior of the graph of a function as the input values get very small
($x\to-\infty$) and get very large ($x\to\infty$) is referred to as the
**end behavior** of the function. We can use words or symbols to describe end
behavior.

The four graphs below show the end behavior of power functions in the form
$f(x)=kx^n$ where $n$ is a non-negative integer, for each combination of even
or odd degree and positive or negative leading coefficient.

**Even degree, positive coefficient.**

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals x squared: an even-degree power function with positive leading coefficient, opening upward with arrows at both ends and passing through the origin. As x approaches negative infinity, f(x) approaches positive infinity, and as x approaches positive infinity, f(x) approaches positive infinity. The x-axis runs from negative 3 to 3 and the y-axis from negative 4 to 4.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"unit":34,"tickLabels":false,"grid":false,"polynomials":[{"coeffs":[0,0,1],"arrows":true}]}
{{< /apfigure >}}

**Odd degree, positive coefficient.**

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals x cubed: an odd-degree power function with positive leading coefficient, rising from lower left to upper right with arrows at both ends and passing through the origin. As x approaches negative infinity, f(x) approaches negative infinity, and as x approaches positive infinity, f(x) approaches positive infinity. The x-axis runs from negative 3 to 3 and the y-axis from negative 4 to 4.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"unit":34,"tickLabels":false,"grid":false,"polynomials":[{"coeffs":[0,0,0,1],"arrows":true}]}
{{< /apfigure >}}

**Even degree, negative coefficient.**

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals negative x squared: an even-degree power function with negative leading coefficient, opening downward with arrows at both ends and passing through the origin. As x approaches negative infinity, f(x) approaches negative infinity, and as x approaches positive infinity, f(x) approaches negative infinity. The x-axis runs from negative 3 to 3 and the y-axis from negative 4 to 4.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"unit":34,"tickLabels":false,"grid":false,"polynomials":[{"coeffs":[0,0,-1],"arrows":true}]}
{{< /apfigure >}}

**Odd degree, negative coefficient.**

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals negative x cubed: an odd-degree power function with negative leading coefficient, falling from upper left to lower right with arrows at both ends and passing through the origin. As x approaches negative infinity, f(x) approaches positive infinity, and as x approaches positive infinity, f(x) approaches negative infinity. The x-axis runs from negative 3 to 3 and the y-axis from negative 4 to 4.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"unit":34,"tickLabels":false,"grid":false,"polynomials":[{"coeffs":[0,0,0,-1],"arrows":true}]}
{{< /apfigure >}}

{{< callout type="info" >}}
**How to:** given a power function $f(x)=kx^n$ where $n$ is a positive
integer, identify the end behavior.

1. Determine whether the power is even or odd.
2. Determine whether the constant is positive or negative.
3. Use the comparison graphs above to identify the end behavior.
{{< /callout >}}

**Example.** Describe the end behavior of the graph of $f(x)=x^8$.

**Solution.** The coefficient is 1 (positive) and the exponent of the power
function is 8 (an even number). As $x$ approaches infinity, the output
(value of $f(x)$) increases without bound. We write as $x\to\infty$,
$f(x)\to\infty$. As $x$ approaches negative infinity, the output increases
without bound. In symbolic form, as $x\to-\infty$, $f(x)\to\infty$. We can
graphically represent the function as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals x to the eighth power: a steep U shape symmetric about the y-axis, touching the origin and rising sharply on both sides past y equals 6 near x equals negative 1 and x equals 1. The x-axis runs from negative 3 to 3 and the y-axis from negative 1 to 6.","xMin":-3,"xMax":3,"yMin":-1,"yMax":6,"unit":34,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[0,0,0,0,0,0,0,0,1],"arrows":true}]}
{{< /apfigure >}}

**Example.** Describe the end behavior of the graph of $f(x)=-x^9$.

**Solution.** The exponent of the power function is 9 (an odd number).
Because the coefficient is $-1$ (negative), the graph is the reflection about
the $x$-axis of the graph of $f(x)=x^9$. The figure below shows that as $x$
approaches infinity, the output decreases without bound. As $x$ approaches
negative infinity, the output increases without bound. In symbolic form, we
would write

$$
\begin{array}{lrcl}
\text{as } x\to-\infty, & f(x) &\to& \infty \\[4pt]
\text{as } x\to\infty, & f(x) &\to& -\infty
\end{array}
$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals negative x to the ninth power: a steeply falling curve from upper left to lower right, flat near the origin, dropping past y equals negative 10 just after x equals 1 and rising past y equals 10 just before x equals negative 1. The x-axis runs from negative 5 to 5 and the y-axis from negative 10 to 10.","xMin":-5,"xMax":5,"yMin":-10,"yMax":10,"unit":22,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[0,0,0,0,0,0,0,0,0,-1],"arrows":true}],"texts":[{"at":[1.7,-6.3],"text":"f(x) = −x⁹","anchor":"start"}]}
{{< /apfigure >}}

**Analysis.** We can check our work by using the table feature on a graphing
utility.

| $x$ | $f(x)$ |
| ---: | ---: |
| $-10$ | $1{,}000{,}000{,}000$ |
| $-5$ | $1{,}953{,}125$ |
| $0$ | $0$ |
| $5$ | $-1{,}953{,}125$ |
| $10$ | $-1{,}000{,}000{,}000$ |

We can see from the table that, when we substitute very small values for
$x$, the output is very large, and when we substitute very large values for
$x$, the output is very small (meaning that it is a very large negative
value).

{{< multiplechoice
  question="Describe the end behavior of $f(x)=-5x^4$."
  answer="As $x$ approaches both positive and negative infinity, $f(x)$ decreases without bound."
  hint="The exponent is even and the coefficient is negative — use the even-power comparison graph above."
>}}
As $x$ approaches both positive and negative infinity, $f(x)$ increases without bound.
As $x$ approaches both positive and negative infinity, $f(x)$ decreases without bound.
As $x$ approaches negative infinity, $f(x)$ decreases without bound, and as $x$ approaches positive infinity, $f(x)$ increases without bound.
As $x$ approaches negative infinity, $f(x)$ increases without bound, and as $x$ approaches positive infinity, $f(x)$ decreases without bound.
{{< /multiplechoice >}}

## Identifying polynomial functions

An oil pipeline bursts in the Gulf of Mexico, causing an oil slick in a
roughly circular shape. The slick is currently 24 miles in radius, but that
radius is increasing by 8 miles each week. We want to write a formula for the
area covered by the oil slick by combining two functions. The radius $r$ of
the spill depends on the number of weeks $w$ that have passed. This
relationship is linear.

$$r(w)=24+8w$$

We can combine this with the formula for the area $A$ of a circle.

$$A(r)=\pi r^2$$

Composing these functions gives a formula for the area in terms of weeks.

$$
\begin{array}{lrcl}
& A(w) &=& A(r(w)) \\[4pt]
& &=& A(24+8w) \\[4pt]
& &=& \pi(24+8w)^2
\end{array}
$$

Multiplying gives the formula.

$$A(w)=576\pi+384\pi w+64\pi w^2$$

This formula is an example of a **polynomial function**. A polynomial
function consists of either zero or the sum of a finite number of non-zero
terms, each of which is a product of a number, called the coefficient of the
term, and a variable raised to a non-negative integer power.

{{< callout type="info" >}}
**Polynomial functions.** Let $n$ be a non-negative integer. A **polynomial
function** is a function that can be written in the form

$$f(x)=a_nx^n+a_{n-1}x^{n-1}+\ldots+a_2x^2+a_1x+a_0$$

This is called the general form of a polynomial function. Each $a_i$ is a
coefficient and in this section can only be a real number, but $a_n\ne 0$.
Each product $a_ix^i$ is a **term of a polynomial function**.
{{< /callout >}}

**Example.** Which of the following are polynomial functions?

$$
\begin{array}{l}
f(x)=2x^3\cdot 3x+4 \\
g(x)=-x(x^2-4) \\
h(x)=5\sqrt{x}+2
\end{array}
$$

**Solution.** The first two functions are examples of polynomial functions
because they can be written in the form
$f(x)=a_nx^n+a_{n-1}x^{n-1}+\ldots+a_2x^2+a_1x+a_0$ where the powers are
non-negative integers and the coefficients are real numbers.

{{< callout type="info" >}}
  **Source note.** The source module prints this closing term with a
  duplicated subscript, $\ldots+a_1x+a_1$, where the general form should end
  in the constant term $a_0$. The same module writes $a_0$ correctly three
  other times — the Polynomial Functions definition box, the Terminology of
  Polynomial Functions diagram, and the glossary. This page writes $a_0$.
{{< /callout >}}

- $f(x)$ can be written as $f(x)=6x^4+4$.
- $g(x)$ can be written as $g(x)=-x^3+4x$.
- $h(x)$ cannot be written in this form and is therefore not a polynomial
  function.

## Identifying the degree and leading coefficient of a polynomial function

Because of the form of a polynomial function, we can see an infinite variety
in the number of terms and the power of the variable. Although the order of
the terms in the polynomial function is not important for performing
operations, we typically arrange the terms in descending order of power, or
in general form. The **degree** of the polynomial is the highest power of the
variable that occurs in the polynomial; it is the power of the first
variable if the function is in general form. The **leading term** is the
term containing the highest power of the variable, or the term with the
highest degree. The **leading coefficient** is the coefficient of the
leading term.

{{< callout type="info" >}}
**Terminology of polynomial functions.** We often rearrange polynomials so
that the powers are descending, $f(x)=\underbrace{a_n}_{\text{leading
coefficient}}\underbrace{x^n}_{\text{degree}}+\ldots+a_2x^2+a_1x+a_0$, with
$\underbrace{a_nx^n}_{\text{leading term}}$ the term containing the highest
power. When a polynomial is written this way, we say that it is in general
form.
{{< /callout >}}

{{< callout type="info" >}}
**How to:** given a polynomial function, identify the degree and leading
coefficient.

1. Find the highest power of $x$ to determine the degree of the function.
2. Identify the term containing the highest power of $x$ to find the leading
   term.
3. Identify the coefficient of the leading term.
{{< /callout >}}

**Example.** Identify the degree, leading term, and leading coefficient of
the following polynomial functions.

$$
\begin{array}{l}
f(x)=3+2x^2-4x^3 \\
g(t)=5t^5-2t^3+7t \\
h(p)=6p-p^3-2
\end{array}
$$

**Solution.** For the function $f(x)$, the highest power of $x$ is 3, so the
degree is 3. The leading term is the term containing that degree, $-4x^3$.
The leading coefficient is the coefficient of that term, $-4$.

For the function $g(t)$, the highest power of $t$ is 5, so the degree is 5.
The leading term is the term containing that degree, $5t^5$. The leading
coefficient is the coefficient of that term, 5.

For the function $h(p)$, the highest power of $p$ is 3, so the degree is 3.
The leading term is the term containing that degree, $-p^3$; the leading
coefficient is the coefficient of that term, $-1$.

{{< fillin
  question="Identify the degree of the polynomial $f(x)=4x^2-x^6+2x-6$."
  answer="6"
  hint="The degree is the highest power of x that appears in the polynomial."
>}}

{{< fillin
  question="Identify the leading term of that same polynomial, $f(x)=4x^2-x^6+2x-6$."
  answer="-x^{6}"
  answerDisplay="$-x^6$"
  hint="The leading term is the term containing the highest power of x."
>}}

{{< fillin
  question="Identify the leading coefficient of that same polynomial, $f(x)=4x^2-x^6+2x-6$."
  answer="-1"
  hint="The leading coefficient is the coefficient of the leading term."
>}}

## Identifying end behavior of polynomial functions

Knowing the degree of a polynomial function is useful in helping us predict
its end behavior. To determine its end behavior, look at the leading term of
the polynomial function. Because the power of the leading term is the
highest, that term will grow significantly faster than the other terms as
$x$ gets very large or very small, so its behavior will dominate the graph.
For any polynomial, the end behavior of the polynomial will match the end
behavior of the term of highest degree. See the table below.

| Polynomial function | Leading term |
| :--- | :--- |
| $f(x)=5x^4+2x^3-x-4$ | $5x^4$ |
| $f(x)=-2x^6-x^5+3x^4+x^3$ | $-2x^6$ |
| $f(x)=3x^5-4x^4+2x^2+1$ | $3x^5$ |
| $f(x)=-6x^3+7x^2+3x+1$ | $-6x^3$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 5x to the fourth plus 2x cubed minus x minus 4: a steep W-shaped curve with two dips near x equals negative 1 and x equals 1, rising past y equals 6 on both sides. The x-axis runs from negative 5 to 5 and the y-axis from negative 6 to 6.","xMin":-5,"xMax":5,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[-4,-1,0,2,5],"arrows":true}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals negative 2x to the sixth minus x to the fifth plus 3x to the fourth plus x cubed: a curve with two dips near x equals negative 1 and x equals 1 that falls toward negative infinity on both sides, exiting the bottom of the frame past y equals negative 6. The x-axis runs from negative 5 to 5 and the y-axis from negative 6 to 6.","xMin":-5,"xMax":5,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[0,0,0,1,3,-1,-2],"arrows":true}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 3x to the fifth minus 4x to the fourth plus 2x squared plus 1: a curve falling steeply from the bottom left, leveling near the origin, and rising steeply past y equals 6 just after x equals 1. The x-axis runs from negative 5 to 5 and the y-axis from negative 6 to 6.","xMin":-5,"xMax":5,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[1,0,2,0,-4,3],"arrows":true}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals negative 6x cubed plus 7x squared plus 3x plus 1: a curve rising from the bottom left to a hump above the x-axis near x equals 1, then falling steeply past y equals negative 6 before x equals 2. The x-axis runs from negative 5 to 5 and the y-axis from negative 6 to 6.","xMin":-5,"xMax":5,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[1,3,7,-6],"arrows":true}]}
{{< /apfigure >}}

**Example.** Describe the end behavior and determine a possible degree of the
polynomial function graphed below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A curve falling from the top left, exiting the bottom of the frame near x equals negative 3, rising to a local maximum, dipping to a local minimum, then rising again and exiting the top of the frame near x equals 5. The x-axis runs from negative 6 to 6 and the y-axis from negative 5 to 6.","xMin":-6,"xMax":6,"yMin":-5,"yMax":6,"unit":20,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[1.2,-0.9,-0.45,0.15],"arrows":true}]}
{{< /apfigure >}}

**Solution.** As the input values $x$ get very large, the output values
$f(x)$ increase without bound. As the input values $x$ get very small, the
output values $f(x)$ decrease without bound. We can describe the end
behavior symbolically by writing

$$
\begin{array}{lrcl}
\text{as } x\to-\infty, & f(x) &\to& -\infty \\[4pt]
\text{as } x\to\infty, & f(x) &\to& \infty
\end{array}
$$

In words, we could say that as $x$ values approach infinity, the function
values approach infinity, and as $x$ values approach negative infinity, the
function values approach negative infinity.

We can tell this graph has the shape of an odd degree power function that has
not been reflected, so the degree of the polynomial creating this graph must
be odd and the leading coefficient must be positive.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A dome-shaped curve with a single hump peaking near x equals 0.5, falling away steeply on both sides and exiting the bottom of the frame near x equals negative 2 and x equals 3. The x-axis runs from negative 6 to 6 and the y-axis from negative 6 to 6.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[2.98125,0.15,-0.45,0.6,-0.3],"arrows":true}]}
{{< /apfigure >}}

{{< multiplechoice
  question="What can we conclude about the end behavior and shape of the polynomial function graphed above?"
  answer="As $x$ approaches both negative and positive infinity, $f(x)$ decreases without bound: the shape of an even-degree power function with a negative leading coefficient."
  hint="Trace both ends of the curve off the frame — do they exit the same side or opposite sides?"
>}}
As $x$ approaches negative infinity, $f(x)$ decreases without bound, and as $x$ approaches positive infinity, $f(x)$ increases without bound: the shape of an odd-degree power function with a positive leading coefficient.
As $x$ approaches both negative and positive infinity, $f(x)$ decreases without bound: the shape of an even-degree power function with a negative leading coefficient.
As $x$ approaches both negative and positive infinity, $f(x)$ increases without bound: the shape of an even-degree power function with a positive leading coefficient.
As $x$ approaches negative infinity, $f(x)$ increases without bound, and as $x$ approaches positive infinity, $f(x)$ decreases without bound: the shape of an odd-degree power function with a negative leading coefficient.
{{< /multiplechoice >}}

**Example.** Given the function $f(x)=-3x^2(x-1)(x+4)$, express the function
as a polynomial in general form, and determine the leading term, degree, and
end behavior of the function.

**Solution.** Obtain the general form by expanding the given expression for
$f(x)$.

$$
\begin{array}{lrcl}
& f(x) &=& -3x^2(x-1)(x+4) \\[4pt]
& &=& -3x^2(x^2+3x-4) \\[4pt]
& &=& -3x^4-9x^3+12x^2
\end{array}
$$

The general form is $f(x)=-3x^4-9x^3+12x^2$. The leading term is $-3x^4$;
therefore, the degree of the polynomial is 4. The degree is even (4) and the
leading coefficient is negative ($-3$), so the end behavior is

$$
\begin{array}{lrcl}
\text{as } x\to-\infty, & f(x) &\to& -\infty \\[4pt]
\text{as } x\to\infty, & f(x) &\to& -\infty
\end{array}
$$

{{< fillin
  question="Given the function $f(x)=0.2(x-2)(x+1)(x-5)$, express the function as a polynomial in general form."
  answer="0.2x^3-1.2x^2+0.6x+2"
  answerForm="expanded"
  answerDisplay="$0.2x^3-1.2x^2+0.6x+2$"
  hint="Multiply the three binomial factors together, then distribute the 0.2."
>}}

{{< multiplechoice
  question="What is the end behavior of that same function, $f(x)=0.2(x-2)(x+1)(x-5)$?"
  answer="As $x$ approaches negative infinity, $f(x)$ decreases without bound, and as $x$ approaches positive infinity, $f(x)$ increases without bound."
  hint="The degree is 3 (odd) and the leading coefficient, 0.2, is positive."
>}}
As $x$ approaches both negative and positive infinity, $f(x)$ increases without bound.
As $x$ approaches negative infinity, $f(x)$ decreases without bound, and as $x$ approaches positive infinity, $f(x)$ increases without bound.
As $x$ approaches negative infinity, $f(x)$ increases without bound, and as $x$ approaches positive infinity, $f(x)$ decreases without bound.
As $x$ approaches both negative and positive infinity, $f(x)$ decreases without bound.
{{< /multiplechoice >}}

## Identifying local behavior of polynomial functions

In addition to the end behavior of polynomial functions, we are also
interested in what happens in the "middle" of the function. In particular, we
are interested in locations where graph behavior changes. A **turning
point** is a point at which the function values change from increasing to
decreasing or decreasing to increasing.

We are also interested in the intercepts. As with all functions, the
$y$-intercept is the point at which the graph intersects the vertical axis.
The point corresponds to the coordinate pair in which the input value is
zero. Because a polynomial is a function, only one output value corresponds
to each input value so there can be only one $y$-intercept $(0,a_0)$. The
$x$-intercepts occur at the input values that correspond to an output value
of zero. It is possible to have more than one $x$-intercept. See the figure
below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A schematic cubic-shaped curve illustrating vocabulary: a small hump above the x-axis is marked as a turning point, a deeper dip below the x-axis is marked as a second turning point, the three points where the curve crosses the x-axis are marked as x-intercepts, and the point where the curve crosses the y-axis, below the axis, is marked as the y-intercept. No axis numbers are shown.","xMin":-2,"xMax":2,"yMin":-2.5,"yMax":1.5,"unit":85,"tickLabels":false,"grid":false,"polynomials":[{"coeffs":[-0.72,-2.58,0.3,3],"arrows":true}],"points":[{"at":[-0.503,0.292],"label":"Turning point"},{"at":[0.503,-1.56],"label":"Turning point"},{"at":[0,-0.72],"label":"y-intercept"}],"texts":[{"at":[-1.95,0.35],"text":"x-intercepts","anchor":"start"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
**Intercepts and turning points of polynomial functions.** A **turning
point** of a graph is a point at which the graph changes direction from
increasing to decreasing or decreasing to increasing. The $y$-intercept is
the point at which the function has an input value of zero. The
$x$-intercepts are the points at which the output value is zero.
{{< /callout >}}

{{< callout type="info" >}}
**How to:** given a polynomial function, determine the intercepts.

1. Determine the $y$-intercept by setting $x=0$ and finding the
   corresponding output value.
2. Determine the $x$-intercepts by solving for the input values that yield an
   output value of zero.
{{< /callout >}}

**Example.** Given the polynomial function $f(x)=(x-2)(x+1)(x-4)$, written
in factored form for your convenience, determine the $y$- and $x$-intercepts.

**Solution.** The $y$-intercept occurs when the input is zero so substitute
0 for $x$.

$$
\begin{array}{lrcl}
& f(0) &=& (0-2)(0+1)(0-4) \\[4pt]
& &=& (-2)(1)(-4) \\[4pt]
& &=& 8
\end{array}
$$

The $y$-intercept is $(0,8)$.

The $x$-intercepts occur when the output is zero.

$$
\begin{array}{lrcl}
& 0 &=& (x-2)(x+1)(x-4) \\[4pt]
x-2=0 \quad\text{or}\quad x+1=0 \quad\text{or}\quad x-4=0 & & &\\[4pt]
x=2 \quad\text{or}\quad x=-1 \quad\text{or}\quad x=4 & & &
\end{array}
$$

The $x$-intercepts are $(2,0)$, $(-1,0)$, and $(4,0)$.

We can see these intercepts on the graph of the function shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals the quantity x minus 2, times the quantity x plus 1, times the quantity x minus 4. The curve crosses the x-axis at negative 1, 2, and 4, crosses the y-axis at 8, and has a local maximum above the axis between negative 1 and 2 and a local minimum below the axis between 2 and 4. The x-axis runs from negative 5 to 5 and the y-axis from negative 4 to 9.","xMin":-5,"xMax":5,"yMin":-4,"yMax":9,"unit":24,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[8,-2,-3,1],"arrows":true}],"points":[{"at":[-1,0]},{"at":[2,0]},{"at":[4,0]},{"at":[0,8]}]}
{{< /apfigure >}}

**Example.** Given the polynomial function $f(x)=x^4-4x^2-45$, determine the
$y$- and $x$-intercepts.

**Solution.** The $y$-intercept occurs when the input is zero.

$$
\begin{array}{lrcl}
& f(0) &=& (0)^4-4(0)^2-45 \\[4pt]
& &=& -45
\end{array}
$$

The $y$-intercept is $(0,-45)$.

The $x$-intercepts occur when the output is zero. To determine when the
output is zero, we will need to factor the polynomial.

$$
\begin{array}{lrcl}
& f(x) &=& x^4-4x^2-45 \\[4pt]
& &=& (x^2-9)(x^2+5) \\[4pt]
& &=& (x-3)(x+3)(x^2+5)
\end{array}
$$

$$0=(x-3)(x+3)(x^2+5)$$

$$x-3=0 \quad\text{or}\quad x+3=0 \quad\text{or}\quad x^2+5=0$$

$$x=3 \quad\text{or}\quad x=-3 \quad\text{or}\quad (\text{no real solution})$$

The $x$-intercepts are $(3,0)$ and $(-3,0)$.

We can see these intercepts on the graph of the function shown below. We can
see that the function is even because $f(x)=f(-x)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals x to the fourth minus 4x squared minus 45. The curve crosses the x-axis at negative 3 and 3, crosses the y-axis at negative 45, and is symmetric about the y-axis with a broad dip in the middle and steep rises past both x equals negative 3 and x equals 3. The x-axis runs from negative 5 to 5 and the y-axis from negative 120 to 120.","xMin":-5,"xMax":5,"yMin":-120,"yMax":120,"xUnit":24,"yUnit":1.6,"tickLabels":true,"tickStep":20,"xTickStep":1,"yTickStep":20,"xTickGrouping":false,"polynomials":[{"coeffs":[-45,0,-4,0,1],"arrows":true}],"points":[{"at":[-3,0]},{"at":[3,0]},{"at":[0,-45]}]}
{{< /apfigure >}}

{{< fillin
  question="Given the polynomial function $f(x)=2x^3-6x^2-20x$, what is the y-intercept?"
  answer="0"
  answerDisplay="$(0,0)$"
  hint="Substitute x = 0 into the function."
>}}

{{< fillin
  question="Now find the x-intercepts of that same function, $f(x)=2x^3-6x^2-20x$. Enter the three x-coordinates, from least to greatest, separated by commas."
  answer="-2,0,5"
  answerDisplay="$(-2,0),(0,0),(5,0)$"
  hint="Factor out 2x first, then factor the remaining quadratic."
>}}

## Comparing smooth and continuous graphs

The degree of a polynomial function helps us to determine the number of
$x$-intercepts and the number of turning points. A polynomial function of
$n$th degree is the product of $n$ factors, so it will have at most $n$ roots
or zeros, or $x$-intercepts. The graph of the polynomial function of degree
$n$ must have at most $n-1$ turning points. This means the graph has at most
one fewer turning point than the degree of the polynomial or one fewer than
the number of factors.

A **continuous function** has no breaks in its graph: the graph can be drawn
without lifting the pen from the paper. A **smooth curve** is a graph that has
no sharp corners. The turning points of a smooth graph must always occur at
rounded curves. The graphs of polynomial functions are both continuous and
smooth.

{{< callout type="info" >}}
**Intercepts and turning points of polynomials.** A polynomial of degree $n$
will have, at most, $n$ $x$-intercepts and $n-1$ turning points.
{{< /callout >}}

**Example.** Without graphing the function, determine the local behavior of
the function by finding the maximum number of $x$-intercepts and turning
points for $f(x)=-3x^{10}+4x^7-x^4+2x^3$.

**Solution.** The polynomial has a degree of 10, so there are at most 10
$x$-intercepts and at most $10-1=9$ turning points.

{{< fillin
  question="Without graphing, find the maximum number of x-intercepts for the polynomial function $f(x)=108-13x^9-8x^4+14x^{12}+2x^3$."
  answer="12"
  hint="Find the degree first: the highest power of x among all the terms."
>}}

{{< fillin
  question="Now find the maximum number of turning points for that same function, $f(x)=108-13x^9-8x^4+14x^{12}+2x^3$."
  answer="11"
  hint="The maximum number of turning points is always one fewer than the degree."
>}}

**Example.** What can we conclude about the polynomial represented by the
graph shown below based on its intercepts and turning points?

{{< apfigure kind="graph" >}}
{"ariaLabel":"An even-degree polynomial graph with a small local maximum near the origin sitting below the x-axis, flanked by two local minima, and two arms rising steeply out of the top of the frame near x equals negative 2 and x equals 2. The curve crosses the x-axis twice. The x-axis runs from negative 5 to 5 and the y-axis from negative 5 to 4.","xMin":-5,"xMax":5,"yMin":-5,"yMax":4,"unit":24,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[-1.5,0,-2.88,0,1],"arrows":true}]}
{{< /apfigure >}}

**Solution.** The end behavior of the graph tells us this is the graph of an
even-degree polynomial. The graph has 2 $x$-intercepts, suggesting a degree
of 2 or greater, and 3 turning points, suggesting a degree of 4 or greater.
Based on this, it would be reasonable to conclude that the degree is even
and at least 4.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An odd-degree polynomial graph entering from the top left, falling to a local minimum, rising to a local maximum, then falling steeply out of the bottom of the frame near x equals 1. The curve crosses the x-axis three times. The x-axis runs from negative 5 to 5 and the y-axis from negative 10 to 10.","xMin":-5,"xMax":5,"yMin":-10,"yMax":10,"unit":18,"tickLabels":true,"tickStep":2,"polynomials":[{"coeffs":[6,2,-6,-2],"arrows":true}]}
{{< /apfigure >}}

{{< multiplechoice
  question="What can we conclude about the polynomial represented by the graph above, based on its intercepts and turning points?"
  answer="The end behavior indicates an odd-degree polynomial function; there are 3 x-intercepts and 2 turning points, so the degree is odd and at least 3. Because of the end behavior, the leading coefficient must be negative."
  hint="Count the x-intercepts and turning points, and check which end of the curve rises and which falls."
>}}
The end behavior indicates an even-degree polynomial function; there are 3 x-intercepts and 2 turning points, so the degree is even and at least 4. Because of the end behavior, the leading coefficient must be negative.
The end behavior indicates an odd-degree polynomial function; there are 3 x-intercepts and 2 turning points, so the degree is odd and at least 3. Because of the end behavior, the leading coefficient must be negative.
The end behavior indicates an odd-degree polynomial function; there are 3 x-intercepts and 2 turning points, so the degree is odd and at least 3. Because of the end behavior, the leading coefficient must be positive.
The end behavior indicates an even-degree polynomial function; there are 3 x-intercepts and 2 turning points, so the degree is even and at least 4. Because of the end behavior, the leading coefficient must be positive.
{{< /multiplechoice >}}

**Example.** Given the function $f(x)=-4x(x+3)(x-4)$, determine the local
behavior.

**Solution.** The $y$-intercept is found by evaluating $f(0)$.

$$
\begin{array}{lrcl}
& f(0) &=& -4(0)(0+3)(0-4) \\[4pt]
& &=& 0
\end{array}
$$

The $y$-intercept is $(0,0)$.

The $x$-intercepts are found by determining the zeros of the function.

$$0=-4x(x+3)(x-4)$$

$$x=0 \quad\text{or}\quad x+3=0 \quad\text{or}\quad x-4=0$$

$$x=0 \quad\text{or}\quad x=-3 \quad\text{or}\quad x=4$$

The $x$-intercepts are $(0,0)$, $(-3,0)$, and $(4,0)$.

The degree is 3 so the graph has at most 2 turning points.

{{< fillin
  question="Given the function $f(x)=0.2(x-2)(x+1)(x-5)$, what is the y-intercept?"
  answer="2"
  answerDisplay="$(0,2)$"
  hint="Evaluate f(0)."
>}}

{{< fillin
  question="What is the maximum number of turning points for that same function, $f(x)=0.2(x-2)(x+1)(x-5)$?"
  answer="2"
  hint="The degree is 3, and the maximum number of turning points is always one fewer than the degree."
>}}

## Key equations

| General form of a polynomial function | $f(x)=a_nx^n+a_{n-1}x^{n-1}+\ldots+a_2x^2+a_1x+a_0$ |
| :--- | :--- |

{{< callout type="info" >}}
  **Source note.** The source module prints this closing term with a
  duplicated subscript, $\ldots+a_1x+a_1$, where the general form should end
  in the constant term $a_0$. The same module writes $a_0$ correctly three
  other times — the Polynomial Functions definition box, the Terminology of
  Polynomial Functions diagram, and the glossary. This page writes $a_0$.
{{< /callout >}}

## Key concepts

- A power function is a variable base raised to a number power.
- The behavior of a graph as the input decreases beyond bound and increases
  beyond bound is called the end behavior.
- The end behavior depends on whether the power is even or odd.
- A polynomial function is the sum of terms, each of which consists of a
  transformed power function with positive whole number power.
- The degree of a polynomial function is the highest power of the variable
  that occurs in a polynomial. The term containing the highest power of the
  variable is called the leading term. The coefficient of the leading term is
  called the leading coefficient.
- The end behavior of a polynomial function is the same as the end behavior
  of the power function represented by the leading term of the function.
- A polynomial of degree $n$ will have at most $n$ $x$-intercepts and at most
  $n-1$ turning points.

## Key terms

**coefficient** — a nonzero real number multiplied by a variable raised to
an exponent. **continuous function** — a function whose graph can be drawn
without lifting the pen from the paper because there are no breaks in the
graph. **degree** — the highest power of the variable that occurs in a
polynomial. **end behavior** — the behavior of the graph of a function as the
input decreases without bound and increases without bound. **leading
coefficient** — the coefficient of the leading term. **leading term** — the
term containing the highest power of the variable. **polynomial function** —
a function that consists of either zero or the sum of a finite number of
non-zero terms, each of which is a product of a number, called the
coefficient of the term, and a variable raised to a non-negative integer
power. **power function** — a function that can be represented in the form
$f(x)=kx^p$ where $k$ is a constant, the base is a variable, and the
exponent, $p$, is a constant. **smooth curve** — a graph with no sharp
corners. **term of a polynomial function** — any $a_ix^i$ of a polynomial
function in the form $f(x)=a_nx^n+a_{n-1}x^{n-1}+\ldots+a_2x^2+a_1x+a_0$.
**turning point** — the location at which the graph of a function changes
direction.

## Practice

### Identify power functions

{{< multiplechoice
  question="Which statement correctly distinguishes the coefficient from the degree in the power function $f(x)=kx^p$?"
  answer="k is the coefficient — the real number multiplied by the variable raised to a power; p is the degree — the highest power the variable is raised to."
  hint="The coefficient multiplies the variable; the degree is the exponent on it."
>}}
k is the coefficient — the real number multiplied by the variable raised to a power; p is the degree — the highest power the variable is raised to.
p is the coefficient — the real number multiplied by the variable raised to a power; k is the degree — the highest power the variable is raised to.
k and p are both called the coefficient of the power function.
k and p are both called the degree of the power function.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify $f(x)=(x^2)^3$ as a power function, a polynomial function, both, or neither."
  answer="Both a power function and a polynomial function"
  hint="Simplify the exponent first — is the result a single term with a variable to a fixed power?"
>}}
Power function only
Polynomial function only
Both a power function and a polynomial function
Neither
{{< /multiplechoice >}}

### Identify end behavior of power functions

{{< multiplechoice
  question="Determine the end behavior of $f(x)=x^4$."
  answer="As $x$ approaches both negative and positive infinity, $f(x)$ increases without bound."
  hint="The exponent is even and the coefficient is positive."
>}}
As $x$ approaches negative infinity, $f(x)$ decreases without bound, and as $x$ approaches positive infinity, $f(x)$ increases without bound.
As $x$ approaches both negative and positive infinity, $f(x)$ increases without bound.
As $x$ approaches both negative and positive infinity, $f(x)$ decreases without bound.
As $x$ approaches negative infinity, $f(x)$ increases without bound, and as $x$ approaches positive infinity, $f(x)$ decreases without bound.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine the end behavior of $f(x)=-x^4$."
  answer="As $x$ approaches both negative and positive infinity, $f(x)$ decreases without bound."
  hint="The exponent is even and the coefficient is negative."
>}}
As $x$ approaches negative infinity, $f(x)$ increases without bound, and as $x$ approaches positive infinity, $f(x)$ decreases without bound.
As $x$ approaches both negative and positive infinity, $f(x)$ decreases without bound.
As $x$ approaches both negative and positive infinity, $f(x)$ increases without bound.
As $x$ approaches negative infinity, $f(x)$ decreases without bound, and as $x$ approaches positive infinity, $f(x)$ increases without bound.
{{< /multiplechoice >}}

{{< multiplechoice
  question="In general, what is the end behavior of a polynomial with odd degree if the leading coefficient is positive?"
  answer="As $x$ decreases without bound, so does $f(x)$; as $x$ increases without bound, so does $f(x)$."
  hint="An odd-degree, positive-leading-coefficient polynomial behaves like $x^3$ far from the origin."
>}}
As $x$ decreases or increases without bound, $f(x)$ increases without bound.
As $x$ decreases without bound, $f(x)$ increases without bound; as $x$ increases without bound, $f(x)$ decreases without bound.
As $x$ decreases without bound, so does $f(x)$; as $x$ increases without bound, so does $f(x)$.
As $x$ decreases or increases without bound, $f(x)$ decreases without bound.
{{< /multiplechoice >}}

### Identify polynomial functions

{{< multiplechoice
  question="Identify $f(x)=\tfrac{x^2}{x^2-1}$ as a power function, a polynomial function, both, or neither."
  answer="Neither"
  hint="A polynomial function has no variable in a denominator."
>}}
Power function only
Polynomial function only
Both a power function and a polynomial function
Neither
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify $f(x)=3^{x+1}$ as a power function, a polynomial function, both, or neither."
  answer="Neither"
  hint="Compare the base and the exponent — which one is the variable here?"
>}}
Power function only
Polynomial function only
Both a power function and a polynomial function
Neither
{{< /multiplechoice >}}

### Identify the degree and leading coefficient of polynomial functions

{{< fillin
  question="Find the degree of the polynomial $7-2x^2$."
  answer="2"
  hint="Write the polynomial in general form first, then read off the highest power."
>}}

{{< fillin
  question="Find the leading coefficient of that same polynomial, $7-2x^2$."
  answer="-2"
  hint="The leading coefficient is the coefficient of the term with the highest power."
>}}

{{< fillin
  question="Find the degree of the polynomial $x(4-x^2)(2x+1)$."
  answer="4"
  hint="Multiply out the factors, or track the highest power each factor contributes."
>}}

{{< fillin
  question="Find the leading coefficient of that same polynomial, $x(4-x^2)(2x+1)$."
  answer="-2"
  hint="Multiply the leading terms of the three factors together."
>}}

{{< multiplechoice
  question="What can we conclude if, in general, the graph of a polynomial function exhibits this end behavior: as $x$ approaches negative infinity, $f(x)$ approaches negative infinity, and as $x$ approaches positive infinity, $f(x)$ approaches negative infinity?"
  answer="The polynomial function is of even degree and its leading coefficient is negative."
  hint="Both ends fall — match that against the even/odd, positive/negative comparison graphs."
>}}
The polynomial function is of odd degree and its leading coefficient is positive.
The polynomial function is of even degree and its leading coefficient is negative.
The polynomial function is of even degree and its leading coefficient is positive.
The polynomial function is of odd degree and its leading coefficient is negative.
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 3.3: Power
Functions and Polynomial Functions](https://openstax.org/books/precalculus-2e/pages/3-3-power-functions-and-polynomial-functions)
by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA
4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original
for free at [openstax.org](https://openstax.org/details/books/precalculus-2e).
Changes: recreated every graph as an accessible inline SVG generated from its
exact or fitted equation, matching the source's window, arrows, and marked
points — the even-power family $x^2,x^4,x^6$ and the odd-power family
$x^3,x^5,x^7$ on shared grids; the source's four-panel end-behavior schematic
(even/odd power against positive/negative coefficient), restored as four
separate figures in the source's own reading order, each drawn from the
simplest representative of its case ($x^2$, $x^3$, $-x^2$, $-x^3$) since the
source's cells carry no formula of their own; $x^8$;
$-x^9$; the four Key Equations table graphs from their exact polynomials
($5x^4+2x^3-x-4$, $-2x^6-x^5+3x^4+x^3$, $3x^5-4x^4+2x^2+1$,
$-6x^3+7x^2+3x+1$); $(x-2)(x+1)(x-4)$ and $x^4-4x^2-45$ with their intercepts
marked; and fitted an explicit cubic or quartic formula, recorded in the
source ledger, for the four schematic figures that had no source formula (the
turning-point/intercept vocabulary diagram, the "describe the end behavior"
generic odd-degree curve, the generic even-degree dome, and the two
"conclude the degree" schematic curves) — never traced as a freeform spline;
condensed the paired plain and annotated versions of the turning-point
example's graph into one labeled figure; presented the source's tabular data
(the bird population, and the polynomial/leading-term table) as Markdown
tables; replaced the "Terminology of Polynomial Functions" annotated artwork
(arrows from labels into the general-form equation) with the equivalent
underbrace annotation directly in the KaTeX; corrected a duplicated
subscript in the source's general-form formula, $\ldots+a_1x+a_1$, to
$\ldots+a_1x+a_0$ in both the Example about identifying polynomial functions
and the Key Equations table, each flagged with a visible Source note callout
— the correct $a_0$ form already appears elsewhere in the same module (the
Polynomial Functions definition box, the Terminology diagram, and the
glossary), and the duplicated-subscript version is not a graded answer, just
uncorrected exposition; omitted the decorative
photograph of birds on a cliff, which carries no mathematics; omitted the
Media callout's external links; converted the practice problems ("Try Its")
into interactive exercises with instant feedback, using multiple choice for
every end-behavior and shape judgement (never gradeable as free-response math)
and splitting each multipart item into one component per part; and adapted 12
selected end-of-section exercises — a coefficient-versus-degree conceptual
question, a power/polynomial/neither classification, two more
power/polynomial/neither classifications, two pure-power end-behavior
judgements, a general odd-degree end-behavior judgement, two
degree-and-leading-coefficient pairs (four fill-ins), and an
end-behavior-to-degree-and-coefficient conclusion — into 12 interactive
components in a closing Practice block, one group per objective.</small>
