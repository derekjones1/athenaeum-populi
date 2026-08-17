---
title: The Other Trigonometric Functions
description: >-
  Defining tangent, secant, cosecant, and cotangent from a point on the unit
  circle, finding their exact values at $\tfrac{\pi}{3}$, $\tfrac{\pi}{4}$,
  and $\tfrac{\pi}{6}$ and via reference angles elsewhere, using even and odd
  symmetry and the fundamental identities, and evaluating with a calculator —
  adapted from OpenStax Precalculus 2e, Section 5.3.
source_section: "5.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find exact values of the trigonometric functions secant, cosecant, tangent, and cotangent of $\tfrac{\pi}{3}$, $\tfrac{\pi}{4}$, and $\tfrac{\pi}{6}$
- Use reference angles to evaluate the trigonometric functions secant, cosecant, tangent, and cotangent
- Use properties of even and odd trigonometric functions
- Recognize and use fundamental identities
- Evaluate trigonometric functions with a calculator
{{< /callout >}}

A wheelchair ramp that meets the standards of the Americans with Disabilities Act must make an angle with the ground whose tangent is $\tfrac{1}{12}$ or less, regardless of its length. A tangent represents a ratio, so this means that for every 1 inch of rise, the ramp must have 12 inches of run. Trigonometric functions allow us to specify the shapes and proportions of objects independent of exact dimensions. We have already defined the sine and cosine functions of an angle. Though sine and cosine are the trigonometric functions most often used, there are four others. Together they make up the set of six trigonometric functions. In this section, we will investigate the remaining functions.

## Finding Exact Values of the Trigonometric Functions Secant, Cosecant, Tangent, and Cotangent

To define the remaining functions, we will once again draw a unit circle with a point $(x,y)$ corresponding to an angle of $t$, as shown below. As with the sine and cosine, we can use the $(x,y)$ coordinates to find the other functions.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A point (x, y) on the unit circle in the first quadrant, with a radius of length 1 and the terminal side of angle t drawn from the origin, and a quarter-circle arc from the positive x-axis to the positive y-axis.","xMin":-0.3,"xMax":1.3,"yMin":-0.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":220,"circles":[{"at":[0,0],"r":1,"from":0,"to":90},{"at":[0,0],"r":0.3,"from":0,"to":40}],"segments":[{"from":[0,0],"to":[0.4226,0.9063]}],"points":[{"at":[0.4226,0.9063],"label":"(x, y)"}],"texts":[{"at":[0.28,0.55],"text":"1"},{"at":[0.17,0.09],"text":"t"}]}
{{< /apfigure >}}

The first function we will define is the tangent. The **tangent** of an angle is the ratio of the $y$-value to the $x$-value of the corresponding point on the unit circle. In the figure above, the tangent of angle $t$ is equal to $\tfrac{y}{x}$, $x\ne0$. Because the $y$-value is equal to the sine of $t$, and the $x$-value is equal to the cosine of $t$, the tangent of angle $t$ can also be defined as $\tfrac{\sin t}{\cos t}$, $\cos t\ne0$. The tangent function is abbreviated as $\tan$. The remaining three functions can all be expressed as reciprocals of functions we have already defined.

- The **secant** function is the reciprocal of the cosine function. In the figure above, the secant of angle $t$ is equal to $\tfrac{1}{\cos t}=\tfrac{1}{x}$, $x\ne0$. The secant function is abbreviated as $\sec$.
- The **cotangent** function is the reciprocal of the tangent function. In the figure above, the cotangent of angle $t$ is equal to $\tfrac{\cos t}{\sin t}=\tfrac{x}{y}$, $y\ne0$. The cotangent function is abbreviated as $\cot$.
- The **cosecant** function is the reciprocal of the sine function. In the figure above, the cosecant of angle $t$ is equal to $\tfrac{1}{\sin t}=\tfrac{1}{y}$, $y\ne0$. The cosecant function is abbreviated as $\csc$.

{{< callout type="info" >}}
  **Tangent, Secant, Cosecant, and Cotangent Functions.** If $t$ is a real number and $(x,y)$ is a point where the terminal side of an angle of $t$ radians intercepts the unit circle, then

  $$
  \begin{array}{l}
  \tan t=\tfrac{y}{x},\ x\ne0 \\
  \sec t=\tfrac{1}{x},\ x\ne0 \\
  \csc t=\tfrac{1}{y},\ y\ne0 \\
  \cot t=\tfrac{x}{y},\ y\ne0
  \end{array}
  $$
{{< /callout >}}

**Example.** The point $\left(-\tfrac{\sqrt3}{2},\tfrac12\right)$ is on the unit circle, as shown below. Find $\sin t$, $\cos t$, $\tan t$, $\sec t$, $\csc t$, and $\cot t$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upper half of the unit circle, with the terminal side of angle t meeting it at the point (-square root of 3 over 2, 1/2) in the second quadrant, and tick marks at -1 and 1 on the x-axis and 1/2 on the y-axis.","xMin":-1.3,"xMax":1.3,"yMin":-0.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":190,"circles":[{"at":[0,0],"r":1,"from":0,"to":180},{"at":[0,0],"r":0.3,"from":0,"to":150}],"segments":[{"from":[0,0],"to":[-0.866,0.5]}],"points":[{"at":[-0.866,0.5],"label":"(-√3/2, 1/2)"}],"texts":[{"at":[1,-0.13],"text":"1"},{"at":[-1,-0.13],"text":"-1"},{"at":[-0.13,1],"text":"1"},{"at":[-0.13,0.5],"text":"1/2"},{"at":[-0.55,0.16],"text":"t"}]}
{{< /apfigure >}}

**Solution.** Because we know the $(x,y)$ coordinates of the point on the unit circle indicated by angle $t$, we can use those coordinates to find the six functions:

$$
\begin{array}{lrcl}
& \sin t=y &=& \tfrac12 \\[4pt]
& \cos t=x &=& -\tfrac{\sqrt3}{2} \\[4pt]
& \tan t=\tfrac{y}{x} &=& \tfrac{\tfrac12}{-\tfrac{\sqrt3}{2}}=\tfrac12\left(-\tfrac{2}{\sqrt3}\right)=-\tfrac{1}{\sqrt3}=-\tfrac{\sqrt3}{3} \\[4pt]
& \sec t=\tfrac{1}{x} &=& \tfrac{1}{-\tfrac{\sqrt3}{2}}=-\tfrac{2}{\sqrt3}=-\tfrac{2\sqrt3}{3} \\[4pt]
& \csc t=\tfrac{1}{y} &=& \tfrac{1}{\tfrac12}=2 \\[4pt]
& \cot t=\tfrac{x}{y} &=& \tfrac{-\tfrac{\sqrt3}{2}}{\tfrac12}=-\tfrac{\sqrt3}{2}\left(\tfrac21\right)=-\sqrt3
\end{array}
$$

{{< fillin
  question="The point $\left(\tfrac{\sqrt2}{2},-\tfrac{\sqrt2}{2}\right)$ is on the unit circle, as shown below. Find $\tan t$."
  answer="-1"
  answerForm="evaluated-trig"
  answerDisplay="$-1$"
  hint="Tangent is $\tfrac{y}{x}$ for the given point."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle, with the terminal side of angle t meeting it at the point (square root of 2 over 2, negative square root of 2 over 2) in the fourth quadrant, and tick marks at -1 and 1 on the x-axis, 1 on the y-axis, square root of 2 over 2 on the positive x-axis, and negative square root of 2 over 2 on the negative y-axis.","xMin":-1.3,"xMax":1.3,"yMin":-1.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":190,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.3,"from":315,"to":360}],"segments":[{"from":[0,0],"to":[0.7071,-0.7071]}],"points":[{"at":[0.7071,-0.7071],"label":"(√2/2, -√2/2)"}],"texts":[{"at":[1,0.14],"text":"1"},{"at":[-1,0.13],"text":"-1","anchor":"end"},{"at":[-0.14,1],"text":"1"},{"at":[0.7071,0.14],"text":"√2/2"},{"at":[-0.16,-0.7071],"text":"-√2/2","anchor":"end"},{"at":[0.5,-0.14],"text":"t"}]}
{{< /apfigure >}}

{{< fillin
  question="Using that same point, find $\sec t$."
  answer="\sqrt2"
  answerForm="evaluated-trig"
  answerDisplay="$\sqrt2$"
  hint="Secant is the reciprocal of the $x$-coordinate."
>}}

**Example.** Find $\sin t$, $\cos t$, $\tan t$, $\sec t$, $\csc t$, and $\cot t$ when $t=\tfrac{\pi}{6}$.

**Solution.** We have previously used the properties of equilateral triangles to demonstrate that $\sin\tfrac{\pi}{6}=\tfrac12$ and $\cos\tfrac{\pi}{6}=\tfrac{\sqrt3}{2}$. We can use these values and the definitions of tangent, secant, cosecant, and cotangent as functions of sine and cosine to find the remaining function values.

$$
\begin{array}{lrcl}
& \tan\tfrac{\pi}{6}=\tfrac{\sin\tfrac{\pi}{6}}{\cos\tfrac{\pi}{6}} &=& \tfrac{\tfrac12}{\tfrac{\sqrt3}{2}}=\tfrac{1}{\sqrt3}=\tfrac{\sqrt3}{3} \\[4pt]
& \sec\tfrac{\pi}{6}=\tfrac{1}{\cos\tfrac{\pi}{6}} &=& \tfrac{1}{\tfrac{\sqrt3}{2}}=\tfrac{2}{\sqrt3}=\tfrac{2\sqrt3}{3} \\[4pt]
& \csc\tfrac{\pi}{6}=\tfrac{1}{\sin\tfrac{\pi}{6}} &=& \tfrac{1}{\tfrac12}=2 \\[4pt]
& \cot\tfrac{\pi}{6}=\tfrac{\cos\tfrac{\pi}{6}}{\sin\tfrac{\pi}{6}} &=& \tfrac{\tfrac{\sqrt3}{2}}{\tfrac12}=\sqrt3
\end{array}
$$

{{< fillin
  question="Find $\sec\tfrac{\pi}{3}$."
  answer="2"
  answerForm="evaluated-trig"
  answerDisplay="$2$"
  hint="Secant is the reciprocal of cosine; use the known value $\cos\tfrac{\pi}{3}=\tfrac12$."
>}}

{{< fillin
  question="Find $\csc\tfrac{\pi}{3}$."
  answer="\frac{2\sqrt3}{3}"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{2\sqrt3}{3}$"
  hint="Cosecant is the reciprocal of sine; use the known value $\sin\tfrac{\pi}{3}=\tfrac{\sqrt3}{2}$."
>}}

Because we know the sine and cosine values for the common first-quadrant angles, we can find the other function values for those angles as well by setting $x$ equal to the cosine and $y$ equal to the sine and then using the definitions of tangent, secant, cosecant, and cotangent. The results are shown in the table below.

| Angle | $0$ | $\tfrac{\pi}{6}$, or $30^\circ$ | $\tfrac{\pi}{4}$, or $45^\circ$ | $\tfrac{\pi}{3}$, or $60^\circ$ | $\tfrac{\pi}{2}$, or $90^\circ$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Cosine | $1$ | $\tfrac{\sqrt3}{2}$ | $\tfrac{\sqrt2}{2}$ | $\tfrac12$ | $0$ |
| Sine | $0$ | $\tfrac12$ | $\tfrac{\sqrt2}{2}$ | $\tfrac{\sqrt3}{2}$ | $1$ |
| Tangent | $0$ | $\tfrac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | Undefined |
| Secant | $1$ | $\tfrac{2\sqrt3}{3}$ | $\sqrt2$ | $2$ | Undefined |
| Cosecant | Undefined | $2$ | $\sqrt2$ | $\tfrac{2\sqrt3}{3}$ | $1$ |
| Cotangent | Undefined | $\sqrt3$ | $1$ | $\tfrac{\sqrt3}{3}$ | $0$ |

## Using Reference Angles to Evaluate Tangent, Secant, Cosecant, and Cotangent

We can evaluate trigonometric functions of angles outside the first quadrant using reference angles as we have already done with the sine and cosine functions. The procedure is the same: find the **reference angle** formed by the terminal side of the given angle with the horizontal axis. The trigonometric function values for the original angle will be the same as those for the reference angle, except for the positive or negative sign, which is determined by $x$- and $y$-values in the original quadrant. The figure below shows which functions are positive in which quadrant.

To help us remember which of the six trigonometric functions are positive in each quadrant, we can use the mnemonic phrase "A Smart Trig Class." Each of the four words in the phrase corresponds to one of the four quadrants, starting with quadrant I and rotating counterclockwise. In quadrant I, which is "**A**," **a**ll of the six trigonometric functions are positive. In quadrant II, "**S**mart," only **s**ine and its reciprocal function, cosecant, are positive. In quadrant III, "**T**rig," only **t**angent and its reciprocal function, cotangent, are positive. Finally, in quadrant IV, "**C**lass," only **c**osine and its reciprocal function, secant, are positive.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle divided into quadrants I through IV, with quadrant I labeled sin t, cos t, tan t, sec t, csc t, cot t (all six positive); quadrant II labeled sin t, csc t; quadrant III labeled tan t, cot t; and quadrant IV labeled cos t, sec t.","xMin":-2.2,"xMax":2.2,"yMin":-1.9,"yMax":1.9,"grid":false,"tickLabels":false,"unit":95,"circles":[{"at":[0,0],"r":1}],"texts":[{"at":[0.55,1.65],"text":"I"},{"at":[0.85,1.65],"text":"sin t"},{"at":[0.85,1.48],"text":"cos t"},{"at":[0.85,1.31],"text":"tan t"},{"at":[0.85,1.14],"text":"sec t"},{"at":[0.85,0.97],"text":"csc t"},{"at":[0.85,0.8],"text":"cot t"},{"at":[-0.75,1.65],"text":"II"},{"at":[-1.15,1.55],"text":"sin t"},{"at":[-1.15,1.38],"text":"csc t"},{"at":[-0.75,-1.5],"text":"III"},{"at":[-1.15,-1.4],"text":"tan t"},{"at":[-1.15,-1.57],"text":"cot t"},{"at":[0.55,-1.5],"text":"IV"},{"at":[0.85,-1.4],"text":"cos t"},{"at":[0.85,-1.57],"text":"sec t"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **How to:** given an angle not in the first quadrant, use reference angles to find all six trigonometric functions.

  1. Measure the angle formed by the terminal side of the given angle and the horizontal axis. This is the reference angle.
  2. Evaluate the function at the reference angle.
  3. Observe the quadrant where the terminal side of the original angle is located. Based on the quadrant, determine whether the output is positive or negative.
{{< /callout >}}

**Example.** Use reference angles to find all six trigonometric functions of $-\tfrac{5\pi}{6}$.

**Solution.** The angle between this angle's terminal side and the $x$-axis is $\tfrac{\pi}{6}$, so that is the reference angle. Since $-\tfrac{5\pi}{6}$ is in the third quadrant, where both $x$ and $y$ are negative, cosine, sine, secant, and cosecant will be negative, while tangent and cotangent will be positive.

$$
\begin{array}{lrcl}
& \cos\left(-\tfrac{5\pi}{6}\right) &=& -\tfrac{\sqrt3}{2},\quad \sin\left(-\tfrac{5\pi}{6}\right)=-\tfrac12,\quad \tan\left(-\tfrac{5\pi}{6}\right)=\tfrac{\sqrt3}{3} \\[4pt]
& \sec\left(-\tfrac{5\pi}{6}\right) &=& -\tfrac{2\sqrt3}{3},\quad \csc\left(-\tfrac{5\pi}{6}\right)=-2,\quad \cot\left(-\tfrac{5\pi}{6}\right)=\sqrt3
\end{array}
$$

Use reference angles to find all six trigonometric functions of $-\tfrac{7\pi}{4}$:

{{< fillin
  question="Find $\tan\left(-\tfrac{7\pi}{4}\right)$."
  answer="1"
  answerForm="evaluated-trig"
  answerDisplay="$1$"
  hint="$-\tfrac{7\pi}{4}$ is coterminal with $\tfrac{\pi}{4}$, in the first quadrant, where every function is positive."
>}}

{{< fillin
  question="Find $\sec\left(-\tfrac{7\pi}{4}\right)$."
  answer="\sqrt2"
  answerForm="evaluated-trig"
  answerDisplay="$\sqrt2$"
  hint="$-\tfrac{7\pi}{4}$ is coterminal with $\tfrac{\pi}{4}$, in the first quadrant, where every function is positive."
>}}

{{< fillin
  question="Find $\cot\left(-\tfrac{7\pi}{4}\right)$."
  answer="1"
  answerForm="evaluated-trig"
  answerDisplay="$1$"
  hint="$-\tfrac{7\pi}{4}$ is coterminal with $\tfrac{\pi}{4}$, in the first quadrant, where every function is positive."
>}}

## Using Even and Odd Trigonometric Functions

To be able to use our six trigonometric functions freely with both positive and negative angle inputs, we should examine how each function treats a negative input. As it turns out, there is an important difference among the functions in this regard.

Consider the function $f(x)=x^2$, shown below. The graph of the function is symmetrical about the $y$-axis. All along the curve, any two points with opposite $x$-values have the same function value. This matches the result of calculation: $(4)^2=(-4)^2$, $(-5)^2=(5)^2$, and so on. So $f(x)=x^2$ is an **even function**, a function such that two inputs that are opposites have the same output. That means $f(-x)=f(x)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = x squared, an upward-opening parabola symmetric about the y-axis, with the labeled points (-2, 4) and (2, 4). f(x) = x squared is an even function.","xMin":-7,"xMax":7,"yMin":-4,"yMax":28,"xUnit":30,"yUnit":9,"margin":40,"grid":true,"tickLabels":true,"xTickStep":1,"yTickStep":4,"quadratics":[{"a":1,"b":0,"c":0}],"points":[{"at":[-2,4],"label":"(-2, 4)"},{"at":[2,4],"label":"(2, 4)"}]}
{{< /apfigure >}}

Now consider the function $f(x)=x^3$, shown below. The graph is not symmetrical about the $y$-axis. All along the graph, any two points with opposite $x$-values also have opposite $y$-values. So $f(x)=x^3$ is an **odd function**, one such that two inputs that are opposites have outputs that are also opposites. That means $f(-x)=-f(x)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = x cubed, an S-shaped curve symmetric about the origin, with the labeled points (-1, -1) and (1, 1). f(x) = x cubed is an odd function.","xMin":-5,"xMax":5,"yMin":-10,"yMax":10,"xUnit":22,"yUnit":11,"margin":40,"grid":true,"tickLabels":true,"xTickStep":1,"yTickStep":2,"cubics":[{"a":1,"b":0,"c":0,"d":0}],"points":[{"at":[-1,-1],"label":"(-1, -1)"},{"at":[1,1],"label":"(1, 1)"}]}
{{< /apfigure >}}

We can test whether a trigonometric function is even or odd by drawing a unit circle with a positive and a negative angle, as shown below. The sine of the positive angle is $y$. The sine of the negative angle is $-y$. The **sine function**, then, is an odd function. We can test each of the six trigonometric functions in this fashion. The results are shown in the table below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle with angle t in standard position meeting it at the point (x, y) in the first quadrant, and angle -t meeting it at the point (x, -y) in the fourth quadrant, both terminal sides drawn from the origin.","xMin":-1.3,"xMax":1.5,"yMin":-1.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":170,"circles":[{"at":[0,0],"r":1}],"segments":[{"from":[0,0],"to":[0.819,0.574]},{"from":[0,0],"to":[0.819,-0.574]}],"points":[{"at":[0.819,0.574],"label":"(x, y)"},{"at":[0.819,-0.574],"label":"(x, -y)"}],"texts":[{"at":[0.35,0.14],"text":"t"},{"at":[0.35,-0.17],"text":"-t"}]}
{{< /apfigure >}}

| $\begin{aligned}\sin t&=y\\\sin(-t)&=-y\\\sin t&\ne\sin(-t)\end{aligned}$ | $\begin{aligned}\cos t&=x\\\cos(-t)&=x\\\cos t&=\cos(-t)\end{aligned}$ | $\begin{aligned}\tan t&=\tfrac{y}{x}\\\tan(-t)&=-\tfrac{y}{x}\\\tan t&\ne\tan(-t)\end{aligned}$ |
| :--- | :--- | :--- |
| $\begin{aligned}\sec t&=\tfrac{1}{x}\\\sec(-t)&=\tfrac{1}{x}\\\sec t&=\sec(-t)\end{aligned}$ | $\begin{aligned}\csc t&=\tfrac{1}{y}\\\csc(-t)&=\tfrac{1}{-y}\\\csc t&\ne\csc(-t)\end{aligned}$ | $\begin{aligned}\cot t&=\tfrac{x}{y}\\\cot(-t)&=\tfrac{x}{-y}\\\cot t&\ne\cot(-t)\end{aligned}$ |

{{< callout type="info" >}}
  **Even and Odd Trigonometric Functions.** An **even function** is one in which $f(-x)=f(x)$.

  An **odd function** is one in which $f(-x)=-f(x)$.

  Cosine and secant are even:

  $$
  \begin{array}{l}
  \cos(-t)=\cos t \\
  \sec(-t)=\sec t
  \end{array}
  $$

  Sine, tangent, cosecant, and cotangent are odd:

  $$
  \begin{array}{l}
  \sin(-t)=-\sin t \\
  \tan(-t)=-\tan t \\
  \csc(-t)=-\csc t \\
  \cot(-t)=-\cot t
  \end{array}
  $$
{{< /callout >}}

**Example.** If the secant of angle $t$ is 2, what is the secant of $-t$?

**Solution.** Secant is an even function. The secant of an angle is the same as the secant of its opposite. So if the secant of angle $t$ is 2, the secant of $-t$ is also 2.

{{< fillin
  question="If the cotangent of angle $t$ is $\sqrt3$, what is the cotangent of $-t$?"
  answer="-\sqrt3"
  answerForm="exact-radical"
  answerDisplay="$-\sqrt3$"
  hint="Cotangent is an odd function: $\cot(-t)=-\cot t$."
>}}

## Recognizing and Using Fundamental Identities

We have explored a number of properties of trigonometric functions. Now, we can take the relationships a step further, and derive some fundamental identities. Identities are statements that are true for all values of the input on which they are defined. Usually, identities can be derived from definitions and relationships we already know. For example, the Pythagorean Identity we learned earlier was derived from the Pythagorean Theorem and the definitions of sine and cosine.

{{< callout type="info" >}}
  **Fundamental Identities.** We can derive some useful identities from the six trigonometric functions. The other four trigonometric functions can be related back to the sine and cosine functions using these basic relationships:

  $$\tan t=\tfrac{\sin t}{\cos t}\qquad \sec t=\tfrac{1}{\cos t}$$

  $$\csc t=\tfrac{1}{\sin t}\qquad \cot t=\tfrac{1}{\tan t}=\tfrac{\cos t}{\sin t}$$
{{< /callout >}}

**Example.** ⓐ Given $\sin(45^\circ)=\tfrac{\sqrt2}{2}$, $\cos(45^\circ)=\tfrac{\sqrt2}{2}$, evaluate $\tan(45^\circ)$. ⓑ Given $\sin\left(\tfrac{5\pi}{6}\right)=\tfrac12$, $\cos\left(\tfrac{5\pi}{6}\right)=-\tfrac{\sqrt3}{2}$, evaluate $\sec\left(\tfrac{5\pi}{6}\right)$.

**Solution.** Because we know the sine and cosine values for these angles, we can use identities to evaluate the other functions.

ⓐ

$$
\begin{array}{lrcl}
& \tan(45^\circ)=\tfrac{\sin(45^\circ)}{\cos(45^\circ)} &=& \tfrac{\tfrac{\sqrt2}{2}}{\tfrac{\sqrt2}{2}} \\[4pt]
& &=& 1
\end{array}
$$

ⓑ

$$
\begin{array}{lrcl}
& \sec\left(\tfrac{5\pi}{6}\right)=\tfrac{1}{\cos\left(\tfrac{5\pi}{6}\right)} &=& \tfrac{1}{-\tfrac{\sqrt3}{2}} \\[4pt]
& &=& -\tfrac{2}{\sqrt3}=-\tfrac{2\sqrt3}{3}
\end{array}
$$

{{< fillin
  question="Evaluate $\csc\left(\tfrac{7\pi}{6}\right)$."
  answer="-2"
  answerForm="evaluated-trig"
  answerDisplay="$-2$"
  hint="$\tfrac{7\pi}{6}$ is in the third quadrant with reference angle $\tfrac{\pi}{6}$; sine is negative there."
>}}

**Example.** Simplify $\tfrac{\sec t}{\tan t}$.

**Solution.** We can simplify this by rewriting both functions in terms of sine and cosine.

$$
\begin{array}{lrcl}
\text{To divide the functions, multiply by the reciprocal.} & \tfrac{\sec t}{\tan t} &=& \tfrac{\tfrac{1}{\cos t}}{\tfrac{\sin t}{\cos t}} \\[4pt]
& &=& \tfrac{1}{\cos t}\cdot\tfrac{\cos t}{\sin t} \\[4pt]
\text{Divide out the cosines.} & &=& \tfrac{1}{\sin t} \\[4pt]
\text{Simplify and use the identity.} & &=& \csc t
\end{array}
$$

By showing that $\tfrac{\sec t}{\tan t}$ can be simplified to $\csc t$, we have, in fact, established a new identity.

$$\tfrac{\sec t}{\tan t}=\csc t$$

{{< multiplechoice
  question="Simplify $(\tan t)(\cos t)$."
  answer="$\sin t$"
  hint="Rewrite $\tan t$ as $\tfrac{\sin t}{\cos t}$ and cancel the cosines."
>}}
$\sin t$
$\cos t$
$\tan t$
1
{{< /multiplechoice >}}

### Alternate Forms of the Pythagorean Identity

We can use these fundamental identities to derive alternative forms of the **Pythagorean Identity**, $\cos^2 t+\sin^2 t=1$. One form is obtained by dividing both sides by $\cos^2 t$:

$$
\begin{array}{lrcl}
& \tfrac{\cos^2 t}{\cos^2 t}+\tfrac{\sin^2 t}{\cos^2 t} &=& \tfrac{1}{\cos^2 t} \\[4pt]
& 1+\tan^2 t &=& \sec^2 t
\end{array}
$$

The other form is obtained by dividing both sides by $\sin^2 t$:

$$
\begin{array}{lrcl}
& \tfrac{\cos^2 t}{\sin^2 t}+\tfrac{\sin^2 t}{\sin^2 t} &=& \tfrac{1}{\sin^2 t} \\[4pt]
& \cot^2 t+1 &=& \csc^2 t
\end{array}
$$

{{< callout type="info" >}}
  **Alternate Forms of the Pythagorean Identity.**

  $$1+\tan^2 t=\sec^2 t$$

  $$\cot^2 t+1=\csc^2 t$$
{{< /callout >}}

**Example.** If $\cos(t)=\tfrac{12}{13}$ and $t$ is in quadrant IV, as shown below, find the values of the other five trigonometric functions.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle with angle t in standard position in the fourth quadrant, terminal side meeting it at the point (12/13, y), with the x-coordinate 12/13 marked on the x-axis.","xMin":-1.3,"xMax":1.3,"yMin":-1.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":190,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.3,"from":337.38,"to":360}],"segments":[{"from":[0,0],"to":[0.9231,-0.3846]}],"points":[{"at":[0.9231,-0.3846],"label":"(12/13, y)"}],"texts":[{"at":[-1,0.13],"text":"-1","anchor":"end"},{"at":[0.75,0.2],"text":"12/13","anchor":"middle"},{"at":[-0.13,-0.5],"text":"y"},{"at":[0.45,0.13],"text":"t"}]}
{{< /apfigure >}}

**Solution.** We can find the sine using the Pythagorean Identity, $\cos^2 t+\sin^2 t=1$, and the remaining functions by relating them to sine and cosine.

$$
\begin{array}{lrcl}
& \left(\tfrac{12}{13}\right)^2+\sin^2 t &=& 1 \\[4pt]
& \sin^2 t &=& 1-\left(\tfrac{12}{13}\right)^2 \\[4pt]
& \sin^2 t &=& 1-\tfrac{144}{169} \\[4pt]
& \sin^2 t &=& \tfrac{25}{169} \\[4pt]
& \sin t &=& \pm\sqrt{\tfrac{25}{169}} \\[4pt]
& \sin t &=& \pm\tfrac{5}{13}
\end{array}
$$

The sign of the sine depends on the $y$-values in the quadrant where the angle is located. Since the angle is in quadrant IV, where the $y$-values are negative, its sine is negative, $-\tfrac{5}{13}$.

The remaining functions can be calculated using identities relating them to sine and cosine.

$$
\begin{array}{lrcl}
& \tan t=\tfrac{\sin t}{\cos t} &=& \tfrac{-\tfrac{5}{13}}{\tfrac{12}{13}}=-\tfrac{5}{12} \\[4pt]
& \sec t=\tfrac{1}{\cos t} &=& \tfrac{1}{\tfrac{12}{13}}=\tfrac{13}{12} \\[4pt]
& \csc t=\tfrac{1}{\sin t} &=& \tfrac{1}{-\tfrac{5}{13}}=-\tfrac{13}{5} \\[4pt]
& \cot t=\tfrac{1}{\tan t} &=& \tfrac{1}{-\tfrac{5}{12}}=-\tfrac{12}{5}
\end{array}
$$

If $\sec(t)=-\tfrac{17}{8}$ and $0<t<\pi$, find the values of the other five functions:

{{< fillin
  question="Find $\sin t$. (If $0<t<\pi$ and $\sec t$ is negative, $t$ is in the second quadrant, where sine is positive.)"
  answer="15/17"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{15}{17}$"
  hint="Find $\cos t=\tfrac{1}{\sec t}$, then use $\cos^2 t+\sin^2 t=1$; sine is positive since $0<t<\pi$."
>}}

{{< fillin
  question="Find $\tan t$."
  answer="-15/8"
  answerForm="evaluated-trig"
  answerDisplay="$-\tfrac{15}{8}$"
  hint="Use $\tan t=\tfrac{\sin t}{\cos t}$ with the values you just found."
>}}

{{< fillin
  question="Find $\cot t$."
  answer="-8/15"
  answerForm="evaluated-trig"
  answerDisplay="$-\tfrac{8}{15}$"
  hint="Cotangent is the reciprocal of tangent."
>}}

As we discussed in the chapter opening, a function that repeats its values in regular intervals is known as a **periodic function**. The trigonometric functions are periodic. For the four trigonometric functions, sine, cosine, cosecant and secant, a revolution of one circle, or $2\pi$, will result in the same outputs for these functions. And for tangent and cotangent, only a half a revolution will result in the same outputs.

Other functions can also be periodic. For example, the lengths of months repeat every four years. If $x$ represents the length time, measured in years, and $f(x)$ represents the number of days in February, then $f(x+4)=f(x)$. This pattern repeats over and over through time. In other words, every four years (except for multiples of 100), February typically has the same number of days as it did 4 years earlier. The positive number 4 is the smallest positive number that satisfies this condition and is called the period. A **period** is the shortest interval over which a function completes one full cycle — in this example, the period is 4 and represents the time it takes for us to be certain February has the same number of days.

{{< callout type="info" >}}
  **Period of a Function.** The **period** $P$ of a repeating function $f$ is the number representing the interval such that $f(x+P)=f(x)$ for any value of $x$.

  The period of the cosine, sine, secant, and cosecant functions is $2\pi$.

  The period of the tangent and cotangent functions is $\pi$.
{{< /callout >}}

**Example.** Find the values of the six trigonometric functions of angle $t$ based on the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle with angle t in standard position, terminal side meeting it at the point (-1/2, -square root of 3 over 2) in the third quadrant, and a counterclockwise arc from the positive x-axis sweeping past the top of the circle to the terminal side.","xMin":-1.3,"xMax":1.3,"yMin":-1.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":190,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.35,"from":0,"to":240}],"segments":[{"from":[0,0],"to":[-0.5,-0.866]}],"points":[{"at":[-0.5,-0.866],"label":"(-1/2, -√3/2)"}],"texts":[{"at":[-1,0.13],"text":"-1","anchor":"end"},{"at":[1,0.14],"text":"1"},{"at":[-0.14,1],"text":"1"},{"at":[-0.3,-1.12],"text":"-1"},{"at":[-0.6,0.14],"text":"-1/2"},{"at":[0.16,-0.92],"text":"-√3/2"},{"at":[-0.16,0.44],"text":"t"}]}
{{< /apfigure >}}

**Solution.**

$$
\begin{array}{lrcl}
& \sin t=y &=& -\tfrac{\sqrt3}{2} \\[4pt]
& \cos t=x &=& -\tfrac12 \\[4pt]
& \tan t=\tfrac{\sin t}{\cos t} &=& \tfrac{-\tfrac{\sqrt3}{2}}{-\tfrac12}=\sqrt3 \\[4pt]
& \sec t=\tfrac{1}{\cos t} &=& \tfrac{1}{-\tfrac12}=-2 \\[4pt]
& \csc t=\tfrac{1}{\sin t} &=& \tfrac{1}{-\tfrac{\sqrt3}{2}}=-\tfrac{2\sqrt3}{3} \\[4pt]
& \cot t=\tfrac{1}{\tan t} &=& \tfrac{1}{\sqrt3}=\tfrac{\sqrt3}{3}
\end{array}
$$

Find the values of the six trigonometric functions of angle $t$ based on the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle with angle t in standard position, terminal side meeting it at the point (0, -1) on the negative y-axis, and a counterclockwise arc from the positive x-axis sweeping past the top of the circle down to the terminal side.","xMin":-1.3,"xMax":1.3,"yMin":-1.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":190,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.35,"from":0,"to":270}],"segments":[{"from":[0,0],"to":[0,-1]}],"points":[{"at":[0,-1],"label":"(0, -1)"}],"texts":[{"at":[-1,0.13],"text":"-1","anchor":"end"},{"at":[1,0.14],"text":"1"},{"at":[-0.14,1],"text":"1"},{"at":[-0.2,0.44],"text":"t"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Find $\tan t$."
  answer="Undefined"
  hint="Tangent is $\tfrac{y}{x}$; the $x$-coordinate here is $0$."
>}}
$0$
$-1$
$1$
Undefined
{{< /multiplechoice >}}

{{< fillin
  question="Find $\cot t$."
  answer="0"
  answerForm="evaluated-trig"
  answerDisplay="$0$"
  hint="Cotangent is $\tfrac{x}{y}$; the $x$-coordinate here is $0$."
>}}

**Example.** If $\sin(t)=-\tfrac{\sqrt3}{2}$ and $\cos(t)=\tfrac12$, find $\sec(t)$, $\csc(t)$, $\tan(t)$, $\cot(t)$.

**Solution.**

$$
\begin{array}{lrcl}
& \sec t=\tfrac{1}{\cos t} &=& \tfrac{1}{\tfrac12}=2 \\[4pt]
& \csc t=\tfrac{1}{\sin t} &=& \tfrac{1}{-\tfrac{\sqrt3}{2}}=-\tfrac{2\sqrt3}{3} \\[4pt]
& \tan t=\tfrac{\sin t}{\cos t} &=& \tfrac{-\tfrac{\sqrt3}{2}}{\tfrac12}=-\sqrt3 \\[4pt]
& \cot t=\tfrac{1}{\tan t} &=& \tfrac{1}{-\sqrt3}=-\tfrac{\sqrt3}{3}
\end{array}
$$

If $\sin(t)=\tfrac{\sqrt2}{2}$ and $\cos(t)=\tfrac{\sqrt2}{2}$, find $\sec(t)$, $\csc(t)$, $\tan(t)$, and $\cot(t)$:

{{< fillin
  question="Find $\tan(t)$."
  answer="1"
  answerForm="evaluated-trig"
  answerDisplay="$1$"
  hint="Tangent is $\tfrac{\sin t}{\cos t}$."
>}}

{{< fillin
  question="Find $\sec(t)$."
  answer="\sqrt2"
  answerForm="evaluated-trig"
  answerDisplay="$\sqrt2$"
  hint="Secant is the reciprocal of cosine."
>}}

## Evaluating Trigonometric Functions with a Calculator

We have learned how to evaluate the six trigonometric functions for the common first-quadrant angles and to use them as reference angles for angles in other quadrants. To evaluate trigonometric functions of other angles, we use a scientific or graphing calculator or computer software. If the calculator has a degree mode and a radian mode, confirm the correct mode is chosen before making a calculation.

Evaluating a tangent function with a scientific calculator as opposed to a graphing calculator or computer algebra system is like evaluating a sine or cosine: enter the value and press the TAN key. For the reciprocal functions, there may not be any dedicated keys that say CSC, SEC, or COT. In that case, the function must be evaluated as the reciprocal of a sine, cosine, or tangent.

If we need to work with degrees and our calculator or software does not have a degree mode, we can enter the degrees multiplied by the conversion factor $\tfrac{\pi}{180}$ to convert the degrees to radians. To find the secant of $30^\circ$, we could press

(for a scientific calculator): $\tfrac{1}{30\times\tfrac{\pi}{180}}\ \text{COS}$

or

(for a graphing calculator): $\tfrac{1}{\cos\left(\tfrac{30\pi}{180}\right)}$

{{< callout type="info" >}}
  **How to:** given an angle measure in radians, use a scientific calculator to find the cosecant.

  1. If the calculator has degree mode and radian mode, set it to radian mode.
  2. Enter: $1\ /$
  3. Enter the value of the angle inside parentheses.
  4. Press the SIN key.
  5. Press the $=$ key.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given an angle measure in radians, use a graphing utility/calculator to find the cosecant.

  1. If the graphing utility has degree mode and radian mode, set it to radian mode.
  2. Enter: $1\ /$
  3. Press the SIN key.
  4. Enter the value of the angle inside parentheses.
  5. Press the ENTER key.
{{< /callout >}}

**Example.** Evaluate the cosecant of $\tfrac{5\pi}{7}$.

**Solution.** For a scientific calculator, enter information as follows:

$1\ /\ (\ 5\times\pi\ /\ 7\ )\ \text{SIN}\ =$

$$\csc\left(\tfrac{5\pi}{7}\right)\approx1.279$$

{{< fillin
  question="Evaluate the cotangent of $-\tfrac{\pi}{8}$. Round to three decimal places."
  answer="-2.414"
  answerForm="decimal"
  answerDisplay="$-2.414$"
  hint="Set your calculator to radian mode and evaluate $\tfrac{1}{\tan\left(-\tfrac{\pi}{8}\right)}$, or cosine divided by sine."
>}}

## Key equations

| Tangent function | $\tan t=\tfrac{\sin t}{\cos t}$ |
| :--- | :--- |
| Secant function | $\sec t=\tfrac{1}{\cos t}$ |
| Cosecant function | $\csc t=\tfrac{1}{\sin t}$ |
| Cotangent function | $\cot t=\tfrac{1}{\tan t}=\tfrac{\cos t}{\sin t}$ |

## Key concepts

- The tangent of an angle is the ratio of the $y$-value to the $x$-value of the corresponding point on the unit circle.
- The secant, cotangent, and cosecant are all reciprocals of other functions. The secant is the reciprocal of the cosine function, the cotangent is the reciprocal of the tangent function, and the cosecant is the reciprocal of the sine function.
- The six trigonometric functions can be found from a point on the unit circle. See Example 1.
- Trigonometric functions can also be found from an angle. See Example 2.
- Trigonometric functions of angles outside the first quadrant can be determined using reference angles. See Example 3.
- A function is said to be even if $f(-x)=f(x)$ and odd if $f(-x)=-f(x)$.
- Cosine and secant are even; sine, tangent, cosecant, and cotangent are odd.
- Even and odd properties can be used to evaluate trigonometric functions. See Example 4.
- The Pythagorean Identity makes it possible to find a cosine from a sine or a sine from a cosine.
- Identities can be used to evaluate trigonometric functions. See Example 5 and Example 6.
- Fundamental identities such as the Pythagorean Identity can be manipulated algebraically to produce new identities. See Example 7.
- The trigonometric functions repeat at regular intervals.
- The period $P$ of a repeating function $f$ is the smallest interval such that $f(x+P)=f(x)$ for any value of $x$.
- The values of trigonometric functions of special angles can be found by mathematical analysis.
- To evaluate trigonometric functions of other angles, we can use a calculator or computer software. See Example 10.

## Practice

### Find exact values of the trigonometric functions secant, cosecant, tangent, and cotangent of $\tfrac{\pi}{3}$, $\tfrac{\pi}{4}$, and $\tfrac{\pi}{6}$

{{< fillin
  question="Find $\sec\tfrac{\pi}{6}$."
  answer="\frac{2\sqrt3}{3}"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{2\sqrt3}{3}$"
  hint="Secant is the reciprocal of cosine; find $\cos\tfrac{\pi}{6}$ first, then take its reciprocal."
>}}

{{< fillin
  question="Find $\cot\tfrac{\pi}{4}$."
  answer="1"
  answerForm="evaluated-trig"
  answerDisplay="$1$"
  hint="Cotangent is $\tfrac{\cos t}{\sin t}$; at $\tfrac{\pi}{4}$ sine and cosine are equal."
>}}

The point $\left(\tfrac{\sqrt2}{2},\tfrac{\sqrt2}{2}\right)$ is on the unit circle, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A first-quadrant angle t in standard position, terminal side meeting the unit circle at the point (square root of 2 over 2, square root of 2 over 2), with square root of 2 over 2 marked on both axes.","xMin":-0.3,"xMax":1.3,"yMin":-0.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":220,"circles":[{"at":[0,0],"r":1,"from":0,"to":90},{"at":[0,0],"r":0.3,"from":0,"to":45}],"segments":[{"from":[0,0],"to":[0.7071,0.7071]}],"points":[{"at":[0.7071,0.7071],"label":"(√2/2, √2/2)"}],"texts":[{"at":[0.7071,-0.13],"text":"√2/2"},{"at":[-0.17,0.7071],"text":"√2/2"},{"at":[0.22,0.09],"text":"t"}]}
{{< /apfigure >}}

{{< fillin
  question="Find $\tan t$."
  answer="1"
  answerForm="evaluated-trig"
  answerDisplay="$1$"
  hint="Tangent is $\tfrac{y}{x}$ for the point on the unit circle."
>}}

{{< fillin
  question="Find $\sec t$."
  answer="\sqrt2"
  answerForm="evaluated-trig"
  answerDisplay="$\sqrt2$"
  hint="Secant is the reciprocal of the $x$-coordinate."
>}}

### Use reference angles to evaluate the trigonometric functions secant, cosecant, tangent, and cotangent

The point $\left(-\tfrac12,-\tfrac{\sqrt3}{2}\right)$ is on the unit circle, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle with angle t in standard position, terminal side meeting it at the point (-1/2, -square root of 3 over 2) in the third quadrant, and a counterclockwise arc from the positive x-axis sweeping past the top of the circle to the terminal side.","xMin":-1.3,"xMax":1.3,"yMin":-1.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":190,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.35,"from":0,"to":240}],"segments":[{"from":[0,0],"to":[-0.5,-0.866]}],"points":[{"at":[-0.5,-0.866],"label":"(-1/2, -√3/2)"}],"texts":[{"at":[-1,0.13],"text":"-1","anchor":"end"},{"at":[1,0.14],"text":"1"},{"at":[-0.14,1],"text":"1"},{"at":[-0.3,-1.12],"text":"-1"},{"at":[-0.6,0.14],"text":"-1/2"},{"at":[0.16,-0.92],"text":"-√3/2"},{"at":[-0.16,0.44],"text":"t"}]}
{{< /apfigure >}}

{{< fillin
  question="Find $\csc t$."
  answer="-\frac{2\sqrt3}{3}"
  answerForm="evaluated-trig"
  answerDisplay="$-\tfrac{2\sqrt3}{3}$"
  hint="Cosecant is the reciprocal of the $y$-coordinate; rationalize the denominator."
>}}

{{< fillin
  question="Find $\cot t$."
  answer="\frac{\sqrt3}{3}"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{\sqrt3}{3}$"
  hint="Cotangent is $\tfrac{x}{y}$ for the point on the unit circle."
>}}

{{< fillin
  question="Find $\sec\left(120^\circ\right)$."
  answer="-2"
  answerForm="evaluated-trig"
  answerDisplay="$-2$"
  hint="$120^\circ$ is in the second quadrant with reference angle $60^\circ$; cosine (and secant) are negative there."
>}}

{{< fillin
  question="Find $\cot\left(315^\circ\right)$."
  answer="-1"
  answerForm="evaluated-trig"
  answerDisplay="$-1$"
  hint="$315^\circ$ is in the fourth quadrant with reference angle $45^\circ$; cotangent is negative there."
>}}

### Use properties of even and odd trigonometric functions

{{< fillin
  question="If $\sin t=\tfrac{\sqrt2}{2}$, what is $\sin(-t)$?"
  answer="-\frac{\sqrt2}{2}"
  answerForm="evaluated-trig"
  answerDisplay="$-\tfrac{\sqrt2}{2}$"
  hint="Sine is an odd function: $\sin(-t)=-\sin t$."
>}}

{{< fillin
  question="If $\sec t=3.1$, what is $\sec(-t)$?"
  answer="3.1"
  answerForm="decimal"
  answerDisplay="$3.1$"
  hint="Secant is an even function: $\sec(-t)=\sec t$."
>}}

{{< multiplechoice
  question="Determine whether the function $f(x)=3\sin^2 x\cos x+\sec x$ is even, odd, or neither."
  answer="even"
  hint="Replace $x$ with $-x$ and use $\sin(-x)=-\sin x$, $\cos(-x)=\cos x$, $\sec(-x)=\sec x$; compare the result with the original function."
>}}
even
odd
neither
{{< /multiplechoice >}}

### Recognize and use fundamental identities

{{< fillin
  question="Simplify $\tfrac{\sec t}{\csc t}$."
  answer="\tan t"
  answerForm="single-trig-function"
  answerDisplay="$\tan t$"
  hint="Rewrite both functions in terms of sine and cosine, then simplify the resulting fraction."
>}}

{{< fillin
  question="If $\tan(t)\approx1.3$ and $\cos(t)\approx0.61$, find $\sin(t)$. Round to two decimal places."
  answer="0.79"
  answerForm="decimal"
  answerDisplay="$0.79$"
  hint="Use $\tan t=\tfrac{\sin t}{\cos t}$ and solve for $\sin t$."
>}}

{{< fillin
  question="If $\cot(t)\approx0.58$ and $\cos(t)\approx0.5$, find $\csc(t)$. Round to two decimal places."
  answer="1.16"
  answerForm="decimal"
  answerDisplay="$1.16$"
  hint="Use $\cot t=\tfrac{\cos t}{\sin t}$ to find $\sin t$, then take its reciprocal."
>}}

### Evaluate trigonometric functions with a calculator

{{< fillin
  question="Use a graphing calculator to evaluate $\cot\tfrac{4\pi}{7}$. Round to three decimal places."
  answer="-0.228"
  answerForm="decimal"
  answerDisplay="$-0.228$"
  hint="Enter $\tfrac{1}{\tan(4\pi/7)}$, or cosine divided by sine, in radian mode."
>}}

{{< fillin
  question="Use a graphing calculator to evaluate $\tan\tfrac{5\pi}{8}$. Round to three decimal places."
  answer="-2.414"
  answerForm="decimal"
  answerDisplay="$-2.414$"
  hint="Set your calculator to radian mode and evaluate directly."
>}}

{{< fillin
  question="Use a graphing calculator to evaluate $\sec\left(310^\circ\right)$. Round to three decimal places."
  answer="1.556"
  answerForm="decimal"
  answerDisplay="$1.556$"
  hint="Enter $\tfrac{1}{\cos(310^\circ)}$ in degree mode, or convert to radians first."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 5.3: The Other Trigonometric Functions](https://openstax.org/books/precalculus-2e/pages/5-3-the-other-trigonometric-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every diagram as an accessible spec-first SVG — the generic point-on-the-unit-circle figure defining tangent, secant, cosecant, and cotangent; the Example 1 and Try It 1 unit-circle figures for the points $\left(-\tfrac{\sqrt2}{2}\text{-style}\right)$ and $\left(\tfrac{\sqrt2}{2},-\tfrac{\sqrt2}{2}\right)$; the "A Smart Trig Class" quadrant-sign diagram; the $f(x)=x^2$ and $f(x)=x^3$ even/odd parabola and cubic, each generated from its exact equation rather than traced; the $t$/$-t$ unit-circle symmetry figure; the Example 7 unit-circle figure for $\cos t=\tfrac{12}{13}$; and the Example 8 and Try It 8 unit-circle figures for the points $\left(-\tfrac12,-\tfrac{\sqrt3}{2}\right)$ and $(0,-1)$, the latter two drawn with the source's reflex rotation arc as a `circles` arc primitive (no arrowhead, since the figure engine's arc primitive does not draw one — a limitation shared by every angle diagram already authored in this chapter). Presented the six-function value table, the even/odd derivation table, and the Key Equations table as Markdown tables, the second with each cell holding a small KaTeX array in place of the source's boxed three-line derivation. Converted every retained "Try It" into an interactive component with instant feedback, several split into two or three questions that each ask for one function value so the response is unambiguous; all are fill-ins except two, which are multiple choice because their answer is a word rather than a value — the simplification whose answer is a single trigonometric function, and the tangent at $(0,-1)$, which is undefined (the math input a fill-in offers cannot produce the word "undefined", so a fill-in there would mark a correct learner wrong, and "Undefined" is one of that item's four options instead). Omitted the "Access these online resources" media links. Adapted fifteen selected end-of-section exercises — three per objective, two of them point-on-the-circle exercises split into one component per requested function value, giving seventeen components in all — into interactive components in a closing Practice block, one group per objective; two of the Practice items reuse the Example 7/8-style unit-circle figure to match the source exercises' own unlabeled figures, transcribed with the point and axis labels the source prints and none of the answer.</small>
