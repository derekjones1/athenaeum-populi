---
title: Right Triangle Trigonometry
description: >-
  Defining the six trigonometric functions as ratios of a right triangle's
  sides, evaluating them at the special angles $30^\circ$, $45^\circ$, and $60^\circ$,
  applying cofunction identities for complementary angles, and using right
  triangle trigonometry to solve for unknown sides and applied heights and
  distances — adapted from OpenStax Precalculus 2e, Section 5.4.
source_section: "5.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use right triangles to evaluate trigonometric functions
- Find function values for $30^\circ\left(\tfrac{\pi}{6}\right)$, $45^\circ\left(\tfrac{\pi}{4}\right)$, and $60^\circ\left(\tfrac{\pi}{3}\right)$
- Use cofunctions of complementary angles
- Use the definitions of trigonometric functions of any angle
- Use right triangle trigonometry to solve applied problems
{{< /callout >}}

We have previously defined the sine and cosine of an angle in terms of the coordinates of a point on the unit circle intersected by the terminal side of the angle:

$$
\begin{array}{l}
\cos t=x \\
\sin t=y
\end{array}
$$

In this section, we will see another way to define trigonometric functions using properties of **right triangles**.

## Using Right Triangles to Evaluate Trigonometric Functions

In earlier sections, we used a unit circle to define the **trigonometric functions**. In this section, we will extend those definitions so that we can apply them to right triangles. The value of the sine or cosine function of $t$ is its value at $t$ radians. First, we need to create our right triangle. The figure below shows a point on a **unit circle** of radius 1. If we drop a vertical line segment from the point $(x,y)$ to the $x$-axis, we have a right triangle whose vertical side has length $y$ and whose horizontal side has length $x$. We can use this right triangle to redefine sine, cosine, and the other trigonometric functions as ratios of the sides of a right triangle.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A quarter circle of radius 1 in the first quadrant, with the terminal side of angle t meeting it at the point (x, y). A vertical segment drops from (x, y) to the x-axis, forming a right triangle with horizontal leg x, vertical leg y, and hypotenuse 1.","xMin":-0.3,"xMax":1.3,"yMin":-0.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":220,"circles":[{"at":[0,0],"r":1,"from":0,"to":90},{"at":[0,0],"r":0.3,"from":0,"to":40}],"segments":[{"from":[0,0],"to":[0.766,0.643]},{"from":[0.766,0.643],"to":[0.766,0]},{"from":[0,0],"to":[0.766,0]}],"points":[{"at":[0.766,0.643]}],"texts":[{"at":[0.4,0.36],"text":"1"},{"at":[0.16,0.07],"text":"t"},{"at":[0.82,0.32],"text":"y"},{"at":[0.35,-0.14],"text":"x"}]}
{{< /apfigure >}}

We know

$$\cos t=\tfrac{x}{1}=x$$

Likewise, we know

$$\sin t=\tfrac{y}{1}=y$$

These ratios still apply to the sides of a right triangle when no unit circle is involved and when the triangle is not in standard position and is not being graphed using $(x,y)$ coordinates. To be able to use these ratios freely, we will give the sides more general names: Instead of $x$, we will call the side between the given angle and the right angle the **adjacent side** to angle $t$. (Adjacent means "next to.") Instead of $y$, we will call the side most distant from the given angle the **opposite side** from angle $t$. And instead of $1$, we will call the side of a right triangle opposite the right angle the **hypotenuse**. These sides are labeled in the figure below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with the right angle at one vertex, angle t at another vertex. The side between them is labeled adjacent, the side opposite angle t is labeled opposite, and the side opposite the right angle is labeled hypotenuse.","unit":45,"polygons":[{"points":[[0,0],[4,0],[0,3]],"edgeLabels":["adjacent","hypotenuse","opposite"],"vertexLabels":[null,"t",null],"rightAngles":[0]}]}
{{< /apfigure >}}

### Understanding Right Triangle Relationships

Given a right triangle with an acute angle of $t$,

$$
\begin{array}{l}
\sin(t)=\tfrac{\text{opposite}}{\text{hypotenuse}} \\
\cos(t)=\tfrac{\text{adjacent}}{\text{hypotenuse}} \\
\tan(t)=\tfrac{\text{opposite}}{\text{adjacent}}
\end{array}
$$

A common mnemonic for remembering these relationships is SohCahToa, formed from the first letters of "**S**ine is **o**pposite over **h**ypotenuse, **C**osine is **a**djacent over **h**ypotenuse, **T**angent is **o**pposite over **a**djacent."

{{< callout type="info" >}}
  **How To:** given the side lengths of a right triangle and one of the acute angles, find the sine, cosine, and tangent of that angle.

  1. Find the sine as the ratio of the opposite side to the hypotenuse.
  2. Find the cosine as the ratio of the adjacent side to the hypotenuse.
  3. Find the tangent as the ratio of the opposite side to the adjacent side.
{{< /callout >}}

**Example.** Given the triangle shown below, find the value of $\cos\alpha$.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with the right angle at one vertex, angle alpha at another vertex, adjacent side 15, opposite side 8, and hypotenuse 17.","unit":12,"polygons":[{"points":[[0,0],[15,0],[15,8]],"edgeLabels":["15","8","17"],"vertexLabels":["α",null,null],"rightAngles":[1]}]}
{{< /apfigure >}}

**Solution.** The side adjacent to the angle is 15, and the hypotenuse of the triangle is 17, so:

$$
\begin{array}{lrcl}
& \cos(\alpha) &=& \tfrac{\text{adjacent}}{\text{hypotenuse}} \\[4pt]
& &=& \tfrac{15}{17}
\end{array}
$$

{{< fillin
  question="Given the triangle shown below, find the value of $\sin t$."
  answer="7/25"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{7}{25}$"
  hint="Sine is the ratio of the opposite side to the hypotenuse."
>}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with the right angle at one vertex, angle t at another vertex, adjacent side 24, opposite side 7, and hypotenuse 25.","unit":8,"polygons":[{"points":[[0,0],[24,0],[0,7]],"edgeLabels":["24","25","7"],"vertexLabels":[null,"t",null],"rightAngles":[0]}]}
{{< /apfigure >}}

## Relating Angles and Their Functions

When working with right triangles, the same rules apply regardless of the orientation of the triangle. In fact, we can evaluate the six trigonometric functions of either of the two acute angles in the triangle below. The side opposite one acute angle is the side adjacent to the other acute angle, and vice versa.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle drawn tilted, not in standard position: the right angle is at the top vertex, angle alpha at the lower-left vertex, and angle beta at the right vertex. The leg from alpha up to the right angle is labelled adjacent to alpha, opposite beta; the leg from the right angle down to beta is labelled adjacent to beta, opposite alpha; the long side joining alpha to beta is labelled hypotenuse.","unit":45,"polygons":[{"points":[[0,0],[2.413,3.19],[4.806,1.378]],"edgeLabels":["Adjacent to α, Opposite β","Adjacent to β, Opposite α","Hypotenuse"],"vertexLabels":["α",null,"β"],"rightAngles":[1]}]}
{{< /apfigure >}}

The side adjacent to one angle is opposite the other. We will be asked to find all six trigonometric functions for a given angle in a triangle. Our strategy is to find the sine, cosine, and tangent of the angles first. Then, we can find the other trigonometric functions easily because we know that the reciprocal of sine is cosecant, the reciprocal of cosine is secant, and the reciprocal of tangent is cotangent.

{{< callout type="info" >}}
  **How To:** given the side lengths of a right triangle, evaluate the six trigonometric functions of one of the acute angles.

  1. If needed, draw the right triangle and label the angle provided.
  2. Identify the angle, the adjacent side, the side opposite the angle, and the hypotenuse of the right triangle.
  3. Find the required function:
     - sine as the ratio of the opposite side to the hypotenuse
     - cosine as the ratio of the adjacent side to the hypotenuse
     - tangent as the ratio of the opposite side to the adjacent side
     - secant as the ratio of the hypotenuse to the adjacent side
     - cosecant as the ratio of the hypotenuse to the opposite side
     - cotangent as the ratio of the adjacent side to the opposite side
{{< /callout >}}

**Example.** Using the triangle shown below, evaluate $\sin\alpha$, $\cos\alpha$, $\tan\alpha$, $\sec\alpha$, $\csc\alpha$, and $\cot\alpha$.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle drawn tilted, not in standard position: the right angle is at the top vertex and angle alpha at the lower-left vertex. The leg from alpha to the right angle is 3, the leg from the right angle to the third vertex is 4, and the hypotenuse joining alpha to that vertex is 5.","unit":45,"polygons":[{"points":[[0,0],[1.067,2.804],[4.806,1.378]],"edgeLabels":["3","4","5"],"vertexLabels":["α",null,null],"rightAngles":[1]}]}
{{< /apfigure >}}

**Solution.**

$$
\begin{array}{lrcl}
& \sin\alpha=\tfrac{\text{opposite }\alpha}{\text{hypotenuse}} &=& \tfrac{4}{5} \\[4pt]
& \cos\alpha=\tfrac{\text{adjacent to }\alpha}{\text{hypotenuse}} &=& \tfrac{3}{5} \\[4pt]
& \tan\alpha=\tfrac{\text{opposite }\alpha}{\text{adjacent to }\alpha} &=& \tfrac{4}{3} \\[4pt]
& \sec\alpha=\tfrac{\text{hypotenuse}}{\text{adjacent to }\alpha} &=& \tfrac{5}{3} \\[4pt]
& \csc\alpha=\tfrac{\text{hypotenuse}}{\text{opposite }\alpha} &=& \tfrac{5}{4} \\[4pt]
& \cot\alpha=\tfrac{\text{adjacent to }\alpha}{\text{opposite }\alpha} &=& \tfrac{3}{4}
\end{array}
$$

{{< fillin
  question="Using the triangle shown below, evaluate $\sin t$, $\cos t$, $\tan t$, $\sec t$, $\csc t$, and $\cot t$, in that order, separated by commas."
  answer="33/65,56/65,33/56,65/56,65/33,56/33"
  answerForm="evaluated-trig"
  answerDisplay="$\sin t=\tfrac{33}{65}$, $\cos t=\tfrac{56}{65}$, $\tan t=\tfrac{33}{56}$, $\sec t=\tfrac{65}{56}$, $\csc t=\tfrac{65}{33}$, $\cot t=\tfrac{56}{33}$"
  hint="Sine, cosine, and tangent come first from the opposite, adjacent, and hypotenuse; the last three are their reciprocals in that same order."
>}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with the right angle at the upper-right vertex and angle t at the upper-left vertex. The top side joining them is 56, the vertical side down from the right angle is 33, and the hypotenuse running back up to t is 65.","unit":3.2,"polygons":[{"points":[[0,0],[56,0],[56,-33]],"edgeLabels":["56","33","65"],"vertexLabels":["t",null,null],"rightAngles":[1]}]}
{{< /apfigure >}}

## Finding Trigonometric Functions of Special Angles Using Side Lengths

We have already discussed the trigonometric functions as they relate to the **special angles** on the unit circle. Now, we can use those relationships to evaluate triangles that contain those special angles. We do this because when we evaluate the special angles in trigonometric functions, they have relatively friendly values, values that contain either no or just one square root in the ratio. Therefore, these are the angles often used in math and science problems. We will use multiples of $30^\circ$, $60^\circ$, and $45^\circ$, however, remember that when dealing with right triangles, we are limited to angles between $0^\circ$ and $90^\circ$.

Suppose we have a $30^\circ,60^\circ,90^\circ$ triangle, which can also be described as a $\tfrac{\pi}{6},\tfrac{\pi}{3},\tfrac{\pi}{2}$ triangle. The sides have lengths in the relation $s,\sqrt3s,2s$. The sides of a $45^\circ,45^\circ,90^\circ$ triangle, which can also be described as a $\tfrac{\pi}{4},\tfrac{\pi}{4},\tfrac{\pi}{2}$ triangle, have lengths in the relation $s,s,\sqrt2s$. These relations are shown in the panels below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (a). A 30-60-90 triangle inscribed in a circle of radius 2s. A horizontal leg of length s lies along the positive x-axis, a vertical leg of length square root of 3 s rises to the circle, and the hypotenuse, the circle's radius, has length 2s. The angle between the x-axis and the hypotenuse is pi over 3, and the angle at the top vertex is pi over 6.","xMin":-2.3,"xMax":2.3,"yMin":-2.3,"yMax":2.3,"grid":false,"tickLabels":false,"unit":75,"circles":[{"at":[0,0],"r":2},{"at":[0,0],"r":0.4,"from":0,"to":60}],"segments":[{"from":[0,0],"to":[1,1.7320508]},{"from":[1,1.7320508],"to":[1,0]},{"from":[0,0],"to":[1,0]}],"texts":[{"at":[0.5,-0.22],"text":"s"},{"at":[1.18,0.85],"text":"√3s","anchor":"start"},{"at":[0.6,1.0],"text":"2s"},{"at":[0.563,0.325],"text":"π/3"},{"at":[0.62,1.5],"text":"π/6"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (b). A 45-45-90 triangle inscribed in a circle of radius square root of 2 s. A horizontal leg of length s lies along the positive x-axis, a vertical leg of length s rises to the circle, and the hypotenuse, the circle's radius, has length square root of 2 s. The angle between the x-axis and the hypotenuse is pi over 4, and the angle at the top vertex is also pi over 4.","xMin":-1.7,"xMax":1.7,"yMin":-1.7,"yMax":1.7,"grid":false,"tickLabels":false,"unit":100,"circles":[{"at":[0,0],"r":1.4142136},{"at":[0,0],"r":0.4,"from":0,"to":45}],"segments":[{"from":[0,0],"to":[1,1]},{"from":[1,1],"to":[1,0]},{"from":[0,0],"to":[1,0]}],"texts":[{"at":[0.5,-0.22],"text":"s"},{"at":[1.18,0.5],"text":"s","anchor":"start"},{"at":[0.44,0.72],"text":"√2s"},{"at":[0.601,0.249],"text":"π/4"},{"at":[0.75,1.25],"text":"π/4"}]}
{{< /apfigure >}}

We can then use the ratios of the side lengths to evaluate trigonometric functions of special angles.

{{< callout type="info" >}}
  **How To:** given trigonometric functions of a special angle, evaluate using side lengths.

  1. Use the side lengths shown above for the special angle you wish to evaluate.
  2. Use the ratio of side lengths appropriate to the function you wish to evaluate.
{{< /callout >}}

**Example.** Find the exact value of the trigonometric functions of $\tfrac{\pi}{3}$, using side lengths.

**Solution.**

$$
\begin{array}{lrcl}
& \sin\left(\tfrac{\pi}{3}\right)=\tfrac{\text{opp}}{\text{hyp}}=\tfrac{\sqrt3s}{2s} &=& \tfrac{\sqrt3}{2} \\[4pt]
& \cos\left(\tfrac{\pi}{3}\right)=\tfrac{\text{adj}}{\text{hyp}}=\tfrac{s}{2s} &=& \tfrac{1}{2} \\[4pt]
& \tan\left(\tfrac{\pi}{3}\right)=\tfrac{\text{opp}}{\text{adj}}=\tfrac{\sqrt3s}{s} &=& \sqrt3 \\[4pt]
& \sec\left(\tfrac{\pi}{3}\right)=\tfrac{\text{hyp}}{\text{adj}}=\tfrac{2s}{s} &=& 2 \\[4pt]
& \csc\left(\tfrac{\pi}{3}\right)=\tfrac{\text{hyp}}{\text{opp}}=\tfrac{2s}{\sqrt3s}=\tfrac{2}{\sqrt3} &=& \tfrac{2\sqrt3}{3} \\[4pt]
& \cot\left(\tfrac{\pi}{3}\right)=\tfrac{\text{adj}}{\text{opp}}=\tfrac{s}{\sqrt3s}=\tfrac{1}{\sqrt3} &=& \tfrac{\sqrt3}{3}
\end{array}
$$

{{< fillin
  question="Find the exact value of $\sin\left(\tfrac{\pi}{4}\right)$, using side lengths."
  answer="1/\sqrt2"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{1}{\sqrt2}$"
  hint="For a $45^\circ,45^\circ,90^\circ$ triangle the legs are equal, each of length $s$, and the hypotenuse is $\sqrt2s$."
>}}

{{< fillin
  question="Find the exact value of $\sec\left(\tfrac{\pi}{4}\right)$, using side lengths."
  answer="\sqrt2"
  answerForm="evaluated-trig"
  answerDisplay="$\sqrt2$"
  hint="Secant is the ratio of the hypotenuse, $\sqrt2s$, to the adjacent side, $s$."
>}}

## Using Equal Cofunction of Complements

If we look more closely at the relationship between the sine and cosine of the special angles relative to the unit circle, we will notice a pattern. In a right triangle with angles of $\tfrac{\pi}{6}$ and $\tfrac{\pi}{3}$, we see that the sine of $\tfrac{\pi}{3}$, namely $\tfrac{\sqrt3}{2}$, is also the cosine of $\tfrac{\pi}{6}$, while the sine of $\tfrac{\pi}{6}$, namely $\tfrac{1}{2}$, is also the cosine of $\tfrac{\pi}{3}$.

$$
\begin{array}{l}
\sin\tfrac{\pi}{3}=\cos\tfrac{\pi}{6}=\tfrac{\sqrt3s}{2s}=\tfrac{\sqrt3}{2} \\
\sin\tfrac{\pi}{6}=\cos\tfrac{\pi}{3}=\tfrac{s}{2s}=\tfrac{1}{2}
\end{array}
$$

See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A 30-60-90 triangle inscribed in a circle of radius 2s, identical to panel (a) above: the angle between the x-axis and the hypotenuse is pi over 3, and the angle at the top vertex is pi over 6, illustrating that the sine of pi over 3 equals the cosine of pi over 6 and vice versa.","xMin":-2.3,"xMax":2.3,"yMin":-2.3,"yMax":2.3,"grid":false,"tickLabels":false,"unit":75,"circles":[{"at":[0,0],"r":2},{"at":[0,0],"r":0.4,"from":0,"to":60}],"segments":[{"from":[0,0],"to":[1,1.7320508]},{"from":[1,1.7320508],"to":[1,0]},{"from":[0,0],"to":[1,0]}],"texts":[{"at":[0.5,-0.22],"text":"s"},{"at":[1.18,0.85],"text":"√3s","anchor":"start"},{"at":[0.6,1.0],"text":"2s"},{"at":[0.563,0.325],"text":"π/3"},{"at":[0.62,1.5],"text":"π/6"}]}
{{< /apfigure >}}

This result should not be surprising because, as we see from the figure, the side opposite the angle of $\tfrac{\pi}{3}$ is also the side adjacent to $\tfrac{\pi}{6}$, so $\sin(\tfrac{\pi}{3})$ and $\cos(\tfrac{\pi}{6})$ are exactly the same ratio of the same two sides, $\sqrt3s$ and $2s$. Similarly, $\cos(\tfrac{\pi}{3})$ and $\sin(\tfrac{\pi}{6})$ are also the same ratio using the same two sides, $s$ and $2s$.

The interrelationship between the sines and cosines of $\tfrac{\pi}{6}$ and $\tfrac{\pi}{3}$ also holds for the two acute angles in any right triangle, since in every case, the ratio of the same two sides would constitute the sine of one angle and the cosine of the other. Since the three angles of a triangle add to $\pi$, and the right angle is $\tfrac{\pi}{2}$, the remaining two angles must also add up to $\tfrac{\pi}{2}$. That means that a right triangle can be formed with any two angles that add to $\tfrac{\pi}{2}$ — in other words, any two complementary angles. So we may state a *cofunction identity*: If any two angles are complementary, the sine of one is the cosine of the other, and vice versa. This identity is illustrated in the figure below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with the right angle at one vertex, angle alpha at a second vertex, and angle beta at the third vertex. Since alpha and beta are complementary, the sine of alpha equals the cosine of beta, and the sine of beta equals the cosine of alpha.","unit":45,"polygons":[{"points":[[0,0],[4,0],[0,3]],"vertexLabels":[null,"α","β"],"rightAngles":[0]}]}
{{< /apfigure >}}

$$
\begin{array}{l}
\sin\alpha=\cos\beta \\
\sin\beta=\cos\alpha
\end{array}
$$

Using this identity, we can state without calculating, for instance, that the sine of $\tfrac{\pi}{12}$ equals the cosine of $\tfrac{5\pi}{12}$, and that the sine of $\tfrac{5\pi}{12}$ equals the cosine of $\tfrac{\pi}{12}$. We can also state that if, for a certain angle $t$, $\cos t=\tfrac{5}{13}$, then $\sin\left(\tfrac{\pi}{2}-t\right)=\tfrac{5}{13}$ as well.

### Cofunction Identities

The **cofunction identities** in radians are listed below.

| Cofunction identities | $\begin{array}{l}\cos t=\sin\left(\tfrac{\pi}{2}-t\right) \\ \sin t=\cos\left(\tfrac{\pi}{2}-t\right) \\ \tan t=\cot\left(\tfrac{\pi}{2}-t\right) \\ \cot t=\tan\left(\tfrac{\pi}{2}-t\right) \\ \sec t=\csc\left(\tfrac{\pi}{2}-t\right) \\ \csc t=\sec\left(\tfrac{\pi}{2}-t\right)\end{array}$ |
| :--- | :--- |

{{< callout type="info" >}}
  **How To:** given the sine and cosine of an angle, find the sine or cosine of its complement.

  1. To find the sine of the complementary angle, find the cosine of the original angle.
  2. To find the cosine of the complementary angle, find the sine of the original angle.
{{< /callout >}}

**Example.** If $\sin t=\tfrac{5}{12}$, find $\cos\left(\tfrac{\pi}{2}-t\right)$.

**Solution.** According to the cofunction identities for sine and cosine,

$$\sin t=\cos\left(\tfrac{\pi}{2}-t\right)$$

So

$$\cos\left(\tfrac{\pi}{2}-t\right)=\tfrac{5}{12}$$

{{< fillin
  question="If $\csc\left(\tfrac{\pi}{6}\right)=2$, find $\sec\left(\tfrac{\pi}{3}\right)$."
  answer="2"
  answerForm="evaluated-trig"
  answerDisplay="$2$"
  hint="$\tfrac{\pi}{6}$ and $\tfrac{\pi}{3}$ are complementary, and cosecant and secant are cofunctions."
>}}

## Using Trigonometric Functions

In previous examples, we evaluated the sine and cosine in triangles where we knew all three sides. But the real power of right-triangle trigonometry emerges when we look at triangles in which we know an angle but do not know all the sides.

{{< callout type="info" >}}
  **How To:** given a right triangle, the length of one side, and the measure of one acute angle, find the remaining sides.

  1. For each side, select the trigonometric function that has the unknown side as either the numerator or the denominator. The known side will in turn be the denominator or the numerator.
  2. Write an equation setting the function value of the known angle equal to the ratio of the corresponding sides.
  3. Using the value of the trigonometric function and the known side length, solve for the missing side length.
{{< /callout >}}

**Example.** Find the unknown sides of the triangle below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with a 30-degree angle, adjacent side labeled a, hypotenuse labeled c, and the side opposite the 30-degree angle labeled 7.","unit":12,"polygons":[{"points":[[0,0],[12.1,0],[0,7]],"edgeLabels":["a","c","7"],"vertexLabels":[null,"30°",null],"rightAngles":[0]}]}
{{< /apfigure >}}

**Solution.** We know the angle and the opposite side, so we can use the tangent to find the adjacent side.

$$\tan(30^\circ)=\tfrac{7}{a}$$

We rearrange to solve for $a$.

$$
\begin{array}{lrcl}
& a &=& \tfrac{7}{\tan(30^\circ)} \\[4pt]
& &\approx& 12.1
\end{array}
$$

We can use the sine to find the hypotenuse.

$$\sin(30^\circ)=\tfrac{7}{c}$$

Again, we rearrange to solve for $c$.

$$
\begin{array}{lrcl}
& c &=& \tfrac{7}{\sin(30^\circ)} \\[4pt]
& &\approx& 14
\end{array}
$$

{{< fillin
  question="A right triangle has one angle of $\tfrac{\pi}{3}$ and a hypotenuse of 20. Find the side adjacent to that angle."
  answer="10"
  answerDisplay="$10$"
  hint="Cosine is the ratio of the adjacent side to the hypotenuse."
>}}

{{< fillin
  question="Using that same triangle — one angle of $\tfrac{\pi}{3}$ and a hypotenuse of 20 — find the side opposite that angle."
  answer="10\sqrt3"
  answerForm="exact-radical"
  answerDisplay="$10\sqrt3$"
  hint="Sine is the ratio of the opposite side to the hypotenuse."
>}}

{{< fillin
  question="Using that same triangle — one angle of $\tfrac{\pi}{3}$ and a hypotenuse of 20 — find the measure of the missing angle."
  answer="\pi/6"
  answerForm="radians"
  answerDisplay="$\tfrac{\pi}{6}$"
  hint="The two acute angles of a right triangle are complementary."
>}}

## Using Right Triangle Trigonometry to Solve Applied Problems

Right-triangle trigonometry has many practical applications. For example, the ability to compute the lengths of sides of a triangle makes it possible to find the height of a tall object without climbing to the top or having to extend a tape measure along its height. We do so by measuring a distance from the base of the object to a point on the ground some distance away, where we can look up to the top of the tall object at an angle. The **angle of elevation** of an object above an observer relative to the observer is the angle between the horizontal and the line from the object to the observer's eye. The right triangle this position creates has sides that represent the unknown height, the measured distance from the base, and the angled line of sight from the ground to the top of the object. Knowing the measured distance to the base of the object and the angle of the line of sight, we can use trigonometric functions to calculate the unknown height. Similarly, we can form a triangle from the top of a tall object by looking downward. The **angle of depression** of an object below an observer relative to the observer is the angle between the horizontal and the line from the object to the observer's eye. See the figure below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A vertical tower with its base and a point on the ground some distance away joined by a line of sight to the top of the tower, forming a right triangle. A horizontal dashed line at the top of the tower shows the angle of depression down to the line of sight; the angle of elevation is the same line of sight measured up from the horizontal ground at the distant point. A labelled arrow points to each of the two angles.","unit":24,"segments":[{"from":[0,0],"to":[0,5]},{"from":[0,0],"to":[8.5,0]},{"from":[0,5],"to":[7,5],"dashed":true},{"from":[0,5],"to":[7,0]},{"from":[3.5,5.05],"to":[0.55,4.85],"arrow":true},{"from":[7.5,1.5],"to":[6.65,0.28],"arrow":true}],"texts":[{"at":[3.6,5.35],"text":"angle of depression","anchor":"start"},{"at":[7.6,1.6],"text":"angle of elevation","anchor":"start"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **How To:** given a tall object, measure its height indirectly.

  1. Make a sketch of the problem situation to keep track of known and unknown information.
  2. Lay out a measured distance from the base of the object to a point where the top of the object is clearly visible.
  3. At the other end of the measured distance, look up to the top of the object. Measure the angle the line of sight makes with the horizontal.
  4. Write an equation relating the unknown height, the measured distance, and the tangent of the angle of the line of sight.
  5. Solve the equation for the unknown height.
{{< /callout >}}

**Example.** To find the height of a tree, a person walks to a point 30 feet from the base of the tree. She measures an angle of $57^\circ$ between a line of sight to the top of the tree and the ground, as shown below. Find the height of the tree.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle formed by a person's line of sight to the top of a tree, the ground, and the tree's trunk. The angle between the line of sight and the ground is 57 degrees, and the horizontal distance from the person to the base of the tree is 30 feet. The tree's height is not labeled.","unit":4,"polygons":[{"points":[[0,0],[30,0],[30,46.2]],"edgeLabels":["30 feet",null,null],"vertexLabels":["57°",null,null],"rightAngles":[1]}]}
{{< /apfigure >}}

**Solution.** We know that the angle of elevation is $57^\circ$ and the adjacent side is 30 ft long. The opposite side is the unknown height.

The trigonometric function relating the side opposite to an angle and the side adjacent to the angle is the tangent. So we will state our information in terms of the tangent of $57^\circ$, letting $h$ be the unknown height.

$$
\begin{array}{lrcl}
\text{Set up the tangent.} & \tan\theta &=& \tfrac{\text{opposite}}{\text{adjacent}} \\[4pt]
& \tan(57^\circ) &=& \tfrac{h}{30} \\[4pt]
\text{Solve for }h. & h &=& 30\tan(57^\circ) \\[4pt]
\text{Use a calculator.} & h &\approx& 46.2
\end{array}
$$

The tree is approximately 46 feet tall.

{{< fillin
  question="How long a ladder is needed to reach a windowsill 50 feet above the ground if the ladder rests against the building making an angle of $\tfrac{5\pi}{12}$ with the ground? Round to the nearest foot."
  answer="52"
  answerForm="decimal"
  answerDisplay="$52$ ft"
  hint="Sine is the ratio of the opposite side (the height) to the hypotenuse (the ladder)."
>}}

## Key equations

| Cofunction identities | $\begin{array}{l}\cos t=\sin\left(\tfrac{\pi}{2}-t\right) \\ \sin t=\cos\left(\tfrac{\pi}{2}-t\right) \\ \tan t=\cot\left(\tfrac{\pi}{2}-t\right) \\ \cot t=\tan\left(\tfrac{\pi}{2}-t\right) \\ \sec t=\csc\left(\tfrac{\pi}{2}-t\right) \\ \csc t=\sec\left(\tfrac{\pi}{2}-t\right)\end{array}$ |
| :--- | :--- |

## Key concepts

- We can define trigonometric functions as ratios of the side lengths of a right triangle. See Example 1.
- The same side lengths can be used to evaluate the trigonometric functions of either acute angle in a right triangle. See Example 2.
- We can evaluate the trigonometric functions of special angles, knowing the side lengths of the triangles in which they occur. See Example 3.
- Any two complementary angles could be the two acute angles of a right triangle.
- If two angles are complementary, the cofunction identities state that the sine of one equals the cosine of the other and vice versa. See Example 4.
- We can use trigonometric functions of an angle to find unknown side lengths.
- Select the trigonometric function representing the ratio of the unknown side to the known side. See Example 5.
- Right-triangle trigonometry permits the measurement of inaccessible heights and distances.
- The unknown height or distance can be found by creating a right triangle in which the unknown height or distance is one of the sides, and another side and angle are known. See Example 6.

## Practice

### Use right triangles to evaluate trigonometric functions

For the following exercises, use the triangle below to evaluate each trigonometric function of angle $A$.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with the right angle at one vertex, angle A at another vertex, adjacent side 4, and opposite side 10.","unit":15,"polygons":[{"points":[[0,0],[10,0],[0,4]],"edgeLabels":["10",null,"4"],"vertexLabels":[null,null,"A"],"rightAngles":[0]}]}
{{< /apfigure >}}

{{< fillin
  question="Find $\sin A$."
  answer="5\sqrt{29}/29"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{5\sqrt{29}}{29}$"
  hint="Sine is the ratio of the opposite side, 10, to the hypotenuse; find the hypotenuse with the Pythagorean theorem first."
>}}

{{< fillin
  question="Find $\tan A$."
  answer="5/2"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{5}{2}$"
  hint="Tangent is the ratio of the opposite side to the adjacent side."
>}}

### Find function values for $30^\circ\left(\tfrac{\pi}{6}\right)$, $45^\circ\left(\tfrac{\pi}{4}\right)$, and $60^\circ\left(\tfrac{\pi}{3}\right)$

For the following exercises, solve for the unknown sides of the given triangle.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with a 30-degree angle, the side opposite it (adjacent to angle B) labeled 7, the side adjacent to the 30-degree angle labeled b, and the hypotenuse labeled c. Angle B is the triangle's other acute angle.","unit":12,"polygons":[{"points":[[0,0],[12.1,0],[0,7]],"edgeLabels":["b","c","7"],"vertexLabels":[null,"30°","B"],"rightAngles":[0]}]}
{{< /apfigure >}}

{{< fillin
  question="Find side $c$."
  answer="14"
  answerDisplay="$14$"
  hint="Sine of $30^\circ$ is the ratio of the given side, 7, to the hypotenuse $c$."
>}}

{{< fillin
  question="Find side $b$."
  answer="7\sqrt3"
  answerForm="exact-radical"
  answerDisplay="$7\sqrt3$"
  hint="Tangent of $30^\circ$ is the ratio of the given side, 7, to the adjacent side $b$."
>}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle with the right angle at C, a 45-degree angle at B, and the hypotenuse AB labeled 15 times the square root of 2. The 45-degree angle is marked at B. The two legs are not labeled.","unit":10,"polygons":[{"points":[[0,0],[15,0],[0,15]],"edgeLabels":[null,"15√2",null],"vertexLabels":["C","B","A"],"rightAngles":[0]}],"texts":[{"at":[10.4,1.9],"text":"45°"}]}
{{< /apfigure >}}

{{< fillin
  question="Find side $a$ (opposite angle $A$)."
  answer="15"
  answerDisplay="$15$"
  hint="With $B=45^\circ$, angle $A$ is also $45^\circ$, so the triangle is isosceles: both legs are equal."
>}}

{{< fillin
  question="Find side $b$ (opposite angle $B$)."
  answer="15"
  answerDisplay="$15$"
  hint="With $B=45^\circ$, angle $A$ is also $45^\circ$, so the triangle is isosceles: both legs are equal."
>}}

### Use cofunctions of complementary angles

{{< fillin
  question="$\cos\left(\tfrac{\pi}{3}\right)=\sin(\underline{\quad})$. Fill in the missing angle."
  answer="\pi/6"
  answerForm="radians"
  answerDisplay="$\tfrac{\pi}{6}$"
  hint="Cosine of an angle equals sine of its complement; the two acute angles of a right triangle sum to $\tfrac{\pi}{2}$."
>}}

{{< fillin
  question="$\tan\left(\tfrac{\pi}{4}\right)=\cot(\underline{\quad})$. Fill in the missing angle."
  answer="\pi/4"
  answerForm="radians"
  answerDisplay="$\tfrac{\pi}{4}$"
  hint="Tangent of an angle equals cotangent of its complement; $\tfrac{\pi}{4}$ is its own complement."
>}}

### Use the definitions of trigonometric functions of any angle

For the following exercises, use a calculator to find the length of each side to four decimal places. Side $a$ is opposite angle $A$, side $b$ is opposite angle $B$, and side $c$ is the hypotenuse.

{{< fillin
  question="$b=15$, $\angle B=15^\circ$. Find side $a$."
  answer="55.9808"
  answerForm="decimal"
  answerDisplay="$a\approx55.9808$"
  hint="Tangent of $B$ is the ratio of the opposite side $b$ to the adjacent side $a$."
>}}

{{< fillin
  question="$b=15$, $\angle B=15^\circ$. Find side $c$."
  answer="57.9555"
  answerForm="decimal"
  answerDisplay="$c\approx57.9555$"
  hint="Sine of $B$ is the ratio of the opposite side $b$ to the hypotenuse $c$."
>}}

{{< fillin
  question="$c=50$, $\angle B=21^\circ$. Find side $a$."
  answer="46.6790"
  answerForm="decimal"
  answerDisplay="$a\approx46.6790$"
  hint="Cosine of $B$ is the ratio of the adjacent side $a$ to the hypotenuse $c$."
>}}

{{< fillin
  question="$c=50$, $\angle B=21^\circ$. Find side $b$."
  answer="17.9184"
  answerForm="decimal"
  answerDisplay="$b\approx17.9184$"
  hint="Sine of $B$ is the ratio of the opposite side $b$ to the hypotenuse $c$."
>}}

### Use right triangle trigonometry to solve applied problems

{{< fillin
  question="A 23-ft ladder leans against a building so that the angle between the ground and the ladder is $80^\circ$. How high does the ladder reach up the side of the building? Round to four decimal places."
  answer="22.6506"
  answerForm="decimal"
  answerDisplay="$22.6506$ ft"
  hint="Sine of $80^\circ$ is the ratio of the height reached (opposite) to the ladder's length (hypotenuse)."
>}}

{{< fillin
  question="The angle of elevation to the top of a building in Seattle is found to be 2 degrees from the ground at a distance of 2 miles from the base of the building. Using this information, find the height of the building, in feet, to four decimal places."
  answer="368.7633"
  answerForm="decimal"
  answerDisplay="$368.7633$ ft"
  hint="Convert 2 miles to feet, then use the tangent of the angle of elevation to relate that distance to the unknown height."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 5.4: Right Triangle Trigonometry](https://openstax.org/books/precalculus-2e/pages/5-4-right-triangle-trigonometry) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated all seventeen instructional figures as accessible spec-first SVGs — the quarter-circle unit-circle figure with legs $x$ and $y$ and hypotenuse 1; the general adjacent/opposite/hypotenuse triangle; the Example 1 $8$-$15$-$17$ triangle and its Try It $7$-$24$-$25$ triangle; the general $\alpha$/$\beta$ "side adjacent to one angle is opposite the other" triangle; the Example 2 $3$-$4$-$5$ triangle and its Try It $33$-$56$-$65$ triangle; the two-panel $30$-$60$-$90$/$45$-$45$-$90$ special-triangle construction, drawn as circle-inscribed triangles with concrete side lengths $s$, $\sqrt3s$/$s$, $2s$/$\sqrt2s$ in place of the source's symbolic labels; the standalone $\pi/3$ cofunction circle (identical construction to the $30$-$60$-$90$ panel); the general $\alpha$/$\beta$ cofunction-identity triangle; the Example 5 $30^\circ$ triangle with unknown sides $a$ and $c$; the angle-of-elevation/angle-of-depression schematic; and the Example 6 tree-height triangle. Presented the cofunction identities as a Markdown table (`## Key equations`) with the six equations stacked in one KaTeX array, matching this book's one-row Key equations convention. Converted every "How To" two-column/numbered list into the book's callout convention. Omitted the "Access these online resources" media links. Every exact trigonometric value in this section is graded with `answerForm="evaluated-trig"`; every calculator/decimal answer declares `decimal` and states the rounding the source's own Answer Key implies (the source leaves the Real-World Applications ladder and Seattle-building Try Its and Practice items unrounded in their prompts even though the printed key carries four decimal places, so the local questions state "round to four decimal places" or "round to the nearest foot" explicitly, matching the key's own precision); every missing-angle cofunction answer declares `radians` to pin the source's radian spelling. The four answers that are exact whole-number side lengths ($10$, $14$, and the two $15$s) declare no form: `exact-radical` refuses a bare integer, since it requires a radical to be the carrying factor, and none of those four values is printed in its own question or figure, so no form token is needed to keep the item from being passable by retyping. Combined Try It 2, which asks for all six trigonometric functions of one triangle, into a single ordered, comma-separated fill-in, since the question itself states the order and the six values are not printed anywhere in the prompt to retype; Try It 3, which asks for the same six functions of $\tfrac{\pi}{4}$, is instead assessed by two single-value fill-ins (the sine and the secant), because the in-page practice sets are capped at two to three consecutive questions and those two exercise the ratio and its reciprocal without repeating the pair a third and fourth time. Expanded the Try It after Example 5 (find the two unknown sides *and* the missing angle) into three separate fill-ins, and the two Section Exercises "solve for the unknown sides" figures (Exercise 29 [$c=14,b=7\sqrt3$] and Exercise 31 [$a=15,b=15$]) into one fill-in per side, since each source item asks for more than one value. Adapted nine selected end-of-section exercises — two Graphical trigonometric-function evaluations, two Algebraic/Graphical "solve for the unknown sides" triangles (split into four components), two Algebraic cofunction fill-in-the-blank items, two Technology calculator items (split into four components), and two Real-World Applications word problems — into interactive components in a closing Practice block, one group per objective. The pinned module `m49384` appends the chapter's own Review Exercises and Practice Test after this section's Section Exercises; neither is part of Section 5.4, and no item from either was transcribed or drawn into the Practice block.</small>
