---
title: Rational Exponents
description: >-
  Interpreting rational exponents as radicals — simplifying expressions of the
  form $a^{1/n}$ and $a^{m/n}$, handling negative rational exponents, and using
  the laws of exponents to simplify expressions with rational exponents —
  adapted from OpenStax Elementary Algebra 2e, Section 9.8.
source_section: "9.8"
weight: 8
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** simplify expressions
  with $a^{1/n}$; simplify expressions with $a^{m/n}$; and use the laws of
  exponents to simplify expressions with rational exponents.
{{< /callout >}}

## Simplify expressions with $a^{1/n}$

Rational exponents are another way of writing expressions with radicals. When
we use **rational exponents**, we can apply the properties of exponents to
simplify expressions.

The Power Property for Exponents says that $\left(a^m\right)^n = a^{m \cdot n}$
when $m$ and $n$ are whole numbers. Let's assume we are now not limited to
whole numbers.

Suppose we want to find a number $p$ such that $\left(8^p\right)^3 = 8$. We
will use the Power Property of Exponents to find the value of $p$:

$$
\begin{array}{lrcl}
& \left(8^p\right)^3 &=& 8 \\[4pt]
\text{Multiply the exponents on the left.} & 8^{3p} &=& 8 \\[4pt]
\text{Write the exponent } 1 \text{ on the right.} & 8^{3p} &=& 8^1 \\[4pt]
\text{The exponents must be equal.} & 3p &=& 1 \\[4pt]
\text{Solve for } p. & p &=& \tfrac{1}{3}
\end{array}
$$

So $\left(8^{1/3}\right)^3 = 8$. But we know also that
$\left(\sqrt[3]{8}\right)^3 = 8$. Then it must be that
$8^{1/3} = \sqrt[3]{8}$.

This same logic can be used for any positive integer exponent $n$ to show that
$a^{1/n} = \sqrt[n]{a}$.

{{< callout type="info" >}}
  **Rational Exponent $a^{1/n}$.** If $\sqrt[n]{a}$ is a real number and
  $n \geq 2$, then

  $$
  a^{1/n} = \sqrt[n]{a}.
  $$
{{< /callout >}}

There will be times when working with expressions will be easier if you use
rational exponents, and times when it will be easier if you use radicals. In
the first few examples, you'll practice converting expressions between these
two notations.

**Example.** Write as a radical expression: (a) $x^{1/2}$, (b) $y^{1/3}$, (c)
$z^{1/4}$.

We want to write each expression in the form $\sqrt[n]{a}$. The denominator of
the rational exponent is the index of the radical:

$$
\begin{array}{lrcl}
\text{(a) The denominator is } 2, \text{ so the index is } 2. & x^{1/2} &=& \sqrt{x} \\[4pt]
\text{(b) The denominator is } 3, \text{ so the index is } 3. & y^{1/3} &=& \sqrt[3]{y} \\[4pt]
\text{(c) The denominator is } 4, \text{ so the index is } 4. & z^{1/4} &=& \sqrt[4]{z}
\end{array}
$$

We do not show the index when it is $2$.

{{< fillin
  question="Write $t^{1/2}$ as a radical expression."
  answer="\sqrt{t}"
  answerDisplay="$\sqrt{t}$"
  hint="The denominator of the exponent is the index of the radical. When the index is $2$, no index is shown."
>}}

**Example.** Write with a rational exponent: (a) $\sqrt{x}$, (b) $\sqrt[3]{y}$,
(c) $\sqrt[4]{z}$.

We want to write each radical in the form $a^{1/n}$. The index of the radical
becomes the denominator of the rational exponent:

$$
\begin{array}{lrcl}
\text{(a) No index is shown, so it is } 2. & \sqrt{x} &=& x^{1/2} \\[4pt]
\text{(b) The index is } 3. & \sqrt[3]{y} &=& y^{1/3} \\[4pt]
\text{(c) The index is } 4. & \sqrt[4]{z} &=& z^{1/4}
\end{array}
$$

{{< fillin
  question="Write $\sqrt[3]{p}$ with a rational exponent."
  answer="p^{1/3}"
  answerDisplay="$p^{1/3}$"
  hint="The index of the radical becomes the denominator of the exponent, and the numerator is $1$."
>}}

**Example.** Write with a rational exponent: (a) $\sqrt{5y}$, (b)
$\sqrt[3]{4x}$, (c) $3\sqrt[4]{5z}$.

The entire radicand becomes the base. Note in part (c) that the factor $3$ is
not under the radical, so it stays outside:

$$
\begin{array}{lrcl}
\text{(a) No index is shown, so it is } 2. & \sqrt{5y} &=& (5y)^{1/2} \\[4pt]
\text{(b) The index is } 3. & \sqrt[3]{4x} &=& (4x)^{1/3} \\[4pt]
\text{(c) The index is } 4. & 3\sqrt[4]{5z} &=& 3(5z)^{1/4}
\end{array}
$$

{{< fillin
  question="Write $\sqrt[3]{3n}$ with a rational exponent."
  answer="(3n)^{1/3}"
  answerDisplay="$(3n)^{1/3}$"
  hint="The whole radicand $3n$ is the base; the index $3$ is the denominator of the exponent."
>}}

In the next example, you may find it easier to simplify the expressions if you
rewrite them as radicals first.

**Example.** Simplify: (a) $25^{1/2}$, (b) $64^{1/3}$, (c) $256^{1/4}$.

Rewrite each as a radical, then recognize the perfect power and simplify:

$$
\begin{array}{lrcl}
\text{(a) Rewrite as a square root, then simplify.} & 25^{1/2} &=& \sqrt{25} = 5 \\[4pt]
\text{(b) Rewrite as a cube root; } 64 = 4^3. & 64^{1/3} &=& \sqrt[3]{4^3} = 4 \\[4pt]
\text{(c) Rewrite as a fourth root; } 256 = 4^4. & 256^{1/4} &=& \sqrt[4]{4^4} = 4
\end{array}
$$

{{< fillin
  question="Simplify: $36^{1/2}$."
  answer="6"
  hint="Rewrite as a square root: $36^{1/2} = \sqrt{36}$."
>}}

{{< fillin
  question="Simplify: $8^{1/3}$."
  answer="2"
  hint="Rewrite as a cube root and look for a perfect cube: $8 = 2^3$."
>}}

Be careful of the placement of the negative signs in the next example. We will
need to use the property $a^{-n} = \tfrac{1}{a^n}$ in one case.

**Example.** Simplify: (a) $(-64)^{1/3}$, (b) $-64^{1/3}$, (c) $(64)^{-1/3}$.

$$
\begin{array}{lrcl}
\text{(a) Rewrite } -64 = (-4)^3, \text{ then simplify.} & (-64)^{1/3} &=& \sqrt[3]{(-4)^3} = -4 \\[4pt]
\text{(b) The exponent applies only to the } 64. & -64^{1/3} &=& -\sqrt[3]{4^3} = -4 \\[4pt]
\text{(c) Rewrite with a positive exponent, } a^{-n} = \tfrac{1}{a^n}. & (64)^{-1/3} &=& \tfrac{1}{\sqrt[3]{4^3}} = \tfrac{1}{4}
\end{array}
$$

{{< fillin
  question="Simplify: $(-125)^{1/3}$."
  answer="-5"
  hint="$-125 = (-5)^3$, so take the cube root of a perfect cube."
>}}

{{< fillin
  question="Simplify: $(125)^{-1/3}$."
  answer="\frac{1}{5}"
  answerDisplay="$\frac{1}{5}$"
  hint="Rewrite with a positive exponent using $a^{-n} = \tfrac{1}{a^n}$, then take the cube root of $125$."
>}}

**Example.** Simplify: (a) $(-16)^{1/4}$, (b) $-16^{1/4}$, (c) $(16)^{-1/4}$.

$$
\begin{array}{lrcl}
\text{(a) There is no real number whose fourth power is } -16. & (-16)^{1/4} & & \text{not a real number} \\[4pt]
\text{(b) The exponent applies only to the } 16. & -16^{1/4} &=& -\sqrt[4]{2^4} = -2 \\[4pt]
\text{(c) Rewrite with a positive exponent, then simplify.} & (16)^{-1/4} &=& \tfrac{1}{\sqrt[4]{2^4}} = \tfrac{1}{2}
\end{array}
$$

{{< fillin
  question="Simplify: $-16^{1/2}$."
  answer="-4"
  hint="The exponent applies only to the $16$; the negative sign stays out front. $\sqrt{16} = 4$."
>}}

{{< fillin
  question="Simplify: $(64)^{-1/2}$."
  answer="\frac{1}{8}"
  answerDisplay="$\frac{1}{8}$"
  hint="Rewrite with a positive exponent using $a^{-n} = \tfrac{1}{a^n}$, then take the square root of $64$."
>}}

## Simplify expressions with $a^{m/n}$

Let's work with the Power Property for Exponents some more. Suppose we raise
$a^{1/n}$ to the power $m$:

$$
\left(a^{1/n}\right)^m = a^{(1/n) \cdot m} = a^{m/n}
$$

So $a^{m/n} = \left(\sqrt[n]{a}\right)^m$. Now suppose we take $a^m$ to the
$\tfrac{1}{n}$ power:

$$
\left(a^m\right)^{1/n} = a^{m \cdot (1/n)} = a^{m/n}
$$

So $a^{m/n} = \sqrt[n]{a^m}$ also. Which form do we use to simplify an
expression? We usually take the root first — that way we keep the numbers in
the radicand smaller.

{{< callout type="info" >}}
  **Rational Exponent $a^{m/n}$.** For any positive integers $m$ and $n$,

  $$
  a^{m/n} = \left(\sqrt[n]{a}\right)^m \qquad \text{and} \qquad a^{m/n} = \sqrt[n]{a^m}.
  $$
{{< /callout >}}

**Example.** Write with a rational exponent: (a) $\sqrt{y^3}$, (b)
$\sqrt[3]{x^2}$, (c) $\sqrt[4]{z^3}$.

We use $a^{m/n} = \sqrt[n]{a^m}$: the exponent in the radicand is the
numerator, and the index is the denominator:

$$
\begin{array}{lrcl}
\text{(a) Numerator } 3, \text{ index } 2. & \sqrt{y^3} &=& y^{3/2} \\[4pt]
\text{(b) Numerator } 2, \text{ index } 3. & \sqrt[3]{x^2} &=& x^{2/3} \\[4pt]
\text{(c) Numerator } 3, \text{ index } 4. & \sqrt[4]{z^3} &=& z^{3/4}
\end{array}
$$

{{< fillin
  question="Write $\sqrt[4]{z^3}$ with a rational exponent."
  answer="z^{3/4}"
  answerDisplay="$z^{3/4}$"
  hint="The exponent in the radicand $(3)$ is the numerator; the index $(4)$ is the denominator."
>}}

**Example.** Simplify: (a) $9^{3/2}$, (b) $125^{2/3}$, (c) $81^{3/4}$.

We rewrite each expression as a radical first using
$a^{m/n} = \left(\sqrt[n]{a}\right)^m$. This form lets us take the root first,
keeping the numbers in the radicand smaller:

$$
\begin{array}{lrcl}
\text{(a)} & 9^{3/2} &=& \left(\sqrt{9}\right)^3 = 3^3 = 27 \\[4pt]
\text{(b)} & 125^{2/3} &=& \left(\sqrt[3]{125}\right)^2 = 5^2 = 25 \\[4pt]
\text{(c)} & 81^{3/4} &=& \left(\sqrt[4]{81}\right)^3 = 3^3 = 27
\end{array}
$$

{{< fillin
  question="Simplify: $4^{3/2}$."
  answer="8"
  hint="Take the root first: $\left(\sqrt{4}\right)^3 = 2^3$."
>}}

{{< fillin
  question="Simplify: $27^{2/3}$."
  answer="9"
  hint="Take the cube root first: $\left(\sqrt[3]{27}\right)^2 = 3^2$."
>}}

Remember that $b^{-p} = \tfrac{1}{b^p}$. The negative sign in the exponent does
not change the sign of the expression.

**Example.** Simplify: (a) $16^{-3/2}$, (b) $32^{-2/5}$, (c) $4^{-5/2}$.

We rewrite each expression first using $b^{-p} = \tfrac{1}{b^p}$ and then
change to radical form:

$$
\begin{array}{lrcl}
\text{(a)} & 16^{-3/2} &=& \tfrac{1}{16^{3/2}} = \tfrac{1}{\left(\sqrt{16}\right)^3} = \tfrac{1}{4^3} = \tfrac{1}{64} \\[10pt]
\text{(b)} & 32^{-2/5} &=& \tfrac{1}{32^{2/5}} = \tfrac{1}{\left(\sqrt[5]{32}\right)^2} = \tfrac{1}{2^2} = \tfrac{1}{4} \\[10pt]
\text{(c)} & 4^{-5/2} &=& \tfrac{1}{4^{5/2}} = \tfrac{1}{\left(\sqrt{4}\right)^5} = \tfrac{1}{2^5} = \tfrac{1}{32}
\end{array}
$$

{{< fillin
  question="Simplify: $16^{-3/4}$."
  answer="\frac{1}{8}"
  answerDisplay="$\frac{1}{8}$"
  hint="Rewrite with a positive exponent, then take the fourth root first: $\tfrac{1}{\left(\sqrt[4]{16}\right)^3}$."
>}}

**Example.** Simplify: (a) $-25^{3/2}$, (b) $-25^{-3/2}$, (c) $(-25)^{3/2}$.

$$
\begin{array}{lrcl}
\text{(a) The exponent applies only to } 25. & -25^{3/2} &=& -\left(\sqrt{25}\right)^3 = -(5)^3 = -125 \\[10pt]
\text{(b) Rewrite with a positive exponent first.} & -25^{-3/2} &=& -\tfrac{1}{\left(\sqrt{25}\right)^3} = -\tfrac{1}{125} \\[10pt]
\text{(c) There is no real number whose square root is } -25. & (-25)^{3/2} & & \text{not a real number}
\end{array}
$$

{{< fillin
  question="Simplify: $-81^{3/2}$."
  answer="-729"
  hint="The exponent applies only to $81$. Take the root first: $-\left(\sqrt{81}\right)^3 = -(9)^3$."
>}}

## Use the laws of exponents to simplify expressions with rational exponents

The same laws of exponents that we already used apply to rational exponents,
too. We list the exponent properties here for reference as we simplify
expressions.

{{< callout type="info" >}}
  **Summary of Exponent Properties.** If $a$, $b$ are real numbers and $m$, $n$
  are rational numbers, then

  - **Product Property:** $a^m \cdot a^n = a^{m+n}$
  - **Power Property:** $\left(a^m\right)^n = a^{m \cdot n}$
  - **Product to a Power:** $(ab)^m = a^m b^m$
  - **Quotient Property:** $\tfrac{a^m}{a^n} = a^{m-n},\ a \neq 0,\ m > n$ and $\tfrac{a^m}{a^n} = \tfrac{1}{a^{n-m}},\ a \neq 0,\ n > m$
  - **Zero Exponent Definition:** $a^0 = 1,\ a \neq 0$
  - **Quotient to a Power Property:** $\left(\tfrac{a}{b}\right)^m = \tfrac{a^m}{b^m},\ b \neq 0$
{{< /callout >}}

When we multiply the same base, we add the exponents.

**Example.** Simplify: (a) $2^{1/2} \cdot 2^{5/2}$, (b) $x^{2/3} \cdot x^{4/3}$,
(c) $z^{3/4} \cdot z^{5/4}$.

The bases are the same, so we add the exponents:

$$
\begin{array}{lrcl}
\text{(a)} & 2^{1/2} \cdot 2^{5/2} &=& 2^{1/2 + 5/2} = 2^{6/2} = 2^3 = 8 \\[4pt]
\text{(b)} & x^{2/3} \cdot x^{4/3} &=& x^{2/3 + 4/3} = x^{6/3} = x^2 \\[4pt]
\text{(c)} & z^{3/4} \cdot z^{5/4} &=& z^{3/4 + 5/4} = z^{8/4} = z^2
\end{array}
$$

{{< fillin
  question="Simplify: $y^{1/3} \cdot y^{8/3}$. Write the answer with a rational or whole exponent."
  answer="y^3"
  answerDisplay="$y^3$"
  hint="The bases match, so add the exponents: $\tfrac{1}{3} + \tfrac{8}{3}$."
>}}

We will use the Power Property in the next example.

**Example.** Simplify: (a) $\left(x^4\right)^{1/2}$, (b)
$\left(y^6\right)^{1/3}$, (c) $\left(z^9\right)^{2/3}$.

To raise a power to a power, we multiply the exponents:

$$
\begin{array}{lrcl}
\text{(a)} & \left(x^4\right)^{1/2} &=& x^{4 \cdot 1/2} = x^2 \\[4pt]
\text{(b)} & \left(y^6\right)^{1/3} &=& y^{6 \cdot 1/3} = y^2 \\[4pt]
\text{(c)} & \left(z^9\right)^{2/3} &=& z^{9 \cdot 2/3} = z^6
\end{array}
$$

{{< fillin
  question="Simplify: $\left(p^{10}\right)^{1/5}$. Write the answer with a whole-number exponent."
  answer="p^2"
  answerDisplay="$p^2$"
  hint="Multiply the exponents: $10 \cdot \tfrac{1}{5}$."
>}}

The Quotient Property tells us that when we divide with the same base, we
subtract the exponents.

**Example.** Simplify: (a) $\tfrac{x^{4/3}}{x^{1/3}}$, (b)
$\tfrac{y^{3/4}}{y^{1/4}}$, (c) $\tfrac{z^{2/3}}{z^{5/3}}$.

To divide with the same base, we subtract the exponents:

$$
\begin{array}{lrcl}
\text{(a)} & \tfrac{x^{4/3}}{x^{1/3}} &=& x^{4/3 - 1/3} = x^{3/3} = x \\[10pt]
\text{(b)} & \tfrac{y^{3/4}}{y^{1/4}} &=& y^{3/4 - 1/4} = y^{2/4} = y^{1/2} \\[10pt]
\text{(c)} & \tfrac{z^{2/3}}{z^{5/3}} &=& z^{2/3 - 5/3} = z^{-3/3} = \tfrac{1}{z}
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{u^{5/4}}{u^{1/4}}$. Write the answer with a rational or whole exponent."
  answer="u"
  hint="Subtract the exponents: $\tfrac{5}{4} - \tfrac{1}{4} = \tfrac{4}{4} = 1$."
>}}

Sometimes we need to use more than one property. In the next examples, we will
use both the Product to a Power Property and then the Power Property.

**Example.** Simplify: (a) $\left(27u^{1/2}\right)^{2/3}$, (b)
$\left(8v^{1/4}\right)^{2/3}$.

First we use the Product to a Power Property, then the Power Property:

$$
\begin{array}{lrcl}
\text{(a)} & \left(27u^{1/2}\right)^{2/3} &=& (27)^{2/3}\left(u^{1/2}\right)^{2/3} = \left(3^3\right)^{2/3}\left(u^{1/2}\right)^{2/3} = 3^2 u^{1/3} = 9u^{1/3} \\[10pt]
\text{(b)} & \left(8v^{1/4}\right)^{2/3} &=& (8)^{2/3}\left(v^{1/4}\right)^{2/3} = \left(2^3\right)^{2/3}\left(v^{1/4}\right)^{2/3} = 2^2 v^{1/6} = 4v^{1/6}
\end{array}
$$

{{< fillin
  question="Simplify: $\left(32x^{1/3}\right)^{3/5}$."
  answer="8x^{1/5}"
  answerDisplay="$8x^{1/5}$"
  hint="Apply the exponent to each factor. $32 = 2^5$, so $(2^5)^{3/5} = 2^3$; and $\left(x^{1/3}\right)^{3/5} = x^{1/5}$."
>}}

**Example.** Simplify: (a) $\left(m^3 n^9\right)^{1/3}$, (b)
$\left(p^4 q^8\right)^{1/4}$.

First we use the Product to a Power Property, then the Power Property:

$$
\begin{array}{lrcl}
\text{(a)} & \left(m^3 n^9\right)^{1/3} &=& \left(m^3\right)^{1/3}\left(n^9\right)^{1/3} = m n^3 \\[4pt]
\text{(b)} & \left(p^4 q^8\right)^{1/4} &=& \left(p^4\right)^{1/4}\left(q^8\right)^{1/4} = p q^2
\end{array}
$$

{{< fillin
  question="Simplify: $\left(m^3 n^9\right)^{1/3}$."
  answer="mn^3"
  answerDisplay="$mn^3$"
  hint="Apply the exponent to each factor: $\left(m^3\right)^{1/3}$ and $\left(n^9\right)^{1/3}$."
>}}

We will use both the Product and Quotient Properties in the next example.

**Example.** Simplify: (a) $\tfrac{x^{3/4} \cdot x^{-1/4}}{x^{-6/4}}$, (b)
$\tfrac{y^{4/3} \cdot y}{y^{-2/3}}$.

Use the Product Property in the numerator (add the exponents), then the
Quotient Property (subtract the exponents):

$$
\begin{array}{lrcl}
\text{(a)} & \tfrac{x^{3/4} \cdot x^{-1/4}}{x^{-6/4}} &=& \tfrac{x^{2/4}}{x^{-6/4}} = x^{2/4 - (-6/4)} = x^{8/4} = x^2 \\[10pt]
\text{(b)} & \tfrac{y^{4/3} \cdot y}{y^{-2/3}} &=& \tfrac{y^{7/3}}{y^{-2/3}} = y^{7/3 - (-2/3)} = y^{9/3} = y^3
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{m^{2/3} \cdot m^{-1/3}}{m^{-5/3}}$. Write the answer with a whole-number exponent."
  answer="m^2"
  answerDisplay="$m^2$"
  hint="Add the exponents in the numerator $\left(\tfrac{2}{3} - \tfrac{1}{3} = \tfrac{1}{3}\right)$, then subtract the denominator's exponent: $\tfrac{1}{3} - \left(-\tfrac{5}{3}\right)$."
>}}

## Key terms

**rational exponent** — an exponent that is a fraction; $a^{1/n} = \sqrt[n]{a}$
and $a^{m/n} = \left(\sqrt[n]{a}\right)^m = \sqrt[n]{a^m}$, connecting exponent
notation to radical notation. **negative rational exponent** — a negative
fractional exponent, rewritten with a positive exponent using
$a^{-m/n} = \tfrac{1}{a^{m/n}}$.

---

<small>This section is adapted from [Elementary Algebra 2e, 9.8 Rational Exponents](https://openstax.org/books/elementary-algebra-2e/pages/9-8-rational-exponents) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked-example step tables as typeset math, condensed the multi-part "Try It" problems into single-part interactive exercises with instant feedback, and omitted the Be Prepared quiz, media links, Self Check, and end-of-section exercises.</small>
