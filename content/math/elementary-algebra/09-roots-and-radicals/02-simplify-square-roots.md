---
title: Simplify Square Roots
description: >-
  Using the Product Property to remove perfect square factors from a radical
  and the Quotient Property to simplify square roots of fractions — adapted from
  OpenStax Elementary Algebra 2e, Section 9.2.
source_section: "9.2"
weight: 2
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** use the Product Property
  to simplify square roots, and use the Quotient Property to simplify square
  roots.
{{< /callout >}}

In the last section we estimated the square root of a number between two
consecutive whole numbers. We could say that $\sqrt{50}$ is between $7$ and $8$.
This is easy to do when the numbers are small enough that we can estimate them,
but what if we want to estimate $\sqrt{500}$? If we simplify the square root
first, we'll be able to estimate it easily. There are other reasons, too, to
simplify square roots, as you'll see later in this chapter.

A square root is considered *simplified* if its radicand contains no perfect
square factors.

{{< callout type="info" >}}
  **Simplified Square Root.** $\sqrt{a}$ is considered simplified if $a$ has no
  perfect square factors.
{{< /callout >}}

So $\sqrt{31}$ is simplified. But $\sqrt{32}$ is not simplified, because $16$ is
a perfect square factor of $32$.

## Use the Product Property to simplify square roots

The properties we will use to simplify expressions with square roots are similar
to the properties of exponents. We know that $(ab)^m = a^m b^m$. The
corresponding property of square roots says that
$\sqrt{ab} = \sqrt{a} \cdot \sqrt{b}$.

{{< callout type="info" >}}
  **Product Property of Square Roots.** If $a$, $b$ are non-negative real
  numbers, then

  $$\sqrt{ab} = \sqrt{a} \cdot \sqrt{b}$$
{{< /callout >}}

We use the Product Property of Square Roots to remove all perfect square factors
from a radical.

**Example.** Simplify $\sqrt{50}$.

Find the largest perfect square factor of the radicand, rewrite the radicand as
a product using that factor, split the radical, and simplify the square root of
the perfect square:

$$
\begin{array}{lrcl}
\text{Rewrite using the largest perfect square factor.} & \sqrt{50} &=& \sqrt{25 \cdot 2} \\[4pt]
\text{Rewrite as the product of two radicals.} && & \sqrt{25} \cdot \sqrt{2} \\[4pt]
\text{Simplify.} && & 5\sqrt{2}
\end{array}
$$

Notice that the simplified form of $\sqrt{50}$ is $5\sqrt{2}$, which is the
product of an integer and a square root. We always write the integer in front of
the square root.

{{< callout type="info" >}}
  **How to simplify a square root using the Product Property.**

  1. Find the largest perfect square factor of the radicand. Rewrite the
     radicand as a product using that perfect square factor.
  2. Use the product rule to rewrite the radical as the product of two radicals.
  3. Simplify the square root of the perfect square.
{{< /callout >}}

{{< fillin
  question="Simplify: $\sqrt{48}$."
  answer="4\sqrt{3}"
  answerDisplay="$4\sqrt{3}$"
  hint="The largest perfect square factor of $48$ is $16$."
>}}

**Example.** Simplify $\sqrt{500}$.

The largest perfect square factor of $500$ is $100$:

$$
\begin{array}{lrcl}
\text{Rewrite using the largest perfect square factor.} & \sqrt{500} &=& \sqrt{100 \cdot 5} \\[4pt]
\text{Rewrite as the product of two radicals.} && & \sqrt{100} \cdot \sqrt{5} \\[4pt]
\text{Simplify.} && & 10\sqrt{5}
\end{array}
$$

We could use the simplified form $10\sqrt{5}$ to estimate $\sqrt{500}$. We know
$5$ is between $2$ and $3$, so $\sqrt{500}$ is between $20$ and $30$.

The next example is much like the previous ones, but with variables.

**Example.** Simplify $\sqrt{x^3}$.

Rewrite $x^3$ using its largest perfect square factor $x^2$, split the radical,
and simplify:

$$
\begin{array}{lrcl}
\text{Rewrite using the largest perfect square factor.} & \sqrt{x^3} &=& \sqrt{x^2 \cdot x} \\[4pt]
\text{Rewrite as the product of two radicals.} && & \sqrt{x^2} \cdot \sqrt{x} \\[4pt]
\text{Simplify.} && & x\sqrt{x}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt{b^5}$."
  answer="b^2\sqrt{b}"
  answerDisplay="$b^2\sqrt{b}$"
  hint="The largest perfect square factor of $b^5$ is $b^4$, and $\sqrt{b^4} = b^2$."
>}}

We follow the same procedure when there is a coefficient in the radical, too.

**Example.** Simplify $\sqrt{25y^5}$.

The largest perfect square factor of $25y^5$ is $25y^4$:

$$
\begin{array}{lrcl}
\text{Rewrite using the largest perfect square factor.} & \sqrt{25y^5} &=& \sqrt{25y^4 \cdot y} \\[4pt]
\text{Rewrite as the product of two radicals.} && & \sqrt{25y^4} \cdot \sqrt{y} \\[4pt]
\text{Simplify.} && & 5y^2\sqrt{y}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt{16x^7}$."
  answer="4x^3\sqrt{x}"
  answerDisplay="$4x^3\sqrt{x}$"
  hint="The largest perfect square factor is $16x^6$; $\sqrt{16x^6} = 4x^3$."
>}}

In the next example both the constant and the variable have perfect square
factors.

**Example.** Simplify $\sqrt{72n^7}$.

The largest perfect square factor of $72n^7$ is $36n^6$, leaving a factor of
$2n$ inside the radical:

$$
\begin{array}{lrcl}
\text{Rewrite using the largest perfect square factor.} & \sqrt{72n^7} &=& \sqrt{36n^6 \cdot 2n} \\[4pt]
\text{Rewrite as the product of two radicals.} && & \sqrt{36n^6} \cdot \sqrt{2n} \\[4pt]
\text{Simplify.} && & 6n^3\sqrt{2n}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt{32y^5}$."
  answer="4y^2\sqrt{2y}"
  answerDisplay="$4y^2\sqrt{2y}$"
  hint="The largest perfect square factor is $16y^4$, leaving $2y$ under the radical."
>}}

**Example.** Simplify $\sqrt{63u^3 v^5}$.

The largest perfect square factor is $9u^2 v^4$, leaving $7uv$ inside the
radical:

$$
\begin{array}{lrcl}
\text{Rewrite using the largest perfect square factor.} & \sqrt{63u^3 v^5} &=& \sqrt{9u^2 v^4 \cdot 7uv} \\[4pt]
\text{Rewrite as the product of two radicals.} && & \sqrt{9u^2 v^4} \cdot \sqrt{7uv} \\[4pt]
\text{Simplify.} && & 3uv^2\sqrt{7uv}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt{98a^7 b^5}$."
  answer="7a^3 b^2\sqrt{2ab}"
  answerDisplay="$7a^3 b^2\sqrt{2ab}$"
  hint="The largest perfect square factor is $49a^6 b^4$, leaving $2ab$ under the radical."
>}}

We have seen how to use the Order of Operations to simplify some expressions
with radicals. To simplify $\sqrt{25} + \sqrt{144}$ we must simplify each square
root separately first, then add to get the sum of $17$. The expression
$\sqrt{17} + \sqrt{7}$ cannot be simplified — to begin we'd need to simplify each
square root, but neither $17$ nor $7$ contains a perfect square factor.

In the next example, we have the sum of an integer and a square root. We simplify
the square root but cannot add the resulting expression to the integer.

**Example.** Simplify $3 + \sqrt{32}$.

Simplify the square root; the terms are not like, so we cannot combine them:

$$
\begin{array}{lrcl}
\text{Rewrite using the largest perfect square factor.} & 3 + \sqrt{32} &=& 3 + \sqrt{16 \cdot 2} \\[4pt]
\text{Rewrite as the product of two radicals.} && & 3 + \sqrt{16} \cdot \sqrt{2} \\[4pt]
\text{Simplify.} && & 3 + 4\sqrt{2}
\end{array}
$$

The terms are not like and so we cannot add them. Trying to add an integer and a
radical is like trying to add an integer and a variable — they are not like
terms!

{{< fillin
  question="Simplify: $5 + \sqrt{75}$."
  answer="5 + 5\sqrt{3}"
  answerDisplay="$5 + 5\sqrt{3}$"
  hint="Simplify $\sqrt{75}$ using its largest perfect square factor $25$. The integer and the radical are not like terms, so leave them as a sum."
>}}

The next example includes a fraction with a radical in the numerator. Remember
that in order to simplify a fraction you need a common factor in the numerator
and denominator.

**Example.** Simplify $\tfrac{4 - \sqrt{48}}{2}$.

Simplify the radical, factor the common factor out of the numerator, and then
remove the common factor of $2$ from the numerator and denominator:

$$
\begin{array}{lrcl}
\text{Rewrite using the largest perfect square factor.} & \tfrac{4 - \sqrt{48}}{2} &=& \tfrac{4 - \sqrt{16 \cdot 3}}{2} \\[10pt]
\text{Rewrite as the product of two radicals.} && & \tfrac{4 - \sqrt{16} \cdot \sqrt{3}}{2} \\[10pt]
\text{Simplify the radical.} && & \tfrac{4 - 4\sqrt{3}}{2} \\[10pt]
\text{Factor the common factor from the numerator.} && & \tfrac{4(1 - \sqrt{3})}{2} \\[10pt]
\text{Remove the common factor } 2. && & 2(1 - \sqrt{3})
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{10 - \sqrt{75}}{5}$."
  answer="2 - \sqrt{3}"
  answerDisplay="$2 - \sqrt{3}$"
  hint="Simplify $\sqrt{75} = 5\sqrt{3}$, factor $5$ from the numerator, then remove the common factor of $5$."
>}}

## Use the Quotient Property to simplify square roots

Whenever you have to simplify a square root, the first step you should take is to
determine whether the radicand is a perfect square. A *perfect square fraction*
is a fraction in which both the numerator and the denominator are perfect
squares.

**Example.** Simplify $\sqrt{\tfrac{9}{64}}$.

Since $\left(\tfrac{3}{8}\right)^2 = \tfrac{9}{64}$, the fraction is a perfect
square, so

$$\sqrt{\tfrac{9}{64}} = \tfrac{3}{8}.$$

{{< fillin
  question="Simplify: $\sqrt{\tfrac{25}{16}}$."
  answer="\tfrac{5}{4}"
  answerDisplay="$\tfrac{5}{4}$"
  hint="Both $25$ and $16$ are perfect squares. What number squared gives $\tfrac{25}{16}$?"
>}}

If the numerator and denominator have any common factors, remove them. You may
find a perfect square fraction!

**Example.** Simplify $\sqrt{\tfrac{45}{80}}$.

Simplify the fraction inside the radical first by removing common factors, then
take the square root of the perfect square fraction:

$$
\begin{array}{lrcl}
\text{Rewrite showing the common factors.} & \sqrt{\tfrac{45}{80}} &=& \sqrt{\tfrac{5 \cdot 9}{5 \cdot 16}} \\[10pt]
\text{Simplify the fraction by removing common factors.} && & \sqrt{\tfrac{9}{16}} \\[10pt]
\text{Simplify.} && & \tfrac{3}{4}
\end{array}
$$

In the last example, our first step was to simplify the fraction under the
radical by removing common factors. In the next example we will use the Quotient
Property to simplify under the radical. We divide the like bases by subtracting
their exponents, $\tfrac{a^m}{a^n} = a^{m-n}$, $a \neq 0$.

**Example.** Simplify $\sqrt{\tfrac{m^6}{m^4}}$.

Simplify the fraction inside the radical first by dividing the like bases, then
take the square root:

$$
\begin{array}{lrcl}
\text{Divide the like bases by subtracting the exponents.} & \sqrt{\tfrac{m^6}{m^4}} &=& \sqrt{m^2} \\[4pt]
\text{Simplify.} && & m
\end{array}
$$

**Example.** Simplify $\sqrt{\tfrac{48p^7}{3p^3}}$.

Simplify the fraction inside the radical first, then take the square root of the
perfect square:

$$
\begin{array}{lrcl}
\text{Simplify the fraction inside the radical first.} & \sqrt{\tfrac{48p^7}{3p^3}} &=& \sqrt{16p^4} \\[4pt]
\text{Simplify.} && & 4p^2
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt{\tfrac{75x^5}{3x}}$."
  answer="5x^2"
  answerDisplay="$5x^2$"
  hint="Divide inside the radical first: $\tfrac{75x^5}{3x} = 25x^4$, a perfect square."
>}}

Remember the Quotient to a Power Property? It said we could raise a fraction to a
power by raising the numerator and denominator to the power separately:
$\left(\tfrac{a}{b}\right)^m = \tfrac{a^m}{b^m}$, $b \neq 0$. We can use a similar
property to simplify a square root of a fraction. After removing all common
factors from the numerator and denominator, if the fraction is not a perfect
square we simplify the numerator and denominator separately.

{{< callout type="info" >}}
  **Quotient Property of Square Roots.** If $a$, $b$ are non-negative real
  numbers and $b \neq 0$, then

  $$\sqrt{\tfrac{a}{b}} = \tfrac{\sqrt{a}}{\sqrt{b}}$$
{{< /callout >}}

**Example.** Simplify $\sqrt{\tfrac{21}{64}}$.

We cannot simplify the fraction inside the radical, so rewrite using the Quotient
Property and simplify the square root of $64$; the numerator cannot be
simplified:

$$
\begin{array}{lrcl}
\text{Rewrite using the Quotient Property.} & \sqrt{\tfrac{21}{64}} &=& \tfrac{\sqrt{21}}{\sqrt{64}} \\[10pt]
\text{Simplify the square root of } 64. && & \tfrac{\sqrt{21}}{8}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt{\tfrac{19}{49}}$."
  answer="\tfrac{\sqrt{19}}{7}"
  answerDisplay="$\tfrac{\sqrt{19}}{7}$"
  hint="The fraction has no common factors and $19$ has no perfect square factor. Use the Quotient Property and simplify $\sqrt{49}$."
>}}

**Example.** Use the Quotient Property to simplify $\sqrt{\tfrac{27m^3}{196}}$.

The fraction $\tfrac{27m^3}{196}$ cannot be simplified, so rewrite the radical as
a quotient of two radicals, then simplify the radicals in the numerator and
denominator ($9m^2$ and $196$ are perfect squares):

$$
\begin{array}{lrcl}
\text{Rewrite using the Quotient Property.} & \sqrt{\tfrac{27m^3}{196}} &=& \tfrac{\sqrt{27m^3}}{\sqrt{196}} \\[10pt]
\text{Simplify the radicals in the numerator and denominator.} && & \tfrac{\sqrt{9m^2} \cdot \sqrt{3m}}{\sqrt{196}} \\[10pt]
\text{Simplify.} && & \tfrac{3m\sqrt{3m}}{14}
\end{array}
$$

{{< callout type="info" >}}
  **How to simplify a square root using the Quotient Property.**

  1. Simplify the fraction in the radicand, if possible.
  2. Use the Quotient Property to rewrite the radical as the quotient of two
     radicals.
  3. Simplify the radicals in the numerator and the denominator.
{{< /callout >}}

**Example.** Simplify $\sqrt{\tfrac{45x^5}{y^4}}$.

We cannot simplify the fraction in the radicand, so rewrite using the Quotient
Property, then simplify the radicals in the numerator and denominator:

$$
\begin{array}{lrcl}
\text{Rewrite using the Quotient Property.} & \sqrt{\tfrac{45x^5}{y^4}} &=& \tfrac{\sqrt{45x^5}}{\sqrt{y^4}} \\[10pt]
\text{Simplify the radicals in the numerator and denominator.} && & \tfrac{\sqrt{9x^4} \cdot \sqrt{5x}}{y^2} \\[10pt]
\text{Simplify.} && & \tfrac{3x^2\sqrt{5x}}{y^2}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt{\tfrac{80m^3}{n^6}}$."
  answer="\tfrac{4m\sqrt{5m}}{n^3}"
  answerDisplay="$\tfrac{4m\sqrt{5m}}{n^3}$"
  hint="Rewrite with the Quotient Property. The largest perfect square factor of $80m^3$ is $16m^2$, and $\sqrt{n^6} = n^3$."
>}}

Be sure to simplify the fraction in the radicand first, if possible.

**Example.** Simplify $\sqrt{\tfrac{81d^9}{25d^4}}$.

Simplify the fraction in the radicand first, then rewrite using the Quotient
Property and simplify the radicals in the numerator and denominator:

$$
\begin{array}{lrcl}
\text{Simplify the fraction in the radicand.} & \sqrt{\tfrac{81d^9}{25d^4}} &=& \sqrt{\tfrac{81d^5}{25}} \\[10pt]
\text{Rewrite using the Quotient Property.} && & \tfrac{\sqrt{81d^5}}{\sqrt{25}} \\[10pt]
\text{Simplify the radicals in the numerator and denominator.} && & \tfrac{\sqrt{81d^4} \cdot \sqrt{d}}{5} \\[10pt]
\text{Simplify.} && & \tfrac{9d^2\sqrt{d}}{5}
\end{array}
$$

**Example.** Simplify $\sqrt{\tfrac{18p^5 q^7}{32pq^2}}$.

Simplify the fraction in the radicand, then rewrite using the Quotient Property
and simplify each radical:

$$
\begin{array}{lrcl}
\text{Simplify the fraction in the radicand.} & \sqrt{\tfrac{18p^5 q^7}{32pq^2}} &=& \sqrt{\tfrac{9p^4 q^5}{16}} \\[10pt]
\text{Rewrite using the Quotient Property.} && & \tfrac{\sqrt{9p^4 q^5}}{\sqrt{16}} \\[10pt]
\text{Simplify the radicals in the numerator and denominator.} && & \tfrac{\sqrt{9p^4 q^4} \cdot \sqrt{q}}{4} \\[10pt]
\text{Simplify.} && & \tfrac{3p^2 q^2\sqrt{q}}{4}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt{\tfrac{50x^5 y^3}{72x^4 y}}$."
  answer="\tfrac{5y\sqrt{x}}{6}"
  answerDisplay="$\tfrac{5y\sqrt{x}}{6}$"
  hint="Simplify the fraction in the radicand first: $\tfrac{50x^5 y^3}{72x^4 y} = \tfrac{25xy^2}{36}$. Then use the Quotient Property."
>}}

## Key terms

**simplified square root** — a square root whose radicand contains no perfect
square factors. **perfect square fraction** — a fraction in which both the
numerator and the denominator are perfect squares. **Product Property of Square
Roots** — for non-negative $a$ and $b$, $\sqrt{ab} = \sqrt{a} \cdot \sqrt{b}$.
**Quotient Property of Square Roots** — for non-negative $a$ and $b$ with
$b \neq 0$, $\sqrt{\tfrac{a}{b}} = \tfrac{\sqrt{a}}{\sqrt{b}}$.

---

<small>This section is adapted from [Elementary Algebra 2e, 9.2 Simplify Square Roots](https://openstax.org/books/elementary-algebra-2e/pages/9-2-simplify-square-roots) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked "How To" step tables as display equality chains with left-hand explanations; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
