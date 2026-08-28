---
title: Non-right Triangles - Law of Cosines
description: >-
  Solving oblique triangles in the SAS and SSS cases with the Law of Cosines,
  applying it to real-world triangulation and navigation problems, and using
  Heron's formula to find a triangle's area from its three sides — adapted
  from OpenStax Precalculus 2e, Section 8.2.
source_section: "8.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use the Law of Cosines to solve oblique triangles
- Solve applied problems using the Law of Cosines
- Use Heron's formula to find the area of a triangle
{{< /callout >}}

Suppose a boat leaves port, travels $10$ miles, turns $20$ degrees, and travels another $8$ miles as shown below. How far from port is the boat?

{{< apfigure kind="figure" >}}
{"ariaLabel":"A triangle whose vertices are the port, the point where the boat turned, and the boat: the port-to-turn leg is 10 mi, the turn-to-boat leg is 8 mi, the port-to-turn leg is extended past the turn point as a dashed ray, and the angle between that dashed ray and the 8-mi leg is 20 degrees.","unit":26,"polygons":[{"points":[[0,0],[0,10],[-2.7362,17.5175]],"edgeLabels":["10 mi","8 mi",null],"vertexLabels":["Port",null,null]}],"segments":[{"from":[0,10],"to":[0,13],"dashed":true}],"texts":[{"at":[-0.78,14.29],"text":"20°","anchor":"middle"}]}
{{< /apfigure >}}

Unfortunately, while the Law of Sines enables us to address many non-right triangle cases, it does not help us with triangles where the known angle is between two known sides, a **SAS (side-angle-side) triangle**, or when all three sides are known, but no angles are known, a **SSS (side-side-side) triangle**. In this section, we will investigate another tool for solving oblique triangles described by these last two cases.

### Using the Law of Cosines to Solve Oblique Triangles

The tool we need to solve the problem of the boat's distance from the port is the **Law of Cosines**, which defines the relationship among angle measurements and side lengths in oblique triangles. Three formulas make up the Law of Cosines. At first glance, the formulas may appear complicated because they include many variables. However, once the pattern is understood, the Law of Cosines is easier to work with than most formulas at this mathematical level.

Understanding how the Law of Cosines is derived will be helpful in using the formulas. The derivation begins with the **Generalized Pythagorean Theorem**, an extension of the Pythagorean Theorem to non-right triangles. Here is how it works: an arbitrary non-right triangle $ABC$ is placed in the coordinate plane with vertex $A$ at the origin, side $c$ drawn along the $x$-axis, and vertex $C$ located at some point $(x,y)$ in the plane, as shown below. Generally, triangles exist anywhere in the plane, but for this explanation we will place the triangle as noted.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An oblique triangle ABC placed in the coordinate plane: vertex A at the origin, vertex B at (c,0) on the x-axis, and vertex C at (b cos theta, b sin theta) in the first quadrant, with angle theta at A. A dashed perpendicular drops from C to the x-axis; the segment from B to that foot has length x minus c, and the dashed vertical from the foot up to C has length y.","xMin":-0.4,"xMax":5.6,"yMin":-1.2,"yMax":4.1,"grid":false,"tickLabels":false,"unit":85,"points":[{"at":[0,0],"label":"A (0, 0)","labelSide":"sw"},{"at":[3,0],"label":"B"},{"at":[4.9149,3.4415],"label":"C (b cos θ, b sin θ)","labelSide":"ne"}],"segments":[{"from":[0,0],"to":[4.9149,3.4415],"label":"b"},{"from":[3,0],"to":[4.9149,3.4415],"label":"a"},{"from":[4.9149,3.4415],"to":[4.9149,0],"dashed":true,"label":"y"},{"from":[3,0],"to":[4.9149,0],"dashed":true,"label":"x − c"},{"from":[0,0],"to":[3,0],"label":"c"}],"circles":[{"at":[0,0],"r":0.6,"from":0,"to":35}],"texts":[{"at":[0.75,0.28],"text":"θ"},{"at":[2.46,-0.6],"text":"x","anchor":"middle"}]}
{{< /apfigure >}}

We can drop a perpendicular from $C$ to the $x$-axis (this is the altitude or height). Recalling the basic trigonometric identities, we know that

$$\cos\theta=\tfrac{x\ (\text{adjacent})}{b\ (\text{hypotenuse})}\ \text{and}\ \sin\theta=\tfrac{y\ (\text{opposite})}{b\ (\text{hypotenuse})}$$

In terms of $\theta$, $x=b\cos\theta$ and $y=b\sin\theta$. The $(x,y)$ point located at $C$ has coordinates $(b\cos\theta,b\sin\theta)$. Using the side $(x-c)$ as one leg of a right triangle and $y$ as the second leg, we can find the length of hypotenuse $a$ using the Pythagorean Theorem. Thus,

$$
\begin{array}{lrcl}
& a^2 &=& (x-c)^2+y^2 \\[4pt]
& &=& (b\cos\theta-c)^2+(b\sin\theta)^2 \\[4pt]
\text{Substitute }(b\cos\theta)\text{ for }x\text{ and }(b\sin\theta)\text{ for }y. & &=& (b^2\cos^2\theta-2bc\cos\theta+c^2)+b^2\sin^2\theta \\[4pt]
\text{Expand the perfect square.} & &=& b^2\cos^2\theta+b^2\sin^2\theta+c^2-2bc\cos\theta \\[4pt]
\text{Group terms noting that }\cos^2\theta+\sin^2\theta=1. & &=& b^2(\cos^2\theta+\sin^2\theta)+c^2-2bc\cos\theta \\[4pt]
\text{Factor out }b^2. & a^2 &=& b^2+c^2-2bc\cos\theta
\end{array}
$$

The formula derived is one of the three equations of the Law of Cosines. The other equations are found in a similar fashion.

Keep in mind that it is always helpful to sketch the triangle when solving for angles or sides. In a real-world scenario, try to draw a diagram of the situation. As more information emerges, the diagram may have to be altered. Make those alterations to the diagram and, in the end, the problem will be easier to solve.

{{< callout type="info" >}}
  **Law of Cosines.**

  The Law of Cosines states that the square of any side of a triangle is equal to the sum of the squares of the other two sides minus twice the product of the other two sides and the cosine of the included angle. For triangles labeled as below, with angles $\alpha$, $\beta$, and $\gamma$, and opposite corresponding sides $a$, $b$, and $c$, respectively, the Law of Cosines is given as three equations.

  $$
  \begin{array}{l}
  a^2=b^2+c^2-2bc\cos\alpha \\
  b^2=a^2+c^2-2ac\cos\beta \\
  c^2=a^2+b^2-2ab\cos\gamma
  \end{array}
  $$

  {{< apfigure kind="figure" >}}
  {"ariaLabel":"An oblique triangle with standard labels: angles alpha, beta, gamma with opposite sides a, b, c.","unit":40,"polygons":[{"points":[[0,0],[3,4],[8,0]],"edgeLabels":["c","a","b"],"vertexLabels":["α","β","γ"]}]}
  {{< /apfigure >}}

  To solve for a missing side measurement, the corresponding opposite angle measure is needed.

  When solving for an angle, the corresponding opposite side measure is needed. We can use another version of the Law of Cosines to solve for an angle.

  $$
  \begin{array}{l}
  \cos\alpha=\tfrac{b^2+c^2-a^2}{2bc} \\
  \cos\beta=\tfrac{a^2+c^2-b^2}{2ac} \\
  \cos\gamma=\tfrac{a^2+b^2-c^2}{2ab}
  \end{array}
  $$
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given two sides and the angle between them (SAS), find the measures of the remaining side and angles of a triangle.

  1. Sketch the triangle. Identify the measures of the known sides and angles. Use variables to represent the measures of the unknown sides and angles.
  2. Apply the Law of Cosines to find the length of the unknown side or angle.
  3. Apply the Law of Sines or Cosines to find the measure of a second angle.
  4. Compute the measure of the remaining angle.
{{< /callout >}}

**Example.** Find the unknown side and angles of the triangle below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An oblique triangle with angle alpha at the bottom-left vertex, a 30-degree angle at the bottom-right vertex, and angle gamma at the top vertex; the base from alpha to the 30-degree vertex is labeled c = 12, and the side from the 30-degree vertex up to gamma is labeled a = 10.","unit":28,"polygons":[{"points":[[0,0],[12,0],[3.3397,5]],"edgeLabels":["c = 12","a = 10",null],"vertexLabels":["α","30°","γ"]}]}
{{< /apfigure >}}

**Solution.** First, make note of what is given: two sides and the angle between them. This arrangement is classified as SAS and supplies the data needed to apply the Law of Cosines.

Each one of the three laws of cosines begins with the square of an unknown side opposite a known angle. For this example, the first side to solve for is side $b$, as we know the measurement of the opposite angle $\beta$.

$$
\begin{array}{lrcl}
& b^2 &=& a^2+c^2-2ac\cos\beta \\[4pt]
\text{Substitute the measurements for the known quantities.} & b^2 &=& 10^2+12^2-2(10)(12)\cos(30^\circ) \\[4pt]
\text{Evaluate the cosine and begin to simplify.} & b^2 &=& 100+144-240\left(\tfrac{\sqrt3}{2}\right) \\[4pt]
& b^2 &=& 244-120\sqrt3 \\[4pt]
\text{Use the square root property.} & b &=& \sqrt{244-120\sqrt3} \\[4pt]
& b &\approx& 6.013
\end{array}
$$

Because we are solving for a length, we use only the positive square root. Now that we know the length $b$, we can use the Law of Sines to fill in the remaining angles of the triangle. Solving for angle $\alpha$, we have

$$
\begin{array}{lrcl}
& \tfrac{\sin\alpha}{a} &=& \tfrac{\sin\beta}{b} \\[4pt]
& \tfrac{\sin\alpha}{10} &=& \tfrac{\sin(30^\circ)}{6.013} \\[4pt]
\text{Multiply both sides of the equation by 10.} & \sin\alpha &=& \tfrac{10\sin(30^\circ)}{6.013} \\[4pt]
\text{Find the inverse sine of }\tfrac{10\sin(30^\circ)}{6.013}. & \alpha &=& \sin^{-1}\left(\tfrac{10\sin(30^\circ)}{6.013}\right) \\[4pt]
& \alpha &\approx& 56.3^\circ
\end{array}
$$

The other possibility for $\alpha$ would be $\alpha=180^\circ-56.3^\circ\approx123.7^\circ$. In the original diagram, $\alpha$ is adjacent to the longest side, so $\alpha$ is an acute angle and, therefore, $123.7^\circ$ does not make sense. Notice that if we choose to apply the Law of Cosines, we arrive at a unique answer. We do not have to consider the other possibilities, as cosine is unique for angles between $0^\circ$ and $180^\circ$. Proceeding with $\alpha\approx56.3^\circ$, we can then find the third angle of the triangle.

$$\gamma=180^\circ-30^\circ-56.3^\circ\approx93.7^\circ$$

The complete set of angles and sides is

$$
\begin{array}{lrcl}
& \alpha\approx56.3^\circ & a=10 \\[4pt]
& \beta=30^\circ & b\approx6.013 \\[4pt]
& \gamma\approx93.7^\circ & c=12
\end{array}
$$

{{< fillin
  question="Find the missing side $a$ of the triangle with $\alpha=30^\circ$, $b=12$, and $c=24$. Round to the nearest tenth."
  answer="14.9"
  answerForm="decimal"
  answerDisplay="$a\approx14.9$"
  hint="Since $\alpha$ is between sides $b$ and $c$, apply $a^2=b^2+c^2-2bc\cos\alpha$ directly."
>}}

**Example.** Find the angle $\alpha$ for the given triangle if side $a=20$, side $b=25$, and side $c=18$.

**Solution.** For this example, we have no angles. We can solve for any angle using the Law of Cosines. To solve for angle $\alpha$, we have

$$
\begin{array}{lrcl}
& a^2 &=& b^2+c^2-2bc\cos\alpha \\[4pt]
\text{Substitute the appropriate measurements.} & 20^2 &=& 25^2+18^2-2(25)(18)\cos\alpha \\[4pt]
\text{Simplify in each step.} & 400 &=& 625+324-900\cos\alpha \\[4pt]
& 400 &=& 949-900\cos\alpha \\[4pt]
\text{Isolate }\cos\alpha. & -549 &=& -900\cos\alpha \\[4pt]
& \tfrac{-549}{-900} &=& \cos\alpha \\[4pt]
& 0.61 &\approx& \cos\alpha \\[4pt]
\text{Find the inverse cosine.} & \cos^{-1}(0.61) &\approx& \alpha \\[4pt]
& \alpha &\approx& 52.4^\circ
\end{array}
$$

See the figure below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An oblique triangle with a 52.4-degree angle at the left vertex, computed as angle alpha; the top-right vertex and bottom-right vertex are unlabeled. The left-to-bottom-right side is c = 18, the bottom-right-to-top-right side is a = 20, and the left-to-top-right side is b = 25.","unit":22,"polygons":[{"points":[[0,0],[18,0],[15.25,19.81]],"edgeLabels":["c = 18","a = 20","b = 25"],"vertexLabels":["α ≈ 52.4°",null,null]}]}
{{< /apfigure >}}

**Analysis.** Because the inverse cosine can return any angle between $0$ and $180$ degrees, there will not be any ambiguous cases using this method.

{{< fillin
  question="Given $a=5$, $b=7$, and $c=10$, find the missing angles $\alpha$, $\beta$, and $\gamma$, in that order, each rounded to the nearest tenth of a degree."
  answer="27.7^\circ,40.5^\circ,111.8^\circ"
  answerForm="degrees"
  answerDisplay="$\alpha\approx27.7^\circ$, $\beta\approx40.5^\circ$, $\gamma\approx111.8^\circ$"
  hint="Each angle has its own direct Law of Cosines formula in terms of $a$, $b$, and $c$ — for example, $\cos\alpha=\tfrac{b^2+c^2-a^2}{2bc}$ — so solve each independently."
>}}

### Solving Applied Problems Using the Law of Cosines

Just as the Law of Sines provided the appropriate equations to solve a number of applications, the Law of Cosines is applicable to situations in which the given data fits the cosine models. We may see these in the fields of navigation, surveying, astronomy, and geometry, just to name a few.

**Example.** On many cell phones with GPS, an approximate location can be given before the GPS signal is received. This is accomplished through a process called triangulation, which works by using the distances from two known points. Suppose there are two cell phone towers within range of a cell phone. The two towers are located $6{,}000$ feet apart along a straight highway, running east to west, and the cell phone is north of the highway. Based on the signal delay, it can be determined that the signal is $5{,}050$ feet from the first tower and $2{,}420$ feet from the second tower. Determine the position of the cell phone north and east of the first tower, and determine how far it is from the highway.

**Solution.** For simplicity, we start by drawing a diagram similar to the figure below and labeling our given information.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A triangle formed by two cell towers 6,000 feet apart along a straight highway and a cell phone north of the highway: the angle theta at the left tower, the side from the left tower to the phone is 5,050 feet, and the side from the right tower to the phone is 2,420 feet.","unit":0.115,"polygons":[{"points":[[0,0],[6000,0],[4638.15,1997.5]],"edgeLabels":["6,000 ft","2,420 ft","5,050 ft"],"vertexLabels":["θ",null,null]}]}
{{< /apfigure >}}

Using the Law of Cosines, we can solve for the angle $\theta$. Remember that the Law of Cosines uses the square of one side to find the cosine of the opposite angle. For this example, let $a=2{,}420$, $b=5{,}050$, and $c=6{,}000$. Thus, $\theta$ corresponds to the opposite side $a=2{,}420$.

$$
\begin{array}{lrcl}
& a^2 &=& b^2+c^2-2bc\cos\theta \\[4pt]
& (2{,}420)^2 &=& (5{,}050)^2+(6{,}000)^2-2(5{,}050)(6{,}000)\cos\theta \\[4pt]
& (2{,}420)^2-(5{,}050)^2-(6{,}000)^2 &=& -2(5{,}050)(6{,}000)\cos\theta \\[4pt]
& \tfrac{(2{,}420)^2-(5{,}050)^2-(6{,}000)^2}{-2(5{,}050)(6{,}000)} &=& \cos\theta \\[4pt]
& \cos\theta &\approx& 0.9183 \\[4pt]
& \theta &\approx& \cos^{-1}(0.9183) \\[4pt]
& \theta &\approx& 23.3^\circ
\end{array}
$$

To answer the questions about the phone's position north and east of the tower, and the distance to the highway, drop a perpendicular from the position of the cell phone, as in the figure below. This forms two right triangles, although we only need the right triangle that includes the first tower for this problem.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle formed by dropping a perpendicular from the cell phone to the highway: the left tower is the left vertex with a 23.3-degree angle, the foot of the perpendicular is the right-angle vertex, the horizontal leg along the highway is x, the vertical leg up to the phone is y, and the hypotenuse from the tower to the phone is 5,050 feet.","unit":0.115,"polygons":[{"points":[[0,0],[4638.15,0],[4638.15,1997.5]],"edgeLabels":["x","y","5,050 ft"],"vertexLabels":["23.3°",null,null],"rightAngles":[1]}]}
{{< /apfigure >}}

Using the angle $\theta=23.3^\circ$ and the basic trigonometric identities, we can find the solutions. Thus

$$
\begin{array}{lrcl}
& \cos(23.3^\circ) &=& \tfrac{x}{5{,}050} \\[4pt]
& x &=& 5{,}050\cos(23.3^\circ) \\[4pt]
& x &\approx& 4{,}638.15\ \text{feet} \\[4pt]
& \sin(23.3^\circ) &=& \tfrac{y}{5{,}050} \\[4pt]
& y &=& 5{,}050\sin(23.3^\circ) \\[4pt]
& y &\approx& 1{,}997.5\ \text{feet}
\end{array}
$$

The cell phone is approximately $4{,}638$ feet east and $1998$ feet north of the first tower, and $1998$ feet from the highway.

**Example.** Returning to our problem at the beginning of this section, suppose a boat leaves port, travels $10$ miles, turns $20$ degrees, and travels another $8$ miles. How far from port is the boat? The diagram is repeated below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A triangle whose vertices are the port, the point where the boat turned, and the boat: the port-to-turn leg is 10 mi, the turn-to-boat leg is 8 mi, the port-to-turn leg is extended past the turn point as a dashed ray, and the angle between that dashed ray and the 8-mi leg is 20 degrees.","unit":26,"polygons":[{"points":[[0,0],[0,10],[-2.7362,17.5175]],"edgeLabels":["10 mi","8 mi",null],"vertexLabels":["Port",null,null]}],"segments":[{"from":[0,10],"to":[0,13],"dashed":true}],"texts":[{"at":[-0.78,14.29],"text":"20°","anchor":"middle"}]}
{{< /apfigure >}}

**Solution.** The boat turned $20$ degrees, so the obtuse angle of the non-right triangle is the supplemental angle, $180^\circ-20^\circ=160^\circ$. With this, we can utilize the Law of Cosines to find the missing side of the obtuse triangle — the distance of the boat to the port.

$$
\begin{array}{lrcl}
& x^2 &=& 8^2+10^2-2(8)(10)\cos(160^\circ) \\[4pt]
& x^2 &\approx& 314.35 \\[4pt]
& x &=& \sqrt{314.35} \\[4pt]
& x &\approx& 17.7\ \text{miles}
\end{array}
$$

The boat is about $17.7$ miles from port.

### Using Heron's Formula to Find the Area of a Triangle

We already learned how to find the area of an oblique triangle when we know two sides and an angle. We also know the formula to find the area of a triangle using the base and the height. When we know the three sides, however, we can use **Heron's formula** instead of finding the height. Heron of Alexandria was a geometer who lived during the first century A.D. He discovered a formula for finding the area of oblique triangles when three sides are known.

{{< callout type="info" >}}
  **Heron's Formula.**

  Heron's formula finds the area of oblique triangles in which sides $a$, $b$, and $c$ are known.

  $$\text{Area}=\sqrt{s(s-a)(s-b)(s-c)}$$

  where $s=\tfrac{a+b+c}{2}$ is one half of the perimeter of the triangle, sometimes called the semi-perimeter.
{{< /callout >}}

**Example.** Find the area of the triangle below using Heron's formula.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A triangle with vertices A, B, and C: the side from A to B is c = 7, the side from B to C is a = 10, and the base from C to A is b = 15.","unit":28,"polygons":[{"points":[[0,0],[5.8,3.9192],[15,0]],"edgeLabels":["c = 7","a = 10","b = 15"],"vertexLabels":["A","B","C"]}]}
{{< /apfigure >}}

**Solution.** First, we calculate $s$.

$$
\begin{array}{lrcl}
& s &=& \tfrac{a+b+c}{2} \\[4pt]
& s &=& \tfrac{10+15+7}{2}=16
\end{array}
$$

Then we apply the formula.

$$
\begin{array}{lrcl}
& \text{Area} &=& \sqrt{s(s-a)(s-b)(s-c)} \\[4pt]
& \text{Area} &=& \sqrt{16(16-10)(16-15)(16-7)} \\[4pt]
& \text{Area} &\approx& 29.4
\end{array}
$$

The area is approximately $29.4$ square units.

{{< fillin
  question="Use Heron's formula to find the area of a triangle with sides of lengths $a=29.7\ \text{ft}$, $b=42.3\ \text{ft}$, and $c=38.4\ \text{ft}$. Round to the nearest whole square foot."
  answer="552"
  answerForm="decimal"
  answerDisplay="$552$ square feet"
  hint="Find the semi-perimeter $s=\tfrac{a+b+c}{2}$ first, then substitute into $\text{Area}=\sqrt{s(s-a)(s-b)(s-c)}$."
>}}

**Example.** A Chicago city developer wants to construct a building consisting of artist's lofts on a triangular lot bordered by Rush Street, Wabash Avenue, and Pearson Street. The frontage along Rush Street is approximately $62.4$ meters, along Wabash Avenue it is approximately $43.5$ meters, and along Pearson Street it is approximately $34.1$ meters. How many square meters are available to the developer? See the figure below for a view of the city property.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A triangular building lot bordered by three streets: the base along Rush Street is 62.4 meters, the upper-left side along North Wabash Avenue is 43.5 meters, and the lower-right side along East Pearson Street is 34.1 meters.","unit":9,"polygons":[{"points":[[0,0],[62.4,0],[37.0449,22.8019]],"edgeLabels":["Rush St. (62.4 m)","E. Pearson St. (34.1 m)","N. Wabash Ave (43.5 m)"],"vertexLabels":[null,null,null]}]}
{{< /apfigure >}}

**Solution.** Find the measurement for $s$, which is one-half of the perimeter.

$$
\begin{array}{lrcl}
& s &=& \tfrac{62.4+43.5+34.1}{2} \\[4pt]
& s &=& 70\ \text{m}
\end{array}
$$

Apply Heron's formula.

$$
\begin{array}{lrcl}
& \text{Area} &=& \sqrt{70(70-62.4)(70-43.5)(70-34.1)} \\[4pt]
& \text{Area} &=& \sqrt{506{,}118.2} \\[4pt]
& \text{Area} &\approx& 711.4
\end{array}
$$

The developer has about $711.4$ square meters.

{{< fillin
  question="Find the area of a triangle given $a=4.38\ \text{ft}$, $b=3.79\ \text{ft}$, and $c=5.22\ \text{ft}$. Round to the nearest hundredth."
  answer="8.15"
  answerForm="decimal"
  answerDisplay="$8.15$ square feet"
  hint="Find the semi-perimeter $s=\tfrac{a+b+c}{2}$ first, then substitute into $\text{Area}=\sqrt{s(s-a)(s-b)(s-c)}$."
>}}

## Key equations

| Law of Cosines | $\begin{array}{l} a^2=b^2+c^2-2bc\cos\alpha \\ b^2=a^2+c^2-2ac\cos\beta \\ c^2=a^2+b^2-2ab\cos\gamma \end{array}$ |
| :--- | :--- |
| Heron's formula | $\begin{array}{l} \text{Area}=\sqrt{s(s-a)(s-b)(s-c)} \\ \text{where}\ s=\tfrac{a+b+c}{2} \end{array}$ |

## Key concepts

- The Law of Cosines defines the relationship among angle measurements and lengths of sides in oblique triangles.
- The Generalized Pythagorean Theorem is the Law of Cosines for two cases of oblique triangles: SAS and SSS. Dropping an imaginary perpendicular splits the oblique triangle into two right triangles or forms one right triangle, which allows sides to be related and measurements to be calculated.
- The Law of Cosines is useful for many types of applied problems. The first step in solving such problems is generally to draw a sketch of the problem presented. If the information given fits one of the three models (the three equations), then apply the Law of Cosines to find a solution.
- Heron's formula allows the calculation of area in oblique triangles. All three sides must be known to apply Heron's formula.

## Key terms

**Law of Cosines** — states that the square of any side of a triangle is equal to the sum of the squares of the other two sides minus twice the product of the other two sides and the cosine of the included angle. **Generalized Pythagorean Theorem** — an extension of the Law of Cosines; relates the sides of an oblique triangle and is used for SAS and SSS triangles.

## Practice

### Use the Law of Cosines to solve oblique triangles

{{< fillin
  question="If possible, solve the triangle for the unknown side $c$: $\gamma=115^\circ$, $a=18$, $b=23$. Round to the nearest tenth."
  answer="34.7"
  answerForm="decimal"
  answerDisplay="$c\approx34.7$"
  hint="$\gamma$ is the angle between the two given sides $a$ and $b$, so apply $c^2=a^2+b^2-2ab\cos\gamma$ directly."
>}}

{{< fillin
  question="Use the Law of Cosines to solve for the missing angle of the oblique triangle with $a=14$, $b=13$, $c=20$: find angle $C$. Round to the nearest tenth of a degree."
  answer="95.5^\circ"
  answerForm="degrees"
  answerDisplay="$C\approx95.5^\circ$"
  hint="Use $\cos C=\tfrac{a^2+b^2-c^2}{2ab}$."
>}}

{{< fillin
  question="If possible, solve the triangle for the unknown side $a$: $\gamma=113^\circ$, $b=10$, $c=32$. Round to the nearest tenth."
  answer="26.7"
  answerForm="decimal"
  answerDisplay="$a\approx26.7$"
  hint="$\gamma$ is between sides $a$ and $b$, so the Law of Cosines $c^2=a^2+b^2-2ab\cos\gamma$ gives a quadratic in $a$ — solve it and keep the positive root."
>}}

{{< multiplechoice
  question="If possible, solve the triangle for the unknown side $c$: $\beta=50^\circ$, $a=105$, $b=45$."
  answer="not possible"
  hint="With $\beta$ opposite the given side $b$, the Law of Cosines $b^2=a^2+c^2-2ac\cos\beta$ is a quadratic in $c$; check whether its discriminant is negative."
>}}
two triangles
not possible
exactly one triangle
{{< /multiplechoice >}}

### Solve applied problems using the Law of Cosines

{{< fillin
  question="A satellite calculates the distances and angle shown: two cities are $370$ km and $350$ km from the satellite, with an angle of $2.1^\circ$ between those two sightlines. Find the distance between the two cities. Round to the nearest tenth."
  answer="24.0"
  answerForm="decimal"
  answerDisplay="$24.0$ km"
  hint="The satellite's $2.1^\circ$ angle is between the two given distances, so apply the Law of Cosines directly."
>}}

{{< fillin
  question="A pilot flies in a straight path for $1$ hour $30$ minutes. She then makes a course correction, heading $10^\circ$ to the right of her original course, and flies $2$ hours in the new direction. If she maintains a constant speed of $680$ miles per hour, how far is she from her starting position? Round to the nearest mile."
  answer="2371"
  answerForm="decimal"
  answerDisplay="$2{,}371$ mi"
  hint="Convert each leg's time to a distance; the $10^\circ$ course correction leaves an interior angle of $180^\circ-10^\circ$ at the turn point for the Law of Cosines."
>}}

{{< fillin
  question="Two boats depart at the same time from the same dock. The first boat travels at $18$ miles per hour at a heading of $327^\circ$, and the second boat travels at $4$ miles per hour at a heading of $60^\circ$. Find the distance between the two boats after $2$ hours. Round to the nearest tenth of a mile."
  answer="37.3"
  answerForm="decimal"
  answerDisplay="$37.3$ mi"
  hint="Convert each boat's travel time to a distance, find the angle between the two headings, then apply the Law of Cosines."
>}}

### Use Heron's formula to find the area of a triangle

{{< fillin
  question="Find the area of a triangle with sides of length $18$ in, $21$ in, and $32$ in. Round to the nearest hundredth."
  answer="177.56"
  answerForm="decimal"
  answerDisplay="$177.56\ \text{in}^2$"
  hint="Find the semi-perimeter $s=\tfrac{a+b+c}{2}$ first, then substitute into Heron's formula."
>}}

{{< fillin
  question="Find the area of a triangle with $a=1.6\ \text{yd}$, $b=2.6\ \text{yd}$, and $c=4.1\ \text{yd}$. Round to the nearest hundredth."
  answer="0.91"
  answerForm="decimal"
  answerDisplay="$0.91\ \text{yd}^2$"
  hint="Find the semi-perimeter $s=\tfrac{a+b+c}{2}$ first, then substitute into Heron's formula."
>}}

{{< fillin
  question="Find the area of a triangle with $a=\tfrac12\ \text{m}$, $b=\tfrac13\ \text{m}$, and $c=\tfrac14\ \text{m}$. Round to the nearest hundredth."
  answer="0.04"
  answerForm="decimal"
  answerDisplay="$0.04\ \text{m}^2$"
  hint="Find a common denominator to compute the semi-perimeter $s=\tfrac{a+b+c}{2}$, then substitute into Heron's formula."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 8.2: Non-right Triangles: Law of Cosines](https://openstax.org/books/precalculus-2e/pages/8-2-non-right-triangles-law-of-cosines) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated all instructional figures as accessible spec-first SVGs built from exact Law-of-Cosines/coordinate computations (never traced) — the opening boat triangle (repeated verbatim at Example 4, matching the source's own repetition); the coordinate-plane derivation triangle $ABC$ with its dashed altitude and $x-c$/$y$ legs; the standard $\alpha,\beta,\gamma$/$a,b,c$ labeling triangle; the two worked-example triangles (SAS and SSS); the cell-tower triangle and its right-triangle decomposition; the Heron's-formula example triangle labeled $A,B,C$; and the Chicago building-lot triangle, whose decorative angled-street-grid background (no primitive in this engine's figure spec draws city blocks) was simplified to a plain labeled triangle carrying the same three street names and frontages, since that information — not the map art — is what the problem uses. Omitted the decorative boat-hull, cell-tower, and antenna photo overlays, which carry no mathematics, and the "Access these online resources" media links. Every retained Try It became a real `fillin` component. Where a Try It's printed solution mixes units the grader cannot compose in one `answerForm` (a decimal side alongside two degree-valued angles), a single quantity was asked instead of the full solved triangle, following the same adaptation used in Section 8.1: the first Try It (originally $a\approx14.9$, $\beta\approx23.8^\circ$, $\gamma\approx126.2^\circ$) asks only for side $a$, because computing $\beta$ from a *rounded* $a=14.9$ grades $23.9^\circ$ — one tenth off the source's own $23.8^\circ$, which only the full-precision chain reproduces — so publishing $\beta$ as a second fillin here would have required pinning a rounded intermediate that does not actually match the printed key. The second Try It's three angles compose cleanly into one `answerForm="degrees"` list because each is solved directly from the original $a$, $b$, $c$ with its own Law of Cosines formula, with no chained rounding step between them. Every degree-valued answer is keyed with `answerForm="degrees"` alone (never composed with `decimal`, which self-rejects a trailing $^\circ$); every Heron's-formula area is a `decimal` fillin. The Practice item drawn from the "solve for the unknown side" exercise set with $\beta=50^\circ$, $a=105$, $b=45$ — whose Law of Cosines equation has no real solution for $c$ — is authored as a `multiplechoice` on the triangle count, since "not possible" is a categorical judgment, not a number. Adapted ten selected end-of-section exercises — four Algebraic (three Law of Cosines solves for a side or angle, one no-triangle recognition), three Real-World word problems, and three Heron's-formula area computations — into a closing Practice block, one group per objective, every answer independently re-derived by running the Law of Cosines and Heron's-formula arithmetic in Node rather than read off the source key. The area exercise with sides $18$ in, $21$ in, and $32$ in restates its own rounding instruction as "round to the nearest hundredth": the source's individual exercise text says "Round to the nearest tenth," contradicting both the surrounding exercise group's stated "Round to the nearest hundredth" and the source's own printed answer key of $177.56\ \text{in}^2$, which is precise to hundredths — logged as errata.</small>
