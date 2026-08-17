---
title: Graphs of Logarithmic Functions
description: >-
  Finding the domain of a logarithmic function and graphing the parent
  function $y=\log_b(x)$ and its family of transformations — shifts,
  stretches, compressions, and reflections — then reading a logarithmic
  function's equation, asymptote, domain, and range from its graph —
  adapted from OpenStax Precalculus 2e, Section 4.4.
source_section: "4.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Identify the domain of a logarithmic function
- Graph logarithmic functions
{{< /callout >}}

In *Graphs of Exponential Functions*, we saw how creating a graphical
representation of an exponential model gives us another layer of insight
for predicting future events. How do logarithmic graphs give us insight
into situations? Because every logarithmic function is the inverse function
of an exponential function, we can think of every output on a logarithmic
graph as the input for the corresponding inverse exponential equation. In
other words, logarithms give the *cause* for an *effect*.

To illustrate, suppose we invest \$2{,}500 in an account that offers an annual
interest rate of $5\%$, compounded continuously. We already know that the
balance in our account for any year $t$ can be found with the equation
$A=2{,}500e^{0.05t}$.

But what if we wanted to know the year for any balance? We would need to
create a corresponding new function by interchanging the input and the
output; thus we would need to create a logarithmic model for this
situation. By graphing the model, we can see the output (year) for any
input (account balance). For instance, what if we wanted to know how many
years it would take for our initial investment to double? The graph below
shows this point on the logarithmic graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A graph titled 'Logarithmic model showing years as a function of the account balance.' The horizontal axis, account balance, runs from 0 to 6,500 dollars; the vertical axis, years, runs from 0 to 20. The curve starts at (2,500, 0) and rises, passing near (5,000, 14) — where the balance reaches $5,000 in about 14 years — and continues upward past $6,000.","xMin":0,"xMax":6500,"yMin":0,"yMax":20,"xUnit":0.13,"yUnit":15,"tickLabels":true,"xTickStep":1000,"yTickStep":5,"xLabel":"Account balance","yLabel":"Years","curves":[{"kind":"log","b":2.718281828459045,"a":20,"h":0,"k":-156.48,"from":2500,"to":6300,"arrows":"end"}],"points":[{"at":[5000,13.86],"label":"Balance reaches $5,000 near year 14","labelSide":"nw"}]}
{{< /apfigure >}}

In this section we will discuss the values for which a logarithmic function
is defined, and then turn our attention to graphing the family of
logarithmic functions.

## Finding the domain of a logarithmic function

Before working with graphs, we will take a look at the domain (the set of
input values) for which the logarithmic function is defined.

Recall that the exponential function is defined as $y=b^x$ for any real
number $x$ and constant $b>0$, $b\ne1$, where

- The domain of $y$ is $(-\infty,\infty)$.
- The range of $y$ is $(0,\infty)$.

In *Logarithmic Functions*, we learned that the logarithmic function
$y=\log_b(x)$ is the inverse of the exponential function $y=b^x$. So, as
inverse functions:

- The domain of $y=\log_b(x)$ is the range of $y=b^x$: $(0,\infty)$.
- The range of $y=\log_b(x)$ is the domain of $y=b^x$: $(-\infty,\infty)$.

Transformations of the parent function $y=\log_b(x)$ behave similarly to
those of other functions. Just as with other parent functions, we can
apply the four types of transformations — shifts, stretches, compressions,
and reflections.

In *Graphs of Exponential Functions* we saw that certain transformations
can change the *range* of $y=b^x$. Similarly, applying transformations to
the parent function $y=\log_b(x)$ can change the *domain*. When finding the
domain of a logarithmic function, therefore, it is important to remember
that the domain consists *only of positive real numbers*. That is, the
argument of the logarithmic function must be greater than zero.

For example, consider $f(x)=\log_4(2x-3)$. This function is defined for any
values of $x$ such that the argument, in this case $2x-3$, is greater than
zero. To find the domain, we set up an inequality and solve for $x$:

$$
\begin{array}{lrcl}
\text{Show the argument greater than zero.} & 2x-3 &>& 0 \\[4pt]
\text{Add 3.} & 2x &>& 3 \\[4pt]
\text{Divide by 2.} & x &>& 1.5
\end{array}
$$

In interval notation, the domain of $f(x)=\log_4(2x-3)$ is $(1.5,\infty)$.

{{< callout type="info" >}}
  **How to:** given a logarithmic function, identify the domain.

  1. Set up an inequality showing the argument greater than zero.
  2. Solve for $x$.
  3. Write the domain in interval notation.
{{< /callout >}}

**Example.** What is the domain of $f(x)=\log_2(x+3)$?

**Solution.** The logarithmic function is defined only when the input is
positive, so this function is defined when $x+3>0$. Solving this
inequality,

$$
\begin{array}{lrcl}
\text{The input must be positive.} & x+3 &>& 0 \\[4pt]
\text{Subtract 3.} & x &>& -3
\end{array}
$$

The domain of $f(x)=\log_2(x+3)$ is $(-3,\infty)$.

{{< fillin
  question="What is the domain of $f(x)=\log_5(x-2)+1$? Write your answer in interval notation."
  answer="(2,\infty)"
  answerDisplay="$(2,\infty)$"
  hint="Set the argument $x-2$ greater than zero and solve for $x$."
>}}

**Example.** What is the domain of $f(x)=\log(5-2x)$?

**Solution.** The logarithmic function is defined only when the input is
positive, so this function is defined when $5-2x>0$. Solving this
inequality,

$$
\begin{array}{lrcl}
\text{The input must be positive.} & 5-2x &>& 0 \\[4pt]
\text{Subtract 5.} & -2x &>& -5 \\[4pt]
\text{Divide by }-2\text{ and switch the inequality.} & x &<& \tfrac{5}{2}
\end{array}
$$

The domain of $f(x)=\log(5-2x)$ is $\left(-\infty,\tfrac{5}{2}\right)$.

{{< fillin
  question="What is the domain of $f(x)=\log(x-5)+2$? Write your answer in interval notation."
  answer="(5,\infty)"
  answerDisplay="$(5,\infty)$"
  hint="Set the argument $x-5$ greater than zero and solve for $x$."
>}}

## Graphing logarithmic functions

Now that we have a feel for the set of values for which a logarithmic
function is defined, we move on to graphing logarithmic functions. The
family of logarithmic functions includes the parent function
$y=\log_b(x)$ along with all its transformations: shifts, stretches,
compressions, and reflections.

We begin with the parent function $y=\log_b(x)$. Because every logarithmic
function of this form is the inverse of an exponential function with the
form $y=b^x$, their graphs will be reflections of each other across the
line $y=x$. To illustrate this, we can observe the relationship between the
input and output values of $y=2^x$ and its equivalent $x=\log_2(y)$ in the
table below.

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $2^x=y$ | $\tfrac{1}{8}$ | $\tfrac{1}{4}$ | $\tfrac{1}{2}$ | $1$ | $2$ | $4$ | $8$ |
| $\log_2(y)=x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |

Using the inputs and outputs from the table above, we can build another
table to observe the relationship between points on the graphs of the
inverse functions $f(x)=2^x$ and $g(x)=\log_2(x)$.

| $f(x)=2^x$ | $\left(-3,\tfrac{1}{8}\right)$ | $\left(-2,\tfrac{1}{4}\right)$ | $\left(-1,\tfrac{1}{2}\right)$ | $(0,1)$ | $(1,2)$ | $(2,4)$ | $(3,8)$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $g(x)=\log_2(x)$ | $\left(\tfrac{1}{8},-3\right)$ | $\left(\tfrac{1}{4},-2\right)$ | $\left(\tfrac{1}{2},-1\right)$ | $(1,0)$ | $(2,1)$ | $(4,2)$ | $(8,3)$ |

As we'd expect, the $x$- and $y$-coordinates are reversed for the inverse
functions. The graph below shows the graph of $f$ and $g$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graphs of f(x) = 2 to the x and g(x) = log base 2 of x, which are reflections of each other across the dashed line y = x. f passes through (0, 1) and (1, 2); g passes through (1, 0) and (2, 1).","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"tickLabels":true,"curves":[{"kind":"exp","b":2},{"kind":"log","b":2}],"lines":[{"through":[[-5,-5],[5,5]],"dashed":true,"arrows":true}],"texts":[{"at":[-3.7,1.6],"text":"f(x) = 2ˣ"},{"at":[1.5,-3],"text":"g(x) = log₂(x)"},{"at":[3.3,4.5],"text":"y = x"}]}
{{< /apfigure >}}

Observe the following from the graph:

- $f(x)=2^x$ has a $y$-intercept at $(0,1)$ and $g(x)=\log_2(x)$ has an
  $x$-intercept at $(1,0)$.
- The domain of $f(x)=2^x$, $(-\infty,\infty)$, is the same as the range of
  $g(x)=\log_2(x)$.
- The range of $f(x)=2^x$, $(0,\infty)$, is the same as the domain of
  $g(x)=\log_2(x)$.

{{< callout type="info" >}}
  **Characteristics of the graph of the parent function, $f(x)=\log_b(x)$.**
  For any real number $x$ and constant $b>0$, $b\ne1$, we can see the
  following characteristics in the graph of $f(x)=\log_b(x)$:

  - one-to-one function
  - vertical asymptote: $x=0$
  - domain: $(0,\infty)$
  - range: $(-\infty,\infty)$
  - $x$-intercept: $(1,0)$ and key point $(b,1)$
  - $y$-intercept: none
  - increasing if $b>1$
  - decreasing if $0<b<1$

  See the panels below.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (a): the graph of the parent function f(x) = log base b of x for a base b greater than 1, increasing, with vertical asymptote x = 0, x-intercept (1, 0), and key point (b, 1).","xMin":-1,"xMax":7,"yMin":-3,"yMax":3,"tickLabels":false,"curves":[{"kind":"log","b":3}],"lines":[{"x":0,"dashed":true,"arrows":false}],"points":[{"at":[1,0],"label":"(1, 0)"},{"at":[3,1],"label":"(b, 1)"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (b): the graph of the parent function f(x) = log base b of x for a base b between 0 and 1, decreasing, with vertical asymptote x = 0, x-intercept (1, 0), and key point (b, 1).","xMin":-1,"xMax":7,"yMin":-3,"yMax":3,"tickLabels":false,"curves":[{"kind":"log","b":0.4}],"lines":[{"x":0,"dashed":true,"arrows":false}],"points":[{"at":[1,0],"label":"(1, 0)"},{"at":[0.4,1],"label":"(b, 1)"}]}
{{< /apfigure >}}

The graph below shows how changing the base $b$ in $f(x)=\log_b(x)$ can
affect the graphs. Observe that the graphs compress vertically as the
value of the base increases. (*Note:* recall that the function $\ln(x)$
has base $e\approx2.718$.)

{{< apfigure kind="graph" >}}
{"ariaLabel":"Three logarithmic curves sharing the point (1, 0): y = log base 2 of x (steepest), y = ln(x), and y = log(x) (flattest), each with vertical asymptote x = 0. The curves compress vertically as the base increases.","xMin":0,"xMax":11,"yMin":-4,"yMax":4,"tickLabels":true,"curves":[{"kind":"log","b":2,"to":8.5},{"kind":"log","b":2.718281828459045,"to":8.5},{"kind":"log","b":10,"to":8.5}],"lines":[{"x":0,"dashed":true,"arrows":false}],"texts":[{"at":[9,3.09],"text":"log₂(x)"},{"at":[9,2.14],"text":"ln(x)"},{"at":[9,0.93],"text":"log(x)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **How to:** given a logarithmic function with the form $f(x)=\log_b(x)$,
  graph the function.

  1. Draw and label the vertical asymptote, $x=0$.
  2. Plot the $x$-intercept, $(1,0)$.
  3. Plot the key point $(b,1)$.
  4. Draw a smooth curve through the points.
  5. State the domain, $(0,\infty)$, the range, $(-\infty,\infty)$, and the
     vertical asymptote, $x=0$.
{{< /callout >}}

**Example.** Graph $f(x)=\log_5(x)$. State the domain, range, and
asymptote.

**Solution.** Before graphing, identify the behavior and key points for the
graph.

- Since $b=5$ is greater than one, we know the function is increasing. The
  left tail of the graph will approach the vertical asymptote $x=0$, and
  the right tail will increase slowly without bound.
- The $x$-intercept is $(1,0)$.
- The key point $(5,1)$ is on the graph.
- We draw and label the asymptote, plot and label the points, and draw a
  smooth curve through the points (see the graph below).

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = log base 5 of x, increasing, with vertical asymptote x = 0, x-intercept (1, 0), and key point (5, 1).","xMin":-2,"xMax":8,"yMin":-4,"yMax":4,"tickLabels":true,"curves":[{"kind":"log","b":5}],"lines":[{"x":0,"dashed":true,"arrows":false}],"points":[{"at":[1,0],"label":"(1, 0)"},{"at":[5,1],"label":"(5, 1)"}]}
{{< /apfigure >}}

The domain is $(0,\infty)$, the range is $(-\infty,\infty)$, and the
vertical asymptote is $x=0$.

{{< fillin
  question="Graph $f(x)=\log_{1/5}(x)$. What is the domain? Write your answer in interval notation."
  answer="(0,\infty)"
  answerDisplay="$(0,\infty)$"
  hint="Every logarithmic function $\log_b(x)$, regardless of the base, has the same domain."
>}}

## Graphing transformations of logarithmic functions

As we mentioned in the beginning of the section, transformations of
logarithmic graphs behave similarly to those of other parent functions. We
can shift, stretch, compress, and reflect the parent function
$y=\log_b(x)$ without loss of shape.

## Graphing a horizontal shift of $f(x) = \log_b(x)$

When a constant $c$ is added to the input of the parent function
$f(x)=\log_b(x)$, the result is a **horizontal shift** $c$ units in the
**opposite** direction of the sign on $c$. To visualize horizontal shifts,
we can observe the general graph of the parent function $f(x)=\log_b(x)$
for $c>0$ alongside the shift left, $g(x)=\log_b(x+c)$, and the shift
right, $h(x)=\log_b(x-c)$. See the panels below, drawn with $b=2$ and
$c=2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (a), shift left. The parent function f(x) = log base 2 of x with asymptote x = 0, alongside g(x) = log base 2 of (x + 2), shifted 2 units left, with asymptote x = -2. The asymptote moves to x = -2, the domain becomes (-2, infinity), and the range stays (-infinity, infinity).","xMin":-5,"xMax":6,"yMin":-4,"yMax":4,"tickLabels":true,"curves":[{"kind":"log","b":2},{"kind":"log","b":2,"h":-2}],"lines":[{"x":0,"dashed":true,"arrows":false},{"x":-2,"dashed":true,"arrows":false}],"points":[{"at":[1,0],"label":"(1, 0)"},{"at":[2,1],"label":"(2, 1)"},{"at":[-1,0],"label":"(-1, 0)"},{"at":[0,1],"label":"(0, 1)"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (b), shift right. The parent function f(x) = log base 2 of x with asymptote x = 0, alongside h(x) = log base 2 of (x - 2), shifted 2 units right, with asymptote x = 2. The asymptote moves to x = 2, the domain becomes (2, infinity), and the range stays (-infinity, infinity).","xMin":-2,"xMax":9,"yMin":-4,"yMax":4,"tickLabels":true,"curves":[{"kind":"log","b":2},{"kind":"log","b":2,"h":2}],"lines":[{"x":0,"dashed":true,"arrows":false},{"x":2,"dashed":true,"arrows":false}],"points":[{"at":[1,0],"label":"(1, 0)"},{"at":[2,1],"label":"(2, 1)"},{"at":[3,0],"label":"(3, 0)"},{"at":[4,1],"label":"(4, 1)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Horizontal shifts of the parent function $f(x)=\log_b(x)$.** For any
  constant $c$, the function $f(x)=\log_b(x+c)$

  - shifts the parent function $y=\log_b(x)$ left $c$ units if $c>0$.
  - shifts the parent function $y=\log_b(x)$ right $c$ units if $c<0$.
  - has the vertical asymptote $x=-c$.
  - has domain $(-c,\infty)$.
  - has range $(-\infty,\infty)$.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a logarithmic function with the form
  $f(x)=\log_b(x+c)$, graph the translation.

  1. Identify the horizontal shift:
     - If $c>0$, shift the graph of $f(x)=\log_b(x)$ left $c$ units.
     - If $c<0$, shift the graph of $f(x)=\log_b(x)$ right $c$ units.
  2. Draw the vertical asymptote $x=-c$.
  3. Identify three key points from the parent function. Find new
     coordinates for the shifted functions by subtracting $c$ from the $x$
     coordinate.
  4. Label the three points.
  5. The domain is $(-c,\infty)$, the range is $(-\infty,\infty)$, and the
     vertical asymptote is $x=-c$.
{{< /callout >}}

**Example.** Sketch the horizontal shift $f(x)=\log_3(x-2)$ alongside its
parent function. Include the key points and asymptotes on the graph. State
the domain, range, and asymptote.

**Solution.** Since the function is $f(x)=\log_3(x-2)$, we notice
$x+(-2)=x-2$.

Thus $c=-2$, so $c<0$. This means we will shift the function
$f(x)=\log_3(x)$ right 2 units.

The vertical asymptote is $x=-(-2)$ or $x=2$.

Consider the three key points from the parent function,
$\left(\tfrac{1}{3},-1\right)$, $(1,0)$, and $(3,1)$.

The new coordinates are found by adding 2 to the $x$ coordinates.

Label the points $\left(\tfrac{7}{3},-1\right)$, $(3,0)$, and $(5,1)$.

The domain is $(2,\infty)$, the range is $(-\infty,\infty)$, and the
vertical asymptote is $x=2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parent function y = log base 3 of x with asymptote x = 0, passing through (1/3, -1), (1, 0), and (3, 1), alongside its horizontal shift f(x) = log base 3 of (x - 2), shifted 2 units right, with asymptote x = 2, passing through (7/3, -1), (3, 0), and (5, 1).","xMin":-1,"xMax":9,"yMin":-4,"yMax":4,"unit":26,"tickLabels":true,"curves":[{"kind":"log","b":3},{"kind":"log","b":3,"h":2}],"lines":[{"x":0,"dashed":true,"arrows":false},{"x":2,"dashed":true,"arrows":false}],"points":[{"at":[0.333333,-1]},{"at":[1,0],"label":"(1, 0)"},{"at":[3,1],"label":"(3, 1)","labelSide":"n"},{"at":[2.333333,-1]},{"at":[3,0],"label":"(3, 0)","labelSide":"s","labelNudge":[8,2]},{"at":[5,1],"label":"(5, 1)"}]}
{{< /apfigure >}}

{{< fillin
  question="Sketch a graph of $f(x)=\log_3(x+4)$ alongside its parent function. What is the vertical asymptote?"
  answer="x=-4"
  answerDisplay="$x=-4$"
  hint="For $f(x)=\log_b(x+c)$, the vertical asymptote is $x=-c$."
>}}

{{< fillin
  question="What is the domain of that same function, $f(x)=\log_3(x+4)$? Write your answer in interval notation."
  answer="(-4,\infty)"
  answerDisplay="$(-4,\infty)$"
  hint="The domain begins immediately to the right of the vertical asymptote."
>}}

## Graphing a vertical shift of $f(x) = \log_b(x)$

When a constant $d$ is added to the parent function $f(x)=\log_b(x)$, the
result is a **vertical shift** $d$ units in the direction of the sign on
$d$. To visualize vertical shifts, we can observe the general graph of the
parent function $f(x)=\log_b(x)$ alongside the shift up,
$g(x)=\log_b(x)+d$, and the shift down, $h(x)=\log_b(x)-d$. See the panels
below, drawn with $b=2$ and $d=2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (a), shift up. The parent function f(x) = log base 2 of x with asymptote x = 0, alongside g(x) = log base 2 of x, plus 2, shifted 2 units up. The asymptote stays x = 0; the domain and range are unchanged.","xMin":-1,"xMax":9,"yMin":-4,"yMax":4,"unit":24,"tickLabels":false,"curves":[{"kind":"log","b":2},{"kind":"log","b":2,"k":2}],"lines":[{"x":0,"dashed":true,"arrows":false}],"points":[{"at":[1,0],"label":"(1, 0)","labelSide":"se"},{"at":[2,1],"label":"(2, 1)"},{"at":[0.25,0],"label":"(0.25, 0)","labelSide":"sw"},{"at":[0.5,1],"label":"(0.5, 1)","labelSide":"w"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (b), shift down. The parent function f(x) = log base 2 of x with asymptote x = 0, alongside h(x) = log base 2 of x, minus 2, shifted 2 units down. The asymptote stays x = 0; the domain and range are unchanged.","xMin":-1,"xMax":9,"yMin":-4,"yMax":4,"tickLabels":true,"curves":[{"kind":"log","b":2},{"kind":"log","b":2,"k":-2}],"lines":[{"x":0,"dashed":true,"arrows":false}],"points":[{"at":[1,0],"label":"(1, 0)"},{"at":[2,1],"label":"(2, 1)"},{"at":[4,0],"label":"(4, 0)"},{"at":[8,1],"label":"(8, 1)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Vertical shifts of the parent function $y=\log_b(x)$.** For any
  constant $d$, the function $f(x)=\log_b(x)+d$

  - shifts the parent function $y=\log_b(x)$ up $d$ units if $d>0$.
  - shifts the parent function $y=\log_b(x)$ down $d$ units if $d<0$.
  - has the vertical asymptote $x=0$.
  - has domain $(0,\infty)$.
  - has range $(-\infty,\infty)$.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a logarithmic function with the form
  $f(x)=\log_b(x)+d$, graph the translation.

  1. Identify the vertical shift:
     - If $d>0$, shift the graph of $f(x)=\log_b(x)$ up $d$ units.
     - If $d<0$, shift the graph of $f(x)=\log_b(x)$ down $d$ units.
  2. Draw the vertical asymptote $x=0$.
  3. Identify three key points from the parent function. Find new
     coordinates for the shifted functions by adding $d$ to the $y$
     coordinate.
  4. Label the three points.
  5. The domain is $(0,\infty)$, the range is $(-\infty,\infty)$, and the
     vertical asymptote is $x=0$.
{{< /callout >}}

**Example.** Sketch a graph of $f(x)=\log_3(x)-2$ alongside its parent
function. Include the key points and asymptote on the graph. State the
domain, range, and asymptote.

**Solution.** Since the function is $f(x)=\log_3(x)-2$, we will notice
$d=-2$. Thus $d<0$.

This means we will shift the function $f(x)=\log_3(x)$ down 2 units.

The vertical asymptote is $x=0$.

Consider the three key points from the parent function,
$\left(\tfrac{1}{3},-1\right)$, $(1,0)$, and $(3,1)$.

The new coordinates are found by subtracting 2 from the $y$ coordinates.

Label the points $\left(\tfrac{1}{3},-3\right)$, $(1,-2)$, and $(3,-1)$.

The domain is $(0,\infty)$, the range is $(-\infty,\infty)$, and the
vertical asymptote is $x=0$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parent function y = log base 3 of x with asymptote x = 0, passing through (1/3, -1), (1, 0), and (3, 1), alongside its vertical shift f(x) = log base 3 of x, minus 2, shifted 2 units down. The shifted curve passes through (1/3, -3), (1, -2), and (3, -1).","xMin":-1,"xMax":5,"yMin":-4,"yMax":2,"unit":24,"tickLabels":true,"curves":[{"kind":"log","b":3},{"kind":"log","b":3,"k":-2}],"lines":[{"x":0,"dashed":true,"arrows":false}],"points":[{"at":[0.333333,-1]},{"at":[1,0],"label":"(1, 0)"},{"at":[3,1],"label":"(3, 1)"},{"at":[0.333333,-3],"label":"(1/3, -3)"},{"at":[1,-2],"label":"(1, -2)"},{"at":[3,-1],"label":"(3, -1)"}]}
{{< /apfigure >}}

{{< fillin
  question="What is the domain of $f(x)=\log_2(x)+2$? Write your answer in interval notation."
  answer="(0,\infty)"
  answerDisplay="$(0,\infty)$"
  hint="A vertical shift moves the graph up or down but never changes which inputs are allowed."
>}}

## Graphing stretches and compressions of $f(x) = \log_b(x)$

When the parent function $f(x)=\log_b(x)$ is multiplied by a constant
$a>0$, the result is a **vertical stretch** or **compression** of the
original graph. To visualize stretches and compressions, we set $a>1$ and
observe the general graph of the parent function $f(x)=\log_b(x)$
alongside the vertical stretch, $g(x)=a\log_b(x)$, and the vertical
compression, $h(x)=\tfrac{1}{a}\log_b(x)$. See the panels below, drawn
with $b=2$ and $a=2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (a), vertical stretch. The parent function f(x) = log base 2 of x, alongside g(x) = 2 log base 2 of x, stretched vertically by a factor of 2. The asymptote stays x = 0, the x-intercept stays (1, 0), and the domain and range are unchanged.","xMin":-1,"xMax":7,"yMin":-4,"yMax":4,"unit":24,"tickLabels":false,"curves":[{"kind":"log","b":2},{"kind":"log","b":2,"a":2}],"lines":[{"x":0,"dashed":true,"arrows":false}],"points":[{"at":[1,0],"label":"(1, 0)","labelSide":"se"},{"at":[2,1],"label":"(2, 1)"},{"at":[1.414,1],"label":"(√2, 1)"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (b), vertical compression. The parent function f(x) = log base 2 of x, alongside h(x) = one-half log base 2 of x, compressed vertically by a factor of 2. The asymptote stays x = 0, the x-intercept stays (1, 0), and the domain and range are unchanged.","xMin":-1,"xMax":9,"yMin":-4,"yMax":4,"tickLabels":true,"curves":[{"kind":"log","b":2},{"kind":"log","b":2,"a":0.5}],"lines":[{"x":0,"dashed":true,"arrows":false}],"points":[{"at":[1,0],"label":"(1, 0)"},{"at":[2,1],"label":"(2, 1)"},{"at":[4,1],"label":"(4, 1)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Vertical stretches and compressions of the parent function
  $y=\log_b(x)$.** For any constant $a>1$, the function $f(x)=a\log_b(x)$

  - stretches the parent function $y=\log_b(x)$ vertically by a factor of
    $a$ if $a>1$.
  - compresses the parent function $y=\log_b(x)$ vertically by a factor of
    $a$ if $0<a<1$.
  - has the vertical asymptote $x=0$.
  - has the $x$-intercept $(1,0)$.
  - has domain $(0,\infty)$.
  - has range $(-\infty,\infty)$.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a logarithmic function with the form
  $f(x)=a\log_b(x)$, $a>0$, graph the translation.

  1. Identify the vertical stretch or compression:
     - If $|a|>1$, the graph of $f(x)=\log_b(x)$ is stretched by a factor
       of $a$ units.
     - If $|a|<1$, the graph of $f(x)=\log_b(x)$ is compressed by a factor
       of $a$ units.
  2. Draw the vertical asymptote $x=0$.
  3. Identify three key points from the parent function. Find new
     coordinates for the shifted functions by multiplying the $y$
     coordinates by $a$.
  4. Label the three points.
  5. The domain is $(0,\infty)$, the range is $(-\infty,\infty)$, and the
     vertical asymptote is $x=0$.
{{< /callout >}}

**Example.** Sketch a graph of $f(x)=2\log_4(x)$ alongside its parent
function. Include the key points and asymptote on the graph. State the
domain, range, and asymptote.

**Solution.** Since the function is $f(x)=2\log_4(x)$, we will notice
$a=2$.

This means we will stretch the function $f(x)=\log_4(x)$ by a factor of 2.

The vertical asymptote is $x=0$.

Consider the three key points from the parent function,
$\left(\tfrac{1}{4},-1\right)$, $(1,0)$, and $(4,1)$.

The new coordinates are found by multiplying the $y$ coordinates by 2.

Label the points $\left(\tfrac{1}{4},-2\right)$, $(1,0)$, and $(4,2)$.

The domain is $(0,\infty)$, the range is $(-\infty,\infty)$, and the
vertical asymptote is $x=0$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parent function y = log base 4 of x, alongside its vertical stretch f(x) = 2 log base 4 of x. The stretched curve passes through (1/4, -2), (1, 0), and (4, 2).","xMin":-1,"xMax":6,"yMin":-3,"yMax":3,"tickLabels":true,"curves":[{"kind":"log","b":4},{"kind":"log","b":4,"a":2}],"lines":[{"x":0,"dashed":true,"arrows":false}],"points":[{"at":[0.25,-1],"label":"(1/4, -1)"},{"at":[1,0],"label":"(1, 0)"},{"at":[4,1],"label":"(4, 1)"},{"at":[0.25,-2],"label":"(1/4, -2)"},{"at":[4,2],"label":"(4, 2)"}]}
{{< /apfigure >}}

{{< fillin
  question="Sketch a graph of $f(x)=\tfrac{1}{2}\log_4(x)$ alongside its parent function. Besides the x-intercept, the parent function has key point $(4,1)$. What is the corresponding key point on the graph of $f$? Enter your answer as an ordered pair."
  answer="(4,1/2)"
  answerDisplay="$\left(4,\tfrac12\right)$"
  hint="A vertical compression by $\tfrac12$ multiplies every $y$-coordinate of the parent function by $\tfrac12$."
>}}

**Example.** Sketch a graph of $f(x)=5\log(x+2)$. State the domain, range,
and asymptote.

**Solution.** Remember: what happens inside parentheses happens first.
First, we move the graph left 2 units, then stretch the function
vertically by a factor of 5, as in the graph below. The vertical asymptote
will be shifted to $x=-2$. The $x$-intercept will be $(-1,0)$. The domain
will be $(-2,\infty)$. Two points will help give the shape of the graph:
$(-1,0)$ and $(8,5)$. We chose $x=8$ as the $x$-coordinate of one point to
graph because when $x=8$, $x+2=10$, the base of the common logarithm.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Three curves: the common-log parent y = log(x); its horizontal shift y = log(x + 2), 2 units left; and the combined transformation f(x) = 5 log(x + 2), stretched vertically by 5. The shifted curves share vertical asymptote x = -2. The stretched curve passes through (-1, 0) and (8, 5).","xMin":-3,"xMax":9,"yMin":-5,"yMax":5,"tickLabels":true,"curves":[{"kind":"log","b":10},{"kind":"log","b":10,"h":-2},{"kind":"log","b":10,"h":-2,"a":5}],"lines":[{"x":-2,"dashed":true,"arrows":false}],"points":[{"at":[-1,0],"label":"(-1, 0)"},{"at":[8,5],"label":"(8, 5)"}],"texts":[{"at":[1.8,4.7],"text":"y = 5log(x + 2)"},{"at":[3,1.3],"text":"y = log(x + 2)"},{"at":[5.5,-2],"text":"y = log(x)"}]}
{{< /apfigure >}}

The domain is $(-2,\infty)$, the range is $(-\infty,\infty)$, and the
vertical asymptote is $x=-2$.

{{< fillin
  question="Sketch a graph of the function $f(x)=3\log(x-2)+1$. What is the vertical asymptote?"
  answer="x=2"
  answerDisplay="$x=2$"
  hint="The horizontal shift alone determines the asymptote; the stretch and vertical shift do not move it."
>}}

{{< fillin
  question="What is the domain of that same function, $f(x)=3\log(x-2)+1$? Write your answer in interval notation."
  answer="(2,\infty)"
  answerDisplay="$(2,\infty)$"
  hint="The domain begins immediately to the right of the vertical asymptote."
>}}

## Graphing reflections of $f(x) = \log_b(x)$

When the parent function $f(x)=\log_b(x)$ is multiplied by $-1$, the
result is a **reflection** about the $x$-axis. When the **input** is
multiplied by $-1$, the result is a reflection about the $y$-axis. To
visualize reflections, we restrict $b>1$, and observe the general graph of
the parent function $f(x)=\log_b(x)$ alongside the reflection about the
$x$-axis, $g(x)=-\log_b(x)$, and the reflection about the $y$-axis,
$h(x)=\log_b(-x)$. Both are drawn below with $b=2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (a), reflection about the x-axis. The parent function f(x) = log base 2 of x, alongside g(x) = negative log base 2 of x. Both share the x-intercept (1, 0) and asymptote x = 0; the reflected curve is decreasing.","xMin":-1,"xMax":5,"yMin":-3,"yMax":3,"unit":24,"tickLabels":false,"curves":[{"kind":"log","b":2},{"kind":"log","b":2,"a":-1}],"lines":[{"x":0,"dashed":true,"arrows":false}],"points":[{"at":[1,0]},{"at":[2,1],"label":"(2, 1)"},{"at":[0.5,1],"label":"(1/2, 1)","labelSide":"w"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel": "Panel (b), reflection about the y-axis. The parent function f(x) = log base 2 of x for x greater than 0, alongside h(x) = log base 2 of negative x for x less than 0. The reflected curve has x-intercept (-1, 0) and the same asymptote x = 0; it is decreasing as x runs from negative infinity to zero.", "xMin": -9, "xMax": 9, "yMin": -4, "yMax": 4, "tickLabels": false, "curves": [{"kind": "log", "b": 2}, {"kind": "log", "b": 2, "reflect": true}], "lines": [{"x": 0, "dashed": true, "arrows": false}], "points": [{"at": [1, 0], "label": "(1, 0)"}, {"at": [2, 1], "label": "(2, 1)"}, {"at": [-1, 0]}, {"at": [-2, 1], "label": "(-2, 1)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Reflections of the parent function $y=\log_b(x)$.** The function
  $f(x)=-\log_b(x)$

  - reflects the parent function $y=\log_b(x)$ about the $x$-axis.
  - has domain $(0,\infty)$, range $(-\infty,\infty)$, and vertical
    asymptote $x=0$, which are unchanged from the parent function.

  The function $f(x)=\log_b(-x)$

  - reflects the parent function $y=\log_b(x)$ about the $y$-axis.
  - has domain $(-\infty,0)$.
  - has range $(-\infty,\infty)$, and vertical asymptote $x=0$, which are
    unchanged from the parent function.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a logarithmic function with the parent function
  $f(x)=\log_b(x)$, graph a reflection about the $x$-axis.

  1. Draw the vertical asymptote, $x=0$.
  2. Plot the $x$-intercept, $(1,0)$.
  3. Reflect the graph of the parent function $f(x)=\log_b(x)$ about the
     $x$-axis.
  4. Draw a smooth curve through the points.
  5. State the domain, $(0,\infty)$, the range, $(-\infty,\infty)$, and the
     vertical asymptote $x=0$.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a logarithmic function with the parent function
  $f(x)=\log_b(x)$, graph a reflection about the $y$-axis.

  1. Draw the vertical asymptote, $x=0$.
  2. Plot the $x$-intercept, $(-1,0)$.
  3. Reflect the graph of the parent function $f(x)=\log_b(x)$ about the
     $y$-axis.
  4. Draw a smooth curve through the points.
  5. State the domain, $(-\infty,0)$, the range, $(-\infty,\infty)$, and
     the vertical asymptote $x=0$.
{{< /callout >}}

**Example.** Sketch a graph of $f(x)=\log(-x)$ alongside its parent
function. Include the key points and asymptote on the graph. State the
domain, range, and asymptote.

**Solution.** Before graphing $f(x)=\log(-x)$, identify the behavior and
key points for the graph.

- Since $b=10$ is greater than one, we know that the parent function is
  increasing. Since the **input** value is multiplied by $-1$, $f$ is a
  reflection of the parent graph about the $y$-axis. Thus, $f(x)=\log(-x)$
  will be decreasing as $x$ moves from negative infinity to zero, and the
  right tail of the graph will approach the vertical asymptote $x=0$.
- The $x$-intercept is $(-1,0)$.
- We draw and label the asymptote, plot and label the points, and draw a
  smooth curve through the points.

{{< apfigure kind="graph" >}}
{"ariaLabel": "The common-log parent function y = log(x) for x greater than 0, with points (1, 0) and (10, 1), alongside its reflection f(x) = log(negative x) for x less than 0, with points (-1, 0) and (-10, 1). Both share the vertical asymptote x = 0.", "xMin": -13, "xMax": 13, "yMin": -2, "yMax": 2, "tickLabels": true, "xTickStep": 2, "curves": [{"kind": "log", "b": 10}, {"kind": "log", "b": 10, "reflect": true}], "lines": [{"x": 0, "dashed": true, "arrows": false}], "points": [{"at": [1, 0], "label": "(1, 0)"}, {"at": [10, 1], "label": "(10, 1)"}, {"at": [-1, 0], "label": "(-1, 0)"}, {"at": [-10, 1], "label": "(-10, 1)"}]}
{{< /apfigure >}}

The domain is $(-\infty,0)$, the range is $(-\infty,\infty)$, and the
vertical asymptote is $x=0$.

{{< fillin
  question="Graph $f(x)=-\log(-x)$. What is the domain? Write your answer in interval notation."
  answer="(-\infty,0)"
  answerDisplay="$(-\infty,0)$"
  hint="The input is multiplied by $-1$, so only negative inputs keep the argument $-x$ positive."
>}}

{{< callout type="info" >}}
  **How to:** given a logarithmic equation, use a graphing calculator to
  approximate solutions.

  1. Press **[Y=]**. Enter the given logarithm equation or equations as
     **Y1=** and, if needed, **Y2=**.
  2. Press **[GRAPH]** to observe the graphs of the curves and use
     **[WINDOW]** to find an appropriate view of the graphs, including
     their point(s) of intersection.
  3. To find the value of $x$, we compute the point of intersection. Press
     **[2ND]** then **[CALC]**. Select "intersect" and press **[ENTER]**
     three times. The point of intersection gives the value of $x$ for
     the point(s) of intersection.
{{< /callout >}}

**Example.** Solve $4\ln(x)+1=-2\ln(x-1)$ graphically. Round to the
nearest thousandth.

**Solution.** Press **[Y=]** and enter $4\ln(x)+1$ next to **Y1=**. Then
enter $-2\ln(x-1)$ next to **Y2=**. For a window, use the values 0 to 5 for
$x$ and $-10$ to $10$ for $y$. Press **[GRAPH]**. The graphs should
intersect somewhere a little to right of $x=1$.

For a better approximation, press **[2ND]** then **[CALC]**. Select
**[5: intersect]** and press **[ENTER]** three times. The $x$-coordinate of
the point of intersection is displayed as 1.3385297. (Your answer may be
different if you use a different window or use a different value for
**Guess?**.) So, to the nearest thousandth, $x\approx1.339$.

{{< fillin
  question="Solve $5\log(x+2)=4-\log(x)$ graphically. Round to the nearest thousandth."
  answer="3.049"
  answerForm="decimal"
  answerDisplay="$x\approx3.049$"
  hint="Graph $Y_1=5\log(x+2)$ and $Y_2=4-\log(x)$, and find their point of intersection."
>}}

## Summarizing translations of the logarithmic function

Now that we have worked with each type of translation for the logarithmic
function, we can summarize each in the table below to arrive at the
general equation for translating logarithmic functions.

| Transformation | Form |
| :--- | :--- |
| Shift horizontally $c$ units to the left, vertically $d$ units up | $y=\log_b(x+c)+d$ |
| Stretch if $\lvert a\rvert>1$; compression if $\lvert a\rvert<1$ | $y=a\log_b(x)$ |
| Reflect about the $x$-axis | $y=-\log_b(x)$ |
| Reflect about the $y$-axis | $y=\log_b(-x)$ |
| General equation for all translations | $y=a\log_b(x+c)+d$ |

{{< callout type="info" >}}
  **Transformations of logarithmic functions.** All transformations of the
  parent logarithmic function, $y=\log_b(x)$, have the form

  $$f(x)=a\log_b(x+c)+d$$

  where the parent function, $y=\log_b(x)$, $b>1$, is

  - shifted vertically up $d$ units.
  - shifted horizontally to the left $c$ units.
  - stretched vertically by a factor of $|a|$ if $|a|>0$.
  - compressed vertically by a factor of $|a|$ if $0<|a|<1$.
  - reflected about the $x$-axis when $a<0$.

  For $f(x)=\log(-x)$, the graph of the parent function is reflected about
  the $y$-axis.
{{< /callout >}}

**Example.** What is the vertical asymptote of $f(x)=-2\log_3(x+4)+5$?

**Solution.** The vertical asymptote is at $x=-4$.

**Analysis.** The coefficient, the base, and the upward translation do not
affect the asymptote. The shift of the curve 4 units to the left shifts
the vertical asymptote to $x=-4$.

{{< fillin
  question="What is the vertical asymptote of $f(x)=3+\ln(x-1)$?"
  answer="x=1"
  answerDisplay="$x=1$"
  hint="Only the horizontal shift — the number added to or subtracted from $x$ inside the logarithm — moves the asymptote."
>}}

**Example.** Find a possible equation for the common logarithmic function
graphed below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A common-logarithm function graphed with vertical asymptote x = -2, decreasing, passing through (-1, 1) and (2, -1).","xMin":-4,"xMax":8,"yMin":-3,"yMax":5,"tickLabels":true,"curves":[{"kind":"log","b":10,"a":-3.321928,"h":-2,"k":1}],"lines":[{"x":-2,"dashed":true,"arrows":false}],"points":[{"at":[-1,1],"label":"(-1, 1)"},{"at":[2,-1],"label":"(2, -1)"}]}
{{< /apfigure >}}

**Solution.** This graph has a vertical asymptote at $x=-2$ and has been
vertically reflected. We do not know yet the vertical shift or the
vertical stretch. We know so far that the equation will have form:

$$f(x)=-a\log(x+2)+k$$

It appears the graph passes through the points $(-1,1)$ and $(2,-1)$.
Substituting $(-1,1)$,

$$
\begin{array}{lrcl}
\text{Substitute }(-1,1). & 1 &=& -a\log(-1+2)+k \\[4pt]
\text{Arithmetic.} & 1 &=& -a\log(1)+k \\[4pt]
\log(1)=0. & 1 &=& k
\end{array}
$$

Next, substituting in $(2,-1)$,

$$
\begin{array}{lrcl}
\text{Plug in }(2,-1). & -1 &=& -a\log(2+2)+1 \\[4pt]
\text{Arithmetic.} & -2 &=& -a\log(4) \\[4pt]
\text{Solve for }a. & a &=& \tfrac{2}{\log(4)}
\end{array}
$$

This gives us the equation $f(x)=-\tfrac{2}{\log(4)}\log(x+2)+1$.

**Analysis.** We can verify this answer by comparing the function values in
the table below with the points on the graph above.

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $f(x)$ | $1$ | $0$ | $-0.58496$ | $-1$ | $-1.3219$ | $-1.5850$ | $-1.8074$ | $-2$ | $-2.1699$ | $-2.3219$ |

{{< fillin
  question="Give the equation of the natural logarithm graphed below."
  answer="2\ln(x+3)-1"
  answerDisplay="$f(x)=2\ln(x+3)-1$"
  hint="Read the vertical asymptote to find the horizontal shift, then use a labeled point to solve for the vertical stretch."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A natural-logarithm function graphed with vertical asymptote x = -3, increasing, stretched vertically by a factor of 2 and shifted down 1 unit.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"tickLabels":true,"curves":[{"kind":"log","b":2.718281828459045,"a":2,"h":-3,"k":-1}],"lines":[{"x":-3,"dashed":true,"arrows":false}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Q&A.** *Is it possible to tell the domain and range and describe the
  end behavior of a function just by looking at the graph?*

  Yes, if we know the function is a general logarithmic function. For
  example, look at the graph above. The graph approaches $x=-3$ (or
  thereabouts) more and more closely, so $x=-3$ is, or is very close to,
  the vertical asymptote. It approaches from the right, so the domain is
  all points to the right, $\{x\mid x>-3\}$. The range, as with all general
  logarithmic functions, is all real numbers. And we can see the end
  behavior because the graph goes down as it goes left and up as it goes
  right. The end behavior is that as $x\to-3^+$, $f(x)\to-\infty$ and as
  $x\to\infty$, $f(x)\to\infty$.
{{< /callout >}}

## Key equations

| General form for the translation of the parent logarithmic function $f(x)=\log_b(x)$ | $f(x)=a\log_b(x+c)+d$ |
| :--- | :--- |

## Key concepts

- To find the domain of a logarithmic function, set up an inequality
  showing the argument greater than zero, and solve for $x$.
- The graph of the parent function $f(x)=\log_b(x)$ has an $x$-intercept
  at $(1,0)$, domain $(0,\infty)$, range $(-\infty,\infty)$, vertical
  asymptote $x=0$, and
  - if $b>1$, the function is increasing.
  - if $0<b<1$, the function is decreasing.
- The equation $f(x)=\log_b(x+c)$ shifts the parent function $y=\log_b(x)$
  horizontally
  - left $c$ units if $c>0$.
  - right $c$ units if $c<0$.
- The equation $f(x)=\log_b(x)+d$ shifts the parent function $y=\log_b(x)$
  vertically
  - up $d$ units if $d>0$.
  - down $d$ units if $d<0$.
- For any constant $a>0$, the equation $f(x)=a\log_b(x)$
  - stretches the parent function $y=\log_b(x)$ vertically by a factor of
    $a$ if $|a|>1$.
  - compresses the parent function $y=\log_b(x)$ vertically by a factor of
    $a$ if $|a|<1$.
- When the parent function $y=\log_b(x)$ is multiplied by $-1$, the result
  is a reflection about the $x$-axis. When the input is multiplied by
  $-1$, the result is a reflection about the $y$-axis.
  - The equation $f(x)=-\log_b(x)$ represents a reflection of the parent
    function about the $x$-axis.
  - The equation $f(x)=\log_b(-x)$ represents a reflection of the parent
    function about the $y$-axis.
- A graphing calculator may be used to approximate solutions to some
  logarithmic equations.
- All translations of the logarithmic function can be summarized by the
  general equation $f(x)=a\log_b(x+c)+d$.
- Given an equation with the general form $f(x)=a\log_b(x+c)+d$, we can
  identify the vertical asymptote $x=-c$ for the transformation.
- Using the general equation $f(x)=a\log_b(x+c)+d$, we can write the
  equation of a logarithmic function given its graph.

## Practice

### Identify the domain of a logarithmic function

{{< fillin
  question="Find the domain of $h(x)=\ln\left(\tfrac{1}{2}-x\right)$. Write your answer in interval notation."
  answer="(-\infty,1/2)"
  answerDisplay="$\left(-\infty,\tfrac12\right)$"
  hint="Set the argument $\tfrac12-x$ greater than zero and solve for $x$."
>}}

{{< fillin
  question="Find the vertical asymptote of $f(x)=\log(3x+1)$."
  answer="x=-1/3"
  answerDisplay="$x=-\tfrac13$"
  hint="The vertical asymptote occurs where the argument $3x+1$ equals zero."
>}}

{{< fillin
  question="Find the domain of $h(x)=\ln(4x+17)-5$. Write your answer in interval notation."
  answer="(-17/4,\infty)"
  answerDisplay="$\left(-\tfrac{17}{4},\infty\right)$"
  hint="Set the argument $4x+17$ greater than zero and solve for $x$."
>}}

### Graph logarithmic functions

The five curves below all share the point $(1,0)$ and are labeled A through
E.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Five logarithmic curves sharing the point (1, 0), labeled A through E from steepest to flattest at the right edge.","xMin":-0.4,"xMax":4,"yMin":-2,"yMax":2.2,"unit":78,"tickLabels":true,"curves":[{"kind":"log","b":2},{"kind":"log","b":2.718281828459045},{"kind":"log","b":5},{"kind":"log","b":10},{"kind":"log","b":25}],"texts":[{"at":[4.12,2.0],"text":"A"},{"at":[4.12,1.39],"text":"B"},{"at":[4.12,0.86],"text":"C"},{"at":[4.12,0.60],"text":"D"},{"at":[4.12,0.43],"text":"E"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Which labeled curve above is the graph of $f(x)=\ln(x)$?"
  answer="B"
  hint="A smaller base makes the curve rise more steeply for $x>1$; order the bases from smallest to largest."
>}}
A
B
C
D
E
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which labeled curve above is the graph of $h(x)=\log_5(x)$?"
  answer="C"
  hint="A smaller base makes the curve rise more steeply for $x>1$; order the bases from smallest to largest."
>}}
A
B
C
D
E
{{< /multiplechoice >}}

{{< fillin
  question="Write a logarithmic equation, using $y=\log_2(x)$ as the parent function, for the graph shown below."
  answer="\log_{2}(-(x-1))"
  answerDisplay="$f(x)=\log_2(-(x-1))$"
  hint="Locate the vertical asymptote to find the horizontal shift, then check whether the curve opens toward increasing or decreasing $x$ to find any reflection."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel": "A logarithmic function graphed with vertical asymptote x = 1, decreasing, passing through (0, 0) and approaching (-5, 2.6) at its upper-left arrow.", "xMin": -5, "xMax": 3, "yMin": -5, "yMax": 4, "tickLabels": true, "lines": [{"x": 1, "dashed": true, "arrows": false}], "points": [{"at": [0, 0], "label": "(0, 0)"}], "curves": [{"kind": "log", "b": 2, "h": 1, "reflect": true, "arrows": "end"}]}
{{< /apfigure >}}

---

<small>This section is adapted from [Precalculus 2e, Section 4.4: Graphs of Logarithmic Functions](https://openstax.org/books/precalculus-2e/pages/4-4-graphs-of-logarithmic-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every graph as an accessible spec-first SVG built from its exact equation — the investment logarithmic model $t=20\ln(A)-20\ln(2{,}500)$ with its labeled "balance reaches \$5{,}000 near year 14" point; the $f(x)=2^x$/$g(x)=\log_2(x)$ reflection pair about $y=x$; the two-panel parent-function characteristics schematic; the three-curve base-comparison graph $\log_2(x)$, $\ln(x)$, and $\log(x)$; the $f(x)=\log_5(x)$ worked example; the two-panel horizontal-shift, vertical-shift, stretch/compression, and reflection schematics (recreated with concrete representative values $b=2$ and $c=2$, $d=2$, or $a=2$ in place of the source's symbolic point labels, since the figure engine draws real analytic curves rather than schematic ones); the horizontal-shift, vertical-shift, stretch, and combined shift-and-stretch worked examples; the reflection-about-the-$y$-axis panel and the $f(x)=\log(-x)$ worked example, both of which need $x<h$ on their reflected branch — outside the analytic log primitive's domain — and so are rendered as a dense reflected `log` curve primitive (added to `graph-core.mjs` in this pass, which previously could only open rightward from a vertical asymptote); the vertical-asymptote and equation-from-a-graph worked examples; and the five-curve base-comparison figure and the equation-from-a-graph item used in the closing Practice block. Converted the two-column "graph a reflection" How To table into two separate How To callouts, one per reflection axis, matching this book's callout convention. Presented the four data tables (the $2^x$/$\log_2(y)$ correspondence, the $f$/$g$ ordered-pair correspondence, and the two-part function-value check table, the latter combined into a single ten-column table since its source split was only print pagination) as Markdown tables. Omitted the "Access these online resources" media links. Omitted the corequisite-skills "Objective 1"/"Objective 2" review appendix that precedes this section's actual content in the pinned CNXML module, since it does not appear in the printed textbook (confirmed against the source PDF) and duplicates material this section itself develops. Converted the ten retained "Try It" checks into interactive fill-ins with instant feedback, several split into a domain question and a vertical-asymptote or key-point question when the original asked for multiple facts at once; every exponential and logarithmic curve in this section is graded through a static figure plus a fill-in or multiple-choice question, never `graphplot`, which cannot grade a logarithmic curve. And adapted five selected end-of-section exercises — two domain evaluations, one vertical-asymptote evaluation, a graph-matching pair converted to graph-mode multiple choice, and one equation-from-a-graph item — into interactive components in a closing Practice block, one group per objective.</small>
