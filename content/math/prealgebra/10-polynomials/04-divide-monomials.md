---
title: Divide Monomials
description: >-
  Simplifying expressions with the Quotient Property of Exponents, zero
  exponents, and the Quotient to a Power Property, then combining several
  exponent properties at once to divide monomials — adapted from OpenStax
  Prealgebra 2e, Section 10.4.
source_section: "10.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** simplify expressions
  using the Quotient Property of Exponents, simplify expressions with zero
  exponents, simplify expressions using the Quotient to a Power Property,
  simplify expressions by applying several properties, and divide monomials.
{{< /callout >}}

## Simplify expressions using the Quotient Property of Exponents

Earlier in this chapter, we developed the properties of exponents for
multiplication. We summarize them here.

{{< callout type="info" >}}
  **Summary of exponent properties for multiplication.** If $a, b$ are real
  numbers and $m, n$ are whole numbers, then

  $$
  \begin{array}{ll}
  \text{Product Property} & a^m \cdot a^n = a^{m+n} \\[4pt]
  \text{Power Property} & (a^m)^n = a^{m \cdot n} \\[4pt]
  \text{Product to a Power} & (ab)^m = a^m b^m
  \end{array}
  $$
{{< /callout >}}

Now we will look at the exponent properties for division. A quick memory
refresher may help before we get started. You have already learned that
fractions may be simplified by dividing out common factors from the
numerator and denominator using the Equivalent Fractions Property. This
property will also help us work with algebraic fractions — which are also
quotients.

{{< callout type="info" >}}
  **Equivalent Fractions Property.** If $a, b, c$ are whole numbers where
  $b \neq 0, c \neq 0$, then

  $$\frac{a}{b} = \frac{a \cdot c}{b \cdot c} \qquad \text{and} \qquad \frac{a \cdot c}{b \cdot c} = \frac{a}{b}$$
{{< /callout >}}

As before, we'll try to discover a property by looking at some examples.
Consider $\tfrac{x^5}{x^2}$ and $\tfrac{x^2}{x^3}$. Writing out the factors:

$$\frac{x^5}{x^2} = \frac{x \cdot x \cdot x \cdot x \cdot x}{x \cdot x} = \frac{x \cdot x \cdot x}{1} = x^3 \qquad\qquad \frac{x^2}{x^3} = \frac{x \cdot x}{x \cdot x \cdot x} = \frac{1}{x}$$

Notice that in each case the bases were the same and we subtracted the
exponents.

- When the larger exponent was in the numerator, we were left with factors
  in the numerator and $1$ in the denominator, which we simplified.
- When the larger exponent was in the denominator, we were left with
  factors in the denominator, and $1$ in the numerator, which could not be
  simplified.

So we write $\tfrac{x^5}{x^2} = x^{5-2} = x^3$ and
$\tfrac{x^2}{x^3} = \tfrac{1}{x^{3-2}} = \tfrac{1}{x}$.

{{< callout type="info" >}}
  **Quotient Property of Exponents.** If $a$ is a real number, $a \neq 0$,
  and $m, n$ are whole numbers, then

  $$\frac{a^m}{a^n} = a^{m-n}, \quad m > n \qquad\qquad \text{and} \qquad\qquad \frac{a^m}{a^n} = \frac{1}{a^{n-m}}, \quad n > m$$
{{< /callout >}}

A couple of examples with numbers may help to verify this property. Since
$3^4 / 3^2 \stackrel{?}{=} 3^{4-2}$, checking: $81/9 \stackrel{?}{=} 3^2$,
and indeed $9 = 9$. Since $5^2 / 5^3 \stackrel{?}{=} 1/5^{3-2}$, checking:
$25/125 \stackrel{?}{=} 1/5$, and indeed $\tfrac{1}{5} = \tfrac{1}{5}$. When
we work with numbers and the exponent is less than or equal to $3$, we will
apply the exponent. When the exponent is greater than $3$, we leave the
answer in exponential form.

**Example.** Simplify: (a) $\tfrac{x^{10}}{x^8}$ (b) $\tfrac{2^9}{2^2}$.

To simplify an expression with a quotient, we first compare the exponents
in the numerator and denominator.

(a) Since $10 > 8$, there are more factors of $x$ in the numerator, so we
use the quotient property with $m > n$: $\tfrac{x^{10}}{x^8} = x^{10-8} = x^2$.

(b) Since $9 > 2$, there are more factors of $2$ in the numerator, so we
use the quotient property with $m > n$: $\tfrac{2^9}{2^2} = 2^{9-2} = 2^7$.
Notice that when the larger exponent is in the numerator, we are left with
factors in the numerator.

{{< fillin
  question="Simplify: $\tfrac{x^{12}}{x^9}$"
  answer="x^3"
  hint="Since the numerator's exponent is larger, subtract the denominator's exponent from the numerator's exponent."
>}}

{{< fillin
  question="Simplify: $\tfrac{7^{14}}{7^5}$"
  answer="7^9"
  hint="Since the numerator's exponent is larger, subtract the exponents and leave the answer in exponential form."
>}}

**Example.** Simplify: (a) $\tfrac{b^{10}}{b^{15}}$ (b) $\tfrac{3^3}{3^5}$.

(a) Since $15 > 10$, there are more factors of $b$ in the denominator, so we
use the quotient property with $n > m$:
$\tfrac{b^{10}}{b^{15}} = \tfrac{1}{b^{15-10}} = \tfrac{1}{b^5}$.

(b) Since $5 > 3$, there are more factors of $3$ in the denominator:
$\tfrac{3^3}{3^5} = \tfrac{1}{3^{5-3}} = \tfrac{1}{3^2} = \tfrac{1}{9}$.
Notice that when the larger exponent is in the denominator, we are left
with factors in the denominator and $1$ in the numerator.

{{< fillin
  question="Simplify: $\tfrac{x^8}{x^{15}}$"
  answer="\frac{1}{x^7}"
  answerDisplay="$\tfrac{1}{x^7}$"
  hint="The denominator's exponent is larger, so the result has a $1$ in the numerator and $x$ raised to the difference of exponents in the denominator."
>}}

{{< fillin
  question="Simplify: $\tfrac{12^{11}}{12^{21}}$"
  answer="\frac{1}{12^{10}}"
  answerDisplay="$\tfrac{1}{12^{10}}$"
  hint="The denominator's exponent is larger, so subtract exponents and put the result in the denominator, under a $1$."
>}}

**Example.** Simplify: (a) $\tfrac{a^5}{a^9}$ (b) $\tfrac{x^{11}}{x^7}$.

(a) Since $9 > 5$, there are more $a$'s in the denominator, so we end up
with factors in the denominator:
$\tfrac{a^5}{a^9} = \tfrac{1}{a^{9-5}} = \tfrac{1}{a^4}$.

(b) Since $11 > 7$, there are more factors of $x$ in the numerator:
$\tfrac{x^{11}}{x^7} = x^{11-7} = x^4$.

{{< fillin
  question="Simplify: $\tfrac{b^{19}}{b^{11}}$"
  answer="b^8"
  hint="Compare the exponents — the larger one is in the numerator here."
>}}

{{< fillin
  question="Simplify: $\tfrac{m^9}{m^{17}}$"
  answer="\frac{1}{m^8}"
  answerDisplay="$\tfrac{1}{m^8}$"
  hint="Compare the exponents — the larger one is in the denominator here."
>}}

## Simplify expressions with zero exponents

A special case of the Quotient Property is when the exponents of the
numerator and denominator are equal, such as an expression like
$\tfrac{a^m}{a^m}$. From earlier work with fractions, we know that
$\tfrac{2}{2} = 1$, $\tfrac{17}{17} = 1$, and $\tfrac{-43}{-43} = 1$. In
words, a number divided by itself is $1$. So $\tfrac{x}{x} = 1$, for any
$x$ ($x \neq 0$), since any number divided by itself is $1$.

The Quotient Property of Exponents shows us how to simplify
$\tfrac{a^m}{a^n}$ when $m > n$ and when $n < m$. What if $m = n$?

Now we will simplify $\tfrac{a^m}{a^m}$ in two ways to lead us to the
definition of the **zero exponent**. Consider first $\tfrac{8}{8}$, which we
know is $1$. Writing $8$ as $2^3$: $\tfrac{2^3}{2^3} = 1$. Subtracting
exponents: $2^{3-3} = 1$. Simplifying: $2^0 = 1$.

In general, for $a \neq 0$, the pattern
$\tfrac{a^m}{a^m} = a^{m-m} = a^0$ counts $m$ matching factors of $a$ in
the numerator against $m$ matching factors of $a$ in the denominator,
which cancel completely to $1$. We see $\tfrac{a^m}{a^m}$ simplifies to
both $a^0$ and to $1$. So $a^0 = 1$.

{{< callout type="info" >}}
  **Zero Exponent.** If $a$ is a non-zero number, then $a^0 = 1$. Any
  nonzero number raised to the zero power is $1$.
{{< /callout >}}

In this text, we assume any variable that we raise to the zero power is
not zero.

**Example.** Simplify: (a) $12^0$ (b) $y^0$.

The definition says any non-zero number raised to the zero power is $1$.
So $12^0 = 1$ and $y^0 = 1$.

{{< fillin
  question="Simplify: $17^0$"
  answer="1"
  hint="Any nonzero number raised to the zero power is $1$."
>}}

{{< fillin
  question="Simplify: $k^0$"
  answer="1"
  hint="Any nonzero number (or variable) raised to the zero power is $1$."
>}}

Now that we have defined the zero exponent, we can expand all the
Properties of Exponents to include whole number exponents.

What about raising an expression to the zero power? Let's look at
$(2x)^0$. We can use the Product to a Power Rule to rewrite this
expression: using the rule, $(2x)^0 = 2^0 x^0$; using the Zero Exponent
Property, $2^0 x^0 = 1 \cdot 1$; simplifying, this is $1$. This tells us
that any non-zero expression raised to the zero power is one.

**Example.** Simplify: $(7z)^0$.

Using the definition of the zero exponent, $(7z)^0 = 1$.

{{< fillin
  question="Simplify: $(-4y)^0$"
  answer="1"
  hint="The whole expression in parentheses is raised to the zero power."
>}}

{{< fillin
  question="Simplify: $\left(\tfrac{2}{3} \cdot x\right)^0$"
  answer="1"
  hint="The whole expression in parentheses is raised to the zero power, and it is not zero."
>}}

**Example.** Simplify: (a) $(-3x^2y)^0$ (b) $-3x^2y^0$.

(a) Here the entire product is raised to the zero power, so
$(-3x^2y)^0 = 1$.

(b) Here, notice that only the variable $y$ is being raised to the zero
power — the exponent applies only to $y$, not to the whole expression.
Using the definition of the zero exponent on just that factor:
$-3x^2 y^0 = -3x^2 \cdot 1 = -3x^2$.

{{< fillin
  question="Simplify: $(7x^2 y)^0$"
  answer="1"
  hint="Parentheses group the whole expression under the zero exponent."
>}}

{{< fillin
  question="Simplify: $7x^2 y^0$"
  answer="7x^2"
  answerDisplay="$7x^2$"
  hint="Only the $y$ is raised to the zero power here, since there are no parentheses grouping the rest with it."
>}}

## Simplify expressions using the Quotient to a Power Property

Now we will look at an example that will lead us to the Quotient to a
Power Property. Consider $\left(\tfrac{x}{y}\right)^3$. This means
$\tfrac{x}{y} \cdot \tfrac{x}{y} \cdot \tfrac{x}{y}$. Multiplying the
fractions gives $\tfrac{x \cdot x \cdot x}{y \cdot y \cdot y}$, which
written with exponents is $\tfrac{x^3}{y^3}$.

Notice that the exponent applies to both the numerator and the
denominator. We see that $\left(\tfrac{x}{y}\right)^3$ is $\tfrac{x^3}{y^3}$.
This leads to the Quotient to a Power Property for Exponents.

{{< callout type="info" >}}
  **Quotient to a Power Property of Exponents.** If $a$ and $b$ are real
  numbers, $b \neq 0$, and $m$ is a counting number, then

  $$\left(\frac{a}{b}\right)^m = \frac{a^m}{b^m}$$

  To raise a fraction to a power, raise the numerator and denominator to
  that power.
{{< /callout >}}

An example with numbers may help you understand this property:
$\left(\tfrac{2}{3}\right)^3 \stackrel{?}{=} \tfrac{2^3}{3^3}$. Checking
directly, $\tfrac{2}{3} \cdot \tfrac{2}{3} \cdot \tfrac{2}{3} \stackrel{?}{=} \tfrac{8}{27}$,
and indeed $\tfrac{8}{27} = \tfrac{8}{27}$.

**Example.** Simplify: (a) $\left(\tfrac{5}{8}\right)^2$ (b)
$\left(\tfrac{x}{3}\right)^4$ (c) $\left(\tfrac{y}{m}\right)^3$.

(a) Using the Quotient to a Power Property,
$\left(\tfrac{5}{8}\right)^2 = \tfrac{5^2}{8^2} = \tfrac{25}{64}$.

(b) Using the Quotient to a Power Property,
$\left(\tfrac{x}{3}\right)^4 = \tfrac{x^4}{3^4} = \tfrac{x^4}{81}$.

(c) Raising the numerator and denominator to the third power,
$\left(\tfrac{y}{m}\right)^3 = \tfrac{y^3}{m^3}$.

{{< fillin
  question="Simplify: $(7/9)^2$"
  answer="\frac{49}{81}"
  answerDisplay="$\tfrac{49}{81}$"
  hint="Raise both the numerator and the denominator to the power, then simplify each."
>}}

{{< fillin
  question="Simplify: $(y/8)^3$"
  answer="\frac{y^3}{512}"
  answerDisplay="$\tfrac{y^3}{512}$"
  hint="Raise both the numerator and the denominator to the third power."
>}}

{{< fillin
  question="Simplify: $(p/q)^6$"
  answer="\frac{p^6}{q^6}"
  answerDisplay="$\tfrac{p^6}{q^6}$"
  hint="Raise both the numerator and the denominator to the power."
>}}

## Simplify expressions by applying several properties

We'll now summarize all the properties of exponents so they are all
together to refer to as we simplify expressions using several properties.
Notice that they are now defined for whole number exponents.

{{< callout type="info" >}}
  **Summary of exponent properties.** If $a, b$ are real numbers and $m, n$
  are whole numbers, then

  $$
  \begin{array}{ll}
  \text{Product Property} & a^m \cdot a^n = a^{m+n} \\[4pt]
  \text{Power Property} & (a^m)^n = a^{m \cdot n} \\[4pt]
  \text{Product to a Power Property} & (ab)^m = a^m b^m \\[4pt]
  \text{Quotient Property} & \tfrac{a^m}{a^n} = a^{m-n},\ a \neq 0,\ m > n \qquad \tfrac{a^m}{a^n} = \tfrac{1}{a^{n-m}},\ a \neq 0,\ n > m \\[8pt]
  \text{Zero Exponent Definition} & a^0 = 1,\ a \neq 0 \\[4pt]
  \text{Quotient to a Power Property} & \left(\tfrac{a}{b}\right)^m = \tfrac{a^m}{b^m},\ b \neq 0
  \end{array}
  $$
{{< /callout >}}

**Example.** Simplify: $\tfrac{(x^2)^3}{x^5}$.

Multiplying the exponents in the numerator using the Power Property gives
$\tfrac{x^6}{x^5}$. Subtracting the exponents gives $x$.

{{< fillin
  question="Simplify: $\tfrac{(a^4)^5}{a^9}$"
  answer="a^{11}"
  hint="Apply the Power Property in the numerator first, then subtract exponents using the Quotient Property."
>}}

{{< fillin
  question="Simplify: $\tfrac{(b^5)^6}{b^{11}}$"
  answer="b^{19}"
  hint="Apply the Power Property in the numerator first, then subtract exponents using the Quotient Property."
>}}

**Example.** Simplify: $\tfrac{m^8}{(m^2)^4}$.

Multiplying the exponents in the denominator using the Power Property
gives $\tfrac{m^8}{m^8}$. Subtracting the exponents gives $m^0$. Using the
zero power property gives $1$.

{{< fillin
  question="Simplify: $\tfrac{k^{11}}{(k^3)^3}$"
  answer="k^2"
  answerDisplay="$k^2$"
  hint="Apply the Power Property in the denominator first: $(k^3)^3 = k^9$. Then divide $k^{11}$ by $k^9$."
>}}

{{< fillin
  question="Simplify: $\tfrac{d^{23}}{(d^4)^6}$"
  answer="\frac{1}{d}"
  answerDisplay="$\tfrac{1}{d}$"
  hint="Apply the Power Property in the denominator first, then subtract exponents. Simplify all the way."
>}}

**Example.** Simplify: $\left(\tfrac{x^7}{x^3}\right)^2$.

Remember parentheses come before exponents, and the bases are the same so
we can simplify inside the parentheses first — subtracting the exponents
gives $(x^{7-3})^2$. Simplifying gives $(x^4)^2$. Multiplying the exponents
gives $x^8$.

{{< fillin
  question="Simplify: $\left(\tfrac{r^{14}}{r^8}\right)^2$"
  answer="r^{12}"
  hint="Simplify inside the parentheses first (same base, so subtract exponents), then apply the outer power."
>}}

{{< fillin
  question="Simplify: $\left(\tfrac{b^6}{b^{11}}\right)^2$"
  answer="\frac{1}{b^{10}}"
  answerDisplay="$\tfrac{1}{b^{10}}$"
  hint="Simplify inside the parentheses first — the denominator's exponent is larger there — then apply the outer power."
>}}

**Example.** Simplify: $\left(\tfrac{p^2}{q^5}\right)^3$.

Here we cannot simplify inside the parentheses first, since the bases are
not the same. Instead we raise the numerator and denominator to the third
power using the Quotient to a Power Property, giving
$\tfrac{(p^2)^3}{(q^5)^3}$. Using the Power Property gives
$\tfrac{p^6}{q^{15}}$.

{{< fillin
  question="Simplify: $\left(\tfrac{m^3}{n^8}\right)^5$"
  answer="\frac{m^{15}}{n^{40}}"
  answerDisplay="$\tfrac{m^{15}}{n^{40}}$"
  hint="The bases differ, so raise the numerator and denominator to the outer power separately, then apply the Power Property to each."
>}}

{{< fillin
  question="Simplify: $\left(\tfrac{t^{10}}{u^7}\right)^2$"
  answer="\frac{t^{20}}{u^{14}}"
  answerDisplay="$\tfrac{t^{20}}{u^{14}}$"
  hint="The bases differ, so raise the numerator and denominator to the outer power separately, then apply the Power Property to each."
>}}

**Example.** Simplify: $\left(\tfrac{2x^3}{3y}\right)^4$.

Raising the numerator and denominator to the fourth power using the
Quotient to a Power Property gives $\tfrac{(2x^3)^4}{(3y)^4}$. Raising each
factor to the fourth power using the Product to a Power Property gives
$\tfrac{2^4 (x^3)^4}{3^4 y^4}$. Using the Power Property and simplifying
gives $\tfrac{16x^{12}}{81y^4}$.

{{< fillin
  question="Simplify: $\left(\tfrac{5b}{9c^3}\right)^2$"
  answer="\frac{25b^2}{81c^6}"
  answerDisplay="$\tfrac{25b^2}{81c^6}$"
  hint="Raise numerator and denominator to the power, then raise each factor inside them to that same power."
>}}

{{< fillin
  question="Simplify: $\left(\tfrac{4p^4}{7q^5}\right)^3$"
  answer="\frac{64p^{12}}{343q^{15}}"
  answerDisplay="$\tfrac{64p^{12}}{343q^{15}}$"
  hint="Raise numerator and denominator to the power, then raise each factor inside them to that same power."
>}}

**Example.** Simplify: $\tfrac{(y^2)^3 (y^2)^4}{(y^5)^4}$.

Using the Power Property throughout gives
$\tfrac{(y^6)(y^8)}{y^{20}}$. Adding the exponents in the numerator using
the Product Property gives $\tfrac{y^{14}}{y^{20}}$. Using the Quotient
Property gives $\tfrac{1}{y^6}$.

{{< fillin
  question="Simplify: $\tfrac{(y^4)^4 \cdot (y^3)^5}{(y^7)^6}$"
  answer="\frac{1}{y^{11}}"
  answerDisplay="$\tfrac{1}{y^{11}}$"
  hint="Apply the Power Property to each factor first, then combine the numerator with the Product Property, then apply the Quotient Property."
>}}

{{< fillin
  question="Simplify: $\tfrac{(3x^4)^2 \cdot (x^3)^4}{(x^5)^3}$"
  answer="9x^5"
  answerDisplay="$9x^5$"
  hint="Apply the Power Property to each factor (don't forget the constant $3$ squared), combine the numerator, then apply the Quotient Property."
>}}

## Divide monomials

We have now seen all the properties of exponents. We'll use them to divide
monomials. Later, you'll use them to divide polynomials.

**Example.** Find the quotient: $56x^5 \div 7x^2$.

Rewriting as a fraction gives $\tfrac{56x^5}{7x^2}$. Using fraction
multiplication to separate the number part from the variable part gives
$\tfrac{56}{7} \cdot \tfrac{x^5}{x^2}$. Using the Quotient Property gives
$8x^3$.

{{< fillin
  question="Find the quotient: $\tfrac{63x^8}{9x^4}$"
  answer="7x^4"
  answerDisplay="$7x^4$"
  hint="Separate the numeric coefficients from the variable factors, then divide each part on its own."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{96y^{11}}{6y^8}$"
  answer="16y^3"
  answerDisplay="$16y^3$"
  hint="Separate the numeric coefficients from the variable factors, then divide each part on its own."
>}}

**Example.** Find the quotient: $\tfrac{42x^2y^3}{-7xy^5}$.

Using fraction multiplication gives $\tfrac{42}{-7} \cdot \tfrac{x^2}{x} \cdot \tfrac{y^3}{y^5}$.
Simplifying and using the Quotient Property gives
$-6 \cdot x \cdot \tfrac{1}{y^2}$. Multiplying gives $-\tfrac{6x}{y^2}$.

{{< fillin
  question="Find the quotient: $\tfrac{-84x^8 y^3}{7x^{10} y^2}$"
  answer="-\frac{12y}{x^2}"
  answerDisplay="$-\tfrac{12y}{x^2}$"
  hint="Split into a fraction for the coefficients and one fraction for each variable, then simplify each and multiply the results together."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{-72a^4 b^5}{-8a^9 b^5}$"
  answer="\frac{9}{a^5}"
  answerDisplay="$\tfrac{9}{a^5}$"
  hint="Split into a fraction for the coefficients and one fraction for each variable — the $b$'s cancel completely."
>}}

**Example.** Find the quotient: $\tfrac{24a^5b^3}{48ab^4}$.

Using fraction multiplication gives $\tfrac{24}{48} \cdot \tfrac{a^5}{a} \cdot \tfrac{b^3}{b^4}$.
Simplifying and using the Quotient Property gives
$\tfrac{1}{2} \cdot a^4 \cdot \tfrac{1}{b}$. Multiplying gives
$\tfrac{a^4}{2b}$.

{{< fillin
  question="Find the quotient: $\tfrac{16a^7 b^6}{24ab^8}$"
  answer="\frac{2a^6}{3b^2}"
  answerDisplay="$\tfrac{2a^6}{3b^2}$"
  hint="Simplify the coefficient fraction to lowest terms, then handle each variable's quotient separately."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{27p^4 q^7}{-45p^{12} q}$"
  answer="-\frac{3q^6}{5p^8}"
  answerDisplay="$-\tfrac{3q^6}{5p^8}$"
  hint="Simplify the coefficient fraction to lowest terms, then handle each variable's quotient separately — watch the sign."
>}}

Once you become familiar with the process and have practiced it step by
step several times, you may be able to simplify a fraction in one step.

**Example.** Find the quotient: $\tfrac{14x^7y^{12}}{21x^{11}y^6}$.

Simplifying directly and using the Quotient Property gives
$\tfrac{2y^6}{3x^4}$. Be very careful to simplify $\tfrac{14}{21}$ by
dividing out a common factor, and to simplify the variables by subtracting
their exponents.

{{< fillin
  question="Find the quotient: $\tfrac{28x^5 y^{14}}{49x^9 y^{12}}$"
  answer="\frac{4y^2}{7x^4}"
  answerDisplay="$\tfrac{4y^2}{7x^4}$"
  hint="Reduce the coefficient fraction first, then subtract exponents for each variable separately."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{30m^5 n^{11}}{48m^{10} n^{14}}$"
  answer="\frac{5}{8m^5 n^3}"
  answerDisplay="$\tfrac{5}{8m^5 n^3}$"
  hint="Reduce the coefficient fraction first, then subtract exponents for each variable separately."
>}}

In all examples so far, there was no work to do in the numerator or
denominator before simplifying the fraction. In the next example, we'll
first find the product of two monomials in the numerator before we
simplify the fraction.

**Example.** Find the quotient: $\tfrac{(3x^3y^2)(10x^2y^3)}{6x^4y^5}$.

Remember, the fraction bar is a grouping symbol. We will simplify the
numerator first. Simplifying the numerator gives $\tfrac{30x^5y^5}{6x^4y^5}$.
Simplifying, using the Quotient Rule, gives $5x$.

{{< fillin
  question="Find the quotient: $\tfrac{(3x^4 y^5)(8x^2 y^5)}{12x^5 y^8}$"
  answer="2xy^2"
  answerDisplay="$2xy^2$"
  hint="Multiply the two factors in the numerator first, then simplify the resulting single fraction."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{(-6a^6 b^9)(-8a^5 b^8)}{-12a^{10} b^{12}}$"
  answer="-4ab^5"
  answerDisplay="$-4ab^5$"
  hint="Multiply the two factors in the numerator first (watch the signs), then simplify the resulting single fraction."
>}}

## Key terms

**Quotient Property of Exponents** — for a real number $a \neq 0$ and
whole numbers $m, n$: $\tfrac{a^m}{a^n} = a^{m-n}$ when $m > n$, and
$\tfrac{a^m}{a^n} = \tfrac{1}{a^{n-m}}$ when $n > m$. **zero exponent** —
any nonzero number or expression raised to the power $0$ equals $1$.
**Quotient to a Power Property** — $\left(\tfrac{a}{b}\right)^m = \tfrac{a^m}{b^m}$
for $b \neq 0$. **monomial** — a single term made of a coefficient and
variables raised to whole-number powers, divided using these exponent
properties one variable at a time.

---

<small>This section is adapted from [Prealgebra 2e, Section 10.4: Divide Monomials](https://openstax.org/books/prealgebra-2e/pages/10-4-divide-monomials) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: omitted the Be Prepared quiz, Self Check checklist, Media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
