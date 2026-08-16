---
title: Quadratic Functions
description: >-
  Recognizing the characteristics of a parabola, relating its graph to the
  general and standard forms of a quadratic function, finding a quadratic
  function's minimum or maximum value, and solving area, revenue, and
  projectile problems that turn on that extreme value — adapted from OpenStax
  Precalculus 2e, Section 3.2.
source_section: "3.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Recognize characteristics of parabolas
- Understand how the graph of a parabola is related to its quadratic function
- Determine a quadratic function's minimum or maximum value
- Solve problems involving a quadratic function's minimum or maximum value
{{< /callout >}}

Curved antennas are commonly used to focus microwaves and radio waves to
transmit television and telephone signals, as well as satellite and
spacecraft communication. The cross-section of the antenna is in the shape of
a parabola, which can be described by a quadratic function.

In this section, we will investigate quadratic functions, which frequently
model problems involving area and projectile motion. Working with quadratic
functions can be less complex than working with higher degree functions, so
they provide a good opportunity for a detailed study of function behavior.

## Recognizing characteristics of parabolas

The graph of a quadratic function is a U-shaped curve called a **parabola**.
One important feature of the graph is that it has an extreme point, called
the **vertex**. If the parabola opens up, the vertex represents the lowest
point on the graph, or the **minimum value** of the quadratic function. If
the parabola opens down, the vertex represents the highest point on the
graph, or the **maximum value**. In either case, the vertex is a turning
point on the graph. The graph is also symmetric with a vertical line drawn
through the vertex, called the **axis of symmetry**. These features are
illustrated below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A parabola opening upward with vertex at (1, -4). A dashed vertical line at x = 1 marks the axis of symmetry. The parabola crosses the x-axis at the x-intercepts (-1, 0) and (3, 0), and crosses the y-axis at the y-intercept (0, -3).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":18,"tickLabels":true,"quadratics":[{"a":1,"b":-2,"c":-3}],"lines":[{"x":1,"dashed":true,"arrows":false}],"points":[{"at":[-1,0]},{"at":[3,0]},{"at":[0,-3]},{"at":[1,-4],"label":"Vertex","labelSide":"se"}]}'>
<svg role="img" aria-label="A parabola opening upward with vertex at (1, -4). A dashed vertical line at x = 1 marks the axis of symmetry. The parabola crosses the x-axis at the x-intercepts (-1, 0) and (3, 0), and crosses the y-axis at the y-intercept (0, -3)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 268" width="268" height="268" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="242" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="242" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="242" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="242" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="242" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="242" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="242" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="242" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="188" y1="242" x2="188" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="242" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="242" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="242" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="242" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="242" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="242" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="188" x2="242" y2="188" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="242" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="242" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="242" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="242" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="242" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="242" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="242" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="134" x2="244" y2="134" stroke="currentColor" stroke-width="1"/>
  <line x1="134" y1="24" x2="134" y2="244" stroke="currentColor" stroke-width="1"/>
  <polygon points="254,134 244,139 244,129" fill="currentColor"/>
  <polygon points="134,14 139,24 129,24" fill="currentColor"/>
  <polygon points="14,134 24,129 24,139" fill="currentColor"/>
  <polygon points="134,254 129,244 139,244" fill="currentColor"/>
  <text x="252" y="126" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="142" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="131" x2="26" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="149" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="44" y1="131" x2="44" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="44" y="149" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="62" y1="131" x2="62" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="149" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="80" y1="131" x2="80" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="149" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="98" y1="131" x2="98" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="149" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="116" y1="131" x2="116" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="149" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="152" y1="131" x2="152" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="149" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="170" y1="131" x2="170" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="149" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="188" y1="131" x2="188" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="149" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="206" y1="131" x2="206" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="149" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="224" y1="131" x2="224" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="149" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="242" y1="131" x2="242" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="149" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="131" y1="242" x2="137" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="246" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="131" y1="224" x2="137" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="228" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="131" y1="206" x2="137" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="210" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="131" y1="188" x2="137" y2="188" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="192" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="131" y1="170" x2="137" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="174" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="131" y1="152" x2="137" y2="152" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="156" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="131" y1="116" x2="137" y2="116" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="120" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="131" y1="98" x2="137" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="131" y1="80" x2="137" y2="80" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="84" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="131" y1="62" x2="137" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="66" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="131" y1="44" x2="137" y2="44" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="48" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="131" y1="26" x2="137" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="152" y1="248" x2="152" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="96.5,35 96.8,36.4 97,37.9 97.3,39.5 97.5,41 97.8,42.5 98,44 98.3,45.5 98.5,47 98.8,48.5 99,49.9 99.3,51.4 99.5,52.9 99.8,54.3 100,55.8 100.3,57.2 100.5,58.7 100.8,60.1 101,61.5 101.3,62.9 101.5,64.3 101.8,65.7 102,67.1 102.3,68.5 102.5,69.9 102.8,71.2 103,72.6 103.3,74 103.5,75.3 103.8,76.7 104,78 104.3,79.3 104.5,80.7 104.8,82 105,83.3 105.3,84.6 105.5,85.9 105.8,87.2 106,88.4 106.3,89.7 106.5,91 106.8,92.2 107,93.5 107.3,94.7 107.5,96 107.8,97.2 108,98.4 108.3,99.7 108.5,100.9 108.8,102.1 109,103.3 109.3,104.5 109.5,105.7 109.8,106.8 110,108 110.3,109.2 110.5,110.3 110.8,111.5 111,112.6 111.3,113.7 111.5,114.9 111.8,116 112,117.1 112.3,118.2 112.5,119.3 112.8,120.4 113,121.5 113.3,122.6 113.5,123.7 113.8,124.7 114,125.8 114.3,126.8 114.5,127.9 114.8,128.9 115,129.9 115.3,131 115.5,132 115.8,133 116,134 116.3,135 116.5,136 116.8,137 117,137.9 117.3,138.9 117.5,139.9 117.8,140.8 118,141.8 118.3,142.7 118.5,143.7 118.8,144.6 119,145.5 119.3,146.4 119.5,147.3 119.8,148.2 120,149.1 120.3,150 120.5,150.9 120.8,151.7 121,152.6 121.3,153.5 121.5,154.3 121.8,155.2 122,156 122.3,156.8 122.5,157.7 122.8,158.5 123,159.3 123.3,160.1 123.5,160.9 123.8,161.7 124,162.4 124.3,163.2 124.5,164 124.8,164.7 125,165.5 125.3,166.2 125.5,167 125.8,167.7 126,168.4 126.3,169.2 126.5,169.9 126.8,170.6 127,171.3 127.3,172 127.5,172.7 127.8,173.3 128,174 128.3,174.7 128.5,175.3 128.8,176 129,176.6 129.3,177.2 129.5,177.9 129.8,178.5 130,179.1 130.3,179.7 130.5,180.3 130.8,180.9 131,181.5 131.3,182.1 131.5,182.7 131.8,183.2 132,183.8 132.3,184.3 132.5,184.9 132.8,185.4 133,185.9 133.3,186.5 133.5,187 133.8,187.5 134,188 134.3,188.5 134.5,189 134.8,189.5 135,189.9 135.3,190.4 135.5,190.9 135.8,191.3 136,191.8 136.3,192.2 136.5,192.7 136.8,193.1 137,193.5 137.3,193.9 137.5,194.3 137.8,194.7 138,195.1 138.3,195.5 138.5,195.9 138.8,196.2 139,196.6 139.3,197 139.5,197.3 139.8,197.7 140,198 140.3,198.3 140.5,198.7 140.8,199 141,199.3 141.3,199.6 141.5,199.9 141.8,200.2 142,200.4 142.3,200.7 142.5,201 142.8,201.2 143,201.5 143.3,201.7 143.5,202 143.8,202.2 144,202.4 144.3,202.7 144.5,202.9 144.8,203.1 145,203.3 145.3,203.5 145.5,203.7 145.8,203.8 146,204 146.3,204.2 146.5,204.3 146.8,204.5 147,204.6 147.3,204.7 147.5,204.9 147.8,205 148,205.1 148.3,205.2 148.5,205.3 148.8,205.4 149,205.5 149.3,205.6 149.5,205.7 149.8,205.7 150,205.8 150.3,205.8 150.5,205.9 150.8,205.9 151,205.9 151.3,206 151.5,206 151.8,206 152,206 152.3,206 152.5,206 152.8,206 153,205.9 153.3,205.9 153.5,205.9 153.8,205.8 154,205.8 154.3,205.7 154.5,205.7 154.8,205.6 155,205.5 155.3,205.4 155.5,205.3 155.8,205.2 156,205.1 156.3,205 156.5,204.9 156.8,204.7 157,204.6 157.3,204.5 157.5,204.3 157.8,204.2 158,204 158.3,203.8 158.5,203.7 158.8,203.5 159,203.3 159.3,203.1 159.5,202.9 159.8,202.7 160,202.4 160.3,202.2 160.5,202 160.8,201.7 161,201.5 161.3,201.2 161.5,201 161.8,200.7 162,200.4 162.3,200.2 162.5,199.9 162.8,199.6 163,199.3 163.3,199 163.5,198.7 163.8,198.3 164,198 164.3,197.7 164.5,197.3 164.8,197 165,196.6 165.3,196.2 165.5,195.9 165.8,195.5 166,195.1 166.3,194.7 166.5,194.3 166.8,193.9 167,193.5 167.3,193.1 167.5,192.7 167.8,192.2 168,191.8 168.3,191.3 168.5,190.9 168.8,190.4 169,189.9 169.3,189.5 169.5,189 169.8,188.5 170,188 170.3,187.5 170.5,187 170.8,186.5 171,185.9 171.3,185.4 171.5,184.9 171.8,184.3 172,183.8 172.3,183.2 172.5,182.7 172.8,182.1 173,181.5 173.3,180.9 173.5,180.3 173.8,179.7 174,179.1 174.3,178.5 174.5,177.9 174.8,177.2 175,176.6 175.3,176 175.5,175.3 175.8,174.7 176,174 176.3,173.3 176.5,172.7 176.8,172 177,171.3 177.3,170.6 177.5,169.9 177.8,169.2 178,168.4 178.3,167.7 178.5,167 178.8,166.2 179,165.5 179.3,164.7 179.5,164 179.8,163.2 180,162.4 180.3,161.7 180.5,160.9 180.8,160.1 181,159.3 181.3,158.5 181.5,157.7 181.8,156.8 182,156 182.3,155.2 182.5,154.3 182.8,153.5 183,152.6 183.3,151.7 183.5,150.9 183.8,150 184,149.1 184.3,148.2 184.5,147.3 184.8,146.4 185,145.5 185.3,144.6 185.5,143.7 185.8,142.7 186,141.8 186.3,140.8 186.5,139.9 186.8,138.9 187,137.9 187.3,137 187.5,136 187.8,135 188,134 188.3,133 188.5,132 188.8,131 189,129.9 189.3,128.9 189.5,127.9 189.8,126.8 190,125.8 190.3,124.7 190.5,123.7 190.8,122.6 191,121.5 191.3,120.4 191.5,119.3 191.8,118.2 192,117.1 192.3,116 192.5,114.9 192.8,113.7 193,112.6 193.3,111.5 193.5,110.3 193.8,109.2 194,108 194.3,106.8 194.5,105.7 194.8,104.5 195,103.3 195.3,102.1 195.5,100.9 195.8,99.7 196,98.4 196.3,97.2 196.5,96 196.8,94.7 197,93.5 197.3,92.2 197.5,91 197.8,89.7 198,88.4 198.3,87.2 198.5,85.9 198.8,84.6 199,83.3 199.3,82 199.5,80.7 199.8,79.3 200,78 200.3,76.7 200.5,75.3 200.8,74 201,72.6 201.3,71.2 201.5,69.9 201.8,68.5 202,67.1 202.3,65.7 202.5,64.3 202.8,62.9 203,61.5 203.3,60.1 203.5,58.7 203.8,57.2 204,55.8 204.3,54.3 204.5,52.9 204.8,51.4 205,49.9 205.3,48.5 205.5,47 205.8,45.5 206,44 206.3,42.5 206.5,41 206.8,39.5 207,37.9 207.3,36.4 207.5,35" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="95.3,27.1 101.8,36.2 91.9,37.7" fill="currentColor"/>
  <polygon points="208.8,27.1 212.1,37.7 202.2,36.2" fill="currentColor"/>
  <circle cx="116" cy="134" r="4" fill="currentColor"/>
  <circle cx="188" cy="134" r="4" fill="currentColor"/>
  <circle cx="134" cy="188" r="4" fill="currentColor"/>
  <circle cx="152" cy="206" r="4" fill="currentColor"/>
  <text x="163.2" y="226.2" font-size="13" fill="currentColor" text-anchor="start">Vertex</text>
</svg>
</div>


The $y$-intercept is the point at which the parabola crosses the $y$-axis.
The $x$-intercepts are the points at which the parabola crosses the $x$-axis.
If they exist, the $x$-intercepts represent the **zeros**, or **roots**, of
the quadratic function, the values of $x$ at which $y=0$.

**Example.** Determine the vertex, axis of symmetry, zeros, and $y$-intercept
of the parabola shown below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A parabola opening upward with vertex at (3, 1) and y-intercept at (0, 7). It does not cross the x-axis.","xMin":-4,"xMax":8,"yMin":-1,"yMax":10,"unit":20,"tickLabels":true,"xTickStep":2,"yTickStep":2,"quadratics":[{"a":0.6666666666666666,"b":-4,"c":7}],"points":[{"at":[3,1],"label":"(3, 1)","labelSide":"s"},{"at":[0,7],"label":"(0, 7)","labelSide":"w"}]}'>
<svg role="img" aria-label="A parabola opening upward with vertex at (3, 1) and y-intercept at (0, 7). It does not cross the x-axis." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 272" width="292" height="272" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="246" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="246" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="246" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="246" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="246" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="246" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="246" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="246" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="246" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="246" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="246" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="246" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="266" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="266" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="266" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="266" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="266" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="266" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="266" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="266" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="226" x2="268" y2="226" stroke="currentColor" stroke-width="1"/>
  <line x1="106" y1="24" x2="106" y2="248" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,226 268,231 268,221" fill="currentColor"/>
  <polygon points="106,14 111,24 101,24" fill="currentColor"/>
  <polygon points="14,226 24,221 24,231" fill="currentColor"/>
  <polygon points="106,258 101,248 111,248" fill="currentColor"/>
  <text x="276" y="218" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="114" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="223" x2="26" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="241" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="66" y1="223" x2="66" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="241" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="146" y1="223" x2="146" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="241" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="186" y1="223" x2="186" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="241" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="226" y1="223" x2="226" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="241" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="266" y1="223" x2="266" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="241" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="103" y1="186" x2="109" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="190" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="103" y1="146" x2="109" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="150" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="103" y1="106" x2="109" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="110" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="103" y1="66" x2="109" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="70" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="103" y1="26" x2="109" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <polyline points="94.4,35 94.5,35.6 94.8,36.8 95,38 95.3,39.1 95.5,40.3 95.8,41.5 96,42.7 96.3,43.8 96.5,45 96.8,46.1 97,47.3 97.3,48.4 97.5,49.6 97.8,50.7 98,51.9 98.3,53 98.5,54.1 98.8,55.2 99,56.4 99.3,57.5 99.5,58.6 99.8,59.7 100,60.8 100.3,61.9 100.5,63 100.8,64.1 101,65.2 101.3,66.2 101.5,67.3 101.8,68.4 102,69.5 102.3,70.5 102.5,71.6 102.8,72.6 103,73.7 103.3,74.7 103.5,75.8 103.8,76.8 104,77.9 104.3,78.9 104.5,79.9 104.8,80.9 105,82 105.3,83 105.5,84 105.8,85 106,86 106.3,87 106.5,88 106.8,89 107,90 107.3,90.9 107.5,91.9 107.8,92.9 108,93.9 108.3,94.8 108.5,95.8 108.8,96.7 109,97.7 109.3,98.6 109.5,99.6 109.8,100.5 110,101.5 110.3,102.4 110.5,103.3 110.8,104.2 111,105.2 111.3,106.1 111.5,107 111.8,107.9 112,108.8 112.3,109.7 112.5,110.6 112.8,111.5 113,112.4 113.3,113.2 113.5,114.1 113.8,115 114,115.9 114.3,116.7 114.5,117.6 114.8,118.4 115,119.3 115.3,120.1 115.5,121 115.8,121.8 116,122.7 116.3,123.5 116.5,124.3 116.8,125.1 117,126 117.3,126.8 117.5,127.6 117.8,128.4 118,129.2 118.3,130 118.5,130.8 118.8,131.6 119,132.4 119.3,133.1 119.5,133.9 119.8,134.7 120,135.5 120.3,136.2 120.5,137 120.8,137.7 121,138.5 121.3,139.2 121.5,140 121.8,140.7 122,141.5 122.3,142.2 122.5,142.9 122.8,143.6 123,144.4 123.3,145.1 123.5,145.8 123.8,146.5 124,147.2 124.3,147.9 124.5,148.6 124.8,149.3 125,150 125.3,150.6 125.5,151.3 125.8,152 126,152.7 126.3,153.3 126.5,154 126.8,154.6 127,155.3 127.3,155.9 127.5,156.6 127.8,157.2 128,157.9 128.3,158.5 128.5,159.1 128.8,159.7 129,160.4 129.3,161 129.5,161.6 129.8,162.2 130,162.8 130.3,163.4 130.5,164 130.8,164.6 131,165.2 131.3,165.7 131.5,166.3 131.8,166.9 132,167.5 132.3,168 132.5,168.6 132.8,169.1 133,169.7 133.3,170.2 133.5,170.8 133.8,171.3 134,171.9 134.3,172.4 134.5,172.9 134.8,173.4 135,174 135.3,174.5 135.5,175 135.8,175.5 136,176 136.3,176.5 136.5,177 136.8,177.5 137,178 137.3,178.4 137.5,178.9 137.8,179.4 138,179.9 138.3,180.3 138.5,180.8 138.8,181.2 139,181.7 139.3,182.1 139.5,182.6 139.8,183 140,183.5 140.3,183.9 140.5,184.3 140.8,184.7 141,185.2 141.3,185.6 141.5,186 141.8,186.4 142,186.8 142.3,187.2 142.5,187.6 142.8,188 143,188.4 143.3,188.7 143.5,189.1 143.8,189.5 144,189.9 144.3,190.2 144.5,190.6 144.8,190.9 145,191.3 145.3,191.6 145.5,192 145.8,192.3 146,192.7 146.3,193 146.5,193.3 146.8,193.6 147,194 147.3,194.3 147.5,194.6 147.8,194.9 148,195.2 148.3,195.5 148.5,195.8 148.8,196.1 149,196.4 149.3,196.6 149.5,196.9 149.8,197.2 150,197.5 150.3,197.7 150.5,198 150.8,198.2 151,198.5 151.3,198.7 151.5,199 151.8,199.2 152,199.5 152.3,199.7 152.5,199.9 152.8,200.1 153,200.4 153.3,200.6 153.5,200.8 153.8,201 154,201.2 154.3,201.4 154.5,201.6 154.8,201.8 155,202 155.3,202.1 155.5,202.3 155.8,202.5 156,202.7 156.3,202.8 156.5,203 156.8,203.1 157,203.3 157.3,203.4 157.5,203.6 157.8,203.7 158,203.9 158.3,204 158.5,204.1 158.8,204.2 159,204.4 159.3,204.5 159.5,204.6 159.8,204.7 160,204.8 160.3,204.9 160.5,205 160.8,205.1 161,205.2 161.3,205.2 161.5,205.3 161.8,205.4 162,205.5 162.3,205.5 162.5,205.6 162.8,205.6 163,205.7 163.3,205.7 163.5,205.8 163.8,205.8 164,205.9 164.3,205.9 164.5,205.9 164.8,205.9 165,206 165.3,206 165.5,206 165.8,206 166,206 166.3,206 166.5,206 166.8,206 167,206 167.3,205.9 167.5,205.9 167.8,205.9 168,205.9 168.3,205.8 168.5,205.8 168.8,205.7 169,205.7 169.3,205.6 169.5,205.6 169.8,205.5 170,205.5 170.3,205.4 170.5,205.3 170.8,205.2 171,205.2 171.3,205.1 171.5,205 171.8,204.9 172,204.8 172.3,204.7 172.5,204.6 172.8,204.5 173,204.4 173.3,204.2 173.5,204.1 173.8,204 174,203.9 174.3,203.7 174.5,203.6 174.8,203.4 175,203.3 175.3,203.1 175.5,203 175.8,202.8 176,202.7 176.3,202.5 176.5,202.3 176.8,202.1 177,202 177.3,201.8 177.5,201.6 177.8,201.4 178,201.2 178.3,201 178.5,200.8 178.8,200.6 179,200.4 179.3,200.1 179.5,199.9 179.8,199.7 180,199.5 180.3,199.2 180.5,199 180.8,198.7 181,198.5 181.3,198.2 181.5,198 181.8,197.7 182,197.5 182.3,197.2 182.5,196.9 182.8,196.6 183,196.4 183.3,196.1 183.5,195.8 183.8,195.5 184,195.2 184.3,194.9 184.5,194.6 184.8,194.3 185,194 185.3,193.6 185.5,193.3 185.8,193 186,192.7 186.3,192.3 186.5,192 186.8,191.6 187,191.3 187.3,190.9 187.5,190.6 187.8,190.2 188,189.9 188.3,189.5 188.5,189.1 188.8,188.7 189,188.4 189.3,188 189.5,187.6 189.8,187.2 190,186.8 190.3,186.4 190.5,186 190.8,185.6 191,185.2 191.3,184.7 191.5,184.3 191.8,183.9 192,183.5 192.3,183 192.5,182.6 192.8,182.1 193,181.7 193.3,181.2 193.5,180.8 193.8,180.3 194,179.9 194.3,179.4 194.5,178.9 194.8,178.4 195,178 195.3,177.5 195.5,177 195.8,176.5 196,176 196.3,175.5 196.5,175 196.8,174.5 197,174 197.3,173.4 197.5,172.9 197.8,172.4 198,171.9 198.3,171.3 198.5,170.8 198.8,170.2 199,169.7 199.3,169.1 199.5,168.6 199.8,168 200,167.5 200.3,166.9 200.5,166.3 200.8,165.7 201,165.2 201.3,164.6 201.5,164 201.8,163.4 202,162.8 202.3,162.2 202.5,161.6 202.8,161 203,160.4 203.3,159.7 203.5,159.1 203.8,158.5 204,157.9 204.3,157.2 204.5,156.6 204.8,155.9 205,155.3 205.3,154.6 205.5,154 205.8,153.3 206,152.7 206.3,152 206.5,151.3 206.8,150.6 207,150 207.3,149.3 207.5,148.6 207.8,147.9 208,147.2 208.3,146.5 208.5,145.8 208.8,145.1 209,144.4 209.3,143.6 209.5,142.9 209.8,142.2 210,141.5 210.3,140.7 210.5,140 210.8,139.2 211,138.5 211.3,137.7 211.5,137 211.8,136.2 212,135.5 212.3,134.7 212.5,133.9 212.8,133.1 213,132.4 213.3,131.6 213.5,130.8 213.8,130 214,129.2 214.3,128.4 214.5,127.6 214.8,126.8 215,126 215.3,125.1 215.5,124.3 215.8,123.5 216,122.7 216.3,121.8 216.5,121 216.8,120.1 217,119.3 217.3,118.4 217.5,117.6 217.8,116.7 218,115.9 218.3,115 218.5,114.1 218.8,113.2 219,112.4 219.3,111.5 219.5,110.6 219.8,109.7 220,108.8 220.3,107.9 220.5,107 220.8,106.1 221,105.2 221.3,104.2 221.5,103.3 221.8,102.4 222,101.5 222.3,100.5 222.5,99.6 222.8,98.6 223,97.7 223.3,96.7 223.5,95.8 223.8,94.8 224,93.9 224.3,92.9 224.5,91.9 224.8,90.9 225,90 225.3,89 225.5,88 225.8,87 226,86 226.3,85 226.5,84 226.8,83 227,82 227.3,80.9 227.5,79.9 227.8,78.9 228,77.9 228.3,76.8 228.5,75.8 228.8,74.7 229,73.7 229.3,72.6 229.5,71.6 229.8,70.5 230,69.5 230.3,68.4 230.5,67.3 230.8,66.2 231,65.2 231.3,64.1 231.5,63 231.8,61.9 232,60.8 232.3,59.7 232.5,58.6 232.8,57.5 233,56.4 233.3,55.2 233.5,54.1 233.8,53 234,51.9 234.3,50.7 234.5,49.6 234.8,48.4 235,47.3 235.3,46.1 235.5,45 235.8,43.8 236,42.7 236.3,41.5 236.5,40.3 236.8,39.1 237,38 237.3,36.8 237.5,35.6 237.6,35" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="92.8,27.1 99.7,35.9 89.9,38" fill="currentColor"/>
  <polygon points="239.3,27.1 242.1,38 232.3,35.9" fill="currentColor"/>
  <circle cx="166" cy="206" r="4" fill="currentColor"/>
  <circle cx="106" cy="86" r="4" fill="currentColor"/>
  <text x="177.2" y="226.2" font-size="13" fill="currentColor" text-anchor="start">(3, 1)</text>
  <text x="92" y="90" font-size="13" fill="currentColor" text-anchor="end">(0, 7)</text>
</svg>
</div>


**Solution.** The vertex is the turning point of the graph. We can see that
the vertex is at $(3,1)$. Because this parabola opens upward, the axis of
symmetry is the vertical line that intersects the parabola at the vertex. So
the axis of symmetry is $x=3$. This parabola does not cross the $x$-axis, so
it has no zeros. It crosses the $y$-axis at $(0,7)$, so this is the
$y$-intercept.

## Understanding how the graphs of parabolas are related to their quadratic functions

The **general form of a quadratic function** presents the function in the
form

$$f(x)=ax^2+bx+c$$

where $a$, $b$, and $c$ are real numbers and $a\ne0$. If $a>0$, the parabola
opens upward. If $a<0$, the parabola opens downward. We can use the general
form of a parabola to find the equation for the axis of symmetry.

The axis of symmetry is defined by $x=-\tfrac{b}{2a}$. If we use the
quadratic formula, $x=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}$, to solve
$ax^2+bx+c=0$ for the $x$-intercepts, or zeros, we find the value of $x$
halfway between them is always $x=-\tfrac{b}{2a}$, the equation for the axis
of symmetry.

The graph below is the quadratic function written in general form as
$y=x^2+4x+3$. In this form, $a=1$, $b=4$, and $c=3$. Because $a>0$, the
parabola opens upward. The axis of symmetry is $x=-\tfrac{4}{2(1)}=-2$. This
also makes sense because we can see from the graph that the vertical line
$x=-2$ divides the graph in half. The vertex always occurs along the axis of
symmetry. For a parabola that opens upward, the vertex occurs at the lowest
point on the graph, in this instance, $(-2,-1)$. The $x$-intercepts, those
points where the parabola crosses the $x$-axis, occur at $(-3,0)$ and
$(-1,0)$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The parabola y = x squared + 4x + 3, opening upward with vertex at (-2, -1). A dashed vertical line at x = -2 marks the axis of symmetry. The x-intercepts are at (-3, 0) and (-1, 0).","xMin":-6,"xMax":6,"yMin":-4,"yMax":8,"unit":18,"tickLabels":true,"xTickStep":2,"yTickStep":2,"quadratics":[{"a":1,"b":4,"c":3,"label":"y = x² + 4x + 3"}],"lines":[{"x":-2,"dashed":true,"arrows":false}],"points":[{"at":[-3,0]},{"at":[-1,0]},{"at":[-2,-1],"label":"Vertex","labelSide":"s"}]}'>
<svg role="img" aria-label="The parabola y = x squared + 4x + 3, opening upward with vertex at (-2, -1). A dashed vertical line at x = -2 marks the axis of symmetry. The x-intercepts are at (-3, 0) and (-1, 0)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 268" width="268" height="268" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="242" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="242" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="242" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="242" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="242" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="242" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="242" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="242" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="188" y1="242" x2="188" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="242" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="242" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="242" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="242" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="242" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="242" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="188" x2="242" y2="188" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="242" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="242" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="242" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="242" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="242" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="242" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="242" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="170" x2="244" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="134" y1="24" x2="134" y2="244" stroke="currentColor" stroke-width="1"/>
  <polygon points="254,170 244,175 244,165" fill="currentColor"/>
  <polygon points="134,14 139,24 129,24" fill="currentColor"/>
  <polygon points="14,170 24,165 24,175" fill="currentColor"/>
  <polygon points="134,254 129,244 139,244" fill="currentColor"/>
  <text x="252" y="162" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="142" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="167" x2="26" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="185" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="62" y1="167" x2="62" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="185" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="98" y1="167" x2="98" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="185" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="170" y1="167" x2="170" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="185" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="167" x2="206" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="185" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="242" y1="167" x2="242" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="185" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="131" y1="242" x2="137" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="246" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="131" y1="206" x2="137" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="210" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="131" y1="134" x2="137" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="138" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="131" y1="98" x2="137" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="102" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="131" y1="62" x2="137" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="66" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="131" y1="26" x2="137" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="98" y1="248" x2="98" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="45.3,33.9 45.5,34.9 45.8,36.3 46,37.8 46.3,39.2 46.5,40.7 46.8,42.1 47,43.5 47.3,44.9 47.5,46.3 47.8,47.7 48,49.1 48.3,50.5 48.5,51.9 48.8,53.2 49,54.6 49.3,56 49.5,57.3 49.8,58.7 50,60 50.3,61.3 50.5,62.7 50.8,64 51,65.3 51.3,66.6 51.5,67.9 51.8,69.2 52,70.4 52.3,71.7 52.5,73 52.8,74.2 53,75.5 53.3,76.7 53.5,78 53.8,79.2 54,80.4 54.3,81.7 54.5,82.9 54.8,84.1 55,85.3 55.3,86.5 55.5,87.7 55.8,88.8 56,90 56.3,91.2 56.5,92.3 56.8,93.5 57,94.6 57.3,95.7 57.5,96.9 57.8,98 58,99.1 58.3,100.2 58.5,101.3 58.8,102.4 59,103.5 59.3,104.6 59.5,105.7 59.8,106.7 60,107.8 60.3,108.8 60.5,109.9 60.8,110.9 61,111.9 61.3,113 61.5,114 61.8,115 62,116 62.3,117 62.5,118 62.8,119 63,119.9 63.3,120.9 63.5,121.9 63.8,122.8 64,123.8 64.3,124.7 64.5,125.7 64.8,126.6 65,127.5 65.3,128.4 65.5,129.3 65.8,130.2 66,131.1 66.3,132 66.5,132.9 66.8,133.7 67,134.6 67.3,135.5 67.5,136.3 67.8,137.2 68,138 68.3,138.8 68.5,139.7 68.8,140.5 69,141.3 69.3,142.1 69.5,142.9 69.8,143.7 70,144.4 70.3,145.2 70.5,146 70.8,146.7 71,147.5 71.3,148.2 71.5,149 71.8,149.7 72,150.4 72.3,151.2 72.5,151.9 72.8,152.6 73,153.3 73.3,154 73.5,154.7 73.8,155.3 74,156 74.3,156.7 74.5,157.3 74.8,158 75,158.6 75.3,159.2 75.5,159.9 75.8,160.5 76,161.1 76.3,161.7 76.5,162.3 76.8,162.9 77,163.5 77.3,164.1 77.5,164.7 77.8,165.2 78,165.8 78.3,166.3 78.5,166.9 78.8,167.4 79,167.9 79.3,168.5 79.5,169 79.8,169.5 80,170 80.3,170.5 80.5,171 80.8,171.5 81,171.9 81.3,172.4 81.5,172.9 81.8,173.3 82,173.8 82.3,174.2 82.5,174.7 82.8,175.1 83,175.5 83.3,175.9 83.5,176.3 83.8,176.7 84,177.1 84.3,177.5 84.5,177.9 84.8,178.2 85,178.6 85.3,179 85.5,179.3 85.8,179.7 86,180 86.3,180.3 86.5,180.7 86.8,181 87,181.3 87.3,181.6 87.5,181.9 87.8,182.2 88,182.4 88.3,182.7 88.5,183 88.8,183.2 89,183.5 89.3,183.7 89.5,184 89.8,184.2 90,184.4 90.3,184.7 90.5,184.9 90.8,185.1 91,185.3 91.3,185.5 91.5,185.7 91.8,185.8 92,186 92.3,186.2 92.5,186.3 92.8,186.5 93,186.6 93.3,186.7 93.5,186.9 93.8,187 94,187.1 94.3,187.2 94.5,187.3 94.8,187.4 95,187.5 95.3,187.6 95.5,187.7 95.8,187.7 96,187.8 96.3,187.8 96.5,187.9 96.8,187.9 97,187.9 97.3,188 97.5,188 97.8,188 98,188 98.3,188 98.5,188 98.8,188 99,187.9 99.3,187.9 99.5,187.9 99.8,187.8 100,187.8 100.3,187.7 100.5,187.7 100.8,187.6 101,187.5 101.3,187.4 101.5,187.3 101.8,187.2 102,187.1 102.3,187 102.5,186.9 102.8,186.7 103,186.6 103.3,186.5 103.5,186.3 103.8,186.2 104,186 104.3,185.8 104.5,185.7 104.8,185.5 105,185.3 105.3,185.1 105.5,184.9 105.8,184.7 106,184.4 106.3,184.2 106.5,184 106.8,183.7 107,183.5 107.3,183.2 107.5,183 107.8,182.7 108,182.4 108.3,182.2 108.5,181.9 108.8,181.6 109,181.3 109.3,181 109.5,180.7 109.8,180.3 110,180 110.3,179.7 110.5,179.3 110.8,179 111,178.6 111.3,178.2 111.5,177.9 111.8,177.5 112,177.1 112.3,176.7 112.5,176.3 112.8,175.9 113,175.5 113.3,175.1 113.5,174.7 113.8,174.2 114,173.8 114.3,173.3 114.5,172.9 114.8,172.4 115,171.9 115.3,171.5 115.5,171 115.8,170.5 116,170 116.3,169.5 116.5,169 116.8,168.5 117,167.9 117.3,167.4 117.5,166.9 117.8,166.3 118,165.8 118.3,165.2 118.5,164.7 118.8,164.1 119,163.5 119.3,162.9 119.5,162.3 119.8,161.7 120,161.1 120.3,160.5 120.5,159.9 120.8,159.2 121,158.6 121.3,158 121.5,157.3 121.8,156.7 122,156 122.3,155.3 122.5,154.7 122.8,154 123,153.3 123.3,152.6 123.5,151.9 123.8,151.2 124,150.4 124.3,149.7 124.5,149 124.8,148.2 125,147.5 125.3,146.7 125.5,146 125.8,145.2 126,144.4 126.3,143.7 126.5,142.9 126.8,142.1 127,141.3 127.3,140.5 127.5,139.7 127.8,138.8 128,138 128.3,137.2 128.5,136.3 128.8,135.5 129,134.6 129.3,133.7 129.5,132.9 129.8,132 130,131.1 130.3,130.2 130.5,129.3 130.8,128.4 131,127.5 131.3,126.6 131.5,125.7 131.8,124.7 132,123.8 132.3,122.8 132.5,121.9 132.8,120.9 133,119.9 133.3,119 133.5,118 133.8,117 134,116 134.3,115 134.5,114 134.8,113 135,111.9 135.3,110.9 135.5,109.9 135.8,108.8 136,107.8 136.3,106.7 136.5,105.7 136.8,104.6 137,103.5 137.3,102.4 137.5,101.3 137.8,100.2 138,99.1 138.3,98 138.5,96.9 138.8,95.7 139,94.6 139.3,93.5 139.5,92.3 139.8,91.2 140,90 140.3,88.8 140.5,87.7 140.8,86.5 141,85.3 141.3,84.1 141.5,82.9 141.8,81.7 142,80.4 142.3,79.2 142.5,78 142.8,76.7 143,75.5 143.3,74.2 143.5,73 143.8,71.7 144,70.4 144.3,69.2 144.5,67.9 144.8,66.6 145,65.3 145.3,64 145.5,62.7 145.8,61.3 146,60 146.3,58.7 146.5,57.3 146.8,56 147,54.6 147.3,53.2 147.5,51.9 147.8,50.5 148,49.1 148.3,47.7 148.5,46.3 148.8,44.9 149,43.5 149.3,42.1 149.5,40.7 149.8,39.2 150,37.8 150.3,36.3 150.5,34.9 150.7,33.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="44,26 50.6,35 40.7,36.7" fill="currentColor"/>
  <polygon points="152,26 155.3,36.7 145.4,35" fill="currentColor"/>
  <circle cx="80" cy="170" r="4" fill="currentColor"/>
  <circle cx="116" cy="170" r="4" fill="currentColor"/>
  <circle cx="98" cy="188" r="4" fill="currentColor"/>
  <text x="86.8" y="208.2" font-size="13" fill="currentColor" text-anchor="end">Vertex</text>
</svg>
</div>


The **standard form of a quadratic function** presents the function in the
form

$$f(x)=a(x-h)^2+k$$

where $(h,k)$ is the vertex. Because the vertex appears in the standard form
of the quadratic function, this form is also known as the **vertex form of a
quadratic function**.

As with the general form, if $a>0$, the parabola opens upward and the vertex
is a minimum. If $a<0$, the parabola opens downward, and the vertex is a
maximum. The graph below is the quadratic function written in standard form
as $y=-3(x+2)^2+4$. Since $x-h=x+2$ in this example, $h=-2$. In this form,
$a=-3$, $h=-2$, and $k=4$. Because $a<0$, the parabola opens downward. The
vertex is at $(-2,4)$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The parabola y = -3(x+2) squared + 4, opening downward with vertex at (-2, 4).","xMin":-6,"xMax":6,"yMin":-9,"yMax":5,"unit":18,"tickLabels":true,"xTickStep":2,"yTickStep":2,"quadratics":[{"a":-3,"b":-12,"c":-8,"label":"y = -3(x + 2)² + 4"}],"points":[{"at":[-2,4],"label":"Vertex","labelSide":"n"}]}'>
<svg role="img" aria-label="The parabola y = -3(x+2) squared + 4, opening downward with vertex at (-2, 4)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 304" width="268" height="304" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="278" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="278" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="278" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="278" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="278" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="278" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="278" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="278" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="188" y1="278" x2="188" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="278" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="278" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="278" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="278" x2="242" y2="278" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="260" x2="242" y2="260" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="242" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="242" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="242" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="188" x2="242" y2="188" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="242" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="242" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="242" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="242" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="242" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="242" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="242" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="116" x2="244" y2="116" stroke="currentColor" stroke-width="1"/>
  <line x1="134" y1="24" x2="134" y2="280" stroke="currentColor" stroke-width="1"/>
  <polygon points="254,116 244,121 244,111" fill="currentColor"/>
  <polygon points="134,14 139,24 129,24" fill="currentColor"/>
  <polygon points="14,116 24,111 24,121" fill="currentColor"/>
  <polygon points="134,290 129,280 139,280" fill="currentColor"/>
  <text x="252" y="108" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="142" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="113" x2="26" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="131" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="62" y1="113" x2="62" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="131" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="98" y1="113" x2="98" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="131" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="170" y1="113" x2="170" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="131" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="113" x2="206" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="131" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="242" y1="113" x2="242" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="131" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="131" y1="260" x2="137" y2="260" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="264" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="131" y1="224" x2="137" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="228" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="131" y1="188" x2="137" y2="188" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="192" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="131" y1="152" x2="137" y2="152" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="156" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="131" y1="80" x2="137" y2="80" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="84" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="131" y1="44" x2="137" y2="44" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="48" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="61.4,267.3 61.5,266 61.8,263 62,260 62.3,257 62.5,254 62.8,251.1 63,248.2 63.3,245.3 63.5,242.4 63.8,239.5 64,236.7 64.3,233.8 64.5,231 64.8,228.3 65,225.5 65.3,222.8 65.5,220 65.8,217.3 66,214.7 66.3,212 66.5,209.4 66.8,206.8 67,204.2 67.3,201.6 67.5,199 67.8,196.5 68,194 68.3,191.5 68.5,189 68.8,186.6 69,184.2 69.3,181.8 69.5,179.4 69.8,177 70,174.7 70.3,172.3 70.5,170 70.8,167.8 71,165.5 71.3,163.3 71.5,161 71.8,158.8 72,156.7 72.3,154.5 72.5,152.4 72.8,150.3 73,148.2 73.3,146.1 73.5,144 73.8,142 74,140 74.3,138 74.5,136 74.8,134.1 75,132.2 75.3,130.3 75.5,128.4 75.8,126.5 76,124.7 76.3,122.8 76.5,121 76.8,119.3 77,117.5 77.3,115.8 77.5,114 77.8,112.3 78,110.7 78.3,109 78.5,107.4 78.8,105.8 79,104.2 79.3,102.6 79.5,101 79.8,99.5 80,98 80.3,96.5 80.5,95 80.8,93.6 81,92.2 81.3,90.8 81.5,89.4 81.8,88 82,86.7 82.3,85.3 82.5,84 82.8,82.8 83,81.5 83.3,80.3 83.5,79 83.8,77.8 84,76.7 84.3,75.5 84.5,74.4 84.8,73.3 85,72.2 85.3,71.1 85.5,70 85.8,69 86,68 86.3,67 86.5,66 86.8,65.1 87,64.2 87.3,63.3 87.5,62.4 87.8,61.5 88,60.7 88.3,59.8 88.5,59 88.8,58.3 89,57.5 89.3,56.8 89.5,56 89.8,55.3 90,54.7 90.3,54 90.5,53.4 90.8,52.8 91,52.2 91.3,51.6 91.5,51 91.8,50.5 92,50 92.3,49.5 92.5,49 92.8,48.6 93,48.2 93.3,47.8 93.5,47.4 93.8,47 94,46.7 94.3,46.3 94.5,46 94.8,45.8 95,45.5 95.3,45.3 95.5,45 95.8,44.8 96,44.7 96.3,44.5 96.5,44.4 96.8,44.3 97,44.2 97.3,44.1 97.5,44 97.8,44 98,44 98.3,44 98.5,44 98.8,44.1 99,44.2 99.3,44.3 99.5,44.4 99.8,44.5 100,44.7 100.3,44.8 100.5,45 100.8,45.3 101,45.5 101.3,45.8 101.5,46 101.8,46.3 102,46.7 102.3,47 102.5,47.4 102.8,47.8 103,48.2 103.3,48.6 103.5,49 103.8,49.5 104,50 104.3,50.5 104.5,51 104.8,51.6 105,52.2 105.3,52.8 105.5,53.4 105.8,54 106,54.7 106.3,55.3 106.5,56 106.8,56.8 107,57.5 107.3,58.3 107.5,59 107.8,59.8 108,60.7 108.3,61.5 108.5,62.4 108.8,63.3 109,64.2 109.3,65.1 109.5,66 109.8,67 110,68 110.3,69 110.5,70 110.8,71.1 111,72.2 111.3,73.3 111.5,74.4 111.8,75.5 112,76.7 112.3,77.8 112.5,79 112.8,80.3 113,81.5 113.3,82.8 113.5,84 113.8,85.3 114,86.7 114.3,88 114.5,89.4 114.8,90.8 115,92.2 115.3,93.6 115.5,95 115.8,96.5 116,98 116.3,99.5 116.5,101 116.8,102.6 117,104.2 117.3,105.8 117.5,107.4 117.8,109 118,110.7 118.3,112.3 118.5,114 118.8,115.8 119,117.5 119.3,119.3 119.5,121 119.8,122.8 120,124.7 120.3,126.5 120.5,128.4 120.8,130.3 121,132.2 121.3,134.1 121.5,136 121.8,138 122,140 122.3,142 122.5,144 122.8,146.1 123,148.2 123.3,150.3 123.5,152.4 123.8,154.5 124,156.7 124.3,158.8 124.5,161 124.8,163.3 125,165.5 125.3,167.8 125.5,170 125.8,172.3 126,174.7 126.3,177 126.5,179.4 126.8,181.8 127,184.2 127.3,186.6 127.5,189 127.8,191.5 128,194 128.3,196.5 128.5,199 128.8,201.6 129,204.2 129.3,206.8 129.5,209.4 129.8,212 130,214.7 130.3,217.3 130.5,220 130.8,222.8 131,225.5 131.3,228.3 131.5,231 131.8,233.8 132,236.7 132.3,239.5 132.5,242.4 132.8,245.3 133,248.2 133.3,251.1 133.5,254 133.8,257 134,260 134.3,263 134.5,266 134.6,267.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="60.8,275.3 56.6,264.9 66.5,265.7" fill="currentColor"/>
  <polygon points="135.3,275.3 129.5,265.7 139.4,264.9" fill="currentColor"/>
  <circle cx="98" cy="44" r="4" fill="currentColor"/>
  <text x="98" y="30" font-size="13" fill="currentColor" text-anchor="middle">Vertex</text>
</svg>
</div>


The standard form is useful for determining how the graph is transformed from
the graph of $y=x^2$. The graph below is that basic function.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of y equals x squared, a parabola opening upward with vertex at the origin.","xMin":-4,"xMax":4,"yMin":-1,"yMax":10,"unit":24,"tickLabels":true,"quadratics":[{"a":1,"b":0,"c":0,"label":"y = x²"}]}'>
<svg role="img" aria-label="The graph of y equals x squared, a parabola opening upward with vertex at the origin." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 316" width="244" height="316" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="290" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="290" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="290" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="290" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="290" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="290" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="290" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="290" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="218" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="218" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="218" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="218" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="218" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="218" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="218" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="218" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="218" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="218" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="266" x2="220" y2="266" stroke="currentColor" stroke-width="1"/>
  <line x1="122" y1="24" x2="122" y2="292" stroke="currentColor" stroke-width="1"/>
  <polygon points="230,266 220,271 220,261" fill="currentColor"/>
  <polygon points="122,14 127,24 117,24" fill="currentColor"/>
  <polygon points="14,266 24,261 24,271" fill="currentColor"/>
  <polygon points="122,302 117,292 127,292" fill="currentColor"/>
  <text x="228" y="258" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="130" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="263" x2="26" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="281" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="50" y1="263" x2="50" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="281" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="74" y1="263" x2="74" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="281" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="98" y1="263" x2="98" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="281" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="263" x2="146" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="281" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="170" y1="263" x2="170" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="281" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="194" y1="263" x2="194" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="281" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="218" y1="263" x2="218" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="281" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="119" y1="290" x2="125" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="294" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="119" y1="242" x2="125" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="246" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="119" y1="218" x2="125" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="222" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="119" y1="194" x2="125" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="198" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="119" y1="170" x2="125" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="174" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="119" y1="146" x2="125" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="150" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="119" y1="122" x2="125" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="126" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="119" y1="98" x2="125" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="102" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <line x1="119" y1="74" x2="125" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="78" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="119" y1="50" x2="125" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="54" font-size="11" fill="currentColor" text-anchor="end">9</text>
  <line x1="119" y1="26" x2="125" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <polyline points="47.5,34.8 47.8,36.3 48,37.8 48.3,39.4 48.5,40.9 48.8,42.4 49,44 49.3,45.5 49.5,47 49.8,48.5 50,50 50.3,51.5 50.5,53 50.8,54.5 51,56 51.3,57.4 51.5,58.9 51.8,60.4 52,61.8 52.3,63.3 52.5,64.7 52.8,66.2 53,67.6 53.3,69.1 53.5,70.5 53.8,71.9 54,73.3 54.3,74.7 54.5,76.2 54.8,77.6 55,79 55.3,80.4 55.5,81.7 55.8,83.1 56,84.5 56.3,85.9 56.5,87.2 56.8,88.6 57,90 57.3,91.3 57.5,92.7 57.8,94 58,95.3 58.3,96.7 58.5,98 58.7,99.3 59,100.6 59.3,101.9 59.5,103.2 59.8,104.5 60,105.8 60.2,107.1 60.5,108.4 60.8,109.7 61,111 61.3,112.2 61.5,113.5 61.7,114.7 62,116 62.3,117.2 62.5,118.5 62.8,119.7 63,121 63.2,122.2 63.5,123.4 63.8,124.6 64,125.8 64.3,127 64.5,128.2 64.8,129.4 65,130.6 65.3,131.8 65.5,133 65.8,134.2 66,135.3 66.3,136.5 66.5,137.7 66.8,138.8 67,140 67.3,141.1 67.5,142.2 67.8,143.4 68,144.5 68.3,145.6 68.5,146.7 68.8,147.9 69,149 69.3,150.1 69.5,151.2 69.8,152.2 70,153.3 70.3,154.4 70.5,155.5 70.8,156.6 71,157.6 71.3,158.7 71.5,159.7 71.8,160.8 72,161.8 72.3,162.9 72.5,163.9 72.8,164.9 73,166 73.3,167 73.5,168 73.8,169 74,170 74.3,171 74.5,172 74.8,173 75,174 75.3,174.9 75.5,175.9 75.8,176.9 76,177.8 76.3,178.8 76.5,179.7 76.8,180.7 77,181.6 77.3,182.6 77.5,183.5 77.8,184.4 78,185.3 78.3,186.2 78.5,187.2 78.8,188.1 79,189 79.3,189.9 79.5,190.7 79.8,191.6 80,192.5 80.3,193.4 80.5,194.2 80.8,195.1 81,196 81.3,196.8 81.5,197.7 81.8,198.5 82,199.3 82.3,200.2 82.5,201 82.8,201.8 83,202.6 83.3,203.4 83.5,204.2 83.8,205 84,205.8 84.3,206.6 84.5,207.4 84.8,208.2 85,209 85.3,209.7 85.5,210.5 85.8,211.2 86,212 86.3,212.7 86.5,213.5 86.8,214.2 87,215 87.3,215.7 87.5,216.4 87.8,217.1 88,217.8 88.3,218.5 88.5,219.2 88.8,219.9 89,220.6 89.3,221.3 89.5,222 89.8,222.7 90,223.3 90.3,224 90.5,224.7 90.8,225.3 91,226 91.3,226.6 91.5,227.2 91.8,227.9 92,228.5 92.3,229.1 92.5,229.7 92.8,230.4 93,231 93.3,231.6 93.5,232.2 93.8,232.7 94,233.3 94.3,233.9 94.5,234.5 94.8,235.1 95,235.6 95.3,236.2 95.5,236.7 95.8,237.3 96,237.8 96.3,238.4 96.5,238.9 96.8,239.4 97,240 97.3,240.5 97.5,241 97.8,241.5 98,242 98.3,242.5 98.5,243 98.8,243.5 99,244 99.3,244.4 99.5,244.9 99.8,245.4 100,245.8 100.3,246.3 100.5,246.7 100.8,247.2 101,247.6 101.3,248.1 101.5,248.5 101.8,248.9 102,249.3 102.3,249.7 102.5,250.2 102.8,250.6 103,251 103.3,251.4 103.5,251.7 103.8,252.1 104,252.5 104.3,252.9 104.5,253.2 104.8,253.6 105,254 105.3,254.3 105.5,254.7 105.8,255 106,255.3 106.3,255.7 106.5,256 106.8,256.3 107,256.6 107.3,256.9 107.5,257.2 107.8,257.5 108,257.8 108.3,258.1 108.5,258.4 108.8,258.7 109,259 109.3,259.2 109.5,259.5 109.8,259.7 110,260 110.3,260.2 110.5,260.5 110.8,260.7 111,261 111.3,261.2 111.5,261.4 111.8,261.6 112,261.8 112.3,262 112.5,262.2 112.8,262.4 113,262.6 113.3,262.8 113.5,263 113.8,263.2 114,263.3 114.3,263.5 114.5,263.7 114.8,263.8 115,264 115.3,264.1 115.5,264.2 115.8,264.4 116,264.5 116.3,264.6 116.5,264.7 116.8,264.9 117,265 117.3,265.1 117.5,265.2 117.8,265.2 118,265.3 118.3,265.4 118.5,265.5 118.8,265.6 119,265.6 119.3,265.7 119.5,265.7 119.8,265.8 120,265.8 120.3,265.9 120.5,265.9 120.8,265.9 121,266 121.3,266 121.5,266 121.8,266 122,266 122.3,266 122.5,266 122.8,266 123,266 123.3,265.9 123.5,265.9 123.8,265.9 124,265.8 124.3,265.8 124.5,265.7 124.8,265.7 125,265.6 125.3,265.6 125.5,265.5 125.8,265.4 126,265.3 126.3,265.2 126.5,265.2 126.8,265.1 127,265 127.3,264.9 127.5,264.7 127.8,264.6 128,264.5 128.3,264.4 128.5,264.2 128.8,264.1 129,264 129.3,263.8 129.5,263.7 129.8,263.5 130,263.3 130.3,263.2 130.5,263 130.8,262.8 131,262.6 131.3,262.4 131.5,262.2 131.8,262 132,261.8 132.3,261.6 132.5,261.4 132.8,261.2 133,261 133.3,260.7 133.5,260.5 133.8,260.2 134,260 134.3,259.7 134.5,259.5 134.8,259.2 135,259 135.3,258.7 135.5,258.4 135.8,258.1 136,257.8 136.3,257.5 136.5,257.2 136.8,256.9 137,256.6 137.3,256.3 137.5,256 137.8,255.7 138,255.3 138.3,255 138.5,254.7 138.8,254.3 139,254 139.3,253.6 139.5,253.2 139.8,252.9 140,252.5 140.3,252.1 140.5,251.7 140.8,251.4 141,251 141.3,250.6 141.5,250.2 141.8,249.7 142,249.3 142.3,248.9 142.5,248.5 142.8,248.1 143,247.6 143.3,247.2 143.5,246.7 143.8,246.3 144,245.8 144.3,245.4 144.5,244.9 144.8,244.4 145,244 145.3,243.5 145.5,243 145.8,242.5 146,242 146.3,241.5 146.5,241 146.8,240.5 147,240 147.3,239.4 147.5,238.9 147.8,238.4 148,237.8 148.3,237.3 148.5,236.7 148.8,236.2 149,235.6 149.3,235.1 149.5,234.5 149.8,233.9 150,233.3 150.3,232.7 150.5,232.2 150.8,231.6 151,231 151.3,230.4 151.5,229.7 151.8,229.1 152,228.5 152.3,227.9 152.5,227.2 152.8,226.6 153,226 153.3,225.3 153.5,224.7 153.8,224 154,223.3 154.3,222.7 154.5,222 154.8,221.3 155,220.6 155.3,219.9 155.5,219.2 155.8,218.5 156,217.8 156.3,217.1 156.5,216.4 156.8,215.7 157,215 157.3,214.2 157.5,213.5 157.8,212.7 158,212 158.3,211.2 158.5,210.5 158.8,209.7 159,209 159.3,208.2 159.5,207.4 159.8,206.6 160,205.8 160.3,205 160.5,204.2 160.8,203.4 161,202.6 161.3,201.8 161.5,201 161.8,200.2 162,199.3 162.3,198.5 162.5,197.7 162.8,196.8 163,196 163.3,195.1 163.5,194.2 163.8,193.4 164,192.5 164.3,191.6 164.5,190.7 164.8,189.9 165,189 165.3,188.1 165.5,187.2 165.8,186.2 166,185.3 166.3,184.4 166.5,183.5 166.8,182.6 167,181.6 167.3,180.7 167.5,179.7 167.8,178.8 168,177.8 168.3,176.9 168.5,175.9 168.8,174.9 169,174 169.3,173 169.5,172 169.8,171 170,170 170.3,169 170.5,168 170.8,167 171,166 171.3,164.9 171.5,163.9 171.8,162.9 172,161.8 172.3,160.8 172.5,159.7 172.8,158.7 173,157.6 173.3,156.6 173.5,155.5 173.8,154.4 174,153.3 174.3,152.2 174.5,151.2 174.8,150.1 175,149 175.3,147.9 175.5,146.7 175.8,145.6 176,144.5 176.3,143.4 176.5,142.2 176.8,141.1 177,140 177.3,138.8 177.5,137.7 177.8,136.5 178,135.3 178.3,134.2 178.5,133 178.8,131.8 179,130.6 179.3,129.4 179.5,128.2 179.8,127 180,125.8 180.3,124.6 180.5,123.4 180.8,122.2 181,121 181.3,119.7 181.5,118.5 181.8,117.2 182,116 182.3,114.7 182.5,113.5 182.8,112.2 183,111 183.3,109.7 183.5,108.4 183.8,107.1 184,105.8 184.3,104.5 184.5,103.2 184.8,101.9 185,100.6 185.3,99.3 185.5,98 185.8,96.7 186,95.3 186.3,94 186.5,92.7 186.8,91.3 187,90 187.3,88.6 187.5,87.2 187.8,85.9 188,84.5 188.3,83.1 188.5,81.7 188.8,80.4 189,79 189.3,77.6 189.5,76.2 189.8,74.7 190,73.3 190.3,71.9 190.5,70.5 190.8,69.1 191,67.6 191.3,66.2 191.5,64.7 191.8,63.3 192,61.8 192.3,60.4 192.5,58.9 192.8,57.4 193,56 193.3,54.5 193.5,53 193.8,51.5 194,50 194.3,48.5 194.5,47 194.8,45.5 195,44 195.3,42.4 195.5,40.9 195.8,39.4 196,37.8 196.3,36.3 196.5,34.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="46.3,26.9 52.8,36 42.9,37.6" fill="currentColor"/>
  <polygon points="197.8,26.9 201.1,37.6 191.2,36" fill="currentColor"/>
</svg>
</div>


If $k>0$, the graph shifts upward, whereas if $k<0$, the graph shifts
downward. Above, $k>0$, so the graph is shifted 4 units upward. If $h>0$, the
graph shifts toward the right and if $h<0$, the graph shifts to the left.
Above, $h<0$, so the graph is shifted 2 units to the left. The magnitude of
$a$ indicates the stretch of the graph. If $|a|>1$, the point associated with
a particular $x$-value shifts farther from the $x$-axis, so the graph appears
to become narrower, and there is a vertical stretch. But if $|a|<1$, the
point associated with a particular $x$-value shifts closer to the $x$-axis,
so the graph appears to become wider, but in fact there is a vertical
compression. Above, $|a|>1$, so the graph becomes narrower.

The standard form and the general form are equivalent methods of describing
the same function. We can see this by expanding out the general form and
setting it equal to the standard form.

$$
\begin{array}{lrcl}
& a(x-h)^2+k &=& ax^2+bx+c \\[4pt]
& ax^2-2ahx+(ah^2+k) &=& ax^2+bx+c
\end{array}
$$

For the linear terms to be equal, the coefficients must be equal.

$$-2ah=b,\ \text{so}\ h=-\tfrac{b}{2a}$$

This is the **axis of symmetry** we defined earlier. Setting the constant
terms equal:

$$
\begin{array}{lrcl}
& ah^2+k &=& c \\[4pt]
& k &=& c-ah^2 \\[4pt]
& &=& c-a\left(-\tfrac{b}{2a}\right)^2 \\[4pt]
& &=& c-\tfrac{b^2}{4a}
\end{array}
$$

In practice, though, it is usually easier to remember that $k$ is the output
value of the function when the input is $h$, so $f(h)=k$.

{{< callout type="info" >}}
**Forms of quadratic functions.** A quadratic function is a function of
degree two. The graph of a **quadratic function** is a parabola. The
**general form of a quadratic function** is $f(x)=ax^2+bx+c$ where $a$, $b$,
and $c$ are real numbers and $a\ne0$.

The **standard form of a quadratic function** is $f(x)=a(x-h)^2+k$.

The vertex $(h,k)$ is located at

$$h=-\tfrac{b}{2a},\quad k=f(h)=f\!\left(\tfrac{-b}{2a}\right)$$
{{< /callout >}}

{{< callout type="info" >}}
**How to:** given a graph of a quadratic function, write the equation of the
function in general form.

1. Identify the horizontal shift of the parabola; this value is $h$. Identify
   the vertical shift of the parabola; this value is $k$.
2. Substitute the values of the horizontal and vertical shift for $h$ and $k$
   in the function $f(x)=a(x-h)^2+k$.
3. Substitute the values of any point, other than the vertex, on the graph of
   the parabola for $x$ and $f(x)$.
4. Solve for the stretch factor, $|a|$.
5. If the parabola opens up, $a>0$. If the parabola opens down, $a<0$ since
   this means the graph was reflected about the $x$-axis.
6. Expand and simplify to write in general form.
{{< /callout >}}

**Example.** Write an equation for the quadratic function $g$ shown below as
a transformation of $f(x)=x^2$, and then expand the formula, and simplify
terms to write the equation in general form.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A parabola opening upward with vertex at (-2, -3), passing through the point (0, -1).","xMin":-7,"xMax":3,"yMin":-5,"yMax":5,"unit":20,"tickLabels":true,"quadratics":[{"a":0.5,"b":2,"c":-1,"label":"g"}]}'>
<svg role="img" aria-label="A parabola opening upward with vertex at (-2, -3), passing through the point (0, -1)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 252" width="252" height="252" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="226" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="226" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="226" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="226" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="226" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="226" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="226" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="226" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="226" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="226" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="226" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="226" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="226" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="226" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="226" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="226" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="226" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="226" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="226" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="126" x2="228" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="24" x2="166" y2="228" stroke="currentColor" stroke-width="1"/>
  <polygon points="238,126 228,131 228,121" fill="currentColor"/>
  <polygon points="166,14 171,24 161,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="166,238 161,228 171,228" fill="currentColor"/>
  <text x="236" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="123" x2="26" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="141" font-size="11" fill="currentColor" text-anchor="middle">−7</text>
  <line x1="46" y1="123" x2="46" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="141" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="66" y1="123" x2="66" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="141" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="86" y1="123" x2="86" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="141" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="106" y1="123" x2="106" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="141" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="126" y1="123" x2="126" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="141" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="146" y1="123" x2="146" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="141" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="186" y1="123" x2="186" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="141" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="206" y1="123" x2="206" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="141" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="226" y1="123" x2="226" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="141" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="163" y1="226" x2="169" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="230" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="163" y1="206" x2="169" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="210" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="163" y1="186" x2="169" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="190" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="163" y1="166" x2="169" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="170" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="163" y1="146" x2="169" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="163" y1="106" x2="169" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="110" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="163" y1="86" x2="169" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="90" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="163" y1="66" x2="169" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="70" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="163" y1="46" x2="169" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="50" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="163" y1="26" x2="169" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="48,33.8 48,33.9 48.3,34.9 48.5,35.8 48.8,36.8 49,37.8 49.3,38.7 49.5,39.7 49.8,40.6 50,41.6 50.3,42.5 50.5,43.5 50.8,44.4 51,45.4 51.3,46.3 51.5,47.2 51.8,48.2 52,49.1 52.3,50 52.5,50.9 52.8,51.9 53,52.8 53.3,53.7 53.5,54.6 53.8,55.5 54,56.4 54.3,57.3 54.5,58.2 54.8,59.1 55,60 55.3,60.9 55.5,61.7 55.8,62.6 56,63.5 56.3,64.4 56.5,65.2 56.8,66.1 57,67 57.3,67.8 57.5,68.7 57.8,69.5 58,70.4 58.3,71.2 58.5,72.1 58.8,72.9 59,73.8 59.3,74.6 59.5,75.4 59.8,76.3 60,77.1 60.3,77.9 60.5,78.7 60.8,79.6 61,80.4 61.3,81.2 61.5,82 61.8,82.8 62,83.6 62.3,84.4 62.5,85.2 62.8,86 63,86.8 63.3,87.6 63.5,88.3 63.8,89.1 64,89.9 64.3,90.7 64.5,91.4 64.8,92.2 65,93 65.3,93.7 65.5,94.5 65.8,95.2 66,96 66.3,96.7 66.5,97.5 66.8,98.2 67,99 67.3,99.7 67.5,100.4 67.8,101.2 68,101.9 68.3,102.6 68.5,103.3 68.8,104.1 69,104.8 69.3,105.5 69.5,106.2 69.8,106.9 70,107.6 70.3,108.3 70.5,109 70.8,109.7 71,110.4 71.3,111.1 71.5,111.7 71.8,112.4 72,113.1 72.3,113.8 72.5,114.4 72.8,115.1 73,115.8 73.3,116.4 73.5,117.1 73.8,117.7 74,118.4 74.3,119 74.5,119.7 74.8,120.3 75,121 75.3,121.6 75.5,122.2 75.8,122.9 76,123.5 76.3,124.1 76.5,124.7 76.8,125.4 77,126 77.3,126.6 77.5,127.2 77.8,127.8 78,128.4 78.3,129 78.5,129.6 78.8,130.2 79,130.8 79.3,131.4 79.5,131.9 79.8,132.5 80,133.1 80.3,133.7 80.5,134.2 80.8,134.8 81,135.4 81.3,135.9 81.5,136.5 81.8,137 82,137.6 82.3,138.1 82.5,138.7 82.8,139.2 83,139.8 83.3,140.3 83.5,140.8 83.8,141.4 84,141.9 84.3,142.4 84.5,142.9 84.8,143.5 85,144 85.3,144.5 85.5,145 85.8,145.5 86,146 86.3,146.5 86.5,147 86.8,147.5 87,148 87.3,148.5 87.5,148.9 87.8,149.4 88,149.9 88.3,150.4 88.5,150.8 88.8,151.3 89,151.8 89.3,152.2 89.5,152.7 89.8,153.1 90,153.6 90.3,154 90.5,154.5 90.8,154.9 91,155.4 91.3,155.8 91.5,156.2 91.8,156.7 92,157.1 92.3,157.5 92.5,157.9 92.8,158.4 93,158.8 93.3,159.2 93.5,159.6 93.8,160 94,160.4 94.3,160.8 94.5,161.2 94.8,161.6 95,162 95.3,162.4 95.5,162.7 95.8,163.1 96,163.5 96.3,163.9 96.5,164.2 96.8,164.6 97,165 97.3,165.3 97.5,165.7 97.8,166 98,166.4 98.3,166.7 98.5,167.1 98.8,167.4 99,167.8 99.3,168.1 99.5,168.4 99.8,168.8 100,169.1 100.3,169.4 100.5,169.7 100.8,170.1 101,170.4 101.3,170.7 101.5,171 101.8,171.3 102,171.6 102.3,171.9 102.5,172.2 102.8,172.5 103,172.8 103.3,173.1 103.5,173.3 103.8,173.6 104,173.9 104.3,174.2 104.5,174.4 104.8,174.7 105,175 105.3,175.2 105.5,175.5 105.8,175.7 106,176 106.3,176.2 106.5,176.5 106.8,176.7 107,177 107.3,177.2 107.5,177.4 107.8,177.7 108,177.9 108.3,178.1 108.5,178.3 108.8,178.6 109,178.8 109.3,179 109.5,179.2 109.8,179.4 110,179.6 110.3,179.8 110.5,180 110.8,180.2 111,180.4 111.3,180.6 111.5,180.7 111.8,180.9 112,181.1 112.3,181.3 112.5,181.4 112.8,181.6 113,181.8 113.3,181.9 113.5,182.1 113.8,182.2 114,182.4 114.3,182.5 114.5,182.7 114.8,182.8 115,183 115.3,183.1 115.5,183.2 115.8,183.4 116,183.5 116.3,183.6 116.5,183.7 116.8,183.9 117,184 117.3,184.1 117.5,184.2 117.8,184.3 118,184.4 118.3,184.5 118.5,184.6 118.8,184.7 119,184.8 119.3,184.9 119.5,184.9 119.8,185 120,185.1 120.3,185.2 120.5,185.2 120.8,185.3 121,185.4 121.3,185.4 121.5,185.5 121.8,185.5 122,185.6 122.3,185.6 122.5,185.7 122.8,185.7 123,185.8 123.3,185.8 123.5,185.8 123.8,185.9 124,185.9 124.3,185.9 124.5,185.9 124.8,186 125,186 125.3,186 125.5,186 125.8,186 126,186 126.3,186 126.5,186 126.8,186 127,186 127.3,186 127.5,185.9 127.8,185.9 128,185.9 128.3,185.9 128.5,185.8 128.8,185.8 129,185.8 129.3,185.7 129.5,185.7 129.8,185.6 130,185.6 130.3,185.5 130.5,185.5 130.8,185.4 131,185.4 131.3,185.3 131.5,185.2 131.8,185.2 132,185.1 132.3,185 132.5,184.9 132.8,184.9 133,184.8 133.3,184.7 133.5,184.6 133.8,184.5 134,184.4 134.3,184.3 134.5,184.2 134.8,184.1 135,184 135.3,183.9 135.5,183.7 135.8,183.6 136,183.5 136.3,183.4 136.5,183.2 136.8,183.1 137,183 137.3,182.8 137.5,182.7 137.8,182.5 138,182.4 138.3,182.2 138.5,182.1 138.8,181.9 139,181.8 139.3,181.6 139.5,181.4 139.8,181.3 140,181.1 140.3,180.9 140.5,180.7 140.8,180.6 141,180.4 141.3,180.2 141.5,180 141.8,179.8 142,179.6 142.3,179.4 142.5,179.2 142.8,179 143,178.8 143.3,178.6 143.5,178.3 143.8,178.1 144,177.9 144.3,177.7 144.5,177.4 144.8,177.2 145,177 145.3,176.7 145.5,176.5 145.8,176.2 146,176 146.3,175.7 146.5,175.5 146.8,175.2 147,175 147.3,174.7 147.5,174.4 147.8,174.2 148,173.9 148.3,173.6 148.5,173.3 148.8,173.1 149,172.8 149.3,172.5 149.5,172.2 149.8,171.9 150,171.6 150.3,171.3 150.5,171 150.8,170.7 151,170.4 151.3,170.1 151.5,169.7 151.8,169.4 152,169.1 152.3,168.8 152.5,168.4 152.8,168.1 153,167.8 153.3,167.4 153.5,167.1 153.8,166.7 154,166.4 154.3,166 154.5,165.7 154.8,165.3 155,165 155.3,164.6 155.5,164.2 155.8,163.9 156,163.5 156.3,163.1 156.5,162.7 156.8,162.4 157,162 157.3,161.6 157.5,161.2 157.8,160.8 158,160.4 158.3,160 158.5,159.6 158.8,159.2 159,158.8 159.3,158.4 159.5,157.9 159.8,157.5 160,157.1 160.3,156.7 160.5,156.2 160.8,155.8 161,155.4 161.3,154.9 161.5,154.5 161.8,154 162,153.6 162.3,153.1 162.5,152.7 162.8,152.2 163,151.8 163.3,151.3 163.5,150.8 163.8,150.4 164,149.9 164.3,149.4 164.5,148.9 164.8,148.5 165,148 165.3,147.5 165.5,147 165.8,146.5 166,146 166.3,145.5 166.5,145 166.8,144.5 167,144 167.3,143.5 167.5,142.9 167.8,142.4 168,141.9 168.3,141.4 168.5,140.8 168.8,140.3 169,139.8 169.3,139.2 169.5,138.7 169.8,138.1 170,137.6 170.3,137 170.5,136.5 170.8,135.9 171,135.4 171.3,134.8 171.5,134.2 171.8,133.7 172,133.1 172.3,132.5 172.5,131.9 172.8,131.4 173,130.8 173.3,130.2 173.5,129.6 173.8,129 174,128.4 174.3,127.8 174.5,127.2 174.8,126.6 175,126 175.3,125.4 175.5,124.7 175.8,124.1 176,123.5 176.3,122.9 176.5,122.2 176.8,121.6 177,121 177.3,120.3 177.5,119.7 177.8,119 178,118.4 178.3,117.7 178.5,117.1 178.8,116.4 179,115.8 179.3,115.1 179.5,114.4 179.8,113.8 180,113.1 180.3,112.4 180.5,111.7 180.8,111.1 181,110.4 181.3,109.7 181.5,109 181.8,108.3 182,107.6 182.3,106.9 182.5,106.2 182.8,105.5 183,104.8 183.3,104.1 183.5,103.3 183.8,102.6 184,101.9 184.3,101.2 184.5,100.4 184.8,99.7 185,99 185.3,98.2 185.5,97.5 185.8,96.7 186,96 186.3,95.2 186.5,94.5 186.8,93.7 187,93 187.3,92.2 187.5,91.4 187.8,90.7 188,89.9 188.3,89.1 188.5,88.3 188.8,87.6 189,86.8 189.3,86 189.5,85.2 189.8,84.4 190,83.6 190.3,82.8 190.5,82 190.8,81.2 191,80.4 191.3,79.6 191.5,78.7 191.8,77.9 192,77.1 192.3,76.3 192.5,75.4 192.8,74.6 193,73.8 193.3,72.9 193.5,72.1 193.8,71.2 194,70.4 194.3,69.5 194.5,68.7 194.8,67.8 195,67 195.3,66.1 195.5,65.2 195.8,64.4 196,63.5 196.3,62.6 196.5,61.7 196.8,60.9 197,60 197.3,59.1 197.5,58.2 197.8,57.3 198,56.4 198.3,55.5 198.5,54.6 198.8,53.7 199,52.8 199.3,51.9 199.5,50.9 199.8,50 200,49.1 200.3,48.2 200.5,47.2 200.8,46.3 201,45.4 201.3,44.4 201.5,43.5 201.8,42.5 202,41.6 202.3,40.6 202.5,39.7 202.8,38.7 203,37.8 203.3,36.8 203.5,35.8 203.8,34.9 204,33.9 204,33.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="46,26 53.3,34.5 43.6,36.9" fill="currentColor"/>
  <polygon points="206,26 208.4,36.9 198.7,34.5" fill="currentColor"/>
</svg>
</div>


**Solution.** We can see the graph of $g$ is the graph of $f(x)=x^2$ shifted
to the left 2 and down 3, giving a formula in the form
$g(x)=a(x+2)^2-3$.

Substituting the coordinates of a point on the curve, such as $(0,-1)$, we
can solve for the stretch factor.

$$
\begin{array}{lrcl}
& -1 &=& a(0+2)^2-3 \\[4pt]
& 2 &=& 4a \\[4pt]
& a &=& \tfrac{1}{2}
\end{array}
$$

In standard form, the algebraic model for this graph is
$g(x)=\tfrac{1}{2}(x+2)^2-3$.

To write this in general polynomial form, we can expand the formula and
simplify terms.

$$
\begin{array}{lrcl}
& g(x) &=& \tfrac{1}{2}(x+2)^2-3 \\[4pt]
& &=& \tfrac{1}{2}(x+2)(x+2)-3 \\[4pt]
& &=& \tfrac{1}{2}(x^2+4x+4)-3 \\[4pt]
& &=& \tfrac{1}{2}x^2+2x+2-3 \\[4pt]
& &=& \tfrac{1}{2}x^2+2x-1
\end{array}
$$

Notice that the horizontal and vertical shifts of the basic graph of the
quadratic function determine the location of the vertex of the parabola; the
vertex is unaffected by stretches and compressions.

**Analysis.** We can check our work using the table feature on a graphing
utility. First enter $\text{Y1}=\tfrac{1}{2}(x+2)^2-3$. Next, select
$\text{TBLSET}$, then use $\text{TblStart}=-6$ and $\Delta\text{Tbl}=2$, and
select $\text{TABLE}$.

| $x$ | $-6$ | $-4$ | $-2$ | $0$ | $2$ |
| :--- | ---: | ---: | ---: | ---: | ---: |
| $y$ | $5$ | $-1$ | $-3$ | $-1$ | $5$ |

The ordered pairs in the table correspond to points on the graph.

A coordinate grid can be superimposed over the quadratic path of a
basketball, with the shooter releasing the ball at the origin. Assume the
point $(-4,7)$ is the highest point of the basketball's trajectory, and that
the hoop sits 4 feet high at the horizontal position $x=-7.5$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A parabola modeling a basketball&#39;s path, released at the origin and reaching its highest point at (-4, 7). At the hoop&#39;s horizontal position, x = -7.5, the curve&#39;s height is well below the marked hoop height of 4 feet.","xMin":-9,"xMax":1,"yMin":-1,"yMax":8,"unit":24,"tickLabels":true,"quadratics":[{"a":-0.4375,"b":-3.5,"c":0,"from":-8.3,"to":0.4}],"points":[{"at":[0,0],"label":"release","labelSide":"se"},{"at":[-4,7],"label":"(-4, 7)","labelSide":"n"},{"at":[-7.5,4],"label":"hoop, 4 ft","labelSide":"n","open":true}]}'>
<svg role="img" aria-label="A parabola modeling a basketball's path, released at the origin and reaching its highest point at (-4, 7). At the hoop's horizontal position, x = -7.5, the curve's height is well below the marked hoop height of 4 feet." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 268" width="292" height="268" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="242" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="242" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="242" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="242" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="242" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="242" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="242" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="242" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="242" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="242" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="266" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="266" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="266" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="266" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="266" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="266" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="266" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="266" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="218" x2="268" y2="218" stroke="currentColor" stroke-width="1"/>
  <line x1="242" y1="24" x2="242" y2="244" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,218 268,223 268,213" fill="currentColor"/>
  <polygon points="242,14 247,24 237,24" fill="currentColor"/>
  <polygon points="14,218 24,213 24,223" fill="currentColor"/>
  <polygon points="242,254 237,244 247,244" fill="currentColor"/>
  <text x="276" y="210" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="250" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="215" x2="26" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="233" font-size="11" fill="currentColor" text-anchor="middle">−9</text>
  <line x1="50" y1="215" x2="50" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="233" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="74" y1="215" x2="74" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="233" font-size="11" fill="currentColor" text-anchor="middle">−7</text>
  <line x1="98" y1="215" x2="98" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="233" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="122" y1="215" x2="122" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="233" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="146" y1="215" x2="146" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="233" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="170" y1="215" x2="170" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="233" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="194" y1="215" x2="194" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="233" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="218" y1="215" x2="218" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="233" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="266" y1="215" x2="266" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="233" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="239" y1="242" x2="245" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="246" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="239" y1="194" x2="245" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="198" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="239" y1="170" x2="245" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="174" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="239" y1="146" x2="245" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="150" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="239" y1="122" x2="245" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="126" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="239" y1="98" x2="245" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="102" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="239" y1="74" x2="245" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="78" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="239" y1="50" x2="245" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="54" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <line x1="239" y1="26" x2="245" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <polyline points="45.6,233.6 45.8,233 46,232.1 46.3,231.2 46.5,230.3 46.8,229.4 47,228.5 47.3,227.6 47.5,226.7 47.8,225.8 48,224.9 48.3,224 48.5,223.1 48.8,222.2 49,221.4 49.3,220.5 49.5,219.6 49.8,218.7 50,217.8 50.3,217 50.5,216.1 50.8,215.2 51,214.4 51.3,213.5 51.5,212.6 51.8,211.8 52,210.9 52.3,210.1 52.5,209.2 52.8,208.4 53,207.5 53.3,206.7 53.5,205.8 53.8,205 54,204.2 54.3,203.3 54.5,202.5 54.8,201.7 55,200.8 55.3,200 55.5,199.2 55.8,198.4 56,197.5 56.3,196.7 56.5,195.9 56.8,195.1 57,194.3 57.3,193.5 57.5,192.7 57.8,191.9 58,191.1 58.3,190.3 58.5,189.5 58.8,188.7 59,187.9 59.3,187.1 59.5,186.3 59.8,185.5 60,184.7 60.3,183.9 60.5,183.2 60.8,182.4 61,181.6 61.3,180.8 61.5,180.1 61.8,179.3 62,178.5 62.3,177.8 62.5,177 62.8,176.2 63,175.5 63.3,174.7 63.5,174 63.8,173.2 64,172.5 64.3,171.7 64.5,171 64.8,170.3 65,169.5 65.3,168.8 65.5,168 65.8,167.3 66,166.6 66.3,165.9 66.5,165.1 66.8,164.4 67,163.7 67.3,163 67.5,162.3 67.8,161.5 68,160.8 68.3,160.1 68.5,159.4 68.8,158.7 69,158 69.3,157.3 69.5,156.6 69.8,155.9 70,155.2 70.3,154.5 70.5,153.8 70.8,153.2 71,152.5 71.3,151.8 71.5,151.1 71.8,150.4 72,149.8 72.3,149.1 72.5,148.4 72.8,147.8 73,147.1 73.3,146.4 73.5,145.8 73.8,145.1 74,144.4 74.3,143.8 74.5,143.1 74.8,142.5 75,141.8 75.3,141.2 75.5,140.6 75.8,139.9 76,139.3 76.3,138.6 76.5,138 76.8,137.4 77,136.7 77.3,136.1 77.5,135.5 77.8,134.9 78,134.3 78.3,133.6 78.5,133 78.8,132.4 79,131.8 79.3,131.2 79.5,130.6 79.8,130 80,129.4 80.3,128.8 80.5,128.2 80.8,127.6 81,127 81.3,126.4 81.5,125.8 81.8,125.2 82,124.6 82.3,124.1 82.5,123.5 82.8,122.9 83,122.3 83.3,121.8 83.5,121.2 83.8,120.6 84,120 84.3,119.5 84.5,118.9 84.8,118.4 85,117.8 85.3,117.3 85.5,116.7 85.8,116.2 86,115.6 86.3,115.1 86.5,114.5 86.8,114 87,113.4 87.3,112.9 87.5,112.4 87.8,111.8 88,111.3 88.3,110.8 88.5,110.3 88.8,109.7 89,109.2 89.3,108.7 89.5,108.2 89.8,107.7 90,107.2 90.3,106.6 90.5,106.1 90.8,105.6 91,105.1 91.3,104.6 91.5,104.1 91.8,103.6 92,103.2 92.3,102.7 92.5,102.2 92.8,101.7 93,101.2 93.3,100.7 93.5,100.2 93.8,99.8 94,99.3 94.3,98.8 94.5,98.3 94.8,97.9 95,97.4 95.2,97 95.5,96.5 95.7,96 96,95.6 96.2,95.1 96.5,94.7 96.7,94.2 97,93.8 97.2,93.3 97.5,92.9 97.7,92.4 98,92 98.2,91.6 98.5,91.1 98.7,90.7 99,90.3 99.2,89.8 99.5,89.4 99.7,89 100,88.6 100.2,88.2 100.5,87.7 100.7,87.3 101,86.9 101.2,86.5 101.5,86.1 101.7,85.7 102,85.3 102.2,84.9 102.5,84.5 102.7,84.1 103,83.7 103.2,83.3 103.5,82.9 103.7,82.6 104,82.2 104.2,81.8 104.5,81.4 104.7,81 105,80.7 105.2,80.3 105.5,79.9 105.7,79.5 106,79.2 106.2,78.8 106.5,78.5 106.7,78.1 107,77.7 107.2,77.4 107.5,77 107.7,76.7 108,76.3 108.2,76 108.5,75.7 108.7,75.3 109,75 109.2,74.6 109.5,74.3 109.7,74 110,73.6 110.2,73.3 110.5,73 110.7,72.7 111,72.4 111.2,72 111.5,71.7 111.7,71.4 112,71.1 112.2,70.8 112.5,70.5 112.7,70.2 113,69.9 113.2,69.6 113.5,69.3 113.7,69 114,68.7 114.2,68.4 114.5,68.1 114.7,67.8 115,67.5 115.2,67.3 115.5,67 115.7,66.7 116,66.4 116.2,66.2 116.5,65.9 116.7,65.6 117,65.4 117.2,65.1 117.5,64.8 117.7,64.6 118,64.3 118.2,64.1 118.5,63.8 118.7,63.6 119,63.3 119.2,63.1 119.5,62.8 119.7,62.6 120,62.3 120.2,62.1 120.5,61.9 120.7,61.6 121,61.4 121.2,61.2 121.5,61 121.7,60.7 122,60.5 122.2,60.3 122.5,60.1 122.7,59.9 123,59.7 123.2,59.5 123.5,59.3 123.7,59 124,58.8 124.2,58.6 124.5,58.4 124.7,58.3 125,58.1 125.2,57.9 125.5,57.7 125.7,57.5 126,57.3 126.2,57.1 126.5,57 126.7,56.8 127,56.6 127.2,56.4 127.5,56.3 127.7,56.1 128,55.9 128.2,55.8 128.5,55.6 128.7,55.4 129,55.3 129.2,55.1 129.5,55 129.7,54.8 130,54.7 130.2,54.5 130.5,54.4 130.7,54.3 131,54.1 131.2,54 131.5,53.9 131.7,53.7 132,53.6 132.2,53.5 132.5,53.3 132.7,53.2 133,53.1 133.2,53 133.5,52.9 133.7,52.8 134,52.6 134.2,52.5 134.5,52.4 134.7,52.3 135,52.2 135.2,52.1 135.5,52 135.7,51.9 136,51.8 136.2,51.7 136.5,51.7 136.7,51.6 137,51.5 137.2,51.4 137.5,51.3 137.7,51.3 138,51.2 138.2,51.1 138.5,51 138.7,51 139,50.9 139.2,50.8 139.5,50.8 139.7,50.7 140,50.7 140.2,50.6 140.5,50.6 140.7,50.5 141,50.5 141.2,50.4 141.5,50.4 141.7,50.3 142,50.3 142.2,50.3 142.5,50.2 142.7,50.2 143,50.2 143.2,50.1 143.5,50.1 143.7,50.1 144,50.1 144.2,50.1 144.5,50 144.7,50 145,50 145.2,50 145.5,50 145.7,50 146,50 146.2,50 146.5,50 146.7,50 147,50 147.2,50 147.4,50 147.7,50.1 147.9,50.1 148.2,50.1 148.4,50.1 148.7,50.1 148.9,50.2 149.2,50.2 149.4,50.2 149.7,50.2 149.9,50.3 150.2,50.3 150.4,50.4 150.7,50.4 150.9,50.4 151.2,50.5 151.4,50.5 151.7,50.6 151.9,50.6 152.2,50.7 152.4,50.8 152.7,50.8 152.9,50.9 153.2,50.9 153.4,51 153.7,51.1 153.9,51.2 154.2,51.2 154.4,51.3 154.7,51.4 154.9,51.5 155.2,51.5 155.4,51.6 155.7,51.7 155.9,51.8 156.2,51.9 156.4,52 156.7,52.1 156.9,52.2 157.2,52.3 157.4,52.4 157.7,52.5 157.9,52.6 158.2,52.7 158.4,52.8 158.7,52.9 158.9,53.1 159.2,53.2 159.4,53.3 159.7,53.4 159.9,53.5 160.2,53.7 160.4,53.8 160.7,53.9 160.9,54.1 161.2,54.2 161.4,54.3 161.7,54.5 161.9,54.6 162.2,54.8 162.4,54.9 162.7,55.1 162.9,55.2 163.2,55.4 163.4,55.5 163.7,55.7 163.9,55.9 164.2,56 164.4,56.2 164.7,56.4 164.9,56.5 165.2,56.7 165.4,56.9 165.7,57.1 165.9,57.2 166.2,57.4 166.4,57.6 166.7,57.8 166.9,58 167.2,58.2 167.4,58.4 167.7,58.6 167.9,58.8 168.2,59 168.4,59.2 168.7,59.4 168.9,59.6 169.2,59.8 169.4,60 169.7,60.2 169.9,60.4 170.2,60.7 170.4,60.9 170.7,61.1 170.9,61.3 171.2,61.6 171.4,61.8 171.7,62 171.9,62.3 172.2,62.5 172.4,62.7 172.7,63 172.9,63.2 173.2,63.5 173.4,63.7 173.7,64 173.9,64.2 174.2,64.5 174.4,64.7 174.7,65 174.9,65.2 175.2,65.5 175.4,65.8 175.7,66.1 175.9,66.3 176.2,66.6 176.4,66.9 176.7,67.1 176.9,67.4 177.2,67.7 177.4,68 177.7,68.3 177.9,68.6 178.2,68.9 178.4,69.2 178.7,69.5 178.9,69.8 179.2,70.1 179.4,70.4 179.7,70.7 179.9,71 180.2,71.3 180.4,71.6 180.7,71.9 180.9,72.2 181.2,72.5 181.4,72.9 181.7,73.2 181.9,73.5 182.2,73.8 182.4,74.2 182.7,74.5 182.9,74.8 183.2,75.2 183.4,75.5 183.7,75.9 183.9,76.2 184.2,76.6 184.4,76.9 184.7,77.3 184.9,77.6 185.2,78 185.4,78.3 185.7,78.7 185.9,79 186.2,79.4 186.4,79.8 186.7,80.1 186.9,80.5 187.2,80.9 187.4,81.3 187.7,81.6 187.9,82 188.2,82.4 188.4,82.8 188.7,83.2 188.9,83.6 189.2,84 189.4,84.4 189.7,84.7 189.9,85.1 190.2,85.5 190.4,86 190.7,86.4 190.9,86.8 191.2,87.2 191.4,87.6 191.7,88 191.9,88.4 192.2,88.8 192.4,89.3 192.7,89.7 192.9,90.1 193.2,90.5 193.4,91 193.7,91.4 193.9,91.8 194.2,92.3 194.4,92.7 194.7,93.2 194.9,93.6 195.2,94 195.4,94.5 195.7,94.9 195.9,95.4 196.2,95.9 196.4,96.3 196.7,96.8 196.9,97.2 197.2,97.7 197.4,98.2 197.7,98.6 197.9,99.1 198.2,99.6 198.4,100.1 198.7,100.5 198.9,101 199.2,101.5 199.4,102 199.6,102.5 199.9,103 200.1,103.5 200.4,103.9 200.6,104.4 200.9,104.9 201.1,105.4 201.4,105.9 201.6,106.4 201.9,107 202.1,107.5 202.4,108 202.6,108.5 202.9,109 203.1,109.5 203.4,110.1 203.6,110.6 203.9,111.1 204.1,111.6 204.4,112.2 204.6,112.7 204.9,113.2 205.1,113.8 205.4,114.3 205.6,114.8 205.9,115.4 206.1,115.9 206.4,116.5 206.6,117 206.9,117.6 207.1,118.1 207.4,118.7 207.6,119.3 207.9,119.8 208.1,120.4 208.4,121 208.6,121.5 208.9,122.1 209.1,122.7 209.4,123.3 209.6,123.8 209.9,124.4 210.1,125 210.4,125.6 210.6,126.2 210.9,126.8 211.1,127.3 211.4,127.9 211.6,128.5 211.9,129.1 212.1,129.7 212.4,130.3 212.6,130.9 212.9,131.6 213.1,132.2 213.4,132.8 213.6,133.4 213.9,134 214.1,134.6 214.4,135.3 214.6,135.9 214.9,136.5 215.1,137.1 215.4,137.8 215.6,138.4 215.9,139 216.1,139.7 216.4,140.3 216.6,140.9 216.9,141.6 217.1,142.2 217.4,142.9 217.6,143.5 217.9,144.2 218.1,144.8 218.4,145.5 218.6,146.2 218.9,146.8 219.1,147.5 219.4,148.2 219.6,148.8 219.9,149.5 220.1,150.2 220.4,150.9 220.6,151.5 220.9,152.2 221.1,152.9 221.4,153.6 221.6,154.3 221.9,155 222.1,155.6 222.4,156.3 222.6,157 222.9,157.7 223.1,158.4 223.4,159.1 223.6,159.8 223.9,160.6 224.1,161.3 224.4,162 224.6,162.7 224.9,163.4 225.1,164.1 225.4,164.9 225.6,165.6 225.9,166.3 226.1,167 226.4,167.8 226.6,168.5 226.9,169.2 227.1,170 227.4,170.7 227.6,171.4 227.9,172.2 228.1,172.9 228.4,173.7 228.6,174.4 228.9,175.2 229.1,175.9 229.4,176.7 229.6,177.5 229.9,178.2 230.1,179 230.4,179.8 230.6,180.5 230.9,181.3 231.1,182.1 231.4,182.9 231.6,183.6 231.9,184.4 232.1,185.2 232.4,186 232.6,186.8 232.9,187.6 233.1,188.4 233.4,189.1 233.6,189.9 233.9,190.7 234.1,191.5 234.4,192.3 234.6,193.2 234.9,194 235.1,194.8 235.4,195.6 235.6,196.4 235.9,197.2 236.1,198 236.4,198.9 236.6,199.7 236.9,200.5 237.1,201.3 237.4,202.2 237.6,203 237.9,203.8 238.1,204.7 238.4,205.5 238.6,206.4 238.9,207.2 239.1,208 239.4,208.9 239.6,209.7 239.9,210.6 240.1,211.5 240.4,212.3 240.6,213.2 240.9,214 241.1,214.9 241.4,215.8 241.6,216.6 241.9,217.5 242.1,218.4 242.4,219.3 242.6,220.1 242.9,221 243.1,221.9 243.4,222.8 243.6,223.7 243.9,224.6 244.1,225.5 244.4,226.4 244.6,227.2 244.9,228.1 245.1,229 245.4,230 245.6,230.9 245.9,231.8 246.1,232.7 246.4,233.6 246.5,234.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="43.5,241.3 41.3,230.4 51,233" fill="currentColor"/>
  <polygon points="248.6,241.9 241.2,233.6 250.8,230.9" fill="currentColor"/>
  <circle cx="242" cy="218" r="4" fill="currentColor"/>
  <circle cx="146" cy="50" r="4" fill="currentColor"/>
  <circle cx="62" cy="122" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="230.8" y="238.2" font-size="13" fill="currentColor" text-anchor="end">release</text>
  <text x="146" y="36" font-size="13" fill="currentColor" text-anchor="middle">(−4, 7)</text>
  <text x="62" y="145" font-size="13" fill="currentColor" text-anchor="middle">hoop, 4 ft</text>
</svg>
</div>


{{< fillin
  question="Find an equation for the path of the basketball, in standard (vertex) form."
  answer="-\frac{7}{16}(x+4)^2+7"
  answerForm="vertex-form"
  answerDisplay="$h(x)=-\tfrac{7}{16}(x+4)^2+7$"
  hint="The vertex is the highest point, $(-4,7)$; substitute the origin for $x$ and $h(x)$ to solve for the stretch factor $a$."
>}}

{{< multiplechoice
  question="Using that equation, does the shooter make the basket?"
  answer="No, because the ball's height at the hoop, x = -7.5, is only about 1.64 feet"
  hint="Evaluate the equation at $x=-7.5$ and compare it with the hoop's height of 4 feet."
>}}
Yes, because the ball's height at the hoop, x = -7.5, is about 4 feet
No, because the ball's height at the hoop, x = -7.5, is only about 1.64 feet
Yes, because the vertex is higher than the hoop
No, because the ball never comes back down to the hoop's height
{{< /multiplechoice >}}

{{< callout type="info" >}}
**How to:** given a quadratic function in general form, find the vertex of
the parabola.

1. Identify $a$, $b$, and $c$.
2. Find $h$, the $x$-coordinate of the vertex, by substituting $a$ and $b$
   into $h=-\tfrac{b}{2a}$.
3. Find $k$, the $y$-coordinate of the vertex, by evaluating
   $k=f(h)=f\!\left(-\tfrac{b}{2a}\right)$.
{{< /callout >}}

**Example.** Find the vertex of the quadratic function $f(x)=2x^2-6x+7$.
Rewrite the quadratic in standard form (vertex form).

**Solution.** The horizontal coordinate of the vertex will be at

$$
\begin{array}{lrcl}
& h &=& -\tfrac{b}{2a} \\[4pt]
& &=& -\tfrac{-6}{2(2)} \\[4pt]
& &=& \tfrac{6}{4} \\[4pt]
& &=& \tfrac{3}{2}
\end{array}
$$

The vertical coordinate of the vertex will be at

$$
\begin{array}{lrcl}
& k &=& f(h) \\[4pt]
& &=& f\!\left(\tfrac{3}{2}\right) \\[4pt]
& &=& 2\left(\tfrac{3}{2}\right)^2-6\left(\tfrac{3}{2}\right)+7 \\[4pt]
& &=& \tfrac{5}{2}
\end{array}
$$

Rewriting into standard form, the stretch factor will be the same as the $a$
in the original quadratic.

$$
\begin{array}{lrcl}
& f(x) &=& ax^2+bx+c \\[4pt]
& f(x) &=& 2x^2-6x+7
\end{array}
$$

Using the vertex to determine the shifts,

$$f(x)=2\left(x-\tfrac{3}{2}\right)^2+\tfrac{5}{2}$$

**Analysis.** One reason we may want to identify the vertex of the parabola
is that this point will inform us where the maximum or minimum value of the
output occurs, $(k)$, and where it occurs, $(x)$.

{{< multiplechoice
  question="Which of these is $g(x)=13+x^2-6x$ written in general form?"
  answer="$g(x)=x^2-6x+13$"
  hint="General form lists the terms in descending order of degree."
>}}
$g(x)=x^2-6x+13$
$g(x)=13+x^2-6x$
$g(x)=-6x+x^2+13$
$g(x)=(x-3)^2+4$
{{< /multiplechoice >}}

{{< fillin
  question="Given the equation $g(x)=13+x^2-6x$, write the equation in standard (vertex) form."
  answer="(x-3)^2+4"
  answerForm="vertex-form"
  answerDisplay="$g(x)=(x-3)^2+4$"
  hint="Find $h=-\tfrac{b}{2a}$ and $k=g(h)$ from the general form $x^2-6x+13$, then substitute into $a(x-h)^2+k$."
>}}

## Finding the domain and range of a quadratic function

Any number can be the input value of a quadratic function. Therefore, the
domain of any quadratic function is all real numbers. Because parabolas have
a maximum or a minimum point, the range is restricted. Since the vertex of a
parabola will be either a maximum or a minimum, the range will consist of all
$y$-values greater than or equal to the $y$-coordinate at the turning point
or less than or equal to the $y$-coordinate at the turning point, depending
on whether the parabola opens up or down.

{{< callout type="info" >}}
**Domain and range of a quadratic function.** The domain of any **quadratic
function** is all real numbers.

The range of a quadratic function written in general form
$f(x)=ax^2+bx+c$ with a positive $a$ value is
$f(x)\ge f\!\left(-\tfrac{b}{2a}\right)$, or
$\left[f\!\left(-\tfrac{b}{2a}\right),\infty\right)$.

The range of a quadratic function written in general form with a negative $a$
value is $f(x)\le f\!\left(-\tfrac{b}{2a}\right)$, or
$\left(-\infty,f\!\left(-\tfrac{b}{2a}\right)\right]$.

The range of a quadratic function written in standard form
$f(x)=a(x-h)^2+k$ with a positive $a$ value is $f(x)\ge k$; the range of a
quadratic function written in standard form with a negative $a$ value is
$f(x)\le k$.
{{< /callout >}}

{{< callout type="info" >}}
**How to:** given a quadratic function, find the domain and range.

1. Identify the domain of any quadratic function as all real numbers.
2. Determine whether $a$ is positive or negative. If $a$ is positive, the
   parabola has a minimum. If $a$ is negative, the parabola has a maximum.
3. Determine the maximum or minimum value of the parabola, $k$.
4. If the parabola has a minimum, the range is given by $f(x)\ge k$, or
   $[k,\infty)$. If the parabola has a maximum, the range is given by
   $f(x)\le k$, or $(-\infty,k]$.
{{< /callout >}}

**Example.** Find the domain and range of $f(x)=-5x^2+9x-1$.

**Solution.** As with any quadratic function, the domain is all real numbers.

Because $a$ is negative, the parabola opens downward and has a maximum
value. We need to determine the maximum value. We can begin by finding the
$x$-value of the vertex.

$$
\begin{array}{lrcl}
& h &=& -\tfrac{b}{2a} \\[4pt]
& &=& -\tfrac{9}{2(-5)} \\[4pt]
& &=& \tfrac{9}{10}
\end{array}
$$

The maximum value is given by $f(h)$.

$$
\begin{array}{lrcl}
& f\!\left(\tfrac{9}{10}\right) &=& -5\left(\tfrac{9}{10}\right)^2+9\left(\tfrac{9}{10}\right)-1 \\[4pt]
& &=& \tfrac{61}{20}
\end{array}
$$

The range is $f(x)\le\tfrac{61}{20}$, or $\left(-\infty,\tfrac{61}{20}\right]$.

{{< fillin
  question="Find the range of $f(x)=2\left(x-\tfrac{4}{7}\right)^2+\tfrac{8}{11}$."
  answer="[\frac{8}{11},\infty)"
  answerDisplay="$\left[\tfrac{8}{11},\infty\right)$"
  hint="This is already in standard form; $a>0$, so the range is $f(x)\ge k$."
>}}


## Determining the maximum and minimum values of quadratic functions

The output of the quadratic function at the vertex is the maximum or minimum
value of the function, depending on the orientation of the **parabola**. We
can see the maximum and minimum values in the two graphs below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Panel (a): the graph of f of x equals the quantity x minus 2, squared, plus 1. A parabola opening upward with a minimum value of 1, occurring at x = 2, at the point (2, 1).","xMin":-2,"xMax":6,"yMin":-2,"yMax":10,"unit":24,"tickLabels":true,"quadratics":[{"a":1,"b":-4,"c":5,"label":"f(x) = (x - 2)² + 1"}],"points":[{"at":[2,1],"label":"(2, 1)","labelSide":"s"}]}'>
<svg role="img" aria-label="Panel (a): the graph of f of x equals the quantity x minus 2, squared, plus 1. A parabola opening upward with a minimum value of 1, occurring at x = 2, at the point (2, 1)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 340" width="244" height="340" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="314" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="314" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="314" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="314" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="314" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="314" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="314" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="314" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="314" x2="218" y2="314" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="218" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="218" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="218" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="218" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="218" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="218" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="218" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="218" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="218" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="218" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="266" x2="220" y2="266" stroke="currentColor" stroke-width="1"/>
  <line x1="74" y1="24" x2="74" y2="316" stroke="currentColor" stroke-width="1"/>
  <polygon points="230,266 220,271 220,261" fill="currentColor"/>
  <polygon points="74,14 79,24 69,24" fill="currentColor"/>
  <polygon points="14,266 24,261 24,271" fill="currentColor"/>
  <polygon points="74,326 69,316 79,316" fill="currentColor"/>
  <text x="228" y="258" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="82" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="263" x2="26" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="281" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="50" y1="263" x2="50" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="281" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="98" y1="263" x2="98" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="281" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="122" y1="263" x2="122" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="281" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="146" y1="263" x2="146" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="281" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="170" y1="263" x2="170" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="281" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="194" y1="263" x2="194" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="281" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="218" y1="263" x2="218" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="281" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="71" y1="314" x2="77" y2="314" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="318" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="71" y1="290" x2="77" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="294" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="71" y1="242" x2="77" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="246" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="71" y1="218" x2="77" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="222" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="71" y1="194" x2="77" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="198" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="71" y1="170" x2="77" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="174" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="71" y1="146" x2="77" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="150" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="71" y1="122" x2="77" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="126" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="71" y1="98" x2="77" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="102" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <line x1="71" y1="74" x2="77" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="78" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="71" y1="50" x2="77" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="54" font-size="11" fill="currentColor" text-anchor="end">9</text>
  <line x1="71" y1="26" x2="77" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <polyline points="51.3,33.9 51.5,34.9 51.8,36.4 52,37.8 52.3,39.3 52.5,40.7 52.8,42.2 53,43.6 53.3,45.1 53.5,46.5 53.8,47.9 54,49.3 54.3,50.7 54.5,52.2 54.8,53.6 55,55 55.3,56.4 55.5,57.7 55.8,59.1 56,60.5 56.3,61.9 56.5,63.2 56.8,64.6 57,66 57.3,67.3 57.5,68.7 57.8,70 58,71.3 58.3,72.7 58.5,74 58.8,75.3 59,76.6 59.3,77.9 59.5,79.2 59.8,80.5 60,81.8 60.3,83.1 60.5,84.4 60.8,85.7 61,87 61.3,88.2 61.5,89.5 61.8,90.7 62,92 62.3,93.2 62.5,94.5 62.8,95.7 63,97 63.3,98.2 63.5,99.4 63.8,100.6 64,101.8 64.3,103 64.5,104.2 64.8,105.4 65,106.6 65.3,107.8 65.5,109 65.8,110.2 66,111.3 66.3,112.5 66.5,113.7 66.8,114.8 67,116 67.3,117.1 67.5,118.2 67.8,119.4 68,120.5 68.3,121.6 68.5,122.7 68.8,123.9 69,125 69.3,126.1 69.5,127.2 69.8,128.2 70,129.3 70.3,130.4 70.5,131.5 70.8,132.6 71,133.6 71.3,134.7 71.5,135.7 71.8,136.8 72,137.8 72.3,138.9 72.5,139.9 72.8,140.9 73,142 73.3,143 73.5,144 73.8,145 74,146 74.3,147 74.5,148 74.8,149 75,150 75.3,150.9 75.5,151.9 75.8,152.9 76,153.8 76.3,154.8 76.5,155.7 76.8,156.7 77,157.6 77.3,158.6 77.5,159.5 77.8,160.4 78,161.3 78.3,162.2 78.5,163.2 78.8,164.1 79,165 79.3,165.9 79.5,166.7 79.8,167.6 80,168.5 80.3,169.4 80.5,170.2 80.8,171.1 81,172 81.3,172.8 81.5,173.7 81.8,174.5 82,175.3 82.3,176.2 82.5,177 82.8,177.8 83,178.6 83.3,179.4 83.5,180.2 83.8,181 84,181.8 84.3,182.6 84.5,183.4 84.8,184.2 85,185 85.3,185.7 85.5,186.5 85.8,187.2 86,188 86.3,188.7 86.5,189.5 86.8,190.2 87,191 87.3,191.7 87.5,192.4 87.8,193.1 88,193.8 88.3,194.5 88.5,195.2 88.8,195.9 89,196.6 89.3,197.3 89.5,198 89.8,198.7 90,199.3 90.3,200 90.5,200.7 90.8,201.3 91,202 91.3,202.6 91.5,203.2 91.8,203.9 92,204.5 92.3,205.1 92.5,205.7 92.8,206.4 93,207 93.3,207.6 93.5,208.2 93.8,208.7 94,209.3 94.3,209.9 94.5,210.5 94.8,211.1 95,211.6 95.3,212.2 95.5,212.7 95.8,213.3 96,213.8 96.3,214.4 96.5,214.9 96.8,215.4 97,216 97.3,216.5 97.5,217 97.8,217.5 98,218 98.3,218.5 98.5,219 98.8,219.5 99,220 99.3,220.4 99.5,220.9 99.8,221.4 100,221.8 100.3,222.3 100.5,222.7 100.8,223.2 101,223.6 101.3,224.1 101.5,224.5 101.8,224.9 102,225.3 102.3,225.7 102.5,226.2 102.8,226.6 103,227 103.3,227.4 103.5,227.7 103.8,228.1 104,228.5 104.3,228.9 104.5,229.2 104.8,229.6 105,230 105.3,230.3 105.5,230.7 105.8,231 106,231.3 106.3,231.7 106.5,232 106.8,232.3 107,232.6 107.3,232.9 107.5,233.2 107.8,233.5 108,233.8 108.3,234.1 108.5,234.4 108.8,234.7 109,235 109.3,235.2 109.5,235.5 109.8,235.7 110,236 110.3,236.2 110.5,236.5 110.8,236.7 111,237 111.3,237.2 111.5,237.4 111.8,237.6 112,237.8 112.3,238 112.5,238.2 112.8,238.4 113,238.6 113.3,238.8 113.5,239 113.8,239.2 114,239.3 114.3,239.5 114.5,239.7 114.8,239.8 115,240 115.3,240.1 115.5,240.2 115.8,240.4 116,240.5 116.3,240.6 116.5,240.7 116.8,240.9 117,241 117.3,241.1 117.5,241.2 117.8,241.2 118,241.3 118.3,241.4 118.5,241.5 118.8,241.6 119,241.6 119.3,241.7 119.5,241.7 119.8,241.8 120,241.8 120.3,241.9 120.5,241.9 120.8,241.9 121,242 121.3,242 121.5,242 121.8,242 122,242 122.3,242 122.5,242 122.8,242 123,242 123.3,241.9 123.5,241.9 123.8,241.9 124,241.8 124.3,241.8 124.5,241.7 124.8,241.7 125,241.6 125.3,241.6 125.5,241.5 125.8,241.4 126,241.3 126.3,241.2 126.5,241.2 126.8,241.1 127,241 127.3,240.9 127.5,240.7 127.8,240.6 128,240.5 128.3,240.4 128.5,240.2 128.8,240.1 129,240 129.3,239.8 129.5,239.7 129.8,239.5 130,239.3 130.3,239.2 130.5,239 130.8,238.8 131,238.6 131.3,238.4 131.5,238.2 131.8,238 132,237.8 132.3,237.6 132.5,237.4 132.8,237.2 133,237 133.3,236.7 133.5,236.5 133.8,236.2 134,236 134.3,235.7 134.5,235.5 134.8,235.2 135,235 135.3,234.7 135.5,234.4 135.8,234.1 136,233.8 136.3,233.5 136.5,233.2 136.8,232.9 137,232.6 137.3,232.3 137.5,232 137.8,231.7 138,231.3 138.3,231 138.5,230.7 138.8,230.3 139,230 139.3,229.6 139.5,229.2 139.8,228.9 140,228.5 140.3,228.1 140.5,227.7 140.8,227.4 141,227 141.3,226.6 141.5,226.2 141.8,225.7 142,225.3 142.3,224.9 142.5,224.5 142.8,224.1 143,223.6 143.3,223.2 143.5,222.7 143.8,222.3 144,221.8 144.3,221.4 144.5,220.9 144.8,220.4 145,220 145.3,219.5 145.5,219 145.8,218.5 146,218 146.3,217.5 146.5,217 146.8,216.5 147,216 147.3,215.4 147.5,214.9 147.8,214.4 148,213.8 148.3,213.3 148.5,212.7 148.8,212.2 149,211.6 149.3,211.1 149.5,210.5 149.8,209.9 150,209.3 150.3,208.7 150.5,208.2 150.8,207.6 151,207 151.3,206.4 151.5,205.7 151.8,205.1 152,204.5 152.3,203.9 152.5,203.2 152.8,202.6 153,202 153.3,201.3 153.5,200.7 153.8,200 154,199.3 154.3,198.7 154.5,198 154.8,197.3 155,196.6 155.3,195.9 155.5,195.2 155.8,194.5 156,193.8 156.3,193.1 156.5,192.4 156.8,191.7 157,191 157.3,190.2 157.5,189.5 157.8,188.7 158,188 158.3,187.2 158.5,186.5 158.8,185.7 159,185 159.3,184.2 159.5,183.4 159.8,182.6 160,181.8 160.3,181 160.5,180.2 160.8,179.4 161,178.6 161.3,177.8 161.5,177 161.8,176.2 162,175.3 162.3,174.5 162.5,173.7 162.8,172.8 163,172 163.3,171.1 163.5,170.2 163.8,169.4 164,168.5 164.3,167.6 164.5,166.7 164.8,165.9 165,165 165.3,164.1 165.5,163.2 165.8,162.2 166,161.3 166.3,160.4 166.5,159.5 166.8,158.6 167,157.6 167.3,156.7 167.5,155.7 167.8,154.8 168,153.8 168.3,152.9 168.5,151.9 168.8,150.9 169,150 169.3,149 169.5,148 169.8,147 170,146 170.3,145 170.5,144 170.8,143 171,142 171.3,140.9 171.5,139.9 171.8,138.9 172,137.8 172.3,136.8 172.5,135.7 172.8,134.7 173,133.6 173.3,132.6 173.5,131.5 173.8,130.4 174,129.3 174.3,128.2 174.5,127.2 174.8,126.1 175,125 175.3,123.9 175.5,122.7 175.8,121.6 176,120.5 176.3,119.4 176.5,118.2 176.8,117.1 177,116 177.3,114.8 177.5,113.7 177.8,112.5 178,111.3 178.3,110.2 178.5,109 178.8,107.8 179,106.6 179.3,105.4 179.5,104.2 179.8,103 180,101.8 180.3,100.6 180.5,99.4 180.8,98.2 181,97 181.3,95.7 181.5,94.5 181.8,93.2 182,92 182.3,90.7 182.5,89.5 182.8,88.2 183,87 183.3,85.7 183.5,84.4 183.8,83.1 184,81.8 184.3,80.5 184.5,79.2 184.8,77.9 185,76.6 185.3,75.3 185.5,74 185.8,72.7 186,71.3 186.3,70 186.5,68.7 186.8,67.3 187,66 187.3,64.6 187.5,63.2 187.8,61.9 188,60.5 188.3,59.1 188.5,57.7 188.8,56.4 189,55 189.3,53.6 189.5,52.2 189.8,50.7 190,49.3 190.3,47.9 190.5,46.5 190.8,45.1 191,43.6 191.3,42.2 191.5,40.7 191.8,39.3 192,37.8 192.3,36.4 192.5,34.9 192.7,33.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="50,26 56.6,35 46.7,36.7" fill="currentColor"/>
  <polygon points="194,26 197.3,36.7 187.4,35" fill="currentColor"/>
  <circle cx="122" cy="242" r="4" fill="currentColor"/>
  <text x="133.2" y="230.8" font-size="13" fill="currentColor" text-anchor="start">(2, 1)</text>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Panel (b): the graph of g of x equals negative the quantity x plus 3, squared, plus 4. A parabola opening downward with a maximum value of 4, occurring at x = -3, at the point (-3, 4).","xMin":-6,"xMax":2,"yMin":-6,"yMax":6,"unit":24,"tickLabels":true,"quadratics":[{"a":-1,"b":-6,"c":-5,"label":"g(x) = -(x + 3)² + 4"}],"points":[{"at":[-3,4],"label":"(-3, 4)","labelSide":"n"}]}'>
<svg role="img" aria-label="Panel (b): the graph of g of x equals negative the quantity x plus 3, squared, plus 4. A parabola opening downward with a maximum value of 4, occurring at x = -3, at the point (-3, 4)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 340" width="244" height="340" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="314" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="314" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="314" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="314" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="314" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="314" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="314" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="314" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="314" x2="218" y2="314" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="218" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="218" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="218" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="218" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="218" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="218" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="218" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="218" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="218" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="218" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="170" x2="220" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="170" y1="24" x2="170" y2="316" stroke="currentColor" stroke-width="1"/>
  <polygon points="230,170 220,175 220,165" fill="currentColor"/>
  <polygon points="170,14 175,24 165,24" fill="currentColor"/>
  <polygon points="14,170 24,165 24,175" fill="currentColor"/>
  <polygon points="170,326 165,316 175,316" fill="currentColor"/>
  <text x="228" y="162" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="178" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="167" x2="26" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="185" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="50" y1="167" x2="50" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="185" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="74" y1="167" x2="74" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="185" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="98" y1="167" x2="98" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="185" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="122" y1="167" x2="122" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="185" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="146" y1="167" x2="146" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="185" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="194" y1="167" x2="194" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="185" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="218" y1="167" x2="218" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="185" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="167" y1="314" x2="173" y2="314" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="318" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="167" y1="290" x2="173" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="294" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="167" y1="266" x2="173" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="167" y1="242" x2="173" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="246" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="167" y1="218" x2="173" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="222" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="167" y1="194" x2="173" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="198" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="167" y1="146" x2="173" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="150" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="167" y1="122" x2="173" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="126" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="167" y1="98" x2="173" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="102" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="167" y1="74" x2="173" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="78" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="167" y1="50" x2="173" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="54" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="167" y1="26" x2="173" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="27.3,282.1 27.5,281.1 27.8,279.6 28,278.2 28.3,276.7 28.5,275.3 28.8,273.8 29,272.4 29.3,270.9 29.5,269.5 29.8,268.1 30,266.7 30.3,265.3 30.5,263.8 30.8,262.4 31,261 31.3,259.6 31.5,258.3 31.8,256.9 32,255.5 32.3,254.1 32.5,252.8 32.8,251.4 33,250 33.3,248.7 33.5,247.3 33.8,246 34,244.7 34.3,243.3 34.5,242 34.8,240.7 35,239.4 35.3,238.1 35.5,236.8 35.8,235.5 36,234.2 36.3,232.9 36.5,231.6 36.8,230.3 37,229 37.3,227.8 37.5,226.5 37.8,225.3 38,224 38.3,222.8 38.5,221.5 38.8,220.3 39,219 39.3,217.8 39.5,216.6 39.8,215.4 40,214.2 40.3,213 40.5,211.8 40.8,210.6 41,209.4 41.3,208.2 41.5,207 41.8,205.8 42,204.7 42.3,203.5 42.5,202.3 42.8,201.2 43,200 43.3,198.9 43.5,197.8 43.8,196.6 44,195.5 44.3,194.4 44.5,193.3 44.8,192.1 45,191 45.3,189.9 45.5,188.8 45.8,187.8 46,186.7 46.3,185.6 46.5,184.5 46.8,183.4 47,182.4 47.3,181.3 47.5,180.3 47.8,179.2 48,178.2 48.3,177.1 48.5,176.1 48.8,175.1 49,174 49.3,173 49.5,172 49.8,171 50,170 50.3,169 50.5,168 50.8,167 51,166 51.3,165.1 51.5,164.1 51.8,163.1 52,162.2 52.3,161.2 52.5,160.3 52.8,159.3 53,158.4 53.3,157.4 53.5,156.5 53.8,155.6 54,154.7 54.3,153.8 54.5,152.8 54.8,151.9 55,151 55.3,150.1 55.5,149.3 55.8,148.4 56,147.5 56.3,146.6 56.5,145.8 56.8,144.9 57,144 57.3,143.2 57.5,142.3 57.8,141.5 58,140.7 58.3,139.8 58.5,139 58.8,138.2 59,137.4 59.3,136.6 59.5,135.8 59.8,135 60,134.2 60.3,133.4 60.5,132.6 60.8,131.8 61,131 61.3,130.3 61.5,129.5 61.8,128.8 62,128 62.3,127.3 62.5,126.5 62.8,125.8 63,125 63.3,124.3 63.5,123.6 63.8,122.9 64,122.2 64.3,121.5 64.5,120.8 64.8,120.1 65,119.4 65.3,118.7 65.5,118 65.8,117.3 66,116.7 66.3,116 66.5,115.3 66.8,114.7 67,114 67.3,113.4 67.5,112.8 67.8,112.1 68,111.5 68.3,110.9 68.5,110.3 68.8,109.6 69,109 69.3,108.4 69.5,107.8 69.8,107.3 70,106.7 70.3,106.1 70.5,105.5 70.8,104.9 71,104.4 71.3,103.8 71.5,103.3 71.8,102.7 72,102.2 72.3,101.6 72.5,101.1 72.8,100.6 73,100 73.3,99.5 73.5,99 73.8,98.5 74,98 74.3,97.5 74.5,97 74.8,96.5 75,96 75.3,95.6 75.5,95.1 75.8,94.6 76,94.2 76.3,93.7 76.5,93.3 76.8,92.8 77,92.4 77.3,91.9 77.5,91.5 77.8,91.1 78,90.7 78.3,90.3 78.5,89.8 78.8,89.4 79,89 79.3,88.6 79.5,88.3 79.8,87.9 80,87.5 80.3,87.1 80.5,86.8 80.8,86.4 81,86 81.3,85.7 81.5,85.3 81.8,85 82,84.7 82.3,84.3 82.5,84 82.8,83.7 83,83.4 83.3,83.1 83.5,82.8 83.8,82.5 84,82.2 84.3,81.9 84.5,81.6 84.8,81.3 85,81 85.3,80.8 85.5,80.5 85.8,80.3 86,80 86.3,79.8 86.5,79.5 86.8,79.3 87,79 87.3,78.8 87.5,78.6 87.8,78.4 88,78.2 88.3,78 88.5,77.8 88.8,77.6 89,77.4 89.3,77.2 89.5,77 89.8,76.8 90,76.7 90.3,76.5 90.5,76.3 90.8,76.2 91,76 91.3,75.9 91.5,75.8 91.8,75.6 92,75.5 92.3,75.4 92.5,75.3 92.8,75.1 93,75 93.3,74.9 93.5,74.8 93.8,74.8 94,74.7 94.3,74.6 94.5,74.5 94.8,74.4 95,74.4 95.3,74.3 95.5,74.3 95.8,74.2 96,74.2 96.3,74.1 96.5,74.1 96.8,74.1 97,74 97.3,74 97.5,74 97.8,74 98,74 98.3,74 98.5,74 98.8,74 99,74 99.3,74.1 99.5,74.1 99.8,74.1 100,74.2 100.3,74.2 100.5,74.3 100.8,74.3 101,74.4 101.3,74.4 101.5,74.5 101.8,74.6 102,74.7 102.3,74.8 102.5,74.8 102.8,74.9 103,75 103.3,75.1 103.5,75.3 103.8,75.4 104,75.5 104.3,75.6 104.5,75.8 104.8,75.9 105,76 105.3,76.2 105.5,76.3 105.8,76.5 106,76.7 106.3,76.8 106.5,77 106.8,77.2 107,77.4 107.3,77.6 107.5,77.8 107.8,78 108,78.2 108.3,78.4 108.5,78.6 108.8,78.8 109,79 109.3,79.3 109.5,79.5 109.8,79.8 110,80 110.3,80.3 110.5,80.5 110.8,80.8 111,81 111.3,81.3 111.5,81.6 111.8,81.9 112,82.2 112.3,82.5 112.5,82.8 112.8,83.1 113,83.4 113.3,83.7 113.5,84 113.8,84.3 114,84.7 114.3,85 114.5,85.3 114.8,85.7 115,86 115.3,86.4 115.5,86.8 115.8,87.1 116,87.5 116.3,87.9 116.5,88.3 116.8,88.6 117,89 117.3,89.4 117.5,89.8 117.8,90.3 118,90.7 118.3,91.1 118.5,91.5 118.8,91.9 119,92.4 119.3,92.8 119.5,93.3 119.8,93.7 120,94.2 120.3,94.6 120.5,95.1 120.8,95.6 121,96 121.3,96.5 121.5,97 121.8,97.5 122,98 122.3,98.5 122.5,99 122.8,99.5 123,100 123.3,100.6 123.5,101.1 123.8,101.6 124,102.2 124.3,102.7 124.5,103.3 124.8,103.8 125,104.4 125.3,104.9 125.5,105.5 125.8,106.1 126,106.7 126.3,107.3 126.5,107.8 126.8,108.4 127,109 127.3,109.6 127.5,110.3 127.8,110.9 128,111.5 128.3,112.1 128.5,112.8 128.8,113.4 129,114 129.3,114.7 129.5,115.3 129.8,116 130,116.7 130.3,117.3 130.5,118 130.8,118.7 131,119.4 131.3,120.1 131.5,120.8 131.8,121.5 132,122.2 132.3,122.9 132.5,123.6 132.8,124.3 133,125 133.3,125.8 133.5,126.5 133.8,127.3 134,128 134.3,128.8 134.5,129.5 134.8,130.3 135,131 135.3,131.8 135.5,132.6 135.8,133.4 136,134.2 136.3,135 136.5,135.8 136.8,136.6 137,137.4 137.3,138.2 137.5,139 137.8,139.8 138,140.7 138.3,141.5 138.5,142.3 138.8,143.2 139,144 139.3,144.9 139.5,145.8 139.8,146.6 140,147.5 140.3,148.4 140.5,149.3 140.8,150.1 141,151 141.3,151.9 141.5,152.8 141.8,153.8 142,154.7 142.3,155.6 142.5,156.5 142.8,157.4 143,158.4 143.3,159.3 143.5,160.3 143.8,161.2 144,162.2 144.3,163.1 144.5,164.1 144.8,165.1 145,166 145.3,167 145.5,168 145.8,169 146,170 146.3,171 146.5,172 146.8,173 147,174 147.3,175.1 147.5,176.1 147.8,177.1 148,178.2 148.3,179.2 148.5,180.3 148.8,181.3 149,182.4 149.3,183.4 149.5,184.5 149.8,185.6 150,186.7 150.3,187.8 150.5,188.8 150.8,189.9 151,191 151.3,192.1 151.5,193.3 151.8,194.4 152,195.5 152.3,196.6 152.5,197.8 152.8,198.9 153,200 153.3,201.2 153.5,202.3 153.8,203.5 154,204.7 154.3,205.8 154.5,207 154.8,208.2 155,209.4 155.3,210.6 155.5,211.8 155.8,213 156,214.2 156.3,215.4 156.5,216.6 156.8,217.8 157,219 157.3,220.3 157.5,221.5 157.8,222.8 158,224 158.3,225.3 158.5,226.5 158.8,227.8 159,229 159.3,230.3 159.5,231.6 159.8,232.9 160,234.2 160.3,235.5 160.5,236.8 160.8,238.1 161,239.4 161.3,240.7 161.5,242 161.8,243.3 162,244.7 162.3,246 162.5,247.3 162.8,248.7 163,250 163.3,251.4 163.5,252.8 163.8,254.1 164,255.5 164.3,256.9 164.5,258.3 164.8,259.6 165,261 165.3,262.4 165.5,263.8 165.8,265.3 166,266.7 166.3,268.1 166.5,269.5 166.8,270.9 167,272.4 167.3,273.8 167.5,275.3 167.8,276.7 168,278.2 168.3,279.6 168.5,281.1 168.8,282.6 169,284 169.3,285.5 169.5,287 169.8,288.5 170,290 170.3,291.5 170.5,293 170.8,294.5 171,296 171.3,297.6 171.5,299.1 171.8,300.6 172,302.2 172.3,303.7 172.5,305.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,290 22.7,279.3 32.6,281" fill="currentColor"/>
  <polygon points="173.8,313.1 167.2,304 177.1,302.4" fill="currentColor"/>
  <circle cx="98" cy="74" r="4" fill="currentColor"/>
  <text x="98" y="60" font-size="13" fill="currentColor" text-anchor="middle">(−3, 4)</text>
</svg>
</div>


There are many real-world scenarios that involve finding the maximum or
minimum value of a quadratic function, such as applications involving area
and revenue.

**Example.** A backyard farmer wants to enclose a rectangular space for a new
garden within her fenced backyard. She has purchased 80 feet of wire fencing
to enclose three sides, and she will use a section of the backyard fence as
the fourth side.

1. Find a formula for the area enclosed by the fence if the sides of fencing
   perpendicular to the existing fence have length $L$.
2. What dimensions should she make her garden to maximize the enclosed area?

**Solution.** Let's use a diagram such as the one below to record the given
information. It is also helpful to introduce a temporary variable, $W$, to
represent the width of the garden and the length of the fence section
parallel to the backyard fence.

<div class="ap-figure" data-spec='{"type":"figure","ariaLabel":"A rectangular backyard with a smaller rectangular garden set against its top edge, which is the existing fence. The garden&#39;s two vertical sides have length L and its bottom side has length W.","polygons":[{"points":[[0,0],[10,0],[10,7],[0,7]]},{"points":[[2,4],[7,4],[7,7],[2,7]],"edgeLabels":["W","L",null,null]}],"texts":[{"at":[4.5,5.3],"text":"Garden"},{"at":[5,1.5],"text":"Backyard"},{"at":[4.5,7.35],"text":"existing fence","fontSize":11}]}'>
<svg role="img" aria-label="A rectangular backyard with a smaller rectangular garden set against its top edge, which is the existing fence. The garden's two vertical sides have length L and its bottom side has length W." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 293" width="372" height="293" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="256.5" x2="336" y2="256.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="336" y1="256.5" x2="336" y2="46.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="336" y1="46.5" x2="36" y2="46.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="36" y1="46.5" x2="36" y2="256.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="96" y1="136.5" x2="246" y2="136.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="171" y="158.5" text-anchor="middle" font-size="13" fill="currentColor">W</text>
  <line x1="246" y1="136.5" x2="246" y2="46.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="258" y="95.5" text-anchor="start" font-size="13" fill="currentColor">L</text>
  <line x1="246" y1="46.5" x2="96" y2="46.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="96" y1="46.5" x2="96" y2="136.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="171" y="97.5" font-size="13" fill="currentColor">Garden</text>
  <text x="186" y="211.5" font-size="13" fill="currentColor">Backyard</text>
  <text x="171" y="36" font-size="13" fill="currentColor">existing fence</text>
</svg>
</div>


1. We know we have only 80 feet of fence available, and $L+W+L=80$, or more
   simply, $2L+W=80$. This allows us to represent the width, $W$, in terms of
   $L$.

   $$W=80-2L$$

   Now we are ready to write an equation for the area the fence encloses. We
   know the area of a rectangle is length multiplied by width, so

   $$
   \begin{array}{rclcl}
   A &=& LW &=& L(80-2L) \\[4pt]
   A(L) &=& 80L-2L^2 &&
   \end{array}
   $$

   This formula represents the area of the fence in terms of the variable
   length $L$. The function, written in general form, is

   $$A(L)=-2L^2+80L$$

2. The quadratic has a negative leading coefficient, so the graph will open
   downward, and the vertex will be the maximum value for the area. In
   finding the vertex, we must be careful because the equation is not
   written in standard polynomial form with decreasing powers. This is why
   we rewrote the function in general form above. Since $a$ is the
   coefficient of the squared term, $a=-2$, $b=80$, and $c=0$.

   To find the vertex:

   $$
   \begin{array}{lrcl}
   & h &=& -\tfrac{80}{2(-2)} \\[4pt]
   & &=& 20
   \end{array}
   $$

   and

   $$
   \begin{array}{lrcl}
   & k &=& A(20) \\[4pt]
   & &=& 80(20)-2(20)^2 \\[4pt]
   & &=& 800
   \end{array}
   $$

   The maximum value of the function is an area of 800 square feet, which
   occurs when $L=20$ feet. When the shorter sides are 20 feet, there is 40
   feet of fencing left for the longer side. To maximize the area, she
   should enclose the garden so the two shorter sides have length 20 feet
   and the longer side parallel to the existing fence has length 40 feet.

**Analysis.** This problem also could be solved by graphing the quadratic
function. We can see where the maximum area occurs on the graph below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of A of L equals -2L squared + 80L, a downward-opening parabola with vertex at (20, 800), the maximum enclosed area.","xMin":0,"xMax":50,"yMin":0,"yMax":1000,"xUnit":7,"yUnit":0.35,"margin":40,"grid":false,"tickLabels":true,"xTickStep":10,"yTickStep":100,"xLabel":"Length (L)","yLabel":"Area (A)","quadratics":[{"a":-2,"b":80,"c":0,"label":"A"}],"points":[{"at":[20,800],"label":"(20, 800)","labelSide":"n"}]}'>
<svg role="img" aria-label="The graph of A of L equals -2L squared + 80L, a downward-opening parabola with vertex at (20, 800), the maximum enclosed area." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 430" width="430" height="430" font-family="Helvetica, Arial, sans-serif">
  <line x1="40" y1="390" x2="392" y2="390" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="38" x2="40" y2="390" stroke="currentColor" stroke-width="1"/>
  <polygon points="402,390 392,395 392,385" fill="currentColor"/>
  <polygon points="40,28 45,38 35,38" fill="currentColor"/>
  <text x="400" y="382" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">Length (L)</text>
  <text x="48" y="38" font-size="13" fill="currentColor" font-style="italic">Area (A)</text>
  <line x1="110" y1="387" x2="110" y2="393" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="405" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="180" y1="387" x2="180" y2="393" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="405" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="250" y1="387" x2="250" y2="393" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="405" font-size="11" fill="currentColor" text-anchor="middle">30</text>
  <line x1="320" y1="387" x2="320" y2="393" stroke="currentColor" stroke-width="1"/>
  <text x="320" y="405" font-size="11" fill="currentColor" text-anchor="middle">40</text>
  <line x1="390" y1="387" x2="390" y2="393" stroke="currentColor" stroke-width="1"/>
  <text x="390" y="405" font-size="11" fill="currentColor" text-anchor="middle">50</text>
  <line x1="37" y1="355" x2="43" y2="355" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="359" font-size="11" fill="currentColor" text-anchor="end">100</text>
  <line x1="37" y1="320" x2="43" y2="320" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="324" font-size="11" fill="currentColor" text-anchor="end">200</text>
  <line x1="37" y1="285" x2="43" y2="285" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="289" font-size="11" fill="currentColor" text-anchor="end">300</text>
  <line x1="37" y1="250" x2="43" y2="250" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="254" font-size="11" fill="currentColor" text-anchor="end">400</text>
  <line x1="37" y1="215" x2="43" y2="215" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="219" font-size="11" fill="currentColor" text-anchor="end">500</text>
  <line x1="37" y1="180" x2="43" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="184" font-size="11" fill="currentColor" text-anchor="end">600</text>
  <line x1="37" y1="145" x2="43" y2="145" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="149" font-size="11" fill="currentColor" text-anchor="end">700</text>
  <line x1="37" y1="110" x2="43" y2="110" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="114" font-size="11" fill="currentColor" text-anchor="end">800</text>
  <line x1="37" y1="75" x2="43" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="79" font-size="11" fill="currentColor" text-anchor="end">900</text>
  <line x1="37" y1="40" x2="43" y2="40" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="44" font-size="11" fill="currentColor" text-anchor="end">1,000</text>
  <polyline points="42,382.2 42,382.1 42.3,381.1 42.5,380.1 42.8,379.1 43,378.1 43.3,377.2 43.5,376.2 43.8,375.2 44,374.2 44.3,373.3 44.5,372.3 44.8,371.3 45,370.4 45.3,369.4 45.5,368.4 45.8,367.5 46,366.5 46.3,365.6 46.5,364.6 46.8,363.7 47,362.7 47.3,361.8 47.5,360.8 47.8,359.9 48,358.9 48.3,358 48.5,357 48.8,356.1 49,355.2 49.3,354.2 49.5,353.3 49.8,352.4 50,351.4 50.3,350.5 50.5,349.6 50.8,348.7 51,347.7 51.3,346.8 51.5,345.9 51.8,345 52,344.1 52.3,343.1 52.5,342.2 52.8,341.3 53,340.4 53.3,339.5 53.5,338.6 53.8,337.7 54,336.8 54.3,335.9 54.5,335 54.8,334.1 55,333.2 55.3,332.3 55.5,331.4 55.8,330.5 56,329.7 56.3,328.8 56.5,327.9 56.8,327 57,326.1 57.3,325.3 57.5,324.4 57.8,323.5 58,322.6 58.3,321.8 58.5,320.9 58.8,320 59,319.2 59.3,318.3 59.5,317.4 59.8,316.6 60,315.7 60.3,314.9 60.5,314 60.8,313.2 61,312.3 61.3,311.5 61.5,310.6 61.8,309.8 62,308.9 62.3,308.1 62.5,307.2 62.8,306.4 63,305.6 63.3,304.7 63.5,303.9 63.8,303.1 64,302.2 64.3,301.4 64.5,300.6 64.8,299.8 65,298.9 65.3,298.1 65.5,297.3 65.8,296.5 66,295.7 66.3,294.8 66.5,294 66.8,293.2 67,292.4 67.3,291.6 67.5,290.8 67.8,290 68,289.2 68.3,288.4 68.5,287.6 68.8,286.8 69,286 69.3,285.2 69.5,284.4 69.8,283.6 70,282.9 70.3,282.1 70.5,281.3 70.8,280.5 71,279.7 71.3,279 71.5,278.2 71.8,277.4 72,276.6 72.3,275.9 72.5,275.1 72.8,274.3 73,273.6 73.3,272.8 73.5,272 73.8,271.3 74,270.5 74.3,269.8 74.5,269 74.8,268.3 75,267.5 75.3,266.8 75.5,266 75.8,265.3 76,264.5 76.3,263.8 76.5,263 76.8,262.3 77,261.6 77.3,260.8 77.5,260.1 77.8,259.4 78,258.6 78.3,257.9 78.5,257.2 78.8,256.5 79,255.7 79.3,255 79.5,254.3 79.8,253.6 80,252.9 80.3,252.1 80.5,251.4 80.8,250.7 81,250 81.3,249.3 81.5,248.6 81.8,247.9 82,247.2 82.3,246.5 82.5,245.8 82.8,245.1 83,244.4 83.3,243.7 83.5,243 83.8,242.3 84,241.7 84.3,241 84.5,240.3 84.8,239.6 85,238.9 85.3,238.3 85.5,237.6 85.8,236.9 86,236.2 86.3,235.6 86.5,234.9 86.8,234.2 87,233.6 87.3,232.9 87.5,232.2 87.8,231.6 88,230.9 88.3,230.3 88.5,229.6 88.8,229 89,228.3 89.3,227.7 89.5,227 89.8,226.4 90,225.7 90.3,225.1 90.5,224.4 90.8,223.8 91,223.2 91.3,222.5 91.5,221.9 91.8,221.3 92,220.6 92.3,220 92.5,219.4 92.8,218.8 93,218.1 93.3,217.5 93.5,216.9 93.8,216.3 94,215.7 94.3,215 94.5,214.4 94.8,213.8 95,213.2 95.3,212.6 95.5,212 95.8,211.4 96,210.8 96.3,210.2 96.5,209.6 96.8,209 97,208.4 97.3,207.8 97.5,207.2 97.8,206.6 98,206.1 98.3,205.5 98.5,204.9 98.8,204.3 99,203.7 99.3,203.2 99.5,202.6 99.8,202 100,201.4 100.3,200.9 100.5,200.3 100.8,199.7 101,199.2 101.3,198.6 101.5,198 101.8,197.5 102,196.9 102.3,196.4 102.5,195.8 102.8,195.3 103,194.7 103.3,194.2 103.5,193.6 103.8,193.1 104,192.5 104.3,192 104.5,191.4 104.8,190.9 105,190.4 105.3,189.8 105.5,189.3 105.8,188.8 106,188.2 106.3,187.7 106.5,187.2 106.8,186.7 107,186.1 107.3,185.6 107.5,185.1 107.8,184.6 108,184.1 108.3,183.5 108.5,183 108.8,182.5 109,182 109.3,181.5 109.5,181 109.8,180.5 110,180 110.3,179.5 110.5,179 110.8,178.5 111,178 111.3,177.5 111.5,177 111.8,176.5 112,176.1 112.3,175.6 112.5,175.1 112.8,174.6 113,174.1 113.3,173.7 113.5,173.2 113.8,172.7 114,172.2 114.3,171.8 114.5,171.3 114.8,170.8 115,170.4 115.3,169.9 115.5,169.4 115.8,169 116,168.5 116.3,168.1 116.5,167.6 116.8,167.2 117,166.7 117.3,166.3 117.5,165.8 117.8,165.4 118,164.9 118.3,164.5 118.5,164 118.8,163.6 119,163.2 119.3,162.7 119.5,162.3 119.8,161.9 120,161.4 120.3,161 120.5,160.6 120.8,160.2 121,159.7 121.3,159.3 121.5,158.9 121.8,158.5 122,158.1 122.3,157.6 122.5,157.2 122.8,156.8 123,156.4 123.3,156 123.5,155.6 123.8,155.2 124,154.8 124.3,154.4 124.5,154 124.8,153.6 125,153.2 125.3,152.8 125.5,152.4 125.8,152 126,151.7 126.3,151.3 126.5,150.9 126.8,150.5 127,150.1 127.3,149.8 127.5,149.4 127.8,149 128,148.6 128.3,148.3 128.5,147.9 128.8,147.5 129,147.2 129.3,146.8 129.5,146.4 129.8,146.1 130,145.7 130.3,145.4 130.5,145 130.8,144.7 131,144.3 131.3,144 131.5,143.6 131.8,143.3 132,142.9 132.3,142.6 132.5,142.2 132.8,141.9 133,141.6 133.3,141.2 133.5,140.9 133.8,140.6 134,140.2 134.3,139.9 134.5,139.6 134.8,139.3 135,138.9 135.3,138.6 135.5,138.3 135.8,138 136,137.7 136.3,137.3 136.5,137 136.8,136.7 137,136.4 137.3,136.1 137.5,135.8 137.8,135.5 138,135.2 138.3,134.9 138.5,134.6 138.8,134.3 139,134 139.3,133.7 139.5,133.4 139.8,133.1 140,132.9 140.3,132.6 140.5,132.3 140.8,132 141,131.7 141.3,131.5 141.5,131.2 141.8,130.9 142,130.6 142.3,130.4 142.5,130.1 142.8,129.8 143,129.6 143.3,129.3 143.5,129 143.8,128.8 144,128.5 144.3,128.3 144.5,128 144.8,127.8 145,127.5 145.3,127.3 145.5,127 145.8,126.8 146,126.5 146.3,126.3 146.5,126 146.8,125.8 147,125.6 147.3,125.3 147.5,125.1 147.8,124.9 148,124.6 148.3,124.4 148.5,124.2 148.8,124 149,123.7 149.3,123.5 149.5,123.3 149.8,123.1 150,122.9 150.3,122.6 150.5,122.4 150.8,122.2 151,122 151.3,121.8 151.5,121.6 151.8,121.4 152,121.2 152.3,121 152.5,120.8 152.8,120.6 153,120.4 153.3,120.2 153.5,120 153.8,119.8 154,119.7 154.3,119.5 154.5,119.3 154.8,119.1 155,118.9 155.3,118.8 155.5,118.6 155.8,118.4 156,118.2 156.3,118.1 156.5,117.9 156.8,117.7 157,117.6 157.3,117.4 157.5,117.2 157.8,117.1 158,116.9 158.3,116.8 158.5,116.6 158.8,116.5 159,116.3 159.3,116.2 159.5,116 159.8,115.9 160,115.7 160.3,115.6 160.5,115.4 160.8,115.3 161,115.2 161.3,115 161.5,114.9 161.8,114.8 162,114.6 162.3,114.5 162.5,114.4 162.8,114.3 163,114.1 163.3,114 163.5,113.9 163.8,113.8 164,113.7 164.3,113.5 164.5,113.4 164.8,113.3 165,113.2 165.3,113.1 165.5,113 165.8,112.9 166,112.8 166.3,112.7 166.5,112.6 166.8,112.5 167,112.4 167.3,112.3 167.5,112.2 167.8,112.1 168,112.1 168.3,112 168.5,111.9 168.8,111.8 169,111.7 169.3,111.7 169.5,111.6 169.8,111.5 170,111.4 170.3,111.4 170.5,111.3 170.8,111.2 171,111.2 171.3,111.1 171.5,111 171.8,111 172,110.9 172.3,110.9 172.5,110.8 172.8,110.8 173,110.7 173.3,110.7 173.5,110.6 173.8,110.6 174,110.5 174.3,110.5 174.5,110.4 174.8,110.4 175,110.4 175.3,110.3 175.5,110.3 175.8,110.3 176,110.2 176.3,110.2 176.5,110.2 176.8,110.2 177,110.1 177.3,110.1 177.5,110.1 177.8,110.1 178,110.1 178.3,110 178.5,110 178.8,110 179,110 179.3,110 179.5,110 179.8,110 180,110 180.3,110 180.5,110 180.8,110 181,110 181.3,110 181.5,110 181.8,110 182,110.1 182.3,110.1 182.5,110.1 182.8,110.1 183,110.1 183.3,110.2 183.5,110.2 183.8,110.2 184,110.2 184.3,110.3 184.5,110.3 184.8,110.3 185,110.4 185.3,110.4 185.5,110.4 185.8,110.5 186,110.5 186.3,110.6 186.5,110.6 186.8,110.7 187,110.7 187.3,110.8 187.5,110.8 187.8,110.9 188,110.9 188.3,111 188.5,111 188.8,111.1 189,111.2 189.3,111.2 189.5,111.3 189.8,111.4 190,111.4 190.3,111.5 190.5,111.6 190.8,111.7 191,111.7 191.3,111.8 191.5,111.9 191.8,112 192,112.1 192.3,112.1 192.5,112.2 192.8,112.3 193,112.4 193.3,112.5 193.5,112.6 193.8,112.7 194,112.8 194.3,112.9 194.5,113 194.8,113.1 195,113.2 195.3,113.3 195.5,113.4 195.8,113.5 196,113.7 196.3,113.8 196.5,113.9 196.8,114 197,114.1 197.3,114.3 197.5,114.4 197.8,114.5 198,114.6 198.3,114.8 198.5,114.9 198.8,115 199,115.2 199.3,115.3 199.5,115.4 199.8,115.6 200,115.7 200.3,115.9 200.5,116 200.8,116.2 201,116.3 201.3,116.5 201.5,116.6 201.8,116.8 202,116.9 202.3,117.1 202.5,117.2 202.8,117.4 203,117.6 203.3,117.7 203.5,117.9 203.8,118.1 204,118.2 204.3,118.4 204.5,118.6 204.8,118.8 205,118.9 205.3,119.1 205.5,119.3 205.8,119.5 206,119.7 206.3,119.8 206.5,120 206.8,120.2 207,120.4 207.3,120.6 207.5,120.8 207.8,121 208,121.2 208.3,121.4 208.5,121.6 208.8,121.8 209,122 209.3,122.2 209.5,122.4 209.8,122.6 210,122.9 210.3,123.1 210.5,123.3 210.8,123.5 211,123.7 211.3,124 211.5,124.2 211.8,124.4 212,124.6 212.3,124.9 212.5,125.1 212.8,125.3 213,125.6 213.3,125.8 213.5,126 213.8,126.3 214,126.5 214.3,126.8 214.5,127 214.8,127.3 215,127.5 215.3,127.8 215.5,128 215.8,128.3 216,128.5 216.3,128.8 216.5,129 216.8,129.3 217,129.6 217.3,129.8 217.5,130.1 217.8,130.4 218,130.6 218.3,130.9 218.5,131.2 218.8,131.5 219,131.7 219.3,132 219.5,132.3 219.8,132.6 220,132.9 220.3,133.1 220.5,133.4 220.8,133.7 221,134 221.3,134.3 221.5,134.6 221.8,134.9 222,135.2 222.3,135.5 222.5,135.8 222.8,136.1 223,136.4 223.3,136.7 223.5,137 223.8,137.3 224,137.7 224.3,138 224.5,138.3 224.8,138.6 225,138.9 225.3,139.3 225.5,139.6 225.8,139.9 226,140.2 226.3,140.6 226.5,140.9 226.8,141.2 227,141.6 227.3,141.9 227.5,142.2 227.8,142.6 228,142.9 228.3,143.3 228.5,143.6 228.8,144 229,144.3 229.3,144.7 229.5,145 229.8,145.4 230,145.7 230.3,146.1 230.5,146.4 230.8,146.8 231,147.2 231.3,147.5 231.5,147.9 231.8,148.3 232,148.6 232.3,149 232.5,149.4 232.8,149.8 233,150.1 233.3,150.5 233.5,150.9 233.8,151.3 234,151.7 234.3,152 234.5,152.4 234.8,152.8 235,153.2 235.3,153.6 235.5,154 235.8,154.4 236,154.8 236.3,155.2 236.5,155.6 236.8,156 237,156.4 237.3,156.8 237.5,157.2 237.8,157.6 238,158.1 238.3,158.5 238.5,158.9 238.8,159.3 239,159.7 239.3,160.2 239.5,160.6 239.8,161 240,161.4 240.3,161.9 240.5,162.3 240.8,162.7 241,163.2 241.3,163.6 241.5,164 241.8,164.5 242,164.9 242.3,165.4 242.5,165.8 242.8,166.3 243,166.7 243.3,167.2 243.5,167.6 243.8,168.1 244,168.5 244.3,169 244.5,169.4 244.8,169.9 245,170.4 245.3,170.8 245.5,171.3 245.8,171.8 246,172.2 246.3,172.7 246.5,173.2 246.8,173.7 247,174.1 247.3,174.6 247.5,175.1 247.8,175.6 248,176.1 248.3,176.5 248.5,177 248.8,177.5 249,178 249.3,178.5 249.5,179 249.8,179.5 250,180 250.3,180.5 250.5,181 250.8,181.5 251,182 251.3,182.5 251.5,183 251.8,183.5 252,184.1 252.3,184.6 252.5,185.1 252.8,185.6 253,186.1 253.3,186.7 253.5,187.2 253.8,187.7 254,188.2 254.3,188.8 254.5,189.3 254.8,189.8 255,190.4 255.3,190.9 255.5,191.4 255.8,192 256,192.5 256.3,193.1 256.5,193.6 256.8,194.2 257,194.7 257.3,195.3 257.5,195.8 257.8,196.4 258,196.9 258.3,197.5 258.5,198 258.8,198.6 259,199.2 259.3,199.7 259.5,200.3 259.8,200.9 260,201.4 260.3,202 260.5,202.6 260.8,203.2 261,203.7 261.3,204.3 261.5,204.9 261.8,205.5 262,206.1 262.3,206.6 262.5,207.2 262.8,207.8 263,208.4 263.3,209 263.5,209.6 263.8,210.2 264,210.8 264.3,211.4 264.5,212 264.8,212.6 265,213.2 265.3,213.8 265.5,214.4 265.8,215 266,215.7 266.3,216.3 266.5,216.9 266.8,217.5 267,218.1 267.3,218.8 267.5,219.4 267.8,220 268,220.6 268.3,221.3 268.5,221.9 268.8,222.5 269,223.2 269.3,223.8 269.5,224.4 269.8,225.1 270,225.7 270.3,226.4 270.5,227 270.8,227.7 271,228.3 271.3,229 271.5,229.6 271.8,230.3 272,230.9 272.3,231.6 272.5,232.2 272.8,232.9 273,233.6 273.3,234.2 273.5,234.9 273.8,235.6 274,236.2 274.3,236.9 274.5,237.6 274.8,238.3 275,238.9 275.3,239.6 275.5,240.3 275.8,241 276,241.7 276.3,242.3 276.5,243 276.8,243.7 277,244.4 277.3,245.1 277.5,245.8 277.8,246.5 278,247.2 278.3,247.9 278.5,248.6 278.8,249.3 279,250 279.3,250.7 279.5,251.4 279.8,252.1 280,252.9 280.3,253.6 280.5,254.3 280.8,255 281,255.7 281.3,256.5 281.5,257.2 281.8,257.9 282,258.6 282.3,259.4 282.5,260.1 282.8,260.8 283,261.6 283.3,262.3 283.5,263 283.8,263.8 284,264.5 284.3,265.3 284.5,266 284.8,266.8 285,267.5 285.3,268.3 285.5,269 285.8,269.8 286,270.5 286.3,271.3 286.5,272 286.8,272.8 287,273.6 287.3,274.3 287.5,275.1 287.8,275.9 288,276.6 288.3,277.4 288.5,278.2 288.8,279 289,279.7 289.3,280.5 289.5,281.3 289.8,282.1 290,282.9 290.3,283.6 290.5,284.4 290.8,285.2 291,286 291.3,286.8 291.5,287.6 291.8,288.4 292,289.2 292.3,290 292.5,290.8 292.8,291.6 293,292.4 293.3,293.2 293.5,294 293.8,294.8 294,295.7 294.3,296.5 294.5,297.3 294.8,298.1 295,298.9 295.3,299.8 295.5,300.6 295.8,301.4 296,302.2 296.3,303.1 296.5,303.9 296.8,304.7 297,305.6 297.3,306.4 297.5,307.2 297.8,308.1 298,308.9 298.3,309.8 298.5,310.6 298.8,311.5 299,312.3 299.3,313.2 299.5,314 299.8,314.9 300,315.7 300.3,316.6 300.5,317.4 300.8,318.3 301,319.2 301.3,320 301.5,320.9 301.8,321.8 302,322.6 302.3,323.5 302.5,324.4 302.8,325.3 303,326.1 303.3,327 303.5,327.9 303.8,328.8 304,329.7 304.3,330.5 304.5,331.4 304.8,332.3 305,333.2 305.3,334.1 305.5,335 305.8,335.9 306,336.8 306.3,337.7 306.5,338.6 306.8,339.5 307,340.4 307.3,341.3 307.5,342.2 307.8,343.1 308,344.1 308.3,345 308.5,345.9 308.8,346.8 309,347.7 309.3,348.7 309.5,349.6 309.8,350.5 310,351.4 310.3,352.4 310.5,353.3 310.8,354.2 311,355.2 311.3,356.1 311.5,357 311.8,358 312,358.9 312.3,359.9 312.5,360.8 312.8,361.8 313,362.7 313.3,363.7 313.5,364.6 313.8,365.6 314,366.5 314.3,367.5 314.5,368.4 314.8,369.4 315,370.4 315.3,371.3 315.5,372.3 315.8,373.3 316,374.2 316.3,375.2 316.5,376.2 316.8,377.2 317,378.1 317.3,379.1 317.5,380.1 317.8,381.1 318,382.1 318,382.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="40,390 37.6,379.1 47.3,381.5" fill="currentColor"/>
  <polygon points="320,390 312.7,381.5 322.4,379.1" fill="currentColor"/>
  <circle cx="180" cy="110" r="4" fill="currentColor"/>
  <text x="180" y="96" font-size="13" fill="currentColor" text-anchor="middle">(20, 800)</text>
</svg>
</div>


{{< callout type="info" >}}
**How to:** given an application involving revenue, use a quadratic equation
to find the maximum.

1. Write a quadratic equation for revenue.
2. Find the vertex of the quadratic equation.
3. Determine the $y$-value of the vertex.
{{< /callout >}}

**Example.** The unit price of an item affects its supply and demand. That
is, if the unit price goes up, the demand for the item will usually
decrease. For example, a local newspaper currently has 84,000 subscribers at
a quarterly charge of \$30. Market research has suggested that if the owners
raise the price to \$32, they would lose 5,000 subscribers. Assuming that
subscriptions are linearly related to the price, what price should the
newspaper charge for a quarterly subscription to maximize their revenue?

**Solution.** Revenue is the amount of money a company brings in. In this
case, the revenue can be found by multiplying the price per subscription
times the number of subscribers, or quantity. We can introduce variables,
$p$ for price per subscription and $Q$ for quantity, giving us the equation
$\text{Revenue}=pQ$.

Because the number of subscribers changes with the price, we need to find a
relationship between the variables. We know that currently $p=30$ and
$Q=84{,}000$. We also know that if the price rises to \$32, the newspaper
would lose 5,000 subscribers, giving a second pair of values, $p=32$ and
$Q=79{,}000$. From this we can find a linear equation relating the two
quantities. The slope will be

$$
\begin{array}{lrcl}
& m &=& \tfrac{79{,}000-84{,}000}{32-30} \\[4pt]
& &=& \tfrac{-5{,}000}{2} \\[4pt]
& &=& -2{,}500
\end{array}
$$

This tells us the paper will lose 2,500 subscribers for each dollar they
raise the price. We can then solve for the $y$-intercept.

$$
\begin{array}{lrcl}
\text{Substitute in the point } Q=84{,}000 \text{ and } p=30. & Q &=& -2{,}500p+b \\[4pt]
\text{Solve for } b. & 84{,}000 &=& -2{,}500(30)+b \\[4pt]
& b &=& 159{,}000
\end{array}
$$

This gives us the linear equation $Q=-2{,}500p+159{,}000$ relating cost and
subscribers. We now return to our revenue equation.

$$
\begin{array}{lrcl}
& \text{Revenue} &=& pQ \\[4pt]
& \text{Revenue} &=& p(-2{,}500p+159{,}000) \\[4pt]
& \text{Revenue} &=& -2{,}500p^2+159{,}000p
\end{array}
$$

We now have a quadratic function for revenue as a function of the
subscription charge. To find the price that will maximize revenue for the
newspaper, we can find the vertex.

$$
\begin{array}{lrcl}
& h &=& -\tfrac{159{,}000}{2(-2{,}500)} \\[4pt]
& &=& 31.8
\end{array}
$$

The model tells us that the maximum revenue will occur if the newspaper
charges \$31.80 for a subscription. To find what the maximum revenue is, we
evaluate the revenue function.

$$
\begin{array}{lrcl}
& \text{maximum revenue} &=& -2{,}500(31.8)^2+159{,}000(31.8) \\[4pt]
& &=& 2{,}528{,}100
\end{array}
$$

**Analysis.** This could also be solved by graphing the quadratic, below. We
can see the maximum revenue on the graph of the quadratic function.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of revenue, in thousands of dollars, as a function of subscription price p, a downward-opening parabola with vertex at (31.8, 2528.1), the maximum revenue.","xMin":0,"xMax":80,"yMin":0,"yMax":3000,"xUnit":4,"yUnit":0.11,"margin":40,"grid":false,"tickLabels":true,"xTickStep":10,"yTickStep":500,"xLabel":"Price (p)","yLabel":"Revenue ($1,000)","quadratics":[{"a":-2.5,"b":159,"c":0}],"points":[{"at":[31.8,2528.1],"label":"(31.80, 2528.1)","labelSide":"n"}]}'>
<svg role="img" aria-label="The graph of revenue, in thousands of dollars, as a function of subscription price p, a downward-opening parabola with vertex at (31.8, 2528.1), the maximum revenue." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 410" width="400" height="410" font-family="Helvetica, Arial, sans-serif">
  <line x1="40" y1="370" x2="362" y2="370" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="38" x2="40" y2="370" stroke="currentColor" stroke-width="1"/>
  <polygon points="372,370 362,375 362,365" fill="currentColor"/>
  <polygon points="40,28 45,38 35,38" fill="currentColor"/>
  <text x="370" y="362" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">Price (p)</text>
  <text x="48" y="38" font-size="13" fill="currentColor" font-style="italic">Revenue ($1,000)</text>
  <line x1="80" y1="367" x2="80" y2="373" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="385" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="120" y1="367" x2="120" y2="373" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="385" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="160" y1="367" x2="160" y2="373" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="385" font-size="11" fill="currentColor" text-anchor="middle">30</text>
  <line x1="200" y1="367" x2="200" y2="373" stroke="currentColor" stroke-width="1"/>
  <text x="200" y="385" font-size="11" fill="currentColor" text-anchor="middle">40</text>
  <line x1="240" y1="367" x2="240" y2="373" stroke="currentColor" stroke-width="1"/>
  <text x="240" y="385" font-size="11" fill="currentColor" text-anchor="middle">50</text>
  <line x1="280" y1="367" x2="280" y2="373" stroke="currentColor" stroke-width="1"/>
  <text x="280" y="385" font-size="11" fill="currentColor" text-anchor="middle">60</text>
  <line x1="320" y1="367" x2="320" y2="373" stroke="currentColor" stroke-width="1"/>
  <text x="320" y="385" font-size="11" fill="currentColor" text-anchor="middle">70</text>
  <line x1="360" y1="367" x2="360" y2="373" stroke="currentColor" stroke-width="1"/>
  <text x="360" y="385" font-size="11" fill="currentColor" text-anchor="middle">80</text>
  <line x1="37" y1="315" x2="43" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="319" font-size="11" fill="currentColor" text-anchor="end">500</text>
  <line x1="37" y1="260" x2="43" y2="260" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="264" font-size="11" fill="currentColor" text-anchor="end">1,000</text>
  <line x1="37" y1="205" x2="43" y2="205" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="209" font-size="11" fill="currentColor" text-anchor="end">1,500</text>
  <line x1="37" y1="150" x2="43" y2="150" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="154" font-size="11" fill="currentColor" text-anchor="end">2,000</text>
  <line x1="37" y1="95" x2="43" y2="95" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="99" font-size="11" fill="currentColor" text-anchor="end">2,500</text>
  <line x1="37" y1="40" x2="43" y2="40" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="44" font-size="11" fill="currentColor" text-anchor="end">3,000</text>
  <polyline points="41.8,362.2 42,361.3 42.3,360.2 42.5,359.2 42.8,358.1 43,357 43.3,356 43.5,354.9 43.8,353.8 44,352.8 44.3,351.7 44.5,350.7 44.8,349.6 45,348.6 45.3,347.5 45.5,346.5 45.8,345.4 46,344.4 46.3,343.3 46.5,342.3 46.8,341.3 47,340.2 47.3,339.2 47.5,338.2 47.8,337.1 48,336.1 48.3,335.1 48.5,334.1 48.8,333.1 49,332 49.3,331 49.5,330 49.8,329 50,328 50.3,327 50.5,326 50.8,325 51,324 51.3,323 51.5,322 51.8,321 52,320 52.3,319 52.5,318 52.8,317 53,316.1 53.3,315.1 53.5,314.1 53.8,313.1 54,312.2 54.3,311.2 54.5,310.2 54.8,309.2 55,308.3 55.3,307.3 55.5,306.4 55.8,305.4 56,304.4 56.3,303.5 56.5,302.5 56.8,301.6 57,300.6 57.3,299.7 57.5,298.7 57.8,297.8 58,296.9 58.3,295.9 58.5,295 58.8,294.1 59,293.1 59.3,292.2 59.5,291.3 59.8,290.3 60,289.4 60.3,288.5 60.5,287.6 60.8,286.7 61,285.8 61.3,284.8 61.5,283.9 61.8,283 62,282.1 62.3,281.2 62.5,280.3 62.8,279.4 63,278.5 63.3,277.6 63.5,276.7 63.8,275.8 64,275 64.3,274.1 64.5,273.2 64.8,272.3 65,271.4 65.3,270.6 65.5,269.7 65.8,268.8 66,267.9 66.3,267.1 66.5,266.2 66.8,265.3 67,264.5 67.3,263.6 67.5,262.8 67.8,261.9 68,261 68.3,260.2 68.5,259.3 68.8,258.5 69,257.7 69.3,256.8 69.5,256 69.8,255.1 70,254.3 70.3,253.5 70.5,252.6 70.8,251.8 71,251 71.3,250.1 71.5,249.3 71.8,248.5 72,247.7 72.3,246.9 72.5,246 72.8,245.2 73,244.4 73.3,243.6 73.5,242.8 73.8,242 74,241.2 74.3,240.4 74.5,239.6 74.8,238.8 75,238 75.3,237.2 75.5,236.4 75.8,235.6 76,234.9 76.3,234.1 76.5,233.3 76.8,232.5 77,231.7 77.3,231 77.5,230.2 77.8,229.4 78,228.7 78.3,227.9 78.5,227.1 78.8,226.4 79,225.6 79.3,224.9 79.5,224.1 79.8,223.4 80,222.6 80.3,221.9 80.5,221.1 80.8,220.4 81,219.6 81.3,218.9 81.5,218.1 81.8,217.4 82,216.7 82.3,215.9 82.5,215.2 82.8,214.5 83,213.8 83.3,213 83.5,212.3 83.8,211.6 84,210.9 84.3,210.2 84.5,209.5 84.8,208.7 85,208 85.3,207.3 85.5,206.6 85.8,205.9 86,205.2 86.3,204.5 86.5,203.8 86.8,203.1 87,202.5 87.3,201.8 87.5,201.1 87.8,200.4 88,199.7 88.3,199 88.5,198.4 88.8,197.7 89,197 89.3,196.3 89.5,195.7 89.8,195 90,194.3 90.3,193.7 90.5,193 90.8,192.4 91,191.7 91.3,191.1 91.5,190.4 91.8,189.8 92,189.1 92.3,188.5 92.5,187.8 92.8,187.2 93,186.5 93.3,185.9 93.5,185.3 93.8,184.6 94,184 94.3,183.4 94.5,182.7 94.8,182.1 95,181.5 95.3,180.9 95.5,180.3 95.8,179.7 96,179 96.3,178.4 96.5,177.8 96.8,177.2 97,176.6 97.3,176 97.5,175.4 97.8,174.8 98,174.2 98.3,173.6 98.5,173 98.8,172.4 99,171.9 99.3,171.3 99.5,170.7 99.8,170.1 100,169.5 100.3,168.9 100.5,168.4 100.8,167.8 101,167.2 101.3,166.7 101.5,166.1 101.8,165.5 102,165 102.3,164.4 102.5,163.9 102.8,163.3 103,162.7 103.3,162.2 103.5,161.7 103.8,161.1 104,160.6 104.3,160 104.5,159.5 104.8,158.9 105,158.4 105.3,157.9 105.5,157.3 105.8,156.8 106,156.3 106.3,155.8 106.5,155.2 106.8,154.7 107,154.2 107.3,153.7 107.5,153.2 107.8,152.7 108,152.1 108.3,151.6 108.5,151.1 108.8,150.6 109,150.1 109.3,149.6 109.5,149.1 109.8,148.6 110,148.1 110.3,147.7 110.5,147.2 110.8,146.7 111,146.2 111.3,145.7 111.5,145.2 111.8,144.8 112,144.3 112.3,143.8 112.5,143.3 112.8,142.9 113,142.4 113.3,141.9 113.5,141.5 113.8,141 114,140.6 114.3,140.1 114.5,139.6 114.8,139.2 115,138.7 115.3,138.3 115.5,137.8 115.8,137.4 116,137 116.3,136.5 116.5,136.1 116.8,135.7 117,135.2 117.3,134.8 117.5,134.4 117.8,133.9 118,133.5 118.3,133.1 118.5,132.7 118.8,132.3 119,131.8 119.3,131.4 119.5,131 119.8,130.6 120,130.2 120.3,129.8 120.5,129.4 120.8,129 121,128.6 121.3,128.2 121.5,127.8 121.8,127.4 122,127 122.3,126.6 122.5,126.3 122.8,125.9 123,125.5 123.3,125.1 123.5,124.7 123.8,124.4 124,124 124.3,123.6 124.5,123.2 124.8,122.9 125,122.5 125.3,122.2 125.5,121.8 125.8,121.4 126,121.1 126.3,120.7 126.5,120.4 126.8,120 127,119.7 127.3,119.3 127.5,119 127.8,118.7 128,118.3 128.3,118 128.5,117.7 128.8,117.3 129,117 129.3,116.7 129.5,116.3 129.8,116 130,115.7 130.3,115.4 130.5,115.1 130.8,114.7 131,114.4 131.3,114.1 131.5,113.8 131.8,113.5 132,113.2 132.3,112.9 132.5,112.6 132.8,112.3 133,112 133.3,111.7 133.5,111.4 133.8,111.1 134,110.9 134.3,110.6 134.5,110.3 134.8,110 135,109.7 135.3,109.5 135.5,109.2 135.8,108.9 136,108.6 136.3,108.4 136.5,108.1 136.8,107.8 137,107.6 137.3,107.3 137.5,107.1 137.8,106.8 138,106.6 138.3,106.3 138.5,106.1 138.8,105.8 139,105.6 139.3,105.3 139.5,105.1 139.8,104.9 140,104.6 140.3,104.4 140.5,104.2 140.8,103.9 141,103.7 141.3,103.5 141.5,103.3 141.8,103 142,102.8 142.3,102.6 142.5,102.4 142.8,102.2 143,102 143.3,101.8 143.5,101.6 143.8,101.4 144,101.2 144.3,101 144.5,100.8 144.8,100.6 145,100.4 145.3,100.2 145.5,100 145.8,99.8 146,99.6 146.3,99.5 146.5,99.3 146.8,99.1 147,98.9 147.3,98.7 147.5,98.6 147.8,98.4 148,98.2 148.3,98.1 148.5,97.9 148.8,97.8 149,97.6 149.3,97.4 149.5,97.3 149.8,97.1 150,97 150.3,96.8 150.5,96.7 150.8,96.6 151,96.4 151.3,96.3 151.5,96.1 151.8,96 152,95.9 152.3,95.8 152.5,95.6 152.8,95.5 153,95.4 153.3,95.3 153.5,95.1 153.8,95 154,94.9 154.3,94.8 154.5,94.7 154.8,94.6 155,94.5 155.3,94.4 155.5,94.3 155.8,94.2 156,94.1 156.3,94 156.5,93.9 156.8,93.8 157,93.7 157.3,93.6 157.5,93.5 157.8,93.4 158,93.4 158.3,93.3 158.5,93.2 158.8,93.1 159,93.1 159.3,93 159.5,92.9 159.8,92.9 160,92.8 160.3,92.7 160.5,92.7 160.8,92.6 161,92.6 161.3,92.5 161.5,92.5 161.8,92.4 162,92.4 162.3,92.3 162.5,92.3 162.8,92.2 163,92.2 163.3,92.2 163.5,92.1 163.8,92.1 164,92.1 164.3,92.1 164.5,92 164.8,92 165,92 165.3,92 165.5,92 165.8,91.9 166,91.9 166.3,91.9 166.5,91.9 166.8,91.9 167,91.9 167.3,91.9 167.5,91.9 167.8,91.9 168,91.9 168.3,91.9 168.5,91.9 168.8,92 169,92 169.3,92 169.5,92 169.8,92 170,92 170.3,92.1 170.5,92.1 170.8,92.1 171,92.2 171.3,92.2 171.5,92.2 171.8,92.3 172,92.3 172.3,92.3 172.5,92.4 172.8,92.4 173,92.5 173.3,92.5 173.5,92.6 173.8,92.6 174,92.7 174.3,92.8 174.5,92.8 174.8,92.9 175,93 175.3,93 175.5,93.1 175.8,93.2 176,93.2 176.3,93.3 176.5,93.4 176.8,93.5 177,93.6 177.3,93.6 177.5,93.7 177.8,93.8 178,93.9 178.3,94 178.5,94.1 178.8,94.2 179,94.3 179.3,94.4 179.5,94.5 179.8,94.6 180,94.7 180.3,94.8 180.5,94.9 180.8,95.1 181,95.2 181.3,95.3 181.5,95.4 181.8,95.5 182,95.7 182.3,95.8 182.5,95.9 182.8,96.1 183,96.2 183.3,96.3 183.5,96.5 183.8,96.6 184,96.8 184.3,96.9 184.5,97.1 184.8,97.2 185,97.4 185.3,97.5 185.5,97.7 185.8,97.8 186,98 186.3,98.1 186.5,98.3 186.8,98.5 187,98.6 187.3,98.8 187.5,99 187.8,99.2 188,99.3 188.3,99.5 188.5,99.7 188.8,99.9 189,100.1 189.3,100.3 189.5,100.5 189.8,100.6 190,100.8 190.3,101 190.5,101.2 190.8,101.4 191,101.6 191.3,101.9 191.5,102.1 191.8,102.3 192,102.5 192.3,102.7 192.5,102.9 192.8,103.1 193,103.3 193.3,103.6 193.5,103.8 193.8,104 194,104.3 194.3,104.5 194.5,104.7 194.8,105 195,105.2 195.3,105.4 195.5,105.7 195.8,105.9 196,106.2 196.3,106.4 196.5,106.7 196.8,106.9 197,107.2 197.3,107.4 197.5,107.7 197.8,108 198,108.2 198.3,108.5 198.5,108.7 198.8,109 199,109.3 199.3,109.6 199.5,109.8 199.8,110.1 200,110.4 200.3,110.7 200.5,111 200.8,111.3 201,111.5 201.3,111.8 201.5,112.1 201.8,112.4 202,112.7 202.3,113 202.5,113.3 202.8,113.6 203,113.9 203.3,114.2 203.5,114.6 203.8,114.9 204,115.2 204.3,115.5 204.5,115.8 204.8,116.1 205,116.5 205.3,116.8 205.5,117.1 205.8,117.5 206,117.8 206.3,118.1 206.5,118.5 206.8,118.8 207,119.1 207.3,119.5 207.5,119.8 207.8,120.2 208,120.5 208.3,120.9 208.5,121.2 208.8,121.6 209,121.9 209.3,122.3 209.5,122.7 209.8,123 210,123.4 210.3,123.8 210.5,124.1 210.8,124.5 211,124.9 211.3,125.3 211.5,125.6 211.8,126 212,126.4 212.3,126.8 212.5,127.2 212.8,127.6 213,128 213.3,128.4 213.5,128.8 213.8,129.2 214,129.6 214.3,130 214.5,130.4 214.8,130.8 215,131.2 215.3,131.6 215.5,132 215.8,132.4 216,132.8 216.3,133.3 216.5,133.7 216.8,134.1 217,134.5 217.3,135 217.5,135.4 217.8,135.8 218,136.3 218.3,136.7 218.5,137.1 218.8,137.6 219,138 219.3,138.5 219.5,138.9 219.8,139.4 220,139.8 220.3,140.3 220.5,140.7 220.8,141.2 221,141.7 221.3,142.1 221.5,142.6 221.8,143.1 222,143.5 222.3,144 222.5,144.5 222.8,144.9 223,145.4 223.3,145.9 223.5,146.4 223.8,146.9 224,147.4 224.3,147.8 224.5,148.3 224.8,148.8 225,149.3 225.3,149.8 225.5,150.3 225.8,150.8 226,151.3 226.3,151.8 226.5,152.3 226.8,152.9 227,153.4 227.3,153.9 227.5,154.4 227.8,154.9 228,155.4 228.3,156 228.5,156.5 228.8,157 229,157.6 229.3,158.1 229.5,158.6 229.8,159.2 230,159.7 230.3,160.2 230.5,160.8 230.8,161.3 231,161.9 231.3,162.4 231.5,163 231.8,163.5 232,164.1 232.3,164.6 232.5,165.2 232.8,165.8 233,166.3 233.3,166.9 233.5,167.5 233.8,168 234,168.6 234.3,169.2 234.5,169.8 234.8,170.3 235,170.9 235.3,171.5 235.5,172.1 235.8,172.7 236,173.3 236.3,173.9 236.5,174.5 236.8,175 237,175.6 237.3,176.2 237.5,176.9 237.8,177.5 238,178.1 238.3,178.7 238.5,179.3 238.8,179.9 239,180.5 239.3,181.1 239.5,181.8 239.8,182.4 240,183 240.3,183.6 240.5,184.3 240.8,184.9 241,185.5 241.3,186.2 241.5,186.8 241.8,187.4 242,188.1 242.3,188.7 242.5,189.4 242.8,190 243,190.7 243.3,191.3 243.5,192 243.8,192.6 244,193.3 244.3,193.9 244.5,194.6 244.8,195.3 245,195.9 245.3,196.6 245.5,197.3 245.8,198 246,198.6 246.3,199.3 246.5,200 246.8,200.7 247,201.4 247.3,202 247.5,202.7 247.8,203.4 248,204.1 248.3,204.8 248.5,205.5 248.8,206.2 249,206.9 249.3,207.6 249.5,208.3 249.8,209 250,209.7 250.3,210.5 250.5,211.2 250.8,211.9 251,212.6 251.3,213.3 251.5,214.1 251.8,214.8 252,215.5 252.3,216.2 252.5,217 252.8,217.7 253,218.4 253.3,219.2 253.5,219.9 253.8,220.7 254,221.4 254.3,222.2 254.5,222.9 254.8,223.7 255,224.4 255.3,225.2 255.5,225.9 255.8,226.7 256,227.4 256.3,228.2 256.5,229 256.8,229.7 257,230.5 257.3,231.3 257.5,232.1 257.8,232.8 258,233.6 258.3,234.4 258.5,235.2 258.8,236 259,236.8 259.3,237.5 259.5,238.3 259.8,239.1 260,239.9 260.3,240.7 260.5,241.5 260.8,242.3 261,243.1 261.3,243.9 261.5,244.7 261.8,245.6 262,246.4 262.3,247.2 262.5,248 262.8,248.8 263,249.6 263.3,250.5 263.5,251.3 263.8,252.1 264,253 264.3,253.8 264.5,254.6 264.8,255.5 265,256.3 265.3,257.1 265.5,258 265.8,258.8 266,259.7 266.3,260.5 266.5,261.4 266.8,262.2 267,263.1 267.3,264 267.5,264.8 267.8,265.7 268,266.5 268.3,267.4 268.5,268.3 268.8,269.2 269,270 269.3,270.9 269.5,271.8 269.8,272.7 270,273.5 270.3,274.4 270.5,275.3 270.8,276.2 271,277.1 271.3,278 271.5,278.9 271.8,279.8 272,280.7 272.3,281.6 272.5,282.5 272.8,283.4 273,284.3 273.3,285.2 273.5,286.1 273.8,287 274,288 274.3,288.9 274.5,289.8 274.8,290.7 275,291.6 275.3,292.6 275.5,293.5 275.8,294.4 276,295.4 276.3,296.3 276.5,297.2 276.8,298.2 277,299.1 277.3,300.1 277.5,301 277.8,302 278,302.9 278.3,303.9 278.5,304.8 278.8,305.8 279,306.7 279.3,307.7 279.5,308.7 279.8,309.6 280,310.6 280.3,311.6 280.5,312.5 280.8,313.5 281,314.5 281.3,315.5 281.5,316.5 281.8,317.4 282,318.4 282.3,319.4 282.5,320.4 282.8,321.4 283,322.4 283.3,323.4 283.5,324.4 283.8,325.4 284,326.4 284.3,327.4 284.5,328.4 284.8,329.4 285,330.4 285.3,331.4 285.5,332.4 285.8,333.5 286,334.5 286.3,335.5 286.5,336.5 286.8,337.6 287,338.6 287.3,339.6 287.5,340.6 287.8,341.7 288,342.7 288.3,343.8 288.5,344.8 288.8,345.8 289,346.9 289.3,347.9 289.5,349 289.8,350 290,351.1 290.3,352.2 290.5,353.2 290.8,354.3 291,355.3 291.3,356.4 291.5,357.5 291.8,358.5 292,359.6 292.3,360.7 292.5,361.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="40,370 37.4,359.1 47.1,361.4" fill="currentColor"/>
  <polygon points="294.3,369.3 287.1,360.7 296.9,358.5" fill="currentColor"/>
  <circle cx="167.2" cy="91.9" r="4" fill="currentColor"/>
  <text x="167.2" y="77.9" font-size="13" fill="currentColor" text-anchor="middle">(31.80, 2528.1)</text>
</svg>
</div>


## Finding the x- and y-intercepts of a quadratic function

Much as we did in the application problems above, we also need to find
intercepts of quadratic equations for graphing parabolas. Recall that we
find the $y$-intercept of a quadratic by evaluating the function at an input
of zero, and we find the $x$-intercepts at locations where the output is
zero. Notice below that the number of $x$-intercepts can vary depending upon
the location of the graph.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Panel showing no x-intercept: an upward-opening parabola entirely above the x-axis, with vertex at (1, 2).","xMin":-3,"xMax":5,"yMin":-3,"yMax":6,"unit":22,"tickLabels":true,"quadratics":[{"a":1,"b":-2,"c":3}]}'>
<svg role="img" aria-label="Panel showing no x-intercept: an upward-opening parabola entirely above the x-axis, with vertex at (1, 2)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228 250" width="228" height="250" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="224" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="224" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="224" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="224" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="224" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="224" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="224" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="224" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="202" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="202" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="202" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="202" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="202" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="202" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="202" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="202" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="158" x2="204" y2="158" stroke="currentColor" stroke-width="1"/>
  <line x1="92" y1="24" x2="92" y2="226" stroke="currentColor" stroke-width="1"/>
  <polygon points="214,158 204,163 204,153" fill="currentColor"/>
  <polygon points="92,14 97,24 87,24" fill="currentColor"/>
  <polygon points="14,158 24,153 24,163" fill="currentColor"/>
  <polygon points="92,236 87,226 97,226" fill="currentColor"/>
  <text x="212" y="150" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="100" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="155" x2="26" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="173" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="48" y1="155" x2="48" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="173" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="70" y1="155" x2="70" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="173" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="114" y1="155" x2="114" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="173" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="136" y1="155" x2="136" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="136" y="173" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="158" y1="155" x2="158" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="173" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="180" y1="155" x2="180" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="173" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="202" y1="155" x2="202" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="173" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="89" y1="224" x2="95" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="228" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="89" y1="202" x2="95" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="206" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="89" y1="180" x2="95" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="184" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="89" y1="136" x2="95" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="140" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="89" y1="114" x2="95" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="118" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="89" y1="92" x2="95" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="96" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="89" y1="70" x2="95" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="74" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="89" y1="48" x2="95" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="52" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="89" y1="26" x2="95" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="72,33.8 72,33.8 72.3,34.8 72.5,35.7 72.8,36.7 73,37.6 73.3,38.5 73.5,39.4 73.8,40.4 74,41.3 74.3,42.2 74.5,43.1 74.8,44 75,44.9 75.3,45.7 75.5,46.6 75.8,47.5 76,48.4 76.3,49.2 76.5,50.1 76.8,50.9 77,51.8 77.3,52.6 77.5,53.4 77.8,54.3 78,55.1 78.3,55.9 78.5,56.7 78.8,57.5 79,58.3 79.3,59.1 79.5,59.9 79.8,60.7 80,61.5 80.3,62.2 80.5,63 80.8,63.7 81,64.5 81.3,65.2 81.5,66 81.8,66.7 82,67.5 82.3,68.2 82.5,68.9 82.8,69.6 83,70.3 83.3,71 83.5,71.7 83.8,72.4 84,73.1 84.3,73.8 84.5,74.4 84.8,75.1 85,75.8 85.3,76.4 85.5,77.1 85.8,77.7 86,78.4 86.3,79 86.5,79.6 86.8,80.2 87,80.9 87.3,81.5 87.5,82.1 87.8,82.7 88,83.3 88.3,83.9 88.5,84.4 88.8,85 89,85.6 89.3,86.2 89.5,86.7 89.8,87.3 90,87.8 90.3,88.4 90.5,88.9 90.8,89.4 91,90 91.3,90.5 91.5,91 91.8,91.5 92,92 92.3,92.5 92.5,93 92.8,93.5 93,94 93.3,94.4 93.5,94.9 93.8,95.4 94,95.8 94.3,96.3 94.5,96.7 94.8,97.2 95,97.6 95.3,98 95.5,98.4 95.8,98.9 96,99.3 96.3,99.7 96.5,100.1 96.8,100.5 97,100.9 97.3,101.2 97.5,101.6 97.8,102 98,102.4 98.3,102.7 98.5,103.1 98.8,103.4 99,103.8 99.3,104.1 99.5,104.4 99.8,104.8 100,105.1 100.3,105.4 100.5,105.7 100.8,106 101,106.3 101.3,106.6 101.5,106.9 101.8,107.2 102,107.5 102.3,107.7 102.5,108 102.8,108.2 103,108.5 103.3,108.7 103.5,109 103.8,109.2 104,109.5 104.3,109.7 104.5,109.9 104.8,110.1 105,110.3 105.3,110.5 105.5,110.7 105.8,110.9 106,111.1 106.3,111.3 106.5,111.4 106.8,111.6 107,111.8 107.3,111.9 107.5,112.1 107.8,112.2 108,112.4 108.3,112.5 108.5,112.6 108.8,112.7 109,112.9 109.3,113 109.5,113.1 109.8,113.2 110,113.3 110.3,113.4 110.5,113.4 110.8,113.5 111,113.6 111.3,113.7 111.5,113.7 111.8,113.8 112,113.8 112.3,113.9 112.5,113.9 112.8,113.9 113,114 113.3,114 113.5,114 113.8,114 114,114 114.3,114 114.5,114 114.8,114 115,114 115.3,113.9 115.5,113.9 115.8,113.9 116,113.8 116.3,113.8 116.5,113.7 116.8,113.7 117,113.6 117.3,113.5 117.5,113.4 117.8,113.4 118,113.3 118.3,113.2 118.5,113.1 118.8,113 119,112.9 119.3,112.7 119.5,112.6 119.8,112.5 120,112.4 120.3,112.2 120.5,112.1 120.8,111.9 121,111.8 121.3,111.6 121.5,111.4 121.8,111.3 122,111.1 122.3,110.9 122.5,110.7 122.8,110.5 123,110.3 123.3,110.1 123.5,109.9 123.8,109.7 124,109.5 124.3,109.2 124.5,109 124.8,108.7 125,108.5 125.3,108.2 125.5,108 125.8,107.7 126,107.5 126.3,107.2 126.5,106.9 126.8,106.6 127,106.3 127.3,106 127.5,105.7 127.8,105.4 128,105.1 128.3,104.8 128.5,104.4 128.8,104.1 129,103.8 129.3,103.4 129.5,103.1 129.8,102.7 130,102.4 130.3,102 130.5,101.6 130.8,101.2 131,100.9 131.3,100.5 131.5,100.1 131.8,99.7 132,99.3 132.3,98.9 132.5,98.4 132.8,98 133,97.6 133.3,97.2 133.5,96.7 133.8,96.3 134,95.8 134.3,95.4 134.5,94.9 134.8,94.4 135,94 135.3,93.5 135.5,93 135.8,92.5 136,92 136.3,91.5 136.5,91 136.8,90.5 137,90 137.3,89.4 137.5,88.9 137.8,88.4 138,87.8 138.3,87.3 138.5,86.7 138.8,86.2 139,85.6 139.3,85 139.5,84.4 139.8,83.9 140,83.3 140.3,82.7 140.5,82.1 140.8,81.5 141,80.9 141.3,80.2 141.5,79.6 141.8,79 142,78.4 142.3,77.7 142.5,77.1 142.8,76.4 143,75.8 143.3,75.1 143.5,74.4 143.8,73.8 144,73.1 144.3,72.4 144.5,71.7 144.8,71 145,70.3 145.3,69.6 145.5,68.9 145.8,68.2 146,67.5 146.3,66.7 146.5,66 146.8,65.2 147,64.5 147.3,63.7 147.5,63 147.8,62.2 148,61.5 148.3,60.7 148.5,59.9 148.8,59.1 149,58.3 149.3,57.5 149.5,56.7 149.8,55.9 150,55.1 150.3,54.3 150.5,53.4 150.8,52.6 151,51.8 151.3,50.9 151.5,50.1 151.8,49.2 152,48.4 152.3,47.5 152.5,46.6 152.8,45.7 153,44.9 153.3,44 153.5,43.1 153.8,42.2 154,41.3 154.3,40.4 154.5,39.4 154.8,38.5 155,37.6 155.3,36.7 155.5,35.7 155.8,34.8 156,33.8 156,33.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="70,26 77.3,34.4 67.6,36.9" fill="currentColor"/>
  <polygon points="158,26 160.4,36.9 150.7,34.4" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Panel showing one x-intercept: an upward-opening parabola tangent to the x-axis at its vertex, (1, 0).","xMin":-3,"xMax":5,"yMin":-3,"yMax":6,"unit":22,"tickLabels":true,"quadratics":[{"a":1,"b":-2,"c":1}],"points":[{"at":[1,0]}]}'>
<svg role="img" aria-label="Panel showing one x-intercept: an upward-opening parabola tangent to the x-axis at its vertex, (1, 0)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228 250" width="228" height="250" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="224" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="224" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="224" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="224" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="224" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="224" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="224" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="224" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="202" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="202" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="202" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="202" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="202" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="202" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="202" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="202" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="158" x2="204" y2="158" stroke="currentColor" stroke-width="1"/>
  <line x1="92" y1="24" x2="92" y2="226" stroke="currentColor" stroke-width="1"/>
  <polygon points="214,158 204,163 204,153" fill="currentColor"/>
  <polygon points="92,14 97,24 87,24" fill="currentColor"/>
  <polygon points="14,158 24,153 24,163" fill="currentColor"/>
  <polygon points="92,236 87,226 97,226" fill="currentColor"/>
  <text x="212" y="150" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="100" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="155" x2="26" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="173" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="48" y1="155" x2="48" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="173" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="70" y1="155" x2="70" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="173" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="114" y1="155" x2="114" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="173" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="136" y1="155" x2="136" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="136" y="173" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="158" y1="155" x2="158" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="173" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="180" y1="155" x2="180" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="173" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="202" y1="155" x2="202" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="173" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="89" y1="224" x2="95" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="228" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="89" y1="202" x2="95" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="206" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="89" y1="180" x2="95" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="184" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="89" y1="136" x2="95" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="140" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="89" y1="114" x2="95" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="118" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="89" y1="92" x2="95" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="96" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="89" y1="70" x2="95" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="74" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="89" y1="48" x2="95" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="52" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="89" y1="26" x2="95" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="61.9,34.5 62,35.1 62.3,36.3 62.5,37.4 62.8,38.6 63,39.8 63.3,40.9 63.5,42.1 63.8,43.2 64,44.4 64.3,45.5 64.5,46.6 64.8,47.7 65,48.9 65.3,50 65.5,51.1 65.8,52.2 66,53.3 66.3,54.4 66.5,55.4 66.8,56.5 67,57.6 67.3,58.7 67.5,59.7 67.8,60.8 68,61.8 68.3,62.9 68.5,63.9 68.8,64.9 69,66 69.3,67 69.5,68 69.8,69 70,70 70.3,71 70.5,72 70.8,73 71,74 71.3,74.9 71.5,75.9 71.8,76.9 72,77.8 72.3,78.8 72.5,79.7 72.8,80.7 73,81.6 73.3,82.5 73.5,83.4 73.8,84.4 74,85.3 74.3,86.2 74.5,87.1 74.8,88 75,88.9 75.3,89.7 75.5,90.6 75.8,91.5 76,92.4 76.3,93.2 76.5,94.1 76.8,94.9 77,95.8 77.3,96.6 77.5,97.4 77.8,98.3 78,99.1 78.3,99.9 78.5,100.7 78.8,101.5 79,102.3 79.3,103.1 79.5,103.9 79.8,104.7 80,105.5 80.3,106.2 80.5,107 80.8,107.7 81,108.5 81.3,109.2 81.5,110 81.8,110.7 82,111.5 82.3,112.2 82.5,112.9 82.8,113.6 83,114.3 83.3,115 83.5,115.7 83.8,116.4 84,117.1 84.3,117.8 84.5,118.4 84.8,119.1 85,119.8 85.3,120.4 85.5,121.1 85.8,121.7 86,122.4 86.3,123 86.5,123.6 86.8,124.2 87,124.9 87.3,125.5 87.5,126.1 87.8,126.7 88,127.3 88.3,127.9 88.5,128.4 88.8,129 89,129.6 89.3,130.2 89.5,130.7 89.8,131.3 90,131.8 90.3,132.4 90.5,132.9 90.8,133.4 91,134 91.3,134.5 91.5,135 91.8,135.5 92,136 92.3,136.5 92.5,137 92.8,137.5 93,138 93.3,138.4 93.5,138.9 93.8,139.4 94,139.8 94.3,140.3 94.5,140.7 94.8,141.2 95,141.6 95.3,142 95.5,142.4 95.8,142.9 96,143.3 96.3,143.7 96.5,144.1 96.8,144.5 97,144.9 97.3,145.2 97.5,145.6 97.8,146 98,146.4 98.3,146.7 98.5,147.1 98.8,147.4 99,147.8 99.3,148.1 99.5,148.4 99.8,148.8 100,149.1 100.3,149.4 100.5,149.7 100.8,150 101,150.3 101.3,150.6 101.5,150.9 101.8,151.2 102,151.5 102.3,151.7 102.5,152 102.8,152.2 103,152.5 103.3,152.7 103.5,153 103.8,153.2 104,153.5 104.3,153.7 104.5,153.9 104.8,154.1 105,154.3 105.3,154.5 105.5,154.7 105.8,154.9 106,155.1 106.3,155.3 106.5,155.4 106.8,155.6 107,155.8 107.3,155.9 107.5,156.1 107.8,156.2 108,156.4 108.3,156.5 108.5,156.6 108.8,156.7 109,156.9 109.3,157 109.5,157.1 109.8,157.2 110,157.3 110.3,157.4 110.5,157.4 110.8,157.5 111,157.6 111.3,157.7 111.5,157.7 111.8,157.8 112,157.8 112.3,157.9 112.5,157.9 112.8,157.9 113,158 113.3,158 113.5,158 113.8,158 114,158 114.3,158 114.5,158 114.8,158 115,158 115.3,157.9 115.5,157.9 115.8,157.9 116,157.8 116.3,157.8 116.5,157.7 116.8,157.7 117,157.6 117.3,157.5 117.5,157.4 117.8,157.4 118,157.3 118.3,157.2 118.5,157.1 118.8,157 119,156.9 119.3,156.7 119.5,156.6 119.8,156.5 120,156.4 120.3,156.2 120.5,156.1 120.8,155.9 121,155.8 121.3,155.6 121.5,155.4 121.8,155.3 122,155.1 122.3,154.9 122.5,154.7 122.8,154.5 123,154.3 123.3,154.1 123.5,153.9 123.8,153.7 124,153.5 124.3,153.2 124.5,153 124.8,152.7 125,152.5 125.3,152.2 125.5,152 125.8,151.7 126,151.5 126.3,151.2 126.5,150.9 126.8,150.6 127,150.3 127.3,150 127.5,149.7 127.8,149.4 128,149.1 128.3,148.8 128.5,148.4 128.8,148.1 129,147.8 129.3,147.4 129.5,147.1 129.8,146.7 130,146.4 130.3,146 130.5,145.6 130.8,145.2 131,144.9 131.3,144.5 131.5,144.1 131.8,143.7 132,143.3 132.3,142.9 132.5,142.4 132.8,142 133,141.6 133.3,141.2 133.5,140.7 133.8,140.3 134,139.8 134.3,139.4 134.5,138.9 134.8,138.4 135,138 135.3,137.5 135.5,137 135.8,136.5 136,136 136.3,135.5 136.5,135 136.8,134.5 137,134 137.3,133.4 137.5,132.9 137.8,132.4 138,131.8 138.3,131.3 138.5,130.7 138.8,130.2 139,129.6 139.3,129 139.5,128.4 139.8,127.9 140,127.3 140.3,126.7 140.5,126.1 140.8,125.5 141,124.9 141.3,124.2 141.5,123.6 141.8,123 142,122.4 142.3,121.7 142.5,121.1 142.8,120.4 143,119.8 143.3,119.1 143.5,118.4 143.8,117.8 144,117.1 144.3,116.4 144.5,115.7 144.8,115 145,114.3 145.3,113.6 145.5,112.9 145.8,112.2 146,111.5 146.3,110.7 146.5,110 146.8,109.2 147,108.5 147.3,107.7 147.5,107 147.8,106.2 148,105.5 148.3,104.7 148.5,103.9 148.8,103.1 149,102.3 149.3,101.5 149.5,100.7 149.8,99.9 150,99.1 150.3,98.3 150.5,97.4 150.8,96.6 151,95.8 151.3,94.9 151.5,94.1 151.8,93.2 152,92.4 152.3,91.5 152.5,90.6 152.8,89.7 153,88.9 153.3,88 153.5,87.1 153.8,86.2 154,85.3 154.3,84.4 154.5,83.4 154.8,82.5 155,81.6 155.3,80.7 155.5,79.7 155.8,78.8 156,77.8 156.3,76.9 156.5,75.9 156.8,74.9 157,74 157.3,73 157.5,72 157.8,71 158,70 158.3,69 158.5,68 158.8,67 159,66 159.3,64.9 159.5,63.9 159.8,62.9 160,61.8 160.3,60.8 160.5,59.7 160.8,58.7 161,57.6 161.3,56.5 161.5,55.4 161.8,54.4 162,53.3 162.3,52.2 162.5,51.1 162.8,50 163,48.9 163.3,47.7 163.5,46.6 163.8,45.5 164,44.4 164.3,43.2 164.5,42.1 164.8,40.9 165,39.8 165.3,38.6 165.5,37.4 165.8,36.3 166,35.1 166.1,34.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="60.3,26.7 67.2,35.5 57.4,37.5" fill="currentColor"/>
  <polygon points="167.8,26.7 170.6,37.5 160.8,35.5" fill="currentColor"/>
  <circle cx="114" cy="158" r="4" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Panel showing two x-intercepts: an upward-opening parabola with vertex at (1, -2), crossing the x-axis at approximately -0.41 and 2.41.","xMin":-3,"xMax":5,"yMin":-3,"yMax":6,"unit":22,"tickLabels":true,"quadratics":[{"a":1,"b":-2,"c":-1}],"points":[{"at":[-0.41,0]},{"at":[2.41,0]}]}'>
<svg role="img" aria-label="Panel showing two x-intercepts: an upward-opening parabola with vertex at (1, -2), crossing the x-axis at approximately -0.41 and 2.41." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228 250" width="228" height="250" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="224" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="224" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="224" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="224" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="224" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="224" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="224" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="224" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="202" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="202" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="202" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="202" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="202" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="202" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="202" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="202" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="158" x2="204" y2="158" stroke="currentColor" stroke-width="1"/>
  <line x1="92" y1="24" x2="92" y2="226" stroke="currentColor" stroke-width="1"/>
  <polygon points="214,158 204,163 204,153" fill="currentColor"/>
  <polygon points="92,14 97,24 87,24" fill="currentColor"/>
  <polygon points="14,158 24,153 24,163" fill="currentColor"/>
  <polygon points="92,236 87,226 97,226" fill="currentColor"/>
  <text x="212" y="150" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="100" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="155" x2="26" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="173" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="48" y1="155" x2="48" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="173" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="70" y1="155" x2="70" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="173" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="114" y1="155" x2="114" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="173" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="136" y1="155" x2="136" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="136" y="173" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="158" y1="155" x2="158" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="173" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="180" y1="155" x2="180" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="173" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="202" y1="155" x2="202" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="173" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="89" y1="224" x2="95" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="228" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="89" y1="202" x2="95" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="206" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="89" y1="180" x2="95" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="184" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="89" y1="136" x2="95" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="140" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="89" y1="114" x2="95" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="118" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="89" y1="92" x2="95" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="96" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="89" y1="70" x2="95" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="74" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="89" y1="48" x2="95" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="52" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="89" y1="26" x2="95" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="53.4,35.1 53.5,35.6 53.8,37 54,38.4 54.3,39.7 54.5,41.1 54.8,42.4 55,43.8 55.3,45.1 55.5,46.4 55.8,47.8 56,49.1 56.3,50.4 56.5,51.7 56.8,53 57,54.3 57.3,55.6 57.5,56.9 57.8,58.2 58,59.5 58.3,60.7 58.5,62 58.8,63.2 59,64.5 59.3,65.7 59.5,67 59.8,68.2 60,69.5 60.3,70.7 60.5,71.9 60.8,73.1 61,74.3 61.3,75.5 61.5,76.7 61.8,77.9 62,79.1 62.3,80.3 62.5,81.4 62.8,82.6 63,83.8 63.3,84.9 63.5,86.1 63.8,87.2 64,88.4 64.3,89.5 64.5,90.6 64.8,91.7 65,92.9 65.3,94 65.5,95.1 65.8,96.2 66,97.3 66.3,98.4 66.5,99.4 66.8,100.5 67,101.6 67.3,102.7 67.5,103.7 67.8,104.8 68,105.8 68.3,106.9 68.5,107.9 68.8,108.9 69,110 69.3,111 69.5,112 69.8,113 70,114 70.3,115 70.5,116 70.8,117 71,118 71.3,118.9 71.5,119.9 71.8,120.9 72,121.8 72.3,122.8 72.5,123.7 72.8,124.7 73,125.6 73.3,126.5 73.5,127.4 73.8,128.4 74,129.3 74.3,130.2 74.5,131.1 74.8,132 75,132.9 75.3,133.7 75.5,134.6 75.8,135.5 76,136.4 76.3,137.2 76.5,138.1 76.8,138.9 77,139.8 77.3,140.6 77.5,141.4 77.8,142.3 78,143.1 78.3,143.9 78.5,144.7 78.8,145.5 79,146.3 79.3,147.1 79.5,147.9 79.8,148.7 80,149.5 80.3,150.2 80.5,151 80.8,151.7 81,152.5 81.3,153.2 81.5,154 81.8,154.7 82,155.5 82.3,156.2 82.5,156.9 82.8,157.6 83,158.3 83.3,159 83.5,159.7 83.8,160.4 84,161.1 84.3,161.8 84.5,162.4 84.8,163.1 85,163.8 85.3,164.4 85.5,165.1 85.8,165.7 86,166.4 86.3,167 86.5,167.6 86.8,168.2 87,168.9 87.3,169.5 87.5,170.1 87.8,170.7 88,171.3 88.3,171.9 88.5,172.4 88.8,173 89,173.6 89.3,174.2 89.5,174.7 89.8,175.3 90,175.8 90.3,176.4 90.5,176.9 90.8,177.4 91,178 91.3,178.5 91.5,179 91.8,179.5 92,180 92.3,180.5 92.5,181 92.8,181.5 93,182 93.3,182.4 93.5,182.9 93.8,183.4 94,183.8 94.3,184.3 94.5,184.7 94.8,185.2 95,185.6 95.3,186 95.5,186.4 95.8,186.9 96,187.3 96.3,187.7 96.5,188.1 96.8,188.5 97,188.9 97.3,189.2 97.5,189.6 97.8,190 98,190.4 98.3,190.7 98.5,191.1 98.8,191.4 99,191.8 99.3,192.1 99.5,192.4 99.8,192.8 100,193.1 100.3,193.4 100.5,193.7 100.8,194 101,194.3 101.3,194.6 101.5,194.9 101.8,195.2 102,195.5 102.3,195.7 102.5,196 102.8,196.2 103,196.5 103.3,196.7 103.5,197 103.8,197.2 104,197.5 104.3,197.7 104.5,197.9 104.8,198.1 105,198.3 105.3,198.5 105.5,198.7 105.8,198.9 106,199.1 106.3,199.3 106.5,199.4 106.8,199.6 107,199.8 107.3,199.9 107.5,200.1 107.8,200.2 108,200.4 108.3,200.5 108.5,200.6 108.8,200.7 109,200.9 109.3,201 109.5,201.1 109.8,201.2 110,201.3 110.3,201.4 110.5,201.4 110.8,201.5 111,201.6 111.3,201.7 111.5,201.7 111.8,201.8 112,201.8 112.3,201.9 112.5,201.9 112.8,201.9 113,202 113.3,202 113.5,202 113.8,202 114,202 114.3,202 114.5,202 114.8,202 115,202 115.3,201.9 115.5,201.9 115.8,201.9 116,201.8 116.3,201.8 116.5,201.7 116.8,201.7 117,201.6 117.3,201.5 117.5,201.4 117.8,201.4 118,201.3 118.3,201.2 118.5,201.1 118.8,201 119,200.9 119.3,200.7 119.5,200.6 119.8,200.5 120,200.4 120.3,200.2 120.5,200.1 120.8,199.9 121,199.8 121.3,199.6 121.5,199.4 121.8,199.3 122,199.1 122.3,198.9 122.5,198.7 122.8,198.5 123,198.3 123.3,198.1 123.5,197.9 123.8,197.7 124,197.5 124.3,197.2 124.5,197 124.8,196.7 125,196.5 125.3,196.2 125.5,196 125.8,195.7 126,195.5 126.3,195.2 126.5,194.9 126.8,194.6 127,194.3 127.3,194 127.5,193.7 127.8,193.4 128,193.1 128.3,192.8 128.5,192.4 128.8,192.1 129,191.8 129.3,191.4 129.5,191.1 129.8,190.7 130,190.4 130.3,190 130.5,189.6 130.8,189.2 131,188.9 131.3,188.5 131.5,188.1 131.8,187.7 132,187.3 132.3,186.9 132.5,186.4 132.8,186 133,185.6 133.3,185.2 133.5,184.7 133.8,184.3 134,183.8 134.3,183.4 134.5,182.9 134.8,182.4 135,182 135.3,181.5 135.5,181 135.8,180.5 136,180 136.3,179.5 136.5,179 136.8,178.5 137,178 137.3,177.4 137.5,176.9 137.8,176.4 138,175.8 138.3,175.3 138.5,174.7 138.8,174.2 139,173.6 139.3,173 139.5,172.4 139.8,171.9 140,171.3 140.3,170.7 140.5,170.1 140.8,169.5 141,168.9 141.3,168.2 141.5,167.6 141.8,167 142,166.4 142.3,165.7 142.5,165.1 142.8,164.4 143,163.8 143.3,163.1 143.5,162.4 143.8,161.8 144,161.1 144.3,160.4 144.5,159.7 144.8,159 145,158.3 145.3,157.6 145.5,156.9 145.8,156.2 146,155.5 146.3,154.7 146.5,154 146.8,153.2 147,152.5 147.3,151.7 147.5,151 147.8,150.2 148,149.5 148.3,148.7 148.5,147.9 148.8,147.1 149,146.3 149.3,145.5 149.5,144.7 149.8,143.9 150,143.1 150.3,142.3 150.5,141.4 150.8,140.6 151,139.8 151.3,138.9 151.5,138.1 151.8,137.2 152,136.4 152.3,135.5 152.5,134.6 152.8,133.7 153,132.9 153.3,132 153.5,131.1 153.8,130.2 154,129.3 154.3,128.4 154.5,127.4 154.8,126.5 155,125.6 155.3,124.7 155.5,123.7 155.8,122.8 156,121.8 156.3,120.9 156.5,119.9 156.8,118.9 157,118 157.3,117 157.5,116 157.8,115 158,114 158.3,113 158.5,112 158.8,111 159,110 159.3,108.9 159.5,107.9 159.8,106.9 160,105.8 160.3,104.8 160.5,103.7 160.8,102.7 161,101.6 161.3,100.5 161.5,99.4 161.8,98.4 162,97.3 162.3,96.2 162.5,95.1 162.8,94 163,92.9 163.3,91.7 163.5,90.6 163.8,89.5 164,88.4 164.3,87.2 164.5,86.1 164.8,84.9 165,83.8 165.3,82.6 165.5,81.4 165.8,80.3 166,79.1 166.3,77.9 166.5,76.7 166.8,75.5 167,74.3 167.3,73.1 167.5,71.9 167.8,70.7 168,69.5 168.3,68.2 168.5,67 168.8,65.7 169,64.5 169.3,63.2 169.5,62 169.8,60.7 170,59.5 170.3,58.2 170.5,56.9 170.8,55.6 171,54.3 171.3,53 171.5,51.7 171.8,50.4 172,49.1 172.3,47.8 172.5,46.4 172.8,45.1 173,43.8 173.3,42.4 173.5,41.1 173.8,39.7 174,38.4 174.3,37 174.5,35.6 174.6,35.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="52,27.3 58.7,36.2 48.8,38" fill="currentColor"/>
  <polygon points="176,27.3 179.2,38 169.3,36.2" fill="currentColor"/>
  <circle cx="83" cy="158" r="4" fill="currentColor"/>
  <circle cx="145" cy="158" r="4" fill="currentColor"/>
</svg>
</div>


{{< callout type="info" >}}
**How to:** given a quadratic function $f(x)$, find the $y$- and
$x$-intercepts.

1. Evaluate $f(0)$ to find the $y$-intercept.
2. Solve the quadratic equation $f(x)=0$ to find the $x$-intercepts.
{{< /callout >}}

**Example.** Find the $y$- and $x$-intercepts of the quadratic
$f(x)=3x^2+5x-2$.

**Solution.** We find the $y$-intercept by evaluating $f(0)$.

$$
\begin{array}{lrcl}
& f(0) &=& 3(0)^2+5(0)-2 \\[4pt]
& &=& -2
\end{array}
$$

So the $y$-intercept is at $(0,-2)$.

For the $x$-intercepts, we find all solutions of $f(x)=0$.

$$0=3x^2+5x-2$$

In this case, the quadratic can be factored easily, providing the simplest
method for solution.

$$0=(3x-1)(x+2)$$

$$
\begin{array}{lrcl}
& 0 &=& 3x-1 \\[4pt]
& x &=& \tfrac{1}{3}
\end{array}
\qquad\text{or}\qquad
\begin{array}{lrcl}
& 0 &=& x+2 \\[4pt]
& x &=& -2
\end{array}
$$

So the $x$-intercepts are at $\left(\tfrac{1}{3},0\right)$ and $(-2,0)$.

**Analysis.** By graphing the function, we can confirm that the graph
crosses the $y$-axis at $(0,-2)$. We can also confirm that the graph crosses
the $x$-axis at $\left(\tfrac{1}{3},0\right)$ and $(-2,0)$. See the graph
below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals 3x squared + 5x - 2, an upward-opening parabola crossing the x-axis at (-2, 0) and (1/3, 0), and the y-axis at (0, -2).","xMin":-3,"xMax":3,"yMin":-5,"yMax":1,"unit":30,"tickLabels":true,"quadratics":[{"a":3,"b":5,"c":-2,"label":"f(x) = 3x² + 5x - 2"}],"points":[{"at":[-2,0],"label":"(-2, 0)","labelSide":"nw"},{"at":[0.333333,0],"label":"(1/3, 0)","labelSide":"ne"},{"at":[0,-2],"label":"(0, -2)","labelSide":"se"}]}'>
<svg role="img" aria-label="The graph of f of x equals 3x squared + 5x - 2, an upward-opening parabola crossing the x-axis at (-2, 0) and (1/3, 0), and the y-axis at (0, -2)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232 232" width="232" height="232" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="206" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="56" y1="206" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="206" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="206" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="206" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="206" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="206" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="176" x2="206" y2="176" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="206" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="206" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="206" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="56" x2="208" y2="56" stroke="currentColor" stroke-width="1"/>
  <line x1="116" y1="24" x2="116" y2="208" stroke="currentColor" stroke-width="1"/>
  <polygon points="218,56 208,61 208,51" fill="currentColor"/>
  <polygon points="116,14 121,24 111,24" fill="currentColor"/>
  <polygon points="14,56 24,51 24,61" fill="currentColor"/>
  <polygon points="116,218 111,208 121,208" fill="currentColor"/>
  <text x="216" y="48" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="124" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="53" x2="26" y2="59" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="71" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="56" y1="53" x2="56" y2="59" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="71" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="86" y1="53" x2="86" y2="59" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="71" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="53" x2="146" y2="59" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="71" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="176" y1="53" x2="176" y2="59" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="71" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="53" x2="206" y2="59" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="71" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="113" y1="206" x2="119" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="210" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="113" y1="176" x2="119" y2="176" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="180" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="113" y1="146" x2="119" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="150" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="113" y1="116" x2="119" y2="116" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="120" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="113" y1="86" x2="119" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="90" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="113" y1="26" x2="119" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="30" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <polyline points="53,34.3 53.3,36 53.5,37.9 53.7,39.7 54,41.6 54.2,43.4 54.5,45.3 54.8,47.1 55,48.9 55.3,50.7 55.5,52.5 55.8,54.2 56,56 56.3,57.7 56.5,59.5 56.8,61.2 57,62.9 57.3,64.6 57.5,66.3 57.8,67.9 58,69.6 58.3,71.2 58.5,72.9 58.8,74.5 59,76.1 59.3,77.7 59.5,79.3 59.8,80.8 60,82.4 60.3,83.9 60.5,85.5 60.8,87 61,88.5 61.3,90 61.5,91.5 61.8,92.9 62,94.4 62.3,95.8 62.5,97.3 62.8,98.7 63,100.1 63.3,101.5 63.5,102.9 63.8,104.2 64,105.6 64.3,106.9 64.5,108.3 64.8,109.6 65,110.9 65.3,112.2 65.5,113.5 65.8,114.7 66,116 66.3,117.2 66.5,118.5 66.8,119.7 67,120.9 67.3,122.1 67.5,123.3 67.8,124.4 68,125.6 68.3,126.7 68.5,127.9 68.8,129 69,130.1 69.3,131.2 69.5,132.3 69.8,133.3 70,134.4 70.3,135.4 70.5,136.5 70.8,137.5 71,138.5 71.3,139.5 71.5,140.5 71.8,141.4 72,142.4 72.3,143.3 72.5,144.3 72.8,145.2 73,146.1 73.3,147 73.5,147.9 73.8,148.7 74,149.6 74.3,150.4 74.5,151.3 74.8,152.1 75,152.9 75.3,153.7 75.5,154.5 75.8,155.2 76,156 76.3,156.7 76.5,157.5 76.8,158.2 77,158.9 77.3,159.6 77.5,160.3 77.8,160.9 78,161.6 78.3,162.2 78.5,162.9 78.8,163.5 79,164.1 79.3,164.7 79.5,165.3 79.8,165.8 80,166.4 80.3,166.9 80.5,167.5 80.8,168 81,168.5 81.3,169 81.5,169.5 81.8,169.9 82,170.4 82.3,170.8 82.5,171.3 82.8,171.7 83,172.1 83.3,172.5 83.5,172.9 83.8,173.2 84,173.6 84.3,173.9 84.5,174.3 84.8,174.6 85,174.9 85.3,175.2 85.5,175.5 85.8,175.7 86,176 86.3,176.2 86.5,176.5 86.8,176.7 87,176.9 87.3,177.1 87.5,177.3 87.8,177.4 88,177.6 88.3,177.7 88.5,177.9 88.8,178 89,178.1 89.3,178.2 89.5,178.3 89.8,178.3 90,178.4 90.3,178.4 90.5,178.5 90.8,178.5 91,178.5 91.3,178.5 91.5,178.5 91.8,178.4 92,178.4 92.3,178.3 92.5,178.3 92.8,178.2 93,178.1 93.3,178 93.5,177.9 93.8,177.7 94,177.6 94.3,177.4 94.5,177.3 94.8,177.1 95,176.9 95.3,176.7 95.5,176.5 95.8,176.2 96,176 96.3,175.7 96.5,175.5 96.8,175.2 97,174.9 97.3,174.6 97.5,174.3 97.8,173.9 98,173.6 98.3,173.2 98.5,172.9 98.8,172.5 99,172.1 99.3,171.7 99.5,171.3 99.8,170.8 100,170.4 100.3,169.9 100.5,169.5 100.8,169 101,168.5 101.3,168 101.5,167.5 101.8,166.9 102,166.4 102.3,165.8 102.5,165.3 102.8,164.7 103,164.1 103.3,163.5 103.5,162.9 103.8,162.2 104,161.6 104.3,160.9 104.5,160.3 104.8,159.6 105,158.9 105.3,158.2 105.5,157.5 105.8,156.7 106,156 106.3,155.2 106.5,154.5 106.8,153.7 107,152.9 107.3,152.1 107.5,151.3 107.8,150.4 108,149.6 108.3,148.7 108.5,147.9 108.8,147 109,146.1 109.3,145.2 109.5,144.3 109.8,143.3 110,142.4 110.3,141.4 110.5,140.5 110.8,139.5 111,138.5 111.3,137.5 111.5,136.5 111.8,135.4 112,134.4 112.3,133.3 112.5,132.3 112.8,131.2 113,130.1 113.3,129 113.5,127.9 113.8,126.7 114,125.6 114.3,124.4 114.5,123.3 114.8,122.1 115,120.9 115.3,119.7 115.5,118.5 115.8,117.2 116,116 116.3,114.7 116.5,113.5 116.8,112.2 117,110.9 117.3,109.6 117.5,108.3 117.8,106.9 118,105.6 118.3,104.2 118.5,102.9 118.8,101.5 119,100.1 119.3,98.7 119.5,97.3 119.8,95.8 120,94.4 120.3,92.9 120.5,91.5 120.8,90 121,88.5 121.3,87 121.5,85.5 121.8,83.9 122,82.4 122.3,80.8 122.5,79.3 122.8,77.7 123,76.1 123.3,74.5 123.5,72.9 123.8,71.2 124,69.6 124.3,67.9 124.5,66.3 124.8,64.6 125,62.9 125.3,61.2 125.5,59.5 125.8,57.7 126,56 126.3,54.2 126.5,52.5 126.8,50.7 127,48.9 127.3,47.1 127.5,45.3 127.8,43.4 128,41.6 128.3,39.7 128.5,37.9 128.8,36 129,34.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="52,26.4 58.2,35.7 48.3,37" fill="currentColor"/>
  <polygon points="130,26.4 133.7,37 123.8,35.7" fill="currentColor"/>
  <circle cx="56" cy="56" r="4" fill="currentColor"/>
  <circle cx="126" cy="56" r="4" fill="currentColor"/>
  <circle cx="116" cy="116" r="4" fill="currentColor"/>
  <text x="56" y="79" font-size="13" fill="currentColor" text-anchor="middle">(−2, 0)</text>
  <text x="137.2" y="44.8" font-size="13" fill="currentColor" text-anchor="start">(1/3, 0)</text>
  <text x="127.2" y="136.2" font-size="13" fill="currentColor" text-anchor="start">(0, −2)</text>
</svg>
</div>


## Rewriting quadratics in standard form

In the example above, the quadratic was easily solved by factoring. However,
there are many quadratics that cannot be factored. We can solve these
quadratics by first rewriting them in standard form.

{{< callout type="info" >}}
**How to:** given a quadratic function, find the $x$-intercepts by rewriting
in standard form.

1. Substitute $a$ and $b$ into $h=-\tfrac{b}{2a}$.
2. Substitute $x=h$ into the general form of the quadratic function to find
   $k$.
3. Rewrite the quadratic in standard form using $h$ and $k$.
4. Solve for when the output of the function will be zero to find the
   $x$-intercepts.
{{< /callout >}}

**Example.** Find the $x$-intercepts of the quadratic function
$f(x)=2x^2+4x-4$.

**Solution.** We begin by solving for when the output will be zero.

$$0=2x^2+4x-4$$

Because the quadratic is not easily factorable in this case, we solve for
the intercepts by first rewriting the quadratic in standard form.

$$f(x)=a(x-h)^2+k$$

We know that $a=2$. Then we solve for $h$ and $k$.

$$
\begin{array}{lrcl}
& h &=& -\tfrac{b}{2a} \\[4pt]
& &=& -\tfrac{4}{2(2)} \\[4pt]
& &=& -1
\end{array}
\qquad\qquad
\begin{array}{lrcl}
& k &=& f(-1) \\[4pt]
& &=& 2(-1)^2+4(-1)-4 \\[4pt]
& &=& -6
\end{array}
$$

So now we can rewrite in standard form.

$$f(x)=2(x+1)^2-6$$

We can now solve for when the output will be zero.

$$
\begin{array}{lrcl}
& 0 &=& 2(x+1)^2-6 \\[4pt]
& 6 &=& 2(x+1)^2 \\[4pt]
& 3 &=& (x+1)^2 \\[4pt]
& x+1 &=& \pm\sqrt{3} \\[4pt]
& x &=& -1\pm\sqrt{3}
\end{array}
$$

The graph has $x$-intercepts at $(-1-\sqrt{3},0)$ and $(-1+\sqrt{3},0)$.

**Analysis.** We can check our work by graphing the given function on a
graphing utility and observing the $x$-intercepts, shown below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals 2x squared + 4x - 4, an upward-opening parabola with vertex at (-1, -6), crossing the x-axis at approximately (-2.732, 0) and (0.732, 0).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":18,"tickLabels":true,"xTickStep":2,"yTickStep":2,"quadratics":[{"a":2,"b":4,"c":-4}],"points":[{"at":[-2.732,0],"label":"(-2.732, 0)","labelSide":"nw"},{"at":[0.732,0],"label":"(0.732, 0)","labelSide":"ne"}]}'>
<svg role="img" aria-label="The graph of f of x equals 2x squared + 4x - 4, an upward-opening parabola with vertex at (-1, -6), crossing the x-axis at approximately (-2.732, 0) and (0.732, 0)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 268" width="268" height="268" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="242" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="242" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="242" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="242" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="242" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="242" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="242" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="242" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="188" y1="242" x2="188" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="242" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="242" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="242" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="242" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="242" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="242" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="188" x2="242" y2="188" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="242" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="242" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="242" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="242" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="242" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="242" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="242" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="134" x2="244" y2="134" stroke="currentColor" stroke-width="1"/>
  <line x1="134" y1="24" x2="134" y2="244" stroke="currentColor" stroke-width="1"/>
  <polygon points="254,134 244,139 244,129" fill="currentColor"/>
  <polygon points="134,14 139,24 129,24" fill="currentColor"/>
  <polygon points="14,134 24,129 24,139" fill="currentColor"/>
  <polygon points="134,254 129,244 139,244" fill="currentColor"/>
  <text x="252" y="126" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="142" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="131" x2="26" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="149" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="62" y1="131" x2="62" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="149" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="98" y1="131" x2="98" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="149" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="170" y1="131" x2="170" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="149" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="131" x2="206" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="149" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="242" y1="131" x2="242" y2="137" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="149" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="131" y1="242" x2="137" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="246" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="131" y1="206" x2="137" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="210" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="131" y1="170" x2="137" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="174" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="131" y1="98" x2="137" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="131" y1="62" x2="137" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="66" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="131" y1="26" x2="137" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="72.8,34.8 73,36.6 73.3,38.9 73.5,41.3 73.8,43.7 74,46 74.3,48.3 74.5,50.6 74.8,52.9 75,55.2 75.3,57.5 75.5,59.8 75.8,62 76,64.2 76.3,66.4 76.5,68.6 76.8,70.8 77,73 77.3,75.2 77.5,77.3 77.8,79.4 78,81.6 78.3,83.7 78.5,85.8 78.8,87.8 79,89.9 79.3,91.9 79.5,94 79.8,96 80,98 80.3,100 80.5,102 80.8,103.9 81,105.9 81.3,107.8 81.5,109.8 81.8,111.7 82,113.6 82.3,115.4 82.5,117.3 82.8,119.2 83,121 83.3,122.8 83.5,124.6 83.8,126.4 84,128.2 84.3,130 84.5,131.8 84.8,133.5 85,135.2 85.3,136.9 85.5,138.6 85.8,140.3 86,142 86.3,143.7 86.5,145.3 86.8,146.9 87,148.6 87.3,150.2 87.5,151.8 87.8,153.3 88,154.9 88.3,156.4 88.5,158 88.8,159.5 89,161 89.3,162.5 89.5,164 89.8,165.4 90,166.9 90.3,168.3 90.5,169.8 90.8,171.2 91,172.6 91.3,173.9 91.5,175.3 91.8,176.7 92,178 92.3,179.3 92.5,180.6 92.8,181.9 93,183.2 93.3,184.5 93.5,185.8 93.8,187 94,188.2 94.3,189.4 94.5,190.6 94.8,191.8 95,193 95.3,194.2 95.5,195.3 95.8,196.4 96,197.6 96.3,198.7 96.5,199.8 96.8,200.8 97,201.9 97.3,202.9 97.5,204 97.8,205 98,206 98.3,207 98.5,208 98.8,208.9 99,209.9 99.3,210.8 99.5,211.8 99.8,212.7 100,213.6 100.3,214.4 100.5,215.3 100.8,216.2 101,217 101.3,217.8 101.5,218.6 101.8,219.4 102,220.2 102.3,221 102.5,221.8 102.8,222.5 103,223.2 103.3,223.9 103.5,224.6 103.8,225.3 104,226 104.3,226.7 104.5,227.3 104.8,227.9 105,228.6 105.3,229.2 105.5,229.8 105.8,230.3 106,230.9 106.3,231.4 106.5,232 106.8,232.5 107,233 107.3,233.5 107.5,234 107.8,234.4 108,234.9 108.3,235.3 108.5,235.8 108.8,236.2 109,236.6 109.3,236.9 109.5,237.3 109.8,237.7 110,238 110.3,238.3 110.5,238.6 110.8,238.9 111,239.2 111.3,239.5 111.5,239.8 111.8,240 112,240.2 112.3,240.4 112.5,240.6 112.8,240.8 113,241 113.3,241.2 113.5,241.3 113.8,241.4 114,241.6 114.3,241.7 114.5,241.8 114.8,241.8 115,241.9 115.3,241.9 115.5,242 115.8,242 116,242 116.3,242 116.5,242 116.8,241.9 117,241.9 117.3,241.8 117.5,241.8 117.8,241.7 118,241.6 118.3,241.4 118.5,241.3 118.8,241.2 119,241 119.3,240.8 119.5,240.6 119.8,240.4 120,240.2 120.3,240 120.5,239.8 120.8,239.5 121,239.2 121.3,238.9 121.5,238.6 121.8,238.3 122,238 122.3,237.7 122.5,237.3 122.8,236.9 123,236.6 123.3,236.2 123.5,235.8 123.8,235.3 124,234.9 124.3,234.4 124.5,234 124.8,233.5 125,233 125.3,232.5 125.5,232 125.8,231.4 126,230.9 126.3,230.3 126.5,229.8 126.8,229.2 127,228.6 127.3,227.9 127.5,227.3 127.8,226.7 128,226 128.3,225.3 128.5,224.6 128.8,223.9 129,223.2 129.3,222.5 129.5,221.8 129.8,221 130,220.2 130.3,219.4 130.5,218.6 130.8,217.8 131,217 131.3,216.2 131.5,215.3 131.8,214.4 132,213.6 132.3,212.7 132.5,211.8 132.8,210.8 133,209.9 133.3,208.9 133.5,208 133.8,207 134,206 134.3,205 134.5,204 134.8,202.9 135,201.9 135.3,200.8 135.5,199.8 135.8,198.7 136,197.6 136.3,196.4 136.5,195.3 136.8,194.2 137,193 137.3,191.8 137.5,190.6 137.8,189.4 138,188.2 138.3,187 138.5,185.8 138.8,184.5 139,183.2 139.3,181.9 139.5,180.6 139.8,179.3 140,178 140.3,176.7 140.5,175.3 140.8,173.9 141,172.6 141.3,171.2 141.5,169.7 141.8,168.3 142,166.9 142.3,165.4 142.5,164 142.8,162.5 143,161 143.3,159.5 143.5,158 143.8,156.4 144,154.9 144.3,153.3 144.5,151.8 144.8,150.2 145,148.6 145.3,146.9 145.5,145.3 145.8,143.7 146,142 146.3,140.3 146.5,138.6 146.8,136.9 147,135.2 147.3,133.5 147.5,131.8 147.8,130 148,128.2 148.3,126.4 148.5,124.6 148.8,122.8 149,121 149.3,119.2 149.5,117.3 149.8,115.4 150,113.6 150.3,111.7 150.5,109.7 150.8,107.8 151,105.9 151.3,103.9 151.5,102 151.8,100 152,98 152.3,96 152.5,94 152.8,91.9 153,89.9 153.3,87.8 153.5,85.8 153.8,83.7 154,81.6 154.3,79.4 154.5,77.3 154.8,75.2 155,73 155.3,70.8 155.5,68.6 155.8,66.4 156,64.2 156.3,62 156.5,59.8 156.8,57.5 157,55.2 157.3,52.9 157.5,50.6 157.8,48.3 158,46 158.3,43.7 158.5,41.3 158.8,38.9 159,36.6 159.2,34.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="72,26.9 78,36.3 68.1,37.3" fill="currentColor"/>
  <polygon points="160,26.9 163.9,37.3 154,36.3" fill="currentColor"/>
  <circle cx="84.8" cy="134" r="4" fill="currentColor"/>
  <circle cx="147.2" cy="134" r="4" fill="currentColor"/>
  <text x="84.8" y="157" font-size="13" fill="currentColor" text-anchor="middle">(−2.732, 0)</text>
  <text x="158.4" y="122.8" font-size="13" fill="currentColor" text-anchor="start">(0.732, 0)</text>
</svg>
</div>


{{< fillin
  question="Earlier, we found the standard and general form for the function $g(x)=13+x^2-6x$. Now find its y-intercept. Enter your answer as an ordered pair."
  answer="(0,13)"
  answerDisplay="$(0,13)$"
  hint="Evaluate $g(0)$."
>}}

{{< multiplechoice
  question="How many real x-intercepts does that same parabola, $g(x)=x^2-6x+13$, have?"
  answer="0"
  hint="Rewrite in standard form, $(x-3)^2+4$, and check the sign of the constant term $k$ against the direction the parabola opens."
>}}
0
1
2
{{< /multiplechoice >}}

**Example.** Solve $x^2+x+2=0$.

**Solution.** Let's begin by writing the quadratic formula:
$x=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}$.

When applying the **quadratic formula**, we identify the coefficients $a$,
$b$, and $c$. For the equation $x^2+x+2=0$, we have $a=1$, $b=1$, and $c=2$.
Substituting these values into the formula we have:

$$
\begin{array}{lrcl}
& x &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a} \\[4pt]
& &=& \tfrac{-1\pm\sqrt{1^2-4\cdot1\cdot(2)}}{2\cdot1} \\[4pt]
& &=& \tfrac{-1\pm\sqrt{1-8}}{2} \\[4pt]
& &=& \tfrac{-1\pm\sqrt{-7}}{2} \\[4pt]
& &=& \tfrac{-1\pm i\sqrt{7}}{2}
\end{array}
$$

The solutions to the equation are $\tfrac{-1+i\sqrt{7}}{2}$ and
$\tfrac{-1-i\sqrt{7}}{2}$, or $-\tfrac{1}{2}+\tfrac{\sqrt{7}}{2}i$ and
$-\tfrac{1}{2}-\tfrac{\sqrt{7}}{2}i$.

**Example.** A ball is thrown upward from the top of a 40 foot high building
at a speed of 80 feet per second. The ball's height above ground can be
modeled by the equation $H(t)=-16t^2+80t+40$.

1. When does the ball reach the maximum height?
2. What is the maximum height of the ball?
3. When does the ball hit the ground?

**Solution.**

1. The ball reaches the maximum height at the vertex of the parabola.

   $$
   \begin{array}{lrcl}
   & h &=& -\tfrac{80}{2(-16)} \\[4pt]
   & &=& \tfrac{80}{32} \\[4pt]
   & &=& \tfrac{5}{2} \\[4pt]
   & &=& 2.5
   \end{array}
   $$

   The ball reaches a maximum height after 2.5 seconds.

2. To find the maximum height, find the $y$-coordinate of the vertex of the
   parabola.

   $$
   \begin{array}{lrcl}
   & k &=& H\!\left(-\tfrac{b}{2a}\right) \\[4pt]
   & &=& H(2.5) \\[4pt]
   & &=& -16(2.5)^2+80(2.5)+40 \\[4pt]
   & &=& 140
   \end{array}
   $$

   The ball reaches a maximum height of 140 feet.

3. To find when the ball hits the ground, we need to determine when the
   height is zero, $H(t)=0$.

   We use the quadratic formula.

   $$
   \begin{array}{lrcl}
   & t &=& \tfrac{-80\pm\sqrt{80^2-4(-16)(40)}}{2(-16)} \\[4pt]
   & &=& \tfrac{-80\pm\sqrt{8{,}960}}{-32}
   \end{array}
   $$

   Because the square root does not simplify nicely, we can use a
   calculator to approximate the values of the solutions.

   $$
   t=\tfrac{-80-\sqrt{8{,}960}}{-32}\approx5.458
   \qquad\text{or}\qquad
   t=\tfrac{-80+\sqrt{8{,}960}}{-32}\approx-0.458
   $$

   The second answer is outside the reasonable domain of our model, so we
   conclude the ball will hit the ground after about 5.458 seconds. See the
   graph below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of H of t equals -16t squared + 80t + 40, the height of the ball above the ground. An upward arrow marks the vertex at (2.5, 140), the maximum height, and the curve exits the grid at about t = 5.458, where the ball hits the ground.","xMin":0,"xMax":6,"yMin":0,"yMax":150,"xUnit":38,"yUnit":1.5,"tickLabels":true,"xTickStep":1,"yTickStep":50,"xLabel":"Time (s)","yLabel":"Height (ft)","quadratics":[{"a":-16,"b":80,"c":40,"from":0,"to":5.458,"arrows":"end"}],"points":[{"at":[2.5,140],"label":"(2.5, 140)","labelSide":"n"}]}'>
<svg role="img" aria-label="The graph of H of t equals -16t squared + 80t + 40, the height of the ball above the ground. An upward arrow marks the vertex at (2.5, 140), the maximum height, and the curve exits the grid at about t = 5.458, where the ball hits the ground." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 277" width="280" height="277" font-family="Helvetica, Arial, sans-serif">
  <line x1="64" y1="251" x2="64" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="102" y1="251" x2="102" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="140" y1="251" x2="140" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="178" y1="251" x2="178" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="216" y1="251" x2="216" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="254" y1="251" x2="254" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="249.5" x2="254" y2="249.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="248" x2="254" y2="248" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246.5" x2="254" y2="246.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="245" x2="254" y2="245" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="243.5" x2="254" y2="243.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="254" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="240.5" x2="254" y2="240.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="239" x2="254" y2="239" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="237.5" x2="254" y2="237.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="236" x2="254" y2="236" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="234.5" x2="254" y2="234.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="233" x2="254" y2="233" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="231.5" x2="254" y2="231.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="254" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="228.5" x2="254" y2="228.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="227" x2="254" y2="227" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="225.5" x2="254" y2="225.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="254" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="222.5" x2="254" y2="222.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="221" x2="254" y2="221" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="219.5" x2="254" y2="219.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="254" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="216.5" x2="254" y2="216.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="215" x2="254" y2="215" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="213.5" x2="254" y2="213.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="212" x2="254" y2="212" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="210.5" x2="254" y2="210.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="209" x2="254" y2="209" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="207.5" x2="254" y2="207.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="254" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="204.5" x2="254" y2="204.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="203" x2="254" y2="203" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="201.5" x2="254" y2="201.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="200" x2="254" y2="200" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="198.5" x2="254" y2="198.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="197" x2="254" y2="197" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="195.5" x2="254" y2="195.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="254" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="192.5" x2="254" y2="192.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="191" x2="254" y2="191" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="189.5" x2="254" y2="189.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="188" x2="254" y2="188" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186.5" x2="254" y2="186.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="185" x2="254" y2="185" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="183.5" x2="254" y2="183.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="254" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180.5" x2="254" y2="180.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="179" x2="254" y2="179" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="177.5" x2="254" y2="177.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="176" x2="254" y2="176" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="174.5" x2="254" y2="174.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="173" x2="254" y2="173" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="171.5" x2="254" y2="171.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="254" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="168.5" x2="254" y2="168.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="167" x2="254" y2="167" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="165.5" x2="254" y2="165.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="164" x2="254" y2="164" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="162.5" x2="254" y2="162.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="161" x2="254" y2="161" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="159.5" x2="254" y2="159.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="254" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156.5" x2="254" y2="156.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="155" x2="254" y2="155" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="153.5" x2="254" y2="153.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="254" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="150.5" x2="254" y2="150.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="149" x2="254" y2="149" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="147.5" x2="254" y2="147.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="254" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="144.5" x2="254" y2="144.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="143" x2="254" y2="143" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="141.5" x2="254" y2="141.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="140" x2="254" y2="140" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="138.5" x2="254" y2="138.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="137" x2="254" y2="137" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="135.5" x2="254" y2="135.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="254" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="132.5" x2="254" y2="132.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="131" x2="254" y2="131" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="129.5" x2="254" y2="129.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="128" x2="254" y2="128" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126.5" x2="254" y2="126.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="125" x2="254" y2="125" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="123.5" x2="254" y2="123.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="254" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="120.5" x2="254" y2="120.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="119" x2="254" y2="119" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="117.5" x2="254" y2="117.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="254" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114.5" x2="254" y2="114.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="113" x2="254" y2="113" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="111.5" x2="254" y2="111.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="110" x2="254" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="108.5" x2="254" y2="108.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="107" x2="254" y2="107" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="105.5" x2="254" y2="105.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="254" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="102.5" x2="254" y2="102.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="101" x2="254" y2="101" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="99.5" x2="254" y2="99.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="254" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="96.5" x2="254" y2="96.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="95" x2="254" y2="95" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="93.5" x2="254" y2="93.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="254" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90.5" x2="254" y2="90.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="89" x2="254" y2="89" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="87.5" x2="254" y2="87.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="254" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="84.5" x2="254" y2="84.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="83" x2="254" y2="83" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="81.5" x2="254" y2="81.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="254" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78.5" x2="254" y2="78.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="77" x2="254" y2="77" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="75.5" x2="254" y2="75.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="254" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="72.5" x2="254" y2="72.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="71" x2="254" y2="71" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="69.5" x2="254" y2="69.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="68" x2="254" y2="68" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66.5" x2="254" y2="66.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="65" x2="254" y2="65" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="63.5" x2="254" y2="63.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="254" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="60.5" x2="254" y2="60.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="59" x2="254" y2="59" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="57.5" x2="254" y2="57.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="56" x2="254" y2="56" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="54.5" x2="254" y2="54.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="53" x2="254" y2="53" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="51.5" x2="254" y2="51.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="254" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48.5" x2="254" y2="48.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="47" x2="254" y2="47" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="45.5" x2="254" y2="45.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="254" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="42.5" x2="254" y2="42.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="41" x2="254" y2="41" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="39.5" x2="254" y2="39.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="38" x2="254" y2="38" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="36.5" x2="254" y2="36.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="35" x2="254" y2="35" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="33.5" x2="254" y2="33.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="32" x2="254" y2="32" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="30.5" x2="254" y2="30.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="29" x2="254" y2="29" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="27.5" x2="254" y2="27.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="254" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="251" x2="256" y2="251" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="251" stroke="currentColor" stroke-width="1"/>
  <polygon points="266,251 256,256 256,246" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="264" y="243" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">Time (s)</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">Height (ft)</text>
  <line x1="64" y1="248" x2="64" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="266" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="102" y1="248" x2="102" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="102" y="266" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="140" y1="248" x2="140" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="266" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="178" y1="248" x2="178" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="178" y="266" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="216" y1="248" x2="216" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="216" y="266" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="254" y1="248" x2="254" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="254" y="266" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="23" y1="176" x2="29" y2="176" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="180" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="23" y1="101" x2="29" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="105" font-size="11" fill="currentColor" text-anchor="end">100</text>
  <line x1="23" y1="26" x2="29" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="30" font-size="11" fill="currentColor" text-anchor="end">150</text>
  <polyline points="26,191 26.2,190.2 26.5,189.4 26.7,188.6 27,187.9 27.2,187.1 27.5,186.3 27.7,185.5 28,184.8 28.2,184 28.5,183.2 28.7,182.4 29,181.7 29.2,180.9 29.5,180.2 29.7,179.4 30,178.6 30.2,177.9 30.5,177.1 30.7,176.4 31,175.6 31.2,174.9 31.5,174.1 31.7,173.4 32,172.7 32.2,171.9 32.5,171.2 32.7,170.5 33,169.7 33.2,169 33.5,168.3 33.7,167.5 34,166.8 34.2,166.1 34.5,165.4 34.7,164.7 35,163.9 35.2,163.2 35.5,162.5 35.7,161.8 36,161.1 36.2,160.4 36.5,159.7 36.7,159 37,158.3 37.2,157.6 37.5,156.9 37.7,156.2 38,155.5 38.2,154.8 38.5,154.1 38.7,153.5 39,152.8 39.2,152.1 39.5,151.4 39.7,150.7 40,150.1 40.2,149.4 40.5,148.7 40.7,148.1 41,147.4 41.2,146.7 41.5,146.1 41.7,145.4 42,144.7 42.2,144.1 42.5,143.4 42.7,142.8 43,142.1 43.2,141.5 43.5,140.8 43.7,140.2 44,139.6 44.2,138.9 44.5,138.3 44.7,137.7 45,137 45.2,136.4 45.5,135.8 45.7,135.1 46,134.5 46.2,133.9 46.5,133.3 46.7,132.7 47,132 47.2,131.4 47.5,130.8 47.7,130.2 48,129.6 48.2,129 48.5,128.4 48.7,127.8 49,127.2 49.2,126.6 49.5,126 49.7,125.4 50,124.8 50.2,124.2 50.5,123.6 50.7,123 51,122.5 51.2,121.9 51.5,121.3 51.7,120.7 52,120.2 52.2,119.6 52.5,119 52.7,118.4 53,117.9 53.2,117.3 53.5,116.8 53.7,116.2 54,115.6 54.2,115.1 54.5,114.5 54.7,114 55,113.4 55.2,112.9 55.5,112.3 55.7,111.8 56,111.3 56.2,110.7 56.5,110.2 56.7,109.6 57,109.1 57.2,108.6 57.5,108 57.7,107.5 58,107 58.2,106.5 58.5,106 58.7,105.4 59,104.9 59.2,104.4 59.5,103.9 59.7,103.4 60,102.9 60.2,102.4 60.5,101.9 60.7,101.4 61,100.9 61.2,100.4 61.5,99.9 61.7,99.4 62,98.9 62.2,98.4 62.5,97.9 62.7,97.4 63,96.9 63.2,96.5 63.5,96 63.7,95.5 64,95 64.2,94.6 64.5,94.1 64.7,93.6 65,93.2 65.2,92.7 65.5,92.2 65.7,91.8 66,91.3 66.2,90.9 66.5,90.4 66.7,89.9 67,89.5 67.2,89.1 67.5,88.6 67.7,88.2 68,87.7 68.2,87.3 68.5,86.8 68.7,86.4 69,86 69.2,85.5 69.5,85.1 69.7,84.7 70,84.3 70.2,83.8 70.5,83.4 70.7,83 71,82.6 71.2,82.2 71.5,81.8 71.7,81.3 72,80.9 72.2,80.5 72.5,80.1 72.7,79.7 73,79.3 73.2,78.9 73.5,78.5 73.7,78.1 74,77.7 74.2,77.4 74.5,77 74.7,76.6 75,76.2 75.2,75.8 75.5,75.4 75.7,75.1 76,74.7 76.2,74.3 76.5,73.9 76.7,73.6 77,73.2 77.2,72.8 77.5,72.5 77.7,72.1 78,71.8 78.2,71.4 78.5,71.1 78.7,70.7 79,70.4 79.2,70 79.5,69.7 79.7,69.3 80,69 80.2,68.6 80.5,68.3 80.7,68 81,67.6 81.2,67.3 81.5,67 81.7,66.6 82,66.3 82.2,66 82.5,65.7 82.7,65.4 83,65 83.2,64.7 83.5,64.4 83.7,64.1 84,63.8 84.2,63.5 84.5,63.2 84.7,62.9 85,62.6 85.2,62.3 85.5,62 85.7,61.7 86,61.4 86.2,61.1 86.5,60.8 86.7,60.5 87,60.2 87.2,60 87.5,59.7 87.7,59.4 88,59.1 88.2,58.9 88.5,58.6 88.7,58.3 89,58.1 89.2,57.8 89.5,57.5 89.7,57.3 90,57 90.2,56.7 90.5,56.5 90.7,56.2 91,56 91.2,55.7 91.5,55.5 91.7,55.2 92,55 92.2,54.8 92.5,54.5 92.7,54.3 93,54.1 93.2,53.8 93.5,53.6 93.7,53.4 94,53.1 94.2,52.9 94.5,52.7 94.7,52.5 95,52.3 95.2,52 95.5,51.8 95.7,51.6 96,51.4 96.2,51.2 96.5,51 96.7,50.8 97,50.6 97.2,50.4 97.5,50.2 97.7,50 98,49.8 98.2,49.6 98.5,49.4 98.7,49.3 99,49.1 99.2,48.9 99.5,48.7 99.7,48.5 100,48.4 100.2,48.2 100.5,48 100.7,47.8 101,47.7 101.2,47.5 101.5,47.3 101.7,47.2 102,47 102.2,46.9 102.5,46.7 102.7,46.6 103,46.4 103.2,46.3 103.5,46.1 103.7,46 104,45.8 104.2,45.7 104.5,45.5 104.7,45.4 105,45.3 105.2,45.1 105.5,45 105.7,44.9 106,44.8 106.2,44.6 106.5,44.5 106.7,44.4 107,44.3 107.2,44.2 107.5,44 107.7,43.9 108,43.8 108.2,43.7 108.5,43.6 108.7,43.5 109,43.4 109.2,43.3 109.5,43.2 109.7,43.1 110,43 110.2,42.9 110.5,42.8 110.7,42.8 111,42.7 111.2,42.6 111.5,42.5 111.7,42.4 112,42.4 112.2,42.3 112.5,42.2 112.7,42.1 113,42.1 113.2,42 113.5,41.9 113.7,41.9 114,41.8 114.2,41.8 114.5,41.7 114.7,41.7 115,41.6 115.2,41.6 115.5,41.5 115.7,41.5 116,41.4 116.2,41.4 116.5,41.3 116.7,41.3 117,41.3 117.2,41.2 117.5,41.2 117.7,41.2 118,41.2 118.2,41.1 118.5,41.1 118.7,41.1 119,41.1 119.2,41.1 119.5,41 119.7,41 120,41 120.2,41 120.5,41 120.7,41 121,41 121.2,41 121.5,41 121.7,41 122,41 122.2,41 122.5,41 122.7,41 123,41.1 123.2,41.1 123.5,41.1 123.7,41.1 124,41.1 124.2,41.2 124.5,41.2 124.7,41.2 125,41.3 125.2,41.3 125.5,41.3 125.7,41.4 126,41.4 126.2,41.5 126.5,41.5 126.7,41.5 127,41.6 127.2,41.6 127.5,41.7 127.7,41.7 128,41.8 128.2,41.9 128.5,41.9 128.7,42 129,42.1 129.2,42.1 129.5,42.2 129.7,42.3 130,42.3 130.2,42.4 130.5,42.5 130.7,42.6 131,42.6 131.2,42.7 131.5,42.8 131.7,42.9 132,43 132.2,43.1 132.5,43.2 132.7,43.3 133,43.4 133.2,43.5 133.5,43.6 133.7,43.7 134,43.8 134.2,43.9 134.4,44 134.7,44.1 134.9,44.2 135.2,44.4 135.4,44.5 135.7,44.6 135.9,44.7 136.2,44.8 136.4,45 136.7,45.1 136.9,45.2 137.2,45.4 137.4,45.5 137.7,45.6 137.9,45.8 138.2,45.9 138.4,46.1 138.7,46.2 138.9,46.4 139.2,46.5 139.4,46.7 139.7,46.8 139.9,47 140.2,47.1 140.4,47.3 140.7,47.4 140.9,47.6 141.2,47.8 141.4,47.9 141.7,48.1 141.9,48.3 142.2,48.5 142.4,48.6 142.7,48.8 142.9,49 143.2,49.2 143.4,49.4 143.7,49.6 143.9,49.8 144.2,49.9 144.4,50.1 144.7,50.3 144.9,50.5 145.2,50.7 145.4,50.9 145.7,51.1 145.9,51.3 146.2,51.5 146.4,51.8 146.7,52 146.9,52.2 147.2,52.4 147.4,52.6 147.7,52.8 147.9,53.1 148.2,53.3 148.4,53.5 148.7,53.7 148.9,54 149.2,54.2 149.4,54.4 149.7,54.7 149.9,54.9 150.2,55.2 150.4,55.4 150.7,55.7 150.9,55.9 151.2,56.2 151.4,56.4 151.7,56.7 151.9,56.9 152.2,57.2 152.4,57.4 152.7,57.7 152.9,58 153.2,58.2 153.4,58.5 153.7,58.8 153.9,59 154.2,59.3 154.4,59.6 154.7,59.9 154.9,60.1 155.2,60.4 155.4,60.7 155.7,61 155.9,61.3 156.2,61.6 156.4,61.9 156.7,62.2 156.9,62.5 157.2,62.8 157.4,63.1 157.7,63.4 157.9,63.7 158.2,64 158.4,64.3 158.7,64.6 158.9,64.9 159.2,65.2 159.4,65.6 159.7,65.9 159.9,66.2 160.2,66.5 160.4,66.9 160.7,67.2 160.9,67.5 161.2,67.8 161.4,68.2 161.7,68.5 161.9,68.9 162.2,69.2 162.4,69.5 162.7,69.9 162.9,70.2 163.2,70.6 163.4,70.9 163.7,71.3 163.9,71.6 164.2,72 164.4,72.4 164.7,72.7 164.9,73.1 165.2,73.4 165.4,73.8 165.7,74.2 165.9,74.6 166.2,74.9 166.4,75.3 166.7,75.7 166.9,76.1 167.2,76.5 167.4,76.8 167.7,77.2 167.9,77.6 168.2,78 168.4,78.4 168.7,78.8 168.9,79.2 169.2,79.6 169.4,80 169.7,80.4 169.9,80.8 170.2,81.2 170.4,81.6 170.7,82 170.9,82.4 171.2,82.9 171.4,83.3 171.7,83.7 171.9,84.1 172.2,84.5 172.4,85 172.7,85.4 172.9,85.8 173.2,86.3 173.4,86.7 173.7,87.1 173.9,87.6 174.2,88 174.4,88.4 174.7,88.9 174.9,89.3 175.2,89.8 175.4,90.2 175.7,90.7 175.9,91.2 176.2,91.6 176.4,92.1 176.7,92.5 176.9,93 177.2,93.5 177.4,93.9 177.7,94.4 177.9,94.9 178.2,95.3 178.4,95.8 178.7,96.3 178.9,96.8 179.2,97.3 179.4,97.7 179.7,98.2 179.9,98.7 180.2,99.2 180.4,99.7 180.7,100.2 180.9,100.7 181.2,101.2 181.4,101.7 181.7,102.2 181.9,102.7 182.2,103.2 182.4,103.7 182.7,104.2 182.9,104.7 183.2,105.3 183.4,105.8 183.7,106.3 183.9,106.8 184.2,107.3 184.4,107.9 184.7,108.4 184.9,108.9 185.2,109.5 185.4,110 185.7,110.5 185.9,111.1 186.2,111.6 186.4,112.1 186.7,112.7 186.9,113.2 187.2,113.8 187.4,114.3 187.7,114.9 187.9,115.4 188.2,116 188.4,116.6 188.7,117.1 188.9,117.7 189.2,118.2 189.4,118.8 189.7,119.4 189.9,120 190.2,120.5 190.4,121.1 190.7,121.7 190.9,122.3 191.2,122.8 191.4,123.4 191.7,124 191.9,124.6 192.2,125.2 192.4,125.8 192.7,126.4 192.9,127 193.2,127.6 193.4,128.2 193.7,128.8 193.9,129.4 194.2,130 194.4,130.6 194.7,131.2 194.9,131.8 195.2,132.4 195.4,133.1 195.7,133.7 195.9,134.3 196.2,134.9 196.4,135.5 196.7,136.2 196.9,136.8 197.2,137.4 197.4,138.1 197.7,138.7 197.9,139.3 198.2,140 198.4,140.6 198.7,141.3 198.9,141.9 199.2,142.6 199.4,143.2 199.7,143.9 199.9,144.5 200.2,145.2 200.4,145.8 200.7,146.5 200.9,147.2 201.2,147.8 201.4,148.5 201.7,149.2 201.9,149.8 202.2,150.5 202.4,151.2 202.7,151.9 202.9,152.5 203.2,153.2 203.4,153.9 203.7,154.6 203.9,155.3 204.2,156 204.4,156.7 204.7,157.3 204.9,158 205.2,158.7 205.4,159.4 205.7,160.1 205.9,160.8 206.2,161.6 206.4,162.3 206.7,163 206.9,163.7 207.2,164.4 207.4,165.1 207.7,165.8 207.9,166.6 208.2,167.3 208.4,168 208.7,168.7 208.9,169.5 209.2,170.2 209.4,170.9 209.7,171.7 209.9,172.4 210.2,173.1 210.4,173.9 210.7,174.6 210.9,175.4 211.2,176.1 211.4,176.9 211.7,177.6 211.9,178.4 212.2,179.1 212.4,179.9 212.7,180.6 212.9,181.4 213.2,182.2 213.4,182.9 213.7,183.7 213.9,184.5 214.2,185.3 214.4,186 214.7,186.8 214.9,187.6 215.2,188.4 215.4,189.1 215.7,189.9 215.9,190.7 216.2,191.5 216.4,192.3 216.7,193.1 216.9,193.9 217.2,194.7 217.4,195.5 217.7,196.3 217.9,197.1 218.2,197.9 218.4,198.7 218.7,199.5 218.9,200.3 219.2,201.1 219.4,202 219.7,202.8 219.9,203.6 220.2,204.4 220.4,205.2 220.7,206.1 220.9,206.9 221.2,207.7 221.4,208.6 221.7,209.4 221.9,210.2 222.2,211.1 222.4,211.9 222.7,212.8 222.9,213.6 223.2,214.5 223.4,215.3 223.7,216.2 223.9,217 224.2,217.9 224.4,218.7 224.7,219.6 224.9,220.4 225.2,221.3 225.4,222.2 225.7,223 225.9,223.9 226.2,224.8 226.4,225.7 226.7,226.5 226.9,227.4 227.2,228.3 227.4,229.2 227.7,230.1 227.9,231 228.2,231.8 228.4,232.7 228.7,233.6 228.9,234.5 229.2,235.4 229.4,236.3 229.7,237.2 229.9,238.1 230.2,239 230.4,239.9 230.7,240.8 230.9,241.8 231.2,242.7 231.3,243.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="233.4,251 226,242.6 235.6,240" fill="currentColor"/>
  <circle cx="121" cy="41" r="4" fill="currentColor"/>
  <text x="121" y="27" font-size="13" fill="currentColor" text-anchor="middle">(2.5, 140)</text>
</svg>
</div>

{{< callout type="info" >}}
  **Source note.** OpenStax's printed Figure 16 here (module m49337) labels
  the vertical axis "$t$" and plots the height values $50$, $100$, $150$ on
  it, and labels the horizontal axis "$H$" and plots the time values $1$
  through $6$ on it — the reverse of the function $H(t)$ it illustrates —
  and carries a stray "$(x$ from $-1$ to $6)$" annotation left over from a
  different window setting. Since $H(t)$ is height as a function of time,
  time belongs on the horizontal axis and height on the vertical axis. This
  page draws the axes the right way around, time on the horizontal axis and
  height on the vertical axis, and drops the stray annotation; the
  mathematics is unchanged.
{{< /callout >}}

{{< fillin
  question="A rock is thrown upward from the top of a 112-foot high cliff overlooking the ocean at a speed of 96 feet per second. The rock's height above the ocean can be modeled by $H(t)=-16t^2+96t+112$. When does the rock reach its maximum height, in seconds?"
  answer="3"
  answerDisplay="3 seconds"
  hint="The maximum height occurs at the vertex; find $h=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="What is the maximum height of that same rock, in feet?"
  answer="256"
  answerDisplay="256 feet"
  hint="Evaluate $H$ at the time you just found for the vertex."
>}}

{{< fillin
  question="When does that same rock hit the ocean, in seconds?"
  answer="7"
  answerDisplay="7 seconds"
  hint="Solve $H(t)=0$ with the quadratic formula, and keep only the positive solution."
>}}

## Key equations

| general form of a quadratic function | $f(x)=ax^2+bx+c$ |
| :--- | :--- |
| the quadratic formula | $x=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}$ |
| standard form of a quadratic function | $f(x)=a(x-h)^2+k$ |

## Key concepts

- A polynomial function of degree two is called a quadratic function.
- The graph of a quadratic function is a parabola. A parabola is a U-shaped
  curve that can open either up or down.
- The axis of symmetry is the vertical line passing through the vertex. The
  zeros, or $x$-intercepts, are the points at which the parabola crosses the
  $x$-axis. The $y$-intercept is the point at which the parabola crosses the
  $y$-axis.
- Quadratic functions are often written in general form. Standard or vertex
  form is useful to easily identify the vertex of a parabola. Either form can
  be written from a graph.
- The vertex can be found from an equation representing a quadratic function.
- The domain of a quadratic function is all real numbers. The range varies
  with the function.
- A quadratic function's minimum or maximum value is given by the
  $y$-value of the vertex.
- The minimum or maximum value of a quadratic function can be used to
  determine the range of the function and to solve many kinds of real-world
  problems, including problems involving area and revenue.
- Some quadratic equations must be solved by using the quadratic formula.
- The vertex and the intercepts can be identified and interpreted to solve
  real-world problems.


## Practice

### Recognize characteristics of parabolas

{{< graphplot
  question="Sketch the graph of $f(x)=x^2-2x$."
  answerDisplay="Vertex $(1,-1)$, opening upward through $(0,0)$ and $(2,0)$"
  ariaLabel="A blank grid from -7 to 7 on both axes."
  hint="Plot the vertex and one or two nearby points, then draw the U-shape through them."
>}}
{"answer": {"quadratic": {"a": 1, "b": -2, "c": 0}}, "grid": {"xMin": -7, "xMax": 7, "yMin": -7, "yMax": 7}}
{{< /graphplot >}}

{{< fillin
  question="What is the vertex of that same parabola, $f(x)=x^2-2x$? Enter your answer as an ordered pair."
  answer="(1,-1)"
  answerDisplay="$(1,-1)$"
  hint="Find $h=-\tfrac{b}{2a}$, then evaluate $f(h)$."
>}}

{{< fillin
  question="What is the axis of symmetry of that same parabola, $f(x)=x^2-2x$?"
  answer="x=1"
  answerDisplay="$x=1$"
  hint="The axis of symmetry is the vertical line through the vertex, $x=h$."
>}}

{{< fillin
  question="What is the vertex of $f(x)=x^2-5x-6$? Enter your answer as an ordered pair."
  answer="(5/2,-49/4)"
  answerDisplay="$\left(\tfrac{5}{2},-\tfrac{49}{4}\right)$"
  hint="Find $h=-\tfrac{b}{2a}$, then evaluate $f(h)$."
>}}

{{< fillin
  question="What is the axis of symmetry of that same parabola, $f(x)=x^2-5x-6$?"
  answer="x=5/2"
  answerDisplay="$x=\tfrac{5}{2}$"
  hint="The axis of symmetry is the vertical line through the vertex, $x=h$."
>}}

### Understand how the graph of a parabola is related to its quadratic function

{{< fillin
  question="Rewrite $g(x)=x^2+2x-3$ in standard (vertex) form."
  answer="(x+1)^2-4"
  answerForm="vertex-form"
  answerDisplay="$g(x)=(x+1)^2-4$"
  hint="Find $h=-\tfrac{b}{2a}$ and $k=g(h)$, then substitute into $a(x-h)^2+k$."
>}}

{{< fillin
  question="Rewrite $f(x)=3x^2-5x-1$ in standard (vertex) form."
  answer="3(x-5/6)^2-37/12"
  answerForm="vertex-form"
  answerDisplay="$f(x)=3\left(x-\tfrac{5}{6}\right)^2-\tfrac{37}{12}$"
  hint="Find $h=-\tfrac{b}{2a}$ and $k=f(h)$, then substitute into $a(x-h)^2+k$."
>}}

{{< fillin
  question="Write the general form of the equation for the parabola graphed below."
  answer="x^2-4x+1"
  answerForm="expanded"
  answerDisplay="$f(x)=x^2-4x+1$"
  hint="Read the vertex and one other point off the graph, then follow the same steps as writing an equation from a graph."
>}}

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"An upward-opening parabola with vertex near (2, -3) and y-intercept at (0, 1).","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"quadratics":[{"a":1,"b":-4,"c":1}]}'>
<svg role="img" aria-label="An upward-opening parabola with vertex near (2, -3) and y-intercept at (0, 1)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="266" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="266" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="266" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="266" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="266" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="266" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="266" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="266" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="266" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="266" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="266" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="266" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="266" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="266" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="266" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="266" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="268" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,146 268,151 268,141" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="50" y1="143" x2="50" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="74" y1="143" x2="74" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="98" y1="143" x2="98" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="122" y1="143" x2="122" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="170" y1="143" x2="170" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="194" y1="143" x2="194" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="218" y1="143" x2="218" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="242" y1="143" x2="242" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="242" x2="149" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="246" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="218" x2="149" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="222" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="194" x2="149" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="170" x2="149" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="122" x2="149" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="126" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="98" x2="149" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="74" x2="149" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="78" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="50" x2="149" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="54" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="127.7,34.6 127.8,35.1 128,36.5 128.3,37.9 128.5,39.2 128.8,40.6 129,42 129.3,43.3 129.5,44.7 129.8,46 130,47.3 130.3,48.7 130.5,50 130.8,51.3 131,52.6 131.3,53.9 131.5,55.2 131.8,56.5 132,57.8 132.3,59.1 132.5,60.4 132.8,61.7 133,63 133.3,64.2 133.5,65.5 133.8,66.7 134,68 134.3,69.2 134.5,70.5 134.8,71.7 135,73 135.3,74.2 135.5,75.4 135.8,76.6 136,77.8 136.3,79 136.5,80.2 136.8,81.4 137,82.6 137.3,83.8 137.5,85 137.8,86.2 138,87.3 138.3,88.5 138.5,89.7 138.8,90.8 139,92 139.3,93.1 139.5,94.2 139.8,95.4 140,96.5 140.3,97.6 140.5,98.7 140.8,99.9 141,101 141.3,102.1 141.5,103.2 141.8,104.2 142,105.3 142.3,106.4 142.5,107.5 142.8,108.6 143,109.6 143.3,110.7 143.5,111.7 143.8,112.8 144,113.8 144.3,114.9 144.5,115.9 144.8,116.9 145,118 145.3,119 145.5,120 145.8,121 146,122 146.3,123 146.5,124 146.8,125 147,126 147.3,126.9 147.5,127.9 147.8,128.9 148,129.8 148.3,130.8 148.5,131.7 148.8,132.7 149,133.6 149.3,134.6 149.5,135.5 149.8,136.4 150,137.3 150.3,138.2 150.5,139.2 150.8,140.1 151,141 151.3,141.9 151.5,142.7 151.8,143.6 152,144.5 152.3,145.4 152.5,146.2 152.8,147.1 153,148 153.3,148.8 153.5,149.7 153.8,150.5 154,151.3 154.3,152.2 154.5,153 154.8,153.8 155,154.6 155.3,155.4 155.5,156.2 155.8,157 156,157.8 156.3,158.6 156.5,159.4 156.8,160.2 157,161 157.3,161.7 157.5,162.5 157.8,163.2 158,164 158.3,164.7 158.5,165.5 158.8,166.2 159,167 159.3,167.7 159.5,168.4 159.8,169.1 160,169.8 160.3,170.5 160.5,171.2 160.8,171.9 161,172.6 161.3,173.3 161.5,174 161.8,174.7 162,175.3 162.3,176 162.5,176.7 162.8,177.3 163,178 163.3,178.6 163.5,179.2 163.8,179.9 164,180.5 164.3,181.1 164.5,181.7 164.8,182.4 165,183 165.3,183.6 165.5,184.2 165.8,184.7 166,185.3 166.3,185.9 166.5,186.5 166.8,187.1 167,187.6 167.3,188.2 167.5,188.7 167.8,189.3 168,189.8 168.3,190.4 168.5,190.9 168.8,191.4 169,192 169.3,192.5 169.5,193 169.8,193.5 170,194 170.3,194.5 170.5,195 170.8,195.5 171,196 171.3,196.4 171.5,196.9 171.8,197.4 172,197.8 172.3,198.3 172.5,198.7 172.8,199.2 173,199.6 173.3,200.1 173.5,200.5 173.8,200.9 174,201.3 174.3,201.7 174.5,202.2 174.8,202.6 175,203 175.3,203.4 175.5,203.7 175.8,204.1 176,204.5 176.3,204.9 176.5,205.2 176.8,205.6 177,206 177.3,206.3 177.5,206.7 177.8,207 178,207.3 178.3,207.7 178.5,208 178.8,208.3 179,208.6 179.3,208.9 179.5,209.2 179.8,209.5 180,209.8 180.3,210.1 180.5,210.4 180.8,210.7 181,211 181.3,211.2 181.5,211.5 181.8,211.7 182,212 182.3,212.2 182.5,212.5 182.8,212.7 183,213 183.3,213.2 183.5,213.4 183.8,213.6 184,213.8 184.3,214 184.5,214.2 184.8,214.4 185,214.6 185.3,214.8 185.5,215 185.8,215.2 186,215.3 186.3,215.5 186.5,215.7 186.8,215.8 187,216 187.3,216.1 187.5,216.2 187.8,216.4 188,216.5 188.3,216.6 188.5,216.7 188.8,216.9 189,217 189.3,217.1 189.5,217.2 189.8,217.2 190,217.3 190.3,217.4 190.5,217.5 190.8,217.6 191,217.6 191.3,217.7 191.5,217.7 191.8,217.8 192,217.8 192.3,217.9 192.5,217.9 192.8,217.9 193,218 193.3,218 193.5,218 193.8,218 194,218 194.3,218 194.5,218 194.8,218 195,218 195.3,217.9 195.5,217.9 195.8,217.9 196,217.8 196.3,217.8 196.5,217.7 196.8,217.7 197,217.6 197.3,217.6 197.5,217.5 197.8,217.4 198,217.3 198.3,217.2 198.5,217.2 198.8,217.1 199,217 199.3,216.9 199.5,216.7 199.8,216.6 200,216.5 200.3,216.4 200.5,216.2 200.8,216.1 201,216 201.3,215.8 201.5,215.7 201.8,215.5 202,215.3 202.3,215.2 202.5,215 202.8,214.8 203,214.6 203.3,214.4 203.5,214.2 203.8,214 204,213.8 204.3,213.6 204.5,213.4 204.8,213.2 205,213 205.3,212.7 205.5,212.5 205.8,212.2 206,212 206.3,211.7 206.5,211.5 206.8,211.2 207,211 207.3,210.7 207.5,210.4 207.8,210.1 208,209.8 208.3,209.5 208.5,209.2 208.8,208.9 209,208.6 209.3,208.3 209.5,208 209.8,207.7 210,207.3 210.3,207 210.5,206.7 210.8,206.3 211,206 211.3,205.6 211.5,205.2 211.8,204.9 212,204.5 212.3,204.1 212.5,203.7 212.8,203.4 213,203 213.3,202.6 213.5,202.2 213.8,201.7 214,201.3 214.3,200.9 214.5,200.5 214.8,200.1 215,199.6 215.3,199.2 215.5,198.7 215.8,198.3 216,197.8 216.3,197.4 216.5,196.9 216.8,196.4 217,196 217.3,195.5 217.5,195 217.8,194.5 218,194 218.3,193.5 218.5,193 218.8,192.5 219,192 219.3,191.4 219.5,190.9 219.8,190.4 220,189.8 220.3,189.3 220.5,188.7 220.8,188.2 221,187.6 221.3,187.1 221.5,186.5 221.8,185.9 222,185.3 222.3,184.7 222.5,184.2 222.8,183.6 223,183 223.3,182.4 223.5,181.7 223.8,181.1 224,180.5 224.3,179.9 224.5,179.2 224.8,178.6 225,178 225.3,177.3 225.5,176.7 225.8,176 226,175.3 226.3,174.7 226.5,174 226.8,173.3 227,172.6 227.3,171.9 227.5,171.2 227.8,170.5 228,169.8 228.3,169.1 228.5,168.4 228.8,167.7 229,167 229.3,166.2 229.5,165.5 229.8,164.7 230,164 230.3,163.2 230.5,162.5 230.8,161.7 231,161 231.3,160.2 231.5,159.4 231.8,158.6 232,157.8 232.3,157 232.5,156.2 232.8,155.4 233,154.6 233.3,153.8 233.5,153 233.8,152.2 234,151.3 234.3,150.5 234.5,149.7 234.8,148.8 235,148 235.3,147.1 235.5,146.2 235.8,145.4 236,144.5 236.3,143.6 236.5,142.7 236.8,141.9 237,141 237.3,140.1 237.5,139.2 237.8,138.2 238,137.3 238.3,136.4 238.5,135.5 238.8,134.6 239,133.6 239.3,132.7 239.5,131.7 239.8,130.8 240,129.8 240.3,128.9 240.5,127.9 240.8,126.9 241,126 241.3,125 241.5,124 241.8,123 242,122 242.3,121 242.5,120 242.8,119 243,118 243.3,116.9 243.5,115.9 243.8,114.9 244,113.8 244.3,112.8 244.5,111.7 244.8,110.7 245,109.6 245.3,108.6 245.5,107.5 245.8,106.4 246,105.3 246.3,104.2 246.5,103.2 246.8,102.1 247,101 247.3,99.9 247.5,98.7 247.8,97.6 248,96.5 248.3,95.4 248.5,94.2 248.8,93.1 249,92 249.3,90.8 249.5,89.7 249.8,88.5 250,87.3 250.3,86.2 250.5,85 250.8,83.8 251,82.6 251.3,81.4 251.5,80.2 251.8,79 252,77.8 252.3,76.6 252.5,75.4 252.8,74.2 253,73 253.3,71.7 253.5,70.5 253.8,69.2 254,68 254.3,66.7 254.5,65.5 254.8,64.2 255,63 255.3,61.7 255.5,60.4 255.8,59.1 256,57.8 256.3,56.5 256.5,55.2 256.8,53.9 257,52.6 257.3,51.3 257.5,50 257.8,48.7 258,47.3 258.3,46 258.5,44.7 258.8,43.3 259,42 259.3,40.6 259.5,39.2 259.8,37.9 260,36.5 260.3,35.1 260.3,34.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="126.3,26.7 132.9,35.7 123.1,37.5" fill="currentColor"/>
  <polygon points="261.8,26.7 264.9,37.5 255.1,35.7" fill="currentColor"/>
</svg>
</div>


{{< fillin
  question="Write the general form of the equation for the parabola graphed below."
  answer="-2x^2+8x-1"
  answerForm="expanded"
  answerDisplay="$f(x)=-2x^2+8x-1$"
  hint="Read the vertex and one other point off the graph, then follow the same steps as writing an equation from a graph."
>}}

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A downward-opening parabola with vertex near (2, 7) and y-intercept at (0, -1).","xMin":-5,"xMax":5,"yMin":-9,"yMax":9,"unit":20,"tickLabels":true,"quadratics":[{"a":-2,"b":8,"c":-1}]}'>
<svg role="img" aria-label="A downward-opening parabola with vertex near (2, 7) and y-intercept at (0, -1)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 412" width="252" height="412" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="386" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="386" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="386" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="386" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="386" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="386" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="386" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="386" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="386" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="386" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="386" x2="226" y2="386" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="366" x2="226" y2="366" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="226" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="226" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="226" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="226" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="226" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="226" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="226" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="226" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="226" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="226" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="226" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="226" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="226" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="226" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="226" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="206" x2="228" y2="206" stroke="currentColor" stroke-width="1"/>
  <line x1="126" y1="24" x2="126" y2="388" stroke="currentColor" stroke-width="1"/>
  <polygon points="238,206 228,211 228,201" fill="currentColor"/>
  <polygon points="126,14 131,24 121,24" fill="currentColor"/>
  <polygon points="14,206 24,201 24,211" fill="currentColor"/>
  <polygon points="126,398 121,388 131,388" fill="currentColor"/>
  <text x="236" y="198" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="134" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="203" x2="26" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="221" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="46" y1="203" x2="46" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="221" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="66" y1="203" x2="66" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="221" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="86" y1="203" x2="86" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="221" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="106" y1="203" x2="106" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="221" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="203" x2="146" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="221" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="166" y1="203" x2="166" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="221" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="186" y1="203" x2="186" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="221" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="206" y1="203" x2="206" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="221" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="226" y1="203" x2="226" y2="209" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="221" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="123" y1="386" x2="129" y2="386" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="390" font-size="11" fill="currentColor" text-anchor="end">−9</text>
  <line x1="123" y1="366" x2="129" y2="366" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="370" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="123" y1="346" x2="129" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="350" font-size="11" fill="currentColor" text-anchor="end">−7</text>
  <line x1="123" y1="326" x2="129" y2="326" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="330" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="123" y1="306" x2="129" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="310" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="123" y1="286" x2="129" y2="286" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="290" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="123" y1="266" x2="129" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="270" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="123" y1="246" x2="129" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="250" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="123" y1="226" x2="129" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="230" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="123" y1="186" x2="129" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="190" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="123" y1="166" x2="129" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="170" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="123" y1="146" x2="129" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="150" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="123" y1="126" x2="129" y2="126" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="130" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="123" y1="106" x2="129" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="110" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="123" y1="86" x2="129" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="90" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="123" y1="66" x2="129" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="70" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <line x1="123" y1="46" x2="129" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="50" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="123" y1="26" x2="129" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="30" font-size="11" fill="currentColor" text-anchor="end">9</text>
  <polyline points="110.2,377.3 110.3,376.8 110.5,374 110.8,371.3 111,368.5 111.3,365.8 111.5,363 111.8,360.3 112,357.6 112.3,354.9 112.5,352.2 112.8,349.6 113,346.9 113.3,344.3 113.5,341.6 113.8,339 114,336.4 114.3,333.8 114.5,331.2 114.8,328.7 115,326.1 115.3,323.6 115.5,321 115.8,318.5 116,316 116.3,313.5 116.5,311 116.8,308.6 117,306.1 117.3,303.7 117.5,301.2 117.8,298.8 118,296.4 118.3,294 118.5,291.6 118.8,289.3 119,286.9 119.3,284.6 119.5,282.2 119.8,279.9 120,277.6 120.3,275.3 120.5,273 120.8,270.8 121,268.5 121.3,266.3 121.5,264 121.8,261.8 122,259.6 122.3,257.4 122.5,255.2 122.8,253.1 123,250.9 123.3,248.8 123.5,246.6 123.8,244.5 124,242.4 124.3,240.3 124.5,238.2 124.8,236.2 125,234.1 125.3,232.1 125.5,230 125.8,228 126,226 126.3,224 126.5,222 126.8,220.1 127,218.1 127.3,216.2 127.5,214.2 127.8,212.3 128,210.4 128.3,208.5 128.5,206.6 128.8,204.8 129,202.9 129.3,201.1 129.5,199.2 129.8,197.4 130,195.6 130.3,193.8 130.5,192 130.8,190.3 131,188.5 131.3,186.8 131.5,185 131.8,183.3 132,181.6 132.3,179.9 132.5,178.2 132.8,176.6 133,174.9 133.3,173.3 133.5,171.6 133.8,170 134,168.4 134.3,166.8 134.5,165.2 134.8,163.7 135,162.1 135.3,160.6 135.5,159 135.8,157.5 136,156 136.3,154.5 136.5,153 136.8,151.6 137,150.1 137.3,148.7 137.5,147.2 137.8,145.8 138,144.4 138.3,143 138.5,141.6 138.8,140.3 139,138.9 139.3,137.6 139.5,136.2 139.8,134.9 140,133.6 140.3,132.3 140.5,131 140.8,129.8 141,128.5 141.3,127.3 141.5,126 141.8,124.8 142,123.6 142.3,122.4 142.5,121.2 142.8,120.1 143,118.9 143.3,117.8 143.5,116.6 143.8,115.5 144,114.4 144.3,113.3 144.5,112.2 144.8,111.2 145,110.1 145.3,109.1 145.5,108 145.8,107 146,106 146.3,105 146.5,104 146.8,103.1 147,102.1 147.3,101.2 147.5,100.2 147.8,99.3 148,98.4 148.3,97.5 148.5,96.6 148.8,95.8 149,94.9 149.3,94.1 149.5,93.2 149.8,92.4 150,91.6 150.3,90.8 150.5,90 150.8,89.3 151,88.5 151.3,87.8 151.5,87 151.8,86.3 152,85.6 152.3,84.9 152.5,84.2 152.8,83.6 153,82.9 153.3,82.3 153.5,81.6 153.8,81 154,80.4 154.3,79.8 154.5,79.2 154.8,78.7 155,78.1 155.3,77.6 155.5,77 155.8,76.5 156,76 156.3,75.5 156.5,75 156.8,74.6 157,74.1 157.3,73.7 157.5,73.2 157.8,72.8 158,72.4 158.3,72 158.5,71.6 158.8,71.3 159,70.9 159.3,70.6 159.5,70.2 159.8,69.9 160,69.6 160.3,69.3 160.5,69 160.8,68.8 161,68.5 161.3,68.3 161.5,68 161.8,67.8 162,67.6 162.3,67.4 162.5,67.2 162.8,67.1 163,66.9 163.3,66.8 163.5,66.6 163.8,66.5 164,66.4 164.3,66.3 164.5,66.2 164.8,66.2 165,66.1 165.3,66.1 165.5,66 165.8,66 166,66 166.3,66 166.5,66 166.8,66.1 167,66.1 167.3,66.2 167.5,66.2 167.8,66.3 168,66.4 168.3,66.5 168.5,66.6 168.8,66.8 169,66.9 169.3,67.1 169.5,67.2 169.8,67.4 170,67.6 170.3,67.8 170.5,68 170.8,68.3 171,68.5 171.3,68.8 171.5,69 171.8,69.3 172,69.6 172.3,69.9 172.5,70.2 172.8,70.6 173,70.9 173.3,71.3 173.5,71.6 173.8,72 174,72.4 174.3,72.8 174.5,73.2 174.8,73.7 175,74.1 175.3,74.6 175.5,75 175.8,75.5 176,76 176.3,76.5 176.5,77 176.8,77.6 177,78.1 177.3,78.7 177.5,79.2 177.8,79.8 178,80.4 178.3,81 178.5,81.6 178.8,82.3 179,82.9 179.3,83.6 179.5,84.2 179.8,84.9 180,85.6 180.3,86.3 180.5,87 180.8,87.8 181,88.5 181.3,89.3 181.5,90 181.8,90.8 182,91.6 182.3,92.4 182.5,93.2 182.8,94.1 183,94.9 183.3,95.8 183.5,96.6 183.8,97.5 184,98.4 184.3,99.3 184.5,100.2 184.8,101.2 185,102.1 185.3,103.1 185.5,104 185.8,105 186,106 186.3,107 186.5,108 186.8,109.1 187,110.1 187.3,111.2 187.5,112.2 187.8,113.3 188,114.4 188.3,115.5 188.5,116.6 188.8,117.8 189,118.9 189.3,120.1 189.5,121.2 189.8,122.4 190,123.6 190.3,124.8 190.5,126 190.8,127.3 191,128.5 191.3,129.8 191.5,131 191.8,132.3 192,133.6 192.3,134.9 192.5,136.2 192.8,137.6 193,138.9 193.3,140.3 193.5,141.6 193.8,143 194,144.4 194.3,145.8 194.5,147.2 194.8,148.7 195,150.1 195.3,151.6 195.5,153 195.8,154.5 196,156 196.3,157.5 196.5,159 196.8,160.6 197,162.1 197.3,163.7 197.5,165.2 197.8,166.8 198,168.4 198.3,170 198.5,171.6 198.8,173.3 199,174.9 199.3,176.6 199.5,178.2 199.8,179.9 200,181.6 200.3,183.3 200.5,185 200.8,186.8 201,188.5 201.3,190.3 201.5,192 201.8,193.8 202,195.6 202.3,197.4 202.5,199.2 202.8,201.1 203,202.9 203.3,204.8 203.5,206.6 203.8,208.5 204,210.4 204.3,212.3 204.5,214.2 204.8,216.2 205,218.1 205.3,220.1 205.5,222 205.8,224 206,226 206.3,228 206.5,230 206.8,232.1 207,234.1 207.3,236.2 207.5,238.2 207.8,240.3 208,242.4 208.3,244.5 208.5,246.6 208.8,248.8 209,250.9 209.3,253.1 209.5,255.2 209.8,257.4 210,259.6 210.3,261.8 210.5,264 210.8,266.3 211,268.5 211.3,270.8 211.5,273 211.8,275.3 212,277.6 212.3,279.9 212.5,282.2 212.8,284.6 213,286.9 213.3,289.3 213.5,291.6 213.8,294 214,296.4 214.3,298.8 214.5,301.2 214.8,303.7 215,306.1 215.3,308.6 215.5,311 215.8,313.5 216,316 216.3,318.5 216.5,321 216.8,323.6 217,326.1 217.3,328.7 217.5,331.2 217.8,333.8 218,336.4 218.3,339 218.5,341.6 218.8,344.3 219,346.9 219.3,349.6 219.5,352.2 219.8,354.9 220,357.6 220.3,360.3 220.5,363 220.8,365.8 221,368.5 221.3,371.3 221.5,374 221.8,376.8 221.8,377.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="109.5,385.2 105.4,374.8 115.4,375.7" fill="currentColor"/>
  <polygon points="222.5,385.2 216.6,375.7 226.6,374.8" fill="currentColor"/>
</svg>
</div>


### Determine a quadratic function's minimum or maximum value

{{< fillin
  question="Find the minimum value of $f(x)=2x^2-10x+4$."
  answer="-17/2"
  answerDisplay="$-\tfrac{17}{2}$"
  hint="The minimum value occurs at the vertex; evaluate $f$ at $h=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="What is the axis of symmetry of that same parabola, $f(x)=2x^2-10x+4$?"
  answer="x=5/2"
  answerDisplay="$x=\tfrac{5}{2}$"
  hint="The axis of symmetry is $x=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="Find the minimum value of $f(x)=4x^2+x-1$."
  answer="-17/16"
  answerDisplay="$-\tfrac{17}{16}$"
  hint="The minimum value occurs at the vertex; evaluate $f$ at $h=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="Find the range of $f(x)=(x-3)^2+2$. Write your answer in interval notation."
  answer="[2,\infty)"
  answerDisplay="$[2,\infty)$"
  hint="This is already in standard form with $a>0$, so the range is $f(x)\ge k$."
>}}

### Solve problems involving a quadratic function's minimum or maximum value

A backyard farmer wants to enclose a rectangular corral using 200 feet of
fencing on all four sides.

{{< fillin
  question="What side length, in feet, produces the greatest enclosed area?"
  answer="50"
  answerDisplay="50 feet"
  hint="Let one side be $x$; the opposite side is also $x$ and the other pair is $100-x$ each, so maximize $A(x)=x(100-x)$."
>}}

{{< fillin
  question="Using that same 200 feet of fencing, what is the greatest enclosed area, in square feet?"
  answer="2500"
  answerDisplay="2,500 square feet"
  hint="Evaluate the area function at the side length you just found."
>}}

{{< fillin
  question="A soccer stadium holds 62,000 spectators. With a ticket price of \$11, average attendance has been 26,000. When the price dropped to \$9, average attendance rose to 31,000. Assuming attendance is linearly related to ticket price, what ticket price would maximize revenue?"
  answer="10.70"
  answerDisplay="\$10.70"
  hint="Find the linear attendance-vs-price relationship first, then maximize $\text{Revenue}=\text{price}\times\text{attendance}$."
>}}

{{< fillin
  question="A rocket is launched in the air. Its height, in meters above sea level, as a function of time, in seconds, is given by $h(t)=-4.9t^2+229t+234$. Find the maximum height the rocket attains, in meters, rounded to two decimal places."
  answer="2909.56"
  answerDisplay="2,909.56 meters"
  hint="The maximum height is the $y$-value of the vertex, $h\!\left(-\tfrac{b}{2a}\right)$."
>}}

{{< fillin
  question="Among all pairs of numbers whose difference is 12, find the pair with the smallest product. Enter both numbers, separated by a comma."
  answer="-6,6"
  answerMode="unordered"
  answerDisplay="$-6$ and $6$"
  hint="Let the numbers be $x$ and $x-12$; minimize the product $P(x)=x(x-12)$."
>}}

{{< fillin
  question="What is that smallest product?"
  answer="-36"
  answerDisplay="$-36$"
  hint="Evaluate the product function at the vertex you just found."
>}}


---

<small>This section is adapted from [Precalculus 2e, Section 3.2: Quadratic Functions](https://openstax.org/books/precalculus-2e/pages/3-2-quadratic-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every graph as an accessible inline SVG generated from its exact equation — the labeled-features schematic parabola $y=x^2-2x-3$; the vertex/no-x-intercept parabola $y=\tfrac{2}{3}(x-3)^2+1$ of Example 1; the general-form parabola $y=x^2+4x+3$; the standard-form parabola $y=-3(x+2)^2+4$; the basic parabola $y=x^2$; the graph-transformation parabola $g(x)=\tfrac{1}{2}(x+2)^2-3$; the two minimum/maximum panels $f(x)=(x-2)^2+1$ and $g(x)=-(x+3)^2+4$; the area function $A(L)=-2L^2+80L$; the revenue function, scaled to thousands of dollars, $-2.5p^2+159p$; the three no/one/two-$x$-intercept panels; the $y$-/$x$-intercept parabola $f(x)=3x^2+5x-2$; the standard-form parabola $f(x)=2x^2+4x-4$ with its irrational intercepts; the corrected height-vs-time parabola $H(t)=-16t^2+80t+40$; and the two Practice graph-reading items $f(x)=x^2-4x+1$ and $f(x)=-2x^2+8x-1$; recreated the garden diagram as a labeled rectangle-in-rectangle figure; presented the table-feature check in Example 2 as a Markdown table; omitted the decorative satellite-dish photograph, which carries no mathematics, and reworded the opening sentence that pointed at it; omitted the section's four Media links to external graphing-calculator resources; converted the basketball Try It's photograph-with-grid-overlay into a recreated graph, stating in the question the release point, vertex, and the hoop's location and height that the source conveyed only through the image; converted the practice problems ("Try Its") into interactive exercises with instant feedback — a fillin plus multiple choice for the basketball path and shot outcome, a multiple choice among competing writings plus a fillin for the rewritten-in-standard-form Try It (its general-form half is a bare reordering of an already-expanded printed expression, so no `answerForm` token restricts term order and a retyped printed span would grade correct; a multiple choice among the general, standard, and mis-ordered forms grades the shape instead), a fillin for the domain-and-range Try It, a fillin plus multiple choice for the $y$-intercept and $x$-intercept count of the rewritten function, and three fillins for the falling-rock application; split each of the two "sketch a graph and give the vertex, axis of symmetry, and intercepts" Practice items into a graphing or fillin component per requested quantity; and adapted thirteen selected end-of-section exercises — two vertex/axis-of-symmetry rewrites, two graph-reading equations, two minimum-value/axis-of-symmetry evaluations, a range evaluation, and four real-world optimization problems (a four-sided corral, a ticket-revenue maximization, a rocket's maximum height, and a smallest-product pair) — into nineteen interactive components in a closing Practice block, one group per objective. One upstream figure defect is corrected here: the pinned CNXML's Figure 16 (module m49337) prints its vertical axis labeled "$t$" carrying the height values (50, 100, 150) and its horizontal axis labeled "$H$" carrying the time values (1 through 6), the reverse of the function $H(t)$ it illustrates, alongside a stray "$(x$ from $-1$ to $6)$" annotation left over from a different window setting; this page draws the corrected axes, time on the horizontal axis and height on the vertical axis, over the function's own domain, and carries a visible source note beside the corrected figure disclosing the correction in addition to this footer.</small>

