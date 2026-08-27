---
title: Inverse Trigonometric Functions
description: >-
  Defining the inverse sine, cosine, and tangent functions on restricted
  domains, evaluating them exactly at special values and by calculator, and
  finding exact values of compositions such as $\sin(\cos^{-1}x)$ — adapted
  from OpenStax Precalculus 2e, Section 6.3.
source_section: "6.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Understand and use the inverse sine, cosine, and tangent functions
- Find the exact value of expressions involving the inverse sine, cosine, and tangent functions
- Use a calculator to evaluate inverse trigonometric functions
- Find exact values of composite functions with inverse trigonometric functions
{{< /callout >}}

For any right triangle, given one other angle and the length of one side, we can figure out what the other angles and sides are. But what if we are given only two sides of a right triangle? We need a procedure that leads us from a ratio of sides to an angle. This is where the notion of an inverse to a trigonometric function comes into play. In this section, we will explore the inverse trigonometric functions.

## Understanding and Using the Inverse Sine, Cosine, and Tangent Functions

In order to use inverse trigonometric functions, we need to understand that an inverse trigonometric function "undoes" what the original trigonometric function "does," as is the case with any other function and its inverse. In other words, the domain of the inverse function is the range of the original function, and vice versa, as summarized below.

| | Trig functions | Inverse trig functions |
| :--- | :--- | :--- |
| Domain | Measure of an angle | Ratio |
| Range | Ratio | Measure of an angle |

For example, if $f(x)=\sin x$, then we would write $f^{-1}(x)=\sin^{-1}x$. Be aware that $\sin^{-1}x$ does not mean $\tfrac{1}{\sin x}$. The following examples illustrate the inverse trigonometric functions:

- Since $\sin\left(\tfrac{\pi}{6}\right)=\tfrac12$, then $\tfrac{\pi}{6}=\sin^{-1}\left(\tfrac12\right)$.
- Since $\cos(\pi)=-1$, then $\pi=\cos^{-1}(-1)$.
- Since $\tan\left(\tfrac{\pi}{4}\right)=1$, then $\tfrac{\pi}{4}=\tan^{-1}(1)$.

In previous sections, we evaluated the trigonometric functions at various angles, but at times we need to know what angle would yield a specific sine, cosine, or tangent value. For this, we need inverse functions. Recall that, for a one-to-one function, if $f(a)=b$, then an inverse function would satisfy $f^{-1}(b)=a$.

Bear in mind that the sine, cosine, and tangent functions are not one-to-one functions. The graph of each function would fail the horizontal line test. In fact, no periodic function can be one-to-one because each output in its range corresponds to at least one input in every period, and there are an infinite number of periods. As with other functions that are not one-to-one, we will need to restrict the domain of each function to yield a new function that is one-to-one. We choose a domain for each function that includes the number $0$. The figure below shows the graph of the sine function limited to $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$ and the graph of the cosine function limited to $[0,\pi]$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The sine function on its restricted domain from negative pi over 2 to pi over 2, increasing from the point (negative pi over 2, negative 1) to the point (pi over 2, 1).","xMin":-2,"xMax":2,"yMin":-1.4,"yMax":1.4,"grid":false,"tickLabels":"y","yTickStep":1,"unit":95,"curves":[{"kind":"sine","from":-1.5707963267948966,"to":1.5707963267948966,"arrows":false}],"points":[{"at":[-1.5707963267948966,-1]},{"at":[1.5707963267948966,1]}],"texts":[{"at":[-1.5707963267948966,-0.18],"text":"−π/2"},{"at":[1.5707963267948966,-0.18],"text":"π/2"}]}
{{< /apfigure >}}

*(a) Sine function on a restricted domain of $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The cosine function on its restricted domain from 0 to pi, decreasing from the point (0, 1) to the point (pi, negative 1).","xMin":-0.4,"xMax":3.5,"yMin":-1.4,"yMax":1.4,"grid":false,"tickLabels":"y","yTickStep":1,"unit":75,"curves":[{"kind":"cosine","from":0,"to":3.141592653589793,"arrows":false}],"points":[{"at":[0,1]},{"at":[3.141592653589793,-1]}],"texts":[{"at":[1.9,-0.32],"text":"π/2"},{"at":[3.141592653589793,-0.32],"text":"π"}]}
{{< /apfigure >}}

*(b) Cosine function on a restricted domain of $[0,\pi]$.*

The figure below shows the graph of the tangent function limited to $\left(-\tfrac{\pi}{2},\tfrac{\pi}{2}\right)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The tangent function on its restricted domain from negative pi over 2 to pi over 2, an increasing curve passing through the origin and approaching vertical asymptotes at both ends of the domain.","xMin":-1.9,"xMax":1.9,"yMin":-5.3,"yMax":5.3,"grid":false,"tickLabels":"y","yTickStep":1,"unit":90,"curves":[{"kind":"tangent","from":-1.5707963267948966,"to":1.5707963267948966,"arrows":false}],"texts":[{"at":[-1.5707963267948966,-0.5],"text":"−π/2"},{"at":[1.5707963267948966,-0.5],"text":"π/2"}]}
{{< /apfigure >}}

*Tangent function on a restricted domain of $\left(-\tfrac{\pi}{2},\tfrac{\pi}{2}\right)$.*

These conventional choices for the restricted domain are somewhat arbitrary, but they have important, helpful characteristics. Each domain includes the origin and some positive values, and most importantly, each results in a one-to-one function that is invertible. The conventional choice for the restricted domain of the tangent function also has the useful property that it extends from one vertical asymptote to the next instead of being divided into two parts by an asymptote.

On these restricted domains, we can define the inverse trigonometric functions.

- The **inverse sine function** $y=\sin^{-1}x$ means $x=\sin y$. The inverse sine function is sometimes called the **arcsine** function, and notated $\arcsin x$.

  $$y=\sin^{-1}x\ \text{has domain}\ [-1,1]\ \text{and range}\ \left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$$

- The **inverse cosine function** $y=\cos^{-1}x$ means $x=\cos y$. The inverse cosine function is sometimes called the **arccosine** function, and notated $\arccos x$.

  $$y=\cos^{-1}x\ \text{has domain}\ [-1,1]\ \text{and range}\ [0,\pi]$$

- The **inverse tangent function** $y=\tan^{-1}x$ means $x=\tan y$. The inverse tangent function is sometimes called the **arctangent** function, and notated $\arctan x$.

  $$y=\tan^{-1}x\ \text{has domain}\ (-\infty,\infty)\ \text{and range}\ \left(-\tfrac{\pi}{2},\tfrac{\pi}{2}\right)$$

The graphs of the inverse functions are shown below. Notice that the output of each of these inverse functions is a *number*, an angle in radian measure. We see that $\sin^{-1}x$ has domain $[-1,1]$ and range $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$, $\cos^{-1}x$ has domain $[-1,1]$ and range $[0,\pi]$, and $\tan^{-1}x$ has domain of all real numbers and range $\left(-\tfrac{\pi}{2},\tfrac{\pi}{2}\right)$. To find the domain and range of inverse trigonometric functions, switch the domain and range of the original functions. Each graph of the inverse trigonometric function is a reflection of the graph of the original function about the line $y=x$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals sine x, an S-shaped curve through the origin extending with arrows beyond the window, together with the graph of y equals inverse sine of x on its domain from -1 to 1 with closed endpoints at (-1, -pi over 2) and (1, pi over 2), and the dashed line y = x.","xMin":-4.3,"xMax":4.3,"yMin":-1.85,"yMax":1.85,"grid":false,"tickLabels":"x","xTickStep":1,"unit":80,"curves":[{"kind":"sine"},{"kind":"arcsine"}],"lines":[{"slope":1,"intercept":0,"dashed":true,"label":"y = x"}],"points":[{"at":[-1,-1.5707963267948966]},{"at":[1,1.5707963267948966]}],"texts":[{"at":[-0.75,1.5708],"text":"π/2"},{"at":[-0.9,-1.78],"text":"−π/2"},{"at":[3.4,0.9],"text":"y = sin(x)"},{"at":[1.3,1.35],"text":"y = sin⁻¹(x)"}]}
{{< /apfigure >}}

*The sine function and inverse sine (or arcsine) function.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals cosine x, a downward curve extending with arrows beyond the window, together with the graph of y equals inverse cosine of x on its domain from -1 to 1 with closed endpoints at (-1, pi) and (1, 0), and the dashed line y = x.","xMin":-1.5,"xMax":2.3,"yMin":-1.7,"yMax":3.5,"grid":false,"tickLabels":"x","xTickStep":1,"unit":140,"curves":[{"kind":"cosine"},{"kind":"arccosine"}],"lines":[{"slope":1,"intercept":0,"dashed":true,"label":"y = x"}],"points":[{"at":[-1,3.141592653589793]},{"at":[1,0]}],"texts":[{"at":[-0.85,3.141592653589793],"text":"π"},{"at":[-0.85,1.5707963267948966],"text":"π/2"},{"at":[1.55,0.9],"text":"y = cos(x)"},{"at":[-1.4,1.9],"text":"y = cos⁻¹(x)"}]}
{{< /apfigure >}}

*The cosine function and inverse cosine (or arccosine) function.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals tangent x, an increasing curve through the origin approaching vertical asymptotes at x equals pi over 2 and x equals negative pi over 2, together with the graph of y equals inverse tangent of x approaching but never reaching horizontal asymptotes at y equals pi over 2 and y equals negative pi over 2, and the dashed line y = x.","xMin":-4.3,"xMax":4.3,"yMin":-1.85,"yMax":1.85,"grid":false,"tickLabels":"x","xTickStep":1,"unit":80,"curves":[{"kind":"tangent","from":-1.5707963267948966,"to":1.5707963267948966},{"kind":"arctangent"}],"lines":[{"slope":1,"intercept":0,"dashed":true,"label":"y = x"}],"texts":[{"at":[-0.75,1.5708],"text":"π/2"},{"at":[-0.9,-1.78],"text":"−π/2"},{"at":[1.9,1.75],"text":"y = tan(x)"},{"at":[2.5,0.65],"text":"y = tan⁻¹(x)"}]}
{{< /apfigure >}}

*The tangent function and inverse tangent (or arctangent) function.*

{{< callout type="info" >}}
  **Relations for Inverse Sine, Cosine, and Tangent Functions.**

  For angles in the interval $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$, if $\sin y=x$, then $\sin^{-1}x=y$.

  For angles in the interval $[0,\pi]$, if $\cos y=x$, then $\cos^{-1}x=y$.

  For angles in the interval $\left(-\tfrac{\pi}{2},\tfrac{\pi}{2}\right)$, if $\tan y=x$, then $\tan^{-1}x=y$.
{{< /callout >}}

**Example.** Given $\sin\left(\tfrac{5\pi}{12}\right)\approx0.96593$, write a relation involving the inverse sine.

**Solution.** Use the relation for the inverse sine. If $\sin y=x$, then $\sin^{-1}x=y$.

In this problem, $x=0.96593$, and $y=\tfrac{5\pi}{12}$.

$$\sin^{-1}(0.96593)\approx\tfrac{5\pi}{12}$$

{{< fillin
  question="Given $\cos(0.5)\approx0.8776$, write the equivalent relation involving the inverse cosine, as an equation of the form $\cos^{-1}(a)\approx b$."
  answer="\cos^{-1}(0.8776)=0.5"
  answerDisplay="$\cos^{-1}(0.8776)\approx0.5$"
  hint="Swap which side of the equation the number and the angle sit on: if $\cos y=x$ then $\cos^{-1}x=y$."
>}}

## Finding the Exact Value of Expressions Involving the Inverse Sine, Cosine, and Tangent Functions

Now that we can identify inverse functions, we will learn to evaluate them. For most values in their domains, we must evaluate the inverse trigonometric functions by using a calculator, interpolating from a table, or using some other numerical technique. Just as we did with the original trigonometric functions, we can give exact values for the inverse functions when we are using the special angles, specifically $\tfrac{\pi}{6}$ ($30^\circ$), $\tfrac{\pi}{4}$ ($45^\circ$), and $\tfrac{\pi}{3}$ ($60^\circ$), and their reflections into other quadrants.

{{< callout type="info" >}}
  **How to:** given a "special" input value, evaluate an inverse trigonometric function.

  1. Find angle $x$ for which the original trigonometric function has an output equal to the given input for the inverse trigonometric function.
  2. If $x$ is not in the defined range of the inverse, find another angle $y$ that is in the defined range and has the same sine, cosine, or tangent as $x$, depending on which corresponds to the given inverse function.
{{< /callout >}}

**Example.** Evaluate each of the following.

ⓐ $\sin^{-1}\left(\tfrac12\right)$  ⓑ $\sin^{-1}\left(-\tfrac{\sqrt2}{2}\right)$  ⓒ $\cos^{-1}\left(-\tfrac{\sqrt3}{2}\right)$  ⓓ $\tan^{-1}(1)$

**Solution.** ⓐ Evaluating $\sin^{-1}\left(\tfrac12\right)$ is the same as determining the angle that would have a sine value of $\tfrac12$. In other words, what angle $x$ would satisfy $\sin(x)=\tfrac12$? There are multiple values that would satisfy this relationship, such as $\tfrac{\pi}{6}$ and $\tfrac{5\pi}{6}$, but we know we need the angle in the interval $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$, so the answer will be $\sin^{-1}\left(\tfrac12\right)=\tfrac{\pi}{6}$. Remember that the inverse is a function, so for each input, we will get exactly one output.

ⓑ To evaluate $\sin^{-1}\left(-\tfrac{\sqrt2}{2}\right)$, we know that $\tfrac{5\pi}{4}$ and $\tfrac{7\pi}{4}$ both have a sine value of $-\tfrac{\sqrt2}{2}$, but neither is in the interval $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$. For that, we need the negative angle coterminal with $\tfrac{7\pi}{4}$: $\sin^{-1}\left(-\tfrac{\sqrt2}{2}\right)=-\tfrac{\pi}{4}$.

ⓒ To evaluate $\cos^{-1}\left(-\tfrac{\sqrt3}{2}\right)$, we are looking for an angle in the interval $[0,\pi]$ with a cosine value of $-\tfrac{\sqrt3}{2}$. The angle that satisfies this is $\cos^{-1}\left(-\tfrac{\sqrt3}{2}\right)=\tfrac{5\pi}{6}$.

ⓓ Evaluating $\tan^{-1}(1)$, we are looking for an angle in the interval $\left(-\tfrac{\pi}{2},\tfrac{\pi}{2}\right)$ with a tangent value of $1$. The correct angle is $\tan^{-1}(1)=\tfrac{\pi}{4}$.

Evaluate each of the following, as in the example above.

{{< fillin
  question="Evaluate $\sin^{-1}(-1)$."
  answer="-\pi/2"
  answerForm="evaluated-trig radians"
  answerDisplay="$-\tfrac{\pi}{2}$"
  hint="Find the angle in $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$ whose sine is $-1$."
>}}

{{< fillin
  question="Evaluate $\tan^{-1}(-1)$."
  answer="-\pi/4"
  answerForm="evaluated-trig radians"
  answerDisplay="$-\tfrac{\pi}{4}$"
  hint="Find the angle in $\left(-\tfrac{\pi}{2},\tfrac{\pi}{2}\right)$ whose tangent is $-1$."
>}}

Evaluate the remaining two expressions.

{{< fillin
  question="Evaluate $\cos^{-1}(-1)$."
  answer="\pi"
  answerForm="evaluated-trig radians"
  answerDisplay="$\pi$"
  hint="Find the angle in $[0,\pi]$ whose cosine is $-1$."
>}}

{{< fillin
  question="Evaluate $\cos^{-1}\left(\tfrac12\right)$."
  answer="\pi/3"
  answerForm="evaluated-trig radians"
  answerDisplay="$\tfrac{\pi}{3}$"
  hint="Find the angle in $[0,\pi]$ whose cosine is $\tfrac12$."
>}}

## Using a Calculator to Evaluate Inverse Trigonometric Functions

To evaluate inverse trigonometric functions that do not involve the special angles discussed previously, we will need to use a calculator or other type of technology. Most scientific calculators and calculator-emulating applications have specific keys or buttons for the inverse sine, cosine, and tangent functions. These may be labeled, for example, **SIN**$^{-1}$, **ARCSIN**, or **ASIN**.

In the previous chapter, we worked with trigonometry on a right triangle to solve for the sides of a triangle given one side and an additional angle. Using the inverse trigonometric functions, we can solve for the angles of a right triangle given two sides, and we can use a calculator to find the values to several decimal places.

In these examples and exercises, the answers will be interpreted as angles and we will use $\theta$ as the independent variable. The value displayed on the calculator may be in degrees or radians, so be sure to set the mode appropriate to the application.

**Example.** Evaluate $\sin^{-1}(0.97)$ using a calculator.

**Solution.** Because the output of the inverse function is an angle, the calculator will give us a degree value if in degree mode and a radian value if in radian mode. Calculators also use the same domain restrictions on the angles as we are using.

In radian mode, $\sin^{-1}(0.97)\approx1.3252$. In degree mode, $\sin^{-1}(0.97)\approx75.93^\circ$. Note that in calculus and beyond we will use radians in almost all cases.

{{< fillin
  question="Evaluate $\cos^{-1}(-0.4)$ using a calculator. Give the radian measure, rounded to four decimal places."
  answer="1.9823"
  answerForm="decimal"
  answerDisplay="$1.9823$"
  hint="Set your calculator to radian mode and use the inverse cosine key."
>}}

{{< callout type="info" >}}
  **How to:** given two sides of a right triangle like the one shown below, find an angle.

  1. If one given side is the hypotenuse of length $h$ and the side of length $a$ adjacent to the desired angle is given, use the equation $\theta=\cos^{-1}\left(\tfrac{a}{h}\right)$.
  2. If one given side is the hypotenuse of length $h$ and the side of length $p$ opposite to the desired angle is given, use the equation $\theta=\sin^{-1}\left(\tfrac{p}{h}\right)$.
  3. If the two legs (the sides adjacent to the right angle) are given, then use the equation $\theta=\tan^{-1}\left(\tfrac{p}{a}\right)$.
{{< /callout >}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with angle theta at the bottom-left vertex, the right angle at the bottom-right vertex, hypotenuse h from theta to the top vertex, side a adjacent to theta along the base, and side p opposite theta along the right vertical leg.","unit":80,"polygons":[{"points":[[0,0],[3,0],[3,1.7]],"edgeLabels":["a","p","h"],"vertexLabels":["θ",null,null],"rightAngles":[1]}]}
{{< /apfigure >}}

**Example.** Solve the triangle below for the angle $\theta$.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with angle theta at the bottom-left vertex, the right angle at the bottom-right vertex, hypotenuse 12 from theta to the top vertex, and the base 9 adjacent to theta.","unit":38,"polygons":[{"points":[[0,0],[9,0],[9,7.937]],"edgeLabels":["9",null,"12"],"vertexLabels":["θ",null,null],"rightAngles":[1]}]}
{{< /apfigure >}}

**Solution.** Because we know the hypotenuse and the side adjacent to the angle, it makes sense for us to use the cosine function.

$$
\begin{array}{lrcl}
& \cos\theta &=& \tfrac{9}{12} \\[4pt]
\text{Apply definition of the inverse.} & \theta &=& \cos^{-1}\left(\tfrac{9}{12}\right) \\[4pt]
\text{Evaluate.} & \theta &\approx& 0.7227\ \text{or about}\ 41.4096^\circ
\end{array}
$$

{{< fillin
  question="Solve the triangle below for the angle $\theta$. Give the radian measure, rounded to four decimal places."
  answer="0.6435"
  answerForm="decimal"
  answerDisplay="$0.6435$"
  hint="The given sides are the hypotenuse and the side opposite $\theta$, so use the inverse sine."
>}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with angle theta at the bottom-left vertex, the right angle at the bottom-right vertex, hypotenuse 10 from theta to the top vertex, and the right vertical leg 6 opposite theta.","unit":38,"polygons":[{"points":[[0,0],[8,0],[8,6]],"edgeLabels":[null,"6","10"],"vertexLabels":["θ",null,null],"rightAngles":[1]}]}
{{< /apfigure >}}

## Finding Exact Values of Composite Functions with Inverse Trigonometric Functions

There are times when we need to compose a trigonometric function with an inverse trigonometric function. In these cases, we can usually find exact values for the resulting expressions without resorting to a calculator. Even when the input to the composite function is a variable or an expression, we can often find an expression for the output. To help sort out different cases, let $f(x)$ and $g(x)$ be two different trigonometric functions belonging to the set $\{\sin(x),\cos(x),\tan(x)\}$ and let $f^{-1}(y)$ and $g^{-1}(y)$ be their inverses.

### Evaluating Compositions of the Form $f(f^{-1}(y))$ and $f^{-1}(f(x))$

For any trigonometric function, $f(f^{-1}(y))=y$ for all $y$ in the proper domain for the given function. This follows from the definition of the inverse and from the fact that the range of $f$ was defined to be identical to the domain of $f^{-1}$. However, we have to be a little more careful with expressions of the form $f^{-1}(f(x))$.

{{< callout type="info" >}}
  **Compositions of a trigonometric function and its inverse.**

  $$
  \begin{array}{l}
  \sin(\sin^{-1}x)=x\ \text{for}\ -1\le x\le1 \\
  \cos(\cos^{-1}x)=x\ \text{for}\ -1\le x\le1 \\
  \tan(\tan^{-1}x)=x\ \text{for}\ -\infty<x<\infty
  \end{array}
  $$

  $$
  \begin{array}{l}
  \sin^{-1}(\sin x)=x\ \text{only for}\ -\tfrac{\pi}{2}\le x\le\tfrac{\pi}{2} \\
  \cos^{-1}(\cos x)=x\ \text{only for}\ 0\le x\le\pi \\
  \tan^{-1}(\tan x)=x\ \text{only for}\ -\tfrac{\pi}{2}<x<\tfrac{\pi}{2}
  \end{array}
  $$
{{< /callout >}}

{{< callout type="info" >}}
  **Q&A.** *Is it correct that $\sin^{-1}(\sin x)=x$?*

  No. This equation is correct if $x$ belongs to the restricted domain $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$, but sine is defined for all real input values, and for $x$ outside the restricted interval, the equation is not correct because its inverse always returns a value in $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$. The situation is similar for cosine and tangent and their inverses. For example, $\sin^{-1}\left(\sin\left(\tfrac{3\pi}{4}\right)\right)=\tfrac{\pi}{4}$.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given an expression of the form $f^{-1}(f(\theta))$ where $f(\theta)=\sin\theta$, $\cos\theta$, or $\tan\theta$, evaluate.

  1. If $\theta$ is in the restricted domain of $f$, then $f^{-1}(f(\theta))=\theta$.
  2. If not, then find an angle $\phi$ within the restricted domain of $f$ such that $f(\phi)=f(\theta)$. Then $f^{-1}(f(\theta))=\phi$.
{{< /callout >}}

**Example.** Evaluate the following:

ⓐ $\sin^{-1}\left(\sin\left(\tfrac{\pi}{3}\right)\right)$  ⓑ $\sin^{-1}\left(\sin\left(\tfrac{2\pi}{3}\right)\right)$  ⓒ $\cos^{-1}\left(\cos\left(\tfrac{2\pi}{3}\right)\right)$  ⓓ $\cos^{-1}\left(\cos\left(-\tfrac{\pi}{3}\right)\right)$

**Solution.** ⓐ $\tfrac{\pi}{3}$ is in $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$, so $\sin^{-1}\left(\sin\left(\tfrac{\pi}{3}\right)\right)=\tfrac{\pi}{3}$.

ⓑ $\tfrac{2\pi}{3}$ is not in $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$, but $\sin\left(\tfrac{2\pi}{3}\right)=\sin\left(\tfrac{\pi}{3}\right)$, so $\sin^{-1}\left(\sin\left(\tfrac{2\pi}{3}\right)\right)=\tfrac{\pi}{3}$.

ⓒ $\tfrac{2\pi}{3}$ is in $[0,\pi]$, so $\cos^{-1}\left(\cos\left(\tfrac{2\pi}{3}\right)\right)=\tfrac{2\pi}{3}$.

ⓓ $-\tfrac{\pi}{3}$ is not in $[0,\pi]$, but $\cos\left(-\tfrac{\pi}{3}\right)=\cos\left(\tfrac{\pi}{3}\right)$ because cosine is an even function. $\tfrac{\pi}{3}$ is in $[0,\pi]$, so $\cos^{-1}\left(\cos\left(-\tfrac{\pi}{3}\right)\right)=\tfrac{\pi}{3}$.

{{< fillin
  question="Evaluate $\tan^{-1}\left(\tan\left(\tfrac{\pi}{8}\right)\right)$."
  answer="\pi/8"
  answerForm="evaluated-trig radians"
  answerDisplay="$\tfrac{\pi}{8}$"
  hint="$\tfrac{\pi}{8}$ is already in $\left(-\tfrac{\pi}{2},\tfrac{\pi}{2}\right)$, the restricted domain of tangent."
>}}

{{< fillin
  question="Evaluate $\tan^{-1}\left(\tan\left(\tfrac{11\pi}{9}\right)\right)$."
  answer="2\pi/9"
  answerForm="evaluated-trig radians"
  answerDisplay="$\tfrac{2\pi}{9}$"
  hint="$\tfrac{11\pi}{9}$ is outside $\left(-\tfrac{\pi}{2},\tfrac{\pi}{2}\right)$; find the angle in that interval with the same tangent."
>}}

### Evaluating Compositions of the Form $f^{-1}(g(x))$

Now that we can compose a trigonometric function with its inverse, we can explore how to evaluate a composition of a trigonometric function and the inverse of another trigonometric function. We will begin with compositions of the form $f^{-1}(g(x))$. For special values of $x$, we can exactly evaluate the inner function and then the outer, inverse function. However, we can find a more general approach by considering the relation between the two acute angles of a right triangle where one is $\theta$, making the other $\tfrac{\pi}{2}-\theta$. Consider the sine and cosine of each angle of the right triangle below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with angle theta at the bottom-left vertex, the right angle at the bottom-right vertex, angle pi over 2 minus theta at the top vertex, hypotenuse c from theta to the top vertex, base b along the bottom, and vertical leg a opposite theta.","unit":90,"polygons":[{"points":[[0,0],[3,0],[3,1.7]],"edgeLabels":["b","a","c"],"vertexLabels":["θ",null,"π/2 − θ"],"rightAngles":[1]}]}
{{< /apfigure >}}

Because $\cos\theta=\tfrac{b}{c}=\sin\left(\tfrac{\pi}{2}-\theta\right)$, we have $\sin^{-1}(\cos\theta)=\tfrac{\pi}{2}-\theta$ if $0\le\theta\le\pi$. If $\theta$ is not in this domain, then we need to find another angle that has the same cosine as $\theta$ and does belong to the restricted domain; we then subtract this angle from $\tfrac{\pi}{2}$. Similarly, $\sin\theta=\tfrac{a}{c}=\cos\left(\tfrac{\pi}{2}-\theta\right)$, so $\cos^{-1}(\sin\theta)=\tfrac{\pi}{2}-\theta$ if $-\tfrac{\pi}{2}\le\theta\le\tfrac{\pi}{2}$. These are just the function-cofunction relationships presented in another way.

{{< callout type="info" >}}
  **How to:** given functions of the form $\sin^{-1}(\cos x)$ and $\cos^{-1}(\sin x)$, evaluate them.

  1. If $x$ is in $[0,\pi]$, then $\sin^{-1}(\cos x)=\tfrac{\pi}{2}-x$.
  2. If $x$ is not in $[0,\pi]$, then find another angle $y$ in $[0,\pi]$ such that $\cos y=\cos x$. $\sin^{-1}(\cos x)=\tfrac{\pi}{2}-y$
  3. If $x$ is in $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$, then $\cos^{-1}(\sin x)=\tfrac{\pi}{2}-x$.
  4. If $x$ is not in $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$, then find another angle $y$ in $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$ such that $\sin y=\sin x$. $\cos^{-1}(\sin x)=\tfrac{\pi}{2}-y$
{{< /callout >}}

**Example.** Evaluate $\sin^{-1}\left(\cos\left(\tfrac{13\pi}{6}\right)\right)$

ⓐ by direct evaluation. ⓑ by the method described previously.

**Solution.** ⓐ Here, we can directly evaluate the inside of the composition.

$$
\begin{array}{lrcl}
& \cos\left(\tfrac{13\pi}{6}\right) &=& \cos\left(\tfrac{\pi}{6}+2\pi\right) \\[4pt]
& &=& \cos\left(\tfrac{\pi}{6}\right) \\[4pt]
& &=& \tfrac{\sqrt3}{2}
\end{array}
$$

Now, we can evaluate the inverse function as we did earlier.

$$\sin^{-1}\left(\tfrac{\sqrt3}{2}\right)=\tfrac{\pi}{3}$$

ⓑ We have $x=\tfrac{13\pi}{6}$, $y=\tfrac{\pi}{6}$, and

$$
\begin{array}{lrcl}
& \sin^{-1}\left(\cos\left(\tfrac{13\pi}{6}\right)\right) &=& \tfrac{\pi}{2}-\tfrac{\pi}{6} \\[4pt]
& &=& \tfrac{\pi}{3}
\end{array}
$$

{{< fillin
  question="Evaluate $\cos^{-1}\left(\sin\left(-\tfrac{11\pi}{4}\right)\right)$."
  answer="3\pi/4"
  answerForm="evaluated-trig radians"
  answerDisplay="$\tfrac{3\pi}{4}$"
  hint="First reduce $-\tfrac{11\pi}{4}$ to a coterminal angle in $[0,2\pi)$, then apply the cofunction relationship."
>}}

### Evaluating Compositions of the Form $f(g^{-1}(x))$

To evaluate compositions of the form $f(g^{-1}(x))$, where $f$ and $g$ are any two of the functions sine, cosine, or tangent and $x$ is any input in the domain of $g^{-1}$, we have exact formulas, such as $\sin(\cos^{-1}x)=\sqrt{1-x^2}$. When we need to use them, we can derive these formulas by using the trigonometric relations between the angles and sides of a right triangle, together with the use of Pythagoras's relation between the lengths of the sides. We can use the Pythagorean identity, $\sin^2x+\cos^2x=1$, to solve for one when given the other. We can also use the inverse trigonometric functions to find compositions involving algebraic expressions.

**Example.** Find an exact value for $\sin\left(\cos^{-1}\left(\tfrac45\right)\right)$.

**Solution.** Beginning with the inside, we can say there is some angle such that $\theta=\cos^{-1}\left(\tfrac45\right)$, which means $\cos\theta=\tfrac45$, and we are looking for $\sin\theta$. We can use the Pythagorean identity to do this.

$$
\begin{array}{lrcl}
\text{Use our known value for cosine.} & \sin^2\theta+\cos^2\theta &=& 1 \\[4pt]
\text{Solve for sine.} & \sin^2\theta+\left(\tfrac45\right)^2 &=& 1 \\[4pt]
& \sin^2\theta &=& 1-\tfrac{16}{25} \\[4pt]
& \sin\theta &=& \pm\sqrt{\tfrac{9}{25}}=\pm\tfrac35
\end{array}
$$

Since $\theta=\cos^{-1}\left(\tfrac45\right)$ is in quadrant I, $\sin\theta$ must be positive, so the solution is $\tfrac35$. See the figure below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with angle theta at the bottom-left vertex, the right angle at the bottom-right vertex, hypotenuse 5 from theta to the top vertex, base 4 adjacent to theta, and the right vertical leg 3 opposite theta.","unit":60,"polygons":[{"points":[[0,0],[4,0],[4,3]],"edgeLabels":["4","3","5"],"vertexLabels":["θ",null,null],"rightAngles":[1]}]}
{{< /apfigure >}}

We know that the inverse cosine always gives an angle on the interval $[0,\pi]$, so we know that the sine of that angle must be positive; therefore $\sin\left(\cos^{-1}\left(\tfrac45\right)\right)=\sin\theta=\tfrac35$.

{{< fillin
  question="Evaluate $\cos\left(\tan^{-1}\left(\tfrac{5}{12}\right)\right)$."
  answer="12/13"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{12}{13}$"
  hint="Sketch a right triangle with legs $5$ and $12$, then find its hypotenuse."
>}}

**Example.** Find an exact value for $\sin\left(\tan^{-1}\left(\tfrac74\right)\right)$.

**Solution.** While we could use a similar technique as in the previous example, we will demonstrate a different technique here. From the inside, we know there is an angle such that $\tan\theta=\tfrac74$. We can envision this as the opposite and adjacent sides on a right triangle, as shown below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with the right angle at the bottom-left vertex, angle theta at the top vertex, vertical leg 4 from the top vertex down to the right-angle vertex, and the base 7 from the right-angle vertex to the bottom-right vertex, with the hypotenuse joining the top vertex to the bottom-right vertex.","unit":60,"polygons":[{"points":[[0,4],[0,0],[7,0]],"edgeLabels":["4","7",null],"vertexLabels":["θ",null,null],"rightAngles":[1]}]}
{{< /apfigure >}}

Using the Pythagorean Theorem, we can find the hypotenuse of this triangle.

$$4^2+7^2=\text{hypotenuse}^2\qquad\text{hypotenuse}=\sqrt{65}$$

Now, we can evaluate the sine of the angle as the opposite side divided by the hypotenuse.

$$\sin\theta=\tfrac{7}{\sqrt{65}}$$

This gives us our desired composition.

$$
\begin{array}{lrcl}
& \sin\left(\tan^{-1}\left(\tfrac74\right)\right) &=& \sin\theta \\[4pt]
& &=& \tfrac{7}{\sqrt{65}} \\[4pt]
& &=& \tfrac{7\sqrt{65}}{65}
\end{array}
$$

{{< fillin
  question="Evaluate $\cos\left(\sin^{-1}\left(\tfrac79\right)\right)$."
  answer="\frac{4\sqrt2}{9}"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{4\sqrt2}{9}$"
  hint="Sketch a right triangle with hypotenuse $9$ and opposite leg $7$; use the Pythagorean theorem for the third side."
>}}

**Example.** Find a simplified expression for $\cos\left(\sin^{-1}\left(\tfrac{x}{3}\right)\right)$ for $-3\le x\le3$.

**Solution.** We know there is an angle $\theta$ such that $\sin\theta=\tfrac{x}{3}$.

$$
\begin{array}{lrcl}
\text{Use the Pythagorean Theorem.} & \sin^2\theta+\cos^2\theta &=& 1 \\[4pt]
\text{Solve for cosine.} & \left(\tfrac{x}{3}\right)^2+\cos^2\theta &=& 1 \\[4pt]
& \cos^2\theta &=& 1-\tfrac{x^2}{9} \\[4pt]
& \cos\theta &=& \pm\sqrt{\tfrac{9-x^2}{9}}=\pm\tfrac{\sqrt{9-x^2}}{3}
\end{array}
$$

Because we know that the inverse sine must give an angle on the interval $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$, we can deduce that the cosine of that angle must be positive.

$$\cos\left(\sin^{-1}\left(\tfrac{x}{3}\right)\right)=\tfrac{\sqrt{9-x^2}}{3}$$

{{< fillin
  question="Find a simplified expression for $\sin\left(\tan^{-1}(4x)\right)$ for $-\tfrac14\le x\le\tfrac14$."
  answer="\frac{4x}{\sqrt{16x^2+1}}"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{4x}{\sqrt{16x^2+1}}$"
  hint="Sketch a right triangle with opposite leg $4x$ and adjacent leg $1$; find the hypotenuse, then read off the sine."
>}}

## Key concepts

- An inverse function is one that "undoes" another function. The domain of an inverse function is the range of the original function and the range of an inverse function is the domain of the original function.
- Because the trigonometric functions are not one-to-one on their natural domains, inverse trigonometric functions are defined for restricted domains.
- For any trigonometric function $f(x)$, if $x=f^{-1}(y)$, then $f(x)=y$. However, $f(x)=y$ only implies $x=f^{-1}(y)$ if $x$ is in the restricted domain of $f$.
- Special angles are the outputs of inverse trigonometric functions for special input values; for example, $\tfrac{\pi}{4}=\tan^{-1}(1)$ and $\tfrac{\pi}{6}=\sin^{-1}\left(\tfrac12\right)$.
- A calculator will return an angle within the restricted domain of the original trigonometric function.
- Inverse functions allow us to find an angle when given two sides of a right triangle.
- In function composition, if the inside function is an inverse trigonometric function, then there are exact expressions; for example, $\sin\left(\cos^{-1}(x)\right)=\sqrt{1-x^2}$.
- If the inside function is a trigonometric function, then the only possible combinations are $\sin^{-1}(\cos x)=\tfrac{\pi}{2}-x$ if $0\le x\le\pi$ and $\cos^{-1}(\sin x)=\tfrac{\pi}{2}-x$ if $-\tfrac{\pi}{2}\le x\le\tfrac{\pi}{2}$.
- When evaluating the composition of a trigonometric function with an inverse trigonometric function, draw a reference triangle to assist in determining the ratio of sides that represents the output of the trigonometric function.
- When evaluating the composition of a trigonometric function with an inverse trigonometric function, you may use trig identities to assist in determining the ratio of sides.

## Key terms

**arccosine** — another name for the inverse cosine; $\arccos x=\cos^{-1}x$. **arcsine** — another name for the inverse sine; $\arcsin x=\sin^{-1}x$. **arctangent** — another name for the inverse tangent; $\arctan x=\tan^{-1}x$. **inverse cosine function** — the function $\cos^{-1}x$, which is the inverse of the cosine function and the angle that has a cosine equal to a given number. **inverse sine function** — the function $\sin^{-1}x$, which is the inverse of the sine function and the angle that has a sine equal to a given number. **inverse tangent function** — the function $\tan^{-1}x$, which is the inverse of the tangent function and the angle that has a tangent equal to a given number.

## Practice

### Understand and use the inverse sine, cosine, and tangent functions

{{< multiplechoice
  question="Determine whether the following statement is true or false: $\arccos(-x)=\pi-\arccos x$."
  answer="True"
  hint="Compare the reference angles of $\arccos x$ and $\arccos(-x)$; one lies in quadrant I, the other in quadrant II."
>}}
True
False
{{< /multiplechoice >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals inverse cosine of x, decreasing from a closed dot at (-1, pi) to a closed dot at (1, 0).","xMin":-1.6,"xMax":1.6,"yMin":-0.6,"yMax":3.6,"grid":false,"tickLabels":"x","xTickStep":1,"unit":110,"curves":[{"kind":"arccosine"}],"points":[{"at":[-1,3.141592653589793]},{"at":[1,0]}],"texts":[{"at":[-1.3,3.141592653589793],"text":"π"},{"at":[-1.35,1.5707963267948966],"text":"π/2"}]}
{{< /apfigure >}}

{{< fillin
  question="Graph $y=\arccos x$, shown above. State the domain of the function in interval notation."
  answer="[-1,1]"
  answerDisplay="$[-1,1]$"
  hint="An inverse function's domain equals the original function's range; cosine's range is $[-1,1]$."
>}}

{{< fillin
  question="Graph $y=\arccos x$, shown above. State the range of the function in interval notation."
  answer="[0,\pi]"
  answerDisplay="$[0,\pi]$"
  hint="An inverse function's range equals the original function's restricted domain; cosine was restricted to $[0,\pi]$."
>}}

{{< multiplechoice
  question="Which graph shows $y=\tan^{-1}x$?"
  mode="graph"
  answerIndex="2"
  hint="The inverse tangent is bounded between two horizontal asymptotes and increases through the origin — unlike the unrestricted tangent (unbounded) or the inverse sine (confined to $[-1,1]$)."
>}}
{"ariaLabel":"An increasing curve through the origin that shoots up and down toward vertical asymptotes near the edges of the window, unbounded vertically.","xMin":-4,"xMax":4,"yMin":-2,"yMax":2,"grid":false,"tickLabels":true,"unit":80,"curves":[{"kind":"tangent","from":-1.5707963267948966,"to":1.5707963267948966}]}
===OPT===
{"ariaLabel":"A curve confined between x = -1 and x = 1, rising from a closed dot at the bottom-left end of its domain to a closed dot at the top-right end.","xMin":-4,"xMax":4,"yMin":-2,"yMax":2,"grid":false,"tickLabels":true,"unit":80,"curves":[{"kind":"arcsine"}],"points":[{"at":[-1,-1.5707963267948966]},{"at":[1,1.5707963267948966]}]}
===OPT===
{"ariaLabel":"A bounded increasing curve passing through the origin, approaching but never reaching two horizontal lines as x goes to positive and negative infinity.","xMin":-4,"xMax":4,"yMin":-2,"yMax":2,"grid":false,"tickLabels":true,"unit":80,"curves":[{"kind":"arctangent"}]}
===OPT===
{"ariaLabel":"A bounded decreasing curve passing through the origin, approaching but never reaching two horizontal lines as x goes to positive and negative infinity.","xMin":-4,"xMax":4,"yMin":-2,"yMax":2,"grid":false,"tickLabels":true,"unit":80,"curves":[{"kind":"arctangent","a":-1}]}
{{< /multiplechoice >}}

### Find the exact value of expressions involving the inverse sine, cosine, and tangent functions

{{< fillin
  question="Find the exact value: $\sin^{-1}\left(-\tfrac12\right)$."
  answer="-\pi/6"
  answerForm="evaluated-trig radians"
  answerDisplay="$-\tfrac{\pi}{6}$"
  hint="Find the angle in $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$ whose sine is $-\tfrac12$."
>}}

{{< fillin
  question="Find the exact value: $\cos^{-1}\left(-\tfrac{\sqrt2}{2}\right)$."
  answer="3\pi/4"
  answerForm="evaluated-trig radians"
  answerDisplay="$\tfrac{3\pi}{4}$"
  hint="Find the angle in $[0,\pi]$ whose cosine is $-\tfrac{\sqrt2}{2}$; it is the supplement of $\tfrac{\pi}{4}$."
>}}

{{< fillin
  question="Find the exact value: $\tan^{-1}\left(-\sqrt3\right)$."
  answer="-\pi/3"
  answerForm="evaluated-trig radians"
  answerDisplay="$-\tfrac{\pi}{3}$"
  hint="Find the angle in $\left(-\tfrac{\pi}{2},\tfrac{\pi}{2}\right)$ whose tangent is $-\sqrt3$."
>}}

### Use a calculator to evaluate inverse trigonometric functions

{{< fillin
  question="Use a calculator to evaluate $\cos^{-1}(-0.4)$. Round to the nearest hundredth."
  answer="1.98"
  answerForm="decimal"
  answerDisplay="$1.98$"
  hint="Use your calculator's inverse cosine key in radian mode, then round."
>}}

{{< fillin
  question="Use a calculator to evaluate $\arccos\left(\tfrac35\right)$. Round to the nearest hundredth."
  answer="0.93"
  answerForm="decimal"
  answerDisplay="$0.93$"
  hint="Use your calculator's inverse cosine key in radian mode, then round."
>}}

{{< fillin
  question="Find the angle $\theta$ in the right triangle below. Round to the nearest hundredth."
  answer="0.56"
  answerForm="decimal"
  answerDisplay="$0.56$"
  hint="The two given sides are adjacent and opposite $\theta$, so use the inverse tangent."
>}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with angle theta at the bottom-left vertex, the right angle at the bottom-right vertex, base 19 adjacent to theta, and the right vertical leg 12 opposite theta.","unit":24,"polygons":[{"points":[[0,0],[19,0],[19,12]],"edgeLabels":["19","12",null],"vertexLabels":["θ",null,null],"rightAngles":[1]}]}
{{< /apfigure >}}

### Find exact values of composite functions with inverse trigonometric functions

{{< fillin
  question="Find the exact value: $\sin\left(\cos^{-1}\left(\tfrac35\right)\right)$."
  answer="4/5"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac45$"
  hint="Sketch a right triangle with $\cos\theta=\tfrac35$; then read $\sin\theta$ from its sides."
>}}

{{< fillin
  question="Find the exact value: $\cos\left(\tan^{-1}\left(\tfrac{12}{5}\right)\right)$."
  answer="5/13"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{5}{13}$"
  hint="Sketch a right triangle with $\tan\theta=\tfrac{12}{5}$; find the hypotenuse, then read $\cos\theta$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 6.3: Inverse Trigonometric Functions](https://openstax.org/books/precalculus-2e/pages/6-3-inverse-trigonometric-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the decorative "Trig Functions / Inverse Trig Functions" domain-range chart image (Figure 1), recreated as a two-by-two Markdown table with identical content; recreated all fifteen instructional figures as accessible spec-first SVGs built from exact coordinates — the restricted-domain sine and cosine panels and the restricted-domain tangent graph; the three function-and-inverse overlay graphs (sine/arcsine, cosine/arccosine, tangent/arctangent, each with the dashed line $y=x$), simplified to label only the endpoints of each inverse curve's range ($\pm\tfrac{\pi}{2}$ or $\pi$) rather than every eighth-multiple of $\pi$ the source prints, since the shape and endpoints are the instructional content; the generic right-triangle diagram for the calculator How To; the two worked-example/Try-It right triangles solved for $\theta$; the cofunction-relationship triangle; and the three composition right triangles. Converted the two-column "Trig Functions/Inverse Trig Functions" relations into the book's callout convention, and the Q&A into the book's Q&A callout convention. Every retained Try It became a real `fillin` component; the four-part Try It after Example 2 was split into two consecutive pairs of fillins (separated by a sentence of connecting prose) to respect the section's 2–3 consecutive-question limit, each carrying `answerForm="evaluated-trig"` so retyping the printed subject cannot pass. Every calculator-rounding Try It and exercise states the number of decimal places to make it gradable as a `decimal`. Omitted the "Access these online resources" media link. Adapted nine selected end-of-section exercises — one true/false identity, a domain-and-range graphing item (adapted to a static figure plus two fill-ins, with a graph-recognition multiple choice added for the inverse tangent alongside it), three exact-value evaluations, three calculator/right-triangle evaluations, and two exact-value compositions — into eleven interactive components in a closing Practice block, one group per objective. This module's own "Key Concepts" and its module-scoped `<glossary>` (six terms: arccosine, arcsine, arctangent, and the three inverse function definitions) are transcribed as this section's `## Key concepts` and `## Key terms`; the printed textbook interleaves them with the rest of chapter 6's summary terms on its own consolidated Chapter Review pages (PDF pp. 678–679) rather than printing them immediately after this section, a print-layout choice that does not change which content belongs to module m49390.</small>
