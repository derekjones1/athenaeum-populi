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
  **By the end of this section, you will be able to:** simplify expressions
  using the Quotient Property for Exponents; simplify expressions with an
  exponent of zero; simplify expressions using the Quotient to a Power
  Property; simplify expressions by applying several properties; and divide
  monomials.
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
  question="Simplify: $x^{15} / x^{10}$. Write the answer as a power of x."
  answer="x^5"
  answerDisplay="$x^5$"
  hint="Since 15 > 10, there are more factors of x in the numerator. Subtract the exponents: $15 - 10$."
>}}

{{< fillin
  question="Simplify: $6^{14} / 6^5$. Write the answer as a power of 6."
  answer="6^9"
  answerDisplay="$6^9$"
  hint="The larger exponent is in the numerator, so subtract the exponents: $14 - 5$."
>}}

**Example.** Simplify: (a) $\tfrac{b^8}{b^{12}}$ (b) $\tfrac{7^3}{7^5}$.

(a) Since $12 > 8$, there are more factors of $b$ in the denominator. Use the
Quotient Property, $\tfrac{a^m}{a^n} = \tfrac{1}{a^{n-m}}$, and simplify:
$\tfrac{b^8}{b^{12}} = \tfrac{1}{b^{12-8}} = \tfrac{1}{b^4}$.

(b) Since $5 > 3$, there are more factors of $3$ in the denominator. Use the
Quotient Property and simplify:
$\tfrac{7^3}{7^5} = \tfrac{1}{7^{5-3}} = \tfrac{1}{7^2} = \tfrac{1}{49}$.

{{< fillin
  question="Simplify: $x^{18} / x^{22}$."
  answer="\frac{1}{x^4}"
  answerDisplay="$1/x^4$"
  hint="Since 22 > 18, there are more factors in the denominator. The result is 1 over $x^{22 - 18}$."
>}}

{{< fillin
  question="Simplify: $12^{15} / 12^{30}$."
  answer="\frac{1}{12^{15}}"
  answerDisplay="$1/12^{15}$"
  hint="The larger exponent is in the denominator, so the result is 1 over $12^{30 - 15}$."
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
  question="Simplify: $b^{19} / b^{11}$. Write the answer as a power of b."
  answer="b^8"
  answerDisplay="$b^8$"
  hint="Since 19 > 11, there are more factors in the numerator. Subtract the exponents: $19 - 11$."
>}}

{{< fillin
  question="Simplify: $z^5 / z^{11}$."
  answer="\frac{1}{z^6}"
  answerDisplay="$1/z^6$"
  hint="Since 11 > 5, there are more factors in the denominator. The result is 1 over $z^{11 - 5}$."
>}}

## Simplify Expressions with an Exponent of Zero

A special case of the Quotient Property is when the exponents of the numerator
and denominator are equal, such as an expression like $\tfrac{a^m}{a^m}$. From
your earlier work with fractions, you know that
$\tfrac{2}{2} = 1$, $\tfrac{17}{17} = 1$, and $\tfrac{-43}{-43} = 1$. In words,
a number divided by itself is $1$. So $\tfrac{x}{x} = 1$, for any $x$
($x \neq 0$), since any number divided by itself is $1$.

The Quotient Property for Exponents shows us how to simplify $\tfrac{a^m}{a^n}$
when $m > n$ and when $n < m$ by subtracting exponents. What if $m = n$?
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
  hint="Any nonzero number raised to the zero power is 1."
>}}

{{< fillin
  question="Simplify: $m^0$."
  answer="1"
  hint="Any nonzero base raised to the zero power is 1."
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
  hint="Any nonzero expression raised to the zero power is 1."
>}}

{{< fillin
  question="Simplify: (-11pq^3)^0."
  answer="1"
  hint="Any nonzero expression raised to the zero power is 1."
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
  question="Simplify: $\tfrac{5}{8}^2$."
  answer="\frac{25}{64}"
  answerDisplay="$\tfrac{25}{64}$"
  hint="Square the numerator and square the denominator: $5^2$ over $8^2$."
>}}

{{< fillin
  question="Simplify: $\tfrac{p}{10}^4$."
  answer="\frac{p^4}{10000}"
  answerDisplay="$p^4/10{,}000$"
  hint="Raise the numerator and denominator to the fourth power: $p^4$ over $10^4$."
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
  question="Simplify: $(m^5)^4 / m^7$. Write the answer as a power of m."
  answer="m^{13}"
  answerDisplay="$m^{13}$"
  hint="Multiply the exponents in the numerator $(5 \cdot 4 = 20)$, then subtract: $20 - 7$."
>}}

{{< fillin
  question="Simplify: $(k^2)^6 / k^7$. Write the answer as a power of k."
  answer="k^5"
  answerDisplay="$k^5$"
  hint="Multiply the exponents in the numerator $(2 \cdot 6 = 12)$, then subtract: $12 - 7$."
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
  question="Simplify: $(r^5 / r^3)^4$. Write the answer as a power of r."
  answer="r^8"
  answerDisplay="$r^8$"
  hint="Subtract the exponents inside the parentheses $(5 - 3 = 2)$, then multiply by 4."
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
  question="Simplify: $(a^3 / b^2)^4$."
  answer="\frac{a^{12}}{b^8}"
  answerDisplay="$a^{12}/b^8$"
  hint="Raise the numerator and denominator to the fourth power, then multiply exponents: $a^{3\cdot 4}$ over $b^{2\cdot 4}$."
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
  question="Simplify: $(7x^3 / 9y)^2$."
  answer="\frac{49x^6}{81y^2}"
  answerDisplay="$49x^6/81y^2$"
  hint="Square each factor: $7^2 \cdot (x^3)^2$ over $9^2 \cdot y^2$."
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
  question="Simplify: $(a^2)^3 (a^2)^4 / (a^4)^5$."
  answer="\frac{1}{a^6}"
  answerDisplay="$1/a^6$"
  hint="Multiply exponents on each factor, add in the numerator $(6 + 8 = 14)$, then subtract 20 in the denominator."
>}}

**Example.** Simplify:

$$
\frac{\left(10p^3\right)^2}{(5p)^3 \left(2p^5\right)^4}
$$

Use the Product to a Power Property, then the Power Property, then add the
exponents in the denominator using the Product Property, and finally use the
Quotient Property and simplify:

$$
\frac{\left(10p^3\right)^2}{(5p)^3 \left(2p^5\right)^4} = \frac{10^2 \left(p^3\right)^2}{5^3 p^3 \cdot 2^4 \left(p^5\right)^4} = \frac{100p^6}{125 \cdot 16 p^{23}} = \frac{100}{2000 p^{17}} = \frac{1}{20p^{17}}
$$

{{< fillin
  question="Simplify: $(2x^4)^5 / ((4x^3)^2 (x^3)^5)$."
  answer="\frac{2}{x}"
  answerDisplay="$\tfrac{2}{x}$"
  hint="Raise each factor to its power, then divide: $32x^{20}$ over $16x^{21}$."
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
  question="Find the quotient: $42y^9$ ÷ $6y^3$."
  answer="7y^6"
  answerDisplay="$7y^6$"
  hint="Divide the coefficients (42 ÷ 6 = 7) and subtract the exponents on $y (9 - 3)$."
>}}

{{< fillin
  question="Find the quotient: $48z^8$ ÷ $8z^2$."
  answer="6z^6"
  answerDisplay="$6z^6$"
  hint="Divide the coefficients (48 ÷ 8 = 6) and subtract the exponents on $z (8 - 2)$."
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
  question="Find the quotient: $-72a^7 b^3 / (8a^{12} b^4)$."
  answer="-\frac{9}{a^5 b}"
  answerDisplay="$-\tfrac{9}{a^5 b}$"
  hint="Divide the coefficients (-72 ÷ 8 = -9); a and b both have larger exponents in the denominator."
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
  question="Find the quotient: $16a^7 b^6 / (24ab^8)$."
  answer="\frac{2a^6}{3b^2}"
  answerDisplay="$2a^6/(3b^2)$"
  hint="Reduce the coefficients $(\tfrac{16}{24} = \tfrac{2}{3})$; subtract the exponents on $a (7 - 1)$ and on b (b has the larger exponent in the denominator)."
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
  question="Find the quotient: $28x^5 y^{14} / (49x^9 y^{12})$."
  answer="\frac{4y^2}{7x^4}"
  answerDisplay="$4y^2/(7x^4)$"
  hint="Reduce the coefficients $(\tfrac{28}{49} = \tfrac{4}{7})$; x has the larger exponent in the denominator, y in the numerator."
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
  question="Find the quotient: $(6a^4 b^5)\tfrac{4a^2 b^5}{12a^5 b^8}$."
  answer="2ab^2"
  answerDisplay="$2ab^2$"
  hint="Multiply the monomials in the numerator $(24a^6 b^{10})$, then divide by $12a^5 b^8$."
>}}

{{< fillin
  question="Find the quotient: $(-12x^6 y^9)\tfrac{-4x^5 y^8}{-12x^{10} y^{12}}$."
  answer="-4xy^5"
  answerDisplay="$-4xy^5$"
  hint="Multiply the monomials in the numerator $(48x^{11} y^{17})$, then divide by $-12x^{10} y^{12}$."
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

---

<small>This section is adapted from [Elementary Algebra 2e, Section 6.5: Divide Monomials](https://openstax.org/books/elementary-algebra-2e/pages/6-5-divide-monomials) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked-example step tables as prose and typeset equations; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
