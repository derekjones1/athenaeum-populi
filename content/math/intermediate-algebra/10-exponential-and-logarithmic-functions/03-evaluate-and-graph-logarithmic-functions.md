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

{{< apfigure kind="graph" >}}
{"ariaLabel":"For base 3, the exponential graph y = 3^x and logarithmic graph y = log base 3 of x are reflections across the dashed line y = x.","xMin":-3,"xMax":6,"yMin":-3,"yMax":6,"unit":28,"tickLabels":true,"lines":[{"slope":1,"intercept":0,"dashed":true}],"points":[{"at":[0,1]},{"at":[1,0]}],"curves":[{"kind":"exp","b":3,"arrows":"end"},{"kind":"log","b":3,"arrows":"end"}],"texts":[{"at":[4.543,3.55],"text":"y = x"},{"at":[1.4,4.664],"text":"exponential"},{"at":[4.2,1.05],"text":"logarithm"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"For base 1/3, the exponential graph y = (1/3)^x and logarithmic graph y = log base 1/3 of x are reflections across the dashed line y = x.","xMin":-3,"xMax":6,"yMin":-3,"yMax":6,"unit":28,"tickLabels":true,"lines":[{"slope":1,"intercept":0,"dashed":true}],"points":[{"at":[0,1]},{"at":[1,0]}],"curves":[{"kind":"exp","b":0.3333333333333333,"arrows":"end"},{"kind":"log","b":0.3333333333333333,"arrows":"end"}],"texts":[{"at":[4.543,3.55],"text":"y = x"},{"at":[-1.2,2.9],"text":"exponential","anchor":"end"},{"at":[4.1,-1.2],"text":"logarithm"}]}
{{< /apfigure >}}

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

**Example 10.27.** In 1906, San Francisco experienced an intense earthquake with a magnitude of 7.8 on the Richter scale. Over 80% of the city was destroyed by the resulting fires. In 2014, Los Angeles experienced a moderate earthquake that measured 5.1 on the Richter scale and caused \$108 million dollars of damage. Compare the intensities of the two earthquakes.

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
