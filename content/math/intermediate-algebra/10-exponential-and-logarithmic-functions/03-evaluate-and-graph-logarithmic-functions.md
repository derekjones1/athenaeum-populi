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
ⓐ $\log_2 9=3$; ⓑ $\log_{\tfrac12}\sqrt7=7$; ⓒ $\log_x\tfrac1{27}=\tfrac13$
ⓐ $\log_9 3=2$; ⓑ $\log_{\sqrt7}7=\tfrac12$; ⓒ $\log_{\tfrac1{27}}\tfrac13=x$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which choice correctly converts all three equations to logarithmic form: ⓐ $4^3=64$, ⓑ $4^{\tfrac13}=\sqrt[3]4$, and ⓒ $(\tfrac12)^x=\tfrac1{32}$?"
  answer="ⓐ $\log_4 64=3$; ⓑ $\log_4\sqrt[3]4=\tfrac13$; ⓒ $\log_{\tfrac12}\tfrac1{32}=x$"
  hint="Keep the exponential base as the logarithmic base."
>}}
ⓐ $\log_3 64=4$; ⓑ $\log_{\tfrac13}\sqrt[3]4=4$; ⓒ $\log_x\tfrac1{32}=\tfrac12$
ⓐ $\log_{64}4=3$; ⓑ $\log_{\sqrt[3]4}4=\tfrac13$; ⓒ $\log_{\tfrac1{32}}\tfrac12=x$
ⓐ $\log_4 64=3$; ⓑ $\log_4\sqrt[3]4=\tfrac13$; ⓒ $\log_{\tfrac12}\tfrac1{32}=x$
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
ⓐ $3^4=64$; ⓑ $0^x=1$; ⓒ $(-2)^{10}=\tfrac1{100}$
ⓐ $64^3=4$; ⓑ $1^0=x$; ⓒ $(\tfrac1{100})^{-2}=10$
ⓐ $4^3=64$; ⓑ $x^0=1$; ⓒ $10^{-2}=\tfrac1{100}$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which choice correctly converts all three equations to exponential form: ⓐ $3=\log_3 27$, ⓑ $0=\log_3 1$, and ⓒ $-1=\log_{10}\tfrac1{10}$?"
  answer="ⓐ $3^3=27$; ⓑ $3^0=1$; ⓒ $10^{-1}=\tfrac1{10}$"
  hint="The logarithm is the exponent on the base."
>}}
ⓐ $27^3=3$; ⓑ $1^0=3$; ⓒ $(\tfrac1{10})^{-1}=10$
ⓐ $3^3=27$; ⓑ $3^0=1$; ⓒ $10^{-1}=\tfrac1{10}$
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
It is decreasing, passes through $(0,1)$, and has horizontal asymptote $y=0$.
It is increasing, passes through $(0,1)$ and $(1,3)$, and has horizontal asymptote $y=0$.
It is increasing, passes through $(1,0)$ and $(3,1)$, and has vertical asymptote $x=0$.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which description matches the graph of $y=\log_5x$?"
  answer="It is increasing, passes through $(1,0)$ and $(5,1)$, and has vertical asymptote $x=0$."
  hint="Evaluate $\log_5 1$ and $\log_5 5$, and note that the base is greater than 1."
>}}
It is decreasing, passes through $(1,0)$ and $(\tfrac15,1)$, and has vertical asymptote $x=0$.
It is increasing, passes through $(1,0)$ and $(5,1)$, and has vertical asymptote $x=0$.
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
It is decreasing, passes through $(1,0)$ and $(\tfrac12,1)$, and has vertical asymptote $x=0$.
It is increasing, passes through $(1,0)$ and $(2,1)$, and has vertical asymptote $x=0$.
It is decreasing, passes through $(0,1)$, and has horizontal asymptote $y=0$.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which description matches the graph of $y=\log_{\tfrac14}x$?"
  answer="It is decreasing, passes through $(1,0)$ and $(\tfrac14,1)$, and has vertical asymptote $x=0$."
  hint="Use $(\tfrac14)^1=\tfrac14$ and the inverse relationship between exponential and logarithmic functions."
>}}
It is increasing, passes through $(1,0)$ and $(4,1)$, and has vertical asymptote $x=0$.
It is decreasing, passes through $(0,1)$ and $(1,\tfrac14)$, and has horizontal asymptote $y=0$.
It is decreasing, passes through $(1,0)$ and $(\tfrac14,1)$, and has vertical asymptote $x=0$.
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

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"For base 3, the exponential graph y = 3^x and logarithmic graph y = log base 3 of x are reflections across the dashed line y = x.","xMin":-3,"xMax":6,"yMin":-3,"yMax":6,"unit":28,"tickLabels":true,"lines":[{"slope":1,"intercept":0,"dashed":true}],"points":[{"at":[0,1]},{"at":[1,0]}],"curves":[{"kind":"exp","b":3,"arrows":"end"},{"kind":"log","b":3,"arrows":"end"}],"texts":[{"at":[4.543,3.55],"text":"y = x"},{"at":[1.4,4.664],"text":"exponential"},{"at":[4.2,1.05],"text":"logarithm"}]}'>
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
  <polyline points="26,193 26.3,193 26.5,192.9 26.8,192.9 27,192.9 27.3,192.9 27.5,192.9 27.8,192.9 28,192.9 28.3,192.9 28.5,192.9 28.8,192.8 29,192.8 29.3,192.8 29.5,192.8 29.8,192.8 30,192.8 30.3,192.8 30.5,192.8 30.8,192.8 31,192.7 31.3,192.7 31.5,192.7 31.8,192.7 32,192.7 32.3,192.7 32.5,192.7 32.8,192.6 33,192.6 33.3,192.6 33.5,192.6 33.8,192.6 34,192.6 34.3,192.6 34.5,192.6 34.8,192.5 35,192.5 35.3,192.5 35.5,192.5 35.8,192.5 36,192.5 36.3,192.4 36.5,192.4 36.8,192.4 37,192.4 37.3,192.4 37.5,192.4 37.8,192.4 38,192.3 38.3,192.3 38.5,192.3 38.8,192.3 39,192.3 39.3,192.3 39.5,192.2 39.8,192.2 40,192.2 40.3,192.2 40.5,192.2 40.8,192.2 41,192.1 41.3,192.1 41.5,192.1 41.8,192.1 42,192.1 42.3,192 42.5,192 42.8,192 43,192 43.3,192 43.5,191.9 43.8,191.9 44,191.9 44.3,191.9 44.5,191.9 44.8,191.8 45,191.8 45.3,191.8 45.5,191.8 45.8,191.7 46,191.7 46.3,191.7 46.5,191.7 46.8,191.7 47,191.6 47.2,191.6 47.5,191.6 47.8,191.6 48,191.5 48.3,191.5 48.5,191.5 48.8,191.5 49,191.4 49.3,191.4 49.5,191.4 49.8,191.4 50,191.3 50.3,191.3 50.5,191.3 50.7,191.3 51,191.2 51.3,191.2 51.5,191.2 51.8,191.2 52,191.1 52.3,191.1 52.5,191.1 52.8,191 53,191 53.3,191 53.5,190.9 53.8,190.9 54,190.9 54.3,190.9 54.5,190.8 54.8,190.8 55,190.8 55.3,190.7 55.5,190.7 55.8,190.7 56,190.6 56.3,190.6 56.5,190.6 56.8,190.5 57,190.5 57.3,190.5 57.5,190.4 57.8,190.4 58,190.4 58.3,190.3 58.5,190.3 58.8,190.3 59,190.2 59.3,190.2 59.5,190.1 59.8,190.1 60,190.1 60.3,190 60.5,190 60.8,189.9 61,189.9 61.3,189.9 61.5,189.8 61.8,189.8 62,189.7 62.3,189.7 62.5,189.7 62.8,189.6 63,189.6 63.3,189.5 63.5,189.5 63.8,189.4 64,189.4 64.3,189.3 64.5,189.3 64.8,189.3 65,189.2 65.3,189.2 65.5,189.1 65.8,189.1 66,189 66.3,189 66.5,188.9 66.8,188.9 67,188.8 67.3,188.8 67.5,188.7 67.8,188.7 68,188.6 68.3,188.6 68.5,188.5 68.8,188.5 69,188.4 69.3,188.3 69.5,188.3 69.8,188.2 70,188.2 70.3,188.1 70.5,188.1 70.8,188 71,187.9 71.3,187.9 71.5,187.8 71.8,187.8 72,187.7 72.3,187.6 72.5,187.6 72.8,187.5 73,187.4 73.3,187.4 73.5,187.3 73.8,187.2 74,187.2 74.3,187.1 74.5,187 74.8,187 75,186.9 75.3,186.8 75.5,186.8 75.8,186.7 76,186.6 76.3,186.6 76.5,186.5 76.8,186.4 77,186.3 77.3,186.3 77.5,186.2 77.8,186.1 78,186 78.3,185.9 78.5,185.9 78.8,185.8 79,185.7 79.3,185.6 79.5,185.5 79.8,185.5 80,185.4 80.3,185.3 80.5,185.2 80.8,185.1 81,185 81.3,184.9 81.5,184.8 81.8,184.8 82,184.7 82.3,184.6 82.5,184.5 82.8,184.4 83,184.3 83.3,184.2 83.5,184.1 83.8,184 84,183.9 84.3,183.8 84.5,183.7 84.8,183.6 85,183.5 85.3,183.4 85.5,183.3 85.8,183.2 86,183.1 86.3,183 86.5,182.9 86.8,182.8 87,182.6 87.3,182.5 87.5,182.4 87.8,182.3 88,182.2 88.3,182.1 88.5,182 88.8,181.8 89,181.7 89.3,181.6 89.5,181.5 89.8,181.3 90,181.2 90.3,181.1 90.5,181 90.8,180.8 91,180.7 91.3,180.6 91.5,180.5 91.8,180.3 92,180.2 92.3,180 92.5,179.9 92.8,179.8 93,179.6 93.3,179.5 93.5,179.3 93.8,179.2 94,179.1 94.3,178.9 94.5,178.8 94.8,178.6 95,178.5 95.3,178.3 95.5,178.1 95.8,178 96,177.8 96.3,177.7 96.5,177.5 96.8,177.4 97,177.2 97.3,177 97.5,176.9 97.8,176.7 98,176.5 98.3,176.3 98.5,176.2 98.8,176 99,175.8 99.3,175.6 99.5,175.5 99.8,175.3 100,175.1 100.3,174.9 100.5,174.7 100.8,174.5 101,174.3 101.3,174.1 101.5,173.9 101.8,173.7 102,173.5 102.3,173.3 102.5,173.1 102.8,172.9 103,172.7 103.3,172.5 103.5,172.3 103.8,172.1 104,171.9 104.3,171.7 104.5,171.4 104.8,171.2 105,171 105.3,170.8 105.5,170.5 105.8,170.3 106,170.1 106.3,169.8 106.5,169.6 106.8,169.4 107,169.1 107.3,168.9 107.5,168.6 107.8,168.4 108,168.1 108.3,167.9 108.5,167.6 108.8,167.3 109,167.1 109.3,166.8 109.5,166.5 109.8,166.3 110,166 110.3,165.7 110.5,165.4 110.8,165.2 111,164.9 111.3,164.6 111.5,164.3 111.8,164 112,163.7 112.3,163.4 112.5,163.1 112.8,162.8 113,162.5 113.3,162.2 113.5,161.9 113.8,161.6 114,161.2 114.3,160.9 114.5,160.6 114.8,160.3 115,159.9 115.3,159.6 115.5,159.3 115.8,158.9 116,158.6 116.3,158.2 116.5,157.9 116.8,157.5 117,157.1 117.3,156.8 117.5,156.4 117.8,156 118,155.7 118.3,155.3 118.5,154.9 118.8,154.5 119,154.1 119.3,153.7 119.5,153.4 119.8,153 120,152.5 120.3,152.1 120.5,151.7 120.8,151.3 121,150.9 121.3,150.5 121.5,150 121.8,149.6 122,149.2 122.3,148.7 122.5,148.3 122.8,147.8 123,147.4 123.3,146.9 123.5,146.4 123.8,146 124,145.5 124.3,145 124.5,144.5 124.8,144.1 125,143.6 125.3,143.1 125.5,142.6 125.8,142.1 126,141.5 126.3,141 126.5,140.5 126.8,140 127,139.4 127.3,138.9 127.5,138.4 127.8,137.8 128,137.3 128.3,136.7 128.5,136.1 128.8,135.6 129,135 129.3,134.4 129.5,133.8 129.8,133.2 130,132.6 130.3,132 130.5,131.4 130.8,130.8 131,130.2 131.3,129.5 131.5,128.9 131.8,128.3 132,127.6 132.3,127 132.5,126.3 132.8,125.6 133,125 133.3,124.3 133.5,123.6 133.8,122.9 134,122.2 134.3,121.5 134.5,120.8 134.8,120.1 135,119.3 135.3,118.6 135.5,117.8 135.8,117.1 136,116.3 136.3,115.6 136.5,114.8 136.8,114 137,113.2 137.3,112.4 137.5,111.6 137.8,110.8 138,110 138.3,109.2 138.5,108.3 138.8,107.5 139,106.6 139.3,105.8 139.5,104.9 139.8,104 140,103.1 140.3,102.2 140.5,101.3 140.8,100.4 141,99.5 141.3,98.6 141.5,97.6 141.8,96.7 142,95.7 142.3,94.8 142.5,93.8 142.8,92.8 143,91.8 143.3,90.8 143.5,89.8 143.8,88.7 144,87.7 144.3,86.7 144.5,85.6 144.8,84.5 145,83.4 145.3,82.4 145.5,81.3 145.8,80.1 146,79 146.3,77.9 146.5,76.7 146.8,75.6 147,74.4 147.3,73.2 147.5,72.1 147.8,70.9 148,69.6 148.3,68.4 148.5,67.2 148.8,65.9 149,64.7 149.3,63.4 149.5,62.1 149.8,60.8 150,59.5 150.3,58.2 150.5,56.8 150.8,55.5 151,54.1 151.3,52.7 151.5,51.3 151.8,49.9 152,48.5 152.3,47.1 152.5,45.6 152.8,44.2 153,42.7 153.3,41.2 153.5,39.7 153.8,38.2 154,36.6 154.3,35.1 154.3,35" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="155.5,27.1 158.9,37.7 149,36.2" fill="currentColor"/>
  <polyline points="111,278 111,277.8 111.1,277.5 111.1,277.3 111.1,277 111.1,276.8 111.1,276.5 111.1,276.3 111.1,276 111.1,275.8 111.1,275.5 111.2,275.3 111.2,275 111.2,274.8 111.2,274.5 111.2,274.3 111.2,274 111.2,273.8 111.2,273.5 111.2,273.3 111.3,273 111.3,272.8 111.3,272.5 111.3,272.3 111.3,272 111.3,271.8 111.3,271.5 111.4,271.3 111.4,271 111.4,270.8 111.4,270.5 111.4,270.3 111.4,270 111.4,269.8 111.4,269.5 111.5,269.3 111.5,269 111.5,268.8 111.5,268.5 111.5,268.3 111.5,268 111.6,267.8 111.6,267.5 111.6,267.3 111.6,267 111.6,266.8 111.6,266.5 111.6,266.3 111.7,266 111.7,265.8 111.7,265.5 111.7,265.3 111.7,265 111.7,264.8 111.8,264.5 111.8,264.3 111.8,264 111.8,263.8 111.8,263.5 111.8,263.3 111.9,263 111.9,262.8 111.9,262.5 111.9,262.3 111.9,262 112,261.8 112,261.5 112,261.3 112,261 112,260.8 112.1,260.5 112.1,260.3 112.1,260 112.1,259.8 112.1,259.5 112.2,259.3 112.2,259 112.2,258.8 112.2,258.5 112.3,258.3 112.3,258 112.3,257.8 112.3,257.5 112.3,257.3 112.4,257 112.4,256.8 112.4,256.5 112.4,256.3 112.5,256 112.5,255.8 112.5,255.5 112.5,255.3 112.6,255 112.6,254.8 112.6,254.5 112.6,254.3 112.7,254 112.7,253.8 112.7,253.5 112.7,253.3 112.8,253 112.8,252.8 112.8,252.5 112.8,252.3 112.9,252 112.9,251.8 112.9,251.5 113,251.3 113,251 113,250.8 113.1,250.5 113.1,250.3 113.1,250 113.1,249.8 113.2,249.5 113.2,249.3 113.2,249 113.3,248.8 113.3,248.5 113.3,248.3 113.4,248 113.4,247.8 113.4,247.5 113.5,247.3 113.5,247 113.5,246.8 113.6,246.5 113.6,246.3 113.6,246 113.7,245.8 113.7,245.5 113.7,245.3 113.8,245 113.8,244.8 113.9,244.5 113.9,244.3 113.9,244 114,243.8 114,243.5 114.1,243.3 114.1,243 114.1,242.8 114.2,242.5 114.2,242.3 114.3,242 114.3,241.8 114.3,241.5 114.4,241.3 114.4,241 114.5,240.8 114.5,240.5 114.6,240.3 114.6,240 114.7,239.8 114.7,239.5 114.7,239.3 114.8,239 114.8,238.8 114.9,238.5 114.9,238.3 115,238 115,237.8 115.1,237.5 115.1,237.3 115.2,237 115.2,236.8 115.3,236.5 115.3,236.3 115.4,236 115.4,235.8 115.5,235.5 115.5,235.3 115.6,235 115.7,234.8 115.7,234.5 115.8,234.3 115.8,234 115.9,233.8 115.9,233.5 116,233.3 116.1,233 116.1,232.8 116.2,232.5 116.2,232.3 116.3,232 116.4,231.8 116.4,231.5 116.5,231.3 116.6,231 116.6,230.8 116.7,230.5 116.8,230.3 116.8,230 116.9,229.8 117,229.5 117,229.3 117.1,229 117.2,228.8 117.2,228.5 117.3,228.3 117.4,228 117.4,227.8 117.5,227.5 117.6,227.3 117.7,227 117.7,226.8 117.8,226.5 117.9,226.3 118,226 118.1,225.8 118.1,225.5 118.2,225.3 118.3,225 118.4,224.8 118.5,224.5 118.5,224.3 118.6,224 118.7,223.8 118.8,223.5 118.9,223.3 119,223 119.1,222.8 119.2,222.5 119.2,222.3 119.3,222 119.4,221.8 119.5,221.5 119.6,221.3 119.7,221 119.8,220.8 119.9,220.5 120,220.3 120.1,220 120.2,219.8 120.3,219.5 120.4,219.3 120.5,219 120.6,218.8 120.7,218.5 120.8,218.3 120.9,218 121,217.8 121.1,217.5 121.2,217.3 121.4,217 121.5,216.8 121.6,216.5 121.7,216.3 121.8,216 121.9,215.8 122,215.5 122.2,215.3 122.3,215 122.4,214.8 122.5,214.5 122.7,214.3 122.8,214 122.9,213.8 123,213.5 123.2,213.3 123.3,213 123.4,212.8 123.5,212.5 123.7,212.3 123.8,212 124,211.8 124.1,211.5 124.2,211.3 124.4,211 124.5,210.8 124.7,210.5 124.8,210.3 124.9,210 125.1,209.8 125.2,209.5 125.4,209.3 125.5,209 125.7,208.8 125.9,208.5 126,208.3 126.2,208 126.3,207.8 126.5,207.5 126.6,207.3 126.8,207 127,206.8 127.1,206.5 127.3,206.3 127.5,206 127.7,205.8 127.8,205.5 128,205.3 128.2,205 128.4,204.8 128.5,204.5 128.7,204.3 128.9,204 129.1,203.8 129.3,203.5 129.5,203.3 129.7,203 129.9,202.8 130.1,202.5 130.3,202.3 130.5,202 130.7,201.8 130.9,201.5 131.1,201.3 131.3,201 131.5,200.8 131.7,200.5 131.9,200.3 132.1,200 132.3,199.8 132.6,199.5 132.8,199.3 133,199 133.2,198.8 133.5,198.5 133.7,198.3 133.9,198 134.2,197.8 134.4,197.5 134.6,197.3 134.9,197 135.1,196.8 135.4,196.5 135.6,196.3 135.9,196 136.1,195.8 136.4,195.5 136.7,195.3 136.9,195 137.2,194.8 137.5,194.5 137.7,194.3 138,194 138.3,193.8 138.6,193.5 138.8,193.3 139.1,193 139.4,192.8 139.7,192.5 140,192.3 140.3,192 140.6,191.8 140.9,191.5 141.2,191.3 141.5,191 141.8,190.8 142.1,190.5 142.4,190.3 142.8,190 143.1,189.8 143.4,189.5 143.7,189.3 144.1,189 144.4,188.8 144.7,188.5 145.1,188.3 145.4,188 145.8,187.8 146.1,187.5 146.5,187.3 146.9,187 147.2,186.8 147.6,186.5 148,186.3 148.3,186 148.7,185.8 149.1,185.5 149.5,185.3 149.9,185 150.3,184.8 150.6,184.5 151,184.3 151.5,184 151.9,183.8 152.3,183.5 152.7,183.3 153.1,183 153.5,182.8 154,182.5 154.4,182.3 154.8,182 155.3,181.8 155.7,181.5 156.2,181.3 156.6,181 157.1,180.8 157.6,180.5 158,180.3 158.5,180 159,179.8 159.5,179.5 159.9,179.3 160.4,179 160.9,178.8 161.4,178.5 161.9,178.3 162.5,178 163,177.8 163.5,177.5 164,177.3 164.6,177 165.1,176.8 165.6,176.5 166.2,176.3 166.7,176 167.3,175.8 167.9,175.5 168.4,175.3 169,175 169.6,174.8 170.2,174.5 170.8,174.3 171.4,174 172,173.8 172.6,173.5 173.2,173.3 173.8,173 174.5,172.8 175.1,172.5 175.7,172.3 176.4,172 177,171.8 177.7,171.5 178.4,171.3 179,171 179.7,170.8 180.4,170.5 181.1,170.3 181.8,170 182.5,169.8 183.2,169.5 183.9,169.3 184.7,169 185.4,168.8 186.2,168.5 186.9,168.3 187.7,168 188.4,167.8 189.2,167.5 190,167.3 190.8,167 191.6,166.8 192.4,166.5 193.2,166.3 194,166 194.8,165.8 195.7,165.5 196.5,165.3 197.4,165 198.2,164.8 199.1,164.5 200,164.3 200.9,164 201.8,163.8 202.7,163.5 203.6,163.3 204.5,163 205.4,162.8 206.4,162.5 207.3,162.3 208.3,162 209.2,161.8 210.2,161.5 211.2,161.3 212.2,161 213.2,160.8 214.2,160.5 215.3,160.3 216.3,160 217.3,159.8 218.4,159.5 219.5,159.3 220.6,159 221.6,158.8 222.7,158.5 223.9,158.3 225,158 226.1,157.8 227.3,157.5 228.4,157.3 229.6,157 230.8,156.8 231.9,156.5 233.1,156.3 234.4,156 235.6,155.8 236.8,155.5 238.1,155.3 239.3,155 240.6,154.8 241.9,154.5 243.2,154.3 244.5,154 245.8,153.8 247.2,153.5 248.5,153.3 249.9,153 251.3,152.8 252.7,152.5 254.1,152.3 255.5,152 256.9,151.8 258.4,151.5 259.8,151.3 261.3,151 262.8,150.8 264.3,150.5 265.8,150.3 267.4,150 268.9,149.8 269,149.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="276.9,148.5 267.8,155 266.3,145.1" fill="currentColor"/>
  <circle cx="110" cy="166" r="4" fill="currentColor"/>
  <circle cx="138" cy="194" r="4" fill="currentColor"/>
  <text x="237.2" y="94.6" font-size="13" fill="currentColor">y = x</text>
  <text x="149.2" y="63.4" font-size="13" fill="currentColor">exponential</text>
  <text x="227.6" y="164.6" font-size="13" fill="currentColor">logarithm</text>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"For base 1/3, the exponential graph y = (1/3)^x and logarithmic graph y = log base 1/3 of x are reflections across the dashed line y = x.","xMin":-3,"xMax":6,"yMin":-3,"yMax":6,"unit":28,"tickLabels":true,"lines":[{"slope":1,"intercept":0,"dashed":true}],"points":[{"at":[0,1]},{"at":[1,0]}],"curves":[{"kind":"exp","b":0.3333333333333333,"arrows":"end"},{"kind":"log","b":0.3333333333333333,"arrows":"end"}],"texts":[{"at":[4.543,3.55],"text":"y = x"},{"at":[-1,4.664],"text":"exponential"},{"at":[4.1,-1.2],"text":"logarithm"}]}'>
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
  <polyline points="64.5,27.1 64.8,28.7 65,30.3 65.3,31.9 65.5,33.5 65.8,35.1 66,36.6 66.3,38.2 66.5,39.7 66.8,41.2 67,42.7 67.3,44.2 67.5,45.6 67.8,47.1 68,48.5 68.3,49.9 68.5,51.3 68.8,52.7 69,54.1 69.3,55.5 69.5,56.8 69.8,58.2 70,59.5 70.3,60.8 70.5,62.1 70.8,63.4 71,64.7 71.3,65.9 71.5,67.2 71.8,68.4 72,69.6 72.3,70.9 72.5,72.1 72.8,73.2 73,74.4 73.3,75.6 73.5,76.7 73.8,77.9 74,79 74.3,80.1 74.5,81.3 74.8,82.4 75,83.4 75.3,84.5 75.5,85.6 75.8,86.7 76,87.7 76.3,88.7 76.5,89.8 76.8,90.8 77,91.8 77.3,92.8 77.5,93.8 77.8,94.8 78,95.7 78.3,96.7 78.5,97.6 78.8,98.6 79,99.5 79.3,100.4 79.5,101.3 79.8,102.2 80,103.1 80.3,104 80.5,104.9 80.8,105.8 81,106.6 81.3,107.5 81.5,108.3 81.8,109.2 82,110 82.3,110.8 82.5,111.6 82.8,112.4 83,113.2 83.3,114 83.5,114.8 83.8,115.6 84,116.3 84.3,117.1 84.5,117.8 84.8,118.6 85,119.3 85.3,120.1 85.5,120.8 85.8,121.5 86,122.2 86.3,122.9 86.5,123.6 86.8,124.3 87,125 87.3,125.6 87.5,126.3 87.8,127 88,127.6 88.3,128.3 88.5,128.9 88.8,129.5 89,130.2 89.3,130.8 89.5,131.4 89.8,132 90,132.6 90.3,133.2 90.5,133.8 90.8,134.4 91,135 91.3,135.6 91.5,136.1 91.8,136.7 92,137.3 92.3,137.8 92.5,138.4 92.8,138.9 93,139.4 93.3,140 93.5,140.5 93.8,141 94,141.5 94.3,142.1 94.5,142.6 94.8,143.1 95,143.6 95.3,144.1 95.5,144.5 95.8,145 96,145.5 96.3,146 96.5,146.4 96.8,146.9 97,147.4 97.3,147.8 97.5,148.3 97.8,148.7 98,149.2 98.3,149.6 98.5,150 98.8,150.5 99,150.9 99.3,151.3 99.5,151.7 99.8,152.1 100,152.5 100.3,153 100.5,153.4 100.8,153.7 101,154.1 101.3,154.5 101.5,154.9 101.8,155.3 102,155.7 102.3,156 102.5,156.4 102.8,156.8 103,157.1 103.3,157.5 103.5,157.9 103.8,158.2 104,158.6 104.3,158.9 104.5,159.3 104.8,159.6 105,159.9 105.3,160.3 105.5,160.6 105.8,160.9 106,161.2 106.3,161.6 106.5,161.9 106.8,162.2 107,162.5 107.3,162.8 107.5,163.1 107.8,163.4 108,163.7 108.3,164 108.5,164.3 108.8,164.6 109,164.9 109.3,165.2 109.5,165.4 109.8,165.7 110,166 110.3,166.3 110.5,166.5 110.8,166.8 111,167.1 111.3,167.3 111.5,167.6 111.8,167.9 112,168.1 112.3,168.4 112.5,168.6 112.8,168.9 113,169.1 113.3,169.4 113.5,169.6 113.8,169.8 114,170.1 114.3,170.3 114.5,170.5 114.8,170.8 115,171 115.3,171.2 115.5,171.4 115.8,171.7 116,171.9 116.3,172.1 116.5,172.3 116.8,172.5 117,172.7 117.3,172.9 117.5,173.1 117.8,173.3 118,173.5 118.3,173.7 118.5,173.9 118.8,174.1 119,174.3 119.3,174.5 119.5,174.7 119.8,174.9 120,175.1 120.3,175.3 120.5,175.5 120.8,175.6 121,175.8 121.3,176 121.5,176.2 121.8,176.3 122,176.5 122.3,176.7 122.5,176.9 122.8,177 123,177.2 123.3,177.4 123.5,177.5 123.8,177.7 124,177.8 124.3,178 124.5,178.1 124.8,178.3 125,178.5 125.3,178.6 125.5,178.8 125.8,178.9 126,179.1 126.3,179.2 126.5,179.3 126.8,179.5 127,179.6 127.3,179.8 127.5,179.9 127.8,180 128,180.2 128.3,180.3 128.5,180.5 128.8,180.6 129,180.7 129.3,180.8 129.5,181 129.8,181.1 130,181.2 130.3,181.3 130.5,181.5 130.8,181.6 131,181.7 131.3,181.8 131.5,182 131.8,182.1 132,182.2 132.3,182.3 132.5,182.4 132.8,182.5 133,182.6 133.3,182.8 133.5,182.9 133.8,183 134,183.1 134.3,183.2 134.5,183.3 134.8,183.4 135,183.5 135.3,183.6 135.5,183.7 135.8,183.8 136,183.9 136.3,184 136.5,184.1 136.8,184.2 137,184.3 137.3,184.4 137.5,184.5 137.8,184.6 138,184.7 138.3,184.8 138.5,184.8 138.8,184.9 139,185 139.3,185.1 139.5,185.2 139.8,185.3 140,185.4 140.3,185.5 140.5,185.5 140.8,185.6 141,185.7 141.3,185.8 141.5,185.9 141.8,185.9 142,186 142.3,186.1 142.5,186.2 142.8,186.3 143,186.3 143.3,186.4 143.5,186.5 143.8,186.6 144,186.6 144.3,186.7 144.5,186.8 144.8,186.8 145,186.9 145.3,187 145.5,187 145.8,187.1 146,187.2 146.3,187.2 146.5,187.3 146.8,187.4 147,187.4 147.3,187.5 147.5,187.6 147.8,187.6 148,187.7 148.3,187.8 148.5,187.8 148.8,187.9 149,187.9 149.3,188 149.5,188.1 149.8,188.1 150,188.2 150.3,188.2 150.5,188.3 150.8,188.3 151,188.4 151.3,188.5 151.5,188.5 151.8,188.6 152,188.6 152.3,188.7 152.5,188.7 152.8,188.8 153,188.8 153.3,188.9 153.5,188.9 153.8,189 154,189 154.3,189.1 154.5,189.1 154.8,189.2 155,189.2 155.3,189.3 155.5,189.3 155.8,189.3 156,189.4 156.3,189.4 156.5,189.5 156.8,189.5 157,189.6 157.3,189.6 157.5,189.7 157.8,189.7 158,189.7 158.3,189.8 158.5,189.8 158.8,189.9 159,189.9 159.3,189.9 159.5,190 159.8,190 160,190.1 160.3,190.1 160.5,190.1 160.8,190.2 161,190.2 161.3,190.3 161.5,190.3 161.8,190.3 162,190.4 162.3,190.4 162.5,190.4 162.8,190.5 163,190.5 163.3,190.5 163.5,190.6 163.8,190.6 164,190.6 164.3,190.7 164.5,190.7 164.8,190.7 165,190.8 165.3,190.8 165.5,190.8 165.8,190.9 166,190.9 166.3,190.9 166.5,190.9 166.8,191 167,191 167.3,191 167.5,191.1 167.8,191.1 168,191.1 168.3,191.2 168.5,191.2 168.8,191.2 169,191.2 169.3,191.3 169.5,191.3 169.8,191.3 170,191.3 170.3,191.4 170.5,191.4 170.8,191.4 171,191.4 171.3,191.5 171.5,191.5 171.8,191.5 172,191.5 172.3,191.6 172.5,191.6 172.8,191.6 173,191.6 173.3,191.7 173.5,191.7 173.8,191.7 174,191.7 174.3,191.7 174.5,191.8 174.8,191.8 175,191.8 175.3,191.8 175.5,191.9 175.8,191.9 176,191.9 176.3,191.9 176.5,191.9 176.8,192 177,192 177.3,192 177.5,192 177.8,192 178,192.1 178.3,192.1 178.5,192.1 178.8,192.1 179,192.1 179.3,192.2 179.5,192.2 179.8,192.2 180,192.2 180.3,192.2 180.5,192.2 180.8,192.3 181,192.3 181.3,192.3 181.5,192.3 181.8,192.3 182,192.3 182.3,192.4 182.5,192.4 182.8,192.4 183,192.4 183.3,192.4 183.5,192.4 183.8,192.4 184,192.5 184.3,192.5 184.5,192.5 184.8,192.5 185,192.5 185.3,192.5 185.5,192.6 185.8,192.6 186,192.6 186.3,192.6 186.5,192.6 186.8,192.6 187,192.6 187.3,192.6 187.5,192.7 187.8,192.7 188,192.7 188.3,192.7 188.5,192.7 188.8,192.7 189,192.7 189.3,192.8 189.5,192.8 189.8,192.8 190,192.8 190.3,192.8 190.5,192.8 190.8,192.8 191,192.8 191.3,192.8 191.5,192.9 191.8,192.9 192,192.9 192.3,192.9 192.5,192.9 192.8,192.9 193,192.9 193.3,192.9 193.5,192.9 193.8,193 194,193 194.3,193 194.5,193 194.8,193 195,193 195.3,193 195.5,193 195.8,193 196,193 196.3,193.1 196.5,193.1 196.8,193.1 197,193.1 197.3,193.1 197.5,193.1 197.8,193.1 198,193.1 198.3,193.1 198.5,193.1 198.8,193.1 199,193.1 199.3,193.2 199.5,193.2 199.8,193.2 200,193.2 200.3,193.2 200.5,193.2 200.8,193.2 201,193.2 201.3,193.2 201.5,193.2 201.8,193.2 202,193.2 202.3,193.2 202.5,193.3 202.8,193.3 203,193.3 203.3,193.3 203.5,193.3 203.8,193.3 204,193.3 204.3,193.3 204.5,193.3 204.8,193.3 205,193.3 205.3,193.3 205.5,193.3 205.8,193.3 206,193.4 206.3,193.4 206.5,193.4 206.8,193.4 207,193.4 207.3,193.4 207.5,193.4 207.8,193.4 208,193.4 208.3,193.4 208.5,193.4 208.8,193.4 209,193.4 209.3,193.4 209.5,193.4 209.8,193.4 210,193.4 210.3,193.5 210.5,193.5 210.8,193.5 211,193.5 211.3,193.5 211.5,193.5 211.8,193.5 212,193.5 212.3,193.5 212.5,193.5 212.8,193.5 213,193.5 213.3,193.5 213.5,193.5 213.8,193.5 214,193.5 214.3,193.5 214.5,193.5 214.8,193.5 215,193.5 215.3,193.5 215.5,193.6 215.8,193.6 216,193.6 216.3,193.6 216.5,193.6 216.8,193.6 217,193.6 217.3,193.6 217.5,193.6 217.8,193.6 218,193.6 218.3,193.6 218.5,193.6 218.8,193.6 219,193.6 219.3,193.6 219.5,193.6 219.8,193.6 220,193.6 220.3,193.6 220.5,193.6 220.8,193.6 221,193.6 221.3,193.6 221.5,193.6 221.8,193.7 222,193.7 222.3,193.7 222.5,193.7 222.8,193.7 223,193.7 223.3,193.7 223.5,193.7 223.8,193.7 224,193.7 224.3,193.7 224.5,193.7 224.8,193.7 225,193.7 225.3,193.7 225.5,193.7 225.8,193.7 226,193.7 226.3,193.7 226.5,193.7 226.8,193.7 227,193.7 227.3,193.7 227.5,193.7 227.8,193.7 228,193.7 228.3,193.7 228.5,193.7 228.8,193.7 229,193.7 229.3,193.7 229.5,193.7 229.8,193.7 230,193.7 230.3,193.7 230.5,193.8 230.8,193.8 231,193.8 231.3,193.8 231.5,193.8 231.8,193.8 232,193.8 232.3,193.8 232.5,193.8 232.8,193.8 233,193.8 233.3,193.8 233.5,193.8 233.8,193.8 234,193.8 234.3,193.8 234.5,193.8 234.8,193.8 235,193.8 235.3,193.8 235.5,193.8 235.8,193.8 236,193.8 236.3,193.8 236.5,193.8 236.8,193.8 237,193.8 237.3,193.8 237.5,193.8 237.8,193.8 238,193.8 238.3,193.8 238.5,193.8 238.8,193.8 239,193.8 239.3,193.8 239.5,193.8 239.8,193.8 240,193.8 240.3,193.8 240.5,193.8 240.8,193.8 241,193.8 241.3,193.8 241.5,193.8 241.8,193.8 242,193.8 242.3,193.8 242.5,193.8 242.8,193.8 243,193.8 243.3,193.8 243.5,193.9 243.8,193.9 244,193.9 244.3,193.9 244.5,193.9 244.8,193.9 245,193.9 245.3,193.9 245.5,193.9 245.8,193.9 246,193.9 246.3,193.9 246.5,193.9 246.8,193.9 247,193.9 247.3,193.9 247.5,193.9 247.8,193.9 248,193.9 248.3,193.9 248.5,193.9 248.8,193.9 249,193.9 249.3,193.9 249.5,193.9 249.8,193.9 250,193.9 250.3,193.9 250.5,193.9 250.7,193.9 251,193.9 251.3,193.9 251.5,193.9 251.8,193.9 252,193.9 252.3,193.9 252.5,193.9 252.8,193.9 253,193.9 253.3,193.9 253.5,193.9 253.8,193.9 254,193.9 254.2,193.9 254.5,193.9 254.8,193.9 255,193.9 255.3,193.9 255.5,193.9 255.8,193.9 256,193.9 256.3,193.9 256.5,193.9 256.8,193.9 257,193.9 257.3,193.9 257.5,193.9 257.8,193.9 258,193.9 258.3,193.9 258.5,193.9 258.8,193.9 259,193.9 259.3,193.9 259.5,193.9 259.8,193.9 260,193.9 260.3,193.9 260.5,193.9 260.8,193.9 261,193.9 261.3,193.9 261.5,193.9 261.8,193.9 262,193.9 262.3,193.9 262.5,193.9 262.8,193.9 263,193.9 263.3,193.9 263.5,193.9 263.8,193.9 264,193.9 264.3,193.9 264.5,193.9 264.8,193.9 265,193.9 265.3,193.9 265.5,193.9 265.8,193.9 266,193.9 266.3,193.9 266.5,193.9 266.8,193.9 267,193.9 267.3,193.9 267.5,193.9 267.8,193.9 268,193.9 268.3,193.9 268.5,193.9 268.8,193.9 269,193.9 269.3,193.9 269.5,193.9 269.8,193.9 270,193.9 270,193.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="278,194 268,198.9 268,188.9" fill="currentColor"/>
  <polyline points="276.9,239.5 275.3,239.3 273.7,239 272.1,238.8 270.5,238.5 268.9,238.3 267.4,238 265.8,237.8 264.3,237.5 262.8,237.3 261.3,237 259.8,236.8 258.4,236.5 256.9,236.3 255.5,236 254.1,235.8 252.7,235.5 251.3,235.3 249.9,235 248.5,234.8 247.2,234.5 245.8,234.3 244.5,234 243.2,233.8 241.9,233.5 240.6,233.3 239.3,233 238.1,232.8 236.8,232.5 235.6,232.3 234.4,232 233.1,231.8 231.9,231.5 230.8,231.3 229.6,231 228.4,230.8 227.3,230.5 226.1,230.3 225,230 223.9,229.8 222.7,229.5 221.6,229.3 220.6,229 219.5,228.8 218.4,228.5 217.3,228.3 216.3,228 215.3,227.8 214.2,227.5 213.2,227.3 212.2,227 211.2,226.8 210.2,226.5 209.2,226.3 208.3,226 207.3,225.8 206.4,225.5 205.4,225.3 204.5,225 203.6,224.8 202.7,224.5 201.8,224.3 200.9,224 200,223.8 199.1,223.5 198.2,223.3 197.4,223 196.5,222.8 195.7,222.5 194.8,222.3 194,222 193.2,221.8 192.4,221.5 191.6,221.3 190.8,221 190,220.8 189.2,220.5 188.4,220.3 187.7,220 186.9,219.8 186.2,219.5 185.4,219.3 184.7,219 183.9,218.8 183.2,218.5 182.5,218.3 181.8,218 181.1,217.8 180.4,217.5 179.7,217.3 179,217 178.4,216.8 177.7,216.5 177,216.3 176.4,216 175.7,215.8 175.1,215.5 174.5,215.3 173.8,215 173.2,214.8 172.6,214.5 172,214.3 171.4,214 170.8,213.8 170.2,213.5 169.6,213.3 169,213 168.4,212.8 167.9,212.5 167.3,212.3 166.7,212 166.2,211.8 165.6,211.5 165.1,211.3 164.6,211 164,210.8 163.5,210.5 163,210.3 162.5,210 161.9,209.8 161.4,209.5 160.9,209.3 160.4,209 159.9,208.8 159.5,208.5 159,208.3 158.5,208 158,207.8 157.6,207.5 157.1,207.3 156.6,207 156.2,206.8 155.7,206.5 155.3,206.3 154.8,206 154.4,205.8 154,205.5 153.5,205.3 153.1,205 152.7,204.8 152.3,204.5 151.9,204.3 151.5,204 151,203.8 150.6,203.5 150.3,203.3 149.9,203 149.5,202.8 149.1,202.5 148.7,202.3 148.3,202 148,201.8 147.6,201.5 147.2,201.3 146.9,201 146.5,200.8 146.1,200.5 145.8,200.3 145.4,200 145.1,199.8 144.7,199.5 144.4,199.3 144.1,199 143.7,198.8 143.4,198.5 143.1,198.3 142.8,198 142.4,197.8 142.1,197.5 141.8,197.3 141.5,197 141.2,196.8 140.9,196.5 140.6,196.3 140.3,196 140,195.8 139.7,195.5 139.4,195.3 139.1,195 138.8,194.8 138.6,194.5 138.3,194.3 138,194 137.7,193.8 137.5,193.5 137.2,193.3 136.9,193 136.7,192.8 136.4,192.5 136.1,192.3 135.9,192 135.6,191.8 135.4,191.5 135.1,191.3 134.9,191 134.6,190.8 134.4,190.5 134.2,190.3 133.9,190 133.7,189.8 133.5,189.5 133.2,189.3 133,189 132.8,188.8 132.6,188.5 132.3,188.3 132.1,188 131.9,187.8 131.7,187.5 131.5,187.3 131.3,187 131.1,186.8 130.9,186.5 130.7,186.3 130.5,186 130.3,185.8 130.1,185.5 129.9,185.3 129.7,185 129.5,184.8 129.3,184.5 129.1,184.3 128.9,184 128.7,183.8 128.5,183.5 128.4,183.3 128.2,183 128,182.8 127.8,182.5 127.7,182.3 127.5,182 127.3,181.8 127.1,181.5 127,181.3 126.8,181 126.6,180.8 126.5,180.5 126.3,180.3 126.2,180 126,179.8 125.9,179.5 125.7,179.3 125.5,179 125.4,178.8 125.2,178.5 125.1,178.3 124.9,178 124.8,177.8 124.7,177.5 124.5,177.3 124.4,177 124.2,176.8 124.1,176.5 124,176.3 123.8,176 123.7,175.8 123.5,175.5 123.4,175.3 123.3,175 123.2,174.8 123,174.5 122.9,174.3 122.8,174 122.7,173.8 122.5,173.5 122.4,173.3 122.3,173 122.2,172.8 122,172.5 121.9,172.3 121.8,172 121.7,171.8 121.6,171.5 121.5,171.3 121.4,171 121.2,170.8 121.1,170.5 121,170.3 120.9,170 120.8,169.8 120.7,169.5 120.6,169.3 120.5,169 120.4,168.8 120.3,168.5 120.2,168.3 120.1,168 120,167.8 119.9,167.5 119.8,167.3 119.7,167 119.6,166.8 119.5,166.5 119.4,166.3 119.3,166 119.2,165.8 119.2,165.5 119.1,165.3 119,165 118.9,164.8 118.8,164.5 118.7,164.3 118.6,164 118.5,163.8 118.5,163.5 118.4,163.3 118.3,163 118.2,162.8 118.1,162.5 118.1,162.3 118,162 117.9,161.8 117.8,161.5 117.7,161.3 117.7,161 117.6,160.8 117.5,160.5 117.4,160.3 117.4,160 117.3,159.8 117.2,159.5 117.2,159.3 117.1,159 117,158.8 117,158.5 116.9,158.3 116.8,158 116.8,157.8 116.7,157.5 116.6,157.3 116.6,157 116.5,156.8 116.4,156.5 116.4,156.3 116.3,156 116.2,155.8 116.2,155.5 116.1,155.3 116.1,155 116,154.8 115.9,154.5 115.9,154.3 115.8,154 115.8,153.8 115.7,153.5 115.7,153.3 115.6,153 115.5,152.8 115.5,152.5 115.4,152.3 115.4,152 115.3,151.8 115.3,151.5 115.2,151.3 115.2,151 115.1,150.8 115.1,150.5 115,150.3 115,150 114.9,149.8 114.9,149.5 114.8,149.3 114.8,149 114.7,148.8 114.7,148.5 114.7,148.3 114.6,148 114.6,147.8 114.5,147.5 114.5,147.3 114.4,147 114.4,146.8 114.3,146.5 114.3,146.3 114.3,146 114.2,145.8 114.2,145.5 114.1,145.3 114.1,145 114.1,144.8 114,144.5 114,144.3 113.9,144 113.9,143.8 113.9,143.5 113.8,143.3 113.8,143 113.7,142.8 113.7,142.5 113.7,142.3 113.6,142 113.6,141.8 113.6,141.5 113.5,141.3 113.5,141 113.5,140.8 113.4,140.5 113.4,140.3 113.4,140 113.3,139.8 113.3,139.5 113.3,139.3 113.2,139 113.2,138.8 113.2,138.5 113.1,138.3 113.1,138 113.1,137.8 113.1,137.5 113,137.3 113,137 113,136.8 112.9,136.5 112.9,136.3 112.9,136 112.8,135.8 112.8,135.5 112.8,135.3 112.8,135 112.7,134.8 112.7,134.5 112.7,134.3 112.7,134 112.6,133.8 112.6,133.5 112.6,133.3 112.6,133 112.5,132.8 112.5,132.5 112.5,132.3 112.5,132 112.4,131.8 112.4,131.5 112.4,131.3 112.4,131 112.3,130.8 112.3,130.5 112.3,130.3 112.3,130 112.3,129.8 112.2,129.5 112.2,129.3 112.2,129 112.2,128.8 112.1,128.5 112.1,128.3 112.1,128 112.1,127.8 112.1,127.5 112,127.3 112,127 112,126.8 112,126.5 112,126.3 111.9,126 111.9,125.8 111.9,125.5 111.9,125.2 111.9,125 111.8,124.8 111.8,124.5 111.8,124.3 111.8,124 111.8,123.8 111.8,123.5 111.7,123.3 111.7,123 111.7,122.8 111.7,122.5 111.7,122.3 111.7,122 111.6,121.7 111.6,121.5 111.6,121.3 111.6,121 111.6,120.8 111.6,120.5 111.6,120.3 111.5,120 111.5,119.8 111.5,119.5 111.5,119.3 111.5,119 111.5,118.8 111.4,118.5 111.4,118.2 111.4,118 111.4,117.8 111.4,117.5 111.4,117.3 111.4,117 111.4,116.8 111.3,116.5 111.3,116.3 111.3,116 111.3,115.8 111.3,115.5 111.3,115.3 111.3,115 111.2,114.7 111.2,114.5 111.2,114.3 111.2,114 111.2,113.8 111.2,113.5 111.2,113.3 111.2,113 111.2,112.8 111.1,112.5 111.1,112.3 111.1,112 111.1,111.8 111.1,111.5 111.1,111.2 111.1,111 111.1,110.8 111.1,110.5 111,110.3 111,110 111,109.8 111,109.5 111,109.3 111,109 111,108.8 111,108.5 111,108.3 111,108 110.9,107.7 110.9,107.5 110.9,107.3 110.9,107 110.9,106.8 110.9,106.5 110.9,106.3 110.9,106 110.9,105.8 110.9,105.5 110.9,105.3 110.9,105 110.8,104.8 110.8,104.5 110.8,104.2 110.8,104 110.8,103.8 110.8,103.5 110.8,103.3 110.8,103 110.8,102.8 110.8,102.5 110.8,102.3 110.8,102 110.8,101.8 110.7,101.5 110.7,101.3 110.7,101 110.7,100.7 110.7,100.5 110.7,100.3 110.7,100 110.7,99.8 110.7,99.5 110.7,99.3 110.7,99 110.7,98.8 110.7,98.5 110.7,98.3 110.6,98 110.6,97.8 110.6,97.5 110.6,97.2 110.6,97 110.6,96.8 110.6,96.5 110.6,96.3 110.6,96 110.6,95.8 110.6,95.5 110.6,95.3 110.6,95 110.6,94.8 110.6,94.5 110.6,94.3 110.6,94 110.5,93.7 110.5,93.5 110.5,93.3 110.5,93 110.5,92.8 110.5,92.5 110.5,92.3 110.5,92 110.5,91.8 110.5,91.5 110.5,91.3 110.5,91 110.5,90.8 110.5,90.5 110.5,90.2 110.5,90 110.5,89.8 110.5,89.5 110.5,89.3 110.5,89 110.5,88.8 110.4,88.5 110.4,88.3 110.4,88 110.4,87.8 110.4,87.5 110.4,87.3 110.4,87 110.4,86.7 110.4,86.5 110.4,86.3 110.4,86 110.4,85.8 110.4,85.5 110.4,85.3 110.4,85 110.4,84.8 110.4,84.5 110.4,84.3 110.4,84 110.4,83.8 110.4,83.5 110.4,83.2 110.4,83 110.4,82.8 110.4,82.5 110.3,82.3 110.3,82 110.3,81.8 110.3,81.5 110.3,81.3 110.3,81 110.3,80.8 110.3,80.5 110.3,80.3 110.3,80 110.3,79.7 110.3,79.5 110.3,79.3 110.3,79 110.3,78.8 110.3,78.5 110.3,78.3 110.3,78 110.3,77.8 110.3,77.5 110.3,77.3 110.3,77 110.3,76.8 110.3,76.5 110.3,76.2 110.3,76 110.3,75.8 110.3,75.5 110.3,75.3 110.3,75 110.3,74.8 110.3,74.5 110.3,74.3 110.3,74 110.3,73.8 110.2,73.5 110.2,73.3 110.2,73 110.2,72.7 110.2,72.5 110.2,72.3 110.2,72 110.2,71.8 110.2,71.5 110.2,71.3 110.2,71 110.2,70.8 110.2,70.5 110.2,70.3 110.2,70 110.2,69.8 110.2,69.5 110.2,69.2 110.2,69 110.2,68.8 110.2,68.5 110.2,68.3 110.2,68 110.2,67.8 110.2,67.5 110.2,67.3 110.2,67 110.2,66.8 110.2,66.5 110.2,66.3 110.2,66 110.2,65.8 110.2,65.5 110.2,65.3 110.2,65 110.2,64.8 110.2,64.5 110.2,64.3 110.2,64 110.2,63.8 110.2,63.5 110.2,63.3 110.2,63 110.2,62.8 110.2,62.5 110.2,62.3 110.2,62 110.2,61.8 110.2,61.5 110.2,61.3 110.2,61 110.2,60.8 110.1,60.5 110.1,60.3 110.1,60 110.1,59.8 110.1,59.5 110.1,59.3 110.1,59 110.1,58.8 110.1,58.5 110.1,58.3 110.1,58 110.1,57.8 110.1,57.5 110.1,57.3 110.1,57 110.1,56.8 110.1,56.5 110.1,56.3 110.1,56 110.1,55.8 110.1,55.5 110.1,55.3 110.1,55 110.1,54.8 110.1,54.5 110.1,54.3 110.1,54 110.1,53.8 110.1,53.5 110.1,53.3 110.1,53 110.1,52.8 110.1,52.5 110.1,52.3 110.1,52 110.1,51.8 110.1,51.5 110.1,51.2 110.1,51 110.1,50.8 110.1,50.5 110.1,50.3 110.1,50 110.1,49.8 110.1,49.5 110.1,49.3 110.1,49 110.1,48.8 110.1,48.5 110.1,48.3 110.1,48 110.1,47.7 110.1,47.5 110.1,47.3 110.1,47 110.1,46.8 110.1,46.5 110.1,46.3 110.1,46 110.1,45.8 110.1,45.5 110.1,45.3 110.1,45 110.1,44.8 110.1,44.5 110.1,44.2 110.1,44 110.1,43.8 110.1,43.5 110.1,43.3 110.1,43 110.1,42.8 110.1,42.5 110.1,42.3 110.1,42 110.1,41.8 110.1,41.5 110.1,41.3 110.1,41 110.1,40.7 110.1,40.5 110.1,40.3 110.1,40 110.1,39.8 110.1,39.5 110.1,39.3 110.1,39 110.1,38.8 110.1,38.5 110.1,38.3 110.1,38 110.1,37.8 110.1,37.5 110.1,37.2 110.1,37 110.1,36.8 110.1,36.5 110.1,36.3 110.1,36 110.1,35.8 110.1,35.5 110.1,35.3 110.1,35 110.1,34.8 110.1,34.5 110.1,34.3 110.1,34 110.1,34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="110,26 115.1,36 105.1,36" fill="currentColor"/>
  <circle cx="110" cy="166" r="4" fill="currentColor"/>
  <circle cx="138" cy="194" r="4" fill="currentColor"/>
  <text x="237.2" y="94.6" font-size="13" fill="currentColor">y = x</text>
  <text x="82" y="63.4" font-size="13" fill="currentColor">exponential</text>
  <text x="224.8" y="227.6" font-size="13" fill="currentColor">logarithm</text>
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

## Practice

### Convert between exponential and logarithmic form

{{< multiplechoice
  question="Convert to logarithmic form: $2^5=32$."
  answer="$\log_2 32=5$"
  hint="In $a^y=x$, the equivalent logarithmic form is $\log_a x=y$."
>}}
$\log_5 32=2$
$\log_2 32=5$
$\log_{32}2=5$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Convert to logarithmic form: $10^{-2}=\tfrac1{100}$."
  answer="$\log\tfrac1{100}=-2$"
  hint="A logarithm written with no base shown is base $10$."
>}}
$\log_{-2}\tfrac1{100}=10$
$\log\tfrac1{100}=-2$
$\log_{10}(-2)=\tfrac1{100}$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Convert to logarithmic form: $17^x=\sqrt[5]{17}$."
  answer="$\log_{17}\sqrt[5]{17}=x$"
  hint="Keep the exponential base as the logarithmic base."
>}}
$\log_x\sqrt[5]{17}=17$
$\log_{\sqrt[5]{17}}17=x$
$\log_{17}\sqrt[5]{17}=x$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Convert to logarithmic form: $e^3=x$."
  answer="$\ln x=3$"
  hint="The logarithmic form of $e^y=x$ is $\ln x=y$."
>}}
$\log_x e=3$
$\ln 3=x$
$\ln x=3$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Convert to exponential form: $6=\log_2 64$."
  answer="$64=2^6$"
  hint="In $\log_a x=y$, the equivalent exponential form is $a^y=x$."
>}}
$6=64^2$
$2=6^{64}$
$64=2^6$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Convert to exponential form: $0=\log_7 1$."
  answer="$1=7^0$"
  hint="The logarithm is the exponent on the base."
>}}
$0=1^7$
$7=0^1$
$1=7^0$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Convert to exponential form: $3=\log_{10}1{,}000$."
  answer="$1{,}000=10^3$"
  hint="A logarithm written with no base shown is base $10$."
>}}
$1{,}000=10^3$
$10=3^{1{,}000}$
$3=1{,}000^{10}$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Convert to exponential form: $x=\log_e 43$."
  answer="$43=e^x$"
  hint="$\log_e$ is written $\ln$, and its exponential form is base $e$."
>}}
$43=e^x$
$x=43^e$
$e=x^{43}$
{{< /multiplechoice >}}

### Evaluate logarithmic functions

{{< fillin
  question="Find $x$: $\log_x121=2$."
  answer="11"
  hint="Convert to exponential form: $x^2=121$."
>}}

{{< fillin
  question="Find $x$: $\log_x64=3$."
  answer="4"
  hint="Convert to exponential form: $x^3=64$."
>}}

{{< fillin
  question="Find $x$: $\log_5x=3$."
  answer="125"
  hint="Convert to exponential form: $5^3=x$."
>}}

{{< fillin
  question="Find $x$: $\log_3x=-5$."
  answer="\frac{1}{243}"
  answerDisplay="$\tfrac1{243}$"
  hint="Convert to exponential form: $3^{-5}=x$."
>}}

{{< fillin
  question="Find $x$: $\log_{\tfrac13}\tfrac19=x$."
  answer="2"
  answerForm="decimal"
  hint="Rewrite $\tfrac19$ as a power of $\tfrac13$."
>}}

{{< fillin
  question="Find $x$: $\log_{\tfrac19}81=x$."
  answer="-2"
  answerForm="decimal"
  hint="Rewrite $81$ as a power of $\tfrac19$."
>}}

{{< fillin
  question="Find the exact value of $\log_6 36$."
  answer="2"
  answerForm="decimal"
  hint="Ask which power of $6$ gives $36$."
>}}

{{< fillin
  question="Find the exact value of $\log_5 1$."
  answer="0"
  answerForm="decimal"
  hint="Any base raised to the power $0$ equals $1$."
>}}

{{< fillin
  question="Find the exact value of $\log_{27}3$."
  answer="\frac{1}{3}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac13$"
  hint="Rewrite $27$ and $3$ as powers of $3$."
>}}

{{< fillin
  question="Find the exact value of $\log_{\tfrac12}4$."
  answer="-2"
  answerForm="decimal"
  hint="Rewrite $4$ as a power of $\tfrac12$."
>}}

{{< fillin
  question="Find the exact value of $\log_3\tfrac1{27}$."
  answer="-3"
  answerForm="decimal"
  hint="Rewrite $\tfrac1{27}$ as a power of $3$."
>}}

{{< fillin
  question="Find the exact value of $\log_9\tfrac1{81}$."
  answer="-2"
  answerForm="decimal"
  hint="Rewrite $\tfrac1{81}$ as a power of $9$."
>}}

### Graph Logarithmic functions

{{< fillin
  question="For $y=\log_7x$, what are its domain and range, in interval notation? Enter the domain, then the range, separated by a comma."
  answer="(0,\infty),(-\infty,\infty)"
  answerDisplay="domain $(0,\infty)$, range $(-\infty,\infty)$"
  hint="Rewrite as $7^y=x$: the output $7^y$ is always positive, but $y$ itself is unrestricted."
  placeholder="domain, range"
>}}

{{< fillin
  question="What is the equation of the vertical asymptote of the graph of $y=\log_{2.5}x$?"
  answer="x=0"
  hint="A logarithmic graph gets arbitrarily close to the $y$-axis but never crosses it."
>}}

{{< fillin
  question="On the graph of $y=\log_{2.5}x$, what is the $y$-coordinate of the point with $x=2.5$?"
  answer="1"
  hint="Evaluate $\log_{2.5}2.5$."
>}}

{{< fillin
  question="On the graph of $y=\log_{\tfrac15}x$, what is the $y$-coordinate of the point with $x=5$?"
  answer="-1"
  hint="Rewrite as $(\tfrac15)^y=5$ and solve for $y$."
>}}

### Solve logarithmic equations

{{< fillin
  question="Solve $\log_a81=2$ for the base $a$."
  answer="9"
  hint="Convert to exponential form: $a^2=81$, then reject the negative root."
>}}

{{< fillin
  question="Solve $\log_a27=3$ for the base $a$."
  answer="3"
  hint="Convert to exponential form: $a^3=27$."
>}}

{{< fillin
  question="Solve $\log_a24=3$ for the base $a$."
  answer="2\sqrt[3]{3}"
  answerDisplay="$a=2\sqrt[3]{3}$"
  hint="Convert to exponential form, $a^3=24$, then simplify $\sqrt[3]{24}$."
>}}

{{< fillin
  question="Solve $\ln x=4$."
  answer="e^4"
  hint="Rewrite using the definition of $\ln$: $x=e^4$."
>}}

{{< fillin
  question="Solve $\log_2(6x+2)=5$."
  answer="5"
  hint="Convert to exponential form: $6x+2=2^5$."
>}}

{{< fillin
  question="Solve $\log_3(5x-4)=4$."
  answer="17"
  hint="Convert to exponential form: $5x-4=3^4$."
>}}

{{< fillin
  question="Solve $\log_4(3x-2)=2$."
  answer="6"
  hint="Convert to exponential form: $3x-2=4^2$."
>}}

{{< fillin
  question="Solve $\ln(e^{2x})=6$."
  answer="3"
  hint="Apply the inverse property $\ln(e^{k})=k$ directly."
>}}

{{< fillin
  question="Solve $\log(x^2-25)=2$. Enter both solutions, separated by a comma."
  answer="-5\sqrt{5},5\sqrt{5}"
  answerMode="unordered"
  answerDisplay="$x=-5\sqrt5$ or $x=5\sqrt5$"
  hint="A log with no base shown is base $10$; convert to exponential form and solve the resulting quadratic."
>}}

{{< fillin
  question="Solve $\log_3(x^2+2)=3$. Enter both solutions, separated by a comma."
  answer="-5,5"
  answerMode="unordered"
  answerDisplay="$x=-5$ or $x=5$"
  hint="Convert to exponential form, $x^2+2=27$, then solve the quadratic."
>}}

### Use logarithmic models in applications

{{< fillin
  question="What is the decibel level of a whisper with intensity $10^{-10}$ watts per square inch?"
  answer="20"
  answerDisplay="20 dB"
  hint="Use $D=10\log(\tfrac{I}{10^{-12}})$."
>}}

{{< fillin
  question="What is the decibel level of the sound of a garbage disposal with intensity $10^{-2}$ watts per square inch?"
  answer="100"
  answerDisplay="100 dB"
  hint="Substitute the intensity into $D=10\log(\tfrac{I}{10^{-12}})$."
>}}

{{< fillin
  question="In 1994, the Northridge earthquake measured $6.7$ on the Richter scale. In 2014, an earthquake in the same area measured $5.1$. About how many times as intense was the 1994 earthquake?"
  answer="40"
  answerDisplay="about 40 times as intense"
  hint="Compute $10^{6.7-5.1}$ and round to the nearest whole number."
>}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 10.3: Evaluate and Graph Logarithmic Functions](https://openstax.org/books/intermediate-algebra-2e/pages/10-3-evaluate-and-graph-logarithmic-functions) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted the worked solutions for the web; omitted the Be Prepared quiz and media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback; and adapted selected end-of-section exercises into an interactive Practice block.</small>
