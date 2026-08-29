---
title: The Parabola
description: >-
  Defining a parabola by its focus and directrix, graphing parabolas with
  vertex at the origin or at $(h,k)$ from the standard-form equation, writing
  a parabola's equation in standard form from its key features, and solving
  applied problems — satellite dishes, headlights, searchlights, and arches —
  modeled by parabolas — adapted from OpenStax Precalculus 2e, Section 10.3.
source_section: "10.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph parabolas with vertices at the origin
- Write equations of parabolas in standard form
- Graph parabolas with vertices not at the origin
- Solve applied problems involving parabolas
{{< /callout >}}

Katherine Johnson is the pioneering NASA mathematician who was integral to the successful and safe flight and return of many human missions as well as satellites. Prior to the work featured in the movie *Hidden Figures*, she had already made major contributions to the space program. She provided trajectory analysis for the Mercury mission, in which Alan Shepard became the first American to reach space, and she and engineer Ted Sopinski authored a monumental paper regarding placing an object in a precise orbital position and having it return safely to Earth. Many of the orbits she determined were made up of parabolas, and her ability to combine different types of math enabled an unprecedented level of precision. Johnson said, "You tell me when you want it and where you want it to land, and I'll do it backwards and tell you when to take off."

Johnson's work on parabolic orbits and other complex mathematics resulted in successful orbits, Moon landings, and the development of the Space Shuttle program. Applications of parabolas are also critical to other areas of science. Parabolic mirrors (or reflectors) are able to capture energy and focus it to a single point. The advantages of this property are evidenced by the vast list of parabolic objects we use every day: satellite dishes, suspension bridges, telescopes, microphones, spotlights, and car headlights, to name a few. Parabolic reflectors are also used in alternative energy devices, such as solar cookers and water heaters, because they are inexpensive to manufacture and need little maintenance. In this section we will explore the parabola and its uses, including low-cost, energy-efficient solar designs.

### Graphing Parabolas with Vertices at the Origin

In The Ellipse, we saw that an ellipse is formed when a plane cuts through a right circular cone. If the plane is parallel to the edge of the cone, an unbounded curve is formed. This curve is a **parabola**.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A double cone (two cones joined apex to apex) cut by a plane tilted parallel to one slant edge of the lower cone. The plane meets only the lower cone, and the single open curve along which it cuts the surface — a parabola — is drawn solid where it faces the viewer and dashed where it passes behind the cone.","unit":44,"polygons":[{"points":[[0.753,0.222],[1.887,0.978],[-0.273,-3.072],[-1.407,-3.828]],"fill":true}],"segments":[{"from":[0,0],"to":[1.719,-2.772]},{"from":[0,0],"to":[-1.719,-3.115]},{"from":[0,0],"to":[1.719,3.115]},{"from":[0,0],"to":[-1.719,2.772]},{"from":[-1.6,-3],"to":[-1.633,-3.023]},{"from":[-1.633,-3.023],"to":[-1.661,-3.047]},{"from":[-1.661,-3.047],"to":[-1.685,-3.07]},{"from":[-1.685,-3.07],"to":[-1.705,-3.093]},{"from":[-1.705,-3.093],"to":[-1.719,-3.116]},{"from":[-1.719,-3.116],"to":[-1.729,-3.138]},{"from":[-1.729,-3.138],"to":[-1.735,-3.161]},{"from":[-1.735,-3.161],"to":[-1.735,-3.182]},{"from":[-1.735,-3.182],"to":[-1.731,-3.203]},{"from":[-1.731,-3.203],"to":[-1.722,-3.224]},{"from":[-1.722,-3.224],"to":[-1.708,-3.244]},{"from":[-1.708,-3.244],"to":[-1.689,-3.263]},{"from":[-1.689,-3.263],"to":[-1.666,-3.282]},{"from":[-1.666,-3.282],"to":[-1.639,-3.3]},{"from":[-1.639,-3.3],"to":[-1.607,-3.317]},{"from":[-1.607,-3.317],"to":[-1.57,-3.333]},{"from":[-1.57,-3.333],"to":[-1.529,-3.348]},{"from":[-1.529,-3.348],"to":[-1.484,-3.362]},{"from":[-1.484,-3.362],"to":[-1.435,-3.376]},{"from":[-1.435,-3.376],"to":[-1.382,-3.388]},{"from":[-1.382,-3.388],"to":[-1.325,-3.399]},{"from":[-1.325,-3.399],"to":[-1.265,-3.409]},{"from":[-1.265,-3.409],"to":[-1.201,-3.418]},{"from":[-1.201,-3.418],"to":[-1.134,-3.426]},{"from":[-1.134,-3.426],"to":[-1.063,-3.433]},{"from":[-1.063,-3.433],"to":[-0.99,-3.438]},{"from":[-0.99,-3.438],"to":[-0.914,-3.442]},{"from":[-0.914,-3.442],"to":[-0.836,-3.446]},{"from":[-0.836,-3.446],"to":[-0.755,-3.447]},{"from":[-0.755,-3.447],"to":[-0.672,-3.448]},{"from":[-0.672,-3.448],"to":[-0.587,-3.447]},{"from":[-0.587,-3.447],"to":[-0.501,-3.446]},{"from":[-0.501,-3.446],"to":[-0.413,-3.442]},{"from":[-0.413,-3.442],"to":[-0.325,-3.438]},{"from":[-0.325,-3.438],"to":[-0.235,-3.433]},{"from":[-0.235,-3.433],"to":[-0.145,-3.426]},{"from":[-0.145,-3.426],"to":[-0.054,-3.418]},{"from":[-0.054,-3.418],"to":[0.037,-3.409]},{"from":[0.037,-3.409],"to":[0.128,-3.399]},{"from":[0.128,-3.399],"to":[0.218,-3.388]},{"from":[0.218,-3.388],"to":[0.308,-3.376]},{"from":[0.308,-3.376],"to":[0.397,-3.362]},{"from":[0.397,-3.362],"to":[0.485,-3.348]},{"from":[0.485,-3.348],"to":[0.571,-3.333]},{"from":[0.571,-3.333],"to":[0.656,-3.317]},{"from":[0.656,-3.317],"to":[0.739,-3.3]},{"from":[0.739,-3.3],"to":[0.821,-3.282]},{"from":[0.821,-3.282],"to":[0.899,-3.263]},{"from":[0.899,-3.263],"to":[0.976,-3.244]},{"from":[0.976,-3.244],"to":[1.05,-3.224]},{"from":[1.05,-3.224],"to":[1.121,-3.203]},{"from":[1.121,-3.203],"to":[1.188,-3.182]},{"from":[1.188,-3.182],"to":[1.253,-3.161]},{"from":[1.253,-3.161],"to":[1.314,-3.138]},{"from":[1.314,-3.138],"to":[1.372,-3.116]},{"from":[1.372,-3.116],"to":[1.425,-3.093]},{"from":[1.425,-3.093],"to":[1.475,-3.07]},{"from":[1.475,-3.07],"to":[1.521,-3.047]},{"from":[1.521,-3.047],"to":[1.563,-3.023]},{"from":[1.563,-3.023],"to":[1.6,-3]},{"from":[1.6,-3],"to":[1.633,-2.977]},{"from":[1.661,-2.953],"to":[1.685,-2.93]},{"from":[1.705,-2.907],"to":[1.719,-2.884]},{"from":[1.729,-2.862],"to":[1.735,-2.839]},{"from":[1.735,-2.818],"to":[1.731,-2.797]},{"from":[1.722,-2.776],"to":[1.708,-2.756]},{"from":[1.689,-2.737],"to":[1.666,-2.718]},{"from":[1.639,-2.7],"to":[1.607,-2.683]},{"from":[1.57,-2.667],"to":[1.529,-2.652]},{"from":[1.484,-2.638],"to":[1.435,-2.624]},{"from":[1.382,-2.612],"to":[1.325,-2.601]},{"from":[1.265,-2.591],"to":[1.201,-2.582]},{"from":[1.134,-2.574],"to":[1.063,-2.567]},{"from":[0.99,-2.562],"to":[0.914,-2.558]},{"from":[0.836,-2.554],"to":[0.755,-2.553]},{"from":[0.672,-2.552],"to":[0.587,-2.553]},{"from":[0.501,-2.554],"to":[0.413,-2.558]},{"from":[0.325,-2.562],"to":[0.235,-2.567]},{"from":[0.145,-2.574],"to":[0.054,-2.582]},{"from":[-0.037,-2.591],"to":[-0.128,-2.601]},{"from":[-0.218,-2.612],"to":[-0.308,-2.624]},{"from":[-0.397,-2.638],"to":[-0.485,-2.652]},{"from":[-0.571,-2.667],"to":[-0.656,-2.683]},{"from":[-0.739,-2.7],"to":[-0.821,-2.718]},{"from":[-0.899,-2.737],"to":[-0.976,-2.756]},{"from":[-1.05,-2.776],"to":[-1.121,-2.797]},{"from":[-1.188,-2.818],"to":[-1.253,-2.839]},{"from":[-1.314,-2.862],"to":[-1.372,-2.884]},{"from":[-1.425,-2.907],"to":[-1.475,-2.93]},{"from":[-1.521,-2.953],"to":[-1.563,-2.977]},{"from":[-1.6,3],"to":[-1.633,2.977]},{"from":[-1.633,2.977],"to":[-1.661,2.953]},{"from":[-1.661,2.953],"to":[-1.685,2.93]},{"from":[-1.685,2.93],"to":[-1.705,2.907]},{"from":[-1.705,2.907],"to":[-1.719,2.884]},{"from":[-1.719,2.884],"to":[-1.729,2.862]},{"from":[-1.729,2.862],"to":[-1.735,2.839]},{"from":[-1.735,2.839],"to":[-1.735,2.818]},{"from":[-1.735,2.818],"to":[-1.731,2.797]},{"from":[-1.731,2.797],"to":[-1.722,2.776]},{"from":[-1.722,2.776],"to":[-1.708,2.756]},{"from":[-1.708,2.756],"to":[-1.689,2.737]},{"from":[-1.689,2.737],"to":[-1.666,2.718]},{"from":[-1.666,2.718],"to":[-1.639,2.7]},{"from":[-1.639,2.7],"to":[-1.607,2.683]},{"from":[-1.607,2.683],"to":[-1.57,2.667]},{"from":[-1.57,2.667],"to":[-1.529,2.652]},{"from":[-1.529,2.652],"to":[-1.484,2.638]},{"from":[-1.484,2.638],"to":[-1.435,2.624]},{"from":[-1.435,2.624],"to":[-1.382,2.612]},{"from":[-1.382,2.612],"to":[-1.325,2.601]},{"from":[-1.325,2.601],"to":[-1.265,2.591]},{"from":[-1.265,2.591],"to":[-1.201,2.582]},{"from":[-1.201,2.582],"to":[-1.134,2.574]},{"from":[-1.134,2.574],"to":[-1.063,2.567]},{"from":[-1.063,2.567],"to":[-0.99,2.562]},{"from":[-0.99,2.562],"to":[-0.914,2.558]},{"from":[-0.914,2.558],"to":[-0.836,2.554]},{"from":[-0.836,2.554],"to":[-0.755,2.553]},{"from":[-0.755,2.553],"to":[-0.672,2.552]},{"from":[-0.672,2.552],"to":[-0.587,2.553]},{"from":[-0.587,2.553],"to":[-0.501,2.554]},{"from":[-0.501,2.554],"to":[-0.413,2.558]},{"from":[-0.413,2.558],"to":[-0.325,2.562]},{"from":[-0.325,2.562],"to":[-0.235,2.567]},{"from":[-0.235,2.567],"to":[-0.145,2.574]},{"from":[-0.145,2.574],"to":[-0.054,2.582]},{"from":[-0.054,2.582],"to":[0.037,2.591]},{"from":[0.037,2.591],"to":[0.128,2.601]},{"from":[0.128,2.601],"to":[0.218,2.612]},{"from":[0.218,2.612],"to":[0.308,2.624]},{"from":[0.308,2.624],"to":[0.397,2.638]},{"from":[0.397,2.638],"to":[0.485,2.652]},{"from":[0.485,2.652],"to":[0.571,2.667]},{"from":[0.571,2.667],"to":[0.656,2.683]},{"from":[0.656,2.683],"to":[0.739,2.7]},{"from":[0.739,2.7],"to":[0.821,2.718]},{"from":[0.821,2.718],"to":[0.899,2.737]},{"from":[0.899,2.737],"to":[0.976,2.756]},{"from":[0.976,2.756],"to":[1.05,2.776]},{"from":[1.05,2.776],"to":[1.121,2.797]},{"from":[1.121,2.797],"to":[1.188,2.818]},{"from":[1.188,2.818],"to":[1.253,2.839]},{"from":[1.253,2.839],"to":[1.314,2.862]},{"from":[1.314,2.862],"to":[1.372,2.884]},{"from":[1.372,2.884],"to":[1.425,2.907]},{"from":[1.425,2.907],"to":[1.475,2.93]},{"from":[1.475,2.93],"to":[1.521,2.953]},{"from":[1.521,2.953],"to":[1.563,2.977]},{"from":[1.563,2.977],"to":[1.6,3]},{"from":[1.6,3],"to":[1.633,3.023]},{"from":[1.661,3.047],"to":[1.685,3.07]},{"from":[1.705,3.093],"to":[1.719,3.116]},{"from":[1.729,3.138],"to":[1.735,3.161]},{"from":[1.735,3.182],"to":[1.731,3.203]},{"from":[1.722,3.224],"to":[1.708,3.244]},{"from":[1.689,3.263],"to":[1.666,3.282]},{"from":[1.639,3.3],"to":[1.607,3.317]},{"from":[1.57,3.333],"to":[1.529,3.348]},{"from":[1.484,3.362],"to":[1.435,3.376]},{"from":[1.382,3.388],"to":[1.325,3.399]},{"from":[1.265,3.409],"to":[1.201,3.418]},{"from":[1.134,3.426],"to":[1.063,3.433]},{"from":[0.99,3.438],"to":[0.914,3.442]},{"from":[0.836,3.446],"to":[0.755,3.447]},{"from":[0.672,3.448],"to":[0.587,3.447]},{"from":[0.501,3.446],"to":[0.413,3.442]},{"from":[0.325,3.438],"to":[0.235,3.433]},{"from":[0.145,3.426],"to":[0.054,3.418]},{"from":[-0.037,3.409],"to":[-0.128,3.399]},{"from":[-0.218,3.388],"to":[-0.308,3.376]},{"from":[-0.397,3.362],"to":[-0.485,3.348]},{"from":[-0.571,3.333],"to":[-0.656,3.317]},{"from":[-0.739,3.3],"to":[-0.821,3.282]},{"from":[-0.899,3.263],"to":[-0.976,3.244]},{"from":[-1.05,3.224],"to":[-1.121,3.203]},{"from":[-1.188,3.182],"to":[-1.253,3.161]},{"from":[-1.314,3.138],"to":[-1.372,3.116]},{"from":[-1.425,3.093],"to":[-1.475,3.07]},{"from":[-1.521,3.047],"to":[-1.563,3.023]},{"from":[-1.223,-3.415],"to":[-1.085,-3.193]},{"from":[-1.085,-3.193],"to":[-0.952,-2.982]},{"from":[-0.952,-2.982],"to":[-0.824,-2.781]},{"from":[-0.824,-2.781],"to":[-0.702,-2.59]},{"from":[-0.702,-2.59],"to":[-0.586,-2.409]},{"from":[-0.586,-2.409],"to":[-0.475,-2.239]},{"from":[-0.475,-2.239],"to":[-0.37,-2.079]},{"from":[-0.37,-2.079],"to":[-0.27,-1.929]},{"from":[-0.27,-1.929],"to":[-0.175,-1.79]},{"from":[-0.175,-1.79],"to":[-0.086,-1.661]},{"from":[-0.086,-1.661],"to":[-0.003,-1.542]},{"from":[-0.003,-1.542],"to":[0.075,-1.434]},{"from":[0.075,-1.434],"to":[0.147,-1.336]},{"from":[0.147,-1.336],"to":[0.214,-1.248]},{"from":[0.214,-1.248],"to":[0.276,-1.17]},{"from":[0.276,-1.17],"to":[0.331,-1.103]},{"from":[0.331,-1.103],"to":[0.382,-1.046]},{"from":[0.382,-1.046],"to":[0.427,-1]},{"from":[0.427,-1],"to":[0.466,-0.963]},{"from":[0.466,-0.963],"to":[0.5,-0.938]},{"from":[0.5,-0.938],"to":[0.528,-0.922]},{"from":[0.551,-0.917],"to":[0.569,-0.922]},{"from":[0.581,-0.937],"to":[0.587,-0.963]},{"from":[0.588,-0.999],"to":[0.583,-1.045]},{"from":[0.573,-1.101],"to":[0.558,-1.168]},{"from":[0.536,-1.245],"to":[0.51,-1.333]},{"from":[0.478,-1.431],"to":[0.44,-1.539]},{"from":[0.397,-1.657],"to":[0.348,-1.786]},{"from":[0.294,-1.925],"to":[0.235,-2.075]},{"from":[0.17,-2.234],"to":[0.099,-2.404]}],"texts":[]}
{{< /apfigure >}}

Like the ellipse and hyperbola, the parabola can also be defined by a set of points in the coordinate plane. A parabola is the set of all points $(x,y)$ in a plane that are the same distance from a fixed line, called the **directrix**, and a fixed point (the **focus**) not on the directrix.

In Quadratic Functions, we learned about a parabola's vertex and axis of symmetry. Now we extend the discussion to include other key features of the parabola. Notice that the axis of symmetry passes through the focus and vertex and is perpendicular to the directrix. The vertex is the midpoint between the directrix and the focus.

The line segment that passes through the focus and is parallel to the directrix is called the **latus rectum**. The endpoints of the latus rectum lie on the curve. By definition, the distance $d$ from the focus to any point $P$ on the parabola is equal to the distance from $P$ to the directrix.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola opening upward with a labeled vertex, a focus above the vertex on a dashed vertical axis of symmetry, a dashed horizontal directrix below the vertex, and a dashed horizontal latus rectum through the focus with both endpoints marked on the curve.","xMin":-4,"xMax":6,"yMin":-4.5,"yMax":3,"grid":false,"tickLabels":false,"quadratics":[{"a":0.16666666666666666,"b":-0.3333333333333333,"c":-1.8333333333333333}],"lines":[{"x":1,"dashed":true,"label":"Axis of symmetry"},{"y":-3.5,"dashed":true,"label":"Directrix"}],"points":[{"at":[1,-2],"label":"Vertex"},{"at":[1,-0.5],"label":"Focus"}],"segments":[{"from":[-2,-0.5],"to":[4,-0.5],"dashed":true}],"texts":[{"at":[4.3,-1],"text":"Latus rectum","anchor":"start"}]}
{{< /apfigure >}}

To work with parabolas in the coordinate plane, we consider two cases: those with a vertex at the origin and those with a vertex at a point other than the origin. We begin with the former.

Let $(x,y)$ be a point on the parabola with vertex $(0,0)$, focus $(0,p)$, and directrix $y=-p$. The distance $d$ from point $(x,y)$ to point $(x,-p)$ on the directrix is the difference of the $y$-values: $d=y+p$. The distance from the focus $(0,p)$ to the point $(x,y)$ is also equal to $d$ and can be expressed using the distance formula.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola with vertex at the origin, opening upward. The focus is marked above the vertex, and the directrix is a dashed horizontal line below the vertex. A point (x, y) on the curve connects to the focus by one segment labeled d, and drops straight down to a point (x, negative p) on the directrix by a second segment also labeled d.","xMin":-5,"xMax":5,"yMin":-3,"yMax":4,"grid":false,"tickLabels":false,"quadratics":[{"a":0.16666666666666666}],"lines":[{"y":-1.5,"dashed":true,"label":"y = −p"}],"points":[{"at":[0,0],"label":"(0, 0)"},{"at":[0,1.5],"label":"(0, p)"},{"at":[3,1.5],"label":"(x, y)"},{"at":[3,-1.5],"label":"(x, −p)"}],"segments":[{"from":[0,1.5],"to":[3,1.5]},{"from":[3,1.5],"to":[3,-1.5]}],"texts":[{"at":[1.4,2.1],"text":"d"},{"at":[3.5,0],"text":"d"}]}
{{< /apfigure >}}

Set the two expressions for $d$ equal to each other and solve for $y$ to derive the equation of the parabola. We do this because the distance from $(x,y)$ to $(0,p)$ equals the distance from $(x,y)$ to $(x,-p)$.

$$d=\sqrt{(x-0)^2+(y-p)^2}=\sqrt{x^2+(y-p)^2}$$

$$\sqrt{x^2+(y-p)^2}=y+p$$

We then square both sides of the equation, expand the squared terms, and simplify by combining like terms.

$$
\begin{array}{lrcl}
& x^2+(y-p)^2 &=& (y+p)^2 \\[4pt]
& x^2+y^2-2py+p^2 &=& y^2+2py+p^2 \\[4pt]
& x^2-2py &=& 2py \\[4pt]
& x^2 &=& 4py
\end{array}
$$

The equations of parabolas with vertex $(0,0)$ are $y^2=4px$ when the $x$-axis is the axis of symmetry and $x^2=4py$ when the $y$-axis is the axis of symmetry. These standard forms are given below, along with their general graphs and key features.

{{< callout type="info" >}}
  **Standard Forms of Parabolas with Vertex (0, 0).** The table and figures below summarize the standard features of parabolas with a vertex at the origin.

  | Axis of Symmetry | Equation | Focus | Directrix | Endpoints of Latus Rectum |
  | :--- | :--- | :--- | :--- | :--- |
  | $x$-axis | $y^2=4px$ | $(p,0)$ | $x=-p$ | $(p,\pm2p)$ |
  | $y$-axis | $x^2=4py$ | $(0,p)$ | $y=-p$ | $(\pm2p,p)$ |
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y squared equals 4px with p greater than 0, opening rightward from the origin. The focus is marked at (p, 0), the directrix is a dashed vertical line at x = negative p, and the latus rectum's endpoints are marked at (p, 2p) and (p, negative 2p).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"grid":false,"tickLabels":false,"quadratics":[{"a":0.125,"sideways":true}],"lines":[{"x":-2,"dashed":true,"label":"x = −p"}],"points":[{"at":[0,0],"label":"(0, 0)"},{"at":[2,0],"label":"(p, 0)"},{"at":[2,4],"label":"(p, 2p)"},{"at":[2,-4],"label":"(p, −2p)"}]}
{{< /apfigure >}}

*(a) When $p>0$ and the axis of symmetry is the $x$-axis, the parabola opens right.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y squared equals 4px with p less than 0, opening leftward from the origin. The focus is marked at (p, 0), the directrix is a dashed vertical line at x = negative p, and the latus rectum's endpoints are marked at (p, |2p|) and (p, negative |2p|).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"grid":false,"tickLabels":false,"quadratics":[{"a":-0.125,"sideways":true}],"lines":[{"x":2,"dashed":true,"label":"x = −p"}],"points":[{"at":[0,0],"label":"(0, 0)"},{"at":[-2,0],"label":"(p, 0)"},{"at":[-2,4],"label":"(p, |2p|)"},{"at":[-2,-4],"label":"(p, −|2p|)"}]}
{{< /apfigure >}}

*(b) When $p<0$ and the axis of symmetry is the $x$-axis, the parabola opens left.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola x squared equals 4py with p greater than 0, opening upward from the origin. The focus is marked at (0, p), the directrix is a dashed horizontal line at y = negative p, and the latus rectum's endpoints are marked at (2p, p) and (negative 2p, p).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"grid":false,"tickLabels":false,"quadratics":[{"a":0.125}],"lines":[{"y":-2,"dashed":true,"label":"y = −p"}],"points":[{"at":[0,0],"label":"(0, 0)"},{"at":[0,2],"label":"(0, p)"},{"at":[4,2],"label":"(2p, p)"},{"at":[-4,2],"label":"(−2p, p)"}]}
{{< /apfigure >}}

*(c) When $p>0$ and the axis of symmetry is the $y$-axis, the parabola opens up.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola x squared equals 4py with p less than 0, opening downward from the origin. The focus is marked at (0, p), the directrix is a dashed horizontal line at y = negative p, and the latus rectum's endpoints are marked at (|2p|, p) and (negative |2p|, p).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"grid":false,"tickLabels":false,"quadratics":[{"a":-0.125}],"lines":[{"y":2,"dashed":true,"label":"y = −p"}],"points":[{"at":[0,0],"label":"(0, 0)"},{"at":[0,-2],"label":"(0, p)"},{"at":[4,-2],"label":"(|2p|, p)"},{"at":[-4,-2],"label":"(−|2p|, p)"}]}
{{< /apfigure >}}

*(d) When $p<0$ and the axis of symmetry is the $y$-axis, the parabola opens down.*

The key features of a parabola are its vertex, axis of symmetry, focus, directrix, and latus rectum. When given a standard equation for a parabola centered at the origin, we can easily identify the key features to graph the parabola.

A line is said to be tangent to a curve if it intersects the curve at exactly one point. If we sketch lines tangent to the parabola at the endpoints of the latus rectum, these lines intersect on the axis of symmetry, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y squared equals 24x, opening rightward from the origin, with a dashed vertical directrix at x = negative 6. Two dashed lines run from the point (negative 6, 0) on the directrix to the latus rectum's endpoints at (6, 12) and (6, negative 12), each tangent to the parabola at that endpoint, meeting only at (negative 6, 0) on the axis of symmetry.","xMin":-9,"xMax":9,"yMin":-14,"yMax":14,"grid":false,"tickLabels":false,"quadratics":[{"a":0.041666666666666664,"sideways":true}],"lines":[{"x":-6,"dashed":true,"label":"x = −6"}],"points":[{"at":[0,0],"label":"(0, 0)"},{"at":[6,0],"label":"(6, 0)"},{"at":[6,12],"label":"(6, 12)"},{"at":[6,-12],"label":"(6, −12)"}],"segments":[{"from":[-6,0],"to":[7,13],"dashed":true,"arrow":true},{"from":[-6,0],"to":[7,-13],"dashed":true,"arrow":true}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **How To: Given a standard form equation for a parabola centered at (0, 0), sketch the graph.**

  1. Determine which of the standard forms applies to the given equation: $y^2=4px$ or $x^2=4py$.
  2. Use the standard form identified in Step 1 to determine the axis of symmetry, focus, equation of the directrix, and endpoints of the latus rectum.
     - If the equation is in the form $y^2=4px$, then:
       - the axis of symmetry is the $x$-axis, $y=0$
       - set $4p$ equal to the coefficient of $x$ in the given equation to solve for $p$. If $p>0$, the parabola opens right. If $p<0$, the parabola opens left.
       - use $p$ to find the coordinates of the focus, $(p,0)$
       - use $p$ to find the equation of the directrix, $x=-p$
       - use $p$ to find the endpoints of the latus rectum, $(p,\pm2p)$. Alternately, substitute $x=p$ into the original equation.
     - If the equation is in the form $x^2=4py$, then:
       - the axis of symmetry is the $y$-axis, $x=0$
       - set $4p$ equal to the coefficient of $y$ in the given equation to solve for $p$. If $p>0$, the parabola opens up. If $p<0$, the parabola opens down.
       - use $p$ to find the coordinates of the focus, $(0,p)$
       - use $p$ to find the equation of the directrix, $y=-p$
       - use $p$ to find the endpoints of the latus rectum, $(\pm2p,p)$
  3. Plot the focus, directrix, and latus rectum, and draw a smooth curve to form the parabola.
{{< /callout >}}

**Example.** Graph $y^2=24x$. Identify and label the focus, directrix, and endpoints of the latus rectum.

**Solution.** The standard form that applies to the given equation is $y^2=4px$. Thus, the axis of symmetry is the $x$-axis. It follows that:

- $24=4p$, so $p=6$. Since $p>0$, the parabola opens right.
- the coordinates of the focus are $(p,0)=(6,0)$
- the equation of the directrix is $x=-p=-6$
- the endpoints of the latus rectum have the same $x$-coordinate at the focus. To find the endpoints, substitute $x=6$ into the original equation: $(6,\pm12)$

Next we plot the focus, directrix, and latus rectum, and draw a smooth curve to form the parabola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y squared equals 24x, opening rightward from the origin, with focus at (6, 0), a dashed vertical directrix at x = negative 6, and the latus rectum's endpoints marked at (6, 12) and (6, negative 12).","xMin":-10,"xMax":10,"yMin":-20,"yMax":20,"tickLabels":true,"xTickStep":2,"yTickStep":4,"quadratics":[{"a":0.041666666666666664,"sideways":true}],"lines":[{"x":-6,"dashed":true,"label":"x = −6"}],"points":[{"at":[0,0],"label":"(0, 0)"},{"at":[6,0],"label":"(6, 0)"},{"at":[6,12],"label":"(6, 12)"},{"at":[6,-12],"label":"(6, −12)"}]}
{{< /apfigure >}}

{{< fillin
  question="Graph $y^2=-16x$. Give the coordinates of the focus as an ordered pair."
  answer="(-4,0)"
  answerDisplay="$(-4,0)$"
  hint="Match the equation to $y^2=4px$ to find $p$, then the focus is $(p,0)$."
>}}

{{< fillin
  question="Graph $y^2=-16x$. Give the equation of the directrix, as an equation."
  answer="x=4"
  answerDisplay="$x=4$"
  hint="The directrix of $y^2=4px$ is $x=-p$."
>}}

{{< fillin
  question="Graph $y^2=-16x$. Give both endpoints of the latus rectum as ordered pairs, separated by a comma."
  answer="(-4,8),(-4,-8)"
  answerMode="unordered"
  answerDisplay="$(-4,8)$ and $(-4,-8)$"
  hint="The endpoints of the latus rectum share the focus's $x$-coordinate; substitute it into the original equation and solve for $y$."
>}}

**Example.** Graph $x^2=-6y$. Identify and label the focus, directrix, and endpoints of the latus rectum.

**Solution.** The standard form that applies to the given equation is $x^2=4py$. Thus, the axis of symmetry is the $y$-axis. It follows that:

- $-6=4p$, so $p=-\tfrac{3}{2}$. Since $p<0$, the parabola opens down.
- the coordinates of the focus are $(0,p)=\left(0,-\tfrac{3}{2}\right)$
- the equation of the directrix is $y=-p=\tfrac{3}{2}$
- the endpoints of the latus rectum can be found by substituting $y=\tfrac{3}{2}$ into the original equation, $\left(\pm3,-\tfrac{3}{2}\right)$

Next we plot the focus, directrix, and latus rectum, and draw a smooth curve to form the parabola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola x squared equals negative 6y, opening downward from the origin, with focus at (0, negative 3/2), a dashed horizontal directrix at y = 3/2, and the latus rectum's endpoints marked at (3, negative 3/2) and (negative 3, negative 3/2).","xMin":-4,"xMax":4,"yMin":-3,"yMax":1,"grid":false,"tickLabels":false,"quadratics":[{"a":-0.16666666666666666}],"lines":[{"y":1.5,"dashed":true,"label":"y = 3/2"}],"points":[{"at":[0,0],"label":"(0, 0)"},{"at":[0,-1.5],"label":"(0, −3/2)"},{"at":[3,-1.5],"label":"(3, −3/2)","labelSide":"e"},{"at":[-3,-1.5],"label":"(−3, −3/2)","labelSide":"w"}]}
{{< /apfigure >}}

{{< fillin
  question="Graph $x^2=8y$. Give the coordinates of the focus as an ordered pair."
  answer="(0,2)"
  answerDisplay="$(0,2)$"
  hint="Match the equation to $x^2=4py$ to find $p$, then the focus is $(0,p)$."
>}}

{{< fillin
  question="Graph $x^2=8y$. Give the equation of the directrix, as an equation."
  answer="y=-2"
  answerDisplay="$y=-2$"
  hint="The directrix of $x^2=4py$ is $y=-p$."
>}}

{{< fillin
  question="Graph $x^2=8y$. Give both endpoints of the latus rectum as ordered pairs, separated by a comma."
  answer="(4,2),(-4,2)"
  answerMode="unordered"
  answerDisplay="$(4,2)$ and $(-4,2)$"
  hint="The endpoints of the latus rectum share the focus's $y$-coordinate; substitute it into the original equation and solve for $x$."
>}}

### Writing Equations of Parabolas in Standard Form

In the previous examples, we used the standard form equation of a parabola to calculate the locations of its key features. We can also use the calculations in reverse to write an equation for a parabola when given its key features.

{{< callout type="info" >}}
  **How To: Given its focus and directrix, write the equation for a parabola in standard form.**

  1. Determine whether the axis of symmetry is the $x$- or $y$-axis.
     - If the given coordinates of the focus have the form $(p,0)$, then the axis of symmetry is the $x$-axis. Use the standard form $y^2=4px$.
     - If the given coordinates of the focus have the form $(0,p)$, then the axis of symmetry is the $y$-axis. Use the standard form $x^2=4py$.
  2. Multiply $4p$.
  3. Substitute the value from Step 2 into the equation determined in Step 1.
{{< /callout >}}

**Example.** What is the equation for the parabola with focus $\left(-\tfrac{1}{2},0\right)$ and directrix $x=\tfrac{1}{2}$?

**Solution.** The focus has the form $(p,0)$, so the equation will have the form $y^2=4px$.

- Multiplying $4p$, we have $4p=4\left(-\tfrac{1}{2}\right)=-2$.
- Substituting for $4p$, we have $y^2=4px=-2x$.

Therefore, the equation for the parabola is $y^2=-2x$.

{{< fillin
  question="What is the equation for the parabola with focus $\left(0,\tfrac{7}{2}\right)$ and directrix $y=-\tfrac{7}{2}$? Write the equation in standard form."
  answer="x^2=14y"
  answerForm="parabola-standard-form"
  answerDisplay="$x^2=14y$"
  hint="The focus has the form $(0,p)$, so the equation has the form $x^2=4py$; substitute $p=\tfrac{7}{2}$."
>}}

### Graphing Parabolas with Vertices Not at the Origin

Like other graphs we've worked with, the graph of a parabola can be translated. If a parabola is translated $h$ units horizontally and $k$ units vertically, the vertex will be $(h,k)$. This translation results in the standard form of the equation we saw previously with $x$ replaced by $(x-h)$ and $y$ replaced by $(y-k)$.

To graph parabolas with a vertex $(h,k)$ other than the origin, we use the standard form $(y-k)^2=4p(x-h)$ for parabolas that have an axis of symmetry parallel to the $x$-axis, and $(x-h)^2=4p(y-k)$ for parabolas that have an axis of symmetry parallel to the $y$-axis. These standard forms are given below, along with their general graphs and key features.

{{< callout type="info" >}}
  **Standard Forms of Parabolas with Vertex ($h$, $k$).** The table and figures below summarize the standard features of parabolas with a vertex at a point $(h,k)$.

  | Axis of Symmetry | Equation | Focus | Directrix | Endpoints of Latus Rectum |
  | :--- | :--- | :--- | :--- | :--- |
  | $y=k$ | $(y-k)^2=4p(x-h)$ | $(h+p,k)$ | $x=h-p$ | $(h+p,k\pm2p)$ |
  | $x=h$ | $(x-h)^2=4p(y-k)$ | $(h,k+p)$ | $y=k-p$ | $(h\pm2p,k+p)$ |
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola (y minus k) squared equals 4p(x minus h) with p greater than 0, opening rightward from vertex (h, k). The focus is marked at (h+p, k), the directrix is a dashed vertical line at x = h−p, and the latus rectum's endpoints are marked at (h+p, k+2p) and (h+p, k−2p).","xMin":-4,"xMax":6,"yMin":-5,"yMax":7,"grid":false,"tickLabels":false,"quadratics":[{"a":0.125,"b":-0.25,"c":1.125,"sideways":true}],"lines":[{"x":-1,"dashed":true,"label":"x = h−p"},{"y":1,"dashed":true,"label":"y = k"}],"points":[{"at":[1,1],"label":"(h, k)"},{"at":[3,1],"label":"(h+p, k)"},{"at":[3,5],"label":"(h+p, k+2p)"},{"at":[3,-3],"label":"(h+p, k−2p)"}]}
{{< /apfigure >}}

*(a) When $p>0$, the parabola opens right.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola (y minus k) squared equals 4p(x minus h) with p less than 0, opening leftward from vertex (h, k). The focus is marked at (h+p, k), the directrix is a dashed vertical line at x = h−p, and the latus rectum's endpoints are marked at (h+p, k+|2p|) and (h+p, k−|2p|).","xMin":-4,"xMax":6,"yMin":-5,"yMax":7,"grid":false,"tickLabels":false,"quadratics":[{"a":-0.125,"b":0.25,"c":0.875,"sideways":true}],"lines":[{"x":3,"dashed":true,"label":"x = h−p"},{"y":1,"dashed":true,"label":"y = k"}],"points":[{"at":[1,1],"label":"(h, k)"},{"at":[-1,1],"label":"(h+p, k)"},{"at":[-1,-3],"label":"(h+p, k−|2p|)"},{"at":[-1,5],"label":"(h+p, k+|2p|)"}]}
{{< /apfigure >}}

*(b) When $p<0$, the parabola opens left.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola (x minus h) squared equals 4p(y minus k) with p greater than 0, opening upward from vertex (h, k). The focus is marked at (h, k+p), the directrix is a dashed horizontal line at y = k−p, and the latus rectum's endpoints are marked at (h+2p, k+p) and (h−2p, k+p).","xMin":-5,"xMax":7,"yMin":-4,"yMax":6,"grid":false,"tickLabels":false,"quadratics":[{"a":0.125,"b":-0.25,"c":1.125}],"lines":[{"y":-1,"dashed":true,"label":"y = k−p"},{"x":1,"dashed":true,"label":"x = h"}],"points":[{"at":[1,1],"label":"(h, k)"},{"at":[1,3],"label":"(h, k+p)"},{"at":[5,3],"label":"(h+2p, k+p)","labelSide":"e"},{"at":[-3,3],"label":"(h−2p, k+p)","labelSide":"w"}]}
{{< /apfigure >}}

*(c) When $p>0$, the parabola opens up.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola (x minus h) squared equals 4p(y minus k) with p less than 0, opening downward from vertex (h, k). The focus is marked at (h, k+p), the directrix is a dashed horizontal line at y = k−p, and the latus rectum's endpoints are marked at (h+|2p|, k+p) and (h−|2p|, k+p).","xMin":-5,"xMax":7,"yMin":-4,"yMax":6,"grid":false,"tickLabels":false,"quadratics":[{"a":-0.125,"b":0.25,"c":0.875}],"lines":[{"y":3,"dashed":true,"label":"y = k−p"},{"x":1,"dashed":true,"label":"x = h"}],"points":[{"at":[1,1],"label":"(h, k)"},{"at":[1,-1],"label":"(h, k+p)"},{"at":[5,-1],"label":"(h+|2p|, k+p)","labelSide":"e"},{"at":[-3,-1],"label":"(h−|2p|, k+p)","labelSide":"w"}]}
{{< /apfigure >}}

*(d) When $p<0$, the parabola opens down.*

{{< callout type="info" >}}
  **How To: Given a standard form equation for a parabola centered at (h, k), sketch the graph.**

  1. Determine which of the standard forms applies to the given equation: $(y-k)^2=4p(x-h)$ or $(x-h)^2=4p(y-k)$.
  2. Use the standard form identified in Step 1 to determine the vertex, axis of symmetry, focus, equation of the directrix, and endpoints of the latus rectum.
     - If the equation is in the form $(y-k)^2=4p(x-h)$, then:
       - use the given equation to identify $h$ and $k$ for the vertex, $(h,k)$
       - use the value of $k$ to determine the axis of symmetry, $y=k$
       - set $4p$ equal to the coefficient of $(x-h)$ in the given equation to solve for $p$. If $p>0$, the parabola opens right. If $p<0$, the parabola opens left.
       - use $h,k,$ and $p$ to find the coordinates of the focus, $(h+p,k)$
       - use $h$ and $p$ to find the equation of the directrix, $x=h-p$
       - use $h,k,$ and $p$ to find the endpoints of the latus rectum, $(h+p,k\pm2p)$
     - If the equation is in the form $(x-h)^2=4p(y-k)$, then:
       - use the given equation to identify $h$ and $k$ for the vertex, $(h,k)$
       - use the value of $h$ to determine the axis of symmetry, $x=h$
       - set $4p$ equal to the coefficient of $(y-k)$ in the given equation to solve for $p$. If $p>0$, the parabola opens up. If $p<0$, the parabola opens down.
       - use $h,k,$ and $p$ to find the coordinates of the focus, $(h,k+p)$
       - use $k$ and $p$ to find the equation of the directrix, $y=k-p$
       - use $h,k,$ and $p$ to find the endpoints of the latus rectum, $(h\pm2p,k+p)$
  3. Plot the vertex, axis of symmetry, focus, directrix, and latus rectum, and draw a smooth curve to form the parabola.
{{< /callout >}}

**Example.** Graph $(y-1)^2=-16(x+3)$. Identify and label the vertex, axis of symmetry, focus, directrix, and endpoints of the latus rectum.

**Solution.** The standard form that applies to the given equation is $(y-k)^2=4p(x-h)$. Thus, the axis of symmetry is parallel to the $x$-axis. It follows that:

- the vertex is $(h,k)=(-3,1)$
- the axis of symmetry is $y=k=1$
- $-16=4p$, so $p=-4$. Since $p<0$, the parabola opens left.
- the coordinates of the focus are $(h+p,k)=(-3+(-4),1)=(-7,1)$
- the equation of the directrix is $x=h-p=-3-(-4)=1$
- the endpoints of the latus rectum are $(h+p,k\pm2p)=(-3+(-4),1\pm2(-4))$, or $(-7,-7)$ and $(-7,9)$

Next we plot the vertex, axis of symmetry, focus, directrix, and latus rectum, and draw a smooth curve to form the parabola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola (y minus 1) squared equals negative 16(x + 3), opening leftward from vertex (negative 3, 1), with focus at (negative 7, 1), a dashed vertical directrix at x = 1, a dashed horizontal axis of symmetry at y = 1, and the latus rectum's endpoints marked at (negative 7, negative 7) and (negative 7, 9).","xMin":-10,"xMax":3,"yMin":-9,"yMax":11,"grid":false,"tickLabels":false,"quadratics":[{"a":-0.0625,"b":0.125,"c":-3.0625,"sideways":true}],"lines":[{"x":1,"dashed":true,"label":"x = 1"},{"y":1,"dashed":true,"label":"y = 1"}],"points":[{"at":[-3,1],"label":"(−3, 1)"},{"at":[-7,1],"label":"(−7, 1)"},{"at":[-7,9],"label":"(−7, 9)"},{"at":[-7,-7],"label":"(−7, −7)"}]}
{{< /apfigure >}}

{{< fillin
  question="Graph $(y+1)^2=4(x-8)$. Give the vertex as an ordered pair."
  answer="(8,-1)"
  answerDisplay="$(8,-1)$"
  hint="Match the equation to $(y-k)^2=4p(x-h)$; the vertex is $(h,k)$."
>}}

{{< fillin
  question="Graph $(y+1)^2=4(x-8)$. Give the coordinates of the focus as an ordered pair."
  answer="(9,-1)"
  answerDisplay="$(9,-1)$"
  hint="With $(h,k)=(8,-1)$ and $4p=4$, the focus is $(h+p,k)$."
>}}

{{< fillin
  question="Graph $(y+1)^2=4(x-8)$. Give both endpoints of the latus rectum as ordered pairs, separated by a comma."
  answer="(9,1),(9,-3)"
  answerMode="unordered"
  answerDisplay="$(9,1)$ and $(9,-3)$"
  hint="The endpoints of the latus rectum are $(h+p,k\pm2p)$."
>}}

**Example.** Graph $x^2-8x-28y-208=0$. Identify and label the vertex, axis of symmetry, focus, directrix, and endpoints of the latus rectum.

**Solution.** Start by writing the equation of the parabola in standard form. The standard form that applies to the given equation is $(x-h)^2=4p(y-k)$. Thus, the axis of symmetry is parallel to the $y$-axis. To express the equation of the parabola in this form, we begin by isolating the terms that contain the variable $x$ in order to complete the square.

$$
\begin{array}{lrcl}
& x^2-8x-28y-208 &=& 0 \\[4pt]
& x^2-8x &=& 28y+208 \\[4pt]
& x^2-8x+16 &=& 28y+208+16 \\[4pt]
& (x-4)^2 &=& 28y+224 \\[4pt]
& (x-4)^2 &=& 28(y+8) \\[4pt]
& (x-4)^2 &=& 4\cdot7\cdot(y+8)
\end{array}
$$

It follows that:

- the vertex is $(h,k)=(4,-8)$
- the axis of symmetry is $x=h=4$
- since $p=7$, $p>0$ and so the parabola opens up
- the coordinates of the focus are $(h,k+p)=(4,-8+7)=(4,-1)$
- the equation of the directrix is $y=k-p=-8-7=-15$
- the endpoints of the latus rectum are $(h\pm2p,k+p)=(4\pm2(7),-8+7)$, or $(-10,-1)$ and $(18,-1)$

Next we plot the vertex, axis of symmetry, focus, directrix, and latus rectum, and draw a smooth curve to form the parabola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola (x minus 4) squared equals 28(y + 8), opening upward from vertex (4, negative 8), with focus at (4, negative 1), a dashed horizontal directrix at y = negative 15, a dashed vertical axis of symmetry at x = 4, and the latus rectum's endpoints marked at (negative 10, negative 1) and (18, negative 1).","xMin":-13,"xMax":21,"yMin":-17,"yMax":3,"grid":false,"tickLabels":false,"quadratics":[{"a":0.03571428571428571,"b":-0.2857142857142857,"c":-7.428571428571429}],"lines":[{"y":-15,"dashed":true,"label":"y = −15"},{"x":4,"dashed":true,"label":"x = 4"}],"points":[{"at":[4,-8],"label":"(4, −8)"},{"at":[4,-1],"label":"(4, −1)"},{"at":[-10,-1],"label":"(−10, −1)"},{"at":[18,-1],"label":"(18, −1)"}]}
{{< /apfigure >}}

{{< fillin
  question="Graph $(x+2)^2=-20(y-3)$. Give the vertex as an ordered pair."
  answer="(-2,3)"
  answerDisplay="$(-2,3)$"
  hint="This equation is already in standard form $(x-h)^2=4p(y-k)$; the vertex is $(h,k)$."
>}}

{{< fillin
  question="Graph $(x+2)^2=-20(y-3)$. Give the equation of the directrix, as an equation."
  answer="y=8"
  answerDisplay="$y=8$"
  hint="With $(h,k)=(-2,3)$ and $4p=-20$, the directrix is $y=k-p$."
>}}

{{< fillin
  question="Graph $(x+2)^2=-20(y-3)$. Give both endpoints of the latus rectum as ordered pairs, separated by a comma."
  answer="(-12,-2),(8,-2)"
  answerMode="unordered"
  answerDisplay="$(-12,-2)$ and $(8,-2)$"
  hint="The endpoints of the latus rectum are $(h\pm2p,k+p)$."
>}}

### Solving Applied Problems Involving Parabolas

As we mentioned at the beginning of the section, parabolas are used to design many objects we use every day, such as telescopes, suspension bridges, microphones, and radar equipment. Parabolic mirrors, such as the one used to light the Olympic torch, have a very unique reflecting property. When rays of light parallel to the parabola's axis of symmetry are directed toward any surface of the mirror, the light is reflected directly to the focus. This is why the Olympic torch is ignited when it is held at the focus of the parabolic mirror.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabolic reflector opening to the right. Three parallel rays of sunlight, all traveling horizontally leftward, strike the inside of the reflector and each reflects toward a single focus point inside the curve.","xMin":-1,"xMax":5,"yMin":-5,"yMax":5,"grid":false,"tickLabels":false,"quadratics":[{"a":0.125,"sideways":true}],"points":[{"at":[2,0],"label":"Focus"}],"segments":[{"from":[4,3],"to":[1.125,3],"arrow":true},{"from":[1.125,3],"to":[2,0],"arrow":true},{"from":[4,1],"to":[0.125,1],"arrow":true},{"from":[0.125,1],"to":[2,0],"arrow":true},{"from":[4,-3.5],"to":[1.53125,-3.5],"arrow":true},{"from":[1.53125,-3.5],"to":[2,0],"arrow":true}],"texts":[{"at":[-0.3,-4.7],"text":"Parabolic reflector","anchor":"end"},{"at":[3.4,4.8],"text":"Parallel rays of sunlight","anchor":"start"}]}
{{< /apfigure >}}

Parabolic mirrors have the ability to focus the sun's energy to a single point, raising the temperature hundreds of degrees in a matter of seconds. Thus, parabolic mirrors are featured in many low-cost, energy efficient solar products, such as solar cookers, solar heaters, and even travel-sized fire starters.

**Example.** A cross-section of a design for a travel-sized solar fire starter is shown below. The sun's rays reflect off the parabolic mirror toward an object attached to the igniter. Because the igniter is located at the focus of the parabola, the reflected rays cause the object to burn in just seconds.

- Find the equation of the parabola that models the fire starter. Assume that the vertex of the parabolic mirror is the origin of the coordinate plane.
- Use the equation found in the first part to find the depth of the fire starter.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Cross-section of a travel-sized solar fire starter: a shallow upward-opening parabolic dish 4.5 inches wide at its rim, with the igniter mounted 1.7 inches above the vertex on a vertical post, and the dish's own depth — the shorter vertical distance from the rim down to the vertex — marked separately alongside it.","xMin":-3,"xMax":3.3,"yMin":-0.7,"yMax":2.1,"grid":false,"tickLabels":false,"quadratics":[{"a":0.14705882352941177,"arrows":false,"from":-2.25,"to":2.25}],"points":[{"at":[0,1.7]}],"segments":[{"from":[0,0],"to":[0,1.7]},{"from":[-2.25,-0.45],"to":[2.25,-0.45],"arrow":"both","label":"4.5 in"},{"from":[2.85,0],"to":[2.85,0.7444852941176471],"arrow":"both"}],"texts":[{"at":[0.25,1.7],"text":"Igniter","anchor":"start"},{"at":[-0.15,0.85],"text":"1.7 in","anchor":"end"},{"at":[3.05,1.05],"text":"Depth","anchor":"start"}]}
{{< /apfigure >}}

**Solution.**

- The vertex of the dish is the origin of the coordinate plane, so the parabola will take the standard form $x^2=4py$, where $p>0$. The igniter, which is the focus, is 1.7 inches above the vertex of the dish. Thus we have $p=1.7$.

  $$
  \begin{array}{lrcl}
  & x^2 &=& 4py \\[4pt]
  & x^2 &=& 4(1.7)y \\[4pt]
  & x^2 &=& 6.8y
  \end{array}
  $$

- The dish extends $\tfrac{4.5}{2}=2.25$ inches on either side of the origin. We can substitute $2.25$ for $x$ in the equation from the first part to find the depth of the dish.

  $$
  \begin{array}{lrcl}
  & x^2 &=& 6.8y \\[4pt]
  & (2.25)^2 &=& 6.8y \\[4pt]
  & y &\approx& 0.74
  \end{array}
  $$

The dish is about $0.74$ inches deep.

{{< fillin
  question="Balcony-sized solar cookers have been designed for families living in India. The top of a dish has a diameter of $1{,}600$ mm. The sun's rays reflect off the parabolic mirror toward the \"cooker,\" which is placed $320$ mm from the base. Find an equation that models a cross-section of the solar cooker. Assume that the vertex of the parabolic mirror is the origin of the coordinate plane, and that the parabola opens to the right (i.e., has the $x$-axis as its axis of symmetry). Write the equation in standard form."
  answer="y^2=1280x"
  answerForm="parabola-standard-form"
  answerDisplay="$y^2=1280x$"
  hint="The parabola takes the form $y^2=4px$ with $p=320$, the focus distance."
>}}

{{< fillin
  question="Using the equation found for the solar cooker's cross-section, $y^2=1280x$, find the depth of the cooker in millimeters."
  answer="500"
  answerDisplay="$500\text{ mm}$"
  hint="The dish extends half the $1{,}600$ mm diameter, or $800$ mm, on either side of the origin; substitute that for $y$ and solve for $x$."
>}}

{{< callout type="info" >}}
**Media.** Access these online resources for additional instruction and
practice with parabolas.
{{< /callout >}}

## Key equations

| Parabola, vertex at origin, axis of symmetry on $x$-axis | $y^2=4px$ |
| :--- | :--- |
| Parabola, vertex at origin, axis of symmetry on $y$-axis | $x^2=4py$ |
| Parabola, vertex at $(h,k)$, axis of symmetry on $x$-axis | $(y-k)^2=4p(x-h)$ |
| Parabola, vertex at $(h,k)$, axis of symmetry on $y$-axis | $(x-h)^2=4p(y-k)$ |

## Key concepts

- A parabola is the set of all points $(x,y)$ in a plane that are the same distance from a fixed line, called the directrix, and a fixed point (the focus) not on the directrix.
- The standard form of a parabola with vertex $(0,0)$ and the $x$-axis as its axis of symmetry can be used to graph the parabola. If $p>0$, the parabola opens right. If $p<0$, the parabola opens left.
- The standard form of a parabola with vertex $(0,0)$ and the $y$-axis as its axis of symmetry can be used to graph the parabola. If $p>0$, the parabola opens up. If $p<0$, the parabola opens down.
- When given the focus and directrix of a parabola, we can write its equation in standard form.
- The standard form of a parabola with vertex $(h,k)$ and axis of symmetry parallel to the $x$-axis can be used to graph the parabola. If $p>0$, the parabola opens right. If $p<0$, the parabola opens left.
- The standard form of a parabola with vertex $(h,k)$ and axis of symmetry parallel to the $y$-axis can be used to graph the parabola. If $p>0$, the parabola opens up. If $p<0$, the parabola opens down.
- Real-world situations can be modeled using the standard equations of parabolas. For instance, given the diameter and focus of a cross-section of a parabolic reflector, we can find an equation that models its sides.

## Practice

### Graph parabolas with vertices at the origin

{{< fillin
  question="For the equation $x=8y^2$, rewrite it in standard form."
  answer="y^2=\frac{1}{8}x"
  answerForm="parabola-standard-form"
  answerDisplay="$y^2=\tfrac{1}{8}x$"
  hint="Divide both sides by $8$ so the squared term stands alone."
>}}

{{< fillin
  question="For the equation $x=8y^2$, rewritten in standard form as $y^2=\tfrac{1}{8}x$, give the coordinates of the focus as an ordered pair."
  answer="(1/32,0)"
  answerDisplay="$\left(\tfrac{1}{32},0\right)$"
  hint="Match $y^2=\tfrac18x$ to $y^2=4px$ to find $p$; the focus is $(p,0)$."
>}}

{{< fillin
  question="For the equation $y=-4x^2$, rewrite it in standard form."
  answer="x^2=-\frac{1}{4}y"
  answerForm="parabola-standard-form"
  answerDisplay="$x^2=-\tfrac{1}{4}y$"
  hint="Divide both sides by $-4$ so the squared term stands alone."
>}}

{{< fillin
  question="For the equation $y=-4x^2$, rewritten in standard form as $x^2=-\tfrac{1}{4}y$, give the equation of the directrix, as an equation."
  answer="y=1/16"
  answerDisplay="$y=\tfrac{1}{16}$"
  hint="Match $x^2=-\tfrac14y$ to $x^2=4py$ to find $p$; the directrix is $y=-p$."
>}}

{{< fillin
  question="For the equation $x=36y^2$, rewrite it in standard form."
  answer="y^2=\frac{1}{36}x"
  answerForm="parabola-standard-form"
  answerDisplay="$y^2=\tfrac{1}{36}x$"
  hint="Divide both sides by $36$ so the squared term stands alone."
>}}

{{< fillin
  question="For the equation $x=36y^2$, rewritten in standard form as $y^2=\tfrac{1}{36}x$, give both endpoints of the latus rectum as ordered pairs, separated by a comma."
  answer="(1/144,1/72),(1/144,-1/72)"
  answerMode="unordered"
  answerDisplay="$\left(\tfrac{1}{144},\tfrac{1}{72}\right)$ and $\left(\tfrac{1}{144},-\tfrac{1}{72}\right)$"
  hint="Match $y^2=\tfrac1{36}x$ to $y^2=4px$ to find $p$; the endpoints are $(p,\pm2p)$."
>}}

### Write equations of parabolas in standard form

{{< fillin
  question="The vertex of a parabola is $(-3,-1)$, and the endpoints of its latus rectum are $(0,5)$ and $(0,-7)$. Find the equation of the parabola, in standard form."
  answer="(y+1)^2=12(x+3)"
  answerForm="parabola-standard-form"
  answerDisplay="$(y+1)^2=12(x+3)$"
  hint="The latus rectum endpoints share the focus's $x$-coordinate, $0$; use it with the vertex to find $p$, then form $(y-k)^2=4p(x-h)$."
>}}

{{< fillin
  question="A parabola has vertex $(0,0)$, directrix $y=4$, and focus $(0,-4)$. Find the equation of the parabola, in standard form."
  answer="x^2=-16y"
  answerForm="parabola-standard-form"
  answerDisplay="$x^2=-16y$"
  hint="The focus has the form $(0,p)$, so the equation has the form $x^2=4py$."
>}}

{{< fillin
  question="The graph below shows a parabola with vertex $(0,0)$ and focus $\left(0,\tfrac{1}{4}\right)$, opening upward along a vertical axis of symmetry. Find the equation of the parabola, in standard form."
  answer="x^2=y"
  answerForm="parabola-standard-form"
  answerDisplay="$x^2=y$"
  hint="The focus has the form $(0,p)$, so the equation has the form $x^2=4py$."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola with vertex at (0, 0). A dashed vertical axis of symmetry passes through the vertex and the focus, which is marked at (0, 1/4).","xMin":-3,"xMax":3,"yMin":-1,"yMax":4,"grid":false,"tickLabels":false,"quadratics":[{"a":1}],"lines":[{"x":0,"dashed":true}],"points":[{"at":[0,0],"label":"Vertex (0, 0)"},{"at":[0,0.25],"label":"Focus (0, 1/4)"}],"texts":[{"at":[-2.05,3],"text":"Axis of symmetry","anchor":"end"}]}
{{< /apfigure >}}

### Graph parabolas with vertices not at the origin

{{< fillin
  question="Rewrite $y^2+12x-6y+21=0$ in standard form by completing the square."
  answer="(y-3)^2=-12(x+1)"
  answerForm="parabola-standard-form"
  answerDisplay="$(y-3)^2=-12(x+1)$"
  hint="Isolate the $y$-terms on one side, complete the square in $y$, and collect the $x$-terms on the other side."
>}}

{{< fillin
  question="For the parabola $y^2+12x-6y+21=0$, rewritten in standard form as $(y-3)^2=-12(x+1)$, give the vertex as an ordered pair."
  answer="(-1,3)"
  answerDisplay="$(-1,3)$"
  hint="Match $(y-3)^2=-12(x+1)$ to $(y-k)^2=4p(x-h)$; the vertex is $(h,k)$."
>}}

{{< fillin
  question="For the parabola $y^2+12x-6y+21=0$, rewritten in standard form as $(y-3)^2=-12(x+1)$, give the equation of the directrix, as an equation."
  answer="x=2"
  answerDisplay="$x=2$"
  hint="With $(h,k)=(-1,3)$ and $4p=-12$, the directrix is $x=h-p$."
>}}

{{< fillin
  question="Rewrite $x^2-4x+2y-6=0$ in standard form by completing the square, then give the coordinates of the focus as an ordered pair."
  answer="(2,4.5)"
  answerDisplay="$\left(2,\tfrac{9}{2}\right)$"
  hint="Completing the square gives $(x-2)^2=-2(y-5)$; match it to $(x-h)^2=4p(y-k)$, and the focus is $(h,k+p)$."
>}}

{{< fillin
  question="For the parabola $x^2-4x+2y-6=0$, rewritten in standard form as $(x-2)^2=-2(y-5)$, give the axis of symmetry, as an equation."
  answer="x=2"
  answerDisplay="$x=2$"
  hint="With $(h,k)=(2,5)$, the axis of symmetry parallel to the $y$-axis is $x=h$."
>}}

### Solve applied problems involving parabolas

{{< fillin
  question="The mirror in an automobile headlight has a parabolic cross-section with the light bulb at the focus. On a schematic, the equation of the parabola is given as $x^2=4y$. At what coordinates should you place the light bulb?"
  answer="(0,1)"
  answerDisplay="$(0,1)$"
  hint="Match $x^2=4y$ to $x^2=4py$ to find $p$; the focus is $(0,p)$."
>}}

{{< fillin
  question="A satellite dish is shaped like a paraboloid of revolution, formed by rotating a parabola around its axis of symmetry, with the receiver at the focus. If the dish is $12$ feet across at its opening and $4$ feet deep at its center, how many feet above the vertex should the receiver be placed?"
  answer="2.25"
  answerDisplay="$2.25$ feet"
  hint="With the vertex at the origin and the axis of symmetry vertical, the rim point $(6,4)$ satisfies $x^2=4py$; solve for $p$."
>}}

{{< fillin
  question="An arch is in the shape of a parabola. It has a span of $100$ feet and a maximum height of $20$ feet. Find the equation of the parabola, with the vertex at the top of the arch and the ends of the span on the $x$-axis, in standard form."
  answer="x^2=-125(y-20)"
  answerForm="parabola-standard-form"
  answerDisplay="$x^2=-125(y-20)$"
  hint="The vertex is $(0,20)$ and the arch meets the $x$-axis at $(\pm50,0)$; substitute one endpoint into $(x-h)^2=4p(y-k)$ to solve for $p$."
>}}

{{< fillin
  question="Using the arch equation $x^2=-125(y-20)$, determine the height of the arch $40$ feet from the center, rounded to one decimal place."
  answer="7.2"
  answerForm="decimal"
  answerDisplay="$7.2$ feet"
  hint="Substitute $x=40$ into the standard-form equation and solve for $y$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 10.3: The Parabola](https://openstax.org/books/precalculus-2e/pages/10-3-the-parabola) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted a `coreq-skills` block the pinned CNXML prepends before the section proper (its own two-objective review of graphing vertical and horizontal parabolas from general or standard form, keyed to Intermediate Algebra 11.2.1/11.2.2, complete with its own worked examples and two "Practice Makes Perfect" exercise sets) — confirmed against the rendered PDF, page 1042 (true PDF index 1052), where Real-World Applications exercise 70 of the previous section runs directly into the "10.3 The Parabola" heading with no corequisite-skills material between them. Omitted the credit photograph of Katherine Johnson, keeping the two biographical paragraphs that introduce it. Recreated every instructional figure as an accessible spec-first SVG, each independently checked against the rendered PDF: the double-cone "Parabola" formation figure (Figure 2), drawn as an exact schematic — a right double cone and a cutting plane parallel to one generator, with the base circles, the cone silhouettes, and the parabolic trace all computed from the cone equation under a fixed oblique projection, hidden portions dashed — and corrected to match the section's own prose ("If the plane is parallel to the edge of the cone, an unbounded curve is formed") and the rendered art (a plane crossing only one nappe) rather than the pinned CNXML's alt text for that figure — a source defect, detailed below; the generic key-features figure (Figure 3) and the point-on-the-parabola derivation figure (Figure 4), both drawn with representative numbers since the source states them symbolically; the four-panel standard-forms-at-the-origin figure (Figure 5) and its vertex-$(h,k)$ counterpart (Figure 9), each panel independently re-derived from $p=\pm2$ (and $h=k=1$ for Figure 9) rather than traced from the source art, with the negative-$p$ panels' latus-rectum labels kept in the source's own $\lvert 2p\rvert$ form; the tangent-lines figure (Figure 6); both Example figures for the origin case (Figures 7 and 8) and both for the vertex-$(h,k)$ case (Figures 10 and 11); the reflecting-property schematic (Figure 12), with three representative parallel rays reflecting to the focus (the source's exact ray count and angles are not stated); and the fire-starter cross-section (Figure 13), the given diagram for that example, drawn to the stated $1.7$-inch focus height and $4.5$-inch width with its own (shorter, unlabeled) depth marked separately, matching the source's convention of leaving the solved depth off the given figure. Kept the "Media" callout's introductory sentence but omitted its four external video links, matching house precedent elsewhere in this book. Every "write in standard form" fill-in declares `answerForm="parabola-standard-form"` (added to the grading engine for this chapter), replayed against its own general-form span to confirm the token reports `form` rather than `correct`; focus and vertex are keyed as ordered pairs, directrix and axis of symmetry as equations ("as an equation" stated in the question, since a bare number also grades correct against the equation but the reverse does not hold), and latus rectum endpoints as an `answerMode="unordered"` two-member list, per this book's established convention for a `\pm`-unparseable pair. Two end-of-section "given vertex, focus, and directrix" items (exercises 47 and 49 in the Graphical set) were independently solved but not used: both have an irrational $4p$ (a $\sqrt2$ or $\sqrt5$ coefficient on the linear term), and `parabola-standard-form`'s coefficient pattern accepts only an integer, decimal, or written fraction — the correct keyed answer for either item reports `form` against itself, so neither is retype-safe under the token this chapter requires. The three algebraic "rewrite in standard form, then determine the vertex, focus, and directrix" exercises used for the vertex-at-the-origin objective keep only the standard-form rewrite and one non-trivial feature (focus, directrix, or latus rectum) as components, omitting a redundant "give the vertex" component, since the vertex is $(0,0)$ for every exercise in that family by construction and restating it tests nothing the standard-form component does not already require. "Determine the equation for the parabola from its graph" exercise 51 (vertex $(0,0)$, focus $\left(0,\tfrac14\right)$, both printed directly on the source's own graph) was recreated as an accessible given-figure feeding a standard-form fill-in, the same treatment the fire-starter's given diagram receives; two sibling items in that set (exercises 52, 54) carry no printed solution and were not used. Eleven selected end-of-section exercises were adapted into eighteen interactive Practice components across four objective groups, every one independently re-derived (including by running the arithmetic in Node) rather than read off the source key.</small>
