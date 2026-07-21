---
title: Use Multiplication Properties of Exponents
description: >-
  Simplifying expressions with exponents using the Product Property, Power
  Property, and Product to a Power Property of exponents, and multiplying
  monomials — adapted from OpenStax Prealgebra 2e, Section 10.2.
source_section: "10.2"
weight: 2
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** simplify expressions
  with exponents, simplify expressions using the Product Property of
  Exponents, simplify expressions using the Power Property of Exponents,
  simplify expressions using the Product to a Power Property, simplify
  expressions by applying several properties, and multiply monomials.
{{< /callout >}}

## Simplify expressions with exponents

Remember that an exponent indicates repeated multiplication of the same
quantity. For example, $2^4$ means to multiply four factors of $2$, so $2^4$
means $2 \cdot 2 \cdot 2 \cdot 2$. This format is known as **exponential
notation**.

{{< callout type="info" >}}
  **Exponential notation.** For a base $a$ and a whole-number exponent $m$,

  $$a^m \text{ means multiply } m \text{ factors of } a$$

  $$a^m = \underbrace{a \cdot a \cdot a \cdots a}_{m \text{ factors}}$$

  This is read "$a$ to the $m$th power."
{{< /callout >}}

In the expression $a^m$, the exponent tells us how many times we use the
base $a$ as a factor.

$$7^3 = \underbrace{7 \cdot 7 \cdot 7}_{3 \text{ factors}} \qquad\qquad (-8)^5 = \underbrace{(-8)(-8)(-8)(-8)(-8)}_{5 \text{ factors}}$$

Before we begin working with variable expressions containing exponents,
let's simplify a few expressions involving only numbers.

**Example.** Simplify: (a) $5^3$ (b) $9^1$.

(a) Multiply $3$ factors of $5$: $5^3 = 5 \cdot 5 \cdot 5 = 125$.

(b) Multiply $1$ factor of $9$: $9^1 = 9$.

{{< fillin
  question="Simplify: $4^3$."
  answer="64"
  hint="Multiply three factors of $4$ together."
>}}

{{< fillin
  question="Simplify: $11^1$."
  answer="11"
  hint="Raising any number to the first power leaves it unchanged."
>}}

**Example.** Simplify: (a) $\left(\tfrac{7}{8}\right)^2$ (b) $(0.74)^2$.

(a) Multiply two factors: $\left(\tfrac{7}{8}\right)^2 = \left(\tfrac{7}{8}\right)\left(\tfrac{7}{8}\right) = \tfrac{49}{64}$.

(b) Multiply two factors: $(0.74)^2 = (0.74)(0.74) = 0.5476$.

{{< fillin
  question="Simplify: $(5/8)^2$."
  answer="\frac{25}{64}"
  answerDisplay="$\tfrac{25}{64}$"
  hint="Multiply the fraction by itself: numerator times numerator, denominator times denominator."
>}}

{{< fillin
  question="Simplify: $(0.67)^2$."
  answer="0.4489"
  hint="Multiply $0.67$ by itself."
>}}

**Example.** Simplify: (a) $(-3)^4$ (b) $-3^4$.

(a) Multiply four factors of $-3$: $(-3)^4 = (-3)(-3)(-3)(-3) = 81$.

(b) Here the exponent applies only to $3$, and the negative sign out front
is separate: $-3^4 = -(3 \cdot 3 \cdot 3 \cdot 3) = -81$.

Notice the similarities and differences in parts (a) and (b). Why are the
answers different? In part (a) the parentheses tell us to raise the $-3$ to
the $4$th power. In part (b) we raise only the $3$ to the $4$th power and
then find the opposite.

{{< fillin
  question="Simplify: $(2/5)^3$."
  answer="\frac{8}{125}"
  answerDisplay="$\tfrac{8}{125}$"
  hint="Multiply the fraction by itself three times."
>}}

{{< fillin
  question="Simplify: $(0.127)^2$."
  answer="0.016129"
  hint="Multiply $0.127$ by itself."
>}}

{{< fillin
  question="Simplify: $(-2)^4$."
  answer="16"
  hint="The parentheses mean the negative sign is part of the base, so all four factors are $-2$."
>}}

{{< fillin
  question="Simplify: $-2^4$."
  answer="-16"
  hint="Without parentheses, the exponent applies only to $2$; the negative sign is applied after."
>}}

## Simplify expressions using the Product Property of Exponents

You have seen that when you combine like terms by adding and subtracting,
you need to have the same base with the same exponent. But when you
multiply and divide, the bases may be different, and sometimes the bases
may be different, too. We'll derive the properties of exponents by looking
for patterns in several examples. All the exponent properties hold true for
any real numbers, but right now we will only use whole number exponents.

First, we will look at an example that leads to the Product Property.
Consider $x^2 \cdot x^3$. This means $x \cdot x$ (2 factors) times
$x \cdot x \cdot x$ (3 factors), or $5$ factors of $x$ altogether, so
$x^2 \cdot x^3 = x^5$. Notice that $5$ is the sum of the exponents, $2$ and
$3$:

$$x^2 \cdot x^3 = x^{2+3} = x^5$$

The base stayed the same and we added the exponents. This leads to the
Product Property for Exponents.

{{< callout type="info" >}}
  **Product Property of Exponents.** If $a$ is a real number and $m, n$ are
  counting numbers, then

  $$a^m \cdot a^n = a^{m+n}$$

  To multiply with like bases, add the exponents.
{{< /callout >}}

An example with numbers helps to verify this property:

$$2^2 \cdot 2^3 \overset{?}{=} 2^{2+3} \qquad\qquad 4 \cdot 8 \overset{?}{=} 2^5 \qquad\qquad 32 = 32 \checkmark$$

**Example.** Simplify: $x^5 \cdot x^7$.

Use the Product Property, $a^m \cdot a^n = a^{m+n}$:

$$x^5 \cdot x^7 = x^{5+7} = x^{12}$$

{{< fillin
  question="Simplify: $x^7 \cdot x^8$."
  answer="x^{15}"
  hint="The bases match, so add the exponents."
>}}

{{< fillin
  question="Simplify: $x^5 \cdot x^{11}$."
  answer="x^{16}"
  hint="The bases match, so add the exponents."
>}}

**Example.** Simplify: $b^4 \cdot b$.

Rewrite $b$ as $b^1$, then use the Product Property:

$$b^4 \cdot b^1 = b^{4+1} = b^5$$

{{< fillin
  question="Simplify: $p^9 \cdot p$."
  answer="p^{10}"
  hint="A base written without an exponent has an understood exponent of $1$."
>}}

{{< fillin
  question="Simplify: $m \cdot m^7$."
  answer="m^8"
  hint="A base written without an exponent has an understood exponent of $1$."
>}}

**Example.** Simplify: $2^7 \cdot 2^9$.

Use the Product Property, $a^m \cdot a^n = a^{m+n}$:

$$2^7 \cdot 2^9 = 2^{7+9} = 2^{16}$$

{{< fillin
  question="Simplify: $6 \cdot 6^9$."
  answer="6^{10}"
  hint="$6$ is the same as $6^1$. Add the exponents since the base is the same."
>}}

{{< fillin
  question="Simplify: $9^6 \cdot 9^9$."
  answer="9^{15}"
  hint="The bases match, so add the exponents."
>}}

**Example.** Simplify: $y^{17} \cdot y^{23}$.

The bases are the same, so add the exponents:

$$y^{17} \cdot y^{23} = y^{17+23} = y^{40}$$

{{< fillin
  question="Simplify: $y^{24} \cdot y^{19}$."
  answer="y^{43}"
  hint="The bases match, so add the exponents."
>}}

{{< fillin
  question="Simplify: $z^{15} \cdot z^{24}$."
  answer="z^{39}"
  hint="The bases match, so add the exponents."
>}}

We can extend the Product Property of Exponents to more than two factors.

**Example.** Simplify: $x^3 \cdot x^4 \cdot x^2$.

Add the exponents, since the bases are the same:

$$x^3 \cdot x^4 \cdot x^2 = x^{3+4+2} = x^9$$

{{< fillin
  question="Simplify: $x^7 \cdot x^5 \cdot x^9$."
  answer="x^{21}"
  hint="All three bases are the same, so add all three exponents together."
>}}

{{< fillin
  question="Simplify: $y^3 \cdot y^8 \cdot y^4$."
  answer="y^{15}"
  hint="All three bases are the same, so add all three exponents together."
>}}

## Simplify expressions using the Power Property of Exponents

Now let's look at an exponential expression that contains a power raised to
a power. Consider $(x^2)^3$. This means $x^2 \cdot x^2 \cdot x^2$, and each
factor of $x^2$ is itself $x \cdot x$, so there are $6$ factors of $x$
altogether:

$$(x^2)^3 = x^2 \cdot x^2 \cdot x^2 = x^6$$

Notice that $6$ is the product of the exponents, $2$ and $3$: $(x^2)^3$ is
$x^{2 \cdot 3}$, or $x^6$. We multiplied the exponents. This leads to the
Power Property for Exponents.

{{< callout type="info" >}}
  **Power Property of Exponents.** If $a$ is a real number and $m, n$ are
  whole numbers, then

  $$(a^m)^n = a^{m \cdot n}$$

  To raise a power to a power, multiply the exponents.
{{< /callout >}}

An example with numbers helps to verify this property:

$$(5^2)^3 \overset{?}{=} 5^{2 \cdot 3} \qquad\qquad (25)^3 \overset{?}{=} 5^6 \qquad\qquad 15{,}625 = 15{,}625 \checkmark$$

**Example.** Simplify: (a) $(x^5)^7$ (b) $(3^6)^8$.

(a) Use the Power Property, $(a^m)^n = a^{m \cdot n}$: $(x^5)^7 = x^{5 \cdot 7} = x^{35}$.

(b) Use the Power Property: $(3^6)^8 = 3^{6 \cdot 8} = 3^{48}$.

{{< fillin
  question="Simplify: $(x^7)^4$."
  answer="x^{28}"
  hint="To raise a power to a power, multiply the exponents."
>}}

{{< fillin
  question="Simplify: $(7^4)^8$."
  answer="7^{32}"
  hint="To raise a power to a power, multiply the exponents."
>}}

{{< fillin
  question="Simplify: $(x^6)^9$."
  answer="x^{54}"
  hint="To raise a power to a power, multiply the exponents."
>}}

{{< fillin
  question="Simplify: $(8^6)^7$."
  answer="8^{42}"
  hint="To raise a power to a power, multiply the exponents."
>}}

## Simplify expressions using the Product to a Power Property

We will now look at an expression containing a product that is raised to a
power. Consider $(2x)^3$. This means $2x \cdot 2x \cdot 2x$. If we group the
like factors together, we get $2 \cdot 2 \cdot 2 \cdot x \cdot x \cdot x$,
which is $2^3 \cdot x^3$. Notice that each factor was raised to the power:

$$(2x)^3 = 2^3 \cdot x^3$$

The exponent applies to each of the factors. This leads to the Product to a
Power Property for Exponents.

{{< callout type="info" >}}
  **Product to a Power Property of Exponents.** If $a$ and $b$ are real
  numbers and $m$ is a whole number, then

  $$(ab)^m = a^m b^m$$

  To raise a product to a power, raise each factor to that power.
{{< /callout >}}

An example with numbers helps to verify this property:

$$(2 \cdot 3)^2 \overset{?}{=} 2^2 \cdot 3^2 \qquad\qquad 6^2 \overset{?}{=} 4 \cdot 9 \qquad\qquad 36 = 36 \checkmark$$

**Example.** Simplify: $(-11x)^2$.

Use the Power of a Product Property, $(ab)^m = a^m b^m$:

$$(-11x)^2 = (-11)^2 x^2 = 121x^2$$

{{< fillin
  question="Simplify: $(-14x)^2$."
  answer="196x^2"
  answerDisplay="$196x^2$"
  hint="Raise $-14$ and $x$ each to the second power, then simplify the number."
>}}

{{< fillin
  question="Simplify: $(-12a)^2$."
  answer="144a^2"
  answerDisplay="$144a^2$"
  hint="Raise $-12$ and $a$ each to the second power, then simplify the number."
>}}

**Example.** Simplify: $(3xy)^3$.

Raise each factor to the third power, then simplify:

$$(3xy)^3 = 3^3 x^3 y^3 = 27x^3y^3$$

{{< fillin
  question="Simplify: $(-4xy)^4$."
  answer="256x^4y^4"
  answerDisplay="$256x^4y^4$"
  hint="Raise $-4$, $x$, and $y$ each to the fourth power, then simplify the number."
>}}

{{< fillin
  question="Simplify: $(6xy)^3$."
  answer="216x^3y^3"
  answerDisplay="$216x^3y^3$"
  hint="Raise $6$, $x$, and $y$ each to the third power, then simplify the number."
>}}

## Simplify expressions by applying several properties

We now have three properties for multiplying expressions with exponents.
Let's summarize them and then do some examples that use more than one of
the properties.

{{< callout type="info" >}}
  **Properties of Exponents.** If $a, b$ are real numbers and $m, n$ are
  whole numbers, then

  $$\text{Product Property} \qquad a^m \cdot a^n = a^{m+n}$$

  $$\text{Power Property} \qquad (a^m)^n = a^{m \cdot n}$$

  $$\text{Product to a Power Property} \qquad (ab)^m = a^m b^m$$
{{< /callout >}}

**Example.** Simplify: $(x^2)^6 (x^5)^4$.

Use the Power Property, then add the exponents since the bases match:

$$(x^2)^6 (x^5)^4 = x^{12} \cdot x^{20} = x^{32}$$

{{< fillin
  question="Simplify: $(x^4)^3 (x^7)^4$."
  answer="x^{40}"
  hint="Apply the Power Property to each factor first, then add the resulting exponents."
>}}

{{< fillin
  question="Simplify: $(y^9)^2 (y^8)^3$."
  answer="y^{42}"
  hint="Apply the Power Property to each factor first, then add the resulting exponents."
>}}

**Example.** Simplify: $(-7x^3y^4)^2$.

Take each factor to the second power, then use the Power Property:

$$(-7x^3y^4)^2 = (-7)^2 (x^3)^2 (y^4)^2 = 49x^6y^8$$

{{< fillin
  question="Simplify: $(-8x^4y^7)^3$."
  answer="-512x^{12}y^{21}"
  answerDisplay="$-512x^{12}y^{21}$"
  hint="Raise $-8$, $x^4$, and $y^7$ each to the third power, then apply the Power Property to the variable factors."
>}}

{{< fillin
  question="Simplify: $(-3a^5b^6)^4$."
  answer="81a^{20}b^{24}"
  answerDisplay="$81a^{20}b^{24}$"
  hint="Raise $-3$, $a^5$, and $b^6$ each to the fourth power, then apply the Power Property to the variable factors."
>}}

**Example.** Simplify: $(6n)^2(4n^3)$.

Raise $6n$ to the second power, simplify, then use the Commutative Property
to group the constants and like bases together, and finally multiply the
constants and add the exponents:

$$(6n)^2(4n^3) = 6^2 n^2 \cdot 4n^3 = 36n^2 \cdot 4n^3 = 36 \cdot 4 \cdot n^2 \cdot n^3 = 144n^5$$

Notice that in the first monomial, the exponent was outside the parentheses
and it applied to both factors inside. In the second monomial, the exponent
was inside the parentheses and so it only applied to the $n$.

{{< fillin
  question="Simplify: $(7n)^2 (2n^{12})$."
  answer="98n^{14}"
  answerDisplay="$98n^{14}$"
  hint="Raise $7n$ to the second power first, then multiply the resulting constant and combine like bases with the second factor."
>}}

{{< fillin
  question="Simplify: $(4m)^2 (3m^3)$."
  answer="48m^5"
  answerDisplay="$48m^5$"
  hint="Raise $4m$ to the second power first, then multiply the resulting constant and combine like bases with the second factor."
>}}

**Example.** Simplify: $(3p^2q)^4(2pq^2)^3$.

Use the Power of a Product Property on each factor, then the Commutative
Property to group like bases, and finally multiply the constants and add
the exponents for each variable:

$$(3p^2q)^4(2pq^2)^3 = 3^4(p^2)^4 q^4 \cdot 2^3 p^3 (q^2)^3 = 81p^8q^4 \cdot 8p^3q^6 = 81 \cdot 8 \cdot p^8 \cdot p^3 \cdot q^4 \cdot q^6 = 648p^{11}q^{10}$$

{{< fillin
  question="Simplify: $(u^3v^2)^5 (4uv^4)^3$."
  answer="64u^{18}v^{22}"
  answerDisplay="$64u^{18}v^{22}$"
  hint="Apply the Power of a Product Property to each factor separately before combining like bases."
>}}

{{< fillin
  question="Simplify: $(5x^2y^3)^2 (3xy^4)^3$."
  answer="675x^7y^{18}"
  answerDisplay="$675x^7y^{18}$"
  hint="Apply the Power of a Product Property to each factor separately before combining like bases."
>}}

## Multiply monomials

Since a monomial is an algebraic expression, we can use the properties for
simplifying expressions with exponents to multiply monomials.

**Example.** Multiply: $(4x^2)(-5x^3)$.

Use the Commutative Property to rearrange the factors, then multiply:

$$(4x^2)(-5x^3) = 4 \cdot (-5) \cdot x^2 \cdot x^3 = -20x^5$$

{{< fillin
  question="Multiply: $(7x^7)(-8x^4)$."
  answer="-56x^{11}"
  answerDisplay="$-56x^{11}$"
  hint="Multiply the numerical coefficients, then add the exponents on $x$."
>}}

{{< fillin
  question="Multiply: $(-9y^4)(-6y^5)$."
  answer="54y^9"
  answerDisplay="$54y^9$"
  hint="Multiply the numerical coefficients, then add the exponents on $y$."
>}}

**Example.** Multiply: $\left(\tfrac{3}{4}c^3d\right)(12cd^2)$.

Use the Commutative Property to rearrange the factors, then multiply:

$$\left(\tfrac{3}{4}c^3d\right)(12cd^2) = \tfrac{3}{4} \cdot 12 \cdot c^3 \cdot c \cdot d \cdot d^2 = 9c^4d^3$$

{{< fillin
  question="Multiply: $(\tfrac{4}{5} m^4n^3)(15mn^3)$."
  answer="12m^5n^6"
  answerDisplay="$12m^5n^6$"
  hint="Multiply the fraction by the whole-number coefficient first, then add exponents on each matching base."
>}}

{{< fillin
  question="Multiply: $(\tfrac{2}{3} p^5q)(18p^6q^7)$."
  answer="12p^{11}q^8"
  answerDisplay="$12p^{11}q^8$"
  hint="Multiply the fraction by the whole-number coefficient first, then add exponents on each matching base."
>}}

## Key terms

**exponential notation** — writing $a^m$ to mean $m$ factors of $a$
multiplied together. **Product Property of Exponents** — to multiply
expressions with the same base, add the exponents: $a^m \cdot a^n =
a^{m+n}$. **Power Property of Exponents** — to raise a power to a power,
multiply the exponents: $(a^m)^n = a^{m \cdot n}$. **Product to a Power
Property of Exponents** — to raise a product to a power, raise each factor
to that power: $(ab)^m = a^m b^m$. **monomial** — an algebraic expression
with one term, such as a single number, variable, or product of numbers and
variables with whole-number exponents.

---

<small>This section is adapted from [Prealgebra 2e, Section 10.2: Use Multiplication Properties of Exponents](https://openstax.org/books/prealgebra-2e/pages/10-2-use-multiplication-properties-of-exponents) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: omitted the Be Prepared quiz, Self Check checklist, Media links, and end-of-section exercises; condensed the pattern-building tables that derive each property into short prose descriptions; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
