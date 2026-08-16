---
title: Zeros of Polynomial Functions
description: >-
  Evaluating polynomials with the Remainder Theorem, using the Factor
  Theorem to solve polynomial equations, applying the Rational Zero Theorem
  and synthetic division to find zeros, using the Linear Factorization
  Theorem and the Complex Conjugate Theorem to build a polynomial from its
  zeros, applying Descartes' Rule of Signs, and solving real-world
  applications — adapted from OpenStax Precalculus 2e, Section 3.6.
source_section: "3.6"
weight: 6
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Evaluate a polynomial using the Remainder Theorem
- Use the Factor Theorem to solve a polynomial equation
- Use the Rational Zero Theorem to find rational zeros
- Find zeros of a polynomial function
- Use the Linear Factorization Theorem to find polynomials with given zeros
- Use Descartes' Rule of Signs
- Solve real-world applications of polynomial equations
{{< /callout >}}

A new bakery offers decorated, multi-tiered cakes for display and cutting
at Quinceañera and wedding celebrations, as well as sheet cakes to serve
most of the guests. The bakery wants the volume of a small sheet cake to be
351 cubic inches. The cake is in the shape of a rectangular solid. They
want the length of the cake to be four inches longer than the width of the
cake and the height of the cake to be one-third of the width. What should
the dimensions of the cake pan be?

This problem can be solved by writing a cubic function and solving a cubic
equation for the volume of the cake. In this section, we will discuss a
variety of tools for writing polynomial functions and solving polynomial
equations.

## Evaluating a polynomial using the Remainder Theorem

In the last section, we learned how to divide polynomials. We can now use
polynomial division to evaluate polynomials using the **Remainder
Theorem**. If the polynomial is divided by $x-k$, the remainder may be
found quickly by evaluating the polynomial function at $k$, that is,
$f(k)$. Let's walk through the proof of the theorem.

Recall that the **Division Algorithm** states that, given a polynomial
dividend $f(x)$ and a non-zero polynomial divisor $d(x)$ where the degree
of $d(x)$ is less than or equal to the degree of $f(x)$, there exist unique
polynomials $q(x)$ and $r(x)$ such that

$$f(x)=d(x)q(x)+r(x)$$

If the divisor, $d(x)$, is $x-k$, this takes the form

$$f(x)=(x-k)q(x)+r$$

Since the divisor $x-k$ is linear, the remainder will be a constant, $r$.
And, if we evaluate this for $x=k$, we have

$$
\begin{array}{lrcl}
& f(k) &=& (k-k)q(k)+r \\[4pt]
& &=& 0\cdot q(k)+r \\[4pt]
& &=& r
\end{array}
$$

In other words, $f(k)$ is the remainder obtained by dividing $f(x)$ by
$x-k$.

{{< callout type="info" >}}
  **The Remainder Theorem.** If a polynomial $f(x)$ is divided by $x-k$,
  then the remainder is the value $f(k)$.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a polynomial function $f$, evaluate $f(x)$ at $x=k$
  using the Remainder Theorem.

  1. Use synthetic division to divide the polynomial by $x-k$.
  2. The remainder is the value $f(k)$.
{{< /callout >}}

**Example.** Use the Remainder Theorem to evaluate
$f(x)=6x^4-x^3-15x^2+2x-7$ at $x=2$.

**Solution.** To find the remainder using the Remainder Theorem, use
synthetic division to divide the polynomial by $x-2$.

$$
\begin{array}{r|rrrrr}
2 & 6 & -1 & -15 & 2 & -7 \\
  &   & 12 & 22 & 14 & 32 \\
\hline
  & 6 & 11 & 7 & 16 & 25
\end{array}
$$

The remainder is 25. Therefore, $f(2)=25$.

**Analysis.** We can check our answer by evaluating $f(2)$.

$$
\begin{array}{lrcl}
& f(x) &=& 6x^4-x^3-15x^2+2x-7 \\[4pt]
& f(2) &=& 6(2)^4-(2)^3-15(2)^2+2(2)-7 \\[4pt]
& &=& 25
\end{array}
$$

{{< fillin
  question="Use the Remainder Theorem to evaluate $f(x)=2x^5-3x^4-9x^3+8x^2+2$ at $x=-3$."
  answer="-412"
  answerDisplay="$f(-3)=-412$"
  hint="Use synthetic division with $k=-3$; the last entry in the bottom row is $f(-3)$."
>}}

## Using the Factor Theorem to solve a polynomial equation

The **Factor Theorem** is another theorem that helps us analyze polynomial
equations. It tells us how the zeros of a polynomial are related to the
factors. Recall that the Division Algorithm tells us

$$f(x)=(x-k)q(x)+r.$$

If $k$ is a zero, then the remainder $r$ is $f(k)=0$ and
$f(x)=(x-k)q(x)+0$ or $f(x)=(x-k)q(x)$.

Notice, written in this form, $x-k$ is a factor of $f(x)$. We can conclude
if $k$ is a zero of $f(x)$, then $x-k$ is a factor of $f(x)$.

Similarly, if $x-k$ is a factor of $f(x)$, then the remainder of the
Division Algorithm $f(x)=(x-k)q(x)+r$ is 0. This tells us that $k$ is a
zero.

This pair of implications is the Factor Theorem. As we will soon see, a
polynomial of degree $n$ in the complex number system will have $n$ zeros.
We can use the Factor Theorem to completely factor a polynomial into the
product of $n$ factors. Once the polynomial has been completely factored,
we can easily determine the zeros of the polynomial.

{{< callout type="info" >}}
  **The Factor Theorem.** According to the Factor Theorem, $k$ is a zero of
  $f(x)$ if and only if $(x-k)$ is a factor of $f(x)$.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a factor and a third-degree polynomial, use the Factor
  Theorem to factor the polynomial.

  1. Use synthetic division to divide the polynomial by $(x-k)$.
  2. Confirm that the remainder is 0.
  3. Write the polynomial as the product of $(x-k)$ and the quadratic
     quotient.
  4. If possible, factor the quadratic.
  5. Write the polynomial as the product of factors.
{{< /callout >}}

**Example.** Show that $(x+2)$ is a factor of $x^3-6x^2-x+30$. Find the
remaining factors. Use the factors to determine the zeros of the
polynomial.

**Solution.** We can use synthetic division to show that $(x+2)$ is a
factor of the polynomial.

$$
\begin{array}{r|rrrr}
-2 & 1 & -6 & -1 & 30 \\
   &   & -2 & 16 & -30 \\
\hline
   & 1 & -8 & 15 & 0
\end{array}
$$

The remainder is zero, so $(x+2)$ is a factor of the polynomial. We can use
the Division Algorithm to write the polynomial as the product of the
divisor and the quotient:

$$(x+2)(x^2-8x+15)$$

We can factor the quadratic factor to write the polynomial as

$$(x+2)(x-3)(x-5)$$

By the Factor Theorem, the zeros of $x^3-6x^2-x+30$ are $-2$, 3, and 5.

{{< fillin
  question="Use the Factor Theorem to find the zeros of $f(x)=x^3+4x^2-4x-16$ given that $(x-2)$ is a factor of the polynomial. Enter all of them, separated by commas."
  answer="2,-2,-4"
  answerMode="unordered"
  answerDisplay="$x=2$, $x=-2$, or $x=-4$"
  hint="Divide by $(x-2)$ to get a quadratic quotient, then factor it."
>}}

## Using the Rational Zero Theorem to find rational zeros

Another use for the Remainder Theorem is to test whether a rational number
is a zero for a given polynomial. But first we need a pool of rational
numbers to test. The **Rational Zero Theorem** helps us to narrow down the
number of possible rational zeros using the ratio of the factors of the
constant term and factors of the leading coefficient of the polynomial.

Consider a quadratic function with two zeros, $x=\tfrac{2}{5}$ and
$x=\tfrac{3}{4}$. By the Factor Theorem, these zeros have factors
associated with them. Let us set each factor equal to 0, and then construct
the original quadratic function absent its stretching factor.

$$
\begin{array}{lrcl}
\text{Set each factor equal to }0. & x-\tfrac{2}{5} &=& 0\ \text{or}\ x-\tfrac{3}{4}=0 \\[4pt]
\text{Multiply both sides by the denominator to clear fractions.} & 5x-2 &=& 0\ \text{or}\ 4x-3=0 \\[4pt]
\text{Create the quadratic function, multiplying the factors.} & f(x) &=& (5x-2)(4x-3) \\[4pt]
\text{Expand the polynomial.} & f(x) &=& 20x^2-23x+6 \\[4pt]
& f(x) &=& (5\cdot4)x^2-23x+(2\cdot3)
\end{array}
$$

Notice that two of the factors of the constant term, 6, are the two
numerators from the original rational roots: 2 and 3. Similarly, two of the
factors from the leading coefficient, 20, are the two denominators from the
original rational roots: 5 and 4.

We can infer that the numerators of the rational roots will always be
factors of the constant term and the denominators will be factors of the
leading coefficient. This is the essence of the Rational Zero Theorem; it
is a means to give us a pool of possible rational zeros.

{{< callout type="info" >}}
  **The Rational Zero Theorem.** The Rational Zero Theorem states that, if
  the polynomial $f(x)=a_nx^n+a_{n-1}x^{n-1}+\ldots+a_1x+a_0$ has integer
  coefficients and $a_n\ne0$, then every rational zero of $f(x)$ has the
  form $\tfrac{p}{q}$ where $p$ is a factor of the constant term $a_0$ and
  $q$ is a factor of the leading coefficient $a_n$.

  When the leading coefficient is 1, the possible rational zeros are the
  factors of the constant term.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a polynomial function $f(x)$, use the Rational Zero
  Theorem to find rational zeros.

  1. Determine all factors of the constant term and all factors of the
     leading coefficient.
  2. Determine all possible values of $\tfrac{p}{q}$, where $p$ is a factor
     of the constant term and $q$ is a factor of the leading coefficient.
     Be sure to include both positive and negative candidates.
  3. Determine which possible zeros are actual zeros by evaluating each
     case of $f\left(\tfrac{p}{q}\right)$.
{{< /callout >}}

**Example.** List all possible rational zeros of $f(x)=2x^4-5x^3+x^2-4$.

**Solution.** The only possible rational zeros of $f(x)$ are the quotients
of the factors of the last term, $-4$, and the factors of the leading
coefficient, 2.

The constant term is $-4$; the factors of $-4$ are $p=\pm1,\pm2,\pm4$.

The leading coefficient is 2; the factors of 2 are $q=\pm1,\pm2$.

If any of the four real zeros are rational zeros, then they will be one of
the following factors of $-4$ divided by one of the factors of 2.

$$
\begin{array}{lrcl}
& \tfrac{p}{q} &=& \pm\tfrac{1}{1},\ \pm\tfrac{1}{2} \\[4pt]
& \tfrac{p}{q} &=& \pm\tfrac{2}{1},\ \pm\tfrac{2}{2} \\[4pt]
& \tfrac{p}{q} &=& \pm\tfrac{4}{1},\ \pm\tfrac{4}{2}
\end{array}
$$

Note that $\tfrac{2}{2}=1$ and $\tfrac{4}{2}=2$, which have already been
listed. So we can shorten our list.

$$\tfrac{p}{q}=\tfrac{\text{Factors of the last}}{\text{Factors of the first}}=\pm1,\pm2,\pm4,\pm\tfrac{1}{2}$$

**Example.** Use the Rational Zero Theorem to find the rational zeros of
$f(x)=2x^3+x^2-4x+1$.

**Solution.** The Rational Zero Theorem tells us that if $\tfrac{p}{q}$ is
a zero of $f(x)$, then $p$ is a factor of 1 and $q$ is a factor of 2.

$$
\begin{array}{lrcl}
& \tfrac{p}{q} &=& \tfrac{\text{factor of constant term}}{\text{factor of leading coefficient}} \\[4pt]
& &=& \tfrac{\text{factor of 1}}{\text{factor of 2}}
\end{array}
$$

The factors of 1 are $\pm1$ and the factors of 2 are $\pm1$ and $\pm2$. The
possible values for $\tfrac{p}{q}$ are $\pm1$ and $\pm\tfrac{1}{2}$. These
are the possible rational zeros for the function. We can determine which of
the possible zeros are actual zeros by substituting these values for $x$ in
$f(x)$.

$$
\begin{array}{lrcl}
& f(-1) &=& 2(-1)^3+(-1)^2-4(-1)+1=4 \\[4pt]
& f(1) &=& 2(1)^3+(1)^2-4(1)+1=0 \\[4pt]
& f\left(-\tfrac{1}{2}\right) &=& 2\left(-\tfrac{1}{2}\right)^3+\left(-\tfrac{1}{2}\right)^2-4\left(-\tfrac{1}{2}\right)+1=3 \\[4pt]
& f\left(\tfrac{1}{2}\right) &=& 2\left(\tfrac{1}{2}\right)^3+\left(\tfrac{1}{2}\right)^2-4\left(\tfrac{1}{2}\right)+1=-\tfrac{1}{2}
\end{array}
$$

Of those, $-1$, $-\tfrac{1}{2}$, and $\tfrac{1}{2}$ are not zeros of
$f(x)$. 1 is the only rational zero of $f(x)$.

{{< multiplechoice
  question="Use the Rational Zero Theorem to determine which of the following is true about the rational zeros of $f(x)=x^3-5x^2+2x+1$."
  answer="f(x) has no rational zeros"
  hint="The only possible rational zeros are $\pm1$ (factors of the constant term $1$ over factors of the leading coefficient $1$); test both directly in $f(x)$."
>}}
f(x) has no rational zeros
f(x) has exactly one rational zero
f(x) has exactly two rational zeros
f(x) has exactly three rational zeros
{{< /multiplechoice >}}

## Finding the zeros of polynomial functions

The Rational Zero Theorem helps us to narrow down the list of possible
rational zeros for a polynomial function. Once we have done this, we can
use **synthetic division** repeatedly to determine all of the **zeros** of
a polynomial function.

{{< callout type="info" >}}
  **How to:** given a polynomial function $f$, use synthetic division to
  find its zeros.

  1. Use the Rational Zero Theorem to list all possible rational zeros of
     the function.
  2. Use synthetic division to evaluate a given possible zero by
     synthetically dividing the candidate into the polynomial. If the
     remainder is 0, the candidate is a zero. If the remainder is not
     zero, discard the candidate.
  3. Repeat step two using the quotient found with synthetic division. If
     possible, continue until the quotient is a quadratic.
  4. Find the zeros of the quadratic function. Two possible methods for
     solving quadratics are factoring and using the quadratic formula.
{{< /callout >}}

**Example.** Find the zeros of $f(x)=4x^3-3x-1$.

**Solution.** The Rational Zero Theorem tells us that if $\tfrac{p}{q}$ is
a zero of $f(x)$, then $p$ is a factor of $-1$ and $q$ is a factor of 4.

$$
\begin{array}{lrcl}
& \tfrac{p}{q} &=& \tfrac{\text{factor of constant term}}{\text{factor of leading coefficient}} \\[4pt]
& &=& \tfrac{\text{factor of }-1}{\text{factor of 4}}
\end{array}
$$

The factors of $-1$ are $\pm1$ and the factors of 4 are $\pm1,\pm2,$ and
$\pm4$. The possible values for $\tfrac{p}{q}$ are $\pm1$, $\pm\tfrac{1}{2}$,
and $\pm\tfrac{1}{4}$. These are the possible rational zeros for the
function. We will use synthetic division to evaluate each possible zero
until we find one that gives a remainder of 0. Let's begin with 1.

$$
\begin{array}{r|rrrr}
1 & 4 & 0 & -3 & -1 \\
  &   & 4 & 4 & 1 \\
\hline
  & 4 & 4 & 1 & 0
\end{array}
$$

Dividing by $(x-1)$ gives a remainder of 0, so 1 is a zero of the function.
The polynomial can be written as

$$(x-1)(4x^2+4x+1).$$

The quadratic is a perfect square. $f(x)$ can be written as

$$(x-1)(2x+1)^2.$$

We already know that 1 is a zero. The other zero will have a multiplicity
of 2 because the factor is squared. To find the other zero, we can set the
factor equal to 0.

$$
\begin{array}{lrcl}
& 2x+1 &=& 0 \\[4pt]
& x &=& -\tfrac{1}{2}
\end{array}
$$

The zeros of the function are 1 and $-\tfrac{1}{2}$ with multiplicity 2.

**Analysis.** Look at the graph of the function $f$ below. Notice, at
$x=-0.5$, the graph bounces off the $x$-axis, indicating the even
multiplicity (2,4,6…) for the zero $-0.5$. At $x=1$, the graph crosses the
$x$-axis, indicating the odd multiplicity (1,3,5…) for the zero $x=1$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals 4x cubed minus 3x minus 1, on a grid with x from negative 1.8 to 1.8 and y from negative 2.3 to 1.5. The curve rises from the lower left, touches the x-axis at x equals negative 0.5 without crossing it, labeled Bounce, dips to a local minimum near x equals 0.5, then rises again to cross the x-axis at x equals 1, labeled Cross, and continues upward.","xMin":-1.8,"xMax":1.8,"yMin":-2.3,"yMax":1.5,"unit":55,"grid":false,"tickLabels":true,"xTickStep":0.5,"yTickStep":0.5,"polynomials":[{"coeffs":[-1,-3,0,4],"arrows":true}],"points":[{"at":[-0.5,0],"label":"Bounce","labelSide":"nw"},{"at":[1,0],"label":"Cross","labelSide":"se"}]}'>
<svg role="img" aria-label="The graph of f of x equals 4x cubed minus 3x minus 1, on a grid with x from negative 1.8 to 1.8 and y from negative 2.3 to 1.5. The curve rises from the lower left, touches the x-axis at x equals negative 0.5 without crossing it, labeled Bounce, dips to a local minimum near x equals 0.5, then rises again to cross the x-axis at x equals 1, labeled Cross, and continues upward." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 261" width="250" height="261" font-family="Helvetica, Arial, sans-serif">
  <line x1="24" y1="108.5" x2="226" y2="108.5" stroke="currentColor" stroke-width="1"/>
  <line x1="125" y1="24" x2="125" y2="237" stroke="currentColor" stroke-width="1"/>
  <polygon points="236,108.5 226,113.5 226,103.5" fill="currentColor"/>
  <polygon points="125,14 130,24 120,24" fill="currentColor"/>
  <polygon points="14,108.5 24,103.5 24,113.5" fill="currentColor"/>
  <polygon points="125,247 120,237 130,237" fill="currentColor"/>
  <text x="234" y="100.5" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="133" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="42.5" y1="105.5" x2="42.5" y2="111.5" stroke="currentColor" stroke-width="1"/>
  <text x="42.5" y="123.5" font-size="11" fill="currentColor" text-anchor="middle">−1.5</text>
  <line x1="70" y1="105.5" x2="70" y2="111.5" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="123.5" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="97.5" y1="105.5" x2="97.5" y2="111.5" stroke="currentColor" stroke-width="1"/>
  <text x="97.5" y="123.5" font-size="11" fill="currentColor" text-anchor="middle">−0.5</text>
  <line x1="152.5" y1="105.5" x2="152.5" y2="111.5" stroke="currentColor" stroke-width="1"/>
  <text x="152.5" y="123.5" font-size="11" fill="currentColor" text-anchor="middle">0.5</text>
  <line x1="180" y1="105.5" x2="180" y2="111.5" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="123.5" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="207.5" y1="105.5" x2="207.5" y2="111.5" stroke="currentColor" stroke-width="1"/>
  <text x="207.5" y="123.5" font-size="11" fill="currentColor" text-anchor="middle">1.5</text>
  <line x1="122" y1="218.5" x2="128" y2="218.5" stroke="currentColor" stroke-width="1"/>
  <text x="119" y="222.5" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="122" y1="191" x2="128" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="119" y="195" font-size="11" fill="currentColor" text-anchor="end">−1.5</text>
  <line x1="122" y1="163.5" x2="128" y2="163.5" stroke="currentColor" stroke-width="1"/>
  <text x="119" y="167.5" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="122" y1="136" x2="128" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="119" y="140" font-size="11" fill="currentColor" text-anchor="end">−0.5</text>
  <line x1="122" y1="81" x2="128" y2="81" stroke="currentColor" stroke-width="1"/>
  <text x="119" y="85" font-size="11" fill="currentColor" text-anchor="end">0.5</text>
  <line x1="122" y1="53.5" x2="128" y2="53.5" stroke="currentColor" stroke-width="1"/>
  <text x="119" y="57.5" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="122" y1="26" x2="128" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="119" y="30" font-size="11" fill="currentColor" text-anchor="end">1.5</text>
  <polyline points="69.1,227 69.3,225.4 69.5,223.1 69.8,220.8 70,218.5 70.3,216.3 70.5,214.1 70.8,211.9 71,209.7 71.3,207.6 71.5,205.5 71.8,203.4 72,201.4 72.3,199.3 72.5,197.3 72.8,195.4 73,193.4 73.3,191.5 73.5,189.6 73.8,187.7 74,185.9 74.3,184.1 74.5,182.3 74.8,180.5 75,178.8 75.3,177.1 75.5,175.4 75.8,173.7 76,172.1 76.3,170.4 76.5,168.9 76.8,167.3 77,165.7 77.3,164.2 77.5,162.7 77.8,161.2 78,159.8 78.3,158.4 78.5,157 78.8,155.6 79,154.2 79.3,152.9 79.5,151.6 79.8,150.3 80,149 80.3,147.7 80.5,146.5 80.8,145.3 81,144.1 81.3,143 81.5,141.8 81.8,140.7 82,139.6 82.3,138.6 82.5,137.5 82.8,136.5 83,135.5 83.3,134.5 83.5,133.5 83.8,132.6 84,131.6 84.3,130.7 84.5,129.8 84.8,129 85,128.1 85.3,127.3 85.5,126.5 85.8,125.7 86,124.9 86.3,124.2 86.5,123.5 86.8,122.7 87,122.1 87.3,121.4 87.5,120.7 87.8,120.1 88,119.5 88.3,118.9 88.5,118.3 88.8,117.7 89,117.2 89.3,116.7 89.5,116.2 89.8,115.7 90,115.2 90.3,114.7 90.5,114.3 90.8,113.9 91,113.5 91.3,113.1 91.5,112.7 91.8,112.4 92,112 92.3,111.7 92.5,111.4 92.8,111.1 93,110.8 93.3,110.6 93.5,110.3 93.8,110.1 94,109.9 94.3,109.7 94.5,109.5 94.8,109.4 95,109.2 95.3,109.1 95.5,108.9 95.8,108.8 96,108.7 96.3,108.7 96.5,108.6 96.8,108.6 97,108.5 97.3,108.5 97.5,108.5 97.8,108.5 98,108.5 98.3,108.6 98.5,108.6 98.8,108.7 99,108.7 99.3,108.8 99.5,108.9 99.8,109 100,109.2 100.3,109.3 100.5,109.4 100.8,109.6 101,109.8 101.3,110 101.5,110.2 101.8,110.4 102,110.6 102.3,110.8 102.5,111.1 102.8,111.3 103,111.6 103.3,111.9 103.5,112.1 103.8,112.4 104,112.7 104.3,113.1 104.5,113.4 104.8,113.7 105,114.1 105.3,114.4 105.5,114.8 105.8,115.2 106,115.6 106.3,116 106.5,116.4 106.7,116.8 107,117.2 107.3,117.6 107.5,118.1 107.8,118.5 108,119 108.3,119.5 108.5,119.9 108.8,120.4 109,120.9 109.3,121.4 109.5,121.9 109.8,122.4 110,123 110.3,123.5 110.5,124 110.8,124.6 111,125.1 111.3,125.7 111.5,126.3 111.8,126.8 112,127.4 112.3,128 112.5,128.6 112.8,129.2 113,129.8 113.3,130.4 113.5,131 113.8,131.6 114,132.3 114.3,132.9 114.5,133.5 114.8,134.2 115,134.8 115.3,135.5 115.5,136.1 115.8,136.8 116,137.5 116.3,138.1 116.5,138.8 116.8,139.5 117,140.2 117.3,140.9 117.5,141.6 117.8,142.3 118,143 118.3,143.7 118.5,144.4 118.8,145.1 119,145.8 119.2,146.5 119.5,147.2 119.8,147.9 120,148.7 120.3,149.4 120.5,150.1 120.8,150.9 121,151.6 121.3,152.3 121.5,153.1 121.8,153.8 122,154.5 122.3,155.3 122.5,156 122.8,156.8 123,157.5 123.3,158.3 123.5,159 123.8,159.8 124,160.5 124.3,161.3 124.5,162 124.8,162.8 125,163.5 125.3,164.2 125.5,165 125.8,165.7 126,166.5 126.3,167.2 126.5,168 126.8,168.7 127,169.5 127.3,170.2 127.5,171 127.8,171.7 128,172.5 128.3,173.2 128.5,173.9 128.8,174.7 129,175.4 129.3,176.1 129.5,176.9 129.8,177.6 130,178.3 130.3,179.1 130.5,179.8 130.8,180.5 131,181.2 131.3,181.9 131.5,182.6 131.8,183.3 132,184 132.3,184.7 132.5,185.4 132.8,186.1 133,186.8 133.3,187.5 133.5,188.2 133.8,188.9 134,189.5 134.3,190.2 134.5,190.9 134.8,191.5 135,192.2 135.3,192.8 135.5,193.5 135.8,194.1 136,194.7 136.3,195.4 136.5,196 136.8,196.6 137,197.2 137.3,197.8 137.5,198.4 137.8,199 138,199.6 138.3,200.2 138.5,200.7 138.8,201.3 139,201.9 139.3,202.4 139.5,203 139.8,203.5 140,204 140.3,204.6 140.5,205.1 140.8,205.6 141,206.1 141.3,206.6 141.5,207.1 141.8,207.5 142,208 142.3,208.5 142.5,208.9 142.8,209.4 143,209.8 143.3,210.2 143.5,210.6 143.8,211 144,211.4 144.3,211.8 144.5,212.2 144.8,212.6 145,212.9 145.3,213.3 145.5,213.6 145.8,213.9 146,214.3 146.3,214.6 146.5,214.9 146.8,215.1 147,215.4 147.3,215.7 147.5,215.9 147.8,216.2 148,216.4 148.3,216.6 148.5,216.8 148.8,217 149,217.2 149.3,217.4 149.5,217.6 149.8,217.7 150,217.8 150.3,218 150.5,218.1 150.8,218.2 151,218.3 151.3,218.3 151.5,218.4 151.8,218.4 152,218.5 152.3,218.5 152.5,218.5 152.8,218.5 153,218.5 153.3,218.4 153.5,218.4 153.8,218.3 154,218.3 154.2,218.2 154.5,218.1 154.8,217.9 155,217.8 155.3,217.6 155.5,217.5 155.8,217.3 156,217.1 156.3,216.9 156.5,216.7 156.8,216.4 157,216.2 157.3,215.9 157.5,215.6 157.8,215.3 158,215 158.3,214.6 158.5,214.3 158.8,213.9 159,213.5 159.3,213.1 159.5,212.7 159.8,212.3 160,211.8 160.3,211.3 160.5,210.8 160.8,210.3 161,209.8 161.3,209.3 161.5,208.7 161.8,208.1 162,207.5 162.3,206.9 162.5,206.3 162.8,205.6 163,204.9 163.3,204.3 163.5,203.5 163.8,202.8 164,202.1 164.3,201.3 164.5,200.5 164.8,199.7 165,198.9 165.3,198 165.5,197.2 165.8,196.3 166,195.4 166.3,194.4 166.5,193.5 166.8,192.5 167,191.5 167.3,190.5 167.5,189.5 167.8,188.4 168,187.4 168.3,186.3 168.5,185.2 168.8,184 169,182.9 169.3,181.7 169.5,180.5 169.8,179.3 170,178 170.3,176.7 170.5,175.4 170.8,174.1 171,172.8 171.3,171.4 171.5,170 171.8,168.6 172,167.2 172.3,165.8 172.5,164.3 172.8,162.8 173,161.3 173.3,159.7 173.5,158.1 173.7,156.6 174,154.9 174.3,153.3 174.5,151.6 174.8,149.9 175,148.2 175.3,146.5 175.5,144.7 175.8,142.9 176,141.1 176.3,139.3 176.5,137.4 176.8,135.5 177,133.6 177.3,131.6 177.5,129.7 177.8,127.7 178,125.6 178.3,123.6 178.5,121.5 178.8,119.4 179,117.3 179.3,115.1 179.5,112.9 179.8,110.7 180,108.5 180.3,106.2 180.5,103.9 180.8,101.6 181,99.3 181.3,96.9 181.5,94.5 181.8,92.1 182,89.6 182.3,87.1 182.5,84.6 182.8,82.1 183,79.5 183.3,76.9 183.5,74.3 183.8,71.6 184,68.9 184.3,66.2 184.5,63.5 184.8,60.7 185,57.9 185.3,55 185.5,52.2 185.8,49.3 186,46.4 186.3,43.4 186.5,40.4 186.8,37.4 186.9,36.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="68.3,234.9 64.3,224.5 74.3,225.5" fill="currentColor"/>
  <polygon points="187.5,28.2 191.7,38.5 181.7,37.7" fill="currentColor"/>
  <circle cx="97.5" cy="108.5" r="4" fill="currentColor"/>
  <circle cx="180" cy="108.5" r="4" fill="currentColor"/>
  <text x="86.3" y="97.3" font-size="13" fill="currentColor" text-anchor="end">Bounce</text>
  <text x="191.2" y="128.7" font-size="13" fill="currentColor" text-anchor="start">Cross</text>
</svg>
</div>

## Using the Fundamental Theorem of Algebra

Now that we can find rational zeros for a polynomial function, we will look
at a theorem that discusses the number of complex zeros of a polynomial
function. The **Fundamental Theorem of Algebra** tells us that every
polynomial function has at least one complex zero. This theorem forms the
foundation for solving polynomial equations.

Suppose $f$ is a polynomial function of degree four, and $f(x)=0$. The
Fundamental Theorem of Algebra states that there is at least one complex
solution, call it $c_1$. By the Factor Theorem, we can write $f(x)$ as a
product of $x-c_1$ and a polynomial quotient. Since $x-c_1$ is linear, the
polynomial quotient will be of degree three. Now we apply the Fundamental
Theorem of Algebra to the third-degree polynomial quotient. It will have at
least one complex zero, call it $c_2$. So we can write the polynomial
quotient as a product of $x-c_2$ and a new polynomial quotient of degree
two. Continue to apply the Fundamental Theorem of Algebra until all of the
zeros are found. There will be four of them and each one will yield a
factor of $f(x)$.

{{< callout type="info" >}}
  **Fundamental Theorem of Algebra.** If $f(x)$ is a polynomial of degree
  $n>0$, then $f(x)$ has at least one complex zero.

  We can use this theorem to argue that, if $f(x)$ is a polynomial of
  degree $n>0$, and $a$ is a non-zero real number, then $f(x)$ has exactly
  $n$ linear factors

  $$f(x)=a(x-c_1)(x-c_2)\ldots(x-c_n)$$

  where $c_1,c_2,\ldots,c_n$ are complex numbers. Therefore, $f(x)$ has $n$
  roots if we allow for multiplicities.
{{< /callout >}}

{{< callout type="info" >}}
  **Q&A.** *Does every polynomial have at least one imaginary zero?*

  No. A complex number is not necessarily imaginary. Real numbers are also
  complex numbers.
{{< /callout >}}

**Example.** Find the zeros of $f(x)=3x^3+9x^2+x+3$.

**Solution.** The Rational Zero Theorem tells us that if $\tfrac{p}{q}$ is
a zero of $f(x)$, then $p$ is a factor of 3 and $q$ is a factor of 3.

$$
\begin{array}{lrcl}
& \tfrac{p}{q} &=& \tfrac{\text{factor of constant term}}{\text{factor of leading coefficient}} \\[4pt]
& &=& \tfrac{\text{factor of 3}}{\text{factor of 3}}
\end{array}
$$

The factors of 3 are $\pm1$ and $\pm3$. The possible values for
$\tfrac{p}{q}$, and therefore the possible rational zeros for the function,
are $\pm3$, $\pm1$, and $\pm\tfrac{1}{3}$. We will use synthetic division to
evaluate each possible zero until we find one that gives a remainder of 0.
Let's begin with $-3$.

$$
\begin{array}{r|rrrr}
-3 & 3 & 9 & 1 & 3 \\
   &   & -9 & 0 & -3 \\
\hline
   & 3 & 0 & 1 & 0
\end{array}
$$

Dividing by $(x+3)$ gives a remainder of 0, so $-3$ is a zero of the
function. The polynomial can be written as

$$(x+3)(3x^2+1)$$

We can then set the quadratic equal to 0 and solve to find the other zeros
of the function.

$$
\begin{array}{lrcl}
& 3x^2+1 &=& 0 \\[4pt]
& x^2 &=& -\tfrac{1}{3} \\[4pt]
& x &=& \pm\sqrt{-\tfrac{1}{3}}=\pm\tfrac{i\sqrt{3}}{3}
\end{array}
$$

The zeros of $f(x)$ are $-3$ and $\pm\tfrac{i\sqrt{3}}{3}$.

**Analysis.** Look at the graph of the function $f$ below. Notice that, at
$x=-3$, the graph crosses the $x$-axis, indicating an odd multiplicity (1)
for the zero $x=-3$. Also note the presence of the two turning points.
This means that, since there is a 3rd degree polynomial, we are looking at
the maximum number of turning points. So, the end behavior of increasing
without bound to the right and decreasing without bound to the left will
continue. Thus, all the $x$-intercepts for the function are shown. So
either the multiplicity of $x=-3$ is 1 and there are two complex solutions,
which is what we found, or the multiplicity at $x=-3$ is three. Either way,
our result is correct.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals 3x cubed plus 9x squared plus x plus 3, on a grid with x from negative 4.3 to 2.3 and y from negative 3.5 to 17. The curve rises from the lower left, crosses the x-axis at x equals negative 3, labeled Cross, rises to a local maximum near x equals negative 1.9, dips to a local minimum near x equals 0 without recrossing the axis, then rises steeply to the right.","xMin":-4.3,"xMax":2.3,"yMin":-3.5,"yMax":17,"xUnit":30,"yUnit":11,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":3,"polynomials":[{"coeffs":[3,1,9,3],"arrows":true}],"points":[{"at":[-3,0],"label":"Cross","labelSide":"sw"}]}'>
<svg role="img" aria-label="The graph of f of x equals 3x cubed plus 9x squared plus x plus 3, on a grid with x from negative 4.3 to 2.3 and y from negative 3.5 to 17. The curve rises from the lower left, crosses the x-axis at x equals negative 3, labeled Cross, rises to a local maximum near x equals negative 1.9, dips to a local minimum near x equals 0 without recrossing the axis, then rises steeply to the right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 277.5" width="250" height="277.5" font-family="Helvetica, Arial, sans-serif">
  <line x1="24" y1="213" x2="226" y2="213" stroke="currentColor" stroke-width="1"/>
  <line x1="155" y1="24" x2="155" y2="253.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="236,213 226,218 226,208" fill="currentColor"/>
  <polygon points="155,14 160,24 150,24" fill="currentColor"/>
  <polygon points="14,213 24,208 24,218" fill="currentColor"/>
  <polygon points="155,263.5 150,253.5 160,253.5" fill="currentColor"/>
  <text x="234" y="205" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="163" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="35" y1="210" x2="35" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="35" y="228" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="65" y1="210" x2="65" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="228" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="95" y1="210" x2="95" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="95" y="228" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="125" y1="210" x2="125" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="125" y="228" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="185" y1="210" x2="185" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="185" y="228" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="215" y1="210" x2="215" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="215" y="228" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="152" y1="246" x2="158" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="149" y="250" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="152" y1="180" x2="158" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="149" y="184" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="152" y1="147" x2="158" y2="147" stroke="currentColor" stroke-width="1"/>
  <text x="149" y="151" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="152" y1="114" x2="158" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="149" y="118" font-size="11" fill="currentColor" text-anchor="end">9</text>
  <line x1="152" y1="81" x2="158" y2="81" stroke="currentColor" stroke-width="1"/>
  <text x="149" y="85" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <line x1="152" y1="48" x2="158" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="149" y="52" font-size="11" fill="currentColor" text-anchor="end">15</text>
  <polyline points="62.4,240.8 62.5,240.1 62.8,237.2 63,234.4 63.3,231.6 63.5,228.9 63.8,226.2 64,223.5 64.3,220.8 64.5,218.2 64.8,215.6 65,213 65.3,210.4 65.5,207.9 65.8,205.4 66,203 66.3,200.5 66.5,198.1 66.8,195.7 67,193.3 67.3,191 67.5,188.7 67.8,186.4 68,184.1 68.3,181.9 68.5,179.7 68.8,177.5 69,175.4 69.3,173.2 69.5,171.1 69.8,169.1 70,167 70.3,165 70.5,163 70.8,161 71,159.1 71.3,157.1 71.5,155.2 71.8,153.3 72,151.5 72.3,149.7 72.5,147.9 72.8,146.1 73,144.3 73.3,142.6 73.5,140.9 73.8,139.2 74,137.5 74.3,135.9 74.5,134.3 74.8,132.7 75,131.1 75.3,129.6 75.5,128 75.8,126.5 76,125.1 76.3,123.6 76.5,122.2 76.8,120.8 77,119.4 77.3,118 77.5,116.7 77.8,115.3 78,114 78.3,112.7 78.5,111.5 78.8,110.2 79,109 79.3,107.8 79.5,106.7 79.8,105.5 80,104.4 80.3,103.3 80.5,102.2 80.8,101.1 81,100 81.3,99 81.5,98 81.8,97 82,96 82.3,95.1 82.5,94.2 82.8,93.2 83,92.4 83.3,91.5 83.5,90.6 83.8,89.8 84,89 84.3,88.2 84.5,87.4 84.8,86.6 85,85.9 85.3,85.2 85.5,84.5 85.8,83.8 86,83.1 86.3,82.4 86.5,81.8 86.8,81.2 87,80.6 87.3,80 87.5,79.5 87.8,78.9 88,78.4 88.3,77.9 88.5,77.4 88.8,76.9 89,76.4 89.3,76 89.5,75.5 89.8,75.1 90,74.7 90.3,74.4 90.5,74 90.8,73.6 91,73.3 91.3,73 91.5,72.7 91.8,72.4 92,72.1 92.3,71.9 92.5,71.6 92.8,71.4 93,71.2 93.3,71 93.5,70.8 93.8,70.6 94,70.5 94.3,70.3 94.5,70.2 94.8,70.1 95,70 95.3,69.9 95.5,69.8 95.8,69.8 96,69.7 96.3,69.7 96.5,69.7 96.8,69.7 97,69.7 97.3,69.7 97.5,69.8 97.8,69.8 98,69.9 98.3,69.9 98.5,70 98.8,70.1 99,70.2 99.3,70.3 99.5,70.5 99.8,70.6 100,70.8 100.3,70.9 100.5,71.1 100.8,71.3 101,71.5 101.3,71.7 101.5,71.9 101.8,72.2 102,72.4 102.3,72.7 102.5,72.9 102.8,73.2 103,73.5 103.3,73.8 103.5,74.1 103.8,74.4 104,74.7 104.3,75.1 104.5,75.4 104.8,75.7 105,76.1 105.3,76.5 105.5,76.9 105.8,77.3 106,77.6 106.3,78.1 106.5,78.5 106.8,78.9 107,79.3 107.3,79.8 107.5,80.2 107.8,80.7 108,81.1 108.3,81.6 108.5,82.1 108.8,82.6 109,83.1 109.2,83.6 109.5,84.1 109.8,84.6 110,85.1 110.3,85.7 110.5,86.2 110.8,86.7 111,87.3 111.3,87.8 111.5,88.4 111.8,89 112,89.6 112.3,90.1 112.5,90.7 112.8,91.3 113,91.9 113.3,92.5 113.5,93.1 113.8,93.7 114,94.4 114.3,95 114.5,95.6 114.8,96.2 115,96.9 115.3,97.5 115.5,98.2 115.8,98.8 116,99.5 116.3,100.2 116.5,100.8 116.7,101.5 117,102.2 117.3,102.8 117.5,103.5 117.8,104.2 118,104.9 118.3,105.6 118.5,106.3 118.8,107 119,107.7 119.3,108.4 119.5,109.1 119.8,109.8 120,110.5 120.3,111.2 120.5,111.9 120.8,112.6 121,113.3 121.3,114.1 121.5,114.8 121.8,115.5 122,116.2 122.3,117 122.5,117.7 122.8,118.4 123,119.1 123.3,119.9 123.5,120.6 123.8,121.3 124,122.1 124.2,122.8 124.5,123.5 124.8,124.3 125,125 125.3,125.7 125.5,126.5 125.8,127.2 126,127.9 126.3,128.7 126.5,129.4 126.8,130.1 127,130.9 127.3,131.6 127.5,132.3 127.8,133 128,133.8 128.3,134.5 128.5,135.2 128.8,135.9 129,136.7 129.3,137.4 129.5,138.1 129.8,138.8 130,139.5 130.3,140.2 130.5,140.9 130.8,141.6 131,142.3 131.3,143 131.5,143.7 131.8,144.4 132,145.1 132.3,145.8 132.5,146.5 132.8,147.2 133,147.8 133.3,148.5 133.5,149.2 133.8,149.8 134,150.5 134.3,151.2 134.5,151.8 134.8,152.5 135,153.1 135.3,153.8 135.5,154.4 135.8,155 136,155.6 136.3,156.3 136.5,156.9 136.8,157.5 137,158.1 137.3,158.7 137.5,159.3 137.8,159.9 138,160.4 138.3,161 138.5,161.6 138.8,162.2 139,162.7 139.3,163.3 139.5,163.8 139.8,164.3 140,164.9 140.3,165.4 140.5,165.9 140.8,166.4 141,166.9 141.3,167.4 141.5,167.9 141.8,168.4 142,168.9 142.3,169.3 142.5,169.8 142.8,170.2 143,170.7 143.3,171.1 143.5,171.5 143.8,171.9 144,172.4 144.3,172.7 144.5,173.1 144.8,173.5 145,173.9 145.3,174.3 145.5,174.6 145.8,174.9 146,175.3 146.3,175.6 146.5,175.9 146.8,176.2 147,176.5 147.3,176.8 147.5,177.1 147.8,177.3 148,177.6 148.2,177.8 148.5,178.1 148.8,178.3 149,178.5 149.3,178.7 149.5,178.9 149.8,179.1 150,179.2 150.3,179.4 150.5,179.5 150.8,179.7 151,179.8 151.3,179.9 151.5,180 151.8,180.1 152,180.1 152.3,180.2 152.5,180.2 152.8,180.3 153,180.3 153.3,180.3 153.5,180.3 153.8,180.3 154,180.3 154.3,180.2 154.5,180.2 154.8,180.1 155,180 155.3,179.9 155.5,179.8 155.7,179.7 156,179.5 156.3,179.4 156.5,179.2 156.8,179 157,178.8 157.3,178.6 157.5,178.4 157.8,178.1 158,177.9 158.3,177.6 158.5,177.3 158.8,177 159,176.7 159.3,176.4 159.5,176 159.8,175.6 160,175.3 160.3,174.9 160.5,174.5 160.8,174 161,173.6 161.3,173.1 161.5,172.6 161.8,172.1 162,171.6 162.3,171.1 162.5,170.5 162.8,170 163,169.4 163.2,168.8 163.5,168.2 163.8,167.6 164,166.9 164.3,166.2 164.5,165.5 164.8,164.8 165,164.1 165.3,163.4 165.5,162.6 165.8,161.8 166,161 166.3,160.2 166.5,159.4 166.8,158.5 167,157.6 167.3,156.8 167.5,155.8 167.8,154.9 168,154 168.3,153 168.5,152 168.8,151 169,150 169.3,148.9 169.5,147.8 169.8,146.7 170,145.6 170.3,144.5 170.5,143.3 170.7,142.2 171,141 171.3,139.8 171.5,138.5 171.8,137.3 172,136 172.3,134.7 172.5,133.3 172.8,132 173,130.6 173.3,129.2 173.5,127.8 173.8,126.4 174,124.9 174.3,123.5 174.5,122 174.8,120.4 175,118.9 175.3,117.3 175.5,115.7 175.8,114.1 176,112.5 176.3,110.8 176.5,109.1 176.8,107.4 177,105.7 177.3,103.9 177.5,102.1 177.8,100.3 178,98.5 178.3,96.7 178.5,94.8 178.8,92.9 179,90.9 179.3,89 179.5,87 179.8,85 180,83 180.3,80.9 180.5,78.9 180.8,76.8 181,74.6 181.2,72.5 181.5,70.3 181.8,68.1 182,65.9 182.3,63.6 182.5,61.3 182.8,59 183,56.7 183.3,54.3 183.5,51.9 183.8,49.5 184,47 184.3,44.6 184.5,42.1 184.8,39.6 185,37 185.2,34.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="61.8,248.7 57.6,238.3 67.6,239.2" fill="currentColor"/>
  <polygon points="186,26.5 190,36.9 180.1,36" fill="currentColor"/>
  <circle cx="65" cy="213" r="4" fill="currentColor"/>
  <text x="53.8" y="233.2" font-size="13" fill="currentColor" text-anchor="end">Cross</text>
</svg>
</div>

{{< fillin
  question="Find the zeros of $f(x)=2x^3+5x^2-11x+4$. Enter all of them, separated by commas."
  answer="-4,\tfrac{1}{2},1"
  answerMode="unordered"
  answerDisplay="$x=-4$, $x=\tfrac12$, or $x=1$"
  hint="Use the Rational Zero Theorem to list candidates, then test them with synthetic division."
>}}

## Using the Linear Factorization Theorem to find polynomials with given zeros

A vital implication of the Fundamental Theorem of Algebra, as we stated
above, is that a polynomial function of degree $n$ will have $n$ zeros in
the set of complex numbers, if we allow for multiplicities. This means that
we can factor the polynomial function into $n$ factors. The **Linear
Factorization Theorem** tells us that a polynomial function will have the
same number of factors as its degree, and that each factor will be in the
form $(x-c)$, where $c$ is a complex number.

Let $f$ be a polynomial function with real coefficients, and suppose
$a+bi$, $b\ne0$, is a zero of $f(x)$. Then, by the Factor Theorem,
$x-(a+bi)$ is a factor of $f(x)$. For $f$ to have real coefficients,
$x-(a-bi)$ must also be a factor of $f(x)$. This is true because any factor
other than $x-(a-bi)$, when multiplied by $x-(a+bi)$, will leave imaginary
components in the product. Only multiplication with conjugate pairs will
eliminate the imaginary parts and result in real coefficients. In other
words, if a polynomial function $f$ with real coefficients has a complex
zero $a+bi$, then the complex conjugate $a-bi$ must also be a zero of
$f(x)$. This is called the **Complex Conjugate Theorem**.

{{< callout type="info" >}}
  **Complex Conjugate Theorem.** According to the Linear Factorization
  Theorem, a polynomial function will have the same number of factors as
  its degree, and each factor will be in the form $(x-c)$, where $c$ is a
  complex number.

  If the polynomial function $f$ has real coefficients and a complex zero
  in the form $a+bi$, then the complex conjugate of the zero, $a-bi$, is
  also a zero.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the zeros of a polynomial function $f$ and a point
  $(c,f(c))$ on the graph of $f$, use the Linear Factorization Theorem to
  find the polynomial function.

  1. Use the zeros to construct the linear factors of the polynomial.
  2. Multiply the linear factors to expand the polynomial.
  3. Substitute $(c,f(c))$ into the function to determine the leading
     coefficient.
  4. Simplify.
{{< /callout >}}

**Example.** Find a fourth degree polynomial with real coefficients that
has zeros of $-3$, 2, $i$, such that $f(-2)=100$.

**Solution.** Because $x=i$ is a zero, by the Complex Conjugate Theorem
$x=-i$ is also a zero. The polynomial must have factors of $(x+3)$,
$(x-2)$, $(x-i)$, and $(x+i)$. Since we are looking for a degree 4
polynomial, and now have four zeros, we have all four factors. Let's begin
by multiplying these factors.

$$
\begin{array}{lrcl}
& f(x) &=& a(x+3)(x-2)(x-i)(x+i) \\[4pt]
& f(x) &=& a(x^2+x-6)(x^2+1) \\[4pt]
& f(x) &=& a(x^4+x^3-5x^2+x-6)
\end{array}
$$

We need to find $a$ to ensure $f(-2)=100$. Substitute $x=-2$ and
$f(-2)=100$ into $f(x)$.

$$
\begin{array}{lrcl}
& 100 &=& a\bigl((-2)^4+(-2)^3-5(-2)^2+(-2)-6\bigr) \\[4pt]
& 100 &=& a(-20) \\[4pt]
& -5 &=& a
\end{array}
$$

So the polynomial function is

$$f(x)=-5(x^4+x^3-5x^2+x-6)$$

or

$$f(x)=-5x^4-5x^3+25x^2-5x+30$$

**Analysis.** We found that both $i$ and $-i$ were zeros, but only one of
these zeros needed to be given. If $i$ is a zero of a polynomial with real
coefficients, then $-i$ must also be a zero of the polynomial because $-i$
is the complex conjugate of $i$.

{{< callout type="info" >}}
  **Q&A.** *If $2+3i$ were given as a zero of a polynomial with real
  coefficients, would $2-3i$ also need to be a zero?*

  Yes. When any complex number with an imaginary component is given as a
  zero of a polynomial with real coefficients, the conjugate must also be
  a zero of the polynomial.
{{< /callout >}}

{{< fillin
  question="Find a third-degree polynomial function with real coefficients that has zeros of 5 and $-2i$ such that $f(1)=10$."
  answer="-\tfrac{1}{2}x^3+\tfrac{5}{2}x^2-2x+10"
  answerDisplay="$f(x)=-\tfrac12x^3+\tfrac52x^2-2x+10$"
  hint="By the Complex Conjugate Theorem, $2i$ is also a zero; multiply the three linear factors, then use $f(1)=10$ to solve for the leading constant."
>}}

## Using Descartes' Rule of Signs

There is a straightforward way to determine the possible numbers of
positive and negative real zeros for any polynomial function. If the
polynomial is written in descending order, *Descartes' Rule of Signs*
tells us of a relationship between the number of sign changes in $f(x)$
and the number of positive real zeros. For example, the polynomial
function below has one sign change.

$$f(x)=x^4+x^3+x^2+x-1$$

The sign changes once, from $x$ to $-1$. This tells us that the function
must have 1 positive real zero.

There is a similar relationship between the number of sign changes in
$f(-x)$ and the number of negative real zeros.

$$
\begin{array}{lrcl}
& f(-x) &=& (-x)^4+(-x)^3+(-x)^2+(-x)-1 \\[4pt]
& f(-x) &=& x^4-x^3+x^2-x-1
\end{array}
$$

The sign changes three times: from $x^4$ to $-x^3$, from $-x^3$ to $x^2$,
and from $x^2$ to $-x$. In this case, $f(-x)$ has 3 sign changes. This
tells us that $f(x)$ could have 3 or 1 negative real zeros.

{{< callout type="info" >}}
  **Descartes' Rule of Signs.** According to Descartes' Rule of Signs, if
  we let $f(x)=a_nx^n+a_{n-1}x^{n-1}+\ldots+a_1x+a_0$ be a polynomial
  function with real coefficients:

  - The number of positive real zeros is either equal to the number of
    sign changes of $f(x)$ or is less than the number of sign changes by
    an even integer.
  - The number of negative real zeros is either equal to the number of
    sign changes of $f(-x)$ or is less than the number of sign changes by
    an even integer.
{{< /callout >}}

**Example.** Use Descartes' Rule of Signs to determine the possible
numbers of positive and negative real zeros for
$f(x)=-x^4-3x^3+6x^2-4x-12$.

**Solution.** Begin by determining the number of sign changes.

$$f(x)=-x^4-3x^3+6x^2-4x-12$$

The sign changes twice: from $-3x^3$ to $6x^2$, and from $6x^2$ to $-4x$.
There are two sign changes, so there are either 2 or 0 positive real roots.
Next, we examine $f(-x)$ to determine the number of negative real roots.

$$
\begin{array}{lrcl}
& f(-x) &=& -(-x)^4-3(-x)^3+6(-x)^2-4(-x)-12 \\[4pt]
& f(-x) &=& -x^4+3x^3+6x^2+4x-12
\end{array}
$$

The sign changes twice: from $-x^4$ to $3x^3$, and from $4x$ to $-12$.
Again, there are two sign changes, so there are either 2 or 0 negative real
roots.

There are four possibilities, as we can see in the table below.

| Positive real zeros | Negative real zeros | Complex zeros | Total zeros |
| :--- | :--- | :--- | :--- |
| 2 | 2 | 0 | 4 |
| 2 | 0 | 2 | 4 |
| 0 | 2 | 2 | 4 |
| 0 | 0 | 4 | 4 |

**Analysis.** We can confirm the numbers of positive and negative real
roots by examining a graph of the function below. We can see from the
graph that the function has 0 positive real roots and 2 negative real
roots.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals negative x to the fourth minus 3x cubed plus 6x squared minus 4x minus 12, on a grid with x from negative 5.3 to 5.3 and y from negative 33 to 63. The curve rises from the lower left, crosses the x-axis near x equals negative 4.42, rises to a local maximum, falls and crosses the x-axis again at x equals negative 1, then dips to a local minimum and continues downward to the lower right without crossing the axis again, confirming zero positive real zeros and two negative real zeros.","xMin":-5.3,"xMax":5.3,"yMin":-33,"yMax":63,"xUnit":22,"yUnit":4,"grid":true,"xGridStep":1,"yGridStep":10,"tickLabels":true,"xTickStep":1,"yTickStep":10,"polynomials":[{"coeffs":[-12,-4,6,-3,-1],"arrows":true}],"points":[{"at":[-4.42,0],"label":"x = -4.42","labelSide":"s"},{"at":[-1,0],"label":"x = -1","labelSide":"s"}]}'>
<svg role="img" aria-label="The graph of f of x equals negative x to the fourth minus 3x cubed plus 6x squared minus 4x minus 12, on a grid with x from negative 5.3 to 5.3 and y from negative 33 to 63. The curve rises from the lower left, crosses the x-axis near x equals negative 4.42, rises to a local maximum, falls and crosses the x-axis again at x equals negative 1, then dips to a local minimum and continues downward to the lower right without crossing the axis again, confirming zero positive real zeros and two negative real zeros." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285.2 436" width="285.2" height="436" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="410" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="410" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="410" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="410" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="410" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="410" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="410" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="410" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="410" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="410" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="410" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="410" x2="259.2" y2="410" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="370" x2="259.2" y2="370" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="330" x2="259.2" y2="330" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="259.2" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="250" x2="259.2" y2="250" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="210" x2="259.2" y2="210" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="259.2" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="259.2" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="259.2" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="259.2" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="278" x2="261.2" y2="278" stroke="currentColor" stroke-width="1"/>
  <line x1="142.6" y1="24" x2="142.6" y2="412" stroke="currentColor" stroke-width="1"/>
  <polygon points="271.2,278 261.2,283 261.2,273" fill="currentColor"/>
  <polygon points="142.6,14 147.6,24 137.6,24" fill="currentColor"/>
  <polygon points="14,278 24,273 24,283" fill="currentColor"/>
  <polygon points="142.6,422 137.6,412 147.6,412" fill="currentColor"/>
  <text x="269.2" y="270" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="150.6" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="32.6" y1="275" x2="32.6" y2="281" stroke="currentColor" stroke-width="1"/>
  <text x="32.6" y="293" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="54.6" y1="275" x2="54.6" y2="281" stroke="currentColor" stroke-width="1"/>
  <text x="54.6" y="293" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="76.6" y1="275" x2="76.6" y2="281" stroke="currentColor" stroke-width="1"/>
  <text x="76.6" y="293" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="98.6" y1="275" x2="98.6" y2="281" stroke="currentColor" stroke-width="1"/>
  <text x="98.6" y="293" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="120.6" y1="275" x2="120.6" y2="281" stroke="currentColor" stroke-width="1"/>
  <text x="120.6" y="293" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="164.6" y1="275" x2="164.6" y2="281" stroke="currentColor" stroke-width="1"/>
  <text x="164.6" y="293" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="186.6" y1="275" x2="186.6" y2="281" stroke="currentColor" stroke-width="1"/>
  <text x="186.6" y="293" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="208.6" y1="275" x2="208.6" y2="281" stroke="currentColor" stroke-width="1"/>
  <text x="208.6" y="293" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="230.6" y1="275" x2="230.6" y2="281" stroke="currentColor" stroke-width="1"/>
  <text x="230.6" y="293" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="252.6" y1="275" x2="252.6" y2="281" stroke="currentColor" stroke-width="1"/>
  <text x="252.6" y="293" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="139.6" y1="398" x2="145.6" y2="398" stroke="currentColor" stroke-width="1"/>
  <text x="136.6" y="402" font-size="11" fill="currentColor" text-anchor="end">−30</text>
  <line x1="139.6" y1="358" x2="145.6" y2="358" stroke="currentColor" stroke-width="1"/>
  <text x="136.6" y="362" font-size="11" fill="currentColor" text-anchor="end">−20</text>
  <line x1="139.6" y1="318" x2="145.6" y2="318" stroke="currentColor" stroke-width="1"/>
  <text x="136.6" y="322" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="139.6" y1="238" x2="145.6" y2="238" stroke="currentColor" stroke-width="1"/>
  <text x="136.6" y="242" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="139.6" y1="198" x2="145.6" y2="198" stroke="currentColor" stroke-width="1"/>
  <text x="136.6" y="202" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="139.6" y1="158" x2="145.6" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="136.6" y="162" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="139.6" y1="118" x2="145.6" y2="118" stroke="currentColor" stroke-width="1"/>
  <text x="136.6" y="122" font-size="11" fill="currentColor" text-anchor="end">40</text>
  <line x1="139.6" y1="78" x2="145.6" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="136.6" y="82" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="139.6" y1="38" x2="145.6" y2="38" stroke="currentColor" stroke-width="1"/>
  <text x="136.6" y="42" font-size="11" fill="currentColor" text-anchor="end">60</text>
  <polyline points="40.3,396.5 40.5,391 40.7,384.4 41,377.9 41.2,371.4 41.5,365.1 41.7,358.8 42,352.6 42.2,346.5 42.5,340.4 42.7,334.5 43,328.6 43.2,322.8 43.5,317.1 43.7,311.5 44,305.9 44.2,300.4 44.5,295 44.7,289.7 45,284.4 45.2,279.2 45.5,274.1 45.7,269.1 46,264.1 46.2,259.2 46.5,254.4 46.7,249.6 47,245 47.2,240.4 47.5,235.8 47.7,231.4 48,227 48.2,222.6 48.5,218.4 48.7,214.2 49,210 49.2,206 49.5,202 49.7,198.1 50,194.2 50.2,190.4 50.5,186.6 50.7,183 51,179.4 51.2,175.8 51.5,172.3 51.7,168.9 52,165.5 52.2,162.2 52.5,159 52.7,155.8 53,152.7 53.2,149.6 53.5,146.6 53.7,143.7 54,140.8 54.2,137.9 54.5,135.2 54.7,132.4 55,129.8 55.2,127.2 55.5,124.6 55.7,122.1 56,119.7 56.2,117.3 56.5,114.9 56.7,112.6 57,110.4 57.2,108.2 57.5,106.1 57.7,104 58,101.9 58.2,99.9 58.5,98 58.7,96.1 59,94.3 59.2,92.5 59.5,90.7 59.7,89 60,87.4 60.2,85.8 60.5,84.2 60.7,82.7 61,81.3 61.2,79.8 61.5,78.5 61.7,77.1 62,75.8 62.2,74.6 62.5,73.4 62.7,72.2 63,71.1 63.2,70 63.5,69 63.7,68 64,67 64.2,66.1 64.5,65.2 64.7,64.4 65,63.5 65.2,62.8 65.5,62.1 65.7,61.4 66,60.7 66.2,60.1 66.5,59.5 66.7,59 67,58.5 67.2,58 67.5,57.5 67.7,57.1 68,56.8 68.2,56.4 68.5,56.1 68.7,55.8 69,55.6 69.2,55.4 69.5,55.2 69.7,55.1 70,55 70.2,54.9 70.5,54.8 70.7,54.8 71,54.8 71.2,54.9 71.5,54.9 71.7,55 72,55.1 72.2,55.3 72.5,55.5 72.7,55.7 73,55.9 73.2,56.1 73.5,56.4 73.7,56.7 74,57.1 74.2,57.4 74.5,57.8 74.7,58.2 75,58.7 75.2,59.1 75.5,59.6 75.7,60.1 76,60.6 76.2,61.2 76.5,61.7 76.7,62.3 77,62.9 77.2,63.6 77.5,64.2 77.7,64.9 78,65.6 78.2,66.3 78.5,67.1 78.7,67.8 79,68.6 79.2,69.4 79.5,70.2 79.7,71 80,71.9 80.2,72.7 80.5,73.6 80.7,74.5 81,75.4 81.2,76.4 81.5,77.3 81.7,78.3 82,79.3 82.2,80.3 82.5,81.3 82.7,82.3 83,83.3 83.2,84.4 83.5,85.4 83.7,86.5 84,87.6 84.2,88.7 84.5,89.8 84.7,91 85,92.1 85.2,93.3 85.5,94.4 85.7,95.6 86,96.8 86.2,98 86.5,99.2 86.7,100.5 87,101.7 87.2,102.9 87.5,104.2 87.7,105.4 88,106.7 88.2,108 88.5,109.3 88.7,110.6 89,111.9 89.2,113.2 89.5,114.5 89.7,115.8 90,117.2 90.2,118.5 90.5,119.9 90.7,121.2 91,122.6 91.2,124 91.5,125.3 91.7,126.7 92,128.1 92.2,129.5 92.5,130.9 92.7,132.3 93,133.7 93.2,135.1 93.5,136.5 93.7,137.9 94,139.3 94.2,140.8 94.5,142.2 94.7,143.6 95,145.1 95.2,146.5 95.5,147.9 95.7,149.4 96,150.8 96.2,152.3 96.5,153.7 96.7,155.2 97,156.6 97.2,158.1 97.5,159.5 97.7,161 98,162.4 98.2,163.9 98.5,165.3 98.7,166.8 99,168.2 99.2,169.7 99.5,171.1 99.7,172.6 100,174 100.2,175.5 100.5,176.9 100.7,178.4 101,179.8 101.2,181.3 101.5,182.7 101.7,184.2 102,185.6 102.2,187.1 102.5,188.5 102.7,189.9 103,191.4 103.2,192.8 103.5,194.2 103.7,195.6 104,197 104.2,198.5 104.5,199.9 104.7,201.3 105,202.7 105.2,204.1 105.5,205.5 105.7,206.9 106,208.2 106.2,209.6 106.5,211 106.7,212.4 107,213.7 107.2,215.1 107.5,216.5 107.7,217.8 108,219.2 108.2,220.5 108.5,221.8 108.7,223.2 109,224.5 109.2,225.8 109.5,227.1 109.7,228.4 110,229.7 110.2,231 110.5,232.3 110.7,233.6 111,234.9 111.2,236.1 111.5,237.4 111.7,238.7 112,239.9 112.2,241.1 112.5,242.4 112.7,243.6 113,244.8 113.2,246 113.5,247.2 113.7,248.4 114,249.6 114.2,250.8 114.5,252 114.7,253.1 115,254.3 115.2,255.4 115.5,256.6 115.7,257.7 116,258.8 116.2,259.9 116.5,261 116.7,262.1 117,263.2 117.2,264.3 117.5,265.4 117.7,266.4 118,267.5 118.2,268.5 118.5,269.6 118.7,270.6 119,271.6 119.2,272.6 119.5,273.6 119.7,274.6 120,275.6 120.2,276.6 120.5,277.5 120.7,278.5 121,279.4 121.2,280.4 121.5,281.3 121.7,282.2 122,283.1 122.2,284 122.5,284.9 122.7,285.8 123,286.7 123.2,287.5 123.5,288.4 123.7,289.2 124,290 124.2,290.9 124.5,291.7 124.7,292.5 125,293.3 125.2,294.1 125.5,294.8 125.7,295.6 126,296.3 126.2,297.1 126.5,297.8 126.7,298.5 127,299.3 127.2,300 127.5,300.7 127.7,301.3 128,302 128.2,302.7 128.5,303.3 128.7,304 129,304.6 129.2,305.3 129.5,305.9 129.7,306.5 130,307.1 130.2,307.7 130.5,308.3 130.7,308.8 131,309.4 131.2,309.9 131.5,310.5 131.7,311 132,311.5 132.2,312.1 132.5,312.6 132.7,313.1 133,313.6 133.2,314 133.5,314.5 133.7,315 134,315.4 134.2,315.9 134.5,316.3 134.7,316.7 135,317.1 135.2,317.5 135.5,317.9 135.7,318.3 136,318.7 136.2,319.1 136.5,319.5 136.7,319.8 137,320.2 137.2,320.5 137.5,320.8 137.7,321.2 138,321.5 138.2,321.8 138.5,322.1 138.7,322.4 139,322.7 139.2,322.9 139.5,323.2 139.7,323.5 140,323.7 140.2,324 140.5,324.2 140.7,324.5 141,324.7 141.2,324.9 141.5,325.1 141.7,325.3 142,325.5 142.2,325.7 142.5,325.9 142.7,326.1 143,326.3 143.2,326.4 143.5,326.6 143.7,326.8 144,326.9 144.2,327.1 144.5,327.2 144.7,327.3 145,327.5 145.2,327.6 145.5,327.7 145.7,327.8 146,327.9 146.2,328 146.5,328.1 146.7,328.2 147,328.3 147.2,328.4 147.5,328.5 147.7,328.6 148,328.7 148.2,328.7 148.5,328.8 148.7,328.9 149,328.9 149.2,329 149.5,329.1 149.7,329.1 150,329.2 150.2,329.2 150.5,329.3 150.7,329.3 151,329.4 151.2,329.4 151.5,329.4 151.7,329.5 152,329.5 152.2,329.6 152.5,329.6 152.7,329.6 153,329.7 153.2,329.7 153.5,329.7 153.7,329.8 154,329.8 154.2,329.8 154.5,329.9 154.7,329.9 155,329.9 155.2,330 155.5,330 155.7,330.1 156,330.1 156.2,330.1 156.5,330.2 156.7,330.2 157,330.3 157.2,330.3 157.5,330.4 157.7,330.4 158,330.5 158.2,330.6 158.5,330.6 158.7,330.7 159,330.8 159.2,330.9 159.5,331 159.7,331 160,331.1 160.2,331.2 160.5,331.3 160.7,331.4 161,331.6 161.2,331.7 161.5,331.8 161.7,331.9 162,332.1 162.2,332.2 162.5,332.4 162.7,332.5 163,332.7 163.2,332.9 163.5,333.1 163.7,333.3 164,333.5 164.2,333.7 164.5,333.9 164.7,334.1 165,334.3 165.2,334.6 165.5,334.8 165.7,335.1 166,335.4 166.2,335.7 166.5,336 166.7,336.3 167,336.6 167.2,336.9 167.5,337.3 167.7,337.6 168,338 168.2,338.4 168.5,338.8 168.7,339.2 169,339.6 169.2,340.1 169.5,340.5 169.7,341 170,341.4 170.2,341.9 170.5,342.4 170.7,343 171,343.5 171.2,344.1 171.5,344.6 171.7,345.2 172,345.8 172.2,346.5 172.5,347.1 172.7,347.8 173,348.4 173.2,349.1 173.5,349.9 173.7,350.6 174,351.3 174.2,352.1 174.5,352.9 174.7,353.7 175,354.5 175.2,355.4 175.5,356.3 175.7,357.2 176,358.1 176.2,359 176.5,360 176.7,361 177,362 177.2,363 177.5,364.1 177.7,365.2 178,366.3 178.2,367.4 178.5,368.6 178.7,369.7 179,370.9 179.2,372.2 179.5,373.4 179.7,374.7 180,376 180.2,377.4 180.5,378.7 180.7,380.1 181,381.6 181.2,383 181.5,384.5 181.7,386 182,387.5 182.2,389.1 182.5,390.7 182.7,392.4 183,394 183.2,395.7 183.5,397.4 183.7,399.2 183.9,400.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="40,404.5 35.4,394.3 45.4,394.6" fill="currentColor"/>
  <polygon points="185,408.5 178.7,399.3 188.6,397.9" fill="currentColor"/>
  <circle cx="45.4" cy="278" r="4" fill="currentColor"/>
  <circle cx="120.6" cy="278" r="4" fill="currentColor"/>
  <text x="56.6" y="298.2" font-size="13" fill="currentColor" text-anchor="start">x = −4.42</text>
  <text x="131.8" y="266.8" font-size="13" fill="currentColor" text-anchor="start">x = −1</text>
</svg>
</div>

{{< multiplechoice
  question="Use Descartes' Rule of Signs to determine the maximum possible numbers of positive and negative real zeros of $f(x)=2x^4-10x^3+11x^2-15x+12$."
  answer="4, 2, or 0 positive; 0 negative"
  hint="Count the sign changes in $f(x)$, then in $f(-x)$ — notice $f(-x)$ has all positive coefficients."
>}}
4, 2, or 0 positive; 0 negative
0 positive; 4, 2, or 0 negative
2 or 0 positive; 2 or 0 negative
1 positive; 3 or 1 negative
{{< /multiplechoice >}}

## Solving real-world applications

We have now introduced a variety of tools for solving polynomial equations.
Let's use these tools to solve the bakery problem from the beginning of the
section.

**Example.** A new bakery offers decorated, multi-tiered cakes for display
and cutting at Quinceañera and wedding celebrations, as well as sheet cakes
to serve most of the guests. The bakery wants the volume of a small sheet
cake to be 351 cubic inches. The cake is in the shape of a rectangular
solid. They want the length of the cake to be four inches longer than the
width of the cake and the height of the cake to be one-third of the width.
What should the dimensions of the cake pan be?

**Solution.** Begin by writing an equation for the volume of the cake. The
volume of a rectangular solid is given by $V=lwh$. We were given that the
length must be four inches longer than the width, so we can express the
length of the cake as $l=w+4$. We were given that the height of the cake is
one-third of the width, so we can express the height of the cake as
$h=\tfrac{1}{3}w$. Let's write the volume of the cake in terms of width of
the cake.

$$
\begin{array}{lrcl}
& V &=& (w+4)(w)\left(\tfrac{1}{3}w\right) \\[4pt]
& V &=& \tfrac{1}{3}w^3+\tfrac{4}{3}w^2
\end{array}
$$

Substitute the given volume into this equation.

$$
\begin{array}{lrcl}
\text{Substitute 351 for }V. & 351 &=& \tfrac{1}{3}w^3+\tfrac{4}{3}w^2 \\[4pt]
\text{Multiply both sides by 3}. & 1053 &=& w^3+4w^2 \\[4pt]
\text{Subtract 1053 from both sides}. & 0 &=& w^3+4w^2-1053
\end{array}
$$

Descartes' rule of signs tells us there is one positive solution. The
Rational Zero Theorem tells us that the possible rational zeros are
$\pm1,\pm3,\pm9,\pm13,\pm27,\pm39,\pm81,\pm117,\pm351,$ and $\pm1053$. We
can use synthetic division to test these possible zeros. Only positive
numbers make sense as dimensions for a cake, so we need not test any
negative values. Let's begin by testing values that make the most sense as
dimensions for a small sheet cake. Use synthetic division to check $x=1$.

$$
\begin{array}{r|rrrr}
1 & 1 & 4 & 0 & -1053 \\
  &   & 1 & 5 & 5 \\
\hline
  & 1 & 5 & 5 & -1048
\end{array}
$$

Since 1 is not a solution, we will check $x=3$.

$$
\begin{array}{r|rrrr}
3 & 1 & 4 & 0 & -1053 \\
  &   & 3 & 21 & 63 \\
\hline
  & 1 & 7 & 21 & -990
\end{array}
$$

Since 3 is not a solution either, we will test $x=9$.

$$
\begin{array}{r|rrrr}
9 & 1 & 4 & 0 & -1053 \\
  &   & 9 & 117 & 1053 \\
\hline
  & 1 & 13 & 117 & 0
\end{array}
$$

Synthetic division gives a remainder of 0, so 9 is a solution to the
equation. We can use the relationships between the width and the other
dimensions to determine the length and height of the sheet cake pan.

$$l=w+4=9+4=13\quad\text{and}\quad h=\tfrac{1}{3}w=\tfrac{1}{3}(9)=3$$

The sheet cake pan should have dimensions 13 inches by 9 inches by 3
inches.

{{< fillin
  question="A shipping container in the shape of a rectangular solid must have a volume of 84 cubic meters. The length of the container must be one meter longer than the width, and the height must be one meter greater than twice the width. Enter the width, length, and height, in meters, in that order, separated by commas."
  answer="3,4,7"
  answerDisplay="$w=3$, $l=4$, $h=7$"
  hint="Let $w$ be the width; write the volume as a cubic in $w$ and test small positive integer candidates."
>}}

## Key concepts

- To find $f(k)$, determine the remainder of the polynomial $f(x)$ when it
  is divided by $x-k$.
- $k$ is a zero of $f(x)$ if and only if $(x-k)$ is a factor of $f(x)$.
- Each rational zero of a polynomial function with integer coefficients
  will be equal to a factor of the constant term divided by a factor of
  the leading coefficient.
- When the leading coefficient is 1, the possible rational zeros are the
  factors of the constant term.
- Synthetic division can be used to find the zeros of a polynomial
  function.
- According to the Fundamental Theorem, every polynomial function has at
  least one complex zero.
- Every polynomial function with degree greater than 0 has at least one
  complex zero.
- Allowing for multiplicities, a polynomial function will have the same
  number of factors as its degree. Each factor will be in the form
  $(x-c)$, where $c$ is a complex number.
- The number of positive real zeros of a polynomial function is either
  the number of sign changes of the function or less than the number of
  sign changes by an even integer.
- The number of negative real zeros of a polynomial function is either
  the number of sign changes of $f(-x)$ or less than the number of sign
  changes by an even integer.
- Polynomial equations model many real-world scenarios. Solving the
  equations is easiest done by synthetic division.

## Key terms

**Descartes' Rule of Signs** — a rule that determines the maximum possible
numbers of positive and negative real zeros based on the number of sign
changes of $f(x)$ and $f(-x)$.
**Factor Theorem** — $k$ is a zero of polynomial function $f(x)$ if and
only if $(x-k)$ is a factor of $f(x)$.
**Fundamental Theorem of Algebra** — a polynomial function with degree
greater than 0 has at least one complex zero.
**Linear Factorization Theorem** — allowing for multiplicities, a
polynomial function will have the same number of factors as its degree,
and each factor will be in the form $(x-c)$, where $c$ is a complex
number.
**Rational Zero Theorem** — the possible rational zeros of a polynomial
function have the form $\tfrac{p}{q}$ where $p$ is a factor of the
constant term and $q$ is a factor of the leading coefficient.
**Remainder Theorem** — if a polynomial $f(x)$ is divided by $x-k$, then
the remainder is equal to the value $f(k)$.

## Practice

### Evaluate a polynomial using the Remainder Theorem

{{< fillin
  question="Use the Remainder Theorem to find the remainder when $3x^3-2x^2+x-4$ is divided by $x+3$."
  answer="-106"
  answerDisplay="$-106$"
  hint="Evaluate the polynomial at the zero of the divisor, $x=-3$."
>}}

{{< fillin
  question="Use the Remainder Theorem to find the remainder when $-3x^2+6x+24$ is divided by $x-4$."
  answer="0"
  answerDisplay="$0$"
  hint="Evaluate the polynomial at $x=4$; a remainder of 0 means $x-4$ is a factor."
>}}

{{< fillin
  question="Use the Remainder Theorem to find the remainder when $x^4-1$ is divided by $x-4$."
  answer="255"
  answerDisplay="$255$"
  hint="Evaluate the polynomial at $x=4$."
>}}

### Use the Factor Theorem to solve a polynomial equation

{{< fillin
  question="Use the given factor and the Factor Theorem to find all real zeros of $f(x)=2x^3+x^2-5x+2$; $x+2$. Enter all of them, separated by commas."
  answer="-2,1,\tfrac{1}{2}"
  answerMode="unordered"
  answerDisplay="$x=-2$, $x=1$, or $x=\tfrac12$"
  hint="Divide by $x+2$, then factor or apply the quadratic formula to the quotient."
>}}

{{< fillin
  question="Use the given factor and the Factor Theorem to find all real zeros of $2x^3+5x^2-12x-30$; $2x+5$. Enter all of them, separated by commas."
  answer="-\tfrac{5}{2},\sqrt{6},-\sqrt{6}"
  answerMode="unordered"
  answerDisplay="$x=-\tfrac52$, $x=\sqrt6$, or $x=-\sqrt6$"
  hint="Divide by $2x+5$ (so $k=-\tfrac52$), then solve the quadratic quotient by taking square roots."
>}}

### Use the Rational Zero Theorem to find rational zeros

{{< fillin
  question="Use the Rational Zero Theorem to list all possible rational zeros of $f(x)=2x^3+3x^2-8x+5$. Enter all of them, separated by commas."
  answer="1,-1,5,-5,\tfrac{1}{2},-\tfrac{1}{2},\tfrac{5}{2},-\tfrac{5}{2}"
  answerMode="unordered"
  answerDisplay="$\pm1,\pm5,\pm\tfrac12,\pm\tfrac52$"
  hint="Divide each factor of the constant term 5 by each factor of the leading coefficient 2."
>}}

{{< fillin
  question="Use the Rational Zero Theorem to list all possible rational zeros of $f(x)=6x^4-10x^2+13x+1$. Enter all of them, separated by commas."
  answer="1,-1,\tfrac{1}{2},-\tfrac{1}{2},\tfrac{1}{3},-\tfrac{1}{3},\tfrac{1}{6},-\tfrac{1}{6}"
  answerMode="unordered"
  answerDisplay="$\pm1,\pm\tfrac12,\pm\tfrac13,\pm\tfrac16$"
  hint="The constant term is 1, so every candidate's numerator is $\pm1$; divide by each factor of the leading coefficient 6."
>}}

### Find zeros of a polynomial function

{{< fillin
  question="Use the Rational Zero Theorem to find all real zeros of $2x^3+7x^2-10x-24=0$. Enter all of them, separated by commas."
  answer="2,-4,-\tfrac{3}{2}"
  answerMode="unordered"
  answerDisplay="$x=2$, $x=-4$, or $x=-\tfrac32$"
  hint="Test the rational candidates with synthetic division until you find a zero, then solve the remaining quadratic."
>}}

{{< fillin
  question="Find all complex solutions (real and non-real) of $x^3-8x^2+25x-26=0$. Enter all of them, separated by commas."
  answer="2,3+2i,3-2i"
  answerMode="unordered"
  answerDisplay="$x=2$, $x=3+2i$, or $x=3-2i$"
  hint="Find the one real zero by testing rational candidates, then solve the quadratic quotient — its discriminant is negative."
>}}

{{< fillin
  question="Use a graph to find the rational zeros of $f(x)=6x^3-7x^2+1$. Enter all of them, separated by commas."
  answer="1,\tfrac{1}{2},-\tfrac{1}{3}"
  answerMode="unordered"
  answerDisplay="$x=1$, $x=\tfrac12$, or $x=-\tfrac13$"
  hint="All the real solutions are rational; use the Rational Zero Theorem to narrow down the candidates the graph's x-intercepts must match."
>}}

### Use the Linear Factorization Theorem to find polynomials with given zeros

{{< fillin
  question="Construct a polynomial function of least degree possible with real roots $-1$ (multiplicity 2), $1$ (multiplicity 1), and $(2,f(2))=(2,4)$."
  answer="\tfrac{4}{9}(x^3+x^2-x-1)"
  answerDisplay="$f(x)=\tfrac49(x^3+x^2-x-1)$"
  hint="Write the factors $(x+1)^2(x-1)$, multiply by an unknown leading constant $a$, then substitute $x=2$, $f(2)=4$ to solve for $a$."
>}}

{{< fillin
  question="Construct a polynomial function of least degree possible with real roots $-\tfrac12$, $0$, $\tfrac12$, and $(-2,f(-2))=(-2,6)$."
  answer="-\tfrac{1}{5}(4x^3-x)"
  answerDisplay="$f(x)=-\tfrac15(4x^3-x)$"
  hint="Write the factors $x\left(x+\tfrac12\right)\left(x-\tfrac12\right)$, multiply by an unknown constant $a$, then use the point $(-2,6)$ to solve for $a$."
>}}

### Use Descartes' Rule of Signs

{{< multiplechoice
  question="According to Descartes' Rule of Signs, which describes the possible numbers of positive and negative real zeros of $f(x)=x^4-x^2-1$?"
  answer="1 positive, 1 negative"
  hint="Count the sign changes in $f(x)$ and, separately, in $f(-x)$."
>}}
1 positive, 1 negative
2 or 0 positive, 2 or 0 negative
0 positive, 1 negative
1 positive, 0 negative
{{< /multiplechoice >}}

{{< multiplechoice
  question="According to Descartes' Rule of Signs, which describes the possible numbers of positive and negative real zeros of $f(x)=x^3-2x^2+x-1$?"
  answer="3 or 1 positive, 0 negative"
  hint="Count the sign changes in $f(x)$; then find $f(-x)$ and count its sign changes."
>}}
3 or 1 positive, 0 negative
0 positive, 3 or 1 negative
2 or 0 positive, 1 negative
1 positive, 2 or 0 negative
{{< /multiplechoice >}}

{{< multiplechoice
  question="According to Descartes' Rule of Signs, which describes the possible numbers of positive and negative real zeros of $f(x)=2x^3+37x^2+200x+300$?"
  answer="0 positive, 3 or 1 negative"
  hint="Every term of $f(x)$ is positive; then find $f(-x)$ and count its sign changes."
>}}
0 positive, 3 or 1 negative
3 or 1 positive, 0 negative
2 or 0 positive, 2 or 0 negative
1 positive, 1 negative
{{< /multiplechoice >}}

### Solve real-world applications of polynomial equations

{{< fillin
  question="A box's length is twice its width, and its height is 2 inches greater than its width. The volume is 192 cubic inches. Enter the length, width, and height, in inches, in that order, separated by commas."
  answer="8,4,6"
  answerDisplay="$l=8$, $w=4$, $h=6$"
  hint="Let $w$ be the width; write the volume as a cubic in $w$ and use the Rational Zero Theorem."
>}}

{{< fillin
  question="A box's length is one inch more than its width, which is one inch more than its height. The volume is $86.625$ cubic inches. Enter the length, width, and height, in inches, in that order, separated by commas."
  answer="5.5,4.5,3.5"
  answerDisplay="$l=5.5$, $w=4.5$, $h=3.5$"
  hint="Let $h$ be the height; write width and length in terms of $h$ and solve the resulting cubic — the solution need not be an integer."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 3.6: Zeros of Polynomial Functions](https://openstax.org/books/precalculus-2e/pages/3-6-zeros-of-polynomial-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the media links list of external practice resources; recreated the introductory Rational Zero Theorem derivation image (setting the two fractional zeros' factors equal to 0, clearing denominators, and expanding to $20x^2-23x+6$) as a KaTeX step array; recreated the four sign-change annotation images in the Descartes' Rule of Signs discussion (the introductory example and Example 8's $f(x)$ and $f(-x)$) as displayed equations with the sign-changing term pairs named in prose, since the figure toolkit has no primitive for arc annotations on a typeset equation; recreated the two synthetic-division stage images completing the bakery example's third and fourth tests ($x=3$ and $x=9$) as KaTeX synthetic-division arrays matching the first stage already shown; recreated the three instructional graphs (the bounce/cross graph of $f(x)=4x^3-3x-1$, the cross graph of $f(x)=3x^3+9x^2+x+3$, and the Descartes-confirming graph of $f(x)=-x^4-3x^3+6x^2-4x-12$) as accessible SVGs plotted from the exact `polynomials` coefficients rather than as images; omitted the five answer-key confirmation graphs accompanying the "Graphical" end-of-section exercises drawn into the Descartes' Rule of Signs Practice group, since each component's graded answer is the source's own printed Descartes-analysis text (not a graph reading) and Example 8 already demonstrates the graph-confirmation step in full; converted every "Try It" into an interactive component with instant feedback, with the "no rational zeros" and Descartes' Rule Try Its built as multiple-choice because their answers are a declarative fact or a described set of possibilities rather than a single value; and adapted 17 selected end-of-section exercises into interactive Practice components, one or more per objective group, presenting each multi-dimension word-problem answer in the length/width/height (or width/length/height) order the source's own solution used, stated explicitly in the question.</small>
