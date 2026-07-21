---
title: Simplify Complex Rational Expressions
description: >-
  Simplifying complex rational expressions by writing them as division and
  by multiplying the numerator and denominator by the least common denominator.
source_section: "7.3"
weight: 3
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** simplify a complex
  rational expression by writing it as division, and simplify a complex
  rational expression by using the LCD.
{{< /callout >}}

## Simplify a complex rational expression by writing it as division

Complex fractions are fractions in which the numerator or denominator contains
a fraction. In this section, we will simplify complex rational expressions,
which are rational expressions with rational expressions in the numerator or
denominator.

{{< callout type="info" >}}
  **Complex rational expression.** A **complex rational expression** is a
  rational expression in which the numerator and/or the denominator contains a
  rational expression.
{{< /callout >}}

Here are a few complex rational expressions:

$$
\begin{array}{ccc}
\cfrac{\tfrac{4}{y-3}}{\tfrac{8}{y^2-9}} &
\cfrac{\tfrac{1}{x}+\tfrac{1}{y}}{\tfrac{x}{y}-\tfrac{y}{x}} &
\cfrac{\tfrac{2}{x+6}}{\tfrac{4}{x-6}-\tfrac{4}{x^2-36}}
\end{array}
$$

Remember, we always exclude values that would make any denominator zero. We
will use two methods to simplify complex rational expressions.

We have already seen a complex rational expression earlier in this chapter:

$$
\cfrac{\tfrac{6x^2-7x+2}{4x-8}}{\tfrac{2x^2-8x+3}{x^2-5x+6}}.
$$

Fraction bars tell us to divide, so we rewrite it as a division problem and
multiply the first rational expression by the reciprocal of the second. This
is one method for simplifying complex rational expressions. First make sure
the expression has one fraction over one fraction, and then write it as though
you were dividing two fractions.

**Example.** Simplify the complex rational expression by writing it as
division:

$$
\cfrac{\tfrac{6}{x-4}}{\tfrac{3}{x^2-16}}.
$$

Rewrite the complex fraction as division, multiply by the reciprocal, factor,
and remove common factors:

$$
\begin{array}{lrcl}
\text{Rewrite as division.} & \tfrac{6}{x-4} &\div& \tfrac{3}{x^2-16} \\[10pt]
\text{Multiply by the reciprocal.} & \tfrac{6}{x-4} &\cdot& \tfrac{x^2-16}{3} \\[10pt]
\text{Factor.} &&& \tfrac{3\cdot2\cdot(x-4)(x+4)}{3(x-4)} \\[10pt]
\text{Remove common factors and simplify.} &&& 2(x+4)
\end{array}
$$

The original expression has denominators $x-4$ and $x^2-16$, so it is
undefined if $x=4$ or $x=-4$.

{{< fillin
  question="Simplify $\cfrac{\tfrac{2}{x^2-1}}{\tfrac{3}{x+1}}$ by writing it as division."
  answer="\tfrac{2}{3(x-1)}"
  answerDisplay="$\tfrac{2}{3(x-1)}$"
  hint="Rewrite the main fraction bar as division, multiply by the reciprocal, and factor $x^2-1$."
>}}

{{< fillin
  question="Simplify $\cfrac{\tfrac{1}{x^2-7x+12}}{\tfrac{2}{x-4}}$ by writing it as division."
  answer="\tfrac{1}{2(x-3)}"
  answerDisplay="$\tfrac{1}{2(x-3)}$"
  hint="Rewrite as division and factor $x^2-7x+12$."
>}}

Fraction bars act as grouping symbols. To follow the Order of Operations, we
simplify the numerator and denominator as much as possible before doing the
division.

**Example.** Simplify by writing the complex rational expression as division:

$$
\cfrac{\tfrac{1}{3}+\tfrac{1}{6}}{\tfrac{1}{2}-\tfrac{1}{3}}.
$$

First simplify the numerator and denominator, and then divide:

$$
\begin{array}{lrcl}
\text{Find the LCDs and combine.} &&&
\cfrac{\tfrac{2}{6}+\tfrac{1}{6}}{\tfrac{3}{6}-\tfrac{2}{6}} \\[10pt]
\text{Simplify numerator and denominator.} &&& \cfrac{\tfrac{3}{6}}{\tfrac{1}{6}} \\[10pt]
\text{Rewrite as division.} & \tfrac{3}{6} &\div& \tfrac{1}{6} \\[10pt]
\text{Multiply by the reciprocal and simplify.} & \tfrac{3}{6}\cdot\tfrac{6}{1} &=& 3
\end{array}
$$

{{< fillin
  question="Simplify $\cfrac{\tfrac{1}{2}+\tfrac{2}{3}}{\tfrac{5}{6}+\tfrac{1}{12}}$ by writing it as division."
  answer="\tfrac{14}{11}"
  answerDisplay="$\tfrac{14}{11}$"
  hint="Combine the fractions in the numerator and denominator separately before dividing."
>}}

{{< fillin
  question="Simplify $\cfrac{\tfrac{3}{4}-\tfrac{1}{3}}{\tfrac{1}{8}+\tfrac{5}{6}}$ by writing it as division."
  answer="\tfrac{10}{23}"
  answerDisplay="$\tfrac{10}{23}$"
  hint="Simplify the numerator and denominator separately, then multiply by the reciprocal."
>}}

We follow the same procedure when the complex rational expression contains
variables.

**Example.** Simplify by writing the complex rational expression as division:

$$
\cfrac{\tfrac{1}{x}+\tfrac{1}{y}}{\tfrac{x}{y}-\tfrac{y}{x}}.
$$

Simplify the sum in the numerator and the difference in the denominator:

$$
\begin{array}{lrcl}
\text{Combine the numerator.} &&& \tfrac{y+x}{xy} \\[10pt]
\text{Combine the denominator.} &&& \tfrac{x^2-y^2}{xy} \\[10pt]
\text{Rewrite as division.} & \tfrac{y+x}{xy} &\div& \tfrac{x^2-y^2}{xy} \\[10pt]
\text{Multiply by the reciprocal and factor.} &&& \tfrac{y+x}{xy}\cdot\tfrac{xy}{(x-y)(x+y)} \\[10pt]
\text{Remove common factors and simplify.} &&& \tfrac{1}{x-y}
\end{array}
$$

{{< fillin
  question="Simplify $\cfrac{\tfrac{1}{x}+\tfrac{1}{y}}{\tfrac{1}{x}-\tfrac{1}{y}}$ by writing it as division."
  answer="\tfrac{y+x}{y-x}"
  answerDisplay="$\tfrac{y+x}{y-x}$"
  hint="Use $xy$ as the common denominator in both parts before dividing."
>}}

{{< fillin
  question="Simplify $\cfrac{\tfrac{1}{a}+\tfrac{1}{b}}{\tfrac{1}{a^2}-\tfrac{1}{b^2}}$ by writing it as division."
  answer="\tfrac{a \cdot b}{b-a}"
  answerDisplay="$\tfrac{ab}{b-a}$"
  hint="Simplify the numerator and denominator separately, factor the difference of squares, and divide."
>}}

{{< callout type="info" >}}
  **Simplify a complex rational expression by writing it as division.**

  1. Simplify the numerator and denominator.
  2. Rewrite the complex rational expression as a division problem.
  3. Divide the expressions.
{{< /callout >}}

**Example.** Simplify by writing the complex rational expression as division:

$$
\cfrac{n-\tfrac{4n}{n+5}}{\tfrac{1}{n+5}+\tfrac{1}{n-5}}.
$$

Find common denominators for the numerator and denominator, simplify each,
then divide:

$$
\begin{array}{lrcl}
\text{Simplify the numerator.} &&& \tfrac{n^2+n}{n+5} \\[10pt]
\text{Simplify the denominator.} &&& \tfrac{2n}{(n+5)(n-5)} \\[10pt]
\text{Rewrite as division.} & \tfrac{n^2+n}{n+5} &\div& \tfrac{2n}{(n+5)(n-5)} \\[10pt]
\text{Multiply by the reciprocal.} &&& \tfrac{n^2+n}{n+5}\cdot\tfrac{(n+5)(n-5)}{2n} \\[10pt]
\text{Factor and remove common factors.} &&& \tfrac{n(n+1)(n+5)(n-5)}{(n+5)2n} \\[10pt]
\text{Simplify.} &&& \tfrac{(n+1)(n-5)}{2}
\end{array}
$$

{{< fillin
  question="Simplify $\cfrac{b-\tfrac{3b}{b+5}}{\tfrac{2}{b+5}+\tfrac{1}{b-5}}$ by writing it as division."
  answer="\tfrac{b(b+2)(b-5)}{3b-5}"
  answerDisplay="$\tfrac{b(b+2)(b-5)}{3b-5}$"
  hint="Combine the terms in the numerator and denominator separately, then divide and factor."
>}}

{{< fillin
  question="Simplify $\cfrac{1-\tfrac{3}{c+4}}{\tfrac{1}{c+4}+\tfrac{c}{3}}$ by writing it as division."
  answer="\tfrac{3}{c+3}"
  answerDisplay="$\tfrac{3}{c+3}$"
  hint="Use common denominators within the numerator and denominator before rewriting as division."
>}}

## Simplify a complex rational expression by using the LCD

When we solved equations with fractions, we “cleared” the fractions by
multiplying by the LCD. We can use that strategy here. We multiply the
numerator and denominator by the LCD of all the rational expressions. Since
we multiply by $\tfrac{\text{LCD}}{\text{LCD}}$, we multiply by $1$, so the
value stays the same.

**Example.** Simplify by using the LCD:

$$
\cfrac{\tfrac{1}{3}+\tfrac{1}{6}}{\tfrac{1}{2}-\tfrac{1}{3}}.
$$

The LCD of all fractions is $6$. Multiply both the numerator and denominator
by $6$, distribute, and simplify:

$$
\begin{array}{lrcl}
\text{Multiply by the LCD.} &&& \cfrac{6\left(\tfrac{1}{3}+\tfrac{1}{6}\right)}{6\left(\tfrac{1}{2}-\tfrac{1}{3}\right)} \\[10pt]
\text{Distribute.} &&& \cfrac{6\cdot\tfrac{1}{3}+6\cdot\tfrac{1}{6}}{6\cdot\tfrac{1}{2}-6\cdot\tfrac{1}{3}} \\[10pt]
\text{Simplify.} &&& \tfrac{2+1}{3-2}=3
\end{array}
$$

{{< fillin
  question="Simplify $\cfrac{\tfrac{1}{2}+\tfrac{1}{5}}{\tfrac{1}{10}+\tfrac{1}{5}}$ by using the LCD."
  answer="\tfrac{7}{3}"
  answerDisplay="$\tfrac{7}{3}$"
  hint="The LCD of every fraction in the expression is $10$."
>}}

{{< fillin
  question="Simplify $\cfrac{\tfrac{1}{4}+\tfrac{3}{8}}{\tfrac{1}{2}-\tfrac{5}{16}}$ by using the LCD."
  answer="\tfrac{10}{3}"
  answerDisplay="$\tfrac{10}{3}$"
  hint="Multiply both the numerator and denominator by the LCD, $16$."
>}}

**Example.** Simplify by using the LCD:

$$
\cfrac{\tfrac{1}{x}+\tfrac{1}{y}}{\tfrac{x}{y}-\tfrac{y}{x}}.
$$

The LCD is $xy$:

$$
\begin{array}{lrcl}
\text{Multiply numerator and denominator by }xy. &&&
\cfrac{xy\left(\tfrac{1}{x}+\tfrac{1}{y}\right)}{xy\left(\tfrac{x}{y}-\tfrac{y}{x}\right)} \\[10pt]
\text{Distribute and simplify.} &&& \tfrac{y+x}{x^2-y^2} \\[10pt]
\text{Factor and remove common factors.} &&& \tfrac{y+x}{(x-y)(x+y)} \\[10pt]
\text{Simplify.} &&& \tfrac{1}{x-y}
\end{array}
$$

{{< fillin
  question="Simplify $\cfrac{\tfrac{1}{a}+\tfrac{1}{b}}{\tfrac{a}{b}+\tfrac{b}{a}}$ by using the LCD."
  answer="\tfrac{b+a}{a^2+b^2}"
  answerDisplay="$\tfrac{b+a}{a^2+b^2}$"
  hint="The LCD of all fractions is $ab$. Multiply the numerator and denominator by it."
>}}

{{< fillin
  question="Simplify $\cfrac{\tfrac{1}{x^2}-\tfrac{1}{y^2}}{\tfrac{1}{x}+\tfrac{1}{y}}$ by using the LCD."
  answer="\tfrac{y-x}{x \cdot y}"
  answerDisplay="$\tfrac{y-x}{xy}$"
  hint="Multiply the numerator and denominator by $x^2y^2$, then factor."
>}}

{{< callout type="info" >}}
  **Simplify a complex rational expression by using the LCD.**

  1. Find the LCD of all fractions in the complex rational expression.
  2. Multiply the numerator and denominator by the LCD.
  3. Simplify the expression.
{{< /callout >}}

Be sure to start by factoring all the denominators so you can find the LCD.

**Example.** Simplify by using the LCD:

$$
\cfrac{\tfrac{2}{x+6}}{\tfrac{4}{x-6}-\tfrac{4}{x^2-36}}.
$$

The LCD is $x^2-36=(x+6)(x-6)$. Multiply numerator and denominator by it:

$$
\begin{array}{lrcl}
\text{Multiply by the LCD.} &&&
\cfrac{(x+6)(x-6)\tfrac{2}{x+6}}{(x+6)(x-6)\left(\tfrac{4}{x-6}-\tfrac{4}{(x+6)(x-6)}\right)} \\[10pt]
\text{Distribute and simplify.} &&& \tfrac{2(x-6)}{4(x+6)-4} \\[10pt]
\text{Combine terms and factor.} &&& \tfrac{2(x-6)}{4x+20}=\tfrac{2(x-6)}{4(x+5)} \\[10pt]
\text{Remove common factors.} &&& \tfrac{x-6}{2(x+5)}
\end{array}
$$

{{< fillin
  question="Simplify $\cfrac{\tfrac{3}{x+2}}{\tfrac{5}{x-2}-\tfrac{3}{x^2-4}}$ by using the LCD."
  answer="\tfrac{3(x-2)}{5x+7}"
  answerDisplay="$\tfrac{3(x-2)}{5x+7}$"
  hint="Factor $x^2-4$ first, then multiply the numerator and denominator by the LCD."
>}}

{{< fillin
  question="Simplify $\cfrac{\tfrac{2}{x-7}-\tfrac{1}{x+7}}{\tfrac{6}{x+7}-\tfrac{1}{x^2-49}}$ by using the LCD."
  answer="\tfrac{x+21}{6x-43}"
  answerDisplay="$\tfrac{x+21}{6x-43}$"
  hint="Factor $x^2-49$ and use it as the LCD."
>}}

Be sure to factor the denominators first. Proceed carefully as the math can
get messy.

**Example.** Simplify by using the LCD:

$$
\cfrac{\tfrac{4}{m^2-7m+12}}{\tfrac{3}{m-3}-\tfrac{2}{m-4}}.
$$

Factor $m^2-7m+12=(m-3)(m-4)$, so the LCD is $(m-3)(m-4)$:

$$
\begin{array}{lrcl}
\text{Multiply by the LCD.} &&&
\cfrac{(m-3)(m-4)\tfrac{4}{(m-3)(m-4)}}{(m-3)(m-4)\left(\tfrac{3}{m-3}-\tfrac{2}{m-4}\right)} \\[10pt]
\text{Simplify.} &&& \tfrac{4}{3(m-4)-2(m-3)} \\[10pt]
\text{Distribute.} &&& \tfrac{4}{3m-12-2m+6} \\[10pt]
\text{Combine like terms.} &&& \tfrac{4}{m-6}
\end{array}
$$

{{< fillin
  question="Simplify $\cfrac{\tfrac{3}{x^2+7x+10}}{\tfrac{4}{x+2}+\tfrac{1}{x+5}}$ by using the LCD."
  answer="\tfrac{3}{5x+22}"
  answerDisplay="$\tfrac{3}{5x+22}$"
  hint="Factor $x^2+7x+10$, then multiply the numerator and denominator by the LCD."
>}}

{{< fillin
  question="Simplify $\cfrac{\tfrac{4y}{y+5}+\tfrac{2}{y+6}}{\tfrac{3y}{y^2+11y+30}}$ by using the LCD."
  answer="\tfrac{2(2y^2+13y+5)}{3y}"
  answerDisplay="$\tfrac{2(2y^2+13y+5)}{3y}$"
  hint="Factor $y^2+11y+30$ and use the product as the LCD."
>}}

**Example.** Simplify by using the LCD:

$$
\cfrac{\tfrac{y}{y+1}}{1+\tfrac{1}{y-1}}.
$$

The LCD is $(y+1)(y-1)$:

$$
\begin{array}{lrcl}
\text{Multiply by the LCD.} &&&
\cfrac{(y+1)(y-1)\tfrac{y}{y+1}}{(y+1)(y-1)\left(1+\tfrac{1}{y-1}\right)} \\[10pt]
\text{Distribute and simplify.} &&& \tfrac{y(y-1)}{(y+1)(y-1)+(y+1)} \\[10pt]
\text{Simplify the denominator.} &&& \tfrac{y(y-1)}{y^2+y} \\[10pt]
\text{Factor and remove common factors.} &&& \tfrac{y(y-1)}{y(y+1)} \\[10pt]
\text{Simplify.} &&& \tfrac{y-1}{y+1}
\end{array}
$$

{{< fillin
  question="Simplify $\cfrac{\tfrac{x}{x+3}}{1+\tfrac{1}{x+3}}$ by using the LCD."
  answer="\tfrac{x}{x+4}"
  answerDisplay="$\tfrac{x}{x+4}$"
  hint="Multiply the numerator and denominator by $x+3$."
>}}

{{< fillin
  question="Simplify $\cfrac{1+\tfrac{1}{x-1}}{\tfrac{3}{x+1}}$ by using the LCD."
  answer="\tfrac{x(x+1)}{3(x-1)}"
  answerDisplay="$\tfrac{x(x+1)}{3(x-1)}$"
  hint="The LCD is $(x-1)(x+1)$."
>}}

**Key terms.** A **complex rational expression** is a rational expression in
which the numerator and/or the denominator contains a rational expression.

<small>Adapted from [OpenStax Intermediate Algebra 2e, Section 7.3](https://openstax.org/books/intermediate-algebra-2e/pages/7-3-simplify-complex-rational-expressions), by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted examples and Try It exercises for interactive web use and accessibility.</small>
