---
title: Evaluate and Graph Logarithmic Functions
description: >-
  Converting between exponential and logarithmic form, evaluating logarithmic functions, graphing logarithmic functions, and solving logarithmic applications.
source_section: "10.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**
- Convert between exponential and logarithmic form
- Evaluate logarithmic functions
- Graph Logarithmic functions
- Solve logarithmic equations
- Use logarithmic models in applications
{{< /callout >}}

We have spent some time finding the inverse of many functions. It works well to ‘undo’ an operation with another operation. Subtracting ‘undoes’ addition, multiplication ‘undoes’ division, taking the square root ‘undoes’ squaring.

As we studied the exponential function, we saw that it is one-to-one as its graphs pass the horizontal line test. This means an exponential function does have an inverse. If we try our algebraic method for finding an inverse, we run into a problem.

$$
\begin{array}{lrcl}
\text{Rewrite with }y=f(x). & y &=& a^x \\[4pt]
\text{Interchange the variables }x\text{ and }y. & x &=& a^y \\[4pt]
\text{Solve for }y. &&& \text{Oops! We have no way to solve for }y!
\end{array}
$$

To deal with this we define the logarithm function with base a to be the inverse of the exponential function $f(x)={a}^{x}.$ We use the notation ${f}^{-1}(x)={\text{log}}_{a}x$ and say the inverse function of the exponential function is the logarithmic function.

{{< callout type="info" >}}
**Logarithmic Function.** The function $f(x)={\text{log}}_{a}x$ is the logarithmic function with base $a$, where $a>0,$ $x>0,$ and $a\ne 1.$

$$
y=\log_a x
\quad\Longleftrightarrow\quad
x=a^y.
$$
{{< /callout >}}

## Convert Between Exponential and Logarithmic Form

Since the equations $y={\text{log}}_{a}x$ and $x={a}^{y}$ are equivalent, we can go back and forth between them. This will often be the method to solve some exponential and logarithmic equations. To help with converting back and forth let’s take a close look at the equations. See Figure 10.3. Notice the positions of the exponent and base.

$$
y=\log_a x \quad\Longleftrightarrow\quad x=a^y
$$

In both forms, $a$ is the **base**, $y$ is the **exponent**, and $x$ is the
resulting number.

If we realize the logarithm is the exponent it makes the conversion easier. You may want to repeat, “base to the exponent give us the number.”

**Example 10.18.** Convert to logarithmic form: ⓐ ${2}^{3}=8,$ ⓑ ${5}^{\tfrac{1}{2}}=\sqrt{5},$ and ⓒ ${(\tfrac{1}{2})}^{4}=\tfrac{1}{16}.$

**Solution.**

Identify the base and the exponent in each exponential equation:

| Exponential form | Logarithmic form |
| --- | --- |
| ${2}^{3}=8$ | $3=\log_{2}8$ |
| ${5}^{\tfrac{1}{2}}=\sqrt{5}$ | $\tfrac{1}{2}=\log_{5}\sqrt{5}$ |
| ${(\tfrac{1}{2})}^{4}=\tfrac{1}{16}$ | $4=\log_{\tfrac{1}{2}}\tfrac{1}{16}$ |

{{< multiplechoice
  question="Which choice correctly converts all three equations to logarithmic form: ⓐ $3^2=9$, ⓑ $7^{\tfrac12}=\sqrt7$, and ⓒ $(\tfrac13)^x=\tfrac1{27}$?"
  answer="ⓐ $\log_3 9=2$; ⓑ $\log_7\sqrt7=\tfrac12$; ⓒ $\log_{\tfrac13}\tfrac1{27}=x$"
  hint="In $a^y=x$, the equivalent logarithmic form is $\log_a x=y$."
>}}
ⓐ $\log_3 9=2$; ⓑ $\log_7\sqrt7=\tfrac12$; ⓒ $\log_{\tfrac13}\tfrac1{27}=x$
ⓐ $\log_9 3=2$; ⓑ $\log_{\sqrt7}7=\tfrac12$; ⓒ $\log_{\tfrac1{27}}\tfrac13=x$
ⓐ $\log_2 9=3$; ⓑ $\log_{\tfrac12}\sqrt7=7$; ⓒ $\log_x\tfrac1{27}=\tfrac13$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which choice correctly converts all three equations to logarithmic form: ⓐ $4^3=64$, ⓑ $4^{\tfrac13}=\sqrt[3]4$, and ⓒ $(\tfrac12)^x=\tfrac1{32}$?"
  answer="ⓐ $\log_4 64=3$; ⓑ $\log_4\sqrt[3]4=\tfrac13$; ⓒ $\log_{\tfrac12}\tfrac1{32}=x$"
  hint="Keep the exponential base as the logarithmic base."
>}}
ⓐ $\log_4 64=3$; ⓑ $\log_4\sqrt[3]4=\tfrac13$; ⓒ $\log_{\tfrac12}\tfrac1{32}=x$
ⓐ $\log_{64}4=3$; ⓑ $\log_{\sqrt[3]4}4=\tfrac13$; ⓒ $\log_{\tfrac1{32}}\tfrac12=x$
ⓐ $\log_3 64=4$; ⓑ $\log_{\tfrac13}\sqrt[3]4=4$; ⓒ $\log_x\tfrac1{32}=\tfrac12$
{{< /multiplechoice >}}

In the next example we do the reverse—convert logarithmic form to exponential form.

**Example 10.19.** Convert to exponential form: ⓐ $2={\text{log}}_{8}64,$ ⓑ $0={\text{log}}_{4}1,$ and ⓒ $-3={\text{log}}_{10}\tfrac{1}{1000}.$

**Solution.**

Identify the base and the exponent in each logarithmic equation:

| Logarithmic form | Exponential form |
| --- | --- |
| $2=\log_{8}64$ | $64=8^2$ |
| $0=\log_{4}1$ | $1=4^0$ |
| $-3=\log_{10}\tfrac{1}{1000}$ | $\tfrac{1}{1000}=10^{-3}$ |

{{< multiplechoice
  question="Which choice correctly converts all three equations to exponential form: ⓐ $3=\log_4 64$, ⓑ $0=\log_x1$, and ⓒ $-2=\log_{10}\tfrac1{100}$?"
  answer="ⓐ $4^3=64$; ⓑ $x^0=1$; ⓒ $10^{-2}=\tfrac1{100}$"
  hint="In $\log_a x=y$, the equivalent exponential form is $a^y=x$."
>}}
ⓐ $4^3=64$; ⓑ $x^0=1$; ⓒ $10^{-2}=\tfrac1{100}$
ⓐ $64^3=4$; ⓑ $1^0=x$; ⓒ $(\tfrac1{100})^{-2}=10$
ⓐ $3^4=64$; ⓑ $0^x=1$; ⓒ $(-2)^{10}=\tfrac1{100}$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which choice correctly converts all three equations to exponential form: ⓐ $3=\log_3 27$, ⓑ $0=\log_3 1$, and ⓒ $-1=\log_{10}\tfrac1{10}$?"
  answer="ⓐ $3^3=27$; ⓑ $3^0=1$; ⓒ $10^{-1}=\tfrac1{10}$"
  hint="The logarithm is the exponent on the base."
>}}
ⓐ $3^3=27$; ⓑ $3^0=1$; ⓒ $10^{-1}=\tfrac1{10}$
ⓐ $27^3=3$; ⓑ $1^0=3$; ⓒ $(\tfrac1{10})^{-1}=10$
ⓐ $3^{27}=3$; ⓑ $0^3=1$; ⓒ $(-1)^{10}=\tfrac1{10}$
{{< /multiplechoice >}}

## Evaluate Logarithmic Functions

We can solve and evaluate logarithmic equations by using the technique of converting the equation to its equivalent exponential equation.

**Example 10.20.** Find the value of x: ⓐ ${\text{log}}_{x}36=2,$ ⓑ ${\text{log}}_{4}x=3,$ and ⓒ ${\text{log}}_{\tfrac{1}{2}}\tfrac{1}{8}=x.$

**Solution.**

ⓐ

|  | ${\text{log}}_{x}36=2$ |
| --- | --- |
| Convert to exponential form. | ${x}^{2}=36$ |
| Solve the quadratic. | $x=6,x=-6$ |
| The base of a logarithmic function must be positive, so we eliminate $x=-6$. | $x=6\text{Therefore,}{\text{log}}_{6}36=2.$ |

ⓑ

|  | ${\text{log}}_{4}x=3$ |
| --- | --- |
| Convert to exponential form. | ${4}^{3}=x$ |
| Simplify. | $x=64\text{Therefore,}{\text{log}}_{4}64=3.$ |

ⓒ

|  | ${\text{log}}_{\tfrac{1}{2}}\tfrac{1}{8}=x$ |
| --- | --- |
| Convert to exponential form. | ${(\tfrac{1}{2})}^{x}=\tfrac{1}{8}$ |
| Rewrite $\tfrac{1}{8}$ as ${(\tfrac{1}{2})}^{3}$. | ${(\tfrac{1}{2})}^{x}={(\tfrac{1}{2})}^{3}$ |
| With the same base, the exponents must be equal. | $x=3\text{Therefore,}{\text{log}}_{\tfrac{1}{2}}\tfrac{1}{8}=3$ |

{{< fillin
  question="Find $x$ in ⓐ $\log_x64=2$, ⓑ $\log_5x=3$, and ⓒ $\log_{\tfrac12}\tfrac14=x$. Enter the results as an ordered triple."
  answer="(8,125,2)"
  answerDisplay="$\left(8,\ 125,\ 2\right)$"
  hint="Convert each logarithmic equation to exponential form."
  placeholder="ordered triple"
>}}

{{< fillin
  question="Find $x$ in ⓐ $\log_x81=2$, ⓑ $\log_3x=5$, and ⓒ $\log_{\tfrac13}\tfrac1{27}=x$. Enter the results as an ordered triple."
  answer="(9,243,3)"
  answerDisplay="$\left(9,\ 243,\ 3\right)$"
  hint="Rewrite each statement in exponential form before solving."
  placeholder="ordered triple"
>}}

When see an expression such as ${\text{log}}_{3}27,$ we can find its exact value two ways. By inspection we realize it means “3 to what power will be 27”? Since ${3}^{3}=27,$ we know ${\text{log}}_{3}27=3.$ An alternate way is to set the expression equal to $x$ and then convert it into an exponential equation.

**Example 10.21.** Find the exact value of each logarithm without using a calculator: ⓐ ${\text{log}}_{5}25,$ ⓑ ${\text{log}}_{9}3,$ and ⓒ ${\text{log}}_{2}\tfrac{1}{16}.$

**Solution.**

ⓐ

|  | ${\text{log}}_{5}25$ |
| --- | --- |
| 5 to what power will be 25? | ${\text{log}}_{5}25=2$ |
| Or |  |
| Set the expression equal to $x$. | ${\text{log}}_{5}25=x$ |
| Change to exponential form. | ${5}^{x}=25$ |
| Rewrite 25 as ${5}^{2}$. | ${5}^{x}={5}^{2}$ |
| With the same base the exponents must be equal. | $x=2\text{Therefore,}{\text{log}}_{5}25=2.$ |

ⓑ

|  | ${\text{log}}_{9}3$ |
| --- | --- |
| Set the expression equal to $x$. | ${\text{log}}_{9}3=x$ |
| Change to exponential form. | ${9}^{x}=3$ |
| Rewrite 9 as ${3}^{2}$. | ${({3}^{2})}^{x}={3}^{1}$ |
| Simplify the exponents. | ${3}^{2x}={3}^{1}$ |
| With the same base the exponents must be equal. | $2x=1$ |
| Solve the equation. | $x=\tfrac{1}{2}\text{Therefore,}{\text{log}}_{9}3=\tfrac{1}{2}.$ |

ⓒ

|  | ${\text{log}}_{2}\tfrac{1}{16}$ |
| --- | --- |
| Set the expression equal to $x$. | ${\text{log}}_{2}\tfrac{1}{16}=x$ |
| Change to exponential form. | ${2}^{x}=\tfrac{1}{16}$ |
| Rewrite 16 as ${2}^{4}$. | ${2}^{x}=\tfrac{1}{{2}^{4}}$ |
|  | ${2}^{x}={2}^{-4}$ |
| With the same base the exponents must be equal. | $x=-4\text{Therefore,}{\text{log}}_{2}\tfrac{1}{16}=-4.$ |

{{< fillin
  question="Find ⓐ $\log_{12}144$, ⓑ $\log_4 2$, and ⓒ $\log_2\tfrac1{32}$ exactly. Enter the results as an ordered triple."
  answer="(2,\frac{1}{2},-5)"
  answerDisplay="$\left(2,\ \tfrac12,\ -5\right)$"
  hint="Ask which power of each base produces the logarithm's argument."
  placeholder="ordered triple"
>}}

{{< fillin
  question="Find ⓐ $\log_9 81$, ⓑ $\log_8 2$, and ⓒ $\log_3\tfrac1{9}$ exactly. Enter the results as an ordered triple."
  answer="(2,\frac{1}{3},-2)"
  answerDisplay="$\left(2,\ \tfrac13,\ -2\right)$"
  hint="Rewrite 81, 2, and $\tfrac19$ as powers of the corresponding bases."
  placeholder="ordered triple"
>}}

## Graph Logarithmic Functions

To graph a logarithmic function $y={\text{log}}_{a}x,$ it is easiest to convert the equation to its exponential form, $x={a}^{y}.$ Generally, when we look for ordered pairs for the graph of a function, we usually choose an x-value and then determine its corresponding y-value. In this case you may find it easier to choose y-values and then determine its corresponding x-value.

**Example 10.22.** Graph $y={\text{log}}_{2}x.$

**Solution.**

To graph the function, we will first rewrite the logarithmic equation, $y={\text{log}}_{2}x,$ in exponential form, ${2}^{y}=x.$

We will use point plotting to graph the function. It will be easier to start with values of y and then get x.

| $y$ | ${2}^{y}=x$ | $(x,y)$ |
| --- | --- | --- |
| $-2$ | ${2}^{-2}=\tfrac{1}{{2}^{2}}=\tfrac{1}{4}$ | $(\tfrac{1}{4},-2)$ |
| $-1$ | ${2}^{-1}=\tfrac{1}{{2}^{1}}=\tfrac{1}{2}$ | $(\tfrac{1}{2},-1)$ |
| 0 | ${2}^{0}=1$ | $(1,0)$ |
| 1 | ${2}^{1}=2$ | $(2,1)$ |
| 2 | ${2}^{2}=4$ | $(4,2)$ |
| 3 | ${2}^{3}=8$ | $(8,3)$ |

{{< multiplechoice
  question="Which description matches the graph of $y=\log_3x$?"
  answer="It is increasing, passes through $(1,0)$ and $(3,1)$, and has vertical asymptote $x=0$."
  hint="A logarithmic graph is the reflection of its exponential inverse across $y=x$."
>}}
It is increasing, passes through $(1,0)$ and $(3,1)$, and has vertical asymptote $x=0$.
It is decreasing, passes through $(0,1)$, and has horizontal asymptote $y=0$.
It is increasing, passes through $(0,1)$ and $(1,3)$, and has horizontal asymptote $y=0$.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which description matches the graph of $y=\log_5x$?"
  answer="It is increasing, passes through $(1,0)$ and $(5,1)$, and has vertical asymptote $x=0$."
  hint="Evaluate $\log_5 1$ and $\log_5 5$, and note that the base is greater than 1."
>}}
It is increasing, passes through $(1,0)$ and $(5,1)$, and has vertical asymptote $x=0$.
It is decreasing, passes through $(1,0)$ and $(\tfrac15,1)$, and has vertical asymptote $x=0$.
It is increasing, passes through $(0,1)$ and $(1,5)$, and has horizontal asymptote $y=0$.
{{< /multiplechoice >}}

The graphs of $y={\text{log}}_{2}x,$ $y={\text{log}}_{3}x,$ and $y={\text{log}}_{5}x$ are the shape we expect from a logarithmic function where $a>1.$

We notice that for each function the graph contains the point $(1,0).$ This make sense because $0={\text{log}}_{a}1$ means ${a}^{0}=1$ which is true for any a.

The graph of each function, also contains the point $(a,1).$ This makes sense as $1={\text{log}}_{a}a$ means ${a}^{1}=a.$ which is true for any a.

Notice too, the graph of each function $y={\text{log}}_{a}x$ also contains the point $(\tfrac{1}{a},-1).$ This makes sense as $-1={\text{log}}_{a}\tfrac{1}{a}$ means ${a}^{-1}=\tfrac{1}{a},$ which is true for any a.

Look at each graph again. Now we will see that many characteristics of the logarithm function are simply ’mirror images’ of the characteristics of the corresponding exponential function.

What is the domain of the function? The graph never hits the y-axis. The domain is all positive numbers. We write the domain in interval notation as $(0,\infty ).$

What is the range for each function? From the graphs we can see that the range is the set of all real numbers. There is no restriction on the range. We write the range in interval notation as $(-\infty ,\infty ).$

When the graph approaches the y-axis so very closely but will never cross it, we call the line $x=0,$ the y-axis, a vertical asymptote.

{{< callout type="info" >}}
**Properties of the Graph of y = log a x y = log a x when a > 1 a > 1.** | Domain | $(0,\infty )$ |
| --- | --- |
| Range | $(-\infty ,\infty )$ |
| $x\text{-}\text{intercept}$ | $(1,0)$ |
| $y\text{-}\text{intercept}$ | None |
| Contains | $(a,1),$ $(\tfrac{1}{a},-1)$ |
| Asymptote | $y\text{-}\text{axis}$ |
{{< /callout >}}

Our next example looks at the graph of $y={\text{log}}_{a}x$ when $0<a<1.$

**Example 10.23.** Graph $y={\text{log}}_{\tfrac{1}{3}}x.$

**Solution.**

To graph the function, we will first rewrite the logarithmic equation, $y={\text{log}}_{\tfrac{1}{3}}x,$ in exponential form, ${(\tfrac{1}{3})}^{y}=x.$

We will use point plotting to graph the function. It will be easier to start with values of y and then get x.

| $y$ | ${(\tfrac{1}{3})}^{y}=x$ | $(x,y)$ |
| --- | --- | --- |
| $-2$ | ${(\tfrac{1}{3})}^{-2}={3}^{2}=9$ | $(9,-2)$ |
| $-1$ | ${(\tfrac{1}{3})}^{-1}={3}^{1}=3$ | $(3,-1)$ |
| 0 | ${(\tfrac{1}{3})}^{0}=1$ | $(1,0)$ |
| 1 | ${(\tfrac{1}{3})}^{1}=\tfrac{1}{3}$ | $(\tfrac{1}{3},1)$ |
| 2 | ${(\tfrac{1}{3})}^{2}=\tfrac{1}{9}$ | $(\tfrac{1}{9},2)$ |
| 3 | ${(\tfrac{1}{3})}^{3}=\tfrac{1}{27}$ | $(\tfrac{1}{27},3)$ |

{{< multiplechoice
  question="Which description matches the graph of $y=\log_{\tfrac12}x$?"
  answer="It is decreasing, passes through $(1,0)$ and $(\tfrac12,1)$, and has vertical asymptote $x=0$."
  hint="A logarithm with a base between 0 and 1 is decreasing."
>}}
It is increasing, passes through $(1,0)$ and $(2,1)$, and has vertical asymptote $x=0$.
It is decreasing, passes through $(1,0)$ and $(\tfrac12,1)$, and has vertical asymptote $x=0$.
It is decreasing, passes through $(0,1)$, and has horizontal asymptote $y=0$.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which description matches the graph of $y=\log_{\tfrac14}x$?"
  answer="It is decreasing, passes through $(1,0)$ and $(\tfrac14,1)$, and has vertical asymptote $x=0$."
  hint="Use $(\tfrac14)^1=\tfrac14$ and the inverse relationship between exponential and logarithmic functions."
>}}
It is decreasing, passes through $(1,0)$ and $(\tfrac14,1)$, and has vertical asymptote $x=0$.
It is increasing, passes through $(1,0)$ and $(4,1)$, and has vertical asymptote $x=0$.
It is decreasing, passes through $(0,1)$ and $(1,\tfrac14)$, and has horizontal asymptote $y=0$.
{{< /multiplechoice >}}

Now, let’s look at the graphs $y={\text{log}}_{\tfrac{1}{2}}x,y={\text{log}}_{\tfrac{1}{3}}x$ and $y={\text{log}}_{\tfrac{1}{4}}x$, so we can identify some of the properties of logarithmic functions where $0<a<1.$

The graphs of all have the same basic shape. While this is the shape we expect from a logarithmic function where $0<a<1.$

We notice, that for each function again, the graph contains the points, $(1,0),$ $(a,1),$ $(\tfrac{1}{a},-1).$ This make sense for the same reasons we argued above.

We notice the domain and range are also the same—the domain is $(0,\infty )$ and the range is $(-\infty ,\infty ).$ The $y$-axis is again the vertical asymptote.

We will summarize these properties in the chart below. Which also include when $a>1.$

{{< callout type="info" >}}
**Properties of the Graph of y = log a x y = log a x.** | when $a>1$ | when $0<a<1$ |  |  |
| --- | --- | --- | --- |
| Domain | $(0,\infty )$ | Domain | $(0,\infty )$ |
| Range | $(-\infty ,\infty )$ | Range | $(-\infty ,\infty )$ |
| $x$-intercept | $(1,0)$ | $x$-intercept | $(1,0)$ |
| $y$-intercept | none | $y$-intercept | None |
| Contains | $(a,1),$ $(\tfrac{1}{a},-1)$ | Contains | $(a,1),$ $(\tfrac{1}{a},-1)$ |
| Asymptote | $y$-axis | Asymptote | $y$-axis |
| Basic shape | increasing | Basic shape | Decreasing |
{{< /callout >}}

We talked earlier about how the logarithmic function ${f}^{-1}(x)={\text{log}}_{a}x$ is the inverse of the exponential function $f(x)={a}^{x}.$ The graphs in Figure 10.4 show both the exponential (blue) and logarithmic (red) functions on the same graph for both $a>1$ and $0<a<1.$

<div class="ap-figure">
<svg role="img" aria-label="For base 3, the exponential graph y = 3^x and logarithmic graph y = log base 3 of x are reflections across the dashed line y = x." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304 304" width="304" height="304" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="278" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="54" y1="278" x2="54" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="82" y1="278" x2="82" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="278" x2="138" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="278" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="278" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="222" y1="278" x2="222" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="278" x2="250" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="278" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="278" x2="278" y2="278" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="250" x2="278" y2="250" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="222" x2="278" y2="222" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="278" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="138" x2="278" y2="138" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="110" x2="278" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="82" x2="278" y2="82" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="54" x2="278" y2="54" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="194" x2="280" y2="194" stroke="currentColor" stroke-width="1"/>
  <line x1="110" y1="24" x2="110" y2="280" stroke="currentColor" stroke-width="1"/>
  <polygon points="290,194 280,199 280,189" fill="currentColor"/>
  <polygon points="110,14 115,24 105,24" fill="currentColor"/>
  <polygon points="14,194 24,189 24,199" fill="currentColor"/>
  <polygon points="110,290 105,280 115,280" fill="currentColor"/>
  <text x="288" y="186" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="118" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="191" x2="26" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="209" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="54" y1="191" x2="54" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="209" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="82" y1="191" x2="82" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="82" y="209" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="138" y1="191" x2="138" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="138" y="209" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="166" y1="191" x2="166" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="209" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="194" y1="191" x2="194" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="209" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="222" y1="191" x2="222" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="222" y="209" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="250" y1="191" x2="250" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="209" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="278" y1="191" x2="278" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="278" y="209" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="107" y1="278" x2="113" y2="278" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="282" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="107" y1="250" x2="113" y2="250" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="254" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="107" y1="222" x2="113" y2="222" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="226" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="107" y1="166" x2="113" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="170" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="107" y1="138" x2="113" y2="138" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="142" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="107" y1="110" x2="113" y2="110" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="114" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="107" y1="82" x2="113" y2="82" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="86" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="107" y1="54" x2="113" y2="54" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="58" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="107" y1="26" x2="113" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="27.1" y1="276.9" x2="276.9" y2="27.1" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="284,20 280.5,30.6 273.4,23.5" fill="currentColor"/>
  <polygon points="20,284 23.5,273.4 30.6,280.5" fill="currentColor"/>
  <path d="M 26 193 C 28 192.9 29.9 192.8 31.9 192.7 C 33.9 192.6 35.8 192.5 37.8 192.4 C 39.8 192.2 41.7 192.1 43.7 191.9 C 45.6 191.8 47.6 191.6 49.6 191.4 C 51.5 191.2 53.5 191 55.5 190.7 C 57.4 190.5 59.4 190.2 61.4 189.8 C 63.3 189.5 65.3 189.2 67.3 188.8 C 69.2 188.4 71.2 187.9 73.2 187.4 C 75.1 186.9 77.1 186.3 79 185.7 C 81 185.1 83 184.3 84.9 183.5 C 86.9 182.7 88.9 181.8 90.8 180.8 C 92.8 179.8 94.8 178.6 96.7 177.4 C 98.7 176.1 100.7 174.6 102.6 173 C 104.6 171.4 106.6 169.6 108.5 167.6 C 110.5 165.6 112.4 163.3 114.4 160.7 C 116.4 158.2 118.3 155.3 120.3 152.1 C 122.3 148.8 124.2 145.2 126.2 141.1 C 128.2 137.1 130.1 132.5 132.1 127.4 C 134.1 122.3 136 116.5 138 110.1 C 139.9 103.6 141.9 96.3 143.9 88.2 C 145.8 80.1 147.8 70.9 149.8 60.7 C 151.7 50.5 153.7 37.6 155.7 26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,193 35.8,187.5 36.2,197.5" fill="currentColor"/>
  <polygon points="155.7,26 158.9,36.7 149.1,35" fill="currentColor"/>
  <path d="M 111 278 C 111.1 276 111.2 273.9 111.3 272.1 C 111.4 269.9 111.5 268 111.6 266.2 C 111.8 264 111.9 262.1 112.1 260.3 C 112.3 258.1 112.4 256.2 112.6 254.4 C 112.8 252.2 113.1 250.3 113.3 248.5 C 113.6 246.3 113.9 244.4 114.2 242.6 C 114.5 240.4 114.9 238.5 115.2 236.7 C 115.7 234.5 116.1 232.6 116.6 230.8 C 117.2 228.7 117.7 226.7 118.3 225 C 119 222.8 119.8 220.8 120.5 219.1 C 121.4 216.9 122.3 214.9 123.2 213.2 C 124.3 211 125.5 209 126.6 207.3 C 128.1 205.1 129.5 203.1 131 201.4 C 132.8 199.2 134.6 197.2 136.4 195.5 C 138.7 193.3 141 191.3 143.3 189.6 C 146.2 187.4 149.1 185.4 151.9 183.7 C 155.6 181.5 159.2 179.6 162.9 177.8 C 167.4 175.6 172 173.7 176.6 171.9 C 182.4 169.7 188.2 167.8 193.9 166 C 201.2 163.8 208.5 161.9 215.8 160.1 C 225 157.9 234.1 156 243.3 154.2 C 254.9 152 266.4 150.3 278 148.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="111,278 106.5,267.8 116.5,268.2" fill="currentColor"/>
  <polygon points="278,148.3 269,154.9 267.3,145.1" fill="currentColor"/>
  <circle cx="110" cy="166" r="4" fill="currentColor"/>
  <circle cx="138" cy="194" r="4" fill="currentColor"/>
  <text x="237.2" y="93.4" font-size="13" fill="currentColor" text-anchor="start">y = x</text>
  <text x="149.2" y="62.4" font-size="13" fill="currentColor" text-anchor="start">exponential</text>
  <text x="227.6" y="163.2" font-size="13" fill="currentColor" text-anchor="start">logarithm</text>
</svg>
</div>

<div class="ap-figure">
<svg role="img" aria-label="For base 1/3, the exponential graph y = (1/3)^x and logarithmic graph y = log base 1/3 of x are reflections across the dashed line y = x." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304 304" width="304" height="304" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="278" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="54" y1="278" x2="54" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="82" y1="278" x2="82" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="278" x2="138" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="278" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="278" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="222" y1="278" x2="222" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="278" x2="250" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="278" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="278" x2="278" y2="278" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="250" x2="278" y2="250" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="222" x2="278" y2="222" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="278" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="138" x2="278" y2="138" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="110" x2="278" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="82" x2="278" y2="82" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="54" x2="278" y2="54" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="194" x2="280" y2="194" stroke="currentColor" stroke-width="1"/>
  <line x1="110" y1="24" x2="110" y2="280" stroke="currentColor" stroke-width="1"/>
  <polygon points="290,194 280,199 280,189" fill="currentColor"/>
  <polygon points="110,14 115,24 105,24" fill="currentColor"/>
  <polygon points="14,194 24,189 24,199" fill="currentColor"/>
  <polygon points="110,290 105,280 115,280" fill="currentColor"/>
  <text x="288" y="186" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="118" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="191" x2="26" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="209" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="54" y1="191" x2="54" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="209" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="82" y1="191" x2="82" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="82" y="209" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="138" y1="191" x2="138" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="138" y="209" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="166" y1="191" x2="166" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="209" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="194" y1="191" x2="194" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="209" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="222" y1="191" x2="222" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="222" y="209" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="250" y1="191" x2="250" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="209" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="278" y1="191" x2="278" y2="197" stroke="currentColor" stroke-width="1"/>
  <text x="278" y="209" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="107" y1="278" x2="113" y2="278" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="282" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="107" y1="250" x2="113" y2="250" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="254" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="107" y1="222" x2="113" y2="222" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="226" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="107" y1="166" x2="113" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="170" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="107" y1="138" x2="113" y2="138" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="142" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="107" y1="110" x2="113" y2="110" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="114" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="107" y1="82" x2="113" y2="82" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="86" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="107" y1="54" x2="113" y2="54" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="58" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="107" y1="26" x2="113" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="27.1" y1="276.9" x2="276.9" y2="27.1" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="284,20 280.5,30.6 273.4,23.5" fill="currentColor"/>
  <polygon points="20,284 23.5,273.4 30.6,280.5" fill="currentColor"/>
  <path d="M 64.3 26 C 66.3 37.6 68.3 50.5 70.2 60.7 C 72.2 70.9 74.2 80.1 76.1 88.2 C 78.1 96.3 80.1 103.6 82 110.1 C 84 116.5 85.9 122.3 87.9 127.4 C 89.9 132.5 91.8 137.1 93.8 141.1 C 95.8 145.2 97.7 148.8 99.7 152.1 C 101.7 155.3 103.6 158.2 105.6 160.7 C 107.6 163.3 109.5 165.6 111.5 167.6 C 113.4 169.6 115.4 171.4 117.4 173 C 119.3 174.6 121.3 176.1 123.3 177.4 C 125.2 178.6 127.2 179.8 129.2 180.8 C 131.1 181.8 133.1 182.7 135.1 183.5 C 137 184.3 139 185.1 141 185.7 C 142.9 186.3 144.9 186.9 146.8 187.4 C 148.8 187.9 150.8 188.4 152.7 188.8 C 154.7 189.2 156.7 189.5 158.6 189.8 C 160.6 190.2 162.6 190.5 164.5 190.7 C 166.5 191 168.5 191.2 170.4 191.4 C 172.4 191.6 174.4 191.8 176.3 191.9 C 178.3 192.1 180.2 192.2 182.2 192.4 C 184.2 192.5 186.1 192.6 188.1 192.7 C 190.1 192.8 192 192.9 194 193" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="64.3,26 70.9,35 61.1,36.7" fill="currentColor"/>
  <polygon points="194,193 183.8,197.5 184.2,187.5" fill="currentColor"/>
  <path d="M 111 110 C 111.1 112 111.2 114.1 111.3 115.9 C 111.4 118.1 111.5 120 111.6 121.8 C 111.8 124 111.9 125.9 112.1 127.7 C 112.3 129.9 112.4 131.8 112.6 133.6 C 112.8 135.8 113.1 137.7 113.3 139.5 C 113.6 141.7 113.9 143.6 114.2 145.4 C 114.5 147.6 114.9 149.5 115.2 151.3 C 115.7 153.5 116.1 155.4 116.6 157.2 C 117.2 159.3 117.7 161.3 118.3 163 C 119 165.2 119.8 167.2 120.5 168.9 C 121.4 171.1 122.3 173.1 123.2 174.8 C 124.3 177 125.5 179 126.6 180.7 C 128.1 182.9 129.5 184.9 131 186.6 C 132.8 188.8 134.6 190.8 136.4 192.5 C 138.7 194.7 141 196.7 143.3 198.4 C 146.2 200.6 149.1 202.6 151.9 204.3 C 155.6 206.5 159.2 208.4 162.9 210.2 C 167.4 212.4 172 214.3 176.6 216.1 C 182.4 218.3 188.2 220.2 193.9 222 C 201.2 224.2 208.5 226.1 215.8 227.9 C 225 230.1 234.1 232 243.3 233.8 C 254.9 236 266.4 237.7 278 239.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="111,110 116.5,119.8 106.5,120.2" fill="currentColor"/>
  <polygon points="278,239.7 267.3,242.9 269,233.1" fill="currentColor"/>
  <circle cx="110" cy="166" r="4" fill="currentColor"/>
  <circle cx="138" cy="194" r="4" fill="currentColor"/>
  <text x="237.2" y="93.4" font-size="13" fill="currentColor" text-anchor="start">y = x</text>
  <text x="82" y="62.4" font-size="13" fill="currentColor" text-anchor="start">exponential</text>
  <text x="224.8" y="227.6" font-size="13" fill="currentColor" text-anchor="start">logarithm</text>
</svg>
</div>

Notice how the graphs are reflections of each other through the line $y=x.$ We know this is true of inverse functions. Keeping a visual in your mind of these graphs will help you remember the domain and range of each function. Notice the x-axis is the horizontal asymptote for the exponential functions and the y-axis is the vertical asymptote for the logarithmic functions.

## Solve Logarithmic Equations

When we talked about exponential functions, we introduced the number e. Just as e was a base for an exponential function, it can be used a base for logarithmic functions too. The logarithmic function with base e is called the natural logarithmic function. The function $f(x)={\text{log}}_{e}x$ is generally written $f(x)=\text{ln}x$ and we read it as “el en of $x$.”

{{< callout type="info" >}}
**Natural Logarithmic Function.** The function $f(x)=\text{ln}x$ is the natural logarithmic function with base $e,$ where $x>0.$
{{< /callout >}}

When the base of the logarithm function is 10, we call it the common logarithmic function and the base is not shown. If the base a of a logarithm is not shown, we assume it is 10.

{{< callout type="info" >}}
**Common Logarithmic Function.** The function $f(x)=\text{log}x$ is the common logarithmic function with base $10$, where $x>0.$
{{< /callout >}}

Use the calculator's **log** key for common logarithms and its **ln** key for
natural logarithms.

To solve logarithmic equations, one strategy is to change the equation to exponential form and then solve the exponential equation as we did before. As we solve logarithmic equations, $y={\text{log}}_{a}x$, we need to remember that for the base a, $a>0$ and $a\ne 1.$ Also, the domain is $x>0.$ Just as with radical equations, we must check our solutions to eliminate any extraneous solutions.

**Example 10.24.** Solve: ⓐ ${\text{log}}_{a}49=2$ and ⓑ $\text{ln}x=3.$

**Solution.**

ⓐ

|  | ${\text{log}}_{a}49=2$ |
| --- | --- |
| Rewrite in exponential form. | ${a}^{2}=49$ |
| Solve the equation using the square root property. | $a=\pm 7$ |
| The base cannot be negative, so we eliminate $a=-7.$ | $a=7$ |
| Check. |  |
| $\begin{array}{llllll}a=7 & {\text{log}}_{a}49 & = & 2 \\ & {\text{log}}_{7}49 & = & 2 \\ & {7}^{2} & = & 49 \\ & 49 & = & 49✓ \\\end{array}$ |  |

ⓑ

|  | $\text{ln}x=3$ |
| --- | --- |
| Rewrite in exponential form. | ${e}^{3}=x$ |
| Check. |  |
| $\begin{array}{llllll} \\x={e}^{3} & \text{ln}x & = & 3 \\ & \text{ln}{e}^{3} & = & 3 \\ & {e}^{3} & = & {e}^{3}✓ \\\end{array}$ |  |

{{< fillin
  question="Solve ⓐ $\log_a121=2$ and ⓑ $\ln x=7$. Enter $(a,x)$ as an ordered pair."
  answer="(11,e^7)"
  answerDisplay="$\left(11,\ e^7\right)$"
  hint="Convert both equations to exponential form."
  placeholder="ordered pair"
>}}

{{< fillin
  question="Solve ⓐ $\log_a64=3$ and ⓑ $\ln x=9$. Enter $(a,x)$ as an ordered pair."
  answer="(4,e^9)"
  answerDisplay="$\left(4,\ e^9\right)$"
  hint="Use $a^3=64$ and remember that $\ln$ has base $e$."
  placeholder="ordered pair"
>}}

**Example 10.25.** Solve: ⓐ ${\text{log}}_{2}(3x-5)=4$ and ⓑ $\text{ln}{e}^{2x}=4.$

**Solution.**

ⓐ

|  | ${\text{log}}_{2}(3x-5)=4$ |
| --- | --- |
| Rewrite in exponential form. | ${2}^{4}=3x-5$ |
| Simplify. | $16=3x-5$ |
| Solve the equation. | $21=3x$ |
|  | $7=x$ |
| Check. |  |
| $\begin{array}{llllll}x=7 & {\text{log}}_{2}(3x-5) & = & 4 \\ & {\text{log}}_{2}(3\cdot 7-5) & = & 4 \\ & {\text{log}}_{2}(16) & = & 4 \\ & {2}^{4} & = & 16 \\ & 16 & = & 16✓ \\\end{array}$ |  |

ⓑ

|  | $\ln {e}^{2x}=4$ |
| --- | --- |
| Rewrite in exponential form. | ${e}^{4}={e}^{2x}$ |
| Since the bases are the same the exponents are equal. | $4=2x$ |
| Solve the equation. | $2=x$ |
| Check. |  |
| $\begin{array}{llllll}x=2 & \ln {e}^{2x} & = & 4 \\ & \ln {e}^{2\cdot 2} & = & 4 \\ & \ln {e}^{4} & = & 4 \\ & {e}^{4} & = & {e}^{4}✓ \\\end{array}$ |  |

{{< fillin
  question="Solve ⓐ $\log_2(5x-1)=6$ and ⓑ $\ln(e^{3x})=6$. Enter the two $x$-values as an ordered pair."
  answer="(13,2)"
  answerDisplay="$\left(13,\ 2\right)$"
  hint="Convert the first equation to exponential form and apply the inverse property to the second."
  placeholder="ordered pair"
>}}

{{< fillin
  question="Solve ⓐ $\log_3(4x+3)=3$ and ⓑ $\ln(e^{4x})=4$. Enter the two $x$-values as an ordered pair."
  answer="(6,1)"
  answerDisplay="$\left(6,\ 1\right)$"
  hint="Rewrite the logarithmic equation exponentially; simplify $\ln(e^{4x})$ directly."
  placeholder="ordered pair"
>}}

## Use Logarithmic Models in Applications

There are many applications that are modeled by logarithmic equations. We will first look at the logarithmic equation that gives the decibel (dB) level of sound. Decibels range from 0, which is barely audible to 160, which can rupture an eardrum. The ${10}^{-12}$ in the formula represents the intensity of sound that is barely audible.

{{< callout type="info" >}}
**Decibel Level of Sound.** The loudness level, D, measured in decibels, of a sound of intensity, I, measured in watts per square inch is

$$
D=10\log\left(\tfrac{I}{10^{-12}}\right).
$$
{{< /callout >}}

**Example 10.26.** Extended exposure to noise that measures 85 dB can cause permanent damage to the inner ear which will result in hearing loss. What is the decibel level of music coming through ear phones with intensity ${10}^{-2}$ watts per square inch?

**Solution.**

|  | $D=10\log\left(\tfrac{I}{10^{-12}}\right)$ |
| --- | --- |
| Substitute in the intensity level, I. | $D=10\log\left(\tfrac{10^{-2}}{10^{-12}}\right)$ |
| Simplify. | $D=10\log(10^{10})$ |
| Since $\log(10^{10})=10$. | $D=10(10)$ |
| Multiply. | $D=100$ |
|  | The decibel level of music coming through earphones is 100 dB. |

{{< fillin
  question="What is the decibel level of a quiet dishwasher with intensity $10^{-7}$ watts per square inch?"
  answer="50"
  answerDisplay="50 dB"
  hint="Use $D=10\log(\tfrac{I}{10^{-12}})$."
>}}

{{< fillin
  question="What is the decibel level of heavy city traffic with intensity $10^{-3}$ watts per square inch?"
  answer="90"
  answerDisplay="90 dB"
  hint="Substitute the intensity into $D=10\log(\tfrac{I}{10^{-12}})$."
>}}

The magnitude $R$ of an earthquake is measured by a logarithmic scale called the Richter scale. The model is $R=\text{log}I,$ where $I$ is the intensity of the shock wave. This model provides a way to measure earthquake intensity.

{{< callout type="info" >}}
**Earthquake Intensity.** The magnitude R of an earthquake is measured by $R=\text{log}I,$ where I is the intensity of its shock wave.
{{< /callout >}}

**Example 10.27.** In 1906, San Francisco experienced an intense earthquake with a magnitude of 7.8 on the Richter scale. Over 80% of the city was destroyed by the resulting fires. In 2014, Los Angeles experienced a moderate earthquake that measured 5.1 on the Richter scale and caused $108 million dollars of damage. Compare the intensities of the two earthquakes.

**Solution.**

To compare the intensities, we first need to convert the magnitudes to intensities using the log formula. Then we will set up a ratio to compare the intensities.

| Convert the magnitudes to intensities. | $R=\text{log}I$ |
| --- | --- |
| $\text{1906 earthquake}$ | $7.8=\text{log}I$ |
| $\text{Convert to exponential form.}$ | $I={10}^{7.8}$ |
| $\text{2014 earthquake}$ | $5.1=\text{log}I$ |
| $\text{Convert to exponential form.}$ | $I={10}^{5.1}$ |
| Form a ratio of the intensities. | $\tfrac{\text{Intensity for }1906}{\text{Intensity for }2014}$ |
| Substitute in the values. | $\tfrac{{10}^{7.8}}{{10}^{5.1}}$ |
| Divide by subtracting the exponents. | ${10}^{2.7}$ |
| Evaluate. | $501$ |
|  | The intensity of the 1906 earthquake was about 501 times the intensity of the 2014 earthquake. |

{{< fillin
  question="An earthquake measured 7.8 and another measured 6.9 on the Richter scale. About how many times as intense was the first earthquake?"
  answer="8"
  answerDisplay="about 8 times as intense"
  hint="The intensity ratio is $10^{7.8-6.9}$; round to the nearest whole number."
>}}

{{< fillin
  question="An earthquake in Chile measured 8.2 and one in Los Angeles measured 5.1. About how many times as intense was the Chile earthquake?"
  answer="1259"
  answerDisplay="about $1{,}259$ times as intense"
  hint="Compute $10^{8.2-5.1}$ and round to the nearest whole number."
>}}

{{< callout type="info" >}}
**Media.** Access these online resources for additional instruction and practice with evaluating and graphing logarithmic functions.
{{< /callout >}}


---

<small>This section is adapted from [Intermediate Algebra 2e, Section 10.3: Evaluate and Graph Logarithmic Functions](https://openstax.org/books/intermediate-algebra-2e/pages/10-3-evaluate-and-graph-logarithmic-functions) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted the worked solutions for the web; omitted the Be Prepared quiz, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
