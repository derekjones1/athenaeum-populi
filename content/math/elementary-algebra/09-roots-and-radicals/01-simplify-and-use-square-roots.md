---
title: Simplify and Use Square Roots
description: >-
  Simplifying square-root expressions, estimating and approximating square
  roots, and simplifying variable expressions with square roots — adapted from
  OpenStax Elementary Algebra 2e, Section 9.1.
source_section: "9.1"
weight: 1
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** simplify expressions with
  square roots, estimate square roots, approximate square roots, and simplify
  variable expressions with square roots.
{{< /callout >}}

## Simplify Expressions with Square Roots

Remember that when a number $n$ is multiplied by itself, we write $n^2$ and read
it "$n$ squared." For example, $15^2$ reads as "$15$ squared," and $225$ is
called the square of $15$, since $15^2 = 225$.

{{< callout type="info" >}}
  **Square of a number.** If $n^2 = m$, then $m$ is the **square** of $n$.
{{< /callout >}}

Sometimes we need to look at the relationship between numbers and their squares
in reverse. Because $225$ is the square of $15$, we can also say that $15$ is a
square root of $225$. A number whose square is $m$ is called a **square root**
of $m$.

{{< callout type="info" >}}
  **Square root of a number.** If $n^2 = m$, then $n$ is a **square root** of
  $m$.
{{< /callout >}}

Notice that $(-15)^2 = 225$ also, so $-15$ is also a square root of $225$.
Therefore, both $15$ and $-15$ are square roots of $225$.

So every positive number has two square roots — one positive and one negative.
What if we only wanted the positive square root of a positive number? The
**radical sign**, $\sqrt{m}$, denotes the positive square root. The positive
square root is also called the **principal square root**.

We also use the radical sign for the square root of zero. Because $0^2 = 0$,
$\sqrt{0} = 0$. Notice that zero has only one square root.

{{< callout type="info" >}}
  **Square root notation.** In $\sqrt{m}$, the $\sqrt{\phantom{m}}$ is the
  **radical sign** and $m$ is the **radicand**. $\sqrt{m}$ is read "the square
  root of $m$." If $m = n^2$, then $\sqrt{m} = n$, for $n \geq 0$. The square
  root of $m$, $\sqrt{m}$, is the non-negative number whose square is $m$.
{{< /callout >}}

Since $15$ is the positive square root of $225$, we write $\sqrt{225} = 15$. The
radical sign indicates the positive root, so $\sqrt{225} = 15$. If we want the
negative square root of a number, we place a negative sign in front of the
radical sign. For example, $-\sqrt{225} = -15$.

**Example.** Simplify: (a) $\sqrt{36}$, (b) $\sqrt{196}$, (c) $-\sqrt{81}$,
(d) $-\sqrt{289}$.

$$
\begin{array}{lrcl}
\text{(a) Since } 6^2 = 36. & \sqrt{36} &=& 6 \\[4pt]
\text{(b) Since } 14^2 = 196. & \sqrt{196} &=& 14 \\[4pt]
\text{(c) The negative is in front of the radical sign.} & -\sqrt{81} &=& -9 \\[4pt]
\text{(d) The negative is in front of the radical sign.} & -\sqrt{289} &=& -17
\end{array}
$$

Can we simplify $\sqrt{-169}$? Is there a number whose square is $-169$? Any
positive number squared is positive, and any negative number squared is also
positive. There is no real number equal to $\sqrt{-169}$, so we say $\sqrt{-169}$
is not a real number. Contrast this with $-\sqrt{64} = -8$, where the negative
sits outside the radical.

{{< fillin
  question="Simplify $\sqrt{225}$."
  answer="15"
  hint="What number, multiplied by itself, gives $225$?"
>}}

{{< fillin
  question="Simplify $-\sqrt{121}$."
  answer="-11"
  hint="The negative sign is in front of the radical, so simplify the root first, then apply the negative."
  answerDisplay="$-11$"
>}}

{{< multiplechoice
  question="Which is true of $\sqrt{-196}$?"
  hint="Can any real number, squared, produce a negative result?"
  answer="It is not a real number"
>}}
It equals $14$
It equals $-14$
It is not a real number
It equals $0$
{{< /multiplechoice >}}

When using the order of operations to simplify an expression that has square
roots, we treat the radical as a grouping symbol.

**Example.** Simplify: (a) $\sqrt{25} + \sqrt{144}$, (b) $\sqrt{25 + 144}$.

$$
\begin{array}{lrcl}
\text{(a) Use the order of operations.} & \sqrt{25} + \sqrt{144} &=& 5 + 12 \\[4pt]
\text{Simplify.} & &=& 17 \\[4pt]
\text{(b) Simplify under the radical sign.} & \sqrt{25 + 144} &=& \sqrt{169} \\[4pt]
\text{Simplify.} & &=& 13
\end{array}
$$

Notice the different answers in parts (a) and (b)!

{{< fillin
  question="Simplify $\sqrt{9} + \sqrt{16}$."
  answer="7"
  hint="Take each square root separately, then add."
>}}

{{< fillin
  question="Simplify $\sqrt{64 + 225}$."
  answer="17"
  hint="The radical is a grouping symbol — add under it first, then take the square root."
>}}

## Estimate Square Roots

So far we have only considered square roots of perfect square numbers. The
square roots of other numbers are not whole numbers. Consider the perfect
squares $4$ and $9$: since $\sqrt{4} = 2$ and $\sqrt{9} = 3$, any number between
$4$ and $9$ has a square root between $2$ and $3$. For example, $\sqrt{5}$ must
be between $2$ and $3$. Using inequality symbols, we write:

$$
2 < \sqrt{5} < 3
$$

**Example.** Estimate $\sqrt{60}$ between two consecutive whole numbers.

Think of the perfect square numbers closest to $60$. The perfect squares just
below and above $60$ are $49 = 7^2$ and $64 = 8^2$.

$$
\begin{array}{lrcl}
\text{Locate } 60 \text{ between two consecutive perfect squares.} & 49 &<& 60 < 64 \\[4pt]
\sqrt{60} \text{ is between their square roots.} & 7 &<& \sqrt{60} < 8
\end{array}
$$

{{< fillin
  question="Estimate $\sqrt{38}$: it lies between two consecutive whole numbers. Enter the smaller whole number."
  answer="6"
  hint="Which perfect square is just below $38$?"
>}}

{{< fillin
  question="Estimate $\sqrt{84}$: it lies between two consecutive whole numbers. Enter the larger whole number."
  answer="10"
  hint="Which perfect square is just above $84$?"
>}}

## Approximate Square Roots

There are mathematical methods to approximate square roots, but nowadays most
people use a calculator to find them. Find the $\sqrt{x}$ key on your calculator;
you will use this key to approximate square roots.

When you use your calculator to find the square root of a number that is not a
perfect square, the answer you see is not the exact square root. It is an
**approximation**, accurate to the number of digits shown on your calculator's
display. The symbol for an approximation is $\approx$ and it is read
"approximately."

Suppose your calculator has a $10$-digit display. You would see that
$\sqrt{5} \approx 2.236067978$. If we wanted to round $\sqrt{5}$ to two decimal
places, we would say $\sqrt{5} \approx 2.24$.

How do we know these values are approximations and not the exact values? Look at
what happens when we square them:

$$
\begin{array}{rcl}
(2.236067978)^2 &=& 5.000000002 \\[4pt]
(2.24)^2 &=& 5.0176
\end{array}
$$

Their squares are close to $5$, but are not exactly equal to $5$.

**Example.** Round $\sqrt{17}$ to two decimal places.

$$
\begin{array}{lrcl}
\text{Use the calculator square root key.} & \sqrt{17} &\approx& 4.123105626\ldots \\[4pt]
\text{Round to two decimal places.} & \sqrt{17} &\approx& 4.12
\end{array}
$$

{{< fillin
  question="Round $\sqrt{11}$ to two decimal places."
  answer="3.32"
  hint="Use a calculator's square root key, then keep two digits after the decimal point."
>}}

{{< fillin
  question="Round $\sqrt{13}$ to two decimal places."
  answer="3.61"
  hint="Use a calculator's square root key, then keep two digits after the decimal point."
>}}

## Simplify Variable Expressions with Square Roots

What if we have to find a square root of an expression with a variable? Consider
$\sqrt{9x^2}$. Can you think of an expression whose square is $9x^2$? Since
$(3x)^2 = 9x^2$, we have $\sqrt{9x^2} = 3x$.

When we use the radical sign to take the square root of a variable expression, we
should specify that $x \geq 0$ to make sure we get the **principal square root**.
However, in this chapter we will assume that each variable in a square-root
expression represents a non-negative number, and so we will not write $x \geq 0$
next to every radical.

What about square roots of higher powers of variables? Think about the Power
Property of Exponents, $\left(a^m\right)^n = a^{m \cdot n}$. If we square $a^m$,
the exponent will become $2m$:

$$
\left(a^m\right)^2 = a^{2m}
$$

This tells us how to take square roots of even powers. For example,
$\sqrt{25u^8} = 5u^4$ because $\left(5u^4\right)^2 = 25u^8$, and
$\sqrt{196q^{36}} = 14q^{18}$ because $\left(14q^{18}\right)^2 = 196q^{36}$.

**Example.** Simplify: (a) $\sqrt{x^6}$, (b) $\sqrt{y^{16}}$.

$$
\begin{array}{lrcl}
\text{(a) Since } \left(x^3\right)^2 = x^6. & \sqrt{x^6} &=& x^3 \\[4pt]
\text{(b) Since } \left(y^8\right)^2 = y^{16}. & \sqrt{y^{16}} &=& y^8
\end{array}
$$

**Example.** Simplify $\sqrt{16n^2}$.

$$
\begin{array}{lrcl}
\text{Since } (4n)^2 = 16n^2. & \sqrt{16n^2} &=& 4n
\end{array}
$$

**Example.** Simplify $-\sqrt{81c^2}$.

$$
\begin{array}{lrcl}
\text{Since } (9c)^2 = 81c^2. & -\sqrt{81c^2} &=& -9c
\end{array}
$$

**Example.** Simplify $\sqrt{36x^2y^2}$.

$$
\begin{array}{lrcl}
\text{Since } (6xy)^2 = 36x^2y^2. & \sqrt{36x^2y^2} &=& 6xy
\end{array}
$$

**Example.** Simplify $\sqrt{64p^{64}}$.

$$
\begin{array}{lrcl}
\text{Since } \left(8p^{32}\right)^2 = 64p^{64}. & \sqrt{64p^{64}} &=& 8p^{32}
\end{array}
$$

**Example.** Simplify $\sqrt{121a^6b^8}$.

$$
\begin{array}{lrcl}
\text{Since } \left(11a^3b^4\right)^2 = 121a^6b^8. & \sqrt{121a^6b^8} &=& 11a^3b^4
\end{array}
$$

{{< fillin
  question="Simplify $\sqrt{z^{12}}$."
  answer="z^6"
  hint="Half the exponent under an even-powered square root."
  answerDisplay="$z^6$"
>}}

{{< fillin
  question="Simplify $\sqrt{64x^2}$."
  answer="8x"
  hint="Take the square root of the coefficient and of the variable factor separately."
  answerDisplay="$8x$"
>}}

{{< fillin
  question="Simplify $-\sqrt{100p^2}$."
  answer="-10p"
  hint="The negative sign stays in front; simplify the radical, then apply it."
  answerDisplay="$-10p$"
>}}

{{< fillin
  question="Simplify $\sqrt{225m^2n^2}$."
  answer="15mn"
  hint="Take the square root of $225$, of $m^2$, and of $n^2$ separately."
  answerDisplay="$15mn$"
>}}

{{< fillin
  question="Simplify $\sqrt{144p^{12}q^{20}}$."
  answer="12p^6q^{10}"
  hint="Take the square root of $144$ and halve each even exponent."
  answerDisplay="$12p^6q^{10}$"
>}}

## Key terms

**square** of a number — if $n^2 = m$, then $m$ is the square of $n$. **square
root** of a number — if $n^2 = m$, then $n$ is a square root of $m$; every
positive number has two square roots, one positive and one negative. **radical
sign** — the symbol $\sqrt{\phantom{m}}$ that denotes the positive (principal)
square root. **radicand** — the number or expression under the radical sign.
**principal square root** — the non-negative square root, the one the radical
sign indicates. **approximation** — a value close to the exact square root,
written with $\approx$, accurate to the number of digits displayed.

---

<small>This section is adapted from [Elementary Algebra 2e, 9.1 Simplify and Use Square Roots](https://openstax.org/books/elementary-algebra-2e/pages/9-1-simplify-and-use-square-roots) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the two-column worked examples as aligned step tables; omitted the Be Prepared quiz, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
