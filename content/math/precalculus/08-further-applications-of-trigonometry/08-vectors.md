---
title: Vectors
description: >-
  Defining vectors geometrically, finding magnitude and direction, adding and
  scaling vectors, resolving components and unit vectors, working in $i$ and
  $j$ notation, and computing the dot product of two vectors — including an
  airplane's ground speed and bearing — adapted from OpenStax Precalculus 2e,
  Section 8.8.
source_section: "8.8"
weight: 8
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- View vectors geometrically
- Find magnitude and direction
- Perform vector addition and scalar multiplication
- Find the component form of a vector
- Find the unit vector in the direction of $v$
- Perform operations with vectors in terms of $i$ and $j$
- Find the dot product of two vectors
{{< /callout >}}

An airplane is flying at an airspeed of $200$ miles per hour headed on a SE bearing of $140^\circ$. A north wind (blowing from north to south) is blowing at $16.2$ miles per hour, as shown below. What are the ground speed and actual bearing of the plane?

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vector diagram for an airplane's flight, not to scale: a north reference ray from point O through A, a 140-degree angle from north to the airspeed vector OC pointing southeast, the wind vector CB pointing due south from C, and the resultant ground-track vector OB, with the angle alpha between OC and OB.","xMin":-1.6,"xMax":4.6,"yMin":-5.2,"yMax":4.6,"grid":false,"tickLabels":false,"unit":52,"points":[{"at":[0,0],"label":"O"},{"at":[0,3.3],"label":"A"},{"at":[2.5712,-3.0642],"label":"C"},{"at":[2.5712,-4.3642],"label":"B"}],"segments":[{"from":[0,0],"to":[0,4],"arrows":"end"},{"from":[0,0],"to":[2.5712,-3.0642],"arrows":"end","label":"200","labelSide":"e"},{"from":[2.5712,-3.0642],"to":[2.5712,-4.3642],"arrows":"end","label":"16.2","labelSide":"e"},{"from":[0,0],"to":[2.5712,-4.3642],"arrows":"end","label":"x","labelSide":"w"}],"circles":[{"at":[0,0],"r":0.95,"from":-50,"to":90},{"at":[0,0],"r":0.5,"from":-59.5,"to":-50}],"texts":[{"at":[0.42,4.15],"text":"N"},{"at":[1.08,0.62],"text":"140°"},{"at":[1.61,-2.29],"text":"α"}]}
{{< /apfigure >}}

Ground speed refers to the speed of a plane relative to the ground. Airspeed refers to the speed a plane can travel relative to its surrounding air mass. These two quantities are not the same because of the effect of wind. In an earlier section, we used triangles to solve a similar problem involving the movement of boats. Later in this section, we will find the airplane's ground speed and bearing while investigating another approach to problems of this type. First, however, let's examine the basics of vectors.

### A Geometric View of Vectors

A **vector** is a specific quantity drawn as a line segment with an arrowhead at one end. It has an **initial point**, where it begins, and a **terminal point**, where it ends. A vector is defined by its **magnitude**, or the length of the line, and its direction, indicated by an arrowhead at the terminal point. Thus, a vector is a directed line segment. There are various symbols that distinguish vectors from other quantities:

- Lower case, boldfaced type, with or without an arrow on top, such as $\mathbf{v}$, $\mathbf{u}$, $\mathbf{w}$, $\vec{\mathbf{v}}$, $\vec{\mathbf{u}}$, $\vec{\mathbf{w}}$.
- Given initial point $P$ and terminal point $Q$, a vector can be represented as $\overrightarrow{PQ}$. The arrowhead on top is what indicates that it is not just a line, but a directed line segment.
- Given an initial point of $(0,0)$ and terminal point $(a,b)$, a vector may be represented as $\langle a,b\rangle$.

This last symbol $\langle a,b\rangle$ has special significance. It is called the **standard position**. The **position vector** has an initial point $(0,0)$ and a terminal point $(a,b)$. To change any vector into the position vector, we think about the change in the $x$-coordinates and the change in the $y$-coordinates. Thus, if the initial point of a vector $\overrightarrow{CD}$ is $C(x_1,y_1)$ and the terminal point is $D(x_2,y_2)$, then the position vector is found by calculating

$$
\begin{array}{lrcl}
& \overrightarrow{AB} &=& \langle x_2-x_1,y_2-y_1\rangle \\[4pt]
& &=& \langle a,b\rangle
\end{array}
$$

In the figure below, we see the original vector $\overrightarrow{CD}$ and the position vector $\overrightarrow{AB}$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vector CD from a point (x1, y1) to a point (x2, y2), and its equivalent position vector AB from the origin to (a, b), both pointing the same direction with the same length.","xMin":-1,"xMax":8,"yMin":-1,"yMax":5,"grid":true,"tickLabels":true,"unit":45,"points":[{"at":[1,2],"label":"C(x₁, y₁)"},{"at":[7,4],"label":"D(x₂, y₂)"},{"at":[0,0],"label":"A"},{"at":[6,2],"label":"B(a, b)"}],"segments":[{"from":[1,2],"to":[7,4],"arrows":"end","label":"CD"},{"from":[0,0],"to":[6,2],"arrows":"end","label":"AB"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Properties of Vectors.** A vector is a directed line segment with an initial point and a terminal point. Vectors are identified by magnitude, or the length of the line, and direction, represented by the arrowhead pointing toward the terminal point. The position vector has an initial point at $(0,0)$ and is identified by its terminal point $(a,b)$.
{{< /callout >}}

**Example.** Consider the vector whose initial point is $P(2,3)$ and terminal point is $Q(6,4)$. Find the position vector.

**Solution.** The position vector is found by subtracting one $x$-coordinate from the other $x$-coordinate, and one $y$-coordinate from the other $y$-coordinate. Thus

$$
\begin{array}{lrcl}
& \mathbf{v} &=& \langle 6-2,4-3\rangle \\[4pt]
& &=& \langle 4,1\rangle
\end{array}
$$

The position vector begins at $(0,0)$ and terminates at $(4,1)$. The graphs of both vectors are shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vector from P(2, 3) to Q(6, 4), and its equivalent position vector from the origin to (4, 1).","xMin":-1,"xMax":8,"yMin":-2,"yMax":5,"grid":true,"tickLabels":true,"unit":45,"points":[{"at":[2,3],"label":"P(2, 3)"},{"at":[6,4],"label":"Q(6, 4)"}],"segments":[{"from":[2,3],"to":[6,4],"arrows":"end"},{"from":[0,0],"to":[4,1],"arrows":"end","label":"⟨4, 1⟩","labelSide":"e"}]}
{{< /apfigure >}}

We see that the position vector is $\langle 4,1\rangle$.

**Example.** Find the position vector given that vector $\mathbf{v}$ has an initial point at $(-3,2)$ and a terminal point at $(4,5)$, then graph both vectors in the same plane.

**Solution.** The position vector is found using the following calculation:

$$
\begin{array}{lrcl}
& \mathbf{v} &=& \langle 4-(-3),5-2\rangle \\[4pt]
& &=& \langle 7,3\rangle
\end{array}
$$

Thus, the position vector begins at $(0,0)$ and terminates at $(7,3)$. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vector from (-3, 2) to (4, 5), and its equivalent position vector from the origin to (7, 3).","xMin":-4,"xMax":8,"yMin":-2,"yMax":6,"grid":true,"tickLabels":true,"unit":40,"points":[{"at":[-3,2],"label":"(-3, 2)"},{"at":[4,5],"label":"(4, 5)"}],"segments":[{"from":[-3,2],"to":[4,5],"arrows":"end"},{"from":[0,0],"to":[7,3],"arrows":"end","label":"Position vector","labelSide":"e"}]}
{{< /apfigure >}}

{{< fillin
  question="Write the vector from the origin to the point $(3,5)$ in terms of $i$ and $j$."
  answer="3i+5j"
  answerDisplay="$3i+5j$"
  hint="Since the vector begins at the origin, its component form uses the terminal point's coordinates as the coefficients of $i$ and $j$."
>}}

### Finding Magnitude and Direction

To work with a vector, we need to be able to find its magnitude and its direction. We find its magnitude using the Pythagorean Theorem or the distance formula, and we find its direction using the inverse tangent function.

{{< callout type="info" >}}
  **Magnitude and Direction of a Vector.** Given a position vector $\mathbf{v}=\langle a,b\rangle$, the magnitude is found by $\lvert\mathbf{v}\rvert=\sqrt{a^2+b^2}$. The direction is equal to the angle formed with the $x$-axis, or with the $y$-axis, depending on the application. For a position vector, the direction is found by $\tan\theta=\left(\tfrac{b}{a}\right)\Rightarrow\theta=\tan^{-1}\left(\tfrac{b}{a}\right)$, as illustrated in the figure below.

  Two vectors $\mathbf{v}$ and $\mathbf{u}$ are considered equal if they have the same magnitude and the same direction. Additionally, if both vectors have the same position vector, they are equal.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A position vector v extending from the origin to the point (a, b), with the direction angle theta marked between the vector and the positive x-axis.","xMin":-1,"xMax":5,"yMin":-1,"yMax":4,"grid":true,"tickLabels":true,"unit":55,"points":[{"at":[4,3],"label":"⟨a, b⟩"}],"segments":[{"from":[0,0],"to":[4,3],"arrows":"end","label":"v"}],"circles":[{"at":[0,0],"r":0.8,"from":0,"to":36.87}],"texts":[{"at":[0.95,0.36],"text":"θ"}]}
{{< /apfigure >}}

**Example.** Find the magnitude and direction of the vector with initial point $P(-8,1)$ and terminal point $Q(-2,-5)$. Draw the vector.

**Solution.** First, find the position vector.

$$
\begin{array}{lrcl}
& \mathbf{u} &=& \langle -2-(-8),-5-1\rangle \\[4pt]
& &=& \langle 6,-6\rangle
\end{array}
$$

We use the Pythagorean Theorem to find the magnitude.

$$
\begin{array}{lrcl}
& \lvert\mathbf{u}\rvert &=& \sqrt{(6)^2+(-6)^2} \\[4pt]
& &=& \sqrt{72} \\[4pt]
& &=& 6\sqrt2
\end{array}
$$

The direction is given as

$$
\begin{array}{lrcl}
& \tan\theta &=& \tfrac{-6}{6}=-1\Rightarrow\theta=\tan^{-1}(-1) \\[4pt]
& &=& -45^\circ
\end{array}
$$

However, the angle terminates in the fourth quadrant, so we add $360^\circ$ to obtain a positive angle. Thus, $-45^\circ+360^\circ=315^\circ$. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A position vector u from the origin to (6, -6) in the fourth quadrant, with its direction angle of 315 degrees marked sweeping counterclockwise from the positive x-axis.","xMin":-3,"xMax":7.5,"yMin":-8,"yMax":2.6,"grid":true,"tickLabels":true,"unit":38,"points":[{"at":[6,-6],"label":"⟨6, -6⟩"}],"segments":[{"from":[0,0],"to":[6,-6],"arrows":"end","label":"|u| = 6√2","labelSide":"w"}],"circles":[{"at":[0,0],"r":1.9,"from":0,"to":315}],"texts":[{"at":[-1.15,2.15],"text":"315°"}]}
{{< /apfigure >}}

**Example.** Show that vector $\mathbf{v}$ with initial point at $(5,-3)$ and terminal point at $(-1,2)$ is equal to vector $\mathbf{u}$ with initial point at $(-1,-3)$ and terminal point at $(-7,2)$. Draw the position vector on the same grid as $\mathbf{v}$ and $\mathbf{u}$. Next, find the magnitude and direction of each vector.

**Solution.** Draw the vector $\mathbf{v}$ starting at initial point $(5,-3)$ and terminal point $(-1,2)$. Draw the vector $\mathbf{u}$ with initial point $(-1,-3)$ and terminal point $(-7,2)$. Find the standard position for each.

Next, find and sketch the position vector for $\mathbf{v}$ and $\mathbf{u}$. We have

$$
\begin{array}{lrcl}
& \mathbf{v} &=& \langle -1-5,2-(-3)\rangle \\[4pt]
& &=& \langle -6,5\rangle
\end{array}
$$

$$
\begin{array}{lrcl}
& \mathbf{u} &=& \langle -7-(-1),2-(-3)\rangle \\[4pt]
& &=& \langle -6,5\rangle
\end{array}
$$

Since the position vectors are the same, $\mathbf{v}$ and $\mathbf{u}$ are the same.

An alternative way to check for vector equality is to show that the magnitude and direction are the same for both vectors. To show that the magnitudes are equal, use the Pythagorean Theorem.

$$
\begin{array}{lrcl}
& \lvert\mathbf{v}\rvert &=& \sqrt{(-1-5)^2+(2-(-3))^2} \\[4pt]
& &=& \sqrt{(-6)^2+(5)^2} \\[4pt]
& &=& \sqrt{36+25} \\[4pt]
& &=& \sqrt{61}
\end{array}
$$

$$
\begin{array}{lrcl}
& \lvert\mathbf{u}\rvert &=& \sqrt{(-7-(-1))^2+(2-(-3))^2} \\[4pt]
& &=& \sqrt{(-6)^2+(5)^2} \\[4pt]
& &=& \sqrt{36+25} \\[4pt]
& &=& \sqrt{61}
\end{array}
$$

As the magnitudes are equal, we now need to verify the direction. Using the tangent function with the position vector gives

$$
\begin{array}{lrcl}
& \tan\theta &=& -\tfrac{5}{6}\Rightarrow\theta=\tan^{-1}\left(-\tfrac{5}{6}\right) \\[4pt]
& &=& -39.8^\circ
\end{array}
$$

However, we can see that the position vector terminates in the second quadrant, so we add $180^\circ$. Thus, the direction is $-39.8^\circ+180^\circ=140.2^\circ$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two equal vectors v and u drawn at different starting points but with the same length and direction, plus their shared position vector from the origin to (-6, 5), with its direction angle of 140.2 degrees marked from the positive x-axis.","xMin":-8,"xMax":5.5,"yMin":-4.5,"yMax":6.2,"grid":true,"tickLabels":true,"unit":36,"segments":[{"from":[5,-3],"to":[-1,2],"arrows":"end","label":"v"},{"from":[-1,-3],"to":[-7,2],"arrows":"end","label":"u"},{"from":[0,0],"to":[-6,5],"arrows":"end","label":"Position vector","labelSide":"w"}],"circles":[{"at":[0,0],"r":2.6,"from":0,"to":140.19}],"texts":[{"at":[1.19,3.29],"text":"140.2°"}]}
{{< /apfigure >}}

### Performing Vector Addition and Scalar Multiplication

Now that we understand the properties of vectors, we can perform operations involving them. While it is convenient to think of the vector $\mathbf{u}=\langle x,y\rangle$ as an arrow or directed line segment from the origin to the point $(x,y)$, vectors can be situated anywhere in the plane. The sum of two vectors $\mathbf{u}$ and $\mathbf{v}$, or **vector addition**, produces a third vector $\mathbf{u}+\mathbf{v}$, the **resultant** vector.

To find $\mathbf{u}+\mathbf{v}$, we first draw the vector $\mathbf{u}$, and from the terminal end of $\mathbf{u}$, we draw the vector $\mathbf{v}$. In other words, we have the initial point of $\mathbf{v}$ meet the terminal end of $\mathbf{u}$. This position corresponds to the notion that we move along the first vector and then, from its terminal point, we move along the second vector. The sum $\mathbf{u}+\mathbf{v}$ is the resultant vector because it results from addition or subtraction of two vectors. The resultant vector travels directly from the beginning of $\mathbf{u}$ to the end of $\mathbf{v}$ in a straight path, as shown below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"Two head-to-tail vector triangles. On the left, vector u followed by vector negative v, with the dashed resultant u minus v connecting the start of u to the tip of negative v. On the right, vector u followed by vector v, with the dashed resultant u plus v connecting the start of u to the tip of v.","unit":34,"segments":[{"from":[0,0],"to":[1.6,2.4],"arrow":true,"label":"u"},{"from":[1.6,2.4],"to":[3.4,-0.6],"arrow":true,"label":"−v"},{"from":[0,0],"to":[3.4,-0.6],"arrow":true,"dashed":true,"label":"u − v"},{"from":[6,0],"to":[7.6,2.4],"arrow":true,"label":"u"},{"from":[7.6,2.4],"to":[7,4.6],"arrow":true,"label":"v"},{"from":[6,0],"to":[7,4.6],"arrow":true,"dashed":true,"label":"u + v"}]}
{{< /apfigure >}}

Vector subtraction is similar to vector addition. To find $\mathbf{u}-\mathbf{v}$, view it as $\mathbf{u}+(-\mathbf{v})$. Adding $-\mathbf{v}$ is reversing the direction of $\mathbf{v}$ and adding it to the end of $\mathbf{u}$. The new vector begins at the start of $\mathbf{u}$ and stops at the end point of $-\mathbf{v}$. See the figure below for a visual that compares vector addition and vector subtraction using **parallelograms**.

{{< apfigure kind="figure" >}}
{"ariaLabel":"Two parallelograms illustrating vector addition and subtraction. On the left, a parallelogram with sides u and v and diagonal u plus v. On the right, a parallelogram with sides u and negative v and diagonal u minus v.","unit":34,"polygons":[{"points":[[0,0],[3,0],[4,1.8],[1,1.8]],"edgeLabels":["u","v",null,null]},{"points":[[5,0],[8,0],[7,-1.8],[4,-1.8]],"edgeLabels":["u","−v",null,null]}],"segments":[{"from":[0,0],"to":[4,1.8],"arrow":true,"label":"u + v"},{"from":[4,-1.8],"to":[8,0],"arrow":true,"label":"u − v"}]}
{{< /apfigure >}}

**Example.** Given $\mathbf{u}=\langle 3,-2\rangle$ and $\mathbf{v}=\langle -1,4\rangle$, find two new vectors $\mathbf{u}+\mathbf{v}$ and $\mathbf{u}-\mathbf{v}$.

**Solution.** To find the sum of two vectors, we add the components. Thus,

$$
\begin{array}{lrcl}
& \mathbf{u}+\mathbf{v} &=& \langle 3,-2\rangle+\langle -1,4\rangle \\[4pt]
& &=& \langle 3+(-1),-2+4\rangle \\[4pt]
& &=& \langle 2,2\rangle
\end{array}
$$

See figure (a) below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Vectors u and v drawn from the origin, with the dashed resultant u plus v equal to (2, 2).","xMin":-2,"xMax":4,"yMin":-3,"yMax":3,"grid":true,"tickLabels":true,"unit":55,"segments":[{"from":[0,0],"to":[3,-2],"arrows":"end","label":"u"},{"from":[0,0],"to":[-1,4],"arrows":"end","label":"v"},{"from":[0,0],"to":[2,2],"arrows":"end","dashed":true,"label":"u + v"}]}
{{< /apfigure >}}

*(a) Sum of two vectors.*

To find the difference of two vectors, add the negative components of $\mathbf{v}$ to $\mathbf{u}$. Thus,

$$
\begin{array}{lrcl}
& \mathbf{u}+(-\mathbf{v}) &=& \langle 3,-2\rangle+\langle 1,-4\rangle \\[4pt]
& &=& \langle 3+1,-2+(-4)\rangle \\[4pt]
& &=& \langle 4,-6\rangle
\end{array}
$$

See figure (b) below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Vectors u and negative v drawn from the origin, with the dashed resultant u minus v equal to (4, -6).","xMin":-3,"xMax":5,"yMin":-7,"yMax":1,"grid":true,"tickLabels":true,"unit":42,"segments":[{"from":[0,0],"to":[3,-2],"arrows":"end","label":"u"},{"from":[0,0],"to":[1,-4],"arrows":"end","label":"−v","labelSide":"w","nudge":[-10,-14]},{"from":[0,0],"to":[4,-6],"arrows":"end","dashed":true,"label":"u − v","labelSide":"e"}]}
{{< /apfigure >}}

*(b) Difference of two vectors.*

### Multiplying by a Scalar

While adding and subtracting vectors gives us a new vector with a different magnitude and direction, the process of multiplying a vector by a **scalar**, a constant, changes only the magnitude of the vector or the length of the line. Scalar multiplication has no effect on the direction unless the scalar is negative, in which case the direction of the resulting vector is opposite the direction of the original vector.

{{< callout type="info" >}}
  **Scalar Multiplication.** Scalar multiplication involves the product of a vector and a scalar. Each component of the vector is multiplied by the scalar. Thus, to multiply $\mathbf{v}=\langle a,b\rangle$ by $k$, we have

  $$k\mathbf{v}=\langle ka,kb\rangle$$

  Only the magnitude changes, unless $k$ is negative, and then the vector reverses direction.
{{< /callout >}}

**Example.** Given vector $\mathbf{v}=\langle 3,1\rangle$, find $3\mathbf{v}$, $\tfrac12\mathbf{v}$, and $-\mathbf{v}$.

**Solution.** See the figure below for a geometric interpretation. If $\mathbf{v}=\langle 3,1\rangle$, then

$$
\begin{array}{lrcl}
& 3\mathbf{v} &=& \langle 3\cdot3,3\cdot1\rangle \\[4pt]
& &=& \langle 9,3\rangle \\[4pt]
& \tfrac12\mathbf{v} &=& \left\langle \tfrac12\cdot3,\tfrac12\cdot1\right\rangle \\[4pt]
& &=& \left\langle \tfrac32,\tfrac12\right\rangle \\[4pt]
& -\mathbf{v} &=& \langle -3,-1\rangle
\end{array}
$$

{{< apfigure kind="figure" >}}
{"ariaLabel":"Four parallel vectors starting at separate points, showing scalar multiples of v: 3v is three times as long as v and points the same direction, one-half v is half as long and points the same direction, and negative v is the same length as v but points in the opposite direction.","unit":34,"segments":[{"from":[0,3],"to":[9,6],"arrow":true,"label":"3v"},{"from":[0,1.8],"to":[3,2.8],"arrow":true,"label":"v"},{"from":[0,0.8],"to":[1.5,1.3],"arrow":true,"label":"1/2 v"},{"from":[0,-0.3],"to":[-3,-1.3],"arrow":true,"label":"−v"}]}
{{< /apfigure >}}

**Analysis.** Notice that the vector $3\mathbf{v}$ is three times the length of $\mathbf{v}$, $\tfrac12\mathbf{v}$ is half the length of $\mathbf{v}$, and $-\mathbf{v}$ is the same length as $\mathbf{v}$, but in the opposite direction.

{{< fillin
  question="Find the scalar multiple $3\mathbf{u}$ given $\mathbf{u}=\langle 5,4\rangle$, and write the result in terms of $i$ and $j$."
  answer="15i+12j"
  answerDisplay="$15i+12j$"
  hint="Multiply each component of $\mathbf{u}$ by $3$, then write the result as a linear combination of $i$ and $j$."
>}}

**Example.** Given $\mathbf{u}=\langle 3,-2\rangle$ and $\mathbf{v}=\langle -1,4\rangle$, find a new vector $\mathbf{w}=3\mathbf{u}+2\mathbf{v}$.

**Solution.** First, we must multiply each vector by the scalar.

$$
\begin{array}{lrcl}
& 3\mathbf{u} &=& 3\langle 3,-2\rangle \\[4pt]
& &=& \langle 9,-6\rangle \\[4pt]
& 2\mathbf{v} &=& 2\langle -1,4\rangle \\[4pt]
& &=& \langle -2,8\rangle
\end{array}
$$

Then, add the two together.

$$
\begin{array}{lrcl}
& \mathbf{w} &=& 3\mathbf{u}+2\mathbf{v} \\[4pt]
& &=& \langle 9,-6\rangle+\langle -2,8\rangle \\[4pt]
& &=& \langle 9-2,-6+8\rangle \\[4pt]
& &=& \langle 7,2\rangle
\end{array}
$$

So, $\mathbf{w}=\langle 7,2\rangle$.

### Finding Component Form

In some applications involving vectors, it is helpful for us to be able to break a vector down into its components. Vectors are comprised of two components: the horizontal component is the $x$ direction, and the vertical component is the $y$ direction. For example, we can see in the figure below that the position vector $\langle 2,3\rangle$ comes from adding the vectors $\mathbf{v}_1$ and $\mathbf{v}_2$. We have $\mathbf{v}_1$ with initial point $(0,0)$ and terminal point $(2,0)$.

$$
\begin{array}{lrcl}
& \mathbf{v}_1 &=& \langle 2-0,0-0\rangle \\[4pt]
& &=& \langle 2,0\rangle
\end{array}
$$

We also have $\mathbf{v}_2$ with initial point $(0,0)$ and terminal point $(0,3)$.

$$
\begin{array}{lrcl}
& \mathbf{v}_2 &=& \langle 0-0,3-0\rangle \\[4pt]
& &=& \langle 0,3\rangle
\end{array}
$$

Therefore, the position vector is

$$
\begin{array}{lrcl}
& \mathbf{v} &=& \langle 2+0,3+0\rangle \\[4pt]
& &=& \langle 2,3\rangle
\end{array}
$$

Using the Pythagorean Theorem, the magnitude of $\mathbf{v}_1$ is $2$, and the magnitude of $\mathbf{v}_2$ is $3$. To find the magnitude of $\mathbf{v}$, use the formula with the position vector.

$$
\begin{array}{lrcl}
& \lvert\mathbf{v}\rvert &=& \sqrt{\lvert\mathbf{v}_1\rvert^2+\lvert\mathbf{v}_2\rvert^2} \\[4pt]
& &=& \sqrt{2^2+3^2} \\[4pt]
& &=& \sqrt{13}
\end{array}
$$

The magnitude of $\mathbf{v}$ is $\sqrt{13}$. To find the direction, we use the tangent function $\tan\theta=\tfrac{y}{x}$.

$$
\begin{array}{lrcl}
& \tan\theta &=& \tfrac{\lvert\mathbf{v}_2\rvert}{\lvert\mathbf{v}_1\rvert} \\[4pt]
& \tan\theta &=& \tfrac32 \\[4pt]
& \theta &=& \tan^{-1}\left(\tfrac32\right)=56.3^\circ
\end{array}
$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The position vector v from the origin to (2, 3), built from its horizontal component v1 of (2, 0) and vertical component v2 of (0, 3), with the direction angle of 56.3 degrees marked from the positive x-axis.","xMin":-1,"xMax":3.5,"yMin":-1,"yMax":4,"grid":true,"tickLabels":true,"unit":65,"points":[{"at":[2,3],"label":"(2, 3)"}],"segments":[{"from":[0,0],"to":[2,0],"arrows":"end","label":"v₁","labelSide":"se"},{"from":[0,0],"to":[0,3],"arrows":"end","label":"v₂","labelSide":"w"},{"from":[0,0],"to":[2,3],"arrows":"end","label":"v"},{"from":[2,0],"to":[2,3],"dashed":true},{"from":[0,3],"to":[2,3],"dashed":true}],"circles":[{"at":[0,0],"r":0.7,"from":0,"to":56.31}],"texts":[{"at":[0.85,0.28],"text":"56.3°"}]}
{{< /apfigure >}}

Thus, the magnitude of $\mathbf{v}$ is $\sqrt{13}$ and the direction is $56.3^\circ$ off the horizontal.

**Example.** Find the components of the vector $\mathbf{v}$ with initial point $(3,2)$ and terminal point $(7,4)$.

**Solution.** First find the standard position.

$$
\begin{array}{lrcl}
& \mathbf{v} &=& \langle 7-3,4-2\rangle \\[4pt]
& &=& \langle 4,2\rangle
\end{array}
$$

See the illustration below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The vector v from the origin to (4, 2), with its horizontal component v1 of (4, 0) and vertical component v2 of (0, 2).","xMin":-1,"xMax":5,"yMin":-1,"yMax":3,"grid":true,"tickLabels":true,"unit":65,"segments":[{"from":[0,0],"to":[4,0],"arrows":"end","label":"v₁ = ⟨4, 0⟩","labelSide":"n"},{"from":[0,0],"to":[0,2],"arrows":"end","label":"v₂ = ⟨0, 2⟩","labelSide":"w"},{"from":[0,0],"to":[4,2],"arrows":"end","label":"v"},{"from":[4,0],"to":[4,2],"dashed":true}]}
{{< /apfigure >}}

The horizontal component is $\mathbf{v}_1=\langle 4,0\rangle$ and the vertical component is $\mathbf{v}_2=\langle 0,2\rangle$.

### Finding the Unit Vector in the Direction of $v$

In addition to finding a vector's components, it is also useful in solving problems to find a vector in the same direction as the given vector, but of magnitude $1$. We call a vector with a magnitude of $1$ a **unit vector**. We can then preserve the direction of the original vector while simplifying calculations.

Unit vectors are defined in terms of components. The horizontal unit vector is written as $\mathbf{i}=\langle 1,0\rangle$ and is directed along the positive horizontal axis. The vertical unit vector is written as $\mathbf{j}=\langle 0,1\rangle$ and is directed along the positive vertical axis. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The horizontal unit vector i equal to (1, 0) and the vertical unit vector j equal to (0, 1), both drawn from the origin.","xMin":-0.5,"xMax":1.8,"yMin":-0.5,"yMax":1.6,"grid":true,"tickLabels":true,"unit":110,"segments":[{"from":[0,0],"to":[1,0],"arrows":"end","label":"i = ⟨1, 0⟩"},{"from":[0,0],"to":[0,1],"arrows":"end","label":"j = ⟨0, 1⟩"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **The Unit Vectors.** If $\mathbf{v}$ is a nonzero vector, then $\tfrac{\mathbf{v}}{\lvert\mathbf{v}\rvert}$ is a unit vector in the direction of $\mathbf{v}$. Any vector divided by its magnitude is a unit vector. Notice that magnitude is always a scalar, and dividing by a scalar is the same as multiplying by the reciprocal of the scalar.
{{< /callout >}}

**Example.** Find a unit vector in the same direction as $\mathbf{v}=\langle -5,12\rangle$.

**Solution.** First, we will find the magnitude.

$$
\begin{array}{lrcl}
& \lvert\mathbf{v}\rvert &=& \sqrt{(-5)^2+(12)^2} \\[4pt]
& &=& \sqrt{25+144} \\[4pt]
& &=& \sqrt{169} \\[4pt]
& &=& 13
\end{array}
$$

Then we divide each component by $\lvert\mathbf{v}\rvert$, which gives a unit vector in the same direction as $\mathbf{v}$:

$$\frac{\mathbf{v}}{\lvert\mathbf{v}\rvert}=-\tfrac{5}{13}i+\tfrac{12}{13}j$$

or, in component form

$$\frac{\mathbf{v}}{\lvert\mathbf{v}\rvert}=\left\langle -\tfrac{5}{13},\tfrac{12}{13}\right\rangle$$

See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The vector v from the origin to (-5, 12), and the shorter unit vector in the same direction, ending at (-5/13, 12/13).","xMin":-8,"xMax":2,"yMin":-1,"yMax":14,"grid":true,"tickLabels":true,"unit":32,"segments":[{"from":[0,0],"to":[-5,12],"arrows":"end","label":"⟨-5, 12⟩"},{"from":[0,0],"to":[-0.3846,0.9231],"arrows":"end","label":"⟨-5/13, 12/13⟩"}]}
{{< /apfigure >}}

Verify that the magnitude of the unit vector equals $1$. The magnitude of $-\tfrac{5}{13}i+\tfrac{12}{13}j$ is given as

$$
\begin{array}{lrcl}
& \sqrt{\left(-\tfrac{5}{13}\right)^2+\left(\tfrac{12}{13}\right)^2} &=& \sqrt{\tfrac{25}{169}+\tfrac{144}{169}} \\[4pt]
& &=& \sqrt{\tfrac{169}{169}}=1
\end{array}
$$

The vector $\mathbf{u}=-\tfrac{5}{13}i+\tfrac{12}{13}j$ is the unit vector in the same direction as $\mathbf{v}=\langle -5,12\rangle$. *(Source note: the printed text states this final coefficient as $\tfrac{5}{13}$, but $\mathbf{v}$ terminates in Quadrant II, so its horizontal component must be negative — matching the computation above; corrected here.)*

### Performing Operations with Vectors in Terms of $i$ and $j$

So far, we have investigated the basics of vectors: magnitude and direction, vector addition and subtraction, scalar multiplication, the components of vectors, and the representation of vectors geometrically. Now that we are familiar with the general strategies used in working with vectors, we will represent vectors in rectangular coordinates in terms of $i$ and $j$.

{{< callout type="info" >}}
  **Vectors in the Rectangular Plane.** Given a vector $\mathbf{v}$ with initial point $P=(x_1,y_1)$ and terminal point $Q=(x_2,y_2)$, $\mathbf{v}$ is written as

  $$\mathbf{v}=(x_2-x_1)i+(y_2-y_1)j$$

  The position vector from $(0,0)$ to $(a,b)$, where $(x_2-x_1)=a$ and $(y_2-y_1)=b$, is written as $\mathbf{v}=ai+bj$. This vector sum is called a linear combination of the vectors $i$ and $j$.

  The magnitude of $\mathbf{v}=ai+bj$ is given as $\lvert\mathbf{v}\rvert=\sqrt{a^2+b^2}$. See the figure below.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A position vector v drawn as the diagonal of a right triangle, with its horizontal component ai along the x-axis and its vertical component bj rising to meet the vector's tip.","xMin":-1.5,"xMax":5,"yMin":-1,"yMax":4,"grid":false,"tickLabels":false,"unit":60,"segments":[{"from":[0,0],"to":[4,0],"arrows":"end","label":"ai","labelSide":"s"},{"from":[4,0],"to":[4,3],"arrows":"end","label":"bj","labelSide":"e"},{"from":[0,0],"to":[4,3],"arrows":"end","label":"v = ai + bj","labelSide":"w"}]}
{{< /apfigure >}}

**Example.** Given a vector $\mathbf{v}$ with initial point $P=(2,-6)$ and terminal point $Q=(-6,6)$, write the vector in terms of $i$ and $j$.

**Solution.** Begin by writing the general form of the vector. Then replace the coordinates with the given values.

$$
\begin{array}{lrcl}
& \mathbf{v} &=& (x_2-x_1)i+(y_2-y_1)j \\[4pt]
& &=& (-6-2)i+(6-(-6))j \\[4pt]
& &=& -8i+12j
\end{array}
$$

**Example.** Given initial point $P_1=(-1,3)$ and terminal point $P_2=(2,7)$, write the vector $\mathbf{v}$ in terms of $i$ and $j$.

**Solution.** Begin by writing the general form of the vector. Then replace the coordinates with the given values.

$$
\begin{array}{lrcl}
& \mathbf{v} &=& (x_2-x_1)i+(y_2-y_1)j \\[4pt]
& \mathbf{v} &=& (2-(-1))i+(7-3)j \\[4pt]
& &=& 3i+4j
\end{array}
$$

{{< fillin
  question="Write the vector $\mathbf{u}$ with initial point $P=(-1,6)$ and terminal point $Q=(7,-5)$ in terms of $i$ and $j$."
  answer="8i-11j"
  answerDisplay="$8i-11j$"
  hint="Subtract the $x$-coordinates for the coefficient of $i$, and subtract the $y$-coordinates for the coefficient of $j$."
>}}

### Performing Operations on Vectors in Terms of $i$ and $j$

When vectors are written in terms of $i$ and $j$, we can carry out addition, subtraction, and scalar multiplication by performing operations on corresponding components.

{{< callout type="info" >}}
  **Adding and Subtracting Vectors in Rectangular Coordinates.** Given $\mathbf{v}=ai+bj$ and $\mathbf{u}=ci+dj$, then

  $$
  \begin{array}{lrcl}
  & \mathbf{v}+\mathbf{u} &=& (a+c)i+(b+d)j \\[4pt]
  & \mathbf{v}-\mathbf{u} &=& (a-c)i+(b-d)j
  \end{array}
  $$
{{< /callout >}}

**Example.** Find the sum of $\mathbf{v}_1=2i-3j$ and $\mathbf{v}_2=4i+5j$.

**Solution.** According to the formula, we have

$$
\begin{array}{lrcl}
& \mathbf{v}_1+\mathbf{v}_2 &=& (2+4)i+(-3+5)j \\[4pt]
& &=& 6i+2j
\end{array}
$$

### Calculating the Component Form of a Vector: Direction

We have seen how to draw vectors according to their initial and terminal points and how to find the position vector. We have also examined notation for vectors drawn specifically in the Cartesian coordinate plane using $i$ and $j$. For any of these vectors, we can calculate the magnitude. Now, we want to combine the key points, and look further at the ideas of magnitude and direction.

Calculating direction follows the same straightforward process we used for polar coordinates. We find the direction of the vector by finding the angle to the horizontal. We do this by using the basic trigonometric identities, but with $\lvert\mathbf{v}\rvert$ replacing $r$.

{{< callout type="info" >}}
  **Vector Components in Terms of Magnitude and Direction.** Given a position vector $\mathbf{v}=\langle x,y\rangle$ and a direction angle $\theta$,

  $$
  \begin{array}{lrcl}
  & \cos\theta &=& \tfrac{x}{\lvert\mathbf{v}\rvert}\quad\text{and}\quad\sin\theta=\tfrac{y}{\lvert\mathbf{v}\rvert} \\[4pt]
  & x &=& \lvert\mathbf{v}\rvert\cos\theta\qquad y=\lvert\mathbf{v}\rvert\sin\theta
  \end{array}
  $$

  Thus, $\mathbf{v}=xi+yj=\lvert\mathbf{v}\rvert\cos\theta\, i+\lvert\mathbf{v}\rvert\sin\theta\, j$, and magnitude is expressed as $\lvert\mathbf{v}\rvert=\sqrt{x^2+y^2}$.
{{< /callout >}}

**Example.** Given a vector with length $7$ and an angle of $135^\circ$, write it in component form.

**Solution.** Using the conversion formulas $x=\lvert\mathbf{v}\rvert\cos\theta$ and $y=\lvert\mathbf{v}\rvert\sin\theta$, we find that

$$
\begin{array}{lrcl}
& x &=& 7\cos(135^\circ) \\[4pt]
& &=& -\tfrac{7\sqrt2}{2} \\[4pt]
& y &=& 7\sin(135^\circ) \\[4pt]
& &=& \tfrac{7\sqrt2}{2}
\end{array}
$$

This vector can be written as $\mathbf{v}=7\cos(135^\circ)+7\sin(135^\circ)$ or simplified as

$$\mathbf{v}=-\tfrac{7\sqrt2}{2}i+\tfrac{7\sqrt2}{2}j$$

{{< fillin
  question="A vector travels from the origin to the point $(3,5)$. Find its magnitude in exact form."
  answer="\sqrt{34}"
  answerForm="exact-radical"
  answerDisplay="$\sqrt{34}$"
  hint="Use the Pythagorean Theorem with the point's coordinates as the vector's components."
>}}

{{< fillin
  question="A vector travels from the origin to the point $(3,5)$. Find its direction angle $\theta$, with $0^\circ\le\theta<360^\circ$. Round to two decimal places."
  answer="59.04^\circ"
  answerForm="degrees"
  answerDisplay="$59.04^\circ$"
  hint="Use the inverse tangent of the $y$-coordinate over the $x$-coordinate."
>}}

### Finding the Dot Product of Two Vectors

As we discussed earlier in the section, scalar multiplication involves multiplying a vector by a scalar, and the result is a vector. If we multiply a vector by a vector, there are two possibilities: the **dot product** and the **cross product**. We will only examine the dot product here; you may encounter the cross product in more advanced mathematics courses.

The dot product of two vectors involves multiplying two vectors together, and the result is a scalar.

{{< callout type="info" >}}
  **Dot Product.** The **dot product** of two vectors $\mathbf{v}=\langle a,b\rangle$ and $\mathbf{u}=\langle c,d\rangle$ is the sum of the product of the horizontal components and the product of the vertical components.

  $$\mathbf{v}\cdot\mathbf{u}=ac+bd$$

  To find the angle between the two vectors, use the formula below.

  $$\cos\theta=\tfrac{\mathbf{v}}{\lvert\mathbf{v}\rvert}\cdot\tfrac{\mathbf{u}}{\lvert\mathbf{u}\rvert}$$
{{< /callout >}}

**Example.** Find the dot product of $\mathbf{v}=\langle 5,12\rangle$ and $\mathbf{u}=\langle -3,4\rangle$.

**Solution.** Using the formula, we have

$$
\begin{array}{lrcl}
& \mathbf{v}\cdot\mathbf{u} &=& \langle 5,12\rangle\cdot\langle -3,4\rangle \\[4pt]
& &=& 5\cdot(-3)+12\cdot4 \\[4pt]
& &=& -15+48 \\[4pt]
& &=& 33
\end{array}
$$

**Example.** Find the dot product of $\mathbf{v}_1=5i+2j$ and $\mathbf{v}_2=3i+7j$. Then, find the angle between the two vectors.

**Solution.** Finding the dot product, we multiply corresponding components.

$$
\begin{array}{lrcl}
& \mathbf{v}_1\cdot\mathbf{v}_2 &=& \langle 5,2\rangle\cdot\langle 3,7\rangle \\[4pt]
& &=& 5\cdot3+2\cdot7 \\[4pt]
& &=& 15+14 \\[4pt]
& &=& 29
\end{array}
$$

To find the angle between them, we use the formula $\cos\theta=\tfrac{\mathbf{v}}{\lvert\mathbf{v}\rvert}\cdot\tfrac{\mathbf{u}}{\lvert\mathbf{u}\rvert}$.

$$
\begin{array}{lrcl}
& \tfrac{\mathbf{v}}{\lvert\mathbf{v}\rvert}\cdot\tfrac{\mathbf{u}}{\lvert\mathbf{u}\rvert} &=& \left\langle \tfrac{5}{\sqrt{29}},\tfrac{2}{\sqrt{29}}\right\rangle\cdot\left\langle \tfrac{3}{\sqrt{58}},\tfrac{7}{\sqrt{58}}\right\rangle \\[4pt]
& &=& \tfrac{5}{\sqrt{29}}\cdot\tfrac{3}{\sqrt{58}}+\tfrac{2}{\sqrt{29}}\cdot\tfrac{7}{\sqrt{58}} \\[4pt]
& &=& \tfrac{15}{\sqrt{1682}}+\tfrac{14}{\sqrt{1682}}=\tfrac{29}{\sqrt{1682}} \\[4pt]
& &=& 0.707107 \\[4pt]
& \cos^{-1}(0.707107) &=& 45^\circ
\end{array}
$$

See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two position vectors from the origin, one to (3, 7) and one to (5, 2), with the 45-degree angle between them marked.","xMin":-1,"xMax":6,"yMin":-1,"yMax":8,"grid":true,"tickLabels":true,"unit":42,"points":[{"at":[3,7],"label":"⟨3, 7⟩"},{"at":[5,2],"label":"⟨5, 2⟩"}],"segments":[{"from":[0,0],"to":[3,7],"arrows":"end"},{"from":[0,0],"to":[5,2],"arrows":"end"}],"circles":[{"at":[0,0],"r":1.1,"from":21.8,"to":66.8}],"texts":[{"at":[1.35,0.9],"text":"45°"}]}
{{< /apfigure >}}

**Example.** Find the angle between $\mathbf{u}=\langle -3,4\rangle$ and $\mathbf{v}=\langle 5,12\rangle$.

**Solution.** Using the formula, we have

$$
\begin{array}{lrcl}
& \theta &=& \cos^{-1}\left(\tfrac{\mathbf{u}}{\lvert\mathbf{u}\rvert}\cdot\tfrac{\mathbf{v}}{\lvert\mathbf{v}\rvert}\right) \\[4pt]
& \left(\tfrac{\mathbf{u}}{\lvert\mathbf{u}\rvert}\cdot\tfrac{\mathbf{v}}{\lvert\mathbf{v}\rvert}\right) &=& \tfrac{-3i+4j}{5}\cdot\tfrac{5i+12j}{13} \\[4pt]
& &=& \left(-\tfrac35\cdot\tfrac{5}{13}\right)+\left(\tfrac45\cdot\tfrac{12}{13}\right) \\[4pt]
& &=& -\tfrac{15}{65}+\tfrac{48}{65} \\[4pt]
& &=& \tfrac{33}{65} \\[4pt]
& \theta &=& \cos^{-1}\left(\tfrac{33}{65}\right) \\[4pt]
& &=& 59.5^\circ
\end{array}
$$

See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two position vectors from the origin, one to (-3, 4) and one to (5, 12), with the 59.5-degree angle between them marked.","xMin":-5,"xMax":6,"yMin":-1,"yMax":13,"grid":true,"tickLabels":true,"unit":34,"points":[{"at":[-3,4],"label":"⟨-3, 4⟩"},{"at":[5,12],"label":"⟨5, 12⟩"}],"segments":[{"from":[0,0],"to":[-3,4],"arrows":"end"},{"from":[0,0],"to":[5,12],"arrows":"end"}],"circles":[{"at":[0,0],"r":2.1,"from":67.38,"to":126.87}],"texts":[{"at":[-1.6,2.3],"text":"59.5°"}]}
{{< /apfigure >}}

**Example.** We now have the tools to solve the problem we introduced at the opening of the section.

An airplane is flying at an airspeed of $200$ miles per hour headed on a SE bearing of $140^\circ$. A north wind (from north to south) is blowing at $16.2$ miles per hour. What are the ground speed and actual bearing of the plane? See the figure above.

**Solution.** The ground speed is represented by $x$ in the diagram, and we need to find the angle $\alpha$ in order to calculate the adjusted bearing, which will be $140^\circ+\alpha$.

Notice that angle $BCO$ must be equal to angle $AOC$ by the rule of alternating interior angles, so angle $BCO$ is $140^\circ$. We can find $x$ by the Law of Cosines:

$$
\begin{array}{lrcl}
& x^2 &=& (16.2)^2+(200)^2-2(16.2)(200)\cos(140^\circ) \\[4pt]
& x^2 &=& 45{,}226.41 \\[4pt]
& x &=& \sqrt{45{,}226.41} \\[4pt]
& x &=& 212.7
\end{array}
$$

The ground speed is approximately $213$ miles per hour. Now we can calculate the bearing using the Law of Sines.

$$
\begin{array}{lrcl}
& \tfrac{\sin\alpha}{16.2} &=& \tfrac{\sin(140^\circ)}{212.7} \\[4pt]
& \sin\alpha &=& \tfrac{16.2\sin(140^\circ)}{212.7} \\[4pt]
& &=& 0.04896 \\[4pt]
& \sin^{-1}(0.04896) &=& 2.8^\circ
\end{array}
$$

Therefore, the plane has a SE bearing of $140^\circ+2.8^\circ=142.8^\circ$. The ground speed is $212.7$ miles per hour.

## Key concepts

- The position vector has its initial point at the origin.
- If the position vector is the same for two vectors, they are equal.
- Vectors are defined by their magnitude and direction.
- If two vectors have the same magnitude and direction, they are equal.
- Vector addition and subtraction result in a new vector found by adding or subtracting corresponding elements.
- Scalar multiplication is multiplying a vector by a constant. Only the magnitude changes; the direction stays the same.
- Vectors are comprised of two components: the horizontal component along the positive $x$-axis, and the vertical component along the positive $y$-axis.
- The unit vector in the same direction of any nonzero vector is found by dividing the vector by its magnitude.
- The magnitude of a vector in the rectangular coordinate system is $\lvert\mathbf{v}\rvert=\sqrt{a^2+b^2}$.
- In the rectangular coordinate system, unit vectors may be represented in terms of $i$ and $j$, where $i$ represents the horizontal component and $j$ represents the vertical component. Then, $\mathbf{v}=ai+bj$ is a scalar multiple of $\mathbf{v}$ by real numbers $a$ and $b$.
- Adding and subtracting vectors in terms of $i$ and $j$ consists of adding or subtracting corresponding coefficients of $i$ and corresponding coefficients of $j$.
- A vector $\mathbf{v}=ai+bj$ is written in terms of magnitude and direction as $\mathbf{v}=\lvert\mathbf{v}\rvert\cos\theta\, i+\lvert\mathbf{v}\rvert\sin\theta\, j$.
- The dot product of two vectors is the product of the $i$ terms plus the product of the $j$ terms.
- We can use the dot product to find the angle between two vectors.
- Dot products are useful for many types of physics applications.

## Practice

### View vectors geometrically

{{< multiplechoice
  question="Determine whether the vectors $\mathbf{u}$ and $\mathbf{v}$ are equal, where $\mathbf{u}$ has initial point $P_1=(5,1)$ and terminal point $P_2=(3,-2)$, and $\mathbf{v}$ has initial point $P_3=(-1,3)$ and terminal point $P_4=(9,-4)$."
  answer="not equal"
  hint="Find the position vector for each; two vectors are equal only if both their magnitude and their direction match."
>}}
not equal
equal
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether the vectors $\mathbf{u}$ and $\mathbf{v}$ are equal, where $\mathbf{u}$ has initial point $P_1=(8,3)$ and terminal point $P_2=(6,5)$, and $\mathbf{v}$ has initial point $P_3=(11,8)$ and terminal point $P_4=(9,10)$."
  answer="equal"
  hint="Find the position vector for each; two vectors are equal only if both their magnitude and their direction match."
>}}
not equal
equal
{{< /multiplechoice >}}

### Find magnitude and direction

{{< fillin
  question="Find the magnitude of the vector $\langle 6,5\rangle$. Round to the nearest thousandth."
  answer="7.810"
  answerForm="decimal"
  answerDisplay="$7.810$"
  hint="Use the Pythagorean Theorem: the magnitude is the square root of the sum of the squares of the components."
>}}

{{< fillin
  question="Find the direction angle $\theta$ of the vector $\langle 6,5\rangle$, with $0^\circ\le\theta<360^\circ$. Round to the nearest thousandth of a degree."
  answer="39.806^\circ"
  answerForm="degrees"
  answerDisplay="$39.806^\circ$"
  hint="Use the inverse tangent of the $y$-component over the $x$-component; the vector lies in the first quadrant."
>}}

{{< fillin
  question="Find the magnitude of the vector $\langle -4,-6\rangle$. Round to the nearest thousandth."
  answer="7.211"
  answerForm="decimal"
  answerDisplay="$7.211$"
  hint="Use the Pythagorean Theorem: the magnitude is the square root of the sum of the squares of the components."
>}}

{{< fillin
  question="Find the direction angle $\theta$ of the vector $\langle -4,-6\rangle$, with $0^\circ\le\theta<360^\circ$. Round to the nearest thousandth of a degree."
  answer="236.310^\circ"
  answerForm="degrees"
  answerDisplay="$236.310^\circ$"
  hint="The vector lies in the third quadrant, so add $180^\circ$ to the inverse tangent of the ratio of its components."
>}}

### Perform vector addition and scalar multiplication

{{< fillin
  question="Given $\mathbf{u}=\langle -3,4\rangle$ and $\mathbf{v}=\langle -2,1\rangle$, find $\mathbf{u}+\mathbf{v}$ in terms of $i$ and $j$."
  answer="-5i+5j"
  answerDisplay="$-5i+5j$"
  hint="Add the corresponding components of $\mathbf{u}$ and $\mathbf{v}$."
>}}

{{< fillin
  question="Given $\mathbf{u}=\langle -3,4\rangle$ and $\mathbf{v}=\langle -2,1\rangle$, find $\mathbf{u}-\mathbf{v}$ in terms of $i$ and $j$."
  answer="-i+3j"
  answerDisplay="$-i+3j$"
  hint="Subtract the corresponding components of $\mathbf{v}$ from $\mathbf{u}$."
>}}

{{< fillin
  question="Given $\mathbf{u}=\langle -3,4\rangle$ and $\mathbf{v}=\langle -2,1\rangle$, find $2\mathbf{u}-3\mathbf{v}$ in terms of $i$ and $j$."
  answer="5j"
  answerDisplay="$5j$"
  hint="Multiply each vector by its scalar first, then subtract the corresponding components."
>}}

{{< fillin
  question="Let $\mathbf{v}=5i+2j$. Find a vector that is twice the length of $\mathbf{v}$ and points in the opposite direction."
  answer="-10i-4j"
  answerDisplay="$-10i-4j$"
  hint="Multiply $\mathbf{v}$ by $-2$: doubling the length and negating the scalar reverses the direction."
>}}

### Find the component form of a vector

{{< fillin
  question="Given a vector with initial point $(-4,2)$ and terminal point $(3,-3)$, find an equivalent vector whose initial point is $(0,0)$, and write the result in terms of $i$ and $j$."
  answer="7i-5j"
  answerDisplay="$7i-5j$"
  hint="Subtract the $x$-coordinates for the coefficient of $i$, and subtract the $y$-coordinates for the coefficient of $j$."
>}}

{{< fillin
  question="Given initial point $P_1=(4,-1)$ and terminal point $P_2=(-3,2)$, write the vector $\mathbf{v}$ in terms of $i$ and $j$."
  answer="-7i+3j"
  answerDisplay="$-7i+3j$"
  hint="Subtract the $x$-coordinates for the coefficient of $i$, and subtract the $y$-coordinates for the coefficient of $j$."
>}}

### Find the unit vector in the direction of $v$

{{< fillin
  question="Find a unit vector in the same direction as $\mathbf{b}=-2i+5j$."
  answer="-\frac{2\sqrt{29}}{29}i+\frac{5\sqrt{29}}{29}j"
  answerDisplay="$-\tfrac{2\sqrt{29}}{29}i+\tfrac{5\sqrt{29}}{29}j$"
  hint="Divide each component of $\mathbf{b}$ by its magnitude, $\lvert\mathbf{b}\rvert=\sqrt{(-2)^2+5^2}$."
>}}

{{< fillin
  question="Find a unit vector in the same direction as $\mathbf{d}=-\tfrac13 i+\tfrac52 j$."
  answer="-\frac{2\sqrt{229}}{229}i+\frac{15\sqrt{229}}{229}j"
  answerDisplay="$-\tfrac{2\sqrt{229}}{229}i+\tfrac{15\sqrt{229}}{229}j$"
  hint="Divide each component of $\mathbf{d}$ by its magnitude, $\lvert\mathbf{d}\rvert=\sqrt{\left(-\tfrac13\right)^2+\left(\tfrac52\right)^2}$."
>}}

### Perform operations with vectors in terms of $i$ and $j$

{{< fillin
  question="For $\mathbf{u}=i+5j$, $\mathbf{v}=-2i-3j$, and $\mathbf{w}=4i-j$, find $4\mathbf{v}+2\mathbf{u}$."
  answer="-6i-2j"
  answerDisplay="$-6i-2j$"
  hint="Scale each vector by its coefficient first, then add the corresponding components."
>}}

{{< fillin
  question="A vector has magnitude $6$ and direction angle $\theta=45^\circ$ in standard position. Write the vector in component form using $i$ and $j$."
  answer="3\sqrt{2}i+3\sqrt{2}j"
  answerDisplay="$3\sqrt2\,i+3\sqrt2\,j$"
  hint="Use $x=\lvert\mathbf{v}\rvert\cos\theta$ and $y=\lvert\mathbf{v}\rvert\sin\theta$."
>}}

### Find the dot product of two vectors

{{< fillin
  question="Given $\mathbf{u}=-i-j$ and $\mathbf{v}=i+5j$, calculate $\mathbf{u}\cdot\mathbf{v}$."
  answer="-6"
  answerDisplay="$-6$"
  hint="Multiply the corresponding $i$-coefficients, multiply the corresponding $j$-coefficients, then add the two products."
>}}

{{< fillin
  question="Given $\mathbf{u}=\langle -1,6\rangle$ and $\mathbf{v}=\langle 6,-1\rangle$, calculate $\mathbf{u}\cdot\mathbf{v}$."
  answer="-12"
  answerDisplay="$-12$"
  hint="Multiply the corresponding horizontal components, multiply the corresponding vertical components, then add the two products."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 8.8: Vectors](https://openstax.org/books/precalculus-2e/pages/8-8-vectors) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the decorative airplane clip-art overlaid on the source's opening and Example-17 figures, keeping only the instructional vector triangle; the source repeats that triangle verbatim as two separate figures (the opener and Example 17's), so this page consolidates them into the one figure that opens the section, and Example 17 refers back to "the figure above" instead of redrawing an identical copy — the not-to-scale opener/Example-17 diagram exaggerates the drawn length of the $16.2$ mph wind vector relative to the $200$ mph airspeed vector for label legibility, matching the source's own schematic (non-scaled) rendering, and both angle labels ($140^\circ$ and $\alpha$) and every distance label are reproduced from the exact recomputed geometry. Recreated every other instructional figure as an accessible spec-first SVG — both head-to-tail addition/subtraction triangles, both addition/subtraction parallelograms, the four parallel scalar-multiple vectors, and every position-vector diagram — plotted from the exact printed coordinates and angles, independently recomputed rather than eyeballed from the source art. **The grader cannot take `\langle a,b\rangle` as a submitted answer**, so — following the source's own $i,j$ notation — every vector-valued Try It and Practice answer is keyed in bare $i,j$ unit-vector form (never `\mathbf{i}`/`\mathbf{j}`, which MathLive cannot type), with the question reworded to ask "in terms of $i$ and $j$" wherever the source's own wording asked for component form $\langle a,b\rangle$; prose and worked examples keep the source's $\langle a,b\rangle$ notation throughout, since KaTeX renders it and only submitted answers are affected. The source's own "find the magnitude and direction" prompts were split into two fillins per exercise (magnitude, then direction), because the two quantities need different `answerForm` tokens that cannot both apply to one comma-separated answer. **A grader defect surfaced while composing these:** the documented `answerForm="degrees decimal"` composition self-rejects its own keyed answer against the current grader (confirmed directly, and reproducible right now against this book's own shipped 8.1 page, which fails `verify-section` on that exact combination) — `degrees` alone already accepts a decimal-headed angle, so every decimal-degree answer here declares `answerForm="degrees"` alone; this is reported to the parent as a tooling defect, not authored around silently. Try It 1 ("draw a vector from the origin to $(3,5)$") and Try It 4 ("write the vector in terms of magnitude and direction") were recast as real graded fillins — the first asks for the vector in $i,j$ form, the second is split into a magnitude fillin (`exact-radical`) and a direction-angle fillin (`degrees`, range stated) — since a magnitude-and-direction restatement is otherwise retype-passable against the source's own polar-form key. **A confirmed upstream defect corrected in place:** Example 9's closing sentence prints the unit vector's $i$-coefficient as $\tfrac{5}{13}$ (positive), contradicting its own immediately-preceding computation of $-\tfrac{5}{13}i+\tfrac{12}{13}j$ and the fact that $\mathbf{v}=\langle -5,12\rangle$ terminates in Quadrant II; corrected to $-\tfrac{5}{13}i+\tfrac{12}{13}j$ with a visible source note. Fourteen selected end-of-section exercises were adapted into interactive Practice components, one group per objective, every one independently re-derived (including by running the arithmetic in Node) rather than read off the source key; the two "are these vectors equal" exercises became multiple-choice, since a categorical equal/not-equal claim has no free-response answer.</small>
