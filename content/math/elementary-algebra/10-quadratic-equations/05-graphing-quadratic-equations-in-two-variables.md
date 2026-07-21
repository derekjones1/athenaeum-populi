---
title: Graphing Quadratic Equations in Two Variables
description: >-
  Recognizing and graphing parabolas, finding their axes of symmetry,
  vertices, and intercepts, and solving maximum and minimum applications.
source_section: "10.5"
weight: 5
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** recognize the graph of
  a quadratic equation in two variables, find the axis of symmetry and
  vertex of a parabola, find the intercepts of a parabola, graph quadratic
  equations in two variables, and solve maximum and minimum applications.
{{< /callout >}}

## Recognize the graph of a quadratic equation in two variables

We have graphed equations of the form $Ax+By=C$. We called equations like
this linear equations because their graphs are straight lines.

Now, we will graph equations of the form $y=ax^2+bx+c$. We call this kind of
equation a quadratic equation in two variables.

{{< callout type="info" >}}
  **Quadratic equation in two variables.** A **quadratic equation in two
  variables**, where $a$, $b$, and $c$ are real numbers and $a\ne0$, is an
  equation of the form

  $$y=ax^2+bx+c$$
{{< /callout >}}

Just like we started graphing linear equations by plotting points, we will do
the same for quadratic equations.

Let's look first at graphing the quadratic equation $y=x^2$. We will choose
integer values of $x$ between $-2$ and $2$ and find their $y$ values.

| $x$ | $y=x^2$ |
| ---: | ---: |
| $0$ | $0$ |
| $1$ | $1$ |
| $-1$ | $1$ |
| $2$ | $4$ |
| $-2$ | $4$ |

Notice when we let $x=1$ and $x=-1$, we got the same value for $y$.

$$
\begin{array}{rcl} y&=&x^2 \\[4pt] y&=&1^2 \\[4pt] y&=&1 \end{array}
\qquad\text{and}\qquad
\begin{array}{rcl} y&=&x^2 \\[4pt] y&=&(-1)^2 \\[4pt] y&=&1 \end{array}
$$

The same thing happened when we let $x=2$ and $x=-2$.

Now, we will plot the points to show the graph of $y=x^2$.

<div class="ap-figure">
<svg role="img" aria-label="The upward-opening parabola y equals x squared, with the points (0, 0), (1, 1), (-1, 1), (2, 4), and (-2, 4) plotted." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="266" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="266" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="266" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="266" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="266" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="266" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="266" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="266" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="266" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="266" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="266" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="266" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="266" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="266" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="266" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="266" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="266" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="266" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
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
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="46" y1="143" x2="46" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="66" y1="143" x2="66" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="86" y1="143" x2="86" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="106" y1="143" x2="106" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="126" y1="143" x2="126" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="166" y1="143" x2="166" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="186" y1="143" x2="186" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="143" x2="206" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="226" y1="143" x2="226" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="143" x2="246" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="246" x2="149" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="250" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="226" x2="149" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="230" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="206" x2="149" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="210" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="186" x2="149" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="190" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="166" x2="149" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="170" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="126" x2="149" y2="126" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="130" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="106" x2="149" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="110" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="86" x2="149" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="90" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="66" x2="149" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="70" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="46" x2="149" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="50" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="97.3,27.2 97.5,28.4 97.8,29.6 98,30.8 98.3,32 98.5,33.2 98.8,34.4 99,35.5 99.3,36.7 99.5,37.9 99.8,39 100,40.2 100.3,41.3 100.5,42.5 100.8,43.6 101,44.8 101.3,45.9 101.5,47 101.8,48.1 102,49.2 102.3,50.3 102.5,51.4 102.8,52.5 103,53.6 103.3,54.6 103.5,55.7 103.8,56.7 104,57.8 104.3,58.8 104.5,59.9 104.8,60.9 105,62 105.3,63 105.5,64 105.8,65 106,66 106.3,67 106.5,68 106.8,69 107,69.9 107.3,70.9 107.5,71.9 107.8,72.8 108,73.8 108.3,74.7 108.5,75.7 108.8,76.6 109,77.6 109.3,78.5 109.5,79.4 109.8,80.3 110,81.2 110.3,82.1 110.5,83 110.8,83.9 111,84.8 111.3,85.6 111.5,86.5 111.8,87.3 112,88.2 112.3,89 112.5,89.9 112.8,90.7 113,91.5 113.3,92.4 113.5,93.2 113.8,94 114,94.8 114.3,95.6 114.5,96.4 114.8,97.2 115,98 115.3,98.7 115.5,99.5 115.8,100.2 116,101 116.3,101.7 116.5,102.5 116.8,103.2 117,103.9 117.3,104.7 117.5,105.4 117.8,106.1 118,106.8 118.3,107.5 118.5,108.2 118.8,108.9 119,109.6 119.3,110.2 119.5,110.9 119.8,111.5 120,112.2 120.3,112.8 120.5,113.5 120.8,114.1 121,114.8 121.3,115.4 121.5,116 121.8,116.6 122,117.2 122.3,117.8 122.5,118.4 122.8,119 123,119.5 123.3,120.1 123.5,120.7 123.8,121.2 124,121.8 124.3,122.3 124.5,122.9 124.8,123.4 125,124 125.3,124.5 125.5,125 125.8,125.5 126,126 126.3,126.5 126.5,127 126.8,127.5 127,127.9 127.3,128.4 127.5,128.9 127.8,129.3 128,129.8 128.3,130.2 128.5,130.7 128.8,131.1 129,131.6 129.3,132 129.5,132.4 129.8,132.8 130,133.2 130.3,133.6 130.5,134 130.8,134.4 131,134.8 131.3,135.1 131.5,135.5 131.8,135.8 132,136.2 132.3,136.5 132.5,136.9 132.8,137.2 133,137.5 133.3,137.9 133.5,138.2 133.8,138.5 134,138.8 134.3,139.1 134.5,139.4 134.8,139.7 135,140 135.3,140.2 135.5,140.5 135.8,140.7 136,141 136.3,141.2 136.5,141.5 136.8,141.7 137,141.9 137.3,142.2 137.5,142.4 137.8,142.6 138,142.8 138.3,143 138.5,143.2 138.8,143.4 139,143.6 139.3,143.7 139.5,143.9 139.8,144 140,144.2 140.3,144.3 140.5,144.5 140.8,144.6 141,144.8 141.3,144.9 141.5,145 141.8,145.1 142,145.2 142.3,145.3 142.5,145.4 142.8,145.5 143,145.6 143.3,145.6 143.5,145.7 143.8,145.7 144,145.8 144.3,145.8 144.5,145.9 144.8,145.9 145,145.9 145.3,146 145.5,146 145.8,146 146,146 146.3,146 146.5,146 146.8,146 147,145.9 147.3,145.9 147.5,145.9 147.8,145.8 148,145.8 148.3,145.7 148.5,145.7 148.8,145.6 149,145.6 149.3,145.5 149.5,145.4 149.8,145.3 150,145.2 150.3,145.1 150.5,145 150.8,144.9 151,144.8 151.3,144.6 151.5,144.5 151.8,144.3 152,144.2 152.3,144 152.5,143.9 152.8,143.7 153,143.6 153.3,143.4 153.5,143.2 153.8,143 154,142.8 154.3,142.6 154.5,142.4 154.8,142.2 155,141.9 155.3,141.7 155.5,141.5 155.8,141.2 156,141 156.3,140.7 156.5,140.5 156.8,140.2 157,140 157.3,139.7 157.5,139.4 157.8,139.1 158,138.8 158.3,138.5 158.5,138.2 158.8,137.9 159,137.5 159.3,137.2 159.5,136.9 159.8,136.5 160,136.2 160.3,135.8 160.5,135.5 160.8,135.1 161,134.8 161.3,134.4 161.5,134 161.8,133.6 162,133.2 162.3,132.8 162.5,132.4 162.8,132 163,131.6 163.3,131.1 163.5,130.7 163.8,130.2 164,129.8 164.3,129.3 164.5,128.9 164.8,128.4 165,127.9 165.3,127.5 165.5,127 165.8,126.5 166,126 166.3,125.5 166.5,125 166.8,124.5 167,124 167.3,123.4 167.5,122.9 167.8,122.3 168,121.8 168.3,121.2 168.5,120.7 168.8,120.1 169,119.5 169.3,119 169.5,118.4 169.8,117.8 170,117.2 170.3,116.6 170.5,116 170.8,115.4 171,114.8 171.3,114.1 171.5,113.5 171.8,112.8 172,112.2 172.3,111.5 172.5,110.9 172.8,110.2 173,109.6 173.3,108.9 173.5,108.2 173.8,107.5 174,106.8 174.3,106.1 174.5,105.4 174.8,104.7 175,103.9 175.3,103.2 175.5,102.5 175.8,101.7 176,101 176.3,100.2 176.5,99.5 176.8,98.7 177,98 177.3,97.2 177.5,96.4 177.8,95.6 178,94.8 178.3,94 178.5,93.2 178.8,92.4 179,91.5 179.3,90.7 179.5,89.9 179.8,89 180,88.2 180.3,87.3 180.5,86.5 180.8,85.6 181,84.8 181.3,83.9 181.5,83 181.8,82.1 182,81.2 182.3,80.3 182.5,79.4 182.8,78.5 183,77.6 183.3,76.6 183.5,75.7 183.8,74.7 184,73.8 184.3,72.8 184.5,71.9 184.8,70.9 185,69.9 185.3,69 185.5,68 185.8,67 186,66 186.3,65 186.5,64 186.8,63 187,61.9 187.3,60.9 187.5,59.9 187.8,58.8 188,57.8 188.3,56.7 188.5,55.7 188.8,54.6 189,53.5 189.3,52.5 189.5,51.4 189.8,50.3 190,49.2 190.3,48.1 190.5,47 190.8,45.9 191,44.8 191.3,43.6 191.5,42.5 191.8,41.3 192,40.2 192.3,39 192.5,37.9 192.8,36.7 193,35.6 193.3,34.4 193.5,33.2 193.8,32 194,30.8 194.3,29.6 194.5,28.4 194.8,27.2" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="97.3,27.2 104.2,36 94.4,38" fill="currentColor"/>
  <polygon points="194.8,27.2 197.6,38 187.8,36" fill="currentColor"/>
  <circle cx="146" cy="146" r="4" fill="currentColor"/>
  <circle cx="166" cy="126" r="4" fill="currentColor"/>
  <circle cx="126" cy="126" r="4" fill="currentColor"/>
  <circle cx="186" cy="66" r="4" fill="currentColor"/>
  <circle cx="106" cy="66" r="4" fill="currentColor"/>
</svg>
</div>

The graph is not a line. This figure is called a **parabola**. Every
quadratic equation has a graph that looks like this.

**Example 10.43.** Graph $y=x^2-1$.

We will graph the equation by plotting points. Choose integer values for
$x$, substitute them into the equation and solve for $y$.

| $x$ | $y=x^2-1$ |
| ---: | ---: |
| $0$ | $-1$ |
| $1$ | $0$ |
| $-1$ | $0$ |
| $2$ | $3$ |
| $-2$ | $3$ |

Record the values of the ordered pairs in the chart. Plot the points, and
then connect them with a smooth curve.

<div class="ap-figure">
<svg role="img" aria-label="The upward-opening parabola y equals x squared minus 1, with the points (-2, 3), (-1, 0), (0, -1), (1, 0), and (2, 3) plotted." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="266" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="266" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="266" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="266" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="266" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="266" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="266" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="266" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="266" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="266" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="266" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="266" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="266" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="266" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="266" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="266" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="266" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="266" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
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
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="46" y1="143" x2="46" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="66" y1="143" x2="66" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="86" y1="143" x2="86" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="106" y1="143" x2="106" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="126" y1="143" x2="126" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="166" y1="143" x2="166" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="186" y1="143" x2="186" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="143" x2="206" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="226" y1="143" x2="226" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="143" x2="246" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="246" x2="149" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="250" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="226" x2="149" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="230" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="206" x2="149" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="210" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="186" x2="149" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="190" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="166" x2="149" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="170" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="126" x2="149" y2="126" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="130" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="106" x2="149" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="110" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="86" x2="149" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="90" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="66" x2="149" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="70" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="46" x2="149" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="50" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="93.3,26.9 93.5,28.2 93.8,29.5 94,30.8 94.3,32.1 94.5,33.4 94.8,34.7 95,36 95.3,37.2 95.5,38.5 95.8,39.7 96,41 96.3,42.2 96.5,43.5 96.8,44.7 97,45.9 97.3,47.2 97.5,48.4 97.8,49.6 98,50.8 98.3,52 98.5,53.2 98.8,54.4 99,55.5 99.3,56.7 99.5,57.9 99.8,59 100,60.2 100.3,61.3 100.5,62.5 100.8,63.6 101,64.8 101.3,65.9 101.5,67 101.8,68.1 102,69.2 102.3,70.3 102.5,71.4 102.8,72.5 103,73.6 103.3,74.6 103.5,75.7 103.8,76.7 104,77.8 104.3,78.8 104.5,79.9 104.8,80.9 105,82 105.3,83 105.5,84 105.8,85 106,86 106.3,87 106.5,88 106.8,89 107,89.9 107.3,90.9 107.5,91.9 107.8,92.8 108,93.8 108.3,94.7 108.5,95.7 108.8,96.6 109,97.6 109.3,98.5 109.5,99.4 109.8,100.3 110,101.2 110.3,102.1 110.5,103 110.8,103.9 111,104.8 111.3,105.6 111.5,106.5 111.8,107.3 112,108.2 112.3,109 112.5,109.9 112.8,110.7 113,111.5 113.3,112.4 113.5,113.2 113.8,114 114,114.8 114.3,115.6 114.5,116.4 114.8,117.2 115,118 115.3,118.7 115.5,119.5 115.8,120.2 116,121 116.3,121.7 116.5,122.5 116.8,123.2 117,123.9 117.3,124.7 117.5,125.4 117.8,126.1 118,126.8 118.3,127.5 118.5,128.2 118.8,128.9 119,129.6 119.3,130.2 119.5,130.9 119.8,131.5 120,132.2 120.3,132.8 120.5,133.5 120.8,134.1 121,134.8 121.3,135.4 121.5,136 121.8,136.6 122,137.2 122.3,137.8 122.5,138.4 122.8,139 123,139.5 123.3,140.1 123.5,140.7 123.8,141.2 124,141.8 124.3,142.3 124.5,142.9 124.8,143.4 125,144 125.3,144.5 125.5,145 125.8,145.5 126,146 126.3,146.5 126.5,147 126.8,147.5 127,147.9 127.3,148.4 127.5,148.9 127.8,149.3 128,149.8 128.3,150.2 128.5,150.7 128.8,151.1 129,151.6 129.3,152 129.5,152.4 129.8,152.8 130,153.2 130.3,153.6 130.5,154 130.8,154.4 131,154.8 131.3,155.1 131.5,155.5 131.8,155.8 132,156.2 132.3,156.5 132.5,156.9 132.8,157.2 133,157.5 133.3,157.9 133.5,158.2 133.8,158.5 134,158.8 134.3,159.1 134.5,159.4 134.8,159.7 135,160 135.3,160.2 135.5,160.5 135.8,160.7 136,161 136.3,161.2 136.5,161.5 136.8,161.7 137,161.9 137.3,162.2 137.5,162.4 137.8,162.6 138,162.8 138.3,163 138.5,163.2 138.8,163.4 139,163.6 139.3,163.7 139.5,163.9 139.8,164 140,164.2 140.3,164.3 140.5,164.5 140.8,164.6 141,164.8 141.3,164.9 141.5,165 141.8,165.1 142,165.2 142.3,165.3 142.5,165.4 142.8,165.5 143,165.6 143.3,165.6 143.5,165.7 143.8,165.7 144,165.8 144.3,165.8 144.5,165.9 144.8,165.9 145,165.9 145.3,166 145.5,166 145.8,166 146,166 146.3,166 146.5,166 146.8,166 147,165.9 147.3,165.9 147.5,165.9 147.8,165.8 148,165.8 148.3,165.7 148.5,165.7 148.8,165.6 149,165.6 149.3,165.5 149.5,165.4 149.8,165.3 150,165.2 150.3,165.1 150.5,165 150.8,164.9 151,164.8 151.3,164.6 151.5,164.5 151.8,164.3 152,164.2 152.3,164 152.5,163.9 152.8,163.7 153,163.6 153.3,163.4 153.5,163.2 153.8,163 154,162.8 154.3,162.6 154.5,162.4 154.8,162.2 155,161.9 155.3,161.7 155.5,161.5 155.8,161.2 156,161 156.3,160.7 156.5,160.5 156.8,160.2 157,160 157.3,159.7 157.5,159.4 157.8,159.1 158,158.8 158.3,158.5 158.5,158.2 158.8,157.9 159,157.5 159.3,157.2 159.5,156.9 159.8,156.5 160,156.2 160.3,155.8 160.5,155.5 160.8,155.1 161,154.8 161.3,154.4 161.5,154 161.8,153.6 162,153.2 162.3,152.8 162.5,152.4 162.8,152 163,151.6 163.3,151.1 163.5,150.7 163.8,150.2 164,149.8 164.3,149.3 164.5,148.9 164.8,148.4 165,147.9 165.3,147.5 165.5,147 165.8,146.5 166,146 166.3,145.5 166.5,145 166.8,144.5 167,144 167.3,143.4 167.5,142.9 167.8,142.3 168,141.8 168.3,141.2 168.5,140.7 168.8,140.1 169,139.5 169.3,139 169.5,138.4 169.8,137.8 170,137.2 170.3,136.6 170.5,136 170.8,135.4 171,134.8 171.3,134.1 171.5,133.5 171.8,132.8 172,132.2 172.3,131.5 172.5,130.9 172.8,130.2 173,129.6 173.3,128.9 173.5,128.2 173.8,127.5 174,126.8 174.3,126.1 174.5,125.4 174.8,124.7 175,123.9 175.3,123.2 175.5,122.5 175.8,121.7 176,121 176.3,120.2 176.5,119.5 176.8,118.7 177,118 177.3,117.2 177.5,116.4 177.8,115.6 178,114.8 178.3,114 178.5,113.2 178.8,112.4 179,111.5 179.3,110.7 179.5,109.9 179.8,109 180,108.2 180.3,107.3 180.5,106.5 180.8,105.6 181,104.8 181.3,103.9 181.5,103 181.8,102.1 182,101.2 182.3,100.3 182.5,99.4 182.8,98.5 183,97.6 183.3,96.6 183.5,95.7 183.8,94.7 184,93.8 184.3,92.8 184.5,91.9 184.8,90.9 185,89.9 185.3,89 185.5,88 185.8,87 186,86 186.3,85 186.5,84 186.8,83 187,81.9 187.3,80.9 187.5,79.9 187.8,78.8 188,77.8 188.3,76.7 188.5,75.7 188.8,74.6 189,73.5 189.3,72.5 189.5,71.4 189.8,70.3 190,69.2 190.3,68.1 190.5,67 190.8,65.9 191,64.8 191.3,63.6 191.5,62.5 191.8,61.3 192,60.2 192.3,59 192.5,57.9 192.8,56.7 193,55.6 193.3,54.4 193.5,53.2 193.8,52 194,50.8 194.3,49.6 194.5,48.4 194.8,47.2 195,46 195.3,44.7 195.5,43.5 195.8,42.2 196,41 196.3,39.7 196.5,38.5 196.8,37.2 197,35.9 197.3,34.7 197.5,33.4 197.8,32.1 198,30.8 198.3,29.5 198.5,28.2 198.8,26.9" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="93.3,26.9 100,35.8 90.2,37.6" fill="currentColor"/>
  <polygon points="198.8,26.9 201.8,37.6 192,35.8" fill="currentColor"/>
  <circle cx="106" cy="86" r="4" fill="currentColor"/>
  <circle cx="126" cy="146" r="4" fill="currentColor"/>
  <circle cx="146" cy="166" r="4" fill="currentColor"/>
  <circle cx="166" cy="146" r="4" fill="currentColor"/>
  <circle cx="186" cy="86" r="4" fill="currentColor"/>
</svg>
</div>

The result is the graph of $y=x^2-1$.

{{< multiplechoice
  question="Graph $y=-x^2$. Which description identifies its graph?"
  hint="Use $x=-2,-1,0,1,2$ and plot the corresponding values of $y$."
  answer="A downward-opening parabola with vertex $(0,0)$"
>}}
A downward-opening parabola with vertex $(0,0)$
An upward-opening parabola with vertex $(0,0)$
A downward-opening parabola with vertex $(0,-1)$
{{< /multiplechoice >}}

How do the equations $y=x^2$ and $y=x^2-1$ differ? What is the difference
between their graphs? How are their graphs the same?

All parabolas of the form $y=ax^2+bx+c$ open upwards or downwards. Compare
the two graphs below.

<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: '0.5rem' }}>
  <div class="ap-figure">
<svg role="img" aria-label="The parabola y equals x squared plus 4x plus 3 opens upward and has vertex (-2, -1)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 354" width="332" height="354" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="328" x2="26" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="40" y1="328" x2="40" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="54" y1="328" x2="54" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="68" y1="328" x2="68" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="82" y1="328" x2="82" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="96" y1="328" x2="96" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="328" x2="110" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="124" y1="328" x2="124" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="328" x2="138" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="328" x2="152" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="328" x2="180" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="328" x2="194" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="328" x2="208" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="222" y1="328" x2="222" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="328" x2="236" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="328" x2="250" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="264" y1="328" x2="264" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="328" x2="278" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="292" y1="328" x2="292" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="328" x2="306" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="328" x2="306" y2="328" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="314" x2="306" y2="314" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="300" x2="306" y2="300" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="306" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="272" x2="306" y2="272" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="258" x2="306" y2="258" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="244" x2="306" y2="244" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="306" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="216" x2="306" y2="216" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="306" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="174" x2="306" y2="174" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="160" x2="306" y2="160" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="306" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="132" x2="306" y2="132" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="118" x2="306" y2="118" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="306" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="306" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="76" x2="306" y2="76" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="306" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="306" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <text x="166" y="14" font-size="13" fill="currentColor" text-anchor="middle">y = x² + 4x + 3; a &gt; 0; opens upward</text>
  <line x1="24" y1="188" x2="308" y2="188" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="46" x2="166" y2="330" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,188 308,193 308,183" fill="currentColor"/>
  <polygon points="166,36 171,46 161,46" fill="currentColor"/>
  <polygon points="14,188 24,183 24,193" fill="currentColor"/>
  <polygon points="166,340 161,330 171,330" fill="currentColor"/>
  <text x="316" y="180" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="46" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="185" x2="26" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="203" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="54" y1="185" x2="54" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="203" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="82" y1="185" x2="82" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="82" y="203" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="110" y1="185" x2="110" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="203" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="138" y1="185" x2="138" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="138" y="203" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="194" y1="185" x2="194" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="203" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="222" y1="185" x2="222" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="222" y="203" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="250" y1="185" x2="250" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="203" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="278" y1="185" x2="278" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="278" y="203" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="306" y1="185" x2="306" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="203" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="163" y1="328" x2="169" y2="328" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="332" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="163" y1="300" x2="169" y2="300" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="304" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="163" y1="272" x2="169" y2="272" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="276" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="163" y1="244" x2="169" y2="244" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="248" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="163" y1="216" x2="169" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="220" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="163" y1="160" x2="169" y2="160" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="164" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="163" y1="132" x2="169" y2="132" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="136" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="163" y1="104" x2="169" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="108" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="163" y1="76" x2="169" y2="76" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="80" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="163" y1="48" x2="169" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="52" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <polyline points="91.8,49.2 92,50.9 92.3,52.5 92.5,54.1 92.8,55.7 93,57.4 93.3,59 93.5,60.6 93.8,62.1 94,63.7 94.3,65.3 94.5,66.8 94.8,68.4 95,69.9 95.3,71.5 95.5,73 95.8,74.5 96,76 96.3,77.5 96.5,79 96.8,80.5 97,81.9 97.3,83.4 97.5,84.8 97.8,86.3 98,87.7 98.3,89.1 98.5,90.6 98.8,92 99,93.4 99.3,94.7 99.5,96.1 99.8,97.5 100,98.9 100.3,100.2 100.5,101.6 100.8,102.9 101,104.2 101.3,105.5 101.5,106.8 101.8,108.1 102,109.4 102.3,110.7 102.5,112 102.8,113.2 103,114.5 103.3,115.7 103.5,117 103.8,118.2 104,119.4 104.3,120.6 104.5,121.8 104.8,123 105,124.2 105.3,125.4 105.5,126.6 105.8,127.7 106,128.9 106.3,130 106.5,131.1 106.8,132.2 107,133.4 107.3,134.5 107.5,135.6 107.8,136.6 108,137.7 108.3,138.8 108.5,139.8 108.8,140.9 109,141.9 109.3,143 109.5,144 109.8,145 110,146 110.3,147 110.5,148 110.8,149 111,149.9 111.3,150.9 111.5,151.8 111.8,152.8 112,153.7 112.3,154.6 112.5,155.6 112.8,156.5 113,157.4 113.3,158.2 113.5,159.1 113.8,160 114,160.9 114.3,161.7 114.5,162.6 114.8,163.4 115,164.2 115.3,165 115.5,165.8 115.8,166.6 116,167.4 116.3,168.2 116.5,169 116.8,169.7 117,170.5 117.3,171.2 117.5,172 117.8,172.7 118,173.4 118.3,174.1 118.5,174.8 118.8,175.5 119,176.2 119.3,176.9 119.5,177.6 119.8,178.2 120,178.9 120.3,179.5 120.5,180.1 120.8,180.7 121,181.4 121.3,182 121.5,182.6 121.8,183.1 122,183.7 122.3,184.3 122.5,184.8 122.8,185.4 123,185.9 123.3,186.5 123.5,187 123.8,187.5 124,188 124.3,188.5 124.5,189 124.8,189.5 125,189.9 125.3,190.4 125.5,190.8 125.8,191.3 126,191.7 126.3,192.1 126.5,192.6 126.8,193 127,193.4 127.3,193.7 127.5,194.1 127.8,194.5 128,194.9 128.3,195.2 128.5,195.6 128.8,195.9 129,196.2 129.3,196.5 129.5,196.8 129.8,197.1 130,197.4 130.3,197.7 130.5,198 130.8,198.2 131,198.5 131.3,198.7 131.5,199 131.8,199.2 132,199.4 132.3,199.6 132.5,199.8 132.8,200 133,200.2 133.3,200.4 133.5,200.6 133.8,200.7 134,200.9 134.3,201 134.5,201.1 134.8,201.2 135,201.4 135.3,201.5 135.5,201.6 135.8,201.6 136,201.7 136.3,201.8 136.5,201.8 136.8,201.9 137,201.9 137.3,202 137.5,202 137.8,202 138,202 138.3,202 138.5,202 138.8,202 139,201.9 139.3,201.9 139.5,201.8 139.8,201.8 140,201.7 140.3,201.6 140.5,201.6 140.8,201.5 141,201.4 141.3,201.2 141.5,201.1 141.8,201 142,200.9 142.3,200.7 142.5,200.6 142.8,200.4 143,200.2 143.3,200 143.5,199.8 143.8,199.6 144,199.4 144.3,199.2 144.5,199 144.8,198.7 145,198.5 145.3,198.2 145.5,198 145.8,197.7 146,197.4 146.3,197.1 146.5,196.8 146.8,196.5 147,196.2 147.3,195.9 147.5,195.6 147.8,195.2 148,194.9 148.3,194.5 148.5,194.1 148.8,193.7 149,193.4 149.3,193 149.5,192.6 149.8,192.1 150,191.7 150.3,191.3 150.5,190.8 150.8,190.4 151,189.9 151.3,189.5 151.5,189 151.8,188.5 152,188 152.3,187.5 152.5,187 152.8,186.5 153,185.9 153.3,185.4 153.5,184.8 153.8,184.3 154,183.7 154.3,183.1 154.5,182.6 154.8,182 155,181.4 155.3,180.7 155.5,180.1 155.8,179.5 156,178.9 156.3,178.2 156.5,177.6 156.8,176.9 157,176.2 157.3,175.5 157.5,174.8 157.8,174.1 158,173.4 158.3,172.7 158.5,172 158.8,171.2 159,170.5 159.3,169.7 159.5,169 159.8,168.2 160,167.4 160.3,166.6 160.5,165.8 160.8,165 161,164.2 161.3,163.4 161.5,162.6 161.8,161.7 162,160.9 162.3,160 162.5,159.1 162.8,158.2 163,157.4 163.3,156.5 163.5,155.6 163.8,154.6 164,153.7 164.3,152.8 164.5,151.8 164.8,150.9 165,149.9 165.3,149 165.5,148 165.8,147 166,146 166.3,145 166.5,144 166.8,143 167,141.9 167.3,140.9 167.5,139.8 167.8,138.8 168,137.7 168.3,136.6 168.5,135.6 168.8,134.5 169,133.4 169.3,132.2 169.5,131.1 169.8,130 170,128.9 170.3,127.7 170.5,126.6 170.8,125.4 171,124.2 171.3,123 171.5,121.8 171.8,120.6 172,119.4 172.3,118.2 172.5,117 172.8,115.7 173,114.5 173.3,113.2 173.5,112 173.8,110.7 174,109.4 174.3,108.1 174.5,106.8 174.8,105.5 175,104.2 175.3,102.9 175.5,101.6 175.8,100.2 176,98.9 176.3,97.5 176.5,96.1 176.8,94.7 177,93.4 177.3,92 177.5,90.6 177.8,89.1 178,87.7 178.3,86.3 178.5,84.8 178.8,83.4 179,81.9 179.3,80.5 179.5,79 179.8,77.5 180,76 180.3,74.5 180.5,73 180.8,71.5 181,69.9 181.3,68.4 181.5,66.8 181.8,65.3 182,63.7 182.3,62.1 182.5,60.6 182.8,59 183,57.4 183.3,55.7 183.5,54.1 183.8,52.5 184,50.9 184.3,49.2" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="91.8,49.2 98.2,58.3 88.3,59.8" fill="currentColor"/>
  <polygon points="184.3,49.2 187.7,59.8 177.8,58.3" fill="currentColor"/>
</svg>
</div>
  <div class="ap-figure">
<svg role="img" aria-label="The parabola y equals negative x squared plus 4x plus 3 opens downward and has vertex (2, 7)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 354" width="332" height="354" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="328" x2="26" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="40" y1="328" x2="40" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="54" y1="328" x2="54" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="68" y1="328" x2="68" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="82" y1="328" x2="82" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="96" y1="328" x2="96" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="328" x2="110" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="124" y1="328" x2="124" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="328" x2="138" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="328" x2="152" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="328" x2="180" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="328" x2="194" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="328" x2="208" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="222" y1="328" x2="222" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="328" x2="236" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="328" x2="250" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="264" y1="328" x2="264" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="328" x2="278" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="292" y1="328" x2="292" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="328" x2="306" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="328" x2="306" y2="328" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="314" x2="306" y2="314" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="300" x2="306" y2="300" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="306" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="272" x2="306" y2="272" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="258" x2="306" y2="258" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="244" x2="306" y2="244" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="306" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="216" x2="306" y2="216" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="306" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="174" x2="306" y2="174" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="160" x2="306" y2="160" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="306" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="132" x2="306" y2="132" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="118" x2="306" y2="118" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="306" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="306" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="76" x2="306" y2="76" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="306" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="306" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <text x="166" y="14" font-size="13" fill="currentColor" text-anchor="middle">y = −x² + 4x + 3; a &lt; 0; opens downward</text>
  <line x1="24" y1="188" x2="308" y2="188" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="46" x2="166" y2="330" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,188 308,193 308,183" fill="currentColor"/>
  <polygon points="166,36 171,46 161,46" fill="currentColor"/>
  <polygon points="14,188 24,183 24,193" fill="currentColor"/>
  <polygon points="166,340 161,330 171,330" fill="currentColor"/>
  <text x="316" y="180" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="46" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="185" x2="26" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="203" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="54" y1="185" x2="54" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="203" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="82" y1="185" x2="82" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="82" y="203" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="110" y1="185" x2="110" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="203" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="138" y1="185" x2="138" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="138" y="203" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="194" y1="185" x2="194" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="203" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="222" y1="185" x2="222" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="222" y="203" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="250" y1="185" x2="250" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="203" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="278" y1="185" x2="278" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="278" y="203" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="306" y1="185" x2="306" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="203" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="163" y1="328" x2="169" y2="328" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="332" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="163" y1="300" x2="169" y2="300" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="304" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="163" y1="272" x2="169" y2="272" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="276" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="163" y1="244" x2="169" y2="244" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="248" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="163" y1="216" x2="169" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="220" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="163" y1="160" x2="169" y2="160" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="164" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="163" y1="132" x2="169" y2="132" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="136" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="163" y1="104" x2="169" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="108" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="163" y1="76" x2="169" y2="76" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="80" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="163" y1="48" x2="169" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="52" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <polyline points="136.5,326.2 136.8,324.1 137,322.1 137.3,320 137.5,318 137.8,316 138,314 138.3,312 138.5,310 138.8,308 139,306.1 139.3,304.1 139.5,302.2 139.8,300.2 140,298.3 140.3,296.4 140.5,294.4 140.8,292.5 141,290.6 141.3,288.8 141.5,286.9 141.8,285 142,283.1 142.3,281.3 142.5,279.4 142.8,277.6 143,275.8 143.3,274 143.5,272.2 143.8,270.4 144,268.6 144.3,266.8 144.5,265 144.8,263.3 145,261.5 145.3,259.8 145.5,258 145.8,256.3 146,254.6 146.3,252.9 146.5,251.2 146.8,249.5 147,247.8 147.3,246.1 147.5,244.4 147.8,242.8 148,241.1 148.3,239.5 148.5,237.9 148.8,236.3 149,234.6 149.3,233 149.5,231.4 149.8,229.9 150,228.3 150.3,226.7 150.5,225.2 150.8,223.6 151,222.1 151.3,220.5 151.5,219 151.8,217.5 152,216 152.3,214.5 152.5,213 152.8,211.5 153,210.1 153.3,208.6 153.5,207.2 153.8,205.7 154,204.3 154.3,202.9 154.5,201.4 154.8,200 155,198.6 155.3,197.3 155.5,195.9 155.8,194.5 156,193.1 156.3,191.8 156.5,190.4 156.8,189.1 157,187.8 157.3,186.5 157.5,185.2 157.8,183.9 158,182.6 158.3,181.3 158.5,180 158.8,178.8 159,177.5 159.3,176.3 159.5,175 159.8,173.8 160,172.6 160.3,171.4 160.5,170.2 160.8,169 161,167.8 161.3,166.6 161.5,165.4 161.8,164.3 162,163.1 162.3,162 162.5,160.9 162.8,159.8 163,158.6 163.3,157.5 163.5,156.4 163.8,155.4 164,154.3 164.3,153.2 164.5,152.2 164.8,151.1 165,150.1 165.3,149 165.5,148 165.8,147 166,146 166.3,145 166.5,144 166.8,143 167,142.1 167.3,141.1 167.5,140.2 167.8,139.2 168,138.3 168.3,137.4 168.5,136.4 168.8,135.5 169,134.6 169.3,133.8 169.5,132.9 169.8,132 170,131.1 170.3,130.3 170.5,129.4 170.8,128.6 171,127.8 171.3,127 171.5,126.2 171.8,125.4 172,124.6 172.3,123.8 172.5,123 172.8,122.3 173,121.5 173.3,120.8 173.5,120 173.8,119.3 174,118.6 174.3,117.9 174.5,117.2 174.8,116.5 175,115.8 175.3,115.1 175.5,114.4 175.8,113.8 176,113.1 176.3,112.5 176.5,111.9 176.8,111.3 177,110.6 177.3,110 177.5,109.4 177.8,108.9 178,108.3 178.3,107.7 178.5,107.2 178.8,106.6 179,106.1 179.3,105.5 179.5,105 179.8,104.5 180,104 180.3,103.5 180.5,103 180.8,102.5 181,102.1 181.3,101.6 181.5,101.2 181.8,100.7 182,100.3 182.3,99.9 182.5,99.4 182.8,99 183,98.6 183.3,98.3 183.5,97.9 183.8,97.5 184,97.1 184.3,96.8 184.5,96.4 184.8,96.1 185,95.8 185.3,95.5 185.5,95.2 185.8,94.9 186,94.6 186.3,94.3 186.5,94 186.8,93.8 187,93.5 187.3,93.3 187.5,93 187.8,92.8 188,92.6 188.3,92.4 188.5,92.2 188.8,92 189,91.8 189.3,91.6 189.5,91.4 189.8,91.3 190,91.1 190.3,91 190.5,90.9 190.8,90.8 191,90.6 191.3,90.5 191.5,90.4 191.8,90.4 192,90.3 192.3,90.2 192.5,90.2 192.8,90.1 193,90.1 193.3,90 193.5,90 193.8,90 194,90 194.3,90 194.5,90 194.8,90 195,90.1 195.3,90.1 195.5,90.2 195.8,90.2 196,90.3 196.3,90.4 196.5,90.4 196.8,90.5 197,90.6 197.3,90.8 197.5,90.9 197.8,91 198,91.1 198.3,91.3 198.5,91.4 198.8,91.6 199,91.8 199.3,92 199.5,92.2 199.8,92.4 200,92.6 200.3,92.8 200.5,93 200.8,93.3 201,93.5 201.3,93.8 201.5,94 201.8,94.3 202,94.6 202.3,94.9 202.5,95.2 202.8,95.5 203,95.8 203.3,96.1 203.5,96.4 203.8,96.8 204,97.1 204.3,97.5 204.5,97.9 204.8,98.3 205,98.6 205.3,99 205.5,99.4 205.8,99.9 206,100.3 206.3,100.7 206.5,101.2 206.8,101.6 207,102.1 207.3,102.5 207.5,103 207.8,103.5 208,104 208.3,104.5 208.5,105 208.8,105.5 209,106.1 209.3,106.6 209.5,107.2 209.8,107.7 210,108.3 210.3,108.9 210.5,109.4 210.8,110 211,110.6 211.3,111.3 211.5,111.9 211.8,112.5 212,113.1 212.3,113.8 212.5,114.4 212.8,115.1 213,115.8 213.3,116.5 213.5,117.2 213.8,117.9 214,118.6 214.3,119.3 214.5,120 214.8,120.8 215,121.5 215.3,122.3 215.5,123 215.8,123.8 216,124.6 216.3,125.4 216.5,126.2 216.8,127 217,127.8 217.3,128.6 217.5,129.4 217.8,130.3 218,131.1 218.3,132 218.5,132.9 218.8,133.8 219,134.6 219.3,135.5 219.5,136.4 219.8,137.4 220,138.3 220.3,139.2 220.5,140.2 220.8,141.1 221,142.1 221.3,143 221.5,144 221.8,145 222,146 222.3,147 222.5,148 222.8,149 223,150.1 223.3,151.1 223.5,152.2 223.8,153.2 224,154.3 224.3,155.4 224.5,156.4 224.8,157.5 225,158.6 225.3,159.8 225.5,160.9 225.8,162 226,163.1 226.3,164.3 226.5,165.4 226.8,166.6 227,167.8 227.3,169 227.5,170.2 227.8,171.4 228,172.6 228.3,173.8 228.5,175 228.8,176.3 229,177.5 229.3,178.8 229.5,180 229.8,181.3 230,182.6 230.3,183.9 230.5,185.2 230.8,186.5 231,187.8 231.3,189.1 231.5,190.4 231.8,191.8 232,193.1 232.3,194.5 232.5,195.9 232.8,197.3 233,198.6 233.3,200 233.5,201.4 233.8,202.9 234,204.3 234.3,205.7 234.5,207.2 234.8,208.6 235,210.1 235.3,211.5 235.5,213 235.8,214.5 236,216 236.3,217.5 236.5,219 236.8,220.5 237,222.1 237.3,223.6 237.5,225.2 237.8,226.7 238,228.3 238.3,229.9 238.5,231.4 238.8,233 239,234.6 239.3,236.3 239.5,237.9 239.8,239.5 240,241.1 240.3,242.8 240.5,244.4 240.8,246.1 241,247.8 241.3,249.5 241.5,251.2 241.8,252.9 242,254.6 242.3,256.3 242.5,258 242.8,259.8 243,261.5 243.3,263.3 243.5,265 243.8,266.8 244,268.6 244.3,270.4 244.5,272.2 244.8,274 245,275.8 245.3,277.6 245.5,279.4 245.8,281.3 246,283.1 246.3,285 246.5,286.9 246.8,288.8 247,290.6 247.3,292.5 247.5,294.4 247.8,296.4 248,298.3 248.3,300.2 248.5,302.2 248.8,304.1 249,306.1 249.3,308 249.5,310 249.8,312 250,314 250.3,316 250.5,318 250.7,320 251,322.1 251.3,324.1 251.5,326.2" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="136.5,326.2 132.7,315.6 142.7,316.8" fill="currentColor"/>
  <polygon points="251.5,326.2 245.3,316.8 255.3,315.6" fill="currentColor"/>
</svg>
</div>
</div>

Notice that the only difference in the two equations is the negative sign
before the $x^2$ in the equation of the second graph. When the $x^2$ term is
positive, the parabola opens upward, and when the $x^2$ term is negative,
the parabola opens downward.

{{< callout type="info" >}}
  **Parabola orientation.** For the quadratic equation $y=ax^2+bx+c$, if:

  - $a>0$, the parabola opens upward.
  - $a<0$, the parabola opens downward.
{{< /callout >}}

**Example 10.44.** Determine whether each parabola opens upward or downward:
(a) $y=-3x^2+2x-4$; (b) $y=6x^2+7x-9$.

(a) Find the value of $a$. Since $a=-3$ is negative, the parabola will open
downward.

(b) Find the value of $a$. Since $a=6$ is positive, the parabola will open
upward.

{{< multiplechoice
  question="Determine whether the parabola $y=-2x^2-2x-3$ opens upward or downward."
  hint="Find the value and sign of $a$, the coefficient of $x^2$."
  answer="Downward"
>}}
Downward
Upward
{{< /multiplechoice >}}

## Find the axis of symmetry and vertex of a parabola

Look again at the two parabolas $y=x^2+4x+3$ and $y=-x^2+4x+3$. Do you see
that we could fold each parabola in half and that one side would lie on top
of the other? The "fold line" is a line of symmetry. We call it the **axis
of symmetry** of the parabola.

<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: '0.5rem' }}>
  <div class="ap-figure">
<svg role="img" aria-label="The upward-opening parabola y equals x squared plus 4x plus 3 with the dashed axis of symmetry x equals -2 through its vertex (-2, -1)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 354" width="332" height="354" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="328" x2="26" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="40" y1="328" x2="40" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="54" y1="328" x2="54" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="68" y1="328" x2="68" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="82" y1="328" x2="82" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="96" y1="328" x2="96" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="328" x2="110" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="124" y1="328" x2="124" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="328" x2="138" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="328" x2="152" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="328" x2="180" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="328" x2="194" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="328" x2="208" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="222" y1="328" x2="222" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="328" x2="236" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="328" x2="250" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="264" y1="328" x2="264" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="328" x2="278" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="292" y1="328" x2="292" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="328" x2="306" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="328" x2="306" y2="328" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="314" x2="306" y2="314" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="300" x2="306" y2="300" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="306" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="272" x2="306" y2="272" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="258" x2="306" y2="258" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="244" x2="306" y2="244" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="306" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="216" x2="306" y2="216" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="306" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="174" x2="306" y2="174" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="160" x2="306" y2="160" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="306" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="132" x2="306" y2="132" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="118" x2="306" y2="118" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="306" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="306" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="76" x2="306" y2="76" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="306" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="306" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <text x="166" y="14" font-size="13" fill="currentColor" text-anchor="middle">y = x² + 4x + 3; axis of symmetry x = −2</text>
  <line x1="24" y1="188" x2="308" y2="188" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="46" x2="166" y2="330" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,188 308,193 308,183" fill="currentColor"/>
  <polygon points="166,36 171,46 161,46" fill="currentColor"/>
  <polygon points="14,188 24,183 24,193" fill="currentColor"/>
  <polygon points="166,340 161,330 171,330" fill="currentColor"/>
  <text x="316" y="180" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="46" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="185" x2="26" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="203" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="54" y1="185" x2="54" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="203" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="82" y1="185" x2="82" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="82" y="203" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="110" y1="185" x2="110" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="203" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="138" y1="185" x2="138" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="138" y="203" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="194" y1="185" x2="194" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="203" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="222" y1="185" x2="222" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="222" y="203" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="250" y1="185" x2="250" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="203" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="278" y1="185" x2="278" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="278" y="203" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="306" y1="185" x2="306" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="203" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="163" y1="328" x2="169" y2="328" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="332" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="163" y1="300" x2="169" y2="300" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="304" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="163" y1="272" x2="169" y2="272" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="276" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="163" y1="244" x2="169" y2="244" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="248" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="163" y1="216" x2="169" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="220" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="163" y1="160" x2="169" y2="160" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="164" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="163" y1="132" x2="169" y2="132" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="136" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="163" y1="104" x2="169" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="108" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="163" y1="76" x2="169" y2="76" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="80" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="163" y1="48" x2="169" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="52" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="138" y1="334" x2="138" y2="42" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="91.8,49.2 92,50.9 92.3,52.5 92.5,54.1 92.8,55.7 93,57.4 93.3,59 93.5,60.6 93.8,62.1 94,63.7 94.3,65.3 94.5,66.8 94.8,68.4 95,69.9 95.3,71.5 95.5,73 95.8,74.5 96,76 96.3,77.5 96.5,79 96.8,80.5 97,81.9 97.3,83.4 97.5,84.8 97.8,86.3 98,87.7 98.3,89.1 98.5,90.6 98.8,92 99,93.4 99.3,94.7 99.5,96.1 99.8,97.5 100,98.9 100.3,100.2 100.5,101.6 100.8,102.9 101,104.2 101.3,105.5 101.5,106.8 101.8,108.1 102,109.4 102.3,110.7 102.5,112 102.8,113.2 103,114.5 103.3,115.7 103.5,117 103.8,118.2 104,119.4 104.3,120.6 104.5,121.8 104.8,123 105,124.2 105.3,125.4 105.5,126.6 105.8,127.7 106,128.9 106.3,130 106.5,131.1 106.8,132.2 107,133.4 107.3,134.5 107.5,135.6 107.8,136.6 108,137.7 108.3,138.8 108.5,139.8 108.8,140.9 109,141.9 109.3,143 109.5,144 109.8,145 110,146 110.3,147 110.5,148 110.8,149 111,149.9 111.3,150.9 111.5,151.8 111.8,152.8 112,153.7 112.3,154.6 112.5,155.6 112.8,156.5 113,157.4 113.3,158.2 113.5,159.1 113.8,160 114,160.9 114.3,161.7 114.5,162.6 114.8,163.4 115,164.2 115.3,165 115.5,165.8 115.8,166.6 116,167.4 116.3,168.2 116.5,169 116.8,169.7 117,170.5 117.3,171.2 117.5,172 117.8,172.7 118,173.4 118.3,174.1 118.5,174.8 118.8,175.5 119,176.2 119.3,176.9 119.5,177.6 119.8,178.2 120,178.9 120.3,179.5 120.5,180.1 120.8,180.7 121,181.4 121.3,182 121.5,182.6 121.8,183.1 122,183.7 122.3,184.3 122.5,184.8 122.8,185.4 123,185.9 123.3,186.5 123.5,187 123.8,187.5 124,188 124.3,188.5 124.5,189 124.8,189.5 125,189.9 125.3,190.4 125.5,190.8 125.8,191.3 126,191.7 126.3,192.1 126.5,192.6 126.8,193 127,193.4 127.3,193.7 127.5,194.1 127.8,194.5 128,194.9 128.3,195.2 128.5,195.6 128.8,195.9 129,196.2 129.3,196.5 129.5,196.8 129.8,197.1 130,197.4 130.3,197.7 130.5,198 130.8,198.2 131,198.5 131.3,198.7 131.5,199 131.8,199.2 132,199.4 132.3,199.6 132.5,199.8 132.8,200 133,200.2 133.3,200.4 133.5,200.6 133.8,200.7 134,200.9 134.3,201 134.5,201.1 134.8,201.2 135,201.4 135.3,201.5 135.5,201.6 135.8,201.6 136,201.7 136.3,201.8 136.5,201.8 136.8,201.9 137,201.9 137.3,202 137.5,202 137.8,202 138,202 138.3,202 138.5,202 138.8,202 139,201.9 139.3,201.9 139.5,201.8 139.8,201.8 140,201.7 140.3,201.6 140.5,201.6 140.8,201.5 141,201.4 141.3,201.2 141.5,201.1 141.8,201 142,200.9 142.3,200.7 142.5,200.6 142.8,200.4 143,200.2 143.3,200 143.5,199.8 143.8,199.6 144,199.4 144.3,199.2 144.5,199 144.8,198.7 145,198.5 145.3,198.2 145.5,198 145.8,197.7 146,197.4 146.3,197.1 146.5,196.8 146.8,196.5 147,196.2 147.3,195.9 147.5,195.6 147.8,195.2 148,194.9 148.3,194.5 148.5,194.1 148.8,193.7 149,193.4 149.3,193 149.5,192.6 149.8,192.1 150,191.7 150.3,191.3 150.5,190.8 150.8,190.4 151,189.9 151.3,189.5 151.5,189 151.8,188.5 152,188 152.3,187.5 152.5,187 152.8,186.5 153,185.9 153.3,185.4 153.5,184.8 153.8,184.3 154,183.7 154.3,183.1 154.5,182.6 154.8,182 155,181.4 155.3,180.7 155.5,180.1 155.8,179.5 156,178.9 156.3,178.2 156.5,177.6 156.8,176.9 157,176.2 157.3,175.5 157.5,174.8 157.8,174.1 158,173.4 158.3,172.7 158.5,172 158.8,171.2 159,170.5 159.3,169.7 159.5,169 159.8,168.2 160,167.4 160.3,166.6 160.5,165.8 160.8,165 161,164.2 161.3,163.4 161.5,162.6 161.8,161.7 162,160.9 162.3,160 162.5,159.1 162.8,158.2 163,157.4 163.3,156.5 163.5,155.6 163.8,154.6 164,153.7 164.3,152.8 164.5,151.8 164.8,150.9 165,149.9 165.3,149 165.5,148 165.8,147 166,146 166.3,145 166.5,144 166.8,143 167,141.9 167.3,140.9 167.5,139.8 167.8,138.8 168,137.7 168.3,136.6 168.5,135.6 168.8,134.5 169,133.4 169.3,132.2 169.5,131.1 169.8,130 170,128.9 170.3,127.7 170.5,126.6 170.8,125.4 171,124.2 171.3,123 171.5,121.8 171.8,120.6 172,119.4 172.3,118.2 172.5,117 172.8,115.7 173,114.5 173.3,113.2 173.5,112 173.8,110.7 174,109.4 174.3,108.1 174.5,106.8 174.8,105.5 175,104.2 175.3,102.9 175.5,101.6 175.8,100.2 176,98.9 176.3,97.5 176.5,96.1 176.8,94.7 177,93.4 177.3,92 177.5,90.6 177.8,89.1 178,87.7 178.3,86.3 178.5,84.8 178.8,83.4 179,81.9 179.3,80.5 179.5,79 179.8,77.5 180,76 180.3,74.5 180.5,73 180.8,71.5 181,69.9 181.3,68.4 181.5,66.8 181.8,65.3 182,63.7 182.3,62.1 182.5,60.6 182.8,59 183,57.4 183.3,55.7 183.5,54.1 183.8,52.5 184,50.9 184.3,49.2" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="91.8,49.2 98.2,58.3 88.3,59.8" fill="currentColor"/>
  <polygon points="184.3,49.2 187.7,59.8 177.8,58.3" fill="currentColor"/>
</svg>
</div>
  <div class="ap-figure">
<svg role="img" aria-label="The downward-opening parabola y equals negative x squared plus 4x plus 3 with the dashed axis of symmetry x equals 2 through its vertex (2, 7)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 354" width="332" height="354" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="328" x2="26" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="40" y1="328" x2="40" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="54" y1="328" x2="54" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="68" y1="328" x2="68" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="82" y1="328" x2="82" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="96" y1="328" x2="96" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="328" x2="110" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="124" y1="328" x2="124" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="328" x2="138" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="328" x2="152" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="328" x2="180" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="328" x2="194" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="328" x2="208" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="222" y1="328" x2="222" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="328" x2="236" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="328" x2="250" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="264" y1="328" x2="264" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="328" x2="278" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="292" y1="328" x2="292" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="328" x2="306" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="328" x2="306" y2="328" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="314" x2="306" y2="314" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="300" x2="306" y2="300" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="306" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="272" x2="306" y2="272" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="258" x2="306" y2="258" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="244" x2="306" y2="244" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="306" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="216" x2="306" y2="216" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="306" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="174" x2="306" y2="174" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="160" x2="306" y2="160" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="306" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="132" x2="306" y2="132" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="118" x2="306" y2="118" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="306" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="306" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="76" x2="306" y2="76" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="306" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="306" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <text x="166" y="14" font-size="13" fill="currentColor" text-anchor="middle">y = −x² + 4x + 3; axis of symmetry x = 2</text>
  <line x1="24" y1="188" x2="308" y2="188" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="46" x2="166" y2="330" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,188 308,193 308,183" fill="currentColor"/>
  <polygon points="166,36 171,46 161,46" fill="currentColor"/>
  <polygon points="14,188 24,183 24,193" fill="currentColor"/>
  <polygon points="166,340 161,330 171,330" fill="currentColor"/>
  <text x="316" y="180" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="46" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="185" x2="26" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="203" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="54" y1="185" x2="54" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="203" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="82" y1="185" x2="82" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="82" y="203" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="110" y1="185" x2="110" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="203" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="138" y1="185" x2="138" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="138" y="203" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="194" y1="185" x2="194" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="203" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="222" y1="185" x2="222" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="222" y="203" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="250" y1="185" x2="250" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="203" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="278" y1="185" x2="278" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="278" y="203" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="306" y1="185" x2="306" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="203" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="163" y1="328" x2="169" y2="328" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="332" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="163" y1="300" x2="169" y2="300" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="304" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="163" y1="272" x2="169" y2="272" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="276" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="163" y1="244" x2="169" y2="244" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="248" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="163" y1="216" x2="169" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="220" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="163" y1="160" x2="169" y2="160" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="164" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="163" y1="132" x2="169" y2="132" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="136" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="163" y1="104" x2="169" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="108" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="163" y1="76" x2="169" y2="76" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="80" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="163" y1="48" x2="169" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="52" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="194" y1="334" x2="194" y2="42" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="136.5,326.2 136.8,324.1 137,322.1 137.3,320 137.5,318 137.8,316 138,314 138.3,312 138.5,310 138.8,308 139,306.1 139.3,304.1 139.5,302.2 139.8,300.2 140,298.3 140.3,296.4 140.5,294.4 140.8,292.5 141,290.6 141.3,288.8 141.5,286.9 141.8,285 142,283.1 142.3,281.3 142.5,279.4 142.8,277.6 143,275.8 143.3,274 143.5,272.2 143.8,270.4 144,268.6 144.3,266.8 144.5,265 144.8,263.3 145,261.5 145.3,259.8 145.5,258 145.8,256.3 146,254.6 146.3,252.9 146.5,251.2 146.8,249.5 147,247.8 147.3,246.1 147.5,244.4 147.8,242.8 148,241.1 148.3,239.5 148.5,237.9 148.8,236.3 149,234.6 149.3,233 149.5,231.4 149.8,229.9 150,228.3 150.3,226.7 150.5,225.2 150.8,223.6 151,222.1 151.3,220.5 151.5,219 151.8,217.5 152,216 152.3,214.5 152.5,213 152.8,211.5 153,210.1 153.3,208.6 153.5,207.2 153.8,205.7 154,204.3 154.3,202.9 154.5,201.4 154.8,200 155,198.6 155.3,197.3 155.5,195.9 155.8,194.5 156,193.1 156.3,191.8 156.5,190.4 156.8,189.1 157,187.8 157.3,186.5 157.5,185.2 157.8,183.9 158,182.6 158.3,181.3 158.5,180 158.8,178.8 159,177.5 159.3,176.3 159.5,175 159.8,173.8 160,172.6 160.3,171.4 160.5,170.2 160.8,169 161,167.8 161.3,166.6 161.5,165.4 161.8,164.3 162,163.1 162.3,162 162.5,160.9 162.8,159.8 163,158.6 163.3,157.5 163.5,156.4 163.8,155.4 164,154.3 164.3,153.2 164.5,152.2 164.8,151.1 165,150.1 165.3,149 165.5,148 165.8,147 166,146 166.3,145 166.5,144 166.8,143 167,142.1 167.3,141.1 167.5,140.2 167.8,139.2 168,138.3 168.3,137.4 168.5,136.4 168.8,135.5 169,134.6 169.3,133.8 169.5,132.9 169.8,132 170,131.1 170.3,130.3 170.5,129.4 170.8,128.6 171,127.8 171.3,127 171.5,126.2 171.8,125.4 172,124.6 172.3,123.8 172.5,123 172.8,122.3 173,121.5 173.3,120.8 173.5,120 173.8,119.3 174,118.6 174.3,117.9 174.5,117.2 174.8,116.5 175,115.8 175.3,115.1 175.5,114.4 175.8,113.8 176,113.1 176.3,112.5 176.5,111.9 176.8,111.3 177,110.6 177.3,110 177.5,109.4 177.8,108.9 178,108.3 178.3,107.7 178.5,107.2 178.8,106.6 179,106.1 179.3,105.5 179.5,105 179.8,104.5 180,104 180.3,103.5 180.5,103 180.8,102.5 181,102.1 181.3,101.6 181.5,101.2 181.8,100.7 182,100.3 182.3,99.9 182.5,99.4 182.8,99 183,98.6 183.3,98.3 183.5,97.9 183.8,97.5 184,97.1 184.3,96.8 184.5,96.4 184.8,96.1 185,95.8 185.3,95.5 185.5,95.2 185.8,94.9 186,94.6 186.3,94.3 186.5,94 186.8,93.8 187,93.5 187.3,93.3 187.5,93 187.8,92.8 188,92.6 188.3,92.4 188.5,92.2 188.8,92 189,91.8 189.3,91.6 189.5,91.4 189.8,91.3 190,91.1 190.3,91 190.5,90.9 190.8,90.8 191,90.6 191.3,90.5 191.5,90.4 191.8,90.4 192,90.3 192.3,90.2 192.5,90.2 192.8,90.1 193,90.1 193.3,90 193.5,90 193.8,90 194,90 194.3,90 194.5,90 194.8,90 195,90.1 195.3,90.1 195.5,90.2 195.8,90.2 196,90.3 196.3,90.4 196.5,90.4 196.8,90.5 197,90.6 197.3,90.8 197.5,90.9 197.8,91 198,91.1 198.3,91.3 198.5,91.4 198.8,91.6 199,91.8 199.3,92 199.5,92.2 199.8,92.4 200,92.6 200.3,92.8 200.5,93 200.8,93.3 201,93.5 201.3,93.8 201.5,94 201.8,94.3 202,94.6 202.3,94.9 202.5,95.2 202.8,95.5 203,95.8 203.3,96.1 203.5,96.4 203.8,96.8 204,97.1 204.3,97.5 204.5,97.9 204.8,98.3 205,98.6 205.3,99 205.5,99.4 205.8,99.9 206,100.3 206.3,100.7 206.5,101.2 206.8,101.6 207,102.1 207.3,102.5 207.5,103 207.8,103.5 208,104 208.3,104.5 208.5,105 208.8,105.5 209,106.1 209.3,106.6 209.5,107.2 209.8,107.7 210,108.3 210.3,108.9 210.5,109.4 210.8,110 211,110.6 211.3,111.3 211.5,111.9 211.8,112.5 212,113.1 212.3,113.8 212.5,114.4 212.8,115.1 213,115.8 213.3,116.5 213.5,117.2 213.8,117.9 214,118.6 214.3,119.3 214.5,120 214.8,120.8 215,121.5 215.3,122.3 215.5,123 215.8,123.8 216,124.6 216.3,125.4 216.5,126.2 216.8,127 217,127.8 217.3,128.6 217.5,129.4 217.8,130.3 218,131.1 218.3,132 218.5,132.9 218.8,133.8 219,134.6 219.3,135.5 219.5,136.4 219.8,137.4 220,138.3 220.3,139.2 220.5,140.2 220.8,141.1 221,142.1 221.3,143 221.5,144 221.8,145 222,146 222.3,147 222.5,148 222.8,149 223,150.1 223.3,151.1 223.5,152.2 223.8,153.2 224,154.3 224.3,155.4 224.5,156.4 224.8,157.5 225,158.6 225.3,159.8 225.5,160.9 225.8,162 226,163.1 226.3,164.3 226.5,165.4 226.8,166.6 227,167.8 227.3,169 227.5,170.2 227.8,171.4 228,172.6 228.3,173.8 228.5,175 228.8,176.3 229,177.5 229.3,178.8 229.5,180 229.8,181.3 230,182.6 230.3,183.9 230.5,185.2 230.8,186.5 231,187.8 231.3,189.1 231.5,190.4 231.8,191.8 232,193.1 232.3,194.5 232.5,195.9 232.8,197.3 233,198.6 233.3,200 233.5,201.4 233.8,202.9 234,204.3 234.3,205.7 234.5,207.2 234.8,208.6 235,210.1 235.3,211.5 235.5,213 235.8,214.5 236,216 236.3,217.5 236.5,219 236.8,220.5 237,222.1 237.3,223.6 237.5,225.2 237.8,226.7 238,228.3 238.3,229.9 238.5,231.4 238.8,233 239,234.6 239.3,236.3 239.5,237.9 239.8,239.5 240,241.1 240.3,242.8 240.5,244.4 240.8,246.1 241,247.8 241.3,249.5 241.5,251.2 241.8,252.9 242,254.6 242.3,256.3 242.5,258 242.8,259.8 243,261.5 243.3,263.3 243.5,265 243.8,266.8 244,268.6 244.3,270.4 244.5,272.2 244.8,274 245,275.8 245.3,277.6 245.5,279.4 245.8,281.3 246,283.1 246.3,285 246.5,286.9 246.8,288.8 247,290.6 247.3,292.5 247.5,294.4 247.8,296.4 248,298.3 248.3,300.2 248.5,302.2 248.8,304.1 249,306.1 249.3,308 249.5,310 249.8,312 250,314 250.3,316 250.5,318 250.7,320 251,322.1 251.3,324.1 251.5,326.2" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="136.5,326.2 132.7,315.6 142.7,316.8" fill="currentColor"/>
  <polygon points="251.5,326.2 245.3,316.8 255.3,315.6" fill="currentColor"/>
</svg>
</div>
</div>

The equation of the axis of symmetry can be derived by using the Quadratic
Formula. We will omit the derivation here and proceed directly to using the
result. The equation of the axis of symmetry of the graph of
$y=ax^2+bx+c$ is

$$x=-\frac{b}{2a}.$$

So, to find the equation of symmetry of each of the parabolas we graphed
above, we will substitute into the formula $x=-\tfrac{b}{2a}$.

$$
\begin{array}{rcl}x&=&-\tfrac{4}{2\cdot1}\\[4pt]x&=&-2\end{array}
\qquad\text{and}\qquad
\begin{array}{rcl}x&=&-\tfrac{4}{2(-1)}\\[4pt]x&=&2\end{array}
$$

The point on the parabola that is on the axis of symmetry is the lowest or
highest point on the parabola, depending on whether the parabola opens
upwards or downwards. This point is called the **vertex** of the parabola.

We can easily find the coordinates of the vertex, because we know it is on
the axis of symmetry. This means its $x$-coordinate is $-\tfrac{b}{2a}$. To
find the $y$-coordinate of the vertex, we substitute the value of the
$x$-coordinate into the quadratic equation.

For $y=x^2+4x+3$, the axis is $x=-2$ and
$y=(-2)^2+4(-2)+3=-1$, so the vertex is $(-2,-1)$. For
$y=-x^2+4x+3$, the axis is $x=2$ and $y=-(2)^2+4(2)+3=7$, so the vertex is
$(2,7)$.

{{< callout type="info" >}}
  **Axis of symmetry and vertex of a parabola.** For a parabola with equation
  $y=ax^2+bx+c$:

  - The axis of symmetry is the line $x=-\tfrac{b}{2a}$.
  - The vertex is on the axis of symmetry, so its $x$-coordinate is
    $-\tfrac{b}{2a}$.

  To find the $y$-coordinate of the vertex, substitute
  $x=-\tfrac{b}{2a}$ into the quadratic equation.
{{< /callout >}}

**Example 10.45.** For the parabola $y=3x^2-6x+2$ find: (a) the axis of
symmetry and (b) the vertex.

(a) The axis of symmetry is the line $x=-\tfrac{b}{2a}$.

$$
\begin{array}{lrcl}
\text{Substitute the values of }a,b\text{ into the equation.}&x&=&-\tfrac{-6}{2\cdot3}\\[10pt]
\text{Simplify.}&x&=&1
\end{array}
$$

The axis of symmetry is the line $x=1$.

(b) The vertex is on the line of symmetry, so its $x$-coordinate will be
$x=1$. Substitute $x=1$ into the equation and solve for $y$.

$$
\begin{array}{lrcl}
&y&=&3x^2-6x+2\\[4pt]
\text{Substitute.}&y&=&3(1)^2-6(1)+2\\[4pt]
\text{Simplify.}&y&=&3\cdot1-6+2\\[4pt]
\text{This is the }y\text{-coordinate.}&y&=&-1
\end{array}
$$

The vertex is $(1,-1)$.

{{< fillin
  question="For the parabola $y=2x^2-8x+1$, find the $x$-coordinate of the axis of symmetry."
  answer="2"
  hint="Use $x=-\tfrac{b}{2a}$ with $a=2$ and $b=-8$."
>}}

## Find the intercepts of a parabola

When we graphed linear equations, we often used the $x$- and $y$-intercepts
to help us graph the lines. Finding the coordinates of the intercepts will
help us to graph parabolas, too.

Remember, at the **y-intercept** the value of $x$ is zero. So, to find the
$y$-intercept, we substitute $x=0$ into the equation. Both
$y=x^2+4x+3$ and $y=-x^2+4x+3$ have $y$-intercept $(0,3)$.

<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: '0.5rem' }}>
  <div class="ap-figure">
<svg role="img" aria-label="The upward-opening parabola y equals x squared plus 4x plus 3, showing y-intercept (0, 3), x-intercepts (-3, 0) and (-1, 0), and axis of symmetry x equals -2." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 354" width="332" height="354" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="328" x2="26" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="40" y1="328" x2="40" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="54" y1="328" x2="54" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="68" y1="328" x2="68" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="82" y1="328" x2="82" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="96" y1="328" x2="96" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="328" x2="110" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="124" y1="328" x2="124" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="328" x2="138" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="328" x2="152" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="328" x2="180" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="328" x2="194" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="328" x2="208" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="222" y1="328" x2="222" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="328" x2="236" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="328" x2="250" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="264" y1="328" x2="264" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="328" x2="278" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="292" y1="328" x2="292" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="328" x2="306" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="328" x2="306" y2="328" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="314" x2="306" y2="314" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="300" x2="306" y2="300" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="306" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="272" x2="306" y2="272" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="258" x2="306" y2="258" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="244" x2="306" y2="244" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="306" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="216" x2="306" y2="216" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="306" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="174" x2="306" y2="174" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="160" x2="306" y2="160" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="306" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="132" x2="306" y2="132" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="118" x2="306" y2="118" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="306" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="306" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="76" x2="306" y2="76" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="306" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="306" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <text x="166" y="14" font-size="13" fill="currentColor" text-anchor="middle">y = x² + 4x + 3</text>
  <line x1="24" y1="188" x2="308" y2="188" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="46" x2="166" y2="330" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,188 308,193 308,183" fill="currentColor"/>
  <polygon points="166,36 171,46 161,46" fill="currentColor"/>
  <polygon points="14,188 24,183 24,193" fill="currentColor"/>
  <polygon points="166,340 161,330 171,330" fill="currentColor"/>
  <text x="316" y="180" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="46" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="185" x2="26" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="203" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="54" y1="185" x2="54" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="203" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="82" y1="185" x2="82" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="82" y="203" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="110" y1="185" x2="110" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="203" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="138" y1="185" x2="138" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="138" y="203" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="194" y1="185" x2="194" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="203" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="222" y1="185" x2="222" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="222" y="203" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="250" y1="185" x2="250" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="203" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="278" y1="185" x2="278" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="278" y="203" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="306" y1="185" x2="306" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="203" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="163" y1="328" x2="169" y2="328" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="332" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="163" y1="300" x2="169" y2="300" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="304" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="163" y1="272" x2="169" y2="272" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="276" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="163" y1="244" x2="169" y2="244" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="248" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="163" y1="216" x2="169" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="220" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="163" y1="160" x2="169" y2="160" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="164" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="163" y1="132" x2="169" y2="132" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="136" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="163" y1="104" x2="169" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="108" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="163" y1="76" x2="169" y2="76" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="80" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="163" y1="48" x2="169" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="52" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="138" y1="334" x2="138" y2="42" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="91.8,49.2 92,50.9 92.3,52.5 92.5,54.1 92.8,55.7 93,57.4 93.3,59 93.5,60.6 93.8,62.1 94,63.7 94.3,65.3 94.5,66.8 94.8,68.4 95,69.9 95.3,71.5 95.5,73 95.8,74.5 96,76 96.3,77.5 96.5,79 96.8,80.5 97,81.9 97.3,83.4 97.5,84.8 97.8,86.3 98,87.7 98.3,89.1 98.5,90.6 98.8,92 99,93.4 99.3,94.7 99.5,96.1 99.8,97.5 100,98.9 100.3,100.2 100.5,101.6 100.8,102.9 101,104.2 101.3,105.5 101.5,106.8 101.8,108.1 102,109.4 102.3,110.7 102.5,112 102.8,113.2 103,114.5 103.3,115.7 103.5,117 103.8,118.2 104,119.4 104.3,120.6 104.5,121.8 104.8,123 105,124.2 105.3,125.4 105.5,126.6 105.8,127.7 106,128.9 106.3,130 106.5,131.1 106.8,132.2 107,133.4 107.3,134.5 107.5,135.6 107.8,136.6 108,137.7 108.3,138.8 108.5,139.8 108.8,140.9 109,141.9 109.3,143 109.5,144 109.8,145 110,146 110.3,147 110.5,148 110.8,149 111,149.9 111.3,150.9 111.5,151.8 111.8,152.8 112,153.7 112.3,154.6 112.5,155.6 112.8,156.5 113,157.4 113.3,158.2 113.5,159.1 113.8,160 114,160.9 114.3,161.7 114.5,162.6 114.8,163.4 115,164.2 115.3,165 115.5,165.8 115.8,166.6 116,167.4 116.3,168.2 116.5,169 116.8,169.7 117,170.5 117.3,171.2 117.5,172 117.8,172.7 118,173.4 118.3,174.1 118.5,174.8 118.8,175.5 119,176.2 119.3,176.9 119.5,177.6 119.8,178.2 120,178.9 120.3,179.5 120.5,180.1 120.8,180.7 121,181.4 121.3,182 121.5,182.6 121.8,183.1 122,183.7 122.3,184.3 122.5,184.8 122.8,185.4 123,185.9 123.3,186.5 123.5,187 123.8,187.5 124,188 124.3,188.5 124.5,189 124.8,189.5 125,189.9 125.3,190.4 125.5,190.8 125.8,191.3 126,191.7 126.3,192.1 126.5,192.6 126.8,193 127,193.4 127.3,193.7 127.5,194.1 127.8,194.5 128,194.9 128.3,195.2 128.5,195.6 128.8,195.9 129,196.2 129.3,196.5 129.5,196.8 129.8,197.1 130,197.4 130.3,197.7 130.5,198 130.8,198.2 131,198.5 131.3,198.7 131.5,199 131.8,199.2 132,199.4 132.3,199.6 132.5,199.8 132.8,200 133,200.2 133.3,200.4 133.5,200.6 133.8,200.7 134,200.9 134.3,201 134.5,201.1 134.8,201.2 135,201.4 135.3,201.5 135.5,201.6 135.8,201.6 136,201.7 136.3,201.8 136.5,201.8 136.8,201.9 137,201.9 137.3,202 137.5,202 137.8,202 138,202 138.3,202 138.5,202 138.8,202 139,201.9 139.3,201.9 139.5,201.8 139.8,201.8 140,201.7 140.3,201.6 140.5,201.6 140.8,201.5 141,201.4 141.3,201.2 141.5,201.1 141.8,201 142,200.9 142.3,200.7 142.5,200.6 142.8,200.4 143,200.2 143.3,200 143.5,199.8 143.8,199.6 144,199.4 144.3,199.2 144.5,199 144.8,198.7 145,198.5 145.3,198.2 145.5,198 145.8,197.7 146,197.4 146.3,197.1 146.5,196.8 146.8,196.5 147,196.2 147.3,195.9 147.5,195.6 147.8,195.2 148,194.9 148.3,194.5 148.5,194.1 148.8,193.7 149,193.4 149.3,193 149.5,192.6 149.8,192.1 150,191.7 150.3,191.3 150.5,190.8 150.8,190.4 151,189.9 151.3,189.5 151.5,189 151.8,188.5 152,188 152.3,187.5 152.5,187 152.8,186.5 153,185.9 153.3,185.4 153.5,184.8 153.8,184.3 154,183.7 154.3,183.1 154.5,182.6 154.8,182 155,181.4 155.3,180.7 155.5,180.1 155.8,179.5 156,178.9 156.3,178.2 156.5,177.6 156.8,176.9 157,176.2 157.3,175.5 157.5,174.8 157.8,174.1 158,173.4 158.3,172.7 158.5,172 158.8,171.2 159,170.5 159.3,169.7 159.5,169 159.8,168.2 160,167.4 160.3,166.6 160.5,165.8 160.8,165 161,164.2 161.3,163.4 161.5,162.6 161.8,161.7 162,160.9 162.3,160 162.5,159.1 162.8,158.2 163,157.4 163.3,156.5 163.5,155.6 163.8,154.6 164,153.7 164.3,152.8 164.5,151.8 164.8,150.9 165,149.9 165.3,149 165.5,148 165.8,147 166,146 166.3,145 166.5,144 166.8,143 167,141.9 167.3,140.9 167.5,139.8 167.8,138.8 168,137.7 168.3,136.6 168.5,135.6 168.8,134.5 169,133.4 169.3,132.2 169.5,131.1 169.8,130 170,128.9 170.3,127.7 170.5,126.6 170.8,125.4 171,124.2 171.3,123 171.5,121.8 171.8,120.6 172,119.4 172.3,118.2 172.5,117 172.8,115.7 173,114.5 173.3,113.2 173.5,112 173.8,110.7 174,109.4 174.3,108.1 174.5,106.8 174.8,105.5 175,104.2 175.3,102.9 175.5,101.6 175.8,100.2 176,98.9 176.3,97.5 176.5,96.1 176.8,94.7 177,93.4 177.3,92 177.5,90.6 177.8,89.1 178,87.7 178.3,86.3 178.5,84.8 178.8,83.4 179,81.9 179.3,80.5 179.5,79 179.8,77.5 180,76 180.3,74.5 180.5,73 180.8,71.5 181,69.9 181.3,68.4 181.5,66.8 181.8,65.3 182,63.7 182.3,62.1 182.5,60.6 182.8,59 183,57.4 183.3,55.7 183.5,54.1 183.8,52.5 184,50.9 184.3,49.2" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="91.8,49.2 98.2,58.3 88.3,59.8" fill="currentColor"/>
  <polygon points="184.3,49.2 187.7,59.8 177.8,58.3" fill="currentColor"/>
  <circle cx="166" cy="146" r="4" fill="currentColor"/>
  <circle cx="124" cy="188" r="4" fill="currentColor"/>
  <circle cx="152" cy="188" r="4" fill="currentColor"/>
</svg>
</div>
  <div class="ap-figure">
<svg role="img" aria-label="The downward-opening parabola y equals negative x squared plus 4x plus 3, showing y-intercept (0, 3), approximate x-intercepts (-0.6, 0) and (4.6, 0), and axis of symmetry x equals 2." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 354" width="332" height="354" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="328" x2="26" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="40" y1="328" x2="40" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="54" y1="328" x2="54" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="68" y1="328" x2="68" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="82" y1="328" x2="82" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="96" y1="328" x2="96" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="328" x2="110" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="124" y1="328" x2="124" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="328" x2="138" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="328" x2="152" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="328" x2="180" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="328" x2="194" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="328" x2="208" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="222" y1="328" x2="222" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="328" x2="236" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="328" x2="250" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="264" y1="328" x2="264" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="328" x2="278" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="292" y1="328" x2="292" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="328" x2="306" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="328" x2="306" y2="328" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="314" x2="306" y2="314" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="300" x2="306" y2="300" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="306" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="272" x2="306" y2="272" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="258" x2="306" y2="258" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="244" x2="306" y2="244" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="306" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="216" x2="306" y2="216" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="306" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="174" x2="306" y2="174" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="160" x2="306" y2="160" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="306" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="132" x2="306" y2="132" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="118" x2="306" y2="118" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="306" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="306" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="76" x2="306" y2="76" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="306" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="306" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <text x="166" y="14" font-size="13" fill="currentColor" text-anchor="middle">y = −x² + 4x + 3</text>
  <line x1="24" y1="188" x2="308" y2="188" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="46" x2="166" y2="330" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,188 308,193 308,183" fill="currentColor"/>
  <polygon points="166,36 171,46 161,46" fill="currentColor"/>
  <polygon points="14,188 24,183 24,193" fill="currentColor"/>
  <polygon points="166,340 161,330 171,330" fill="currentColor"/>
  <text x="316" y="180" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="46" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="185" x2="26" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="203" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="54" y1="185" x2="54" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="203" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="82" y1="185" x2="82" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="82" y="203" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="110" y1="185" x2="110" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="203" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="138" y1="185" x2="138" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="138" y="203" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="194" y1="185" x2="194" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="203" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="222" y1="185" x2="222" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="222" y="203" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="250" y1="185" x2="250" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="203" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="278" y1="185" x2="278" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="278" y="203" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="306" y1="185" x2="306" y2="191" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="203" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="163" y1="328" x2="169" y2="328" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="332" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="163" y1="300" x2="169" y2="300" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="304" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="163" y1="272" x2="169" y2="272" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="276" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="163" y1="244" x2="169" y2="244" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="248" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="163" y1="216" x2="169" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="220" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="163" y1="160" x2="169" y2="160" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="164" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="163" y1="132" x2="169" y2="132" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="136" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="163" y1="104" x2="169" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="108" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="163" y1="76" x2="169" y2="76" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="80" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="163" y1="48" x2="169" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="52" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="194" y1="334" x2="194" y2="42" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="136.5,326.2 136.8,324.1 137,322.1 137.3,320 137.5,318 137.8,316 138,314 138.3,312 138.5,310 138.8,308 139,306.1 139.3,304.1 139.5,302.2 139.8,300.2 140,298.3 140.3,296.4 140.5,294.4 140.8,292.5 141,290.6 141.3,288.8 141.5,286.9 141.8,285 142,283.1 142.3,281.3 142.5,279.4 142.8,277.6 143,275.8 143.3,274 143.5,272.2 143.8,270.4 144,268.6 144.3,266.8 144.5,265 144.8,263.3 145,261.5 145.3,259.8 145.5,258 145.8,256.3 146,254.6 146.3,252.9 146.5,251.2 146.8,249.5 147,247.8 147.3,246.1 147.5,244.4 147.8,242.8 148,241.1 148.3,239.5 148.5,237.9 148.8,236.3 149,234.6 149.3,233 149.5,231.4 149.8,229.9 150,228.3 150.3,226.7 150.5,225.2 150.8,223.6 151,222.1 151.3,220.5 151.5,219 151.8,217.5 152,216 152.3,214.5 152.5,213 152.8,211.5 153,210.1 153.3,208.6 153.5,207.2 153.8,205.7 154,204.3 154.3,202.9 154.5,201.4 154.8,200 155,198.6 155.3,197.3 155.5,195.9 155.8,194.5 156,193.1 156.3,191.8 156.5,190.4 156.8,189.1 157,187.8 157.3,186.5 157.5,185.2 157.8,183.9 158,182.6 158.3,181.3 158.5,180 158.8,178.8 159,177.5 159.3,176.3 159.5,175 159.8,173.8 160,172.6 160.3,171.4 160.5,170.2 160.8,169 161,167.8 161.3,166.6 161.5,165.4 161.8,164.3 162,163.1 162.3,162 162.5,160.9 162.8,159.8 163,158.6 163.3,157.5 163.5,156.4 163.8,155.4 164,154.3 164.3,153.2 164.5,152.2 164.8,151.1 165,150.1 165.3,149 165.5,148 165.8,147 166,146 166.3,145 166.5,144 166.8,143 167,142.1 167.3,141.1 167.5,140.2 167.8,139.2 168,138.3 168.3,137.4 168.5,136.4 168.8,135.5 169,134.6 169.3,133.8 169.5,132.9 169.8,132 170,131.1 170.3,130.3 170.5,129.4 170.8,128.6 171,127.8 171.3,127 171.5,126.2 171.8,125.4 172,124.6 172.3,123.8 172.5,123 172.8,122.3 173,121.5 173.3,120.8 173.5,120 173.8,119.3 174,118.6 174.3,117.9 174.5,117.2 174.8,116.5 175,115.8 175.3,115.1 175.5,114.4 175.8,113.8 176,113.1 176.3,112.5 176.5,111.9 176.8,111.3 177,110.6 177.3,110 177.5,109.4 177.8,108.9 178,108.3 178.3,107.7 178.5,107.2 178.8,106.6 179,106.1 179.3,105.5 179.5,105 179.8,104.5 180,104 180.3,103.5 180.5,103 180.8,102.5 181,102.1 181.3,101.6 181.5,101.2 181.8,100.7 182,100.3 182.3,99.9 182.5,99.4 182.8,99 183,98.6 183.3,98.3 183.5,97.9 183.8,97.5 184,97.1 184.3,96.8 184.5,96.4 184.8,96.1 185,95.8 185.3,95.5 185.5,95.2 185.8,94.9 186,94.6 186.3,94.3 186.5,94 186.8,93.8 187,93.5 187.3,93.3 187.5,93 187.8,92.8 188,92.6 188.3,92.4 188.5,92.2 188.8,92 189,91.8 189.3,91.6 189.5,91.4 189.8,91.3 190,91.1 190.3,91 190.5,90.9 190.8,90.8 191,90.6 191.3,90.5 191.5,90.4 191.8,90.4 192,90.3 192.3,90.2 192.5,90.2 192.8,90.1 193,90.1 193.3,90 193.5,90 193.8,90 194,90 194.3,90 194.5,90 194.8,90 195,90.1 195.3,90.1 195.5,90.2 195.8,90.2 196,90.3 196.3,90.4 196.5,90.4 196.8,90.5 197,90.6 197.3,90.8 197.5,90.9 197.8,91 198,91.1 198.3,91.3 198.5,91.4 198.8,91.6 199,91.8 199.3,92 199.5,92.2 199.8,92.4 200,92.6 200.3,92.8 200.5,93 200.8,93.3 201,93.5 201.3,93.8 201.5,94 201.8,94.3 202,94.6 202.3,94.9 202.5,95.2 202.8,95.5 203,95.8 203.3,96.1 203.5,96.4 203.8,96.8 204,97.1 204.3,97.5 204.5,97.9 204.8,98.3 205,98.6 205.3,99 205.5,99.4 205.8,99.9 206,100.3 206.3,100.7 206.5,101.2 206.8,101.6 207,102.1 207.3,102.5 207.5,103 207.8,103.5 208,104 208.3,104.5 208.5,105 208.8,105.5 209,106.1 209.3,106.6 209.5,107.2 209.8,107.7 210,108.3 210.3,108.9 210.5,109.4 210.8,110 211,110.6 211.3,111.3 211.5,111.9 211.8,112.5 212,113.1 212.3,113.8 212.5,114.4 212.8,115.1 213,115.8 213.3,116.5 213.5,117.2 213.8,117.9 214,118.6 214.3,119.3 214.5,120 214.8,120.8 215,121.5 215.3,122.3 215.5,123 215.8,123.8 216,124.6 216.3,125.4 216.5,126.2 216.8,127 217,127.8 217.3,128.6 217.5,129.4 217.8,130.3 218,131.1 218.3,132 218.5,132.9 218.8,133.8 219,134.6 219.3,135.5 219.5,136.4 219.8,137.4 220,138.3 220.3,139.2 220.5,140.2 220.8,141.1 221,142.1 221.3,143 221.5,144 221.8,145 222,146 222.3,147 222.5,148 222.8,149 223,150.1 223.3,151.1 223.5,152.2 223.8,153.2 224,154.3 224.3,155.4 224.5,156.4 224.8,157.5 225,158.6 225.3,159.8 225.5,160.9 225.8,162 226,163.1 226.3,164.3 226.5,165.4 226.8,166.6 227,167.8 227.3,169 227.5,170.2 227.8,171.4 228,172.6 228.3,173.8 228.5,175 228.8,176.3 229,177.5 229.3,178.8 229.5,180 229.8,181.3 230,182.6 230.3,183.9 230.5,185.2 230.8,186.5 231,187.8 231.3,189.1 231.5,190.4 231.8,191.8 232,193.1 232.3,194.5 232.5,195.9 232.8,197.3 233,198.6 233.3,200 233.5,201.4 233.8,202.9 234,204.3 234.3,205.7 234.5,207.2 234.8,208.6 235,210.1 235.3,211.5 235.5,213 235.8,214.5 236,216 236.3,217.5 236.5,219 236.8,220.5 237,222.1 237.3,223.6 237.5,225.2 237.8,226.7 238,228.3 238.3,229.9 238.5,231.4 238.8,233 239,234.6 239.3,236.3 239.5,237.9 239.8,239.5 240,241.1 240.3,242.8 240.5,244.4 240.8,246.1 241,247.8 241.3,249.5 241.5,251.2 241.8,252.9 242,254.6 242.3,256.3 242.5,258 242.8,259.8 243,261.5 243.3,263.3 243.5,265 243.8,266.8 244,268.6 244.3,270.4 244.5,272.2 244.8,274 245,275.8 245.3,277.6 245.5,279.4 245.8,281.3 246,283.1 246.3,285 246.5,286.9 246.8,288.8 247,290.6 247.3,292.5 247.5,294.4 247.8,296.4 248,298.3 248.3,300.2 248.5,302.2 248.8,304.1 249,306.1 249.3,308 249.5,310 249.8,312 250,314 250.3,316 250.5,318 250.7,320 251,322.1 251.3,324.1 251.5,326.2" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="136.5,326.2 132.7,315.6 142.7,316.8" fill="currentColor"/>
  <polygon points="251.5,326.2 245.3,316.8 255.3,315.6" fill="currentColor"/>
  <circle cx="166" cy="146" r="4" fill="currentColor"/>
  <circle cx="157" cy="188" r="4" fill="currentColor"/>
  <circle cx="231" cy="188" r="4" fill="currentColor"/>
</svg>
</div>
</div>

At an **x-intercept**, the value of $y$ is zero. To find an $x$-intercept,
we substitute $y=0$ into the equation. In other words, we will need to solve
$0=ax^2+bx+c$ for $x$.

But solving quadratic equations like this is exactly what we have done
earlier in this chapter.

First, we will find the $x$-intercepts of $y=x^2+4x+3$.

$$
\begin{array}{lrcl}
\text{Let }y=0.&0&=&x^2+4x+3\\[4pt]
\text{Factor.}&0&=&(x+1)(x+3)\\[4pt]
\text{Use the zero product property.}&&&x+1=0,\ x+3=0\\[4pt]
\text{Solve.}&&&x=-1,\ x=-3
\end{array}
$$

The $x$-intercepts are $(-1,0)$ and $(-3,0)$.

Now, we will find the $x$-intercepts of $y=-x^2+4x+3$.

$$
\begin{array}{lrcl}
\text{Let }y=0.&0&=&-x^2+4x+3\\[4pt]
\text{Use the Quadratic Formula.}&x&=&\tfrac{-4\pm\sqrt{4^2-4(-1)(3)}}{2(-1)}\\[10pt]
\text{Simplify.}&x&=&2\pm\sqrt7
\end{array}
$$

The $x$-intercepts are $(2+\sqrt7,0)$ and $(2-\sqrt7,0)$, approximately
$(4.6,0)$ and $(-0.6,0)$.

{{< callout type="info" >}}
  **Find the intercepts of a parabola.** For $y=ax^2+bx+c$:

  - **y-intercept:** Let $x=0$ and solve for $y$.
  - **x-intercepts:** Let $y=0$ and solve for $x$.
{{< /callout >}}

**Example 10.46.** Find the intercepts of $y=x^2-2x-8$.

To find the $y$-intercept, let $x=0$ and solve for $y$:
$y=0^2-2\cdot0-8=-8$. The $y$-intercept is $(0,-8)$.

To find the $x$-intercept, let $y=0$ and solve for $x$.

$$
\begin{array}{lrcl}
&0&=&x^2-2x-8\\[4pt]
\text{Solve by factoring.}&0&=&(x-4)(x+2)\\[4pt]
&&&0=x-4\quad 0=x+2\\[4pt]
&&&4=x\quad -2=x
\end{array}
$$

The $x$-intercepts are $(4,0)$ and $(-2,0)$.

{{< fillin
  question="Find the $x$-intercepts of $y=x^2+2x-8$. Enter the $x$-values separated by commas from least to greatest."
  answer="-4,2"
  answerDisplay="$-4,2$"
  hint="Let $y=0$ and factor $x^2+2x-8$."
>}}

In this chapter, we have been solving quadratic equations of the form
$ax^2+bx+c=0$. We solved for $x$ and the results were the solutions to the
equation.

We are now looking at quadratic equations in two variables of the form
$y=ax^2+bx+c$. The graphs of these equations are parabolas. The
$x$-intercepts of the parabolas occur where $y=0$.

The solutions of the quadratic equation are the $x$ values of the
$x$-intercepts.

Earlier, we saw that quadratic equations have 2, 1, or 0 solutions. The
graphs below show parabolas for these three cases. Since the
solutions of the equations give the $x$-intercepts of the graphs, the number
of $x$-intercepts is the same as the number of solutions.

<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: '0.5rem' }}>
  <div class="ap-figure">
<svg role="img" aria-label="An upward-opening parabola crossing the x-axis twice, representing a positive discriminant and two real solutions." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 266" width="196" height="266" font-family="Helvetica, Arial, sans-serif">
  <text x="98" y="14" font-size="13" fill="currentColor" text-anchor="middle">b² − 4ac &gt; 0: two x−intercepts</text>
  <line x1="24" y1="144" x2="172" y2="144" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="46" x2="98" y2="242" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,144 172,149 172,139" fill="currentColor"/>
  <polygon points="98,36 103,46 93,46" fill="currentColor"/>
  <polygon points="14,144 24,139 24,149" fill="currentColor"/>
  <polygon points="98,252 93,242 103,242" fill="currentColor"/>
  <text x="180" y="136" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="46" font-size="13" fill="currentColor" font-style="italic">y</text>
  <polyline points="39.3,48.2 39.5,49.4 39.8,50.6 40,51.8 40.3,53 40.5,54.2 40.8,55.4 41,56.6 41.3,57.8 41.5,59 41.8,60.2 42,61.3 42.3,62.5 42.5,63.7 42.8,64.8 43,66 43.3,67.1 43.5,68.2 43.8,69.4 44,70.5 44.3,71.6 44.5,72.7 44.8,73.9 45,75 45.3,76.1 45.5,77.2 45.8,78.2 46,79.3 46.3,80.4 46.5,81.5 46.8,82.6 47,83.6 47.3,84.7 47.5,85.7 47.8,86.8 48,87.8 48.3,88.9 48.5,89.9 48.8,90.9 49,92 49.3,93 49.5,94 49.8,95 50,96 50.3,97 50.5,98 50.8,99 51,100 51.3,100.9 51.5,101.9 51.8,102.9 52,103.8 52.3,104.8 52.5,105.7 52.8,106.7 53,107.6 53.3,108.6 53.5,109.5 53.8,110.4 54,111.3 54.3,112.2 54.5,113.2 54.8,114.1 55,115 55.3,115.9 55.5,116.7 55.8,117.6 56,118.5 56.3,119.4 56.5,120.2 56.8,121.1 57,122 57.3,122.8 57.5,123.7 57.8,124.5 58,125.3 58.3,126.2 58.5,127 58.8,127.8 59,128.6 59.3,129.4 59.5,130.2 59.8,131 60,131.8 60.3,132.6 60.5,133.4 60.8,134.2 61,135 61.3,135.7 61.5,136.5 61.8,137.2 62,138 62.3,138.7 62.5,139.5 62.8,140.2 63,141 63.3,141.7 63.5,142.4 63.8,143.1 64,143.8 64.3,144.5 64.5,145.2 64.8,145.9 65,146.6 65.3,147.3 65.5,148 65.8,148.7 66,149.3 66.3,150 66.5,150.7 66.8,151.3 67,152 67.3,152.6 67.5,153.2 67.8,153.9 68,154.5 68.3,155.1 68.5,155.7 68.8,156.4 69,157 69.3,157.6 69.5,158.2 69.8,158.7 70,159.3 70.3,159.9 70.5,160.5 70.8,161.1 71,161.6 71.3,162.2 71.5,162.7 71.8,163.3 72,163.8 72.3,164.4 72.5,164.9 72.8,165.4 73,166 73.3,166.5 73.5,167 73.8,167.5 74,168 74.3,168.5 74.5,169 74.8,169.5 75,170 75.3,170.4 75.5,170.9 75.8,171.4 76,171.8 76.3,172.3 76.5,172.7 76.8,173.2 77,173.6 77.3,174.1 77.5,174.5 77.8,174.9 78,175.3 78.3,175.7 78.5,176.2 78.8,176.6 79,177 79.3,177.4 79.5,177.7 79.8,178.1 80,178.5 80.3,178.9 80.5,179.2 80.8,179.6 81,180 81.3,180.3 81.5,180.7 81.8,181 82,181.3 82.3,181.7 82.5,182 82.8,182.3 83,182.6 83.3,182.9 83.5,183.2 83.8,183.5 84,183.8 84.3,184.1 84.5,184.4 84.8,184.7 85,185 85.3,185.2 85.5,185.5 85.8,185.7 86,186 86.3,186.2 86.5,186.5 86.8,186.7 87,187 87.3,187.2 87.5,187.4 87.8,187.6 88,187.8 88.3,188 88.5,188.2 88.8,188.4 89,188.6 89.3,188.8 89.5,189 89.8,189.2 90,189.3 90.3,189.5 90.5,189.7 90.8,189.8 91,190 91.3,190.1 91.5,190.2 91.8,190.4 92,190.5 92.3,190.6 92.5,190.7 92.8,190.9 93,191 93.3,191.1 93.5,191.2 93.8,191.2 94,191.3 94.3,191.4 94.5,191.5 94.8,191.6 95,191.6 95.3,191.7 95.5,191.7 95.8,191.8 96,191.8 96.3,191.9 96.5,191.9 96.8,191.9 97,192 97.3,192 97.5,192 97.8,192 98,192 98.3,192 98.5,192 98.8,192 99,192 99.3,191.9 99.5,191.9 99.8,191.9 100,191.8 100.3,191.8 100.5,191.7 100.8,191.7 101,191.6 101.3,191.6 101.5,191.5 101.8,191.4 102,191.3 102.3,191.2 102.5,191.2 102.8,191.1 103,191 103.3,190.9 103.5,190.7 103.8,190.6 104,190.5 104.3,190.4 104.5,190.2 104.8,190.1 105,190 105.3,189.8 105.5,189.7 105.8,189.5 106,189.3 106.3,189.2 106.5,189 106.8,188.8 107,188.6 107.3,188.4 107.5,188.2 107.8,188 108,187.8 108.3,187.6 108.5,187.4 108.8,187.2 109,187 109.3,186.7 109.5,186.5 109.8,186.2 110,186 110.3,185.7 110.5,185.5 110.8,185.2 111,185 111.3,184.7 111.5,184.4 111.8,184.1 112,183.8 112.3,183.5 112.5,183.2 112.8,182.9 113,182.6 113.3,182.3 113.5,182 113.8,181.7 114,181.3 114.3,181 114.5,180.7 114.8,180.3 115,180 115.3,179.6 115.5,179.2 115.8,178.9 116,178.5 116.3,178.1 116.5,177.7 116.8,177.4 117,177 117.3,176.6 117.5,176.2 117.8,175.7 118,175.3 118.3,174.9 118.5,174.5 118.8,174.1 119,173.6 119.3,173.2 119.5,172.7 119.8,172.3 120,171.8 120.3,171.4 120.5,170.9 120.8,170.4 121,170 121.3,169.5 121.5,169 121.8,168.5 122,168 122.3,167.5 122.5,167 122.8,166.5 123,166 123.3,165.4 123.5,164.9 123.8,164.4 124,163.8 124.3,163.3 124.5,162.7 124.8,162.2 125,161.6 125.3,161.1 125.5,160.5 125.8,159.9 126,159.3 126.3,158.7 126.5,158.2 126.8,157.6 127,157 127.3,156.4 127.5,155.7 127.8,155.1 128,154.5 128.3,153.9 128.5,153.2 128.8,152.6 129,152 129.3,151.3 129.5,150.7 129.8,150 130,149.3 130.3,148.7 130.5,148 130.8,147.3 131,146.6 131.3,145.9 131.5,145.2 131.8,144.5 132,143.8 132.3,143.1 132.5,142.4 132.8,141.7 133,141 133.3,140.2 133.5,139.5 133.8,138.7 134,138 134.3,137.2 134.5,136.5 134.8,135.7 135,135 135.3,134.2 135.5,133.4 135.8,132.6 136,131.8 136.3,131 136.5,130.2 136.8,129.4 137,128.6 137.3,127.8 137.5,127 137.8,126.2 138,125.3 138.3,124.5 138.5,123.7 138.8,122.8 139,122 139.3,121.1 139.5,120.2 139.8,119.4 140,118.5 140.3,117.6 140.5,116.7 140.8,115.9 141,115 141.3,114.1 141.5,113.2 141.8,112.2 142,111.3 142.3,110.4 142.5,109.5 142.8,108.6 143,107.6 143.3,106.7 143.5,105.7 143.8,104.8 144,103.8 144.3,102.9 144.5,101.9 144.8,100.9 145,100 145.3,99 145.5,98 145.8,97 146,96 146.3,95 146.5,94 146.8,93 147,92 147.3,90.9 147.5,89.9 147.8,88.9 148,87.8 148.3,86.8 148.5,85.7 148.8,84.7 149,83.6 149.3,82.6 149.5,81.5 149.8,80.4 150,79.3 150.3,78.2 150.5,77.2 150.8,76.1 151,75 151.3,73.9 151.5,72.7 151.8,71.6 152,70.5 152.3,69.4 152.5,68.2 152.8,67.1 153,66 153.3,64.8 153.5,63.7 153.8,62.5 154,61.3 154.3,60.2 154.5,59 154.8,57.8 155,56.6 155.3,55.4 155.5,54.2 155.8,53 156,51.8 156.3,50.6 156.5,49.4 156.8,48.2" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="39.3,48.2 46.2,57 36.4,59" fill="currentColor"/>
  <polygon points="156.8,48.2 159.6,59 149.8,57" fill="currentColor"/>
</svg>
</div>
  <div class="ap-figure">
<svg role="img" aria-label="A downward-opening parabola touching the x-axis only at its vertex, representing a zero discriminant and one real solution." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 266" width="196" height="266" font-family="Helvetica, Arial, sans-serif">
  <text x="98" y="14" font-size="13" fill="currentColor" text-anchor="middle">b² − 4ac = 0: one x−intercept</text>
  <line x1="24" y1="144" x2="172" y2="144" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="46" x2="98" y2="242" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,144 172,149 172,139" fill="currentColor"/>
  <polygon points="98,36 103,46 93,46" fill="currentColor"/>
  <polygon points="14,144 24,139 24,149" fill="currentColor"/>
  <polygon points="98,252 93,242 103,242" fill="currentColor"/>
  <text x="180" y="136" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="46" font-size="13" fill="currentColor" font-style="italic">y</text>
  <polyline points="62,240 62.3,239 62.5,238 62.8,237 63,236 63.3,235.1 63.5,234.1 63.8,233.1 64,232.2 64.3,231.2 64.5,230.3 64.8,229.3 65,228.4 65.3,227.4 65.5,226.5 65.8,225.6 66,224.7 66.3,223.8 66.5,222.8 66.8,221.9 67,221 67.3,220.1 67.5,219.3 67.8,218.4 68,217.5 68.3,216.6 68.5,215.8 68.8,214.9 69,214 69.3,213.2 69.5,212.3 69.8,211.5 70,210.7 70.3,209.8 70.5,209 70.8,208.2 71,207.4 71.3,206.6 71.5,205.8 71.8,205 72,204.2 72.3,203.4 72.5,202.6 72.8,201.8 73,201 73.3,200.3 73.5,199.5 73.8,198.8 74,198 74.3,197.3 74.5,196.5 74.8,195.8 75,195 75.3,194.3 75.5,193.6 75.8,192.9 76,192.2 76.3,191.5 76.5,190.8 76.8,190.1 77,189.4 77.3,188.7 77.5,188 77.8,187.3 78,186.7 78.3,186 78.5,185.3 78.8,184.7 79,184 79.3,183.4 79.5,182.8 79.8,182.1 80,181.5 80.3,180.9 80.5,180.3 80.8,179.6 81,179 81.3,178.4 81.5,177.8 81.8,177.3 82,176.7 82.3,176.1 82.5,175.5 82.8,174.9 83,174.4 83.3,173.8 83.5,173.3 83.8,172.7 84,172.2 84.3,171.6 84.5,171.1 84.8,170.6 85,170 85.3,169.5 85.5,169 85.8,168.5 86,168 86.3,167.5 86.5,167 86.8,166.5 87,166 87.3,165.6 87.5,165.1 87.8,164.6 88,164.2 88.3,163.7 88.5,163.3 88.8,162.8 89,162.4 89.3,161.9 89.5,161.5 89.8,161.1 90,160.7 90.3,160.3 90.5,159.8 90.8,159.4 91,159 91.3,158.6 91.5,158.3 91.8,157.9 92,157.5 92.3,157.1 92.5,156.8 92.8,156.4 93,156 93.3,155.7 93.5,155.3 93.8,155 94,154.7 94.3,154.3 94.5,154 94.8,153.7 95,153.4 95.3,153.1 95.5,152.8 95.8,152.5 96,152.2 96.3,151.9 96.5,151.6 96.8,151.3 97,151 97.3,150.8 97.5,150.5 97.8,150.3 98,150 98.3,149.8 98.5,149.5 98.8,149.3 99,149 99.3,148.8 99.5,148.6 99.8,148.4 100,148.2 100.3,148 100.5,147.8 100.8,147.6 101,147.4 101.3,147.2 101.5,147 101.8,146.8 102,146.7 102.3,146.5 102.5,146.3 102.8,146.2 103,146 103.3,145.9 103.5,145.8 103.8,145.6 104,145.5 104.3,145.4 104.5,145.3 104.8,145.1 105,145 105.3,144.9 105.5,144.8 105.8,144.8 106,144.7 106.3,144.6 106.5,144.5 106.8,144.4 107,144.4 107.3,144.3 107.5,144.3 107.8,144.2 108,144.2 108.3,144.1 108.5,144.1 108.8,144.1 109,144 109.3,144 109.5,144 109.8,144 110,144 110.3,144 110.5,144 110.8,144 111,144 111.3,144.1 111.5,144.1 111.8,144.1 112,144.2 112.3,144.2 112.5,144.3 112.8,144.3 113,144.4 113.3,144.4 113.5,144.5 113.8,144.6 114,144.7 114.3,144.8 114.5,144.8 114.8,144.9 115,145 115.3,145.1 115.5,145.3 115.8,145.4 116,145.5 116.3,145.6 116.5,145.8 116.8,145.9 117,146 117.3,146.2 117.5,146.3 117.8,146.5 118,146.7 118.3,146.8 118.5,147 118.8,147.2 119,147.4 119.3,147.6 119.5,147.8 119.8,148 120,148.2 120.3,148.4 120.5,148.6 120.8,148.8 121,149 121.3,149.3 121.5,149.5 121.8,149.8 122,150 122.3,150.3 122.5,150.5 122.8,150.8 123,151 123.3,151.3 123.5,151.6 123.8,151.9 124,152.2 124.3,152.5 124.5,152.8 124.8,153.1 125,153.4 125.3,153.7 125.5,154 125.8,154.3 126,154.7 126.3,155 126.5,155.3 126.8,155.7 127,156 127.3,156.4 127.5,156.8 127.8,157.1 128,157.5 128.3,157.9 128.5,158.3 128.8,158.6 129,159 129.3,159.4 129.5,159.8 129.8,160.3 130,160.7 130.3,161.1 130.5,161.5 130.8,161.9 131,162.4 131.3,162.8 131.5,163.3 131.8,163.7 132,164.2 132.3,164.6 132.5,165.1 132.8,165.6 133,166 133.3,166.5 133.5,167 133.8,167.5 134,168 134.3,168.5 134.5,169 134.8,169.5 135,170 135.3,170.6 135.5,171.1 135.8,171.6 136,172.2 136.3,172.7 136.5,173.3 136.8,173.8 137,174.4 137.3,174.9 137.5,175.5 137.8,176.1 138,176.7 138.3,177.3 138.5,177.8 138.8,178.4 139,179 139.3,179.6 139.5,180.3 139.8,180.9 140,181.5 140.3,182.1 140.5,182.8 140.8,183.4 141,184 141.3,184.7 141.5,185.3 141.8,186 142,186.7 142.3,187.3 142.5,188 142.8,188.7 143,189.4 143.3,190.1 143.5,190.8 143.8,191.5 144,192.2 144.3,192.9 144.5,193.6 144.8,194.3 145,195 145.3,195.8 145.5,196.5 145.8,197.3 146,198 146.3,198.8 146.5,199.5 146.8,200.3 147,201 147.3,201.8 147.5,202.6 147.8,203.4 148,204.2 148.3,205 148.5,205.8 148.8,206.6 149,207.4 149.3,208.2 149.5,209 149.8,209.8 150,210.7 150.3,211.5 150.5,212.3 150.8,213.2 151,214 151.3,214.9 151.5,215.8 151.8,216.6 152,217.5 152.3,218.4 152.5,219.3 152.8,220.1 153,221 153.3,221.9 153.5,222.8 153.8,223.8 154,224.7 154.3,225.6 154.5,226.5 154.8,227.4 155,228.4 155.3,229.3 155.5,230.3 155.8,231.2 156,232.2 156.3,233.1 156.5,234.1 156.8,235.1 157,236 157.3,237 157.5,238 157.8,239 158,240" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="62,240 59.6,229.1 69.3,231.5" fill="currentColor"/>
  <polygon points="158,240 150.7,231.5 160.4,229.1" fill="currentColor"/>
</svg>
</div>
  <div class="ap-figure">
<svg role="img" aria-label="An upward-opening parabola entirely above the x-axis, representing a negative discriminant and no real solution." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 266" width="196" height="266" font-family="Helvetica, Arial, sans-serif">
  <text x="98" y="14" font-size="13" fill="currentColor" text-anchor="middle">b² − 4ac &lt; 0: no x−intercept</text>
  <line x1="24" y1="144" x2="172" y2="144" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="46" x2="98" y2="242" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,144 172,149 172,139" fill="currentColor"/>
  <polygon points="98,36 103,46 93,46" fill="currentColor"/>
  <polygon points="14,144 24,139 24,149" fill="currentColor"/>
  <polygon points="98,252 93,242 103,242" fill="currentColor"/>
  <text x="180" y="136" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="46" font-size="13" fill="currentColor" font-style="italic">y</text>
  <polyline points="56.5,48.2 56.8,49.1 57,50 57.3,50.8 57.5,51.7 57.8,52.5 58,53.3 58.3,54.2 58.5,55 58.8,55.8 59,56.6 59.3,57.4 59.5,58.2 59.8,59 60,59.8 60.3,60.6 60.5,61.4 60.8,62.2 61,63 61.3,63.7 61.5,64.5 61.8,65.2 62,66 62.3,66.7 62.5,67.5 62.8,68.2 63,69 63.3,69.7 63.5,70.4 63.8,71.1 64,71.8 64.3,72.5 64.5,73.2 64.8,73.9 65,74.6 65.3,75.3 65.5,76 65.8,76.7 66,77.3 66.3,78 66.5,78.7 66.8,79.3 67,80 67.3,80.6 67.5,81.2 67.8,81.9 68,82.5 68.3,83.1 68.5,83.7 68.8,84.4 69,85 69.3,85.6 69.5,86.2 69.8,86.7 70,87.3 70.3,87.9 70.5,88.5 70.8,89.1 71,89.6 71.3,90.2 71.5,90.7 71.8,91.3 72,91.8 72.3,92.4 72.5,92.9 72.8,93.4 73,94 73.3,94.5 73.5,95 73.8,95.5 74,96 74.3,96.5 74.5,97 74.8,97.5 75,98 75.3,98.4 75.5,98.9 75.8,99.4 76,99.8 76.3,100.3 76.5,100.7 76.8,101.2 77,101.6 77.3,102.1 77.5,102.5 77.8,102.9 78,103.3 78.3,103.7 78.5,104.2 78.8,104.6 79,105 79.3,105.4 79.5,105.7 79.8,106.1 80,106.5 80.3,106.9 80.5,107.2 80.8,107.6 81,108 81.3,108.3 81.5,108.7 81.8,109 82,109.3 82.3,109.7 82.5,110 82.8,110.3 83,110.6 83.3,110.9 83.5,111.2 83.8,111.5 84,111.8 84.3,112.1 84.5,112.4 84.8,112.7 85,113 85.3,113.2 85.5,113.5 85.8,113.7 86,114 86.3,114.2 86.5,114.5 86.8,114.7 87,115 87.3,115.2 87.5,115.4 87.8,115.6 88,115.8 88.3,116 88.5,116.2 88.8,116.4 89,116.6 89.3,116.8 89.5,117 89.8,117.2 90,117.3 90.3,117.5 90.5,117.7 90.8,117.8 91,118 91.3,118.1 91.5,118.2 91.8,118.4 92,118.5 92.3,118.6 92.5,118.7 92.8,118.9 93,119 93.3,119.1 93.5,119.2 93.8,119.2 94,119.3 94.3,119.4 94.5,119.5 94.8,119.6 95,119.6 95.3,119.7 95.5,119.7 95.8,119.8 96,119.8 96.3,119.9 96.5,119.9 96.8,119.9 97,120 97.3,120 97.5,120 97.8,120 98,120 98.3,120 98.5,120 98.8,120 99,120 99.3,119.9 99.5,119.9 99.8,119.9 100,119.8 100.3,119.8 100.5,119.7 100.8,119.7 101,119.6 101.3,119.6 101.5,119.5 101.8,119.4 102,119.3 102.3,119.2 102.5,119.2 102.8,119.1 103,119 103.3,118.9 103.5,118.7 103.8,118.6 104,118.5 104.3,118.4 104.5,118.2 104.8,118.1 105,118 105.3,117.8 105.5,117.7 105.8,117.5 106,117.3 106.3,117.2 106.5,117 106.8,116.8 107,116.6 107.3,116.4 107.5,116.2 107.8,116 108,115.8 108.3,115.6 108.5,115.4 108.8,115.2 109,115 109.3,114.7 109.5,114.5 109.8,114.2 110,114 110.3,113.7 110.5,113.5 110.8,113.2 111,113 111.3,112.7 111.5,112.4 111.8,112.1 112,111.8 112.3,111.5 112.5,111.2 112.8,110.9 113,110.6 113.3,110.3 113.5,110 113.8,109.7 114,109.3 114.3,109 114.5,108.7 114.8,108.3 115,108 115.3,107.6 115.5,107.2 115.8,106.9 116,106.5 116.3,106.1 116.5,105.7 116.8,105.4 117,105 117.3,104.6 117.5,104.2 117.8,103.7 118,103.3 118.3,102.9 118.5,102.5 118.8,102.1 119,101.6 119.3,101.2 119.5,100.7 119.8,100.3 120,99.8 120.3,99.4 120.5,98.9 120.8,98.4 121,98 121.3,97.5 121.5,97 121.8,96.5 122,96 122.3,95.5 122.5,95 122.8,94.5 123,94 123.3,93.4 123.5,92.9 123.8,92.4 124,91.8 124.3,91.3 124.5,90.7 124.8,90.2 125,89.6 125.3,89.1 125.5,88.5 125.8,87.9 126,87.3 126.3,86.7 126.5,86.2 126.8,85.6 127,85 127.3,84.4 127.5,83.7 127.8,83.1 128,82.5 128.3,81.9 128.5,81.2 128.8,80.6 129,80 129.3,79.3 129.5,78.7 129.8,78 130,77.3 130.3,76.7 130.5,76 130.8,75.3 131,74.6 131.3,73.9 131.5,73.2 131.8,72.5 132,71.8 132.3,71.1 132.5,70.4 132.8,69.7 133,69 133.3,68.2 133.5,67.5 133.8,66.7 134,66 134.3,65.2 134.5,64.5 134.8,63.7 135,63 135.3,62.2 135.5,61.4 135.8,60.6 136,59.8 136.3,59 136.5,58.2 136.8,57.4 137,56.6 137.3,55.8 137.5,55 137.8,54.2 138,53.3 138.3,52.5 138.5,51.7 138.8,50.8 139,50 139.3,49.1 139.5,48.2" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="56.5,48.2 64.1,56.5 54.5,59.2" fill="currentColor"/>
  <polygon points="139.5,48.2 141.5,59.2 131.9,56.5" fill="currentColor"/>
</svg>
</div>
</div>

Previously, we used the discriminant to determine the number of solutions of
a quadratic equation of the form $ax^2+bx+c=0$. Now, we can use the
discriminant to tell us how many $x$-intercepts there are on the graph.

| Discriminant | Solutions | Graph |
| --- | --- | --- |
| $b^2-4ac>0$ | Two solutions | Two $x$-intercepts |
| $b^2-4ac=0$ | One solution | One $x$-intercept |
| $b^2-4ac<0$ | No real solution | No $x$-intercept |

Before you start solving the quadratic equation to find the values of the
$x$-intercepts, you may want to evaluate the discriminant so you know how
many solutions to expect.

**Example 10.47.** Find the intercepts of $y=5x^2+x+4$.

To find the $y$-intercept, let $x=0$ and solve for $y$.

$$y=5\cdot0^2+0+4=4.$$

When $x=0$, then $y=4$. The $y$-intercept is the point $(0,4)$.

To find the $x$-intercept, let $y=0$ and solve for $x$. Find the value of the
discriminant to predict the number of solutions and so $x$-intercepts.

$$b^2-4ac=1^2-4\cdot5\cdot4=1-80=-79.$$

Since the value of the discriminant is negative, there is no real solution
to the equation. There are no $x$-intercepts.

**Example 10.48.** Find the intercepts of $y=4x^2-12x+9$.

To find the $y$-intercept, let $x=0$ and solve for $y$.

$$y=4\cdot0^2-12\cdot0+9=9.$$

When $x=0$, then $y=9$. The $y$-intercept is the point $(0,9)$.

To find the $x$-intercept, let $y=0$ and solve for $x$. Find the value of the
discriminant to predict the number of solutions and so $x$-intercepts.

$$b^2-4ac=(-12)^2-4\cdot4\cdot9=144-144=0.$$

Since the value of the discriminant is 0, there is only one real solution to
the equation. Therefore, there is only one $x$-intercept.

$$
\begin{array}{lrcl}
\text{Factor the perfect square trinomial.}&0&=&(2x-3)^2\\[4pt]
\text{Use the Zero Product Property.}&0&=&2x-3\\[4pt]
\text{Solve for }x.&3&=&2x\\[4pt]
&x&=&\tfrac32
\end{array}
$$

When $y=0$, then $\tfrac32=x$. The $x$-intercept is the point
$(\tfrac32,0)$.

## Graph quadratic equations in two variables

Now, we have all the pieces we need in order to graph a quadratic equation
in two variables. We just need to put them together.

**Example 10.49. How To Graph a Quadratic Equation in Two Variables.** Graph
$y=x^2-6x+8$.

**Step 1.** Write the quadratic equation with $y$ on one side. This equation
has $y$ on one side.

$$y=x^2-6x+8\qquad a=1,\ b=-6,\ c=8$$

**Step 2.** Determine whether the parabola opens upward or downward. Look at
$a$ in the equation. Since $a$ is positive, the parabola opens upward.

**Step 3.** Find the axis of symmetry.

$$
\begin{array}{rcl}
x&=&-\tfrac{b}{2a}\\[10pt]
x&=&-\tfrac{-6}{2\cdot1}\\[10pt]
x&=&3
\end{array}
$$

The axis of symmetry is the line $x=3$.

**Step 4.** Find the vertex. The vertex is on the axis of symmetry.
Substitute $x=3$ into the equation and solve for $y$.

$$
\begin{array}{rcl}
y&=&x^2-6x+8\\[4pt]
y&=&(3)^2-6(3)+8\\[4pt]
y&=&-1
\end{array}
$$

The vertex is $(3,-1)$.

**Step 5.** Find the $y$-intercept. Find the point symmetric to the
$y$-intercept across the axis of symmetry. We substitute $x=0$ into the
equation.

$$
\begin{array}{rcl}
y&=&x^2-6x+8\\[4pt]
y&=&(0)^2-6(0)+8\\[4pt]
y&=&8
\end{array}
$$

The $y$-intercept is $(0,8)$. We use the axis of symmetry to find a point
symmetric to the $y$-intercept. The $y$-intercept is 3 units left of the
axis of symmetry, $x=3$. A point 3 units to the right of the axis of
symmetry has $x=6$. The point is $(6,8)$.

**Step 6.** Find the $x$-intercepts. We substitute $y=0$ into the equation.
We can solve this quadratic equation by factoring.

$$
\begin{array}{rcl}
0&=&x^2-6x+8\\[4pt]
0&=&(x-2)(x-4)\\[4pt]
x&=&2\text{ or }x=4
\end{array}
$$

The $x$-intercepts are $(2,0)$ and $(4,0)$.

**Step 7.** Graph the parabola. We graph the vertex, intercepts, and the
point symmetric to the $y$-intercept. We connect these 5 points to sketch
the parabola.

<div class="ap-figure">
<svg role="img" aria-label="The upward-opening parabola y equals x squared minus 6x plus 8, with vertex (3, -1), x-intercepts (2, 0) and (4, 0), y-intercept (0, 8), symmetric point (6, 8), and dashed axis of symmetry x equals 3." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 316" width="268" height="316" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="290" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="290" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="290" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="290" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="290" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="290" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="290" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="290" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="290" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="242" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="242" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="242" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="242" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="242" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="242" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="242" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="242" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="242" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="242" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="242" x2="244" y2="242" stroke="currentColor" stroke-width="1"/>
  <line x1="50" y1="24" x2="50" y2="292" stroke="currentColor" stroke-width="1"/>
  <polygon points="254,242 244,247 244,237" fill="currentColor"/>
  <polygon points="50,14 55,24 45,24" fill="currentColor"/>
  <polygon points="14,242 24,237 24,247" fill="currentColor"/>
  <polygon points="50,302 45,292 55,292" fill="currentColor"/>
  <text x="252" y="234" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="58" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="239" x2="26" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="257" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="74" y1="239" x2="74" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="257" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="98" y1="239" x2="98" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="257" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="122" y1="239" x2="122" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="257" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="146" y1="239" x2="146" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="257" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="170" y1="239" x2="170" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="257" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="194" y1="239" x2="194" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="257" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="218" y1="239" x2="218" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="257" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="242" y1="239" x2="242" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="257" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="47" y1="290" x2="53" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="44" y="294" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="47" y1="266" x2="53" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="44" y="270" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="47" y1="218" x2="53" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="44" y="222" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="47" y1="194" x2="53" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="44" y="198" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="47" y1="170" x2="53" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="44" y="174" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="47" y1="146" x2="53" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="44" y="150" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="47" y1="122" x2="53" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="44" y="126" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="47" y1="98" x2="53" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="44" y="102" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="47" y1="74" x2="53" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="44" y="78" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <line x1="47" y1="50" x2="53" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="44" y="54" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="47" y1="26" x2="53" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="44" y="30" font-size="11" fill="currentColor" text-anchor="end">9</text>
  <line x1="122" y1="296" x2="122" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="46.3,26.9 46.5,28.5 46.8,30.1 47,31.6 47.3,33.2 47.5,34.7 47.8,36.3 48,37.8 48.3,39.4 48.5,40.9 48.8,42.4 49,44 49.3,45.5 49.5,47 49.8,48.5 50,50 50.3,51.5 50.5,53 50.8,54.5 51,56 51.3,57.4 51.5,58.9 51.8,60.4 52,61.8 52.3,63.3 52.5,64.7 52.8,66.2 53,67.6 53.3,69.1 53.5,70.5 53.8,71.9 54,73.3 54.3,74.7 54.5,76.2 54.8,77.6 55,79 55.3,80.4 55.5,81.7 55.8,83.1 56,84.5 56.3,85.9 56.5,87.2 56.8,88.6 57,90 57.3,91.3 57.5,92.7 57.8,94 58,95.3 58.3,96.7 58.5,98 58.8,99.3 59,100.6 59.3,101.9 59.5,103.2 59.8,104.5 60,105.8 60.3,107.1 60.5,108.4 60.8,109.7 61,111 61.3,112.2 61.5,113.5 61.8,114.7 62,116 62.3,117.2 62.5,118.5 62.8,119.7 63,121 63.3,122.2 63.5,123.4 63.8,124.6 64,125.8 64.3,127 64.5,128.2 64.8,129.4 65,130.6 65.3,131.8 65.5,133 65.8,134.2 66,135.3 66.3,136.5 66.5,137.7 66.8,138.8 67,140 67.3,141.1 67.5,142.2 67.8,143.4 68,144.5 68.3,145.6 68.5,146.7 68.8,147.9 69,149 69.3,150.1 69.5,151.2 69.8,152.2 70,153.3 70.3,154.4 70.5,155.5 70.8,156.6 71,157.6 71.3,158.7 71.5,159.7 71.8,160.8 72,161.8 72.3,162.9 72.5,163.9 72.8,164.9 73,166 73.3,167 73.5,168 73.8,169 74,170 74.3,171 74.5,172 74.8,173 75,174 75.3,174.9 75.5,175.9 75.8,176.9 76,177.8 76.3,178.8 76.5,179.7 76.8,180.7 77,181.6 77.3,182.6 77.5,183.5 77.8,184.4 78,185.3 78.3,186.2 78.5,187.2 78.8,188.1 79,189 79.3,189.9 79.5,190.7 79.8,191.6 80,192.5 80.3,193.4 80.5,194.2 80.8,195.1 81,196 81.3,196.8 81.5,197.7 81.8,198.5 82,199.3 82.3,200.2 82.5,201 82.8,201.8 83,202.6 83.3,203.4 83.5,204.2 83.8,205 84,205.8 84.3,206.6 84.5,207.4 84.8,208.2 85,209 85.3,209.7 85.5,210.5 85.8,211.2 86,212 86.3,212.7 86.5,213.5 86.8,214.2 87,215 87.3,215.7 87.5,216.4 87.8,217.1 88,217.8 88.3,218.5 88.5,219.2 88.8,219.9 89,220.6 89.3,221.3 89.5,222 89.8,222.7 90,223.3 90.3,224 90.5,224.7 90.8,225.3 91,226 91.3,226.6 91.5,227.2 91.8,227.9 92,228.5 92.3,229.1 92.5,229.7 92.8,230.4 93,231 93.3,231.6 93.5,232.2 93.8,232.7 94,233.3 94.3,233.9 94.5,234.5 94.8,235.1 95,235.6 95.3,236.2 95.5,236.7 95.8,237.3 96,237.8 96.3,238.4 96.5,238.9 96.8,239.4 97,240 97.3,240.5 97.5,241 97.8,241.5 98,242 98.3,242.5 98.5,243 98.8,243.5 99,244 99.3,244.4 99.5,244.9 99.8,245.4 100,245.8 100.3,246.3 100.5,246.7 100.8,247.2 101,247.6 101.3,248.1 101.5,248.5 101.8,248.9 102,249.3 102.3,249.7 102.5,250.2 102.8,250.6 103,251 103.3,251.4 103.5,251.7 103.8,252.1 104,252.5 104.3,252.9 104.5,253.2 104.8,253.6 105,254 105.3,254.3 105.5,254.7 105.8,255 106,255.3 106.3,255.7 106.5,256 106.8,256.3 107,256.6 107.3,256.9 107.5,257.2 107.8,257.5 108,257.8 108.3,258.1 108.5,258.4 108.8,258.7 109,259 109.3,259.2 109.5,259.5 109.8,259.7 110,260 110.3,260.2 110.5,260.5 110.8,260.7 111,261 111.3,261.2 111.5,261.4 111.8,261.6 112,261.8 112.3,262 112.5,262.2 112.8,262.4 113,262.6 113.3,262.8 113.5,263 113.8,263.2 114,263.3 114.3,263.5 114.5,263.7 114.8,263.8 115,264 115.3,264.1 115.5,264.2 115.8,264.4 116,264.5 116.3,264.6 116.5,264.7 116.8,264.9 117,265 117.3,265.1 117.5,265.2 117.8,265.2 118,265.3 118.3,265.4 118.5,265.5 118.8,265.6 119,265.6 119.3,265.7 119.5,265.7 119.8,265.8 120,265.8 120.3,265.9 120.5,265.9 120.8,265.9 121,266 121.3,266 121.5,266 121.8,266 122,266 122.3,266 122.5,266 122.8,266 123,266 123.3,265.9 123.5,265.9 123.8,265.9 124,265.8 124.3,265.8 124.5,265.7 124.8,265.7 125,265.6 125.3,265.6 125.5,265.5 125.8,265.4 126,265.3 126.3,265.2 126.5,265.2 126.8,265.1 127,265 127.3,264.9 127.5,264.7 127.8,264.6 128,264.5 128.3,264.4 128.5,264.2 128.8,264.1 129,264 129.3,263.8 129.5,263.7 129.8,263.5 130,263.3 130.3,263.2 130.5,263 130.8,262.8 131,262.6 131.3,262.4 131.5,262.2 131.8,262 132,261.8 132.3,261.6 132.5,261.4 132.8,261.2 133,261 133.3,260.7 133.5,260.5 133.8,260.2 134,260 134.3,259.7 134.5,259.5 134.8,259.2 135,259 135.3,258.7 135.5,258.4 135.8,258.1 136,257.8 136.3,257.5 136.5,257.2 136.8,256.9 137,256.6 137.3,256.3 137.5,256 137.8,255.7 138,255.3 138.3,255 138.5,254.7 138.8,254.3 139,254 139.3,253.6 139.5,253.2 139.8,252.9 140,252.5 140.3,252.1 140.5,251.7 140.8,251.4 141,251 141.3,250.6 141.5,250.2 141.8,249.7 142,249.3 142.3,248.9 142.5,248.5 142.8,248.1 143,247.6 143.3,247.2 143.5,246.7 143.8,246.3 144,245.8 144.3,245.4 144.5,244.9 144.8,244.4 145,244 145.3,243.5 145.5,243 145.8,242.5 146,242 146.3,241.5 146.5,241 146.8,240.5 147,240 147.3,239.4 147.5,238.9 147.8,238.4 148,237.8 148.3,237.3 148.5,236.7 148.8,236.2 149,235.6 149.3,235.1 149.5,234.5 149.8,233.9 150,233.3 150.3,232.7 150.5,232.2 150.8,231.6 151,231 151.3,230.4 151.5,229.7 151.8,229.1 152,228.5 152.3,227.9 152.5,227.2 152.8,226.6 153,226 153.3,225.3 153.5,224.7 153.8,224 154,223.3 154.3,222.7 154.5,222 154.8,221.3 155,220.6 155.3,219.9 155.5,219.2 155.8,218.5 156,217.8 156.3,217.1 156.5,216.4 156.8,215.7 157,215 157.3,214.2 157.5,213.5 157.8,212.7 158,212 158.3,211.2 158.5,210.5 158.8,209.7 159,209 159.3,208.2 159.5,207.4 159.8,206.6 160,205.8 160.3,205 160.5,204.2 160.8,203.4 161,202.6 161.3,201.8 161.5,201 161.8,200.2 162,199.3 162.3,198.5 162.5,197.7 162.8,196.8 163,196 163.3,195.1 163.5,194.2 163.8,193.4 164,192.5 164.3,191.6 164.5,190.7 164.8,189.9 165,189 165.3,188.1 165.5,187.2 165.8,186.2 166,185.3 166.3,184.4 166.5,183.5 166.8,182.6 167,181.6 167.3,180.7 167.5,179.7 167.8,178.8 168,177.8 168.3,176.9 168.5,175.9 168.8,174.9 169,174 169.3,173 169.5,172 169.8,171 170,170 170.3,169 170.5,168 170.8,167 171,166 171.3,164.9 171.5,163.9 171.8,162.9 172,161.8 172.3,160.8 172.5,159.7 172.8,158.7 173,157.6 173.3,156.6 173.5,155.5 173.8,154.4 174,153.3 174.3,152.2 174.5,151.2 174.8,150.1 175,149 175.3,147.9 175.5,146.7 175.8,145.6 176,144.5 176.3,143.4 176.5,142.2 176.8,141.1 177,140 177.3,138.8 177.5,137.7 177.8,136.5 178,135.3 178.3,134.2 178.5,133 178.8,131.8 179,130.6 179.3,129.4 179.5,128.2 179.8,127 180,125.8 180.3,124.6 180.5,123.4 180.8,122.2 181,121 181.3,119.7 181.5,118.5 181.8,117.2 182,116 182.3,114.7 182.5,113.5 182.8,112.2 183,111 183.3,109.7 183.5,108.4 183.8,107.1 184,105.8 184.3,104.5 184.5,103.2 184.8,101.9 185,100.6 185.3,99.3 185.5,98 185.8,96.7 186,95.3 186.3,94 186.5,92.7 186.8,91.3 187,90 187.3,88.6 187.5,87.2 187.8,85.9 188,84.5 188.3,83.1 188.5,81.7 188.8,80.4 189,79 189.3,77.6 189.5,76.2 189.8,74.7 190,73.3 190.3,71.9 190.5,70.5 190.8,69.1 191,67.6 191.3,66.2 191.5,64.7 191.8,63.3 192,61.8 192.3,60.4 192.5,58.9 192.8,57.4 193,56 193.3,54.5 193.5,53 193.8,51.5 194,50 194.3,48.5 194.5,47 194.8,45.5 195,44 195.3,42.4 195.5,40.9 195.8,39.4 196,37.8 196.3,36.3 196.5,34.7 196.8,33.2 197,31.6 197.3,30.1 197.5,28.5 197.8,26.9" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="46.3,26.9 52.8,36 42.9,37.6" fill="currentColor"/>
  <polygon points="197.8,26.9 201.1,37.6 191.2,36" fill="currentColor"/>
  <circle cx="122" cy="266" r="4" fill="currentColor"/>
  <circle cx="98" cy="242" r="4" fill="currentColor"/>
  <circle cx="146" cy="242" r="4" fill="currentColor"/>
  <circle cx="50" cy="50" r="4" fill="currentColor"/>
  <circle cx="194" cy="50" r="4" fill="currentColor"/>
</svg>
</div>

{{< callout type="info" >}}
  **Graph a quadratic equation in two variables.**

  1. Write the quadratic equation with $y$ on one side.
  2. Determine whether the parabola opens upward or downward.
  3. Find the axis of symmetry.
  4. Find the vertex.
  5. Find the $y$-intercept. Find the point symmetric to the $y$-intercept
     across the axis of symmetry.
  6. Find the $x$-intercepts.
  7. Graph the parabola.
{{< /callout >}}

**Example 10.50.** Graph $y=-x^2+6x-9$.

The equation has $y$ on one side. Since $a$ is $-1$, the parabola opens
downward. To find the axis of symmetry, find $x=-\tfrac{b}{2a}$.

$$x=-\frac{6}{2(-1)}=3.$$

The axis of symmetry is $x=3$. The vertex is on the line $x=3$. Find $y$
when $x=3$.

$$y=-3^2+6\cdot3-9=-9+18-9=0.$$

The vertex is $(3,0)$. The $y$-intercept occurs when $x=0$. Substitute
$x=0$. Simplify.

$$y=-0^2+6\cdot0-9=-9.$$

The $y$-intercept is $(0,-9)$. The point $(0,-9)$ is three units to the left
of the line of symmetry. The point three units to the right of the line of
symmetry is $(6,-9)$. Point symmetric to the $y$-intercept is $(6,-9)$.

$$
\begin{array}{lrcl}
\text{Substitute }y=0.&0&=&-x^2+6x-9\\[4pt]
\text{Factor the GCF.}&0&=&-(x^2-6x+9)\\[4pt]
\text{Factor the trinomial.}&0&=&-(x-3)^2\\[4pt]
\text{Solve for }x.&x&=&3
\end{array}
$$

Connect the points to graph the parabola.

<div class="ap-figure">
<svg role="img" aria-label="The downward-opening parabola y equals negative x squared plus 6x minus 9, with vertex and sole x-intercept (3, 0), y-intercept (0, -9), symmetric point (6, -9), and dashed axis of symmetry x equals 3." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 332" width="332" height="332" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="306" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="306" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="306" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="306" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="306" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="306" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="306" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="306" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="306" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="306" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="306" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="306" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="306" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="306" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="306" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="306" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="306" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="306" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="306" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="306" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="306" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="306" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="306" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="306" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="306" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="306" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="306" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="106" x2="308" y2="106" stroke="currentColor" stroke-width="1"/>
  <line x1="106" y1="24" x2="106" y2="308" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,106 308,111 308,101" fill="currentColor"/>
  <polygon points="106,14 111,24 101,24" fill="currentColor"/>
  <polygon points="14,106 24,101 24,111" fill="currentColor"/>
  <polygon points="106,318 101,308 111,308" fill="currentColor"/>
  <text x="316" y="98" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="114" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="103" x2="26" y2="109" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="121" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="46" y1="103" x2="46" y2="109" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="121" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="66" y1="103" x2="66" y2="109" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="121" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="86" y1="103" x2="86" y2="109" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="121" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="126" y1="103" x2="126" y2="109" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="121" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="146" y1="103" x2="146" y2="109" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="121" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="166" y1="103" x2="166" y2="109" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="121" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="186" y1="103" x2="186" y2="109" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="121" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="206" y1="103" x2="206" y2="109" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="121" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="226" y1="103" x2="226" y2="109" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="121" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="246" y1="103" x2="246" y2="109" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="121" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="266" y1="103" x2="266" y2="109" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="121" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="286" y1="103" x2="286" y2="109" stroke="currentColor" stroke-width="1"/>
  <text x="286" y="121" font-size="11" fill="currentColor" text-anchor="middle">9</text>
  <line x1="306" y1="103" x2="306" y2="109" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="121" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="103" y1="306" x2="109" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="310" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="103" y1="286" x2="109" y2="286" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="290" font-size="11" fill="currentColor" text-anchor="end">−9</text>
  <line x1="103" y1="266" x2="109" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="270" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="103" y1="246" x2="109" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="250" font-size="11" fill="currentColor" text-anchor="end">−7</text>
  <line x1="103" y1="226" x2="109" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="230" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="103" y1="206" x2="109" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="210" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="103" y1="186" x2="109" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="190" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="103" y1="166" x2="109" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="170" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="103" y1="146" x2="109" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="150" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="103" y1="126" x2="109" y2="126" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="130" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="103" y1="86" x2="109" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="90" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="103" y1="66" x2="109" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="70" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="103" y1="46" x2="109" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="50" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="103" y1="26" x2="109" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="166" y1="312" x2="166" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="103,304.4 103.3,302.9 103.5,301.3 103.8,299.8 104,298.2 104.3,296.7 104.5,295.1 104.8,293.6 105,292 105.3,290.5 105.5,289 105.8,287.5 106,286 106.3,284.5 106.5,283 106.8,281.5 107,280.1 107.3,278.6 107.5,277.1 107.8,275.7 108,274.2 108.3,272.8 108.5,271.3 108.8,269.9 109,268.4 109.3,267 109.5,265.6 109.8,264.2 110,262.8 110.3,261.4 110.5,260 110.8,258.6 111,257.3 111.3,255.9 111.5,254.5 111.8,253.2 112,251.8 112.3,250.5 112.5,249.1 112.8,247.8 113,246.5 113.3,245.1 113.5,243.8 113.8,242.5 114,241.2 114.3,239.9 114.5,238.6 114.8,237.3 115,236 115.3,234.8 115.5,233.5 115.8,232.3 116,231 116.3,229.8 116.5,228.5 116.8,227.3 117,226.1 117.3,224.8 117.5,223.6 117.8,222.4 118,221.2 118.3,220 118.5,218.8 118.8,217.6 119,216.4 119.3,215.3 119.5,214.1 119.8,213 120,211.8 120.3,210.7 120.5,209.5 120.8,208.4 121,207.3 121.3,206.1 121.5,205 121.8,203.9 122,202.8 122.3,201.7 122.5,200.6 122.8,199.5 123,198.5 123.3,197.4 123.5,196.3 123.8,195.3 124,194.2 124.3,193.2 124.5,192.1 124.8,191.1 125,190 125.3,189 125.5,188 125.8,187 126,186 126.3,185 126.5,184 126.8,183 127,182.1 127.3,181.1 127.5,180.1 127.8,179.2 128,178.2 128.3,177.3 128.5,176.3 128.8,175.4 129,174.4 129.3,173.5 129.5,172.6 129.8,171.7 130,170.8 130.3,169.9 130.5,169 130.8,168.1 131,167.3 131.3,166.4 131.5,165.5 131.8,164.7 132,163.8 132.3,163 132.5,162.1 132.8,161.3 133,160.5 133.3,159.6 133.5,158.8 133.8,158 134,157.2 134.3,156.4 134.5,155.6 134.8,154.8 135,154.1 135.3,153.3 135.5,152.5 135.8,151.8 136,151 136.3,150.3 136.5,149.5 136.8,148.8 137,148.1 137.3,147.3 137.5,146.6 137.8,145.9 138,145.2 138.3,144.5 138.5,143.8 138.8,143.1 139,142.4 139.3,141.8 139.5,141.1 139.8,140.5 140,139.8 140.3,139.2 140.5,138.5 140.8,137.9 141,137.3 141.3,136.6 141.5,136 141.8,135.4 142,134.8 142.3,134.2 142.5,133.6 142.8,133 143,132.5 143.3,131.9 143.5,131.3 143.8,130.8 144,130.2 144.3,129.7 144.5,129.1 144.8,128.6 145,128 145.3,127.5 145.5,127 145.8,126.5 146,126 146.3,125.5 146.5,125 146.8,124.5 147,124 147.3,123.6 147.5,123.1 147.8,122.7 148,122.2 148.3,121.8 148.5,121.3 148.8,120.9 149,120.5 149.3,120 149.5,119.6 149.8,119.2 150,118.8 150.3,118.4 150.5,118 150.8,117.6 151,117.3 151.3,116.9 151.5,116.5 151.8,116.2 152,115.8 152.3,115.5 152.5,115.1 152.8,114.8 153,114.4 153.3,114.1 153.5,113.8 153.8,113.5 154,113.2 154.3,112.9 154.5,112.6 154.8,112.3 155,112.1 155.3,111.8 155.5,111.5 155.8,111.3 156,111 156.3,110.8 156.5,110.5 156.8,110.3 157,110.1 157.3,109.8 157.5,109.6 157.8,109.4 158,109.2 158.3,109 158.5,108.8 158.8,108.6 159,108.4 159.3,108.3 159.5,108.1 159.8,108 160,107.8 160.3,107.7 160.5,107.5 160.8,107.4 161,107.3 161.3,107.1 161.5,107 161.8,106.9 162,106.8 162.3,106.7 162.5,106.6 162.8,106.5 163,106.5 163.3,106.4 163.5,106.3 163.8,106.3 164,106.2 164.3,106.2 164.5,106.1 164.8,106.1 165,106 165.3,106 165.5,106 165.8,106 166,106 166.3,106 166.5,106 166.8,106 167,106.1 167.3,106.1 167.5,106.1 167.8,106.2 168,106.2 168.3,106.3 168.5,106.3 168.8,106.4 169,106.5 169.3,106.5 169.5,106.6 169.8,106.7 170,106.8 170.3,106.9 170.5,107 170.8,107.1 171,107.3 171.3,107.4 171.5,107.5 171.8,107.7 172,107.8 172.3,108 172.5,108.1 172.8,108.3 173,108.5 173.3,108.6 173.5,108.8 173.8,109 174,109.2 174.3,109.4 174.5,109.6 174.8,109.8 175,110 175.3,110.3 175.5,110.5 175.8,110.8 176,111 176.3,111.3 176.5,111.5 176.8,111.8 177,112.1 177.3,112.3 177.5,112.6 177.8,112.9 178,113.2 178.3,113.5 178.5,113.8 178.8,114.1 179,114.5 179.3,114.8 179.5,115.1 179.8,115.5 180,115.8 180.3,116.2 180.5,116.5 180.8,116.9 181,117.3 181.3,117.6 181.5,118 181.8,118.4 182,118.8 182.3,119.2 182.5,119.6 182.8,120 183,120.5 183.3,120.9 183.5,121.3 183.8,121.8 184,122.2 184.3,122.7 184.5,123.1 184.8,123.6 185,124 185.3,124.5 185.5,125 185.8,125.5 186,126 186.3,126.5 186.5,127 186.8,127.5 187,128.1 187.3,128.6 187.5,129.1 187.8,129.7 188,130.2 188.3,130.8 188.5,131.3 188.8,131.9 189,132.5 189.3,133 189.5,133.6 189.8,134.2 190,134.8 190.3,135.4 190.5,136 190.8,136.6 191,137.3 191.3,137.9 191.5,138.5 191.8,139.2 192,139.8 192.3,140.5 192.5,141.1 192.8,141.8 193,142.4 193.3,143.1 193.5,143.8 193.8,144.5 194,145.2 194.3,145.9 194.5,146.6 194.8,147.3 195,148 195.3,148.8 195.5,149.5 195.8,150.3 196,151 196.3,151.8 196.5,152.5 196.8,153.3 197,154.1 197.3,154.8 197.5,155.6 197.8,156.4 198,157.2 198.3,158 198.5,158.8 198.8,159.6 199,160.4 199.3,161.3 199.5,162.1 199.8,163 200,163.8 200.3,164.7 200.5,165.5 200.8,166.4 201,167.3 201.3,168.1 201.5,169 201.8,169.9 202,170.8 202.3,171.7 202.5,172.6 202.8,173.5 203,174.4 203.3,175.4 203.5,176.3 203.8,177.3 204,178.2 204.3,179.2 204.5,180.1 204.8,181.1 205,182 205.3,183 205.5,184 205.8,185 206,186 206.3,187 206.5,188 206.8,189 207,190.1 207.3,191.1 207.5,192.1 207.8,193.2 208,194.2 208.3,195.3 208.5,196.3 208.8,197.4 209,198.5 209.3,199.5 209.5,200.6 209.8,201.7 210,202.8 210.3,203.9 210.5,205 210.8,206.1 211,207.3 211.3,208.4 211.5,209.5 211.8,210.7 212,211.8 212.3,213 212.5,214.1 212.8,215.3 213,216.5 213.3,217.6 213.5,218.8 213.8,220 214,221.2 214.3,222.4 214.5,223.6 214.8,224.8 215,226 215.3,227.3 215.5,228.5 215.8,229.8 216,231 216.3,232.3 216.5,233.5 216.8,234.8 217,236.1 217.3,237.3 217.5,238.6 217.8,239.9 218,241.2 218.3,242.5 218.5,243.8 218.8,245.1 219,246.4 219.3,247.8 219.5,249.1 219.8,250.5 220,251.8 220.3,253.2 220.5,254.5 220.8,255.9 221,257.3 221.3,258.6 221.5,260 221.8,261.4 222,262.8 222.3,264.2 222.5,265.6 222.8,267 223,268.5 223.3,269.9 223.5,271.3 223.8,272.8 224,274.2 224.3,275.7 224.5,277.1 224.8,278.6 225,280 225.3,281.5 225.5,283 225.8,284.5 226,286 226.3,287.5 226.5,289 226.8,290.5 227,292.1 227.3,293.6 227.5,295.1 227.8,296.7 228,298.2 228.3,299.8 228.5,301.3 228.8,302.9 229,304.4" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="103,304.4 99.6,293.8 109.5,295.4" fill="currentColor"/>
  <polygon points="229,304.4 222.5,295.4 232.4,293.8" fill="currentColor"/>
  <circle cx="166" cy="106" r="4" fill="currentColor"/>
  <circle cx="106" cy="286" r="4" fill="currentColor"/>
  <circle cx="226" cy="286" r="4" fill="currentColor"/>
</svg>
</div>

For the graph of $y=-x^2+6x-9$, the vertex and the $x$-intercept were the
same point. Remember how the discriminant determines the number of solutions
of a quadratic equation? The discriminant of the equation
$0=-x^2+6x-9$ is 0, so there is only one solution. That means there is only
one $x$-intercept, and it is the vertex of the parabola.

How many $x$-intercepts would you expect to see on the graph of
$y=x^2+4x+5$?

**Example 10.51.** Graph $y=x^2+4x+5$.

The equation has $y$ on one side. Since $a$ is 1, the parabola opens upward.
To find the axis of symmetry, find $x=-\tfrac{b}{2a}$.

$$x=-\frac{4}{2(1)}=-2.$$

The axis of symmetry is $x=-2$. The vertex is on the line $x=-2$. Find $y$
when $x=-2$.

$$y=(-2)^2+4(-2)+5=4-8+5=1.$$

The vertex is $(-2,1)$. The $y$-intercept occurs when $x=0$. Substitute
$x=0$. Simplify.

$$y=(0)^2+4(0)+5=5.$$

The $y$-intercept is $(0,5)$. The point $(0,5)$ is two units to the right of
the line of symmetry. The point two units to the left of the line of
symmetry is $(-4,5)$. Point symmetric to the $y$-intercept is $(-4,5)$.

The $x$-intercept occurs when $y=0$. Substitute $y=0$. Test the
discriminant.

$$b^2-4ac=4^2-4\cdot1\cdot5=16-20=-4.$$

Since the value of the discriminant is negative, there is no solution and
so no $x$-intercept. Connect the points to graph the parabola. You may want
to choose two more points for greater accuracy.

<div class="ap-figure">
<svg role="img" aria-label="The upward-opening parabola y equals x squared plus 4x plus 5, with vertex (-2, 1), y-intercept (0, 5), symmetric point (-4, 5), no x-intercepts, and dashed axis of symmetry x equals -2." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316 316" width="316" height="316" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="290" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="290" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="290" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="290" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="290" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="290" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="290" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="290" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="290" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="290" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="268" y1="290" x2="268" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="290" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="290" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="268" x2="290" y2="268" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="290" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="290" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="290" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="290" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="290" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="290" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="290" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="290" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="290" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="158" x2="292" y2="158" stroke="currentColor" stroke-width="1"/>
  <line x1="158" y1="24" x2="158" y2="292" stroke="currentColor" stroke-width="1"/>
  <polygon points="302,158 292,163 292,153" fill="currentColor"/>
  <polygon points="158,14 163,24 153,24" fill="currentColor"/>
  <polygon points="14,158 24,153 24,163" fill="currentColor"/>
  <polygon points="158,302 153,292 163,292" fill="currentColor"/>
  <text x="300" y="150" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="166" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="155" x2="26" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="173" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="48" y1="155" x2="48" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="173" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="70" y1="155" x2="70" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="173" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="92" y1="155" x2="92" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="173" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="114" y1="155" x2="114" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="173" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="136" y1="155" x2="136" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="136" y="173" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="180" y1="155" x2="180" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="173" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="202" y1="155" x2="202" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="173" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="224" y1="155" x2="224" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="173" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="246" y1="155" x2="246" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="173" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="268" y1="155" x2="268" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="268" y="173" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="290" y1="155" x2="290" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="173" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="155" y1="290" x2="161" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="294" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="155" y1="268" x2="161" y2="268" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="272" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="155" y1="246" x2="161" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="250" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="155" y1="224" x2="161" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="228" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="155" y1="202" x2="161" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="206" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="155" y1="180" x2="161" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="184" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="155" y1="136" x2="161" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="140" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="155" y1="114" x2="161" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="118" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="155" y1="92" x2="161" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="96" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="155" y1="70" x2="161" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="74" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="155" y1="48" x2="161" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="52" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="155" y1="26" x2="161" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="114" y1="296" x2="114" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="65,26.9 65.3,28 65.5,29.1 65.8,30.2 66,31.3 66.3,32.4 66.5,33.4 66.8,34.5 67,35.6 67.3,36.7 67.5,37.7 67.8,38.8 68,39.8 68.2,40.9 68.5,41.9 68.8,42.9 69,44 69.3,45 69.5,46 69.8,47 70,48 70.3,49 70.5,50 70.8,51 71,52 71.3,52.9 71.5,53.9 71.8,54.9 72,55.8 72.3,56.8 72.5,57.7 72.8,58.7 73,59.6 73.3,60.5 73.5,61.4 73.8,62.4 74,63.3 74.3,64.2 74.5,65.1 74.8,66 75,66.9 75.3,67.7 75.5,68.6 75.8,69.5 76,70.4 76.3,71.2 76.5,72.1 76.8,72.9 77,73.8 77.3,74.6 77.5,75.4 77.8,76.3 78,77.1 78.3,77.9 78.5,78.7 78.8,79.5 79,80.3 79.3,81.1 79.5,81.9 79.8,82.7 80,83.5 80.3,84.2 80.5,85 80.8,85.7 81,86.5 81.3,87.2 81.5,88 81.8,88.7 82,89.5 82.3,90.2 82.5,90.9 82.8,91.6 83,92.3 83.3,93 83.5,93.7 83.8,94.4 84,95.1 84.3,95.8 84.5,96.4 84.8,97.1 85,97.8 85.3,98.4 85.5,99.1 85.8,99.7 86,100.4 86.3,101 86.5,101.6 86.8,102.2 87,102.9 87.3,103.5 87.5,104.1 87.8,104.7 88,105.3 88.3,105.9 88.5,106.4 88.8,107 89,107.6 89.3,108.2 89.5,108.7 89.8,109.3 90,109.8 90.3,110.4 90.5,110.9 90.8,111.4 91,112 91.3,112.5 91.5,113 91.8,113.5 92,114 92.3,114.5 92.5,115 92.8,115.5 93,116 93.3,116.4 93.5,116.9 93.8,117.4 94,117.8 94.3,118.3 94.5,118.7 94.8,119.2 95,119.6 95.3,120 95.5,120.4 95.8,120.9 96,121.3 96.3,121.7 96.5,122.1 96.8,122.5 97,122.9 97.3,123.2 97.5,123.6 97.8,124 98,124.4 98.3,124.7 98.5,125.1 98.8,125.4 99,125.8 99.3,126.1 99.5,126.4 99.8,126.8 100,127.1 100.3,127.4 100.5,127.7 100.8,128 101,128.3 101.3,128.6 101.5,128.9 101.8,129.2 102,129.5 102.3,129.7 102.5,130 102.8,130.2 103,130.5 103.3,130.7 103.5,131 103.8,131.2 104,131.5 104.3,131.7 104.5,131.9 104.8,132.1 105,132.3 105.3,132.5 105.5,132.7 105.8,132.9 106,133.1 106.3,133.3 106.5,133.4 106.8,133.6 107,133.8 107.3,133.9 107.5,134.1 107.8,134.2 108,134.4 108.3,134.5 108.5,134.6 108.8,134.7 109,134.9 109.3,135 109.5,135.1 109.8,135.2 110,135.3 110.3,135.4 110.5,135.4 110.8,135.5 111,135.6 111.3,135.7 111.5,135.7 111.8,135.8 112,135.8 112.3,135.9 112.5,135.9 112.8,135.9 113,136 113.3,136 113.5,136 113.8,136 114,136 114.3,136 114.5,136 114.8,136 115,136 115.3,135.9 115.5,135.9 115.8,135.9 116,135.8 116.3,135.8 116.5,135.7 116.8,135.7 117,135.6 117.3,135.5 117.5,135.4 117.8,135.4 118,135.3 118.3,135.2 118.5,135.1 118.8,135 119,134.9 119.3,134.7 119.5,134.6 119.8,134.5 120,134.4 120.3,134.2 120.5,134.1 120.8,133.9 121,133.8 121.3,133.6 121.5,133.4 121.8,133.3 122,133.1 122.3,132.9 122.5,132.7 122.8,132.5 123,132.3 123.3,132.1 123.5,131.9 123.8,131.7 124,131.5 124.3,131.2 124.5,131 124.8,130.7 125,130.5 125.3,130.2 125.5,130 125.8,129.7 126,129.5 126.3,129.2 126.5,128.9 126.8,128.6 127,128.3 127.3,128 127.5,127.7 127.8,127.4 128,127.1 128.3,126.8 128.5,126.4 128.8,126.1 129,125.8 129.3,125.4 129.5,125.1 129.8,124.7 130,124.4 130.3,124 130.5,123.6 130.8,123.2 131,122.9 131.3,122.5 131.5,122.1 131.8,121.7 132,121.3 132.3,120.9 132.5,120.4 132.8,120 133,119.6 133.3,119.2 133.5,118.7 133.8,118.3 134,117.8 134.3,117.4 134.5,116.9 134.8,116.4 135,116 135.3,115.5 135.5,115 135.8,114.5 136,114 136.3,113.5 136.5,113 136.8,112.5 137,112 137.3,111.4 137.5,110.9 137.8,110.4 138,109.8 138.3,109.3 138.5,108.7 138.8,108.2 139,107.6 139.3,107 139.5,106.4 139.8,105.9 140,105.3 140.3,104.7 140.5,104.1 140.8,103.5 141,102.9 141.3,102.2 141.5,101.6 141.8,101 142,100.4 142.3,99.7 142.5,99.1 142.8,98.4 143,97.8 143.3,97.1 143.5,96.4 143.8,95.8 144,95.1 144.3,94.4 144.5,93.7 144.8,93 145,92.3 145.3,91.6 145.5,90.9 145.8,90.2 146,89.5 146.3,88.7 146.5,88 146.8,87.2 147,86.5 147.3,85.7 147.5,85 147.8,84.2 148,83.5 148.3,82.7 148.5,81.9 148.8,81.1 149,80.3 149.3,79.5 149.5,78.7 149.8,77.9 150,77.1 150.3,76.3 150.5,75.4 150.8,74.6 151,73.8 151.3,72.9 151.5,72.1 151.8,71.2 152,70.4 152.3,69.5 152.5,68.6 152.8,67.7 153,66.9 153.3,66 153.5,65.1 153.8,64.2 154,63.3 154.3,62.4 154.5,61.4 154.8,60.5 155,59.6 155.3,58.7 155.5,57.7 155.8,56.8 156,55.8 156.3,54.9 156.5,53.9 156.8,52.9 157,52 157.3,51 157.5,50 157.8,49 158,48 158.3,47 158.5,46 158.8,45 159,44 159.3,42.9 159.5,41.9 159.8,40.9 160,39.8 160.3,38.8 160.5,37.7 160.8,36.7 161,35.6 161.3,34.5 161.5,33.4 161.8,32.4 162,31.3 162.3,30.2 162.5,29.1 162.8,28 163,26.9" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="65,26.9 72.1,35.5 62.3,37.7" fill="currentColor"/>
  <polygon points="163,26.9 165.7,37.7 155.9,35.5" fill="currentColor"/>
  <circle cx="114" cy="136" r="4" fill="currentColor"/>
  <circle cx="158" cy="48" r="4" fill="currentColor"/>
  <circle cx="70" cy="48" r="4" fill="currentColor"/>
</svg>
</div>

**Example 10.52.** Graph $y=2x^2-4x-3$.

The equation has $y$ on one side. Since $a$ is 2, the parabola opens upward.
To find the axis of symmetry, find $x=-\tfrac{b}{2a}$.

$$x=-\frac{-4}{2\cdot2}=1.$$

The axis of symmetry is $x=1$. The vertex is on the line $x=1$. Find $y$
when $x=1$.

$$y=2(1)^2-4(1)-3=2-4-3=-5.$$

The vertex is $(1,-5)$. The $y$-intercept occurs when $x=0$. Substitute
$x=0$. Simplify.

$$y=2\cdot0^2-4\cdot0-3=-3.$$

The $y$-intercept is $(0,-3)$. The point $(0,-3)$ is one unit to the left of
the line of symmetry. The point one unit to the right of the line of
symmetry is $(2,-3)$. Point symmetric to the $y$-intercept is $(2,-3)$.

The $x$-intercept occurs when $y=0$. Substitute $y=0$. Use the Quadratic
Formula.

$$
\begin{array}{lrcl}
\text{Use the Quadratic Formula.}&x&=&\tfrac{-(-4)\pm\sqrt{(-4)^2-4\cdot2\cdot(-3)}}{2\cdot2}\\[10pt]
\text{Simplify.}&x&=&\tfrac{4\pm\sqrt{16+24}}4\\[10pt]
\text{Simplify inside the radical.}&x&=&\tfrac{4\pm\sqrt{40}}4\\[10pt]
\text{Simplify the radical.}&x&=&\tfrac{4\pm2\sqrt{10}}4\\[10pt]
\text{Factor the GCF.}&x&=&\tfrac{2(2\pm\sqrt{10})}4\\[10pt]
\text{Remove common factors.}&x&=&\tfrac{2\pm\sqrt{10}}2
\end{array}
$$

Write as two equations:
$x=\tfrac{2+\sqrt{10}}2$, $x=\tfrac{2-\sqrt{10}}2$. Approximate the values:
$x\approx2.5$, $x\approx-0.6$. The approximate values of the $x$-intercepts
are $(2.5,0)$ and $(-0.6,0)$. Graph the parabola using the points found.

<div class="ap-figure">
<svg role="img" aria-label="The upward-opening parabola y equals 2x squared minus 4x minus 3, with vertex (1, -5), y-intercept (0, -3), symmetric point (2, -3), approximate x-intercepts (-0.6, 0) and (2.6, 0), and dashed axis of symmetry x equals 1." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316 316" width="316" height="316" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="290" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="290" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="290" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="290" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="290" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="290" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="290" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="290" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="290" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="290" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="268" y1="290" x2="268" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="290" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="290" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="268" x2="290" y2="268" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="290" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="290" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="290" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="290" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="290" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="290" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="290" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="290" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="290" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="158" x2="292" y2="158" stroke="currentColor" stroke-width="1"/>
  <line x1="158" y1="24" x2="158" y2="292" stroke="currentColor" stroke-width="1"/>
  <polygon points="302,158 292,163 292,153" fill="currentColor"/>
  <polygon points="158,14 163,24 153,24" fill="currentColor"/>
  <polygon points="14,158 24,153 24,163" fill="currentColor"/>
  <polygon points="158,302 153,292 163,292" fill="currentColor"/>
  <text x="300" y="150" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="166" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="155" x2="26" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="173" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="48" y1="155" x2="48" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="173" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="70" y1="155" x2="70" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="173" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="92" y1="155" x2="92" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="173" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="114" y1="155" x2="114" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="173" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="136" y1="155" x2="136" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="136" y="173" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="180" y1="155" x2="180" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="173" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="202" y1="155" x2="202" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="173" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="224" y1="155" x2="224" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="173" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="246" y1="155" x2="246" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="173" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="268" y1="155" x2="268" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="268" y="173" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="290" y1="155" x2="290" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="173" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="155" y1="290" x2="161" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="294" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="155" y1="268" x2="161" y2="268" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="272" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="155" y1="246" x2="161" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="250" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="155" y1="224" x2="161" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="228" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="155" y1="202" x2="161" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="206" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="155" y1="180" x2="161" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="184" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="155" y1="136" x2="161" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="140" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="155" y1="114" x2="161" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="118" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="155" y1="92" x2="161" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="96" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="155" y1="70" x2="161" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="74" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="155" y1="48" x2="161" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="52" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="155" y1="26" x2="161" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="180" y1="296" x2="180" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="128.5,26.9 128.8,29.2 129,31.5 129.3,33.9 129.5,36.2 129.8,38.4 130,40.7 130.3,43 130.5,45.3 130.8,47.5 131,49.7 131.3,51.9 131.5,54.2 131.8,56.4 132,58.5 132.3,60.7 132.5,62.9 132.8,65 133,67.2 133.3,69.3 133.5,71.4 133.8,73.5 134,75.6 134.3,77.7 134.5,79.8 134.8,81.9 135,83.9 135.3,85.9 135.5,88 135.8,90 136,92 136.3,94 136.5,96 136.8,97.9 137,99.9 137.3,101.9 137.5,103.8 137.8,105.7 138,107.6 138.3,109.5 138.5,111.4 138.8,113.3 139,115.2 139.3,117 139.5,118.9 139.8,120.7 140,122.5 140.3,124.4 140.5,126.2 140.8,127.9 141,129.7 141.3,131.5 141.5,133.3 141.8,135 142,136.7 142.3,138.4 142.5,140.2 142.8,141.9 143,143.5 143.3,145.2 143.5,146.9 143.8,148.5 144,150.2 144.3,151.8 144.5,153.4 144.8,155 145,156.6 145.3,158.2 145.5,159.8 145.8,161.4 146,162.9 146.3,164.4 146.5,166 146.8,167.5 147,169 147.3,170.5 147.5,172 147.8,173.4 148,174.9 148.3,176.4 148.5,177.8 148.8,179.2 149,180.6 149.3,182 149.5,183.4 149.8,184.8 150,186.2 150.3,187.5 150.5,188.9 150.8,190.2 151,191.5 151.3,192.9 151.5,194.2 151.8,195.4 152,196.7 152.3,198 152.5,199.3 152.8,200.5 153,201.7 153.3,202.9 153.5,204.2 153.8,205.4 154,206.5 154.3,207.7 154.5,208.9 154.8,210 155,211.2 155.3,212.3 155.5,213.4 155.8,214.5 156,215.6 156.3,216.7 156.5,217.8 156.8,218.9 157,219.9 157.3,220.9 157.5,222 157.8,223 158,224 158.3,225 158.5,226 158.8,226.9 159,227.9 159.3,228.9 159.5,229.8 159.8,230.7 160,231.6 160.3,232.5 160.5,233.4 160.8,234.3 161,235.2 161.3,236 161.5,236.9 161.8,237.7 162,238.5 162.3,239.4 162.5,240.2 162.8,240.9 163,241.7 163.3,242.5 163.5,243.3 163.8,244 164,244.7 164.3,245.4 164.5,246.2 164.8,246.9 165,247.5 165.3,248.2 165.5,248.9 165.8,249.5 166,250.2 166.3,250.8 166.5,251.4 166.8,252 167,252.6 167.3,253.2 167.5,253.8 167.8,254.4 168,254.9 168.3,255.4 168.5,256 168.8,256.5 169,257 169.3,257.5 169.5,258 169.8,258.4 170,258.9 170.3,259.4 170.5,259.8 170.8,260.2 171,260.6 171.3,261 171.5,261.4 171.8,261.8 172,262.2 172.3,262.5 172.5,262.9 172.8,263.2 173,263.5 173.3,263.9 173.5,264.2 173.8,264.4 174,264.7 174.3,265 174.5,265.3 174.8,265.5 175,265.7 175.3,265.9 175.5,266.2 175.8,266.4 176,266.5 176.3,266.7 176.5,266.9 176.8,267 177,267.2 177.3,267.3 177.5,267.4 177.8,267.5 178,267.6 178.3,267.7 178.5,267.8 178.8,267.9 179,267.9 179.3,267.9 179.5,268 179.8,268 180,268 180.3,268 180.5,268 180.8,267.9 181,267.9 181.3,267.9 181.5,267.8 181.8,267.7 182,267.6 182.3,267.5 182.5,267.4 182.8,267.3 183,267.2 183.3,267 183.5,266.9 183.8,266.7 184,266.5 184.3,266.4 184.5,266.2 184.8,265.9 185,265.7 185.3,265.5 185.5,265.3 185.8,265 186,264.7 186.3,264.4 186.5,264.2 186.8,263.9 187,263.5 187.3,263.2 187.5,262.9 187.8,262.5 188,262.2 188.3,261.8 188.5,261.4 188.8,261 189,260.6 189.3,260.2 189.5,259.8 189.8,259.4 190,258.9 190.3,258.4 190.5,258 190.8,257.5 191,257 191.3,256.5 191.5,256 191.8,255.4 192,254.9 192.3,254.4 192.5,253.8 192.8,253.2 193,252.6 193.3,252 193.5,251.4 193.8,250.8 194,250.2 194.3,249.5 194.5,248.9 194.8,248.2 195,247.5 195.3,246.9 195.5,246.2 195.8,245.4 196,244.7 196.3,244 196.5,243.3 196.8,242.5 197,241.7 197.3,240.9 197.5,240.2 197.8,239.4 198,238.5 198.3,237.7 198.5,236.9 198.8,236 199,235.2 199.3,234.3 199.5,233.4 199.8,232.5 200,231.6 200.3,230.7 200.5,229.8 200.8,228.9 201,227.9 201.3,226.9 201.5,226 201.8,225 202,224 202.3,223 202.5,222 202.8,220.9 203,219.9 203.3,218.9 203.5,217.8 203.8,216.7 204,215.6 204.3,214.5 204.5,213.4 204.8,212.3 205,211.2 205.3,210 205.5,208.9 205.8,207.7 206,206.5 206.3,205.4 206.5,204.2 206.8,202.9 207,201.7 207.3,200.5 207.5,199.3 207.8,198 208,196.7 208.3,195.4 208.5,194.2 208.8,192.9 209,191.5 209.3,190.2 209.5,188.9 209.8,187.5 210,186.2 210.3,184.8 210.5,183.4 210.8,182 211,180.6 211.3,179.2 211.5,177.8 211.8,176.4 212,174.9 212.3,173.4 212.5,172 212.8,170.5 213,169 213.3,167.5 213.5,166 213.8,164.4 214,162.9 214.3,161.4 214.5,159.8 214.8,158.2 215,156.6 215.3,155 215.5,153.4 215.8,151.8 216,150.2 216.3,148.5 216.5,146.9 216.8,145.2 217,143.5 217.3,141.9 217.5,140.2 217.8,138.4 218,136.7 218.3,135 218.5,133.3 218.8,131.5 219,129.7 219.3,127.9 219.5,126.2 219.8,124.4 220,122.5 220.3,120.7 220.5,118.9 220.8,117 221,115.2 221.3,113.3 221.5,111.4 221.8,109.5 222,107.6 222.3,105.7 222.5,103.8 222.8,101.9 223,99.9 223.3,97.9 223.5,96 223.8,94 224,92 224.3,90 224.5,88 224.8,85.9 225,83.9 225.3,81.9 225.5,79.8 225.8,77.7 226,75.6 226.3,73.5 226.5,71.4 226.8,69.3 227,67.2 227.3,65 227.5,62.9 227.8,60.7 228,58.5 228.3,56.4 228.5,54.2 228.8,51.9 229,49.7 229.3,47.5 229.5,45.3 229.8,43 230,40.7 230.3,38.4 230.5,36.2 230.8,33.9 231,31.5 231.3,29.2 231.5,26.9" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="128.5,26.9 134.5,36.3 124.6,37.4" fill="currentColor"/>
  <polygon points="231.5,26.9 235.4,37.4 225.5,36.3" fill="currentColor"/>
  <circle cx="180" cy="268" r="4" fill="currentColor"/>
  <circle cx="158" cy="224" r="4" fill="currentColor"/>
  <circle cx="202" cy="224" r="4" fill="currentColor"/>
</svg>
</div>

{{< multiplechoice
  question="Graph $y=5x^2+10x+3$. Which description identifies its vertex and orientation?"
  hint="Find $x=-\tfrac{b}{2a}$, substitute, and inspect the sign of $a$."
  answer="Vertex $(-1,-2)$; opens upward"
>}}
Vertex $(-1,-2)$; opens upward
Vertex $(1,-2)$; opens upward
Vertex $(-1,2)$; opens downward
{{< /multiplechoice >}}

## Solve maximum and minimum applications

Knowing that the vertex of a parabola is the lowest or highest point of the
parabola gives us an easy way to determine the minimum or maximum value of a
quadratic equation. The $y$-coordinate of the vertex is the minimum $y$-value
of a parabola that opens upward. It is the maximum $y$-value of a parabola
that opens downward.

<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: '0.5rem' }}>
  <div class="ap-figure">
<svg role="img" aria-label="An upward-opening parabola whose lowest point, the vertex, is marked minimum." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 282" width="260" height="282" font-family="Helvetica, Arial, sans-serif">
  <text x="130" y="14" font-size="13" fill="currentColor" text-anchor="middle">The vertex gives the minimum</text>
  <line x1="24" y1="152" x2="236" y2="152" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="46" x2="130" y2="258" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,152 236,157 236,147" fill="currentColor"/>
  <polygon points="130,36 135,46 125,46" fill="currentColor"/>
  <polygon points="14,152 24,147 24,157" fill="currentColor"/>
  <polygon points="130,268 125,258 135,258" fill="currentColor"/>
  <text x="244" y="144" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="46" font-size="13" fill="currentColor" font-style="italic">y</text>
  <polyline points="61.3,48.2 61.5,49.5 61.8,50.8 62,52.2 62.3,53.5 62.5,54.8 62.8,56.1 63,57.3 63.3,58.6 63.5,59.9 63.8,61.2 64,62.5 64.3,63.7 64.5,65 64.8,66.2 65,67.5 65.3,68.7 65.5,70 65.8,71.2 66,72.5 66.3,73.7 66.5,74.9 66.8,76.1 67,77.3 67.3,78.6 67.5,79.8 67.8,81 68,82.2 68.3,83.3 68.5,84.5 68.8,85.7 69,86.9 69.3,88.1 69.5,89.2 69.8,90.4 70,91.5 70.3,92.7 70.5,93.8 70.8,95 71,96.1 71.3,97.2 71.5,98.4 71.8,99.5 72,100.6 72.3,101.7 72.5,102.8 72.8,103.9 73,105 73.3,106.1 73.5,107.2 73.8,108.3 74,109.4 74.3,110.5 74.5,111.5 74.8,112.6 75,113.7 75.3,114.7 75.5,115.8 75.8,116.8 76,117.8 76.3,118.9 76.5,119.9 76.8,120.9 77,122 77.3,123 77.5,124 77.8,125 78,126 78.3,127 78.5,128 78.8,129 79,130 79.3,130.9 79.5,131.9 79.8,132.9 80,133.8 80.3,134.8 80.5,135.8 80.8,136.7 81,137.7 81.3,138.6 81.5,139.5 81.8,140.5 82,141.4 82.3,142.3 82.5,143.2 82.8,144.1 83,145 83.3,145.9 83.5,146.8 83.8,147.7 84,148.6 84.3,149.5 84.5,150.4 84.8,151.2 85,152.1 85.3,153 85.5,153.8 85.8,154.7 86,155.5 86.3,156.4 86.5,157.2 86.8,158.1 87,158.9 87.3,159.7 87.5,160.5 87.8,161.3 88,162.2 88.3,163 88.5,163.8 88.8,164.6 89,165.3 89.3,166.1 89.5,166.9 89.8,167.7 90,168.5 90.3,169.2 90.5,170 90.8,170.7 91,171.5 91.3,172.2 91.5,173 91.8,173.7 92,174.5 92.3,175.2 92.5,175.9 92.8,176.6 93,177.3 93.3,178.1 93.5,178.8 93.8,179.5 94,180.2 94.3,180.8 94.5,181.5 94.8,182.2 95,182.9 95.3,183.6 95.5,184.2 95.8,184.9 96,185.5 96.3,186.2 96.5,186.8 96.8,187.5 97,188.1 97.3,188.7 97.5,189.4 97.8,190 98,190.6 98.3,191.2 98.5,191.8 98.8,192.4 99,193 99.3,193.6 99.5,194.2 99.8,194.8 100,195.4 100.3,196 100.5,196.5 100.8,197.1 101,197.7 101.3,198.2 101.5,198.8 101.8,199.3 102,199.8 102.3,200.4 102.5,200.9 102.8,201.4 103,202 103.3,202.5 103.5,203 103.8,203.5 104,204 104.3,204.5 104.5,205 104.8,205.5 105,206 105.3,206.4 105.5,206.9 105.8,207.4 106,207.8 106.3,208.3 106.5,208.8 106.8,209.2 107,209.7 107.3,210.1 107.5,210.5 107.8,211 108,211.4 108.3,211.8 108.5,212.2 108.8,212.6 109,213 109.3,213.4 109.5,213.8 109.8,214.2 110,214.6 110.3,215 110.5,215.4 110.8,215.7 111,216.1 111.3,216.5 111.5,216.8 111.8,217.2 112,217.5 112.3,217.9 112.5,218.2 112.8,218.6 113,218.9 113.3,219.2 113.5,219.5 113.8,219.8 114,220.2 114.3,220.5 114.5,220.8 114.8,221.1 115,221.3 115.3,221.6 115.5,221.9 115.8,222.2 116,222.5 116.3,222.7 116.5,223 116.8,223.2 117,223.5 117.3,223.7 117.5,224 117.8,224.2 118,224.5 118.3,224.7 118.5,224.9 118.8,225.1 119,225.3 119.3,225.6 119.5,225.8 119.8,226 120,226.2 120.3,226.3 120.5,226.5 120.8,226.7 121,226.9 121.3,227.1 121.5,227.2 121.8,227.4 122,227.5 122.3,227.7 122.5,227.8 122.8,228 123,228.1 123.3,228.2 123.5,228.4 123.8,228.5 124,228.6 124.3,228.7 124.5,228.8 124.8,228.9 125,229 125.3,229.1 125.5,229.2 125.8,229.3 126,229.4 126.3,229.5 126.5,229.5 126.8,229.6 127,229.7 127.3,229.7 127.5,229.8 127.8,229.8 128,229.8 128.3,229.9 128.5,229.9 128.8,229.9 129,230 129.3,230 129.5,230 129.8,230 130,230 130.3,230 130.5,230 130.8,230 131,230 131.3,229.9 131.5,229.9 131.8,229.9 132,229.8 132.3,229.8 132.5,229.8 132.8,229.7 133,229.7 133.3,229.6 133.5,229.5 133.8,229.5 134,229.4 134.3,229.3 134.5,229.2 134.8,229.1 135,229 135.3,228.9 135.5,228.8 135.8,228.7 136,228.6 136.3,228.5 136.5,228.4 136.8,228.2 137,228.1 137.3,228 137.5,227.8 137.8,227.7 138,227.5 138.3,227.4 138.5,227.2 138.8,227.1 139,226.9 139.3,226.7 139.5,226.5 139.8,226.3 140,226.2 140.3,226 140.5,225.8 140.8,225.6 141,225.3 141.3,225.1 141.5,224.9 141.8,224.7 142,224.5 142.3,224.2 142.5,224 142.8,223.7 143,223.5 143.3,223.2 143.5,223 143.8,222.7 144,222.5 144.3,222.2 144.5,221.9 144.8,221.6 145,221.3 145.3,221.1 145.5,220.8 145.8,220.5 146,220.2 146.3,219.8 146.5,219.5 146.8,219.2 147,218.9 147.3,218.6 147.5,218.2 147.8,217.9 148,217.5 148.3,217.2 148.5,216.8 148.8,216.5 149,216.1 149.3,215.7 149.5,215.4 149.8,215 150,214.6 150.3,214.2 150.5,213.8 150.8,213.4 151,213 151.3,212.6 151.5,212.2 151.8,211.8 152,211.4 152.3,211 152.5,210.5 152.8,210.1 153,209.7 153.3,209.2 153.5,208.8 153.8,208.3 154,207.8 154.3,207.4 154.5,206.9 154.8,206.4 155,206 155.3,205.5 155.5,205 155.8,204.5 156,204 156.3,203.5 156.5,203 156.8,202.5 157,202 157.3,201.4 157.5,200.9 157.8,200.4 158,199.8 158.3,199.3 158.5,198.8 158.8,198.2 159,197.7 159.3,197.1 159.5,196.5 159.8,196 160,195.4 160.3,194.8 160.5,194.2 160.8,193.6 161,193 161.3,192.4 161.5,191.8 161.8,191.2 162,190.6 162.3,190 162.5,189.4 162.8,188.7 163,188.1 163.3,187.5 163.5,186.8 163.8,186.2 164,185.5 164.3,184.9 164.5,184.2 164.8,183.6 165,182.9 165.3,182.2 165.5,181.5 165.8,180.8 166,180.2 166.3,179.5 166.5,178.8 166.8,178.1 167,177.3 167.3,176.6 167.5,175.9 167.8,175.2 168,174.5 168.3,173.7 168.5,173 168.8,172.2 169,171.5 169.3,170.7 169.5,170 169.8,169.2 170,168.5 170.3,167.7 170.5,166.9 170.8,166.1 171,165.3 171.3,164.6 171.5,163.8 171.8,163 172,162.2 172.3,161.3 172.5,160.5 172.8,159.7 173,158.9 173.3,158.1 173.5,157.2 173.8,156.4 174,155.5 174.3,154.7 174.5,153.8 174.8,153 175,152.1 175.3,151.2 175.5,150.4 175.8,149.5 176,148.6 176.3,147.7 176.5,146.8 176.8,145.9 177,145 177.3,144.1 177.5,143.2 177.8,142.3 178,141.4 178.3,140.5 178.5,139.5 178.8,138.6 179,137.7 179.3,136.7 179.5,135.8 179.8,134.8 180,133.8 180.3,132.9 180.5,131.9 180.8,130.9 181,130 181.3,129 181.5,128 181.8,127 182,126 182.3,125 182.5,124 182.8,123 183,122 183.3,120.9 183.5,119.9 183.8,118.9 184,117.8 184.3,116.8 184.5,115.8 184.8,114.7 185,113.7 185.3,112.6 185.5,111.5 185.8,110.5 186,109.4 186.3,108.3 186.5,107.2 186.8,106.1 187,105 187.3,103.9 187.5,102.8 187.8,101.7 188,100.6 188.3,99.5 188.5,98.4 188.8,97.2 189,96.1 189.3,95 189.5,93.8 189.8,92.7 190,91.5 190.3,90.4 190.5,89.2 190.8,88.1 191,86.9 191.3,85.7 191.5,84.5 191.8,83.3 192,82.2 192.3,81 192.5,79.8 192.8,78.6 193,77.3 193.3,76.1 193.5,74.9 193.8,73.7 194,72.5 194.3,71.2 194.5,70 194.8,68.7 195,67.5 195.3,66.2 195.5,65 195.8,63.7 196,62.5 196.3,61.2 196.5,59.9 196.8,58.6 197,57.3 197.3,56.1 197.5,54.8 197.8,53.5 198,52.2 198.3,50.8 198.5,49.5 198.8,48.2" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="61.3,48.2 68,57.1 58.2,59" fill="currentColor"/>
  <polygon points="198.8,48.2 201.8,59 192,57.1" fill="currentColor"/>
  <circle cx="130" cy="230" r="4" fill="currentColor"/>
  <text x="153.6" y="242" font-size="13" fill="currentColor">minimum</text>
</svg>
</div>
  <div class="ap-figure">
<svg role="img" aria-label="A downward-opening parabola whose highest point, the vertex, is marked maximum." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 282" width="260" height="282" font-family="Helvetica, Arial, sans-serif">
  <text x="130" y="14" font-size="13" fill="currentColor" text-anchor="middle">The vertex gives the maximum</text>
  <line x1="24" y1="152" x2="236" y2="152" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="46" x2="130" y2="258" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,152 236,157 236,147" fill="currentColor"/>
  <polygon points="130,36 135,46 125,46" fill="currentColor"/>
  <polygon points="14,152 24,147 24,157" fill="currentColor"/>
  <polygon points="130,268 125,258 135,258" fill="currentColor"/>
  <text x="244" y="144" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="46" font-size="13" fill="currentColor" font-style="italic">y</text>
  <polyline points="78,256 78.3,254.8 78.5,253.5 78.8,252.3 79,251 79.3,249.8 79.5,248.6 79.8,247.4 80,246.2 80.3,244.9 80.5,243.7 80.8,242.5 81,241.3 81.3,240.2 81.5,239 81.8,237.8 82,236.6 82.3,235.4 82.5,234.3 82.8,233.1 83,232 83.3,230.8 83.5,229.7 83.8,228.5 84,227.4 84.3,226.3 84.5,225.1 84.8,224 85,222.9 85.3,221.8 85.5,220.7 85.8,219.6 86,218.5 86.3,217.4 86.5,216.3 86.8,215.2 87,214.1 87.3,213 87.5,212 87.8,210.9 88,209.8 88.3,208.8 88.5,207.7 88.8,206.7 89,205.7 89.3,204.6 89.5,203.6 89.8,202.6 90,201.5 90.3,200.5 90.5,199.5 90.8,198.5 91,197.5 91.3,196.5 91.5,195.5 91.8,194.5 92,193.5 92.3,192.6 92.5,191.6 92.8,190.6 93,189.7 93.3,188.7 93.5,187.7 93.8,186.8 94,185.8 94.3,184.9 94.5,184 94.8,183 95,182.1 95.3,181.2 95.5,180.3 95.8,179.4 96,178.5 96.3,177.6 96.5,176.7 96.8,175.8 97,174.9 97.3,174 97.5,173.1 97.8,172.3 98,171.4 98.3,170.5 98.5,169.7 98.8,168.8 99,168 99.3,167.1 99.5,166.3 99.8,165.4 100,164.6 100.3,163.8 100.5,163 100.8,162.2 101,161.3 101.3,160.5 101.5,159.7 101.8,158.9 102,158.2 102.3,157.4 102.5,156.6 102.8,155.8 103,155 103.3,154.3 103.5,153.5 103.8,152.8 104,152 104.3,151.3 104.5,150.5 104.8,149.8 105,149 105.3,148.3 105.5,147.6 105.8,146.9 106,146.2 106.3,145.4 106.5,144.7 106.8,144 107,143.3 107.3,142.7 107.5,142 107.8,141.3 108,140.6 108.3,139.9 108.5,139.3 108.8,138.6 109,138 109.3,137.3 109.5,136.7 109.8,136 110,135.4 110.3,134.8 110.5,134.1 110.8,133.5 111,132.9 111.3,132.3 111.5,131.7 111.8,131.1 112,130.5 112.3,129.9 112.5,129.3 112.8,128.7 113,128.1 113.3,127.5 113.5,127 113.8,126.4 114,125.8 114.3,125.3 114.5,124.7 114.8,124.2 115,123.7 115.3,123.1 115.5,122.6 115.8,122.1 116,121.5 116.3,121 116.5,120.5 116.8,120 117,119.5 117.3,119 117.5,118.5 117.8,118 118,117.5 118.3,117.1 118.5,116.6 118.8,116.1 119,115.7 119.3,115.2 119.5,114.7 119.8,114.3 120,113.8 120.3,113.4 120.5,113 120.8,112.5 121,112.1 121.3,111.7 121.5,111.3 121.8,110.9 122,110.5 122.3,110.1 122.5,109.7 122.8,109.3 123,108.9 123.3,108.5 123.5,108.1 123.8,107.8 124,107.4 124.3,107 124.5,106.7 124.8,106.3 125,106 125.3,105.6 125.5,105.3 125.8,104.9 126,104.6 126.3,104.3 126.5,104 126.8,103.7 127,103.3 127.3,103 127.5,102.7 127.8,102.4 128,102.2 128.3,101.9 128.5,101.6 128.8,101.3 129,101 129.3,100.8 129.5,100.5 129.8,100.3 130,100 130.3,99.8 130.5,99.5 130.8,99.3 131,99 131.3,98.8 131.5,98.6 131.8,98.4 132,98.2 132.3,97.9 132.5,97.7 132.8,97.5 133,97.3 133.3,97.2 133.5,97 133.8,96.8 134,96.6 134.3,96.4 134.5,96.3 134.8,96.1 135,96 135.3,95.8 135.5,95.7 135.8,95.5 136,95.4 136.3,95.3 136.5,95.1 136.8,95 137,94.9 137.3,94.8 137.5,94.7 137.8,94.6 138,94.5 138.3,94.4 138.5,94.3 138.8,94.2 139,94.1 139.3,94 139.5,94 139.8,93.9 140,93.8 140.3,93.8 140.5,93.7 140.8,93.7 141,93.7 141.3,93.6 141.5,93.6 141.8,93.6 142,93.5 142.3,93.5 142.5,93.5 142.8,93.5 143,93.5 143.3,93.5 143.5,93.5 143.8,93.5 144,93.5 144.3,93.6 144.5,93.6 144.8,93.6 145,93.7 145.3,93.7 145.5,93.7 145.8,93.8 146,93.8 146.3,93.9 146.5,94 146.8,94 147,94.1 147.3,94.2 147.5,94.3 147.8,94.4 148,94.5 148.3,94.6 148.5,94.7 148.8,94.8 149,94.9 149.3,95 149.5,95.1 149.8,95.3 150,95.4 150.3,95.5 150.5,95.7 150.8,95.8 151,96 151.3,96.1 151.5,96.3 151.8,96.4 152,96.6 152.3,96.8 152.5,97 152.8,97.2 153,97.3 153.3,97.5 153.5,97.7 153.8,97.9 154,98.2 154.3,98.4 154.5,98.6 154.8,98.8 155,99 155.3,99.3 155.5,99.5 155.8,99.8 156,100 156.3,100.3 156.5,100.5 156.8,100.8 157,101 157.3,101.3 157.5,101.6 157.8,101.9 158,102.2 158.3,102.4 158.5,102.7 158.8,103 159,103.3 159.3,103.7 159.5,104 159.8,104.3 160,104.6 160.3,104.9 160.5,105.3 160.8,105.6 161,106 161.3,106.3 161.5,106.7 161.8,107 162,107.4 162.3,107.8 162.5,108.1 162.8,108.5 163,108.9 163.3,109.3 163.5,109.7 163.8,110.1 164,110.5 164.3,110.9 164.5,111.3 164.8,111.7 165,112.1 165.3,112.5 165.5,113 165.8,113.4 166,113.8 166.3,114.3 166.5,114.7 166.8,115.2 167,115.7 167.3,116.1 167.5,116.6 167.8,117.1 168,117.5 168.3,118 168.5,118.5 168.8,119 169,119.5 169.3,120 169.5,120.5 169.8,121 170,121.5 170.3,122.1 170.5,122.6 170.8,123.1 171,123.7 171.3,124.2 171.5,124.7 171.8,125.3 172,125.8 172.3,126.4 172.5,127 172.8,127.5 173,128.1 173.3,128.7 173.5,129.3 173.8,129.9 174,130.5 174.3,131.1 174.5,131.7 174.8,132.3 175,132.9 175.3,133.5 175.5,134.1 175.8,134.8 176,135.4 176.3,136 176.5,136.7 176.8,137.3 177,138 177.3,138.6 177.5,139.3 177.8,139.9 178,140.6 178.3,141.3 178.5,142 178.8,142.7 179,143.3 179.3,144 179.5,144.7 179.8,145.4 180,146.2 180.3,146.9 180.5,147.6 180.8,148.3 181,149 181.3,149.8 181.5,150.5 181.8,151.3 182,152 182.3,152.8 182.5,153.5 182.8,154.3 183,155 183.3,155.8 183.5,156.6 183.8,157.4 184,158.2 184.3,158.9 184.5,159.7 184.8,160.5 185,161.3 185.3,162.2 185.5,163 185.8,163.8 186,164.6 186.3,165.4 186.5,166.3 186.8,167.1 187,168 187.3,168.8 187.5,169.7 187.8,170.5 188,171.4 188.3,172.3 188.5,173.1 188.8,174 189,174.9 189.3,175.8 189.5,176.7 189.8,177.6 190,178.5 190.3,179.4 190.5,180.3 190.8,181.2 191,182.1 191.3,183 191.5,184 191.8,184.9 192,185.8 192.3,186.8 192.5,187.7 192.8,188.7 193,189.7 193.3,190.6 193.5,191.6 193.8,192.6 194,193.5 194.3,194.5 194.5,195.5 194.8,196.5 195,197.5 195.3,198.5 195.5,199.5 195.8,200.5 196,201.5 196.3,202.6 196.5,203.6 196.8,204.6 197,205.7 197.3,206.7 197.5,207.7 197.8,208.8 198,209.8 198.3,210.9 198.5,212 198.8,213 199,214.1 199.3,215.2 199.5,216.3 199.8,217.4 200,218.5 200.3,219.6 200.5,220.7 200.8,221.8 201,222.9 201.3,224 201.5,225.1 201.8,226.3 202,227.4 202.3,228.5 202.5,229.7 202.8,230.8 203,232 203.3,233.1 203.5,234.3 203.8,235.4 204,236.6 204.3,237.8 204.5,239 204.8,240.2 205,241.3 205.3,242.5 205.5,243.7 205.8,244.9 206,246.2 206.3,247.4 206.5,248.6 206.8,249.8 207,251 207.3,252.3 207.5,253.5 207.8,254.8 208,256" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="78,256 75.1,245.2 84.9,247.2" fill="currentColor"/>
  <polygon points="208,256 201.1,247.2 210.9,245.2" fill="currentColor"/>
  <circle cx="143" cy="93.5" r="4" fill="currentColor"/>
  <text x="166.6" y="87.5" font-size="13" fill="currentColor">maximum</text>
</svg>
</div>
</div>

{{< callout type="info" >}}
  **Minimum or maximum values of a quadratic equation.** The
  **y-coordinate of the vertex** of the graph of a quadratic equation is the

  - minimum value of the quadratic equation if the parabola opens upward.
  - maximum value of the quadratic equation if the parabola opens downward.
{{< /callout >}}

**Example 10.53.** Find the minimum value of $y=x^2+2x-8$.

Since $a$ is positive, the parabola opens upward. The quadratic equation has
a minimum. Find the axis of symmetry.

$$x=-\frac{2}{2\cdot1}=-1.$$

The axis of symmetry is $x=-1$. The vertex is on the line $x=-1$. Find $y$
when $x=-1$.

$$y=(-1)^2+2(-1)-8=1-2-8=-9.$$

The vertex is $(-1,-9)$. Since the parabola has a minimum, the $y$-coordinate
of the vertex is the minimum $y$-value of the quadratic equation. The
minimum value of the quadratic is $-9$ and it occurs when $x=-1$. Show the
graph to verify the result.

<div class="ap-figure">
<svg role="img" aria-label="The upward-opening parabola y equals x squared plus 2x minus 8, with minimum vertex (-1, -9) and dashed axis of symmetry x equals -1." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 316" width="272" height="316" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="290" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="290" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="290" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="290" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="290" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="290" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="290" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="290" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="290" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="290" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="246" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="268" x2="246" y2="268" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="246" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="246" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="246" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="246" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="246" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="246" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="246" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="246" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="246" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="70" x2="248" y2="70" stroke="currentColor" stroke-width="1"/>
  <line x1="136" y1="24" x2="136" y2="292" stroke="currentColor" stroke-width="1"/>
  <polygon points="258,70 248,75 248,65" fill="currentColor"/>
  <polygon points="136,14 141,24 131,24" fill="currentColor"/>
  <polygon points="14,70 24,65 24,75" fill="currentColor"/>
  <polygon points="136,302 131,292 141,292" fill="currentColor"/>
  <text x="256" y="62" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="144" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="67" x2="26" y2="73" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="85" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="48" y1="67" x2="48" y2="73" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="85" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="70" y1="67" x2="70" y2="73" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="85" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="92" y1="67" x2="92" y2="73" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="85" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="114" y1="67" x2="114" y2="73" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="85" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="158" y1="67" x2="158" y2="73" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="85" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="180" y1="67" x2="180" y2="73" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="85" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="202" y1="67" x2="202" y2="73" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="85" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="224" y1="67" x2="224" y2="73" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="85" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="67" x2="246" y2="73" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="85" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="133" y1="290" x2="139" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="294" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="133" y1="268" x2="139" y2="268" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="272" font-size="11" fill="currentColor" text-anchor="end">−9</text>
  <line x1="133" y1="246" x2="139" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="250" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="133" y1="224" x2="139" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="228" font-size="11" fill="currentColor" text-anchor="end">−7</text>
  <line x1="133" y1="202" x2="139" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="206" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="133" y1="180" x2="139" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="184" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="133" y1="158" x2="139" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="162" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="133" y1="136" x2="139" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="140" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="133" y1="114" x2="139" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="118" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="133" y1="92" x2="139" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="96" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="133" y1="48" x2="139" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="52" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="133" y1="26" x2="139" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="30" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="114" y1="296" x2="114" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="41.3,27.4 41.5,29.1 41.8,30.7 42,32.4 42.3,34 42.5,35.6 42.8,37.2 43,38.9 43.3,40.5 43.5,42.1 43.8,43.7 44,45.3 44.3,46.9 44.5,48.4 44.8,50 45,51.6 45.3,53.2 45.5,54.7 45.8,56.3 46,57.8 46.2,59.4 46.5,60.9 46.8,62.4 47,64 47.3,65.5 47.5,67 47.8,68.5 48,70 48.3,71.5 48.5,73 48.8,74.5 49,76 49.3,77.4 49.5,78.9 49.8,80.4 50,81.8 50.3,83.3 50.5,84.7 50.8,86.2 51,87.6 51.3,89 51.5,90.4 51.8,91.9 52,93.3 52.3,94.7 52.5,96.1 52.8,97.5 53,98.9 53.3,100.2 53.5,101.6 53.8,103 54,104.4 54.3,105.7 54.5,107.1 54.8,108.4 55,109.8 55.3,111.1 55.5,112.4 55.8,113.8 56,115.1 56.3,116.4 56.5,117.7 56.8,119 57,120.3 57.3,121.6 57.5,122.9 57.8,124.2 58,125.5 58.3,126.7 58.5,128 58.8,129.2 59,130.5 59.3,131.7 59.5,133 59.8,134.2 60,135.5 60.3,136.7 60.5,137.9 60.8,139.1 61,140.3 61.3,141.5 61.5,142.7 61.8,143.9 62,145.1 62.3,146.3 62.5,147.4 62.8,148.6 63,149.8 63.3,150.9 63.5,152.1 63.8,153.2 64,154.4 64.3,155.5 64.5,156.6 64.8,157.7 65,158.9 65.3,160 65.5,161.1 65.8,162.2 66,163.3 66.3,164.4 66.5,165.4 66.8,166.5 67,167.6 67.3,168.7 67.5,169.7 67.8,170.8 68,171.8 68.3,172.9 68.5,173.9 68.8,174.9 69,176 69.3,177 69.5,178 69.8,179 70,180 70.3,181 70.5,182 70.8,183 71,184 71.3,184.9 71.5,185.9 71.8,186.9 72,187.8 72.3,188.8 72.5,189.7 72.8,190.7 73,191.6 73.3,192.5 73.5,193.4 73.8,194.4 74,195.3 74.3,196.2 74.5,197.1 74.8,198 75,198.9 75.3,199.7 75.5,200.6 75.8,201.5 76,202.4 76.3,203.2 76.5,204.1 76.8,204.9 77,205.8 77.3,206.6 77.5,207.4 77.8,208.3 78,209.1 78.3,209.9 78.5,210.7 78.8,211.5 79,212.3 79.3,213.1 79.5,213.9 79.8,214.7 80,215.5 80.3,216.2 80.5,217 80.8,217.7 81,218.5 81.3,219.2 81.5,220 81.8,220.7 82,221.5 82.3,222.2 82.5,222.9 82.8,223.6 83,224.3 83.3,225 83.5,225.7 83.8,226.4 84,227.1 84.3,227.8 84.5,228.4 84.8,229.1 85,229.8 85.3,230.4 85.5,231.1 85.8,231.7 86,232.4 86.3,233 86.5,233.6 86.8,234.2 87,234.9 87.3,235.5 87.5,236.1 87.8,236.7 88,237.3 88.3,237.9 88.5,238.4 88.8,239 89,239.6 89.3,240.2 89.5,240.7 89.8,241.3 90,241.8 90.3,242.4 90.5,242.9 90.8,243.4 91,244 91.3,244.5 91.5,245 91.8,245.5 92,246 92.3,246.5 92.5,247 92.8,247.5 93,248 93.3,248.4 93.5,248.9 93.8,249.4 94,249.8 94.3,250.3 94.5,250.7 94.8,251.2 95,251.6 95.3,252 95.5,252.4 95.8,252.9 96,253.3 96.3,253.7 96.5,254.1 96.8,254.5 97,254.9 97.3,255.2 97.5,255.6 97.8,256 98,256.4 98.3,256.7 98.5,257.1 98.8,257.4 99,257.8 99.3,258.1 99.5,258.4 99.8,258.8 100,259.1 100.3,259.4 100.5,259.7 100.8,260 101,260.3 101.3,260.6 101.5,260.9 101.8,261.2 102,261.5 102.3,261.7 102.5,262 102.8,262.2 103,262.5 103.3,262.7 103.5,263 103.8,263.2 104,263.5 104.3,263.7 104.5,263.9 104.8,264.1 105,264.3 105.3,264.5 105.5,264.7 105.8,264.9 106,265.1 106.3,265.3 106.5,265.4 106.8,265.6 107,265.8 107.3,265.9 107.5,266.1 107.8,266.2 108,266.4 108.3,266.5 108.5,266.6 108.8,266.7 109,266.9 109.3,267 109.5,267.1 109.8,267.2 110,267.3 110.3,267.4 110.5,267.4 110.8,267.5 111,267.6 111.3,267.7 111.5,267.7 111.8,267.8 112,267.8 112.3,267.9 112.5,267.9 112.8,267.9 113,268 113.3,268 113.5,268 113.8,268 114,268 114.3,268 114.5,268 114.8,268 115,268 115.3,267.9 115.5,267.9 115.8,267.9 116,267.8 116.3,267.8 116.5,267.7 116.8,267.7 117,267.6 117.3,267.5 117.5,267.4 117.8,267.4 118,267.3 118.3,267.2 118.5,267.1 118.8,267 119,266.9 119.3,266.7 119.5,266.6 119.8,266.5 120,266.4 120.3,266.2 120.5,266.1 120.8,265.9 121,265.8 121.2,265.6 121.5,265.4 121.8,265.3 122,265.1 122.3,264.9 122.5,264.7 122.8,264.5 123,264.3 123.3,264.1 123.5,263.9 123.8,263.7 124,263.5 124.3,263.2 124.5,263 124.8,262.7 125,262.5 125.3,262.2 125.5,262 125.8,261.7 126,261.5 126.3,261.2 126.5,260.9 126.7,260.6 127,260.3 127.3,260 127.5,259.7 127.8,259.4 128,259.1 128.3,258.8 128.5,258.4 128.8,258.1 129,257.8 129.3,257.4 129.5,257.1 129.8,256.7 130,256.4 130.3,256 130.5,255.6 130.8,255.2 131,254.9 131.3,254.5 131.5,254.1 131.8,253.7 132,253.3 132.3,252.9 132.5,252.4 132.8,252 133,251.6 133.3,251.2 133.5,250.7 133.8,250.3 134,249.8 134.3,249.4 134.5,248.9 134.8,248.4 135,248 135.3,247.5 135.5,247 135.8,246.5 136,246 136.3,245.5 136.5,245 136.8,244.5 137,244 137.3,243.4 137.5,242.9 137.8,242.4 138,241.8 138.3,241.3 138.5,240.7 138.8,240.2 139,239.6 139.3,239 139.5,238.4 139.8,237.9 140,237.3 140.3,236.7 140.5,236.1 140.8,235.5 141,234.9 141.3,234.2 141.5,233.6 141.8,233 142,232.4 142.3,231.7 142.5,231.1 142.8,230.4 143,229.8 143.3,229.1 143.5,228.4 143.8,227.8 144,227.1 144.3,226.4 144.5,225.7 144.8,225 145,224.3 145.3,223.6 145.5,222.9 145.8,222.2 146,221.5 146.3,220.7 146.5,220 146.8,219.2 147,218.5 147.3,217.7 147.5,217 147.8,216.2 148,215.5 148.3,214.7 148.5,213.9 148.8,213.1 149,212.3 149.3,211.5 149.5,210.7 149.8,209.9 150,209.1 150.3,208.3 150.5,207.4 150.8,206.6 151,205.8 151.3,204.9 151.5,204.1 151.8,203.2 152,202.4 152.3,201.5 152.5,200.6 152.8,199.7 153,198.9 153.3,198 153.5,197.1 153.8,196.2 154,195.3 154.3,194.4 154.5,193.4 154.8,192.5 155,191.6 155.3,190.7 155.5,189.7 155.8,188.8 156,187.8 156.3,186.9 156.5,185.9 156.8,184.9 157,184 157.3,183 157.5,182 157.8,181 158,180 158.3,179 158.5,178 158.8,177 159,176 159.3,174.9 159.5,173.9 159.8,172.9 160,171.8 160.3,170.8 160.5,169.7 160.8,168.7 161,167.6 161.3,166.5 161.5,165.4 161.8,164.4 162,163.3 162.3,162.2 162.5,161.1 162.8,160 163,158.9 163.3,157.7 163.5,156.6 163.8,155.5 164,154.4 164.3,153.2 164.5,152.1 164.8,150.9 165,149.8 165.3,148.6 165.5,147.4 165.8,146.3 166,145.1 166.3,143.9 166.5,142.7 166.8,141.5 167,140.3 167.3,139.1 167.5,137.9 167.8,136.7 168,135.5 168.3,134.2 168.5,133 168.8,131.7 169,130.5 169.3,129.2 169.5,128 169.8,126.7 170,125.5 170.3,124.2 170.5,122.9 170.8,121.6 171,120.3 171.3,119 171.5,117.7 171.8,116.4 172,115.1 172.3,113.8 172.5,112.4 172.8,111.1 173,109.8 173.3,108.4 173.5,107.1 173.8,105.7 174,104.4 174.3,103 174.5,101.6 174.8,100.2 175,98.9 175.3,97.5 175.5,96.1 175.8,94.7 176,93.3 176.3,91.9 176.5,90.4 176.8,89 177,87.6 177.3,86.2 177.5,84.7 177.8,83.3 178,81.8 178.3,80.4 178.5,78.9 178.8,77.4 179,76 179.3,74.5 179.5,73 179.8,71.5 180,70 180.3,68.5 180.5,67 180.8,65.5 181,64 181.3,62.4 181.5,60.9 181.8,59.4 182,57.8 182.3,56.3 182.5,54.7 182.8,53.2 183,51.6 183.3,50 183.5,48.4 183.8,46.9 184,45.3 184.3,43.7 184.5,42.1 184.8,40.5 185,38.9 185.3,37.2 185.5,35.6 185.8,34 186,32.4 186.3,30.7 186.5,29.1 186.8,27.4" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinejoin="round" stroke-linecap="round"/>
  <polygon points="41.3,27.4 47.7,36.6 37.8,38.1" fill="currentColor"/>
  <polygon points="186.8,27.4 190.2,38.1 180.3,36.6" fill="currentColor"/>
  <circle cx="114" cy="268" r="4" fill="currentColor"/>
</svg>
</div>

{{< fillin
  question="Find the minimum value of $y=x^2-8x+12$."
  answer="-4"
  hint="Find the vertex using $x=-\tfrac{b}{2a}$, then substitute."
>}}

We have used the formula

$$h=-16t^2+v_0t+h_0$$

to calculate the height in feet, $h$, of an object shot upwards into the air
with initial velocity, $v_0$, after $t$ seconds.

This formula is a quadratic equation in the variable $t$, so its graph is a
parabola. By solving for the coordinates of the vertex, we can find how long
it will take the object to reach its maximum height. Then, we can calculate
the maximum height.

**Example 10.54.** The quadratic equation $h=-16t^2+v_0t+h_0$ models the
height of a volleyball hit straight upwards with velocity 176 feet per
second from a height of 4 feet.

(a) How many seconds will it take the volleyball to reach its maximum
height? (b) Find the maximum height of the volleyball.

Here $h=-16t^2+176t+4$. Since $a$ is negative, the parabola opens downward.
The quadratic equation has a maximum.

(a) Find the axis of symmetry.

$$t=-\frac{b}{2a}=-\frac{176}{2(-16)}=5.5.$$

The axis of symmetry is $t=5.5$. The vertex is on the line $t=5.5$. The
maximum occurs when $t=5.5$ seconds.

(b) Find $h$ when $t=5.5$.

$$h=-16(5.5)^2+176(5.5)+4.$$

Use a calculator to simplify: $h=488$. The vertex is $(5.5,488)$. Since the
parabola has a maximum, the $h$-coordinate of the vertex is the maximum
$y$-value of the quadratic equation. The maximum value of the quadratic is
488 feet and it occurs when $t=5.5$ seconds.

{{< fillin
  question="For $h=-16t^2+128t+32$, how many seconds will it take the stone to reach its maximum height?"
  answer="4"
  hint="Use $t=-\tfrac{b}{2a}$ with $a=-16$ and $b=128$."
>}}

## Key terms

**quadratic equation in two variables** — an equation of the form
$y=ax^2+bx+c$, where $a$, $b$, and $c$ are real numbers and $a\ne0$.
**parabola** — the graph of a quadratic equation in two variables. **axis of
symmetry** — the vertical line passing through the middle of the parabola.
**vertex** — the point on the parabola that is on the axis of symmetry; it
is the lowest or highest point on the parabola. **x-intercepts of a
parabola** — the points where $y=0$. **y-intercept of a parabola** — the
point where $x=0$.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 10.5: Graphing Quadratic Equations in Two Variables](https://openstax.org/books/elementary-algebra-2e/pages/10-5-graphing-quadratic-equations-in-two-variables) by Lynn Marecek and MaryAnne Anthony-Smith, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the source parabola graphs as accessible inline graphics, recast source data tables as markdown tables, omitted the Be Prepared quiz, media links, and end-of-section exercises, and converted selected practice problems ("Try Its") into interactive exercises with instant feedback.</small>
