---
title: Transformation of Functions
description: >-
  Vertical and horizontal shifts, reflections about the axes, even and odd
  functions, vertical and horizontal stretches and compressions, and
  performing a sequence of transformations — adapted from OpenStax
  Precalculus 2e, Section 1.5.
source_section: "1.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph functions using vertical and horizontal shifts
- Graph functions using reflections about the $x$-axis and the $y$-axis
- Determine whether a function is even, odd, or neither from its graph
- Graph functions using compressions and stretches
- Combine transformations
{{< /callout >}}

We all know that a flat mirror enables us to see an accurate image of
ourselves and whatever is behind us. When we tilt the mirror, the images we
see may shift horizontally or vertically. But what happens when we bend a
flexible mirror? Like a carnival funhouse mirror, it presents us with a
distorted image of ourselves, stretched or compressed horizontally or
vertically. In a similar way, we can distort or transform mathematical
functions to better adapt them to describing objects or processes in the real
world. In this section, we will take a look at several kinds of
transformations.

## Graphing functions using vertical and horizontal shifts

Often when given a problem, we try to model the scenario using mathematics in
the form of words, tables, graphs, and equations. One method we can employ is
to adapt the basic graphs of the toolkit functions to build new models for a
given scenario. There are systematic ways to alter functions to construct
appropriate models for the problems we are trying to solve.

### Identifying vertical shifts

One simple kind of **transformation** involves shifting the entire graph of a
function up, down, right, or left. The simplest shift is a **vertical
shift**, moving the graph up or down, because this transformation involves
adding a positive or negative constant to the function. In other words, we
add the same constant to the output value of the function regardless of the
input. For a function $g(x)=f(x)+k$, the function $f(x)$ is shifted vertically
$k$ units.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The cube root curve and, dashed, the same curve shifted one unit up. Both rise from the third quadrant into the first; the dashed copy passes through (0, 1) instead of the origin.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"unit":30,"tickLabels":true,"curves":[{"kind":"cbrt"},{"kind":"cbrt","k":1,"dashed":true}]}'>
<svg role="img" aria-label="The cube root curve and, dashed, the same curve shifted one unit up. Both rise from the third quadrant into the first; the dashed copy passes through (0, 1) instead of the origin." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232 232" width="232" height="232" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="206" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="56" y1="206" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="206" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="206" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="206" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="206" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="206" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="176" x2="206" y2="176" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="206" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="206" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="56" x2="206" y2="56" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="116" x2="208" y2="116" stroke="currentColor" stroke-width="1"/>
  <line x1="116" y1="24" x2="116" y2="208" stroke="currentColor" stroke-width="1"/>
  <polygon points="218,116 208,121 208,111" fill="currentColor"/>
  <polygon points="116,14 121,24 111,24" fill="currentColor"/>
  <polygon points="14,116 24,111 24,121" fill="currentColor"/>
  <polygon points="116,218 111,208 121,208" fill="currentColor"/>
  <text x="216" y="108" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="124" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="113" x2="26" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="131" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="56" y1="113" x2="56" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="131" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="86" y1="113" x2="86" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="131" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="113" x2="146" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="131" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="176" y1="113" x2="176" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="131" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="113" x2="206" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="131" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="113" y1="206" x2="119" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="210" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="113" y1="176" x2="119" y2="176" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="180" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="113" y1="146" x2="119" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="113" y1="86" x2="119" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="90" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="113" y1="56" x2="119" y2="56" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="60" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="113" y1="26" x2="119" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="30" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <polyline points="33.9,158 35,157.8 36.5,157.5 37.9,157.3 39.3,157 40.7,156.8 42.1,156.5 43.4,156.3 44.8,156 46.1,155.8 47.4,155.5 48.7,155.3 49.9,155 51.2,154.8 52.4,154.5 53.7,154.3 54.9,154 56.1,153.8 57.3,153.5 58.4,153.3 59.6,153 60.7,152.8 61.8,152.5 62.9,152.3 64,152 65.1,151.8 66.1,151.5 67.2,151.3 68.2,151 69.2,150.8 70.2,150.5 71.2,150.3 72.2,150 73.1,149.8 74.1,149.5 75,149.3 75.9,149 76.8,148.8 77.7,148.5 78.6,148.3 79.4,148 80.3,147.8 81.1,147.5 81.9,147.3 82.7,147 83.5,146.8 84.3,146.5 85.1,146.3 85.8,146.1 86.6,145.8 87.3,145.6 88,145.3 88.8,145.1 89.4,144.8 90.1,144.6 90.8,144.3 91.5,144.1 92.1,143.8 92.7,143.6 93.4,143.3 94,143.1 94.6,142.8 95.2,142.6 95.8,142.3 96.3,142.1 96.9,141.8 97.4,141.6 98,141.3 98.5,141.1 99,140.8 99.5,140.6 100,140.3 100.5,140.1 101,139.8 101.5,139.6 101.9,139.3 102.4,139.1 102.8,138.8 103.2,138.6 103.6,138.3 104.1,138.1 104.5,137.8 104.8,137.6 105.2,137.3 105.6,137.1 106,136.8 106.3,136.6 106.7,136.3 107,136.1 107.3,135.8 107.7,135.6 108,135.3 108.3,135.1 108.6,134.8 108.9,134.6 109.2,134.3 109.4,134.1 109.7,133.8 110,133.6 110.2,133.3 110.5,133.1 110.7,132.8 110.9,132.6 111.2,132.3 111.4,132.1 111.6,131.8 111.8,131.6 112,131.3 112.2,131.1 112.4,130.8 112.6,130.6 112.7,130.3 112.9,130.1 113.1,129.8 113.2,129.6 113.4,129.3 113.5,129.1 113.6,128.8 113.8,128.6 113.9,128.3 114,128.1 114.2,127.8 114.3,127.6 114.4,127.3 114.5,127.1 114.6,126.8 114.7,126.6 114.8,126.3 114.9,126.1 114.9,125.9 115,125.6 115.1,125.4 115.2,125.1 115.2,124.9 115.3,124.6 115.4,124.4 115.4,124.1 115.5,123.9 115.5,123.6 115.6,123.4 115.6,123.1 115.6,122.9 115.7,122.6 115.7,122.4 115.7,122.1 115.8,121.9 115.8,121.6 115.8,121.4 115.9,121.1 115.9,120.9 115.9,120.6 115.9,120.4 115.9,120.1 115.9,119.9 115.9,119.6 116,119.4 116,119.1 116,118.9 116,118.6 116,118.4 116,118.1 116,117.9 116,117.6 116,117.4 116,117.1 116,116.9 116,116.6 116,116.4 116,116.1 116,115.9 116,115.6 116,115.4 116,115.1 116,114.9 116,114.6 116,114.4 116,114.1 116,113.9 116,113.6 116,113.4 116,113.1 116,112.9 116,112.6 116.1,112.4 116.1,112.1 116.1,111.9 116.1,111.6 116.1,111.4 116.1,111.1 116.1,110.9 116.2,110.6 116.2,110.4 116.2,110.1 116.3,109.9 116.3,109.6 116.3,109.4 116.4,109.1 116.4,108.9 116.4,108.6 116.5,108.4 116.5,108.1 116.6,107.9 116.6,107.6 116.7,107.4 116.8,107.1 116.8,106.9 116.9,106.6 117,106.4 117.1,106.1 117.1,105.9 117.2,105.7 117.3,105.4 117.4,105.2 117.5,104.9 117.6,104.7 117.7,104.4 117.8,104.2 118,103.9 118.1,103.7 118.2,103.4 118.4,103.2 118.5,102.9 118.6,102.7 118.8,102.4 118.9,102.2 119.1,101.9 119.3,101.7 119.4,101.4 119.6,101.2 119.8,100.9 120,100.7 120.2,100.4 120.4,100.2 120.6,99.9 120.8,99.7 121.1,99.4 121.3,99.2 121.5,98.9 121.8,98.7 122,98.4 122.3,98.2 122.6,97.9 122.8,97.7 123.1,97.4 123.4,97.2 123.7,96.9 124,96.7 124.3,96.4 124.7,96.2 125,95.9 125.3,95.7 125.7,95.4 126,95.2 126.4,94.9 126.8,94.7 127.2,94.4 127.5,94.2 127.9,93.9 128.4,93.7 128.8,93.4 129.2,93.2 129.6,92.9 130.1,92.7 130.5,92.4 131,92.2 131.5,91.9 132,91.7 132.5,91.4 133,91.2 133.5,90.9 134,90.7 134.6,90.4 135.1,90.2 135.7,89.9 136.2,89.7 136.8,89.4 137.4,89.2 138,88.9 138.6,88.7 139.3,88.4 139.9,88.2 140.5,87.9 141.2,87.7 141.9,87.4 142.6,87.2 143.2,86.9 144,86.7 144.7,86.4 145.4,86.2 146.2,85.9 146.9,85.7 147.7,85.5 148.5,85.2 149.3,85 150.1,84.7 150.9,84.5 151.7,84.2 152.6,84 153.4,83.7 154.3,83.5 155.2,83.2 156.1,83 157,82.7 157.9,82.5 158.9,82.2 159.8,82 160.8,81.7 161.8,81.5 162.8,81.2 163.8,81 164.8,80.7 165.9,80.5 166.9,80.2 168,80 169.1,79.7 170.2,79.5 171.3,79.2 172.4,79 173.6,78.7 174.7,78.5 175.9,78.2 177.1,78 178.3,77.7 179.6,77.5 180.8,77.2 182.1,77 183.3,76.7 184.6,76.5 185.9,76.2 187.2,76 188.6,75.7 189.9,75.5 191.3,75.2 192.7,75 194.1,74.7 195.5,74.5 197,74.2 198.1,74" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,159.3 35.1,152.7 36.7,162.6" fill="currentColor"/>
  <polygon points="206,72.7 196.9,79.3 195.3,69.4" fill="currentColor"/>
  <polyline points="33.9,128 35,127.8 36.5,127.5 37.9,127.3 39.3,127 40.7,126.8 42.1,126.5 43.4,126.3 44.8,126 46.1,125.8 47.4,125.5 48.7,125.3 49.9,125 51.2,124.8 52.4,124.5 53.7,124.3 54.9,124 56.1,123.8 57.3,123.5 58.4,123.3 59.6,123 60.7,122.8 61.8,122.5 62.9,122.3 64,122 65.1,121.8 66.1,121.5 67.2,121.3 68.2,121 69.2,120.8 70.2,120.5 71.2,120.3 72.2,120 73.1,119.8 74.1,119.5 75,119.3 75.9,119 76.8,118.8 77.7,118.5 78.6,118.3 79.4,118 80.3,117.8 81.1,117.5 81.9,117.3 82.7,117 83.5,116.8 84.3,116.5 85.1,116.3 85.8,116.1 86.6,115.8 87.3,115.6 88,115.3 88.8,115.1 89.4,114.8 90.1,114.6 90.8,114.3 91.5,114.1 92.1,113.8 92.7,113.6 93.4,113.3 94,113.1 94.6,112.8 95.2,112.6 95.8,112.3 96.3,112.1 96.9,111.8 97.4,111.6 98,111.3 98.5,111.1 99,110.8 99.5,110.6 100,110.3 100.5,110.1 101,109.8 101.5,109.6 101.9,109.3 102.4,109.1 102.8,108.8 103.2,108.6 103.6,108.3 104.1,108.1 104.5,107.8 104.8,107.6 105.2,107.3 105.6,107.1 106,106.8 106.3,106.6 106.7,106.3 107,106.1 107.3,105.8 107.7,105.6 108,105.3 108.3,105.1 108.6,104.8 108.9,104.6 109.2,104.3 109.4,104.1 109.7,103.8 110,103.6 110.2,103.3 110.5,103.1 110.7,102.8 110.9,102.6 111.2,102.3 111.4,102.1 111.6,101.8 111.8,101.6 112,101.3 112.2,101.1 112.4,100.8 112.6,100.6 112.7,100.3 112.9,100.1 113.1,99.8 113.2,99.6 113.4,99.3 113.5,99.1 113.6,98.8 113.8,98.6 113.9,98.3 114,98.1 114.2,97.8 114.3,97.6 114.4,97.3 114.5,97.1 114.6,96.8 114.7,96.6 114.8,96.3 114.9,96.1 114.9,95.9 115,95.6 115.1,95.4 115.2,95.1 115.2,94.9 115.3,94.6 115.4,94.4 115.4,94.1 115.5,93.9 115.5,93.6 115.6,93.4 115.6,93.1 115.6,92.9 115.7,92.6 115.7,92.4 115.7,92.1 115.8,91.9 115.8,91.6 115.8,91.4 115.9,91.1 115.9,90.9 115.9,90.6 115.9,90.4 115.9,90.1 115.9,89.9 115.9,89.6 116,89.4 116,89.1 116,88.9 116,88.6 116,88.4 116,88.1 116,87.9 116,87.6 116,87.4 116,87.1 116,86.9 116,86.6 116,86.4 116,86.1 116,85.9 116,85.6 116,85.4 116,85.1 116,84.9 116,84.6 116,84.4 116,84.1 116,83.9 116,83.6 116,83.4 116,83.1 116,82.9 116,82.6 116.1,82.4 116.1,82.1 116.1,81.9 116.1,81.6 116.1,81.4 116.1,81.1 116.1,80.9 116.2,80.6 116.2,80.4 116.2,80.1 116.3,79.9 116.3,79.6 116.3,79.4 116.4,79.1 116.4,78.9 116.4,78.6 116.5,78.4 116.5,78.1 116.6,77.9 116.6,77.6 116.7,77.4 116.8,77.1 116.8,76.9 116.9,76.6 117,76.4 117.1,76.1 117.1,75.9 117.2,75.7 117.3,75.4 117.4,75.2 117.5,74.9 117.6,74.7 117.7,74.4 117.8,74.2 118,73.9 118.1,73.7 118.2,73.4 118.4,73.2 118.5,72.9 118.6,72.7 118.8,72.4 118.9,72.2 119.1,71.9 119.3,71.7 119.4,71.4 119.6,71.2 119.8,70.9 120,70.7 120.2,70.4 120.4,70.2 120.6,69.9 120.8,69.7 121.1,69.4 121.3,69.2 121.5,68.9 121.8,68.7 122,68.4 122.3,68.2 122.6,67.9 122.8,67.7 123.1,67.4 123.4,67.2 123.7,66.9 124,66.7 124.3,66.4 124.7,66.2 125,65.9 125.3,65.7 125.7,65.4 126,65.2 126.4,64.9 126.8,64.7 127.2,64.4 127.5,64.2 127.9,63.9 128.4,63.7 128.8,63.4 129.2,63.2 129.6,62.9 130.1,62.7 130.5,62.4 131,62.2 131.5,61.9 132,61.7 132.5,61.4 133,61.2 133.5,60.9 134,60.7 134.6,60.4 135.1,60.2 135.7,59.9 136.2,59.7 136.8,59.4 137.4,59.2 138,58.9 138.6,58.7 139.3,58.4 139.9,58.2 140.5,57.9 141.2,57.7 141.9,57.4 142.6,57.2 143.2,56.9 144,56.7 144.7,56.4 145.4,56.2 146.2,55.9 146.9,55.7 147.7,55.5 148.5,55.2 149.3,55 150.1,54.7 150.9,54.5 151.7,54.2 152.6,54 153.4,53.7 154.3,53.5 155.2,53.2 156.1,53 157,52.7 157.9,52.5 158.9,52.2 159.8,52 160.8,51.7 161.8,51.5 162.8,51.2 163.8,51 164.8,50.7 165.9,50.5 166.9,50.2 168,50 169.1,49.7 170.2,49.5 171.3,49.2 172.4,49 173.6,48.7 174.7,48.5 175.9,48.2 177.1,48 178.3,47.7 179.6,47.5 180.8,47.2 182.1,47 183.3,46.7 184.6,46.5 185.9,46.2 187.2,46 188.6,45.7 189.9,45.5 191.3,45.2 192.7,45 194.1,44.7 195.5,44.5 197,44.2 198.1,44" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="26,129.3 35.1,122.7 36.7,132.6" fill="currentColor"/>
  <polygon points="206,42.7 196.9,49.3 195.3,39.4" fill="currentColor"/>
</svg>
</div>

A vertical shift by $k=1$ of the cube root function $f(x)=\sqrt[3]{x}$; the
shifted graph is dashed.

To help you visualize the concept of a vertical shift, consider that
$y=f(x)$. Therefore, $f(x)+k$ is equivalent to $y+k$. Every unit of $y$ is
replaced by $y+k$, so the $y$-value increases or decreases depending on the
value of $k$. The result is a shift upward or downward.

{{< callout type="info" >}}
  **Vertical shift.** Given a function $f(x)$, a new function $g(x)=f(x)+k$,
  where $k$ is a constant, is a **vertical shift** of the function $f(x)$.
  All the output values change by $k$ units. If $k$ is positive, the graph
  will shift up. If $k$ is negative, the graph will shift down.
{{< /callout >}}

**Example.** To regulate temperature in a green building, airflow vents near
the roof open and close throughout the day. The graph below shows the area of
open vents $V$ (in square feet) throughout the day in hours after midnight,
$t$. During the summer, the facilities manager decides to try to better
regulate temperature by increasing the amount of open vents by 20 square feet
throughout the day and night. Sketch a graph of this new function.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of V of t. It runs along the horizontal axis from t = 0 to t = 8, rises in a straight line to (10, 220), stays at 220 until t = 17, falls in a straight line to (19, 0), and runs along the axis to t = 24.","xMin":-4,"xMax":26,"yMin":-30,"yMax":300,"xUnit":11,"yUnit":0.75,"xGridStep":4,"yGridStep":50,"tickLabels":true,"xTickStep":4,"yTickStep":50,"xLabel":"t","yLabel":"V","polylines":[{"through":[[0,0],[8,0],[10,220],[17,220],[19,0],[24,0]]}]}'>
<svg role="img" aria-label="The graph of V of t. It runs along the horizontal axis from t = 0 to t = 8, rises in a straight line to (10, 220), stays at 220 until t = 17, falls in a straight line to (19, 0), and runs along the axis to t = 24." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382 299.5" width="382" height="299.5" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="273.5" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="273.5" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="273.5" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="273.5" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="273.5" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="273.5" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="334" y1="273.5" x2="334" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="273.5" x2="356" y2="273.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="236" x2="356" y2="236" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="198.5" x2="356" y2="198.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="161" x2="356" y2="161" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="123.5" x2="356" y2="123.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="356" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48.5" x2="356" y2="48.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="251" x2="358" y2="251" stroke="currentColor" stroke-width="1"/>
  <line x1="70" y1="24" x2="70" y2="275.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="368,251 358,256 358,246" fill="currentColor"/>
  <polygon points="70,14 75,24 65,24" fill="currentColor"/>
  <polygon points="14,251 24,246 24,256" fill="currentColor"/>
  <polygon points="70,285.5 65,275.5 75,275.5" fill="currentColor"/>
  <text x="366" y="243" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="78" y="24" font-size="13" fill="currentColor" font-style="italic">V</text>
  <line x1="26" y1="248" x2="26" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="266" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="114" y1="248" x2="114" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="266" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="158" y1="248" x2="158" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="266" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="202" y1="248" x2="202" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="266" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="246" y1="248" x2="246" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="266" font-size="11" fill="currentColor" text-anchor="middle">16</text>
  <line x1="290" y1="248" x2="290" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="266" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="334" y1="248" x2="334" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="334" y="266" font-size="11" fill="currentColor" text-anchor="middle">24</text>
  <line x1="67" y1="213.5" x2="73" y2="213.5" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="217.5" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="67" y1="176" x2="73" y2="176" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="180" font-size="11" fill="currentColor" text-anchor="end">100</text>
  <line x1="67" y1="138.5" x2="73" y2="138.5" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="142.5" font-size="11" fill="currentColor" text-anchor="end">150</text>
  <line x1="67" y1="101" x2="73" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="105" font-size="11" fill="currentColor" text-anchor="end">200</text>
  <line x1="67" y1="63.5" x2="73" y2="63.5" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="67.5" font-size="11" fill="currentColor" text-anchor="end">250</text>
  <line x1="67" y1="26" x2="73" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="30" font-size="11" fill="currentColor" text-anchor="end">300</text>
  <polyline points="70,251 158,251 180,86 257,86 279,251 334,251" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
</svg>
</div>

**Solution.** We can sketch a graph of this new function by adding 20 to each
of the output values of the original function. This will have the effect of
shifting the graph vertically up, as shown below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of V of t together with, dashed, the graph of S of t equals V of t plus 20. The dashed graph has exactly the same shape sitting 20 units higher, running at 20 instead of 0 and peaking at 240 instead of 220.","xMin":-4,"xMax":26,"yMin":-30,"yMax":300,"xUnit":11,"yUnit":0.75,"xGridStep":4,"yGridStep":50,"tickLabels":true,"xTickStep":4,"yTickStep":50,"xLabel":"t","yLabel":"V","polylines":[{"through":[[0,0],[8,0],[10,220],[17,220],[19,0],[24,0]]},{"through":[[0,20],[8,20],[10,240],[17,240],[19,20],[24,20]],"dashed":true}],"texts":[{"at":[21,20],"text":"Up 20","dx":6,"dy":-6}]}'>
<svg role="img" aria-label="The graph of V of t together with, dashed, the graph of S of t equals V of t plus 20. The dashed graph has exactly the same shape sitting 20 units higher, running at 20 instead of 0 and peaking at 240 instead of 220." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382 299.5" width="382" height="299.5" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="273.5" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="273.5" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="273.5" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="273.5" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="273.5" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="273.5" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="334" y1="273.5" x2="334" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="273.5" x2="356" y2="273.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="236" x2="356" y2="236" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="198.5" x2="356" y2="198.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="161" x2="356" y2="161" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="123.5" x2="356" y2="123.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="356" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48.5" x2="356" y2="48.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="251" x2="358" y2="251" stroke="currentColor" stroke-width="1"/>
  <line x1="70" y1="24" x2="70" y2="275.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="368,251 358,256 358,246" fill="currentColor"/>
  <polygon points="70,14 75,24 65,24" fill="currentColor"/>
  <polygon points="14,251 24,246 24,256" fill="currentColor"/>
  <polygon points="70,285.5 65,275.5 75,275.5" fill="currentColor"/>
  <text x="366" y="243" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="78" y="24" font-size="13" fill="currentColor" font-style="italic">V</text>
  <line x1="26" y1="248" x2="26" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="266" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="114" y1="248" x2="114" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="266" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="158" y1="248" x2="158" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="266" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="202" y1="248" x2="202" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="266" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="246" y1="248" x2="246" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="266" font-size="11" fill="currentColor" text-anchor="middle">16</text>
  <line x1="290" y1="248" x2="290" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="266" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="334" y1="248" x2="334" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="334" y="266" font-size="11" fill="currentColor" text-anchor="middle">24</text>
  <line x1="67" y1="213.5" x2="73" y2="213.5" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="217.5" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="67" y1="176" x2="73" y2="176" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="180" font-size="11" fill="currentColor" text-anchor="end">100</text>
  <line x1="67" y1="138.5" x2="73" y2="138.5" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="142.5" font-size="11" fill="currentColor" text-anchor="end">150</text>
  <line x1="67" y1="101" x2="73" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="105" font-size="11" fill="currentColor" text-anchor="end">200</text>
  <line x1="67" y1="63.5" x2="73" y2="63.5" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="67.5" font-size="11" fill="currentColor" text-anchor="end">250</text>
  <line x1="67" y1="26" x2="73" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="30" font-size="11" fill="currentColor" text-anchor="end">300</text>
  <polyline points="70,251 158,251 180,86 257,86 279,251 334,251" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polyline points="70,236 158,236 180,71 257,71 279,236 334,236" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <text x="307" y="230" font-size="13" fill="currentColor">Up 20</text>
</svg>
</div>

Notice that for each input value, the output value has increased by 20, so if
we call the new function $S(t)$, we could write

$$S(t)=V(t)+20$$

This notation tells us that, for any value of $t$, $S(t)$ can be found by
evaluating the function $V$ at the same input and then adding 20 to the
result. This defines $S$ as a transformation of the function $V$, in this case
a vertical shift up 20 units. Notice that, with a vertical shift, the input
values stay the same and only the output values change.

| $t$ | 0 | 8 | 10 | 17 | 19 | 24 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| $V(t)$ | 0 | 0 | 220 | 220 | 0 | 0 |
| $S(t)$ | 20 | 20 | 240 | 240 | 20 | 20 |

{{< callout type="info" >}}
  **How to:** given a tabular function, create a new row to represent a
  vertical shift.

  1. Identify the output row or column.
  2. Determine the **magnitude** of the shift.
  3. Add the shift to the value in each output cell. Add a positive value for
     up or a negative value for down.
{{< /callout >}}

**Example.** A function $f(x)$ is given below. Create a table for the function
$g(x)=f(x)-3$.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 1 | 3 | 7 | 11 |

**Solution.** The formula $g(x)=f(x)-3$ tells us that we can find the output
values of $g$ by subtracting 3 from the output values of $f$. For example:

$$
\begin{array}{lrcl}
\text{Given.} & f(2) &=& 1 \\[4pt]
\text{Given transformation.} & g(x) &=& f(x)-3 \\[4pt]
& g(2) &=& f(2)-3 \\[4pt]
& &=& 1-3 \\[4pt]
& &=& -2
\end{array}
$$

Subtracting 3 from each $f(x)$ value, we can complete a table of values for
$g(x)$.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 1 | 3 | 7 | 11 |
| $g(x)$ | −2 | 0 | 4 | 8 |

As with the earlier vertical shift, notice the input values stay the same and
only the output values change.

{{< fillin
  question="The function $h(t)=-4.9t^2+30t$ gives the height $h$ of a ball (in meters) thrown upward from the ground after $t$ seconds. Suppose the ball was instead thrown from the top of a 10-m building. Write a formula for the new height function $b(t)$."
  answer="-4.9t^2+30t+10"
  answerDisplay="$b(t)=h(t)+10=-4.9t^2+30t+10$"
  hint="Throwing from 10 m up adds 10 to every output, so this is a vertical shift."
>}}

### Identifying horizontal shifts

We just saw that the vertical shift is a change to the output, or outside, of
the function. We will now look at how changes to input, on the inside of the
function, change its graph and meaning. A shift to the input results in a
movement of the graph of the function left or right in what is known as a
**horizontal shift**.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The cube root curve and, dashed, the same curve shifted one unit to the left. The dashed copy crosses the horizontal axis at −1 instead of at the origin.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"unit":30,"tickLabels":true,"curves":[{"kind":"cbrt"},{"kind":"cbrt","h":-1,"dashed":true}]}'>
<svg role="img" aria-label="The cube root curve and, dashed, the same curve shifted one unit to the left. The dashed copy crosses the horizontal axis at −1 instead of at the origin." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232 232" width="232" height="232" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="206" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="56" y1="206" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="206" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="206" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="206" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="206" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="206" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="176" x2="206" y2="176" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="206" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="206" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="56" x2="206" y2="56" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="116" x2="208" y2="116" stroke="currentColor" stroke-width="1"/>
  <line x1="116" y1="24" x2="116" y2="208" stroke="currentColor" stroke-width="1"/>
  <polygon points="218,116 208,121 208,111" fill="currentColor"/>
  <polygon points="116,14 121,24 111,24" fill="currentColor"/>
  <polygon points="14,116 24,111 24,121" fill="currentColor"/>
  <polygon points="116,218 111,208 121,208" fill="currentColor"/>
  <text x="216" y="108" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="124" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="113" x2="26" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="131" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="56" y1="113" x2="56" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="131" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="86" y1="113" x2="86" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="131" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="113" x2="146" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="131" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="176" y1="113" x2="176" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="131" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="113" x2="206" y2="119" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="131" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="113" y1="206" x2="119" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="210" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="113" y1="176" x2="119" y2="176" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="180" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="113" y1="146" x2="119" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="113" y1="86" x2="119" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="90" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="113" y1="56" x2="119" y2="56" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="60" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="113" y1="26" x2="119" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="30" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <polyline points="33.9,158 35,157.8 36.5,157.5 37.9,157.3 39.3,157 40.7,156.8 42.1,156.5 43.4,156.3 44.8,156 46.1,155.8 47.4,155.5 48.7,155.3 49.9,155 51.2,154.8 52.4,154.5 53.7,154.3 54.9,154 56.1,153.8 57.3,153.5 58.4,153.3 59.6,153 60.7,152.8 61.8,152.5 62.9,152.3 64,152 65.1,151.8 66.1,151.5 67.2,151.3 68.2,151 69.2,150.8 70.2,150.5 71.2,150.3 72.2,150 73.1,149.8 74.1,149.5 75,149.3 75.9,149 76.8,148.8 77.7,148.5 78.6,148.3 79.4,148 80.3,147.8 81.1,147.5 81.9,147.3 82.7,147 83.5,146.8 84.3,146.5 85.1,146.3 85.8,146.1 86.6,145.8 87.3,145.6 88,145.3 88.8,145.1 89.4,144.8 90.1,144.6 90.8,144.3 91.5,144.1 92.1,143.8 92.7,143.6 93.4,143.3 94,143.1 94.6,142.8 95.2,142.6 95.8,142.3 96.3,142.1 96.9,141.8 97.4,141.6 98,141.3 98.5,141.1 99,140.8 99.5,140.6 100,140.3 100.5,140.1 101,139.8 101.5,139.6 101.9,139.3 102.4,139.1 102.8,138.8 103.2,138.6 103.6,138.3 104.1,138.1 104.5,137.8 104.8,137.6 105.2,137.3 105.6,137.1 106,136.8 106.3,136.6 106.7,136.3 107,136.1 107.3,135.8 107.7,135.6 108,135.3 108.3,135.1 108.6,134.8 108.9,134.6 109.2,134.3 109.4,134.1 109.7,133.8 110,133.6 110.2,133.3 110.5,133.1 110.7,132.8 110.9,132.6 111.2,132.3 111.4,132.1 111.6,131.8 111.8,131.6 112,131.3 112.2,131.1 112.4,130.8 112.6,130.6 112.7,130.3 112.9,130.1 113.1,129.8 113.2,129.6 113.4,129.3 113.5,129.1 113.6,128.8 113.8,128.6 113.9,128.3 114,128.1 114.2,127.8 114.3,127.6 114.4,127.3 114.5,127.1 114.6,126.8 114.7,126.6 114.8,126.3 114.9,126.1 114.9,125.9 115,125.6 115.1,125.4 115.2,125.1 115.2,124.9 115.3,124.6 115.4,124.4 115.4,124.1 115.5,123.9 115.5,123.6 115.6,123.4 115.6,123.1 115.6,122.9 115.7,122.6 115.7,122.4 115.7,122.1 115.8,121.9 115.8,121.6 115.8,121.4 115.9,121.1 115.9,120.9 115.9,120.6 115.9,120.4 115.9,120.1 115.9,119.9 115.9,119.6 116,119.4 116,119.1 116,118.9 116,118.6 116,118.4 116,118.1 116,117.9 116,117.6 116,117.4 116,117.1 116,116.9 116,116.6 116,116.4 116,116.1 116,115.9 116,115.6 116,115.4 116,115.1 116,114.9 116,114.6 116,114.4 116,114.1 116,113.9 116,113.6 116,113.4 116,113.1 116,112.9 116,112.6 116.1,112.4 116.1,112.1 116.1,111.9 116.1,111.6 116.1,111.4 116.1,111.1 116.1,110.9 116.2,110.6 116.2,110.4 116.2,110.1 116.3,109.9 116.3,109.6 116.3,109.4 116.4,109.1 116.4,108.9 116.4,108.6 116.5,108.4 116.5,108.1 116.6,107.9 116.6,107.6 116.7,107.4 116.8,107.1 116.8,106.9 116.9,106.6 117,106.4 117.1,106.1 117.1,105.9 117.2,105.7 117.3,105.4 117.4,105.2 117.5,104.9 117.6,104.7 117.7,104.4 117.8,104.2 118,103.9 118.1,103.7 118.2,103.4 118.4,103.2 118.5,102.9 118.6,102.7 118.8,102.4 118.9,102.2 119.1,101.9 119.3,101.7 119.4,101.4 119.6,101.2 119.8,100.9 120,100.7 120.2,100.4 120.4,100.2 120.6,99.9 120.8,99.7 121.1,99.4 121.3,99.2 121.5,98.9 121.8,98.7 122,98.4 122.3,98.2 122.6,97.9 122.8,97.7 123.1,97.4 123.4,97.2 123.7,96.9 124,96.7 124.3,96.4 124.7,96.2 125,95.9 125.3,95.7 125.7,95.4 126,95.2 126.4,94.9 126.8,94.7 127.2,94.4 127.5,94.2 127.9,93.9 128.4,93.7 128.8,93.4 129.2,93.2 129.6,92.9 130.1,92.7 130.5,92.4 131,92.2 131.5,91.9 132,91.7 132.5,91.4 133,91.2 133.5,90.9 134,90.7 134.6,90.4 135.1,90.2 135.7,89.9 136.2,89.7 136.8,89.4 137.4,89.2 138,88.9 138.6,88.7 139.3,88.4 139.9,88.2 140.5,87.9 141.2,87.7 141.9,87.4 142.6,87.2 143.2,86.9 144,86.7 144.7,86.4 145.4,86.2 146.2,85.9 146.9,85.7 147.7,85.5 148.5,85.2 149.3,85 150.1,84.7 150.9,84.5 151.7,84.2 152.6,84 153.4,83.7 154.3,83.5 155.2,83.2 156.1,83 157,82.7 157.9,82.5 158.9,82.2 159.8,82 160.8,81.7 161.8,81.5 162.8,81.2 163.8,81 164.8,80.7 165.9,80.5 166.9,80.2 168,80 169.1,79.7 170.2,79.5 171.3,79.2 172.4,79 173.6,78.7 174.7,78.5 175.9,78.2 177.1,78 178.3,77.7 179.6,77.5 180.8,77.2 182.1,77 183.3,76.7 184.6,76.5 185.9,76.2 187.2,76 188.6,75.7 189.9,75.5 191.3,75.2 192.7,75 194.1,74.7 195.5,74.5 197,74.2 198.1,74" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,159.3 35.1,152.7 36.7,162.6" fill="currentColor"/>
  <polygon points="206,72.7 196.9,79.3 195.3,69.4" fill="currentColor"/>
  <polyline points="33.8,152.1 33.9,152 35,151.8 36.1,151.5 37.1,151.3 38.2,151.1 39.2,150.8 40.2,150.6 41.2,150.3 42.1,150.1 43.1,149.8 44,149.6 45,149.3 45.9,149.1 46.8,148.8 47.7,148.6 48.5,148.3 49.4,148.1 50.3,147.8 51.1,147.6 51.9,147.3 52.7,147.1 53.5,146.8 54.3,146.6 55.1,146.3 55.8,146.1 56.6,145.8 57.3,145.6 58,145.3 58.7,145.1 59.4,144.8 60.1,144.6 60.8,144.3 61.5,144.1 62.1,143.8 62.7,143.6 63.4,143.3 64,143.1 64.6,142.8 65.2,142.6 65.8,142.3 66.3,142.1 66.9,141.8 67.4,141.6 68,141.3 68.5,141.1 69,140.8 69.5,140.6 70,140.3 70.5,140.1 71,139.8 71.5,139.6 71.9,139.3 72.4,139.1 72.8,138.8 73.2,138.6 73.7,138.3 74.1,138.1 74.5,137.8 74.9,137.6 75.2,137.3 75.6,137.1 76,136.8 76.3,136.6 76.7,136.3 77,136.1 77.4,135.8 77.7,135.6 78,135.3 78.3,135.1 78.6,134.8 78.9,134.6 79.2,134.3 79.4,134.1 79.7,133.8 80,133.6 80.2,133.3 80.5,133.1 80.7,132.8 80.9,132.6 81.2,132.3 81.4,132.1 81.6,131.8 81.8,131.6 82,131.3 82.2,131.1 82.4,130.8 82.6,130.6 82.7,130.3 82.9,130.1 83.1,129.8 83.2,129.6 83.4,129.3 83.5,129.1 83.7,128.8 83.8,128.6 83.9,128.3 84,128.1 84.2,127.8 84.3,127.6 84.4,127.3 84.5,127.1 84.6,126.8 84.7,126.6 84.8,126.3 84.9,126.1 84.9,125.8 85,125.6 85.1,125.3 85.2,125.1 85.2,124.8 85.3,124.6 85.4,124.3 85.4,124.1 85.5,123.8 85.5,123.6 85.6,123.3 85.6,123.1 85.6,122.8 85.7,122.6 85.7,122.3 85.8,122.1 85.8,121.8 85.8,121.6 85.8,121.3 85.9,121.1 85.9,120.8 85.9,120.6 85.9,120.3 85.9,120.1 85.9,119.8 85.9,119.6 86,119.3 86,119.1 86,118.8 86,118.6 86,118.3 86,118.1 86,117.8 86,117.6 86,117.3 86,117.1 86,116.8 86,116.6 86,116.3 86,116.1 86,115.8 86,115.6 86,115.3 86,115.1 86,114.8 86,114.6 86,114.3 86,114.1 86,113.8 86,113.6 86,113.3 86,113.1 86,112.8 86,112.6 86.1,112.3 86.1,112.1 86.1,111.8 86.1,111.6 86.1,111.3 86.1,111.1 86.2,110.8 86.2,110.6 86.2,110.3 86.2,110.1 86.3,109.8 86.3,109.6 86.3,109.3 86.4,109.1 86.4,108.8 86.5,108.6 86.5,108.3 86.5,108.1 86.6,107.8 86.7,107.6 86.7,107.3 86.8,107.1 86.9,106.8 86.9,106.6 87,106.3 87.1,106.1 87.2,105.8 87.3,105.6 87.3,105.3 87.4,105.1 87.5,104.8 87.6,104.6 87.8,104.3 87.9,104.1 88,103.8 88.1,103.6 88.3,103.3 88.4,103.1 88.5,102.8 88.7,102.6 88.8,102.3 89,102.1 89.2,101.8 89.3,101.6 89.5,101.3 89.7,101.1 89.9,100.8 90.1,100.6 90.3,100.3 90.5,100.1 90.7,99.8 90.9,99.6 91.1,99.3 91.4,99.1 91.6,98.8 91.9,98.6 92.1,98.3 92.4,98.1 92.6,97.9 92.9,97.6 93.2,97.4 93.5,97.1 93.8,96.9 94.1,96.6 94.4,96.4 94.8,96.1 95.1,95.9 95.4,95.6 95.8,95.4 96.1,95.1 96.5,94.9 96.9,94.6 97.3,94.4 97.7,94.1 98.1,93.9 98.5,93.6 98.9,93.4 99.3,93.1 99.8,92.9 100.2,92.6 100.7,92.4 101.2,92.1 101.6,91.9 102.1,91.6 102.6,91.4 103.1,91.1 103.7,90.9 104.2,90.6 104.7,90.4 105.3,90.1 105.9,89.9 106.4,89.6 107,89.4 107.6,89.1 108.2,88.9 108.8,88.6 109.5,88.4 110.1,88.1 110.8,87.9 111.4,87.6 112.1,87.4 112.8,87.1 113.5,86.9 114.2,86.6 114.9,86.4 115.7,86.1 116.4,85.9 117.2,85.6 118,85.4 118.7,85.1 119.5,84.9 120.4,84.6 121.2,84.4 122,84.1 122.9,83.9 123.7,83.6 124.6,83.4 125.5,83.1 126.4,82.9 127.3,82.6 128.3,82.4 129.2,82.1 130.2,81.9 131.2,81.6 132.2,81.4 133.2,81.1 134.2,80.9 135.2,80.6 136.3,80.4 137.3,80.1 138.4,79.9 139.5,79.6 140.6,79.4 141.7,79.1 142.9,78.9 144,78.6 145.2,78.4 146.4,78.1 147.6,77.9 148.8,77.6 150.1,77.4 151.3,77.1 152.6,76.9 153.9,76.6 155.2,76.4 156.5,76.1 157.8,75.9 159.2,75.6 160.5,75.4 161.9,75.1 163.3,74.9 164.7,74.6 166.2,74.4 167.6,74.1 169.1,73.9 170.6,73.6 172.1,73.4 173.6,73.1 175.1,72.9 176.7,72.6 178.3,72.4 179.8,72.1 181.5,71.9 183.1,71.6 184.7,71.4 186.4,71.1 188.1,70.9 189.8,70.6 191.5,70.4 193.3,70.1 195,69.9 196.2,69.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="26,153.8 34.7,146.8 36.8,156.5" fill="currentColor"/>
  <polygon points="204.1,68.6 194.9,74.9 193.5,65" fill="currentColor"/>
</svg>
</div>

A horizontal shift of the function $f(x)=\sqrt[3]{x}$; the shifted graph is
dashed. Note that $(x+1)$ means $h=-1$, which shifts the graph to the left,
that is, towards *negative* values of $x$.

For example, if $f(x)=x^2$, then $g(x)=(x-2)^2$ is a new function. Each input
is reduced by 2 prior to squaring the function. The result is that the graph
is shifted 2 units to the right, because we would need to increase the prior
input by 2 units to yield the same output value as given in $f$.

{{< callout type="info" >}}
  **Horizontal shift.** Given a function $f$, a new function $g(x)=f(x-h)$,
  where $h$ is a constant, is a **horizontal shift** of the function $f$. If
  $h$ is positive, the graph will shift right. If $h$ is negative, the graph
  will shift left.
{{< /callout >}}

**Example.** Returning to our building airflow example, suppose that in autumn
the facilities manager decides that the original venting plan starts too late,
and wants to begin the entire venting program 2 hours earlier. Sketch a graph
of the new function.

**Solution.** We can set $V(t)$ to be the original program and $F(t)$ to be
the revised program.

$$
\begin{array}{lrcl}
& V(t) &=& \text{the original venting plan} \\[4pt]
& F(t) &=& \text{starting 2 hrs sooner}
\end{array}
$$

In the new graph, at each time, the airflow is the same as the original
function $V$ was 2 hours later. For example, in the original function $V$, the
airflow starts to change at 8 a.m., whereas for the function $F$, the airflow
starts to change at 6 a.m. The comparable function values are $V(8)=F(6)$.
Notice also that the vents first opened to $220\ \text{ft}^2$ at 10 a.m. under
the original plan, while under the new plan the vents reach
$220\ \text{ft}^2$ at 8 a.m., so $V(10)=F(8)$.

In both cases, we see that, because $F(t)$ starts 2 hours sooner, $h=-2$. That
means that the same output values are reached when $F(t)=V(t-(-2))=V(t+2)$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of V of t together with, dashed, the graph of F of t equals V of t plus 2. The dashed graph has the same shape but every feature happens 2 hours earlier: it starts to rise at t = 6 instead of t = 8 and reaches 220 at t = 8 instead of t = 10.","xMin":-4,"xMax":26,"yMin":-30,"yMax":300,"xUnit":11,"yUnit":0.75,"xGridStep":4,"yGridStep":50,"tickLabels":true,"xTickStep":4,"yTickStep":50,"xLabel":"t","yLabel":"V","polylines":[{"through":[[0,0],[8,0],[10,220],[17,220],[19,0],[24,0]]},{"through":[[0,0],[6,0],[8,220],[15,220],[17,0],[24,0]],"dashed":true}]}'>
<svg role="img" aria-label="The graph of V of t together with, dashed, the graph of F of t equals V of t plus 2. The dashed graph has the same shape but every feature happens 2 hours earlier: it starts to rise at t = 6 instead of t = 8 and reaches 220 at t = 8 instead of t = 10." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382 299.5" width="382" height="299.5" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="273.5" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="273.5" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="273.5" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="273.5" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="273.5" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="273.5" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="334" y1="273.5" x2="334" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="273.5" x2="356" y2="273.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="236" x2="356" y2="236" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="198.5" x2="356" y2="198.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="161" x2="356" y2="161" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="123.5" x2="356" y2="123.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="356" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48.5" x2="356" y2="48.5" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="251" x2="358" y2="251" stroke="currentColor" stroke-width="1"/>
  <line x1="70" y1="24" x2="70" y2="275.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="368,251 358,256 358,246" fill="currentColor"/>
  <polygon points="70,14 75,24 65,24" fill="currentColor"/>
  <polygon points="14,251 24,246 24,256" fill="currentColor"/>
  <polygon points="70,285.5 65,275.5 75,275.5" fill="currentColor"/>
  <text x="366" y="243" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="78" y="24" font-size="13" fill="currentColor" font-style="italic">V</text>
  <line x1="26" y1="248" x2="26" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="266" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="114" y1="248" x2="114" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="266" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="158" y1="248" x2="158" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="266" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="202" y1="248" x2="202" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="266" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="246" y1="248" x2="246" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="266" font-size="11" fill="currentColor" text-anchor="middle">16</text>
  <line x1="290" y1="248" x2="290" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="266" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="334" y1="248" x2="334" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="334" y="266" font-size="11" fill="currentColor" text-anchor="middle">24</text>
  <line x1="67" y1="213.5" x2="73" y2="213.5" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="217.5" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="67" y1="176" x2="73" y2="176" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="180" font-size="11" fill="currentColor" text-anchor="end">100</text>
  <line x1="67" y1="138.5" x2="73" y2="138.5" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="142.5" font-size="11" fill="currentColor" text-anchor="end">150</text>
  <line x1="67" y1="101" x2="73" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="105" font-size="11" fill="currentColor" text-anchor="end">200</text>
  <line x1="67" y1="63.5" x2="73" y2="63.5" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="67.5" font-size="11" fill="currentColor" text-anchor="end">250</text>
  <line x1="67" y1="26" x2="73" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="30" font-size="11" fill="currentColor" text-anchor="end">300</text>
  <polyline points="70,251 158,251 180,86 257,86 279,251 334,251" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polyline points="70,251 136,251 158,86 235,86 257,251 334,251" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
</svg>
</div>

Note that $V(t+2)$ has the effect of shifting the graph to the *left*.

Horizontal changes or "inside changes" affect the domain of a function (the
input) instead of the range and often seem counterintuitive. The new function
$F(t)$ uses the same outputs as $V(t)$, but matches those outputs to inputs 2
hours earlier than those of $V(t)$. Said another way, we must add 2 hours to
the input of $V$ to find the corresponding output for $F$: $F(t)=V(t+2)$.

{{< callout type="info" >}}
  **How to:** given a tabular function, create a new row to represent a
  horizontal shift.

  1. Identify the input row or column.
  2. Determine the magnitude of the shift.
  3. Add the shift to the value in each input cell.
{{< /callout >}}

**Example.** A function $f(x)$ is given below. Create a table for the function
$g(x)=f(x-3)$.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 1 | 3 | 7 | 11 |

**Solution.** The formula $g(x)=f(x-3)$ tells us that the output values of $g$
are the same as the output value of $f$ when the input value is 3 less than
the original value. For example, we know that $f(2)=1$. To get the same output
from the function $g$, we will need an input value that is 3 *larger*. We
input a value that is 3 larger for $g(x)$ because the function takes 3 away
before evaluating the function $f$.

$$
\begin{array}{lrcl}
& g(5) &=& f(5-3) \\[4pt]
& &=& f(2) \\[4pt]
& &=& 1
\end{array}
$$

We continue with the other values to create the table below.

| $x$ | 5 | 7 | 9 | 11 |
| :--- | ---: | ---: | ---: | ---: |
| $x-3$ | 2 | 4 | 6 | 8 |
| $f(x-3)$ | 1 | 3 | 7 | 11 |
| $g(x)$ | 1 | 3 | 7 | 11 |

The result is that the function $g(x)$ has been shifted to the right by 3.
Notice the output values for $g(x)$ remain the same as the output values for
$f(x)$, but the corresponding input values, $x$, have shifted to the right by
3. Specifically, 2 shifted to 5, 4 shifted to 7, 6 shifted to 9, and 8 shifted
to 11.

The graph below represents both of the functions. We can see the horizontal
shift in each point; the points of $g$ are drawn hollow.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Two sets of plotted points. The solid points (2, 1), (4, 3), (6, 7), (8, 11) are the function f. The hollow points (5, 1), (7, 3), (9, 7), (11, 11) are g(x) = f(x − 3): each has the same height, three units farther right.","xMin":-1,"xMax":13,"yMin":-1,"yMax":13,"xUnit":21,"yUnit":16,"xGridStep":1,"yGridStep":1,"tickLabels":true,"xTickStep":2,"yTickStep":2,"points":[{"at":[2,1]},{"at":[4,3]},{"at":[6,7]},{"at":[8,11]},{"at":[5,1],"open":true},{"at":[7,3],"open":true},{"at":[9,7],"open":true},{"at":[11,11],"open":true}]}'>
<svg role="img" aria-label="Two sets of plotted points. The solid points (2, 1), (4, 3), (6, 7), (8, 11) are the function f. The hollow points (5, 1), (7, 3), (9, 7), (11, 11) are g(x) = f(x − 3): each has the same height, three units farther right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 346 276" width="346" height="276" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="250" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="68" y1="250" x2="68" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="89" y1="250" x2="89" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="250" x2="110" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="131" y1="250" x2="131" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="250" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="173" y1="250" x2="173" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="250" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="215" y1="250" x2="215" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="250" x2="236" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="257" y1="250" x2="257" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="250" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="299" y1="250" x2="299" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="320" y1="250" x2="320" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="250" x2="320" y2="250" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="320" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="320" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="320" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="320" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="154" x2="320" y2="154" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="138" x2="320" y2="138" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="320" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="320" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="320" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="320" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="58" x2="320" y2="58" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="42" x2="320" y2="42" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="320" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="234" x2="322" y2="234" stroke="currentColor" stroke-width="1"/>
  <line x1="47" y1="24" x2="47" y2="252" stroke="currentColor" stroke-width="1"/>
  <polygon points="332,234 322,239 322,229" fill="currentColor"/>
  <polygon points="47,14 52,24 42,24" fill="currentColor"/>
  <polygon points="14,234 24,229 24,239" fill="currentColor"/>
  <polygon points="47,262 42,252 52,252" fill="currentColor"/>
  <text x="330" y="226" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="55" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="89" y1="231" x2="89" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="89" y="249" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="131" y1="231" x2="131" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="131" y="249" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="173" y1="231" x2="173" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="173" y="249" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="215" y1="231" x2="215" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="215" y="249" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="257" y1="231" x2="257" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="257" y="249" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="299" y1="231" x2="299" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="299" y="249" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="44" y1="202" x2="50" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="41" y="206" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="44" y1="170" x2="50" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="41" y="174" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="44" y1="138" x2="50" y2="138" stroke="currentColor" stroke-width="1"/>
  <text x="41" y="142" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="44" y1="106" x2="50" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="41" y="110" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="44" y1="74" x2="50" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="41" y="78" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="44" y1="42" x2="50" y2="42" stroke="currentColor" stroke-width="1"/>
  <text x="41" y="46" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <circle cx="89" cy="218" r="4" fill="currentColor"/>
  <circle cx="131" cy="186" r="4" fill="currentColor"/>
  <circle cx="173" cy="122" r="4" fill="currentColor"/>
  <circle cx="215" cy="58" r="4" fill="currentColor"/>
  <circle cx="152" cy="218" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="194" cy="186" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="236" cy="122" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="278" cy="58" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
</svg>
</div>

**Example.** The graph below represents a transformation of the toolkit
function $f(x)=x^2$. Relate this new function $g(x)$ to $f(x)$, and then find
a formula for $g(x)$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"An upward-opening parabola with its vertex at (2, 0), the graph of the squaring function shifted 2 units to the right.","xMin":-3,"xMax":7,"yMin":-2,"yMax":8,"unit":24,"tickLabels":true,"quadratics":[{"a":1,"b":-4,"c":4}]}'>
<svg role="img" aria-label="An upward-opening parabola with its vertex at (2, 0), the graph of the squaring function shifted 2 units to the right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="266" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="266" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="266" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="266" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="266" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="266" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="266" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="266" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
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
  <line x1="98" y1="24" x2="98" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,218 268,223 268,213" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,218 24,213 24,223" fill="currentColor"/>
  <polygon points="98,278 93,268 103,268" fill="currentColor"/>
  <text x="276" y="210" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="215" x2="26" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="233" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="50" y1="215" x2="50" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="233" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="74" y1="215" x2="74" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="233" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="122" y1="215" x2="122" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="233" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="146" y1="215" x2="146" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="233" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="215" x2="170" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="233" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="194" y1="215" x2="194" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="233" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="218" y1="215" x2="218" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="233" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="242" y1="215" x2="242" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="233" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="266" y1="215" x2="266" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="233" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="95" y1="266" x2="101" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="270" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="242" x2="101" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="246" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="95" y1="194" x2="101" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="198" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="146" x2="101" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="150" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="95" y1="122" x2="101" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="126" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="95" y1="98" x2="101" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="102" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="95" y1="74" x2="101" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="78" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="95" y1="50" x2="101" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="54" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <polyline points="79.7,34.6 79.8,35.1 80,36.5 80.3,37.9 80.5,39.2 80.8,40.6 81,42 81.3,43.3 81.5,44.7 81.8,46 82,47.3 82.3,48.7 82.5,50 82.8,51.3 83,52.6 83.3,53.9 83.5,55.2 83.8,56.5 84,57.8 84.3,59.1 84.5,60.4 84.8,61.7 85,63 85.3,64.2 85.5,65.5 85.8,66.7 86,68 86.3,69.2 86.5,70.5 86.8,71.7 87,73 87.3,74.2 87.5,75.4 87.8,76.6 88,77.8 88.3,79 88.5,80.2 88.8,81.4 89,82.6 89.3,83.8 89.5,85 89.8,86.2 90,87.3 90.3,88.5 90.5,89.7 90.8,90.8 91,92 91.3,93.1 91.5,94.2 91.8,95.4 92,96.5 92.3,97.6 92.5,98.7 92.8,99.9 93,101 93.3,102.1 93.5,103.2 93.8,104.2 94,105.3 94.3,106.4 94.5,107.5 94.8,108.6 95,109.6 95.3,110.7 95.5,111.7 95.8,112.8 96,113.8 96.3,114.9 96.5,115.9 96.8,116.9 97,118 97.3,119 97.5,120 97.8,121 98,122 98.3,123 98.5,124 98.8,125 99,126 99.3,126.9 99.5,127.9 99.8,128.9 100,129.8 100.3,130.8 100.5,131.7 100.8,132.7 101,133.6 101.3,134.6 101.5,135.5 101.8,136.4 102,137.3 102.3,138.2 102.5,139.2 102.8,140.1 103,141 103.3,141.9 103.5,142.7 103.8,143.6 104,144.5 104.3,145.4 104.5,146.2 104.8,147.1 105,148 105.3,148.8 105.5,149.7 105.8,150.5 106,151.3 106.3,152.2 106.5,153 106.8,153.8 107,154.6 107.3,155.4 107.5,156.2 107.8,157 108,157.8 108.3,158.6 108.5,159.4 108.8,160.2 109,161 109.3,161.7 109.5,162.5 109.8,163.2 110,164 110.3,164.7 110.5,165.5 110.8,166.2 111,167 111.3,167.7 111.5,168.4 111.8,169.1 112,169.8 112.3,170.5 112.5,171.2 112.8,171.9 113,172.6 113.3,173.3 113.5,174 113.8,174.7 114,175.3 114.3,176 114.5,176.7 114.8,177.3 115,178 115.3,178.6 115.5,179.2 115.8,179.9 116,180.5 116.3,181.1 116.5,181.7 116.8,182.4 117,183 117.3,183.6 117.5,184.2 117.8,184.7 118,185.3 118.3,185.9 118.5,186.5 118.8,187.1 119,187.6 119.3,188.2 119.5,188.7 119.8,189.3 120,189.8 120.3,190.4 120.5,190.9 120.8,191.4 121,192 121.3,192.5 121.5,193 121.8,193.5 122,194 122.3,194.5 122.5,195 122.8,195.5 123,196 123.3,196.4 123.5,196.9 123.8,197.4 124,197.8 124.3,198.3 124.5,198.7 124.8,199.2 125,199.6 125.3,200.1 125.5,200.5 125.8,200.9 126,201.3 126.3,201.7 126.5,202.2 126.8,202.6 127,203 127.3,203.4 127.5,203.7 127.8,204.1 128,204.5 128.3,204.9 128.5,205.2 128.8,205.6 129,206 129.3,206.3 129.5,206.7 129.8,207 130,207.3 130.3,207.7 130.5,208 130.8,208.3 131,208.6 131.3,208.9 131.5,209.2 131.8,209.5 132,209.8 132.3,210.1 132.5,210.4 132.8,210.7 133,211 133.3,211.2 133.5,211.5 133.8,211.7 134,212 134.3,212.2 134.5,212.5 134.8,212.7 135,213 135.3,213.2 135.5,213.4 135.8,213.6 136,213.8 136.3,214 136.5,214.2 136.8,214.4 137,214.6 137.3,214.8 137.5,215 137.8,215.2 138,215.3 138.3,215.5 138.5,215.7 138.8,215.8 139,216 139.3,216.1 139.5,216.2 139.8,216.4 140,216.5 140.3,216.6 140.5,216.7 140.8,216.9 141,217 141.3,217.1 141.5,217.2 141.8,217.2 142,217.3 142.3,217.4 142.5,217.5 142.8,217.6 143,217.6 143.3,217.7 143.5,217.7 143.8,217.8 144,217.8 144.3,217.9 144.5,217.9 144.8,217.9 145,218 145.3,218 145.5,218 145.8,218 146,218 146.3,218 146.5,218 146.8,218 147,218 147.3,217.9 147.5,217.9 147.8,217.9 148,217.8 148.3,217.8 148.5,217.7 148.8,217.7 149,217.6 149.3,217.6 149.5,217.5 149.8,217.4 150,217.3 150.3,217.2 150.5,217.2 150.8,217.1 151,217 151.3,216.9 151.5,216.7 151.8,216.6 152,216.5 152.3,216.4 152.5,216.2 152.8,216.1 153,216 153.3,215.8 153.5,215.7 153.8,215.5 154,215.3 154.3,215.2 154.5,215 154.8,214.8 155,214.6 155.3,214.4 155.5,214.2 155.8,214 156,213.8 156.3,213.6 156.5,213.4 156.8,213.2 157,213 157.3,212.7 157.5,212.5 157.8,212.2 158,212 158.3,211.7 158.5,211.5 158.8,211.2 159,211 159.3,210.7 159.5,210.4 159.8,210.1 160,209.8 160.3,209.5 160.5,209.2 160.8,208.9 161,208.6 161.3,208.3 161.5,208 161.8,207.7 162,207.3 162.3,207 162.5,206.7 162.8,206.3 163,206 163.3,205.6 163.5,205.2 163.8,204.9 164,204.5 164.3,204.1 164.5,203.7 164.8,203.4 165,203 165.3,202.6 165.5,202.2 165.8,201.7 166,201.3 166.3,200.9 166.5,200.5 166.8,200.1 167,199.6 167.3,199.2 167.5,198.7 167.8,198.3 168,197.8 168.3,197.4 168.5,196.9 168.8,196.4 169,196 169.3,195.5 169.5,195 169.8,194.5 170,194 170.3,193.5 170.5,193 170.8,192.5 171,192 171.3,191.4 171.5,190.9 171.8,190.4 172,189.8 172.3,189.3 172.5,188.7 172.8,188.2 173,187.6 173.3,187.1 173.5,186.5 173.8,185.9 174,185.3 174.3,184.7 174.5,184.2 174.8,183.6 175,183 175.3,182.4 175.5,181.7 175.8,181.1 176,180.5 176.3,179.9 176.5,179.2 176.8,178.6 177,178 177.3,177.3 177.5,176.7 177.8,176 178,175.3 178.3,174.7 178.5,174 178.8,173.3 179,172.6 179.3,171.9 179.5,171.2 179.8,170.5 180,169.8 180.3,169.1 180.5,168.4 180.8,167.7 181,167 181.3,166.2 181.5,165.5 181.8,164.7 182,164 182.3,163.2 182.5,162.5 182.8,161.7 183,161 183.3,160.2 183.5,159.4 183.8,158.6 184,157.8 184.3,157 184.5,156.2 184.8,155.4 185,154.6 185.3,153.8 185.5,153 185.8,152.2 186,151.3 186.3,150.5 186.5,149.7 186.8,148.8 187,148 187.3,147.1 187.5,146.2 187.8,145.4 188,144.5 188.3,143.6 188.5,142.7 188.8,141.9 189,141 189.3,140.1 189.5,139.2 189.8,138.2 190,137.3 190.3,136.4 190.5,135.5 190.8,134.6 191,133.6 191.3,132.7 191.5,131.7 191.8,130.8 192,129.8 192.3,128.9 192.5,127.9 192.8,126.9 193,126 193.3,125 193.5,124 193.8,123 194,122 194.3,121 194.5,120 194.8,119 195,118 195.3,116.9 195.5,115.9 195.8,114.9 196,113.8 196.3,112.8 196.5,111.7 196.8,110.7 197,109.6 197.3,108.6 197.5,107.5 197.8,106.4 198,105.3 198.3,104.2 198.5,103.2 198.8,102.1 199,101 199.3,99.9 199.5,98.7 199.8,97.6 200,96.5 200.3,95.4 200.5,94.2 200.8,93.1 201,92 201.3,90.8 201.5,89.7 201.8,88.5 202,87.3 202.3,86.2 202.5,85 202.8,83.8 203,82.6 203.3,81.4 203.5,80.2 203.8,79 204,77.8 204.3,76.6 204.5,75.4 204.8,74.2 205,73 205.3,71.7 205.5,70.5 205.8,69.2 206,68 206.3,66.7 206.5,65.5 206.8,64.2 207,63 207.3,61.7 207.5,60.4 207.8,59.1 208,57.8 208.3,56.5 208.5,55.2 208.8,53.9 209,52.6 209.3,51.3 209.5,50 209.8,48.7 210,47.3 210.3,46 210.5,44.7 210.8,43.3 211,42 211.3,40.6 211.5,39.2 211.8,37.9 212,36.5 212.3,35.1 212.3,34.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="78.3,26.7 84.9,35.7 75.1,37.5" fill="currentColor"/>
  <polygon points="213.8,26.7 216.9,37.5 207.1,35.7" fill="currentColor"/>
</svg>
</div>

**Solution.** Notice that the graph is identical in shape to the $f(x)=x^2$
function, but the $x$-values are shifted to the right 2 units. The vertex used
to be at $(0,0)$, but now the vertex is at $(2,0)$. The graph is the basic
quadratic function shifted 2 units to the right, so

$$g(x)=f(x-2)$$

Notice how we must input the value $x=2$ to get the output value $y=0$; the
$x$-values must be 2 units larger because of the shift to the right by 2
units. We can then use the definition of the $f(x)$ function to write a
formula for $g(x)$ by evaluating $f(x-2)$.

$$
\begin{array}{lrcl}
& f(x) &=& x^2 \\[4pt]
& g(x) &=& f(x-2) \\[4pt]
& g(x) &=& f(x-2)=(x-2)^2
\end{array}
$$

To determine whether the shift is $+2$ or $-2$, consider a single reference
point on the graph. For a quadratic, looking at the vertex point is
convenient. In the original function, $f(0)=0$. In our shifted function,
$g(2)=0$. To obtain the output value of 0 from the function $f$, we need to
decide whether a plus or a minus sign will work to satisfy
$g(2)=f(x-2)=f(0)=0$. For this to work, we will need to *subtract* 2 units
from our input values.

**Example.** The function $G(m)$ gives the number of gallons of gas required
to drive $m$ miles. Interpret $G(m)+10$ and $G(m+10)$.

**Solution.** $G(m)+10$ can be interpreted as adding 10 to the output,
gallons. This is the gas required to drive $m$ miles, plus another 10 gallons
of gas. The graph would indicate a vertical shift.

$G(m+10)$ can be interpreted as adding 10 to the input, miles. So this is the
number of gallons of gas required to drive 10 miles more than $m$ miles. The
graph would indicate a horizontal shift.

{{< multiplechoice
  question="Given $f(x)=\sqrt{x}$, describe the transformation $g(x)=f(x+2)$."
  answer="a horizontal shift 2 units to the left"
  hint="The change is inside the function, so it moves the graph along the input axis — and a plus sign moves it toward negative $x$."
>}}
a horizontal shift 2 units to the left
a horizontal shift 2 units to the right
a vertical shift 2 units up
a vertical shift 2 units down
{{< /multiplechoice >}}

### Combining vertical and horizontal shifts

Now that we have two transformations, we can combine them together. Vertical
shifts are outside changes that affect the output ($y$-) axis values and shift
the function up or down. Horizontal shifts are inside changes that affect the
input ($x$-) axis values and shift the function left or right. Combining the
two types of shifts will cause the graph of a function to shift up or down
**and** right or left.

{{< callout type="info" >}}
  **How to:** given a function and both a vertical and a horizontal shift,
  sketch the graph.

  1. Identify the vertical and horizontal shifts from the formula.
  2. The vertical shift results from a constant added to the output. Move the
     graph up for a positive constant and down for a negative constant.
  3. The horizontal shift results from a constant added to the input. Move
     the graph left for a positive constant and right for a negative
     constant.
  4. Apply the shifts to the graph in either order.
{{< /callout >}}

**Example.** Given $f(x)=\lvert x\rvert$, sketch a graph of
$h(x)=f(x+1)-3$.

**Solution.** The function $f$ is our toolkit absolute value function. We know
that this graph has a V shape, with the point at the origin. The graph of $h$
has transformed $f$ in two ways: $f(x+1)$ is a change on the inside of the
function, giving a horizontal shift left by 1, and the subtraction by 3 in
$f(x+1)-3$ is a change to the outside of the function, giving a vertical shift
down by 3.

Let us follow one point of the graph of $f(x)=\lvert x\rvert$.

- The point $(0,0)$ is transformed first by shifting left 1 unit:
  $(0,0)\to(-1,0)$
- The point $(-1,0)$ is transformed next by shifting down 3 units:
  $(-1,0)\to(-1,-3)$

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The V-shaped graph of the absolute value function with its corner at the origin, and dashed, the graph of the absolute value of x plus 1, minus 3, whose corner sits at (−1, −3). The corner point of each is marked.","xMin":-6,"xMax":6,"yMin":-5,"yMax":6,"unit":22,"tickLabels":true,"polylines":[{"through":[[-5,5],[0,0],[5,5]],"arrows":true},{"through":[[-6,2],[-1,-3],[3,2]],"dashed":true,"arrows":true}],"points":[{"at":[0,0]},{"at":[-1,-3]}]}'>
<svg role="img" aria-label="The V-shaped graph of the absolute value function with its corner at the origin, and dashed, the graph of the absolute value of x plus 1, minus 3, whose corner sits at (−1, −3). The corner point of each is marked." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316 294" width="316" height="294" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="268" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="268" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="268" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="268" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="268" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="268" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="268" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="268" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="268" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="268" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="268" y1="268" x2="268" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="268" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
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
  <line x1="158" y1="24" x2="158" y2="270" stroke="currentColor" stroke-width="1"/>
  <polygon points="302,158 292,163 292,153" fill="currentColor"/>
  <polygon points="158,14 163,24 153,24" fill="currentColor"/>
  <polygon points="14,158 24,153 24,163" fill="currentColor"/>
  <polygon points="158,280 153,270 163,270" fill="currentColor"/>
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
  <polyline points="53.7,53.7 158,158 262.3,53.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="48,48 58.6,51.5 51.5,58.6" fill="currentColor"/>
  <polygon points="268,48 264.5,58.6 257.4,51.5" fill="currentColor"/>
  <polyline points="31.7,119.7 136,224 219,120.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="26,114 36.6,117.5 29.5,124.6" fill="currentColor"/>
  <polygon points="224,114 221.7,124.9 213.8,118.7" fill="currentColor"/>
  <circle cx="158" cy="158" r="4" fill="currentColor"/>
  <circle cx="136" cy="224" r="4" fill="currentColor"/>
</svg>
</div>

The graph of $h$ alone is shown below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of h of x equals the absolute value of x plus 1, minus 3: a V with its corner at (−1, −3).","xMin":-6,"xMax":6,"yMin":-5,"yMax":6,"unit":22,"tickLabels":true,"polylines":[{"through":[[-6,2],[-1,-3],[3,2]],"arrows":true}],"points":[{"at":[-1,-3]}]}'>
<svg role="img" aria-label="The graph of h of x equals the absolute value of x plus 1, minus 3: a V with its corner at (−1, −3)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316 294" width="316" height="294" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="268" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="268" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="268" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="268" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="268" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="268" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="268" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="268" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="268" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="268" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="268" y1="268" x2="268" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="268" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
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
  <line x1="158" y1="24" x2="158" y2="270" stroke="currentColor" stroke-width="1"/>
  <polygon points="302,158 292,163 292,153" fill="currentColor"/>
  <polygon points="158,14 163,24 153,24" fill="currentColor"/>
  <polygon points="14,158 24,153 24,163" fill="currentColor"/>
  <polygon points="158,280 153,270 163,270" fill="currentColor"/>
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
  <polyline points="31.7,119.7 136,224 219,120.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,114 36.6,117.5 29.5,124.6" fill="currentColor"/>
  <polygon points="224,114 221.7,124.9 213.8,118.7" fill="currentColor"/>
  <circle cx="136" cy="224" r="4" fill="currentColor"/>
</svg>
</div>

**Example.** Write a formula for the graph shown below, which is a
transformation of the toolkit square root function.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of the square root function shifted 1 unit right and 2 units up: it begins at the solid point (1, 2) and rises to the right, passing through (2, 3) and (5, 4).","xMin":-2,"xMax":8,"yMin":-1,"yMax":6,"unit":26,"tickLabels":true,"curves":[{"kind":"sqrt","h":1,"k":2,"arrows":"end"}],"points":[{"at":[1,2]}]}'>
<svg role="img" aria-label="The graph of the square root function shifted 1 unit right and 2 units up: it begins at the solid point (1, 2) and rises to the right, passing through (2, 3) and (5, 4)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 234" width="312" height="234" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="208" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="208" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="208" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="208" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="208" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="208" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="208" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="208" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="260" y1="208" x2="260" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="208" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="286" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="286" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="286" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="286" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="286" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="286" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="182" x2="288" y2="182" stroke="currentColor" stroke-width="1"/>
  <line x1="78" y1="24" x2="78" y2="210" stroke="currentColor" stroke-width="1"/>
  <polygon points="298,182 288,187 288,177" fill="currentColor"/>
  <polygon points="78,14 83,24 73,24" fill="currentColor"/>
  <polygon points="14,182 24,177 24,187" fill="currentColor"/>
  <polygon points="78,220 73,210 83,210" fill="currentColor"/>
  <text x="296" y="174" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="86" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="179" x2="26" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="197" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="52" y1="179" x2="52" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="197" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="104" y1="179" x2="104" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="197" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="130" y1="179" x2="130" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="197" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="156" y1="179" x2="156" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="197" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="182" y1="179" x2="182" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="197" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="208" y1="179" x2="208" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="197" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="234" y1="179" x2="234" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="197" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="260" y1="179" x2="260" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="197" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="286" y1="179" x2="286" y2="185" stroke="currentColor" stroke-width="1"/>
  <text x="286" y="197" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="75" y1="208" x2="81" y2="208" stroke="currentColor" stroke-width="1"/>
  <text x="72" y="212" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="75" y1="156" x2="81" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="72" y="160" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="75" y1="130" x2="81" y2="130" stroke="currentColor" stroke-width="1"/>
  <text x="72" y="134" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="75" y1="104" x2="81" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="72" y="108" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="75" y1="78" x2="81" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="72" y="82" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="75" y1="52" x2="81" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="72" y="56" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="75" y1="26" x2="81" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="72" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="104,130 104,129.8 104,129.5 104,129.3 104,129 104.1,128.8 104.1,128.5 104.1,128.3 104.2,128 104.2,127.8 104.2,127.5 104.3,127.3 104.3,127 104.4,126.8 104.5,126.5 104.5,126.3 104.6,126 104.7,125.8 104.8,125.5 104.9,125.3 105,125 105.1,124.8 105.2,124.5 105.3,124.3 105.4,124 105.5,123.8 105.6,123.5 105.7,123.3 105.9,123 106,122.8 106.2,122.5 106.3,122.3 106.4,122 106.6,121.8 106.8,121.5 106.9,121.3 107.1,121 107.3,120.8 107.5,120.5 107.6,120.3 107.8,120 108,119.8 108.2,119.5 108.4,119.3 108.6,119 108.8,118.8 109.1,118.5 109.3,118.3 109.5,118 109.7,117.8 110,117.5 110.2,117.3 110.5,117 110.7,116.8 111,116.5 111.2,116.3 111.5,116 111.8,115.8 112,115.5 112.3,115.3 112.6,115 112.9,114.8 113.2,114.5 113.5,114.3 113.8,114 114.1,113.8 114.4,113.6 114.7,113.3 115,113.1 115.4,112.8 115.7,112.6 116,112.3 116.4,112.1 116.7,111.8 117.1,111.6 117.4,111.3 117.8,111.1 118.2,110.8 118.5,110.6 118.9,110.3 119.3,110.1 119.7,109.8 120.1,109.6 120.5,109.3 120.9,109.1 121.3,108.8 121.7,108.6 122.1,108.3 122.5,108.1 122.9,107.8 123.4,107.6 123.8,107.3 124.2,107.1 124.7,106.8 125.1,106.6 125.6,106.3 126,106.1 126.5,105.8 126.9,105.6 127.4,105.3 127.9,105.1 128.4,104.8 128.9,104.6 129.3,104.3 129.8,104.1 130.3,103.8 130.8,103.6 131.4,103.3 131.9,103.1 132.4,102.8 132.9,102.6 133.4,102.3 134,102.1 134.5,101.8 135.1,101.6 135.6,101.3 136.1,101.1 136.7,100.8 137.3,100.6 137.8,100.3 138.4,100.1 139,99.8 139.6,99.6 140.1,99.3 140.7,99.1 141.3,98.8 141.9,98.6 142.5,98.3 143.1,98.1 143.8,97.8 144.4,97.6 145,97.3 145.6,97.1 146.3,96.9 146.9,96.6 147.5,96.4 148.2,96.1 148.8,95.9 149.5,95.6 150.2,95.4 150.8,95.1 151.5,94.9 152.2,94.6 152.9,94.4 153.5,94.1 154.2,93.9 154.9,93.6 155.6,93.4 156.3,93.1 157,92.9 157.8,92.6 158.5,92.4 159.2,92.1 159.9,91.9 160.7,91.6 161.4,91.4 162.1,91.1 162.9,90.9 163.6,90.6 164.4,90.4 165.2,90.1 165.9,89.9 166.7,89.6 167.5,89.4 168.3,89.1 169,88.9 169.8,88.6 170.6,88.4 171.4,88.1 172.2,87.9 173,87.6 173.9,87.4 174.7,87.1 175.5,86.9 176.3,86.6 177.2,86.4 178,86.1 178.9,85.9 179.7,85.6 180.6,85.4 181.4,85.1 182.3,84.9 183.1,84.6 184,84.4 184.9,84.1 185.8,83.9 186.7,83.6 187.5,83.4 188.4,83.1 189.3,82.9 190.3,82.6 191.2,82.4 192.1,82.1 193,81.9 193.9,81.6 194.8,81.4 195.8,81.1 196.7,80.9 197.7,80.7 198.6,80.4 199.6,80.2 200.5,79.9 201.5,79.7 202.5,79.4 203.4,79.2 204.4,78.9 205.4,78.7 206.4,78.4 207.4,78.2 208.4,77.9 209.4,77.7 210.4,77.4 211.4,77.2 212.4,76.9 213.4,76.7 214.4,76.4 215.5,76.2 216.5,75.9 217.5,75.7 218.6,75.4 219.6,75.2 220.7,74.9 221.7,74.7 222.8,74.4 223.9,74.2 225,73.9 226,73.7 227.1,73.4 228.2,73.2 229.3,72.9 230.4,72.7 231.5,72.4 232.6,72.2 233.7,71.9 234.8,71.7 235.9,71.4 237.1,71.2 238.2,70.9 239.3,70.7 240.5,70.4 241.6,70.2 242.8,69.9 243.9,69.7 245.1,69.4 246.2,69.2 247.4,68.9 248.6,68.7 249.8,68.4 250.9,68.2 252.1,67.9 253.3,67.7 254.5,67.4 255.7,67.2 256.9,66.9 258.1,66.7 259.4,66.4 260.6,66.2 261.8,65.9 263,65.7 264.3,65.4 265.5,65.2 266.8,64.9 268,64.7 269.3,64.5 270.5,64.2 271.8,64 273.1,63.7 274.3,63.5 275.6,63.2 276.9,63 278.1,62.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="286,61.2 277.1,68 275.2,58.2" fill="currentColor"/>
  <circle cx="104" cy="130" r="4" fill="currentColor"/>
</svg>
</div>

**Solution.** The graph of the toolkit function starts at the origin, so this
graph has been shifted 1 to the right and up 2. In function notation, we could
write that as

$$h(x)=f(x-1)+2$$

Using the formula for the square root function, we can write

$$h(x)=\sqrt{x-1}+2$$

Note that this transformation has changed the domain and range of the
function. This new graph has domain $[1,\infty)$ and range $[2,\infty)$.

{{< fillin
  question="Write a formula for a transformation of the toolkit reciprocal function $f(x)=\tfrac{1}{x}$ that shifts the function's graph one unit to the right and one unit up."
  answer="\frac{1}{x-1}+1"
  answerDisplay="$g(x)=\tfrac{1}{x-1}+1$"
  hint="Right by one is an inside change, $x-1$; up by one is an outside change, $+1$."
>}}

## Graphing functions using reflections about the axes

Another transformation that can be applied to a function is a reflection over
the $x$- or $y$-axis. A **vertical reflection** reflects a graph vertically
across the $x$-axis, while a **horizontal reflection** reflects a graph
horizontally across the $y$-axis.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A rising curve labelled the original function f of x, together with its two reflections drawn dashed: the horizontal reflection f of negative x, a mirror image across the vertical axis, and the vertical reflection negative f of x, a mirror image across the horizontal axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"grid":false,"curves":[{"kind":"exp","b":2.4,"k":-0.4},{"kind":"exp","b":0.4167,"k":-0.4,"dashed":true},{"kind":"exp","a":-1,"b":2.4,"k":0.4,"dashed":true}],"texts":[{"at":[2.1,2.6],"text":"f(x)","anchor":"start"},{"at":[-2.6,2.6],"text":"f(−x)","anchor":"end"},{"at":[2.3,-2.6],"text":"−f(x)","anchor":"start"}]}'>
<svg role="img" aria-label="A rising curve labelled the original function f of x, together with its two reflections drawn dashed: the horizontal reflection f of negative x, a mirror image across the vertical axis, and the vertical reflection negative f of x, a mirror image across the horizontal axis." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" width="260" height="260" font-family="Helvetica, Arial, sans-serif">
  <line x1="24" y1="130" x2="236" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="24" x2="130" y2="236" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,130 236,135 236,125" fill="currentColor"/>
  <polygon points="130,14 135,24 125,24" fill="currentColor"/>
  <polygon points="14,130 24,125 24,135" fill="currentColor"/>
  <polygon points="130,246 125,236 135,236" fill="currentColor"/>
  <text x="244" y="122" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <polyline points="34,139.4 34,139.4 34.3,139.4 34.5,139.4 34.8,139.3 35,139.3 35.3,139.3 35.5,139.3 35.8,139.3 36,139.3 36.3,139.3 36.5,139.3 36.8,139.3 37,139.3 37.3,139.3 37.5,139.2 37.8,139.2 38,139.2 38.3,139.2 38.5,139.2 38.8,139.2 39,139.2 39.3,139.2 39.5,139.2 39.8,139.2 40,139.1 40.3,139.1 40.5,139.1 40.8,139.1 41,139.1 41.3,139.1 41.5,139.1 41.8,139.1 42,139.1 42.3,139 42.5,139 42.8,139 43,139 43.3,139 43.5,139 43.8,139 44,139 44.3,139 44.5,138.9 44.8,138.9 45,138.9 45.3,138.9 45.5,138.9 45.8,138.9 46,138.9 46.3,138.9 46.5,138.8 46.8,138.8 47,138.8 47.3,138.8 47.5,138.8 47.8,138.8 48,138.8 48.3,138.7 48.5,138.7 48.8,138.7 49,138.7 49.3,138.7 49.5,138.7 49.8,138.7 50,138.6 50.3,138.6 50.5,138.6 50.8,138.6 51,138.6 51.3,138.6 51.5,138.6 51.8,138.5 52,138.5 52.3,138.5 52.5,138.5 52.8,138.5 53,138.5 53.3,138.4 53.5,138.4 53.8,138.4 54,138.4 54.3,138.4 54.5,138.4 54.8,138.3 55,138.3 55.3,138.3 55.5,138.3 55.8,138.3 56,138.2 56.3,138.2 56.5,138.2 56.8,138.2 57,138.2 57.3,138.2 57.5,138.1 57.8,138.1 58,138.1 58.3,138.1 58.5,138.1 58.8,138 59,138 59.3,138 59.5,138 59.8,138 60,137.9 60.3,137.9 60.5,137.9 60.8,137.9 61,137.9 61.3,137.8 61.5,137.8 61.8,137.8 62,137.8 62.3,137.7 62.5,137.7 62.8,137.7 63,137.7 63.3,137.7 63.5,137.6 63.8,137.6 64,137.6 64.3,137.6 64.5,137.5 64.8,137.5 65,137.5 65.3,137.5 65.5,137.4 65.8,137.4 66,137.4 66.3,137.4 66.5,137.3 66.8,137.3 67,137.3 67.3,137.3 67.5,137.2 67.8,137.2 68,137.2 68.3,137.1 68.5,137.1 68.8,137.1 69,137.1 69.3,137 69.5,137 69.8,137 70,137 70.3,136.9 70.5,136.9 70.8,136.9 71,136.8 71.3,136.8 71.5,136.8 71.8,136.7 72,136.7 72.3,136.7 72.5,136.6 72.8,136.6 73,136.6 73.3,136.6 73.5,136.5 73.8,136.5 74,136.5 74.3,136.4 74.5,136.4 74.8,136.4 75,136.3 75.3,136.3 75.5,136.3 75.8,136.2 76,136.2 76.3,136.1 76.5,136.1 76.8,136.1 77,136 77.3,136 77.5,136 77.8,135.9 78,135.9 78.3,135.8 78.5,135.8 78.8,135.8 79,135.7 79.3,135.7 79.5,135.7 79.8,135.6 80,135.6 80.3,135.5 80.5,135.5 80.8,135.4 81,135.4 81.3,135.4 81.5,135.3 81.8,135.3 82,135.2 82.3,135.2 82.5,135.1 82.8,135.1 83,135.1 83.3,135 83.5,135 83.8,134.9 84,134.9 84.3,134.8 84.5,134.8 84.8,134.7 85,134.7 85.3,134.6 85.5,134.6 85.8,134.5 86,134.5 86.3,134.4 86.5,134.4 86.8,134.3 87,134.3 87.3,134.2 87.5,134.2 87.8,134.1 88,134.1 88.3,134 88.5,134 88.8,133.9 89,133.9 89.3,133.8 89.5,133.8 89.8,133.7 90,133.6 90.3,133.6 90.5,133.5 90.8,133.5 91,133.4 91.3,133.3 91.5,133.3 91.8,133.2 92,133.2 92.3,133.1 92.5,133 92.8,133 93,132.9 93.3,132.9 93.5,132.8 93.8,132.7 94,132.7 94.3,132.6 94.5,132.5 94.8,132.5 95,132.4 95.3,132.3 95.5,132.3 95.8,132.2 96,132.1 96.3,132.1 96.5,132 96.8,131.9 97,131.8 97.3,131.8 97.5,131.7 97.8,131.6 98,131.5 98.3,131.5 98.5,131.4 98.8,131.3 99,131.2 99.3,131.2 99.5,131.1 99.8,131 100,130.9 100.3,130.9 100.5,130.8 100.8,130.7 101,130.6 101.3,130.5 101.5,130.4 101.8,130.4 102,130.3 102.3,130.2 102.5,130.1 102.8,130 103,129.9 103.3,129.8 103.5,129.7 103.8,129.7 104,129.6 104.3,129.5 104.5,129.4 104.8,129.3 105,129.2 105.3,129.1 105.5,129 105.8,128.9 106,128.8 106.3,128.7 106.5,128.6 106.8,128.5 107,128.4 107.3,128.3 107.5,128.2 107.8,128.1 108,128 108.3,127.9 108.5,127.8 108.8,127.7 109,127.6 109.3,127.5 109.5,127.4 109.8,127.3 110,127.1 110.3,127 110.5,126.9 110.8,126.8 111,126.7 111.3,126.6 111.5,126.5 111.8,126.3 112,126.2 112.3,126.1 112.5,126 112.8,125.9 113,125.7 113.3,125.6 113.5,125.5 113.8,125.4 114,125.2 114.3,125.1 114.5,125 114.8,124.8 115,124.7 115.3,124.6 115.5,124.4 115.8,124.3 116,124.2 116.3,124 116.5,123.9 116.8,123.8 117,123.6 117.3,123.5 117.5,123.3 117.8,123.2 118,123 118.3,122.9 118.5,122.7 118.8,122.6 119,122.4 119.3,122.3 119.5,122.1 119.8,122 120,121.8 120.3,121.7 120.5,121.5 120.8,121.4 121,121.2 121.3,121 121.5,120.9 121.8,120.7 122,120.5 122.3,120.4 122.5,120.2 122.8,120 123,119.9 123.3,119.7 123.5,119.5 123.8,119.3 124,119.2 124.3,119 124.5,118.8 124.8,118.6 125,118.4 125.3,118.2 125.5,118.1 125.8,117.9 126,117.7 126.3,117.5 126.5,117.3 126.8,117.1 127,116.9 127.3,116.7 127.5,116.5 127.8,116.3 128,116.1 128.3,115.9 128.5,115.7 128.8,115.5 129,115.3 129.3,115 129.5,114.8 129.8,114.6 130,114.4 130.3,114.2 130.5,114 130.8,113.7 131,113.5 131.3,113.3 131.5,113.1 131.8,112.8 132,112.6 132.3,112.4 132.5,112.1 132.8,111.9 133,111.6 133.3,111.4 133.5,111.1 133.8,110.9 134,110.7 134.3,110.4 134.5,110.1 134.8,109.9 135,109.6 135.3,109.4 135.5,109.1 135.8,108.8 136,108.6 136.3,108.3 136.5,108 136.8,107.8 137,107.5 137.3,107.2 137.5,106.9 137.8,106.6 138,106.4 138.3,106.1 138.5,105.8 138.8,105.5 139,105.2 139.3,104.9 139.5,104.6 139.8,104.3 140,104 140.3,103.7 140.5,103.4 140.8,103.1 141,102.7 141.3,102.4 141.5,102.1 141.8,101.8 142,101.5 142.3,101.1 142.5,100.8 142.8,100.5 143,100.1 143.3,99.8 143.5,99.4 143.8,99.1 144,98.7 144.3,98.4 144.5,98 144.8,97.7 145,97.3 145.3,97 145.5,96.6 145.8,96.2 146,95.8 146.3,95.5 146.5,95.1 146.8,94.7 147,94.3 147.3,93.9 147.5,93.5 147.8,93.1 148,92.7 148.3,92.3 148.5,91.9 148.8,91.5 149,91.1 149.3,90.7 149.5,90.3 149.8,89.8 150,89.4 150.3,89 150.5,88.5 150.8,88.1 151,87.7 151.3,87.2 151.5,86.8 151.8,86.3 152,85.9 152.3,85.4 152.5,84.9 152.8,84.5 153,84 153.3,83.5 153.5,83 153.8,82.6 154,82.1 154.3,81.6 154.5,81.1 154.8,80.6 155,80.1 155.3,79.6 155.5,79 155.8,78.5 156,78 156.3,77.5 156.5,76.9 156.8,76.4 157,75.9 157.3,75.3 157.5,74.8 157.8,74.2 158,73.7 158.3,73.1 158.5,72.5 158.8,71.9 159,71.4 159.3,70.8 159.5,70.2 159.8,69.6 160,69 160.3,68.4 160.5,67.8 160.8,67.2 161,66.6 161.3,65.9 161.5,65.3 161.8,64.7 162,64 162.3,63.4 162.5,62.7 162.8,62.1 163,61.4 163.3,60.7 163.5,60.1 163.8,59.4 164,58.7 164.3,58 164.5,57.3 164.8,56.6 165,55.9 165.3,55.2 165.5,54.5 165.8,53.8 166,53 166.3,52.3 166.5,51.5 166.8,50.8 167,50 167.3,49.3 167.5,48.5 167.8,47.7 168,46.9 168.3,46.1 168.5,45.3 168.8,44.5 169,43.7 169.3,42.9 169.5,42.1 169.8,41.3 170,40.4 170.3,39.6 170.5,38.7 170.8,37.9 171,37 171.3,36.1 171.5,35.2 171.8,34.4 171.9,33.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,139.6 35.8,134.3 36.1,144.3" fill="currentColor"/>
  <polygon points="174,26 176.2,37 166.6,34.4" fill="currentColor"/>
  <polyline points="88.1,33.7 88.3,34.4 88.5,35.3 88.8,36.1 89,37 89.3,37.9 89.5,38.7 89.8,39.6 90,40.4 90.3,41.3 90.5,42.1 90.8,42.9 91,43.7 91.3,44.6 91.5,45.4 91.8,46.2 92,46.9 92.3,47.7 92.5,48.5 92.8,49.3 93,50 93.3,50.8 93.5,51.5 93.8,52.3 94,53 94.3,53.8 94.5,54.5 94.8,55.2 95,55.9 95.3,56.6 95.5,57.3 95.8,58 96,58.7 96.3,59.4 96.5,60.1 96.8,60.8 97,61.4 97.3,62.1 97.5,62.7 97.8,63.4 98,64 98.3,64.7 98.5,65.3 98.8,65.9 99,66.6 99.3,67.2 99.5,67.8 99.8,68.4 100,69 100.3,69.6 100.5,70.2 100.8,70.8 101,71.4 101.3,72 101.5,72.5 101.8,73.1 102,73.7 102.3,74.2 102.5,74.8 102.8,75.3 103,75.9 103.3,76.4 103.5,76.9 103.8,77.5 104,78 104.3,78.5 104.5,79 104.8,79.6 105,80.1 105.3,80.6 105.5,81.1 105.8,81.6 106,82.1 106.3,82.6 106.5,83 106.8,83.5 107,84 107.3,84.5 107.5,84.9 107.8,85.4 108,85.9 108.3,86.3 108.5,86.8 108.8,87.2 109,87.7 109.3,88.1 109.5,88.6 109.8,89 110,89.4 110.3,89.8 110.5,90.3 110.8,90.7 111,91.1 111.3,91.5 111.5,91.9 111.8,92.3 112,92.7 112.3,93.1 112.5,93.5 112.8,93.9 113,94.3 113.3,94.7 113.5,95.1 113.8,95.5 114,95.8 114.3,96.2 114.5,96.6 114.8,97 115,97.3 115.3,97.7 115.5,98 115.8,98.4 116,98.7 116.3,99.1 116.5,99.4 116.8,99.8 117,100.1 117.3,100.5 117.5,100.8 117.8,101.1 118,101.5 118.3,101.8 118.5,102.1 118.8,102.4 119,102.7 119.3,103.1 119.5,103.4 119.8,103.7 120,104 120.3,104.3 120.5,104.6 120.8,104.9 121,105.2 121.3,105.5 121.5,105.8 121.8,106.1 122,106.4 122.3,106.6 122.5,106.9 122.8,107.2 123,107.5 123.3,107.8 123.5,108 123.8,108.3 124,108.6 124.3,108.8 124.5,109.1 124.8,109.4 125,109.6 125.3,109.9 125.5,110.1 125.8,110.4 126,110.7 126.3,110.9 126.5,111.1 126.8,111.4 127,111.6 127.3,111.9 127.5,112.1 127.8,112.4 128,112.6 128.3,112.8 128.5,113.1 128.8,113.3 129,113.5 129.3,113.7 129.5,114 129.8,114.2 130,114.4 130.3,114.6 130.5,114.8 130.8,115 131,115.3 131.3,115.5 131.5,115.7 131.8,115.9 132,116.1 132.3,116.3 132.5,116.5 132.8,116.7 133,116.9 133.3,117.1 133.5,117.3 133.8,117.5 134,117.7 134.3,117.9 134.5,118.1 134.8,118.2 135,118.4 135.3,118.6 135.5,118.8 135.8,119 136,119.2 136.3,119.3 136.5,119.5 136.8,119.7 137,119.9 137.3,120 137.5,120.2 137.8,120.4 138,120.5 138.3,120.7 138.5,120.9 138.8,121 139,121.2 139.3,121.4 139.5,121.5 139.8,121.7 140,121.8 140.3,122 140.5,122.1 140.8,122.3 141,122.4 141.3,122.6 141.5,122.7 141.8,122.9 142,123 142.3,123.2 142.5,123.3 142.8,123.5 143,123.6 143.3,123.8 143.5,123.9 143.8,124 144,124.2 144.3,124.3 144.5,124.4 144.8,124.6 145,124.7 145.3,124.8 145.5,125 145.8,125.1 146,125.2 146.3,125.4 146.5,125.5 146.8,125.6 147,125.7 147.3,125.9 147.5,126 147.8,126.1 148,126.2 148.3,126.3 148.5,126.5 148.8,126.6 149,126.7 149.3,126.8 149.5,126.9 149.8,127 150,127.1 150.3,127.3 150.5,127.4 150.8,127.5 151,127.6 151.3,127.7 151.5,127.8 151.8,127.9 152,128 152.3,128.1 152.5,128.2 152.8,128.3 153,128.4 153.3,128.5 153.5,128.6 153.8,128.7 154,128.8 154.3,128.9 154.5,129 154.8,129.1 155,129.2 155.3,129.3 155.5,129.4 155.8,129.5 156,129.6 156.3,129.7 156.5,129.7 156.8,129.8 157,129.9 157.3,130 157.5,130.1 157.8,130.2 158,130.3 158.3,130.4 158.5,130.4 158.8,130.5 159,130.6 159.3,130.7 159.5,130.8 159.8,130.9 160,130.9 160.3,131 160.5,131.1 160.8,131.2 161,131.2 161.3,131.3 161.5,131.4 161.8,131.5 162,131.5 162.3,131.6 162.5,131.7 162.8,131.8 163,131.8 163.3,131.9 163.5,132 163.8,132.1 164,132.1 164.3,132.2 164.5,132.3 164.8,132.3 165,132.4 165.3,132.5 165.5,132.5 165.8,132.6 166,132.7 166.3,132.7 166.5,132.8 166.8,132.9 167,132.9 167.3,133 167.5,133 167.8,133.1 168,133.2 168.3,133.2 168.5,133.3 168.8,133.3 169,133.4 169.3,133.5 169.5,133.5 169.8,133.6 170,133.6 170.3,133.7 170.5,133.8 170.8,133.8 171,133.9 171.3,133.9 171.5,134 171.8,134 172,134.1 172.3,134.1 172.5,134.2 172.8,134.2 173,134.3 173.3,134.3 173.5,134.4 173.8,134.4 174,134.5 174.3,134.5 174.5,134.6 174.8,134.6 175,134.7 175.3,134.7 175.5,134.8 175.8,134.8 176,134.9 176.3,134.9 176.5,135 176.8,135 177,135.1 177.3,135.1 177.5,135.1 177.8,135.2 178,135.2 178.3,135.3 178.5,135.3 178.8,135.4 179,135.4 179.3,135.4 179.5,135.5 179.8,135.5 180,135.6 180.3,135.6 180.5,135.7 180.8,135.7 181,135.7 181.3,135.8 181.5,135.8 181.8,135.8 182,135.9 182.3,135.9 182.5,136 182.8,136 183,136 183.3,136.1 183.5,136.1 183.8,136.1 184,136.2 184.3,136.2 184.5,136.2 184.8,136.3 185,136.3 185.3,136.4 185.5,136.4 185.8,136.4 186,136.5 186.3,136.5 186.5,136.5 186.8,136.6 187,136.6 187.3,136.6 187.5,136.6 187.8,136.7 188,136.7 188.3,136.7 188.5,136.8 188.8,136.8 189,136.8 189.3,136.9 189.5,136.9 189.8,136.9 190,137 190.3,137 190.5,137 190.8,137 191,137.1 191.3,137.1 191.5,137.1 191.8,137.1 192,137.2 192.3,137.2 192.5,137.2 192.8,137.3 193,137.3 193.3,137.3 193.5,137.3 193.8,137.4 194,137.4 194.3,137.4 194.5,137.4 194.8,137.5 195,137.5 195.3,137.5 195.5,137.5 195.8,137.6 196,137.6 196.3,137.6 196.5,137.6 196.8,137.7 197,137.7 197.3,137.7 197.5,137.7 197.8,137.7 198,137.8 198.3,137.8 198.5,137.8 198.8,137.8 199,137.9 199.3,137.9 199.5,137.9 199.8,137.9 200,137.9 200.3,138 200.5,138 200.8,138 201,138 201.3,138 201.5,138.1 201.8,138.1 202,138.1 202.3,138.1 202.5,138.1 202.8,138.2 203,138.2 203.3,138.2 203.5,138.2 203.8,138.2 204,138.2 204.3,138.3 204.5,138.3 204.8,138.3 205,138.3 205.3,138.3 205.5,138.4 205.8,138.4 206,138.4 206.3,138.4 206.5,138.4 206.8,138.4 207,138.5 207.3,138.5 207.5,138.5 207.8,138.5 208,138.5 208.3,138.5 208.5,138.6 208.8,138.6 209,138.6 209.3,138.6 209.5,138.6 209.8,138.6 210,138.6 210.3,138.7 210.5,138.7 210.8,138.7 211,138.7 211.3,138.7 211.5,138.7 211.8,138.7 212,138.8 212.3,138.8 212.5,138.8 212.8,138.8 213,138.8 213.3,138.8 213.5,138.8 213.8,138.8 214,138.9 214.3,138.9 214.5,138.9 214.8,138.9 215,138.9 215.3,138.9 215.5,138.9 215.8,139 216,139 216.3,139 216.5,139 216.8,139 217,139 217.3,139 217.5,139 217.8,139 218,139.1 218.3,139.1 218.5,139.1 218.8,139.1 219,139.1 219.3,139.1 219.5,139.1 219.8,139.1 220,139.1 220.3,139.2 220.5,139.2 220.8,139.2 221,139.2 221.3,139.2 221.5,139.2 221.8,139.2 222,139.2 222.3,139.2 222.5,139.2 222.8,139.3 223,139.3 223.3,139.3 223.5,139.3 223.8,139.3 224,139.3 224.3,139.3 224.5,139.3 224.8,139.3 225,139.3 225.3,139.3 225.5,139.4 225.8,139.4 226,139.4 226,139.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="86,26 93.4,34.4 83.8,37" fill="currentColor"/>
  <polygon points="234,139.6 223.9,144.3 224.2,134.3" fill="currentColor"/>
  <polyline points="34,120.6 34,120.6 34.3,120.6 34.5,120.6 34.8,120.7 35,120.7 35.3,120.7 35.5,120.7 35.8,120.7 36,120.7 36.3,120.7 36.5,120.7 36.8,120.7 37,120.7 37.3,120.7 37.5,120.8 37.8,120.8 38,120.8 38.3,120.8 38.5,120.8 38.8,120.8 39,120.8 39.3,120.8 39.5,120.8 39.8,120.8 40,120.9 40.3,120.9 40.5,120.9 40.8,120.9 41,120.9 41.3,120.9 41.5,120.9 41.8,120.9 42,120.9 42.3,121 42.5,121 42.8,121 43,121 43.3,121 43.5,121 43.8,121 44,121 44.3,121 44.5,121.1 44.8,121.1 45,121.1 45.3,121.1 45.5,121.1 45.8,121.1 46,121.1 46.3,121.1 46.5,121.2 46.8,121.2 47,121.2 47.3,121.2 47.5,121.2 47.8,121.2 48,121.2 48.3,121.3 48.5,121.3 48.8,121.3 49,121.3 49.3,121.3 49.5,121.3 49.8,121.3 50,121.4 50.3,121.4 50.5,121.4 50.8,121.4 51,121.4 51.3,121.4 51.5,121.4 51.8,121.5 52,121.5 52.3,121.5 52.5,121.5 52.8,121.5 53,121.5 53.3,121.6 53.5,121.6 53.8,121.6 54,121.6 54.3,121.6 54.5,121.6 54.8,121.7 55,121.7 55.3,121.7 55.5,121.7 55.8,121.7 56,121.8 56.3,121.8 56.5,121.8 56.8,121.8 57,121.8 57.3,121.8 57.5,121.9 57.8,121.9 58,121.9 58.3,121.9 58.5,121.9 58.8,122 59,122 59.3,122 59.5,122 59.8,122 60,122.1 60.3,122.1 60.5,122.1 60.8,122.1 61,122.1 61.3,122.2 61.5,122.2 61.8,122.2 62,122.2 62.3,122.3 62.5,122.3 62.8,122.3 63,122.3 63.3,122.3 63.5,122.4 63.8,122.4 64,122.4 64.3,122.4 64.5,122.5 64.8,122.5 65,122.5 65.3,122.5 65.5,122.6 65.8,122.6 66,122.6 66.3,122.6 66.5,122.7 66.8,122.7 67,122.7 67.3,122.7 67.5,122.8 67.8,122.8 68,122.8 68.3,122.9 68.5,122.9 68.8,122.9 69,122.9 69.3,123 69.5,123 69.8,123 70,123 70.3,123.1 70.5,123.1 70.8,123.1 71,123.2 71.3,123.2 71.5,123.2 71.8,123.3 72,123.3 72.3,123.3 72.5,123.4 72.8,123.4 73,123.4 73.3,123.4 73.5,123.5 73.8,123.5 74,123.5 74.3,123.6 74.5,123.6 74.8,123.6 75,123.7 75.3,123.7 75.5,123.7 75.8,123.8 76,123.8 76.3,123.9 76.5,123.9 76.8,123.9 77,124 77.3,124 77.5,124 77.8,124.1 78,124.1 78.3,124.2 78.5,124.2 78.8,124.2 79,124.3 79.3,124.3 79.5,124.3 79.8,124.4 80,124.4 80.3,124.5 80.5,124.5 80.8,124.6 81,124.6 81.3,124.6 81.5,124.7 81.8,124.7 82,124.8 82.3,124.8 82.5,124.9 82.8,124.9 83,124.9 83.3,125 83.5,125 83.8,125.1 84,125.1 84.3,125.2 84.5,125.2 84.8,125.3 85,125.3 85.3,125.4 85.5,125.4 85.8,125.5 86,125.5 86.3,125.6 86.5,125.6 86.8,125.7 87,125.7 87.3,125.8 87.5,125.8 87.8,125.9 88,125.9 88.3,126 88.5,126 88.8,126.1 89,126.1 89.3,126.2 89.5,126.2 89.8,126.3 90,126.4 90.3,126.4 90.5,126.5 90.8,126.5 91,126.6 91.3,126.7 91.5,126.7 91.8,126.8 92,126.8 92.3,126.9 92.5,127 92.8,127 93,127.1 93.3,127.1 93.5,127.2 93.8,127.3 94,127.3 94.3,127.4 94.5,127.5 94.8,127.5 95,127.6 95.3,127.7 95.5,127.7 95.8,127.8 96,127.9 96.3,127.9 96.5,128 96.8,128.1 97,128.2 97.3,128.2 97.5,128.3 97.8,128.4 98,128.5 98.3,128.5 98.5,128.6 98.8,128.7 99,128.8 99.3,128.8 99.5,128.9 99.8,129 100,129.1 100.3,129.1 100.5,129.2 100.8,129.3 101,129.4 101.3,129.5 101.5,129.6 101.8,129.6 102,129.7 102.3,129.8 102.5,129.9 102.8,130 103,130.1 103.3,130.2 103.5,130.3 103.8,130.3 104,130.4 104.3,130.5 104.5,130.6 104.8,130.7 105,130.8 105.3,130.9 105.5,131 105.8,131.1 106,131.2 106.3,131.3 106.5,131.4 106.8,131.5 107,131.6 107.3,131.7 107.5,131.8 107.8,131.9 108,132 108.3,132.1 108.5,132.2 108.8,132.3 109,132.4 109.3,132.5 109.5,132.6 109.8,132.7 110,132.9 110.3,133 110.5,133.1 110.8,133.2 111,133.3 111.3,133.4 111.5,133.5 111.8,133.7 112,133.8 112.3,133.9 112.5,134 112.8,134.1 113,134.3 113.3,134.4 113.5,134.5 113.8,134.6 114,134.8 114.3,134.9 114.5,135 114.8,135.2 115,135.3 115.3,135.4 115.5,135.6 115.8,135.7 116,135.8 116.3,136 116.5,136.1 116.8,136.2 117,136.4 117.3,136.5 117.5,136.7 117.8,136.8 118,137 118.3,137.1 118.5,137.3 118.8,137.4 119,137.6 119.3,137.7 119.5,137.9 119.8,138 120,138.2 120.3,138.3 120.5,138.5 120.8,138.6 121,138.8 121.3,139 121.5,139.1 121.8,139.3 122,139.5 122.3,139.6 122.5,139.8 122.8,140 123,140.1 123.3,140.3 123.5,140.5 123.8,140.7 124,140.8 124.3,141 124.5,141.2 124.8,141.4 125,141.6 125.3,141.8 125.5,141.9 125.8,142.1 126,142.3 126.3,142.5 126.5,142.7 126.8,142.9 127,143.1 127.3,143.3 127.5,143.5 127.8,143.7 128,143.9 128.3,144.1 128.5,144.3 128.8,144.5 129,144.7 129.3,145 129.5,145.2 129.8,145.4 130,145.6 130.3,145.8 130.5,146 130.8,146.3 131,146.5 131.3,146.7 131.5,146.9 131.8,147.2 132,147.4 132.3,147.6 132.5,147.9 132.8,148.1 133,148.4 133.3,148.6 133.5,148.9 133.8,149.1 134,149.3 134.3,149.6 134.5,149.9 134.8,150.1 135,150.4 135.3,150.6 135.5,150.9 135.8,151.2 136,151.4 136.3,151.7 136.5,152 136.8,152.2 137,152.5 137.3,152.8 137.5,153.1 137.8,153.4 138,153.6 138.3,153.9 138.5,154.2 138.8,154.5 139,154.8 139.3,155.1 139.5,155.4 139.8,155.7 140,156 140.3,156.3 140.5,156.6 140.8,156.9 141,157.3 141.3,157.6 141.5,157.9 141.8,158.2 142,158.5 142.3,158.9 142.5,159.2 142.8,159.5 143,159.9 143.3,160.2 143.5,160.6 143.8,160.9 144,161.3 144.3,161.6 144.5,162 144.8,162.3 145,162.7 145.3,163 145.5,163.4 145.8,163.8 146,164.2 146.3,164.5 146.5,164.9 146.8,165.3 147,165.7 147.3,166.1 147.5,166.5 147.8,166.9 148,167.3 148.3,167.7 148.5,168.1 148.8,168.5 149,168.9 149.3,169.3 149.5,169.7 149.8,170.2 150,170.6 150.3,171 150.5,171.5 150.8,171.9 151,172.3 151.3,172.8 151.5,173.2 151.8,173.7 152,174.1 152.3,174.6 152.5,175.1 152.8,175.5 153,176 153.3,176.5 153.5,177 153.8,177.4 154,177.9 154.3,178.4 154.5,178.9 154.8,179.4 155,179.9 155.3,180.4 155.5,181 155.8,181.5 156,182 156.3,182.5 156.5,183.1 156.8,183.6 157,184.1 157.3,184.7 157.5,185.2 157.8,185.8 158,186.3 158.3,186.9 158.5,187.5 158.8,188.1 159,188.6 159.3,189.2 159.5,189.8 159.8,190.4 160,191 160.3,191.6 160.5,192.2 160.8,192.8 161,193.4 161.3,194.1 161.5,194.7 161.8,195.3 162,196 162.3,196.6 162.5,197.3 162.8,197.9 163,198.6 163.3,199.3 163.5,199.9 163.8,200.6 164,201.3 164.3,202 164.5,202.7 164.8,203.4 165,204.1 165.3,204.8 165.5,205.5 165.8,206.2 166,207 166.3,207.7 166.5,208.5 166.8,209.2 167,210 167.3,210.7 167.5,211.5 167.8,212.3 168,213.1 168.3,213.9 168.5,214.7 168.8,215.5 169,216.3 169.3,217.1 169.5,217.9 169.8,218.7 170,219.6 170.3,220.4 170.5,221.3 170.8,222.1 171,223 171.3,223.9 171.5,224.8 171.8,225.6 171.9,226.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="26,120.4 36.1,115.7 35.8,125.7" fill="currentColor"/>
  <polygon points="174,234 166.6,225.6 176.2,223" fill="currentColor"/>
  <text x="184.6" y="62.4" font-size="13" fill="currentColor" text-anchor="start">f(x)</text>
  <text x="62.4" y="62.4" font-size="13" fill="currentColor" text-anchor="end">f(−x)</text>
  <text x="189.8" y="197.6" font-size="13" fill="currentColor" text-anchor="start">−f(x)</text>
</svg>
</div>

Notice that the vertical reflection produces a new graph that is a mirror
image of the base or original graph about the $x$-axis. The horizontal
reflection produces a new graph that is a mirror image of the base or original
graph about the $y$-axis.

{{< callout type="info" >}}
  **Reflections.**

  Given a function $f(x)$, a new function $g(x)=-f(x)$ is a **vertical
  reflection** of the function $f(x)$, sometimes called a reflection about (or
  over, or through) the $x$-axis.

  Given a function $f(x)$, a new function $g(x)=f(-x)$ is a **horizontal
  reflection** of the function $f(x)$, sometimes called a reflection about the
  $y$-axis.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a function, reflect the graph both vertically and
  horizontally.

  1. Multiply all outputs by $-1$ for a vertical reflection. The new graph is
     a reflection of the original graph about the $x$-axis.
  2. Multiply all inputs by $-1$ for a horizontal reflection. The new graph is
     a reflection of the original graph about the $y$-axis.
{{< /callout >}}

**Example.** Reflect the graph of $s(t)=\sqrt{t}$ (a) vertically and (b)
horizontally.

**Solution.** (a) Reflecting the graph vertically means that each output value
will be reflected over the horizontal $t$-axis, as shown below with the
reflection dashed.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The square root curve rising from the origin and, dashed, its vertical reflection V of t equals negative the square root of t, falling from the origin as a mirror image across the horizontal axis.","xMin":-1,"xMax":6,"yMin":-3,"yMax":3,"xUnit":34,"yUnit":34,"tickLabels":true,"xLabel":"t","yLabel":"s(t)","curves":[{"kind":"sqrt","arrows":"end"},{"kind":"sqrt","a":-1,"dashed":true,"arrows":"end"}]}'>
<svg role="img" aria-label="The square root curve rising from the origin and, dashed, its vertical reflection V of t equals negative the square root of t, falling from the origin as a mirror image across the horizontal axis." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 256" width="290" height="256" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="230" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="94" y1="230" x2="94" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="128" y1="230" x2="128" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="162" y1="230" x2="162" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="196" y1="230" x2="196" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="230" y1="230" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="264" y1="230" x2="264" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="264" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="196" x2="264" y2="196" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="162" x2="264" y2="162" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="94" x2="264" y2="94" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="60" x2="264" y2="60" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="264" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="128" x2="266" y2="128" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="24" x2="60" y2="232" stroke="currentColor" stroke-width="1"/>
  <polygon points="276,128 266,133 266,123" fill="currentColor"/>
  <polygon points="60,14 65,24 55,24" fill="currentColor"/>
  <polygon points="14,128 24,123 24,133" fill="currentColor"/>
  <polygon points="60,242 55,232 65,232" fill="currentColor"/>
  <text x="274" y="120" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="68" y="24" font-size="13" fill="currentColor" font-style="italic">s(t)</text>
  <line x1="26" y1="125" x2="26" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="143" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="94" y1="125" x2="94" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="94" y="143" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="128" y1="125" x2="128" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="143" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="162" y1="125" x2="162" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="162" y="143" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="196" y1="125" x2="196" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="196" y="143" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="230" y1="125" x2="230" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="230" y="143" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="264" y1="125" x2="264" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="264" y="143" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="57" y1="230" x2="63" y2="230" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="234" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="57" y1="196" x2="63" y2="196" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="200" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="57" y1="162" x2="63" y2="162" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="166" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="57" y1="94" x2="63" y2="94" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="98" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="57" y1="60" x2="63" y2="60" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="64" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="57" y1="26" x2="63" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="30" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <polyline points="60,128 60,127.8 60,127.5 60,127.3 60,127 60,126.8 60.1,126.5 60.1,126.3 60.1,126 60.1,125.8 60.2,125.5 60.2,125.3 60.3,125 60.3,124.8 60.4,124.5 60.4,124.3 60.5,124 60.5,123.8 60.6,123.5 60.7,123.3 60.7,123 60.8,122.8 60.9,122.5 61,122.3 61.1,122 61.1,121.8 61.2,121.5 61.3,121.3 61.4,121 61.5,120.8 61.6,120.5 61.8,120.3 61.9,120 62,119.8 62.1,119.5 62.2,119.3 62.4,119 62.5,118.8 62.6,118.5 62.8,118.3 62.9,118 63.1,117.8 63.2,117.5 63.4,117.3 63.5,117 63.7,116.8 63.9,116.5 64,116.3 64.2,116 64.4,115.8 64.6,115.5 64.8,115.3 64.9,115 65.1,114.8 65.3,114.5 65.5,114.3 65.7,114 65.9,113.8 66.2,113.5 66.4,113.3 66.6,113 66.8,112.8 67,112.5 67.3,112.3 67.5,112 67.7,111.8 68,111.5 68.2,111.3 68.5,111 68.7,110.8 69,110.5 69.2,110.3 69.5,110 69.7,109.8 70,109.5 70.3,109.3 70.6,109 70.8,108.8 71.1,108.6 71.4,108.3 71.7,108.1 72,107.8 72.3,107.6 72.6,107.3 72.9,107.1 73.2,106.8 73.5,106.6 73.8,106.3 74.2,106.1 74.5,105.8 74.8,105.6 75.1,105.3 75.5,105.1 75.8,104.8 76.2,104.6 76.5,104.3 76.9,104.1 77.2,103.8 77.6,103.6 77.9,103.3 78.3,103.1 78.7,102.8 79,102.6 79.4,102.3 79.8,102.1 80.2,101.8 80.5,101.6 80.9,101.3 81.3,101.1 81.7,100.8 82.1,100.6 82.5,100.3 82.9,100.1 83.4,99.8 83.8,99.6 84.2,99.3 84.6,99.1 85,98.8 85.5,98.6 85.9,98.3 86.3,98.1 86.8,97.8 87.2,97.6 87.7,97.3 88.1,97.1 88.6,96.8 89,96.6 89.5,96.3 90,96.1 90.4,95.8 90.9,95.6 91.4,95.3 91.9,95.1 92.3,94.8 92.8,94.6 93.3,94.3 93.8,94.1 94.3,93.8 94.8,93.6 95.3,93.3 95.8,93.1 96.4,92.8 96.9,92.6 97.4,92.3 97.9,92.1 98.4,91.8 99,91.6 99.5,91.3 100.1,91.1 100.6,90.8 101.1,90.6 101.7,90.3 102.2,90.1 102.8,89.8 103.4,89.6 103.9,89.4 104.5,89.1 105.1,88.9 105.7,88.6 106.2,88.4 106.8,88.1 107.4,87.9 108,87.6 108.6,87.4 109.2,87.1 109.8,86.9 110.4,86.6 111,86.4 111.6,86.1 112.2,85.9 112.8,85.6 113.5,85.4 114.1,85.1 114.7,84.9 115.4,84.6 116,84.4 116.6,84.1 117.3,83.9 117.9,83.6 118.6,83.4 119.2,83.1 119.9,82.9 120.6,82.6 121.2,82.4 121.9,82.1 122.6,81.9 123.3,81.6 123.9,81.4 124.6,81.1 125.3,80.9 126,80.6 126.7,80.4 127.4,80.1 128.1,79.9 128.8,79.6 129.5,79.4 130.3,79.1 131,78.9 131.7,78.6 132.4,78.4 133.1,78.1 133.9,77.9 134.6,77.6 135.4,77.4 136.1,77.1 136.9,76.9 137.6,76.6 138.4,76.4 139.1,76.1 139.9,75.9 140.6,75.6 141.4,75.4 142.2,75.1 143,74.9 143.7,74.6 144.5,74.4 145.3,74.1 146.1,73.9 146.9,73.6 147.7,73.4 148.5,73.1 149.3,72.9 150.1,72.6 150.9,72.4 151.8,72.1 152.6,71.9 153.4,71.6 154.2,71.4 155.1,71.1 155.9,70.9 156.7,70.6 157.6,70.4 158.4,70.2 159.3,69.9 160.1,69.7 161,69.4 161.9,69.2 162.7,68.9 163.6,68.7 164.5,68.4 165.3,68.2 166.2,67.9 167.1,67.7 168,67.4 168.9,67.2 169.8,66.9 170.7,66.7 171.6,66.4 172.5,66.2 173.4,65.9 174.3,65.7 175.2,65.4 176.1,65.2 177.1,64.9 178,64.7 178.9,64.4 179.8,64.2 180.8,63.9 181.7,63.7 182.7,63.4 183.6,63.2 184.6,62.9 185.5,62.7 186.5,62.4 187.5,62.2 188.4,61.9 189.4,61.7 190.4,61.4 191.3,61.2 192.3,60.9 193.3,60.7 194.3,60.4 195.3,60.2 196.3,59.9 197.3,59.7 198.3,59.4 199.3,59.2 200.3,58.9 201.3,58.7 202.3,58.4 203.4,58.2 204.4,57.9 205.4,57.7 206.5,57.4 207.5,57.2 208.5,56.9 209.6,56.7 210.6,56.4 211.7,56.2 212.7,55.9 213.8,55.7 214.9,55.4 215.9,55.2 217,54.9 218.1,54.7 219.1,54.4 220.2,54.2 221.3,53.9 222.4,53.7 223.5,53.4 224.6,53.2 225.7,52.9 226.8,52.7 227.9,52.4 229,52.2 230.1,51.9 231.2,51.7 232.4,51.4 233.5,51.2 234.6,51 235.7,50.7 236.9,50.5 238,50.2 239.2,50 240.3,49.7 241.5,49.5 242.6,49.2 243.8,49 244.9,48.7 246.1,48.5 247.3,48.2 248.4,48 249.6,47.7 250.8,47.5 252,47.2 253.2,47 254.3,46.7 255.5,46.5 256.2,46.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="264,44.7 255.2,51.6 253.2,41.8" fill="currentColor"/>
  <polyline points="60,128 60,128.2 60,128.5 60,128.7 60,129 60,129.2 60.1,129.5 60.1,129.7 60.1,130 60.1,130.2 60.2,130.5 60.2,130.7 60.3,131 60.3,131.2 60.4,131.5 60.4,131.7 60.5,132 60.5,132.2 60.6,132.5 60.7,132.7 60.7,133 60.8,133.2 60.9,133.5 61,133.7 61.1,134 61.1,134.2 61.2,134.5 61.3,134.7 61.4,135 61.5,135.2 61.6,135.5 61.8,135.7 61.9,136 62,136.2 62.1,136.5 62.2,136.7 62.4,137 62.5,137.2 62.6,137.5 62.8,137.7 62.9,138 63.1,138.2 63.2,138.5 63.4,138.7 63.5,139 63.7,139.2 63.9,139.5 64,139.7 64.2,140 64.4,140.2 64.6,140.5 64.8,140.7 64.9,141 65.1,141.2 65.3,141.5 65.5,141.7 65.7,142 65.9,142.2 66.2,142.5 66.4,142.7 66.6,143 66.8,143.2 67,143.5 67.3,143.7 67.5,144 67.7,144.2 68,144.5 68.2,144.7 68.5,145 68.7,145.2 69,145.5 69.2,145.7 69.5,146 69.7,146.2 70,146.5 70.3,146.7 70.6,147 70.8,147.2 71.1,147.4 71.4,147.7 71.7,147.9 72,148.2 72.3,148.4 72.6,148.7 72.9,148.9 73.2,149.2 73.5,149.4 73.8,149.7 74.2,149.9 74.5,150.2 74.8,150.4 75.1,150.7 75.5,150.9 75.8,151.2 76.2,151.4 76.5,151.7 76.9,151.9 77.2,152.2 77.6,152.4 77.9,152.7 78.3,152.9 78.7,153.2 79,153.4 79.4,153.7 79.8,153.9 80.2,154.2 80.5,154.4 80.9,154.7 81.3,154.9 81.7,155.2 82.1,155.4 82.5,155.7 82.9,155.9 83.4,156.2 83.8,156.4 84.2,156.7 84.6,156.9 85,157.2 85.5,157.4 85.9,157.7 86.3,157.9 86.8,158.2 87.2,158.4 87.7,158.7 88.1,158.9 88.6,159.2 89,159.4 89.5,159.7 90,159.9 90.4,160.2 90.9,160.4 91.4,160.7 91.9,160.9 92.3,161.2 92.8,161.4 93.3,161.7 93.8,161.9 94.3,162.2 94.8,162.4 95.3,162.7 95.8,162.9 96.4,163.2 96.9,163.4 97.4,163.7 97.9,163.9 98.4,164.2 99,164.4 99.5,164.7 100.1,164.9 100.6,165.2 101.1,165.4 101.7,165.7 102.2,165.9 102.8,166.2 103.4,166.4 103.9,166.6 104.5,166.9 105.1,167.1 105.7,167.4 106.2,167.6 106.8,167.9 107.4,168.1 108,168.4 108.6,168.6 109.2,168.9 109.8,169.1 110.4,169.4 111,169.6 111.6,169.9 112.2,170.1 112.8,170.4 113.5,170.6 114.1,170.9 114.7,171.1 115.4,171.4 116,171.6 116.6,171.9 117.3,172.1 117.9,172.4 118.6,172.6 119.2,172.9 119.9,173.1 120.6,173.4 121.2,173.6 121.9,173.9 122.6,174.1 123.3,174.4 123.9,174.6 124.6,174.9 125.3,175.1 126,175.4 126.7,175.6 127.4,175.9 128.1,176.1 128.8,176.4 129.5,176.6 130.3,176.9 131,177.1 131.7,177.4 132.4,177.6 133.1,177.9 133.9,178.1 134.6,178.4 135.4,178.6 136.1,178.9 136.9,179.1 137.6,179.4 138.4,179.6 139.1,179.9 139.9,180.1 140.6,180.4 141.4,180.6 142.2,180.9 143,181.1 143.7,181.4 144.5,181.6 145.3,181.9 146.1,182.1 146.9,182.4 147.7,182.6 148.5,182.9 149.3,183.1 150.1,183.4 150.9,183.6 151.8,183.9 152.6,184.1 153.4,184.4 154.2,184.6 155.1,184.9 155.9,185.1 156.7,185.4 157.6,185.6 158.4,185.8 159.3,186.1 160.1,186.3 161,186.6 161.9,186.8 162.7,187.1 163.6,187.3 164.5,187.6 165.3,187.8 166.2,188.1 167.1,188.3 168,188.6 168.9,188.8 169.8,189.1 170.7,189.3 171.6,189.6 172.5,189.8 173.4,190.1 174.3,190.3 175.2,190.6 176.1,190.8 177.1,191.1 178,191.3 178.9,191.6 179.8,191.8 180.8,192.1 181.7,192.3 182.7,192.6 183.6,192.8 184.6,193.1 185.5,193.3 186.5,193.6 187.5,193.8 188.4,194.1 189.4,194.3 190.4,194.6 191.3,194.8 192.3,195.1 193.3,195.3 194.3,195.6 195.3,195.8 196.3,196.1 197.3,196.3 198.3,196.6 199.3,196.8 200.3,197.1 201.3,197.3 202.3,197.6 203.4,197.8 204.4,198.1 205.4,198.3 206.5,198.6 207.5,198.8 208.5,199.1 209.6,199.3 210.6,199.6 211.7,199.8 212.7,200.1 213.8,200.3 214.9,200.6 215.9,200.8 217,201.1 218.1,201.3 219.1,201.6 220.2,201.8 221.3,202.1 222.4,202.3 223.5,202.6 224.6,202.8 225.7,203.1 226.8,203.3 227.9,203.6 229,203.8 230.1,204.1 231.2,204.3 232.4,204.6 233.5,204.8 234.6,205 235.7,205.3 236.9,205.5 238,205.8 239.2,206 240.3,206.3 241.5,206.5 242.6,206.8 243.8,207 244.9,207.3 246.1,207.5 247.3,207.8 248.4,208 249.6,208.3 250.8,208.5 252,208.8 253.2,209 254.3,209.3 255.5,209.5 256.2,209.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="264,211.3 253.2,214.2 255.2,204.4" fill="currentColor"/>
</svg>
</div>

Because each output value is the opposite of the original output value, we can
write

$$V(t)=-s(t)\quad\text{or}\quad V(t)=-\sqrt{t}$$

Notice that this is an outside change that affects the output $s(t)$ values,
so the negative sign belongs outside of the function.

(b) Reflecting horizontally means that each input value will be reflected over
the vertical axis, as shown below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The square root curve rising to the right from the origin and, dashed, its horizontal reflection H of t equals the square root of negative t, rising to the left from the origin as a mirror image across the vertical axis.","xMin":-6,"xMax":6,"yMin":-1,"yMax":3,"xUnit":26,"yUnit":34,"tickLabels":true,"xLabel":"t","yLabel":"s(t)","curves":[{"kind":"sqrt","arrows":"end"}],"polylines":[{"through":[[0,0],[-0.25,0.5],[-0.5,0.707],[-1,1],[-1.5,1.225],[-2,1.414],[-2.5,1.581],[-3,1.732],[-3.5,1.871],[-4,2],[-4.5,2.121],[-5,2.236],[-5.5,2.345]],"dashed":true,"arrows":"end"}]}'>
<svg role="img" aria-label="The square root curve rising to the right from the origin and, dashed, its horizontal reflection H of t equals the square root of negative t, rising to the left from the origin as a mirror image across the vertical axis." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 364 188" width="364" height="188" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="162" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="162" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="162" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="162" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="162" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="162" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="162" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="162" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="260" y1="162" x2="260" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="162" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="312" y1="162" x2="312" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="338" y1="162" x2="338" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="162" x2="338" y2="162" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="94" x2="338" y2="94" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="60" x2="338" y2="60" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="338" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="128" x2="340" y2="128" stroke="currentColor" stroke-width="1"/>
  <line x1="182" y1="24" x2="182" y2="164" stroke="currentColor" stroke-width="1"/>
  <polygon points="350,128 340,133 340,123" fill="currentColor"/>
  <polygon points="182,14 187,24 177,24" fill="currentColor"/>
  <polygon points="14,128 24,123 24,133" fill="currentColor"/>
  <polygon points="182,174 177,164 187,164" fill="currentColor"/>
  <text x="348" y="120" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="190" y="24" font-size="13" fill="currentColor" font-style="italic">s(t)</text>
  <line x1="26" y1="125" x2="26" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="143" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="52" y1="125" x2="52" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="143" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="78" y1="125" x2="78" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="143" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="104" y1="125" x2="104" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="143" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="130" y1="125" x2="130" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="143" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="156" y1="125" x2="156" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="143" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="208" y1="125" x2="208" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="143" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="234" y1="125" x2="234" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="143" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="260" y1="125" x2="260" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="143" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="286" y1="125" x2="286" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="286" y="143" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="312" y1="125" x2="312" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="312" y="143" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="338" y1="125" x2="338" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="338" y="143" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="179" y1="162" x2="185" y2="162" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="166" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="179" y1="94" x2="185" y2="94" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="98" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="179" y1="60" x2="185" y2="60" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="64" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="179" y1="26" x2="185" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="30" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <polyline points="182,128 175.5,111 169,104 156,94 143,86.3 130,79.9 117,74.2 104,69.1 91,64.4 78,60 65,55.9 52,52 46.7,50.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="39,48.3 50,46.2 47.2,55.8" fill="currentColor"/>
  <polyline points="182,128 182,127.7 182,127.3 182,127 182,126.7 182.1,126.4 182.1,126 182.1,125.7 182.2,125.4 182.2,125.1 182.2,124.7 182.3,124.4 182.3,124.1 182.4,123.8 182.5,123.4 182.5,123.1 182.6,122.8 182.7,122.4 182.8,122.1 182.9,121.8 183,121.5 183.1,121.1 183.2,120.8 183.3,120.5 183.4,120.2 183.5,119.8 183.6,119.5 183.7,119.2 183.9,118.9 184,118.5 184.2,118.2 184.3,117.9 184.5,117.5 184.6,117.2 184.8,116.9 184.9,116.6 185.1,116.2 185.3,115.9 185.5,115.6 185.6,115.3 185.8,114.9 186,114.6 186.2,114.3 186.4,114 186.6,113.6 186.9,113.3 187.1,113 187.3,112.6 187.5,112.3 187.8,112 188,111.7 188.2,111.3 188.5,111 188.7,110.7 189,110.4 189.3,110 189.5,109.7 189.8,109.4 190.1,109.1 190.4,108.7 190.6,108.4 190.9,108.1 191.2,107.8 191.5,107.4 191.8,107.1 192.1,106.8 192.5,106.4 192.8,106.1 193.1,105.8 193.4,105.5 193.8,105.1 194.1,104.8 194.4,104.5 194.8,104.2 195.1,103.8 195.5,103.5 195.9,103.2 196.2,102.9 196.6,102.5 197,102.2 197.4,101.9 197.7,101.5 198.1,101.2 198.5,100.9 198.9,100.6 199.3,100.2 199.7,99.9 200.2,99.6 200.6,99.3 201,98.9 201.4,98.6 201.9,98.3 202.3,98 202.7,97.6 203.2,97.3 203.7,97 204.1,96.6 204.6,96.3 205,96 205.5,95.7 206,95.3 206.5,95 207,94.7 207.5,94.4 207.9,94 208.4,93.7 209,93.4 209.5,93.1 210,92.7 210.5,92.4 211,92.1 211.6,91.7 212.1,91.4 212.6,91.1 213.2,90.8 213.7,90.4 214.3,90.1 214.8,89.8 215.4,89.5 216,89.1 216.5,88.8 217.1,88.5 217.7,88.2 218.3,87.8 218.9,87.5 219.5,87.2 220.1,86.8 220.7,86.5 221.3,86.2 221.9,85.9 222.5,85.5 223.2,85.2 223.8,84.9 224.4,84.6 225.1,84.2 225.7,83.9 226.4,83.6 227,83.3 227.7,82.9 228.4,82.6 229,82.3 229.7,81.9 230.4,81.6 231.1,81.3 231.7,81 232.4,80.6 233.1,80.3 233.8,80 234.5,79.7 235.3,79.3 236,79 236.7,78.7 237.4,78.4 238.2,78 238.9,77.7 239.6,77.4 240.4,77.1 241.1,76.7 241.9,76.4 242.7,76.1 243.4,75.7 244.2,75.4 245,75.1 245.7,74.8 246.5,74.4 247.3,74.1 248.1,73.8 248.9,73.5 249.7,73.1 250.5,72.8 251.3,72.5 252.2,72.2 253,71.8 253.8,71.5 254.6,71.2 255.5,70.8 256.3,70.5 257.2,70.2 258,69.9 258.9,69.5 259.7,69.2 260.6,68.9 261.5,68.6 262.3,68.2 263.2,67.9 264.1,67.6 265,67.3 265.9,66.9 266.8,66.6 267.7,66.3 268.6,65.9 269.5,65.6 270.4,65.3 271.4,65 272.3,64.6 273.2,64.3 274.2,64 275.1,63.7 276.1,63.3 277,63 278,62.7 278.9,62.4 279.9,62 280.9,61.7 281.8,61.4 282.8,61 283.8,60.7 284.8,60.4 285.8,60.1 286.8,59.7 287.8,59.4 288.8,59.1 289.8,58.8 290.8,58.4 291.9,58.1 292.9,57.8 293.9,57.5 295,57.1 296,56.8 297.1,56.5 298.1,56.1 299.2,55.8 300.2,55.5 301.3,55.2 302.4,54.8 303.5,54.5 304.5,54.2 305.6,53.9 306.7,53.5 307.8,53.2 308.9,52.9 310,52.6 311.1,52.2 312.2,51.9 313.4,51.6 314.5,51.2 315.6,50.9 316.8,50.6 317.9,50.3 319,49.9 320.2,49.6 321.3,49.3 322.5,49 323.7,48.6 324.8,48.3 326,48 327.2,47.7 328.4,47.3 329.6,47 330.3,46.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="338,44.7 329.7,52.2 327,42.5" fill="currentColor"/>
</svg>
</div>

Because each input value is the opposite of the original input value, we can
write

$$H(t)=s(-t)\quad\text{or}\quad H(t)=\sqrt{-t}$$

Notice that this is an inside change or horizontal change that affects the
input values, so the negative sign is on the inside of the function.

Note that these transformations can affect the domain and range of the
functions. While the original square root function has domain $[0,\infty)$ and
range $[0,\infty)$, the vertical reflection gives the $V(t)$ function the
range $(-\infty,0]$ and the horizontal reflection gives the $H(t)$ function
the domain $(-\infty,0]$.

{{< fillin
  question="Reflect $f(x)=\lvert x-1\rvert$ vertically. Write a formula for the result."
  answer="-|x-1|"
  answerDisplay="$-\lvert x-1\rvert$"
  hint="A vertical reflection multiplies the whole output by $-1$."
>}}

{{< fillin
  question="Now reflect $f(x)=\lvert x-1\rvert$ horizontally, and write the result in the simplest equivalent form."
  answer="|x+1|"
  answerDisplay="$f(-x)=\lvert -x-1\rvert=\lvert x+1\rvert$"
  hint="Replace $x$ by $-x$ inside, then use $\lvert -a\rvert=\lvert a\rvert$."
>}}

**Example.** A function $f(x)$ is given below. Create a table for the
functions (a) $g(x)=-f(x)$ and (b) $h(x)=f(-x)$.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 1 | 3 | 7 | 11 |

**Solution.** (a) For $g(x)$, the negative sign outside the function indicates
a vertical reflection, so the $x$-values stay the same and each output value
will be the opposite of the original output value.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $g(x)$ | −1 | −3 | −7 | −11 |

(b) For $h(x)$, the negative sign inside the function indicates a horizontal
reflection, so each input value will be the opposite of the original input
value and the $h(x)$ values stay the same as the $f(x)$ values.

| $x$ | −2 | −4 | −6 | −8 |
| :--- | ---: | ---: | ---: | ---: |
| $h(x)$ | 1 | 3 | 7 | 11 |

Now suppose a function $f$ is given by the table below.

| $x$ | −2 | 0 | 2 | 4 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 5 | 10 | 15 | 20 |

{{< fillin
  question="With $f$ as in the table above and $g(x)=-f(x)$, find $g(2)$."
  answer="-15"
  hint="A vertical reflection keeps the input and negates the output."
>}}

{{< fillin
  question="With the same $f$ and $h(x)=f(-x)$, find $h(-2)$."
  answer="15"
  hint="A horizontal reflection reads the table at the opposite input: $h(-2)=f(2)$."
>}}

**Example.** A common model for learning has an equation similar to
$k(t)=-2^{-t}+1$, where $k$ is the percentage of mastery that can be achieved
after $t$ practice sessions. This is a transformation of the function
$f(t)=2^t$ shown below. Sketch a graph of $k(t)$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of t equals 2 to the power t: a curve that hugs the horizontal axis on the left, passes through (0, 1), and rises steeply to the right.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":22,"tickLabels":true,"xLabel":"t","yLabel":"f(t)","curves":[{"kind":"exp","b":2}]}'>
<svg role="img" aria-label="The graph of f of t equals 2 to the power t: a curve that hugs the horizontal axis on the left, passes through (0, 1), and rises steeply to the right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 272" width="272" height="272" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="246" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="246" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="246" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="246" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="246" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="246" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="246" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="246" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="246" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="246" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="246" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="246" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="246" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="246" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="246" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="246" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="246" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="246" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="246" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="136" x2="248" y2="136" stroke="currentColor" stroke-width="1"/>
  <line x1="136" y1="24" x2="136" y2="248" stroke="currentColor" stroke-width="1"/>
  <polygon points="258,136 248,141 248,131" fill="currentColor"/>
  <polygon points="136,14 141,24 131,24" fill="currentColor"/>
  <polygon points="14,136 24,131 24,141" fill="currentColor"/>
  <polygon points="136,258 131,248 141,248" fill="currentColor"/>
  <text x="256" y="128" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="144" y="24" font-size="13" fill="currentColor" font-style="italic">f(t)</text>
  <line x1="26" y1="133" x2="26" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="151" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="48" y1="133" x2="48" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="151" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="70" y1="133" x2="70" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="151" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="92" y1="133" x2="92" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="151" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="114" y1="133" x2="114" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="151" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="158" y1="133" x2="158" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="151" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="180" y1="133" x2="180" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="151" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="202" y1="133" x2="202" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="151" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="224" y1="133" x2="224" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="151" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="133" x2="246" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="151" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="133" y1="246" x2="139" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="250" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="133" y1="224" x2="139" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="228" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="133" y1="202" x2="139" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="206" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="133" y1="180" x2="139" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="184" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="133" y1="158" x2="139" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="162" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="133" y1="114" x2="139" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="118" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="133" y1="92" x2="139" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="96" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="133" y1="70" x2="139" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="74" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="133" y1="48" x2="139" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="52" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="133" y1="26" x2="139" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="34,135.1 34,135.1 34.3,135.1 34.5,135.1 34.8,135.1 35,135.1 35.3,135.1 35.5,135.1 35.8,135.1 36,135.1 36.3,135.1 36.5,135 36.8,135 37,135 37.3,135 37.5,135 37.8,135 38,135 38.3,135 38.5,135 38.8,135 39,135 39.3,135 39.5,134.9 39.8,134.9 40,134.9 40.3,134.9 40.5,134.9 40.7,134.9 41,134.9 41.3,134.9 41.5,134.9 41.8,134.9 42,134.9 42.3,134.9 42.5,134.8 42.8,134.8 43,134.8 43.3,134.8 43.5,134.8 43.8,134.8 44,134.8 44.3,134.8 44.5,134.8 44.8,134.8 45,134.7 45.3,134.7 45.5,134.7 45.8,134.7 46,134.7 46.2,134.7 46.5,134.7 46.8,134.7 47,134.7 47.3,134.7 47.5,134.6 47.8,134.6 48,134.6 48.3,134.6 48.5,134.6 48.8,134.6 49,134.6 49.3,134.6 49.5,134.6 49.8,134.5 50,134.5 50.3,134.5 50.5,134.5 50.8,134.5 51,134.5 51.3,134.5 51.5,134.5 51.8,134.5 52,134.4 52.3,134.4 52.5,134.4 52.8,134.4 53,134.4 53.3,134.4 53.5,134.4 53.8,134.4 54,134.3 54.3,134.3 54.5,134.3 54.8,134.3 55,134.3 55.3,134.3 55.5,134.3 55.8,134.2 56,134.2 56.3,134.2 56.5,134.2 56.8,134.2 57,134.2 57.3,134.2 57.5,134.1 57.8,134.1 58,134.1 58.3,134.1 58.5,134.1 58.8,134.1 59,134.1 59.3,134 59.5,134 59.8,134 60,134 60.3,134 60.5,134 60.8,133.9 61,133.9 61.3,133.9 61.5,133.9 61.8,133.9 62,133.9 62.3,133.8 62.5,133.8 62.8,133.8 63,133.8 63.3,133.8 63.5,133.8 63.8,133.7 64,133.7 64.3,133.7 64.5,133.7 64.8,133.7 65,133.7 65.3,133.6 65.5,133.6 65.8,133.6 66,133.6 66.3,133.6 66.5,133.5 66.8,133.5 67,133.5 67.3,133.5 67.5,133.5 67.8,133.4 68,133.4 68.3,133.4 68.5,133.4 68.8,133.4 69,133.3 69.3,133.3 69.5,133.3 69.8,133.3 70,133.3 70.3,133.2 70.5,133.2 70.8,133.2 71,133.2 71.3,133.1 71.5,133.1 71.8,133.1 72,133.1 72.3,133 72.5,133 72.8,133 73,133 73.3,133 73.5,132.9 73.8,132.9 74,132.9 74.3,132.9 74.5,132.8 74.8,132.8 75,132.8 75.3,132.8 75.5,132.7 75.8,132.7 76,132.7 76.3,132.7 76.5,132.6 76.8,132.6 77,132.6 77.3,132.5 77.5,132.5 77.8,132.5 78,132.5 78.3,132.4 78.5,132.4 78.8,132.4 79,132.3 79.3,132.3 79.5,132.3 79.8,132.3 80,132.2 80.3,132.2 80.5,132.2 80.8,132.1 81,132.1 81.3,132.1 81.5,132 81.8,132 82,132 82.3,132 82.5,131.9 82.8,131.9 83,131.9 83.3,131.8 83.5,131.8 83.8,131.8 84,131.7 84.3,131.7 84.5,131.7 84.8,131.6 85,131.6 85.3,131.6 85.5,131.5 85.8,131.5 86,131.4 86.3,131.4 86.5,131.4 86.8,131.3 87,131.3 87.3,131.3 87.5,131.2 87.8,131.2 88,131.2 88.3,131.1 88.5,131.1 88.8,131 89,131 89.3,131 89.5,130.9 89.8,130.9 90,130.8 90.3,130.8 90.5,130.8 90.8,130.7 91,130.7 91.3,130.6 91.5,130.6 91.8,130.5 92,130.5 92.3,130.5 92.5,130.4 92.8,130.4 93,130.3 93.3,130.3 93.5,130.2 93.8,130.2 94,130.1 94.3,130.1 94.5,130 94.8,130 95,130 95.3,129.9 95.5,129.9 95.8,129.8 96,129.8 96.3,129.7 96.5,129.7 96.8,129.6 97,129.6 97.3,129.5 97.5,129.5 97.8,129.4 98,129.4 98.3,129.3 98.5,129.3 98.8,129.2 99,129.1 99.3,129.1 99.5,129 99.8,129 100,128.9 100.3,128.9 100.5,128.8 100.8,128.8 101,128.7 101.3,128.6 101.5,128.6 101.8,128.5 102,128.5 102.3,128.4 102.5,128.3 102.8,128.3 103,128.2 103.3,128.2 103.5,128.1 103.8,128 104,128 104.3,127.9 104.5,127.8 104.8,127.8 105,127.7 105.3,127.7 105.5,127.6 105.8,127.5 106,127.5 106.3,127.4 106.5,127.3 106.8,127.2 107,127.2 107.3,127.1 107.5,127 107.8,127 108,126.9 108.3,126.8 108.5,126.8 108.8,126.7 109,126.6 109.3,126.5 109.5,126.5 109.8,126.4 110,126.3 110.3,126.2 110.5,126.1 110.8,126.1 111,126 111.3,125.9 111.5,125.8 111.8,125.8 112,125.7 112.3,125.6 112.5,125.5 112.8,125.4 113,125.3 113.3,125.3 113.5,125.2 113.8,125.1 114,125 114.3,124.9 114.5,124.8 114.8,124.7 115,124.6 115.3,124.6 115.5,124.5 115.8,124.4 116,124.3 116.3,124.2 116.5,124.1 116.8,124 117,123.9 117.3,123.8 117.5,123.7 117.8,123.6 118,123.5 118.3,123.4 118.5,123.3 118.8,123.2 119,123.1 119.3,123 119.5,122.9 119.8,122.8 120,122.7 120.3,122.6 120.5,122.5 120.8,122.4 121,122.3 121.2,122.2 121.5,122.1 121.8,122 122,121.8 122.3,121.7 122.5,121.6 122.8,121.5 123,121.4 123.3,121.3 123.5,121.2 123.8,121 124,120.9 124.3,120.8 124.5,120.7 124.8,120.6 125,120.4 125.3,120.3 125.5,120.2 125.8,120.1 126,119.9 126.3,119.8 126.5,119.7 126.7,119.6 127,119.4 127.3,119.3 127.5,119.2 127.8,119 128,118.9 128.3,118.8 128.5,118.6 128.8,118.5 129,118.4 129.3,118.2 129.5,118.1 129.8,117.9 130,117.8 130.3,117.6 130.5,117.5 130.8,117.4 131,117.2 131.3,117.1 131.5,116.9 131.8,116.8 132,116.6 132.3,116.5 132.5,116.3 132.8,116.1 133,116 133.3,115.8 133.5,115.7 133.8,115.5 134,115.3 134.3,115.2 134.5,115 134.8,114.8 135,114.7 135.3,114.5 135.5,114.3 135.8,114.2 136,114 136.3,113.8 136.5,113.7 136.8,113.5 137,113.3 137.3,113.1 137.5,112.9 137.8,112.8 138,112.6 138.3,112.4 138.5,112.2 138.8,112 139,111.8 139.3,111.6 139.5,111.4 139.8,111.2 140,111 140.3,110.8 140.5,110.6 140.8,110.4 141,110.2 141.3,110 141.5,109.8 141.8,109.6 142,109.4 142.3,109.2 142.5,109 142.8,108.8 143,108.6 143.3,108.4 143.5,108.1 143.8,107.9 144,107.7 144.3,107.5 144.5,107.2 144.8,107 145,106.8 145.3,106.6 145.5,106.3 145.8,106.1 146,105.9 146.3,105.6 146.5,105.4 146.8,105.1 147,104.9 147.3,104.6 147.5,104.4 147.8,104.1 148,103.9 148.3,103.6 148.5,103.4 148.8,103.1 149,102.9 149.3,102.6 149.5,102.3 149.8,102.1 150,101.8 150.3,101.5 150.5,101.3 150.8,101 151,100.7 151.3,100.4 151.5,100.1 151.8,99.9 152,99.6 152.3,99.3 152.5,99 152.8,98.7 153,98.4 153.3,98.1 153.5,97.8 153.8,97.5 154,97.2 154.3,96.9 154.5,96.6 154.8,96.3 155,96 155.3,95.7 155.5,95.3 155.8,95 156,94.7 156.3,94.4 156.5,94 156.8,93.7 157,93.4 157.3,93 157.5,92.7 157.8,92.3 158,92 158.3,91.7 158.5,91.3 158.8,90.9 159,90.6 159.3,90.2 159.5,89.9 159.8,89.5 160,89.1 160.3,88.8 160.5,88.4 160.8,88 161,87.6 161.3,87.3 161.5,86.9 161.8,86.5 162,86.1 162.3,85.7 162.5,85.3 162.8,84.9 163,84.5 163.3,84.1 163.5,83.7 163.8,83.3 164,82.8 164.3,82.4 164.5,82 164.8,81.6 165,81.1 165.3,80.7 165.5,80.3 165.8,79.8 166,79.4 166.3,78.9 166.5,78.5 166.8,78 167,77.6 167.3,77.1 167.5,76.6 167.8,76.2 168,75.7 168.3,75.2 168.5,74.7 168.8,74.3 169,73.8 169.3,73.3 169.5,72.8 169.8,72.3 170,71.8 170.3,71.3 170.5,70.8 170.8,70.2 171,69.7 171.3,69.2 171.5,68.7 171.8,68.1 172,67.6 172.3,67.1 172.5,66.5 172.8,66 173,65.4 173.3,64.9 173.5,64.3 173.8,63.7 174,63.2 174.3,62.6 174.5,62 174.8,61.4 175,60.8 175.3,60.2 175.5,59.6 175.8,59 176,58.4 176.3,57.8 176.5,57.2 176.8,56.6 177,55.9 177.3,55.3 177.5,54.7 177.8,54 178,53.4 178.3,52.7 178.5,52.1 178.8,51.4 179,50.7 179.3,50.1 179.5,49.4 179.8,48.7 180,48 180.3,47.3 180.5,46.6 180.8,45.9 181,45.2 181.3,44.5 181.5,43.7 181.8,43 182,42.3 182.3,41.5 182.5,40.8 182.8,40 183,39.3 183.3,38.5 183.5,37.7 183.8,37 184,36.2 184.3,35.4 184.5,34.6 184.7,33.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,135.3 35.9,130.1 36.1,140.1" fill="currentColor"/>
  <polygon points="187,26.3 188.9,37.3 179.3,34.4" fill="currentColor"/>
</svg>
</div>

**Solution.** This equation combines three transformations into one equation.

- A horizontal reflection: $f(-t)=2^{-t}$
- A vertical reflection: $-f(-t)=-2^{-t}$
- A vertical shift: $-f(-t)+1=-2^{-t}+1$

We can sketch a graph by applying these transformations one at a time to the
original function. Let us follow two points through each of the three
transformations. We will choose the points $(0,1)$ and $(1,2)$.

- First, we apply a horizontal reflection: $(0,1)\to(0,1)$ and
  $(1,2)\to(-1,2)$.
- Then, we apply a vertical reflection: $(0,1)\to(0,-1)$ and
  $(-1,2)\to(-1,-2)$.
- Finally, we apply a vertical shift: $(0,-1)\to(0,0)$ and
  $(-1,-2)\to(-1,-1)$.

This means that the original points $(0,1)$ and $(1,2)$ become $(0,0)$ and
$(-1,-1)$ after we apply the transformations.

Below, the first graph results from a horizontal reflection, the second from a
vertical reflection, and the third from a vertical shift up 1 unit.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Stage one: 2 to the power negative t, the horizontal reflection of 2 to the power t. It falls from the upper left, passes through (0, 1), and hugs the horizontal axis on the right.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":22,"tickLabels":true,"xLabel":"t","yLabel":"f(−t)","curves":[{"kind":"exp","b":0.5}]}'>
<svg role="img" aria-label="Stage one: 2 to the power negative t, the horizontal reflection of 2 to the power t. It falls from the upper left, passes through (0, 1), and hugs the horizontal axis on the right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 272" width="272" height="272" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="246" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="246" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="246" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="246" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="246" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="246" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="246" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="246" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="246" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="246" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="246" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="246" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="246" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="246" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="246" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="246" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="246" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="246" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="246" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="136" x2="248" y2="136" stroke="currentColor" stroke-width="1"/>
  <line x1="136" y1="24" x2="136" y2="248" stroke="currentColor" stroke-width="1"/>
  <polygon points="258,136 248,141 248,131" fill="currentColor"/>
  <polygon points="136,14 141,24 131,24" fill="currentColor"/>
  <polygon points="14,136 24,131 24,141" fill="currentColor"/>
  <polygon points="136,258 131,248 141,248" fill="currentColor"/>
  <text x="256" y="128" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="144" y="24" font-size="13" fill="currentColor" font-style="italic">f(−t)</text>
  <line x1="26" y1="133" x2="26" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="151" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="48" y1="133" x2="48" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="151" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="70" y1="133" x2="70" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="151" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="92" y1="133" x2="92" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="151" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="114" y1="133" x2="114" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="151" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="158" y1="133" x2="158" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="151" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="180" y1="133" x2="180" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="151" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="202" y1="133" x2="202" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="151" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="224" y1="133" x2="224" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="151" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="133" x2="246" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="151" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="133" y1="246" x2="139" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="250" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="133" y1="224" x2="139" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="228" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="133" y1="202" x2="139" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="206" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="133" y1="180" x2="139" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="184" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="133" y1="158" x2="139" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="162" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="133" y1="114" x2="139" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="118" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="133" y1="92" x2="139" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="96" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="133" y1="70" x2="139" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="74" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="133" y1="48" x2="139" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="52" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="133" y1="26" x2="139" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="87.3,33.9 87.5,34.6 87.8,35.4 88,36.2 88.3,37 88.5,37.7 88.8,38.5 89,39.3 89.3,40 89.5,40.8 89.8,41.5 90,42.3 90.3,43 90.5,43.7 90.8,44.5 91,45.2 91.3,45.9 91.5,46.6 91.8,47.3 92,48 92.3,48.7 92.5,49.4 92.8,50.1 93,50.7 93.3,51.4 93.5,52.1 93.8,52.7 94,53.4 94.3,54 94.5,54.7 94.8,55.3 95,55.9 95.3,56.6 95.5,57.2 95.8,57.8 96,58.4 96.3,59 96.5,59.6 96.8,60.2 97,60.8 97.3,61.4 97.5,62 97.8,62.6 98,63.2 98.3,63.7 98.5,64.3 98.8,64.9 99,65.4 99.3,66 99.5,66.5 99.8,67.1 100,67.6 100.3,68.1 100.5,68.7 100.8,69.2 101,69.7 101.3,70.2 101.5,70.8 101.8,71.3 102,71.8 102.3,72.3 102.5,72.8 102.8,73.3 103,73.8 103.3,74.3 103.5,74.7 103.8,75.2 104,75.7 104.3,76.2 104.5,76.6 104.8,77.1 105,77.6 105.3,78 105.5,78.5 105.8,78.9 106,79.4 106.3,79.8 106.5,80.3 106.8,80.7 107,81.1 107.3,81.6 107.5,82 107.8,82.4 108,82.8 108.3,83.3 108.5,83.7 108.8,84.1 109,84.5 109.3,84.9 109.5,85.3 109.8,85.7 110,86.1 110.3,86.5 110.5,86.9 110.8,87.3 111,87.6 111.3,88 111.5,88.4 111.8,88.8 112,89.1 112.3,89.5 112.5,89.9 112.8,90.2 113,90.6 113.3,90.9 113.5,91.3 113.8,91.7 114,92 114.3,92.3 114.5,92.7 114.8,93 115,93.4 115.3,93.7 115.5,94 115.8,94.4 116,94.7 116.3,95 116.5,95.3 116.8,95.7 117,96 117.3,96.3 117.5,96.6 117.8,96.9 118,97.2 118.3,97.5 118.5,97.8 118.8,98.1 119,98.4 119.3,98.7 119.5,99 119.8,99.3 120,99.6 120.3,99.9 120.5,100.1 120.8,100.4 121,100.7 121.2,101 121.5,101.3 121.8,101.5 122,101.8 122.3,102.1 122.5,102.3 122.8,102.6 123,102.9 123.3,103.1 123.5,103.4 123.8,103.6 124,103.9 124.3,104.1 124.5,104.4 124.8,104.6 125,104.9 125.3,105.1 125.5,105.4 125.8,105.6 126,105.9 126.3,106.1 126.5,106.3 126.7,106.6 127,106.8 127.3,107 127.5,107.2 127.8,107.5 128,107.7 128.3,107.9 128.5,108.1 128.8,108.4 129,108.6 129.3,108.8 129.5,109 129.8,109.2 130,109.4 130.3,109.6 130.5,109.8 130.8,110 131,110.2 131.3,110.4 131.5,110.6 131.8,110.8 132,111 132.3,111.2 132.5,111.4 132.8,111.6 133,111.8 133.3,112 133.5,112.2 133.8,112.4 134,112.6 134.3,112.8 134.5,112.9 134.8,113.1 135,113.3 135.3,113.5 135.5,113.7 135.8,113.8 136,114 136.3,114.2 136.5,114.3 136.8,114.5 137,114.7 137.3,114.8 137.5,115 137.8,115.2 138,115.3 138.3,115.5 138.5,115.7 138.8,115.8 139,116 139.3,116.1 139.5,116.3 139.8,116.5 140,116.6 140.3,116.8 140.5,116.9 140.8,117.1 141,117.2 141.3,117.4 141.5,117.5 141.8,117.6 142,117.8 142.3,117.9 142.5,118.1 142.8,118.2 143,118.4 143.3,118.5 143.5,118.6 143.8,118.8 144,118.9 144.3,119 144.5,119.2 144.8,119.3 145,119.4 145.3,119.6 145.5,119.7 145.8,119.8 146,119.9 146.3,120.1 146.5,120.2 146.8,120.3 147,120.4 147.3,120.6 147.5,120.7 147.8,120.8 148,120.9 148.3,121 148.5,121.2 148.8,121.3 149,121.4 149.3,121.5 149.5,121.6 149.8,121.7 150,121.8 150.3,122 150.5,122.1 150.8,122.2 151,122.3 151.3,122.4 151.5,122.5 151.8,122.6 152,122.7 152.3,122.8 152.5,122.9 152.8,123 153,123.1 153.3,123.2 153.5,123.3 153.8,123.4 154,123.5 154.3,123.6 154.5,123.7 154.8,123.8 155,123.9 155.3,124 155.5,124.1 155.8,124.2 156,124.3 156.3,124.4 156.5,124.5 156.8,124.6 157,124.6 157.3,124.7 157.5,124.8 157.8,124.9 158,125 158.3,125.1 158.5,125.2 158.8,125.3 159,125.3 159.3,125.4 159.5,125.5 159.8,125.6 160,125.7 160.3,125.8 160.5,125.8 160.8,125.9 161,126 161.3,126.1 161.5,126.1 161.8,126.2 162,126.3 162.3,126.4 162.5,126.5 162.8,126.5 163,126.6 163.3,126.7 163.5,126.8 163.8,126.8 164,126.9 164.3,127 164.5,127 164.8,127.1 165,127.2 165.3,127.2 165.5,127.3 165.8,127.4 166,127.5 166.3,127.5 166.5,127.6 166.8,127.7 167,127.7 167.3,127.8 167.5,127.8 167.8,127.9 168,128 168.3,128 168.5,128.1 168.8,128.2 169,128.2 169.3,128.3 169.5,128.3 169.8,128.4 170,128.5 170.3,128.5 170.5,128.6 170.8,128.6 171,128.7 171.3,128.8 171.5,128.8 171.8,128.9 172,128.9 172.3,129 172.5,129 172.8,129.1 173,129.1 173.3,129.2 173.5,129.3 173.8,129.3 174,129.4 174.3,129.4 174.5,129.5 174.8,129.5 175,129.6 175.3,129.6 175.5,129.7 175.8,129.7 176,129.8 176.3,129.8 176.5,129.9 176.8,129.9 177,130 177.3,130 177.5,130 177.8,130.1 178,130.1 178.3,130.2 178.5,130.2 178.8,130.3 179,130.3 179.3,130.4 179.5,130.4 179.8,130.5 180,130.5 180.3,130.5 180.5,130.6 180.8,130.6 181,130.7 181.3,130.7 181.5,130.8 181.8,130.8 182,130.8 182.3,130.9 182.5,130.9 182.8,131 183,131 183.3,131 183.5,131.1 183.8,131.1 184,131.2 184.3,131.2 184.5,131.2 184.8,131.3 185,131.3 185.3,131.3 185.5,131.4 185.8,131.4 186,131.4 186.3,131.5 186.5,131.5 186.8,131.6 187,131.6 187.3,131.6 187.5,131.7 187.8,131.7 188,131.7 188.3,131.8 188.5,131.8 188.8,131.8 189,131.9 189.3,131.9 189.5,131.9 189.8,132 190,132 190.3,132 190.5,132 190.8,132.1 191,132.1 191.3,132.1 191.5,132.2 191.8,132.2 192,132.2 192.3,132.3 192.5,132.3 192.8,132.3 193,132.3 193.3,132.4 193.5,132.4 193.8,132.4 194,132.5 194.3,132.5 194.5,132.5 194.8,132.5 195,132.6 195.3,132.6 195.5,132.6 195.8,132.7 196,132.7 196.3,132.7 196.5,132.7 196.8,132.8 197,132.8 197.3,132.8 197.5,132.8 197.8,132.9 198,132.9 198.3,132.9 198.5,132.9 198.8,133 199,133 199.3,133 199.5,133 199.8,133 200,133.1 200.3,133.1 200.5,133.1 200.8,133.1 201,133.2 201.3,133.2 201.5,133.2 201.8,133.2 202,133.3 202.3,133.3 202.5,133.3 202.8,133.3 203,133.3 203.3,133.4 203.5,133.4 203.8,133.4 204,133.4 204.3,133.4 204.5,133.5 204.8,133.5 205,133.5 205.3,133.5 205.5,133.5 205.8,133.6 206,133.6 206.3,133.6 206.5,133.6 206.8,133.6 207,133.7 207.3,133.7 207.5,133.7 207.8,133.7 208,133.7 208.3,133.7 208.5,133.8 208.8,133.8 209,133.8 209.3,133.8 209.5,133.8 209.8,133.8 210,133.9 210.3,133.9 210.5,133.9 210.8,133.9 211,133.9 211.3,133.9 211.5,134 211.8,134 212,134 212.3,134 212.5,134 212.8,134 213,134.1 213.3,134.1 213.5,134.1 213.8,134.1 214,134.1 214.3,134.1 214.5,134.1 214.8,134.2 215,134.2 215.3,134.2 215.5,134.2 215.8,134.2 216,134.2 216.3,134.2 216.5,134.3 216.8,134.3 217,134.3 217.3,134.3 217.5,134.3 217.8,134.3 218,134.3 218.3,134.4 218.5,134.4 218.8,134.4 219,134.4 219.3,134.4 219.5,134.4 219.8,134.4 220,134.4 220.3,134.5 220.5,134.5 220.8,134.5 221,134.5 221.3,134.5 221.5,134.5 221.8,134.5 222,134.5 222.3,134.5 222.5,134.6 222.8,134.6 223,134.6 223.3,134.6 223.5,134.6 223.8,134.6 224,134.6 224.3,134.6 224.5,134.6 224.8,134.7 225,134.7 225.3,134.7 225.5,134.7 225.8,134.7 226,134.7 226.3,134.7 226.5,134.7 226.8,134.7 227,134.7 227.3,134.8 227.5,134.8 227.8,134.8 228,134.8 228.3,134.8 228.5,134.8 228.8,134.8 229,134.8 229.3,134.8 229.5,134.8 229.8,134.9 230,134.9 230.3,134.9 230.5,134.9 230.8,134.9 231,134.9 231.3,134.9 231.5,134.9 231.8,134.9 232,134.9 232.3,134.9 232.5,134.9 232.8,135 233,135 233.3,135 233.5,135 233.8,135 234,135 234.3,135 234.5,135 234.8,135 235,135 235.3,135 235.5,135 235.8,135.1 236,135.1 236.3,135.1 236.5,135.1 236.8,135.1 237,135.1 237.3,135.1 237.5,135.1 237.8,135.1 238,135.1 238,135.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="85,26.3 92.7,34.4 83.1,37.3" fill="currentColor"/>
  <polygon points="246,135.3 235.9,140.1 236.1,130.1" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Stage two: negative 2 to the power negative t, the vertical reflection of stage one. It rises from the lower left, passes through (0, −1), and hugs the horizontal axis from below on the right.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":22,"tickLabels":true,"xLabel":"t","yLabel":"−f(−t)","curves":[{"kind":"exp","b":0.5,"a":-1}]}'>
<svg role="img" aria-label="Stage two: negative 2 to the power negative t, the vertical reflection of stage one. It rises from the lower left, passes through (0, −1), and hugs the horizontal axis from below on the right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 272" width="272" height="272" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="246" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="246" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="246" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="246" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="246" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="246" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="246" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="246" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="246" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="246" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="246" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="246" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="246" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="246" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="246" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="246" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="246" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="246" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="246" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="136" x2="248" y2="136" stroke="currentColor" stroke-width="1"/>
  <line x1="136" y1="24" x2="136" y2="248" stroke="currentColor" stroke-width="1"/>
  <polygon points="258,136 248,141 248,131" fill="currentColor"/>
  <polygon points="136,14 141,24 131,24" fill="currentColor"/>
  <polygon points="14,136 24,131 24,141" fill="currentColor"/>
  <polygon points="136,258 131,248 141,248" fill="currentColor"/>
  <text x="256" y="128" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="144" y="24" font-size="13" fill="currentColor" font-style="italic">−f(−t)</text>
  <line x1="26" y1="133" x2="26" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="151" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="48" y1="133" x2="48" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="151" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="70" y1="133" x2="70" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="151" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="92" y1="133" x2="92" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="151" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="114" y1="133" x2="114" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="151" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="158" y1="133" x2="158" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="151" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="180" y1="133" x2="180" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="151" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="202" y1="133" x2="202" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="151" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="224" y1="133" x2="224" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="151" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="133" x2="246" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="151" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="133" y1="246" x2="139" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="250" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="133" y1="224" x2="139" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="228" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="133" y1="202" x2="139" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="206" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="133" y1="180" x2="139" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="184" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="133" y1="158" x2="139" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="162" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="133" y1="114" x2="139" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="118" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="133" y1="92" x2="139" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="96" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="133" y1="70" x2="139" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="74" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="133" y1="48" x2="139" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="52" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="133" y1="26" x2="139" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="87.3,238.1 87.5,237.4 87.8,236.6 88,235.8 88.3,235 88.5,234.3 88.8,233.5 89,232.7 89.3,232 89.5,231.2 89.8,230.5 90,229.7 90.3,229 90.5,228.3 90.8,227.5 91,226.8 91.3,226.1 91.5,225.4 91.8,224.7 92,224 92.3,223.3 92.5,222.6 92.8,221.9 93,221.3 93.3,220.6 93.5,219.9 93.8,219.3 94,218.6 94.3,218 94.5,217.3 94.8,216.7 95,216.1 95.3,215.4 95.5,214.8 95.8,214.2 96,213.6 96.3,213 96.5,212.4 96.8,211.8 97,211.2 97.3,210.6 97.5,210 97.8,209.4 98,208.8 98.3,208.3 98.5,207.7 98.8,207.1 99,206.6 99.3,206 99.5,205.5 99.8,204.9 100,204.4 100.3,203.9 100.5,203.3 100.8,202.8 101,202.3 101.3,201.8 101.5,201.2 101.8,200.7 102,200.2 102.3,199.7 102.5,199.2 102.8,198.7 103,198.2 103.3,197.7 103.5,197.3 103.8,196.8 104,196.3 104.3,195.8 104.5,195.4 104.8,194.9 105,194.4 105.3,194 105.5,193.5 105.8,193.1 106,192.6 106.3,192.2 106.5,191.7 106.8,191.3 107,190.9 107.3,190.4 107.5,190 107.8,189.6 108,189.2 108.3,188.7 108.5,188.3 108.8,187.9 109,187.5 109.3,187.1 109.5,186.7 109.8,186.3 110,185.9 110.3,185.5 110.5,185.1 110.8,184.7 111,184.4 111.3,184 111.5,183.6 111.8,183.2 112,182.9 112.3,182.5 112.5,182.1 112.8,181.8 113,181.4 113.3,181.1 113.5,180.7 113.8,180.3 114,180 114.3,179.7 114.5,179.3 114.8,179 115,178.6 115.3,178.3 115.5,178 115.8,177.6 116,177.3 116.3,177 116.5,176.7 116.8,176.3 117,176 117.3,175.7 117.5,175.4 117.8,175.1 118,174.8 118.3,174.5 118.5,174.2 118.8,173.9 119,173.6 119.3,173.3 119.5,173 119.8,172.7 120,172.4 120.3,172.1 120.5,171.9 120.8,171.6 121,171.3 121.2,171 121.5,170.7 121.8,170.5 122,170.2 122.3,169.9 122.5,169.7 122.8,169.4 123,169.1 123.3,168.9 123.5,168.6 123.8,168.4 124,168.1 124.3,167.9 124.5,167.6 124.8,167.4 125,167.1 125.3,166.9 125.5,166.6 125.8,166.4 126,166.1 126.3,165.9 126.5,165.7 126.7,165.4 127,165.2 127.3,165 127.5,164.8 127.8,164.5 128,164.3 128.3,164.1 128.5,163.9 128.8,163.6 129,163.4 129.3,163.2 129.5,163 129.8,162.8 130,162.6 130.3,162.4 130.5,162.2 130.8,162 131,161.8 131.3,161.6 131.5,161.4 131.8,161.2 132,161 132.3,160.8 132.5,160.6 132.8,160.4 133,160.2 133.3,160 133.5,159.8 133.8,159.6 134,159.4 134.3,159.2 134.5,159.1 134.8,158.9 135,158.7 135.3,158.5 135.5,158.3 135.8,158.2 136,158 136.3,157.8 136.5,157.7 136.8,157.5 137,157.3 137.3,157.2 137.5,157 137.8,156.8 138,156.7 138.3,156.5 138.5,156.3 138.8,156.2 139,156 139.3,155.9 139.5,155.7 139.8,155.5 140,155.4 140.3,155.2 140.5,155.1 140.8,154.9 141,154.8 141.3,154.6 141.5,154.5 141.8,154.4 142,154.2 142.3,154.1 142.5,153.9 142.8,153.8 143,153.6 143.3,153.5 143.5,153.4 143.8,153.2 144,153.1 144.3,153 144.5,152.8 144.8,152.7 145,152.6 145.3,152.4 145.5,152.3 145.8,152.2 146,152.1 146.3,151.9 146.5,151.8 146.8,151.7 147,151.6 147.3,151.4 147.5,151.3 147.8,151.2 148,151.1 148.3,151 148.5,150.8 148.8,150.7 149,150.6 149.3,150.5 149.5,150.4 149.8,150.3 150,150.2 150.3,150 150.5,149.9 150.8,149.8 151,149.7 151.3,149.6 151.5,149.5 151.8,149.4 152,149.3 152.3,149.2 152.5,149.1 152.8,149 153,148.9 153.3,148.8 153.5,148.7 153.8,148.6 154,148.5 154.3,148.4 154.5,148.3 154.8,148.2 155,148.1 155.3,148 155.5,147.9 155.8,147.8 156,147.7 156.3,147.6 156.5,147.5 156.8,147.4 157,147.4 157.3,147.3 157.5,147.2 157.8,147.1 158,147 158.3,146.9 158.5,146.8 158.8,146.7 159,146.7 159.3,146.6 159.5,146.5 159.8,146.4 160,146.3 160.3,146.2 160.5,146.2 160.8,146.1 161,146 161.3,145.9 161.5,145.9 161.8,145.8 162,145.7 162.3,145.6 162.5,145.5 162.8,145.5 163,145.4 163.3,145.3 163.5,145.2 163.8,145.2 164,145.1 164.3,145 164.5,145 164.8,144.9 165,144.8 165.3,144.8 165.5,144.7 165.8,144.6 166,144.5 166.3,144.5 166.5,144.4 166.8,144.3 167,144.3 167.3,144.2 167.5,144.2 167.8,144.1 168,144 168.3,144 168.5,143.9 168.8,143.8 169,143.8 169.3,143.7 169.5,143.7 169.8,143.6 170,143.5 170.3,143.5 170.5,143.4 170.8,143.4 171,143.3 171.3,143.2 171.5,143.2 171.8,143.1 172,143.1 172.3,143 172.5,143 172.8,142.9 173,142.9 173.3,142.8 173.5,142.7 173.8,142.7 174,142.6 174.3,142.6 174.5,142.5 174.8,142.5 175,142.4 175.3,142.4 175.5,142.3 175.8,142.3 176,142.2 176.3,142.2 176.5,142.1 176.8,142.1 177,142 177.3,142 177.5,142 177.8,141.9 178,141.9 178.3,141.8 178.5,141.8 178.8,141.7 179,141.7 179.3,141.6 179.5,141.6 179.8,141.5 180,141.5 180.3,141.5 180.5,141.4 180.8,141.4 181,141.3 181.3,141.3 181.5,141.2 181.8,141.2 182,141.2 182.3,141.1 182.5,141.1 182.8,141 183,141 183.3,141 183.5,140.9 183.8,140.9 184,140.8 184.3,140.8 184.5,140.8 184.8,140.7 185,140.7 185.3,140.7 185.5,140.6 185.8,140.6 186,140.6 186.3,140.5 186.5,140.5 186.8,140.4 187,140.4 187.3,140.4 187.5,140.3 187.8,140.3 188,140.3 188.3,140.2 188.5,140.2 188.8,140.2 189,140.1 189.3,140.1 189.5,140.1 189.8,140 190,140 190.3,140 190.5,140 190.8,139.9 191,139.9 191.3,139.9 191.5,139.8 191.8,139.8 192,139.8 192.3,139.7 192.5,139.7 192.8,139.7 193,139.7 193.3,139.6 193.5,139.6 193.8,139.6 194,139.5 194.3,139.5 194.5,139.5 194.8,139.5 195,139.4 195.3,139.4 195.5,139.4 195.8,139.3 196,139.3 196.3,139.3 196.5,139.3 196.8,139.2 197,139.2 197.3,139.2 197.5,139.2 197.8,139.1 198,139.1 198.3,139.1 198.5,139.1 198.8,139 199,139 199.3,139 199.5,139 199.8,139 200,138.9 200.3,138.9 200.5,138.9 200.8,138.9 201,138.8 201.3,138.8 201.5,138.8 201.8,138.8 202,138.8 202.3,138.7 202.5,138.7 202.8,138.7 203,138.7 203.3,138.6 203.5,138.6 203.8,138.6 204,138.6 204.3,138.6 204.5,138.5 204.8,138.5 205,138.5 205.3,138.5 205.5,138.5 205.8,138.4 206,138.4 206.3,138.4 206.5,138.4 206.8,138.4 207,138.3 207.3,138.3 207.5,138.3 207.8,138.3 208,138.3 208.3,138.3 208.5,138.2 208.8,138.2 209,138.2 209.3,138.2 209.5,138.2 209.8,138.2 210,138.1 210.3,138.1 210.5,138.1 210.8,138.1 211,138.1 211.3,138.1 211.5,138 211.8,138 212,138 212.3,138 212.5,138 212.8,138 213,137.9 213.3,137.9 213.5,137.9 213.8,137.9 214,137.9 214.3,137.9 214.5,137.9 214.8,137.8 215,137.8 215.3,137.8 215.5,137.8 215.8,137.8 216,137.8 216.3,137.8 216.5,137.7 216.8,137.7 217,137.7 217.3,137.7 217.5,137.7 217.8,137.7 218,137.7 218.3,137.6 218.5,137.6 218.8,137.6 219,137.6 219.3,137.6 219.5,137.6 219.8,137.6 220,137.6 220.3,137.5 220.5,137.5 220.8,137.5 221,137.5 221.3,137.5 221.5,137.5 221.8,137.5 222,137.5 222.3,137.5 222.5,137.4 222.8,137.4 223,137.4 223.3,137.4 223.5,137.4 223.8,137.4 224,137.4 224.3,137.4 224.5,137.4 224.8,137.3 225,137.3 225.3,137.3 225.5,137.3 225.8,137.3 226,137.3 226.3,137.3 226.5,137.3 226.8,137.3 227,137.3 227.3,137.2 227.5,137.2 227.8,137.2 228,137.2 228.3,137.2 228.5,137.2 228.8,137.2 229,137.2 229.3,137.2 229.5,137.2 229.8,137.1 230,137.1 230.3,137.1 230.5,137.1 230.8,137.1 231,137.1 231.3,137.1 231.5,137.1 231.8,137.1 232,137.1 232.3,137.1 232.5,137.1 232.8,137 233,137 233.3,137 233.5,137 233.8,137 234,137 234.3,137 234.5,137 234.8,137 235,137 235.3,137 235.5,137 235.8,136.9 236,136.9 236.3,136.9 236.5,136.9 236.8,136.9 237,136.9 237.3,136.9 237.5,136.9 237.8,136.9 238,136.9 238,136.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="85,245.7 83.1,234.7 92.7,237.6" fill="currentColor"/>
  <polygon points="246,136.7 236.1,141.9 235.9,131.9" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Stage three: negative 2 to the power negative t, plus 1. The stage-two curve shifted up 1 unit, passing through the origin and approaching the line k = 1 from below as t increases.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":22,"tickLabels":true,"xLabel":"t","yLabel":"k(t)","curves":[{"kind":"exp","b":0.5,"a":-1,"k":1}]}'>
<svg role="img" aria-label="Stage three: negative 2 to the power negative t, plus 1. The stage-two curve shifted up 1 unit, passing through the origin and approaching the line k = 1 from below as t increases." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 272" width="272" height="272" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="246" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="246" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="246" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="246" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="246" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="246" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="246" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="246" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="246" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="246" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="246" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="246" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="246" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="246" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="246" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="246" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="246" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="246" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="246" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="136" x2="248" y2="136" stroke="currentColor" stroke-width="1"/>
  <line x1="136" y1="24" x2="136" y2="248" stroke="currentColor" stroke-width="1"/>
  <polygon points="258,136 248,141 248,131" fill="currentColor"/>
  <polygon points="136,14 141,24 131,24" fill="currentColor"/>
  <polygon points="14,136 24,131 24,141" fill="currentColor"/>
  <polygon points="136,258 131,248 141,248" fill="currentColor"/>
  <text x="256" y="128" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="144" y="24" font-size="13" fill="currentColor" font-style="italic">k(t)</text>
  <line x1="26" y1="133" x2="26" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="151" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="48" y1="133" x2="48" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="151" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="70" y1="133" x2="70" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="151" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="92" y1="133" x2="92" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="151" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="114" y1="133" x2="114" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="151" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="158" y1="133" x2="158" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="151" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="180" y1="133" x2="180" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="151" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="202" y1="133" x2="202" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="151" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="224" y1="133" x2="224" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="151" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="133" x2="246" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="151" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="133" y1="246" x2="139" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="250" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="133" y1="224" x2="139" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="228" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="133" y1="202" x2="139" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="206" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="133" y1="180" x2="139" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="184" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="133" y1="158" x2="139" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="162" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="133" y1="114" x2="139" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="118" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="133" y1="92" x2="139" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="96" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="133" y1="70" x2="139" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="74" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="133" y1="48" x2="139" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="52" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="133" y1="26" x2="139" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="81.2,237.7 81.3,237.5 81.5,236.5 81.8,235.5 82,234.6 82.3,233.6 82.5,232.7 82.8,231.8 83,230.9 83.3,229.9 83.5,229 83.8,228.1 84,227.2 84.3,226.3 84.5,225.5 84.8,224.6 85,223.7 85.3,222.9 85.5,222 85.8,221.2 86,220.3 86.3,219.5 86.5,218.7 86.8,217.8 87,217 87.3,216.2 87.5,215.4 87.8,214.6 88,213.8 88.3,213 88.5,212.3 88.8,211.5 89,210.7 89.3,210 89.5,209.2 89.8,208.5 90,207.7 90.3,207 90.5,206.3 90.8,205.5 91,204.8 91.3,204.1 91.5,203.4 91.8,202.7 92,202 92.3,201.3 92.5,200.6 92.8,199.9 93,199.3 93.3,198.6 93.5,197.9 93.8,197.3 94,196.6 94.3,196 94.5,195.3 94.8,194.7 95,194.1 95.3,193.4 95.5,192.8 95.8,192.2 96,191.6 96.3,191 96.5,190.4 96.8,189.8 97,189.2 97.3,188.6 97.5,188 97.8,187.4 98,186.8 98.3,186.3 98.5,185.7 98.8,185.1 99,184.6 99.3,184 99.5,183.5 99.8,182.9 100,182.4 100.3,181.9 100.5,181.3 100.8,180.8 101,180.3 101.3,179.8 101.5,179.2 101.8,178.7 102,178.2 102.3,177.7 102.5,177.2 102.8,176.7 103,176.2 103.3,175.7 103.5,175.3 103.8,174.8 104,174.3 104.3,173.8 104.5,173.4 104.8,172.9 105,172.4 105.3,172 105.5,171.5 105.8,171.1 106,170.6 106.3,170.2 106.5,169.7 106.8,169.3 107,168.9 107.3,168.4 107.5,168 107.8,167.6 108,167.2 108.3,166.7 108.5,166.3 108.8,165.9 109,165.5 109.3,165.1 109.5,164.7 109.8,164.3 110,163.9 110.3,163.5 110.5,163.1 110.8,162.7 111,162.4 111.3,162 111.5,161.6 111.8,161.2 112,160.9 112.3,160.5 112.5,160.1 112.8,159.8 113,159.4 113.3,159.1 113.5,158.7 113.8,158.3 114,158 114.3,157.7 114.5,157.3 114.8,157 115,156.6 115.3,156.3 115.5,156 115.8,155.6 116,155.3 116.3,155 116.5,154.7 116.8,154.3 117,154 117.3,153.7 117.5,153.4 117.8,153.1 118,152.8 118.3,152.5 118.5,152.2 118.8,151.9 119,151.6 119.3,151.3 119.5,151 119.8,150.7 120,150.4 120.3,150.1 120.5,149.9 120.8,149.6 121,149.3 121.2,149 121.5,148.7 121.8,148.5 122,148.2 122.3,147.9 122.5,147.7 122.8,147.4 123,147.1 123.3,146.9 123.5,146.6 123.8,146.4 124,146.1 124.3,145.9 124.5,145.6 124.8,145.4 125,145.1 125.3,144.9 125.5,144.6 125.8,144.4 126,144.1 126.3,143.9 126.5,143.7 126.7,143.4 127,143.2 127.3,143 127.5,142.8 127.8,142.5 128,142.3 128.3,142.1 128.5,141.9 128.8,141.6 129,141.4 129.3,141.2 129.5,141 129.8,140.8 130,140.6 130.3,140.4 130.5,140.2 130.8,140 131,139.8 131.3,139.6 131.5,139.4 131.8,139.2 132,139 132.3,138.8 132.5,138.6 132.8,138.4 133,138.2 133.3,138 133.5,137.8 133.8,137.6 134,137.4 134.3,137.2 134.5,137.1 134.8,136.9 135,136.7 135.3,136.5 135.5,136.3 135.8,136.2 136,136 136.3,135.8 136.5,135.7 136.8,135.5 137,135.3 137.3,135.2 137.5,135 137.8,134.8 138,134.7 138.3,134.5 138.5,134.3 138.8,134.2 139,134 139.3,133.9 139.5,133.7 139.8,133.5 140,133.4 140.3,133.2 140.5,133.1 140.8,132.9 141,132.8 141.3,132.6 141.5,132.5 141.8,132.4 142,132.2 142.3,132.1 142.5,131.9 142.8,131.8 143,131.6 143.3,131.5 143.5,131.4 143.8,131.2 144,131.1 144.3,131 144.5,130.8 144.8,130.7 145,130.6 145.3,130.4 145.5,130.3 145.8,130.2 146,130.1 146.3,129.9 146.5,129.8 146.8,129.7 147,129.6 147.3,129.4 147.5,129.3 147.8,129.2 148,129.1 148.3,129 148.5,128.8 148.8,128.7 149,128.6 149.3,128.5 149.5,128.4 149.8,128.3 150,128.2 150.3,128 150.5,127.9 150.8,127.8 151,127.7 151.3,127.6 151.5,127.5 151.8,127.4 152,127.3 152.3,127.2 152.5,127.1 152.8,127 153,126.9 153.3,126.8 153.5,126.7 153.8,126.6 154,126.5 154.3,126.4 154.5,126.3 154.8,126.2 155,126.1 155.3,126 155.5,125.9 155.8,125.8 156,125.7 156.3,125.6 156.5,125.5 156.8,125.4 157,125.4 157.3,125.3 157.5,125.2 157.8,125.1 158,125 158.3,124.9 158.5,124.8 158.8,124.7 159,124.7 159.3,124.6 159.5,124.5 159.8,124.4 160,124.3 160.3,124.2 160.5,124.2 160.8,124.1 161,124 161.3,123.9 161.5,123.9 161.8,123.8 162,123.7 162.3,123.6 162.5,123.5 162.8,123.5 163,123.4 163.3,123.3 163.5,123.2 163.8,123.2 164,123.1 164.3,123 164.5,123 164.8,122.9 165,122.8 165.3,122.8 165.5,122.7 165.8,122.6 166,122.5 166.3,122.5 166.5,122.4 166.8,122.3 167,122.3 167.3,122.2 167.5,122.2 167.8,122.1 168,122 168.3,122 168.5,121.9 168.8,121.8 169,121.8 169.3,121.7 169.5,121.7 169.8,121.6 170,121.5 170.3,121.5 170.5,121.4 170.8,121.4 171,121.3 171.3,121.2 171.5,121.2 171.8,121.1 172,121.1 172.3,121 172.5,121 172.8,120.9 173,120.9 173.3,120.8 173.5,120.7 173.8,120.7 174,120.6 174.3,120.6 174.5,120.5 174.8,120.5 175,120.4 175.3,120.4 175.5,120.3 175.8,120.3 176,120.2 176.3,120.2 176.5,120.1 176.8,120.1 177,120 177.3,120 177.5,120 177.8,119.9 178,119.9 178.3,119.8 178.5,119.8 178.8,119.7 179,119.7 179.3,119.6 179.5,119.6 179.8,119.5 180,119.5 180.3,119.5 180.5,119.4 180.8,119.4 181,119.3 181.3,119.3 181.5,119.2 181.8,119.2 182,119.2 182.3,119.1 182.5,119.1 182.8,119 183,119 183.3,119 183.5,118.9 183.8,118.9 184,118.8 184.3,118.8 184.5,118.8 184.8,118.7 185,118.7 185.3,118.7 185.5,118.6 185.8,118.6 186,118.6 186.3,118.5 186.5,118.5 186.8,118.4 187,118.4 187.3,118.4 187.5,118.3 187.8,118.3 188,118.3 188.3,118.2 188.5,118.2 188.8,118.2 189,118.1 189.3,118.1 189.5,118.1 189.8,118 190,118 190.3,118 190.5,118 190.8,117.9 191,117.9 191.3,117.9 191.5,117.8 191.8,117.8 192,117.8 192.3,117.7 192.5,117.7 192.8,117.7 193,117.7 193.3,117.6 193.5,117.6 193.8,117.6 194,117.5 194.3,117.5 194.5,117.5 194.8,117.5 195,117.4 195.3,117.4 195.5,117.4 195.8,117.3 196,117.3 196.3,117.3 196.5,117.3 196.8,117.2 197,117.2 197.3,117.2 197.5,117.2 197.8,117.1 198,117.1 198.3,117.1 198.5,117.1 198.8,117 199,117 199.3,117 199.5,117 199.8,117 200,116.9 200.3,116.9 200.5,116.9 200.8,116.9 201,116.8 201.3,116.8 201.5,116.8 201.8,116.8 202,116.8 202.3,116.7 202.5,116.7 202.8,116.7 203,116.7 203.3,116.6 203.5,116.6 203.8,116.6 204,116.6 204.3,116.6 204.5,116.5 204.8,116.5 205,116.5 205.3,116.5 205.5,116.5 205.8,116.4 206,116.4 206.3,116.4 206.5,116.4 206.8,116.4 207,116.3 207.3,116.3 207.5,116.3 207.8,116.3 208,116.3 208.3,116.3 208.5,116.2 208.8,116.2 209,116.2 209.3,116.2 209.5,116.2 209.8,116.2 210,116.1 210.3,116.1 210.5,116.1 210.8,116.1 211,116.1 211.3,116.1 211.5,116 211.8,116 212,116 212.3,116 212.5,116 212.8,116 213,115.9 213.3,115.9 213.5,115.9 213.8,115.9 214,115.9 214.3,115.9 214.5,115.9 214.8,115.8 215,115.8 215.3,115.8 215.5,115.8 215.8,115.8 216,115.8 216.3,115.8 216.5,115.7 216.8,115.7 217,115.7 217.3,115.7 217.5,115.7 217.8,115.7 218,115.7 218.3,115.6 218.5,115.6 218.8,115.6 219,115.6 219.3,115.6 219.5,115.6 219.8,115.6 220,115.6 220.3,115.5 220.5,115.5 220.8,115.5 221,115.5 221.3,115.5 221.5,115.5 221.8,115.5 222,115.5 222.3,115.5 222.5,115.4 222.8,115.4 223,115.4 223.3,115.4 223.5,115.4 223.8,115.4 224,115.4 224.3,115.4 224.5,115.4 224.8,115.3 225,115.3 225.3,115.3 225.5,115.3 225.8,115.3 226,115.3 226.3,115.3 226.5,115.3 226.8,115.3 227,115.3 227.3,115.2 227.5,115.2 227.8,115.2 228,115.2 228.3,115.2 228.5,115.2 228.8,115.2 229,115.2 229.3,115.2 229.5,115.2 229.8,115.1 230,115.1 230.3,115.1 230.5,115.1 230.8,115.1 231,115.1 231.3,115.1 231.5,115.1 231.8,115.1 232,115.1 232.3,115.1 232.5,115.1 232.8,115 233,115 233.3,115 233.5,115 233.8,115 234,115 234.3,115 234.5,115 234.8,115 235,115 235.3,115 235.5,115 235.8,114.9 236,114.9 236.3,114.9 236.5,114.9 236.8,114.9 237,114.9 237.3,114.9 237.5,114.9 237.8,114.9 238,114.9 238,114.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="79.3,245.5 76.8,234.6 86.5,237" fill="currentColor"/>
  <polygon points="246,114.7 236.1,119.9 235.9,109.9" fill="currentColor"/>
</svg>
</div>

As a model for learning, this function would be limited to a domain of
$t\ge 0$, with corresponding range $[0,1)$.

{{< multiplechoice
  question="Given the toolkit function $f(x)=x^2$, what is surprising about the graphs of $g(x)=-f(x)$ and $h(x)=f(-x)$?"
  answer="$h(x)=f(-x)$ looks exactly the same as $f(x)$"
  hint="Ask what happens to $(-x)^2$, and think about the parabola's symmetry."
>}}
$h(x)=f(-x)$ looks exactly the same as $f(x)$
$g(x)=-f(x)$ looks exactly the same as $f(x)$
both $g$ and $h$ look exactly the same as $f$
neither graph resembles $f$
{{< /multiplechoice >}}

## Determining even and odd functions

Some functions exhibit symmetry so that reflections result in the original
graph. For example, horizontally reflecting the toolkit functions $f(x)=x^2$
or $f(x)=\lvert x\rvert$ will result in the original graph. We say that these
types of graphs are symmetric about the $y$-axis. Functions whose graphs are
symmetric about the $y$-axis are called **even functions**.

If the graphs of $f(x)=x^3$ or $f(x)=\tfrac{1}{x}$ were reflected over *both*
axes, the result would be the original graph, as shown below: (a) the cubic
toolkit function, (b) its horizontal reflection, and (c) the horizontal and
vertical reflections together, which reproduce the original cubic function.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"(a) The cubic toolkit function f of x equals x cubed: an S-shaped curve through the origin, falling to the lower left and rising to the upper right.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"xUnit":30,"yUnit":22,"tickLabels":true,"cubics":[{"a":1}]}'>
<svg role="img" aria-label="(a) The cubic toolkit function f of x equals x cubed: an S-shaped curve through the origin, falling to the lower left and rising to the upper right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232 228" width="232" height="228" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="202" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="56" y1="202" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="202" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="202" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="202" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="202" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="206" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="206" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="206" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="206" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="206" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="206" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="206" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="114" x2="208" y2="114" stroke="currentColor" stroke-width="1"/>
  <line x1="116" y1="24" x2="116" y2="204" stroke="currentColor" stroke-width="1"/>
  <polygon points="218,114 208,119 208,109" fill="currentColor"/>
  <polygon points="116,14 121,24 111,24" fill="currentColor"/>
  <polygon points="14,114 24,109 24,119" fill="currentColor"/>
  <polygon points="116,214 111,204 121,204" fill="currentColor"/>
  <text x="216" y="106" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="124" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="111" x2="26" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="129" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="56" y1="111" x2="56" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="129" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="86" y1="111" x2="86" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="129" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="111" x2="146" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="129" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="176" y1="111" x2="176" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="129" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="111" x2="206" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="129" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="113" y1="202" x2="119" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="206" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="113" y1="180" x2="119" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="184" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="113" y1="158" x2="119" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="162" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="113" y1="136" x2="119" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="140" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="113" y1="92" x2="119" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="96" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="113" y1="70" x2="119" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="74" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="113" y1="48" x2="119" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="52" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="113" y1="26" x2="119" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="70,193.5 70,193.3 70.3,192 70.5,190.8 70.8,189.5 71,188.3 71.3,187 71.5,185.8 71.8,184.6 72,183.4 72.3,182.2 72.5,181.1 72.8,179.9 73,178.8 73.3,177.7 73.5,176.5 73.8,175.5 74,174.4 74.3,173.3 74.5,172.2 74.8,171.2 75,170.2 75.3,169.1 75.5,168.1 75.8,167.1 76,166.1 76.3,165.2 76.5,164.2 76.8,163.3 77,162.3 77.3,161.4 77.5,160.5 77.8,159.6 78,158.7 78.3,157.8 78.5,157 78.8,156.1 79,155.3 79.3,154.4 79.5,153.6 79.8,152.8 80,152 80.3,151.2 80.5,150.5 80.8,149.7 81,148.9 81.3,148.2 81.5,147.5 81.8,146.7 82,146 82.3,145.3 82.5,144.6 82.8,144 83,143.3 83.3,142.6 83.5,142 83.8,141.3 84,140.7 84.3,140.1 84.5,139.5 84.8,138.9 85,138.3 85.3,137.7 85.5,137.1 85.8,136.6 86,136 86.3,135.5 86.5,134.9 86.8,134.4 87,133.9 87.3,133.4 87.5,132.9 87.8,132.4 88,131.9 88.3,131.4 88.5,130.9 88.8,130.5 89,130 89.3,129.6 89.5,129.2 89.8,128.7 90,128.3 90.3,127.9 90.5,127.5 90.8,127.1 91,126.7 91.3,126.4 91.5,126 91.8,125.6 92,125.3 92.3,124.9 92.5,124.6 92.8,124.2 93,123.9 93.3,123.6 93.5,123.3 93.8,123 94,122.7 94.3,122.4 94.5,122.1 94.8,121.8 95,121.5 95.3,121.3 95.5,121 95.8,120.8 96,120.5 96.3,120.3 96.5,120 96.8,119.8 97,119.6 97.3,119.4 97.5,119.2 97.8,119 98,118.8 98.3,118.6 98.5,118.4 98.8,118.2 99,118 99.3,117.8 99.5,117.7 99.8,117.5 100,117.3 100.3,117.2 100.5,117 100.8,116.9 101,116.8 101.3,116.6 101.5,116.5 101.8,116.4 102,116.2 102.3,116.1 102.5,116 102.8,115.9 103,115.8 103.3,115.7 103.5,115.6 103.8,115.5 104,115.4 104.3,115.3 104.5,115.2 104.8,115.2 105,115.1 105.3,115 105.5,114.9 105.8,114.9 106,114.8 106.3,114.8 106.5,114.7 106.8,114.6 107,114.6 107.3,114.5 107.5,114.5 107.8,114.5 108,114.4 108.3,114.4 108.5,114.3 108.8,114.3 109,114.3 109.3,114.3 109.5,114.2 109.8,114.2 110,114.2 110.3,114.2 110.5,114.1 110.8,114.1 111,114.1 111.3,114.1 111.5,114.1 111.8,114.1 112,114.1 112.3,114 112.5,114 112.8,114 113,114 113.3,114 113.5,114 113.8,114 114,114 114.3,114 114.5,114 114.8,114 115,114 115.3,114 115.5,114 115.8,114 116,114 116.3,114 116.5,114 116.8,114 117,114 117.3,114 117.5,114 117.8,114 118,114 118.3,114 118.5,114 118.8,114 119,114 119.3,114 119.5,114 119.8,114 120,113.9 120.3,113.9 120.5,113.9 120.8,113.9 121,113.9 121.3,113.9 121.5,113.9 121.8,113.8 122,113.8 122.3,113.8 122.5,113.8 122.8,113.7 123,113.7 123.3,113.7 123.5,113.7 123.8,113.6 124,113.6 124.3,113.5 124.5,113.5 124.8,113.5 125,113.4 125.3,113.4 125.5,113.3 125.8,113.2 126,113.2 126.3,113.1 126.5,113.1 126.8,113 127,112.9 127.3,112.8 127.5,112.8 127.8,112.7 128,112.6 128.3,112.5 128.5,112.4 128.8,112.3 129,112.2 129.3,112.1 129.5,112 129.8,111.9 130,111.8 130.3,111.6 130.5,111.5 130.8,111.4 131,111.3 131.3,111.1 131.5,111 131.8,110.8 132,110.7 132.3,110.5 132.5,110.3 132.8,110.2 133,110 133.3,109.8 133.5,109.6 133.8,109.4 134,109.2 134.3,109 134.5,108.8 134.8,108.6 135,108.4 135.3,108.2 135.5,108 135.8,107.7 136,107.5 136.3,107.2 136.5,107 136.8,106.7 137,106.5 137.3,106.2 137.5,105.9 137.8,105.6 138,105.3 138.3,105 138.5,104.7 138.8,104.4 139,104.1 139.3,103.8 139.5,103.4 139.8,103.1 140,102.7 140.3,102.4 140.5,102 140.8,101.6 141,101.3 141.3,100.9 141.5,100.5 141.8,100.1 142,99.7 142.3,99.3 142.5,98.8 142.8,98.4 143,98 143.3,97.5 143.5,97.1 143.8,96.6 144,96.1 144.3,95.6 144.5,95.1 144.8,94.6 145,94.1 145.3,93.6 145.5,93.1 145.8,92.5 146,92 146.3,91.4 146.5,90.9 146.8,90.3 147,89.7 147.3,89.1 147.5,88.5 147.8,87.9 148,87.3 148.3,86.7 148.5,86 148.8,85.4 149,84.7 149.3,84 149.5,83.4 149.8,82.7 150,82 150.3,81.3 150.5,80.5 150.8,79.8 151,79.1 151.3,78.3 151.5,77.5 151.8,76.8 152,76 152.3,75.2 152.5,74.4 152.8,73.6 153,72.7 153.3,71.9 153.5,71 153.8,70.2 154,69.3 154.3,68.4 154.5,67.5 154.8,66.6 155,65.7 155.3,64.7 155.5,63.8 155.8,62.8 156,61.9 156.3,60.9 156.5,59.9 156.8,58.9 157,57.8 157.3,56.8 157.5,55.8 157.8,54.7 158,53.6 158.3,52.5 158.5,51.5 158.8,50.3 159,49.2 159.3,48.1 159.5,46.9 159.8,45.8 160,44.6 160.3,43.4 160.5,42.2 160.8,41 161,39.8 161.3,38.5 161.5,37.2 161.8,36 162,34.7 162,34.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="68.5,201.3 65.4,190.6 75.3,192.4" fill="currentColor"/>
  <polygon points="163.5,26.7 166.6,37.4 156.7,35.6" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"(b) The horizontal reflection of the cubic toolkit function, negative x cubed: an S-shaped curve through the origin, rising to the upper left and falling to the lower right.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"xUnit":30,"yUnit":22,"tickLabels":true,"cubics":[{"a":-1}]}'>
<svg role="img" aria-label="(b) The horizontal reflection of the cubic toolkit function, negative x cubed: an S-shaped curve through the origin, rising to the upper left and falling to the lower right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232 228" width="232" height="228" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="202" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="56" y1="202" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="202" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="202" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="202" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="202" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="206" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="206" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="206" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="206" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="206" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="206" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="206" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="114" x2="208" y2="114" stroke="currentColor" stroke-width="1"/>
  <line x1="116" y1="24" x2="116" y2="204" stroke="currentColor" stroke-width="1"/>
  <polygon points="218,114 208,119 208,109" fill="currentColor"/>
  <polygon points="116,14 121,24 111,24" fill="currentColor"/>
  <polygon points="14,114 24,109 24,119" fill="currentColor"/>
  <polygon points="116,214 111,204 121,204" fill="currentColor"/>
  <text x="216" y="106" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="124" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="111" x2="26" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="129" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="56" y1="111" x2="56" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="129" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="86" y1="111" x2="86" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="129" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="111" x2="146" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="129" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="176" y1="111" x2="176" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="129" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="111" x2="206" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="129" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="113" y1="202" x2="119" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="206" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="113" y1="180" x2="119" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="184" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="113" y1="158" x2="119" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="162" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="113" y1="136" x2="119" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="140" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="113" y1="92" x2="119" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="96" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="113" y1="70" x2="119" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="74" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="113" y1="48" x2="119" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="52" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="113" y1="26" x2="119" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="70,34.5 70,34.7 70.3,36 70.5,37.2 70.8,38.5 71,39.8 71.3,41 71.5,42.2 71.8,43.4 72,44.6 72.3,45.8 72.5,46.9 72.8,48.1 73,49.2 73.3,50.3 73.5,51.5 73.8,52.5 74,53.6 74.3,54.7 74.5,55.8 74.8,56.8 75,57.8 75.3,58.9 75.5,59.9 75.8,60.9 76,61.9 76.3,62.8 76.5,63.8 76.8,64.7 77,65.7 77.3,66.6 77.5,67.5 77.8,68.4 78,69.3 78.3,70.2 78.5,71 78.8,71.9 79,72.7 79.3,73.6 79.5,74.4 79.8,75.2 80,76 80.3,76.8 80.5,77.5 80.8,78.3 81,79.1 81.3,79.8 81.5,80.5 81.8,81.3 82,82 82.3,82.7 82.5,83.4 82.8,84 83,84.7 83.3,85.4 83.5,86 83.8,86.7 84,87.3 84.3,87.9 84.5,88.5 84.8,89.1 85,89.7 85.3,90.3 85.5,90.9 85.8,91.4 86,92 86.3,92.5 86.5,93.1 86.8,93.6 87,94.1 87.3,94.6 87.5,95.1 87.8,95.6 88,96.1 88.3,96.6 88.5,97.1 88.8,97.5 89,98 89.3,98.4 89.5,98.8 89.8,99.3 90,99.7 90.3,100.1 90.5,100.5 90.8,100.9 91,101.3 91.3,101.6 91.5,102 91.8,102.4 92,102.7 92.3,103.1 92.5,103.4 92.8,103.8 93,104.1 93.3,104.4 93.5,104.7 93.8,105 94,105.3 94.3,105.6 94.5,105.9 94.8,106.2 95,106.5 95.3,106.7 95.5,107 95.8,107.2 96,107.5 96.3,107.7 96.5,108 96.8,108.2 97,108.4 97.3,108.6 97.5,108.8 97.8,109 98,109.2 98.3,109.4 98.5,109.6 98.8,109.8 99,110 99.3,110.2 99.5,110.3 99.8,110.5 100,110.7 100.3,110.8 100.5,111 100.8,111.1 101,111.3 101.3,111.4 101.5,111.5 101.8,111.6 102,111.8 102.3,111.9 102.5,112 102.8,112.1 103,112.2 103.3,112.3 103.5,112.4 103.8,112.5 104,112.6 104.3,112.7 104.5,112.8 104.8,112.8 105,112.9 105.3,113 105.5,113.1 105.8,113.1 106,113.2 106.3,113.2 106.5,113.3 106.8,113.4 107,113.4 107.3,113.5 107.5,113.5 107.8,113.5 108,113.6 108.3,113.6 108.5,113.7 108.8,113.7 109,113.7 109.3,113.7 109.5,113.8 109.8,113.8 110,113.8 110.3,113.8 110.5,113.9 110.8,113.9 111,113.9 111.3,113.9 111.5,113.9 111.8,113.9 112,113.9 112.3,114 112.5,114 112.8,114 113,114 113.3,114 113.5,114 113.8,114 114,114 114.3,114 114.5,114 114.8,114 115,114 115.3,114 115.5,114 115.8,114 116,114 116.3,114 116.5,114 116.8,114 117,114 117.3,114 117.5,114 117.8,114 118,114 118.3,114 118.5,114 118.8,114 119,114 119.3,114 119.5,114 119.8,114 120,114.1 120.3,114.1 120.5,114.1 120.8,114.1 121,114.1 121.3,114.1 121.5,114.1 121.8,114.2 122,114.2 122.3,114.2 122.5,114.2 122.8,114.3 123,114.3 123.3,114.3 123.5,114.3 123.8,114.4 124,114.4 124.3,114.5 124.5,114.5 124.8,114.5 125,114.6 125.3,114.6 125.5,114.7 125.8,114.8 126,114.8 126.3,114.9 126.5,114.9 126.8,115 127,115.1 127.3,115.2 127.5,115.2 127.8,115.3 128,115.4 128.3,115.5 128.5,115.6 128.8,115.7 129,115.8 129.3,115.9 129.5,116 129.8,116.1 130,116.2 130.3,116.4 130.5,116.5 130.8,116.6 131,116.8 131.3,116.9 131.5,117 131.8,117.2 132,117.3 132.3,117.5 132.5,117.7 132.8,117.8 133,118 133.3,118.2 133.5,118.4 133.8,118.6 134,118.8 134.3,119 134.5,119.2 134.8,119.4 135,119.6 135.3,119.8 135.5,120 135.8,120.3 136,120.5 136.3,120.8 136.5,121 136.8,121.3 137,121.5 137.3,121.8 137.5,122.1 137.8,122.4 138,122.7 138.3,123 138.5,123.3 138.8,123.6 139,123.9 139.3,124.2 139.5,124.6 139.8,124.9 140,125.3 140.3,125.6 140.5,126 140.8,126.4 141,126.7 141.3,127.1 141.5,127.5 141.8,127.9 142,128.3 142.3,128.7 142.5,129.2 142.8,129.6 143,130 143.3,130.5 143.5,130.9 143.8,131.4 144,131.9 144.3,132.4 144.5,132.9 144.8,133.4 145,133.9 145.3,134.4 145.5,134.9 145.8,135.5 146,136 146.3,136.6 146.5,137.1 146.8,137.7 147,138.3 147.3,138.9 147.5,139.5 147.8,140.1 148,140.7 148.3,141.3 148.5,142 148.8,142.6 149,143.3 149.3,144 149.5,144.6 149.8,145.3 150,146 150.3,146.7 150.5,147.5 150.8,148.2 151,148.9 151.3,149.7 151.5,150.5 151.8,151.2 152,152 152.3,152.8 152.5,153.6 152.8,154.4 153,155.3 153.3,156.1 153.5,157 153.8,157.8 154,158.7 154.3,159.6 154.5,160.5 154.8,161.4 155,162.3 155.3,163.3 155.5,164.2 155.8,165.2 156,166.1 156.3,167.1 156.5,168.1 156.8,169.1 157,170.2 157.3,171.2 157.5,172.2 157.8,173.3 158,174.4 158.3,175.5 158.5,176.5 158.8,177.7 159,178.8 159.3,179.9 159.5,181.1 159.8,182.2 160,183.4 160.3,184.6 160.5,185.8 160.8,187 161,188.3 161.3,189.5 161.5,190.8 161.8,192 162,193.3 162,193.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="68.5,26.7 75.3,35.6 65.4,37.4" fill="currentColor"/>
  <polygon points="163.5,201.3 156.7,192.4 166.6,190.6" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"(c) Reflecting both horizontally and vertically reproduces the original cubic: an S-shaped curve through the origin, falling to the lower left and rising to the upper right.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"xUnit":30,"yUnit":22,"tickLabels":true,"cubics":[{"a":1}]}'>
<svg role="img" aria-label="(c) Reflecting both horizontally and vertically reproduces the original cubic: an S-shaped curve through the origin, falling to the lower left and rising to the upper right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232 228" width="232" height="228" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="202" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="56" y1="202" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="202" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="202" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="202" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="202" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="206" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="206" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="206" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="206" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="206" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="206" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="206" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="114" x2="208" y2="114" stroke="currentColor" stroke-width="1"/>
  <line x1="116" y1="24" x2="116" y2="204" stroke="currentColor" stroke-width="1"/>
  <polygon points="218,114 208,119 208,109" fill="currentColor"/>
  <polygon points="116,14 121,24 111,24" fill="currentColor"/>
  <polygon points="14,114 24,109 24,119" fill="currentColor"/>
  <polygon points="116,214 111,204 121,204" fill="currentColor"/>
  <text x="216" y="106" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="124" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="111" x2="26" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="129" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="56" y1="111" x2="56" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="129" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="86" y1="111" x2="86" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="129" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="111" x2="146" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="129" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="176" y1="111" x2="176" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="129" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="111" x2="206" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="129" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="113" y1="202" x2="119" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="206" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="113" y1="180" x2="119" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="184" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="113" y1="158" x2="119" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="162" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="113" y1="136" x2="119" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="140" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="113" y1="92" x2="119" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="96" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="113" y1="70" x2="119" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="74" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="113" y1="48" x2="119" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="52" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="113" y1="26" x2="119" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="70,193.5 70,193.3 70.3,192 70.5,190.8 70.8,189.5 71,188.3 71.3,187 71.5,185.8 71.8,184.6 72,183.4 72.3,182.2 72.5,181.1 72.8,179.9 73,178.8 73.3,177.7 73.5,176.5 73.8,175.5 74,174.4 74.3,173.3 74.5,172.2 74.8,171.2 75,170.2 75.3,169.1 75.5,168.1 75.8,167.1 76,166.1 76.3,165.2 76.5,164.2 76.8,163.3 77,162.3 77.3,161.4 77.5,160.5 77.8,159.6 78,158.7 78.3,157.8 78.5,157 78.8,156.1 79,155.3 79.3,154.4 79.5,153.6 79.8,152.8 80,152 80.3,151.2 80.5,150.5 80.8,149.7 81,148.9 81.3,148.2 81.5,147.5 81.8,146.7 82,146 82.3,145.3 82.5,144.6 82.8,144 83,143.3 83.3,142.6 83.5,142 83.8,141.3 84,140.7 84.3,140.1 84.5,139.5 84.8,138.9 85,138.3 85.3,137.7 85.5,137.1 85.8,136.6 86,136 86.3,135.5 86.5,134.9 86.8,134.4 87,133.9 87.3,133.4 87.5,132.9 87.8,132.4 88,131.9 88.3,131.4 88.5,130.9 88.8,130.5 89,130 89.3,129.6 89.5,129.2 89.8,128.7 90,128.3 90.3,127.9 90.5,127.5 90.8,127.1 91,126.7 91.3,126.4 91.5,126 91.8,125.6 92,125.3 92.3,124.9 92.5,124.6 92.8,124.2 93,123.9 93.3,123.6 93.5,123.3 93.8,123 94,122.7 94.3,122.4 94.5,122.1 94.8,121.8 95,121.5 95.3,121.3 95.5,121 95.8,120.8 96,120.5 96.3,120.3 96.5,120 96.8,119.8 97,119.6 97.3,119.4 97.5,119.2 97.8,119 98,118.8 98.3,118.6 98.5,118.4 98.8,118.2 99,118 99.3,117.8 99.5,117.7 99.8,117.5 100,117.3 100.3,117.2 100.5,117 100.8,116.9 101,116.8 101.3,116.6 101.5,116.5 101.8,116.4 102,116.2 102.3,116.1 102.5,116 102.8,115.9 103,115.8 103.3,115.7 103.5,115.6 103.8,115.5 104,115.4 104.3,115.3 104.5,115.2 104.8,115.2 105,115.1 105.3,115 105.5,114.9 105.8,114.9 106,114.8 106.3,114.8 106.5,114.7 106.8,114.6 107,114.6 107.3,114.5 107.5,114.5 107.8,114.5 108,114.4 108.3,114.4 108.5,114.3 108.8,114.3 109,114.3 109.3,114.3 109.5,114.2 109.8,114.2 110,114.2 110.3,114.2 110.5,114.1 110.8,114.1 111,114.1 111.3,114.1 111.5,114.1 111.8,114.1 112,114.1 112.3,114 112.5,114 112.8,114 113,114 113.3,114 113.5,114 113.8,114 114,114 114.3,114 114.5,114 114.8,114 115,114 115.3,114 115.5,114 115.8,114 116,114 116.3,114 116.5,114 116.8,114 117,114 117.3,114 117.5,114 117.8,114 118,114 118.3,114 118.5,114 118.8,114 119,114 119.3,114 119.5,114 119.8,114 120,113.9 120.3,113.9 120.5,113.9 120.8,113.9 121,113.9 121.3,113.9 121.5,113.9 121.8,113.8 122,113.8 122.3,113.8 122.5,113.8 122.8,113.7 123,113.7 123.3,113.7 123.5,113.7 123.8,113.6 124,113.6 124.3,113.5 124.5,113.5 124.8,113.5 125,113.4 125.3,113.4 125.5,113.3 125.8,113.2 126,113.2 126.3,113.1 126.5,113.1 126.8,113 127,112.9 127.3,112.8 127.5,112.8 127.8,112.7 128,112.6 128.3,112.5 128.5,112.4 128.8,112.3 129,112.2 129.3,112.1 129.5,112 129.8,111.9 130,111.8 130.3,111.6 130.5,111.5 130.8,111.4 131,111.3 131.3,111.1 131.5,111 131.8,110.8 132,110.7 132.3,110.5 132.5,110.3 132.8,110.2 133,110 133.3,109.8 133.5,109.6 133.8,109.4 134,109.2 134.3,109 134.5,108.8 134.8,108.6 135,108.4 135.3,108.2 135.5,108 135.8,107.7 136,107.5 136.3,107.2 136.5,107 136.8,106.7 137,106.5 137.3,106.2 137.5,105.9 137.8,105.6 138,105.3 138.3,105 138.5,104.7 138.8,104.4 139,104.1 139.3,103.8 139.5,103.4 139.8,103.1 140,102.7 140.3,102.4 140.5,102 140.8,101.6 141,101.3 141.3,100.9 141.5,100.5 141.8,100.1 142,99.7 142.3,99.3 142.5,98.8 142.8,98.4 143,98 143.3,97.5 143.5,97.1 143.8,96.6 144,96.1 144.3,95.6 144.5,95.1 144.8,94.6 145,94.1 145.3,93.6 145.5,93.1 145.8,92.5 146,92 146.3,91.4 146.5,90.9 146.8,90.3 147,89.7 147.3,89.1 147.5,88.5 147.8,87.9 148,87.3 148.3,86.7 148.5,86 148.8,85.4 149,84.7 149.3,84 149.5,83.4 149.8,82.7 150,82 150.3,81.3 150.5,80.5 150.8,79.8 151,79.1 151.3,78.3 151.5,77.5 151.8,76.8 152,76 152.3,75.2 152.5,74.4 152.8,73.6 153,72.7 153.3,71.9 153.5,71 153.8,70.2 154,69.3 154.3,68.4 154.5,67.5 154.8,66.6 155,65.7 155.3,64.7 155.5,63.8 155.8,62.8 156,61.9 156.3,60.9 156.5,59.9 156.8,58.9 157,57.8 157.3,56.8 157.5,55.8 157.8,54.7 158,53.6 158.3,52.5 158.5,51.5 158.8,50.3 159,49.2 159.3,48.1 159.5,46.9 159.8,45.8 160,44.6 160.3,43.4 160.5,42.2 160.8,41 161,39.8 161.3,38.5 161.5,37.2 161.8,36 162,34.7 162,34.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="68.5,201.3 65.4,190.6 75.3,192.4" fill="currentColor"/>
  <polygon points="163.5,26.7 166.6,37.4 156.7,35.6" fill="currentColor"/>
</svg>
</div>

We say that these graphs are symmetric about the origin. A function with a
graph that is symmetric about the origin is called an **odd function**.

Note: A function can be neither even nor odd if it does not exhibit either
symmetry. For example, $f(x)=2^x$ is neither even nor odd. Also, the only
function that is both even and odd is the constant function $f(x)=0$.

{{< callout type="info" >}}
  **Even and odd functions.**

  A function is called an **even function** if for every input $x$

  $$f(x)=f(-x)$$

  The graph of an even function is symmetric about the $y$-axis.

  A function is called an **odd function** if for every input $x$

  $$f(x)=-f(-x)$$

  The graph of an odd function is symmetric about the origin.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the formula for a function, determine if the function is
  even, odd, or neither.

  1. Determine whether the function satisfies $f(x)=f(-x)$. If it does, it is
     even.
  2. Determine whether the function satisfies $f(x)=-f(-x)$. If it does, it
     is odd.
  3. If the function does not satisfy either rule, it is neither even nor
     odd.
{{< /callout >}}

**Example.** Is the function $f(x)=x^3+2x$ even, odd, or neither?

**Solution.** Without looking at a graph, we can determine whether the
function is even or odd by finding formulas for the reflections and
determining if they return us to the original function. Let's begin with the
rule for even functions.

$$f(-x)=(-x)^3+2(-x)=-x^3-2x$$

This does not return us to the original function, so this function is not
even. We can now test the rule for odd functions.

$$-f(-x)=-(-x^3-2x)=x^3+2x$$

Because $-f(-x)=f(x)$, this is an odd function.

Consider the graph of $f$ below. Notice that the graph is symmetric about the
origin. For every point $(x,y)$ on the graph, the corresponding point
$(-x,-y)$ is also on the graph. For example, $(1,3)$ is on the graph of $f$,
and the corresponding point $(-1,-3)$ is also on the graph.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals x cubed plus 2x, symmetric about the origin, with the points (1, 3) and (−1, −3) marked.","xMin":-3,"xMax":3,"yMin":-8,"yMax":8,"xUnit":36,"yUnit":16,"xGridStep":1,"yGridStep":2,"tickLabels":true,"xTickStep":1,"yTickStep":2,"cubics":[{"a":1,"b":0,"c":2,"d":0}],"points":[{"at":[1,3],"label":"(1, 3)","labelSide":"e"},{"at":[-1,-3],"label":"(−1, −3)","labelSide":"w"}]}'>
<svg role="img" aria-label="The graph of f of x equals x cubed plus 2x, symmetric about the origin, with the points (1, 3) and (−1, −3) marked." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 308" width="268" height="308" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="282" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="282" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="282" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="282" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="282" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="282" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="282" x2="242" y2="282" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="250" x2="242" y2="250" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="242" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="242" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="242" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="242" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="58" x2="242" y2="58" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="154" x2="244" y2="154" stroke="currentColor" stroke-width="1"/>
  <line x1="134" y1="24" x2="134" y2="284" stroke="currentColor" stroke-width="1"/>
  <polygon points="254,154 244,159 244,149" fill="currentColor"/>
  <polygon points="134,14 139,24 129,24" fill="currentColor"/>
  <polygon points="14,154 24,149 24,159" fill="currentColor"/>
  <polygon points="134,294 129,284 139,284" fill="currentColor"/>
  <text x="252" y="146" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="142" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="151" x2="26" y2="157" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="169" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="62" y1="151" x2="62" y2="157" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="169" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="98" y1="151" x2="98" y2="157" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="169" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="170" y1="151" x2="170" y2="157" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="169" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="206" y1="151" x2="206" y2="157" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="169" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="242" y1="151" x2="242" y2="157" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="169" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="131" y1="282" x2="137" y2="282" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="286" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="131" y1="250" x2="137" y2="250" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="254" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="131" y1="218" x2="137" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="222" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="131" y1="186" x2="137" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="190" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="131" y1="122" x2="137" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="126" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="131" y1="90" x2="137" y2="90" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="94" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="131" y1="58" x2="137" y2="58" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="62" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="131" y1="26" x2="137" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <polyline points="75.7,273.6 75.8,273.6 76,272.5 76.3,271.4 76.5,270.3 76.8,269.2 77,268.2 77.3,267.1 77.5,266.1 77.8,265 78,264 78.3,263 78.5,262 78.8,260.9 79,259.9 79.3,258.9 79.5,258 79.8,257 80,256 80.3,255 80.5,254.1 80.8,253.1 81,252.2 81.3,251.2 81.5,250.3 81.8,249.4 82,248.4 82.3,247.5 82.5,246.6 82.8,245.7 83,244.8 83.3,243.9 83.5,243.1 83.8,242.2 84,241.3 84.3,240.4 84.5,239.6 84.8,238.7 85,237.9 85.3,237.1 85.5,236.2 85.8,235.4 86,234.6 86.3,233.8 86.5,233 86.8,232.2 87,231.4 87.3,230.6 87.5,229.8 87.8,229 88,228.3 88.3,227.5 88.5,226.7 88.8,226 89,225.3 89.3,224.5 89.5,223.8 89.8,223 90,222.3 90.3,221.6 90.5,220.9 90.8,220.2 91,219.5 91.3,218.8 91.5,218.1 91.8,217.4 92,216.7 92.3,216.1 92.5,215.4 92.8,214.7 93,214.1 93.3,213.4 93.5,212.8 93.8,212.1 94,211.5 94.3,210.9 94.5,210.2 94.8,209.6 95,209 95.3,208.4 95.5,207.8 95.8,207.2 96,206.6 96.3,206 96.5,205.4 96.8,204.8 97,204.3 97.3,203.7 97.5,203.1 97.8,202.6 98,202 98.3,201.4 98.5,200.9 98.8,200.4 99,199.8 99.3,199.3 99.5,198.7 99.8,198.2 100,197.7 100.3,197.2 100.5,196.7 100.8,196.2 101,195.7 101.3,195.2 101.5,194.7 101.8,194.2 102,193.7 102.3,193.2 102.5,192.7 102.8,192.2 103,191.8 103.3,191.3 103.5,190.8 103.8,190.4 104,189.9 104.3,189.5 104.5,189 104.8,188.6 105,188.1 105.3,187.7 105.5,187.3 105.8,186.8 106,186.4 106.3,186 106.5,185.6 106.8,185.2 107,184.8 107.3,184.3 107.5,183.9 107.8,183.5 108,183.1 108.3,182.7 108.5,182.4 108.8,182 109,181.6 109.3,181.2 109.5,180.8 109.8,180.4 110,180.1 110.3,179.7 110.5,179.3 110.8,179 111,178.6 111.3,178.3 111.5,177.9 111.8,177.6 112,177.2 112.3,176.9 112.5,176.5 112.8,176.2 113,175.8 113.3,175.5 113.5,175.2 113.8,174.8 114,174.5 114.3,174.2 114.5,173.9 114.8,173.6 115,173.2 115.3,172.9 115.5,172.6 115.8,172.3 116,172 116.3,171.7 116.5,171.4 116.8,171.1 117,170.8 117.3,170.5 117.5,170.2 117.8,169.9 118,169.6 118.3,169.3 118.5,169.1 118.8,168.8 119,168.5 119.3,168.2 119.5,167.9 119.8,167.7 120,167.4 120.3,167.1 120.5,166.8 120.8,166.6 121,166.3 121.3,166 121.5,165.8 121.8,165.5 122,165.3 122.3,165 122.5,164.7 122.8,164.5 123,164.2 123.3,164 123.5,163.7 123.8,163.5 124,163.2 124.3,163 124.5,162.7 124.8,162.5 125,162.3 125.3,162 125.5,161.8 125.8,161.5 126,161.3 126.3,161 126.5,160.8 126.8,160.6 127,160.3 127.3,160.1 127.5,159.9 127.8,159.6 128,159.4 128.3,159.2 128.5,158.9 128.8,158.7 129,158.5 129.3,158.3 129.5,158 129.8,157.8 130,157.6 130.3,157.4 130.5,157.1 130.8,156.9 131,156.7 131.3,156.5 131.5,156.2 131.8,156 132,155.8 132.3,155.6 132.5,155.3 132.8,155.1 133,154.9 133.3,154.7 133.5,154.4 133.8,154.2 134,154 134.3,153.8 134.5,153.6 134.8,153.3 135,153.1 135.3,152.9 135.5,152.7 135.8,152.4 136,152.2 136.3,152 136.5,151.8 136.8,151.5 137,151.3 137.3,151.1 137.5,150.9 137.8,150.6 138,150.4 138.3,150.2 138.5,150 138.8,149.7 139,149.5 139.3,149.3 139.5,149.1 139.8,148.8 140,148.6 140.3,148.4 140.5,148.1 140.8,147.9 141,147.7 141.3,147.4 141.5,147.2 141.8,147 142,146.7 142.3,146.5 142.5,146.2 142.8,146 143,145.8 143.3,145.5 143.5,145.3 143.8,145 144,144.8 144.3,144.5 144.5,144.3 144.8,144 145,143.8 145.3,143.5 145.5,143.3 145.8,143 146,142.7 146.3,142.5 146.5,142.2 146.8,142 147,141.7 147.3,141.4 147.5,141.2 147.8,140.9 148,140.6 148.3,140.3 148.5,140.1 148.8,139.8 149,139.5 149.3,139.2 149.5,138.9 149.8,138.7 150,138.4 150.3,138.1 150.5,137.8 150.8,137.5 151,137.2 151.3,136.9 151.5,136.6 151.8,136.3 152,136 152.3,135.7 152.5,135.4 152.8,135.1 153,134.8 153.3,134.4 153.5,134.1 153.8,133.8 154,133.5 154.3,133.2 154.5,132.8 154.8,132.5 155,132.2 155.3,131.8 155.5,131.5 155.8,131.1 156,130.8 156.3,130.4 156.5,130.1 156.8,129.7 157,129.4 157.3,129 157.5,128.7 157.8,128.3 158,127.9 158.3,127.6 158.5,127.2 158.8,126.8 159,126.4 159.3,126 159.5,125.6 159.8,125.3 160,124.9 160.3,124.5 160.5,124.1 160.8,123.7 161,123.3 161.3,122.8 161.5,122.4 161.8,122 162,121.6 162.3,121.2 162.5,120.7 162.8,120.3 163,119.9 163.3,119.4 163.5,119 163.8,118.5 164,118.1 164.3,117.6 164.5,117.2 164.8,116.7 165,116.2 165.3,115.8 165.5,115.3 165.8,114.8 166,114.3 166.3,113.8 166.5,113.3 166.8,112.8 167,112.3 167.3,111.8 167.5,111.3 167.8,110.8 168,110.3 168.3,109.8 168.5,109.3 168.8,108.7 169,108.2 169.3,107.6 169.5,107.1 169.8,106.6 170,106 170.3,105.4 170.5,104.9 170.8,104.3 171,103.7 171.3,103.2 171.5,102.6 171.8,102 172,101.4 172.3,100.8 172.5,100.2 172.8,99.6 173,99 173.3,98.4 173.5,97.8 173.8,97.1 174,96.5 174.3,95.9 174.5,95.2 174.8,94.6 175,93.9 175.3,93.3 175.5,92.6 175.8,91.9 176,91.3 176.3,90.6 176.5,89.9 176.8,89.2 177,88.5 177.3,87.8 177.5,87.1 177.8,86.4 178,85.7 178.3,85 178.5,84.2 178.8,83.5 179,82.8 179.3,82 179.5,81.3 179.8,80.5 180,79.7 180.3,79 180.5,78.2 180.8,77.4 181,76.6 181.3,75.8 181.5,75 181.8,74.2 182,73.4 182.3,72.6 182.5,71.8 182.8,70.9 183,70.1 183.3,69.3 183.5,68.4 183.8,67.6 184,66.7 184.3,65.8 184.5,64.9 184.8,64.1 185,63.2 185.3,62.3 185.5,61.4 185.8,60.5 186,59.6 186.3,58.6 186.5,57.7 186.8,56.8 187,55.8 187.3,54.9 187.5,53.9 187.8,53 188,52 188.3,51 188.5,50 188.8,49.1 189,48.1 189.3,47.1 189.5,46 189.8,45 190,44 190.3,43 190.5,41.9 190.8,40.9 191,39.8 191.3,38.8 191.5,37.7 191.8,36.6 192,35.5 192.3,34.4 192.3,34.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="74,281.4 71.3,270.6 81.1,272.7" fill="currentColor"/>
  <polygon points="194,26.6 196.7,37.4 186.9,35.3" fill="currentColor"/>
  <circle cx="170" cy="106" r="4" fill="currentColor"/>
  <circle cx="98" cy="202" r="4" fill="currentColor"/>
  <text x="184" y="110" font-size="13" fill="currentColor" text-anchor="start">(1, 3)</text>
  <text x="84" y="206" font-size="13" fill="currentColor" text-anchor="end">(−1, −3)</text>
</svg>
</div>

{{< multiplechoice
  question="Is the function $f(s)=s^4+3s^2+7$ even, odd, or neither?"
  answer="even"
  hint="Replace $s$ by $-s$: every exponent here is even, so what happens to each term?"
>}}
even
odd
neither
both even and odd
{{< /multiplechoice >}}

## Graphing functions using stretches and compressions

Adding a constant to the inputs or outputs of a function changed the position
of a graph with respect to the axes, but it did not affect the shape of a
graph. We now explore the effects of multiplying the inputs or outputs by some
quantity.

We can transform the inside (input values) of a function or we can transform
the outside (output values) of a function. Each change has a specific effect
that can be seen graphically.

### Vertical stretches and compressions

When we multiply a function by a positive constant, we get a function whose
graph is stretched or compressed vertically in relation to the graph of the
original function. If the constant is greater than 1, we get a **vertical
stretch**; if the constant is between 0 and 1, we get a **vertical
compression**. The graph below shows a function multiplied by constant factors
2 and 0.5 and the resulting vertical stretch and compression, both dashed.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A rising curve f of x with two companions drawn dashed: 2 times f of x, whose every height is doubled, and one half of f of x, whose every height is halved.","xMin":-1,"xMax":5,"yMin":-1,"yMax":6,"xUnit":40,"yUnit":34,"tickLabels":true,"curves":[{"kind":"sqrt","a":1.4,"arrows":"end"},{"kind":"sqrt","a":2.8,"dashed":true,"arrows":"end"},{"kind":"sqrt","a":0.7,"dashed":true,"arrows":"end"}],"texts":[{"at":[1.5,3.9],"text":"2f(x)","anchor":"end"},{"at":[4.2,3.3],"text":"f(x)","anchor":"start"},{"at":[3.3,0.5],"text":"0.5f(x)","anchor":"start"}]}'>
<svg role="img" aria-label="A rising curve f of x with two companions drawn dashed: 2 times f of x, whose every height is doubled, and one half of f of x, whose every height is halved." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 290" width="292" height="290" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="264" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="264" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="264" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="264" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="264" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="264" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="264" x2="266" y2="264" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="196" x2="266" y2="196" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="162" x2="266" y2="162" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="128" x2="266" y2="128" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="94" x2="266" y2="94" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="60" x2="266" y2="60" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="230" x2="268" y2="230" stroke="currentColor" stroke-width="1"/>
  <line x1="66" y1="24" x2="66" y2="266" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,230 268,235 268,225" fill="currentColor"/>
  <polygon points="66,14 71,24 61,24" fill="currentColor"/>
  <polygon points="14,230 24,225 24,235" fill="currentColor"/>
  <polygon points="66,276 61,266 71,266" fill="currentColor"/>
  <text x="276" y="222" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="74" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="227" x2="26" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="245" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="106" y1="227" x2="106" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="245" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="146" y1="227" x2="146" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="245" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="186" y1="227" x2="186" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="245" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="226" y1="227" x2="226" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="245" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="266" y1="227" x2="266" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="245" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="63" y1="264" x2="69" y2="264" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="268" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="63" y1="196" x2="69" y2="196" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="200" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="63" y1="162" x2="69" y2="162" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="166" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="63" y1="128" x2="69" y2="128" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="132" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="63" y1="94" x2="69" y2="94" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="98" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="63" y1="60" x2="69" y2="60" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="64" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="63" y1="26" x2="69" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="66,230 66,229.7 66,229.4 66,229.1 66,228.8 66,228.5 66.1,228.2 66.1,227.9 66.1,227.6 66.1,227.3 66.2,227 66.2,226.7 66.2,226.4 66.3,226.1 66.3,225.8 66.4,225.5 66.4,225.2 66.5,224.9 66.5,224.6 66.6,224.4 66.6,224.1 66.7,223.8 66.8,223.5 66.8,223.2 66.9,222.9 67,222.6 67.1,222.3 67.1,222 67.2,221.7 67.3,221.4 67.4,221.1 67.5,220.8 67.6,220.5 67.7,220.2 67.8,219.9 67.9,219.6 68,219.3 68.1,219 68.3,218.7 68.4,218.4 68.5,218.1 68.6,217.8 68.8,217.5 68.9,217.2 69,216.9 69.2,216.6 69.3,216.3 69.4,216 69.6,215.7 69.7,215.4 69.9,215.1 70.1,214.8 70.2,214.5 70.4,214.2 70.6,213.9 70.7,213.6 70.9,213.4 71.1,213.1 71.2,212.8 71.4,212.5 71.6,212.2 71.8,211.9 72,211.6 72.2,211.3 72.4,211 72.6,210.7 72.8,210.4 73,210.1 73.2,209.8 73.4,209.5 73.6,209.2 73.9,208.9 74.1,208.6 74.3,208.3 74.5,208 74.8,207.7 75,207.4 75.3,207.1 75.5,206.8 75.7,206.5 76,206.2 76.2,205.9 76.5,205.6 76.8,205.3 77,205 77.3,204.7 77.5,204.4 77.8,204.1 78.1,203.8 78.4,203.5 78.6,203.2 78.9,202.9 79.2,202.6 79.5,202.4 79.8,202.1 80.1,201.8 80.4,201.5 80.7,201.2 81,200.9 81.3,200.6 81.6,200.3 81.9,200 82.2,199.7 82.6,199.4 82.9,199.1 83.2,198.8 83.5,198.5 83.9,198.2 84.2,197.9 84.5,197.6 84.9,197.3 85.2,197 85.6,196.7 85.9,196.4 86.3,196.1 86.6,195.8 87,195.5 87.4,195.2 87.7,194.9 88.1,194.6 88.5,194.3 88.8,194 89.2,193.7 89.6,193.4 90,193.1 90.4,192.8 90.8,192.5 91.2,192.2 91.6,191.9 92,191.6 92.4,191.3 92.8,191.1 93.2,190.8 93.6,190.5 94,190.2 94.4,189.9 94.9,189.6 95.3,189.3 95.7,189 96.2,188.7 96.6,188.4 97,188.1 97.5,187.8 97.9,187.5 98.4,187.2 98.8,186.9 99.3,186.6 99.7,186.3 100.2,186 100.6,185.7 101.1,185.4 101.6,185.1 102.1,184.8 102.5,184.5 103,184.2 103.5,183.9 104,183.6 104.5,183.3 105,183 105.5,182.7 105.9,182.4 106.4,182.1 107,181.8 107.5,181.5 108,181.2 108.5,180.9 109,180.6 109.5,180.3 110,180.1 110.6,179.8 111.1,179.5 111.6,179.2 112.2,178.9 112.7,178.6 113.2,178.3 113.8,178 114.3,177.7 114.9,177.4 115.4,177.1 116,176.8 116.6,176.5 117.1,176.2 117.7,175.9 118.3,175.6 118.8,175.3 119.4,175 120,174.7 120.6,174.4 121.2,174.1 121.7,173.8 122.3,173.5 122.9,173.2 123.5,172.9 124.1,172.6 124.7,172.3 125.3,172 125.9,171.7 126.6,171.4 127.2,171.1 127.8,170.8 128.4,170.5 129,170.2 129.7,169.9 130.3,169.6 130.9,169.3 131.6,169.1 132.2,168.8 132.9,168.5 133.5,168.2 134.2,167.9 134.8,167.6 135.5,167.3 136.1,167 136.8,166.7 137.5,166.4 138.1,166.1 138.8,165.8 139.5,165.5 140.2,165.2 140.8,164.9 141.5,164.6 142.2,164.3 142.9,164 143.6,163.7 144.3,163.4 145,163.1 145.7,162.8 146.4,162.5 147.1,162.2 147.8,161.9 148.6,161.6 149.3,161.3 150,161 150.7,160.7 151.4,160.4 152.2,160.1 152.9,159.8 153.7,159.5 154.4,159.2 155.1,158.9 155.9,158.6 156.6,158.3 157.4,158.1 158.1,157.8 158.9,157.5 159.7,157.2 160.4,156.9 161.2,156.6 162,156.3 162.8,156 163.5,155.7 164.3,155.4 165.1,155.1 165.9,154.8 166.7,154.5 167.5,154.2 168.3,153.9 169.1,153.6 169.9,153.3 170.7,153 171.5,152.7 172.3,152.4 173.1,152.1 173.9,151.8 174.8,151.5 175.6,151.2 176.4,150.9 177.2,150.6 178.1,150.3 178.9,150 179.8,149.7 180.6,149.4 181.5,149.1 182.3,148.8 183.2,148.5 184,148.2 184.9,147.9 185.7,147.6 186.6,147.3 187.5,147.1 188.3,146.8 189.2,146.5 190.1,146.2 191,145.9 191.9,145.6 192.8,145.3 193.6,145 194.5,144.7 195.4,144.4 196.3,144.1 197.2,143.8 198.1,143.5 199.1,143.2 200,142.9 200.9,142.6 201.8,142.3 202.7,142 203.7,141.7 204.6,141.4 205.5,141.1 206.4,140.8 207.4,140.5 208.3,140.2 209.3,139.9 210.2,139.6 211.2,139.3 212.1,139 213.1,138.7 214,138.4 215,138.1 216,137.8 216.9,137.5 217.9,137.2 218.9,136.9 219.9,136.6 220.8,136.3 221.8,136.1 222.8,135.8 223.8,135.5 224.8,135.2 225.8,134.9 226.8,134.6 227.8,134.3 228.8,134 229.8,133.7 230.8,133.4 231.8,133.1 232.9,132.8 233.9,132.5 234.9,132.2 235.9,131.9 237,131.6 238,131.3 239,131 240.1,130.7 241.1,130.4 242.2,130.1 243.2,129.8 244.3,129.5 245.3,129.2 246.4,128.9 247.5,128.6 248.5,128.3 249.6,128 250.7,127.7 251.7,127.4 252.8,127.1 253.9,126.8 255,126.5 256.1,126.2 257.2,125.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="264.9,123.9 256.5,131.3 253.9,121.6" fill="currentColor"/>
  <polyline points="66,230 66,229.4 66,228.8 66,228.2 66,227.6 66,227 66.1,226.4 66.1,225.8 66.1,225.2 66.1,224.6 66.2,224.1 66.2,223.5 66.2,222.9 66.3,222.3 66.3,221.7 66.4,221.1 66.4,220.5 66.5,219.9 66.5,219.3 66.6,218.7 66.6,218.1 66.7,217.5 66.8,216.9 66.8,216.3 66.9,215.7 67,215.1 67.1,214.5 67.1,213.9 67.2,213.4 67.3,212.8 67.4,212.2 67.5,211.6 67.6,211 67.7,210.4 67.8,209.8 67.9,209.2 68,208.6 68.1,208 68.3,207.4 68.4,206.8 68.5,206.2 68.6,205.6 68.8,205 68.9,204.4 69,203.8 69.2,203.2 69.3,202.6 69.4,202.1 69.6,201.5 69.7,200.9 69.9,200.3 70.1,199.7 70.2,199.1 70.4,198.5 70.6,197.9 70.7,197.3 70.9,196.7 71.1,196.1 71.2,195.5 71.4,194.9 71.6,194.3 71.8,193.7 72,193.1 72.2,192.5 72.4,191.9 72.6,191.3 72.8,190.8 73,190.2 73.2,189.6 73.4,189 73.6,188.4 73.9,187.8 74.1,187.2 74.3,186.6 74.5,186 74.8,185.4 75,184.8 75.3,184.2 75.5,183.6 75.7,183 76,182.4 76.2,181.8 76.5,181.2 76.8,180.6 77,180.1 77.3,179.5 77.5,178.9 77.8,178.3 78.1,177.7 78.4,177.1 78.6,176.5 78.9,175.9 79.2,175.3 79.5,174.7 79.8,174.1 80.1,173.5 80.4,172.9 80.7,172.3 81,171.7 81.3,171.1 81.6,170.5 81.9,169.9 82.2,169.3 82.6,168.8 82.9,168.2 83.2,167.6 83.5,167 83.9,166.4 84.2,165.8 84.5,165.2 84.9,164.6 85.2,164 85.6,163.4 85.9,162.8 86.3,162.2 86.6,161.6 87,161 87.4,160.4 87.7,159.8 88.1,159.2 88.5,158.6 88.8,158.1 89.2,157.5 89.6,156.9 90,156.3 90.4,155.7 90.8,155.1 91.2,154.5 91.6,153.9 92,153.3 92.4,152.7 92.8,152.1 93.2,151.5 93.6,150.9 94,150.3 94.4,149.7 94.9,149.1 95.3,148.5 95.7,147.9 96.2,147.3 96.6,146.8 97,146.2 97.5,145.6 97.9,145 98.4,144.4 98.8,143.8 99.3,143.2 99.7,142.6 100.2,142 100.6,141.4 101.1,140.8 101.6,140.2 102.1,139.6 102.5,139 103,138.4 103.5,137.8 104,137.2 104.5,136.6 105,136.1 105.5,135.5 105.9,134.9 106.4,134.3 107,133.7 107.5,133.1 108,132.5 108.5,131.9 109,131.3 109.5,130.7 110,130.1 110.6,129.5 111.1,128.9 111.6,128.3 112.2,127.7 112.7,127.1 113.2,126.5 113.8,125.9 114.3,125.3 114.9,124.8 115.4,124.2 116,123.6 116.6,123 117.1,122.4 117.7,121.8 118.3,121.2 118.8,120.6 119.4,120 120,119.4 120.6,118.8 121.2,118.2 121.7,117.6 122.3,117 122.9,116.4 123.5,115.8 124.1,115.2 124.7,114.6 125.3,114 125.9,113.5 126.6,112.9 127.2,112.3 127.8,111.7 128.4,111.1 129,110.5 129.7,109.9 130.3,109.3 130.9,108.7 131.6,108.1 132.2,107.5 132.9,106.9 133.5,106.3 134.2,105.7 134.8,105.1 135.5,104.5 136.1,103.9 136.8,103.3 137.5,102.8 138.1,102.2 138.8,101.6 139.5,101 140.2,100.4 140.8,99.8 141.5,99.2 142.2,98.6 142.9,98 143.6,97.4 144.3,96.8 145,96.2 145.7,95.6 146.4,95 147.1,94.4 147.8,93.8 148.6,93.2 149.3,92.6 150,92 150.7,91.5 151.4,90.9 152.2,90.3 152.9,89.7 153.7,89.1 154.4,88.5 155.1,87.9 155.9,87.3 156.6,86.7 157.4,86.1 158.1,85.5 158.9,84.9 159.7,84.3 160.4,83.7 161.2,83.1 162,82.5 162.8,81.9 163.5,81.3 164.3,80.8 165.1,80.2 165.9,79.6 166.7,79 167.5,78.4 168.3,77.8 169.1,77.2 169.9,76.6 170.7,76 171.5,75.4 172.3,74.8 173.1,74.2 173.9,73.6 174.8,73 175.6,72.4 176.4,71.8 177.2,71.2 178.1,70.6 178.9,70 179.8,69.5 180.6,68.9 181.5,68.3 182.3,67.7 183.2,67.1 184,66.5 184.9,65.9 185.7,65.3 186.6,64.7 187.5,64.1 188.3,63.5 189.2,62.9 190.1,62.3 191,61.7 191.9,61.1 192.8,60.5 193.6,59.9 194.5,59.3 195.4,58.7 196.3,58.2 197.2,57.6 198.1,57 199.1,56.4 200,55.8 200.9,55.2 201.8,54.6 202.7,54 203.7,53.4 204.6,52.8 205.5,52.2 206.4,51.6 207.4,51 208.3,50.4 209.3,49.8 210.2,49.2 211.2,48.6 212.1,48 213.1,47.5 214,46.9 215,46.3 216,45.7 216.9,45.1 217.9,44.5 218.9,43.9 219.9,43.3 220.8,42.7 221.8,42.1 222.8,41.5 223.8,40.9 224.8,40.3 225.8,39.7 226.8,39.1 227.8,38.5 228.8,37.9 229.8,37.3 230.8,36.7 231.8,36.2 232.9,35.6 233.9,35 234.9,34.4 235.9,33.8 237,33.2 238,32.6 239,32 240.1,31.4 241.1,30.8 242.2,30.2 242.6,30" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="249.6,26 243.3,35.3 238.4,26.6" fill="currentColor"/>
  <polyline points="66,230 66,229.9 66,229.7 66,229.6 66,229.4 66,229.3 66.1,229.1 66.1,229 66.1,228.8 66.1,228.7 66.2,228.5 66.2,228.4 66.2,228.2 66.3,228.1 66.3,227.9 66.4,227.8 66.4,227.6 66.5,227.5 66.5,227.3 66.6,227.2 66.6,227 66.7,226.9 66.8,226.7 66.8,226.6 66.9,226.4 67,226.3 67.1,226.1 67.1,226 67.2,225.8 67.3,225.7 67.4,225.5 67.5,225.4 67.6,225.2 67.7,225.1 67.8,224.9 67.9,224.8 68,224.6 68.1,224.5 68.3,224.4 68.4,224.2 68.5,224.1 68.6,223.9 68.8,223.8 68.9,223.6 69,223.5 69.2,223.3 69.3,223.2 69.4,223 69.6,222.9 69.7,222.7 69.9,222.6 70.1,222.4 70.2,222.3 70.4,222.1 70.6,222 70.7,221.8 70.9,221.7 71.1,221.5 71.2,221.4 71.4,221.2 71.6,221.1 71.8,220.9 72,220.8 72.2,220.6 72.4,220.5 72.6,220.3 72.8,220.2 73,220 73.2,219.9 73.4,219.7 73.6,219.6 73.9,219.4 74.1,219.3 74.3,219.1 74.5,219 74.8,218.9 75,218.7 75.3,218.6 75.5,218.4 75.7,218.3 76,218.1 76.2,218 76.5,217.8 76.8,217.7 77,217.5 77.3,217.4 77.5,217.2 77.8,217.1 78.1,216.9 78.4,216.8 78.6,216.6 78.9,216.5 79.2,216.3 79.5,216.2 79.8,216 80.1,215.9 80.4,215.7 80.7,215.6 81,215.4 81.3,215.3 81.6,215.1 81.9,215 82.2,214.8 82.6,214.7 82.9,214.5 83.2,214.4 83.5,214.2 83.9,214.1 84.2,213.9 84.5,213.8 84.9,213.6 85.2,213.5 85.6,213.4 85.9,213.2 86.3,213.1 86.6,212.9 87,212.8 87.4,212.6 87.7,212.5 88.1,212.3 88.5,212.2 88.8,212 89.2,211.9 89.6,211.7 90,211.6 90.4,211.4 90.8,211.3 91.2,211.1 91.6,211 92,210.8 92.4,210.7 92.8,210.5 93.2,210.4 93.6,210.2 94,210.1 94.4,209.9 94.9,209.8 95.3,209.6 95.7,209.5 96.2,209.3 96.6,209.2 97,209 97.5,208.9 97.9,208.7 98.4,208.6 98.8,208.4 99.3,208.3 99.7,208.1 100.2,208 100.6,207.9 101.1,207.7 101.6,207.6 102.1,207.4 102.5,207.3 103,207.1 103.5,207 104,206.8 104.5,206.7 105,206.5 105.5,206.4 105.9,206.2 106.4,206.1 107,205.9 107.5,205.8 108,205.6 108.5,205.5 109,205.3 109.5,205.2 110,205 110.6,204.9 111.1,204.7 111.6,204.6 112.2,204.4 112.7,204.3 113.2,204.1 113.8,204 114.3,203.8 114.9,203.7 115.4,203.5 116,203.4 116.6,203.2 117.1,203.1 117.7,202.9 118.3,202.8 118.8,202.6 119.4,202.5 120,202.4 120.6,202.2 121.2,202.1 121.7,201.9 122.3,201.8 122.9,201.6 123.5,201.5 124.1,201.3 124.7,201.2 125.3,201 125.9,200.9 126.6,200.7 127.2,200.6 127.8,200.4 128.4,200.3 129,200.1 129.7,200 130.3,199.8 130.9,199.7 131.6,199.5 132.2,199.4 132.9,199.2 133.5,199.1 134.2,198.9 134.8,198.8 135.5,198.6 136.1,198.5 136.8,198.3 137.5,198.2 138.1,198 138.8,197.9 139.5,197.7 140.2,197.6 140.8,197.4 141.5,197.3 142.2,197.1 142.9,197 143.6,196.8 144.3,196.7 145,196.6 145.7,196.4 146.4,196.3 147.1,196.1 147.8,196 148.6,195.8 149.3,195.7 150,195.5 150.7,195.4 151.4,195.2 152.2,195.1 152.9,194.9 153.7,194.8 154.4,194.6 155.1,194.5 155.9,194.3 156.6,194.2 157.4,194 158.1,193.9 158.9,193.7 159.7,193.6 160.4,193.4 161.2,193.3 162,193.1 162.8,193 163.5,192.8 164.3,192.7 165.1,192.5 165.9,192.4 166.7,192.2 167.5,192.1 168.3,191.9 169.1,191.8 169.9,191.6 170.7,191.5 171.5,191.3 172.3,191.2 173.1,191.1 173.9,190.9 174.8,190.8 175.6,190.6 176.4,190.5 177.2,190.3 178.1,190.2 178.9,190 179.8,189.9 180.6,189.7 181.5,189.6 182.3,189.4 183.2,189.3 184,189.1 184.9,189 185.7,188.8 186.6,188.7 187.5,188.5 188.3,188.4 189.2,188.2 190.1,188.1 191,187.9 191.9,187.8 192.8,187.6 193.6,187.5 194.5,187.3 195.4,187.2 196.3,187 197.2,186.9 198.1,186.7 199.1,186.6 200,186.4 200.9,186.3 201.8,186.1 202.7,186 203.7,185.8 204.6,185.7 205.5,185.6 206.4,185.4 207.4,185.3 208.3,185.1 209.3,185 210.2,184.8 211.2,184.7 212.1,184.5 213.1,184.4 214,184.2 215,184.1 216,183.9 216.9,183.8 217.9,183.6 218.9,183.5 219.9,183.3 220.8,183.2 221.8,183 222.8,182.9 223.8,182.7 224.8,182.6 225.8,182.4 226.8,182.3 227.8,182.1 228.8,182 229.8,181.8 230.8,181.7 231.8,181.5 232.9,181.4 233.9,181.2 234.9,181.1 235.9,180.9 237,180.8 238,180.6 239,180.5 240.1,180.3 241.1,180.2 242.2,180.1 243.2,179.9 244.3,179.8 245.3,179.6 246.4,179.5 247.5,179.3 248.5,179.2 249.6,179 250.7,178.9 251.7,178.7 252.8,178.6 253.9,178.4 255,178.3 256.1,178.1 257,178" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="264.9,176.9 255.6,183.2 254.3,173.3" fill="currentColor"/>
  <text x="126" y="97.4" font-size="13" fill="currentColor" text-anchor="end">2f(x)</text>
  <text x="234" y="117.8" font-size="13" fill="currentColor" text-anchor="start">f(x)</text>
  <text x="198" y="213" font-size="13" fill="currentColor" text-anchor="start">0.5f(x)</text>
</svg>
</div>

{{< callout type="info" >}}
  **Vertical stretches and compressions.** Given a function $f(x)$, a new
  function $g(x)=af(x)$, where $a$ is a constant, is a **vertical stretch** or
  **vertical compression** of the function $f(x)$.

  - If $a>1$, then the graph will be stretched.
  - If $0<a<1$, then the graph will be compressed.
  - If $a<0$, then there will be a combination of a vertical stretch or
    compression with a vertical reflection.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a function, graph its vertical stretch.

  1. Identify the value of $a$.
  2. Multiply all range values by $a$.
  3. If $a>1$, the graph is stretched by a factor of $a$. If $0<a<1$, the
     graph is compressed by a factor of $a$. If $a<0$, the graph is either
     stretched or compressed and also reflected about the $x$-axis.
{{< /callout >}}

**Example.** A function $P(t)$ models the population of fruit flies. The graph
is shown below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of P of t, a fruit fly population. It begins at (0, 1), curves up to a peak at (3, 3), falls steadily to (6, 2), then drops steeply to (7, 0).","xMin":-1,"xMax":7,"yMin":-1,"yMax":7,"unit":26,"tickLabels":true,"xLabel":"t","yLabel":"P(t)","polylines":[{"through":[[0,1],[1,1.5],[2,2.15],[3,3],[6,2],[7,0]]}],"points":[{"at":[0,1]},{"at":[7,0]}]}'>
<svg role="img" aria-label="The graph of P of t, a fruit fly population. It begins at (0, 1), curves up to a peak at (3, 3), falls steadily to (6, 2), then drops steeply to (7, 0)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" width="260" height="260" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="234" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="234" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="234" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="234" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="234" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="234" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="234" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="234" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="234" x2="234" y2="234" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="234" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="234" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="234" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="234" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="234" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="234" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="208" x2="236" y2="208" stroke="currentColor" stroke-width="1"/>
  <line x1="52" y1="24" x2="52" y2="236" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,208 236,213 236,203" fill="currentColor"/>
  <polygon points="52,14 57,24 47,24" fill="currentColor"/>
  <polygon points="14,208 24,203 24,213" fill="currentColor"/>
  <polygon points="52,246 47,236 57,236" fill="currentColor"/>
  <text x="244" y="200" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="60" y="24" font-size="13" fill="currentColor" font-style="italic">P(t)</text>
  <line x1="26" y1="205" x2="26" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="223" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="78" y1="205" x2="78" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="223" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="104" y1="205" x2="104" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="223" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="130" y1="205" x2="130" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="223" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="156" y1="205" x2="156" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="223" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="182" y1="205" x2="182" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="223" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="208" y1="205" x2="208" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="223" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="234" y1="205" x2="234" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="223" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="49" y1="234" x2="55" y2="234" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="238" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="49" y1="182" x2="55" y2="182" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="186" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="49" y1="156" x2="55" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="160" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="49" y1="130" x2="55" y2="130" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="134" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="49" y1="104" x2="55" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="108" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="49" y1="78" x2="55" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="82" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="49" y1="52" x2="55" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="56" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="49" y1="26" x2="55" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="30" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <polyline points="52,182 78,169 104,152.1 130,130 208,156 234,208" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="52" cy="182" r="4" fill="currentColor"/>
  <circle cx="234" cy="208" r="4" fill="currentColor"/>
</svg>
</div>

A scientist is comparing this population to another population, $Q$, whose
growth follows the same pattern, but is twice as large. Sketch a graph of this
population.

**Solution.** Because the population is always twice as large, the new
population's output values are always twice the original function's output
values.

If we choose four reference points, $(0,1)$, $(3,3)$, $(6,2)$ and $(7,0)$, we
will multiply all of the outputs by 2. The following shows where the new
points for the new graph will be located.

$$
\begin{array}{lrcl}
& (0,1) &\to& (0,2) \\[4pt]
& (3,3) &\to& (3,6) \\[4pt]
& (6,2) &\to& (6,4) \\[4pt]
& (7,0) &\to& (7,0)
\end{array}
$$

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of Q of t equals 2 times P of t. It has the same shape as P but every height is doubled: it begins at (0, 2), peaks at (3, 6), falls to (6, 4), then drops to (7, 0).","xMin":-1,"xMax":7,"yMin":-1,"yMax":7,"unit":26,"tickLabels":true,"xLabel":"t","yLabel":"Q(t)","polylines":[{"through":[[0,2],[1,3],[2,4.3],[3,6],[6,4],[7,0]]}],"points":[{"at":[0,2]},{"at":[7,0]}]}'>
<svg role="img" aria-label="The graph of Q of t equals 2 times P of t. It has the same shape as P but every height is doubled: it begins at (0, 2), peaks at (3, 6), falls to (6, 4), then drops to (7, 0)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" width="260" height="260" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="234" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="234" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="234" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="234" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="234" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="234" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="234" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="234" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="234" x2="234" y2="234" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="234" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="234" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="234" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="234" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="234" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="234" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="208" x2="236" y2="208" stroke="currentColor" stroke-width="1"/>
  <line x1="52" y1="24" x2="52" y2="236" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,208 236,213 236,203" fill="currentColor"/>
  <polygon points="52,14 57,24 47,24" fill="currentColor"/>
  <polygon points="14,208 24,203 24,213" fill="currentColor"/>
  <polygon points="52,246 47,236 57,236" fill="currentColor"/>
  <text x="244" y="200" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="60" y="24" font-size="13" fill="currentColor" font-style="italic">Q(t)</text>
  <line x1="26" y1="205" x2="26" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="223" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="78" y1="205" x2="78" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="223" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="104" y1="205" x2="104" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="223" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="130" y1="205" x2="130" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="223" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="156" y1="205" x2="156" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="223" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="182" y1="205" x2="182" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="223" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="208" y1="205" x2="208" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="223" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="234" y1="205" x2="234" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="223" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="49" y1="234" x2="55" y2="234" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="238" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="49" y1="182" x2="55" y2="182" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="186" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="49" y1="156" x2="55" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="160" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="49" y1="130" x2="55" y2="130" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="134" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="49" y1="104" x2="55" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="108" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="49" y1="78" x2="55" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="82" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="49" y1="52" x2="55" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="56" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="49" y1="26" x2="55" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="30" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <polyline points="52,156 78,130 104,96.2 130,52 208,104 234,208" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="52" cy="156" r="4" fill="currentColor"/>
  <circle cx="234" cy="208" r="4" fill="currentColor"/>
</svg>
</div>

Symbolically, the relationship is written as

$$Q(t)=2P(t)$$

This means that for any input $t$, the value of the function $Q$ is twice the
value of the function $P$. Notice that the effect on the graph is a vertical
stretching of the graph, where every point doubles its distance from the
horizontal axis. The input values, $t$, stay the same while the output values
are twice as large as before.

{{< callout type="info" >}}
  **How to:** given a tabular function and assuming that the transformation is
  a vertical stretch or compression, create a table for a vertical
  compression.

  1. Determine the value of $a$.
  2. Multiply all of the output values by $a$.
{{< /callout >}}

**Example.** A function $f$ is given below. Create a table for the function
$g(x)=\tfrac{1}{2}f(x)$.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 1 | 3 | 7 | 11 |

**Solution.** The formula $g(x)=\tfrac{1}{2}f(x)$ tells us that the output
values of $g$ are half of the output values of $f$ with the same inputs. For
example, we know that $f(4)=3$. Then

$$g(4)=\tfrac{1}{2}f(4)=\tfrac{1}{2}(3)=\tfrac{3}{2}$$

We do the same for the other values to produce the table below.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $g(x)$ | $\tfrac{1}{2}$ | $\tfrac{3}{2}$ | $\tfrac{7}{2}$ | $\tfrac{11}{2}$ |

The result is that the function $g(x)$ has been compressed vertically by
$\tfrac{1}{2}$. Each output value is divided in half, so the graph is half the
original height.

Now suppose a function $f$ is given by the table below.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 12 | 16 | 20 | 0 |

{{< fillin
  question="With $f$ as in the table above and $g(x)=\tfrac{3}{4}f(x)$, find $g(2)$."
  answer="9"
  hint="Multiply the output at that same input by $\tfrac{3}{4}$."
>}}

{{< fillin
  question="With the same $f$ and $g$, find $g(6)$."
  answer="15"
  hint="A vertical compression leaves the input alone and scales the output."
>}}

**Example.** The graph below is a transformation of the toolkit function
$f(x)=x^3$. Relate this new function $g(x)$ to $f(x)$, and then find a formula
for $g(x)$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of g of x equals one quarter x cubed: an S-shaped curve through the origin that passes through (2, 2), flatter than the cubic toolkit function.","xMin":-4,"xMax":4,"yMin":-6,"yMax":6,"xUnit":26,"yUnit":22,"tickLabels":true,"cubics":[{"a":0.25}],"points":[{"at":[2,2],"label":"(2, 2)","labelSide":"se"}]}'>
<svg role="img" aria-label="The graph of g of x equals one quarter x cubed: an S-shaped curve through the origin that passes through (2, 2), flatter than the cubic toolkit function." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 316" width="260" height="316" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="290" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="290" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="290" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="290" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="290" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="290" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="290" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="290" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="234" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="268" x2="234" y2="268" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="234" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="234" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="234" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="234" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="234" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="234" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="234" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="234" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="234" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="158" x2="236" y2="158" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="24" x2="130" y2="292" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,158 236,163 236,153" fill="currentColor"/>
  <polygon points="130,14 135,24 125,24" fill="currentColor"/>
  <polygon points="14,158 24,153 24,163" fill="currentColor"/>
  <polygon points="130,302 125,292 135,292" fill="currentColor"/>
  <text x="244" y="150" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="155" x2="26" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="173" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="52" y1="155" x2="52" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="173" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="78" y1="155" x2="78" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="173" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="104" y1="155" x2="104" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="173" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="156" y1="155" x2="156" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="173" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="182" y1="155" x2="182" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="173" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="208" y1="155" x2="208" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="173" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="234" y1="155" x2="234" y2="161" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="173" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="127" y1="290" x2="133" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="294" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="127" y1="268" x2="133" y2="268" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="272" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="127" y1="246" x2="133" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="250" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="127" y1="224" x2="133" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="228" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="127" y1="202" x2="133" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="206" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="127" y1="180" x2="133" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="184" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="127" y1="136" x2="133" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="140" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="127" y1="114" x2="133" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="118" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="127" y1="92" x2="133" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="96" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="127" y1="70" x2="133" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="74" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="127" y1="48" x2="133" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="52" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="127" y1="26" x2="133" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="56.8,280.8 57,279.7 57.3,278.5 57.5,277.2 57.8,276 58,274.8 58.3,273.6 58.5,272.4 58.8,271.2 59,270 59.3,268.8 59.5,267.7 59.8,266.5 60,265.3 60.3,264.2 60.5,263.1 60.8,261.9 61,260.8 61.3,259.7 61.5,258.6 61.8,257.5 62,256.4 62.3,255.3 62.5,254.2 62.8,253.2 63,252.1 63.3,251.1 63.5,250 63.8,249 64,248 64.3,246.9 64.5,245.9 64.8,244.9 65,243.9 65.3,242.9 65.5,242 65.8,241 66,240 66.3,239.1 66.5,238.1 66.8,237.2 67,236.2 67.3,235.3 67.5,234.4 67.8,233.5 68,232.6 68.3,231.7 68.5,230.8 68.8,229.9 69,229 69.3,228.2 69.5,227.3 69.8,226.4 70,225.6 70.3,224.8 70.5,223.9 70.8,223.1 71,222.3 71.3,221.5 71.5,220.6 71.8,219.8 72,219.1 72.3,218.3 72.5,217.5 72.8,216.7 73,216 73.3,215.2 73.5,214.4 73.8,213.7 74,213 74.3,212.2 74.5,211.5 74.8,210.8 75,210.1 75.3,209.4 75.5,208.7 75.8,208 76,207.3 76.3,206.6 76.5,205.9 76.8,205.2 77,204.6 77.3,203.9 77.5,203.3 77.8,202.6 78,202 78.3,201.4 78.5,200.7 78.8,200.1 79,199.5 79.3,198.9 79.5,198.3 79.8,197.7 80,197.1 80.3,196.5 80.5,196 80.8,195.4 81,194.8 81.3,194.3 81.5,193.7 81.8,193.2 82,192.6 82.3,192.1 82.5,191.5 82.8,191 83,190.5 83.3,190 83.5,189.5 83.8,189 84,188.5 84.3,188 84.5,187.5 84.8,187 85,186.5 85.3,186 85.5,185.6 85.8,185.1 86,184.7 86.3,184.2 86.5,183.8 86.8,183.3 87,182.9 87.3,182.4 87.5,182 87.8,181.6 88,181.2 88.3,180.8 88.5,180.4 88.8,180 89,179.6 89.3,179.2 89.5,178.8 89.8,178.4 90,178 90.3,177.7 90.5,177.3 90.8,176.9 91,176.6 91.3,176.2 91.5,175.9 91.8,175.5 92,175.2 92.3,174.8 92.5,174.5 92.8,174.2 93,173.9 93.3,173.5 93.5,173.2 93.8,172.9 94,172.6 94.3,172.3 94.5,172 94.8,171.7 95,171.4 95.3,171.1 95.5,170.8 95.8,170.6 96,170.3 96.3,170 96.5,169.8 96.8,169.5 97,169.2 97.3,169 97.5,168.7 97.8,168.5 98,168.3 98.3,168 98.5,167.8 98.8,167.5 99,167.3 99.3,167.1 99.5,166.9 99.8,166.7 100,166.4 100.3,166.2 100.5,166 100.8,165.8 101,165.6 101.3,165.4 101.5,165.2 101.8,165.1 102,164.9 102.3,164.7 102.5,164.5 102.8,164.3 103,164.2 103.3,164 103.5,163.8 103.8,163.7 104,163.5 104.3,163.3 104.5,163.2 104.8,163 105,162.9 105.3,162.7 105.5,162.6 105.8,162.5 106,162.3 106.3,162.2 106.5,162.1 106.8,161.9 107,161.8 107.3,161.7 107.5,161.6 107.8,161.4 108,161.3 108.3,161.2 108.5,161.1 108.8,161 109,160.9 109.3,160.8 109.5,160.7 109.8,160.6 110,160.5 110.3,160.4 110.5,160.3 110.8,160.2 111,160.1 111.3,160.1 111.5,160 111.8,159.9 112,159.8 112.3,159.7 112.5,159.7 112.8,159.6 113,159.5 113.3,159.5 113.5,159.4 113.8,159.3 114,159.3 114.3,159.2 114.5,159.2 114.8,159.1 115,159.1 115.3,159 115.5,159 115.8,158.9 116,158.9 116.3,158.8 116.5,158.8 116.8,158.7 117,158.7 117.3,158.6 117.5,158.6 117.8,158.6 118,158.5 118.3,158.5 118.5,158.5 118.8,158.4 119,158.4 119.3,158.4 119.5,158.4 119.8,158.3 120,158.3 120.3,158.3 120.5,158.3 120.8,158.2 121,158.2 121.3,158.2 121.5,158.2 121.8,158.2 122,158.2 122.3,158.1 122.5,158.1 122.8,158.1 123,158.1 123.3,158.1 123.5,158.1 123.8,158.1 124,158.1 124.3,158.1 124.5,158.1 124.8,158 125,158 125.3,158 125.5,158 125.8,158 126,158 126.3,158 126.5,158 126.8,158 127,158 127.3,158 127.5,158 127.8,158 128,158 128.3,158 128.5,158 128.8,158 129,158 129.3,158 129.5,158 129.8,158 130,158 130.3,158 130.5,158 130.8,158 131,158 131.3,158 131.5,158 131.8,158 132,158 132.3,158 132.5,158 132.8,158 133,158 133.3,158 133.5,158 133.8,158 134,158 134.3,158 134.5,158 134.8,158 135,158 135.3,158 135.5,157.9 135.8,157.9 136,157.9 136.3,157.9 136.5,157.9 136.8,157.9 137,157.9 137.3,157.9 137.5,157.9 137.8,157.9 138,157.8 138.3,157.8 138.5,157.8 138.8,157.8 139,157.8 139.3,157.8 139.5,157.7 139.8,157.7 140,157.7 140.3,157.7 140.5,157.6 140.8,157.6 141,157.6 141.3,157.6 141.5,157.5 141.8,157.5 142,157.5 142.3,157.4 142.5,157.4 142.8,157.4 143,157.3 143.3,157.3 143.5,157.2 143.8,157.2 144,157.1 144.3,157.1 144.5,157 144.8,157 145,156.9 145.3,156.9 145.5,156.8 145.8,156.8 146,156.7 146.3,156.7 146.5,156.6 146.8,156.5 147,156.5 147.3,156.4 147.5,156.3 147.8,156.3 148,156.2 148.3,156.1 148.5,156 148.8,155.9 149,155.9 149.3,155.8 149.5,155.7 149.8,155.6 150,155.5 150.3,155.4 150.5,155.3 150.8,155.2 151,155.1 151.3,155 151.5,154.9 151.8,154.8 152,154.7 152.3,154.6 152.5,154.4 152.8,154.3 153,154.2 153.3,154.1 153.5,153.9 153.8,153.8 154,153.7 154.3,153.5 154.5,153.4 154.8,153.3 155,153.1 155.3,153 155.5,152.8 155.8,152.7 156,152.5 156.3,152.3 156.5,152.2 156.8,152 157,151.8 157.3,151.7 157.5,151.5 157.8,151.3 158,151.1 158.3,150.9 158.5,150.8 158.8,150.6 159,150.4 159.3,150.2 159.5,150 159.8,149.8 160,149.6 160.3,149.3 160.5,149.1 160.8,148.9 161,148.7 161.3,148.5 161.5,148.2 161.8,148 162,147.7 162.3,147.5 162.5,147.3 162.8,147 163,146.8 163.3,146.5 163.5,146.2 163.8,146 164,145.7 164.3,145.4 164.5,145.2 164.8,144.9 165,144.6 165.3,144.3 165.5,144 165.8,143.7 166,143.4 166.3,143.1 166.5,142.8 166.8,142.5 167,142.1 167.3,141.8 167.5,141.5 167.8,141.2 168,140.8 168.3,140.5 168.5,140.1 168.8,139.8 169,139.4 169.3,139.1 169.5,138.7 169.8,138.3 170,138 170.3,137.6 170.5,137.2 170.8,136.8 171,136.4 171.3,136 171.5,135.6 171.8,135.2 172,134.8 172.3,134.4 172.5,134 172.8,133.6 173,133.1 173.3,132.7 173.5,132.2 173.8,131.8 174,131.3 174.3,130.9 174.5,130.4 174.8,130 175,129.5 175.3,129 175.5,128.5 175.8,128 176,127.5 176.3,127 176.5,126.5 176.8,126 177,125.5 177.3,125 177.5,124.5 177.8,123.9 178,123.4 178.3,122.8 178.5,122.3 178.8,121.7 179,121.2 179.3,120.6 179.5,120 179.8,119.5 180,118.9 180.3,118.3 180.5,117.7 180.8,117.1 181,116.5 181.3,115.9 181.5,115.3 181.8,114.6 182,114 182.3,113.4 182.5,112.7 182.8,112.1 183,111.4 183.3,110.8 183.5,110.1 183.8,109.4 184,108.7 184.3,108 184.5,107.3 184.8,106.6 185,105.9 185.3,105.2 185.5,104.5 185.8,103.8 186,103 186.3,102.3 186.5,101.6 186.8,100.8 187,100 187.3,99.3 187.5,98.5 187.8,97.7 188,96.9 188.3,96.2 188.5,95.4 188.8,94.5 189,93.7 189.3,92.9 189.5,92.1 189.8,91.2 190,90.4 190.3,89.6 190.5,88.7 190.8,87.8 191,87 191.3,86.1 191.5,85.2 191.8,84.3 192,83.4 192.3,82.5 192.5,81.6 192.8,80.7 193,79.8 193.3,78.8 193.5,77.9 193.8,76.9 194,76 194.3,75 194.5,74 194.8,73.1 195,72.1 195.3,71.1 195.5,70.1 195.8,69.1 196,68 196.3,67 196.5,66 196.8,64.9 197,63.9 197.3,62.8 197.5,61.8 197.8,60.7 198,59.6 198.3,58.5 198.5,57.4 198.8,56.3 199,55.2 199.3,54.1 199.5,52.9 199.8,51.8 200,50.7 200.3,49.5 200.5,48.3 200.8,47.2 201,46 201.3,44.8 201.5,43.6 201.8,42.4 202,41.2 202.3,40 202.5,38.8 202.8,37.5 203,36.3 203.2,35.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="55.3,288.7 52.3,277.9 62.1,279.8" fill="currentColor"/>
  <polygon points="204.8,27.3 207.7,38.1 197.9,36.2" fill="currentColor"/>
  <circle cx="182" cy="114" r="4" fill="currentColor"/>
  <text x="193.2" y="134.2" font-size="13" fill="currentColor" text-anchor="start">(2, 2)</text>
</svg>
</div>

**Solution.** When trying to determine a vertical stretch or shift, it is
helpful to look for a point on the graph that is relatively clear. In this
graph, it appears that $g(2)=2$. With the basic cubic function at the same
input, $f(2)=2^3=8$. Based on that, it appears that the outputs of $g$ are
$\tfrac{1}{4}$ the outputs of the function $f$ because $g(2)=\tfrac{1}{4}f(2)$.
From this we can fairly safely conclude that $g(x)=\tfrac{1}{4}f(x)$.

We can write a formula for $g$ by using the definition of the function $f$.

$$g(x)=\tfrac{1}{4}f(x)=\tfrac{1}{4}x^3$$

{{< fillin
  question="Write the formula for the function that we get when we stretch the identity toolkit function by a factor of 3, and then shift it down by 2 units."
  answer="3x-2"
  answerDisplay="$g(x)=3x-2$"
  hint="Stretch first, then shift: multiply the output by 3, then subtract 2."
>}}

### Horizontal stretches and compressions

Now we consider changes to the inside of a function. When we multiply a
function's input by a positive constant, we get a function whose graph is
stretched or compressed horizontally in relation to the graph of the original
function. If the constant is between 0 and 1, we get a **horizontal stretch**;
if the constant is greater than 1, we get a **horizontal compression** of the
function.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Three parabolas with a common vertex at the origin. The solid one is y = x squared. Drawn dashed, y = (0.5x) squared is a horizontal stretch, opening more widely, and y = (2x) squared is a horizontal compression, opening more narrowly.","xMin":-5,"xMax":5,"yMin":-1,"yMax":8,"xUnit":26,"yUnit":26,"tickLabels":true,"quadratics":[{"a":1},{"a":0.25,"dashed":true},{"a":4,"dashed":true}],"texts":[{"at":[-4.4,5.6],"text":"y = (2x)²","anchor":"start"},{"at":[3.3,7.2],"text":"y = x²","anchor":"start"},{"at":[4.9,1.3],"text":"y = (0.5x)²","anchor":"end"}]}'>
<svg role="img" aria-label="Three parabolas with a common vertex at the origin. The solid one is y = x squared. Drawn dashed, y = (0.5x) squared is a horizontal stretch, opening more widely, and y = (2x) squared is a horizontal compression, opening more narrowly." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 286" width="312" height="286" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="260" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="260" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="260" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="260" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="260" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="260" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="260" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="260" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="260" y1="260" x2="260" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="260" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="260" x2="286" y2="260" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="286" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="286" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="286" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="286" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="286" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="286" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="286" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="234" x2="288" y2="234" stroke="currentColor" stroke-width="1"/>
  <line x1="156" y1="24" x2="156" y2="262" stroke="currentColor" stroke-width="1"/>
  <polygon points="298,234 288,239 288,229" fill="currentColor"/>
  <polygon points="156,14 161,24 151,24" fill="currentColor"/>
  <polygon points="14,234 24,229 24,239" fill="currentColor"/>
  <polygon points="156,272 151,262 161,262" fill="currentColor"/>
  <text x="296" y="226" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="164" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="231" x2="26" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="249" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="52" y1="231" x2="52" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="249" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="78" y1="231" x2="78" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="249" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="104" y1="231" x2="104" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="249" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="130" y1="231" x2="130" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="249" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="182" y1="231" x2="182" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="249" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="208" y1="231" x2="208" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="249" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="234" y1="231" x2="234" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="249" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="260" y1="231" x2="260" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="249" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="286" y1="231" x2="286" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="286" y="249" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="153" y1="260" x2="159" y2="260" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="264" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="153" y1="208" x2="159" y2="208" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="212" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="153" y1="182" x2="159" y2="182" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="186" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="153" y1="156" x2="159" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="160" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="153" y1="130" x2="159" y2="130" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="134" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="153" y1="104" x2="159" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="108" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="153" y1="78" x2="159" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="82" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="153" y1="52" x2="159" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="56" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <line x1="153" y1="26" x2="159" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <polyline points="83.9,34.1 84,34.6 84.3,36 84.5,37.4 84.8,38.7 85,40.1 85.3,41.5 85.5,42.8 85.8,44.2 86,45.5 86.3,46.9 86.5,48.2 86.8,49.6 87,50.9 87.3,52.2 87.5,53.5 87.8,54.8 88,56.2 88.3,57.5 88.5,58.8 88.8,60.1 89,61.3 89.3,62.6 89.5,63.9 89.8,65.2 90,66.5 90.3,67.7 90.5,69 90.8,70.2 91,71.5 91.3,72.7 91.5,74 91.8,75.2 92,76.5 92.3,77.7 92.5,78.9 92.8,80.1 93,81.3 93.3,82.6 93.5,83.8 93.8,85 94,86.2 94.3,87.3 94.5,88.5 94.8,89.7 95,90.9 95.3,92.1 95.5,93.2 95.8,94.4 96,95.5 96.3,96.7 96.5,97.8 96.8,99 97,100.1 97.3,101.2 97.5,102.4 97.8,103.5 98,104.6 98.3,105.7 98.5,106.8 98.8,107.9 99,109 99.3,110.1 99.5,111.2 99.8,112.3 100,113.4 100.3,114.5 100.5,115.5 100.8,116.6 101,117.7 101.3,118.7 101.5,119.8 101.8,120.8 102,121.8 102.3,122.9 102.5,123.9 102.8,124.9 103,126 103.3,127 103.5,128 103.8,129 104,130 104.3,131 104.5,132 104.8,133 105,134 105.3,134.9 105.5,135.9 105.8,136.9 106,137.8 106.3,138.8 106.5,139.8 106.8,140.7 107,141.7 107.3,142.6 107.5,143.5 107.8,144.5 108,145.4 108.3,146.3 108.5,147.2 108.8,148.1 109,149 109.3,149.9 109.5,150.8 109.8,151.7 110,152.6 110.3,153.5 110.5,154.4 110.8,155.2 111,156.1 111.3,157 111.5,157.8 111.8,158.7 112,159.5 112.3,160.4 112.5,161.2 112.8,162.1 113,162.9 113.3,163.7 113.5,164.5 113.8,165.3 114,166.2 114.3,167 114.5,167.8 114.8,168.6 115,169.3 115.3,170.1 115.5,170.9 115.8,171.7 116,172.5 116.3,173.2 116.5,174 116.8,174.7 117,175.5 117.3,176.2 117.5,177 117.8,177.7 118,178.5 118.3,179.2 118.5,179.9 118.8,180.6 119,181.3 119.3,182.1 119.5,182.8 119.8,183.5 120,184.2 120.3,184.8 120.5,185.5 120.8,186.2 121,186.9 121.3,187.6 121.5,188.2 121.8,188.9 122,189.5 122.3,190.2 122.5,190.8 122.8,191.5 123,192.1 123.3,192.7 123.5,193.4 123.8,194 124,194.6 124.3,195.2 124.5,195.8 124.8,196.4 125,197 125.3,197.6 125.5,198.2 125.8,198.8 126,199.4 126.3,200 126.5,200.5 126.8,201.1 127,201.7 127.3,202.2 127.5,202.8 127.8,203.3 128,203.8 128.3,204.4 128.5,204.9 128.8,205.4 129,206 129.3,206.5 129.5,207 129.8,207.5 130,208 130.3,208.5 130.5,209 130.8,209.5 131,210 131.3,210.4 131.5,210.9 131.8,211.4 132,211.8 132.3,212.3 132.5,212.8 132.8,213.2 133,213.7 133.3,214.1 133.5,214.5 133.8,215 134,215.4 134.3,215.8 134.5,216.2 134.8,216.6 135,217 135.3,217.4 135.5,217.8 135.8,218.2 136,218.6 136.3,219 136.5,219.4 136.8,219.7 137,220.1 137.3,220.5 137.5,220.8 137.8,221.2 138,221.5 138.3,221.9 138.5,222.2 138.8,222.6 139,222.9 139.3,223.2 139.5,223.5 139.8,223.8 140,224.2 140.3,224.5 140.5,224.8 140.8,225.1 141,225.3 141.3,225.6 141.5,225.9 141.8,226.2 142,226.5 142.3,226.7 142.5,227 142.8,227.2 143,227.5 143.3,227.7 143.5,228 143.8,228.2 144,228.5 144.3,228.7 144.5,228.9 144.8,229.1 145,229.3 145.3,229.6 145.5,229.8 145.8,230 146,230.2 146.3,230.3 146.5,230.5 146.8,230.7 147,230.9 147.3,231.1 147.5,231.2 147.8,231.4 148,231.5 148.3,231.7 148.5,231.8 148.8,232 149,232.1 149.3,232.2 149.5,232.4 149.8,232.5 150,232.6 150.3,232.7 150.5,232.8 150.8,232.9 151,233 151.3,233.1 151.5,233.2 151.8,233.3 152,233.4 152.3,233.5 152.5,233.5 152.8,233.6 153,233.7 153.3,233.7 153.5,233.8 153.8,233.8 154,233.8 154.3,233.9 154.5,233.9 154.8,233.9 155,234 155.3,234 155.5,234 155.8,234 156,234 156.3,234 156.5,234 156.8,234 157,234 157.3,233.9 157.5,233.9 157.8,233.9 158,233.8 158.3,233.8 158.5,233.8 158.8,233.7 159,233.7 159.3,233.6 159.5,233.5 159.8,233.5 160,233.4 160.3,233.3 160.5,233.2 160.8,233.1 161,233 161.3,232.9 161.5,232.8 161.8,232.7 162,232.6 162.3,232.5 162.5,232.4 162.8,232.2 163,232.1 163.3,232 163.5,231.8 163.8,231.7 164,231.5 164.3,231.4 164.5,231.2 164.8,231.1 165,230.9 165.3,230.7 165.5,230.5 165.8,230.3 166,230.2 166.3,230 166.5,229.8 166.8,229.6 167,229.3 167.3,229.1 167.5,228.9 167.8,228.7 168,228.5 168.3,228.2 168.5,228 168.8,227.7 169,227.5 169.3,227.2 169.5,227 169.8,226.7 170,226.5 170.3,226.2 170.5,225.9 170.8,225.6 171,225.3 171.3,225.1 171.5,224.8 171.8,224.5 172,224.2 172.3,223.8 172.5,223.5 172.8,223.2 173,222.9 173.3,222.6 173.5,222.2 173.8,221.9 174,221.5 174.3,221.2 174.5,220.8 174.8,220.5 175,220.1 175.3,219.7 175.5,219.4 175.8,219 176,218.6 176.3,218.2 176.5,217.8 176.8,217.4 177,217 177.3,216.6 177.5,216.2 177.8,215.8 178,215.4 178.3,215 178.5,214.5 178.8,214.1 179,213.7 179.3,213.2 179.5,212.8 179.8,212.3 180,211.8 180.3,211.4 180.5,210.9 180.8,210.4 181,210 181.3,209.5 181.5,209 181.8,208.5 182,208 182.3,207.5 182.5,207 182.8,206.5 183,206 183.3,205.4 183.5,204.9 183.8,204.4 184,203.8 184.3,203.3 184.5,202.8 184.8,202.2 185,201.7 185.3,201.1 185.5,200.5 185.8,200 186,199.4 186.3,198.8 186.5,198.2 186.8,197.6 187,197 187.3,196.4 187.5,195.8 187.8,195.2 188,194.6 188.3,194 188.5,193.4 188.8,192.7 189,192.1 189.3,191.5 189.5,190.8 189.8,190.2 190,189.5 190.3,188.9 190.5,188.2 190.8,187.6 191,186.9 191.3,186.2 191.5,185.5 191.8,184.8 192,184.2 192.3,183.5 192.5,182.8 192.8,182.1 193,181.3 193.3,180.6 193.5,179.9 193.8,179.2 194,178.5 194.3,177.7 194.5,177 194.8,176.2 195,175.5 195.3,174.7 195.5,174 195.8,173.2 196,172.5 196.3,171.7 196.5,170.9 196.8,170.1 197,169.3 197.3,168.6 197.5,167.8 197.8,167 198,166.2 198.3,165.3 198.5,164.5 198.8,163.7 199,162.9 199.3,162.1 199.5,161.2 199.8,160.4 200,159.5 200.3,158.7 200.5,157.8 200.8,157 201,156.1 201.3,155.2 201.5,154.4 201.8,153.5 202,152.6 202.3,151.7 202.5,150.8 202.8,149.9 203,149 203.3,148.1 203.5,147.2 203.8,146.3 204,145.4 204.3,144.5 204.5,143.5 204.8,142.6 205,141.7 205.3,140.7 205.5,139.8 205.8,138.8 206,137.8 206.3,136.9 206.5,135.9 206.8,134.9 207,134 207.3,133 207.5,132 207.8,131 208,130 208.3,129 208.5,128 208.8,127 209,126 209.3,124.9 209.5,123.9 209.8,122.9 210,121.8 210.3,120.8 210.5,119.8 210.8,118.7 211,117.7 211.3,116.6 211.5,115.5 211.8,114.5 212,113.4 212.3,112.3 212.5,111.2 212.8,110.1 213,109 213.3,107.9 213.5,106.8 213.8,105.7 214,104.6 214.3,103.5 214.5,102.4 214.8,101.2 215,100.1 215.3,99 215.5,97.8 215.8,96.7 216,95.5 216.3,94.4 216.5,93.2 216.8,92.1 217,90.9 217.3,89.7 217.5,88.5 217.8,87.3 218,86.2 218.3,85 218.5,83.8 218.8,82.6 219,81.3 219.3,80.1 219.5,78.9 219.8,77.7 220,76.5 220.3,75.2 220.5,74 220.8,72.7 221,71.5 221.3,70.2 221.5,69 221.8,67.7 222,66.5 222.3,65.2 222.5,63.9 222.8,62.6 223,61.3 223.3,60.1 223.5,58.8 223.8,57.5 224,56.2 224.3,54.8 224.5,53.5 224.8,52.2 225,50.9 225.3,49.6 225.5,48.2 225.8,46.9 226,45.5 226.3,44.2 226.5,42.8 226.8,41.5 227,40.1 227.3,38.7 227.5,37.4 227.8,36 228,34.6 228.1,34.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="82.5,26.2 89.2,35.2 79.3,36.9" fill="currentColor"/>
  <polygon points="229.5,26.2 232.7,36.9 222.8,35.2" fill="currentColor"/>
  <polyline points="29,78.9 29.3,79.5 29.5,80.1 29.8,80.7 30,81.3 30.3,82 30.5,82.6 30.8,83.2 31,83.8 31.3,84.4 31.5,85 31.7,85.6 32,86.2 32.2,86.7 32.5,87.3 32.8,87.9 33,88.5 33.3,89.1 33.5,89.7 33.8,90.3 34,90.9 34.3,91.5 34.5,92.1 34.8,92.6 35,93.2 35.3,93.8 35.5,94.4 35.8,95 36,95.5 36.3,96.1 36.5,96.7 36.8,97.3 37,97.8 37.3,98.4 37.5,99 37.8,99.5 38,100.1 38.2,100.7 38.5,101.2 38.7,101.8 39,102.4 39.3,102.9 39.5,103.5 39.8,104.1 40,104.6 40.3,105.2 40.5,105.7 40.8,106.3 41,106.8 41.3,107.4 41.5,107.9 41.8,108.5 42,109 42.3,109.6 42.5,110.1 42.8,110.7 43,111.2 43.3,111.8 43.5,112.3 43.8,112.8 44,113.4 44.3,113.9 44.5,114.5 44.7,115 45,115.5 45.2,116.1 45.5,116.6 45.8,117.1 46,117.7 46.3,118.2 46.5,118.7 46.8,119.2 47,119.8 47.3,120.3 47.5,120.8 47.8,121.3 48,121.8 48.3,122.4 48.5,122.9 48.8,123.4 49,123.9 49.3,124.4 49.5,124.9 49.8,125.5 50,126 50.3,126.5 50.5,127 50.8,127.5 51,128 51.2,128.5 51.5,129 51.7,129.5 52,130 52.3,130.5 52.5,131 52.8,131.5 53,132 53.3,132.5 53.5,133 53.8,133.5 54,134 54.3,134.5 54.5,134.9 54.8,135.4 55,135.9 55.3,136.4 55.5,136.9 55.8,137.4 56,137.8 56.3,138.3 56.5,138.8 56.8,139.3 57,139.8 57.3,140.2 57.5,140.7 57.8,141.2 58,141.7 58.3,142.1 58.5,142.6 58.8,143.1 59,143.5 59.3,144 59.5,144.5 59.8,144.9 60,145.4 60.3,145.8 60.5,146.3 60.8,146.8 61,147.2 61.3,147.7 61.5,148.1 61.8,148.6 62,149 62.3,149.5 62.5,149.9 62.8,150.4 63,150.8 63.3,151.3 63.5,151.7 63.8,152.2 64,152.6 64.3,153.1 64.5,153.5 64.8,153.9 65,154.4 65.3,154.8 65.5,155.2 65.8,155.7 66,156.1 66.3,156.5 66.5,157 66.8,157.4 67,157.8 67.3,158.3 67.5,158.7 67.8,159.1 68,159.5 68.3,160 68.5,160.4 68.8,160.8 69,161.2 69.3,161.6 69.5,162.1 69.8,162.5 70,162.9 70.3,163.3 70.5,163.7 70.8,164.1 71,164.5 71.3,164.9 71.5,165.3 71.8,165.7 72,166.2 72.3,166.6 72.5,167 72.8,167.4 73,167.8 73.3,168.2 73.5,168.6 73.8,169 74,169.3 74.3,169.7 74.5,170.1 74.8,170.5 75,170.9 75.3,171.3 75.5,171.7 75.8,172.1 76,172.5 76.3,172.8 76.5,173.2 76.8,173.6 77,174 77.3,174.4 77.5,174.7 77.8,175.1 78,175.5 78.3,175.9 78.5,176.2 78.8,176.6 79,177 79.3,177.4 79.5,177.7 79.8,178.1 80,178.5 80.3,178.8 80.5,179.2 80.8,179.6 81,179.9 81.3,180.3 81.5,180.6 81.8,181 82,181.3 82.3,181.7 82.5,182.1 82.8,182.4 83,182.8 83.3,183.1 83.5,183.5 83.8,183.8 84,184.2 84.3,184.5 84.5,184.8 84.8,185.2 85,185.5 85.3,185.9 85.5,186.2 85.8,186.5 86,186.9 86.3,187.2 86.5,187.6 86.8,187.9 87,188.2 87.3,188.6 87.5,188.9 87.8,189.2 88,189.5 88.3,189.9 88.5,190.2 88.8,190.5 89,190.8 89.3,191.2 89.5,191.5 89.8,191.8 90,192.1 90.3,192.4 90.5,192.7 90.8,193.1 91,193.4 91.3,193.7 91.5,194 91.8,194.3 92,194.6 92.3,194.9 92.5,195.2 92.8,195.5 93,195.8 93.3,196.1 93.5,196.4 93.8,196.7 94,197 94.3,197.3 94.5,197.6 94.8,197.9 95,198.2 95.3,198.5 95.5,198.8 95.8,199.1 96,199.4 96.3,199.7 96.5,200 96.8,200.2 97,200.5 97.3,200.8 97.5,201.1 97.8,201.4 98,201.7 98.3,201.9 98.5,202.2 98.8,202.5 99,202.8 99.3,203 99.5,203.3 99.8,203.6 100,203.8 100.3,204.1 100.5,204.4 100.8,204.6 101,204.9 101.3,205.2 101.5,205.4 101.8,205.7 102,206 102.3,206.2 102.5,206.5 102.8,206.7 103,207 103.3,207.2 103.5,207.5 103.8,207.7 104,208 104.3,208.2 104.5,208.5 104.8,208.7 105,209 105.3,209.2 105.5,209.5 105.8,209.7 106,210 106.3,210.2 106.5,210.4 106.8,210.7 107,210.9 107.3,211.1 107.5,211.4 107.8,211.6 108,211.8 108.3,212.1 108.5,212.3 108.8,212.5 109,212.8 109.3,213 109.5,213.2 109.8,213.4 110,213.7 110.3,213.9 110.5,214.1 110.8,214.3 111,214.5 111.3,214.7 111.5,215 111.8,215.2 112,215.4 112.3,215.6 112.5,215.8 112.8,216 113,216.2 113.3,216.4 113.5,216.6 113.8,216.8 114,217 114.3,217.2 114.5,217.4 114.8,217.6 115,217.8 115.3,218 115.5,218.2 115.8,218.4 116,218.6 116.3,218.8 116.5,219 116.8,219.2 117,219.4 117.3,219.6 117.5,219.7 117.8,219.9 118,220.1 118.3,220.3 118.5,220.5 118.8,220.7 119,220.8 119.3,221 119.5,221.2 119.8,221.4 120,221.5 120.3,221.7 120.5,221.9 120.8,222.1 121,222.2 121.3,222.4 121.5,222.6 121.8,222.7 122,222.9 122.3,223 122.5,223.2 122.8,223.4 123,223.5 123.3,223.7 123.5,223.8 123.8,224 124,224.2 124.3,224.3 124.5,224.5 124.8,224.6 125,224.8 125.3,224.9 125.5,225.1 125.8,225.2 126,225.3 126.3,225.5 126.5,225.6 126.8,225.8 127,225.9 127.3,226.1 127.5,226.2 127.8,226.3 128,226.5 128.3,226.6 128.5,226.7 128.8,226.9 129,227 129.3,227.1 129.5,227.2 129.8,227.4 130,227.5 130.3,227.6 130.5,227.7 130.8,227.9 131,228 131.3,228.1 131.5,228.2 131.8,228.3 132,228.5 132.3,228.6 132.5,228.7 132.8,228.8 133,228.9 133.3,229 133.5,229.1 133.8,229.2 134,229.3 134.3,229.5 134.5,229.6 134.8,229.7 135,229.8 135.3,229.9 135.5,230 135.8,230.1 136,230.2 136.3,230.2 136.5,230.3 136.8,230.4 137,230.5 137.3,230.6 137.5,230.7 137.8,230.8 138,230.9 138.3,231 138.5,231.1 138.8,231.1 139,231.2 139.3,231.3 139.5,231.4 139.8,231.5 140,231.5 140.3,231.6 140.5,231.7 140.8,231.8 141,231.8 141.3,231.9 141.5,232 141.8,232 142,232.1 142.3,232.2 142.5,232.2 142.8,232.3 143,232.4 143.3,232.4 143.5,232.5 143.8,232.6 144,232.6 144.3,232.7 144.5,232.7 144.8,232.8 145,232.8 145.3,232.9 145.5,232.9 145.8,233 146,233 146.3,233.1 146.5,233.1 146.8,233.2 147,233.2 147.3,233.3 147.5,233.3 147.8,233.3 148,233.4 148.3,233.4 148.5,233.5 148.8,233.5 149,233.5 149.3,233.6 149.5,233.6 149.8,233.6 150,233.7 150.3,233.7 150.5,233.7 150.8,233.7 151,233.8 151.3,233.8 151.5,233.8 151.8,233.8 152,233.8 152.3,233.9 152.5,233.9 152.8,233.9 153,233.9 153.3,233.9 153.5,233.9 153.8,234 154,234 154.3,234 154.5,234 154.8,234 155,234 155.3,234 155.5,234 155.8,234 156,234 156.3,234 156.5,234 156.8,234 157,234 157.3,234 157.5,234 157.8,234 158,234 158.3,234 158.5,233.9 158.8,233.9 159,233.9 159.3,233.9 159.5,233.9 159.8,233.9 160,233.8 160.3,233.8 160.5,233.8 160.8,233.8 161,233.8 161.3,233.7 161.5,233.7 161.8,233.7 162,233.7 162.3,233.6 162.5,233.6 162.8,233.6 163,233.5 163.3,233.5 163.5,233.5 163.8,233.4 164,233.4 164.3,233.3 164.5,233.3 164.8,233.3 165,233.2 165.3,233.2 165.5,233.1 165.8,233.1 166,233 166.3,233 166.5,232.9 166.8,232.9 167,232.8 167.3,232.8 167.5,232.7 167.8,232.7 168,232.6 168.3,232.6 168.5,232.5 168.8,232.4 169,232.4 169.3,232.3 169.5,232.2 169.8,232.2 170,232.1 170.3,232 170.5,232 170.8,231.9 171,231.8 171.3,231.8 171.5,231.7 171.8,231.6 172,231.5 172.3,231.5 172.5,231.4 172.8,231.3 173,231.2 173.3,231.1 173.5,231.1 173.8,231 174,230.9 174.3,230.8 174.5,230.7 174.8,230.6 175,230.5 175.3,230.4 175.5,230.3 175.8,230.2 176,230.2 176.3,230.1 176.5,230 176.8,229.9 177,229.8 177.3,229.7 177.5,229.6 177.8,229.5 178,229.3 178.3,229.2 178.5,229.1 178.8,229 179,228.9 179.3,228.8 179.5,228.7 179.8,228.6 180,228.5 180.3,228.3 180.5,228.2 180.8,228.1 181,228 181.3,227.9 181.5,227.7 181.8,227.6 182,227.5 182.3,227.4 182.5,227.2 182.8,227.1 183,227 183.3,226.9 183.5,226.7 183.8,226.6 184,226.5 184.3,226.3 184.5,226.2 184.8,226.1 185,225.9 185.3,225.8 185.5,225.6 185.8,225.5 186,225.3 186.3,225.2 186.5,225.1 186.8,224.9 187,224.8 187.3,224.6 187.5,224.5 187.8,224.3 188,224.2 188.3,224 188.5,223.8 188.8,223.7 189,223.5 189.3,223.4 189.5,223.2 189.8,223 190,222.9 190.3,222.7 190.5,222.6 190.8,222.4 191,222.2 191.3,222.1 191.5,221.9 191.8,221.7 192,221.5 192.3,221.4 192.5,221.2 192.8,221 193,220.8 193.3,220.7 193.5,220.5 193.8,220.3 194,220.1 194.3,219.9 194.5,219.7 194.8,219.6 195,219.4 195.3,219.2 195.5,219 195.8,218.8 196,218.6 196.3,218.4 196.5,218.2 196.8,218 197,217.8 197.3,217.6 197.5,217.4 197.8,217.2 198,217 198.3,216.8 198.5,216.6 198.8,216.4 199,216.2 199.3,216 199.5,215.8 199.8,215.6 200,215.4 200.3,215.2 200.5,215 200.8,214.7 201,214.5 201.3,214.3 201.5,214.1 201.8,213.9 202,213.7 202.3,213.4 202.5,213.2 202.8,213 203,212.8 203.3,212.5 203.5,212.3 203.8,212.1 204,211.8 204.3,211.6 204.5,211.4 204.8,211.1 205,210.9 205.3,210.7 205.5,210.4 205.8,210.2 206,210 206.3,209.7 206.5,209.5 206.8,209.2 207,209 207.3,208.7 207.5,208.5 207.8,208.2 208,208 208.3,207.7 208.5,207.5 208.8,207.2 209,207 209.3,206.7 209.5,206.5 209.8,206.2 210,206 210.3,205.7 210.5,205.4 210.8,205.2 211,204.9 211.3,204.6 211.5,204.4 211.8,204.1 212,203.8 212.3,203.6 212.5,203.3 212.8,203 213,202.8 213.3,202.5 213.5,202.2 213.8,201.9 214,201.7 214.3,201.4 214.5,201.1 214.8,200.8 215,200.5 215.3,200.2 215.5,200 215.8,199.7 216,199.4 216.3,199.1 216.5,198.8 216.8,198.5 217,198.2 217.3,197.9 217.5,197.6 217.8,197.3 218,197 218.3,196.7 218.5,196.4 218.8,196.1 219,195.8 219.3,195.5 219.5,195.2 219.8,194.9 220,194.6 220.3,194.3 220.5,194 220.8,193.7 221,193.4 221.3,193.1 221.5,192.7 221.8,192.4 222,192.1 222.3,191.8 222.5,191.5 222.8,191.2 223,190.8 223.3,190.5 223.5,190.2 223.8,189.9 224,189.5 224.3,189.2 224.5,188.9 224.8,188.6 225,188.2 225.3,187.9 225.5,187.6 225.8,187.2 226,186.9 226.3,186.5 226.5,186.2 226.8,185.9 227,185.5 227.3,185.2 227.5,184.8 227.8,184.5 228,184.2 228.3,183.8 228.5,183.5 228.8,183.1 229,182.8 229.3,182.4 229.5,182.1 229.8,181.7 230,181.3 230.3,181 230.5,180.6 230.8,180.3 231,179.9 231.3,179.6 231.5,179.2 231.8,178.8 232,178.5 232.3,178.1 232.5,177.7 232.8,177.4 233,177 233.3,176.6 233.5,176.2 233.8,175.9 234,175.5 234.3,175.1 234.5,174.7 234.8,174.4 235,174 235.3,173.6 235.5,173.2 235.8,172.8 236,172.5 236.3,172.1 236.5,171.7 236.7,171.3 237,170.9 237.3,170.5 237.5,170.1 237.8,169.7 238,169.3 238.3,169 238.5,168.6 238.8,168.2 239,167.8 239.3,167.4 239.5,167 239.8,166.6 240,166.2 240.3,165.7 240.5,165.3 240.8,164.9 241,164.5 241.3,164.1 241.5,163.7 241.8,163.3 242,162.9 242.3,162.5 242.5,162.1 242.8,161.6 243,161.2 243.2,160.8 243.5,160.4 243.8,160 244,159.5 244.3,159.1 244.5,158.7 244.8,158.3 245,157.8 245.3,157.4 245.5,157 245.8,156.5 246,156.1 246.3,155.7 246.5,155.2 246.8,154.8 247,154.4 247.3,153.9 247.5,153.5 247.8,153.1 248,152.6 248.3,152.2 248.5,151.7 248.8,151.3 249,150.8 249.3,150.4 249.5,149.9 249.7,149.5 250,149 250.3,148.6 250.5,148.1 250.8,147.7 251,147.2 251.3,146.8 251.5,146.3 251.8,145.8 252,145.4 252.3,144.9 252.5,144.5 252.8,144 253,143.5 253.3,143.1 253.5,142.6 253.8,142.1 254,141.7 254.3,141.2 254.5,140.7 254.8,140.2 255,139.8 255.3,139.3 255.5,138.8 255.8,138.3 256,137.8 256.3,137.4 256.5,136.9 256.8,136.4 257,135.9 257.3,135.4 257.5,134.9 257.8,134.5 258,134 258.3,133.5 258.5,133 258.8,132.5 259,132 259.3,131.5 259.5,131 259.8,130.5 260,130 260.3,129.5 260.5,129 260.8,128.5 261,128 261.3,127.5 261.5,127 261.8,126.5 262,126 262.3,125.5 262.5,124.9 262.8,124.4 263,123.9 263.3,123.4 263.5,122.9 263.8,122.4 264,121.8 264.3,121.3 264.5,120.8 264.8,120.3 265,119.8 265.3,119.2 265.5,118.7 265.8,118.2 266,117.7 266.3,117.1 266.5,116.6 266.8,116.1 267,115.5 267.3,115 267.5,114.5 267.8,113.9 268,113.4 268.3,112.8 268.5,112.3 268.8,111.8 269,111.2 269.3,110.7 269.5,110.1 269.8,109.6 270,109 270.3,108.5 270.5,107.9 270.8,107.4 271,106.8 271.3,106.3 271.5,105.7 271.8,105.2 272,104.6 272.3,104.1 272.5,103.5 272.8,102.9 273,102.4 273.3,101.8 273.5,101.2 273.8,100.7 274,100.1 274.3,99.5 274.5,99 274.8,98.4 275,97.8 275.3,97.3 275.5,96.7 275.8,96.1 276,95.5 276.3,95 276.5,94.4 276.8,93.8 277,93.2 277.3,92.6 277.5,92.1 277.8,91.5 278,90.9 278.3,90.3 278.5,89.7 278.8,89.1 279,88.5 279.3,87.9 279.5,87.3 279.8,86.7 280,86.2 280.3,85.6 280.5,85 280.8,84.4 281,83.8 281.3,83.2 281.5,82.6 281.8,82 282,81.3 282.3,80.7 282.5,80.1 282.8,79.5 283,78.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="26,71.5 34.4,78.9 25.1,82.6" fill="currentColor"/>
  <polygon points="286,71.5 286.9,82.6 277.6,78.9" fill="currentColor"/>
  <polyline points="120,34.2 120,34.6 120.3,37.4 120.5,40.1 120.8,42.8 121,45.5 121.3,48.2 121.5,50.9 121.8,53.5 122,56.2 122.3,58.8 122.5,61.3 122.8,63.9 123,66.5 123.3,69 123.5,71.5 123.8,74 124,76.5 124.3,78.9 124.5,81.3 124.8,83.8 125,86.2 125.3,88.5 125.5,90.9 125.8,93.2 126,95.5 126.3,97.8 126.5,100.1 126.8,102.4 127,104.6 127.3,106.8 127.5,109 127.8,111.2 128,113.4 128.3,115.5 128.5,117.7 128.8,119.8 129,121.8 129.3,123.9 129.5,126 129.8,128 130,130 130.3,132 130.5,134 130.8,135.9 131,137.8 131.3,139.8 131.5,141.7 131.8,143.5 132,145.4 132.3,147.2 132.5,149 132.8,150.8 133,152.6 133.3,154.4 133.5,156.1 133.8,157.8 134,159.5 134.3,161.2 134.5,162.9 134.8,164.5 135,166.2 135.3,167.8 135.5,169.3 135.8,170.9 136,172.5 136.3,174 136.5,175.5 136.8,177 137,178.5 137.3,179.9 137.5,181.3 137.8,182.8 138,184.2 138.3,185.5 138.5,186.9 138.8,188.2 139,189.5 139.3,190.8 139.5,192.1 139.8,193.4 140,194.6 140.3,195.8 140.5,197 140.8,198.2 141,199.4 141.3,200.5 141.5,201.7 141.8,202.8 142,203.8 142.3,204.9 142.5,206 142.8,207 143,208 143.3,209 143.5,210 143.8,210.9 144,211.8 144.3,212.8 144.5,213.7 144.8,214.5 145,215.4 145.3,216.2 145.5,217 145.8,217.8 146,218.6 146.3,219.4 146.5,220.1 146.8,220.8 147,221.5 147.3,222.2 147.5,222.9 147.8,223.5 148,224.2 148.3,224.8 148.5,225.3 148.8,225.9 149,226.5 149.3,227 149.5,227.5 149.8,228 150,228.5 150.3,228.9 150.5,229.3 150.8,229.8 151,230.2 151.3,230.5 151.5,230.9 151.8,231.2 152,231.5 152.3,231.8 152.5,232.1 152.8,232.4 153,232.6 153.3,232.8 153.5,233 153.8,233.2 154,233.4 154.3,233.5 154.5,233.7 154.8,233.8 155,233.8 155.3,233.9 155.5,234 155.8,234 156,234 156.3,234 156.5,234 156.8,233.9 157,233.8 157.3,233.8 157.5,233.7 157.8,233.5 158,233.4 158.3,233.2 158.5,233 158.8,232.8 159,232.6 159.3,232.4 159.5,232.1 159.8,231.8 160,231.5 160.3,231.2 160.5,230.9 160.8,230.5 161,230.2 161.3,229.8 161.5,229.3 161.8,228.9 162,228.5 162.3,228 162.5,227.5 162.8,227 163,226.5 163.3,225.9 163.5,225.3 163.8,224.8 164,224.2 164.3,223.5 164.5,222.9 164.8,222.2 165,221.5 165.3,220.8 165.5,220.1 165.8,219.4 166,218.6 166.3,217.8 166.5,217 166.8,216.2 167,215.4 167.3,214.5 167.5,213.7 167.8,212.8 168,211.8 168.3,210.9 168.5,210 168.8,209 169,208 169.3,207 169.5,206 169.8,204.9 170,203.8 170.3,202.8 170.5,201.7 170.8,200.5 171,199.4 171.3,198.2 171.5,197 171.8,195.8 172,194.6 172.3,193.4 172.5,192.1 172.8,190.8 173,189.5 173.3,188.2 173.5,186.9 173.8,185.5 174,184.2 174.3,182.8 174.5,181.3 174.8,179.9 175,178.5 175.3,177 175.5,175.5 175.8,174 176,172.5 176.3,170.9 176.5,169.3 176.8,167.8 177,166.2 177.3,164.5 177.5,162.9 177.8,161.2 178,159.5 178.3,157.8 178.5,156.1 178.8,154.4 179,152.6 179.3,150.8 179.5,149 179.8,147.2 180,145.4 180.3,143.5 180.5,141.7 180.8,139.8 181,137.8 181.3,135.9 181.5,134 181.8,132 182,130 182.3,128 182.5,126 182.8,123.9 183,121.8 183.3,119.8 183.5,117.7 183.8,115.5 184,113.4 184.3,111.2 184.5,109 184.8,106.8 185,104.6 185.3,102.4 185.5,100.1 185.8,97.8 186,95.5 186.3,93.2 186.5,90.9 186.8,88.5 187,86.2 187.3,83.8 187.5,81.3 187.8,78.9 188,76.5 188.3,74 188.5,71.5 188.8,69 189,66.5 189.3,63.9 189.5,61.3 189.8,58.8 190,56.2 190.3,53.5 190.5,50.9 190.8,48.2 191,45.5 191.3,42.8 191.5,40.1 191.8,37.4 192,34.6 192,34.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="119.3,26.2 125.1,35.7 115.2,36.6" fill="currentColor"/>
  <polygon points="192.8,26.2 196.8,36.6 186.9,35.7" fill="currentColor"/>
  <text x="41.6" y="88.4" font-size="13" fill="currentColor" text-anchor="start">y = (2x)²</text>
  <text x="241.8" y="46.8" font-size="13" fill="currentColor" text-anchor="start">y = x²</text>
  <text x="283.4" y="200.2" font-size="13" fill="currentColor" text-anchor="end">y = (0.5x)²</text>
</svg>
</div>

Given a function $y=f(x)$, the form $y=f(bx)$ results in a horizontal stretch
or compression. Consider the function $y=x^2$. The graph of $y=(0.5x)^2$ is a
horizontal stretch of the graph of the function $y=x^2$ by a factor of 2. The
graph of $y=(2x)^2$ is a horizontal compression of the graph of the function
$y=x^2$ by a factor of $2$.

{{< callout type="info" >}}
  **Horizontal stretches and compressions.** Given a function $f(x)$, a new
  function $g(x)=f(bx)$, where $b$ is a constant, is a **horizontal stretch**
  or **horizontal compression** of the function $f(x)$.

  - If $b>1$, then the graph will be compressed by $\tfrac{1}{b}$.
  - If $0<b<1$, then the graph will be stretched by $\tfrac{1}{b}$.
  - If $b<0$, then there will be a combination of a horizontal stretch or
    compression with a horizontal reflection.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a description of a function, sketch a horizontal
  compression or stretch.

  1. Write a formula to represent the function.
  2. Set $g(x)=f(bx)$ where $b>1$ for a compression or $0<b<1$ for a stretch.
{{< /callout >}}

**Example.** Suppose a scientist is comparing a population of fruit flies to a
population that progresses through its lifespan twice as fast as the original
population. In other words, this new population, $R$, will progress in 1 hour
the same amount as the original population does in 2 hours, and in 2 hours, it
will progress as much as the original population does in 4 hours. Sketch a
graph of this population.

**Solution.** Symbolically, we could write

$$
\begin{array}{lrcl}
& R(1) &=& P(2), \\[4pt]
& R(2) &=& P(4),\ \text{and in general,} \\[4pt]
& R(t) &=& P(2t).
\end{array}
$$

Comparing the original population graph above with the compressed population
graph below:

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The transformed population R of t equals P of 2t. It has the same shape as P but is half as wide: it begins at (0, 1), peaks at (1.5, 3), falls to (3, 2), then drops to (3.5, 0).","xMin":-1,"xMax":7,"yMin":-1,"yMax":7,"unit":26,"tickLabels":true,"xLabel":"t","yLabel":"R(t)","polylines":[{"through":[[0,1],[0.5,1.5],[1,2.15],[1.5,3],[3,2],[3.5,0]]}],"points":[{"at":[0,1]},{"at":[3.5,0]}]}'>
<svg role="img" aria-label="The transformed population R of t equals P of 2t. It has the same shape as P but is half as wide: it begins at (0, 1), peaks at (1.5, 3), falls to (3, 2), then drops to (3.5, 0)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" width="260" height="260" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="234" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="234" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="234" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="234" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="234" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="234" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="234" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="234" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="234" x2="234" y2="234" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="234" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="234" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="234" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="234" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="234" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="234" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="208" x2="236" y2="208" stroke="currentColor" stroke-width="1"/>
  <line x1="52" y1="24" x2="52" y2="236" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,208 236,213 236,203" fill="currentColor"/>
  <polygon points="52,14 57,24 47,24" fill="currentColor"/>
  <polygon points="14,208 24,203 24,213" fill="currentColor"/>
  <polygon points="52,246 47,236 57,236" fill="currentColor"/>
  <text x="244" y="200" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="60" y="24" font-size="13" fill="currentColor" font-style="italic">R(t)</text>
  <line x1="26" y1="205" x2="26" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="223" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="78" y1="205" x2="78" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="223" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="104" y1="205" x2="104" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="223" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="130" y1="205" x2="130" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="223" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="156" y1="205" x2="156" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="223" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="182" y1="205" x2="182" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="223" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="208" y1="205" x2="208" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="223" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="234" y1="205" x2="234" y2="211" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="223" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="49" y1="234" x2="55" y2="234" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="238" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="49" y1="182" x2="55" y2="182" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="186" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="49" y1="156" x2="55" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="160" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="49" y1="130" x2="55" y2="130" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="134" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="49" y1="104" x2="55" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="108" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="49" y1="78" x2="55" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="82" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="49" y1="52" x2="55" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="56" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="49" y1="26" x2="55" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="30" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <polyline points="52,182 65,169 78,152.1 91,130 130,156 143,208" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="52" cy="182" r="4" fill="currentColor"/>
  <circle cx="143" cy="208" r="4" fill="currentColor"/>
</svg>
</div>

Note that the effect on the graph is a horizontal compression where all input
values are half of their original distance from the vertical axis.

**Example.** A function $f(x)$ is given below. Create a table for the function
$g(x)=f\left(\tfrac{1}{2}x\right)$.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 1 | 3 | 7 | 11 |

**Solution.** The formula $g(x)=f\left(\tfrac{1}{2}x\right)$ tells us that the
output values for $g$ are the same as the output values for the function $f$
at an input half the size. Notice that we do not have enough information to
determine $g(2)$ because
$g(2)=f\left(\tfrac{1}{2}\cdot 2\right)=f(1)$, and we do not have a value for
$f(1)$ in our table. Our input values to $g$ will need to be twice as large to
get inputs for $f$ that we can evaluate. For example, we can determine $g(4)$.

$$g(4)=f\left(\tfrac{1}{2}\cdot 4\right)=f(2)=1$$

We do the same for the other values to produce the table below.

| $x$ | 4 | 8 | 12 | 16 |
| :--- | ---: | ---: | ---: | ---: |
| $g(x)$ | 1 | 3 | 7 | 11 |

The graphs below show both of these sets of points: (a) the points of $f$ and
(b) the points of $g$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"(a) The plotted points of f: (2, 1), (4, 3), (6, 7), and (8, 11).","xMin":-1,"xMax":20,"yMin":-1,"yMax":13,"xUnit":14,"yUnit":16,"xGridStep":2,"yGridStep":2,"tickLabels":true,"xTickStep":4,"yTickStep":2,"yLabel":"f(x)","points":[{"at":[2,1]},{"at":[4,3]},{"at":[6,7]},{"at":[8,11]}]}'>
<svg role="img" aria-label="(a) The plotted points of f: (2, 1), (4, 3), (6, 7), and (8, 11)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 346 276" width="346" height="276" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="250" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="54" y1="250" x2="54" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="82" y1="250" x2="82" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="250" x2="110" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="250" x2="138" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="250" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="250" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="222" y1="250" x2="222" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="250" x2="250" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="250" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="250" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="250" x2="320" y2="250" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="320" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="320" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="154" x2="320" y2="154" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="320" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="320" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="58" x2="320" y2="58" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="320" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="234" x2="322" y2="234" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="24" x2="40" y2="252" stroke="currentColor" stroke-width="1"/>
  <polygon points="332,234 322,239 322,229" fill="currentColor"/>
  <polygon points="40,14 45,24 35,24" fill="currentColor"/>
  <polygon points="14,234 24,229 24,239" fill="currentColor"/>
  <polygon points="40,262 35,252 45,252" fill="currentColor"/>
  <text x="330" y="226" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="48" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="96" y1="231" x2="96" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="96" y="249" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="152" y1="231" x2="152" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="249" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="208" y1="231" x2="208" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="249" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="264" y1="231" x2="264" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="264" y="249" font-size="11" fill="currentColor" text-anchor="middle">16</text>
  <line x1="320" y1="231" x2="320" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="320" y="249" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="37" y1="202" x2="43" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="206" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="37" y1="170" x2="43" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="174" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="37" y1="138" x2="43" y2="138" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="142" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="37" y1="106" x2="43" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="110" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="37" y1="74" x2="43" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="78" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="37" y1="42" x2="43" y2="42" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="46" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <circle cx="68" cy="218" r="4" fill="currentColor"/>
  <circle cx="96" cy="186" r="4" fill="currentColor"/>
  <circle cx="124" cy="122" r="4" fill="currentColor"/>
  <circle cx="152" cy="58" r="4" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"(b) The plotted points of g(x) = f(x/2): (4, 1), (8, 3), (12, 7), and (16, 11). Each height matches a point of f at twice the input.","xMin":-1,"xMax":20,"yMin":-1,"yMax":13,"xUnit":14,"yUnit":16,"xGridStep":2,"yGridStep":2,"tickLabels":true,"xTickStep":4,"yTickStep":2,"yLabel":"g(x)","points":[{"at":[4,1]},{"at":[8,3]},{"at":[12,7]},{"at":[16,11]}]}'>
<svg role="img" aria-label="(b) The plotted points of g(x) = f(x/2): (4, 1), (8, 3), (12, 7), and (16, 11). Each height matches a point of f at twice the input." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 346 276" width="346" height="276" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="250" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="54" y1="250" x2="54" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="82" y1="250" x2="82" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="250" x2="110" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="250" x2="138" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="250" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="250" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="222" y1="250" x2="222" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="250" x2="250" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="250" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="250" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="250" x2="320" y2="250" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="320" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="320" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="154" x2="320" y2="154" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="320" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="320" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="58" x2="320" y2="58" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="320" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="234" x2="322" y2="234" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="24" x2="40" y2="252" stroke="currentColor" stroke-width="1"/>
  <polygon points="332,234 322,239 322,229" fill="currentColor"/>
  <polygon points="40,14 45,24 35,24" fill="currentColor"/>
  <polygon points="14,234 24,229 24,239" fill="currentColor"/>
  <polygon points="40,262 35,252 45,252" fill="currentColor"/>
  <text x="330" y="226" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="48" y="24" font-size="13" fill="currentColor" font-style="italic">g(x)</text>
  <line x1="96" y1="231" x2="96" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="96" y="249" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="152" y1="231" x2="152" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="249" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="208" y1="231" x2="208" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="249" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="264" y1="231" x2="264" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="264" y="249" font-size="11" fill="currentColor" text-anchor="middle">16</text>
  <line x1="320" y1="231" x2="320" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="320" y="249" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="37" y1="202" x2="43" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="206" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="37" y1="170" x2="43" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="174" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="37" y1="138" x2="43" y2="138" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="142" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="37" y1="106" x2="43" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="110" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="37" y1="74" x2="43" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="78" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="37" y1="42" x2="43" y2="42" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="46" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <circle cx="96" cy="218" r="4" fill="currentColor"/>
  <circle cx="152" cy="186" r="4" fill="currentColor"/>
  <circle cx="208" cy="122" r="4" fill="currentColor"/>
  <circle cx="264" cy="58" r="4" fill="currentColor"/>
</svg>
</div>

Because each input value has been doubled, the result is that the function
$g(x)$ has been stretched horizontally by a factor of 2.

**Example.** Relate the function $g(x)$ to $f(x)$ in the graph below, where
$g$ is dashed.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f rises in a straight line from the origin to (4, 4), dips to (5, 3.4) and returns to a solid point at (6, 4). Drawn dashed, g is the same shape compressed to one third of its width: it rises from the origin to (4/3, 4), dips at (5/3, 3.4) and ends at a solid point at (2, 4).","xMin":-1,"xMax":7,"yMin":-1,"yMax":5,"xUnit":40,"yUnit":40,"tickLabels":true,"segments":[{"from":[0,0],"to":[4,4]},{"from":[0,0],"to":[1.3333,4],"dashed":true}],"quadratics":[{"a":0.6,"b":-6,"c":18.4,"from":4,"to":6,"arrows":false},{"a":5.4,"b":-18,"c":18.4,"from":1.3333,"to":2,"dashed":true,"arrows":false}],"points":[{"at":[6,4],"label":"f","labelSide":"e"},{"at":[2,4],"label":"g","labelSide":"n"}]}'>
<svg role="img" aria-label="The graph of f rises in a straight line from the origin to (4, 4), dips to (5, 3.4) and returns to a solid point at (6, 4). Drawn dashed, g is the same shape compressed to one third of its width: it rises from the origin to (4/3, 4), dips at (5/3, 3.4) and ends at a solid point at (2, 4)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 292" width="372" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="266" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="266" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="266" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="266" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="266" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="266" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="346" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="346" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="346" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="226" x2="348" y2="226" stroke="currentColor" stroke-width="1"/>
  <line x1="66" y1="24" x2="66" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,226 348,231 348,221" fill="currentColor"/>
  <polygon points="66,14 71,24 61,24" fill="currentColor"/>
  <polygon points="14,226 24,221 24,231" fill="currentColor"/>
  <polygon points="66,278 61,268 71,268" fill="currentColor"/>
  <text x="356" y="218" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="74" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="223" x2="26" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="241" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="106" y1="223" x2="106" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="241" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="146" y1="223" x2="146" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="241" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="186" y1="223" x2="186" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="241" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="226" y1="223" x2="226" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="241" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="266" y1="223" x2="266" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="241" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="306" y1="223" x2="306" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="241" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="346" y1="223" x2="346" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="241" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="63" y1="266" x2="69" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="270" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="63" y1="186" x2="69" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="190" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="63" y1="146" x2="69" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="63" y1="106" x2="69" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="110" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="63" y1="66" x2="69" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="70" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="63" y1="26" x2="69" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="226,66 226.3,66.3 226.5,66.6 226.8,66.9 227,67.2 227.3,67.5 227.5,67.8 227.8,68.1 228,68.3 228.3,68.6 228.5,68.9 228.8,69.2 229,69.5 229.3,69.7 229.5,70 229.8,70.3 230,70.6 230.3,70.8 230.5,71.1 230.8,71.4 231,71.6 231.3,71.9 231.5,72.1 231.8,72.4 232,72.7 232.3,72.9 232.5,73.2 232.8,73.4 233,73.7 233.3,73.9 233.5,74.2 233.8,74.4 234,74.6 234.3,74.9 234.5,75.1 234.8,75.4 235,75.6 235.3,75.8 235.5,76 235.8,76.3 236,76.5 236.3,76.7 236.5,76.9 236.8,77.2 237,77.4 237.3,77.6 237.5,77.8 237.8,78 238,78.2 238.3,78.4 238.5,78.7 238.8,78.9 239,79.1 239.3,79.3 239.5,79.5 239.8,79.7 240,79.9 240.3,80.1 240.5,80.2 240.8,80.4 241,80.6 241.3,80.8 241.5,81 241.8,81.2 242,81.4 242.3,81.5 242.5,81.7 242.8,81.9 243,82.1 243.3,82.2 243.5,82.4 243.8,82.6 244,82.7 244.3,82.9 244.5,83.1 244.8,83.2 245,83.4 245.3,83.5 245.5,83.7 245.8,83.8 246,84 246.3,84.1 246.5,84.3 246.8,84.4 247,84.6 247.3,84.7 247.5,84.9 247.8,85 248,85.1 248.3,85.3 248.5,85.4 248.8,85.5 249,85.7 249.3,85.8 249.5,85.9 249.8,86 250,86.2 250.3,86.3 250.5,86.4 250.8,86.5 251,86.6 251.3,86.7 251.5,86.8 251.8,87 252,87.1 252.3,87.2 252.5,87.3 252.8,87.4 253,87.5 253.3,87.6 253.5,87.7 253.8,87.7 254,87.8 254.3,87.9 254.5,88 254.8,88.1 255,88.2 255.3,88.3 255.5,88.3 255.8,88.4 256,88.5 256.3,88.6 256.5,88.6 256.8,88.7 257,88.8 257.3,88.9 257.5,88.9 257.8,89 258,89 258.3,89.1 258.5,89.2 258.8,89.2 259,89.3 259.3,89.3 259.5,89.4 259.8,89.4 260,89.5 260.3,89.5 260.5,89.5 260.8,89.6 261,89.6 261.3,89.7 261.5,89.7 261.8,89.7 262,89.8 262.3,89.8 262.5,89.8 262.8,89.8 263,89.9 263.3,89.9 263.5,89.9 263.8,89.9 264,89.9 264.3,90 264.5,90 264.8,90 265,90 265.3,90 265.5,90 265.8,90 266,90 266.3,90 266.5,90 266.8,90 267,90 267.3,90 267.5,90 267.8,90 268,89.9 268.3,89.9 268.5,89.9 268.8,89.9 269,89.9 269.3,89.8 269.5,89.8 269.8,89.8 270,89.8 270.3,89.7 270.5,89.7 270.8,89.7 271,89.6 271.3,89.6 271.5,89.5 271.8,89.5 272,89.5 272.3,89.4 272.5,89.4 272.8,89.3 273,89.3 273.3,89.2 273.5,89.2 273.8,89.1 274,89 274.3,89 274.5,88.9 274.8,88.9 275,88.8 275.3,88.7 275.5,88.6 275.8,88.6 276,88.5 276.3,88.4 276.5,88.3 276.8,88.3 277,88.2 277.3,88.1 277.5,88 277.8,87.9 278,87.8 278.3,87.7 278.5,87.7 278.8,87.6 279,87.5 279.3,87.4 279.5,87.3 279.8,87.2 280,87.1 280.3,87 280.5,86.8 280.8,86.7 281,86.6 281.3,86.5 281.5,86.4 281.8,86.3 282,86.2 282.3,86 282.5,85.9 282.8,85.8 283,85.7 283.3,85.5 283.5,85.4 283.8,85.3 284,85.1 284.3,85 284.5,84.9 284.8,84.7 285,84.6 285.3,84.4 285.5,84.3 285.8,84.1 286,84 286.3,83.8 286.5,83.7 286.8,83.5 287,83.4 287.3,83.2 287.5,83.1 287.8,82.9 288,82.7 288.3,82.6 288.5,82.4 288.8,82.2 289,82.1 289.3,81.9 289.5,81.7 289.8,81.5 290,81.4 290.3,81.2 290.5,81 290.8,80.8 291,80.6 291.3,80.4 291.5,80.2 291.8,80.1 292,79.9 292.3,79.7 292.5,79.5 292.8,79.3 293,79.1 293.3,78.9 293.5,78.7 293.8,78.4 294,78.2 294.3,78 294.5,77.8 294.8,77.6 295,77.4 295.3,77.2 295.5,76.9 295.8,76.7 296,76.5 296.3,76.3 296.5,76 296.8,75.8 297,75.6 297.3,75.4 297.5,75.1 297.8,74.9 298,74.6 298.3,74.4 298.5,74.2 298.8,73.9 299,73.7 299.3,73.4 299.5,73.2 299.8,72.9 300,72.7 300.3,72.4 300.5,72.1 300.8,71.9 301,71.6 301.3,71.4 301.5,71.1 301.8,70.8 302,70.6 302.3,70.3 302.5,70 302.8,69.7 303,69.5 303.3,69.2 303.5,68.9 303.8,68.6 304,68.3 304.3,68.1 304.5,67.8 304.8,67.5 305,67.2 305.3,66.9 305.5,66.6 305.8,66.3 306,66" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polyline points="119.3,66 119.4,66.4 119.6,66.8 119.7,67.2 119.8,67.6 119.9,68 120,68.3 120.1,68.7 120.2,69.1 120.3,69.5 120.4,69.8 120.6,70.2 120.7,70.6 120.8,70.9 120.9,71.3 121,71.6 121.1,72 121.2,72.3 121.3,72.7 121.4,73 121.6,73.3 121.7,73.7 121.8,74 121.9,74.3 122,74.6 122.1,75 122.2,75.3 122.3,75.6 122.4,75.9 122.6,76.2 122.7,76.5 122.8,76.8 122.9,77.1 123,77.4 123.1,77.7 123.2,78 123.3,78.2 123.4,78.5 123.6,78.8 123.7,79.1 123.8,79.3 123.9,79.6 124,79.9 124.1,80.1 124.2,80.4 124.3,80.6 124.4,80.9 124.6,81.1 124.7,81.4 124.8,81.6 124.9,81.8 125,82.1 125.1,82.3 125.2,82.5 125.3,82.7 125.4,83 125.6,83.2 125.7,83.4 125.8,83.6 125.9,83.8 126,84 126.1,84.2 126.2,84.4 126.3,84.6 126.4,84.8 126.6,85 126.7,85.1 126.8,85.3 126.9,85.5 127,85.7 127.1,85.8 127.2,86 127.3,86.2 127.4,86.3 127.6,86.5 127.7,86.6 127.8,86.8 127.9,86.9 128,87.1 128.1,87.2 128.2,87.3 128.3,87.5 128.4,87.6 128.6,87.7 128.7,87.8 128.8,88 128.9,88.1 129,88.2 129.1,88.3 129.2,88.4 129.3,88.5 129.4,88.6 129.6,88.7 129.7,88.8 129.8,88.9 129.9,89 130,89 130.1,89.1 130.2,89.2 130.3,89.3 130.4,89.3 130.6,89.4 130.7,89.5 130.8,89.5 130.9,89.6 131,89.6 131.1,89.7 131.2,89.7 131.3,89.8 131.4,89.8 131.6,89.8 131.7,89.9 131.8,89.9 131.9,89.9 132,89.9 132.1,90 132.2,90 132.3,90 132.4,90 132.6,90 132.7,90 132.8,90 132.9,90 133,90 133.1,90 133.2,90 133.3,89.9 133.4,89.9 133.6,89.9 133.7,89.9 133.8,89.8 133.9,89.8 134,89.8 134.1,89.7 134.2,89.7 134.3,89.6 134.4,89.6 134.6,89.5 134.7,89.5 134.8,89.4 134.9,89.3 135,89.3 135.1,89.2 135.2,89.1 135.3,89 135.4,89 135.6,88.9 135.7,88.8 135.8,88.7 135.9,88.6 136,88.5 136.1,88.4 136.2,88.3 136.3,88.2 136.4,88.1 136.6,88 136.7,87.8 136.8,87.7 136.9,87.6 137,87.5 137.1,87.3 137.2,87.2 137.3,87.1 137.4,86.9 137.6,86.8 137.7,86.6 137.8,86.5 137.9,86.3 138,86.2 138.1,86 138.2,85.8 138.3,85.7 138.4,85.5 138.6,85.3 138.7,85.1 138.8,85 138.9,84.8 139,84.6 139.1,84.4 139.2,84.2 139.3,84 139.4,83.8 139.6,83.6 139.7,83.4 139.8,83.2 139.9,83 140,82.7 140.1,82.5 140.2,82.3 140.3,82.1 140.4,81.8 140.6,81.6 140.7,81.4 140.8,81.1 140.9,80.9 141,80.6 141.1,80.4 141.2,80.1 141.3,79.9 141.4,79.6 141.6,79.3 141.7,79.1 141.8,78.8 141.9,78.5 142,78.2 142.1,78 142.2,77.7 142.3,77.4 142.4,77.1 142.6,76.8 142.7,76.5 142.8,76.2 142.9,75.9 143,75.6 143.1,75.3 143.2,75 143.3,74.6 143.4,74.3 143.6,74 143.7,73.7 143.8,73.3 143.9,73 144,72.7 144.1,72.3 144.2,72 144.3,71.6 144.4,71.3 144.6,70.9 144.7,70.6 144.8,70.2 144.9,69.8 145,69.5 145.1,69.1 145.2,68.7 145.3,68.3 145.4,68 145.6,67.6 145.7,67.2 145.8,66.8 145.9,66.4 146,66" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <line x1="66" y1="226" x2="226" y2="66" stroke="currentColor" stroke-width="1.4"/>
  <line x1="66" y1="226" x2="119.3" y2="66" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="306" cy="66" r="4" fill="currentColor"/>
  <circle cx="146" cy="66" r="4" fill="currentColor"/>
  <text x="320" y="70" font-size="13" fill="currentColor" text-anchor="start">f</text>
  <text x="146" y="52" font-size="13" fill="currentColor" text-anchor="middle">g</text>
</svg>
</div>

**Solution.** The graph of $g(x)$ looks like the graph of $f(x)$ horizontally
compressed. Because $f(x)$ ends at $(6,4)$ and $g(x)$ ends at $(2,4)$, we can
see that the $x$-values have been compressed by $\tfrac{1}{3}$, because
$6\left(\tfrac{1}{3}\right)=2$. We might also notice that $g(2)=f(6)$ and
$g(1)=f(3)$. Either way, we can describe this relationship as $g(x)=f(3x)$.
This is a horizontal compression by $\tfrac{1}{3}$.

Notice that the coefficient needed for a horizontal stretch or compression is
the reciprocal of the stretch or compression. So to stretch the graph
horizontally by a scale factor of 4, we need a coefficient of $\tfrac{1}{4}$
in our function: $f\left(\tfrac{1}{4}x\right)$. This means that the input
values must be four times larger to produce the same result, requiring the
input to be larger, causing the horizontal stretching.

{{< fillin
  question="Write a formula for the toolkit square root function horizontally stretched by a factor of 3."
  answer="\sqrt{\frac{1}{3}x}"
  answerDisplay="$g(x)=f\left(\tfrac{1}{3}x\right)=\sqrt{\tfrac{1}{3}x}$"
  hint="The coefficient inside is the reciprocal of the stretch factor."
>}}

## Performing a sequence of transformations

When combining transformations, it is very important to consider the order of
the transformations. For example, vertically shifting by 3 and then vertically
stretching by 2 does not create the same graph as vertically stretching by 2
and then vertically shifting by 3, because when we shift first, both the
original function and the shift get stretched, while only the original
function gets stretched when we stretch first.

When we see an expression such as $2f(x)+3$, which transformation should we
start with? The answer here follows nicely from the order of operations. Given
the output value of $f(x)$, we first multiply by 2, causing the vertical
stretch, and then add 3, causing the vertical shift. In other words,
multiplication before addition.

Horizontal transformations are a little trickier to think about. When we write
$g(x)=f(2x+3)$, for example, we have to think about how the inputs to the
function $g$ relate to the inputs to the function $f$. Suppose we know
$f(7)=12$. What input to $g$ would produce that output? In other words, what
value of $x$ will allow $g(x)=f(2x+3)=12$? We would need $2x+3=7$. To solve
for $x$, we would first subtract 3, resulting in a horizontal shift, and then
divide by 2, causing a horizontal compression.

This format ends up being very difficult to work with, because it is usually
much easier to horizontally stretch a graph before shifting. We can work
around this by factoring inside the function.

$$f(bx+p)=f\left(b\left(x+\tfrac{p}{b}\right)\right)$$

Let's work through an example.

$$f(x)=(2x+4)^2$$

We can factor out a 2.

$$f(x)=(2(x+2))^2$$

Now we can more clearly observe a horizontal shift to the left 2 units and a
horizontal compression. Factoring in this way allows us to horizontally
stretch first and then shift horizontally.

{{< callout type="info" >}}
  **Combining transformations.**

  When combining vertical transformations written in the form $af(x)+k$, first
  vertically stretch by $a$ and then vertically shift by $k$.

  When combining horizontal transformations written in the form $f(bx-h)$,
  first horizontally shift by $h$ and then horizontally stretch by
  $\tfrac{1}{b}$.

  When combining horizontal transformations written in the form $f(b(x-h))$,
  first horizontally stretch by $\tfrac{1}{b}$ and then horizontally shift by
  $h$.

  Horizontal and vertical transformations are independent. It does not matter
  whether horizontal or vertical transformations are performed first.
{{< /callout >}}

**Example.** Given the table below for the function $f(x)$, create a table of
values for the function $g(x)=2f(3x)+1$.

| $x$ | 6 | 12 | 18 | 24 |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)$ | 10 | 14 | 15 | 17 |

**Solution.** There are three steps to this transformation, and we will work
from the inside out. Starting with the horizontal transformations, $f(3x)$ is
a horizontal compression by $\tfrac{1}{3}$, which means we multiply each
$x$-value by $\tfrac{1}{3}$.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $f(3x)$ | 10 | 14 | 15 | 17 |

Looking now to the vertical transformations, we start with the vertical
stretch, which will multiply the output values by 2. We apply this to the
previous transformation.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $2f(3x)$ | 20 | 28 | 30 | 34 |

Finally, we can apply the vertical shift, which will add 1 to all the output
values.

| $x$ | 2 | 4 | 6 | 8 |
| :--- | ---: | ---: | ---: | ---: |
| $g(x)=2f(3x)+1$ | 21 | 29 | 31 | 35 |

**Example.** Use the graph of $f(x)$ below to sketch a graph of
$k(x)=f\left(\tfrac{1}{2}x+1\right)-3$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f: the upper half of the circle of radius 2 centred at the origin, from a solid point at (−2, 0) up through (0, 2) and back down to a solid point at (2, 0).","xMin":-6,"xMax":6,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"yLabel":"f(x)","circles":[{"at":[0,0],"r":2,"from":0,"to":180}],"points":[{"at":[-2,0]},{"at":[2,0]}]}'>
<svg role="img" aria-label="The graph of f: the upper half of the circle of radius 2 centred at the origin, from a solid point at (−2, 0) up through (0, 2) and back down to a solid point at (2, 0)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 292" width="340" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="266" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="266" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="266" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="266" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="266" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="266" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="266" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="266" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="266" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="266" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="314" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="314" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="314" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="314" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="314" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="314" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="314" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="314" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="314" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="316" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="170" y1="24" x2="170" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="326,146 316,151 316,141" fill="currentColor"/>
  <polygon points="170,14 175,24 165,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="170,278 165,268 175,268" fill="currentColor"/>
  <text x="324" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="178" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="50" y1="143" x2="50" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="74" y1="143" x2="74" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="98" y1="143" x2="98" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="122" y1="143" x2="122" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="146" y1="143" x2="146" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="194" y1="143" x2="194" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="218" y1="143" x2="218" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="242" y1="143" x2="242" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="290" y1="143" x2="290" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="314" y1="143" x2="314" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="161" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="167" y1="266" x2="173" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="270" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="167" y1="242" x2="173" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="246" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="167" y1="218" x2="173" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="222" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="167" y1="194" x2="173" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="167" y1="170" x2="173" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="167" y1="122" x2="173" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="126" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="167" y1="98" x2="173" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="167" y1="74" x2="173" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="78" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="167" y1="50" x2="173" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="54" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="167" y1="26" x2="173" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <path d="M 218 146 A 48 48 0 0 0 122 146" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="122" cy="146" r="4" fill="currentColor"/>
  <circle cx="218" cy="146" r="4" fill="currentColor"/>
</svg>
</div>

**Solution.** To simplify, let's start by factoring out the inside of the
function.

$$f\left(\tfrac{1}{2}x+1\right)-3=f\left(\tfrac{1}{2}(x+2)\right)-3$$

By factoring the inside, we can first horizontally stretch by 2, as indicated
by the $\tfrac{1}{2}$ on the inside of the function. Remember that twice the
size of 0 is still 0, so the point $(0,2)$ remains at $(0,2)$ while the point
$(2,0)$ will stretch to $(4,0)$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The same half-circle stretched horizontally by 2: a half-ellipse from a solid point at (−4, 0) up through (0, 2) and back down to a solid point at (4, 0).","xMin":-6,"xMax":6,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"yLabel":"f(x)","circles":[{"at":[0,0],"rx":4,"ry":2,"from":0,"to":180}],"points":[{"at":[-4,0]},{"at":[4,0]}]}'>
<svg role="img" aria-label="The same half-circle stretched horizontally by 2: a half-ellipse from a solid point at (−4, 0) up through (0, 2) and back down to a solid point at (4, 0)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 292" width="340" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="266" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="266" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="266" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="266" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="266" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="266" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="266" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="266" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="266" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="266" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="314" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="314" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="314" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="314" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="314" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="314" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="314" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="314" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="314" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="316" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="170" y1="24" x2="170" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="326,146 316,151 316,141" fill="currentColor"/>
  <polygon points="170,14 175,24 165,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="170,278 165,268 175,268" fill="currentColor"/>
  <text x="324" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="178" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="50" y1="143" x2="50" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="74" y1="143" x2="74" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="98" y1="143" x2="98" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="122" y1="143" x2="122" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="146" y1="143" x2="146" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="194" y1="143" x2="194" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="218" y1="143" x2="218" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="242" y1="143" x2="242" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="290" y1="143" x2="290" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="314" y1="143" x2="314" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="161" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="167" y1="266" x2="173" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="270" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="167" y1="242" x2="173" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="246" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="167" y1="218" x2="173" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="222" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="167" y1="194" x2="173" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="167" y1="170" x2="173" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="167" y1="122" x2="173" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="126" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="167" y1="98" x2="173" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="167" y1="74" x2="173" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="78" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="167" y1="50" x2="173" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="54" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="167" y1="26" x2="173" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <path d="M 266 146 A 96 48 0 0 0 74 146" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="74" cy="146" r="4" fill="currentColor"/>
  <circle cx="266" cy="146" r="4" fill="currentColor"/>
</svg>
</div>

Next, we horizontally shift left by 2 units, as indicated by $x+2$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The stretched half-ellipse shifted 2 units left: it runs from a solid point at (−6, 0) up through (−2, 2) and back down to a solid point at (2, 0).","xMin":-7,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"yLabel":"f(x)","circles":[{"at":[-2,0],"rx":4,"ry":2,"from":0,"to":180}],"points":[{"at":[-6,0]},{"at":[2,0]}]}'>
<svg role="img" aria-label="The stretched half-ellipse shifted 2 units left: it runs from a solid point at (−6, 0) up through (−2, 2) and back down to a solid point at (2, 0)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 292" width="340" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="266" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="266" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="266" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="266" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="266" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="266" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="266" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="266" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="266" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="266" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="314" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="314" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="314" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="314" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="314" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="314" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="314" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="314" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="314" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="316" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="194" y1="24" x2="194" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="326,146 316,151 316,141" fill="currentColor"/>
  <polygon points="194,14 199,24 189,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="194,278 189,268 199,268" fill="currentColor"/>
  <text x="324" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="202" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−7</text>
  <line x1="50" y1="143" x2="50" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="161" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="74" y1="143" x2="74" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="98" y1="143" x2="98" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="122" y1="143" x2="122" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="146" y1="143" x2="146" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="170" y1="143" x2="170" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="218" y1="143" x2="218" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="242" y1="143" x2="242" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="290" y1="143" x2="290" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="314" y1="143" x2="314" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="191" y1="266" x2="197" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="270" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="191" y1="242" x2="197" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="246" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="191" y1="218" x2="197" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="222" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="191" y1="194" x2="197" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="191" y1="170" x2="197" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="191" y1="122" x2="197" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="126" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="191" y1="98" x2="197" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="191" y1="74" x2="197" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="78" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="191" y1="50" x2="197" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="54" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="191" y1="26" x2="197" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <path d="M 242 146 A 96 48 0 0 0 50 146" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="50" cy="146" r="4" fill="currentColor"/>
  <circle cx="242" cy="146" r="4" fill="currentColor"/>
</svg>
</div>

Last, we vertically shift down by 3 to complete our sketch, as indicated by
the $-3$ on the outside of the function.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The final graph of k of x: the stretched, shifted half-ellipse moved down 3 units, running from a solid point at (−6, −3) up through (−2, −1) and back down to a solid point at (2, −3).","xMin":-7,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"yLabel":"k(x)","circles":[{"at":[-2,-3],"rx":4,"ry":2,"from":0,"to":180}],"points":[{"at":[-6,-3]},{"at":[2,-3]}]}'>
<svg role="img" aria-label="The final graph of k of x: the stretched, shifted half-ellipse moved down 3 units, running from a solid point at (−6, −3) up through (−2, −1) and back down to a solid point at (2, −3)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 292" width="340" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="266" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="266" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="266" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="266" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="266" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="266" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="266" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="266" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="266" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="266" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="314" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="314" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="314" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="314" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="314" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="314" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="314" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="314" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="314" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="316" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="194" y1="24" x2="194" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="326,146 316,151 316,141" fill="currentColor"/>
  <polygon points="194,14 199,24 189,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="194,278 189,268 199,268" fill="currentColor"/>
  <text x="324" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="202" y="24" font-size="13" fill="currentColor" font-style="italic">k(x)</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−7</text>
  <line x1="50" y1="143" x2="50" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="161" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="74" y1="143" x2="74" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="98" y1="143" x2="98" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="122" y1="143" x2="122" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="146" y1="143" x2="146" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="170" y1="143" x2="170" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="218" y1="143" x2="218" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="242" y1="143" x2="242" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="290" y1="143" x2="290" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="314" y1="143" x2="314" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="191" y1="266" x2="197" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="270" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="191" y1="242" x2="197" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="246" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="191" y1="218" x2="197" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="222" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="191" y1="194" x2="197" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="191" y1="170" x2="197" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="191" y1="122" x2="197" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="126" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="191" y1="98" x2="197" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="191" y1="74" x2="197" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="78" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="191" y1="50" x2="197" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="54" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="191" y1="26" x2="197" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <path d="M 242 218 A 96 48 0 0 0 50 218" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="50" cy="218" r="4" fill="currentColor"/>
  <circle cx="242" cy="218" r="4" fill="currentColor"/>
</svg>
</div>

## Key equations

| Vertical shift | $g(x)=f(x)+k$ (up for $k>0$) |
| :--- | :--- |
| Horizontal shift | $g(x)=f(x-h)$ (right for $h>0$) |
| Vertical reflection | $g(x)=-f(x)$ |
| Horizontal reflection | $g(x)=f(-x)$ |
| Vertical stretch | $g(x)=af(x)$ ($a>1$) |
| Vertical compression | $g(x)=af(x)$ ($0<a<1$) |
| Horizontal stretch | $g(x)=f(bx)$ ($0<b<1$) |
| Horizontal compression | $g(x)=f(bx)$ ($b>1$) |

## Key concepts

- A function can be shifted vertically by adding a constant to the output.
- A function can be shifted horizontally by adding a constant to the input.
- Relating the shift to the context of a problem makes it possible to compare
  and interpret vertical and horizontal shifts.
- Vertical and horizontal shifts are often combined.
- A vertical reflection reflects a graph about the $x$-axis. A graph can be
  reflected vertically by multiplying the output by $-1$.
- A horizontal reflection reflects a graph about the $y$-axis. A graph can be
  reflected horizontally by multiplying the input by $-1$.
- A graph can be reflected both vertically and horizontally. The order in
  which the reflections are applied does not affect the final graph.
- A function presented in tabular form can also be reflected by multiplying
  the values in the input and output rows or columns accordingly.
- A function presented as an equation can be reflected by applying
  transformations one at a time.
- Even functions are symmetric about the $y$-axis, whereas odd functions are
  symmetric about the origin.
- Even functions satisfy the condition $f(x)=f(-x)$.
- Odd functions satisfy the condition $f(x)=-f(-x)$.
- A function can be odd, even, or neither.
- A function can be compressed or stretched vertically by multiplying the
  output by a constant.
- A function can be compressed or stretched horizontally by multiplying the
  input by a constant.
- The order in which different transformations are applied does affect the
  final function. Both vertical and horizontal transformations must be applied
  in the order given. However, a vertical transformation may be combined with
  a horizontal transformation in any order.

## Key terms

**vertical shift** — a transformation that shifts a function's graph up or
down by adding a positive or negative constant to the output. **horizontal
shift** — a transformation that shifts a function's graph left or right by
adding a positive or negative constant to the input. **vertical reflection** —
a transformation that reflects a function's graph across the $x$-axis by
multiplying the output by $-1$. **horizontal reflection** — a transformation
that reflects a function's graph across the $y$-axis by multiplying the input
by $-1$. **even function** — a function whose graph is unchanged by horizontal
reflection, $f(x)=f(-x)$, and is symmetric about the $y$-axis. **odd
function** — a function whose graph is unchanged by combined horizontal and
vertical reflection, $f(x)=-f(-x)$, and is symmetric about the origin.
**vertical stretch** — a transformation that stretches a function's graph
vertically by multiplying the output by a constant $a>1$. **vertical
compression** — a function transformation that compresses the function's graph
vertically by multiplying the output by a constant $0<a<1$. **horizontal
stretch** — a transformation that stretches a function's graph horizontally by
multiplying the input by a constant $0<b<1$. **horizontal compression** — a
transformation that compresses a function's graph horizontally, by multiplying
the input by a constant $b>1$.

---

<small>This section is adapted from [Precalculus 2e, Section 1.5: Transformation of Functions](https://openstax.org/books/precalculus-2e/pages/1-5-transformation-of-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every graph as an accessible inline SVG generated from an explicit formula or point list — the half-circle example is drawn as exact elliptical arcs, and where the source distinguishes a transformed curve by colour this page draws it dashed, since the figures are monochrome; presented every function table as a Markdown table; omitted the opening funhouse-mirror photograph, whose point the surrounding prose already makes, along with the media links and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback, using multiple choice where the answer is a verbal description or a classification, and asking for individual table entries where the source answer is a whole table.</small>
