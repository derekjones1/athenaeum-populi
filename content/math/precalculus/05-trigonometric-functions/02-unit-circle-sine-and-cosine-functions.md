---
title: "Unit Circle: Sine and Cosine Functions"
description: >-
  Defining the sine and cosine of an angle from the unit circle, finding
  exact values at the special angles $30^\circ$, $45^\circ$, and $60^\circ$, identifying
  the domain and range of both functions, and using reference angles to
  evaluate sine and cosine anywhere on the circle — adapted from OpenStax
  Precalculus 2e, Section 5.2.
source_section: "5.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find function values for the sine and cosine of $30^\circ$ or $\left(\tfrac{\pi}{6}\right)$, $45^\circ$ or $\left(\tfrac{\pi}{4}\right)$, and $60^\circ$ or $\left(\tfrac{\pi}{3}\right)$
- Identify the domain and range of sine and cosine functions
- Use reference angles to evaluate trigonometric functions
{{< /callout >}}

Looking for a thrill? Then consider a ride on the Ain Dubai, the world's tallest Ferris wheel. Located in Dubai, the most populous city and the financial and tourism hub of the United Arab Emirates, the wheel soars to 820 feet, about 1.5 tenths of a mile. Described as an observation wheel, riders enjoy spectacular views of the Burj Khalifa (the world's tallest building) and the Palm Jumeirah (a human-made archipelago home to over 10,000 people and 20 resorts) as they travel from the ground to the peak and down again in a repeating pattern. In this section, we will examine this type of revolving motion around a circle. To do so, we need to define the type of circle first, and then place that circle on a coordinate system. Then we can discuss circular motion in terms of the coordinate pairs.

## Finding Function Values for the Sine and Cosine

To define our trigonometric functions, we begin by drawing a unit circle, a circle centered at the origin with radius 1, as shown below. The angle (in radians) that $t$ intercepts forms an arc of length $s$. Using the formula $s=rt$, and knowing that $r=1$, we see that for a **unit circle**, $s=t$.

Recall that the $x$- and $y$-axes divide the coordinate plane into four quarters called quadrants. We label these quadrants to mimic the direction a positive angle would sweep. The four quadrants are labeled I, II, III, and IV.

For any angle $t$, we can label the intersection of the terminal side and the unit circle by its coordinates, $(x,y)$. The coordinates $x$ and $y$ will be the outputs of the trigonometric functions $f(t)=\cos t$ and $f(t)=\sin t$, respectively. This means $x=\cos t$ and $y=\sin t$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle divided into quadrants I through IV. An angle t in standard position has its terminal side meeting the circle at the point (x, y), with radius 1. The arc from the positive x-axis to the point has length s, and the dropped perpendicular from the point to the x-axis forms legs labeled cos t and sin t.","xMin":-1.6,"xMax":1.6,"yMin":-1.6,"yMax":1.6,"grid":false,"tickLabels":false,"quadrantLabels":true,"unit":95,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.3,"from":0,"to":40}],"segments":[{"from":[0,0],"to":[0.766,0.643]},{"from":[0.766,0.643],"to":[0.766,0],"dashed":true}],"points":[{"at":[0.766,0.643],"label":"(x, y)"}],"texts":[{"at":[0.4,0.36],"text":"1"},{"at":[0.16,0.07],"text":"t"},{"at":[1.27,0.46],"text":"s"},{"at":[0.83,0.32],"text":"sin t"},{"at":[0.35,-0.14],"text":"cos t"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Unit Circle.** A **unit circle** has a center at $(0,0)$ and radius $1$. In a unit circle, the length of the intercepted arc is equal to the radian measure of the central angle $t$.

  Let $(x,y)$ be the endpoint on the unit circle of an arc of arc length $s$. The $(x,y)$ coordinates of this point can be described as functions of the angle.
{{< /callout >}}

### Defining Sine and Cosine Functions

Now that we have our unit circle labeled, we can learn how the $(x,y)$ coordinates relate to the arc length and angle. The **sine function** relates a real number $t$ to the $y$-coordinate of the point where the corresponding angle intercepts the unit circle. More precisely, the sine of an angle $t$ equals the $y$-value of the endpoint on the unit circle of an arc of length $t$. In the figure above, the sine is equal to $y$. Like all functions, the sine function has an input and an output. Its input is the measure of the angle; its output is the $y$-coordinate of the corresponding point on the unit circle.

The **cosine function** of an angle $t$ equals the $x$-value of the endpoint on the unit circle of an arc of length $t$. In the figure below, the cosine is equal to $x$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An angle t in standard position in the first quadrant, with terminal side meeting the unit circle at the point (cos t, sin t). The radius has length 1, and the dropped perpendicular to the x-axis forms legs labeled cos t and sin t.","xMin":-0.3,"xMax":1.3,"yMin":-0.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":220,"circles":[{"at":[0,0],"r":1,"from":0,"to":90},{"at":[0,0],"r":0.3,"from":0,"to":40}],"segments":[{"from":[0,0],"to":[0.766,0.643]},{"from":[0.766,0.643],"to":[0.766,0],"dashed":true}],"points":[{"at":[0.766,0.643],"label":"(cos t, sin t)"}],"texts":[{"at":[0.4,0.36],"text":"1"},{"at":[0.16,0.07],"text":"t"},{"at":[0.83,0.32],"text":"sin t"},{"at":[0.35,-0.14],"text":"cos t"}]}
{{< /apfigure >}}

Because it is understood that sine and cosine are functions, we do not always need to write them with parentheses: $\sin t$ is the same as $\sin(t)$ and $\cos t$ is the same as $\cos(t)$. Likewise, $\cos^2 t$ is a commonly used shorthand notation for $(\cos(t))^2$. Be aware that many calculators and computers do not recognize the shorthand notation. When in doubt, use the extra parentheses when entering calculations into a calculator or computer.

{{< callout type="info" >}}
  **Sine and Cosine Functions.** If $t$ is a real number and a point $(x,y)$ on the unit circle corresponds to an angle of $t$, then

  $$\cos t=x$$

  $$\sin t=y$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a point $P(x,y)$ on the unit circle corresponding to an angle of $t$, find the sine and cosine.

  1. The sine of $t$ is equal to the $y$-coordinate of point $P$: $\sin t=y$.
  2. The cosine of $t$ is equal to the $x$-coordinate of point $P$: $\cos t=x$.
{{< /callout >}}

**Example.** Point $P$ is a point on the unit circle corresponding to an angle of $t$, as shown below. Find $\cos(t)$ and $\sin(t)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An angle t in standard position in the first quadrant, with terminal side meeting the unit circle at the point (1/2, √3/2), which equals (cos t, sin t). The radius has length 1, and the dropped perpendicular to the x-axis forms legs cos t and sin t.","xMin":-0.3,"xMax":1.3,"yMin":-0.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":220,"circles":[{"at":[0,0],"r":1,"from":0,"to":90}],"segments":[{"from":[0,0],"to":[0.5,0.866]},{"from":[0.5,0.866],"to":[0.5,0],"dashed":true}],"points":[{"at":[0.5,0.866],"label":"(1/2, √3/2)"}],"texts":[{"at":[0.25,0.5],"text":"1"},{"at":[0.16,0.07],"text":"t"},{"at":[0.58,0.4],"text":"sin t"},{"at":[0.25,-0.14],"text":"cos t"}]}
{{< /apfigure >}}

**Solution.** We know that $\cos t$ is the $x$-coordinate of the corresponding point on the unit circle and $\sin t$ is the $y$-coordinate of the corresponding point on the unit circle. So:

$$
\begin{array}{lrcl}
& x=\cos t &=& \tfrac{1}{2} \\[4pt]
& y=\sin t &=& \tfrac{\sqrt3}{2}
\end{array}
$$

{{< fillin
  question="A certain angle $t$ corresponds to a point on the unit circle at $\left(-\tfrac{\sqrt2}{2},\tfrac{\sqrt2}{2}\right)$, as shown below. Find $\cos t$ and $\sin t$. Enter your answer as the ordered pair $(\cos t,\sin t)$."
  answer="(-\sqrt2/2,\sqrt2/2)"
  answerDisplay="$\left(-\tfrac{\sqrt2}{2},\tfrac{\sqrt2}{2}\right)$"
  hint="On the unit circle, the point's coordinates ARE $(\cos t,\sin t)$."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An angle t in standard position with terminal side meeting the unit circle in the second quadrant at the point (-√2/2, √2/2). The radius has length 1.","xMin":-1.3,"xMax":0.3,"yMin":-0.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":220,"circles":[{"at":[0,0],"r":1,"from":90,"to":180}],"segments":[{"from":[0,0],"to":[-0.707,0.707]}],"points":[{"at":[-0.707,0.707],"label":"(-√2/2, √2/2)"}],"texts":[{"at":[-0.3,0.45],"text":"1"},{"at":[-0.16,0.09],"text":"t"}]}
{{< /apfigure >}}

### Finding Sines and Cosines of Angles on an Axis

For quadrantal angles, the corresponding point on the unit circle falls on the $x$- or $y$-axis. In that case, we can easily calculate cosine and sine from the values of $x$ and $y$.

**Example.** Find $\cos(90^\circ)$ and $\sin(90^\circ)$.

**Solution.** Moving $90^\circ$ counterclockwise around the unit circle from the positive $x$-axis brings us to the top of the circle, where the $(x,y)$ coordinates are $(0,1)$, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An angle t of 90 degrees in standard position, with terminal side along the positive y-axis meeting the unit circle at the point (0, 1).","xMin":-1.3,"xMax":1.3,"yMin":-0.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":150,"circles":[{"at":[0,0],"r":1,"from":0,"to":180},{"at":[0,0],"r":0.3,"from":0,"to":90}],"segments":[{"from":[0,0],"to":[0,1]}],"points":[{"at":[0,1],"label":"(0, 1)"}],"texts":[{"at":[0.18,0.35],"text":"t"}]}
{{< /apfigure >}}

Using our definitions of cosine and sine,

$$
\begin{array}{lrcl}
& x=\cos t &=& \cos(90^\circ)=0 \\[4pt]
& y=\sin t &=& \sin(90^\circ)=1
\end{array}
$$

The cosine of $90^\circ$ is $0$; the sine of $90^\circ$ is $1$.

{{< fillin
  question="Find $\cos(\pi)$."
  answer="-1"
  answerForm="evaluated-trig"
  answerDisplay="$-1$"
  hint="$\pi$ radians is $180^\circ$, halfway around the circle from $(1,0)$."
>}}

{{< fillin
  question="Find $\sin(\pi)$."
  answer="0"
  answerForm="evaluated-trig"
  answerDisplay="$0$"
  hint="$\pi$ radians is $180^\circ$, halfway around the circle from $(1,0)$."
>}}

## The Pythagorean Identity

Now that we can define sine and cosine, we will learn how they relate to each other and the unit circle. Recall that the equation for the unit circle is $x^2+y^2=1$. Because $x=\cos t$ and $y=\sin t$, we can substitute for $x$ and $y$ to get $\cos^2 t+\sin^2 t=1$. This equation, $\cos^2 t+\sin^2 t=1$, is known as the **Pythagorean Identity**.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An angle t in standard position in the first quadrant, with terminal side meeting the unit circle at the point (x, y). The radius has length 1, and the legs x and y are marked, illustrating 1 = x squared + y squared = cos squared t + sin squared t.","xMin":-0.3,"xMax":1.3,"yMin":-0.3,"yMax":1.45,"grid":false,"tickLabels":false,"unit":190,"circles":[{"at":[0,0],"r":1,"from":0,"to":90},{"at":[0,0],"r":0.3,"from":0,"to":40}],"segments":[{"from":[0,0],"to":[0.766,0.643]},{"from":[0.766,0.643],"to":[0.766,0]},{"from":[0,0],"to":[0.766,0]}],"points":[{"at":[0.766,0.643]}],"texts":[{"at":[0.4,0.36],"text":"1"},{"at":[0.16,0.07],"text":"t"},{"at":[0.82,0.32],"text":"y"},{"at":[0.35,-0.14],"text":"x"},{"at":[0.35,1.3],"text":"1 = x² + y² = cos²t + sin²t"}]}
{{< /apfigure >}}

We can use the Pythagorean Identity to find the cosine of an angle if we know the sine, or vice versa. However, because the equation yields two solutions, we need additional knowledge of the angle to choose the solution with the correct sign. If we know the quadrant where the angle is, we can easily choose the correct solution.

{{< callout type="info" >}}
  **Pythagorean Identity.** The **Pythagorean Identity** states that, for any real number $t$,

  $$\cos^2 t+\sin^2 t=1$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the sine of some angle $t$ and its quadrant location, find the cosine of $t$.

  1. Substitute the known value of $\sin(t)$ into the Pythagorean Identity.
  2. Solve for $\cos(t)$.
  3. Choose the solution with the appropriate sign for the $x$-values in the quadrant where $t$ is located.
{{< /callout >}}

**Example.** If $\sin(t)=\tfrac{3}{7}$ and $t$ is in the second quadrant, find $\cos(t)$.

**Solution.** If we drop a vertical line from the point on the unit circle corresponding to $t$, we create a right triangle, from which we can see that the Pythagorean Identity is simply one case of the Pythagorean Theorem, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An angle t in standard position with terminal side meeting the unit circle in the second quadrant at a point with y-coordinate 3/7. The radius has length 1, and the dropped perpendicular to the x-axis shows the y-value 3/7.","xMin":-1.3,"xMax":0.3,"yMin":-0.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":220,"circles":[{"at":[0,0],"r":1,"from":90,"to":180}],"segments":[{"from":[0,0],"to":[-0.904,0.429]},{"from":[-0.904,0.429],"to":[-0.904,0],"dashed":true}],"points":[{"at":[-0.904,0.429],"label":"(x, 3/7)"}],"texts":[{"at":[-0.45,0.32],"text":"1"},{"at":[-0.09,0.46],"text":"3/7"}]}
{{< /apfigure >}}

Substituting the known value for sine into the Pythagorean Identity,

$$
\begin{array}{lrcl}
& \cos^2(t)+\sin^2(t) &=& 1 \\[4pt]
& \cos^2(t)+\tfrac{9}{49} &=& 1 \\[4pt]
& \cos^2(t) &=& \tfrac{40}{49} \\[4pt]
& \cos(t) &=& \pm\sqrt{\tfrac{40}{49}}=\pm\tfrac{\sqrt{40}}{7}=\pm\tfrac{2\sqrt{10}}{7}
\end{array}
$$

Because the angle is in the second quadrant, we know the $x$-value is a negative real number, so the cosine is also negative. So

$$\cos(t)=-\tfrac{2\sqrt{10}}{7}$$

{{< fillin
  question="If $\cos(t)=\tfrac{24}{25}$ and $t$ is in the fourth quadrant, find $\sin(t)$."
  answer="-7/25"
  answerDisplay="$-\tfrac{7}{25}$"
  hint="Substitute into $\cos^2t+\sin^2t=1$ and solve for $\sin t$, then give it the sign of $y$ in quadrant IV."
>}}

## Finding Sines and Cosines of Special Angles

We have already learned some properties of the special angles, such as the conversion from radians to degrees. We can also calculate sines and cosines of the special angles using the Pythagorean Identity and our knowledge of triangles.

### Finding Sines and Cosines of $45^\circ$ Angles

First, we will look at angles of $45^\circ$, or $\tfrac{\pi}{4}$, as shown below. A $45^\circ$–$45^\circ$–$90^\circ$ triangle is an isosceles triangle, so the $x$- and $y$-coordinates of the corresponding point on the circle are the same. Because the $x$- and $y$-values are the same, the sine and cosine values will also be equal.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A 45-degree angle in standard position, with terminal side meeting the unit circle at the point (x, y) = (x, x). The radius has length 1, and the dropped perpendicular to the x-axis forms two equal legs, x and y.","xMin":-0.3,"xMax":1.3,"yMin":-0.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":220,"circles":[{"at":[0,0],"r":1,"from":0,"to":90}],"segments":[{"from":[0,0],"to":[0.707,0.707]},{"from":[0.707,0.707],"to":[0.707,0],"dashed":true}],"points":[{"at":[0.707,0.707],"label":"(x, y) = (x, x)"}],"texts":[{"at":[0.31,0.4],"text":"1"},{"at":[0.19,0.07],"text":"45°"},{"at":[0.78,0.32],"text":"y"},{"at":[0.35,-0.14],"text":"x"}]}
{{< /apfigure >}}

At $t=\tfrac{\pi}{4}$, which is $45$ degrees, the radius of the unit circle bisects the first quadrantal angle. This means the radius lies along the line $y=x$. A unit circle has a radius equal to $1$. So, the right triangle formed below the line $y=x$ has sides $x$ and $y$ (with $y=x$), and a radius of $1$, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle with axis intercepts (1, 0), (0, 1), (-1, 0), and (0, -1) marked. A radius drawn at 45 degrees meets the circle where the dashed line y = x crosses it, forming a right triangle with the dropped perpendicular to the x-axis.","xMin":-1.4,"xMax":1.4,"yMin":-1.4,"yMax":1.4,"grid":false,"tickLabels":false,"unit":110,"circles":[{"at":[0,0],"r":1}],"segments":[{"from":[0,0],"to":[0.707,0.707]},{"from":[0.707,0.707],"to":[0.707,0],"dashed":true}],"lines":[{"slope":1,"intercept":0,"dashed":true,"label":"y = x"}],"points":[{"at":[1,0],"label":"(1, 0)"},{"at":[-1,0],"label":"(-1, 0)"},{"at":[0,1],"label":"(0, 1)"},{"at":[0,-1],"label":"(0, -1)"}],"texts":[{"at":[0.22,0.09],"text":"π/4"}]}
{{< /apfigure >}}

From the Pythagorean Theorem we get

$$x^2+y^2=1$$

Substituting $y=x$, we get

$$x^2+x^2=1$$

Combining like terms we get

$$2x^2=1$$

And solving for $x$, we get

$$
\begin{array}{lrcl}
& x^2 &=& \tfrac{1}{2} \\[4pt]
& x &=& \pm\tfrac{1}{\sqrt2}
\end{array}
$$

In quadrant I, $x=\tfrac{1}{\sqrt2}$.

At $t=\tfrac{\pi}{4}$ or $45$ degrees,

$$
\begin{array}{lrcl}
& (x,y) &=& (x,x)=\left(\tfrac{1}{\sqrt2},\tfrac{1}{\sqrt2}\right) \\[4pt]
& x &=& \tfrac{1}{\sqrt2},\ y=\tfrac{1}{\sqrt2} \\[4pt]
& \cos t &=& \tfrac{1}{\sqrt2},\ \sin t=\tfrac{1}{\sqrt2}
\end{array}
$$

If we then rationalize the denominators, we get

$$
\begin{array}{lrcl}
& \cos t &=& \tfrac{1}{\sqrt2}\cdot\tfrac{\sqrt2}{\sqrt2}=\tfrac{\sqrt2}{2} \\[4pt]
& \sin t &=& \tfrac{1}{\sqrt2}\cdot\tfrac{\sqrt2}{\sqrt2}=\tfrac{\sqrt2}{2}
\end{array}
$$

Therefore, the $(x,y)$ coordinates of a point on a circle of radius $1$ at an angle of $45^\circ$ are $\left(\tfrac{\sqrt2}{2},\tfrac{\sqrt2}{2}\right)$.

### Finding Sines and Cosines of $30^\circ$ and $60^\circ$ Angles

Next, we will find the cosine and sine at an angle of $30^\circ$, or $\tfrac{\pi}{6}$. First, we will draw a triangle inside a circle with one side at an angle of $30^\circ$, and another at an angle of $-30^\circ$, as shown below. If the resulting two right triangles are combined into one large triangle, notice that all three angles of this larger triangle will be $60^\circ$, as shown in the second figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle with a radius drawn at 30 degrees above the x-axis to the point (x, y) and another radius drawn at 30 degrees below the x-axis, forming an inscribed triangle with a vertical chord connecting the two points on the circle.","xMin":-1.3,"xMax":1.3,"yMin":-1.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":150,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.25,"from":0,"to":30},{"at":[0,0],"r":0.25,"from":330,"to":360}],"segments":[{"from":[0,0],"to":[0.866,0.5]},{"from":[0,0],"to":[0.866,-0.5]},{"from":[0.866,0.5],"to":[0.866,-0.5]}],"points":[{"at":[0.866,0.5],"label":"(x, y)"}],"texts":[{"at":[0.55,0.32],"text":"r"},{"at":[0.44,0.12],"text":"30°"},{"at":[0.44,-0.12],"text":"30°"}]}
{{< /apfigure >}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"Two 30-60-90 right triangles joined back to back along a shared vertical edge, forming one large triangle with all three angles 60 degrees at the shared left vertex split into two 30-degree angles. Each right triangle has hypotenuse r and vertical leg y.","unit":80,"polygons":[{"points":[[0,0],[1.2,0.7],[1.2,0]],"edgeLabels":["r","y",null],"rightAngles":[2]},{"points":[[0,0],[1.2,0],[1.2,-0.7]],"edgeLabels":[null,"y","r"],"rightAngles":[1]}],"texts":[{"at":[0.34,0.09],"text":"30°"},{"at":[0.34,-0.09],"text":"30°"},{"at":[1.45,0.65],"text":"60°"},{"at":[1.45,-0.65],"text":"60°"}]}
{{< /apfigure >}}

Because all the angles are equal, the sides are also equal. The vertical line has length $2y$, and since the sides are all equal, we can also conclude that $r=2y$ or $y=\tfrac12 r$. Since $\sin t=y$,

$$\sin\left(\tfrac{\pi}{6}\right)=\tfrac12 r$$

And since $r=1$ in our unit circle,

$$
\begin{array}{lrcl}
& \sin\left(\tfrac{\pi}{6}\right) &=& \tfrac12(1) \\[4pt]
& &=& \tfrac12
\end{array}
$$

Using the Pythagorean Identity, we can find the cosine value.

$$
\begin{array}{lrcl}
& \cos^2\tfrac{\pi}{6}+\sin^2\left(\tfrac{\pi}{6}\right) &=& 1 \\[4pt]
& \cos^2\left(\tfrac{\pi}{6}\right)+\left(\tfrac12\right)^2 &=& 1 \\[4pt]
\text{Use the square root property.} & \cos^2\left(\tfrac{\pi}{6}\right) &=& \tfrac34 \\[4pt]
\text{Since }y\text{ is positive, choose the positive root.} & \cos\left(\tfrac{\pi}{6}\right) &=& \tfrac{\pm\sqrt3}{\pm\sqrt4}=\tfrac{\sqrt3}{2}
\end{array}
$$

The $(x,y)$ coordinates for the point on a circle of radius $1$ at an angle of $30^\circ$ are $\left(\tfrac{\sqrt3}{2},\tfrac12\right)$.

At $t=\tfrac{\pi}{3}$ ($60^\circ$), the radius of the unit circle, $1$, serves as the hypotenuse of a $30$-$60$-$90$ degree right triangle, $BAD$, as shown below. Angle $A$ has measure $60^\circ$. At point $B$, we draw an angle $ABC$ with measure of $60^\circ$. We know the angles in a triangle sum to $180^\circ$, so the measure of angle $C$ is also $60^\circ$. Now we have an equilateral triangle. Because each side of the equilateral triangle $ABC$ is the same length, and we know one side is the radius of the unit circle, all sides must be of length $1$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle with two rays from the origin at 30 degrees and 60 degrees. The 60-degree ray meets the circle at point B. A perpendicular dropped from B to the x-axis meets it at point D, forming a right angle, with C marking the point (1, 0) and A marking the origin.","xMin":-1.3,"xMax":1.3,"yMin":-1.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":200,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.3,"from":0,"to":30},{"at":[0,0],"r":0.4,"from":0,"to":60}],"segments":[{"from":[0,0],"to":[0.5,0.866]},{"from":[0.5,0.866],"to":[1,0]},{"from":[0.5,0.866],"to":[0.5,0],"dashed":true}],"points":[{"at":[0,1],"label":"(0, 1)"},{"at":[1,0],"label":"C"},{"at":[-1,0],"label":"(-1, 0)"},{"at":[0,-1],"label":"(0, -1)"},{"at":[0.5,0.866],"label":"B"},{"at":[0.5,0],"label":"D"},{"at":[0,0],"label":"A"}],"texts":[{"at":[0.116,0.031],"text":"30°"},{"at":[0.353,0.421],"text":"60°"},{"at":[0.16,0.5],"text":"1"},{"at":[0.681,0.393],"text":"1"},{"at":[0.58,0.4],"text":"y"}]}
{{< /apfigure >}}

The measure of angle $ABD$ is $30^\circ$. So, if double, angle $ABC$ is $60^\circ$. $BD$ is the perpendicular bisector of $AC$, so it cuts $AC$ in half. This means that $AD$ is $\tfrac12$ the radius, or $\tfrac12$. Notice that $AD$ is the $x$-coordinate of point $B$, which is at the intersection of the $60^\circ$ angle and the unit circle. This gives us a triangle $BAD$ with hypotenuse of $1$ and side $x$ of length $\tfrac12$.

From the Pythagorean Theorem, we get

$$x^2+y^2=1$$

Substituting $x=\tfrac12$, we get

$$\left(\tfrac12\right)^2+y^2=1$$

Solving for $y$, we get

$$
\begin{array}{lrcl}
& \tfrac14+y^2 &=& 1 \\[4pt]
& y^2 &=& 1-\tfrac14 \\[4pt]
& y^2 &=& \tfrac34 \\[4pt]
& y &=& \pm\tfrac{\sqrt3}{2}
\end{array}
$$

Since $t=\tfrac{\pi}{3}$ has the terminal side in quadrant I where the $y$-coordinate is positive, we choose $y=\tfrac{\sqrt3}{2}$, the positive value.

At $t=\tfrac{\pi}{3}$ ($60^\circ$), the $(x,y)$ coordinates for the point on a circle of radius $1$ at an angle of $60^\circ$ are $\left(\tfrac12,\tfrac{\sqrt3}{2}\right)$, so we can find the sine and cosine.

$$
\begin{array}{lrcl}
& (x,y) &=& \left(\tfrac12,\tfrac{\sqrt3}{2}\right) \\[4pt]
& x &=& \tfrac12,\ y=\tfrac{\sqrt3}{2} \\[4pt]
& \cos t &=& \tfrac12,\ \sin t=\tfrac{\sqrt3}{2}
\end{array}
$$

We have now found the cosine and sine values for all of the most commonly encountered angles in the first quadrant of the unit circle. The table below summarizes these values.

| Angle | $0$ | $\tfrac{\pi}{6}$, or $30^\circ$ | $\tfrac{\pi}{4}$, or $45^\circ$ | $\tfrac{\pi}{3}$, or $60^\circ$ | $\tfrac{\pi}{2}$, or $90^\circ$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Cosine | $1$ | $\tfrac{\sqrt3}{2}$ | $\tfrac{\sqrt2}{2}$ | $\tfrac12$ | $0$ |
| Sine | $0$ | $\tfrac12$ | $\tfrac{\sqrt2}{2}$ | $\tfrac{\sqrt3}{2}$ | $1$ |

The figure below shows the common angles in the first quadrant of the unit circle.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A quarter of the unit circle with rays at 30, 45, and 60 degrees, each meeting the circle at its special-angle point. Dashed guide lines drop from each point to both axes, and the axis positions 1/2, √2/2, and √3/2 are marked on both axes.","xMin":-0.5,"xMax":1.3,"yMin":-0.4,"yMax":1.3,"grid":false,"tickLabels":false,"unit":180,"circles":[{"at":[0,0],"r":1,"from":0,"to":90}],"segments":[{"from":[0,0],"to":[0.866,0.5]},{"from":[0,0],"to":[0.707,0.707]},{"from":[0,0],"to":[0.5,0.866]}],"guides":[[0.866,0.5],[0.707,0.707],[0.5,0.866]],"points":[{"at":[0.866,0.5],"label":"(√3/2, 1/2)"},{"at":[0.707,0.707],"label":"(√2/2, √2/2)"},{"at":[0.5,0.866],"label":"(1/2, √3/2)"},{"at":[1,0],"label":"(1, 0)"},{"at":[0,1],"label":"(0, 1)"}],"texts":[{"at":[0.866,-0.12],"text":"√3/2"},{"at":[0.707,-0.12],"text":"√2/2"},{"at":[0.5,-0.12],"text":"1/2"},{"at":[-0.22,0.5],"text":"1/2"},{"at":[-0.28,0.707],"text":"√2/2"},{"at":[-0.28,0.866],"text":"√3/2"}]}
{{< /apfigure >}}

## Using a Calculator to Find Sine and Cosine

To find the cosine and sine of angles other than the special angles, we turn to a computer or calculator. **Be aware**: Most calculators can be set into "degree" or "radian" mode, which tells the calculator the units for the input value. When we evaluate $\cos(30)$ on our calculator, it will evaluate it as the cosine of $30$ degrees if the calculator is in degree mode, or the cosine of $30$ radians if the calculator is in radian mode.

{{< callout type="info" >}}
  **How to:** given an angle in radians, use a graphing calculator to find the cosine.

  1. If the calculator has degree mode and radian mode, set it to radian mode.
  2. Press the COS key.
  3. Enter the radian value of the angle and press the close-parentheses key ")".
  4. Press ENTER.
{{< /callout >}}

**Example.** Evaluate $\cos\left(\tfrac{5\pi}{3}\right)$ using a graphing calculator or computer.

**Solution.** Enter the following keystrokes:

**COS** $\left(5\times\pi\div3\right)$ **ENTER**

$$\cos\left(\tfrac{5\pi}{3}\right)=0.5$$

**Analysis.** We can find the cosine or sine of an angle in degrees directly on a calculator with degree mode. For calculators or software that use only radian mode, we can find the sine of $20^\circ$, for example, by including the conversion factor to radians as part of the input:

**SIN** $(20\times\pi\div180)$ **ENTER**

{{< fillin
  question="Evaluate $\sin\left(\tfrac{\pi}{3}\right)$. Round to four decimal places."
  answer="0.8660"
  answerForm="decimal"
  answerDisplay="$0.8660$"
  hint="Set your calculator to radian mode, or convert to degrees first."
>}}

## Identifying the Domain and Range of Sine and Cosine Functions

Now that we can find the sine and cosine of an angle, we need to discuss their domains and ranges. What are the domains of the sine and cosine functions? That is, what are the smallest and largest numbers that can be inputs of the functions? Because angles smaller than $0$ and angles larger than $2\pi$ can still be graphed on the unit circle and have real values of $x$, $y$, and $r$, there is no lower or upper limit to the angles that can be inputs to the sine and cosine functions. The input to the sine and cosine functions is the rotation from the positive $x$-axis, and that may be any real number.

What are the ranges of the sine and cosine functions? What are the least and greatest possible values for their output? We can see the answers by examining the unit circle, as shown below. The bounds of the $x$-coordinate are $[-1,1]$. The bounds of the $y$-coordinate are also $[-1,1]$. Therefore, the range of both the sine and cosine functions is $[-1,1]$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle, with the x-coordinate ranging from -1 to 1 and the y-coordinate ranging from -1 to 1.","xMin":-1.3,"xMax":1.3,"yMin":-1.3,"yMax":1.3,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":1,"unit":140,"circles":[{"at":[0,0],"r":1}]}
{{< /apfigure >}}

## Finding Reference Angles

We have discussed finding the sine and cosine for angles in the first quadrant, but what if our angle is in another quadrant? For any given angle in the first quadrant, there is an angle in the second quadrant with the same sine value. Because the sine value is the $y$-coordinate on the unit circle, the other angle with the same sine will share the same $y$-value, but have the opposite $x$-value. Therefore, its cosine value will be the opposite of the first angle's cosine value.

Likewise, there will be an angle in the fourth quadrant with the same cosine as the original angle. The angle with the same cosine will share the same $x$-value but will have the opposite $y$-value. Therefore, its sine value will be the opposite of the original angle's sine value.

As shown below, angle $\alpha$ has the same sine value as angle $t$; the cosine values are opposites. Angle $\beta$ has the same cosine value as angle $t$; the sine values are opposites.

$$
\begin{array}{lrcl}
& \sin(t) &=& \sin(\alpha)\ \text{and}\ \cos(t)=-\cos(\alpha) \\[4pt]
& \sin(t) &=& -\sin(\beta)\ \text{and}\ \cos(t)=\cos(\beta)
\end{array}
$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (a). Two angles in standard position sharing the same terminal-side height: angle t in the first quadrant and angle alpha in the second quadrant, both meeting the unit circle at points with the same y-coordinate but opposite x-coordinates, connected by a dashed rectangle.","xMin":-1.4,"xMax":1.4,"yMin":-0.3,"yMax":1.4,"grid":false,"tickLabels":false,"unit":100,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.35,"from":0,"to":35},{"at":[0,0],"r":0.3,"from":145,"to":180}],"segments":[{"from":[0,0],"to":[0.819,0.574]},{"from":[0,0],"to":[-0.819,0.574]},{"from":[0.819,0.574],"to":[0.819,0],"dashed":true},{"from":[-0.819,0.574],"to":[-0.819,0],"dashed":true}],"points":[{"at":[0.819,0.574],"label":"(x, y)"}],"texts":[{"at":[0.4,0.15],"text":"t"},{"at":[-0.37,0.16],"text":"α"},{"at":[0.5,0.36],"text":"r"},{"at":[-0.5,0.36],"text":"r"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (b). Two angles in standard position sharing the same terminal-side horizontal position: angle t in the first quadrant and angle beta in the fourth quadrant, both meeting the unit circle at points with the same x-coordinate but opposite y-coordinates, connected by a dashed rectangle.","xMin":-0.3,"xMax":1.4,"yMin":-1.4,"yMax":1.4,"grid":false,"tickLabels":false,"unit":100,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.35,"from":0,"to":35},{"at":[0,0],"r":0.3,"from":325,"to":360}],"segments":[{"from":[0,0],"to":[0.819,0.574]},{"from":[0,0],"to":[0.819,-0.574]},{"from":[0.819,0.574],"to":[0,0.574],"dashed":true},{"from":[0.819,-0.574],"to":[0,-0.574],"dashed":true}],"points":[{"at":[0.819,0.574],"label":"(x, y)"}],"texts":[{"at":[0.4,0.15],"text":"t"},{"at":[0.37,-0.17],"text":"β"},{"at":[0.5,0.36],"text":"r"},{"at":[0.5,-0.36],"text":"r"}]}
{{< /apfigure >}}

Recall that an angle's **reference angle** is the acute angle, $t'$, formed by the terminal side of the angle $t$ and the horizontal axis. A reference angle is always an angle between $0$ and $90^\circ$, or $0$ and $\tfrac{\pi}{2}$ radians. As we can see from the panels below, for any angle in quadrants II, III, or IV, there is a reference angle in quadrant I.

{{< callout type="info" >}}
  **Source note.** The source module (m49372) writes this sentence with a bare
  $t$ in both places — “the acute angle, $t$, formed by the terminal side of
  the angle $t$” — which defines the reference angle to be the very angle it
  is measured from. That is false outside quadrant I, and it contradicts the
  same book's own definition one section earlier (m49371, transcribed in
  [Angles](../01-angles/)), which names the reference angle $t'$ in both the
  running prose and the Coterminal and Reference Angles callout. This page
  restores the prime, here and in the Key concepts below; the panels that
  follow are labelled $t'$ accordingly.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Quadrant I. An angle t of 20 degrees in standard position; since it already lies in the first quadrant, it is its own reference angle, t prime = t.","xMin":-1.3,"xMax":1.3,"yMin":-1.3,"yMax":1.3,"grid":false,"tickLabels":false,"quadrantLabels":true,"unit":95,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.4,"from":0,"to":20}],"segments":[{"from":[0,0],"to":[0.94,0.342]}],"texts":[{"at":[0.42,0.1],"text":"t = t′"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Quadrant II. An angle t of 160 degrees in standard position, with reference angle t prime the acute angle of 20 degrees between the terminal side and the negative x-axis.","xMin":-1.3,"xMax":1.3,"yMin":-1.3,"yMax":1.3,"grid":false,"tickLabels":false,"quadrantLabels":true,"unit":95,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.55,"from":0,"to":160},{"at":[0,0],"r":0.3,"from":160,"to":180}],"segments":[{"from":[0,0],"to":[-0.94,0.342]}],"texts":[{"at":[0.15,0.62],"text":"t"},{"at":[-0.5,0.08],"text":"t′"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Quadrant III. An angle t of 200 degrees in standard position, with reference angle t prime the acute angle of 20 degrees between the terminal side and the negative x-axis.","xMin":-1.3,"xMax":1.3,"yMin":-1.3,"yMax":1.3,"grid":false,"tickLabels":false,"quadrantLabels":true,"unit":95,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.55,"from":0,"to":200},{"at":[0,0],"r":0.3,"from":180,"to":200}],"segments":[{"from":[0,0],"to":[-0.94,-0.342]}],"texts":[{"at":[0.15,-0.62],"text":"t"},{"at":[-0.5,-0.08],"text":"t′"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Quadrant IV. An angle t of 340 degrees in standard position, with reference angle t prime the acute angle of 20 degrees between the terminal side and the positive x-axis.","xMin":-1.3,"xMax":1.3,"yMin":-1.3,"yMax":1.3,"grid":false,"tickLabels":false,"quadrantLabels":true,"unit":95,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.55,"from":0,"to":340},{"at":[0,0],"r":0.3,"from":340,"to":360}],"segments":[{"from":[0,0],"to":[0.94,-0.342]}],"texts":[{"at":[0.35,0.32],"text":"t"},{"at":[0.5,-0.08],"text":"t′"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **How to:** given an angle between $0$ and $2\pi$, find its reference angle.

  1. An angle in the first quadrant is its own reference angle.
  2. For an angle in the second or third quadrant, the reference angle is $|\pi-t|$ or $|180^\circ-t|$.
  3. For an angle in the fourth quadrant, the reference angle is $2\pi-t$ or $360^\circ-t$.
  4. If an angle is less than $0$ or greater than $2\pi$, add or subtract $2\pi$ as many times as needed to find an equivalent angle between $0$ and $2\pi$.
{{< /callout >}}

**Example.** Find the reference angle of $225^\circ$, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle divided into quadrants, with an angle of 225 degrees in standard position, terminal side in the third quadrant, and its reference angle of 45 degrees marked between the terminal side and the negative x-axis.","xMin":-1.4,"xMax":1.4,"yMin":-1.4,"yMax":1.4,"grid":false,"tickLabels":false,"unit":100,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":0.4,"from":0,"to":225},{"at":[0,0],"r":0.22,"from":180,"to":225}],"segments":[{"from":[0,0],"to":[-0.707,-0.707]}],"texts":[{"at":[-0.26,0.628],"text":"225°"},{"at":[-0.277,-0.115],"text":"t"}]}
{{< /apfigure >}}

**Solution.** Because $225^\circ$ is in the third quadrant, the reference angle is

$$|(180^\circ-225^\circ)|=|-45^\circ|=45^\circ$$

{{< fillin
  question="Find the reference angle of $\tfrac{5\pi}{3}$."
  answer="\pi/3"
  answerForm="radians"
  answerDisplay="$\tfrac{\pi}{3}$"
  hint="$\tfrac{5\pi}{3}$ is in the fourth quadrant, so its reference angle is $2\pi-\tfrac{5\pi}{3}$."
>}}

## Using Reference Angles

Now let's take a moment to reconsider the Ferris wheel introduced at the beginning of this section. Suppose a rider snaps a photograph while stopped twenty feet above ground level. The rider then rotates three-quarters of the way around the circle. What is the rider's new elevation? To answer questions such as this one, we need to evaluate the sine or cosine functions at angles that are greater than $90$ degrees or at a negative angle. Reference angles make it possible to evaluate trigonometric functions for angles outside the first quadrant. They can also be used to find $(x,y)$ coordinates for those angles. We will use the reference angle of the angle of rotation combined with the quadrant in which the terminal side of the angle lies.

### Using Reference Angles to Evaluate Trigonometric Functions

We can find the cosine and sine of any angle in any quadrant if we know the cosine or sine of its reference angle. The absolute values of the cosine and sine of an angle are the same as those of the reference angle. The sign depends on the quadrant of the original angle. The cosine will be positive or negative depending on the sign of the $x$-values in that quadrant. The sine will be positive or negative depending on the sign of the $y$-values in that quadrant.

{{< callout type="info" >}}
  **Using Reference Angles to Find Cosine and Sine.** Angles have cosines and sines with the same absolute value as cosines and sines of their reference angles. The sign (positive or negative) can be determined from the quadrant of the angle.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given an angle in standard position, find the reference angle, and the cosine and sine of the original angle.

  1. Measure the angle between the terminal side of the given angle and the horizontal axis. That is the reference angle.
  2. Determine the values of the cosine and sine of the reference angle.
  3. Give the cosine the same sign as the $x$-values in the quadrant of the original angle.
  4. Give the sine the same sign as the $y$-values in the quadrant of the original angle.
{{< /callout >}}

**Example.** ⓐ Using a reference angle, find the exact value of $\cos(150^\circ)$ and $\sin(150^\circ)$. ⓑ Using the reference angle, find $\cos\tfrac{5\pi}{4}$ and $\sin\tfrac{5\pi}{4}$.

**Solution.** ⓐ $150^\circ$ is located in the second quadrant. The angle it makes with the $x$-axis is $180^\circ-150^\circ=30^\circ$, so the reference angle is $30^\circ$.

This tells us that $150^\circ$ has the same sine and cosine values as $30^\circ$, except for the sign. We know that

$$\cos(30^\circ)=\tfrac{\sqrt3}{2}\ \text{and}\ \sin(30^\circ)=\tfrac12$$

Since $150^\circ$ is in the second quadrant, the $x$-coordinate of the point on the circle is negative, so the cosine value is negative. The $y$-coordinate is positive, so the sine value is positive.

$$\cos(150^\circ)=-\tfrac{\sqrt3}{2}\ \text{and}\ \sin(150^\circ)=\tfrac12$$

ⓑ $\tfrac{5\pi}{4}$ is in the third quadrant. Its reference angle is $\tfrac{5\pi}{4}-\pi=\tfrac{\pi}{4}$. The cosine and sine of $\tfrac{\pi}{4}$ are both $\tfrac{\sqrt2}{2}$. In the third quadrant, both $x$ and $y$ are negative, so:

$$\cos\tfrac{5\pi}{4}=-\tfrac{\sqrt2}{2}\ \text{and}\ \sin\tfrac{5\pi}{4}=-\tfrac{\sqrt2}{2}$$

For part ⓐ, use the reference angle of $315^\circ$:

{{< fillin
  question="Find $\cos(315^\circ)$."
  answer="\sqrt2/2"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{\sqrt2}{2}$"
  hint="$315^\circ$ is in the fourth quadrant with reference angle $45^\circ$; cosine is positive in quadrant IV."
>}}

{{< fillin
  question="Find $\sin(315^\circ)$."
  answer="-\sqrt2/2"
  answerForm="evaluated-trig"
  answerDisplay="$-\tfrac{\sqrt2}{2}$"
  hint="$315^\circ$ is in the fourth quadrant with reference angle $45^\circ$; sine is negative in quadrant IV."
>}}

For part ⓑ, use the reference angle of $-\tfrac{\pi}{6}$:

{{< fillin
  question="Find $\cos\left(-\tfrac{\pi}{6}\right)$."
  answer="\sqrt3/2"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{\sqrt3}{2}$"
  hint="$-\tfrac{\pi}{6}$ is in the fourth quadrant with reference angle $\tfrac{\pi}{6}$; cosine is positive in quadrant IV."
>}}

{{< fillin
  question="Find $\sin\left(-\tfrac{\pi}{6}\right)$."
  answer="-1/2"
  answerForm="evaluated-trig"
  answerDisplay="$-\tfrac12$"
  hint="$-\tfrac{\pi}{6}$ is in the fourth quadrant with reference angle $\tfrac{\pi}{6}$; sine is negative in quadrant IV."
>}}

### Using Reference Angles to Find Coordinates

Now that we have learned how to find the cosine and sine values for special angles in the first quadrant, we can use symmetry and reference angles to fill in cosine and sine values for the rest of the special angles on the unit circle. They are shown below. Take time to learn the $(x,y)$ coordinates of all of the major angles in the first quadrant.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The unit circle with special angles marked every 30 or 45 degrees around the circle, showing the coordinates of each corresponding point.","xMin":-1.5,"xMax":1.5,"yMin":-1.5,"yMax":1.5,"grid":false,"tickLabels":false,"unit":170,"circles":[{"at":[0,0],"r":1}],"points":[{"at":[1,0],"label":"(1, 0)"},{"at":[0.866,0.5],"label":"(√3/2, 1/2)"},{"at":[0.707,0.707],"label":"(√2/2, √2/2)"},{"at":[0.5,0.866],"label":"(1/2, √3/2)"},{"at":[0,1],"label":"(0, 1)"},{"at":[-0.5,0.866],"label":"(-1/2, √3/2)"},{"at":[-0.707,0.707],"label":"(-√2/2, √2/2)"},{"at":[-0.866,0.5],"label":"(-√3/2, 1/2)"},{"at":[-1,0],"label":"(-1, 0)"},{"at":[-0.866,-0.5],"label":"(-√3/2, -1/2)"},{"at":[-0.707,-0.707],"label":"(-√2/2, -√2/2)"},{"at":[-0.5,-0.866],"label":"(-1/2, -√3/2)"},{"at":[0,-1],"label":"(0, -1)"},{"at":[0.5,-0.866],"label":"(1/2, -√3/2)"},{"at":[0.707,-0.707],"label":"(√2/2, -√2/2)"},{"at":[0.866,-0.5],"label":"(√3/2, -1/2)"}]}
{{< /apfigure >}}

The figure above is dense enough that its degree and radian labels are set out separately in the table below, angle by angle around the circle, so both stay legible.

| Angle | Degrees | Coordinates |
| :--- | :--- | :--- |
| $0$ | $0^\circ$ | $(1,0)$ |
| $\tfrac{\pi}{6}$ | $30^\circ$ | $\left(\tfrac{\sqrt3}{2},\tfrac12\right)$ |
| $\tfrac{\pi}{4}$ | $45^\circ$ | $\left(\tfrac{\sqrt2}{2},\tfrac{\sqrt2}{2}\right)$ |
| $\tfrac{\pi}{3}$ | $60^\circ$ | $\left(\tfrac12,\tfrac{\sqrt3}{2}\right)$ |
| $\tfrac{\pi}{2}$ | $90^\circ$ | $(0,1)$ |
| $\tfrac{2\pi}{3}$ | $120^\circ$ | $\left(-\tfrac12,\tfrac{\sqrt3}{2}\right)$ |
| $\tfrac{3\pi}{4}$ | $135^\circ$ | $\left(-\tfrac{\sqrt2}{2},\tfrac{\sqrt2}{2}\right)$ |
| $\tfrac{5\pi}{6}$ | $150^\circ$ | $\left(-\tfrac{\sqrt3}{2},\tfrac12\right)$ |
| $\pi$ | $180^\circ$ | $(-1,0)$ |
| $\tfrac{7\pi}{6}$ | $210^\circ$ | $\left(-\tfrac{\sqrt3}{2},-\tfrac12\right)$ |
| $\tfrac{5\pi}{4}$ | $225^\circ$ | $\left(-\tfrac{\sqrt2}{2},-\tfrac{\sqrt2}{2}\right)$ |
| $\tfrac{4\pi}{3}$ | $240^\circ$ | $\left(-\tfrac12,-\tfrac{\sqrt3}{2}\right)$ |
| $\tfrac{3\pi}{2}$ | $270^\circ$ | $(0,-1)$ |
| $\tfrac{5\pi}{3}$ | $300^\circ$ | $\left(\tfrac12,-\tfrac{\sqrt3}{2}\right)$ |
| $\tfrac{7\pi}{4}$ | $315^\circ$ | $\left(\tfrac{\sqrt2}{2},-\tfrac{\sqrt2}{2}\right)$ |
| $\tfrac{11\pi}{6}$ | $330^\circ$ | $\left(\tfrac{\sqrt3}{2},-\tfrac12\right)$ |

In addition to learning the values for special angles, we can use reference angles to find $(x,y)$ coordinates of any point on the unit circle, using what we know of reference angles along with the identities

$$x=\cos t\qquad y=\sin t$$

First we find the reference angle corresponding to the given angle. Then we take the sine and cosine values of the reference angle, and give them the signs corresponding to the $y$- and $x$-values of the quadrant.

{{< callout type="info" >}}
  **How to:** given the angle of a point on a circle and the radius of the circle, find the $(x,y)$ coordinates of the point.

  1. Find the reference angle by measuring the smallest angle to the $x$-axis.
  2. Find the cosine and sine of the reference angle.
  3. Determine the appropriate signs for $x$ and $y$ in the given quadrant.
{{< /callout >}}

**Example.** Find the coordinates of the point on the unit circle at an angle of $\tfrac{7\pi}{6}$.

**Solution.** We know that the angle $\tfrac{7\pi}{6}$ is in the third quadrant.

First, let's find the reference angle by measuring the angle to the $x$-axis. To find the reference angle of an angle whose terminal side is in quadrant III, we find the difference of the angle and $\pi$.

$$\tfrac{7\pi}{6}-\pi=\tfrac{\pi}{6}$$

Next, we will find the cosine and sine of the reference angle:

$$\cos\left(\tfrac{\pi}{6}\right)=\tfrac{\sqrt3}{2}\qquad\sin\left(\tfrac{\pi}{6}\right)=\tfrac12$$

We must determine the appropriate signs for $x$ and $y$ in the given quadrant. Because our original angle is in the third quadrant, where both $x$ and $y$ are negative, both cosine and sine are negative.

$$
\begin{array}{lrcl}
& \cos\left(\tfrac{7\pi}{6}\right) &=& -\tfrac{\sqrt3}{2} \\[4pt]
& \sin\left(\tfrac{7\pi}{6}\right) &=& -\tfrac12
\end{array}
$$

Now we can calculate the $(x,y)$ coordinates using the identities $x=\cos\theta$ and $y=\sin\theta$.

The coordinates of the point are $\left(-\tfrac{\sqrt3}{2},-\tfrac12\right)$ on the unit circle.

{{< fillin
  question="Find the coordinates of the point on the unit circle at an angle of $\tfrac{5\pi}{3}$. Enter your answer as an ordered pair $(x,y)$."
  answer="(1/2,-\sqrt3/2)"
  answerForm="evaluated-trig"
  answerDisplay="$\left(\tfrac12,-\tfrac{\sqrt3}{2}\right)$"
  hint="$\tfrac{5\pi}{3}$ is in the fourth quadrant, with reference angle $\tfrac{\pi}{3}$."
>}}

## Key equations

| Cosine | $\cos t=x$ |
| :--- | :--- |
| Sine | $\sin t=y$ |
| Pythagorean Identity | $\cos^2 t+\sin^2 t=1$ |

## Key concepts

- Finding the function values for the sine and cosine begins with drawing a unit circle, which is centered at the origin and has a radius of $1$ unit.
- Using the unit circle, the sine of an angle $t$ equals the $y$-value of the endpoint on the unit circle of an arc of length $t$, whereas the cosine of an angle $t$ equals the $x$-value of the endpoint.
- The sine and cosine values are most directly determined when the corresponding point on the unit circle falls on an axis.
- When the sine or cosine is known, we can use the Pythagorean Identity to find the other. The Pythagorean Identity is also useful for determining the sines and cosines of special angles.
- Calculators and graphing software are helpful for finding sines and cosines if the proper procedure for entering information is known.
- The domain of the sine and cosine functions is all real numbers.
- The range of both the sine and cosine functions is $[-1,1]$.
- The sine and cosine of an angle have the same absolute value as the sine and cosine of its reference angle.
- The signs of the sine and cosine are determined from the $x$- and $y$-values in the quadrant of the original angle.
- An angle's reference angle is the acute angle, $t'$, formed by the terminal side of the angle $t$ and the horizontal axis.
- Reference angles can be used to find the sine and cosine of the original angle.
- Reference angles can also be used to find the coordinates of a point on a circle.

## Practice

### Find function values for the sine and cosine of $30^\circ$ or $\left(\tfrac{\pi}{6}\right)$, $45^\circ$ or $\left(\tfrac{\pi}{4}\right)$, and $60^\circ$ or $\left(\tfrac{\pi}{3}\right)$

{{< fillin
  question="Find the exact value: $\sin\tfrac{\pi}{3}$."
  answer="\sqrt3/2"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{\sqrt3}{2}$"
  hint="$\tfrac{\pi}{3}$ is $60^\circ$; read the $y$-coordinate of the special-angle point $\left(\tfrac12,\tfrac{\sqrt3}{2}\right)$."
>}}

{{< fillin
  question="Find the exact value: $\cos\tfrac{\pi}{3}$."
  answer="1/2"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac12$"
  hint="$\tfrac{\pi}{3}$ is $60^\circ$; read the $x$-coordinate of the special-angle point $\left(\tfrac12,\tfrac{\sqrt3}{2}\right)$."
>}}

{{< fillin
  question="Find the exact value: $\cos\tfrac{\pi}{6}$."
  answer="\sqrt3/2"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{\sqrt3}{2}$"
  hint="$\tfrac{\pi}{6}$ is $30^\circ$; read the $x$-coordinate of the special-angle point $\left(\tfrac{\sqrt3}{2},\tfrac12\right)$."
>}}

### Identify the domain and range of sine and cosine functions

{{< fillin
  question="State the range of the sine and cosine functions. Write your answer in interval notation."
  answer="[-1,1]"
  answerDisplay="$[-1,1]$"
  hint="Both coordinates of any point on the unit circle stay between $-1$ and $1$."
>}}

{{< multiplechoice
  question="Given $\sin(t)>0$ and $\cos(t)>0$, in which quadrant does the terminal point determined by $t$ lie?"
  answer="Quadrant I"
  hint="Positive sine means $y>0$; positive cosine means $x>0$."
>}}
Quadrant I
Quadrant II
Quadrant III
Quadrant IV
{{< /multiplechoice >}}

{{< multiplechoice
  question="Given $\sin(t)<0$ and $\cos(t)>0$, in which quadrant does the terminal point determined by $t$ lie?"
  answer="Quadrant IV"
  hint="Negative sine means $y<0$; positive cosine means $x>0$."
>}}
Quadrant I
Quadrant II
Quadrant III
Quadrant IV
{{< /multiplechoice >}}

### Use reference angles to evaluate trigonometric functions

{{< fillin
  question="State the reference angle for $240^\circ$."
  answer="60^\circ"
  answerForm="degrees"
  answerDisplay="$60^\circ$"
  hint="$240^\circ$ is in the third quadrant, so its reference angle is $240^\circ-180^\circ$."
>}}

{{< fillin
  question="State the reference angle for $\tfrac{2\pi}{3}$."
  answer="\pi/3"
  answerForm="radians"
  answerDisplay="$\tfrac{\pi}{3}$"
  hint="$\tfrac{2\pi}{3}$ is in the second quadrant, so its reference angle is $\pi-\tfrac{2\pi}{3}$."
>}}

For $135^\circ$, find the reference angle, the quadrant of the terminal side, and the sine and cosine of the angle.

{{< fillin
  question="State the reference angle for $135^\circ$."
  answer="45^\circ"
  answerForm="degrees"
  answerDisplay="$45^\circ$"
  hint="$135^\circ$ is in the second quadrant, so its reference angle is $180^\circ-135^\circ$."
>}}

{{< multiplechoice
  question="Which quadrant is the terminal side of $135^\circ$ in?"
  answer="Quadrant II"
  hint="$135^\circ$ is between $90^\circ$ and $180^\circ$."
>}}
Quadrant I
Quadrant II
Quadrant III
Quadrant IV
{{< /multiplechoice >}}

{{< fillin
  question="Find $\sin(135^\circ)$."
  answer="\sqrt2/2"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{\sqrt2}{2}$"
  hint="The reference angle is $45^\circ$, and sine is positive in quadrant II."
>}}

{{< fillin
  question="Find $\cos(135^\circ)$."
  answer="-\sqrt2/2"
  answerForm="evaluated-trig"
  answerDisplay="$-\tfrac{\sqrt2}{2}$"
  hint="The reference angle is $45^\circ$, and cosine is negative in quadrant II."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 5.2: Unit Circle: Sine and Cosine Functions](https://openstax.org/books/precalculus-2e/pages/5-2-unit-circle-sine-and-cosine-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the opening Ferris-wheel credit photograph (Figure 1), which carries no mathematics; recreated all eighteen instructional figures as accessible spec-first SVGs built from exact coordinates — the general unit circle with angle $t$, arc $s$, and the dropped $\sin t$/$\cos t$ legs; the first-quadrant $(\cos t,\sin t)$ figure; the two worked-example unit-circle figures (the $\left(\tfrac12,\tfrac{\sqrt3}{2}\right)$ point and the $(0,1)$ point at $90^\circ$); the Pythagorean-identity right-triangle figure; the $\sin(t)=\tfrac37$ figure; the $45^\circ$ inscribed-triangle figure and its companion full-circle $y=x$ figure; the $30^\circ$/$-30^\circ$ inscribed-triangle figure and the two-30-60-90-triangles construction (the latter as a `kind="figure"` geometric primitive, not a graph); the $BAD$/$ABC$ $60^\circ$ construction circle; the quarter-circle common-angles figure with its axis guide lines; the bare domain/range circle; the two same-sine/same-cosine reference-angle panels; the four-panel (quadrant I–IV) reference-angle schematic, drawn with a representative $20^\circ$ reference angle in place of the source's unlabeled generic angle so every panel has exact, checkable geometry; and the $225^\circ$ reference-angle example. Presented the angle/cosine/sine correspondence as a Markdown table (Table 1). Recreated the full special-angles unit circle (Figure 17) with sixteen points labeled by coordinates only — its source labels also carry the degree and radian measure at each point, and testing showed sixteen three-part labels collide unreadably at any figure size the layout engine can fit — and added a companion Markdown table immediately below it giving the degree and radian measure paired with each point's coordinates, so no information from the source figure is lost. Converted the "Given a point $P(x,y)$..." and other two-column How To lists into the book's callout convention. Presented the four data tables (special-angle values, and three inline correspondence lists) as Markdown where the source used prose or `<mtable>` layout. Omitted the "Access these online resources" media links. Split the Try It after Example 1 into a single combined fill-in for $\cos t$ and $\sin t$ (an ordered pair, since the printed point already equals the answer, matching the worked example's own triviality) and added a "round to four decimal places" instruction to the calculator Try It (Try It 4), which the source leaves unrounded, to make it gradable as a decimal. Split every other Try It that asks for both $\cos t$ and $\sin t$ at a *named numeric* angle (Try It 2, at $\pi$; Try It 6, at $315^\circ$ and at $-\tfrac{\pi}{6}$) into one `fillin` per value, each carrying `answerForm="evaluated-trig"` — one value per question, so each response is unambiguous and the feedback names the value it belongs to. (These were split when a combined comma-separated answer could not enforce `evaluated-trig` at all; the grader now applies a declared form to every member of a list, so the split is a presentation choice rather than the only way to close the retype hole.) Every exact trigonometric value in this section is graded with `answerForm="evaluated-trig"`, every reference-angle-measure answer declares `degrees` or `radians` to pin the source's printed unit, and the range question requires interval-notation input. Adapted eleven selected end-of-section exercises — three exact-value evaluations, one range identification, two quadrant-from-sign items, two reference-angle measures, and one four-part reference-angle/quadrant/sine/cosine item — into twelve interactive components in a closing Practice block, one group per objective. The domain/range objective's Practice group draws its second and third items from the Algebraic exercise set's quadrant-from-sign questions rather than a second domain or range question, because the section's only end-of-section domain exercise with a printed answer is the range item transcribed here; the sibling "state the domain" exercise (module m49372) prints no answer in the key. One upstream defect is corrected here: the source module's reference-angle definition writes a bare $t$ for both the reference angle and the angle it is measured from ("the acute angle, $t$, formed by the terminal side of the angle $t$"), which defines the reference angle to be that same angle — false outside quadrant I, and contradicted by the same book's own definition one section earlier (m49371), which names it $t'$. This page writes $t'$ in the running prose and in the Key concepts bullet, matching the reference-angle panels' own labels, and carries a visible source note beside the correction in addition to this footer.</small>
