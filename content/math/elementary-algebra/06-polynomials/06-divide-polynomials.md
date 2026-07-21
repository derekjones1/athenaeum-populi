---
title: Divide Polynomials
description: >-
  Dividing a polynomial by a monomial term by term, and dividing a polynomial
  by a binomial with polynomial long division — including the "change the
  signs and add" technique, remainders written as fractions, and placeholders
  for missing degrees — adapted from OpenStax Elementary Algebra 2e, Section
  6.6.
source_section: "6.6"
weight: 6
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** divide a polynomial by
  a monomial, and divide a polynomial by a binomial.
{{< /callout >}}

## Divide a Polynomial by a Monomial

In the last section you learned how to divide a monomial by a monomial. As
you continue to build up your knowledge of polynomials, the next procedure is
to divide a polynomial of two or more terms by a monomial.

The method we'll use to divide a polynomial by a monomial is based on the
properties of fraction addition. So we'll start by reviewing fraction
addition. The sum $\tfrac{y}{5} + \tfrac{2}{5}$ simplifies to
$\tfrac{y+2}{5}$. Now we will do this in reverse to split a single fraction
into separate fractions.

We'll state the fraction addition property here just as you learned it, and
in reverse.

{{< callout type="info" >}}
  **Fraction addition.** If $a$, $b$, and $c$ are numbers where $c \neq 0$,
  then

  $$\frac{a}{c} + \frac{b}{c} = \frac{a+b}{c} \qquad\text{and}\qquad \frac{a+b}{c} = \frac{a}{c} + \frac{b}{c}.$$
{{< /callout >}}

We use the form on the left to add fractions, and we use the form on the
right to divide a polynomial by a monomial. For example, $\tfrac{y+2}{5}$ can
be written $\tfrac{y}{5} + \tfrac{2}{5}$. We use this form of fraction
addition to divide polynomials by monomials.

{{< callout type="info" >}}
  **Division of a polynomial by a monomial.** To divide a polynomial by a
  monomial, divide each term of the polynomial by the monomial.
{{< /callout >}}

**Example.** Find the quotient: $\tfrac{7y^{2}+21}{7}$.

Divide each term of the numerator by the denominator, then simplify each
fraction:

$$
\frac{7y^{2}+21}{7} = \frac{7y^{2}}{7} + \frac{21}{7} = y^{2} + 3
$$

{{< fillin
  question="Find the quotient: $\tfrac{8z^2 + 24}{4}$."
  answer="2z^2 + 6"
  hint="Divide each term of the numerator by 4: $8z^2/4$ and $\tfrac{24}{4}$."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{18z^2 - 27}{9}$."
  answer="2z^2 - 3"
  hint="Divide each term of the numerator by 9: $18z^2/9$ and $\tfrac{27}{9}$."
>}}

Remember that division can be represented as a fraction. When you are asked
to divide a polynomial by a monomial and it is not already in fraction form,
write a fraction with the polynomial in the numerator and the monomial in the
denominator.

**Example.** Find the quotient: $\left(18x^{3} - 36x^{2}\right) \div 6x$.

Rewrite as a fraction, divide each term of the numerator by the denominator,
and simplify:

$$
\frac{18x^{3} - 36x^{2}}{6x} = \frac{18x^{3}}{6x} - \frac{36x^{2}}{6x} = 3x^{2} - 6x
$$

{{< fillin
  question="Find the quotient: $\tfrac{27b^3 - 33b^2}{3b}$."
  answer="9b^2 - 11b"
  hint="Rewrite as a fraction over 3b, then divide each term: $27b^3/(3b)$ and $33b^2/(3b)$."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{25y^3 - 55y^2}{5y}$."
  answer="5y^2 - 11y"
  hint="Rewrite as a fraction over 5y, then divide each term: $25y^3/(5y)$ and $55y^2/(5y)$."
>}}

When we divide by a negative, we must be extra careful with the signs.

**Example.** Find the quotient: $\tfrac{12d^{2}-16d}{-4}$.

Divide each term of the numerator by the denominator, then simplify.
Remember, subtracting a negative is like adding a positive:

$$
\frac{12d^{2}-16d}{-4} = \frac{12d^{2}}{-4} - \frac{16d}{-4} = -3d^{2} + 4d
$$

{{< fillin
  question="Find the quotient: $\tfrac{25y^2 - 15y}{-5}$."
  answer="-5y^2 + 3y"
  hint="Divide each term by -5. Watch the signs: subtracting a negative becomes adding a positive."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{42b^2 - 18b}{-6}$."
  answer="-7b^2 + 3b"
  hint="Divide each term by -6, keeping careful track of the signs."
>}}

**Example.** Find the quotient: $\tfrac{105y^{5}+75y^{3}}{5y^{2}}$.

Separate the terms, then simplify each one:

$$
\frac{105y^{5}+75y^{3}}{5y^{2}} = \frac{105y^{5}}{5y^{2}} + \frac{75y^{3}}{5y^{2}} = 21y^{3} + 15y
$$

{{< fillin
  question="Find the quotient: $\tfrac{60d^7 + 24d^5}{4d^3}$."
  answer="15d^4 + 6d^2"
  hint="Divide each term by $4d^3$, subtracting exponents on the d factors."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{216p^7 - 48p^5}{6p^3}$."
  answer="36p^4 - 8p^2"
  hint="Divide each term by $6p^3$, subtracting exponents on the p factors."
>}}

**Example.** Find the quotient:
$\left(15x^{3}y - 35xy^{2}\right) \div (-5xy)$.

Rewrite as a fraction, separate the terms, and simplify:

$$
\frac{15x^{3}y - 35xy^{2}}{-5xy} = \frac{15x^{3}y}{-5xy} - \frac{35xy^{2}}{-5xy} = -3x^{2} + 7y
$$

{{< fillin
  question="Find the quotient: $\tfrac{32a^2 b - 16ab^2}{-8ab}$."
  answer="-4a + 2b"
  hint="Rewrite over $-8ab$, then divide each term. Watch the signs on the negative denominator."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{-48a^8 b^4 - 36a^6 b^5}{-6a^3 b^3}$."
  answer="8a^5 b + 6a^3 b^2"
  hint="Divide each term by $-6a^3 b^3$, subtracting exponents on a and b. A negative divided by a negative is positive."
>}}

**Example.** Find the quotient:
$\tfrac{36x^{3}y^{2}+27x^{2}y^{2}-9x^{2}y^{3}}{9x^{2}y}$.

Separate the terms, then simplify each one:

$$
\frac{36x^{3}y^{2}+27x^{2}y^{2}-9x^{2}y^{3}}{9x^{2}y} = \frac{36x^{3}y^{2}}{9x^{2}y} + \frac{27x^{2}y^{2}}{9x^{2}y} - \frac{9x^{2}y^{3}}{9x^{2}y} = 4xy + 3y - y^{2}
$$

{{< fillin
  question="Find the quotient: $\tfrac{40x^3 y^2 + 24x^2 y^2 - 16x^2 y^3}{8x^2 y}$."
  answer="5xy + 3y - 2y^2"
  hint="Divide each of the three terms by $8x^2 y$, subtracting exponents on x and y."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{35a^4 b^2 + 14a^4 b^3 - 42a^2 b^4}{7a^2 b^2}$."
  answer="5a^2 + 2a^2 b - 6b^2"
  hint="Divide each of the three terms by $7a^2 b^2$, subtracting exponents on a and b."
>}}

**Example.** Find the quotient: $\tfrac{10x^{2}+5x-20}{5x}$.

Separate the terms, then simplify. Notice that the last term does not divide
evenly, so it stays as a fraction:

$$
\frac{10x^{2}+5x-20}{5x} = \frac{10x^{2}}{5x} + \frac{5x}{5x} - \frac{20}{5x} = 2x + 1 - \frac{4}{x}
$$

{{< fillin
  question="Find the quotient: $\tfrac{18c^2 + 6c - 9}{6c}$."
  answer="3c + 1 - \frac{3}{2c}"
  hint="Divide each term by 6c. The last term, $\tfrac{9}{6c}$, reduces to $\tfrac{3}{2c}$ and stays as a fraction."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{10d^2 - 5d - 2}{5d}$."
  answer="2d - 1 - \frac{2}{5d}"
  hint="Divide each term by 5d. The last term, $\tfrac{2}{5d}$, does not divide evenly, so it stays as a fraction."
>}}

## Divide a Polynomial by a Binomial

To divide a polynomial by a binomial, we follow a procedure very similar to
long division of numbers. So let's look carefully at the steps we take when
we divide a 3-digit number, $875$, by a 2-digit number, $25$.

We write the long division, divide the first two digits ($87$) by $25$ to get
$3$, multiply $3$ times $25$ and write the product under the $87$, then
subtract. We bring down the next digit and repeat the process. The completed
long division looks like this:

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
division correctly, the product should equal the dividend: $35 \cdot 25 = 875$
✓.

Now we will divide a trinomial by a binomial. As you read through the
example, notice how similar the steps are to the numerical example above.

**Example.** Find the quotient: $\left(x^{2} + 9x + 20\right) \div (x+5)$.

Write it as a long division problem, being sure the dividend is in standard
form. Divide the first term of the dividend, $x^{2}$, by the first term of
the divisor, $x$, to get $x$; place it in the quotient over the $x$ term.
Multiply $x$ times $x+5$ to get $x^{2}+5x$, line it up under the dividend, and
subtract (it may be easier to change the signs and add). Then bring down the
last term, $20$:

$$
\begin{array}{r}
x\phantom{{}+20}\phantom{)} \\[2pt]
x+5\,\overline{\smash{)}\,x^{2}+9x+20}\phantom{)} \\[2pt]
\underline{-\,(x^{2}+5x)}\phantom{{}+20} \\[2pt]
4x+20\phantom{)}
\end{array}
$$

Now divide the first term of the remainder, $4x$, by $x$ to get $4$; place it
in the quotient over the constant term. Multiply $4$ times $x+5$ to get
$4x+20$, and subtract:

$$
\begin{array}{r}
x+4\phantom{0}\phantom{)} \\[2pt]
x+5\,\overline{\smash{)}\,x^{2}+9x+20}\phantom{)} \\[2pt]
\underline{-\,(x^{2}+5x)}\phantom{{}+20} \\[2pt]
4x+20\phantom{)} \\[2pt]
\underline{-\,(4x+20)} \\[2pt]
0\phantom{)}
\end{array}
$$

To check, multiply the quotient by the divisor: $(x+4)(x+5)$. You should get
the dividend, $x^{2}+9x+20$ ✓. So the quotient is $x+4$.

{{< fillin
  question="Find the quotient: $\tfrac{y^2 + 10y + 21}{y + 3}$."
  answer="y + 7"
  hint="Divide $y^2$ by y to get y. After subtracting and bringing down, divide 7y by y to get 7."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{m^2 + 9m + 20}{m + 4}$."
  answer="m + 5"
  hint="Divide $m^2$ by m to get m. After subtracting and bringing down, divide 5m by m to get 5."
>}}

When the divisor has a subtraction sign, we must be extra careful when we
multiply the partial quotient and then subtract. It may be safer to show that
we change the signs and then add.

**Example.** Find the quotient: $\left(2x^{2} - 5x - 3\right) \div (x-3)$.

Divide $2x^{2}$ by $x$ to get $2x$; place it in the quotient over the $x$
term. Multiply $2x$ times $x-3$ to get $2x^{2}-6x$. Subtract by changing the
signs and adding, then bring down the last term:

$$
\begin{array}{r}
2x\phantom{{}-3} \\[2pt]
x-3\,\overline{\smash{)}\,2x^{2}-5x-3} \\[2pt]
\underline{-2x^{2}+6x}\phantom{{}-3} \\[2pt]
x-3
\end{array}
$$

Now divide $x$ by $x$ to get $1$; place it in the quotient over the constant
term. Multiply $1$ times $x-3$ to get $x-3$, and subtract by changing the
signs and adding:

$$
\begin{array}{r}
2x+1 \\[2pt]
x-3\,\overline{\smash{)}\,2x^{2}-5x-3} \\[2pt]
\underline{-2x^{2}+6x}\phantom{{}-3} \\[2pt]
x-3 \\[2pt]
\underline{-x+3} \\[2pt]
0
\end{array}
$$

To check, multiply $(x-3)(2x+1)$. The result should be $2x^{2}-5x-3$. So the
quotient is $2x+1$.

{{< fillin
  question="Find the quotient: $\tfrac{2x^2 - 3x - 20}{x - 4}$."
  answer="2x + 5"
  hint="Divide $2x^2$ by x to get 2x. Multiply, change the signs and add, bring down, then divide again."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{3x^2 - 16x - 12}{x - 6}$."
  answer="3x + 2"
  hint="Divide $3x^2$ by x to get 3x. Multiply, change the signs and add, bring down, then divide again."
>}}

When we divided $875$ by $25$, there was no remainder. But sometimes division
of numbers does leave a remainder, and the same is true when we divide
polynomials. We write the remainder as a fraction with the divisor as the
denominator.

**Example.** Find the quotient: $\left(x^{3} - x^{2} + x + 4\right) \div (x+1)$.

Divide $x^{3}$ by $x$ to get $x^{2}$; multiply $x^{2}$ times $x+1$ and
subtract. Bring down the next term, divide again to get $-2x$, and continue.
Finally, dividing $3x$ by $x$ gives $3$; multiplying $3$ times $x+1$ gives
$3x+3$, and subtracting leaves a remainder of $1$:

$$
\begin{array}{r}
x^{2}-2x+3\phantom{{}+4}\phantom{)} \\[3pt]
x+1\,\overline{\smash{)}\,x^{3}-x^{2}+x+4}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}x^{3}+x^{2}\mathrlap{)}}\phantom{{}+x+4}\phantom{)} \\[3pt]
-2x^{2}+\phantom{2}x\phantom{{}+4}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}{-2x^{2}-2x}\mathrlap{)}}\phantom{{}+4}\phantom{)} \\[3pt]
3x+4\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}3x+3\mathrlap{)}}\phantom{)} \\[3pt]
1\phantom{)}
\end{array}
$$

We write the remainder as a fraction with the divisor as the denominator, so
the quotient is:

$$
x^{2}-2x+3+\frac{1}{x+1}
$$

To check, multiply $(x+1)\left(x^{2}-2x+3+\tfrac{1}{x+1}\right)$. The result
should be $x^{3}-x^{2}+x+4$.

{{< fillin
  question="Find the quotient: $\tfrac{x^3 + 5x^2 + 8x + 6}{x + 2}$."
  answer="x^2 + 3x + 2 + \frac{2}{x+2}"
  hint="Long-divide; the division leaves a remainder of 2, written as $\tfrac{2}{x+2}$."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{2x^3 + 8x^2 + x - 8}{x + 1}$."
  answer="2x^2 + 6x - 5 - \frac{3}{x+1}"
  hint="Long-divide; the division leaves a remainder of -3, written as $-\tfrac{3}{x+1}$."
>}}

Look back at the dividends in the last three examples. The terms were written
in descending order of degrees, and there were no missing degrees. When a
dividend is missing a degree, we add that term in with a zero coefficient as
a **placeholder** so the columns line up during long division.

**Example.** Find the quotient: $\left(x^{4} - x^{2} + 5x - 2\right) \div (x+2)$.

Notice that there is no $x^{3}$ term in the dividend. We will add $0x^{3}$ as
a placeholder. Then long-divide as usual, changing signs and adding at each
subtraction step:

$$
\begin{array}{r}
x^{3}-2x^{2}+3x-1\phantom{{}-2}\phantom{)} \\[3pt]
x+2\,\overline{\smash{)}\,x^{4}+0x^{3}-x^{2}+5x-2}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}x^{4}+2x^{3}\mathrlap{)}}\phantom{{}-x^{2}+5x-2}\phantom{)} \\[3pt]
-2x^{3}-\phantom{4}x^{2}\phantom{{}+5x-2}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}{-2x^{3}-4x^{2}}\mathrlap{)}}\phantom{{}+5x-2}\phantom{)} \\[3pt]
3x^{2}+5x\phantom{{}-2}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}3x^{2}+6x\mathrlap{)}}\phantom{{}-2}\phantom{)} \\[3pt]
-x-2\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}{-x-2}\mathrlap{)}}\phantom{)} \\[3pt]
0\phantom{)}
\end{array}
$$

To check, multiply $(x+2)\left(x^{3}-2x^{2}+3x-1\right)$. The result should be
$x^{4}-x^{2}+5x-2$. So the quotient is $x^{3}-2x^{2}+3x-1$.

{{< fillin
  question="Find the quotient: $\tfrac{x^3 + 3x + 14}{x + 2}$."
  answer="x^2 - 2x + 7"
  hint="The dividend is missing an $x^2$ term, so insert $0x^2$ as a placeholder before long-dividing."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{x^4 - 3x^3 - 1000}{x + 5}$."
  answer="x^3 - 8x^2 + 40x - 200"
  hint="The dividend is missing $x^2$ and x terms, so insert $0x^2$ and 0x as placeholders before long-dividing."
>}}

In the next example we will divide by $2a-3$. As we divide, we will have to
consider the constants as well as the variables.

**Example.** Find the quotient: $\left(8a^{3} + 27\right) \div (2a+3)$.

This time we will show the division all in one step. We need to add two
placeholders, $0a^{2}$ and $0a$, in order to divide:

$$
\begin{array}{r}
4a^{2}-6a+9\phantom{{}+27}\phantom{)} \\[3pt]
2a+3\,\overline{\smash{)}\,8a^{3}+0a^{2}+0a+27}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}8a^{3}+12a^{2}\mathrlap{)}}\phantom{{}+0a+27}\phantom{)} \\[3pt]
-12a^{2}+\phantom{1}0a\phantom{{}+27}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}{-12a^{2}-18a}\mathrlap{)}}\phantom{{}+27}\phantom{)} \\[3pt]
18a+27\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}18a+27\mathrlap{)}}\phantom{)} \\[3pt]
0\phantom{)}
\end{array}
$$

To check, multiply $(2a+3)\left(4a^{2}-6a+9\right)$. The result should be
$8a^{3}+27$. So the quotient is $4a^{2}-6a+9$.

{{< fillin
  question="Find the quotient: $\tfrac{x^3 - 64}{x - 4}$."
  answer="x^2 + 4x + 16"
  hint="Insert $0x^2$ and 0x as placeholders, then long-divide by $x - 4$."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{125x^3 - 8}{5x - 2}$."
  answer="25x^2 + 10x + 4"
  hint="Insert $0x^2$ and 0x as placeholders, then long-divide by $5x - 2$, tracking both constants and variables."
>}}

## Key terms

**divide a polynomial by a monomial** — divide each term of the polynomial by
the monomial, using the property $\tfrac{a+b}{c} = \tfrac{a}{c} +
\tfrac{b}{c}$. **polynomial long division** — a procedure, modeled on long
division of numbers, for dividing a polynomial by a binomial: divide, multiply,
subtract (or change the signs and add), and bring down, repeating until the
remainder has lower degree than the divisor. **placeholder** — a term with a
zero coefficient (such as $0x^{3}$) inserted for a missing degree so the
columns line up during long division. **remainder** — the leftover after long
division, written as a fraction with the divisor as the denominator.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 6.6: Divide Polynomials](https://openstax.org/books/elementary-algebra-2e/pages/6-6-divide-polynomials) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: condensed the multi-row worked-example step tables into prose with a single typeset result, and recreated the numeric and polynomial long divisions as typeset math arrays; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
