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
$a(r)$, the acceleration produced by a distance
neither composition is meaningful
$a(G(r))$, the acceleration of a planet at a distance $r$ from the sun
$G(a(F))$, the gravitational force produced by an acceleration
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

{{< apfigure kind="graph" >}}
{"ariaLabel":"Graph (a): g of x, an upward-opening parabola with its vertex at (3, −1), crossing the horizontal axis at 2 and 4.","xMin":-2,"xMax":7,"yMin":-5,"yMax":7,"unit":22,"tickLabels":true,"yLabel":"g(x)","quadratics":[{"a":1,"b":-6,"c":8}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Graph (b): f of x, a downward-opening parabola with its vertex at (3, 6), passing through (0, −3) and (6, −3).","xMin":-2,"xMax":7,"yMin":-5,"yMax":7,"unit":22,"tickLabels":true,"yLabel":"f(x)","quadratics":[{"a":-1,"b":6,"c":-3}]}
{{< /apfigure >}}

**Solution.** To evaluate $f(g(1))$, we start with the inside evaluation. The
marked graphs below trace the path from the input value to the output value.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same graph of g with the point (1, 3) marked and dashed lines drawn to each axis, showing g(1) = 3.","xMin":-2,"xMax":7,"yMin":-5,"yMax":7,"unit":22,"tickLabels":true,"yLabel":"g(x)","quadratics":[{"a":1,"b":-6,"c":8}],"guides":[[1,3]],"points":[{"at":[1,3],"label":"(1, 3)","labelSide":"e"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same graph of f with the point (3, 6) marked and dashed lines drawn to each axis, showing f(3) = 6.","xMin":-2,"xMax":7,"yMin":-5,"yMax":7,"unit":22,"tickLabels":true,"yLabel":"f(x)","quadratics":[{"a":-1,"b":6,"c":-3}],"guides":[[3,6]],"points":[{"at":[3,6],"label":"(3, 6)","labelSide":"ne"}]}
{{< /apfigure >}}

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
$[-4,\infty)$
$[-4,0)\cup(0,\infty)$
$[-4,2)\cup(2,\infty)$
$(-\infty,-4]\cup(0,\infty)$
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
$g(x)=\tfrac{4}{x}$ and $h(x)=3-\sqrt{4+x^2}$
$g(x)=4+x^2$ and $h(x)=\tfrac{4}{3-x}$
$g(x)=\sqrt{4+x^2}$ and $h(x)=\tfrac{4}{3-x}$
$g(x)=3-\sqrt{x}$ and $h(x)=\tfrac{4}{x}$
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
$(0,\infty)$
$(-\infty,1)$
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $p(x)=\tfrac{1}{\sqrt{x}}$ and $m(x)=x^2-4$, state the domain of $p(m(x))$ in interval notation."
  answer="$(-\infty,-2)\cup(2,\infty)$"
  hint="The radicand $m(x)$ must be strictly positive, since it also sits under a fraction bar."
>}}
$[-2,2]$
$(-\infty,-2)\cup(2,\infty)$
$(-\infty,-2]\cup[2,\infty)$
$(2,\infty)$
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $f(x)=\sqrt{2-4x}$ and $g(x)=-\tfrac{3}{x}$, write the domain of $(g\circ f)(x)$ in interval notation."
  answer="$\left(-\infty,\tfrac{1}{2}\right)$"
  hint="Start from the domain of $f$, then exclude the input where $f(x)$ itself equals 0."
>}}
$(-\infty,0)\cup\left(0,\tfrac{1}{2}\right)$
$\left(\tfrac{1}{2},\infty\right)$
$\left(-\infty,\tfrac{1}{2}\right]$
$\left(-\infty,\tfrac{1}{2}\right)$
{{< /multiplechoice >}}

### Decompose a composite function into its component functions

{{< multiplechoice
  question="Write $h(x)=(x-5)^3$ as the composition $f(g(x))$ of two functions."
  answer="$f(x)=x^3$ and $g(x)=x-5$"
  hint="Let the inner function be whatever is being cubed."
>}}
$f(x)=x-5$ and $g(x)=x^3$
$f(x)=x^3$ and $g(x)=x-5$
$f(x)=x^3-5$ and $g(x)=x$
$f(x)=x-5$ and $g(x)=x^3-5$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Write $h(x)=\tfrac{4}{(x+2)^2}$ as the composition $f(g(x))$ of two functions."
  answer="$f(x)=\tfrac{4}{x}$ and $g(x)=(x+2)^2$"
  hint="Let the inner function be the expression being squared in the denominator."
>}}
$f(x)=\tfrac{4}{x}$ and $g(x)=(x-2)^2$
$f(x)=x^2$ and $g(x)=\tfrac{4}{x+2}$
$f(x)=(x+2)^2$ and $g(x)=\tfrac{4}{x}$
$f(x)=\tfrac{4}{x}$ and $g(x)=(x+2)^2$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Write $h(x)=\sqrt[3]{x-1}$ as the composition $f(g(x))$ of two functions."
  answer="$f(x)=\sqrt[3]{x}$ and $g(x)=x-1$"
  hint="Let the inner function be the expression under the cube root."
>}}
$f(x)=x^3$ and $g(x)=x-1$
$f(x)=x-1$ and $g(x)=\sqrt[3]{x}$
$f(x)=\sqrt[3]{x}$ and $g(x)=x-1$
$f(x)=\sqrt[3]{x}$ and $g(x)=1-x$
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 1.4: Composition of Functions](https://openstax.org/books/precalculus-2e/pages/1-4-composition-of-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated the two parabola graphs as accessible inline SVGs generated from their formulas, $g(x)=x^{2}-6x+8$ and $f(x)=-x^{2}+6x-3$, and merged the source's two annotated versions of them into one marked pair, since dashed crosshairs already trace the path the arrows were added to show; presented the function tables as Markdown tables; omitted the media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback, using multiple choice where the answer is interval notation, a pair of functions, or a verbal judgement, none of which can be graded as free-response math; and adapted a selection of the end-of-section exercises, each independently checked against the printed Answer Key, into the closing interactive Practice block, again using multiple choice for the same categorical cases (interval-notation domains, non-unique decompositions). One correction: where the source writes the domain restriction as "$x\ne\tfrac{2}{3}$ or $x\ne 2$" — a disjunction that excludes nothing — this page writes "and", matching both the sentence before it and the interval notation after it.</small>
