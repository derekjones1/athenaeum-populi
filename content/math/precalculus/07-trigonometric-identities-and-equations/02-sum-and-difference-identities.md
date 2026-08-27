---
title: Sum and Difference Identities
description: >-
  Deriving and applying the sum and difference formulas for cosine, sine, and
  tangent to find exact trigonometric values, rewrite cofunction pairs, and
  verify identities — adapted from OpenStax Precalculus 2e, Section 7.2.
source_section: "7.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use sum and difference formulas for cosine.
- Use sum and difference formulas for sine.
- Use sum and difference formulas for tangent.
- Use sum and difference formulas for cofunctions.
- Use sum and difference formulas to verify identities.
{{< /callout >}}

How can the height of a mountain be measured? What about the distance from Earth to the sun? Like many seemingly impossible problems, we rely on mathematical formulas to find the answers. The trigonometric identities, commonly used in mathematical proofs, have had real-world applications for centuries, including their use in calculating long distances.

The trigonometric identities we will examine in this section can be traced to a Persian astronomer who lived around 950 AD, but the ancient Greeks discovered these same formulas much earlier and stated them in terms of chords. These are special equations or postulates, true for all values input to the equations, and with innumerable applications.

In this section, we will learn techniques that will enable us to solve problems such as the ones presented above. The formulas that follow will simplify many trigonometric expressions and equations. Keep in mind that, throughout this section, the term **formula** is used synonymously with the word **identity**.

## Using the Sum and Difference Formulas for Cosine

Finding the exact value of the sine, cosine, or tangent of an angle is often easier if we can rewrite the given angle in terms of two angles that have known trigonometric values. We can use the **special angles**, which we can review in the unit circle shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle, with the (cosine, sine) coordinates labeled at every multiple of 30 or 45 degrees around the rim — the special angles used throughout the sum and difference formulas.","xMin":-1.5,"xMax":1.5,"yMin":-1.5,"yMax":1.5,"grid":false,"tickLabels":false,"unit":170,"circles":[{"at":[0,0],"r":1}],"points":[{"at":[1,0],"label":"(1, 0)"},{"at":[0.866,0.5],"label":"(√3/2, 1/2)"},{"at":[0.707,0.707],"label":"(√2/2, √2/2)"},{"at":[0.5,0.866],"label":"(1/2, √3/2)"},{"at":[0,1],"label":"(0, 1)"},{"at":[-0.5,0.866],"label":"(-1/2, √3/2)"},{"at":[-0.707,0.707],"label":"(-√2/2, √2/2)"},{"at":[-0.866,0.5],"label":"(-√3/2, 1/2)"},{"at":[-1,0],"label":"(-1, 0)"},{"at":[-0.866,-0.5],"label":"(-√3/2, -1/2)"},{"at":[-0.707,-0.707],"label":"(-√2/2, -√2/2)"},{"at":[-0.5,-0.866],"label":"(-1/2, -√3/2)"},{"at":[0,-1],"label":"(0, -1)"},{"at":[0.5,-0.866],"label":"(1/2, -√3/2)"},{"at":[0.707,-0.707],"label":"(√2/2, -√2/2)"},{"at":[0.866,-0.5],"label":"(√3/2, -1/2)"}]}
{{< /apfigure >}}

We will begin with the **sum and difference formulas for cosine**, so that we can find the cosine of a given angle if we can break it up into the sum or difference of two of the special angles. See the table below.

| Sum formula for cosine | $\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta$ |
| :--- | :--- |
| Difference formula for cosine | $\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta$ |

First, we will prove the difference formula for cosines. Let's consider two points on the unit circle. Point $P$ is at an angle $\alpha$ from the positive $x$-axis with coordinates $(\cos\alpha,\sin\alpha)$ and point $Q$ is at an angle of $\beta$ from the positive $x$-axis with coordinates $(\cos\beta,\sin\beta)$. Note the measure of angle $POQ$ is $\alpha-\beta$.

Label two more points: $A$ at an angle of $(\alpha-\beta)$ from the positive $x$-axis with coordinates $(\cos(\alpha-\beta),\sin(\alpha-\beta))$; and point $B$ with coordinates $(1,0)$. Triangle $POQ$ is a rotation of triangle $AOB$ and thus the distance from $P$ to $Q$ is the same as the distance from $A$ to $B$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle with points P at angle alpha and Q at angle beta from the positive x-axis, joined to the origin and to each other by solid segments forming triangle POQ; points A at angle alpha minus beta and B at (1, 0), joined by dashed segments forming triangle AOB, a rotated copy of POQ. Nested arcs near the origin mark angle beta between the positive x-axis and OQ, angle alpha between the positive x-axis and OP, and angle alpha minus beta between OQ and OP.","xMin":-1.3,"xMax":1.3,"yMin":-0.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":190,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.3,"from":0,"to":20},{"at":[0,0],"r":0.45,"from":0,"to":140},{"at":[0,0],"r":0.6,"from":20,"to":140}],"segments":[{"from":[0,0],"to":[-0.766,0.6428]},{"from":[0,0],"to":[0.9397,0.342]},{"from":[-0.766,0.6428],"to":[0.9397,0.342]},{"from":[0,0],"to":[-0.5,0.866],"dashed":true},{"from":[0,0],"to":[1,0],"dashed":true},{"from":[-0.5,0.866],"to":[1,0],"dashed":true}],"points":[{"at":[-0.766,0.6428],"label":"P"},{"at":[0.9397,0.342],"label":"Q"},{"at":[-0.5,0.866],"label":"A"},{"at":[1,0],"label":"B"}],"texts":[{"at":[0.17,0.018],"text":"β"},{"at":[0.53,0.15],"text":"α"},{"at":[0.05,0.62],"text":"α − β"}]}
{{< /apfigure >}}

We can find the distance from $P$ to $Q$ using the **distance formula**.

$$
\begin{array}{lrcl}
& d_{PQ} &=& \sqrt{(\cos\alpha-\cos\beta)^2+(\sin\alpha-\sin\beta)^2} \\[4pt]
& &=& \sqrt{\cos^2\alpha-2\cos\alpha\cos\beta+\cos^2\beta+\sin^2\alpha-2\sin\alpha\sin\beta+\sin^2\beta}
\end{array}
$$

Then we apply the **Pythagorean Identity** and simplify.

$$
\begin{array}{lrcl}
& &=& \sqrt{(\cos^2\alpha+\sin^2\alpha)+(\cos^2\beta+\sin^2\beta)-2\cos\alpha\cos\beta-2\sin\alpha\sin\beta} \\[4pt]
& &=& \sqrt{1+1-2\cos\alpha\cos\beta-2\sin\alpha\sin\beta} \\[4pt]
& &=& \sqrt{2-2\cos\alpha\cos\beta-2\sin\alpha\sin\beta}
\end{array}
$$

Similarly, using the distance formula we can find the distance from $A$ to $B$.

$$
\begin{array}{lrcl}
& d_{AB} &=& \sqrt{(\cos(\alpha-\beta)-1)^2+(\sin(\alpha-\beta)-0)^2} \\[4pt]
& &=& \sqrt{\cos^2(\alpha-\beta)-2\cos(\alpha-\beta)+1+\sin^2(\alpha-\beta)}
\end{array}
$$

Applying the Pythagorean Identity and simplifying we get:

$$
\begin{array}{lrcl}
& &=& \sqrt{(\cos^2(\alpha-\beta)+\sin^2(\alpha-\beta))-2\cos(\alpha-\beta)+1} \\[4pt]
& &=& \sqrt{1-2\cos(\alpha-\beta)+1} \\[4pt]
& &=& \sqrt{2-2\cos(\alpha-\beta)}
\end{array}
$$

Because the two distances are the same, we set them equal to each other and simplify.

$$
\begin{array}{lrcl}
& \sqrt{2-2\cos\alpha\cos\beta-2\sin\alpha\sin\beta} &=& \sqrt{2-2\cos(\alpha-\beta)} \\[4pt]
& 2-2\cos\alpha\cos\beta-2\sin\alpha\sin\beta &=& 2-2\cos(\alpha-\beta)
\end{array}
$$

Finally we subtract $2$ from both sides and divide both sides by $-2$.

$$\cos\alpha\cos\beta+\sin\alpha\sin\beta=\cos(\alpha-\beta)$$

Thus, we have the difference formula for cosine. We can use similar methods to derive the cosine of the sum of two angles.

{{< callout type="info" >}}
  **Sum and Difference Formulas for Cosine.**

  These formulas can be used to calculate the cosine of sums and differences of angles.

  $$\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta$$

  $$\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given two angles, find the cosine of the difference between the angles.

  1. Write the difference formula for cosine.
  2. Substitute the values of the given angles into the formula.
  3. Simplify.
{{< /callout >}}

**Example.** Using the formula for the cosine of the difference of two angles, find the exact value of $\cos\left(\tfrac{5\pi}{4}-\tfrac{\pi}{6}\right)$.

**Solution.** Use the formula for the cosine of the difference of two angles. We have

$$
\begin{array}{lrcl}
& \cos(\alpha-\beta) &=& \cos\alpha\cos\beta+\sin\alpha\sin\beta \\[4pt]
& \cos\left(\tfrac{5\pi}{4}-\tfrac{\pi}{6}\right) &=& \cos\left(\tfrac{5\pi}{4}\right)\cos\left(\tfrac{\pi}{6}\right)+\sin\left(\tfrac{5\pi}{4}\right)\sin\left(\tfrac{\pi}{6}\right) \\[4pt]
& &=& \left(-\tfrac{\sqrt2}{2}\right)\left(\tfrac{\sqrt3}{2}\right)-\left(\tfrac{\sqrt2}{2}\right)\left(\tfrac12\right) \\[4pt]
& &=& -\tfrac{\sqrt6}{4}-\tfrac{\sqrt2}{4} \\[4pt]
& &=& \tfrac{-\sqrt6-\sqrt2}{4}
\end{array}
$$

{{< fillin
  question="Find the exact value of $\cos\left(\tfrac{\pi}{3}-\tfrac{\pi}{4}\right)$."
  answer="\frac{\sqrt2+\sqrt6}{4}"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{\sqrt2+\sqrt6}{4}$"
  hint="Write the difference formula for cosine, substitute $\alpha=\tfrac{\pi}{3}$ and $\beta=\tfrac{\pi}{4}$, then evaluate each factor."
>}}

**Example.** Find the exact value of $\cos(75^\circ)$.

**Solution.** As $75^\circ=45^\circ+30^\circ$, we can evaluate $\cos(75^\circ)$ as $\cos(45^\circ+30^\circ)$. Thus,

$$
\begin{array}{lrcl}
& \cos(45^\circ+30^\circ) &=& \cos(45^\circ)\cos(30^\circ)-\sin(45^\circ)\sin(30^\circ) \\[4pt]
& &=& \tfrac{\sqrt2}{2}\left(\tfrac{\sqrt3}{2}\right)-\tfrac{\sqrt2}{2}\left(\tfrac12\right) \\[4pt]
& &=& \tfrac{\sqrt6}{4}-\tfrac{\sqrt2}{4} \\[4pt]
& &=& \tfrac{\sqrt6-\sqrt2}{4}
\end{array}
$$

{{< fillin
  question="Find the exact value of $\cos(105^\circ)$."
  answer="\frac{\sqrt2-\sqrt6}{4}"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{\sqrt2-\sqrt6}{4}$"
  hint="Write $105^\circ$ as $45^\circ+60^\circ$ (or $135^\circ-30^\circ$), then apply the sum or difference formula for cosine."
>}}

## Using the Sum and Difference Formulas for Sine

The **sum and difference formulas for sine** can be derived in the same manner as those for cosine, and they resemble the cosine formulas.

{{< callout type="info" >}}
  **Sum and Difference Formulas for Sine.**

  These formulas can be used to calculate the sines of sums and differences of angles.

  $$\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta$$

  $$\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given two angles, find the sine of the difference between the angles.

  1. Write the difference formula for sine.
  2. Substitute the given angles into the formula.
  3. Simplify.
{{< /callout >}}

**Example.** Use the sum and difference identities to evaluate the difference of the angles and show that part ⓐ equals part ⓑ.

ⓐ $\sin(45^\circ-30^\circ)$  ⓑ $\sin(135^\circ-120^\circ)$

**Solution.** ⓐ Let's begin by writing the formula and substitute the given angles.

$$
\begin{array}{lrcl}
& \sin(\alpha-\beta) &=& \sin\alpha\cos\beta-\cos\alpha\sin\beta \\[4pt]
& \sin(45^\circ-30^\circ) &=& \sin(45^\circ)\cos(30^\circ)-\cos(45^\circ)\sin(30^\circ)
\end{array}
$$

Next, we need to find the values of the trigonometric expressions.

$$\sin(45^\circ)=\tfrac{\sqrt2}{2},\ \cos(30^\circ)=\tfrac{\sqrt3}{2},\ \cos(45^\circ)=\tfrac{\sqrt2}{2},\ \sin(30^\circ)=\tfrac12$$

Now we can substitute these values into the equation and simplify.

$$
\begin{array}{lrcl}
& \sin(45^\circ-30^\circ) &=& \tfrac{\sqrt2}{2}\left(\tfrac{\sqrt3}{2}\right)-\tfrac{\sqrt2}{2}\left(\tfrac12\right) \\[4pt]
& &=& \tfrac{\sqrt6-\sqrt2}{4}
\end{array}
$$

ⓑ Again, we write the formula and substitute the given angles.

$$
\begin{array}{lrcl}
& \sin(\alpha-\beta) &=& \sin\alpha\cos\beta-\cos\alpha\sin\beta \\[4pt]
& \sin(135^\circ-120^\circ) &=& \sin(135^\circ)\cos(120^\circ)-\cos(135^\circ)\sin(120^\circ)
\end{array}
$$

Next, we find the values of the trigonometric expressions.

$$\sin(135^\circ)=\tfrac{\sqrt2}{2},\ \cos(120^\circ)=-\tfrac12,\ \cos(135^\circ)=-\tfrac{\sqrt2}{2},\ \sin(120^\circ)=\tfrac{\sqrt3}{2}$$

Now we can substitute these values into the equation and simplify.

$$
\begin{array}{lrcl}
& \sin(135^\circ-120^\circ) &=& \tfrac{\sqrt2}{2}\left(-\tfrac12\right)-\left(-\tfrac{\sqrt2}{2}\right)\left(\tfrac{\sqrt3}{2}\right) \\[4pt]
& &=& \tfrac{-\sqrt2+\sqrt6}{4} \\[4pt]
& &=& \tfrac{\sqrt6-\sqrt2}{4}
\end{array}
$$

**Example.** Find the exact value of $\sin\left(\cos^{-1}\tfrac12+\sin^{-1}\tfrac35\right)$.

**Solution.** The pattern displayed in this problem is $\sin(\alpha+\beta)$. Let $\alpha=\cos^{-1}\tfrac12$ and $\beta=\sin^{-1}\tfrac35$. Then we can write

$$
\begin{array}{l}
\cos\alpha=\tfrac12,\ 0\le\alpha\le\pi \\
\sin\beta=\tfrac35,\ -\tfrac{\pi}{2}\le\beta\le\tfrac{\pi}{2}
\end{array}
$$

We will use the Pythagorean Identities to find $\sin\alpha$ and $\cos\beta$.

$$
\begin{array}{lrcl}
& \sin\alpha &=& \sqrt{1-\cos^2\alpha} \\[4pt]
& &=& \sqrt{1-\tfrac14} \\[4pt]
& &=& \sqrt{\tfrac34} \\[4pt]
& &=& \tfrac{\sqrt3}{2}
\end{array}
\qquad
\begin{array}{lrcl}
& \cos\beta &=& \sqrt{1-\sin^2\beta} \\[4pt]
& &=& \sqrt{1-\tfrac{9}{25}} \\[4pt]
& &=& \sqrt{\tfrac{16}{25}} \\[4pt]
& &=& \tfrac45
\end{array}
$$

Using the sum formula for sine,

$$
\begin{array}{lrcl}
& \sin\left(\cos^{-1}\tfrac12+\sin^{-1}\tfrac35\right) &=& \sin(\alpha+\beta) \\[4pt]
& &=& \sin\alpha\cos\beta+\cos\alpha\sin\beta \\[4pt]
& &=& \tfrac{\sqrt3}{2}\cdot\tfrac45+\tfrac12\cdot\tfrac35 \\[4pt]
& &=& \tfrac{4\sqrt3+3}{10}
\end{array}
$$

## Using the Sum and Difference Formulas for Tangent

Finding exact values for the tangent of the sum or difference of two angles is a little more complicated, but again, it is a matter of recognizing the pattern.

Finding the sum of two angles formula for tangent involves taking the quotient of the sum formulas for sine and cosine and simplifying. Recall, $\tan x=\tfrac{\sin x}{\cos x},\ \cos x\ne0$.

Let's derive the sum formula for tangent.

$$
\begin{array}{lrcl}
& \tan(\alpha+\beta) &=& \tfrac{\sin(\alpha+\beta)}{\cos(\alpha+\beta)} \\[4pt]
& &=& \tfrac{\sin\alpha\cos\beta+\cos\alpha\sin\beta}{\cos\alpha\cos\beta-\sin\alpha\sin\beta} \\[4pt]
\text{Divide the numerator and denominator by }\cos\alpha\cos\beta. & &=& \cfrac{\tfrac{\sin\alpha\cos\beta+\cos\alpha\sin\beta}{\cos\alpha\cos\beta}}{\tfrac{\cos\alpha\cos\beta-\sin\alpha\sin\beta}{\cos\alpha\cos\beta}} \\[10pt]
& &=& \cfrac{\tfrac{\sin\alpha\cos\beta}{\cos\alpha\cos\beta}+\tfrac{\cos\alpha\sin\beta}{\cos\alpha\cos\beta}}{\tfrac{\cos\alpha\cos\beta}{\cos\alpha\cos\beta}-\tfrac{\sin\alpha\sin\beta}{\cos\alpha\cos\beta}} \\[10pt]
& &=& \cfrac{\tfrac{\sin\alpha}{\cos\alpha}+\tfrac{\sin\beta}{\cos\beta}}{1-\tfrac{\sin\alpha\sin\beta}{\cos\alpha\cos\beta}} \\[10pt]
& &=& \tfrac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta}
\end{array}
$$

We can derive the difference formula for tangent in a similar way.

{{< callout type="info" >}}
  **Sum and Difference Formulas for Tangent.**

  The **sum and difference formulas for tangent** are:

  $$\tan(\alpha+\beta)=\tfrac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta}$$

  $$\tan(\alpha-\beta)=\tfrac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given two angles, find the tangent of the sum of the angles.

  1. Write the sum formula for tangent.
  2. Substitute the given angles into the formula.
  3. Simplify.
{{< /callout >}}

**Example.** Find the exact value of $\tan\left(\tfrac{\pi}{6}+\tfrac{\pi}{4}\right)$.

**Solution.** Let's first write the sum formula for tangent and substitute the given angles into the formula.

$$
\begin{array}{lrcl}
& \tan(\alpha+\beta) &=& \tfrac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta} \\[4pt]
& \tan\left(\tfrac{\pi}{6}+\tfrac{\pi}{4}\right) &=& \tfrac{\tan\left(\tfrac{\pi}{6}\right)+\tan\left(\tfrac{\pi}{4}\right)}{1-\left(\tan\left(\tfrac{\pi}{6}\right)\right)\left(\tan\left(\tfrac{\pi}{4}\right)\right)}
\end{array}
$$

Next, we determine the individual tangents within the formula:

$$\tan\left(\tfrac{\pi}{6}\right)=\tfrac{1}{\sqrt3},\qquad\tan\left(\tfrac{\pi}{4}\right)=1$$

So we have

$$
\begin{array}{lrcl}
& \tan\left(\tfrac{\pi}{6}+\tfrac{\pi}{4}\right) &=& \cfrac{\tfrac{1}{\sqrt3}+1}{1-\left(\tfrac{1}{\sqrt3}\right)(1)} \\[10pt]
& &=& \cfrac{\tfrac{1+\sqrt3}{\sqrt3}}{\tfrac{\sqrt3-1}{\sqrt3}} \\[10pt]
& &=& \tfrac{1+\sqrt3}{\sqrt3}\left(\tfrac{\sqrt3}{\sqrt3-1}\right) \\[4pt]
& &=& \tfrac{\sqrt3+1}{\sqrt3-1}
\end{array}
$$

{{< fillin
  question="Find the exact value of $\tan\left(\tfrac{2\pi}{3}+\tfrac{\pi}{4}\right)$."
  answer="\frac{1-\sqrt3}{1+\sqrt3}"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{1-\sqrt3}{1+\sqrt3}$"
  hint="Write the sum formula for tangent, substitute $\alpha=\tfrac{2\pi}{3}$ and $\beta=\tfrac{\pi}{4}$, then evaluate each tangent."
>}}

**Example.** Given $\sin\alpha=\tfrac35,\ 0<\alpha<\tfrac{\pi}{2},\ \cos\beta=-\tfrac{5}{13},\ \pi<\beta<\tfrac{3\pi}{2}$, find

ⓐ $\sin(\alpha+\beta)$  ⓑ $\cos(\alpha+\beta)$  ⓒ $\tan(\alpha+\beta)$  ⓓ $\tan(\alpha-\beta)$

**Solution.** We can use the sum and difference formulas to identify the sum or difference of angles when the ratio of sine, cosine, or tangent is provided for each of the individual angles. To do so, we construct what is called a reference triangle to help find each component of the sum and difference formulas.

ⓐ To find $\sin(\alpha+\beta)$, we begin with $\sin\alpha=\tfrac35$ and $0<\alpha<\tfrac{\pi}{2}$. The side opposite $\alpha$ has length 3, the hypotenuse has length 5, and $\alpha$ is in the first quadrant. See the figure below. Using the Pythagorean Theorem, we can find the length of side $a$:

$$
\begin{array}{lrcl}
& a^2+3^2 &=& 5^2 \\[4pt]
& a^2 &=& 16 \\[4pt]
& a &=& 4
\end{array}
$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"A right triangle in the coordinate plane with vertices at the origin, (4, 0), and (4, 3), a right angle at (4, 0), angle alpha at the origin, and hypotenuse of length 5.","xMin":-1,"xMax":5.5,"yMin":-1,"yMax":4,"grid":false,"tickLabels":false,"unit":75,"segments":[{"from":[0,0],"to":[4,0]},{"from":[4,0],"to":[4,3]},{"from":[0,0],"to":[4,3],"label":"5"}],"points":[{"at":[4,3],"label":"(4, 3)"},{"at":[4,0],"label":"(4, 0)"}],"circles":[{"at":[0,0],"r":0.6,"from":0,"to":36.87}],"texts":[{"at":[0.62,0.16],"text":"α"}]}
{{< /apfigure >}}

Since $\cos\beta=-\tfrac{5}{13}$ and $\pi<\beta<\tfrac{3\pi}{2}$, the side adjacent to $\beta$ is $-5$, the hypotenuse is 13, and $\beta$ is in the third quadrant. See the figure below. Again, using the Pythagorean Theorem, we have

$$
\begin{array}{lrcl}
& (-5)^2+a^2 &=& 13^2 \\[4pt]
& 25+a^2 &=& 169 \\[4pt]
& a^2 &=& 144 \\[4pt]
& a &=& \pm12
\end{array}
$$

Since $\beta$ is in the third quadrant, $a=-12$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A right triangle in the coordinate plane with vertices at the origin, (-5, 0), and (-5, -12), a right angle at (-5, 0), the standard-position angle beta swept from the positive x-axis to the hypotenuse, and hypotenuse of length 13.","xMin":-7,"xMax":2,"yMin":-13,"yMax":2,"grid":false,"tickLabels":false,"unit":38,"segments":[{"from":[0,0],"to":[-5,0]},{"from":[-5,0],"to":[-5,-12]},{"from":[0,0],"to":[-5,-12],"label":"13"}],"points":[{"at":[-5,0],"label":"(−5, 0)"},{"at":[-5,-12],"label":"(−5, −12)"}],"circles":[{"at":[0,0],"r":0.9,"from":0,"to":247.38}],"texts":[{"at":[0.55,-0.75],"text":"β"}]}
{{< /apfigure >}}

The next step is finding the cosine of $\alpha$ and the sine of $\beta$. The cosine of $\alpha$ is the adjacent side over the hypotenuse. We can find it from the triangle above: $\cos\alpha=\tfrac45$. We can also find the sine of $\beta$ from the triangle above, as opposite side over the hypotenuse: $\sin\beta=-\tfrac{12}{13}$. Now we are ready to evaluate $\sin(\alpha+\beta)$.

$$
\begin{array}{lrcl}
& \sin(\alpha+\beta) &=& \sin\alpha\cos\beta+\cos\alpha\sin\beta \\[4pt]
& &=& \left(\tfrac35\right)\left(-\tfrac{5}{13}\right)+\left(\tfrac45\right)\left(-\tfrac{12}{13}\right) \\[4pt]
& &=& -\tfrac{15}{65}-\tfrac{48}{65} \\[4pt]
& &=& -\tfrac{63}{65}
\end{array}
$$

ⓑ We can find $\cos(\alpha+\beta)$ in a similar manner. We substitute the values according to the formula.

$$
\begin{array}{lrcl}
& \cos(\alpha+\beta) &=& \cos\alpha\cos\beta-\sin\alpha\sin\beta \\[4pt]
& &=& \left(\tfrac45\right)\left(-\tfrac{5}{13}\right)-\left(\tfrac35\right)\left(-\tfrac{12}{13}\right) \\[4pt]
& &=& -\tfrac{20}{65}+\tfrac{36}{65} \\[4pt]
& &=& \tfrac{16}{65}
\end{array}
$$

ⓒ For $\tan(\alpha+\beta)$, if $\sin\alpha=\tfrac35$ and $\cos\alpha=\tfrac45$, then

$$\tan\alpha=\tfrac{\tfrac35}{\tfrac45}=\tfrac34$$

If $\sin\beta=-\tfrac{12}{13}$ and $\cos\beta=-\tfrac{5}{13}$, then

$$\tan\beta=\tfrac{-\tfrac{12}{13}}{-\tfrac{5}{13}}=\tfrac{12}{5}$$

Then,

$$
\begin{array}{lrcl}
& \tan(\alpha+\beta) &=& \tfrac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta} \\[10pt]
& &=& \cfrac{\tfrac34+\tfrac{12}{5}}{1-\tfrac34\left(\tfrac{12}{5}\right)} \\[10pt]
& &=& \cfrac{\tfrac{63}{20}}{-\tfrac{16}{20}} \\[10pt]
& &=& -\tfrac{63}{16}
\end{array}
$$

ⓓ To find $\tan(\alpha-\beta)$, we have the values we need. We can substitute them in and evaluate.

$$
\begin{array}{lrcl}
& \tan(\alpha-\beta) &=& \tfrac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta} \\[10pt]
& &=& \cfrac{\tfrac34-\tfrac{12}{5}}{1+\tfrac34\left(\tfrac{12}{5}\right)} \\[10pt]
& &=& \cfrac{-\tfrac{33}{20}}{\tfrac{56}{20}} \\[10pt]
& &=& -\tfrac{33}{56}
\end{array}
$$

**Analysis.** A common mistake when addressing problems such as this one is that we may be tempted to think that $\alpha$ and $\beta$ are angles in the same triangle, which of course, they are not. Also note that

$$\tan(\alpha+\beta)=\tfrac{\sin(\alpha+\beta)}{\cos(\alpha+\beta)}$$

## Using Sum and Difference Formulas for Cofunctions

Now that we can find the sine, cosine, and tangent functions for the sums and differences of angles, we can use them to do the same for their cofunctions. You may recall from Right Triangle Trigonometry that, if the sum of two positive angles is $\tfrac{\pi}{2}$, those two angles are complements, and the sum of the two acute angles in a right triangle is $\tfrac{\pi}{2}$, so they are also complements. In the figure below, notice that if one of the acute angles is labeled as $\theta$, then the other acute angle must be labeled $\left(\tfrac{\pi}{2}-\theta\right)$.

Notice also that $\sin\theta=\cos\left(\tfrac{\pi}{2}-\theta\right)$: opposite over hypotenuse. Thus, when two angles are complementary, we can say that the sine of $\theta$ equals the **cofunction** of the complement of $\theta$. Similarly, tangent and cotangent are cofunctions, and secant and cosecant are cofunctions.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with angle theta at the bottom-left vertex, the right angle at the bottom-right vertex, and the angle pi over 2 minus theta at the top vertex.","unit":70,"polygons":[{"points":[[0,0],[3,0],[3,5]],"vertexLabels":["θ",null,"π/2 − θ"],"rightAngles":[1]}]}
{{< /apfigure >}}

From these relationships, the **cofunction identities** are formed.

{{< callout type="info" >}}
  **Cofunction Identities.**

  | $\sin\theta=\cos\left(\tfrac{\pi}{2}-\theta\right)$ | $\cos\theta=\sin\left(\tfrac{\pi}{2}-\theta\right)$ |
  | :--- | :--- |
  | $\tan\theta=\cot\left(\tfrac{\pi}{2}-\theta\right)$ | $\cot\theta=\tan\left(\tfrac{\pi}{2}-\theta\right)$ |
  | $\sec\theta=\csc\left(\tfrac{\pi}{2}-\theta\right)$ | $\csc\theta=\sec\left(\tfrac{\pi}{2}-\theta\right)$ |
{{< /callout >}}

Notice that the formulas in the table may also be justified algebraically using the sum and difference formulas. For example, using

$$\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta,$$

we can write

$$
\begin{array}{lrcl}
& \cos\left(\tfrac{\pi}{2}-\theta\right) &=& \cos\tfrac{\pi}{2}\cos\theta+\sin\tfrac{\pi}{2}\sin\theta \\[4pt]
& &=& (0)\cos\theta+(1)\sin\theta \\[4pt]
& &=& \sin\theta
\end{array}
$$

**Example.** Write $\tan\tfrac{\pi}{9}$ in terms of its cofunction.

**Solution.** The cofunction of $\tan\theta=\cot\left(\tfrac{\pi}{2}-\theta\right)$. Thus,

$$
\begin{array}{lrcl}
& \tan\left(\tfrac{\pi}{9}\right) &=& \cot\left(\tfrac{\pi}{2}-\tfrac{\pi}{9}\right) \\[4pt]
& &=& \cot\left(\tfrac{9\pi}{18}-\tfrac{2\pi}{18}\right) \\[4pt]
& &=& \cot\left(\tfrac{7\pi}{18}\right)
\end{array}
$$

{{< multiplechoice
  question="Write $\sin\tfrac{\pi}{7}$ in terms of its cofunction."
  answer="\cos(5\pi/14)"
  hint="A cofunction rewrite replaces $\sin\theta$ with $\cos\left(\tfrac{\pi}{2}-\theta\right)$; compute $\tfrac{\pi}{2}-\tfrac{\pi}{7}$ with a common denominator of 14."
>}}
\cos(5\pi/14)
\cos(2\pi/7)
\cos(\pi/14)
\sin(5\pi/14)
{{< /multiplechoice >}}

## Using the Sum and Difference Formulas to Verify Identities

Verifying an identity means demonstrating that the equation holds for all values of the variable. It helps to be very familiar with the identities or to have a list of them accessible while working the problems. Reviewing the general rules from Simplifying and Verifying Trigonometric Identities may help simplify the process of verifying an identity.

{{< callout type="info" >}}
  **How to:** given an identity, verify using sum and difference formulas.

  1. Begin with the expression on the side of the equal sign that appears most complex. Rewrite that expression until it matches the other side of the equal sign. Occasionally, we might have to alter both sides, but working on only one side is the most efficient.
  2. Look for opportunities to use the sum and difference formulas.
  3. Rewrite sums or differences of quotients as single quotients.
  4. If the process becomes cumbersome, rewrite the expression in terms of sines and cosines.
{{< /callout >}}

**Example.** Verify the identity $\sin(\alpha+\beta)+\sin(\alpha-\beta)=2\sin\alpha\cos\beta$.

**Solution.** We see that the left side of the equation includes the sines of the sum and the difference of angles.

$$
\begin{array}{l}
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta \\
\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta
\end{array}
$$

We can rewrite each using the sum and difference formulas.

$$
\begin{array}{lrcl}
& \sin(\alpha+\beta)+\sin(\alpha-\beta) &=& \sin\alpha\cos\beta+\cos\alpha\sin\beta+\sin\alpha\cos\beta-\cos\alpha\sin\beta \\[4pt]
& &=& 2\sin\alpha\cos\beta
\end{array}
$$

We see that the identity is verified.

**Example.** Verify the following identity.

$$\tfrac{\sin(\alpha-\beta)}{\cos\alpha\cos\beta}=\tan\alpha-\tan\beta$$

**Solution.** We can begin by rewriting the numerator on the left side of the equation.

$$
\begin{array}{lrcl}
\text{} & \tfrac{\sin(\alpha-\beta)}{\cos\alpha\cos\beta} &=& \tfrac{\sin\alpha\cos\beta-\cos\alpha\sin\beta}{\cos\alpha\cos\beta} \\[8pt]
\text{Rewrite using a common denominator.} & &=& \tfrac{\sin\alpha\cos\beta}{\cos\alpha\cos\beta}-\tfrac{\cos\alpha\sin\beta}{\cos\alpha\cos\beta} \\[8pt]
\text{Cancel.} & &=& \tfrac{\sin\alpha}{\cos\alpha}-\tfrac{\sin\beta}{\cos\beta} \\[8pt]
\text{Rewrite in terms of tangent.} & &=& \tan\alpha-\tan\beta
\end{array}
$$

We see that the identity is verified. In many cases, verifying tangent identities can successfully be accomplished by writing the tangent in terms of sine and cosine.

{{< multiplechoice
  question="Which of the following is equivalent to $\tan(\pi-\theta)$ for every $\theta$ in its domain?"
  answer="-\tan\theta"
  hint="Write the difference formula for tangent with $\alpha=\pi$ and $\beta=\theta$, and use $\tan\pi=0$."
>}}
-\tan\theta
\tan\theta
\cot\theta
-\cot\theta
{{< /multiplechoice >}}

**Example.** Let $L_1$ and $L_2$ denote two non-vertical intersecting lines, and let $\theta$ denote the acute angle between $L_1$ and $L_2$. See the figure below. Show that

$$\tan\theta=\tfrac{m_1-m_2}{1+m_1m_2}$$

where $m_1$ and $m_2$ are the slopes of $L_1$ and $L_2$ respectively. (**Hint:** Use the fact that $\tan\theta_1=m_1$ and $\tan\theta_2=m_2$.)

{{< callout type="info" >}}
  **Source note.** The source states this goal as $\tan\theta=\tfrac{m_2-m_1}{1+m_1m_2}$, but its own solution — reproduced below — sets $\theta=\theta_1-\theta_2$ and derives $\tfrac{m_1-m_2}{1+m_1m_2}$, the negative of that statement, and its figure (recreated here) draws $\theta_1>\theta_2$, which matches the derivation. This page states the goal the solution actually proves; the mathematics of the derivation is unchanged.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two non-vertical lines L1 and L2 crossing the x-axis at different points near the origin and intersecting each other above it; theta1 marks the angle L1 makes with the positive x-axis, theta2 marks the angle L2 makes with the positive x-axis, and theta marks the acute angle between L1 and L2 at their intersection.","xMin":-2,"xMax":2.2,"yMin":-1,"yMax":2.5,"grid":false,"tickLabels":false,"unit":150,"lines":[{"slope":1,"intercept":0.3,"label":"L2"},{"slope":3,"intercept":-1.5,"label":"L1"}],"circles":[{"at":[0.5,0],"r":0.3,"from":0,"to":71.57},{"at":[-0.3,0],"r":0.3,"from":0,"to":45},{"at":[0.9,1.2],"r":0.3,"from":225,"to":251.57}],"texts":[{"at":[0.82,0.16],"text":"θ1"},{"at":[-0.55,0.15],"text":"θ2"},{"at":[0.75,1.45],"text":"θ"}]}
{{< /apfigure >}}

**Solution.** Using the difference formula for tangent, this problem does not seem as daunting as it might.

$$
\begin{array}{lrcl}
& \tan\theta &=& \tan(\theta_1-\theta_2) \\[4pt]
& &=& \tfrac{\tan\theta_1-\tan\theta_2}{1+\tan\theta_1\tan\theta_2} \\[4pt]
& &=& \tfrac{m_1-m_2}{1+m_1m_2}
\end{array}
$$

**Example.** For a climbing wall, a guy-wire $R$ is attached 47 feet high on a vertical pole. Added support is provided by another guy-wire $S$ attached 40 feet above ground on the same pole. If the wires are attached to the ground 50 feet from the pole, find the angle $\alpha$ between the wires. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vertical pole with guy-wire R attached 47 feet high and guy-wire S attached 40 feet high, both running down to a common point on the ground 50 feet from the pole. Angle beta is the angle wire R makes with the ground, and angle alpha is the angle between the two wires.","xMin":-10,"xMax":55,"yMin":-5,"yMax":50,"grid":false,"tickLabels":false,"unit":15,"segments":[{"from":[0,0],"to":[0,47]},{"from":[0,47],"to":[50,0],"label":"R","labelSide":"n"},{"from":[0,40],"to":[50,0],"label":"S","labelSide":"s"},{"from":[0,0],"to":[50,0],"label":"50 ft"}],"points":[{"at":[0,47],"label":"47 ft"},{"at":[0,40],"label":"40 ft"}],"circles":[{"at":[50,0],"r":9,"from":136.77,"to":180},{"at":[50,0],"r":12,"from":136.77,"to":141.34}],"texts":[{"at":[38.5,2.4],"text":"β"},{"at":[40.5,9.2],"text":"α"}]}
{{< /apfigure >}}

**Solution.** Let's first summarize the information we can gather from the diagram. As only the sides adjacent to the right angle are known, we can use the tangent function. Notice that $\tan\beta=\tfrac{47}{50}$, and $\tan(\beta-\alpha)=\tfrac{40}{50}=\tfrac45$. We can then use the difference formula for tangent.

$$\tan(\beta-\alpha)=\tfrac{\tan\beta-\tan\alpha}{1+\tan\beta\tan\alpha}$$

Now, substituting the values we know into the formula, we have

$$
\begin{array}{lrcl}
& \tfrac45 &=& \cfrac{\tfrac{47}{50}-\tan\alpha}{1+\tfrac{47}{50}\tan\alpha} \\[10pt]
& 4\left(1+\tfrac{47}{50}\tan\alpha\right) &=& 5\left(\tfrac{47}{50}-\tan\alpha\right)
\end{array}
$$

Use the distributive property, and then simplify the functions.

$$
\begin{array}{lrcl}
& 4(1)+4\left(\tfrac{47}{50}\right)\tan\alpha &=& 5\left(\tfrac{47}{50}\right)-5\tan\alpha \\[4pt]
& 4+3.76\tan\alpha &=& 4.7-5\tan\alpha \\[4pt]
& 5\tan\alpha+3.76\tan\alpha &=& 0.7 \\[4pt]
& 8.76\tan\alpha &=& 0.7 \\[4pt]
& \tan\alpha &\approx& 0.07991 \\[4pt]
& \tan^{-1}(0.07991) &\approx& 0.079741
\end{array}
$$

Now we can calculate the angle in degrees.

$$\alpha\approx0.079741\left(\tfrac{180}{\pi}\right)\approx4.57^\circ$$

**Analysis.** Occasionally, when an application appears that includes a right triangle, we may think that solving is a matter of applying the Pythagorean Theorem. That may be partially true, but it depends on what the problem is asking and what information is given.

## Key equations

| Sum formula for cosine | $\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta$ |
| :--- | :--- |
| Difference formula for cosine | $\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta$ |
| Sum formula for sine | $\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta$ |
| Difference formula for sine | $\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta$ |
| Sum formula for tangent | $\tan(\alpha+\beta)=\tfrac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta}$ |
| Difference formula for tangent | $\tan(\alpha-\beta)=\tfrac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}$ |
| Cofunction identities | $\begin{array}{l}\sin\theta=\cos\left(\tfrac{\pi}{2}-\theta\right) \\ \cos\theta=\sin\left(\tfrac{\pi}{2}-\theta\right) \\ \tan\theta=\cot\left(\tfrac{\pi}{2}-\theta\right) \\ \cot\theta=\tan\left(\tfrac{\pi}{2}-\theta\right) \\ \sec\theta=\csc\left(\tfrac{\pi}{2}-\theta\right) \\ \csc\theta=\sec\left(\tfrac{\pi}{2}-\theta\right) \end{array}$ |

## Key concepts

- The sum formula for cosines states that the cosine of the sum of two angles equals the product of the cosines of the angles minus the product of the sines of the angles. The difference formula for cosines states that the cosine of the difference of two angles equals the product of the cosines of the angles plus the product of the sines of the angles.
- The sum and difference formulas can be used to find the exact values of the sine, cosine, or tangent of an angle.
- The sum formula for sines states that the sine of the sum of two angles equals the product of the sine of the first angle and cosine of the second angle plus the product of the cosine of the first angle and the sine of the second angle. The difference formula for sines states that the sine of the difference of two angles equals the product of the sine of the first angle and cosine of the second angle minus the product of the cosine of the first angle and the sine of the second angle.
- The sum and difference formulas for sine and cosine can also be used for inverse trigonometric functions.
- The sum formula for tangent states that the tangent of the sum of two angles equals the sum of the tangents of the angles divided by 1 minus the product of the tangents of the angles. The difference formula for tangent states that the tangent of the difference of two angles equals the difference of the tangents of the angles divided by 1 plus the product of the tangents of the angles.
- The Pythagorean Theorem along with the sum and difference formulas can be used to find multiple sums and differences of angles.
- The cofunction identities apply to complementary angles and pairs of reciprocal functions.
- Sum and difference formulas are useful in verifying identities.
- Application problems are often easier to solve by using sum and difference formulas.

## Practice

### Use sum and difference formulas for cosine.

{{< fillin
  question="Find the exact value: $\cos\left(\tfrac{\pi}{12}\right)$."
  answer="\frac{\sqrt2+\sqrt6}{4}"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{\sqrt2+\sqrt6}{4}$"
  hint="Write $\tfrac{\pi}{12}$ as $\tfrac{\pi}{3}-\tfrac{\pi}{4}$ (or $\tfrac{\pi}{4}-\tfrac{\pi}{6}$), then apply the difference formula for cosine."
>}}

{{< fillin
  question="Rewrite $\cos\left(x+\tfrac{2\pi}{3}\right)$ in terms of $\sin x$ and $\cos x$."
  answer="-\frac{1}{2}\cos x-\frac{\sqrt3}{2}\sin x"
  answerForm="expanded"
  answerDisplay="$-\tfrac12\cos x-\tfrac{\sqrt3}{2}\sin x$"
  hint="Write the sum formula for cosine with $\alpha=x$ and $\beta=\tfrac{2\pi}{3}$, then evaluate $\cos\tfrac{2\pi}{3}$ and $\sin\tfrac{2\pi}{3}$."
>}}

### Use sum and difference formulas for sine.

{{< fillin
  question="Find the exact value: $\sin\left(\tfrac{11\pi}{12}\right)$."
  answer="\frac{\sqrt6-\sqrt2}{4}"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{\sqrt6-\sqrt2}{4}$"
  hint="Write $\tfrac{11\pi}{12}$ as $\tfrac{3\pi}{4}+\tfrac{\pi}{6}$ (or $\pi-\tfrac{\pi}{12}$), then apply the sum or difference formula for sine."
>}}

{{< fillin
  question="Rewrite $\sin\left(x-\tfrac{3\pi}{4}\right)$ in terms of $\sin x$ and $\cos x$."
  answer="-\frac{\sqrt2}{2}\sin x-\frac{\sqrt2}{2}\cos x"
  answerForm="expanded"
  answerDisplay="$-\tfrac{\sqrt2}{2}\sin x-\tfrac{\sqrt2}{2}\cos x$"
  hint="Write the difference formula for sine with $\alpha=x$ and $\beta=\tfrac{3\pi}{4}$, then evaluate $\cos\tfrac{3\pi}{4}$ and $\sin\tfrac{3\pi}{4}$."
>}}

### Use sum and difference formulas for tangent.

{{< fillin
  question="Find the exact value: $\tan\left(\tfrac{19\pi}{12}\right)$."
  answer="-2-\sqrt3"
  answerForm="evaluated-trig"
  answerDisplay="$-2-\sqrt3$"
  hint="Write $\tfrac{19\pi}{12}$ as $\tfrac{4\pi}{3}+\tfrac{\pi}{4}$ (or a coterminal angle you recognize), then apply the sum or difference formula for tangent."
>}}

{{< fillin
  question="Simplify $\cfrac{\tan\left(\tfrac32 x\right)-\tan\left(\tfrac75 x\right)}{1+\tan\left(\tfrac32 x\right)\tan\left(\tfrac75 x\right)}$ to a single trigonometric function of $x$."
  answer="\tan(x/10)"
  answerForm="single-trig-function"
  answerDisplay="$\tan\left(\tfrac{x}{10}\right)$"
  hint="Recognize the right side of the difference formula for tangent, then subtract the two arguments: $\tfrac32x-\tfrac75x$."
>}}

### Use sum and difference formulas for cofunctions.

{{< multiplechoice
  question="Simplify $\sec\left(\tfrac{\pi}{2}-\theta\right)$."
  answer="\csc\theta"
  hint="Use the cofunction identity for secant: $\sec\theta=\csc\left(\tfrac{\pi}{2}-\theta\right)$, applied to the angle $\tfrac{\pi}{2}-\theta$."
>}}
\csc\theta
\sec\theta
\sin\theta
\tan\theta
{{< /multiplechoice >}}

{{< multiplechoice
  question="Simplify $\tan\left(\tfrac{\pi}{2}-x\right)$."
  answer="\cot x"
  hint="Use the cofunction identity for tangent: $\tan\theta=\cot\left(\tfrac{\pi}{2}-\theta\right)$, applied to the angle $\tfrac{\pi}{2}-x$."
>}}
\cot x
\tan x
\csc x
\sec x
{{< /multiplechoice >}}

### Use sum and difference formulas to verify identities.

{{< multiplechoice
  question="True or false: $\tan(u-v)=\tfrac{\tan u-\tan v}{1+\tan u\tan v}$ for every $u,v$ in the domain."
  answer="True"
  hint="Write $\tan(u-v)$ as $\tfrac{\sin(u-v)}{\cos(u-v)}$, expand with the sum and difference formulas, then divide numerator and denominator by $\cos u\cos v$."
>}}
True
False
{{< /multiplechoice >}}

{{< multiplechoice
  question="Use a graph to determine whether $f(x)=\sin(2x)$ and $g(x)=2\sin x\cos x$ are the same function or different functions."
  answer="Same"
  hint="Write $\sin(2x)$ as $\sin(x+x)$ and apply the sum formula for sine."
>}}
Same
Different
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 7.2: Sum and Difference Identities](https://openstax.org/books/precalculus-2e/pages/7-2-sum-and-difference-identities) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the decorative photograph of Denali (Figure 1). Recreated all seven instructional figures as accessible spec-first SVGs: the unit circle of special angles (Figure 2), reusing the coordinate-labeled unit circle already authored for Section 5.2 with its degree/radian ray labels omitted, since the (cosine, sine) coordinates alone carry this figure's reason for being shown here (deriving the sum and difference formulas), and every special angle's degree and radian measure is transcribed in full in Sections 5.2 and 5.3; the difference-formula proof diagram (Figure 3), rebuilt with representative angles $\alpha=140^\circ$, $\beta=20^\circ$ standing in for the source's generic $\alpha,\beta$, since the proof depends only on the two points' being distinct and in general position, not on their specific measures; the two reference-triangle figures for Example 6 (Figures 4–5); the cofunction right triangle (Figure 6); the two-line application diagram (Figure 7); and the guy-wire diagram (Figure 8), with the source's separate dashed horizontal reference ray for angles $\alpha$ and $\beta$ replaced by the solid $50$-foot ground segment itself, which is both the same reference direction and the segment the problem already measures. Every retained Try It became a real `fillin` or `multiplechoice` component. Two Try Its whose printed subject is itself a single trigonometric application of a cofunction- or supplement-related argument — "write $\sin\tfrac{\pi}{7}$ in terms of its cofunction" and "verify $\tan(\pi-\theta)=-\tan\theta$" — were authored as `multiplechoice` rather than `fillin`: since both the printed subject and the keyed answer are exactly one trigonometric application of the variable, the grader's `single-trig-function` token cannot refuse a learner who simply retypes the prompt, so the response mode changed instead of the token; the corresponding cofunction Practice items ($\sec\left(\tfrac{\pi}{2}-\theta\right)$, $\tan\left(\tfrac{\pi}{2}-x\right)$) received the same adaptation. One Extension "prove or disprove" item and one Graphical "same or different" item, adapted into the closing Practice block's verify-identities group, were changed from free-response proofs to `multiplechoice` for the same reason a proof has no gradable free-response answer; their keyed alternative is the source's own printed solution ("True" / "They are the same"). Omitted the "Access these online resources" media links. The two-line application example's stated goal is corrected from the source's $\tfrac{m_2-m_1}{1+m_1m_2}$ to the $\tfrac{m_1-m_2}{1+m_1m_2}$ its own solution derives and its own figure supports, with a visible Source note beside the statement (the source's stated goal is the negative of what its solution proves). The five source Try Its (three `fillin`, two `multiplechoice`) were transcribed as in-page practice following their examples; ten further end-of-section exercises — two per objective, covering exact-value evaluation, rewriting in terms of $\sin x$ and $\cos x$, a tangent-difference simplification, cofunction simplification, and identity/graph-comparison recognition — were adapted into the closing Practice block, one group per objective.</small>
