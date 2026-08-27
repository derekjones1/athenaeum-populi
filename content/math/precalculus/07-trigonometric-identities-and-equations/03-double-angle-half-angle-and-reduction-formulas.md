---
title: Double-Angle, Half-Angle, and Reduction Formulas
description: >-
  Deriving and applying the double-angle, reduction, and half-angle formulas
  to find exact trigonometric values, simplify expressions, and verify
  identities — adapted from OpenStax Precalculus 2e, Section 7.3.
source_section: "7.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use double-angle formulas to find exact values.
- Use double-angle formulas to verify identities.
- Use reduction formulas to simplify an expression.
- Use half-angle formulas to find exact values.
{{< /callout >}}

Bicycle ramps made for competition must vary in height depending on the skill level of the competitors. For advanced competitors, the angle formed by the ramp and the ground should be $\theta$ such that $\tan\theta=\tfrac53$. The angle is divided in half for novices. What is the steepness of the ramp for novices? In this section, we will investigate three additional categories of identities that we can use to answer questions such as this one.

## Using Double-Angle Formulas to Find Exact Values

In the previous section, we used addition and subtraction formulas for trigonometric functions. Now, we take another look at those same formulas. The **double-angle formulas** are a special case of the sum formulas, where $\alpha=\beta$. Deriving the double-angle formula for sine begins with the sum formula,

$$\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta$$

If we let $\alpha=\beta=\theta$, then we have

$$
\begin{array}{lrcl}
& \sin(\theta+\theta) &=& \sin\theta\cos\theta+\cos\theta\sin\theta \\[4pt]
& \sin(2\theta) &=& 2\sin\theta\cos\theta
\end{array}
$$

Deriving the double-angle for cosine gives us three options. First, starting from the sum formula, $\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta$, and letting $\alpha=\beta=\theta$, we have

$$
\begin{array}{lrcl}
& \cos(\theta+\theta) &=& \cos\theta\cos\theta-\sin\theta\sin\theta \\[4pt]
& \cos(2\theta) &=& \cos^2\theta-\sin^2\theta
\end{array}
$$

Using the Pythagorean properties, we can expand this double-angle formula for cosine and get two more interpretations. The first one is:

$$
\begin{array}{lrcl}
& \cos(2\theta) &=& \cos^2\theta-\sin^2\theta \\[4pt]
& &=& (1-\sin^2\theta)-\sin^2\theta \\[4pt]
& &=& 1-2\sin^2\theta
\end{array}
$$

The second interpretation is:

$$
\begin{array}{lrcl}
& \cos(2\theta) &=& \cos^2\theta-\sin^2\theta \\[4pt]
& &=& \cos^2\theta-(1-\cos^2\theta) \\[4pt]
& &=& 2\cos^2\theta-1
\end{array}
$$

Similarly, to derive the double-angle formula for tangent, replacing $\alpha=\beta=\theta$ in the sum formula gives

$$
\begin{array}{lrcl}
& \tan(\alpha+\beta) &=& \tfrac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta} \\[8pt]
& \tan(\theta+\theta) &=& \tfrac{\tan\theta+\tan\theta}{1-\tan\theta\tan\theta} \\[8pt]
& \tan(2\theta) &=& \tfrac{2\tan\theta}{1-\tan^2\theta}
\end{array}
$$

{{< callout type="info" >}}
  **Double-Angle Formulas.**

  The **double-angle formulas** are summarized as follows:

  $$\sin(2\theta)=2\sin\theta\cos\theta$$

  $$
  \begin{array}{lrcl}
  & \cos(2\theta) &=& \cos^2\theta-\sin^2\theta \\[4pt]
  & &=& 1-2\sin^2\theta \\[4pt]
  & &=& 2\cos^2\theta-1
  \end{array}
  $$

  $$\tan(2\theta)=\tfrac{2\tan\theta}{1-\tan^2\theta}$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the tangent of an angle and the quadrant in which it is located, use the double-angle formulas to find the exact value.

  1. Draw a triangle to reflect the given information.
  2. Determine the correct double-angle formula.
  3. Substitute values into the formula based on the triangle.
  4. Simplify.
{{< /callout >}}

**Example.** Given that $\tan\theta=-\tfrac34$ and $\theta$ is in quadrant II, find the following:

ⓐ $\sin(2\theta)$  ⓑ $\cos(2\theta)$  ⓒ $\tan(2\theta)$

**Solution.** If we draw a triangle to reflect the information given, we can find the values needed to solve the problems below. We are given $\tan\theta=-\tfrac34$, such that $\theta$ is in quadrant II. The tangent of an angle is equal to the opposite side over the adjacent side, and because $\theta$ is in the second quadrant, the adjacent side is on the $x$-axis and is negative. Use the Pythagorean Theorem to find the length of the hypotenuse:

$$
\begin{array}{lrcl}
& (-4)^2+(3)^2 &=& c^2 \\[4pt]
& 16+9 &=& c^2 \\[4pt]
& 25 &=& c^2 \\[4pt]
& c &=& 5
\end{array}
$$

Now we can draw a triangle similar to the one shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A right triangle in the coordinate plane with vertices at the origin, (-4, 0), and (-4, 3), a right angle at (-4, 0), standard-position angle theta swept from the positive x-axis to the hypotenuse, and hypotenuse of length 5.","xMin":-5.5,"xMax":1,"yMin":-1,"yMax":4,"grid":false,"tickLabels":false,"unit":75,"segments":[{"from":[0,0],"to":[-4,0]},{"from":[-4,0],"to":[-4,3]},{"from":[0,0],"to":[-4,3],"label":"5"}],"points":[{"at":[-4,3],"label":"(-4, 3)"},{"at":[-4,0],"label":"(-4, 0)"}],"circles":[{"at":[0,0],"r":0.6,"from":0,"to":143.13}],"texts":[{"at":[-0.85,0.32],"text":"θ"}]}
{{< /apfigure >}}

ⓐ Let's begin by writing the double-angle formula for sine.

$$\sin(2\theta)=2\sin\theta\cos\theta$$

We see that we need to find $\sin\theta$ and $\cos\theta$. Based on the figure above, the hypotenuse equals $5$, so $\sin\theta=\tfrac35$, and $\cos\theta=-\tfrac45$. Substitute these values into the equation, and simplify.

Thus,

$$
\begin{array}{lrcl}
& \sin(2\theta) &=& 2\left(\tfrac35\right)\left(-\tfrac45\right) \\[4pt]
& &=& -\tfrac{24}{25}
\end{array}
$$

ⓑ Write the double-angle formula for cosine.

$$\cos(2\theta)=\cos^2\theta-\sin^2\theta$$

Again, substitute the values of the sine and cosine into the equation, and simplify.

$$
\begin{array}{lrcl}
& \cos(2\theta) &=& \left(-\tfrac45\right)^2-\left(\tfrac35\right)^2 \\[4pt]
& &=& \tfrac{16}{25}-\tfrac{9}{25} \\[4pt]
& &=& \tfrac{7}{25}
\end{array}
$$

ⓒ Write the double-angle formula for tangent.

$$\tan(2\theta)=\tfrac{2\tan\theta}{1-\tan^2\theta}$$

In this formula, we need the tangent, which we were given as $\tan\theta=-\tfrac34$. Substitute this value into the equation, and simplify.

$$
\begin{array}{lrcl}
& \tan(2\theta) &=& \cfrac{2\left(-\tfrac34\right)}{1-\left(-\tfrac34\right)^2} \\[10pt]
& &=& \cfrac{-\tfrac32}{1-\tfrac{9}{16}} \\[10pt]
& &=& -\tfrac32\left(\tfrac{16}{7}\right) \\[10pt]
& &=& -\tfrac{24}{7}
\end{array}
$$

{{< callout type="info" >}}
  **Source note.** The source's next Try It prints "with $\theta$ in quadrant I," but every other part of the item — including its own solution — uses $\alpha$. This page states $\alpha$ throughout.
{{< /callout >}}

{{< fillin
  question="Given $\sin\alpha=\tfrac58$, with $\alpha$ in quadrant I, find $\cos(2\alpha)$."
  answer="7/32"
  answerDisplay="$\tfrac{7}{32}$"
  hint="Use $\cos(2\alpha)=1-2\sin^2\alpha$ and substitute $\sin\alpha=\tfrac58$."
>}}

**Example.** Use the double-angle formula for cosine to write $\cos(6x)$ in terms of $\cos(3x)$.

**Solution.**

$$
\begin{array}{lrcl}
& \cos(6x) &=& \cos(2(3x)) \\[4pt]
& &=& \cos^2(3x)-\sin^2(3x) \\[4pt]
& &=& 2\cos^2(3x)-1
\end{array}
$$

**Analysis.** This example illustrates that we can use the double-angle formula without having exact values. It emphasizes that the pattern is what we need to remember and that identities are true for all values in the domain of the trigonometric function.

## Using Double-Angle Formulas to Verify Identities

Establishing identities using the double-angle formulas is performed using the same steps we used to derive the sum and difference formulas. Choose the more complicated side of the equation and rewrite it until it matches the other side.

**Example.** Establish the following identity using double-angle formulas:

$$1+\sin(2\theta)=(\sin\theta+\cos\theta)^2$$

**Solution.** We will work on the right side of the equal sign and rewrite the expression until it matches the left side.

$$
\begin{array}{lrcl}
& (\sin\theta+\cos\theta)^2 &=& \sin^2\theta+2\sin\theta\cos\theta+\cos^2\theta \\[4pt]
& &=& (\sin^2\theta+\cos^2\theta)+2\sin\theta\cos\theta \\[4pt]
& &=& 1+2\sin\theta\cos\theta \\[4pt]
& &=& 1+\sin(2\theta)
\end{array}
$$

**Analysis.** This process is not complicated, as long as we recall the perfect square formula from algebra:

$$(a\pm b)^2=a^2\pm2ab+b^2$$

where $a=\sin\theta$ and $b=\cos\theta$. Part of being successful in mathematics is the ability to recognize patterns. While the terms or symbols may change, the algebra remains consistent.

{{< fillin
  question="Simplify $\cos^4\theta-\sin^4\theta$ to a single trigonometric function."
  answer="\cos(2\theta)"
  answerForm="single-trig-function"
  answerDisplay="$\cos(2\theta)$"
  hint="Factor the left side as a difference of squares, $(\cos^2\theta+\sin^2\theta)(\cos^2\theta-\sin^2\theta)$, then apply the Pythagorean identity and the double-angle formula for cosine."
>}}

**Example.** Verify the identity:

$$\tan(2\theta)=\tfrac{2}{\cot\theta-\tan\theta}$$

**Solution.** In this case, we will work with the left side of the equation and simplify or rewrite until it equals the right side of the equation.

$$
\begin{array}{lrcl}
\text{Double-angle formula.} & \tan(2\theta) &=& \tfrac{2\tan\theta}{1-\tan^2\theta} \\[8pt]
\text{Multiply by a term that results in the desired numerator.} & &=& \cfrac{2\tan\theta\left(\tfrac{1}{\tan\theta}\right)}{(1-\tan^2\theta)\left(\tfrac{1}{\tan\theta}\right)} \\[10pt]
& &=& \cfrac{2}{\tfrac{1}{\tan\theta}-\tfrac{\tan^2\theta}{\tan\theta}} \\[10pt]
\text{Use the reciprocal identity for } \tfrac{1}{\tan\theta}. & &=& \tfrac{2}{\cot\theta-\tan\theta}
\end{array}
$$

**Analysis.** Here is a case where the more complicated side of the initial equation appeared on the right, but we chose to work the left side. However, if we had chosen the left side to rewrite, we would have been working backwards to arrive at the equivalency. For example, suppose that we wanted to show

$$\tfrac{2\tan\theta}{1-\tan^2\theta}=\tfrac{2}{\cot\theta-\tan\theta}$$

Let's work on the right side.

$$
\begin{array}{lrcl}
& \tfrac{2}{\cot\theta-\tan\theta} &=& \tfrac{2}{\tfrac{1}{\tan\theta}-\tan\theta}\left(\tfrac{\tan\theta}{\tan\theta}\right) \\[10pt]
& &=& \tfrac{2\tan\theta}{\tfrac{1}{\tan\theta}(\tan\theta)-\tan\theta(\tan\theta)} \\[10pt]
& &=& \tfrac{2\tan\theta}{1-\tan^2\theta}
\end{array}
$$

When using the identities to simplify a trigonometric expression or solve a trigonometric equation, there are usually several paths to a desired result. There is no set rule as to what side should be manipulated. However, we should begin with the guidelines set forth earlier.

{{< multiplechoice
  question="Which of the following expressions is equivalent to $\cos(2\theta)\cos\theta$?"
  answer="\cos^3\theta-\cos\theta\sin^2\theta"
  hint="Substitute the double-angle formula $\cos(2\theta)=\cos^2\theta-\sin^2\theta$, then distribute the $\cos\theta$ factor."
>}}
\cos^3\theta-\cos\theta\sin^2\theta
\cos^3\theta+\cos\theta\sin^2\theta
\sin^3\theta-\sin\theta\cos^2\theta
\cos\theta\sin^2\theta-\cos^3\theta
{{< /multiplechoice >}}

## Using Reduction Formulas to Simplify an Expression

The double-angle formulas can be used to derive the **reduction formulas**, which are formulas we can use to reduce the power of a given expression involving even powers of sine or cosine. They allow us to rewrite the even powers of sine or cosine in terms of the first power of cosine. These formulas are especially important in higher-level math courses, calculus in particular. Also called the power-reducing formulas, three identities are included and are easily derived from the double-angle formulas.

We can use two of the three double-angle formulas for cosine to derive the reduction formulas for sine and cosine. Let's begin with $\cos(2\theta)=1-2\sin^2\theta$. Solve for $\sin^2\theta$:

$$
\begin{array}{lrcl}
& \cos(2\theta) &=& 1-2\sin^2\theta \\[4pt]
& 2\sin^2\theta &=& 1-\cos(2\theta) \\[4pt]
& \sin^2\theta &=& \tfrac{1-\cos(2\theta)}{2}
\end{array}
$$

Next, we use the formula $\cos(2\theta)=2\cos^2\theta-1$. Solve for $\cos^2\theta$:

$$
\begin{array}{lrcl}
& \cos(2\theta) &=& 2\cos^2\theta-1 \\[4pt]
& 1+\cos(2\theta) &=& 2\cos^2\theta \\[4pt]
& \tfrac{1+\cos(2\theta)}{2} &=& \cos^2\theta
\end{array}
$$

The last reduction formula is derived by writing tangent in terms of sine and cosine:

$$
\begin{array}{lrcl}
& \tan^2\theta &=& \tfrac{\sin^2\theta}{\cos^2\theta} \\[8pt]
\text{Substitute the reduction formulas.} & &=& \cfrac{\tfrac{1-\cos(2\theta)}{2}}{\tfrac{1+\cos(2\theta)}{2}} \\[10pt]
& &=& \left(\tfrac{1-\cos(2\theta)}{2}\right)\left(\tfrac{2}{1+\cos(2\theta)}\right) \\[10pt]
& &=& \tfrac{1-\cos(2\theta)}{1+\cos(2\theta)}
\end{array}
$$

{{< callout type="info" >}}
  **Reduction Formulas.**

  The **reduction formulas** are summarized as follows:

  $$\sin^2\theta=\tfrac{1-\cos(2\theta)}{2}$$

  $$\cos^2\theta=\tfrac{1+\cos(2\theta)}{2}$$

  $$\tan^2\theta=\tfrac{1-\cos(2\theta)}{1+\cos(2\theta)}$$
{{< /callout >}}

**Example.** Write an equivalent expression for $\cos^4x$ that does not involve any powers of sine or cosine greater than $1$.

**Solution.** We will apply the reduction formula for cosine twice.

$$
\begin{array}{lrcl}
& \cos^4x &=& (\cos^2x)^2 \\[8pt]
\text{Substitute the reduction formula for } \cos^2x. & &=& \left(\tfrac{1+\cos(2x)}{2}\right)^2 \\[10pt]
& &=& \tfrac14\bigl(1+2\cos(2x)+\cos^2(2x)\bigr) \\[10pt]
\text{Substitute the reduction formula for } \cos^2(2x). & &=& \tfrac14+\tfrac12\cos(2x)+\tfrac14\left(\tfrac{1+\cos(4x)}{2}\right) \\[10pt]
& &=& \tfrac14+\tfrac12\cos(2x)+\tfrac18+\tfrac18\cos(4x) \\[4pt]
& &=& \tfrac38+\tfrac12\cos(2x)+\tfrac18\cos(4x)
\end{array}
$$

**Analysis.** The solution is found by using the reduction formula twice, as noted, and the perfect square formula from algebra.

**Example.** Use the power-reducing formulas to prove

$$\sin^3(2x)=\left[\tfrac12\sin(2x)\right]\bigl[1-\cos(4x)\bigr]$$

**Solution.** We will work on simplifying the left side of the equation:

$$
\begin{array}{lrcl}
& \sin^3(2x) &=& [\sin(2x)][\sin^2(2x)] \\[8pt]
\text{Substitute the power-reduction formula.} & &=& \sin(2x)\left[\tfrac{1-\cos(4x)}{2}\right] \\[8pt]
& &=& \sin(2x)\left(\tfrac12\right)[1-\cos(4x)] \\[4pt]
& &=& \tfrac12[\sin(2x)][1-\cos(4x)]
\end{array}
$$

**Analysis.** Note that in this example, we substituted

$$\tfrac{1-\cos(4x)}{2}$$

for $\sin^2(2x)$. The formula states

$$\sin^2\theta=\tfrac{1-\cos(2\theta)}{2}$$

We let $\theta=2x$, so $2\theta=4x$.

{{< multiplechoice
  question="Which of the following is $10\cos^4x$ rewritten so that no exponent is higher than $1$?"
  answer="\frac{15}{4}+5\cos(2x)+\frac{5}{4}\cos(4x)"
  hint="Apply the power-reducing formula for $\cos^2x$ twice, as in the example above, then combine like terms."
>}}
\frac{15}{4}+5\cos(2x)+\frac{5}{4}\cos(4x)
\frac{15}{4}+5\cos(2x)-\frac{5}{4}\cos(4x)
\frac{5}{4}+5\cos(2x)+\frac{5}{4}\cos(4x)
\frac{15}{4}+\frac{5}{2}\cos(2x)+\frac{5}{4}\cos(4x)
{{< /multiplechoice >}}

## Using Half-Angle Formulas to Find Exact Values

The next set of identities is the set of **half-angle formulas**, which can be derived from the reduction formulas and we can use when we have an angle that is half the size of a special angle. If we replace $\theta$ with $\tfrac{\alpha}{2}$, the half-angle formula for sine is found by simplifying the equation and solving for $\sin\left(\tfrac{\alpha}{2}\right)$. Note that the half-angle formulas are preceded by a $\pm$ sign. This does not mean that both the positive and negative expressions are valid. Rather, it depends on the quadrant in which $\tfrac{\alpha}{2}$ terminates.

The half-angle formula for sine is derived as follows:

$$
\begin{array}{lrcl}
& \sin^2\theta &=& \tfrac{1-\cos(2\theta)}{2} \\[8pt]
& \sin^2\left(\tfrac{\alpha}{2}\right) &=& \tfrac{1-\cos\left(2\cdot\tfrac{\alpha}{2}\right)}{2} \\[8pt]
& &=& \tfrac{1-\cos\alpha}{2} \\[8pt]
& \sin\left(\tfrac{\alpha}{2}\right) &=& \pm\sqrt{\tfrac{1-\cos\alpha}{2}}
\end{array}
$$

To derive the half-angle formula for cosine, we have

$$
\begin{array}{lrcl}
& \cos^2\theta &=& \tfrac{1+\cos(2\theta)}{2} \\[8pt]
& \cos^2\left(\tfrac{\alpha}{2}\right) &=& \tfrac{1+\cos\left(2\cdot\tfrac{\alpha}{2}\right)}{2} \\[8pt]
& &=& \tfrac{1+\cos\alpha}{2} \\[8pt]
& \cos\left(\tfrac{\alpha}{2}\right) &=& \pm\sqrt{\tfrac{1+\cos\alpha}{2}}
\end{array}
$$

For the tangent identity, we have

$$
\begin{array}{lrcl}
& \tan^2\theta &=& \tfrac{1-\cos(2\theta)}{1+\cos(2\theta)} \\[8pt]
& \tan^2\left(\tfrac{\alpha}{2}\right) &=& \tfrac{1-\cos\left(2\cdot\tfrac{\alpha}{2}\right)}{1+\cos\left(2\cdot\tfrac{\alpha}{2}\right)} \\[8pt]
& &=& \tfrac{1-\cos\alpha}{1+\cos\alpha} \\[8pt]
& \tan\left(\tfrac{\alpha}{2}\right) &=& \pm\sqrt{\tfrac{1-\cos\alpha}{1+\cos\alpha}}
\end{array}
$$

{{< callout type="info" >}}
  **Half-Angle Formulas.**

  The **half-angle formulas** are as follows:

  $$\sin\left(\tfrac{\alpha}{2}\right)=\pm\sqrt{\tfrac{1-\cos\alpha}{2}}$$

  $$\cos\left(\tfrac{\alpha}{2}\right)=\pm\sqrt{\tfrac{1+\cos\alpha}{2}}$$

  $$
  \begin{array}{lrcl}
  & \tan\left(\tfrac{\alpha}{2}\right) &=& \pm\sqrt{\tfrac{1-\cos\alpha}{1+\cos\alpha}} \\[8pt]
  & &=& \tfrac{\sin\alpha}{1+\cos\alpha} \\[8pt]
  & &=& \tfrac{1-\cos\alpha}{\sin\alpha}
  \end{array}
  $$
{{< /callout >}}

**Example.** Find $\sin(15^\circ)$ using a half-angle formula.

**Solution.** Since $15^\circ=\tfrac{30^\circ}{2}$, we use the half-angle formula for sine:

$$
\begin{array}{lrcl}
& \sin\left(\tfrac{30^\circ}{2}\right) &=& \sqrt{\tfrac{1-\cos30^\circ}{2}} \\[8pt]
& &=& \sqrt{\tfrac{1-\tfrac{\sqrt3}{2}}{2}} \\[8pt]
& &=& \sqrt{\tfrac{\tfrac{2-\sqrt3}{2}}{2}} \\[8pt]
& &=& \sqrt{\tfrac{2-\sqrt3}{4}} \\[8pt]
& &=& \tfrac{\sqrt{2-\sqrt3}}{2}
\end{array}
$$

**Analysis.** Notice that we used only the positive root because $\sin(15^\circ)$ is positive.

{{< callout type="info" >}}
  **How to:** given the tangent of an angle and the quadrant in which the angle lies, find the exact values of trigonometric functions of half of the angle.

  1. Draw a triangle to represent the given information.
  2. Determine the correct half-angle formula.
  3. Substitute values into the formula based on the triangle.
  4. Simplify.
{{< /callout >}}

**Example.** Given that $\tan\alpha=\tfrac{8}{15}$ and $\alpha$ lies in quadrant III, find the exact value of the following:

ⓐ $\sin\left(\tfrac{\alpha}{2}\right)$  ⓑ $\cos\left(\tfrac{\alpha}{2}\right)$  ⓒ $\tan\left(\tfrac{\alpha}{2}\right)$

**Solution.** Using the given information, we can draw the triangle shown below. Using the Pythagorean Theorem, we find the hypotenuse to be $17$. Therefore, we can calculate $\sin\alpha=-\tfrac{8}{17}$ and $\cos\alpha=-\tfrac{15}{17}$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A right triangle in the coordinate plane with vertices at the origin, (-15, 0), and (-15, -8), a right angle at (-15, 0), standard-position angle alpha swept from the positive x-axis to the hypotenuse, and hypotenuse of length 17.","xMin":-17,"xMax":3,"yMin":-9.5,"yMax":3,"grid":false,"tickLabels":false,"unit":38,"segments":[{"from":[0,0],"to":[-15,0]},{"from":[-15,0],"to":[-15,-8]},{"from":[0,0],"to":[-15,-8],"label":"17"}],"points":[{"at":[-15,0],"label":"(-15, 0)"},{"at":[-15,-8],"label":"(-15, -8)"}],"circles":[{"at":[0,0],"r":1.6,"from":0,"to":208.07}],"texts":[{"at":[-2.9,-0.6],"text":"α"}]}
{{< /apfigure >}}

ⓐ Before we start, we must remember that, if $\alpha$ is in quadrant III, then $180^\circ<\alpha<270^\circ$, so $\tfrac{180^\circ}{2}<\tfrac{\alpha}{2}<\tfrac{270^\circ}{2}$. This means that the terminal side of $\tfrac{\alpha}{2}$ is in quadrant II, since $90^\circ<\tfrac{\alpha}{2}<135^\circ$.

To find $\sin\tfrac{\alpha}{2}$, we begin by writing the half-angle formula for sine. Then we substitute the value of the cosine we found from the triangle above and simplify.

$$
\begin{array}{lrcl}
& \sin\tfrac{\alpha}{2} &=& \pm\sqrt{\tfrac{1-\cos\alpha}{2}} \\[8pt]
& &=& \pm\sqrt{\tfrac{1-\left(-\tfrac{15}{17}\right)}{2}} \\[8pt]
& &=& \pm\sqrt{\tfrac{\tfrac{32}{17}}{2}} \\[8pt]
& &=& \pm\sqrt{\tfrac{32}{17}\cdot\tfrac12} \\[8pt]
& &=& \pm\sqrt{\tfrac{16}{17}} \\[8pt]
& &=& \pm\tfrac{4}{\sqrt{17}} \\[8pt]
& &=& \tfrac{4\sqrt{17}}{17}
\end{array}
$$

We choose the positive value of $\sin\tfrac{\alpha}{2}$ because the angle terminates in quadrant II and sine is positive in quadrant II.

ⓑ To find $\cos\tfrac{\alpha}{2}$, we will write the half-angle formula for cosine, substitute the value of the cosine we found from the triangle above, and simplify.

$$
\begin{array}{lrcl}
& \cos\tfrac{\alpha}{2} &=& \pm\sqrt{\tfrac{1+\cos\alpha}{2}} \\[8pt]
& &=& \pm\sqrt{\tfrac{1+\left(-\tfrac{15}{17}\right)}{2}} \\[8pt]
& &=& \pm\sqrt{\tfrac{\tfrac{2}{17}}{2}} \\[8pt]
& &=& \pm\sqrt{\tfrac{2}{17}\cdot\tfrac12} \\[8pt]
& &=& \pm\sqrt{\tfrac{1}{17}} \\[8pt]
& &=& -\tfrac{\sqrt{17}}{17}
\end{array}
$$

We choose the negative value of $\cos\tfrac{\alpha}{2}$ because the angle is in quadrant II, and cosine is negative in quadrant II.

ⓒ To find $\tan\tfrac{\alpha}{2}$, we write the half-angle formula for tangent. Again, we substitute the value of the cosine we found from the triangle above and simplify.

$$
\begin{array}{lrcl}
& \tan\tfrac{\alpha}{2} &=& \pm\sqrt{\tfrac{1-\cos\alpha}{1+\cos\alpha}} \\[8pt]
& &=& \pm\sqrt{\tfrac{1-\left(-\tfrac{15}{17}\right)}{1+\left(-\tfrac{15}{17}\right)}} \\[8pt]
& &=& \pm\sqrt{\tfrac{\tfrac{32}{17}}{\tfrac{2}{17}}} \\[8pt]
& &=& \pm\sqrt{\tfrac{32}{2}} \\[8pt]
& &=& -\sqrt{16} \\[8pt]
& &=& -4
\end{array}
$$

We choose the negative value of $\tan\tfrac{\alpha}{2}$ because $\tfrac{\alpha}{2}$ lies in quadrant II, and tangent is negative in quadrant II.

{{< fillin
  question="Given that $\sin\alpha=-\tfrac45$ and $\alpha$ lies in quadrant IV, find the exact value of $\cos\left(\tfrac{\alpha}{2}\right)$."
  answer="-2/\sqrt{5}"
  answerDisplay="$-\tfrac{2}{\sqrt5}$"
  hint="First find $\cos\alpha$ from the Pythagorean identity (positive, since $\alpha$ is in quadrant IV), then determine which quadrant $\tfrac{\alpha}{2}$ falls in before choosing the sign."
>}}

**Example.** Now, we will return to the problem posed at the beginning of the section. A bicycle ramp is constructed for high-level competition with an angle of $\theta$ formed by the ramp and the ground. Another ramp is to be constructed half as steep for novice competition. If $\tan\theta=\tfrac53$ for higher-level competition, what is the measurement of the angle for novice competition?

**Solution.** Since the angle for novice competition measures half the steepness of the angle for the high-level competition, and $\tan\theta=\tfrac53$ for high-competition, we can find $\cos\theta$ from the right triangle and the Pythagorean theorem so that we can use the half-angle identities. See the figure below.

$$
\begin{array}{lrcl}
& 3^2+5^2 &=& 34 \\[4pt]
& c &=& \sqrt{34}
\end{array}
$$

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with angle theta at the bottom-left vertex, the right angle at the bottom-right vertex, base 3, vertical leg 5, and hypotenuse the square root of 34.","unit":70,"polygons":[{"points":[[0,0],[3,0],[3,5]],"edgeLabels":["3","5","√34"],"vertexLabels":["θ",null,null],"rightAngles":[1]}]}
{{< /apfigure >}}

We see that $\cos\theta=\tfrac{3}{\sqrt{34}}=\tfrac{3\sqrt{34}}{34}$. We can use the half-angle formula for tangent: $\tan\tfrac{\theta}{2}=\sqrt{\tfrac{1-\cos\theta}{1+\cos\theta}}$. Since $\tan\theta$ is in the first quadrant, so is $\tan\tfrac{\theta}{2}$. Thus,

$$
\begin{array}{lrcl}
& \tan\tfrac{\theta}{2} &=& \sqrt{\tfrac{1-\tfrac{3\sqrt{34}}{34}}{1+\tfrac{3\sqrt{34}}{34}}} \\[10pt]
& &=& \sqrt{\tfrac{\tfrac{34-3\sqrt{34}}{34}}{\tfrac{34+3\sqrt{34}}{34}}} \\[10pt]
& &=& \sqrt{\tfrac{34-3\sqrt{34}}{34+3\sqrt{34}}} \\[8pt]
& &\approx& 0.57
\end{array}
$$

We can take the inverse tangent to find the angle: $\tan^{-1}(0.57)\approx29.7^\circ$. So the angle of the ramp for novice competition is $\approx29.7^\circ$.

## Key equations

| Double-angle formulas | $\begin{array}{lrcl} \sin(2\theta) &=& 2\sin\theta\cos\theta \\[4pt] \cos(2\theta) &=& \cos^2\theta-\sin^2\theta \\[4pt] &=& 1-2\sin^2\theta \\[4pt] &=& 2\cos^2\theta-1 \\[4pt] \tan(2\theta) &=& \tfrac{2\tan\theta}{1-\tan^2\theta} \end{array}$ |
| :--- | :--- |
| Reduction formulas | $\begin{array}{lrcl} \sin^2\theta &=& \tfrac{1-\cos(2\theta)}{2} \\[4pt] \cos^2\theta &=& \tfrac{1+\cos(2\theta)}{2} \\[4pt] \tan^2\theta &=& \tfrac{1-\cos(2\theta)}{1+\cos(2\theta)} \end{array}$ |
| Half-angle formulas | $\begin{array}{lrcl} \sin\left(\tfrac{\alpha}{2}\right) &=& \pm\sqrt{\tfrac{1-\cos\alpha}{2}} \\[4pt] \cos\left(\tfrac{\alpha}{2}\right) &=& \pm\sqrt{\tfrac{1+\cos\alpha}{2}} \\[4pt] \tan\left(\tfrac{\alpha}{2}\right) &=& \pm\sqrt{\tfrac{1-\cos\alpha}{1+\cos\alpha}} \\[4pt] &=& \tfrac{\sin\alpha}{1+\cos\alpha} \\[4pt] &=& \tfrac{1-\cos\alpha}{\sin\alpha} \end{array}$ |

## Key concepts

- Double-angle identities are derived from the sum formulas of the fundamental trigonometric functions: sine, cosine, and tangent.
- Reduction formulas are especially useful in calculus, as they allow us to reduce the power of the trigonometric term.
- Half-angle formulas allow us to find the value of trigonometric functions involving half-angles, whether the original angle is known or not.

## Key terms

**double-angle formulas** — identities derived from the sum formulas for sine, cosine, and tangent in which the angles are equal. **half-angle formulas** — identities derived from the reduction formulas and used to determine half-angle values of trigonometric functions. **reduction formulas** — identities derived from the double-angle formulas and used to reduce the power of a trigonometric function.

## Practice

### Use double-angle formulas to find exact values.

{{< fillin
  question="If $\sin x=\tfrac18$ and $x$ is in quadrant I, find $\sin(2x)$, $\cos(2x)$, and $\tan(2x)$, in that order, separated by commas."
  answer="\frac{3\sqrt7}{32},\frac{31}{32},\frac{3\sqrt7}{31}"
  answerDisplay="$\sin(2x)=\tfrac{3\sqrt7}{32},\ \cos(2x)=\tfrac{31}{32},\ \tan(2x)=\tfrac{3\sqrt7}{31}$"
  hint="Find $\cos x$ from the Pythagorean identity (positive, since $x$ is in quadrant I), then apply each double-angle formula."
>}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with the right angle at the bottom-left vertex, angle theta at the bottom-right vertex, angle alpha at the top vertex, base 12, and vertical leg 5.","unit":45,"polygons":[{"points":[[0,0],[12,0],[0,5]],"edgeLabels":["12",null,"5"],"vertexLabels":[null,"θ","α"],"rightAngles":[0]}]}
{{< /apfigure >}}

{{< fillin
  question="Using the triangle above, find $\sin(2\alpha)$, $\cos(2\alpha)$, and $\tan(2\alpha)$, in that order, separated by commas."
  answer="120/169,-119/169,-120/119"
  answerDisplay="$\sin(2\alpha)=\tfrac{120}{169},\ \cos(2\alpha)=-\tfrac{119}{169},\ \tan(2\alpha)=-\tfrac{120}{119}$"
  hint="Read $\sin\alpha$ and $\cos\alpha$ from the triangle's sides and hypotenuse (found with the Pythagorean theorem), then apply each double-angle formula."
>}}

### Use double-angle formulas to verify identities.

{{< fillin
  question="Simplify $2\sin\left(\tfrac{\pi}{4}\right)\cos\left(\tfrac{\pi}{4}\right)$ to one trigonometric expression."
  answer="\sin\left(\tfrac{\pi}{2}\right)"
  answerForm="single-trig-function"
  answerDisplay="$\sin\left(\tfrac{\pi}{2}\right)$"
  hint="Recognize the right side of the double-angle formula for sine, $2\sin\theta\cos\theta=\sin(2\theta)$, with $\theta=\tfrac{\pi}{4}$."
>}}

{{< fillin
  question="Simplify $\tfrac{2\sin x\cos x}{2\cos^2x-1}$ to a single trigonometric function."
  answer="\tan(2x)"
  answerForm="single-trig-function"
  answerDisplay="$\tan(2x)$"
  hint="The numerator is the double-angle formula for sine and the denominator is a double-angle formula for cosine; write the quotient as $\tfrac{\sin(2x)}{\cos(2x)}$."
>}}

### Use reduction formulas to simplify an expression.

{{< fillin
  question="Reduce $\sin^2x\cos^2x$ so that no exponent is higher than $1$."
  answer="\frac{1-\cos(4x)}{8}"
  answerForm="single-trig-function"
  answerDisplay="$\tfrac{1-\cos(4x)}{8}$"
  hint="Group the factors as $(\sin x\cos x)^2$, rewrite $\sin x\cos x$ as $\tfrac12\sin(2x)$, then apply the reduction formula to the resulting $\sin^2(2x)$."
>}}

{{< multiplechoice
  question="Which of the following is $\sin^4(3x)$ rewritten so that no exponent is higher than $1$?"
  answer="\frac{3+\cos(12x)-4\cos(6x)}{8}"
  hint="Write $\sin^4(3x)$ as $(\sin^2(3x))^2$, apply the reduction formula for $\sin^2(3x)$, then apply it again to the resulting $\cos^2(6x)$ term."
>}}
\frac{3+\cos(12x)-4\cos(6x)}{8}
\frac{3-\cos(12x)-4\cos(6x)}{8}
\frac{3+\cos(12x)+4\cos(6x)}{8}
\frac{1+\cos(12x)-4\cos(6x)}{8}
{{< /multiplechoice >}}

### Use half-angle formulas to find exact values.

{{< fillin
  question="Find the exact value using a half-angle formula: $\sin\left(\tfrac{\pi}{8}\right)$."
  answer="\frac{\sqrt{2-\sqrt2}}{2}"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{\sqrt{2-\sqrt2}}{2}$"
  hint="Write $\tfrac{\pi}{8}$ as $\tfrac{\pi/4}{2}$, then apply the half-angle formula for sine with $\alpha=\tfrac{\pi}{4}$."
>}}

{{< fillin
  question="Find the exact value using a half-angle formula: $\tan\left(\tfrac{5\pi}{12}\right)$."
  answer="2+\sqrt3"
  answerForm="evaluated-trig"
  answerDisplay="$2+\sqrt3$"
  hint="Write $\tfrac{5\pi}{12}$ as $\tfrac{5\pi/6}{2}$, then apply the half-angle formula for tangent with $\alpha=\tfrac{5\pi}{6}$."
>}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with the right angle at the bottom-left vertex, angle theta at the bottom-right vertex, angle alpha at the top vertex, base 12, and vertical leg 5.","unit":45,"polygons":[{"points":[[0,0],[12,0],[0,5]],"edgeLabels":["12",null,"5"],"vertexLabels":[null,"θ","α"],"rightAngles":[0]}]}
{{< /apfigure >}}

{{< fillin
  question="Using the triangle above, find $\sin\left(\tfrac{\alpha}{2}\right)$, $\cos\left(\tfrac{\alpha}{2}\right)$, and $\tan\left(\tfrac{\alpha}{2}\right)$, in that order, separated by commas."
  answer="2\sqrt{13}/13,3\sqrt{13}/13,2/3"
  answerDisplay="$\sin\left(\tfrac{\alpha}{2}\right)=\tfrac{2\sqrt{13}}{13},\ \cos\left(\tfrac{\alpha}{2}\right)=\tfrac{3\sqrt{13}}{13},\ \tan\left(\tfrac{\alpha}{2}\right)=\tfrac23$"
  hint="Read $\cos\alpha$ from the triangle's sides and hypotenuse, note that $\alpha$ is acute so $\tfrac{\alpha}{2}$ is in quadrant I, then apply each half-angle formula."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 7.3: Double-Angle, Half-Angle, and Reduction Formulas](https://openstax.org/books/precalculus-2e/pages/7-3-double-angle-half-angle-and-reduction-formulas) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the decorative photograph of two bicycle ramps (Figure 1) and reworded the sentence that pointed at it. Recreated all four instructional figures as accessible spec-first SVGs: the two reference-triangle figures for the double-angle and half-angle worked examples (Figures 2–3), drawn in the coordinate plane with the standard-position angle swept from the positive $x$-axis so a reader can see why each ratio takes the sign it does; the bicycle-ramp triangle (Figure 4); and the axis-free triangle for the four end-of-section angle exercises (Figure 5), whose hypotenuse is left unlabeled exactly as the source draws it, since printing $13$ would hand the learner the value the exercises ask them to find. A source defect: the Try It after Example 1 prints "with $\theta$ in quadrant I" where every other part of the item and its own solution use $\alpha$ — corrected on this page to $\alpha$ throughout, with a visible source note. Every retained Try It became a real `fillin` or `multiplechoice` component. Two Try Its whose printed instruction is "verify"/"prove" an identity have no free-response answer, since a proof cannot be typed: "Verify $\cos(2\theta)\cos\theta=\cos^3\theta-\cos\theta\sin^2\theta$" became a `multiplechoice` on the completed right side, and "prove that $10\cos^4x=\tfrac{15}{4}+5\cos(2x)+\tfrac{5}{4}\cos(4x)$" became a `multiplechoice` on the power-reduced form, each with three algebraically-plausible wrong forms as distractors; the Try It after Example 3 ("establish $\cos^4\theta-\sin^4\theta=\cos(2\theta)$") was adapted the same way but stayed a `fillin`, since its left side is exactly one trigonometric application short of its right side and the `single-trig-function` token can tell them apart. The Practice block's "verify identities" group draws on the same hazard: its source pool is entirely proof-only ("prove the identity…"), so its two items are drawn from the section's "simplify to one trigonometric expression" instruction and from a "prove the identity" item recast as "simplify," the same computational-core adaptation. Two Practice items whose printed subject already writes only one trigonometric application each keep their own token: $\sin^2x\cos^2x$ (two applications, reducing to one) is a `fillin`, while $\sin^4(3x)$ (whose reduced form keeps three) is a `multiplechoice`. Nine selected end-of-section exercises — two double-angle combined-value items (one figure-based), two identity-simplification items, one reduction fill-in and one reduction multiple-choice, and three half-angle exact-value items (one figure-based) — were adapted into nine interactive components in a closing Practice block, one group per objective; the two figure-based Practice items ($\sin(2\alpha)/\cos(2\alpha)/\tan(2\alpha)$ and $\sin(\alpha/2)/\cos(\alpha/2)/\tan(\alpha/2)$) share the same source triangle (Figure 5), transcribed once for each group in which it is used. Every combined "find $a$, $b$, and $c$" source item — three in all — is kept as one component with a comma-separated, order-stated answer, matching the single combined response the source itself asks for. Omitted the "Access these online resources" media links.</small>
