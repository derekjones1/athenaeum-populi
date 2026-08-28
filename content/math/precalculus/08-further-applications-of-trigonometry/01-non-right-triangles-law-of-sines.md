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
{"ariaLabel":"An oblique triangle formed by two ground radar stations 20 miles apart and an aircraft between them: the angle at the left station is 15 degrees, the angle at the right station is 35 degrees, and a dashed altitude drops from the aircraft straight down to the ground.","unit":15,"polygons":[{"points":[[0,0],[14.465,3.876],[20,0]],"edgeLabels":[null,null,"20 miles"],"vertexLabels":["15°",null,"35°"]}],"segments":[{"from":[14.465,3.876],"to":[14.465,0],"dashed":true}],"rightAngles":[{"at":[14.465,0],"dirs":[[1,0],[0,1]]}]}
{{< /apfigure >}}

### Using the Law of Sines to Solve Oblique Triangles

In any triangle, we can draw an **altitude**, a perpendicular line from one vertex to the opposite side, forming two right triangles. It would be preferable, however, to have methods that we can apply directly to non-right triangles without first having to create right triangles.

Any triangle that is not a right triangle is an **oblique triangle**. Solving an oblique triangle means finding the measurements of all three angles and all three sides. To do so, we need to start with at least three of these values, including at least one of the sides. We will investigate three possible oblique triangle problem situations:

- **ASA (angle-side-angle)** We know the measurements of two angles and the included side.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A schematic oblique triangle with vertices alpha, beta, gamma, illustrating the ASA case: angles alpha and gamma and the side between them are the known parts.","unit":40,"polygons":[{"points":[[0,0],[3,4],[8,0]],"vertexLabels":["α","β","γ"]}]}
{{< /apfigure >}}

- **AAS (angle-angle-side)** We know the measurements of two angles and a side that is not between the known angles.

{{< apfigure kind="figure" >}}
{"ariaLabel":"The same schematic triangle illustrating the AAS case: angles alpha and gamma and the side opposite alpha, which is not between them, are the known parts.","unit":40,"polygons":[{"points":[[0,0],[3,4],[8,0]],"vertexLabels":["α","β","γ"]}]}
{{< /apfigure >}}

- **SSA (side-side-angle)** We know the measurements of two sides and an angle that is not between the known sides.

{{< apfigure kind="figure" >}}
{"ariaLabel":"The same schematic triangle illustrating the SSA case: the sides opposite alpha and gamma and the angle alpha, which is not between them, are the known parts.","unit":40,"polygons":[{"points":[[0,0],[3,4],[8,0]],"vertexLabels":["α","β","γ"]}]}
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
{"ariaLabel":"An oblique triangle with a 50-degree angle at alpha, a 30-degree angle at gamma, the side of length 10 opposite alpha, and the unknown side b as the base and side c on the left.","unit":28,"polygons":[{"points":[[0,0],[4.195,5],[12.856,0]],"edgeLabels":["c","10","b"],"vertexLabels":["50°","β","30°"]}]}
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
{"ariaLabel":"A tall, narrow oblique triangle with a 98-degree angle at alpha, a 43-degree angle at gamma, and the base of length 22 between them; the two slanted sides a and c are unlabeled.","unit":12,"polygons":[{"points":[[0,0],[-3.318,23.61],[22,0]],"edgeLabels":["c","a","22"],"vertexLabels":["98°","β","43°"]}]}
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

  Oblique triangles in the category SSA may have four different outcomes, shown below with the known sides $a$ and $b$ and known angle $\alpha$: (a) no triangle, when $a<h$; (b) a right triangle, when $a=h$; (c) two triangles, when $h<a<b$; (d) one triangle, when $a\ge b$.

  {{< apfigure kind="figure" >}}
  {"ariaLabel":"Four small oblique-triangle diagrams illustrating the possible outcomes when solving an SSA triangle with known sides a and b and known angle alpha: (a) no triangle when a is less than the altitude h; (b) a right triangle when a equals h; (c) two triangles when a is greater than h but less than b; (d) one triangle when a is greater than or equal to b.","unit":4,"segments":[{"from":[0,0],"to":[5.088,3.18]},{"from":[5.088,3.18],"to":[5.088,1.58],"dashed":true},{"from":[0,0],"to":[7,0]},{"from":[13,0],"to":[18.088,3.18]},{"from":[18.088,3.18],"to":[18.088,0]},{"from":[13,0],"to":[20,0]},{"from":[27,0],"to":[32.088,3.18]},{"from":[32.088,3.18],"to":[28.904,0]},{"from":[32.088,3.18],"to":[35.273,0]},{"from":[27,0],"to":[35.273,0]},{"from":[44,0],"to":[49.088,3.18]},{"from":[49.088,3.18],"to":[56.429,0]},{"from":[44,0],"to":[56.429,0]}],"rightAngles":[{"at":[18.088,0],"dirs":[[1,0],[0,1]]}],"texts":[{"at":[2.5,5.3],"text":"(a)","anchor":"middle"},{"at":[-0.9,-1.1],"text":"α"},{"at":[6.0,3.7],"text":"γ"},{"at":[15.5,5.3],"text":"(b)","anchor":"middle"},{"at":[12.1,-1.1],"text":"α"},{"at":[19.0,3.7],"text":"γ"},{"at":[29.5,5.3],"text":"(c)","anchor":"middle"},{"at":[26.1,-1.1],"text":"α"},{"at":[33.0,3.7],"text":"γ"},{"at":[28.904,-1.9],"text":"β"},{"at":[35.273,-1.9],"text":"β′"},{"at":[46.5,5.3],"text":"(d)","anchor":"middle"},{"at":[43.1,-1.1],"text":"α"},{"at":[50.0,3.7],"text":"γ"},{"at":[56.429,-1.9],"text":"β"}]}
  {{< /apfigure >}}

{{< /callout >}}

**Example.** Solve the triangle shown below for the missing side and find the missing angle measures to the nearest tenth.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An oblique triangle with a 35-degree angle at alpha, side b=8 rising to gamma, and side a=6 from gamma down to beta, drawn so that beta looks like it could be an obtuse angle.","unit":32,"polygons":[{"points":[[0,0],[6.553,4.589],[2.687,0]],"edgeLabels":["8","6",null],"vertexLabels":["35°","γ","β"]}]}
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
{"ariaLabel":"The Example triangle extended to show both SSA solutions: from the fixed side b = 8 between alpha-prime and gamma-prime, two points six units from gamma-prime lie on the base — beta, giving the original obtuse triangle, and beta-prime, giving a second triangle — with a dashed altitude from gamma-prime to the base and the base angle phi marked at beta-prime.","unit":30,"segments":[{"from":[0,0],"to":[6.553,4.589],"label":"8"},{"from":[6.553,4.589],"to":[2.687,0],"label":"6"},{"from":[6.553,4.589],"to":[10.419,0],"label":"6"},{"from":[0,0],"to":[10.419,0]},{"from":[6.553,4.589],"to":[6.553,0],"dashed":true}],"points":[{"at":[0,0]},{"at":[2.687,0]},{"at":[10.419,0]},{"at":[6.553,4.589]}],"rightAngles":[{"at":[6.553,0],"dirs":[[1,0],[0,1]]}],"texts":[{"at":[-0.4,-0.4],"text":"α′"},{"at":[1.5,0.75],"text":"35°"},{"at":[2.687,-0.4],"text":"β"},{"at":[10.419,-0.4],"text":"β′"},{"at":[6.553,5.05],"text":"γ′"},{"at":[9.85,0.55],"text":"φ"}]}
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
{"ariaLabel":"The obtuse-beta triangle: alpha 35 degrees, beta 130.1 degrees, gamma 14.9 degrees, b=8, a=6, c approximately 2.7.","unit":30,"polygons":[{"points":[[0,0],[6.553,4.589],[2.687,0]],"edgeLabels":["b = 8","a = 6","c ≈ 2.7"],"vertexLabels":["35°","14.9°","130.1°"]}]}
{{< /apfigure >}}

**(b)**

{{< apfigure kind="figure" >}}
{"ariaLabel":"The acute-beta-prime triangle: alpha 35 degrees, beta-prime 49.9 degrees, gamma-prime 95.1 degrees, b′=8, a′=6, c′ approximately 10.4.","unit":26,"polygons":[{"points":[[0,0],[6.553,4.589],[10.419,0]],"edgeLabels":["b′ = 8","a′ = 6","c′ ≈ 10.4"],"vertexLabels":["35°","95.1°","49.9°"]}]}
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
  question="For the same $\alpha=80^\circ$, $a=120$, $b=121$, the triangle in which $\beta$ is obtuse has $\beta'\approx96.8^\circ$ and $\gamma'\approx3.2^\circ$. Using these rounded angles, find side $c$. Round to the nearest tenth."
  answer="6.8"
  answerForm="decimal"
  answerDisplay="$c\approx6.8$"
  hint="Take $180^\circ$ minus the acute value of $\beta$ to get the obtuse solution, find the new $\gamma$, then solve for $c$ with the Law of Sines."
>}}

**Example.** In the triangle shown below, solve for the unknown side and angles. Round your answers to the nearest tenth.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An oblique triangle with side c=12 from alpha up to beta, side b=9 as the base from alpha to gamma, and an 85-degree angle at gamma; side a and angle alpha and angle beta are unknown.","unit":24,"polygons":[{"points":[[0,0],[8.23,8.733],[9,0]],"edgeLabels":["12","a","9"],"vertexLabels":["α","β","85°"]}]}
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
  hint="Use $\sin\beta=\tfrac{b\sin\alpha}{a}$ to find $\beta$ (only the acute value gives a valid triangle here), then $\gamma=180^\circ-\alpha-\beta$, then solve for $c$."
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
{"ariaLabel":"An open, incomplete triangle: a 50-degree angle is marked at the lower-left vertex where a base of length 10 begins, and from an upper vertex labeled alpha a side of length 4 is drawn toward the far end of the base but stops well short of reaching it.","unit":26,"segments":[{"from":[0,0],"to":[4.5,5.362]},{"from":[4.5,5.362],"to":[7.364,2.57],"label":"4"},{"from":[0,0],"to":[10,0],"label":"10"}],"points":[{"at":[0,0]},{"at":[4.5,5.362]},{"at":[10,0]}],"texts":[{"at":[1.1,0.4],"text":"50°"},{"at":[4.5,5.85],"text":"α"}]}
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
{"ariaLabel":"Two oblique triangles illustrating the area derivation: in the acute triangle, the altitude h from beta meets the base b between alpha and gamma; in the obtuse triangle, the altitude falls outside the triangle, so the base is extended (dashed) and the exterior angle alpha-prime is marked at alpha.","unit":22,"polygons":[{"points":[[0,0],[3,4],[8,0]],"edgeLabels":["c","a","b"],"vertexLabels":["α","β","γ"]},{"points":[[16,0],[11,3],[21,0]],"edgeLabels":["c","a","b"],"vertexLabels":["α","β","γ"]}],"segments":[{"from":[3,4],"to":[3,0],"dashed":true,"label":"h"},{"from":[11,3],"to":[11,0],"dashed":true,"label":"h"},{"from":[16,0],"to":[11,0],"dashed":true}],"rightAngles":[{"at":[3,0],"dirs":[[1,0],[0,1]]},{"at":[11,0],"dirs":[[1,0],[0,1]]}],"texts":[{"at":[13.5,-1],"text":"α′"}]}
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
{"ariaLabel":"The same aircraft triangle, now with side a — from the 15-degree station to the aircraft — labeled as the distance to be found before computing the altitude.","unit":15,"polygons":[{"points":[[0,0],[14.465,3.876],[20,0]],"edgeLabels":["a",null,"20 miles"],"vertexLabels":["15°",null,"35°"]}],"segments":[{"from":[14.465,3.876],"to":[14.465,0],"dashed":true}],"rightAngles":[{"at":[14.465,0],"dirs":[[1,0],[0,1]]}]}
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
{"ariaLabel":"An oblique triangle with vertices A, B, and C representing a blimp above a football field: the baseline AB is 145 yards, the angle at A (southern end zone) is 70 degrees, and the angle at B (northern end zone) is 62 degrees.","unit":2.2,"polygons":[{"points":[[0,0],[58.922,161.888],[145,0]],"edgeLabels":[null,null,"145 yards"],"vertexLabels":["A","C","B"]}],"texts":[{"at":[10,6],"text":"70°"},{"at":[132,6],"text":"62°"}]}
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
  question="For the following exercise, assume $\alpha$ is opposite side $a$, $\beta$ is opposite side $b$, and $\gamma$ is opposite side $c$. Determine whether $\beta=119^\circ$, $b=8.2$, $a=11.3$ gives no triangle, one triangle, or two triangles."
  answer="no triangle"
  hint="A triangle needs the side opposite the largest angle to be the longest side; compare $b$ (opposite the obtuse $119^\circ$) with $a$."
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

<small>This section is adapted from [Precalculus 2e, Section 8.1: Non-right Triangles: Law of Sines](https://openstax.org/books/precalculus-2e/pages/8-1-non-right-triangles-law-of-sines) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated all eighteen instructional figures as accessible spec-first SVGs built from exact law-of-sines/coordinate computations (never traced) — the opening and closing aircraft triangle (shared shape, the second with side $a$ labeled); the ASA/AAS/SSA classification triangles, whose source tick marks indicating "known" parts have no primitive in this engine's figure spec and were omitted, since the same information is stated in the accompanying list text; the altitude-derivation triangle and the standard-labeling triangle; the three worked-example triangles and the first Try It's triangle; the four-panel "Possible Outcomes for SSA Triangles" diagram, redrawn at a fixed schematic angle and side length chosen to reproduce the same four qualitative outcomes the source shows (no numeric values are keyed to it; the source's per-panel prose captions were moved into the callout's lead sentence and the figure itself keeps only the (a)–(d) letters, since the engine's dynamic font-floor scaling made four long captions in one figure collide no matter how widely they were spaced — a global effect of the shared viewBox, not a per-label placement bug); the ambiguous-case investigation triangle with its dashed altitude and $\varphi$ angle; the two-panel final comparison (Figure 12), split into two consecutive single-triangle figures under bold "(a)"/"(b)" leads for the same font-floor reason; the impossible-triangle attempt, with the too-short fourth side drawn stopping short of closing; the two-panel acute/obtuse area-derivation triangles; and the blimp triangle with vertices $A$, $B$, $C$. Omitted the decorative airplane/radar-station and blimp photographic overlays, which carry no mathematics, and the "Access these online resources" media links. Every retained Try It became a real `fillin`, `multiplechoice`, or paired-`fillin` component. Where a source "solve the triangle" Try It has several unknowns of mixed units (an angle plus one or more sides), a single quantity was asked instead of the full set, since one `answerForm` token cannot require `degrees` of one list member and `decimal` of another; the two ambiguous-case Try Its and the matching Practice item instead ask for one component per triangle (`answerForm="degrees"` on the rounded-degree answers — measured against the real grader, composing `degrees decimal` self-rejects a degree-valued answer, because `decimal`'s predicate requires the WHOLE response to be a bare numeral, which a trailing $^\circ$ never is, so `degrees` alone, whose own predicate already demands a decimal/fraction/mixed-number head, is the correct token), following the same "one component per triangle" rule used for the ambiguous SSA case throughout. Two Try Its (the second ambiguous-case triangle and the blimp height) did not state a rounding instruction in the source; "round to the nearest tenth" was added to match the section's own convention and the precision the printed key carries. The obtuse-triangle part of that ambiguous-case Try It also states the source solution's rounded intermediate angles ($\beta'\approx96.8^\circ$, $\gamma'\approx3.2^\circ$) and asks for $c$ from them, because the printed key's $6.8$ comes from that rounded chain while the full-precision chain rounds to $6.9$ — without pinning the chain, either a careful learner or the source's own answer would grade wrong (see the errata log). Adapted ten selected end-of-section exercises — two direct Law of Sines side solves, one ambiguous-case pair (as two fill-ins), one no-triangle recognition multiple choice, three area computations (two numeric, one a real-world park problem), and two real-world elevation-angle word problems — into a closing Practice block, one group per objective, every answer independently re-derived by running the law-of-sines arithmetic in Node rather than read off the source key.</small>
