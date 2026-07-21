---
title: Properties of Exponents and Scientific Notation
description: >-
  Simplifying expressions using the properties for exponents, using the
  definition of a negative exponent, and using scientific notation — adapted
  from OpenStax Intermediate Algebra 2e, Section 5.2.
source_section: "5.2"
weight: 2
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** simplify expressions
  using the properties for exponents, use the definition of a negative
  exponent, and use scientific notation.
{{< /callout >}}

## Simplify expressions using the properties for exponents

Remember that an exponent indicates repeated multiplication of the same
quantity. For example, in the expression $a^m$, the exponent $m$ tells us how
many times we use the base $a$ as a factor.

$$a^m = \underbrace{a \cdot a \cdot a \cdots a}_{m \text{ factors}} \qquad (-9)^5 = \underbrace{(-9)(-9)(-9)(-9)(-9)}_{5 \text{ factors}}$$

Let's review the vocabulary for expressions with exponents.

{{< callout type="info" >}}
  **Exponential notation.** In the expression $a^m$, the number $a$ is the
  **base** and $m$ is the **exponent**. It means to multiply $a$ by itself $m$
  times, $a^m = \underbrace{a \cdot a \cdots a}_{m \text{ factors}}$. This is
  read $a$ to the $m^{\text{th}}$ power.
{{< /callout >}}

When we combine like terms by adding and subtracting, we need to have the same
base with the same exponent. But when you multiply and divide, the exponents
may be different, and sometimes the bases may be different, too.

First, we will look at an example that leads to the **Product Property**.
Consider $x^2 \cdot x^3$. What does this mean?

$$x^2 \cdot x^3 = \underbrace{x \cdot x}_{2 \text{ factors}} \cdot \underbrace{x \cdot x \cdot x}_{3 \text{ factors}} = x^5$$

Notice that $5$ is the sum of the exponents, $2$ and $3$. We see $x^2 \cdot x^3$
is $x^{2+3}$, or $x^5$. The base stayed the same and we added the exponents.
This leads to the Product Property for Exponents.

{{< callout type="info" >}}
  **Product Property for Exponents.** If $a$ is a real number and $m$ and $n$
  are integers, then

  $$a^m \cdot a^n = a^{m+n}.$$

  To multiply with like bases, add the exponents.
{{< /callout >}}

**Example.** Simplify each expression: (a) $y^5 \cdot y^6$ (b)
$2^x \cdot 2^{3x}$ (c) $2a^7 \cdot 3a$ (d) $d^4 \cdot d^5 \cdot d^2$.

(a)

$$
\begin{array}{lrcl}
&&& y^5 \cdot y^6 \\[4pt]
\text{Use the Product Property, } a^m \cdot a^n = a^{m+n}. &&& y^{5+6} \\[4pt]
\text{Simplify.} &&& y^{11}
\end{array}
$$

(b)

$$
\begin{array}{lrcl}
&&& 2^x \cdot 2^{3x} \\[4pt]
\text{Use the Product Property.} &&& 2^{x+3x} \\[4pt]
\text{Simplify.} &&& 2^{4x}
\end{array}
$$

(c)

$$
\begin{array}{lrcl}
&&& 2a^7 \cdot 3a \\[4pt]
\text{Rewrite, } a = a^1. &&& 2a^7 \cdot 3a^1 \\[4pt]
\text{Use the Commutative Property and the Product Property.} &&& 2 \cdot 3 \cdot a^{7+1} \\[4pt]
\text{Simplify.} &&& 6a^8
\end{array}
$$

(d)

$$
\begin{array}{lrcl}
&&& d^4 \cdot d^5 \cdot d^2 \\[4pt]
\text{Add the exponents, since bases are the same.} &&& d^{4+5+2} \\[4pt]
\text{Simplify.} &&& d^{11}
\end{array}
$$

{{< fillin
  question="Simplify: $b^9 \cdot b^8$."
  answer="b^{17}"
  answerDisplay="$b^{17}$"
  hint="Same base — add the exponents: $9+8$."
>}}

{{< fillin
  question="Simplify: $3p^5 \cdot 4p$."
  answer="12p^6"
  answerDisplay="$12p^6$"
  hint="Multiply the coefficients and add the exponents; remember $p = p^1$."
>}}

Now we will look at an exponent property for division. As before, we'll try to
discover a property by looking at some examples. Consider $\tfrac{x^5}{x^2}$ and
$\tfrac{x^2}{x^3}$.

$$\frac{x^5}{x^2} = \frac{x \cdot x \cdot x \cdot x \cdot x}{x \cdot x} = x^3 \qquad \frac{x^2}{x^3} = \frac{x \cdot x}{x \cdot x \cdot x} = \frac{1}{x}$$

Notice, in each case the bases were the same and we subtracted the exponents.
We see $\tfrac{x^5}{x^2}$ is $x^{5-2}$ or $x^3$. When the larger exponent was in
the numerator, we were left with factors in the numerator. We see
$\tfrac{x^2}{x^3}$ is $\tfrac{1}{x}$; when the larger exponent was in the
denominator, we were left with factors in the denominator. This leads to the
**Quotient Property** for Exponents.

{{< callout type="info" >}}
  **Quotient Property for Exponents.** If $a$ is a real number, $a \neq 0$, and
  $m$ and $n$ are integers, then

  $$\frac{a^m}{a^n} = a^{m-n},\ m > n \qquad \text{and} \qquad \frac{a^m}{a^n} = \frac{1}{a^{n-m}},\ n > m.$$
{{< /callout >}}

**Example.** Simplify each expression: (a) $\tfrac{x^9}{x^7}$ (b)
$\tfrac{3^{10}}{3^2}$ (c) $\tfrac{b^8}{b^{12}}$ (d) $\tfrac{7^3}{7^5}$.

To simplify an expression with a quotient, we need to first compare the
exponents in the numerator and denominator.

(a) Since $9 > 7$, there are more factors of $x$ in the numerator.

$$
\begin{array}{lrcl}
&&& \tfrac{x^9}{x^7} \\[10pt]
\text{Use the Quotient Property, } \tfrac{a^m}{a^n} = a^{m-n}. &&& x^{9-7} \\[10pt]
\text{Simplify.} &&& x^2
\end{array}
$$

(b) Since $10 > 2$, there are more factors of $3$ in the numerator.

$$
\begin{array}{lrcl}
&&& \tfrac{3^{10}}{3^2} \\[10pt]
\text{Use the Quotient Property, } \tfrac{a^m}{a^n} = a^{m-n}. &&& 3^{10-2} \\[10pt]
\text{Simplify.} &&& 3^8
\end{array}
$$

(c) Since $12 > 8$, there are more factors of $b$ in the denominator.

$$
\begin{array}{lrcl}
&&& \tfrac{b^8}{b^{12}} \\[10pt]
\text{Use the Quotient Property, } \tfrac{a^m}{a^n} = \tfrac{1}{a^{n-m}}. &&& \tfrac{1}{b^{12-8}} \\[10pt]
\text{Simplify.} &&& \tfrac{1}{b^4}
\end{array}
$$

(d) Since $5 > 3$, there are more factors of $7$ in the denominator.

$$
\begin{array}{lrcl}
&&& \tfrac{7^3}{7^5} \\[10pt]
\text{Use the Quotient Property, } \tfrac{a^m}{a^n} = \tfrac{1}{a^{n-m}}. &&& \tfrac{1}{7^{5-3}} \\[10pt]
\text{Simplify.} &&& \tfrac{1}{7^2} = \tfrac{1}{49}
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{x^{15}}{x^{10}}$."
  answer="x^5"
  answerDisplay="$x^5$"
  hint="The larger exponent is in the numerator, so subtract: $15-10$."
>}}

{{< fillin
  question="Simplify: $\tfrac{12^{15}}{12^{30}}$. Enter your answer with a positive exponent."
  answer="\frac{1}{12^{15}}"
  answerDisplay="$\tfrac{1}{12^{15}}$"
  hint="The larger exponent is in the denominator, so the result is $\tfrac{1}{12^{30-15}}$."
>}}

A special case of the Quotient Property is when the exponents of the numerator
and denominator are equal, such as an expression like $\tfrac{a^m}{a^m}$. We
know $\tfrac{x}{x} = 1$, for any $x$ ($x \neq 0$) since any number divided by
itself is $1$. The Quotient Property tells us that $\tfrac{a^m}{a^m}$
simplifies to $a^0$ and to $1$. So $a^0 = 1$. Any non-zero base raised to the
power of zero equals $1$.

{{< callout type="info" >}}
  **Zero Exponent Property.** If $a$ is a non-zero number, then $a^0 = 1$. Any
  non-zero number raised to the zero power is $1$.
{{< /callout >}}

In this text, we assume any variable that we raise to the zero power is not
zero.

**Example.** Simplify each expression: (a) $9^0$ (b) $n^0$.

The definition says any non-zero number raised to the zero power is $1$.

$$
\begin{array}{lrcl}
\text{(a)} & 9^0 &=& 1 \\[4pt]
\text{(b)} & n^0 &=& 1
\end{array}
$$

{{< fillin
  question="Simplify: $11^0$."
  answer="1"
  hint="Any non-zero number raised to the zero power is $1$."
>}}

{{< fillin
  question="Simplify: $q^0$ (assume $q \neq 0$)."
  answer="1"
  hint="Any non-zero base raised to the zero power is $1$."
>}}

## Use the definition of a negative exponent

We saw that the Quotient Property for Exponents has two forms depending on
whether the exponent is larger in the numerator or the denominator. What if we
just subtract exponents regardless of which is larger?

Let's consider $\tfrac{x^2}{x^5}$. We subtract the exponent in the denominator
from the exponent in the numerator. We see $\tfrac{x^2}{x^5}$ is $x^{2-5}$ or
$x^{-3}$. We can also simplify $\tfrac{x^2}{x^5}$ by dividing out common
factors:

$$\frac{x^2}{x^5} = \frac{x \cdot x}{x \cdot x \cdot x \cdot x \cdot x} = \frac{1}{x^3}$$

This implies that $x^{-3} = \tfrac{1}{x^3}$ and it leads to the definition of a
*negative exponent*. If $n$ is an integer and $a \neq 0$, then
$a^{-n} = \tfrac{1}{a^n}$.

Let's now look at what happens to a fraction whose numerator is one and whose
denominator is an integer raised to a negative exponent.

$$
\begin{array}{lrcl}
&&& \tfrac{1}{a^{-n}} \\[10pt]
\text{Use the definition of a negative exponent, } a^{-n} = \tfrac{1}{a^n}. &&& \tfrac{1}{\ \tfrac{1}{a^n}\ } \\[12pt]
\text{Simplify the complex fraction.} &&& 1 \cdot \tfrac{a^n}{1} \\[10pt]
\text{Multiply.} &&& a^n
\end{array}
$$

This implies $\tfrac{1}{a^{-n}} = a^n$ and is another form of the definition of
**Properties of Negative Exponents**.

{{< callout type="info" >}}
  **Properties of Negative Exponents.** If $n$ is an integer and $a \neq 0$,
  then

  $$a^{-n} = \frac{1}{a^n} \qquad \text{or} \qquad \frac{1}{a^{-n}} = a^n.$$
{{< /callout >}}

The negative exponent tells us we can rewrite the expression by taking the
reciprocal of the base and then changing the sign of the exponent.

Any expression that has negative exponents is not considered to be in simplest
form. We will use the definition of a negative exponent and other properties of
exponents to write the expression with only positive exponents.

**Example.** Simplify each expression: (a) $x^{-5}$ (b) $10^{-3}$ (c)
$\tfrac{1}{y^{-4}}$ (d) $\tfrac{1}{3^{-2}}$.

(a)

$$
\begin{array}{lrcl}
&&& x^{-5} \\[6pt]
\text{Use the definition of a negative exponent, } a^{-n} = \tfrac{1}{a^n}. &&& \tfrac{1}{x^5}
\end{array}
$$

(b)

$$
\begin{array}{lrcl}
&&& 10^{-3} \\[6pt]
\text{Use the definition of a negative exponent, } a^{-n} = \tfrac{1}{a^n}. &&& \tfrac{1}{10^3} \\[10pt]
\text{Simplify.} &&& \tfrac{1}{1000}
\end{array}
$$

(c)

$$
\begin{array}{lrcl}
&&& \tfrac{1}{y^{-4}} \\[10pt]
\text{Use the property of a negative exponent, } \tfrac{1}{a^{-n}} = a^n. &&& y^4
\end{array}
$$

(d)

$$
\begin{array}{lrcl}
&&& \tfrac{1}{3^{-2}} \\[10pt]
\text{Use the property of a negative exponent, } \tfrac{1}{a^{-n}} = a^n. &&& 3^2 \\[6pt]
\text{Simplify.} &&& 9
\end{array}
$$

{{< fillin
  question="Simplify: $z^{-3}$. Write your answer with a positive exponent."
  answer="\frac{1}{z^3}"
  answerDisplay="$\tfrac{1}{z^3}$"
  hint="Use $a^{-n} = \tfrac{1}{a^n}$."
>}}

{{< fillin
  question="Simplify: $\tfrac{1}{p^{-8}}$. Write your answer with a positive exponent."
  answer="p^8"
  answerDisplay="$p^8$"
  hint="Use $\tfrac{1}{a^{-n}} = a^n$."
>}}

Suppose now we have a fraction raised to a negative exponent. Let's use our
definition of negative exponents to lead us to a new property.

$$
\begin{array}{lrcl}
&&& \left(\tfrac{3}{4}\right)^{-2} \\[12pt]
\text{Use the definition of a negative exponent, } a^{-n} = \tfrac{1}{a^n}. &&& \tfrac{1}{\left(\tfrac{3}{4}\right)^2} \\[14pt]
\text{Simplify the denominator.} &&& \tfrac{1}{\ \tfrac{9}{16}\ } \\[12pt]
\text{Simplify the complex fraction.} &&& \tfrac{16}{9} \\[10pt]
\text{But we know that } \tfrac{16}{9} \text{ is } \left(\tfrac{4}{3}\right)^2. &&& \left(\tfrac{4}{3}\right)^2
\end{array}
$$

This tells us that $\left(\tfrac{3}{4}\right)^{-2} = \left(\tfrac{4}{3}\right)^2$.
To get from the original fraction raised to a negative exponent to the final
result, we took the reciprocal of the base — the fraction — and changed the
sign of the exponent. This leads us to the **Quotient to a Negative Power
Property**.

{{< callout type="info" >}}
  **Quotient to a Negative Power Property.** If $a$ and $b$ are real numbers,
  $a \neq 0$, $b \neq 0$ and $n$ is an integer, then

  $$\left(\frac{a}{b}\right)^{-n} = \left(\frac{b}{a}\right)^n.$$
{{< /callout >}}

**Example.** Simplify each expression: (a) $\left(\tfrac{5}{7}\right)^{-2}$
(b) $\left(-\tfrac{x}{y}\right)^{-3}$.

(a)

$$
\begin{array}{lrcl}
&&& \left(\tfrac{5}{7}\right)^{-2} \\[12pt]
\text{Take the reciprocal and change the sign of the exponent.} &&& \left(\tfrac{7}{5}\right)^2 \\[12pt]
\text{Simplify.} &&& \tfrac{49}{25}
\end{array}
$$

(b)

$$
\begin{array}{lrcl}
&&& \left(-\tfrac{x}{y}\right)^{-3} \\[12pt]
\text{Take the reciprocal and change the sign of the exponent.} &&& \left(-\tfrac{y}{x}\right)^3 \\[12pt]
\text{Simplify.} &&& -\tfrac{y^3}{x^3}
\end{array}
$$

{{< fillin
  question="Simplify: $\left(\tfrac{2}{3}\right)^{-4}$."
  answer="\frac{81}{16}"
  answerDisplay="$\tfrac{81}{16}$"
  hint="Take the reciprocal and change the sign of the exponent: $\left(\tfrac{3}{2}\right)^4$."
>}}

{{< fillin
  question="Simplify: $\left(\tfrac{3}{5}\right)^{-3}$."
  answer="\frac{125}{27}"
  answerDisplay="$\tfrac{125}{27}$"
  hint="Take the reciprocal and change the sign of the exponent: $\left(\tfrac{5}{3}\right)^3$."
>}}

Now that we have negative exponents, we will use the Product Property with
expressions that have negative exponents.

**Example.** Simplify each expression: (a) $z^{-5} \cdot z^{-3}$ (b)
$(m^4 n^{-3})(m^{-5} n^{-2})$ (c) $(2x^{-6}y^8)(-5x^5y^{-3})$.

(a)

$$
\begin{array}{lrcl}
&&& z^{-5} \cdot z^{-3} \\[4pt]
\text{Add the exponents, since the bases are the same.} &&& z^{-5-3} \\[4pt]
\text{Simplify.} &&& z^{-8} \\[4pt]
\text{Use the definition of a negative exponent.} &&& \tfrac{1}{z^8}
\end{array}
$$

(b)

$$
\begin{array}{lrcl}
&&& (m^4 n^{-3})(m^{-5} n^{-2}) \\[4pt]
\text{Use the Commutative Property to get like bases together.} &&& m^4 m^{-5} \cdot n^{-2} n^{-3} \\[4pt]
\text{Add the exponents for each base.} &&& m^{-1} \cdot n^{-5} \\[4pt]
\text{Take reciprocals and change the signs of the exponents.} &&& \tfrac{1}{m^1} \cdot \tfrac{1}{n^5} \\[10pt]
\text{Simplify.} &&& \tfrac{1}{mn^5}
\end{array}
$$

(c)

$$
\begin{array}{lrcl}
&&& (2x^{-6}y^8)(-5x^5y^{-3}) \\[4pt]
\text{Rewrite with the like bases together.} &&& 2(-5) \cdot (x^{-6}x^5) \cdot (y^8 y^{-3}) \\[4pt]
\text{Multiply the coefficients and add the exponents of each variable.} &&& -10 \cdot x^{-1} \cdot y^5 \\[4pt]
\text{Use the definition of a negative exponent, } a^{-n} = \tfrac{1}{a^n}. &&& -10 \cdot \tfrac{1}{x} \cdot y^5 \\[10pt]
\text{Simplify.} &&& \tfrac{-10y^5}{x}
\end{array}
$$

{{< fillin
  question="Simplify: $z^{-4} \cdot z^{-5}$. Write your answer with a positive exponent."
  answer="\frac{1}{z^9}"
  answerDisplay="$\tfrac{1}{z^9}$"
  hint="Add the exponents, then rewrite with a positive exponent."
>}}

{{< fillin
  question="Simplify: $(3u^{-5}v^7)(-4u^4v^{-2})$. Write your answer with positive exponents."
  answer="\frac{-12v^5}{u}"
  answerDisplay="$\tfrac{-12v^5}{u}$"
  hint="Multiply the coefficients, add the exponents of each variable, then rewrite negative exponents as positive."
>}}

Now let's look at an exponential expression that contains a power raised to a
power. Consider $(x^2)^3$.

$$(x^2)^3 = x^2 \cdot x^2 \cdot x^2 = x^6$$

Notice the $6$ is the *product* of the exponents, $2$ and $3$. We see that
$(x^2)^3$ is $x^{2 \cdot 3}$ or $x^6$. We multiplied the exponents. This leads
to the **Power Property for Exponents**.

{{< callout type="info" >}}
  **Power Property for Exponents.** If $a$ is a real number and $m$ and $n$ are
  integers, then

  $$(a^m)^n = a^{m \cdot n}.$$

  To raise a power to a power, multiply the exponents.
{{< /callout >}}

**Example.** Simplify each expression: (a) $(y^5)^9$ (b) $(4^4)^7$ (c)
$(y^3)^6 (y^5)^4$.

(a)

$$
\begin{array}{lrcl}
&&& (y^5)^9 \\[4pt]
\text{Use the Power Property, } (a^m)^n = a^{m \cdot n}. &&& y^{5 \cdot 9} \\[4pt]
\text{Simplify.} &&& y^{45}
\end{array}
$$

(b)

$$
\begin{array}{lrcl}
&&& (4^4)^7 \\[4pt]
\text{Use the Power Property.} &&& 4^{4 \cdot 7} \\[4pt]
\text{Simplify.} &&& 4^{28}
\end{array}
$$

(c)

$$
\begin{array}{lrcl}
&&& (y^3)^6 (y^5)^4 \\[4pt]
\text{Use the Power Property.} &&& y^{18} \cdot y^{20} \\[4pt]
\text{Add the exponents.} &&& y^{38}
\end{array}
$$

{{< fillin
  question="Simplify: $(b^7)^5$."
  answer="b^{35}"
  answerDisplay="$b^{35}$"
  hint="Raise a power to a power — multiply the exponents: $7 \cdot 5$."
>}}

{{< fillin
  question="Simplify: $(a^4)^5 (a^7)^4$."
  answer="a^{48}"
  answerDisplay="$a^{48}$"
  hint="Multiply the exponents in each factor, then add: $20 + 28$."
>}}

We will now look at an expression containing a product that is raised to a
power. Consider $(2x)^3$.

$$(2x)^3 = 2x \cdot 2x \cdot 2x = 2 \cdot 2 \cdot 2 \cdot x \cdot x \cdot x = 2^3 \cdot x^3$$

Notice that each factor was raised to the power and $(2x)^3$ is $2^3 \cdot x^3$.
The exponent applies to each of the factors. This leads to the **Product to a
Power Property for Exponents**.

{{< callout type="info" >}}
  **Product to a Power Property for Exponents.** If $a$ and $b$ are real
  numbers and $m$ is a whole number, then

  $$(ab)^m = a^m b^m.$$

  To raise a product to a power, raise each factor to that power.
{{< /callout >}}

**Example.** Simplify each expression: (a) $(-3mn)^3$ (b) $(-4a^2b)^0$ (c)
$(6k^3)^{-2}$ (d) $(5x^{-3})^2$.

(a)

$$
\begin{array}{lrcl}
&&& (-3mn)^3 \\[4pt]
\text{Use the Product to a Power Property, } (ab)^m = a^m b^m. &&& (-3)^3 m^3 n^3 \\[4pt]
\text{Simplify.} &&& -27m^3 n^3
\end{array}
$$

(b)

$$
\begin{array}{lrcl}
&&& (-4a^2 b)^0 \\[4pt]
\text{Use the Product to a Power Property, } (ab)^m = a^m b^m. &&& (-4)^0 (a^2)^0 (b)^0 \\[4pt]
\text{Simplify.} &&& 1 \cdot 1 \cdot 1 \\[4pt]
\text{Multiply.} &&& 1
\end{array}
$$

(c)

$$
\begin{array}{lrcl}
&&& (6k^3)^{-2} \\[4pt]
\text{Use the Product to a Power Property, } (ab)^m = a^m b^m. &&& (6)^{-2} (k^3)^{-2} \\[4pt]
\text{Use the Power Property, } (a^m)^n = a^{m \cdot n}. &&& 6^{-2} k^{-6} \\[4pt]
\text{Use the definition of a negative exponent, } a^{-n} = \tfrac{1}{a^n}. &&& \tfrac{1}{6^2} \cdot \tfrac{1}{k^6} \\[10pt]
\text{Simplify.} &&& \tfrac{1}{36k^6}
\end{array}
$$

(d)

$$
\begin{array}{lrcl}
&&& (5x^{-3})^2 \\[4pt]
\text{Use the Product to a Power Property, } (ab)^m = a^m b^m. &&& 5^2 (x^{-3})^2 \\[4pt]
\text{Simplify.} &&& 25 \cdot x^{-6} \\[4pt]
\text{Rewrite } x^{-6} \text{ using } a^{-n} = \tfrac{1}{a^n}. &&& 25 \cdot \tfrac{1}{x^6} \\[10pt]
\text{Simplify.} &&& \tfrac{25}{x^6}
\end{array}
$$

{{< fillin
  question="Simplify: $(2wx)^5$."
  answer="32w^5x^5"
  answerDisplay="$32w^5x^5$"
  hint="Raise each factor to the fifth power; $2^5 = 32$."
>}}

{{< fillin
  question="Simplify: $(8a^{-4})^2$. Write your answer with a positive exponent."
  answer="\frac{64}{a^8}"
  answerDisplay="$\tfrac{64}{a^8}$"
  hint="Raise each factor to the power, then rewrite the negative exponent as positive: $8^2 = 64$."
>}}

Now we will look at an example that will lead us to the **Quotient to a Power
Property**. Consider $\left(\tfrac{x}{y}\right)^3$.

$$\left(\frac{x}{y}\right)^3 = \frac{x}{y} \cdot \frac{x}{y} \cdot \frac{x}{y} = \frac{x \cdot x \cdot x}{y \cdot y \cdot y} = \frac{x^3}{y^3}$$

Notice that the exponent applies to both the numerator and the denominator. We
see that $\left(\tfrac{x}{y}\right)^3$ is $\tfrac{x^3}{y^3}$. This leads to the
**Quotient to a Power Property for Exponents**.

{{< callout type="info" >}}
  **Quotient to a Power Property for Exponents.** If $a$ and $b$ are real
  numbers, $b \neq 0$, and $m$ is an integer, then

  $$\left(\frac{a}{b}\right)^m = \frac{a^m}{b^m}.$$

  To raise a fraction to a power, raise the numerator and denominator to that
  power.
{{< /callout >}}

**Example.** Simplify each expression: (a) $\left(\tfrac{b}{3}\right)^4$ (b)
$\left(\tfrac{k}{j}\right)^{-3}$ (c) $\left(\tfrac{2xy^2}{z}\right)^3$ (d)
$\left(\tfrac{4p^{-3}}{q^2}\right)^2$.

(a)

$$
\begin{array}{lrcl}
&&& \left(\tfrac{b}{3}\right)^4 \\[12pt]
\text{Use the Quotient to a Power Property, } \left(\tfrac{a}{b}\right)^m = \tfrac{a^m}{b^m}. &&& \tfrac{b^4}{3^4} \\[12pt]
\text{Simplify.} &&& \tfrac{b^4}{81}
\end{array}
$$

(b)

$$
\begin{array}{lrcl}
&&& \left(\tfrac{k}{j}\right)^{-3} \\[12pt]
\text{Raise the numerator and denominator to the power.} &&& \tfrac{k^{-3}}{j^{-3}} \\[12pt]
\text{Use the definition of a negative exponent.} &&& \tfrac{1}{k^3} \cdot \tfrac{j^3}{1} \\[10pt]
\text{Multiply.} &&& \tfrac{j^3}{k^3}
\end{array}
$$

(c)

$$
\begin{array}{lrcl}
&&& \left(\tfrac{2xy^2}{z}\right)^3 \\[12pt]
\text{Use the Quotient to a Power Property.} &&& \tfrac{(2xy^2)^3}{z^3} \\[12pt]
\text{Use the Product to a Power Property, } (ab)^m = a^m b^m. &&& \tfrac{8x^3 y^6}{z^3}
\end{array}
$$

(d)

$$
\begin{array}{lrcl}
&&& \left(\tfrac{4p^{-3}}{q^2}\right)^2 \\[12pt]
\text{Use the Quotient to a Power Property.} &&& \tfrac{(4p^{-3})^2}{(q^2)^2} \\[12pt]
\text{Use the Product to a Power Property.} &&& \tfrac{4^2 (p^{-3})^2}{(q^2)^2} \\[12pt]
\text{Simplify using the Power Property.} &&& \tfrac{16p^{-6}}{q^4} \\[12pt]
\text{Use the definition of a negative exponent.} &&& \tfrac{16}{q^4} \cdot \tfrac{1}{p^6} \\[10pt]
\text{Simplify.} &&& \tfrac{16}{p^6 q^4}
\end{array}
$$

{{< fillin
  question="Simplify: $\left(\tfrac{p}{10}\right)^4$."
  answer="\frac{p^4}{10000}"
  answerDisplay="$\tfrac{p^4}{10{,}000}$"
  hint="Raise the numerator and denominator to the fourth power; $10^4 = 10{,}000$."
>}}

{{< fillin
  question="Simplify: $\left(\tfrac{m}{n}\right)^{-7}$. Write your answer with positive exponents."
  answer="\frac{n^7}{m^7}"
  answerDisplay="$\tfrac{n^7}{m^7}$"
  hint="Take the reciprocal of the base and change the sign of the exponent, then raise to the power."
>}}

We now have several properties for exponents. Let's summarize them.

{{< callout type="info" >}}
  **Summary of Exponent Properties.** If $a$ and $b$ are real numbers, and $m$
  and $n$ are integers, then

  | Property | Description |
  | :--- | :--- |
  | Product Property | $a^m \cdot a^n = a^{m+n}$ |
  | Power Property | $(a^m)^n = a^{m \cdot n}$ |
  | Product to a Power | $(ab)^m = a^m b^m$ |
  | Quotient Property | $\tfrac{a^m}{a^n} = a^{m-n},\ a \neq 0$ |
  | Zero Exponent Property | $a^0 = 1,\ a \neq 0$ |
  | Quotient to a Power Property | $\left(\tfrac{a}{b}\right)^m = \tfrac{a^m}{b^m},\ b \neq 0$ |
  | Properties of Negative Exponents | $a^{-n} = \tfrac{1}{a^n}$ and $\tfrac{1}{a^{-n}} = a^n$ |
  | Quotient to a Negative Exponent | $\left(\tfrac{a}{b}\right)^{-n} = \left(\tfrac{b}{a}\right)^n$ |
{{< /callout >}}

Let's do some more examples that use more than one of the properties.

**Example.** Simplify each expression by applying several properties: (a)
$(3x^2 y)^4 (2xy^2)^3$ (b) $\tfrac{(x^3)^4 (x^{-2})^5}{(x^6)^5}$ (c)
$\left(\tfrac{2xy^2}{x^3 y^{-2}}\right)^2 \left(\tfrac{12xy^3}{x^3 y^{-1}}\right)^{-1}$.

(a)

$$
\begin{array}{lrcl}
&&& (3x^2 y)^4 (2xy^2)^3 \\[4pt]
\text{Use the Product to a Power Property, } (ab)^m = a^m b^m. &&& (3^4 x^8 y^4)(2^3 x^3 y^6) \\[4pt]
\text{Simplify.} &&& (81x^8 y^4)(8x^3 y^6) \\[4pt]
\text{Use the Commutative Property.} &&& 81 \cdot 8 \cdot x^8 \cdot x^3 \cdot y^4 \cdot y^6 \\[4pt]
\text{Multiply the constants and add the exponents.} &&& 648x^{11} y^{10}
\end{array}
$$

(b)

$$
\begin{array}{lrcl}
&&& \tfrac{(x^3)^4 (x^{-2})^5}{(x^6)^5} \\[12pt]
\text{Use the Power Property, } (a^m)^n = a^{m \cdot n}. &&& \tfrac{(x^{12})(x^{-10})}{(x^{30})} \\[12pt]
\text{Add the exponents in the numerator.} &&& \tfrac{x^2}{x^{30}} \\[12pt]
\text{Use the Quotient Property, } \tfrac{a^m}{a^n} = \tfrac{1}{a^{n-m}}. &&& \tfrac{1}{x^{28}}
\end{array}
$$

(c)

$$
\begin{array}{lrcl}
&&& \left(\tfrac{2xy^2}{x^3 y^{-2}}\right)^2 \left(\tfrac{12xy^3}{x^3 y^{-1}}\right)^{-1} \\[14pt]
\text{Simplify inside the parentheses first.} &&& \left(\tfrac{2y^4}{x^2}\right)^2 \left(\tfrac{12y^4}{x^2}\right)^{-1} \\[14pt]
\text{Use the Quotient to a Power Property.} &&& \tfrac{(2y^4)^2}{(x^2)^2} \cdot \tfrac{(12y^4)^{-1}}{(x^2)^{-1}} \\[14pt]
\text{Use the Product to a Power Property.} &&& \tfrac{4y^8}{x^4} \cdot \tfrac{12^{-1} y^{-4}}{x^{-2}} \\[14pt]
\text{Simplify.} &&& \tfrac{4y^4}{12x^2} \\[12pt]
\text{Simplify.} &&& \tfrac{y^4}{3x^2}
\end{array}
$$

{{< fillin
  question="Simplify: $(c^4 d^2)^5 (3cd^5)^4$."
  answer="81c^{24}d^{30}"
  answerDisplay="$81c^{24}d^{30}$"
  hint="Raise each factor to its power, then multiply the constants and add the exponents of each variable."
>}}

{{< fillin
  question="Simplify: $\tfrac{(a^{-2})^3 (a^2)^4}{(a^4)^5}$. Write your answer with a positive exponent."
  answer="\frac{1}{a^{18}}"
  answerDisplay="$\tfrac{1}{a^{18}}$"
  hint="Use the Power Property throughout: numerator becomes $a^{-6} \cdot a^8 = a^2$, denominator $a^{20}$."
>}}

## Use scientific notation

Working with very large or very small numbers can be awkward. Since our number
system is base ten we can use powers of ten to rewrite very large or very small
numbers to make them easier to work with. Consider the numbers $4{,}000$ and
$0.004$.

Using place value, we can rewrite the numbers $4{,}000$ and $0.004$. We know
that $4{,}000$ means $4 \times 1{,}000$ and $0.004$ means
$4 \times \tfrac{1}{1{,}000}$. If we write the $1{,}000$ as a power of ten in
exponential form, we can rewrite these numbers in this way:

$$4{,}000 = 4 \times 1{,}000 = 4 \times 10^3 \qquad 0.004 = 4 \times \frac{1}{1{,}000} = 4 \times \frac{1}{10^3} = 4 \times 10^{-3}$$

When a number is written as a product of two numbers, where the first factor is
a number greater than or equal to one but less than ten, and the second factor
is a power of $10$ written in exponential form, it is said to be in **scientific
notation**.

{{< callout type="info" >}}
  **Scientific notation.** A number is expressed in **scientific notation** when
  it is of the form

  $$a \times 10^n \quad \text{where } 1 \le |a| < 10 \text{ and } n \text{ is an integer}.$$
{{< /callout >}}

It is customary in scientific notation to use the $\times$ multiplication sign,
even though we avoid using this sign elsewhere in algebra.

If we look at what happened to the decimal point, we can see a method to easily
convert from decimal notation to scientific notation. In both cases, the
decimal was moved $3$ places to get the first factor between $1$ and $10$. The
power of $10$ is positive when the number is larger than $1$:
$4{,}000 = 4 \times 10^3$. The power of $10$ is negative when the number is
between $0$ and $1$: $0.004 = 4 \times 10^{-3}$.

{{< callout type="info" >}}
  **How to convert a decimal to scientific notation.** Step 1. Move the decimal
  point so that the first factor is greater than or equal to $1$ but less than
  $10$. Step 2. Count the number of decimal places, $n$, that the decimal point
  was moved. Step 3. Write the number as a product with a power of $10$. If the
  original number is greater than $1$, the power of $10$ will be $10^n$; if it
  is between $0$ and $1$, the power of $10$ will be $10^{-n}$. Step 4. Check.
{{< /callout >}}

**Example.** Write in scientific notation: (a) $37{,}000$ (b) $0.0052$.

(a) The original number, $37{,}000$, is greater than $1$ so we will have a
positive power of $10$. Move the decimal point to get $3.7$, a number between
$1$ and $10$. The decimal point was moved $4$ places to the left, so
$37{,}000 = 3.7 \times 10^4$. Check: $3.7 \times 10^4 = 3.7 \times 10{,}000 = 37{,}000$. ✓

(b) The original number, $0.0052$, is between $0$ and $1$ so we will have a
negative power of $10$. Move the decimal point to get $5.2$, a number between
$1$ and $10$. The decimal point was moved $3$ places to the right, so
$0.0052 = 5.2 \times 10^{-3}$. Check:
$5.2 \times 10^{-3} = 5.2 \times \tfrac{1}{1000} = 5.2 \times 0.001 = 0.0052$. ✓

{{< fillin
  question="Write $96{,}000$ in scientific notation. Enter the first factor (the number between 1 and 10)."
  answer="9.6"
  hint="Move the decimal to get a number between $1$ and $10$: $9.6$. The power of ten is $10^4$."
>}}

{{< fillin
  question="Write $0.0078$ in scientific notation. Enter the exponent on 10 (a negative integer)."
  answer="-3"
  hint="The number is between $0$ and $1$, and the decimal moves $3$ places to the right, so the exponent is $-3$."
>}}

How can we convert from scientific notation to decimal form? If we look at two
numbers written in scientific notation, $9.12 \times 10^4$ and
$9.12 \times 10^{-4}$, we see that
$9.12 \times 10^4 = 9.12 \times 10{,}000 = 91{,}200$ and
$9.12 \times 10^{-4} = 9.12 \times 0.0001 = 0.000912$. In both cases the decimal
point moved $4$ places. When the exponent was positive, the decimal moved to
the right; when the exponent was negative, the decimal point moved to the left.

{{< callout type="info" >}}
  **How to convert scientific notation to decimal form.** Step 1. Determine the
  exponent, $n$, on the factor $10$. Step 2. Move the decimal $n$ places,
  adding zeros if needed. If the exponent is positive, move the decimal point
  $n$ places to the right; if the exponent is negative, move the decimal point
  $|n|$ places to the left. Step 3. Check.
{{< /callout >}}

**Example.** Convert to decimal form: (a) $6.2 \times 10^3$ (b)
$-8.9 \times 10^{-2}$.

(a) The exponent is $3$. Since the exponent is positive, move the decimal point
$3$ places to the right, adding zeros as needed for placeholders:
$6.2 \times 10^3 = 6{,}200$.

(b) The exponent is $-2$. Since the exponent is negative, move the decimal
point $2$ places to the left, adding zeros as needed for placeholders:
$-8.9 \times 10^{-2} = -0.089$.

{{< fillin
  question="Convert to decimal form: $1.3 \times 10^3$."
  answer="1300"
  answerDisplay="$1{,}300$"
  hint="The exponent is positive, so move the decimal $3$ places to the right."
>}}

{{< fillin
  question="Convert to decimal form: $7.5 \times 10^{-2}$."
  answer="0.075"
  hint="The exponent is $-2$, so move the decimal $2$ places to the left."
>}}

When scientists perform calculations with very large or very small numbers,
they use scientific notation. Scientific notation provides a way for the
calculations to be done without writing a lot of zeros. We will see how the
Properties of Exponents are used to multiply and divide numbers in scientific
notation.

**Example.** Multiply or divide as indicated. Write answers in decimal form:
(a) $(-4 \times 10^5)(2 \times 10^{-7})$ (b) $\tfrac{9 \times 10^3}{3 \times 10^{-2}}$.

(a)

$$
\begin{array}{lrcl}
&&& (-4 \times 10^5)(2 \times 10^{-7}) \\[4pt]
\text{Use the Commutative Property to rearrange the factors.} &&& -4 \cdot 2 \cdot 10^5 \cdot 10^{-7} \\[4pt]
\text{Multiply.} &&& -8 \times 10^{-2} \\[4pt]
\text{Change to decimal form by moving the decimal two places left.} &&& -0.08
\end{array}
$$

(b)

$$
\begin{array}{lrcl}
&&& \tfrac{9 \times 10^3}{3 \times 10^{-2}} \\[12pt]
\text{Separate the factors, rewriting as the product of two fractions.} &&& \tfrac{9}{3} \times \tfrac{10^3}{10^{-2}} \\[12pt]
\text{Divide.} &&& 3 \times 10^5 \\[4pt]
\text{Change to decimal form by moving the decimal five places right.} &&& 300{,}000
\end{array}
$$

{{< fillin
  question="Multiply: $(-3 \times 10^5)(2 \times 10^{-8})$. Write your answer in decimal form."
  answer="-0.006"
  hint="Multiply the coefficients ($-6$) and add the exponents ($10^{-3}$), then write in decimal form."
>}}

{{< fillin
  question="Divide: $\tfrac{8 \times 10^4}{2 \times 10^{-1}}$. Write your answer in decimal form."
  answer="400000"
  answerDisplay="$400{,}000$"
  hint="Divide the coefficients ($4$) and subtract the exponents ($10^{4-(-1)} = 10^5$)."
>}}

## Key terms

**Product Property for Exponents** — $a^m \cdot a^n = a^{m+n}$; to multiply
with like bases, add the exponents. **Quotient Property for Exponents** —
$\tfrac{a^m}{a^n} = a^{m-n}$ for $a \neq 0$; subtract the exponents.
**Zero Exponent Property** — any non-zero number raised to the zero power is
$1$. **negative exponent** — $a^{-n} = \tfrac{1}{a^n}$ for $a \neq 0$.
**Power Property for Exponents** — $(a^m)^n = a^{m \cdot n}$; to raise a power
to a power, multiply the exponents. **Product to a Power Property** —
$(ab)^m = a^m b^m$. **Quotient to a Power Property** —
$\left(\tfrac{a}{b}\right)^m = \tfrac{a^m}{b^m}$. **scientific notation** — a
number written in the form $a \times 10^n$, where $1 \le |a| < 10$ and $n$ is an
integer.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 5.2: Properties of Exponents and Scientific Notation](https://openstax.org/books/intermediate-algebra-2e/pages/5-2-properties-of-exponents-and-scientific-notation) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: omitted the Be Prepared quiz, media links, and end-of-section exercises; recreated the summary of exponent properties as a markdown table; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
