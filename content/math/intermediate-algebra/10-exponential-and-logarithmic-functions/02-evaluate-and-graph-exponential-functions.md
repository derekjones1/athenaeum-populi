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

Our definition says $a\ne 1.$ If we let $a=1,$ then $f(x)={a}^{x}$ becomes $f(x)={1}^{x}.$ Since ${1}^{x}=1$ for all real numbers, $f(x)={1}^{}.$ This is the constant function.

Our definition also says $a>0.$ If we let a base be negative, say $-4,$ then $f(x)={(-4)}^{x}$ is not a real number when $x=\tfrac{1}{2}.$

In fact, $f(x)={(-4)}^{x}$ would not be a real number any time $x$ is a fraction with an even denominator. So our definition requires $a>0.$

By graphing a few exponential functions, we will be able to see their unique properties.

**Example 10.10.** On the same coordinate system graph $f(x)={2}^{x}$ and $g(x)={3}^{x}.$

**Solution.**

We will use point plotting to graph the functions.

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
  hint="A base greater than 1 gives exponential growth."
>}}
It passes through $(0,1)$ and $(1,5)$ and approaches $y=0$ to the left.
It passes through $(0,1)$ and $(1,\tfrac15)$ and decreases.
It passes through $(0,5)$ and $(1,25)$ and approaches $x=0$.
{{< /multiplechoice >}}

If we look at the graphs from the previous Example and Try Its, we can identify some of the properties of exponential functions.

The graphs of $f(x)={2}^{x}$ and $g(x)={3}^{x},$ as well as the graphs of $f(x)={4}^{x}$ and $g(x)={5}^{x},$ all have the same basic shape. This is the shape we expect from an exponential function where $a>1.$

We notice, that for each function, the graph contains the point $(0,1).$ This make sense because ${a}^{0}=1$ for any a.

The graph of each function, $f(x)={a}^{x}$ also contains the point $(1,a).$ The graph of $f(x)={2}^{x}$ contained $(1,2)$ and the graph of $g(x)={3}^{x}$ contained $(1,3).$ This makes sense as ${a}^{1}=a.$

Notice too, the graph of each function $f(x)={a}^{x}$ also contains the point $(-1,\tfrac{1}{a}).$ The graph of $f(x)={2}^{x}$ contained $(-1,\tfrac{1}{2})$ and the graph of $g(x)={3}^{x}$ contained $(-1,\tfrac{1}{3}).$ This makes sense as ${a}^{-1}=\tfrac{1}{a}.$

What is the domain for each function? From the graphs we can see that the domain is the set of all real numbers. There is no restriction on the domain. We write the domain in interval notation as $(-\infty ,\infty ).$

Look at each graph. What is the range of the function? The graph never hits the $x$-axis. The range is all positive numbers. We write the range in interval notation as $(0,\infty ).$

Whenever a graph of a function approaches a line but never touches it, we call that line an asymptote. For the exponential functions we are looking at, the graph approaches the $x$-axis very closely but will never cross it, we call the line $y=0,$ the x-axis, a horizontal asymptote.

{{< callout type="info" >}}
**Properties of the Graph of f ( x ) = a x f ( x ) = a x when a > 1 a > 1.** | Domain | $(-\infty ,\infty )$ |
| --- | --- |
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

{{< multiplechoice
  question="Which description matches the graph of $f(x)=(\tfrac14)^x$?"
  answer="It passes through $(0,1)$ and $(1,\tfrac14)$ and approaches $y=0$ to the right."
  hint="An exponential function with a base between 0 and 1 decreases."
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

The graphs of $f(x)={(\tfrac{1}{2})}^{x}$ and $g(x)={(\tfrac{1}{3})}^{x}$ as well as the graphs of $f(x)={(\tfrac{1}{4})}^{x}$ and $g(x)={(\tfrac{1}{5})}^{x}$ all have the same basic shape. While this is the shape we expect from an exponential function where $0<a<1,$ the graphs go down from left to right while the previous graphs, when $a>1,$ went from up from left to right.

We notice that for each function, the graph still contains the point (0, 1). This make sense because ${a}^{0}=1$ for any a.

As before, the graph of each function, $f(x)={a}^{x},$ also contains the point $(1,a).$ The graph of $f(x)={(\tfrac{1}{2})}^{x}$ contained $(1,\tfrac{1}{2})$ and the graph of $g(x)={(\tfrac{1}{3})}^{x}$ contained $(1,\tfrac{1}{3}).$ This makes sense as ${a}^{1}=a.$

Notice too that the graph of each function, $f(x)={a}^{x},$ also contains the point $(-1,\tfrac{1}{a}).$ The graph of $f(x)={(\tfrac{1}{2})}^{x}$ contained $(-1,2)$ and the graph of $g(x)={(\tfrac{1}{3})}^{x}$ contained $(-1,3).$ This makes sense as ${a}^{-1}=\tfrac{1}{a}.$

What is the domain and range for each function? From the graphs we can see that the domain is the set of all real numbers and we write the domain in interval notation as $(-\infty ,\infty ).$ Again, the graph never hits the $x$-axis. The range is all positive numbers. We write the range in interval notation as $(0,\infty ).$

We will summarize these properties in the chart below. Which also include when $a>1.$

{{< callout type="info" >}}
**Properties of the Graph of f ( x ) = a x f ( x ) = a x.** | when $a>1$ | when $0<a<1$ |  |  |
| --- | --- | --- | --- |
| Domain | $(-\infty ,\infty )$ | Domain | $(-\infty ,\infty )$ |
| Range | $(0,\infty )$ | Range | $(0,\infty )$ |
| $x$-intercept | none | $x$-intercept | none |
| $y$-intercept | $(0,1)$ | $y$-intercept | $(0,1)$ |
| Contains | $(1,a),(-1,\tfrac{1}{a})$ | Contains | $(1,a),(-1,\tfrac{1}{a})$ |
| Asymptote | $x$-axis, the line $y=0$ | Asymptote | $x$-axis, the line $y=0$ |
| Basic shape | increasing | Basic shape | decreasing |
{{< /callout >}}

It is important for us to notice that both of these graphs are one-to-one, as they both pass the horizontal line test. This means the exponential function will have an inverse. We will look at this later.

When we graphed quadratic functions, we were able to graph using translation rather than just plotting points. Will that work in graphing exponential functions?

**Example 10.12.** On the same coordinate system graph $f(x)={2}^{x}$ and $g(x)={2}^{x+1}.$

**Solution.**

We will use point plotting to graph the functions.

{{< multiplechoice
  question="Compared with $f(x)=2^x$, how is $g(x)=2^{x-1}$ transformed?"
  answer="The graph shifts right 1 unit."
  hint="Replacing $x$ by $x-h$ shifts a graph horizontally by $h$ units."
>}}
The graph shifts right 1 unit.
The graph shifts left 1 unit.
The graph shifts down 1 unit.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Compared with $f(x)=3^x$, how is $g(x)=3^{x+1}$ transformed?"
  answer="The graph shifts left 1 unit."
  hint="Write $x+1$ as $x-(-1)$ to identify the horizontal shift."
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

{{< multiplechoice
  question="Compared with $f(x)=3^x$, how is $g(x)=3^x+2$ transformed?"
  answer="The graph shifts up 2 units and has horizontal asymptote $y=2$."
  hint="A constant added outside the exponential changes every output value."
>}}
The graph shifts right 2 units and has horizontal asymptote $y=0$.
The graph shifts down 2 units and has horizontal asymptote $y=-2$.
The graph shifts up 2 units and has horizontal asymptote $y=2$.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Compared with $f(x)=4^x$, how is $g(x)=4^x-2$ transformed?"
  answer="The graph shifts down 2 units and has horizontal asymptote $y=-2$."
  hint="Subtracting 2 from the function shifts every point down 2 units."
>}}
The graph shifts left 2 units and has horizontal asymptote $y=0$.
The graph shifts down 2 units and has horizontal asymptote $y=-2$.
The graph shifts up 2 units and has horizontal asymptote $y=2$.
{{< /multiplechoice >}}

Example 10.13 showed that subtracting 2, from $f(x)={3}^{x}$ to $g(x)={3}^{x}-2$, causes a vertical shift down two units. The horizontal asymptote also shifts down 2 units. Recognizing this pattern allows us to graph other functions with the same pattern by translation.

All of our exponential functions have had either an integer or a rational number as the base. We will now look at an exponential function with an irrational number as the base.

Before we can look at this exponential function, we need to define the irrational number, e. This number is used as a base in many applications in the sciences and business that are modeled by exponential functions. The number is defined as the value of ${(1+\tfrac{1}{n})}^{n}$ as n gets larger and larger. We say, as n approaches infinity, or increases without bound. The table shows the value of ${(1+\tfrac{1}{n})}^{n}$ for several values of $n.$

If carried out to even larger values of n, we get

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
**Natural Exponential Function.** The natural exponential function is the
exponential function

$$
f(x)=e^x.
$$

The domain is $(-\infty ,\infty )$ and the range is $(0,\infty ).$
{{< /callout >}}

Let’s graph the function $f(x)={e}^{x}$ on the same coordinate system as $g(x)={2}^{x}$ and $h(x)={3}^{x}.$

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graphs of 2^x, e^x, and 3^x. All increase through (0, 1); for x greater than zero, e^x lies between 2^x and 3^x.","xMin":-3,"xMax":2,"yMin":-1,"yMax":6,"unit":30,"tickLabels":true,"curves":[{"kind":"exp","b":2,"arrows":"end"},{"kind":"exp","b":2.718281828459045,"dashed":true,"arrows":"end"},{"kind":"exp","b":3,"arrows":"end"}],"points":[{"at":[0,1],"label":"(0, 1)","labelSide":"sw"},{"at":[1,2]},{"at":[1,2.718281828459045]},{"at":[1,3]}],"texts":[{"at":[0.533,2.583],"text":"e"}]}'>
<svg role="img" aria-label="The graphs of 2^x, e^x, and 3^x. All increase through (0, 1); for x greater than zero, e^x lies between 2^x and 3^x." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 262" width="202" height="262" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="236" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="56" y1="236" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="236" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="236" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="236" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="236" x2="176" y2="236" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="176" x2="176" y2="176" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="176" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="176" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="176" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="56" x2="176" y2="56" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="206" x2="178" y2="206" stroke="currentColor" stroke-width="1"/>
  <line x1="116" y1="24" x2="116" y2="238" stroke="currentColor" stroke-width="1"/>
  <polygon points="188,206 178,211 178,201" fill="currentColor"/>
  <polygon points="116,14 121,24 111,24" fill="currentColor"/>
  <polygon points="14,206 24,201 24,211" fill="currentColor"/>
  <polygon points="116,248 111,238 121,238" fill="currentColor"/>
  <text x="186" y="198" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="124" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="203" x2="26" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="221" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="56" y1="203" x2="56" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="221" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="86" y1="203" x2="86" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="221" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="203" x2="146" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="221" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="176" y1="203" x2="176" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="221" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="113" y1="236" x2="119" y2="236" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="240" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="113" y1="176" x2="119" y2="176" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="180" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="113" y1="146" x2="119" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="113" y1="116" x2="119" y2="116" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="120" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="113" y1="86" x2="119" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="90" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="113" y1="56" x2="119" y2="56" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="60" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="113" y1="26" x2="119" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="26,202.3 26.3,202.2 26.5,202.2 26.8,202.2 27,202.2 27.3,202.1 27.5,202.1 27.8,202.1 28,202.1 28.3,202 28.5,202 28.8,202 29,202 29.3,202 29.5,201.9 29.8,201.9 30,201.9 30.3,201.9 30.5,201.8 30.8,201.8 31,201.8 31.3,201.8 31.5,201.7 31.8,201.7 32,201.7 32.3,201.7 32.5,201.6 32.8,201.6 33,201.6 33.3,201.6 33.5,201.5 33.8,201.5 34,201.5 34.3,201.5 34.5,201.4 34.8,201.4 35,201.4 35.3,201.4 35.5,201.3 35.8,201.3 36,201.3 36.3,201.2 36.5,201.2 36.8,201.2 37,201.2 37.3,201.1 37.5,201.1 37.8,201.1 38,201.1 38.3,201 38.5,201 38.8,201 39,200.9 39.3,200.9 39.5,200.9 39.8,200.8 40,200.8 40.3,200.8 40.5,200.8 40.8,200.7 41,200.7 41.3,200.7 41.5,200.6 41.8,200.6 42,200.6 42.3,200.5 42.5,200.5 42.8,200.5 43,200.4 43.3,200.4 43.5,200.4 43.8,200.3 44,200.3 44.3,200.3 44.5,200.3 44.8,200.2 45,200.2 45.3,200.1 45.5,200.1 45.8,200.1 46,200 46.3,200 46.5,200 46.8,199.9 47,199.9 47.3,199.9 47.5,199.8 47.8,199.8 48,199.8 48.3,199.7 48.5,199.7 48.8,199.7 49,199.6 49.3,199.6 49.5,199.5 49.8,199.5 50,199.5 50.3,199.4 50.5,199.4 50.8,199.4 51,199.3 51.3,199.3 51.5,199.2 51.8,199.2 52,199.2 52.3,199.1 52.5,199.1 52.8,199 53,199 53.3,199 53.5,198.9 53.7,198.9 54,198.8 54.2,198.8 54.5,198.8 54.8,198.7 55,198.7 55.3,198.6 55.5,198.6 55.8,198.5 56,198.5 56.3,198.5 56.5,198.4 56.8,198.4 57,198.3 57.3,198.3 57.5,198.2 57.8,198.2 58,198.1 58.3,198.1 58.5,198.1 58.8,198 59,198 59.3,197.9 59.5,197.9 59.8,197.8 60,197.8 60.3,197.7 60.5,197.7 60.8,197.6 61,197.6 61.3,197.5 61.5,197.5 61.8,197.4 62,197.4 62.3,197.3 62.5,197.3 62.8,197.2 63,197.2 63.3,197.1 63.5,197.1 63.8,197 64,197 64.3,196.9 64.5,196.9 64.8,196.8 65,196.8 65.3,196.7 65.5,196.7 65.8,196.6 66,196.6 66.3,196.5 66.5,196.4 66.8,196.4 67,196.3 67.3,196.3 67.5,196.2 67.8,196.2 68,196.1 68.3,196 68.5,196 68.8,195.9 69,195.9 69.3,195.8 69.5,195.8 69.8,195.7 70,195.6 70.3,195.6 70.5,195.5 70.8,195.5 71,195.4 71.3,195.3 71.5,195.3 71.8,195.2 72,195.1 72.3,195.1 72.5,195 72.8,195 73,194.9 73.3,194.8 73.5,194.8 73.8,194.7 74,194.6 74.3,194.6 74.5,194.5 74.8,194.4 75,194.4 75.3,194.3 75.5,194.2 75.8,194.2 76,194.1 76.3,194 76.5,194 76.8,193.9 77,193.8 77.3,193.7 77.5,193.7 77.8,193.6 78,193.5 78.3,193.5 78.5,193.4 78.8,193.3 79,193.2 79.3,193.2 79.5,193.1 79.8,193 80,192.9 80.3,192.9 80.5,192.8 80.8,192.7 81,192.6 81.3,192.6 81.5,192.5 81.8,192.4 82,192.3 82.3,192.2 82.5,192.2 82.8,192.1 83,192 83.3,191.9 83.5,191.8 83.8,191.8 84,191.7 84.3,191.6 84.5,191.5 84.8,191.4 85,191.3 85.3,191.3 85.5,191.2 85.8,191.1 86,191 86.3,190.9 86.5,190.8 86.8,190.7 87,190.6 87.3,190.6 87.5,190.5 87.8,190.4 88,190.3 88.3,190.2 88.5,190.1 88.8,190 89,189.9 89.3,189.8 89.5,189.7 89.8,189.6 90,189.5 90.3,189.5 90.5,189.4 90.8,189.3 91,189.2 91.3,189.1 91.5,189 91.8,188.9 92,188.8 92.3,188.7 92.5,188.6 92.8,188.5 93,188.4 93.3,188.3 93.5,188.2 93.8,188.1 94,188 94.3,187.9 94.5,187.7 94.8,187.6 95,187.5 95.3,187.4 95.5,187.3 95.8,187.2 96,187.1 96.3,187 96.5,186.9 96.8,186.8 97,186.7 97.3,186.5 97.5,186.4 97.8,186.3 98,186.2 98.3,186.1 98.5,186 98.8,185.9 99,185.7 99.3,185.6 99.5,185.5 99.8,185.4 100,185.3 100.3,185.2 100.5,185 100.8,184.9 101,184.8 101.3,184.7 101.5,184.5 101.8,184.4 102,184.3 102.3,184.2 102.5,184 102.8,183.9 103,183.8 103.3,183.7 103.5,183.5 103.8,183.4 104,183.3 104.3,183.1 104.5,183 104.8,182.9 105,182.7 105.3,182.6 105.5,182.5 105.8,182.3 106,182.2 106.3,182.1 106.5,181.9 106.8,181.8 107,181.6 107.3,181.5 107.5,181.3 107.8,181.2 108,181.1 108.3,180.9 108.5,180.8 108.8,180.6 109,180.5 109.3,180.3 109.5,180.2 109.8,180 110,179.9 110.3,179.7 110.5,179.6 110.8,179.4 111,179.3 111.3,179.1 111.5,179 111.8,178.8 112,178.6 112.3,178.5 112.5,178.3 112.8,178.2 113,178 113.3,177.8 113.5,177.7 113.8,177.5 114,177.4 114.3,177.2 114.5,177 114.8,176.9 115,176.7 115.3,176.5 115.5,176.3 115.8,176.2 116,176 116.3,175.8 116.5,175.7 116.8,175.5 117,175.3 117.3,175.1 117.5,174.9 117.8,174.8 118,174.6 118.3,174.4 118.5,174.2 118.8,174 119,173.8 119.3,173.7 119.5,173.5 119.8,173.3 120,173.1 120.3,172.9 120.5,172.7 120.8,172.5 121,172.3 121.3,172.1 121.5,171.9 121.8,171.7 122,171.5 122.3,171.3 122.5,171.1 122.8,170.9 123,170.7 123.3,170.5 123.5,170.3 123.8,170.1 124,169.9 124.3,169.7 124.5,169.5 124.8,169.3 125,169.1 125.3,168.9 125.5,168.6 125.8,168.4 126,168.2 126.3,168 126.5,167.8 126.8,167.5 127,167.3 127.3,167.1 127.5,166.9 127.8,166.6 128,166.4 128.3,166.2 128.5,166 128.8,165.7 129,165.5 129.3,165.3 129.5,165 129.8,164.8 130,164.5 130.3,164.3 130.5,164.1 130.8,163.8 131,163.6 131.3,163.3 131.5,163.1 131.8,162.8 132,162.6 132.3,162.3 132.5,162.1 132.8,161.8 133,161.6 133.3,161.3 133.5,161.1 133.8,160.8 134,160.5 134.3,160.3 134.5,160 134.8,159.7 135,159.5 135.3,159.2 135.5,158.9 135.8,158.7 136,158.4 136.3,158.1 136.5,157.8 136.8,157.5 137,157.3 137.3,157 137.5,156.7 137.8,156.4 138,156.1 138.3,155.8 138.5,155.5 138.8,155.3 139,155 139.3,154.7 139.5,154.4 139.8,154.1 140,153.8 140.3,153.5 140.5,153.2 140.8,152.9 141,152.5 141.3,152.2 141.5,151.9 141.8,151.6 142,151.3 142.3,151 142.5,150.7 142.8,150.3 143,150 143.3,149.7 143.5,149.4 143.8,149 144,148.7 144.3,148.4 144.5,148 144.8,147.7 145,147.4 145.3,147 145.5,146.7 145.8,146.3 146,146 146.3,145.7 146.5,145.3 146.8,145 147,144.6 147.3,144.2 147.5,143.9 147.8,143.5 148,143.2 148.3,142.8 148.5,142.4 148.8,142.1 149,141.7 149.3,141.3 149.5,140.9 149.8,140.6 150,140.2 150.3,139.8 150.5,139.4 150.8,139 151,138.7 151.3,138.3 151.5,137.9 151.8,137.5 152,137.1 152.3,136.7 152.5,136.3 152.8,135.9 153,135.5 153.3,135.1 153.5,134.6 153.8,134.2 154,133.8 154.3,133.4 154.5,133 154.8,132.6 155,132.1 155.3,131.7 155.5,131.3 155.8,130.8 156,130.4 156.3,130 156.5,129.5 156.8,129.1 157,128.6 157.3,128.2 157.5,127.7 157.8,127.3 158,126.8 158.3,126.4 158.5,125.9 158.8,125.4 159,125 159.3,124.5 159.5,124 159.8,123.6 160,123.1 160.3,122.6 160.5,122.1 160.8,121.6 161,121.1 161.3,120.7 161.5,120.2 161.8,119.7 162,119.2 162.3,118.7 162.5,118.2 162.8,117.6 163,117.1 163.3,116.6 163.5,116.1 163.8,115.6 164,115.1 164.3,114.5 164.5,114 164.8,113.5 165,112.9 165.3,112.4 165.5,111.8 165.8,111.3 166,110.8 166.3,110.2 166.5,109.6 166.8,109.1 167,108.5 167.3,108 167.5,107.4 167.8,106.8 168,106.3 168.3,105.7 168.5,105.1 168.8,104.5 169,103.9 169.3,103.3 169.5,102.7 169.8,102.1 170,101.5 170.3,100.9 170.5,100.3 170.8,99.7 171,99.1 171.3,98.5 171.5,97.8 171.8,97.2 172,96.6 172.3,96 172.5,95.3 172.8,94.7 173,94 173.2,93.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="176,86 177.2,97.1 167.8,93.6" fill="currentColor"/>
  <polyline points="26,204.5 26.3,204.5 26.5,204.5 26.8,204.5 27,204.5 27.3,204.4 27.5,204.4 27.8,204.4 28,204.4 28.3,204.4 28.5,204.4 28.8,204.4 29,204.3 29.3,204.3 29.5,204.3 29.8,204.3 30,204.3 30.3,204.3 30.5,204.3 30.8,204.3 31,204.2 31.3,204.2 31.5,204.2 31.8,204.2 32,204.2 32.3,204.2 32.5,204.1 32.8,204.1 33,204.1 33.3,204.1 33.5,204.1 33.8,204.1 34,204 34.3,204 34.5,204 34.8,204 35,204 35.3,204 35.5,203.9 35.8,203.9 36,203.9 36.3,203.9 36.5,203.9 36.8,203.9 37,203.8 37.3,203.8 37.5,203.8 37.8,203.8 38,203.8 38.3,203.8 38.5,203.7 38.8,203.7 39,203.7 39.3,203.7 39.5,203.7 39.8,203.6 40,203.6 40.3,203.6 40.5,203.6 40.8,203.6 41,203.5 41.3,203.5 41.5,203.5 41.8,203.5 42,203.5 42.3,203.4 42.5,203.4 42.8,203.4 43,203.4 43.3,203.3 43.5,203.3 43.8,203.3 44,203.3 44.3,203.3 44.5,203.2 44.8,203.2 45,203.2 45.3,203.2 45.5,203.1 45.8,203.1 46,203.1 46.3,203.1 46.5,203 46.8,203 47,203 47.3,203 47.5,202.9 47.8,202.9 48,202.9 48.3,202.9 48.5,202.8 48.8,202.8 49,202.8 49.3,202.8 49.5,202.7 49.8,202.7 50,202.7 50.3,202.6 50.5,202.6 50.8,202.6 51,202.6 51.3,202.5 51.5,202.5 51.8,202.5 52,202.4 52.3,202.4 52.5,202.4 52.8,202.4 53,202.3 53.3,202.3 53.5,202.3 53.7,202.2 54,202.2 54.2,202.2 54.5,202.1 54.8,202.1 55,202.1 55.3,202 55.5,202 55.8,202 56,201.9 56.3,201.9 56.5,201.9 56.8,201.8 57,201.8 57.3,201.8 57.5,201.7 57.8,201.7 58,201.7 58.3,201.6 58.5,201.6 58.8,201.6 59,201.5 59.3,201.5 59.5,201.4 59.8,201.4 60,201.4 60.3,201.3 60.5,201.3 60.8,201.2 61,201.2 61.3,201.2 61.5,201.1 61.8,201.1 62,201 62.3,201 62.5,201 62.8,200.9 63,200.9 63.3,200.8 63.5,200.8 63.8,200.7 64,200.7 64.3,200.7 64.5,200.6 64.8,200.6 65,200.5 65.3,200.5 65.5,200.4 65.8,200.4 66,200.3 66.3,200.3 66.5,200.2 66.8,200.2 67,200.1 67.3,200.1 67.5,200 67.8,200 68,199.9 68.3,199.9 68.5,199.8 68.8,199.8 69,199.7 69.3,199.7 69.5,199.6 69.8,199.6 70,199.5 70.3,199.5 70.5,199.4 70.8,199.4 71,199.3 71.3,199.3 71.5,199.2 71.8,199.1 72,199.1 72.3,199 72.5,199 72.8,198.9 73,198.8 73.3,198.8 73.5,198.7 73.8,198.7 74,198.6 74.3,198.5 74.5,198.5 74.8,198.4 75,198.4 75.3,198.3 75.5,198.2 75.8,198.2 76,198.1 76.3,198 76.5,198 76.8,197.9 77,197.8 77.3,197.8 77.5,197.7 77.8,197.6 78,197.5 78.3,197.5 78.5,197.4 78.8,197.3 79,197.3 79.3,197.2 79.5,197.1 79.8,197 80,197 80.3,196.9 80.5,196.8 80.8,196.7 81,196.7 81.3,196.6 81.5,196.5 81.8,196.4 82,196.3 82.3,196.3 82.5,196.2 82.8,196.1 83,196 83.3,195.9 83.5,195.8 83.8,195.8 84,195.7 84.3,195.6 84.5,195.5 84.8,195.4 85,195.3 85.3,195.2 85.5,195.1 85.8,195.1 86,195 86.3,194.9 86.5,194.8 86.8,194.7 87,194.6 87.3,194.5 87.5,194.4 87.8,194.3 88,194.2 88.3,194.1 88.5,194 88.8,193.9 89,193.8 89.3,193.7 89.5,193.6 89.8,193.5 90,193.4 90.3,193.3 90.5,193.2 90.8,193.1 91,193 91.3,192.9 91.5,192.7 91.8,192.6 92,192.5 92.3,192.4 92.5,192.3 92.8,192.2 93,192.1 93.3,191.9 93.5,191.8 93.8,191.7 94,191.6 94.3,191.5 94.5,191.3 94.8,191.2 95,191.1 95.3,191 95.5,190.9 95.8,190.7 96,190.6 96.3,190.5 96.5,190.3 96.8,190.2 97,190.1 97.3,189.9 97.5,189.8 97.8,189.7 98,189.5 98.3,189.4 98.5,189.3 98.8,189.1 99,189 99.3,188.8 99.5,188.7 99.8,188.5 100,188.4 100.3,188.3 100.5,188.1 100.8,188 101,187.8 101.3,187.7 101.5,187.5 101.8,187.3 102,187.2 102.3,187 102.5,186.9 102.8,186.7 103,186.5 103.3,186.4 103.5,186.2 103.8,186.1 104,185.9 104.3,185.7 104.5,185.6 104.8,185.4 105,185.2 105.3,185 105.5,184.9 105.8,184.7 106,184.5 106.3,184.3 106.5,184.1 106.8,184 107,183.8 107.3,183.6 107.5,183.4 107.8,183.2 108,183 108.3,182.8 108.5,182.6 108.8,182.4 109,182.2 109.3,182 109.5,181.8 109.8,181.6 110,181.4 110.3,181.2 110.5,181 110.8,180.8 111,180.6 111.3,180.4 111.5,180.2 111.8,180 112,179.7 112.3,179.5 112.5,179.3 112.8,179.1 113,178.9 113.3,178.6 113.5,178.4 113.8,178.2 114,177.9 114.3,177.7 114.5,177.5 114.8,177.2 115,177 115.3,176.7 115.5,176.5 115.8,176.2 116,176 116.3,175.7 116.5,175.5 116.8,175.2 117,175 117.3,174.7 117.5,174.5 117.8,174.2 118,173.9 118.3,173.7 118.5,173.4 118.8,173.1 119,172.8 119.3,172.6 119.5,172.3 119.8,172 120,171.7 120.3,171.4 120.5,171.1 120.8,170.9 121,170.6 121.3,170.3 121.5,170 121.8,169.7 122,169.4 122.3,169.1 122.5,168.7 122.8,168.4 123,168.1 123.3,167.8 123.5,167.5 123.8,167.2 124,166.8 124.3,166.5 124.5,166.2 124.8,165.8 125,165.5 125.3,165.2 125.5,164.8 125.8,164.5 126,164.1 126.3,163.8 126.5,163.4 126.8,163.1 127,162.7 127.3,162.4 127.5,162 127.8,161.6 128,161.2 128.3,160.9 128.5,160.5 128.8,160.1 129,159.7 129.3,159.3 129.5,159 129.8,158.6 130,158.2 130.3,157.8 130.5,157.4 130.8,156.9 131,156.5 131.3,156.1 131.5,155.7 131.8,155.3 132,154.9 132.3,154.4 132.5,154 132.8,153.6 133,153.1 133.3,152.7 133.5,152.2 133.8,151.8 134,151.3 134.3,150.9 134.5,150.4 134.8,150 135,149.5 135.3,149 135.5,148.5 135.8,148.1 136,147.6 136.3,147.1 136.5,146.6 136.8,146.1 137,145.6 137.3,145.1 137.5,144.6 137.8,144.1 138,143.5 138.3,143 138.5,142.5 138.8,142 139,141.4 139.3,140.9 139.5,140.3 139.8,139.8 140,139.2 140.3,138.7 140.5,138.1 140.8,137.5 141,137 141.3,136.4 141.5,135.8 141.8,135.2 142,134.6 142.3,134 142.5,133.4 142.8,132.8 143,132.2 143.3,131.6 143.5,131 143.8,130.3 144,129.7 144.3,129.1 144.5,128.4 144.8,127.8 145,127.1 145.3,126.5 145.5,125.8 145.8,125.1 146,124.5 146.3,123.8 146.5,123.1 146.8,122.4 147,121.7 147.3,121 147.5,120.3 147.8,119.6 148,118.8 148.3,118.1 148.5,117.4 148.8,116.6 149,115.9 149.3,115.1 149.5,114.4 149.8,113.6 150,112.8 150.3,112 150.5,111.3 150.8,110.5 151,109.7 151.3,108.9 151.5,108 151.8,107.2 152,106.4 152.3,105.6 152.5,104.7 152.8,103.9 153,103 153.3,102.2 153.5,101.3 153.8,100.4 154,99.5 154.3,98.6 154.5,97.7 154.8,96.8 155,95.9 155.3,95 155.5,94.1 155.8,93.1 156,92.2 156.3,91.2 156.5,90.3 156.8,89.3 157,88.3 157.3,87.3 157.5,86.4 157.8,85.4 158,84.3 158.3,83.3 158.5,82.3 158.8,81.3 159,80.2 159.3,79.2 159.5,78.1 159.8,77 160,76 160.3,74.9 160.5,73.8 160.8,72.7 161,71.5 161.3,70.4 161.5,69.3 161.8,68.1 162,67 162.3,65.8 162.5,64.7 162.8,63.5 163,62.3 163.3,61.1 163.5,59.9 163.8,58.6 164,57.4 164.3,56.2 164.5,54.9 164.8,53.6 165,52.4 165.3,51.1 165.5,49.8 165.8,48.5 166,47.2 166.3,45.8 166.5,44.5 166.8,43.1 167,41.8 167.3,40.4 167.5,39 167.8,37.6 168,36.2 168.3,34.8 168.4,33.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="169.8,26 173,36.7 163.1,35" fill="currentColor"/>
  <polyline points="26,204.9 26.3,204.9 26.5,204.9 26.8,204.9 27,204.8 27.3,204.8 27.5,204.8 27.8,204.8 28,204.8 28.3,204.8 28.5,204.8 28.8,204.8 29,204.8 29.3,204.7 29.5,204.7 29.8,204.7 30,204.7 30.3,204.7 30.5,204.7 30.8,204.7 31,204.7 31.3,204.7 31.5,204.6 31.8,204.6 32,204.6 32.3,204.6 32.5,204.6 32.8,204.6 33,204.6 33.3,204.6 33.5,204.5 33.8,204.5 34,204.5 34.3,204.5 34.5,204.5 34.8,204.5 35,204.5 35.3,204.4 35.5,204.4 35.8,204.4 36,204.4 36.3,204.4 36.5,204.4 36.8,204.4 37,204.3 37.3,204.3 37.5,204.3 37.8,204.3 38,204.3 38.3,204.3 38.5,204.2 38.8,204.2 39,204.2 39.3,204.2 39.5,204.2 39.8,204.2 40,204.1 40.3,204.1 40.5,204.1 40.8,204.1 41,204.1 41.3,204.1 41.5,204 41.8,204 42,204 42.3,204 42.5,204 42.8,203.9 43,203.9 43.3,203.9 43.5,203.9 43.8,203.9 44,203.9 44.3,203.8 44.5,203.8 44.8,203.8 45,203.8 45.3,203.8 45.5,203.7 45.8,203.7 46,203.7 46.3,203.7 46.5,203.6 46.8,203.6 47,203.6 47.3,203.6 47.5,203.6 47.8,203.5 48,203.5 48.3,203.5 48.5,203.5 48.8,203.4 49,203.4 49.3,203.4 49.5,203.4 49.8,203.3 50,203.3 50.3,203.3 50.5,203.3 50.8,203.2 51,203.2 51.3,203.2 51.5,203.2 51.8,203.1 52,203.1 52.3,203.1 52.5,203.1 52.8,203 53,203 53.3,203 53.5,203 53.7,202.9 54,202.9 54.2,202.9 54.5,202.8 54.8,202.8 55,202.8 55.3,202.8 55.5,202.7 55.8,202.7 56,202.7 56.3,202.6 56.5,202.6 56.8,202.6 57,202.5 57.3,202.5 57.5,202.5 57.8,202.4 58,202.4 58.3,202.4 58.5,202.3 58.8,202.3 59,202.3 59.3,202.2 59.5,202.2 59.8,202.2 60,202.1 60.3,202.1 60.5,202.1 60.8,202 61,202 61.3,202 61.5,201.9 61.8,201.9 62,201.8 62.3,201.8 62.5,201.8 62.8,201.7 63,201.7 63.3,201.7 63.5,201.6 63.8,201.6 64,201.5 64.3,201.5 64.5,201.4 64.8,201.4 65,201.4 65.3,201.3 65.5,201.3 65.8,201.2 66,201.2 66.3,201.1 66.5,201.1 66.8,201.1 67,201 67.3,201 67.5,200.9 67.8,200.9 68,200.8 68.3,200.8 68.5,200.7 68.8,200.7 69,200.6 69.3,200.6 69.5,200.5 69.8,200.5 70,200.4 70.3,200.4 70.5,200.3 70.8,200.3 71,200.2 71.3,200.2 71.5,200.1 71.8,200.1 72,200 72.3,200 72.5,199.9 72.8,199.8 73,199.8 73.3,199.7 73.5,199.7 73.8,199.6 74,199.6 74.3,199.5 74.5,199.4 74.8,199.4 75,199.3 75.3,199.3 75.5,199.2 75.8,199.1 76,199.1 76.3,199 76.5,198.9 76.8,198.9 77,198.8 77.3,198.7 77.5,198.7 77.8,198.6 78,198.5 78.3,198.5 78.5,198.4 78.8,198.3 79,198.3 79.3,198.2 79.5,198.1 79.8,198 80,198 80.3,197.9 80.5,197.8 80.8,197.7 81,197.7 81.3,197.6 81.5,197.5 81.8,197.4 82,197.4 82.3,197.3 82.5,197.2 82.8,197.1 83,197 83.3,197 83.5,196.9 83.8,196.8 84,196.7 84.3,196.6 84.5,196.5 84.8,196.4 85,196.4 85.3,196.3 85.5,196.2 85.8,196.1 86,196 86.3,195.9 86.5,195.8 86.8,195.7 87,195.6 87.3,195.5 87.5,195.4 87.8,195.3 88,195.2 88.3,195.1 88.5,195 88.8,194.9 89,194.8 89.3,194.7 89.5,194.6 89.8,194.5 90,194.4 90.3,194.3 90.5,194.2 90.8,194.1 91,194 91.3,193.9 91.5,193.8 91.8,193.7 92,193.5 92.3,193.4 92.5,193.3 92.8,193.2 93,193.1 93.3,193 93.5,192.8 93.8,192.7 94,192.6 94.3,192.5 94.5,192.3 94.8,192.2 95,192.1 95.3,192 95.5,191.8 95.8,191.7 96,191.6 96.3,191.4 96.5,191.3 96.8,191.2 97,191 97.3,190.9 97.5,190.8 97.8,190.6 98,190.5 98.3,190.3 98.5,190.2 98.8,190 99,189.9 99.3,189.8 99.5,189.6 99.8,189.5 100,189.3 100.3,189.1 100.5,189 100.8,188.8 101,188.7 101.3,188.5 101.5,188.4 101.8,188.2 102,188 102.3,187.9 102.5,187.7 102.8,187.5 103,187.4 103.3,187.2 103.5,187 103.8,186.8 104,186.7 104.3,186.5 104.5,186.3 104.8,186.1 105,185.9 105.3,185.8 105.5,185.6 105.8,185.4 106,185.2 106.3,185 106.5,184.8 106.8,184.6 107,184.4 107.3,184.2 107.5,184 107.8,183.8 108,183.6 108.3,183.4 108.5,183.2 108.8,183 109,182.8 109.3,182.6 109.5,182.4 109.8,182.1 110,181.9 110.3,181.7 110.5,181.5 110.8,181.2 111,181 111.3,180.8 111.5,180.6 111.8,180.3 112,180.1 112.3,179.8 112.5,179.6 112.8,179.4 113,179.1 113.3,178.9 113.5,178.6 113.8,178.4 114,178.1 114.3,177.9 114.5,177.6 114.8,177.3 115,177.1 115.3,176.8 115.5,176.5 115.8,176.3 116,176 116.3,175.7 116.5,175.4 116.8,175.2 117,174.9 117.3,174.6 117.5,174.3 117.8,174 118,173.7 118.3,173.4 118.5,173.1 118.8,172.8 119,172.5 119.3,172.2 119.5,171.9 119.8,171.6 120,171.3 120.3,170.9 120.5,170.6 120.8,170.3 121,170 121.3,169.6 121.5,169.3 121.8,169 122,168.6 122.3,168.3 122.5,167.9 122.8,167.6 123,167.2 123.3,166.9 123.5,166.5 123.8,166.2 124,165.8 124.3,165.4 124.5,165 124.8,164.7 125,164.3 125.3,163.9 125.5,163.5 125.8,163.1 126,162.7 126.3,162.3 126.5,161.9 126.8,161.5 127,161.1 127.3,160.7 127.5,160.3 127.8,159.9 128,159.4 128.3,159 128.5,158.6 128.8,158.1 129,157.7 129.3,157.3 129.5,156.8 129.8,156.4 130,155.9 130.3,155.4 130.5,155 130.8,154.5 131,154 131.3,153.6 131.5,153.1 131.8,152.6 132,152.1 132.3,151.6 132.5,151.1 132.8,150.6 133,150.1 133.3,149.6 133.5,149.1 133.8,148.5 134,148 134.3,147.5 134.5,146.9 134.8,146.4 135,145.8 135.3,145.3 135.5,144.7 135.8,144.2 136,143.6 136.3,143 136.5,142.4 136.8,141.9 137,141.3 137.3,140.7 137.5,140.1 137.8,139.5 138,138.9 138.3,138.2 138.5,137.6 138.8,137 139,136.4 139.3,135.7 139.5,135.1 139.8,134.4 140,133.8 140.3,133.1 140.5,132.4 140.8,131.7 141,131.1 141.3,130.4 141.5,129.7 141.8,129 142,128.3 142.3,127.5 142.5,126.8 142.8,126.1 143,125.4 143.3,124.6 143.5,123.9 143.8,123.1 144,122.4 144.3,121.6 144.5,120.8 144.8,120 145,119.2 145.3,118.4 145.5,117.6 145.8,116.8 146,116 146.3,115.2 146.5,114.3 146.8,113.5 147,112.6 147.3,111.8 147.5,110.9 147.8,110 148,109.2 148.3,108.3 148.5,107.4 148.8,106.5 149,105.5 149.3,104.6 149.5,103.7 149.8,102.8 150,101.8 150.3,100.8 150.5,99.9 150.8,98.9 151,97.9 151.3,96.9 151.5,95.9 151.8,94.9 152,93.9 152.3,92.9 152.5,91.8 152.8,90.8 153,89.7 153.3,88.6 153.5,87.6 153.8,86.5 154,85.4 154.3,84.3 154.5,83.1 154.8,82 155,80.9 155.3,79.7 155.5,78.6 155.8,77.4 156,76.2 156.3,75 156.5,73.8 156.8,72.6 157,71.4 157.3,70.1 157.5,68.9 157.8,67.6 158,66.3 158.3,65 158.5,63.8 158.8,62.4 159,61.1 159.3,59.8 159.5,58.4 159.8,57.1 160,55.7 160.3,54.3 160.5,52.9 160.8,51.5 161,50.1 161.3,48.7 161.5,47.2 161.8,45.8 162,44.3 162.3,42.8 162.5,41.3 162.8,39.8 163,38.3 163.3,36.7 163.5,35.2 163.5,35.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="164.8,27.2 168.1,37.8 158.3,36.3" fill="currentColor"/>
  <circle cx="116" cy="176" r="4" fill="currentColor"/>
  <circle cx="146" cy="146" r="4" fill="currentColor"/>
  <circle cx="146" cy="124.5" r="4" fill="currentColor"/>
  <circle cx="146" cy="116" r="4" fill="currentColor"/>
  <text x="104.8" y="164.8" font-size="13" fill="currentColor" text-anchor="end">(0, 1)</text>
  <text x="132" y="128.5" font-size="13" fill="currentColor">e</text>
</svg>
</div>

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
  answerDisplay="$x=2$"
  hint="Rewrite 81 as a power of 3 and equate the exponents."
>}}

{{< fillin
  question="Solve $7^{x-3}=7$."
  answer="4"
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
| Check the solutions. |  |
| $\begin{aligned} x=3:&\quad \frac{e^{3^2}}{e^3}=e^{9-3}=e^6=e^{2(3)},\\ x=-1:&\quad \frac{e^{(-1)^2}}{e^3}=e^{1-3}=e^{-2}=e^{2(-1)}. \end{aligned}$ |  |

{{< fillin
  question="Solve $\tfrac{e^{x^2}}{e^x}=e^2$. Enter the solution set."
  answer="-1,2"
  answerMode="unordered"
  answerDisplay="$x=-1$ or $x=2$"
  hint="Use the quotient rule for exponents, equate exponents, and solve the quadratic equation."
  placeholder="solution set"
>}}

{{< fillin
  question="Solve $\tfrac{e^{x^2}}{e^x}=e^6$. Enter the solution set."
  answer="-2,3"
  answerMode="unordered"
  answerDisplay="$x=-2$ or $x=3$"
  hint="Simplify the left side to $e^{x^2-x}$, then solve $x^2-x=6$."
  placeholder="solution set"
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
|  | $t=18\text{years}$ |

ⓐ

| For quarterly compounding, $n=4$. There are 4 quarters in a year. | $A=P{(1+\tfrac{r}{n})}^{nt}$ |
| --- | --- |
| Substitute the values in the formula. | $A=10,000{(1+\tfrac{0.05}{4})}^{4\cdot 18}$ |
| Compute the amount. Be careful to consider the order of operations as you enter the expression into your calculator. | $A=24{,}459.20$ dollars |

ⓑ

| For monthly compounding, $n=12$. There are 12 months in a year. | $A=P{(1+\tfrac{r}{n})}^{nt}$ |
| --- | --- |
| Substitute the values in the formula. | $A=10,000{(1+\tfrac{0.05}{12})}^{12\cdot 18}$ |
| Compute the amount. | $A=24{,}550.08$ dollars |

ⓒ

| For compounding continuously, | $A=P{e}^{rt}$ |
| --- | --- |
| Substitute the values in the formula. | $A=10,000{e}^{0.05\cdot 18}$ |
| Compute the amount. | $A=24{,}596.03$ dollars |

{{< fillin
  question="Angela invests \$15,000 at $4\%$ for 10 years. Find the balances with quarterly, monthly, and continuous compounding. Enter the three dollar amounts as an ordered triple."
  answer="(22332.96,22362.49,22377.37)"
  answerDisplay="$\left(\$22{,}332.96,\ \$22{,}362.49,\ \$22{,}377.37\right)$"
  hint="Use $A=P(1+\tfrac{r}{n})^{nt}$ for periodic compounding and $A=Pe^{rt}$ for continuous compounding."
  placeholder="ordered triple"
>}}

{{< fillin
  question="Allan invests \$10,000 at $5\%$ for 15 years. Find the balances with quarterly, monthly, and continuous compounding. Enter the three dollar amounts as an ordered triple."
  answer="(21071.81,21137.04,21170.00)"
  answerDisplay="$\left(\$21{,}071.81,\ \$21{,}137.04,\ \$21{,}170.00\right)$"
  hint="For quarterly compounding use $n=4$; for monthly use $n=12$."
  placeholder="ordered triple"
>}}

Other topics that are modeled by exponential functions involve growth and decay. Both also use the formula $A=P{e}^{rt}$ we used for the growth of money. For growth and decay, generally we use${A}_{0},$ as the original amount instead of calling it $P,$ the principal. We see that exponential growth has a positive rate of growth and exponential decay has a negative rate of growth.

{{< callout type="info" >}}
**Exponential Growth and Decay.** For an original amount, ${A}_{0},$ that grows or decays at a rate, r, for a certain time, t, the final amount, A, is:

$$
A=A_0e^{rt}.
$$
{{< /callout >}}

Exponential growth is typically seen in the growth of populations of humans or animals or bacteria. Our next example looks at the growth of a virus.

**Example 10.17.** Chris is a researcher at the Center for Disease Control and Prevention and he is trying to understand the behavior of a new and dangerous virus. He starts his experiment with 100 of the virus that grows continously at a rate of 25% per hour. He will check on the virus in 24 hours. How many viruses will he find?

**Solution.**

| Identify the values of each variable in the formulas. | $A=?$ |
| --- | --- |
| Be sure to put the percent in decimal form. | ${A}_{0}=100$ |
| Be sure the units match—the rate is per hour and the time is in hours. | $r=0.25\text{/hour}$ |
|  | $t=24\text{hours}$ |
|  |  |
| Substitute the values in the formula: $A={A}_{0}{e}^{rt}$. | $A=100{e}^{0.25\cdot 24}$ |
| Compute the amount. | $A=40,342.88$ |
| Round to the nearest whole virus. | $A=40,343$ |
|  | The researcher will find 40,343 viruses. |

{{< fillin
  question="A bacteria culture starts with 50 bacteria and grows by $15\%$ each hour. How many bacteria will there be after 8 hours?"
  answer="166"
  answerDisplay="166 bacteria"
  hint="This culture grows continuously, so use $A=A_0e^{rt}$ with $A_0=50$, $r=0.15$, and $t=8$, then round to the nearest whole bacterium."
>}}

{{< fillin
  question="A virus culture starts with 100 viruses and grows by $10\%$ each hour. How many viruses will there be after 24 hours?"
  answer="1102"
  answerDisplay="$1{,}102$ viruses"
  hint="This culture grows continuously, so use $A=A_0e^{rt}$ with $A_0=100$, $r=0.10$, and $t=24$, then round to the nearest whole virus."
>}}

{{< callout type="info" >}}
Access these online resources for additional instruction and practice with evaluating and graphing exponential functions.
{{< /callout >}}

## Practice

### Graph exponential functions

{{< fillin
  question="The graph of $g(x)=4^{x-1}$ is the graph of $f(x)=4^x$ shifted right 1 unit. What is the $y$-coordinate of the $y$-intercept of $g$?"
  answer="\tfrac{1}{4}"
  answerDisplay="$\tfrac{1}{4}$"
  hint="Substitute $x=0$ into $g(x)=4^{x-1}$: $g(0)=4^{0-1}=4^{-1}$."
>}}

{{< graphplot
  question="The graph of $g(x)=2^x+1$ is the graph of $f(x)=2^x$ shifted up 1 unit. Graph the horizontal asymptote of $g$."
  answerDisplay="$y=1$"
  ariaLabel="A blank grid from −4 to 4 on the x-axis and −2 to 8 on the y-axis."
  hint="A vertical shift of $k$ units moves the horizontal asymptote $y=0$ to $y=k$."
>}}
{"answer": {"asymptotes": [{"y": 1}]}, "grid": {"xMin": -4, "xMax": 4, "yMin": -2, "yMax": 8}}
{{< /graphplot >}}

### Solve Exponential equations

{{< fillin
  question="Solve $2^{3x-8}=16$."
  answer="4"
  answerDisplay="$x=4$"
  hint="Rewrite $16$ as a power of $2$, then equate the exponents."
>}}

{{< fillin
  question="Solve $4^{x^2}=4$. Enter the solution set."
  answer="-1,1"
  answerMode="unordered"
  answerDisplay="$x=-1$ or $x=1$"
  hint="Since the bases already match, set $x^2=1$ and solve for $x$."
  placeholder="solution set"
>}}

{{< fillin
  question="Solve $e^{3x}\cdot e^4=e^{10}$."
  answer="2"
  answerDisplay="$x=2$"
  hint="Use the Product Property of Exponents to combine the left side into a single power of $e$, then equate exponents."
>}}

### Use exponential models in applications

{{< fillin
  question="Rochelle deposits \$5,000 in an IRA that earns $8\%$ interest compounded continuously. Find the balance after 25 years, rounded to the nearest cent."
  answer="36945.28"
  answerDisplay="\$36,945.28"
  hint="Use $A=Pe^{rt}$ with $P=5{,}000$, $r=0.08$, and $t=25$."
>}}

{{< fillin
  question="The population of Indonesia has been growing at a continuous rate of $1.12\%$ per year and is currently 258,316,051. If this rate continues, what will the population be in 10 more years? Round to the nearest whole person."
  answer="288929825"
  answerDisplay="288,929,825 people"
  hint="Use $A=A_0e^{rt}$ with $A_0=258{,}316{,}051$, $r=0.0112$, and $t=10$."
>}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 10.2: Evaluate and Graph Exponential Functions](https://openstax.org/books/intermediate-algebra-2e/pages/10-2-evaluate-and-graph-exponential-functions) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted the worked solutions for the web; omitted the Be Prepared quiz and media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback; and adapted selected end-of-section exercises into an interactive Practice block.</small>
