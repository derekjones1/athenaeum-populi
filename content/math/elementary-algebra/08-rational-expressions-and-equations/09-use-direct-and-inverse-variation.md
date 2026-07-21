---
title: Use Direct and Inverse Variation
description: >-
  Modeling direct variation with y = kx and inverse variation with y = k/x:
  naming the variables, finding the constant of variation k, writing the
  specific equation, and using it to answer applied questions — adapted from
  OpenStax Elementary Algebra 2e, Section 8.9.
source_section: "8.9"
weight: 9
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve direct variation
  problems, and solve inverse variation problems.
{{< /callout >}}

When two quantities are related by a proportion, we say they are *proportional*
to each other. Another way to express this relation is to talk about the
*variation* of the two quantities. We will discuss direct variation and inverse
variation in this section.

## Solve direct variation problems

Lindsay gets paid \$15 per hour at her job. If we let $s$ be her salary and
$h$ be the number of hours she has worked, we could model this situation with
the equation

$$s = 15h$$

Lindsay's salary is the product of a constant, $15$, and the number of hours
she works. We say that Lindsay's salary *varies directly* with the number of
hours she works. Two variables vary directly if one is the product of a
constant and the other.

{{< callout type="info" >}}
  **Direct variation.** For any two variables $x$ and $y$, $y$ **varies
  directly** with $x$ if

  $$y = kx, \text{ where } k \neq 0.$$

  The constant $k$ is called the **constant of variation**.
{{< /callout >}}

In applications using direct variation, generally we will know values of one
pair of the variables and will be asked to find the equation that relates $x$
and $y$. Then we can use that equation to find values of $y$ for other values
of $x$.

**Example.** If $y$ varies directly with $x$ and $y = 20$ when $x = 8$, find
the equation that relates $x$ and $y$.

$$
\begin{array}{lrcl}
\text{Write the formula for direct variation.} & y &=& kx \\[4pt]
\text{Substitute the given values for the variables.} & 20 &=& k \cdot 8 \\[4pt]
\text{Solve for the constant of variation.} & \tfrac{20}{8} &=& k \\[4pt]
& 2.5 &=& k \\[4pt]
\text{Write the equation with the value we found for } k. & y &=& 2.5x
\end{array}
$$

{{< callout type="info" >}}
  **Solve direct variation problems.**

  1. Write the formula for direct variation.
  2. Substitute the given values for the variables.
  3. Solve for the constant of variation.
  4. Write the equation that relates $x$ and $y$.
{{< /callout >}}

{{< fillin
  question="If $y$ varies directly with $x$ and $y = 3$ when $x = 10$, find the constant of variation $k$. (Enter its value.)"
  answer="0.3"
  answerDisplay="$k = 0.3$, so $y = 0.3x$"
  hint="Substitute into $y = kx$: $3 = k \cdot 10$. Divide both sides by $10$."
>}}

Now we'll solve a few applications of direct variation.

**Example.** When Raoul runs on the treadmill at the gym, the number of
calories, $c$, he burns varies directly with the number of minutes, $m$, he
uses the treadmill. He burned $315$ calories when he used the treadmill for
$18$ minutes. (a) Write the equation that relates $c$ and $m$. (b) How many
calories would he burn if he ran on the treadmill for $25$ minutes?

(a) The number of calories varies directly with the number of minutes, and
$c = 315$ when $m = 18$. Using $c = km$:

$$
\begin{array}{lrcl}
\text{Substitute the given values.} & 315 &=& k \cdot 18 \\[4pt]
\text{Solve for the constant of variation.} & \tfrac{315}{18} &=& k \\[4pt]
& 17.5 &=& k \\[4pt]
\text{Write the equation that relates } c \text{ and } m. & c &=& 17.5m
\end{array}
$$

(b) Find $c$ when $m = 25$:

$$c = 17.5(25) = 437.5$$

Raoul would burn $437.5$ calories if he used the treadmill for $25$ minutes.

In the previous example, the variables $c$ and $m$ were named in the problem.
Usually that is not the case. We will have to name the variables in the next
example as part of the solution, just like we do in most applied problems.

**Example.** The number of gallons of gas Eunice's car uses varies directly
with the number of miles she drives. Last week she drove $469.8$ miles and used
$14.5$ gallons of gas. (a) Write the equation that relates the number of
gallons of gas used to the number of miles driven. (b) How many gallons of gas
would Eunice's car use if she drove $1000$ miles?

(a) Let $g$ be the number of gallons of gas and $m$ be the number of miles
driven. Using $g = km$:

$$
\begin{array}{lrcl}
\text{Substitute the given values.} & 14.5 &=& k(469.8) \\[4pt]
\text{Solve for } k \text{, rounding to the nearest thousandth.} & \tfrac{14.5}{469.8} &=& k \\[4pt]
& 0.031 &=& k \\[4pt]
\text{Write the equation that relates } g \text{ and } m. & g &=& 0.031m
\end{array}
$$

(b) Find $g$ when $m = 1000$:

$$g = 0.031(1000) = 31$$

Eunice's car would use $31$ gallons of gas if she drove $1000$ miles.

In some situations, one variable varies directly with the *square* of the
other variable. When that happens, the equation of direct variation is
$y = kx^2$. We solve these applications just as we did the previous ones, by
substituting the given values into the equation to solve for $k$.

**Example.** The maximum load a beam will support varies directly with the
square of the diagonal of the beam's cross-section. A beam with diagonal $4''$
will support a maximum load of $75$ pounds. (a) Write the equation that relates
the maximum load to the cross-section. (b) What is the maximum load that can be
supported by a beam with diagonal $8''$?

(a) Let $L$ be the maximum load and $c$ be the diagonal of the cross-section.
Using $L = kc^2$:

$$
\begin{array}{lrcl}
\text{Substitute the given values.} & 75 &=& k \cdot 4^2 \\[4pt]
\text{Solve for the constant of variation.} & \tfrac{75}{16} &=& k \\[4pt]
& 4.6875 &=& k \\[4pt]
\text{Write the equation that relates } L \text{ and } c. & L &=& 4.6875c^2
\end{array}
$$

(b) Find $L$ when $c = 8$:

$$L = 4.6875(8)^2 = 300$$

A beam with diagonal $8''$ could support a maximum load of $300$ pounds.

## Solve inverse variation problems

Many applications involve two variables that *vary inversely*. As one variable
increases, the other decreases. The equation that relates them is
$y = \tfrac{k}{x}$.

{{< callout type="info" >}}
  **Inverse variation.** For any two variables $x$ and $y$, $y$ **varies
  inversely** with $x$ if

  $$y = \frac{k}{x}, \text{ where } k \neq 0.$$

  The constant $k$ is called the **constant of variation**.
{{< /callout >}}

The word "inverse" in inverse variation refers to the multiplicative inverse.
The multiplicative inverse of $x$ is $\tfrac{1}{x}$.

We solve inverse variation problems in the same way we solved direct variation
problems. Only the general form of the equation has changed.

{{< callout type="info" >}}
  **Solve inverse variation problems.**

  1. Write the formula for inverse variation.
  2. Substitute the given values for the variables.
  3. Solve for the constant of variation.
  4. Write the equation that relates $x$ and $y$.
{{< /callout >}}

**Example.** If $y$ varies inversely with $x$ and $y = 20$ when $x = 8$, find
the equation that relates $x$ and $y$.

$$
\begin{array}{lrcl}
\text{Write the formula for inverse variation.} & y &=& \tfrac{k}{x} \\[4pt]
\text{Substitute the given values.} & 20 &=& \tfrac{k}{8} \\[4pt]
\text{Solve for the constant of variation.} & 8(20) &=& 8\left(\tfrac{k}{8}\right) \\[4pt]
& 160 &=& k \\[4pt]
\text{Write the equation that relates } x \text{ and } y. & y &=& \tfrac{160}{x}
\end{array}
$$

{{< fillin
  question="If $y$ varies inversely with $x$ and $y = 8$ when $x = 2$, find the constant of variation $k$. (Enter its value.)"
  answer="16"
  answerDisplay="$k = 16$, so $y = \tfrac{16}{x}$"
  hint="Substitute into $y = \tfrac{k}{x}$: $8 = \tfrac{k}{2}$. Multiply both sides by $2$."
>}}

**Example.** The fuel consumption (mpg) of a car varies inversely with its
weight. A car that weighs $3100$ pounds gets $26$ mpg on the highway.
(a) Write the equation of variation. (b) What would be the fuel consumption of
a car that weighs $4030$ pounds?

(a) Let $f$ be the fuel consumption and $w$ be the weight. Using
$f = \tfrac{k}{w}$:

$$
\begin{array}{lrcl}
\text{Substitute the given values.} & 26 &=& \tfrac{k}{3100} \\[4pt]
\text{Solve for the constant of variation.} & 3100(26) &=& 3100\left(\tfrac{k}{3100}\right) \\[4pt]
& 80{,}600 &=& k \\[4pt]
\text{Write the equation that relates } f \text{ and } w. & f &=& \tfrac{80{,}600}{w}
\end{array}
$$

(b) Find $f$ when $w = 4030$:

$$f = \frac{80{,}600}{4030} = 20$$

A car that weighs $4030$ pounds would have fuel consumption of $20$ mpg.

**Example.** The frequency of a guitar string varies inversely with its
length. A $26''$ long string has a frequency of $440$ vibrations per second.
(a) Write the equation of variation. (b) How many vibrations per second will
there be if the string's length is reduced to $20''$ by putting a finger on a
fret?

(a) Let $f$ be the frequency and $L$ be the length. Using $f = \tfrac{k}{L}$:

$$
\begin{array}{lrcl}
\text{Substitute the given values.} & 440 &=& \tfrac{k}{26} \\[4pt]
\text{Solve for the constant of variation.} & 26(440) &=& 26\left(\tfrac{k}{26}\right) \\[4pt]
& 11{,}440 &=& k \\[4pt]
\text{Write the equation that relates } f \text{ and } L. & f &=& \tfrac{11{,}440}{L}
\end{array}
$$

(b) Find $f$ when $L = 20$:

$$f = \frac{11{,}440}{20} = 572$$

A $20''$ guitar string has frequency $572$ vibrations per second.

## Key terms

**direct variation** — a relationship in which $y = kx$: one variable is a
constant multiple of the other, so as $x$ grows, $y$ grows in proportion.
**inverse variation** — a relationship in which $y = \tfrac{k}{x}$: as one
variable increases, the other decreases. **constant of variation** — the
nonzero constant $k$ in a variation equation, found by substituting a known
pair of values and solving.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 8.9: Use Direct and Inverse Variation](https://openstax.org/books/elementary-algebra-2e/pages/8-9-use-direct-and-inverse-variation) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: condensed the worked examples into aligned step tables and prose, recast the "How To" procedures as callouts; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
