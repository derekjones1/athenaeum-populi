---
title: Dividing Polynomials
description: >-
  Dividing monomials and polynomials, using polynomial long division and
  synthetic division, dividing polynomial functions, and applying the
  Remainder and Factor Theorems — adapted from OpenStax Intermediate Algebra
  2e, Section 5.4.
source_section: "5.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** divide monomials,
  divide a polynomial by a monomial, divide polynomials using long division,
  divide polynomials using synthetic division, divide polynomial functions,
  and use the Remainder and Factor Theorems.
{{< /callout >}}

## Dividing monomials

We are now familiar with all the properties of exponents and have used them
to multiply polynomials. Next, we'll use these properties to divide monomials
and polynomials.

**Example.** Find the quotient: $54a^2b^3 \div \left(-6ab^5\right)$.

When we divide monomials with more than one variable, we write one fraction
for each variable:

$$
\begin{array}{lrcl}
\text{Rewrite as a fraction.} & 54a^2b^3 \div \left(-6ab^5\right) &=& \tfrac{54a^2b^3}{-6ab^5} \\[10pt]
\text{Use fraction multiplication.} & &=& \tfrac{54}{-6}\cdot\tfrac{a^2}{a}\cdot\tfrac{b^3}{b^5} \\[10pt]
\text{Simplify and use the Quotient Property.} & &=& -9\cdot a\cdot\tfrac{1}{b^2} \\[10pt]
\text{Multiply.} & &=& -\tfrac{9a}{b^2}
\end{array}
$$

{{< fillin
  question="Find the quotient: $-72a^7b^3 \div \left(8a^{12}b^4\right)$."
  answer="-\frac{9}{a^5b}"
  answerDisplay="$-\tfrac{9}{a^5b}$"
>}}

{{< fillin
  question="Find the quotient: $-63c^8d^3 \div \left(7c^{12}d^2\right)$."
  answer="-\frac{9d}{c^4}"
  answerDisplay="$-\tfrac{9d}{c^4}$"
>}}

Once you become familiar with the process and have practiced it step by step
several times, you may be able to simplify a fraction in one step.

**Example.** Find the quotient: $\tfrac{14x^7y^{12}}{21x^{11}y^6}$.

Be very careful to simplify $\tfrac{14}{21}$ by dividing out a common factor,
and to simplify the variables by subtracting their exponents:

$$
\frac{14x^7y^{12}}{21x^{11}y^6}
= \frac{2y^6}{3x^4}.
$$

{{< fillin
  question="Find the quotient: $\tfrac{28x^5y^{14}}{49x^9y^{12}}$."
  answer="\frac{4y^2}{7x^4}"
  answerDisplay="$\tfrac{4y^2}{7x^4}$"
>}}

{{< fillin
  question="Find the quotient: $\tfrac{30m^5n^{11}}{48m^{10}n^{14}}$."
  answer="\frac{5}{8m^5n^3}"
  answerDisplay="$\tfrac{5}{8m^5n^3}$"
>}}

## Divide a polynomial by a monomial

Now that we know how to divide a monomial by a monomial, the next procedure
is to divide a polynomial of two or more terms by a monomial.

The method is based on the properties of fraction addition. The sum
$\tfrac{y}{5}+\tfrac{2}{5}$ simplifies to $\tfrac{y+2}{5}$. In reverse,
$\tfrac{y+2}{5}$ can be split into $\tfrac{y}{5}+\tfrac{2}{5}$. More
generally, if $a$, $b$, and $c$ are numbers where $c\neq0$, then

$$
\frac{a+b}{c}=\frac{a}{c}+\frac{b}{c}.
$$

{{< callout type="info" >}}
  **Division of a polynomial by a monomial.** To divide a polynomial by a
  monomial, divide each term of the polynomial by the monomial.
{{< /callout >}}

**Example.** Find the quotient:
$\left(18x^3y-36xy^2\right)\div(-3xy)$.

$$
\begin{array}{lrcl}
\text{Rewrite as a fraction.} & \left(18x^3y-36xy^2\right)\div(-3xy) &=& \tfrac{18x^3y-36xy^2}{-3xy} \\[10pt]
\text{Divide each term by the divisor.} & &=& \tfrac{18x^3y}{-3xy}-\tfrac{36xy^2}{-3xy} \\[10pt]
\text{Simplify.} & &=& -6x^2+12y
\end{array}
$$

{{< fillin
  question="Find the quotient: $\left(32a^2b-16ab^2\right)\div(-8ab)$."
  answer="-4a+2b"
  answerDisplay="$-4a+2b$"
>}}

{{< fillin
  question="Find the quotient: $\left(-48a^8b^4-36a^6b^5\right)\div\left(-6a^3b^3\right)$."
  answer="8a^5b+6a^3b^2"
  answerDisplay="$8a^5b+6a^3b^2$"
>}}

## Divide polynomials using long division

To divide a polynomial by a binomial, we follow a procedure very similar to
long division of numbers. Consider dividing $875$ by $25$:

$$
\begin{array}{r}
\phantom{25\,\overline{\smash{)}\,}}\phantom{8}35 \\[-1pt]
25\,\overline{\smash{)}\,875} \\[-1pt]
\phantom{25\,\overline{\smash{)}\,}}\underline{-75}\phantom{5} \\[-1pt]
\phantom{25\,\overline{\smash{)}\,}}\phantom{-}125 \\[-1pt]
\phantom{25\,\overline{\smash{)}\,}}\underline{-125} \\[-1pt]
\phantom{25\,\overline{\smash{)}\,}}\phantom{-12}0
\end{array}
$$

We check division by multiplying the quotient by the divisor. If we did the
division correctly, the product should equal the dividend:
$35\cdot25=875$ ✓.

**Example.** Find the quotient:
$\left(x^2+9x+20\right)\div(x+5)$.

Write the dividend in standard form. Divide $x^2$ by $x$ to get $x$ and put
it in the quotient. Multiply $x$ by $x+5$, subtract, and bring down $20$.
Then divide $4x$ by $x$ to get $4$, multiply, and subtract:

$$
\begin{array}{r}
x+4\phantom{0}\phantom{)} \\[2pt]
x+5\,\overline{\smash{)}\,x^2+9x+20}\phantom{)} \\[2pt]
\underline{-\left(x^2+5x\right)}\phantom{{}+20} \\[2pt]
4x+20\phantom{)} \\[2pt]
\underline{-\left(4x+20\right)} \\[2pt]
0\phantom{)}
\end{array}
$$

To check, multiply $(x+4)(x+5)$. The product is $x^2+9x+20$ ✓, so the
quotient is $x+4$.

{{< fillin
  question="Find the quotient: $\left(y^2+10y+21\right)\div(y+3)$."
  answer="y+7"
  answerDisplay="$y+7$"
>}}

{{< fillin
  question="Find the quotient: $\left(m^2+9m+20\right)\div(m+4)$."
  answer="m+5"
  answerDisplay="$m+5$"
>}}

Sometimes polynomial division leaves a remainder. We write the remainder as
a fraction with the divisor as the denominator. When a degree is missing
from the dividend, we insert a term with zero coefficient as a placeholder.

**Example.** Find the quotient:
$\left(x^4-x^2+5x-6\right)\div(x+2)$.

There is no $x^3$ term, so add $0x^3$ as a placeholder. Long division gives

$$
\begin{array}{r}
x^3-2x^2+3x-1\phantom{{}-6}\phantom{)} \\[3pt]
x+2\,\overline{\smash{)}\,x^4+0x^3-x^2+5x-6}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}x^4+2x^3\mathrlap{)}}\phantom{{}-x^2+5x-6}\phantom{)} \\[3pt]
-2x^3-\phantom{4}x^2\phantom{{}+5x-6}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}{-2x^3-4x^2}\mathrlap{)}}\phantom{{}+5x-6}\phantom{)} \\[3pt]
3x^2+5x\phantom{{}-6}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}3x^2+6x\mathrlap{)}}\phantom{{}-6}\phantom{)} \\[3pt]
-x-6\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}{-x-2}\mathrlap{)}}\phantom{)} \\[3pt]
-4\phantom{)}
\end{array}
$$

The quotient is

$$
x^3-2x^2+3x-1-\frac{4}{x+2}.
$$

To check, multiply
$(x+2)\left(x^3-2x^2+3x-1-\tfrac{4}{x+2}\right)$. The result is
$x^4-x^2+5x-6$.

{{< fillin
  question="Find the quotient: $\left(x^4-7x^2+7x+6\right)\div(x+3)$."
  answer="x^3-3x^2+2x+1+\frac{3}{x+3}"
  answerDisplay="$x^3-3x^2+2x+1+\tfrac{3}{x+3}$"
>}}

{{< fillin
  question="Find the quotient: $\left(x^4-11x^2-7x-6\right)\div(x+3)$."
  answer="x^3-3x^2-2x-1-\frac{3}{x+3}"
  answerDisplay="$x^3-3x^2-2x-1-\tfrac{3}{x+3}$"
>}}

In the next example, we divide by $2a+3$. We must consider the constants as
well as the variables.

**Example.** Find the quotient: $\left(8a^3+27\right)\div(2a+3)$.

Add the two placeholders $0a^2$ and $0a$ before dividing:

$$
\begin{array}{r}
4a^2-6a+9\phantom{{}+27}\phantom{)} \\[3pt]
2a+3\,\overline{\smash{)}\,8a^3+\phantom{1}0a^2+\phantom{1}0a+27}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}8a^3+12a^2\mathrlap{)}}\phantom{{}+\phantom{1}0a+27}\phantom{)} \\[3pt]
-12a^2+\phantom{1}0a\phantom{{}+27}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}{-12a^2-18a}\mathrlap{)}}\phantom{{}+27}\phantom{)} \\[3pt]
18a+27\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}18a+27\mathrlap{)}}\phantom{)} \\[3pt]
0\phantom{)}
\end{array}
$$

To check, multiply $(2a+3)(4a^2-6a+9)$. The product is $8a^3+27$, so the
quotient is $4a^2-6a+9$.

{{< fillin
  question="Find the quotient: $\left(x^3-64\right)\div(x-4)$."
  answer="x^2+4x+16"
  answerDisplay="$x^2+4x+16$"
>}}

{{< fillin
  question="Find the quotient: $\left(125x^3-8\right)\div(5x-2)$."
  answer="25x^2+10x+4"
  answerDisplay="$25x^2+10x+4$"
>}}

## Divide polynomials using synthetic division

Long division can be tedious, so mathematicians use a pattern called
**synthetic division**. It removes repeated variables and numbers from the
long-division work. The first row contains the coefficients of the dividend;
the second row contains the successive products; and the third row contains
the coefficients of the quotient followed by the remainder.

Synthetic division only works when the divisor is of the form $x-c$.

**Example.** Use synthetic division to find the quotient and remainder when
$2x^3+3x^2+x+8$ is divided by $x+2$.

Write the divisor as $x-(-2)$, so $c=-2$. Write the coefficients of the
dividend in the first row. Bring down the first coefficient. Then repeatedly
multiply by $-2$ and add the next column:

$$
\begin{array}{r|rrrr}
-2 & 2 & 3 & 1 & 8 \\
   &   & -4 & 2 & -6 \\
\hline
   & 2 & -1 & 3 & 2
\end{array}
$$

The numbers $2,-1,3$ are the coefficients of the quotient, and the last
number is the remainder. The quotient is $2x^2-x+3$ and the remainder is
$2$.

Check:

$$
\begin{array}{rcl}
\left(2x^2-x+3\right)(x+2)+2 &\overset{?}{=}& 2x^3+3x^2+x+8 \\[4pt]
2x^3-x^2+3x+4x^2-2x+6+2 &=& 2x^3+3x^2+x+8 \\[4pt]
2x^3+3x^2+x+8 &=& 2x^3+3x^2+x+8\ \checkmark
\end{array}
$$

{{< fillin
  question="Use synthetic division to find the quotient when $3x^3+10x^2+6x-2$ is divided by $x+2$."
  answer="3x^2+4x-2"
  answerDisplay="$3x^2+4x-2$"
  hint="Use $c=-2$. The final row is $3,4,-2,2$; the last entry is the remainder."
>}}

{{< fillin
  question="Find the remainder when $3x^3+10x^2+6x-2$ is divided by $x+2$."
  answer="2"
>}}

{{< fillin
  question="Use synthetic division to find the quotient when $4x^3+5x^2-5x+3$ is divided by $x+2$."
  answer="4x^2-3x+1"
  answerDisplay="$4x^2-3x+1$"
  hint="Use $c=-2$. The final row is $4,-3,1,1$; the last entry is the remainder."
>}}

{{< fillin
  question="Find the remainder when $4x^3+5x^2-5x+3$ is divided by $x+2$."
  answer="1"
>}}

In the next example, we do all the steps together.

**Example.** Use synthetic division to find the quotient and remainder when
$x^4-16x^2+3x+12$ is divided by $x+4$.

The polynomial is written in descending degree, but there is no $x^3$ term,
so use $0$ as a placeholder. Since $x+4=x-(-4)$, use $c=-4$:

$$
\begin{array}{r|rrrrr}
-4 & 1 & 0 & -16 & 3 & 12 \\
   &   & -4 & 16 & 0 & -12 \\
\hline
   & 1 & -4 & 0 & 3 & 0
\end{array}
$$

We divided a fourth-degree polynomial by a first-degree polynomial, so the
quotient is third degree. Reading from the last row, the quotient is
$x^3-4x^2+3$, and the remainder is $0$.

{{< fillin
  question="Use synthetic division to find the quotient when $x^4-16x^2+5x+20$ is divided by $x+4$."
  answer="x^3-4x^2+5"
  answerDisplay="$x^3-4x^2+5$"
>}}

{{< fillin
  question="Use synthetic division to find the quotient when $x^4-9x^2+2x+6$ is divided by $x+3$."
  answer="x^3-3x^2+2"
  answerDisplay="$x^3-3x^2+2$"
>}}

## Divide polynomial functions

Just as polynomials can be divided, polynomial functions can also be divided.

{{< callout type="info" >}}
  **Division of polynomial functions.** For functions $f(x)$ and $g(x)$,
  where $g(x)\neq0$,

  $$\left(\frac{f}{g}\right)(x)=\frac{f(x)}{g(x)}.$$
{{< /callout >}}

**Example.** For functions $f(x)=x^2-5x-14$ and $g(x)=x+2$, find
(a) $\left(\tfrac{f}{g}\right)(x)$ and
(b) $\left(\tfrac{f}{g}\right)(-4)$.

For part (a), substitute the function rules and divide the polynomials:

$$
\left(\frac{f}{g}\right)(x)
=\frac{x^2-5x-14}{x+2}
=x-7.
$$

For part (b), substitute $x=-4$ into the quotient found in part (a):

$$
\left(\frac{f}{g}\right)(-4)=-4-7=-11.
$$

{{< fillin
  question="For $f(x)=x^2-5x-24$ and $g(x)=x+3$, find $\left(\tfrac{f}{g}\right)(x)$."
  answer="x-8"
  answerDisplay="$x-8$"
>}}

{{< fillin
  question="For $f(x)=x^2-5x-24$ and $g(x)=x+3$, find $\left(\tfrac{f}{g}\right)(-3)$."
  answer="-11"
>}}

{{< fillin
  question="For $f(x)=x^2-5x-36$ and $g(x)=x+4$, find $\left(\tfrac{f}{g}\right)(x)$."
  answer="x-9"
  answerDisplay="$x-9$"
>}}

{{< multiplechoice
  question="For $f(x)=x^2-5x-36$ and $g(x)=x+4$, what is $\left(\tfrac{f}{g}\right)(-5)$?"
  answer="$-14$"
>}}
$-14$
undefined
$-4$
{{< /multiplechoice >}}

## Use the Remainder and Factor Theorems

Look at division problems that end with a remainder. When the divisor is
written as $x-c$, the value $f(c)$ is the same as the remainder from the
division.

To see this generally, a division problem can be checked by multiplying the
quotient $q(x)$ by the divisor $x-c$ and adding the remainder $r$:

$$
f(x)=q(x)(x-c)+r.
$$

Evaluating at $c$ gives

$$
f(c)=q(c)(c-c)+r=q(c)(0)+r=r.
$$

{{< callout type="info" >}}
  **Remainder Theorem.** If the polynomial function $f(x)$ is divided by
  $x-c$, then the remainder is $f(c)$.
{{< /callout >}}

**Example.** Use the Remainder Theorem to find the remainder when
$f(x)=x^3+3x+19$ is divided by $x+2$.

Write $x+2$ as $x-(-2)$, so $c=-2$. Evaluate $f(-2)$:

$$
\begin{array}{rcl}
f(-2) &=& (-2)^3+3(-2)+19 \\[4pt]
&=& -8-6+19 \\[4pt]
&=& 5.
\end{array}
$$

The remainder is $5$.

{{< fillin
  question="Use the Remainder Theorem to find the remainder when $f(x)=x^3+4x+15$ is divided by $x+2$."
  answer="-1"
>}}

{{< fillin
  question="Use the Remainder Theorem to find the remainder when $f(x)=x^3-7x+12$ is divided by $x+3$."
  answer="6"
>}}

When we divided $8a^3+27$ by $2a+3$, the quotient was $4a^2-6a+9$ and the
remainder was zero. Thus

$$
\left(4a^2-6a+9\right)(2a+3)=8a^3+27,
$$

so both $4a^2-6a+9$ and $2a+3$ are factors of $8a^3+27$.

{{< callout type="info" >}}
  **Factor Theorem.** For any polynomial function $f(x)$:

  - If $x-c$ is a factor of $f(x)$, then $f(c)=0$.
  - If $f(c)=0$, then $x-c$ is a factor of $f(x)$.
{{< /callout >}}

**Example.** Use the Factor Theorem to determine if $x-4$ is a factor of
$f(x)=x^3-64$.

The Factor Theorem tells us that $x-4$ is a factor if $f(4)=0$:

$$
f(4)=4^3-64=64-64=0.
$$

Since $f(4)=0$, $x-4$ is a factor of $f(x)=x^3-64$.

{{< multiplechoice
  question="Use the Factor Theorem to determine whether $x-5$ is a factor of $f(x)=x^3-125$."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Use the Factor Theorem to determine whether $x-6$ is a factor of $f(x)=x^3-216$."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

## Key terms

**division of a polynomial by a monomial** — dividing each term of the
polynomial by the monomial. **polynomial long division** — a procedure for
dividing a polynomial by a binomial: divide, multiply, subtract, and bring
down, repeating until the remainder has lower degree than the divisor.
**placeholder** — a term with zero coefficient inserted for a missing degree.
**synthetic division** — a shortened form of polynomial division using only
coefficients, for a divisor of the form $x-c$. **Remainder Theorem** — when
$f(x)$ is divided by $x-c$, the remainder is $f(c)$. **Factor Theorem** —
$x-c$ is a factor of $f(x)$ exactly when $f(c)=0$.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 5.4: Dividing Polynomials](https://openstax.org/books/intermediate-algebra-2e/pages/5-4-dividing-polynomials) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: condensed the multi-row worked-example step tables into prose and typeset math, recreated the numeric and polynomial long divisions and synthetic-division layouts as math arrays, omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises, and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
