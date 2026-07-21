---
title: Simplify Complex Rational Expressions
description: >-
  Simplifying complex rational expressions by rewriting them as division and by
  multiplying the numerator and denominator by the LCD of all the fractions —
  adapted from OpenStax Elementary Algebra 2e, Section 8.5.
source_section: "8.5"
weight: 5
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** simplify a complex
  rational expression by writing it as division, and simplify a complex
  rational expression by using the LCD.
{{< /callout >}}

**Complex fractions** are fractions in which the numerator or denominator
contains a fraction. Earlier we simplified complex fractions like these:

$$\cfrac{\frac{3}{4}}{\frac{5}{8}} \qquad\qquad \cfrac{\frac{x}{2}}{\frac{xy}{6}}$$

In this section we will simplify **complex rational expressions**, which are
rational expressions with rational expressions in the numerator or
denominator.

{{< callout type="info" >}}
  **Complex rational expression.** A complex rational expression is a rational
  expression in which the numerator or denominator contains a rational
  expression.
{{< /callout >}}

Here are a few complex rational expressions:

$$\cfrac{\frac{4}{y-3}}{\frac{8}{y^2-9}} \qquad \cfrac{\frac{1}{x}+\frac{1}{y}}{\frac{x}{y}-\frac{y}{x}} \qquad \cfrac{\frac{2}{x+6}}{\frac{4}{x-6}-\frac{4}{x^2-36}}$$

Remember, we always exclude values that would make any denominator zero. We
will use two methods to simplify complex rational expressions.

## Simplify a complex rational expression by writing it as division

We have already seen a complex rational expression like this earlier in this
chapter:

$$\cfrac{\frac{6x^2-7x+2}{4x-8}}{\frac{2x^2-8x+3}{x^2-5x+6}}$$

Fraction bars tell us to divide, so we can rewrite it as the division problem

$$\left(\frac{6x^2-7x+2}{4x-8}\right) \div \left(\frac{2x^2-8x+3}{x^2-5x+6}\right)$$

and then multiply the first rational expression by the reciprocal of the
second, just as we do when we divide two fractions. This is one method to
simplify a complex rational expression: we write it as if we were dividing two
fractions.

**Example.** Simplify the complex rational expression

$$\cfrac{\frac{4}{y-3}}{\frac{8}{y^2-9}}.$$

Rewrite the complex fraction as division, multiply by the reciprocal of the
second fraction, factor, and divide out common factors:

$$
\begin{array}{lrcl}
\text{Rewrite as division.} &&& \tfrac{4}{y-3} \div \tfrac{8}{y^2-9} \\[10pt]
\text{Multiply by the reciprocal.} && & \tfrac{4}{y-3} \cdot \tfrac{y^2-9}{8} \\[10pt]
\text{Multiply.} && & \tfrac{4(y^2-9)}{8(y-3)} \\[10pt]
\text{Factor to look for common factors.} && & \tfrac{4(y-3)(y+3)}{4 \cdot 2(y-3)} \\[10pt]
\text{Remove common factors and simplify.} && & \tfrac{y+3}{2}
\end{array}
$$

Are there any values of $y$ that should not be allowed? The simplified rational
expression has just a constant in the denominator. But the original complex
rational expression had denominators of $y - 3$ and $y^2 - 9$, so it would be
undefined if $y = 3$ or $y = -3$.

{{< fillin
  question="Simplify by writing it as division: $\cfrac{\frac{2}{x^2 - 1}}{\frac{3}{x + 1}}$."
  answer="\tfrac{2}{3(x - 1)}"
  answerDisplay="$\tfrac{2}{3(x - 1)}$"
  hint="Rewrite as $\tfrac{2}{x^2 - 1} \div \tfrac{3}{x + 1}$, multiply by the reciprocal, and factor $x^2 - 1 = (x - 1)(x + 1)$."
>}}

Fraction bars act as grouping symbols. So, to follow the order of operations,
we simplify the numerator and denominator as much as possible before we can do
the division.

**Example.** Simplify the complex rational expression

$$\cfrac{\frac{1}{3}+\frac{1}{6}}{\frac{1}{2}-\frac{1}{3}}.$$

First add the fractions in the numerator and subtract the fractions in the
denominator:

$$\cfrac{\frac{2}{6}+\frac{1}{6}}{\frac{3}{6}-\frac{2}{6}} = \cfrac{\frac{3}{6}}{\frac{1}{6}}$$

Now rewrite the complex fraction as division, multiply by the reciprocal, and
simplify:

$$\frac{3}{6} \div \frac{1}{6} = \frac{3}{6} \cdot \frac{6}{1} = 3$$

Now let's simplify a complex rational expression with variables the same way.

**Example.** Simplify the complex rational expression

$$\cfrac{\frac{1}{x}+\frac{1}{y}}{\frac{x}{y}-\frac{y}{x}}.$$

Combine the numerator over a common denominator, and combine the denominator
over a common denominator:

$$\cfrac{\frac{1}{x}+\frac{1}{y}}{\frac{x}{y}-\frac{y}{x}} = \cfrac{\frac{y+x}{xy}}{\frac{x^2-y^2}{xy}}$$

Now rewrite as division, multiply by the reciprocal, factor, and divide out the
common factors:

$$
\begin{array}{lrcl}
\text{Rewrite as division.} &&& \tfrac{y+x}{xy} \div \tfrac{x^2-y^2}{xy} \\[10pt]
\text{Multiply by the reciprocal.} && & \tfrac{y+x}{xy} \cdot \tfrac{xy}{x^2-y^2} \\[10pt]
\text{Factor and multiply.} && & \tfrac{(y+x) \cdot xy}{xy \cdot (x-y)(x+y)} \\[10pt]
\text{Remove common factors and simplify.} && & \tfrac{1}{x-y}
\end{array}
$$

{{< callout type="info" >}}
  **Simplify a complex rational expression by writing it as division.**

  1. Simplify the numerator and denominator.
  2. Rewrite the complex rational expression as a division problem.
  3. Divide the expressions.
{{< /callout >}}

**Example.** Simplify the complex rational expression

$$\cfrac{n-\frac{4n}{n+5}}{\frac{1}{n+5}+\frac{1}{n-5}}.$$

Add the fractions in the numerator and in the denominator, each over a common
denominator:

$$\cfrac{\frac{n(n+5)}{n+5}-\frac{4n}{n+5}}{\frac{n-5}{(n+5)(n-5)}+\frac{n+5}{(n+5)(n-5)}}$$

Simplify the numerator of the top and the numerator of the bottom:

$$\cfrac{\frac{n^2+5n-4n}{n+5}}{\frac{n-5+n+5}{(n+5)(n-5)}} = \cfrac{\frac{n^2+n}{n+5}}{\frac{2n}{(n+5)(n-5)}}$$

Now rewrite as division, multiply by the reciprocal, factor, and divide out the
common factors:

$$
\begin{array}{lrcl}
\text{Multiply by the reciprocal.} &&& \tfrac{n^2+n}{n+5} \cdot \tfrac{(n+5)(n-5)}{2n} \\[10pt]
\text{Factor and remove common factors.} && & \tfrac{n(n+1)(n+5)(n-5)}{(n+5) \cdot 2n} \\[10pt]
\text{Simplify.} && & \tfrac{(n+1)(n-5)}{2}
\end{array}
$$

{{< fillin
  question="Simplify by writing it as division: $\cfrac{\frac{1}{x}+\frac{1}{y}}{\frac{1}{x}-\frac{1}{y}}$."
  answer="\tfrac{y + x}{y - x}"
  answerDisplay="$\tfrac{y + x}{y - x}$"
  hint="Combine the numerator into $\tfrac{y + x}{xy}$ and the denominator into $\tfrac{y - x}{xy}$, then divide the top by the bottom."
>}}

## Simplify a complex rational expression by using the LCD

We "cleared" the fractions by multiplying by the LCD when we solved equations
with fractions. We can use that strategy here to simplify complex rational
expressions. We will multiply the numerator and denominator by the LCD of all
the rational expressions.

Let's look at the complex rational expression we simplified one way above. We
will simplify it here by multiplying the numerator and denominator by the LCD.
When we multiply by $\tfrac{\text{LCD}}{\text{LCD}}$ we are multiplying by $1$,
so the value stays the same.

**Example.** Simplify the complex rational expression

$$\cfrac{\frac{1}{3}+\frac{1}{6}}{\frac{1}{2}-\frac{1}{3}}.$$

The LCD of all the fractions in the whole expression is $6$. Clear the
fractions by multiplying the numerator and denominator by $6$:

$$\cfrac{6\left(\frac{1}{3}+\frac{1}{6}\right)}{6\left(\frac{1}{2}-\frac{1}{3}\right)}$$

Distribute the $6$ across each sum, then simplify:

$$\frac{6 \cdot \frac{1}{3}+6 \cdot \frac{1}{6}}{6 \cdot \frac{1}{2}-6 \cdot \frac{1}{3}} = \frac{2+1}{3-2} = 3$$

{{< fillin
  question="Simplify by using the LCD: $\cfrac{\frac{1}{2}+\frac{1}{5}}{\frac{1}{10}+\frac{1}{5}}$."
  answer="\tfrac{7}{3}"
  answerDisplay="$\tfrac{7}{3}$"
  hint="The LCD of all four fractions is $10$. Multiply the numerator and denominator by $10$, distribute, and simplify."
>}}

Now we'll use the LCD method to simplify a complex rational expression with
variables.

**Example.** Simplify the complex rational expression

$$\cfrac{\frac{1}{x}+\frac{1}{y}}{\frac{x}{y}-\frac{y}{x}}.$$

The LCD of all the fractions is $xy$. Multiply the numerator and denominator by
$xy$:

$$\cfrac{xy\left(\frac{1}{x}+\frac{1}{y}\right)}{xy\left(\frac{x}{y}-\frac{y}{x}\right)}$$

Distribute the $xy$ across each part:

$$\frac{xy \cdot \frac{1}{x}+xy \cdot \frac{1}{y}}{xy \cdot \frac{x}{y}-xy \cdot \frac{y}{x}} = \frac{y+x}{x^2-y^2}$$

Factor the denominator and divide out the common factors:

$$\frac{y+x}{x^2-y^2} = \frac{y+x}{(x-y)(x+y)} = \frac{1}{x-y}$$

{{< callout type="info" >}}
  **Simplify a complex rational expression by using the LCD.**

  1. Find the LCD of all fractions in the complex rational expression.
  2. Multiply the numerator and denominator by the LCD.
  3. Simplify the expression.
{{< /callout >}}

Be sure to start by factoring all the denominators so you can find the LCD.

**Example.** Simplify the complex rational expression

$$\cfrac{\frac{2}{x+6}}{\frac{4}{x-6}-\frac{4}{x^2-36}}.$$

Because $x^2 - 36 = (x + 6)(x - 6)$, the LCD of all the fractions is
$(x + 6)(x - 6)$. Multiply the numerator and denominator by the LCD:

$$\cfrac{(x+6)(x-6)\cdot\frac{2}{x+6}}{(x+6)(x-6)\left(\frac{4}{x-6}-\frac{4}{(x+6)(x-6)}\right)}$$

Distribute across the denominator, remove common factors, and simplify:

$$
\begin{array}{lrcl}
\text{Distribute and remove common factors.} &&& \tfrac{2(x-6)}{4(x+6)-4} \\[10pt]
\text{Distribute and combine like terms in the denominator.} && & \tfrac{2(x-6)}{4x+20} \\[10pt]
\text{Remove common factors and simplify.} && & \tfrac{x-6}{2x+10}
\end{array}
$$

Notice that there are no more factors common to the numerator and denominator.

**Example.** Simplify the complex rational expression

$$\cfrac{\frac{4}{m^2-7m+12}}{\frac{3}{m-3}-\frac{2}{m-4}}.$$

Because $m^2 - 7m + 12 = (m - 3)(m - 4)$, the LCD is $(m - 3)(m - 4)$. Multiply
the numerator and denominator by the LCD, distribute, and combine like terms:

$$
\begin{array}{lrcl}
\text{Multiply by the LCD and remove common factors.} &&& \tfrac{4}{3(m-4)-2(m-3)} \\[10pt]
\text{Distribute in the denominator.} && & \tfrac{4}{3m-12-2m+6} \\[10pt]
\text{Combine like terms.} && & \tfrac{4}{m-6}
\end{array}
$$

{{< fillin
  question="Simplify by using the LCD: $\cfrac{\frac{3}{x + 2}}{\frac{5}{x - 2}-\frac{3}{x^2 - 4}}$."
  answer="\tfrac{3x - 6}{5x + 7}"
  answerDisplay="$\tfrac{3x - 6}{5x + 7}$"
  hint="Factor $x^2 - 4 = (x + 2)(x - 2)$, so the LCD is $(x + 2)(x - 2)$. Multiply the numerator and denominator by it and simplify."
>}}

**Example.** Simplify the complex rational expression

$$\cfrac{\frac{y}{y+1}}{1+\frac{1}{y-1}}.$$

The LCD of all the fractions is $(y + 1)(y - 1)$. Multiply the numerator and
denominator by the LCD, distribute, factor, and remove common factors:

$$
\begin{array}{lrcl}
\text{Multiply by the LCD and remove common factors.} &&& \tfrac{(y-1)y}{(y+1)(y-1)+(y+1)} \\[10pt]
\text{Simplify the denominator.} && & \tfrac{y(y-1)}{y^2+y} \\[10pt]
\text{Factor the denominator.} && & \tfrac{y(y-1)}{y(y+1)} \\[10pt]
\text{Remove common factors and simplify.} && & \tfrac{y-1}{y+1}
\end{array}
$$

{{< fillin
  question="Simplify by using the LCD: $\cfrac{\frac{x}{x + 3}}{1+\frac{1}{x + 3}}$."
  answer="\tfrac{x}{x + 4}"
  answerDisplay="$\tfrac{x}{x + 4}$"
  hint="The LCD is $x + 3$. Multiply the numerator and denominator by $x + 3$; the denominator becomes $(x + 3) + 1 = x + 4$."
>}}

## Key terms

**complex fraction** — a fraction in which the numerator, the denominator, or
both contain a fraction. **complex rational expression** — a rational
expression in which the numerator or denominator contains a rational
expression; a complex rational expression represents the division of its top by
its bottom.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 8.5: Simplify Complex Rational Expressions](https://openstax.org/books/elementary-algebra-2e/pages/8-5-simplify-complex-rational-expressions) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked "How To" step tables as display equality chains with left-hand explanations, and typeset every complex fraction as a \cfrac display block; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
