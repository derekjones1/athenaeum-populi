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

Since the equations $y={\text{log}}_{a}x$ and $x={a}^{y}$ are equivalent, we can go back and forth between them. This will often be the method to solve some exponential and logarithmic equations. To help with converting back and forth let’s take a close look at the equations below. Notice the positions of the exponent and base.

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

{{< fillin
  question="Convert to logarithmic form: $3^2=9$."
  answer="\log_3 9=2"
  answerForm="logarithmic-form"
  answerDisplay="$\log_3 9=2$"
  hint="In $a^y=x$, the equivalent logarithmic form is $\log_a x=y$."
>}}

{{< fillin
  question="Convert to logarithmic form: $7^{\tfrac12}=\sqrt7$."
  answer="\log_7\sqrt{7}=\frac{1}{2}"
  answerForm="logarithmic-form"
  answerDisplay="$\log_7\sqrt7=\tfrac12$"
  hint="Keep the exponential base as the logarithmic base."
>}}

{{< fillin
  question="Convert to logarithmic form: $(\tfrac13)^x=\tfrac1{27}$."
  answer="\log_{\frac{1}{3}}\frac{1}{27}=x"
  answerForm="logarithmic-form"
  answerDisplay="$\log_{\tfrac13}\tfrac1{27}=x$"
  hint="The base of the power becomes the base of the logarithm, and the exponent becomes the value of the logarithm."
>}}

In the next example we do the reverse—convert logarithmic form to exponential form.

**Example 10.19.** Convert to exponential form: ⓐ $2={\text{log}}_{8}64,$ ⓑ $0={\text{log}}_{4}1,$ and ⓒ $-3={\text{log}}_{10}\tfrac{1}{1000}.$

**Solution.**

Identify the base and the exponent in each logarithmic equation:

| Logarithmic form | Exponential form |
| --- | --- |
| $2=\log_{8}64$ | $64=8^2$ |
| $0=\log_{4}1$ | $1=4^0$ |
| $-3=\log_{10}\tfrac{1}{1000}$ | $\tfrac{1}{1000}=10^{-3}$ |

{{< fillin
  question="Convert to exponential form: $3=\log_4 64$."
  answer="64=4^3"
  answerForm="exponential-form"
  answerDisplay="$64=4^3$"
  hint="In $\log_a x=y$, the equivalent exponential form is $x=a^y$."
>}}

{{< fillin
  question="Convert to exponential form: $0=\log_x 1$."
  answer="1=x^0"
  answerForm="exponential-form"
  answerDisplay="$1=x^0$"
  hint="The logarithm is the exponent on the base."
>}}

{{< fillin
  question="Convert to exponential form: $-2=\log_{10}\tfrac1{100}$."
  answer="\frac{1}{100}=10^{-2}"
  answerForm="exponential-form"
  answerDisplay="$\tfrac1{100}=10^{-2}$"
  hint="The base of the logarithm becomes the base of the power."
>}}

## Evaluate Logarithmic Functions

We can solve and evaluate logarithmic equations by using the technique of converting the equation to its equivalent exponential equation.

**Example 10.20.** Find the value of x: ⓐ ${\text{log}}_{x}36=2,$ ⓑ ${\text{log}}_{4}x=3,$ and ⓒ ${\text{log}}_{\tfrac{1}{2}}\tfrac{1}{8}=x.$

**Solution.**

ⓐ

|  | ${\text{log}}_{x}36=2$ |
| --- | --- |
| Convert to exponential form. | ${x}^{2}=36$ |
| Solve the quadratic. | $x=6,x=-6$ |
| The base of a logarithmic function must be positive, so we eliminate $x=-6$. | $x=6$. Therefore, ${\text{log}}_{6}36=2.$ |

ⓑ

|  | ${\text{log}}_{4}x=3$ |
| --- | --- |
| Convert to exponential form. | ${4}^{3}=x$ |
| Simplify. | $x=64$. Therefore, ${\text{log}}_{4}64=3.$ |

ⓒ

|  | ${\text{log}}_{\tfrac{1}{2}}\tfrac{1}{8}=x$ |
| --- | --- |
| Convert to exponential form. | ${(\tfrac{1}{2})}^{x}=\tfrac{1}{8}$ |
| Rewrite $\tfrac{1}{8}$ as ${(\tfrac{1}{2})}^{3}$. | ${(\tfrac{1}{2})}^{x}={(\tfrac{1}{2})}^{3}$ |
| With the same base, the exponents must be equal. | $x=3$. Therefore, ${\text{log}}_{\tfrac{1}{2}}\tfrac{1}{8}=3.$ |

{{< fillin
  question="Find the value of $x$: $\log_x81=2$."
  answer="9"
  answerForm="decimal"
  hint="Convert to exponential form, solve for $x$, and keep only a base a logarithm can have."
>}}

{{< fillin
  question="Find the value of $x$: $\log_3x=5$."
  answer="243"
  answerForm="decimal"
  hint="Convert to exponential form, then evaluate the power."
>}}

{{< fillin
  question="Find the value of $x$: $\log_{\tfrac13}\tfrac1{27}=x$."
  answer="3"
  answerForm="decimal"
  hint="Convert to exponential form and write $\tfrac1{27}$ as a power of $\tfrac13$."
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
| With the same base the exponents must be equal. | $x=2$. Therefore, ${\text{log}}_{5}25=2.$ |

ⓑ

|  | ${\text{log}}_{9}3$ |
| --- | --- |
| Set the expression equal to $x$. | ${\text{log}}_{9}3=x$ |
| Change to exponential form. | ${9}^{x}=3$ |
| Rewrite 9 as ${3}^{2}$. | ${({3}^{2})}^{x}={3}^{1}$ |
| Simplify the exponents. | ${3}^{2x}={3}^{1}$ |
| With the same base the exponents must be equal. | $2x=1$ |
| Solve the equation. | $x=\tfrac{1}{2}$. Therefore, ${\text{log}}_{9}3=\tfrac{1}{2}.$ |

ⓒ

|  | ${\text{log}}_{2}\tfrac{1}{16}$ |
| --- | --- |
| Set the expression equal to $x$. | ${\text{log}}_{2}\tfrac{1}{16}=x$ |
| Change to exponential form. | ${2}^{x}=\tfrac{1}{16}$ |
| Rewrite 16 as ${2}^{4}$. | ${2}^{x}=\tfrac{1}{{2}^{4}}$ |
|  | ${2}^{x}={2}^{-4}$ |
| With the same base the exponents must be equal. | $x=-4$. Therefore, ${\text{log}}_{2}\tfrac{1}{16}=-4.$ |

{{< fillin
  question="Find the exact value of $\log_{12}144$ without using a calculator."
  answer="2"
  answerForm="decimal"
  hint="Ask which power of $12$ gives $144$."
>}}

{{< fillin
  question="Find the exact value of $\log_4 2$ without using a calculator."
  answer="\frac{1}{2}"
  answerForm="evaluated-logarithm lowest-terms"
  answerDisplay="$\tfrac12$"
  hint="Set the logarithm equal to $x$, change to exponential form, and write both sides as powers of $2$."
>}}

{{< fillin
  question="Find the exact value of $\log_2\tfrac1{32}$ without using a calculator."
  answer="-5"
  answerForm="decimal"
  hint="Set the logarithm equal to $x$, change to exponential form, and write $\tfrac1{32}$ as a power of $2$."
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

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = log base 2 of x: an increasing curve through the points (1/2, −1), (1, 0), (2, 1), (4, 2), and (8, 3). It falls steeply toward the y-axis as x approaches 0 without touching it, and rises slowly to the right.","xMin":-1,"xMax":9,"yMin":-4,"yMax":4,"unit":40,"tickLabels":true,"points":[{"at":[0.5,-1],"label":"(½, −1)"},{"at":[1,0],"label":"(1, 0)","labelNudge":[-8,0]},{"at":[2,1],"label":"(2, 1)"},{"at":[4,2]},{"at":[8,3]}],"curves":[{"kind":"log","b":2,"from":0.165}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Which description matches the graph of $y=\log_3x$?"
  answer="It is increasing, passes through $(1,0)$ and $(3,1)$, and has vertical asymptote $x=0$."
  hint="Rewrite as $3^y=x$ and find the points with $y=0$ and $y=1$."
>}}
It is decreasing, passes through $(0,1)$, and has horizontal asymptote $y=0$.
It is increasing, passes through $(0,1)$ and $(1,3)$, and has horizontal asymptote $y=0$.
It is increasing, passes through $(1,0)$ and $(3,1)$, and has vertical asymptote $x=0$.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which description matches the graph of $y=\log_5x$?"
  answer="It is increasing, passes through $(1,0)$ and $(5,1)$, and has vertical asymptote $x=0$."
  hint="Rewrite as $5^y=x$ and find the points with $y=0$ and $y=1$."
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
**Properties of the Graph of $y=\log_a x$ when $a>1$.**

| Property | When $a>1$ |
| --- | --- |
| Domain | $(0,\infty )$ |
| Range | $(-\infty ,\infty )$ |
| $x$-intercept | $(1,0)$ |
| $y$-intercept | None |
| Contains | $(a,1),$ $(\tfrac{1}{a},-1)$ |
| Asymptote | $y$-axis |
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

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = log base 1/3 of x: a decreasing curve through the points (1/3, 1), (1, 0), (3, −1), and (9, −2). It rises steeply toward the y-axis as x approaches 0 without touching it, and falls slowly to the right.","xMin":-1,"xMax":10,"yMin":-4,"yMax":4,"unit":40,"tickLabels":true,"points":[{"at":[0.3333333333333333,1],"label":"(⅓, 1)"},{"at":[1,0],"label":"(1, 0)"},{"at":[3,-1],"label":"(3, −1)"},{"at":[9,-2]}],"curves":[{"kind":"log","b":3,"a":-1,"from":0.165}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Which description matches the graph of $y=\log_{\tfrac12}x$?"
  answer="It is decreasing, passes through $(1,0)$ and $(\tfrac12,1)$, and has vertical asymptote $x=0$."
  hint="Rewrite as $(\tfrac12)^y=x$ and find the points with $y=0$ and $y=1$."
>}}
It is decreasing, passes through $(1,0)$ and $(\tfrac12,1)$, and has vertical asymptote $x=0$.
It is increasing, passes through $(1,0)$ and $(2,1)$, and has vertical asymptote $x=0$.
It is decreasing, passes through $(0,1)$, and has horizontal asymptote $y=0$.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which description matches the graph of $y=\log_{\tfrac14}x$?"
  answer="It is decreasing, passes through $(1,0)$ and $(\tfrac14,1)$, and has vertical asymptote $x=0$."
  hint="Rewrite as $(\tfrac14)^y=x$ and find the points with $y=0$ and $y=1$."
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
**Properties of the Graph of $y=\log_a x$.**

| Property | When $a>1$ | When $0<a<1$ |
| --- | --- | --- |
| Domain | $(0,\infty )$ | $(0,\infty )$ |
| Range | $(-\infty ,\infty )$ | $(-\infty ,\infty )$ |
| $x$-intercept | $(1,0)$ | $(1,0)$ |
| $y$-intercept | none | none |
| Contains | $(a,1),$ $(\tfrac{1}{a},-1)$ | $(a,1),$ $(\tfrac{1}{a},-1)$ |
| Asymptote | $y$-axis | $y$-axis |
| Basic shape | increasing | decreasing |
{{< /callout >}}

We talked earlier about how the logarithmic function ${f}^{-1}(x)={\text{log}}_{a}x$ is the inverse of the exponential function $f(x)={a}^{x}.$ The graphs below show both the exponential and logarithmic functions on the same graph for both $a>1$ (drawn with $a=3$) and $0<a<1$ (drawn with $a=\tfrac13$).

{{< apfigure kind="graph" >}}
{"ariaLabel":"For base 3, the exponential graph y = 3 to the x passes through (−1, 1/3), (0, 1), and (1, 3), and the logarithmic graph y = log base 3 of x passes through (1/3, −1), (1, 0), and (3, 1); the two curves are reflections of each other across the dashed line y = x.","xMin":-3,"xMax":6,"yMin":-3,"yMax":6,"unit":40,"tickLabels":true,"lines":[{"slope":1,"intercept":0,"dashed":true}],"points":[{"at":[-1,0.3333333333333333]},{"at":[0,1]},{"at":[1,3]},{"at":[0.3333333333333333,-1]},{"at":[1,0]},{"at":[3,1]}],"curves":[{"kind":"exp","b":3,"from":-1.64},{"kind":"log","b":3,"from":0.165}],"texts":[{"at":[4.2,3.55],"text":"y = x"},{"at":[1.65,4.4],"text":"exponential"},{"at":[3.7,0.55],"text":"logarithm"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"For base 1/3, the exponential graph y = (1/3) to the x passes through (−1, 3), (0, 1), and (1, 1/3), and the logarithmic graph y = log base 1/3 of x passes through (3, −1), (1, 0), and (1/3, 1); the two curves are reflections of each other across the dashed line y = x.","xMin":-3,"xMax":6,"yMin":-3,"yMax":6,"unit":40,"tickLabels":true,"lines":[{"slope":1,"intercept":0,"dashed":true}],"points":[{"at":[-1,3]},{"at":[0,1]},{"at":[1,0.3333333333333333]},{"at":[3,-1]},{"at":[1,0]},{"at":[0.3333333333333333,1]}],"curves":[{"kind":"exp","b":0.3333333333333333,"to":1.64},{"kind":"log","b":3,"a":-1,"from":0.165}],"texts":[{"at":[4.2,3.55],"text":"y = x"},{"at":[-1.45,3.6],"text":"exponential","anchor":"end"},{"at":[4.2,-2.1],"text":"logarithm"}]}
{{< /apfigure >}}

Notice how the graphs are reflections of each other through the line $y=x.$ We know this is true of inverse functions. Keeping a visual in your mind of these graphs will help you remember the domain and range of each function. Notice the x-axis is the horizontal asymptote for the exponential functions and the y-axis is the vertical asymptote for the logarithmic functions.

## Solve Logarithmic Equations

When we talked about exponential functions, we introduced the number e. Just as e was a base for an exponential function, it can be used a base for logarithmic functions too. The logarithmic function with base e is called the natural logarithmic function. The function $f(x)={\text{log}}_{e}x$ is generally written $f(x)=\ln x$ and we read it as “el en of $x$.”

{{< callout type="info" >}}
**Natural Logarithmic Function.** The function $f(x)=\ln x$ is the natural logarithmic function with base $e,$ where $x>0.$

$$
y=\ln x \quad\Longleftrightarrow\quad x=e^y
$$
{{< /callout >}}

When the base of the logarithm function is 10, we call it the common logarithmic function and the base is not shown. If the base a of a logarithm is not shown, we assume it is 10.

{{< callout type="info" >}}
**Common Logarithmic Function.** The function $f(x)=\log x$ is the common logarithmic function with base $10$, where $x>0.$

$$
y=\log x \quad\Longleftrightarrow\quad x=10^y
$$
{{< /callout >}}

Use the calculator's **log** key for common logarithms and its **ln** key for
natural logarithms.

To solve logarithmic equations, one strategy is to change the equation to exponential form and then solve the exponential equation as we did before. As we solve logarithmic equations, $y={\text{log}}_{a}x$, we need to remember that for the base a, $a>0$ and $a\ne 1.$ Also, the domain is $x>0.$ Just as with radical equations, we must check our solutions to eliminate any extraneous solutions.

**Example 10.24.** Solve: ⓐ ${\text{log}}_{a}49=2$ and ⓑ $\ln x=3.$

**Solution.**

ⓐ

|  | ${\text{log}}_{a}49=2$ |
| --- | --- |
| Rewrite in exponential form. | ${a}^{2}=49$ |
| Solve the equation using the square root property. | $a=\pm 7$ |
| The base cannot be negative, so we eliminate $a=-7.$ | $a=7$ |
| Check $a=7$. | ${\text{log}}_{7}49=2$ because ${7}^{2}=49\ \checkmark$ |

ⓑ

|  | $\ln x=3$ |
| --- | --- |
| Rewrite in exponential form. | ${e}^{3}=x$ |
| Check $x={e}^{3}$. | $\ln {e}^{3}=3$ because ${e}^{3}={e}^{3}\ \checkmark$ |

{{< fillin
  question="Solve: $\log_a121=2$."
  answer="11"
  answerForm="decimal"
  hint="Rewrite in exponential form, use the square root property, and keep only a base a logarithm can have."
>}}

{{< fillin
  question="Solve: $\ln x=7$. Enter the exact answer."
  answer="e^7"
  answerForm="exact"
  answerDisplay="$x=e^7$"
  hint="Rewrite in exponential form; $\ln$ is the logarithm with base $e$."
>}}

**Example 10.25.** Solve: ⓐ ${\text{log}}_{2}(3x-5)=4$ and ⓑ $\ln {e}^{2x}=4.$

**Solution.**

ⓐ

|  | ${\text{log}}_{2}(3x-5)=4$ |
| --- | --- |
| Rewrite in exponential form. | ${2}^{4}=3x-5$ |
| Simplify. | $16=3x-5$ |
| Solve the equation. | $21=3x$ |
|  | $7=x$ |
| Check $x=7$. | ${\text{log}}_{2}(3\cdot 7-5)={\text{log}}_{2}16=4$ because ${2}^{4}=16\ \checkmark$ |

ⓑ

|  | $\ln {e}^{2x}=4$ |
| --- | --- |
| Rewrite in exponential form. | ${e}^{4}={e}^{2x}$ |
| Since the bases are the same the exponents are equal. | $4=2x$ |
| Solve the equation. | $2=x$ |
| Check $x=2$. | $\ln {e}^{2\cdot 2}=\ln {e}^{4}=4$ because ${e}^{4}={e}^{4}\ \checkmark$ |

{{< fillin
  question="Solve: $\log_2(5x-1)=6$."
  answer="13"
  answerForm="decimal"
  hint="Rewrite in exponential form, then solve the linear equation and check the result."
>}}

{{< fillin
  question="Solve: $\ln e^{3x}=6$."
  answer="2"
  answerForm="decimal"
  hint="Rewrite in exponential form with base $e$; with the same base, the exponents must be equal."
>}}

## Use Logarithmic Models in Applications

There are many applications that are modeled by logarithmic equations. We will first look at the logarithmic equation that gives the decibel (dB) level of sound. Decibels range from 0, which is barely audible to 160, which can rupture an eardrum. The ${10}^{-12}$ in the formula represents the intensity of sound that is barely audible.

{{< callout type="info" >}}
**Decibel Level of Sound.** The loudness level, D, measured in decibels, of a sound of intensity, I, measured in watts per square meter is

$$
D=10\log\left(\tfrac{I}{10^{-12}}\right).
$$
{{< /callout >}}

**Example 10.26.** Extended exposure to noise that measures 85 dB can cause permanent damage to the inner ear which will result in hearing loss. What is the decibel level of music coming through ear phones with intensity ${10}^{-2}$ watts per square meter?

**Solution.**

|  | $D=10\log\left(\tfrac{I}{10^{-12}}\right)$ |
| --- | --- |
| Substitute in the intensity level, I. | $D=10\log\left(\tfrac{10^{-2}}{10^{-12}}\right)$ |
| Simplify. | $D=10\log(10^{10})$ |
| Since $\log(10^{10})=10$. | $D=10(10)$ |
| Multiply. | $D=100$ |
|  | The decibel level of music coming through earphones is 100 dB. |

{{< fillin
  question="What is the decibel level of one of the new quiet dishwashers with intensity $10^{-7}$ watts per square meter?"
  answer="50"
  answerForm="decimal"
  answerDisplay="50 dB"
  hint="Use $D=10\log(\tfrac{I}{10^{-12}})$."
>}}

{{< fillin
  question="What is the decibel level of heavy city traffic with intensity $10^{-3}$ watts per square meter?"
  answer="90"
  answerForm="decimal"
  answerDisplay="90 dB"
  hint="Substitute the intensity into $D=10\log(\tfrac{I}{10^{-12}})$."
>}}

The magnitude $R$ of an earthquake is measured by a logarithmic scale called the Richter scale. The model is $R=\log I,$ where $I$ is the intensity of the shock wave. This model provides a way to measure earthquake intensity.

{{< callout type="info" >}}
**Earthquake Intensity.** The magnitude R of an earthquake is measured by $R=\log I,$ where I is the intensity of its shock wave.
{{< /callout >}}

**Example 10.27.** In 1906, San Francisco experienced an intense earthquake with a magnitude of 7.8 on the Richter scale. Over 80% of the city was destroyed by the resulting fires. In 2014, Los Angeles experienced a moderate earthquake that measured 5.1 on the Richter scale and caused \$108 million dollars of damage. Compare the intensities of the two earthquakes.

**Solution.**

To compare the intensities, we first need to convert the magnitudes to intensities using the log formula. Then we will set up a ratio to compare the intensities.

| Convert the magnitudes to intensities. | $R=\log I$ |
| --- | --- |
| $\text{1906 earthquake}$ | $7.8=\log I$ |
| $\text{Convert to exponential form.}$ | $I={10}^{7.8}$ |
| $\text{2014 earthquake}$ | $5.1=\log I$ |
| $\text{Convert to exponential form.}$ | $I={10}^{5.1}$ |
| Form a ratio of the intensities. | $\tfrac{\text{Intensity for }1906}{\text{Intensity for }2014}$ |
| Substitute in the values. | $\tfrac{{10}^{7.8}}{{10}^{5.1}}$ |
| Divide by subtracting the exponents. | ${10}^{2.7}$ |
| Evaluate. | $501$ |
|  | The intensity of the 1906 earthquake was about 501 times the intensity of the 2014 earthquake. |

{{< fillin
  question="In 1906, San Francisco experienced an intense earthquake with a magnitude of $7.8$ on the Richter scale. In 1989, the Loma Prieta earthquake also affected the San Francisco area, and measured $6.9$ on the Richter scale. About how many times the intensity of the 1989 earthquake was the intensity of the 1906 earthquake? Round to the nearest whole number."
  answer="8"
  answerForm="decimal"
  answerDisplay="about 8 times"
  hint="Convert each magnitude to an intensity, form the ratio of the intensities, and divide by subtracting the exponents."
>}}

{{< fillin
  question="In 2014, Chile experienced an intense earthquake with a magnitude of $8.2$ on the Richter scale. In 2014, Los Angeles also experienced an earthquake which measured $5.1$ on the Richter scale. About how many times the intensity of the Los Angeles earthquake was the intensity of the earthquake in Chile? Round to the nearest whole number."
  answer="1259"
  answerForm="decimal"
  answerDisplay="about $1{,}259$ times"
  hint="Convert each magnitude to an intensity, form the ratio of the intensities, and divide by subtracting the exponents."
>}}

## Key terms

**common logarithmic function** — the function $f(x)=\log x$, the
logarithmic function with base $10$, where $x>0$: $y=\log x$ is equivalent to
$x=10^y$. **logarithmic function** — the function $f(x)=\log_a x$, the
logarithmic function with base $a$, where $a>0$, $x>0$, and $a\ne1$:
$y=\log_a x$ is equivalent to $x=a^y$. **natural logarithmic function** — the
function $f(x)=\ln x$, the logarithmic function with base $e$, where $x>0$:
$y=\ln x$ is equivalent to $x=e^y$.

## Practice

### Convert between exponential and logarithmic form

{{< fillin
  question="Convert to logarithmic form: $2^5=32$."
  answer="\log_2 32=5"
  answerForm="logarithmic-form"
  answerDisplay="$\log_2 32=5$"
  hint="In $a^y=x$, the equivalent logarithmic form is $\log_a x=y$."
>}}

{{< fillin
  question="Convert to logarithmic form: $10^{-2}=\tfrac1{100}$."
  answer="\log\frac{1}{100}=-2"
  answerForm="logarithmic-form"
  answerDisplay="$\log\tfrac1{100}=-2$"
  hint="A logarithm written with no base shown is base $10$."
>}}

{{< fillin
  question="Convert to logarithmic form: $17^x=\sqrt[5]{17}$."
  answer="\log_{17}\sqrt[5]{17}=x"
  answerForm="logarithmic-form"
  answerDisplay="$\log_{17}\sqrt[5]{17}=x$"
  hint="Keep the exponential base as the logarithmic base."
>}}

{{< fillin
  question="Convert to logarithmic form: $e^3=x$."
  answer="\ln x=3"
  answerForm="logarithmic-form"
  answerDisplay="$\ln x=3$"
  hint="The logarithmic form of $e^y=x$ is $\ln x=y$."
>}}

{{< fillin
  question="Convert to exponential form: $6=\log_2 64$."
  answer="64=2^6"
  answerForm="exponential-form"
  answerDisplay="$64=2^6$"
  hint="In $\log_a x=y$, the equivalent exponential form is $a^y=x$."
>}}

{{< fillin
  question="Convert to exponential form: $0=\log_7 1$."
  answer="1=7^0"
  answerForm="exponential-form"
  answerDisplay="$1=7^0$"
  hint="The logarithm is the exponent on the base."
>}}

{{< fillin
  question="Convert to exponential form: $3=\log_{10}1{,}000$."
  answer="1{,}000=10^3"
  answerForm="exponential-form"
  answerDisplay="$1{,}000=10^3$"
  hint="In $\log_a x=y$, the equivalent exponential form is $x=a^y$."
>}}

{{< fillin
  question="Convert to exponential form: $x=\log_e 43$."
  answer="43=e^x"
  answerForm="exponential-form"
  answerDisplay="$43=e^x$"
  hint="$\log_e$ is written $\ln$, and its exponential form is base $e$."
>}}

### Evaluate logarithmic functions

{{< fillin
  question="Find $x$: $\log_x64=3$."
  answer="4"
  answerForm="decimal"
  hint="Convert to exponential form, then take the root that undoes the power."
>}}

{{< fillin
  question="Find $x$: $\log_5x=3$."
  answer="125"
  answerForm="decimal"
  hint="Convert to exponential form, then evaluate the power."
>}}

{{< fillin
  question="Find $x$: $\log_3x=-5$."
  answer="\frac{1}{243}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac1{243}$"
  hint="Convert to exponential form, then rewrite the negative power as a fraction."
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
  hint="Ask which power of $5$ gives $1$."
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
  answer="(0,\infty),(-\infty,\infty)" answerForm="decimal"
  answerDisplay="domain $(0,\infty)$, range $(-\infty,\infty)$"
  hint="Rewrite in exponential form, $x=7^y$, and ask which values each variable can take."
  placeholder="domain, range"
>}}

{{< fillin
  question="What is the equation of the vertical asymptote of the graph of $y=\log_{2.5}x$?"
  answer="x=0" answerForm="decimal"
  hint="Ask which inputs a logarithm cannot take, and find the line the graph approaches but never reaches."
>}}

{{< fillin
  question="On the graph of $y=\log_{2.5}x$, what is the $y$-coordinate of the point with $x=2.5$?"
  answer="1"
  answerForm="decimal"
  hint="Ask which power of the base gives $2.5$."
>}}

{{< fillin
  question="On the graph of $y=\log_{\tfrac15}x$, what is the $y$-coordinate of the point with $x=5$?"
  answer="-1"
  answerForm="decimal"
  hint="Convert to exponential form and write $5$ as a power of $\tfrac15$."
>}}

### Solve logarithmic equations

{{< fillin
  question="Solve $\log_a81=2$ for the base $a$."
  answer="9"
  answerForm="decimal"
  hint="Convert to exponential form, use the square root property, and keep only a base a logarithm can have."
>}}

{{< fillin
  question="Solve $\log_a27=3$ for the base $a$."
  answer="3"
  answerForm="decimal"
  hint="Convert to exponential form, then take the cube root."
>}}

{{< fillin
  question="Solve $\log_a24=3$ for the base $a$."
  answer="2\sqrt[3]{3}"
  answerForm="exact-radical"
  answerDisplay="$a=2\sqrt[3]{3}$"
  hint="Convert to exponential form, take the cube root, and simplify the radical."
>}}

{{< fillin
  question="Solve $\ln x=4$. Enter the exact answer."
  answer="e^4"
  answerForm="exact"
  answerDisplay="$x=e^4$"
  hint="Rewrite in exponential form; $\ln$ is the logarithm with base $e$."
>}}

{{< fillin
  question="Solve $\log_2(6x+2)=5$."
  answer="5"
  answerForm="decimal"
  hint="Convert to exponential form, then solve the linear equation."
>}}

{{< fillin
  question="Solve $\log_3(5x-4)=4$."
  answer="17"
  answerForm="decimal"
  hint="Convert to exponential form, then solve the linear equation."
>}}

{{< fillin
  question="Solve $\log_4(3x-2)=2$."
  answer="6"
  answerForm="decimal"
  hint="Convert to exponential form, then solve the linear equation."
>}}

{{< fillin
  question="Solve $\ln e^{2x}=6$."
  answer="3"
  answerForm="decimal"
  hint="Rewrite in exponential form with base $e$; with the same base, the exponents must be equal."
>}}

{{< fillin
  question="Solve $\log(x^2-25)=2$. Enter both solutions, separated by a comma."
  answer="-5\sqrt{5},5\sqrt{5}"
  answerMode="unordered"
  answerForm="simplified-radical"
  answerDisplay="$x=-5\sqrt5$ or $x=5\sqrt5$"
  hint="A log with no base shown is base $10$; convert to exponential form and solve the resulting quadratic."
>}}

{{< fillin
  question="Solve $\log_3(x^2+2)=3$. Enter both solutions, separated by a comma."
  answer="-5,5"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$x=-5$ or $x=5$"
  hint="Convert to exponential form, then solve the quadratic with the square root property."
>}}

### Use logarithmic models in applications

{{< fillin
  question="What is the decibel level of a whisper with intensity $10^{-10}$ watts per square meter?"
  answer="20"
  answerForm="decimal"
  answerDisplay="20 dB"
  hint="Use $D=10\log(\tfrac{I}{10^{-12}})$."
>}}

{{< fillin
  question="The Los Angeles area experiences many earthquakes. In 1994, the Northridge earthquake measured magnitude of $6.7$ on the Richter scale. In 2014, Los Angeles also experienced an earthquake which measured $5.1$ on the Richter scale. About how many times the intensity of the 2014 earthquake was the intensity of the 1994 Northridge earthquake? Round to the nearest whole number."
  answer="40"
  answerForm="decimal"
  answerDisplay="about 40 times"
  hint="Convert each magnitude to an intensity, form the ratio of the intensities, and divide by subtracting the exponents."
>}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 10.3: Evaluate and Graph Logarithmic Functions](https://openstax.org/books/intermediate-algebra-2e/pages/10-3-evaluate-and-graph-logarithmic-functions) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted the worked solutions for the web, writing each check on one line; redrew the graphs of Examples 10.22 and 10.23 and the figure of exponential and logarithmic graphs reflected across $y=x$ as accessible graphs, the last drawn for the bases $3$ and $\tfrac13$; omitted the Be Prepared quiz, media links, Key Concepts summary (which repeats the properties tables and formulas), Writing Exercises, and Self Check checklist; converted selected practice problems ("Try Its") into interactive exercises with instant feedback, one exercise per part, posing the four graphing Try Its as multiple-choice descriptions of each graph; adapted selected end-of-section exercises into an interactive Practice block, replacing the graphing exercises with questions about each graph's domain, range, asymptote, and points; and measured sound intensity in watts per square meter, the unit in which $10^{-12}$ is the threshold of hearing (the source says watts per square inch).</small>
