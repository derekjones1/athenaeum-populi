---
title: Add and Subtract Square Roots
description: >-
  Combining like square roots the way we combine like terms, and simplifying
  square roots with the Product Property first so that like radicals appear —
  adapted from OpenStax Elementary Algebra 2e, Section 9.3.
source_section: "9.3"
weight: 3
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** add and subtract like
  square roots, and add and subtract square roots that need simplification.
{{< /callout >}}

We must follow the order of operations to simplify expressions with square
roots. The radical is a grouping symbol, so we work inside the radical first.
That is why we simplify $\sqrt{2 + 7}$ by adding inside the radical to get
$\sqrt{9}$, which is $3$.

So if we have to add $\sqrt{2} + \sqrt{7}$, we must **not** combine them into
one radical:

$$\sqrt{2} + \sqrt{7} \neq \sqrt{2 + 7}$$

Trying to add square roots with different radicands is like trying to add unlike
terms. But just like we can add $x + x$ to get $2x$, we can add
$\sqrt{3} + \sqrt{3}$ to get $2\sqrt{3}$.

## Add and subtract like square roots

Adding square roots with the same radicand is just like adding like terms. We
call square roots with the same radicand **like square roots** to remind us they
work the same as like terms.

{{< callout type="info" >}}
  **Like Square Roots.** Square roots with the same radicand are called *like
  square roots*.
{{< /callout >}}

We add and subtract like square roots in the same way we add and subtract like
terms. We know that $3x + 8x$ is $11x$. Similarly, we add
$3\sqrt{x} + 8\sqrt{x}$ and the result is $11\sqrt{x}$.

Think about adding like terms with variables as you do the next few examples.
When you have like radicands, you just add or subtract the coefficients. When
the radicands are not like, you cannot combine the terms.

**Example.** Simplify $2\sqrt{2} - 7\sqrt{2}$.

The radicals are like, so we subtract the coefficients:

$$
\begin{array}{lrcl}
\text{Subtract the coefficients.} & 2\sqrt{2} - 7\sqrt{2} &=& -5\sqrt{2}
\end{array}
$$

{{< fillin
  question="Simplify: $8\sqrt{2} - 9\sqrt{2}$."
  answer="-\sqrt{2}"
  answerDisplay="$-\sqrt{2}$"
  hint="The radicals are like, so subtract the coefficients: $8 - 9$."
>}}

**Example.** Simplify $3\sqrt{y} + 4\sqrt{y}$.

The radicals are like, so we add the coefficients:

$$
\begin{array}{lrcl}
\text{Add the coefficients.} & 3\sqrt{y} + 4\sqrt{y} &=& 7\sqrt{y}
\end{array}
$$

**Example.** Simplify $4\sqrt{x} - 2\sqrt{y}$.

The radicals are **not** like, so we cannot subtract them. We leave the
expression as is:

$$4\sqrt{x} - 2\sqrt{y}$$

{{< fillin
  question="Simplify: $2\sqrt{x} + 7\sqrt{x}$."
  answer="9\sqrt{x}"
  answerDisplay="$9\sqrt{x}$"
  hint="The radicands are the same, so add the coefficients $2$ and $7$ and keep $\sqrt{x}$."
>}}

When there are three or more radicals, combine the like ones the same way.

**Example.** Simplify $5\sqrt{13} + 4\sqrt{13} + 2\sqrt{13}$.

The radicals are like, so we add the coefficients:

$$
\begin{array}{lrcl}
\text{Add the coefficients.} & 5\sqrt{13} + 4\sqrt{13} + 2\sqrt{13} &=& 11\sqrt{13}
\end{array}
$$

**Example.** Simplify $2\sqrt{6} - 6\sqrt{6} + 3\sqrt{3}$.

The first two radicals are like, so we subtract their coefficients. The
$3\sqrt{3}$ term is not like the others, so it stays as it is:

$$
\begin{array}{lrcl}
\text{Combine the like radicals.} & 2\sqrt{6} - 6\sqrt{6} + 3\sqrt{3} &=& -4\sqrt{6} + 3\sqrt{3}
\end{array}
$$

Sometimes combining the coefficients gives $0$, which makes the whole radical
term $0$.

**Example.** Simplify $2\sqrt{5n} - 6\sqrt{5n} + 4\sqrt{5n}$.

The radicals are all like, so we combine them by combining the coefficients:

$$
\begin{array}{lrcl}
\text{Combine the like radicals.} & 2\sqrt{5n} - 6\sqrt{5n} + 4\sqrt{5n} &=& 0\sqrt{5n} \\[4pt]
\text{Simplify.} & &=& 0
\end{array}
$$

When radicals contain more than one variable, as long as all the variables and
their exponents are identical, the radicals are like.

**Example.** Simplify $\sqrt{3xy} + 5\sqrt{3xy} - 4\sqrt{3xy}$.

The radicals are all like, so we combine them by combining the coefficients
($1 + 5 - 4$):

$$
\begin{array}{lrcl}
\text{Combine the like radicals.} & \sqrt{3xy} + 5\sqrt{3xy} - 4\sqrt{3xy} &=& 2\sqrt{3xy}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt{5xy} + 4\sqrt{5xy} - 7\sqrt{5xy}$."
  answer="-2\sqrt{5xy}"
  answerDisplay="$-2\sqrt{5xy}$"
  hint="All three radicands are $5xy$, so combine the coefficients: $1 + 4 - 7$."
>}}

## Add and subtract square roots that need simplification

Remember that we always simplify square roots by removing the largest
perfect-square factor. Sometimes when we have to add or subtract square roots
that do not appear to have like radicals, we find like radicals after
simplifying the square roots.

**Example.** Simplify $\sqrt{20} + 3\sqrt{5}$.

Simplify the radicals when possible, then combine the like radicals:

$$
\begin{array}{lrcl}
\text{Simplify the radicals.} & \sqrt{20} + 3\sqrt{5} &=& \sqrt{4} \cdot \sqrt{5} + 3\sqrt{5} \\[4pt]
& &=& 2\sqrt{5} + 3\sqrt{5} \\[4pt]
\text{Combine the like radicals.} & &=& 5\sqrt{5}
\end{array}
$$

**Example.** Simplify $\sqrt{48} - \sqrt{75}$.

Simplify each radical using the Product Property, then combine the like
radicals:

$$
\begin{array}{lrcl}
\text{Simplify the radicals.} & \sqrt{48} - \sqrt{75} &=& \sqrt{16} \cdot \sqrt{3} - \sqrt{25} \cdot \sqrt{3} \\[4pt]
& &=& 4\sqrt{3} - 5\sqrt{3} \\[4pt]
\text{Combine the like radicals.} & &=& -\sqrt{3}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt{32} - \sqrt{18}$."
  answer="\sqrt{2}"
  answerDisplay="$\sqrt{2}$"
  hint="Write $\sqrt{32} = 4\sqrt{2}$ and $\sqrt{18} = 3\sqrt{2}$, then subtract the coefficients."
>}}

Just like we use the Associative Property of Multiplication to simplify
$5(3x)$ and get $15x$, we can simplify $5\left(3\sqrt{x}\right)$ and get
$15\sqrt{x}$. We use the Associative Property to do this in the next example.

**Example.** Simplify $5\sqrt{18} - 2\sqrt{8}$.

Simplify the radicals, multiply the coefficients, then combine the like
radicals:

$$
\begin{array}{lrcl}
\text{Simplify the radicals.} & 5\sqrt{18} - 2\sqrt{8} &=& 5 \cdot \sqrt{9} \cdot \sqrt{2} - 2 \cdot \sqrt{4} \cdot \sqrt{2} \\[4pt]
& &=& 5 \cdot 3 \cdot \sqrt{2} - 2 \cdot 2 \cdot \sqrt{2} \\[4pt]
& &=& 15\sqrt{2} - 4\sqrt{2} \\[4pt]
\text{Combine the like radicals.} & &=& 11\sqrt{2}
\end{array}
$$

{{< fillin
  question="Simplify: $4\sqrt{27} - 3\sqrt{12}$."
  answer="6\sqrt{3}"
  answerDisplay="$6\sqrt{3}$"
  hint="Simplify to $12\sqrt{3} - 6\sqrt{3}$, then subtract the coefficients."
>}}

When the coefficients are fractions, simplify the radicals first, then find a
common denominator to combine the coefficients of the like radicals.

**Example.** Simplify $\tfrac{3}{4}\sqrt{192} - \tfrac{5}{6}\sqrt{108}$.

Simplify each radical, multiply the coefficients, then combine the like
radicals:

$$
\begin{array}{lrcl}
\text{Simplify the radicals.} & \tfrac{3}{4}\sqrt{192} - \tfrac{5}{6}\sqrt{108} &=& \tfrac{3}{4}\sqrt{64} \cdot \sqrt{3} - \tfrac{5}{6}\sqrt{36} \cdot \sqrt{3} \\[4pt]
& &=& \tfrac{3}{4} \cdot 8 \cdot \sqrt{3} - \tfrac{5}{6} \cdot 6 \cdot \sqrt{3} \\[4pt]
& &=& 6\sqrt{3} - 5\sqrt{3} \\[4pt]
\text{Combine the like radicals.} & &=& \sqrt{3}
\end{array}
$$

**Example.** Simplify $\tfrac{2}{3}\sqrt{48} - \tfrac{3}{4}\sqrt{12}$.

Here the coefficients of the like radicals are fractions, so we find a common
denominator before subtracting:

$$
\begin{array}{lrcl}
\text{Simplify the radicals.} & \tfrac{2}{3}\sqrt{48} - \tfrac{3}{4}\sqrt{12} &=& \tfrac{2}{3}\sqrt{16} \cdot \sqrt{3} - \tfrac{3}{4}\sqrt{4} \cdot \sqrt{3} \\[4pt]
& &=& \tfrac{2}{3} \cdot 4 \cdot \sqrt{3} - \tfrac{3}{4} \cdot 2 \cdot \sqrt{3} \\[4pt]
& &=& \tfrac{8}{3}\sqrt{3} - \tfrac{3}{2}\sqrt{3} \\[4pt]
\text{Find a common denominator.} & &=& \tfrac{16}{6}\sqrt{3} - \tfrac{9}{6}\sqrt{3} \\[4pt]
\text{Simplify.} & &=& \tfrac{7}{6}\sqrt{3}
\end{array}
$$

In the next example, we will remove constant and variable factors from the
square roots.

**Example.** Simplify $\sqrt{18n^5} - \sqrt{32n^5}$.

Simplify each radical by removing the largest perfect-square factor, then
combine the like radicals:

$$
\begin{array}{lrcl}
\text{Simplify the radicals.} & \sqrt{18n^5} - \sqrt{32n^5} &=& \sqrt{9n^4} \cdot \sqrt{2n} - \sqrt{16n^4} \cdot \sqrt{2n} \\[4pt]
& &=& 3n^2\sqrt{2n} - 4n^2\sqrt{2n} \\[4pt]
\text{Combine the like radicals.} & &=& -n^2\sqrt{2n}
\end{array}
$$

Sometimes, even after simplifying, the radicals are still not like and cannot be
combined.

**Example.** Simplify $9\sqrt{50m^2} - 6\sqrt{48m^2}$.

Simplify each radical, multiply the coefficients, then check whether the
radicals are like:

$$
\begin{array}{lrcl}
\text{Simplify the radicals.} & 9\sqrt{50m^2} - 6\sqrt{48m^2} &=& 9\sqrt{25m^2} \cdot \sqrt{2} - 6\sqrt{16m^2} \cdot \sqrt{3} \\[4pt]
& &=& 9 \cdot 5m \cdot \sqrt{2} - 6 \cdot 4m \cdot \sqrt{3} \\[4pt]
& &=& 45m\sqrt{2} - 24m\sqrt{3}
\end{array}
$$

The radicals $\sqrt{2}$ and $\sqrt{3}$ are not like, so the expression cannot be
combined any further.

**Example.** Simplify $2\sqrt{8x^2} - 5x\sqrt{32} + 5\sqrt{18x^2}$.

Simplify each radical, multiply the coefficients, then combine the like
radicals (all three simplify to a multiple of $\sqrt{2}$):

$$
\begin{array}{lrcl}
\text{Simplify the radicals.} & 2\sqrt{8x^2} - 5x\sqrt{32} + 5\sqrt{18x^2} &=& 2\sqrt{4x^2} \cdot \sqrt{2} - 5x\sqrt{16} \cdot \sqrt{2} + 5\sqrt{9x^2} \cdot \sqrt{2} \\[4pt]
& &=& 2 \cdot 2x \cdot \sqrt{2} - 5x \cdot 4 \cdot \sqrt{2} + 5 \cdot 3x \cdot \sqrt{2} \\[4pt]
& &=& 4x\sqrt{2} - 20x\sqrt{2} + 15x\sqrt{2} \\[4pt]
\text{Combine the like radicals.} & &=& -x\sqrt{2}
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{2}{5}\sqrt{32} - \tfrac{1}{3}\sqrt{8}$."
  answer="\frac{14}{15}\sqrt{2}"
  answerDisplay="$\tfrac{14}{15}\sqrt{2}$"
  hint="Simplify to $\tfrac{8}{5}\sqrt{2} - \tfrac{2}{3}\sqrt{2}$, then use a common denominator of $15$."
>}}

{{< fillin
  question="Simplify: $\sqrt{27p^3} - \sqrt{48p^3}$."
  answer="-p\sqrt{3p}"
  answerDisplay="$-p\sqrt{3p}$"
  hint="Each radical simplifies to a multiple of $\sqrt{3p}$: $3p\sqrt{3p} - 4p\sqrt{3p}$."
>}}

## Key terms

**like square roots** — square roots with the same radicand (such as
$3\sqrt{x}$ and $8\sqrt{x}$); like square roots can be combined by adding or
subtracting their coefficients, just like like terms. **coefficient** — the
numerical factor multiplying a square root; only the coefficients of like
square roots are combined when adding or subtracting.

---

<small>This section is adapted from [Elementary Algebra 2e, 9.3 Add and Subtract Square Roots](https://openstax.org/books/elementary-algebra-2e/pages/9-3-add-and-subtract-square-roots) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked examples as prose with aligned display step tables, folded the order-of-operations warm-up into the section opener, and stated the like-square-roots definition inline; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
