---
title: Higher Roots
description: >-
  Extending square roots to nth roots — the principal nth root, when it is a
  real number, and using the Product and Quotient Properties to simplify and to
  add and subtract higher roots. Adapted from OpenStax Elementary Algebra 2e,
  Section 9.7.
source_section: "9.7"
weight: 7
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** simplify expressions with
  higher roots, use the Product Property to simplify expressions with higher
  roots, use the Quotient Property to simplify expressions with higher roots,
  and add and subtract higher roots.
{{< /callout >}}

Up to now, in this chapter we have worked with squares and square roots. We will
now extend our work to include higher powers and higher roots.

## Simplify expressions with higher roots

Let's review some vocabulary first. We write $n^2$ and say "$n$ squared,"
$n^3$ and say "$n$ cubed," $n^4$ and say "$n$ to the fourth," and $n^5$ and say
"$n$ to the fifth." The terms "squared" and "cubed" come from the formulas for
the area of a square and the volume of a cube.

Earlier in this chapter we defined the square root of a number: if $n^2 = m$,
then $n$ is a square root of $m$. And we used the notation $\sqrt{m}$ to denote
the **principal square root**. So $\sqrt{m} \ge 0$ always. We will now extend the
definition to higher roots.

{{< callout type="info" >}}
  **$n$th Root of a Number.** If $b^n = a$, then $b$ is an **$n$th root of a
  number** $a$. The principal $n$th root of $a$ is written $\sqrt[n]{a}$, and $n$
  is called the **index** of the radical.
{{< /callout >}}

We do not write the index for a square root. Just like we use the word "cubed"
for $b^3$, we use the term "cube root" for $\sqrt[3]{a}$. For example:

$$
\begin{array}{lrcl}
& 4^3 &=& 64 \\[4pt]
\text{so} & \sqrt[3]{64} &=& 4 \\[4pt]
& 3^4 &=& 81 \\[4pt]
\text{so} & \sqrt[4]{81} &=& 3 \\[4pt]
& (-2)^5 &=& -32 \\[4pt]
\text{so} & \sqrt[5]{-32} &=& -2
\end{array}
$$

Could we have an even root of a negative number? No. We know that the square root
of a negative number is not a real number. The same is true for any even root.
Even roots of negative numbers are not real numbers. Odd roots of negative
numbers are real numbers.

{{< callout type="info" >}}
  **Properties of $\sqrt[n]{a}$.**

  When $n$ is an **even** number and

  - $a \ge 0$, then $\sqrt[n]{a}$ is a real number;
  - $a < 0$, then $\sqrt[n]{a}$ is not a real number.

  When $n$ is an **odd** number, $\sqrt[n]{a}$ is a real number for all values
  of $a$.
{{< /callout >}}

**Example.** Simplify: (a) $\sqrt[3]{8}$, (b) $\sqrt[4]{81}$, (c) $\sqrt[5]{32}$.

$$
\begin{array}{lrcl}
\text{Since } (2)^3 = 8. & \sqrt[3]{8} &=& 2 \\[4pt]
\text{Since } (3)^4 = 81. & \sqrt[4]{81} &=& 3 \\[4pt]
\text{Since } (2)^5 = 32. & \sqrt[5]{32} &=& 2
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt[3]{27}$."
  answer="3"
  answerDisplay="$3$"
  hint="What number cubed equals $27$?"
>}}

**Example.** Simplify: (a) $\sqrt[3]{-64}$, (b) $\sqrt[4]{-16}$,
(c) $\sqrt[5]{-243}$.

For (a), the index is odd, so a negative radicand gives a real number. For (b),
the index is even and the radicand is negative, so the root is not a real number.
For (c), the index is odd again:

$$
\begin{array}{lrcl}
\text{Since } (-4)^3 = -64. & \sqrt[3]{-64} &=& -4 \\[4pt]
\text{No real number to the fourth power is } -16. & \sqrt[4]{-16} && \text{is not a real number.} \\[4pt]
\text{Since } (-3)^5 = -243. & \sqrt[5]{-243} &=& -3
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt[3]{-125}$."
  answer="-5"
  answerDisplay="$-5$"
  hint="The index is odd, so the root of a negative number is real. What number cubed is $-125$?"
>}}

When we worked with square roots that had variables in the radicand, we
restricted the variables to non-negative values. Now we will remove this
restriction. The odd root of a number can be either positive or negative. For
example, $\sqrt[3]{-64} = -4$. But the even root of a non-negative number is
always non-negative, because we take the principal $n$th root.

Suppose we start with $a = -5$. Then $(-5)^4 = 625$, and $\sqrt[4]{625} = 5$. How
can we make sure the fourth root of $-5$ raised to the fourth power is $5$? The
following property tells us.

{{< callout type="info" >}}
  **Simplifying Odd and Even Roots.** For any integer $n \ge 2$,

  $$
  \begin{array}{lrcl}
  \text{when } n \text{ is odd} & \sqrt[n]{a^n} &=& a \\[4pt]
  \text{when } n \text{ is even} & \sqrt[n]{a^n} &=& |a|
  \end{array}
  $$

  We must use the absolute value signs when we take an even root of an
  expression with a variable in the radical.
{{< /callout >}}

**Example.** Simplify: (a) $\sqrt{x^2}$, (b) $\sqrt[3]{n^3}$, (c) $\sqrt[4]{p^4}$,
(d) $\sqrt[5]{y^5}$.

We use the absolute value to be sure to get the positive root:

$$
\begin{array}{lrcl}
\text{Since } (x)^2 = x^2 \text{ and we want the positive root.} & \sqrt{x^2} &=& |x| \\[4pt]
\text{Since } (n)^3 = n^3; \text{ odd root, no absolute value.} & \sqrt[3]{n^3} &=& n \\[4pt]
\text{Since } (p)^4 = p^4 \text{ and we want the positive root.} & \sqrt[4]{p^4} &=& |p| \\[4pt]
\text{Since } (y)^5 = y^5; \text{ odd root, no absolute value.} & \sqrt[5]{y^5} &=& y
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt[4]{m^4}$."
  answer="|m|"
  answerDisplay="$|m|$"
  hint="The index is even, so use absolute value signs to guarantee the positive root."
>}}

**Example.** Simplify: (a) $\sqrt[3]{y^{18}}$, (b) $\sqrt[4]{z^8}$.

$$
\begin{array}{lrcl}
\text{Since } (y^6)^3 = y^{18}. & \sqrt[3]{y^{18}} &=& \sqrt[3]{(y^6)^3} \\[4pt]
\text{Simplify; odd root, no absolute value.} &&& y^6 \\[4pt]
\text{Since } (z^2)^4 = z^8. & \sqrt[4]{z^8} &=& \sqrt[4]{(z^2)^4} \\[4pt]
\text{Since } z^2 \text{ is positive, no absolute value.} &&& z^2
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt[4]{u^{12}}$."
  answer="|u^3|"
  answerDisplay="$|u^3|$"
  hint="Write $u^{12}$ as $(u^3)^4$. The index is even, so use an absolute value sign."
>}}

**Example.** Simplify: (a) $\sqrt[3]{64p^6}$, (b) $\sqrt[4]{16q^{12}}$.

$$
\begin{array}{lrcl}
\text{Rewrite } 64p^6 \text{ as } (4p^2)^3. & \sqrt[3]{64p^6} &=& \sqrt[3]{(4p^2)^3} \\[4pt]
\text{Take the cube root.} &&& 4p^2 \\[4pt]
\text{Rewrite the radicand as a fourth power.} & \sqrt[4]{16q^{12}} &=& \sqrt[4]{(2q^3)^4} \\[4pt]
\text{Take the fourth root.} &&& 2|q^3|
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt[3]{27x^{27}}$."
  answer="3x^9"
  answerDisplay="$3x^9$"
  hint="Write $27x^{27}$ as $(3x^9)^3$. The index is odd, so no absolute value is needed."
>}}

## Use the Product Property to simplify expressions with higher roots

We will simplify expressions with higher roots in much the same way as we
simplified expressions with square roots. An $n$th root is considered simplified
if it has no factors of $m^n$.

{{< callout type="info" >}}
  **Simplified $n$th Root.** $\sqrt[n]{a}$ is considered simplified if $a$ has no
  factors of $m^n$.
{{< /callout >}}

We will generalize the Product Property of Square Roots to include any integer
root $n \ge 2$.

{{< callout type="info" >}}
  **Product Property of $n$th Roots.** If $\sqrt[n]{a}$ and $\sqrt[n]{b}$ are real
  numbers and for any integer $n \ge 2$, then

  $$\sqrt[n]{ab} = \sqrt[n]{a} \cdot \sqrt[n]{b} \quad\text{and}\quad \sqrt[n]{a} \cdot \sqrt[n]{b} = \sqrt[n]{ab}$$
{{< /callout >}}

**Example.** Simplify: (a) $\sqrt[3]{x^4}$, (b) $\sqrt[4]{x^7}$.

$$
\begin{array}{lrcl}
\text{Rewrite using the largest perfect cube factor.} & \sqrt[3]{x^4} &=& \sqrt[3]{x^3 \cdot x} \\[4pt]
\text{Rewrite as the product of two radicals.} &&& \sqrt[3]{x^3} \cdot \sqrt[3]{x} \\[4pt]
\text{Simplify.} &&& x\sqrt[3]{x} \\[4pt]
\text{Rewrite using the greatest perfect fourth power factor.} & \sqrt[4]{x^7} &=& \sqrt[4]{x^4 \cdot x^3} \\[4pt]
\text{Rewrite as the product of two radicals.} &&& \sqrt[4]{x^4} \cdot \sqrt[4]{x^3} \\[4pt]
\text{Simplify; even index needs an absolute value.} &&& |x|\sqrt[4]{x^3}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt[3]{y^6}$."
  answer="y^2"
  answerDisplay="$y^2$"
  hint="Write $y^6$ as $(y^2)^3$; the index is odd."
>}}

**Example.** Simplify: (a) $\sqrt[3]{16}$, (b) $\sqrt[4]{243}$.

For (a), the largest perfect cube factor of $16$ is $8 = 2^3$. For (b), the
greatest perfect fourth power factor of $243$ is $81 = 3^4$:

$$
\begin{array}{lrcl}
\text{Rewrite using the greatest perfect cube factor.} & \sqrt[3]{16} &=& \sqrt[3]{2^3 \cdot 2} \\[4pt]
\text{Rewrite as the product of two radicals.} &&& \sqrt[3]{2^3} \cdot \sqrt[3]{2} \\[4pt]
\text{Simplify.} &&& 2\sqrt[3]{2} \\[4pt]
\text{Rewrite using the greatest perfect fourth power factor.} & \sqrt[4]{243} &=& \sqrt[4]{3^4 \cdot 3} \\[4pt]
\text{Rewrite as the product of two radicals.} &&& \sqrt[4]{3^4} \cdot \sqrt[4]{3} \\[4pt]
\text{Simplify.} &&& 3\sqrt[4]{3}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt[3]{81}$."
  answer="3\sqrt[3]{3}"
  answerDisplay="$3\sqrt[3]{3}$"
  hint="The largest perfect cube factor of $81$ is $27 = 3^3$."
>}}

Don't forget to use the absolute value signs when taking an even root of an
expression with a variable in the radical.

**Example.** Simplify: (a) $\sqrt[3]{24x^7}$, (b) $\sqrt[4]{80y^{14}}$.

$$
\begin{array}{lrcl}
\text{Rewrite the radicand using perfect cube factors.} & \sqrt[3]{24x^7} &=& \sqrt[3]{2^3 x^6 \cdot 3x} \\[4pt]
\text{Rewrite as the product of two radicals.} &&& \sqrt[3]{2^3 x^6} \cdot \sqrt[3]{3x} \\[4pt]
\text{Rewrite the first radicand as } (2x^2)^3. &&& \sqrt[3]{(2x^2)^3} \cdot \sqrt[3]{3x} \\[4pt]
\text{Simplify.} &&& 2x^2\sqrt[3]{3x} \\[4pt]
\text{Rewrite the radicand using perfect fourth power factors.} & \sqrt[4]{80y^{14}} &=& \sqrt[4]{2^4 y^{12} \cdot 5y^2} \\[4pt]
\text{Rewrite as the product of two radicals.} &&& \sqrt[4]{2^4 y^{12}} \cdot \sqrt[4]{5y^2} \\[4pt]
\text{Rewrite the first radicand as } (2y^3)^4. &&& \sqrt[4]{(2y^3)^4} \cdot \sqrt[4]{5y^2} \\[4pt]
\text{Simplify.} &&& 2|y^3|\sqrt[4]{5y^2}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt[3]{54p^{10}}$."
  answer="3p^3\sqrt[3]{2p}"
  answerDisplay="$3p^3\sqrt[3]{2p}$"
  hint="Write $54p^{10}$ as $3^3 p^9 \cdot 2p$; the index is odd, so no absolute value is needed."
>}}

**Example.** Simplify: (a) $\sqrt[3]{-27}$, (b) $\sqrt[4]{-16}$.

$$
\begin{array}{lrcl}
\text{Rewrite the radicand as a product using perfect cube factors.} & \sqrt[3]{-27} &=& \sqrt[3]{(-3)^3} \\[4pt]
\text{Take the cube root.} &&& -3 \\[4pt]
\text{There is no real number } n \text{ where } n^4 = -16. & \sqrt[4]{-16} && \text{is not a real number.}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt[3]{-108}$."
  answer="-3\sqrt[3]{4}"
  answerDisplay="$-3\sqrt[3]{4}$"
  hint="Write $-108$ as $(-3)^3 \cdot 4$. The index is odd, so the root is real."
>}}

## Use the Quotient Property to simplify expressions with higher roots

We can simplify higher roots with quotients in the same way we simplified square
roots. First we simplify any fractions inside the radical.

**Example.** Simplify: (a) $\sqrt[3]{\tfrac{a^8}{a^5}}$,
(b) $\sqrt[4]{\tfrac{a^{10}}{a^2}}$.

$$
\begin{array}{lrcl}
\text{Simplify the fraction under the radical first.} & \sqrt[3]{\tfrac{a^8}{a^5}} &=& \sqrt[3]{a^3} \\[10pt]
\text{Simplify.} &&& a \\[10pt]
\text{Simplify the fraction under the radical first.} & \sqrt[4]{\tfrac{a^{10}}{a^2}} &=& \sqrt[4]{a^8} \\[10pt]
\text{Rewrite the radicand using perfect fourth power factors.} &&& \sqrt[4]{(a^2)^4} \\[10pt]
\text{Simplify.} &&& a^2
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt[4]{\tfrac{x^7}{x^3}}$."
  answer="|x|"
  answerDisplay="$|x|$"
  hint="Divide inside the radical first: $\tfrac{x^7}{x^3} = x^4$. The index is even, so use an absolute value."
>}}

Previously, we used the Quotient Property "in reverse" to simplify square roots.
Now we will generalize the formula to include higher roots.

{{< callout type="info" >}}
  **Quotient Property of $n$th Roots.** If $\sqrt[n]{a}$ and $\sqrt[n]{b}$ are
  real numbers, $b \neq 0$, and for any integer $n \ge 2$, then

  $$\sqrt[n]{\tfrac{a}{b}} = \tfrac{\sqrt[n]{a}}{\sqrt[n]{b}} \quad\text{and}\quad \tfrac{\sqrt[n]{a}}{\sqrt[n]{b}} = \sqrt[n]{\tfrac{a}{b}}$$
{{< /callout >}}

**Example.** Simplify: (a) $\tfrac{\sqrt[3]{-108}}{\sqrt[3]{2}}$,
(b) $\tfrac{\sqrt[4]{96x^7}}{\sqrt[4]{3x^2}}$.

Neither radicand is a perfect root, so use the Quotient Property to write each as
one radical, simplify the fraction, and then remove the perfect factors:

$$
\begin{array}{lrcl}
\text{Write as one radical.} & \tfrac{\sqrt[3]{-108}}{\sqrt[3]{2}} &=& \sqrt[3]{\tfrac{-108}{2}} \\[10pt]
\text{Simplify the fraction under the radical.} &&& \sqrt[3]{-54} \\[10pt]
\text{Rewrite the radicand using perfect cube factors.} &&& \sqrt[3]{(-3)^3 \cdot 2} \\[10pt]
\text{Rewrite as the product of two radicals.} &&& \sqrt[3]{(-3)^3} \cdot \sqrt[3]{2} \\[10pt]
\text{Simplify.} &&& -3\sqrt[3]{2}
\end{array}
$$

$$
\begin{array}{lrcl}
\text{Write as one radical.} & \tfrac{\sqrt[4]{96x^7}}{\sqrt[4]{3x^2}} &=& \sqrt[4]{\tfrac{96x^7}{3x^2}} \\[10pt]
\text{Simplify the fraction under the radical.} &&& \sqrt[4]{32x^5} \\[10pt]
\text{Rewrite the radicand using perfect fourth power factors.} &&& \sqrt[4]{2^4 x^4 \cdot 2x} \\[10pt]
\text{Rewrite as the product of two radicals.} &&& \sqrt[4]{(2x)^4} \cdot \sqrt[4]{2x} \\[10pt]
\text{Simplify.} &&& 2|x|\sqrt[4]{2x}
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{\sqrt[3]{-532}}{\sqrt[3]{2}}$."
  answer="-\sqrt[3]{266}"
  answerDisplay="$-\sqrt[3]{266}$"
  hint="Write as one radical and divide: $\tfrac{-532}{2} = -266$. It has no perfect cube factor."
>}}

If the fraction inside the radical cannot be simplified, we use the first form of
the Quotient Property to rewrite the expression as the quotient of two radicals.

**Example.** Simplify: (a) $\sqrt[3]{\tfrac{24x^7}{y^3}}$,
(b) $\sqrt[4]{\tfrac{48x^{10}}{y^8}}$.

$$
\begin{array}{lrcl}
\text{The fraction cannot be simplified. Use the Quotient Property.} & \sqrt[3]{\tfrac{24x^7}{y^3}} &=& \tfrac{\sqrt[3]{24x^7}}{\sqrt[3]{y^3}} \\[10pt]
\text{Rewrite each radicand using perfect cube factors.} &&& \tfrac{\sqrt[3]{8x^6 \cdot 3x}}{\sqrt[3]{y^3}} \\[10pt]
\text{Rewrite the numerator as the product of two radicals.} &&& \tfrac{\sqrt[3]{(2x^2)^3} \cdot \sqrt[3]{3x}}{\sqrt[3]{y^3}} \\[10pt]
\text{Simplify.} &&& \tfrac{2x^2\sqrt[3]{3x}}{y}
\end{array}
$$

$$
\begin{array}{lrcl}
\text{The fraction cannot be simplified. Use the Quotient Property.} & \sqrt[4]{\tfrac{48x^{10}}{y^8}} &=& \tfrac{\sqrt[4]{48x^{10}}}{\sqrt[4]{y^8}} \\[10pt]
\text{Rewrite each radicand using perfect fourth power factors.} &&& \tfrac{\sqrt[4]{16x^8 \cdot 3x^2}}{\sqrt[4]{y^8}} \\[10pt]
\text{Rewrite the numerator as the product of two radicals.} &&& \tfrac{\sqrt[4]{(2x^2)^4} \cdot \sqrt[4]{3x^2}}{\sqrt[4]{(y^2)^4}} \\[10pt]
\text{Simplify.} &&& \tfrac{2x^2\sqrt[4]{3x^2}}{y^2}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt[3]{\tfrac{108c^{10}}{d^6}}$."
  answer="\tfrac{3c^3\sqrt[3]{4c}}{d^2}"
  answerDisplay="$\tfrac{3c^3\sqrt[3]{4c}}{d^2}$"
  hint="Use the Quotient Property. Write $108c^{10}$ as $27c^9 \cdot 4c$ and $d^6$ as $(d^2)^3$."
>}}

## Add and subtract higher roots

We can add and subtract higher roots like we added and subtracted square roots.
First we provide a formal definition of like radicals.

{{< callout type="info" >}}
  **Like Radicals.** Radicals with the same index and same radicand are called
  **like radicals**.
{{< /callout >}}

Like radicals have the same index and the same radicand. For example, $9\sqrt[4]{42x}$
and $-2\sqrt[4]{42x}$ are like radicals. But $5\sqrt[3]{125x}$ and $6\sqrt[3]{125y}$
are not like radicals — the radicands are different — and $2\sqrt[5]{1000q}$ and
$-4\sqrt[4]{1000q}$ are not like radicals — the indices are different.

We add and subtract like radicals in the same way we add and subtract like terms.

**Example.** Simplify: (a) $\sqrt[3]{4x} + \sqrt[3]{4x}$, (b) $4\sqrt[4]{8} - 2\sqrt[4]{8}$.

$$
\begin{array}{lrcl}
\text{The radicals are like, so add the coefficients.} & \sqrt[3]{4x} + \sqrt[3]{4x} &=& 2\sqrt[3]{4x} \\[4pt]
\text{The radicals are like, so subtract the coefficients.} & 4\sqrt[4]{8} - 2\sqrt[4]{8} &=& 2\sqrt[4]{8}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt[5]{3x} + \sqrt[5]{3x}$."
  answer="2\sqrt[5]{3x}"
  answerDisplay="$2\sqrt[5]{3x}$"
  hint="The radicals are like, so add the coefficients $1 + 1$."
>}}

When an expression does not appear to have like radicals, we will simplify each
radical first. Sometimes this leads to an expression with like radicals.

**Example.** Simplify: (a) $\sqrt[3]{54} - \sqrt[3]{16}$, (b) $\sqrt[4]{48} + \sqrt[4]{243}$.

$$
\begin{array}{lrcl}
\text{Rewrite each radicand using perfect cube factors.} & \sqrt[3]{54} - \sqrt[3]{16} &=& \sqrt[3]{27} \cdot \sqrt[3]{2} - \sqrt[3]{8} \cdot \sqrt[3]{2} \\[4pt]
\text{Simplify the radicals where possible.} &&& 3\sqrt[3]{2} - 2\sqrt[3]{2} \\[4pt]
\text{Combine like radicals.} &&& \sqrt[3]{2}
\end{array}
$$

$$
\begin{array}{lrcl}
\text{Rewrite using perfect fourth power factors.} & \sqrt[4]{48} + \sqrt[4]{243} &=& \sqrt[4]{16} \cdot \sqrt[4]{3} + \sqrt[4]{81} \cdot \sqrt[4]{3} \\[4pt]
\text{Simplify the radicals where possible.} &&& 2\sqrt[4]{3} + 3\sqrt[4]{3} \\[4pt]
\text{Combine like radicals.} &&& 5\sqrt[4]{3}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt[3]{192} - \sqrt[3]{81}$."
  answer="\sqrt[3]{3}"
  answerDisplay="$\sqrt[3]{3}$"
  hint="Simplify each: $\sqrt[3]{192} = 4\sqrt[3]{3}$ and $\sqrt[3]{81} = 3\sqrt[3]{3}$, then combine."
>}}

**Example.** Simplify: $\sqrt[3]{24x^4} - \sqrt[3]{-81x^7}$.

$$
\begin{array}{lrcl}
\text{Rewrite each radicand using perfect cube factors.} & \sqrt[3]{24x^4} - \sqrt[3]{-81x^7} &=& \sqrt[3]{8x^3} \cdot \sqrt[3]{3x} - \sqrt[3]{-27x^6} \cdot \sqrt[3]{3x} \\[4pt]
\text{Rewrite the perfect cubes.} &&& \sqrt[3]{(2x)^3} \sqrt[3]{3x} - \sqrt[3]{(-3x^2)^3} \sqrt[3]{3x} \\[4pt]
\text{Simplify the radicals where possible.} &&& 2x\sqrt[3]{3x} - \left(-3x^2\sqrt[3]{3x}\right) \\[4pt]
\text{Combine like radicals.} &&& 2x\sqrt[3]{3x} + 3x^2\sqrt[3]{3x}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt[3]{32y^5} - \sqrt[3]{-108y^8}$."
  answer="2y\sqrt[3]{4y^2} + 3y^2\sqrt[3]{4y^2}"
  answerDisplay="$2y\sqrt[3]{4y^2} + 3y^2\sqrt[3]{4y^2}$"
  hint="Simplify each radical: $\sqrt[3]{32y^5} = 2y\sqrt[3]{4y^2}$ and $\sqrt[3]{-108y^8} = -3y^2\sqrt[3]{4y^2}$."
>}}

## Key terms

**index** — the number $n$ in the radical $\sqrt[n]{a}$ that tells which root is
being taken; for a square root the index $2$ is not written. **principal $n$th
root** — the value $\sqrt[n]{a}$, which is non-negative when the index is even.
**like radicals** — radicals with the same index and the same radicand.
**Product Property of $n$th Roots** — for real $\sqrt[n]{a}$ and $\sqrt[n]{b}$
and integer $n \ge 2$, $\sqrt[n]{ab} = \sqrt[n]{a} \cdot \sqrt[n]{b}$.
**Quotient Property of $n$th Roots** — for real $\sqrt[n]{a}$ and $\sqrt[n]{b}$
with $b \neq 0$ and integer $n \ge 2$,
$\sqrt[n]{\tfrac{a}{b}} = \tfrac{\sqrt[n]{a}}{\sqrt[n]{b}}$.

---

<small>This section is adapted from [Elementary Algebra 2e, 9.7 Higher Roots](https://openstax.org/books/elementary-algebra-2e/pages/9-7-higher-roots) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked "How To" step tables as display equality chains with left-hand explanations; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
