---
title: Inverse Functions
description: >-
  Verifying inverse functions, the domain and range of an inverse, restricting
  a domain to make a function one-to-one, evaluating an inverse from tables and
  graphs, finding an inverse from a formula, and reflection about the line
  y = x — adapted from OpenStax Precalculus 2e, Section 1.7.
source_section: "1.7"
weight: 7
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Verify inverse functions
- Determine the domain and range of an inverse function and restrict the domain of a function to make it one-to-one
- Find or evaluate the inverse of a function
- Use the graph of a one-to-one function to graph its inverse function on the same axes
{{< /callout >}}

A reversible heat pump is a climate-control system that is an air conditioner
and a heater in a single device. Operated in one direction, it pumps heat out
of a house to provide cooling. Operating in reverse, it pumps heat into the
building from the outside, even in cool weather, to provide heating. As a
heater, a heat pump is several times more efficient than conventional
electrical resistance heating.

If some physical machines can run in two directions, we might ask whether some
of the function "machines" we have been studying can also run backwards. The
diagram below provides a visual representation of this question. In this
section, we will consider the reverse nature of functions.

<div class="ap-figure">
<svg role="img" aria-label="Two function machines side by side. In the left machine, labelled f, an input x flows in at the top and an output y flows out at the bottom. The right machine is the same funnel turned upside down and labelled with a question mark: y flows in at the top and x flows out at the bottom." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 236" width="360" height="236" font-family="Helvetica, Arial, sans-serif">
  <text x="66" y="24" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">x</text>
  <text x="66" y="230" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">y</text>
  <text x="24" y="122" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">f</text>
  <line x1="66" y1="34" x2="66" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="66,80 61,68 71,68" fill="currentColor"/>
  <polygon points="40,84 60,84 66,100 72,84 92,84 92,150 72,150 66,166 60,150 40,150" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="66" y1="170" x2="66" y2="206" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="66,216 61,204 71,204" fill="currentColor"/>
  <text x="256" y="24" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">y</text>
  <text x="256" y="230" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">x</text>
  <text x="214" y="122" font-size="13" fill="currentColor" text-anchor="middle">?</text>
  <line x1="256" y1="34" x2="256" y2="62" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="256,72 251,60 261,60" fill="currentColor"/>
  <polygon points="230,100 250,100 256,84 262,100 282,100 282,166 262,166 256,150 250,166 230,166" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="256" y1="170" x2="256" y2="206" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="256,216 251,204 261,204" fill="currentColor"/>
</svg>
</div>

Can a function "machine" operate in reverse?

## Verifying that two functions are inverse functions

Betty is traveling to Milan for a fashion show and wants to know what the
temperature will be. She is not familiar with the **Celsius** scale. To get an
idea of how temperature measurements are related, Betty wants to convert 75
degrees **Fahrenheit** to degrees Celsius, using the formula

$$C=\tfrac{5}{9}(F-32)$$

and substitutes 75 for $F$ to calculate

$$\tfrac{5}{9}(75-32)\approx 24^\circ\text{C}.$$

Knowing that a comfortable 75 degrees Fahrenheit is about 24 degrees Celsius,
Betty gets the week's weather forecast for Milan, and wants to convert all of
the temperatures to degrees Fahrenheit.

| | Mon | Tue | Wed | Thu |
| :--- | ---: | ---: | ---: | ---: |
| High | 26 °C | 29 °C | 30 °C | 26 °C |
| Low | 19 °C | 19 °C | 20 °C | 18 °C |

At first, Betty considers using the formula she has already found to complete
the conversions. After all, she knows her algebra, and can easily solve the
equation for $F$ after substituting a value for $C$. For example, to convert
26 degrees Celsius, she could write

$$
\begin{array}{lrcl}
& 26 &=& \tfrac{5}{9}(F-32) \\[4pt]
& 26\cdot\tfrac{9}{5} &=& F-32 \\[4pt]
& F &=& 26\cdot\tfrac{9}{5}+32\approx 79
\end{array}
$$

After considering this option for a moment, however, she realizes that solving
the equation for each of the temperatures will be awfully tedious. She
realizes that since evaluation is easier than solving, it would be much more
convenient to have a different formula, one that takes the Celsius temperature
and outputs the Fahrenheit temperature.

The formula for which Betty is searching corresponds to the idea of an
**inverse function**, which is a function for which the input of the original
function becomes the output of the inverse function and the output of the
original function becomes the input of the inverse function.

Given a function $f(x)$, we represent its inverse as $f^{-1}(x)$, read as "$f$
inverse of $x$." The raised $-1$ is part of the notation. It is not an
exponent; it does not imply a power of $-1$. In other words, $f^{-1}(x)$ does
*not* mean $\tfrac{1}{f(x)}$ because $\tfrac{1}{f(x)}$ is the reciprocal of
$f$ and not the inverse.

The "exponent-like" notation comes from an analogy between function
composition and multiplication: just as $a^{-1}a=1$ (1 is the identity element
for multiplication) for any nonzero number $a$, so $f^{-1}\circ f$ equals the
identity function, that is,

$$(f^{-1}\circ f)(x)=f^{-1}(f(x))=f^{-1}(y)=x$$

This holds for all $x$ in the domain of $f$. Informally, this means that
inverse functions "undo" each other. However, just as zero does not have a
**reciprocal**, some functions do not have inverses.

Given a function $f(x)$, we can verify whether some other function $g(x)$ is
the inverse of $f(x)$ by checking if both $g(f(x))=x$ and $f(g(x))=x$ are
true.

For example, $y=4x$ and $y=\tfrac{1}{4}x$ are inverse functions.

$$(f^{-1}\circ f)(x)=f^{-1}(4x)=\tfrac{1}{4}(4x)=x$$

and

$$(f\circ f^{-1})(x)=f\left(\tfrac{1}{4}x\right)=4\left(\tfrac{1}{4}x\right)=x$$

A few coordinate pairs from the graph of the function $y=4x$ are $(-2,-8)$,
$(0,0)$, and $(2,8)$. A few coordinate pairs from the graph of the function
$y=\tfrac{1}{4}x$ are $(-8,-2)$, $(0,0)$, and $(8,2)$. If we interchange the
input and output of each coordinate pair of a function, the interchanged
coordinate pairs would appear on the graph of the inverse function.

{{< callout type="info" >}}
  **Inverse function.** For any **one-to-one function** $f(x)=y$, a function
  $f^{-1}(x)$ is an **inverse function** of $f$ if $f^{-1}(y)=x$. This can also
  be written as $f^{-1}(f(x))=x$ for all $x$ in the domain of $f$. It also
  follows that $f(f^{-1}(x))=x$ for all $x$ in the domain of $f^{-1}$ if
  $f^{-1}$ is the inverse of $f$.

  The notation $f^{-1}$ is read "$f$ inverse." Like any other function, we can
  use any variable name as the input for $f^{-1}$, so we will often write
  $f^{-1}(x)$, which we read as "$f$ inverse of $x$." Keep in mind that

  $$f^{-1}(x)\ne\tfrac{1}{f(x)}$$

  and not all functions have inverses.
{{< /callout >}}

**Example.** If for a particular one-to-one function $f(2)=4$ and $f(5)=12$,
what are the corresponding input and output values for the inverse function?

**Solution.** The inverse function reverses the input and output quantities,
so if

$$
\begin{array}{lrcl}
& f(2)=4, & \text{then} & f^{-1}(4)=2; \\[4pt]
& f(5)=12, & \text{then} & f^{-1}(12)=5.
\end{array}
$$

Alternatively, if we want to name the inverse function $g$, then $g(4)=2$ and
$g(12)=5$. Notice that if we show the coordinate pairs in a table form, the
input and output are clearly reversed.

| $(x,f(x))$ | $(x,g(x))$ |
| :--- | :--- |
| $(2,4)$ | $(4,2)$ |
| $(5,12)$ | $(12,5)$ |

{{< fillin
  question="Given that $h^{-1}(6)=2$, find $h(2)$."
  answer="6"
  hint="The inverse swaps input and output, so read the statement backwards."
>}}

{{< callout type="info" >}}
  **How to:** given two functions $f(x)$ and $g(x)$, test whether the
  functions are inverses of each other.

  1. Determine whether $f(g(x))=x$ or $g(f(x))=x$.
  2. If both statements are true, then $g=f^{-1}$ and $f=g^{-1}$. If either
     statement is false, then both are false, and $g\ne f^{-1}$ and
     $f\ne g^{-1}$.
{{< /callout >}}

**Example.** If $f(x)=\tfrac{1}{x+2}$ and $g(x)=\tfrac{1}{x}-2$, is
$g=f^{-1}$?

**Solution.**

$$
\begin{array}{lrcl}
& g(f(x)) &=& \tfrac{1}{\left(\tfrac{1}{x+2}\right)}-2 \\[4pt]
& &=& x+2-2 \\[4pt]
& &=& x
\end{array}
$$

We must also verify the other formula.

$$
\begin{array}{lrcl}
& f(g(x)) &=& \tfrac{1}{\tfrac{1}{x}-2+2} \\[4pt]
& &=& \tfrac{1}{\tfrac{1}{x}} \\[4pt]
& &=& x
\end{array}
$$

so $g=f^{-1}$ and $f=g^{-1}$. Notice the inverse operations are in reverse
order of the operations from the original function.

{{< multiplechoice
  question="If $f(x)=x^3-4$ and $g(x)=\sqrt[3]{x+4}$, is $g=f^{-1}$?"
  answer="Yes, because both $f(g(x))=x$ and $g(f(x))=x$"
  hint="Substitute one into the other and simplify; the cube and the cube root undo each other."
>}}
Yes, because both $f(g(x))=x$ and $g(f(x))=x$
No, because $g(f(x))\ne x$
Only $f(g(x))=x$ holds, so they are not inverses
No, because $f(g(x))\ne x$
{{< /multiplechoice >}}

**Example.** If $f(x)=x^3$ (the cube function) and $g(x)=\tfrac{1}{3}x$, is
$g=f^{-1}$?

**Solution.**

$$f(g(x))=\tfrac{x^3}{27}\ne x$$

No, the functions are not inverses. The correct inverse to the cube is, of
course, the cube root $\sqrt[3]{x}=x^{\tfrac{1}{3}}$, that is, the one-third
is an exponent, not a multiplier.

{{< multiplechoice
  question="If $f(x)=(x-1)^3$ and $g(x)=\sqrt[3]{x}+1$, is $g=f^{-1}$?"
  answer="Yes"
  hint="Work $f(g(x))$ from the inside out: the $+1$ and the $-1$ cancel before the cube."
>}}
No, because $f(g(x))=x^3$
No, because $g(f(x))=x-2$
No, because $g$ is not one-to-one
Yes
{{< /multiplechoice >}}

## Finding domain and range of inverse functions

The outputs of the function $f$ are the inputs to $f^{-1}$, so the range of
$f$ is also the domain of $f^{-1}$. Likewise, because the inputs to $f$ are
the outputs of $f^{-1}$, the domain of $f$ is the range of $f^{-1}$. We can
visualize the situation as below.

<div class="ap-figure">
<svg role="img" aria-label="Two ovals side by side. The left oval is labelled the domain of f, which is also the range of f inverse; the right oval is labelled the range of f, which is also the domain of f inverse. An arrow labelled f arcs from the left oval to the right one, and an arrow labelled f inverse arcs back from the right oval to the left one." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 226" width="380" height="226" font-family="Helvetica, Arial, sans-serif">
  <ellipse cx="72" cy="110" rx="52" ry="62" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="308" cy="110" rx="52" ry="62" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="72" y="104" font-size="12" fill="currentColor" text-anchor="middle">Domain</text>
  <text x="72" y="120" font-size="12" fill="currentColor" text-anchor="middle">of f</text>
  <text x="72" y="198" font-size="12" fill="currentColor" text-anchor="middle">Range of</text>
  <text x="72" y="214" font-size="12" fill="currentColor" text-anchor="middle">f inverse</text>
  <text x="308" y="104" font-size="12" fill="currentColor" text-anchor="middle">Range</text>
  <text x="308" y="120" font-size="12" fill="currentColor" text-anchor="middle">of f</text>
  <text x="308" y="198" font-size="12" fill="currentColor" text-anchor="middle">Domain of</text>
  <text x="308" y="214" font-size="12" fill="currentColor" text-anchor="middle">f inverse</text>
  <path d="M 126 84 A 130 130 0 0 1 245 78" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="255,77 243.4,82.7 242.6,72.7" fill="currentColor"/>
  <path d="M 254 136 A 130 130 0 0 1 135 142" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="125,143 136.6,137.3 137.4,147.3" fill="currentColor"/>
  <text x="190" y="56" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">f</text>
  <text x="190" y="180" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">f<tspan font-size="9" dy="-5">-1</tspan></text>
</svg>
</div>

When a function has no inverse function, it is possible to create a new
function where that new function on a limited domain does have an inverse
function. For example, the inverse of $f(x)=\sqrt{x}$ is $f^{-1}(x)=x^2$,
because a square "undoes" a square root; but the square is only the inverse of
the square root on the domain $[0,\infty)$, since that is the range of
$f(x)=\sqrt{x}$.

We can look at this problem from the other side, starting with the square
(toolkit quadratic) function $f(x)=x^2$. If we want to construct an inverse to
this function, we run into a problem, because for every given output of the
quadratic function, there are two corresponding inputs (except when the input
is 0). For example, the output 9 from the quadratic function corresponds to
the inputs 3 and $-3$. But an output from a function is an input to its
inverse; if this inverse input corresponds to more than one inverse output
(input of the original function), then the "inverse" is not a function at all!
To put it differently, the quadratic function is not a one-to-one function; it
fails the horizontal line test, so it does not have an inverse function. In
order for a function to have an inverse, it must be a one-to-one function.

In many cases, if a function is not one-to-one, we can still restrict the
function to a part of its domain on which it is one-to-one. For example, we
can make a restricted version of the square function $f(x)=x^2$ with its
domain limited to $[0,\infty)$, which is a one-to-one function (it passes the
horizontal line test) and which has an inverse (the square-root function).

If $f(x)=(x-1)^2$ on $[1,\infty)$, then the inverse function is
$f^{-1}(x)=\sqrt{x}+1$.

- The domain of $f$ = range of $f^{-1}$ = $[1,\infty)$.
- The domain of $f^{-1}$ = range of $f$ = $[0,\infty)$.

{{< callout type="info" >}}
  **Q&A.** *Is it possible for a function to have more than one inverse?*

  No. If two supposedly different functions, say, $g$ and $h$, both meet the
  definition of being inverses of another function $f$, then you can prove that
  $g=h$. We have just seen that some functions only have inverses if we
  restrict the domain of the original function. In these cases, there may be
  more than one way to restrict the domain, leading to different inverses.
  However, on any one domain, the original function still has only one unique
  inverse.
{{< /callout >}}

{{< callout type="info" >}}
  **Domain and range of inverse functions.** The range of a function $f(x)$ is
  the domain of the inverse function $f^{-1}(x)$.

  The domain of $f(x)$ is the range of $f^{-1}(x)$.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a function, find the domain and range of its inverse.

  1. If the function is one-to-one, write the range of the original function
     as the domain of the inverse, and write the domain of the original
     function as the range of the inverse.
  2. If the domain of the original function needs to be restricted to make it
     one-to-one, then this restricted domain becomes the range of the inverse
     function.
{{< /callout >}}

**Example.** Identify which of the toolkit functions besides the quadratic
function are not one-to-one, and find a restricted domain on which each
function is one-to-one, if any. The toolkit functions are reviewed below. We
restrict the domain in such a fashion that the function assumes all $y$-values
exactly once.

| Constant | Identity | Quadratic | Cubic | Reciprocal |
| :--- | :--- | :--- | :--- | :--- |
| $f(x)=c$ | $f(x)=x$ | $f(x)=x^2$ | $f(x)=x^3$ | $f(x)=\tfrac{1}{x}$ |

| Reciprocal squared | Cube root | Square root | Absolute value |
| :--- | :--- | :--- | :--- |
| $f(x)=\tfrac{1}{x^2}$ | $f(x)=\sqrt[3]{x}$ | $f(x)=\sqrt{x}$ | $f(x)=\lvert x\rvert$ |

**Solution.** The constant function is not one-to-one, and there is no domain
(except a single point) on which it could be one-to-one, so the constant
function has no meaningful inverse.

The absolute value function can be restricted to the domain $[0,\infty)$,
where it is equal to the identity function.

The reciprocal-squared function can be restricted to the domain
$(0,\infty)$.

We can see that these functions (if unrestricted) are not one-to-one by
looking at their graphs, shown below: (a) absolute value and (b) reciprocal
squared. They both would fail the horizontal line test. However, if a function
is restricted to a certain domain so that it passes the horizontal line test,
then in that restricted domain, it can have an inverse.

{{< apfigure kind="graph" >}}
{"ariaLabel":"(a) The graph of the absolute value function: a V with its corner at the origin. A horizontal line would meet it twice, so it is not one-to-one.","xMin":-4,"xMax":4,"yMin":-2,"yMax":4,"unit":26,"tickLabels":true,"polylines":[{"through":[[-3.5,3.5],[0,0],[3.5,3.5]],"arrows":true}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"(b) The graph of the reciprocal squared function: two branches above the horizontal axis, one on each side of the vertical axis. A horizontal line would meet it twice, so it is not one-to-one.","xMin":-4,"xMax":4,"yMin":-2,"yMax":4,"unit":26,"tickLabels":true,"curves":[{"kind":"reciprocal-squared"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="The domain of function $f$ is $(1,\infty)$ and the range of function $f$ is $(-\infty,-2)$. What are the domain and range of the inverse function?"
  answer="domain $(-\infty,-2)$, range $(1,\infty)$"
  hint="An inverse swaps the two sets: what goes in becomes what comes out."
>}}
domain $(-\infty,1)$, range $(-2,\infty)$
domain $(1,\infty)$, range $(-\infty,-2)$
domain $(-2,\infty)$, range $(-\infty,1)$
domain $(-\infty,-2)$, range $(1,\infty)$
{{< /multiplechoice >}}

## Finding and evaluating inverse functions

Once we have a one-to-one function, we can evaluate its inverse at specific
inverse function inputs or construct a complete representation of the inverse
function in many cases.

### Inverting tabular functions

Suppose we want to find the inverse of a function represented in table form.
Remember that the domain of a function is the range of the inverse and the
range of the function is the domain of the inverse. So we need to interchange
the domain and range.

Each row (or column) of inputs becomes the row (or column) of outputs for the
inverse function. Similarly, each row (or column) of outputs becomes the row
(or column) of inputs for the inverse function.

**Example.** A function $f(t)$ is given below, showing distance in miles that
a car has traveled in $t$ minutes. Find and interpret $f^{-1}(70)$.

| $t$ (minutes) | 30 | 50 | 70 | 90 |
| :--- | ---: | ---: | ---: | ---: |
| $f(t)$ (miles) | 20 | 40 | 60 | 70 |

**Solution.** The inverse function takes an output of $f$ and returns an input
for $f$. So in the expression $f^{-1}(70)$, 70 is an output value of the
original function, representing 70 miles. The inverse will return the
corresponding input of the original function $f$, 90 minutes, so
$f^{-1}(70)=90$. The interpretation of this is that, to drive 70 miles, it
took 90 minutes.

Alternatively, recall that the definition of the inverse was that if $f(a)=b$,
then $f^{-1}(b)=a$. By this definition, if we are given $f^{-1}(70)=a$, then
we are looking for a value $a$ so that $f(a)=70$. In this case, we are looking
for a $t$ so that $f(t)=70$, which is when $t=90$.

Now consider a slightly longer table for the same journey.

| $t$ (minutes) | 30 | 50 | 60 | 70 | 90 |
| :--- | ---: | ---: | ---: | ---: | ---: |
| $f(t)$ (miles) | 20 | 40 | 50 | 60 | 70 |

{{< fillin
  question="Using the table above, find $f(60)$, in miles."
  answer="50"
  hint="Read the table forwards: 60 is an input, so look for it in the top row."
>}}

{{< fillin
  question="Using the same table, find $f^{-1}(60)$, in minutes."
  answer="70"
  hint="Read the table backwards: here 60 is an output, so look for it in the bottom row."
>}}

### Evaluating the inverse of a function, given a graph of the original function

We saw in *Functions and Function Notation* that the domain of a function can
be read by observing the horizontal extent of its graph. We find the domain of
the inverse function by observing the *vertical* extent of the graph of the
original function, because this corresponds to the horizontal extent of the
inverse function. Similarly, we find the range of the inverse function by
observing the *horizontal* extent of the graph of the original function, as
this is the vertical extent of the inverse function. If we want to evaluate an
inverse function, we find its input within its domain, which is all or part of
the vertical axis of the original function's graph.

{{< callout type="info" >}}
  **How to:** given the graph of a function, evaluate its inverse at specific
  points.

  1. Find the desired input on the $y$-axis of the given graph.
  2. Read the inverse function's output from the $x$-axis of the given graph.
{{< /callout >}}

**Example.** A function $g(x)$ is graphed below. Find $g(3)$ and $g^{-1}(3)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of g: a curve that hugs the horizontal axis to the left, passes through (3, 1), and rises to the right through (5, 3).","xMin":-1,"xMax":6,"yMin":-1,"yMax":4,"xUnit":34,"yUnit":34,"tickLabels":true,"yLabel":"g(x)","curves":[{"kind":"exp","b":1.7320508,"h":3}]}
{{< /apfigure >}}

**Solution.** To evaluate $g(3)$, we find 3 on the $x$-axis and find the
corresponding output value on the $y$-axis. The point $(3,1)$ tells us that
$g(3)=1$.

To evaluate $g^{-1}(3)$, recall that by definition $g^{-1}(3)$ means the value
of $x$ for which $g(x)=3$. By looking for the output value 3 on the vertical
axis, we find the point $(5,3)$ on the graph, which means $g(5)=3$, so by
definition, $g^{-1}(3)=5$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same graph of g with two points marked and dashed lines drawn to the axes: (3, 1), showing g(3) = 1, and (5, 3), showing g(5) = 3 and therefore g inverse of 3 equals 5.","xMin":-1,"xMax":6,"yMin":-1,"yMax":4,"xUnit":34,"yUnit":34,"tickLabels":true,"yLabel":"g(x)","curves":[{"kind":"exp","b":1.7320508,"h":3}],"guides":[[3,1],[5,3]],"points":[{"at":[3,1],"label":"(3, 1)","labelSide":"e"},{"at":[5,3],"label":"(5, 3)","labelSide":"se"}]}
{{< /apfigure >}}

{{< fillin
  question="Using the graph of $g$ above, find $g^{-1}(1)$."
  answer="3"
  hint="Find the height 1 on the vertical axis, then read across to the curve and down to the input."
>}}

{{< multiplechoice
  question="Using the same graph, estimate $g^{-1}(4)$."
  answer="about 5.6"
  hint="The output 4 sits just above the marked point $(5,3)$, so the input is a little past 5."
>}}
about 5.6
about 4.0
about 3.5
about 7.2
{{< /multiplechoice >}}

### Finding inverses of functions represented by formulas

Sometimes we will need to know an inverse function for all elements of its
domain, not just a few. If the original function is given as a formula—for
example, $y$ as a function of $x$—we can often find the inverse function by
solving to obtain $x$ as a function of $y$.

{{< callout type="info" >}}
  **How to:** given a function represented by a formula, find the inverse.

  1. Make sure $f$ is a one-to-one function.
  2. Solve for $x$.
  3. Interchange $x$ and $y$.
  4. Replace $y$ with $f^{-1}(x)$. (Variables may be different in different
     cases, but the principle is the same.)
{{< /callout >}}

**Example.** Find a formula for the inverse function that gives Fahrenheit
temperature as a function of Celsius temperature, given
$C=\tfrac{5}{9}(F-32)$.

**Solution.**

$$
\begin{array}{lrcl}
& C &=& \tfrac{5}{9}(F-32) \\[4pt]
& C\cdot\tfrac{9}{5} &=& F-32 \\[4pt]
& F &=& \tfrac{9}{5}C+32
\end{array}
$$

By solving in general, we have uncovered the inverse function. If

$$C=h(F)=\tfrac{5}{9}(F-32),$$

then

$$F=h^{-1}(C)=\tfrac{9}{5}C+32.$$

In this case, we introduced a function $h$ to represent the conversion because
the input and output variables are descriptive, and writing $C^{-1}$ could get
confusing.

{{< fillin
  question="Solve for $x$ in terms of $y$ given $y=\tfrac{1}{3}(x-5)$."
  answer="3y+5"
  answerDisplay="$x=3y+5$"
  hint="Undo the operations in reverse: multiply by 3 first, then add 5."
>}}

**Example.** Find the inverse of the function $f(x)=\tfrac{2}{x-3}+4$.

**Solution.**

$$
\begin{array}{lrcl}
\text{Set up an equation.} & y &=& \tfrac{2}{x-3}+4 \\[4pt]
\text{Subtract 4 from both sides.} & y-4 &=& \tfrac{2}{x-3} \\[4pt]
\text{Multiply both sides by }x-3\text{ and divide by }y-4. & x-3 &=& \tfrac{2}{y-4} \\[4pt]
\text{Add 3 to both sides.} & x &=& \tfrac{2}{y-4}+3
\end{array}
$$

So $f^{-1}(y)=\tfrac{2}{y-4}+3$ or $f^{-1}(x)=\tfrac{2}{x-4}+3$.

The domain and range of $f$ exclude the values 3 and 4, respectively. $f$ and
$f^{-1}$ are equal at two points but are not the same function, as the table
below shows.

| $x$ | 1 | 2 | 5 | $f^{-1}(y)$ |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 3 | 2 | 5 | $y$ |

**Example.** Find the inverse of the function $f(x)=2+\sqrt{x-4}$.

**Solution.**

$$
\begin{array}{lrcl}
& y &=& 2+\sqrt{x-4} \\[4pt]
& (y-2)^2 &=& x-4 \\[4pt]
& x &=& (y-2)^2+4
\end{array}
$$

So $f^{-1}(x)=(x-2)^2+4$.

The domain of $f$ is $[4,\infty)$. Notice that the range of $f$ is
$[2,\infty)$, so this means that the domain of the inverse function $f^{-1}$
is also $[2,\infty)$.

The formula we found for $f^{-1}(x)$ looks like it would be valid for all real
$x$. However, $f^{-1}$ itself must have an inverse (namely, $f$) so we have to
restrict the domain of $f^{-1}$ to $[2,\infty)$ in order to make $f^{-1}$ a
one-to-one function. This domain of $f^{-1}$ is exactly the range of $f$.

{{< fillin
  question="What is the inverse of the function $f(x)=2-\sqrt{x}$?"
  answer="(2-x)^2"
  answerDisplay="$f^{-1}(x)=(2-x)^2$"
  hint="Set $y=2-\sqrt{x}$, isolate the radical, then square both sides."
>}}

{{< multiplechoice
  question="State the domains of $f(x)=2-\sqrt{x}$ and of its inverse."
  answer="domain of $f$: $[0,\infty)$; domain of $f^{-1}$: $(-\infty,2]$"
  hint="The domain of the inverse is the range of $f$ — and a square root is never negative, so $2-\sqrt{x}$ never exceeds 2."
>}}
domain of $f$: $[0,\infty)$; domain of $f^{-1}$: $(-\infty,2]$
domain of $f$: $(-\infty,\infty)$; domain of $f^{-1}$: $(-\infty,\infty)$
domain of $f$: $(-\infty,2]$; domain of $f^{-1}$: $[0,\infty)$
domain of $f$: $[0,\infty)$; domain of $f^{-1}$: $[2,\infty)$
{{< /multiplechoice >}}

## Finding inverse functions and their graphs

Now that we can find the inverse of a function, we will explore the graphs of
functions and their inverses. Let us return to the quadratic function
$f(x)=x^2$ restricted to the domain $[0,\infty)$, on which this function is
one-to-one, and graph it as below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals x squared restricted to the domain from 0 onwards: the right half of the parabola only, beginning at the origin and rising to the right.","xMin":-1,"xMax":5,"yMin":-1,"yMax":5,"unit":34,"tickLabels":true,"quadratics":[{"a":1,"from":0,"arrows":"end"}],"points":[{"at":[0,0]}]}
{{< /apfigure >}}

**Restricting the domain** to $[0,\infty)$ makes the function one-to-one (it
will obviously pass the horizontal line test), so it has an inverse on this
restricted domain.

We already know that the inverse of the toolkit quadratic function is the
square root function, that is, $f^{-1}(x)=\sqrt{x}$. What happens if we graph
both $f$ and $f^{-1}$ on the same set of axes, using the $x$-axis for the
input to both $f$ and $f^{-1}$?

We notice a distinct relationship: The graph of $f^{-1}(x)$ is the graph of
$f(x)$ reflected about the diagonal line $y=x$, which we will call the
identity line, shown below with the square-root function dashed.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The right half of the parabola y = x squared together with the square root curve, drawn dashed, and the dashed identity line y = x. Each curve is the mirror image of the other across that line.","xMin":-1,"xMax":5,"yMin":-1,"yMax":5,"unit":34,"tickLabels":true,"quadratics":[{"a":1,"from":0,"arrows":"end"}],"curves":[{"kind":"sqrt","dashed":true,"arrows":"end"}],"lines":[{"slope":1,"intercept":0,"dashed":true,"arrows":false,"label":"y = x","labelAt":0.8}],"points":[{"at":[0,0]}]}
{{< /apfigure >}}

This relationship will be observed for all one-to-one functions, because it is
a result of the function and its inverse swapping inputs and outputs. This is
equivalent to interchanging the roles of the vertical and horizontal axes.

**Example.** Given the graph of $f(x)$ below, sketch a graph of $f^{-1}(x)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f: a curve that falls steeply near the vertical axis, crosses the horizontal axis at (1, 0), and rises slowly to the right through (4, 2).","xMin":-1,"xMax":6,"yMin":-4,"yMax":4,"xUnit":34,"yUnit":24,"tickLabels":true,"curves":[{"kind":"log","b":2}],"points":[{"at":[1,0],"label":"(1, 0)"},{"at":[4,2],"label":"(4, 2)"}]}
{{< /apfigure >}}

**Solution.** This is a one-to-one function, so we will be able to sketch an
inverse. Note that the graph shown has an apparent domain of $(0,\infty)$ and
range of $(-\infty,\infty)$, so the inverse will have a domain of
$(-\infty,\infty)$ and range of $(0,\infty)$.

If we reflect this graph over the line $y=x$, the point $(1,0)$ reflects to
$(0,1)$ and the point $(4,2)$ reflects to $(2,4)$. Sketching the inverse
(dashed) on the same axes as the original graph gives the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same curve together with its inverse, drawn dashed, and the dashed identity line y = x. The point (1, 0) on the original corresponds to (0, 1) on the inverse, and (4, 2) corresponds to (2, 4); each curve is the mirror image of the other across the line y = x.","xMin":-4,"xMax":6,"yMin":-4,"yMax":6,"xUnit":26,"yUnit":26,"tickLabels":true,"curves":[{"kind":"log","b":2},{"kind":"exp","b":2,"dashed":true}],"lines":[{"slope":1,"intercept":0,"dashed":true,"arrows":false,"label":"y = x","labelAt":0.85}],"points":[{"at":[1,0]},{"at":[4,2]},{"at":[0,1]},{"at":[2,4]}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Q&A.** *Is there any function that is equal to its own inverse?*

  Yes. If $f=f^{-1}$, then $f(f(x))=x$, and we can think of several functions
  that have this property. The identity function does, and so does the
  reciprocal function, because

  $$\frac{1}{\tfrac{1}{x}}=x$$

  Any function $f(x)=c-x$, where $c$ is a constant, is also equal to its own
  inverse.
{{< /callout >}}

## Key concepts

- If $g(x)$ is the inverse of $f(x)$, then $g(f(x))=f(g(x))=x$.
- Each of the toolkit functions has an inverse.
- For a function to have an inverse, it must be one-to-one (pass the
  horizontal line test).
- A function that is not one-to-one over its entire domain may be one-to-one
  on part of its domain.
- For a tabular function, exchange the input and output rows to obtain the
  inverse.
- The inverse of a function can be determined at specific points on its graph.
- To find the inverse of a formula, solve the equation $y=f(x)$ for $x$ as a
  function of $y$. Then exchange the labels $x$ and $y$.
- The graph of an inverse function is the reflection of the graph of the
  original function across the line $y=x$.

## Key terms

**inverse function** — for any one-to-one function $f(x)$, the inverse is a
function $f^{-1}(x)$ such that $f^{-1}(f(x))=x$ for all $x$ in the domain of
$f$; this also implies that $f(f^{-1}(x))=x$ for all $x$ in the domain of
$f^{-1}$.

## Practice

### Verify inverse functions

{{< multiplechoice
  question="Can a function be its own inverse?"
  answer="Yes"
  hint="Test $f(x)=\tfrac{1}{x}$: composing it with itself simplifies immediately."
>}}
Yes
No
{{< /multiplechoice >}}

{{< multiplechoice
  question="If $f(x)=\tfrac{x}{2+x}$ and $g(x)=\tfrac{2x}{1-x}$, is $g=f^{-1}$?"
  answer="Yes, because both $f(g(x))=x$ and $g(f(x))=x$"
  hint="Substitute $g(x)$ into $f$ and simplify the resulting complex fraction, then check the other order."
>}}
Yes, because both $f(g(x))=x$ and $g(f(x))=x$
No, because neither composition simplifies to $x$
No, because $g(f(x))\ne x$
No, because $f(g(x))\ne x$
{{< /multiplechoice >}}

{{< multiplechoice
  question="If $f(x)=\sqrt[3]{x-1}$ and $g(x)=x^3+1$, is $g=f^{-1}$?"
  answer="Yes, because both $f(g(x))=x$ and $g(f(x))=x$"
  hint="Substitute $g(x)$ into $f$ first — the cube and cube root cancel — then check the reverse order."
>}}
No, because $f(g(x))\ne x$
Only $g(f(x))=x$ holds, so they are not inverses
Yes, because both $f(g(x))=x$ and $g(f(x))=x$
No, because $g(f(x))\ne x$
{{< /multiplechoice >}}

### Determine the domain and range of an inverse function and restrict the domain of a function to make it one-to-one

{{< multiplechoice
  question="Find a domain on which $f(x)=(x+7)^2$ is one-to-one and non-decreasing, and find the inverse of $f$ restricted to that domain."
  answer="domain of $f$: $[-7,\infty)$; $f^{-1}(x)=\sqrt{x}-7$"
  hint="Restrict to where $x+7\ge 0$, then solve $y=(x+7)^2$ for $x$ using the positive square root."
>}}
domain of $f$: $(-\infty,-7]$; $f^{-1}(x)=\sqrt{x}-7$
domain of $f$: $[-7,\infty)$; $f^{-1}(x)=\sqrt{x}+7$
domain of $f$: $[-7,\infty)$; $f^{-1}(x)=\sqrt{x}-7$
domain of $f$: $[0,\infty)$; $f^{-1}(x)=\sqrt{x-7}$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Find a domain on which $f(x)=x^2-5$ is one-to-one and non-decreasing, and find the inverse of $f$ restricted to that domain."
  answer="domain of $f$: $[0,\infty)$; $f^{-1}(x)=\sqrt{x+5}$"
  hint="Restrict to where $x\ge 0$, then solve $y=x^2-5$ for $x$ using the positive square root."
>}}
domain of $f$: $(-\infty,0]$; $f^{-1}(x)=\sqrt{x+5}$
domain of $f$: $[-5,\infty)$; $f^{-1}(x)=\sqrt{x+5}$
domain of $f$: $[0,\infty)$; $f^{-1}(x)=\sqrt{x+5}$
domain of $f$: $[0,\infty)$; $f^{-1}(x)=\sqrt{x}-5$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $f(x)=\sqrt{x}$ one-to-one?"
  answer="Yes"
  hint="A one-to-one function passes the horizontal line test; a square-root graph never doubles back on itself."
>}}
No
Yes
{{< /multiplechoice >}}

### Find or evaluate the inverse of a function

{{< fillin
  question="Find $f^{-1}(x)$ for $f(x)=x+3$."
  answer="x-3"
  answerDisplay="$f^{-1}(x)=x-3$"
  hint="Undo addition with the opposite operation."
>}}

{{< fillin
  question="Find $f^{-1}(x)$ for $f(x)=\tfrac{x}{x+2}$."
  answer="-\tfrac{2x}{x-1}"
  answerDisplay="$f^{-1}(x)=-\tfrac{2x}{x-1}$"
  hint="Set $y=\tfrac{x}{x+2}$, clear the denominator, then collect the $x$-terms on one side."
>}}

{{< fillin
  question="If $f(6)=7$ for a one-to-one function $f$, find $f^{-1}(7)$."
  answer="6"
  hint="The inverse swaps input and output, so read the given statement backwards."
>}}

{{< fillin
  question="If $f^{-1}(-4)=-8$ for a one-to-one function $f$, find $f(-8)$."
  answer="-4"
  hint="By definition, $f^{-1}(a)=b$ means $f(b)=a$."
>}}

### Use the graph of a one-to-one function to graph its inverse function on the same axes

The table below shows a one-to-one function $f$.

| $x$ | 3 | 6 | 9 | 13 | 14 |
| :--- | ---: | ---: | ---: | ---: | ---: |
| $f(x)$ | 1 | 4 | 7 | 12 | 16 |

{{< fillin
  question="Using the table above, give $f^{-1}(1)$, $f^{-1}(4)$, $f^{-1}(7)$, $f^{-1}(12)$, and $f^{-1}(16)$, in that order, separated by commas."
  answer="3,6,9,13,14"
  answerDisplay="$f^{-1}(1)=3$, $f^{-1}(4)=6$, $f^{-1}(7)=9$, $f^{-1}(12)=13$, $f^{-1}(16)=14$"
  hint="Reverse each pair from the table: if $f(a)=b$ then $f^{-1}(b)=a$."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of a one-to-one function f: a downward-sloping line that meets the y-axis at (0, 3) and the x-axis at (2, 0).","xMin":-1,"xMax":5,"yMin":-1,"yMax":5,"unit":30,"tickLabels":true,"lines":[{"slope":-1.5,"intercept":3,"label":"f"}]}
{{< /apfigure >}}

{{< fillin
  question="The graph of a one-to-one function $f$ is shown above. Find $f^{-1}(0)$."
  answer="2"
  hint="$f^{-1}(0)$ asks for the input that makes $f$ output $0$ — read the $x$-intercept."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 1.7: Inverse Functions](https://openstax.org/books/precalculus-2e/pages/1-7-inverse-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every figure as an accessible inline SVG, including the reversible function-machine diagram and the domain-and-range diagram, and generated every graph from an explicit formula — the source's unlabelled curves for $g$ and for the reflection example are $g(x)=3^{(x-3)/2}$ and $f(x)=\log_2 x$, fitted to the points the text names; presented Milan's weather forecast and every function table as Markdown tables, giving the forecast temperatures without the source's weather icons; drew the inverse or comparison curve dashed where the source distinguishes it by colour; omitted the media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback, using multiple choice where the answer is a domain, an interval, or a yes/no judgement; omitted the final sketching practice item, which asks for the pair of graphs the worked example immediately above already shows; and adapted selected end-of-section exercises, each with an answer in the official Answer Key, into the section-final Practice block, recreating one exercise's table and another's line graph and using multiple choice for domain, restricted-domain, and one-to-one judgements.</small>
