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
It passes through $(0,1)$ and $(1,4)$ and approaches $y=0$ to the left.
It passes through $(0,0)$ and $(1,4)$ and has vertical asymptote $x=0$.
It passes through $(0,1)$ and $(1,\tfrac14)$ and decreases.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which description matches the graph of $g(x)=5^x$?"
  answer="It passes through $(0,1)$ and $(1,5)$ and approaches $y=0$ to the left."
  hint="A base greater than 1 gives exponential growth."
>}}
It passes through $(0,1)$ and $(1,5)$ and approaches $y=0$ to the left.
It passes through $(0,5)$ and $(1,25)$ and approaches $x=0$.
It passes through $(0,1)$ and $(1,\tfrac15)$ and decreases.
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
It passes through $(0,1)$ and $(1,4)$ and increases.
It passes through $(0,1)$ and $(1,\tfrac14)$ and approaches $y=0$ to the right.
It passes through $(0,0)$ and has vertical asymptote $x=0$.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which description matches the graph of $g(x)=(\tfrac15)^x$?"
  answer="It passes through $(0,1)$ and $(1,\tfrac15)$ and approaches $y=0$ to the right."
  hint="Evaluate $g(0)$ and $g(1)$, then use the fact that $0<\tfrac15<1$."
>}}
It passes through $(0,1)$ and $(1,\tfrac15)$ and approaches $y=0$ to the right.
It passes through $(0,1)$ and $(1,5)$ and approaches $y=0$ to the left.
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
The graph shifts left 1 unit.
The graph shifts right 1 unit.
The graph shifts down 1 unit.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Compared with $f(x)=3^x$, how is $g(x)=3^{x+1}$ transformed?"
  answer="The graph shifts left 1 unit."
  hint="Write $x+1$ as $x-(-1)$ to identify the horizontal shift."
>}}
The graph shifts up 1 unit.
The graph shifts right 1 unit.
The graph shifts left 1 unit.
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
The graph shifts up 2 units and has horizontal asymptote $y=2$.
The graph shifts down 2 units and has horizontal asymptote $y=-2$.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Compared with $f(x)=4^x$, how is $g(x)=4^x-2$ transformed?"
  answer="The graph shifts down 2 units and has horizontal asymptote $y=-2$."
  hint="Subtracting 2 from the function shifts every point down 2 units."
>}}
The graph shifts left 2 units and has horizontal asymptote $y=0$.
The graph shifts up 2 units and has horizontal asymptote $y=2$.
The graph shifts down 2 units and has horizontal asymptote $y=-2$.
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

<div class="ap-figure">
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
  <path d="M 26 202.3 C 28.8 202 31.6 201.7 34.3 201.5 C 37.1 201.2 39.9 200.8 42.7 200.5 C 45.4 200.1 48.2 199.7 51 199.3 C 53.8 198.9 56.6 198.4 59.3 197.9 C 62.1 197.4 64.9 196.8 67.7 196.2 C 70.4 195.6 73.2 194.9 76 194.1 C 78.8 193.3 81.6 192.5 84.3 191.6 C 87.1 190.6 89.9 189.6 92.7 188.5 C 95.4 187.4 98.2 186.1 101 184.8 C 103.8 183.4 106.6 181.9 109.3 180.3 C 112.1 178.6 114.9 176.8 117.7 174.8 C 120.4 172.8 123.2 170.6 126 168.2 C 128.8 165.8 131.6 163.1 134.3 160.2 C 137.1 157.2 139.9 154 142.7 150.4 C 145.4 146.9 148.2 143 151 138.7 C 153.8 134.3 156.6 129.6 159.3 124.4 C 162.1 119.1 164.9 113.4 167.7 107 C 170.4 100.7 173.2 93 176 86" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,202.3 35.5,196.3 36.4,206.3" fill="currentColor"/>
  <polygon points="176,86 177,97.1 167.7,93.5" fill="currentColor"/>
  <path d="M 26 204.5 C 28.7 204.4 31.3 204.2 34 204.1 C 36.6 203.9 39.3 203.7 42 203.5 C 44.6 203.2 47.3 203 50 202.7 C 52.6 202.4 55.3 202 57.9 201.7 C 60.6 201.3 63.3 200.8 65.9 200.3 C 68.6 199.8 71.3 199.3 73.9 198.6 C 76.6 198 79.2 197.2 81.9 196.4 C 84.6 195.5 87.2 194.5 89.9 193.4 C 92.6 192.3 95.2 191 97.9 189.6 C 100.5 188.2 103.2 186.5 105.9 184.6 C 108.5 182.7 111.2 180.5 113.8 178.1 C 116.5 175.6 119.2 172.8 121.8 169.6 C 124.5 166.3 127.2 162.6 129.8 158.4 C 132.5 154.2 135.1 149.4 137.8 143.9 C 140.5 138.5 143.1 132.2 145.8 125 C 148.5 117.9 151.1 109.6 153.8 100.3 C 156.4 91 159.1 80.2 161.8 68.1 C 164.4 55.9 167.1 40 169.8 26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="26,204.5 35.7,198.9 36.3,208.9" fill="currentColor"/>
  <polygon points="169.8,26 172.8,36.8 163,34.9" fill="currentColor"/>
  <path d="M 26 204.9 C 28.6 204.8 31.1 204.7 33.7 204.5 C 36.3 204.4 38.9 204.2 41.4 204 C 44 203.9 46.6 203.6 49.2 203.4 C 51.7 203.2 54.3 202.9 56.9 202.6 C 59.4 202.2 62 201.9 64.6 201.4 C 67.2 201 69.7 200.5 72.3 199.9 C 74.9 199.4 77.5 198.7 80 198 C 82.6 197.2 85.2 196.3 87.7 195.3 C 90.3 194.3 92.9 193.2 95.5 191.9 C 98 190.5 100.6 189 103.2 187.2 C 105.8 185.5 108.3 183.4 110.9 181.1 C 113.5 178.8 116 176.1 118.6 173 C 121.2 169.9 123.8 166.3 126.3 162.2 C 128.9 158.1 131.5 153.3 134.1 147.9 C 136.6 142.4 139.2 136.1 141.8 128.9 C 144.3 121.7 146.9 113.3 149.5 103.7 C 152.1 94.2 154.6 83 157.2 70.3 C 159.8 57.6 162.4 40.8 164.9 26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,204.9 35.8,199.4 36.2,209.4" fill="currentColor"/>
  <polygon points="164.9,26 168.1,36.7 158.3,35" fill="currentColor"/>
  <circle cx="116" cy="176" r="4" fill="currentColor"/>
  <circle cx="146" cy="146" r="4" fill="currentColor"/>
  <circle cx="146" cy="124.5" r="4" fill="currentColor"/>
  <circle cx="146" cy="116" r="4" fill="currentColor"/>
  <text x="104.8" y="164.8" font-size="13" fill="currentColor" text-anchor="end">(0, 1)</text>
  <text x="157.2" y="166.2" font-size="13" fill="currentColor" text-anchor="start">2</text>
  <text x="132" y="128.5" font-size="13" fill="currentColor" text-anchor="end">e</text>
  <text x="134.8" y="104.8" font-size="13" fill="currentColor" text-anchor="end">3</text>
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
| $\begin{aligned}
x=3:&\quad \frac{e^{3^2}}{e^3}=e^{9-3}=e^6=e^{2(3)},\\
x=-1:&\quad \frac{e^{(-1)^2}}{e^3}=e^{1-3}=e^{-2}=e^{2(-1)}.
\end{aligned}$ |  |

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
  hint="Use $A=50(1.15)^8$ and round to the nearest whole bacterium."
>}}

{{< fillin
  question="A virus culture starts with 100 viruses and grows by $10\%$ each hour. How many viruses will there be after 24 hours?"
  answer="1102"
  answerDisplay="$1{,}102$ viruses"
  hint="Use $A=100(1.10)^{24}$ and round to the nearest whole virus."
>}}

{{< callout type="info" >}}
Access these online resources for additional instruction and practice with evaluating and graphing exponential functions.
{{< /callout >}}


---

<small>This section is adapted from [Intermediate Algebra 2e, Section 10.2: Evaluate and Graph Exponential Functions](https://openstax.org/books/intermediate-algebra-2e/pages/10-2-evaluate-and-graph-exponential-functions) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted the worked solutions for the web; omitted the Be Prepared quiz, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
