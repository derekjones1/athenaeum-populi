---
title: Evaluate and Graph Exponential Functions
description: >-
  Evaluating and graphing exponential functions, solving applications modeled by exponential functions, and using compound-interest formulas.
source_section: "10.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph exponential functions
- Solve Exponential equations
- Use exponential models in applications
{{< /callout >}}

## Graph Exponential Functions

The functions we have studied so far do not give us a model for many naturally occurring phenomena. From the growth of populations and the spread of viruses to radioactive decay and compounding interest, the models are very different from what we have studied so far. These models involve exponential functions.

An exponential function is a function of the form $f(x)={a}^{x}$ where $a>0$ and $a\ne 1.$

{{< callout type="info" >}}
**Exponential Function.** An exponential function, where $a>0$ and $a\ne 1,$ is a function of the form

$$
f(x)=a^x.
$$
{{< /callout >}}

Notice that in this function, the variable is the exponent. In our functions so far, the variables were the base.

| Function type | Example | Where the variable appears |
| --- | --- | --- |
| Linear | $f(x)=-3x+4$ | $x$ is a base. |
| Quadratic | $f(x)=2x^2+5x-3$ | $x$ is a base. |
| Exponential | $f(x)=6^x$ | $x$ is an exponent. |

Our definition says $a\ne 1.$ If we let $a=1,$ then $f(x)={a}^{x}$ becomes $f(x)={1}^{x}.$ Since ${1}^{x}=1$ for all real numbers, $f(x)=1.$ This is the constant function.

Our definition also says $a>0.$ If we let a base be negative, say $-4,$ then $f(x)={(-4)}^{x}$ is not a real number when $x=\tfrac{1}{2}.$

$$
\begin{aligned}
f(x)&=(-4)^x\\
f\left(\tfrac{1}{2}\right)&=(-4)^{\frac{1}{2}}\\
f\left(\tfrac{1}{2}\right)&=\sqrt{-4}\quad\text{not a real number}
\end{aligned}
$$

In fact, $f(x)={(-4)}^{x}$ would not be a real number any time $x$ is a fraction with an even denominator. So our definition requires $a>0.$

By graphing a few exponential functions, we will be able to see their unique properties.

**Example 10.10.** On the same coordinate system graph $f(x)={2}^{x}$ and $g(x)={3}^{x}.$

**Solution.**

We will use point plotting to graph the functions.

| $x$ | $f(x)=2^x$ | $(x,f(x))$ | $g(x)=3^x$ | $(x,g(x))$ |
| --- | --- | --- | --- | --- |
| $-2$ | $2^{-2}=\tfrac{1}{2^2}=\tfrac{1}{4}$ | $(-2,\tfrac{1}{4})$ | $3^{-2}=\tfrac{1}{3^2}=\tfrac{1}{9}$ | $(-2,\tfrac{1}{9})$ |
| $-1$ | $2^{-1}=\tfrac{1}{2^1}=\tfrac{1}{2}$ | $(-1,\tfrac{1}{2})$ | $3^{-1}=\tfrac{1}{3^1}=\tfrac{1}{3}$ | $(-1,\tfrac{1}{3})$ |
| $0$ | $2^0=1$ | $(0,1)$ | $3^0=1$ | $(0,1)$ |
| $1$ | $2^1=2$ | $(1,2)$ | $3^1=3$ | $(1,3)$ |
| $2$ | $2^2=4$ | $(2,4)$ | $3^2=9$ | $(2,9)$ |
| $3$ | $2^3=8$ | $(3,8)$ | $3^3=27$ | $(3,27)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graphs of f(x) = 2 to the x (solid) and g(x) = 3 to the x (dashed) on one grid from −4 to 4 on the x-axis and −2 to 6 on the y-axis. Both curves rise from left to right, staying just above the x-axis on the left, and cross at (0, 1). The solid curve passes through (−1, 1/2) and (1, 2); the dashed curve passes through (−1, 1/3) and (1, 3).","xMin":-4,"xMax":4,"yMin":-2,"yMax":6,"tickLabels":true,"curves":[{"kind":"exp","b":2,"from":-3.4},{"kind":"exp","b":3,"dashed":true,"from":-2.0}],"points":[{"at":[-1,0.5],"label":"(−1, 1/2)"},{"at":[-1,0.3333333333333333],"label":"(−1, 1/3)","labelSide":"s","labelNudge":[0,18]},{"at":[0,1],"label":"(0, 1)"},{"at":[1,2],"label":"(1, 2)"},{"at":[1,3],"label":"(1, 3)"}],"texts":[{"at":[2.75,5.2],"text":"2ˣ"},{"at":[0.95,5.6],"text":"3ˣ"}],"unit":56,"tickStep":2}
{{< /apfigure >}}

{{< multiplechoice
  question="Which description matches the graph of $f(x)=4^x$?"
  answer="It passes through $(0,1)$ and $(1,4)$ and approaches $y=0$ to the left."
  hint="Evaluate the function at $x=0$ and $x=1$, and recall the horizontal asymptote of an exponential function."
>}}
It passes through $(0,0)$ and $(1,4)$ and has vertical asymptote $x=0$.
It passes through $(0,1)$ and $(1,\tfrac14)$ and decreases.
It passes through $(0,1)$ and $(1,4)$ and approaches $y=0$ to the left.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which description matches the graph of $g(x)=5^x$?"
  answer="It passes through $(0,1)$ and $(1,5)$ and approaches $y=0$ to the left."
  hint="Evaluate $g(0)$ and $g(1)$, then decide what the outputs approach as $x$ decreases."
>}}
It passes through $(0,1)$ and $(1,5)$ and approaches $y=0$ to the left.
It passes through $(0,1)$ and $(1,\tfrac15)$ and decreases.
It passes through $(0,0)$ and $(1,5)$ and has vertical asymptote $x=0$.
{{< /multiplechoice >}}

If we look at the graphs from the previous Example and Try Its, we can identify some of the properties of exponential functions.

The graphs of $f(x)={2}^{x}$ and $g(x)={3}^{x},$ as well as the graphs of $f(x)={4}^{x}$ and $g(x)={5}^{x},$ all have the same basic shape. This is the shape we expect from an exponential function where $a>1.$

We notice, that for each function, the graph contains the point $(0,1).$ This makes sense because ${a}^{0}=1$ for any $a.$

The graph of each function, $f(x)={a}^{x}$ also contains the point $(1,a).$ The graph of $f(x)={2}^{x}$ contained $(1,2)$ and the graph of $g(x)={3}^{x}$ contained $(1,3).$ This makes sense as ${a}^{1}=a.$

Notice too, the graph of each function $f(x)={a}^{x}$ also contains the point $(-1,\tfrac{1}{a}).$ The graph of $f(x)={2}^{x}$ contained $(-1,\tfrac{1}{2})$ and the graph of $g(x)={3}^{x}$ contained $(-1,\tfrac{1}{3}).$ This makes sense as ${a}^{-1}=\tfrac{1}{a}.$

What is the domain for each function? From the graphs we can see that the domain is the set of all real numbers. There is no restriction on the domain. We write the domain in interval notation as $(-\infty ,\infty ).$

Look at each graph. What is the range of the function? The graph never hits the $x$-axis. The range is all positive numbers. We write the range in interval notation as $(0,\infty ).$

Whenever a graph of a function approaches a line but never touches it, we call that line an asymptote. For the exponential functions we are looking at, the graph approaches the $x$-axis very closely but will never cross it, we call the line $y=0,$ the x-axis, a horizontal asymptote.

{{< callout type="info" >}}
**Properties of the Graph of $f(x)=a^x$ when $a>1$.**

| Property | When $a>1$ |
| --- | --- |
| Domain | $(-\infty ,\infty )$ |
| Range | $(0,\infty )$ |
| x-intercept | None |
| y-intercept | $(0,1)$ |
| Contains | $(1,a),(-1,\tfrac{1}{a})$ |
| Asymptote | $x$-axis, the line $y=0$ |
{{< /callout >}}

Our definition of an exponential function $f(x)={a}^{x}$ says $a>0,$ but the examples and discussion so far has been about functions where $a>1.$ What happens when $0<a<1$? The next example will explore this possibility.

**Example 10.11.** On the same coordinate system, graph $f(x)={(\tfrac{1}{2})}^{x}$ and $g(x)={(\tfrac{1}{3})}^{x}.$

**Solution.**

We will use point plotting to graph the functions.

| $x$ | $f(x)=(\tfrac{1}{2})^x$ | $(x,f(x))$ | $g(x)=(\tfrac{1}{3})^x$ | $(x,g(x))$ |
| --- | --- | --- | --- | --- |
| $-2$ | $(\tfrac{1}{2})^{-2}=2^2=4$ | $(-2,4)$ | $(\tfrac{1}{3})^{-2}=3^2=9$ | $(-2,9)$ |
| $-1$ | $(\tfrac{1}{2})^{-1}=2^1=2$ | $(-1,2)$ | $(\tfrac{1}{3})^{-1}=3^1=3$ | $(-1,3)$ |
| $0$ | $(\tfrac{1}{2})^0=1$ | $(0,1)$ | $(\tfrac{1}{3})^0=1$ | $(0,1)$ |
| $1$ | $(\tfrac{1}{2})^1=\tfrac{1}{2}$ | $(1,\tfrac{1}{2})$ | $(\tfrac{1}{3})^1=\tfrac{1}{3}$ | $(1,\tfrac{1}{3})$ |
| $2$ | $(\tfrac{1}{2})^2=\tfrac{1}{4}$ | $(2,\tfrac{1}{4})$ | $(\tfrac{1}{3})^2=\tfrac{1}{9}$ | $(2,\tfrac{1}{9})$ |
| $3$ | $(\tfrac{1}{2})^3=\tfrac{1}{8}$ | $(3,\tfrac{1}{8})$ | $(\tfrac{1}{3})^3=\tfrac{1}{27}$ | $(3,\tfrac{1}{27})$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graphs of f(x) = (1/2) to the x (solid) and g(x) = (1/3) to the x (dashed) on one grid from −4 to 4 on the x-axis and −2 to 6 on the y-axis. Both curves fall from left to right, staying just above the x-axis on the right, and cross at (0, 1). The solid curve passes through (−1, 2) and (1, 1/2); the dashed curve passes through (−1, 3) and (1, 1/3).","xMin":-4,"xMax":4,"yMin":-2,"yMax":6,"tickLabels":true,"curves":[{"kind":"exp","b":0.5,"to":3.4},{"kind":"exp","b":0.3333333333333333,"dashed":true,"to":2.0}],"points":[{"at":[-1,2],"label":"(−1, 2)"},{"at":[-1,3],"label":"(−1, 3)","labelSide":"ne","labelNudge":[-12,0]},{"at":[0,1],"label":"(0, 1)"},{"at":[1,0.5],"label":"(1, 1/2)"},{"at":[1,0.3333333333333333],"label":"(1, 1/3)","labelSide":"s","labelNudge":[0,18]}],"texts":[{"at":[-3.3,5.2],"text":"(1/2)ˣ"},{"at":[-1.0,5.6],"text":"(1/3)ˣ"}],"unit":56,"tickStep":2}
{{< /apfigure >}}

{{< multiplechoice
  question="Which description matches the graph of $f(x)=(\tfrac14)^x$?"
  answer="It passes through $(0,1)$ and $(1,\tfrac14)$ and approaches $y=0$ to the right."
  hint="Evaluate $f(0)$ and $f(1)$, then decide whether the outputs grow or shrink as $x$ increases."
>}}
It passes through $(0,0)$ and has vertical asymptote $x=0$.
It passes through $(0,1)$ and $(1,4)$ and increases.
It passes through $(0,1)$ and $(1,\tfrac14)$ and approaches $y=0$ to the right.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which description matches the graph of $g(x)=(\tfrac15)^x$?"
  answer="It passes through $(0,1)$ and $(1,\tfrac15)$ and approaches $y=0$ to the right."
  hint="Evaluate $g(0)$ and $g(1)$, then use the fact that $0<\tfrac15<1$."
>}}
It passes through $(0,1)$ and $(1,5)$ and approaches $y=0$ to the left.
It passes through $(0,1)$ and $(1,\tfrac15)$ and approaches $y=0$ to the right.
It passes through $(0,0)$ and decreases toward a vertical asymptote.
{{< /multiplechoice >}}

Now let’s look at the graphs from the previous Example and Try Its so we can now identify some of the properties of exponential functions where $0<a<1.$

The graphs of $f(x)={(\tfrac{1}{2})}^{x}$ and $g(x)={(\tfrac{1}{3})}^{x}$ as well as the graphs of $f(x)={(\tfrac{1}{4})}^{x}$ and $g(x)={(\tfrac{1}{5})}^{x}$ all have the same basic shape. While this is the shape we expect from an exponential function where $0<a<1,$ the graphs go down from left to right while the previous graphs, when $a>1,$ went up from left to right.

We notice that for each function, the graph still contains the point $(0,1).$ This makes sense because ${a}^{0}=1$ for any $a.$

As before, the graph of each function, $f(x)={a}^{x},$ also contains the point $(1,a).$ The graph of $f(x)={(\tfrac{1}{2})}^{x}$ contained $(1,\tfrac{1}{2})$ and the graph of $g(x)={(\tfrac{1}{3})}^{x}$ contained $(1,\tfrac{1}{3}).$ This makes sense as ${a}^{1}=a.$

Notice too that the graph of each function, $f(x)={a}^{x},$ also contains the point $(-1,\tfrac{1}{a}).$ The graph of $f(x)={(\tfrac{1}{2})}^{x}$ contained $(-1,2)$ and the graph of $g(x)={(\tfrac{1}{3})}^{x}$ contained $(-1,3).$ This makes sense as ${a}^{-1}=\tfrac{1}{a}.$

What is the domain and range for each function? From the graphs we can see that the domain is the set of all real numbers and we write the domain in interval notation as $(-\infty ,\infty ).$ Again, the graph never hits the $x$-axis. The range is all positive numbers. We write the range in interval notation as $(0,\infty ).$

We will summarize these properties in the chart below. Which also include when $a>1.$

{{< callout type="info" >}}
**Properties of the Graph of $f(x)=a^x$.**

| Property | When $a>1$ | When $0<a<1$ |
| --- | --- | --- |
| Domain | $(-\infty ,\infty )$ | $(-\infty ,\infty )$ |
| Range | $(0,\infty )$ | $(0,\infty )$ |
| $x$-intercept | none | none |
| $y$-intercept | $(0,1)$ | $(0,1)$ |
| Contains | $(1,a),(-1,\tfrac{1}{a})$ | $(1,a),(-1,\tfrac{1}{a})$ |
| Asymptote | $x$-axis, the line $y=0$ | $x$-axis, the line $y=0$ |
| Basic shape | increasing | decreasing |
{{< /callout >}}

It is important for us to notice that both of these graphs are one-to-one, as they both pass the horizontal line test. This means the exponential function will have an inverse. We will look at this later.

When we graphed quadratic functions, we were able to graph using translation rather than just plotting points. Will that work in graphing exponential functions?

**Example 10.12.** On the same coordinate system graph $f(x)={2}^{x}$ and $g(x)={2}^{x+1}.$

**Solution.**

We will use point plotting to graph the functions.

| $x$ | $f(x)=2^x$ | $(x,f(x))$ | $g(x)=2^{x+1}$ | $(x,g(x))$ |
| --- | --- | --- | --- | --- |
| $-2$ | $2^{-2}=\tfrac{1}{2^2}=\tfrac{1}{4}$ | $(-2,\tfrac{1}{4})$ | $2^{-2+1}=2^{-1}=\tfrac{1}{2}$ | $(-2,\tfrac{1}{2})$ |
| $-1$ | $2^{-1}=\tfrac{1}{2^1}=\tfrac{1}{2}$ | $(-1,\tfrac{1}{2})$ | $2^{-1+1}=2^0=1$ | $(-1,1)$ |
| $0$ | $2^0=1$ | $(0,1)$ | $2^{0+1}=2^1=2$ | $(0,2)$ |
| $1$ | $2^1=2$ | $(1,2)$ | $2^{1+1}=2^2=4$ | $(1,4)$ |
| $2$ | $2^2=4$ | $(2,4)$ | $2^{2+1}=2^3=8$ | $(2,8)$ |
| $3$ | $2^3=8$ | $(3,8)$ | $2^{3+1}=2^4=16$ | $(3,16)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graphs of f(x) = 2 to the x (solid) and g(x) = 2 to the x + 1 (dashed) on one grid from −4 to 4 on the x-axis and −2 to 6 on the y-axis. Both curves rise from left to right, staying just above the x-axis on the left. The solid curve passes through (−1, 1/2), (0, 1), and (1, 2); the dashed curve passes through (−1, 1), (0, 2), and (1, 4), one unit to the left of the solid curve.","xMin":-4,"xMax":4,"yMin":-2,"yMax":6,"tickLabels":true,"curves":[{"kind":"exp","b":2,"from":-2.5},{"kind":"exp","b":2,"h":-1,"dashed":true,"from":-3.5}],"points":[{"at":[-1,0.5],"label":"(−1, 1/2)","labelSide":"s","labelNudge":[0,18]},{"at":[0,1],"label":"(0, 1)"},{"at":[1,2],"label":"(1, 2)"},{"at":[-1,1],"label":"(−1, 1)"},{"at":[0,2],"label":"(0, 2)"},{"at":[1,4],"label":"(1, 4)"}],"texts":[{"at":[2.75,5.2],"text":"2ˣ"},{"at":[0.75,5.6],"text":"2ˣ⁺¹"}],"unit":44,"tickStep":2}
{{< /apfigure >}}

{{< multiplechoice
  question="Compared with $f(x)=2^x$, how is $g(x)=2^{x-1}$ transformed?"
  answer="The graph shifts right 1 unit."
  hint="Find the input that makes the exponent $x-1$ equal to $0$, where $g$ takes the value $f(0)=1$, and compare it with $x=0$."
>}}
The graph shifts right 1 unit.
The graph shifts left 1 unit.
The graph shifts down 1 unit.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Compared with $f(x)=3^x$, how is $g(x)=3^{x+1}$ transformed?"
  answer="The graph shifts left 1 unit."
  hint="Find the input that makes the exponent $x+1$ equal to $0$, where $g$ takes the value $f(0)=1$, and compare it with $x=0$."
>}}
The graph shifts left 1 unit.
The graph shifts right 1 unit.
The graph shifts up 1 unit.
{{< /multiplechoice >}}

Example 10.12 showed that adding one in the exponent, from $f(x)={2}^{x}$ to $g(x)={2}^{x+1}$, causes a horizontal shift of one unit to the left. Recognizing this pattern allows us to graph other functions with the same pattern by translation.

Let’s now consider another situation that might be graphed more easily by translation, once we recognize the pattern.

**Example 10.13.** On the same coordinate system graph $f(x)={3}^{x}$ and $g(x)={3}^{x}-2.$

**Solution.**

We will use point plotting to graph the functions.

| $x$ | $f(x)=3^x$ | $(x,f(x))$ | $g(x)=3^x-2$ | $(x,g(x))$ |
| --- | --- | --- | --- | --- |
| $-2$ | $3^{-2}=\tfrac{1}{9}$ | $(-2,\tfrac{1}{9})$ | $3^{-2}-2=\tfrac{1}{9}-2=-\tfrac{17}{9}$ | $(-2,-\tfrac{17}{9})$ |
| $-1$ | $3^{-1}=\tfrac{1}{3}$ | $(-1,\tfrac{1}{3})$ | $3^{-1}-2=\tfrac{1}{3}-2=-\tfrac{5}{3}$ | $(-1,-\tfrac{5}{3})$ |
| $0$ | $3^0=1$ | $(0,1)$ | $3^0-2=1-2=-1$ | $(0,-1)$ |
| $1$ | $3^1=3$ | $(1,3)$ | $3^1-2=3-2=1$ | $(1,1)$ |
| $2$ | $3^2=9$ | $(2,9)$ | $3^2-2=9-2=7$ | $(2,7)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graphs of f(x) = 3 to the x (solid) and g(x) = 3 to the x minus 2 (dashed) on one grid from −4 to 4 on both axes. Both curves rise from left to right. The solid curve stays just above the x-axis on the left and passes through (−1, 1/3), (0, 1), and (1, 3); the dashed curve stays just above the line y = −2 on the left and passes through (−1, −5/3), (0, −1), and (1, 1), two units below the solid curve.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"tickLabels":true,"curves":[{"kind":"exp","b":3,"from":-3.3},{"kind":"exp","b":3,"k":-2,"dashed":true}],"points":[{"at":[-1,0.3333333333333333],"label":"(−1, 1/3)"},{"at":[0,1],"label":"(0, 1)"},{"at":[1,3],"label":"(1, 3)"},{"at":[-1,-1.6666666666666667],"label":"(−1, −5/3)"},{"at":[0,-1],"label":"(0, −1)"},{"at":[1,1],"label":"(1, 1)"}],"texts":[{"at":[0.3,3.6],"text":"3ˣ"},{"at":[1.8,3.0],"text":"3ˣ − 2"}],"unit":44,"tickStep":2}
{{< /apfigure >}}

{{< multiplechoice
  question="Compared with $f(x)=3^x$, how is $g(x)=3^x+2$ transformed?"
  answer="The graph shifts up 2 units and has horizontal asymptote $y=2$."
  hint="Compare $g(0)$ with $f(0)$, then ask what $g(x)$ approaches as $x$ decreases."
>}}
The graph shifts right 2 units and has horizontal asymptote $y=0$.
The graph shifts down 2 units and has horizontal asymptote $y=-2$.
The graph shifts up 2 units and has horizontal asymptote $y=2$.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Compared with $f(x)=4^x$, how is $g(x)=4^x-2$ transformed?"
  answer="The graph shifts down 2 units and has horizontal asymptote $y=-2$."
  hint="Compare $g(0)$ with $f(0)$, then ask what $g(x)$ approaches as $x$ decreases."
>}}
The graph shifts left 2 units and has horizontal asymptote $y=0$.
The graph shifts down 2 units and has horizontal asymptote $y=-2$.
The graph shifts up 2 units and has horizontal asymptote $y=2$.
{{< /multiplechoice >}}

Example 10.13 showed that subtracting 2, from $f(x)={3}^{x}$ to $g(x)={3}^{x}-2$, causes a vertical shift down two units. The horizontal asymptote also shifts down 2 units. Recognizing this pattern allows us to graph other functions with the same pattern by translation.

All of our exponential functions have had either an integer or a rational number as the base. We will now look at an exponential function with an irrational number as the base.

Before we can look at this exponential function, we need to define the irrational number, e. This number is used as a base in many applications in the sciences and business that are modeled by exponential functions. The number is defined as the value of ${(1+\tfrac{1}{n})}^{n}$ as $n$ gets larger and larger. We say, as $n$ approaches infinity, or increases without bound. The table shows the value of ${(1+\tfrac{1}{n})}^{n}$ for several values of $n.$

| $n$ | $(1+\tfrac{1}{n})^{n}$ |
| --- | --- |
| 1 | 2 |
| 2 | 2.25 |
| 5 | 2.48832 |
| 10 | 2.59374246 |
| 100 | 2.704813829… |
| 1,000 | 2.716923932… |
| 10,000 | 2.718145927… |
| 100,000 | 2.718268237… |
| 1,000,000 | 2.718280469… |
| 1,000,000,000 | 2.718281827… |

If carried out to even larger values of $n,$ we get

$$
e\approx 2.718281828
$$

The number e is like the number $\pi$ in that we use a symbol to represent it because its decimal representation never stops or repeats. The irrational number e is called the natural base.

{{< callout type="info" >}}
**Natural Base $e$.** The number $e$ is defined as the value of
${(1+\tfrac{1}{n})}^{n}$ as $n$ increases without bound:

As $n$ approaches infinity,

$$
e\approx 2.718281828\ldots
$$
{{< /callout >}}

The exponential function whose base is $e,$ $f(x)={e}^{x}$ is called the natural exponential function.

{{< callout type="info" >}}
**Natural Exponential Function.** The natural exponential function is an
exponential function whose base is $e$:

$$
f(x)=e^x.
$$

The domain is $(-\infty ,\infty )$ and the range is $(0,\infty ).$
{{< /callout >}}

Let’s graph the function $f(x)={e}^{x}$ on the same coordinate system as $g(x)={2}^{x}$ and $h(x)={3}^{x}.$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graphs of f(x) = 2 to the x (solid), f(x) = e to the x (dashed), and f(x) = 3 to the x (solid) on one grid from −3 to 3 on the x-axis and −1 to 5 on the y-axis. All three rise from left to right, stay just above the x-axis on the left, and pass through (0, 1). For x greater than 0, the dashed e to the x curve lies between the 2 to the x curve below it and the 3 to the x curve above it; it passes through (−1, 1/e) and (1, e).","xMin":-3,"xMax":3,"yMin":-1,"yMax":5,"tickLabels":true,"curves":[{"kind":"exp","b":2,"from":-2.85},{"kind":"exp","b":2.718281828459045,"dashed":true,"from":-2.0,"to":1.45},{"kind":"exp","b":3,"from":-2.45}],"points":[{"at":[-1,0.36787944117144233],"label":"(−1, 1/e)"},{"at":[0,1],"label":"(0, 1)"},{"at":[1,2.718281828459045],"label":"(1, e)"}],"texts":[{"at":[2.15,3.4],"text":"2ˣ"},{"at":[1.72,4.3],"text":"eˣ"},{"at":[0.75,4.4],"text":"3ˣ"}],"unit":60}
{{< /apfigure >}}

Notice that the graph of $f(x)={e}^{x}$ is “between” the graphs of $g(x)={2}^{x}$ and $h(x)={3}^{x}.$ Does this make sense as $2<e<3$?

## Solve Exponential Equations

Equations that include an exponential expression ${a}^{x}$ are called exponential equations. To solve them we use a property that says as long as $a>0$ and $a\ne 1,$ if ${a}^{x}={a}^{y}$ then it is true that $x=y.$ In other words, in an exponential equation, if the bases are equal then the exponents are equal.

{{< callout type="info" >}}
**One-to-One Property of Exponential Equations.** For $a>0$ and $a\ne 1,$

$$
\text{if }a^x=a^y,\text{ then }x=y.
$$
{{< /callout >}}

To use this property, we must be certain that both sides of the equation are written with the same base.

**Example 10.14.** Solve: ${3}^{2x-5}=27.$

**Solution.**

| Step | Work |
| --- | --- |
| Write both sides of the equation with the same base. | $3^{2x-5}=3^3$ |
| Set the exponents equal. | $2x-5=3$ |
| Solve the equation. | $2x=8$, so $x=4$ |
| Check the solution. | $3^{2(4)-5}=3^3=27\ \checkmark$ |

{{< fillin
  question="Solve $3^{3x-2}=81$."
  answer="2"
  answerForm="decimal"
  answerDisplay="$x=2$"
  hint="Rewrite 81 as a power of 3 and equate the exponents."
>}}

{{< fillin
  question="Solve $7^{x-3}=7$."
  answer="4"
  answerForm="decimal"
  answerDisplay="$x=4$"
  hint="Rewrite the right side as $7^1$."
>}}

The steps are summarized below.

{{< callout type="info" >}}
**How To: Solve an exponential equation.**

1. Write both sides of the equation with the same base, if possible.
2. Write a new equation by setting the exponents equal.
3. Solve the equation.
4. Check the solution.
{{< /callout >}}

In the next example, we will use our properties on exponents.

**Example 10.15.** Solve $\tfrac{{e}^{{x}^{2}}}{{e}^{3}}={e}^{2x}$.

**Solution.**

|  | $\tfrac{{e}^{{x}^{2}}}{{e}^{3}}={e}^{2x}$ |
| --- | --- |
| Use the Property of Exponents: $\tfrac{{a}^{m}}{{a}^{n}}={a}^{m-n}.$ | ${e}^{{x}^{2}-3}={e}^{2x}$ |
| Write a new equation by setting the exponents equal. | ${x}^{2}-3=2x$ |
| Solve the equation. | ${x}^{2}-2x-3=0$ |
|  | $(x-3)(x+1)=0$ |
|  | $x=3,x=-1$ |
| Check the solutions. | $\begin{aligned} x=3:&\quad \frac{e^{3^2}}{e^3}=e^{9-3}=e^6=e^{2(3)},\\ x=-1:&\quad \frac{e^{(-1)^2}}{e^3}=e^{1-3}=e^{-2}=e^{2(-1)}. \end{aligned}$ |

{{< fillin
  question="Solve $\tfrac{e^{x^2}}{e^x}=e^2$. Enter both solutions, separated by a comma."
  answer="-1,2"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$x=-1$ or $x=2$"
  hint="Use the quotient rule for exponents, equate exponents, and solve the quadratic equation."
>}}

{{< fillin
  question="Solve $\tfrac{e^{x^2}}{e^x}=e^6$. Enter both solutions, separated by a comma."
  answer="-2,3"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$x=-2$ or $x=3$"
  hint="Use the quotient rule for exponents on the left side, set the exponents equal, and solve the quadratic equation."
>}}

## Use Exponential Models in Applications

Exponential functions model many situations. If you own a bank account, you have experienced the use of an exponential function. There are two formulas that are used to determine the balance in the account when interest is earned. If a principal, P, is invested at an interest rate, r, for t years, the new balance, A, will depend on how often the interest is compounded. If the interest is compounded n times a year we use the formula $A=P{(1+\tfrac{r}{n})}^{nt}.$ If the interest is compounded continuously, we use the formula $A=P{e}^{rt}.$ These are the formulas for compound interest.

{{< callout type="info" >}}
**Compound Interest.** For a principal, P, invested at an interest rate, r, for t years, the new balance, A, is:

$$
A=P\left(1+\tfrac{r}{n}\right)^{nt}
\quad\text{when interest is compounded }n\text{ times per year},
$$

and

$$
A=Pe^{rt}
\quad\text{when interest is compounded continuously}.
$$
{{< /callout >}}

As you work with the Interest formulas, it is often helpful to identify the values of the variables first and then substitute them into the formula.

**Example 10.16.** A total of \$10,000 was invested in a college fund for a new grandchild. If the interest rate is $5\%,$ how much will be in the account in 18 years by each method of compounding?

ⓐ compound quarterly

ⓑ compound monthly

ⓒ compound continuously

**Solution.**

|  | $A=?$ |
| --- | --- |
| Identify the values of each variable in the formulas. | $P=10{,}000$ |
| Remember to express the percent as a decimal. | $r=0.05$ |
|  | $t=18\text{ years}$ |

ⓐ

| For quarterly compounding, $n=4$. There are 4 quarters in a year. | $A=P{(1+\tfrac{r}{n})}^{nt}$ |
| --- | --- |
| Substitute the values in the formula. | $A=10{,}000{(1+\tfrac{0.05}{4})}^{4\cdot 18}$ |
| Compute the amount. Be careful to consider the order of operations as you enter the expression into your calculator. | $A=24{,}459.20$ dollars |

ⓑ

| For monthly compounding, $n=12$. There are 12 months in a year. | $A=P{(1+\tfrac{r}{n})}^{nt}$ |
| --- | --- |
| Substitute the values in the formula. | $A=10{,}000{(1+\tfrac{0.05}{12})}^{12\cdot 18}$ |
| Compute the amount. | $A=24{,}550.08$ dollars |

ⓒ

| For compounding continuously, | $A=P{e}^{rt}$ |
| --- | --- |
| Substitute the values in the formula. | $A=10{,}000{e}^{0.05\cdot 18}$ |
| Compute the amount. | $A=24{,}596.03$ dollars |

{{< fillin
  question="Angela invested \$15,000 in a savings account. If the interest rate is $4\%,$ how much will be in the account in 10 years if the interest is compounded quarterly? Enter the amount in dollars, rounded to the nearest cent."
  answer="22332.96"
  answerForm="decimal"
  answerDisplay="\$22,332.96"
  hint="Use $A=P(1+\tfrac{r}{n})^{nt}$ with the rate written as a decimal and $n$ the number of compounding periods in a year."
>}}

{{< fillin
  question="Angela invested \$15,000 in a savings account. If the interest rate is $4\%,$ how much will be in the account in 10 years if the interest is compounded monthly? Enter the amount in dollars, rounded to the nearest cent."
  answer="22362.49"
  answerForm="decimal"
  answerDisplay="\$22,362.49"
  hint="Use $A=P(1+\tfrac{r}{n})^{nt}$ with the rate written as a decimal and $n$ the number of compounding periods in a year."
>}}

{{< fillin
  question="Angela invested \$15,000 in a savings account. If the interest rate is $4\%,$ how much will be in the account in 10 years if the interest is compounded continuously? Enter the amount in dollars, rounded to the nearest cent."
  answer="22377.37"
  answerForm="decimal"
  answerDisplay="\$22,377.37"
  hint="Use $A=Pe^{rt}$ with the rate written as a decimal."
>}}

Other topics that are modeled by exponential functions involve growth and decay. Both also use the formula $A=P{e}^{rt}$ we used for the growth of money. For growth and decay, generally we use ${A}_{0},$ as the original amount instead of calling it $P,$ the principal. We see that exponential growth has a positive rate of growth and exponential decay has a negative rate of growth.

{{< callout type="info" >}}
**Exponential Growth and Decay.** For an original amount, ${A}_{0},$ that grows or decays at a rate, r, for a certain time, t, the final amount, A, is:

$$
A=A_0e^{rt}.
$$
{{< /callout >}}

Exponential growth is typically seen in the growth of populations of humans or animals or bacteria. Our next example looks at the growth of a virus.

**Example 10.17.** Chris is a researcher at the Center for Disease Control and Prevention and he is trying to understand the behavior of a new and dangerous virus. He starts his experiment with 100 of the virus that grows continuously at a rate of 25% per hour. He will check on the virus in 24 hours. How many viruses will he find?

**Solution.**

| Identify the values of each variable in the formulas. | $A=?$ |
| --- | --- |
| Be sure to put the percent in decimal form. | ${A}_{0}=100$ |
| Be sure the units match—the rate is per hour and the time is in hours. | $r=0.25\text{/hour}$ |
|  | $t=24\text{ hours}$ |
|  |  |
| Substitute the values in the formula: $A={A}_{0}{e}^{rt}$. | $A=100{e}^{0.25\cdot 24}$ |
| Compute the amount. | $A=40{,}342.88$ |
| Round to the nearest whole virus. | $A=40{,}343$ |
|  | The researcher will find 40,343 viruses. |

{{< fillin
  question="A bacteria culture starts with 50 bacteria and grows continuously at a rate of $15\%$ per hour, so $A=A_0e^{rt}$. How many bacteria will there be after 8 hours? Round to the nearest whole bacterium."
  answer="166"
  answerForm="decimal"
  answerDisplay="166 bacteria"
  hint="Identify $A_0$, the rate $r$ as a decimal, and the time $t$, substitute them into $A=A_0e^{rt}$, and round."
>}}

{{< fillin
  question="A virus culture starts with 100 viruses and grows continuously at a rate of $10\%$ per hour, so $A=A_0e^{rt}$. How many viruses will there be after 24 hours? Round to the nearest whole virus."
  answer="1102"
  answerForm="decimal"
  answerDisplay="$1{,}102$ viruses"
  hint="Identify $A_0$, the rate $r$ as a decimal, and the time $t$, substitute them into $A=A_0e^{rt}$, and round."
>}}

## Key terms

**asymptote** — a line which a graph of a function approaches closely but
never touches. **exponential function** — a function of the form
$f(x)=a^x$, where $a>0$ and $a\ne1$. **natural base** — the number
$e\approx2.718281828\ldots$, defined as the value of
$\left(1+\tfrac{1}{n}\right)^n$ as $n$ increases without bound. **natural exponential function** — the exponential function whose base is
$e$, $f(x)=e^x$. Its domain is $(-\infty,\infty)$ and its range is
$(0,\infty)$.

## Practice

### Graph exponential functions

{{< fillin
  question="What is the $y$-coordinate of the $y$-intercept of the graph of $g(x)=4^{x-1}$?"
  answer="\tfrac{1}{4}"
  answerForm="lowest-terms"
  answerDisplay="$\tfrac{1}{4}$"
  hint="The $y$-intercept is where $x=0$: evaluate $g(0)$ and rewrite the negative power as a fraction."
>}}

{{< graphplot
  question="Graph the horizontal asymptote of $g(x)=2^x+1$."
  answerDisplay="$y=1$"
  ariaLabel="A blank grid from −4 to 4 on the x-axis and −2 to 8 on the y-axis."
  hint="Ask what value $2^x$ approaches as $x$ decreases, then account for the constant added to it."
>}}
{"answer": {"asymptotes": [{"y": 1}]}, "grid": {"xMin": -4, "xMax": 4, "yMin": -2, "yMax": 8}}
{{< /graphplot >}}

### Solve Exponential equations

{{< fillin
  question="Solve $2^{3x-8}=16$."
  answer="4"
  answerForm="decimal"
  answerDisplay="$x=4$"
  hint="Rewrite $16$ as a power of $2$, then equate the exponents."
>}}

{{< fillin
  question="Solve $4^{x^2}=4$. Enter both solutions, separated by a comma."
  answer="-1,1"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$x=-1$ or $x=1$"
  hint="Write the right side as a power of $4$, set the exponents equal, and solve, keeping both signs."
>}}

{{< fillin
  question="Solve $e^{3x}\cdot e^4=e^{10}$."
  answer="2"
  answerForm="decimal"
  answerDisplay="$x=2$"
  hint="Use the Product Property of Exponents to combine the left side into a single power of $e$, then equate exponents."
>}}

### Use exponential models in applications

{{< fillin
  question="Rochelle deposits \$5,000 in an IRA that earns $8\%$ interest compounded continuously. Find the balance after 25 years, rounded to the nearest cent."
  answer="36945.28"
  answerForm="decimal"
  answerDisplay="\$36,945.28"
  hint="Substitute the principal, the rate as a decimal, and the time into $A=Pe^{rt}$."
>}}

{{< fillin
  question="The population of Indonesia has been growing at a continuous rate of $1.12\%$ per year and is currently 258,316,051. If this rate continues, what will the population be in 10 more years? Round to the nearest whole person."
  answer="288929825"
  answerForm="decimal"
  answerDisplay="288,929,825 people"
  hint="Substitute the current population, the rate as a decimal, and the time into $A=A_0e^{rt}$, then round."
>}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 10.2: Evaluate and Graph Exponential Functions](https://openstax.org/books/intermediate-algebra-2e/pages/10-2-evaluate-and-graph-exponential-functions) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted the worked solutions for the web; recreated the point tables of Examples 10.10–10.13 and the table of values of $(1+\tfrac{1}{n})^n$ as markdown tables, and the five graphs as accessible figures that name each curve and draw the second function dashed; corrected the last point of the Example 10.13 table, which prints $(2,8)$, to $(2,7)$; omitted the Be Prepared quiz, the two property sketches, media links, Key Concepts summary, Writing Exercises, self-check reflection, and unselected end-of-section exercises; converted selected practice problems ("Try Its") into interactive exercises with instant feedback, posing each graphing Try It as a choice among descriptions of its graph, splitting the Angela compounding Try It into one exercise per compounding method, and stating that the bacteria and virus cultures grow continuously; and adapted selected end-of-section exercises into an interactive Practice block, asking the two graphing exercises for a $y$-intercept and a horizontal asymptote.</small>
