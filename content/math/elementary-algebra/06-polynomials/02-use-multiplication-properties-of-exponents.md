---
title: Use Multiplication Properties of Exponents
description: >-
  Simplifying expressions with exponents, and using the Product Property, the
  Power Property, and the Product to a Power Property — including combining
  several properties and multiplying monomials — adapted from OpenStax
  Elementary Algebra 2e, Section 6.2.
source_section: "6.2"
weight: 2
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** simplify expressions
  with exponents; simplify expressions using the Product Property for
  Exponents; simplify expressions using the Power Property for Exponents;
  simplify expressions using the Product to a Power Property; simplify
  expressions by applying several properties; and multiply monomials.
{{< /callout >}}

## Simplify Expressions with Exponents

Remember that an exponent indicates repeated multiplication of the same
quantity. For example, $2^4$ means to multiply $2$ by itself $4$ times, so
$2^4$ means $2 \cdot 2 \cdot 2 \cdot 2$.

Let's review the vocabulary for expressions with exponents.

{{< callout type="info" >}}
  **Exponential notation.** For any real number $a$ and counting number $m$,

  $$a^m = \underbrace{a \cdot a \cdot a \cdots a}_{m \text{ factors}}$$

  This is read $a$ to the $m^{\text{th}}$ power. In the expression $a^m$, the
  exponent $m$ tells us how many times we use the base $a$ as a factor.
{{< /callout >}}

For example, $4^3$ means $4 \cdot 4 \cdot 4$ (three factors), and $(-9)^5$
means $(-9)(-9)(-9)(-9)(-9)$ (five factors).

Before we begin working with variable expressions containing exponents,
let's simplify a few expressions involving only numbers.

**Example.** Simplify: (a) $4^3$ (b) $7^1$ (c) $\left(\tfrac{5}{6}\right)^2$
(d) $(0.63)^2$.

(a) $4^3$ means multiply three factors of $4$:
$4 \cdot 4 \cdot 4 = 64$.

(b) $7^1$ means multiply one factor of $7$: $7^1 = 7$.

(c) $\left(\tfrac{5}{6}\right)^2$ means multiply two factors:
$\left(\tfrac{5}{6}\right)\left(\tfrac{5}{6}\right) = \tfrac{25}{36}$.

(d) $(0.63)^2$ means multiply two factors:
$(0.63)(0.63) = 0.3969$.

{{< fillin
  question="Simplify: $6^3$."
  answer="216"
  hint="$6^3$ means $6 \cdot 6 \cdot 6$."
>}}

{{< fillin
  question="Simplify: $\tfrac{2}{5}^3$."
  answer="\frac{8}{125}"
  answerDisplay="$\tfrac{8}{125}$"
  hint="Multiply three factors of $\tfrac{2}{5}$: cube the numerator and cube the denominator."
>}}

**Example.** Simplify: (a) $(-5)^4$ (b) $-5^4$.

(a) $(-5)^4$ means multiply four factors of $-5$:
$(-5)(-5)(-5)(-5) = 625$.

(b) $-5^4$ means the opposite of $5^4$, so we multiply four factors of $5$
and then take the opposite: $-(5 \cdot 5 \cdot 5 \cdot 5) = -625$.

Notice the similarities and differences in these two parts. Why are the
answers different? As we follow the order of operations, in part (a) the
parentheses tell us to raise the $-5$ to the $4^{\text{th}}$ power. In part
(b) we raise just the $5$ to the $4^{\text{th}}$ power and then take the
opposite.

{{< fillin
  question="Simplify: $(-3)^4$."
  answer="81"
  hint="The parentheses mean the base is -3. Multiply four factors of -3; an even number of negative factors gives a positive result."
>}}

{{< fillin
  question="Simplify: $-3^4$."
  answer="-81"
  hint="Without parentheses around the -3, this means the opposite of $3^4$. Raise 3 to the fourth power first, then take the opposite."
>}}

## Simplify Expressions Using the Product Property for Exponents

You have seen that when you combine like terms by adding and subtracting,
you need to have the same base with the same exponent. But when you multiply
and divide, the exponents may be different, and sometimes the bases may be
different, too.

We'll derive the properties of exponents by looking for patterns in several
examples. First, we will look at an example that leads to the Product
Property. Consider $x^2 \cdot x^3$. What does this mean?

$$
x^2 \cdot x^3 = \underbrace{(x \cdot x)}_{2 \text{ factors}} \cdot \underbrace{(x \cdot x \cdot x)}_{3 \text{ factors}} = \underbrace{x \cdot x \cdot x \cdot x \cdot x}_{5 \text{ factors}} = x^5
$$

Notice that $5$ is the sum of the exponents, $2$ and $3$. The base stayed
the same and we added the exponents. This leads to the **Product Property
for Exponents**.

{{< callout type="info" >}}
  **Product Property for Exponents.** If $a$ is a real number and $m$ and $n$
  are counting numbers, then

  $$a^m \cdot a^n = a^{m+n}$$

  To multiply with like bases, add the exponents.
{{< /callout >}}

An example with numbers helps to verify this property:
$2^2 \cdot 2^3 \overset{?}{=} 2^{2+3}$, so $4 \cdot 8 \overset{?}{=} 2^5$,
giving $32 = 32$ ✓.

**Example.** Simplify: $y^5 \cdot y^6$.

Use the product property, $a^m \cdot a^n = a^{m+n}$, to add the exponents:
$y^5 \cdot y^6 = y^{5+6} = y^{11}$.

{{< fillin
  question="Simplify: $b^9 \cdot b^8$."
  answer="b^{17}"
  answerDisplay="$b^{17}$"
  hint="The bases are the same, so add the exponents: $9 + 8$."
>}}

**Example.** Simplify: (a) $2^5 \cdot 2^9$ (b) $3 \cdot 3^4$.

(a) The bases are the same, so add the exponents:
$2^5 \cdot 2^9 = 2^{5+9} = 2^{14}$.

(b) Write $3$ as $3^1$, then add the exponents:
$3 \cdot 3^4 = 3^1 \cdot 3^4 = 3^{1+4} = 3^5$.

{{< fillin
  question="Simplify: $5 \cdot 5^5$. Write the answer as a power of 5."
  answer="5^6"
  answerDisplay="$5^6$"
  hint="Rewrite 5 as $5^1$, then add the exponents."
>}}

{{< fillin
  question="Simplify: $7^6 \cdot 7^8$. Write the answer as a power of 7."
  answer="7^{14}"
  answerDisplay="$7^{14}$"
  hint="The bases are the same, so add the exponents: $6 + 8$."
>}}

**Example.** Simplify: (a) $a^7 \cdot a$ (b) $x^{27} \cdot x^{13}$.

(a) Rewrite $a$ as $a^1$, then use the product property:
$a^7 \cdot a = a^7 \cdot a^1 = a^{7+1} = a^8$.

(b) The bases are the same, so add the exponents:
$x^{27} \cdot x^{13} = x^{27+13} = x^{40}$.

{{< fillin
  question="Simplify: $p^5 \cdot p$. Write the answer as a power of p."
  answer="p^6"
  answerDisplay="$p^6$"
  hint="Rewrite p as $p^1$, then add the exponents."
>}}

{{< fillin
  question="Simplify: $y^{14} \cdot y^{29}$. Write the answer as a power of y."
  answer="y^{43}"
  answerDisplay="$y^{43}$"
  hint="The bases are the same, so add the exponents: $14 + 29$."
>}}

We can extend the Product Property for Exponents to more than two factors.

**Example.** Simplify: $d^4 \cdot d^5 \cdot d^2$.

Add the exponents, since the bases are the same:
$d^4 \cdot d^5 \cdot d^2 = d^{4+5+2} = d^{11}$.

{{< fillin
  question="Simplify: $x^6 \cdot x^4 \cdot x^8$. Write the answer as a power of x."
  answer="x^{18}"
  answerDisplay="$x^{18}$"
  hint="Add all three exponents: $6 + 4 + 8$."
>}}

## Simplify Expressions Using the Power Property for Exponents

Now let's look at an exponential expression that contains a power raised to
a power. Consider $\left(x^2\right)^3$. What does this mean?

$$
\left(x^2\right)^3 = \underbrace{x^2 \cdot x^2 \cdot x^2}_{3 \text{ factors}} = x^{2+2+2} = x^6
$$

Notice that $6$ is the product of the exponents, $2$ and $3$. We multiplied
the exponents. This leads to the **Power Property for Exponents**.

{{< callout type="info" >}}
  **Power Property for Exponents.** If $a$ is a real number and $m$ and $n$
  are whole numbers, then

  $$\left(a^m\right)^n = a^{m \cdot n}$$

  To raise a power to a power, multiply the exponents.
{{< /callout >}}

An example with numbers helps to verify this property:
$\left(3^2\right)^3 \overset{?}{=} 3^{2 \cdot 3}$, so
$(9)^3 \overset{?}{=} 3^6$, giving $729 = 729$ ✓.

**Example.** Simplify: (a) $\left(y^5\right)^9$ (b) $\left(4^4\right)^7$.

(a) Use the power property, $\left(a^m\right)^n = a^{m \cdot n}$, to multiply
the exponents: $\left(y^5\right)^9 = y^{5 \cdot 9} = y^{45}$.

(b) Multiply the exponents:
$\left(4^4\right)^7 = 4^{4 \cdot 7} = 4^{28}$.

{{< fillin
  question="Simplify: $(b^7)^5$. Write the answer as a power of b."
  answer="b^{35}"
  answerDisplay="$b^{35}$"
  hint="To raise a power to a power, multiply the exponents: $7 \cdot 5$."
>}}

{{< fillin
  question="Simplify: $(z^6)^9$. Write the answer as a power of z."
  answer="z^{54}"
  answerDisplay="$z^{54}$"
  hint="To raise a power to a power, multiply the exponents: $6 \cdot 9$."
>}}

## Simplify Expressions Using the Product to a Power Property

We will now look at an expression containing a product that is raised to a
power. Consider $(2x)^3$. What does this mean?

$$
(2x)^3 = (2x)(2x)(2x) = \underbrace{(2 \cdot 2 \cdot 2)}_{3 \text{ factors of } 2} \cdot \underbrace{(x \cdot x \cdot x)}_{3 \text{ factors of } x} = 2^3 \cdot x^3
$$

Notice that each factor was raised to the power, so $(2x)^3$ is
$2^3 \cdot x^3$. The exponent applies to each of the factors! This leads to
the **Product to a Power Property for Exponents**.

{{< callout type="info" >}}
  **Product to a Power Property for Exponents.** If $a$ and $b$ are real
  numbers and $m$ is a whole number, then

  $$(ab)^m = a^m b^m$$

  To raise a product to a power, raise each factor to that power.
{{< /callout >}}

An example with numbers helps to verify this property:
$(2 \cdot 3)^2 \overset{?}{=} 2^2 \cdot 3^2$, so
$6^2 \overset{?}{=} 4 \cdot 9$, giving $36 = 36$ ✓.

**Example.** Simplify: (a) $(-9d)^2$ (b) $(3mn)^3$.

(a) Use the Product to a Power Property, $(ab)^m = a^m b^m$, then simplify:
$(-9d)^2 = (-9)^2 d^2 = 81d^2$.

(b) Raise each factor to the third power:
$(3mn)^3 = (3)^3 m^3 n^3 = 27m^3 n^3$.

{{< fillin
  question="Simplify: $(-12y)^2$."
  answer="144y^2"
  answerDisplay="$144y^2$"
  hint="Raise each factor to the second power: square the -12 and square the y."
>}}

{{< fillin
  question="Simplify: (2wx)^5."
  answer="32w^5 x^5"
  answerDisplay="$32w^5 x^5$"
  hint="Raise each factor to the fifth power: $2^5$, $w^5$, and $x^5$."
>}}

## Simplify Expressions by Applying Several Properties

We now have three properties for multiplying expressions with exponents.
Let's summarize them and then do some examples that use more than one of the
properties.

{{< callout type="info" >}}
  **Properties of Exponents.** If $a$ and $b$ are real numbers, and $m$ and
  $n$ are whole numbers, then

  - **Product Property:** $a^m \cdot a^n = a^{m+n}$
  - **Power Property:** $\left(a^m\right)^n = a^{m \cdot n}$
  - **Product to a Power:** $(ab)^m = a^m b^m$
{{< /callout >}}

All exponent properties hold true for any real numbers $m$ and $n$. Right
now, we only use whole number exponents.

**Example.** Simplify: (a) $\left(y^3\right)^6 \left(y^5\right)^4$
(b) $\left(-6x^4 y^5\right)^2$.

(a) Use the Power Property on each factor, then add the exponents:
$\left(y^3\right)^6 \left(y^5\right)^4 = y^{18} \cdot y^{20} = y^{38}$.

(b) Use the Product to a Power Property, then the Power Property, then
simplify:

$$
\left(-6x^4 y^5\right)^2 = (-6)^2 \left(x^4\right)^2 \left(y^5\right)^2 = 36 x^8 y^{10}
$$

{{< fillin
  question="Simplify: $(a^4)^5 (a^7)^4$. Write the answer as a power of a."
  answer="a^{48}"
  answerDisplay="$a^{48}$"
  hint="Use the Power Property on each factor (multiply exponents), then add: $(4\cdot 5) + (7\cdot 4)$."
>}}

{{< fillin
  question="Simplify: $(-2c^4 d^2)^3$."
  answer="-8c^{12} d^6"
  answerDisplay="$-8c^{12} d^6$"
  hint="Raise each factor to the third power: cube the -2, and multiply each variable's exponent by 3."
>}}

**Example.** Simplify: (a) $(5m)^2 \left(3m^3\right)$
(b) $\left(3x^2 y\right)^4 \left(2xy^2\right)^3$.

(a) Raise $5m$ to the second power, then rearrange and multiply the
constants while adding the exponents:

$$
(5m)^2 \left(3m^3\right) = 25m^2 \cdot 3m^3 = 25 \cdot 3 \cdot m^2 \cdot m^3 = 75m^5
$$

(b) Use the Product to a Power Property on each factor, then rearrange and
combine:

$$
\left(3x^2 y\right)^4 \left(2xy^2\right)^3 = \left(81x^8 y^4\right)\left(8x^3 y^6\right) = 81 \cdot 8 \cdot x^8 \cdot x^3 \cdot y^4 \cdot y^6 = 648 x^{11} y^{10}
$$

{{< fillin
  question="Simplify: $(5n)^2 (3n^{10})$."
  answer="75n^{12}"
  answerDisplay="$75n^{12}$"
  hint="Square 5n to get $25n^2$, then multiply the constants $(25 \cdot 3)$ and add the exponents on n."
>}}

{{< fillin
  question="Simplify: (c^4 d^2)^5 (3cd^5)^4."
  answer="81c^{24} d^{30}"
  answerDisplay="$81c^{24} d^{30}$"
  hint="Apply the Product to a Power Property to each factor, then multiply the constants and add matching exponents."
>}}

## Multiply Monomials

Since a monomial is an algebraic expression, we can use the properties of
exponents to multiply monomials.

**Example.** Multiply: $\left(3x^2\right)\left(-4x^3\right)$.

Use the Commutative Property to rearrange the terms, then multiply:

$$
\left(3x^2\right)\left(-4x^3\right) = 3 \cdot (-4) \cdot x^2 \cdot x^3 = -12x^5
$$

{{< fillin
  question="Multiply: $(5y^7)(-7y^4)$."
  answer="-35y^{11}"
  answerDisplay="$-35y^{11}$"
  hint="Multiply the coefficients $(5 \cdot -7)$ and add the exponents on $y (7 + 4)$."
>}}

{{< fillin
  question="Multiply: $(-6b^4)(-9b^5)$."
  answer="54b^9"
  answerDisplay="$54b^9$"
  hint="Multiply the coefficients $(-6 \cdot -9)$ and add the exponents on $b (4 + 5)$."
>}}

**Example.** Multiply: $\left(\tfrac{5}{6}x^3 y\right)\left(12xy^2\right)$.

Use the Commutative Property to rearrange the terms, then multiply:

$$
\left(\tfrac{5}{6}x^3 y\right)\left(12xy^2\right) = \tfrac{5}{6} \cdot 12 \cdot x^3 \cdot x \cdot y \cdot y^2 = 10 x^4 y^3
$$

{{< fillin
  question="Multiply: $(\tfrac{2}{5} a^4 b^3)(15ab^3)$."
  answer="6a^5 b^6"
  answerDisplay="$6a^5 b^6$"
  hint="Multiply the coefficients $(\tfrac{2}{5} \cdot 15 = 6)$ and add the exponents on each variable."
>}}

{{< fillin
  question="Multiply: $(\tfrac{2}{3} r^5 s)(12r^6 s^7)$."
  answer="8r^{11} s^8"
  answerDisplay="$8r^{11} s^8$"
  hint="Multiply the coefficients $(\tfrac{2}{3} \cdot 12 = 8)$ and add the exponents on $r (5 + 6)$ and $s (1 + 7)$."
>}}

## Key terms

**exponential notation** — $a^m$ means multiply $m$ factors of $a$; the base
$a$ is used as a factor $m$ times. **Product Property for Exponents** — to
multiply powers with like bases, add the exponents: $a^m \cdot a^n = a^{m+n}$.
**Power Property for Exponents** — to raise a power to a power, multiply the
exponents: $\left(a^m\right)^n = a^{m \cdot n}$. **Product to a Power
Property for Exponents** — to raise a product to a power, raise each factor
to that power: $(ab)^m = a^m b^m$. **monomial** — a one-term algebraic
expression, such as $-12x^5$, that we can multiply by applying these
properties of exponents.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 6.2: Use Multiplication Properties of Exponents](https://openstax.org/books/elementary-algebra-2e/pages/6-2-use-multiplication-properties-of-exponents) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked-example step tables as prose and typeset equations; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
