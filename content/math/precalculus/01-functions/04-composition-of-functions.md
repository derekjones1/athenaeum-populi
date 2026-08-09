---
title: Composition of Functions
description: >-
  Combining functions with sums, differences, products, and quotients;
  building and evaluating composite functions from tables, graphs, and
  formulas; finding the domain of a composition; and decomposing a function —
  adapted from OpenStax Precalculus 2e, Section 1.4.
source_section: "1.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Combine functions using algebraic operations
- Create a new function by composition of functions
- Evaluate composite functions
- Find the domain of a composite function
- Decompose a composite function into its component functions
{{< /callout >}}

Suppose we want to calculate how much it costs to heat a house on a
particular day of the year. The cost to heat a house will depend on the
average daily temperature, and in turn, the average daily temperature depends
on the particular day of the year. Notice how we have just defined two
relationships: The cost depends on the temperature, and the temperature
depends on the day.

Using descriptive variables, we can notate these two functions. The function
$C(T)$ gives the cost $C$ of heating a house for a given average daily
temperature in $T$ degrees Celsius. The function $T(d)$ gives the average
daily temperature on day $d$ of the year. For any given day,
$\text{Cost}=C(T(d))$ means that the cost depends on the temperature, which in
turn depends on the day of the year. Thus, we can evaluate the cost function
at the temperature $T(d)$. For example, we could evaluate $T(5)$ to determine
the average daily temperature on the 5th day of the year. Then, we could
evaluate the **cost function** at that temperature. We would write $C(T(5))$.

By combining these two relationships into one function, we have performed
function composition, which is the focus of this section.

## Combining functions using algebraic operations

Function composition is only one way to combine existing functions. Another
way is to carry out the usual algebraic operations on functions, such as
addition, subtraction, multiplication and division. We do this by performing
the operations with the function outputs, defining the result as the output
of our new function.

Suppose we need to add two columns of numbers that represent a husband and
wife's separate annual incomes over a period of years, with the result being
their total household income. We want to do this for every year, adding only
that year's incomes and then collecting all the data in a new column. If
$w(y)$ is the wife's income and $h(y)$ is the husband's income in year $y$,
and we want $T$ to represent the total income, then we can define a new
function.

$$T(y)=h(y)+w(y)$$

If this holds true for every year, then we can focus on the relation between
the functions without reference to a year and write

$$T=h+w$$

Just as for this sum of two functions, we can define difference, product, and
ratio functions for any pair of functions that have the same kinds of inputs
(not necessarily numbers) and also the same kinds of outputs (which do have to
be numbers so that the usual operations of algebra can apply to them, and
which also must have the same units or no units when we add and subtract). In
this way, we can think of adding, subtracting, multiplying, and dividing
functions.

For two functions $f(x)$ and $g(x)$ with real number outputs, we define new
functions $f+g$, $f-g$, $fg$, and $\tfrac{f}{g}$ by the relations

$$
\begin{array}{lrcl}
& (f+g)(x) &=& f(x)+g(x) \\[4pt]
& (f-g)(x) &=& f(x)-g(x) \\[4pt]
& (fg)(x) &=& f(x)g(x) \\[4pt]
& \left(\tfrac{f}{g}\right)(x) &=& \tfrac{f(x)}{g(x)}
\end{array}
$$

**Example.** Find and simplify the functions $(g-f)(x)$ and
$\left(\tfrac{g}{f}\right)(x)$, given $f(x)=x-1$ and $g(x)=x^2-1$. Are they
the same function?

**Solution.** Begin by writing the general form, and then substitute the
given functions.

$$
\begin{array}{lrcl}
& (g-f)(x) &=& g(x)-f(x) \\[4pt]
& (g-f)(x) &=& x^2-1-(x-1) \\[4pt]
& (g-f)(x) &=& x^2-x \\[4pt]
& (g-f)(x) &=& x(x-1)
\end{array}
$$

$$
\begin{array}{lrcl}
& \left(\tfrac{g}{f}\right)(x) &=& \tfrac{g(x)}{f(x)} \\[4pt]
& \left(\tfrac{g}{f}\right)(x) &=& \tfrac{x^2-1}{x-1} \\[4pt]
\text{where }x\ne 1 & \left(\tfrac{g}{f}\right)(x) &=& \tfrac{(x+1)(x-1)}{x-1} \\[4pt]
& \left(\tfrac{g}{f}\right)(x) &=& x+1
\end{array}
$$

No, the functions are not the same.

Note: For $\left(\tfrac{g}{f}\right)(x)$, the condition $x\ne 1$ is necessary
because when $x=1$, the denominator is equal to 0, which makes the function
undefined.

{{< fillin
  question="Given $f(x)=x-1$ and $g(x)=x^2-1$, find and simplify $(fg)(x)$."
  answer="x^3-x^2-x+1"
  answerForm="expanded"
  answerDisplay="$(fg)(x)=(x-1)(x^2-1)=x^3-x^2-x+1$"
  hint="Multiply the two outputs, then expand."
>}}

{{< fillin
  question="Given the same $f$ and $g$, find and simplify $(f-g)(x)$."
  answer="x-x^2"
  answerForm="distributed"
  answerDisplay="$(f-g)(x)=(x-1)-(x^2-1)=x-x^2$"
  hint="Subtract the whole of $g(x)$; the two constants cancel."
>}}

## Create a function by composition of functions

Performing algebraic operations on functions combines them into a new
function, but we can also create functions by composing functions. When we
wanted to compute a heating cost from a day of the year, we created a new
function that takes a day as input and yields a cost as output. The process of
**combining functions** so that the output of one function becomes the input
of another is known as a **composition of functions**. The resulting function
is known as a **composite function**. We represent this combination by the
following notation:

$$(f\circ g)(x)=f(g(x))$$

We read the left-hand side as "$f$ composed with $g$ at $x$," and the
right-hand side as "$f$ of $g$ of $x$." The two sides of the equation have the
same mathematical meaning and are equal. The open circle symbol $\circ$ is
called the composition operator. We use this operator mainly when we wish to
emphasize the relationship between the functions themselves without referring
to any particular input value. Composition is a binary operation that takes
two functions and forms a new function, much as addition or multiplication
takes two numbers and gives a new number. However, it is important not to
confuse function composition with multiplication because, as we learned above,
in most cases $f(g(x))\ne f(x)g(x)$.

It is also important to understand the order of operations in evaluating a
composite function. We follow the usual convention with parentheses by
starting with the innermost parentheses first, and then working to the
outside. In the equation above, the function $g$ takes the input $x$ first and
yields an output $g(x)$. Then the function $f$ takes $g(x)$ as an input and
yields an output $f(g(x))$.

In general, $f\circ g$ and $g\circ f$ are different functions. In other words,
in many cases $f(g(x))\ne g(f(x))$ for all $x$. We will also see that
sometimes two functions can be composed only in one specific order.

For example, if $f(x)=x^2$ and $g(x)=x+2$, then

$$
\begin{array}{lrcl}
& f(g(x)) &=& f(x+2) \\[4pt]
& &=& (x+2)^2 \\[4pt]
& &=& x^2+4x+4
\end{array}
$$

but

$$
\begin{array}{lrcl}
& g(f(x)) &=& g(x^2) \\[4pt]
& &=& x^2+2
\end{array}
$$

These expressions are not equal for all values of $x$, so the two functions
are not equal. It is irrelevant that the expressions happen to be equal for
the single input value $x=-\tfrac{1}{2}$.

Note that the range of the inside function (the first function to be
evaluated) needs to be within the domain of the outside function. Less
formally, the composition has to make sense in terms of inputs and outputs.

{{< callout type="info" >}}
  **Composition of functions.** When the output of one function is used as
  the input of another, we call the entire operation a composition of
  functions. For any input $x$ and functions $f$ and $g$, this action defines
  a **composite function**, which we write as $f\circ g$ such that

  $$(f\circ g)(x)=f(g(x))$$

  The domain of the composite function $f\circ g$ is all $x$ such that $x$ is
  in the domain of $g$ and $g(x)$ is in the domain of $f$.

  It is important to realize that the product of functions $fg$ is not the
  same as the function composition $f(g(x))$, because, in general,
  $f(x)g(x)\ne f(g(x))$.
{{< /callout >}}

**Example.** Using the functions $f(x)=2x+1$ and $g(x)=3-x$, find $f(g(x))$
and $g(f(x))$. Determine whether the composition of the functions is
**commutative**.

**Solution.** Let's begin by substituting $g(x)$ into $f(x)$.

$$
\begin{array}{lrcl}
& f(g(x)) &=& 2(3-x)+1 \\[4pt]
& &=& 6-2x+1 \\[4pt]
& &=& 7-2x
\end{array}
$$

Now we can substitute $f(x)$ into $g(x)$.

$$
\begin{array}{lrcl}
& g(f(x)) &=& 3-(2x+1) \\[4pt]
& &=& 3-2x-1 \\[4pt]
& &=& -2x+2
\end{array}
$$

We find that $g(f(x))\ne f(g(x))$, so the operation of function composition is
not commutative.

**Example.** The function $c(s)$ gives the number of calories burned
completing $s$ sit-ups, and $s(t)$ gives the number of sit-ups a person can
complete in $t$ minutes. Interpret $c(s(3))$.

**Solution.** The inside expression in the composition is $s(3)$. Because the
input to the $s$-function is time, $t=3$ represents 3 minutes, and $s(3)$ is
the number of sit-ups completed in 3 minutes.

Using $s(3)$ as the input to the function $c(s)$ gives us the number of
calories burned during the number of sit-ups that can be completed in 3
minutes, or simply the number of calories burned in 3 minutes (by doing
sit-ups).

**Example.** Suppose $f(x)$ gives miles that can be driven in $x$ hours and
$g(y)$ gives the gallons of gas used in driving $y$ miles. Which of these
expressions is meaningful: $f(g(y))$ or $g(f(x))$?

**Solution.** The function $y=f(x)$ is a function whose output is the number
of miles driven corresponding to the number of hours driven.

$$\text{number of miles}=f(\text{number of hours})$$

The function $g(y)$ is a function whose output is the number of gallons used
corresponding to the number of miles driven. This means:

$$\text{number of gallons}=g(\text{number of miles})$$

The expression $g(y)$ takes miles as the input and a number of gallons as the
output. The function $f(x)$ requires a number of hours as the input. Trying to
input a number of gallons does not make sense. The expression $f(g(y))$ is
meaningless.

The expression $f(x)$ takes hours as input and a number of miles driven as the
output. The function $g(y)$ requires a number of miles as the input. Using
$f(x)$ (miles driven) as an input value for $g(y)$, where gallons of gas
depends on miles driven, does make sense. The expression $g(f(x))$ makes
sense, and will yield the number of gallons of gas used, $g$, driving a
certain number of miles, $f(x)$, in $x$ hours.

{{< callout type="info" >}}
  **Q&A.** *Are there any situations where $f(g(y))$ and $g(f(x))$ would both
  be meaningful or useful expressions?*

  Yes. For many pure mathematical functions, both compositions make sense,
  even though they usually produce different new functions. In real-world
  problems, functions whose inputs and outputs have the same units also may
  give compositions that are meaningful in either order.
{{< /callout >}}

{{< multiplechoice
  question="The gravitational force on a planet a distance $r$ from the sun is given by the function $G(r)$. The acceleration of a planet subjected to any force $F$ is given by the function $a(F)$. Which composition of these two functions is meaningful?"
  answer="$a(G(r))$, the acceleration of a planet at a distance $r$ from the sun"
  hint="Match the units: what kind of quantity does each function take as its input?"
>}}
$a(G(r))$, the acceleration of a planet at a distance $r$ from the sun
$G(a(F))$, the gravitational force produced by an acceleration
$a(r)$, the acceleration produced by a distance
neither composition is meaningful
{{< /multiplechoice >}}

## Evaluating composite functions

Once we compose a new function from two existing functions, we need to be able
to evaluate it for any input in its domain. We will do this with specific
numerical inputs for functions expressed as tables, graphs, and formulas and
with variables as inputs to functions expressed as formulas. In each case, we
evaluate the inner function using the starting input and then use the inner
function's output as the input for the outer function.

### Evaluating composite functions using tables

When working with functions given as tables, we read input and output values
from the table entries and always work from the inside to the outside. We
evaluate the inside function first and then use the output of the inside
function as the input to the outside function.

**Example.** Using the table below, evaluate $f(g(3))$ and $g(f(3))$.

| $x$ | $f(x)$ | $g(x)$ |
| ---: | ---: | ---: |
| 1 | 6 | 3 |
| 2 | 8 | 5 |
| 3 | 3 | 2 |
| 4 | 1 | 7 |

**Solution.** To evaluate $f(g(3))$, we start from the inside with the input
value 3. We then evaluate the inside expression $g(3)$ using the table that
defines the function $g$: $g(3)=2$. We can then use that result as the input
to the function $f$, so $g(3)$ is replaced by 2 and we get $f(2)$. Then, using
the table that defines the function $f$, we find that $f(2)=8$.

$$
\begin{array}{lrcl}
& g(3) &=& 2 \\[4pt]
& f(g(3)) &=& f(2)=8
\end{array}
$$

To evaluate $g(f(3))$, we first evaluate the inside expression $f(3)$ using
the first table: $f(3)=3$. Then, using the table for $g$, we can evaluate

$$g(f(3))=g(3)=2$$

The table below shows the composite functions $f\circ g$ and $g\circ f$.

| $x$ | $g(x)$ | $f(g(x))$ | $f(x)$ | $g(f(x))$ |
| ---: | ---: | ---: | ---: | ---: |
| 3 | 2 | 8 | 3 | 2 |

{{< fillin
  question="Using the table above, evaluate $f(g(1))$."
  answer="3"
  hint="Read $g(1)$ from the table first, then look that value up in the $f$ column."
>}}

{{< fillin
  question="Using the same table, evaluate $g(f(4))$."
  answer="3"
  hint="Start inside: find $f(4)$, then read $g$ at that input."
>}}

### Evaluating composite functions using graphs

When we are given individual functions as graphs, the procedure for evaluating
composite functions is similar to the process we use for evaluating tables. We
read the input and output values, but this time, from the $x$- and $y$-axes of
the graphs.

{{< callout type="info" >}}
  **How to:** given a composite function and graphs of its individual
  functions, evaluate it using the information provided by the graphs.

  1. Locate the given input to the inner function on the $x$-axis of its
     graph.
  2. Read off the output of the inner function from the $y$-axis of its
     graph.
  3. Locate the inner function output on the $x$-axis of the graph of the
     outer function.
  4. Read the output of the outer function from the $y$-axis of its graph.
     This is the output of the composite function.
{{< /callout >}}

**Example.** Using the graphs (a) and (b) below, evaluate $f(g(1))$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Graph (a): g of x, an upward-opening parabola with its vertex at (3, −1), crossing the horizontal axis at 2 and 4.","xMin":-2,"xMax":7,"yMin":-5,"yMax":7,"unit":22,"tickLabels":true,"yLabel":"g(x)","quadratics":[{"a":1,"b":-6,"c":8}]}'>
<svg role="img" aria-label="Graph (a): g of x, an upward-opening parabola with its vertex at (3, −1), crossing the horizontal axis at 2 and 4." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 316" width="250" height="316" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="290" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="290" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="290" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="290" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="290" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="290" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="290" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="290" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="290" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="224" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="268" x2="224" y2="268" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="224" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="224" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="224" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="224" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="224" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="224" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="224" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="224" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="224" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="180" x2="226" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="70" y1="24" x2="70" y2="292" stroke="currentColor" stroke-width="1"/>
  <polygon points="236,180 226,185 226,175" fill="currentColor"/>
  <polygon points="70,14 75,24 65,24" fill="currentColor"/>
  <polygon points="14,180 24,175 24,185" fill="currentColor"/>
  <polygon points="70,302 65,292 75,292" fill="currentColor"/>
  <text x="234" y="172" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="78" y="24" font-size="13" fill="currentColor" font-style="italic">g(x)</text>
  <line x1="26" y1="177" x2="26" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="195" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="48" y1="177" x2="48" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="195" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="92" y1="177" x2="92" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="195" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="114" y1="177" x2="114" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="195" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="136" y1="177" x2="136" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="136" y="195" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="158" y1="177" x2="158" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="195" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="180" y1="177" x2="180" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="195" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="202" y1="177" x2="202" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="195" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="224" y1="177" x2="224" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="195" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="67" y1="290" x2="73" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="294" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="67" y1="268" x2="73" y2="268" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="272" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="67" y1="246" x2="73" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="250" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="67" y1="224" x2="73" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="228" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="67" y1="202" x2="73" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="206" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="67" y1="158" x2="73" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="162" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="67" y1="136" x2="73" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="140" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="67" y1="114" x2="73" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="118" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="67" y1="92" x2="73" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="96" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="67" y1="70" x2="73" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="74" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="67" y1="48" x2="73" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="52" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="67" y1="26" x2="73" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="30" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <polyline points="75.4,35.1 75.5,35.6 75.8,37 76,38.4 76.3,39.7 76.5,41.1 76.8,42.4 77,43.8 77.3,45.1 77.5,46.4 77.8,47.8 78,49.1 78.3,50.4 78.5,51.7 78.8,53 79,54.3 79.3,55.6 79.5,56.9 79.8,58.2 80,59.5 80.3,60.7 80.5,62 80.8,63.2 81,64.5 81.3,65.7 81.5,67 81.8,68.2 82,69.5 82.3,70.7 82.5,71.9 82.8,73.1 83,74.3 83.3,75.5 83.5,76.7 83.8,77.9 84,79.1 84.3,80.3 84.5,81.4 84.8,82.6 85,83.8 85.3,84.9 85.5,86.1 85.8,87.2 86,88.4 86.3,89.5 86.5,90.6 86.8,91.7 87,92.9 87.3,94 87.5,95.1 87.8,96.2 88,97.3 88.3,98.4 88.5,99.4 88.8,100.5 89,101.6 89.3,102.7 89.5,103.7 89.8,104.8 90,105.8 90.3,106.9 90.5,107.9 90.8,108.9 91,110 91.3,111 91.5,112 91.8,113 92,114 92.3,115 92.5,116 92.8,117 93,118 93.3,118.9 93.5,119.9 93.8,120.9 94,121.8 94.3,122.8 94.5,123.7 94.8,124.7 95,125.6 95.3,126.5 95.5,127.4 95.8,128.4 96,129.3 96.3,130.2 96.5,131.1 96.8,132 97,132.9 97.3,133.7 97.5,134.6 97.8,135.5 98,136.4 98.3,137.2 98.5,138.1 98.8,138.9 99,139.8 99.3,140.6 99.5,141.4 99.8,142.3 100,143.1 100.3,143.9 100.5,144.7 100.8,145.5 101,146.3 101.3,147.1 101.5,147.9 101.8,148.7 102,149.5 102.3,150.2 102.5,151 102.8,151.7 103,152.5 103.3,153.2 103.5,154 103.8,154.7 104,155.5 104.3,156.2 104.5,156.9 104.8,157.6 105,158.3 105.3,159 105.5,159.7 105.8,160.4 106,161.1 106.3,161.8 106.5,162.4 106.8,163.1 107,163.8 107.3,164.4 107.5,165.1 107.8,165.7 108,166.4 108.3,167 108.5,167.6 108.8,168.2 109,168.9 109.3,169.5 109.5,170.1 109.8,170.7 110,171.3 110.3,171.9 110.5,172.4 110.8,173 111,173.6 111.3,174.2 111.5,174.7 111.8,175.3 112,175.8 112.3,176.4 112.5,176.9 112.8,177.4 113,178 113.3,178.5 113.5,179 113.8,179.5 114,180 114.3,180.5 114.5,181 114.8,181.5 115,182 115.3,182.4 115.5,182.9 115.8,183.4 116,183.8 116.3,184.3 116.5,184.7 116.8,185.2 117,185.6 117.3,186 117.5,186.4 117.8,186.9 118,187.3 118.3,187.7 118.5,188.1 118.8,188.5 119,188.9 119.3,189.2 119.5,189.6 119.8,190 120,190.4 120.3,190.7 120.5,191.1 120.8,191.4 121,191.8 121.3,192.1 121.5,192.4 121.8,192.8 122,193.1 122.3,193.4 122.5,193.7 122.8,194 123,194.3 123.3,194.6 123.5,194.9 123.8,195.2 124,195.5 124.3,195.7 124.5,196 124.8,196.2 125,196.5 125.3,196.7 125.5,197 125.8,197.2 126,197.5 126.3,197.7 126.5,197.9 126.8,198.1 127,198.3 127.3,198.5 127.5,198.7 127.8,198.9 128,199.1 128.3,199.3 128.5,199.4 128.8,199.6 129,199.8 129.3,199.9 129.5,200.1 129.8,200.2 130,200.4 130.3,200.5 130.5,200.6 130.8,200.7 131,200.9 131.3,201 131.5,201.1 131.8,201.2 132,201.3 132.3,201.4 132.5,201.4 132.8,201.5 133,201.6 133.3,201.7 133.5,201.7 133.8,201.8 134,201.8 134.3,201.9 134.5,201.9 134.8,201.9 135,202 135.3,202 135.5,202 135.8,202 136,202 136.3,202 136.5,202 136.8,202 137,202 137.3,201.9 137.5,201.9 137.8,201.9 138,201.8 138.3,201.8 138.5,201.7 138.8,201.7 139,201.6 139.3,201.5 139.5,201.4 139.8,201.4 140,201.3 140.3,201.2 140.5,201.1 140.8,201 141,200.9 141.3,200.7 141.5,200.6 141.8,200.5 142,200.4 142.3,200.2 142.5,200.1 142.8,199.9 143,199.8 143.3,199.6 143.5,199.4 143.8,199.3 144,199.1 144.3,198.9 144.5,198.7 144.8,198.5 145,198.3 145.3,198.1 145.5,197.9 145.8,197.7 146,197.5 146.3,197.2 146.5,197 146.8,196.7 147,196.5 147.3,196.2 147.5,196 147.8,195.7 148,195.5 148.3,195.2 148.5,194.9 148.8,194.6 149,194.3 149.3,194 149.5,193.7 149.8,193.4 150,193.1 150.3,192.8 150.5,192.4 150.8,192.1 151,191.8 151.3,191.4 151.5,191.1 151.8,190.7 152,190.4 152.3,190 152.5,189.6 152.8,189.2 153,188.9 153.3,188.5 153.5,188.1 153.8,187.7 154,187.3 154.3,186.9 154.5,186.4 154.8,186 155,185.6 155.3,185.2 155.5,184.7 155.8,184.3 156,183.8 156.3,183.4 156.5,182.9 156.8,182.4 157,182 157.3,181.5 157.5,181 157.8,180.5 158,180 158.3,179.5 158.5,179 158.8,178.5 159,178 159.3,177.4 159.5,176.9 159.8,176.4 160,175.8 160.3,175.3 160.5,174.7 160.8,174.2 161,173.6 161.3,173 161.5,172.4 161.8,171.9 162,171.3 162.3,170.7 162.5,170.1 162.8,169.5 163,168.9 163.3,168.2 163.5,167.6 163.8,167 164,166.4 164.3,165.7 164.5,165.1 164.8,164.4 165,163.8 165.3,163.1 165.5,162.4 165.8,161.8 166,161.1 166.3,160.4 166.5,159.7 166.8,159 167,158.3 167.3,157.6 167.5,156.9 167.8,156.2 168,155.5 168.3,154.7 168.5,154 168.8,153.2 169,152.5 169.3,151.7 169.5,151 169.8,150.2 170,149.5 170.3,148.7 170.5,147.9 170.8,147.1 171,146.3 171.3,145.5 171.5,144.7 171.8,143.9 172,143.1 172.3,142.3 172.5,141.4 172.8,140.6 173,139.8 173.3,138.9 173.5,138.1 173.8,137.2 174,136.4 174.3,135.5 174.5,134.6 174.8,133.7 175,132.9 175.3,132 175.5,131.1 175.8,130.2 176,129.3 176.3,128.4 176.5,127.4 176.8,126.5 177,125.6 177.3,124.7 177.5,123.7 177.8,122.8 178,121.8 178.3,120.9 178.5,119.9 178.8,118.9 179,118 179.3,117 179.5,116 179.8,115 180,114 180.3,113 180.5,112 180.8,111 181,110 181.3,108.9 181.5,107.9 181.8,106.9 182,105.8 182.3,104.8 182.5,103.7 182.8,102.7 183,101.6 183.3,100.5 183.5,99.4 183.8,98.4 184,97.3 184.3,96.2 184.5,95.1 184.8,94 185,92.9 185.3,91.7 185.5,90.6 185.8,89.5 186,88.4 186.3,87.2 186.5,86.1 186.8,84.9 187,83.8 187.3,82.6 187.5,81.4 187.8,80.3 188,79.1 188.3,77.9 188.5,76.7 188.8,75.5 189,74.3 189.3,73.1 189.5,71.9 189.8,70.7 190,69.5 190.3,68.2 190.5,67 190.8,65.7 191,64.5 191.3,63.2 191.5,62 191.8,60.7 192,59.5 192.3,58.2 192.5,56.9 192.8,55.6 193,54.3 193.3,53 193.5,51.7 193.8,50.4 194,49.1 194.3,47.8 194.5,46.4 194.8,45.1 195,43.8 195.3,42.4 195.5,41.1 195.8,39.7 196,38.4 196.3,37 196.5,35.6 196.6,35.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="74,27.3 80.7,36.2 70.8,38" fill="currentColor"/>
  <polygon points="198,27.3 201.2,38 191.3,36.2" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Graph (b): f of x, a downward-opening parabola with its vertex at (3, 6), passing through (0, −3) and (6, −3).","xMin":-2,"xMax":7,"yMin":-5,"yMax":7,"unit":22,"tickLabels":true,"yLabel":"f(x)","quadratics":[{"a":-1,"b":6,"c":-3}]}'>
<svg role="img" aria-label="Graph (b): f of x, a downward-opening parabola with its vertex at (3, 6), passing through (0, −3) and (6, −3)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 316" width="250" height="316" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="290" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="290" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="290" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="290" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="290" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="290" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="290" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="290" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="290" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="224" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="268" x2="224" y2="268" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="224" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="224" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="224" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="224" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="224" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="224" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="224" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="224" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="224" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="180" x2="226" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="70" y1="24" x2="70" y2="292" stroke="currentColor" stroke-width="1"/>
  <polygon points="236,180 226,185 226,175" fill="currentColor"/>
  <polygon points="70,14 75,24 65,24" fill="currentColor"/>
  <polygon points="14,180 24,175 24,185" fill="currentColor"/>
  <polygon points="70,302 65,292 75,292" fill="currentColor"/>
  <text x="234" y="172" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="78" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="177" x2="26" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="195" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="48" y1="177" x2="48" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="195" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="92" y1="177" x2="92" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="195" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="114" y1="177" x2="114" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="195" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="136" y1="177" x2="136" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="136" y="195" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="158" y1="177" x2="158" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="195" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="180" y1="177" x2="180" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="195" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="202" y1="177" x2="202" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="195" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="224" y1="177" x2="224" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="195" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="67" y1="290" x2="73" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="294" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="67" y1="268" x2="73" y2="268" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="272" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="67" y1="246" x2="73" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="250" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="67" y1="224" x2="73" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="228" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="67" y1="202" x2="73" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="206" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="67" y1="158" x2="73" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="162" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="67" y1="136" x2="73" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="140" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="67" y1="114" x2="73" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="118" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="67" y1="92" x2="73" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="96" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="67" y1="70" x2="73" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="74" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="67" y1="48" x2="73" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="52" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="67" y1="26" x2="73" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="30" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <polyline points="64.5,280.7 64.5,280.4 64.8,278.8 65,277.1 65.3,275.5 65.5,273.9 65.8,272.3 66,270.7 66.3,269.1 66.5,267.6 66.8,266 67,264.4 67.3,262.8 67.5,261.3 67.8,259.7 68,258.2 68.3,256.6 68.5,255.1 68.8,253.6 69,252 69.3,250.5 69.5,249 69.8,247.5 70,246 70.3,244.5 70.5,243 70.8,241.5 71,240 71.3,238.6 71.5,237.1 71.8,235.6 72,234.2 72.3,232.7 72.5,231.3 72.8,229.8 73,228.4 73.3,227 73.5,225.6 73.8,224.1 74,222.7 74.3,221.3 74.5,219.9 74.8,218.5 75,217.1 75.3,215.8 75.5,214.4 75.8,213 76,211.6 76.3,210.3 76.5,208.9 76.8,207.6 77,206.2 77.3,204.9 77.5,203.6 77.8,202.2 78,200.9 78.3,199.6 78.5,198.3 78.8,197 79,195.7 79.3,194.4 79.5,193.1 79.8,191.8 80,190.5 80.3,189.3 80.5,188 80.8,186.8 81,185.5 81.3,184.3 81.5,183 81.8,181.8 82,180.5 82.3,179.3 82.5,178.1 82.8,176.9 83,175.7 83.3,174.5 83.5,173.3 83.8,172.1 84,170.9 84.3,169.7 84.5,168.6 84.8,167.4 85,166.2 85.3,165.1 85.5,163.9 85.8,162.8 86,161.6 86.3,160.5 86.5,159.4 86.8,158.3 87,157.1 87.3,156 87.5,154.9 87.8,153.8 88,152.7 88.3,151.6 88.5,150.6 88.8,149.5 89,148.4 89.3,147.3 89.5,146.3 89.8,145.2 90,144.2 90.3,143.1 90.5,142.1 90.8,141.1 91,140 91.3,139 91.5,138 91.8,137 92,136 92.3,135 92.5,134 92.8,133 93,132 93.3,131.1 93.5,130.1 93.8,129.1 94,128.2 94.3,127.2 94.5,126.3 94.8,125.3 95,124.4 95.3,123.5 95.5,122.6 95.8,121.6 96,120.7 96.3,119.8 96.5,118.9 96.8,118 97,117.1 97.3,116.3 97.5,115.4 97.8,114.5 98,113.6 98.3,112.8 98.5,111.9 98.8,111.1 99,110.2 99.3,109.4 99.5,108.6 99.8,107.7 100,106.9 100.3,106.1 100.5,105.3 100.8,104.5 101,103.7 101.3,102.9 101.5,102.1 101.8,101.3 102,100.5 102.3,99.8 102.5,99 102.8,98.3 103,97.5 103.3,96.8 103.5,96 103.8,95.3 104,94.5 104.3,93.8 104.5,93.1 104.8,92.4 105,91.7 105.3,91 105.5,90.3 105.8,89.6 106,88.9 106.3,88.2 106.5,87.6 106.8,86.9 107,86.2 107.3,85.6 107.5,84.9 107.8,84.3 108,83.6 108.3,83 108.5,82.4 108.8,81.8 109,81.1 109.3,80.5 109.5,79.9 109.8,79.3 110,78.7 110.3,78.1 110.5,77.6 110.8,77 111,76.4 111.3,75.8 111.5,75.3 111.8,74.7 112,74.2 112.3,73.6 112.5,73.1 112.8,72.6 113,72 113.3,71.5 113.5,71 113.8,70.5 114,70 114.3,69.5 114.5,69 114.8,68.5 115,68 115.3,67.6 115.5,67.1 115.8,66.6 116,66.2 116.3,65.7 116.5,65.3 116.8,64.8 117,64.4 117.3,64 117.5,63.6 117.8,63.1 118,62.7 118.3,62.3 118.5,61.9 118.8,61.5 119,61.1 119.3,60.8 119.5,60.4 119.8,60 120,59.6 120.3,59.3 120.5,58.9 120.8,58.6 121,58.2 121.3,57.9 121.5,57.6 121.8,57.2 122,56.9 122.3,56.6 122.5,56.3 122.8,56 123,55.7 123.3,55.4 123.5,55.1 123.8,54.8 124,54.5 124.3,54.3 124.5,54 124.8,53.8 125,53.5 125.3,53.3 125.5,53 125.8,52.8 126,52.5 126.3,52.3 126.5,52.1 126.8,51.9 127,51.7 127.3,51.5 127.5,51.3 127.8,51.1 128,50.9 128.3,50.7 128.5,50.6 128.8,50.4 129,50.2 129.3,50.1 129.5,49.9 129.8,49.8 130,49.6 130.3,49.5 130.5,49.4 130.8,49.3 131,49.1 131.3,49 131.5,48.9 131.8,48.8 132,48.7 132.3,48.6 132.5,48.6 132.8,48.5 133,48.4 133.3,48.3 133.5,48.3 133.8,48.2 134,48.2 134.3,48.1 134.5,48.1 134.8,48.1 135,48 135.3,48 135.5,48 135.8,48 136,48 136.3,48 136.5,48 136.8,48 137,48 137.3,48.1 137.5,48.1 137.8,48.1 138,48.2 138.3,48.2 138.5,48.3 138.8,48.3 139,48.4 139.3,48.5 139.5,48.6 139.8,48.6 140,48.7 140.3,48.8 140.5,48.9 140.8,49 141,49.1 141.3,49.3 141.5,49.4 141.8,49.5 142,49.6 142.3,49.8 142.5,49.9 142.8,50.1 143,50.2 143.3,50.4 143.5,50.6 143.8,50.7 144,50.9 144.3,51.1 144.5,51.3 144.8,51.5 145,51.7 145.3,51.9 145.5,52.1 145.8,52.3 146,52.5 146.3,52.8 146.5,53 146.8,53.3 147,53.5 147.3,53.8 147.5,54 147.8,54.3 148,54.5 148.3,54.8 148.5,55.1 148.8,55.4 149,55.7 149.3,56 149.5,56.3 149.8,56.6 150,56.9 150.3,57.2 150.5,57.6 150.8,57.9 151,58.2 151.3,58.6 151.5,58.9 151.8,59.3 152,59.6 152.3,60 152.5,60.4 152.8,60.8 153,61.1 153.3,61.5 153.5,61.9 153.8,62.3 154,62.7 154.3,63.1 154.5,63.6 154.8,64 155,64.4 155.3,64.8 155.5,65.3 155.8,65.7 156,66.2 156.3,66.6 156.5,67.1 156.8,67.6 157,68 157.3,68.5 157.5,69 157.8,69.5 158,70 158.3,70.5 158.5,71 158.8,71.5 159,72 159.3,72.6 159.5,73.1 159.8,73.6 160,74.2 160.3,74.7 160.5,75.3 160.8,75.8 161,76.4 161.3,77 161.5,77.6 161.8,78.1 162,78.7 162.3,79.3 162.5,79.9 162.8,80.5 163,81.1 163.3,81.8 163.5,82.4 163.8,83 164,83.6 164.3,84.3 164.5,84.9 164.8,85.6 165,86.2 165.3,86.9 165.5,87.6 165.8,88.2 166,88.9 166.3,89.6 166.5,90.3 166.8,91 167,91.7 167.3,92.4 167.5,93.1 167.8,93.8 168,94.5 168.3,95.3 168.5,96 168.8,96.8 169,97.5 169.3,98.3 169.5,99 169.8,99.8 170,100.5 170.3,101.3 170.5,102.1 170.8,102.9 171,103.7 171.3,104.5 171.5,105.3 171.8,106.1 172,106.9 172.3,107.7 172.5,108.6 172.8,109.4 173,110.2 173.3,111.1 173.5,111.9 173.8,112.8 174,113.6 174.3,114.5 174.5,115.4 174.8,116.3 175,117.1 175.3,118 175.5,118.9 175.8,119.8 176,120.7 176.3,121.6 176.5,122.6 176.8,123.5 177,124.4 177.3,125.3 177.5,126.3 177.8,127.2 178,128.2 178.3,129.1 178.5,130.1 178.8,131.1 179,132 179.3,133 179.5,134 179.8,135 180,136 180.3,137 180.5,138 180.8,139 181,140 181.3,141.1 181.5,142.1 181.8,143.1 182,144.2 182.3,145.2 182.5,146.3 182.8,147.3 183,148.4 183.3,149.5 183.5,150.6 183.8,151.6 184,152.7 184.3,153.8 184.5,154.9 184.8,156 185,157.1 185.3,158.3 185.5,159.4 185.8,160.5 186,161.6 186.3,162.8 186.5,163.9 186.8,165.1 187,166.2 187.3,167.4 187.5,168.6 187.8,169.7 188,170.9 188.3,172.1 188.5,173.3 188.8,174.5 189,175.7 189.3,176.9 189.5,178.1 189.8,179.3 190,180.5 190.3,181.8 190.5,183 190.8,184.3 191,185.5 191.3,186.8 191.5,188 191.8,189.3 192,190.5 192.3,191.8 192.5,193.1 192.8,194.4 193,195.7 193.3,197 193.5,198.3 193.8,199.6 194,200.9 194.3,202.2 194.5,203.6 194.8,204.9 195,206.2 195.3,207.6 195.5,208.9 195.8,210.3 196,211.6 196.3,213 196.5,214.4 196.8,215.8 197,217.1 197.3,218.5 197.5,219.9 197.8,221.3 198,222.7 198.3,224.1 198.5,225.6 198.8,227 199,228.4 199.3,229.8 199.5,231.3 199.8,232.7 200,234.2 200.3,235.6 200.5,237.1 200.8,238.6 201,240 201.3,241.5 201.5,243 201.8,244.5 202,246 202.3,247.5 202.5,249 202.7,250.5 203,252 203.3,253.6 203.5,255.1 203.8,256.6 204,258.2 204.3,259.7 204.5,261.3 204.8,262.8 205,264.4 205.3,266 205.5,267.6 205.8,269.1 206,270.7 206.3,272.3 206.5,273.9 206.8,275.5 207,277.1 207.3,278.8 207.5,280.4 207.5,280.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="63.3,288.6 59.8,277.9 69.7,279.4" fill="currentColor"/>
  <polygon points="208.8,288.6 202.3,279.4 212.2,277.9" fill="currentColor"/>
</svg>
</div>

**Solution.** To evaluate $f(g(1))$, we start with the inside evaluation. The
marked graphs below trace the path from the input value to the output value.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The same graph of g with the point (1, 3) marked and dashed lines drawn to each axis, showing g(1) = 3.","xMin":-2,"xMax":7,"yMin":-5,"yMax":7,"unit":22,"tickLabels":true,"yLabel":"g(x)","quadratics":[{"a":1,"b":-6,"c":8}],"guides":[[1,3]],"points":[{"at":[1,3],"label":"(1, 3)","labelSide":"e"}]}'>
<svg role="img" aria-label="The same graph of g with the point (1, 3) marked and dashed lines drawn to each axis, showing g(1) = 3." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 316" width="250" height="316" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="290" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="290" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="290" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="290" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="290" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="290" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="290" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="290" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="290" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="224" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="268" x2="224" y2="268" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="224" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="224" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="224" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="224" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="224" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="224" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="224" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="224" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="224" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="180" x2="226" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="70" y1="24" x2="70" y2="292" stroke="currentColor" stroke-width="1"/>
  <polygon points="236,180 226,185 226,175" fill="currentColor"/>
  <polygon points="70,14 75,24 65,24" fill="currentColor"/>
  <polygon points="14,180 24,175 24,185" fill="currentColor"/>
  <polygon points="70,302 65,292 75,292" fill="currentColor"/>
  <text x="234" y="172" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="78" y="24" font-size="13" fill="currentColor" font-style="italic">g(x)</text>
  <line x1="26" y1="177" x2="26" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="195" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="48" y1="177" x2="48" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="195" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="92" y1="177" x2="92" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="195" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="114" y1="177" x2="114" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="195" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="136" y1="177" x2="136" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="136" y="195" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="158" y1="177" x2="158" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="195" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="180" y1="177" x2="180" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="195" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="202" y1="177" x2="202" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="195" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="224" y1="177" x2="224" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="195" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="67" y1="290" x2="73" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="294" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="67" y1="268" x2="73" y2="268" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="272" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="67" y1="246" x2="73" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="250" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="67" y1="224" x2="73" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="228" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="67" y1="202" x2="73" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="206" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="67" y1="158" x2="73" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="162" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="67" y1="136" x2="73" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="140" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="67" y1="114" x2="73" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="118" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="67" y1="92" x2="73" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="96" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="67" y1="70" x2="73" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="74" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="67" y1="48" x2="73" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="52" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="67" y1="26" x2="73" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="30" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <line x1="92" y1="180" x2="92" y2="114" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <line x1="70" y1="114" x2="92" y2="114" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <polyline points="75.4,35.1 75.5,35.6 75.8,37 76,38.4 76.3,39.7 76.5,41.1 76.8,42.4 77,43.8 77.3,45.1 77.5,46.4 77.8,47.8 78,49.1 78.3,50.4 78.5,51.7 78.8,53 79,54.3 79.3,55.6 79.5,56.9 79.8,58.2 80,59.5 80.3,60.7 80.5,62 80.8,63.2 81,64.5 81.3,65.7 81.5,67 81.8,68.2 82,69.5 82.3,70.7 82.5,71.9 82.8,73.1 83,74.3 83.3,75.5 83.5,76.7 83.8,77.9 84,79.1 84.3,80.3 84.5,81.4 84.8,82.6 85,83.8 85.3,84.9 85.5,86.1 85.8,87.2 86,88.4 86.3,89.5 86.5,90.6 86.8,91.7 87,92.9 87.3,94 87.5,95.1 87.8,96.2 88,97.3 88.3,98.4 88.5,99.4 88.8,100.5 89,101.6 89.3,102.7 89.5,103.7 89.8,104.8 90,105.8 90.3,106.9 90.5,107.9 90.8,108.9 91,110 91.3,111 91.5,112 91.8,113 92,114 92.3,115 92.5,116 92.8,117 93,118 93.3,118.9 93.5,119.9 93.8,120.9 94,121.8 94.3,122.8 94.5,123.7 94.8,124.7 95,125.6 95.3,126.5 95.5,127.4 95.8,128.4 96,129.3 96.3,130.2 96.5,131.1 96.8,132 97,132.9 97.3,133.7 97.5,134.6 97.8,135.5 98,136.4 98.3,137.2 98.5,138.1 98.8,138.9 99,139.8 99.3,140.6 99.5,141.4 99.8,142.3 100,143.1 100.3,143.9 100.5,144.7 100.8,145.5 101,146.3 101.3,147.1 101.5,147.9 101.8,148.7 102,149.5 102.3,150.2 102.5,151 102.8,151.7 103,152.5 103.3,153.2 103.5,154 103.8,154.7 104,155.5 104.3,156.2 104.5,156.9 104.8,157.6 105,158.3 105.3,159 105.5,159.7 105.8,160.4 106,161.1 106.3,161.8 106.5,162.4 106.8,163.1 107,163.8 107.3,164.4 107.5,165.1 107.8,165.7 108,166.4 108.3,167 108.5,167.6 108.8,168.2 109,168.9 109.3,169.5 109.5,170.1 109.8,170.7 110,171.3 110.3,171.9 110.5,172.4 110.8,173 111,173.6 111.3,174.2 111.5,174.7 111.8,175.3 112,175.8 112.3,176.4 112.5,176.9 112.8,177.4 113,178 113.3,178.5 113.5,179 113.8,179.5 114,180 114.3,180.5 114.5,181 114.8,181.5 115,182 115.3,182.4 115.5,182.9 115.8,183.4 116,183.8 116.3,184.3 116.5,184.7 116.8,185.2 117,185.6 117.3,186 117.5,186.4 117.8,186.9 118,187.3 118.3,187.7 118.5,188.1 118.8,188.5 119,188.9 119.3,189.2 119.5,189.6 119.8,190 120,190.4 120.3,190.7 120.5,191.1 120.8,191.4 121,191.8 121.3,192.1 121.5,192.4 121.8,192.8 122,193.1 122.3,193.4 122.5,193.7 122.8,194 123,194.3 123.3,194.6 123.5,194.9 123.8,195.2 124,195.5 124.3,195.7 124.5,196 124.8,196.2 125,196.5 125.3,196.7 125.5,197 125.8,197.2 126,197.5 126.3,197.7 126.5,197.9 126.8,198.1 127,198.3 127.3,198.5 127.5,198.7 127.8,198.9 128,199.1 128.3,199.3 128.5,199.4 128.8,199.6 129,199.8 129.3,199.9 129.5,200.1 129.8,200.2 130,200.4 130.3,200.5 130.5,200.6 130.8,200.7 131,200.9 131.3,201 131.5,201.1 131.8,201.2 132,201.3 132.3,201.4 132.5,201.4 132.8,201.5 133,201.6 133.3,201.7 133.5,201.7 133.8,201.8 134,201.8 134.3,201.9 134.5,201.9 134.8,201.9 135,202 135.3,202 135.5,202 135.8,202 136,202 136.3,202 136.5,202 136.8,202 137,202 137.3,201.9 137.5,201.9 137.8,201.9 138,201.8 138.3,201.8 138.5,201.7 138.8,201.7 139,201.6 139.3,201.5 139.5,201.4 139.8,201.4 140,201.3 140.3,201.2 140.5,201.1 140.8,201 141,200.9 141.3,200.7 141.5,200.6 141.8,200.5 142,200.4 142.3,200.2 142.5,200.1 142.8,199.9 143,199.8 143.3,199.6 143.5,199.4 143.8,199.3 144,199.1 144.3,198.9 144.5,198.7 144.8,198.5 145,198.3 145.3,198.1 145.5,197.9 145.8,197.7 146,197.5 146.3,197.2 146.5,197 146.8,196.7 147,196.5 147.3,196.2 147.5,196 147.8,195.7 148,195.5 148.3,195.2 148.5,194.9 148.8,194.6 149,194.3 149.3,194 149.5,193.7 149.8,193.4 150,193.1 150.3,192.8 150.5,192.4 150.8,192.1 151,191.8 151.3,191.4 151.5,191.1 151.8,190.7 152,190.4 152.3,190 152.5,189.6 152.8,189.2 153,188.9 153.3,188.5 153.5,188.1 153.8,187.7 154,187.3 154.3,186.9 154.5,186.4 154.8,186 155,185.6 155.3,185.2 155.5,184.7 155.8,184.3 156,183.8 156.3,183.4 156.5,182.9 156.8,182.4 157,182 157.3,181.5 157.5,181 157.8,180.5 158,180 158.3,179.5 158.5,179 158.8,178.5 159,178 159.3,177.4 159.5,176.9 159.8,176.4 160,175.8 160.3,175.3 160.5,174.7 160.8,174.2 161,173.6 161.3,173 161.5,172.4 161.8,171.9 162,171.3 162.3,170.7 162.5,170.1 162.8,169.5 163,168.9 163.3,168.2 163.5,167.6 163.8,167 164,166.4 164.3,165.7 164.5,165.1 164.8,164.4 165,163.8 165.3,163.1 165.5,162.4 165.8,161.8 166,161.1 166.3,160.4 166.5,159.7 166.8,159 167,158.3 167.3,157.6 167.5,156.9 167.8,156.2 168,155.5 168.3,154.7 168.5,154 168.8,153.2 169,152.5 169.3,151.7 169.5,151 169.8,150.2 170,149.5 170.3,148.7 170.5,147.9 170.8,147.1 171,146.3 171.3,145.5 171.5,144.7 171.8,143.9 172,143.1 172.3,142.3 172.5,141.4 172.8,140.6 173,139.8 173.3,138.9 173.5,138.1 173.8,137.2 174,136.4 174.3,135.5 174.5,134.6 174.8,133.7 175,132.9 175.3,132 175.5,131.1 175.8,130.2 176,129.3 176.3,128.4 176.5,127.4 176.8,126.5 177,125.6 177.3,124.7 177.5,123.7 177.8,122.8 178,121.8 178.3,120.9 178.5,119.9 178.8,118.9 179,118 179.3,117 179.5,116 179.8,115 180,114 180.3,113 180.5,112 180.8,111 181,110 181.3,108.9 181.5,107.9 181.8,106.9 182,105.8 182.3,104.8 182.5,103.7 182.8,102.7 183,101.6 183.3,100.5 183.5,99.4 183.8,98.4 184,97.3 184.3,96.2 184.5,95.1 184.8,94 185,92.9 185.3,91.7 185.5,90.6 185.8,89.5 186,88.4 186.3,87.2 186.5,86.1 186.8,84.9 187,83.8 187.3,82.6 187.5,81.4 187.8,80.3 188,79.1 188.3,77.9 188.5,76.7 188.8,75.5 189,74.3 189.3,73.1 189.5,71.9 189.8,70.7 190,69.5 190.3,68.2 190.5,67 190.8,65.7 191,64.5 191.3,63.2 191.5,62 191.8,60.7 192,59.5 192.3,58.2 192.5,56.9 192.8,55.6 193,54.3 193.3,53 193.5,51.7 193.8,50.4 194,49.1 194.3,47.8 194.5,46.4 194.8,45.1 195,43.8 195.3,42.4 195.5,41.1 195.8,39.7 196,38.4 196.3,37 196.5,35.6 196.6,35.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="74,27.3 80.7,36.2 70.8,38" fill="currentColor"/>
  <polygon points="198,27.3 201.2,38 191.3,36.2" fill="currentColor"/>
  <circle cx="92" cy="114" r="4" fill="currentColor"/>
  <text x="106" y="118" font-size="13" fill="currentColor" text-anchor="start">(1, 3)</text>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The same graph of f with the point (3, 6) marked and dashed lines drawn to each axis, showing f(3) = 6.","xMin":-2,"xMax":7,"yMin":-5,"yMax":7,"unit":22,"tickLabels":true,"yLabel":"f(x)","quadratics":[{"a":-1,"b":6,"c":-3}],"guides":[[3,6]],"points":[{"at":[3,6],"label":"(3, 6)","labelSide":"ne"}]}'>
<svg role="img" aria-label="The same graph of f with the point (3, 6) marked and dashed lines drawn to each axis, showing f(3) = 6." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 316" width="250" height="316" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="290" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="290" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="290" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="290" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="290" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="290" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="290" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="290" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="290" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="224" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="268" x2="224" y2="268" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="224" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="224" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="224" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="224" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="224" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="224" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="224" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="224" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="224" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="180" x2="226" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="70" y1="24" x2="70" y2="292" stroke="currentColor" stroke-width="1"/>
  <polygon points="236,180 226,185 226,175" fill="currentColor"/>
  <polygon points="70,14 75,24 65,24" fill="currentColor"/>
  <polygon points="14,180 24,175 24,185" fill="currentColor"/>
  <polygon points="70,302 65,292 75,292" fill="currentColor"/>
  <text x="234" y="172" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="78" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="177" x2="26" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="195" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="48" y1="177" x2="48" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="195" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="92" y1="177" x2="92" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="195" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="114" y1="177" x2="114" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="195" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="136" y1="177" x2="136" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="136" y="195" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="158" y1="177" x2="158" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="195" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="180" y1="177" x2="180" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="195" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="202" y1="177" x2="202" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="195" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="224" y1="177" x2="224" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="195" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="67" y1="290" x2="73" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="294" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="67" y1="268" x2="73" y2="268" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="272" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="67" y1="246" x2="73" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="250" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="67" y1="224" x2="73" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="228" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="67" y1="202" x2="73" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="206" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="67" y1="158" x2="73" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="162" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="67" y1="136" x2="73" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="140" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="67" y1="114" x2="73" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="118" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="67" y1="92" x2="73" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="96" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="67" y1="70" x2="73" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="74" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="67" y1="48" x2="73" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="52" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="67" y1="26" x2="73" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="30" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <line x1="136" y1="180" x2="136" y2="48" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <line x1="70" y1="48" x2="136" y2="48" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <polyline points="64.5,280.7 64.5,280.4 64.8,278.8 65,277.1 65.3,275.5 65.5,273.9 65.8,272.3 66,270.7 66.3,269.1 66.5,267.6 66.8,266 67,264.4 67.3,262.8 67.5,261.3 67.8,259.7 68,258.2 68.3,256.6 68.5,255.1 68.8,253.6 69,252 69.3,250.5 69.5,249 69.8,247.5 70,246 70.3,244.5 70.5,243 70.8,241.5 71,240 71.3,238.6 71.5,237.1 71.8,235.6 72,234.2 72.3,232.7 72.5,231.3 72.8,229.8 73,228.4 73.3,227 73.5,225.6 73.8,224.1 74,222.7 74.3,221.3 74.5,219.9 74.8,218.5 75,217.1 75.3,215.8 75.5,214.4 75.8,213 76,211.6 76.3,210.3 76.5,208.9 76.8,207.6 77,206.2 77.3,204.9 77.5,203.6 77.8,202.2 78,200.9 78.3,199.6 78.5,198.3 78.8,197 79,195.7 79.3,194.4 79.5,193.1 79.8,191.8 80,190.5 80.3,189.3 80.5,188 80.8,186.8 81,185.5 81.3,184.3 81.5,183 81.8,181.8 82,180.5 82.3,179.3 82.5,178.1 82.8,176.9 83,175.7 83.3,174.5 83.5,173.3 83.8,172.1 84,170.9 84.3,169.7 84.5,168.6 84.8,167.4 85,166.2 85.3,165.1 85.5,163.9 85.8,162.8 86,161.6 86.3,160.5 86.5,159.4 86.8,158.3 87,157.1 87.3,156 87.5,154.9 87.8,153.8 88,152.7 88.3,151.6 88.5,150.6 88.8,149.5 89,148.4 89.3,147.3 89.5,146.3 89.8,145.2 90,144.2 90.3,143.1 90.5,142.1 90.8,141.1 91,140 91.3,139 91.5,138 91.8,137 92,136 92.3,135 92.5,134 92.8,133 93,132 93.3,131.1 93.5,130.1 93.8,129.1 94,128.2 94.3,127.2 94.5,126.3 94.8,125.3 95,124.4 95.3,123.5 95.5,122.6 95.8,121.6 96,120.7 96.3,119.8 96.5,118.9 96.8,118 97,117.1 97.3,116.3 97.5,115.4 97.8,114.5 98,113.6 98.3,112.8 98.5,111.9 98.8,111.1 99,110.2 99.3,109.4 99.5,108.6 99.8,107.7 100,106.9 100.3,106.1 100.5,105.3 100.8,104.5 101,103.7 101.3,102.9 101.5,102.1 101.8,101.3 102,100.5 102.3,99.8 102.5,99 102.8,98.3 103,97.5 103.3,96.8 103.5,96 103.8,95.3 104,94.5 104.3,93.8 104.5,93.1 104.8,92.4 105,91.7 105.3,91 105.5,90.3 105.8,89.6 106,88.9 106.3,88.2 106.5,87.6 106.8,86.9 107,86.2 107.3,85.6 107.5,84.9 107.8,84.3 108,83.6 108.3,83 108.5,82.4 108.8,81.8 109,81.1 109.3,80.5 109.5,79.9 109.8,79.3 110,78.7 110.3,78.1 110.5,77.6 110.8,77 111,76.4 111.3,75.8 111.5,75.3 111.8,74.7 112,74.2 112.3,73.6 112.5,73.1 112.8,72.6 113,72 113.3,71.5 113.5,71 113.8,70.5 114,70 114.3,69.5 114.5,69 114.8,68.5 115,68 115.3,67.6 115.5,67.1 115.8,66.6 116,66.2 116.3,65.7 116.5,65.3 116.8,64.8 117,64.4 117.3,64 117.5,63.6 117.8,63.1 118,62.7 118.3,62.3 118.5,61.9 118.8,61.5 119,61.1 119.3,60.8 119.5,60.4 119.8,60 120,59.6 120.3,59.3 120.5,58.9 120.8,58.6 121,58.2 121.3,57.9 121.5,57.6 121.8,57.2 122,56.9 122.3,56.6 122.5,56.3 122.8,56 123,55.7 123.3,55.4 123.5,55.1 123.8,54.8 124,54.5 124.3,54.3 124.5,54 124.8,53.8 125,53.5 125.3,53.3 125.5,53 125.8,52.8 126,52.5 126.3,52.3 126.5,52.1 126.8,51.9 127,51.7 127.3,51.5 127.5,51.3 127.8,51.1 128,50.9 128.3,50.7 128.5,50.6 128.8,50.4 129,50.2 129.3,50.1 129.5,49.9 129.8,49.8 130,49.6 130.3,49.5 130.5,49.4 130.8,49.3 131,49.1 131.3,49 131.5,48.9 131.8,48.8 132,48.7 132.3,48.6 132.5,48.6 132.8,48.5 133,48.4 133.3,48.3 133.5,48.3 133.8,48.2 134,48.2 134.3,48.1 134.5,48.1 134.8,48.1 135,48 135.3,48 135.5,48 135.8,48 136,48 136.3,48 136.5,48 136.8,48 137,48 137.3,48.1 137.5,48.1 137.8,48.1 138,48.2 138.3,48.2 138.5,48.3 138.8,48.3 139,48.4 139.3,48.5 139.5,48.6 139.8,48.6 140,48.7 140.3,48.8 140.5,48.9 140.8,49 141,49.1 141.3,49.3 141.5,49.4 141.8,49.5 142,49.6 142.3,49.8 142.5,49.9 142.8,50.1 143,50.2 143.3,50.4 143.5,50.6 143.8,50.7 144,50.9 144.3,51.1 144.5,51.3 144.8,51.5 145,51.7 145.3,51.9 145.5,52.1 145.8,52.3 146,52.5 146.3,52.8 146.5,53 146.8,53.3 147,53.5 147.3,53.8 147.5,54 147.8,54.3 148,54.5 148.3,54.8 148.5,55.1 148.8,55.4 149,55.7 149.3,56 149.5,56.3 149.8,56.6 150,56.9 150.3,57.2 150.5,57.6 150.8,57.9 151,58.2 151.3,58.6 151.5,58.9 151.8,59.3 152,59.6 152.3,60 152.5,60.4 152.8,60.8 153,61.1 153.3,61.5 153.5,61.9 153.8,62.3 154,62.7 154.3,63.1 154.5,63.6 154.8,64 155,64.4 155.3,64.8 155.5,65.3 155.8,65.7 156,66.2 156.3,66.6 156.5,67.1 156.8,67.6 157,68 157.3,68.5 157.5,69 157.8,69.5 158,70 158.3,70.5 158.5,71 158.8,71.5 159,72 159.3,72.6 159.5,73.1 159.8,73.6 160,74.2 160.3,74.7 160.5,75.3 160.8,75.8 161,76.4 161.3,77 161.5,77.6 161.8,78.1 162,78.7 162.3,79.3 162.5,79.9 162.8,80.5 163,81.1 163.3,81.8 163.5,82.4 163.8,83 164,83.6 164.3,84.3 164.5,84.9 164.8,85.6 165,86.2 165.3,86.9 165.5,87.6 165.8,88.2 166,88.9 166.3,89.6 166.5,90.3 166.8,91 167,91.7 167.3,92.4 167.5,93.1 167.8,93.8 168,94.5 168.3,95.3 168.5,96 168.8,96.8 169,97.5 169.3,98.3 169.5,99 169.8,99.8 170,100.5 170.3,101.3 170.5,102.1 170.8,102.9 171,103.7 171.3,104.5 171.5,105.3 171.8,106.1 172,106.9 172.3,107.7 172.5,108.6 172.8,109.4 173,110.2 173.3,111.1 173.5,111.9 173.8,112.8 174,113.6 174.3,114.5 174.5,115.4 174.8,116.3 175,117.1 175.3,118 175.5,118.9 175.8,119.8 176,120.7 176.3,121.6 176.5,122.6 176.8,123.5 177,124.4 177.3,125.3 177.5,126.3 177.8,127.2 178,128.2 178.3,129.1 178.5,130.1 178.8,131.1 179,132 179.3,133 179.5,134 179.8,135 180,136 180.3,137 180.5,138 180.8,139 181,140 181.3,141.1 181.5,142.1 181.8,143.1 182,144.2 182.3,145.2 182.5,146.3 182.8,147.3 183,148.4 183.3,149.5 183.5,150.6 183.8,151.6 184,152.7 184.3,153.8 184.5,154.9 184.8,156 185,157.1 185.3,158.3 185.5,159.4 185.8,160.5 186,161.6 186.3,162.8 186.5,163.9 186.8,165.1 187,166.2 187.3,167.4 187.5,168.6 187.8,169.7 188,170.9 188.3,172.1 188.5,173.3 188.8,174.5 189,175.7 189.3,176.9 189.5,178.1 189.8,179.3 190,180.5 190.3,181.8 190.5,183 190.8,184.3 191,185.5 191.3,186.8 191.5,188 191.8,189.3 192,190.5 192.3,191.8 192.5,193.1 192.8,194.4 193,195.7 193.3,197 193.5,198.3 193.8,199.6 194,200.9 194.3,202.2 194.5,203.6 194.8,204.9 195,206.2 195.3,207.6 195.5,208.9 195.8,210.3 196,211.6 196.3,213 196.5,214.4 196.8,215.8 197,217.1 197.3,218.5 197.5,219.9 197.8,221.3 198,222.7 198.3,224.1 198.5,225.6 198.8,227 199,228.4 199.3,229.8 199.5,231.3 199.8,232.7 200,234.2 200.3,235.6 200.5,237.1 200.8,238.6 201,240 201.3,241.5 201.5,243 201.8,244.5 202,246 202.3,247.5 202.5,249 202.7,250.5 203,252 203.3,253.6 203.5,255.1 203.8,256.6 204,258.2 204.3,259.7 204.5,261.3 204.8,262.8 205,264.4 205.3,266 205.5,267.6 205.8,269.1 206,270.7 206.3,272.3 206.5,273.9 206.8,275.5 207,277.1 207.3,278.8 207.5,280.4 207.5,280.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="63.3,288.6 59.8,277.9 69.7,279.4" fill="currentColor"/>
  <polygon points="208.8,288.6 202.3,279.4 212.2,277.9" fill="currentColor"/>
  <circle cx="136" cy="48" r="4" fill="currentColor"/>
  <text x="147.2" y="36.8" font-size="13" fill="currentColor" text-anchor="start">(3, 6)</text>
</svg>
</div>

We evaluate $g(1)$ using the graph of $g(x)$, finding the input of 1 on the
$x$-axis and finding the output value of the graph at that input. Here,
$g(1)=3$. We use this value as the input to the function $f$.

$$f(g(1))=f(3)$$

We can then evaluate the composite function by looking to the graph of $f(x)$,
finding the input of 3 on the $x$-axis and reading the output value of the
graph at this input. Here, $f(3)=6$, so $f(g(1))=6$.

{{< fillin
  question="Using the graphs above, evaluate $g(f(2))$."
  answer="3"
  hint="Read $f(2)$ from graph (b) first, then read $g$ at that input on graph (a)."
>}}

### Evaluating composite functions using formulas

When evaluating a composite function where we have either created or been
given formulas, the rule of working from the inside out remains the same. The
input value to the outer function will be the output of the inner function,
which may be a numerical value, a variable name, or a more complicated
expression.

While we can compose the functions for each individual input value, it is
sometimes helpful to find a single formula that will calculate the result of a
composition $f(g(x))$. To do this, we will extend our idea of function
evaluation. Recall that, when we evaluate a function like $f(t)=t^2-t$, we
substitute the value inside the parentheses into the formula wherever we see
the input variable.

{{< callout type="info" >}}
  **How to:** given a formula for a composite function, evaluate the
  function.

  1. Evaluate the inside function using the input value or variable provided.
  2. Use the resulting output as the input to the outside function.
{{< /callout >}}

**Example.** Given $f(t)=t^2-t$ and $h(x)=3x+2$, evaluate $f(h(1))$.

**Solution.** Because the inside expression is $h(1)$, we start by evaluating
$h(x)$ at 1.

$$
\begin{array}{lrcl}
& h(1) &=& 3(1)+2 \\[4pt]
& h(1) &=& 5
\end{array}
$$

Then $f(h(1))=f(5)$, so we evaluate $f(t)$ at an input of 5.

$$
\begin{array}{lrcl}
& f(h(1)) &=& f(5) \\[4pt]
& f(h(1)) &=& 5^2-5 \\[4pt]
& f(h(1)) &=& 20
\end{array}
$$

It makes no difference what the input variables $t$ and $x$ were called in
this problem because we evaluated for specific numerical values.

{{< fillin
  question="Given $f(t)=t^2-t$ and $h(x)=3x+2$, evaluate $h(f(2))$."
  answer="8"
  hint="Work from the inside: find $f(2)$, then feed that into $h$."
>}}

{{< fillin
  question="Given the same $f$ and $h$, evaluate $h(f(-2))$."
  answer="20"
  hint="$f(-2)$ squares the negative input before subtracting it."
>}}

## Finding the domain of a composite function

As we discussed previously, the **domain of a composite function** such as
$f\circ g$ is dependent on the domain of $g$ and the domain of $f$. It is
important to know when we can apply a composite function and when we cannot,
that is, to know the domain of a function such as $f\circ g$. Let us assume we
know the domains of the functions $f$ and $g$ separately. If we write the
composite function for an input $x$ as $f(g(x))$, we can see right away that
$x$ must be a member of the domain of $g$ in order for the expression to be
meaningful, because otherwise we cannot complete the inner function
evaluation. However, we also see that $g(x)$ must be a member of the domain of
$f$, otherwise the second function evaluation in $f(g(x))$ cannot be
completed, and the expression is still undefined. Thus the domain of
$f\circ g$ consists of only those inputs in the domain of $g$ that produce
outputs from $g$ belonging to the domain of $f$. Note that the domain of $f$
composed with $g$ is the set of all $x$ such that $x$ is in the domain of $g$
and $g(x)$ is in the domain of $f$.

{{< callout type="info" >}}
  **Domain of a composite function.** The domain of a composite function
  $f(g(x))$ is the set of those inputs $x$ in the domain of $g$ for which
  $g(x)$ is in the domain of $f$.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a function composition $f(g(x))$, determine its domain.

  1. Find the domain of $g$.
  2. Find the domain of $f$.
  3. Find those inputs $x$ in the domain of $g$ for which $g(x)$ is in the
     domain of $f$. That is, exclude those inputs $x$ from the domain of $g$
     for which $g(x)$ is not in the domain of $f$. The resulting set is the
     domain of $f\circ g$.
{{< /callout >}}

**Example.** Find the domain of $(f\circ g)(x)$ where $f(x)=\tfrac{5}{x-1}$
and $g(x)=\tfrac{4}{3x-2}$.

**Solution.** The domain of $g(x)$ consists of all real numbers except
$x=\tfrac{2}{3}$, since that input value would cause us to divide by 0.
Likewise, the domain of $f$ consists of all real numbers except 1. So we need
to exclude from the domain of $g(x)$ that value of $x$ for which $g(x)=1$.

$$
\begin{array}{lrcl}
& \tfrac{4}{3x-2} &=& 1 \\[4pt]
& 4 &=& 3x-2 \\[4pt]
& 6 &=& 3x \\[4pt]
& x &=& 2
\end{array}
$$

So the domain of $f\circ g$ is the set of all real numbers except
$\tfrac{2}{3}$ and $2$. This means that

$$x\ne\tfrac{2}{3}\ \text{ and }\ x\ne 2$$

We can write this in interval notation as

$$\left(-\infty,\tfrac{2}{3}\right)\cup\left(\tfrac{2}{3},2\right)\cup(2,\infty)$$

**Example.** Find the domain of $(f\circ g)(x)$ where $f(x)=\sqrt{x+2}$ and
$g(x)=\sqrt{3-x}$.

**Solution.** Because we cannot take the square root of a negative number, the
domain of $g$ is $(-\infty,3]$. Now we check the domain of the composite
function

$$(f\circ g)(x)=\sqrt{\sqrt{3-x}+2}$$

For $(f\circ g)(x)=\sqrt{\sqrt{3-x}+2}$, we need $\sqrt{3-x}+2\ge 0$, since
the radicand of a square root must be nonnegative. Since square roots are
nonnegative, $\sqrt{3-x}\ge 0$, or $3-x\ge 0$, which gives a domain of
$(-\infty,3]$.

This example shows that knowledge of the range of functions (specifically the
inner function) can also be helpful in finding the domain of a composite
function. It also shows that the domain of $f\circ g$ can contain values that
are not in the domain of $f$, though they must be in the domain of $g$.

{{< multiplechoice
  question="Find the domain of $(f\circ g)(x)$ where $f(x)=\tfrac{1}{x-2}$ and $g(x)=\sqrt{x+4}$."
  answer="$[-4,0)\cup(0,\infty)$"
  hint="Start with the domain of $g$, then throw out the input that makes $g(x)$ equal to 2."
>}}
$[-4,0)\cup(0,\infty)$
$[-4,\infty)$
$(-\infty,-4]\cup(0,\infty)$
$[-4,2)\cup(2,\infty)$
{{< /multiplechoice >}}

## Decomposing a composite function into its component functions

In some cases, it is necessary to decompose a complicated function. In other
words, we can write it as a composition of two simpler functions. There may be
more than one way to **decompose a composite function**, so we may choose the
decomposition that appears to be most expedient.

**Example.** Write $f(x)=\sqrt{5-x^2}$ as the composition of two functions.

**Solution.** We are looking for two functions, $g$ and $h$, so
$f(x)=g(h(x))$. To do this, we look for a function inside a function in the
formula for $f(x)$. As one possibility, we might notice that the expression
$5-x^2$ is the inside of the square root. We could then decompose the function
as

$$h(x)=5-x^2\quad\text{and}\quad g(x)=\sqrt{x}$$

We can check our answer by recomposing the functions.

$$g(h(x))=g(5-x^2)=\sqrt{5-x^2}$$

{{< multiplechoice
  question="Write $f(x)=\tfrac{4}{3-\sqrt{4+x^2}}$ as the composition $h\circ g$ of two functions."
  answer="$g(x)=\sqrt{4+x^2}$ and $h(x)=\tfrac{4}{3-x}$"
  hint="Look for the expression that sits inside the rest of the formula, and call that the inner function."
>}}
$g(x)=\sqrt{4+x^2}$ and $h(x)=\tfrac{4}{3-x}$
$g(x)=4+x^2$ and $h(x)=\tfrac{4}{3-x}$
$g(x)=3-\sqrt{x}$ and $h(x)=\tfrac{4}{x}$
$g(x)=\tfrac{4}{x}$ and $h(x)=3-\sqrt{4+x^2}$
{{< /multiplechoice >}}

## Key equation

| Composite function | $(f\circ g)(x)=f(g(x))$ |
| :--- | :--- |

## Key concepts

- We can perform algebraic operations on functions.
- When functions are composed, the output of the first (inner) function
  becomes the input of the second (outer) function.
- The function produced by composing two functions is a composite function.
- The order of function composition must be considered when interpreting the
  meaning of composite functions.
- A composite function can be evaluated by evaluating the inner function using
  the given input value and then evaluating the outer function taking as its
  input the output of the inner function.
- A composite function can be evaluated from a table.
- A composite function can be evaluated from a graph.
- A composite function can be evaluated from a formula.
- The domain of a composite function consists of those inputs in the domain of
  the inner function that correspond to outputs of the inner function that are
  in the domain of the outer function.
- Just as functions can be combined to form a composite function, composite
  functions can be decomposed into simpler functions.
- Functions can often be decomposed in more than one way.

## Key terms

**composite function** — the new function formed by function composition, when
the output of one function is used as the input of another.

## Practice

### Combine functions using algebraic operations

{{< fillin
  question="Given $f(x)=x^2+2x$ and $g(x)=6-x^2$, find and simplify $(fg)(x)$."
  answer="-x^4-2x^3+6x^2+12x"
  answerForm="expanded"
  answerDisplay="$(fg)(x)=-x^{4}-2x^{3}+6x^{2}+12x$"
  hint="Multiply the two polynomials and collect like terms by degree."
>}}

{{< fillin
  question="Given $f(x)=2x^2+4x$ and $g(x)=\tfrac{1}{2x}$, find and simplify $(f+g)(x)$ as a single fraction."
  answer="\frac{4x^3+8x^2+1}{2x}"
  answerForm="single-fraction"
  answerDisplay="$(f+g)(x)=\tfrac{4x^{3}+8x^{2}+1}{2x}$"
  hint="Rewrite $f(x)$ with denominator $2x$, then add the numerators over that common denominator."
>}}

{{< fillin
  question="Given $f(x)=3x^2$ and $g(x)=\sqrt{x-5}$, find $\left(\tfrac{f}{g}\right)(x)$."
  answer="\frac{3x^2}{\sqrt{x-5}}"
  answerForm="single-fraction"
  answerDisplay="$\left(\tfrac{f}{g}\right)(x)=\tfrac{3x^{2}}{\sqrt{x-5}}$"
  hint="Divide $f(x)$ by $g(x)$; nothing cancels, so leave it as one fraction."
>}}

### Create a new function by composition of functions

{{< fillin
  question="Given $f(x)=\sqrt{x}+2$ and $g(x)=x^2+3$, find and simplify $f(g(x))$."
  answer="\sqrt{x^2+3}+2"
  answerForm="no-like-terms"
  answerDisplay="$f(g(x))=\sqrt{x^{2}+3}+2$"
  hint="Substitute $g(x)$ for every $x$ in $f(x)=\sqrt{x}+2$."
>}}

{{< fillin
  question="Given the same $f$ and $g$, find and simplify $g(f(x))$."
  answer="x+4\sqrt{x}+7"
  answerForm="expanded distributed"
  answerDisplay="$g(f(x))=x+4\sqrt{x}+7$"
  hint="Square $\sqrt{x}+2$ completely before adding 3 — don't leave it as a power."
>}}

{{< fillin
  question="Given $f(x)=2x^2+1$ and $g(x)=3x+5$, find and simplify $f(g(x))$."
  answer="18x^2+60x+51"
  answerForm="expanded distributed"
  answerDisplay="$f(g(x))=18x^{2}+60x+51$"
  hint="Substitute $3x+5$ for every $x$ in $f(x)=2x^2+1$, then expand the square before combining terms."
>}}

### Evaluate composite functions

Use the table below, which gives values of $f$ and $g$ at integer inputs from 0
to 9.

| $x$ | $f(x)$ | $g(x)$ |
| ---: | ---: | ---: |
| 0 | 7 | 9 |
| 1 | 6 | 5 |
| 2 | 5 | 6 |
| 3 | 8 | 2 |
| 4 | 4 | 1 |
| 5 | 0 | 8 |
| 6 | 2 | 7 |
| 7 | 1 | 3 |
| 8 | 9 | 4 |
| 9 | 3 | 0 |

{{< fillin
  question="Using the table above, evaluate $f(g(5))$."
  answer="9"
  hint="Read $g(5)$ from the table first, then look that value up in the $f$ column."
>}}

{{< fillin
  question="Using the same table, evaluate $g(f(3))$."
  answer="4"
  hint="Start inside: find $f(3)$, then read $g$ at that input."
>}}

{{< fillin
  question="Using the same table, evaluate $f(f(1))$."
  answer="2"
  hint="Find $f(1)$ first, then apply $f$ again to that result."
>}}

### Find the domain of a composite function

{{< multiplechoice
  question="For $f(x)=\tfrac{1}{x}$ and $g(x)=\sqrt{x-1}$, write the domain of $(f\circ g)(x)$ in interval notation."
  answer="$(1,\infty)$"
  hint="Find the input to $g$ that makes $g(x)$ equal to 0, the one value $f$ cannot accept."
>}}
$(1,\infty)$
$[1,\infty)$
$(-\infty,1)$
$(0,\infty)$
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $p(x)=\tfrac{1}{\sqrt{x}}$ and $m(x)=x^2-4$, state the domain of $p(m(x))$ in interval notation."
  answer="$(-\infty,-2)\cup(2,\infty)$"
  hint="The radicand $m(x)$ must be strictly positive, since it also sits under a fraction bar."
>}}
$(-\infty,-2)\cup(2,\infty)$
$[-2,2]$
$(-\infty,-2]\cup[2,\infty)$
$(2,\infty)$
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $f(x)=\sqrt{2-4x}$ and $g(x)=-\tfrac{3}{x}$, write the domain of $(g\circ f)(x)$ in interval notation."
  answer="$\left(-\infty,\tfrac{1}{2}\right)$"
  hint="Start from the domain of $f$, then exclude the input where $f(x)$ itself equals 0."
>}}
$\left(-\infty,\tfrac{1}{2}\right)$
$\left(-\infty,\tfrac{1}{2}\right]$
$\left(\tfrac{1}{2},\infty\right)$
$(-\infty,0)\cup\left(0,\tfrac{1}{2}\right)$
{{< /multiplechoice >}}

### Decompose a composite function into its component functions

{{< multiplechoice
  question="Write $h(x)=(x-5)^3$ as the composition $f(g(x))$ of two functions."
  answer="$f(x)=x^3$ and $g(x)=x-5$"
  hint="Let the inner function be whatever is being cubed."
>}}
$f(x)=x^3$ and $g(x)=x-5$
$f(x)=x-5$ and $g(x)=x^3$
$f(x)=x^3-5$ and $g(x)=x$
$f(x)=x-5$ and $g(x)=x^3-5$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Write $h(x)=\tfrac{4}{(x+2)^2}$ as the composition $f(g(x))$ of two functions."
  answer="$f(x)=\tfrac{4}{x}$ and $g(x)=(x+2)^2$"
  hint="Let the inner function be the expression being squared in the denominator."
>}}
$f(x)=\tfrac{4}{x}$ and $g(x)=(x+2)^2$
$f(x)=(x+2)^2$ and $g(x)=\tfrac{4}{x}$
$f(x)=\tfrac{4}{x}$ and $g(x)=(x-2)^2$
$f(x)=x^2$ and $g(x)=\tfrac{4}{x+2}$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Write $h(x)=\sqrt[3]{x-1}$ as the composition $f(g(x))$ of two functions."
  answer="$f(x)=\sqrt[3]{x}$ and $g(x)=x-1$"
  hint="Let the inner function be the expression under the cube root."
>}}
$f(x)=\sqrt[3]{x}$ and $g(x)=x-1$
$f(x)=x-1$ and $g(x)=\sqrt[3]{x}$
$f(x)=\sqrt[3]{x}$ and $g(x)=1-x$
$f(x)=x^3$ and $g(x)=x-1$
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 1.4: Composition of Functions](https://openstax.org/books/precalculus-2e/pages/1-4-composition-of-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated the two parabola graphs as accessible inline SVGs generated from their formulas, $g(x)=x^{2}-6x+8$ and $f(x)=-x^{2}+6x-3$, and merged the source's two annotated versions of them into one marked pair, since dashed crosshairs already trace the path the arrows were added to show; presented the function tables as Markdown tables; omitted the media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback, using multiple choice where the answer is interval notation, a pair of functions, or a verbal judgement, none of which can be graded as free-response math; and adapted a selection of the end-of-section exercises, each independently checked against the printed Answer Key, into the closing interactive Practice block, again using multiple choice for the same categorical cases (interval-notation domains, non-unique decompositions). One correction: where the source writes the domain restriction as "$x\ne\tfrac{2}{3}$ or $x\ne 2$" — a disjunction that excludes nothing — this page writes "and", matching both the sentence before it and the interval notation after it.</small>
