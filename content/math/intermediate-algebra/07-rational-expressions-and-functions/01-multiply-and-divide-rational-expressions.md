---
title: Multiply and Divide Rational Expressions
description: >-
  Determining excluded values, simplifying rational expressions, multiplying
  and dividing rational expressions, and multiplying and dividing rational
  functions — adapted from OpenStax Intermediate Algebra 2e, Section 7.1.
source_section: "7.1"
weight: 1
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** determine the values for
  which a rational expression is undefined, simplify rational expressions,
  multiply rational expressions, divide rational expressions, and multiply and
  divide rational functions.
{{< /callout >}}

We previously reviewed the properties of fractions and their operations. We
introduced rational numbers, which are fractions where the numerators and
denominators are integers. In this chapter, we will work with fractions whose
numerators and denominators are polynomials. We call this kind of expression a
**rational expression**.

{{< callout type="info" >}}
  **Rational expression.** A rational expression is an expression of the form
  $\tfrac{p}{q}$, where $p$ and $q$ are polynomials and $q \ne 0$.
{{< /callout >}}

Examples of rational expressions include

$$-\frac{24}{56},\qquad \frac{5x}{12y},\qquad \frac{4x+1}{x^2-9},\qquad \frac{4x^2+3x-1}{2x-8}.$$

The first expression, $-\tfrac{24}{56}$, is just a fraction. Since a constant
is a polynomial with degree zero, the ratio of two constants is a rational
expression, provided the denominator is not zero. We will do the same
operations with rational expressions that we did with fractions: simplify,
add, subtract, multiply, divide, and use them in applications.

## Determine the values for which a rational expression is undefined

If the denominator is zero, the rational expression is undefined. The numerator
of a rational expression may be zero—but not the denominator.

When we work with a numerical fraction, it is easy to avoid dividing by zero
because we can see the number in the denominator. To avoid dividing by zero in
a rational expression, we must not allow values of the variable that make the
denominator zero.

Before beginning any operation with a rational expression, first examine it to
find the values that would make the denominator zero. That way, when we solve a
rational equation, we will know whether the algebraic solutions are allowed.

{{< callout type="info" >}}
  **Determine the values for which a rational expression is undefined.**

  1. Set the denominator equal to zero.
  2. Solve the equation.
{{< /callout >}}

**Example.** Determine the value for which each rational expression is
undefined: (a) $\tfrac{8a^2b}{3c}$, (b) $\tfrac{4b-3}{2b+5}$, and (c)
$\tfrac{x+4}{x^2+5x+6}$.

The expression is undefined when its denominator is zero.

$$
\begin{array}{lrcl}
\text{(a) Set the denominator equal to zero.} & 3c &=& 0 \\[4pt]
\text{Solve.} & c &=& 0
\end{array}
$$

Thus $\tfrac{8a^2b}{3c}$ is undefined for $c=0$.

$$
\begin{array}{lrcl}
\text{(b) Set the denominator equal to zero.} & 2b+5 &=& 0 \\[4pt]
\text{Subtract 5.} & 2b &=& -5 \\[4pt]
\text{Solve.} & b &=& -\tfrac{5}{2}
\end{array}
$$

Thus $\tfrac{4b-3}{2b+5}$ is undefined for $b=-\tfrac{5}{2}$.

$$
\begin{array}{lrcl}
\text{(c) Set the denominator equal to zero.} & x^2+5x+6 &=& 0 \\[4pt]
\text{Factor.} & (x+2)(x+3) &=& 0 \\[4pt]
\text{Use the Zero Product Property.} & x+2 &=& 0\quad\text{or}\quad x+3=0 \\[4pt]
\text{Solve.} & x &=& -2\quad\text{or}\quad x=-3
\end{array}
$$

Thus $\tfrac{x+4}{x^2+5x+6}$ is undefined for $x=-2$ or $x=-3$.

{{< fillin
  question="For what value is $\tfrac{3y^2}{8x}$ undefined?"
  answer="0"
  answerDisplay="$x=0$"
  hint="Set the denominator $8x$ equal to zero and solve for $x$."
>}}

{{< fillin
  question="For what value is $\tfrac{8n-5}{3n+1}$ undefined?"
  answer="-\frac{1}{3}"
  answerDisplay="$n=-\tfrac{1}{3}$"
  hint="Set $3n+1$ equal to zero and solve for $n$."
>}}

{{< fillin
  question="Enter, separated by commas, the values for which $\tfrac{a+10}{a^2+4a+3}$ is undefined."
  answer="-1, -3"
  answerDisplay="$-1,-3$"
  hint="Factor the denominator as $(a+1)(a+3)$, then set each factor equal to zero."
>}}

{{< fillin
  question="For what value is $\tfrac{4p}{5q}$ undefined?"
  answer="0"
  answerDisplay="$q=0$"
  hint="Set the denominator $5q$ equal to zero."
>}}

{{< fillin
  question="For what value is $\tfrac{y-1}{3y+2}$ undefined?"
  answer="-\frac{2}{3}"
  answerDisplay="$y=-\tfrac{2}{3}$"
  hint="Set $3y+2$ equal to zero and solve."
>}}

{{< fillin
  question="Enter, separated by commas, the values for which $\tfrac{m-5}{m^2+m-6}$ is undefined."
  answer="2, -3"
  answerDisplay="$2,-3$"
  hint="Factor the denominator as $(m+3)(m-2)$."
>}}

## Simplify rational expressions

A fraction is simplified if there are no common factors, other than $1$, in
its numerator and denominator. Similarly, a **simplified rational expression**
has no common factors, other than $1$, in its numerator and denominator.

{{< callout type="info" >}}
  **Simplified rational expression.** A rational expression is considered
  simplified if there are no common factors in its numerator and denominator.
{{< /callout >}}

For example, $\tfrac{x+2}{x+3}$ is simplified because there are no common
factors of $x+2$ and $x+3$. The expression $\tfrac{2x}{3x}$ is not simplified
because $x$ is a common factor of $2x$ and $3x$.

We use the Equivalent Fractions Property to simplify numerical fractions, and
we use it to simplify rational expressions as well.

{{< callout type="info" >}}
  **Equivalent Fractions Property.** If $a$, $b$, and $c$ are numbers where
  $b \ne 0$ and $c \ne 0$, then

  $$\frac{a}{b}=\frac{a\cdot c}{b\cdot c}\qquad\text{and}\qquad\frac{a\cdot c}{b\cdot c}=\frac{a}{b}.$$
{{< /callout >}}

The values that would make the denominators zero are specifically disallowed.
To simplify rational expressions, first write the numerator and denominator in
factored form. Then remove the common factors using the Equivalent Fractions
Property.

Be careful when removing common factors. Factors are multiplied to make a
product. You can remove a factor from a product, but you cannot remove a term
from a sum. For example, common factors can be removed from
$\tfrac{2\cdot3\cdot7}{3\cdot5\cdot7}$ and from
$\tfrac{3x(x-9)}{5(x-9)}$ (where $x\ne9$). But the $x$ in
$\tfrac{x+5}{x}$ cannot be removed: the numerator is a sum. Doing so would be
like cancelling the $2\text{s}$ in $\tfrac{2+5}{2}$.

**Example.** Simplify $\tfrac{x^2+5x+6}{x^2+8x+12}$.

$$
\begin{array}{lrcl}
\text{Factor the numerator and denominator completely.} &&& \tfrac{(x+2)(x+3)}{(x+2)(x+6)} \\[10pt]
\text{Divide out the common factor }x+2. &&& \tfrac{x+3}{x+6}
\end{array}
$$

The original denominator gives the restrictions $x\ne-2$ and $x\ne-6$.

{{< fillin
  question="Simplify $\tfrac{x^2-x-2}{x^2-3x+2}$."
  answer="\frac{x+1}{x-1}"
  answerDisplay="$\tfrac{x+1}{x-1}$"
  hint="Factor the numerator as $(x-2)(x+1)$ and the denominator as $(x-2)(x-1)$."
>}}

{{< fillin
  question="Simplify $\tfrac{x^2-3x-10}{x^2+x-2}$."
  answer="\frac{x-5}{x-1}"
  answerDisplay="$\tfrac{x-5}{x-1}$"
  hint="Factor both polynomials completely, then remove their common factor."
>}}

{{< callout type="info" >}}
  **Simplify a rational expression.**

  1. Factor the numerator and denominator completely.
  2. Simplify by dividing out common factors.
{{< /callout >}}

Usually, we leave the simplified rational expression in factored form. This
makes it easy to check that we have removed all common factors. Every time we
write a rational expression, we should make a statement disallowing values
that would make a denominator zero. To focus on the work at hand, the examples
below omit those restrictions.

**Example.** Simplify
$\tfrac{3a^2-12ab+12b^2}{6a^2-24b^2}$.

$$
\begin{array}{lrcl}
\text{Factor out the GCF.} &&& \tfrac{3(a^2-4ab+4b^2)}{6(a^2-4b^2)} \\[10pt]
\text{Factor completely.} &&& \tfrac{3(a-2b)(a-2b)}{6(a+2b)(a-2b)} \\[10pt]
\text{Remove the common factors of }a-2b\text{ and }3. &&& \tfrac{a-2b}{2(a+2b)}
\end{array}
$$

{{< fillin
  question="Simplify $\tfrac{2x^2-12xy+18y^2}{3x^2-27y^2}$."
  answer="\frac{2(x-3y)}{3(x+3y)}"
  answerDisplay="$\tfrac{2(x-3y)}{3(x+3y)}$"
  hint="Factor the numerator as $2(x-3y)^2$ and the denominator as $3(x-3y)(x+3y)$."
>}}

{{< fillin
  question="Simplify $\tfrac{5x^2-30xy+25y^2}{2x^2-50y^2}$."
  answer="\frac{5(x-y)}{2(x+5y)}"
  answerDisplay="$\tfrac{5(x-y)}{2(x+5y)}$"
  hint="Factor out each GCF, then factor the remaining trinomials and differences of squares."
>}}

Sometimes the numerator and denominator have opposite factors. The opposite of
$a$ is $-a=-1\cdot a$. For example, $\tfrac{-7}{7}=-1$, and in the same way
$\tfrac{a}{-a}=-1$. Rewriting $b-a$ as $-a+b=-1(a-b)$ shows that $b-a$ is the
opposite of $a-b$.

{{< callout type="info" >}}
  **Opposites in a rational expression.** The opposite of $a-b$ is $b-a$, so

  $$\frac{a-b}{b-a}=-1,\qquad a\ne b.$$

  An expression and its opposite divide to $-1$.
{{< /callout >}}

Be careful not to treat $a+b$ and $b+a$ as opposites. Addition is commutative,
so $a+b=b+a$. Thus, if $a\ne-b$, then $\tfrac{a+b}{b+a}=1$.

**Example.** Simplify $\tfrac{x^2-4x-32}{64-x^2}$.

$$
\begin{array}{lrcl}
\text{Factor the numerator and denominator.} &&& \tfrac{(x-8)(x+4)}{(8-x)(8+x)} \\[10pt]
\text{Recognize opposite factors.} &&& \tfrac{(-1)(8-x)(x+4)}{(8-x)(8+x)} \\[10pt]
\text{Simplify.} &&& -\tfrac{x+4}{x+8}
\end{array}
$$

{{< fillin
  question="Simplify $\tfrac{x^2-4x-5}{25-x^2}$."
  answer="-\frac{x+1}{x+5}"
  answerDisplay="$-\tfrac{x+1}{x+5}$"
  hint="Factor the numerator, then recognize that $x-5$ and $5-x$ are opposites."
>}}

{{< fillin
  question="Simplify $\tfrac{x^2+x-2}{1-x^2}$."
  answer="-\frac{x+2}{x+1}"
  answerDisplay="$-\tfrac{x+2}{x+1}$"
  hint="Factor both polynomials and use $1-x=-(x-1)$."
>}}

## Multiply rational expressions

To multiply rational expressions, we do what we did with numerical fractions:
multiply the numerators and multiply the denominators. Then remove common
factors to simplify the result.

{{< callout type="info" >}}
  **Multiplication of rational expressions.** If $p$, $q$, $r$, and $s$ are
  polynomials where $q\ne0$ and $s\ne0$, then

  $$\frac{p}{q}\cdot\frac{r}{s}=\frac{pr}{qs}.$$

  To multiply rational expressions, multiply the numerators and multiply the
  denominators.
{{< /callout >}}

Throughout this chapter, we assume that all numerical values that would make a
denominator zero are excluded. In the next example, $x\ne0$, $x\ne3$, and
$x\ne4$.

**Example.** Simplify
$\tfrac{2x}{x^2-7x+12}\cdot\tfrac{x^2-9}{6x^2}$.

$$
\begin{array}{lrcl}
\text{Factor each numerator and denominator completely.} &&& \tfrac{2x}{(x-3)(x-4)}\cdot\tfrac{(x-3)(x+3)}{6x^2} \\[10pt]
\text{Multiply the numerators and denominators.} &&& \tfrac{2x(x-3)(x+3)}{6x^2(x-3)(x-4)} \\[10pt]
\text{Divide out common factors; leave the denominator factored.} &&& \tfrac{x+3}{3x(x-4)}
\end{array}
$$

{{< fillin
  question="Simplify $\tfrac{5x}{x^2+5x+6}\cdot\tfrac{x^2-4}{10x}$."
  answer="\frac{x-2}{2(x+3)}"
  answerDisplay="$\tfrac{x-2}{2(x+3)}$"
  hint="Factor $x^2+5x+6$ and $x^2-4$, then remove common factors."
>}}

{{< fillin
  question="Simplify $\tfrac{9x^2}{x^2+11x+30}\cdot\tfrac{x^2-36}{3x^2}$."
  answer="\frac{3(x-6)}{x+5}"
  answerDisplay="$\tfrac{3(x-6)}{x+5}$"
  hint="Factor both quadratic expressions completely before multiplying."
>}}

{{< callout type="info" >}}
  **Multiply rational expressions.**

  1. Factor each numerator and denominator completely.
  2. Multiply the numerators and denominators.
  3. Simplify by dividing out common factors.
{{< /callout >}}

**Example.** Multiply
$\tfrac{3a^2-8a-3}{a^2-25}\cdot\tfrac{a^2+10a+25}{3a^2-14a-5}$.

$$
\begin{array}{lrcl}
\text{Factor the numerators and denominators, then multiply.} &&& \tfrac{(3a+1)(a-3)(a+5)(a+5)}{(a-5)(a+5)(3a+1)(a-5)} \\[10pt]
\text{Divide out common factors.} &&& \tfrac{(a-3)(a+5)}{(a-5)(a-5)} \\[10pt]
\text{Rewrite the repeated denominator factor using an exponent.} &&& \tfrac{(a-3)(a+5)}{(a-5)^2}
\end{array}
$$

{{< fillin
  question="Simplify $\tfrac{2x^2+5x-12}{x^2-16}\cdot\tfrac{x^2-8x+16}{2x^2-13x+15}$."
  answer="\frac{x-4}{x-5}"
  answerDisplay="$\tfrac{x-4}{x-5}$"
  hint="Factor every polynomial completely, then divide out common factors."
>}}

{{< fillin
  question="Simplify $\tfrac{4b^2+7b-2}{1-b^2}\cdot\tfrac{b^2-2b+1}{4b^2+15b-4}$."
  answer="-\frac{(b+2)(b-1)}{(b+1)(b+4)}"
  answerDisplay="$-\tfrac{(b+2)(b-1)}{(b+1)(b+4)}$"
  hint="Factor each polynomial and recognize the opposite factors $1-b$ and $b-1$."
>}}

## Divide rational expressions

As with numerical fractions, to divide rational expressions, multiply the first
fraction by the reciprocal of the second.

{{< callout type="info" >}}
  **Division of rational expressions.** If $p$, $q$, $r$, and $s$ are
  polynomials where $q\ne0$, $r\ne0$, and $s\ne0$, then

  $$\frac{p}{q}\div\frac{r}{s}=\frac{p}{q}\cdot\frac{s}{r}.$$

  To divide rational expressions, multiply the first fraction by the reciprocal
  of the second.
{{< /callout >}}

Once the division is rewritten as multiplication of the first expression by the
reciprocal of the second, factor everything and look for common factors.

**Example.** Divide
$\tfrac{p^3+q^3}{2p^2+2pq+2q^2}\div\tfrac{p^2-q^2}{6}$.

$$
\begin{array}{lrcl}
\text{Multiply by the reciprocal of the second fraction.} &&& \tfrac{p^3+q^3}{2p^2+2pq+2q^2}\cdot\tfrac{6}{p^2-q^2} \\[10pt]
\text{Factor the numerators and denominators completely.} &&& \tfrac{(p+q)(p^2-pq+q^2)}{2(p^2+pq+q^2)}\cdot\tfrac{2\cdot3}{(p-q)(p+q)} \\[10pt]
\text{Multiply and remove common factors.} &&& \tfrac{3(p^2-pq+q^2)}{(p-q)(p^2+pq+q^2)}
\end{array}
$$

{{< fillin
  question="Simplify $\tfrac{x^3+8}{3x^2-6x+12}\div\tfrac{x^2-4}{6}$."
  answer="\frac{2}{x-2}"
  answerDisplay="$\tfrac{2}{x-2}$"
  hint="Multiply by the reciprocal, factor the sum of cubes and difference of squares, then simplify."
>}}

{{< fillin
  question="Simplify $\tfrac{2z^2}{z^2-1}\div\tfrac{z^3-z^2+z}{z^3+1}$."
  answer="\frac{2z}{z-1}"
  answerDisplay="$\tfrac{2z}{z-1}$"
  hint="Multiply by the reciprocal and factor $z^3+1$ as a sum of cubes."
>}}

{{< callout type="info" >}}
  **Divide rational expressions.**

  1. Rewrite the division as the product of the first rational expression and
     the reciprocal of the second.
  2. Factor the numerators and denominators completely.
  3. Multiply the numerators and denominators together.
  4. Simplify by dividing out common factors.
{{< /callout >}}

A **complex fraction** is a fraction that contains a fraction in the numerator,
the denominator, or both. A fraction bar means division, so a complex fraction
is another way of writing division of two fractions.

**Example.** Divide the complex fraction

$$
\cfrac{\frac{6x^2-7x+2}{4x-8}}{\frac{2x^2-7x+3}{x^2-5x+6}}.
$$

$$
\begin{array}{lrcl}
\text{Rewrite with a division sign.} &&& \tfrac{6x^2-7x+2}{4x-8}\div\tfrac{2x^2-7x+3}{x^2-5x+6} \\[10pt]
\text{Multiply the first fraction by the reciprocal of the second.} &&& \tfrac{6x^2-7x+2}{4x-8}\cdot\tfrac{x^2-5x+6}{2x^2-7x+3} \\[10pt]
\text{Factor and multiply.} &&& \tfrac{(2x-1)(3x-2)(x-2)(x-3)}{4(x-2)(2x-1)(x-3)} \\[10pt]
\text{Divide out common factors.} &&& \tfrac{3x-2}{4}
\end{array}
$$

{{< fillin
  question="Simplify the complex fraction $\cfrac{\tfrac{3x^2+7x+2}{4x+24}}{\tfrac{3x^2-14x-5}{x^2+x-30}}$."
  answer="\frac{x+2}{4}"
  answerDisplay="$\tfrac{x+2}{4}$"
  hint="Rewrite the fraction bar as division, multiply by the reciprocal, and factor each polynomial."
>}}

{{< fillin
  question="Simplify the complex fraction $\cfrac{\tfrac{y^2-36}{2y^2+11y-6}}{\tfrac{2y^2-2y-60}{8y-4}}$."
  answer="\frac{2}{y+5}"
  answerDisplay="$\tfrac{2}{y+5}$"
  hint="Rewrite as multiplication by the reciprocal, then factor all four polynomials."
>}}

When there are more than two rational expressions, follow the same procedure.
First rewrite any division as multiplication by the reciprocal. Then factor and
multiply.

**Example.** Perform the indicated operations:
$\tfrac{3x-6}{4x-4}\cdot\tfrac{x^2+2x-3}{x^2-3x-10}\div\tfrac{2x+12}{8x+16}$.

$$
\begin{array}{lrcl}
\text{Rewrite the division as multiplication by the reciprocal.} &&& \tfrac{3x-6}{4x-4}\cdot\tfrac{x^2+2x-3}{x^2-3x-10}\cdot\tfrac{8x+16}{2x+12} \\[10pt]
\text{Factor numerators and denominators.} &&& \tfrac{3(x-2)}{4(x-1)}\cdot\tfrac{(x+3)(x-1)}{(x+2)(x-5)}\cdot\tfrac{8(x+2)}{2(x+6)} \\[10pt]
\text{Multiply, bringing constants to the front.} &&& \tfrac{3\cdot8(x-2)(x+3)(x-1)(x+2)}{4\cdot2(x-1)(x+2)(x-5)(x+6)} \\[10pt]
\text{Divide out common factors and simplify.} &&& \tfrac{3(x-2)(x+3)}{(x-5)(x+6)}
\end{array}
$$

{{< fillin
  question="Perform the indicated operations: $\tfrac{4m+4}{3m-15}\cdot\tfrac{m^2-3m-10}{m^2-4m-32}\div\tfrac{12m-36}{6m-48}$."
  answer="\frac{2(m+1)(m+2)}{3(m+4)(m-3)}"
  answerDisplay="$\tfrac{2(m+1)(m+2)}{3(m+4)(m-3)}$"
  hint="Rewrite division as multiplication by the reciprocal, then factor and remove common factors."
>}}

{{< fillin
  question="Perform the indicated operations: $\tfrac{2n^2+10n}{n-1}\div\tfrac{n^2+10n+24}{n^2+8n-9}\cdot\tfrac{n+4}{8n^2+12n}$."
  answer="\frac{(n+5)(n+9)}{2(n+6)(2n+3)}"
  answerDisplay="$\tfrac{(n+5)(n+9)}{2(n+6)(2n+3)}$"
  hint="Change the division to multiplication by a reciprocal and factor every polynomial completely."
>}}

## Multiply and divide rational functions

A rational expression has the form $\tfrac{p}{q}$, where $p$ and $q$ are
polynomials and $q\ne0$. Similarly, we define a **rational function** as a
function of the form $R(x)=\tfrac{p(x)}{q(x)}$.

{{< callout type="info" >}}
  **Rational function.** A rational function is a function of the form

  $$R(x)=\frac{p(x)}{q(x)},$$

  where $p(x)$ and $q(x)$ are polynomial functions and $q(x)$ is not zero.
{{< /callout >}}

The domain of a rational function is all real numbers except values that would
cause division by zero. We must eliminate any values that make $q(x)=0$.

{{< callout type="info" >}}
  **Determine the domain of a rational function.**

  1. Set the denominator equal to zero.
  2. Solve the equation.
  3. The domain is all real numbers excluding the values found in Step 2.
{{< /callout >}}

**Example.** Find the domain of
$R(x)=\tfrac{2x^2-14x}{4x^2-16x-48}$.

The domain is all real numbers except those values that make the denominator
zero.

$$
\begin{array}{lrcl}
\text{Set the denominator to zero.} & 4x^2-16x-48 &=& 0 \\[4pt]
\text{Factor out the GCF.} & 4(x^2-4x-12) &=& 0 \\[4pt]
\text{Factor.} & 4(x-6)(x+2) &=& 0 \\[4pt]
\text{Use the Zero Product Property.} & x-6 &=& 0\quad\text{or}\quad x+2=0 \\[4pt]
\text{Solve.} & x &=& 6\quad\text{or}\quad x=-2
\end{array}
$$

The domain of $R(x)$ is all real numbers where $x\ne6$ and $x\ne-2$.

{{< fillin
  question="Find the values excluded from the domain of $R(x)=\tfrac{2x^2-10x}{4x^2-16x-20}$. Enter them separated by commas."
  answer="-1, 5"
  answerDisplay="$-1,5$"
  hint="Set the denominator equal to zero, divide out its GCF, and factor."
>}}

{{< fillin
  question="Find the values excluded from the domain of $R(x)=\tfrac{4x^2-16x}{8x^2-16x-64}$. Enter them separated by commas."
  answer="-2, 4"
  answerDisplay="$-2,4$"
  hint="Factor the denominator after removing the GCF."
>}}

To multiply rational functions, multiply the resulting rational expressions on
the right side of the equation using the same techniques used to multiply
rational expressions.

**Example.** Find $R(x)=f(x)\cdot g(x)$ where
$f(x)=\tfrac{2x-6}{x^2-8x+15}$ and
$g(x)=\tfrac{x^2-25}{2x+10}$.

$$
\begin{array}{lrcl}
\text{Substitute the functions.} & R(x) &=& \tfrac{2x-6}{x^2-8x+15}\cdot\tfrac{x^2-25}{2x+10} \\[10pt]
\text{Factor each numerator and denominator.} & R(x) &=& \tfrac{2(x-3)}{(x-3)(x-5)}\cdot\tfrac{(x-5)(x+5)}{2(x+5)} \\[10pt]
\text{Multiply and remove common factors.} & R(x) &=& 1
\end{array}
$$

{{< fillin
  question="Find $R(x)=f(x)\cdot g(x)$ where $f(x)=\tfrac{3x-21}{x^2-9x+14}$ and $g(x)=\tfrac{2x^2-8}{3x+6}$."
  answer="2"
  hint="Factor each expression completely before multiplying."
>}}

{{< fillin
  question="Find $R(x)=f(x)\cdot g(x)$ where $f(x)=\tfrac{x^2-x}{3x^2+27x-30}$ and $g(x)=\tfrac{x^2-100}{x^2-10x}$."
  answer="\frac{1}{3}"
  answerDisplay="$\tfrac{1}{3}$"
  hint="Factor every numerator and denominator, multiply, and remove common factors."
>}}

To divide rational functions, divide the resulting rational expressions on the
right side of the equation using the same techniques used to divide rational
expressions.

**Example.** Find $R(x)=\tfrac{f(x)}{g(x)}$ where
$f(x)=\tfrac{3x^2}{x^2-4x}$ and
$g(x)=\tfrac{9x^2-45x}{x^2-7x+10}$.

$$
\begin{array}{lrcl}
\text{Substitute }f(x)\text{ and }g(x). & R(x) &=& \cfrac{\tfrac{3x^2}{x^2-4x}}{\tfrac{9x^2-45x}{x^2-7x+10}} \\[10pt]
\text{Multiply by the reciprocal of }g(x). & R(x) &=& \tfrac{3x^2}{x^2-4x}\cdot\tfrac{x^2-7x+10}{9x^2-45x} \\[10pt]
\text{Factor, multiply, and remove common factors.} & R(x) &=& \tfrac{x-2}{3(x-4)}
\end{array}
$$

{{< fillin
  question="Find $R(x)=\tfrac{f(x)}{g(x)}$ where $f(x)=\tfrac{2x^2}{x^2-8x}$ and $g(x)=\tfrac{8x^2+24x}{x^2+x-6}$."
  answer="\frac{x-2}{4(x-8)}"
  answerDisplay="$\tfrac{x-2}{4(x-8)}$"
  hint="Rewrite the quotient as multiplication by the reciprocal, then factor and simplify."
>}}

{{< fillin
  question="Find $R(x)=\tfrac{f(x)}{g(x)}$ where $f(x)=\tfrac{15x^2}{3x^2+33x}$ and $g(x)=\tfrac{5x-5}{x^2+9x-22}$."
  answer="\frac{x(x-2)}{x-1}"
  answerDisplay="$\tfrac{x(x-2)}{x-1}$"
  hint="Multiply $f(x)$ by the reciprocal of $g(x)$, then factor all polynomials."
>}}

## Key terms

**rational expression** — an expression of the form $\tfrac{p}{q}$, where
$p$ and $q$ are polynomials and $q\ne0$. **simplified rational expression** —
a rational expression with no common factors in its numerator and denominator.
**complex fraction** — a fraction containing a fraction in its numerator,
denominator, or both. **rational function** — a function of the form
$R(x)=\tfrac{p(x)}{q(x)}$, where $p(x)$ and $q(x)$ are polynomial functions and
$q(x)$ is not zero.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 7.1: Multiply and Divide Rational Expressions](https://openstax.org/books/intermediate-algebra-2e/pages/7-1-multiply-and-divide-rational-expressions) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted the worked solutions as accessible typeset step arrays; omitted the Be Prepared quiz, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
