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

$$\tfrac{5}{9}(75-32)\approx 24\ \text{°C}.$$

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
No, because $f(g(x))\ne x$
No, because $g(f(x))\ne x$
Only $f(g(x))=x$ holds, so they are not inverses
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
Yes
No, because $f(g(x))=x^3$
No, because $g(f(x))=x-2$
No, because $g$ is not one-to-one
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

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"(a) The graph of the absolute value function: a V with its corner at the origin. A horizontal line would meet it twice, so it is not one-to-one.","xMin":-4,"xMax":4,"yMin":-2,"yMax":4,"unit":26,"tickLabels":true,"polylines":[{"through":[[-3.5,3.5],[0,0],[3.5,3.5]],"arrows":true}]}'>
<svg role="img" aria-label="(a) The graph of the absolute value function: a V with its corner at the origin. A horizontal line would meet it twice, so it is not one-to-one." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 208" width="260" height="208" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="182" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="182" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="182" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="182" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="182" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="182" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="182" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="182" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="234" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="234" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="234" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="234" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="234" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="130" x2="236" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="24" x2="130" y2="184" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,130 236,135 236,125" fill="currentColor"/>
  <polygon points="130,14 135,24 125,24" fill="currentColor"/>
  <polygon points="14,130 24,125 24,135" fill="currentColor"/>
  <polygon points="130,194 125,184 135,184" fill="currentColor"/>
  <text x="244" y="122" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="127" x2="26" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="145" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="52" y1="127" x2="52" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="145" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="78" y1="127" x2="78" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="145" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="104" y1="127" x2="104" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="145" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="156" y1="127" x2="156" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="145" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="182" y1="127" x2="182" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="145" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="208" y1="127" x2="208" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="145" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="234" y1="127" x2="234" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="145" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="127" y1="182" x2="133" y2="182" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="186" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="127" y1="156" x2="133" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="160" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="127" y1="104" x2="133" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="108" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="127" y1="78" x2="133" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="82" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="127" y1="52" x2="133" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="56" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="127" y1="26" x2="133" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="44.7,44.7 130,130 215.3,44.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="39,39 49.6,42.5 42.5,49.6" fill="currentColor"/>
  <polygon points="221,39 217.5,49.6 210.4,42.5" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"(b) The graph of the reciprocal squared function: two branches above the horizontal axis, one on each side of the vertical axis. A horizontal line would meet it twice, so it is not one-to-one.","xMin":-4,"xMax":4,"yMin":-2,"yMax":4,"unit":26,"tickLabels":true,"curves":[{"kind":"reciprocal-squared"}]}'>
<svg role="img" aria-label="(b) The graph of the reciprocal squared function: two branches above the horizontal axis, one on each side of the vertical axis. A horizontal line would meet it twice, so it is not one-to-one." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 208" width="260" height="208" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="182" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="182" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="182" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="182" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="182" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="182" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="182" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="182" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="234" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="234" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="234" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="234" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="234" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="130" x2="236" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="24" x2="130" y2="184" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,130 236,135 236,125" fill="currentColor"/>
  <polygon points="130,14 135,24 125,24" fill="currentColor"/>
  <polygon points="14,130 24,125 24,135" fill="currentColor"/>
  <polygon points="130,194 125,184 135,184" fill="currentColor"/>
  <text x="244" y="122" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="127" x2="26" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="145" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="52" y1="127" x2="52" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="145" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="78" y1="127" x2="78" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="145" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="104" y1="127" x2="104" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="145" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="156" y1="127" x2="156" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="145" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="182" y1="127" x2="182" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="145" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="208" y1="127" x2="208" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="145" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="234" y1="127" x2="234" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="145" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="127" y1="182" x2="133" y2="182" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="186" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="127" y1="156" x2="133" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="160" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="127" y1="104" x2="133" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="108" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="127" y1="78" x2="133" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="82" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="127" y1="52" x2="133" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="56" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="127" y1="26" x2="133" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="34,128.1 34,128.1 34.3,128.1 34.5,128.1 34.8,128.1 35,128.1 35.3,128 35.5,128 35.8,128 36,128 36.3,128 36.5,128 36.8,128 37,128 37.3,128 37.5,127.9 37.8,127.9 38,127.9 38.3,127.9 38.5,127.9 38.8,127.9 39,127.9 39.3,127.9 39.5,127.9 39.8,127.8 40,127.8 40.3,127.8 40.5,127.8 40.8,127.8 41,127.8 41.3,127.8 41.5,127.8 41.8,127.7 42,127.7 42.3,127.7 42.5,127.7 42.8,127.7 43,127.7 43.3,127.7 43.5,127.7 43.8,127.6 44,127.6 44.3,127.6 44.5,127.6 44.8,127.6 45,127.6 45.3,127.6 45.5,127.5 45.8,127.5 46,127.5 46.3,127.5 46.5,127.5 46.8,127.5 47,127.4 47.3,127.4 47.5,127.4 47.8,127.4 48,127.4 48.3,127.4 48.5,127.4 48.8,127.3 49,127.3 49.3,127.3 49.5,127.3 49.8,127.3 50,127.3 50.3,127.2 50.5,127.2 50.8,127.2 51,127.2 51.3,127.2 51.5,127.1 51.8,127.1 52,127.1 52.3,127.1 52.5,127.1 52.8,127.1 53,127 53.3,127 53.5,127 53.8,127 54,127 54.3,126.9 54.5,126.9 54.8,126.9 55,126.9 55.3,126.9 55.5,126.8 55.8,126.8 56,126.8 56.3,126.8 56.5,126.7 56.8,126.7 57,126.7 57.3,126.7 57.5,126.7 57.8,126.6 58,126.6 58.3,126.6 58.5,126.6 58.8,126.5 59,126.5 59.3,126.5 59.5,126.5 59.8,126.4 60,126.4 60.3,126.4 60.5,126.4 60.8,126.3 61,126.3 61.3,126.3 61.5,126.3 61.8,126.2 62,126.2 62.3,126.2 62.5,126.1 62.8,126.1 63,126.1 63.3,126.1 63.5,126 63.8,126 64,126 64.3,125.9 64.5,125.9 64.8,125.9 65,125.8 65.3,125.8 65.5,125.8 65.8,125.7 66,125.7 66.3,125.7 66.5,125.6 66.8,125.6 67,125.6 67.3,125.5 67.5,125.5 67.8,125.5 68,125.4 68.3,125.4 68.5,125.4 68.8,125.3 69,125.3 69.3,125.2 69.5,125.2 69.8,125.2 70,125.1 70.3,125.1 70.5,125 70.8,125 71,125 71.3,124.9 71.5,124.9 71.8,124.8 72,124.8 72.3,124.7 72.5,124.7 72.8,124.6 73,124.6 73.3,124.5 73.5,124.5 73.8,124.4 74,124.4 74.3,124.3 74.5,124.3 74.8,124.2 75,124.2 75.3,124.1 75.5,124.1 75.8,124 76,124 76.3,123.9 76.5,123.9 76.8,123.8 77,123.7 77.3,123.7 77.5,123.6 77.8,123.6 78,123.5 78.3,123.4 78.5,123.4 78.8,123.3 79,123.2 79.3,123.2 79.5,123.1 79.8,123 80,123 80.3,122.9 80.5,122.8 80.8,122.8 81,122.7 81.3,122.6 81.5,122.5 81.8,122.5 82,122.4 82.3,122.3 82.5,122.2 82.8,122.1 83,122 83.3,122 83.5,121.9 83.8,121.8 84,121.7 84.3,121.6 84.5,121.5 84.8,121.4 85,121.3 85.3,121.2 85.5,121.1 85.8,121 86,120.9 86.3,120.8 86.5,120.7 86.8,120.6 87,120.5 87.3,120.4 87.5,120.3 87.8,120.2 88,120 88.3,119.9 88.5,119.8 88.8,119.7 89,119.5 89.3,119.4 89.5,119.3 89.8,119.2 90,119 90.3,118.9 90.5,118.7 90.8,118.6 91,118.4 91.3,118.3 91.5,118.1 91.8,118 92,117.8 92.3,117.7 92.5,117.5 92.8,117.3 93,117.2 93.3,117 93.5,116.8 93.8,116.6 94,116.4 94.3,116.2 94.5,116.1 94.8,115.9 95,115.7 95.3,115.4 95.5,115.2 95.8,115 96,114.8 96.3,114.6 96.5,114.3 96.8,114.1 97,113.9 97.3,113.6 97.5,113.4 97.8,113.1 98,112.8 98.3,112.6 98.5,112.3 98.8,112 99,111.7 99.3,111.4 99.5,111.1 99.8,110.8 100,110.5 100.3,110.1 100.5,109.8 100.8,109.5 101,109.1 101.3,108.7 101.5,108.4 101.8,108 102,107.6 102.3,107.2 102.5,106.8 102.8,106.3 103,105.9 103.3,105.4 103.5,105 103.8,104.5 104,104 104.3,103.5 104.5,103 104.8,102.4 105,101.9 105.3,101.3 105.5,100.7 105.8,100.1 106,99.5 106.3,98.8 106.5,98.2 106.8,97.5 107,96.8 107.3,96 107.5,95.3 107.8,94.5 108,93.7 108.3,92.8 108.5,92 108.8,91.1 109,90.1 109.3,89.2 109.5,88.2 109.8,87.1 110,86.1 110.3,84.9 110.5,83.8 110.8,82.6 111,81.3 111.3,80 111.5,78.6 111.8,77.2 112,75.8 112.3,74.2 112.5,72.6 112.8,70.9 113,69.2 113.3,67.4 113.5,65.4 113.8,63.4 114,61.3 114.3,59.1 114.5,56.8 114.8,54.4 115,51.9 115.3,49.2 115.5,46.4 115.8,43.4 116,40.3 116.3,37 116.5,34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,128.4 35.8,123 36.2,133" fill="currentColor"/>
  <polygon points="117,26 121.3,36.3 111.3,35.6" fill="currentColor"/>
  <polyline points="143.5,34 143.8,37 144,40.3 144.3,43.4 144.5,46.4 144.8,49.2 145,51.9 145.3,54.4 145.5,56.8 145.8,59.1 146,61.3 146.3,63.4 146.5,65.4 146.8,67.4 147,69.2 147.3,70.9 147.5,72.6 147.8,74.2 148,75.8 148.3,77.2 148.5,78.6 148.8,80 149,81.3 149.3,82.6 149.5,83.8 149.8,84.9 150,86.1 150.3,87.1 150.5,88.2 150.8,89.2 151,90.1 151.3,91.1 151.5,92 151.8,92.8 152,93.7 152.3,94.5 152.5,95.3 152.8,96 153,96.8 153.3,97.5 153.5,98.2 153.8,98.8 154,99.5 154.3,100.1 154.5,100.7 154.8,101.3 155,101.9 155.3,102.4 155.5,103 155.8,103.5 156,104 156.3,104.5 156.5,105 156.8,105.4 157,105.9 157.3,106.3 157.5,106.8 157.8,107.2 158,107.6 158.3,108 158.5,108.4 158.8,108.7 159,109.1 159.3,109.5 159.5,109.8 159.8,110.1 160,110.5 160.3,110.8 160.5,111.1 160.8,111.4 161,111.7 161.3,112 161.5,112.3 161.8,112.6 162,112.8 162.3,113.1 162.5,113.4 162.8,113.6 163,113.9 163.3,114.1 163.5,114.3 163.8,114.6 164,114.8 164.3,115 164.5,115.2 164.8,115.4 165,115.7 165.3,115.9 165.5,116.1 165.8,116.2 166,116.4 166.3,116.6 166.5,116.8 166.8,117 167,117.2 167.3,117.3 167.5,117.5 167.8,117.7 168,117.8 168.3,118 168.5,118.1 168.8,118.3 169,118.4 169.3,118.6 169.5,118.7 169.8,118.9 170,119 170.3,119.2 170.5,119.3 170.8,119.4 171,119.5 171.3,119.7 171.5,119.8 171.8,119.9 172,120 172.3,120.2 172.5,120.3 172.8,120.4 173,120.5 173.3,120.6 173.5,120.7 173.8,120.8 174,120.9 174.3,121 174.5,121.1 174.8,121.2 175,121.3 175.3,121.4 175.5,121.5 175.8,121.6 176,121.7 176.3,121.8 176.5,121.9 176.8,122 177,122 177.3,122.1 177.5,122.2 177.8,122.3 178,122.4 178.3,122.5 178.5,122.5 178.8,122.6 179,122.7 179.3,122.8 179.5,122.8 179.8,122.9 180,123 180.3,123 180.5,123.1 180.8,123.2 181,123.2 181.3,123.3 181.5,123.4 181.8,123.4 182,123.5 182.3,123.6 182.5,123.6 182.8,123.7 183,123.7 183.3,123.8 183.5,123.9 183.8,123.9 184,124 184.3,124 184.5,124.1 184.8,124.1 185,124.2 185.3,124.2 185.5,124.3 185.8,124.3 186,124.4 186.3,124.4 186.5,124.5 186.8,124.5 187,124.6 187.3,124.6 187.5,124.7 187.8,124.7 188,124.8 188.3,124.8 188.5,124.9 188.8,124.9 189,125 189.3,125 189.5,125 189.8,125.1 190,125.1 190.3,125.2 190.5,125.2 190.8,125.2 191,125.3 191.3,125.3 191.5,125.4 191.8,125.4 192,125.4 192.3,125.5 192.5,125.5 192.8,125.5 193,125.6 193.3,125.6 193.5,125.6 193.8,125.7 194,125.7 194.3,125.7 194.5,125.8 194.8,125.8 195,125.8 195.3,125.9 195.5,125.9 195.8,125.9 196,126 196.3,126 196.5,126 196.8,126.1 197,126.1 197.3,126.1 197.5,126.1 197.8,126.2 198,126.2 198.3,126.2 198.5,126.3 198.8,126.3 199,126.3 199.3,126.3 199.5,126.4 199.8,126.4 200,126.4 200.3,126.4 200.5,126.5 200.8,126.5 201,126.5 201.3,126.5 201.5,126.6 201.8,126.6 202,126.6 202.3,126.6 202.5,126.7 202.8,126.7 203,126.7 203.3,126.7 203.5,126.7 203.8,126.8 204,126.8 204.3,126.8 204.5,126.8 204.8,126.9 205,126.9 205.3,126.9 205.5,126.9 205.8,126.9 206,127 206.3,127 206.5,127 206.8,127 207,127 207.3,127.1 207.5,127.1 207.8,127.1 208,127.1 208.3,127.1 208.5,127.1 208.8,127.2 209,127.2 209.3,127.2 209.5,127.2 209.8,127.2 210,127.3 210.3,127.3 210.5,127.3 210.8,127.3 211,127.3 211.3,127.3 211.5,127.4 211.8,127.4 212,127.4 212.3,127.4 212.5,127.4 212.8,127.4 213,127.4 213.3,127.5 213.5,127.5 213.8,127.5 214,127.5 214.3,127.5 214.5,127.5 214.8,127.6 215,127.6 215.3,127.6 215.5,127.6 215.8,127.6 216,127.6 216.3,127.6 216.5,127.7 216.8,127.7 217,127.7 217.3,127.7 217.5,127.7 217.8,127.7 218,127.7 218.3,127.7 218.5,127.8 218.8,127.8 219,127.8 219.3,127.8 219.5,127.8 219.8,127.8 220,127.8 220.3,127.8 220.5,127.9 220.8,127.9 221,127.9 221.3,127.9 221.5,127.9 221.8,127.9 222,127.9 222.3,127.9 222.5,127.9 222.8,128 223,128 223.3,128 223.5,128 223.8,128 224,128 224.3,128 224.5,128 224.8,128 225,128.1 225.3,128.1 225.5,128.1 225.8,128.1 226,128.1 226,128.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="143,26 148.7,35.6 138.7,36.3" fill="currentColor"/>
  <polygon points="234,128.4 223.8,133 224.2,123" fill="currentColor"/>
</svg>
</div>

{{< multiplechoice
  question="The domain of function $f$ is $(1,\infty)$ and the range of function $f$ is $(-\infty,-2)$. What are the domain and range of the inverse function?"
  answer="domain $(-\infty,-2)$, range $(1,\infty)$"
  hint="An inverse swaps the two sets: what goes in becomes what comes out."
>}}
domain $(-\infty,-2)$, range $(1,\infty)$
domain $(1,\infty)$, range $(-\infty,-2)$
domain $(-\infty,1)$, range $(-2,\infty)$
domain $(-2,\infty)$, range $(-\infty,1)$
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

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of g: a curve that hugs the horizontal axis to the left, passes through (3, 1), and rises to the right through (5, 3).","xMin":-1,"xMax":6,"yMin":-1,"yMax":4,"xUnit":34,"yUnit":34,"tickLabels":true,"yLabel":"g(x)","curves":[{"kind":"exp","b":1.7320508,"h":3}]}'>
<svg role="img" aria-label="The graph of g: a curve that hugs the horizontal axis to the left, passes through (3, 1), and rises to the right through (5, 3)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 222" width="290" height="222" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="196" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="94" y1="196" x2="94" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="128" y1="196" x2="128" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="162" y1="196" x2="162" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="196" y1="196" x2="196" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="230" y1="196" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="264" y1="196" x2="264" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="196" x2="264" y2="196" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="128" x2="264" y2="128" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="94" x2="264" y2="94" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="60" x2="264" y2="60" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="264" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="162" x2="266" y2="162" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="24" x2="60" y2="198" stroke="currentColor" stroke-width="1"/>
  <polygon points="276,162 266,167 266,157" fill="currentColor"/>
  <polygon points="60,14 65,24 55,24" fill="currentColor"/>
  <polygon points="14,162 24,157 24,167" fill="currentColor"/>
  <polygon points="60,208 55,198 65,198" fill="currentColor"/>
  <text x="274" y="154" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="68" y="24" font-size="13" fill="currentColor" font-style="italic">g(x)</text>
  <line x1="26" y1="159" x2="26" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="177" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="94" y1="159" x2="94" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="94" y="177" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="128" y1="159" x2="128" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="177" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="162" y1="159" x2="162" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="162" y="177" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="196" y1="159" x2="196" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="196" y="177" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="230" y1="159" x2="230" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="230" y="177" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="264" y1="159" x2="264" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="264" y="177" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="57" y1="196" x2="63" y2="196" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="200" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="57" y1="128" x2="63" y2="128" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="132" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="57" y1="94" x2="63" y2="94" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="98" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="57" y1="60" x2="63" y2="60" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="64" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="57" y1="26" x2="63" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="34,157.7 34,157.7 34.3,157.7 34.5,157.7 34.8,157.6 35,157.6 35.3,157.6 35.5,157.6 35.8,157.6 36,157.6 36.3,157.5 36.5,157.5 36.8,157.5 37,157.5 37.3,157.5 37.5,157.5 37.8,157.4 38,157.4 38.3,157.4 38.5,157.4 38.8,157.4 39,157.3 39.3,157.3 39.5,157.3 39.8,157.3 40,157.3 40.3,157.2 40.5,157.2 40.8,157.2 41,157.2 41.3,157.2 41.5,157.1 41.8,157.1 42,157.1 42.3,157.1 42.5,157.1 42.8,157 43,157 43.3,157 43.5,157 43.8,157 44,156.9 44.3,156.9 44.5,156.9 44.8,156.9 45,156.9 45.3,156.8 45.5,156.8 45.8,156.8 46,156.8 46.3,156.8 46.5,156.7 46.8,156.7 47,156.7 47.3,156.7 47.5,156.7 47.8,156.6 48,156.6 48.3,156.6 48.5,156.6 48.8,156.5 49,156.5 49.3,156.5 49.5,156.5 49.8,156.5 50,156.4 50.3,156.4 50.5,156.4 50.8,156.4 51,156.3 51.3,156.3 51.5,156.3 51.8,156.3 52,156.3 52.3,156.2 52.5,156.2 52.8,156.2 53,156.2 53.3,156.1 53.5,156.1 53.8,156.1 54,156.1 54.3,156 54.5,156 54.8,156 55,156 55.3,155.9 55.5,155.9 55.8,155.9 56,155.9 56.3,155.8 56.5,155.8 56.8,155.8 57,155.8 57.3,155.7 57.5,155.7 57.8,155.7 58,155.7 58.3,155.6 58.5,155.6 58.8,155.6 59,155.6 59.3,155.5 59.5,155.5 59.8,155.5 60,155.5 60.3,155.4 60.5,155.4 60.8,155.4 61,155.4 61.3,155.3 61.5,155.3 61.8,155.3 62,155.2 62.3,155.2 62.5,155.2 62.8,155.2 63,155.1 63.3,155.1 63.5,155.1 63.8,155 64,155 64.3,155 64.5,155 64.8,154.9 65,154.9 65.3,154.9 65.5,154.8 65.8,154.8 66,154.8 66.3,154.8 66.5,154.7 66.8,154.7 67,154.7 67.3,154.6 67.5,154.6 67.8,154.6 68,154.6 68.3,154.5 68.5,154.5 68.8,154.5 69,154.4 69.3,154.4 69.5,154.4 69.8,154.3 70,154.3 70.3,154.3 70.5,154.2 70.8,154.2 71,154.2 71.3,154.2 71.5,154.1 71.8,154.1 72,154.1 72.3,154 72.5,154 72.8,154 73,153.9 73.3,153.9 73.5,153.9 73.8,153.8 74,153.8 74.3,153.8 74.5,153.7 74.8,153.7 75,153.7 75.3,153.6 75.5,153.6 75.8,153.6 76,153.5 76.3,153.5 76.5,153.5 76.8,153.4 77,153.4 77.3,153.4 77.5,153.3 77.8,153.3 78,153.2 78.3,153.2 78.5,153.2 78.8,153.1 79,153.1 79.3,153.1 79.5,153 79.8,153 80,153 80.3,152.9 80.5,152.9 80.8,152.9 81,152.8 81.3,152.8 81.5,152.7 81.8,152.7 82,152.7 82.3,152.6 82.5,152.6 82.8,152.6 83,152.5 83.3,152.5 83.5,152.4 83.8,152.4 84,152.4 84.3,152.3 84.5,152.3 84.8,152.2 85,152.2 85.3,152.2 85.5,152.1 85.8,152.1 86,152 86.3,152 86.5,152 86.8,151.9 87,151.9 87.3,151.8 87.5,151.8 87.8,151.8 88,151.7 88.3,151.7 88.5,151.6 88.8,151.6 89,151.5 89.3,151.5 89.5,151.5 89.8,151.4 90,151.4 90.3,151.3 90.5,151.3 90.8,151.2 91,151.2 91.3,151.2 91.5,151.1 91.8,151.1 92,151 92.3,151 92.5,150.9 92.8,150.9 93,150.8 93.3,150.8 93.5,150.8 93.8,150.7 94,150.7 94.3,150.6 94.5,150.6 94.8,150.5 95,150.5 95.3,150.4 95.5,150.4 95.8,150.3 96,150.3 96.3,150.2 96.5,150.2 96.8,150.2 97,150.1 97.3,150.1 97.5,150 97.8,150 98,149.9 98.3,149.9 98.5,149.8 98.8,149.8 99,149.7 99.3,149.7 99.5,149.6 99.8,149.6 100,149.5 100.3,149.5 100.5,149.4 100.8,149.4 101,149.3 101.3,149.3 101.5,149.2 101.8,149.2 102,149.1 102.3,149.1 102.5,149 102.8,148.9 103,148.9 103.3,148.8 103.5,148.8 103.8,148.7 104,148.7 104.3,148.6 104.5,148.6 104.8,148.5 105,148.5 105.3,148.4 105.5,148.4 105.8,148.3 106,148.2 106.3,148.2 106.5,148.1 106.8,148.1 107,148 107.3,148 107.5,147.9 107.8,147.8 108,147.8 108.3,147.7 108.5,147.7 108.8,147.6 109,147.6 109.3,147.5 109.5,147.4 109.8,147.4 110,147.3 110.3,147.3 110.5,147.2 110.8,147.1 111,147.1 111.3,147 111.5,147 111.8,146.9 112,146.8 112.3,146.8 112.5,146.7 112.8,146.7 113,146.6 113.3,146.5 113.5,146.5 113.8,146.4 114,146.3 114.3,146.3 114.5,146.2 114.8,146.2 115,146.1 115.3,146 115.5,146 115.8,145.9 116,145.8 116.3,145.8 116.5,145.7 116.8,145.6 117,145.6 117.3,145.5 117.5,145.4 117.8,145.4 118,145.3 118.3,145.2 118.5,145.2 118.8,145.1 119,145 119.3,145 119.5,144.9 119.8,144.8 120,144.8 120.3,144.7 120.5,144.6 120.8,144.5 121,144.5 121.3,144.4 121.5,144.3 121.8,144.3 122,144.2 122.3,144.1 122.5,144 122.8,144 123,143.9 123.3,143.8 123.5,143.7 123.8,143.7 124,143.6 124.3,143.5 124.5,143.4 124.8,143.4 125,143.3 125.3,143.2 125.5,143.1 125.8,143.1 126,143 126.3,142.9 126.5,142.8 126.8,142.8 127,142.7 127.3,142.6 127.5,142.5 127.8,142.4 128,142.4 128.3,142.3 128.5,142.2 128.8,142.1 129,142.1 129.3,142 129.5,141.9 129.8,141.8 130,141.7 130.3,141.6 130.5,141.6 130.8,141.5 131,141.4 131.3,141.3 131.5,141.2 131.8,141.1 132,141.1 132.3,141 132.5,140.9 132.8,140.8 133,140.7 133.3,140.6 133.5,140.5 133.8,140.5 134,140.4 134.3,140.3 134.5,140.2 134.8,140.1 135,140 135.3,139.9 135.5,139.8 135.8,139.8 136,139.7 136.3,139.6 136.5,139.5 136.8,139.4 137,139.3 137.3,139.2 137.5,139.1 137.8,139 138,138.9 138.3,138.8 138.5,138.7 138.8,138.6 139,138.6 139.3,138.5 139.5,138.4 139.8,138.3 140,138.2 140.3,138.1 140.5,138 140.8,137.9 141,137.8 141.3,137.7 141.5,137.6 141.8,137.5 142,137.4 142.3,137.3 142.5,137.2 142.8,137.1 143,137 143.3,136.9 143.5,136.8 143.8,136.7 144,136.6 144.3,136.5 144.5,136.4 144.8,136.3 145,136.2 145.3,136.1 145.5,136 145.8,135.9 146,135.7 146.3,135.6 146.5,135.5 146.8,135.4 147,135.3 147.3,135.2 147.5,135.1 147.8,135 148,134.9 148.3,134.8 148.5,134.7 148.8,134.6 149,134.4 149.3,134.3 149.5,134.2 149.8,134.1 150,134 150.3,133.9 150.5,133.8 150.8,133.7 151,133.5 151.3,133.4 151.5,133.3 151.8,133.2 152,133.1 152.3,133 152.5,132.8 152.8,132.7 153,132.6 153.3,132.5 153.5,132.4 153.8,132.2 154,132.1 154.3,132 154.5,131.9 154.8,131.8 155,131.6 155.3,131.5 155.5,131.4 155.8,131.3 156,131.1 156.3,131 156.5,130.9 156.8,130.8 157,130.6 157.3,130.5 157.5,130.4 157.8,130.3 158,130.1 158.3,130 158.5,129.9 158.8,129.7 159,129.6 159.3,129.5 159.5,129.3 159.8,129.2 160,129.1 160.3,128.9 160.5,128.8 160.8,128.7 161,128.5 161.3,128.4 161.5,128.3 161.8,128.1 162,128 162.3,127.9 162.5,127.7 162.8,127.6 163,127.4 163.3,127.3 163.5,127.2 163.8,127 164,126.9 164.3,126.7 164.5,126.6 164.8,126.5 165,126.3 165.3,126.2 165.5,126 165.8,125.9 166,125.7 166.3,125.6 166.5,125.4 166.8,125.3 167,125.1 167.3,125 167.5,124.8 167.8,124.7 168,124.5 168.3,124.4 168.5,124.2 168.8,124.1 169,123.9 169.3,123.8 169.5,123.6 169.8,123.5 170,123.3 170.3,123.2 170.5,123 170.8,122.8 171,122.7 171.3,122.5 171.5,122.4 171.8,122.2 172,122 172.3,121.9 172.5,121.7 172.8,121.6 173,121.4 173.3,121.2 173.5,121.1 173.8,120.9 174,120.7 174.3,120.6 174.5,120.4 174.8,120.2 175,120.1 175.3,119.9 175.5,119.7 175.8,119.5 176,119.4 176.3,119.2 176.5,119 176.8,118.9 177,118.7 177.3,118.5 177.5,118.3 177.8,118.1 178,118 178.3,117.8 178.5,117.6 178.8,117.4 179,117.3 179.3,117.1 179.5,116.9 179.8,116.7 180,116.5 180.3,116.3 180.5,116.2 180.8,116 181,115.8 181.3,115.6 181.5,115.4 181.8,115.2 182,115 182.3,114.8 182.5,114.7 182.8,114.5 183,114.3 183.3,114.1 183.5,113.9 183.8,113.7 184,113.5 184.3,113.3 184.5,113.1 184.8,112.9 185,112.7 185.3,112.5 185.5,112.3 185.8,112.1 186,111.9 186.3,111.7 186.5,111.5 186.8,111.3 187,111.1 187.3,110.9 187.5,110.7 187.8,110.5 188,110.3 188.3,110 188.5,109.8 188.8,109.6 189,109.4 189.3,109.2 189.5,109 189.8,108.8 190,108.6 190.3,108.3 190.5,108.1 190.8,107.9 191,107.7 191.3,107.5 191.5,107.2 191.8,107 192,106.8 192.3,106.6 192.5,106.3 192.8,106.1 193,105.9 193.3,105.7 193.5,105.4 193.8,105.2 194,105 194.3,104.8 194.5,104.5 194.8,104.3 195,104.1 195.3,103.8 195.5,103.6 195.8,103.3 196,103.1 196.3,102.9 196.5,102.6 196.8,102.4 197,102.2 197.3,101.9 197.5,101.7 197.8,101.4 198,101.2 198.3,100.9 198.5,100.7 198.8,100.4 199,100.2 199.3,99.9 199.5,99.7 199.8,99.4 200,99.2 200.3,98.9 200.5,98.7 200.8,98.4 201,98.2 201.3,97.9 201.5,97.6 201.8,97.4 202,97.1 202.3,96.9 202.5,96.6 202.8,96.3 203,96.1 203.3,95.8 203.5,95.5 203.8,95.3 204,95 204.3,94.7 204.5,94.4 204.8,94.2 205,93.9 205.3,93.6 205.5,93.3 205.8,93.1 206,92.8 206.3,92.5 206.5,92.2 206.8,91.9 207,91.7 207.3,91.4 207.5,91.1 207.8,90.8 208,90.5 208.3,90.2 208.5,89.9 208.8,89.6 209,89.3 209.3,89.1 209.5,88.8 209.8,88.5 210,88.2 210.3,87.9 210.5,87.6 210.8,87.3 211,87 211.3,86.7 211.5,86.4 211.8,86 212,85.7 212.3,85.4 212.5,85.1 212.8,84.8 213,84.5 213.3,84.2 213.5,83.9 213.8,83.6 214,83.2 214.3,82.9 214.5,82.6 214.8,82.3 215,82 215.3,81.6 215.5,81.3 215.8,81 216,80.6 216.3,80.3 216.5,80 216.8,79.7 217,79.3 217.3,79 217.5,78.7 217.8,78.3 218,78 218.3,77.6 218.5,77.3 218.8,77 219,76.6 219.3,76.3 219.5,75.9 219.8,75.6 220,75.2 220.3,74.9 220.5,74.5 220.8,74.2 221,73.8 221.3,73.4 221.5,73.1 221.8,72.7 222,72.4 222.3,72 222.5,71.6 222.8,71.3 223,70.9 223.3,70.5 223.5,70.2 223.8,69.8 224,69.4 224.3,69 224.5,68.7 224.8,68.3 225,67.9 225.3,67.5 225.5,67.2 225.8,66.8 226,66.4 226.3,66 226.5,65.6 226.8,65.2 227,64.8 227.3,64.4 227.5,64 227.8,63.6 228,63.2 228.3,62.8 228.5,62.4 228.8,62 229,61.6 229.3,61.2 229.5,60.8 229.8,60.4 230,60 230.3,59.6 230.5,59.2 230.8,58.8 231,58.3 231.3,57.9 231.5,57.5 231.8,57.1 232,56.7 232.3,56.2 232.5,55.8 232.8,55.4 233,54.9 233.3,54.5 233.5,54.1 233.8,53.6 234,53.2 234.3,52.8 234.5,52.3 234.8,51.9 235,51.4 235.3,51 235.5,50.5 235.8,50.1 236,49.6 236.3,49.2 236.5,48.7 236.8,48.2 237,47.8 237.3,47.3 237.5,46.9 237.8,46.4 238,45.9 238.3,45.5 238.5,45 238.8,44.5 239,44 239.3,43.6 239.5,43.1 239.8,42.6 240,42.1 240.3,41.6 240.5,41.1 240.8,40.7 241,40.2 241.3,39.7 241.5,39.2 241.8,38.7 242,38.2 242.3,37.7 242.5,37.2 242.8,36.7 243,36.2 243.3,35.7 243.5,35.1 243.8,34.6 244,34.1 244.3,33.6 244.4,33.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,158.2 35.7,152.6 36.3,162.6" fill="currentColor"/>
  <polygon points="247.8,26.1 248,37.3 239,33.1" fill="currentColor"/>
</svg>
</div>

**Solution.** To evaluate $g(3)$, we find 3 on the $x$-axis and find the
corresponding output value on the $y$-axis. The point $(3,1)$ tells us that
$g(3)=1$.

To evaluate $g^{-1}(3)$, recall that by definition $g^{-1}(3)$ means the value
of $x$ for which $g(x)=3$. By looking for the output value 3 on the vertical
axis, we find the point $(5,3)$ on the graph, which means $g(5)=3$, so by
definition, $g^{-1}(3)=5$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The same graph of g with two points marked and dashed lines drawn to the axes: (3, 1), showing g(3) = 1, and (5, 3), showing g(5) = 3 and therefore g inverse of 3 equals 5.","xMin":-1,"xMax":6,"yMin":-1,"yMax":4,"xUnit":34,"yUnit":34,"tickLabels":true,"yLabel":"g(x)","curves":[{"kind":"exp","b":1.7320508,"h":3}],"guides":[[3,1],[5,3]],"points":[{"at":[3,1],"label":"(3, 1)","labelSide":"e"},{"at":[5,3],"label":"(5, 3)","labelSide":"se"}]}'>
<svg role="img" aria-label="The same graph of g with two points marked and dashed lines drawn to the axes: (3, 1), showing g(3) = 1, and (5, 3), showing g(5) = 3 and therefore g inverse of 3 equals 5." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 222" width="290" height="222" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="196" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="94" y1="196" x2="94" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="128" y1="196" x2="128" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="162" y1="196" x2="162" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="196" y1="196" x2="196" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="230" y1="196" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="264" y1="196" x2="264" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="196" x2="264" y2="196" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="128" x2="264" y2="128" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="94" x2="264" y2="94" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="60" x2="264" y2="60" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="264" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="162" x2="266" y2="162" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="24" x2="60" y2="198" stroke="currentColor" stroke-width="1"/>
  <polygon points="276,162 266,167 266,157" fill="currentColor"/>
  <polygon points="60,14 65,24 55,24" fill="currentColor"/>
  <polygon points="14,162 24,157 24,167" fill="currentColor"/>
  <polygon points="60,208 55,198 65,198" fill="currentColor"/>
  <text x="274" y="154" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="68" y="24" font-size="13" fill="currentColor" font-style="italic">g(x)</text>
  <line x1="26" y1="159" x2="26" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="177" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="94" y1="159" x2="94" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="94" y="177" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="128" y1="159" x2="128" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="177" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="162" y1="159" x2="162" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="162" y="177" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="196" y1="159" x2="196" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="196" y="177" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="230" y1="159" x2="230" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="230" y="177" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="264" y1="159" x2="264" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="264" y="177" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="57" y1="196" x2="63" y2="196" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="200" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="57" y1="128" x2="63" y2="128" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="132" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="57" y1="94" x2="63" y2="94" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="98" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="57" y1="60" x2="63" y2="60" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="64" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="57" y1="26" x2="63" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="162" y1="162" x2="162" y2="128" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <line x1="60" y1="128" x2="162" y2="128" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <line x1="230" y1="162" x2="230" y2="60" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <line x1="60" y1="60" x2="230" y2="60" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <polyline points="34,157.7 34,157.7 34.3,157.7 34.5,157.7 34.8,157.6 35,157.6 35.3,157.6 35.5,157.6 35.8,157.6 36,157.6 36.3,157.5 36.5,157.5 36.8,157.5 37,157.5 37.3,157.5 37.5,157.5 37.8,157.4 38,157.4 38.3,157.4 38.5,157.4 38.8,157.4 39,157.3 39.3,157.3 39.5,157.3 39.8,157.3 40,157.3 40.3,157.2 40.5,157.2 40.8,157.2 41,157.2 41.3,157.2 41.5,157.1 41.8,157.1 42,157.1 42.3,157.1 42.5,157.1 42.8,157 43,157 43.3,157 43.5,157 43.8,157 44,156.9 44.3,156.9 44.5,156.9 44.8,156.9 45,156.9 45.3,156.8 45.5,156.8 45.8,156.8 46,156.8 46.3,156.8 46.5,156.7 46.8,156.7 47,156.7 47.3,156.7 47.5,156.7 47.8,156.6 48,156.6 48.3,156.6 48.5,156.6 48.8,156.5 49,156.5 49.3,156.5 49.5,156.5 49.8,156.5 50,156.4 50.3,156.4 50.5,156.4 50.8,156.4 51,156.3 51.3,156.3 51.5,156.3 51.8,156.3 52,156.3 52.3,156.2 52.5,156.2 52.8,156.2 53,156.2 53.3,156.1 53.5,156.1 53.8,156.1 54,156.1 54.3,156 54.5,156 54.8,156 55,156 55.3,155.9 55.5,155.9 55.8,155.9 56,155.9 56.3,155.8 56.5,155.8 56.8,155.8 57,155.8 57.3,155.7 57.5,155.7 57.8,155.7 58,155.7 58.3,155.6 58.5,155.6 58.8,155.6 59,155.6 59.3,155.5 59.5,155.5 59.8,155.5 60,155.5 60.3,155.4 60.5,155.4 60.8,155.4 61,155.4 61.3,155.3 61.5,155.3 61.8,155.3 62,155.2 62.3,155.2 62.5,155.2 62.8,155.2 63,155.1 63.3,155.1 63.5,155.1 63.8,155 64,155 64.3,155 64.5,155 64.8,154.9 65,154.9 65.3,154.9 65.5,154.8 65.8,154.8 66,154.8 66.3,154.8 66.5,154.7 66.8,154.7 67,154.7 67.3,154.6 67.5,154.6 67.8,154.6 68,154.6 68.3,154.5 68.5,154.5 68.8,154.5 69,154.4 69.3,154.4 69.5,154.4 69.8,154.3 70,154.3 70.3,154.3 70.5,154.2 70.8,154.2 71,154.2 71.3,154.2 71.5,154.1 71.8,154.1 72,154.1 72.3,154 72.5,154 72.8,154 73,153.9 73.3,153.9 73.5,153.9 73.8,153.8 74,153.8 74.3,153.8 74.5,153.7 74.8,153.7 75,153.7 75.3,153.6 75.5,153.6 75.8,153.6 76,153.5 76.3,153.5 76.5,153.5 76.8,153.4 77,153.4 77.3,153.4 77.5,153.3 77.8,153.3 78,153.2 78.3,153.2 78.5,153.2 78.8,153.1 79,153.1 79.3,153.1 79.5,153 79.8,153 80,153 80.3,152.9 80.5,152.9 80.8,152.9 81,152.8 81.3,152.8 81.5,152.7 81.8,152.7 82,152.7 82.3,152.6 82.5,152.6 82.8,152.6 83,152.5 83.3,152.5 83.5,152.4 83.8,152.4 84,152.4 84.3,152.3 84.5,152.3 84.8,152.2 85,152.2 85.3,152.2 85.5,152.1 85.8,152.1 86,152 86.3,152 86.5,152 86.8,151.9 87,151.9 87.3,151.8 87.5,151.8 87.8,151.8 88,151.7 88.3,151.7 88.5,151.6 88.8,151.6 89,151.5 89.3,151.5 89.5,151.5 89.8,151.4 90,151.4 90.3,151.3 90.5,151.3 90.8,151.2 91,151.2 91.3,151.2 91.5,151.1 91.8,151.1 92,151 92.3,151 92.5,150.9 92.8,150.9 93,150.8 93.3,150.8 93.5,150.8 93.8,150.7 94,150.7 94.3,150.6 94.5,150.6 94.8,150.5 95,150.5 95.3,150.4 95.5,150.4 95.8,150.3 96,150.3 96.3,150.2 96.5,150.2 96.8,150.2 97,150.1 97.3,150.1 97.5,150 97.8,150 98,149.9 98.3,149.9 98.5,149.8 98.8,149.8 99,149.7 99.3,149.7 99.5,149.6 99.8,149.6 100,149.5 100.3,149.5 100.5,149.4 100.8,149.4 101,149.3 101.3,149.3 101.5,149.2 101.8,149.2 102,149.1 102.3,149.1 102.5,149 102.8,148.9 103,148.9 103.3,148.8 103.5,148.8 103.8,148.7 104,148.7 104.3,148.6 104.5,148.6 104.8,148.5 105,148.5 105.3,148.4 105.5,148.4 105.8,148.3 106,148.2 106.3,148.2 106.5,148.1 106.8,148.1 107,148 107.3,148 107.5,147.9 107.8,147.8 108,147.8 108.3,147.7 108.5,147.7 108.8,147.6 109,147.6 109.3,147.5 109.5,147.4 109.8,147.4 110,147.3 110.3,147.3 110.5,147.2 110.8,147.1 111,147.1 111.3,147 111.5,147 111.8,146.9 112,146.8 112.3,146.8 112.5,146.7 112.8,146.7 113,146.6 113.3,146.5 113.5,146.5 113.8,146.4 114,146.3 114.3,146.3 114.5,146.2 114.8,146.2 115,146.1 115.3,146 115.5,146 115.8,145.9 116,145.8 116.3,145.8 116.5,145.7 116.8,145.6 117,145.6 117.3,145.5 117.5,145.4 117.8,145.4 118,145.3 118.3,145.2 118.5,145.2 118.8,145.1 119,145 119.3,145 119.5,144.9 119.8,144.8 120,144.8 120.3,144.7 120.5,144.6 120.8,144.5 121,144.5 121.3,144.4 121.5,144.3 121.8,144.3 122,144.2 122.3,144.1 122.5,144 122.8,144 123,143.9 123.3,143.8 123.5,143.7 123.8,143.7 124,143.6 124.3,143.5 124.5,143.4 124.8,143.4 125,143.3 125.3,143.2 125.5,143.1 125.8,143.1 126,143 126.3,142.9 126.5,142.8 126.8,142.8 127,142.7 127.3,142.6 127.5,142.5 127.8,142.4 128,142.4 128.3,142.3 128.5,142.2 128.8,142.1 129,142.1 129.3,142 129.5,141.9 129.8,141.8 130,141.7 130.3,141.6 130.5,141.6 130.8,141.5 131,141.4 131.3,141.3 131.5,141.2 131.8,141.1 132,141.1 132.3,141 132.5,140.9 132.8,140.8 133,140.7 133.3,140.6 133.5,140.5 133.8,140.5 134,140.4 134.3,140.3 134.5,140.2 134.8,140.1 135,140 135.3,139.9 135.5,139.8 135.8,139.8 136,139.7 136.3,139.6 136.5,139.5 136.8,139.4 137,139.3 137.3,139.2 137.5,139.1 137.8,139 138,138.9 138.3,138.8 138.5,138.7 138.8,138.6 139,138.6 139.3,138.5 139.5,138.4 139.8,138.3 140,138.2 140.3,138.1 140.5,138 140.8,137.9 141,137.8 141.3,137.7 141.5,137.6 141.8,137.5 142,137.4 142.3,137.3 142.5,137.2 142.8,137.1 143,137 143.3,136.9 143.5,136.8 143.8,136.7 144,136.6 144.3,136.5 144.5,136.4 144.8,136.3 145,136.2 145.3,136.1 145.5,136 145.8,135.9 146,135.7 146.3,135.6 146.5,135.5 146.8,135.4 147,135.3 147.3,135.2 147.5,135.1 147.8,135 148,134.9 148.3,134.8 148.5,134.7 148.8,134.6 149,134.4 149.3,134.3 149.5,134.2 149.8,134.1 150,134 150.3,133.9 150.5,133.8 150.8,133.7 151,133.5 151.3,133.4 151.5,133.3 151.8,133.2 152,133.1 152.3,133 152.5,132.8 152.8,132.7 153,132.6 153.3,132.5 153.5,132.4 153.8,132.2 154,132.1 154.3,132 154.5,131.9 154.8,131.8 155,131.6 155.3,131.5 155.5,131.4 155.8,131.3 156,131.1 156.3,131 156.5,130.9 156.8,130.8 157,130.6 157.3,130.5 157.5,130.4 157.8,130.3 158,130.1 158.3,130 158.5,129.9 158.8,129.7 159,129.6 159.3,129.5 159.5,129.3 159.8,129.2 160,129.1 160.3,128.9 160.5,128.8 160.8,128.7 161,128.5 161.3,128.4 161.5,128.3 161.8,128.1 162,128 162.3,127.9 162.5,127.7 162.8,127.6 163,127.4 163.3,127.3 163.5,127.2 163.8,127 164,126.9 164.3,126.7 164.5,126.6 164.8,126.5 165,126.3 165.3,126.2 165.5,126 165.8,125.9 166,125.7 166.3,125.6 166.5,125.4 166.8,125.3 167,125.1 167.3,125 167.5,124.8 167.8,124.7 168,124.5 168.3,124.4 168.5,124.2 168.8,124.1 169,123.9 169.3,123.8 169.5,123.6 169.8,123.5 170,123.3 170.3,123.2 170.5,123 170.8,122.8 171,122.7 171.3,122.5 171.5,122.4 171.8,122.2 172,122 172.3,121.9 172.5,121.7 172.8,121.6 173,121.4 173.3,121.2 173.5,121.1 173.8,120.9 174,120.7 174.3,120.6 174.5,120.4 174.8,120.2 175,120.1 175.3,119.9 175.5,119.7 175.8,119.5 176,119.4 176.3,119.2 176.5,119 176.8,118.9 177,118.7 177.3,118.5 177.5,118.3 177.8,118.1 178,118 178.3,117.8 178.5,117.6 178.8,117.4 179,117.3 179.3,117.1 179.5,116.9 179.8,116.7 180,116.5 180.3,116.3 180.5,116.2 180.8,116 181,115.8 181.3,115.6 181.5,115.4 181.8,115.2 182,115 182.3,114.8 182.5,114.7 182.8,114.5 183,114.3 183.3,114.1 183.5,113.9 183.8,113.7 184,113.5 184.3,113.3 184.5,113.1 184.8,112.9 185,112.7 185.3,112.5 185.5,112.3 185.8,112.1 186,111.9 186.3,111.7 186.5,111.5 186.8,111.3 187,111.1 187.3,110.9 187.5,110.7 187.8,110.5 188,110.3 188.3,110 188.5,109.8 188.8,109.6 189,109.4 189.3,109.2 189.5,109 189.8,108.8 190,108.6 190.3,108.3 190.5,108.1 190.8,107.9 191,107.7 191.3,107.5 191.5,107.2 191.8,107 192,106.8 192.3,106.6 192.5,106.3 192.8,106.1 193,105.9 193.3,105.7 193.5,105.4 193.8,105.2 194,105 194.3,104.8 194.5,104.5 194.8,104.3 195,104.1 195.3,103.8 195.5,103.6 195.8,103.3 196,103.1 196.3,102.9 196.5,102.6 196.8,102.4 197,102.2 197.3,101.9 197.5,101.7 197.8,101.4 198,101.2 198.3,100.9 198.5,100.7 198.8,100.4 199,100.2 199.3,99.9 199.5,99.7 199.8,99.4 200,99.2 200.3,98.9 200.5,98.7 200.8,98.4 201,98.2 201.3,97.9 201.5,97.6 201.8,97.4 202,97.1 202.3,96.9 202.5,96.6 202.8,96.3 203,96.1 203.3,95.8 203.5,95.5 203.8,95.3 204,95 204.3,94.7 204.5,94.4 204.8,94.2 205,93.9 205.3,93.6 205.5,93.3 205.8,93.1 206,92.8 206.3,92.5 206.5,92.2 206.8,91.9 207,91.7 207.3,91.4 207.5,91.1 207.8,90.8 208,90.5 208.3,90.2 208.5,89.9 208.8,89.6 209,89.3 209.3,89.1 209.5,88.8 209.8,88.5 210,88.2 210.3,87.9 210.5,87.6 210.8,87.3 211,87 211.3,86.7 211.5,86.4 211.8,86 212,85.7 212.3,85.4 212.5,85.1 212.8,84.8 213,84.5 213.3,84.2 213.5,83.9 213.8,83.6 214,83.2 214.3,82.9 214.5,82.6 214.8,82.3 215,82 215.3,81.6 215.5,81.3 215.8,81 216,80.6 216.3,80.3 216.5,80 216.8,79.7 217,79.3 217.3,79 217.5,78.7 217.8,78.3 218,78 218.3,77.6 218.5,77.3 218.8,77 219,76.6 219.3,76.3 219.5,75.9 219.8,75.6 220,75.2 220.3,74.9 220.5,74.5 220.8,74.2 221,73.8 221.3,73.4 221.5,73.1 221.8,72.7 222,72.4 222.3,72 222.5,71.6 222.8,71.3 223,70.9 223.3,70.5 223.5,70.2 223.8,69.8 224,69.4 224.3,69 224.5,68.7 224.8,68.3 225,67.9 225.3,67.5 225.5,67.2 225.8,66.8 226,66.4 226.3,66 226.5,65.6 226.8,65.2 227,64.8 227.3,64.4 227.5,64 227.8,63.6 228,63.2 228.3,62.8 228.5,62.4 228.8,62 229,61.6 229.3,61.2 229.5,60.8 229.8,60.4 230,60 230.3,59.6 230.5,59.2 230.8,58.8 231,58.3 231.3,57.9 231.5,57.5 231.8,57.1 232,56.7 232.3,56.2 232.5,55.8 232.8,55.4 233,54.9 233.3,54.5 233.5,54.1 233.8,53.6 234,53.2 234.3,52.8 234.5,52.3 234.8,51.9 235,51.4 235.3,51 235.5,50.5 235.8,50.1 236,49.6 236.3,49.2 236.5,48.7 236.8,48.2 237,47.8 237.3,47.3 237.5,46.9 237.8,46.4 238,45.9 238.3,45.5 238.5,45 238.8,44.5 239,44 239.3,43.6 239.5,43.1 239.8,42.6 240,42.1 240.3,41.6 240.5,41.1 240.8,40.7 241,40.2 241.3,39.7 241.5,39.2 241.8,38.7 242,38.2 242.3,37.7 242.5,37.2 242.8,36.7 243,36.2 243.3,35.7 243.5,35.1 243.8,34.6 244,34.1 244.3,33.6 244.4,33.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,158.2 35.7,152.6 36.3,162.6" fill="currentColor"/>
  <polygon points="247.8,26.1 248,37.3 239,33.1" fill="currentColor"/>
  <circle cx="162" cy="128" r="4" fill="currentColor"/>
  <circle cx="230" cy="60" r="4" fill="currentColor"/>
  <text x="173.2" y="148.2" font-size="13" fill="currentColor" text-anchor="start">(3, 1)</text>
  <text x="241.2" y="80.2" font-size="13" fill="currentColor" text-anchor="start">(5, 3)</text>
</svg>
</div>

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
about 3.5
about 4.0
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
domain of $f$: $[0,\infty)$; domain of $f^{-1}$: $[2,\infty)$
domain of $f$: $(-\infty,2]$; domain of $f^{-1}$: $[0,\infty)$
domain of $f$: $(-\infty,\infty)$; domain of $f^{-1}$: $(-\infty,\infty)$
{{< /multiplechoice >}}

## Finding inverse functions and their graphs

Now that we can find the inverse of a function, we will explore the graphs of
functions and their inverses. Let us return to the quadratic function
$f(x)=x^2$ restricted to the domain $[0,\infty)$, on which this function is
one-to-one, and graph it as below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals x squared restricted to the domain from 0 onwards: the right half of the parabola only, beginning at the origin and rising to the right.","xMin":-1,"xMax":5,"yMin":-1,"yMax":5,"unit":34,"tickLabels":true,"quadratics":[{"a":1,"from":0,"arrows":"end"}],"points":[{"at":[0,0]}]}'>
<svg role="img" aria-label="The graph of f of x equals x squared restricted to the domain from 0 onwards: the right half of the parabola only, beginning at the origin and rising to the right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="230" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="94" y1="230" x2="94" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="128" y1="230" x2="128" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="162" y1="230" x2="162" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="196" y1="230" x2="196" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="230" y1="230" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="230" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="162" x2="230" y2="162" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="128" x2="230" y2="128" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="94" x2="230" y2="94" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="60" x2="230" y2="60" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="196" x2="232" y2="196" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="24" x2="60" y2="232" stroke="currentColor" stroke-width="1"/>
  <polygon points="242,196 232,201 232,191" fill="currentColor"/>
  <polygon points="60,14 65,24 55,24" fill="currentColor"/>
  <polygon points="14,196 24,191 24,201" fill="currentColor"/>
  <polygon points="60,242 55,232 65,232" fill="currentColor"/>
  <text x="240" y="188" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="68" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="193" x2="26" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="211" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="94" y1="193" x2="94" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="94" y="211" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="128" y1="193" x2="128" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="211" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="162" y1="193" x2="162" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="162" y="211" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="196" y1="193" x2="196" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="196" y="211" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="230" y1="193" x2="230" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="230" y="211" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="57" y1="230" x2="63" y2="230" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="234" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="57" y1="162" x2="63" y2="162" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="166" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="57" y1="128" x2="63" y2="128" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="132" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="57" y1="94" x2="63" y2="94" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="98" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="57" y1="60" x2="63" y2="60" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="64" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="57" y1="26" x2="63" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="60,196 60.3,196 60.5,196 60.8,196 61,196 61.3,196 61.5,195.9 61.8,195.9 62,195.9 62.3,195.9 62.5,195.8 62.8,195.8 63,195.7 63.3,195.7 63.5,195.6 63.8,195.6 64,195.5 64.3,195.5 64.5,195.4 64.8,195.3 65,195.3 65.3,195.2 65.5,195.1 65.8,195 66,194.9 66.3,194.9 66.5,194.8 66.8,194.7 67,194.6 67.3,194.5 67.5,194.3 67.8,194.2 68,194.1 68.3,194 68.5,193.9 68.8,193.7 69,193.6 69.3,193.5 69.5,193.3 69.8,193.2 70,193.1 70.3,192.9 70.5,192.8 70.8,192.6 71,192.4 71.3,192.3 71.5,192.1 71.8,191.9 72,191.8 72.3,191.6 72.5,191.4 72.8,191.2 73,191 73.3,190.8 73.5,190.6 73.8,190.4 74,190.2 74.3,190 74.5,189.8 74.8,189.6 75,189.4 75.3,189.2 75.5,188.9 75.8,188.7 76,188.5 76.3,188.2 76.5,188 76.8,187.7 77,187.5 77.3,187.2 77.5,187 77.8,186.7 78,186.5 78.3,186.2 78.5,185.9 78.8,185.7 79,185.4 79.3,185.1 79.5,184.8 79.8,184.5 80,184.2 80.3,183.9 80.5,183.6 80.8,183.3 81,183 81.3,182.7 81.5,182.4 81.8,182.1 82,181.8 82.3,181.4 82.5,181.1 82.8,180.8 83,180.4 83.3,180.1 83.5,179.8 83.8,179.4 84,179.1 84.3,178.7 84.5,178.3 84.8,178 85,177.6 85.3,177.2 85.5,176.9 85.8,176.5 86,176.1 86.3,175.7 86.5,175.3 86.8,175 87,174.6 87.3,174.2 87.5,173.8 87.8,173.4 88,172.9 88.3,172.5 88.5,172.1 88.8,171.7 89,171.3 89.3,170.8 89.5,170.4 89.8,170 90,169.5 90.3,169.1 90.5,168.6 90.8,168.2 91,167.7 91.3,167.3 91.5,166.8 91.8,166.4 92,165.9 92.3,165.4 92.5,164.9 92.8,164.5 93,164 93.3,163.5 93.5,163 93.8,162.5 94,162 94.3,161.5 94.5,161 94.8,160.5 95,160 95.3,159.5 95.5,158.9 95.8,158.4 96,157.9 96.3,157.4 96.5,156.8 96.8,156.3 97,155.7 97.3,155.2 97.5,154.6 97.8,154.1 98,153.5 98.3,153 98.5,152.4 98.8,151.8 99,151.3 99.3,150.7 99.5,150.1 99.8,149.5 100,148.9 100.3,148.4 100.5,147.8 100.8,147.2 101,146.6 101.3,146 101.5,145.3 101.8,144.7 102,144.1 102.3,143.5 102.5,142.9 102.8,142.2 103,141.6 103.3,141 103.5,140.3 103.8,139.7 104,139.1 104.3,138.4 104.5,137.8 104.8,137.1 105,136.4 105.3,135.8 105.5,135.1 105.8,134.4 106,133.8 106.3,133.1 106.5,132.4 106.8,131.7 107,131 107.3,130.3 107.5,129.6 107.8,128.9 108,128.2 108.3,127.5 108.5,126.8 108.8,126.1 109,125.4 109.3,124.7 109.5,123.9 109.8,123.2 110,122.5 110.3,121.7 110.5,121 110.8,120.2 111,119.5 111.3,118.7 111.5,118 111.8,117.2 112,116.5 112.3,115.7 112.5,114.9 112.8,114.2 113,113.4 113.3,112.6 113.5,111.8 113.8,111 114,110.2 114.3,109.4 114.5,108.6 114.8,107.8 115,107 115.3,106.2 115.5,105.4 115.8,104.6 116,103.8 116.3,102.9 116.5,102.1 116.8,101.3 117,100.4 117.3,99.6 117.5,98.8 117.8,97.9 118,97.1 118.3,96.2 118.5,95.3 118.8,94.5 119,93.6 119.3,92.7 119.5,91.9 119.8,91 120,90.1 120.3,89.2 120.5,88.3 120.8,87.5 121,86.6 121.3,85.7 121.5,84.8 121.8,83.9 122,82.9 122.3,82 122.5,81.1 122.8,80.2 123,79.3 123.3,78.3 123.5,77.4 123.8,76.5 124,75.5 124.3,74.6 124.5,73.6 124.8,72.7 125,71.7 125.3,70.8 125.5,69.8 125.8,68.9 126,67.9 126.3,66.9 126.5,65.9 126.8,65 127,64 127.3,63 127.5,62 127.8,61 128,60 128.3,59 128.5,58 128.8,57 129,56 129.3,55 129.5,53.9 129.8,52.9 130,51.9 130.3,50.9 130.5,49.8 130.8,48.8 131,47.7 131.3,46.7 131.5,45.6 131.8,44.6 132,43.5 132.3,42.5 132.5,41.4 132.8,40.3 133,39.3 133.3,38.2 133.5,37.1 133.8,36 134,34.9 134.2,33.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="136,26.1 138.7,37 128.9,34.8" fill="currentColor"/>
  <circle cx="60" cy="196" r="4" fill="currentColor"/>
</svg>
</div>

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

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The right half of the parabola y = x squared together with the square root curve, drawn dashed, and the dashed identity line y = x. Each curve is the mirror image of the other across that line.","xMin":-1,"xMax":5,"yMin":-1,"yMax":5,"unit":34,"tickLabels":true,"quadratics":[{"a":1,"from":0,"arrows":"end"}],"curves":[{"kind":"sqrt","dashed":true,"arrows":"end"}],"lines":[{"slope":1,"intercept":0,"dashed":true,"arrows":false,"label":"y = x","labelAt":0.8}],"points":[{"at":[0,0]}]}'>
<svg role="img" aria-label="The right half of the parabola y = x squared together with the square root curve, drawn dashed, and the dashed identity line y = x. Each curve is the mirror image of the other across that line." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="230" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="94" y1="230" x2="94" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="128" y1="230" x2="128" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="162" y1="230" x2="162" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="196" y1="230" x2="196" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="230" y1="230" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="230" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="162" x2="230" y2="162" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="128" x2="230" y2="128" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="94" x2="230" y2="94" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="60" x2="230" y2="60" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="196" x2="232" y2="196" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="24" x2="60" y2="232" stroke="currentColor" stroke-width="1"/>
  <polygon points="242,196 232,201 232,191" fill="currentColor"/>
  <polygon points="60,14 65,24 55,24" fill="currentColor"/>
  <polygon points="14,196 24,191 24,201" fill="currentColor"/>
  <polygon points="60,242 55,232 65,232" fill="currentColor"/>
  <text x="240" y="188" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="68" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="193" x2="26" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="211" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="94" y1="193" x2="94" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="94" y="211" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="128" y1="193" x2="128" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="211" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="162" y1="193" x2="162" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="162" y="211" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="196" y1="193" x2="196" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="196" y="211" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="230" y1="193" x2="230" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="230" y="211" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="57" y1="230" x2="63" y2="230" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="234" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="57" y1="162" x2="63" y2="162" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="166" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="57" y1="128" x2="63" y2="128" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="132" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="57" y1="94" x2="63" y2="94" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="98" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="57" y1="60" x2="63" y2="60" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="64" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="57" y1="26" x2="63" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="20" y1="236" x2="236" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="60,196 60.3,196 60.5,196 60.8,196 61,196 61.3,196 61.5,195.9 61.8,195.9 62,195.9 62.3,195.9 62.5,195.8 62.8,195.8 63,195.7 63.3,195.7 63.5,195.6 63.8,195.6 64,195.5 64.3,195.5 64.5,195.4 64.8,195.3 65,195.3 65.3,195.2 65.5,195.1 65.8,195 66,194.9 66.3,194.9 66.5,194.8 66.8,194.7 67,194.6 67.3,194.5 67.5,194.3 67.8,194.2 68,194.1 68.3,194 68.5,193.9 68.8,193.7 69,193.6 69.3,193.5 69.5,193.3 69.8,193.2 70,193.1 70.3,192.9 70.5,192.8 70.8,192.6 71,192.4 71.3,192.3 71.5,192.1 71.8,191.9 72,191.8 72.3,191.6 72.5,191.4 72.8,191.2 73,191 73.3,190.8 73.5,190.6 73.8,190.4 74,190.2 74.3,190 74.5,189.8 74.8,189.6 75,189.4 75.3,189.2 75.5,188.9 75.8,188.7 76,188.5 76.3,188.2 76.5,188 76.8,187.7 77,187.5 77.3,187.2 77.5,187 77.8,186.7 78,186.5 78.3,186.2 78.5,185.9 78.8,185.7 79,185.4 79.3,185.1 79.5,184.8 79.8,184.5 80,184.2 80.3,183.9 80.5,183.6 80.8,183.3 81,183 81.3,182.7 81.5,182.4 81.8,182.1 82,181.8 82.3,181.4 82.5,181.1 82.8,180.8 83,180.4 83.3,180.1 83.5,179.8 83.8,179.4 84,179.1 84.3,178.7 84.5,178.3 84.8,178 85,177.6 85.3,177.2 85.5,176.9 85.8,176.5 86,176.1 86.3,175.7 86.5,175.3 86.8,175 87,174.6 87.3,174.2 87.5,173.8 87.8,173.4 88,172.9 88.3,172.5 88.5,172.1 88.8,171.7 89,171.3 89.3,170.8 89.5,170.4 89.8,170 90,169.5 90.3,169.1 90.5,168.6 90.8,168.2 91,167.7 91.3,167.3 91.5,166.8 91.8,166.4 92,165.9 92.3,165.4 92.5,164.9 92.8,164.5 93,164 93.3,163.5 93.5,163 93.8,162.5 94,162 94.3,161.5 94.5,161 94.8,160.5 95,160 95.3,159.5 95.5,158.9 95.8,158.4 96,157.9 96.3,157.4 96.5,156.8 96.8,156.3 97,155.7 97.3,155.2 97.5,154.6 97.8,154.1 98,153.5 98.3,153 98.5,152.4 98.8,151.8 99,151.3 99.3,150.7 99.5,150.1 99.8,149.5 100,148.9 100.3,148.4 100.5,147.8 100.8,147.2 101,146.6 101.3,146 101.5,145.3 101.8,144.7 102,144.1 102.3,143.5 102.5,142.9 102.8,142.2 103,141.6 103.3,141 103.5,140.3 103.8,139.7 104,139.1 104.3,138.4 104.5,137.8 104.8,137.1 105,136.4 105.3,135.8 105.5,135.1 105.8,134.4 106,133.8 106.3,133.1 106.5,132.4 106.8,131.7 107,131 107.3,130.3 107.5,129.6 107.8,128.9 108,128.2 108.3,127.5 108.5,126.8 108.8,126.1 109,125.4 109.3,124.7 109.5,123.9 109.8,123.2 110,122.5 110.3,121.7 110.5,121 110.8,120.2 111,119.5 111.3,118.7 111.5,118 111.8,117.2 112,116.5 112.3,115.7 112.5,114.9 112.8,114.2 113,113.4 113.3,112.6 113.5,111.8 113.8,111 114,110.2 114.3,109.4 114.5,108.6 114.8,107.8 115,107 115.3,106.2 115.5,105.4 115.8,104.6 116,103.8 116.3,102.9 116.5,102.1 116.8,101.3 117,100.4 117.3,99.6 117.5,98.8 117.8,97.9 118,97.1 118.3,96.2 118.5,95.3 118.8,94.5 119,93.6 119.3,92.7 119.5,91.9 119.8,91 120,90.1 120.3,89.2 120.5,88.3 120.8,87.5 121,86.6 121.3,85.7 121.5,84.8 121.8,83.9 122,82.9 122.3,82 122.5,81.1 122.8,80.2 123,79.3 123.3,78.3 123.5,77.4 123.8,76.5 124,75.5 124.3,74.6 124.5,73.6 124.8,72.7 125,71.7 125.3,70.8 125.5,69.8 125.8,68.9 126,67.9 126.3,66.9 126.5,65.9 126.8,65 127,64 127.3,63 127.5,62 127.8,61 128,60 128.3,59 128.5,58 128.8,57 129,56 129.3,55 129.5,53.9 129.8,52.9 130,51.9 130.3,50.9 130.5,49.8 130.8,48.8 131,47.7 131.3,46.7 131.5,45.6 131.8,44.6 132,43.5 132.3,42.5 132.5,41.4 132.8,40.3 133,39.3 133.3,38.2 133.5,37.1 133.8,36 134,34.9 134.2,33.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="136,26.1 138.7,37 128.9,34.8" fill="currentColor"/>
  <polyline points="60,196 60,195.8 60,195.5 60,195.3 60,195 60,194.8 60.1,194.5 60.1,194.3 60.1,194 60.1,193.8 60.2,193.5 60.2,193.3 60.3,193 60.3,192.8 60.4,192.5 60.4,192.3 60.5,192 60.5,191.8 60.6,191.5 60.7,191.3 60.7,191 60.8,190.8 60.9,190.5 61,190.3 61.1,190 61.1,189.8 61.2,189.5 61.3,189.3 61.4,189 61.5,188.8 61.6,188.5 61.8,188.3 61.9,188 62,187.8 62.1,187.5 62.2,187.3 62.4,187 62.5,186.8 62.6,186.5 62.8,186.3 62.9,186 63.1,185.8 63.2,185.5 63.4,185.3 63.5,185 63.7,184.8 63.9,184.5 64,184.3 64.2,184 64.4,183.8 64.6,183.5 64.8,183.3 64.9,183 65.1,182.8 65.3,182.5 65.5,182.3 65.7,182 65.9,181.8 66.1,181.5 66.4,181.3 66.6,181 66.8,180.8 67,180.5 67.3,180.3 67.5,180 67.7,179.8 68,179.5 68.2,179.3 68.5,179 68.7,178.8 69,178.6 69.2,178.3 69.5,178.1 69.7,177.8 70,177.6 70.3,177.3 70.6,177.1 70.8,176.8 71.1,176.6 71.4,176.3 71.7,176.1 72,175.8 72.3,175.6 72.6,175.3 72.9,175.1 73.2,174.8 73.5,174.6 73.8,174.3 74.2,174.1 74.5,173.8 74.8,173.6 75.1,173.3 75.5,173.1 75.8,172.8 76.1,172.6 76.5,172.3 76.8,172.1 77.2,171.8 77.6,171.6 77.9,171.3 78.3,171.1 78.6,170.8 79,170.6 79.4,170.3 79.8,170.1 80.1,169.8 80.5,169.6 80.9,169.3 81.3,169.1 81.7,168.8 82.1,168.6 82.5,168.3 82.9,168.1 83.3,167.8 83.7,167.6 84.2,167.3 84.6,167.1 85,166.8 85.4,166.6 85.9,166.3 86.3,166.1 86.8,165.8 87.2,165.6 87.6,165.3 88.1,165.1 88.6,164.8 89,164.6 89.5,164.3 89.9,164.1 90.4,163.8 90.9,163.6 91.4,163.3 91.8,163.1 92.3,162.8 92.8,162.6 93.3,162.3 93.8,162.1 94.3,161.9 94.8,161.6 95.3,161.4 95.8,161.1 96.3,160.9 96.8,160.6 97.4,160.4 97.9,160.1 98.4,159.9 99,159.6 99.5,159.4 100,159.1 100.6,158.9 101.1,158.6 101.7,158.4 102.2,158.1 102.8,157.9 103.3,157.6 103.9,157.4 104.5,157.1 105,156.9 105.6,156.6 106.2,156.4 106.8,156.1 107.4,155.9 108,155.6 108.6,155.4 109.2,155.1 109.8,154.9 110.4,154.6 111,154.4 111.6,154.1 112.2,153.9 112.8,153.6 113.4,153.4 114.1,153.1 114.7,152.9 115.3,152.6 116,152.4 116.6,152.1 117.3,151.9 117.9,151.6 118.6,151.4 119.2,151.1 119.9,150.9 120.5,150.6 121.2,150.4 121.9,150.1 122.5,149.9 123.2,149.6 123.9,149.4 124.6,149.1 125.3,148.9 126,148.6 126.7,148.4 127.4,148.1 128.1,147.9 128.8,147.6 129.5,147.4 130.2,147.1 130.9,146.9 131.6,146.6 132.4,146.4 133.1,146.1 133.8,145.9 134.6,145.6 135.3,145.4 136.1,145.1 136.8,144.9 137.6,144.7 138.3,144.4 139.1,144.2 139.8,143.9 140.6,143.7 141.4,143.4 142.1,143.2 142.9,142.9 143.7,142.7 144.5,142.4 145.3,142.2 146.1,141.9 146.8,141.7 147.6,141.4 148.4,141.2 149.3,140.9 150.1,140.7 150.9,140.4 151.7,140.2 152.5,139.9 153.3,139.7 154.2,139.4 155,139.2 155.8,138.9 156.7,138.7 157.5,138.4 158.4,138.2 159.2,137.9 160.1,137.7 160.9,137.4 161.8,137.2 162.6,136.9 163.5,136.7 164.4,136.4 165.3,136.2 166.1,135.9 167,135.7 167.9,135.4 168.8,135.2 169.7,134.9 170.6,134.7 171.5,134.4 172.4,134.2 173.3,133.9 174.2,133.7 175.1,133.4 176.1,133.2 177,132.9 177.9,132.7 178.8,132.4 179.8,132.2 180.7,131.9 181.6,131.7 182.6,131.4 183.5,131.2 184.5,130.9 185.4,130.7 186.4,130.4 187.4,130.2 188.3,129.9 189.3,129.7 190.3,129.4 191.3,129.2 192.2,128.9 193.2,128.7 194.2,128.4 195.2,128.2 196.2,128 197.2,127.7 198.2,127.5 199.2,127.2 200.2,127 201.2,126.7 202.3,126.5 203.3,126.2 204.3,126 205.3,125.7 206.4,125.5 207.4,125.2 208.4,125 209.5,124.7 210.5,124.5 211.6,124.2 212.6,124 213.7,123.7 214.8,123.5 215.8,123.2 216.9,123 218,122.7 219,122.5 220.1,122.2 221.1,122" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="228.9,120.2 220.2,127.3 218,117.6" fill="currentColor"/>
  <circle cx="60" cy="196" r="4" fill="currentColor"/>
  <text x="204.1" y="78.5" font-size="13" fill="currentColor" text-anchor="start">y = x</text>
</svg>
</div>

This relationship will be observed for all one-to-one functions, because it is
a result of the function and its inverse swapping inputs and outputs. This is
equivalent to interchanging the roles of the vertical and horizontal axes.

**Example.** Given the graph of $f(x)$ below, sketch a graph of $f^{-1}(x)$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f: a curve that falls steeply near the vertical axis, crosses the horizontal axis at (1, 0), and rises slowly to the right through (4, 2).","xMin":-1,"xMax":6,"yMin":-4,"yMax":4,"xUnit":34,"yUnit":24,"tickLabels":true,"curves":[{"kind":"log","b":2}],"points":[{"at":[1,0],"label":"(1, 0)","labelSide":"se"},{"at":[4,2],"label":"(4, 2)","labelSide":"se"}]}'>
<svg role="img" aria-label="The graph of f: a curve that falls steeply near the vertical axis, crosses the horizontal axis at (1, 0), and rises slowly to the right through (4, 2)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 244" width="290" height="244" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="218" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="94" y1="218" x2="94" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="128" y1="218" x2="128" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="162" y1="218" x2="162" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="196" y1="218" x2="196" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="230" y1="218" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="264" y1="218" x2="264" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="264" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="264" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="264" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="264" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="264" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="264" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="264" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="264" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="122" x2="266" y2="122" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="24" x2="60" y2="220" stroke="currentColor" stroke-width="1"/>
  <polygon points="276,122 266,127 266,117" fill="currentColor"/>
  <polygon points="60,14 65,24 55,24" fill="currentColor"/>
  <polygon points="14,122 24,117 24,127" fill="currentColor"/>
  <polygon points="60,230 55,220 65,220" fill="currentColor"/>
  <text x="274" y="114" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="68" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="119" x2="26" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="137" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="94" y1="119" x2="94" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="94" y="137" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="128" y1="119" x2="128" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="137" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="162" y1="119" x2="162" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="162" y="137" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="196" y1="119" x2="196" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="196" y="137" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="230" y1="119" x2="230" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="230" y="137" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="264" y1="119" x2="264" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="264" y="137" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="57" y1="218" x2="63" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="222" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="57" y1="194" x2="63" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="198" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="57" y1="170" x2="63" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="174" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="57" y1="146" x2="63" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="57" y1="98" x2="63" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="102" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="57" y1="74" x2="63" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="78" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="57" y1="50" x2="63" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="54" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="57" y1="26" x2="63" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="62.7,210 62.7,210 62.7,209.8 62.7,209.5 62.7,209.3 62.8,209 62.8,208.8 62.8,208.5 62.8,208.3 62.8,208 62.9,207.8 62.9,207.5 62.9,207.3 62.9,207 62.9,206.8 63,206.5 63,206.3 63,206 63,205.8 63,205.5 63.1,205.3 63.1,205 63.1,204.8 63.1,204.5 63.2,204.3 63.2,204 63.2,203.8 63.2,203.5 63.3,203.3 63.3,203 63.3,202.8 63.3,202.5 63.3,202.3 63.4,202 63.4,201.8 63.4,201.5 63.4,201.3 63.5,201 63.5,200.8 63.5,200.5 63.5,200.3 63.6,200 63.6,199.8 63.6,199.5 63.7,199.3 63.7,199 63.7,198.8 63.7,198.5 63.8,198.3 63.8,198 63.8,197.8 63.8,197.5 63.9,197.3 63.9,197 63.9,196.8 64,196.5 64,196.3 64,196 64,195.8 64.1,195.5 64.1,195.3 64.1,195 64.2,194.8 64.2,194.5 64.2,194.3 64.3,194 64.3,193.8 64.3,193.5 64.3,193.3 64.4,193 64.4,192.8 64.4,192.5 64.5,192.3 64.5,192 64.5,191.8 64.6,191.5 64.6,191.3 64.6,191 64.7,190.8 64.7,190.5 64.7,190.3 64.8,190 64.8,189.8 64.8,189.5 64.9,189.3 64.9,189 64.9,188.8 65,188.5 65,188.3 65.1,188 65.1,187.8 65.1,187.5 65.2,187.3 65.2,187 65.2,186.8 65.3,186.5 65.3,186.3 65.4,186 65.4,185.8 65.4,185.5 65.5,185.3 65.5,185 65.6,184.8 65.6,184.5 65.6,184.3 65.7,184 65.7,183.8 65.8,183.5 65.8,183.3 65.8,183 65.9,182.8 65.9,182.5 66,182.3 66,182 66.1,181.8 66.1,181.5 66.1,181.3 66.2,181 66.2,180.8 66.3,180.5 66.3,180.3 66.4,180 66.4,179.8 66.5,179.5 66.5,179.3 66.6,179 66.6,178.8 66.6,178.5 66.7,178.3 66.7,178 66.8,177.8 66.8,177.5 66.9,177.3 66.9,177 67,176.8 67,176.5 67.1,176.3 67.1,176 67.2,175.8 67.3,175.5 67.3,175.3 67.4,175 67.4,174.8 67.5,174.5 67.5,174.3 67.6,174 67.6,173.8 67.7,173.5 67.7,173.3 67.8,173 67.9,172.8 67.9,172.5 68,172.3 68,172 68.1,171.8 68.1,171.5 68.2,171.3 68.3,171 68.3,170.8 68.4,170.5 68.4,170.3 68.5,170 68.6,169.8 68.6,169.5 68.7,169.3 68.7,169 68.8,168.8 68.9,168.5 68.9,168.3 69,168 69.1,167.8 69.1,167.5 69.2,167.3 69.3,167 69.3,166.8 69.4,166.5 69.5,166.3 69.5,166 69.6,165.8 69.7,165.5 69.7,165.3 69.8,165 69.9,164.8 70,164.5 70,164.3 70.1,164 70.2,163.8 70.3,163.5 70.3,163.3 70.4,163 70.5,162.8 70.6,162.5 70.6,162.3 70.7,162 70.8,161.8 70.9,161.5 70.9,161.3 71,161 71.1,160.8 71.2,160.5 71.3,160.3 71.3,160 71.4,159.8 71.5,159.5 71.6,159.3 71.7,159 71.8,158.8 71.8,158.5 71.9,158.3 72,158 72.1,157.8 72.2,157.5 72.3,157.3 72.4,157 72.5,156.8 72.6,156.5 72.6,156.3 72.7,156 72.8,155.8 72.9,155.5 73,155.3 73.1,155 73.2,154.8 73.3,154.5 73.4,154.3 73.5,154 73.6,153.8 73.7,153.5 73.8,153.3 73.9,153 74,152.8 74.1,152.5 74.2,152.3 74.3,152 74.4,151.8 74.5,151.5 74.6,151.3 74.7,151 74.8,150.8 74.9,150.5 75,150.3 75.1,150 75.3,149.8 75.4,149.5 75.5,149.3 75.6,149 75.7,148.8 75.8,148.5 75.9,148.3 76,148 76.2,147.8 76.3,147.5 76.4,147.3 76.5,147 76.6,146.8 76.8,146.5 76.9,146.3 77,146 77.1,145.8 77.2,145.5 77.4,145.3 77.5,145 77.6,144.8 77.8,144.5 77.9,144.3 78,144 78.1,143.8 78.3,143.5 78.4,143.3 78.5,143 78.7,142.8 78.8,142.5 78.9,142.3 79.1,142 79.2,141.8 79.4,141.5 79.5,141.3 79.6,141 79.8,140.8 79.9,140.5 80.1,140.3 80.2,140 80.4,139.8 80.5,139.5 80.7,139.3 80.8,139 81,138.8 81.1,138.5 81.3,138.3 81.4,138 81.6,137.8 81.7,137.5 81.9,137.3 82,137 82.2,136.8 82.4,136.5 82.5,136.3 82.7,136 82.9,135.8 83,135.5 83.2,135.3 83.4,135 83.5,134.8 83.7,134.5 83.9,134.3 84,134 84.2,133.8 84.4,133.5 84.6,133.3 84.7,133 84.9,132.8 85.1,132.5 85.3,132.3 85.5,132 85.7,131.8 85.8,131.5 86,131.3 86.2,131 86.4,130.8 86.6,130.5 86.8,130.3 87,130 87.2,129.8 87.4,129.5 87.6,129.3 87.8,129 88,128.8 88.2,128.5 88.4,128.3 88.6,128 88.8,127.8 89,127.5 89.2,127.3 89.4,127 89.6,126.8 89.9,126.5 90.1,126.3 90.3,126 90.5,125.8 90.7,125.5 91,125.3 91.2,125 91.4,124.8 91.6,124.5 91.9,124.3 92.1,124 92.3,123.8 92.6,123.5 92.8,123.3 93,123 93.3,122.8 93.5,122.5 93.8,122.3 94,122 94.2,121.8 94.5,121.5 94.7,121.3 95,121 95.2,120.8 95.5,120.5 95.8,120.3 96,120 96.3,119.8 96.5,119.5 96.8,119.3 97.1,119 97.3,118.8 97.6,118.5 97.9,118.3 98.2,118 98.4,117.8 98.7,117.5 99,117.3 99.3,117 99.6,116.8 99.9,116.5 100.1,116.3 100.4,116 100.7,115.8 101,115.5 101.3,115.3 101.6,115 101.9,114.8 102.2,114.5 102.5,114.3 102.8,114 103.1,113.8 103.5,113.5 103.8,113.3 104.1,113 104.4,112.8 104.7,112.5 105.1,112.3 105.4,112 105.7,111.8 106,111.5 106.4,111.3 106.7,111 107.1,110.8 107.4,110.5 107.7,110.3 108.1,110 108.4,109.8 108.8,109.5 109.1,109.3 109.5,109 109.9,108.8 110.2,108.5 110.6,108.3 110.9,108 111.3,107.8 111.7,107.5 112.1,107.3 112.4,107 112.8,106.8 113.2,106.5 113.6,106.3 114,106 114.4,105.8 114.8,105.5 115.2,105.3 115.6,105 116,104.8 116.4,104.5 116.8,104.3 117.2,104 117.6,103.8 118,103.5 118.4,103.3 118.9,103 119.3,102.8 119.7,102.5 120.1,102.3 120.6,102 121,101.8 121.5,101.5 121.9,101.3 122.4,101 122.8,100.8 123.3,100.5 123.7,100.3 124.2,100 124.6,99.8 125.1,99.5 125.6,99.3 126.1,99 126.5,98.8 127,98.5 127.5,98.3 128,98 128.5,97.8 129,97.5 129.5,97.3 130,97 130.5,96.8 131,96.5 131.5,96.3 132,96 132.6,95.8 133.1,95.5 133.6,95.3 134.2,95 134.7,94.8 135.2,94.5 135.8,94.3 136.3,94 136.9,93.8 137.4,93.5 138,93.3 138.6,93 139.1,92.8 139.7,92.5 140.3,92.3 140.9,92 141.5,91.8 142,91.5 142.6,91.3 143.2,91 143.8,90.8 144.4,90.5 145.1,90.3 145.7,90 146.3,89.8 146.9,89.5 147.6,89.3 148.2,89 148.8,88.8 149.5,88.5 150.1,88.3 150.8,88 151.4,87.8 152.1,87.5 152.8,87.3 153.4,87 154.1,86.8 154.8,86.5 155.5,86.3 156.2,86 156.9,85.8 157.6,85.5 158.3,85.3 159,85 159.7,84.8 160.4,84.5 161.2,84.3 161.9,84 162.6,83.8 163.4,83.5 164.1,83.3 164.9,83 165.6,82.8 166.4,82.5 167.2,82.3 167.9,82 168.7,81.8 169.5,81.5 170.3,81.3 171.1,81 171.9,80.8 172.7,80.5 173.5,80.3 174.4,80 175.2,79.8 176,79.5 176.9,79.3 177.7,79 178.6,78.8 179.4,78.5 180.3,78.3 181.2,78 182,77.8 182.9,77.5 183.8,77.3 184.7,77 185.6,76.8 186.5,76.5 187.4,76.3 188.4,76 189.3,75.8 190.2,75.5 191.2,75.3 192.1,75 193.1,74.8 194.1,74.5 195,74.3 196,74 197,73.8 198,73.5 199,73.3 200,73 201,72.8 202,72.5 203.1,72.3 204.1,72 205.1,71.8 206.2,71.5 207.2,71.3 208.3,71 209.4,70.8 210.5,70.5 211.6,70.3 212.7,70 213.8,69.8 214.9,69.5 216,69.3 217.1,69 218.3,68.8 219.4,68.5 220.6,68.3 221.7,68 222.9,67.8 224.1,67.5 225.3,67.3 226.5,67 227.7,66.8 228.9,66.5 230.1,66.3 231.3,66 232.6,65.8 233.8,65.5 235.1,65.3 236.4,65 237.6,64.8 238.9,64.5 240.2,64.3 241.5,64 242.9,63.8 244.2,63.5 245.5,63.2 246.9,63 248.2,62.8 249.6,62.5 250.9,62.3 252.3,62 253.7,61.7 255.1,61.5 255.9,61.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="62.1,218 57.8,207.7 67.8,208.4" fill="currentColor"/>
  <polygon points="263.8,60 254.8,66.6 253.1,56.8" fill="currentColor"/>
  <circle cx="94" cy="122" r="4" fill="currentColor"/>
  <circle cx="196" cy="74" r="4" fill="currentColor"/>
  <text x="105.2" y="142.2" font-size="13" fill="currentColor" text-anchor="start">(1, 0)</text>
  <text x="207.2" y="94.2" font-size="13" fill="currentColor" text-anchor="start">(4, 2)</text>
</svg>
</div>

**Solution.** This is a one-to-one function, so we will be able to sketch an
inverse. Note that the graph shown has an apparent domain of $(0,\infty)$ and
range of $(-\infty,\infty)$, so the inverse will have a domain of
$(-\infty,\infty)$ and range of $(0,\infty)$.

If we reflect this graph over the line $y=x$, the point $(1,0)$ reflects to
$(0,1)$ and the point $(4,2)$ reflects to $(2,4)$. Sketching the inverse
(dashed) on the same axes as the original graph gives the figure below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The same curve together with its inverse, drawn dashed, and the dashed identity line y = x. The point (1, 0) on the original corresponds to (0, 1) on the inverse, and (4, 2) corresponds to (2, 4); each curve is the mirror image of the other across the line y = x.","xMin":-4,"xMax":6,"yMin":-4,"yMax":6,"xUnit":26,"yUnit":26,"tickLabels":true,"curves":[{"kind":"log","b":2},{"kind":"exp","b":2,"dashed":true}],"lines":[{"slope":1,"intercept":0,"dashed":true,"arrows":false,"label":"y = x","labelAt":0.85}],"points":[{"at":[1,0]},{"at":[4,2]},{"at":[0,1]},{"at":[2,4]}]}'>
<svg role="img" aria-label="The same curve together with its inverse, drawn dashed, and the dashed identity line y = x. The point (1, 0) on the original corresponds to (0, 1) on the inverse, and (4, 2) corresponds to (2, 4); each curve is the mirror image of the other across the line y = x." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 312" width="312" height="312" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="286" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="286" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="286" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="286" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="286" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="286" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="286" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="286" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="260" y1="286" x2="260" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="286" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="286" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="260" x2="286" y2="260" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="234" x2="286" y2="234" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="286" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="286" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="286" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="286" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="286" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="286" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="182" x2="288" y2="182" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="24" x2="130" y2="288" stroke="currentColor" stroke-width="1"/>
  <polygon points="298,182 288,187 288,177" fill="currentColor"/>
  <polygon points="130,14 135,24 125,24" fill="currentColor"/>
  <polygon points="14,182 24,177 24,187" fill="currentColor"/>
  <polygon points="130,298 125,288 135,288" fill="currentColor"/>
  <text x="296" y="174" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="179" x2="26" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="197" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="52" y1="179" x2="52" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="197" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="78" y1="179" x2="78" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="197" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="104" y1="179" x2="104" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="197" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="156" y1="179" x2="156" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="197" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="182" y1="179" x2="182" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="197" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="208" y1="179" x2="208" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="197" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="234" y1="179" x2="234" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="197" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="260" y1="179" x2="260" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="197" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="286" y1="179" x2="286" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="286" y="197" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="127" y1="286" x2="133" y2="286" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="290" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="127" y1="260" x2="133" y2="260" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="264" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="127" y1="234" x2="133" y2="234" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="238" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="127" y1="208" x2="133" y2="208" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="212" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="127" y1="156" x2="133" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="160" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="127" y1="130" x2="133" y2="130" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="134" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="127" y1="104" x2="133" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="108" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="127" y1="78" x2="133" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="82" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="127" y1="52" x2="133" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="56" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="127" y1="26" x2="133" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="20" y1="292" x2="292" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="132,278 132,278 132,277.8 132,277.5 132.1,277.3 132.1,277 132.1,276.8 132.1,276.5 132.1,276.3 132.1,276 132.1,275.8 132.1,275.5 132.2,275.3 132.2,275 132.2,274.8 132.2,274.5 132.2,274.3 132.2,274 132.3,273.8 132.3,273.5 132.3,273.3 132.3,273 132.3,272.8 132.3,272.5 132.3,272.3 132.4,272 132.4,271.8 132.4,271.5 132.4,271.3 132.4,271 132.4,270.8 132.5,270.5 132.5,270.3 132.5,270 132.5,269.8 132.5,269.5 132.5,269.3 132.6,269 132.6,268.8 132.6,268.5 132.6,268.3 132.6,268 132.6,267.8 132.7,267.5 132.7,267.3 132.7,267 132.7,266.8 132.7,266.5 132.8,266.3 132.8,266 132.8,265.8 132.8,265.5 132.8,265.3 132.8,265 132.9,264.8 132.9,264.5 132.9,264.3 132.9,264 132.9,263.8 133,263.5 133,263.3 133,263 133,262.8 133,262.5 133.1,262.3 133.1,262 133.1,261.8 133.1,261.5 133.1,261.3 133.2,261 133.2,260.8 133.2,260.5 133.2,260.3 133.3,260 133.3,259.8 133.3,259.5 133.3,259.3 133.3,259 133.4,258.8 133.4,258.5 133.4,258.3 133.4,258 133.5,257.8 133.5,257.5 133.5,257.3 133.5,257 133.5,256.8 133.6,256.5 133.6,256.3 133.6,256 133.6,255.8 133.7,255.5 133.7,255.3 133.7,255 133.7,254.8 133.8,254.5 133.8,254.3 133.8,254 133.8,253.8 133.9,253.5 133.9,253.3 133.9,253 133.9,252.8 134,252.5 134,252.3 134,252 134,251.8 134.1,251.5 134.1,251.3 134.1,251 134.2,250.8 134.2,250.5 134.2,250.3 134.2,250 134.3,249.8 134.3,249.5 134.3,249.3 134.4,249 134.4,248.8 134.4,248.5 134.4,248.3 134.5,248 134.5,247.8 134.5,247.5 134.6,247.3 134.6,247 134.6,246.8 134.7,246.5 134.7,246.3 134.7,246 134.8,245.8 134.8,245.5 134.8,245.3 134.8,245 134.9,244.8 134.9,244.5 134.9,244.3 135,244 135,243.8 135,243.5 135.1,243.3 135.1,243 135.1,242.8 135.2,242.5 135.2,242.3 135.3,242 135.3,241.8 135.3,241.5 135.4,241.3 135.4,241 135.4,240.8 135.5,240.5 135.5,240.3 135.5,240 135.6,239.8 135.6,239.5 135.7,239.3 135.7,239 135.7,238.8 135.8,238.5 135.8,238.3 135.8,238 135.9,237.8 135.9,237.5 136,237.3 136,237 136,236.8 136.1,236.5 136.1,236.3 136.2,236 136.2,235.8 136.2,235.5 136.3,235.3 136.3,235 136.4,234.8 136.4,234.5 136.5,234.3 136.5,234 136.5,233.8 136.6,233.5 136.6,233.3 136.7,233 136.7,232.8 136.8,232.5 136.8,232.3 136.9,232 136.9,231.8 136.9,231.5 137,231.3 137,231 137.1,230.8 137.1,230.5 137.2,230.3 137.2,230 137.3,229.8 137.3,229.5 137.4,229.3 137.4,229 137.5,228.8 137.5,228.5 137.6,228.3 137.6,228 137.7,227.8 137.7,227.5 137.8,227.3 137.8,227 137.9,226.8 137.9,226.5 138,226.3 138,226 138.1,225.8 138.2,225.5 138.2,225.3 138.3,225 138.3,224.8 138.4,224.5 138.4,224.3 138.5,224 138.5,223.8 138.6,223.5 138.7,223.3 138.7,223 138.8,222.8 138.8,222.5 138.9,222.3 139,222 139,221.8 139.1,221.5 139.1,221.3 139.2,221 139.3,220.8 139.3,220.5 139.4,220.3 139.4,220 139.5,219.8 139.6,219.5 139.6,219.3 139.7,219 139.8,218.8 139.8,218.5 139.9,218.3 140,218 140,217.8 140.1,217.5 140.2,217.3 140.2,217 140.3,216.8 140.4,216.5 140.4,216.3 140.5,216 140.6,215.8 140.6,215.5 140.7,215.3 140.8,215 140.9,214.8 140.9,214.5 141,214.3 141.1,214 141.2,213.8 141.2,213.5 141.3,213.3 141.4,213 141.5,212.8 141.5,212.5 141.6,212.3 141.7,212 141.8,211.8 141.8,211.5 141.9,211.3 142,211 142.1,210.8 142.2,210.5 142.2,210.3 142.3,210 142.4,209.8 142.5,209.5 142.6,209.3 142.7,209 142.7,208.8 142.8,208.5 142.9,208.3 143,208 143.1,207.8 143.2,207.5 143.3,207.3 143.4,207 143.4,206.8 143.5,206.5 143.6,206.3 143.7,206 143.8,205.8 143.9,205.5 144,205.3 144.1,205 144.2,204.8 144.3,204.5 144.4,204.3 144.5,204 144.6,203.8 144.7,203.5 144.8,203.3 144.9,203 145,202.8 145.1,202.5 145.2,202.3 145.3,202 145.4,201.8 145.5,201.5 145.6,201.3 145.7,201 145.8,200.8 145.9,200.5 146,200.3 146.1,200 146.2,199.8 146.3,199.5 146.4,199.3 146.5,199 146.6,198.8 146.7,198.5 146.9,198.3 147,198 147.1,197.8 147.2,197.5 147.3,197.3 147.4,197 147.5,196.8 147.7,196.5 147.8,196.3 147.9,196 148,195.8 148.1,195.5 148.3,195.3 148.4,195 148.5,194.8 148.6,194.5 148.8,194.3 148.9,194 149,193.8 149.1,193.5 149.3,193.3 149.4,193 149.5,192.8 149.7,192.5 149.8,192.3 149.9,192 150,191.8 150.2,191.5 150.3,191.3 150.5,191 150.6,190.8 150.7,190.5 150.9,190.3 151,190 151.1,189.8 151.3,189.5 151.4,189.3 151.6,189 151.7,188.8 151.9,188.5 152,188.3 152.2,188 152.3,187.8 152.5,187.5 152.6,187.3 152.8,187 152.9,186.8 153.1,186.5 153.2,186.3 153.4,186 153.5,185.8 153.7,185.5 153.8,185.3 154,185 154.2,184.8 154.3,184.5 154.5,184.3 154.7,184 154.8,183.8 155,183.5 155.1,183.3 155.3,183 155.5,182.8 155.7,182.5 155.8,182.3 156,182 156.2,181.8 156.3,181.5 156.5,181.3 156.7,181 156.9,180.8 157.1,180.5 157.2,180.3 157.4,180 157.6,179.8 157.8,179.5 158,179.3 158.2,179 158.4,178.8 158.5,178.5 158.7,178.3 158.9,178 159.1,177.8 159.3,177.5 159.5,177.3 159.7,177 159.9,176.8 160.1,176.5 160.3,176.3 160.5,176 160.7,175.8 160.9,175.5 161.1,175.3 161.3,175 161.5,174.8 161.8,174.5 162,174.3 162.2,174 162.4,173.8 162.6,173.5 162.8,173.3 163.1,173 163.3,172.8 163.5,172.5 163.7,172.3 163.9,172 164.2,171.8 164.4,171.5 164.6,171.3 164.9,171 165.1,170.8 165.3,170.5 165.6,170.3 165.8,170 166,169.8 166.3,169.5 166.5,169.3 166.8,169 167,168.8 167.3,168.5 167.5,168.3 167.8,168 168,167.8 168.3,167.5 168.5,167.3 168.8,167 169,166.8 169.3,166.5 169.6,166.3 169.8,166 170.1,165.8 170.4,165.5 170.6,165.3 170.9,165 171.2,164.8 171.5,164.5 171.7,164.3 172,164 172.3,163.8 172.6,163.5 172.9,163.3 173.1,163 173.4,162.8 173.7,162.5 174,162.3 174.3,162 174.6,161.8 174.9,161.5 175.2,161.3 175.5,161 175.8,160.8 176.1,160.5 176.4,160.3 176.7,160 177.1,159.8 177.4,159.5 177.7,159.3 178,159 178.3,158.8 178.6,158.5 179,158.3 179.3,158 179.6,157.8 180,157.5 180.3,157.3 180.6,157 181,156.8 181.3,156.5 181.7,156.3 182,156 182.3,155.8 182.7,155.5 183.1,155.3 183.4,155 183.8,154.8 184.1,154.5 184.5,154.3 184.8,154 185.2,153.8 185.6,153.5 186,153.3 186.3,153 186.7,152.8 187.1,152.5 187.5,152.3 187.9,152 188.2,151.8 188.6,151.5 189,151.3 189.4,151 189.8,150.8 190.2,150.5 190.6,150.3 191,150 191.4,149.8 191.8,149.5 192.3,149.3 192.7,149 193.1,148.8 193.5,148.5 193.9,148.3 194.4,148 194.8,147.8 195.2,147.5 195.7,147.3 196.1,147 196.5,146.8 197,146.5 197.4,146.3 197.9,146 198.3,145.8 198.8,145.5 199.3,145.3 199.7,145 200.2,144.8 200.7,144.5 201.1,144.3 201.6,144 202.1,143.8 202.6,143.5 203.1,143.3 203.5,143 204,142.8 204.5,142.5 205,142.3 205.5,142 206,141.8 206.5,141.5 207.1,141.3 207.6,141 208.1,140.8 208.6,140.5 209.1,140.3 209.7,140 210.2,139.8 210.7,139.5 211.3,139.3 211.8,139 212.4,138.8 212.9,138.5 213.5,138.3 214,138 214.6,137.8 215.2,137.5 215.7,137.3 216.3,137 216.9,136.8 217.5,136.5 218,136.3 218.6,136 219.2,135.8 219.8,135.5 220.4,135.3 221,135 221.6,134.8 222.2,134.5 222.9,134.3 223.5,134 224.1,133.8 224.7,133.5 225.4,133.3 226,133 226.6,132.8 227.3,132.5 227.9,132.3 228.6,132 229.3,131.8 229.9,131.5 230.6,131.3 231.3,131 231.9,130.8 232.6,130.5 233.3,130.3 234,130 234.7,129.8 235.4,129.5 236.1,129.3 236.8,129 237.5,128.8 238.2,128.5 239,128.3 239.7,128 240.4,127.8 241.2,127.5 241.9,127.3 242.7,127 243.4,126.8 244.2,126.5 244.9,126.3 245.7,126 246.5,125.8 247.3,125.5 248,125.3 248.8,125 249.6,124.8 250.4,124.5 251.2,124.3 252,124 252.9,123.8 253.7,123.5 254.5,123.2 255.3,123 256.2,122.8 257,122.5 257.9,122.3 258.7,122 259.6,121.8 260.5,121.5 261.3,121.3 262.2,121 263.1,120.8 264,120.5 264.9,120.3 265.8,120 266.7,119.8 267.6,119.5 268.5,119.3 269.4,119 270.4,118.8 271.3,118.5 272.3,118.3 273.2,118 274.2,117.8 275.1,117.5 276.1,117.3 277.1,117 277.4,116.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="131.6,286 127.1,275.8 137.1,276.3" fill="currentColor"/>
  <polygon points="285.1,115 276.6,122.3 274.2,112.6" fill="currentColor"/>
  <polyline points="34,180 34,180 34.3,180 34.5,180 34.8,179.9 35,179.9 35.3,179.9 35.5,179.9 35.8,179.9 36,179.9 36.3,179.9 36.5,179.9 36.8,179.8 37,179.8 37.3,179.8 37.5,179.8 37.8,179.8 38,179.8 38.3,179.7 38.5,179.7 38.8,179.7 39,179.7 39.3,179.7 39.5,179.7 39.8,179.7 40,179.6 40.3,179.6 40.5,179.6 40.8,179.6 41,179.6 41.3,179.6 41.5,179.5 41.8,179.5 42,179.5 42.3,179.5 42.5,179.5 42.8,179.5 43,179.4 43.3,179.4 43.5,179.4 43.8,179.4 44,179.4 44.3,179.4 44.5,179.3 44.8,179.3 45,179.3 45.3,179.3 45.5,179.3 45.8,179.2 46,179.2 46.3,179.2 46.5,179.2 46.8,179.2 47,179.2 47.3,179.1 47.5,179.1 47.8,179.1 48,179.1 48.3,179.1 48.5,179 48.8,179 49,179 49.3,179 49.5,179 49.8,178.9 50,178.9 50.3,178.9 50.5,178.9 50.8,178.9 51,178.8 51.3,178.8 51.5,178.8 51.8,178.8 52,178.8 52.3,178.7 52.5,178.7 52.8,178.7 53,178.7 53.3,178.6 53.5,178.6 53.8,178.6 54,178.6 54.3,178.5 54.5,178.5 54.8,178.5 55,178.5 55.3,178.5 55.5,178.4 55.8,178.4 56,178.4 56.3,178.4 56.5,178.3 56.8,178.3 57,178.3 57.3,178.3 57.5,178.2 57.8,178.2 58,178.2 58.3,178.2 58.5,178.1 58.8,178.1 59,178.1 59.3,178.1 59.5,178 59.8,178 60,178 60.3,178 60.5,177.9 60.8,177.9 61,177.9 61.3,177.8 61.5,177.8 61.8,177.8 62,177.8 62.3,177.7 62.5,177.7 62.8,177.7 63,177.6 63.3,177.6 63.5,177.6 63.8,177.6 64,177.5 64.3,177.5 64.5,177.5 64.8,177.4 65,177.4 65.3,177.4 65.5,177.3 65.8,177.3 66,177.3 66.3,177.2 66.5,177.2 66.8,177.2 67,177.2 67.3,177.1 67.5,177.1 67.8,177.1 68,177 68.3,177 68.5,177 68.8,176.9 69,176.9 69.3,176.9 69.5,176.8 69.8,176.8 70,176.7 70.3,176.7 70.5,176.7 70.8,176.6 71,176.6 71.3,176.6 71.5,176.5 71.8,176.5 72,176.5 72.3,176.4 72.5,176.4 72.8,176.3 73,176.3 73.3,176.3 73.5,176.2 73.8,176.2 74,176.2 74.3,176.1 74.5,176.1 74.8,176 75,176 75.3,176 75.5,175.9 75.8,175.9 76,175.8 76.3,175.8 76.5,175.8 76.8,175.7 77,175.7 77.3,175.6 77.5,175.6 77.8,175.5 78,175.5 78.3,175.5 78.5,175.4 78.8,175.4 79,175.3 79.3,175.3 79.5,175.2 79.8,175.2 80,175.1 80.3,175.1 80.5,175.1 80.8,175 81,175 81.3,174.9 81.5,174.9 81.8,174.8 82,174.8 82.3,174.7 82.5,174.7 82.8,174.6 83,174.6 83.3,174.5 83.5,174.5 83.8,174.4 84,174.4 84.3,174.3 84.5,174.3 84.8,174.2 85,174.2 85.3,174.1 85.5,174.1 85.8,174 86,174 86.3,173.9 86.5,173.8 86.8,173.8 87,173.7 87.3,173.7 87.5,173.6 87.8,173.6 88,173.5 88.3,173.5 88.5,173.4 88.8,173.3 89,173.3 89.3,173.2 89.5,173.2 89.8,173.1 90,173 90.3,173 90.5,172.9 90.8,172.9 91,172.8 91.3,172.7 91.5,172.7 91.8,172.6 92,172.6 92.3,172.5 92.5,172.4 92.8,172.4 93,172.3 93.3,172.2 93.5,172.2 93.8,172.1 94,172 94.3,172 94.5,171.9 94.8,171.8 95,171.8 95.3,171.7 95.5,171.6 95.8,171.6 96,171.5 96.3,171.4 96.5,171.4 96.8,171.3 97,171.2 97.3,171.1 97.5,171.1 97.8,171 98,170.9 98.3,170.8 98.5,170.8 98.8,170.7 99,170.6 99.3,170.5 99.5,170.5 99.8,170.4 100,170.3 100.3,170.2 100.5,170.2 100.8,170.1 101,170 101.3,169.9 101.5,169.8 101.8,169.8 102,169.7 102.3,169.6 102.5,169.5 102.8,169.4 103,169.3 103.3,169.3 103.5,169.2 103.8,169.1 104,169 104.3,168.9 104.5,168.8 104.8,168.7 105,168.6 105.3,168.6 105.5,168.5 105.8,168.4 106,168.3 106.3,168.2 106.5,168.1 106.8,168 107,167.9 107.3,167.8 107.5,167.7 107.8,167.6 108,167.5 108.3,167.4 108.5,167.3 108.8,167.2 109,167.1 109.3,167 109.5,166.9 109.8,166.8 110,166.7 110.3,166.6 110.5,166.5 110.8,166.4 111,166.3 111.3,166.2 111.5,166.1 111.8,166 112,165.9 112.3,165.8 112.5,165.7 112.8,165.6 113,165.5 113.3,165.4 113.5,165.3 113.8,165.1 114,165 114.3,164.9 114.5,164.8 114.8,164.7 115,164.6 115.3,164.5 115.5,164.3 115.8,164.2 116,164.1 116.3,164 116.5,163.9 116.8,163.7 117,163.6 117.3,163.5 117.5,163.4 117.8,163.2 118,163.1 118.3,163 118.5,162.9 118.8,162.7 119,162.6 119.3,162.5 119.5,162.3 119.8,162.2 120,162.1 120.3,162 120.5,161.8 120.8,161.7 121,161.5 121.3,161.4 121.5,161.3 121.8,161.1 122,161 122.3,160.9 122.5,160.7 122.8,160.6 123,160.4 123.3,160.3 123.5,160.1 123.8,160 124,159.8 124.3,159.7 124.5,159.5 124.8,159.4 125,159.2 125.3,159.1 125.5,158.9 125.8,158.8 126,158.6 126.3,158.5 126.5,158.3 126.8,158.2 127,158 127.3,157.8 127.5,157.7 127.8,157.5 128,157.3 128.3,157.2 128.5,157 128.8,156.9 129,156.7 129.3,156.5 129.5,156.3 129.8,156.2 130,156 130.3,155.8 130.5,155.7 130.8,155.5 131,155.3 131.3,155.1 131.5,154.9 131.8,154.8 132,154.6 132.3,154.4 132.5,154.2 132.8,154 133,153.8 133.3,153.6 133.5,153.5 133.8,153.3 134,153.1 134.3,152.9 134.5,152.7 134.8,152.5 135,152.3 135.3,152.1 135.5,151.9 135.8,151.7 136,151.5 136.3,151.3 136.5,151.1 136.8,150.9 137,150.7 137.3,150.5 137.5,150.2 137.8,150 138,149.8 138.3,149.6 138.5,149.4 138.8,149.2 139,148.9 139.3,148.7 139.5,148.5 139.8,148.3 140,148.1 140.3,147.8 140.5,147.6 140.8,147.4 141,147.1 141.3,146.9 141.5,146.7 141.8,146.4 142,146.2 142.3,146 142.5,145.7 142.8,145.5 143,145.2 143.3,145 143.5,144.7 143.8,144.5 144,144.2 144.3,144 144.5,143.7 144.8,143.5 145,143.2 145.3,143 145.5,142.7 145.8,142.4 146,142.2 146.3,141.9 146.5,141.6 146.8,141.4 147,141.1 147.3,140.8 147.5,140.5 147.8,140.3 148,140 148.3,139.7 148.5,139.4 148.8,139.1 149,138.9 149.3,138.6 149.5,138.3 149.8,138 150,137.7 150.3,137.4 150.5,137.1 150.8,136.8 151,136.5 151.3,136.2 151.5,135.9 151.8,135.6 152,135.3 152.3,134.9 152.5,134.6 152.8,134.3 153,134 153.3,133.7 153.5,133.4 153.8,133 154,132.7 154.3,132.4 154.5,132 154.8,131.7 155,131.4 155.3,131 155.5,130.7 155.8,130.3 156,130 156.3,129.7 156.5,129.3 156.8,128.9 157,128.6 157.3,128.2 157.5,127.9 157.8,127.5 158,127.2 158.3,126.8 158.5,126.4 158.8,126 159,125.7 159.3,125.3 159.5,124.9 159.8,124.5 160,124.1 160.3,123.8 160.5,123.4 160.8,123 161,122.6 161.3,122.2 161.5,121.8 161.8,121.4 162,121 162.3,120.6 162.5,120.2 162.8,119.7 163,119.3 163.3,118.9 163.5,118.5 163.8,118.1 164,117.6 164.3,117.2 164.5,116.8 164.8,116.3 165,115.9 165.3,115.5 165.5,115 165.8,114.6 166,114.1 166.3,113.7 166.5,113.2 166.8,112.7 167,112.3 167.3,111.8 167.5,111.3 167.8,110.9 168,110.4 168.3,109.9 168.5,109.4 168.8,108.9 169,108.5 169.3,108 169.5,107.5 169.8,107 170,106.5 170.3,106 170.5,105.5 170.8,104.9 171,104.4 171.3,103.9 171.5,103.4 171.8,102.9 172,102.3 172.3,101.8 172.5,101.3 172.8,100.7 173,100.2 173.3,99.6 173.5,99.1 173.8,98.5 174,98 174.3,97.4 174.5,96.8 174.8,96.3 175,95.7 175.3,95.1 175.5,94.5 175.8,94 176,93.4 176.3,92.8 176.5,92.2 176.8,91.6 177,91 177.3,90.4 177.5,89.8 177.8,89.1 178,88.5 178.3,87.9 178.5,87.3 178.8,86.6 179,86 179.3,85.4 179.5,84.7 179.8,84.1 180,83.4 180.3,82.7 180.5,82.1 180.8,81.4 181,80.7 181.3,80.1 181.5,79.4 181.8,78.7 182,78 182.3,77.3 182.5,76.6 182.8,75.9 183,75.2 183.3,74.5 183.5,73.8 183.8,73 184,72.3 184.3,71.6 184.5,70.8 184.8,70.1 185,69.3 185.3,68.6 185.5,67.8 185.8,67.1 186,66.3 186.3,65.5 186.5,64.7 186.8,64 187,63.2 187.3,62.4 187.5,61.6 187.8,60.8 188,60 188.3,59.1 188.5,58.3 188.8,57.5 189,56.7 189.3,55.8 189.5,55 189.8,54.1 190,53.3 190.3,52.4 190.5,51.5 190.8,50.7 191,49.8 191.3,48.9 191.5,48 191.8,47.1 192,46.2 192.3,45.3 192.5,44.4 192.8,43.5 193,42.6 193.3,41.6 193.5,40.7 193.8,39.7 194,38.8 194.3,37.8 194.5,36.9 194.8,35.9 195,34.9 195.1,34.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="26,180.4 35.7,174.9 36.2,184.9" fill="currentColor"/>
  <polygon points="197,26.9 199.4,37.8 189.7,35.4" fill="currentColor"/>
  <circle cx="156" cy="182" r="4" fill="currentColor"/>
  <circle cx="234" cy="130" r="4" fill="currentColor"/>
  <circle cx="130" cy="156" r="4" fill="currentColor"/>
  <circle cx="182" cy="78" r="4" fill="currentColor"/>
  <text x="262.5" y="76.1" font-size="13" fill="currentColor" text-anchor="start">y = x</text>
</svg>
</div>

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

---

<small>This section is adapted from [Precalculus 2e, Section 1.7: Inverse Functions](https://openstax.org/books/precalculus-2e/pages/1-7-inverse-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every figure as an accessible inline SVG, including the reversible function-machine diagram and the domain-and-range diagram, and generated every graph from an explicit formula — the source's unlabelled curves for $g$ and for the reflection example are $g(x)=3^{(x-3)/2}$ and $f(x)=\log_2 x$, fitted to the points the text names; presented Milan's weather forecast and every function table as Markdown tables, giving the forecast temperatures without the source's weather icons; drew the inverse or comparison curve dashed where the source distinguishes it by colour; omitted the media links and end-of-section exercises; converted the practice problems ("Try Its") into interactive exercises with instant feedback, using multiple choice where the answer is a domain, an interval, or a yes/no judgement; and omitted the final sketching practice item, which asks for the pair of graphs the worked example immediately above already shows.</small>
