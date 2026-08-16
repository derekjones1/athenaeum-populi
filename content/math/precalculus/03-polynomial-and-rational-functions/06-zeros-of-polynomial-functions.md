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

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 4x cubed minus 3x minus 1, on a grid with x from negative 1.8 to 1.8 and y from negative 2.3 to 1.5. The curve rises from the lower left, touches the x-axis at x equals negative 0.5 without crossing it, labeled Bounce, dips to a local minimum near x equals 0.5, then rises again to cross the x-axis at x equals 1, labeled Cross, and continues upward.","xMin":-1.8,"xMax":1.8,"yMin":-2.3,"yMax":1.5,"unit":55,"grid":false,"tickLabels":true,"xTickStep":0.5,"yTickStep":0.5,"polynomials":[{"coeffs":[-1,-3,0,4],"arrows":true}],"points":[{"at":[-0.5,0],"label":"Bounce"},{"at":[1,0],"label":"Cross"}]}
{{< /apfigure >}}

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

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 3x cubed plus 9x squared plus x plus 3, on a grid with x from negative 4.3 to 2.3 and y from negative 3.5 to 17. The curve rises from the lower left, crosses the x-axis at x equals negative 3, labeled Cross, rises to a local maximum near x equals negative 1.9, dips to a local minimum near x equals 0 without recrossing the axis, then rises steeply to the right.","xMin":-4.3,"xMax":2.3,"yMin":-3.5,"yMax":17,"xUnit":30,"yUnit":11,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":3,"polynomials":[{"coeffs":[3,1,9,3],"arrows":true}],"points":[{"at":[-3,0],"label":"Cross"}]}
{{< /apfigure >}}

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

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals negative x to the fourth minus 3x cubed plus 6x squared minus 4x minus 12, on a grid with x from negative 5.3 to 5.3 and y from negative 33 to 63. The curve rises from the lower left, crosses the x-axis near x equals negative 4.42, rises to a local maximum, falls and crosses the x-axis again at x equals negative 1, then dips to a local minimum and continues downward to the lower right without crossing the axis again, confirming zero positive real zeros and two negative real zeros.","xMin":-5.3,"xMax":5.3,"yMin":-33,"yMax":63,"xUnit":22,"yUnit":4,"grid":true,"xGridStep":1,"yGridStep":10,"tickLabels":true,"xTickStep":1,"yTickStep":10,"polynomials":[{"coeffs":[-12,-4,6,-3,-1],"arrows":true}],"points":[{"at":[-4.42,0],"label":"x = -4.42","labelSide":"nw"},{"at":[-1,0],"label":"x = -1"}]}
{{< /apfigure >}}

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
