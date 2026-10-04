---
title: Finding Composite and Inverse Functions
description: >-
  Finding and evaluating composite functions, determining whether a function is one-to-one, and finding the inverse of a function.
source_section: "10.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find and evaluate composite functions
- Determine whether a function is one-to-one
- Find the inverse of a function
{{< /callout >}}

In this chapter, we will introduce two new types of functions, exponential functions and logarithmic functions. These functions are used extensively in business and the sciences as we will see.

## Find and Evaluate Composite Functions

Before we introduce the functions, we need to look at another operation on functions called composition. In composition, the output of one function is the input of a second function. For functions $f$ and $g,$ the composition is written $f\circ g$ and is defined by $(f\circ g)(x)=f(g(x)).$

We read $f(g(x))$ as “$f$ of $g$ of $x$.”

$$
x \xrightarrow{\ g\ } g(x) \xrightarrow{\ f\ } f(g(x)).
$$

To do a composition, the output of the first function, $g(x),$ becomes the input of the second function, $f$, and so we must be sure that it is part of the domain of $f$.

{{< callout type="info" >}}
**Composition of Functions.** The composition of functions $f$ and $g$ is written $f\circ g$ and is defined by

$$
(f\circ g)(x)=f(g(x)).
$$

We read $f(g(x))$ as $f$ of $g$ of $x$.
{{< /callout >}}

We have actually used composition without using the notation many times before. When we graphed quadratic functions using translations, we were composing functions. For example, if we first graphed $g(x)={x}^{2}$ as a parabola and then shifted it down vertically four units, we were using the composition defined by $(f\circ g)(x)=f(g(x))$ where $f(x)=x-4.$

$$
x \xrightarrow{\ g(x)=x^2\ } x^2
\xrightarrow{\ f(u)=u-4\ } x^2-4.
$$

The next example will demonstrate that $(f\circ g)(x),$ $(g\circ f)(x)$ and $(f\cdot g)(x)$ usually result in different outputs.

**Example 10.1.** For functions $f(x)=4x-5$ and $g(x)=2x+3,$ find: ⓐ $(f\circ g)(x),$ ⓑ $(g\circ f)(x),$ and ⓒ $(f\cdot g)(x).$

**Solution.**

ⓐ

| Use the definition of $(f\circ g)(x).$ | $(f\circ g)(x)=f(g(x))$ |
| --- | --- |
| Substitute $2x+3$ for $g(x).$ | $(f\circ g)(x)=f(2x+3)$ |
| Substitute $2x+3$ into $f(x)=4x-5.$ | $(f\circ g)(x)=4(2x+3)-5$ |
| Distribute. | $(f\circ g)(x)=8x+12-5$ |
| Simplify. | $(f\circ g)(x)=8x+7$ |

ⓑ

| Use the definition of $(g\circ f)(x).$ | $(g\circ f)(x)=g(f(x))$ |
| --- | --- |
| Substitute $4x-5$ for $f(x).$ | $(g\circ f)(x)=g(4x-5)$ |
| Substitute $4x-5$ into $g(x)=2x+3.$ | $(g\circ f)(x)=2(4x-5)+3$ |
| Distribute. | $(g\circ f)(x)=8x-10+3$ |
| Simplify. | $(g\circ f)(x)=8x-7$ |

Notice the difference in the result in part ⓐ and part ⓑ.

ⓒ Notice that $(f\cdot g)(x)$ is different than $(f\circ g)(x).$ In part ⓐ we did the composition of the functions. Now in part ⓒ we are not composing them, we are multiplying them.

$$
\begin{array}{lrcl}
\text{Use the definition of }(f\cdot g)(x). & (f\cdot g)(x) &=& f(x)\cdot g(x) \\[4pt]
\text{Substitute }f(x)=4x-5\text{ and }g(x)=2x+3. & (f\cdot g)(x) &=& (4x-5)(2x+3) \\[4pt]
\text{Multiply.} & (f\cdot g)(x) &=& 8x^2+2x-15
\end{array}
$$

{{< fillin
  question="For functions $f(x)=3x-2$ and $g(x)=5x+1$, find $(f\circ g)(x)$."
  answer="15x+1"
  answerForm="expanded distributed no-like-terms"
  answerDisplay="$(f\circ g)(x)=15x+1$"
  hint="Substitute $g(x)$ for the input of $f$, distribute, and combine the constant terms."
>}}

{{< fillin
  question="For functions $f(x)=3x-2$ and $g(x)=5x+1$, find $(f\cdot g)(x)$."
  answer="15x^2-7x-2"
  answerForm="expanded distributed no-like-terms"
  answerDisplay="$(f\cdot g)(x)=15x^2-7x-2$"
  hint="This is a product, not a composition: multiply $f(x)$ by $g(x)$ and combine like terms."
>}}

{{< fillin
  question="For functions $f(x)=4x-3$ and $g(x)=6x-5$, find $(g\circ f)(x)$."
  answer="24x-23"
  answerForm="expanded distributed no-like-terms"
  answerDisplay="$(g\circ f)(x)=24x-23$"
  hint="Substitute $f(x)$ for the input of $g$, distribute, and combine the constant terms."
>}}

In the next example we will evaluate a composition for a specific value.

**Example 10.2.** For functions $f(x)={x}^{2}-4,$ and $g(x)=3x+2,$ find: ⓐ $(f\circ g)(-3),$ ⓑ $(g\circ f)(-1),$ and ⓒ $(f\circ f)(2).$

**Solution.**

ⓐ

| Use the definition of $(f\circ g)(-3).$ | $(f\circ g)(-3)=f(g(-3))$ |
| --- | --- |
| Substitute $-3$ into $g(x)=3x+2.$ | $(f\circ g)(-3)=f(3(-3)+2)$ |
| Simplify. | $(f\circ g)(-3)=f(-7)$ |
| Substitute $-7$ into $f(x)=x^2-4.$ | $(f\circ g)(-3)=(-7)^2-4$ |
| Simplify. | $(f\circ g)(-3)=45$ |

ⓑ

| Use the definition of $(g\circ f)(-1).$ | $(g\circ f)(-1)=g(f(-1))$ |
| --- | --- |
| Substitute $-1$ into $f(x)=x^2-4.$ | $(g\circ f)(-1)=g((-1)^2-4)$ |
| Simplify. | $(g\circ f)(-1)=g(-3)$ |
| Substitute $-3$ into $g(x)=3x+2.$ | $(g\circ f)(-1)=3(-3)+2$ |
| Simplify. | $(g\circ f)(-1)=-7$ |

ⓒ

| Use the definition of $(f\circ f)(2).$ | $(f\circ f)(2)=f(f(2))$ |
| --- | --- |
| Substitute $2$ into $f(x)=x^2-4.$ | $(f\circ f)(2)=f(2^2-4)$ |
| Simplify. | $(f\circ f)(2)=f(0)$ |
| Substitute $0$ into $f(x)=x^2-4.$ | $(f\circ f)(2)=0^2-4$ |
| Simplify. | $(f\circ f)(2)=-4$ |

{{< fillin
  question="For $f(x)=x^2-9$ and $g(x)=2x+5$, find $(f\circ g)(-2)$, $(g\circ f)(-3)$, and $(f\circ f)(4)$. Enter the results as an ordered triple."
  answer="(-8,5,40)"
  answerForm="decimal"
  answerDisplay="$\left(-8,\ 5,\ 40\right)$"
  hint="Work from the inside function outward for each composition."
  placeholder="ordered triple"
>}}

{{< fillin
  question="For $f(x)=x^2+1$ and $g(x)=3x-5$, find $(f\circ g)(-1)$, $(g\circ f)(2)$, and $(f\circ f)(-1)$. Enter the results as an ordered triple."
  answer="(65,10,5)"
  answerForm="decimal"
  answerDisplay="$\left(65,\ 10,\ 5\right)$"
  hint="Evaluate the inner function first, then use its result as the input of the outer function."
  placeholder="ordered triple"
>}}

## Determine Whether a Function is One-to-One

When we first introduced functions, we said a function is a relation that assigns to each element in its domain exactly one element in the range. For each ordered pair in the relation, each x-value is matched with only one y-value.

We used the birthday example to help us understand the definition. Every person has a birthday, but no one has two birthdays and it is okay for two people to share a birthday. Since each person has exactly one birthday, that relation is a function.

The assignment can be written with arrows such as

$$
\text{June}\longmapsto\text{August 2}
\qquad\text{and}\qquad
\text{Liz}\longmapsto\text{August 2}.
$$

Every person has exactly one output, so the relation is a function. The shared
birthday shows that it is not one-to-one.

A function is one-to-one if each value in the range has exactly one element in the domain. For each ordered pair in the function, each y-value is matched with only one x-value.

Our example of the birthday relation is not a one-to-one function. Two people can share the same birthday. The range value August 2 is the birthday of Liz and June, and so one range value has two domain values. Therefore, the function is not one-to-one.

{{< callout type="info" >}}
**One-to-One Function.** A function is one-to-one if each value in the range corresponds to one element in the domain. For each ordered pair in the function, each y-value is matched with only one x-value. There are no repeated y-values.
{{< /callout >}}

**Example 10.3.** For each set of ordered pairs, determine if it represents a function and, if so, if the function is one-to-one.

ⓐ $\{(-3,27),(-2,8),(-1,1),(0,0),(1,1),(2,8),(3,27)\}$ and ⓑ $\{(0,0),(1,1),(4,2),(9,3),(16,4)\}.$

**Solution.**

ⓐ $\{(-3,27),(-2,8),(-1,1),(0,0),(1,1),(2,8),(3,27)\}$

Each x-value is matched with only one y-value. So this relation is a function.

But each y-value is not paired with only one x-value, $(-3,27)$ and $(3,27),$ for example. So this function is not one-to-one.

ⓑ $\{(0,0),(1,1),(4,2),(9,3),(16,4)\}$

Each x-value is matched with only one y-value. So this relation is a function.

Since each y-value is paired with only one x-value, this function is one-to-one.

{{< multiplechoice
  question="Classify the two relations: ⓐ $\{(-3,-6),(-2,-4),(-1,-2),(0,0),(1,2),(2,4),(3,6)\}$ and ⓑ $\{(-4,8),(-2,4),(-1,2),(0,0),(1,2),(2,4),(4,8)\}$."
  answer="ⓐ one-to-one function; ⓑ function, but not one-to-one"
  hint="A function uses each input at most once; a one-to-one function also uses each output at most once."
>}}
ⓐ one-to-one function; ⓑ function, but not one-to-one
ⓐ not a function; ⓑ function, but not one-to-one
ⓐ function, but not one-to-one; ⓑ one-to-one function
{{< /multiplechoice >}}

{{< multiplechoice
  question="Classify the two relations: ⓐ $\{(27,-3),(8,-2),(1,-1),(0,0),(1,1),(8,2),(27,3)\}$ and ⓑ $\{(7,-3),(-5,-4),(8,0),(0,0),(-6,4),(-2,2),(-1,3)\}$."
  answer="ⓐ not a function; ⓑ function, but not one-to-one"
  hint="Look first for repeated input values, then for repeated output values."
>}}
ⓐ not a function; ⓑ function, but not one-to-one
ⓐ function, but not one-to-one; ⓑ one-to-one function
ⓐ one-to-one function; ⓑ not a function
{{< /multiplechoice >}}

To help us determine whether a relation is a function, we use the vertical line test. A set of points in a rectangular coordinate system is the graph of a function if every vertical line intersects the graph in at most one point. Also, if any vertical line intersects the graph in more than one point, the graph does not represent a function.

The vertical line is representing an x-value and we check that it intersects the graph in only one y-value. Then it is a function.

To check if a function is one-to-one, we use a similar process. We use a horizontal line and check that each horizontal line intersects the graph in only one point. The horizontal line is representing a y-value and we check that it intersects the graph in only one x-value. If every horizontal line intersects the graph of a function in at most one point, it is a one-to-one function. This is the horizontal line test.

{{< callout type="info" >}}
**Horizontal Line Test.** If every horizontal line intersects the graph of a function in at most one point, it is a one-to-one function.
{{< /callout >}}

We can test whether a graph of a relation is a function by using the vertical line test. We can then tell if the function is one-to-one by applying the horizontal line test.

**Example 10.4.** Determine ⓐ whether each graph is the graph of a function and, if so, ⓑ whether it is one-to-one.

ⓐ

{{< apfigure kind="graph" >}}
{"ariaLabel":"Graph ⓐ: a straight line falling from left to right through (0, 2) and (3, 0), on a grid from −6 to 6 on both axes.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":18,"tickLabels":true,"tickStep":2,"lines":[{"slope":-0.6666666666666666,"intercept":2}]}
{{< /apfigure >}}

ⓑ

{{< apfigure kind="graph" >}}
{"ariaLabel":"Graph ⓑ: a parabola opening upward with its vertex at (0, −1), passing through (−1, 0) and (1, 0), on a grid from −6 to 6 on both axes.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":18,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1,"c":-1}]}
{{< /apfigure >}}

**Solution.**

ⓐ

{{< apfigure kind="graph" >}}
{"ariaLabel":"The line from graph ⓐ, through (0, 2) and (3, 0), with a dashed vertical line at x = 4 and a dashed horizontal line at y = 2. Each dashed line crosses the graph at exactly one point.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":18,"tickLabels":true,"tickStep":2,"lines":[{"slope":-0.6666666666666666,"intercept":2},{"x":4,"dashed":true},{"y":2,"dashed":true}]}
{{< /apfigure >}}

Since any vertical line intersects the graph in at most one point, the graph is the graph of a function. Since any horizontal line intersects the graph in at most one point, the graph is the graph of a one-to-one function.

ⓑ

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola from graph ⓑ, vertex (0, −1), with a dashed vertical line at x = 1, which crosses it at one point, (1, 0), and a dashed horizontal line at y = 4, which crosses it at two points.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":18,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1,"c":-1}],"segments":[{"from":[1,-5.6],"to":[1,5.6],"dashed":true,"arrows":true},{"from":[-5.6,4],"to":[5.6,4],"dashed":true,"arrows":true}]}
{{< /apfigure >}}

Since any vertical line intersects the graph in at most one point, the graph is the graph of a function. The horizontal line shown on the graph intersects it in two points. This graph does not represent a one-to-one function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola opening to the right with its vertex at (−1, 0), passing through (0, 1), (0, −1), (3, 2), and (3, −2), on a grid from −8 to 8 on both axes.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"unit":14,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1,"c":-1,"sideways":true}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Use the graph directly above. Determine whether it is the graph of a function and, if so, whether it is one-to-one."
  answer="not a function"
  hint="Apply the vertical line test first, and use the horizontal line test only on a graph that passes it."
>}}
not a function
function, but not one-to-one
one-to-one function
{{< /multiplechoice >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An increasing curve passing through (0, 1), (1, 2), (2, 4), and (3, 8), rising steeply on the right and leveling off just above the x-axis on the left, on a grid from −8 to 8 on both axes.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"unit":14,"tickLabels":true,"tickStep":2,"curves":[{"kind":"exp","b":2,"from":-7}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Use the graph directly above. Determine whether it is the graph of a function and, if so, whether it is one-to-one."
  answer="one-to-one function"
  hint="Count how many times a vertical line can meet the graph, then do the same with a horizontal line."
>}}
not a function
function, but not one-to-one
one-to-one function
{{< /multiplechoice >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola opening upward with its vertex at (0, 3), passing through (−1, 4), (1, 4), (−2, 7), and (2, 7), on a grid from −8 to 8 on both axes.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"unit":14,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1,"c":3}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Use the graph directly above. Determine whether it is the graph of a function and, if so, whether it is one-to-one."
  answer="function, but not one-to-one"
  hint="Run the vertical line test, then the horizontal line test, on the graph."
>}}
not a function
function, but not one-to-one
one-to-one function
{{< /multiplechoice >}}

## Find the Inverse of a Function

Let’s look at a one-to one function, $f$, represented by the ordered pairs $\{(0,5),(1,6),(2,7),(3,8)\}.$ For each $x$-value, $f$ adds 5 to get the $y$-value. To ‘undo’ the addition of 5, we subtract 5 from each $y$-value and get back to the original $x$-value. We can call this “taking the inverse of $f$” and name the function ${f}^{-1}.$

$$
\{0,1,2,3\}
\xrightarrow{\ f(x)=x+5\ }
\{5,6,7,8\}
\xrightarrow{\ f^{-1}(x)=x-5\ }
\{0,1,2,3\}.
$$

Thus

$$
f=\{(0,5),(1,6),(2,7),(3,8)\},
\qquad
f^{-1}=\{(5,0),(6,1),(7,2),(8,3)\}.
$$

Notice that that the ordered pairs of $f$ and ${f}^{-1}$ have their $x$-values and $y$-values reversed. The domain of $f$ is the range of ${f}^{-1}$ and the domain of ${f}^{-1}$ is the range of $f.$

{{< callout type="info" >}}
**Inverse of a Function Defined by Ordered Pairs.** If $f(x)$ is a one-to-one function whose ordered pairs are of the form $(x,y),$ then its inverse function ${f}^{-1}(x)$ is the set of ordered pairs $(y,x).$
{{< /callout >}}

In the next example we will find the inverse of a function defined by ordered pairs.

**Example 10.5.** Find the inverse of the function $\{(0,3),(1,5),(2,7),(3,9)\}.$ Determine the domain and range of the inverse function.

**Solution.**

This function is one-to-one since every $x$-value is paired with exactly one $y$-value.

To find the inverse we reverse the $x$-values and $y$-values in the ordered pairs of the function.

| Function | $\{(0,3),(1,5),(2,7),(3,9)\}$ |
| --- | --- |
| Inverse Function | $\{(3,0),(5,1),(7,2),(9,3)\}$ |
| Domain of Inverse Function | $\{3,5,7,9\}$ |
| Range of Inverse Function | $\{0,1,2,3\}$ |

{{< fillin
  question="Find the inverse of $\{(0,4),(1,7),(2,10),(3,13)\}$. Enter the inverse as a set of ordered pairs; the feedback also shows its domain and range."
  answer="\{(4,0),(7,1),(10,2),(13,3)\}"
  answerDisplay="inverse: $\{(4,0),(7,1),(10,2),(13,3)\}$; domain: $\{4,7,10,13\}$; range: $\{0,1,2,3\}$"
  hint="Interchange the coordinates in every ordered pair."
  placeholder="set of ordered pairs"
>}}

{{< fillin
  question="Find the inverse of $\{(-1,4),(-2,1),(-3,0),(-4,2)\}$. Enter the inverse as a set of ordered pairs; the feedback also shows its domain and range."
  answer="\{(4,-1),(1,-2),(0,-3),(2,-4)\}"
  answerDisplay="inverse: $\{(4,-1),(1,-2),(0,-3),(2,-4)\}$; domain: $\{0,1,2,4\}$; range: $\{-4,-3,-2,-1\}$"
  hint="Reverse the $x$- and $y$-coordinates in each pair."
  placeholder="set of ordered pairs"
>}}

We just noted that if $f(x)$ is a one-to-one function whose ordered pairs are of the form $(x,y),$ then its inverse function ${f}^{-1}(x)$ is the set of ordered pairs $(y,x).$

So if a point $(a,b)$ is on the graph of a function $f(x),$ then the ordered pair $(b,a)$ is on the graph of ${f}^{-1}(x).$ See the figure below.

<div class="ap-figure">
<svg role="img" aria-label="The line y equals x with the reflected points (3, 1) and (1, 3), joined by a dashed segment." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" width="220" height="220" font-family="Helvetica, Arial, sans-serif">
  <line x1="68" y1="194" x2="68" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="194" x2="110" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="194" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="194" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="194" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="110" x2="194" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="68" x2="194" y2="68" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="196" y2="194" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="194" stroke="currentColor" stroke-width="1"/>
  <polygon points="206,194 196,199 196,189" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="204" y="186" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="68" y1="191" x2="68" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="209" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="110" y1="191" x2="110" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="209" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="152" y1="191" x2="152" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="209" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="194" y1="191" x2="194" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="209" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="23" y1="152" x2="29" y2="152" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="156" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="23" y1="110" x2="29" y2="110" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="114" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="23" y1="68" x2="29" y2="68" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="72" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="23" y1="26" x2="29" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="20" y1="200" x2="200" y2="20" stroke="currentColor" stroke-width="1.8"/>
  <line x1="152" y1="152" x2="68" y2="68" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="152" cy="152" r="4" fill="currentColor"/>
  <circle cx="68" cy="68" r="4" fill="currentColor"/>
  <text x="163.2" y="172.2" font-size="13" fill="currentColor" text-anchor="start">(3, 1)</text>
  <text x="56.8" y="56.8" font-size="13" fill="currentColor" text-anchor="end">(1, 3)</text>
  <text x="171.7" y="74.9" font-size="13" fill="currentColor" text-anchor="start">y = x</text>
</svg>
</div>

The distance between any two pairs $(a,b)$ and $(b,a)$ is cut in half by the line $y=x.$ So we say the points are mirror images of each other through the line $y=x.$

Since every point on the graph of a function $f(x)$ is a mirror image of a point on the graph of ${f}^{-1}(x),$ we say the graphs are mirror images of each other through the line $y=x.$ We will use this concept to graph the inverse of a function in the next example.

**Example 10.6.** Graph, on the same coordinate system, the inverse of the one-to one function shown.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of a one-to-one function: connected straight segments joining (−5, −3), (−3, −1), (−1, 0), (0, 2), and (3, 4), with arrows at both ends, on a grid from −5 to 5 on both axes.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":20,"tickLabels":true,"polylines":[{"through":[[-5,-3],[-3,-1],[-1,0],[0,2],[3,4]],"arrows":true}]}
{{< /apfigure >}}

**Solution.**

We can use points on the graph to find points on the inverse graph. Some points on the graph are: $(-5,-3),(-3,-1),(-1,0),(0,2),(3,4)$.

So, the inverse function will contain the points: $(-3,-5),(-1,-3),(0,-1),(2,0),(4,3)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The function's graph, segments joining (−5, −3), (−3, −1), (−1, 0), (0, 2), and (3, 4), and the graph of its inverse, segments joining (−3, −5), (−1, −3), (0, −1), (2, 0), and (4, 3), drawn on either side of the dashed line y = x, on a grid from −6 to 5 on both axes.","xMin":-6,"xMax":5,"yMin":-6,"yMax":5,"unit":34,"tickLabels":true,"polylines":[{"through":[[-5,-3],[-3,-1],[-1,0],[0,2],[3,4]],"arrows":false},{"through":[[-3,-5],[-1,-3],[0,-1],[2,0],[4,3]],"arrows":false}],"lines":[{"slope":1,"intercept":0,"dashed":true,"label":"y = x"}],"points":[{"at":[-5,-3],"label":"(−5, −3)"},{"at":[-3,-1],"label":"(−3, −1)"},{"at":[-1,0],"label":"(−1, 0)"},{"at":[0,2],"label":"(0, 2)"},{"at":[3,4],"label":"(3, 4)"},{"at":[-3,-5],"label":"(−3, −5)"},{"at":[-1,-3],"label":"(−1, −3)"},{"at":[0,-1],"label":"(0, −1)"},{"at":[2,0],"label":"(2, 0)"},{"at":[4,3],"label":"(4, 3)"}],"tickStep":2}
{{< /apfigure >}}

Notice how the graph of the original function and the graph of the inverse functions are mirror images through the line $y=x.$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of a one-to-one function: connected straight segments joining the points (−3, −4), (−2, −2), (0, −1), (1, 2), and (4, 3), on a grid from −5 to 5 on both axes.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":20,"tickLabels":true,"polylines":[{"through":[[-3,-4],[-2,-2],[0,-1],[1,2],[4,3]],"arrows":false}],"points":[{"at":[-3,-4],"label":"(−3, −4)"},{"at":[-2,-2],"label":"(−2, −2)"},{"at":[0,-1],"label":"(0, −1)"},{"at":[1,2],"label":"(1, 2)"},{"at":[4,3],"label":"(4, 3)"}],"tickStep":2}
{{< /apfigure >}}

{{< multiplechoice
  question="Which graph shows the inverse of the one-to-one function graphed directly above?"
  mode="graph"
  answerIndex="1"
  hint="Interchange the coordinates of each marked point, then find the graph through the new points."
>}}
{"ariaLabel":"Connected straight segments joining (−3, 4), (−2, 2), (0, 1), (1, −2), and (4, −3), on a grid from −5 to 5 on both axes.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"polylines":[{"through":[[-3,4],[-2,2],[0,1],[1,-2],[4,-3]],"arrows":false}],"points":[{"at":[-3,4]},{"at":[-2,2]},{"at":[0,1]},{"at":[1,-2]},{"at":[4,-3]}],"tickStep":2}
===OPT===
{"ariaLabel":"Connected straight segments joining (−4, −3), (−2, −2), (−1, 0), (2, 1), and (3, 4), on a grid from −5 to 5 on both axes.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"polylines":[{"through":[[-4,-3],[-2,-2],[-1,0],[2,1],[3,4]],"arrows":false}],"points":[{"at":[-4,-3]},{"at":[-2,-2]},{"at":[-1,0]},{"at":[2,1]},{"at":[3,4]}],"tickStep":2}
===OPT===
{"ariaLabel":"Connected straight segments joining (−4, 3), (−1, 2), (0, −1), (2, −2), and (3, −4), on a grid from −5 to 5 on both axes.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"polylines":[{"through":[[-4,3],[-1,2],[0,-1],[2,-2],[3,-4]],"arrows":false}],"points":[{"at":[-4,3]},{"at":[-1,2]},{"at":[0,-1]},{"at":[2,-2]},{"at":[3,-4]}],"tickStep":2}
{{< /multiplechoice >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of a one-to-one function: connected straight segments joining the points (−3, 4), (0, 3), (1, 2), and (4, 1), on a grid from −5 to 5 on both axes.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":20,"tickLabels":true,"polylines":[{"through":[[-3,4],[0,3],[1,2],[4,1]],"arrows":false}],"points":[{"at":[-3,4],"label":"(−3, 4)"},{"at":[0,3],"label":"(0, 3)"},{"at":[1,2],"label":"(1, 2)"},{"at":[4,1],"label":"(4, 1)"}],"tickStep":2}
{{< /apfigure >}}

{{< multiplechoice
  question="Which graph shows the inverse of the one-to-one function graphed directly above?"
  mode="graph"
  answerIndex="2"
  hint="Each point $(a,b)$ on the graph of a function gives a point on the graph of its inverse with the coordinates interchanged."
>}}
{"ariaLabel":"Connected straight segments joining (−4, 1), (−1, 2), (0, 3), and (3, 4), on a grid from −5 to 5 on both axes.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"polylines":[{"through":[[-4,1],[-1,2],[0,3],[3,4]],"arrows":false}],"points":[{"at":[-4,1]},{"at":[-1,2]},{"at":[0,3]},{"at":[3,4]}],"tickStep":2}
===OPT===
{"ariaLabel":"Connected straight segments joining (−3, −4), (0, −3), (1, −2), and (4, −1), on a grid from −5 to 5 on both axes.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"polylines":[{"through":[[-3,-4],[0,-3],[1,-2],[4,-1]],"arrows":false}],"points":[{"at":[-3,-4]},{"at":[0,-3]},{"at":[1,-2]},{"at":[4,-1]}],"tickStep":2}
===OPT===
{"ariaLabel":"Connected straight segments joining (1, 4), (2, 1), (3, 0), and (4, −3), on a grid from −5 to 5 on both axes.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"polylines":[{"through":[[1,4],[2,1],[3,0],[4,-3]],"arrows":false}],"points":[{"at":[1,4]},{"at":[2,1]},{"at":[3,0]},{"at":[4,-3]}],"tickStep":2}
{{< /multiplechoice >}}

When we began our discussion of an inverse function, we talked about how the inverse function ‘undoes’ what the original function did to a value in its domain in order to get back to the original x-value.

$$
x \xrightarrow{\ f\ } f(x)
\xrightarrow{\ f^{-1}\ } f^{-1}(f(x))=x.
$$

{{< callout type="info" >}}
**Inverse Functions.** If $f$ and $f^{-1}$ are inverse functions, then

$$
f^{-1}(f(x))=x
\quad\text{for all }x\text{ in the domain of }f,
$$

and

$$
f(f^{-1}(x))=x
\quad\text{for all }x\text{ in the domain of }f^{-1}.
$$
{{< /callout >}}

We can use this property to verify that two functions are inverses of each other.

**Example 10.7.** Verify that $f(x)=5x-1$ and $g(x)=\tfrac{x+1}{5}$ are inverse functions.

**Solution.**

The functions are inverses of each other if $g(f(x))=x$ and $f(g(x))=x.$

| Check the composition. | Simplify. |
| --- | --- |
| $g(f(x))=g(5x-1)$ | $g(f(x))=\tfrac{(5x-1)+1}{5}=\tfrac{5x}{5}=x\ \checkmark$ |
| $f(g(x))=f(\tfrac{x+1}{5})$ | $f(g(x))=5(\tfrac{x+1}{5})-1=x+1-1=x\ \checkmark$ |

Since both $g(f(x))=x$ and $f(g(x))=x$ are true, the functions $f(x)=5x-1$ and $g(x)=\tfrac{x+1}{5}$ are inverse functions. That is, they are inverses of each other.

{{< fillin
  question="For $f(x)=4x-3$ and $g(x)=\tfrac{x+3}{4}$, find $\left(g(f(x)),f(g(x))\right)$, each composition simplified."
  answer="(x,x)"
  answerForm="polynomial distributed no-like-terms"
  answerDisplay="$\left(x,x\right)$, so the functions are inverses"
  hint="Substitute $f(x)$ into $g$ and $g(x)$ into $f$, then simplify."
  placeholder="ordered pair"
>}}

{{< fillin
  question="For $f(x)=2x+6$ and $g(x)=\tfrac{x-6}{2}$, find $\left(g(f(x)),f(g(x))\right)$, each composition simplified."
  answer="(x,x)"
  answerForm="polynomial distributed no-like-terms"
  answerDisplay="$\left(x,x\right)$, so the functions are inverses"
  hint="Substitute $2x+6$ into $g$ and $\tfrac{x-6}{2}$ into $f$, then simplify each result."
  placeholder="ordered pair"
>}}

We have found inverses of function defined by ordered pairs and from a graph. We will now look at how to find an inverse using an algebraic equation. The method uses the idea that if $f(x)$ is a one-to-one function with ordered pairs $(x,y),$ then its inverse function ${f}^{-1}(x)$ is the set of ordered pairs $(y,x).$

If we reverse the x and y in the function and then solve for y, we get our inverse function.

**Example 10.8.** Find the inverse of $f(x)=4x+7.$

**Solution.**

| Step | Work |
| --- | --- |
| Substitute $y$ for $f(x)$. | $y=4x+7$ |
| Interchange the variables $x$ and $y$. | $x=4y+7$ |
| Solve for $y$. | $x-7=4y$, so $y=\tfrac{x-7}{4}$ |
| Substitute $f^{-1}(x)$ for $y$. | $f^{-1}(x)=\tfrac{x-7}{4}$ |
| Verify that the functions are inverses. | $f^{-1}(f(x))=\tfrac{(4x+7)-7}{4}=x$ and $f(f^{-1}(x))=4(\tfrac{x-7}{4})+7=x$ |

{{< fillin
  question="Find the inverse of the function $f(x)=5x-3$. Enter $f^{-1}(x)$ as a single fraction."
  answer="\frac{x+3}{5}"
  answerForm="single-fraction reduced-fraction"
  answerDisplay="$f^{-1}(x)=\tfrac{x+3}{5}$"
  hint="Write $y=5x-3$, interchange $x$ and $y$, and solve for $y$."
>}}

{{< fillin
  question="Find the inverse of the function $f(x)=8x+5$. Enter $f^{-1}(x)$ as a single fraction."
  answer="\frac{x-5}{8}"
  answerForm="single-fraction reduced-fraction"
  answerDisplay="$f^{-1}(x)=\tfrac{x-5}{8}$"
  hint="Interchange $x$ and $y$, then isolate $y$."
>}}

We summarize the steps below.

{{< callout type="info" >}}
**How To: Find the inverse of a one-to-one function.**

1. Substitute $y$ for $f(x)$.
2. Interchange the variables $x$ and $y$.
3. Solve for $y$.
4. Substitute $f^{-1}(x)$ for $y$.
5. Verify that the functions are inverses.
{{< /callout >}}

**Example 10.9.** Find the inverse of $f(x)=\sqrt[5]{2x-3}.$

**Solution.**

|  | $f(x)=\sqrt[5]{2x-3}$ |
| --- | --- |
| Substitute $y$ for $f(x)$. | $y=\sqrt[5]{2x-3}$ |
| Interchange the variables $x$ and $y$. | $x=\sqrt[5]{2y-3}$ |
| Solve for $y$. | ${(x)}^{5}={(\sqrt[5]{2y-3})}^{5}$ |
|  | ${x}^{5}=2y-3$ |
|  | ${x}^{5}+3=2y$ |
|  | $\tfrac{{x}^{5}+3}{2}=y$ |
| Substitute ${f}^{-1}(x)$ for $y$. | ${f}^{-1}(x)=\tfrac{{x}^{5}+3}{2}$ |
| Verify that the functions are inverses. |  |
| ${f}^{-1}(f(x))\overset{?}{=}x$ | $f({f}^{-1}(x))\overset{?}{=}x$ |
| ${f}^{-1}(\sqrt[5]{2x-3})\overset{?}{=}x$ | $f(\tfrac{{x}^{5}+3}{2})\overset{?}{=}x$ |
| $\tfrac{{(\sqrt[5]{2x-3})}^{5}+3}{2}\overset{?}{=}x$ | $\sqrt[5]{2(\tfrac{{x}^{5}+3}{2})-3}\overset{?}{=}x$ |
| $\tfrac{2x-3+3}{2}\overset{?}{=}x$ | $\sqrt[5]{{x}^{5}+3-3}\overset{?}{=}x$ |
| $\tfrac{2x}{2}\overset{?}{=}x$ | $\sqrt[5]{{x}^{5}}\overset{?}{=}x$ |
| $x=x✓$ | $x=x✓$ |

{{< fillin
  question="Find the inverse of the function $f(x)=\sqrt[5]{3x-2}$. Enter $f^{-1}(x)$ as a single fraction."
  answer="\frac{x^5+2}{3}"
  answerForm="single-fraction reduced-fraction"
  answerDisplay="$f^{-1}(x)=\tfrac{x^5+2}{3}$"
  hint="After interchanging $x$ and $y$, raise both sides to the fifth power."
>}}

{{< fillin
  question="Find the inverse of the function $f(x)=\sqrt[4]{6x-7}$. The inverse has domain $x\ge0$; enter $f^{-1}(x)$ as a single fraction."
  answer="\frac{x^4+7}{6}"
  answerForm="single-fraction reduced-fraction"
  answerDisplay="$f^{-1}(x)=\tfrac{x^4+7}{6}$, for $x\ge0$"
  hint="After interchanging $x$ and $y$, raise both sides to the fourth power. Preserve the nonnegative range of the original function as the inverse's domain."
>}}

## Key terms

**one-to-one function** — a function in which each value in the range has
exactly one element in the domain. For each ordered pair in the function, each
$y$-value is matched with only one $x$-value.

## Practice

### Find and Evaluate Composite Functions

{{< fillin
  question="For $f(x)=4x+3$ and $g(x)=2x+5$, find $(f\circ g)(x)$."
  answer="8x+23"
  answerForm="expanded distributed no-like-terms"
  hint="Substitute $g(x)$ into $f$, distribute, and combine the constant terms."
>}}

{{< fillin
  question="For $f(x)=4x+3$ and $g(x)=2x+5$, find $(g\circ f)(x)$."
  answer="8x+11"
  answerForm="expanded distributed no-like-terms"
  hint="Substitute $f(x)$ into $g$, distribute, and combine the constant terms."
>}}

{{< fillin
  question="For $f(x)=4x+3$ and $g(x)=2x+5$, find $(f\cdot g)(x)$."
  answer="8x^2+26x+15"
  answerForm="expanded distributed no-like-terms"
  hint="Multiply $f(x)$ and $g(x)$ and combine like terms."
>}}

{{< fillin
  question="For $f(x)=2x^2+3$ and $g(x)=5x-1$, find $(f\circ g)(-2)$."
  answer="245"
  answerForm="decimal"
  hint="Evaluate $g(-2)$ first, then substitute that result into $f$."
>}}

{{< fillin
  question="For $f(x)=2x^2+3$ and $g(x)=5x-1$, find $(g\circ f)(-3)$."
  answer="104"
  answerForm="decimal"
  hint="Evaluate $f(-3)$ first, then substitute that result into $g$."
>}}

{{< fillin
  question="For $f(x)=2x^2+3$ and $g(x)=5x-1$, find $(f\circ f)(-1)$."
  answer="53"
  answerForm="decimal"
  hint="Evaluate $f(-1)$ first, then substitute that result back into $f$."
>}}

### Determine Whether a Function is One-to-One

{{< multiplechoice
  question="Classify the relation $\{(-3,9),(-2,4),(-1,1),(0,0),(1,1),(2,4),(3,9)\}$."
  answer="function, but not one-to-one"
  hint="Look for a repeated $x$-value first, then for a repeated $y$-value."
>}}
function, but not one-to-one
not a function
one-to-one function
{{< /multiplechoice >}}

{{< multiplechoice
  question="Classify the relation $\{(-3,-5),(-2,-3),(-1,-1),(0,1),(1,3),(2,5),(3,7)\}$."
  answer="one-to-one function"
  hint="Compare the $x$-values with each other, then compare the $y$-values with each other."
>}}
function, but not one-to-one
not a function
one-to-one function
{{< /multiplechoice >}}

### Find the Inverse of a Function

{{< fillin
  question="Find the inverse of $\{(0,-2),(1,3),(2,7),(3,12)\}$. Enter the inverse as a set of ordered pairs, in braces."
  answer="\{(-2,0),(3,1),(7,2),(12,3)\}"
  answerDisplay="$\{(-2,0),(3,1),(7,2),(12,3)\}$"
  hint="Interchange the coordinates in every ordered pair."
  placeholder="set of ordered pairs"
>}}

{{< fillin
  question="Determine the domain of the inverse of the function $\{(0,-2),(1,3),(2,7),(3,12)\}$. Enter it as a set in braces, listing the numbers from least to greatest."
  answer="\{-2,3,7,12\}"
  answerDisplay="$\{-2,3,7,12\}$"
  hint="The domain of the inverse is the set of first coordinates of the inverse's pairs."
  placeholder="set"
>}}

{{< fillin
  question="Determine the range of the inverse of the function $\{(0,-2),(1,3),(2,7),(3,12)\}$. Enter it as a set in braces, listing the numbers from least to greatest."
  answer="\{0,1,2,3\}"
  answerDisplay="$\{0,1,2,3\}$"
  hint="The range of the inverse is the set of second coordinates of the inverse's pairs."
  placeholder="set"
>}}

{{< fillin
  question="For $f(x)=7x+3$ and $g(x)=\tfrac{x-3}{7}$, find $\left(g(f(x)),f(g(x))\right)$, each composition simplified."
  answer="(x,x)"
  answerForm="polynomial distributed no-like-terms"
  answerDisplay="$\left(x,x\right)$, so the functions are inverses"
  hint="Substitute $f(x)$ into $g$ and $g(x)$ into $f$, then simplify each result."
  placeholder="ordered pair"
>}}

{{< fillin
  question="Find the inverse of the function $f(x)=\sqrt[3]{x-3}$."
  answer="x^3+3"
  answerForm="expanded distributed no-like-terms"
  answerDisplay="$f^{-1}(x)=x^3+3$"
  hint="Interchange $x$ and $y$, then cube both sides to undo the cube root."
>}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 10.1: Finding Composite and Inverse Functions](https://openstax.org/books/intermediate-algebra-2e/pages/10-1-finding-composite-and-inverse-functions) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted the worked solutions for the web and redrew the graphs as accessible figures; omitted the Be Prepared quiz, media links, Key Concepts summary, Writing Exercises, and Self Check checklist; converted selected practice problems ("Try Its") into interactive exercises with instant feedback, asking two parts of the first find-the-composition Try It and one of the second, the three values of each evaluate-the-composition Try It as an ordered triple, each find-the-inverse-of-a-set Try It for the inverse alone with its domain and range shown in the feedback, each verify-the-inverse Try It for the two compositions as an ordered pair, three of the four graphs of the one-to-one Try Its one graph at a time, and each graph-the-inverse Try It as a choice among three graphs; and adapted selected end-of-section exercises into an interactive Practice block, asking the verify-the-inverse exercise for the two compositions as an ordered pair.</small>
