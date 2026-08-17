---
title: Angles
description: >-
  Drawing angles in standard position, converting between degrees and
  radians, finding coterminal and reference angles, and using the arc-length
  and sector-area formulas together with linear and angular speed to
  describe motion on a circular path — adapted from OpenStax Precalculus 2e,
  Section 5.1.
source_section: "5.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Draw angles in standard position
- Convert between degrees and radians
- Find coterminal angles
- Find the length of a circular arc
- Use linear and angular speed to describe motion on a circular path
{{< /callout >}}

A golfer swings to hit a ball over a sand trap and onto the green. An
airline pilot maneuvers a plane toward a narrow runway. A dress designer
creates the latest fashion. What do they all have in common? They all work
with angles, and so do all of us at one time or another. Sometimes we need
to measure angles exactly with instruments. Other times we estimate them or
judge them by eye. Either way, the proper angle can make the difference
between success and failure in many undertakings. In this section, we will
examine properties of angles.

## Drawing Angles in Standard Position

Properly defining an angle first requires that we define a ray. A **ray**
consists of one point on a line and all points extending in one direction
from that point. The first point is called the **endpoint** of the ray. We
can refer to a specific ray by stating its endpoint and any other point on
it. The ray below can be named as ray EF, or in symbol form $\overrightarrow{EF}$.

{{< apfigure kind="figure" >}}
{"ariaLabel":"Ray EF: a ray from endpoint E through point F, extending indefinitely in that direction.","unit":55,"segments":[{"from":[0,0],"to":[3.2,2.2],"arrow":true}],"points":[{"at":[0,0],"label":"E"},{"at":[2.1,1.44],"label":"F"}]}
{{< /apfigure >}}

An **angle** is the union of two rays having a common endpoint. The
endpoint is called the **vertex** of the angle, and the two rays are the
sides of the angle. The angle below is formed from $\overrightarrow{ED}$ and
$\overrightarrow{EF}$. Angles can be named using a point on each ray and the
vertex, such as angle *DEF*, or in symbol form $\angle DEF$.

{{< apfigure kind="figure" >}}
{"ariaLabel":"Angle DEF: two rays from vertex E, one through point D and one through point F.","unit":50,"segments":[{"from":[0,0],"to":[0.9,4.9],"arrow":true},{"from":[0,0],"to":[5.3,0.9],"arrow":true}],"points":[{"at":[0,0],"label":"E"},{"at":[0.63,3.43],"label":"D"},{"at":[4.3,0.73],"label":"F"}]}
{{< /apfigure >}}

Greek letters are often used as variables for the measure of an angle. The
table below is a list of Greek letters commonly used to represent angles,
alongside a sample angle $\angle\theta$.

| $\theta$ | $\varphi$ or $\phi$ | $\alpha$ | $\beta$ | $\gamma$ |
| :--- | :--- | :--- | :--- | :--- |
| theta | phi | alpha | beta | gamma |

{{< apfigure kind="figure" >}}
{"ariaLabel":"An angle theta formed by two rays from a common vertex.","unit":45,"segments":[{"from":[0,0],"to":[3.4,0],"arrow":true},{"from":[0,0],"to":[1.929,2.298],"arrow":true}],"texts":[{"at":[0.75,0.4],"text":"θ"}]}
{{< /apfigure >}}

Angle creation is a dynamic process. We start with two rays lying on top of
one another. We leave one fixed in place, and rotate the other. The fixed
ray is the **initial side**, and the rotated ray is the **terminal side**.
In order to identify the different sides, we indicate the rotation with a
small arc and arrow close to the vertex, as below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An angle with its vertex, initial side, and terminal side labeled.","unit":45,"segments":[{"from":[0,0],"to":[3.4,0],"arrow":true},{"from":[0,0],"to":[1.6,3.6],"arrow":true}],"texts":[{"at":[0.5,-0.5],"text":"Vertex"},{"at":[1.9,-0.35],"text":"Initial side"},{"at":[-0.75,3.0],"text":"Terminal side"}]}
{{< /apfigure >}}

As we discussed at the beginning of the section, there are many
applications for angles, but in order to use them correctly, we must be
able to measure them. The **measure of an angle** is the amount of rotation
from the initial side to the terminal side. Probably the most familiar unit
of angle measurement is the degree. One **degree** is $\tfrac{1}{360}$ of a
circular rotation, so a complete circular rotation contains 360 degrees. An
angle measured in degrees should always include the unit "degrees" after
the number, or include the degree symbol °. For example, 90 degrees = 90°.

To formalize our work, we will begin by drawing angles on an $x$-$y$
coordinate plane. Angles can occur in any position on the coordinate plane,
but for the purpose of comparison, the convention is to illustrate them in
the same position whenever possible. An angle is in **standard position**
if its vertex is located at the origin, and its initial side extends along
the positive $x$-axis. See below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An angle in standard position: the vertex is at the origin, the initial side lies along the positive x-axis, and the terminal side extends into the second quadrant. A dashed arc marks the counterclockwise rotation from the initial side to the terminal side.","xMin":-3.2,"xMax":3.2,"yMin":-1,"yMax":2.2,"grid":false,"tickLabels":false,"unit":45,"segments":[{"from":[0,0],"to":[3,0],"arrows":"end"},{"from":[0,0],"to":[-2.078,1.2],"arrows":"end"}],"circles":[{"at":[0,0],"r":1.1,"from":0,"to":150,"dashed":true}],"texts":[{"at":[-2.6,1.55],"text":"Terminal side"},{"at":[1.5,-0.35],"text":"Initial side"}]}
{{< /apfigure >}}

If the angle is measured in a counterclockwise direction from the initial
side to the terminal side, the angle is said to be a **positive angle**. If
the angle is measured in a clockwise direction, the angle is said to be a
**negative angle**.

Drawing an angle in standard position always starts the same way—draw the
initial side along the positive $x$-axis. To place the terminal side of
the angle, we must calculate the fraction of a full rotation the angle
represents. We do that by dividing the angle measure in degrees by 360°.
For example, to draw a 90° angle, we calculate that
$\tfrac{90^\circ}{360^\circ}=\tfrac{1}{4}$. So, the terminal side will be one-fourth
of the way around the circle, moving counterclockwise from the positive
$x$-axis. To draw a 360° angle, we calculate that $\tfrac{360^\circ}{360^\circ}=1$.
So the terminal side will be 1 complete rotation around the circle, moving
counterclockwise from the positive $x$-axis. In this case, the initial side
and the terminal side overlap. See below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (a): drawing a 90 degree angle in standard position. The terminal side points straight up along the positive y-axis; a labeled arc sweeps from the positive x-axis, the initial side, to the terminal side.","xMin":-3,"xMax":3,"yMin":-1,"yMax":3.2,"grid":false,"tickLabels":false,"unit":45,"segments":[{"from":[0,0],"to":[0,2.4],"arrows":"end"}],"circles":[{"at":[0,0],"r":1,"from":0,"to":90}],"texts":[{"at":[0.3,1.05],"text":"90°"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (b): drawing a 360 degree angle in standard position. The terminal side overlaps the initial side along the positive x-axis after one complete counterclockwise rotation, shown as a full circle.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"grid":false,"tickLabels":false,"unit":38,"segments":[{"from":[0,0],"to":[2.4,0],"arrows":"end"}],"circles":[{"at":[0,0],"r":1.6}],"texts":[{"at":[0.55,1.55],"text":"360°"}]}
{{< /apfigure >}}

Since we define an angle in standard position by its initial side, we have
a special type of angle whose terminal side lies on an axis, a
**quadrantal angle**. This type of angle can have a measure of 0°, 90°,
180°, 270° or 360°. See below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Quadrantal angle of 0 degrees: the terminal side lies along the positive x-axis, the same as the initial side.","xMin":-2.2,"xMax":2.2,"yMin":-2.2,"yMax":2.2,"grid":false,"tickLabels":false,"quadrantLabels":true,"unit":45,"segments":[{"from":[0,0],"to":[1.6,0],"arrows":"end"}],"texts":[{"at":[0.7,0.28],"text":"0°"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Quadrantal angle of 90 degrees: the terminal side lies along the positive y-axis.","xMin":-2.2,"xMax":2.2,"yMin":-2.2,"yMax":2.2,"grid":false,"tickLabels":false,"quadrantLabels":true,"unit":45,"segments":[{"from":[0,0],"to":[0,1.6],"arrows":"end"}],"circles":[{"at":[0,0],"r":0.9,"from":0,"to":90}],"texts":[{"at":[0.32,0.75],"text":"90°"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Quadrantal angle of 180 degrees: the terminal side lies along the negative x-axis.","xMin":-2.2,"xMax":2.2,"yMin":-2.2,"yMax":2.2,"grid":false,"tickLabels":false,"quadrantLabels":true,"unit":45,"segments":[{"from":[0,0],"to":[-1.6,0],"arrows":"end"}],"circles":[{"at":[0,0],"r":0.9,"from":0,"to":180}],"texts":[{"at":[-0.75,0.62],"text":"180°"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Quadrantal angle of 270 degrees: the terminal side lies along the negative y-axis, reached by a large counterclockwise sweep.","xMin":-2.2,"xMax":2.2,"yMin":-2.2,"yMax":2.2,"grid":false,"tickLabels":false,"quadrantLabels":true,"unit":45,"segments":[{"from":[0,0],"to":[0,-1.6],"arrows":"end"}],"circles":[{"at":[0,0],"r":0.9,"from":0,"to":270}],"texts":[{"at":[0.62,-0.62],"text":"270°"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Quadrantal angles.** Quadrantal angles are angles in standard position
  whose terminal side lies on an axis, including 0°, 90°, 180°, 270°, or
  360°.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given an angle measure in degrees, draw the angle in standard
  position.

  1. Express the angle measure as a fraction of 360°.
  2. Reduce the fraction to simplest form.
  3. Draw an angle that contains that same fraction of the circle,
     beginning on the positive $x$-axis and moving counterclockwise for
     positive angles and clockwise for negative angles.
{{< /callout >}}

**Example.** Sketch an angle of 30° in standard position, and sketch an
angle of $-135^\circ$ in standard position.

**Solution.**

1. Divide the angle measure by 360°.

   $$\tfrac{30^\circ}{360^\circ}=\tfrac{1}{12}$$

   To rewrite the fraction in a more familiar fraction, we can recognize
   that

   $$\tfrac{1}{12}=\tfrac{1}{3}\left(\tfrac{1}{4}\right)$$

   One-twelfth equals one-third of a quarter, so by dividing a quarter
   rotation into thirds, we can sketch a line at 30° as below.

   {{< apfigure kind="graph" >}}
   {"ariaLabel":"An angle of 30 degrees in standard position, shown by dividing a right-angle quarter turn into thirds; a dashed ray at 60 degrees marks the other division point, so the quarter turn is cut into three equal 30-degree parts.","xMin":-2.5,"xMax":2.5,"yMin":-1,"yMax":2.5,"grid":false,"tickLabels":false,"unit":55,"segments":[{"from":[0,0],"to":[1.732,1],"arrows":"end"},{"from":[0,0],"to":[1,1.732],"dashed":true}],"circles":[{"at":[0,0],"r":0.8,"from":0,"to":30}],"texts":[{"at":[0.338,0.0906],"text":"30°"}]}
   {{< /apfigure >}}

2. Divide the angle measure by 360°.

   $$\tfrac{-135^\circ}{360^\circ}=-\tfrac{3}{8}$$

   In this case, we can recognize that

   $$-\tfrac{3}{8}=-\tfrac{3}{2}\left(\tfrac{1}{4}\right)$$

   Negative three-eighths is one and one-half times a quarter, so we place
   a line by moving clockwise one full quarter and one-half of another
   quarter, as below.

   {{< apfigure kind="graph" >}}
   {"ariaLabel":"An angle of negative 135 degrees in standard position, with the terminal side in the third quadrant and a clockwise arc from the positive x-axis.","xMin":-2.5,"xMax":2.5,"yMin":-2.5,"yMax":1,"grid":false,"tickLabels":false,"unit":55,"segments":[{"from":[0,0],"to":[-1.414,-1.414],"arrows":"end"}],"circles":[{"at":[0,0],"r":0.8,"from":225,"to":360}],"texts":[{"at":[0.078,-0.443],"text":"-135°"}]}
   {{< /apfigure >}}

{{< multiplechoice
  question="In which quadrant does the terminal side of an angle of $240^\circ$ in standard position lie?"
  answer="Quadrant III"
  hint="$240^\circ$ is more than $180^\circ$ but less than $270^\circ$."
>}}
Quadrant I
Quadrant II
Quadrant III
Quadrant IV
{{< /multiplechoice >}}

## Converting Between Degrees and Radians

Dividing a circle into 360 parts is an arbitrary choice, although it
creates the familiar degree measurement. We may choose other ways to
divide a circle. To find another unit, think of the process of drawing a
circle. Imagine that you stop before the circle is completed. The portion
that you drew is referred to as an arc. An **arc** may be a portion of a
full circle, a full circle, or more than a full circle, represented by
more than one full rotation. The length of the arc around an entire circle
is called the **circumference** of that circle.

The circumference of a circle is $C=2\pi r$. If we divide both sides of
this equation by $r$, we create the ratio of the circumference to the
radius, which is always $2\pi$ regardless of the length of the radius. So
the circumference of any circle is $2\pi\approx6.28$ times the length of
the radius. That means that if we took a string as long as the radius and
used it to measure consecutive lengths around the circumference, there
would be room for six full string-lengths and a little more than a
quarter of a seventh, as shown below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A circle with a radius drawn from the center, and six points marked around the rim, each one radius-length farther along the circumference than the last. A seventh, unlabeled gap remains between the sixth point and the start, a little more than a quarter of a full radius-length.","unit":100,"circles":[{"at":[0,0],"r":1.3}],"segments":[{"from":[0,0],"to":[1.126,-0.65]}],"points":[{"at":[1.155,0.596]},{"at":[0.123,1.294]},{"at":[-1.023,0.802]},{"at":[-1.228,-0.427]},{"at":[-0.304,-1.264]},{"at":[0.899,-0.939]}],"texts":[{"at":[1.377,0.711],"text":"1"},{"at":[0.146,1.543],"text":"2"},{"at":[-1.22,0.957],"text":"3"},{"at":[-1.464,-0.509],"text":"4"},{"at":[-0.362,-1.507],"text":"5"},{"at":[1.072,-1.119],"text":"6"},{"at":[1.55,-1.22],"text":"Fractional piece"}]}
{{< /apfigure >}}

This brings us to our new angle measure. One **radian** is the measure of
a central angle of a circle that intercepts an arc equal in length to the
radius of that circle. A central angle is an angle formed at the center of
a circle by two radii. Because the total circumference equals $2\pi$
times the radius, a full circular rotation is $2\pi$ radians. So

$$
\begin{array}{lrcl}
& 2\pi\text{ radians} &=& 360^\circ \\[4pt]
& \pi\text{ radians} &=& \tfrac{360^\circ}{2}=180^\circ \\[4pt]
& 1\text{ radian} &=& \tfrac{180^\circ}{\pi}\approx57.3^\circ
\end{array}
$$

See below. Note that when an angle is described without a specific unit,
it refers to radian measure. For example, an angle measure of 3 indicates
3 radians. In fact, radian measure is dimensionless, since it is the
quotient of a length (circumference) divided by a length (radius) and the
length units cancel out.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A circle of radius r with a radian angle t swept from the positive x-axis. The intercepted arc between the two radii has the same length as the radius r.","xMin":-1.5,"xMax":1.5,"yMin":-0.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":110,"circles":[{"at":[0,0],"r":1}],"segments":[{"from":[0,0],"to":[1,0]},{"from":[0,0],"to":[0.5403,0.8415]}],"texts":[{"at":[0.62,-0.13],"text":"r"},{"at":[0.14,0.55],"text":"r"},{"at":[0.28,0.14],"text":"t"}]}
{{< /apfigure >}}

## Relating Arc Lengths to Radius

An **arc length** $s$ is the length of the curve along the arc. Just as
the full circumference of a circle always has a constant ratio to the
radius, the arc length produced by any given angle also has a constant
relation to the radius, regardless of the length of the radius.

This ratio, called the **radian measure**, is the same regardless of the
radius of the circle—it depends only on the angle. This property allows us
to define a measure of any angle as the ratio of the arc length $s$ to the
radius $r$. See below.

$$
\begin{array}{lrcl}
& s &=& r\theta \\[4pt]
& \theta &=& \tfrac{s}{r}
\end{array}
$$

If $s=r$, then $\theta=\tfrac{r}{r}=\text{1 radian}$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (a): in an angle of 1 radian, the arc length s equals the radius r.","xMin":-1.5,"xMax":1.5,"yMin":-0.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":90,"circles":[{"at":[0,0],"r":1}],"segments":[{"from":[0,0],"to":[1,0]},{"from":[0,0],"to":[0.5403,0.8415]}],"texts":[{"at":[0.62,-0.14],"text":"r"},{"at":[0.62,0.75],"text":"s"},{"at":[0.28,0.16],"text":"1 radian"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (b): an angle of 2 radians has an arc length s = 2r.","xMin":-1.5,"xMax":1.5,"yMin":-0.3,"yMax":1.3,"grid":false,"tickLabels":false,"unit":90,"circles":[{"at":[0,0],"r":1}],"segments":[{"from":[0,0],"to":[1,0]},{"from":[0,0],"to":[-0.4161,0.9093]}],"texts":[{"at":[0.62,-0.14],"text":"r"},{"at":[-0.868,1.034],"text":"s = 2r"},{"at":[0.1,0.42],"text":"2 radians"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (c): a full revolution is 2 pi, or about 6.28 radians. A full circle is shown with a bold radius near 4 radians and three dashed diameters connecting antipodal radian markers.","xMin":-1.6,"xMax":1.6,"yMin":-1.6,"yMax":1.6,"grid":false,"tickLabels":false,"unit":75,"circles":[{"at":[0,0],"r":1}],"segments":[{"from":[-0.54,-0.841],"to":[0.54,0.841],"dashed":true},{"from":[-0.416,0.909],"to":[0.416,-0.909],"dashed":true},{"from":[-0.99,0.141],"to":[0.99,-0.141],"dashed":true},{"from":[0,0],"to":[-0.654,-0.757],"arrows":"end"}],"points":[{"at":[1,0]},{"at":[0.54,0.841]},{"at":[-0.416,0.909]},{"at":[-0.99,0.141]},{"at":[-0.654,-0.757]},{"at":[-0.54,-0.841]},{"at":[0.416,-0.909]},{"at":[0.99,-0.141]}],"texts":[{"at":[1.739,0.466],"text":"0, 2π"},{"at":[0.864,1.346],"text":"1 radian"},{"at":[-0.77,1.682],"text":"2 radians"},{"at":[-1.831,0.261],"text":"3 radians"},{"at":[-1.046,-1.211],"text":"4"},{"at":[-0.999,-1.557],"text":"1 + π radians"},{"at":[0.666,-1.455],"text":"2 + π radians"},{"at":[1.584,-0.226],"text":"3 + π radians"},{"at":[0.75,1.55],"text":"A full revolution"}]}
{{< /apfigure >}}

To elaborate on this idea, consider two circles, one with radius 2 and the
other with radius 3. Recall the circumference of a circle is $C=2\pi r$,
where $r$ is the radius. The smaller circle then has circumference
$2\pi(2)=4\pi$ and the larger has circumference $2\pi(3)=6\pi$. Now we
draw a 45° angle on the two circles, as below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two concentric circles of radius 2 and radius 3, each with a 45-degree central angle from the positive x-axis; the angle contains one-eighth of each circle's circumference, labeled 45 degrees equals pi over 4 radians.","xMin":-3.6,"xMax":3.6,"yMin":-1,"yMax":3.6,"grid":false,"tickLabels":false,"unit":42,"circles":[{"at":[0,0],"r":2},{"at":[0,0],"r":3}],"segments":[{"from":[0,0],"to":[3,0]},{"from":[0,0],"to":[2.121,2.121]}],"texts":[{"at":[2.05,-0.32],"text":"2"},{"at":[3.05,-0.32],"text":"3"},{"at":[0.55,0.28],"text":"45°"},{"at":[1.2,3.3],"text":"45° = π/4 radians"}]}
{{< /apfigure >}}

Notice what happens if we find the ratio of the arc length divided by the
radius of the circle.

$$
\begin{array}{lrcl}
\text{Smaller circle:} & \tfrac{\tfrac{1}{2}\pi}{2} &=& \tfrac{1}{4}\pi \\[4pt]
\text{Larger circle:} & \tfrac{\tfrac{3}{4}\pi}{3} &=& \tfrac{1}{4}\pi
\end{array}
$$

Since both ratios are $\tfrac{1}{4}\pi$, the angle measures of both
circles are the same, even though the arc length and radius differ.

{{< callout type="info" >}}
  **Radians.** One **radian** is the measure of the central angle of a
  circle such that the length of the arc between the initial side and the
  terminal side is equal to the radius of the circle. A full revolution
  (360°) equals $2\pi$ radians. A half revolution (180°) is equivalent to
  $\pi$ radians.

  The **radian measure** of an angle is the ratio of the length of the arc
  subtended by the angle to the radius of the circle. In other words, if
  $s$ is the length of an arc of a circle, and $r$ is the radius of the
  circle, then the central angle containing that arc measures
  $\tfrac{s}{r}$ radians. In a circle of radius 1, the radian measure
  corresponds to the length of the arc.
{{< /callout >}}

{{< callout type="info" >}}
  **Q&A.** *A measure of 1 radian looks to be about 60°. Is that correct?*

  Yes. It is approximately 57.3°. Because $2\pi$ radians equals 360°, $1$
  radian equals $\tfrac{360^\circ}{2\pi}\approx57.3^\circ$.
{{< /callout >}}

## Using Radians

Because radian measure is the ratio of two lengths, it is a unitless
measure. For example, suppose the radius were 2 inches and the distance
along the arc were also 2 inches. When we calculate the radian measure of
the angle, the "inches" cancel, and we have a result without units.
Therefore, it is not necessary to write the label "radians" after a radian
measure, and if we see an angle that is not labeled with "degrees" or the
degree symbol, we can assume that it is a radian measure.

Considering the most basic case, the **unit circle** (a circle with radius
1), we know that 1 rotation equals 360 degrees, 360°. We can also track one
rotation around a circle by finding the circumference, $C=2\pi r$, and for
the unit circle $C=2\pi$. These two different ways to rotate around a
circle give us a way to convert from degrees to radians.

$$
\begin{array}{lrcl}
1\text{ rotation}=360^\circ &=& 2\pi & \text{radians} \\[4pt]
\tfrac{1}{2}\text{ rotation}=180^\circ &=& \pi & \text{radians} \\[4pt]
\tfrac{1}{4}\text{ rotation}=90^\circ &=& \tfrac{\pi}{2} & \text{radians}
\end{array}
$$

## Identifying Special Angles Measured in Radians

In addition to knowing the measurements in degrees and radians of a
quarter revolution, a half revolution, and a full revolution, there are
other frequently encountered angles in one revolution of a circle with
which we should be familiar. It is common to encounter multiples of 30,
45, 60, and 90 degrees. These values are shown below. Memorizing these
angles will be very useful as we study the properties associated with
angles.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A circle with sixteen rays from the origin, spaced at the commonly encountered angles measured in degrees: 0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, and 330.","xMin":-1.5,"xMax":1.5,"yMin":-1.5,"yMax":1.5,"grid":false,"tickLabels":false,"unit":115,"circles":[{"at":[0,0],"r":1}],"segments":[{"from":[0,0],"to":[1,0]},{"from":[0,0],"to":[0.866,0.5]},{"from":[0,0],"to":[0.7071,0.7071]},{"from":[0,0],"to":[0.5,0.866]},{"from":[0,0],"to":[0,1]},{"from":[0,0],"to":[-0.5,0.866]},{"from":[0,0],"to":[-0.7071,0.7071]},{"from":[0,0],"to":[-0.866,0.5]},{"from":[0,0],"to":[-1,0]},{"from":[0,0],"to":[-0.866,-0.5]},{"from":[0,0],"to":[-0.7071,-0.7071]},{"from":[0,0],"to":[-0.5,-0.866]},{"from":[0,0],"to":[0,-1]},{"from":[0,0],"to":[0.5,-0.866]},{"from":[0,0],"to":[0.7071,-0.7071]},{"from":[0,0],"to":[0.866,-0.5]}],"texts":[{"at":[1.22,0],"text":"0°"},{"at":[1.057,0.61],"text":"30°"},{"at":[0.863,0.863],"text":"45°"},{"at":[0.61,1.057],"text":"60°"},{"at":[0,1.22],"text":"90°"},{"at":[-0.61,1.057],"text":"120°"},{"at":[-0.863,0.863],"text":"135°"},{"at":[-1.057,0.61],"text":"150°"},{"at":[-1.22,0],"text":"180°"},{"at":[-1.057,-0.61],"text":"210°"},{"at":[-0.863,-0.863],"text":"225°"},{"at":[-0.61,-1.057],"text":"240°"},{"at":[0,-1.22],"text":"270°"},{"at":[0.61,-1.057],"text":"300°"},{"at":[0.863,-0.863],"text":"315°"},{"at":[1.057,-0.61],"text":"330°"}]}
{{< /apfigure >}}

Now, we can list the corresponding radian values for the common measures of
a circle corresponding to those listed above, which are shown below. Be
sure you can verify each of these measures.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same circle of sixteen rays, now labeled with the equivalent radian measures: 0, pi/6, pi/4, pi/3, pi/2, 2 pi/3, 3 pi/4, 5 pi/6, pi, 7 pi/6, 5 pi/4, 4 pi/3, 3 pi/2, 5 pi/3, 7 pi/4, and 11 pi/6.","xMin":-1.6,"xMax":1.6,"yMin":-1.6,"yMax":1.6,"grid":false,"tickLabels":false,"unit":105,"circles":[{"at":[0,0],"r":1}],"segments":[{"from":[0,0],"to":[1,0]},{"from":[0,0],"to":[0.866,0.5]},{"from":[0,0],"to":[0.7071,0.7071]},{"from":[0,0],"to":[0.5,0.866]},{"from":[0,0],"to":[0,1]},{"from":[0,0],"to":[-0.5,0.866]},{"from":[0,0],"to":[-0.7071,0.7071]},{"from":[0,0],"to":[-0.866,0.5]},{"from":[0,0],"to":[-1,0]},{"from":[0,0],"to":[-0.866,-0.5]},{"from":[0,0],"to":[-0.7071,-0.7071]},{"from":[0,0],"to":[-0.5,-0.866]},{"from":[0,0],"to":[0,-1]},{"from":[0,0],"to":[0.5,-0.866]},{"from":[0,0],"to":[0.7071,-0.7071]},{"from":[0,0],"to":[0.866,-0.5]}],"texts":[{"at":[1.25,0],"text":"0"},{"at":[1.08,0.62],"text":"π/6"},{"at":[0.88,0.88],"text":"π/4"},{"at":[0.62,1.08],"text":"π/3"},{"at":[0,1.25],"text":"π/2"},{"at":[-0.62,1.08],"text":"2π/3"},{"at":[-0.88,0.88],"text":"3π/4"},{"at":[-1.08,0.62],"text":"5π/6"},{"at":[-1.25,0],"text":"π"},{"at":[-1.08,-0.62],"text":"7π/6"},{"at":[-0.88,-0.88],"text":"5π/4"},{"at":[-0.62,-1.08],"text":"4π/3"},{"at":[0,-1.25],"text":"3π/2"},{"at":[0.62,-1.08],"text":"5π/3"},{"at":[0.88,-0.88],"text":"7π/4"},{"at":[1.08,-0.62],"text":"11π/6"}]}
{{< /apfigure >}}

**Example.** Find the radian measure of one-third of a full rotation.

**Solution.** For any circle, the arc length along such a rotation would be
one-third of the circumference. We know that

$$1\text{ rotation}=2\pi r$$

So,

$$
\begin{array}{lrcl}
& s &=& \tfrac{1}{3}(2\pi r) \\[4pt]
& &=& \tfrac{2\pi r}{3}
\end{array}
$$

The radian measure would be the arc length divided by the radius.

$$
\begin{array}{lrcl}
\text{radian measure} & &=& \tfrac{\tfrac{2\pi r}{3}}{r} \\[4pt]
& &=& \tfrac{2\pi r}{3r} \\[4pt]
& &=& \tfrac{2\pi}{3}
\end{array}
$$

{{< fillin
  question="Find the radian measure of three-fourths of a full rotation."
  answer="\frac{3\pi}{2}"
  answerForm="radians"
  answerDisplay="$\tfrac{3\pi}{2}$"
  hint="A full rotation is $2\pi$ radians; multiply by $\tfrac34$."
>}}

## Converting between Radians and Degrees

Because degrees and radians both measure angles, we need to be able to
convert between them. We can easily do so using a proportion.

$$\tfrac{\theta}{180}=\tfrac{\theta^R}{\pi}$$

This proportion shows that the measure of angle $\theta$ in degrees
divided by 180 equals the measure of angle $\theta$ in radians divided by
$\pi$. Or, phrased another way, degrees is to 180 as radians is to $\pi$.

$$\tfrac{\text{Degrees}}{180}=\tfrac{\text{Radians}}{\pi}$$

{{< callout type="info" >}}
  **Converting between radians and degrees.** To convert between degrees
  and radians, use the proportion

  $$\tfrac{\theta}{180}=\tfrac{\theta^R}{\pi}$$
{{< /callout >}}

**Example.** Convert each radian measure to degrees.

1. $\tfrac{\pi}{6}$
2. $3$

**Solution.** Because we are given radians and we want degrees, we should
set up a proportion and solve it.

1. We use the proportion, substituting the given information.

   $$
   \begin{array}{lrcl}
   & \tfrac{\theta}{180} &=& \tfrac{\theta^R}{\pi} \\[4pt]
   & \tfrac{\theta}{180} &=& \tfrac{\tfrac{\pi}{6}}{\pi} \\[4pt]
   & \theta &=& \tfrac{180}{6} \\[4pt]
   & \theta &=& 30^\circ
   \end{array}
   $$

2. We use the proportion, substituting the given information.

   $$
   \begin{array}{lrcl}
   & \tfrac{\theta}{180} &=& \tfrac{\theta^R}{\pi} \\[4pt]
   & \tfrac{\theta}{180} &=& \tfrac{3}{\pi} \\[4pt]
   & \theta &=& \tfrac{3(180)}{\pi} \\[4pt]
   & \theta &\approx& 172^\circ
   \end{array}
   $$

{{< fillin
  question="Convert $-\tfrac{3\pi}{4}$ radians to degrees."
  answer="-135^\circ"
  answerForm="degrees"
  answerDisplay="$-135^\circ$"
  hint="Use the proportion $\tfrac{\theta}{180}=\tfrac{\theta^R}{\pi}$."
>}}

**Example.** Convert 15 degrees to radians.

**Solution.** In this example, we start with degrees and want radians, so
we again set up a proportion and solve it, but we substitute the given
information into a different part of the proportion.

$$
\begin{array}{lrcl}
& \tfrac{\theta}{180} &=& \tfrac{\theta^R}{\pi} \\[4pt]
& \tfrac{15}{180} &=& \tfrac{\theta^R}{\pi} \\[4pt]
& \tfrac{15\pi}{180} &=& \theta^R \\[4pt]
& \tfrac{\pi}{12} &=& \theta^R
\end{array}
$$

**Analysis.** Another way to think about this problem is by remembering
that $30^\circ=\tfrac{\pi}{6}$. Because $15^\circ=\tfrac{1}{2}(30^\circ)$, we can find
that $\tfrac{1}{2}\left(\tfrac{\pi}{6}\right)$ is $\tfrac{\pi}{12}$.

{{< fillin
  question="Convert $126^\circ$ to radians."
  answer="\frac{7\pi}{10}"
  answerForm="radians"
  answerDisplay="$\tfrac{7\pi}{10}$"
  hint="Use the proportion $\tfrac{\theta}{180}=\tfrac{\theta^R}{\pi}$, then reduce the fraction."
>}}

## Finding Coterminal Angles

Converting between degrees and radians can make working with angles easier
in some applications. For other applications, we may need another type of
conversion. Negative angles and angles greater than a full revolution are
more awkward to work with than those in the range of 0° to 360°, or 0 to
$2\pi$. It would be convenient to replace those out-of-range angles with a
corresponding angle within the range of a single revolution.

It is possible for more than one angle to have the same terminal side.
Look at the figure below. The angle of 140° is a **positive angle**,
measured counterclockwise. The angle of $-220^\circ$ is a **negative angle**,
measured clockwise. But both angles have the same terminal side. If two
angles in standard position have the same terminal side, they are
**coterminal angles**. Every angle greater than 360° or less than 0° is
coterminal with an angle between 0° and 360°, and it is often more
convenient to find the coterminal angle within the range of 0° to 360°
than to work with an angle that is outside that range.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An angle of 140 degrees and an angle of negative 220 degrees are coterminal, sharing a terminal side in the second quadrant. A short counterclockwise arc shows the 140-degree sweep; a larger clockwise arc shows the negative 220-degree sweep.","xMin":-2.5,"xMax":2.5,"yMin":-2.2,"yMax":2.2,"grid":false,"tickLabels":false,"unit":45,"segments":[{"from":[0,0],"to":[-1.532,1.286],"arrows":"end"}],"circles":[{"at":[0,0],"r":0.75,"from":0,"to":140},{"at":[0,0],"r":1.05,"from":140,"to":360}],"texts":[{"at":[0.075,0.207],"text":"140°"},{"at":[0.65,-0.95],"text":"-220°"}]}
{{< /apfigure >}}

Any angle has infinitely many **coterminal angles** because each time we
add 360° to that angle—or subtract 360° from it—the resulting value has a
terminal side in the same location. For example, 100° and 460° are
coterminal for this reason, as is $-260^\circ$. Recognizing that any angle has
infinitely many coterminal angles explains the repetitive shape in the
graphs of trigonometric functions.

An angle's reference angle is the measure of the smallest, positive, acute
angle $t'$ formed by the terminal side of the angle $t$ and the horizontal
axis. Thus positive reference angles have terminal sides that lie in the
first quadrant and can be used as models for angles in other quadrants.
See below for examples of reference angles for angles in different
quadrants.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Reference angle in Quadrant I: the terminal side of angle t already lies in the first quadrant, so the reference angle t prime equals t.","xMin":-1.9,"xMax":1.9,"yMin":-1.9,"yMax":1.9,"grid":false,"tickLabels":false,"quadrantLabels":true,"unit":55,"segments":[{"from":[0,0],"to":[1.028,1.226],"arrows":"end"}],"circles":[{"at":[0,0],"r":0.55,"from":0,"to":50}],"texts":[{"at":[0.42,0.16],"text":"t"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Reference angle in Quadrant II: the terminal side of angle t lies in the second quadrant; the dashed reference ray shows the reference angle t prime in the first quadrant, where t prime = 180 degrees minus t.","xMin":-1.9,"xMax":1.9,"yMin":-1.9,"yMax":1.9,"grid":false,"tickLabels":false,"quadrantLabels":true,"unit":55,"segments":[{"from":[0,0],"to":[-1.386,0.8],"arrows":"end"},{"from":[0,0],"to":[1.386,0.8],"dashed":true}],"circles":[{"at":[0,0],"r":0.75,"from":0,"to":150},{"at":[0,0],"r":0.5,"from":0,"to":30}],"texts":[{"at":[-0.55,0.32],"text":"t"},{"at":[0.338,0.0906],"text":"t′"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Reference angle in Quadrant III: the terminal side of angle t lies in the third quadrant; the dashed reference ray shows the reference angle t prime in the first quadrant, where t prime = t minus 180 degrees.","xMin":-1.9,"xMax":1.9,"yMin":-1.9,"yMax":1.9,"grid":false,"tickLabels":false,"quadrantLabels":true,"unit":55,"segments":[{"from":[0,0],"to":[-1.386,-0.8],"arrows":"end"},{"from":[0,0],"to":[1.386,0.8],"dashed":true}],"circles":[{"at":[0,0],"r":0.75,"from":180,"to":210},{"at":[0,0],"r":0.5,"from":0,"to":30}],"texts":[{"at":[-0.55,-0.32],"text":"t"},{"at":[0.338,0.0906],"text":"t′"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Reference angle in Quadrant IV: the terminal side of angle t lies in the fourth quadrant; the dashed reference ray shows the reference angle t prime in the first quadrant, where t prime = 360 degrees minus t.","xMin":-1.9,"xMax":1.9,"yMin":-1.9,"yMax":1.9,"grid":false,"tickLabels":false,"quadrantLabels":true,"unit":55,"segments":[{"from":[0,0],"to":[1.386,-0.8],"arrows":"end"},{"from":[0,0],"to":[1.386,0.8],"dashed":true}],"circles":[{"at":[0,0],"r":0.75,"from":330,"to":360},{"at":[0,0],"r":0.5,"from":0,"to":30}],"texts":[{"at":[0.55,-0.32],"text":"t"},{"at":[0.338,0.0906],"text":"t′"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Coterminal and reference angles.** Coterminal angles are two angles in
  standard position that have the same terminal side.

  An angle's **reference angle** is the size of the smallest acute angle,
  $t'$, formed by the terminal side of the angle $t$ and the horizontal
  axis.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given an angle greater than 360°, find a coterminal angle
  between 0° and 360°.

  1. Subtract 360° from the given angle.
  2. If the result is still greater than 360°, subtract 360° again till
     the result is between 0° and 360°.
  3. The resulting angle is coterminal with the original angle.
{{< /callout >}}

**Example.** Find the least positive angle $\theta$ that is coterminal
with an angle measuring 800°, where $0^\circ\le\theta<360^\circ$.

**Solution.** An angle with measure 800° is coterminal with an angle with
measure $800-360=440^\circ$, but 440° is still greater than 360°, so we
subtract 360° again to find another coterminal angle: $440-360=80^\circ$.

The angle $\theta=80^\circ$ is coterminal with 800°. To put it another way, 800°
equals 80° plus two full rotations, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An angle of 800 degrees drawn as a spiral making two full counterclockwise turns and then 80 degrees more, ending on a terminal side in the first quadrant close to the y-axis. A separate outer arc marks the 80-degree angle between the positive x-axis and that terminal side.","xMin":-2.6,"xMax":2.6,"yMin":-2.2,"yMax":2.4,"grid":false,"tickLabels":false,"unit":50,"segments":[{"from":[0,0],"to":[0.363,2.058],"arrows":"end"},{"from":[0,0],"to":[2.1,0],"arrows":"end"}],"polylines":[{"through":[[0.12,0],[0.123,0.006],[0.126,0.013],[0.129,0.02],[0.131,0.028],[0.133,0.036],[0.134,0.044],[0.135,0.052],[0.135,0.06],[0.135,0.069],[0.134,0.077],[0.133,0.086],[0.131,0.095],[0.128,0.104],[0.125,0.113],[0.122,0.122],[0.118,0.131],[0.113,0.139],[0.107,0.148],[0.101,0.156],[0.095,0.164],[0.088,0.172],[0.08,0.18],[0.072,0.187],[0.063,0.194],[0.054,0.2],[0.044,0.206],[0.034,0.212],[0.023,0.216],[0.012,0.221],[0,0.225],[-0.012,0.228],[-0.024,0.23],[-0.037,0.232],[-0.05,0.233],[-0.063,0.234],[-0.076,0.234],[-0.089,0.232],[-0.103,0.231],[-0.116,0.228],[-0.13,0.225],[-0.143,0.221],[-0.157,0.216],[-0.17,0.21],[-0.183,0.203],[-0.196,0.196],[-0.208,0.188],[-0.221,0.179],[-0.233,0.169],[-0.244,0.158],[-0.255,0.147],[-0.265,0.135],[-0.275,0.123],[-0.285,0.109],[-0.293,0.095],[-0.301,0.081],[-0.308,0.066],[-0.315,0.05],[-0.321,0.034],[-0.325,0.017],[-0.329,0],[-0.332,-0.017],[-0.334,-0.035],[-0.336,-0.053],[-0.336,-0.071],[-0.335,-0.09],[-0.333,-0.108],[-0.33,-0.127],[-0.326,-0.145],[-0.321,-0.164],[-0.315,-0.182],[-0.308,-0.2],[-0.3,-0.218],[-0.291,-0.236],[-0.281,-0.253],[-0.27,-0.27],[-0.258,-0.286],[-0.245,-0.302],[-0.23,-0.317],[-0.215,-0.332],[-0.2,-0.346],[-0.183,-0.359],[-0.165,-0.371],[-0.147,-0.382],[-0.128,-0.393],[-0.108,-0.402],[-0.087,-0.411],[-0.066,-0.418],[-0.045,-0.425],[-0.023,-0.43],[0,-0.434],[0.023,-0.437],[0.046,-0.438],[0.07,-0.439],[0.093,-0.438],[0.117,-0.436],[0.141,-0.433],[0.164,-0.428],[0.188,-0.422],[0.211,-0.415],[0.234,-0.406],[0.257,-0.396],[0.28,-0.385],[0.302,-0.372],[0.323,-0.359],[0.344,-0.344],[0.364,-0.328],[0.383,-0.31],[0.402,-0.292],[0.419,-0.272],[0.436,-0.252],[0.452,-0.23],[0.466,-0.208],[0.48,-0.184],[0.492,-0.16],[0.503,-0.135],[0.513,-0.109],[0.522,-0.083],[0.529,-0.056],[0.534,-0.028],[0.538,0],[0.541,0.028],[0.542,0.057],[0.542,0.086],[0.54,0.115],[0.537,0.144],[0.532,0.173],[0.526,0.202],[0.517,0.23],[0.508,0.259],[0.497,0.287],[0.484,0.314],[0.47,0.341],[0.454,0.367],[0.436,0.393],[0.418,0.418],[0.398,0.442],[0.376,0.465],[0.353,0.486],[0.329,0.507],[0.304,0.527],[0.278,0.545],[0.25,0.562],[0.222,0.578],[0.192,0.592],[0.162,0.604],[0.131,0.615],[0.099,0.625],[0.066,0.633],[0.033,0.639],[0,0.643],[-0.034,0.646],[-0.068,0.647],[-0.102,0.646],[-0.137,0.643],[-0.171,0.638],[-0.205,0.632],[-0.239,0.623],[-0.273,0.613],[-0.306,0.601],[-0.339,0.587],[-0.371,0.572],[-0.403,0.554],[-0.433,0.535],[-0.463,0.514],[-0.492,0.492],[-0.519,0.468],[-0.546,0.442],[-0.571,0.415],[-0.595,0.386],[-0.617,0.356],[-0.638,0.325],[-0.658,0.293],[-0.675,0.259],[-0.691,0.225],[-0.705,0.189],[-0.718,0.153],[-0.728,0.115],[-0.737,0.077],[-0.743,0.039],[-0.748,0],[-0.75,-0.039],[-0.751,-0.079],[-0.749,-0.119],[-0.745,-0.158],[-0.739,-0.198],[-0.731,-0.238],[-0.721,-0.277],[-0.709,-0.315],[-0.694,-0.354],[-0.678,-0.391],[-0.659,-0.428],[-0.639,-0.464],[-0.616,-0.499],[-0.592,-0.533],[-0.566,-0.566],[-0.538,-0.597],[-0.508,-0.627],[-0.476,-0.656],[-0.443,-0.683],[-0.409,-0.708],[-0.373,-0.732],[-0.335,-0.753],[-0.297,-0.773],[-0.257,-0.791],[-0.216,-0.806],[-0.174,-0.82],[-0.132,-0.832],[-0.088,-0.841],[-0.044,-0.848],[0,-0.852],[0.045,-0.855],[0.09,-0.855],[0.135,-0.852],[0.18,-0.847],[0.225,-0.84],[0.27,-0.831],[0.314,-0.819],[0.358,-0.804],[0.401,-0.787],[0.444,-0.768],[0.485,-0.747],[0.526,-0.723],[0.565,-0.698],[0.603,-0.67],[0.64,-0.64],[0.675,-0.608],[0.708,-0.574],[0.74,-0.538],[0.77,-0.5],[0.799,-0.461],[0.825,-0.42],[0.849,-0.378],[0.871,-0.334],[0.89,-0.289],[0.908,-0.243],[0.922,-0.196],[0.935,-0.148],[0.945,-0.099],[0.952,-0.05],[0.957,0],[0.959,0.05],[0.959,0.101],[0.956,0.151],[0.95,0.202],[0.941,0.252],[0.93,0.302],[0.916,0.352],[0.9,0.401],[0.881,0.449],[0.859,0.496],[0.835,0.542],[0.808,0.587],[0.779,0.631],[0.747,0.673],[0.714,0.714],[0.678,0.753],[0.64,0.79],[0.599,0.825],[0.557,0.858],[0.513,0.889],[0.468,0.918],[0.42,0.944],[0.372,0.968],[0.322,0.99],[0.27,1.009],[0.218,1.025]]}],"circles":[{"at":[0,0],"r":1.62,"from":0,"to":80}],"texts":[{"at":[-1.45,-0.53],"text":"800°"},{"at":[1.42,1.02],"text":"80°"}]}
{{< /apfigure >}}

{{< fillin
  question="Find an angle that is coterminal with an angle measuring $870^\circ$, where the coterminal angle $\alpha$ satisfies $0^\circ\le\alpha<360^\circ$."
  answer="150^\circ"
  answerForm="degrees"
  answerDisplay="$150^\circ$"
  hint="Subtract $360^\circ$ from $870^\circ$. If the result is still greater than $360^\circ$, subtract $360^\circ$ again."
>}}

{{< callout type="info" >}}
  **How to:** given an angle with measure less than 0°, find a coterminal
  angle having a measure between 0° and 360°.

  1. Add 360° to the given angle.
  2. If the result is still less than 0°, add 360° again until the result
     is between 0° and 360°.
  3. The resulting angle is coterminal with the original angle.
{{< /callout >}}

**Example.** Show the angle with measure $-45^\circ$ on a circle and find a
positive coterminal angle $\alpha$ such that $0^\circ\le\alpha<360^\circ$.

**Solution.** Since 45° is half of 90°, we can start at the positive
horizontal axis and measure clockwise half of a 90° angle.

Because we can find coterminal angles by adding or subtracting a full
rotation of 360°, we can find a positive coterminal angle here by adding
360°:

$$-45^\circ+360^\circ=315^\circ$$

We can then show the angle on a circle, as below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An angle of negative 45 degrees and an angle of 315 degrees are coterminal, sharing a terminal side in the fourth quadrant. A short clockwise arc near the terminal side shows the negative 45-degree sweep; a large counterclockwise arc shows the 315-degree sweep.","xMin":-2.5,"xMax":2.5,"yMin":-2.5,"yMax":1.8,"grid":false,"tickLabels":false,"unit":45,"segments":[{"from":[0,0],"to":[1.414,-1.414],"arrows":"end"}],"circles":[{"at":[0,0],"r":0.5,"from":315,"to":360},{"at":[0,0],"r":1.3,"from":0,"to":315}],"texts":[{"at":[0.785,-0.325],"text":"-45°"},{"at":[-0.55,0.7],"text":"315°"}]}
{{< /apfigure >}}

{{< fillin
  question="Find an angle $\beta$ that is coterminal with an angle measuring $-300^\circ$ such that $0^\circ\le\beta<360^\circ$."
  answer="60^\circ"
  answerForm="degrees"
  answerDisplay="$60^\circ$"
  hint="Add $360^\circ$ to the given angle."
>}}

## Finding Coterminal Angles Measured in Radians

We can find coterminal angles measured in radians in much the same way as
we have found them using degrees. In both cases, we find coterminal angles
by adding or subtracting one or more full rotations.

{{< callout type="info" >}}
  **How to:** given an angle greater than $2\pi$, find a coterminal angle
  between 0 and $2\pi$.

  1. Subtract $2\pi$ from the given angle.
  2. If the result is still greater than $2\pi$, subtract $2\pi$ again
     until the result is between $0$ and $2\pi$.
  3. The resulting angle is coterminal with the original angle.
{{< /callout >}}

**Example.** Find an angle $\beta$ that is coterminal with
$\tfrac{19\pi}{4}$, where $0\le\beta<2\pi$.

**Solution.** When working in degrees, we found coterminal angles by
adding or subtracting 360 degrees, a full rotation. Likewise, in radians,
we can find coterminal angles by adding or subtracting full rotations of
$2\pi$ radians:

$$
\begin{array}{lrcl}
& \tfrac{19\pi}{4}-2\pi &=& \tfrac{19\pi}{4}-\tfrac{8\pi}{4} \\[4pt]
& &=& \tfrac{11\pi}{4}
\end{array}
$$

The angle $\tfrac{11\pi}{4}$ is coterminal, but not less than $2\pi$, so
we subtract another rotation:

$$
\begin{array}{lrcl}
& \tfrac{11\pi}{4}-2\pi &=& \tfrac{11\pi}{4}-\tfrac{8\pi}{4} \\[4pt]
& &=& \tfrac{3\pi}{4}
\end{array}
$$

The angle $\tfrac{3\pi}{4}$ is coterminal with $\tfrac{19\pi}{4}$, as shown
below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An angle of 19 pi over 4 radians drawn as a spiral making two full counterclockwise turns and then three quarters of pi more, ending on a terminal side in the second quadrant. A separate outer arc marks the 3 pi over 4 angle between the positive x-axis and that terminal side.","xMin":-2.8,"xMax":2.4,"yMin":-2.2,"yMax":2.4,"grid":false,"tickLabels":false,"unit":50,"segments":[{"from":[0,0],"to":[-1.46,1.46],"arrows":"end"},{"from":[0,0],"to":[2.1,0],"arrows":"end"}],"polylines":[{"through":[[0.12,0],[0.123,0.006],[0.126,0.013],[0.128,0.02],[0.13,0.028],[0.132,0.035],[0.133,0.043],[0.133,0.051],[0.133,0.059],[0.133,0.068],[0.132,0.076],[0.131,0.085],[0.129,0.094],[0.126,0.102],[0.123,0.111],[0.119,0.119],[0.115,0.128],[0.11,0.136],[0.105,0.145],[0.099,0.153],[0.093,0.16],[0.086,0.168],[0.078,0.175],[0.07,0.182],[0.061,0.189],[0.052,0.195],[0.043,0.2],[0.033,0.206],[0.022,0.21],[0.011,0.214],[0,0.218],[-0.012,0.221],[-0.023,0.223],[-0.036,0.225],[-0.048,0.226],[-0.061,0.226],[-0.073,0.226],[-0.086,0.225],[-0.099,0.223],[-0.112,0.22],[-0.125,0.217],[-0.138,0.213],[-0.151,0.208],[-0.164,0.202],[-0.176,0.196],[-0.189,0.189],[-0.201,0.181],[-0.212,0.172],[-0.224,0.163],[-0.235,0.152],[-0.245,0.142],[-0.255,0.13],[-0.265,0.118],[-0.273,0.105],[-0.282,0.092],[-0.289,0.078],[-0.296,0.063],[-0.302,0.048],[-0.308,0.032],[-0.312,0.016],[-0.316,0],[-0.319,-0.017],[-0.321,-0.034],[-0.322,-0.051],[-0.322,-0.068],[-0.321,-0.086],[-0.319,-0.104],[-0.316,-0.121],[-0.312,-0.139],[-0.308,-0.157],[-0.302,-0.174],[-0.295,-0.192],[-0.287,-0.209],[-0.278,-0.225],[-0.269,-0.242],[-0.258,-0.258],[-0.246,-0.273],[-0.234,-0.289],[-0.22,-0.303],[-0.206,-0.317],[-0.191,-0.33],[-0.174,-0.342],[-0.158,-0.354],[-0.14,-0.365],[-0.122,-0.375],[-0.103,-0.384],[-0.083,-0.392],[-0.063,-0.399],[-0.043,-0.405],[-0.021,-0.41],[0,-0.414],[0.022,-0.416],[0.044,-0.418],[0.066,-0.418],[0.089,-0.417],[0.111,-0.415],[0.134,-0.412],[0.156,-0.408],[0.179,-0.402],[0.201,-0.395],[0.223,-0.387],[0.245,-0.377],[0.266,-0.366],[0.287,-0.354],[0.307,-0.341],[0.327,-0.327],[0.346,-0.312],[0.365,-0.295],[0.382,-0.278],[0.399,-0.259],[0.415,-0.239],[0.43,-0.219],[0.444,-0.197],[0.456,-0.175],[0.468,-0.152],[0.478,-0.128],[0.488,-0.104],[0.496,-0.078],[0.502,-0.053],[0.508,-0.027],[0.512,0],[0.514,0.027],[0.515,0.054],[0.515,0.082],[0.513,0.109],[0.51,0.137],[0.505,0.164],[0.499,0.192],[0.491,0.219],[0.482,0.246],[0.471,0.272],[0.459,0.298],[0.446,0.324],[0.431,0.349],[0.414,0.373],[0.396,0.396],[0.377,0.419],[0.357,0.441],[0.335,0.461],[0.312,0.481],[0.288,0.5],[0.263,0.517],[0.237,0.533],[0.21,0.548],[0.182,0.561],[0.154,0.573],[0.124,0.583],[0.094,0.592],[0.063,0.6],[0.032,0.605],[0,0.609],[-0.032,0.612],[-0.064,0.613],[-0.097,0.612],[-0.129,0.609],[-0.162,0.604],[-0.194,0.598],[-0.227,0.59],[-0.259,0.581],[-0.29,0.569],[-0.321,0.556],[-0.351,0.541],[-0.381,0.525],[-0.41,0.507],[-0.438,0.487],[-0.466,0.466],[-0.492,0.443],[-0.517,0.418],[-0.541,0.393],[-0.563,0.366],[-0.584,0.337],[-0.604,0.308],[-0.622,0.277],[-0.639,0.245],[-0.654,0.213],[-0.668,0.179],[-0.679,0.144],[-0.689,0.109],[-0.697,0.073],[-0.703,0.037],[-0.707,0],[-0.71,-0.037],[-0.71,-0.075],[-0.708,-0.112],[-0.705,-0.15],[-0.699,-0.187],[-0.691,-0.225],[-0.682,-0.262],[-0.67,-0.298],[-0.656,-0.334],[-0.641,-0.37],[-0.623,-0.405],[-0.604,-0.439],[-0.583,-0.472],[-0.56,-0.504],[-0.535,-0.535],[-0.508,-0.564],[-0.48,-0.593],[-0.45,-0.62],[-0.419,-0.645],[-0.386,-0.669],[-0.352,-0.691],[-0.317,-0.712],[-0.28,-0.73],[-0.243,-0.747],[-0.204,-0.762],[-0.165,-0.775],[-0.124,-0.786],[-0.083,-0.794],[-0.042,-0.801],[0,-0.805],[0.042,-0.807],[0.085,-0.807],[0.128,-0.805],[0.17,-0.8],[0.213,-0.794],[0.255,-0.784],[0.297,-0.773],[0.338,-0.759],[0.379,-0.744],[0.419,-0.726],[0.458,-0.705],[0.496,-0.683],[0.533,-0.659],[0.569,-0.632],[0.604,-0.604],[0.637,-0.574],[0.669,-0.542],[0.699,-0.508],[0.727,-0.472],[0.754,-0.435],[0.779,-0.397],[0.801,-0.357],[0.822,-0.315],[0.84,-0.273],[0.857,-0.23],[0.871,-0.185],[0.882,-0.14],[0.892,-0.094],[0.899,-0.047],[0.903,0],[0.905,0.047],[0.905,0.095],[0.902,0.143],[0.896,0.19],[0.888,0.238],[0.878,0.285],[0.864,0.332],[0.849,0.378],[0.831,0.423],[0.81,0.468],[0.788,0.511],[0.762,0.554],[0.735,0.595],[0.705,0.635],[0.673,0.673],[0.639,0.71],[0.603,0.745],[0.565,0.778],[0.526,0.809],[0.484,0.839],[0.441,0.866],[0.397,0.891],[0.351,0.913],[0.303,0.933],[0.255,0.951],[0.205,0.966],[0.155,0.979],[0.104,0.989],[0.052,0.996],[0,1.001],[-0.053,1.003],[-0.105,1.002],[-0.158,0.998],[-0.211,0.992],[-0.263,0.983],[-0.315,0.971],[-0.367,0.956],[-0.418,0.938],[-0.468,0.918],[-0.517,0.895],[-0.565,0.87],[-0.611,0.842],[-0.657,0.811],[-0.7,0.778],[-0.742,0.742]]}],"circles":[{"at":[0,0],"r":1.62,"from":0,"to":135}],"texts":[{"at":[-1.52,-0.55],"text":"19π/4"},{"at":[0.62,1.62],"text":"3π/4"}]}
{{< /apfigure >}}

{{< fillin
  question="Find an angle $\theta$ that is coterminal with an angle of measure $-\tfrac{17\pi}{6}$, where $0\le\theta<2\pi$."
  answer="\frac{7\pi}{6}"
  answerForm="radians"
  answerDisplay="$\tfrac{7\pi}{6}$"
  hint="Add $2\pi$ (as $\tfrac{12\pi}{6}$) until the result lies between $0$ and $2\pi$."
>}}

## Determining the Length of an Arc

Recall that the radian measure $\theta$ of an angle was defined as the
ratio of the arc length $s$ of a circular arc to the radius $r$ of the
circle, $\theta=\tfrac{s}{r}$. From this relationship, we can find arc
length along a circle, given an angle.

{{< callout type="info" >}}
  **Arc length on a circle.** In a circle of radius $r$, the length of an
  arc $s$ subtended by an angle with measure $\theta$ in radians, shown
  below, is

  $$s=r\theta$$

  {{< apfigure kind="graph" >}}
  {"ariaLabel":"A circle with a central angle theta at the origin, radius r drawn to the terminal side, and the intercepted arc s highlighted between the initial and terminal sides.","xMin":-1.6,"xMax":1.8,"yMin":-1.6,"yMax":1.6,"grid":false,"tickLabels":false,"unit":85,"circles":[{"at":[0,0],"r":1.3}],"segments":[{"from":[0,0],"to":[1.3,0]},{"from":[0,0],"to":[0.746,1.065]}],"texts":[{"at":[0.42,0.13],"text":"θ"},{"at":[0.68,-0.22],"text":"r"},{"at":[0.55,1.28],"text":"s"}]}
  {{< /apfigure >}}

{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a circle of radius $r$, calculate the length $s$ of
  the arc subtended by a given angle of measure $\theta$.

  1. If necessary, convert $\theta$ to radians.
  2. Multiply the radius $r$ by the radian measure of $\theta$: $s=r\theta$.
{{< /callout >}}

**Example.** Assume the orbit of Mercury around the sun is a perfect
circle. Mercury is approximately 36 million miles from the sun.

1. In one Earth day, Mercury completes 0.0114 of its total revolution. How
   many miles does it travel in one day?
2. Use your answer from part (1) to determine the radian measure for
   Mercury's movement in one Earth day.

**Solution.**

1. Let's begin by finding the circumference of Mercury's orbit.

   $$
   \begin{array}{lrcl}
   & C &=& 2\pi r \\[4pt]
   & &=& 2\pi(36\text{ million miles}) \\[4pt]
   & &\approx& 226\text{ million miles}
   \end{array}
   $$

   Since Mercury completes 0.0114 of its total revolution in one Earth
   day, we can now find the distance traveled:

   $$(0.0114)226\text{ million miles}=2.58\text{ million miles}$$

2. Now, we convert to radians:

   $$
   \begin{array}{lrcl}
   \text{radian} & &=& \tfrac{\text{arc length}}{\text{radius}} \\[4pt]
   & &=& \tfrac{2.58\text{ million miles}}{36\text{ million miles}} \\[4pt]
   & &=& 0.0717
   \end{array}
   $$

{{< fillin
  question="Find the arc length along a circle of radius 10 units subtended by an angle of $215^\circ$. Round your answer to three decimal places."
  answer="37.525"
  answerForm="decimal"
  answerDisplay="$\tfrac{215\pi}{18}\approx37.525$ units"
  hint="Convert $215^\circ$ to radians, then apply $s=r\theta$."
>}}

## Finding the Area of a Sector of a Circle

In addition to arc length, we can also use angles to find the area of a
**sector of a circle**. A sector is a region of a circle bounded by two
radii and the intercepted arc, like a slice of pizza or pie. Recall that
the area of a circle with radius $r$ can be found using the formula
$A=\pi r^2$. If the two radii form an angle of $\theta$, measured in
radians, then $\tfrac{\theta}{2\pi}$ is the ratio of the angle measure to
the measure of a full rotation and is also, therefore, the ratio of the
area of the sector to the area of the circle. Thus, the **area of a
sector** is the fraction $\tfrac{\theta}{2\pi}$ multiplied by the entire
area. (Always remember that this formula only applies if $\theta$ is in
radians.)

$$
\begin{array}{lrcl}
\text{Area of sector} & &=& \left(\tfrac{\theta}{2\pi}\right)\pi r^2 \\[4pt]
& &=& \tfrac{\theta\pi r^2}{2\pi} \\[4pt]
& &=& \tfrac{1}{2}\theta r^2
\end{array}
$$

{{< callout type="info" >}}
  **Area of a sector.** The **area of a sector** of a circle with radius
  $r$ subtended by an angle $\theta$, measured in radians, is

  $$A=\tfrac{1}{2}\theta r^2$$

  See below.

  {{< apfigure kind="graph" >}}
  {"ariaLabel":"A circle with a central angle theta at the origin and radius r, showing the sector bounded by the two radii and the intercepted arc, whose area equals one-half theta r squared.","xMin":-1.6,"xMax":1.8,"yMin":-1.6,"yMax":1.6,"grid":false,"tickLabels":false,"unit":85,"circles":[{"at":[0,0],"r":1.3}],"segments":[{"from":[0,0],"to":[1.3,0]},{"from":[0,0],"to":[0.714,1.091]}],"texts":[{"at":[0.4,0.16],"text":"θ"},{"at":[0.65,-0.22],"text":"r"},{"at":[1.15,0.85],"text":"A = ½θr²"}]}
  {{< /apfigure >}}

{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a circle of radius $r$, find the area of a sector
  defined by a given angle $\theta$.

  1. If necessary, convert $\theta$ to radians.
  2. Multiply half the radian measure of $\theta$ by the square of the
     radius $r$: $A=\tfrac{1}{2}\theta r^2$.
{{< /callout >}}

**Example.** An automatic lawn sprinkler sprays a distance of 20 feet
while rotating 30 degrees, as shown below. What is the area of the sector
of grass the sprinkler waters?

{{< apfigure kind="graph" >}}
{"ariaLabel":"A 30-degree sector with two 20-foot radii from the sprinkler, the arc between them tracing the watered edge.","xMin":-2,"xMax":24,"yMin":-2,"yMax":13,"grid":false,"tickLabels":false,"unit":11,"circles":[{"at":[0,0],"r":20,"from":0,"to":30}],"segments":[{"from":[0,0],"to":[20,0]},{"from":[0,0],"to":[17.32,10]}],"texts":[{"at":[10,1.6],"text":"30°"},{"at":[10,-1.5],"text":"20 ft"}]}
{{< /apfigure >}}

**Solution.** First, we need to convert the angle measure into radians.
Because 30 degrees is one of our special angles, we already know the
equivalent radian measure, but we can also convert:

$$
\begin{array}{lrcl}
& 30\text{ degrees} &=& 30\cdot\tfrac{\pi}{180} \\[4pt]
& &=& \tfrac{\pi}{6}\text{ radians}
\end{array}
$$

The area of the sector is then

$$
\begin{array}{lrcl}
\text{Area} & =& \tfrac{1}{2}\left(\tfrac{\pi}{6}\right)(20)^2 \\[4pt]
& &\approx& 104.72
\end{array}
$$

So the area is about $104.72\text{ ft}^2$.

{{< fillin
  question="In central pivot irrigation, a large irrigation pipe on wheels rotates around a center point. A farmer has a central pivot system with a radius of 400 meters. If water restrictions only allow her to water 150 thousand square meters a day, what angle should she set the system to cover? Write the answer in radian measure to two decimal places."
  answer="1.88"
  answerForm="decimal"
  answerDisplay="$1.88$"
  hint="Solve $A=\tfrac12\theta r^2$ for $\theta$, using $A=150{,}000$ m² and $r=400$ m."
>}}

## Use Linear and Angular Speed to Describe Motion on a Circular Path

In addition to finding the area of a sector, we can use angles to describe
the speed of a moving object. An object traveling in a circular path has
two types of speed. **Linear speed** is speed along a straight path and
can be determined by the distance it moves along (its **displacement**) in
a given time interval. For instance, if a wheel with radius 5 inches
rotates once a second, a point on the edge of the wheel moves a distance
equal to the circumference, or $10\pi$ inches, every second. So the linear
speed of the point is $10\pi$ in./s. The equation for linear speed is as
follows where $v$ is linear speed, $s$ is displacement, and $t$ is time.

$$v=\tfrac{s}{t}$$

**Angular speed** results from circular motion and can be determined by
the angle through which a point rotates in a given time interval. In other
words, angular speed is angular rotation per unit time. So, for instance,
if a gear makes a full rotation every 4 seconds, we can calculate its
angular speed as $\tfrac{360\text{ degrees}}{4\text{ seconds}}=$ 90
degrees per second. Angular speed can be given in radians per second,
rotations per minute, or degrees per hour for example. The equation for
angular speed is as follows, where $\omega$ (read as omega) is angular
speed, $\theta$ is the angle traversed, and $t$ is time.

$$\omega=\tfrac{\theta}{t}$$

Combining the definition of angular speed with the arc length equation,
$s=r\theta$, we can find a relationship between angular and linear speeds.
The angular speed equation can be solved for $\theta$, giving
$\theta=\omega t$. Substituting this into the arc length equation gives:

$$
\begin{array}{lrcl}
& s &=& r\theta \\[4pt]
& &=& r\omega t
\end{array}
$$

Substituting this into the linear speed equation gives:

$$
\begin{array}{lrcl}
& v &=& \tfrac{s}{t} \\[4pt]
& &=& \tfrac{r\omega t}{t} \\[4pt]
& &=& r\omega
\end{array}
$$

{{< callout type="info" >}}
  **Angular and linear speed.** As a point moves along a circle of radius
  $r$, its **angular speed**, $\omega$, is the angular rotation $\theta$
  per unit time, $t$.

  $$\omega=\tfrac{\theta}{t}$$

  The **linear speed**, $v$, of the point can be found as the distance
  traveled, arc length $s$, per unit time, $t$.

  $$v=\tfrac{s}{t}$$

  When the angular speed is measured in radians per unit time, linear
  speed and angular speed are related by the equation

  $$v=r\omega$$

  This equation states that the angular speed in radians, $\omega$,
  representing the amount of rotation occurring in a unit of time, can be
  multiplied by the radius $r$ to calculate the total arc length traveled
  in a unit of time, which is the definition of linear speed.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the amount of angle rotation and the time elapsed,
  calculate the angular speed.

  1. If necessary, convert the angle measure to radians.
  2. Divide the angle in radians by the number of time units elapsed:
     $\omega=\tfrac{\theta}{t}$.
  3. The resulting speed will be in radians per time unit.
{{< /callout >}}

Water wheels have been used for thousands of years to transfer the power
of flowing water to other devices. Water turned the wheel, which in turn
rotated a crank connected to two saws used to cut blocks. These design
elements were used in water wheel applications throughout the world, and
even provided the underlying principle for the steam engine, invented
about 1500 years later.

**Example.** A water wheel completes 1 rotation every 5 seconds. Find the
angular speed in radians per second.

**Solution.** The wheel completes 1 rotation, or passes through an angle
of $2\pi$ radians in 5 seconds, so the angular speed would be
$\omega=\tfrac{2\pi}{5}\approx1.257$ radians per second.

{{< fillin
  question="A vintage vinyl record is played on a turntable rotating clockwise at a rate of 45 rotations per minute. Find the angular speed in radians per second."
  answer="\frac{3\pi}{2}"
  answerForm="radians"
  answerDisplay="$\tfrac{3\pi}{2}$ rad/s"
  hint="Convert 45 rotations per minute to radians per second, using $2\pi$ rad per rotation and 60 seconds per minute."
>}}

{{< callout type="info" >}}
  **How to:** given the radius of a circle, an angle of rotation, and a
  length of elapsed time, determine the linear speed.

  1. Convert the total rotation to radians if necessary.
  2. Divide the total rotation in radians by the elapsed time to find the
     angular speed: apply $\omega=\tfrac{\theta}{t}$.
  3. Multiply the angular speed by the length of the radius to find the
     linear speed, expressed in terms of the length unit used for the
     radius and the time unit used for the elapsed time: apply $v=r\omega$.
{{< /callout >}}

**Example.** A bicycle has wheels 28 inches in diameter. A tachometer
determines the wheels are rotating at 180 RPM (revolutions per minute).
Find the speed the bicycle is traveling down the road.

**Solution.** Here, we have an angular speed and need to find the
corresponding linear speed, since the linear speed of the outside of the
tires is the speed at which the bicycle travels down the road.

We begin by converting from rotations per minute to radians per minute. It
can be helpful to utilize the units to make this conversion:

$$180\tfrac{\text{rotations}}{\text{minute}}\cdot\tfrac{2\pi\text{ radians}}{\text{rotation}}=360\pi\tfrac{\text{radians}}{\text{minute}}$$

Using the formula from above along with the radius of the wheels, we can
find the linear speed:

$$
\begin{array}{lrcl}
& v &=& (14\text{ inches})\left(360\pi\tfrac{\text{radians}}{\text{minute}}\right) \\[4pt]
& &=& 5{,}040\pi\tfrac{\text{inches}}{\text{minute}}
\end{array}
$$

Remember that radians are a unitless measure, so it is not necessary to
include them.

Finally, we may wish to convert this linear speed into a more familiar
measurement, like miles per hour.

$$5{,}040\pi\tfrac{\text{inches}}{\text{minute}}\cdot\tfrac{1\text{ feet}}{12\text{ inches}}\cdot\tfrac{1\text{ mile}}{5{,}280\text{ feet}}\cdot\tfrac{60\text{ minutes}}{1\text{ hour}}\approx14.99\text{ miles per hour (mph)}$$

{{< fillin
  question="A satellite is rotating around Earth at 0.25 radians per hour at an altitude of 242 km above Earth. If the radius of Earth is 6378 kilometers, find the linear speed of the satellite in kilometers per hour."
  answer="1655"
  answerDisplay="$1{,}655$ kilometers per hour"
  hint="Add Earth's radius to the altitude to get the orbital radius, then apply $v=r\omega$."
>}}

## Key equations

| arc length | $s=r\theta$ |
| :--- | :--- |
| area of a sector | $A=\tfrac{1}{2}\theta r^2$ |
| angular speed | $\omega=\tfrac{\theta}{t}$ |
| linear speed | $v=\tfrac{s}{t}$ |
| linear speed related to angular speed | $v=r\omega$ |

## Key concepts

- An angle is formed from the union of two rays, by keeping the initial
  side fixed and rotating the terminal side. The amount of rotation
  determines the measure of the angle.
- An angle is in standard position if its vertex is at the origin and its
  initial side lies along the positive $x$-axis. A positive angle is
  measured counterclockwise from the initial side and a negative angle is
  measured clockwise.
- To draw an angle in standard position, draw the initial side along the
  positive $x$-axis and then place the terminal side according to the
  fraction of a full rotation the angle represents.
- In addition to degrees, the measure of an angle can be described in
  radians.
- To convert between degrees and radians, use the proportion
  $\tfrac{\theta}{180}=\tfrac{\theta^R}{\pi}$.
- Two angles that have the same terminal side are called coterminal
  angles.
- We can find coterminal angles by adding or subtracting 360° or $2\pi$.
- Coterminal angles can be found using radians just as they are for
  degrees.
- The length of a circular arc is a fraction of the circumference of the
  entire circle.
- The area of a sector is a fraction of the area of the entire circle.
- An object moving in a circular path has both linear and angular speed.
- The angular speed of an object traveling in a circular path is the
  measure of the angle through which it turns in a unit of time.
- The linear speed of an object traveling along a circular path is the
  distance it travels in a unit of time.

## Practice

### Draw angles in standard position

{{< multiplechoice
  question="In which quadrant does the terminal side of an angle of $135^\circ$ in standard position lie?"
  answer="Quadrant II"
  hint="$135^\circ$ is between $90^\circ$ and $180^\circ$."
>}}
Quadrant I
Quadrant II
Quadrant III
Quadrant IV
{{< /multiplechoice >}}

{{< multiplechoice
  question="In which quadrant does the terminal side of an angle of $300^\circ$ in standard position lie?"
  answer="Quadrant IV"
  hint="$300^\circ$ is between $270^\circ$ and $360^\circ$."
>}}
Quadrant I
Quadrant II
Quadrant III
Quadrant IV
{{< /multiplechoice >}}

{{< multiplechoice
  question="In which quadrant does the terminal side of an angle of $\tfrac{5\pi}{6}$ in standard position lie?"
  answer="Quadrant II"
  hint="Convert to degrees: $\tfrac{5\pi}{6}=150^\circ$, which is between $90^\circ$ and $180^\circ$."
>}}
Quadrant I
Quadrant II
Quadrant III
Quadrant IV
{{< /multiplechoice >}}

### Convert between degrees and radians

{{< fillin
  question="Convert $\tfrac{\pi}{9}$ radians to degrees."
  answer="20^\circ"
  answerForm="degrees"
  answerDisplay="$20^\circ$"
  hint="Use the proportion $\tfrac{\theta}{180}=\tfrac{\theta^R}{\pi}$."
>}}

{{< fillin
  question="Convert $-540^\circ$ to radians."
  answer="-3\pi"
  answerForm="radians"
  answerDisplay="$-3\pi$"
  hint="Multiply the degree measure by $\tfrac{\pi}{180}$."
>}}

{{< fillin
  question="Convert $150^\circ$ to radians."
  answer="\frac{5\pi}{6}"
  answerForm="radians"
  answerDisplay="$\tfrac{5\pi}{6}$"
  hint="Multiply the degree measure by $\tfrac{\pi}{180}$ and reduce the fraction."
>}}

### Find coterminal angles

{{< fillin
  question="Find the angle between $0^\circ$ and $360^\circ$ that is coterminal with $-120^\circ$."
  answer="240^\circ"
  answerForm="degrees"
  answerDisplay="$240^\circ$"
  hint="Add $360^\circ$ to the given angle."
>}}

{{< fillin
  question="Find the angle between $0^\circ$ and $360^\circ$ that is coterminal with $-110^\circ$."
  answer="250^\circ"
  answerForm="degrees"
  answerDisplay="$250^\circ$"
  hint="Add $360^\circ$ to the given angle."
>}}

{{< fillin
  question="Find the angle between $0$ and $2\pi$ that is coterminal with $\tfrac{44\pi}{9}$."
  answer="\frac{8\pi}{9}"
  answerForm="radians"
  answerDisplay="$\tfrac{8\pi}{9}$"
  hint="Subtract $2\pi$ (as $\tfrac{18\pi}{9}$) until the result lies between $0$ and $2\pi$."
>}}

### Find the length of a circular arc

{{< fillin
  question="Find the length of the arc of a circle of radius 5.02 miles subtended by a central angle of $\tfrac{\pi}{3}$. Round to two decimal places."
  answer="5.26"
  answerForm="decimal"
  answerDisplay="$5.26$ miles"
  hint="Apply $s=r\theta$ directly, since the angle is already in radians."
>}}

{{< fillin
  question="Find the length of the arc of a circle of radius 10 centimeters subtended by a central angle of $50^\circ$. Round to two decimal places."
  answer="8.73"
  answerForm="decimal"
  answerDisplay="$8.73$ centimeters"
  hint="Convert $50^\circ$ to radians first, then apply $s=r\theta$."
>}}

{{< fillin
  question="Find the length of the arc of a circle of diameter 12 meters subtended by a central angle of $63^\circ$. Round to two decimal places."
  answer="6.60"
  answerForm="decimal"
  answerDisplay="$6.60$ meters"
  hint="Halve the diameter to get the radius, convert $63^\circ$ to radians, then apply $s=r\theta$."
>}}

### Use linear and angular speed to describe motion on a circular path

{{< fillin
  question="A wheel of radius 14 inches is rotating 0.5 rad/s. Find the linear speed v, in inches per second."
  answer="7"
  answerDisplay="$7$ in./s"
  hint="Apply $v=r\omega$."
>}}

{{< fillin
  question="Using that same wheel of radius 14 inches rotating 0.5 rad/s, find the angular speed in RPM. Round to two decimal places."
  answer="4.77"
  answerForm="decimal"
  answerDisplay="$4.77$ RPM"
  hint="Divide the angular speed by $2\pi$ to get rotations per second, then multiply by 60."
>}}

{{< fillin
  question="Using that same wheel of radius 14 inches rotating 0.5 rad/s, find the angular speed in degrees per second. Round to two decimal places."
  answer="28.65"
  answerForm="decimal"
  answerDisplay="$28.65$ deg/s"
  hint="Multiply the angular speed in radians per second by $\tfrac{180}{\pi}$."
>}}

{{< fillin
  question="When being burned in a writable CD-R drive, the angular speed of a CD varies to keep the linear speed constant where the disc is being written. When writing along the outer edge, the angular speed of one drive is about 4,800 RPM. Find the linear speed if the CD has diameter 120 millimeters. Give your answer in meters per second, rounded to two decimal places."
  answer="30.16"
  answerForm="decimal"
  answerDisplay="$30.16$ m/s"
  hint="Convert RPM to radians per minute, multiply by the radius in millimeters to get mm/min, then convert to m/s."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 5.1: Angles](https://openstax.org/books/precalculus-2e/pages/5-1-angles) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated all twenty-three instructional figures the source draws before its Section Exercises as accessible spec-first SVGs, thirty-two `apfigure` panels in all — ray EF; angle DEF; the sample angle θ; the initial-side/terminal-side/vertex diagram (its small rotation-indicator arc is omitted, since the figure engine's arc primitive requires a coordinate frame that a bare, axis-free angle diagram does not carry — a simplification, not a content loss, since the initial/terminal/vertex labels already convey the rotation); the standard-position schematic; the 90°/360° drawing pair; the four quadrantal-angle panels; the 30° and −135° worked-example angles; the radius-string circle illustrating why $2\pi\approx6.28$; the one-radian construction; the three-panel 1-radian/2-radian/full-revolution figure (drawn with a full circle, three dashed diameters connecting antipodal radian markers, and one solid radius, in place of the source's hand-drawn spiral of radius arcs); the 45°-on-two-circles figure (its decorative dashed crosshair, which carries no additional angle information beyond the labeled 45° ray itself, is omitted); the sixteen-ray common-angle wheels in degrees and radians; the 140°/−220° and −45°/315° coterminal pairs; the four reference-angle panels; the 800°/80° and 19π/4/3π/4 coterminal pairs (each drawn as an Archimedean spiral $r=r_0+(r_1-r_0)\tfrac{\theta}{\theta_{\max}}$ sampled from that equation at three-degree steps, so the two extra full rotations are shown as the source draws them, plus a labeled outer arc for the coterminal angle); the generic arc-length and sector-area diagrams; and the sprinkler sector. The two Section Exercises figures (radius 3 in at 140°; radius 4.5 cm at 2π/5) were not needed: the Practice block draws its arc-length coverage from three answered exercises that need no figure instead. Omitted the decorative photograph of the 3rd-century Hierapolis water wheel, which carries no mathematics, and reworded the sentence that pointed at it. Converted the eleven "Try Its" into interactive fill-ins and multiple-choice questions with instant feedback; the 240° "sketch the angle" Try It became a quadrant-identification multiple choice, since the source asks only for a drawing with no separate checkable fact — the same adaptation used for the three "draw an angle" Practice items, each verified against the source's own solution figure. Every coterminal-angle exercise states the representative it wants (“between $0^\circ$ and $360^\circ$”, “where $0\le\theta<2\pi$”), because a coterminal angle has infinitely many correct measures and only the stated one is graded. Every one of them remains a fill-in, including the two whose printed angle exceeds a full turn ($870^\circ$, and $\tfrac{44\pi}{9}$ in the Practice block): the grader reads a degree mark as the quantity it is rather than folding it onto one turn, so retyping the printed $870^\circ$ against the keyed $150^\circ$ is graded incorrect — confirmed against the real grader for all three spellings of the symbol. Adapted fourteen selected end-of-section exercises — three quadrant identifications, three degree/radian conversions, three coterminal-angle findings, three arc-length computations, a four-part angular/linear-speed problem, and a linear-speed problem — into sixteen interactive components in a closing Practice block, one group per objective.</small>
