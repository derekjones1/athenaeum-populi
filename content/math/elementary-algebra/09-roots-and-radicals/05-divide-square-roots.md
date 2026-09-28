---
title: Divide Square Roots
description: >-
  Dividing square roots and simplifying quotients of radicals with the Quotient
  Property, rationalizing a one-term denominator by multiplying by a matching
  square root, and rationalizing a two-term denominator with its conjugate —
  adapted from OpenStax Elementary Algebra 2e, Section 9.5.
source_section: "9.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Divide square roots
- Rationalize a one-term denominator
- Rationalize a two-term denominator
{{< /callout >}}

Throughout this section we assume all variables are greater than or equal to
zero, so that every square root is a real number.

## Divide square roots

We know that we simplify fractions by removing factors common to the numerator
and the denominator. When we have a fraction with a square root in the
numerator, we first simplify the square root. Then we can look for common
factors.

**Example.** Simplify $\tfrac{\sqrt{54}}{6}$.

Simplify the radical, then remove the common factors:

$$
\begin{array}{lrcl}
\text{Simplify the radical.} & \tfrac{\sqrt{54}}{6} &=& \tfrac{\sqrt{9} \cdot \sqrt{6}}{6} \\[10pt]
\text{Simplify.} && & \tfrac{3\sqrt{6}}{6} \\[10pt]
\text{Remove the common factors.} && & \tfrac{\sqrt{6}}{2}
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{\sqrt{32}}{8}$."
  answer="\frac{\sqrt{2}}{2}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{\sqrt{2}}{2}$"
  hint="Simplify the radical by taking out its largest perfect-square factor, then remove the common factor of the numerator and denominator."
>}}

{{< fillin
  question="Simplify: $\tfrac{\sqrt{75}}{15}$."
  answer="\frac{\sqrt{3}}{3}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{\sqrt{3}}{3}$"
  hint="Simplify the radical by taking out its largest perfect-square factor, then remove the common factor of the numerator and denominator."
>}}

When there is a sum or difference in the numerator, we simplify the radical
first and then factor out the common factor before removing it.

**Example.** Simplify $\tfrac{6 - \sqrt{24}}{12}$.

Simplify the radical, factor the common factor from the numerator, and then
remove the common factors:

$$
\begin{array}{lrcl}
\text{Simplify the radical.} & \tfrac{6 - \sqrt{24}}{12} &=& \tfrac{6 - \sqrt{4} \cdot \sqrt{6}}{12} \\[10pt]
\text{Simplify.} && & \tfrac{6 - 2\sqrt{6}}{12} \\[10pt]
\text{Factor the common factor from the numerator.} && & \tfrac{2(3 - \sqrt{6})}{2 \cdot 6} \\[10pt]
\text{Remove the common factors.} && & \tfrac{3 - \sqrt{6}}{6}
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{8 - \sqrt{40}}{10}$."
  answer="\frac{4 - \sqrt{10}}{5}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{4 - \sqrt{10}}{5}$"
  hint="Simplify the radical by taking out its largest perfect-square factor, factor the common factor out of the numerator, then remove it from the numerator and denominator."
>}}

{{< fillin
  question="Simplify: $\tfrac{10 - \sqrt{75}}{20}$."
  answer="\frac{2 - \sqrt{3}}{4}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{2 - \sqrt{3}}{4}$"
  hint="Simplify the radical by taking out its largest perfect-square factor, factor the common factor out of the numerator, then remove it from the numerator and denominator."
>}}

We have used the **Quotient Property of Square Roots** to simplify square
roots of fractions. It says

$$\sqrt{\tfrac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}, \quad b \neq 0.$$

Sometimes we will need to use the Quotient Property of Square Roots "in
reverse" to simplify a fraction with square roots.

$$\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\tfrac{a}{b}}, \quad b \neq 0.$$

We will rewrite the Quotient Property of Square Roots so we see both ways
together. Remember: we assume all variables are greater than or equal to zero
so that their square roots are real numbers.

{{< callout type="info" >}}
  **Quotient Property of Square Roots.** If $a$, $b$ are non-negative real
  numbers and $b \neq 0$, then

  $$\sqrt{\tfrac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}} \quad \text{and} \quad \frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\tfrac{a}{b}}.$$
{{< /callout >}}

We will use the Quotient Property of Square Roots "in reverse" when the
fraction we start with is the quotient of two square roots, and neither
radicand is a perfect square. When we write the fraction in a single square
root, we may find common factors in the numerator and denominator.

**Example.** Simplify $\tfrac{\sqrt{27}}{\sqrt{75}}$.

Neither radicand is a perfect square, so rewrite using the Quotient Property,
remove common factors, and simplify:

$$
\begin{array}{lrcl}
\text{Rewrite using the Quotient Property.} & \tfrac{\sqrt{27}}{\sqrt{75}} &=& \sqrt{\tfrac{27}{75}} \\[10pt]
\text{Remove common factors.} && & \sqrt{\tfrac{9}{25}} \\[10pt]
\text{Simplify.} && & \tfrac{3}{5}
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{\sqrt{48}}{\sqrt{108}}$."
  answer="\frac{2}{3}"
  answerForm="simplified-radical single-fraction"
  answerDisplay="$\tfrac{2}{3}$"
  hint="Use the Quotient Property to write the quotient as one square root, reduce the fraction under the radical, then take the square root."
>}}

{{< fillin
  question="Simplify: $\tfrac{\sqrt{96}}{\sqrt{54}}$."
  answer="\frac{4}{3}"
  answerForm="simplified-radical single-fraction"
  answerDisplay="$\tfrac{4}{3}$"
  hint="Use the Quotient Property to write the quotient as one square root, reduce the fraction under the radical, then take the square root."
>}}

We will use the Quotient Property for Exponents, $\tfrac{a^m}{a^n} = a^{m-n}$,
when we have variables with exponents in the radicands.

**Example.** Simplify $\tfrac{\sqrt{6y^5}}{\sqrt{2y}}$.

Rewrite using the Quotient Property, remove common factors, and then simplify
the radical:

$$
\begin{array}{lrcl}
\text{Rewrite using the Quotient Property.} & \tfrac{\sqrt{6y^5}}{\sqrt{2y}} &=& \sqrt{\tfrac{6y^5}{2y}} \\[10pt]
\text{Remove common factors.} && & \sqrt{3y^4} \\[10pt]
\text{Simplify the radical.} && & y^2\sqrt{3}
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{\sqrt{12r^3}}{\sqrt{6r}}$."
  answer="r\sqrt{2}"
  answerForm="simplified-radical single-term"
  answerDisplay="$r\sqrt{2}$"
  hint="Use the Quotient Property to write the quotient as one square root, remove common factors with the Quotient Property for Exponents, then simplify the radical."
>}}

{{< fillin
  question="Simplify: $\tfrac{\sqrt{14p^9}}{\sqrt{2p^5}}$."
  answer="p^2\sqrt{7}"
  answerForm="simplified-radical single-term"
  answerDisplay="$p^2\sqrt{7}$"
  hint="Use the Quotient Property to write the quotient as one square root, remove common factors with the Quotient Property for Exponents, then simplify the radical."
>}}

**Example.** Simplify $\tfrac{\sqrt{72x^3}}{\sqrt{162x}}$.

Rewrite using the Quotient Property, remove common factors, and then simplify
the radical:

$$
\begin{array}{lrcl}
\text{Rewrite using the Quotient Property.} & \tfrac{\sqrt{72x^3}}{\sqrt{162x}} &=& \sqrt{\tfrac{72x^3}{162x}} \\[10pt]
\text{Remove common factors.} && & \sqrt{\tfrac{4x^2}{9}} \\[10pt]
\text{Simplify the radical.} && & \tfrac{2x}{3}
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{\sqrt{50s^3}}{\sqrt{128s}}$."
  answer="\frac{5s}{8}"
  answerForm="simplified-radical single-fraction"
  answerDisplay="$\tfrac{5s}{8}$"
  hint="Use the Quotient Property to write the quotient as one square root, remove common factors with the Quotient Property for Exponents, then simplify the radical."
>}}

{{< fillin
  question="Simplify: $\tfrac{\sqrt{75q^5}}{\sqrt{108q}}$."
  answer="\frac{5q^2}{6}"
  answerForm="simplified-radical single-fraction"
  answerDisplay="$\tfrac{5q^2}{6}$"
  hint="Use the Quotient Property to write the quotient as one square root, remove common factors with the Quotient Property for Exponents, then simplify the radical."
>}}

**Example.** Simplify $\tfrac{\sqrt{147ab^8}}{\sqrt{3a^3 b^4}}$.

Rewrite using the Quotient Property, remove common factors, and then simplify
the radical:

$$
\begin{array}{lrcl}
\text{Rewrite using the Quotient Property.} & \tfrac{\sqrt{147ab^8}}{\sqrt{3a^3 b^4}} &=& \sqrt{\tfrac{147ab^8}{3a^3 b^4}} \\[10pt]
\text{Remove common factors.} && & \sqrt{\tfrac{49b^4}{a^2}} \\[10pt]
\text{Simplify the radical.} && & \tfrac{7b^2}{a}
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{\sqrt{162x^{10}y^2}}{\sqrt{2x^6 y^6}}$."
  answer="\frac{9x^2}{y^2}"
  answerForm="simplified-radical single-fraction"
  answerDisplay="$\tfrac{9x^2}{y^2}$"
  hint="Use the Quotient Property to write the quotient as one square root, remove common factors with the Quotient Property for Exponents, then simplify the radical."
>}}

{{< fillin
  question="Simplify: $\tfrac{\sqrt{300m^3 n^7}}{\sqrt{3m^5 n}}$."
  answer="\frac{10n^3}{m}"
  answerForm="simplified-radical single-fraction"
  answerDisplay="$\tfrac{10n^3}{m}$"
  hint="Use the Quotient Property to write the quotient as one square root, remove common factors with the Quotient Property for Exponents, then simplify the radical."
>}}

## Rationalize a one-term denominator

Before the calculator became a tool of everyday life, tables of square roots
were used to find approximate values of square roots. If someone needed to
approximate a fraction with a square root in the denominator, it meant doing
long division with a five-decimal-place divisor. This was a very cumbersome
process.

For this reason, a process called **rationalizing the denominator** was
developed. A fraction with a radical in the denominator is converted to an
equivalent fraction whose denominator is an integer. This process is still
used today and is useful in other areas of mathematics, too.

{{< callout type="info" >}}
  **Rationalizing the denominator.** The process of converting a fraction with
  a radical in the denominator to an equivalent fraction whose denominator is
  an integer is called **rationalizing the denominator**.
{{< /callout >}}

Square roots of numbers that are not perfect squares are irrational numbers.
When we **rationalize the denominator**, we write an equivalent fraction with a
rational number in the denominator.

Consider the fraction $\tfrac{1}{\sqrt{2}}$. A five-decimal-place
approximation to $\sqrt{2}$ is $1.41421$, so without a calculator we would have
to divide $1$ by $1.41421$ — an awkward computation. But we can find an
equivalent fraction by multiplying the numerator and denominator by
$\sqrt{2}$:

$$\frac{1}{\sqrt{2}} = \frac{1 \cdot \sqrt{2}}{\sqrt{2} \cdot \sqrt{2}} = \frac{\sqrt{2}}{2}.$$

Now if we need an approximate value, we divide $\sqrt{2} \approx 1.41421$ by
$2$. This is much easier.

Even though calculators are available nearly everywhere, a fraction with a
radical in the denominator still must be rationalized. It is not considered
simplified if the denominator contains a square root. Similarly, a square root
is not considered simplified if the radicand contains a fraction.

{{< callout type="info" >}}
  **Simplified square roots.** A square root is considered simplified if there
  are

  - no perfect-square factors in the radicand,
  - no fractions in the radicand,
  - no square roots in the denominator of a fraction.
{{< /callout >}}

To rationalize a denominator, we use the property that
$\left(\sqrt{a}\right)^2 = a$. If we square an irrational square root, we get a
rational number. We will use this property to rationalize the denominator in
the next example.

**Example.** Simplify $\tfrac{4}{\sqrt{3}}$.

To rationalize a denominator, we can multiply a square root by itself. To keep
the fraction equivalent, we multiply both the numerator and denominator by the
same factor:

$$
\begin{array}{lrcl}
\text{Multiply by } \tfrac{\sqrt{3}}{\sqrt{3}}. & \tfrac{4}{\sqrt{3}} &=& \tfrac{4 \cdot \sqrt{3}}{\sqrt{3} \cdot \sqrt{3}} \\[10pt]
\text{Simplify.} && & \tfrac{4\sqrt{3}}{3}
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{5}{\sqrt{3}}$."
  answer="\frac{5\sqrt{3}}{3}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{5\sqrt{3}}{3}$"
  hint="Multiply the numerator and denominator by the square root in the denominator, then simplify."
>}}

{{< fillin
  question="Simplify: $\tfrac{6}{\sqrt{5}}$."
  answer="\frac{6\sqrt{5}}{5}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{6\sqrt{5}}{5}$"
  hint="Multiply the numerator and denominator by the square root in the denominator, then simplify."
>}}

{{< callout type="info" >}}
  **Rationalize a one-term denominator.** To rationalize a denominator with a
  single square root, multiply the numerator and denominator by $\sqrt{b}$,
  where $\sqrt{b}$ is the square root in the denominator. This makes the
  denominator $\sqrt{b} \cdot \sqrt{b} = b$, a rational number.
{{< /callout >}}

**Example.** Simplify $-\tfrac{8}{3\sqrt{6}}$.

To remove the square root from the denominator, we multiply it by itself. To
keep the fraction equivalent, we multiply both the numerator and denominator
by $\sqrt{6}$:

$$
\begin{array}{lrcl}
\text{Multiply by } \tfrac{\sqrt{6}}{\sqrt{6}}. & -\tfrac{8}{3\sqrt{6}} &=& -\tfrac{8 \cdot \sqrt{6}}{3\sqrt{6} \cdot \sqrt{6}} \\[10pt]
\text{Simplify.} && & -\tfrac{8\sqrt{6}}{3 \cdot 6} \\[10pt]
\text{Remove common factors.} && & -\tfrac{4 \cdot 2\sqrt{6}}{3 \cdot 2 \cdot 3} \\[10pt]
\text{Simplify.} && & -\tfrac{4\sqrt{6}}{9}
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{5}{2\sqrt{5}}$."
  answer="\frac{\sqrt{5}}{2}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{\sqrt{5}}{2}$"
  hint="Multiply the numerator and denominator by the square root in the denominator, simplify, then remove the common factors."
>}}

{{< fillin
  question="Simplify: $-\tfrac{9}{4\sqrt{3}}$."
  answer="-\frac{3\sqrt{3}}{4}"
  answerForm="simplified-radical"
  answerDisplay="$-\tfrac{3\sqrt{3}}{4}$"
  hint="Multiply the numerator and denominator by the square root in the denominator, simplify, then remove the common factors."
>}}

Always simplify the radical in the denominator first, before you rationalize
it. This way the numbers stay smaller and easier to work with.

**Example.** Simplify $\sqrt{\tfrac{5}{12}}$.

The fraction is not a perfect square, so rewrite it using the Quotient
Property, simplify the denominator, and then rationalize:

$$
\begin{array}{lrcl}
\text{Rewrite using the Quotient Property.} & \sqrt{\tfrac{5}{12}} &=& \tfrac{\sqrt{5}}{\sqrt{12}} \\[10pt]
\text{Simplify the denominator.} && & \tfrac{\sqrt{5}}{2\sqrt{3}} \\[10pt]
\text{Rationalize the denominator.} && & \tfrac{\sqrt{5} \cdot \sqrt{3}}{2\sqrt{3} \cdot \sqrt{3}} \\[10pt]
\text{Simplify.} && & \tfrac{\sqrt{15}}{2 \cdot 3} \\[10pt]
\text{Simplify.} && & \tfrac{\sqrt{15}}{6}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt{\tfrac{7}{18}}$."
  answer="\frac{\sqrt{14}}{6}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{\sqrt{14}}{6}$"
  hint="Use the Quotient Property to write the numerator and denominator as separate square roots, simplify the radical in the denominator first, then rationalize the denominator."
>}}

{{< fillin
  question="Simplify: $\sqrt{\tfrac{3}{32}}$."
  answer="\frac{\sqrt{6}}{8}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{\sqrt{6}}{8}$"
  hint="Use the Quotient Property to write the numerator and denominator as separate square roots, simplify the radical in the denominator first, then rationalize the denominator."
>}}

**Example.** Simplify $\sqrt{\tfrac{11}{28}}$.

Rewrite using the Quotient Property, simplify the denominator, rationalize, and
then simplify:

$$
\begin{array}{lrcl}
\text{Rewrite using the Quotient Property.} & \sqrt{\tfrac{11}{28}} &=& \tfrac{\sqrt{11}}{\sqrt{28}} \\[10pt]
\text{Simplify the denominator.} && & \tfrac{\sqrt{11}}{2\sqrt{7}} \\[10pt]
\text{Rationalize the denominator.} && & \tfrac{\sqrt{11} \cdot \sqrt{7}}{2\sqrt{7} \cdot \sqrt{7}} \\[10pt]
\text{Simplify.} && & \tfrac{\sqrt{77}}{2 \cdot 7} \\[10pt]
\text{Simplify.} && & \tfrac{\sqrt{77}}{14}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt{\tfrac{3}{27}}$."
  answer="\frac{1}{3}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{1}{3}$"
  hint="Reduce the fraction under the radical first, then simplify."
>}}

{{< fillin
  question="Simplify: $\sqrt{\tfrac{10}{50}}$."
  answer="\frac{\sqrt{5}}{5}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{\sqrt{5}}{5}$"
  hint="Reduce the fraction under the radical first, use the Quotient Property, then rationalize the denominator."
>}}

## Rationalize a two-term denominator

When the denominator of a fraction is a sum or difference with square roots, we
use the **Product of Conjugates** pattern to rationalize the denominator.
Recall that the conjugate of $a + b$ is $a - b$, and the product of conjugates
is a difference of squares:

$$(a - b)(a + b) = a^2 - b^2.$$

For example, multiplying $2 - \sqrt{5}$ by its conjugate $2 + \sqrt{5}$ gives

$$\left(2 - \sqrt{5}\right)\left(2 + \sqrt{5}\right) = 2^2 - \left(\sqrt{5}\right)^2 = 4 - 5 = -1.$$

When we multiply a binomial that includes a square root by its conjugate, the
product has no square roots.

**Example.** Simplify $\tfrac{4}{4 + \sqrt{2}}$.

Multiply the numerator and denominator by the conjugate $4 - \sqrt{2}$, then
simplify the denominator:

$$
\begin{array}{lrcl}
\text{Multiply by the conjugate.} & \tfrac{4}{4 + \sqrt{2}} &=& \tfrac{4\left(4 - \sqrt{2}\right)}{\left(4 + \sqrt{2}\right)\left(4 - \sqrt{2}\right)} \\[10pt]
\text{Multiply the conjugates in the denominator.} && & \tfrac{4\left(4 - \sqrt{2}\right)}{4^2 - \left(\sqrt{2}\right)^2} \\[10pt]
\text{Simplify the denominator.} && & \tfrac{4\left(4 - \sqrt{2}\right)}{16 - 2} \\[10pt]
\text{Simplify the denominator.} && & \tfrac{4\left(4 - \sqrt{2}\right)}{14} \\[10pt]
\text{Remove common factors.} && & \tfrac{2\left(4 - \sqrt{2}\right)}{7}
\end{array}
$$

We leave the numerator in factored form to make it easier to look for common
factors after we have simplified the denominator.

{{< fillin
  question="Simplify: $\tfrac{2}{2 + \sqrt{3}}$."
  answer="4 - 2\sqrt{3}"
  answerForm="simplified-radical no-like-terms"
  answerDisplay="$4 - 2\sqrt{3}$"
  hint="Multiply the numerator and denominator by the conjugate of the denominator, simplify the denominator, then remove any common factors."
>}}

{{< fillin
  question="Simplify: $\tfrac{5}{5 + \sqrt{3}}$."
  answer="\frac{5(5 - \sqrt{3})}{22}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{5\left(5 - \sqrt{3}\right)}{22}$"
  hint="Multiply the numerator and denominator by the conjugate of the denominator, simplify the denominator, then remove any common factors."
>}}

**Example.** Simplify $\tfrac{5}{2 - \sqrt{3}}$.

Multiply the numerator and denominator by the conjugate $2 + \sqrt{3}$, then
simplify the denominator:

$$
\begin{array}{lrcl}
\text{Multiply by the conjugate.} & \tfrac{5}{2 - \sqrt{3}} &=& \tfrac{5\left(2 + \sqrt{3}\right)}{\left(2 - \sqrt{3}\right)\left(2 + \sqrt{3}\right)} \\[10pt]
\text{Multiply the conjugates in the denominator.} && & \tfrac{5\left(2 + \sqrt{3}\right)}{2^2 - \left(\sqrt{3}\right)^2} \\[10pt]
\text{Simplify the denominator.} && & \tfrac{5\left(2 + \sqrt{3}\right)}{4 - 3} \\[10pt]
\text{Simplify the denominator.} && & \tfrac{5\left(2 + \sqrt{3}\right)}{1} \\[10pt]
\text{Simplify.} && & 5\left(2 + \sqrt{3}\right)
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{3}{1 - \sqrt{5}}$."
  answer="-\frac{3(1 + \sqrt{5})}{4}"
  answerForm="simplified-radical"
  answerDisplay="$-\tfrac{3\left(1 + \sqrt{5}\right)}{4}$"
  hint="Multiply the numerator and denominator by the conjugate of the denominator, simplify the denominator, then remove any common factors."
>}}

{{< fillin
  question="Simplify: $\tfrac{2}{4 - \sqrt{6}}$."
  answer="\frac{4 + \sqrt{6}}{5}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{4 + \sqrt{6}}{5}$"
  hint="Multiply the numerator and denominator by the conjugate of the denominator, simplify the denominator, then remove any common factors."
>}}

**Example.** Simplify $\tfrac{\sqrt{3}}{\sqrt{u} - \sqrt{6}}$.

Multiply the numerator and denominator by the conjugate $\sqrt{u} + \sqrt{6}$,
then simplify the denominator:

$$
\begin{array}{lrcl}
\text{Multiply by the conjugate.} & \tfrac{\sqrt{3}}{\sqrt{u} - \sqrt{6}} &=& \tfrac{\sqrt{3}\left(\sqrt{u} + \sqrt{6}\right)}{\left(\sqrt{u} - \sqrt{6}\right)\left(\sqrt{u} + \sqrt{6}\right)} \\[10pt]
\text{Multiply the conjugates in the denominator.} && & \tfrac{\sqrt{3}\left(\sqrt{u} + \sqrt{6}\right)}{\left(\sqrt{u}\right)^2 - \left(\sqrt{6}\right)^2} \\[10pt]
\text{Simplify the denominator.} && & \tfrac{\sqrt{3}\left(\sqrt{u} + \sqrt{6}\right)}{u - 6}
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{\sqrt{5}}{\sqrt{x} + \sqrt{2}}$."
  answer="\frac{\sqrt{5}(\sqrt{x} - \sqrt{2})}{x - 2}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{\sqrt{5}\left(\sqrt{x} - \sqrt{2}\right)}{x - 2}$"
  hint="Multiply the numerator and denominator by the conjugate of the denominator, then simplify the denominator."
>}}

{{< fillin
  question="Simplify: $\tfrac{\sqrt{10}}{\sqrt{y} - \sqrt{3}}$."
  answer="\frac{\sqrt{10}(\sqrt{y} + \sqrt{3})}{y - 3}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{\sqrt{10}\left(\sqrt{y} + \sqrt{3}\right)}{y - 3}$"
  hint="Multiply the numerator and denominator by the conjugate of the denominator, then simplify the denominator."
>}}

When the numerator is the same binomial as the conjugate, multiplying makes
the numerator a square. We leave it in factored form, which lets us check for
common factors to remove.

**Example.** Simplify $\tfrac{\sqrt{x} + \sqrt{7}}{\sqrt{x} - \sqrt{7}}$.

Multiply the numerator and denominator by the conjugate $\sqrt{x} + \sqrt{7}$,
then simplify the denominator:

$$
\begin{array}{lrcl}
\text{Multiply by the conjugate.} & \tfrac{\sqrt{x} + \sqrt{7}}{\sqrt{x} - \sqrt{7}} &=& \tfrac{\left(\sqrt{x} + \sqrt{7}\right)\left(\sqrt{x} + \sqrt{7}\right)}{\left(\sqrt{x} - \sqrt{7}\right)\left(\sqrt{x} + \sqrt{7}\right)} \\[10pt]
\text{Multiply the conjugates in the denominator.} && & \tfrac{\left(\sqrt{x} + \sqrt{7}\right)\left(\sqrt{x} + \sqrt{7}\right)}{\left(\sqrt{x}\right)^2 - \left(\sqrt{7}\right)^2} \\[10pt]
\text{Simplify the denominator.} && & \tfrac{\left(\sqrt{x} + \sqrt{7}\right)^2}{x - 7}
\end{array}
$$

We do not square the numerator. In factored form, we can see there are no
common factors to remove from the numerator and denominator.

{{< fillin
  question="Simplify: $\tfrac{\sqrt{p} + \sqrt{2}}{\sqrt{p} - \sqrt{2}}$."
  answer="\frac{(\sqrt{p} + \sqrt{2})^2}{p - 2}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{\left(\sqrt{p} + \sqrt{2}\right)^2}{p - 2}$"
  hint="Multiply the numerator and denominator by the conjugate of the denominator and simplify the denominator; leave the numerator in factored form."
>}}

{{< fillin
  question="Simplify: $\tfrac{\sqrt{q} - \sqrt{10}}{\sqrt{q} + \sqrt{10}}$."
  answer="\frac{(\sqrt{q} - \sqrt{10})^2}{q - 10}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{\left(\sqrt{q} - \sqrt{10}\right)^2}{q - 10}$"
  hint="Multiply the numerator and denominator by the conjugate of the denominator and simplify the denominator; leave the numerator in factored form."
>}}

## Key terms

**Quotient Property of Square Roots** — for non-negative real numbers $a$ and
$b$ with $b \neq 0$, $\sqrt{\tfrac{a}{b}} = \tfrac{\sqrt{a}}{\sqrt{b}}$ (and its
reverse), used to simplify a quotient of square roots. **rationalizing the
denominator** — converting a fraction with a radical in the denominator to an
equivalent fraction whose denominator is an integer. **conjugate** — for a
two-term expression $a + b$, the expression $a - b$; multiplying a binomial
containing a square root by its conjugate gives a product with no square roots.
**simplified square root** — a square root with no perfect-square factors in
the radicand, no fractions in the radicand, and no square roots in a
denominator.

## Practice

### Divide square roots

{{< fillin
  question="Simplify: $\tfrac{\sqrt{27}}{6}$."
  answer="\frac{\sqrt{3}}{2}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{\sqrt{3}}{2}$"
  hint="Simplify the radical by taking out its largest perfect-square factor, then remove the common factor of the numerator and denominator."
>}}

{{< fillin
  question="Simplify: $\tfrac{2 - \sqrt{32}}{8}$."
  answer="\frac{1 - 2\sqrt{2}}{4}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{1 - 2\sqrt{2}}{4}$"
  hint="Simplify the radical by taking out its largest perfect-square factor, factor the common factor out of the numerator, then remove it from the numerator and denominator."
>}}

{{< fillin
  question="Simplify: $\tfrac{\sqrt{320mn^{5}}}{\sqrt{45m^{7}n^{3}}}$."
  answer="\frac{8n}{3m^{3}}"
  answerForm="simplified-radical single-fraction"
  answerDisplay="$\tfrac{8n}{3m^3}$"
  hint="Use the Quotient Property to write the quotient as one square root, remove common factors with the Quotient Property for Exponents, then simplify the radical."
>}}

### Rationalize a one-term denominator

{{< fillin
  question="Simplify: $\tfrac{10}{\sqrt{6}}$."
  answer="\frac{5\sqrt{6}}{3}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{5\sqrt{6}}{3}$"
  hint="Multiply the numerator and denominator by the square root in the denominator, simplify, then remove the common factors."
>}}

{{< fillin
  question="Simplify: $-\tfrac{9}{2\sqrt{3}}$."
  answer="-\frac{3\sqrt{3}}{2}"
  answerForm="simplified-radical"
  answerDisplay="$-\tfrac{3\sqrt{3}}{2}$"
  hint="Multiply the numerator and denominator by the square root in the denominator, simplify, then remove the common factors."
>}}

### Rationalize a two-term denominator

{{< fillin
  question="Simplify: $\tfrac{3}{5 + \sqrt{5}}$."
  answer="\frac{3(5 - \sqrt{5})}{20}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{3\left(5 - \sqrt{5}\right)}{20}$"
  hint="Multiply the numerator and denominator by the conjugate of the denominator, simplify the denominator, then remove any common factors."
>}}

{{< fillin
  question="Simplify: $\tfrac{\sqrt{2}}{\sqrt{x} - \sqrt{3}}$."
  answer="\frac{\sqrt{2}(\sqrt{x} + \sqrt{3})}{x - 3}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{\sqrt{2}\left(\sqrt{x} + \sqrt{3}\right)}{x - 3}$"
  hint="Multiply the numerator and denominator by the conjugate of the denominator, then simplify the denominator."
>}}

{{< fillin
  question="Simplify: $\tfrac{\sqrt{r} + \sqrt{5}}{\sqrt{r} - \sqrt{5}}$."
  answer="\frac{(\sqrt{r} + \sqrt{5})^2}{r - 5}"
  answerForm="simplified-radical"
  answerDisplay="$\tfrac{\left(\sqrt{r} + \sqrt{5}\right)^2}{r - 5}$"
  hint="Multiply the numerator and denominator by the conjugate of the denominator and simplify the denominator; leave the numerator in factored form."
>}}

---

<small>This section is adapted from [Elementary Algebra 2e, 9.5 Divide Square Roots](https://openstax.org/books/elementary-algebra-2e/pages/9-5-divide-square-roots) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: described the table of squares and square roots in prose instead of reproducing it, omitted the common-factors figure, recast the worked examples as aligned step tables, and converted the practice problems ("Try Its") into interactive exercises with instant feedback; omitted the Be Prepared quiz, Self Check checklist, media links, and unselected end-of-section exercises; adapted selected end-of-section exercises into the section-final interactive Practice block; and corrected the answers to the $\tfrac{\sqrt{p}+\sqrt{2}}{\sqrt{p}-\sqrt{2}}$ and $\tfrac{\sqrt{q}-\sqrt{10}}{\sqrt{q}+\sqrt{10}}$ Try Its and the $\tfrac{\sqrt{r}+\sqrt{5}}{\sqrt{r}-\sqrt{5}}$ exercise, which the source prints with the exponent $2$ on the whole fraction, to square only the numerator.</small>
