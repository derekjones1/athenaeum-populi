---
title: Divide Monomials
description: >-
  Simplifying expressions with exponents under division — using the Quotient
  Property, the Zero Exponent Property, and the Quotient to a Power Property,
  applying several properties together, and dividing monomials — adapted from
  OpenStax Elementary Algebra 2e, Section 6.5.
source_section: "6.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Simplify expressions using the Quotient Property for Exponents
- Simplify expressions with an exponent of zero
- Simplify expressions using the Quotient to a Power Property
- Simplify expressions by applying several properties
- Divide monomials
{{< /callout >}}

## Simplify Expressions Using the Quotient Property for Exponents

Earlier in this chapter, we developed the properties of exponents for
multiplication. We summarize these properties below.

{{< callout type="info" >}}
  **Summary of Exponent Properties for Multiplication.** If $a$ and $b$ are
  real numbers, and $m$ and $n$ are whole numbers, then

  - **Product Property:** $a^m \cdot a^n = a^{m+n}$
  - **Power Property:** $\left(a^m\right)^n = a^{m \cdot n}$
  - **Product to a Power:** $(ab)^m = a^m b^m$
{{< /callout >}}

Now we will look at the exponent properties for division. A quick memory
refresher may help before we get started. You have learned to simplify
fractions by dividing out common factors from the numerator and denominator
using the Equivalent Fractions Property. This property will also help you
work with algebraic fractions — which are also quotients.

{{< callout type="info" >}}
  **Equivalent Fractions Property.** If $a$, $b$, and $c$ are whole numbers
  where $b \neq 0$, $c \neq 0$, then

  $$\frac{a}{b} = \frac{a \cdot c}{b \cdot c} \quad \text{and} \quad \frac{a \cdot c}{b \cdot c} = \frac{a}{b}$$
{{< /callout >}}

As before, we'll try to discover a property by looking at some examples.
Consider $\tfrac{x^5}{x^2}$ and $\tfrac{x^2}{x^3}$. What do they mean?

$$
\frac{x^5}{x^2} = \frac{x \cdot x \cdot x \cdot x \cdot x}{x \cdot x} = x^3
\qquad
\frac{x^2}{x^3} = \frac{x \cdot x}{x \cdot x \cdot x} = \frac{1}{x}
$$

In each case the bases were the same and we subtracted exponents. When the
larger exponent was in the numerator, we were left with factors in the
numerator, and $\tfrac{x^5}{x^2} = x^{5-2} = x^3$. When the larger exponent
was in the denominator, we were left with factors in the denominator — notice
the numerator of $1$ — and $\tfrac{x^2}{x^3} = \tfrac{1}{x^{3-2}} = \tfrac{1}{x}$.
This leads to the **Quotient Property for Exponents**.

{{< callout type="info" >}}
  **Quotient Property for Exponents.** If $a$ is a real number, $a \neq 0$,
  and $m$ and $n$ are whole numbers, then

  $$\frac{a^m}{a^n} = a^{m-n},\ m > n \quad \text{and} \quad \frac{a^m}{a^n} = \frac{1}{a^{n-m}},\ n > m$$
{{< /callout >}}

A couple of examples with numbers may help to verify this property:
$\tfrac{3^4}{3^2} \overset{?}{=} 3^{4-2}$, so $\tfrac{81}{9} \overset{?}{=} 3^2$,
giving $9 = 9$ ✓; and $\tfrac{5^2}{5^3} \overset{?}{=} \tfrac{1}{5^{3-2}}$, so
$\tfrac{25}{125} \overset{?}{=} \tfrac{1}{5^1}$, giving $\tfrac{1}{5} = \tfrac{1}{5}$ ✓.

To simplify an expression with a quotient, we need to first compare the
exponents in the numerator and denominator.

**Example.** Simplify: (a) $\tfrac{x^9}{x^7}$ (b) $\tfrac{3^{10}}{3^2}$.

(a) Since $9 > 7$, there are more factors of $x$ in the numerator. Use the
Quotient Property, $\tfrac{a^m}{a^n} = a^{m-n}$, and simplify:
$\tfrac{x^9}{x^7} = x^{9-7} = x^2$.

(b) Since $10 > 2$, there are more factors of $3$ in the numerator. Use the
Quotient Property and simplify: $\tfrac{3^{10}}{3^2} = 3^{10-2} = 3^8$.

{{< fillin
  question="Simplify: $\tfrac{x^{15}}{x^{10}}$. Write the answer as a power of $x$."
  answer="x^5"
  answerForm="single-power"
  answerDisplay="$x^5$"
  hint="The larger exponent is in the numerator, so use the Quotient Property: subtract the denominator's exponent from the numerator's."
>}}

{{< fillin
  question="Simplify: $\tfrac{6^{14}}{6^5}$. Write the answer as a power of $6$."
  answer="6^9"
  answerForm="single-power"
  answerDisplay="$6^9$"
  hint="Same base, larger exponent on top: subtract the exponents and leave the answer as a power of $6$."
>}}

**Example.** Simplify: (a) $\tfrac{b^8}{b^{12}}$ (b) $\tfrac{7^3}{7^5}$.

(a) Since $12 > 8$, there are more factors of $b$ in the denominator. Use the
Quotient Property, $\tfrac{a^m}{a^n} = \tfrac{1}{a^{n-m}}$, and simplify:
$\tfrac{b^8}{b^{12}} = \tfrac{1}{b^{12-8}} = \tfrac{1}{b^4}$.

(b) Since $5 > 3$, there are more factors of $7$ in the denominator. Use the
Quotient Property and simplify:
$\tfrac{7^3}{7^5} = \tfrac{1}{7^{5-3}} = \tfrac{1}{7^2} = \tfrac{1}{49}$.

{{< fillin
  question="Simplify: $\tfrac{x^{18}}{x^{22}}$."
  answer="\frac{1}{x^4}"
  answerForm="single-fraction"
  answerDisplay="$\tfrac{1}{x^4}$"
  hint="The larger exponent is in the denominator, so the result is $1$ over $x$ raised to the difference of the exponents."
>}}

{{< fillin
  question="Simplify: $\tfrac{12^{15}}{12^{30}}$."
  answer="\frac{1}{12^{15}}"
  answerForm="single-power"
  answerDisplay="$\tfrac{1}{12^{15}}$"
  hint="The larger exponent is in the denominator, so subtract the exponents and write the power of $12$ in the denominator, under a $1$."
>}}

The first step in simplifying an expression using the Quotient Property for
Exponents is to determine whether the exponent is larger in the numerator or
the denominator.

**Example.** Simplify: (a) $\tfrac{a^5}{a^9}$ (b) $\tfrac{x^{11}}{x^7}$.

(a) Is the exponent of $a$ larger in the numerator or denominator? Since
$9 > 5$, there are more $a$'s in the denominator and so we will end up with
factors in the denominator: $\tfrac{a^5}{a^9} = \tfrac{1}{a^{9-5}} = \tfrac{1}{a^4}$.

(b) Notice there are more factors of $x$ in the numerator, since $11 > 7$. So
we will end up with factors in the numerator:
$\tfrac{x^{11}}{x^7} = x^{11-7} = x^4$.

{{< fillin
  question="Simplify: $\tfrac{b^{19}}{b^{11}}$. Write the answer as a power of $b$."
  answer="b^8"
  answerForm="single-power"
  answerDisplay="$b^8$"
  hint="Compare the exponents first — here the larger one is in the numerator."
>}}

{{< fillin
  question="Simplify: $\tfrac{z^5}{z^{11}}$."
  answer="\frac{1}{z^6}"
  answerForm="single-fraction"
  answerDisplay="$\tfrac{1}{z^6}$"
  hint="Compare the exponents first — here the larger one is in the denominator."
>}}

## Simplify Expressions with an Exponent of Zero

A special case of the Quotient Property is when the exponents of the numerator
and denominator are equal, such as an expression like $\tfrac{a^m}{a^m}$. From
your earlier work with fractions, you know that
$\tfrac{2}{2} = 1$, $\tfrac{17}{17} = 1$, and $\tfrac{-43}{-43} = 1$. In words,
a number divided by itself is $1$. So $\tfrac{x}{x} = 1$, for any $x$
($x \neq 0$), since any number divided by itself is $1$.

The Quotient Property for Exponents shows us how to simplify $\tfrac{a^m}{a^n}$
when $m > n$ and when $n > m$ by subtracting exponents. What if $m = n$?
Consider $\tfrac{8}{8}$, which we know is $1$:

$$
\frac{8}{8} = 1, \qquad \frac{2^3}{2^3} = 1, \qquad 2^{3-3} = 1, \qquad 2^0 = 1
$$

We wrote $8$ as $2^3$, subtracted exponents, and simplified. Now we will
simplify $\tfrac{a^m}{a^m}$ in two ways to lead us to the definition of the
zero exponent. On the one hand, $\tfrac{a^m}{a^m} = a^{m-m} = a^0$; on the
other hand, $\tfrac{a^m}{a^m} = 1$ since any nonzero quantity divided by
itself is $1$. So $a^0 = 1$.

{{< callout type="info" >}}
  **Zero Exponent.** If $a$ is a non-zero number, then $a^0 = 1$.

  Any nonzero number raised to the zero power is $1$.
{{< /callout >}}

In this text, we assume any variable that we raise to the zero power is not
zero.

**Example.** Simplify: (a) $9^0$ (b) $n^0$.

The definition says any non-zero number raised to the zero power is $1$.

(a) Use the definition of the zero exponent: $9^0 = 1$.

(b) Use the definition of the zero exponent: $n^0 = 1$.

{{< fillin
  question="Simplify: $15^0$."
  answer="1"
  answerForm="decimal"
  hint="Use the definition of the zero exponent."
>}}

{{< fillin
  question="Simplify: $m^0$."
  answer="1"
  answerForm="decimal"
  hint="Use the definition of the zero exponent; in this text a variable raised to the zero power is not zero."
>}}

Now that we have defined the zero exponent, we can expand all the Properties
of Exponents to include whole number exponents. What about raising an
expression to the zero power? Let's look at $(2x)^0$. We can use the Product
to a Power Property to rewrite this expression:
$(2x)^0 = 2^0 x^0 = 1 \cdot 1 = 1$. This tells us that any nonzero expression
raised to the zero power is one.

**Example.** Simplify: (a) $(5b)^0$ (b) $\left(-4a^2 b\right)^0$.

(a) Use the definition of the zero exponent: $(5b)^0 = 1$.

(b) Use the definition of the zero exponent: $\left(-4a^2 b\right)^0 = 1$.

{{< fillin
  question="Simplify: $(11z)^0$."
  answer="1"
  answerForm="decimal"
  hint="The whole expression in parentheses is raised to the zero power."
>}}

{{< fillin
  question="Simplify: $(-11pq^3)^0$."
  answer="1"
  answerForm="decimal"
  hint="The whole product in parentheses is raised to the zero power, and it is not zero."
>}}

## Simplify Expressions Using the Quotient to a Power Property

Now we will look at an example that will lead us to the Quotient to a Power
Property. Consider $\left(\tfrac{x}{y}\right)^3$. What does this mean?

$$
\left(\frac{x}{y}\right)^3 = \frac{x}{y} \cdot \frac{x}{y} \cdot \frac{x}{y} = \frac{x \cdot x \cdot x}{y \cdot y \cdot y} = \frac{x^3}{y^3}
$$

Notice that the exponent applies to both the numerator and the denominator.
This leads to the **Quotient to a Power Property for Exponents**.

{{< callout type="info" >}}
  **Quotient to a Power Property for Exponents.** If $a$ and $b$ are real
  numbers, $b \neq 0$, and $m$ is a counting number, then

  $$\left(\frac{a}{b}\right)^m = \frac{a^m}{b^m}$$

  To raise a fraction to a power, raise the numerator and denominator to that
  power.
{{< /callout >}}

An example with numbers may help you understand this property:
$\left(\tfrac{2}{3}\right)^3 \overset{?}{=} \tfrac{2^3}{3^3}$, and since
$\tfrac{2}{3} \cdot \tfrac{2}{3} \cdot \tfrac{2}{3} = \tfrac{8}{27}$, we have
$\tfrac{8}{27} = \tfrac{8}{27}$ ✓.

**Example.** Simplify: (a) $\left(\tfrac{3}{7}\right)^2$
(b) $\left(\tfrac{b}{3}\right)^4$ (c) $\left(\tfrac{k}{j}\right)^3$.

(a) Use the Quotient to a Power Property, then simplify:
$\left(\tfrac{3}{7}\right)^2 = \tfrac{3^2}{7^2} = \tfrac{9}{49}$.

(b) Use the Quotient to a Power Property, then simplify:
$\left(\tfrac{b}{3}\right)^4 = \tfrac{b^4}{3^4} = \tfrac{b^4}{81}$.

(c) Raise the numerator and denominator to the third power:
$\left(\tfrac{k}{j}\right)^3 = \tfrac{k^3}{j^3}$.

{{< fillin
  question="Simplify: $\left(\tfrac{5}{8}\right)^2$."
  answer="\frac{25}{64}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{25}{64}$"
  hint="Raise the numerator and the denominator to the second power, then simplify each."
>}}

{{< fillin
  question="Simplify: $\left(\tfrac{p}{10}\right)^4$."
  answer="\frac{p^4}{10000}"
  answerForm="single-term"
  answerDisplay="$\tfrac{p^4}{10{,}000}$"
  hint="Raise the numerator and the denominator to the fourth power, then simplify the denominator."
>}}

## Simplify Expressions by Applying Several Properties

We'll now summarize all the properties of exponents so they are all together
to refer to as we simplify expressions using several properties. Notice that
they are now defined for whole number exponents.

{{< callout type="info" >}}
  **Summary of Exponent Properties.** If $a$ and $b$ are real numbers, and $m$
  and $n$ are whole numbers, then

  - **Product Property:** $a^m \cdot a^n = a^{m+n}$
  - **Power Property:** $\left(a^m\right)^n = a^{m \cdot n}$
  - **Product to a Power:** $(ab)^m = a^m b^m$
  - **Quotient Property:** $\tfrac{a^m}{a^n} = a^{m-n},\ a \neq 0,\ m > n$ and $\tfrac{a^m}{a^n} = \tfrac{1}{a^{n-m}},\ a \neq 0,\ n > m$
  - **Zero Exponent Definition:** $a^0 = 1,\ a \neq 0$
  - **Quotient to a Power Property:** $\left(\tfrac{a}{b}\right)^m = \tfrac{a^m}{b^m},\ b \neq 0$
{{< /callout >}}

**Example.** Simplify:

$$
\frac{\left(y^4\right)^2}{y^6}
$$

Multiply the exponents in the numerator using the Power Property, then
subtract the exponents using the Quotient Property:

$$
\frac{\left(y^4\right)^2}{y^6} = \frac{y^8}{y^6} = y^2
$$

{{< fillin
  question="Simplify: $\tfrac{\left(m^5\right)^4}{m^7}$. Write the answer as a power of $m$."
  answer="m^{13}"
  answerForm="single-power"
  answerDisplay="$m^{13}$"
  hint="Use the Power Property in the numerator first, then subtract exponents using the Quotient Property."
>}}

{{< fillin
  question="Simplify: $\tfrac{\left(k^2\right)^6}{k^7}$. Write the answer as a power of $k$."
  answer="k^5"
  answerForm="single-power"
  answerDisplay="$k^5$"
  hint="Use the Power Property in the numerator first, then subtract exponents using the Quotient Property."
>}}

**Example.** Simplify:

$$
\left(\frac{y^9}{y^4}\right)^2
$$

Remember parentheses come before exponents. Notice the bases are the same, so
we can simplify inside the parentheses first by subtracting the exponents;
then multiply the exponents using the Power Property:

$$
\left(\frac{y^9}{y^4}\right)^2 = \left(y^5\right)^2 = y^{10}
$$

{{< fillin
  question="Simplify: $\left(\tfrac{r^5}{r^3}\right)^4$. Write the answer as a power of $r$."
  answer="r^8"
  answerForm="single-power"
  answerDisplay="$r^8$"
  hint="The bases inside the parentheses match, so simplify inside first by subtracting exponents, then apply the outer power with the Power Property."
>}}

**Example.** Simplify:

$$
\left(\frac{j^2}{k^3}\right)^4
$$

Here we cannot simplify inside the parentheses first, since the bases are not
the same. Raise the numerator and denominator to the fourth power using the
Quotient to a Power Property, then use the Power Property and simplify:

$$
\left(\frac{j^2}{k^3}\right)^4 = \frac{\left(j^2\right)^4}{\left(k^3\right)^4} = \frac{j^8}{k^{12}}
$$

{{< fillin
  question="Simplify: $\left(\tfrac{a^3}{b^2}\right)^4$."
  answer="\frac{a^{12}}{b^8}"
  answerForm="single-fraction distributed"
  answerDisplay="$\tfrac{a^{12}}{b^8}$"
  hint="The bases differ, so raise the numerator and the denominator to the fourth power, then use the Power Property on each."
>}}

**Example.** Simplify:

$$
\left(\frac{2m^2}{5n}\right)^4
$$

Raise the numerator and denominator to the fourth power using the Quotient to
a Power Property, then raise each factor to the fourth power and use the Power
Property to simplify:

$$
\left(\frac{2m^2}{5n}\right)^4 = \frac{\left(2m^2\right)^4}{(5n)^4} = \frac{2^4 \left(m^2\right)^4}{5^4 n^4} = \frac{16m^8}{625n^4}
$$

{{< fillin
  question="Simplify: $\left(\tfrac{7x^3}{9y}\right)^2$."
  answer="\frac{49x^6}{81y^2}"
  answerForm="single-fraction distributed"
  answerDisplay="$\tfrac{49x^6}{81y^2}$"
  hint="Square the numerator and the denominator, then square each factor inside them."
>}}

**Example.** Simplify:

$$
\frac{\left(x^3\right)^4 \left(x^2\right)^5}{\left(x^6\right)^5}
$$

Use the Power Property on each factor, then add the exponents in the numerator
using the Product Property, then use the Quotient Property to simplify:

$$
\frac{\left(x^3\right)^4 \left(x^2\right)^5}{\left(x^6\right)^5} = \frac{\left(x^{12}\right)\left(x^{10}\right)}{x^{30}} = \frac{x^{22}}{x^{30}} = \frac{1}{x^8}
$$

{{< fillin
  question="Simplify: $\tfrac{\left(a^2\right)^3 \left(a^2\right)^4}{\left(a^4\right)^5}$."
  answer="\frac{1}{a^6}"
  answerForm="single-fraction"
  answerDisplay="$\tfrac{1}{a^6}$"
  hint="Use the Power Property on each factor, add the exponents in the numerator with the Product Property, then use the Quotient Property."
>}}

**Example.** Simplify:

$$
\frac{\left(10p^3\right)^2}{(5p)^3 \left(2p^5\right)^4}
$$

Use the Product to a Power Property, then the Power Property, then add the
exponents in the denominator using the Product Property, and finally use the
Quotient Property and simplify:

$$
\begin{aligned}
\frac{\left(10p^3\right)^2}{(5p)^3 \left(2p^5\right)^4} &= \frac{10^2 \left(p^3\right)^2}{5^3 p^3 \cdot 2^4 \left(p^5\right)^4} = \frac{100p^6}{125 \cdot 16 p^{23}} \\[4pt]
&= \frac{100}{2000 p^{17}} = \frac{1}{20p^{17}}
\end{aligned}
$$

{{< fillin
  question="Simplify: $\tfrac{\left(2x^4\right)^5}{\left(4x^3\right)^2 \left(x^3\right)^5}$."
  answer="\frac{2}{x}"
  answerForm="single-fraction distributed"
  answerDisplay="$\tfrac{2}{x}$"
  hint="Raise every factor to its power (the numbers too), add the exponents in the denominator, then divide the coefficients and use the Quotient Property."
>}}

## Divide Monomials

You have now been introduced to all the properties of exponents and used them
to simplify expressions. Next, you'll see how to use these properties to
divide monomials. Later, you'll use them to divide polynomials.

**Example.** Find the quotient: $56x^7 \div 8x^3$.

Rewrite as a fraction, use fraction multiplication to separate the numbers
from the variables, then simplify and use the Quotient Property:

$$
56x^7 \div 8x^3 = \frac{56x^7}{8x^3} = \frac{56}{8} \cdot \frac{x^7}{x^3} = 7x^4
$$

{{< fillin
  question="Find the quotient: $42y^9 \div 6y^3$."
  answer="7y^6"
  answerForm="single-term"
  answerDisplay="$7y^6$"
  hint="Rewrite as a fraction, divide the coefficients, and use the Quotient Property on the variable."
>}}

{{< fillin
  question="Find the quotient: $48z^8 \div 8z^2$."
  answer="6z^6"
  answerForm="single-term"
  answerDisplay="$6z^6$"
  hint="Rewrite as a fraction, divide the coefficients, and use the Quotient Property on the variable."
>}}

**Example.** Find the quotient:

$$
\frac{45a^2 b^3}{-5ab^5}
$$

Use fraction multiplication to separate the numbers from each variable, then
simplify using the Quotient Property and multiply:

$$
\frac{45a^2 b^3}{-5ab^5} = \frac{45}{-5} \cdot \frac{a^2}{a} \cdot \frac{b^3}{b^5} = -9 \cdot a \cdot \frac{1}{b^2} = -\frac{9a}{b^2}
$$

{{< fillin
  question="Find the quotient: $\tfrac{-72a^7 b^3}{8a^{12} b^4}$."
  answer="-\frac{9}{a^5 b}"
  answerForm="single-fraction"
  answerDisplay="$-\tfrac{9}{a^5 b}$"
  hint="Separate the coefficients from each variable, simplify each quotient, then multiply the results."
>}}

**Example.** Find the quotient:

$$
\frac{24a^5 b^3}{48ab^4}
$$

Use fraction multiplication, then simplify using the Quotient Property and
multiply:

$$
\frac{24a^5 b^3}{48ab^4} = \frac{24}{48} \cdot \frac{a^5}{a} \cdot \frac{b^3}{b^4} = \frac{1}{2} \cdot a^4 \cdot \frac{1}{b} = \frac{a^4}{2b}
$$

{{< fillin
  question="Find the quotient: $\tfrac{16a^7 b^6}{24ab^8}$."
  answer="\frac{2a^6}{3b^2}"
  answerForm="single-fraction"
  answerDisplay="$\tfrac{2a^6}{3b^2}$"
  hint="Reduce the coefficient fraction to lowest terms, then simplify each variable's quotient separately."
>}}

Once you become familiar with the process, you may be able to simplify a
fraction in one step.

**Example.** Find the quotient:

$$
\frac{14x^7 y^{12}}{21x^{11} y^6}
$$

Be very careful to simplify $\tfrac{14}{21}$ by dividing out a common factor,
and to simplify the variables by subtracting their exponents:

$$
\frac{14x^7 y^{12}}{21x^{11} y^6} = \frac{2y^6}{3x^4}
$$

{{< fillin
  question="Find the quotient: $\tfrac{28x^5 y^{14}}{49x^9 y^{12}}$."
  answer="\frac{4y^2}{7x^4}"
  answerForm="single-fraction"
  answerDisplay="$\tfrac{4y^2}{7x^4}$"
  hint="Divide out the common factor of the coefficients, then subtract exponents for each variable, keeping each variable on the side with more factors."
>}}

In the examples so far, there was no work to do in the numerator or
denominator before simplifying the fraction. In the next example, we'll first
find the product of two monomials in the numerator before we simplify the
fraction. This follows the order of operations, since a fraction bar is a
grouping symbol.

**Example.** Find the quotient:

$$
\frac{\left(6x^2 y^3\right)\left(5x^3 y^2\right)}{\left(3x^4 y^5\right)}
$$

Simplify the numerator by multiplying the two monomials, then simplify the
fraction:

$$
\frac{\left(6x^2 y^3\right)\left(5x^3 y^2\right)}{3x^4 y^5} = \frac{30x^5 y^5}{3x^4 y^5} = 10x
$$

{{< fillin
  question="Find the quotient: $\tfrac{\left(6a^4 b^5\right)\left(4a^2 b^5\right)}{12a^5 b^8}$."
  answer="2ab^2"
  answerForm="single-term"
  answerDisplay="$2ab^2$"
  hint="Multiply the two monomials in the numerator first, then simplify the resulting fraction."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{\left(-12x^6 y^9\right)\left(-4x^5 y^8\right)}{-12x^{10} y^{12}}$."
  answer="-4xy^5"
  answerForm="single-term"
  answerDisplay="$-4xy^5$"
  hint="Multiply the two monomials in the numerator first, then simplify the resulting fraction."
>}}

## Key terms

**Quotient Property for Exponents** — to divide powers with like bases,
subtract the exponents: $\tfrac{a^m}{a^n} = a^{m-n}$ when $m > n$, and
$\tfrac{a^m}{a^n} = \tfrac{1}{a^{n-m}}$ when $n > m$ (with $a \neq 0$).
**Zero Exponent** — any nonzero number or expression raised to the zero power
is $1$: $a^0 = 1$ for $a \neq 0$. **Quotient to a Power Property for
Exponents** — to raise a fraction to a power, raise the numerator and
denominator to that power: $\left(\tfrac{a}{b}\right)^m = \tfrac{a^m}{b^m}$
(with $b \neq 0$). **monomial** — a one-term algebraic expression, such as
$7x^4$, that we can divide by applying these properties of exponents.

## Practice

### Simplify Expressions Using the Quotient Property for Exponents

{{< fillin
  question="Simplify: $\tfrac{y^{20}}{y^{10}}$. Write the answer as a power of $y$."
  answer="y^{10}"
  answerForm="single-power"
  answerDisplay="$y^{10}$"
  hint="Compare the exponents, then use the Quotient Property."
>}}

{{< fillin
  question="Simplify: $\tfrac{7^{16}}{7^2}$. Write the answer as a power of $7$."
  answer="7^{14}"
  answerForm="single-power"
  answerDisplay="$7^{14}$"
  hint="Same base, larger exponent on top: subtract the exponents and leave the answer as a power of $7$."
>}}

### Simplify Expressions with an Exponent of Zero

{{< fillin
  question="Simplify: $-15^0$."
  answer="-1"
  answerForm="decimal"
  hint="Without parentheses, an exponent applies only to the base written directly in front of it."
>}}

{{< fillin
  question="Simplify: $6y^0$."
  answer="6"
  answerForm="decimal"
  hint="Only the base written directly in front of the exponent is raised to the zero power."
>}}

{{< fillin
  question="Simplify: $15r^0 - 22s^0$."
  answer="-7"
  answerForm="decimal"
  hint="With no parentheses, each zero exponent applies only to its variable; simplify each term, then subtract."
>}}

{{< fillin
  question="Simplify: $(15r)^0 - (22s)^0$."
  answer="0"
  answerForm="decimal"
  hint="Here each whole parenthesized product is raised to the zero power; simplify each, then subtract."
>}}

### Simplify Expressions Using the Quotient to a Power Property

{{< fillin
  question="Simplify: $\left(\tfrac{2}{5}\right)^2$."
  answer="\frac{4}{25}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{4}{25}$"
  hint="Raise the numerator and the denominator to the second power."
>}}

{{< fillin
  question="Simplify: $\left(\tfrac{x}{3}\right)^4$."
  answer="\frac{x^4}{81}"
  answerForm="single-term"
  answerDisplay="$\tfrac{x^4}{81}$"
  hint="Raise the numerator and the denominator to the fourth power, then simplify the denominator."
>}}

{{< multiplechoice
  question="Simplify: $\left(\tfrac{a}{b}\right)^5$."
  answer="$\tfrac{a^5}{b^5}$"
  hint="Raise the numerator and denominator to the fifth power."
>}}
$\tfrac{a}{b^5}$
$\tfrac{a^5}{b}$
$\tfrac{5a}{5b}$
$\tfrac{a^5}{b^5}$
{{< /multiplechoice >}}

### Simplify Expressions by Applying Several Properties

{{< fillin
  question="Simplify: $\tfrac{\left(p^3\right)^4}{p^5}$. Write the answer as a power of $p$."
  answer="p^7"
  answerForm="single-power"
  answerDisplay="$p^7$"
  hint="Use the Power Property in the numerator first, then subtract exponents using the Quotient Property."
>}}

{{< fillin
  question="Simplify: $\tfrac{v^{20}}{\left(v^4\right)^5}$."
  answer="1"
  answerForm="decimal"
  hint="Use the Power Property in the denominator first, then compare the exponents and simplify completely."
>}}

{{< fillin
  question="Simplify: $\left(\tfrac{m^4}{m^7}\right)^4$."
  answer="\frac{1}{m^{12}}"
  answerForm="single-fraction"
  answerDisplay="$\tfrac{1}{m^{12}}$"
  hint="Simplify inside the parentheses first (same base, so subtract exponents), then apply the outer power."
>}}

### Divide Monomials

{{< fillin
  question="Find the quotient: $\tfrac{54x^9 y^3}{-18x^6 y^{15}}$."
  answer="-\frac{3x^3}{y^{12}}"
  answerForm="single-fraction"
  answerDisplay="$-\tfrac{3x^3}{y^{12}}$"
  hint="Separate the coefficients from each variable, simplify each quotient, then multiply the results."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{20m^8 n^4}{30m^5 n^9}$."
  answer="\frac{2m^3}{3n^5}"
  answerForm="single-fraction"
  answerDisplay="$\tfrac{2m^3}{3n^5}$"
  hint="Reduce the coefficient fraction to lowest terms, then simplify each variable's quotient separately."
>}}

{{< fillin
  question="Find the quotient: $\tfrac{\left(4u^2 v^5\right)\left(15u^3 v\right)}{\left(12u^3 v\right)\left(u^4 v\right)}$."
  answer="\frac{5v^4}{u^2}"
  answerForm="single-fraction"
  answerDisplay="$\tfrac{5v^4}{u^2}$"
  hint="Multiply the monomials in the numerator and in the denominator first, then simplify the resulting fraction."
>}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 6.5: Divide Monomials](https://openstax.org/books/elementary-algebra-2e/pages/6-5-divide-monomials) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked-example step tables as prose and typeset equations; condensed the Key Concepts summary into a Key terms list; omitted the $\tfrac{b^{12}}{(b^2)^6}$ worked example, the Be Prepared quiz, Self Check checklist, media links, and unselected end-of-section exercises; corrected the base named in two worked-example explanations (the source says "factors of $x$" for $\tfrac{3^{10}}{3^2}$ and "factors of 3" for $\tfrac{7^3}{7^5}$) and the second case of the Quotient Property in the zero-exponent discussion (the source writes $n < m$, repeating $m > n$); adapted selected end-of-section exercises into the interactive Practice block; presented one quotient-to-a-power practice problem as a multiple choice among fraction forms because a typed answer is value-equal to the printed expression; and converted selected practice problems ("Try Its") into interactive exercises with instant feedback.</small>
