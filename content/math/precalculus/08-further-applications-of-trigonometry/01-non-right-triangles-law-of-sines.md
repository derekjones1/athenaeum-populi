---
title: Non-right Triangles - Law of Sines
description: >-
  Deriving the Law of Sines and using it to solve oblique triangles in the
  ASA, AAS, and ambiguous SSA cases, finding the area of an oblique triangle
  from two sides and the included angle, and solving applied problems —
  adapted from OpenStax Precalculus 2e, Section 8.1.
source_section: "8.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use the Law of Sines to solve oblique triangles
- Find the area of an oblique triangle using the sine function
- Solve applied problems using the Law of Sines
{{< /callout >}}

To ensure the safety of over $5{,}000$ U.S. aircraft flying simultaneously during peak times, air traffic controllers monitor and communicate with them after receiving data from the robust radar beacon system. Suppose two radar stations located $20$ miles apart each detect an aircraft between them. The angle of elevation measured by the first station is $35$ degrees, whereas the angle of elevation measured by the second station is $15$ degrees. How can we determine the altitude of the aircraft? We see below that the triangle formed by the aircraft and the two stations is not a right triangle, so we cannot use what we know about right triangles. In this section, we will find out how to solve problems involving non-right triangles.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An oblique triangle formed by two ground radar stations 20 miles apart and an aircraft between them: an arc marks the 15-degree angle at the left station and another the 35-degree angle at the right station, each measure printed inside its angle, and a dashed altitude drops from the aircraft straight down to the ground.","unit":15,"polygons":[{"points":[[0,0],[14.465,3.876],[20,0]],"edgeLabels":[null,null,"20 miles"],"vertexLabels":[null,null,null]}],"segments":[{"from":[14.465,3.876],"to":[14.465,0],"dashed":true}],"rightAngles":[{"at":[14.465,0],"dirs":[[1,0],[0,1]]}],"circles":[{"at":[0,0],"r":3.2,"from":0,"to":15},{"at":[20,0],"r":2.4,"from":145,"to":180}],"texts":[{"at":[6.444,0.848],"text":"15°","anchor":"middle","dy":5},{"at":[16.281,1.173],"text":"35°","anchor":"middle","dy":5}]}
{{< /apfigure >}}

### Using the Law of Sines to Solve Oblique Triangles

In any triangle, we can draw an **altitude**, a perpendicular line from one vertex to the opposite side, forming two right triangles. It would be preferable, however, to have methods that we can apply directly to non-right triangles without first having to create right triangles.

Any triangle that is not a right triangle is an **oblique triangle**. Solving an oblique triangle means finding the measurements of all three angles and all three sides. To do so, we need to start with at least three of these values, including at least one of the sides. We will investigate three possible oblique triangle problem situations:

- **ASA (angle-side-angle)** We know the measurements of two angles and the included side.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A schematic oblique triangle with vertices alpha, beta, gamma illustrating the ASA case: an arc marks angle alpha, a double arc marks angle gamma, and a tick marks the base between them — the three known parts.","unit":36,"polygons":[{"points":[[0,0],[3,4],[8,0]],"vertexLabels":["α","β","γ"]}],"circles":[{"at":[0,0],"r":0.7,"from":0,"to":53.13},{"at":[8,0],"r":0.7,"from":141.34,"to":180},{"at":[8,0],"r":0.875,"from":141.34,"to":180}],"texts":[],"segments":[{"from":[4,-0.18],"to":[4,0.18]}]}
{{< /apfigure >}}

- **AAS (angle-angle-side)** We know the measurements of two angles and a side that is not between the known angles.

{{< apfigure kind="figure" >}}
{"ariaLabel":"The same schematic triangle illustrating the AAS case: an arc marks angle alpha, a double arc marks angle gamma, and a tick marks the side from beta to gamma, which is opposite alpha and not between the two marked angles.","unit":36,"polygons":[{"points":[[0,0],[3,4],[8,0]],"vertexLabels":["α","β","γ"]}],"circles":[{"at":[0,0],"r":0.7,"from":0,"to":53.13},{"at":[8,0],"r":0.7,"from":141.34,"to":180},{"at":[8,0],"r":0.875,"from":141.34,"to":180}],"texts":[],"segments":[{"from":[5.388,1.859],"to":[5.612,2.141]}]}
{{< /apfigure >}}

- **SSA (side-side-angle)** We know the measurements of two sides and an angle that is not between the known sides.

{{< apfigure kind="figure" >}}
{"ariaLabel":"The same schematic triangle illustrating the SSA case: an arc marks angle alpha, a single tick marks the side from alpha to beta, and a double tick marks the side from beta to gamma, opposite alpha — the marked angle is not between the two marked sides.","unit":36,"polygons":[{"points":[[0,0],[3,4],[8,0]],"vertexLabels":["α","β","γ"]}],"circles":[{"at":[0,0],"r":0.7,"from":0,"to":53.13}],"texts":[],"segments":[{"from":[1.644,1.892],"to":[1.356,2.108]},{"from":[5.309,1.922],"to":[5.534,2.203]},{"from":[5.466,1.797],"to":[5.691,2.078]}]}
{{< /apfigure >}}

Knowing how to approach each of these situations enables us to solve oblique triangles without having to drop a perpendicular to form two right triangles. Instead, we can use the fact that the ratio of the measurement of one of the angles to the length of its opposite side will be equal to the other two ratios of angle measure to opposite side. Let's see how this statement is derived by considering the triangle shown below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An oblique triangle with vertices alpha, gamma, beta and opposite sides a, b, c: side c is the horizontal base from alpha to beta, side b runs from alpha up to gamma, side a runs from gamma down to beta, and a dashed altitude h drops from gamma perpendicular to the base.","unit":40,"polygons":[{"points":[[0,0],[3,4],[8,0]],"edgeLabels":["b","a","c"],"vertexLabels":["α","γ","β"]}],"segments":[{"from":[3,4],"to":[3,0],"dashed":true,"label":"h"}],"rightAngles":[{"at":[3,0],"dirs":[[1,0],[0,1]]}]}
{{< /apfigure >}}

Using the right triangle relationships, we know that $\sin\alpha=\tfrac{h}{b}$ and $\sin\beta=\tfrac{h}{a}$. Solving both equations for $h$ gives two different expressions for $h$.

$$h=b\sin\alpha\ \text{and}\ h=a\sin\beta$$

We then set the expressions equal to each other.

$$
\begin{array}{lrcl}
& b\sin\alpha &=& a\sin\beta \\[4pt]
\text{Multiply both sides by } \tfrac{1}{ab}. & \left(\tfrac{1}{ab}\right)(b\sin\alpha) &=& (a\sin\beta)\left(\tfrac{1}{ab}\right) \\[4pt]
& \tfrac{\sin\alpha}{a} &=& \tfrac{\sin\beta}{b}
\end{array}
$$

Similarly, we can compare the other ratios.

$$\tfrac{\sin\alpha}{a}=\tfrac{\sin\gamma}{c}\ \text{and}\ \tfrac{\sin\beta}{b}=\tfrac{\sin\gamma}{c}$$

Collectively, these relationships are called the **Law of Sines**.

$$\tfrac{\sin\alpha}{a}=\tfrac{\sin\beta}{b}=\tfrac{\sin\gamma}{c}$$

Note the standard way of labeling triangles: angle $\alpha$ (alpha) is opposite side $a$; angle $\beta$ (beta) is opposite side $b$; and angle $\gamma$ (gamma) is opposite side $c$. See the figure below.

While calculating angles and sides, be sure to carry the exact values through to the final answer. Generally, final answers are rounded to the nearest tenth, unless otherwise specified.

{{< apfigure kind="figure" >}}
{"ariaLabel":"The standard oblique-triangle labeling: vertices alpha, beta, gamma with opposite sides a, b, c.","unit":40,"polygons":[{"points":[[0,0],[3,4],[8,0]],"edgeLabels":["c","a","b"],"vertexLabels":["α","β","γ"]}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Law of Sines.**

  Given a triangle with angles and opposite sides labeled as above, the ratio of the measurement of an angle to the length of its opposite side will be equal to the other two ratios of angle measure to opposite side. All proportions will be equal. The Law of Sines is based on proportions and is presented symbolically two ways.

  $$\tfrac{\sin\alpha}{a}=\tfrac{\sin\beta}{b}=\tfrac{\sin\gamma}{c}$$

  $$\tfrac{a}{\sin\alpha}=\tfrac{b}{\sin\beta}=\tfrac{c}{\sin\gamma}$$

  To solve an oblique triangle, use any pair of applicable ratios.
{{< /callout >}}

**Example.** Solve the triangle shown below to the nearest tenth.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An oblique triangle with vertices alpha, beta, gamma: a 50-degree angle is marked at alpha and a 30-degree angle at gamma; the side of length 10 runs from beta to gamma, opposite alpha; the unknown side b is the base from alpha to gamma and side c runs from alpha to beta.","unit":24,"polygons":[{"points":[[0,0],[4.195,5],[12.856,0]],"edgeLabels":["c","10","b"],"vertexLabels":["α","β","γ"]}],"circles":[{"at":[0,0],"r":1.2,"from":0,"to":50},{"at":[12.856,0],"r":1.6,"from":150,"to":180}],"texts":[{"at":[2.085,0.972],"text":"50°","anchor":"middle","dy":5},{"at":[9.958,0.776],"text":"30°","anchor":"middle","dy":5}]}
{{< /apfigure >}}

**Solution.** The three angles must add up to $180$ degrees. From this, we can determine that

$$
\begin{array}{lrcl}
& \beta &=& 180^\circ-50^\circ-30^\circ \\[4pt]
& &=& 100^\circ
\end{array}
$$

To find an unknown side, we need to know the corresponding angle and a known ratio. We know that angle $\alpha=50^\circ$ and its corresponding side $a=10$. We can use the following proportion from the Law of Sines to find the length of $c$.

$$
\begin{array}{lrcl}
& \tfrac{\sin(50^\circ)}{10} &=& \tfrac{\sin(30^\circ)}{c} \\[4pt]
\text{Multiply both sides by } c. & c\tfrac{\sin(50^\circ)}{10} &=& \sin(30^\circ) \\[4pt]
\text{Multiply by the reciprocal to isolate } c. & c &=& \sin(30^\circ)\tfrac{10}{\sin(50^\circ)} \\[4pt]
& c &\approx& 6.5
\end{array}
$$

Similarly, to solve for $b$, we set up another proportion.

$$
\begin{array}{lrcl}
& \tfrac{\sin(50^\circ)}{10} &=& \tfrac{\sin(100^\circ)}{b} \\[4pt]
\text{Multiply both sides by } b. & b\sin(50^\circ) &=& 10\sin(100^\circ) \\[4pt]
\text{Multiply by the reciprocal to isolate } b. & b &=& \tfrac{10\sin(100^\circ)}{\sin(50^\circ)} \\[4pt]
& b &\approx& 12.9
\end{array}
$$

Therefore, the complete set of angles and sides is

$$
\begin{array}{lrcl}
& \alpha=50^\circ & a=10 \\[4pt]
& \beta=100^\circ & b\approx12.9 \\[4pt]
& \gamma=30^\circ & c\approx6.5
\end{array}
$$

{{< apfigure kind="figure" >}}
{"ariaLabel":"A tall, narrow oblique triangle with vertices alpha, beta, gamma: a 98-degree angle is marked at alpha and a 43-degree angle at gamma, with the base of length 22 between them; the two slanted sides carry only their letters, a opposite alpha and c opposite gamma.","unit":12,"polygons":[{"points":[[0,0],[-3.318,23.61],[22,0]],"edgeLabels":["c","a","22"],"vertexLabels":["α","β","γ"]}],"circles":[{"at":[0,0],"r":1.8,"from":0,"to":98},{"at":[22,0],"r":2.6,"from":137,"to":180}],"texts":[{"at":[2.362,2.717],"text":"98°","anchor":"middle","dy":5},{"at":[17.72,1.686],"text":"43°","anchor":"middle","dy":5}]}
{{< /apfigure >}}

{{< fillin
  question="In the triangle above, $\alpha=98^\circ$, $\gamma=43^\circ$, and $b=22$. Find side $a$. Round to the nearest tenth."
  answer="34.6"
  answerForm="decimal"
  answerDisplay="$a\approx34.6$"
  hint="First find $\beta=180^\circ-98^\circ-43^\circ$, then use the Law of Sines proportion $\tfrac{\sin\alpha}{a}=\tfrac{\sin\beta}{b}$ to solve for $a$."
>}}

### Using The Law of Sines to Solve SSA Triangles

We can use the Law of Sines to solve any oblique triangle, but some solutions may not be straightforward. In some cases, more than one triangle may satisfy the given criteria, which we describe as an **ambiguous case**. Triangles classified as SSA, those in which we know the lengths of two sides and the measurement of the angle opposite one of the given sides, may result in one or two solutions, or even no solution.

{{< callout type="info" >}}
  **Possible Outcomes for SSA Triangles.**

  Oblique triangles in the category SSA may have four different outcomes. The figures below illustrate the solutions with the known sides $a$ and $b$ and known angle $\alpha$.

  **(a) No triangle, $a<h$**

  {{< apfigure kind="figure" >}}
  {"ariaLabel":"Side b rises from the marked angle alpha to gamma; side a hangs straight down from gamma but is shorter than the altitude, so it stops above the base line that runs toward beta.","unit":34,"segments":[{"from":[0,0],"to":[4.596,3.857],"label":"b"},{"from":[4.596,3.857],"to":[4.596,1.257],"label":"a","labelSide":"right"},{"from":[0,0],"to":[7,0]}],"circles":[{"at":[0,0],"r":0.9,"from":0,"to":40}],"texts":[{"at":[-0.45,-0.1],"text":"α","anchor":"middle","dy":5},{"at":[4.596,4.357],"text":"γ","anchor":"middle","dy":5},{"at":[7.45,-0.1],"text":"β","anchor":"middle","dy":5}]}
  {{< /apfigure >}}

  **(b) Right triangle, $a=h$**

  {{< apfigure kind="figure" >}}
  {"ariaLabel":"Side b rises from the marked angle alpha to gamma; side a drops straight down from gamma and meets the base at a right angle at beta.","unit":34,"segments":[{"from":[0,0],"to":[4.596,3.857],"label":"b"},{"from":[4.596,3.857],"to":[4.596,0],"label":"a","labelSide":"right"},{"from":[0,0],"to":[4.596,0]}],"circles":[{"at":[0,0],"r":0.9,"from":0,"to":40}],"rightAngles":[{"at":[4.596,0],"dirs":[[-1,0],[0,1]]}],"texts":[{"at":[-0.45,-0.1],"text":"α","anchor":"middle","dy":5},{"at":[4.596,4.357],"text":"γ","anchor":"middle","dy":5},{"at":[5.046,-0.1],"text":"β","anchor":"middle","dy":5}]}
  {{< /apfigure >}}

  **(c) Two triangles, $a>h$, $a<b$**

  {{< apfigure kind="figure" >}}
  {"ariaLabel":"Side b rises from the marked angle alpha to gamma; a solid altitude h drops from gamma to the base at a right angle, and two dashed copies of side a, longer than h but shorter than b, reach the base at two points, one on each side of the altitude, the farther one labeled beta.","unit":34,"segments":[{"from":[0,0],"to":[4.596,3.857],"label":"b"},{"from":[4.596,3.857],"to":[2.278,0],"dashed":true,"label":"a","labelSide":"left"},{"from":[4.596,3.857],"to":[6.914,0],"dashed":true,"label":"a","labelSide":"left"},{"from":[4.596,3.857],"to":[4.596,0],"label":"h"},{"from":[0,0],"to":[6.914,0]}],"circles":[{"at":[0,0],"r":0.9,"from":0,"to":40}],"rightAngles":[{"at":[4.596,0],"dirs":[[1,0],[0,1]]}],"texts":[{"at":[-0.45,-0.1],"text":"α","anchor":"middle","dy":5},{"at":[4.596,4.357],"text":"γ","anchor":"middle","dy":5},{"at":[7.364,-0.1],"text":"β","anchor":"middle","dy":5}]}
  {{< /apfigure >}}

  **(d) One triangle, $a\ge b$**

  {{< apfigure kind="figure" >}}
  {"ariaLabel":"Side b rises from the marked angle alpha to gamma, and side a, at least as long as b, reaches the base at a single point beta beyond the foot of the altitude, forming one triangle.","unit":30,"polygons":[{"points":[[0,0],[4.596,3.857],[9.828,0]],"edgeLabels":["b","a",null],"vertexLabels":["α","γ","β"]}],"circles":[{"at":[0,0],"r":0.9,"from":0,"to":40}],"texts":[]}
  {{< /apfigure >}}

{{< /callout >}}

**Example.** Solve the triangle shown below for the missing side and find the missing angle measures to the nearest tenth.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An oblique triangle with vertices alpha, gamma, beta: a 35-degree angle is marked at alpha, side 8 rises from alpha to gamma, and side 6 runs from gamma down to beta, drawn with an obtuse angle at beta.","unit":32,"polygons":[{"points":[[0,0],[6.553,4.589],[2.688,0]],"edgeLabels":["8","6",null],"vertexLabels":["α","γ","β"]}],"circles":[{"at":[0,0],"r":1.1,"from":0,"to":35}],"texts":[{"at":[1.907,0.601],"text":"35°","anchor":"middle","dy":5}]}
{{< /apfigure >}}

**Solution.** Use the Law of Sines to find angle $\beta$ and angle $\gamma$, and then side $c$. Solving for $\beta$, we have the proportion

$$
\begin{array}{lrcl}
& \tfrac{\sin\alpha}{a} &=& \tfrac{\sin\beta}{b} \\[4pt]
& \tfrac{\sin(35^\circ)}{6} &=& \tfrac{\sin\beta}{8} \\[4pt]
& \tfrac{8\sin(35^\circ)}{6} &=& \sin\beta \\[4pt]
& 0.7648 &\approx& \sin\beta \\[4pt]
& \sin^{-1}(0.7648) &\approx& 49.9^\circ \\[4pt]
& \beta &\approx& 49.9^\circ
\end{array}
$$

However, in the diagram, angle $\beta$ appears to be an obtuse angle and may be greater than $90^\circ$. How did we get an acute angle, and how do we find the measurement of $\beta$? Let's investigate further. Dropping a perpendicular from $\gamma$ and viewing the triangle from a right angle perspective, we have the figure below. It appears that there may be a second triangle that will fit the given criteria.

{{< apfigure kind="figure" >}}
{"ariaLabel":"The Example triangle extended to show both SSA solutions: a 35-degree angle is marked at alpha-prime, side 8 rises to gamma-prime, and two sides of length 6 from gamma-prime reach the base at beta and at beta-prime; a dashed altitude from gamma-prime meets the base at a right angle between them, arcs mark the two equal base angles of the isosceles triangle at beta and beta-prime, and the angle at beta-prime is labeled phi.","unit":30,"segments":[{"from":[0,0],"to":[6.553,4.589],"label":"8"},{"from":[6.553,4.589],"to":[2.688,0],"label":"6"},{"from":[6.553,4.589],"to":[10.418,0],"label":"6"},{"from":[0,0],"to":[10.418,0]},{"from":[6.553,4.589],"to":[6.553,0],"dashed":true}],"rightAngles":[{"at":[6.553,0],"dirs":[[1,0],[0,1]]}],"circles":[{"at":[0,0],"r":1.1,"from":0,"to":35},{"at":[2.688,0],"r":0.7,"from":0,"to":49.89},{"at":[10.418,0],"r":0.7,"from":130.11,"to":180}],"texts":[{"at":[1.907,0.601],"text":"35°","anchor":"middle","dy":5},{"at":[-0.5,-0.1],"text":"α′","anchor":"middle","dy":5},{"at":[2.688,-0.6],"text":"β","anchor":"middle","dy":5},{"at":[10.918,-0.1],"text":"β′","anchor":"middle","dy":5},{"at":[6.553,5.089],"text":"γ′","anchor":"middle","dy":5},{"at":[9.617999999999999,-0.6],"text":"φ","anchor":"middle","dy":5}]}
{{< /apfigure >}}

The angle supplementary to $\beta$ is approximately equal to $49.9^\circ$, which means that $\beta=180^\circ-49.9^\circ=130.1^\circ$. (Remember that the sine function is positive in both the first and second quadrants.) Solving for $\gamma$, we have

$$\gamma=180^\circ-35^\circ-130.1^\circ\approx14.9^\circ$$

We can then use these measurements to solve the other triangle. Since $\gamma'$ is supplementary to the sum of $\alpha'$ and $\beta'$, we have

$$\gamma'=180^\circ-35^\circ-49.9^\circ\approx95.1^\circ$$

Now we need to find $c$ and $c'$. We have

$$
\begin{array}{lrcl}
& \tfrac{c}{\sin(14.9^\circ)} &=& \tfrac{6}{\sin(35^\circ)} \\[4pt]
& c &=& \tfrac{6\sin(14.9^\circ)}{\sin(35^\circ)}\approx2.7
\end{array}
$$

Finally,

$$
\begin{array}{lrcl}
& \tfrac{c'}{\sin(95.1^\circ)} &=& \tfrac{6}{\sin(35^\circ)} \\[4pt]
& c' &=& \tfrac{6\sin(95.1^\circ)}{\sin(35^\circ)}\approx10.4
\end{array}
$$

To summarize, there are two triangles with an angle of $35^\circ$, an adjacent side of $8$, and an opposite side of $6$, as shown below: (a) the triangle with the obtuse angle $\beta$, and (b) the triangle with the acute angle $\beta'$.

**(a)**

{{< apfigure kind="figure" >}}
{"ariaLabel":"The obtuse-beta triangle, each angle marked with an arc: alpha 35 degrees, beta 130.1 degrees, gamma 14.9 degrees; sides b = 8, a = 6, and c approximately 2.7.","unit":46,"polygons":[{"points":[[0,0],[6.553,4.589],[2.688,0]],"edgeLabels":["b = 8","a = 6","c ≈ 2.7"],"vertexLabels":["α","γ","β"]}],"circles":[{"at":[0,0],"r":0.8,"from":0,"to":35},{"at":[6.553,4.589],"r":1.6,"from":215,"to":229.89},{"at":[2.688,0],"r":0.3,"from":49.89,"to":180}],"texts":[{"at":[1.3,0.42],"text":"35°","anchor":"middle","dy":5},{"at":[4.044,2.294],"text":"14.9°","anchor":"middle","dy":5},{"at":[2.45,0.58],"text":"130.1°","anchor":"middle","dy":5}]}
{{< /apfigure >}}

**(b)**

{{< apfigure kind="figure" >}}
{"ariaLabel":"The acute-beta-prime triangle, each angle marked with an arc: alpha-prime 35 degrees, beta-prime 49.9 degrees, gamma-prime 95.1 degrees; sides b′ = 8, a′ = 6, and c′ approximately 10.4.","unit":28,"polygons":[{"points":[[0,0],[6.553,4.589],[10.418,0]],"edgeLabels":["b′ = 8","a′ = 6","c′ ≈ 10.4"],"vertexLabels":["α′","γ′","β′"]}],"circles":[{"at":[0,0],"r":1,"from":0,"to":35},{"at":[6.553,4.589],"r":0.7,"from":215,"to":310.11},{"at":[10.418,0],"r":0.8,"from":130.11,"to":180}],"texts":[{"at":[1.764,0.556],"text":"35°","anchor":"middle","dy":5},{"at":[6.359,3.102],"text":"95.1°","anchor":"middle","dy":5},{"at":[8.967,0.675],"text":"49.9°","anchor":"middle","dy":5}]}
{{< /apfigure >}}

However, we were looking for the values for the triangle with an obtuse angle $\beta$. We can see them in the first triangle (a) above.

{{< fillin
  question="Given $\alpha=80^\circ$, $a=120$, and $b=121$, find side $c$ for the triangle in which $\beta$ is acute. Round to the nearest tenth."
  answer="35.2"
  answerForm="decimal"
  answerDisplay="$c\approx35.2$"
  hint="Use $\sin\beta=\tfrac{b\sin\alpha}{a}$ to find the acute value of $\beta$, then $\gamma=180^\circ-\alpha-\beta$, then the Law of Sines to solve for $c$."
>}}

{{< fillin
  question="For the same $\alpha=80^\circ$, $a=120$, $b=121$, the triangle in which $\beta$ is obtuse has $\beta'\approx96.8^\circ$ and $\gamma'\approx3.2^\circ$. Using these rounded angles, find side $c'$. Round to the nearest tenth."
  answer="6.8"
  answerForm="decimal"
  answerDisplay="$c'\approx6.8$"
  hint="Pair the given $\gamma'$ with the known ratio in the Law of Sines, $\tfrac{c'}{\sin\gamma'}=\tfrac{a}{\sin\alpha}$, and solve for $c'$."
>}}

**Example.** In the triangle shown below, solve for the unknown side and angles. Round your answers to the nearest tenth.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An oblique triangle with vertices alpha, beta, gamma: side 12 runs from alpha up to beta, side 9 is the base from alpha to gamma, and an 85-degree angle is marked at gamma; side a, from beta to gamma, and the angles at alpha and beta are unknown.","unit":24,"polygons":[{"points":[[0,0],[8.236,8.727],[9,0]],"edgeLabels":["12","a","9"],"vertexLabels":["α","β","γ"]}],"circles":[{"at":[9,0],"r":1.1,"from":95,"to":180}],"texts":[{"at":[7.525,1.351],"text":"85°","anchor":"middle","dy":5}]}
{{< /apfigure >}}

**Solution.** In choosing the pair of ratios from the Law of Sines to use, look at the information given. In this case, we know the angle $\gamma=85^\circ$, and its corresponding side $c=12$, and we know side $b=9$. We will use this proportion to solve for $\beta$.

$$
\begin{array}{lrcl}
\text{Isolate the unknown.} & \tfrac{\sin(85^\circ)}{12} &=& \tfrac{\sin\beta}{9} \\[4pt]
& \tfrac{9\sin(85^\circ)}{12} &=& \sin\beta
\end{array}
$$

To find $\beta$, apply the inverse sine function. The inverse sine will produce a single result, but keep in mind that there may be two values for $\beta$. It is important to verify the result, as there may be two viable solutions, only one solution (the usual case), or no solutions.

$$
\begin{array}{lrcl}
& \beta &=& \sin^{-1}\left(\tfrac{9\sin(85^\circ)}{12}\right) \\[4pt]
& \beta &\approx& \sin^{-1}(0.7471) \\[4pt]
& \beta &\approx& 48.3^\circ
\end{array}
$$

In this case, if we subtract $\beta$ from $180^\circ$, we find that there may be a second possible solution. Thus, $\beta=180^\circ-48.3^\circ\approx131.7^\circ$. To check the solution, subtract both angles, $131.7^\circ$ and $85^\circ$, from $180^\circ$. This gives

$$\alpha=180^\circ-85^\circ-131.7^\circ\approx-36.7^\circ,$$

which is impossible, and so $\beta\approx48.3^\circ$.

To find the remaining missing values, we calculate $\alpha=180^\circ-85^\circ-48.3^\circ\approx46.7^\circ$. Now, only side $a$ is needed. Use the Law of Sines to solve for $a$ by one of the proportions.

$$
\begin{array}{lrcl}
& \tfrac{\sin(85^\circ)}{12} &=& \tfrac{\sin(46.7^\circ)}{a} \\[4pt]
& a\tfrac{\sin(85^\circ)}{12} &=& \sin(46.7^\circ) \\[4pt]
& a &=& \tfrac{12\sin(46.7^\circ)}{\sin(85^\circ)}\approx8.8
\end{array}
$$

The complete set of solutions for the given triangle is

$$
\begin{array}{lrcl}
& \alpha\approx46.7^\circ & a\approx8.8 \\[4pt]
& \beta\approx48.3^\circ & b=9 \\[4pt]
& \gamma=85^\circ & c=12
\end{array}
$$

{{< fillin
  question="Given $\alpha=80^\circ$, $a=100$, $b=10$, find side $c$. Round your answer to the nearest tenth."
  answer="101.3"
  answerForm="decimal"
  answerDisplay="$c\approx101.3$"
  hint="Use $\sin\beta=\tfrac{b\sin\alpha}{a}$ to find $\beta$, check whether its supplement still leaves room for a positive $\gamma$, then $\gamma=180^\circ-\alpha-\beta$, then solve for $c$."
>}}

**Example.** Find all possible triangles if one side has length $4$ opposite an angle of $50^\circ$, and a second side has length $10$.

**Solution.** Using the given information, we can solve for the angle opposite the side of length $10$. See the figure below.

$$
\begin{array}{lrcl}
& \tfrac{\sin\alpha}{10} &=& \tfrac{\sin(50^\circ)}{4} \\[4pt]
& \sin\alpha &=& \tfrac{10\sin(50^\circ)}{4} \\[4pt]
& \sin\alpha &\approx& 1.915
\end{array}
$$

{{< apfigure kind="figure" >}}
{"ariaLabel":"An open, incomplete triangle: a 50-degree angle is marked at the lower-left vertex where a base of length 10 begins, and from an upper vertex labeled alpha a side of length 4 is drawn toward the far end of the base but stops well short of reaching it.","unit":26,"segments":[{"from":[0,0],"to":[4.5,5.363]},{"from":[4.5,5.363],"to":[7.364,2.57],"label":"4"},{"from":[0,0],"to":[10,0],"label":"10","labelSide":"right"}],"points":[{"at":[0,0]},{"at":[4.5,5.363]},{"at":[10,0]}],"circles":[{"at":[0,0],"r":1.1,"from":0,"to":50}],"texts":[{"at":[1.813,0.845],"text":"50°","anchor":"middle","dy":5},{"at":[4.5,5.913],"text":"α","anchor":"middle","dy":5}]}
{{< /apfigure >}}

We can stop here without finding the value of $\alpha$. Because the range of the sine function is $[-1,1]$, it is impossible for the sine value to be $1.915$. In fact, inputting $\sin^{-1}(1.915)$ in a graphing calculator generates an ERROR DOMAIN. Therefore, no triangles can be drawn with the provided dimensions.

{{< multiplechoice
  question="Determine the number of triangles possible given $a=31$, $b=26$, $\beta=48^\circ$."
  answer="two triangles"
  hint="Solve $\sin\alpha=\tfrac{a\sin\beta}{b}$ for the acute value of $\alpha$, then check whether both the acute value and its supplement leave a positive $\gamma=180^\circ-\alpha-\beta$."
>}}
two triangles
no triangle possible
exactly one triangle
{{< /multiplechoice >}}

### Finding the Area of an Oblique Triangle Using the Sine Function

Now that we can solve a triangle for missing values, we can use some of those values and the sine function to find the area of an oblique triangle. Recall that the area formula for a triangle is given as $\text{Area}=\tfrac12 bh$, where $b$ is base and $h$ is height. For oblique triangles, we must find $h$ before we can use the area formula. Observing the two triangles below, one acute and one obtuse, we can drop a perpendicular to represent the height and then apply the trigonometric property $\sin\alpha=\tfrac{\text{opposite}}{\text{hypotenuse}}$ to write an equation for area in oblique triangles. In the acute triangle, we have $\sin\alpha=\tfrac{h}{c}$ or $c\sin\alpha=h$. However, in the obtuse triangle, we drop the perpendicular outside the triangle and extend the base $b$ to form a right triangle. The angle used in calculation is $\alpha'$, or $180-\alpha$.

{{< apfigure kind="figure" >}}
{"ariaLabel":"The acute triangle: vertices alpha, beta, gamma with sides c, a, and b; an arc marks angle alpha, and the dashed altitude h from beta meets the base b inside the triangle at a right angle.","unit":34,"polygons":[{"points":[[0,0],[3,4],[8,0]],"edgeLabels":["c","a","b"],"vertexLabels":["α","β","γ"]}],"segments":[{"from":[3,4],"to":[3,0],"dashed":true,"label":"h","labelSide":"right"}],"rightAngles":[{"at":[3,0],"dirs":[[1,0],[0,1]]}],"circles":[{"at":[0,0],"r":0.7,"from":0,"to":53.13}],"texts":[]}
{{< /apfigure >}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"The obtuse triangle: the angle alpha is obtuse, so the dashed altitude h from beta falls outside the triangle; the base b is extended past alpha (dashed) to meet it at a right angle, and the exterior angle alpha-prime is marked between side c and the extension.","unit":30,"polygons":[{"points":[[3,0],[0,4],[10,0]],"edgeLabels":["c","a","b"],"vertexLabels":[null,"β","γ"]}],"segments":[{"from":[0,4],"to":[0,0],"dashed":true,"label":"h","labelSide":"right"},{"from":[3,0],"to":[0,0],"dashed":true}],"rightAngles":[{"at":[0,0],"dirs":[[1,0],[0,1]]}],"circles":[{"at":[3,0],"r":0.45,"from":0,"to":126.87},{"at":[3,0],"r":0.75,"from":126.87,"to":180}],"texts":[{"at":[3.425,0.85],"text":"α","anchor":"middle","dy":5},{"at":[1.75,0.38],"text":"α′","anchor":"middle","dy":5}]}
{{< /apfigure >}}

Thus,

$$\text{Area}=\tfrac12(\text{base})(\text{height})=\tfrac12 b(c\sin\alpha)$$

Similarly,

$$\text{Area}=\tfrac12 a(b\sin\gamma)=\tfrac12 a(c\sin\beta)$$

{{< callout type="info" >}}
  **Area of an Oblique Triangle.**

  The formula for the area of an oblique triangle is given by

  $$
  \begin{array}{lrcl}
  \text{Area} &=& \tfrac12 bc\sin\alpha \\[4pt]
  &=& \tfrac12 ac\sin\beta \\[4pt]
  &=& \tfrac12 ab\sin\gamma
  \end{array}
  $$

  This is equivalent to one-half of the product of two sides and the sine of their included angle.
{{< /callout >}}

**Example.** Find the area of a triangle with sides $a=90$, $b=52$, and angle $\gamma=102^\circ$. Round the area to the nearest integer.

**Solution.** Using the formula, we have

$$
\begin{array}{lrcl}
& \text{Area} &=& \tfrac12 ab\sin\gamma \\[4pt]
& \text{Area} &=& \tfrac12(90)(52)\sin(102^\circ) \\[4pt]
& \text{Area} &\approx& 2{,}289\ \text{square units}
\end{array}
$$

{{< fillin
  question="Find the area of the triangle given $\beta=42^\circ$, $a=7.2\ \text{ft}$, $c=3.4\ \text{ft}$. Round the area to the nearest tenth."
  answer="8.2"
  answerForm="decimal"
  answerDisplay="$8.2$ square feet"
  hint="Use $\text{Area}=\tfrac12 ac\sin\beta$."
>}}

### Solving Applied Problems Using the Law of Sines

The more we study trigonometric applications, the more we discover that the applications are countless. Some are flat, diagram-type situations, but many applications in calculus, engineering, and physics involve three dimensions and motion.

**Example.** Find the altitude of the aircraft in the problem introduced at the beginning of this section, shown below. Round the altitude to the nearest tenth of a mile.

{{< apfigure kind="figure" >}}
{"ariaLabel":"The same aircraft triangle, with the 15-degree and 35-degree station angles marked by arcs, now with side a — from the 15-degree station to the aircraft — labeled as the distance to be found before computing the altitude.","unit":15,"polygons":[{"points":[[0,0],[14.465,3.876],[20,0]],"edgeLabels":["a",null,"20 miles"],"vertexLabels":[null,null,null]}],"segments":[{"from":[14.465,3.876],"to":[14.465,0],"dashed":true}],"rightAngles":[{"at":[14.465,0],"dirs":[[1,0],[0,1]]}],"circles":[{"at":[0,0],"r":3.2,"from":0,"to":15},{"at":[20,0],"r":2.4,"from":145,"to":180}],"texts":[{"at":[6.444,0.848],"text":"15°","anchor":"middle","dy":5},{"at":[16.281,1.173],"text":"35°","anchor":"middle","dy":5}]}
{{< /apfigure >}}

**Solution.** To find the elevation of the aircraft, we first find the distance from one station to the aircraft, such as the side $a$, and then use right triangle relationships to find the height of the aircraft, $h$.

Because the angles in the triangle add up to $180$ degrees, the unknown angle must be $180^\circ-15^\circ-35^\circ=130^\circ$. This angle is opposite the side of length $20$, allowing us to set up a Law of Sines relationship.

$$
\begin{array}{lrcl}
& \tfrac{\sin(130^\circ)}{20} &=& \tfrac{\sin(35^\circ)}{a} \\[4pt]
& a\sin(130^\circ) &=& 20\sin(35^\circ) \\[4pt]
& a &=& \tfrac{20\sin(35^\circ)}{\sin(130^\circ)} \\[4pt]
& a &\approx& 14.98
\end{array}
$$

The distance from one station to the aircraft is about $14.98$ miles.

Now that we know $a$, we can use right triangle relationships to solve for $h$.

$$
\begin{array}{lrcl}
& \sin(15^\circ) &=& \tfrac{\text{opposite}}{\text{hypotenuse}} \\[4pt]
& \sin(15^\circ) &=& \tfrac{h}{a} \\[4pt]
& \sin(15^\circ) &=& \tfrac{h}{14.98} \\[4pt]
& h &=& 14.98\sin(15^\circ) \\[4pt]
& h &\approx& 3.88
\end{array}
$$

The aircraft is at an altitude of approximately $3.9$ miles.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An oblique triangle with vertices A, B, and C representing a blimp above a football field: the baseline AB is 145 yards, a 70-degree angle is marked at A (the southern end zone), and a 62-degree angle is marked at B (the northern end zone).","unit":2.2,"polygons":[{"points":[[0,0],[58.922,161.888],[145,0]],"edgeLabels":[null,null,"145 yards"],"vertexLabels":["A","C","B"]}],"points":[{"at":[0,0]},{"at":[145,0]},{"at":[58.922,161.888]}],"circles":[{"at":[0,0],"r":9,"from":0,"to":70},{"at":[145,0],"r":9,"from":118,"to":180}],"texts":[{"at":[13.926,9.751],"text":"70°","anchor":"middle","dy":5},{"at":[130.428,8.756],"text":"62°","anchor":"middle","dy":5}]}
{{< /apfigure >}}

{{< fillin
  question="The diagram above represents the height of a blimp flying over a football stadium. Find the height of the blimp if the angle of elevation at the southern end zone, point $A$, is $70^\circ$, the angle of elevation from the northern end zone, point $B$, is $62^\circ$, and the distance between the viewing points of the two end zones is $145$ yards. Round to the nearest tenth of a yard."
  answer="161.9"
  answerForm="decimal"
  answerDisplay="$161.9$ yd"
  hint="Find the angle at $C$ from $180^\circ-70^\circ-62^\circ$, use the Law of Sines to find side $AC$ (opposite the $62^\circ$ angle), then multiply by $\sin(70^\circ)$ to get the height."
>}}

## Key equations

| Law of Sines | $\begin{array}{l} \tfrac{\sin\alpha}{a}=\tfrac{\sin\beta}{b}=\tfrac{\sin\gamma}{c} \\ \tfrac{a}{\sin\alpha}=\tfrac{b}{\sin\beta}=\tfrac{c}{\sin\gamma} \end{array}$ |
| :--- | :--- |
| Area for oblique triangles | $\begin{array}{l} \text{Area}=\tfrac12 bc\sin\alpha \\ =\tfrac12 ac\sin\beta \\ =\tfrac12 ab\sin\gamma \end{array}$ |

## Key concepts

- The Law of Sines can be used to solve oblique triangles, which are non-right triangles.
- According to the Law of Sines, the ratio of the measurement of one of the angles to the length of its opposite side equals the other two ratios of angle measure to opposite side.
- There are three possible cases: ASA, AAS, SSA. Depending on the information given, we can choose the appropriate equation to find the requested solution.
- The ambiguous case arises when an oblique triangle can have different outcomes.
- There are three possible cases that arise from the SSA arrangement — a single solution, two possible solutions, and no solution.
- The Law of Sines can be used to solve triangles with given criteria.
- The general area formula for triangles translates to oblique triangles by first finding the appropriate height value.
- There are many trigonometric applications. They can often be solved by first drawing a diagram of the given information and then using the appropriate equation.

## Practice

### Use the Law of Sines to solve oblique triangles

{{< fillin
  question="Find side $b$ when $A=37^\circ$, $B=49^\circ$, $c=5$. Round to the nearest hundredth."
  answer="3.78"
  answerForm="decimal"
  answerDisplay="$b\approx3.78$"
  hint="Find $C=180^\circ-37^\circ-49^\circ$, then use $\tfrac{b}{\sin B}=\tfrac{c}{\sin C}$."
>}}

{{< fillin
  question="Find side $c$ when $B=37^\circ$, $C=21^\circ$, $b=23$. Round to the nearest hundredth."
  answer="13.70"
  answerForm="decimal"
  answerDisplay="$c\approx13.70$"
  hint="Use the proportion $\tfrac{c}{\sin C}=\tfrac{b}{\sin B}$ directly — the third angle is not needed."
>}}

{{< fillin
  question="For the triangle with $a=12$, $c=17$, $\alpha=35^\circ$, find $\gamma$ for the solution in which $\gamma$ is acute. Round to the nearest tenth of a degree."
  answer="54.3^\circ"
  answerForm="degrees"
  answerDisplay="$\gamma\approx54.3^\circ$"
  hint="Solve $\sin\gamma=\tfrac{c\sin\alpha}{a}$ for the acute angle whose sine matches; check that $180^\circ-\alpha-\gamma$ stays positive."
>}}

{{< fillin
  question="For the same triangle ($a=12$, $c=17$, $\alpha=35^\circ$), find $\gamma$ for the solution in which $\gamma$ is obtuse. Round to the nearest tenth of a degree."
  answer="125.7^\circ"
  answerForm="degrees"
  answerDisplay="$\gamma\approx125.7^\circ$"
  hint="Subtract the acute value of $\gamma$ from $180^\circ$ to get the second solution, then confirm $180^\circ-\alpha-\gamma$ is still positive."
>}}

{{< multiplechoice
  question="Assume $\alpha$ is opposite side $a$, $\beta$ is opposite side $b$, and $\gamma$ is opposite side $c$. Determine whether $\beta=119^\circ$, $b=8.2$, $a=11.3$ gives no triangle, one triangle, or two triangles."
  answer="no triangle"
  hint="Use the Law of Sines to solve for $\sin\alpha$, then ask whether a sine can take that value."
>}}
two triangles
one triangle
no triangle
{{< /multiplechoice >}}

### Find the area of an oblique triangle using the sine function

{{< fillin
  question="Find the area of the triangle with $a=5$, $c=6$, $\beta=35^\circ$. Round to the nearest tenth."
  answer="8.6"
  answerForm="decimal"
  answerDisplay="$8.6$"
  hint="Use $\text{Area}=\tfrac12 ac\sin\beta$."
>}}

{{< fillin
  question="Find the area of the triangle with $a=32$, $b=24$, $\gamma=75^\circ$. Round to the nearest tenth."
  answer="370.9"
  answerForm="decimal"
  answerDisplay="$370.9$"
  hint="Use $\text{Area}=\tfrac12 ab\sin\gamma$."
>}}

{{< fillin
  question="Two streets meet at an $80^\circ$ angle. A triangular park has edges of $180$ feet and $215$ feet along the two streets. Find the area of the park, rounded to the nearest whole square foot."
  answer="19{,}056"
  answerForm="decimal"
  answerDisplay="$19{,}056\ \text{ft}^2$"
  hint="The two given edges and the $80^\circ$ angle between them are two sides and the included angle: $\text{Area}=\tfrac12(\text{side}_1)(\text{side}_2)\sin(80^\circ)$."
>}}

### Solve applied problems using the Law of Sines

{{< fillin
  question="Two students stand at a certain distance from a building at street level and find the angle of elevation to the top to be $35^\circ$. They then move $250$ feet closer to the building and find the angle of elevation to be $53^\circ$. Assuming the street is level, estimate the height of the building to the nearest foot."
  answer="371"
  answerForm="decimal"
  answerDisplay="$371$ ft"
  hint="The two viewing points and the top of the building form a triangle with a $180^\circ-53^\circ$ interior angle at the closer point; find the top-of-building angle, then use the Law of Sines and the $53^\circ$ angle to get the height."
>}}

{{< fillin
  question="A man and a woman standing $3\tfrac12$ miles apart spot a hot air balloon at the same time. If the angle of elevation from the man to the balloon is $27^\circ$, and the angle of elevation from the woman to the balloon is $41^\circ$, find the altitude of the balloon to the nearest foot."
  answer="5936"
  answerForm="decimal"
  answerDisplay="$5{,}936$ ft"
  hint="Convert the baseline to feet, find the angle at the balloon from $180^\circ-27^\circ-41^\circ$, use the Law of Sines to find the distance from one person to the balloon, then multiply by the sine of that person's elevation angle."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 8.1: Non-right Triangles: Law of Sines](https://openstax.org/books/precalculus-2e/pages/8-1-non-right-triangles-law-of-sines) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated the instructional figures as twenty-two accessible spec-first SVGs built from exact law-of-sines/coordinate computations (never traced), with every marked angle drawn as an exact arc, its measure inside the angle, and the vertex names outside as in the source — the opening and closing aircraft triangle (shared shape, the second with side $a$ labeled); the ASA/AAS/SSA classification triangles, with the source's arcs and tick marks on the known parts; the altitude-derivation triangle and the standard-labeling triangle; the three worked-example triangles and the first Try It's triangle; the four-panel "Possible Outcomes for SSA Triangles" diagram, redrawn at a fixed schematic angle and side lengths that reproduce the same four outcomes, as four consecutive figures under their source captions; the ambiguous-case investigation triangle with its dashed altitude, the equal base angles, and $\varphi$; the two-panel final comparison, split into two consecutive single-triangle figures under bold "(a)"/"(b)" leads; the impossible-triangle attempt, with the too-short fourth side drawn stopping short of closing; the acute/obtuse area-derivation pair, as two consecutive figures; and the blimp triangle with vertices $A$, $B$, $C$. Omitted the decorative airplane/radar-station and blimp photographic overlays, which carry no mathematics, and the "Access these online resources" media links. Every retained Try It became a real `fillin`, `multiplechoice`, or paired-`fillin` component. Where a source "solve the triangle" Try It has several unknowns of mixed units (an angle plus one or more sides), a single side was asked instead of the full set; the $a=120$, $b=121$ ambiguous-case Try It asks for the third side of each of its two triangles, and the matching Practice exercise asks for $\gamma$ in each of its two triangles, as paired fill-ins. Two Try Its (the $a=120$, $b=121$ ambiguous case and the blimp height) did not state a rounding instruction in the source; "round to the nearest tenth" was added to match the section's own convention and the precision the printed key carries. The obtuse-triangle part of that ambiguous-case Try It also states the source solution's rounded intermediate angles ($\beta'\approx96.8^\circ$, $\gamma'\approx3.2^\circ$) and asks for $c'$ from them, because the printed key's $6.8$ comes from that rounded chain while the full-precision chain rounds to $6.9$ — without pinning the chain, either a careful learner or the source's own answer would grade wrong. Adapted ten selected end-of-section exercises — two direct Law of Sines side solves, one ambiguous-case pair (as two fill-ins), one no-triangle recognition multiple choice, three area computations (two numeric, one a real-world park problem), and two real-world elevation-angle word problems — into a closing Practice block, one group per objective, every answer independently re-derived by running the law-of-sines arithmetic in Node rather than read off the source key.</small>
